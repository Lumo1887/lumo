import { NextRequest, NextResponse } from "next/server";
import { stripe, getBaseUrl } from "@/lib/stripe";
import { getModule } from "@/lib/modules";
import { createClient } from "@/lib/supabaseServer";

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

    // Nutzer muss eingeloggt sein, damit wir den Kauf seinem Konto zuordnen
    // können (siehe app/api/webhooks/stripe/route.ts).
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Bitte zuerst einloggen.", requiresLogin: true },
        { status: 401 }
      );
    }

    const baseUrl = getBaseUrl();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: user.email ?? undefined,
      client_reference_id: user.id,
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: mod.priceCent,
            product_data: {
              name: `Lumo — ${mod.title}`,
              description: mod.subtitle,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        moduleSlug: mod.slug,
        userId: user.id,
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
