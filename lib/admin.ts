// E-Mail-Adressen, die Zugriff auf den Admin-Bereich (/admin) haben. Diese
// Datei enthält keine Geheimnisse (nur die E-Mail selbst) und darf daher
// sowohl server- als auch client-seitig importiert werden. Die eigentliche
// Durchsetzung (was ein Admin tun darf) passiert immer serverseitig in den
// /api/admin/*-Routen — die client-seitige Prüfung dient nur dazu, den
// Admin-Link/die Admin-Seite gar nicht erst anzuzeigen.
export const ADMIN_EMAILS = ["carlopochert@gmail.com"];

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.some((e) => e.toLowerCase() === email.toLowerCase());
}
