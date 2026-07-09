import { NextRequest, NextResponse } from "next/server";
import { stripe, getBaseUrl } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { getResendClient, MAIL_FROM } from "@/lib/resend";
import { getModule } from "@/lib/modules";
import Stripe from "stripe";

const OWNER_EMAIL = "lumolearn@outlook.de";

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

      // Kaufbestätigungsmail — "best effort": Schlägt der Versand fehl (z. B.
      // weil Resend nicht konfiguriert ist), soll das den bereits
      // gespeicherten Kauf nicht rückgängig machen oder den Webhook wie ein
      // Fehler aussehen lassen (Stripe würde ihn sonst wiederholt zustellen).
      // Wichtig: awaiten statt fire-and-forget, da die Serverless-Function
      // sonst beendet werden kann, bevor die Mail rausgegangen ist.
      const resend = getResendClient();
      const customerEmail =
        session.customer_details?.email ?? session.customer_email ?? undefined;
      const mod = getModule(moduleSlug);

      if (resend && customerEmail && mod) {
        const baseUrl = getBaseUrl();
        const priceEur = (mod.priceCent / 100).toFixed(2).replace(".", ",");

        const results = await Promise.allSettled([
          resend.emails.send({
            from: MAIL_FROM,
            to: customerEmail,
            subject: `Dein Zugang zu ${mod.title} ist freigeschaltet — Lumo`,
            text: `Hallo,\n\nvielen Dank für deinen Kauf! Dein Zugang zu "${mod.title}" (${mod.subtitle}) ist ab sofort freigeschaltet.\n\nBezahlter Betrag: ${priceEur} €\n\nSkript öffnen: ${baseUrl}/module/${mod.slug}/skript\nÜbungstool öffnen: ${baseUrl}/module/${mod.slug}/uebungstool\n\nBei Fragen antworte einfach auf diese E-Mail oder schreib an ${OWNER_EMAIL}.\n\nViel Erfolg beim Lernen!\nLumo`,
          }),
          resend.emails.send({
            from: MAIL_FROM,
            to: OWNER_EMAIL,
            subject: `Neuer Kauf: ${mod.title}`,
            text: `Neuer Kauf eingegangen.\n\nModul: ${mod.title}\nKunde: ${customerEmail}\nBetrag: ${priceEur} €\nStripe-Session: ${session.id}\nNutzer-ID: ${userId}`,
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
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
