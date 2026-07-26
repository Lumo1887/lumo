"use strict";
import { NextResponse } from "next/server";
import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { stripe, getBaseUrl } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { getResendClient, MAIL_FROM } from "@/lib/resend";
import { getModule } from "@/lib/modules";
import { awardReferralCredit } from "@/lib/referral";
import ReceiptPdfDocument from "@/lib/pdf/ReceiptPdfDocument";
const OWNER_EMAIL = "lumolearn@outlook.de";
const OWNER_NAME = "Carlo Pochert";
const OWNER_ADDRESS_LINES = ["Gerwigstra\xDFe 29", "76131 Karlsruhe", "Deutschland"];
async function createReceipt({
  userId,
  moduleSlug,
  sessionId,
  amountCent,
  moduleTitle,
  moduleSubtitle
}) {
  try {
    const { data: receiptRow, error: insertError } = await supabaseAdmin.from("receipts").insert({
      user_id: userId,
      module_slug: moduleSlug,
      stripe_session_id: sessionId,
      amount_cent: amountCent
    }).select("id").single();
    if (insertError || !receiptRow) {
      console.error("Beleg konnte nicht in Supabase angelegt werden:", insertError);
      return null;
    }
    const receiptNumber = `LUMO-${(/* @__PURE__ */ new Date()).getFullYear()}-${String(receiptRow.id).padStart(6, "0")}`;
    const amountLabel = `${(amountCent / 100).toFixed(2).replace(".", ",")} \u20AC`;
    const data = {
      receiptNumber,
      issueDate: (/* @__PURE__ */ new Date()).toLocaleDateString("de-DE"),
      sellerName: OWNER_NAME,
      sellerAddressLines: OWNER_ADDRESS_LINES,
      sellerEmail: OWNER_EMAIL,
      sellerTaxNumber: process.env.OWNER_TAX_NUMBER || void 0,
      description: `Zugang zum Modul \u201E${moduleTitle}" (${moduleSubtitle}) \u2014 Skript, \xDCbungstool, Karteikarten, Klausursimulation, KI-Tutor`,
      amountLabel,
      paymentReference: sessionId
    };
    const buffer = await renderToBuffer(
      React.createElement(ReceiptPdfDocument, { data })
    );
    const storagePath = `${userId}/${receiptNumber}.pdf`;
    const { error: uploadError } = await supabaseAdmin.storage.from("receipts").upload(storagePath, buffer, { contentType: "application/pdf", upsert: true });
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
export const runtime = "nodejs";
export async function POST(req) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: "Webhook nicht konfiguriert (STRIPE_WEBHOOK_SECRET fehlt)." },
      { status: 400 }
    );
  }
  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Ung\xFCltige Stripe-Webhook-Signatur:", err);
    return NextResponse.json({ error: "Ung\xFCltige Signatur." }, { status: 400 });
  }
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
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
          stripe_session_id: session.id
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
      let receipt = null;
      if (mod) {
        receipt = await createReceipt({
          userId,
          moduleSlug,
          sessionId: session.id,
          amountCent: session.amount_total ?? mod.priceCent,
          moduleTitle: mod.title,
          moduleSubtitle: mod.subtitle
        });
      }
      const resend = getResendClient();
      const customerEmail = session.customer_details?.email ?? session.customer_email ?? void 0;
      if (resend && customerEmail && mod) {
        const baseUrl = getBaseUrl();
        const priceEur = (mod.priceCent / 100).toFixed(2).replace(".", ",");
        const receiptAttachment = receipt ? [{ filename: `${receipt.receiptNumber}.pdf`, content: receipt.buffer }] : void 0;
        const receiptNote = receipt ? `

Den Zahlungsbeleg (${receipt.receiptNumber}) findest du im Anhang \u2014 f\xFCr deine eigenen Unterlagen.` : "";
        const results = await Promise.allSettled([
          resend.emails.send({
            from: MAIL_FROM,
            to: customerEmail,
            subject: `Dein Zugang zu ${mod.title} ist freigeschaltet \u2014 Lumo Learn`,
            text: `Hallo,

vielen Dank f\xFCr deinen Kauf! Dein Zugang zu "${mod.title}" (${mod.subtitle}) ist ab sofort freigeschaltet.

Bezahlter Betrag: ${priceEur} \u20AC${receiptNote}

Skript \xF6ffnen: ${baseUrl}/module/${mod.slug}/skript
\xDCbungstool \xF6ffnen: ${baseUrl}/module/${mod.slug}/uebungstool

\xDCbrigens: Kennst du jemanden, der/die auch f\xFCr ein Uni-Modul lernen muss? In deinem Profil (${baseUrl}/profile) findest du deinen pers\xF6nlichen Empfehlungslink \u2014 f\xFCr jeden Freund, der dar\xFCber kauft, bekommst du selbst ein komplettes Modul gratis.

Bei Fragen antworte einfach auf diese E-Mail oder schreib an ${OWNER_EMAIL}.

Viel Erfolg beim Lernen!
Lumo Learn`,
            attachments: receiptAttachment
          }),
          resend.emails.send({
            from: MAIL_FROM,
            to: OWNER_EMAIL,
            subject: `Neuer Kauf: ${mod.title}${receipt ? ` (Beleg ${receipt.receiptNumber})` : ""}`,
            text: `Neuer Kauf eingegangen.

Modul: ${mod.title}
Kunde: ${customerEmail}
Betrag: ${priceEur} \u20AC
Stripe-Session: ${session.id}
Nutzer-ID: ${userId}${receipt ? `
Beleg-Nr.: ${receipt.receiptNumber}` : ""}`,
            attachments: receiptAttachment
          })
        ]);
        results.forEach((result, i) => {
          if (result.status === "rejected") {
            console.error(
              i === 0 ? "Kaufbest\xE4tigungsmail an Kunde fehlgeschlagen:" : "Kauf-Benachrichtigungsmail an Betreiber fehlgeschlagen:",
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
          "Kaufbest\xE4tigungsmail \xFCbersprungen: keine Kunden-E-Mail in der Session gefunden."
        );
      }
      const referrerUserId = session.metadata?.referrerUserId;
      if (referrerUserId) {
        try {
          await awardReferralCredit(referrerUserId);
          console.log(
            `[stripe webhook] Empfehlungs-Guthaben gutgeschrieben an Nutzer ${referrerUserId}`
          );
          if (resend) {
            const { data: referrerData } = await supabaseAdmin.auth.admin.getUserById(referrerUserId);
            const referrerEmail = referrerData?.user?.email;
            if (referrerEmail) {
              const baseUrl = getBaseUrl();
              const rewardResult = await resend.emails.send({
                from: MAIL_FROM,
                to: referrerEmail,
                subject: "Dein Freund hat gekauft \u2014 1 Modul gratis f\xFCr dich! \u{1F389}",
                text: `Hallo,

jemand hat gerade mit deinem Empfehlungscode bei Lumo Learn gekauft \u2014 danke, dass du uns weiterempfiehlst!

Als Dankesch\xF6n hast du jetzt 1 komplettes Modul deiner Wahl gratis. W\xE4hl es in deinem Profil aus: ${baseUrl}/profile

Viele Gr\xFC\xDFe
Lumo Learn`
              });
              if (rewardResult.error) {
                console.error("Resend-Fehler (Empfehlungs-Belohnung):", rewardResult.error);
              }
            } else {
              console.error(
                "Empfehlungs-Benachrichtigung \xFCbersprungen: Werber-E-Mail nicht gefunden."
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
