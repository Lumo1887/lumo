"use client";

import { useEffect, useMemo, useState } from "react";
import { getQuestions, getTopics } from "@/lib/content/questions-registry";
import { fetchAccess } from "@/lib/access";
import CheckoutButton from "@/components/CheckoutButton";

interface PracticeQuestion {
  topic: string;
  type: "mc" | "numeric";
  prompt: string;
  options?: string[];
  correctIndex?: number;
  correctValue?: number;
  tolerance?: number;
  unit?: string;
  explanation: string;
}

export default function QuizPlayer({ moduleSlug }: { moduleSlug: string }) {
  const questions = useMemo(() => getQuestions(moduleSlug), [moduleSlug]);
  const ALL_TOPICS = useMemo(() => ["Alle", ...getTopics(moduleSlug)], [moduleSlug]);
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [topic, setTopic] = useState<string>("Alle");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [numericInput, setNumericInput] = useState("");
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  // Trefferquote je Thema, über die ganze Sitzung hinweg gesammelt (bleibt
  // beim Wechseln des Themenfilters oder "Nochmal von vorne" bestehen, damit
  // die Schwachstellen-Übersicht unten den vollen Überblick behält — nur ein
  // Moduswechsel oder der explizite Reset-Link darin setzt sie zurück).
  const [topicStats, setTopicStats] = useState<Record<string, { correct: number; total: number }>>({});

  // "Warum war das falsch"-Vertiefungsloop: nach einer falschen Antwort kann
  // sofort eine frische, ähnliche Frage zum selben Thema generiert und direkt
  // hier beantwortet werden, statt nur die Erklärung zu lesen.
  const [practiceLoading, setPracticeLoading] = useState(false);
  const [practiceError, setPracticeError] = useState<string | null>(null);
  const [practiceQuestion, setPracticeQuestion] = useState<PracticeQuestion | null>(null);
  const [practiceSelected, setPracticeSelected] = useState<number | null>(null);
  const [practiceNumericInput, setPracticeNumericInput] = useState("");
  const [practiceAnswered, setPracticeAnswered] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchAccess().then((info) => {
      if (!cancelled) setUnlocked(info.purchases.includes(moduleSlug));
    });
    return () => {
      cancelled = true;
    };
  }, [moduleSlug]);

  // Falls diese Komponente zwischen zwei Modulen wiederverwendet wird (statt
  // neu gemountet zu werden), Quiz-Zustand zurücksetzen.
  useEffect(() => {
    setTopic("Alle");
    setIndex(0);
    setSelected(null);
    setNumericInput("");
    setAnswered(false);
    setCorrectCount(0);
    setAnsweredCount(0);
    setTopicStats({});
  }, [moduleSlug]);

  const pool = useMemo(() => {
    let list = topic === "Alle" ? questions : questions.filter((q) => q.topic === topic);
    if (unlocked === false) list = list.filter((q) => q.free);
    return list;
  }, [topic, unlocked, questions]);

  const current = pool[index];

  // Schwachstellen-Übersicht: Trefferquote je Thema, schwächste zuerst.
  const topicBreakdown = useMemo(() => {
    return Object.entries(topicStats)
      .map(([t, s]) => ({ topic: t, ...s, pct: s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0 }))
      .sort((a, b) => a.pct - b.pct);
  }, [topicStats]);

  function resetPracticeState() {
    setPracticeLoading(false);
    setPracticeError(null);
    setPracticeQuestion(null);
    setPracticeSelected(null);
    setPracticeNumericInput("");
    setPracticeAnswered(false);
  }

  function resetQuestionState() {
    setSelected(null);
    setNumericInput("");
    setAnswered(false);
    resetPracticeState();
  }

  function handleTopicChange(t: string) {
    setTopic(t);
    setIndex(0);
    setCorrectCount(0);
    setAnsweredCount(0);
    resetQuestionState();
  }

  function isCorrect(): boolean {
    if (!current) return false;
    if (current.type === "mc") return selected === current.correctIndex;
    if (current.type === "numeric") {
      const val = parseFloat(numericInput.replace(",", "."));
      if (Number.isNaN(val)) return false;
      const tol = current.tolerance ?? 0.5;
      return Math.abs(val - (current.correctValue ?? 0)) <= tol;
    }
    return false;
  }

  function isPracticeCorrect(): boolean {
    if (!practiceQuestion) return false;
    if (practiceQuestion.type === "mc") return practiceSelected === practiceQuestion.correctIndex;
    const val = parseFloat(practiceNumericInput.replace(",", "."));
    if (Number.isNaN(val)) return false;
    const tol = practiceQuestion.tolerance ?? 0.5;
    return Math.abs(val - (practiceQuestion.correctValue ?? 0)) <= tol;
  }

  function handleCheck() {
    setAnswered(true);
    setAnsweredCount((c) => c + 1);
    const correct = isCorrect();
    if (correct) setCorrectCount((c) => c + 1);

    const topicKey = current?.topic;
    if (topicKey) {
      setTopicStats((prev) => {
        const prior = prev[topicKey] ?? { correct: 0, total: 0 };
        return {
          ...prev,
          [topicKey]: { correct: prior.correct + (correct ? 1 : 0), total: prior.total + 1 },
        };
      });
    }
  }

  function handlePracticeCheck() {
    setPracticeAnswered(true);
  }

  async function handlePracticeAgain() {
    if (!current) return;
    resetPracticeState();
    setPracticeLoading(true);
    try {
      const res = await fetch("/api/practice-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          moduleSlug,
          question: {
            topic: current.topic,
            type: current.type,
            prompt: current.prompt,
            options: current.options,
            correctIndex: current.correctIndex,
            correctValue: current.correctValue,
            unit: current.unit,
            explanation: current.explanation,
          },
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.question) {
        setPracticeError(data?.error ?? "Konnte keine Übungsfrage erstellen.");
      } else {
        setPracticeQuestion(data.question);
      }
    } catch {
      setPracticeError("Konnte keine Übungsfrage erstellen. Versuch es gleich nochmal.");
    } finally {
      setPracticeLoading(false);
    }
  }

  function handleResetStats() {
    setTopicStats({});
  }

  // Baut aus der aktuellen (falsch beantworteten) Frage eine vorformulierte
  // Nachricht und schickt sie per window-Event an ModuleChat weiter — das
  // Chat-Widget sitzt im Layout als Geschwister-Komponente ohne gemeinsamen
  // State, daher die Event-Brücke statt eines direkten Funktionsaufrufs.
  function askChatbotAboutCurrent() {
    if (!current) return;
    const lines = [`Ich habe diese Übungsfrage falsch beantwortet: "${current.prompt}"`];

    if (current.type === "mc" && current.options) {
      const mine = selected !== null ? current.options[selected] : "(keine Angabe)";
      const correct =
        current.correctIndex !== undefined ? current.options[current.correctIndex] : "";
      lines.push(`Meine Antwort war: "${mine}"`);
      lines.push(`Richtig wäre: "${correct}"`);
    } else if (current.type === "numeric") {
      const mine = numericInput.trim() !== "" ? numericInput : "(keine Angabe)";
      lines.push(`Meine Antwort war: ${mine} ${current.unit ?? ""}`.trim());
      lines.push(`Richtig wäre: ${current.correctValue} ${current.unit ?? ""}`.trim());
    }

    lines.push(`Die Lösung erklärt: "${current.explanation}"`);
    lines.push(
      "Kannst du mir das nochmal Schritt für Schritt anders erklären, idealerweise mit einem zusätzlichen Beispiel?"
    );

    window.dispatchEvent(
      new CustomEvent("lumo:chat-ask", { detail: { prompt: lines.join("\n") } })
    );
  }

  function handleNext() {
    resetQuestionState();
    setIndex((i) => i + 1);
  }

  function handleRestart() {
    setIndex(0);
    setCorrectCount(0);
    setAnsweredCount(0);
    resetQuestionState();
  }

  if (unlocked === null) {
    return <div className="h-64 animate-pulse rounded-xl2 bg-ink-100" />;
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {ALL_TOPICS.map((t) => (
          <button
            key={t}
            onClick={() => handleTopicChange(t)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              topic === t
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-ink-200 text-ink-700 hover:border-brand-300"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {!unlocked && (
        <div className="mb-4 rounded-lg border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-medium text-brand-800">
          Kostenlose Vorschau — {pool.length} von {questions.length}+ Fragen sichtbar.
        </div>
      )}

      {topicBreakdown.length > 0 && (
        <div className="card mb-6 p-4 sm:p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-ink-900">Deine Schwachstellen</p>
            <button
              onClick={handleResetStats}
              className="text-xs font-medium text-ink-400 hover:text-ink-600 hover:underline"
            >
              Statistik zurücksetzen
            </button>
          </div>
          <div className="space-y-2">
            {topicBreakdown.map(({ topic: t, correct, total, pct }) => {
              const barColor =
                pct < 50 ? "bg-red-500" : pct < 80 ? "bg-amber-500" : "bg-green-600";
              const textColor =
                pct < 50 ? "text-red-700" : pct < 80 ? "text-amber-700" : "text-green-700";
              return (
                <div key={t}>
                  <div className="mb-1 flex items-center justify-between gap-3 text-xs">
                    <span className="truncate font-medium text-ink-700">{t}</span>
                    <span className={`shrink-0 font-semibold ${textColor}`}>
                      {correct}/{total} ({pct}%)
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                    <div
                      className={`h-full rounded-full ${barColor} transition-[width]`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {current ? (
        <div className="card p-6 sm:p-8">
          <div className="mb-4 flex items-center justify-between text-xs font-medium text-ink-600">
            <span>
              Frage {index + 1} von {pool.length}
            </span>
            <span>
              Richtig: {correctCount} / {answeredCount}
            </span>
          </div>
          <div className="mb-1">
            <span className="badge">{current.topic}</span>
          </div>
          <h3 className="mt-3 text-lg font-semibold text-ink-900">
            {current.prompt}
          </h3>

          {current.type === "mc" && current.options && (
            <div className="mt-5 space-y-3">
              {current.options.map((opt, i) => {
                const isSelected = selected === i;
                const isRight = i === current.correctIndex;
                let style =
                  "border-ink-200 text-ink-700 hover:border-brand-300";
                if (answered && isRight) {
                  style = "border-green-600 bg-green-50 text-green-800";
                } else if (answered && isSelected && !isRight) {
                  style = "border-red-500 bg-red-50 text-red-700";
                } else if (isSelected) {
                  style = "border-brand-600 bg-brand-50 text-brand-800";
                }
                return (
                  <button
                    key={i}
                    disabled={answered}
                    onClick={() => setSelected(i)}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${style}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {current.type === "numeric" && (
            <div className="mt-5">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  inputMode="decimal"
                  disabled={answered}
                  value={numericInput}
                  onChange={(e) => setNumericInput(e.target.value)}
                  placeholder="Deine Antwort"
                  className="w-full max-w-xs rounded-lg border border-ink-200 px-4 py-2 text-sm focus:border-brand-500 focus:outline-none"
                />
                {current.unit && (
                  <span className="text-sm text-ink-600">{current.unit}</span>
                )}
              </div>
              {answered && (
                <p
                  className={`mt-2 text-sm font-medium ${
                    isCorrect() ? "text-green-700" : "text-red-600"
                  }`}
                >
                  Richtige Antwort: {current.correctValue} {current.unit ?? ""}
                </p>
              )}
            </div>
          )}

          {answered && (
            <div className="mt-5 rounded-lg bg-ink-50 p-4 text-sm text-ink-700">
              <p className="font-semibold text-ink-900">
                {isCorrect() ? "Richtig! ✓" : "Nicht ganz."}
              </p>
              <p className="mt-1">{current.explanation}</p>
              <p className="mt-2 text-xs text-ink-600">Quelle: {current.source}</p>
              {!isCorrect() && (
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => askChatbotAboutCurrent()}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 transition hover:border-brand-300 hover:bg-brand-50"
                  >
                    💬 Frag den Chatbot dazu
                  </button>
                  <button
                    onClick={() => handlePracticeAgain()}
                    disabled={practiceLoading}
                    className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink-700 transition hover:border-ink-300 hover:bg-ink-50 disabled:opacity-60"
                  >
                    {practiceLoading ? "Generiere Übungsfrage…" : "🔁 Warum war das falsch? Nochmal üben"}
                  </button>
                </div>
              )}

              {practiceError && (
                <p className="mt-3 text-xs font-medium text-red-600">{practiceError}</p>
              )}

              {practiceQuestion && (
                <div className="mt-4 rounded-lg border border-dashed border-brand-300 bg-white p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-700">
                    Zusatzübung zum selben Thema
                  </p>
                  <p className="text-sm font-semibold text-ink-900">{practiceQuestion.prompt}</p>

                  {practiceQuestion.type === "mc" && practiceQuestion.options && (
                    <div className="mt-3 space-y-2">
                      {practiceQuestion.options.map((opt, i) => {
                        const isSelected = practiceSelected === i;
                        const isRight = i === practiceQuestion.correctIndex;
                        let style = "border-ink-200 text-ink-700 hover:border-brand-300";
                        if (practiceAnswered && isRight) {
                          style = "border-green-600 bg-green-50 text-green-800";
                        } else if (practiceAnswered && isSelected && !isRight) {
                          style = "border-red-500 bg-red-50 text-red-700";
                        } else if (isSelected) {
                          style = "border-brand-600 bg-brand-50 text-brand-800";
                        }
                        return (
                          <button
                            key={i}
                            disabled={practiceAnswered}
                            onClick={() => setPracticeSelected(i)}
                            className={`w-full rounded-lg border px-3 py-2 text-left text-sm font-medium transition ${style}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {practiceQuestion.type === "numeric" && (
                    <div className="mt-3">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          inputMode="decimal"
                          disabled={practiceAnswered}
                          value={practiceNumericInput}
                          onChange={(e) => setPracticeNumericInput(e.target.value)}
                          placeholder="Deine Antwort"
                          className="w-full max-w-xs rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
                        />
                        {practiceQuestion.unit && (
                          <span className="text-sm text-ink-600">{practiceQuestion.unit}</span>
                        )}
                      </div>
                    </div>
                  )}

                  {practiceAnswered && (
                    <p
                      className={`mt-3 text-sm font-medium ${
                        isPracticeCorrect() ? "text-green-700" : "text-red-600"
                      }`}
                    >
                      {isPracticeCorrect() ? "Richtig! ✓" : "Nicht ganz."}{" "}
                      {practiceQuestion.type === "numeric" &&
                        `Richtige Antwort: ${practiceQuestion.correctValue} ${practiceQuestion.unit ?? ""}`}
                    </p>
                  )}
                  {practiceAnswered && (
                    <p className="mt-1 text-sm text-ink-700">{practiceQuestion.explanation}</p>
                  )}

                  <div className="mt-3 flex justify-end gap-2">
                    {!practiceAnswered ? (
                      <button
                        onClick={handlePracticeCheck}
                        disabled={
                          practiceQuestion.type === "mc"
                            ? practiceSelected === null
                            : practiceNumericInput === ""
                        }
                        className="btn-primary px-4 py-1.5 text-sm"
                      >
                        Prüfen
                      </button>
                    ) : (
                      <button
                        onClick={() => handlePracticeAgain()}
                        disabled={practiceLoading}
                        className="btn-secondary px-4 py-1.5 text-sm disabled:opacity-60"
                      >
                        {practiceLoading ? "Generiere…" : "Noch eine Übungsfrage"}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="mt-6 flex justify-end">
            {!answered ? (
              <button
                onClick={handleCheck}
                disabled={
                  current.type === "mc" ? selected === null : numericInput === ""
                }
                className="btn-primary"
              >
                Prüfen
              </button>
            ) : (
              <button onClick={handleNext} className="btn-primary">
                {index + 1 < pool.length ? "Nächste Frage →" : "Ergebnis anzeigen"}
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="card p-8 text-center">
          {unlocked ? (
            <>
              <h3 className="text-xl font-bold text-ink-900">Geschafft! 🎉</h3>
              <p className="mt-2 text-ink-600">
                Du hast {correctCount} von {answeredCount} Fragen richtig
                beantwortet.
              </p>
              <button onClick={handleRestart} className="btn-secondary mt-4">
                Nochmal von vorne
              </button>
            </>
          ) : (
            <>
              <span className="badge">Kostenlose Vorschau beendet</span>
              <h3 className="mt-3 text-xl font-bold text-ink-900">
                Weiter üben mit vollem Zugriff
              </h3>
              <p className="mt-2 text-ink-600">
                Du hast {correctCount} von {answeredCount} Vorschau-Fragen
                richtig beantwortet. Schalte das Modul frei für alle{" "}
                {questions.length}+ Übungsfragen.
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
