import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";
import { getOrCreateReferralCode } from "@/lib/referral";

// Liefert den persönlichen Empfehlungscode der eingeloggten Person (legt ihn
// beim ersten Aufruf an). Wird vom Dashboard-Banner abgefragt.
export async function GET() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Bitte zuerst einloggen." }, { status: 401 });
  }

  try {
    const code = await getOrCreateReferralCode(user.id);
    return NextResponse.json({ code });
  } catch (err) {
    console.error("Fehler beim Laden/Anlegen des Empfehlungscodes:", err);
    return NextResponse.json(
      { error: "Empfehlungscode konnte nicht geladen werden." },
      { status: 500 }
    );
  }
}
