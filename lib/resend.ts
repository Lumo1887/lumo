import { Resend } from "resend";

// E-Mail-Absender für Transaktions-E-Mails (z. B. Widerrufsbestätigungen).
// Gibt bei fehlendem API-Key "null" zurück statt einen Fehler zu werfen,
// damit das Projekt auch ohne konfigurierten Resend-Account lokal weiterhin
// startet — der Aufrufer entscheidet dann selbst, ob er den Versand
// überspringt oder einen Fehler meldet.
export function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

// Absenderadresse für ausgehende E-Mails. Muss zu einer bei Resend
// verifizierten Domain gehören (siehe RESEND_SETUP.md).
export const MAIL_FROM =
  process.env.RESEND_FROM_EMAIL ?? "Lumo Learn <no-reply@lumo-learn.de>";
