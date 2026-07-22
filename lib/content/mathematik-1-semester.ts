import type { SkriptChapter } from "./types";

// Eigenständiges Lehrwerk zu "Mathematik 1" (Semesterklausur-Stoff:
// Aussagenlogik, Mengenlehre, Relationen, Abbildungen, Folgen, Reihen,
// Potenzreihen), verfasst wie ein unabhängiges Lehrbuch zum Modulthema —
// nicht als Paraphrase einer bestimmten Vorlesung.
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 ====================
  {
    id: "aussagenlogik",
    number: 1,
    title: "Aussagenlogik",
    free: true,
    intro:
      "Mathematische Argumentation beruht auf präzisen logischen Regeln. Dieses Kapitel führt die Grundbausteine ein, mit denen sich jede spätere mathematische Aussage exakt formulieren und beweisen lässt.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Aussagen und Junktoren",
        body: [
          "Eine Aussage ist ein sprachliches Gebilde, dem eindeutig genau einer der Wahrheitswerte wahr (w) oder falsch (f) zugeordnet werden kann. Aus einfachen Aussagen lassen sich mit Junktoren zusammengesetzte Aussagen bilden: Negation (¬), Konjunktion (∧, 'und'), Disjunktion (∨, 'oder', einschließend), Implikation (⇒) und Äquivalenz (⇔).",
          "Der Wahrheitswert einer zusammengesetzten Aussage hängt ausschließlich von den Wahrheitswerten ihrer Teilaussagen ab und lässt sich systematisch in einer Wahrheitstafel bestimmen — dies ist die Grundlage jeder formalen Beweisführung.",
        ],
        formulas: ["A ⇒ B ist äquivalent zu ¬A ∨ B"],
        formulasLatex: ["A \\Rightarrow B \\iff \\lnot A \\lor B"],
        terms: [
          { term: "Aussage", definition: "Sprachliches Gebilde mit eindeutigem Wahrheitswert (wahr oder falsch)." },
          { term: "Junktor", definition: "Verknüpfungsoperator zwischen Aussagen, z. B. ∧, ∨, ¬, ⇒, ⇔." },
        ],
        examples: [
          "Die Aussage 'Es regnet, und die Straße ist nass' ist eine Konjunktion zweier Teilaussagen A ('es regnet') und B ('die Straße ist nass'); sie ist nur dann wahr, wenn beide Teilaussagen wahr sind.",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Tautologien und wichtige Äquivalenzen",
        body: [
          "Eine Tautologie ist eine zusammengesetzte Aussage, die für jede Belegung ihrer Teilaussagen wahr ist — sie ist logisch immer gültig, unabhängig vom konkreten Wahrheitsgehalt der Bestandteile. Wichtige Tautologien liefern die Grundregeln des Beweisens.",
          "Zu den wichtigsten Äquivalenzen zählen die De Morganschen Regeln ¬(A∧B) ⇔ ¬A∨¬B und ¬(A∨B) ⇔ ¬A∧¬B, sowie das Kontrapositionsgesetz A⇒B ⇔ ¬B⇒¬A, das die Grundlage vieler indirekter Beweise bildet. Die folgende Tabelle fasst die gebräuchlichsten Äquivalenzen zusammen.",
        ],
        formulas: ["¬(A∧B) ⇔ ¬A∨¬B", "A⇒B ⇔ ¬B⇒¬A"],
        formulasLatex: ["\\lnot(A\\land B) \\iff \\lnot A \\lor \\lnot B", "A\\Rightarrow B \\iff \\lnot B \\Rightarrow \\lnot A"],
        table: {
          caption: "Wichtige logische Äquivalenzen",
          headers: ["Regel", "Äquivalenz"],
          rows: [
            ["Doppelte Verneinung", "¬¬A ⇔ A"],
            ["De Morgan (∧)", "¬(A∧B) ⇔ ¬A∨¬B"],
            ["De Morgan (∨)", "¬(A∨B) ⇔ ¬A∧¬B"],
            ["Kontraposition", "A⇒B ⇔ ¬B⇒¬A"],
            ["Implikation als Disjunktion", "A⇒B ⇔ ¬A∨B"],
            ["Distributivgesetz", "A∧(B∨C) ⇔ (A∧B)∨(A∧C)"],
          ],
        },
        terms: [{ term: "Tautologie", definition: "Aussage, die unabhängig von den Wahrheitswerten ihrer Teilaussagen stets wahr ist." }],
        examples: [
          "Um 'wenn n² gerade ist, dann ist n gerade' zu zeigen, beweist man stattdessen die logisch äquivalente Kontraposition: 'wenn n ungerade ist, dann ist n² ungerade' — oft der einfachere Weg.",
        ],
      },
      {
        id: "1-3",
        heading: "1.3 Quantoren",
        body: [
          "Der Allquantor ∀ ('für alle') und der Existenzquantor ∃ ('es existiert') erlauben es, Aussagen über ganze Mengen von Objekten zu treffen, z. B. ∀x∈M: P(x) ('für alle x aus M gilt die Eigenschaft P'). Die Negation eines quantifizierten Ausdrucks vertauscht dabei stets den Quantor: ¬(∀x: P(x)) ⇔ ∃x: ¬P(x).",
          "Bei mehreren Quantoren ist die Reihenfolge entscheidend: ∀x∃y: P(x,y) ist eine grundsätzlich andere Aussage als ∃y∀x: P(x,y) — im ersten Fall darf y von x abhängen, im zweiten Fall muss ein einziges y für alle x gleichzeitig funktionieren.",
        ],
        formulas: ["¬(∀x: P(x)) ⇔ ∃x: ¬P(x)"],
        formulasLatex: ["\\lnot(\\forall x: P(x)) \\iff \\exists x: \\lnot P(x)"],
        terms: [
          { term: "Allquantor (∀)", definition: "Quantor, der aussagt, dass eine Eigenschaft für alle Elemente einer Menge gilt." },
          { term: "Existenzquantor (∃)", definition: "Quantor, der aussagt, dass mindestens ein Element mit einer Eigenschaft existiert." },
        ],
        examples: [
          "'Für jede natürliche Zahl n existiert eine größere natürliche Zahl m' (∀n∃m: m>n) ist wahr; 'es existiert eine natürliche Zahl m, die größer ist als jede natürliche Zahl n' (∃m∀n: m>n) ist dagegen falsch.",
        ],
      },
    ],
  },
  // ==================== Kapitel 2 ====================
  {
    id: "mengenlehre",
    number: 2,
    title: "Mengenlehre",
    free: false,
    intro:
      "Mengen sind das grundlegende Ordnungsprinzip der Mathematik: Fast jedes mathematische Objekt lässt sich als Menge oder als Element einer Menge auffassen. Dieses Kapitel behandelt die zentralen Mengenoperationen und ihre Rechenregeln.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Mengen und Elementbeziehung",
        body: [
          "Eine Menge ist eine wohldefinierte Zusammenfassung unterscheidbarer Objekte (Elemente) zu einem Ganzen. Mengen lassen sich durch Aufzählen ihrer Elemente ({1,2,3}) oder durch eine definierende Eigenschaft ({x | x ist gerade}) angeben. Die leere Menge ∅ enthält kein Element und ist Teilmenge jeder Menge.",
          "Eine Menge A heißt Teilmenge von B (A⊆B), wenn jedes Element von A auch Element von B ist. Gilt zusätzlich A≠B, spricht man von einer echten Teilmenge (A⊊B).",
        ],
        terms: [
          { term: "Teilmenge (⊆)", definition: "A⊆B, wenn jedes Element von A auch Element von B ist." },
          { term: "Leere Menge (∅)", definition: "Menge ohne Elemente; Teilmenge jeder Menge." },
        ],
        examples: [
          "Für A={2,4,6} und B={1,2,3,4,5,6} gilt A⊆B, da jedes Element von A auch in B enthalten ist; da B zusätzliche Elemente enthält, gilt sogar A⊊B.",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Mengenoperationen",
        body: [
          "Vereinigung A∪B enthält alle Elemente, die in A oder B (oder beiden) liegen. Durchschnitt A∩B enthält nur Elemente, die in beiden Mengen liegen. Differenz A\\B enthält alle Elemente von A, die nicht in B liegen. Ist eine Grundmenge Ω festgelegt, bezeichnet das Komplement Aᶜ = Ω\\A alle Elemente von Ω außerhalb von A.",
          "Für diese Operationen gelten Distributivgesetze A∩(B∪C) = (A∩B)∪(A∩C) sowie die De Morganschen Regeln für Mengen: (A∪B)ᶜ = Aᶜ∩Bᶜ und (A∩B)ᶜ = Aᶜ∪Bᶜ.",
        ],
        formulas: ["A∩(B∪C) = (A∩B)∪(A∩C)", "(A∪B)ᶜ = Aᶜ∩Bᶜ"],
        formulasLatex: ["A\\cap(B\\cup C) = (A\\cap B)\\cup(A\\cap C)", "(A\\cup B)^{c} = A^{c}\\cap B^{c}"],
        figure: { type: "venn", caption: "Venn-Diagramm: Vereinigung, Durchschnitt und Komplement" },
        examples: [
          "Für A={1,2,3,4}, B={3,4,5,6} in Ω={1,...,8} gilt A∪B={1,2,3,4,5,6}, A∩B={3,4}, A\\B={1,2}, und Aᶜ={5,6,7,8}.",
        ],
      },
      {
        id: "2-3",
        heading: "2.3 Potenzmenge und kartesisches Produkt",
        body: [
          "Die Potenzmenge P(A) einer Menge A ist die Menge aller Teilmengen von A (einschließlich ∅ und A selbst). Hat A genau n Elemente, besitzt P(A) genau 2ⁿ Elemente, da jedes Element unabhängig entweder in einer Teilmenge enthalten sein kann oder nicht.",
          "Das kartesische Produkt A×B besteht aus allen geordneten Paaren (a,b) mit a∈A und b∈B. Anders als bei Mengen kommt es bei geordneten Paaren auf die Reihenfolge an: (a,b) ist im Allgemeinen verschieden von (b,a).",
        ],
        formulas: ["|P(A)| = 2^|A|"],
        formulasLatex: ["|P(A)| = 2^{|A|}"],
        terms: [
          { term: "Potenzmenge", definition: "Menge aller Teilmengen einer gegebenen Menge; besitzt bei n Elementen 2ⁿ Teilmengen." },
          { term: "Kartesisches Produkt", definition: "Menge aller geordneten Paare (a,b) mit a∈A, b∈B." },
        ],
        examples: [
          "Für A={x,y} gilt P(A) = {∅, {x}, {y}, {x,y}} — genau 2²=4 Teilmengen. Für A={1,2} und B={a,b} gilt A×B = {(1,a),(1,b),(2,a),(2,b)}.",
        ],
      },
    ],
  },
  // ==================== Kapitel 3 (Exkurs) ====================
  {
    id: "algebraische-strukturen",
    number: 3,
    title: "Exkurs: Algebraische Strukturen",
    free: false,
    intro:
      "Viele der Rechenregeln, die wir aus dem Umgang mit Zahlen kennen, lassen sich als Eigenschaften abstrakter algebraischer Strukturen fassen. Dieser Exkurs zeigt, wie Gruppen, Ringe und Körper diese Regeln systematisieren.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Gruppen",
        body: [
          "Eine Gruppe (G,∗) ist eine Menge G mit einer Verknüpfung ∗, die abgeschlossen ist (a∗b∈G für alle a,b∈G), assoziativ ist ((a∗b)∗c = a∗(b∗c)), ein neutrales Element e besitzt (a∗e = e∗a = a) und zu jedem Element ein inverses Element hat (a∗a⁻¹ = e). Ist zusätzlich a∗b = b∗a für alle a,b, heißt die Gruppe abelsch (kommutativ).",
          "Gruppen abstrahieren das gemeinsame Strukturmuster, das man in vielen konkreten Rechensystemen wiederfindet — von den ganzen Zahlen mit Addition bis zu Symmetriegruppen geometrischer Figuren.",
          "Aus den Gruppenaxiomen folgt die Kürzungsregel: Ist a∗b = a∗c, so folgt bereits b=c (durch Verknüpfen von links mit dem Inversen a⁻¹) — und analog für Kürzung von rechts. Diese Regel ist das zentrale Werkzeug, um in einer abstrakt gegebenen Gruppe unbekannte Verknüpfungsergebnisse zu erschließen, ohne die Gruppe vollständig kennen zu müssen.",
        ],
        formulas: ["a∗b = a∗c ⇒ b = c"],
        formulasLatex: ["a * b = a * c \\;\\Rightarrow\\; b = c"],
        terms: [{ term: "Gruppe", definition: "Menge mit assoziativer Verknüpfung, neutralem Element und Inversen zu jedem Element." }],
        examples: [
          "(ℤ,+) ist eine abelsche Gruppe: 0 ist neutrales Element, zu jedem n ist −n das Inverse, Addition ist assoziativ und kommutativ. (ℕ,+) ist dagegen KEINE Gruppe, da z. B. 3 kein additives Inverses in ℕ besitzt.",
          "In einer Gruppe (G,∗) mit neutralem Element e gelte für drei Elemente p,q,r: p∗q = p∗r. Durch Verknüpfen beider Seiten von links mit dem Inversen p⁻¹ folgt p⁻¹∗(p∗q) = p⁻¹∗(p∗r), also (nach Assoziativität) e∗q = e∗r und damit q=r — man kann also allein aus p∗q=p∗r bereits q=r schließen, ohne p explizit zu kennen.",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Ringe und Körper",
        body: [
          "Ein Ring (R,+,·) besitzt zwei Verknüpfungen: (R,+) ist eine abelsche Gruppe, · ist assoziativ, und es gelten die Distributivgesetze a·(b+c) = a·b+a·c. Ein Körper ist ein Ring, bei dem zusätzlich (R\\{0},·) eine abelsche Gruppe ist — jedes Element außer dem additiven neutralen Element 0 besitzt also ein multiplikatives Inverses.",
          "Körper sind die algebraische Struktur, in der uneingeschränkt addiert, subtrahiert, multipliziert und (außer durch 0) dividiert werden kann — genau die Rechenregeln, die wir von ℚ und ℝ gewohnt sind.",
        ],
        table: {
          caption: "Algebraische Strukturen im Vergleich",
          headers: ["Struktur", "Verknüpfung(en)", "Zusätzliche Eigenschaft"],
          rows: [
            ["Gruppe (G,∗)", "eine Verknüpfung: abgeschlossen, assoziativ, neutrales Element, Inverse zu jedem Element", "—"],
            ["Abelsche Gruppe", "wie Gruppe", "zusätzlich kommutativ: a∗b = b∗a"],
            ["Ring (R,+,·)", "(R,+) abelsche Gruppe, · assoziativ", "Distributivgesetze: a·(b+c) = a·b+a·c"],
            ["Körper", "wie Ring", "zusätzlich (R\\{0},·) abelsche Gruppe (multiplikatives Inverses außer für 0)"],
          ],
        },
        terms: [
          { term: "Ring", definition: "Menge mit additiver Gruppenstruktur und assoziativer, distributiver Multiplikation." },
          { term: "Körper", definition: "Ring, in dem zusätzlich jedes Element außer 0 ein multiplikatives Inverses besitzt." },
        ],
        examples: [
          "(ℤ,+,·) ist ein Ring, aber kein Körper, da z. B. 2 kein multiplikatives Inverses in ℤ besitzt (1/2 ∉ ℤ). (ℚ,+,·) und (ℝ,+,·) sind dagegen Körper.",
        ],
      },
    ],
  },
  // ==================== Kapitel 4 ====================
  {
    id: "kombinatorik-laplace",
    number: 4,
    title: "Kombinatorik und das Laplace-Modell",
    free: false,
    intro:
      "Kombinatorik liefert die Zähltechniken, um die Anzahl möglicher Anordnungen und Auswahlen zu bestimmen — die Grundlage jeder klassischen Wahrscheinlichkeitsrechnung im Laplace-Modell. Da Kombinatorik im Kern nur auf Mengen und Abzählen aufbaut, schließt sie hier direkt an die Mengenlehre an.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Permutationen",
        body: [
          "Die Anzahl der Möglichkeiten, n unterscheidbare Objekte in einer Reihenfolge anzuordnen (Permutationen), beträgt n! = n·(n−1)·...·1. Sind unter den n Objekten Gruppen von jeweils untereinander nicht unterscheidbaren Objekten (Größen n₁,...,nₖ), reduziert sich die Anzahl unterscheidbarer Anordnungen auf n!/(n₁!·...·nₖ!).",
          "Diese Reduktion entsteht, weil Vertauschungen innerhalb einer Gruppe ununterscheidbarer Objekte keine neue Anordnung erzeugen — sie werden durch die Division herausgerechnet.",
        ],
        formulas: ["Anzahl Anordnungen = n! / (n₁! · ... · nₖ!)"],
        formulasLatex: ["\\dfrac{n!}{n_1! \\cdots n_k!}"],
        terms: [{ term: "Permutation", definition: "Anordnung von Objekten in einer bestimmten Reihenfolge." }],
        examples: [
          "Das Wort 'MAMMUT' besteht aus 6 Buchstaben, davon 3×M, 1×A, 1×U, 1×T. Die Anzahl unterscheidbarer Anordnungen beträgt 6!/3! = 720/6 = 120.",
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Variationen und Kombinationen",
        body: [
          "Bei der Auswahl von k aus n unterscheidbaren Objekten unterscheidet man vier Fälle, je nachdem ob die Reihenfolge der Auswahl zählt und ob Objekte wiederholt (mit Zurücklegen) ausgewählt werden dürfen: Variation mit Wiederholung (Reihenfolge zählt, Wiederholung erlaubt: nᵏ), Variation ohne Wiederholung (Reihenfolge zählt, keine Wiederholung: n!/(n−k)!), Kombination ohne Wiederholung (Reihenfolge egal, keine Wiederholung: Binomialkoeffizient) und Kombination mit Wiederholung (Reihenfolge egal, Wiederholung erlaubt).",
          "Der Binomialkoeffizient C(n,k) = n!/(k!(n−k)!) zählt die Anzahl der k-elementigen Teilmengen einer n-elementigen Menge und ist damit das zentrale Werkzeug für Kombinationen ohne Wiederholung. Für Kombinationen MIT Wiederholung — z. B. wie viele Arten es gibt, k identische Kugeln auf n Fächer zu verteilen — gilt stattdessen C(n+k−1,k) = (n+k−1)!/(k!(n−1)!).",
        ],
        formulas: [
          "Variation mit Wiederholung: n^k",
          "Variation ohne Wiederholung: n! / (n−k)!",
          "Kombination ohne Wiederholung: C(n,k) = n! / (k!(n−k)!)",
          "Kombination mit Wiederholung: C(n+k−1,k) = (n+k−1)! / (k!(n−1)!)",
        ],
        formulasLatex: [
          "n^k",
          "\\dfrac{n!}{(n-k)!}",
          "\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}",
          "C(n+k-1,k) = \\dfrac{(n+k-1)!}{k!(n-1)!}",
        ],
        table: {
          caption: "Übersicht: Auswahl von k aus n Objekten",
          headers: ["", "ohne Wiederholung", "mit Wiederholung"],
          rows: [
            ["Variation (Reihenfolge zählt)", "n! / (n−k)!", "n^k"],
            ["Kombination (Reihenfolge egal)", "C(n,k) = n! / (k!(n−k)!)", "C(n+k−1,k) = (n+k−1)! / (k!(n−1)!)"],
          ],
        },
        terms: [{ term: "Binomialkoeffizient", definition: "C(n,k), Anzahl der k-elementigen Teilmengen einer n-elementigen Menge." }],
        examples: [
          "Bei einer Ziehung von 6 aus 49 Kugeln ohne Zurücklegen und ohne Reihenfolge gibt es C(49,6) = 13.983.816 mögliche Ergebnisse (Kombination ohne Wiederholung).",
          "Ein 3-stelliges Zahlenschloss mit Ziffern 0–9 (Wiederholung erlaubt, Reihenfolge zählt) hat 10³ = 1.000 mögliche Kombinationen (Variation mit Wiederholung). Verteilt man dagegen 4 identische Bonuspunkte auf 3 Kategorien, ohne dass die Reihenfolge der Vergabe zählt, gibt es C(3+4−1,4) = C(6,4) = 15 Möglichkeiten (Kombination mit Wiederholung).",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Das Laplace-Modell",
        body: [
          "Im Laplace-Modell sind alle Elementarereignisse eines endlichen Ergebnisraums Ω gleich wahrscheinlich. Die Wahrscheinlichkeit eines Ereignisses A ergibt sich dann als P(A) = |A|/|Ω| — 'Anzahl günstiger Fälle geteilt durch Anzahl möglicher Fälle'. Kombinatorische Zähltechniken (Permutationen, Binomialkoeffizienten) liefern dabei |A| und |Ω|.",
          "Das Laplace-Modell ist nur anwendbar, wenn tatsächlich Gleichwahrscheinlichkeit vorliegt (z. B. beim fairen Würfel oder bei rein zufälligem Ziehen) — bei ungleich wahrscheinlichen Ergebnissen (z. B. gezinkter Würfel) versagt die einfache Formel.",
        ],
        formulas: ["P(A) = |A| / |Ω|"],
        formulasLatex: ["P(A) = \\dfrac{|A|}{|\\Omega|}"],
        terms: [{ term: "Laplace-Modell", definition: "Wahrscheinlichkeitsmodell mit endlichem Ergebnisraum und gleichwahrscheinlichen Elementarereignissen." }],
        examples: [
          "Beim einmaligen Werfen zweier fairer Würfel gibt es |Ω|=36 gleichwahrscheinliche Ergebnisse. Das Ereignis 'Augensumme = 7' wird von 6 Kombinationen erfüllt, also P(Summe=7) = 6/36 = 1/6.",
        ],
      },
    ],
  },
  // ==================== Kapitel 5 ====================
  {
    id: "relationen",
    number: 5,
    title: "Relationen",
    free: false,
    intro:
      "Relationen formalisieren, wie Objekte zueinander in Beziehung stehen — von der Gleichheit über Ordnungen bis zur Äquivalenz. Dieses Kapitel behandelt die wichtigsten Eigenschaften und Klassen von Relationen.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Relationen und ihre Eigenschaften",
        body: [
          "Eine (zweistellige) Relation R auf einer Menge M ist eine Teilmenge von M×M; man schreibt a R b, falls (a,b)∈R. Wichtige Eigenschaften: Reflexivität (a R a für alle a), Symmetrie (a R b ⇒ b R a), Antisymmetrie (a R b ∧ b R a ⇒ a=b) und Transitivität (a R b ∧ b R c ⇒ a R c).",
          "Diese vier Eigenschaften bilden die Bausteine, aus denen sich die zwei wichtigsten Relationstypen zusammensetzen: Äquivalenzrelationen (reflexiv, symmetrisch, transitiv) und Ordnungsrelationen (reflexiv, antisymmetrisch, transitiv).",
          "Da eine Relation auf einer n-elementigen Menge M nichts anderes als eine Teilmenge von M×M ist, lässt sich die Anzahl reflexiver Relationen direkt kombinatorisch bestimmen: Die n Diagonalelemente (a,a) müssen zwingend enthalten sein, über die restlichen n²−n Elemente von M×M kann dagegen frei entschieden werden. Das liefert genau 2^(n²−n) reflexive Relationen.",
        ],
        formulas: ["Anzahl reflexiver Relationen auf einer n-elementigen Menge = 2^(n²−n)"],
        formulasLatex: ["2^{n^2-n}"],
        terms: [{ term: "Transitivität", definition: "Eigenschaft: a R b und b R c implizieren a R c." }],
        examples: [
          "Die Relation '≤' auf ℝ ist reflexiv, antisymmetrisch und transitiv, aber nicht symmetrisch (aus a≤b folgt nicht b≤a, außer bei Gleichheit) — sie ist damit eine Ordnungsrelation.",
          "Für eine Menge mit n=5 Elementen ergibt die Formel 2^(25−5) = 2²⁰ = 1.048.576 reflexive Relationen — bei nur 5 Elementen bereits über eine Million mögliche reflexive Relationen.",
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Äquivalenzrelationen und Äquivalenzklassen",
        body: [
          "Eine Äquivalenzrelation partitioniert eine Menge M vollständig in disjunkte Äquivalenzklassen: Für jedes a∈M ist [a] = {b∈M | a R b} die Menge aller zu a äquivalenten Elemente. Je zwei Äquivalenzklassen sind entweder identisch oder disjunkt, und die Vereinigung aller Klassen ergibt wieder ganz M.",
          "Äquivalenzrelationen erlauben es, Objekte, die sich in einer bestimmten Hinsicht 'gleich verhalten', zu einer einzigen Klasse zusammenzufassen und dadurch neue mathematische Objekte zu konstruieren (z. B. die rationalen Zahlen als Äquivalenzklassen von Bruchpaaren).",
        ],
        terms: [{ term: "Äquivalenzklasse", definition: "Menge aller zu einem Element äquivalenten Elemente; Äquivalenzklassen partitionieren die Grundmenge." }],
        examples: [
          "Die Relation 'hat denselben Rest bei Division durch 3' auf ℤ ist eine Äquivalenzrelation mit genau drei Äquivalenzklassen: Zahlen mit Rest 0, Rest 1 und Rest 2.",
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Ordnungsrelationen",
        body: [
          "Eine Ordnungsrelation heißt total (linear), wenn für je zwei Elemente a,b gilt a R b oder b R a — je zwei Elemente sind also stets vergleichbar. Andernfalls spricht man von einer partiellen (Halb-)Ordnung, bei der es nicht vergleichbare Elementpaare geben kann.",
          "In einer Halbordnung heißt ein Element m minimal, wenn kein Element echt kleiner ist, und Minimum, wenn es zusätzlich mit jedem anderen Element vergleichbar und kleiner-gleich ist — ein Minimum ist stets auch minimal, aber nicht umgekehrt.",
        ],
        terms: [
          { term: "Totalordnung", definition: "Ordnungsrelation, bei der je zwei Elemente stets vergleichbar sind." },
          { term: "Halbordnung", definition: "Ordnungsrelation, bei der nicht alle Elementpaare vergleichbar sein müssen." },
        ],
        examples: [
          "Auf der Potenzmenge P({1,2}) = {∅,{1},{2},{1,2}} ist ⊆ eine Halbordnung: {1} und {2} sind nicht vergleichbar (weder {1}⊆{2} noch {2}⊆{1}), obwohl beide minimal über ∅ liegen.",
        ],
      },
    ],
  },
  // ==================== Kapitel 6 ====================
  {
    id: "induktion-natuerliche-zahlen",
    number: 6,
    title: "Vollständige Induktion und die natürlichen Zahlen",
    free: false,
    intro:
      "Die vollständige Induktion ist eines der wichtigsten Beweiswerkzeuge der Mathematik, um Aussagen über alle natürlichen Zahlen zu zeigen. Dieses Kapitel erklärt ihr Funktionsprinzip anhand der Konstruktion der natürlichen Zahlen.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Die Peano-Axiome",
        body: [
          "Die natürlichen Zahlen lassen sich axiomatisch durch die Peano-Axiome charakterisieren: 0 ist eine natürliche Zahl; jede natürliche Zahl n hat einen eindeutigen Nachfolger n+1; 0 ist kein Nachfolger; verschiedene Zahlen haben verschiedene Nachfolger; und das Induktionsaxiom besagt, dass jede Eigenschaft, die für 0 gilt und sich von n auf n+1 vererbt, für alle natürlichen Zahlen gilt.",
          "Das Induktionsaxiom ist die formale Grundlage der Beweismethode der vollständigen Induktion und garantiert, dass man von einem Anfangsfall ausgehend durch wiederholtes 'einen Schritt weitergehen' tatsächlich alle natürlichen Zahlen erreicht.",
        ],
        terms: [{ term: "Induktionsaxiom", definition: "Axiom, das besagt: gilt eine Eigenschaft für 0 und vererbt sie sich von n auf n+1, gilt sie für alle natürlichen Zahlen." }],
        examples: [
          "Aus den Peano-Axiomen folgt, dass es keine 'größte natürliche Zahl' geben kann, da jede Zahl n einen Nachfolger n+1 besitzt, der wieder eine natürliche Zahl ist.",
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Das Beweisprinzip der vollständigen Induktion",
        body: [
          "Um eine Aussage A(n) für alle n≥n₀ zu beweisen, zeigt man zwei Dinge: den Induktionsanfang A(n₀) (die Aussage gilt für den Startwert) und den Induktionsschritt A(n)⇒A(n+1) für beliebiges n≥n₀ (unter der Induktionsannahme, dass A(n) gilt, zeigt man, dass dann auch A(n+1) gilt). Aus beidem folgt nach dem Induktionsaxiom, dass A(n) für alle n≥n₀ gilt.",
          "Ein klassisches Anwendungsbeispiel ist die Gaußsche Summenformel: Für alle n≥1 gilt 1+2+...+n = n(n+1)/2. Der Induktionsanfang (n=1: 1 = 1·2/2 = 1) ist trivial; im Induktionsschritt nimmt man an, die Formel gelte für n, und zeigt, dass 1+...+n+(n+1) = n(n+1)/2 + (n+1) = (n+1)(n+2)/2 — genau die Formel für n+1.",
        ],
        formulas: ["1+2+...+n = n(n+1)/2"],
        formulasLatex: ["\\sum_{k=1}^{n} k = \\dfrac{n(n+1)}{2}"],
        terms: [
          { term: "Induktionsanfang", definition: "Nachweis der zu beweisenden Aussage für den kleinsten betrachteten Wert." },
          { term: "Induktionsschritt", definition: "Nachweis, dass die Aussage für n+1 gilt, sofern sie für n gilt (Induktionsannahme)." },
        ],
        examples: [
          "Man zeigt per Induktion, dass 3ⁿ − 1 für alle n≥1 durch 2 teilbar ist: n=1 liefert 3−1=2 (teilbar); gilt 3ⁿ−1=2k, so ist 3ⁿ⁺¹−1 = 3·3ⁿ−1 = 3(2k+1)−1 = 6k+2 = 2(3k+1), also ebenfalls durch 2 teilbar.",
        ],
      },
      {
        id: "6-3",
        heading: "6.3 Rekursive Definitionen",
        body: [
          "Rekursive Definitionen legen ein mathematisches Objekt fest, indem sie einen Basisfall angeben und den allgemeinen Fall auf einen bereits definierten, kleineren Fall zurückführen — strukturell eng verwandt mit der vollständigen Induktion. Die Fakultät ist ein Standardbeispiel: 0! = 1 und n! = n·(n−1)! für n≥1.",
          "Rekursive Definitionen und Induktionsbeweise passen typischerweise zusammen: Eine über Rekursion definierte Größe lässt sich meist elegant per Induktion auf ihre geschlossene Form (eine Formel ohne Rekursion) zurückführen.",
        ],
        formulas: ["n! = n · (n−1)!, 0! = 1"],
        formulasLatex: ["n! = n \\cdot (n-1)!,\\quad 0! = 1"],
        terms: [{ term: "Rekursive Definition", definition: "Definition eines Objekts durch Basisfall und Rückführung des allgemeinen Falls auf einen kleineren Fall." }],
        examples: [
          "4! = 4·3! = 4·3·2! = 4·3·2·1! = 4·3·2·1·0! = 4·3·2·1·1 = 24 — jede Stufe verwendet die bereits berechnete vorherige Stufe.",
        ],
      },
      {
        id: "6-4",
        heading: "6.4 Weitere Anwendungen der Induktion: Summenformeln und Ungleichungen",
        body: [
          "Neben der Gaußschen Summenformel lassen sich viele weitere Summenformeln per Induktion beweisen. Für die Summe der ersten n Quadratzahlen gilt Σ(k=1,n) k² = n(n+1)(2n+1)/6 — auch dieser Induktionsbeweis folgt demselben Muster aus Induktionsanfang und Induktionsschritt.",
          "Auch Ungleichungen lassen sich per Induktion zeigen. Die Bernoulli-Ungleichung (1+x)ⁿ ≥ 1+nx gilt für alle reellen x≥−1 und alle n∈N₀ und ist eines der am häufigsten verwendeten Hilfsmittel der Analysis, um Potenzen nach unten abzuschätzen, ohne den genauen Wert von (1+x)ⁿ berechnen zu müssen.",
        ],
        formulas: ["Σ(k=1,n) k² = n(n+1)(2n+1)/6", "(1+x)ⁿ ≥ 1+nx für x≥−1"],
        formulasLatex: [
          "\\sum_{k=1}^{n} k^2 = \\dfrac{n(n+1)(2n+1)}{6}",
          "(1+x)^n \\ge 1+nx \\quad (x\\ge -1)",
        ],
        terms: [{ term: "Bernoulli-Ungleichung", definition: "(1+x)ⁿ≥1+nx für alle x≥−1 und n∈N₀; wird per Induktion bewiesen." }],
        examples: [
          "Für n=8 liefert die Formel Σk² = 8·9·17/6 = 1224/6 = 204 — die Summe 1²+2²+...+8² lässt sich so ohne Einzeladdition direkt berechnen.",
          "Für x=0,1 und n=5 liefert die Bernoulli-Ungleichung (1,1)⁵ ≥ 1+5·0,1 = 1,5 — tatsächlich ist 1,1⁵≈1,6105>1,5, die Ungleichung ist also (wie garantiert) erfüllt, wenn auch nicht scharf.",
        ],
      },
    ],
  },
  // ==================== Kapitel 7 ====================
  {
    id: "abbildungen",
    number: 7,
    title: "Abbildungen",
    free: false,
    intro:
      "Abbildungen (Funktionen) sind das zentrale Werkzeug, um Elemente einer Menge Elementen einer anderen Menge zuzuordnen. Dieses Kapitel klärt die wichtigsten Eigenschaften, die eine Abbildung haben kann.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Abbildungen, Definitions- und Wertebereich",
        body: [
          "Eine Abbildung f: A→B ordnet jedem Element a∈A (Definitionsbereich) genau ein Element f(a)∈B (Zielmenge) zu. Der Wertebereich (die Bildmenge) f(A) = {f(a) | a∈A} ist die Teilmenge von B, die tatsächlich als Funktionswert auftritt — er muss nicht mit der gesamten Zielmenge B übereinstimmen.",
          "Zwei Abbildungen f,g: A→B sind genau dann gleich, wenn f(a)=g(a) für alle a∈A gilt — nicht schon, wenn ihre Zuordnungsvorschriften unterschiedlich aussehen, aber dieselben Werte liefern.",
        ],
        terms: [
          { term: "Definitionsbereich", definition: "Menge, auf der eine Abbildung definiert ist." },
          { term: "Wertebereich (Bildmenge)", definition: "Menge der tatsächlich angenommenen Funktionswerte, f(A) ⊆ B." },
        ],
        examples: [
          "Für f: ℝ→ℝ, f(x)=x² ist der Definitionsbereich ganz ℝ, die Zielmenge ℝ, aber der Wertebereich nur [0,∞), da x² nie negativ wird.",
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Injektivität, Surjektivität, Bijektivität",
        body: [
          "Eine Abbildung f: A→B heißt injektiv, wenn verschiedene Elemente stets auf verschiedene Bilder abgebildet werden (f(a₁)=f(a₂) ⇒ a₁=a₂). Sie heißt surjektiv, wenn jedes Element von B als Bild getroffen wird (f(A)=B). Ist f sowohl injektiv als auch surjektiv, heißt sie bijektiv — in diesem Fall existiert eine eindeutige Umkehrabbildung f⁻¹: B→A.",
          "Für endliche Mengen mit |A|=|B| ist eine Abbildung f:A→B bereits dann bijektiv, wenn sie injektiv ODER surjektiv ist — die jeweils andere Eigenschaft folgt automatisch (Schubfachprinzip-Argument).",
        ],
        terms: [
          { term: "Injektiv", definition: "Verschiedene Argumente werden auf verschiedene Bilder abgebildet." },
          { term: "Surjektiv", definition: "Jedes Element der Zielmenge wird als Bild getroffen." },
          { term: "Bijektiv", definition: "Sowohl injektiv als auch surjektiv; besitzt eine eindeutige Umkehrabbildung." },
        ],
        examples: [
          "f: ℝ→ℝ, f(x)=x³ ist bijektiv (jede reelle Zahl hat genau eine dritte Wurzel). g: ℝ→ℝ, g(x)=x² ist weder injektiv (g(2)=g(−2)) noch surjektiv (negative Werte werden nie getroffen).",
        ],
      },
      {
        id: "7-3",
        heading: "7.3 Verkettung und Umkehrabbildung",
        body: [
          "Sind f: A→B und g: B→C Abbildungen, so ist die Verkettung g∘f: A→C definiert durch (g∘f)(a) = g(f(a)) — zuerst wird f, dann g angewendet. Die Verkettung ist assoziativ, aber im Allgemeinen nicht kommutativ (g∘f ≠ f∘g).",
          "Ist f: A→B bijektiv, erfüllt die Umkehrabbildung f⁻¹: B→A die Beziehungen f⁻¹∘f = id_A und f∘f⁻¹ = id_B, wobei id die identische Abbildung bezeichnet, die jedes Element auf sich selbst abbildet.",
        ],
        formulas: ["(g∘f)(a) = g(f(a))"],
        formulasLatex: ["(g\\circ f)(a) = g(f(a))"],
        terms: [{ term: "Verkettung (g∘f)", definition: "Hintereinanderausführung zweier Abbildungen: erst f, dann g." }],
        examples: [
          "Für f(x)=x+1 und g(x)=2x gilt (g∘f)(x)=g(x+1)=2(x+1)=2x+2, während (f∘g)(x)=f(2x)=2x+1 — die Verkettung ist hier nicht kommutativ.",
        ],
      },
    ],
  },
  // ==================== Kapitel 8 ====================
  {
    id: "reelle-zahlen",
    number: 8,
    title: "Die reellen Zahlen",
    free: false,
    intro:
      "Die reellen Zahlen bilden das Fundament der Analysis. Dieses Kapitel behandelt ihre grundlegenden Ordnungseigenschaften, den entscheidenden Unterschied zu den rationalen Zahlen — die Vollständigkeit — sowie den daraus folgenden strukturellen Zusammenhang zwischen ℚ und ℝ.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Angeordnete Körper und Beträge",
        body: [
          "ℝ ist ein angeordneter Körper: Neben den Körperaxiomen (Kapitel 3) existiert eine mit den Verknüpfungen verträgliche Ordnung ≤. Der Betrag |x| = x für x≥0 und |x| = −x für x<0 misst den Abstand einer Zahl zum Nullpunkt und erfüllt die Dreiecksungleichung |x+y| ≤ |x|+|y|.",
          "Die Dreiecksungleichung ist eines der am häufigsten verwendeten Werkzeuge der Analysis, um Abstände und Fehlerabschätzungen nach oben zu begrenzen.",
        ],
        formulas: ["|x+y| ≤ |x| + |y|"],
        formulasLatex: ["|x+y| \\le |x| + |y|"],
        terms: [{ term: "Dreiecksungleichung", definition: "|x+y| ≤ |x|+|y| für alle reellen x,y." }],
        examples: [
          "Für x=−3, y=5 gilt |x+y|=|2|=2, während |x|+|y|=3+5=8 — die Ungleichung 2≤8 ist erfüllt, wobei hier keine Gleichheit vorliegt, da x und y unterschiedliche Vorzeichen haben.",
        ],
      },
      {
        id: "8-2",
        heading: "8.2 Supremum, Infimum und Vollständigkeit",
        body: [
          "Eine obere Schranke einer Menge M⊆ℝ ist eine Zahl s mit x≤s für alle x∈M. Die kleinste obere Schranke heißt Supremum (sup M); analog ist das Infimum (inf M) die größte untere Schranke. Anders als Maximum/Minimum müssen Supremum/Infimum nicht selbst Element von M sein.",
          "Das Vollständigkeitsaxiom von ℝ besagt: Jede nach oben beschränkte, nichtleere Teilmenge von ℝ besitzt ein Supremum in ℝ. Diese Eigenschaft unterscheidet ℝ fundamental von ℚ, wo z. B. die Menge {x∈ℚ | x²<2} zwar nach oben beschränkt ist, aber kein Supremum in ℚ besitzt (√2 ist irrational).",
        ],
        terms: [
          { term: "Supremum", definition: "Kleinste obere Schranke einer Menge." },
          { term: "Vollständigkeitsaxiom", definition: "Jede nach oben beschränkte, nichtleere Teilmenge von ℝ besitzt ein Supremum in ℝ." },
        ],
        examples: [
          "Für M=(0,1) (offenes Intervall) gilt sup M=1 und inf M=0, obwohl weder 1 noch 0 selbst Elemente von M sind — M besitzt also weder Maximum noch Minimum, wohl aber Supremum und Infimum.",
        ],
      },
      {
        id: "8-3",
        heading: "8.3 Der Satz von Archimedes",
        body: [
          "Der Satz von Archimedes besagt: Zu jeder reellen Zahl x existiert eine natürliche Zahl n mit n>x — die natürlichen Zahlen sind in ℝ also nicht nach oben beschränkt. Formal folgt dies aus dem Vollständigkeitsaxiom: Wäre ℕ nach oben beschränkt, besäße ℕ ein Supremum s; dann wäre aber auch s−1 keine obere Schranke mehr, sodass ein n∈ℕ mit n>s−1 existiert — dann ist aber n+1>s, im Widerspruch dazu, dass s obere Schranke von ℕ sein sollte.",
          "Eine wichtige Folgerung: Zu jedem ε>0 existiert ein n∈ℕ mit 1/n<ε. Diese Folgerung wird ständig verwendet, um zu zeigen, dass eine Folge wie (1/n) gegen 0 konvergiert, und ist die Basis vieler ε-N-Beweise.",
        ],
        formulas: ["∀x∈R ∃n∈N: n>x", "∀ε>0 ∃n∈N: 1/n<ε"],
        formulasLatex: [
          "\\forall x\\in\\mathbb{R}\\,\\exists n\\in\\mathbb{N}: n>x",
          "\\forall \\varepsilon>0\\,\\exists n\\in\\mathbb{N}: \\dfrac{1}{n}<\\varepsilon",
        ],
        terms: [{ term: "Satz von Archimedes", definition: "Zu jeder reellen Zahl x existiert eine natürliche Zahl n mit n>x; N ist in R nicht nach oben beschränkt." }],
        examples: [
          "Für ε=0,00025 liefert der Satz von Archimedes ein n mit 1/n<0,00025, z. B. n=4001 (da 1/4001≈0,00024994<0,00025) — ein solches n existiert nach dem Satz garantiert, unabhängig davon, wie klein ε gewählt wird.",
        ],
      },
      {
        id: "8-4",
        heading: "8.4 Dichtheit von Q in R",
        body: [
          "ℚ liegt dicht in ℝ: Zwischen zwei beliebigen reellen Zahlen a<b liegt stets mindestens eine (und damit unendlich viele) rationale Zahl. Äquivalent dazu lässt sich jede reelle Zahl beliebig genau durch eine Folge rationaler Zahlen approximieren — jede reelle Zahl ist Grenzwert einer Folge rationaler Zahlen. Der Beweis dieser Dichtheit nutzt gerade den Satz von Archimedes aus Abschnitt 8.3, um eine passende rationale Zahl zwischen a und b explizit zu konstruieren.",
          "Diese Dichtheit ist praktisch bedeutsam, weil numerische Berechnungen (z. B. mit endlichen Dezimalzahlen) immer nur rationale Approximationen reeller Zahlen liefern können — die Dichtheit garantiert aber, dass diese Approximation beliebig genau gemacht werden kann.",
        ],
        terms: [{ term: "Dichtheit von ℚ in ℝ", definition: "Zwischen je zwei reellen Zahlen liegt mindestens eine rationale Zahl." }],
        examples: [
          "Zwischen den irrationalen Zahlen π und π+0,0001 liegt garantiert eine rationale Zahl, z. B. lässt sich π selbst beliebig genau durch die rationalen Dezimalapproximationen 3, 3.1, 3.14, 3.141, ... annähern.",
        ],
      },
    ],
  },
  // ==================== Kapitel 9 ====================
  {
    id: "folgen",
    number: 9,
    title: "Folgen",
    free: false,
    intro:
      "Folgen sind geordnete, unendliche Listen von Zahlen und der Ausgangspunkt für den zentralen Analysis-Begriff des Grenzwerts. Dieses Kapitel behandelt Konvergenz, Grenzwertsätze, wichtige Beispiele und die Eulersche Zahl.",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Konvergenz und Grenzwert",
        body: [
          "Eine Folge (aₙ) konvergiert gegen den Grenzwert a, wenn für jedes noch so kleine ε>0 ein Index N existiert, sodass |aₙ−a|<ε für alle n≥N gilt — die Folgenglieder kommen dem Grenzwert also beliebig nahe und bleiben ihm beliebig nahe. Man schreibt lim(n→∞) aₙ = a.",
          "Konvergiert eine Folge nicht gegen einen endlichen Grenzwert, heißt sie divergent. Eine wichtige notwendige (aber nicht hinreichende) Bedingung für Konvergenz ist Beschränktheit: jede konvergente Folge ist beschränkt, aber nicht jede beschränkte Folge konvergiert.",
        ],
        formulas: ["∀ε>0 ∃N: |aₙ−a|<ε für alle n≥N"],
        formulasLatex: ["\\forall \\varepsilon>0\\, \\exists N: |a_n - a| < \\varepsilon \\;\\forall n \\ge N"],
        terms: [{ term: "Konvergenz", definition: "Eigenschaft einer Folge, sich einem festen Grenzwert beliebig anzunähern." }],
        examples: [
          "Die Folge aₙ=1/n konvergiert gegen 0: Für ε=0,01 genügt N=101, da für alle n≥101 gilt |1/n−0|=1/n<0,01. Die Folge aₙ=(−1)ⁿ ist beschränkt, aber divergent, da sie zwischen −1 und 1 oszilliert.",
        ],
      },
      {
        id: "9-2",
        heading: "9.2 Grenzwertsätze",
        body: [
          "Konvergieren (aₙ)→a und (bₙ)→b, so gelten die Grenzwertsätze: lim(aₙ+bₙ) = a+b, lim(aₙ·bₙ) = a·b, und falls b≠0 (und bₙ≠0 ab einem Index) lim(aₙ/bₙ) = a/b. Diese Sätze erlauben es, komplizierte Grenzwerte aus einfacheren zusammenzusetzen, ohne jedes Mal auf die ε-N-Definition zurückgreifen zu müssen.",
          "Bei unbestimmten Ausdrücken (z. B. ∞/∞ oder 0·∞) versagen die einfachen Grenzwertsätze; hier helfen Umformungstricks wie das Ausklammern der höchsten Potenz im Nenner und Zähler.",
        ],
        formulas: ["lim(aₙ+bₙ) = lim aₙ + lim bₙ"],
        formulasLatex: ["\\lim_{n\\to\\infty}(a_n+b_n) = \\lim_{n\\to\\infty} a_n + \\lim_{n\\to\\infty} b_n"],
        examples: [
          "Für aₙ = (3n²+2)/(n²−1) klammert man n² in Zähler und Nenner aus: aₙ = (3+2/n²)/(1−1/n²) → (3+0)/(1−0) = 3 für n→∞.",
        ],
      },
      {
        id: "9-3",
        heading: "9.3 Monotonie und das Monotoniekriterium",
        body: [
          "Eine Folge heißt monoton wachsend, wenn aₙ₊₁≥aₙ für alle n gilt (streng, wenn > statt ≥), und monoton fallend im umgekehrten Fall. Das Monotoniekriterium besagt: Jede monoton wachsende, nach oben beschränkte Folge konvergiert (analog für monoton fallend und nach unten beschränkt) — eine direkte Konsequenz der Vollständigkeit von ℝ.",
          "Dieses Kriterium ist besonders nützlich, wenn man den Grenzwert einer rekursiv definierten Folge noch nicht kennt, aber Monotonie und Beschränktheit zeigen kann — die Konvergenz folgt dann bereits, bevor man den konkreten Grenzwert berechnet.",
        ],
        terms: [{ term: "Monotoniekriterium", definition: "Jede monotone, beschränkte Folge konvergiert." }],
        examples: [
          "Die rekursiv definierte Folge a₁=1, aₙ₊₁=√(2+aₙ) lässt sich per Induktion als monoton wachsend und durch 2 nach oben beschränkt zeigen; nach dem Monotoniekriterium konvergiert sie, und der Grenzwert löst a=√(2+a), also a=2.",
        ],
      },
      {
        id: "9-4",
        heading: "9.4 Die Eulersche Zahl",
        body: [
          "Die Folge aₙ=(1+1/n)ⁿ ist monoton wachsend und nach oben beschränkt (durch 3), konvergiert also nach dem Monotoniekriterium (Abschnitt 9.3). Ihr Grenzwert wird als die Eulersche Zahl e definiert: e := lim(n→∞) (1+1/n)ⁿ ≈ 2,71828. e ist eine der wichtigsten Konstanten der Analysis und Basis des natürlichen Logarithmus.",
          "Allgemeiner gilt für jedes feste x∈ℝ: lim(n→∞) (1+x/n)ⁿ = eˣ. Diese Formel verbindet den Folgengrenzwert direkt mit der Exponentialfunktion und wird u. a. in der Zinseszinsrechnung bei kontinuierlicher Verzinsung verwendet.",
        ],
        formulas: ["e = lim (1+1/n)ⁿ", "lim (1+x/n)ⁿ = eˣ"],
        formulasLatex: [
          "e = \\lim_{n\\to\\infty}\\left(1+\\dfrac{1}{n}\\right)^{n}",
          "\\lim_{n\\to\\infty}\\left(1+\\dfrac{x}{n}\\right)^{n} = e^{x}",
        ],
        terms: [{ term: "Eulersche Zahl e", definition: "e:=lim(1+1/n)ⁿ≈2,71828; Basis der natürlichen Exponentialfunktion." }],
        examples: [
          "Für x=2 liefert die Formel lim(1+2/n)ⁿ=e²≈7,389 — bereits für n=100 liegt (1+2/100)¹⁰⁰≈7,245 recht nahe an diesem Grenzwert.",
        ],
      },
    ],
  },
  // ==================== Kapitel 10 ====================
  {
    id: "teilfolgen-haeufungspunkte",
    number: 10,
    title: "Teilfolgen, Häufungspunkte und Cauchy-Folgen",
    free: false,
    intro:
      "Nicht jede Folge konvergiert — aber jede beschränkte Folge besitzt konvergente Teilfolgen. Dieses Kapitel behandelt dieses zentrale Resultat sowie zwei eng verwandte Konzepte: Cauchy-Folgen und die Größen Limes superior und Limes inferior.",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Teilfolgen und Häufungspunkte",
        body: [
          "Eine Teilfolge entsteht, indem man aus einer Folge (aₙ) eine unendliche Auswahl von Gliedern unter Beibehaltung der Reihenfolge herausgreift: (a_{n_k}) mit n₁<n₂<n₃<.... Ein Häufungspunkt einer Folge ist ein Wert, gegen den mindestens eine Teilfolge konvergiert.",
          "Konvergiert eine Folge insgesamt, besitzt sie genau einen Häufungspunkt (ihren Grenzwert), und jede Teilfolge konvergiert gegen denselben Wert. Divergente, aber beschränkte Folgen können dagegen mehrere Häufungspunkte besitzen.",
        ],
        terms: [{ term: "Häufungspunkt", definition: "Grenzwert mindestens einer konvergenten Teilfolge einer gegebenen Folge." }],
        examples: [
          "Die Folge aₙ=(−1)ⁿ besitzt zwei Häufungspunkte: 1 (Teilfolge der geraden Indizes) und −1 (Teilfolge der ungeraden Indizes) — sie konvergiert daher insgesamt nicht.",
        ],
      },
      {
        id: "10-2",
        heading: "10.2 Der Satz von Bolzano-Weierstraß",
        body: [
          "Der Satz von Bolzano-Weierstraß besagt: Jede beschränkte Folge reeller Zahlen besitzt mindestens eine konvergente Teilfolge. Dieses Resultat ist fundamental, weil es Konvergenz einer Teilfolge garantiert, selbst wenn die ursprüngliche Folge insgesamt nicht konvergiert.",
          "Der Satz wird typischerweise über wiederholte Intervallhalbierung bewiesen: Man halbiert ein die Folge enthaltendes Intervall wiederholt und wählt jeweils die Hälfte, die unendlich viele Folgenglieder enthält — die Intervalllängen schrumpfen gegen 0 und definieren so einen Häufungspunkt.",
        ],
        terms: [{ term: "Satz von Bolzano-Weierstraß", definition: "Jede beschränkte reelle Folge besitzt eine konvergente Teilfolge." }],
        examples: [
          "Die beschränkte, aber divergente Folge aₙ=sin(n) besitzt nach Bolzano-Weierstraß garantiert konvergente Teilfolgen, auch wenn sich diese nicht ohne Weiteres explizit angeben lassen.",
        ],
      },
      {
        id: "10-3",
        heading: "10.3 Cauchy-Folgen und das Cauchy-Kriterium",
        body: [
          "Eine Folge (aₙ) heißt Cauchy-Folge, wenn für jedes ε>0 ein Index N existiert, sodass |aₙ−aₘ|<ε für alle n,m≥N gilt — die Folgenglieder rücken also nicht nur einem festen Grenzwert näher, sondern auch zunehmend zusammen. Das Cauchy-Kriterium besagt: Eine reelle Folge konvergiert genau dann, wenn sie eine Cauchy-Folge ist.",
          "Der entscheidende Vorteil des Cauchy-Kriteriums gegenüber der gewöhnlichen Konvergenzdefinition: Man kann die Cauchy-Eigenschaft prüfen, ohne den (möglicherweise unbekannten) Grenzwert vorher zu kennen — man vergleicht nur die Folgenglieder untereinander.",
        ],
        formulas: ["∀ε>0 ∃N: |aₙ−aₘ|<ε für alle n,m≥N"],
        formulasLatex: ["\\forall \\varepsilon>0\\,\\exists N: |a_n - a_m| < \\varepsilon \\;\\forall n,m\\ge N"],
        terms: [{ term: "Cauchy-Folge", definition: "Folge, deren Glieder ab einem Index beliebig nahe beieinander liegen; auf R äquivalent zu Konvergenz." }],
        examples: [
          "Für aₙ=1/n gilt für n,m≥N: |1/n−1/m|≤1/n+1/m≤2/N. Zu ε=0,01 genügt N=200, denn dann ist 2/200=0,01 — die Folge ist also eine Cauchy-Folge, was mit ihrer bekannten Konvergenz gegen 0 übereinstimmt.",
        ],
      },
      {
        id: "10-4",
        heading: "10.4 Limes superior und Limes inferior",
        body: [
          "Für eine beschränkte Folge (aₙ) ist der Limes superior lim sup aₙ der größte Häufungspunkt der Folge, der Limes inferior lim inf aₙ der kleinste Häufungspunkt. Formal: lim sup aₙ = lim(n→∞) sup{aₖ : k≥n} (das Supremum der 'Schwänze' der Folge, das mit wachsendem n fällt oder gleich bleibt).",
          "Eine Folge konvergiert genau dann, wenn lim sup aₙ = lim inf aₙ gilt — in diesem Fall stimmen beide mit dem gewöhnlichen Grenzwert überein. Sind sie verschieden, besitzt die Folge mehrere Häufungspunkte und divergiert.",
        ],
        formulas: ["lim sup aₙ = lim(n→∞) sup{aₖ : k≥n}"],
        formulasLatex: ["\\limsup_{n\\to\\infty} a_n = \\lim_{n\\to\\infty} \\sup\\{a_k : k \\ge n\\}"],
        terms: [
          { term: "Limes superior", definition: "Größter Häufungspunkt einer beschränkten Folge." },
          { term: "Limes inferior", definition: "Kleinster Häufungspunkt einer beschränkten Folge." },
        ],
        examples: [
          "Die Folge aₙ=(−1)ⁿ·(1+1/n) hat die Häufungspunkte 1 (gerade n) und −1 (ungerade n): lim sup aₙ=1, lim inf aₙ=−1. Da beide verschieden sind, divergiert die Folge.",
        ],
      },
    ],
  },
  // ==================== Kapitel 11 ====================
  {
    id: "reihen",
    number: 11,
    title: "Reihen",
    free: false,
    intro:
      "Reihen sind unendliche Summen — auf den ersten Blick paradox, aber mit dem Konvergenzbegriff der Folgen präzise fassbar. Dieses Kapitel behandelt Konvergenzkriterien, die wichtigsten Standardreihen sowie weiterführende Techniken.",
    sections: [
      {
        id: "11-1",
        heading: "11.1 Reihen als Folgen von Partialsummen",
        body: [
          "Zu einer Folge (aₙ) definiert man die Partialsummen sₙ = a₁+a₂+...+aₙ. Die Reihe Σaₙ konvergiert per Definition genau dann, wenn die Folge der Partialsummen (sₙ) konvergiert; der Grenzwert heißt dann Summe der Reihe. Eine notwendige (nicht hinreichende) Bedingung für Konvergenz ist, dass aₙ→0 — das sogenannte Nullfolgenkriterium.",
          "Das Nullfolgenkriterium taugt nur zum Ausschluss von Konvergenz: geht aₙ nicht gegen 0, divergiert die Reihe garantiert. Geht aₙ gegen 0, ist damit über Konvergenz der Reihe noch nichts entschieden (Gegenbeispiel: harmonische Reihe).",
        ],
        terms: [{ term: "Partialsumme", definition: "Summe der ersten n Glieder einer Reihe, sₙ=a₁+...+aₙ." }],
        examples: [
          "Die Reihe Σ(1/n) (harmonische Reihe) erfüllt zwar aₙ=1/n→0, divergiert aber dennoch — ein klassisches Beispiel dafür, dass das Nullfolgenkriterium notwendig, aber nicht hinreichend ist.",
        ],
      },
      {
        id: "11-2",
        heading: "11.2 Die geometrische Reihe",
        body: [
          "Die geometrische Reihe Σqⁿ (n=0 bis ∞) konvergiert genau dann, wenn |q|<1, mit Summenwert 1/(1−q). Für |q|≥1 divergiert die Reihe. Die geometrische Reihe ist eine der wenigen Reihen, deren Summe sich in geschlossener Form explizit angeben lässt.",
          "Die endliche Partialsumme lautet sₙ = (1−qⁿ⁺¹)/(1−q) für q≠1; lässt man n→∞ gehen und nutzt qⁿ⁺¹→0 für |q|<1, ergibt sich direkt die Summenformel der unendlichen Reihe.",
        ],
        formulas: ["Σ(n=0,∞) qⁿ = 1/(1−q) für |q|<1"],
        formulasLatex: ["\\sum_{n=0}^{\\infty} q^{n} = \\dfrac{1}{1-q} \\quad (|q|<1)"],
        terms: [{ term: "Geometrische Reihe", definition: "Reihe der Form Σqⁿ; konvergiert für |q|<1 gegen 1/(1−q)." }],
        examples: [
          "Für q=1/2 gilt Σ(1/2)ⁿ = 1/(1−1/2) = 2. Für q=2 divergiert die Reihe, da die Summanden unbeschränkt wachsen.",
        ],
      },
      {
        id: "11-3",
        heading: "11.3 Konvergenzkriterien: Quotienten- und Wurzelkriterium",
        body: [
          "Das Quotientenkriterium: existiert lim|aₙ₊₁/aₙ| = L, so konvergiert Σaₙ absolut für L<1, divergiert für L>1 (für L=1 ist keine Aussage möglich). Das Wurzelkriterium: existiert lim ⁿ√|aₙ| = L, gelten dieselben Grenzfälle.",
          "Absolute Konvergenz (Konvergenz von Σ|aₙ|) ist eine stärkere Eigenschaft als einfache Konvergenz: sie garantiert zusätzlich, dass beliebige Umordnungen der Reihenglieder den Summenwert nicht verändern — bei nur bedingt konvergenten Reihen kann Umordnen dagegen den Summenwert verändern.",
        ],
        table: {
          caption: "Entscheidungsregel für Quotienten- und Wurzelkriterium",
          headers: ["L", "Ergebnis"],
          rows: [
            ["L < 1", "Reihe konvergiert absolut"],
            ["L > 1", "Reihe divergiert"],
            ["L = 1", "keine Aussage möglich (anderes Kriterium nötig)"],
          ],
        },
        formulas: ["L = lim |aₙ₊₁/aₙ|"],
        formulasLatex: ["L = \\lim_{n\\to\\infty} \\left|\\dfrac{a_{n+1}}{a_n}\\right|"],
        terms: [{ term: "Absolute Konvergenz", definition: "Konvergenz von Σ|aₙ|; stärker als einfache Konvergenz, unempfindlich gegenüber Umordnung." }],
        examples: [
          "Für aₙ = nⁿ/n! gilt |aₙ₊₁/aₙ| = (n+1)ⁿ/n^n → e ≈ 2,718 > 1 — nach dem Quotientenkriterium divergiert diese Reihe.",
        ],
      },
      {
        id: "11-4",
        heading: "11.4 Majoranten- und Minorantenkriterium",
        body: [
          "Das Majorantenkriterium: Gilt 0≤aₙ≤bₙ für fast alle n und konvergiert Σbₙ, so konvergiert auch Σaₙ (absolut). Das Minorantenkriterium: Gilt 0≤bₙ≤aₙ für fast alle n und divergiert Σbₙ, so divergiert auch Σaₙ. Beide Kriterien vergleichen eine unbekannte Reihe mit einer bereits bekannten (der harmonischen oder geometrischen Reihe).",
          "Die Kunst bei der Anwendung liegt darin, eine geeignete Vergleichsreihe zu finden — meist reicht es, den dominanten Term für große n zu betrachten und die restlichen Terme geeignet abzuschätzen.",
        ],
        formulas: ["0≤aₙ≤bₙ, Σbₙ konvergent ⇒ Σaₙ konvergent"],
        formulasLatex: ["0\\le a_n \\le b_n,\\ \\sum b_n \\text{ konvergent} \\;\\Rightarrow\\; \\sum a_n \\text{ konvergent}"],
        terms: [
          { term: "Majorantenkriterium", definition: "Ist eine Reihe gliedweise durch eine konvergente Reihe beschränkt, konvergiert sie ebenfalls (absolut)." },
          { term: "Minorantenkriterium", definition: "Ist eine Reihe gliedweise größer als eine divergente Reihe (mit nichtnegativen Gliedern), divergiert sie ebenfalls." },
        ],
        examples: [
          "Für aₙ=1/(n²+3) gilt aₙ≤1/n² für alle n≥1, und Σ1/n² konvergiert (bekannt) — nach dem Majorantenkriterium konvergiert also auch Σ1/(n²+3).",
        ],
      },
      {
        id: "11-5",
        heading: "11.5 Das Leibniz-Kriterium für alternierende Reihen",
        body: [
          "Eine alternierende Reihe hat die Form Σ(−1)ⁿaₙ mit aₙ≥0. Das Leibniz-Kriterium besagt: Ist (aₙ) monoton fallend mit aₙ→0, so konvergiert die alternierende Reihe Σ(−1)ⁿaₙ. Dies gilt auch dann, wenn Σaₙ selbst (ohne Vorzeichenwechsel) divergiert.",
          "Das Leibniz-Kriterium liefert daher Beispiele für bedingt konvergente Reihen — Reihen, die konvergieren, obwohl die Reihe der Absolutbeträge divergiert (z. B. die alternierende harmonische Reihe).",
        ],
        formulas: ["aₙ↓0 ⇒ Σ(−1)ⁿaₙ konvergiert"],
        formulasLatex: ["a_n \\downarrow 0 \\;\\Rightarrow\\; \\sum (-1)^n a_n \\text{ konvergiert}"],
        terms: [{ term: "Leibniz-Kriterium", definition: "Ist (aₙ) monoton fallend mit aₙ→0, konvergiert die alternierende Reihe Σ(−1)ⁿaₙ." }],
        examples: [
          "Die alternierende harmonische Reihe Σ(−1)ⁿ/n konvergiert nach Leibniz, da 1/n monoton fällt und gegen 0 geht — obwohl die harmonische Reihe Σ1/n selbst divergiert.",
        ],
      },
      {
        id: "11-6",
        heading: "11.6 Teleskopsummen",
        body: [
          "Eine Teleskopsumme liegt vor, wenn sich die Summanden als Differenz aₙ=bₙ−bₙ₊₁ schreiben lassen — dann heben sich bei der Partialsumme fast alle Terme gegenseitig auf: Σ(k=1,n)(bₖ−bₖ₊₁) = b₁−bₙ₊₁. Konvergiert (bₙ), lässt sich der Reihenwert direkt als b₁−lim bₙ ablesen, ohne ein allgemeines Konvergenzkriterium zu benötigen.",
          "Teleskopsummen treten häufig nach einer Partialbruchzerlegung auf, wenn ein Bruch der Form 1/(n(n+k)) in eine Differenz zweier einfacherer Brüche zerlegt wird.",
        ],
        formulas: ["Σ(k=1,n)(bₖ−bₖ₊₁) = b₁ − bₙ₊₁"],
        formulasLatex: ["\\sum_{k=1}^{n}(b_k - b_{k+1}) = b_1 - b_{n+1}"],
        terms: [{ term: "Teleskopsumme", definition: "Summe, deren Glieder sich als Differenz aufeinanderfolgender Werte schreiben lassen, sodass sich die Partialsumme auf den ersten und letzten Term reduziert." }],
        examples: [
          "Für Σ(n=1,∞) 1/(n(n+1)) liefert die Partialbruchzerlegung 1/(n(n+1))=1/n−1/(n+1), also bₙ=1/n. Die Reihe teleskopiert zu b₁−lim bₙ = 1−0 = 1.",
        ],
      },
      {
        id: "11-7",
        heading: "11.7 Das Cauchy-Produkt zweier Reihen",
        body: [
          "Das Cauchy-Produkt zweier Reihen Σaₙ und Σbₙ ist definiert als die Reihe Σcₙ mit cₙ = Σ(k=0,n) aₖ·bₙ₋ₖ — man multipliziert die beiden Reihen formal aus und fasst alle Terme mit gleichem Gesamtindex n zusammen. Sind beide Ausgangsreihen absolut konvergent, so ist auch das Cauchy-Produkt konvergent mit Σcₙ = (Σaₙ)·(Σbₙ).",
          "Ohne absolute Konvergenz kann das Cauchy-Produkt divergieren, selbst wenn beide Ausgangsreihen konvergieren — absolute Konvergenz ist hier also eine echte zusätzliche Voraussetzung, nicht nur eine Vereinfachung.",
        ],
        formulas: ["cₙ = Σ(k=0,n) aₖ·bₙ₋ₖ"],
        formulasLatex: ["c_n = \\sum_{k=0}^{n} a_k \\, b_{n-k}"],
        terms: [{ term: "Cauchy-Produkt", definition: "Produktreihe Σcₙ zweier Reihen Σaₙ, Σbₙ mit cₙ=Σ(k=0,n)aₖbₙ₋ₖ; bei absoluter Konvergenz beider Reihen gleich dem Produkt der Summen." }],
        examples: [
          "Für die geometrische Reihe Σxⁿ (|x|<1) mit sich selbst liefert das Cauchy-Produkt cₙ=Σ(k=0,n)xᵏ·xⁿ⁻ᵏ=(n+1)xⁿ, also Σ(n+1)xⁿ = (Σxⁿ)² = 1/(1−x)² — eine bekannte Formel für die Ableitung der geometrischen Reihe.",
        ],
      },
    ],
  },
  // ==================== Kapitel 12 ====================
  {
    id: "potenzreihen-spezielle-funktionen",
    number: 12,
    title: "Potenzreihen und spezielle Funktionen",
    free: false,
    intro:
      "Potenzreihen verallgemeinern Polynome zu unendlichen Reihen und liefern damit die Grundlage, um wichtige nichtpolynomiale Funktionen (Exponentialfunktion, Sinus, Kosinus) exakt zu definieren — samt ihrer wichtigsten strukturellen Eigenschaften wie Periodizität und Additionstheoremen.",
    sections: [
      {
        id: "12-1",
        heading: "12.1 Potenzreihen und Konvergenzradius",
        body: [
          "Eine Potenzreihe hat die Form Σaₙ(x−x₀)ⁿ. Zu jeder Potenzreihe existiert ein Konvergenzradius R∈[0,∞], sodass die Reihe für |x−x₀|<R absolut konvergiert und für |x−x₀|>R divergiert (der Randfall |x−x₀|=R muss gesondert untersucht werden). R lässt sich häufig über R = lim|aₙ/aₙ₊₁| (falls dieser Grenzwert existiert) berechnen.",
          "Der Konvergenzradius bestimmt das größte Intervall um den Entwicklungspunkt x₀, auf dem die Potenzreihe eine wohldefinierte Funktion darstellt — außerhalb dieses Intervalls ist die Reihe schlicht nicht auswertbar.",
        ],
        formulas: ["R = lim |aₙ / aₙ₊₁|"],
        formulasLatex: ["R = \\lim_{n\\to\\infty} \\left|\\dfrac{a_n}{a_{n+1}}\\right|"],
        terms: [{ term: "Konvergenzradius", definition: "Radius, innerhalb dessen eine Potenzreihe absolut konvergiert." }],
        examples: [
          "Für die Potenzreihe Σxⁿ/n! ist aₙ=1/n!, also R = lim (1/n!)/(1/(n+1)!) = lim(n+1) = ∞ — diese Reihe konvergiert für jedes reelle x (es handelt sich um die Exponentialreihe).",
        ],
      },
      {
        id: "12-2",
        heading: "12.2 Die Exponentialreihe",
        body: [
          "Die Exponentialfunktion lässt sich über ihre Potenzreihe definieren: exp(x) = Σ(n=0,∞) xⁿ/n! = 1+x+x²/2!+x³/3!+.... Diese Reihe konvergiert für alle x∈ℝ (Konvergenzradius R=∞) und erfüllt die Funktionalgleichung exp(x+y) = exp(x)·exp(y).",
          "Die Eulersche Zahl e ergibt sich als Spezialfall e = exp(1) = Σ1/n! ≈ 2,71828 — konsistent mit der über Folgen definierten Eulerschen Zahl aus Abschnitt 9.4. Die Reihendefinition erlaubt es, exp auch für komplexe Argumente zu definieren und liefert (mit x=iφ) direkt die Eulersche Formel als Verbindung zu Sinus und Kosinus.",
        ],
        formulas: ["exp(x) = Σ(n=0,∞) xⁿ/n!"],
        formulasLatex: ["\\exp(x) = \\sum_{n=0}^{\\infty} \\dfrac{x^{n}}{n!}"],
        terms: [{ term: "Exponentialreihe", definition: "Potenzreihendarstellung Σxⁿ/n! der Exponentialfunktion; konvergiert für alle x∈ℝ." }],
        examples: [
          "Nähert man exp(1) durch die ersten 5 Summanden an: 1+1+1/2+1/6+1/24 = 2,7083 — bereits nahe am wahren Wert e≈2,71828, mit jedem weiteren Summanden wächst die Genauigkeit.",
        ],
      },
      {
        id: "12-3",
        heading: "12.3 Sinus- und Kosinusreihe",
        body: [
          "Analog zur Exponentialreihe lassen sich Sinus und Kosinus über Potenzreihen definieren: sin(x) = Σ(n=0,∞) (−1)ⁿx²ⁿ⁺¹/(2n+1)! und cos(x) = Σ(n=0,∞) (−1)ⁿx²ⁿ/(2n)!. Beide Reihen konvergieren für alle x∈ℝ.",
          "Diese Reihendefinitionen sind der rigorose Ersatz für die anschauliche Definition über rechtwinklige Dreiecke am Einheitskreis und ermöglichen es, Sinus und Kosinus analytisch (z. B. für Ableitungen, Integrale, komplexe Argumente) zu behandeln.",
        ],
        formulas: ["sin(x) = Σ(n=0,∞) (−1)ⁿx²ⁿ⁺¹/(2n+1)!", "cos(x) = Σ(n=0,∞) (−1)ⁿx²ⁿ/(2n)!"],
        formulasLatex: [
          "\\sin(x) = \\sum_{n=0}^{\\infty} \\dfrac{(-1)^{n}x^{2n+1}}{(2n+1)!}",
          "\\cos(x) = \\sum_{n=0}^{\\infty} \\dfrac{(-1)^{n}x^{2n}}{(2n)!}",
        ],
        terms: [{ term: "Sinusreihe", definition: "Potenzreihendarstellung der Sinusfunktion, konvergiert für alle x∈ℝ." }],
        examples: [
          "Nähert man sin(x) für kleines x durch die ersten beiden Glieder an: sin(x) ≈ x − x³/6. Für x=0,1 ergibt das sin(0,1) ≈ 0,1 − 0,000167 = 0,099833, sehr nahe am exakten Wert.",
          "Nähert man cos(x) für x=0,2 durch die ersten beiden Glieder an: cos(x) ≈ 1 − x²/2 = 1 − 0,02 = 0,98, sehr nahe am exakten Wert cos(0,2)≈0,98007.",
        ],
      },
      {
        id: "12-4",
        heading: "12.4 Periodizität und Nullstellen von Sinus und Kosinus",
        body: [
          "Sinus und Kosinus sind periodisch mit der (kleinsten) Periode 2π: sin(x+2π)=sin(x) und cos(x+2π)=cos(x) für alle x. Für eine skalierte Variante sin(cx) (c≠0) ergibt sich die kleinste Periode a aus c·a=2π, also a=2π/c.",
          "Die Nullstellenmengen lauten sin(x)=0 ⇔ x=kπ (k∈Z) und cos(x)=0 ⇔ x=π/2+kπ (k∈Z). Bei einer skalierten Variante wie cos(cx) verschieben sich diese Nullstellen entsprechend um den Faktor 1/c.",
        ],
        formulas: ["Periode a von sin(cx): a = 2π/c", "cos(x)=0 ⇔ x = π/2 + kπ, k∈Z"],
        formulasLatex: [
          "a = \\dfrac{2\\pi}{c}",
          "\\cos(x)=0 \\iff x = \\dfrac{\\pi}{2} + k\\pi,\\ k\\in\\mathbb{Z}",
        ],
        terms: [{ term: "Periode", definition: "Kleinste positive Zahl a mit f(x+a)=f(x) für alle x." }],
        examples: [
          "Die Funktion f(x)=sin(4x) hat wegen c=4 die kleinste Periode a=2π/4=π/2 — bereits nach einer Vierteldrehung des ursprünglichen Sinus wiederholt sich das Muster.",
        ],
      },
      {
        id: "12-5",
        heading: "12.5 Gerade und ungerade Funktionen",
        body: [
          "Eine Funktion f heißt gerade, wenn f(−x)=f(x) für alle x im Definitionsbereich gilt (der Graph ist spiegelsymmetrisch zur y-Achse), und ungerade, wenn f(−x)=−f(x) gilt (punktsymmetrisch zum Ursprung). Kosinus ist gerade (cos(−x)=cos(x)), Sinus ist ungerade (sin(−x)=−sin(x)).",
          "Eine ungerade Funktion erfüllt zwingend f(0)=0 (aus f(−0)=−f(0) folgt f(0)=−f(0), also 2f(0)=0). Für gerade Funktionen gibt es dagegen keine erzwungene Aussage über f(0) — cos(0)=1≠0 ist ein Gegenbeispiel.",
        ],
        terms: [
          { term: "Gerade Funktion", definition: "f(−x)=f(x) für alle x; Graph spiegelsymmetrisch zur y-Achse." },
          { term: "Ungerade Funktion", definition: "f(−x)=−f(x) für alle x; erzwingt f(0)=0." },
        ],
        examples: [
          "Für f(x)=x⁴−3x²+1 gilt f(−x)=(−x)⁴−3(−x)²+1=x⁴−3x²+1=f(x) — f ist gerade. Für g(x)=x³−2x gilt g(−x)=−x³+2x=−(x³−2x)=−g(x) — g ist ungerade und erfüllt g(0)=0.",
        ],
      },
      {
        id: "12-6",
        heading: "12.6 Additionstheoreme",
        body: [
          "Für Sinus und Kosinus gelten die Additionstheoreme sin(x+y) = sin(x)cos(y)+cos(x)sin(y) und cos(x+y) = cos(x)cos(y)−sin(x)sin(y). Sie lassen sich aus den Potenzreihen (Abschnitt 12.3) über das Cauchy-Produkt (Abschnitt 11.7) herleiten und sind das zentrale Werkzeug, um trigonometrische Ausdrücke bei verschobenem oder verdoppeltem Argument umzuformen.",
          "Ein wichtiger Spezialfall (x=y) liefert die Doppelwinkelformeln sin(2x)=2sin(x)cos(x) und cos(2x)=cos²(x)−sin²(x).",
        ],
        formulas: ["sin(x+y) = sin(x)cos(y) + cos(x)sin(y)", "cos(x+y) = cos(x)cos(y) − sin(x)sin(y)"],
        formulasLatex: [
          "\\sin(x+y) = \\sin(x)\\cos(y) + \\cos(x)\\sin(y)",
          "\\cos(x+y) = \\cos(x)\\cos(y) - \\sin(x)\\sin(y)",
        ],
        terms: [{ term: "Additionstheorem", definition: "Formel zur Berechnung von sin/cos einer Winkelsumme aus den Werten der Einzelwinkel." }],
        examples: [
          "Mit x=y=π/4 liefert das Doppelwinkeltheorem sin(π/2)=2sin(π/4)cos(π/4)=2·(√2/2)·(√2/2)=2·(1/2)=1 — der bekannte Wert sin(π/2)=1 wird so bestätigt.",
        ],
      },
    ],
  },
];
