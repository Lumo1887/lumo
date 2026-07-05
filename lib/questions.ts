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
    source: "Tutorium 1, Aufgabe 2",
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
    source: "Kapitel 2, Lageparameter",
    free: true,
  },
  {
    id: "ds-03",
    topic: "Deskriptive Statistik",
    type: "numeric",
    prompt:
      "An einem Wahlkurs nehmen 2, 3, 22, 6 und 14 Studierende aus dem 1.–5. Semester teil (n=47). Wie lautet der Modus der Variable 'Semesterzahl'?",
    correctValue: 3,
    explanation:
      "Die größte Gruppe (22 Studierende) kommt aus dem 3. Semester — das ist der Modus.",
    source: "Tutorium 2, Aufgabe 1",
    free: true,
  },
  {
    id: "ds-04",
    topic: "Deskriptive Statistik",
    type: "numeric",
    tolerance: 3,
    unit: "Mio. €",
    prompt:
      "18 Bundesligisten haben folgenden Personalaufwand (Mio. €): 46.6, 78.0, 38.5, 57.2, 236.2, 128.3, 87.8, 28.4, 90.1, 17.3, 192.5, 151.7, 60.2, 102.0, 415.5, 28.3, 105.8, 113.3. Wie hoch ist das arithmetische Mittel (gerundet)?",
    correctValue: 109.9,
    explanation:
      "Summe ≈ 1977.7 Mio. € geteilt durch 18 Vereine ergibt ≈ 109.9 Mio. €. Der Modus wäre hier kein sinnvolles Lagemaß, da fast jeder Wert einzigartig ist.",
    source: "Tutorium 2, Aufgabe 2",
    free: true,
  },
  {
    id: "ds-05",
    topic: "Deskriptive Statistik",
    type: "numeric",
    prompt:
      "9 Personen verdienen (in €): 1005, 2324, 8432, 3321, 443, 6489, 2231, 3721, 232. Wie lautet der Median?",
    correctValue: 2324,
    explanation:
      "Sortiert: 232, 443, 1005, 2231, 2324, 3321, 3721, 6489, 8432. Der mittlere (5.) Wert ist 2324.",
    source: "Tutorium 3, Aufgabe 2",
    free: true,
  },
  {
    id: "ds-06",
    topic: "Deskriptive Statistik",
    type: "numeric",
    tolerance: 20,
    prompt: "Für dieselben 9 Einkommen: wie hoch ist das arithmetische Mittel?",
    correctValue: 3133,
    explanation:
      "Summe = 28198, geteilt durch 9 Personen ≈ 3133 €. Beachte: Der Mittelwert liegt wegen des Ausreißers 8432 deutlich über dem Median.",
    source: "Tutorium 3, Aufgabe 2",
    free: false,
  },
  {
    id: "ds-07",
    topic: "Deskriptive Statistik",
    type: "mc",
    prompt:
      "Eine neue Kantine soll dort stehen, wo möglichst wenige Beschäftigte ihre Halle verlassen müssen (Pforte 3, Halle 1: 200, Halle 2: 300, Halle 3: 497 Personen). Welches Lagemaß beschreibt dieses Kriterium?",
    options: ["Arithmetisches Mittel", "Median", "Modus", "Standardabweichung"],
    correctIndex: 2,
    explanation:
      "Der Modus ist die Ausprägung mit den meisten Beobachtungen — hier Halle 3 mit 497 Beschäftigten.",
    source: "Tutorium 4, Aufgabe 1",
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
    source: "Tutorium 3, Aufgabe 3",
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
    source: "Tutorium 4, Aufgabe 3",
    free: false,
  },
  {
    id: "ds-10",
    topic: "Deskriptive Statistik",
    type: "mc",
    prompt:
      "Fünf Eisverkäufer haben Umsätze 60,60,60,60,60 (Verteilung I). Wie groß ist der Gini-Koeffizient?",
    options: ["0 (Gleichverteilung)", "0,5", "1 (maximale Ungleichheit)", "Kann nicht berechnet werden"],
    correctIndex: 0,
    explanation:
      "Bei identischen Umsätzen liegt die Lorenzkurve auf der Diagonalen — perfekte Gleichverteilung, Gini = 0.",
    source: "Tutorium 4, Aufgabe 3",
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
    source: "Tutorium 5/6",
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
    source: "Tutorium 5, Aufgabe 5",
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
    source: "Tutorium 7, Aufgabe 1",
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
    source: "Tutorium 7, Aufgabe 1",
    free: true,
  },
  {
    id: "wr-03",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "mc",
    prompt:
      "Jonas absolviert 2 Sport-Einheiten aus 3 Sportarten. Reihenfolge egal, keine Wiederholung erlaubt. Wie viele Möglichkeiten gibt es?",
    options: ["3", "6", "9", "2"],
    correctIndex: 0,
    explanation: "Kombination ohne Wiederholung: C(3,2) = 3.",
    source: "Tutorium 6, Aufgabe 5",
    free: true,
  },
  {
    id: "wr-04",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "mc",
    prompt:
      "Gleiche Situation, aber Reihenfolge zählt und Wiederholung ist erlaubt. Wie viele Möglichkeiten?",
    options: ["6", "9", "3", "27"],
    correctIndex: 1,
    explanation: "Variation mit Wiederholung: 3² = 9.",
    source: "Tutorium 6, Aufgabe 5",
    free: true,
  },
  {
    id: "wr-05",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "numeric",
    tolerance: 0.02,
    prompt:
      "P(S)=0,3; P(U)=0,4; P(B)=0,15; alle drei zusammen P(U∩S∩B)=0,01. Wie groß ist die Wahrscheinlichkeit, dass jemand höchstens zwei der drei Verkehrsmittel nutzt?",
    correctValue: 0.99,
    explanation: "P(höchstens 2) = 1 − P(alle drei) = 1 − 0,01 = 0,99.",
    source: "Tutorium 7, Aufgabe 2",
    free: false,
  },
  {
    id: "wr-06",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "numeric",
    tolerance: 0.02,
    prompt:
      "Gleiche Angaben wie oben. Wie groß ist P(S∪B) — die Wahrscheinlichkeit, S-Bahn oder Bus zu nutzen? (P(S∩B)=0,05)",
    correctValue: 0.4,
    explanation: "P(S∪B) = P(S) + P(B) − P(S∩B) = 0,3 + 0,15 − 0,05 = 0,4.",
    source: "Tutorium 7, Aufgabe 2",
    free: false,
  },
  {
    id: "wr-07",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "numeric",
    tolerance: 0.03,
    prompt:
      "Carla nimmt mit 20% die Straßenbahn (dann >30min in 60% der Fälle) und sonst das Fahrrad (dann <30min in 70% der Fälle). Sie brauchte heute >30min. Mit welcher Wahrscheinlichkeit fuhr sie Straßenbahn? (Satz von Bayes)",
    correctValue: 0.33,
    explanation:
      "P(>30min) = 0,6·0,2 + 0,3·0,8 = 0,36. P(Tram|>30min) = 0,12/0,36 = 1/3 ≈ 0,33.",
    source: "Tutorium 7, Aufgabe 3",
    free: false,
  },
  {
    id: "wr-08",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "numeric",
    tolerance: 0.03,
    prompt:
      "Ein Test hat Sensitivität 95%, Spezifität 97%, Krankheitsanteil 2%. Wie hoch ist P(erkrankt | positiv getestet)?",
    correctValue: 0.39,
    explanation:
      "P(positiv) = 0,95·0,02 + 0,03·0,98 = 0,0484. P(erkrankt|positiv) = 0,019/0,0484 ≈ 0,39 — trotz gutem Test also nur ~39%!",
    source: "Tutorium 7, Aufgabe 4",
    free: false,
  },
  {
    id: "wr-09",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "numeric",
    tolerance: 0.02,
    prompt:
      "3 unabhängige Server benötigen mit p=0,1 / 0,2 / 0,15 Aufmerksamkeit. Wie groß ist die Wahrscheinlichkeit, dass keiner Aufmerksamkeit braucht?",
    correctValue: 0.612,
    explanation: "P(keiner) = 0,9 · 0,8 · 0,85 = 0,612.",
    source: "Tutorium 8, Aufgabe 1",
    free: false,
  },
  {
    id: "wr-10",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "mc",
    prompt:
      "Maschinen M1 (100 Stk., 5% Ausschuss), M2 (400 Stk., 4%), M3 (500 Stk., 2%). Ein zufälliges Ausschussstück wird gezogen. Welche Maschine hat es am wahrscheinlichsten produziert?",
    options: ["M1", "M2", "M3", "Alle gleich wahrscheinlich"],
    correctIndex: 1,
    explanation:
      "Erwartete Ausschussstücke: M1=5, M2=16, M3=10 (Summe 31). P(M2|Ausschuss)=16/31≈51,6% — am höchsten.",
    source: "Tutorium 8, Aufgabe 4",
    free: false,
  },
  {
    id: "wr-11",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "numeric",
    tolerance: 0.02,
    prompt:
      "X, Y unabhängig Bernoulli mit P(X=1)=0,3, P(Y=1)=0,2. S=X+Y. Wie groß ist P(S=2)?",
    correctValue: 0.06,
    explanation: "P(S=2) = P(X=1)·P(Y=1) = 0,3 · 0,2 = 0,06.",
    source: "Tutorium 8, Aufgabe 5",
    free: false,
  },
  {
    id: "wr-12",
    topic: "Wahrscheinlichkeitsrechnung",
    type: "numeric",
    tolerance: 0.02,
    prompt: "Gleiche Situation: wie groß ist P(S=1)?",
    correctValue: 0.38,
    explanation:
      "P(S=1) = P(X=1,Y=0)+P(X=0,Y=1) = 0,3·0,8 + 0,7·0,2 = 0,24+0,14 = 0,38.",
    source: "Tutorium 8, Aufgabe 5",
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
    source: "Tutorium 9, Aufgabe 1",
    free: true,
  },
  {
    id: "zv-02",
    topic: "Zufallsvariablen",
    type: "mc",
    prompt:
      "Eine diskrete Zufallsvariable X hat f(x)=(x²+4)/50 für x=0,1,2,3,4. Wie groß ist P(X=2)?",
    options: ["0,08", "0,16", "0,26", "0,40"],
    correctIndex: 1,
    explanation: "f(2) = (4+4)/50 = 8/50 = 0,16.",
    source: "Tutorium 8, Aufgabe 6",
    free: true,
  },
  {
    id: "zv-03",
    topic: "Zufallsvariablen",
    type: "numeric",
    tolerance: 0.02,
    prompt: "Gleiche Verteilung: wie groß ist P(X ≤ 2)?",
    correctValue: 0.34,
    explanation: "f(0)+f(1)+f(2) = 0,08+0,1+0,16 = 0,34.",
    source: "Tutorium 8, Aufgabe 6",
    free: false,
  },
  {
    id: "zv-04",
    topic: "Zufallsvariablen",
    type: "numeric",
    prompt:
      "Von X sind E(X)=4 und E(X²)=25 bekannt. Wie groß ist die Standardabweichung von X?",
    correctValue: 3,
    explanation: "Var(X) = E(X²) − E(X)² = 25 − 16 = 9, also σ = √9 = 3.",
    source: "Tutorium 9, Aufgabe 4",
    free: false,
  },
  {
    id: "zv-05",
    topic: "Zufallsvariablen",
    type: "mc",
    prompt:
      "Mit E(X)=4 und σ=3: welche Aussage trifft die Tschebyscheff-Ungleichung über P(X liegt außerhalb (0,8)) (also |X-4|≥4)?",
    options: [
      "P ≤ 9/16 = 0,5625",
      "P = 0 (unmöglich)",
      "P ≥ 0,5625",
      "Keine Aussage möglich",
    ],
    correctIndex: 0,
    explanation: "Tschebyscheff: P(|X−E(X)|≥k) ≤ Var(X)/k² = 9/16 = 0,5625 für k=4.",
    source: "Tutorium 9, Aufgabe 4",
    free: false,
  },
  {
    id: "zv-06",
    topic: "Zufallsvariablen",
    type: "numeric",
    tolerance: 0.05,
    prompt:
      "Diskrete ZV mit TX={0,4,6}, f(0)=0,5, f(4)=f(6)=0,25. Wie groß ist E(X)?",
    correctValue: 2.5,
    explanation: "E(X) = 0·0,5 + 4·0,25 + 6·0,25 = 1 + 1,5 = 2,5.",
    source: "Tutorium 9, Aufgabe 5",
    free: false,
  },
  {
    id: "zv-07",
    topic: "Zufallsvariablen",
    type: "numeric",
    tolerance: 0.1,
    prompt: "Gleiche Verteilung: wie groß ist Var(X)?",
    correctValue: 6.75,
    explanation: "E(X²) = 0·0,5+16·0,25+36·0,25 = 13. Var(X) = 13 − 2,5² = 13 − 6,25 = 6,75.",
    source: "Tutorium 9, Aufgabe 5",
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
    source: "Kapitel 4, Bivariate Zufallsvariablen",
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
    source: "Kapitel 5, Diskrete Verteilungen",
    free: true,
  },
  {
    id: "vm-02",
    topic: "Verteilungsmodelle",
    type: "numeric",
    prompt: "X ~ Binomial(n=10, p=0,3). Wie groß ist E(X)?",
    correctValue: 3,
    explanation: "E(X) = n·p = 10 · 0,3 = 3.",
    source: "Kapitel 5, Binomialverteilung",
    free: true,
  },
  {
    id: "vm-03",
    topic: "Verteilungsmodelle",
    type: "numeric",
    tolerance: 0.05,
    prompt: "X ~ Binomial(n=10, p=0,3). Wie groß ist Var(X)?",
    correctValue: 2.1,
    explanation: "Var(X) = n·p·(1−p) = 10 · 0,3 · 0,7 = 2,1.",
    source: "Kapitel 5, Binomialverteilung",
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
    source: "Kapitel 5, Approximationen",
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
    source: "Kapitel 5, Zentraler Grenzwertsatz",
    free: false,
  },
  {
    id: "vm-06",
    topic: "Verteilungsmodelle",
    type: "numeric",
    prompt:
      "Eine stetige ZV hat Dichte f(x)=3x² auf [0,1]. Wie groß ist E(X)?",
    correctValue: 0.75,
    explanation: "E(X) = ∫₀¹ x·3x² dx = ∫₀¹ 3x³ dx = 3/4 = 0,75.",
    source: "Tutorium 9, Aufgabe 5",
    free: false,
  },
  {
    id: "vm-07",
    topic: "Verteilungsmodelle",
    type: "numeric",
    tolerance: 0.01,
    prompt: "Gleiche Dichte f(x)=3x² auf [0,1]. Wie groß ist Var(X)?",
    correctValue: 0.0375,
    explanation: "E(X²)=∫₀¹3x⁴dx=3/5=0,6. Var(X)=0,6−0,75²=0,6−0,5625=0,0375.",
    source: "Tutorium 9, Aufgabe 5",
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
    source: "Kapitel 5, Stetige Verteilungen",
    free: false,
  },
];

export function questionsByTopic(topic: string): Question[] {
  return questions.filter((q) => q.topic === topic);
}
