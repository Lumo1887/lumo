import { NextRequest, NextResponse } from "next/server";
import { stripe, getBaseUrl } from "@/lib/stripe";
import { getModule } from "@/lib/modules";
import { createClient } from "@/lib/supabaseServer";
import { findReferralCodeOwner } from "@/lib/referral";

export async function POST(req: NextRequest) {
  try {
    const { moduleSlug, withdrawalConsent, referralCode } = await req.json();
    const mod = getModule(moduleSlug);

    if (!mod) {
      return NextResponse.json({ error: "Unbekanntes Modul." }, { status: 400 });
    }

    // Digitale Inhalte: Ohne diese ausdrückliche, im Checkout-Button
    // eingeholte Zustimmung (vorzeitiges Erlöschen des Widerrufsrechts nach
    // § 356 Abs. 5 BGB) darf der Zugang nicht sofort freigeschaltet werden.
    if (withdrawalConsent !== true) {
      return NextResponse.json(
        { error: "Zustimmung zum Widerrufshinweis fehlt." },
        { status: 400 }
      );
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

    // Freunde-werben-Freunde: Wurde ein Empfehlungscode mitgeschickt (siehe
    // components/CheckoutButton.tsx, liest ihn aus localStorage), prüfen wir,
    // wem er gehört. Der Freund selbst zahlt den vollen Preis — es geht hier
    // nur darum, im Webhook (nach erfolgreichem Kauf) zu wissen, wem ein
    // Guthaben gutgeschrieben werden soll. Eigene Codes ("Selbst-Empfehlung")
    // und unbekannte Codes werden stillschweigend ignoriert.
    let referrerUserId: string | null = null;
    const trimmedReferralCode =
      typeof referralCode === "string" ? referralCode.trim() : "";

    if (trimmedReferralCode) {
      const owner = await findReferralCodeOwner(trimmedReferralCode);
      if (owner && owner.userId !== user.id) {
        referrerUserId = owner.userId;
      }
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: user.email ?? undefined,
      client_reference_id: user.id,
      // Rabattcode-Feld für Codes, die du selbst im Stripe-Dashboard anlegst
      // (z. B. für Fachschaften/Aktionen). Empfehlungscodes laufen separat
      // (siehe oben) und geben dem Freund selbst keinen Rabatt.
      allow_promotion_codes: true,
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: mod.priceCent,
            product_data: {
              name: `Lumo Learn — ${mod.title}`,
              description: mod.subtitle,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        moduleSlug: mod.slug,
        userId: user.id,
        withdrawalConsent: "true",
        withdrawalConsentAt: new Date().toISOString(),
        ...(referrerUserId ? { referrerUserId } : {}),
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
