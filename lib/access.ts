"use client";

// Sehr einfache clientseitige Zugriffs-Markierung nach erfolgreichem Checkout.
//
// WICHTIG: Das ist nur ein Platzhalter-Mechanismus für dieses Prototyp-Setup.
// In einer echten Produktivversion sollte der Zugriff serverseitig anhand
// eines Nutzerkontos + Datenbank-Eintrags geprüft werden (siehe README,
// Abschnitt "Nächste Schritte: echte Zugriffskontrolle").

const PREFIX = "sc_access_";

export function hasAccess(moduleSlug: string): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(PREFIX + moduleSlug) === "true";
}

export function grantAccess(moduleSlug: string): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(PREFIX + moduleSlug, "true");
}
