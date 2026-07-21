import { NextResponse } from "next/server";
import type { EmailOtpType } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabaseServer";

// Geräte-/App-unabhängige Bestätigungs-Route für E-Mail-Links (aktuell primär
// für "Passwort zurücksetzen" genutzt, funktioniert aber generisch für jeden
// Supabase-OTP-Typ). Im Unterschied zu /auth/reset-callback (PKCE-"code",
// braucht ein passendes code_verifier-Cookie im selben Browser/Gerät, in dem
// der Link angefordert wurde) verifiziert diese Route einen token_hash direkt
// serverseitig gegen Supabase — ganz ohne Cookie-Abgleich. Der Link
// funktioniert deshalb auch, wenn er in einer anderen App/einem anderen Gerät
// geöffnet wird als dem, in dem "Passwort vergessen" angeklickt wurde.
//
// Damit das greift, muss im Supabase-Dashboard unter Authentication ->
// Email Templates -> "Reset Password" die URL im Template auf
//   {{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=recovery
// umgestellt werden (statt der Standard-{{ .ConfirmationURL }}, die den
// PKCE-"code"-Link erzeugt).
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/reset-password";

  if (tokenHash && type) {
    const supabase = createClient();
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash: tokenHash,
    });
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/login?error=reset`);
}
