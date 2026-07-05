import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
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
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
