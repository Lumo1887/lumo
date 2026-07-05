import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

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

      // -----------------------------------------------------------------
      // TODO (nächster Schritt für den Produktivbetrieb):
      // Hier den Kauf persistent speichern, z. B. in einer Datenbank:
      //
      //   await db.purchase.create({
      //     data: {
      //       email: session.customer_details?.email,
      //       moduleSlug,
      //       stripeSessionId: session.id,
      //       amountTotal: session.amount_total,
      //     },
      //   });
      //
      // Aktuell wird der Zugriff stattdessen vereinfacht clientseitig über
      // localStorage freigeschaltet (siehe app/checkout/success/page.tsx und
      // lib/access.ts). Das reicht für einen Prototypen, ist aber nicht
      // sicher/robust für echten Verkauf (kein Gerätewechsel, kein Nachweis).
      // -----------------------------------------------------------------
      console.log(
        `[stripe webhook] Zahlung abgeschlossen für Modul "${moduleSlug}", Session ${session.id}`
      );
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
