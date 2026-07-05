"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GOAL_OPTIONS,
  PROBLEM_AREA_OPTIONS,
  TIME_LEFT_OPTIONS,
  saveOnboardingAnswers,
} from "@/lib/onboarding";

const TOTAL_STEPS = 3;

export default function OnboardingFlow() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<string>("");
  const [problemAreas, setProblemAreas] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [done, setDone] = useState(false);

  function toggleProblemArea(area: string) {
    setProblemAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  }

  function canContinue() {
    if (step === 1) return goal !== "";
    if (step === 2) return problemAreas.length > 0;
    if (step === 3) return timeLeft !== "";
    return false;
  }

  function handleNext() {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    } else {
      saveOnboardingAnswers({ goal, problemAreas, timeLeft });
      setDone(true);
    }
  }

  if (done) {
    return (
      <div className="card mx-auto max-w-xl p-8 text-center">
        <span className="badge">Check abgeschlossen</span>
        <h2 className="mt-4 text-2xl font-bold text-ink-900">
          Alles klar, wir haben deinen Plan angepasst
        </h2>
        <p className="mt-3 text-ink-600">
          Basierend auf deinen Antworten empfehlen wir dir, im Übungstool mit{" "}
          <strong>{problemAreas[0]}</strong> zu starten. Dein Ziel:{" "}
          <strong>{goal}</strong>. Verbleibende Zeit: {timeLeft}.
        </p>
        <Link href="/dashboard" className="btn-primary mt-6">
          Zum Dashboard →
        </Link>
      </div>
    );
  }

  return (
    <div className="card mx-auto max-w-xl p-8">
      <div className="mb-6 flex items-center gap-2">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full ${
              i < step ? "bg-brand-600" : "bg-ink-100"
            }`}
          />
        ))}
      </div>

      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold text-ink-900">
            Was möchtest du erreichen?
          </h2>
          <div className="mt-5 space-y-3">
            {GOAL_OPTIONS.map((option) => (
              <button
                key={option}
                onClick={() => setGoal(option)}
                className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                  goal === option
                    ? "border-brand-600 bg-brand-50 text-brand-800 shadow-sm"
                    : "border-ink-200 text-ink-700 hover:border-brand-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold text-ink-900">
            Wo liegen aktuell deine Probleme?
          </h2>
          <p className="mt-1 text-sm text-ink-600">Mehrfachauswahl möglich.</p>
          <div className="mt-5 space-y-3">
            {PROBLEM_AREA_OPTIONS.map((option) => (
              <button
                key={option}
                onClick={() => toggleProblemArea(option)}
                className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                  problemAreas.includes(option)
                    ? "border-brand-600 bg-brand-50 text-brand-800 shadow-sm"
                    : "border-ink-200 text-ink-700 hover:border-brand-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold text-ink-900">
            Wie viel Zeit hast du noch bis zur Klausur?
          </h2>
          <div className="mt-5 space-y-3">
            {TIME_LEFT_OPTIONS.map((option) => (
              <button
                key={option}
                onClick={() => setTimeLeft(option)}
                className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                  timeLeft === option
                    ? "border-brand-600 bg-brand-50 text-brand-800 shadow-sm"
                    : "border-ink-200 text-ink-700 hover:border-brand-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={() => setStep(Math.max(1, step - 1))}
          className={`text-sm font-medium text-ink-600 hover:text-ink-900 ${
            step === 1 ? "invisible" : ""
          }`}
        >
          ← Zurück
        </button>
        <button
          onClick={handleNext}
          disabled={!canContinue()}
          className="btn-primary"
        >
          {step === TOTAL_STEPS ? "Fertig" : "Weiter"}
        </button>
      </div>
    </div>
  );
}
