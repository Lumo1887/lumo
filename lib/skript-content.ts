import type { FigureType } from "@/components/SkriptFigures";

export interface SkriptSection {
  id: string;
  heading: string;
  body: string[];
  formulas?: string[];
  example?: string;
  figure?: { type: FigureType; caption: string };
}

export interface SkriptChapter {
  id: string;
  number: number;
  title: string;
  free: boolean;
  intro: string;
  sections: SkriptSection[];
}

export const skriptChapters: SkriptChapter[] = [
  {
    id: "deskriptive-statistik",
    number: 2,
    title: "Deskriptive Statistik",
    free: true,
    intro:
      "Deskriptive Statistik fasst erhobene Daten übersichtlich zusammen — durch Kennzahlen (Lage, Streuung, Zusammenhang) und Grafiken (Histogramm, Boxplot, Lorenzkurve).",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Grundbegriffe",
        body: [
          "Die Grundgesamtheit ist die Menge aller statistischen Einheiten, die untersucht werden sollen. Jede einzelne Einheit (z. B. eine Person, ein Unternehmen) trägt ein oder mehrere Merkmale, deren konkrete Ausprägung sich von Einheit zu Einheit unterscheiden kann.",
          "Merkmale werden nach ihrem Skalenniveau unterschieden: nominal (nur Gleichheit/Ungleichheit sinnvoll, z. B. Geschlecht), ordinal (Rangfolge sinnvoll, z. B. Schulnote) und metrisch (Abstände bzw. Verhältnisse sinnvoll, z. B. Einkommen, Größe). Metrische Merkmale unterteilt man weiter in diskret (abzählbare Ausprägungen, z. B. Kinderzahl) und stetig (jeder Wert in einem Intervall möglich, z. B. Körpergröße).",
          "Weitere wichtige Unterscheidungen: häufbare Merkmale (eine Einheit kann mehrere Ausprägungen gleichzeitig haben, z. B. gesprochene Sprachen) vs. nicht häufbare Merkmale, sowie Bestandsmassen (Momentaufnahme, z. B. Einwohnerzahl an einem Stichtag) vs. Bewegungsmassen (Ereignisse über einen Zeitraum, z. B. Neuzulassungen pro Jahr).",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Häufigkeitsverteilungen",
        body: [
          "Für ein Merkmal mit Ausprägungen a1, ..., ak zählt die absolute Häufigkeit h(ai), wie oft eine Ausprägung im Datensatz vorkommt. Die relative Häufigkeit f(ai) = h(ai)/n normiert dies auf den Stichprobenumfang n.",
          "Die empirische Verteilungsfunktion F(x) gibt an, welcher Anteil der Beobachtungen kleiner oder gleich x ist. Sie ist eine monoton wachsende Treppenfunktion, die bei 0 beginnt und bei 1 endet.",
        ],
        formulas: ["F(x) = Anzahl(Xi ≤ x) / n = Σ f(ai) für alle ai ≤ x"],
      },
      {
        id: "2-3",
        heading: "2.3 Lageparameter",
        body: [
          "Der Modus xD ist die am häufigsten auftretende Ausprägung — er ist auf jedem Skalenniveau definiert.",
          "Der Median x0,5 teilt die der Größe nach sortierten Daten in zwei gleich große Hälften. Bei geradem n ist er das arithmetische Mittel der beiden mittleren Werte.",
          "Das arithmetische Mittel x̄ ist nur für metrische Merkmale sinnvoll und reagiert empfindlich auf Ausreißer (im Gegensatz zum Median).",
          "p-Quantile verallgemeinern den Median: das p-Quantil xp lässt einen Anteil p der Daten darunter und (1−p) darüber.",
        ],
        formulas: [
          "x̄ = (1/n) · Σ xi",
          "gewichtetes Mittel: x̄ = Σ wi·xi mit Σ wi = 1",
        ],
        example:
          "Bei den Einkommen 1005, 2324, 8432, 3321, 443, 6489, 2231, 3721, 232 (n=9) ist der Median der mittlere Wert der sortierten Liste, das arithmetische Mittel liegt wegen des Ausreißers 8432 deutlich über dem Median.",
      },
      {
        id: "2-4",
        heading: "2.4 Streuungsparameter",
        body: [
          "Streuungsmaße beschreiben, wie stark die Daten um ihr Zentrum variieren. Die Spannweite (Max − Min) ist einfach, aber ausreißeranfällig. Der Interquartilsabstand IQR = x0,75 − x0,25 ist robuster — er entspricht genau der Breite der Box in einem Boxplot (siehe Abbildung).",
          "Die Varianz misst die mittlere quadrierte Abweichung vom Mittelwert, die Standardabweichung ist ihre Wurzel und hat dieselbe Einheit wie die Daten. Der Variationskoeffizient (Standardabweichung/Mittelwert) erlaubt den Vergleich der Streuung unabhängig von der Maßeinheit — nützlich z. B. beim Vergleich von Einkommen in unterschiedlichen Währungen.",
        ],
        formulas: [
          "Var(x) = (1/n) · Σ (xi − x̄)²",
          "s = √Var(x)",
          "Variationskoeffizient v = s / x̄",
        ],
        figure: {
          type: "boxplot",
          caption: "Abb. 2.1 — Boxplot: Median, Quartile (Box = IQR) und Ausreißer auf einen Blick.",
        },
      },
      {
        id: "2-5",
        heading: "2.5 Grafische Darstellungen: Histogramm & Boxplot",
        body: [
          "Ein Histogramm zeigt die Häufigkeitsdichte (Häufigkeit / Klassenbreite) klassierter Daten. Zu breite Klassen verwischen Strukturen, zu schmale Klassen erzeugen ein verrauschtes Bild mit vielen leeren Klassen.",
          "Der Boxplot stellt Median, unteres/oberes Quartil (Box) sowie Minimum/Maximum bzw. Whisker dar und macht Schiefe und Ausreißer auf einen Blick sichtbar. Liegt der Median näher am unteren Quartil und ist der obere Whisker länger, deutet das auf eine rechtsschiefe Verteilung hin.",
        ],
        figure: {
          type: "histogram",
          caption: "Abb. 2.2 — Histogramm: Balkenhöhe entspricht der Häufigkeitsdichte je Klasse.",
        },
      },
      {
        id: "2-6",
        heading: "2.6 Konzentration: Lorenzkurve & Gini-Koeffizient",
        body: [
          "Die Lorenzkurve stellt dar, welcher kumulierte Anteil einer Größe (z. B. Einkommen) auf den kumulierten Anteil der Einheiten entfällt. Bei perfekter Gleichverteilung liegt die Kurve auf der Diagonalen; je stärker sie durchhängt, desto ungleicher ist die Verteilung.",
          "Der Gini-Koeffizient ist das Doppelte der Fläche zwischen Diagonale und Lorenzkurve und liegt zwischen 0 (Gleichverteilung) und (nahe) 1 (maximale Konzentration).",
        ],
        figure: {
          type: "lorenz",
          caption: "Abb. 2.3 — Lorenzkurve: Fläche zwischen Diagonale und Kurve bestimmt den Gini-Koeffizienten.",
        },
      },
      {
        id: "2-7",
        heading: "2.7 Zusammenhangsmaße",
        body: [
          "Für zwei nominale/ordinale Merkmale zeigt eine Kontingenztabelle die gemeinsame Häufigkeitsverteilung. Der (korrigierte) Kontingenzkoeffizient misst die Stärke des Zusammenhangs unabhängig von der Tabellengröße.",
          "Für zwei metrische Merkmale misst die Kovarianz die gemeinsame Richtung der Abweichung vom jeweiligen Mittelwert; der Korrelationskoeffizient nach Bravais-Pearson normiert dies auf den Bereich [−1, 1]. Für ordinale bzw. nicht-lineare monotone Zusammenhänge eignen sich die Rangkorrelationskoeffizienten nach Spearman und Kendall besser.",
          "Zwei Merkmale heißen empirisch unabhängig, wenn die gemeinsame relative Häufigkeit stets dem Produkt der Randhäufigkeiten entspricht.",
        ],
        formulas: [
          "Cov(x,y) = (1/n) · Σ (xi − x̄)(yi − ȳ)",
          "r = Cov(x,y) / (sx · sy)",
        ],
      },
    ],
  },
  {
    id: "wahrscheinlichkeitsrechnung",
    number: 3,
    title: "Wahrscheinlichkeitsrechnung",
    free: false,
    intro:
      "Die Wahrscheinlichkeitsrechnung liefert das mathematische Fundament, um Unsicherheit zu quantifizieren — von Zufallsexperimenten über Kombinatorik bis zum Satz von Bayes.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Zufallsexperimente & Ereignisse",
        body: [
          "Ein Zufallsexperiment hat einen Ergebnisraum Ω, der alle möglichen Ausgänge enthält. Ein Ereignis A ist eine Teilmenge von Ω. Mit den Mengenoperationen Vereinigung (A∪B), Schnitt (A∩B) und Komplement (Ā) lassen sich zusammengesetzte Ereignisse beschreiben.",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Wahrscheinlichkeitsbegriffe",
        body: [
          "Der klassische (Laplace-)Wahrscheinlichkeitsbegriff setzt gleichwahrscheinliche Elementarereignisse voraus: P(A) = |A|/|Ω|.",
          "Der statistische Wahrscheinlichkeitsbegriff nähert P(A) durch die relative Häufigkeit von A bei vielen Wiederholungen an.",
          "Der axiomatische Zugang (Kolmogorov) definiert Wahrscheinlichkeit über drei Axiome: P(A) ≥ 0, P(Ω) = 1, und Additivität für disjunkte Ereignisse.",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Kombinatorik",
        body: [
          "Permutationen zählen die Anordnungen von n unterscheidbaren Objekten: n!.",
          "Variationen zählen geordnete Auswahlen von k aus n Objekten — mit Wiederholung nᵏ, ohne Wiederholung n!/(n−k)!.",
          "Kombinationen zählen ungeordnete Auswahlen von k aus n Objekten — ohne Wiederholung über den Binomialkoeffizienten, mit Wiederholung über eine erweiterte Formel.",
        ],
        formulas: [
          "Variation ohne Wiederholung: n! / (n−k)!",
          "Kombination ohne Wiederholung: C(n,k) = n! / (k!·(n−k)!)",
        ],
        example:
          "Beim Skat werden 10 aus 32 Karten gezogen — die Anzahl möglicher Kartenkombinationen (ohne Reihenfolge, ohne Wiederholung) ist C(32,10), eine astronomisch große Zahl, die auch bei 200 Spielen täglich ein Leben lang nicht ausgeschöpft werden kann.",
      },
      {
        id: "3-4",
        heading: "3.4 Additionssatz & bedingte Wahrscheinlichkeit",
        body: [
          "Der Additionssatz berechnet die Wahrscheinlichkeit einer Vereinigung zweier Ereignisse, wobei die Schnittmenge nicht doppelt gezählt werden darf.",
          "Die bedingte Wahrscheinlichkeit P(A|B) gibt an, wie wahrscheinlich A ist, wenn bereits bekannt ist, dass B eingetreten ist.",
          "Zwei Ereignisse A und B heißen (stochastisch) unabhängig, wenn P(A∩B) = P(A)·P(B) gilt — äquivalent dazu, dass P(A|B) = P(A).",
        ],
        formulas: [
          "P(A∪B) = P(A) + P(B) − P(A∩B)",
          "P(A|B) = P(A∩B) / P(B), sofern P(B) > 0",
          "Multiplikationssatz: P(A∩B) = P(A|B)·P(B)",
        ],
        figure: {
          type: "venn",
          caption: "Abb. 3.1 — Venn-Diagramm: die Schnittmenge A∩B wird beim Additionssatz nur einmal gezählt.",
        },
      },
      {
        id: "3-5",
        heading: "3.5 Totale Wahrscheinlichkeit & Satz von Bayes",
        body: [
          "Bilden B1, ..., Bk eine vollständige Zerlegung von Ω, lässt sich P(A) über die totale Wahrscheinlichkeit aus den bedingten Wahrscheinlichkeiten P(A|Bi) berechnen.",
          "Der Satz von Bayes kehrt die Bedingungsrichtung um und ist zentral für Anwendungen wie medizinische Tests: Aus Sensitivität und Spezifität eines Tests sowie der Grundrate einer Krankheit lässt sich berechnen, wie wahrscheinlich eine Erkrankung bei positivem Testergebnis tatsächlich ist — ein Wert, der wegen niedriger Grundraten oft überraschend klein ausfällt.",
          "Das Monty-Hall-Problem (Ziegenproblem) ist ein klassisches, unintuitives Beispiel: Wechselt man nach der Aufdeckung einer Niete die Wahl, verdoppelt sich die Gewinnwahrscheinlichkeit von 1/3 auf 2/3.",
        ],
        formulas: [
          "Totale Wahrscheinlichkeit: P(A) = Σ P(A|Bi)·P(Bi)",
          "Satz von Bayes: P(Bi|A) = P(A|Bi)·P(Bi) / Σj P(A|Bj)·P(Bj)",
        ],
        figure: {
          type: "tree",
          caption: "Abb. 3.2 — Wahrscheinlichkeitsbaum: jeder Pfad multipliziert die Wahrscheinlichkeiten entlang der Äste.",
        },
      },
    ],
  },
  {
    id: "zufallsvariablen",
    number: 4,
    title: "Zufallsvariablen",
    free: false,
    intro:
      "Zufallsvariablen übersetzen Zufallsexperimente in Zahlen und erlauben es, Erwartungswert, Streuung und Zusammenhang formal zu berechnen.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Diskrete & stetige Zufallsvariablen",
        body: [
          "Eine Zufallsvariable X ordnet jedem Ergebnis eines Zufallsexperiments eine Zahl zu. Sie heißt diskret, wenn sie höchstens abzählbar viele Werte annehmen kann (beschrieben durch eine Wahrscheinlichkeitsfunktion f(x) = P(X = x)), und stetig, wenn sie jeden Wert in einem Intervall annehmen kann (beschrieben durch eine Dichtefunktion f(x), wobei P(X = x) = 0 für jeden Einzelwert gilt und stattdessen Flächen unter f interpretiert werden).",
          "Die Verteilungsfunktion F(x) = P(X ≤ x) existiert für beide Typen und ist monoton wachsend von 0 nach 1 — bei diskreten Zufallsvariablen als Treppenfunktion mit Sprüngen an den möglichen Werten.",
        ],
        figure: {
          type: "distribution-function",
          caption: "Abb. 4.1 — Verteilungsfunktion einer diskreten Zufallsvariable: Sprünge an jeder möglichen Ausprägung.",
        },
      },
      {
        id: "4-2",
        heading: "4.2 Erwartungswert & Varianz",
        body: [
          "Der Erwartungswert E(X) ist das mit den Wahrscheinlichkeiten gewichtete Mittel aller möglichen Werte — das theoretische Gegenstück zum arithmetischen Mittel.",
          "Die Varianz Var(X) misst die erwartete quadrierte Abweichung vom Erwartungswert. Für lineare Transformationen Y = aX + b gelten einfache Rechenregeln.",
          "Die Tschebyscheff-Ungleichung liefert eine verteilungsunabhängige obere Schranke dafür, wie wahrscheinlich große Abweichungen vom Erwartungswert sind.",
        ],
        formulas: [
          "Diskret: E(X) = Σ x·f(x)   |   Stetig: E(X) = ∫ x·f(x) dx",
          "Var(X) = E(X²) − (E(X))²",
          "E(aX+b) = a·E(X) + b,   Var(aX+b) = a²·Var(X)",
          "Tschebyscheff: P(|X − E(X)| ≥ k) ≤ Var(X)/k²",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Schiefe & Kurtosis",
        body: [
          "Die Schiefe beschreibt die Asymmetrie einer Verteilung (rechtsschief: langer rechter Ausläufer, Mittelwert > Median; linksschief: umgekehrt). Die Kurtosis (Wölbung) beschreibt, wie spitz bzw. flach eine Verteilung im Vergleich zur Normalverteilung ist.",
        ],
      },
      {
        id: "4-4",
        heading: "4.4 Bivariate Zufallsvariablen",
        body: [
          "Bei zwei Zufallsvariablen X und Y beschreibt die gemeinsame Verteilung, wie wahrscheinlich Kombinationen von Werten sind. Kovarianz und Korrelation von Zufallsvariablen werden analog zur deskriptiven Statistik definiert, beziehen sich aber auf Erwartungswerte statt auf Stichprobenmittel. X und Y heißen unabhängig, wenn die gemeinsame Verteilung in das Produkt der Randverteilungen zerfällt — daraus folgt insbesondere Cov(X,Y) = 0 (die Umkehrung gilt im Allgemeinen nicht).",
        ],
        formulas: [
          "Cov(X,Y) = E(XY) − E(X)·E(Y)",
          "Corr(X,Y) = Cov(X,Y) / (σX·σY)",
        ],
      },
    ],
  },
  {
    id: "verteilungsmodelle",
    number: 5,
    title: "Verteilungsmodelle",
    free: false,
    intro:
      "Verteilungsmodelle sind Standard-Bausteine, mit denen sich viele reale Zufallsphänomene modellieren lassen — von der Münzwurf-Serie bis zur Körpergröße.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Diskrete Verteilungen",
        body: [
          "Die diskrete Gleichverteilung modelliert Situationen mit endlich vielen, gleichwahrscheinlichen Ausprägungen (z. B. ein fairer Würfel).",
          "Die Bernoulli-Verteilung beschreibt ein einzelnes Experiment mit zwei Ausgängen (Erfolg/Misserfolg) und Erfolgswahrscheinlichkeit p.",
          "Die Binomialverteilung B(n,p) zählt die Anzahl der Erfolge bei n unabhängigen Bernoulli-Versuchen mit gleicher Erfolgswahrscheinlichkeit p — z. B. die Anzahl Kopf bei n Münzwürfen. Für n=8, p=0,5 ergibt sich die typische, um n·p symmetrische Glockenform aus der Abbildung.",
          "Die hypergeometrische Verteilung modelliert das Ziehen ohne Zurücklegen aus einer endlichen Grundgesamtheit mit zwei Gruppen (z. B. Anzahl defekter Teile in einer Stichprobe ohne Zurücklegen).",
          "Die Poisson-Verteilung modelliert die Anzahl seltener Ereignisse in einem festen Zeit- oder Raumintervall (z. B. Anzahl Kundenanrufe pro Stunde) und ergibt sich als Grenzwert der Binomialverteilung für große n und kleine p bei konstantem λ = n·p.",
        ],
        formulas: [
          "Bernoulli: E(X) = p, Var(X) = p(1−p)",
          "Binomial B(n,p): P(X=k) = C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ, E(X) = np, Var(X) = np(1−p)",
          "Poisson: P(X=k) = e^(−λ)·λᵏ / k!, E(X) = Var(X) = λ",
        ],
        figure: {
          type: "binomial-bars",
          caption: "Abb. 5.1 — Binomialverteilung B(n,p): diskrete, glockenförmige Häufigkeitsverteilung.",
        },
      },
      {
        id: "5-2",
        heading: "5.2 Stetige Verteilungen",
        body: [
          "Die stetige Gleichverteilung auf [a,b] modelliert Situationen ohne bevorzugten Bereich innerhalb eines Intervalls.",
          "Die Exponentialverteilung modelliert Wartezeiten zwischen zufälligen Ereignissen (z. B. Zeit bis zum nächsten Anruf) und ist eng mit der Poisson-Verteilung verwandt.",
          "Die Normalverteilung N(μ,σ²) ist die zentrale Verteilung der Statistik: glockenförmig, symmetrisch um μ, mit Streuung σ². Die Standardnormalverteilung ist der Spezialfall μ=0, σ²=1; jede Normalverteilung lässt sich durch Standardisierung (Z = (X−μ)/σ) darauf zurückführen.",
          "Der Zentrale Grenzwertsatz erklärt, warum die Normalverteilung so oft auftritt: Die Summe (bzw. der Mittelwert) vieler unabhängiger Zufallsvariablen ist näherungsweise normalverteilt — unabhängig von der Verteilung der einzelnen Summanden.",
          "Chi-Quadrat-, t- und F-Verteilung entstehen aus Transformationen normalverteilter Zufallsvariablen und werden vor allem in der schließenden Statistik (Statistik II) für Tests und Konfidenzintervalle benötigt.",
        ],
        formulas: [
          "Standardisierung: Z = (X − μ) / σ",
          "Normalverteilung Dichte: f(x) = 1/(σ√(2π)) · e^(−(x−μ)²/(2σ²))",
        ],
        figure: {
          type: "normal-curve",
          caption: "Abb. 5.2 — Normalverteilung: symmetrische Glockenkurve um den Erwartungswert μ.",
        },
      },
      {
        id: "5-3",
        heading: "5.3 Approximationen zwischen Verteilungen",
        body: [
          "Für großes n lässt sich die Binomialverteilung durch die Normalverteilung approximieren (Normalapproximation), was Berechnungen bei großen n stark vereinfacht.",
          "Für große n und kleine p approximiert die Poisson-Verteilung die Binomialverteilung — praktisch, wenn n nicht genau bekannt oder sehr groß ist, aber λ = np geschätzt werden kann.",
        ],
      },
    ],
  },
];
