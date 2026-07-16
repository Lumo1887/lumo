"use client";

import { useEffect, useMemo, useState } from "react";
import { getModuleChapters } from "@/lib/content/registry";
import { fetchAccess } from "@/lib/access";
import CheckoutButton from "@/components/CheckoutButton";

interface Card {
  key: string;
  term: string;
  definition: string;
  chapterTitle: string;
  chapterNumber: number;
  free: boolean;
}

interface CardProgress {
  box: number;
  dueAt: string;
  easeFactor: number;
  repetitions: number;
  intervalDays: number;
}

const MIN_EASE_FACTOR = 1.3;
const DEFAULT_EASE_FACTOR = 2.5;

function addDays(date: Date, days: number): string {
  const d = new Date(date);
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  return d.toISOString();
}

function isDue(card: Card, progress: Record<string, CardProgress>): boolean {
  const p = progress[card.key];
  if (!p) return true;
  return new Date(p.dueAt).getTime() <= Date.now();
}

// SM-2-Algorithmus (wie bei Anki): quality 0-5, wobei < 3 als "nicht gewusst"
// zählt und Wiederholungen + Intervall zurücksetzt. Ab 3 wächst das Intervall
// abhängig vom Ease-Factor, der sich je nach Bewertung leicht anpasst.
function sm2(prev: CardProgress | undefined, quality: number): { easeFactor: number; repetitions: number; intervalDays: number } {
  const priorEase = prev?.easeFactor ?? DEFAULT_EASE_FACTOR;
  const priorReps = prev?.repetitions ?? 0;
  const priorInterval = prev?.intervalDays ?? 0;

  let easeFactor =
    priorEase + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easeFactor < MIN_EASE_FACTOR) easeFactor = MIN_EASE_FACTOR;

  if (quality < 3) {
    return { easeFactor, repetitions: 0, intervalDays: 1 };
  }

  let repetitions = priorReps + 1;
  let intervalDays: number;
  if (repetitions === 1) {
    intervalDays = 1;
  } else if (repetitions === 2) {
    intervalDays = 6;
  } else {
    intervalDays = Math.round(priorInterval * easeFactor);
  }

  return { easeFactor, repetitions, intervalDays };
}

// Box nur noch fürs Datenbankschema/Anzeige — grober Fortschrittsindikator
// (1 = neu/frisch falsch, 5 = sehr gefestigt), abgeleitet aus repetitions.
function boxFromRepetitions(repetitions: number): number {
  return Math.min(5, Math.max(1, repetitions + 1));
}

// Einfacher Fisher-Yates-Shuffle statt Array.sort(() => Math.random() - 0.5)
// — letzteres verzerrt die Verteilung merklich.
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function Flashcards({ moduleSlug, questionCount }: { moduleSlug: string; questionCount: number }) {
  const chapters = useMemo(() => getModuleChapters(moduleSlug) ?? [], [moduleSlug]);

  // Alle Begriffe aus allen Kapiteln/Abschnitten flach zusammenziehen — das
  // ist die einzige zusätzliche Datenquelle, die diese Ansicht braucht, denn
  // "terms" existiert schon pro Section in jedem Modul. "key" ist eine
  // stabile ID aus Kapitel-/Abschnitts-ID + Begriff, da die Begriffe selbst
  // keine eigene ID haben — wird für den gespeicherten Lernfortschritt
  // gebraucht (siehe app/api/flashcards/progress).
  const allCards = useMemo<Card[]>(() => {
    const cards: Card[] = [];
    for (const chapter of chapters) {
      for (const section of chapter.sections) {
        for (const t of section.terms ?? []) {
          cards.push({
            key: `${chapter.id}::${section.id}::${t.term}`,
            term: t.term,
            definition: t.definition,
            chapterTitle: chapter.title,
            chapterNumber: chapter.number,
            free: chapter.free,
          });
        }
      }
    }
    return cards;
  }, [chapters]);

  const chapterTitles = useMemo(() => {
    const seen = new Set<string>();
    const list: string[] = [];
    for (const chapter of chapters) {
      if (!seen.has(chapter.title)) {
        seen.add(chapter.title);
        list.push(chapter.title);
      }
    }
    return list;
  }, [chapters]);

  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [progressLoaded, setProgressLoaded] = useState(false);
  const [progressMap, setProgressMap] = useState<Record<string, CardProgress>>({});
  const [chapterFilter, setChapterFilter] = useState<string>("Alle");
  const [queue, setQueue] = useState<Card[]>([]);
  const [reviewLater, setReviewLater] = useState<Card[]>([]);
  const [doneCount, setDoneCount] = useState(0);
  const [totalInRound, setTotalInRound] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchAccess().then((info) => {
      if (!cancelled) {
        setUnlocked(info.purchases.includes(moduleSlug));
        setLoggedIn(info.loggedIn);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [moduleSlug]);

  // Gespeicherten Lernfortschritt (SM-2-Werte) laden — nur relevant für
  // freigeschaltete Module, die kostenlose Vorschau soll bei jedem Besuch
  // unverändert den vollen (kleinen) Kartensatz zeigen, statt Karten wegen
  // Spaced Repetition "wegzuräumen" und die Vorschau leer wirken zu lassen.
  useEffect(() => {
    if (unlocked !== true) {
      setProgressLoaded(true);
      return;
    }
    let cancelled = false;
    fetch(`/api/flashcards/progress?moduleSlug=${encodeURIComponent(moduleSlug)}`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        const map: Record<string, CardProgress> = {};
        for (const c of data?.cards ?? []) {
          if (c?.cardKey) {
            map[c.cardKey] = {
              box: c.box,
              dueAt: c.dueAt,
              easeFactor: c.easeFactor ?? DEFAULT_EASE_FACTOR,
              repetitions: c.repetitions ?? 0,
              intervalDays: c.intervalDays ?? 0,
            };
          }
        }
        setProgressMap(map);
        setProgressLoaded(true);
      })
      .catch(() => setProgressLoaded(true));
    return () => {
      cancelled = true;
    };
  }, [moduleSlug, unlocked]);

  const availableCards = useMemo(() => {
    let list = chapterFilter === "Alle" ? allCards : allCards.filter((c) => c.chapterTitle === chapterFilter);
    if (unlocked === false) list = list.filter((c) => c.free);
    return list;
  }, [allCards, chapterFilter, unlocked]);

  function startRound(cards: Card[]) {
    const shuffled = shuffle(cards);
    setQueue(shuffled);
    setReviewLater([]);
    setDoneCount(0);
    setTotalInRound(shuffled.length);
    setFlipped(false);
  }

  // Neue Runde starten, sobald Zugriffsstatus + (bei freigeschalteten
  // Modulen) der gespeicherte Fortschritt feststehen, oder der Filter
  // wechselt. Hängt bewusst NICHT von progressMap ab — sonst würde jede
  // einzelne Bewertung während der Runde (rate()) die laufende Runde neu
  // starten, statt sie einfach fortzusetzen.
  useEffect(() => {
    if (unlocked === null || !progressLoaded) return;
    const cards = unlocked ? availableCards.filter((c) => isDue(c, progressMap)) : availableCards;
    startRound(cards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableCards, unlocked, progressLoaded]);

  const current = queue[0];
  const currentProgress = current ? progressMap[current.key] : undefined;

  function persistProgress(cardKey: string, next: { easeFactor: number; repetitions: number; intervalDays: number }, dueAt: string) {
    const box = boxFromRepetitions(next.repetitions);
    setProgressMap((prev) => ({
      ...prev,
      [cardKey]: { box, dueAt, easeFactor: next.easeFactor, repetitions: next.repetitions, intervalDays: next.intervalDays },
    }));
    if (!unlocked || !loggedIn) return;
    fetch("/api/flashcards/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        moduleSlug,
        cardKey,
        box,
        dueAt,
        easeFactor: next.easeFactor,
        repetitions: next.repetitions,
        intervalDays: next.intervalDays,
      }),
    }).catch(() => {});
  }

  // quality: 0 = Nochmal, 3 = Schwer, 4 = Gut, 5 = Einfach (SM-2-Skala)
  function rate(quality: number) {
    if (!current) return;
    const next = sm2(currentProgress, quality);
    const dueAt = addDays(new Date(), next.intervalDays);
    persistProgress(current.key, next, dueAt);

    if (quality < 3) {
      setQueue((q) => {
        const [first, ...rest] = q;
        return [...rest, first];
      });
      setReviewLater((r) => [...r, current]);
    } else {
      setDoneCount((c) => c + 1);
      setQueue((q) => q.slice(1));
    }
    setFlipped(false);
  }

  function previewInterval(quality: number): string {
    if (!current) return "";
    const next = sm2(currentProgress, quality);
    if (next.intervalDays < 1) return "<1 Tag";
    if (next.intervalDays === 1) return "1 Tag";
    if (next.intervalDays < 30) return `${Math.round(next.intervalDays)} Tage`;
    const months = next.intervalDays / 30;
    return `${months < 2 ? months.toFixed(1) : Math.round(months)} Monate`;
  }

  // Für die Abschlussansicht: nochmal alle verfügbaren Karten üben, unabhängig
  // davon, welche laut Spaced Repetition gerade fällig wären.
  function handlePracticeAllAgain() {
    startRound(availableCards);
  }

  if (unlocked === null || !progressLoaded) {
    return <div className="h-64 animate-pulse rounded-xl2 bg-ink-100" />;
  }

  if (allCards.length === 0) {
    return (
      <div className="card p-8 text-center">
        <p className="text-ink-700">Für dieses Modul sind noch keine Karteikarten verfügbar.</p>
      </div>
    );
  }

  const nothingDueYet = unlocked === true && totalInRound === 0 && availableCards.length > 0;

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {["Alle", ...chapterTitles].map((t) => (
          <button
            key={t}
            onClick={() => setChapterFilter(t)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              chapterFilter === t
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-ink-200 text-ink-700 hover:border-brand-300"
            }`}
          >
            {t === "Alle" ? "Alle" : `Kap. ${chapters.find((c) => c.title === t)?.number} — ${t}`}
          </button>
        ))}
      </div>

      {!unlocked && (
        <div className="mb-4 rounded-lg border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-medium text-brand-800">
          Kostenlose Vorschau — {availableCards.length} von {allCards.length}+ Karteikarten sichtbar.
        </div>
      )}

      {unlocked && !loggedIn && (
        <div className="mb-4 rounded-lg border border-ink-200 bg-ink-50 px-4 py-2 text-xs font-medium text-ink-600">
          Melde dich an, damit dein Lernfortschritt gespeichert wird und nur noch fällige Karten
          gezeigt werden.
        </div>
      )}

      {totalInRound > 0 && (
        <div className="mb-4 flex items-center justify-between text-xs font-medium text-ink-600">
          <span>
            Karte {Math.min(doneCount + 1, totalInRound)} von {totalInRound}
          </span>
          <span>Gewusst: {doneCount} · Zum Wiederholen: {reviewLater.length}</span>
        </div>
      )}

      {current ? (
        <div>
          <button
            onClick={() => setFlipped((f) => !f)}
            className="card flex min-h-[16rem] w-full flex-col items-center justify-center p-8 text-center transition hover:shadow-glow sm:min-h-[20rem]"
          >
            <span className="badge mb-4">
              Kap. {current.chapterNumber} · {current.chapterTitle}
            </span>
            {!flipped ? (
              <p className="text-2xl font-bold text-ink-900">{current.term}</p>
            ) : (
              <p className="max-w-xl text-ink-700">{current.definition}</p>
            )}
            <p className="mt-6 text-xs text-ink-400">
              {flipped ? "Klicken zum Umdrehen" : "Klicken, um die Definition zu sehen"}
            </p>
          </button>

          {flipped && (
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
              <button
                onClick={() => rate(0)}
                className="rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-sm font-semibold text-red-700 transition hover:border-red-300"
              >
                ✗ Nochmal
                <span className="block text-[11px] font-normal text-red-500">{previewInterval(0)}</span>
              </button>
              <button
                onClick={() => rate(3)}
                className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5 text-sm font-semibold text-amber-700 transition hover:border-amber-300"
              >
                😐 Schwer
                <span className="block text-[11px] font-normal text-amber-600">{previewInterval(3)}</span>
              </button>
              <button
                onClick={() => rate(4)}
                className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300"
              >
                ✓ Gut
                <span className="block text-[11px] font-normal text-emerald-600">{previewInterval(4)}</span>
              </button>
              <button
                onClick={() => rate(5)}
                className="rounded-xl border border-brand-200 bg-brand-50 px-3 py-2.5 text-sm font-semibold text-brand-700 transition hover:border-brand-300"
              >
                🚀 Einfach
                <span className="block text-[11px] font-normal text-brand-600">{previewInterval(5)}</span>
              </button>
            </div>
          )}
        </div>
      ) : nothingDueYet ? (
        <div className="card p-8 text-center">
          <h3 className="text-xl font-bold text-ink-900">Für heute nichts fällig 🎉</h3>
          <p className="mt-2 text-ink-600">
            Du kennst gerade alle Karten in diesem Filter gut genug — laut Lernplan kommen sie
            erst später wieder dran.
          </p>
          <button onClick={handlePracticeAllAgain} className="btn-secondary mt-4">
            Trotzdem alle wiederholen
          </button>
        </div>
      ) : (
        <div className="card p-8 text-center">
          {unlocked || availableCards.length === allCards.length ? (
            <>
              <h3 className="text-xl font-bold text-ink-900">Runde geschafft! 🎉</h3>
              <p className="mt-2 text-ink-600">
                Du hast {totalInRound} Karteikarten durchgearbeitet.
              </p>
              <button onClick={handlePracticeAllAgain} className="btn-secondary mt-4">
                Nochmal von vorne
              </button>
            </>
          ) : (
            <>
              <span className="badge">Kostenlose Vorschau beendet</span>
              <h3 className="mt-3 text-xl font-bold text-ink-900">
                Weiter lernen mit vollem Zugriff
              </h3>
              <p className="mt-2 text-ink-600">
                Schalte das Modul frei für alle {allCards.length}+ Karteikarten
                {questionCount > 0 ? ` und ${questionCount}+ Übungsfragen` : ""} — inklusive
                Lernfortschritt, der sich deine Karten merkt.
              </p>
              <div className="mx-auto mt-4 max-w-xs">
                <CheckoutButton moduleSlug={moduleSlug} />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
