import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";

const VALID_BOXES = new Set([1, 2, 3, 4, 5]);

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
    // Nicht eingeloggt -> kein gespeicherter Fortschritt, aber kein Fehler
    // (Vorschau-Leser:innen sollen die Karteikarten trotzdem sehen können).
    return NextResponse.json({ cards: [] });
  }

  const { data, error } = await supabase
    .from("flashcard_progress")
    .select("card_key, box, due_at")
    .eq("user_id", user.id)
    .eq("module_slug", moduleSlug);

  if (error) {
    console.error("Fehler beim Laden des Karteikarten-Fortschritts:", error);
    return NextResponse.json({ cards: [] });
  }

  return NextResponse.json({
    cards: (data ?? []).map((row) => ({
      cardKey: row.card_key,
      box: row.box,
      dueAt: row.due_at,
    })),
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const moduleSlug = body?.moduleSlug as string | undefined;
  const cardKey = body?.cardKey as string | undefined;
  const box = body?.box as number | undefined;
  const dueAt = body?.dueAt as string | undefined;

  if (
    !moduleSlug ||
    !cardKey ||
    typeof box !== "number" ||
    !VALID_BOXES.has(box) ||
    !dueAt ||
    Number.isNaN(Date.parse(dueAt))
  ) {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // Ohne Login gibt's nichts zu speichern (kein Fehler an den Client).
    return NextResponse.json({ ok: true });
  }

  const { error } = await supabase.from("flashcard_progress").upsert(
    {
      user_id: user.id,
      module_slug: moduleSlug,
      card_key: cardKey,
      box,
      due_at: dueAt,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,module_slug,card_key" }
  );

  if (error) {
    console.error("Fehler beim Speichern des Karteikarten-Fortschritts:", error);
    return NextResponse.json({ error: "Speichern fehlgeschlagen." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
