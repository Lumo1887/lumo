import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";

// Gibt zurück, ob der aktuelle Besucher eingeloggt ist und welche Module er
// bereits gekauft hat. Wird von den Client-Komponenten (Dashboard,
// LockedSection, QuizPlayer) abgefragt, um Freischaltungen anzuzeigen.
export async function GET() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ loggedIn: false, email: null, purchases: [] });
  }

  const { data, error } = await supabase
    .from("purchases")
    .select("module_slug")
    .eq("user_id", user.id);

  if (error) {
    console.error("Fehler beim Laden der Käufe:", error);
    return NextResponse.json({ loggedIn: true, email: user.email, purchases: [] });
  }

  return NextResponse.json({
    loggedIn: true,
    email: user.email,
    purchases: (data ?? []).map((row) => row.module_slug),
  });
}
