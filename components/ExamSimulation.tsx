"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { getQuestions } from "@/lib/content/questions-registry";
import { getModule } from "@/lib/modules";
import { fetchAccess } from "@/lib/access";
import CheckoutButton from "@/components/CheckoutButton";

type Phase = "start" | "running" | "result";

// Minuten pro Frage, grob an echte Klausur-Taktung angelehnt (gemischt aus
// Verständnis- und Rechenaufgaben). Wird auf 5 Minuten aufgerundet und nie
// unter 15 Minuten angesetzt, damit auch ein Kurztest nicht unrealistisch
// knapp wirkt.
const MINUTES_PER_QUESTION = 2.5;
const MIN_MINUTES = 15;
const SHORT_LENGTH = 10;

// Deutscher Standard-Notenschlüssel nach Prozent korrekt beantworteter Fragen
// — rein zur Einordnung, keine offizielle Bewertung.
function gradeFromPercent(pct: number): { note: string; label: string } {
  if (pct >= 95) return { note: "1,0", label: "sehr gut" };
  if (pct >= 90) return { note: "1,3", label: "sehr gut" };
  if (pct >= 85) return { note: "1,7", label: "gut" };
  if (pct >= 80) return { note: "2,0", label: "gut" };
  if (pct >= 75) return { note: "2,3", label: "gut" };
  if (pct >= 70) return { note: "2,7", label: "befriedigend" };
  if (pct >= 65) return { note: "3,0", label: "befriedigend" };
  if (pct >= 60) return { note: "3,3", label: "befriedigend" };
  if (pct >= 55) return { note: "3,7", label: "ausreichend" };
  if (pct >= 50) return { note: "4,0", label: "ausreichend" };
  return { note: "5,0", label: "nicht bestanden" };
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatClock(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function ExamSimulation({ moduleSlug }: { moduleSlug: string }) {
  const allQuestions = useMemo(() => getQuestions(moduleSlug), [moduleSlug]);
  const mod = getModule(moduleSlug);

  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [phase, setPhase] = useState<Phase>("start");
  const [examQuestions, setExamQuestions] = useState<typeof allQuestions>([]);
  const [answers, setAnswers] = useState<Record<number, number | string>>({});
  const [current, setCurrent] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchAccess().then((info) => {
      if (!cancelled) setUnlocked(info.purchases.includes(moduleSlug));
    });
    return () => {
      cancelled = true;
    };
  }, [moduleSlug]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const pool = useMemo(() => {
    return unlocked === false ? allQuestions.filter((q) => q.free) : allQuestions;
  }, [allQuestions, unlocked]);

  function startExam(length: "short" | "full") {
    const count = length === "short" ? Math.min(SHORT_LENGTH, pool.length) : pool.length;
    const selected = shuffle(pool).slice(0, count);
    const minutes = Math.max(MIN_MINUTES, Math.ceil((count * MINUTES_PER_QUESTION) / 5) * 5);
    setExamQuestions(selected);
    setAnswers({});
    setCurrent(0);
    setTotalSeconds(minutes * 60);
    setSecondsLeft(minutes * 60);
    setConfirmSubmit(false);
    setPhase("running");

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setPhase((p) => (p === "running" ? "result" : p));
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  }

  function submitExam() {
    if (timerRef.current) clearInterval(timerRef.current);
    setPhase("result");
  }

  function setAnswer(qIndex: number, value: number | string) {
    setAnswers((prev) => ({ ...prev, [qIndex]: value }));
  }

  function isAnswerCorrect(qIndex: number): boolean {
    const q = examQuestions[qIndex];
    const a = answers[qIndex];
    if (!q || a === undefined) return false;
    if (q.type === "mc") return a === q.correctIndex;
    const val = typeof a === "number" ? a : parseFloat(String(a).replace(",", "."));
    if (Number.isNaN(val)) return false;
    const tol = q.tolerance ?? 0.5;
    return Math.abs(val - (q.correctValue ?? 0)) <= tol;
  }

  const answeredCount = Object.keys(answers).length;
  const correctCount = examQuestions.reduce((acc, _, i) => acc + (isAnswerCorrect(i) ? 1 : 0), 0);
  const pct = examQuestions.length > 0 ? Math.round((correctCount / examQuestions.length) * 100) : 0;
  const grade = gradeFromPercent(pct);
  const timeUp = secondsLeft === 0 && phase === "running";
  const currentQ = examQuestions[current];

  if (unlocked === null) {
    return <div className="h-64 animate-pulse rounded-xl2 bg-ink-100" />;
  }

  if (allQuestions.length === 0) {
    return (
      <div className="card p-8 text-center">
        <p className="text-ink-700">Für dieses Modul ist noch keine Klausursimulation verfügbar.</p>
      </div>
    );
  }

  // ---------- Startbildschirm: sieht aus wie ein Klausur-Deckblatt ----------
  if (phase === "start") {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="card border-2 border-ink-200 p-8 font-serif sm:p-10">
          <div className="border-b-2 border-ink-900 pb-4 text-center">
            <p className="text-xs uppercase tracking-widest text-ink-500">Karlsruher Institut für Technologie</p>
            <h1 className="mt-2 text-2xl font-bold text-ink-900">Klausur: {mod?.title ?? moduleSlug}</h1>
            <p className="mt-1 text-sm text-ink-600">Simulierte Prüfung — Lumo Klausursimulation</p>
          </div>

          <div className="mt-6 space-y-2 text-sm text-ink-700">
            <p><strong>Bearbeitungszeit:</strong> siehe gewählte Variante unten</p>
            <p><strong>Hilfsmittel:</strong> nicht-programmierbarer Taschenrechner, Formelsammlung</p>
            <p><strong>Hinweis:</strong> Es werden zufällig Fragen aus dem gesamten Übungspool gemischt — bei jedem Versuch eine andere Zusammenstellung.</p>
          </div>

          {!unlocked && (
            <div className="mt-6 rounded-lg border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-medium text-brand-800">
              Kostenlose Vorschau — nur {pool.length} von {allQuestions.length}+ Fragen stehen zur Verfügung.
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              onClick={() => startExam("short")}
              disabled={pool.length === 0}
              className="rounded-xl border-2 border-ink-200 p-5 text-left transition hover:border-brand-400 hover:shadow-glow disabled:opacity-40"
            >
              <p className="font-sans text-lg font-bold text-ink-900">Kurztest</p>
              <p className="mt-1 font-sans text-sm text-ink-600">
                {Math.min(SHORT_LENGTH, pool.length)} Fragen ·{" "}
                {Math.max(MIN_MINUTES, Math.ceil((Math.min(SHORT_LENGTH, pool.length) * MINUTES_PER_QUESTION) / 5) * 5)} Min.
              </p>
            </button>
            <button
              onClick={() => startExam("full")}
              disabled={!unlocked || pool.length === 0}
              className="rounded-xl border-2 border-brand-300 bg-brand-50 p-5 text-left transition hover:border-brand-500 hover:shadow-glow disabled:opacity-40"
            >
              <p className="font-sans text-lg font-bold text-ink-900">Vollständige Klausur</p>
              <p className="mt-1 font-sans text-sm text-ink-600">
                {pool.length} Fragen ·{" "}
                {Math.max(MIN_MINUTES, Math.ceil((pool.length * MINUTES_PER_QUESTION) / 5) * 5)} Min.
              </p>
            </button>
          </div>

          {!unlocked && (
            <div className="mt-6 text-center">
              <p className="font-sans text-sm text-ink-600">
                Die vollständige Klausursimulation (alle Fragen, echte Klausurlänge) gehört zum
                Modul-Kauf.
              </p>
              <div className="mx-auto mt-4 max-w-xs">
                <CheckoutButton moduleSlug={moduleSlug} />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ---------- Ergebnisbildschirm ----------
  if (phase === "result") {
    return (
      <div className="mx-auto max-w-3xl">
        <div className="card border-2 border-ink-200 p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-ink-500">Klausurergebnis</p>
          <p className="mt-3 text-5xl font-extrabold text-ink-900">{grade.note}</p>
          <p className="mt-1 text-sm font-medium text-ink-600">{grade.label}</p>
          <p className="mt-4 text-ink-700">
            {correctCount} von {examQuestions.length} Fragen richtig ({pct}%)
            {timeUp && " — Zeit abgelaufen"}
          </p>
          <button
            onClick={() => setPhase("start")}
            className="btn-secondary mt-6"
          >
            Neue Klausur starten
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {examQuestions.map((q, i) => {
            const correct = isAnswerCorrect(i);
            const a = answers[i];
            return (
              <div key={i} className="card p-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="badge">{q.topic}</span>
                  <span className={`text-sm font-bold ${correct ? "text-green-700" : "text-red-600"}`}>
                    {correct ? "✓ richtig" : a === undefined ? "○ nicht beantwortet" : "✗ falsch"}
                  </span>
                </div>
                <p className="mt-2 font-semibold text-ink-900">
                  Aufgabe {i + 1}: {q.prompt}
                </p>
                {q.type === "mc" && q.options && (
                  <p className="mt-2 text-sm text-ink-700">
                    Deine Antwort: {typeof a === "number" ? q.options[a] : "—"} · Richtig: {q.options[q.correctIndex ?? 0]}
                  </p>
                )}
                {q.type === "numeric" && (
                  <p className="mt-2 text-sm text-ink-700">
                    Deine Antwort: {a !== undefined ? a : "—"} {q.unit ?? ""} · Richtig: {q.correctValue} {q.unit ?? ""}
                  </p>
                )}
                <p className="mt-2 text-sm text-ink-600">{q.explanation}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ---------- Laufende Klausur ----------
  if (!currentQ) return null;

  const urgentTime = secondsLeft <= 300;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="sticky top-0 z-10 mb-4 flex items-center justify-between rounded-xl border border-ink-200 bg-white/95 px-4 py-3 shadow-card backdrop-blur">
        <span className="text-sm font-semibold text-ink-900">
          Aufgabe {current + 1} von {examQuestions.length}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-sm font-bold tabular-nums ${
            urgentTime ? "bg-red-100 text-red-700" : "bg-ink-100 text-ink-800"
          }`}
        >
          ⏱ {formatClock(secondsLeft)}
        </span>
      </div>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {examQuestions.map((_, i) => {
          const isAnswered = answers[i] !== undefined;
          return (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-8 w-8 rounded-lg text-xs font-semibold transition ${
                i === current
                  ? "bg-brand-600 text-white"
                  : isAnswered
                  ? "bg-green-100 text-green-800"
                  : "bg-ink-100 text-ink-500"
              }`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      <div className="card border-2 border-ink-200 p-6 font-serif sm:p-8">
        <div className="mb-1">
          <span className="badge font-sans">{currentQ.topic}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-ink-900">
          Aufgabe {current + 1} ({currentQ.type === "mc" ? "2" : "3"} Punkte): {currentQ.prompt}
        </h3>

        {currentQ.type === "mc" && currentQ.options && (
          <div className="mt-5 space-y-3 font-sans">
            {currentQ.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setAnswer(current, i)}
                className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                  answers[current] === i
                    ? "border-brand-600 bg-brand-50 text-brand-800"
                    : "border-ink-200 text-ink-700 hover:border-brand-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {currentQ.type === "numeric" && (
          <div className="mt-5 flex items-center gap-2 font-sans">
            <input
              type="text"
              inputMode="decimal"
              value={typeof answers[current] === "string" ? (answers[current] as string) : ""}
              onChange={(e) => setAnswer(current, e.target.value)}
              placeholder="Deine Antwort"
              className="w-full max-w-xs rounded-lg border border-ink-200 px-4 py-2 text-sm focus:border-brand-500 focus:outline-none"
            />
            {currentQ.unit && <span className="text-sm text-ink-600">{currentQ.unit}</span>}
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between font-sans">
        <button
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
          className="btn-secondary disabled:opacity-40"
        >
          ← Zurück
        </button>

        {current + 1 < examQuestions.length ? (
          <button onClick={() => setCurrent((c) => c + 1)} className="btn-secondary">
            Weiter →
          </button>
        ) : (
          <span />
        )}

        {!confirmSubmit ? (
          <button onClick={() => setConfirmSubmit(true)} className="btn-primary">
            Klausur abgeben
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-ink-600">
              {examQuestions.length - answeredCount > 0
                ? `${examQuestions.length - answeredCount} unbeantwortet — wirklich abgeben?`
                : "Wirklich abgeben?"}
            </span>
            <button onClick={submitExam} className="btn-primary !bg-red-600 hover:!bg-red-700">
              Ja, abgeben
            </button>
            <button onClick={() => setConfirmSubmit(false)} className="btn-secondary">
              Abbrechen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
