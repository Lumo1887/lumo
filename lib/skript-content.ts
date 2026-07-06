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
      "Deskriptive Statistik fasst erhobene Daten übersichtlich zusammen — durch Kennzahlen (Lage, Streuung, Zusammenhang) und Grafiken (Histogramm, Boxplot, Lorenzkurve). Bevor überhaupt gerechnet wird, muss klar sein, welche Art von Daten vorliegt — denn davon hängt ab, welche Kennzahlen und Grafiken überhaupt sinnvoll sind.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Grundbegriffe",
        body: [
          "Die Grundgesamtheit ist die Menge aller statistischen Einheiten, die untersucht werden sollen — z. B. \"alle Studierenden der KIT-Fakultät für Wirtschaftswissenschaften im aktuellen Semester\". Jede einzelne Einheit (Person, Unternehmen, Produkt, ...) trägt ein oder mehrere Merkmale, deren konkrete Ausprägung sich von Einheit zu Einheit unterscheiden kann. In der Praxis wird fast nie die gesamte Grundgesamtheit erhoben, sondern nur eine Stichprobe — ein Teil davon, aus dem man auf die Grundgesamtheit schließt (das ist dann Gegenstand der schließenden Statistik in Statistik II).",
          "Merkmale werden nach ihrem Skalenniveau unterschieden, weil das Skalenniveau bestimmt, welche Rechenoperationen überhaupt sinnvoll sind: nominal (nur Gleichheit/Ungleichheit sinnvoll, z. B. Geschlecht, Studienfach — hier darf man weder eine Rangfolge noch einen Mittelwert bilden), ordinal (zusätzlich eine Rangfolge sinnvoll, z. B. Schulnote, Zufriedenheit auf einer Skala 1–5 — man darf sagen \"besser als\", aber die Abstände zwischen den Rängen sind nicht notwendig gleich groß) und metrisch (zusätzlich Abstände bzw. Verhältnisse sinnvoll, z. B. Einkommen, Größe, Alter). Metrische Merkmale unterteilt man weiter in diskret (abzählbare, meist ganzzahlige Ausprägungen, z. B. Kinderzahl, Anzahl Semester) und stetig (jeder Wert in einem Intervall theoretisch möglich, z. B. Körpergröße, Zeit).",
          "Ein häufiger Klausur-Stolperstein: Schulnoten SEHEN aus wie Zahlen und werden oft wie metrische Daten behandelt (z. B. Notendurchschnitt berechnen), sind aber strenggenommen nur ordinal — der Abstand zwischen einer 1 und einer 2 ist nicht zwangsläufig \"gleich groß\" wie der zwischen einer 3 und einer 4. In der Praxis wird diese Unschärfe oft toleriert, in der Klausur wird aber gerne genau nach dem korrekten, strengen Skalenniveau gefragt.",
          "Weitere wichtige Unterscheidungen: häufbare Merkmale (eine Einheit kann mehrere Ausprägungen gleichzeitig haben, z. B. gesprochene Sprachen oder gebuchte Nebenfächer) vs. nicht häufbare Merkmale (genau eine Ausprägung pro Einheit, z. B. Geburtsland), sowie Bestandsmassen (Momentaufnahme zu einem Stichtag, z. B. Einwohnerzahl am 31.12.) vs. Bewegungsmassen (Ereignisse über einen Zeitraum kumuliert, z. B. Neuzulassungen pro Jahr, Geburten pro Monat).",
        ],
        examples: [
          "Ordne die Merkmale ein: (a) Matrikelnummer — nominal (auch wenn es Zahlen sind, es gibt keine sinnvolle Rangfolge oder Differenz zwischen zwei Matrikelnummern); (b) Abschlussnote — ordinal (Rangfolge ja, gleiche Abstände fraglich); (c) Anzahl bestandener Prüfungen — metrisch, diskret; (d) Bearbeitungszeit einer Klausur in Minuten — metrisch, stetig.",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Häufigkeitsverteilungen",
        body: [
          "Für ein Merkmal mit Ausprägungen a1, ..., ak zählt die absolute Häufigkeit h(ai), wie oft eine Ausprägung im Datensatz vorkommt. Die relative Häufigkeit f(ai) = h(ai)/n normiert dies auf den Stichprobenumfang n und macht Datensätze unterschiedlicher Größe vergleichbar — 30 von 50 Studierenden bestehen eine Klausur klingt anders als \"60%\", ist aber dieselbe Information, nur normiert.",
          "Die kumulierte relative Häufigkeit F(x) — auch empirische Verteilungsfunktion genannt — gibt an, welcher Anteil der Beobachtungen kleiner oder gleich x ist. Sie ist eine monoton wachsende Treppenfunktion, die bei 0 beginnt (weit links von allen Daten) und bei 1 endet (weit rechts von allen Daten), mit Sprüngen genau an den Stellen, an denen tatsächlich Beobachtungen liegen. Die Sprunghöhe an einer Stelle ai entspricht genau der relativen Häufigkeit f(ai) an dieser Stelle.",
          "Die empirische Verteilungsfunktion ist deshalb so nützlich, weil sich aus ihr direkt Quantile ablesen lassen (siehe Abschnitt 2.3) und weil sie später als direktes Vorbild für die theoretische Verteilungsfunktion einer Zufallsvariablen dient (Kapitel 4) — wer F(x) hier verstanden hat, tut sich dort deutlich leichter.",
          "Typischer Fehler: F(x) ist NICHT dasselbe wie f(x). f(ai) ist die (relative) Häufigkeit GENAU der Ausprägung ai, während F(x) die KUMULIERTE Häufigkeit BIS EINSCHLIESSLICH x ist — also die Summe aller f(ai) mit ai ≤ x.",
        ],
        formulas: ["F(x) = Anzahl(Xi ≤ x) / n = Σ f(ai) für alle ai ≤ x"],
        formulasLatex: [
          "F(x) = \\dfrac{\\text{Anzahl}(X_i \\le x)}{n} = \\sum_{a_i \\le x} f(a_i)",
        ],
        examples: [
          "Bei 10 gewürfelten Zahlen 2,4,4,5,6,2,3,4,5,6 ist h(4)=3, f(4)=3/10=0,3. Die Verteilungsfunktion an der Stelle x=4 ist F(4) = f(2)+f(3)+f(4) = 0,2+0,1+0,3 = 0,6 — 60% der Würfe zeigten höchstens eine 4.",
        ],
      },
      {
        id: "2-3",
        heading: "2.3 Lageparameter",
        body: [
          "Lageparameter (auch Lagemaße) fassen einen Datensatz in EINER Zahl zusammen, die angibt, \"wo die Daten typischerweise liegen\". Welches Lagemaß sinnvoll ist, hängt vom Skalenniveau ab — das ist ein sehr beliebter Klausur-Punkt.",
          "Der Modus xD ist die am häufigsten auftretende Ausprägung — er ist als einziges Lagemaß auf JEDEM Skalenniveau definiert, auch bei rein nominalen Daten (z. B. \"welche Studienrichtung ist am beliebtesten\" hat einen Modus, aber keinen sinnvollen Mittelwert). Bei mehreren gleich häufigen Ausprägungen ist die Verteilung multimodal (z. B. bimodal bei zwei \"Gipfeln\").",
          "Der Median x0,5 teilt die der Größe nach sortierten Daten in zwei gleich große Hälften: mindestens 50% der Werte liegen ≤ x0,5, mindestens 50% liegen ≥ x0,5. Bei ungeradem n ist er exakt der mittlere Wert der sortierten Liste (Position (n+1)/2); bei geradem n das arithmetische Mittel der beiden mittleren Werte (Positionen n/2 und n/2+1). Der Median setzt mindestens ordinales Skalenniveau voraus, da man die Daten sortieren können muss.",
          "Das arithmetische Mittel x̄ ist nur für metrische Merkmale sinnvoll (man muss addieren und durch n teilen können) und reagiert empfindlich auf Ausreißer — ein einziger extremer Wert kann x̄ stark verschieben, während der Median davon fast unberührt bleibt. Genau deshalb wird z. B. bei Einkommensstatistiken oft der Median berichtet, nicht der Mittelwert: Wenige sehr hohe Einkommen würden den Mittelwert nach oben verzerren und ein zu optimistisches Bild vom \"typischen\" Einkommen zeichnen.",
          "p-Quantile verallgemeinern den Median: das p-Quantil xp lässt einen Anteil p der Daten darunter (bzw. maximal p) und (1−p) darüber liegen. Der Median ist also genau das 0,5-Quantil. Häufig gefragt: Quartile (0,25- und 0,75-Quantil), die den Datensatz in Viertel teilen und die Grundlage für den Interquartilsabstand (Abschnitt 2.4) und den Boxplot bilden.",
          "Bei gruppierten/gewichteten Daten (z. B. eine Häufigkeitstabelle statt der Rohdaten) wird das arithmetische Mittel als gewichtetes Mittel berechnet, wobei jede Ausprägung mit ihrer relativen Häufigkeit gewichtet wird — inhaltlich dasselbe Prinzip wie ein Notendurchschnitt, bei dem eine 5-CP-Vorlesung stärker zählt als eine 3-CP-Vorlesung.",
        ],
        formulas: [
          "x̄ = (1/n) · Σ xi",
          "gewichtetes Mittel: x̄ = Σ wi·xi mit Σ wi = 1",
        ],
        formulasLatex: [
          "\\bar{x} = \\dfrac{1}{n}\\sum_{i=1}^{n} x_i",
          "\\bar{x} = \\sum_i w_i x_i \\quad \\text{mit} \\quad \\sum_i w_i = 1",
        ],
        examples: [
          "Bei den Einkommen 1005, 2324, 8432, 3321, 443, 6489, 2231, 3721, 232 (n=9, bereits sortiert: 232, 443, 1005, 2231, 2324, 3321, 3721, 6489, 8432) ist der Median der mittlere (5.) Wert: 2324 €. Das arithmetische Mittel liegt bei ≈ 3133 € — deutlich höher, weil der Ausreißer 8432 den Mittelwert nach oben zieht, während der Median davon unbeeinflusst bleibt.",
          "Notendurchschnitt mit Gewichtung: Modul A (6 CP, Note 1,7), Modul B (3 CP, Note 2,3), Modul C (9 CP, Note 2,0). Gewichtetes Mittel = (6·1,7 + 3·2,3 + 9·2,0) / (6+3+9) = (10,2+6,9+18,0)/18 = 35,1/18 ≈ 1,95 — deutlich näher an Modul C, weil es das meiste Gewicht (9 CP) hat.",
        ],
      },
      {
        id: "2-4",
        heading: "2.4 Streuungsparameter",
        body: [
          "Ein Lagemaß allein sagt nichts darüber aus, wie \"breit gestreut\" die Daten um dieses Zentrum liegen — zwei Datensätze können denselben Mittelwert haben und trotzdem völlig unterschiedlich aussehen (z. B. Noten 2,2,2,2,2 vs. 1,1,3,3,2 haben beide den Mittelwert 2, aber sehr unterschiedliche Streuung). Streuungsmaße schließen genau diese Lücke.",
          "Die Spannweite (Max − Min) ist die einfachste Streuungskennzahl, aber sehr ausreißeranfällig — ein einziger extremer Wert bestimmt sie komplett. Der Interquartilsabstand IQR = x0,75 − x0,25 ist deutlich robuster, da er nur die \"mittleren 50%\" der Daten betrachtet und Ausreißer in den äußeren Vierteln ignoriert. Er entspricht genau der Breite der Box in einem Boxplot (siehe Abbildung) — deshalb heißt der Boxplot auch \"Box-and-Whisker-Plot\".",
          "Die Varianz misst die mittlere quadrierte Abweichung vom Mittelwert. Quadriert wird aus zwei Gründen: erstens damit sich positive und negative Abweichungen nicht gegenseitig aufheben (sie würden sich sonst per Definition des Mittelwerts immer exakt zu 0 aufsummieren), zweitens weil quadrierte Abweichungen mathematisch angenehmer zu handhaben sind (z. B. differenzierbar). Der Nachteil: Die Varianz hat eine \"komische\" Einheit (z. B. €² statt €), weshalb man in der Praxis meist die Standardabweichung angibt.",
          "Die Standardabweichung s = √Var(x) ist die Wurzel der Varianz und hat wieder dieselbe Einheit wie die Ausgangsdaten — deshalb ist sie das gebräuchlichste Streuungsmaß in Berichten und Grafiken (z. B. \"Fehlerbalken\" = ± 1 Standardabweichung).",
          "Der Variationskoeffizient v = s/x̄ (Standardabweichung geteilt durch Mittelwert) ist ein dimensionsloses, relatives Streuungsmaß — er erlaubt den Vergleich der Streuung UNABHÄNGIG von der Maßeinheit oder dem Ausgangsniveau. Praktisch relevant z. B. beim Vergleich der Einkommensstreuung in Deutschland (Mittelwert hoch, absolute Streuung in Euro groß) mit einem Land mit niedrigerem Preisniveau — der Variationskoeffizient zeigt, ob die RELATIVE Ungleichheit tatsächlich größer ist, oder nur die absoluten Zahlen wegen des Preisniveaus größer wirken.",
        ],
        formulas: [
          "Var(x) = (1/n) · Σ (xi − x̄)²",
          "s = √Var(x)",
          "Variationskoeffizient v = s / x̄",
        ],
        formulasLatex: [
          "\\text{Var}(x) = \\dfrac{1}{n}\\sum_{i=1}^{n}(x_i - \\bar{x})^2",
          "s = \\sqrt{\\text{Var}(x)}",
          "v = \\dfrac{s}{\\bar{x}}",
        ],
        examples: [
          "Daten: 2, 4, 4, 6. x̄ = 4. Abweichungen: −2, 0, 0, 2. Quadrierte Abweichungen: 4, 0, 0, 4. Var(x) = (4+0+0+4)/4 = 2. Standardabweichung s = √2 ≈ 1,41.",
          "Zwei Abteilungen haben Durchschnittsgehälter von 3000 € (s=300 €) bzw. 5000 € (s=400 €). Variationskoeffizienten: v1 = 300/3000 = 0,10, v2 = 400/5000 = 0,08 — obwohl Abteilung 2 eine höhere absolute Streuung hat (400 € > 300 €), ist die RELATIVE Streuung in Abteilung 1 sogar etwas größer.",
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
          "Ein Histogramm zeigt die Häufigkeitsdichte (Häufigkeit / Klassenbreite) klassierter metrischer Daten. Die Division durch die Klassenbreite ist wichtig, sobald Klassen unterschiedlich breit sind — sonst würde eine breite Klasse allein wegen ihrer Breite höher wirken, obwohl die Daten darin gar nicht dichter liegen. Zu breite Klassen verwischen Strukturen (z. B. eine Bimodalität wird unsichtbar), zu schmale Klassen erzeugen ein verrauschtes Bild mit vielen leeren oder fast leeren Klassen — die Wahl der Klassenbreite ist damit selbst schon eine Interpretationsentscheidung.",
          "Der Boxplot stellt fünf Kennzahlen gleichzeitig dar: Minimum, unteres Quartil, Median, oberes Quartil, Maximum (bzw. bei Ausreißerdarstellung: Whisker-Enden statt echtem Min/Max, mit Ausreißern als separate Punkte). Er macht auf einen Blick sichtbar, ob eine Verteilung schief ist: Liegt der Median näher am unteren Quartil und ist der obere Whisker deutlich länger als der untere, deutet das auf eine rechtsschiefe Verteilung hin (viele \"normale\" Werte, aber ein langer Ausläufer nach oben — typisch z. B. bei Einkommen oder Bearbeitungszeiten).",
          "Boxplots sind besonders stark beim VERGLEICH mehrerer Gruppen (z. B. Notenverteilung in verschiedenen Studiengängen nebeneinander), weil sie fünf Kennzahlen kompakt darstellen, ohne dass man wie beim Histogramm auf die richtige Klasseneinteilung achten müsste.",
        ],
        figure: {
          type: "histogram",
          caption: "Abb. 2.2 — Histogramm: Balkenhöhe entspricht der Häufigkeitsdichte je Klasse.",
        },
        examples: [
          "Ein Boxplot von Klausurnoten zeigt: Min=1,0, Q1=1,7, Median=2,3, Q3=3,0, Max=4,0. Der IQR beträgt 3,0−1,7=1,3. Da der Abstand Median−Q1 (0,6) kleiner ist als Q3−Median (0,7) und der obere Whisker (Q3 bis Max = 1,0) länger ist als der untere (Q1 bis Min = 0,7), liegt eine leicht rechtsschiefe Verteilung vor — mehr Studierende mit guten Noten, aber ein Ausläufer zu schlechteren Noten.",
        ],
      },
      {
        id: "2-6",
        heading: "2.6 Konzentration: Lorenzkurve & Gini-Koeffizient",
        body: [
          "Die Lorenzkurve stellt dar, welcher kumulierte Anteil einer Größe (z. B. Einkommen, Umsatz, Vermögen) auf den kumulierten Anteil der (der Größe nach sortierten!) Einheiten entfällt. Auf der x-Achse steht der Bevölkerungsanteil (von 0% bis 100%, aufsteigend sortiert nach der betrachteten Größe), auf der y-Achse der kumulierte Anteil der Größe selbst.",
          "Bei perfekter Gleichverteilung (jede Einheit hat genau denselben Anteil) liegt die Kurve exakt auf der Diagonalen — die \"ersten\" 20% der Einheiten besitzen dann auch genau 20% der Gesamtgröße. Je stärker die Lorenzkurve unterhalb der Diagonalen \"durchhängt\", desto ungleicher ist die Verteilung: Ein starkes Durchhängen bedeutet, dass ein großer Anteil der Einheiten nur einen winzigen Anteil der Gesamtgröße besitzt, während wenige Einheiten den Großteil halten.",
          "Der Gini-Koeffizient ist das Doppelte der Fläche zwischen Diagonale und Lorenzkurve (bezogen auf die Gesamtfläche unter der Diagonalen) und liegt zwischen 0 (perfekte Gleichverteilung, Kurve = Diagonale) und (nahe) 1 (maximale Konzentration, ein einziges Individuum besitzt praktisch alles). In der Praxis liegen reale Einkommens-Gini-Koeffizienten meist zwischen 0,25 und 0,60 — ein Wert von exakt 0 oder 1 kommt in echten Daten praktisch nie vor.",
          "Wichtig für die Klausur: Der Gini-Koeffizient allein sagt nichts über das ABSOLUTE Niveau aus (ob alle reich oder alle arm sind), sondern nur über die relative UNGLEICHHEIT der Verteilung. Zwei Länder mit sehr unterschiedlichem Durchschnittseinkommen können denselben Gini-Koeffizienten haben, wenn die relative Konzentration gleich ist.",
        ],
        figure: {
          type: "lorenz",
          caption: "Abb. 2.3 — Lorenzkurve: Fläche zwischen Diagonale und Kurve bestimmt den Gini-Koeffizienten.",
        },
        examples: [
          "5 Eisverkäufer mit Umsätzen 60,60,60,60,60 (alle gleich): Die Lorenzkurve liegt exakt auf der Diagonalen, Gini = 0 — perfekte Gleichverteilung.",
          "5 Eisverkäufer mit Umsätzen 0,0,0,0,300 (einer hat alles): Die Lorenzkurve verläuft fast komplett am unteren/rechten Rand entlang (die ersten 80% der Verkäufer haben 0% des Umsatzes), Gini nähert sich 1 — maximale Konzentration.",
        ],
      },
      {
        id: "2-7",
        heading: "2.7 Zusammenhangsmaße",
        body: [
          "Bisher ging es um EIN Merkmal — Zusammenhangsmaße untersuchen, wie ZWEI Merkmale gemeinsam variieren. Auch hier bestimmt das Skalenniveau, welches Maß zulässig ist.",
          "Für zwei nominale/ordinale Merkmale zeigt eine Kontingenztabelle (Kreuztabelle) die gemeinsame Häufigkeitsverteilung: In den Zeilen die Ausprägungen des einen Merkmals, in den Spalten die des anderen, in den Zellen die gemeinsame (absolute oder relative) Häufigkeit. Der (korrigierte) Kontingenzkoeffizient misst die Stärke des Zusammenhangs unabhängig von der Tabellengröße und liegt zwischen 0 (kein Zusammenhang) und (nahe) 1 (starker Zusammenhang).",
          "Für zwei metrische Merkmale misst die Kovarianz die gemeinsame Richtung der Abweichung vom jeweiligen Mittelwert: Ist Cov(x,y) positiv, tendieren überdurchschnittliche x-Werte dazu, mit überdurchschnittlichen y-Werten zusammenzufallen (z. B. mehr Lernzeit, bessere Note); ist sie negativ, gilt das Gegenteil. Das Problem der Kovarianz: Ihre Größe hängt von den Maßeinheiten von x und y ab und ist daher schwer zu interpretieren (\"ist Cov=150 viel oder wenig?\").",
          "Der Korrelationskoeffizient nach Bravais-Pearson normiert die Kovarianz auf den Bereich [−1, 1] und ist damit unabhängig von der Maßeinheit direkt interpretierbar: r=1 bedeutet perfekten positiven linearen Zusammenhang, r=−1 perfekten negativen linearen Zusammenhang, r=0 keinen LINEAREN Zusammenhang (es könnte aber trotzdem ein nicht-linearer Zusammenhang bestehen, z. B. eine perfekte U-Form — hier ist Vorsicht geboten, r misst NUR lineare Zusammenhänge!). Für ordinale bzw. nicht-lineare, aber monotone Zusammenhänge eignen sich die Rangkorrelationskoeffizienten nach Spearman und Kendall besser, da sie mit Rängen statt Rohwerten arbeiten.",
          "Zwei Merkmale heißen empirisch unabhängig, wenn die gemeinsame relative Häufigkeit stets dem Produkt der Randhäufigkeiten entspricht — dann liefert das eine Merkmal keinerlei Information über das andere. Wichtig: Cov(x,y)=0 folgt aus Unabhängigkeit, aber nicht umgekehrt — auch bei einem klaren (aber nicht-linearen) Zusammenhang kann die Kovarianz zufällig 0 sein.",
        ],
        formulas: [
          "Cov(x,y) = (1/n) · Σ (xi − x̄)(yi − ȳ)",
          "r = Cov(x,y) / (sx · sy)",
        ],
        formulasLatex: [
          "\\text{Cov}(x,y) = \\dfrac{1}{n}\\sum_{i=1}^{n}(x_i-\\bar{x})(y_i-\\bar{y})",
          "r = \\dfrac{\\text{Cov}(x,y)}{s_x\\, s_y}",
        ],
        examples: [
          "Lernzeit (h): 2,4,6,8; Klausurpunkte: 40,55,70,90. x̄=5, ȳ=63,75. Die Abweichungen laufen in beiden Reihen gleichzeitig von negativ zu positiv, Cov(x,y) wird deutlich positiv, r liegt nahe bei +1 — starker positiver linearer Zusammenhang zwischen Lernzeit und Punktzahl.",
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
      "Die Wahrscheinlichkeitsrechnung liefert das mathematische Fundament, um Unsicherheit zu quantifizieren — von Zufallsexperimenten über Kombinatorik bis zum Satz von Bayes. Sie ist die Brücke zwischen der beschreibenden Statistik (Kapitel 2, \"was ist in DIESEN Daten passiert\") und den Zufallsvariablen (Kapitel 4, \"was könnte theoretisch passieren\").",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Zufallsexperimente & Ereignisse",
        body: [
          "Ein Zufallsexperiment ist ein Vorgang, dessen Ergebnis nicht mit Sicherheit vorhersagbar ist, der aber unter denselben Bedingungen (gedanklich) beliebig oft wiederholbar wäre — z. B. ein Würfelwurf, eine Klausur, die Wartezeit an einer Bushaltestelle. Der Ergebnisraum Ω enthält ALLE möglichen, sich gegenseitig ausschließenden Ausgänge dieses Experiments (z. B. beim Würfeln Ω={1,2,3,4,5,6}).",
          "Ein Ereignis A ist eine Teilmenge von Ω — z. B. \"gerade Zahl gewürfelt\" = {2,4,6}. Ein Ereignis TRITT EIN, wenn das tatsächliche Ergebnis des Experiments in dieser Teilmenge liegt. Das sichere Ereignis ist Ω selbst (tritt immer ein), das unmögliche Ereignis ist die leere Menge ∅ (tritt nie ein).",
          "Mit den Mengenoperationen lassen sich zusammengesetzte Ereignisse beschreiben: die Vereinigung A∪B (\"A oder B oder beide treten ein\"), der Schnitt A∩B (\"A und B treten beide ein\") und das Komplement Ā = Ω\\A (\"A tritt NICHT ein\"). Zwei Ereignisse heißen disjunkt (unvereinbar), wenn A∩B=∅ gilt — sie können nicht gleichzeitig eintreten (z. B. \"Zahl ist gerade\" und \"Zahl ist ungerade\" beim Würfeln).",
          "Diese Mengensprache ist keine reine Formalität: Fast jeder Fehler bei Wahrscheinlichkeitsaufgaben lässt sich vermeiden, indem man sich zuerst sauber überlegt, WELCHE Menge genau gemeint ist (A, B, A∩B, Ā, ...), bevor man überhaupt anfängt zu rechnen.",
        ],
        examples: [
          "Zwei Würfel werden geworfen. A = \"Augensumme ist gerade\", B = \"mindestens eine 6 wurde gewürfelt\". A∩B = \"Augensumme gerade UND mindestens eine 6\" (z. B. (6,2), (6,4), (6,6) usw.). Ā = \"Augensumme ist ungerade\".",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Wahrscheinlichkeitsbegriffe",
        body: [
          "Es gibt drei unterschiedliche gedankliche Zugänge, was \"Wahrscheinlichkeit\" überhaupt bedeutet — in der Klausur wird gerne gefragt, welcher Begriff in einer konkreten Situation zutrifft.",
          "Der klassische (Laplace-)Wahrscheinlichkeitsbegriff setzt gleichwahrscheinliche Elementarereignisse voraus (z. B. ein fairer Würfel, eine faire Münze) und definiert P(A) = |A|/|Ω| — die Anzahl der für A günstigen Fälle geteilt durch die Anzahl aller möglichen Fälle. Er funktioniert nur, wenn diese Gleichwahrscheinlichkeit tatsächlich gegeben ist (z. B. NICHT bei einem gezinkten Würfel).",
          "Der statistische (frequentistische) Wahrscheinlichkeitsbegriff nähert P(A) durch die relative Häufigkeit von A bei sehr vielen unabhängigen Wiederholungen des Experiments an — er basiert auf dem empirischen Gesetz der großen Zahlen: Je öfter man ein Experiment wiederholt, desto näher liegt die relative Häufigkeit typischerweise an der \"wahren\" Wahrscheinlichkeit. Dieser Zugang funktioniert auch bei nicht gleichwahrscheinlichen Ausgängen (z. B. Ausschussanteil einer Maschine).",
          "Der axiomatische Zugang nach Kolmogorov ist der modernste und allgemeinste: Er definiert Wahrscheinlichkeit rein formal über drei Axiome, ohne festzulegen, WAS Wahrscheinlichkeit \"bedeutet\": (1) P(A) ≥ 0 für jedes Ereignis A, (2) P(Ω) = 1 (irgendein Ergebnis tritt sicher ein), (3) Additivität: für paarweise disjunkte Ereignisse A1, A2, ... gilt P(A1∪A2∪...) = P(A1)+P(A2)+.... Aus diesen drei Axiomen lassen sich alle weiteren Rechenregeln (Additionssatz, Komplementregel usw.) streng herleiten — sie sind das mathematische Fundament, auf dem der Rest des Kapitels aufbaut.",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Kombinatorik",
        body: [
          "Kombinatorik zählt, WIE VIELE Möglichkeiten es für eine bestimmte Auswahl/Anordnung gibt — das ist oft der Schlüssel, um den klassischen Wahrscheinlichkeitsbegriff (|A|/|Ω|) überhaupt anwenden zu können. Die zentrale Frage, die man sich IMMER zuerst stellen sollte: Kommt es auf die REIHENFOLGE an, und ist Wiederholung (dasselbe Element mehrfach) erlaubt?",
          "Permutationen zählen die Anordnungen von n unterscheidbaren Objekten in einer Reihe: n! (n Fakultät = n·(n−1)·...·1) Möglichkeiten — z. B. wie viele Reihenfolgen 5 Personen in einer Schlange stehen können (5! = 120).",
          "Variationen zählen geordnete Auswahlen von k aus n Objekten (Reihenfolge zählt): mit Wiederholung gibt es nᵏ Möglichkeiten (jedes der k \"Plätze\" kann unabhängig eines von n Objekten sein, z. B. ein 4-stelliger PIN-Code aus Ziffern 0-9: 10⁴), ohne Wiederholung n!/(n−k)! Möglichkeiten (jedes Objekt darf nur einmal gewählt werden, z. B. Gold/Silber/Bronze aus 8 Läufern vergeben).",
          "Kombinationen zählen UNGEORDNETE Auswahlen von k aus n Objekten (Reihenfolge zählt NICHT): ohne Wiederholung über den Binomialkoeffizienten C(n,k) = n!/(k!·(n−k)!) — z. B. wie viele verschiedene 6er-Lottoscheine aus 49 Zahlen möglich sind. Mit Wiederholung (seltener klausurrelevant) über eine erweiterte Formel C(n+k−1,k).",
          "Merkregel für die Klausur: Wird explizit nach \"wie vielen verschiedenen ANORDNUNGEN/REIHENFOLGEN\" gefragt, ist es eine Variation oder Permutation. Wird nach \"wie vielen verschiedenen AUSWAHLEN/GRUPPEN/TEAMS\" gefragt (bei denen die Reihenfolge innerhalb der Gruppe egal ist), ist es eine Kombination.",
        ],
        formulas: [
          "Variation ohne Wiederholung: n! / (n−k)!",
          "Kombination ohne Wiederholung: C(n,k) = n! / (k!·(n−k)!)",
        ],
        formulasLatex: [
          "\\dfrac{n!}{(n-k)!}",
          "C(n,k) = \\dfrac{n!}{k!\\,(n-k)!}",
        ],
        examples: [
          "Beim Skat werden 10 aus 32 Karten gezogen — die Anzahl möglicher Kartenkombinationen (ohne Reihenfolge, ohne Wiederholung) ist C(32,10) ≈ 64,5 Millionen — eine astronomisch große Zahl, die auch bei 200 Spielen täglich ein Leben lang nicht ausgeschöpft werden kann.",
          "Jonas wählt 2 Sport-Einheiten aus 3 Sportarten (Fußball, Schwimmen, Tennis), Reihenfolge egal, keine Wiederholung: C(3,2) = 3!/(2!·1!) = 3 Möglichkeiten (FS, FT, ST). Würde stattdessen die Reihenfolge zählen UND Wiederholung erlaubt sein (z. B. an zwei Tagen unabhängig eine Sportart wählen), gäbe es 3² = 9 Möglichkeiten.",
        ],
      },
      {
        id: "3-4",
        heading: "3.4 Additionssatz & bedingte Wahrscheinlichkeit",
        body: [
          "Der Additionssatz berechnet die Wahrscheinlichkeit einer Vereinigung zweier Ereignisse. Naiv würde man P(A)+P(B) rechnen, aber dabei wird die Schnittmenge A∩B DOPPELT gezählt (sie gehört sowohl zu A als auch zu B) — deshalb muss sie einmal wieder abgezogen werden. Sind A und B disjunkt (A∩B=∅), vereinfacht sich der Additionssatz zu P(A∪B) = P(A)+P(B), da dann nichts abgezogen werden muss.",
          "Die bedingte Wahrscheinlichkeit P(A|B) gibt an, wie wahrscheinlich A ist, WENN MAN BEREITS WEISS, dass B eingetreten ist — man \"zoomt\" quasi den Ergebnisraum auf B ein und fragt, welcher Anteil davon auch noch in A liegt. Anschaulich: P(A|B) = P(A∩B)/P(B) ist der Anteil von A∩B INNERHALB von B (nicht innerhalb von ganz Ω).",
          "Zwei Ereignisse A und B heißen (stochastisch) unabhängig, wenn P(A∩B) = P(A)·P(B) gilt — äquivalent dazu, dass P(A|B) = P(A), also dass das Wissen um B die Wahrscheinlichkeit von A GAR NICHT verändert. Unabhängigkeit ist NICHT dasselbe wie Disjunktheit — im Gegenteil: zwei Ereignisse mit positiver Wahrscheinlichkeit, die disjunkt sind, können NIE unabhängig sein (wenn B eintritt, weiß man ja sofort, dass A nicht eingetreten ist — das ist maximale Abhängigkeit, nicht Unabhängigkeit)! Dieser Punkt wird in Klausuren gerne als Fangfrage abgeprüft.",
          "Aus der Definition der bedingten Wahrscheinlichkeit folgt direkt der Multiplikationssatz P(A∩B) = P(A|B)·P(B) — er wird gebraucht, wenn man bedingte Wahrscheinlichkeiten kennt (z. B. aus einem Wahrscheinlichkeitsbaum), aber die gemeinsame Wahrscheinlichkeit P(A∩B) sucht.",
        ],
        formulas: [
          "P(A∪B) = P(A) + P(B) − P(A∩B)",
          "P(A|B) = P(A∩B) / P(B), sofern P(B) > 0",
          "Multiplikationssatz: P(A∩B) = P(A|B)·P(B)",
        ],
        formulasLatex: [
          "P(A\\cup B) = P(A) + P(B) - P(A\\cap B)",
          "P(A \\mid B) = \\dfrac{P(A\\cap B)}{P(B)}, \\quad P(B) > 0",
          "P(A\\cap B) = P(A\\mid B)\\, P(B)",
        ],
        figure: {
          type: "venn",
          caption: "Abb. 3.1 — Venn-Diagramm: die Schnittmenge A∩B wird beim Additionssatz nur einmal gezählt.",
        },
        examples: [
          "Aus 32 Skatkarten wird eine gezogen. P(Ass) = 4/32, P(Pik) = 8/32, P(Ass∩Pik) = 1/32 (das Pik-Ass). P(Ass∪Pik) = 4/32 + 8/32 − 1/32 = 11/32 ≈ 0,344 — ohne den Abzug der Schnittmenge käme man fälschlich auf 12/32.",
          "In einer Kohorte sind 40% Frauen (F), und 25% aller Studierenden haben ein Auslandssemester (A) gemacht; davon sind 60% Frauen. Gesucht: P(A|F). Zunächst P(A∩F) = P(F|A)·P(A) = 0,6·0,25 = 0,15. Dann P(A|F) = P(A∩F)/P(F) = 0,15/0,4 = 0,375 — unter den Frauen haben 37,5% ein Auslandssemester gemacht, ein höherer Anteil als im Gesamtdurchschnitt (25%).",
        ],
      },
      {
        id: "3-5",
        heading: "3.5 Totale Wahrscheinlichkeit & Satz von Bayes",
        body: [
          "Bilden B1, ..., Bk eine vollständige Zerlegung von Ω (sie sind paarweise disjunkt und decken zusammen ganz Ω ab — jedes Elementarereignis liegt in GENAU einem Bi), lässt sich P(A) über den Satz der totalen Wahrscheinlichkeit aus den bedingten Wahrscheinlichkeiten P(A|Bi) berechnen: Man \"zerlegt\" A entlang der Bi, berechnet für jeden Teil die Wahrscheinlichkeit über den Multiplikationssatz und summiert auf. Ein Wahrscheinlichkeitsbaum ist dafür die ideale Visualisierung: Die Bi sind die erste Verzweigungsebene, A|Bi die zweite.",
          "Der Satz von Bayes kehrt die Bedingungsrichtung um: Man kennt P(A|Bi) (z. B. \"Wahrscheinlichkeit eines positiven Tests, GEGEBEN krank\"), sucht aber P(Bi|A) (z. B. \"Wahrscheinlichkeit krank zu sein, GEGEBEN positiv getestet\") — diese beiden sind i. A. NICHT gleich, ein extrem häufiger Denkfehler außerhalb (und leider auch innerhalb) der Statistik-Vorlesung!",
          "Klassisches Anwendungsbeispiel: medizinische Tests. Selbst ein Test mit hoher Sensitivität (erkennt Kranke zuverlässig) und hoher Spezifität (erkennt Gesunde zuverlässig) kann bei SELTENEN Krankheiten (niedrige Grundrate/Prävalenz) dazu führen, dass P(krank | positiv getestet) überraschend NIEDRIG ausfällt — weil es viel mehr Gesunde gibt, erzeugen selbst wenige Prozent falsch-positive Tests bei den Gesunden in absoluten Zahlen mehr falsch-positive Fälle als es echte Kranke gibt. Diese Intuition — dass ein \"guter\" Test trotzdem einen überraschend unzuverlässigen positiven Befund liefern kann — ist einer der wichtigsten \"Aha-Momente\" der gesamten Wahrscheinlichkeitsrechnung.",
          "Das Monty-Hall-Problem (Ziegenproblem) ist ein weiteres klassisches, bewusst unintuitives Beispiel: Bei drei Toren, hinter einem der Hauptgewinn, wählt man zunächst eines. Der Moderator (der weiß, wo der Gewinn ist) öffnet danach IMMER ein anderes Tor mit einer Niete. Wechselt man daraufhin zum verbleibenden dritten Tor, verdoppelt sich die Gewinnwahrscheinlichkeit von 1/3 (bei der ursprünglichen Wahl) auf 2/3 — weil das Öffnen des Nieten-Tors durch den Moderator NEUE Information liefert, die sich fast ausschließlich auf das nicht gewählte, noch geschlossene Tor konzentriert.",
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
          caption: "Abb. 3.2 — Wahrscheinlichkeitsbaum: jeder Pfad multipliziert die Wahrscheinlichkeiten entlang der Äste.",
        },
        examples: [
          "Ein Test hat Sensitivität 95%, Spezifität 97%, Krankheitsanteil (Prävalenz) 2%. Totale Wahrscheinlichkeit eines positiven Tests: P(pos) = P(pos|krank)·P(krank) + P(pos|gesund)·P(gesund) = 0,95·0,02 + 0,03·0,98 = 0,019 + 0,0294 = 0,0484. Satz von Bayes: P(krank|pos) = 0,019/0,0484 ≈ 0,39 — trotz eines auf den ersten Blick sehr guten Tests ist im positiven Fall nur zu ca. 39% tatsächlich eine Erkrankung vorhanden, weil die Krankheit selten ist.",
          "Carla nimmt mit 20% Wahrscheinlichkeit die Straßenbahn (dann in 60% der Fälle >30min unterwegs) und sonst (80%) das Fahrrad (dann in 30% der Fälle >30min, da 70% <30min sind). Sie war heute >30min unterwegs. P(>30min) = 0,6·0,2 + 0,3·0,8 = 0,12+0,24 = 0,36. P(Tram|>30min) = 0,12/0,36 = 1/3 ≈ 0,33 — obwohl die Tram-Fahrt öfter lange dauert, ist es trotzdem wahrscheinlicher (2/3), dass sie mit dem Rad fuhr, weil sie das Rad viel häufiger nimmt.",
        ],
      },
    ],
  },
  {
    id: "zufallsvariablen",
    number: 4,
    title: "Zufallsvariablen",
    free: false,
    intro:
      "Zufallsvariablen übersetzen Zufallsexperimente in Zahlen und erlauben es, Erwartungswert, Streuung und Zusammenhang formal zu berechnen — sie sind das Bindeglied zwischen der abstrakten Wahrscheinlichkeitsrechnung aus Kapitel 3 und den konkreten Verteilungsmodellen aus Kapitel 5.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Diskrete & stetige Zufallsvariablen",
        body: [
          "Eine Zufallsvariable X ordnet jedem Ergebnis eines Zufallsexperiments eine reelle Zahl zu — sie macht damit aus einem abstrakten Ergebnisraum Ω etwas, mit dem man rechnen kann (z. B. \"Augensumme zweier Würfel\" statt \"das konkrete Zahlenpaar, das gewürfelt wurde\"). Formal ist X eine Funktion X: Ω → ℝ.",
          "X heißt diskret, wenn sie höchstens abzählbar viele Werte annehmen kann. Sie wird durch eine Wahrscheinlichkeitsfunktion f(x) = P(X = x) beschrieben, die für jeden möglichen Wert x angibt, mit welcher Wahrscheinlichkeit GENAU dieser Wert eintritt. Für eine gültige Wahrscheinlichkeitsfunktion muss gelten: f(x) ≥ 0 für alle x, und die Summe über alle f(x) muss genau 1 ergeben.",
          "X heißt stetig, wenn sie jeden Wert in einem Intervall (theoretisch) annehmen kann. Sie wird durch eine Dichtefunktion f(x) beschrieben — WICHTIG: bei stetigen Zufallsvariablen ist P(X = x) für jeden EINZELNEN Wert x immer exakt 0 (ein Punkt hat keine Fläche)! Sinnvoll interpretierbar sind nur Wahrscheinlichkeiten für INTERVALLE, berechnet als Fläche unter der Dichtefunktion über diesem Intervall (also ein Integral). Deshalb gilt bei stetigen Zufallsvariablen auch P(X≤x) = P(X<x) — das \"=\" beim Rand spielt keine Rolle, weil ein einzelner Punkt ohnehin Wahrscheinlichkeit 0 hat (bei diskreten Zufallsvariablen ist das ein wichtiger Unterschied!).",
          "Die Verteilungsfunktion F(x) = P(X ≤ x) existiert für BEIDE Typen und ist immer monoton wachsend von 0 (weit links) nach 1 (weit rechts) — bei diskreten Zufallsvariablen als Treppenfunktion mit Sprüngen genau an den möglichen Werten (Sprunghöhe = f(x) an dieser Stelle), bei stetigen Zufallsvariablen als glatte, stetige Kurve (die Ableitung von F ist genau die Dichte f).",
        ],
        figure: {
          type: "distribution-function",
          caption: "Abb. 4.1 — Verteilungsfunktion einer diskreten Zufallsvariable: Sprünge an jeder möglichen Ausprägung.",
        },
        examples: [
          "X = Augensumme zweier fairer Würfel ist diskret mit möglichen Werten 2 bis 12. f(7) = 6/36 (die häufigste Summe), F(7) = P(X≤7) = f(2)+f(3)+...+f(7) = (1+2+3+4+5+6)/36 = 21/36 ≈ 0,583.",
          "X = Wartezeit an einer Bushaltestelle in Minuten ist stetig. P(X=5,0000...) ist exakt 0, aber P(4 ≤ X ≤ 6) kann durchaus z. B. 0,3 sein — nur Intervalle haben eine sinnvolle, von 0 verschiedene Wahrscheinlichkeit.",
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Erwartungswert & Varianz",
        body: [
          "Der Erwartungswert E(X) ist das mit den Wahrscheinlichkeiten gewichtete Mittel aller möglichen Werte — das theoretische Gegenstück zum arithmetischen Mittel aus Kapitel 2, nur dass jetzt statt \"beobachteter relativer Häufigkeit\" die (theoretische) Wahrscheinlichkeit als Gewicht dient. Anschaulich: Würde man das Zufallsexperiment unendlich oft wiederholen und jedes Mal den Wert von X notieren, würde der Durchschnitt gegen E(X) konvergieren (Gesetz der großen Zahlen).",
          "Bei diskreten Zufallsvariablen wird summiert (E(X) = Σ x·f(x)), bei stetigen integriert (E(X) = ∫ x·f(x) dx) — der Übergang von Summe zu Integral ist ein durchgehendes Muster in diesem Kapitel: Fast jede Formel für diskrete Zufallsvariablen hat ein direktes stetiges Gegenstück, bei dem Σ durch ∫ ersetzt wird.",
          "Die Varianz Var(X) misst die erwartete quadrierte Abweichung vom Erwartungswert — auch hier dieselbe Idee wie bei der empirischen Varianz in Kapitel 2, nur \"theoretisch\" statt \"aus Daten berechnet\". Die Verschiebungsformel Var(X) = E(X²) − (E(X))² ist in der Praxis fast immer der einfachere Rechenweg als die direkte Definition über E((X−E(X))²), weil man dafür nur zwei Erwartungswerte statt einer komplizierten Summe braucht.",
          "Für lineare Transformationen Y = aX + b (z. B. Umrechnung von Grad Celsius in Fahrenheit, oder eine Steuer/ein Rabatt auf eine Zufallsvariable) gelten einfache Rechenregeln: Der Erwartungswert transformiert sich GENAUSO wie X selbst (E(aX+b) = a·E(X)+b — die additive Konstante b verschiebt den Erwartungswert einfach mit), die Varianz reagiert dagegen NUR auf den multiplikativen Faktor a, und zwar quadriert (Var(aX+b) = a²·Var(X) — eine Verschiebung um b ändert an der STREUUNG nichts, nur die Skalierung a tut das).",
          "Die Tschebyscheff-Ungleichung liefert eine verteilungsunabhängige (!) obere Schranke dafür, wie wahrscheinlich große Abweichungen vom Erwartungswert sind — sie funktioniert für JEDE Zufallsvariable mit endlicher Varianz, egal welche Verteilung sie hat, ist dafür aber meist eine sehr grobe (konservative) Abschätzung. Sie wird typischerweise dann gebraucht, wenn man NUR Erwartungswert und Varianz kennt, aber nicht die genaue Verteilung.",
        ],
        formulas: [
          "Diskret: E(X) = Σ x·f(x)   |   Stetig: E(X) = ∫ x·f(x) dx",
          "Var(X) = E(X²) − (E(X))²",
          "E(aX+b) = a·E(X) + b,   Var(aX+b) = a²·Var(X)",
          "Tschebyscheff: P(|X − E(X)| ≥ k) ≤ Var(X)/k²",
        ],
        formulasLatex: [
          "E(X) = \\sum_x x\\,f(x) \\quad \\text{(diskret)} \\qquad E(X) = \\int x\\, f(x)\\, dx \\quad \\text{(stetig)}",
          "\\text{Var}(X) = E(X^2) - \\big(E(X)\\big)^2",
          "E(aX+b) = a\\,E(X) + b \\qquad \\text{Var}(aX+b) = a^2\\,\\text{Var}(X)",
          "P\\big(|X-E(X)| \\ge k\\big) \\le \\dfrac{\\text{Var}(X)}{k^2}",
        ],
        examples: [
          "Diskrete ZV mit Trägermenge {0,4,6}, f(0)=0,5, f(4)=f(6)=0,25. E(X) = 0·0,5+4·0,25+6·0,25 = 1+1,5 = 2,5. E(X²) = 0·0,5+16·0,25+36·0,25 = 13. Var(X) = 13 − 2,5² = 13−6,25 = 6,75.",
          "Von X sind E(X)=4 und E(X²)=25 bekannt: Var(X) = 25−16 = 9, Standardabweichung σ = 3. Tschebyscheff für k=4: P(|X−4|≥4) ≤ 9/16 = 0,5625 — die Wahrscheinlichkeit, dass X um mindestens 4 vom Erwartungswert abweicht, ist höchstens 56,25% (eine Obergrenze, nicht der exakte Wert!).",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Schiefe & Kurtosis",
        body: [
          "Erwartungswert und Varianz beschreiben Lage und Streuung — sie sagen aber nichts über die FORM der Verteilung aus. Zwei zusätzliche Kennzahlen füllen diese Lücke.",
          "Die Schiefe beschreibt die Asymmetrie einer Verteilung um ihren Erwartungswert. Bei einer rechtsschiefen (positiv schiefen) Verteilung gibt es einen langen rechten Ausläufer, und es gilt typischerweise Mittelwert > Median > Modus (z. B. Einkommensverteilungen). Bei einer linksschiefen Verteilung ist es umgekehrt: langer linker Ausläufer, Mittelwert < Median < Modus. Bei einer symmetrischen Verteilung (z. B. der Normalverteilung) fallen alle drei Lagemaße zusammen und die Schiefe ist 0.",
          "Die Kurtosis (Wölbung) beschreibt, wie \"spitz\" bzw. wie \"flach\" eine Verteilung im Vergleich zur Normalverteilung ist — eine hohe Kurtosis (leptokurtisch) bedeutet eine schmale Spitze mit dickeren Rändern (mehr Extremwerte als bei der Normalverteilung erwartet), eine niedrige Kurtosis (platykurtisch) eine flachere, breitere Verteilung. Diese beiden Kennzahlen werden in der Statistik I meist nur konzeptionell abgefragt (erkennen/interpretieren), seltener explizit berechnet.",
        ],
      },
      {
        id: "4-4",
        heading: "4.4 Bivariate Zufallsvariablen",
        body: [
          "Bei zwei Zufallsvariablen X und Y beschreibt die gemeinsame Verteilung, wie wahrscheinlich bestimmte KOMBINATIONEN von Werten sind — genau wie die Kontingenztabelle in Kapitel 2 das empirische Gegenstück für beobachtete Daten war, ist die gemeinsame Verteilung hier das theoretische Modell dafür.",
          "Kovarianz und Korrelation von Zufallsvariablen werden vollkommen analog zur deskriptiven Statistik definiert (Kapitel 2.7), beziehen sich aber auf Erwartungswerte statt auf Stichprobenmittel — Cov(X,Y) = E(XY) − E(X)·E(Y) ist die theoretische Version der empirischen Kovarianzformel, mit demselben inhaltlichen Vorzeichen-Argument: positive Kovarianz bedeutet, X und Y tendieren dazu, GEMEINSAM über bzw. GEMEINSAM unter ihren jeweiligen Erwartungswerten zu liegen.",
          "X und Y heißen unabhängig, wenn die gemeinsame Verteilung in das PRODUKT der Randverteilungen zerfällt (f(x,y) = fX(x)·fY(y) für alle x,y) — daraus folgt insbesondere Cov(X,Y) = 0 (die Umkehrung gilt im Allgemeinen NICHT: Cov(X,Y)=0 bedeutet nur \"kein LINEARER Zusammenhang\", nicht zwingend Unabhängigkeit; ein klassisches Gegenbeispiel ist Y=X² bei symmetrisch um 0 verteiltem X — dort besteht ein perfekter, aber nicht-linearer Zusammenhang, und trotzdem ist Cov(X,Y)=0).",
          "Für die Summe unabhängiger Zufallsvariablen addieren sich die Varianzen: Var(X+Y) = Var(X)+Var(Y), FALLS X und Y unabhängig sind (allgemein gilt Var(X+Y) = Var(X)+Var(Y)+2·Cov(X,Y) — dieser Zusammenhang wird später bei Stichprobenmitteln in Statistik II wichtig).",
        ],
        formulas: [
          "Cov(X,Y) = E(XY) − E(X)·E(Y)",
          "Corr(X,Y) = Cov(X,Y) / (σX·σY)",
        ],
        formulasLatex: [
          "\\text{Cov}(X,Y) = E(XY) - E(X)E(Y)",
          "\\text{Corr}(X,Y) = \\dfrac{\\text{Cov}(X,Y)}{\\sigma_X\\,\\sigma_Y}",
        ],
        examples: [
          "X, Y unabhängige Bernoulli-Variablen mit P(X=1)=0,3, P(Y=1)=0,2. S=X+Y. P(S=2)=P(X=1)·P(Y=1)=0,3·0,2=0,06 (Unabhängigkeit erlaubt die einfache Multiplikation). P(S=1) = P(X=1,Y=0)+P(X=0,Y=1) = 0,3·0,8+0,7·0,2 = 0,24+0,14 = 0,38.",
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
      "Verteilungsmodelle sind Standard-Bausteine, mit denen sich viele reale Zufallsphänomene modellieren lassen — von der Münzwurf-Serie bis zur Körpergröße. Statt jede Situation von Grund auf neu zu analysieren, erkennt man ein wiederkehrendes \"Muster\" (z. B. \"n unabhängige Ja/Nein-Versuche\") und kann direkt die passenden, bereits bekannten Formeln für Erwartungswert, Varianz und Wahrscheinlichkeiten anwenden.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Diskrete Verteilungen",
        body: [
          "Die diskrete Gleichverteilung modelliert Situationen mit endlich vielen, gleichwahrscheinlichen Ausprägungen (z. B. ein fairer Würfel: jede Zahl 1–6 mit Wahrscheinlichkeit 1/6) — sie ist der direkte Anwendungsfall des klassischen (Laplace-)Wahrscheinlichkeitsbegriffs aus Kapitel 3.2.",
          "Die Bernoulli-Verteilung beschreibt EIN einzelnes Experiment mit genau zwei möglichen Ausgängen (Erfolg=1/Misserfolg=0) und Erfolgswahrscheinlichkeit p — der einfachste, aber fundamentalste Baustein dieses Kapitels, da praktisch alle anderen diskreten Verteilungen hier aus Wiederholungen oder Kombinationen von Bernoulli-Experimenten entstehen.",
          "Die Binomialverteilung B(n,p) zählt die Anzahl der Erfolge bei n UNABHÄNGIGEN Bernoulli-Versuchen mit JEWEILS GLEICHER Erfolgswahrscheinlichkeit p — z. B. die Anzahl \"Kopf\" bei n Münzwürfen, oder die Anzahl defekter Teile bei n Produkten, wenn jedes unabhängig mit derselben Wahrscheinlichkeit defekt ist. Für n=8, p=0,5 ergibt sich die typische, um n·p symmetrische Glockenform aus der Abbildung; für p≠0,5 ist die Verteilung entsprechend schief. WICHTIG: Die Voraussetzungen \"unabhängig\" und \"gleiches p\" müssen wirklich erfüllt sein — sonst ist B(n,p) das FALSCHE Modell (siehe hypergeometrische Verteilung als Gegenbeispiel).",
          "Die hypergeometrische Verteilung modelliert das Ziehen OHNE Zurücklegen aus einer ENDLICHEN Grundgesamtheit mit zwei Gruppen (z. B. Anzahl defekter Teile in einer Stichprobe von 5 Teilen, gezogen aus einer Lieferung von 50 Teilen, ohne Zurücklegen) — hier ändert sich die Erfolgswahrscheinlichkeit von Ziehung zu Ziehung (die Ziehungen sind NICHT unabhängig!), weshalb die Binomialverteilung hier streng genommen NICHT zutrifft. Ist die Grundgesamtheit allerdings sehr groß im Vergleich zur Stichprobe, ändert sich die Wahrscheinlichkeit durch das Nicht-Zurücklegen nur minimal, und die Binomialverteilung ist eine gute Näherung.",
          "Die Poisson-Verteilung modelliert die Anzahl seltener Ereignisse in einem festen Zeit- oder Raumintervall (z. B. Anzahl Kundenanrufe pro Stunde, Anzahl Tippfehler pro Seite) und ergibt sich als Grenzwert der Binomialverteilung für große n und kleine p bei konstant gehaltenem λ = n·p — praktisch nützlich, wenn n selbst nicht genau bekannt oder sehr groß ist (z. B. \"wie viele der Millionen Kunden rufen heute an\" — n ist riesig und p winzig, aber λ = erwartete Anzahl Anrufe ist gut schätzbar).",
        ],
        formulas: [
          "Bernoulli: E(X) = p, Var(X) = p(1−p)",
          "Binomial B(n,p): P(X=k) = C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ, E(X) = np, Var(X) = np(1−p)",
          "Poisson: P(X=k) = e^(−λ)·λᵏ / k!, E(X) = Var(X) = λ",
        ],
        formulasLatex: [
          "E(X) = p \\qquad \\text{Var}(X) = p(1-p)",
          "P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad E(X) = np, \\quad \\text{Var}(X) = np(1-p)",
          "P(X=k) = \\dfrac{e^{-\\lambda}\\lambda^k}{k!}, \\quad E(X) = \\text{Var}(X) = \\lambda",
        ],
        figure: {
          type: "binomial-bars",
          caption: "Abb. 5.1 — Binomialverteilung B(n,p): diskrete, glockenförmige Häufigkeitsverteilung.",
        },
        examples: [
          "X ~ Binomial(n=10, p=0,3) (z. B. 10 unabhängige Kundenanfragen, je 30% Abschlusswahrscheinlichkeit). E(X) = np = 10·0,3 = 3 erwartete Abschlüsse. Var(X) = np(1−p) = 10·0,3·0,7 = 2,1.",
          "3 unabhängige Server benötigen mit Wahrscheinlichkeit p=0,1 / 0,2 / 0,15 Aufmerksamkeit (jeweils Bernoulli, unterschiedliches p, aber unabhängig). P(keiner braucht Aufmerksamkeit) = 0,9·0,8·0,85 = 0,612 — hier reicht die einfache Multiplikation der Gegenwahrscheinlichkeiten wegen Unabhängigkeit, eine Binomialverteilung wäre nicht direkt anwendbar, da die drei p-Werte unterschiedlich sind.",
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Stetige Verteilungen",
        body: [
          "Die stetige Gleichverteilung auf [a,b] modelliert Situationen ohne bevorzugten Bereich innerhalb eines Intervalls — jeder gleich lange Teilabschnitt von [a,b] hat dieselbe Wahrscheinlichkeit, egal wo er liegt (z. B. der genaue Ankunftszeitpunkt eines Zugs innerhalb eines 10-Minuten-Fensters, wenn keine Information über einen bevorzugten Zeitpunkt vorliegt).",
          "Die Exponentialverteilung modelliert Wartezeiten zwischen zufälligen Ereignissen (z. B. Zeit bis zum nächsten Anruf, Zeit bis zum Ausfall eines Bauteils) und ist eng mit der Poisson-Verteilung verwandt: Während Poisson zählt, WIE VIELE Ereignisse in einem festen Zeitraum passieren, beschreibt die Exponentialverteilung, WIE LANGE man bis zum NÄCHSTEN Ereignis warten muss — zwei Seiten derselben Medaille (desselben zugrundeliegenden \"Poisson-Prozesses\").",
          "Die Normalverteilung N(μ,σ²) ist die zentrale, wichtigste Verteilung der gesamten Statistik: glockenförmig, symmetrisch um den Erwartungswert μ, mit Streuung σ². Die Standardnormalverteilung ist der Spezialfall μ=0, σ²=1 (üblicherweise mit Φ(z) und Tabellenwerten notiert); JEDE Normalverteilung lässt sich durch Standardisierung (Z = (X−μ)/σ) auf diesen Spezialfall zurückführen — genau deshalb reicht EINE Tabelle für die Standardnormalverteilung aus, um Wahrscheinlichkeiten für JEDE beliebige Normalverteilung zu berechnen. Die Standardisierung ist eine der am häufigsten gebrauchten Rechentechniken in der gesamten Vorlesung — sie unbedingt sicher beherrschen!",
          "Der Zentrale Grenzwertsatz erklärt, WARUM die Normalverteilung in der Praxis so allgegenwärtig auftritt, obwohl viele reale Größen selbst gar nicht normalverteilt sind: Die Summe (bzw. der Mittelwert) VIELER unabhängiger Zufallsvariablen ist NÄHERUNGSWEISE normalverteilt — und zwar UNABHÄNGIG davon, welcher Verteilung die einzelnen Summanden selbst folgen (solange sie endliche Varianz haben). Das ist der theoretische Grund, warum in Statistik II Stichprobenmittelwerte fast immer mit der Normalverteilung approximiert werden dürfen, selbst wenn die Ursprungsdaten es nicht sind.",
          "Chi-Quadrat-, t- und F-Verteilung entstehen aus bestimmten Transformationen (Quadratsummen, Quotienten) normalverteilter Zufallsvariablen und werden vor allem in der schließenden Statistik (Statistik II) für Hypothesentests und Konfidenzintervalle benötigt — hier in Statistik I reicht es meist, sie dem Namen nach zu kennen und zu wissen, dass sie \"aus der Normalverteilung abgeleitet\" sind.",
        ],
        formulas: [
          "Standardisierung: Z = (X − μ) / σ",
          "Normalverteilung Dichte: f(x) = 1/(σ√(2π)) · e^(−(x−μ)²/(2σ²))",
        ],
        formulasLatex: [
          "Z = \\dfrac{X-\\mu}{\\sigma}",
          "f(x) = \\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\, e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}",
        ],
        figure: {
          type: "normal-curve",
          caption: "Abb. 5.2 — Normalverteilung: symmetrische Glockenkurve um den Erwartungswert μ.",
        },
        examples: [
          "X ~ N(μ=100, σ=15) (z. B. IQ-Werte). Gesucht: P(X ≤ 115). Standardisierung: Z = (115−100)/15 = 1. In der Standardnormalverteilungstabelle: Φ(1) ≈ 0,8413 — mit ca. 84,1% Wahrscheinlichkeit liegt X bei höchstens 115.",
          "Eine stetige Zufallsvariable mit Dichte f(x)=3x² auf [0,1] (keine Normalverteilung, aber zur Übung des Integral-Prinzips): E(X) = ∫₀¹ x·3x² dx = ∫₀¹ 3x³ dx = 3/4 = 0,75. E(X²) = ∫₀¹ 3x⁴ dx = 3/5 = 0,6. Var(X) = 0,6 − 0,75² = 0,6−0,5625 = 0,0375.",
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Approximationen zwischen Verteilungen",
        body: [
          "Manche Verteilungen sind rechnerisch aufwendig (z. B. der Binomialkoeffizient C(n,k) bei sehr großem n), lassen sich aber unter bestimmten Bedingungen gut durch eine andere, einfacher zu handhabende Verteilung ANNÄHERN. Diese Approximationen sind sowohl historisch (vor Taschenrechnern/Software) als auch konzeptionell wichtig, weil sie zeigen, wie die verschiedenen Verteilungsmodelle miteinander zusammenhängen.",
          "Für großes n lässt sich die Binomialverteilung durch die Normalverteilung approximieren (Normalapproximation, mit Erwartungswert np und Varianz np(1−p) als Parameter der approximierenden Normalverteilung) — eine gängige Faustregel dafür, dass die Approximation gut genug ist, lautet np(1−p) ≥ 9. Dies vereinfacht Berechnungen bei großem n erheblich, da man dann die Standardnormalverteilungstabelle statt vieler einzelner Binomialkoeffizienten verwenden kann.",
          "Für große n und kleine p approximiert die Poisson-Verteilung (mit Parameter λ=np) die Binomialverteilung — praktisch besonders dann nützlich, wenn n selbst nicht genau bekannt oder unpraktisch groß ist, aber der Erwartungswert λ = n·p gut geschätzt werden kann (z. B. \"im Schnitt 3 Tippfehler pro Seite\", ohne dass man weiß, wie viele Buchstaben n auf der Seite stehen und wie klein die Fehlerwahrscheinlichkeit p pro Buchstabe ist).",
          "Merkregel: Normalapproximation für \"großes n, p nicht extrem\" (Binomialverteilung dann selbst schon fast symmetrisch/glockenförmig), Poisson-Approximation für \"großes n, aber sehr kleines p\" (seltene Ereignisse) — welche der beiden Approximationen zulässig bzw. sinnvoll ist, hängt also stark davon ab, WIE klein p im konkreten Fall ist.",
        ],
      },
    ],
  },
];
