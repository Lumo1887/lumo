"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { fetchAccess } from "@/lib/access";

interface ReviewItem {
  id: string;
  displayName: string;
  rating: number;
  body: string;
  likesCount: number;
  likedByMe: boolean;
}

const inputClass =
  "w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none";

function Stars({ value, size = "text-base" }: { value: number; size?: string }) {
  const rounded = Math.round(value);
  return (
    <span className={size} aria-label={`${value} von 5 Sternen`}>
      <span className="text-amber-500">{"★".repeat(rounded)}</span>
      <span className="text-ink-200">{"★".repeat(5 - rounded)}</span>
    </span>
  );
}

function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-label={`${n} Sterne`}
          className={`text-2xl leading-none transition ${
            n <= value ? "text-amber-500" : "text-ink-200 hover:text-amber-300"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

function LikeIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M20.8 4.6c-1.9-1.6-4.7-1.4-6.4.4L12 7.4l-2.4-2.4c-1.7-1.8-4.5-2-6.4-.4-2.1 1.8-2.2 5-.3 7l9 9.4 9-9.4c1.9-2 1.8-5.2-.3-7z" />
    </svg>
  );
}

// Bewertungen über Lumo Learn insgesamt (nicht pro Modul) — Nachfolger der
// früher entfernten Testimonials-Sektion, diesmal mit echten, von Nutzer:innen
// selbst geschriebenen Bewertungen statt Platzhaltertexten. Zeigt
// Durchschnitts-Sterne, die drei meistgeliketen Bewertungen, und erlaubt
// eingeloggten Personen (höchstens eine Bewertung pro Account) eine eigene
// Bewertung mit Sternen + Text zu schreiben.
export default function Reviews() {
  const [loading, setLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [topReviews, setTopReviews] = useState<ReviewItem[]>([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [hasOwnReview, setHasOwnReview] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [likingId, setLikingId] = useState<string | null>(null);

  async function load() {
    try {
      const res = await fetch("/api/reviews", { cache: "no-store" });
      if (!res.ok) return;
      const data = await res.json();
      setAverageRating(data.averageRating ?? 0);
      setTotalCount(data.totalCount ?? 0);
      setTopReviews(data.topReviews ?? []);
      setHasOwnReview(!!data.hasOwnReview);
    } catch {
      // Startseite bleibt auch ohne Bewertungen benutzbar.
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    fetchAccess().then((info) => setLoggedIn(info.loggedIn));
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (rating < 1 || !name.trim() || !text.trim() || submitting) return;

    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          displayName: name.trim(),
          rating,
          body: text.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "Etwas ist schiefgelaufen. Versuch es gleich nochmal.");
        return;
      }
      setShowForm(false);
      setName("");
      setRating(0);
      setText("");
      await load();
    } catch {
      setError("Etwas ist schiefgelaufen. Versuch es gleich nochmal.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleLike(id: string) {
    if (!loggedIn || likingId) return;
    setLikingId(id);
    setTopReviews((prev) =>
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

  if (loading) return null;

  return (
    <section className="mt-16">
      <h2 className="mb-2 text-center text-2xl font-bold text-ink-900">
        Das sagen unsere Nutzer:innen
      </h2>

      {totalCount > 0 ? (
        <div className="mb-8 flex flex-col items-center gap-1">
          <Stars value={averageRating} size="text-2xl" />
          <p className="text-sm text-ink-600">
            {averageRating.toFixed(1)} von 5 · {totalCount}{" "}
            {totalCount === 1 ? "Bewertung" : "Bewertungen"}
          </p>
        </div>
      ) : (
        <p className="mb-8 text-center text-sm text-ink-600">
          Noch keine Bewertungen — sei die erste Person!
        </p>
      )}

      {topReviews.length > 0 && (
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {topReviews.map((r) => (
            <div key={r.id} className="card p-5">
              <Stars value={r.rating} />
              <p className="mt-2 text-sm text-ink-700">{r.body}</p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs font-medium text-ink-500">{r.displayName}</p>
                <button
                  onClick={() => handleLike(r.id)}
                  disabled={!loggedIn || likingId === r.id}
                  title={loggedIn ? "Gefällt mir" : "Melde dich an, um zu liken"}
                  className={`flex items-center gap-1 text-xs font-medium transition ${
                    r.likedByMe ? "text-brand-700" : "text-ink-500 hover:text-brand-600"
                  } ${!loggedIn ? "cursor-not-allowed opacity-60" : ""}`}
                >
                  <LikeIcon filled={r.likedByMe} />
                  {r.likesCount}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center">
        {!loggedIn && (
          <p className="text-sm text-ink-600">
            <Link href="/login" className="font-medium text-brand-700 hover:underline">
              Melde dich an
            </Link>
            , um eine Bewertung zu schreiben.
          </p>
        )}

        {loggedIn && hasOwnReview && !showForm && (
          <p className="text-sm text-ink-600">Danke für deine Bewertung! 🎉</p>
        )}

        {loggedIn && !hasOwnReview && !showForm && (
          <button onClick={() => setShowForm(true)} className="btn-secondary">
            Bewertung schreiben
          </button>
        )}

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="card mx-auto mt-4 max-w-md p-5 text-left"
          >
            <p className="text-sm font-semibold text-ink-900">Deine Bewertung</p>
            <div className="mt-2">
              <StarPicker value={rating} onChange={setRating} />
            </div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Dein Name (wird öffentlich angezeigt)"
              maxLength={60}
              required
              className={`${inputClass} mt-3`}
            />
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Was war dein Eindruck von Lumo?"
              maxLength={1000}
              rows={4}
              required
              className={`${inputClass} mt-3 resize-none`}
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            <div className="mt-3 flex gap-2">
              <button
                type="submit"
                disabled={submitting || rating < 1}
                className="btn-primary"
              >
                {submitting ? "Wird gespeichert…" : "Absenden"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setError(null);
                }}
                className="btn-secondary"
              >
                Abbrechen
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
