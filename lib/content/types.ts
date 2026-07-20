import type { FigureType } from "@/components/SkriptFigures";

export interface SkriptSection {
  id: string;
  heading: string;
  body: string[];
  formulas?: string[];
  // Optionale LaTeX-Fassung der Einträge in "formulas" (gleiche Reihenfolge
  // /Länge) — wird sowohl im Online-Skript (via KaTeX, components/MathFormula.tsx)
  // als auch im PDF-Export benutzt, um echte, typografisch korrekte Formeln
  // (Bruchstriche usw.) zu rendern. "formulas" bleibt der Text-Fallback, falls
  // für einen Eintrag keine LaTeX-Fassung vorhanden ist oder das Rendering
  // fehlschlägt.
  formulasLatex?: string[];
  examples?: string[];
  figure?: { type: FigureType; caption: string };
  // Kurze Begriffs-/Definitions-Kästen, die einzeln als optisch abgesetzte
  // Blöcke dargestellt werden (statt im Fließtext zu verschwinden).
  terms?: { term: string; definition: string }[];
  // Optionale Vergleichstabelle (z. B. für Formel-Übersichten wie "mit/ohne
  // Wiederholung"), die als echte Tabelle gerendert wird (Online-Skript via
  // HTML <table>, PDF-Export via react-pdf-Grid) statt als Fließtext.
  table?: { caption?: string; headers: string[]; rows: string[][] };
}

export interface SkriptChapter {
  id: string;
  number: number;
  title: string;
  free: boolean;
  intro: string;
  sections: SkriptSection[];
}
