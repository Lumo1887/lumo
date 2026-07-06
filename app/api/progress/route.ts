import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";

export async function GET(request: NextRequest) {
  const moduleSlug = request.nextUrl.searchParams.get("moduleSlug");
  if (!moduleSlug) {
    return NextResponse.json({ error: "moduleSlug fehlt." }, { status: 400 });
  }

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ sectionId: null, sectionIndex: 0 });
  }

  const { data } = await supabase
    .from("progress")
    .select("section_id, section_index")
    .eq("user_id", user.id)
    .eq("module_slug", moduleSlug)
    .maybeSingle();

  return NextResponse.json({
    sectionId: data?.section_id ?? null,
    sectionIndex: data?.section_index ?? 0,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const moduleSlug = body?.moduleSlug as string | undefined;
  const sectionId = body?.sectionId as string | undefined;
  const sectionIndex = body?.sectionIndex as number | undefined;

  if (!moduleSlug || !sectionId || typeof sectionIndex !== "number") {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // Kein Login -> Fortschritt einfach nicht speichern, aber auch keinen
    // Fehler an den Client melden (Vorschau-Leser sollen nicht gestört werden).
    return NextResponse.json({ ok: true });
  }

  // Nur speichern, wenn der neue Abschnitt weiter ist als der bisher
  // gespeicherte — verhindert, dass Zurückscrollen den Fortschritt zurücksetzt.
  const { data: existing } = await supabase
    .from("progress")
    .select("section_index")
    .eq("user_id", user.id)
    .eq("module_slug", moduleSlug)
    .maybeSingle();

  if (existing && existing.section_index >= sectionIndex) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  const { error } = await supabase.from("progress").upsert(
    {
      user_id: user.id,
      module_slug: moduleSlug,
      section_id: sectionId,
      section_index: sectionIndex,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,module_slug" }
  );

  if (error) {
    console.error("Fehler beim Speichern des Fortschritts:", error);
    return NextResponse.json({ error: "Speichern fehlgeschlagen." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
