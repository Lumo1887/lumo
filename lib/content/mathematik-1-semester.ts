import type { SkriptChapter } from "./types";

// Hinweis zur Kapitelreihenfolge: Die Reihenfolge und Nummerierung hier
// folgt bewusst NICHT 1:1 der Reihenfolge der Vorlesungsfolien. Der
// Exkurs "Gruppen, Ringe und Körper" steht hier z. B. direkt nach der
// Mengenlehre statt (wie in der Vorlesung) an die reellen Zahlen angehängt
// zu sein, und Abbildungen werden erst nach der vollständigen Induktion
// behandelt statt direkt nach den Relationen. Die Nummerierung ist
// eigenständig und Querverweise im Text beziehen sich auf diese neue
// Reihenfolge.
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 — Aussagenlogik ====================
  {
    id: "aussagenlogik",
    number: 1,
    title: "Aussagenlogik",
    free: true,
    intro:
      "Jede mathematische Theorie steht und fällt mit der Präzision ihrer Sprache. Bevor wir in Kapitel 2 über Mengen und später über Zahlen, Folgen und Reihen sprechen, brauchen wir deshalb ein Werkzeug, mit dem sich Behauptungen eindeutig formulieren und ihre Wahrheit lückenlos begründen lässt: die Aussagenlogik. Sie liefert das Vokabular für jeden Beweis, der in diesem Skript folgt.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Aussagen und Wahrheitswerte",
        body: [
          "Eine Aussage ist ein sprachliches Gebilde, dem eindeutig genau einer der Wahrheitswerte wahr (w) oder falsch (f) zugeordnet werden kann. 'Es regnet' ist umgangssprachlich keine Aussage in diesem Sinn (der Wahrheitswert hängt von Ort und Zeit ab), wohl aber '7 ist eine Primzahl' oder '2 + 2 = 5'.",
          "Fragen, Befehle und Ausrufe sind keine Aussagen, da ihnen kein Wahrheitswert zukommt. Aus einfachen Aussagen lassen sich mit Hilfe von Junktoren komplexere Aussagen zusammensetzen — das ist der Gegenstand des nächsten Abschnitts.",
        ],
        terms: [
          {
            term: "Aussage",
            definition: "Ein sprachliches Gebilde, dem genau einer der Wahrheitswerte wahr oder falsch zugeordnet werden kann.",
          },
          {
            term: "Wahrheitswert",
            definition: "Der Wert w (wahr) oder f (falsch), den eine Aussage annimmt.",
          },
        ],
        examples: [
          "'23 ist eine ungerade Zahl' ist eine wahre Aussage. 'Jede gerade Zahl größer als 2 ist eine Primzahl' ist eine falsche Aussage (Gegenbeispiel: 4).",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Junktoren und Wahrheitstafeln",
        body: [
          "Aus Aussagen A, B werden mit Junktoren neue Aussagen gebildet: die Negation ¬A ('nicht A'), die Konjunktion A ∧ B ('A und B'), die Disjunktion A ∨ B ('A oder B', nicht ausschließend), die Implikation A ⇒ B ('wenn A, dann B') und die Äquivalenz A ⇔ B ('A genau dann, wenn B'). Der Wahrheitswert der zusammengesetzten Aussage hängt dabei ausschließlich von den Wahrheitswerten von A und B ab und lässt sich in einer Wahrheitstafel vollständig auflisten.",
          "Besonders gewöhnungsbedürftig ist die Implikation: A ⇒ B ist nur dann falsch, wenn A wahr und B falsch ist. Ist A bereits falsch, so ist A ⇒ B automatisch wahr — unabhängig vom Wahrheitswert von B ('ex falso quodlibet').",
        ],
        terms: [
          {
            term: "Konjunktion A ∧ B",
            definition: "Wahr genau dann, wenn sowohl A als auch B wahr sind.",
          },
          {
            term: "Disjunktion A ∨ B",
            definition: "Wahr genau dann, wenn mindestens eine der beiden Aussagen A, B wahr ist (nicht-ausschließendes Oder).",
          },
          {
            term: "Implikation A ⇒ B",
            definition: "Falsch genau dann, wenn A wahr und B falsch ist; in allen anderen Fällen wahr.",
          },
        ],
        examples: [
          "'Wenn 5 gerade ist, dann ist 3 eine Primzahl' ist als Implikation wahr, obwohl die Prämisse '5 ist gerade' falsch ist — die Implikation als Ganzes bewertet nur den Zusammenhang, nicht die einzelnen Bestandteile.",
        ],
      },
      {
        id: "1-3",
        heading: "1.3 Äquivalenzumformungen: De Morgan und Kontraposition",
        body: [
          "Zwei zusammengesetzte Aussagen heißen logisch äquivalent, wenn sie unter jeder möglichen Belegung ihrer Bestandteile denselben Wahrheitswert annehmen — nachweisbar durch den Vergleich der vollständigen Wahrheitstafeln. Zwei Äquivalenzen werden in fast jedem Beweis dieses Skripts implizit verwendet.",
          "Die Regeln von De Morgan übersetzen Negationen von Konjunktionen bzw. Disjunktionen: ¬(A ∧ B) ⇔ (¬A) ∨ (¬B) und ¬(A ∨ B) ⇔ (¬A) ∧ (¬B). Die Kontraposition liefert eine zur Implikation äquivalente, oft leichter zu zeigende Aussage: A ⇒ B ist äquivalent zu (¬B) ⇒ (¬A). Ein Beweis 'durch Kontraposition' nutzt genau diese Äquivalenz.",
        ],
        formulas: [
          "¬(A ∧ B) ⇔ ¬A ∨ ¬B",
          "¬(A ∨ B) ⇔ ¬A ∧ ¬B",
          "(A ⇒ B) ⇔ (¬B ⇒ ¬A)",
        ],
        formulasLatex: [
          "\\neg(A \\land B) \\iff \\neg A \\lor \\neg B",
          "\\neg(A \\lor B) \\iff \\neg A \\land \\neg B",
          "(A \\Rightarrow B) \\iff (\\neg B \\Rightarrow \\neg A)",
        ],
        terms: [
          {
            term: "Kontraposition",
            definition: "Die zu A ⇒ B logisch äquivalente Aussage ¬B ⇒ ¬A; oft der einfachere Weg, eine Implikation zu beweisen.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 2 — Mengenlehre ====================
  {
    id: "mengenlehre",
    number: 2,
    title: "Mengenlehre",
    free: false,
    intro:
      "Mengen sind der gemeinsame Grundbaustein fast aller mathematischen Objekte, die in diesem Skript vorkommen — von den natürlichen Zahlen über Relationen und Abbildungen bis zu den reellen Zahlen. Dieses Kapitel legt mit der Sprache der Aussagenlogik aus Kapitel 1 die grundlegenden Begriffe und Operationen der Mengenlehre fest.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Mengen, Elemente und Teilmengen",
        body: [
          "Nach der (naiven) Mengendefinition von Georg Cantor ist eine Menge eine Zusammenfassung bestimmter, wohlunterschiedener Objekte unserer Anschauung oder unseres Denkens zu einem Ganzen. Diese Objekte heißen Elemente der Menge. Man schreibt x ∈ M, falls x Element von M ist, und x ∉ M sonst.",
          "Mengen lassen sich durch Aufzählung ihrer Elemente (z. B. M = {1, 2, 3}) oder durch eine definierende Eigenschaft (z. B. M = {x ∈ N : x ist gerade}) angeben. Eine Menge A heißt Teilmenge von B (A ⊂ B), falls jedes Element von A auch Element von B ist. Gilt A ⊂ B und B ⊂ A, so sind A und B gleich.",
        ],
        terms: [
          {
            term: "Menge",
            definition: "Eine Zusammenfassung wohlunterschiedener Objekte (Elemente) zu einem Ganzen.",
          },
          {
            term: "Teilmenge A ⊂ B",
            definition: "Jedes Element von A ist auch Element von B.",
          },
          {
            term: "Leere Menge ∅",
            definition: "Die eindeutig bestimmte Menge, die kein Element enthält; Teilmenge jeder Menge.",
          },
        ],
        examples: [
          "Für M := {n ∈ Z : n² ≤ 9} gilt M = {−3, −2, −1, 0, 1, 2, 3}.",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Vereinigung, Durchschnitt und Differenz",
        body: [
          "Aus zwei Mengen A, B (Teilmengen einer Grundmenge Ω) lassen sich mit den Junktoren aus Kapitel 1 neue Mengen bilden: die Vereinigung A ∪ B = {x : x ∈ A ∨ x ∈ B}, der Durchschnitt A ∩ B = {x : x ∈ A ∧ x ∈ B} und die Differenz A \\ B = {x ∈ A : x ∉ B}. Ist A ⊂ Ω, so heißt Ω \\ A das Komplement von A (bezüglich Ω), geschrieben Aᶜ.",
          "Die Regeln von De Morgan aus Abschnitt 1.3 übertragen sich direkt auf Mengenoperationen: (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ und (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ. Zwei Mengen A, B heißen disjunkt, falls A ∩ B = ∅.",
        ],
        formulas: [
          "(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ",
          "(A ∩ B)ᶜ = Aᶜ ∪ Bᶜ",
        ],
        formulasLatex: [
          "(A \\cup B)^c = A^c \\cap B^c",
          "(A \\cap B)^c = A^c \\cup B^c",
        ],
        terms: [
          {
            term: "Disjunkte Mengen",
            definition: "Zwei Mengen A, B mit A ∩ B = ∅.",
          },
        ],
        examples: [
          "Für A = {1, 2, 3, 4} und B = {3, 4, 5} gilt A ∪ B = {1, 2, 3, 4, 5}, A ∩ B = {3, 4} und A \\ B = {1, 2}.",
        ],
      },
      {
        id: "2-3",
        heading: "2.3 Kartesisches Produkt und Potenzmenge",
        body: [
          "Das kartesische Produkt A × B zweier Mengen ist die Menge aller geordneten Paare (a, b) mit a ∈ A und b ∈ B. Für endliche Mengen gilt |A × B| = |A| · |B|, wobei |M| die Kardinalität (Anzahl der Elemente) von M bezeichnet. Das kartesische Produkt ist die Grundlage für den Begriff der Relation in Kapitel 4.",
          "Die Potenzmenge P(M) einer Menge M ist die Menge aller Teilmengen von M, einschließlich ∅ und M selbst. Für eine endliche Menge M mit |M| = n Elementen gilt |P(M)| = 2ⁿ — jedes Element ist entweder in einer Teilmenge enthalten oder nicht, was 2 unabhängige Möglichkeiten pro Element und damit 2ⁿ Kombinationen ergibt.",
        ],
        formulas: ["|A × B| = |A| · |B|", "|P(M)| = 2^|M|"],
        formulasLatex: ["|A \\times B| = |A|\\cdot|B|", "|\\mathcal{P}(M)| = 2^{|M|}"],
        terms: [
          {
            term: "Kartesisches Produkt A × B",
            definition: "Die Menge aller geordneten Paare (a, b) mit a ∈ A, b ∈ B.",
          },
          {
            term: "Potenzmenge P(M)",
            definition: "Die Menge aller Teilmengen von M.",
          },
        ],
        examples: [
          "Für M = {1, 2} ist P(M) = {∅, {1}, {2}, {1, 2}}, also |P(M)| = 4 = 2².",
        ],
      },
    ],
  },

  // ==================== Kapitel 3 — Exkurs: Gruppen, Ringe, Körper ====================
  {
    id: "gruppen-ringe-koerper",
    number: 3,
    title: "Exkurs: Gruppen, Ringe und Körper",
    free: false,
    intro:
      "Bevor wir in späteren Kapiteln mit den reellen Zahlen rechnen, lohnt sich ein Blick auf die abstrakte Struktur, die hinter dem Rechnen mit Zahlen steckt. Dieser Exkurs führt Verknüpfungsgebilde wie Gruppen, Ringe und Körper ein — Begriffe, die zeigen, welche der vertrauten Rechengesetze wirklich benötigt werden, damit z. B. Gleichungen eindeutig lösbar sind.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Verknüpfungen und Halbgruppen",
        body: [
          "Eine (innere zweistellige) Verknüpfung auf einer nichtleeren Menge G ist eine Abbildung ∗: G × G → G, (a, b) ↦ a ∗ b. Das Paar (G, ∗) heißt Halbgruppe, falls die Verknüpfung assoziativ ist: (a ∗ b) ∗ c = a ∗ (b ∗ c) für alle a, b, c ∈ G.",
          "Assoziativität allein garantiert noch keine Umkehrbarkeit der Verknüpfung. (N, +) ist zum Beispiel eine Halbgruppe, aber zu 3 gibt es kein n ∈ N mit 3 + n = 0 — die Gleichung ist innerhalb von N nicht lösbar.",
        ],
        terms: [
          {
            term: "Verknüpfung",
            definition: "Eine Abbildung ∗: G × G → G, die zwei Elementen von G eindeutig ein drittes Element von G zuordnet.",
          },
          {
            term: "Halbgruppe (G, ∗)",
            definition: "Eine Menge G mit einer assoziativen Verknüpfung ∗.",
          },
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Gruppen und abelsche Gruppen",
        body: [
          "Eine Halbgruppe (G, ∗) heißt Gruppe, wenn zusätzlich ein neutrales Element e ∈ G existiert mit e ∗ a = a ∗ e = a für alle a ∈ G, und wenn zu jedem a ∈ G ein inverses Element a⁻¹ ∈ G existiert mit a ∗ a⁻¹ = a⁻¹ ∗ a = e. Gilt zusätzlich a ∗ b = b ∗ a für alle a, b ∈ G (Kommutativität), so heißt (G, ∗) abelsche (oder kommutative) Gruppe.",
          "(Z, +), (Q, +) und (R, +) sind abelsche Gruppen mit neutralem Element 0. (Q \\ {0}, ·) und (R \\ {0}, ·) sind ebenfalls abelsche Gruppen, diesmal mit neutralem Element 1. (N, +) ist dagegen keine Gruppe, da inverse Elemente fehlen.",
        ],
        formulas: ["e ∗ a = a ∗ e = a", "a ∗ a⁻¹ = a⁻¹ ∗ a = e"],
        formulasLatex: ["e * a = a * e = a", "a * a^{-1} = a^{-1} * a = e"],
        terms: [
          {
            term: "Neutrales Element",
            definition: "Ein Element e ∈ G mit e ∗ a = a ∗ e = a für alle a ∈ G.",
          },
          {
            term: "Inverses Element zu a",
            definition: "Ein Element a⁻¹ ∈ G mit a ∗ a⁻¹ = a⁻¹ ∗ a = e.",
          },
          {
            term: "Abelsche Gruppe",
            definition: "Eine Gruppe, in der die Verknüpfung zusätzlich kommutativ ist.",
          },
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Ringe und Körper",
        body: [
          "Ein Ring (R, +, ·) besteht aus einer Menge R mit zwei Verknüpfungen, sodass (R, +) eine abelsche Gruppe ist, · assoziativ ist und die Distributivgesetze a · (b + c) = a·b + a·c sowie (a + b) · c = a·c + b·c gelten. Ist · zusätzlich kommutativ, spricht man von einem kommutativen Ring; besitzt · ein neutrales Element (die '1'), von einem Ring mit Eins.",
          "Ein Körper (K, +, ·) ist ein kommutativer Ring mit Eins, in dem zusätzlich (K \\ {0}, ·) eine abelsche Gruppe ist — jedes Element außer der 0 besitzt also ein multiplikatives Inverses. Q und R sind mit den gewohnten Operationen Körper; der kleinste Körper überhaupt ist F₂ = {0, 1} mit der Addition und Multiplikation modulo 2. Diese algebraische Struktur wird in Kapitel 8 wieder aufgegriffen, wenn wir die reellen Zahlen als vollständigen angeordneten Körper charakterisieren.",
        ],
        terms: [
          {
            term: "Ring (R, +, ·)",
            definition: "(R, +) ist abelsche Gruppe, · ist assoziativ, und es gelten die Distributivgesetze.",
          },
          {
            term: "Körper (K, +, ·)",
            definition: "Ein kommutativer Ring mit Eins, in dem jedes Element außer 0 ein multiplikatives Inverses besitzt.",
          },
        ],
        examples: [
          "F₂ = {0, 1} mit 1 + 1 := 0 ist der kleinste Körper: jede der beiden Körperaxiom-Gruppen lässt sich anhand einer 2×2-Verknüpfungstabelle direkt nachrechnen.",
        ],
      },
    ],
  },

  // ==================== Kapitel 4 — Relationen ====================
  {
    id: "relationen",
    number: 4,
    title: "Relationen",
    free: false,
    intro:
      "Mit dem kartesischen Produkt aus Kapitel 2 lässt sich präzise fassen, was es bedeutet, dass zwei Objekte 'in Beziehung stehen'. Relationen verallgemeinern damit Konzepte wie Gleichheit, Kleiner-Gleich oder Teilbarkeit und liefern insbesondere mit den Äquivalenzrelationen ein Werkzeug, um Mengen sinnvoll in Klassen einzuteilen.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Relationen und ihre Eigenschaften",
        body: [
          "Eine (zweistellige) Relation R auf einer Menge M ist eine Teilmenge R ⊂ M × M. Statt (x, y) ∈ R schreibt man häufig xRy. Relationen können verschiedene Eigenschaften besitzen: R heißt reflexiv, falls xRx für alle x ∈ M gilt; symmetrisch, falls aus xRy stets yRx folgt; antisymmetrisch, falls aus xRy und yRx stets x = y folgt; und transitiv, falls aus xRy und yRz stets xRz folgt.",
          "Diese vier Eigenschaften sind unabhängig voneinander und werden in unterschiedlichen Kombinationen für die beiden wichtigsten Relationstypen benötigt: Äquivalenzrelationen (Abschnitt 4.2) und Ordnungsrelationen (Abschnitt 4.3).",
        ],
        terms: [
          {
            term: "Relation R auf M",
            definition: "Eine Teilmenge R ⊂ M × M.",
          },
          {
            term: "Reflexiv / symmetrisch / antisymmetrisch / transitiv",
            definition: "Vier grundlegende Eigenschaften, die eine Relation erfüllen kann oder nicht — siehe Fließtext für die genauen Definitionen.",
          },
        ],
        examples: [
          "Auf Z ist die Relation x R y :⇔ x ≤ y reflexiv, antisymmetrisch und transitiv, aber nicht symmetrisch (2 ≤ 3, aber nicht 3 ≤ 2).",
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Äquivalenzrelationen und Äquivalenzklassen",
        body: [
          "Eine Relation, die reflexiv, symmetrisch und transitiv ist, heißt Äquivalenzrelation. Zu jedem x ∈ M gehört dann die Äquivalenzklasse [x] := {y ∈ M : xRy}. Äquivalenzklassen partitionieren M vollständig: Je zwei Äquivalenzklassen sind entweder identisch oder disjunkt, und ihre Vereinigung ergibt ganz M.",
          "Ein Standardbeispiel ist die Kongruenzrelation modulo m auf Z: x ≡ y (mod m) :⇔ m teilt (x − y). Sie ist mit Addition und Multiplikation verträglich, das heißt aus x₁ ≡ x₂ und y₁ ≡ y₂ (mod m) folgt x₁ + y₁ ≡ x₂ + y₂ (mod m) sowie x₁y₁ ≡ x₂y₂ (mod m).",
        ],
        terms: [
          {
            term: "Äquivalenzrelation",
            definition: "Eine reflexive, symmetrische und transitive Relation.",
          },
          {
            term: "Äquivalenzklasse [x]",
            definition: "Die Menge aller zu x äquivalenten Elemente: [x] = {y ∈ M : xRy}.",
          },
        ],
        examples: [
          "Modulo 3 zerfällt Z in genau drei Äquivalenzklassen: [0] = {..., −3, 0, 3, 6, ...}, [1] = {..., −2, 1, 4, 7, ...}, [2] = {..., −1, 2, 5, 8, ...}.",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Ordnungsrelationen",
        body: [
          "Eine Relation, die reflexiv, antisymmetrisch und transitiv ist, heißt Ordnungsrelation (oder partielle Ordnung). Im Gegensatz zu einer totalen Ordnung müssen bei einer partiellen Ordnung nicht je zwei Elemente vergleichbar sein — es kann x, y ∈ M geben mit weder xRy noch yRx.",
          "Die übliche Kleiner-Gleich-Relation ≤ auf R ist eine totale Ordnung: je zwei reelle Zahlen sind vergleichbar. Die Teilmengenrelation ⊂ auf der Potenzmenge P(M) einer Menge M mit mindestens zwei Elementen ist dagegen nur eine partielle Ordnung: für disjunkte, nichtleere A, B ⊂ M gilt weder A ⊂ B noch B ⊂ A.",
        ],
        terms: [
          {
            term: "Ordnungsrelation",
            definition: "Eine reflexive, antisymmetrische und transitive Relation.",
          },
          {
            term: "Totale Ordnung",
            definition: "Eine Ordnungsrelation, bei der je zwei Elemente vergleichbar sind.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 5 — Vollständige Induktion ====================
  {
    id: "induktion",
    number: 5,
    title: "Die natürlichen Zahlen und vollständige Induktion",
    free: false,
    intro:
      "Die natürlichen Zahlen N = {1, 2, 3, ...} scheinen intuitiv klar, doch um Aussagen über 'alle' natürlichen Zahlen rigoros zu beweisen, braucht es ein eigenes Beweisprinzip: die vollständige Induktion. Sie wird im weiteren Verlauf des Skripts immer wieder verwendet, etwa bei Summenformeln in der Kombinatorik (Kapitel 7) und bei zentralen Ungleichungen im Kapitel über Folgen (Kapitel 9).",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Das Induktionsprinzip",
        body: [
          "Das Induktionsaxiom (eines der Peano-Axiome) besagt: Ist T ⊂ N eine Teilmenge mit 1 ∈ T, und folgt aus n ∈ T stets n + 1 ∈ T, so ist T = N. Anschaulich: Wenn eine 'Kette' bei 1 beginnt und von jedem Glied zum nächsten fortgesetzt werden kann, erreicht sie jede natürliche Zahl.",
          "Aus diesem Axiom leitet sich das Beweisverfahren der vollständigen Induktion ab: Um eine Aussage A(n) für alle n ∈ N (oder alle n ≥ n₀) zu zeigen, genügt es, den Induktionsanfang A(n₀) zu zeigen und im Induktionsschritt für beliebiges n ≥ n₀ die Implikation A(n) ⇒ A(n+1) nachzuweisen — wobei A(n) im Schritt als Induktionsvoraussetzung angenommen werden darf.",
        ],
        terms: [
          {
            term: "Induktionsanfang",
            definition: "Der Nachweis, dass die Aussage A(n) für den kleinsten betrachteten Index n₀ gilt.",
          },
          {
            term: "Induktionsschritt",
            definition: "Der Nachweis der Implikation A(n) ⇒ A(n+1) für beliebiges n ≥ n₀, unter Annahme der Induktionsvoraussetzung A(n).",
          },
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Ein vollständiger Induktionsbeweis: die Gaußsche Summenformel",
        body: [
          "Als Musterbeispiel zeigen wir für alle n ∈ N die Aussage A(n): 1 + 2 + ... + n = n(n+1)/2.",
          "Induktionsanfang (n=1): Die linke Seite ist 1, die rechte Seite ist 1·2/2 = 1 — A(1) gilt.",
          "Induktionsschritt: Es gelte A(n) für ein beliebiges n ∈ N. Dann folgt Σ_{k=1}^{n+1} k = Σ_{k=1}^{n} k + (n+1) = n(n+1)/2 + (n+1) = (n+1)(n/2 + 1) = (n+1)(n+2)/2, was genau A(n+1) ist. Damit ist die Aussage für alle n ∈ N durch vollständige Induktion bewiesen.",
        ],
        formulas: ["Σ_{k=1}^{n} k = n(n+1)/2"],
        formulasLatex: ["\\sum_{k=1}^{n} k = \\dfrac{n(n+1)}{2}"],
      },
      {
        id: "5-3",
        heading: "5.3 Vollständige Induktion bei Ungleichungen",
        body: [
          "Vollständige Induktion eignet sich nicht nur für Gleichungen, sondern ebenso für Ungleichungen. Ein zentrales Beispiel, das in Kapitel 9 bei der Konvergenz geometrischer Folgen benötigt wird, ist die Bernoulli-Ungleichung: Für alle x ≥ −1 und alle n ∈ N₀ gilt (1 + x)ⁿ ≥ 1 + nx.",
          "Der Induktionsanfang (n = 0) liefert 1 ≥ 1. Im Induktionsschritt multipliziert man die Induktionsvoraussetzung (1+x)ⁿ ≥ 1 + nx (gültig für ein n) mit dem nichtnegativen Faktor (1+x) und schätzt das entstehende quadratische Glied nx² ≥ 0 nach unten durch 0 ab, um (1+x)^{n+1} ≥ 1 + (n+1)x zu erhalten.",
        ],
        formulas: ["(1 + x)ⁿ ≥ 1 + n·x für x ≥ −1, n ∈ N₀"],
        formulasLatex: ["(1+x)^n \\ge 1 + nx \\quad \\text{für } x \\ge -1"],
      },
    ],
  },

  // ==================== Kapitel 6 — Abbildungen ====================
  {
    id: "abbildungen",
    number: 6,
    title: "Abbildungen",
    free: false,
    intro:
      "Abbildungen sind Relationen (Kapitel 4) mit einer zusätzlichen Eindeutigkeitsanforderung und gehören zu den am häufigsten verwendeten Objekten der Mathematik — von einfachen Funktionsvorschriften bis zu den Folgen in Kapitel 9, die selbst nichts anderes als Abbildungen von N nach R sind. Dieses Kapitel führt die zentralen Eigenschaften Injektivität, Surjektivität und Bijektivität ein.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Abbildungen, Definitions- und Wertebereich",
        body: [
          "Eine Abbildung (oder Funktion) f: A → B ordnet jedem Element x ∈ A genau ein Element f(x) ∈ B zu. A heißt Definitionsbereich, B Wertebereich (oder Zielmenge) von f. Als Relation aufgefasst ist f eine Teilmenge von A × B, in der zu jedem a ∈ A genau ein Paar (a, f(a)) vorkommt — das unterscheidet Abbildungen von allgemeinen Relationen.",
          "Zwei Abbildungen f, g: A → B sind genau dann gleich, wenn f(x) = g(x) für alle x ∈ A gilt.",
        ],
        terms: [
          {
            term: "Abbildung f: A → B",
            definition: "Eine Zuordnungsvorschrift, die jedem x ∈ A genau ein f(x) ∈ B zuordnet.",
          },
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Injektivität, Surjektivität, Bijektivität",
        body: [
          "Eine Abbildung f: A → B heißt injektiv, falls aus f(x₁) = f(x₂) stets x₁ = x₂ folgt — verschiedene Elemente werden also stets auf verschiedene Elemente abgebildet. Sie heißt surjektiv, falls es zu jedem b ∈ B ein x ∈ A gibt mit f(x) = b, das heißt, wenn der Wertebereich vollständig 'ausgeschöpft' wird. Ist f sowohl injektiv als auch surjektiv, heißt f bijektiv.",
          "Nur bijektive Abbildungen besitzen eine Umkehrabbildung f⁻¹: B → A. Für endliche Mengen A, B mit |A| = |B| ist eine Abbildung f: A → B bereits genau dann bijektiv, wenn sie injektiv ist (und äquivalent dazu, wenn sie surjektiv ist).",
        ],
        terms: [
          {
            term: "Injektiv",
            definition: "f(x₁) = f(x₂) impliziert x₁ = x₂.",
          },
          {
            term: "Surjektiv",
            definition: "Zu jedem b ∈ B existiert ein x ∈ A mit f(x) = b.",
          },
          {
            term: "Bijektiv",
            definition: "Injektiv und surjektiv zugleich; genau dann existiert eine Umkehrabbildung.",
          },
        ],
        examples: [
          "f: R → R, f(x) = x² ist weder injektiv (f(1) = f(−1)) noch surjektiv (negative Werte werden nicht getroffen). Schränkt man auf f: [0,∞) → [0,∞) ein, wird f bijektiv mit Umkehrabbildung f⁻¹(y) = √y.",
        ],
      },
      {
        id: "6-3",
        heading: "6.3 Bild, Urbild und Verkettung",
        body: [
          "Für eine Abbildung f: A → B und Teilmengen M ⊂ A, N ⊂ B definiert man das Bild f(M) := {f(x) : x ∈ M} ⊂ B sowie das Urbild f⁻¹(N) := {x ∈ A : f(x) ∈ N} ⊂ A. Achtung: f⁻¹(N) ist hier als Menge definiert und setzt keine Umkehrabbildung voraus — auch nicht-bijektive Abbildungen besitzen Urbilder von Mengen.",
          "Sind f: A → B und g: B → C Abbildungen, so ist die Verkettung g ∘ f: A → C, x ↦ g(f(x)) definiert. Sind f und g beide injektiv (bzw. surjektiv), so ist auch g ∘ f injektiv (bzw. surjektiv) — diese Vererbungseigenschaft wird beim Zählen von Abbildungen in Kapitel 7 nützlich.",
        ],
        formulas: ["f(M) = {f(x) : x ∈ M}", "f⁻¹(N) = {x ∈ A : f(x) ∈ N}"],
        formulasLatex: ["f(M) = \\{f(x) : x\\in M\\}", "f^{-1}(N) = \\{x\\in A : f(x)\\in N\\}"],
        terms: [
          {
            term: "Verkettung g ∘ f",
            definition: "Die Abbildung x ↦ g(f(x)), definiert für f: A→B, g: B→C.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 7 — Kombinatorik und Laplace-Modell ====================
  {
    id: "kombinatorik",
    number: 7,
    title: "Kombinatorik und das Laplace-Modell",
    free: false,
    intro:
      "Die Kombinatorik beantwortet die Frage, wie viele Möglichkeiten es für bestimmte Anordnungen oder Auswahlen gibt — ein Handwerkszeug, das sowohl in der Wahrscheinlichkeitsrechnung als auch beim Abzählen von Abbildungen zwischen endlichen Mengen (Kapitel 6) unverzichtbar ist. Am Ende des Kapitels führt dies direkt zum Laplace-Modell für Zufallsexperimente mit endlich vielen, gleichwahrscheinlichen Ausgängen.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Permutationen und Fakultät",
        body: [
          "Die Anzahl der Möglichkeiten, n unterscheidbare Objekte in einer Reihenfolge anzuordnen (Permutationen), ist n! := 1 · 2 · ... · n (mit der Konvention 0! := 1). Diese Formel folgt durch ein einfaches Abzählargument: Für die erste Position gibt es n Möglichkeiten, für die zweite noch n−1, und so weiter — ein Argument, das sich auch als Induktion über n formalisieren lässt (vgl. Kapitel 5).",
        ],
        formulas: ["n! = 1 · 2 · ... · n"],
        formulasLatex: ["n! = 1\\cdot 2\\cdots n"],
        terms: [
          {
            term: "Fakultät n!",
            definition: "Die Anzahl der Anordnungen (Permutationen) von n unterscheidbaren Objekten.",
          },
        ],
        examples: [
          "4 Bücher lassen sich auf 4! = 24 verschiedene Arten in ein Regal einsortieren.",
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Binomialkoeffizient und binomische Formel",
        body: [
          "Der Binomialkoeffizient C(n,k) = n!/(k!(n−k)!) (auch geschrieben als \"n über k\") gibt die Anzahl der k-elementigen Teilmengen einer n-elementigen Menge an — die Reihenfolge der Auswahl spielt also keine Rolle. Die Werte lassen sich rekursiv im Pascalschen Dreieck über C(n,k) = C(n−1,k−1) + C(n−1,k) erzeugen.",
          "Die binomische Formel verallgemeinert die bekannten binomischen Formeln zweiten Grades auf beliebige Exponenten: (a+b)ⁿ = Σ_{k=0}^{n} C(n,k) aᵏ b^{n−k}. Sie lässt sich per vollständiger Induktion über n beweisen, wobei im Induktionsschritt genau die Rekursionsformel für die Binomialkoeffizienten verwendet wird.",
        ],
        formulas: ["C(n,k) = n! / (k!(n−k)!)", "(a+b)ⁿ = Σ_{k=0}^{n} C(n,k) aᵏ b^{n−k}"],
        formulasLatex: [
          "\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}",
          "(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^k b^{n-k}",
        ],
        terms: [
          {
            term: "Binomialkoeffizient C(n,k)",
            definition: "Die Anzahl der k-elementigen Teilmengen einer n-elementigen Menge.",
          },
        ],
        examples: [
          "Aus einem 6er-Team werden 2 Personen für ein Projekt ausgewählt: C(6,2) = 15 mögliche Paare.",
        ],
      },
      {
        id: "7-3",
        heading: "7.3 Variationen und Kombinationen mit und ohne Wiederholung",
        body: [
          "Neben Permutationen und dem klassischen Binomialkoeffizienten (Kombination ohne Wiederholung) unterscheidet man weitere Abzählmodelle: Variationen ohne Wiederholung (Ziehen von k aus n Elementen mit Reihenfolge, ohne Zurücklegen: n!/(n−k)!), Variationen mit Wiederholung (mit Zurücklegen: nᵏ) und Kombinationen mit Wiederholung (Ziehen von k aus n ohne Reihenfolge, mit Zurücklegen: C(n+k−1, k)).",
          "Welches Modell zutrifft, entscheidet sich an zwei Fragen: Kommt es auf die Reihenfolge an, und darf ein Element mehrfach gewählt werden?",
        ],
        terms: [
          {
            term: "Variation mit Wiederholung",
            definition: "Anzahl geordneter k-Tupel aus n Elementen mit Zurücklegen: nᵏ.",
          },
          {
            term: "Kombination mit Wiederholung",
            definition: "Anzahl ungeordneter Auswahlen von k aus n Elementen mit Zurücklegen: C(n+k−1, k).",
          },
        ],
        examples: [
          "Ein 3-stelliges Zahlenschloss mit Ziffern 0–9 (Wiederholung erlaubt, Reihenfolge zählt) hat 10³ = 1000 Kombinationen.",
        ],
      },
      {
        id: "7-4",
        heading: "7.4 Das Laplace-Modell",
        body: [
          "Ein Zufallsexperiment mit endlichem Ergebnisraum Ω, bei dem jedes Elementarereignis gleich wahrscheinlich ist, heißt Laplace-Experiment. Für ein Ereignis A ⊂ Ω gilt dann P(A) = |A| / |Ω| — 'Anzahl der günstigen Fälle durch Anzahl der möglichen Fälle'. Genau hier zahlt sich die Kombinatorik der vorigen Abschnitte aus: Sowohl |A| als auch |Ω| lassen sich häufig nur mit Permutationen, Binomialkoeffizienten oder den Variations-/Kombinationsformeln bestimmen.",
        ],
        formulas: ["P(A) = |A| / |Ω|"],
        formulasLatex: ["P(A) = \\dfrac{|A|}{|\\Omega|}"],
        terms: [
          {
            term: "Laplace-Experiment",
            definition: "Ein Zufallsexperiment mit endlichem Ergebnisraum Ω, bei dem alle Elementarereignisse gleich wahrscheinlich sind.",
          },
        ],
        examples: [
          "Beim einmaligen Wurf zweier fairer Würfel ist Ω = {1,...,6}², |Ω| = 36. Für A = 'Augensumme gleich 8' gilt A = {(2,6),(3,5),(4,4),(5,3),(6,2)}, also P(A) = 5/36.",
        ],
      },
    ],
  },

  // ==================== Kapitel 8 — Die reellen Zahlen ====================
  {
    id: "reelle-zahlen",
    number: 8,
    title: "Die reellen Zahlen",
    free: false,
    intro:
      "Mit dem Körperbegriff aus Kapitel 3 im Gepäck lässt sich genau beschreiben, was die reellen Zahlen R vor den rationalen Zahlen Q auszeichnet: die Vollständigkeit. Dieses Kapitel führt Schranken, Supremum und Infimum ein und formuliert das Vollständigkeitsaxiom — die Eigenschaft, ohne die die spätere Konvergenztheorie für Folgen (Kapitel 9) nicht funktionieren würde.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Von N über Z und Q zu R",
        body: [
          "Die natürlichen Zahlen N (Kapitel 5) reichen nicht aus, um Subtraktion uneingeschränkt zu erklären; die ganzen Zahlen Z = {..., −2, −1, 0, 1, 2, ...} beheben das. Q, die Menge aller Brüche p/q mit p ∈ Z, q ∈ N, ergänzt Division. Sowohl (Z, +, ·) als auch (Q, +, ·) sind Ringe bzw. — im Fall von Q — sogar ein Körper im Sinne von Kapitel 3.",
          "Doch Q hat eine Lücke: Es gibt kein x ∈ Q mit x² = 2 (ein klassischer Widerspruchsbeweis über die Primfaktorzerlegung zeigt das). Die reellen Zahlen R schließen genau diese Lücken und bilden — wie im nächsten Abschnitt präzisiert wird — einen vollständigen angeordneten Körper.",
        ],
      },
      {
        id: "8-2",
        heading: "8.2 Angeordneter Körper und Dreiecksungleichung",
        body: [
          "R ist ein angeordneter Körper: Es gibt eine totale Ordnung ≤ (im Sinne von Kapitel 4), die mit den Körperoperationen verträglich ist, d. h. aus x ≤ y folgt x+z ≤ y+z für alle z, und aus x ≤ y und 0 ≤ z folgt x·z ≤ y·z. Aus diesen wenigen Axiomen lassen sich alle vertrauten Ungleichungsregeln herleiten, etwa dass x² ≥ 0 für alle x ∈ R gilt.",
          "Der Betrag |x| (definiert als x für x ≥ 0 und −x für x < 0) erfüllt die Dreiecksungleichung |x + y| ≤ |x| + |y| für alle x, y ∈ R. Sie ist eines der am häufigsten verwendeten Werkzeuge in Konvergenzbeweisen ab Kapitel 9.",
        ],
        formulas: ["|x + y| ≤ |x| + |y|"],
        formulasLatex: ["|x+y| \\le |x| + |y|"],
        terms: [
          {
            term: "Angeordneter Körper",
            definition: "Ein Körper mit einer totalen Ordnung, die mit Addition und Multiplikation verträglich ist.",
          },
          {
            term: "Dreiecksungleichung",
            definition: "|x + y| ≤ |x| + |y| für alle x, y ∈ R.",
          },
        ],
      },
      {
        id: "8-3",
        heading: "8.3 Schranken, Supremum, Infimum und das Vollständigkeitsaxiom",
        body: [
          "Eine Menge M ⊂ R heißt nach oben beschränkt, falls es s ∈ R gibt mit x ≤ s für alle x ∈ M; ein solches s heißt obere Schranke. Analog definiert man untere Schranken und nach unten beschränkte Mengen. Die kleinste obere Schranke heißt Supremum (sup M), die größte untere Schranke Infimum (inf M). Gehört das Supremum selbst zu M, so heißt es Maximum; analog für das Infimum und Minimum.",
          "Das Vollständigkeitsaxiom (Axiom O4) ist die entscheidende Eigenschaft von R gegenüber Q: Jede nach oben beschränkte, nichtleere Teilmenge M ⊂ R besitzt ein Supremum in R. Für Q gilt das nicht — die Menge {q ∈ Q : q² < 2} ist in Q nach oben beschränkt, besitzt dort aber kein Supremum, da √2 ∉ Q.",
        ],
        terms: [
          {
            term: "Supremum sup M",
            definition: "Die kleinste obere Schranke von M.",
          },
          {
            term: "Infimum inf M",
            definition: "Die größte untere Schranke von M.",
          },
          {
            term: "Vollständigkeitsaxiom",
            definition: "Jede nichtleere, nach oben beschränkte Teilmenge von R besitzt ein Supremum in R.",
          },
        ],
        examples: [
          "Für M = (−∞, 5) gilt sup M = 5, aber M besitzt kein Maximum, da 5 ∉ M.",
        ],
      },
      {
        id: "8-4",
        heading: "8.4 Der Satz von Archimedes",
        body: [
          "Aus dem Vollständigkeitsaxiom folgt der Satz von Archimedes: Zu jeder reellen Zahl x gibt es ein n ∈ N mit n > x — N ist also in R nicht nach oben beschränkt. Der Beweis erfolgt indirekt: Wäre N nach oben beschränkt, besäße N nach Axiom O4 ein Supremum s. Dann wäre aber auch s − 1 keine obere Schranke mehr, es gäbe also ein m ∈ N mit m > s − 1, also m + 1 > s — im Widerspruch dazu, dass s obere Schranke von N ist.",
          "Der Satz von Archimedes ist die Grundlage für viele Grenzwertargumente in Kapitel 9, insbesondere für den Nachweis, dass (1/n)_{n∈N} eine Nullfolge ist.",
        ],
      },
    ],
  },

  // ==================== Kapitel 9 — Folgen ====================
  {
    id: "folgen",
    number: 9,
    title: "Folgen",
    free: false,
    intro:
      "Mit den reellen Zahlen und insbesondere dem Vollständigkeitsaxiom aus Kapitel 8 ausgestattet, können wir jetzt den zentralen Begriff der Analysis einführen: die Konvergenz einer Folge. Dieses Kapitel entwickelt den Grenzwertbegriff, die wichtigsten Rechenregeln sowie die Eulersche Zahl e — Werkzeuge, die in den Kapiteln 10 bis 13 durchgehend gebraucht werden.",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Der Folgenbegriff",
        body: [
          "Eine (reelle) Folge ist eine Abbildung a: N → R (vgl. Kapitel 6), meist geschrieben als (aₙ)_{n∈N} mit aₙ := a(n). Folgen können explizit (durch eine Formel für aₙ) oder rekursiv (durch einen Startwert und eine Vorschrift aₙ₊₁ = f(aₙ)) gegeben sein.",
          "Ein klassisches Beispiel einer rekursiven Folge ist die Fibonacci-Folge: a₁ = a₂ = 1, aₙ₊₂ = aₙ₊₁ + aₙ. Für sie existiert auch eine explizite (geschlossene) Formel, die sogenannte Formel von Binet.",
        ],
        terms: [
          {
            term: "Folge (aₙ)_{n∈N}",
            definition: "Eine Abbildung N → R, n ↦ aₙ.",
          },
          {
            term: "Rekursive Folge",
            definition: "Eine Folge, die durch einen (oder mehrere) Startwert(e) und eine Rekursionsvorschrift aₙ₊₁ = f(aₙ, ..., aₙ₋ₖ) definiert ist.",
          },
        ],
      },
      {
        id: "9-2",
        heading: "9.2 Konvergenz und Grenzwert",
        body: [
          "Eine Folge (aₙ) heißt konvergent gegen α ∈ R, geschrieben aₙ → α oder lim_{n→∞} aₙ = α, falls es zu jedem ε > 0 ein n₀ ∈ N gibt, sodass |aₙ − α| < ε für alle n ≥ n₀. Anschaulich: Die Folgenglieder rücken beliebig nah an α heran und bleiben dort. Der Grenzwert einer konvergenten Folge ist eindeutig bestimmt.",
          "Eine Folge, die gegen 0 konvergiert, heißt Nullfolge. Jede konvergente Folge ist beschränkt (die Umkehrung gilt nicht, wie das alternierende Beispiel aₙ = (−1)ⁿ zeigt).",
        ],
        formulas: ["∀ε>0 ∃n₀∈N ∀n≥n₀: |aₙ − α| < ε"],
        formulasLatex: ["\\forall \\varepsilon>0\\ \\exists n_0\\in\\mathbb N\\ \\forall n\\ge n_0:\\ |a_n-\\alpha|<\\varepsilon"],
        terms: [
          {
            term: "Konvergenz",
            definition: "aₙ → α, falls zu jedem ε > 0 ein n₀ existiert mit |aₙ − α| < ε für alle n ≥ n₀.",
          },
          {
            term: "Nullfolge",
            definition: "Eine Folge mit Grenzwert 0.",
          },
        ],
        examples: [
          "Die harmonische Folge aₙ = 1/n ist eine Nullfolge: Zu ε > 0 wähle man (mit dem Satz von Archimedes aus Kapitel 8) n₀ > 1/ε.",
        ],
      },
      {
        id: "9-3",
        heading: "9.3 Rechenregeln für Grenzwerte und der Sandwichsatz",
        body: [
          "Sind (aₙ), (bₙ) konvergent mit aₙ → α, bₙ → β, so gilt: (aₙ + bₙ) → α + β, (aₙ · bₙ) → α · β, und, falls β ≠ 0, (aₙ/bₙ) → α/β. Diese Regeln erlauben es, Grenzwerte komplizierter Ausdrücke aus bekannten Grenzwerten (etwa 1/n → 0) zusammenzusetzen, ohne jedes Mal die ε-Definition neu zu bemühen.",
          "Der Sandwichsatz (Einschließungskriterium) besagt: Gilt aₙ ≤ cₙ ≤ bₙ für fast alle n und konvergieren (aₙ), (bₙ) beide gegen denselben Grenzwert α, so konvergiert auch (cₙ) gegen α. Dieses Kriterium ist oft der einfachste Weg, die Konvergenz einer unhandlichen Folge nachzuweisen.",
        ],
        terms: [
          {
            term: "Sandwichsatz",
            definition: "Aus aₙ ≤ cₙ ≤ bₙ und aₙ, bₙ → α folgt cₙ → α.",
          },
        ],
      },
      {
        id: "9-4",
        heading: "9.4 Monotonie, Beschränktheit und monotone Konvergenz",
        body: [
          "Eine Folge (aₙ) heißt monoton wachsend, falls aₙ ≤ aₙ₊₁ für alle n gilt (streng, falls sogar aₙ < aₙ₊₁); analog monoton fallend. Der Satz über monotone Konvergenz ist einer der wichtigsten Sätze dieses Kapitels: Jede monoton wachsende, nach oben beschränkte Folge konvergiert, und zwar gegen ihr Supremum. Analog konvergiert jede monoton fallende, nach unten beschränkte Folge gegen ihr Infimum.",
          "Dieser Satz nutzt direkt das Vollständigkeitsaxiom aus Kapitel 8: Ohne die Existenz des Supremums in R gäbe es keinen Kandidaten für den Grenzwert. Ein Beweis über Bernoullis Ungleichung (Kapitel 5) zeigt zudem, dass für |q| < 1 stets qⁿ → 0 gilt — ein Baustein für die geometrische Reihe in Kapitel 11.",
        ],
        terms: [
          {
            term: "Monoton wachsend / fallend",
            definition: "aₙ ≤ aₙ₊₁ für alle n (bzw. aₙ ≥ aₙ₊₁).",
          },
          {
            term: "Satz über monotone Konvergenz",
            definition: "Jede monotone und beschränkte Folge konvergiert (gegen ihr Supremum bzw. Infimum).",
          },
        ],
      },
      {
        id: "9-5",
        heading: "9.5 Die Eulersche Zahl e",
        body: [
          "Die Folgen aₙ := (1 + 1/n)ⁿ und bₙ := (1 + 1/n)^{n+1} spielen eine Sonderrolle: Man zeigt (mithilfe der Bernoulli-Ungleichung), dass (aₙ) monoton wächst und (bₙ) monoton fällt, sowie aₙ < bₙ für alle n. Nach dem Satz über monotone Konvergenz konvergieren beide Folgen, und zwar gegen denselben Grenzwert — dieser wird als die Eulersche Zahl e definiert (e ≈ 2,71828).",
          "Über den Grenzwert lim_{n→∞} (1 + x/n)ⁿ = eˣ für x ∈ Q lässt sich die Exponentialfunktion zunächst für rationale Argumente einführen; Kapitel 13 setzt diese Konstruktion mit einer Potenzreihendarstellung fort, die für alle x ∈ R funktioniert.",
        ],
        formulas: ["e := lim_{n→∞} (1 + 1/n)ⁿ"],
        formulasLatex: ["e := \\lim_{n\\to\\infty}\\left(1+\\dfrac1n\\right)^n"],
        terms: [
          {
            term: "Eulersche Zahl e",
            definition: "Der gemeinsame Grenzwert der Folgen (1+1/n)ⁿ und (1+1/n)^{n+1}.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 10 — Teilfolgen, Häufungspunkte, Q dicht in R ====================
  {
    id: "teilfolgen-haeufungspunkte",
    number: 10,
    title: "Teilfolgen, Häufungspunkte und die Dichtheit von Q in R",
    free: false,
    intro:
      "Nicht jede Folge konvergiert — aber jede beschränkte Folge enthält, wie dieses Kapitel zeigt, zumindest eine konvergente Teilfolge. Die daraus entwickelten Begriffe Häufungspunkt, Limes superior und Limes inferior verfeinern den Konvergenzbegriff aus Kapitel 9 und bereiten wichtige Konvergenzkriterien für Reihen in Kapitel 11 vor.",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Teilfolgen und der Satz von Bolzano-Weierstrass",
        body: [
          "Eine Teilfolge von (aₙ)_{n∈N} entsteht, indem man eine streng monoton wachsende Indexfolge (nₖ)_{k∈N} wählt und die Folge (a_{nₖ})_{k∈N} betrachtet. Konvergiert (aₙ) gegen α, so konvergiert auch jede Teilfolge gegen α.",
          "Der Satz von Bolzano-Weierstrass ist zentral: Jede beschränkte Folge reeller Zahlen besitzt eine konvergente Teilfolge. Der Beweis konstruiert über eine Intervallschachtelung (fortgesetzte Halbierung eines Intervalls, das unendlich viele Folgenglieder enthält) einen Häufungspunkt.",
        ],
        terms: [
          {
            term: "Teilfolge",
            definition: "Eine Folge (a_{nₖ})_{k∈N}, die durch Auswahl einer streng monoton wachsenden Indexfolge aus (aₙ) entsteht.",
          },
          {
            term: "Satz von Bolzano-Weierstrass",
            definition: "Jede beschränkte reelle Folge besitzt eine konvergente Teilfolge.",
          },
        ],
      },
      {
        id: "10-2",
        heading: "10.2 Cauchy-Folgen",
        body: [
          "Eine Folge (aₙ) heißt Cauchy-Folge, falls es zu jedem ε > 0 ein n₀ gibt, sodass |aₙ − aₘ| < ε für alle n, m ≥ n₀ — die Folgenglieder rücken also untereinander beliebig nah zusammen, ohne dass ein Grenzwert von vornherein bekannt sein muss. Das Cauchy-Kriterium besagt: Eine reelle Folge ist genau dann konvergent, wenn sie eine Cauchy-Folge ist.",
          "Dieses Kriterium ist besonders wertvoll, weil es Konvergenz nachweist, ohne den Grenzwert selbst zu kennen — ein Werkzeug, das in Kapitel 11 zum Cauchy-Kriterium für Reihen weiterentwickelt wird.",
        ],
        terms: [
          {
            term: "Cauchy-Folge",
            definition: "∀ε>0 ∃n₀ ∀n,m≥n₀: |aₙ − aₘ| < ε.",
          },
          {
            term: "Cauchy-Kriterium",
            definition: "Eine reelle Folge konvergiert genau dann, wenn sie eine Cauchy-Folge ist.",
          },
        ],
      },
      {
        id: "10-3",
        heading: "10.3 Häufungspunkte, Limes superior und Limes inferior",
        body: [
          "Ein Wert h heißt Häufungspunkt der Folge (aₙ), falls eine Teilfolge von (aₙ) gegen h konvergiert. Eine konvergente Folge hat genau einen Häufungspunkt (ihren Grenzwert); Folgen ohne Grenzwert können jedoch mehrere Häufungspunkte besitzen, z. B. hat aₙ = (−1)ⁿ die beiden Häufungspunkte −1 und 1.",
          "Für eine beschränkte Folge sind Limes superior (lim sup aₙ, der größte Häufungspunkt) und Limes inferior (lim inf aₙ, der kleinste Häufungspunkt) stets wohldefiniert. Es gilt: (aₙ) konvergiert genau dann, wenn lim sup aₙ = lim inf aₙ.",
        ],
        terms: [
          {
            term: "Häufungspunkt",
            definition: "Ein Wert h, gegen den eine Teilfolge von (aₙ) konvergiert.",
          },
          {
            term: "Limes superior / inferior",
            definition: "Der größte bzw. kleinste Häufungspunkt einer beschränkten Folge.",
          },
        ],
        examples: [
          "Für aₙ := (−1)ⁿ · (1 + 1/n) gilt lim sup aₙ = 1 (Häufungspunkt über die geraden Indizes) und lim inf aₙ = −1 (über die ungeraden Indizes).",
        ],
      },
      {
        id: "10-4",
        heading: "10.4 Exkurs: Die Dichtheit von Q in R",
        body: [
          "Q liegt dicht in R: Zu jeder reellen Zahl x und jedem ε > 0 gibt es ein q ∈ Q mit |x − q| < ε — reelle Zahlen lassen sich also beliebig genau durch rationale Zahlen approximieren, etwa durch abgeschnittene Dezimalbruchentwicklungen.",
          "Diese Dichtheit hat eine bemerkenswerte Konsequenz: Zählt man Q ∩ [0,1] als Folge auf (was möglich ist, da Q abzählbar ist), so besitzt diese Folge unendlich viele Häufungspunkte — genauer ist jeder Punkt aus [0,1] ein Häufungspunkt, da jede noch so kleine Umgebung unendlich viele rationale Zahlen enthält. Insbesondere gilt für eine solche Aufzählung lim inf = 0 und lim sup = 1.",
        ],
        terms: [
          {
            term: "Dichtheit von Q in R",
            definition: "Zu jedem x ∈ R und ε > 0 existiert ein q ∈ Q mit |x − q| < ε.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 11 — Reihen ====================
  {
    id: "reihen",
    number: 11,
    title: "Reihen",
    free: false,
    intro:
      "Eine Reihe ist nichts anderes als eine Folge von Partialsummen — und damit lässt sich die gesamte Konvergenztheorie aus den Kapiteln 9 und 10 direkt anwenden. Dieses Kapitel entwickelt die wichtigsten Konvergenzkriterien für Reihen, von der geometrischen Reihe bis zum Wurzelkriterium, und schließt mit dem Cauchy-Produkt als Werkzeug für die Exponentialfunktion in Kapitel 13.",
    sections: [
      {
        id: "11-1",
        heading: "11.1 Partialsummen und die geometrische Reihe",
        body: [
          "Zu einer Folge (aₖ) heißt die Folge der Partialsummen sₙ := Σ_{k=1}^{n} aₖ die (unendliche) Reihe Σ_{k=1}^{∞} aₖ. Konvergiert (sₙ), so heißt die Reihe konvergent mit Reihenwert lim_{n→∞} sₙ; andernfalls divergent. Sind alle aₖ ≥ 0, so ist die Reihe genau dann konvergent, wenn die Partialsummenfolge beschränkt ist — das folgt direkt aus dem Satz über monotone Konvergenz (Kapitel 9), da (sₙ) dann monoton wächst.",
          "Die geometrische Reihe Σ_{n=0}^{∞} qⁿ konvergiert genau für |q| < 1, mit Reihenwert 1/(1−q). Für |q| ≥ 1 ist (qⁿ) keine Nullfolge, sodass Divergenz vorliegt (notwendiges Kriterium, siehe 11.2).",
        ],
        formulas: ["Σ_{n=0}^{∞} qⁿ = 1/(1−q) für |q| < 1"],
        formulasLatex: ["\\sum_{n=0}^{\\infty} q^n = \\dfrac{1}{1-q}\\quad (|q|<1)"],
        terms: [
          {
            term: "Partialsumme sₙ",
            definition: "sₙ := Σ_{k=1}^{n} aₖ.",
          },
          {
            term: "Geometrische Reihe",
            definition: "Σ qⁿ, konvergent für |q| < 1 mit Wert 1/(1−q).",
          },
        ],
      },
      {
        id: "11-2",
        heading: "11.2 Cauchy-Kriterium und Leibniz-Kriterium",
        body: [
          "Da eine Reihe als Folge von Partialsummen definiert ist, überträgt sich das Cauchy-Kriterium aus Kapitel 10 direkt: Σaₖ konvergiert genau dann, wenn die Partialsummen eine Cauchy-Folge bilden. Eine unmittelbare Folgerung ist das notwendige Kriterium: Konvergiert Σaₖ, so ist (aₖ) eine Nullfolge. Die Umkehrung gilt nicht — die harmonische Reihe Σ1/n ist das Standardgegenbeispiel: (1/n) ist Nullfolge, doch die Reihe divergiert.",
          "Für alternierende Reihen liefert das Leibniz-Kriterium eine einfache hinreichende Bedingung: Ist (bₖ) eine monoton fallende Nullfolge, so konvergiert Σ(−1)ᵏ bₖ. Die alternierende harmonische Reihe Σ(−1)ᵏ/k konvergiert damit, obwohl Σ1/k divergiert — ein Beispiel für Konvergenz ohne absolute Konvergenz (siehe 11.3).",
        ],
        terms: [
          {
            term: "Notwendiges Kriterium",
            definition: "Konvergiert Σaₖ, so ist (aₖ) eine Nullfolge (Umkehrung gilt nicht).",
          },
          {
            term: "Leibniz-Kriterium",
            definition: "Ist (bₖ) monoton fallende Nullfolge, so konvergiert Σ(−1)ᵏbₖ.",
          },
        ],
      },
      {
        id: "11-3",
        heading: "11.3 Absolute Konvergenz und das Majorantenkriterium",
        body: [
          "Eine Reihe Σaₖ heißt absolut konvergent, falls Σ|aₖ| konvergiert. Absolute Konvergenz ist eine stärkere Eigenschaft als Konvergenz: Jede absolut konvergente Reihe ist konvergent (der Beweis nutzt das Cauchy-Kriterium und die Dreiecksungleichung aus Kapitel 8), aber nicht umgekehrt, wie die alternierende harmonische Reihe zeigt.",
          "Das Majorantenkriterium liefert absolute Konvergenz durch Vergleich: Gilt |aₖ| ≤ bₖ für fast alle k und konvergiert Σbₖ, so konvergiert Σaₖ absolut. Umgekehrt liefert das Minorantenkriterium Divergenz: Gilt 0 ≤ bₖ ≤ aₖ für fast alle k und divergiert Σbₖ, so divergiert auch Σaₖ.",
        ],
        terms: [
          {
            term: "Absolute Konvergenz",
            definition: "Σaₖ heißt absolut konvergent, falls Σ|aₖ| konvergiert.",
          },
          {
            term: "Majorantenkriterium",
            definition: "|aₖ| ≤ bₖ und Σbₖ konvergent ⟹ Σaₖ absolut konvergent.",
          },
        ],
      },
      {
        id: "11-4",
        heading: "11.4 Quotienten- und Wurzelkriterium",
        body: [
          "Das Quotientenkriterium: Gibt es q < 1 und n₀ mit |a_{k+1}/aₖ| ≤ q für alle k ≥ n₀ (aₖ ≠ 0), so konvergiert Σaₖ absolut. Das Wurzelkriterium: Gibt es q < 1 und n₀ mit ᵏ√|aₖ| ≤ q für alle k ≥ n₀, so konvergiert Σaₖ absolut. Beide Kriterien vergleichen die Reihe implizit mit einer geometrischen Reihe.",
          "Das Wurzelkriterium ist strikt schärfer als das Quotientenkriterium: Immer wenn das Quotientenkriterium eine Aussage liefert, tut es auch das Wurzelkriterium — die Umkehrung gilt nicht. Ein Beispiel ist eine Folge, die auf geraden bzw. ungeraden Indizes durch unterschiedliche Ausdrücke gegeben ist, sodass der Quotient a_{k+1}/aₖ zwischen sehr kleinen und sehr großen Werten hin- und herspringt (das Quotientenkriterium versagt), während limsup ᵏ√|aₖ| < 1 bleibt (das Wurzelkriterium greift). Für Σ1/k und Σ1/k² sind hingegen beide Kriterien unentschieden (der Grenzwert ist jeweils genau 1).",
        ],
        terms: [
          {
            term: "Quotientenkriterium",
            definition: "|a_{k+1}/aₖ| ≤ q < 1 für fast alle k ⟹ absolute Konvergenz.",
          },
          {
            term: "Wurzelkriterium",
            definition: "ᵏ√|aₖ| ≤ q < 1 für fast alle k ⟹ absolute Konvergenz.",
          },
        ],
      },
      {
        id: "11-5",
        heading: "11.5 Exkurs: Das Cauchy-Produkt",
        body: [
          "Für zwei Folgen (aₙ), (bₙ) heißt die Folge (cₙ) mit cₙ := Σ_{k=0}^{n} aₖ b_{n−k} die Faltung von (aₙ) und (bₙ). Das Cauchy-Produkt zweier Reihen Σaₙ und Σbₙ ist die Reihe Σcₙ. Sind Σaₙ und Σbₙ beide absolut konvergent, so ist auch Σcₙ absolut konvergent, und es gilt Σcₙ = (Σaₙ)(Σbₙ) — die Reihen dürfen also wie endliche Summen 'ausmultipliziert' werden.",
          "Absolute Konvergenz ist dabei essenziell: Für aₙ = bₙ := (−1)ⁿ/√(n+1) (nach Leibniz konvergent, aber nicht absolut konvergent) divergiert das Cauchy-Produkt, da |cₙ| ≥ 1 für alle n gilt und (cₙ) somit keine Nullfolge ist — im Widerspruch zum notwendigen Kriterium aus 11.2. Das Cauchy-Produkt wird in Kapitel 13 verwendet, um die Funktionalgleichung der Exponentialfunktion und die Identität sin² + cos² = 1 zu beweisen.",
        ],
        formulas: ["cₙ := Σ_{k=0}^{n} aₖ b_{n−k}"],
        formulasLatex: ["c_n := \\sum_{k=0}^{n} a_k\\, b_{n-k}"],
        terms: [
          {
            term: "Cauchy-Produkt",
            definition: "Das Produkt zweier Reihen Σaₙ, Σbₙ, gegeben durch Σcₙ mit cₙ = Σ_{k=0}^n aₖb_{n−k}.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 12 — Potenzreihen ====================
  {
    id: "potenzreihen",
    number: 12,
    title: "Potenzreihen",
    free: false,
    intro:
      "Potenzreihen verallgemeinern Polynome zu 'unendlich langen Polynomen' und liefern damit die Sprache, in der die speziellen Funktionen aus Kapitel 13 — Exponentialfunktion, Sinus und Kosinus — überhaupt erst definiert werden. Dieses Kapitel klärt, für welche x eine Potenzreihe konvergiert, mithilfe der Kriterien aus Kapitel 11.",
    sections: [
      {
        id: "12-1",
        heading: "12.1 Konvergenzradius und Konvergenzbereich",
        body: [
          "Eine Potenzreihe mit Entwicklungspunkt x₀ hat die Form Σ_{n=0}^{∞} aₙ (x − x₀)ⁿ. Es existiert stets ein Konvergenzradius r ∈ [0, ∞], sodass die Reihe für |x − x₀| < r absolut konvergiert und für |x − x₀| > r divergiert. Über das Verhalten auf dem Rand |x − x₀| = r macht der Satz keine allgemeine Aussage — das muss für jede Potenzreihe einzeln (etwa mit dem Leibniz-Kriterium) geprüft werden.",
          "Der Konvergenzradius berechnet sich über das Wurzelkriterium aus Kapitel 11: r = 1/α mit α := limsup ᵏ√|aₖ| (mit den Konventionen r = ∞ falls α = 0, und r = 0 falls α = ∞). Ist der Grenzwert lim |aₙ₊₁/aₙ| direkt berechenbar, liefert auch das Quotientenkriterium den Konvergenzradius als dessen Kehrwert.",
        ],
        formulas: ["r = 1 / limsup ⁿ√|aₙ|"],
        formulasLatex: ["r = \\dfrac{1}{\\limsup_{n\\to\\infty} \\sqrt[n]{|a_n|}}"],
        terms: [
          {
            term: "Konvergenzradius r",
            definition: "Der Radius, innerhalb dessen eine Potenzreihe absolut konvergiert und außerhalb dessen sie divergiert.",
          },
          {
            term: "Konvergenzbereich K",
            definition: "Die Menge aller x, für die die Potenzreihe konvergiert; es gilt (x₀−r, x₀+r) ⊂ K ⊂ [x₀−r, x₀+r].",
          },
        ],
        examples: [
          "Die Potenzreihe Σ(−1)^{n+1} xⁿ/n hat Konvergenzradius r = 1. Bei x = 1 liefert das Leibniz-Kriterium Konvergenz, bei x = −1 ergibt sich die divergente (negative) harmonische Reihe — der Konvergenzbereich ist also K = (−1, 1].",
        ],
      },
      {
        id: "12-2",
        heading: "12.2 Rechnen mit Potenzreihen: das Produkt",
        body: [
          "Innerhalb ihres Konvergenzbereichs definiert eine Potenzreihe eine Funktion, die Summenfunktion. Zwei Potenzreihen mit demselben Entwicklungspunkt lassen sich analog zum Cauchy-Produkt aus Kapitel 11 multiplizieren: Für |x − x₀| kleiner als beide Konvergenzradien ist das Produkt der Summenfunktionen wieder durch eine Potenzreihe gegeben, deren Koeffizienten sich als Faltung der ursprünglichen Koeffizientenfolgen ergeben.",
          "Diese Eigenschaft ist entscheidend für Kapitel 13: Die Funktionalgleichung exp(x+y) = exp(x)·exp(y) und die Identität sin²(x) + cos²(x) = 1 werden beide bewiesen, indem man die Potenzreihen von exp bzw. sin, cos multipliziert und die entstehenden Koeffizienten mit der binomischen Formel aus Kapitel 7 vergleicht.",
        ],
        terms: [
          {
            term: "Summenfunktion",
            definition: "Die durch eine Potenzreihe auf ihrem Konvergenzbereich definierte Funktion.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 13 — Spezielle Funktionen ====================
  {
    id: "spezielle-funktionen",
    number: 13,
    title: "Spezielle Funktionen",
    free: false,
    intro:
      "Im letzten Kapitel führen alle bisherigen Werkzeuge zusammen: Mit Potenzreihen (Kapitel 12) und dem Cauchy-Produkt (Kapitel 11) definieren wir die Exponentialfunktion sowie Sinus und Kosinus für alle reellen Argumente — und leiten daraus sogar eine rein analytische Definition der Kreiszahl π her, ganz ohne Rückgriff auf Geometrie.",
    sections: [
      {
        id: "13-1",
        heading: "13.1 Die Exponentialfunktion",
        body: [
          "Aufbauend auf der Eulerschen Zahl e aus Kapitel 9 lässt sich exp(x) auf zwei äquivalente Weisen einführen: einerseits als sup{e^p : p ∈ Q, p ≤ x} (Fortsetzung von rationalen Exponenten auf ganz R), andererseits direkt über die Potenzreihe exp(x) := Σ_{n=0}^{∞} xⁿ/n!, die nach dem Quotientenkriterium (Kapitel 11) für jedes x ∈ R absolut konvergiert.",
          "Mit dem Cauchy-Produkt aus Kapitel 11 zeigt man die Funktionalgleichung exp(x+y) = exp(x) · exp(y) für alle x, y ∈ R. Daraus folgen exp(x) > 0 für alle x (da exp(x) = exp(x/2)² ≥ 0 und exp nirgends verschwindet) sowie exp(−x) = 1/exp(x). Außerdem gilt exp(x) = lim_{n→∞} (1 + x/n)ⁿ — die Verbindung zur ursprünglichen Definition der Eulerschen Zahl.",
        ],
        formulas: ["exp(x) = Σ_{n=0}^{∞} xⁿ/n!", "exp(x+y) = exp(x)·exp(y)"],
        formulasLatex: [
          "\\exp(x) = \\sum_{n=0}^{\\infty} \\dfrac{x^n}{n!}",
          "\\exp(x+y) = \\exp(x)\\cdot\\exp(y)",
        ],
        terms: [
          {
            term: "Exponentialfunktion exp(x)",
            definition: "exp(x) := Σ_{n=0}^{∞} xⁿ/n!, für alle x ∈ R absolut konvergent.",
          },
          {
            term: "Funktionalgleichung",
            definition: "exp(x+y) = exp(x) · exp(y) für alle x, y ∈ R.",
          },
        ],
      },
      {
        id: "13-2",
        heading: "13.2 Sinus und Kosinus über Potenzreihen",
        body: [
          "Analog zur Exponentialfunktion definiert man sin(x) := Σ_{n=0}^{∞} (−1)ⁿ x^{2n+1}/(2n+1)! und cos(x) := Σ_{n=0}^{∞} (−1)ⁿ x^{2n}/(2n)! — beide Reihen konvergieren nach dem Quotientenkriterium für jedes x ∈ R absolut. Mit dem Cauchy-Produkt und der binomischen Formel aus Kapitel 7 zeigt man die fundamentale Identität sin²(x) + cos²(x) = 1 für alle x ∈ R.",
          "Aus den Reihendarstellungen liest man außerdem direkt ab, dass sin eine ungerade Funktion ist (sin(−x) = −sin(x), da nur ungerade Potenzen auftreten) und cos eine gerade Funktion (cos(−x) = cos(x)). Die Additionstheoreme sin(x+y) = sin(x)cos(y) + cos(x)sin(y) und cos(x+y) = cos(x)cos(y) − sin(x)sin(y) lassen sich ebenfalls über das Cauchy-Produkt der jeweiligen Reihen nachweisen.",
        ],
        formulas: ["sin²(x) + cos²(x) = 1"],
        formulasLatex: ["\\sin^2(x) + \\cos^2(x) = 1"],
        terms: [
          {
            term: "Gerade Funktion",
            definition: "f(−x) = f(x) für alle x im Definitionsbereich.",
          },
          {
            term: "Ungerade Funktion",
            definition: "f(−x) = −f(x) für alle x im Definitionsbereich; insbesondere folgt f(0) = 0.",
          },
        ],
      },
      {
        id: "13-3",
        heading: "13.3 Die Kreiszahl π und periodische Funktionen",
        body: [
          "Rein analytisch, ohne geometrische Vorkenntnisse, definiert man π := 2 · inf{x ≥ 0 : cos(x) = 0} — das Doppelte der kleinsten positiven Nullstelle des Kosinus. Aus dieser Definition und den Additionstheoremen leitet man die vertraute Nullstellen- und Vorzeichentabelle von Sinus und Kosinus her, etwa cos(π/2) = 0, sin(π/2) = 1, cos(π) = −1 und sin(π) = 0.",
          "Eine Funktion f heißt periodisch mit Periode a > 0, falls f(x + a) = f(x) für alle x im Definitionsbereich gilt. Sinus und Kosinus sind periodisch mit (kleinster) Periode 2π — eine Eigenschaft, die sich direkt aus den Additionstheoremen mit x = 2π ergibt und die die spezielle Werte-Tabelle (etwa für π/6, π/4, π/3) erst sinnvoll macht.",
        ],
        formulas: ["π := 2 · inf{x ≥ 0 : cos(x) = 0}"],
        formulasLatex: ["\\pi := 2\\cdot \\inf\\{x\\ge 0 : \\cos(x)=0\\}"],
        terms: [
          {
            term: "Kreiszahl π",
            definition: "π := 2 · inf{x ≥ 0 : cos(x) = 0}, rein analytisch definiert.",
          },
          {
            term: "Periodische Funktion",
            definition: "f heißt periodisch mit Periode a, falls f(x+a) = f(x) für alle x gilt.",
          },
        ],
      },
    ],
  },
];
