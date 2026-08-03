import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { getModule } from "@/lib/modules";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Trägt eine E-Mail-Adresse für Benachrichtigung ein, sobald ein noch nicht
// verfügbares Modul live geht. Zweckgebunden auf genau dieses eine Modul
// (kein allgemeiner Newsletter) — siehe module-interest-table.sql.
export async function POST(request: NextRequest) {
  let body: { moduleSlug?: string; email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const moduleSlug = body.moduleSlug?.trim();
  const email = body.email?.trim().toLowerCase();

  if (!moduleSlug || !email || !EMAIL_REGEX.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Bitte eine gültige E-Mail-Adresse angeben." }, { status: 400 });
  }

  const mod = getModule(moduleSlug);
  if (!mod) {
    return NextResponse.json({ error: "Unbekanntes Modul." }, { status: 404 });
  }
  if (mod.status === "active") {
    return NextResponse.json({ error: "Dieses Modul ist bereits verfügbar." }, { status: 400 });
  }

  const { error } = await supabaseAdmin
    .from("module_interest")
    .upsert({ module_slug: moduleSlug, email }, { onConflict: "module_slug,email" });

  if (error) {
    console.error("Fehler beim Speichern des Modul-Interesses:", error);
    return NextResponse.json({ error: "Eintragen fehlgeschlagen. Bitte später erneut versuchen." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
