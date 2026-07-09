import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";
import { getReferralCredits } from "@/lib/referral";

// Liefert, wie viele Freunde-werben-Freunde-Guthaben die eingeloggte Person
// noch hat (einlösbar gegen ein beliebiges Modul, siehe .../redeem).
export async function GET() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Bitte zuerst einloggen." }, { status: 401 });
  }

  try {
    const credits = await getReferralCredits(user.id);
    return NextResponse.json({ credits });
  } catch (err) {
    console.error("Fehler beim Laden des Empfehlungs-Guthabens:", err);
    return NextResponse.json(
      { error: "Guthaben konnte nicht geladen werden." },
      { status: 500 }
    );
  }
}
