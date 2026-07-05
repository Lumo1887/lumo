export interface OnboardingAnswers {
  goal: string;
  problemAreas: string[];
  timeLeft: string;
}

export const GOAL_OPTIONS = [
  "Klausur einfach bestehen",
  "Eine gute Note (2,0 oder besser)",
  "Verständnis nachholen (bin im Stoff hinten dran)",
  "Nur auffrischen kurz vor der Prüfung",
];

export const PROBLEM_AREA_OPTIONS = [
  "Deskriptive Statistik (Lage-/Streuungsmaße, Histogramme, Boxplots)",
  "Wahrscheinlichkeitsrechnung (Kombinatorik, bedingte W'keit, Bayes)",
  "Zufallsvariablen (Erwartungswert, Varianz, Verteilungsfunktion)",
  "Verteilungsmodelle (Binomial, Normal, Poisson, ...)",
  "R-Programmierung",
  "Zeitmanagement / Lernplan",
];

export const TIME_LEFT_OPTIONS = [
  "Weniger als 1 Woche",
  "1–2 Wochen",
  "3–4 Wochen",
  "Mehr als 1 Monat",
];

const KEY = "sc_onboarding";

export function saveOnboardingAnswers(answers: OnboardingAnswers): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(answers));
}

export function loadOnboardingAnswers(): OnboardingAnswers | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as OnboardingAnswers;
  } catch {
    return null;
  }
}
