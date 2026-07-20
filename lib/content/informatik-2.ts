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
          "Das Erfüllbarkeitsproblem (SAT) — die Frage, ob eine gegebene aussagenlogische Formel erfüllbar ist — ist algorithmisch bedeutsam: Es ist das erste bewiesene NP-vollständige Problem und damit ein zentraler Referenzpunkt der Komplexitätstheorie (siehe Kapitel 10).",
        ],
        terms: [
          { term: "Erfüllbarkeit", definition: "Eigenschaft einer Formel, für mindestens eine Variablenbelegung wahr zu sein." },
          { term: "SAT-Problem", definition: "Entscheidungsproblem, ob eine aussagenlogische Formel erfüllbar ist; erstes bekanntes NP-vollständiges Problem." },
        ],
        examples: [
          "Die Formel A∧¬A ist unerfüllbar (kein Wahrheitswert von A macht sie wahr), während A∨¬A eine Tautologie ist (jede Belegung macht sie wahr).",
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
        ],
        terms: [
          { term: "Determiniertheit", definition: "Eigenschaft eines Algorithmus, bei gleicher Eingabe stets dieselbe Ausgabe zu liefern." },
          { term: "Terminierung", definition: "Eigenschaft eines Algorithmus, nach endlich vielen Schritten anzuhalten." },
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
        ],
        terms: [{ term: "Rekursionsanker (Basisfall)", definition: "Kleinste Probleminstanz, die direkt (ohne weiteren Rekursionsaufruf) gelöst wird." }],
        examples: [
          "Die Fakultätsfunktion fak(n) lässt sich rekursiv definieren: fak(0)=1 (Basisfall), fak(n)=n·fak(n−1) für n>0 (Rekursionsschritt) — jeder Aufruf reduziert das Problem auf eine echt kleinere Instanz.",
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
        heading: "5.1 Entwurfsstrategien: Divide-and-Conquer und Greedy",
        body: [
          "Divide-and-Conquer löst ein Problem, indem es in kleinere Teilprobleme derselben Art zerlegt wird, diese (oft rekursiv) gelöst werden, und die Teillösungen zu einer Gesamtlösung kombiniert werden (typisches Beispiel: Mergesort, siehe Kapitel 8). Greedy-Algorithmen treffen in jedem Schritt die lokal beste Entscheidung, ohne spätere Konsequenzen zu berücksichtigen — dies liefert nicht immer, aber bei geeigneter Problemstruktur eine global optimale Lösung.",
          "Ob ein Greedy-Ansatz zulässig ist, hängt von der Problemstruktur ab: Besitzt das Problem die 'Greedy-Choice-Eigenschaft' (eine lokal optimale Wahl lässt sich immer zu einer global optimalen Lösung erweitern), liefert Greedy garantiert das Optimum — andernfalls kann Greedy beliebig weit vom Optimum entfernt liegen.",
        ],
        terms: [
          { term: "Divide-and-Conquer", definition: "Entwurfsstrategie: Problem in Teilprobleme zerlegen, rekursiv lösen, Teillösungen kombinieren." },
          { term: "Greedy-Algorithmus", definition: "Algorithmus, der in jedem Schritt die lokal beste Entscheidung trifft." },
        ],
        examples: [
          "Beim Wechselgeldproblem mit Standardmünzsystemen (1,2,5,10,...) liefert die Greedy-Strategie ('immer die größte passende Münze nehmen') das Optimum; bei künstlichen Münzsystemen (z. B. {1,3,4}) für den Betrag 6 kann Greedy (4+1+1=3 Münzen) suboptimal gegenüber der optimalen Lösung (3+3=2 Münzen) sein.",
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
        ],
        table: {
          caption: "Array vs. verkettete Liste: Laufzeit wichtiger Operationen",
          headers: ["Operation", "Array", "Verkettete Liste"],
          rows: [
            ["Zugriff auf Element an Position i", "O(1)", "O(n)"],
            ["Einfügen/Löschen am Anfang", "O(n)", "O(1)"],
            ["Einfügen/Löschen an bekannter Position", "O(n)", "O(1)"],
          ],
        },
        terms: [{ term: "Verkettete Liste", definition: "Listenimplementierung, bei der jedes Element einen Zeiger auf das nächste Element speichert." }],
        examples: [
          "Fügt man wiederholt Elemente am Anfang einer Liste ein, ist eine verkettete Liste (O(1) pro Einfügung) einem Array (O(n) pro Einfügung, da alle Elemente verschoben werden müssen) deutlich überlegen.",
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
        ],
        terms: [{ term: "Binärer Suchbaum", definition: "Binärbaum mit Ordnungseigenschaft: linker Teilbaum kleiner, rechter Teilbaum größer als der Knoten." }],
        examples: [
          "Fügt man die Werte 1,2,3,4,5 in dieser Reihenfolge in einen (unbalancierten) binären Suchbaum ein, entsteht eine reine 'Rechtskette' mit Höhe 5 — die Suche nach dem Wert 5 benötigt dann 5 statt der bei Balance möglichen ~3 Schritte (log₂5≈2,3).",
        ],
      },
    ],
  },
  // ==================== Kapitel 8 ====================
  {
    id: "sortierverfahren",
    number: 8,
    title: "Sortierverfahren",
    free: false,
    intro:
      "Sortieren ist eines der am häufigsten untersuchten algorithmischen Grundprobleme. Dieses Kapitel behandelt mehrere klassische Sortierverfahren mit unterschiedlichen Laufzeit- und Speichereigenschaften.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Einfache Sortierverfahren: Insertion Sort und Selection Sort",
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
        heading: "8.2 Mergesort",
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
        heading: "8.3 Quicksort",
        body: [
          "Quicksort wählt ein Pivot-Element, partitioniert die Liste in Elemente kleiner und größer als das Pivot, und sortiert beide Partitionen rekursiv. Im Durchschnitt (bei guter Pivot-Wahl) beträgt die Laufzeit O(n log n); im ungünstigsten Fall (z. B. Pivot ist stets das kleinste/größte Element, etwa bei bereits sortierten Listen und naiver Pivot-Wahl) verschlechtert sie sich auf O(n²).",
          "Anders als Mergesort arbeitet Quicksort In-Place (kein wesentlicher zusätzlicher Speicherbedarf) — in der Praxis ist Quicksort deshalb bei zufälligen Daten häufig schneller als Mergesort, trotz der schlechteren Worst-Case-Garantie.",
        ],
        table: {
          caption: "Die vier Sortierverfahren im Vergleich",
          headers: ["Verfahren", "Best Case", "Average Case", "Worst Case", "Speicher", "Stabil?"],
          rows: [
            ["Insertion Sort", "O(n)", "O(n²)", "O(n²)", "O(1)", "ja"],
            ["Selection Sort", "O(n²)", "O(n²)", "O(n²)", "O(1)", "nein"],
            ["Mergesort", "O(n log n)", "O(n log n)", "O(n log n)", "O(n)", "ja"],
            ["Quicksort", "O(n log n)", "O(n log n)", "O(n²)", "O(log n) (Rekursionsstapel)", "nein"],
          ],
        },
        formulas: ["T_mittel(n) = O(n log n), T_worst(n) = O(n²)"],
        formulasLatex: ["T_{\\text{mittel}}(n) = O(n\\log n),\\quad T_{\\text{worst}}(n) = O(n^2)"],
        terms: [{ term: "Pivot-Element", definition: "Vergleichselement in Quicksort, das die Liste in kleinere/größere Teile partitioniert." }],
        examples: [
          "Wählt man bei der bereits absteigend sortierten Liste [9,8,7,6,5] stets das erste Element als Pivot, entsteht bei jedem Partitionierungsschritt eine leere und eine um 1 kleinere Partition — der ungünstigste Fall mit O(n²) Laufzeit.",
        ],
      },
    ],
  },
  // ==================== Kapitel 9 ====================
  {
    id: "kuerzeste-wege-spannbaeume",
    number: 9,
    title: "Datenstrukturen III: Kürzeste Wege und minimale Spannbäume",
    free: false,
    intro:
      "Graphalgorithmen lösen praktisch bedeutsame Probleme wie Routenplanung und Netzwerkdesign. Dieses Kapitel behandelt die klassischen Algorithmen zur Bestimmung kürzester Wege und minimaler Spannbäume.",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Breiten- und Tiefensuche",
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
        heading: "9.2 Der Dijkstra-Algorithmus",
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
        heading: "9.3 Minimale Spannbäume: Kruskal und Prim",
        body: [
          "Ein Spannbaum eines zusammenhängenden Graphen ist ein Teilgraph, der alle Knoten mit der minimal möglichen Anzahl an Kanten (n−1) verbindet, ohne Kreise. Ein minimaler Spannbaum minimiert zusätzlich die Summe der Kantengewichte. Der Kruskal-Algorithmus fügt Kanten in aufsteigender Gewichtsreihenfolge hinzu, sofern sie keinen Kreis erzeugen; der Prim-Algorithmus wächst stattdessen einen einzigen zusammenhängenden Baum, indem er in jedem Schritt die günstigste Kante zu einem neuen, noch nicht enthaltenen Knoten hinzufügt.",
          "Beide Algorithmen sind Greedy-Verfahren und liefern (anders als beim allgemeinen Wechselgeldproblem aus Kapitel 5) nachweislich immer die global optimale Lösung — eine direkte Folge der sogenannten Schnitteigenschaft minimaler Spannbäume.",
        ],
        terms: [{ term: "Minimaler Spannbaum", definition: "Spannbaum mit minimaler Summe der Kantengewichte." }],
        examples: [
          "Beim Verlegen von Glasfaserkabeln zwischen mehreren Städten mit bekannten Verlegungskosten pro Verbindung liefert ein minimaler Spannbaum die kostengünstigste Verkabelung, die alle Städte verbindet.",
        ],
      },
    ],
  },
  // ==================== Kapitel 10 ====================
  {
    id: "komplexitaet-algorithmen",
    number: 10,
    title: "Komplexität von Algorithmen",
    free: false,
    intro:
      "Um Algorithmen fair zu vergleichen, braucht es ein von konkreter Hardware unabhängiges Effizienzmaß. Dieses Kapitel führt die Landau-Notation ein und behandelt die Grundzüge der Komplexitätsklassifikation.",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Die Landau-Notation (O-Notation)",
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
        heading: "10.2 Wichtige Komplexitätsklassen im Vergleich",
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
        heading: "10.3 P, NP und NP-Vollständigkeit",
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
        ],
        terms: [
          { term: "Aggregation", definition: "Ganzes-Teil-Beziehung, bei der die Teile auch unabhängig vom Ganzen existieren können." },
          { term: "Komposition", definition: "Starke Ganzes-Teil-Beziehung, bei der die Teile nicht ohne das Ganze existieren." },
        ],
        examples: [
          "Ein 'Auto' und seine 'Räder' stehen in einer Kompositionsbeziehung (Räder existieren typischerweise nicht unabhängig vom konkreten Auto), während ein 'Auto' und sein 'Fahrer' eher eine Aggregation bilden (der Fahrer existiert unabhängig vom Auto weiter).",
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
        ],
        terms: [{ term: "Lebenslinie", definition: "Vertikale Linie in einem Sequenzdiagramm, die ein Objekt über die Zeit repräsentiert." }],
        examples: [
          "Ein Sequenzdiagramm für den Checkout-Prozess eines Online-Shops zeigt den zeitlichen Ablauf: Kunde→Bestellsystem ('Bestellung aufgeben'), Bestellsystem→Zahlungsdienst ('Zahlung anfordern'), Zahlungsdienst→Bestellsystem ('Zahlung bestätigt').",
        ],
      },
      {
        id: "12-2",
        heading: "12.2 Zustandsdiagramme",
        body: [
          "Ein Zustandsdiagramm (Statechart) modelliert die möglichen Zustände eines Objekts und die Übergänge zwischen ihnen als Reaktion auf Ereignisse. Zustände werden als abgerundete Rechtecke, Übergänge als beschriftete Pfeile dargestellt; ein ausgefüllter Kreis markiert den Startzustand, ein umkreister ausgefüllter Kreis den Endzustand.",
          "Zustandsdiagramme eignen sich besonders für Objekte mit komplexem, ereignisgesteuertem Verhalten (z. B. eine Bestellung, die verschiedene Stadien von 'Aufgegeben' über 'Versendet' bis 'Zugestellt' oder 'Storniert' durchläuft), bei denen zu jedem Zeitpunkt nur bestimmte Übergänge zulässig sind.",
        ],
        terms: [{ term: "Zustandsdiagramm", definition: "Diagramm, das Zustände eines Objekts und ereignisgesteuerte Übergänge zwischen ihnen modelliert." }],
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
