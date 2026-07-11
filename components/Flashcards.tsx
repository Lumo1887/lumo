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
}

// Leitner-System: je höher die Box, desto seltener wird eine Karte wieder
// fällig. Box 0 = noch nie beantwortet (immer fällig), Box 1-5 = zunehmender
// Abstand in Tagen.
const BOX_INTERVAL_DAYS: Record<number, number> = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 16 };
const MAX_BOX = 5;

function addDays(date: Date, days: number): string {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

function isDue(card: Card, progress: Record<string, CardProgress>): boolean {
  const p = progress[card.key];
  if (!p) return true;
  return new Date(p.dueAt).getTime() <= Date.now();
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

  // Gespeicherten Lernfortschritt (Leitner-Boxen) laden — nur relevant für
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
          if (c?.cardKey) map[c.cardKey] = { box: c.box, dueAt: c.dueAt };
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
  // einzelne Bewertung während der Runde (handleKnow/handleRepeat) die
  // laufende Runde neu starten, statt sie einfach fortzusetzen.
  useEffect(() => {
    if (unlocked === null || !progressLoaded) return;
    const cards = unlocked ? availableCards.filter((c) => isDue(c, progressMap)) : availableCards;
    startRound(cards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableCards, unlocked, progressLoaded]);

  const current = queue[0];

  function persistProgress(cardKey: string, box: number, dueAt: string) {
    setProgressMap((prev) => ({ ...prev, [cardKey]: { box, dueAt } }));
    if (!unlocked || !loggedIn) return;
    fetch("/api/flashcards/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moduleSlug, cardKey, box, dueAt }),
    }).catch(() => {});
  }

  function handleKnow() {
    if (!current) return;
    const priorBox = progressMap[current.key]?.box ?? 0;
    const nextBox = Math.min(priorBox + 1, MAX_BOX);
    const dueAt = addDays(new Date(), BOX_INTERVAL_DAYS[nextBox]);
    persistProgress(current.key, nextBox, dueAt);
    setDoneCount((c) => c + 1);
    setQueue((q) => q.slice(1));
    setFlipped(false);
  }

  function handleRepeat() {
    if (!current) return;
    const dueAt = addDays(new Date(), BOX_INTERVAL_DAYS[1]);
    persistProgress(current.key, 1, dueAt);
    setQueue((q) => {
      const [first, ...rest] = q;
      return [...rest, first];
    });
    setReviewLater((r) => [...r, current]);
    setFlipped(false);
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
            <div className="mt-5 flex justify-center gap-3">
              <button onClick={handleRepeat} className="btn-secondary">
                🔁 Nochmal üben
              </button>
              <button onClick={handleKnow} className="btn-primary">
                ✓ Kann ich
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
