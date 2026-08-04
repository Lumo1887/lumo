import type { SkriptSection } from "@/lib/content/types";

// Wandelt häufige mathematische Symbole in gesprochene Wörter um, damit die
// Browser-Sprachausgabe (Web Speech API, siehe lib/useReadAloud.ts) Formeln
// verständlich statt als stumme/verwirrende Zeichen vorliest.
function normalizeForSpeech(text: string): string {
  return text
    .replace(/≤/g, " kleiner gleich ")
    .replace(/≥/g, " größer gleich ")
    .replace(/≠/g, " ungleich ")
    .replace(/≈/g, " ungefähr ")
    .replace(/·/g, " mal ")
    .replace(/×/g, " mal ")
    .replace(/÷/g, " geteilt durch ")
    .replace(/√/g, " Wurzel aus ")
    .replace(/±/g, " plus minus ")
    .replace(/→/g, " führt zu ")
    .replace(/⇒/g, " impliziert ")
    .replace(/⇔/g, " äquivalent zu ")
    .replace(/∧/g, " und ")
    .replace(/∨/g, " oder ")
    .replace(/[∑Σ]/g, " Summe ")
    .replace(/∫/g, " Integral ")
    .replace(/∞/g, " unendlich ")
    .replace(/²/g, " zum Quadrat ")
    .replace(/³/g, " hoch drei ")
    .replace(/π/g, " Pi ")
    .replace(/σ/g, " Sigma ")
    .replace(/μ/g, " Mü ")
    .replace(/λ/g, " Lambda ")
    .replace(/α/g, " Alpha ")
    .replace(/β/g, " Beta ")
    .replace(/γ/g, " Gamma ")
    .replace(/\s+/g, " ")
    .trim();
}

// Baut aus einem Skript-Abschnitt einen zusammenhängenden, vorlesbaren Text
// (Überschrift, Fließtext, Begriffe, Formeln, Beispiele) für ReadAloudButton.
export function buildSectionSpeechText(section: SkriptSection): string {
  const parts: string[] = [section.heading];

  for (const paragraph of section.body) {
    parts.push(normalizeForSpeech(paragraph));
  }

  if (section.terms) {
    for (const t of section.terms) {
      parts.push(`${t.term}: ${normalizeForSpeech(t.definition)}`);
    }
  }

  if (section.formulas && section.formulas.length > 0) {
    parts.push("Formeln zu diesem Abschnitt:");
    for (const f of section.formulas) {
      parts.push(normalizeForSpeech(f));
    }
  }

  if (section.examples) {
    for (const ex of section.examples) {
      parts.push(`Beispiel: ${normalizeForSpeech(ex)}`);
    }
  }

  return parts.join(". ");
}
