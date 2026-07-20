import type { SkriptChapter } from "./types";

// Eigenständiges Lehrwerk zu "Statistik 1" (Wahrscheinlichkeitsrechnung,
// Zufallsvariablen, Verteilungsmodelle, deskriptive Statistik), verfasst wie
// ein unabhängiges Lehrbuch zum Modulthema — nicht als Paraphrase einer
// bestimmten Vorlesung. Erklärungen, Beispiele und Aufbau sind eigenständig
// entwickelt; nur die fachliche Themenabdeckung orientiert sich am üblichen
// Inhalt eines einführenden Statistik-Moduls für Wirtschaftsingenieurwesen.
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 ====================
  {
    id: "wahrscheinlichkeitsrechnung",
    number: 1,
    title: "Wahrscheinlichkeitsrechnung",
    free: true,
    intro:
      "Bevor man mit Daten arbeitet, lohnt sich ein Blick auf die Theorie dahinter: Wie lässt sich Unsicherheit überhaupt sauber in Zahlen fassen? Dieses Kapitel legt mit Ergebnisräumen, Ereignissen und den Grundregeln der Wahrscheinlichkeitsrechnung das Fundament, auf dem die späteren Kapitel zu Zufallsvariablen, Verteilungsmodellen und deskriptiver Statistik aufbauen.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Zufallsexperimente, Ergebnisraum und Ereignisse",
        body: [
          "Ein Zufallsexperiment ist ein Vorgang mit ungewissem Ausgang, der sich aber unter denselben Bedingungen beliebig oft wiederholen lässt — der Münzwurf, die Wartezeit an einer Supermarktkasse, die Anzahl fehlerhafter Teile in einer Tagesproduktion. Die Menge aller denkbaren Ausgänge eines solchen Experiments heißt Ergebnisraum Ω (Omega); ein einzelner möglicher Ausgang wird als Elementarereignis ω bezeichnet.",
          "Ein Ereignis A ist eine Teilmenge des Ergebnisraums, also eine Zusammenfassung mehrerer (oder auch nur eines) Elementarereignisse zu einer inhaltlich sinnvollen Aussage — etwa 'die gezogene Zahl ist gerade' oder 'die Wartezeit liegt unter 5 Minuten'. Tritt eines der zu A gehörenden Elementarereignisse ein, sagt man, das Ereignis A sei eingetreten.",
        ],
        terms: [
          {
            term: "Ergebnisraum (Ω)",
            definition: "Die Menge aller möglichen Ausgänge eines Zufallsexperiments.",
          },
          {
            term: "Ereignis",
            definition: "Eine Teilmenge des Ergebnisraums, die einen oder mehrere mögliche Ausgänge zu einer Aussage zusammenfasst.",
          },
        ],
        examples: [
          "Beim Werfen eines Tetraeders mit den Seiten 1 bis 4 ist Ω = {1,2,3,4}. Das Ereignis 'Ergebnis größer als 2' entspricht der Teilmenge A = {3,4}.",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Mengenoperationen und der Additionssatz",
        body: [
          "Weil Ereignisse Mengen sind, lassen sie sich mit den bekannten Mengenoperationen verknüpfen: Die Vereinigung A∪B beschreibt 'A oder B (oder beide) treten ein', der Durchschnitt A∩B beschreibt 'A und B treten beide ein', und das Komplement A^c beschreibt 'A tritt nicht ein'. Zwei Ereignisse heißen disjunkt (unvereinbar), wenn A∩B = ∅ gilt — sie können nicht gleichzeitig eintreten.",
          "Der Additionssatz beantwortet die Frage, wie wahrscheinlich es ist, dass A oder B eintritt: P(A∪B) = P(A) + P(B) − P(A∩B). Die Schnittmenge muss abgezogen werden, weil sie sonst doppelt gezählt würde — einmal als Teil von A, einmal als Teil von B. Sind A und B disjunkt, entfällt der Korrekturterm, weil P(A∩B) = 0 ist.",
        ],
        formulas: ["P(A∪B) = P(A) + P(B) − P(A∩B)"],
        formulasLatex: ["P(A\\cup B) = P(A) + P(B) - P(A\\cap B)"],
        figure: {
          type: "venn",
          caption: "Abb. 1.1 — Venn-Diagramm: Die Schnittmenge A∩B wird beim Additionssatz nur einmal gezählt.",
        },
        terms: [
          {
            term: "Disjunkte (unvereinbare) Ereignisse",
            definition: "Zwei Ereignisse, die nicht gleichzeitig eintreten können (A∩B = ∅).",
          },
        ],
        examples: [
          "In einer Umfrage unter 200 Beschäftigten nutzen 90 die Kantine (A), 70 nutzen die Firmenparkgarage (B), 25 nutzen beides. P(A∪B) = 90/200 + 70/200 − 25/200 = 0,45 + 0,35 − 0,125 = 0,675 — 67,5% nutzen mindestens eines der beiden Angebote.",
        ],
      },
      {
        id: "1-3",
        heading: "1.3 Axiome der Wahrscheinlichkeit und Laplace-Wahrscheinlichkeit",
        body: [
          "Formal ordnet eine Wahrscheinlichkeitsfunktion P jedem Ereignis A eine Zahl P(A) zu, die drei Axiomen genügt: P(A) ≥ 0 für jedes Ereignis, P(Ω) = 1 (irgendein Ergebnis tritt sicher ein), und für disjunkte Ereignisse addieren sich die Wahrscheinlichkeiten. Aus diesen drei Axiomen lassen sich alle weiteren Rechenregeln — darunter der Additionssatz aus 1.2 — herleiten.",
          "Ein wichtiger Spezialfall ist die Laplace-Wahrscheinlichkeit: Sind alle n Elementarereignisse eines endlichen Ergebnisraums gleich wahrscheinlich, gilt für ein Ereignis A mit |A| günstigen Ausgängen P(A) = |A| / |Ω| — die Anzahl der günstigen Fälle geteilt durch die Anzahl aller möglichen Fälle. Diese Annahme gleicher Wahrscheinlichkeiten ist nur gerechtfertigt, wenn es dafür einen echten Grund gibt (Symmetrie eines Würfels, ein durchmischtes Kartenspiel) — nicht bei jedem beliebigen Zufallsexperiment.",
        ],
        formulas: ["P(A) = |A| / |Ω|  (Laplace-Wahrscheinlichkeit)"],
        formulasLatex: ["P(A) = \\dfrac{|A|}{|\\Omega|}"],
        terms: [
          {
            term: "Laplace-Experiment",
            definition: "Ein Zufallsexperiment mit endlich vielen, gleich wahrscheinlichen Elementarereignissen.",
          },
        ],
        examples: [
          "Bei einem fairen sechsseitigen Würfel ist P(Augenzahl durch 3 teilbar) = |{3,6}| / |{1,...,6}| = 2/6 = 1/3.",
        ],
      },
      {
        id: "1-4",
        heading: "1.4 Kombinatorik: Anordnen und Auswählen",
        body: [
          "Kombinatorische Zählformeln helfen, |Ω| bzw. |A| zu bestimmen, ohne alle Möglichkeiten einzeln aufzuschreiben. Sollen n unterscheidbare Objekte vollständig angeordnet werden, gibt es dafür n! (n Fakultät) Reihenfolgen. Sollen dagegen nur k von n unterscheidbaren Objekten in einer bestimmten Reihenfolge ausgewählt werden (eine Variation ohne Wiederholung), gibt es dafür n! / (n−k)! Möglichkeiten.",
          "Kommt es auf die Reihenfolge der k ausgewählten Objekte dagegen nicht an (eine Kombination ohne Wiederholung), muss man durch die Anzahl der Anordnungen der ausgewählten k Objekte teilen: C(n,k) = n! / (k! · (n−k)!) — der Binomialkoeffizient. Er beantwortet z. B. die Frage, auf wie viele Arten man k Personen aus einer Gruppe von n Personen für ein Team auswählen kann.",
        ],
        formulas: [
          "Variation ohne Wiederholung: n! / (n − k)!",
          "Kombination ohne Wiederholung: C(n,k) = n! / (k! · (n−k)!)",
        ],
        formulasLatex: [
          "\\dfrac{n!}{(n-k)!}",
          "C(n,k) = \\dfrac{n!}{k!\\,(n-k)!}",
        ],
        terms: [
          {
            term: "Fakultät (n!)",
            definition: "Produkt aller natürlichen Zahlen von 1 bis n; Anzahl der Reihenfolgen, in denen sich n unterscheidbare Objekte anordnen lassen.",
          },
          {
            term: "Binomialkoeffizient C(n,k)",
            definition: "Anzahl der Möglichkeiten, k von n unterscheidbaren Objekten ohne Berücksichtigung der Reihenfolge auszuwählen.",
          },
        ],
        examples: [
          "Ein Vereinsvorstand mit 12 Mitgliedern wählt ein Gremium aus 4 Personen ohne feste Rollenverteilung: C(12,4) = 12! / (4!·8!) = 495 Möglichkeiten. Sollten die 4 Positionen dagegen unterschiedliche Rollen (Vorsitz, Kasse, Schriftführung, Beisitz) sein, wären es 12!/8! = 11.880 Variationen.",
        ],
      },
      {
        id: "1-5",
        heading: "1.5 Bedingte Wahrscheinlichkeit und Unabhängigkeit",
        body: [
          "Die bedingte Wahrscheinlichkeit P(A|B) gibt an, wie wahrscheinlich Ereignis A ist, wenn man bereits weiß, dass B eingetreten ist: P(A|B) = P(A∩B) / P(B), definiert für P(B) > 0. Die zusätzliche Information über B verändert dabei effektiv den relevanten Ergebnisraum von Ω auf B.",
          "Zwei Ereignisse A und B heißen (stochastisch) unabhängig, wenn das Eintreten von B keinen Einfluss auf die Wahrscheinlichkeit von A hat, also P(A|B) = P(A) gilt. Äquivalent dazu — und oft einfacher zu prüfen — gilt für unabhängige Ereignisse P(A∩B) = P(A) · P(B). Unabhängigkeit darf nicht mit Disjunktheit verwechselt werden: Disjunkte Ereignisse mit positiver Wahrscheinlichkeit sind sogar zwangsläufig abhängig, weil das Eintreten des einen das andere ausschließt.",
        ],
        formulas: [
          "P(A|B) = P(A∩B) / P(B)",
          "Unabhängigkeit: P(A∩B) = P(A) · P(B)",
        ],
        formulasLatex: [
          "P(A \\mid B) = \\dfrac{P(A\\cap B)}{P(B)}",
          "P(A\\cap B) = P(A)\\cdot P(B)",
        ],
        terms: [
          {
            term: "Bedingte Wahrscheinlichkeit",
            definition: "Wahrscheinlichkeit eines Ereignisses A unter der Voraussetzung, dass ein anderes Ereignis B bereits eingetreten ist.",
          },
          {
            term: "Stochastische Unabhängigkeit",
            definition: "Zwei Ereignisse beeinflussen sich nicht gegenseitig: P(A∩B) = P(A)·P(B).",
          },
        ],
        examples: [
          "In einem Betrieb sind 55% der Beschäftigten in Vollzeit tätig, 30% aller Beschäftigten arbeiten im Homeoffice, und 18% aller Beschäftigten arbeiten in Vollzeit und im Homeoffice. P(Homeoffice | Vollzeit) = 0,18 / 0,55 ≈ 0,327 — unter den Vollzeitkräften arbeitet also etwa jede Dritte im Homeoffice.",
        ],
      },
      {
        id: "1-6",
        heading: "1.6 Satz von Bayes und totale Wahrscheinlichkeit",
        body: [
          "Zerlegen B1, ..., Bn den gesamten Ergebnisraum in disjunkte Teile (eine sogenannte vollständige Zerlegung), lässt sich die Wahrscheinlichkeit eines beliebigen Ereignisses A über den Satz der totalen Wahrscheinlichkeit berechnen: P(A) = Σ P(A|Bi) · P(Bi). Man summiert also über alle Szenarien Bi, gewichtet mit deren jeweiliger Wahrscheinlichkeit.",
          "Oft kennt man P(A|Bi) (z. B. wie wahrscheinlich ein positiver Test bei tatsächlicher Erkrankung ist), möchte aber die umgekehrte Frage beantworten: Wie wahrscheinlich ist Bi, wenn man weiß, dass A eingetreten ist? Genau das leistet der Satz von Bayes: P(Bi|A) = [P(A|Bi) · P(Bi)] / Σj P(A|Bj) · P(Bj). Er 'dreht' eine bedingte Wahrscheinlichkeit um und ist die Grundlage vieler Diagnose- und Klassifikationsverfahren.",
        ],
        formulas: [
          "P(A) = Σ P(A|Bi) · P(Bi)  (totale Wahrscheinlichkeit)",
          "P(Bi|A) = [P(A|Bi) · P(Bi)] / Σj P(A|Bj)·P(Bj)  (Satz von Bayes)",
        ],
        formulasLatex: [
          "P(A) = \\sum_i P(A\\mid B_i)\\, P(B_i)",
          "P(B_i\\mid A) = \\dfrac{P(A\\mid B_i)\\,P(B_i)}{\\sum_j P(A\\mid B_j)\\,P(B_j)}",
        ],
        figure: {
          type: "tree",
          caption: "Abb. 1.2 — Wahrscheinlichkeitsbaum: Entlang jedes Pfades werden die Wahrscheinlichkeiten multipliziert, am Ende über alle zu A führenden Pfade summiert.",
        },
        terms: [
          {
            term: "Vollständige Zerlegung",
            definition: "Eine Menge disjunkter Ereignisse B1,...,Bn, die zusammen den gesamten Ergebnisraum abdecken.",
          },
          {
            term: "Satz von Bayes",
            definition: "Formel, um aus P(A|Bi) und den Wahrscheinlichkeiten P(Bi) die umgekehrte bedingte Wahrscheinlichkeit P(Bi|A) zu berechnen.",
          },
        ],
        examples: [
          "Ein Schnelltest erkennt eine Krankheit, an der 2% der Bevölkerung leiden, mit 95% Wahrscheinlichkeit korrekt (P(pos|krank) = 0,95); bei Gesunden schlägt er in 4% der Fälle fälschlich an (P(pos|gesund) = 0,04). Gesucht: P(krank|pos). Totale Wahrscheinlichkeit: P(pos) = 0,95·0,02 + 0,04·0,98 = 0,019 + 0,0392 = 0,0582. Bayes: P(krank|pos) = 0,019 / 0,0582 ≈ 0,326 — trotz eines auf den ersten Blick zuverlässig wirkenden Tests ist bei positivem Ergebnis nur etwa jede dritte getestete Person tatsächlich erkrankt, weil die Krankheit selten ist.",
        ],
      },
    ],
  },
  // ==================== Kapitel 2 ====================
  {
    id: "zufallsvariablen",
    number: 2,
    title: "Zufallsvariablen",
    free: false,
    intro:
      "Eine Zufallsvariable übersetzt den Ausgang eines Zufallsexperiments in eine Zahl, mit der sich rechnen lässt. Dieses Kapitel führt Erwartungswert, Varianz und weitere Kennzahlen ein, mit denen sich das Verhalten einer Zufallsvariable zusammenfassen lässt — die Grundlage für die konkreten Verteilungsmodelle in Kapitel 3.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Diskrete und stetige Zufallsvariablen",
        body: [
          "Eine Zufallsvariable X ordnet jedem Ergebnis eines Zufallsexperiments eine reelle Zahl zu. Kann X nur endlich oder abzählbar unendlich viele Werte annehmen (z. B. die Anzahl fehlerhafter Teile in einer Stichprobe: 0, 1, 2, ...), heißt sie diskret. Kann X dagegen jeden Wert in einem Intervall annehmen (z. B. die exakte Füllmenge einer Flasche), heißt sie stetig.",
          "Bei diskreten Zufallsvariablen beschreibt die Wahrscheinlichkeitsfunktion f(x) = P(X = x), wie wahrscheinlich jeder einzelne Wert ist. Bei stetigen Zufallsvariablen ist die Wahrscheinlichkeit eines einzelnen exakten Werts stets null; stattdessen beschreibt eine Dichtefunktion f(x), wie sich die Wahrscheinlichkeit über Intervalle verteilt — P(a ≤ X ≤ b) entspricht der Fläche unter f(x) zwischen a und b.",
        ],
        terms: [
          {
            term: "Diskrete Zufallsvariable",
            definition: "Zufallsvariable, die nur endlich oder abzählbar unendlich viele Werte annehmen kann.",
          },
          {
            term: "Stetige Zufallsvariable",
            definition: "Zufallsvariable, die jeden Wert in einem Intervall reeller Zahlen annehmen kann.",
          },
        ],
        examples: [
          "Die Anzahl der Kunden, die in einer Stunde eine Bäckerei betreten, ist diskret (0, 1, 2, ...). Die tatsächliche Zeit zwischen zwei Kundenankünften ist dagegen stetig, da sie jeden positiven reellen Wert annehmen kann.",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Die Verteilungsfunktion",
        body: [
          "Die Verteilungsfunktion F(x) = P(X ≤ x) gibt für jeden Wert x an, mit welcher Wahrscheinlichkeit die Zufallsvariable höchstens x annimmt. Sie ist für diskrete und stetige Zufallsvariablen gleichermaßen definiert und immer monoton wachsend von 0 (für x gegen −∞) bis 1 (für x gegen +∞).",
          "Bei diskreten Zufallsvariablen ist F(x) eine Treppenfunktion, die an jeder möglichen Ausprägung um f(x) nach oben springt. Bei stetigen Zufallsvariablen ist F(x) dagegen eine stetige Kurve, und es gilt der Zusammenhang F(x) = ∫ f(t) dt von −∞ bis x — die Verteilungsfunktion ist die aufsummierte (integrierte) Dichte.",
        ],
        figure: {
          type: "distribution-function",
          caption: "Abb. 2.1 — Verteilungsfunktion einer diskreten Zufallsvariable: Sprünge an jeder möglichen Ausprägung, Sprunghöhe = Einzelwahrscheinlichkeit.",
        },
        terms: [
          {
            term: "Verteilungsfunktion F(x)",
            definition: "Funktion, die für jeden Wert x die Wahrscheinlichkeit P(X ≤ x) angibt.",
          },
        ],
        examples: [
          "Bei einem fairen Würfel gilt F(3) = P(X ≤ 3) = P(X=1)+P(X=2)+P(X=3) = 3/6 = 0,5 — mit 50% Wahrscheinlichkeit würfelt man höchstens eine 3.",
        ],
      },
      {
        id: "2-3",
        heading: "2.3 Erwartungswert",
        body: [
          "Der Erwartungswert E(X) einer Zufallsvariable beschreibt ihren durchschnittlichen Wert bei (gedanklich) unendlich häufiger Wiederholung des zugrunde liegenden Zufallsexperiments. Bei diskreten Zufallsvariablen berechnet er sich als E(X) = Σ xi · f(xi) — jeder mögliche Wert wird mit seiner Wahrscheinlichkeit gewichtet und aufsummiert. Bei stetigen Zufallsvariablen tritt an die Stelle der Summe ein Integral über x·f(x).",
          "Der Erwartungswert ist linear: Für eine Konstante a und b gilt E(aX + b) = a·E(X) + b, und für zwei Zufallsvariablen X und Y gilt stets E(X+Y) = E(X) + E(Y) — unabhängig davon, ob X und Y voneinander abhängen.",
        ],
        formulas: ["E(X) = Σ xi · f(xi)"],
        formulasLatex: ["E(X) = \\sum_i x_i \\cdot f(x_i)"],
        terms: [
          {
            term: "Erwartungswert E(X)",
            definition: "Der mit den Eintrittswahrscheinlichkeiten gewichtete Durchschnittswert einer Zufallsvariable.",
          },
        ],
        examples: [
          "Ein Losverkäufer verkauft Lose zu 2 €. Mit Wahrscheinlichkeit 0,01 gewinnt man 50 €, mit Wahrscheinlichkeit 0,99 gewinnt man nichts. Der erwartete Gewinn beträgt E(X) = 0,01·50 + 0,99·0 = 0,50 € — im Schnitt gewinnt man also weniger, als das Los kostet.",
        ],
      },
      {
        id: "2-4",
        heading: "2.4 Varianz und Standardabweichung",
        body: [
          "Die Varianz Var(X) misst, wie stark die Werte einer Zufallsvariable im Mittel um ihren Erwartungswert streuen: Var(X) = E[(X − μ)²], wobei μ = E(X). Rechnerisch praktischer ist häufig der Verschiebungssatz: Var(X) = E(X²) − [E(X)]², bei dem man nur den Erwartungswert von X und von X² braucht.",
          "Weil die Varianz in quadrierten Einheiten gemessen wird (z. B. €² statt €), zieht man für eine anschauliche Streuungsangabe meist die Wurzel und erhält die Standardabweichung σ = √Var(X), die wieder in der ursprünglichen Einheit von X vorliegt.",
        ],
        formulas: ["Var(X) = E(X²) − [E(X)]²"],
        formulasLatex: ["\\text{Var}(X) = E(X^2) - [E(X)]^2"],
        terms: [
          {
            term: "Varianz",
            definition: "Erwartete quadratische Abweichung einer Zufallsvariable von ihrem Erwartungswert.",
          },
          {
            term: "Standardabweichung",
            definition: "Quadratwurzel der Varianz; Streuungsmaß in derselben Einheit wie die Zufallsvariable selbst.",
          },
        ],
        examples: [
          "Für das Losbeispiel aus 2.3: E(X²) = 0,01·50² + 0,99·0² = 25. Var(X) = 25 − 0,5² = 25 − 0,25 = 24,75. Standardabweichung σ = √24,75 ≈ 4,97 € — trotz eines geringen Erwartungswerts ist das Ergebnis im Einzelfall stark schwankend.",
        ],
      },
      {
        id: "2-5",
        heading: "2.5 Lineare Transformationen",
        body: [
          "Wird eine Zufallsvariable X linear transformiert zu Y = aX + b, verändern sich Erwartungswert und Varianz auf vorhersagbare Weise: Der Erwartungswert transformiert sich wie X selbst, E(Y) = a·E(X) + b, während additive Verschiebungen b die Varianz nicht beeinflussen — nur die Streckung mit a geht (quadriert) in die Varianz ein: Var(Y) = a² · Var(X).",
          "Das erklärt z. B., warum eine Umrechnung von Grad Celsius in Grad Fahrenheit (eine lineare Transformation) den Mittelwert verschiebt und streckt, während eine reine Einheitenverschiebung (z. B. 'alle Werte um 10 erhöhen') die Streuung der Daten überhaupt nicht verändert.",
        ],
        formulas: [
          "E(aX + b) = a·E(X) + b",
          "Var(aX + b) = a² · Var(X)",
        ],
        formulasLatex: [
          "E(aX+b) = a\\,E(X) + b",
          "\\text{Var}(aX+b) = a^2\\,\\text{Var}(X)",
        ],
        examples: [
          "Eine Zufallsvariable X (Tagesumsatz in Tausend €) hat E(X) = 8 und Var(X) = 4. Wird der Umsatz stattdessen in Hundert € gemessen (Y = 10X), gilt E(Y) = 10·8 = 80 und Var(Y) = 10²·4 = 400.",
        ],
      },
      {
        id: "2-6",
        heading: "2.6 Tschebyscheff-Ungleichung",
        body: [
          "Die Tschebyscheff-Ungleichung liefert eine grobe, aber universelle Abschätzung dafür, wie wahrscheinlich große Abweichungen vom Erwartungswert sind — und zwar für jede Zufallsvariable mit endlicher Varianz, unabhängig von ihrer konkreten Verteilung: P(|X − μ| ≥ k·σ) ≤ 1/k² für jedes k > 0.",
          "Für k = 2 folgt daraus z. B., dass höchstens 25% der Werte mehr als zwei Standardabweichungen vom Erwartungswert entfernt liegen können — eine Aussage, die für jede Verteilung gilt, auch wenn man außer μ und σ nichts über sie weiß. Bei bekannter Verteilung (z. B. der Normalverteilung in Kapitel 3) lassen sich meist deutlich schärfere Aussagen treffen.",
        ],
        formulas: ["P(|X − μ| ≥ k·σ) ≤ 1/k²"],
        formulasLatex: ["P(|X-\\mu| \\ge k\\sigma) \\le \\dfrac{1}{k^2}"],
        terms: [
          {
            term: "Tschebyscheff-Ungleichung",
            definition: "Verteilungsunabhängige obere Schranke für die Wahrscheinlichkeit, dass eine Zufallsvariable um mehr als k Standardabweichungen vom Erwartungswert abweicht.",
          },
        ],
        examples: [
          "Eine Maschine befüllt Tüten mit μ = 500 g und σ = 5 g. Für k = 3 (also Abweichungen von mehr als 15 g) gilt P(|X−500| ≥ 15) ≤ 1/9 ≈ 11,1% — höchstens etwa jede neunte Tüte weicht so stark ab, unabhängig davon, welche genaue Form die Füllmengenverteilung hat.",
        ],
      },
      {
        id: "2-7",
        heading: "2.7 Schiefe, Kurtosis und bivariate Zufallsvariablen",
        body: [
          "Über Erwartungswert und Varianz hinaus beschreiben höhere Momente die Form einer Verteilung genauer. Die Schiefe (Skewness) misst die Asymmetrie: Ist sie positiv, hat die Verteilung einen längeren rechten Ausläufer (z. B. Einkommensverteilungen), bei negativer Schiefe einen längeren linken Ausläufer. Die Kurtosis (Wölbung) misst, wie spitz oder flach eine Verteilung im Vergleich zur Normalverteilung ist — ein Exzess über 0 deutet auf schwerere Ränder (mehr Extremwerte) hin als bei der Normalverteilung.",
          "Betrachtet man zwei Zufallsvariablen X und Y gemeinsam (bivariat), interessiert zusätzlich, wie sie zusammenhängen. Die gemeinsame Wahrscheinlichkeitsfunktion f(x,y) beschreibt, mit welcher Wahrscheinlichkeit bestimmte Kombinationen (X=x, Y=y) auftreten; daraus lassen sich die Randverteilungen von X und Y einzeln zurückgewinnen, indem man über die jeweils andere Variable summiert.",
        ],
        terms: [
          {
            term: "Schiefe (Skewness)",
            definition: "Kennzahl für die Asymmetrie einer Verteilung um ihren Erwartungswert.",
          },
          {
            term: "Kurtosis (Wölbung)",
            definition: "Kennzahl für die Steilheit bzw. Schwere der Ränder einer Verteilung im Vergleich zur Normalverteilung.",
          },
          {
            term: "Bivariate Zufallsvariable",
            definition: "Gemeinsame Betrachtung zweier Zufallsvariablen X und Y über ihre gemeinsame Wahrscheinlichkeitsfunktion f(x,y).",
          },
        ],
        examples: [
          "Vermögensverteilungen sind typischerweise rechtsschief: Die meisten Personen liegen im unteren bis mittleren Bereich, wenige extrem hohe Vermögen ziehen den Mittelwert nach rechts und erzeugen einen langen rechten Ausläufer.",
        ],
      },
      {
        id: "2-8",
        heading: "2.8 Bedingter Erwartungswert und bedingte Varianz",
        body: [
          "Bei zwei gemeinsam betrachteten Zufallsvariablen X und Y interessiert häufig nicht nur der unbedingte Erwartungswert von Y, sondern wie er sich verändert, wenn man bereits weiß, dass X einen bestimmten Wert x angenommen hat. Für diskrete Zufallsvariablen wird dazu zunächst die bedingte Wahrscheinlichkeitsfunktion f(y|x) = f(x,y) / f_X(x) gebildet — dieselbe Logik wie bei der bedingten Wahrscheinlichkeit aus Kapitel 1.5, nur auf Zufallsvariablen übertragen. Der bedingte Erwartungswert E(Y|X=x) = Σy y · f(y|x) ist dann der Erwartungswert von Y, berechnet ausschließlich mit dieser bedingten Verteilung.",
          "Bei stetigen Zufallsvariablen tritt an die Stelle der bedingten Wahrscheinlichkeitsfunktion die bedingte Dichte f(y|x) = f(x,y) / f_X(x) (mit der gemeinsamen Dichte f(x,y) und der Randdichte f_X(x) von X), und der bedingte Erwartungswert wird als Integral gebildet: E(Y|X=x) = ∫ y · f(y|x) dy. In beiden Fällen ist E(Y|X=x) im Allgemeinen eine Funktion von x — für jeden Wert von X kann sich der bedingte Erwartungswert von Y ändern, was genau die Abhängigkeit zwischen X und Y widerspiegelt.",
          "Analog misst die bedingte Varianz Var(Y|X=x) = E[(Y − E(Y|X=x))² | X=x] die Streuung von Y, wenn X=x bereits bekannt ist — also die 'Restunsicherheit', die auch nach Kenntnis von X noch in Y verbleibt. Ein nützlicher Zusammenhang ist die Varianzzerlegung E[Var(Y|X)] + Var[E(Y|X)] = Var(Y): Die Gesamtvarianz von Y setzt sich additiv aus der im Mittel verbleibenden bedingten Varianz und der Varianz der bedingten Erwartungswerte zusammen. Je stärker X und Y zusammenhängen, desto größer ist der zweite Term (die 'durch X erklärte' Streuung) und desto kleiner im Verhältnis der erste.",
        ],
        formulas: [
          "E(Y|X=x) = Σy y · f(y|x)  (diskret), E(Y|X=x) = ∫ y · f(y|x) dy  (stetig)",
          "Var(Y|X=x) = E(Y²|X=x) − [E(Y|X=x)]²",
        ],
        formulasLatex: [
          "E(Y\\mid X=x) = \\sum_y y\\,f(y\\mid x) \\quad(\\text{diskret}), \\qquad E(Y\\mid X=x) = \\int y\\,f(y\\mid x)\\,dy \\quad(\\text{stetig})",
          "\\text{Var}(Y\\mid X=x) = E(Y^2\\mid X=x) - [E(Y\\mid X=x)]^2",
        ],
        terms: [
          {
            term: "Bedingte Wahrscheinlichkeitsfunktion/-dichte f(y|x)",
            definition: "Verteilung von Y, gegeben dass X den Wert x angenommen hat; f(y|x) = f(x,y)/f_X(x).",
          },
          {
            term: "Bedingter Erwartungswert E(Y|X=x)",
            definition: "Erwartungswert von Y unter der gemeinsam mit X gebildeten bedingten Verteilung f(y|x); im Allgemeinen eine Funktion von x.",
          },
          {
            term: "Varianzzerlegung",
            definition: "Var(Y) = E[Var(Y|X)] + Var[E(Y|X)] — Gesamtvarianz als Summe aus verbleibender bedingter Varianz und Varianz der bedingten Erwartungswerte.",
          },
        ],
        examples: [
          "Ein Versandhändler erfasst für jede Bestellung die Anzahl X der bestellten Artikel (1 oder 2) und den Bearbeitungsfehler Y (0 = kein Fehler, 1 = Fehler). Bedingt auf X=1 gilt f(Y=1|X=1)=0,02, bedingt auf X=2 gilt f(Y=1|X=2)=0,07 (Mehrartikelbestellungen sind fehleranfälliger). Damit ist E(Y|X=1) = 0,02 und E(Y|X=2) = 0,07: Der bedingte Erwartungswert der Fehlerquote hängt sichtbar von X ab, was zeigt, dass X und Y nicht unabhängig sind.",
        ],
      },
    ],
  },
  // ==================== Kapitel 3 ====================
  {
    id: "verteilungsmodelle",
    number: 3,
    title: "Verteilungsmodelle",
    free: false,
    intro:
      "Statt für jedes neue Zufallsexperiment eine völlig neue Verteilung herzuleiten, greift man in der Praxis meist auf ein kleines Repertoire bewährter Verteilungsmodelle zurück, die jeweils zu bestimmten Situationstypen passen. Dieses Kapitel stellt die wichtigsten diskreten und stetigen Verteilungen vor und zeigt, woran man erkennt, welches Modell zu welcher Situation passt.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Diskrete Gleichverteilung und Bernoulli-Verteilung",
        body: [
          "Bei der diskreten Gleichverteilung sind alle n möglichen Werte einer Zufallsvariable gleich wahrscheinlich, f(x) = 1/n für jeden der n Werte — das Modell für Laplace-Experimente wie Würfeln oder Ziehen aus einem gut gemischten Kartenspiel.",
          "Die Bernoulli-Verteilung modelliert dagegen ein einzelnes Experiment mit genau zwei möglichen Ausgängen, üblicherweise 'Erfolg' (X=1) mit Wahrscheinlichkeit p und 'Misserfolg' (X=0) mit Wahrscheinlichkeit 1−p. Für sie gilt E(X) = p und Var(X) = p·(1−p) — die Varianz ist am größten bei p = 0,5 (maximale Unsicherheit) und sinkt gegen 0, je näher p an 0 oder 1 liegt.",
        ],
        formulas: ["E(X) = p, Var(X) = p·(1−p)  (Bernoulli-Verteilung)"],
        formulasLatex: ["E(X) = p, \\quad \\text{Var}(X) = p(1-p)"],
        terms: [
          {
            term: "Bernoulli-Verteilung",
            definition: "Verteilung eines einzelnen Experiments mit genau zwei Ausgängen (Erfolg mit Wahrscheinlichkeit p, Misserfolg mit 1−p).",
          },
        ],
        examples: [
          "Ob ein einzelnes produziertes Bauteil fehlerhaft ist (p = 0,03) oder nicht, lässt sich als Bernoulli-Variable modellieren: E(X) = 0,03, Var(X) = 0,03·0,97 = 0,0291.",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Binomialverteilung",
        body: [
          "Wiederholt man ein Bernoulli-Experiment n-mal unabhängig voneinander mit stets gleicher Erfolgswahrscheinlichkeit p, folgt die Anzahl der Erfolge X einer Binomialverteilung B(n,p). Ihre Wahrscheinlichkeitsfunktion lautet f(x) = C(n,x) · p^x · (1−p)^(n−x) — der Binomialkoeffizient zählt, auf wie viele Arten sich x Erfolge auf n Versuche verteilen können.",
          "Für die Binomialverteilung gilt E(X) = n·p und Var(X) = n·p·(1−p). Typische Anwendungsfälle sind die Anzahl fehlerhafter Teile in einer Stichprobe fester Größe (bei Ziehen mit Zurücklegen bzw. aus einer sehr großen Grundgesamtheit) oder die Anzahl der Ja-Stimmen bei n unabhängigen Befragten.",
        ],
        formulas: [
          "f(x) = C(n,x) · p^x · (1−p)^(n−x)",
          "E(X) = n·p, Var(X) = n·p·(1−p)",
        ],
        formulasLatex: [
          "f(x) = \\binom{n}{x} p^x (1-p)^{n-x}",
          "E(X) = np, \\quad \\text{Var}(X) = np(1-p)",
        ],
        figure: {
          type: "binomial-bars",
          caption: "Abb. 3.1 — Binomialverteilung B(n,p): diskrete, für p=0,5 symmetrische Balkenverteilung.",
        },
        terms: [
          {
            term: "Binomialverteilung B(n,p)",
            definition: "Verteilung der Anzahl der Erfolge bei n unabhängigen Wiederholungen eines Bernoulli-Experiments mit Erfolgswahrscheinlichkeit p.",
          },
        ],
        examples: [
          "Von 20 unabhängig befragten Passanten geben erfahrungsgemäß 40% an, Fahrrad zu fahren (p=0,4). Die erwartete Anzahl Radfahrender unter den 20 Befragten ist E(X) = 20·0,4 = 8, mit Var(X) = 20·0,4·0,6 = 4,8.",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Hypergeometrische Verteilung",
        body: [
          "Zieht man dagegen ohne Zurücklegen aus einer endlichen Grundgesamtheit vom Umfang N, von denen K die gesuchte Eigenschaft besitzen, folgt die Anzahl X der 'Treffer' unter n gezogenen Elementen einer hypergeometrischen Verteilung: f(x) = [C(K,x) · C(N−K, n−x)] / C(N,n). Anders als bei der Binomialverteilung verändert sich die Trefferwahrscheinlichkeit nach jedem Zug, weil die Grundgesamtheit kleiner wird.",
          "Für sie gilt E(X) = n · K/N — dieselbe Formel wie bei der Binomialverteilung mit p = K/N. Die Varianz ist jedoch kleiner: Var(X) = n · (K/N) · (1−K/N) · (N−n)/(N−1); der zusätzliche Korrekturfaktor (N−n)/(N−1) heißt Endlichkeitskorrektur und wird für große N im Vergleich zu n vernachlässigbar — dann nähert sich die hypergeometrische Verteilung der Binomialverteilung an.",
        ],
        formulas: [
          "f(x) = [C(K,x)·C(N−K,n−x)] / C(N,n)",
          "E(X) = n·K/N",
        ],
        formulasLatex: [
          "f(x) = \\dfrac{\\binom{K}{x}\\binom{N-K}{n-x}}{\\binom{N}{n}}",
          "E(X) = n\\cdot\\dfrac{K}{N}",
        ],
        terms: [
          {
            term: "Hypergeometrische Verteilung",
            definition: "Verteilung der Trefferanzahl beim Ziehen ohne Zurücklegen aus einer endlichen Grundgesamtheit.",
          },
        ],
        examples: [
          "Ein Lagerbestand von 50 Bauteilen enthält 6 fehlerhafte. Bei einer Stichprobe von 10 Bauteilen (ohne Zurücklegen) beträgt die erwartete Anzahl fehlerhafter Teile in der Stichprobe E(X) = 10 · 6/50 = 1,2.",
        ],
      },
      {
        id: "3-4",
        heading: "3.4 Poisson-Verteilung",
        body: [
          "Die Poisson-Verteilung modelliert die Anzahl seltener Ereignisse in einem festen Zeit- oder Raumintervall, wenn ein konstanter durchschnittlicher Rate-Parameter λ (Lambda) bekannt ist — etwa die Anzahl der Anrufe in einer Hotline pro Stunde oder die Anzahl der Druckfehler pro Buchseite. Ihre Wahrscheinlichkeitsfunktion lautet f(x) = (λ^x · e^(−λ)) / x! für x = 0, 1, 2, ...",
          "Für die Poisson-Verteilung gilt die bemerkenswerte Eigenschaft E(X) = Var(X) = λ — Erwartungswert und Varianz sind identisch. Sie ergibt sich außerdem als Grenzfall der Binomialverteilung, wenn n sehr groß und p sehr klein wird, während n·p konstant bei λ bleibt (siehe 3.7).",
        ],
        formulas: [
          "f(x) = (λ^x · e^(−λ)) / x!",
          "E(X) = Var(X) = λ",
        ],
        formulasLatex: [
          "f(x) = \\dfrac{\\lambda^x e^{-\\lambda}}{x!}",
          "E(X) = \\text{Var}(X) = \\lambda",
        ],
        terms: [
          {
            term: "Poisson-Verteilung",
            definition: "Verteilung der Anzahl seltener, unabhängig auftretender Ereignisse in einem festen Intervall bei konstanter Rate λ.",
          },
        ],
        examples: [
          "Eine Werkstatt erhält im Schnitt λ = 3 Notfallaufträge pro Tag. Die Wahrscheinlichkeit für genau 5 Notfallaufträge an einem Tag beträgt f(5) = (3^5 · e^(−3)) / 5! = (243 · 0,0498) / 120 ≈ 0,1008.",
        ],
      },
      {
        id: "3-5",
        heading: "3.5 Stetige Gleichverteilung und Exponentialverteilung",
        body: [
          "Bei der stetigen Gleichverteilung auf einem Intervall [a,b] ist die Dichte über das gesamte Intervall konstant, f(x) = 1/(b−a); jeder gleich lange Teilabschnitt des Intervalls ist gleich wahrscheinlich. Es gilt E(X) = (a+b)/2 und Var(X) = (b−a)²/12.",
          "Die Exponentialverteilung modelliert Wartezeiten zwischen zufälligen Ereignissen bei konstanter Rate λ (verwandt mit der Poisson-Verteilung: Wenn Ereignisse Poisson-verteilt mit Rate λ auftreten, ist die Zeit bis zum nächsten Ereignis exponentialverteilt). Ihre Dichte lautet f(x) = λ·e^(−λx) für x ≥ 0, mit E(X) = 1/λ und Var(X) = 1/λ².",
        ],
        formulas: [
          "Gleichverteilung: E(X) = (a+b)/2, Var(X) = (b−a)²/12",
          "Exponentialverteilung: E(X) = 1/λ, Var(X) = 1/λ²",
        ],
        formulasLatex: [
          "E(X) = \\dfrac{a+b}{2}, \\quad \\text{Var}(X) = \\dfrac{(b-a)^2}{12}",
          "E(X) = \\dfrac{1}{\\lambda}, \\quad \\text{Var}(X) = \\dfrac{1}{\\lambda^2}",
        ],
        terms: [
          {
            term: "Stetige Gleichverteilung",
            definition: "Verteilung mit konstanter Dichte über ein Intervall [a,b].",
          },
          {
            term: "Exponentialverteilung",
            definition: "Verteilung der Wartezeit bis zum nächsten Ereignis bei konstanter Ereignisrate λ.",
          },
        ],
        examples: [
          "Kommen an einem Bankschalter im Schnitt λ = 4 Kund:innen pro Stunde an, beträgt die erwartete Wartezeit bis zur nächsten Ankunft E(X) = 1/4 Stunde = 15 Minuten.",
        ],
      },
      {
        id: "3-6",
        heading: "3.6 Normalverteilung",
        body: [
          "Die Normalverteilung N(μ,σ²) ist die bekannteste stetige Verteilung: eine symmetrische, glockenförmige Dichte um den Erwartungswert μ mit Streuung σ. Ihre Dichtefunktion lautet f(x) = 1/(σ√(2π)) · e^(−(x−μ)²/(2σ²)). Viele natürliche Messgrößen (Körpergröße, Messfehler, Summen vieler unabhängiger Einflüsse) sind näherungsweise normalverteilt — ein Grund dafür liefert der zentrale Grenzwertsatz in 3.7.",
          "Zur Berechnung von Wahrscheinlichkeiten wird jede Normalverteilung auf die Standardnormalverteilung Z ~ N(0,1) zurückgeführt, indem man standardisiert: Z = (X − μ)/σ. Für Z liegen tabellierte Werte der Verteilungsfunktion Φ(z) vor. Als Faustregel gilt: Etwa 68% aller Werte liegen innerhalb einer Standardabweichung um μ, etwa 95% innerhalb von zwei und etwa 99,7% innerhalb von drei Standardabweichungen.",
        ],
        formulas: ["Z = (X − μ) / σ  (Standardisierung)"],
        formulasLatex: ["Z = \\dfrac{X-\\mu}{\\sigma}"],
        figure: {
          type: "normal-curve",
          caption: "Abb. 3.2 — Normalverteilung: symmetrische Glockenkurve um den Erwartungswert μ, Breite bestimmt durch σ.",
        },
        terms: [
          {
            term: "Normalverteilung N(μ,σ²)",
            definition: "Symmetrische, glockenförmige stetige Verteilung, festgelegt durch Erwartungswert μ und Varianz σ².",
          },
          {
            term: "Standardisierung",
            definition: "Umrechnung einer normalverteilten Zufallsvariable X in die Standardnormalverteilung über Z = (X−μ)/σ.",
          },
        ],
        examples: [
          "Füllmengen einer Abfüllanlage sind N(500, 16) verteilt (μ=500 ml, σ=4 ml). Die Wahrscheinlichkeit für eine Füllmenge unter 492 ml entspricht Z = (492−500)/4 = −2, also P(X<492) = Φ(−2) ≈ 0,0228 — etwa 2,3%.",
        ],
      },
      {
        id: "3-7",
        heading: "3.7 Zentraler Grenzwertsatz und Approximationen",
        body: [
          "Der zentrale Grenzwertsatz erklärt, warum die Normalverteilung in der Praxis so häufig auftritt: Die Summe (bzw. der Mittelwert) vieler unabhängiger, identisch verteilter Zufallsvariablen ist — unabhängig von der Form der zugrunde liegenden Einzelverteilung — für hinreichend großes n näherungsweise normalverteilt, mit Erwartungswert n·μ und Varianz n·σ² (bzw. μ und σ²/n für den Mittelwert).",
          "Diese Eigenschaft erlaubt praktische Näherungen zwischen Verteilungen: Eine Binomialverteilung B(n,p) lässt sich für großes n und moderates p gut durch eine Normalverteilung N(np, np(1−p)) annähern (Faustregel: np(1−p) ≥ 9); ist p dagegen sehr klein und n groß bei konstantem n·p = λ, ist die Poisson-Approximation B(n,p) ≈ Poisson(λ) treffender.",
        ],
        terms: [
          {
            term: "Zentraler Grenzwertsatz",
            definition: "Die Summe vieler unabhängiger, identisch verteilter Zufallsvariablen ist für großes n näherungsweise normalverteilt, unabhängig von der Form der Einzelverteilung.",
          },
        ],
        examples: [
          "Bei n = 200 unabhängigen Ja/Nein-Befragungen mit p = 0,5 lässt sich die Anzahl der Ja-Antworten durch N(100, 50) approximieren, da np(1−p) = 50 ≥ 9 deutlich erfüllt ist.",
        ],
      },
      {
        id: "3-8",
        heading: "3.8 Chi-Quadrat- und F-Verteilung",
        body: [
          "Die Chi-Quadrat-Verteilung mit k Freiheitsgraden entsteht als Verteilung der Summe der Quadrate von k unabhängigen standardnormalverteilten Zufallsvariablen: χ² = Z1² + ... + Zk². Sie ist rechtsschief, nimmt nur nicht-negative Werte an, und wird u. a. bei Anpassungstests und zur Konstruktion von Konfidenzintervallen für Varianzen verwendet. Es gilt E(χ²) = k und Var(χ²) = 2k.",
          "Die F-Verteilung entsteht als Verhältnis zweier unabhängiger, jeweils durch ihre Freiheitsgrade skalierter Chi-Quadrat-Verteilungen: F = (χ₁²/k1) / (χ₂²/k2), mit Freiheitsgraden k1 (Zähler) und k2 (Nenner). Sie ist die Grundlage z. B. für den Vergleich zweier Varianzen und für die Varianzanalyse (ANOVA).",
        ],
        formulas: ["E(χ²) = k, Var(χ²) = 2k"],
        formulasLatex: ["E(\\chi^2) = k, \\quad \\text{Var}(\\chi^2) = 2k"],
        terms: [
          {
            term: "Chi-Quadrat-Verteilung",
            definition: "Verteilung der Summe der Quadrate von k unabhängigen standardnormalverteilten Zufallsvariablen.",
          },
          {
            term: "F-Verteilung",
            definition: "Verteilung des Verhältnisses zweier durch ihre Freiheitsgrade skalierter Chi-Quadrat-Verteilungen.",
          },
        ],
        examples: [
          "Eine Chi-Quadrat-Verteilung mit k=10 Freiheitsgraden hat Erwartungswert 10 und Varianz 20 — je mehr Freiheitsgrade, desto symmetrischer und breiter wird die Verteilung.",
        ],
      },
      {
        id: "3-9",
        heading: "3.9 Approximationen zwischen Verteilungen und die Stetigkeitskorrektur",
        body: [
          "Mehrere der in diesem Kapitel behandelten Verteilungen lassen sich unter bestimmten Bedingungen durch eine andere, rechnerisch einfachere Verteilung annähern. Diese Approximationen sind praktisch wertvoll, weil z. B. Binomialwahrscheinlichkeiten mit sehr großem n kaum noch von Hand berechenbar sind, während die Normal- oder Poisson-Näherung mit tabellierten Werten schnell auszuwerten ist. Vier Approximationen sind besonders gebräuchlich: Binomial → Normal (für großes n und moderates p, Faustregel np(1−p) ≥ 9), Binomial → Poisson (für großes n und kleines p bei konstantem λ=np, Faustregel n ≥ 50 und p ≤ 0,05), Hypergeometrisch → Binomial (wenn die Grundgesamtheit N sehr groß im Vergleich zum Stichprobenumfang n ist, Faustregel n/N ≤ 0,05) und Poisson → Normal (für großes λ, Faustregel λ ≥ 9).",
          "Diese Faustregeln sind keine scharfen mathematischen Grenzen, sondern Erfahrungswerte, ab denen der Approximationsfehler in der Praxis vernachlässigbar klein wird — je weiter man sie überschreitet, desto besser die Näherung. Wichtig ist außerdem die Blickrichtung: Die Hypergeometrisch-zu-Binomial-Näherung ersetzt ein Ziehen ohne Zurücklegen durch ein (rechnerisch einfacheres) Ziehen mit Zurücklegen, was gerechtfertigt ist, wenn das Entnehmen einzelner Elemente die Zusammensetzung der Grundgesamtheit kaum verändert.",
          "Wird eine diskrete Verteilung (z. B. Binomial oder Poisson) durch eine stetige Normalverteilung angenähert, entsteht ein systematischer Fehler, weil eine stetige Verteilung jedem einzelnen Punkt die Wahrscheinlichkeit 0 zuordnet, während bei einer diskreten Verteilung P(X=k) durchaus positiv ist. Die Stetigkeitskorrektur behebt dieses Problem, indem sie jeden diskreten Wert k durch das Intervall [k−0,5; k+0,5] ersetzt, bevor die Normalapproximation angewendet wird: P(X ≤ k) ≈ Φ[(k+0,5−μ)/σ] und P(X ≥ k) ≈ 1 − Φ[(k−0,5−μ)/σ]. Für P(X=k) ergibt sich entsprechend P(X=k) ≈ Φ[(k+0,5−μ)/σ] − Φ[(k−0,5−μ)/σ].",
        ],
        formulas: [
          "P(X ≤ k) ≈ Φ[(k+0,5−μ)/σ]  (Stetigkeitskorrektur, obere Grenze)",
          "P(X ≥ k) ≈ 1 − Φ[(k−0,5−μ)/σ]  (Stetigkeitskorrektur, untere Grenze)",
        ],
        formulasLatex: [
          "P(X\\le k) \\approx \\Phi\\!\\left(\\dfrac{k+0{,}5-\\mu}{\\sigma}\\right)",
          "P(X\\ge k) \\approx 1-\\Phi\\!\\left(\\dfrac{k-0{,}5-\\mu}{\\sigma}\\right)",
        ],
        terms: [
          {
            term: "Stetigkeitskorrektur",
            definition: "Korrektur um ±0,5, die beim Approximieren einer diskreten durch eine stetige Verteilung angewendet wird, um den Sprungcharakter der diskreten Verteilung auszugleichen.",
          },
          {
            term: "5%-Regel (hypergeometrisch → binomial)",
            definition: "Faustregel n/N ≤ 0,05: Ist der Stichprobenumfang klein gegenüber der Grundgesamtheit, darf ohne Zurücklegen näherungsweise wie mit Zurücklegen gerechnet werden.",
          },
        ],
        examples: [
          "Für X ~ B(200; 0,4) gilt μ = np = 80 und σ = √(np(1−p)) = √48 ≈ 6,93 (np(1−p)=48 ≥ 9, Normalapproximation gerechtfertigt). Gesucht ist P(X ≤ 75). Mit Stetigkeitskorrektur: P(X≤75) ≈ Φ[(75,5−80)/6,93] = Φ(−0,649) ≈ 0,258. Ohne Korrektur (nur Φ[(75−80)/6,93]=Φ(−0,721)≈0,235) wäre das Ergebnis spürbar ungenauer.",
        ],
      },
    ],
  },
  // ==================== Kapitel 4 ====================
  {
    id: "deskriptive-statistik",
    number: 4,
    title: "Deskriptive Statistik",
    free: false,
    intro:
      "Während die vorherigen Kapitel Wahrscheinlichkeitsmodelle für zukünftige, noch unbekannte Ergebnisse entwickelt haben, geht es in der deskriptiven Statistik um bereits vorliegende, konkrete Daten: Wie lassen sie sich übersichtlich zusammenfassen, beschreiben und vergleichen? Dieses Kapitel behandelt Lage-, Streuungs- und Zusammenhangsmaße sowie die passenden grafischen Darstellungen.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Grundgesamtheit, Stichprobe und Skalenniveaus",
        body: [
          "Die Grundgesamtheit umfasst alle Untersuchungseinheiten, über die eine Aussage getroffen werden soll (z. B. alle Studierenden einer Hochschule); eine Stichprobe ist eine Teilmenge davon, die tatsächlich erhoben wird, meist weil eine Vollerhebung zu aufwändig oder unmöglich wäre. Aus der Stichprobe werden Kennzahlen berechnet, die die Grundgesamtheit möglichst gut repräsentieren sollen.",
          "Merkmale lassen sich nach ihrem Skalenniveau unterscheiden, was bestimmt, welche Rechenoperationen sinnvoll sind. Nominalskalierte Merkmale (z. B. Geschlecht, Studienfach) lassen sich nur auf Gleichheit prüfen. Ordinalskalierte Merkmale (z. B. Schulnoten) lassen sich zusätzlich ordnen, aber Abstände sind nicht sinnvoll interpretierbar. Intervallskalierte Merkmale (z. B. Temperatur in °C) haben gleichmäßige Abstände, aber keinen absoluten Nullpunkt. Verhältnisskalierte Merkmale (z. B. Gewicht, Einkommen) besitzen zusätzlich einen echten Nullpunkt, wodurch auch Verhältnisse ('doppelt so viel') sinnvoll sind.",
        ],
        terms: [
          {
            term: "Grundgesamtheit",
            definition: "Menge aller Untersuchungseinheiten, über die eine statistische Aussage getroffen werden soll.",
          },
          {
            term: "Stichprobe",
            definition: "Tatsächlich erhobene Teilmenge der Grundgesamtheit.",
          },
          {
            term: "Skalenniveau",
            definition: "Einordnung eines Merkmals (nominal, ordinal, intervall- oder verhältnisskaliert), die bestimmt, welche Rechenoperationen zulässig sind.",
          },
        ],
        examples: [
          "Die Postleitzahl ist trotz ihrer Zahlenform nominalskaliert (die Differenz zweier Postleitzahlen hat keine sinnvolle Bedeutung), während der Jahresumsatz eines Unternehmens verhältnisskaliert ist (ein Umsatz von 2 Mio. € ist tatsächlich doppelt so hoch wie einer von 1 Mio. €).",
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Häufigkeitsverteilungen und Klassierung",
        body: [
          "Für ein Merkmal mit wenigen unterschiedlichen Ausprägungen lässt sich direkt auszählen, wie oft (absolute Häufigkeit) bzw. welcher Anteil der Stichprobe (relative Häufigkeit) auf jede Ausprägung entfällt. Die relative Häufigkeit ergibt sich als absolute Häufigkeit geteilt durch den Stichprobenumfang n.",
          "Bei stetigen oder sehr feingliedrigen Merkmalen (z. B. exaktes Gehalt in Euro und Cent) wird stattdessen klassiert: Der Wertebereich wird in disjunkte Klassen (Intervalle) eingeteilt, und man zählt, wie viele Beobachtungen in jede Klasse fallen. Die Klassenbreite beeinflusst dabei maßgeblich, wie detailliert oder grob die resultierende Verteilung erscheint — zu breite Klassen verschleiern Struktur, zu schmale Klassen erzeugen ein verrauschtes Bild.",
        ],
        formulas: ["relative Häufigkeit = absolute Häufigkeit / n"],
        formulasLatex: ["h_i = \\dfrac{n_i}{n}"],
        terms: [
          {
            term: "Absolute Häufigkeit",
            definition: "Anzahl der Beobachtungen mit einer bestimmten Ausprägung.",
          },
          {
            term: "Relative Häufigkeit",
            definition: "Absolute Häufigkeit geteilt durch den Stichprobenumfang n.",
          },
          {
            term: "Klassierung",
            definition: "Einteilung eines stetigen oder feingliedrigen Wertebereichs in disjunkte Intervalle (Klassen) zur übersichtlicheren Auswertung.",
          },
        ],
        examples: [
          "Von 80 befragten Haushalten geben 20 an, kein Auto zu besitzen. Die absolute Häufigkeit ist 20, die relative Häufigkeit 20/80 = 0,25 (25%).",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Empirische Verteilungsfunktion",
        body: [
          "Analog zur theoretischen Verteilungsfunktion aus Kapitel 2.2 lässt sich auch für eine konkrete Stichprobe eine empirische Verteilungsfunktion F(x) bilden: Sie gibt an, welcher Anteil der Beobachtungen höchstens den Wert x aufweist. Für n geordnete Beobachtungswerte ist F(x) eine Treppenfunktion, die an jedem beobachteten Wert um dessen relative Häufigkeit nach oben springt.",
          "Die empirische Verteilungsfunktion ist die Grundlage vieler weiterer Kennzahlen: Median und Quantile (4.5) lassen sich direkt als Umkehrfunktion von F ablesen, und der Vergleich zweier empirischer Verteilungsfunktionen (z. B. verschiedener Gruppen) zeigt anschaulich, welche Gruppe tendenziell höhere oder niedrigere Werte aufweist.",
        ],
        figure: {
          type: "distribution-function",
          caption: "Abb. 4.1 — Empirische Verteilungsfunktion: Treppenfunktion von 0 bis 1, ein Sprung an jedem beobachteten Wert.",
        },
        terms: [
          {
            term: "Empirische Verteilungsfunktion",
            definition: "Treppenfunktion, die für eine konkrete Stichprobe angibt, welcher Anteil der Beobachtungen höchstens x beträgt.",
          },
        ],
        examples: [
          "Bei den Beobachtungswerten 2, 4, 4, 7 (n=4) gilt F(4) = 3/4 = 0,75, weil drei der vier Werte höchstens 4 betragen.",
        ],
      },
      {
        id: "4-4",
        heading: "4.4 Lagemaße: Modus, Median und Mittelwerte",
        body: [
          "Lagemaße fassen zusammen, wo sich die 'Mitte' einer Verteilung befindet. Der Modus ist der am häufigsten auftretende Wert und als einziges Lagemaß auch für nominalskalierte Daten sinnvoll definiert. Der Median ist der Wert, der die der Größe nach sortierten Beobachtungen in zwei gleich große Hälften teilt; er ist robust gegenüber Ausreißern, weil extreme Werte seine Position kaum verändern.",
          "Das arithmetische Mittel x̄ = (1/n)·Σxi ist das bekannteste Lagemaß, reagiert aber empfindlich auf Ausreißer, da jeder einzelne Wert direkt eingeht. Bei stark schiefen Verteilungen (z. B. Einkommen) weicht das arithmetische Mittel deshalb oft deutlich vom Median ab. Für Verhältniszahlen (z. B. Wachstumsraten, Geschwindigkeiten über gleiche Strecken) ist statt des arithmetischen häufig das geometrische bzw. harmonische Mittel das angemessenere Lagemaß.",
        ],
        formulas: ["x̄ = (1/n) · Σ xi"],
        formulasLatex: ["\\bar{x} = \\dfrac{1}{n}\\sum_{i=1}^n x_i"],
        terms: [
          {
            term: "Modus",
            definition: "Der am häufigsten auftretende Wert einer Verteilung.",
          },
          {
            term: "Median",
            definition: "Der Wert, der die geordneten Beobachtungen in zwei gleich große Hälften teilt.",
          },
          {
            term: "Arithmetisches Mittel",
            definition: "Summe aller Beobachtungswerte geteilt durch die Anzahl der Beobachtungen.",
          },
        ],
        examples: [
          "Die Monatsgehälter eines kleinen Teams betragen 2.800, 2.900, 3.000, 3.100 und 15.000 € (Geschäftsführung). Median = 3.000 €, arithmetisches Mittel = (2.800+2.900+3.000+3.100+15.000)/5 = 5.360 € — das arithmetische Mittel wird durch den einen Ausreißer stark verzerrt, der Median beschreibt die 'typische' Situation im Team deutlich besser.",
        ],
      },
      {
        id: "4-5",
        heading: "4.5 Quantile, Spannweite und Interquartilsabstand",
        body: [
          "Ein p-Quantil ist derjenige Wert, unterhalb dessen genau ein Anteil p der Beobachtungen liegt; der Median ist damit das 0,5-Quantil. Besonders gebräuchlich sind die Quartile: das untere Quartil Q1 (0,25-Quantil), der Median (0,5-Quantil) und das obere Quartil Q3 (0,75-Quantil), die eine Verteilung in vier gleich große Teile zerlegen.",
          "Die Spannweite (Maximum minus Minimum) ist das einfachste Streuungsmaß, aber sehr anfällig für einzelne Ausreißer. Robuster ist der Interquartilsabstand IQR = Q3 − Q1, der den Bereich beschreibt, in dem die 'mittleren' 50% der Daten liegen, ohne von extremen Rand-Beobachtungen beeinflusst zu werden.",
        ],
        formulas: ["IQR = Q3 − Q1"],
        formulasLatex: ["IQR = Q_3 - Q_1"],
        terms: [
          {
            term: "Quantil",
            definition: "Wert, unterhalb dessen ein bestimmter Anteil p der Beobachtungen liegt.",
          },
          {
            term: "Interquartilsabstand (IQR)",
            definition: "Differenz zwischen oberem und unterem Quartil; Streuungsmaß für die mittleren 50% der Daten.",
          },
        ],
        examples: [
          "Bei einer Lieferzeit-Stichprobe mit Q1 = 2 Tage und Q3 = 5 Tage beträgt der IQR = 5−2 = 3 Tage — die mittleren 50% aller Lieferungen treffen innerhalb dieser Spanne ein.",
        ],
      },
      {
        id: "4-6",
        heading: "4.6 Streuungsmaße: Varianz und Standardabweichung",
        body: [
          "Analog zur Varianz einer Zufallsvariable (Kapitel 2.4) misst die Stichprobenvarianz s² die durchschnittliche quadrierte Abweichung der Beobachtungen vom arithmetischen Mittel: s² = (1/(n−1)) · Σ(xi − x̄)². Die Division durch n−1 statt n (statt der 'naiven' Variante) korrigiert einen sonst systematischen Fehler, wenn s² zur Schätzung der Varianz einer Grundgesamtheit verwendet wird.",
          "Die Stichprobenstandardabweichung s = √s² liegt wieder in der ursprünglichen Einheit der Daten vor und ist damit meist anschaulicher interpretierbar als die Varianz selbst.",
        ],
        formulas: ["s² = (1/(n−1)) · Σ (xi − x̄)²"],
        formulasLatex: ["s^2 = \\dfrac{1}{n-1}\\sum_{i=1}^n (x_i - \\bar{x})^2"],
        terms: [
          {
            term: "Stichprobenvarianz",
            definition: "Durchschnittliche quadrierte Abweichung der Beobachtungen vom arithmetischen Mittel, geteilt durch n−1.",
          },
        ],
        examples: [
          "Für die Werte 4, 6, 8 (x̄=6, n=3): s² = [(4−6)²+(6−6)²+(8−6)²]/(3−1) = (4+0+4)/2 = 4, also s = 2.",
        ],
      },
      {
        id: "4-7",
        heading: "4.7 Relative Streuungsmaße und gepoolte Datensätze",
        body: [
          "Um die Streuung zweier Datensätze mit unterschiedlichem Niveau (z. B. Gehälter in verschiedenen Ländern mit unterschiedlicher Kaufkraft) fair zu vergleichen, normiert der Variationskoeffizient VK = s / x̄ die Standardabweichung am arithmetischen Mittel — er ist dimensionslos und damit unabhängig von der Einheit oder dem Niveau der Ursprungsdaten.",
          "Werden mehrere Teilstichproben zu einem Gesamtdatensatz zusammengefasst (gepoolt), lässt sich der Gesamtmittelwert als gewichteter Durchschnitt der Teilmittelwerte berechnen; die Gesamtvarianz setzt sich dagegen sowohl aus der durchschnittlichen Streuung innerhalb der Teilgruppen als auch aus der Streuung der Teilgruppen-Mittelwerte untereinander zusammen — zwei Gruppen mit identischer interner Streuung, aber stark unterschiedlichen Mittelwerten, erzeugen insgesamt eine höhere Gesamtvarianz.",
        ],
        formulas: ["VK = s / x̄"],
        formulasLatex: ["VK = \\dfrac{s}{\\bar{x}}"],
        terms: [
          {
            term: "Variationskoeffizient",
            definition: "Standardabweichung geteilt durch das arithmetische Mittel; dimensionsloses, relatives Streuungsmaß.",
          },
        ],
        examples: [
          "Abteilung A hat x̄=3.000 € und s=300 €, Abteilung B hat x̄=5.000 € und s=400 €. VK(A) = 300/3.000 = 0,10, VK(B) = 400/5.000 = 0,08 — obwohl B die höhere absolute Streuung hat, ist die relative Streuung in A größer.",
        ],
      },
      {
        id: "4-8",
        heading: "4.8 Boxplot, Histogramm und Fünf-Zahlen-Zusammenfassung",
        body: [
          "Die Fünf-Zahlen-Zusammenfassung fasst eine Verteilung kompakt über Minimum, Q1, Median, Q3 und Maximum zusammen. Grafisch wird sie im Boxplot dargestellt: eine Box von Q1 bis Q3 mit einer Linie beim Median, sowie 'Whiskers', die bis zum letzten Wert innerhalb des 1,5-fachen IQR reichen; Werte außerhalb dieses Bereichs werden häufig einzeln als potenzielle Ausreißer markiert.",
          "Das Histogramm stellt dagegen klassierte Häufigkeiten (siehe 4.2) als aneinandergrenzende Balken dar, deren Höhe (bzw. bei ungleichen Klassenbreiten: Fläche) proportional zur Häufigkeit der jeweiligen Klasse ist. Während der Boxplot besonders gut zum schnellen Vergleich mehrerer Gruppen geeignet ist, zeigt das Histogramm die Form der Verteilung (z. B. Schiefe oder mehrere Gipfel) deutlich detaillierter.",
        ],
        figure: {
          type: "boxplot",
          caption: "Abb. 4.2 — Boxplot: Median, Quartile (Box = IQR) und Ausreißer auf einen Blick.",
        },
        terms: [
          {
            term: "Fünf-Zahlen-Zusammenfassung",
            definition: "Kompakte Beschreibung einer Verteilung durch Minimum, unteres Quartil, Median, oberes Quartil und Maximum.",
          },
        ],
        examples: [
          "Ein Boxplot der Bearbeitungszeiten zweier Teams zeigt für Team A eine deutlich kleinere Box (geringere Streuung) bei ähnlichem Median wie Team B — ein Hinweis auf gleichmäßigere Arbeitsprozesse bei Team A.",
        ],
      },
      {
        id: "4-9",
        heading: "4.9 Lorenzkurve und Gini-Koeffizient",
        body: [
          "Die Lorenzkurve stellt dar, welcher kumulierte Anteil einer Größe (z. B. Einkommen) auf welchen kumulierten Anteil der Bevölkerung entfällt, sortiert vom kleinsten zum größten Wert. Bei vollkommener Gleichverteilung fällt die Lorenzkurve mit der Diagonalen zusammen (die untersten 20% der Bevölkerung besitzen auch genau 20% des Einkommens); je stärker sie unterhalb der Diagonalen durchhängt, desto ungleicher ist die Verteilung.",
          "Der Gini-Koeffizient verdichtet diese grafische Information zu einer einzigen Zahl zwischen 0 und 1: das Verhältnis der Fläche zwischen Diagonale und Lorenzkurve zur gesamten Fläche unter der Diagonalen. Ein Gini-Koeffizient von 0 bedeutet vollkommene Gleichverteilung, ein Wert nahe 1 maximale Ungleichverteilung (eine einzelne Einheit besitzt praktisch alles).",
        ],
        formulas: ["G = Fläche(Diagonale, Lorenzkurve) / Fläche(Diagonale, x-Achse)"],
        formulasLatex: ["G = \\dfrac{\\text{Fl\\\"ache zwischen Diagonale und Lorenzkurve}}{\\text{Fl\\\"ache unter der Diagonalen}}"],
        figure: {
          type: "lorenz",
          caption: "Abb. 4.3 — Lorenzkurve: Fläche zwischen Diagonale und Kurve bestimmt den Gini-Koeffizienten.",
        },
        terms: [
          {
            term: "Lorenzkurve",
            definition: "Grafische Darstellung des kumulierten Anteils einer Größe in Abhängigkeit vom kumulierten Bevölkerungsanteil, sortiert nach Größe.",
          },
          {
            term: "Gini-Koeffizient",
            definition: "Kennzahl zwischen 0 (Gleichverteilung) und 1 (maximale Ungleichverteilung), abgeleitet aus der Fläche zwischen Lorenzkurve und Diagonale.",
          },
        ],
        examples: [
          "Ein Gini-Koeffizient von 0,29 für die Vermögensverteilung einer Region deutet auf eine vergleichsweise gleichmäßige Verteilung hin, während ein Wert von 0,65 auf eine deutlich konzentriertere Verteilung hindeutet, bei der ein kleiner Bevölkerungsanteil einen großen Vermögensanteil hält.",
        ],
      },
      {
        id: "4-10",
        heading: "4.10 Zusammenhangsmaße: Kontingenz, Kovarianz und Korrelation",
        body: [
          "Für zwei nominalskalierte Merkmale lässt sich der Zusammenhang über eine Kontingenztabelle (Kreuztabelle der gemeinsamen Häufigkeiten) untersuchen; darauf aufbauende Maße wie Cramérs V verdichten die Stärke des Zusammenhangs zu einer einzigen Zahl zwischen 0 (kein Zusammenhang) und 1 (perfekter Zusammenhang).",
          "Für zwei metrisch skalierte Merkmale X und Y misst die Kovarianz Cov(X,Y) = (1/(n−1))·Σ(xi−x̄)(yi−ȳ), ob hohe X-Werte tendenziell mit hohen oder niedrigen Y-Werten einhergehen. Weil ihr Vorzeichen zwar die Richtung, ihr Betrag aber keine direkt interpretierbare Stärke des Zusammenhangs anzeigt (er hängt von den Einheiten ab), normiert man sie zum Korrelationskoeffizienten nach Pearson: r = Cov(X,Y) / (sx · sy), der stets zwischen −1 und +1 liegt und damit unabhängig von den Einheiten der Ausgangsdaten vergleichbar ist.",
        ],
        formulas: ["r = Cov(X,Y) / (sx · sy)"],
        formulasLatex: ["r = \\dfrac{\\text{Cov}(X,Y)}{s_x\\,s_y}"],
        terms: [
          {
            term: "Kovarianz",
            definition: "Maß für den linearen Zusammenhang zweier metrischer Merkmale; Vorzeichen zeigt die Richtung des Zusammenhangs an.",
          },
          {
            term: "Korrelationskoeffizient nach Pearson (r)",
            definition: "Auf den Bereich [−1,1] normierte Kovarianz; misst Stärke und Richtung eines linearen Zusammenhangs unabhängig von den Einheiten der Daten.",
          },
        ],
        examples: [
          "Für Werbeausgaben (X) und Umsatz (Y) mehrerer Filialen ergibt sich Cov(X,Y) = 850, sx = 20, sy = 60. Der Korrelationskoeffizient beträgt r = 850/(20·60) ≈ 0,71 — ein deutlicher, aber nicht perfekter positiver linearer Zusammenhang zwischen Werbeausgaben und Umsatz.",
        ],
      },
      {
        id: "4-11",
        heading: "4.11 Spezielle Mittelwerte: gewichtetes arithmetisches und harmonisches Mittel",
        body: [
          "Nicht jede Beobachtung soll bei der Mittelwertbildung immer gleich stark zählen. Das gewichtete arithmetische Mittel x̄_w = (Σ wi·xi) / (Σ wi) berücksichtigt, dass einzelne Werte xi unterschiedliches Gewicht wi haben — etwa wenn sich eine Durchschnittsnote aus Teilnoten mit unterschiedlicher Punktzahl zusammensetzt, oder ein Preisindex aus mehreren Gütergruppen mit unterschiedlichem Budgetanteil gebildet wird. Das gewöhnliche (ungewichtete) arithmetische Mittel aus 4.4 ist der Spezialfall, in dem alle Gewichte gleich groß sind.",
          "Das harmonische Mittel H = n / Σ(1/xi) (bzw. gewichtet: H_w = (Σ wi) / (Σ wi/xi)) ist dagegen das passende Lagemaß, wenn die Werte xi selbst Verhältniszahlen (Quotienten) sind und die zugehörigen BEZUGSGRÖSSEN im Zähler konstant gehalten werden sollen. Die Faustregel lautet: Ist bei mehreren Teilstrecken/-perioden die Größe im NENNER der Verhältniszahl (z. B. die Zeit bei km/h) konstant, verwendet man das arithmetische Mittel; ist dagegen die Größe im ZÄHLER konstant (z. B. die Strecke bei km/h), ist das harmonische Mittel das korrekte Maß.",
          "Klassisches Beispiel: Fährt ein Fahrzeug zwei gleich lange Streckenabschnitte mit unterschiedlicher Geschwindigkeit, ist die tatsächliche Durchschnittsgeschwindigkeit über die GESAMTSTRECKE das harmonische Mittel der beiden Einzelgeschwindigkeiten — nicht das arithmetische Mittel, das die kürzere (schnellere) Fahrzeit implizit überbewerten würde. Fährt das Fahrzeug dagegen zwei gleich LANGE ZEITSPANNEN mit unterschiedlicher Geschwindigkeit, ist das arithmetische Mittel korrekt. Dasselbe Prinzip gilt bei der Aggregation von Preisindizes: Werden Preisrelationen mit konstanten (fixierten) Mengen des Basisjahres gewichtet, führt dies auf ein gewichtetes arithmetisches Mittel (Laspeyres-Typ); werden sie dagegen mit den Mengen der Berichtsperiode gewichtet, führt dies auf ein gewichtetes harmonisches Mittel (Paasche-Typ).",
        ],
        formulas: [
          "x̄_w = (Σ wi·xi) / (Σ wi)  (gewichtetes arithmetisches Mittel)",
          "H = n / Σ(1/xi)  (harmonisches Mittel, ungewichtet)",
        ],
        formulasLatex: [
          "\\bar{x}_w = \\dfrac{\\sum_i w_i x_i}{\\sum_i w_i}",
          "H = \\dfrac{n}{\\sum_i \\frac{1}{x_i}}",
        ],
        terms: [
          {
            term: "Gewichtetes arithmetisches Mittel",
            definition: "Arithmetisches Mittel, bei dem jeder Wert mit einem individuellen Gewicht wi in die Summe eingeht.",
          },
          {
            term: "Harmonisches Mittel",
            definition: "Mittelwert, der bei Verhältniszahlen mit konstantem Zähler (z. B. gleicher Strecke bei unterschiedlichen Geschwindigkeiten) das korrekte Aggregat liefert.",
          },
        ],
        examples: [
          "Ein Lkw fährt eine 240 km lange Strecke: die erste Hälfte (120 km) mit 60 km/h, die zweite Hälfte (120 km) mit 120 km/h. Da beide Teilstrecken (der Zähler der Verhältniszahl km/h) gleich lang sind, ist das harmonische Mittel korrekt: H = 2/(1/60+1/120) = 2/(0,0167+0,0083) = 2/0,025 = 80 km/h — nicht das arithmetische Mittel von 90 km/h, das die tatsächliche Gesamtfahrzeit (2h + 1h = 3h für 240 km, also faktisch 80 km/h) falsch wiedergeben würde.",
        ],
      },
      {
        id: "4-12",
        heading: "4.12 Rangkorrelation: Spearman und Kendall",
        body: [
          "Der Pearson-Korrelationskoeffizient aus 4.10 setzt metrisch skalierte Daten und einen (näherungsweise) linearen Zusammenhang voraus. Für ordinalskalierte Merkmale (z. B. Kundenzufriedenheit auf einer Rangskala) oder bei monotonen, aber nicht-linearen Zusammenhängen sind Rangkorrelationskoeffizienten die geeignetere Wahl, weil sie nur auf den RÄNGEN der Beobachtungen beruhen, nicht auf den exakten metrischen Abständen.",
          "Der Spearmansche Rangkorrelationskoeffizient rs ersetzt zunächst jede Beobachtung von X und Y durch ihren Rang (1 = kleinster Wert) und berechnet dann formal den Pearson-Korrelationskoeffizienten dieser Ränge. Gibt es keine Bindungen (keine zwei gleichen Werte innerhalb eines Merkmals), vereinfacht sich die Formel zu rs = 1 − [6·Σdi²] / [n(n²−1)], wobei di = Rang(xi) − Rang(yi) die Rangdifferenz jeder Beobachtung ist. Treten Bindungen auf (mehrere gleiche Werte), erhalten alle gebundenen Beobachtungen den Durchschnittsrang (Durchschnitt der Ränge, die sie ohne Bindung belegt hätten) — die vereinfachte d²-Formel ist dann nur noch näherungsweise korrekt, und man sollte rs stattdessen exakt als Pearson-Korrelation der (mit Durchschnittsrängen versehenen) Ränge berechnen.",
          "Der Kendallsche Rangkorrelationskoeffizient τ verfolgt einen anderen Ansatz: Er betrachtet alle n(n−1)/2 möglichen Beobachtungspaare und zählt, wie viele davon konkordant sind (beide Merkmale ändern sich in dieselbe Richtung: xi<xj UND yi<yj, oder xi>xj UND yi>yj) und wie viele diskordant (die Merkmale ändern sich gegenläufig). Für Daten ohne Bindungen gilt τ = (Anzahl konkordanter Paare − Anzahl diskordanter Paare) / [n(n−1)/2]. Beide Koeffizienten liegen zwischen −1 und +1 und sind bei perfekter monotoner Übereinstimmung (nicht notwendig Linearität) gleich ±1 — τ ist dabei typischerweise betragsmäßig kleiner als rs bei denselben Daten, beide Maße sind aber als Konzept nicht direkt numerisch vergleichbar.",
        ],
        formulas: [
          "rs = 1 − [6·Σ di²] / [n(n²−1)]  (Spearman, ohne Bindungen)",
          "τ = (Konkordant − Diskordant) / [n(n−1)/2]  (Kendall, ohne Bindungen)",
        ],
        formulasLatex: [
          "r_s = 1 - \\dfrac{6\\sum_i d_i^2}{n(n^2-1)}",
          "\\tau = \\dfrac{(\\text{Anzahl konkordant}) - (\\text{Anzahl diskordant})}{n(n-1)/2}",
        ],
        terms: [
          {
            term: "Rang",
            definition: "Position eines Werts in der der Größe nach sortierten Reihe der Beobachtungen eines Merkmals.",
          },
          {
            term: "Durchschnittsrang",
            definition: "Rang, den gebundene (gleiche) Beobachtungswerte gemeinsam erhalten: das arithmetische Mittel der Ränge, die sie ohne Bindung belegt hätten.",
          },
          {
            term: "Konkordantes/diskordantes Paar",
            definition: "Ein Beobachtungspaar ist konkordant, wenn beide Merkmale in dieselbe Richtung geordnet sind, und diskordant, wenn sie gegenläufig geordnet sind.",
          },
        ],
        examples: [
          "Fünf Restaurants werden nach Sauberkeit (X) und Kundenzufriedenheit (Y) jeweils in Ränge 1–5 gebracht: X-Ränge (1,2,3,4,5), Y-Ränge (2,1,3,5,4). Rangdifferenzen d=(−1,1,0,−1,1), d²=(1,1,0,1,1), Σd²=4. rs = 1 − [6·4]/[5·24] = 1 − 24/120 = 0,8 — ein starker, aber nicht perfekter monotoner Zusammenhang. Für dieselben Daten: von den 10 möglichen Paaren sind 8 konkordant und 2 diskordant, also τ = (8−2)/10 = 0,6.",
        ],
      },
      {
        id: "4-13",
        heading: "4.13 Kontingenzanalyse: quadratische Kontingenz und Kontingenzkoeffizienten",
        body: [
          "Für zwei nominalskalierte Merkmale mit einer Kontingenztabelle (Kreuztabelle) der beobachteten Häufigkeiten nij lässt sich prüfen, wie stark sie voneinander abweichen von dem, was bei völliger Unabhängigkeit zu erwarten wäre. Die erwarteten (unter Unabhängigkeit theoretischen) Häufigkeiten ergeben sich als eij = (ni.·n.j)/n, wobei ni. die Zeilensumme, n.j die Spaltensumme und n die Gesamtzahl der Beobachtungen ist — dieselbe Logik wie beim Additionssatz für unabhängige Ereignisse (P(A∩B)=P(A)·P(B)) auf Häufigkeiten übertragen.",
          "Die quadratische Kontingenz K² = Σi Σj (nij − eij)² / eij summiert die quadrierten, an der jeweiligen Erwartungshäufigkeit relativierten Abweichungen über alle Zellen der Tabelle. Je größer K², desto stärker weichen die beobachteten von den bei Unabhängigkeit erwarteten Häufigkeiten ab — K² ist rein deskriptiv als Zusammenhangsmaß gedacht (dieselbe Rechengröße wird in der schließenden Statistik auch als Prüfgröße des Chi-Quadrat-Unabhängigkeitstests verwendet).",
          "Da K² unbeschränkt wächst (mit n und der Tabellengröße), ist sie als reines Zusammenhangsmaß schlecht interpretierbar. Der Kontingenzkoeffizient nach Pearson normiert sie auf einen Bereich zwischen 0 und (knapp unter) 1: C = √[K² / (K² + n)]. Allerdings erreicht C selbst bei perfektem Zusammenhang nie exakt 1, sondern einen von der Tabellengröße abhängigen Maximalwert C_max = √[(m−1)/m], wobei m = min(Zeilenzahl, Spaltenzahl). Der korrigierte Kontingenzkoeffizient behebt dies durch Division durch diesen Maximalwert: C_korr = C / √[(m−1)/m], sodass C_korr für jede Tabellengröße zwischen 0 und 1 liegt und Tabellen unterschiedlicher Dimension fair vergleichbar macht.",
        ],
        formulas: [
          "K² = Σi Σj (nij − eij)² / eij, mit eij = (ni.·n.j)/n",
          "C = √[K²/(K²+n)], C_korr = C / √[(m−1)/m]",
        ],
        formulasLatex: [
          "K^2 = \\sum_i \\sum_j \\dfrac{(n_{ij}-e_{ij})^2}{e_{ij}}, \\quad e_{ij} = \\dfrac{n_{i\\cdot}\\,n_{\\cdot j}}{n}",
          "C = \\sqrt{\\dfrac{K^2}{K^2+n}}, \\qquad C_{korr} = \\dfrac{C}{\\sqrt{(m-1)/m}}",
        ],
        terms: [
          {
            term: "Erwartete Häufigkeit (eij)",
            definition: "Häufigkeit, die in einer Zelle einer Kontingenztabelle bei statistischer Unabhängigkeit der beiden Merkmale zu erwarten wäre.",
          },
          {
            term: "Quadratische Kontingenz (K²)",
            definition: "Summe der quadrierten, an den erwarteten Häufigkeiten relativierten Abweichungen zwischen beobachteten und erwarteten Häufigkeiten.",
          },
          {
            term: "Korrigierter Kontingenzkoeffizient (C_korr)",
            definition: "Auf [0,1] normierter Kontingenzkoeffizient, der den von der Tabellengröße abhängigen Maximalwert von C herausrechnet.",
          },
        ],
        examples: [
          "Eine Umfrage kreuzt Abteilung (Vertrieb/Produktion) mit Zufriedenheit (niedrig/mittel/hoch), n=120. Beobachtet: Vertrieb (10,20,30), Produktion (20,30,10); Zeilensummen 60/60, Spaltensummen 30/50/40. Erwartete Häufigkeiten z. B. e11=(60·30)/120=15. Summiert man alle sechs Zellenbeiträge (u. a. (10−15)²/15≈1,67 und (30−20)²/20=5), ergibt sich K²≈15,33. Mit n=120: C=√[15,33/(15,33+120)]≈0,337. Bei m=min(2,3)=2 ist C_max=√(1/2)≈0,707, also C_korr=0,337/0,707≈0,476 — ein moderater Zusammenhang zwischen Abteilung und Zufriedenheit.",
        ],
      },
      {
        id: "4-14",
        heading: "4.14 R-Funktionen für Statistik 1 im Überblick",
        body: [
          "Praktisch alle in diesem Skript behandelten Kennzahlen und Verteilungen lassen sich in R mit wenigen eingebauten Funktionen berechnen, ohne die Formeln von Hand auszuwerten. Für Verteilungen folgt R durchgehend demselben Namensschema: ein Präfix d (Dichte/Wahrscheinlichkeitsfunktion, also f(x)), p (Verteilungsfunktion F(x)=P(X≤x)), q (Quantilfunktion, die Umkehrung von p) oder r (Zufallszahlen erzeugen), gefolgt vom Verteilungsnamen — z. B. dbinom(), pbinom(), qbinom(), rbinom() für die Binomialverteilung.",
          "Für die deskriptiven Zusammenhangsmaße aus diesem Kapitel sowie zentrale Verteilungsfunktionen aus Kapitel 3 sind folgende Funktionen am gebräuchlichsten (Argumente vereinfacht dargestellt):",
        ],
        terms: [
          { term: "cor(x, y, method=\"pearson\")", definition: "Pearson-Korrelationskoeffizient r zwischen zwei metrischen Vektoren (Standardmethode, siehe 4.10)." },
          { term: "cor(x, y, method=\"spearman\")", definition: "Spearmanscher Rangkorrelationskoeffizient rs; R bildet intern automatisch Durchschnittsränge bei Bindungen (siehe 4.12)." },
          { term: "cor(x, y, method=\"kendall\")", definition: "Kendallsches τ zwischen zwei Vektoren, inkl. automatischer Behandlung von Bindungen (siehe 4.12)." },
          { term: "chisq.test(tabelle, correct=FALSE)", definition: "Berechnet u. a. die quadratische Kontingenz K² (als statistic-Wert) für eine Kontingenztabelle (siehe 4.13)." },
          { term: "weighted.mean(x, w)", definition: "Gewichtetes arithmetisches Mittel eines Vektors x mit Gewichten w (siehe 4.11)." },
          { term: "1/mean(1/x)", definition: "In Basis-R keine eingebaute Funktion für das harmonische Mittel; kann so direkt aus der Definition berechnet werden (siehe 4.11)." },
          { term: "dbinom(x, size=n, prob=p)", definition: "Wahrscheinlichkeitsfunktion f(x) der Binomialverteilung B(n,p) (siehe 3.2)." },
          { term: "pbinom(q, size=n, prob=p)", definition: "Verteilungsfunktion P(X≤q) der Binomialverteilung." },
          { term: "dpois(x, lambda)", definition: "Wahrscheinlichkeitsfunktion f(x) der Poisson-Verteilung mit Rate λ (siehe 3.4)." },
          { term: "dhyper(x, m, n, k)", definition: "Wahrscheinlichkeitsfunktion der hypergeometrischen Verteilung (m=K Erfolgselemente, n=N−K, k=Stichprobenumfang, siehe 3.3)." },
          { term: "pnorm(q, mean, sd)", definition: "Verteilungsfunktion Φ der Normalverteilung N(mean, sd²); mit mean=0, sd=1 die Standardnormalverteilung (siehe 3.6)." },
          { term: "qnorm(p, mean, sd)", definition: "Quantilfunktion der Normalverteilung; liefert zu gegebener Wahrscheinlichkeit p den zugehörigen x-Wert." },
        ],
        examples: [
          "Für die fünf Restaurant-Ränge aus Beispiel 4.12 (X=(1,2,3,4,5), Y=(2,1,3,5,4)) liefert cor(X, Y, method=\"spearman\") in R denselben Wert 0,8, den man auch von Hand über die d²-Formel erhält — R nutzt intern jedoch die exakte Pearson-Formel auf den Rängen, was insbesondere bei Bindungen zuverlässiger ist als die vereinfachte Handrechnung.",
        ],
      },
      {
        id: "4-15",
        heading: "4.15 Lage- und Streuungsmaße bei klassierten Daten",
        body: [
          "Liegen die Daten nicht als Liste einzelner Werte, sondern nur noch als Häufigkeitstabelle mit Klassen vor (siehe 4.2) — etwa weil bereits klassiert erhoben oder veröffentlicht wurde —, sind die exakten Einzelwerte xi nicht mehr bekannt. Als Notlösung ersetzt man jede Beobachtung einer Klasse durch die Klassenmitte mi = (au+ao)/2 (au, ao: untere und obere Klassengrenze) und rechnet so, als läge jede der ni Beobachtungen der Klasse exakt bei mi. Das ist eine Näherung: Innerhalb einer Klasse können die tatsächlichen Werte durchaus ungleichmäßig verteilt sein, sodass das Ergebnis vom wahren Wert (den man mit den Originaldaten erhielte) leicht abweicht — die Näherung wird umso genauer, je schmaler die Klassen sind.",
          "Mittelwert und Varianz aus 4.4 und 4.6 übertragen sich direkt, indem xi durch die Klassenmitte mi und die einzelne Beobachtung durch die Klassenhäufigkeit ni ersetzt wird. Für den Median reicht die Klassenmitte allein nicht aus, weil er von der Position innerhalb der Klasse abhängt: Stattdessen wird linear interpoliert, unter der Annahme, dass sich die ni Beobachtungen der Medianklasse gleichmäßig über deren Breite bm verteilen.",
        ],
        formulas: [
          "x̄ ≈ (1/n) · Σ ni · mi",
          "s² ≈ (1/(n−1)) · Σ ni · (mi − x̄)²",
          "Median ≈ au + [(n/2 − F(au)) / nm] · bm",
        ],
        formulasLatex: [
          "\\bar{x} \\approx \\dfrac{1}{n}\\sum_{i=1}^k n_i \\cdot m_i",
          "s^2 \\approx \\dfrac{1}{n-1}\\sum_{i=1}^k n_i \\cdot (m_i - \\bar{x})^2",
          "\\text{Median} \\approx a_u + \\dfrac{\\frac{n}{2} - F(a_u)}{n_m}\\cdot b_m",
        ],
        terms: [
          {
            term: "Klassenmitte mi",
            definition: "Mittelpunkt einer Klasse, (untere Grenze + obere Grenze)/2; Näherungswert für alle Beobachtungen dieser Klasse.",
          },
          {
            term: "Klassierter Mittelwert / klassierte Varianz",
            definition: "Näherungsweise Berechnung von x̄ bzw. s² aus einer Häufigkeitstabelle, indem jede Beobachtung durch die Klassenmitte ihrer Klasse ersetzt wird.",
          },
          {
            term: "Interpolierter Median",
            definition: "Näherungswert für den Median aus klassierten Daten: au ist die untere Grenze der Medianklasse (der Klasse, in der die kumulierte Häufigkeit erstmals n/2 erreicht), F(au) die kumulierte absolute Häufigkeit bis au, nm die absolute Häufigkeit und bm die Breite der Medianklasse.",
          },
        ],
        examples: [
          "Eine Support-Hotline erfasst die Bearbeitungszeit von 40 Anrufen nur noch klassiert: [0,5) Minuten: 8 Anrufe, [5,10): 15, [10,15): 12, [15,20): 5. Klassenmitten: 2,5 / 7,5 / 12,5 / 17,5. Mittelwert: x̄ ≈ (8·2,5+15·7,5+12·12,5+5·17,5)/40 = 370/40 = 9,25 Minuten. Varianz: s² ≈ [8·(2,5−9,25)²+15·(7,5−9,25)²+12·(12,5−9,25)²+5·(17,5−9,25)²]/39 = 877,5/39 ≈ 22,5, also s ≈ 4,74 Minuten. Median: Die kumulierten Häufigkeiten sind 8, 23, 35, 40 — bei n/2=20 liegt die Medianklasse bei [5,10) (au=5, F(au)=8, nm=15, bm=5). Median ≈ 5 + [(20−8)/15]·5 = 5+4 = 9 Minuten, nahe am Mittelwert.",
        ],
      },
    ],
  },
];
