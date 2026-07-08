import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";

// Eigene, einfache Callback-Route nur für den Passwort-vergessen-Link
// (statt über die generische /auth/callback?next=... zu gehen). Grund:
// wenn die Redirect-URL Query-Parameter enthält, kann sie beim Abgleich
// mit der in Supabase hinterlegten "Redirect URLs"-Allowlist durchfallen
// und Supabase leitet dann still auf die Site-URL (Startseite) um, statt
// auf die Passwort-zurücksetzen-Seite. Diese Route hat eine feste, simple
// URL ohne Query-String, die sich in Supabase leicht exakt freischalten
// lässt.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}/reset-password`);
    }
  }

  return NextResponse.redirect(`${origin}/login?error=reset`);
}
