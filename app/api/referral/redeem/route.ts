import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { getModule } from "@/lib/modules";
import { redeemReferralCredit } from "@/lib/referral";

// Löst 1 Freunde-werben-Freunde-Guthaben ein und schaltet damit ein Modul
// der Wahl komplett kostenlos frei (kein Stripe-Checkout nötig).
export async function POST(req: NextRequest) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Bitte zuerst einloggen." }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const moduleSlug = body?.moduleSlug as string | undefined;
  const mod = moduleSlug ? getModule(moduleSlug) : undefined;

  if (!mod) {
    return NextResponse.json({ error: "Unbekanntes Modul." }, { status: 400 });
  }

  const { data: existingPurchase } = await supabaseAdmin
    .from("purchases")
    .select("module_slug")
    .eq("user_id", user.id)
    .eq("module_slug", moduleSlug)
    .maybeSingle();

  if (existingPurchase) {
    return NextResponse.json(
      { error: "Du hast dieses Modul bereits freigeschaltet." },
      { status: 400 }
    );
  }

  let redeemed: boolean;
  try {
    redeemed = await redeemReferralCredit(user.id);
  } catch (err) {
    console.error("Fehler beim Einlösen des Empfehlungs-Guthabens:", err);
    return NextResponse.json(
      { error: "Guthaben konnte nicht eingelöst werden." },
      { status: 500 }
    );
  }

  if (!redeemed) {
    return NextResponse.json({ error: "Kein Guthaben vorhanden." }, { status: 400 });
  }

  const { error: grantError } = await supabaseAdmin.from("purchases").upsert(
    {
      user_id: user.id,
      module_slug: moduleSlug,
      stripe_session_id: `referral-credit-${Date.now()}`,
    },
    { onConflict: "user_id,module_slug" }
  );

  if (grantError) {
    console.error("Fehler beim Freischalten per Empfehlungs-Guthaben:", grantError);
    // Guthaben wurde bereits abgezogen, Freischaltung ist aber fehlgeschlagen
    // -> Guthaben zurückbuchen, damit nichts verloren geht.
    await supabaseAdmin.rpc("increment_referral_credits", { p_user_id: user.id });
    return NextResponse.json(
      { error: "Modul konnte nicht freigeschaltet werden." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
