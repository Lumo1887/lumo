export type ModuleStatus = "active" | "coming-soon";

export interface ModuleDefinition {
  slug: string;
  faculty: string;
  title: string;
  subtitle: string;
  status: ModuleStatus;
  priceCent: number;
  compareAtCent: number; // Vergleichspreis (klassischer Vorbereitungskurs)
  chapters: string[];
  questionCount: number;
  // Für die dreistufige Auswahl auf dem Dashboard (Studiengang → Fach → Nummer):
  studiengang: string; // z. B. "Wirtschaftsingenieurwesen"
  subject: string; // Fach-Gruppe, z. B. "Statistik", "VWL"
  number: string; // Nummer/Variante innerhalb des Fachs, z. B. "I", "2" — leer, wenn es (noch) nur eine Variante gibt
}

// Studiengänge, die auf dem Dashboard zur Auswahl stehen. Aktuell ist nur
// Wirtschaftsingenieurwesen mit echten Modulen hinterlegt — die anderen
// werden ausgegraut mit "bald verfügbar" angezeigt, damit sichtbar ist,
// dass Lumo wächst, ohne schon Inhalte dafür zu versprechen.
export const STUDIENGAENGE: { name: string; active: boolean }[] = [
  { name: "Wirtschaftsingenieurwesen", active: true },
  { name: "Maschinenbau", active: false },
  { name: "Elektrotechnik und Informationstechnik", active: false },
  { name: "Informatik", active: false },
];

export const modules: ModuleDefinition[] = [
  {
    slug: "statistik-1",
    faculty: "WiWi-Fakultät",
    title: "Statistik I",
    subtitle: "Deskriptive Statistik, Wahrscheinlichkeitsrechnung, Zufallsvariablen & Verteilungsmodelle",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Deskriptive Statistik",
      "Wahrscheinlichkeitsrechnung",
      "Zufallsvariablen",
      "Verteilungsmodelle",
    ],
    questionCount: 45,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Statistik",
    number: "I",
  },
  {
    slug: "vwl-2",
    faculty: "WiWi-Fakultät",
    title: "VWL 2: Makroökonomie",
    subtitle: "BIP, Wachstum, Arbeitslosigkeit, Geld & Inflation, Konjunktur (IS-LM), offene Volkswirtschaften & Gesamtangebot",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Methodik & BIP",
      "Geld, Inflation & Bankensystem",
      "Arbeitslosigkeit",
      "Wachstum I & II (inkl. KI & Klima)",
      "Konjunktur I & II",
      "Gesamtwirtschaftliches Angebot",
      "Offene Volkswirtschaften I & II (inkl. Zölle)",
    ],
    questionCount: 53,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "VWL",
    number: "2",
  },
  {
    slug: "statistik-2",
    faculty: "WiWi-Fakultät",
    title: "Statistik II",
    subtitle: "Schätzen, Testen, Regression",
    status: "coming-soon",
    priceCent: 799,
    compareAtCent: 1500,
    chapters: [],
    questionCount: 0,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Statistik",
    number: "II",
  },
  {
    slug: "mafi-1",
    faculty: "WiWi-Fakultät",
    title: "Mathematik für Wirtschaftswissenschaftler I",
    subtitle: "Analysis & lineare Algebra für WiWis",
    status: "coming-soon",
    priceCent: 799,
    compareAtCent: 1500,
    chapters: [],
    questionCount: 0,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Mathematik für Wirtschaftswissenschaftler",
    number: "I",
  },
  {
    slug: "buchführung",
    faculty: "WiWi-Fakultät",
    title: "Buchführung & Rechnungswesen",
    subtitle: "Grundlagen der Finanzbuchhaltung",
    status: "coming-soon",
    priceCent: 799,
    compareAtCent: 1500,
    chapters: [],
    questionCount: 0,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Buchführung & Rechnungswesen",
    number: "",
  },
];

export function getModule(slug: string): ModuleDefinition | undefined {
  return modules.find((m) => m.slug === slug);
}

export function formatEuro(cent: number): string {
  return (cent / 100).toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });
}
