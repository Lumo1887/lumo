// Optionale, modul-spezifische Umsortierung der Formelsammlung: statt der
// Kapitelreihenfolge des Skripts werden Abschnitte hier nach fachlichem
// Thema gruppiert (z. B. alle Zusammenhangsmaße/Korrelation zusammen, auch
// wenn sie im Skript neben Gini & Co. stehen). Ein Modul ohne Eintrag hier
// fällt in FormulaSheetPdfDocument automatisch auf die einfache
// Kapitel-Gruppierung zurück.
export interface FormulaSheetGroup {
  heading: string;
  sectionIds: string[];
}

export const FORMULA_SHEET_GROUPS: Record<string, FormulaSheetGroup[]> = {
  "statistik-1": [
    {
      heading: "Kombinatorik & Grundlagen der Wahrscheinlichkeit",
      sectionIds: ["1-3", "1-2", "1-4", "1-5", "1-6"],
    },
    {
      heading: "Zufallsvariablen: Verteilungsfunktion, Erwartungswert & Varianz",
      sectionIds: ["2-2", "2-3", "2-4", "2-5"],
    },
    {
      heading: "Kovarianz, Ungleichungen & höhere Momente",
      sectionIds: ["2-8", "2-6", "2-7", "2-9"],
    },
    {
      heading: "Diskrete Verteilungsmodelle",
      sectionIds: ["3-1", "3-2", "3-4", "3-3"],
    },
    {
      heading: "Stetige Verteilungsmodelle",
      sectionIds: ["3-5", "3-6", "3-tdist", "3-8"],
    },
    {
      heading: "Grenzwertsätze & Approximationen",
      sectionIds: ["3-9"],
    },
    {
      heading: "Deskriptive Statistik: Häufigkeiten, Lage- & Streuungsmaße",
      sectionIds: ["4-2", "4-3", "4-4", "4-5", "4-6", "4-7", "4-8", "4-9", "4-12", "4-10"],
    },
    {
      heading: "Zusammenhangsmaße & Korrelation",
      sectionIds: ["4-11", "4-13", "4-14"],
    },
  ],

  "vwl-1": [
    {
      heading: "Budgetmenge, Präferenzen & Grenzrate der Substitution",
      sectionIds: ["1-1", "2-2", "2-3"],
    },
    {
      heading: "Haushaltsoptimum, Nachfrage & Slutsky-Zerlegung",
      sectionIds: ["3-1", "3-2", "3-4", "5-3", "5-4"],
    },
    {
      heading: "Konsumenten-/Produzentenrente & Wohlfahrtsverlust",
      sectionIds: ["4-1", "4-2", "4-4", "4-5"],
    },
    {
      heading: "Anfangsausstattung, Nettohandel & Arbeitsangebot",
      sectionIds: ["aw-1", "aw-2", "aw-3"],
    },
    {
      heading: "Produktion, Kostenminimierung & Gewinnmaximierung",
      sectionIds: ["6-1", "6-3", "7-1", "7-2", "8-1"],
    },
    {
      heading: "Monopol & Preisdiskriminierung",
      sectionIds: ["9-1", "9-2"],
    },
    {
      heading: "Oligopol- & Spieltheorie",
      sectionIds: ["10-1", "10-4", "11-4"],
    },
    {
      heading: "Intertemporale Konsumentscheidung",
      sectionIds: ["12-3"],
    },
  ],

  "vwl-2": [
    {
      heading: "BIP-Messung & Preisindizes",
      sectionIds: ["2-2", "2-1", "2-3", "3-5"],
    },
    {
      heading: "Geldtheorie, Zinsen & Bankensystem",
      sectionIds: ["3-2", "3-3", "4-1", "4-3"],
    },
    {
      heading: "Arbeitsmarkt & Arbeitslosigkeit",
      sectionIds: ["5-1", "5-4", "5-3"],
    },
    {
      heading: "Wachstumsmodelle & Wachstumsbilanzierung",
      sectionIds: ["6-1", "6-2", "7-3", "7-4"],
    },
    {
      heading: "Gütermarkt, Multiplikator & IS-LM-Modell",
      sectionIds: ["10-0", "10-1", "10-2"],
    },
    {
      heading: "Gesamtangebot & Phillipskurve",
      sectionIds: ["11-2", "11-3"],
    },
    {
      heading: "Offene Volkswirtschaft: Wechselkurse & Leistungsbilanz",
      sectionIds: ["12-0", "12-1"],
    },
  ],

  "informatik-2": [
    {
      heading: "Aussagenlogik: Äquivalenzen & Schlussregeln",
      sectionIds: ["1-1", "1-2", "1-4"],
    },
    {
      heading: "Prädikatenlogik: Quantoren & Normalformen",
      sectionIds: ["2-1", "2-4", "2-5"],
    },
    {
      heading: "Boolesche Algebra: Gesetze & Dualität",
      sectionIds: ["3-1", "3-3"],
    },
    {
      heading: "Graphen & Bäume: Strukturformeln",
      sectionIds: ["9-4", "7-2", "7-3"],
    },
    {
      heading: "Algorithmische Komplexität: Landau-Notation & Rekursionen",
      sectionIds: ["10-1", "8-2", "8-3", "8-4", "9-5"],
    },
  ],

  "mathematik-1-semester": [
    {
      heading: "Aussagenlogik: Äquivalenzen & Quantoren",
      sectionIds: ["1-1", "1-2", "1-3"],
    },
    {
      heading: "Mengen, Zählprinzipien & Laplace-Modell",
      sectionIds: ["2-2", "2-3", "4-1", "4-2", "4-3", "5-1"],
    },
    {
      heading: "Gruppenregeln & Abbildungsverkettung",
      sectionIds: ["3-1", "7-3"],
    },
    {
      heading: "Vollständige Induktion & Summenformeln",
      sectionIds: ["6-2", "6-3", "6-4"],
    },
    {
      heading: "Reelle Zahlen: Beträge & Archimedes",
      sectionIds: ["8-1", "8-3"],
    },
    {
      heading: "Folgen: Konvergenzbegriffe",
      sectionIds: ["9-1", "9-2", "10-3", "10-4"],
    },
    {
      heading: "Eulersche Zahl & Exponentialfunktion",
      sectionIds: ["9-4", "12-2"],
    },
    {
      heading: "Reihen: Konvergenzkriterien",
      sectionIds: ["11-3", "11-4", "11-5"],
    },
    {
      heading: "Reihen: Spezielle Reihen & Rechentechniken",
      sectionIds: ["11-2", "11-6", "11-7"],
    },
    {
      heading: "Potenzreihen & trigonometrische Funktionen",
      sectionIds: ["12-1", "12-3", "12-4", "12-6"],
    },
  ],

  "mathematik-2-abschluss": [
    {
      heading: "Partielle Ableitungen, Gradient & Richtungsableitung",
      sectionIds: ["1-2", "1-3", "2-1"],
    },
    {
      heading: "Tangentialebene & Mittelwertsatz im ℝⁿ",
      sectionIds: ["3-2", "3-3"],
    },
    {
      heading: "Jacobi-Matrix, Kettenregel & Implizite Funktionen",
      sectionIds: ["4-1", "4-2", "4-3"],
    },
    {
      heading: "Höhere Ableitungen, Hessematrix & Taylorpolynom",
      sectionIds: ["5-1", "5-2", "5-3"],
    },
    {
      heading: "Extremwertbestimmung & Lagrange-Multiplikatoren",
      sectionIds: ["6-2", "6-3"],
    },
    {
      heading: "Jordan-Inhalt & Riemann-Integral im ℝⁿ",
      sectionIds: ["7-1", "7-2", "7-4"],
    },
    {
      heading: "Integralberechnung: Satz von Fubini & Cavalieri",
      sectionIds: ["7-3", "8-2"],
    },
    {
      heading: "Koordinatentransformation im Mehrdimensionalen",
      sectionIds: ["8-3"],
    },
  ],

  "bwl-1": [
    {
      heading: "Entscheidung unter Risiko",
      sectionIds: ["3-2"],
    },
    {
      heading: "Marketingwirkung & Konversion",
      sectionIds: ["10-3"],
    },
    {
      heading: "Kundenwert & Kundenökonomie",
      sectionIds: ["11-1"],
    },
  ],

  "ing-2": [
    {
      heading: "Kräfte, Momente & Kräftepaare",
      sectionIds: ["1-2", "2-1", "2-2", "2-3"],
    },
    {
      heading: "Gleichgewicht & statische Bestimmtheit",
      sectionIds: ["3-1", "3-3", "3-4", "10-1"],
    },
    {
      heading: "Reibung",
      sectionIds: ["4-1", "4-2", "4-3"],
    },
    {
      heading: "Schnittgrößen am Balken",
      sectionIds: ["6-2", "6-3", "6-4"],
    },
    {
      heading: "Spannung, Dehnung & Hookesches Gesetz",
      sectionIds: ["7-1", "7-2", "7-3", "7-4"],
    },
    {
      heading: "Flächenträgheitsmoment & Satz von Steiner",
      sectionIds: ["8-1", "8-2"],
    },
    {
      heading: "Biegung & Biegelinie",
      sectionIds: ["9-1", "9-2", "9-3", "9-4"],
    },
    {
      heading: "Mehrachsiger Spannungszustand & Hauptspannungen",
      sectionIds: ["11-2"],
    },
    {
      heading: "Knicken nach Euler",
      sectionIds: ["12-2", "12-3"],
    },
  ],

  "bwl-2": [
    {
      heading: "Zeitwert des Geldes & Zinsrechnung",
      sectionIds: ["1-2", "1-3", "1-4", "1-5"],
    },
    {
      heading: "Rentenrechnung",
      sectionIds: ["2-1", "2-2", "2-3"],
    },
    {
      heading: "Investitionsrechnung: Kapitalwert & Rendite",
      sectionIds: ["3-1", "4-1", "4-3"],
    },
    {
      heading: "Anleihenbewertung & Zinsrisiko",
      sectionIds: ["5-1", "5-4", "5-3"],
    },
    {
      heading: "Eigenkapital, Dividenden & Portfoliotheorie",
      sectionIds: ["6-2", "6-5", "7-1", "7-3"],
    },
    {
      heading: "Bilanzierung: Grundsätze & Bewertung",
      sectionIds: ["8-2", "gr-3", "9-1"],
    },
    {
      heading: "Kosten- und Leistungsrechnung: BAB & Kalkulation",
      sectionIds: ["10-4", "11-1", "11-2", "11-3", "11-4", "9-5"],
    },
    {
      heading: "Deckungsbeitrag & Break-even",
      sectionIds: ["12-1", "12-2", "12-3"],
    },
  ],

  "mathematik-2-semester": [
    {
      heading: "Komplexe Zahlen: Arithmetik & Polarform",
      sectionIds: ["1-1", "1-2", "1-3"],
    },
    {
      heading: "Konvergenz, Grenzwerte & Stetigkeit",
      sectionIds: ["2-1", "2-2", "1-4", "8-1", "8-2"],
    },
    {
      heading: "Determinanten",
      sectionIds: ["3-1", "3-2", "3-3"],
    },
    {
      heading: "Lineare Abbildungen: Basis & Dimensionsformel",
      sectionIds: ["4-1", "4-2", "4-3"],
    },
    {
      heading: "Eigenwerte, Diagonalisierbarkeit & Definitheit",
      sectionIds: ["5-1", "5-2", "5-3", "6-1", "6-2"],
    },
    {
      heading: "Normen, Skalarprodukte & Orthogonalität",
      sectionIds: ["7-1", "7-2", "7-3"],
    },
    {
      heading: "Gradient & Tangentialebene",
      sectionIds: ["9-0", "9-1", "9-2"],
    },
  ],

  "mathematik-1-abschluss": [
    {
      heading: "Lineare Gleichungssysteme & Gauß-Algorithmus",
      sectionIds: ["1-1", "1-2"],
    },
    {
      heading: "Vektorräume, lineare Unabhängigkeit & Basis",
      sectionIds: ["2-1", "2-2", "2-3"],
    },
    {
      heading: "Skalarprodukte, Normen & Orthogonalität",
      sectionIds: ["3-1", "3-2", "3-3"],
    },
    {
      heading: "Lineare Abbildungen, Rang & Matrizen",
      sectionIds: ["6-1", "6-2", "6-3", "6-4"],
    },
    {
      heading: "Funktionsgrenzwerte, Stetigkeit & Zwischenwertsatz",
      sectionIds: ["4-1", "4-2", "4-3", "8-4"],
    },
    {
      heading: "Exponential- und Logarithmusfunktionen",
      sectionIds: ["5-1"],
    },
    {
      heading: "Differenzierbarkeit & Ableitungsregeln",
      sectionIds: ["7-1", "7-2", "7-3"],
    },
    {
      heading: "Extremwerte, Mittelwertsatz & Kurvendiskussion",
      sectionIds: ["8-1", "8-2", "8-3"],
    },
    {
      heading: "Grenzwertregeln: de l'Hospital, Taylor & Wachstumsvergleich",
      sectionIds: ["9-1", "9-2", "5-2"],
    },
    {
      heading: "Integralrechnung: Riemann-Integral, Hauptsatz & Integrationstechniken",
      sectionIds: ["10-1", "10-2", "10-3", "10-4"],
    },
  ],

  "informatik-1": [
    {
      heading: "Zahlbereiche & Modulo-Arithmetik",
      sectionIds: ["2-1", "2-3"],
    },
    {
      heading: "Rekursionsformeln & Laufzeit",
      sectionIds: ["4-1", "4-3"],
    },
    {
      heading: "Zähl- und Indexformeln",
      sectionIds: ["1-2", "5-1", "11-2"],
    },
  ],
};
