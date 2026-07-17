import type { SkriptChapter } from "./types";

// Hinweis zur Kapitelreihenfolge: Die Reihenfolge und Nummerierung hier
// folgt bewusst NICHT 1:1 der Reihenfolge der Vorlesungsfolien. Wahrscheinlichkeitsrechnung
// bildet hier den Einstieg, Deskriptive Statistik steht am Ende.
export const chapters: SkriptChapter[] = [
  {
    id: "wahrscheinlichkeitsrechnung",
    number: 1,
    title: "Wahrscheinlichkeitsrechnung",
    free: true,
    intro:
      "Die Wahrscheinlichkeitsrechnung liefert das Fundament, um Unsicherheit zu quantifizieren. Sie bildet hier den Einstieg und legt die Grundlage für die Zufallsvariablen im nächsten Kapitel (was könnte theoretisch passieren) — später greifen auch die Verteilungsmodelle und die deskriptive Statistik immer wieder auf diese Grundbegriffe zurück.",
    sections: [
      {
        id: "3-1",
        heading: "1.1 Zufallsexperiment und Ergebnisraum",
        body: [
          "Ein Zufallsexperiment ist ein Vorgang, dessen Ergebnis nicht sicher vorhersagbar ist, der aber unter denselben Bedingungen beliebig oft wiederholbar wäre, z. B. ein Würfelwurf oder eine Klausur.",
        ],
        terms: [
          {
            term: "Ergebnisraum Ω",
            definition: "Enthält alle möglichen, sich gegenseitig ausschließenden Ausgänge, z. B. beim Würfeln Ω={1,2,3,4,5,6}.",
          },
          {
            term: "Elementarereignis",
            definition: "Ein einzelnes Ergebnis aus Ω, z. B. die gewürfelte Zahl 4.",
          },
        ],
      },
      {
        id: "3-2",
        heading: "1.2 Ereignisse und Mengenoperationen",
        body: [
          "Ein Ereignis A ist eine Teilmenge von Ω und tritt ein, wenn das tatsächliche Ergebnis in dieser Teilmenge liegt.",
          "Fast jeder Fehler bei Wahrscheinlichkeitsaufgaben lässt sich vermeiden, indem man sich zuerst sauber überlegt, welche Menge genau gemeint ist, bevor man rechnet.",
        ],
        terms: [
          {
            term: "Vereinigung A∪B",
            definition: "A oder B oder beide treten ein.",
          },
          {
            term: "Schnitt A∩B",
            definition: "A und B treten beide ein.",
          },
          {
            term: "Komplement Ā",
            definition: "A tritt nicht ein (Ω ohne A).",
          },
          {
            term: "Disjunkt",
            definition: "A∩B = ∅ — A und B können nicht gleichzeitig eintreten.",
          },
        ],
        figure: {
          type: "venn",
          caption: "Abb. 1.1 — Venn-Diagramm: die Schnittmenge A∩B wird beim Additionssatz nur einmal gezählt.",
        },
        examples: [
          "Zwei Würfel: A = Augensumme ist gerade, B = mindestens eine 6. A∩B = Augensumme gerade und mindestens eine 6, z. B. (6,2), (6,4), (6,6).",
        ],
      },
      {
        id: "3-3",
        heading: "1.3 Wahrscheinlichkeitsbegriffe",
        body: [
          "Es gibt drei unterschiedliche Zugänge, was Wahrscheinlichkeit überhaupt bedeutet. In der Klausur wird gerne gefragt, welcher Begriff in einer konkreten Situation zutrifft.",
        ],
        terms: [
          {
            term: "Laplace-Wahrscheinlichkeit",
            definition: "P(A) = günstige Fälle / mögliche Fälle. Setzt gleichwahrscheinliche Elementarereignisse voraus, z. B. einen fairen Würfel.",
          },
          {
            term: "Statistische Wahrscheinlichkeit",
            definition: "Nähert P(A) durch die relative Häufigkeit bei sehr vielen Wiederholungen an. Funktioniert auch bei nicht gleichwahrscheinlichen Ausgängen.",
          },
          {
            term: "Axiomatische Wahrscheinlichkeit (Kolmogorov)",
            definition: "Definiert Wahrscheinlichkeit rein formal über drei Axiome: P(A)≥0, P(Ω)=1, und Additivität für disjunkte Ereignisse.",
          },
        ],
      },
      {
        id: "3-4",
        heading: "1.4 Kombinatorik: Permutation und Variation",
        body: [
          "Kombinatorik zählt, wie viele Möglichkeiten es für eine Auswahl oder Anordnung gibt. Die zentrale Frage: Kommt es auf die Reihenfolge an, und ist Wiederholung erlaubt?",
        ],
        terms: [
          {
            term: "Permutation",
            definition: "Anordnungen von n unterscheidbaren Objekten in einer Reihe: n! Möglichkeiten.",
          },
          {
            term: "Variation",
            definition: "Geordnete Auswahl von k aus n Objekten. Mit Wiederholung: nᵏ. Ohne Wiederholung: n!/(n−k)!.",
          },
        ],
        formulas: ["Variation ohne Wiederholung: n! / (n−k)!"],
        formulasLatex: ["\\dfrac{n!}{(n-k)!}"],
        examples: [
          "5 Personen in einer Schlange: 5! = 120 Reihenfolgen. Ein 4-stelliger PIN aus Ziffern 0–9 mit Wiederholung: 10⁴.",
        ],
      },
      {
        id: "3-5",
        heading: "1.5 Kombinatorik: Kombination",
        body: [
          "Kombinationen zählen ungeordnete Auswahlen — die Reihenfolge zählt hier nicht.",
          "Merkregel: Wird nach Anordnungen oder Reihenfolgen gefragt, ist es eine Variation oder Permutation. Wird nach Auswahlen oder Teams gefragt, ist es eine Kombination.",
        ],
        terms: [
          {
            term: "Kombination",
            definition: "Ungeordnete Auswahl von k aus n Objekten ohne Wiederholung.",
          },
          {
            term: "Binomialkoeffizient C(n,k)",
            definition: "n! / (k! · (n−k)!). Zählt die Anzahl der Kombinationen.",
          },
        ],
        formulas: ["Kombination ohne Wiederholung: C(n,k) = n! / (k!·(n−k)!)"],
        formulasLatex: ["C(n,k) = \\dfrac{n!}{k!\\,(n-k)!}"],
        examples: [
          "Beim Skat werden 10 aus 32 Karten gezogen: C(32,10) ≈ 64,5 Millionen Möglichkeiten.",
          "Jonas wählt 2 Sportarten aus 3 (Fußball, Schwimmen, Tennis), Reihenfolge egal: C(3,2) = 3 Möglichkeiten.",
        ],
      },
      {
        id: "3-6",
        heading: "1.6 Additionssatz",
        body: [
          "Naiv würde man P(A)+P(B) rechnen, aber dabei wird die Schnittmenge A∩B doppelt gezählt — deshalb muss sie einmal abgezogen werden.",
        ],
        terms: [
          {
            term: "Additionssatz",
            definition: "P(A∪B) = P(A) + P(B) − P(A∩B). Sind A und B disjunkt, vereinfacht sich das zu P(A)+P(B).",
          },
        ],
        formulas: ["P(A∪B) = P(A) + P(B) − P(A∩B)"],
        formulasLatex: ["P(A\\cup B) = P(A) + P(B) - P(A\\cap B)"],
        examples: [
          "32 Skatkarten: P(Ass)=4/32, P(Pik)=8/32, P(Ass∩Pik)=1/32 (Pik-Ass). P(Ass∪Pik) = 4/32+8/32−1/32 = 11/32.",
        ],
      },
      {
        id: "3-7",
        heading: "1.7 Bedingte Wahrscheinlichkeit und Unabhängigkeit",
        body: [
          "Die bedingte Wahrscheinlichkeit P(A|B) gibt an, wie wahrscheinlich A ist, wenn man bereits weiß, dass B eingetreten ist.",
          "Achtung: Disjunktheit und Unabhängigkeit sind nicht dasselbe. Zwei Ereignisse mit positiver Wahrscheinlichkeit, die disjunkt sind, können nie unabhängig sein — wenn B eintritt, weiß man ja sofort, dass A nicht eingetreten ist.",
        ],
        terms: [
          {
            term: "Bedingte Wahrscheinlichkeit",
            definition: "P(A|B) = P(A∩B) / P(B). Der Anteil von A∩B innerhalb von B.",
          },
          {
            term: "Stochastische Unabhängigkeit",
            definition: "P(A∩B) = P(A)·P(B), äquivalent zu P(A|B) = P(A). Das Wissen um B verändert die Wahrscheinlichkeit von A nicht.",
          },
          {
            term: "Multiplikationssatz",
            definition: "P(A∩B) = P(A|B)·P(B). Nützlich, wenn bedingte Wahrscheinlichkeiten bekannt sind, z. B. aus einem Wahrscheinlichkeitsbaum.",
          },
        ],
        formulas: ["P(A|B) = P(A∩B) / P(B), sofern P(B) > 0"],
        formulasLatex: ["P(A \\mid B) = \\dfrac{P(A\\cap B)}{P(B)}, \\quad P(B) > 0"],
        examples: [
          "40 Prozent Frauen, 25 Prozent aller Studierenden mit Auslandssemester, davon 60 Prozent Frauen. P(A∩F) = 0,6·0,25 = 0,15. P(A|F) = 0,15/0,4 = 0,375.",
        ],
      },
      {
        id: "3-8",
        heading: "1.8 Totale Wahrscheinlichkeit und Satz von Bayes",
        body: [
          "Bilden B1 bis Bk eine vollständige Zerlegung von Ω, lässt sich P(A) aus den bedingten Wahrscheinlichkeiten P(A|Bi) berechnen. Ein Wahrscheinlichkeitsbaum ist dafür die ideale Visualisierung.",
          "Der Satz von Bayes kehrt die Bedingungsrichtung um: Man kennt P(A|Bi), sucht aber P(Bi|A) — diese beiden sind meist nicht gleich, ein sehr häufiger Denkfehler.",
          "Klassisches Beispiel: medizinische Tests. Selbst ein Test mit hoher Sensitivität und Spezifität kann bei seltenen Krankheiten dazu führen, dass P(krank | positiv getestet) überraschend niedrig ausfällt, weil es viel mehr Gesunde gibt.",
        ],
        terms: [
          {
            term: "Vollständige Zerlegung",
            definition: "B1,...,Bk sind paarweise disjunkt und decken zusammen ganz Ω ab.",
          },
          {
            term: "Satz von Bayes",
            definition: "Berechnet P(Bi|A) aus P(A|Bi) und den Wahrscheinlichkeiten P(Bi).",
          },
        ],
        formulas: [
          "Totale Wahrscheinlichkeit: P(A) = Σ P(A|Bi)·P(Bi)",
          "Satz von Bayes: P(Bi|A) = P(A|Bi)·P(Bi) / Σj P(A|Bj)·P(Bj)",
        ],
        formulasLatex: [
          "P(A) = \\sum_i P(A\\mid B_i)\\, P(B_i)",
          "P(B_i\\mid A) = \\dfrac{P(A\\mid B_i)\\,P(B_i)}{\\sum_j P(A\\mid B_j)\\,P(B_j)}",
        ],
        figure: {
          type: "tree",
          caption: "Abb. 1.2 — Wahrscheinlichkeitsbaum: jeder Pfad multipliziert die Wahrscheinlichkeiten entlang der Äste.",
        },
        examples: [
          "Qualitätskontrolle eines Bauteils: Erkennungsrate für fehlerhafte Teile 94%, korrekte Erkennung intakter Teile 98%, 4% aller Teile sind tatsächlich fehlerhaft. P(als fehlerhaft erkannt) = 0,94·0,04+0,02·0,96 = 0,0568. P(fehlerhaft|erkannt) = 0,0376/0,0568 ≈ 0,66.",
          "Ein Vertriebler nimmt mit 40% Wahrscheinlichkeit das Flugzeug (dann pünktlich in 90% der Fälle) und sonst das Auto (dann pünktlich in 65% der Fälle). Er kam pünktlich an: P(Flugzeug|pünktlich) = 0,36/0,75 = 0,48.",
        ],
      },
    ],
  },
  {
    id: "zufallsvariablen",
    number: 2,
    title: "Zufallsvariablen",
    free: false,
    intro:
      "Zufallsvariablen übersetzen Zufallsexperimente in Zahlen und erlauben es, Erwartungswert, Streuung und Zusammenhang formal zu berechnen — das Bindeglied zwischen der Wahrscheinlichkeitsrechnung in Kapitel 1 und den Verteilungsmodellen im nächsten Kapitel.",
    sections: [
      {
        id: "4-1",
        heading: "2.1 Was ist eine Zufallsvariable?",
        body: [
          "Eine Zufallsvariable X ordnet jedem Ergebnis eines Zufallsexperiments eine reelle Zahl zu — z. B. die Augensumme zweier Würfel statt das konkrete Zahlenpaar.",
        ],
        terms: [
          {
            term: "Zufallsvariable X",
            definition: "Formal eine Funktion X: Ω → ℝ.",
          },
        ],
      },
      {
        id: "4-2",
        heading: "2.2 Diskrete Zufallsvariablen",
        body: [
          "X heißt diskret, wenn sie höchstens abzählbar viele Werte annehmen kann.",
        ],
        terms: [
          {
            term: "Wahrscheinlichkeitsfunktion f(x)",
            definition: "f(x) = P(X=x). Für eine gültige Wahrscheinlichkeitsfunktion muss f(x)≥0 gelten und die Summe über alle f(x) muss 1 ergeben.",
          },
        ],
        examples: [
          "X = Augensumme zweier fairer Würfel. f(7) = 6/36, die häufigste Summe.",
        ],
      },
      {
        id: "4-3",
        heading: "2.3 Stetige Zufallsvariablen",
        body: [
          "X heißt stetig, wenn sie jeden Wert in einem Intervall theoretisch annehmen kann.",
          "Wichtig: bei stetigen Zufallsvariablen ist P(X=x) für jeden einzelnen Wert x immer exakt 0. Sinnvoll interpretierbar sind nur Wahrscheinlichkeiten für Intervalle.",
        ],
        terms: [
          {
            term: "Dichtefunktion f(x)",
            definition: "Beschreibt eine stetige Zufallsvariable. Wahrscheinlichkeiten ergeben sich als Fläche unter f(x) über einem Intervall.",
          },
        ],
        examples: [
          "X = Wartezeit an einer Bushaltestelle in Minuten. P(X=5,000...) ist exakt 0, aber P(4≤X≤6) kann z. B. 0,3 sein.",
        ],
      },
      {
        id: "4-4",
        heading: "2.4 Verteilungsfunktion F(x)",
        body: [
          "Die Verteilungsfunktion F(x) = P(X≤x) existiert für beide Typen und ist immer monoton wachsend von 0 nach 1.",
          "Bei diskreten Zufallsvariablen ist sie eine Treppenfunktion, bei stetigen eine glatte Kurve — die Ableitung von F ist genau die Dichte f.",
        ],
        figure: {
          type: "distribution-function",
          caption: "Abb. 2.1 — Verteilungsfunktion einer diskreten Zufallsvariable: Sprünge an jeder möglichen Ausprägung.",
        },
      },
      {
        id: "4-5",
        heading: "2.5 Erwartungswert",
        body: [
          "Der Erwartungswert E(X) ist das mit den Wahrscheinlichkeiten gewichtete Mittel aller möglichen Werte — das theoretische Gegenstück zum arithmetischen Mittel.",
          "Bei diskreten Zufallsvariablen wird summiert, bei stetigen integriert. Dieses Muster zieht sich durch das ganze Kapitel: Σ wird zu ∫.",
        ],
        terms: [
          {
            term: "Erwartungswert E(X)",
            definition: "Der Wert, gegen den der Durchschnitt bei unendlich vielen Wiederholungen konvergieren würde.",
          },
        ],
        formulas: ["Diskret: E(X) = Σ x·f(x)   |   Stetig: E(X) = ∫ x·f(x) dx"],
        formulasLatex: [
          "E(X) = \\sum_x x\\,f(x) \\quad \\text{(diskret)} \\qquad E(X) = \\int x\\, f(x)\\, dx \\quad \\text{(stetig)}",
        ],
        examples: [
          "Diskrete ZV: f(0)=0,5, f(3)=f(5)=0,25. E(X) = 0·0,5+3·0,25+5·0,25 = 2,0.",
        ],
      },
      {
        id: "4-6",
        heading: "2.6 Varianz von Zufallsvariablen",
        body: [
          "Die Verschiebungsformel Var(X) = E(X²) − (E(X))² ist in der Praxis fast immer einfacher als die direkte Definition.",
        ],
        terms: [
          {
            term: "Varianz Var(X)",
            definition: "Die erwartete quadrierte Abweichung vom Erwartungswert.",
          },
        ],
        formulas: ["Var(X) = E(X²) − (E(X))²"],
        formulasLatex: ["\\text{Var}(X) = E(X^2) - \\big(E(X)\\big)^2"],
        examples: [
          "E(X)=4, E(X²)=25: Var(X) = 25−16 = 9, Standardabweichung σ = 3.",
        ],
      },
      {
        id: "4-7",
        heading: "2.7 Lineare Transformation",
        body: [
          "Für Y = aX + b transformiert sich der Erwartungswert genauso wie X selbst. Die Varianz reagiert dagegen nur auf den Faktor a, und zwar quadriert — eine Verschiebung um b ändert an der Streuung nichts.",
        ],
        formulas: ["E(aX+b) = a·E(X) + b,   Var(aX+b) = a²·Var(X)"],
        formulasLatex: [
          "E(aX+b) = a\\,E(X) + b \\qquad \\text{Var}(aX+b) = a^2\\,\\text{Var}(X)",
        ],
      },
      {
        id: "4-8",
        heading: "2.8 Tschebyscheff-Ungleichung",
        body: [
          "Die Tschebyscheff-Ungleichung liefert eine verteilungsunabhängige obere Schranke dafür, wie wahrscheinlich große Abweichungen vom Erwartungswert sind — funktioniert für jede Zufallsvariable mit endlicher Varianz, ist dafür aber meist grob.",
        ],
        formulas: ["Tschebyscheff: P(|X − E(X)| ≥ k) ≤ Var(X)/k²"],
        formulasLatex: [
          "P\\big(|X-E(X)| \\ge k\\big) \\le \\dfrac{\\text{Var}(X)}{k^2}",
        ],
        examples: [
          "Var(X)=9, k=4: P(|X−4|≥4) ≤ 9/16 = 0,5625 — höchstens 56,25 Prozent.",
        ],
      },
      {
        id: "4-9",
        heading: "2.9 Schiefe und Kurtosis",
        body: [
          "Erwartungswert und Varianz beschreiben Lage und Streuung, aber nichts über die Form der Verteilung.",
        ],
        terms: [
          {
            term: "Schiefe γ1",
            definition: "Beschreibt die Asymmetrie um den Erwartungswert. Rechtsschief: Mittelwert > Median > Modus, γ1>0. Symmetrisch: alle drei gleich, γ1=0. Linksschief: γ1<0.",
          },
          {
            term: "Kurtosis (Exzess) γ2",
            definition: "Beschreibt, wie spitz oder flach eine Verteilung im Vergleich zur Normalverteilung ist. Die Normalverteilung hat per Definition γ2=0 — daher der Name 'Exzess' als Abweichung von ihr.",
          },
        ],
        formulas: [
          "Schiefe: γ1 = E[(X−μ)³] / σ³",
          "Kurtosis (Exzess): γ2 = E[(X−μ)⁴] / σ⁴ − 3",
        ],
        formulasLatex: [
          "\\gamma_1 = \\dfrac{E\\big[(X-\\mu)^3\\big]}{\\sigma^3}",
          "\\gamma_2 = \\dfrac{E\\big[(X-\\mu)^4\\big]}{\\sigma^4} - 3",
        ],
        examples: [
          "Eine rechtsschiefe Einkommensverteilung (wenige sehr hohe Einkommen ziehen den Mittelwert nach oben) hat γ1>0. Eine Normalverteilung hat immer γ1=0 und γ2=0, egal welche konkreten μ und σ sie hat.",
        ],
      },
      {
        id: "4-10",
        heading: "2.10 Bivariate Zufallsvariablen",
        body: [
          "Bei zwei Zufallsvariablen X und Y beschreibt die gemeinsame Verteilung, wie wahrscheinlich bestimmte Kombinationen von Werten sind.",
          "X und Y heißen unabhängig, wenn die gemeinsame Verteilung in das Produkt der Randverteilungen zerfällt. Für unabhängige Variablen addieren sich die Varianzen bei einer Summe.",
          "Im Allgemeinen (auch bei Abhängigkeit) gilt für eine Linearkombination Z=aX+bY eine Formel mit einem zusätzlichen Kovarianz-Term — der Unabhängigkeitsfall oben ist genau der Spezialfall Cov(X,Y)=0.",
        ],
        terms: [
          {
            term: "Kovarianz von Zufallsvariablen",
            definition: "Cov(X,Y) = E(XY) − E(X)·E(Y). Positive Kovarianz: X und Y liegen tendenziell gemeinsam über bzw. unter ihrem Erwartungswert.",
          },
        ],
        formulas: [
          "Cov(X,Y) = E(XY) − E(X)·E(Y)",
          "Corr(X,Y) = Cov(X,Y) / (σX·σY)",
          "Var(aX+bY) = a²Var(X) + b²Var(Y) + 2ab·Cov(X,Y)",
          "Var(aX−bY) = a²Var(X) + b²Var(Y) − 2ab·Cov(X,Y)",
        ],
        formulasLatex: [
          "\\text{Cov}(X,Y) = E(XY) - E(X)E(Y)",
          "\\text{Corr}(X,Y) = \\dfrac{\\text{Cov}(X,Y)}{\\sigma_X\\,\\sigma_Y}",
          "\\text{Var}(aX+bY) = a^2\\text{Var}(X) + b^2\\text{Var}(Y) + 2ab\\,\\text{Cov}(X,Y)",
          "\\text{Var}(aX-bY) = a^2\\text{Var}(X) + b^2\\text{Var}(Y) - 2ab\\,\\text{Cov}(X,Y)",
        ],
        examples: [
          "X,Y unabhängig, P(X=1)=0,4, P(Y=1)=0,25. P(S=2)=P(X=1)·P(Y=1)=0,10.",
          "Var(X)=4, Var(Y)=9, Cov(X,Y)=2 (X und Y sind hier NICHT unabhängig). Für Z=2X+3Y: Var(Z) = 4·4 + 9·9 + 2·2·3·2 = 16+81+24 = 121.",
        ],
      },
    ],
  },
  {
    id: "verteilungsmodelle",
    number: 3,
    title: "Verteilungsmodelle",
    free: false,
    intro:
      "Verteilungsmodelle sind Standard-Bausteine, mit denen sich viele reale Zufallsphänomene modellieren lassen. Statt jede Situation neu zu analysieren, erkennt man ein wiederkehrendes Muster und wendet direkt die passenden Formeln an — aufbauend auf Erwartungswert und Varianz aus Kapitel 2.",
    sections: [
      {
        id: "5-1",
        heading: "3.1 Diskrete Gleichverteilung und Bernoulli",
        body: [
          "Die diskrete Gleichverteilung modelliert endlich viele, gleichwahrscheinliche Ausprägungen, z. B. einen fairen Würfel.",
        ],
        terms: [
          {
            term: "Bernoulli-Verteilung",
            definition: "Beschreibt ein einzelnes Experiment mit zwei Ausgängen (Erfolg=1, Misserfolg=0) und Erfolgswahrscheinlichkeit p. Der Grundbaustein fast aller anderen diskreten Verteilungen.",
          },
        ],
        formulas: ["Bernoulli: E(X) = p, Var(X) = p(1−p)"],
        formulasLatex: ["E(X) = p \\qquad \\text{Var}(X) = p(1-p)"],
      },
      {
        id: "5-2",
        heading: "3.2 Binomialverteilung",
        body: [
          "Die Binomialverteilung B(n,p) zählt die Anzahl der Erfolge bei n unabhängigen Bernoulli-Versuchen mit jeweils gleicher Erfolgswahrscheinlichkeit p.",
          "Wichtig: unabhängig und gleiches p müssen wirklich erfüllt sein — sonst ist B(n,p) das falsche Modell.",
        ],
        terms: [
          {
            term: "Binomialverteilung B(n,p)",
            definition: "z. B. Anzahl Kopf bei n Münzwürfen, oder Anzahl defekter Teile bei n unabhängigen Produkten.",
          },
        ],
        formulas: ["P(X=k) = C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ, E(X) = np, Var(X) = np(1−p)"],
        formulasLatex: [
          "P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad E(X) = np, \\quad \\text{Var}(X) = np(1-p)",
        ],
        figure: {
          type: "binomial-bars",
          caption: "Abb. 3.1 — Binomialverteilung B(n,p): diskrete, glockenförmige Häufigkeitsverteilung.",
        },
        examples: [
          "X ~ B(16, 0,25): E(X) = 4, Var(X) = 3.",
        ],
      },
      {
        id: "5-3",
        heading: "3.3 Hypergeometrische Verteilung",
        body: [
          "Modelliert das Ziehen ohne Zurücklegen aus einer endlichen Grundgesamtheit mit zwei Gruppen — hier ändert sich die Erfolgswahrscheinlichkeit von Ziehung zu Ziehung.",
        ],
        terms: [
          {
            term: "Hypergeometrische Verteilung",
            definition: "z. B. Anzahl defekter Teile in einer Stichprobe von 5, gezogen aus 50, ohne Zurücklegen. Ist die Grundgesamtheit sehr groß, ist die Binomialverteilung eine gute Näherung.",
          },
        ],
        formulas: [
          "P(X=k) = [C(M,k)·C(N−M,n−k)] / C(N,n)",
          "E(X) = n·M/N",
          "Var(X) = n·(M/N)·(1−M/N)·((N−n)/(N−1))",
        ],
        formulasLatex: [
          "P(X=k) = \\dfrac{\\binom{M}{k}\\binom{N-M}{n-k}}{\\binom{N}{n}}",
          "E(X) = n\\,\\dfrac{M}{N}",
          "\\text{Var}(X) = n\\,\\dfrac{M}{N}\\left(1-\\dfrac{M}{N}\\right)\\dfrac{N-n}{N-1}",
        ],
        examples: [
          "Ein Lieferant liefert N=50 Bauteile, davon M=8 fehlerhaft. Eine Qualitätsprüfung zieht ohne Zurücklegen n=5 Teile. P(X=2) = [C(8,2)·C(42,3)] / C(50,5) = (28·11 480)/2 118 760 ≈ 0,152. E(X) = 5·8/50 = 0,8. Var(X) = 5·0,16·0,84·(45/49) ≈ 0,617.",
        ],
      },
      {
        id: "5-4",
        heading: "3.4 Poisson-Verteilung",
        body: [
          "Die Poisson-Verteilung modelliert die Anzahl seltener Ereignisse in einem festen Zeit- oder Raumintervall und ergibt sich als Grenzwert der Binomialverteilung für großes n und kleines p bei konstantem λ=np.",
        ],
        terms: [
          {
            term: "Poisson-Verteilung",
            definition: "z. B. Anzahl Kundenanrufe pro Stunde. Nützlich, wenn n selbst nicht genau bekannt ist, aber λ gut schätzbar ist.",
          },
        ],
        formulas: ["P(X=k) = e^(−λ)·λᵏ / k!, E(X) = Var(X) = λ"],
        formulasLatex: [
          "P(X=k) = \\dfrac{e^{-\\lambda}\\lambda^k}{k!}, \\quad E(X) = \\text{Var}(X) = \\lambda",
        ],
        figure: {
          type: "binomial-bars",
          caption: "Abb. 3.2 — Poisson-Verteilung: ebenfalls eine diskrete Balkenverteilung über k=0,1,2,..., mit Schwerpunkt und größter Streuung um λ.",
        },
        examples: [
          "X ~ Poisson(λ=4): E(X) = Var(X) = 4. Der Graph zeigt einzelne, isolierte Balken über k=0,1,2,... (kein durchgezogenes Histogramm), mit dem höchsten Balken in der Nähe von λ=4 und abnehmender Höhe nach beiden Seiten.",
        ],
      },
      {
        id: "5-5",
        heading: "3.5 Stetige Gleichverteilung und Exponentialverteilung",
        body: [
          "Die stetige Gleichverteilung modelliert Situationen ohne bevorzugten Bereich innerhalb eines Intervalls.",
          "Die Exponentialverteilung modelliert Wartezeiten zwischen zufälligen Ereignissen und ist eng mit der Poisson-Verteilung verwandt: Poisson zählt, wie viele Ereignisse passieren, Exponential beschreibt, wie lange man bis zum nächsten wartet.",
        ],
        terms: [
          {
            term: "Stetige Gleichverteilung",
            definition: "z. B. der Ankunftszeitpunkt eines Zugs innerhalb eines 10-Minuten-Fensters.",
          },
          {
            term: "Exponentialverteilung",
            definition: "z. B. Zeit bis zum nächsten Anruf oder bis zum Ausfall eines Bauteils.",
          },
        ],
        formulas: [
          "Gleichverteilung U(a,b): f(x) = 1/(b−a) für a≤x≤b, E(X) = (a+b)/2, Var(X) = (b−a)²/12",
          "Exponentialverteilung: f(x) = λ·e^(−λx), F(x) = 1 − e^(−λx), E(X) = 1/λ, Var(X) = 1/λ²",
        ],
        formulasLatex: [
          "f(x) = \\dfrac{1}{b-a} \\ (a\\le x\\le b), \\quad E(X) = \\dfrac{a+b}{2}, \\quad \\text{Var}(X) = \\dfrac{(b-a)^2}{12}",
          "f(x) = \\lambda e^{-\\lambda x}, \\quad F(x) = 1 - e^{-\\lambda x}, \\quad E(X) = \\dfrac{1}{\\lambda}, \\quad \\text{Var}(X) = \\dfrac{1}{\\lambda^2}",
        ],
        examples: [
          "Zugankunft gleichverteilt zwischen 0 und 10 Minuten nach der vollen Stunde: E(X) = 5 Minuten, Var(X) = 100/12 ≈ 8,33.",
          "Lebensdauer eines Bauteils exponentialverteilt mit λ=0,5 pro Jahr (E(X)=1/0,5=2 Jahre). P(X≤1) = 1 − e^(−0,5) ≈ 0,393.",
        ],
      },
      {
        id: "5-6",
        heading: "3.6 Normalverteilung",
        body: [
          "Die Normalverteilung N(μ,σ²) ist die zentrale Verteilung der Statistik: glockenförmig und symmetrisch um μ.",
          "Jede Normalverteilung lässt sich durch Standardisierung auf die Standardnormalverteilung zurückführen — deshalb reicht eine Tabelle aus, um Wahrscheinlichkeiten für jede beliebige Normalverteilung zu berechnen.",
        ],
        terms: [
          {
            term: "Standardnormalverteilung",
            definition: "Spezialfall μ=0, σ²=1, notiert mit Φ(z) und Tabellenwerten.",
          },
          {
            term: "Standardisierung",
            definition: "Z = (X−μ)/σ. Eine der am häufigsten gebrauchten Rechentechniken der Vorlesung.",
          },
        ],
        formulas: ["Standardisierung: Z = (X − μ) / σ"],
        formulasLatex: ["Z = \\dfrac{X-\\mu}{\\sigma}"],
        figure: {
          type: "normal-curve",
          caption: "Abb. 3.2 — Normalverteilung: symmetrische Glockenkurve um den Erwartungswert μ.",
        },
        examples: [
          "X ~ N(100,15). P(X≤115): Z=(115−100)/15=1. Φ(1) ≈ 0,8413.",
        ],
      },
      {
        id: "5-7",
        heading: "3.7 Zentraler Grenzwertsatz",
        body: [
          "Erklärt, warum die Normalverteilung in der Praxis so allgegenwärtig ist: Die Summe bzw. der Mittelwert vieler unabhängiger Zufallsvariablen ist näherungsweise normalverteilt — unabhängig davon, welcher Verteilung die einzelnen Summanden selbst folgen.",
        ],
        terms: [
          {
            term: "Zentraler Grenzwertsatz",
            definition: "Der theoretische Grund, warum Stichprobenmittelwerte in Statistik II fast immer mit der Normalverteilung approximiert werden dürfen.",
          },
        ],
        formulas: [
          "Für unabhängige, identisch verteilte X1,...,Xn mit E(Xi)=μ, Var(Xi)=σ²: Z = (X̄ − μ) / (σ/√n) ≈ N(0,1) für großes n",
        ],
        formulasLatex: [
          "Z = \\dfrac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}} \\ \\overset{\\text{approx.}}{\\sim}\\ N(0,1) \\quad \\text{für großes } n",
        ],
        examples: [
          "100-facher Würfelwurf: μ=3,5, σ²=35/12≈2,917. Der Mittelwert X̄ der 100 Würfe ist näherungsweise N(3,5; 2,917/100) — obwohl die einzelne Augenzahl selbst nicht normalverteilt, sondern gleichverteilt ist.",
        ],
      },
      {
        id: "5-8",
        heading: "3.8 Approximationen zwischen Verteilungen",
        body: [
          "Manche Verteilungen sind rechnerisch aufwendig, lassen sich aber unter bestimmten Bedingungen gut annähern.",
          "Merkregel: Normalapproximation für großes n und p nicht extrem. Poisson-Approximation für großes n, aber sehr kleines p.",
        ],
        terms: [
          {
            term: "Normalapproximation",
            definition: "Für großes n lässt sich die Binomialverteilung durch die Normalverteilung annähern. Faustregel: np(1−p) ≥ 9.",
          },
          {
            term: "Poisson-Approximation",
            definition: "Für großes n und kleines p approximiert die Poisson-Verteilung mit λ=np die Binomialverteilung.",
          },
        ],
        formulas: [
          "Normalapproximation: X ~ B(n,p) ≈ N(np, np(1−p)), sofern np(1−p) ≥ 9",
          "Poisson-Approximation: X ~ B(n,p) ≈ Poisson(λ=np), sofern n groß und p klein (Faustregel: n≥50, p≤0,05)",
        ],
        formulasLatex: [
          "X \\sim B(n,p) \\ \\approx \\ N\\big(np,\\, np(1-p)\\big), \\quad np(1-p) \\ge 9",
          "X \\sim B(n,p) \\ \\approx \\ \\text{Poisson}(\\lambda = np), \\quad n \\ge 50,\\ p \\le 0{,}05",
        ],
        examples: [
          "X ~ B(200; 0,04): np(1−p) = 200·0,04·0,96 = 7,68 < 9 — Normalapproximation wäre grenzwertig. Da aber n=200 groß und p=0,04 klein ist, approximiert man stattdessen mit Poisson(λ=200·0,04=8).",
        ],
      },
      {
        id: "5-9",
        heading: "3.9 Chi-Quadrat-Verteilung",
        body: [
          "Summiert man k unabhängige, standardnormalverteilte Zufallsvariablen quadriert auf, ist die Summe χ²-verteilt mit k Freiheitsgraden. Diese Verteilung taucht typischerweise auf, sobald irgendwo eine Varianz oder eine Summe quadrierter Abweichungen im Spiel ist.",
          "Für Statistik I reicht die Definition und die beiden Kennwerte — die praktische Anwendung (Varianz-Tests, Anpassungstests) folgt erst in Statistik II.",
        ],
        terms: [
          {
            term: "Chi-Quadrat-Verteilung χ²(k)",
            definition: "Verteilung der Summe von k quadrierten, unabhängigen standardnormalverteilten Zufallsvariablen. k heißt Freiheitsgrad.",
          },
        ],
        formulas: [
          "X = Σ Zi², Zi ~ N(0,1) unabhängig, i=1,...,k ⇒ X ~ χ²(k)",
          "E(X) = k, Var(X) = 2k",
        ],
        formulasLatex: [
          "X = \\sum_{i=1}^{k} Z_i^2, \\quad Z_i \\overset{iid}{\\sim} N(0,1) \\ \\Rightarrow\\ X \\sim \\chi^2(k)",
          "E(X) = k, \\qquad \\text{Var}(X) = 2k",
        ],
        examples: [
          "Bei k=10 unabhängigen, standardnormalverteilten Messfehlern ist die Summe ihrer Quadrate χ²-verteilt mit 10 Freiheitsgraden: E(X)=10, Var(X)=2·10=20.",
        ],
      },
      {
        id: "5-10",
        heading: "3.10 F-Verteilung",
        body: [
          "Die F-Verteilung entsteht als Verhältnis zweier (durch ihre Freiheitsgrade skalierter) unabhängiger χ²-verteilter Zufallsvariablen. Sie ist die Grundlage dafür, in Statistik II zwei Varianzen miteinander zu vergleichen.",
        ],
        terms: [
          {
            term: "F-Verteilung F(n1,n2)",
            definition: "Verteilung des Quotienten zweier skalierter, unabhängiger χ²-Verteilungen mit n1 bzw. n2 Freiheitsgraden.",
          },
        ],
        formulas: [
          "F = (X1/n1) / (X2/n2), X1~χ²(n1), X2~χ²(n2) unabhängig ⇒ F ~ F(n1,n2)",
        ],
        formulasLatex: [
          "F = \\dfrac{X_1/n_1}{X_2/n_2}, \\quad X_1 \\sim \\chi^2(n_1),\\ X_2 \\sim \\chi^2(n_2) \\text{ unabhängig} \\ \\Rightarrow\\ F \\sim F(n_1,n_2)",
        ],
        examples: [
          "Zwei Produktionslinien messen unabhängig voneinander Bauteillängen. Um später (in Statistik II) zu testen, ob beide Linien gleich stark streuen, bildet man das Verhältnis der beiden (geeignet skalierten) Stichprobenvarianzen — dieses Verhältnis folgt unter der Annahme gleicher Varianzen einer F-Verteilung.",
        ],
      },
    ],
  },
  {
    id: "deskriptive-statistik",
    number: 4,
    title: "Deskriptive Statistik",
    free: false,
    intro:
      "Zum Abschluss wechseln wir die Perspektive: Statt wie in den vorherigen Kapiteln von einem theoretischen Zufallsmodell auszugehen, fasst die deskriptive Statistik bereits erhobene, reale Daten übersichtlich zusammen — mit Kennzahlen (Lage, Streuung, Zusammenhang) und mit Grafiken (Histogramm, Boxplot, Lorenzkurve). Wir gehen die Bausteine hier Schritt für Schritt durch, jeweils mit den wichtigsten Begriffen zuerst.",
    sections: [
      {
        id: "2-1",
        heading: "4.1 Grundgesamtheit und Stichprobe",
        body: [
          "Bevor überhaupt gerechnet wird, muss klar sein, wer oder was untersucht wird und woher die Daten kommen.",
          "In der Praxis wird fast nie die komplette Grundgesamtheit erhoben, sondern nur eine Stichprobe. Aus dieser Teilmenge schließt man dann auf die Grundgesamtheit zurück — genau das ist später der Kern der schließenden Statistik in Statistik II.",
        ],
        terms: [
          {
            term: "Grundgesamtheit",
            definition: "Die Menge aller statistischen Einheiten, die untersucht werden sollen, z. B. alle Studierenden einer Fakultät im aktuellen Semester.",
          },
          {
            term: "Statistische Einheit",
            definition: "Ein einzelnes Element der Grundgesamtheit, z. B. eine Person, ein Unternehmen oder ein Produkt.",
          },
          {
            term: "Merkmal",
            definition: "Eine Eigenschaft, die bei jeder Einheit erhoben wird, z. B. Note, Einkommen oder Geschlecht.",
          },
          {
            term: "Stichprobe",
            definition: "Ein Teil der Grundgesamtheit, der tatsächlich erhoben wird, weil eine Vollerhebung meist zu teuer oder gar nicht möglich ist.",
          },
        ],
      },
      {
        id: "2-2",
        heading: "4.2 Skalenniveaus",
        body: [
          "Merkmale werden nach ihrem Skalenniveau unterschieden, weil das Skalenniveau bestimmt, welche Rechenoperationen überhaupt sinnvoll sind.",
        ],
        terms: [
          {
            term: "Nominal",
            definition: "Nur Gleichheit oder Ungleichheit ist sinnvoll, z. B. Geschlecht oder Studienfach. Keine Rangfolge, kein Mittelwert.",
          },
          {
            term: "Ordinal",
            definition: "Zusätzlich ist eine Rangfolge sinnvoll, z. B. Schulnote oder Zufriedenheit von 1 bis 5. Die Abstände zwischen den Rängen sind aber nicht zwingend gleich groß.",
          },
          {
            term: "Metrisch",
            definition: "Zusätzlich sind Abstände und Verhältnisse sinnvoll, z. B. Einkommen, Größe, Alter. Hier sind Mittelwert und alle Rechenarten erlaubt.",
          },
        ],
        examples: [
          "Ein häufiger Klausur-Stolperstein: Schulnoten sehen aus wie Zahlen und werden oft wie metrische Daten behandelt (z. B. Notendurchschnitt), sind aber strenggenommen nur ordinal, weil der Abstand zwischen 1 und 2 nicht zwangsläufig so groß ist wie zwischen 3 und 4.",
        ],
      },
      {
        id: "2-3",
        heading: "4.3 Weitere Unterscheidungen",
        body: [
          "Metrische Merkmale werden außerdem in diskret und stetig unterteilt, und es gibt noch ein paar weitere Unterscheidungen, die in der Klausur gerne abgefragt werden.",
        ],
        terms: [
          {
            term: "Diskret",
            definition: "Abzählbare, meist ganzzahlige Ausprägungen, z. B. Kinderzahl oder Anzahl Semester.",
          },
          {
            term: "Stetig",
            definition: "Jeder Wert in einem Intervall ist theoretisch möglich, z. B. Körpergröße oder Zeit.",
          },
          {
            term: "Häufbares Merkmal",
            definition: "Eine Einheit kann mehrere Ausprägungen gleichzeitig haben, z. B. gesprochene Sprachen.",
          },
          {
            term: "Bestands- und Bewegungsmasse",
            definition: "Bestandsmasse ist eine Momentaufnahme zu einem Stichtag (z. B. Einwohnerzahl am 31.12.), Bewegungsmasse sind Ereignisse über einen Zeitraum (z. B. Geburten pro Monat).",
          },
        ],
        examples: [
          "Ordne die Merkmale ein: (a) Matrikelnummer ist nominal, auch wenn es Zahlen sind, es gibt keine sinnvolle Rangfolge. (b) Abschlussnote ist ordinal. (c) Anzahl bestandener Prüfungen ist metrisch und diskret. (d) Bearbeitungszeit einer Klausur in Minuten ist metrisch und stetig.",
        ],
      },
      {
        id: "2-4",
        heading: "4.4 Klassierung",
        body: [
          "Bei sehr vielen unterschiedlichen oder stetigen Merkmalswerten verliert eine reine Urliste schnell an Übersicht. Deshalb werden die Werte häufig in Klassen zusammengefasst — mit bewusstem Informationsverlust zugunsten der Übersichtlichkeit.",
          "Eine Klasse ist ein Intervall zwischen einer unteren und einer oberen Grenze, wobei die obere Grenze einer Klasse zugleich die untere Grenze der nächsten Klasse ist. Innerhalb einer Klasse wird meist eine Gleichverteilung angenommen, sodass die Klasse durch ihre Mitte repräsentiert werden kann.",
        ],
        terms: [
          {
            term: "Klasse j",
            definition: "Intervall zwischen unterer Grenze ξju und oberer Grenze ξjo. Die Anzahl der Klassen k kann frei gewählt werden — zu wenige Klassen verwischen die Struktur der Daten, zu viele erzeugen ein unruhiges, kaum interpretierbares Bild.",
          },
          {
            term: "Klassenmitte xj",
            definition: "Der Mittelpunkt einer Klasse. Repräsentiert unter der Annahme einer Gleichverteilung innerhalb der Klasse alle Werte dieser Klasse.",
          },
          {
            term: "Klassenbreite Δxj",
            definition: "Die Länge einer Klasse. Muss nicht für alle Klassen gleich groß sein, auch wenn das in der Praxis (äquidistante Klassen) der Regelfall ist.",
          },
        ],
        formulas: [
          "Klassenmitte: xj = (ξju + ξjo) / 2",
          "Klassenbreite: Δxj = ξjo − ξju",
        ],
        formulasLatex: [
          "x_j = \\dfrac{1}{2}\\big(\\xi_j^u + \\xi_j^o\\big)",
          "\\Delta x_j = \\xi_j^o - \\xi_j^u",
        ],
        examples: [
          "Die Bearbeitungszeiten von 40 Support-Tickets (in Minuten) werden in vier gleich breite Klassen eingeteilt: (0,10], (10,20], (20,30], (30,40]. Klasse 2 hat die Grenzen ξ2u=10 und ξ2o=20, also Klassenmitte x2=15 und Klassenbreite Δx2=10.",
        ],
      },
      {
        id: "2-5",
        heading: "4.5 Häufigkeiten unklassierter und klassierter Daten",
        body: [
          "Für ein Merkmal mit Ausprägungen a1 bis ak zählt man zunächst, wie oft jede Ausprägung vorkommt.",
          "Sind die Daten klassiert, zählt man stattdessen, wie viele Beobachtungen in jede Klasse fallen — als zusätzliche Kennzahl kommt dabei die Häufigkeitsdichte hinzu, weil unterschiedlich breite Klassen sonst im Histogramm nicht fair vergleichbar wären.",
        ],
        terms: [
          {
            term: "Absolute Häufigkeit h(ai)",
            definition: "Wie oft die Ausprägung ai im Datensatz vorkommt.",
          },
          {
            term: "Relative Häufigkeit f(ai)",
            definition: "h(ai) geteilt durch den Stichprobenumfang n. Macht Datensätze unterschiedlicher Größe vergleichbar.",
          },
          {
            term: "Klassenhäufigkeit hj",
            definition: "Anzahl der Beobachtungen in Klasse j — das klassierte Gegenstück zur absoluten Häufigkeit.",
          },
          {
            term: "Klassenhäufigkeitsdichte ĥj",
            definition: "Klassenhäufigkeit geteilt durch die Klassenbreite. Entspricht der Höhe des Rechtecks im Histogramm — die Fläche des Rechtecks entspricht dann der Klassenhäufigkeit selbst.",
          },
        ],
        formulas: [
          "Absolute/relative Häufigkeit: h(ai), f(ai) = h(ai)/n, Σ f(ai) = 1",
          "Klassenhäufigkeit: hj = Anzahl in Klasse j, fj = hj/n, Σ hj = n, Σ fj = 1",
          "Klassenhäufigkeitsdichte: ĥj = hj/Δxj (absolut), f̂j = fj/Δxj (relativ)",
        ],
        formulasLatex: [
          "h(a_i), \\quad f(a_i) = \\dfrac{h(a_i)}{n}, \\quad \\sum_i f(a_i) = 1",
          "h_j = \\#\\{\\text{Beob. in Klasse } j\\}, \\quad f_j = \\dfrac{h_j}{n}, \\quad \\sum_j h_j = n,\\ \\sum_j f_j = 1",
          "\\hat h_j = \\dfrac{h_j}{\\Delta x_j}, \\qquad \\hat f_j = \\dfrac{f_j}{\\Delta x_j}",
        ],
        examples: [
          "30 von 50 Studierenden bestehen eine Klausur. Absolute Häufigkeit: 30. Relative Häufigkeit: 30/50 = 0,6 bzw. 60 Prozent.",
          "Bei den 40 Support-Tickets aus 4.4 liegen h1=6, h2=12, h3=17, h4=5 Tickets in den vier 10-Minuten-Klassen (Σhj=40 ✓). f3 = 17/40 = 0,425. Da alle Klassen gleich breit sind (Δxj=10), ist ĥ3 = 17/10 = 1,7 und f̂3 = 0,0425.",
        ],
      },
      {
        id: "2-6",
        heading: "4.6 Empirische Verteilungsfunktion",
        body: [
          "Die kumulierte relative Häufigkeit gibt an, welcher Anteil der Beobachtungen kleiner oder gleich einem Wert x ist.",
          "Sie ist eine monoton wachsende Treppenfunktion, die bei 0 beginnt und bei 1 endet, mit Sprüngen genau an den Stellen, an denen Beobachtungen liegen. Wichtig: F(x) ist nicht dasselbe wie f(x) — f(ai) ist die Häufigkeit genau der Ausprägung ai, F(x) ist die Summe aller f(ai) mit ai ≤ x.",
          "Bei klassierten Daten kennt man die Einzelwerte nicht mehr, F(x) kann also nicht mehr exakt aus der Urliste berechnet werden. Unter der Annahme einer Gleichverteilung innerhalb der Klasse wird stattdessen linear zwischen den Klassengrenzen interpoliert — der Graph wird dadurch von einer Treppenfunktion zu einem stückweise linearen, stetigen Polygonzug.",
        ],
        terms: [
          {
            term: "Empirische Verteilungsfunktion F(x)",
            definition: "Der Anteil der Beobachtungen, der höchstens x beträgt. Das empirische Gegenstück zur theoretischen Verteilungsfunktion aus Kapitel 2.",
          },
          {
            term: "F(x) klassierter Daten",
            definition: "Interpoliert linear innerhalb der Klasse, die x enthält, unter der Annahme einer Gleichverteilung innerhalb dieser Klasse.",
          },
        ],
        formulas: [
          "Unklassiert: F(x) = Anzahl(Xi ≤ x) / n = Σ f(ai) für alle ai ≤ x",
          "Klassiert: F(x) = F(ξju) + (x−ξju)/Δxj · fj, für ξju ≤ x < ξjo",
        ],
        formulasLatex: [
          "F(x) = \\dfrac{\\text{Anzahl}(X_i \\le x)}{n} = \\sum_{a_i \\le x} f(a_i)",
          "F(x) = F(\\xi_j^u) + \\dfrac{x-\\xi_j^u}{\\Delta x_j}\\,f_j, \\quad \\xi_j^u \\le x < \\xi_j^o",
        ],
        figure: {
          type: "distribution-function",
          caption: "Abb. 4.1 — Empirische Verteilungsfunktion: Treppenfunktion von 0 bis 1, mit einem Sprung an jeder Beobachtungsstelle. Die Sprunghöhe an ai entspricht genau f(ai).",
        },
        examples: [
          "Bei 10 gewürfelten Zahlen 2,4,4,5,6,2,3,4,5,6 ist f(4) = 3/10 = 0,3. F(4) = f(2)+f(3)+f(4) = 0,2+0,1+0,3 = 0,6 — 60 Prozent der Würfe zeigten höchstens eine 4.",
          "Der Graph von F(x) ist eine Treppe, keine glatte Kurve: Sie ist konstant zwischen den Ausprägungen und springt genau an jeder beobachteten Stelle a_i um den Betrag f(a_i) nach oben — links von der kleinsten Ausprägung liegt F(x)=0, ab der größten Ausprägung ist F(x)=1. Das ist derselbe Kurvenverlauf wie bei der theoretischen Verteilungsfunktion aus Kapitel 2 — nur dass hier die Sprunghöhen aus echten Daten statt aus Wahrscheinlichkeiten stammen.",
          "Für die klassierten Support-Tickets (F(10)=f1=0,15, F(20)=0,15+0,30=0,45): F(15) = F(10) + (15−10)/10 · f2 = 0,15 + 0,5·0,30 = 0,30 — geschätzt haben 30 Prozent der Tickets eine Bearbeitungszeit von höchstens 15 Minuten.",
        ],
      },
      {
        id: "2-7",
        heading: "4.7 Modus und Median",
        body: [
          "Lageparameter fassen einen Datensatz in einer Zahl zusammen, die zeigt, wo die Daten typischerweise liegen. Welches Lagemaß sinnvoll ist, hängt vom Skalenniveau ab.",
          "Bei klassierten Daten kennt man die Einzelwerte nicht mehr — Modus und Median müssen deshalb aus den Klasseninformationen geschätzt werden, statt exakt berechnet zu werden.",
        ],
        terms: [
          {
            term: "Modus xD",
            definition: "Die am häufigsten auftretende Ausprägung. Als einziges Lagemaß auf jedem Skalenniveau definiert, auch bei rein nominalen Daten.",
          },
          {
            term: "Median x0,5",
            definition: "Teilt die sortierten Daten in zwei gleich große Hälften. Bei ungeradem n der mittlere Wert, bei geradem n der Mittelwert der beiden mittleren Werte.",
          },
          {
            term: "Modalklasse",
            definition: "Bei klassierten Daten die Klasse mit der größten Häufigkeitsdichte ĥj (nicht zwingend der größten Häufigkeit hj, falls die Klassen unterschiedlich breit sind!). Ihre Klassenmitte dient als Schätzwert für den Modus.",
          },
          {
            term: "Median klassierter Daten",
            definition: "Wird über die Klasse geschätzt, in der die kumulierte relative Häufigkeit F(ξju) ≤ 0,5 ≤ F(ξjo) liegt, per linearer Interpolation innerhalb dieser Klasse.",
          },
        ],
        formulas: [
          "Ungerades n: x0,5 = x((n+1)/2)",
          "Gerades n: x0,5 = (x(n/2) + x(n/2 + 1)) / 2",
          "Modalklasse (klassiert): max ĥj",
          "Median klassiert: x0,5 = ξju + (0,5 − F(ξju))/fj · Δxj",
        ],
        formulasLatex: [
          "n \\text{ ungerade: } x_{0{,}5} = x_{\\left(\\frac{n+1}{2}\\right)}",
          "n \\text{ gerade: } x_{0{,}5} = \\dfrac{x_{(n/2)} + x_{(n/2+1)}}{2}",
          "\\text{Modalklasse} = \\arg\\max_j \\hat h_j",
          "x_{0{,}5} = \\xi_j^u + \\dfrac{0{,}5 - F(\\xi_j^u)}{f_j}\\,\\Delta x_j",
        ],
        examples: [
          "Daten (sortiert): 2,4,5,7,9 (n=5, ungerade). Median = x(3) = 5.",
          "Daten (sortiert): 2,4,5,7,9,10 (n=6, gerade). Median = (x(3)+x(4))/2 = (5+7)/2 = 6.",
          "Für die klassierten Support-Tickets (ĥ = 0,6 / 1,2 / 1,7 / 0,5) ist Klasse 3 (20,30] die Modalklasse — Modus-Schätzwert ist ihre Klassenmitte, also 25 Minuten. Da F(20)=0,45 ≤ 0,5 ≤ F(30)=0,875 in Klasse 3 liegt: x0,5 = 20 + (0,5−0,45)/0,425 · 10 ≈ 21,2 Minuten.",
        ],
      },
      {
        id: "2-8",
        heading: "4.8 Arithmetisches und harmonisches Mittel",
        body: [
          "Das arithmetische Mittel ist nur für metrische Merkmale sinnvoll und reagiert empfindlich auf Ausreißer.",
          "Genau deshalb wird bei Einkommensstatistiken oft der Median statt des Mittelwerts berichtet: wenige sehr hohe Einkommen würden den Mittelwert nach oben verzerren.",
          "Bei klassierten Daten wird für jede Beobachtung einer Klasse ersatzweise die Klassenmitte verwendet, weil die echten Einzelwerte ja nicht mehr bekannt sind.",
          "Das harmonische Mittel ist eine dritte, seltener gebrauchte Mittelwertart: Sie ist immer dann korrekt, wenn Verhältniszahlen (z. B. Geschwindigkeiten) gemittelt werden sollen und die Information über den jeweiligen Zähler (z. B. gleiche Streckenlängen) bekannt ist.",
        ],
        terms: [
          {
            term: "Arithmetisches Mittel x̄",
            definition: "Die Summe aller Werte geteilt durch n. Setzt metrisches Skalenniveau voraus.",
          },
          {
            term: "Gewichtetes Mittel",
            definition: "Wie das arithmetische Mittel, aber jede Ausprägung zählt mit ihrer relativen Häufigkeit oder einem Gewicht — z. B. bei einem Notendurchschnitt, wo CP-Zahlen unterschiedlich stark zählen.",
          },
          {
            term: "Arithmetisches Mittel klassierter Daten",
            definition: "Wie das normale arithmetische Mittel, nur dass für jede Klasse ihre Klassenmitte anstelle der (unbekannten) Einzelwerte verwendet wird.",
          },
          {
            term: "Harmonisches Mittel x̄H",
            definition: "Voraussetzung: verhältnisskalierte Daten ohne Nullwerte. Wird z. B. für Durchschnittsgeschwindigkeiten über gleich lange Streckenabschnitte benötigt — das arithmetische Mittel wäre hier falsch.",
          },
        ],
        formulas: [
          "x̄ = (1/n) · Σ xi",
          "Gewichtetes Mittel: x̄ = Σ wi·xi mit Σ wi = 1",
          "Klassiert: x̄ = (1/n) · Σ xj·hj (mit Klassenmitten xj)",
          "Harmonisches Mittel: x̄H = n / Σ (1/xi)",
        ],
        formulasLatex: [
          "\\bar{x} = \\dfrac{1}{n}\\sum_{i=1}^{n} x_i",
          "\\bar{x} = \\sum_i w_i x_i \\quad \\text{mit} \\quad \\sum_i w_i = 1",
          "\\bar{x} = \\dfrac{1}{n}\\sum_{j=1}^{k} x_j\\,h_j",
          "\\bar{x}_H = \\dfrac{n}{\\sum_{i=1}^n \\frac{1}{x_i}}",
        ],
        examples: [
          "Einkommen (sortiert): 310, 480, 1140, 2480, 2610, 3560, 3980, 6980, 9010 (n=9). Median (5. Wert) = 2610 Euro. Mittelwert ≈ 3350 Euro — deutlich höher, weil der Ausreißer 9010 ihn nach oben zieht.",
          "Notendurchschnitt mit Gewichtung: Modul A (5 CP, Note 1,3), Modul B (4 CP, Note 2,7), Modul C (8 CP, Note 1,8). Gewichtetes Mittel = (5·1,3 + 4·2,7 + 8·1,8) / 17 ≈ 1,86.",
          "Für die klassierten Support-Tickets (Klassenmitten 5,15,25,35; hj = 6,12,17,5): x̄ = (5·6+15·12+25·17+35·5)/40 = (30+180+425+175)/40 = 810/40 = 20,25 Minuten.",
          "Ein Sparer investiert in drei aufeinanderfolgenden Monaten jeweils denselben Betrag von 300 € in einen Fonds, zu Kursen von 20 €, 25 € bzw. 30 € pro Anteil. Der durchschnittliche Kaufpreis pro Anteil ist NICHT das arithmetische Mittel (25 €), sondern das harmonische Mittel, weil hier gleiche Geldbeträge, aber unterschiedliche Stückzahlen gekauft werden: x̄H = 3 / (1/20+1/25+1/30) = 3/0,12333 ≈ 24,32 € — günstiger als der arithmetische Durchschnittspreis, weil bei niedrigeren Kursen automatisch mehr Anteile gekauft wurden.",
        ],
      },
      {
        id: "2-9",
        heading: "4.9 Quantile",
        body: [
          "p-Quantile verallgemeinern den Median: das p-Quantil xp lässt einen Anteil p der Daten darunter und (1−p) darüber liegen.",
          "Bei klassierten Daten wird xp analog zum klassierten Median durch lineare Interpolation innerhalb der Klasse geschätzt, in der F(ξju) ≤ p ≤ F(ξjo) liegt.",
        ],
        terms: [
          {
            term: "p-Quantil xp",
            definition: "Der Median ist genau das 0,5-Quantil. Besonders häufig gefragt: die Quartile (0,25- und 0,75-Quantil).",
          },
          {
            term: "Quartile",
            definition: "Teilen den Datensatz in Viertel. Grundlage für den Interquartilsabstand und den Boxplot.",
          },
        ],
        formulas: [
          "Ist n·p keine ganze Zahl: xp = x(⌈n·p⌉)",
          "Ist n·p = k eine ganze Zahl: xp = (x(k) + x(k+1)) / 2",
          "Klassiert: xp = ξju + (p − F(ξju))/fj · Δxj",
        ],
        formulasLatex: [
          "n\\cdot p \\notin \\mathbb{Z}: \\ x_p = x_{(\\lceil n\\,p \\rceil)}",
          "n\\cdot p = k \\in \\mathbb{Z}: \\ x_p = \\dfrac{x_{(k)} + x_{(k+1)}}{2}",
          "x_p = \\xi_j^u + \\dfrac{p - F(\\xi_j^u)}{f_j}\\,\\Delta x_j",
        ],
        examples: [
          "8 sortierte Werte: 3,5,6,8,9,11,12,15 (n=8). Für p=0,25: n·p=2 (ganzzahlig) → x0,25 = (x(2)+x(3))/2 = (5+6)/2 = 5,5. Für p=0,75: n·p=6 (ganzzahlig) → x0,75 = (x(6)+x(7))/2 = (11+12)/2 = 11,5.",
          "Für die klassierten Support-Tickets soll x0,25 geschätzt werden: F(10)=0,15 ≤ 0,25 ≤ F(20)=0,45, also liegt es in Klasse 2. x0,25 = 10 + (0,25−0,15)/0,30 · 10 ≈ 13,33 Minuten.",
        ],
      },
      {
        id: "2-10",
        heading: "4.10 Spannweite und Interquartilsabstand",
        body: [
          "Ein Lagemaß allein sagt nichts darüber aus, wie breit gestreut die Daten liegen. Streuungsmaße schließen diese Lücke.",
          "Die Spannweite ist einfach, aber sehr ausreißeranfällig. Der Interquartilsabstand ist deutlich robuster, weil er nur die mittleren 50 Prozent der Daten betrachtet.",
        ],
        terms: [
          {
            term: "Spannweite",
            definition: "Maximum minus Minimum. Ein einziger extremer Wert bestimmt sie komplett.",
          },
          {
            term: "Interquartilsabstand (IQR)",
            definition: "x0,75 minus x0,25. Entspricht genau der Breite der Box in einem Boxplot.",
          },
        ],
        formulas: [
          "Spannweite R = xmax − xmin",
          "IQR = x0,75 − x0,25",
        ],
        formulasLatex: [
          "R = x_{\\max} - x_{\\min}",
          "\\text{IQR} = x_{0{,}75} - x_{0{,}25}",
        ],
        figure: {
          type: "boxplot",
          caption: "Abb. 4.1 — Boxplot: Median, Quartile (Box = IQR) und Ausreißer auf einen Blick.",
        },
        examples: [
          "Klausurnoten-Boxplot: Min=1,0, Q1=1,7, Median=2,3, Q3=3,0, Max=4,0. R = 4,0−1,0 = 3,0. IQR = 3,0−1,7 = 1,3.",
        ],
      },
      {
        id: "2-11",
        heading: "4.11 Streuungsmaße vom Bezugspunkt",
        body: [
          "Varianz und die mittlere absolute Abweichung sind eigentlich Spezialfälle eines allgemeineren Prinzips: Man wählt einen beliebigen Bezugspunkt c und misst, wie weit die Daten im Mittel von c entfernt liegen.",
          "Für zwei ganz bestimmte Wahlen von c ergeben sich die bekannten Kenngrößen — und zwar jeweils als Minimum der jeweiligen Abweichungsfunktion: Bei absoluten Abständen |xi−c| wird die Summe durch c = Median minimiert. Bei quadrierten Abständen (xi−c)² wird sie durch c = arithmetisches Mittel minimiert — und genau dieses Minimum nennt man dann Varianz (siehe 4.12).",
        ],
        terms: [
          {
            term: "Mittlere absolute Abweichung d(c)",
            definition: "Durchschnittlicher absoluter Abstand aller Werte von einem Bezugspunkt c. Wird durch c = Median minimiert.",
          },
          {
            term: "Mittlere quadratische Abweichung MQ(c)",
            definition: "Durchschnittlicher quadrierter Abstand aller Werte von einem Bezugspunkt c. Wird durch c = arithmetisches Mittel minimiert — dieses Minimum ist die Varianz.",
          },
        ],
        formulas: [
          "d(c) = (1/n) · Σ |xi − c|",
          "MQ(c) = (1/n) · Σ (xi − c)²",
        ],
        formulasLatex: [
          "d(c) = \\dfrac{1}{n}\\sum_{i=1}^n |x_i - c|",
          "MQ(c) = \\dfrac{1}{n}\\sum_{i=1}^n (x_i-c)^2",
        ],
        examples: [
          "Daten 2,4,4,10 (x̄=5, Median=4). d(4) = (2+0+0+6)/4 = 2,0. d(5) = (3+1+1+5)/4 = 2,5 — d(c) ist bei c=Median=4 kleiner als beim Mittelwert c=5, genau wie die Theorie vorhersagt.",
          "Für dieselben Daten gilt umgekehrt: MQ(4) = (4+0+0+36)/4 = 10,0, aber MQ(5) = (9+1+1+25)/4 = 9,0 — beim quadrierten Abstand gewinnt jetzt der Mittelwert c=5, nicht der Median.",
        ],
      },
      {
        id: "2-12",
        heading: "4.12 Varianz und Standardabweichung",
        body: [
          "Die Varianz misst die mittlere quadrierte Abweichung vom Mittelwert (siehe 4.11: sie ist MQ(x̄), also das Minimum von MQ(c)). Quadriert wird, damit sich positive und negative Abweichungen nicht gegenseitig aufheben.",
          "Der Nachteil der Varianz: Sie hat eine ungewohnte Einheit, z. B. Euro-Quadrat statt Euro. Deshalb gibt man in der Praxis meist die Standardabweichung an, die wieder dieselbe Einheit wie die Ausgangsdaten hat.",
          "Rechnerisch oft einfacher als die Definitionsformel ist der Verschiebungssatz: Varianz als mittleres Quadrat minus Quadrat des Mittels.",
        ],
        terms: [
          {
            term: "Varianz Var(x)",
            definition: "Mittlere quadrierte Abweichung vom Mittelwert.",
          },
          {
            term: "Standardabweichung s",
            definition: "Die Wurzel der Varianz. Das gebräuchlichste Streuungsmaß in Berichten und Grafiken.",
          },
        ],
        formulas: [
          "Var(x) = (1/n) · Σ (xi − x̄)²",
          "Verschiebungssatz: Var(x) = (1/n)·Σ xi² − x̄²",
          "Klassiert: Var(x) = (1/n) · Σ (xj − x̄)²·hj (mit Klassenmitten xj)",
          "s = √Var(x)",
        ],
        formulasLatex: [
          "\\text{Var}(x) = \\dfrac{1}{n}\\sum_{i=1}^{n}(x_i - \\bar{x})^2",
          "\\text{Var}(x) = \\dfrac{1}{n}\\sum_{i=1}^n x_i^2 - \\bar{x}^2",
          "\\text{Var}(x) = \\dfrac{1}{n}\\sum_{j=1}^{k} (x_j-\\bar x)^2\\, h_j",
          "s = \\sqrt{\\text{Var}(x)}",
        ],
        examples: [
          "Daten: 3,5,5,7. x̄=5. Abweichungen: −2,0,0,2. Quadriert: 4,0,0,4. Var(x) = 8/4 = 2. s = √2 ≈ 1,41.",
          "Für die klassierten Support-Tickets (x̄=20,25, Klassenmitten 5,15,25,35, hj=6,12,17,5): Var(x) = [(5−20,25)²·6+(15−20,25)²·12+(25−20,25)²·17+(35−20,25)²·5]/40 = [1395,4+330,75+383,6+1087,8]/40 ≈ 3197,5/40 ≈ 79,94. s ≈ √79,94 ≈ 8,94 Minuten.",
        ],
      },
      {
        id: "2-13",
        heading: "4.13 Relative Streuungsmaße",
        body: [
          "Absolute Streuungsmaße wie die Standardabweichung hängen von der Maßeinheit ab und lassen sich deshalb nicht direkt zwischen unterschiedlichen Datensätzen vergleichen (z. B. Streuung in Euro vs. Streuung in Kilogramm, oder unterschiedlich große Stichproben). Relative Streuungsmaße normieren dieses Problem weg.",
        ],
        terms: [
          {
            term: "Variationskoeffizient v",
            definition: "Standardabweichung geteilt durch Mittelwert (s/x̄). Ein dimensionsloses Maß, das den Streuungsvergleich unabhängig von der Maßeinheit erlaubt.",
          },
          {
            term: "Normierter Variationskoeffizient v*",
            definition: "Korrigiert v so, dass der Wertebereich unabhängig von der Stichprobengröße n immer zwischen 0 und 1 liegt — dadurch werden Variationskoeffizienten unterschiedlich großer Stichproben besser vergleichbar.",
          },
          {
            term: "Quartilsdispersionskoeffizient vr",
            definition: "Verhältnis von Interquartilsabstand zu Median. Da IQR und Median beide robust gegenüber Ausreißern sind, ist auch vr ein robustes relatives Streuungsmaß — im Gegensatz zum Variationskoeffizienten, der über x̄ und s empfindlich auf Ausreißer reagiert.",
          },
        ],
        formulas: [
          "v = s / x̄, mit 0 ≤ v ≤ √(n−1)",
          "Normiert: v* = v / √(n−1), mit 0 ≤ v* ≤ 1",
          "Quartilsdispersionskoeffizient: vr = IQR / x0,5",
        ],
        formulasLatex: [
          "v = \\dfrac{s}{\\bar x}, \\quad 0 \\le v \\le \\sqrt{n-1}",
          "v^{*} = \\dfrac{v}{\\sqrt{n-1}}, \\quad 0 \\le v^{*} \\le 1",
          "v_r = \\dfrac{\\text{IQR}}{x_{0{,}5}}",
        ],
        examples: [
          "Zwei Abteilungen mit je n=25 Beobachtungen: Gehälter 3200 € (s=280€) bzw. 5200 € (s=390€). v1=280/3200≈0,0875, v2=390/5200≈0,075 — Abteilung 1 streut relativ stärker, obwohl ihre absolute Standardabweichung kleiner ist. Normiert (√24≈4,899): v1*≈0,0179, v2*≈0,0153 — gleiche Rangfolge, jetzt aber auf [0,1] normiert.",
          "Für den Klausurnoten-Boxplot aus 4.10 (Median=2,3, IQR=1,3): vr = 1,3/2,3 ≈ 0,565 — die mittleren 50 Prozent der Noten streuen relativ stark um den Median.",
        ],
      },
      {
        id: "2-14",
        heading: "4.14 Parameter gepoolter Datensätze",
        body: [
          "Manchmal liegen mehrere disjunkte Teilstichproben desselben Merkmals vor, z. B. weil unterschiedliche Filialen oder Erhebungswellen getrennt ausgewertet wurden. Mittelwert und Varianz des gesamten, zusammengefassten (gepoolten) Datensatzes lassen sich direkt aus den Kennzahlen der Teildatensätze berechnen, ohne die Einzeldaten erneut zu benötigen.",
          "Die gepoolte Varianz zerlegt sich dabei in zwei interpretierbare Bestandteile: die mittlere Varianz innerhalb der Teildatensätze und die Varianz zwischen den Teildatensätzen (wie stark die Teil-Mittelwerte selbst streuen). Dieses Prinzip der Streuungszerlegung taucht in Statistik II bei der Varianzanalyse in ähnlicher Form wieder auf.",
        ],
        terms: [
          {
            term: "Gepooltes arithmetisches Mittel",
            definition: "Gewichtetes Mittel der Teil-Mittelwerte, gewichtet mit dem jeweiligen Stichprobenumfang.",
          },
          {
            term: "Gepoolte Varianz",
            definition: "Setzt sich zusammen aus der Varianz innerhalb der Teildatensätze und der Varianz zwischen den Teildatensätzen.",
          },
        ],
        formulas: [
          "x̄ = (1/n) · Σ np·x̄p, mit n = Σ np",
          "s² = Σ (np/n)·sp² + Σ (np/n)·(x̄p − x̄)²",
        ],
        formulasLatex: [
          "\\bar x = \\dfrac{1}{n}\\sum_{p=1}^{r} n_p\\,\\bar x_p, \\quad n=\\sum_{p=1}^r n_p",
          "s^2 = \\sum_{p=1}^{r}\\dfrac{n_p}{n}\\,s_p^2 \\;+\\; \\sum_{p=1}^{r}\\dfrac{n_p}{n}\\,(\\bar x_p - \\bar x)^2",
        ],
        examples: [
          "Drei Filialen einer Bäckereikette (Tagesumsatz in €): Filiale A (nA=20, x̄A=340, sA²=900), Filiale B (nB=15, x̄B=310, sB²=625), Filiale C (nC=25, x̄C=365, sC²=1024). n=60. Gepooltes Mittel: x̄ = (20·340+15·310+25·365)/60 = 20575/60 ≈ 342,92 €. Varianz innerhalb: (20/60)·900+(15/60)·625+(25/60)·1024 ≈ 300+156,25+426,67 ≈ 882,92. Varianz zwischen: (20/60)·(340−342,92)²+(15/60)·(310−342,92)²+(25/60)·(365−342,92)² ≈ 2,84+270,88+203,20 ≈ 476,91. Gesamtvarianz s² ≈ 882,92+476,91 ≈ 1359,83.",
        ],
      },
      {
        id: "2-15",
        heading: "4.15 Histogramm, Boxplot und Fünf-Zahlen-Zusammenfassung",
        body: [
          "Ein Histogramm zeigt die Häufigkeitsdichte klassierter metrischer Daten. Zu breite Klassen verwischen Strukturen, zu schmale erzeugen ein verrauschtes Bild.",
          "Der Boxplot stellt fünf Kennzahlen gleichzeitig dar und macht auf einen Blick sichtbar, ob eine Verteilung schief ist. Boxplots sind besonders stark beim Vergleich mehrerer Gruppen nebeneinander.",
        ],
        terms: [
          {
            term: "Fünf-Zahlen-Zusammenfassung",
            definition: "Fasst eine Verteilung in fünf Kennzahlen zusammen: Minimum, unteres Quartil (x0,25), Median, oberes Quartil (x0,75) und Maximum. Historischer Vorläufer des Boxplots, der genau diese fünf Werte grafisch darstellt.",
          },
        ],
        figure: {
          type: "histogram",
          caption: "Abb. 4.2 — Histogramm: Balkenhöhe entspricht der Häufigkeitsdichte je Klasse.",
        },
      },
      {
        id: "2-16",
        heading: "4.16 Lorenzkurve und Gini-Koeffizient",
        body: [
          "Die Lorenzkurve zeigt, welcher kumulierte Anteil einer Größe (z. B. Einkommen) auf den kumulierten Anteil der sortierten Einheiten entfällt.",
          "Bei perfekter Gleichverteilung liegt die Kurve auf der Diagonalen. Je stärker sie darunter durchhängt, desto ungleicher ist die Verteilung.",
          "Rechnerisch lässt sich der Gini-Koeffizient direkt aus den (aufsteigend sortierten) Einzelwerten bestimmen, ohne die Lorenzkurve zeichnen zu müssen. Wichtig dabei: Dieser 'unkorrigierte' Gini-Koeffizient erreicht bei maximaler Disparität (eine Einheit besitzt alles, alle anderen nichts) nicht den Wert 1, sondern nur (n−1)/n — er hängt also von n ab. Erst der normierte (korrigierte) Gini-Koeffizient G* erreicht bei maximaler Disparität exakt 1, unabhängig von n.",
        ],
        terms: [
          {
            term: "Lorenzkurve",
            definition: "x-Achse: kumulierter Anteil der Einheiten (aufsteigend sortiert). y-Achse: kumulierter Anteil der Größe selbst.",
          },
          {
            term: "Gini-Koeffizient G",
            definition: "Doppelte Fläche zwischen Diagonale und Lorenzkurve. Liegt zwischen 0 (Gleichverteilung) und (n−1)/n (maximale Konzentration bei n Einheiten).",
          },
          {
            term: "Normierter Gini-Koeffizient G*",
            definition: "G* = n/(n−1) · G. Korrigiert G so, dass der Wertebereich unabhängig von n immer 0 bis 1 ist — bei maximaler Disparität also exakt G*=1.",
          },
        ],
        formulas: [
          "G = (2·Σ i·xi) / (n·Σ xi) − (n+1)/n   (xi aufsteigend sortiert, i=1,...,n)",
          "Maximale Disparität: Gmax = (n−1) / n",
          "Normierter Gini-Koeffizient: G* = n/(n−1) · G",
        ],
        formulasLatex: [
          "G = \\dfrac{2\\sum_{i=1}^{n} i\\,x_i}{n\\sum_{i=1}^{n} x_i} - \\dfrac{n+1}{n}",
          "G_{\\max} = \\dfrac{n-1}{n}",
          "G^{*} = \\dfrac{n}{n-1}\\, G",
        ],
        figure: {
          type: "lorenz",
          caption: "Abb. 4.3 — Lorenzkurve: Fläche zwischen Diagonale und Kurve bestimmt den Gini-Koeffizienten.",
        },
        examples: [
          "5 Filialen einer Fahrradwerkstatt-Kette mit Monatsgewinnen 62,62,62,62,62 € (alle gleich): Gini = 0.",
          "5 Freelancer mit Monatsumsätzen (sortiert) 1200, 1800, 2000, 2500, 3000 €. n=5, Σxi=10 500. Σ i·xi = 1·1200+2·1800+3·2000+4·2500+5·3000 = 1200+3600+6000+10000+15000 = 35 800. G = (2·35 800)/(5·10 500) − 6/5 = 71 600/52 500 − 1,2 ≈ 1,364 − 1,2 = 0,164.",
          "Maximale Disparität bei n=5 (eine Filiale erwirtschaftet mit Monatsgewinnen 0,0,0,0,310 den gesamten Gewinn): Σxi=310, Σ i·xi = 5·310 = 1550. G = (2·1550)/(5·310) − 6/5 = 3100/1550 − 1,2 = 2 − 1,2 = 0,8 — exakt Gmax=(n−1)/n=4/5, NICHT 1. Erst normiert: G* = (5/4)·0,8 = 1,0.",
        ],
      },
      {
        id: "2-17",
        heading: "4.17 Lineare Transformation der Daten",
        body: [
          "Manchmal werden alle Datenpunkte gleichermaßen umgerechnet, z. B. bei einem Einheiten- oder Währungswechsel. Eine solche lineare Transformation yi = a + b·xi verschiebt und/oder streckt die Daten — und die meisten Lage- und Streuungsparameter transformieren sich auf vorhersagbare Weise mit, ohne aus den neuen Daten komplett neu berechnet werden zu müssen.",
          "Besonders wichtig ist der Spezialfall a=−x̄/s, b=1/s: die Standardisierung. Sie erzeugt einen neuen Datensatz mit Mittelwert 0 und Varianz 1 — unabhängig von der ursprünglichen Einheit.",
        ],
        terms: [
          {
            term: "Lineare Transformation",
            definition: "yi = a + b·xi für alle i. a verschiebt, b staucht (|b|<1) oder streckt (|b|>1) die Daten; negatives b spiegelt sie zusätzlich am Ursprung.",
          },
          {
            term: "Standardisierung zi",
            definition: "Spezialfall mit a=−x̄/s und b=1/s. Der standardisierte Datensatz hat immer Mittelwert 0 und Varianz 1, egal welche Einheit die Ausgangsdaten hatten.",
          },
        ],
        formulas: [
          "ȳ = a + b·x̄,   y0,5 = a + b·x0,5,   yp = a + b·xp",
          "sy² = b²·sx²,   sy = |b|·sx,   Ry = |b|·Rx",
          "Standardisierung: zi = (xi − x̄) / sx  ⇒  z̄ = 0, sz² = 1",
        ],
        formulasLatex: [
          "\\bar y = a+b\\bar x, \\quad y_{0{,}5}=a+b\\,x_{0{,}5}, \\quad y_p = a+b\\,x_p",
          "s_y^2 = b^2 s_x^2, \\quad s_y = |b|\\,s_x, \\quad R_y = |b|\\,R_x",
          "z_i = \\dfrac{x_i-\\bar x}{s_x} \\ \\Rightarrow\\ \\bar z = 0,\\ s_z^2=1",
        ],
        examples: [
          "Ein Datensatz mit Materialkosten in US-Dollar hat x̄=120 USD, sx=18 USD. Umrechnung in Euro zum Kurs 1 USD = 0,92 EUR (a=0, b=0,92): ȳ = 0,92·120 = 110,4 EUR, sy = 0,92·18 = 16,56 EUR — die Streuung schrumpft um denselben Faktor wie der Mittelwert, weil hier nur skaliert (a=0), nicht verschoben wird.",
          "Klausurpunkte mit x̄=68, s=12: eine Punktzahl von x=80 wird standardisiert zu z=(80−68)/12=1,0 — die Punktzahl liegt eine Standardabweichung über dem Mittelwert.",
        ],
      },
      {
        id: "2-18",
        heading: "4.18 Kontingenztabelle und Zusammenhangsmaße für nominale Merkmale",
        body: [
          "Bisher ging es um ein Merkmal — jetzt untersuchen wir, wie zwei Merkmale gemeinsam variieren. Bei rein nominalen (oder ordinalen, aber ohne Ausnutzung der Rangfolge) Merkmalen liefert die Kontingenztabelle die Ausgangsbasis, aus der sich Zusammenhangsmaße berechnen lassen, die — anders als die Korrelation — keine metrische Skalierung voraussetzen.",
        ],
        terms: [
          {
            term: "Kontingenztabelle",
            definition: "Kreuztabelle für zwei nominale oder ordinale Merkmale, zeigt die gemeinsame Häufigkeitsverteilung.",
          },
          {
            term: "Quadratische Kontingenz K²",
            definition: "Vergleicht die beobachteten Häufigkeiten hij mit den Häufigkeiten, die bei empirischer Unabhängigkeit zu erwarten wären. K²=0 genau dann, wenn die Merkmale empirisch unabhängig sind.",
          },
          {
            term: "Kontingenzkoeffizient C",
            definition: "Normiert K² grob auf den Bereich [0,1), ist aber vom Tabellenformat (Anzahl Zeilen/Spalten) abhängig — deshalb wird für Vergleiche zwischen unterschiedlich großen Tabellen meist der korrigierte Koeffizient Ckorr verwendet.",
          },
          {
            term: "Korrigierter Kontingenzkoeffizient Ckorr",
            definition: "Korrigiert C so, dass der Wertebereich unabhängig von der Tabellengröße immer 0 bis 1 ist.",
          },
        ],
        formulas: [
          "K² = n · ΣΣ (fij − fi•·f•j)² / (fi•·f•j)",
          "C = √(K² / (n+K²)), mit 0 ≤ C < 1",
          "Ckorr = C · √(C* / (C*−1)), mit C* = min(m,r)",
        ],
        formulasLatex: [
          "K^2 = n\\sum_{i}\\sum_{j}\\dfrac{(f_{ij}-f_{i\\bullet}f_{\\bullet j})^2}{f_{i\\bullet}f_{\\bullet j}}",
          "C = \\sqrt{\\dfrac{K^2}{n+K^2}}, \\quad 0\\le C<1",
          "C_{\\text{korr}} = C\\sqrt{\\dfrac{C^{*}}{C^{*}-1}}, \\quad C^{*}=\\min(m,r)",
        ],
        examples: [
          "80 Auszubildende werden nach bevorzugtem Lernformat (Präsenz/Online) und Ausbildungsberuf (3 Berufe) befragt. Fällt die Verteilung des Lernformats in allen drei Berufen nahezu gleich aus, ist K² nahe 0 und damit auch C und Ckorr nahe 0 — kein erkennbarer Zusammenhang zwischen Beruf und Lernformat-Präferenz.",
        ],
      },
      {
        id: "2-19",
        heading: "4.19 Kovarianz, Korrelation und Rangkorrelation",
        body: [
          "Für metrisch skalierte Merkmale misst die Kovarianz die gemeinsame Richtung der Abweichung vom jeweiligen Mittelwert. Wichtig: Cov(x,y) = 0 folgt aus Unabhängigkeit, aber nicht umgekehrt. Der Korrelationskoeffizient r misst außerdem nur lineare Zusammenhänge — bei einem nicht-linearen (z. B. U-förmigen) Zusammenhang kann r trotzdem nahe 0 liegen.",
          "Sind die Merkmale nur ordinal skaliert (oder liegen Ausreißer vor, die r verzerren würden), verwendet man stattdessen Rangkorrelationskoeffizienten, die nur auf den Rangplätzen der Daten basieren, nicht auf den Werten selbst.",
        ],
        terms: [
          {
            term: "Kovarianz Cov(x,y)",
            definition: "Misst die gemeinsame Richtung der Abweichung vom jeweiligen Mittelwert zweier metrischer Merkmale.",
          },
          {
            term: "Korrelationskoeffizient r",
            definition: "Normiert die Kovarianz auf den Bereich −1 bis 1. r=1 perfekter positiver, r=−1 perfekter negativer, r=0 kein linearer Zusammenhang.",
          },
          {
            term: "Spearman'scher Rangkorrelationskoeffizient rR",
            definition: "Ersetzt die Werte durch ihre Rangplätze und berechnet dann eine Korrelation der Ränge. Bei fehlenden Bindungen (keine gleichen Werte) vereinfacht sich die Formel deutlich.",
          },
          {
            term: "Kendalls τ",
            definition: "Basiert auf dem Anteil konkordanter (gleichsinnig geordneter) minus diskordanter (gegensinnig geordneter) Paare an allen Paaren. Robuster gegenüber Bindungen als Spearman, dafür rechenintensiver bei großem n.",
          },
        ],
        formulas: [
          "Cov(x,y) = (1/n) · Σ (xi − x̄)(yi − ȳ)",
          "r = Cov(x,y) / (sx · sy)",
          "Spearman (ohne Bindungen): rR = 1 − 6·Σ di² / (n·(n²−1)), di = Rang(xi) − Rang(yi)",
          "Kendall: τ = (P − Q) / (P + Q), P=konkordante, Q=diskordante Paare",
        ],
        formulasLatex: [
          "\\text{Cov}(x,y) = \\dfrac{1}{n}\\sum_{i=1}^{n}(x_i-\\bar{x})(y_i-\\bar{y})",
          "r = \\dfrac{\\text{Cov}(x,y)}{s_x\\, s_y}",
          "r_R = 1 - \\dfrac{6\\sum_{i=1}^n d_i^2}{n(n^2-1)}, \\quad d_i = R(x_i)-R(y_i)",
          "\\tau = \\dfrac{P-Q}{P+Q}",
        ],
        examples: [
          "Lernzeit (h): 3,5,7,9; Klausurpunkte: 45,58,74,92. Beide Reihen wachsen gleichzeitig, r liegt nahe +1.",
          "Zwei Sommeliers ranken dieselben 5 Weine (Rang 1 = bester). Sommelier 1: 1,2,3,4,5. Sommelier 2: 2,1,3,5,4. Differenzen di=(−1,1,0,−1,1), di²=(1,1,0,1,1), Σdi²=4. rR = 1 − 6·4/(5·24) = 1 − 24/120 = 0,8 — die beiden Sommeliers bewerten die Weine sehr ähnlich.",
        ],
      },
    ],
  },
];
