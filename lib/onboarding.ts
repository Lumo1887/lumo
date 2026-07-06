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

// Bewusst KEINE einzelnen Themen/Kapitel als Auswahlpunkte: Wer sich gerade
// erst orientiert, kennt die Themen des Moduls oft noch gar nicht im Detail
// (genau deshalb sucht die Person ja ein Skript) — nach "Problemen bei
// Bayes" oder "Solow-Modell" zu fragen, bevor jemand den Stoff überhaupt
// gesehen hat, ergibt keinen Sinn. Stattdessen fragen wir nach der
// allgemeinen Situation/Gefühlslage, die unabhängig vom Modul und ohne
// Vorwissen beantwortbar ist.
export const PROBLEM_OPTIONS = [
  "Ich komme in der Vorlesung nur teilweise mit und hänge oft fest",
  "Die Vorlesungsfolien sind mir zu unübersichtlich, um allein daraus zu lernen",
  "Ich hatte bisher kaum Zeit, mich überhaupt mit dem Stoff zu beschäftigen",
  "Mir fehlt Übungsmaterial mit nachvollziehbaren Lösungswegen zum Üben",
  "Ich weiß nicht, was davon wirklich klausurrelevant ist",
  "Ich bin unsicher, ob ich die Klausur aktuell bestehen würde",
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
