export type QuestionType = "mc" | "numeric";

export interface Question {
  id: string;
  topic: string;
  type: QuestionType;
  prompt: string;
  options?: string[];
  correctIndex?: number;
  correctValue?: number;
  tolerance?: number;
  unit?: string;
  explanation: string;
  source: string;
  free: boolean;
}

export const TOPICS = [
  "Deskriptive Statistik",
  "Wahrscheinlichkeitsrechnung",
  "Zufallsvariablen",
  "Verteilungsmodelle",
] as const;

export const questions: Question[] = [
  // ---------- Deskriptive Statistik ----------
  {
    id: "ds-01",
    topic: "Deskriptive Statistik",
    type: "mc",
    prompt: "Wie ist das Merkmal 'Körpergröße' skaliert?",
    options: [
      "Nominal",
      "Ordinal",
      "Metrisch, diskret",
      "Metrisch, stetig",
    ],
    correctIndex: 3,
    explanation:
      "Körpergröße kann (theoretisch) jeden Wert in einem Intervall annehmen und ist damit metrisch-stetig.",
    source: "Kapitel 4, Skalenniveaus",
    free: true,
  },
  {
    id: "ds-02",
    topic: "Deskriptive Statistik",
    type: "mc",
    prompt: "Welches Lagemaß ist auf jedem Skalenniveau definiert — auch bei rein nominalen Daten?",
    options: ["Arithmetisches Mittel", "Median", "Modus", "Interquartilsabstand"],
    correctIndex: 2,
    explanation:
      "Der Modus (häufigste Ausprägung) lässt sich für jedes Skalenniveau bestimmen, auch für nominale Merkmale.",
    source: "Kapitel 4, Lageparameter",
    free: true,
  },
  {
    id: "ds-03",
    topic: "Deskriptive Statistik",
    type: "numeric",
    prompt:
      "Eine Bibliothek zählt Ausleihen in 5 Genre-Kategorien (n=52): Kategorie 1 (Krimi): 6, Kategorie 2 (Sachbuch): 9, Kategorie 3 (Biografie): 4, Kategorie 4 (Fantasy): 24, Kategorie 5 (Kochbuch): 9. Wie lautet der Modus der Variable 'Genre-Kategorie'?",
    correctValue: 4,
    explanation:
      "Die größte Gruppe (24 Ausleihen) gehört zu Kategorie 4 (Fantasy) — das ist der Modus.",
    source: "Übungsaufgabe, Modus",
    free: true,
  },
  {
    id: "ds-04",
    topic: "Deskriptive Statistik",
    type: "numeric",
    tolerance: 1,
    prompt:
      "16 Fitnessstudios einer Kette verzeichnen folgende Anzahl monatlicher Neuanmeldungen: 12, 27, 8, 41, 19, 63, 5, 33, 22, 9, 51, 15, 38, 3, 145, 29. Wie hoch ist das arithmetische Mittel?",
    correctValue: 32.5,
    explanation:
      "Summe = 520, geteilt durch 16 Studios ergibt 32,5. Da fast jeder Wert nur einmal vorkommt, gibt es keine sinnvolle 'häufigste' Ausprägung — der Modus taugt hier nicht als Lagemaß.",
    source: "Übungsaufgabe, Arithmetisches Mittel",
    free: true,
  },
  {
    id: "ds-05",
    topic: "Deskriptive Statistik",
    type: "numeric",
    prompt:
      "9 Mitglieder eines Laufvereins joggen an einem Wochenende folgende Streckenlängen (in km): 4, 7, 3, 11, 6, 45, 9, 13, 5. Wie lautet der Median?",
    correctValue: 7,
    explanation:
      "Sortiert: 3, 4, 5, 6, 7, 9, 11, 13, 45. Der mittlere (5.) Wert ist 7.",
    source: "Übungsaufgabe, Median",
    free: true,
  },
  {
    id: "ds-06",
    topic: "Deskriptive Statistik",
    type: "numeric",
    tolerance: 0.5,
    unit: "km",
    prompt:
      "9 Mitglieder eines Laufvereins joggen an einem Wochenende folgende Streckenlängen (in km): 4, 7, 3, 11, 6, 45, 9, 13, 5. Wie hoch ist das arithmetische Mittel?",
    correctValue: 11.44,
    explanation:
      "Summe = 103, geteilt durch 9 Mitglieder ≈ 11,44 km. Der Ausreißer 45 km zieht das arithmetische Mittel deutlich über den Median.",
    source: "Übungsaufgabe, Median",
    free: false,
  },
  {
    id: "ds-07",
    topic: "Deskriptive Statistik",
    type: "mc",
    prompt:
      "Eine Bäckerei verkauft an einem Tag folgende Stückzahlen ihrer vier Brotsorten: Vollkorn 82, Roggen 145, Dinkel 39, Sauerteig 210. Welches Lagemaß beschreibt die meistverkaufte Sorte am besten?",
    options: ["Arithmetisches Mittel", "Median", "Modus", "Standardabweichung"],
    correctIndex: 2,
    explanation:
      "Der Modus ist die Ausprägung mit der höchsten Häufigkeit — hier Sauerteig mit 210 verkauften Broten.",
    source: "Übungsaufgabe, Modus",
    free: false,
  },
  {
    id: "ds-08",
    topic: "Deskriptive Statistik",
    type: "mc",
    prompt:
      "Eine Verteilung hat einen langen rechten Ausläufer, Mittelwert > Median. Wie nennt man diese Verteilung?",
    options: ["Linksschief", "Symmetrisch", "Rechtsschief", "Bimodal"],
    correctIndex: 2,
    explanation:
      "Ein langer rechter Ausläufer mit Mittelwert > Median ist das Kennzeichen einer rechtsschiefen Verteilung.",
    source: "Kapitel 4, Schiefe",
    free: false,
  },
  {
    id: "ds-09",
    topic: "Deskriptive Statistik",
    type: "mc",
    prompt: "Wofür wird der Gini-Koeffizient verwendet?",
    options: [
      "Um den Zusammenhang zweier metrischer Merkmale zu messen",
      "Um die Konzentration/Ungleichverteilung einer Größe zu messen",
      "Um die Schiefe einer Verteilung zu messen",
      "Um Ausreißer zu identifizieren",
    ],
    correctIndex: 1,
    explanation:
      "Der Gini-Koeffizient (aus der Lorenzkurve abgeleitet) misst, wie ungleich eine Größe wie Einkommen oder Umsatz verteilt ist.",
    source: "Kapitel 4, Lorenzkurve",
    free: false,
  },
  {
    id: "ds-10",
    topic: "Deskriptive Statistik",
    type: "mc",
    prompt:
      "Vier Foodtrucks auf einem Straßenfest erzielen an einem Abend jeweils genau 340 € Umsatz. Wie groß ist der Gini-Koeffizient dieser Verteilung?",
    options: ["0 (Gleichverteilung)", "0,5", "1 (maximale Ungleichheit)", "Kann nicht berechnet werden"],
    correctIndex: 0,
    explanation:
      "Bei identischen Umsätzen liegt die Lorenzkurve auf der Diagonalen — perfekte Gleichverteilung, Gini = 0.",
    source: "Kapitel 4, Lorenzkurve",
    free: false,
  },
  {
    id: "ds-11",
    topic: "Deskriptive Statistik",
    type: "mc",
    prompt:
      "Welcher Korrelationskoeffizient eignet sich am besten für ordinalskalierte Rangdaten (z. B. Rangplätze)?",
    options: [
      "Bravais-Pearson",
      "Kovarianz",
      "Spearman'scher Rangkorrelationskoeffizient",
      "Variationskoeffizient",
    ],
    correctIndex: 2,
    explanation:
      "Für Rangdaten ist der Spearman'sche Rangkorrelationskoeffizient das geeignete Zusammenhangsmaß.",
    source: "Kapitel 4, Zusammenhangsmaße",
    free: false,
  },
  {
    id: "ds-12",
    topic: "Deskriptive Statistik",
    type: "mc",
    prompt:
      "Zwei Merkmale X und Y sind empirisch unabhängig, wenn ...",
    options: [
      "ihre Kovarianz maximal ist",
      "die gemeinsame relative Häufigkeit stets dem Produkt der Randhäufigkeiten entspricht",
      "der Kontingenzkoeffizient gleich 1 ist",
      "beide Merkmale metrisch skaliert sind",
    ],
    correctIndex: 1,
    explanation:
      "Empirische Unabhängigkeit bedeutet f(xi,yj) = f(xi)·f(yj) für alle Zellen der Kontingenztabelle.",
    source: "Kapitel 4, Zusammenhangsmaße",
    free: false,
  },

  // ---------- Wahrscheinlichkeitsrechnung ----------
  {
    id: "wr-01",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "numeric",
    tolerance: 0.01,
    prompt: "Aus 32 Skatkarten wird eine gezogen. Wie groß ist P(Pik-Karte)?",
    correctValue: 0.25,
    explanation: "8 von 32 Karten sind Pik: 8/32 = 0,25.",
    source: "Kapitel 1, Laplace-Wahrscheinlichkeit",
    free: true,
  },
  {
    id: "wr-02",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "numeric",
    tolerance: 0.02,
    prompt:
      "Aus 32 Skatkarten wird eine gezogen. Wie groß ist P(Ass oder Pik-Karte)?",
    correctValue: 0.344,
    explanation:
      "P(Ass) + P(Pik) − P(Ass∩Pik) = 4/32 + 8/32 − 1/32 = 11/32 ≈ 0,344 (Additionssatz).",
    source: "Kapitel 1, Additionssatz",
    free: true,
  },
  {
    id: "wr-03",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "mc",
    prompt:
      "Ben probiert 2 von 5 Workshops auf einer Konferenz aus (Design, Marketing, Robotik, Fotografie, Finanzen). Reihenfolge egal, kein Workshop doppelt. Wie viele Möglichkeiten gibt es?",
    options: ["5", "10", "20", "25"],
    correctIndex: 1,
    explanation: "Kombination ohne Wiederholung: C(5,2) = 10.",
    source: "Kapitel 1, Kombinatorik",
    free: true,
  },
  {
    id: "wr-04",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "mc",
    prompt:
      "Gleiche Situation (5 Workshops), aber Reihenfolge zählt und Wiederholung ist erlaubt. Wie viele Möglichkeiten?",
    options: ["10", "20", "25", "30"],
    correctIndex: 2,
    explanation: "Variation mit Wiederholung: 5² = 25.",
    source: "Kapitel 1, Kombinatorik",
    free: true,
  },
  {
    id: "wr-05",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "numeric",
    tolerance: 0.02,
    prompt:
      "Beim Frühstücksbuffet eines Hotels nehmen sich die Gäste Croissants (C, 55%), Rührei (R, 40%) und Obst (O, 25%); alle drei zusammen nehmen sich 5% (P(C∩R∩O)=0,05). Wie groß ist die Wahrscheinlichkeit, dass ein Gast höchstens zwei der drei Buffet-Elemente nimmt?",
    correctValue: 0.95,
    explanation: "P(höchstens 2) = 1 − P(alle drei) = 1 − 0,05 = 0,95.",
    source: "Kapitel 1, Additionssatz",
    free: false,
  },
  {
    id: "wr-06",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "numeric",
    tolerance: 0.02,
    prompt:
      "P(C)=0,55 (Croissant) und P(O)=0,25 (Obst), P(C∩O)=0,15. Wie groß ist P(C∪O) — die Wahrscheinlichkeit, dass ein Gast Croissant oder Obst nimmt?",
    correctValue: 0.65,
    explanation: "P(C∪O) = P(C) + P(O) − P(C∩O) = 0,55 + 0,25 − 0,15 = 0,65.",
    source: "Kapitel 1, Additionssatz",
    free: false,
  },
  {
    id: "wr-07",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "numeric",
    tolerance: 0.03,
    prompt:
      "Ein Kurierdienst liefert Pakete mit 40% Wahrscheinlichkeit per Lastenrad aus (dann kommt es in 15% der Fälle zu einer Verspätung) und sonst per Kleintransporter (dann in 35% der Fälle). Ein zufällig ausgewähltes Paket kam verspätet an. Mit welcher Wahrscheinlichkeit wurde es per Lastenrad ausgeliefert? (Satz von Bayes)",
    correctValue: 0.222,
    explanation:
      "P(verspätet) = 0,15·0,4 + 0,35·0,6 = 0,27. P(Lastenrad|verspätet) = 0,06/0,27 ≈ 0,222.",
    source: "Kapitel 1, Satz von Bayes",
    free: false,
  },
  {
    id: "wr-08",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "numeric",
    tolerance: 0.03,
    prompt:
      "Ein Spamfilter markiert tatsächlichen Spam mit 92% Wahrscheinlichkeit korrekt (Erkennungsrate) und normale E-Mails mit 96% Wahrscheinlichkeit korrekt als 'kein Spam' (Spezifität). 3% aller eingehenden E-Mails sind tatsächlich Spam. Wie hoch ist P(tatsächlich Spam | als Spam markiert)?",
    correctValue: 0.42,
    explanation:
      "P(als Spam markiert) = 0,92·0,03 + 0,04·0,97 = 0,0664. P(Spam|markiert) = 0,0276/0,0664 ≈ 0,42 — trotz gutem Filter landen also gut die Hälfte der markierten Mails fälschlich im Spam-Ordner!",
    source: "Kapitel 1, Satz von Bayes",
    free: false,
  },
  {
    id: "wr-09",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "numeric",
    tolerance: 0.02,
    prompt:
      "3 unabhängige Wetterstationen könnten an einem Tag jeweils einen Sensorfehler melden, mit p=0,08 / 0,15 / 0,11. Wie groß ist die Wahrscheinlichkeit, dass keine der drei einen Fehler meldet?",
    correctValue: 0.696,
    explanation: "P(keine) = 0,92 · 0,85 · 0,89 ≈ 0,696.",
    source: "Kapitel 1, Multiplikationssatz",
    free: false,
  },
  {
    id: "wr-10",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "numeric",
    tolerance: 0.02,
    prompt:
      "Ein Callcenter hat vier Teams: Team 1 bearbeitet 220 Anfragen/Woche mit 3% Eskalationsquote, Team 2 bearbeitet 180 Anfragen mit 6%, Team 3 bearbeitet 340 Anfragen mit 2%, Team 4 bearbeitet 260 Anfragen mit 4%. Eine zufällig herausgegriffene eskalierte Anfrage wird betrachtet. Mit welcher Wahrscheinlichkeit stammt sie von Team 2? (Satz von Bayes)",
    correctValue: 0.312,
    explanation:
      "Erwartete Eskalationen: Team1=6,6; Team2=10,8; Team3=6,8; Team4=10,4 (Summe 34,6). P(Team2|Eskalation)=10,8/34,6≈0,312.",
    source: "Kapitel 1, Satz von Bayes",
    free: false,
  },
  {
    id: "wr-11",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "numeric",
    tolerance: 0.02,
    prompt:
      "X, Y unabhängig Bernoulli mit P(X=1)=0,4, P(Y=1)=0,25. S=X+Y. Wie groß ist P(S=2)?",
    correctValue: 0.1,
    explanation: "P(S=2) = P(X=1)·P(Y=1) = 0,4 · 0,25 = 0,10.",
    source: "Kapitel 2, Bivariate Zufallsvariablen",
    free: false,
  },
  {
    id: "wr-12",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "numeric",
    tolerance: 0.02,
    prompt:
      "X, Y unabhängig Bernoulli mit P(X=1)=0,4, P(Y=1)=0,25. S=X+Y. Wie groß ist P(S=1)?",
    correctValue: 0.45,
    explanation:
      "P(S=1) = P(X=1,Y=0)+P(X=0,Y=1) = 0,4·0,75 + 0,6·0,25 = 0,30+0,15 = 0,45.",
    source: "Kapitel 2, Bivariate Zufallsvariablen",
    free: false,
  },

  // ---------- Zufallsvariablen ----------
  {
    id: "zv-01",
    topic: "Zufallsvariablen",
    type: "numeric",
    tolerance: 0.02,
    prompt:
      "Zwei faire Würfel werden geworfen, X = Augensumme. Wie groß ist P(X=7)?",
    correctValue: 0.1667,
    explanation: "6 von 36 gleichwahrscheinlichen Kombinationen ergeben 7: 6/36 = 1/6 ≈ 0,167.",
    source: "Kapitel 2, Diskrete Zufallsvariablen",
    free: true,
  },
  {
    id: "zv-02",
    topic: "Zufallsvariablen",
    type: "mc",
    prompt:
      "Eine diskrete Zufallsvariable X hat f(x)=(x²+6)/60 für x=0,1,2,3,4. Wie groß ist P(X=2)?",
    options: ["0,10", "0,17", "0,25", "0,37"],
    correctIndex: 1,
    explanation: "f(2) = (4+6)/60 = 10/60 ≈ 0,17.",
    source: "Kapitel 2, Wahrscheinlichkeitsfunktion",
    free: true,
  },
  {
    id: "zv-03",
    topic: "Zufallsvariablen",
    type: "numeric",
    tolerance: 0.02,
    prompt:
      "Eine diskrete Zufallsvariable X hat f(x)=(x²+6)/60 für x=0,1,2,3,4. Wie groß ist P(X ≤ 2)?",
    correctValue: 0.383,
    explanation: "f(0)+f(1)+f(2) = 0,10+0,117+0,167 ≈ 0,383.",
    source: "Kapitel 2, Wahrscheinlichkeitsfunktion",
    free: false,
  },
  {
    id: "zv-04",
    topic: "Zufallsvariablen",
    type: "numeric",
    prompt:
      "Von X sind E(X)=5 und E(X²)=41 bekannt. Wie groß ist die Standardabweichung von X?",
    correctValue: 4,
    explanation: "Var(X) = E(X²) − E(X)² = 41 − 25 = 16, also σ = √16 = 4.",
    source: "Kapitel 2, Varianz von Zufallsvariablen",
    free: false,
  },
  {
    id: "zv-05",
    topic: "Zufallsvariablen",
    type: "mc",
    prompt:
      "Mit E(X)=5 und σ=4: welche Aussage trifft die Tschebyscheff-Ungleichung über P(|X−5|≥8)?",
    options: [
      "P ≤ 16/64 = 0,25",
      "P = 0 (unmöglich)",
      "P ≥ 0,25",
      "Keine Aussage möglich",
    ],
    correctIndex: 0,
    explanation: "Tschebyscheff: P(|X−E(X)|≥k) ≤ Var(X)/k² = 16/64 = 0,25 für k=8.",
    source: "Kapitel 2, Tschebyscheff-Ungleichung",
    free: false,
  },
  {
    id: "zv-06",
    topic: "Zufallsvariablen",
    type: "numeric",
    tolerance: 0.05,
    prompt:
      "Diskrete ZV mit TX={0,3,5}, f(0)=0,5, f(3)=f(5)=0,25. Wie groß ist E(X)?",
    correctValue: 2.0,
    explanation: "E(X) = 0·0,5 + 3·0,25 + 5·0,25 = 0,75 + 1,25 = 2,0.",
    source: "Kapitel 2, Erwartungswert",
    free: false,
  },
  {
    id: "zv-07",
    topic: "Zufallsvariablen",
    type: "numeric",
    tolerance: 0.1,
    prompt: "Gleiche Verteilung: wie groß ist Var(X)?",
    correctValue: 4.5,
    explanation: "E(X²) = 0·0,5+9·0,25+25·0,25 = 8,5. Var(X) = 8,5 − 2,0² = 8,5 − 4 = 4,5.",
    source: "Kapitel 2, Varianz von Zufallsvariablen",
    free: false,
  },
  {
    id: "zv-08",
    topic: "Zufallsvariablen",
    type: "mc",
    prompt: "Was folgt aus Unabhängigkeit zweier Zufallsvariablen X und Y für Cov(X,Y)?",
    options: [
      "Cov(X,Y) = 1",
      "Cov(X,Y) = 0",
      "Cov(X,Y) = Var(X)·Var(Y)",
      "Keine Aussage möglich",
    ],
    correctIndex: 1,
    explanation:
      "Unabhängigkeit impliziert Cov(X,Y)=0 (die Umkehrung gilt im Allgemeinen nicht!).",
    source: "Kapitel 2, Bivariate Zufallsvariablen",
    free: false,
  },

  // ---------- Verteilungsmodelle ----------
  {
    id: "vm-01",
    topic: "Verteilungsmodelle",
    type: "mc",
    prompt: "Welche Verteilung modelliert die Anzahl Erfolge bei n unabhängigen Bernoulli-Versuchen?",
    options: ["Poisson-Verteilung", "Binomialverteilung", "Normalverteilung", "Exponentialverteilung"],
    correctIndex: 1,
    explanation: "Die Binomialverteilung B(n,p) zählt Erfolge bei n unabhängigen Bernoulli-Versuchen.",
    source: "Kapitel 3, Diskrete Verteilungen",
    free: true,
  },
  {
    id: "vm-02",
    topic: "Verteilungsmodelle",
    type: "numeric",
    prompt: "X ~ Binomial(n=16, p=0,25). Wie groß ist E(X)?",
    correctValue: 4,
    explanation: "E(X) = n·p = 16 · 0,25 = 4.",
    source: "Kapitel 3, Binomialverteilung",
    free: true,
  },
  {
    id: "vm-03",
    topic: "Verteilungsmodelle",
    type: "numeric",
    tolerance: 0.05,
    prompt: "X ~ Binomial(n=16, p=0,25). Wie groß ist Var(X)?",
    correctValue: 3,
    explanation: "Var(X) = n·p·(1−p) = 16 · 0,25 · 0,75 = 3.",
    source: "Kapitel 3, Binomialverteilung",
    free: false,
  },
  {
    id: "vm-04",
    topic: "Verteilungsmodelle",
    type: "mc",
    prompt: "Welche Verteilung ergibt sich als Grenzwert der Binomialverteilung für großes n, kleines p und konstantes λ=np?",
    options: ["Normalverteilung", "Poisson-Verteilung", "Exponentialverteilung", "Gleichverteilung"],
    correctIndex: 1,
    explanation:
      "Für seltene Ereignisse (großes n, kleines p, λ=np konstant) approximiert die Poisson-Verteilung die Binomialverteilung.",
    source: "Kapitel 3, Approximationen",
    free: false,
  },
  {
    id: "vm-05",
    topic: "Verteilungsmodelle",
    type: "mc",
    prompt: "Welche Aussage zum Zentralen Grenzwertsatz ist korrekt?",
    options: [
      "Er gilt nur für binomialverteilte Zufallsvariablen",
      "Die Summe vieler unabhängiger Zufallsvariablen ist näherungsweise normalverteilt, unabhängig von deren Ausgangsverteilung",
      "Er besagt, dass alle Zufallsvariablen normalverteilt sind",
      "Er gilt nur für stetige Zufallsvariablen",
    ],
    correctIndex: 1,
    explanation:
      "Der Zentrale Grenzwertsatz erklärt, warum Summen/Mittelwerte vieler unabhängiger Zufallsvariablen sich der Normalverteilung annähern.",
    source: "Kapitel 3, Zentraler Grenzwertsatz",
    free: false,
  },
  {
    id: "vm-06",
    topic: "Verteilungsmodelle",
    type: "numeric",
    prompt:
      "Eine stetige ZV hat Dichte f(x)=4x³ auf [0,1]. Wie groß ist E(X)?",
    correctValue: 0.8,
    explanation: "E(X) = ∫₀¹ x·4x³ dx = ∫₀¹ 4x⁴ dx = 4/5 = 0,8.",
    source: "Kapitel 3, Stetige Verteilungen",
    free: false,
  },
  {
    id: "vm-07",
    topic: "Verteilungsmodelle",
    type: "numeric",
    tolerance: 0.01,
    prompt: "Gleiche Dichte f(x)=4x³ auf [0,1]. Wie groß ist Var(X)?",
    correctValue: 0.027,
    explanation: "E(X²)=∫₀¹4x⁵dx=4/6≈0,667. Var(X)=0,667−0,8²=0,667−0,64≈0,027.",
    source: "Kapitel 3, Stetige Verteilungen",
    free: false,
  },
  {
    id: "vm-08",
    topic: "Verteilungsmodelle",
    type: "mc",
    prompt:
      "Welche Verteilung wird typischerweise verwendet, um Wartezeiten bis zum nächsten zufälligen Ereignis zu modellieren?",
    options: ["Binomialverteilung", "Hypergeometrische Verteilung", "Exponentialverteilung", "Diskrete Gleichverteilung"],
    correctIndex: 2,
    explanation:
      "Die Exponentialverteilung modelliert Wartezeiten zwischen Ereignissen eines Poisson-Prozesses.",
    source: "Kapitel 3, Stetige Verteilungen",
    free: false,
  },
];

export function questionsByTopic(topic: string): Question[] {
  return questions.filter((q) => q.topic === topic);
}
