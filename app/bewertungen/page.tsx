"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchAccess } from "@/lib/access";
import Stars from "@/components/Stars";
import ReviewCard, { type ReviewItem } from "@/components/ReviewCard";

// Vollständige Liste aller Bewertungen (sortiert nach Likes, wie die
// Top-3-Ansicht auf der Startseite), erreichbar über den "Alle Bewertungen
// ansehen"-Link in components/Reviews.tsx.
export default function BewertungenPage() {
  const [loading, setLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [likingId, setLikingId] = useState<string | null>(null);
  const [filter, setFilter] = useState<number | null>(null);

  async function load() {
    try {
      const res = await fetch("/api/reviews?all=1", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();
      setAverageRating(data.averageRating ?? 0);
      setTotalCount(data.totalCount ?? 0);
      setReviews(data.reviews ?? []);
    } catch {
      // Seite bleibt auch ohne Bewertungen benutzbar.
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    fetchAccess().then((info) => setLoggedIn(info.loggedIn));
  }, []);

  async function handleLike(id: string) {
    if (!loggedIn || likingId) return;
    setLikingId(id);
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              likedByMe: !r.likedByMe,
              likesCount: r.likesCount + (r.likedByMe ? -1 : 1),
            }
          : r
      )
    );
    try {
      const res = await fetch(`/api/reviews/${id}/like`, { method: "POST" });
      if (!res.ok) await load();
    } catch {
      await load();
    } finally {
      setLikingId(null);
    }
  }

  return (
    <div className="mx-auto max-w-4xl">
      <Link href="/" className="text-sm font-medium text-brand-700 hover:underline">
        ← Zurück zur Startseite
      </Link>

      <h1 className="mt-4 text-3xl font-extrabold text-ink-900">
        Alle Bewertungen
      </h1>

      {!loading && totalCount > 0 && (
        <div className="mt-2 flex items-center gap-2">
          <Stars value={averageRating} size="text-xl" />
          <p className="text-sm text-ink-600">
            {averageRating.toFixed(1)} von 5 · {totalCount}{" "}
            {totalCount === 1 ? "Bewertung" : "Bewertungen"}
          </p>
        </div>
      )}

      {!loading && totalCount === 0 && (
        <p className="mt-4 text-sm text-ink-600">
          Noch keine Bewertungen — sei die erste Person auf der{" "}
          <Link href="/" className="font-medium text-brand-700 hover:underline">
            Startseite
          </Link>
          !
        </p>
      )}

      {!loading && totalCount > 0 && (
        <p className="mt-3 text-xs text-ink-500">
          Bewertungen stammen von registrierten Nutzer:innen von Lumo Learn.
          Wir prüfen nicht, ob dafür ein Modul gekauft wurde.
        </p>
      )}

      {reviews.length > 0 && (
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilter(null)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              filter === null
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-ink-200 text-ink-600 hover:border-brand-400"
            }`}
          >
            Alle ({reviews.length})
          </button>
          {[5, 4, 3, 2, 1].map((n) => {
            const count = reviews.filter((r) => r.rating === n).length;
            if (count === 0) return null;
            return (
              <button
                key={n}
                onClick={() => setFilter(n)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                  filter === n
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-ink-200 text-ink-600 hover:border-brand-400"
                }`}
              >
                {n} ★ ({count})
              </button>
            );
          })}
        </div>
      )}

      {reviews.length > 0 && (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {reviews
            .filter((r) => filter === null || r.rating === filter)
            .map((r) => (
              <ReviewCard
                key={r.id}
                review={r}
                loggedIn={loggedIn}
                liking={likingId === r.id}
                onLike={handleLike}
              />
            ))}
        </div>
      )}

      {reviews.length > 0 &&
        filter !== null &&
        reviews.filter((r) => r.rating === filter).length === 0 && (
          <p className="mt-6 text-sm text-ink-600">
            Keine Bewertungen mit {filter} Sternen.
          </p>
        )}
    </div>
  );
}
