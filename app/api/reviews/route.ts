import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";

const MAX_BODY_LENGTH = 1000;
const MAX_NAME_LENGTH = 60;
const TOP_REVIEWS_LIMIT = 3;

// Gibt den Durchschnitt/die Gesamtzahl aller Bewertungen zurück
// (öffentlich, auch für nicht eingeloggte Besucher:innen — reviews.select
// ist per RLS für alle lesbar). Standardmäßig zusätzlich nur die drei
// meistgeliketen Bewertungen (für die Startseite); mit "?all=1" stattdessen
// die vollständige, nach Likes sortierte Liste (für die Seite
// /bewertungen). Zusätzlich, falls eingeloggt: ob die Person bereits
// selbst bewertet hat und welche der angezeigten Bewertungen sie bereits
// geliked hat.
export async function GET(request: NextRequest) {
  const supabase = createClient();
  const showAll = request.nextUrl.searchParams.get("all") === "1";

  const { data: allRatings, error: ratingsError } = await supabase
    .from("reviews")
    .select("rating");

  if (ratingsError) {
    console.error("Fehler beim Laden der Bewertungsübersicht:", ratingsError);
    return NextResponse.json({ error: "Bewertungen konnten nicht geladen werden." }, { status: 500 });
  }

  const totalCount = allRatings?.length ?? 0;
  const averageRating =
    totalCount > 0
      ? allRatings!.reduce((sum, r) => sum + r.rating, 0) / totalCount
      : 0;

  let reviewsQuery = supabase
    .from("reviews")
    .select("id, display_name, rating, body, likes_count, created_at")
    .order("likes_count", { ascending: false })
    .order("created_at", { ascending: false });

  if (!showAll) {
    reviewsQuery = reviewsQuery.limit(TOP_REVIEWS_LIMIT);
  }

  const { data: reviews, error: reviewsError } = await reviewsQuery;

  if (reviewsError) {
    console.error("Fehler beim Laden der Bewertungen:", reviewsError);
    return NextResponse.json({ error: "Bewertungen konnten nicht geladen werden." }, { status: 500 });
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let ownReview: { id: string; rating: number } | null = null;
  let likedReviewIds: string[] = [];

  if (user) {
    const { data: own } = await supabase
      .from("reviews")
      .select("id, rating")
      .eq("user_id", user.id)
      .maybeSingle();
    ownReview = own ?? null;

    const ids = (reviews ?? []).map((r) => r.id);
    if (ids.length > 0) {
      const { data: likes } = await supabase
        .from("review_likes")
        .select("review_id")
        .eq("user_id", user.id)
        .in("review_id", ids);
      likedReviewIds = (likes ?? []).map((l) => l.review_id);
    }
  }

  const mapped = (reviews ?? []).map((r) => ({
    id: r.id,
    displayName: r.display_name,
    rating: r.rating,
    body: r.body,
    likesCount: r.likes_count,
    createdAt: r.created_at,
    likedByMe: likedReviewIds.includes(r.id),
  }));

  return NextResponse.json({
    averageRating,
    totalCount,
    topReviews: showAll ? undefined : mapped,
    reviews: showAll ? mapped : undefined,
    hasOwnReview: !!ownReview,
    ownReviewId: ownReview?.id ?? null,
  });
}

// Legt eine neue Bewertung an. Nur für eingeloggte Nutzer:innen — pro
// Account genau eine Bewertung (erzwungen über die "unique (user_id)"
// Constraint in reviews-table.sql; ein zweiter Versuch schlägt mit einem
// Konflikt-Fehler fehl, den wir hier freundlich abfangen).
export async function POST(request: NextRequest) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "Bitte melde dich an, um eine Bewertung zu schreiben." },
      { status: 401 }
    );
  }

  const body = await request.json().catch(() => null);
  const displayName = (body?.displayName as string | undefined)?.trim();
  const rating = body?.rating as number | undefined;
  const text = (body?.body as string | undefined)?.trim();

  if (
    !displayName ||
    displayName.length > MAX_NAME_LENGTH ||
    typeof rating !== "number" ||
    !Number.isInteger(rating) ||
    rating < 1 ||
    rating > 5 ||
    !text ||
    text.length > MAX_BODY_LENGTH
  ) {
    return NextResponse.json({ error: "Ungültige Bewertung." }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("reviews")
    .insert({
      user_id: user.id,
      display_name: displayName,
      rating,
      body: text,
    })
    .select("id")
    .single();

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "Du hast bereits eine Bewertung geschrieben." },
        { status: 409 }
      );
    }
    console.error("Fehler beim Speichern der Bewertung:", error);
    return NextResponse.json({ error: "Bewertung konnte nicht gespeichert werden." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, id: data.id });
}

// Löscht die eigene Bewertung (samt zugehöriger Likes, per "on delete
// cascade" in reviews-table.sql). Da pro Account höchstens eine Bewertung
// existiert, genügt der Filter auf user_id — die RLS-Policy
// "Nutzer löschen eigene Bewertung" stellt zusätzlich serverseitig sicher,
// dass wirklich nur die eigene Zeile betroffen sein kann.
export async function DELETE() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "Bitte melde dich an." },
      { status: 401 }
    );
  }

  const { error } = await supabase.from("reviews").delete().eq("user_id", user.id);

  if (error) {
    console.error("Fehler beim Löschen der Bewertung:", error);
    return NextResponse.json({ error: "Bewertung konnte nicht gelöscht werden." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
