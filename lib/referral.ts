import { supabaseAdmin } from "@/lib/supabaseAdmin";

// Zeichen ohne leicht verwechselbare Zeichen (0/O, 1/I/L), damit ein
// abgetippter oder laut vorgelesener Code möglichst fehlerfrei ankommt.
const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const CODE_LENGTH = 7;

function generateCandidateCode(): string {
  let code = "";
  for (let i = 0; i < CODE_LENGTH; i++) {
    code += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
  }
  return code;
}

/**
 * Liefert den persönlichen Empfehlungscode einer Nutzerin/eines Nutzers,
 * legt bei Bedarf einen neuen an (kollisionssicher durch den unique-Constraint
 * auf "code" in der Datenbank — bei einem Konflikt wird einfach ein neuer
 * Kandidat probiert).
 */
export async function getOrCreateReferralCode(userId: string): Promise<string> {
  const { data: existing, error: selectError } = await supabaseAdmin
    .from("referral_codes")
    .select("code")
    .eq("user_id", userId)
    .maybeSingle();

  if (selectError) {
    throw new Error(`Empfehlungscode konnte nicht geladen werden: ${selectError.message}`);
  }
  if (existing) return existing.code;

  // Bis zu 5 Versuche, falls der zufällig gewürfelte Code bereits vergeben
  // ist (bei ~30^7 möglichen Codes praktisch nie mehr als ein Versuch nötig).
  for (let attempt = 0; attempt < 5; attempt++) {
    const candidate = generateCandidateCode();
    const { data: inserted, error: insertError } = await supabaseAdmin
      .from("referral_codes")
      .insert({ user_id: userId, code: candidate })
      .select("code")
      .single();

    if (!insertError && inserted) return inserted.code;

    // Unique-Verletzung (Code oder user_id schon vorhanden) -> nochmal
    // probieren bzw. den inzwischen von einem parallelen Request angelegten
    // Code laden.
    const { data: raceExisting } = await supabaseAdmin
      .from("referral_codes")
      .select("code")
      .eq("user_id", userId)
      .maybeSingle();
    if (raceExisting) return raceExisting.code;
  }

  throw new Error("Empfehlungscode konnte nach mehreren Versuchen nicht angelegt werden.");
}

export interface ReferralCodeOwner {
  userId: string;
  code: string;
}

/**
 * Sucht den Besitzer eines eingegebenen Empfehlungscodes (case-insensitive,
 * da Nutzer:innen Codes oft in Kleinbuchstaben abtippen).
 */
export async function findReferralCodeOwner(
  rawCode: string
): Promise<ReferralCodeOwner | null> {
  const code = rawCode.trim().toUpperCase();
  if (!code) return null;

  const { data, error } = await supabaseAdmin
    .from("referral_codes")
    .select("user_id, code")
    .eq("code", code)
    .maybeSingle();

  if (error || !data) return null;
  return { userId: data.user_id, code: data.code };
}
