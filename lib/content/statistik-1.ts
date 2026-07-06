import type { SkriptChapter } from "./types";

export const chapters: SkriptChapter[] = [
  {
    id: "deskriptive-statistik",
    number: 2,
    title: "Deskriptive Statistik",
    free: true,
    intro:
      "Deskriptive Statistik fasst erhobene Daten übersichtlich zusammen: mit Kennzahlen (Lage, Streuung, Zusammenhang) und mit Grafiken (Histogramm, Boxplot, Lorenzkurve). Wir gehen die Bausteine hier Schritt für Schritt durch, jeweils mit den wichtigsten Begriffen zuerst.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Grundgesamtheit und Stichprobe",
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
        heading: "2.2 Skalenniveaus",
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
        heading: "2.3 Weitere Unterscheidungen",
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
        heading: "2.4 Häufigkeiten",
        body: [
          "Für ein Merkmal mit Ausprägungen a1 bis ak zählt man zunächst, wie oft jede Ausprägung vorkommt.",
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
        ],
        examples: [
          "30 von 50 Studierenden bestehen eine Klausur. Absolute Häufigkeit: 30. Relative Häufigkeit: 30/50 = 0,6 bzw. 60 Prozent.",
        ],
      },
      {
        id: "2-5",
        heading: "2.5 Empirische Verteilungsfunktion",
        body: [
          "Die kumulierte relative Häufigkeit gibt an, welcher Anteil der Beobachtungen kleiner oder gleich einem Wert x ist.",
          "Sie ist eine monoton wachsende Treppenfunktion, die bei 0 beginnt und bei 1 endet, mit Sprüngen genau an den Stellen, an denen Beobachtungen liegen. Wichtig: F(x) ist nicht dasselbe wie f(x) — f(ai) ist die Häufigkeit genau der Ausprägung ai, F(x) ist die Summe aller f(ai) mit ai ≤ x.",
        ],
        terms: [
          {
            term: "Empirische Verteilungsfunktion F(x)",
            definition: "Der Anteil der Beobachtungen, der höchstens x beträgt. Grundlage für die spätere theoretische Verteilungsfunktion in Kapitel 4.",
          },
        ],
        formulas: ["F(x) = Anzahl(Xi ≤ x) / n = Σ f(ai) für alle ai ≤ x"],
        formulasLatex: [
          "F(x) = \\dfrac{\\text{Anzahl}(X_i \\le x)}{n} = \\sum_{a_i \\le x} f(a_i)",
        ],
        examples: [
          "Bei 10 gewürfelten Zahlen 2,4,4,5,6,2,3,4,5,6 ist f(4) = 3/10 = 0,3. F(4) = f(2)+f(3)+f(4) = 0,2+0,1+0,3 = 0,6 — 60 Prozent der Würfe zeigten höchstens eine 4.",
        ],
      },
      {
        id: "2-6",
        heading: "2.6 Modus und Median",
        body: [
          "Lageparameter fassen einen Datensatz in einer Zahl zusammen, die zeigt, wo die Daten typischerweise liegen. Welches Lagemaß sinnvoll ist, hängt vom Skalenniveau ab.",
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
        ],
      },
      {
        id: "2-7",
        heading: "2.7 Arithmetisches Mittel",
        body: [
          "Das arithmetische Mittel ist nur für metrische Merkmale sinnvoll und reagiert empfindlich auf Ausreißer.",
          "Genau deshalb wird bei Einkommensstatistiken oft der Median statt des Mittelwerts berichtet: wenige sehr hohe Einkommen würden den Mittelwert nach oben verzerren.",
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
          "Einkommen (sortiert): 232, 443, 1005, 2231, 2324, 3321, 3721, 6489, 8432 (n=9). Median (5. Wert) = 2324 Euro. Mittelwert ≈ 3133 Euro — deutlich höher, weil der Ausreißer 8432 ihn nach oben zieht.",
          "Notendurchschnitt mit Gewichtung: Modul A (6 CP, Note 1,7), Modul B (3 CP, Note 2,3), Modul C (9 CP, Note 2,0). Gewichtetes Mittel = (6·1,7 + 3·2,3 + 9·2,0) / 18 ≈ 1,95.",
        ],
      },
      {
        id: "2-8",
        heading: "2.8 Quantile",
        body: [
          "p-Quantile verallgemeinern den Median: das p-Quantil xp lässt einen Anteil p der Daten darunter und (1−p) darüber liegen.",
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
      },
      {
        id: "2-9",
        heading: "2.9 Spannweite und Interquartilsabstand",
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
        figure: {
          type: "boxplot",
          caption: "Abb. 2.1 — Boxplot: Median, Quartile (Box = IQR) und Ausreißer auf einen Blick.",
        },
        examples: [
          "Klausurnoten-Boxplot: Min=1,0, Q1=1,7, Median=2,3, Q3=3,0, Max=4,0. IQR = 3,0−1,7 = 1,3.",
        ],
      },
      {
        id: "2-10",
        heading: "2.10 Varianz und Standardabweichung",
        body: [
          "Die Varianz misst die mittlere quadrierte Abweichung vom Mittelwert. Quadriert wird, damit sich positive und negative Abweichungen nicht gegenseitig aufheben.",
          "Der Nachteil der Varianz: Sie hat eine ungewohnte Einheit, z. B. Euro-Quadrat statt Euro. Deshalb gibt man in der Praxis meist die Standardabweichung an, die wieder dieselbe Einheit wie die Ausgangsdaten hat.",
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
          {
            term: "Variationskoeffizient v",
            definition: "Standardabweichung geteilt durch Mittelwert (s/x̄). Ein dimensionsloses Maß, das den Streuungsvergleich unabhängig von der Maßeinheit erlaubt.",
          },
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
          "Daten: 2,4,4,6. x̄=4. Abweichungen: −2,0,0,2. Quadriert: 4,0,0,4. Var(x) = 8/4 = 2. s = √2 ≈ 1,41.",
          "Zwei Abteilungen: Gehälter 3000 € (s=300€) bzw. 5000 € (s=400€). v1=0,10, v2=0,08 — Abteilung 1 hat trotz kleinerer absoluter Streuung die größere relative Streuung.",
        ],
      },
      {
        id: "2-11",
        heading: "2.11 Histogramm und Boxplot in der Grafik",
        body: [
          "Ein Histogramm zeigt die Häufigkeitsdichte klassierter metrischer Daten. Zu breite Klassen verwischen Strukturen, zu schmale erzeugen ein verrauschtes Bild.",
          "Der Boxplot stellt fünf Kennzahlen gleichzeitig dar und macht auf einen Blick sichtbar, ob eine Verteilung schief ist. Boxplots sind besonders stark beim Vergleich mehrerer Gruppen nebeneinander.",
        ],
        figure: {
          type: "histogram",
          caption: "Abb. 2.2 — Histogramm: Balkenhöhe entspricht der Häufigkeitsdichte je Klasse.",
        },
      },
      {
        id: "2-12",
        heading: "2.12 Lorenzkurve und Gini-Koeffizient",
        body: [
          "Die Lorenzkurve zeigt, welcher kumulierte Anteil einer Größe (z. B. Einkommen) auf den kumulierten Anteil der sortierten Einheiten entfällt.",
          "Bei perfekter Gleichverteilung liegt die Kurve auf der Diagonalen. Je stärker sie darunter durchhängt, desto ungleicher ist die Verteilung.",
        ],
        terms: [
          {
            term: "Lorenzkurve",
            definition: "x-Achse: kumulierter Anteil der Einheiten (aufsteigend sortiert). y-Achse: kumulierter Anteil der Größe selbst.",
          },
          {
            term: "Gini-Koeffizient",
            definition: "Doppelte Fläche zwischen Diagonale und Lorenzkurve. Liegt zwischen 0 (Gleichverteilung) und nahe 1 (maximale Konzentration).",
          },
        ],
        figure: {
          type: "lorenz",
          caption: "Abb. 2.3 — Lorenzkurve: Fläche zwischen Diagonale und Kurve bestimmt den Gini-Koeffizienten.",
        },
        examples: [
          "5 Eisverkäufer mit Umsätzen 60,60,60,60,60 (alle gleich): Gini = 0.",
          "5 Eisverkäufer mit Umsätzen 0,0,0,0,300 (einer hat alles): Gini nähert sich 1.",
        ],
      },
      {
        id: "2-13",
        heading: "2.13 Zusammenhangsmaße",
        body: [
          "Bisher ging es um ein Merkmal — Zusammenhangsmaße untersuchen, wie zwei Merkmale gemeinsam variieren. Auch hier bestimmt das Skalenniveau, welches Maß zulässig ist.",
          "Wichtig: Cov(x,y) = 0 folgt aus Unabhängigkeit, aber nicht umgekehrt. Der Korrelationskoeffizient r misst außerdem nur lineare Zusammenhänge — bei einem nicht-linearen (z. B. U-förmigen) Zusammenhang kann r trotzdem nahe 0 liegen.",
        ],
        terms: [
          {
            term: "Kontingenztabelle",
            definition: "Kreuztabelle für zwei nominale oder ordinale Merkmale, zeigt die gemeinsame Häufigkeitsverteilung.",
          },
          {
            term: "Kovarianz Cov(x,y)",
            definition: "Misst die gemeinsame Richtung der Abweichung vom jeweiligen Mittelwert zweier metrischer Merkmale.",
          },
          {
            term: "Korrelationskoeffizient r",
            definition: "Normiert die Kovarianz auf den Bereich −1 bis 1. r=1 perfekter positiver, r=−1 perfekter negativer, r=0 kein linearer Zusammenhang.",
          },
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
          "Lernzeit (h): 2,4,6,8; Klausurpunkte: 40,55,70,90. Beide Reihen wachsen gleichzeitig, r liegt nahe +1.",
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
      "Die Wahrscheinlichkeitsrechnung liefert das Fundament, um Unsicherheit zu quantifizieren. Sie ist die Brücke zwischen der deskriptiven Statistik (was ist in diesen Daten passiert) und den Zufallsvariablen in Kapitel 4 (was könnte theoretisch passieren).",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Zufallsexperiment und Ergebnisraum",
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
        heading: "3.2 Ereignisse und Mengenoperationen",
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
          caption: "Abb. 3.1 — Venn-Diagramm: die Schnittmenge A∩B wird beim Additionssatz nur einmal gezählt.",
        },
        examples: [
          "Zwei Würfel: A = Augensumme ist gerade, B = mindestens eine 6. A∩B = Augensumme gerade und mindestens eine 6, z. B. (6,2), (6,4), (6,6).",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Wahrscheinlichkeitsbegriffe",
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
        heading: "3.4 Kombinatorik: Permutation und Variation",
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
        heading: "3.5 Kombinatorik: Kombination",
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
        heading: "3.6 Additionssatz",
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
        heading: "3.7 Bedingte Wahrscheinlichkeit und Unabhängigkeit",
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
        heading: "3.8 Totale Wahrscheinlichkeit und Satz von Bayes",
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
          caption: "Abb. 3.2 — Wahrscheinlichkeitsbaum: jeder Pfad multipliziert die Wahrscheinlichkeiten entlang der Äste.",
        },
        examples: [
          "Test: Sensitivität 95%, Spezifität 97%, Prävalenz 2%. P(pos) = 0,95·0,02+0,03·0,98 = 0,0484. P(krank|pos) = 0,019/0,0484 ≈ 0,39.",
          "Carla nimmt mit 20% die Tram (60% davon >30min) und mit 80% das Rad (30% davon >30min). Sie war >30min unterwegs: P(Tram|>30min) = 0,12/0,36 ≈ 0,33.",
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
      "Zufallsvariablen übersetzen Zufallsexperimente in Zahlen und erlauben es, Erwartungswert, Streuung und Zusammenhang formal zu berechnen — das Bindeglied zwischen Kapitel 3 und den Verteilungsmodellen in Kapitel 5.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Was ist eine Zufallsvariable?",
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
        heading: "4.2 Diskrete Zufallsvariablen",
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
        heading: "4.3 Stetige Zufallsvariablen",
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
        heading: "4.4 Verteilungsfunktion F(x)",
        body: [
          "Die Verteilungsfunktion F(x) = P(X≤x) existiert für beide Typen und ist immer monoton wachsend von 0 nach 1.",
          "Bei diskreten Zufallsvariablen ist sie eine Treppenfunktion, bei stetigen eine glatte Kurve — die Ableitung von F ist genau die Dichte f.",
        ],
        figure: {
          type: "distribution-function",
          caption: "Abb. 4.1 — Verteilungsfunktion einer diskreten Zufallsvariable: Sprünge an jeder möglichen Ausprägung.",
        },
      },
      {
        id: "4-5",
        heading: "4.5 Erwartungswert",
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
          "Diskrete ZV: f(0)=0,5, f(4)=f(6)=0,25. E(X) = 0·0,5+4·0,25+6·0,25 = 2,5.",
        ],
      },
      {
        id: "4-6",
        heading: "4.6 Varianz von Zufallsvariablen",
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
        heading: "4.7 Lineare Transformation",
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
        heading: "4.8 Tschebyscheff-Ungleichung",
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
        heading: "4.9 Schiefe und Kurtosis",
        body: [
          "Erwartungswert und Varianz beschreiben Lage und Streuung, aber nichts über die Form der Verteilung.",
        ],
        terms: [
          {
            term: "Schiefe",
            definition: "Beschreibt die Asymmetrie um den Erwartungswert. Rechtsschief: Mittelwert > Median > Modus. Symmetrisch: alle drei gleich.",
          },
          {
            term: "Kurtosis",
            definition: "Beschreibt, wie spitz oder flach eine Verteilung im Vergleich zur Normalverteilung ist.",
          },
        ],
      },
      {
        id: "4-10",
        heading: "4.10 Bivariate Zufallsvariablen",
        body: [
          "Bei zwei Zufallsvariablen X und Y beschreibt die gemeinsame Verteilung, wie wahrscheinlich bestimmte Kombinationen von Werten sind.",
          "X und Y heißen unabhängig, wenn die gemeinsame Verteilung in das Produkt der Randverteilungen zerfällt. Für unabhängige Variablen addieren sich die Varianzen bei einer Summe.",
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
        ],
        formulasLatex: [
          "\\text{Cov}(X,Y) = E(XY) - E(X)E(Y)",
          "\\text{Corr}(X,Y) = \\dfrac{\\text{Cov}(X,Y)}{\\sigma_X\\,\\sigma_Y}",
        ],
        examples: [
          "X,Y unabhängig, P(X=1)=0,3, P(Y=1)=0,2. P(S=2)=P(X=1)·P(Y=1)=0,06.",
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
      "Verteilungsmodelle sind Standard-Bausteine, mit denen sich viele reale Zufallsphänomene modellieren lassen. Statt jede Situation neu zu analysieren, erkennt man ein wiederkehrendes Muster und wendet direkt die passenden Formeln an.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Diskrete Gleichverteilung und Bernoulli",
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
        heading: "5.2 Binomialverteilung",
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
          caption: "Abb. 5.1 — Binomialverteilung B(n,p): diskrete, glockenförmige Häufigkeitsverteilung.",
        },
        examples: [
          "X ~ B(10, 0,3): E(X) = 3, Var(X) = 2,1.",
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Hypergeometrische Verteilung",
        body: [
          "Modelliert das Ziehen ohne Zurücklegen aus einer endlichen Grundgesamtheit mit zwei Gruppen — hier ändert sich die Erfolgswahrscheinlichkeit von Ziehung zu Ziehung.",
        ],
        terms: [
          {
            term: "Hypergeometrische Verteilung",
            definition: "z. B. Anzahl defekter Teile in einer Stichprobe von 5, gezogen aus 50, ohne Zurücklegen. Ist die Grundgesamtheit sehr groß, ist die Binomialverteilung eine gute Näherung.",
          },
        ],
      },
      {
        id: "5-4",
        heading: "5.4 Poisson-Verteilung",
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
      },
      {
        id: "5-5",
        heading: "5.5 Stetige Gleichverteilung und Exponentialverteilung",
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
      },
      {
        id: "5-6",
        heading: "5.6 Normalverteilung",
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
          caption: "Abb. 5.2 — Normalverteilung: symmetrische Glockenkurve um den Erwartungswert μ.",
        },
        examples: [
          "X ~ N(100,15). P(X≤115): Z=(115−100)/15=1. Φ(1) ≈ 0,8413.",
        ],
      },
      {
        id: "5-7",
        heading: "5.7 Zentraler Grenzwertsatz",
        body: [
          "Erklärt, warum die Normalverteilung in der Praxis so allgegenwärtig ist: Die Summe bzw. der Mittelwert vieler unabhängiger Zufallsvariablen ist näherungsweise normalverteilt — unabhängig davon, welcher Verteilung die einzelnen Summanden selbst folgen.",
        ],
        terms: [
          {
            term: "Zentraler Grenzwertsatz",
            definition: "Der theoretische Grund, warum Stichprobenmittelwerte in Statistik II fast immer mit der Normalverteilung approximiert werden dürfen.",
          },
        ],
      },
      {
        id: "5-8",
        heading: "5.8 Approximationen zwischen Verteilungen",
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
      },
    ],
  },
];
