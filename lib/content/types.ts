import type { FigureType } from "@/components/SkriptFigures";

export interface SkriptSection {
  id: string;
  heading: string;
  body: string[];
  formulas?: string[];
  // Optionale LaTeX-Fassung der Einträge in "formulas" (gleiche Reihenfolge
  // /Länge) — wird nur für den PDF-Export benutzt, um echte, typografisch
  // korrekte Formeln zu rendern. Die Webseite selbst zeigt weiterhin die
  // "formulas"-Unicode-Strings an.
  formulasLatex?: string[];
  examples?: string[];
  figure?: { type: FigureType; caption: string };
  // Kurze Begriffs-/Definitions-Kästen, die einzeln als optisch abgesetzte
  // Blöcke dargestellt werden (statt im Fließtext zu verschwinden).
  terms?: { term: string; definition: string }[];
}

export interface SkriptChapter {
  id: string;
  number: number;
  title: string;
  free: boolean;
  intro: string;
  sections: SkriptSection[];
}
