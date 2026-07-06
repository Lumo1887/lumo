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
}

export const modules: ModuleDefinition[] = [
  {
    slug: "statistik-1",
    faculty: "WiWi-Fakultät",
    title: "Statistik I",
    subtitle: "Deskriptive Statistik, Wahrscheinlichkeitsrechnung, Zufallsvariablen & Verteilungsmodelle",
    status: "active",
    priceCent: 799,
    compareAtCent: 1500,
    chapters: [
      "Deskriptive Statistik",
      "Wahrscheinlichkeitsrechnung",
      "Zufallsvariablen",
      "Verteilungsmodelle",
    ],
    questionCount: 45,
  },
  {
    slug: "vwl-2",
    faculty: "WiWi-Fakultät",
    title: "VWL 2: Makroökonomie",
    subtitle: "BIP, Wachstum, Arbeitslosigkeit, Geld & Inflation, Konjunktur (IS-LM), offene Volkswirtschaften & Gesamtangebot",
    status: "active",
    priceCent: 799,
    compareAtCent: 1500,
    chapters: [
      "BIP & VGR",
      "Wachstum I & II",
      "Arbeitslosigkeit",
      "Geld & Inflation",
      "Konjunktur I & II",
      "Offene Volkswirtschaften I & II",
      "Gesamtwirtschaftliches Angebot",
    ],
    questionCount: 45,
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
