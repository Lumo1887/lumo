"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MODULE_OPTIONS,
  GOAL_OPTIONS,
  TIME_LEFT_OPTIONS,
  getProblemAreaOptions,
  saveOnboardingAnswers,
} from "@/lib/onboarding";

const TOTAL_STEPS = 4;

export default function OnboardingFlow() {
  const [step, setStep] = useState(1);
  const [moduleSlug, setModuleSlug] = useState<string>("");
  const [goal, setGoal] = useState<string>("");
  const [problemAreas, setProblemAreas] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [done, setDone] = useState(false);

  const selectedModule = MODULE_OPTIONS.find((m) => m.slug === moduleSlug);
  const problemOptions = moduleSlug ? getProblemAreaOptions(moduleSlug) : [];

  function toggleProblemArea(area: string) {
    setProblemAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  }

  function canContinue() {
    if (step === 1) return moduleSlug !== "";
    if (step === 2) return goal !== "";
    if (step === 3) return problemAreas.length > 0;
    if (step === 4) return timeLeft !== "";
    return false;
  }

  function handleNext() {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    } else {
      saveOnboardingAnswers({
        moduleSlug,
        moduleTitle: selectedModule?.title ?? "",
        goal,
        problemAreas,
        timeLeft,
      });
      setDone(true);
    }
  }

  const isUrgent = timeLeft === "Weniger als 1 Woche" || timeLeft === "1–2 Wochen";

  if (done) {
    return (
      <div className="card mx-auto max-w-xl p-8 text-center">
        <span className="badge">Check abgeschlossen</span>
        <h2 className="mt-4 text-2xl font-bold text-ink-900">
          Wir haben genau deine Lücken gefunden
        </h2>
        <p className="mt-3 text-ink-600">
          Du hast bei <strong>{selectedModule?.title}</strong> vor allem bei{" "}
          <strong>{problemAreas[0]}</strong> Nachholbedarf — und dein Ziel ist{" "}
          <strong>{goal}</strong>.
          {isUrgent
            ? " Bei deiner verbleibenden Zeit zählt jetzt vor allem, dass du dich nicht mit unübersichtlichen Folien aufhältst, sondern direkt an den klausurrelevanten Stellen ansetzt."
            : " Genau dafür ist das Skript so aufgebaut: kompakt, mit den echten Klausur-Aufgaben geübt, und ohne Umwege über unübersichtliche Folien."}
        </p>
        <p className="mt-3 text-sm text-ink-500">
          Jeder Tag ohne Struktur ist ein Tag, an dem sich Unsicherheit
          anhäuft — das Skript und das Übungstool zu {selectedModule?.title}{" "}
          sind in wenigen Minuten freigeschaltet.
        </p>
        <Link
          href={selectedModule ? `/module/${selectedModule.slug}` : "/dashboard"}
          className="btn-primary mt-6"
        >
          {selectedModule?.title} jetzt freischalten →
        </Link>
        <div className="mt-3">
          <Link href="/dashboard" className="text-sm text-ink-500 underline">
            Erst noch umsehen
          </Link>
        </div>
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
            Für welches Modul suchst du gerade Klausurvorbereitung?
          </h2>
          <div className="mt-5 space-y-3">
            {MODULE_OPTIONS.map((option) => (
              <button
                key={option.slug}
                onClick={() => {
                  setModuleSlug(option.slug);
                  setProblemAreas([]);
                }}
                className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                  moduleSlug === option.slug
                    ? "border-brand-600 bg-brand-50 text-brand-800 shadow-sm"
                    : "border-ink-200 text-ink-700 hover:border-brand-300"
                }`}
              >
                <span className="block">{option.title}</span>
                <span className="mt-0.5 block text-xs font-normal text-ink-500">
                  {option.subtitle}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
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

      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold text-ink-900">
            Wo liegen aktuell deine Probleme?
          </h2>
          <p className="mt-1 text-sm text-ink-600">Mehrfachauswahl möglich.</p>
          <div className="mt-5 space-y-3">
            {problemOptions.map((option) => (
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

      {step === 4 && (
        <div>
          <h2 className="text-xl font-bold text-ink-900">
            Wie viel Zeit hast du noch bis zur Klausur?
          </h2>
          <p className="mt-1 text-sm text-ink-600">
            Je knapper die Zeit, desto wichtiger ist es, sich nicht mehr in
            unübersichtlichen Folien zu verlieren.
          </p>
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
