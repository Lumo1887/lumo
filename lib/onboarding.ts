import { modules } from "./modules";

export interface OnboardingAnswers {
  moduleSlug: string;
  moduleTitle: string;
  goal: string;
  problemAreas: string[];
  timeLeft: string;
}

// Modul-Auswahl wird direkt aus der zentralen Modul-Registrierung gespeist —
// kommt ein neues Modul in lib/modules.ts dazu, taucht es automatisch hier
// (und in den generierten Problembereichen unten) auf, ohne dass die
// Umfrage angefasst werden muss.
export const MODULE_OPTIONS = modules
  .filter((m) => m.status === "active")
  .map((m) => ({ slug: m.slug, title: m.title, subtitle: m.subtitle }));

export const GOAL_OPTIONS = [
  "Klausur einfach bestehen",
  "Eine gute Note (2,0 oder besser)",
  "Verständnis nachholen (bin im Stoff hinten dran)",
  "Nur auffrischen kurz vor der Prüfung",
];

// Diese Punkte erscheinen unabhängig vom gewählten Modul zusätzlich zu den
// modulspezifischen Kapiteln — bewusst so formuliert, dass sie eine Lücke
// benennen, die genau das Angebot (Skript + Übungstool + Chatbot) schließt.
const UNIVERSAL_PROBLEM_OPTIONS = [
  "Die Vorlesungsfolien sind zu unübersichtlich, um effizient daraus zu lernen",
  "Mir fehlt Übungsmaterial mit echten, nachvollziehbaren Lösungswegen",
  "Ich weiß nicht genau, was davon wirklich klausurrelevant ist",
  "Ich bin mir aktuell unsicher, ob ich die Klausur so bestehen würde",
];

// Liefert die Problembereiche für ein konkretes Modul: die echten Kapitel
// dieses Moduls (aus lib/modules.ts) plus die modulunabhängigen Punkte oben.
// Damit ist die Umfrage automatisch für jedes neue Modul korrekt, ohne
// Code-Änderungen an dieser Stelle.
export function getProblemAreaOptions(moduleSlug: string): string[] {
  const mod = modules.find((m) => m.slug === moduleSlug);
  const chapterOptions = mod?.chapters ?? [];
  return [...chapterOptions, ...UNIVERSAL_PROBLEM_OPTIONS];
}

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
