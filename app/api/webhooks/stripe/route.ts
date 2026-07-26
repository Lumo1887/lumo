import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { stripe, getBaseUrl } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { getResendClient, MAIL_FROM } from "@/lib/resend";
import { getModule } from "@/lib/modules";
import { awardReferralCredit } from "@/lib/referral";
import ReceiptPdfDocument, { type ReceiptData } from "@/lib/pdf/ReceiptPdfDocument";
import Stripe from "stripe";

const OWNER_EMAIL = "lumolearn@outlook.de";
const OWNER_NAME = "Carlo Pochert";
const OWNER_ADDRESS_LINES = ["Gerwigstraße 29", "76131 Karlsruhe", "Deutschland"];

// Erzeugt für einen abgeschlossenen Kauf eine Kleinbetragsrechnung (§33
// UStDV, siehe ReceiptPdfDocument.tsx) als PDF, legt einen Datensatz in der
// Supabase-Tabelle "receipts" an (fortlaufende Beleg-Nr. über die
// bigserial-ID) und lädt das PDF zusätzlich in den privaten Storage-Bucket
// "receipts" hoch — das ist die dauerhafte Ablage fürs eigene
// Buchhaltungsarchiv, unabhängig davon, ob der E-Mail-Versand klappt.
// "best effort": Schlägt irgendein Teilschritt fehl, wird das nur geloggt,
// der bereits gespeicherte Kauf bleibt davon unberührt.
async function createReceipt({
  userId,
  moduleSlug,
  sessionId,
  amountCent,
  moduleTitle,
  moduleSubtitle,
}: {
  userId: string;
  moduleSlug: string;
  sessionId: string;
  amountCent: number;
  moduleTitle: string;
  moduleSubtitle: string;
}): Promise<{ receiptNumber: string; buffer: Buffer } | null> {
  try {
    const { data: receiptRow, error: insertError } = await supabaseAdmin
      .from("receipts")
      .insert({
        user_id: userId,
        module_slug: moduleSlug,
        stripe_session_id: sessionId,
        amount_cent: amountCent,
      })
      .select("id")
      .single();

    if (insertError || !receiptRow) {
      console.error("Beleg konnte nicht in Supabase angelegt werden:", insertError);
      return null;
    }

    const receiptNumber = `LUMO-${new Date().getFullYear()}-${String(receiptRow.id).padStart(6, "0")}`;
    const amountLabel = `${(amountCent / 100).toFixed(2).replace(".", ",")} €`;

    const data: ReceiptData = {
      receiptNumber,
      issueDate: new Date().toLocaleDateString("de-DE"),
      sellerName: OWNER_NAME,
      sellerAddressLines: OWNER_ADDRESS_LINES,
      sellerEmail: OWNER_EMAIL,
      sellerTaxNumber: process.env.OWNER_TAX_NUMBER || undefined,
      description: `Zugang zum Modul „${moduleTitle}" (${moduleSubtitle}) — Skript, Übungstool, Karteikarten, Klausursimulation, KI-Tutor`,
      amountLabel,
      paymentReference: sessionId,
    };

    // @react-pdf/renderer erwartet laut Typdefinition ein <Document> direkt,
    // ReceiptPdfDocument ist aber eine Wrapper-Komponente — funktioniert zur
    // Laufzeit, TypeScript beschwert sich aber (siehe gleiches Muster in
    // formelsammlung-pdf/route.ts), daher bewusstes "as any".
    const buffer = await renderToBuffer(
      React.createElement(ReceiptPdfDocument, { data }) as any
    );

    const storagePath = `${userId}/${receiptNumber}.pdf`;
    const { error: uploadError } = await supabaseAdmin.storage
      .from("receipts")
      .upload(storagePath, buffer, { contentType: "application/pdf", upsert: true });

    if (uploadError) {
      console.error("Beleg-PDF konnte nicht in Supabase Storage hochgeladen werden:", uploadError);
    } else {
      await supabaseAdmin.from("receipts").update({ storage_path: storagePath }).eq("id", receiptRow.id);
    }

    return { receiptNumber, buffer };
  } catch (err) {
    console.error("Fehler bei der Belegerstellung:", err);
    return null;
  }
}

// Stripe benötigt den rohen Request-Body, um die Signatur zu prüfen.
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: "Webhook nicht konfiguriert (STRIPE_WEBHOOK_SECRET fehlt)." },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Ungültige Stripe-Webhook-Signatur:", err);
    return NextResponse.json({ error: "Ungültige Signatur." }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const moduleSlug = session.metadata?.moduleSlug;
      const userId = session.metadata?.userId ?? session.client_reference_id;

      if (!moduleSlug || !userId) {
        console.error(
          "Webhook: moduleSlug oder userId fehlt in der Session-Metadata."
        );
        break;
      }

      const { error } = await supabaseAdmin.from("purchases").upsert(
        {
          user_id: userId,
          module_slug: moduleSlug,
          stripe_session_id: session.id,
        },
        { onConflict: "user_id,module_slug" }
      );

      if (error) {
        console.error("Fehler beim Speichern des Kaufs in Supabase:", error);
        return NextResponse.json(
          { error: "Kauf konnte nicht gespeichert werden." },
          { status: 500 }
        );
      }

      console.log(
        `[stripe webhook] Kauf gespeichert: Nutzer ${userId}, Modul "${moduleSlug}"`
      );

      const mod = getModule(moduleSlug);

      // Beleg (Kleinbetragsrechnung) erzeugen und dauerhaft in Supabase
      // Storage ablegen — unabhängig vom E-Mail-Versand, damit das
      // Buchhaltungsarchiv auch dann existiert, wenn z. B. Resend gerade
      // nicht erreichbar ist. amount_total statt mod.priceCent, weil das
      // den tatsächlich gezahlten Betrag abbildet (z. B. bei eingelöstem
      // Empfehlungs-/Promo-Code).
      let receipt: { receiptNumber: string; buffer: Buffer } | null = null;
      if (mod) {
        receipt = await createReceipt({
          userId,
          moduleSlug,
          sessionId: session.id,
          amountCent: session.amount_total ?? mod.priceCent,
          moduleTitle: mod.title,
          moduleSubtitle: mod.subtitle,
        });
      }

      // Kaufbestätigungsmail — "best effort": Schlägt der Versand fehl (z. B.
      // weil Resend nicht konfiguriert ist), soll das den bereits
      // gespeicherten Kauf nicht rückgängig machen oder den Webhook wie ein
      // Fehler aussehen lassen (Stripe würde ihn sonst wiederholt zustellen).
      // Wichtig: awaiten statt fire-and-forget, da die Serverless-Function
      // sonst beendet werden kann, bevor die Mail rausgegangen ist.
      const resend = getResendClient();
      const customerEmail =
        session.customer_details?.email ?? session.customer_email ?? undefined;

      if (resend && customerEmail && mod) {
        const baseUrl = getBaseUrl();
        const priceEur = (mod.priceCent / 100).toFixed(2).replace(".", ",");
        const receiptAttachment = receipt
          ? [{ filename: `${receipt.receiptNumber}.pdf`, content: receipt.buffer }]
          : undefined;
        const receiptNote = receipt
          ? `\n\nDen Zahlungsbeleg (${receipt.receiptNumber}) findest du im Anhang — für deine eigenen Unterlagen.`
          : "";

        const results = await Promise.allSettled([
          resend.emails.send({
            from: MAIL_FROM,
            to: customerEmail,
            subject: `Dein Zugang zu ${mod.title} ist freigeschaltet — Lumo Learn`,
            text: `Hallo,\n\nvielen Dank für deinen Kauf! Dein Zugang zu "${mod.title}" (${mod.subtitle}) ist ab sofort freigeschaltet.\n\nBezahlter Betrag: ${priceEur} €${receiptNote}\n\nSkript öffnen: ${baseUrl}/module/${mod.slug}/skript\nÜbungstool öffnen: ${baseUrl}/module/${mod.slug}/uebungstool\n\nÜbrigens: Kennst du jemanden, der/die auch für ein Uni-Modul lernen muss? In deinem Profil (${baseUrl}/profile) findest du deinen persönlichen Empfehlungslink — für jeden Freund, der darüber kauft, bekommst du selbst ein komplettes Modul gratis.\n\nBei Fragen antworte einfach auf diese E-Mail oder schreib an ${OWNER_EMAIL}.\n\nViel Erfolg beim Lernen!\nLumo Learn`,
            attachments: receiptAttachment,
          }),
          resend.emails.send({
            from: MAIL_FROM,
            to: OWNER_EMAIL,
            subject: `Neuer Kauf: ${mod.title}${receipt ? ` (Beleg ${receipt.receiptNumber})` : ""}`,
            text: `Neuer Kauf eingegangen.\n\nModul: ${mod.title}\nKunde: ${customerEmail}\nBetrag: ${priceEur} €\nStripe-Session: ${session.id}\nNutzer-ID: ${userId}${receipt ? `\nBeleg-Nr.: ${receipt.receiptNumber}` : ""}`,
            attachments: receiptAttachment,
          }),
        ]);

        results.forEach((result, i) => {
          if (result.status === "rejected") {
            console.error(
              i === 0
                ? "Kaufbestätigungsmail an Kunde fehlgeschlagen:"
                : "Kauf-Benachrichtigungsmail an Betreiber fehlgeschlagen:",
              result.reason
            );
          } else if (result.value?.error) {
            console.error(
              i === 0 ? "Resend-Fehler (Kunde):" : "Resend-Fehler (Betreiber):",
              result.value.error
            );
          }
        });
      } else if (!customerEmail) {
        console.error(
          "Kaufbestätigungsmail übersprungen: keine Kunden-E-Mail in der Session gefunden."
        );
      }

      // Freunde-werben-Freunde: Wurde beim Checkout ein gültiger
      // Empfehlungscode benutzt (siehe app/api/checkout/route.ts), bekommt
      // die werbende Person jetzt 1 Guthaben gutgeschrieben (einlösbar gegen
      // ein beliebiges Modul ihrer Wahl im Profil, siehe
      // app/api/referral/redeem/route.ts). Der Freund selbst zahlt den
      // vollen Preis. Komplett "best effort" — schlägt das fehl, bleibt der
      // bereits abgeschlossene Kauf trotzdem unangetastet.
      const referrerUserId = session.metadata?.referrerUserId;

      if (referrerUserId) {
        try {
          await awardReferralCredit(referrerUserId);
          console.log(
            `[stripe webhook] Empfehlungs-Guthaben gutgeschrieben an Nutzer ${referrerUserId}`
          );

          if (resend) {
            const { data: referrerData } =
              await supabaseAdmin.auth.admin.getUserById(referrerUserId);
            const referrerEmail = referrerData?.user?.email;

            if (referrerEmail) {
              const baseUrl = getBaseUrl();
              const rewardResult = await resend.emails.send({
                from: MAIL_FROM,
                to: referrerEmail,
                subject: "Dein Freund hat gekauft — 1 Modul gratis für dich! 🎉",
                text: `Hallo,\n\njemand hat gerade mit deinem Empfehlungscode bei Lumo Learn gekauft — danke, dass du uns weiterempfiehlst!\n\nAls Dankeschön hast du jetzt 1 komplettes Modul deiner Wahl gratis. Wähl es in deinem Profil aus: ${baseUrl}/profile\n\nViele Grüße\nLumo Learn`,
              });

              if (rewardResult.error) {
                console.error("Resend-Fehler (Empfehlungs-Belohnung):", rewardResult.error);
              }
            } else {
              console.error(
                "Empfehlungs-Benachrichtigung übersprungen: Werber-E-Mail nicht gefunden."
              );
            }
          }
        } catch (referralRewardErr) {
          console.error(
            "Fehler beim Gutschreiben/Verschicken der Empfehlungs-Belohnung:",
            referralRewardErr
          );
        }
      }
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
