import type { SkriptChapter } from "./types";

// Eigenständiges Lehrwerk zu "Grundlagen der Informatik" (Logik, Algorithmen,
// Datenstrukturen, Sortieren, Komplexität, UML), verfasst wie ein
// unabhängiges Lehrbuch zum Modulthema — nicht als Paraphrase einer
// bestimmten Vorlesung.
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 ====================
  {
    id: "aussagenlogik",
    number: 1,
    title: "Aussagenlogik",
    free: true,
    intro:
      "Die Aussagenlogik ist das formale Fundament, auf dem Programmiersprachen, Schaltkreise und algorithmische Bedingungen aufbauen. Dieses Kapitel führt die Grundoperationen und wichtigsten Rechenregeln ein.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Aussagen, Junktoren und Wahrheitstafeln",
        body: [
          "Eine Aussage besitzt genau einen Wahrheitswert (wahr/falsch). Aus Aussagen A, B lassen sich mit Junktoren zusammengesetzte Aussagen bilden: Negation ¬A, Konjunktion A∧B, Disjunktion A∨B, Implikation A⇒B und Äquivalenz A⇔B. Eine Wahrheitstafel listet systematisch den Wahrheitswert der zusammengesetzten Aussage für jede mögliche Kombination der Wahrheitswerte ihrer Bestandteile auf.",
          "Bei n Teilaussagen besitzt die zugehörige Wahrheitstafel 2ⁿ Zeilen, da jede Teilaussage unabhängig zwei Werte annehmen kann — dieses exponentielle Wachstum ist ein früher Vorgeschmack auf Komplexitätsbetrachtungen in späteren Kapiteln.",
        ],
        formulas: ["A ⇒ B ≡ ¬A ∨ B"],
        formulasLatex: ["A \\Rightarrow B \\equiv \\lnot A \\lor B"],
        terms: [{ term: "Wahrheitstafel", definition: "Tabellarische Auflistung des Wahrheitswerts einer Aussage für jede Kombination der Teilaussagen." }],
        examples: [
          "Für die Aussage (A∧B)⇒C mit drei Teilaussagen besitzt die Wahrheitstafel 2³=8 Zeilen; nur wenn A und B beide wahr sind, muss zusätzlich C wahr sein, damit die Gesamtaussage wahr ist.",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Äquivalenzumformungen und Normalformen",
        body: [
          "Die De Morganschen Regeln ¬(A∧B)≡¬A∨¬B und ¬(A∨B)≡¬A∧¬B erlauben es, Negationen durch die Formel hindurchzuziehen. Jede aussagenlogische Formel lässt sich in disjunktive Normalform (DNF: Disjunktion von Konjunktionen von Literalen) oder konjunktive Normalform (KNF: Konjunktion von Disjunktionen von Literalen) überführen.",
          "Normalformen sind praktisch wichtig, weil viele algorithmische Verfahren (z. B. das Erfüllbarkeitsproblem SAT) auf einer bestimmten Normalform aufsetzen — die Umformung in KNF ist z. B. ein Standardschritt in automatisierten Beweissystemen.",
        ],
        formulas: ["¬(A∧B) ≡ ¬A ∨ ¬B"],
        formulasLatex: ["\\lnot(A\\land B) \\equiv \\lnot A \\lor \\lnot B"],
        terms: [{ term: "Disjunktive Normalform (DNF)", definition: "Formel als Disjunktion von Konjunktionen einzelner Literale." }],
        examples: [
          "Die Formel ¬(A∧¬B) lässt sich per De-Morgan umformen zu ¬A∨¬¬B = ¬A∨B — bereits in disjunktiver Normalform.",
        ],
      },
      {
        id: "1-3",
        heading: "1.3 Erfüllbarkeit und Allgemeingültigkeit",
        body: [
          "Eine Formel heißt erfüllbar, wenn mindestens eine Belegung ihrer Variablen sie wahr macht, und allgemeingültig (Tautologie), wenn JEDE Belegung sie wahr macht. Eine Formel ist unerfüllbar, wenn keine Belegung sie wahr macht — äquivalent dazu, dass ihre Negation eine Tautologie ist.",
          "Das Erfüllbarkeitsproblem (SAT) — die Frage, ob eine gegebene aussagenlogische Formel erfüllbar ist — ist algorithmisch bedeutsam: Es ist das erste bewiesene NP-vollständige Problem und damit ein zentraler Referenzpunkt der Komplexitätstheorie (siehe Kapitel 8).",
        ],
        terms: [
          { term: "Erfüllbarkeit", definition: "Eigenschaft einer Formel, für mindestens eine Variablenbelegung wahr zu sein." },
          { term: "SAT-Problem", definition: "Entscheidungsproblem, ob eine aussagenlogische Formel erfüllbar ist; erstes bekanntes NP-vollständiges Problem." },
        ],
        examples: [
          "Die Formel A∧¬A ist unerfüllbar (kein Wahrheitswert von A macht sie wahr), während A∨¬A eine Tautologie ist (jede Belegung macht sie wahr).",
        ],
      },
      {
        id: "1-4",
        heading: "1.4 Resolution und das Deduktionstheorem",
        body: [
          "Um zu prüfen, ob eine Formelmenge M eine Formel F logisch impliziert (M⊨F), nutzt das Deduktionstheorem einen Umweg über Unerfüllbarkeit: M⊨F gilt genau dann, wenn M∪{¬F} unerfüllbar ist. Diese Rückführung ist algorithmisch wertvoll, weil sich Unerfüllbarkeit systematisch durch Widerspruchsherleitung nachweisen lässt, während der direkte Nachweis einer Folgerung schwerer zu automatisieren ist.",
          "Die Resolutionsregel liefert genau ein solches Widerspruchsverfahren: Enthält eine Klausel (Disjunktion von Literalen) ein Literal A und eine andere Klausel dessen Negation ¬A, lässt sich eine neue Klausel (die Resolvente) bilden, die alle übrigen Literale beider Ausgangsklauseln enthält: aus (A∨C) und (¬A∨D) folgt die Resolvente (C∨D). Der Resolutionssatz besagt: Eine Klauselmenge ist genau dann unerfüllbar, wenn sich durch wiederholtes Anwenden der Resolutionsregel irgendwann die leere Klausel (der Widerspruch) herleiten lässt.",
          "Kombiniert man beide Sätze, ergibt sich das Resolutionsverfahren zum automatisierten Beweisen: Um M⊨F zu zeigen, überführt man M∪{¬F} in Klauselform und wendet wiederholt Resolution an, bis entweder die leere Klausel entsteht (Beweis erfolgreich) oder keine neue Resolvente mehr möglich ist (Beweis gescheitert).",
        ],
        formulas: ["(A∨C), (¬A∨D) ⊢ (C∨D)"],
        formulasLatex: ["(A\\lor C),\\ (\\lnot A\\lor D) \\vdash (C\\lor D)"],
        terms: [
          { term: "Resolvente", definition: "Neue Klausel, die durch Resolution aus zwei Klauseln mit komplementären Literalen entsteht." },
          { term: "Resolutionssatz", definition: "Eine Klauselmenge ist unerfüllbar genau dann, wenn sich durch wiederholte Resolution die leere Klausel herleiten lässt." },
        ],
        examples: [
          "Um M={¬P∨Q, ¬Q∨R, P} ⊨ R zu zeigen, bildet man M∪{¬R}. Resolution von P und ¬P∨Q liefert Q; Resolution von Q und ¬Q∨R liefert R; Resolution von R und ¬R liefert die leere Klausel □ — ein Widerspruch, also gilt M⊨R.",
        ],
      },
    ],
  },
  // ==================== Kapitel 2 ====================
  {
    id: "praedikatenlogik",
    number: 2,
    title: "Prädikatenlogik",
    free: false,
    intro:
      "Die Aussagenlogik kann keine Aussagen über Objekte und ihre Eigenschaften ausdrücken. Die Prädikatenlogik erweitert sie um Variablen, Prädikate und Quantoren und ist damit ausdrucksstark genug für die meisten mathematischen und informatischen Aussagen.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Prädikate und Quantoren",
        body: [
          "Ein Prädikat P(x) ist eine Aussageform, die erst durch Einsetzen eines konkreten Objekts für x zu einer Aussage mit Wahrheitswert wird. Der Allquantor ∀x: P(x) besagt, dass P für alle Objekte des Diskursbereichs gilt; der Existenzquantor ∃x: P(x) besagt, dass mindestens ein Objekt existiert, für das P gilt.",
          "Die Negation eines quantifizierten Ausdrucks vertauscht den Quantor: ¬∀x:P(x) ≡ ∃x:¬P(x), und ¬∃x:P(x) ≡ ∀x:¬P(x) — eine Regel, die beim formalen Widerlegen von Aussagen ständig gebraucht wird.",
        ],
        formulas: ["¬∀x: P(x) ≡ ∃x: ¬P(x)"],
        formulasLatex: ["\\lnot \\forall x: P(x) \\equiv \\exists x: \\lnot P(x)"],
        terms: [{ term: "Prädikat", definition: "Aussageform mit freien Variablen, die erst durch Einsetzen konkreter Objekte zu einer Aussage wird." }],
        examples: [
          "Für P(x): 'x ist eine Primzahl' auf dem Diskursbereich der natürlichen Zahlen ist ∃x: P(x) wahr (z. B. x=7), während ∀x: P(x) falsch ist (z. B. x=8 ist keine Primzahl).",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Mehrstellige Prädikate und Quantorenreihenfolge",
        body: [
          "Mehrstellige Prädikate wie R(x,y) drücken Beziehungen zwischen mehreren Objekten aus. Bei mehreren Quantoren ist die Reihenfolge entscheidend: ∀x∃y: R(x,y) bedeutet, dass zu jedem x ein (möglicherweise von x abhängiges) y existiert, während ∃y∀x: R(x,y) ein einziges y verlangt, das für ALLE x gleichzeitig funktioniert — eine deutlich stärkere Aussage.",
          "Diese Unterscheidung ist in der Informatik z. B. bei der Definition von Grenzwerten, Sicherheitsgarantien (für jeden Input existiert eine korrekte Antwort) oder verteilten Protokollen (existiert ein Koordinator, der für alle Knoten funktioniert) von praktischer Bedeutung.",
        ],
        examples: [
          "'Für jede natürliche Zahl x existiert eine größere natürliche Zahl y' (∀x∃y: y>x) ist wahr. 'Es existiert eine natürliche Zahl y, die größer ist als jede natürliche Zahl x' (∃y∀x: y>x) ist dagegen falsch.",
        ],
      },
      {
        id: "2-3",
        heading: "2.3 Formalisierung natürlichsprachlicher Aussagen",
        body: [
          "Eine zentrale Fertigkeit der Prädikatenlogik ist die korrekte Formalisierung natürlichsprachlicher Sätze. 'Alle Studierenden bestehen die Klausur, wenn sie lernen' formalisiert man als ∀x: (Studierender(x) ∧ Lernt(x)) ⇒ Besteht(x) — NICHT als ∀x: Studierender(x) ⇒ (Lernt(x)⇒Besteht(x)), obwohl beide Formeln oft verwechselt werden.",
          "Ein häufiger Fehler ist die falsche Kombination von Quantor und Junktor: Bei Allaussagen verwendet man typischerweise die Implikation (⇒), bei Existenzaussagen typischerweise die Konjunktion (∧) — 'Es gibt einen Studierenden, der lernt UND besteht' wäre ∃x: Studierender(x)∧Lernt(x)∧Besteht(x).",
        ],
        terms: [{ term: "Formalisierung", definition: "Übersetzung natürlichsprachlicher Aussagen in prädikatenlogische Formeln." }],
        examples: [
          "'Jeder Vogel kann fliegen, außer Pinguine' formalisiert man als ∀x: (Vogel(x) ∧ ¬Pinguin(x)) ⇒ Fliegt(x) — die Ausnahme wird als zusätzliche Bedingung in die Prämisse der Implikation aufgenommen.",
        ],
      },
      {
        id: "2-4",
        heading: "2.4 Pränexnormalform und Skolemisierung",
        body: [
          "Eine prädikatenlogische Formel liegt in Pränexnormalform vor, wenn alle Quantoren am Anfang stehen und sich die quantorenfreie Matrix anschließt: Q₁x₁...Qₙxₙ: M(x₁,...,xₙ). Durch Umbenennen gebundener Variablen und schrittweises Herausziehen der Quantoren lässt sich jede Formel äquivalent in diese Form überführen.",
          "Für automatisierte Beweisverfahren wie Resolution (siehe 1.4) müssen zusätzlich die Existenzquantoren eliminiert werden — dies leistet die Skolemisierung: Eine existenzquantifizierte Variable, die im Wirkungsbereich vorausgehender Allquantoren x₁,...,xₖ steht, wird durch eine neue Skolemfunktion f(x₁,...,xₖ) ersetzt (bei fehlenden vorausgehenden Allquantoren durch eine Skolemkonstante); anschließend werden alle Existenzquantoren gestrichen. Die entstehende Formel ist nicht mehr äquivalent zur Ausgangsformel, aber erfüllbarkeitsäquivalent — für automatisierte Beweisverfahren genügt das.",
        ],
        formulas: ["∀x₁...∀xₖ∃y: P(x₁,...,xₖ,y) ↝ ∀x₁...∀xₖ: P(x₁,...,xₖ, f(x₁,...,xₖ))"],
        formulasLatex: ["\\forall x_1 \\dots \\forall x_k\\, \\exists y: P(x_1,\\dots,x_k,y) \\rightsquigarrow \\forall x_1\\dots\\forall x_k: P(x_1,\\dots,x_k, f(x_1,\\dots,x_k))"],
        terms: [
          { term: "Pränexnormalform", definition: "Formelform, bei der alle Quantoren vor einer quantorenfreien Matrix stehen." },
          { term: "Skolemfunktion", definition: "Funktion, die eine existenzquantifizierte Variable bei der Skolemisierung ersetzt; ihre Argumente sind die vorausgehenden allquantifizierten Variablen." },
        ],
        examples: [
          "Die Formel ∀x∃y: liebt(x,y) ('Jeder liebt jemanden') wird durch Skolemisierung zu ∀x: liebt(x, f(x)) — die Skolemfunktion f(x) steht für 'die von x geliebte Person', die im Allgemeinen von x abhängt. Stünde dagegen kein Allquantor voraus (∃y: P(y)), würde y durch eine Skolemkonstante c ersetzt: P(c).",
        ],
      },
      {
        id: "2-5",
        heading: "2.5 Unifikation",
        body: [
          "Unifikation ist der Prozess, zwei Terme oder Literale durch geeignetes Einsetzen von Termen für Variablen syntaktisch identisch zu machen. Eine Substitution σ, die zwei Ausdrücke E₁,E₂ identisch macht (E₁σ = E₂σ), heißt Unifikator; existiert ein solches σ, heißen die Ausdrücke unifizierbar.",
          "Unter allen Unifikatoren interessiert meist der allgemeinste Unifikator (Most General Unifier, MGU): eine Substitution, aus der sich jede andere gültige Unifikation durch zusätzliche Substitution ableiten lässt. Der Unifikationsalgorithmus findet den MGU (falls er existiert), indem er beide Ausdrücke Position für Position vergleicht: Bei einer Diskrepanz zwischen einer Variablen und einem Term wird die Variable durch den Term ersetzt (sofern die Variable nicht selbst im Term vorkommt — Occurs-Check); bei einer Diskrepanz zwischen zwei unterschiedlichen Funktionssymbolen scheitert die Unifikation.",
        ],
        formulas: ["E₁σ = E₂σ"],
        formulasLatex: ["E_1\\sigma = E_2\\sigma"],
        terms: [{ term: "Allgemeinster Unifikator (MGU)", definition: "Unifikator, aus dem sich jeder andere Unifikator zweier Ausdrücke durch zusätzliche Substitution ableiten lässt." }],
        examples: [
          "Für die Literale p(x, f(y)) und p(g(z), f(a)) liefert der Unifikationsalgorithmus den allgemeinsten Unifikator σ={x/g(z), y/a}: Einsetzen ergibt in beiden Fällen p(g(z), f(a)) — die Literale sind also unifizierbar.",
        ],
      },
    ],
  },
  // ==================== Kapitel 3 ====================
  {
    id: "boolesche-algebra",
    number: 3,
    title: "Boolesche Algebra",
    free: false,
    intro:
      "Die Boolesche Algebra überträgt die Gesetze der Aussagenlogik in eine algebraische Struktur, die die Grundlage jeder digitalen Schaltung bildet. Dieses Kapitel behandelt ihre Axiome und die Vereinfachung boolescher Ausdrücke.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Boolesche Operationen und Gesetze",
        body: [
          "Die Boolesche Algebra arbeitet mit den Werten {0,1} und den Operationen UND (·), ODER (+) und NICHT (¯). Es gelten Kommutativ-, Assoziativ- und Distributivgesetze sowie die booleschen De-Morgan-Regeln: (a·b)‾ = ā+b̄ und (a+b)‾ = ā·b̄.",
          "Zusätzlich gelten Absorptionsgesetze a+(a·b) = a und a·(a+b) = a, die beim Vereinfachen boolescher Ausdrücke helfen, überflüssige Terme zu erkennen und zu eliminieren.",
        ],
        formulas: ["(a·b)‾ = ā + b̄"],
        formulasLatex: ["\\overline{a\\cdot b} = \\bar{a} + \\bar{b}"],
        terms: [{ term: "Absorptionsgesetz", definition: "a+(a·b)=a bzw. a·(a+b)=a; erlaubt das Eliminieren überflüssiger Terme." }],
        examples: [
          "Der Ausdruck a·b + a·b̄ vereinfacht sich über das Distributivgesetz zu a·(b+b̄) = a·1 = a — ein häufiges Muster bei der Vereinfachung von Schaltfunktionen.",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Schaltfunktionen und Karnaugh-Diagramme",
        body: [
          "Eine Schaltfunktion bildet n boolesche Eingänge auf einen booleschen Ausgang ab und lässt sich als Wahrheitstafel, boolescher Ausdruck oder Schaltbild (aus UND-, ODER- und NICHT-Gattern) darstellen. Karnaugh-Diagramme ordnen die Wahrheitstafel so an, dass sich benachbarte Zellen jeweils nur in einer Variablen unterscheiden, wodurch sich minimale boolesche Ausdrücke grafisch ablesen lassen.",
          "Das Ziel der Minimierung ist eine Schaltfunktion mit möglichst wenigen Gattern und Eingängen — dies reduziert Kosten, Energieverbrauch und Verzögerung realer Schaltkreise.",
        ],
        terms: [{ term: "Karnaugh-Diagramm", definition: "Grafische Darstellung einer Wahrheitstafel zur systematischen Minimierung boolescher Ausdrücke." }],
        examples: [
          "Für eine Schaltfunktion mit drei Eingängen, die nur bei den Belegungen (1,1,0) und (1,1,1) wahr ist, lässt sich im Karnaugh-Diagramm ablesen, dass beide Zeilen zusammengefasst werden können zu a·b (unabhängig vom dritten Eingang c).",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Huntingtonsche Axiome und das Dualitätsprinzip",
        body: [
          "Der Mathematiker Edward Huntington zeigte 1904, dass sich die gesamte Boolesche Algebra aus einer kleinen Menge von Axiomen ableiten lässt, statt jedes Rechengesetz einzeln voraussetzen zu müssen. Die Huntingtonschen Axiome fordern: Abgeschlossenheit von · und + auf der Trägermenge, Existenz neutraler Elemente 0 (für +) und 1 (für ·), Kommutativität beider Operationen, wechselseitige Distributivität (a·(b+c)=(a·b)+(a·c) UND a+(b·c)=(a+b)·(a+c)), sowie die Existenz eines Komplements ā zu jedem Element a mit a+ā=1 und a·ā=0.",
          "Aus dieser Axiomenmenge folgt das Dualitätsprinzip: Vertauscht man in einer beliebigen gültigen booleschen Identität systematisch · mit + und gleichzeitig 0 mit 1, entsteht wieder eine gültige Identität (das duale Gesetz) — ohne dass diese erneut einzeln bewiesen werden müsste. Das Dualitätsprinzip folgt direkt aus der symmetrischen Struktur der Huntington-Axiome in · und + bzw. 0 und 1.",
        ],
        formulas: ["a + ā = 1, a · ā = 0"],
        formulasLatex: ["a + \\bar a = 1, \\quad a\\cdot\\bar a = 0"],
        terms: [
          { term: "Huntingtonsche Axiome", definition: "Minimale Axiomenmenge (Huntington, 1904), aus der sich die gesamte Boolesche Algebra ableiten lässt." },
          { term: "Dualitätsprinzip", definition: "Vertauscht man · mit + und 0 mit 1 in einer gültigen booleschen Identität, entsteht wieder eine gültige Identität." },
        ],
        examples: [
          "Aus dem (in 3.1 gezeigten) Absorptionsgesetz a+(a·b)=a folgt über das Dualitätsprinzip sofort auch das duale Gesetz a·(a+b)=a, ohne einen eigenen Beweis führen zu müssen — · und + sowie implizit 0 und 1 wurden einfach vertauscht.",
        ],
      },
    ],
  },
  // ==================== Kapitel 4 ====================
  {
    id: "algorithmen-grundbegriffe",
    number: 4,
    title: "Algorithmen: Grundbegriffe und Eigenschaften",
    free: false,
    intro:
      "Bevor konkrete Algorithmen und Datenstrukturen behandelt werden, klärt dieses Kapitel, was einen Algorithmus überhaupt ausmacht und welche Eigenschaften ihn korrekt und nützlich machen.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Was ist ein Algorithmus?",
        body: [
          "Ein Algorithmus ist eine endliche, eindeutige Handlungsvorschrift, die aus einer Eingabe in endlich vielen Schritten eine Ausgabe erzeugt. Zentrale Eigenschaften: Determiniertheit (bei gleicher Eingabe immer dieselbe Ausgabe), Terminierung (er hält nach endlich vielen Schritten an), und Effektivität (jeder Schritt ist mit endlichem Aufwand ausführbar).",
          "Ein Algorithmus lässt sich auf verschiedenen Abstraktionsebenen beschreiben: in natürlicher Sprache, als Pseudocode, als Flussdiagramm oder in einer konkreten Programmiersprache — alle Darstellungen beschreiben dasselbe zugrundeliegende Verfahren.",
          "Determiniertheit ist von der eng verwandten, aber unterschiedlichen Eigenschaft Determinismus zu unterscheiden: Determinismus bezieht sich auf den ABLAUF (enthält der Algorithmus an irgendeiner Stelle einen zufälligen oder unspezifizierten Schritt, z. B. das Ziehen einer Zufallszahl?), Determiniertheit dagegen auf das ERGEBNIS (liefert derselbe Input am Ende stets denselben Output, unabhängig davon, ob der Weg dorthin zufällig war?). Ein Algorithmus kann nicht-deterministisch, aber dennoch determiniert sein — etwa ein randomisierter Algorithmus, der über verschiedene zufällige Zwischenschritte am Ende stets zum selben korrekten Ergebnis kommt.",
          "Zwei weitere Eigenschaften ergänzen das Bild: Statische Finitheit fordert, dass die BESCHREIBUNG des Algorithmus selbst endlich ist (endlich viele Anweisungen im Programmtext), unabhängig davon, ob die AUSFÜHRUNG terminiert. Universalität fordert, dass der Algorithmus für die GESAMTE spezifizierte Eingabemenge korrekt arbeitet, nicht nur für einen Teil davon oder für günstige Spezialfälle.",
        ],
        terms: [
          { term: "Determiniertheit", definition: "Eigenschaft eines Algorithmus, bei gleicher Eingabe stets dieselbe Ausgabe zu liefern." },
          { term: "Determinismus", definition: "Eigenschaft eines Algorithmus, an keiner Stelle einen zufälligen oder unspezifizierten Schritt zu enthalten." },
          { term: "Terminierung", definition: "Eigenschaft eines Algorithmus, nach endlich vielen Schritten anzuhalten." },
          { term: "Statische Finitheit", definition: "Eigenschaft, dass die Beschreibung eines Algorithmus aus endlich vielen Anweisungen besteht." },
          { term: "Universalität", definition: "Eigenschaft eines Algorithmus, für die gesamte spezifizierte Eingabemenge korrekt zu arbeiten." },
        ],
        examples: [
          "Ein Kochrezept ist im Alltag anschaulich ein Algorithmus: endliche, eindeutige Schritte, die aus Zutaten (Eingabe) ein Gericht (Ausgabe) erzeugen — es terminiert, sobald das letzte Schritt ausgeführt ist.",
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Terminierungsnachweis mit Invarianten",
        body: [
          "Um zu zeigen, dass eine Schleife terminiert, sucht man eine Terminierungsfunktion (oft eine Variante genannt): eine Größe, die bei jedem Schleifendurchlauf strikt kleiner wird und dabei stets nicht-negativ (bzw. nach unten beschränkt) bleibt. Da eine solche Größe nicht unendlich oft strikt fallen kann, muss die Schleife nach endlich vielen Durchläufen enden.",
          "Eine Schleifeninvariante ist dagegen eine Aussage, die vor und nach jedem Schleifendurchlauf wahr bleibt und zusammen mit der Abbruchbedingung die Korrektheit des Ergebnisses beweist — Terminierung und Korrektheit sind zwei getrennte Beweisaufgaben.",
        ],
        terms: [
          { term: "Terminierungsfunktion (Variante)", definition: "Größe, die bei jedem Schleifendurchlauf strikt abnimmt und nach unten beschränkt bleibt; garantiert Terminierung." },
          { term: "Schleifeninvariante", definition: "Aussage, die vor und nach jedem Schleifendurchlauf gilt; Grundlage für Korrektheitsbeweise." },
        ],
        examples: [
          "Bei einer Schleife, die einen Zähler i von n auf 0 herunterzählt, ist i selbst eine gültige Terminierungsfunktion: i nimmt bei jedem Durchlauf um 1 ab und bleibt ≥0, also muss die Schleife nach höchstens n Durchläufen enden.",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Rekursive Algorithmen",
        body: [
          "Ein rekursiver Algorithmus löst ein Problem, indem er es auf eine oder mehrere kleinere Instanzen desselben Problems zurückführt (Rekursionsschritt) und für eine minimale Instanz direkt eine Lösung angibt (Basisfall/Rekursionsanker). Ohne Basisfall oder ohne echte Verkleinerung der Probleminstanz terminiert die Rekursion nicht.",
          "Viele Algorithmen lassen sich sowohl iterativ (mit Schleifen) als auch rekursiv formulieren; rekursive Formulierungen sind oft näher an der mathematischen Problemdefinition, können aber bei tiefer Rekursion höheren Speicherbedarf durch den Aufrufstapel (Call-Stack) verursachen.",
          "Man unterscheidet direkte Rekursion, bei der eine Funktion sich unmittelbar selbst aufruft (f ruft f auf), von indirekter Rekursion, bei der der Selbstaufruf über eine oder mehrere Zwischenfunktionen erfolgt (f ruft g auf, das seinerseits — direkt oder über weitere Zwischenschritte — wieder f aufruft). Beide Formen benötigen einen Basisfall, um zu terminieren; bei indirekter Rekursion muss dieser Basisfall in mindestens einer der beteiligten Funktionen erreicht werden.",
        ],
        terms: [
          { term: "Rekursionsanker (Basisfall)", definition: "Kleinste Probleminstanz, die direkt (ohne weiteren Rekursionsaufruf) gelöst wird." },
          { term: "Direkte/Indirekte Rekursion", definition: "Direkte Rekursion: f ruft f auf. Indirekte Rekursion: f ruft g auf, das (ggf. über weitere Zwischenschritte) wieder f aufruft." },
        ],
        examples: [
          "Die Fakultätsfunktion fak(n) lässt sich rekursiv definieren: fak(0)=1 (Basisfall), fak(n)=n·fak(n−1) für n>0 (Rekursionsschritt) — jeder Aufruf reduziert das Problem auf eine echt kleinere Instanz.",
          "Eine Funktion istGerade(n), die für n=0 wahr liefert und sonst istUngerade(n−1) aufruft, während istUngerade(n) für n=0 falsch liefert und sonst istGerade(n−1) aufruft, bildet ein Beispiel für indirekte Rekursion — keine der beiden Funktionen ruft sich direkt selbst auf.",
        ],
      },
    ],
  },
  // ==================== Kapitel 5 ====================
  {
    id: "entwurfsprinzipien-testen",
    number: 5,
    title: "Entwurfsprinzipien und Testen von Algorithmen",
    free: false,
    intro:
      "Einen Algorithmus zu entwerfen ist nur die halbe Aufgabe — er muss auch systematisch auf Korrektheit geprüft werden. Dieses Kapitel behandelt gängige Entwurfsstrategien und Testmethoden.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Entwurfsprinzipien und Entwurfstechniken",
        body: [
          "Beim Entwurf eines Algorithmus lassen sich zwei Ebenen unterscheiden. Entwurfsprinzipien sind grundlegende, universelle Denkweisen zur Strukturierung eines Algorithmus oder Programms: allen voran die schrittweise Verfeinerung (ein Problem wird in immer kleinere, konkretere Teilschritte zerlegt, bis jeder Schritt direkt umsetzbar ist) und die Modularisierung (Aufteilung in unabhängige, wiederverwendbare Bausteine mit klar definierten Schnittstellen).",
          "Entwurfstechniken sind demgegenüber konkretere, für bestimmte Problemklassen anwendbare Vorgehensweisen. Divide-and-Conquer löst ein Problem, indem es in kleinere Teilprobleme derselben Art zerlegt wird, diese (oft rekursiv) gelöst werden, und die Teillösungen zu einer Gesamtlösung kombiniert werden (typisches Beispiel: Mergesort, siehe Kapitel 9). Backtracking durchsucht den Lösungsraum systematisch, indem es schrittweise Teillösungen aufbaut und bei einer Sackgasse (keine gültige Fortsetzung möglich) zur letzten Entscheidung zurückspringt und eine Alternative probiert. Problemtransformation löst ein Problem, indem es auf ein bereits gelöstes anderes Problem zurückgeführt wird, statt eine neue Lösung von Grund auf zu entwickeln. Greedy-Algorithmen treffen in jedem Schritt die lokal beste Entscheidung, ohne spätere Konsequenzen zu berücksichtigen — dies liefert nicht immer, aber bei geeigneter Problemstruktur eine global optimale Lösung.",
          "Ob ein Greedy-Ansatz zulässig ist, hängt von der Problemstruktur ab: Besitzt das Problem die 'Greedy-Choice-Eigenschaft' (eine lokal optimale Wahl lässt sich immer zu einer global optimalen Lösung erweitern), liefert Greedy garantiert das Optimum — andernfalls kann Greedy beliebig weit vom Optimum entfernt liegen.",
        ],
        terms: [
          { term: "Schrittweise Verfeinerung", definition: "Entwurfsprinzip: ein Problem wird in immer kleinere, konkretere Teilschritte zerlegt." },
          { term: "Modularisierung", definition: "Entwurfsprinzip: Aufteilung in unabhängige, wiederverwendbare Bausteine mit klar definierten Schnittstellen." },
          { term: "Divide-and-Conquer", definition: "Entwurfstechnik: Problem in Teilprobleme zerlegen, rekursiv lösen, Teillösungen kombinieren." },
          { term: "Backtracking", definition: "Entwurfstechnik: Lösungsraum systematisch durchsuchen, bei Sackgassen zur letzten Entscheidung zurückspringen." },
          { term: "Problemtransformation", definition: "Entwurfstechnik: ein Problem auf ein bereits gelöstes anderes Problem zurückführen." },
          { term: "Greedy-Algorithmus", definition: "Entwurfstechnik: in jedem Schritt die lokal beste Entscheidung treffen." },
        ],
        examples: [
          "Beim Wechselgeldproblem mit Standardmünzsystemen (1,2,5,10,...) liefert die Greedy-Strategie ('immer die größte passende Münze nehmen') das Optimum; bei künstlichen Münzsystemen (z. B. {1,3,4}) für den Betrag 6 kann Greedy (4+1+1=3 Münzen) suboptimal gegenüber der optimalen Lösung (3+3=2 Münzen) sein.",
          "Beim Lösen eines Sudoku probiert ein Backtracking-Algorithmus für ein leeres Feld nacheinander die Ziffern 1-9 aus; führt eine Wahl später zu einem Widerspruch (keine gültige Ziffer mehr für ein anderes Feld), springt der Algorithmus zur letzten Entscheidung zurück und probiert die nächste Ziffer.",
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Testfallentwurf: Äquivalenzklassen und Grenzwertanalyse",
        body: [
          "Da erschöpfendes Testen aller möglichen Eingaben praktisch unmöglich ist, teilt man den Eingaberaum in Äquivalenzklassen ein: Teilmengen von Eingaben, von denen man annimmt, dass sie den Algorithmus gleichartig testen. Aus jeder Klasse wird typischerweise nur ein repräsentativer Testfall gewählt.",
          "Die Grenzwertanalyse ergänzt dies gezielt um Testfälle an den Rändern der Äquivalenzklassen (und knapp innerhalb/außerhalb), da Fehler in der Praxis überproportional häufig an solchen Grenzen auftreten (sogenannte 'Off-by-one'-Fehler).",
        ],
        terms: [
          { term: "Äquivalenzklassenbildung", definition: "Aufteilung des Eingaberaums in Teilmengen, die als gleichartig für Testzwecke angenommen werden." },
          { term: "Grenzwertanalyse", definition: "Gezielte Testfallauswahl an den Rändern von Äquivalenzklassen." },
        ],
        examples: [
          "Testet man eine Funktion, die nur Eingaben zwischen 1 und 100 akzeptieren soll, wählt die Grenzwertanalyse gezielt die Testfälle 0, 1, 100 und 101 — genau an den kritischen Übergängen der Gültigkeitsgrenze.",
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Weiße-Box- und Schwarze-Box-Tests",
        body: [
          "Beim Blackbox-Test wird der Algorithmus nur über seine Ein-/Ausgabe-Beziehung getestet, ohne Kenntnis der internen Implementierung — Testfälle werden aus der Spezifikation abgeleitet. Beim Whitebox-Test kennt man die interne Struktur und leitet Testfälle so ab, dass bestimmte Code-Pfade oder -Zweige tatsächlich durchlaufen werden (z. B. Zweigüberdeckung: jeder if/else-Zweig wird mindestens einmal ausgeführt).",
          "Beide Testarten ergänzen sich: Blackbox-Tests prüfen, ob die Spezifikation korrekt umgesetzt wurde, Whitebox-Tests stellen sicher, dass auch selten ausgeführte Code-Pfade (z. B. Fehlerbehandlung) tatsächlich getestet werden.",
        ],
        terms: [
          { term: "Blackbox-Test", definition: "Test, der nur die Ein-/Ausgabe-Beziehung prüft, ohne die interne Implementierung zu kennen." },
          { term: "Whitebox-Test", definition: "Test, der gezielt interne Code-Pfade auf Basis der bekannten Implementierung überdeckt." },
        ],
        examples: [
          "Ein Blackbox-Test einer Sortierfunktion prüft nur, ob die Ausgabe für verschiedene Eingabelisten korrekt sortiert ist; ein Whitebox-Test stellt zusätzlich sicher, dass auch der Sonderfall einer bereits sortierten oder leeren Liste den entsprechenden Code-Zweig durchläuft.",
        ],
      },
    ],
  },
  // ==================== Kapitel 6 ====================
  {
    id: "datenstrukturen-listen-keller-schlangen",
    number: 6,
    title: "Datenstrukturen I: Abstrakte Datentypen, Listen, Keller und Schlangen",
    free: false,
    intro:
      "Datenstrukturen organisieren, wie Daten im Speicher abgelegt und zugänglich gemacht werden. Dieses Kapitel behandelt das Konzept des abstrakten Datentyps sowie die grundlegenden linearen Strukturen.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Abstrakte Datentypen",
        body: [
          "Ein abstrakter Datentyp (ADT) definiert eine Menge von Werten zusammen mit den auf ihnen erlaubten Operationen, unabhängig von der konkreten Implementierung. Diese Trennung von Schnittstelle und Implementierung erlaubt es, die interne Realisierung (z. B. Array vs. verkettete Liste) auszutauschen, ohne den Code zu verändern, der den ADT verwendet.",
          "Diese Abstraktion ist ein zentrales Prinzip guten Software-Designs: Nutzer eines ADT müssen nur die Schnittstelle (welche Operationen mit welchem Verhalten existieren) kennen, nicht die konkrete Datenrepräsentation dahinter.",
        ],
        terms: [{ term: "Abstrakter Datentyp (ADT)", definition: "Definition von Werten und erlaubten Operationen, unabhängig von der konkreten Implementierung." }],
        examples: [
          "Der ADT 'Menge' definiert Operationen wie Einfügen, Enthaltensein-Prüfen und Löschen — ob dahinter ein Array, eine Hashtabelle oder ein balancierter Baum implementiert ist, bleibt für den Nutzer der Menge unsichtbar.",
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Listen: Array- und verkettete Implementierung",
        body: [
          "Eine Liste speichert Elemente in einer bestimmten Reihenfolge. Bei einer Array-basierten Implementierung ist der Zugriff auf ein beliebiges Element in konstanter Zeit O(1) möglich, aber das Einfügen/Löschen in der Mitte erfordert das Verschieben nachfolgender Elemente (O(n)). Bei einer verketteten Liste (jedes Element speichert einen Zeiger auf das nächste) ist Einfügen/Löschen an bekannter Position in O(1) möglich, aber der Zugriff auf ein beliebiges Element erfordert das sequentielle Durchlaufen (O(n)).",
          "Die Wahl zwischen beiden Implementierungen hängt vom Nutzungsmuster ab: häufiger wahlfreier Zugriff spricht für Arrays, häufiges Einfügen/Löschen an beliebiger Stelle spricht für verkettete Listen.",
          "Bei der beschriebenen (einfach verketteten) Liste kennt jedes Element nur seinen Nachfolger — das Entfernen eines bereits bekannten Knotens erfordert daher trotzdem, zunächst dessen Vorgänger durch Durchlaufen der Liste zu finden (O(n)). Eine doppelt verkettete Liste speichert zusätzlich einen Zeiger auf den Vorgänger jedes Elements: Das Entfernen eines bekannten Knotens gelingt dadurch in O(1), ebenso die Rückwärtstraversierung der Liste — auf Kosten des zusätzlichen Speicherbedarfs für den zweiten Zeiger pro Element.",
        ],
        table: {
          caption: "Array vs. einfach vs. doppelt verkettete Liste: Laufzeit wichtiger Operationen",
          headers: ["Operation", "Array", "Einfach verkettete Liste", "Doppelt verkettete Liste"],
          rows: [
            ["Zugriff auf Element an Position i", "O(1)", "O(n)", "O(n)"],
            ["Einfügen/Löschen am Anfang", "O(n)", "O(1)", "O(1)"],
            ["Entfernen eines bekannten Knotens", "O(n)", "O(n) (Vorgänger muss gesucht werden)", "O(1)"],
          ],
        },
        terms: [
          { term: "Verkettete Liste", definition: "Listenimplementierung, bei der jedes Element einen Zeiger auf das nächste Element speichert." },
          { term: "Doppelt verkettete Liste", definition: "Verkettete Liste, bei der jedes Element zusätzlich einen Zeiger auf sein Vorgänger-Element speichert." },
        ],
        examples: [
          "Fügt man wiederholt Elemente am Anfang einer Liste ein, ist eine verkettete Liste (O(1) pro Einfügung) einem Array (O(n) pro Einfügung, da alle Elemente verschoben werden müssen) deutlich überlegen.",
          "Ist ein Knoten in der Mitte einer Liste bereits bekannt (z. B. über einen gespeicherten Zeiger) und soll entfernt werden, benötigt eine einfach verkettete Liste trotzdem O(n), um den Vorgänger zu finden — eine doppelt verkettete Liste kennt den Vorgänger direkt und entfernt den Knoten in O(1).",
        ],
      },
      {
        id: "6-3",
        heading: "6.3 Keller (Stack) und Schlange (Queue)",
        body: [
          "Ein Keller (Stack) folgt dem LIFO-Prinzip (Last In, First Out): Nur das zuletzt eingefügte Element (oben) kann entnommen werden (push/pop, beide O(1) bei geeigneter Implementierung). Eine Schlange (Queue) folgt dagegen dem FIFO-Prinzip (First In, First Out): Elemente werden am Ende eingefügt (enqueue) und am Anfang entnommen (dequeue).",
          "Beide Strukturen sind Spezialisierungen der allgemeinen Liste mit eingeschränkter Zugriffsreihenfolge — diese Einschränkung erlaubt gleichzeitig besonders effiziente Implementierungen und ist algorithmisch fundamental (z. B. Keller für Rekursion/Backtracking, Schlangen für Breitensuche).",
        ],
        terms: [
          { term: "Keller (Stack, LIFO)", definition: "Datenstruktur, bei der nur das zuletzt eingefügte Element entnommen werden kann." },
          { term: "Schlange (Queue, FIFO)", definition: "Datenstruktur, bei der das zuerst eingefügte Element zuerst entnommen wird." },
        ],
        examples: [
          "Der Rückgängig-Button (Undo) einer Textverarbeitung nutzt typischerweise einen Keller: die zuletzt ausgeführte Aktion wird zuerst rückgängig gemacht. Eine Warteschlange am Bankschalter folgt dagegen dem FIFO-Prinzip einer Queue.",
        ],
      },
    ],
  },
  // ==================== Kapitel 7 ====================
  {
    id: "datenstrukturen-graphen-baeume",
    number: 7,
    title: "Datenstrukturen II: Graphen, Bäume und binäre Suchbäume",
    free: false,
    intro:
      "Über lineare Strukturen hinaus benötigen viele Probleme hierarchische oder vernetzte Datenstrukturen. Dieses Kapitel führt Graphen und Bäume als zentrale nichtlineare Strukturen ein.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Graphen: Grundbegriffe",
        body: [
          "Ein Graph G=(V,E) besteht aus einer Knotenmenge V und einer Kantenmenge E⊆V×V. Bei einem ungerichteten Graphen sind Kanten ungeordnete Paare (die Kante {u,v} verbindet u und v symmetrisch), bei einem gerichteten Graphen sind Kanten geordnete Paare (u,v) mit einer Richtung von u nach v. Der Grad eines Knotens gibt die Anzahl der mit ihm verbundenen Kanten an.",
          "Graphen lassen sich als Adjazenzmatrix (n×n-Matrix, Eintrag 1 falls Kante vorhanden) oder als Adjazenzliste (jeder Knoten speichert eine Liste seiner Nachbarn) implementieren. Adjazenzlisten sind bei dünn besetzten Graphen (wenige Kanten relativ zu Knoten) speichereffizienter.",
        ],
        terms: [
          { term: "Adjazenzmatrix", definition: "n×n-Matrix zur Repräsentation eines Graphen; Eintrag zeigt Vorhandensein einer Kante an." },
          { term: "Adjazenzliste", definition: "Speicherung eines Graphen, bei der jeder Knoten eine Liste seiner Nachbarn führt." },
        ],
        examples: [
          "Ein soziales Netzwerk mit 1 Million Nutzern, aber im Schnitt nur 200 Verbindungen pro Nutzer, wird effizienter als Adjazenzliste (200 Millionen Einträge) statt als Adjazenzmatrix (1 Billion Einträge) gespeichert.",
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Bäume als spezielle Graphen",
        body: [
          "Ein Baum ist ein zusammenhängender, kreisfreier ungerichteter Graph. Ein Baum mit n Knoten besitzt stets genau n−1 Kanten. Wählt man einen Knoten als Wurzel aus, entsteht ein gewurzelter Baum mit Eltern-Kind-Beziehungen; Knoten ohne Kinder heißen Blätter.",
          "Die Höhe eines Baumes (die Länge des längsten Pfads von der Wurzel zu einem Blatt) bestimmt maßgeblich die Effizienz vieler Algorithmen auf Bäumen — je flacher (balancierter) der Baum, desto schneller viele Operationen.",
        ],
        formulas: ["Kantenanzahl eines Baumes = n − 1"],
        formulasLatex: ["|E| = n - 1"],
        terms: [{ term: "Gewurzelter Baum", definition: "Baum mit ausgezeichnetem Wurzelknoten und daraus abgeleiteten Eltern-Kind-Beziehungen." }],
        examples: [
          "Ein Dateisystem lässt sich als gewurzelter Baum modellieren: das Wurzelverzeichnis ist die Wurzel, Unterordner sind innere Knoten, Dateien sind Blätter.",
        ],
      },
      {
        id: "7-3",
        heading: "7.3 Binäre Suchbäume",
        body: [
          "Ein binärer Suchbaum ist ein Binärbaum (jeder Knoten hat höchstens zwei Kinder), bei dem für jeden Knoten gilt: alle Werte im linken Teilbaum sind kleiner, alle Werte im rechten Teilbaum sind größer als der Knotenwert. Diese Ordnungseigenschaft erlaubt Suchen, Einfügen und Löschen in O(h), wobei h die Höhe des Baumes ist.",
          "Im ungünstigsten Fall (z. B. Einfügen bereits sortierter Werte) entartet ein unbalancierter binärer Suchbaum zu einer Liste mit Höhe h=n, wodurch Operationen auf O(n) verschlechtern. Balancierte Suchbäume (z. B. AVL-Bäume, Rot-Schwarz-Bäume) garantieren dagegen h=O(log n) durch aktive Ausgleichsoperationen bei jeder Änderung.",
          "Ein AVL-Baum (benannt nach Adelson-Velsky und Landis) definiert Balance formal über den Balance-Faktor eines Knotens: BF(v) = h(rechter Teilbaum) − h(linker Teilbaum). Das AVL-Kriterium verlangt |BF(v)| ≤ 1 für JEDEN Knoten v. Wird dieses Kriterium nach einer Einfüge- oder Löschoperation verletzt, stellt eine Rotation (Links-, Rechts- oder eine Kombination aus beiden) die Balance lokal wieder her, ohne die Ordnungseigenschaft des Suchbaums zu verletzen.",
        ],
        formulas: ["BF(v) = h(rechts) − h(links), |BF(v)| ≤ 1"],
        formulasLatex: ["BF(v) = h(\\text{rechts}) - h(\\text{links}),\\quad |BF(v)|\\le 1"],
        terms: [
          { term: "Binärer Suchbaum", definition: "Binärbaum mit Ordnungseigenschaft: linker Teilbaum kleiner, rechter Teilbaum größer als der Knoten." },
          { term: "AVL-Kriterium (Balance-Faktor)", definition: "Bedingung |BF(v)|≤1 für jeden Knoten v; garantiert Höhe O(log n)." },
        ],
        examples: [
          "Fügt man die Werte 1,2,3,4,5 in dieser Reihenfolge in einen (unbalancierten) binären Suchbaum ein, entsteht eine reine 'Rechtskette' mit Höhe 5 — die Suche nach dem Wert 5 benötigt dann 5 statt der bei Balance möglichen ~3 Schritte (log₂5≈2,3).",
          "Hat ein Knoten einen linken Teilbaum der Höhe 3 und einen rechten Teilbaum der Höhe 1, beträgt sein Balance-Faktor BF=1−3=−2 — das AVL-Kriterium ist verletzt (|−2|>1), eine Rotation muss die Balance wiederherstellen.",
        ],
      },
    ],
  },
  // ==================== Kapitel 8 ====================
  {
    id: "komplexitaet-algorithmen",
    number: 8,
    title: "Komplexität von Algorithmen",
    free: false,
    intro:
      "Um Algorithmen fair zu vergleichen, braucht es ein von konkreter Hardware unabhängiges Effizienzmaß. Dieses Kapitel führt die Landau-Notation ein und behandelt die Grundzüge der Komplexitätsklassifikation.",
    sections: [
      {
        id: "10-1",
        heading: "8.1 Die Landau-Notation (O-Notation)",
        body: [
          "Die O-Notation beschreibt das asymptotische Wachstum des Ressourcenbedarfs (Zeit/Speicher) eines Algorithmus in Abhängigkeit von der Eingabegröße n, unabhängig von konstanten Faktoren und niedrigeren Ordnungstermen. f(n)=O(g(n)) bedeutet formal: es existieren Konstanten c>0 und n₀, sodass f(n)≤c·g(n) für alle n≥n₀.",
          "Neben der oberen Schranke O (Worst-Case-Abschätzung nach oben) gibt es Ω (untere Schranke) und Θ (exakte asymptotische Ordnung, wenn obere und untere Schranke übereinstimmen). In der Praxis wird meist O verwendet, da es die relevante Garantie für den ungünstigsten Fall liefert.",
        ],
        formulas: ["f(n) = O(g(n)) ⇔ ∃c,n₀: f(n) ≤ c·g(n) ∀n≥n₀"],
        formulasLatex: ["f(n)=O(g(n)) \\iff \\exists c,n_0:\\, f(n)\\le c\\cdot g(n)\\;\\forall n\\ge n_0"],
        terms: [{ term: "O-Notation", definition: "Asymptotische obere Schranke des Ressourcenbedarfs eines Algorithmus in Abhängigkeit von der Eingabegröße." }],
        examples: [
          "Ein Algorithmus mit exakter Laufzeit f(n)=3n²+5n+2 ist O(n²): für n₀=1 und c=10 gilt 3n²+5n+2 ≤ 10n² für alle n≥1 — die niedrigeren Terme und der konstante Faktor werden in der O-Notation ignoriert.",
        ],
      },
      {
        id: "10-2",
        heading: "8.2 Wichtige Komplexitätsklassen im Vergleich",
        body: [
          "Gängige Laufzeitklassen in aufsteigender Reihenfolge: O(1) (konstant), O(log n) (logarithmisch, z. B. binäre Suche), O(n) (linear), O(n log n) (z. B. Mergesort), O(n²) (quadratisch, z. B. Insertion Sort), O(2ⁿ) (exponentiell) und O(n!) (faktoriell). Bereits bei moderaten n unterscheidet sich das praktische Laufzeitverhalten dieser Klassen dramatisch.",
          "Diese Unterschiede sind praktisch bedeutsam: Ein O(n²)-Algorithmus mag für n=1.000 noch akzeptabel sein (1 Million Schritte), wird aber für n=1.000.000 (1 Billion Schritte) unbrauchbar, während ein O(n log n)-Algorithmus für dieselbe Eingabegröße nur etwa 20 Millionen Schritte benötigt.",
        ],
        table: {
          caption: "Wachstum der Schrittzahl bei n=10",
          headers: ["Klasse", "Name", "Beispielalgorithmus", "Schritte bei n=10"],
          rows: [
            ["O(1)", "konstant", "Array-Zugriff per Index", "1"],
            ["O(log n)", "logarithmisch", "binäre Suche", "≈3"],
            ["O(n)", "linear", "lineare Suche", "10"],
            ["O(n log n)", "quasi-linear", "Mergesort", "≈33"],
            ["O(n²)", "quadratisch", "Insertion Sort", "100"],
            ["O(2ⁿ)", "exponentiell", "alle Teilmengen erzeugen", "1.024"],
            ["O(n!)", "faktoriell", "alle Permutationen erzeugen", "3.628.800"],
          ],
        },
        examples: [
          "Für n=20 benötigt ein O(2ⁿ)-Algorithmus bereits über 1 Million Schritte, ein O(n!)-Algorithmus über 2×10¹⁸ Schritte — beide Klassen werden für praktische Eingabegrößen schnell unbrauchbar, weshalb NP-vollständige Probleme (die aktuell keine bekannten Polynomialzeit-Algorithmen besitzen) als praktisch schwer gelten.",
        ],
      },
      {
        id: "10-3",
        heading: "8.3 P, NP und NP-Vollständigkeit",
        body: [
          "Die Klasse P umfasst Probleme, die in Polynomialzeit (O(n^k) für eine Konstante k) lösbar sind. Die Klasse NP umfasst Probleme, deren Lösung sich in Polynomialzeit VERIFIZIEREN lässt (auch wenn das Finden der Lösung selbst länger dauern könnte). Es gilt offensichtlich P⊆NP; ob P=NP gilt, ist eines der bedeutendsten ungelösten Probleme der Informatik.",
          "Ein Problem heißt NP-vollständig, wenn es in NP liegt und jedes andere NP-Problem sich in Polynomialzeit darauf reduzieren lässt — NP-vollständige Probleme (wie SAT aus Kapitel 1, oder das Problem des Handlungsreisenden) gelten als die 'schwersten' Probleme in NP: Fände man für eines von ihnen einen Polynomialzeit-Algorithmus, würde daraus P=NP folgen.",
        ],
        terms: [
          { term: "P", definition: "Klasse der in Polynomialzeit lösbaren Entscheidungsprobleme." },
          { term: "NP", definition: "Klasse der Entscheidungsprobleme, deren Lösung sich in Polynomialzeit verifizieren lässt." },
          { term: "NP-Vollständigkeit", definition: "Eigenschaft eines NP-Problems, mindestens so schwer wie jedes andere NP-Problem zu sein." },
        ],
        examples: [
          "Das Problem des Handlungsreisenden (kürzeste Rundreise durch n Städte) ist NP-vollständig: Eine vorgeschlagene Route lässt sich schnell auf ihre Gesamtlänge prüfen (NP), aber kein Polynomialzeit-Algorithmus zum FINDEN der optimalen Route ist bekannt.",
        ],
      },
    ],
  },
  // ==================== Kapitel 9 ====================
  {
    id: "sortierverfahren",
    number: 9,
    title: "Sortierverfahren",
    free: false,
    intro:
      "Sortieren ist eines der am häufigsten untersuchten algorithmischen Grundprobleme. Dieses Kapitel behandelt mehrere klassische Sortierverfahren mit unterschiedlichen Laufzeit- und Speichereigenschaften.",
    sections: [
      {
        id: "8-1",
        heading: "9.1 Einfache Sortierverfahren: Insertion Sort und Selection Sort",
        body: [
          "Insertion Sort baut die sortierte Ausgabe schrittweise auf, indem es jedes Element an der richtigen Stelle in den bereits sortierten Teil der Liste einfügt — effizient bei bereits fast sortierten Listen (bestenfalls O(n)), im Mittel und schlechtesten Fall O(n²). Selection Sort sucht in jedem Durchlauf das kleinste (verbleibende) Element und tauscht es an die richtige Position — stets O(n²), unabhängig von der Vorsortierung, aber mit minimaler Anzahl an Vertauschungen.",
          "Beide Verfahren benötigen nur konstanten zusätzlichen Speicherplatz (In-Place-Sortierung) und sind für kleine oder fast sortierte Datenmengen praktisch durchaus konkurrenzfähig, trotz ihrer quadratischen Worst-Case-Laufzeit.",
        ],
        terms: [{ term: "In-Place-Sortierung", definition: "Sortierverfahren, das nur konstanten zusätzlichen Speicherplatz benötigt." }],
        examples: [
          "Bei der fast sortierten Liste [1,2,4,3,5] benötigt Insertion Sort nur einen einzigen Vertauschungsschritt (4 und 3 tauschen), während Selection Sort unabhängig von der Vorsortierung immer alle Positionen durchsucht.",
        ],
      },
      {
        id: "8-2",
        heading: "9.2 Mergesort",
        body: [
          "Mergesort ist ein Divide-and-Conquer-Verfahren: Die Liste wird rekursiv in zwei Hälften geteilt, bis Teillisten der Länge 1 entstehen (per Definition sortiert), und anschließend werden je zwei sortierte Teillisten in linearer Zeit zu einer sortierten Liste verschmolzen (Merge-Schritt). Die Laufzeit beträgt in jedem Fall (bestenfalls, mittel, schlechtestenfalls) O(n log n).",
          "Mergesort ist stabil (die relative Reihenfolge gleicher Elemente bleibt erhalten), benötigt aber zusätzlichen Speicherplatz O(n) für den Merge-Schritt — ein klassischer Zeit-gegen-Speicher-Kompromiss gegenüber In-Place-Verfahren wie Quicksort.",
        ],
        formulas: ["T(n) = 2T(n/2) + O(n) ⇒ T(n) = O(n log n)"],
        formulasLatex: ["T(n) = 2T(n/2) + O(n) \\;\\Rightarrow\\; T(n) = O(n\\log n)"],
        terms: [{ term: "Stabiles Sortierverfahren", definition: "Sortierverfahren, das die relative Reihenfolge gleicher Elemente unverändert lässt." }],
        examples: [
          "Beim Mergen der sortierten Teillisten [2,5,8] und [1,3,9] vergleicht man jeweils die vordersten Elemente beider Listen und übernimmt das kleinere: Ergebnis [1,2,3,5,8,9] nach 5 Vergleichen, in linearer Zeit zur Gesamtlänge.",
        ],
      },
      {
        id: "8-3",
        heading: "9.3 Quicksort",
        body: [
          "Quicksort wählt ein Pivot-Element, partitioniert die Liste in Elemente kleiner und größer als das Pivot, und sortiert beide Partitionen rekursiv. Im Durchschnitt (bei guter Pivot-Wahl) beträgt die Laufzeit O(n log n); im ungünstigsten Fall (z. B. Pivot ist stets das kleinste/größte Element, etwa bei bereits sortierten Listen und naiver Pivot-Wahl) verschlechtert sie sich auf O(n²).",
          "Anders als Mergesort arbeitet Quicksort In-Place (kein wesentlicher zusätzlicher Speicherbedarf) — in der Praxis ist Quicksort deshalb bei zufälligen Daten häufig schneller als Mergesort, trotz der schlechteren Worst-Case-Garantie.",
        ],
        table: {
          caption: "Die Sortierverfahren im Vergleich",
          headers: ["Verfahren", "Best Case", "Average Case", "Worst Case", "Speicher", "Stabil?"],
          rows: [
            ["Insertion Sort", "O(n)", "O(n²)", "O(n²)", "O(1)", "ja"],
            ["Selection Sort", "O(n²)", "O(n²)", "O(n²)", "O(1)", "nein"],
            ["Mergesort", "O(n log n)", "O(n log n)", "O(n log n)", "O(n)", "ja"],
            ["Quicksort", "O(n log n)", "O(n log n)", "O(n²)", "O(log n) (Rekursionsstapel)", "nein"],
            ["Heapsort", "O(n log n)", "O(n log n)", "O(n log n)", "O(1)", "nein"],
          ],
        },
        formulas: ["T_mittel(n) = O(n log n), T_worst(n) = O(n²)"],
        formulasLatex: ["T_{\\text{mittel}}(n) = O(n\\log n),\\quad T_{\\text{worst}}(n) = O(n^2)"],
        terms: [{ term: "Pivot-Element", definition: "Vergleichselement in Quicksort, das die Liste in kleinere/größere Teile partitioniert." }],
        examples: [
          "Wählt man bei der bereits absteigend sortierten Liste [9,8,7,6,5] stets das erste Element als Pivot, entsteht bei jedem Partitionierungsschritt eine leere und eine um 1 kleinere Partition — der ungünstigste Fall mit O(n²) Laufzeit.",
        ],
      },
      {
        id: "8-4",
        heading: "9.4 Heapsort",
        body: [
          "Ein (Max-)Heap ist ein vollständiger Binärbaum mit der Heap-Eigenschaft: Der Wert jedes Knotens ist mindestens so groß wie die Werte seiner Kinder — insbesondere steht das Maximum stets an der Wurzel. Da ein Heap vollständig ist (alle Ebenen bis auf die letzte voll besetzt), lässt er sich platzsparend als Array speichern, ohne explizite Zeiger: Für einen Knoten an Index i liegen seine Kinder an den Indizes 2i+1 und 2i+2.",
          "Heapsort nutzt diese Struktur in zwei Phasen: Zunächst wird das unsortierte Array in O(n) zu einem Max-Heap umgeformt (BottomUp-Heapify: von den untersten inneren Knoten beginnend aufwärts wird die Heap-Eigenschaft schrittweise per Sift-Down wiederhergestellt). Anschließend wird n-mal das Wurzelelement (das jeweils aktuelle Maximum) mit dem letzten Heap-Element vertauscht, der Heap um ein Element verkleinert, und die Heap-Eigenschaft an der Wurzel erneut per Sift-Down in O(log n) wiederhergestellt.",
          "Da sowohl der Heap-Aufbau (O(n)) als auch die n Sift-Down-Operationen (je O(log n)) zur Gesamtlaufzeit beitragen, ergibt sich für Heapsort in JEDEM Fall (Best, Average, Worst Case) eine Laufzeit von O(n log n) — anders als Quicksort besitzt Heapsort also keinen quadratischen Worst-Case und arbeitet zudem In-Place (O(1) Zusatzspeicher), ist aber (anders als Mergesort) nicht stabil.",
        ],
        formulas: ["T(n) = O(n) + n·O(log n) = O(n log n)"],
        formulasLatex: ["T(n) = \\underbrace{O(n)}_{\\text{Heap-Aufbau}} + n\\cdot\\underbrace{O(\\log n)}_{\\text{Sift-Down}} = O(n\\log n)"],
        terms: [{ term: "BottomUp-Heapsort (Heapify)", definition: "Aufbau eines Max-Heaps aus einem unsortierten Array in O(n), beginnend bei den untersten inneren Knoten." }],
        examples: [
          "Für das Array [3,9,2,7,5] entsteht nach BottomUp-Heapify der Max-Heap [9,7,2,3,5] (die Wurzel enthält das Maximum 9). Die erste Sift-Down-Operation vertauscht 9 mit dem letzten Element (5), verkleinert den Heap auf 4 Elemente [5,7,2,3] und stellt die Heap-Eigenschaft wieder her, sodass 7 zur neuen Wurzel wird — dieser Vorgang wiederholt sich, bis das Array vollständig sortiert ist.",
        ],
      },
    ],
  },
  // ==================== Kapitel 10 ====================
  {
    id: "kuerzeste-wege-spannbaeume",
    number: 10,
    title: "Datenstrukturen III: Kürzeste Wege und minimale Spannbäume",
    free: false,
    intro:
      "Graphalgorithmen lösen praktisch bedeutsame Probleme wie Routenplanung und Netzwerkdesign. Dieses Kapitel behandelt die klassischen Algorithmen zur Bestimmung kürzester Wege und minimaler Spannbäume.",
    sections: [
      {
        id: "9-1",
        heading: "10.1 Breiten- und Tiefensuche",
        body: [
          "Die Breitensuche (BFS) durchläuft einen Graphen ebenenweise ausgehend von einem Startknoten und findet dabei in ungewichteten Graphen den kürzesten Weg (gemessen in Kantenanzahl) zu jedem erreichbaren Knoten. Die Tiefensuche (DFS) verfolgt dagegen jeden Pfad so weit wie möglich, bevor sie zurückgeht (Backtracking), und eignet sich u. a. zur Erkennung von Zusammenhangskomponenten und Zyklen.",
          "Beide Verfahren besitzen eine Laufzeit von O(|V|+|E|) bei Adjazenzlisten-Darstellung, unterscheiden sich aber in der verwendeten Hilfsstruktur: BFS nutzt eine Schlange (FIFO), DFS nutzt einen Keller (LIFO) bzw. Rekursion.",
        ],
        table: {
          caption: "Breitensuche vs. Tiefensuche",
          headers: ["", "BFS", "DFS"],
          rows: [
            ["Hilfsstruktur", "Schlange (FIFO)", "Keller (LIFO) bzw. Rekursion"],
            ["Kürzester Weg (ungewichtet)?", "ja", "nein"],
            ["Laufzeit (Adjazenzliste)", "O(|V|+|E|)", "O(|V|+|E|)"],
          ],
        },
        terms: [
          { term: "Breitensuche (BFS)", definition: "Graphdurchlauf ebenenweise vom Startknoten; findet kürzeste Wege in ungewichteten Graphen." },
          { term: "Tiefensuche (DFS)", definition: "Graphdurchlauf, der jeden Pfad maximal verfolgt, bevor er zurückgeht." },
        ],
        examples: [
          "Um in einem sozialen Netzwerk den kürzesten Bekanntschaftspfad zwischen zwei Personen zu finden (gemessen in Anzahl der Zwischenpersonen), ist BFS das geeignete Verfahren, da es garantiert den kürzesten Pfad zuerst findet.",
        ],
      },
      {
        id: "9-2",
        heading: "10.2 Der Dijkstra-Algorithmus",
        body: [
          "Der Dijkstra-Algorithmus berechnet kürzeste Wege von einem Startknoten zu allen anderen Knoten in einem Graphen mit nichtnegativen Kantengewichten. Er hält für jeden Knoten eine vorläufige Distanzschätzung, wählt in jedem Schritt greedy den noch nicht endgültig bestimmten Knoten mit kleinster vorläufiger Distanz, und aktualisiert (relaxiert) die Distanzen seiner Nachbarn.",
          "Die Korrektheit von Dijkstra beruht entscheidend auf der Nichtnegativität der Kantengewichte: Bei negativen Gewichten kann ein bereits als 'endgültig' markierter Knoten später doch noch über einen anderen Pfad günstiger erreichbar sein, wodurch der Algorithmus fehlerhafte Ergebnisse liefern würde.",
        ],
        terms: [{ term: "Dijkstra-Algorithmus", definition: "Greedy-Algorithmus zur Berechnung kürzester Wege in Graphen mit nichtnegativen Kantengewichten." }],
        examples: [
          "In einem Straßennetz mit Fahrzeiten als Kantengewichten berechnet Dijkstra ausgehend vom Startpunkt die schnellste Route zu jedem anderen Ort — er versagt aber, sobald 'negative Fahrzeiten' (z. B. modellierte Belohnungen) im Graphen vorkommen.",
        ],
      },
      {
        id: "9-3",
        heading: "10.3 Minimale Spannbäume: Kruskal und Prim",
        body: [
          "Ein Spannbaum eines zusammenhängenden Graphen ist ein Teilgraph, der alle Knoten mit der minimal möglichen Anzahl an Kanten (n−1) verbindet, ohne Kreise. Ein minimaler Spannbaum minimiert zusätzlich die Summe der Kantengewichte. Der Kruskal-Algorithmus fügt Kanten in aufsteigender Gewichtsreihenfolge hinzu, sofern sie keinen Kreis erzeugen; der Prim-Algorithmus wächst stattdessen einen einzigen zusammenhängenden Baum, indem er in jedem Schritt die günstigste Kante zu einem neuen, noch nicht enthaltenen Knoten hinzufügt.",
          "Beide Algorithmen sind Greedy-Verfahren und liefern (anders als beim allgemeinen Wechselgeldproblem aus Kapitel 5) nachweislich immer die global optimale Lösung — eine direkte Folge der sogenannten Schnitteigenschaft minimaler Spannbäume.",
        ],
        terms: [{ term: "Minimaler Spannbaum", definition: "Spannbaum mit minimaler Summe der Kantengewichte." }],
        examples: [
          "Beim Verlegen von Glasfaserkabeln zwischen mehreren Städten mit bekannten Verlegungskosten pro Verbindung liefert ein minimaler Spannbaum die kostengünstigste Verkabelung, die alle Städte verbindet.",
        ],
      },
      {
        id: "9-4",
        heading: "10.4 Eulersche und Hamiltonsche Kreise",
        body: [
          "Ein Eulerkreis ist ein geschlossener Weg durch einen Graphen, der JEDE KANTE genau einmal durchläuft (Knoten dürfen dabei mehrfach besucht werden). Ein zusammenhängender Graph besitzt genau dann einen Eulerkreis, wenn jeder Knoten geraden Grad hat (Satz von Euler) — besitzen genau zwei Knoten ungeraden Grad, existiert immerhin ein offener Eulerweg (Start und Ende an den beiden ungeradzahligen Knoten).",
          "Ein Hamiltonkreis ist demgegenüber ein geschlossener Weg, der JEDEN KNOTEN genau einmal besucht (Kanten können dabei ausgelassen werden). Anders als beim Eulerkreis gibt es für die Existenz eines Hamiltonkreises kein einfaches notwendiges-und-hinreichendes Kriterium — das Entscheidungsproblem ist NP-vollständig (siehe Kapitel 8), sodass im Allgemeinen nur Brute-Force-Suche über alle n! Knotenpermutationen bleibt.",
        ],
        formulas: ["Σ deg(v) = 2 · |E|"],
        formulasLatex: ["\\sum_{v\\in V} \\deg(v) = 2|E|"],
        terms: [
          { term: "Eulerkreis", definition: "Geschlossener Weg, der jede Kante eines Graphen genau einmal durchläuft." },
          { term: "Hamiltonkreis", definition: "Geschlossener Weg, der jeden Knoten eines Graphen genau einmal besucht." },
        ],
        examples: [
          "Ein Graph mit vier Knoten A,B,C,D und Kanten {A-B, B-C, C-D, D-A, A-C} hat deg(A)=3, deg(B)=2, deg(C)=3, deg(D)=2 (Summe 10 = 2·5 Kanten, Handschlaglemma erfüllt). Da A und C ungeraden Grad haben, existiert kein Eulerkreis, aber ein Eulerweg von A nach C.",
        ],
      },
      {
        id: "9-5",
        heading: "10.5 Der Bellman-Ford-Algorithmus",
        body: [
          "Der Bellman-Ford-Algorithmus berechnet wie Dijkstra kürzeste Wege von einem Startknoten zu allen anderen Knoten, funktioniert aber im Gegensatz zu Dijkstra auch bei NEGATIVEN Kantengewichten. Statt greedy den nächstgünstigsten Knoten zu wählen, relaxiert Bellman-Ford in |V|−1 Runden systematisch ALLE Kanten des Graphen: In jeder Runde wird für jede Kante (u,v) geprüft, ob der Weg über u eine kürzere Distanz zu v liefert als die bisher bekannte, und die Distanz gegebenenfalls aktualisiert.",
          "Nach |V|−1 Runden sind alle kürzesten Wege korrekt berechnet, sofern der Graph keinen vom Startknoten aus erreichbaren negativen Zyklus enthält (einen Kreis, dessen Kantengewichte in Summe negativ sind — dort gäbe es keinen kürzesten Weg mehr, da man durch beliebig häufiges Durchlaufen des Zyklus die Distanz beliebig weit senken könnte). Eine zusätzliche |V|-te Runde prüft genau das: Lässt sich in dieser Runde noch eine Distanz verbessern, enthält der Graph einen negativen Zyklus.",
        ],
        formulas: ["T(n) = O(|V| · |E|)"],
        formulasLatex: ["T = O(|V|\\cdot|E|)"],
        terms: [
          { term: "Bellman-Ford-Algorithmus", definition: "Verfahren zur Berechnung kürzester Wege, das auch bei negativen Kantengewichten korrekt arbeitet." },
          { term: "Negativer Zyklus", definition: "Kreis in einem Graphen, dessen Kantengewichte in Summe negativ sind; macht kürzeste Wege undefiniert." },
        ],
        examples: [
          "In einem Graphen mit Kanten A→B (Gewicht 4), A→C (Gewicht 5), B→C (Gewicht −3) berechnet Dijkstra für C fälschlich die Distanz 5 (direkter Weg A→C), da er B nach der ersten Betrachtung bereits als endgültig markiert. Bellman-Ford erkennt dagegen in einer weiteren Runde, dass der Weg A→B→C mit Gesamtgewicht 4+(−3)=1 kürzer ist, und aktualisiert die Distanz zu C korrekt auf 1.",
        ],
      },
    ],
  },
  // ==================== Kapitel 11 ====================
  {
    id: "uml-anwendungsfall-klassen-objekte",
    number: 11,
    title: "UML: Anwendungsfall-, Klassen- und Objektdiagramme",
    free: false,
    intro:
      "Die Unified Modeling Language (UML) liefert eine standardisierte grafische Notation, um Softwaresysteme zu entwerfen und zu dokumentieren. Dieses Kapitel behandelt die strukturellen Diagrammtypen zur Modellierung von Anforderungen und Datenmodellen.",
    sections: [
      {
        id: "11-1",
        heading: "11.1 Anwendungsfalldiagramme",
        body: [
          "Ein Anwendungsfalldiagramm (Use-Case-Diagramm) beschreibt aus Nutzersicht, welche Funktionalitäten ('Anwendungsfälle') ein System bereitstellt, und welche Akteure (Nutzer oder externe Systeme) mit welchen Anwendungsfällen interagieren. Es abstrahiert bewusst von der internen Implementierung und konzentriert sich auf das WAS (welche Funktionen), nicht das WIE.",
          "Beziehungen zwischen Anwendungsfällen wie «include» (ein Anwendungsfall schließt einen anderen zwingend ein) und «extend» (ein Anwendungsfall erweitert einen anderen optional) strukturieren komplexere Anforderungen, ohne Funktionalität mehrfach zu beschreiben.",
        ],
        terms: [{ term: "Anwendungsfall (Use Case)", definition: "Beschreibung einer vom System bereitgestellten Funktionalität aus Nutzersicht." }],
        examples: [
          "Ein Online-Shop-System könnte die Anwendungsfälle 'Bestellung aufgeben' (Akteur: Kunde) und 'Zahlung verarbeiten' (Akteur: Zahlungsdienstleister) modellieren, wobei 'Bestellung aufgeben' den Anwendungsfall 'Zahlung verarbeiten' per «include» einschließt.",
        ],
      },
      {
        id: "11-2",
        heading: "11.2 Klassendiagramme",
        body: [
          "Ein Klassendiagramm modelliert die statische Struktur eines Systems: Klassen mit ihren Attributen und Methoden, sowie Beziehungen zwischen Klassen. Wichtige Beziehungstypen sind Assoziation (allgemeine strukturelle Verbindung), Aggregation (Ganzes-Teil-Beziehung, Teile existieren auch unabhängig vom Ganzen) und Komposition (starke Ganzes-Teil-Beziehung, Teile existieren nicht ohne das Ganze).",
          "Vererbung (Generalisierung) modelliert eine Ist-Ein-Beziehung zwischen einer allgemeineren Oberklasse und spezielleren Unterklassen, die deren Attribute und Methoden erben und um eigene ergänzen oder überschreiben können.",
          "Attribute und Methoden tragen zusätzlich ein Sichtbarkeitssymbol, das ihre Zugreifbarkeit von außen regelt: + steht für public (von überall zugreifbar), − für private (nur innerhalb der eigenen Klasse) und # für protected (innerhalb der Klasse und ihrer Unterklassen). Neben der klassischen Vererbung modelliert UML auch abstrakte Klassen (nicht direkt instanziierbar, enthalten mindestens eine nur deklarierte, kursiv dargestellte Methode) und Interfaces (reine Verhaltensverträge ohne eigene Implementierung, gekennzeichnet durch «interface»): Eine Klasse kann nur von EINER Oberklasse erben, aber MEHRERE Interfaces gleichzeitig implementieren — Interfaces erlauben so, unabhängige Rollen zu kombinieren, ohne die Beschränkung der Einfachvererbung.",
        ],
        terms: [
          { term: "Aggregation", definition: "Ganzes-Teil-Beziehung, bei der die Teile auch unabhängig vom Ganzen existieren können." },
          { term: "Komposition", definition: "Starke Ganzes-Teil-Beziehung, bei der die Teile nicht ohne das Ganze existieren." },
          { term: "Sichtbarkeit (+/−/#)", definition: "Symbol vor Attributen/Methoden: + public, − private, # protected." },
          { term: "Interface", definition: "Reiner Verhaltensvertrag ohne eigene Implementierung; eine Klasse kann mehrere Interfaces gleichzeitig implementieren." },
        ],
        examples: [
          "Ein 'Auto' und seine 'Räder' stehen in einer Kompositionsbeziehung (Räder existieren typischerweise nicht unabhängig vom konkreten Auto), während ein 'Auto' und sein 'Fahrer' eher eine Aggregation bilden (der Fahrer existiert unabhängig vom Auto weiter).",
          "Eine Klasse 'Fahrzeug' könnte von der abstrakten Klasse 'Transportmittel' erben UND gleichzeitig die Interfaces 'Versicherbar' und 'Wartungspflichtig' implementieren — Einfachvererbung von der einen Oberklasse, kombiniert mit mehreren unabhängigen Interface-Verträgen.",
        ],
      },
      {
        id: "11-3",
        heading: "11.3 Objektdiagramme und Multiplizitäten",
        body: [
          "Ein Objektdiagramm zeigt eine konkrete Momentaufnahme von Objekten (Instanzen von Klassen) und ihren tatsächlichen Verbindungen zu einem bestimmten Zeitpunkt — im Unterschied zum Klassendiagramm, das die allgemeine, zeitunabhängige Struktur beschreibt. Multiplizitäten an den Enden einer Assoziation (z. B. 1, 0..1, 1..*, 0..*) geben an, wie viele Objekte auf jeder Seite einer Beziehung minimal/maximal beteiligt sein können.",
          "Objektdiagramme sind besonders nützlich, um komplexe oder potenziell missverständliche Multiplizitäten anhand eines konkreten Beispiels zu verdeutlichen, bevor das allgemeine Klassendiagramm final festgelegt wird.",
        ],
        terms: [{ term: "Multiplizität", definition: "Angabe der minimalen und maximalen Anzahl beteiligter Objekte an einem Ende einer Assoziation." }],
        examples: [
          "Eine Assoziation zwischen 'Kunde' und 'Bestellung' mit Multiplizität 1 auf Kundenseite und 0..* auf Bestellungsseite bedeutet: jede Bestellung gehört zu genau einem Kunden, aber ein Kunde kann beliebig viele (auch null) Bestellungen haben.",
        ],
      },
    ],
  },
  // ==================== Kapitel 12 ====================
  {
    id: "uml-verhaltensdiagramme",
    number: 12,
    title: "UML: Verhaltensdiagramme",
    free: false,
    intro:
      "Während Klassen- und Objektdiagramme die statische Struktur zeigen, beschreiben Verhaltensdiagramme, wie sich ein System über die Zeit verhält. Dieses Kapitel behandelt Sequenz-, Zustands- und Aktivitätsdiagramme.",
    sections: [
      {
        id: "12-1",
        heading: "12.1 Sequenzdiagramme",
        body: [
          "Ein Sequenzdiagramm zeigt den zeitlichen Ablauf von Nachrichten (Methodenaufrufen) zwischen Objekten für ein konkretes Szenario. Objekte werden als vertikale Lebenslinien dargestellt, Nachrichten als horizontale (meist beschriftete) Pfeile zwischen ihnen — die vertikale Achse repräsentiert die Zeit, typischerweise von oben nach unten.",
          "Aktivierungsbalken auf den Lebenslinien markieren, während welcher Zeitspanne ein Objekt aktiv Verarbeitung durchführt (z. B. weil es gerade eine Methode ausführt oder auf eine Antwort wartet) — dies macht auch komplexe, verschachtelte Aufrufsequenzen übersichtlich nachvollziehbar.",
          "Für Kontrollstrukturen innerhalb eines Sequenzdiagramms definiert UML kombinierte Fragmente, die als beschrifteter Rahmen um den betroffenen Diagrammbereich gezeichnet werden: loop rahmt einen wiederholt ausgeführten Nachrichtenaustausch ein, alt modelliert alternative Abläufe (wie ein if/else, mit mehreren durch eine gestrichelte Linie getrennten Bereichen), opt einen optionalen, nur unter einer Bedingung ausgeführten Bereich, par kennzeichnet mehrere nebenläufig ablaufende Bereiche, und critical (bzw. strict) markiert einen Bereich, der als atomare, nicht unterbrechbare Einheit ausgeführt werden muss.",
          "Nachrichten selbst unterscheiden sich in ihrer Pfeilnotation je nach Aufrufart: Ein synchroner Methodenaufruf (der Sender wartet auf die Antwort) wird als durchgezogener Pfeil mit gefüllter Pfeilspitze dargestellt, ein asynchroner Aufruf (der Sender wartet nicht) als durchgezogener Pfeil mit offener Pfeilspitze.",
        ],
        terms: [
          { term: "Lebenslinie", definition: "Vertikale Linie in einem Sequenzdiagramm, die ein Objekt über die Zeit repräsentiert." },
          { term: "Kombiniertes Fragment (loop/alt/opt/par/critical)", definition: "Beschrifteter Rahmen um einen Diagrammbereich zur Darstellung von Wiederholung, Alternative, Option, Nebenläufigkeit oder atomarer Ausführung." },
        ],
        examples: [
          "Ein Sequenzdiagramm für den Checkout-Prozess eines Online-Shops zeigt den zeitlichen Ablauf: Kunde→Bestellsystem ('Bestellung aufgeben'), Bestellsystem→Zahlungsdienst ('Zahlung anfordern'), Zahlungsdienst→Bestellsystem ('Zahlung bestätigt').",
          "Ein Login-Ablauf lässt sich mit einem alt-Fragment darstellen: Im ersten Zweig (Bedingung 'Passwort korrekt') sendet das System eine Erfolgsmeldung, im zweiten Zweig (Bedingung 'Passwort falsch') eine Fehlermeldung — nur einer der beiden Zweige wird zur Laufzeit tatsächlich durchlaufen.",
        ],
      },
      {
        id: "12-2",
        heading: "12.2 Zustandsdiagramme",
        body: [
          "Ein Zustandsdiagramm (Statechart) modelliert die möglichen Zustände eines Objekts und die Übergänge zwischen ihnen als Reaktion auf Ereignisse. Zustände werden als abgerundete Rechtecke, Übergänge als beschriftete Pfeile dargestellt; ein ausgefüllter Kreis markiert den Startzustand, ein umkreister ausgefüllter Kreis den Endzustand.",
          "Zustandsdiagramme eignen sich besonders für Objekte mit komplexem, ereignisgesteuertem Verhalten (z. B. eine Bestellung, die verschiedene Stadien von 'Aufgegeben' über 'Versendet' bis 'Zugestellt' oder 'Storniert' durchläuft), bei denen zu jedem Zeitpunkt nur bestimmte Übergänge zulässig sind.",
          "Die in UML verwendete Notation für Zustandsdiagramme geht auf die von David Harel 1987 eingeführten Statecharts zurück, die klassische endliche Automaten um hierarchische und nebenläufige Zustände erweiterten.",
        ],
        terms: [
          { term: "Zustandsdiagramm", definition: "Diagramm, das Zustände eines Objekts und ereignisgesteuerte Übergänge zwischen ihnen modelliert." },
          { term: "Statechart (Harel, 1987)", definition: "Von David Harel eingeführte Erweiterung endlicher Automaten um hierarchische und nebenläufige Zustände; Grundlage der UML-Zustandsdiagramme." },
        ],
        examples: [
          "Ein Zustandsdiagramm für eine Bestellung könnte die Zustände 'Aufgegeben', 'Bezahlt', 'Versendet' und 'Storniert' zeigen, wobei ein Übergang von 'Aufgegeben' zu 'Storniert' möglich ist, ein Übergang von 'Versendet' zu 'Storniert' aber nicht mehr zulässig ist.",
        ],
      },
      {
        id: "12-3",
        heading: "12.3 Aktivitätsdiagramme",
        body: [
          "Ein Aktivitätsdiagramm modelliert den Kontrollfluss eines Prozesses oder Algorithmus — ähnlich einem klassischen Flussdiagramm, aber mit zusätzlichen UML-spezifischen Notationselementen für Nebenläufigkeit (Gabelung/Vereinigung paralleler Abläufe) und Entscheidungen (Verzweigung basierend auf Bedingungen).",
          "Anders als Sequenzdiagramme (die auf die Interaktion zwischen konkreten Objekten fokussieren) modellieren Aktivitätsdiagramme den GESAMTABLAUF eines Geschäftsprozesses oder Algorithmus, unabhängig davon, welches Objekt welchen Schritt konkret ausführt.",
        ],
        terms: [{ term: "Aktivitätsdiagramm", definition: "Diagramm zur Modellierung des Kontrollflusses eines Prozesses, inklusive Verzweigungen und Nebenläufigkeit." }],
        examples: [
          "Ein Aktivitätsdiagramm für die Kreditvergabe einer Bank könnte nach der Aktivität 'Bonität prüfen' eine Verzweigung zeigen: bei ausreichender Bonität weiter zu 'Kredit genehmigen', andernfalls zu 'Kredit ablehnen'.",
        ],
      },
    ],
  },
];
