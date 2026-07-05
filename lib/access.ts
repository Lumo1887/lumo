"use client";

// Fragt beim Server (app/api/access/route.ts) ab, ob der Nutzer eingeloggt
// ist und welche Module er gekauft hat. Die eigentliche Wahrheit liegt in
// der Supabase-Datenbank (Tabelle "purchases"), nicht mehr im Browser.
export interface AccessInfo {
  loggedIn: boolean;
  email: string | null;
  purchases: string[];
}

export async function fetchAccess(): Promise<AccessInfo> {
  try {
    const res = await fetch("/api/access", { cache: "no-store" });
    if (!res.ok) return { loggedIn: false, email: null, purchases: [] };
    return await res.json();
  } catch {
    return { loggedIn: false, email: null, purchases: [] };
  }
}
