import { NextRequest, NextResponse } from "next/server";
import { stripe, getBaseUrl } from "@/lib/stripe";
import { getModule } from "@/lib/modules";

export async function POST(req: NextRequest) {
  try {
    const { moduleSlug } = await req.json();
    const mod = getModule(moduleSlug);

    if (!mod) {
      return NextResponse.json({ error: "Unbekanntes Modul." }, { status: 400 });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        {
          error:
            "STRIPE_SECRET_KEY ist nicht gesetzt. Trage deine Stripe-API-Keys in .env.local ein (siehe .env.example).",
        },
        { status: 500 }
      );
    }

    const baseUrl = getBaseUrl();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: mod.priceCent,
            product_data: {
              name: `Klausurkompass — ${mod.title}`,
              description: mod.subtitle,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        moduleSlug: mod.slug,
      },
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Fehler beim Erstellen der Checkout Session:", err);
    return NextResponse.json(
      { error: "Checkout konnte nicht gestartet werden." },
      { status: 500 }
    );
  }
}
