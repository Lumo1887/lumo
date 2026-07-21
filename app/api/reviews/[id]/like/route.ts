import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";

// Togglet den Like einer Bewertung für die eingeloggte Person: existiert
// bereits ein Like dieser Person für diese Bewertung, wird er entfernt,
// sonst neu angelegt. Der öffentliche "likes_count" auf der Bewertung wird
// dabei automatisch über die DB-Trigger (siehe reviews-table.sql)
// mitgeführt, nicht hier im Code.
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const reviewId = params.id;
  if (!reviewId) {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "Bitte melde dich an, um eine Bewertung zu liken." },
      { status: 401 }
    );
  }

  const { data: existing, error: selectError } = await supabase
    .from("review_likes")
    .select("id")
    .eq("review_id", reviewId)
    .eq("user_id", user.id)
    .maybeSingle();

  if (selectError) {
    console.error("Fehler beim Prüfen des Likes:", selectError);
    return NextResponse.json({ error: "Like konnte nicht verarbeitet werden." }, { status: 500 });
  }

  if (existing) {
    const { error: deleteError } = await supabase
      .from("review_likes")
      .delete()
      .eq("id", existing.id);

    if (deleteError) {
      console.error("Fehler beim Entfernen des Likes:", deleteError);
      return NextResponse.json({ error: "Like konnte nicht entfernt werden." }, { status: 500 });
    }

    return NextResponse.json({ ok: true, liked: false });
  }

  const { error: insertError } = await supabase
    .from("review_likes")
    .insert({ review_id: reviewId, user_id: user.id });

  if (insertError) {
    console.error("Fehler beim Anlegen des Likes:", insertError);
    return NextResponse.json({ error: "Like konnte nicht gespeichert werden." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, liked: true });
}
