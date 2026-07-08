import type { SkriptChapter } from "./types";

// Hinweis zur Kapitelreihenfolge: Die Reihenfolge und Nummerierung hier folgt
// bewusst NICHT 1:1 der Reihenfolge der Vorlesungsfolien (V01–V13). So steht
// "Algorithmen: Grundbegriffe" hier z. B. an erster Stelle statt (wie in der
// Vorlesung) nach der gesamten Logik, die Boolesche Algebra ist von Kapitel 4
// auf Kapitel 7 verschoben, und die drei Datenstrukturen-Blöcke sind mit den
// Logik- und Algorithmen-Kapiteln verzahnt statt als zusammenhängender Block
// aufzutreten. Der Exkurs zu KI-Werkzeugen beim automatisierten Schließen
// (ursprünglich Zusatzmaterial) ist in Kapitel 2 eingebettet statt an das
// Skriptende angehängt zu sein. Die Nummerierung ist eigenständig, und
// Querverweise im Text beziehen sich auf diese neue Reihenfolge.
export const chapters: SkriptChapter[] = [
  // ============ Kapitel 1 — Algorithmen: Grundbegriffe und Eigenschaften ============
  {
    id: "algorithmen-grundbegriffe",
    number: 1,
    title: "Algorithmen: Grundbegriffe und Eigenschaften",
    free: true,
    intro:
      "Informatik befasst sich mit der systematischen, automatisierten Verarbeitung von Information. Der zentrale Baustein dafür ist der Algorithmus — bevor wir in späteren Kapiteln konkrete Verfahren zum Sortieren (Kapitel 8), zur Wegsuche in Graphen (Kapitel 9) oder zur formalen Modellierung (Kapitel 11–13) besprechen, brauchen wir ein präzises Vokabular dafür, was einen Algorithmus überhaupt ausmacht und welche Eigenschaften er erfüllen muss.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Algorithmus versus Programm",
        body: [
          "Ein Algorithmus ist eine eindeutige, endlich formulierte Handlungsvorschrift, die ein Problem durch eine endliche Folge elementarer, ausführbarer Schritte löst: Er verarbeitet eine zulässige Eingabe und erzeugt daraus in endlich vielen Schritten eine Ausgabe. Wird ein Algorithmus in einer konkreten Programmiersprache formuliert, sodass ein Rechner ihn ausführen kann, spricht man von einem Programm.",
          "Der Unterschied ist der zwischen Abstraktion und Realisierung: Ein Algorithmus ist sprachunabhängig und lässt sich auf Papier, als Flussdiagramm oder in Pseudocode notieren. Ein Programm ist eine konkrete Implementierung eines Algorithmus in genau einer Programmiersprache — derselbe Algorithmus kann als beliebig viele unterschiedliche Programme (in Java, Python, C, ...) realisiert werden, ohne dass sich an seiner grundsätzlichen Logik etwas ändert.",
        ],
        terms: [
          {
            term: "Algorithmus",
            definition: "Eine eindeutige, endlich beschriebene Handlungsvorschrift, die aus einer zulässigen Eingabe in endlich vielen Schritten eine Ausgabe erzeugt.",
          },
          {
            term: "Programm",
            definition: "Die Implementierung eines Algorithmus in einer konkreten Programmiersprache, sodass er auf einem Rechner gespeichert und ausgeführt werden kann.",
          },
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Determiniertheit und Determinismus",
        body: [
          "Ein Algorithmus heißt deterministisch, wenn in jedem Schritt der Ausführung eindeutig feststeht, welcher nächste Schritt folgt — es gibt also keine Wahlfreiheit im Ablauf, etwa durch eine Zufallsfunktion. Ein Algorithmus heißt determiniert, wenn er bei gleicher Eingabe stets zum selben Ergebnis führt, unabhängig davon, ob der Ablauf selbst deterministisch war.",
          "Diese beiden Eigenschaften sind unabhängig voneinander: Ein nicht-deterministischer Algorithmus, der intern eine Zufallszahl zieht, kann trotzdem determiniert sein, wenn am Ende immer dasselbe Ergebnis herauskommt — etwa weil der Zufall nur den Weg, nicht aber das Ziel beeinflusst. In der Praxis prüft man deshalb zuerst den Ablauf (Determinismus) und erst danach das Ergebnis (Determiniertheit): Ist bereits der Ablauf uneindeutig, lohnt sich die aufwendigere Prüfung der Determiniertheit meist erst, nachdem man verstanden hat, an welchen Stellen genau Zufall ins Spiel kommt.",
        ],
        examples: [
          "Ein Algorithmus zieht mit random(1,6) einen Würfelwurf w und gibt anschließend aus, ob w gerade oder ungerade ist. Der Ablauf ist nicht-deterministisch (w ist zufällig), das Ergebnis 'gerade'/'ungerade' ist es aber ebenfalls nicht determiniert, da unterschiedliche w zu unterschiedlichen Ausgaben führen. Würde der Algorithmus dagegen unabhängig von w immer 'liegt zwischen 1 und 6' ausgeben, wäre er trotz nicht-deterministischem Ablauf determiniert.",
        ],
      },
      {
        id: "1-3",
        heading: "1.3 Finitheit, Terminierung und Universalität",
        body: [
          "Ein Algorithmus muss endlich beschrieben sein (statische Finitheit: die Vorschrift selbst hat endliche Länge) und bei jeder zulässigen Eingabe nach endlich vielen Schritten anhalten (dynamische Finitheit bzw. Terminierung). Ein implementiertes Programm erfüllt die statische Finitheit automatisch, da der Quelltext endlich ist — die Terminierung dagegen muss gesondert nachgewiesen werden, denn eine Schleife kann bei bestimmten Eingaben unbeabsichtigt unendlich weiterlaufen.",
          "Universalität fordert, dass ein Algorithmus nicht nur für einen Einzelfall, sondern für die gesamte spezifizierte Klasse von Eingaben das korrekte Ergebnis liefert. Ein Algorithmus, der nur innerhalb eines bestimmten Wertebereichs richtig arbeitet und außerhalb dieses Bereichs falsche oder undefinierte Ausgaben produziert, ist für die vollständige Eingabemenge nicht universell — selbst wenn er für die 'üblichen' Eingaben funktioniert.",
        ],
        terms: [
          { term: "Terminierung", definition: "Die Eigenschaft eines Algorithmus, bei jeder zulässigen Eingabe nach endlich vielen Schritten anzuhalten." },
          { term: "Universalität", definition: "Die Eigenschaft eines Algorithmus, für die gesamte spezifizierte Eingabemenge (nicht nur Einzelfälle) korrekt zu arbeiten." },
        ],
      },
      {
        id: "1-4",
        heading: "1.4 Rekursion: direkt, indirekt und ein erstes Beispiel",
        body: [
          "Bei der Rekursion löst ein Algorithmus ein Problem, indem er sich selbst zur Lösung eines kleineren Teilproblems aufruft. Man unterscheidet direkte Rekursion, bei der eine Funktion sich unmittelbar selbst aufruft, von indirekter Rekursion, bei der eine Funktion f eine andere Funktion g aufruft, die (gegebenenfalls über weitere Zwischenschritte) wieder f aufruft.",
          "Jeder rekursive Algorithmus benötigt mindestens einen Basisfall, der ohne weiteren rekursiven Aufruf direkt gelöst wird, sowie einen Rekursionsschritt, der das Problem auf eine echt kleinere Instanz zurückführt. Fehlt der Basisfall oder wird die Instanz nicht kleiner, ist die Terminierung aus Abschnitt 1.3 nicht mehr gewährleistet.",
        ],
        formulas: ["fakultaet(n) = 1, falls n ≤ 1", "fakultaet(n) = n · fakultaet(n − 1), falls n > 1"],
        formulasLatex: [
          "\\text{fakultaet}(n) = 1, \\quad n \\le 1",
          "\\text{fakultaet}(n) = n \\cdot \\text{fakultaet}(n-1), \\quad n > 1",
        ],
        examples: [
          "fakultaet(4) ruft fakultaet(3) auf, das fakultaet(2) aufruft, das fakultaet(1) aufruft — dort greift der Basisfall und liefert 1. Die Aufrufe werden danach in umgekehrter Reihenfolge aufgelöst: 1, 2·1=2, 3·2=6, 4·6=24.",
        ],
      },
    ],
  },

  // ============ Kapitel 2 — Aussagenlogik ============
  {
    id: "aussagenlogik",
    number: 2,
    title: "Aussagenlogik",
    free: false,
    intro:
      "Ob ein Algorithmus (Kapitel 1) eine Spezifikation korrekt erfüllt oder ob zwei Bedingungen in einem Programm gleichwertig sind, lässt sich nur präzise begründen, wenn wir Aussagen eindeutig formulieren und miteinander verknüpfen können. Die Aussagenlogik liefert dafür das Vokabular, das in praktisch jedem späteren Kapitel — von Bedingungen in Algorithmen bis zu Wächtern in UML-Zustandsdiagrammen (Kapitel 13) — implizit vorausgesetzt wird.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Aussagen und Junktoren",
        body: [
          "Eine Aussage ist ein sprachliches Gebilde, dem eindeutig genau einer der Wahrheitswerte wahr (w) oder falsch (f) zugeordnet werden kann. Aus einfachen Aussagen A, B lassen sich mit Junktoren neue Aussagen bilden: die Negation ¬A ('nicht A'), die Konjunktion A ∧ B ('A und B'), die Disjunktion A ∨ B ('A oder B', nicht ausschließend), die Implikation A ⇒ B ('wenn A, dann B') und die Äquivalenz A ⇔ B ('A genau dann, wenn B').",
          "Der Wahrheitswert der zusammengesetzten Aussage hängt ausschließlich von den Wahrheitswerten ihrer Bestandteile ab und lässt sich vollständig in einer Wahrheitstafel auflisten. Besonders gewöhnungsbedürftig ist die Implikation: A ⇒ B ist nur dann falsch, wenn A wahr und B falsch ist. Ist A bereits falsch, ist A ⇒ B automatisch wahr, unabhängig vom Wahrheitswert von B.",
        ],
        terms: [
          { term: "Aussage", definition: "Ein sprachliches Gebilde, dem genau einer der Wahrheitswerte wahr oder falsch zugeordnet werden kann." },
          { term: "Implikation A ⇒ B", definition: "Falsch genau dann, wenn A wahr und B falsch ist; sonst wahr." },
        ],
        examples: [
          "'Ein Server ist überlastet, aber erreichbar' lässt sich als P ∧ Q darstellen (P: 'Server ist überlastet', Q: 'Server ist erreichbar'). 'Der Server ist weder überlastet noch erreichbar' entspricht ¬P ∧ ¬Q.",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Äquivalenzumformung und Normalformen",
        body: [
          "Zwei Formeln heißen logisch äquivalent, wenn sie unter jeder Belegung ihrer Variablen denselben Wahrheitswert annehmen — nachweisbar entweder durch Vergleich der vollständigen Wahrheitstafeln oder durch schrittweise syntaktische Umformung mit bekannten Äquivalenzen (u. a. den Regeln von De Morgan, der Kontraposition, dem Distributivgesetz und der doppelten Negation). Für größere Formeln ist die syntaktische Umformung meist vorzuziehen, da eine Wahrheitstafel bei n Variablen 2ⁿ Zeilen benötigt und damit exponentiell wächst.",
          "Zwei besonders wichtige Normalformen sind die konjunktive Normalform (KNF), eine Konjunktion von Disjunktionen von Literalen, und die disjunktive Normalform (DNF), eine Disjunktion von Konjunktionen von Literalen. Jede aussagenlogische Formel lässt sich in beide Normalformen überführen, was insbesondere für automatisierte Verfahren wie die Resolution (Abschnitt 2.4) benötigt wird.",
        ],
        formulas: ["¬(A ∧ B) ⇔ ¬A ∨ ¬B", "¬(A ∨ B) ⇔ ¬A ∧ ¬B", "(A ⇒ B) ⇔ (¬B ⇒ ¬A)"],
        formulasLatex: [
          "\\neg(A \\land B) \\iff \\neg A \\lor \\neg B",
          "\\neg(A \\lor B) \\iff \\neg A \\land \\neg B",
          "(A \\Rightarrow B) \\iff (\\neg B \\Rightarrow \\neg A)",
        ],
      },
      {
        id: "2-3",
        heading: "2.3 Erfüllbarkeit, Allgemeingültigkeit und Modelle",
        body: [
          "Eine Formel heißt erfüllbar, wenn mindestens eine Belegung ihrer Variablen sie wahr macht; eine solche Belegung heißt Modell der Formel. Eine Formel heißt allgemeingültig (Tautologie), wenn sie unter jeder Belegung wahr ist, und unerfüllbar, wenn sie unter keiner Belegung wahr ist.",
          "Für eine Menge M von Formeln überträgt sich der Begriff: M ist erfüllbar, wenn es eine gemeinsame Belegung gibt, die alle Formeln in M gleichzeitig wahr macht. Ob eine Formel oder Formelmenge erfüllbar ist, lässt sich prinzipiell durch Ausprobieren aller Belegungen in einer Wahrheitstafel bestimmen, in der Praxis aber effizienter über Umformung in KNF und anschließende Resolution (Abschnitt 2.4).",
        ],
        terms: [
          { term: "Modell", definition: "Eine Belegung der Variablen, unter der eine Formel wahr wird." },
          { term: "Allgemeingültigkeit", definition: "Eine Formel ist allgemeingültig, wenn sie unter jeder möglichen Belegung wahr ist." },
        ],
      },
      {
        id: "2-4",
        heading: "2.4 Exkurs: Resolution und automatisiertes Schließen",
        body: [
          "Das Resolutionskalkül prüft die Unerfüllbarkeit einer Formelmenge, die in KNF vorliegt, rein syntaktisch: Zwei Klauseln, die ein Literal L bzw. dessen Negation ¬L enthalten, lassen sich zu einer neuen Klausel (der Resolvente) verschmelzen, in der L und ¬L entfernt sind. Lässt sich auf diesem Weg die leere Klausel ableiten, ist die ursprüngliche Formelmenge unerfüllbar. Über das Deduktionstheorem — M ⊨ F gilt genau dann, wenn M ∪ {¬F} unerfüllbar ist — lässt sich damit auch zeigen, dass eine Aussage F aus einer Formelmenge M logisch folgt.",
          "Werkzeuge wie automatisierte Beweiser, Wahrheitstafel-Rechner oder generative KI-Systeme können solche Äquivalenzen heute schnell prüfen oder sogar selbstständig Umformungsschritte vorschlagen. Dabei lohnt sich Vorsicht: Ein Sprachmodell greift oft auf Äquivalenzregeln zurück, die über den im Kurs behandelten Regelsatz hinausgehen, und liefert damit zwar ein korrektes Endergebnis, aber einen Beweisweg, der sich nicht ohne Weiteres anhand der gelernten Axiome nachvollziehen und in einer Klausur so nicht verwenden lässt. Ein Wahrheitstafel-Rechner kann umgekehrt zuverlässig bestätigen, ob zwei Formeln überhaupt äquivalent sind — ersetzt aber nicht den Nachweis über die zulässigen Umformungsschritte, der in der Prüfung verlangt wird. Die sinnvolle Nutzung solcher Werkzeuge besteht deshalb darin, sie zur Kontrolle des Endergebnisses einzusetzen, den eigentlichen Beweis aber selbst mit den bekannten Äquivalenzen Schritt für Schritt zu führen.",
        ],
      },
    ],
  },

  // ============ Kapitel 3 — Datenstrukturen I ============
  {
    id: "datenstrukturen-1",
    number: 3,
    title: "Datenstrukturen I: Abstrakte Datentypen, Listen, Keller und Schlangen",
    free: false,
    intro:
      "Nachdem Kapitel 2 gezeigt hat, wie man Aussagen präzise formuliert, wenden wir uns nun der Frage zu, wie ein Computer Daten organisiert im Speicher ablegt. Dieses erste von drei Datenstrukturen-Kapiteln (fortgesetzt in Kapitel 6 und Kapitel 9) behandelt die Grundbausteine: abstrakte Datentypen, Listen, Keller und Schlangen.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Datenstrukturen und abstrakte Datentypen",
        body: [
          "Eine Datenstruktur ist eine Art, Daten im Speicher eines Computers zu organisieren und zu verwalten; sie bietet mindestens die drei Operationen Erzeugen, Einfügen und Zugriff auf gespeicherte Elemente. Man unterscheidet statische Datenstrukturen, deren Größe zur Laufzeit fest ist (z. B. das Array, mit direktem indexbasiertem Zugriff in konstanter Zeit, aber ohne Möglichkeit der Größenänderung), von dynamischen Datenstrukturen, die eine im Voraus unbekannte Anzahl miteinander verketteter Objekte speichern und deren Größe zur Laufzeit wächst oder schrumpft (z. B. die Liste).",
          "Ein abstrakter Datentyp (ADT) beschreibt einen Datentyp allein über die auf ihm erlaubten Operationen und deren Verhalten, unabhängig von der konkreten Implementierung. Keller und Schlange (Abschnitte 3.3 und 3.4) sind klassische Beispiele für ADTs, die sowohl auf Basis eines Arrays als auch auf Basis einer verketteten Liste realisiert werden können, ohne dass sich ihr nach außen sichtbares Verhalten ändert.",
        ],
        terms: [
          { term: "Statische Datenstruktur", definition: "Datenstruktur mit fester Größe, z. B. das Array; Größe kann zur Laufzeit nicht verändert werden." },
          { term: "Abstrakter Datentyp (ADT)", definition: "Ein Datentyp, definiert allein über seine erlaubten Operationen, unabhängig von der konkreten Implementierung." },
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Einfach und doppelt verkettete Listen",
        body: [
          "Eine Liste besteht aus Knoten, die jeweils ein Datenelement und einen Zeiger auf den Nachfolgeknoten speichern (bei einer doppelt verketteten Liste zusätzlich einen Zeiger auf den Vorgängerknoten). Ein Listenelement kennt zusätzlich den Anfangsknoten (head) und bei manchen Implementierungen auch den letzten Knoten (tail), um das Anfügen neuer Elemente effizient zu gestalten.",
          "Das Einfügen eines neuen Knotens nach Position i erfordert bei einer einfach verketteten Liste, zunächst bis zum Vorgängerknoten zu laufen, dessen next-Zeiger auf den neuen Knoten zu setzen und den next-Zeiger des neuen Knotens auf den bisherigen Nachfolger zu setzen — wichtig ist dabei die richtige Reihenfolge dieser beiden Zuweisungen, da sonst der Verweis auf den ursprünglichen Nachfolger verloren geht. Eine doppelt verkettete Liste erlaubt zusätzlich das Rückwärtstraversieren und ermöglicht das Entfernen eines gegebenen Knotens in konstanter Zeit, da der Vorgänger direkt bekannt ist und nicht erst gesucht werden muss.",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Der Keller (Stack)",
        body: [
          "Ein Keller (Stack) ist eine Datenstruktur, die nach dem LIFO-Prinzip (Last In, First Out) funktioniert: Das zuletzt eingefügte Element wird als erstes wieder entnommen. Die beiden zentralen Operationen sind das Ablegen eines Elements auf dem Keller sowie das Entnehmen des zuletzt abgelegten Elements; zusätzlich kann geprüft werden, ob der Keller leer ist.",
          "Ein Keller lässt sich sowohl mit einem Array (mit einem Zeiger auf das oberste belegte Element) als auch mit einer einfach verketteten Liste implementieren, bei der stets am Kopf eingefügt und entnommen wird.",
        ],
      },
      {
        id: "3-4",
        heading: "3.4 Die Schlange (Queue)",
        body: [
          "Eine Schlange (Queue) funktioniert nach dem FIFO-Prinzip (First In, First Out): Das zuerst eingefügte Element wird auch zuerst wieder entnommen. Die zentralen Operationen sind das Anhängen eines Elements ans Ende der Schlange und das Entnehmen des vordersten Elements.",
          "Eine effiziente Array-Implementierung nutzt ein zirkuläres Array: Zwei Indizes (Kopf und Ende) wandern bei jeder Operation zyklisch durch das Array, sodass der frei werdende Platz am Anfang wiederverwendet werden kann, ohne die restlichen Elemente verschieben zu müssen. Eine Schlange lässt sich außerdem allein mit zwei Kellern realisieren: Neue Elemente werden stets auf den ersten Keller gelegt; beim Entnehmen wird — falls der zweite Keller leer ist — der gesamte Inhalt des ersten Kellers auf den zweiten umgeschichtet, wodurch sich die Reihenfolge umkehrt und das älteste Element oben zu liegen kommt.",
        ],
      },
    ],
  },

  // ============ Kapitel 4 — Prädikatenlogik ============
  {
    id: "praedikatenlogik",
    number: 4,
    title: "Prädikatenlogik",
    free: false,
    intro:
      "Die Aussagenlogik aus Kapitel 2 stößt an ihre Grenzen, sobald wir über Eigenschaften von Objekten, deren Beziehungen zueinander und Aussagen wie 'für alle x gilt...' sprechen wollen. Die Prädikatenlogik erweitert die Aussagenlogik um Variablen, Funktionen, Prädikate und Quantoren und liefert damit die Sprache für die formalen Beweise dieses und späterer Kapitel.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Terme, Formeln und Quantoren",
        body: [
          "Eine Basis B = (V, FZ, PZ) legt die Menge der Variablen V, der Funktionszeichen FZ und der Prädikatzeichen PZ fest. Terme werden induktiv aus Variablen, Konstanten und Funktionsanwendungen gebildet; Formeln entstehen aus Prädikatanwendungen auf Terme, den aussagenlogischen Junktoren sowie den Quantoren ∀ (Allquantor, 'für alle') und ∃ (Existenzquantor, 'es existiert').",
          "Ein Vorkommen einer Variablen x heißt gebunden, wenn es im Wirkungsbereich eines Quantors ∀x oder ∃x liegt, und andernfalls frei. Eine Formel ohne freie Variablen heißt geschlossen; nur geschlossenen Formeln lässt sich (unabhängig von einer konkreten Belegung) ein Wahrheitswert zuordnen.",
        ],
        terms: [
          { term: "Freies Vorkommen", definition: "Ein Vorkommen einer Variablen, das nicht im Wirkungsbereich eines Quantors liegt, der genau diese Variable bindet." },
          { term: "Geschlossene Formel", definition: "Eine Formel ohne freie Variablenvorkommen." },
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Bereinigung, Pränexnormalform und Skolemform",
        body: [
          "Eine Formel heißt bereinigt, wenn jede Variable höchstens einmal quantifiziert wird und keine Variable sowohl frei als auch gebunden vorkommt — nötig, um Verwechslungen bei nachfolgenden Umformungen auszuschließen. Eine bereinigte Formel lässt sich in Pränexnormalform überführen, in der alle Quantoren an den Anfang der Formel gezogen werden und nur noch eine quantorenfreie Matrix folgt.",
          "Die Skolemform ersetzt anschließend jede existenzquantifizierte Variable durch eine neue Funktion (Skolemfunktion), deren Argumente die vorausgehenden allquantifizierten Variablen sind (bzw. durch eine Skolemkonstante, falls keine Allquantoren vorausgehen). Die so entstehende Matrix lässt sich in Klauselform — einer Konjunktion von Disjunktionen von Literalen — darstellen und bildet die Grundlage für die Resolution (Abschnitt 4.4).",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Unifikation",
        body: [
          "Zwei Literale sind unifizierbar, wenn sich eine Substitution σ (eine Zuordnung von Variablen zu Termen) finden lässt, die beide Literale syntaktisch identisch macht. Eine solche Substitution heißt allgemeinster Unifikator (most general unifier, mgu), wenn sich jede andere unifizierende Substitution aus ihr durch weitere Substitution ableiten lässt.",
          "Der Unifikationsalgorithmus vergleicht zwei Terme rekursiv Position für Position: Stimmen Funktionssymbole nicht überein, ist keine Unifikation möglich; trifft er auf eine Variable, wird sie (sofern sie nicht bereits im gegenüberliegenden Term vorkommt — sogenannter Occurs-Check) an den entsprechenden Term gebunden.",
        ],
        examples: [
          "Für {p(f(x), y), p(y, f(z))} liefert σ = {x/z, y/f(z)} eine Unifikation: Beide Literale werden zu p(f(z), f(z)).",
        ],
      },
      {
        id: "4-4",
        heading: "4.4 Resolution in der Prädikatenlogik",
        body: [
          "Die Grundresolution überträgt das aussagenlogische Resolutionsprinzip (Abschnitt 2.4) auf die Prädikatenlogik: Zwei Klauseln, die (nach passender Substitution mittels Unifikation) ein Literal L bzw. ¬L enthalten, werden zu einer Resolvente verschmolzen, in der L und ¬L entfernt sind. Lässt sich aus einer Klauselmenge auf diesem Weg die leere Klausel ableiten, ist die Menge unerfüllbar.",
          "Ein klassisches Anwendungsbeispiel ist der Nachweis eines logischen Schlusses über zwei Prämissen: Aus 'Alle Fahrzeuge, die elektrisch angetrieben werden und autonom fahren können, sind Robotaxis' und 'Das Fahrzeug X wird elektrisch angetrieben und kann autonom fahren' folgt durch Instanziierung des Allquantors und anschließende Resolution (bzw. äquivalent durch den Modus Ponens) direkt 'Das Fahrzeug X ist ein Robotaxi'.",
        ],
      },
    ],
  },

  // ============ Kapitel 5 — Entwurfsprinzipien und Testen von Algorithmen ============
  {
    id: "algorithmen-entwurf-test",
    number: 5,
    title: "Entwurfsprinzipien und Testen von Algorithmen",
    free: false,
    intro:
      "Kapitel 1 hat die Eigenschaften eines Algorithmus eingeführt. Dieses Kapitel behandelt, wie man Algorithmen systematisch entwirft — und wie man nach der Implementierung prüft, ob sie tatsächlich korrekt arbeiten.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Entwurfsprinzipien versus Entwurfstechniken",
        body: [
          "Entwurfsprinzipien sind grundsätzliche Denkweisen, mit denen man sich einem Problem nähert — etwa die Idee, ein Problem systematisch durch Ausprobieren mit Zurücknehmen (Backtracking, Abschnitt 5.2) oder durch Zerlegung in gleichartige Teilprobleme (Divide & Conquer, Abschnitt 5.3) zu lösen. Entwurfstechniken sind demgegenüber konkretere, oft algorithmenklassen-spezifische Vorgehensweisen, etwa das gierige (greedy) Vorgehen, das wir bei Kruskal und Dijkstra in Kapitel 9 wiedersehen werden.",
          "Die beiden wichtigsten Entwurfsprinzipien unterscheiden sich vor allem in der Richtung, in der sie ein Problem angehen: Backtracking sucht sich schrittweise voran und macht Schritte rückgängig, sobald ein Pfad sich als Sackgasse erweist. Divide & Conquer zerlegt das Ausgangsproblem zunächst top-down in kleinere Instanzen desselben Problems, löst diese (meist rekursiv) und setzt die Teillösungen anschließend wieder zusammen.",
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Backtracking",
        body: [
          "Backtracking geht davon aus, dass eine Lösung schrittweise aus einer Folge von Entscheidungen aufgebaut wird. Erweist sich eine bisher getroffene Wahl als unvereinbar mit einer gültigen Lösung, wird sie zurückgenommen (das Programm 'geht zurück') und die nächste Alternative an derselben Stelle probiert. Zentrale Annahme ist, dass sich der Suchraum als Baum von Entscheidungen darstellen lässt, in dem nicht erfolgversprechende Teilbäume frühzeitig abgeschnitten werden können.",
          "Ein klassisches Beispiel für ein Backtracking-Verfahren ist die Tiefensuche in einem Baum oder Graphen (vertieft in Kapitel 6): Sie steigt entlang eines Pfades so weit wie möglich ab und kehrt erst um, wenn kein weiterer unbesuchter Kindknoten mehr existiert.",
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Divide & Conquer",
        body: [
          "Divide & Conquer ('Teile und herrsche') zerlegt ein Problem der Größe n in mehrere kleinere Teilprobleme desselben Typs, löst diese rekursiv und setzt aus den Teillösungen die Gesamtlösung zusammen. Der Vorteil liegt oft in einer besseren asymptotischen Laufzeit: Statt ein Problem mit n Elementen in einem Schritt mit n-fachem Aufwand zu bearbeiten, kann eine geschickte Zerlegung den Aufwand pro Rekursionsebene deutlich senken.",
          "Ein einfaches Beispiel ist die Potenzierung xⁿ: Statt x n-mal hintereinander zu multiplizieren (n Multiplikationen), lässt sich xⁿ = (x^⌊n/2⌋)² (mit einem zusätzlichen Faktor x bei ungeradem n) rekursiv berechnen — das senkt den Aufwand von linear vielen auf logarithmisch viele Multiplikationen. Wir werden Divide & Conquer in Kapitel 8 bei Quicksort in voller Ausprägung wiedersehen.",
        ],
      },
      {
        id: "5-4",
        heading: "5.4 Verifikation, Test, Black-Box und White-Box",
        body: [
          "Verifikation ist der formale Nachweis, dass ein Algorithmus seine Spezifikation für alle zulässigen Eingaben erfüllt — sie erfordert keine Ausführung des Programms, sondern einen mathematischen Beweis. Ein Test führt das Programm dagegen tatsächlich mit ausgewählten, endlich vielen Eingaben aus und vergleicht das tatsächliche mit dem erwarteten Ergebnis. Ein Test kann damit die Anwesenheit von Fehlern nachweisen, niemals aber deren Abwesenheit beweisen, da der Eingaberaum bei nicht-trivialen Programmen praktisch nie vollständig abgedeckt werden kann.",
          "Beim Black-Box-Test werden Testfälle allein aus der Spezifikation bzw. dem Ein-/Ausgabeverhalten abgeleitet, ohne die interne Struktur des Programms zu kennen — Vorteil: unabhängig von der Implementierung, Nachteil: interne Sonderfälle können übersehen werden. Beim White-Box-Test ist die Programmstruktur bekannt, sodass Testfälle gezielt so gewählt werden, dass z. B. jeder Zweig oder jeder Pfad mindestens einmal durchlaufen wird — Vorteil: strukturell begründete Abdeckung, Nachteil: hoher Aufwand und Abhängigkeit von der konkreten Implementierung. Bei großem Eingaberaum werden Testfälle sinnvollerweise über Äquivalenzklassen (Gruppen von Eingaben, die vermutlich gleich behandelt werden) und Grenzwertanalyse (Testfälle genau an den Rändern zulässiger Bereiche) ausgewählt, statt den Eingaberaum naiv zu durchprobieren.",
        ],
      },
    ],
  },

  // ============ Kapitel 6 — Datenstrukturen II ============
  {
    id: "datenstrukturen-2",
    number: 6,
    title: "Datenstrukturen II: Graphen, Bäume und binäre Suchbäume",
    free: false,
    intro:
      "Wir setzen die Datenstrukturen aus Kapitel 3 fort und wenden uns komplexeren, vernetzten Strukturen zu: Graphen und den aus ihnen abgeleiteten Bäumen. Diese bilden die Grundlage für die Wegsuchprobleme in Kapitel 9.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Graphen: Grundbegriffe",
        body: [
          "Ein Graph G = (V, E) besteht aus einer Menge von Knoten V und einer Menge von Kanten E, die Knotenpaare verbinden. Bei einem gerichteten Graphen sind Kanten geordnete Paare (die Richtung ist relevant), bei einem ungerichteten Graphen ungeordnete Paare. Der Grad eines Knotens ist die Anzahl der an ihm anliegenden Kanten (bei gerichteten Graphen unterscheidet man Eingangs- und Ausgangsgrad); ein Weg ist eine Folge von Kanten, die aufeinanderfolgende Knoten verbindet, ein Zyklus ein Weg, der zu seinem Ausgangsknoten zurückkehrt.",
          "Graphen lassen sich unter anderem als Adjazenzmatrix (eine n×n-Matrix, deren Eintrag (i,j) angibt, ob eine Kante von Knoten i zu Knoten j existiert) oder als Adjazenzliste (jeder Knoten verwaltet eine Liste seiner Nachbarn) darstellen. Bei einem ungerichteten Graphen ist die Adjazenzmatrix stets symmetrisch, bei einem gerichteten Graphen im Allgemeinen nicht. Ein Graph heißt zusammenhängend, wenn zwischen je zwei Knoten ein Weg existiert.",
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Tiefensuche und Breitensuche",
        body: [
          "Die Tiefensuche (Depth-First Search, DFS) besucht von einem Startknoten aus jeweils einen noch unbesuchten Nachbarn und steigt so weit wie möglich in die Tiefe ab, bevor sie zurückkehrt (Backtracking, Abschnitt 5.2) und die nächste Alternative probiert. Sie lässt sich rekursiv oder iterativ mit einem Keller implementieren.",
          "Die Breitensuche (Breadth-First Search, BFS) besucht dagegen zunächst alle direkten Nachbarn des Startknotens, bevor sie zur nächsten Ebene übergeht — implementiert mit einer Schlange statt einem Keller. Während die Tiefensuche gut geeignet ist, um überhaupt einen Weg oder eine Zusammenhangskomponente zu finden, liefert die Breitensuche in einem ungewichteten Graphen automatisch den kürzesten Weg (gemessen in Anzahl Kanten) vom Startknoten zu jedem erreichten Knoten.",
        ],
      },
      {
        id: "6-3",
        heading: "6.3 Bäume und Wurzelgraphen",
        body: [
          "Ein Baum ist ein zusammenhängender, azyklischer (ungerichteter) Graph. Ein Wurzelgraph ist ein gerichteter Graph mit einem ausgezeichneten Wurzelknoten, von dem aus jeder andere Knoten über einen gerichteten Weg erreichbar ist. Nicht jeder Wurzelgraph ist zugleich ein Baum: Erlaubt man, dass mehrere Wege von der Wurzel auf demselben Knoten zusammenlaufen (der Knoten also mehr als einen Vorgänger hat), entsteht ein gerichteter azyklischer Graph (DAG), der kein Baum mehr ist, weil in einem Baum jeder Knoten außer der Wurzel genau einen Vorgänger besitzt.",
          "Für einen Baum sind Tiefe eines Knotens (Anzahl Kanten vom Wurzelknoten bis zu diesem Knoten), Höhe des Baumes (maximale Tiefe eines Knotens) und Ordnung (maximale Anzahl an Kindern je Knoten) zentrale Kenngrößen. Ein binärer Baum mit n Elementen hat im besten Fall (vollständig balanciert) eine minimale Höhe von ⌈log₂(n+1)⌉ − 1, im schlechtesten Fall (entartet zu einer linearen Kette) eine Höhe von n − 1.",
        ],
      },
      {
        id: "6-4",
        heading: "6.4 Binäre Suchbäume",
        body: [
          "Ein binärer Suchbaum ist ein binärer Baum mit einer zusätzlichen Ordnungseigenschaft: Für jeden Knoten gilt, dass alle Elemente im linken Teilbaum kleiner und alle Elemente im rechten Teilbaum größer sind als der Knoten selbst (bezüglich einer zugrunde liegenden Ordnungsrelation). Suchen, Einfügen und Löschen orientieren sich an dieser Eigenschaft: Beim Suchen wird in jedem Knoten verglichen und je nach Ergebnis links oder rechts weitergegangen; neue Elemente werden an der Stelle eingefügt, an der die Suche erfolglos endet.",
          "Beim Löschen unterscheidet man drei Fälle: Ein Blatt kann direkt entfernt werden; ein Knoten mit genau einem Kind wird durch dieses Kind ersetzt; ein Knoten mit zwei Kindern wird durch seinen In-Order-Nachfolger (das kleinste Element im rechten Teilbaum) oder seinen In-Order-Vorgänger (das größte Element im linken Teilbaum) ersetzt, der anschließend an seiner ursprünglichen Stelle gelöscht wird. Bei der Traversierung unterscheidet man Pre-Order (Knoten, linker Teilbaum, rechter Teilbaum), Post-Order (linker Teilbaum, rechter Teilbaum, Knoten) und In-Order (linker Teilbaum, Knoten, rechter Teilbaum) — die In-Order-Traversierung liefert bei einem binären Suchbaum stets die Elemente in aufsteigend sortierter Reihenfolge.",
        ],
      },
    ],
  },

  // ============ Kapitel 7 — Boolesche Algebra ============
  {
    id: "boolesche-algebra",
    number: 7,
    title: "Boolesche Algebra",
    free: false,
    intro:
      "Die Aussagenlogik aus Kapitel 2 lässt sich algebraisch verallgemeinern: Die Boolesche Algebra abstrahiert von konkreten Wahrheitswerten und untersucht Strukturen, die denselben Gesetzen genügen — mit direkten Anwendungen von Schaltnetzen bis zur Datenbankabfrage.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Die Huntingtonschen Axiome",
        body: [
          "Eine Boolesche Algebra ist eine Menge M mit zwei zweistelligen Verknüpfungen · (Boolesches Produkt) und + (Boolesche Summe), einer einstelligen Verknüpfung ′ (Komplement) sowie zwei ausgezeichneten Elementen 0 und 1, die den Huntingtonschen Axiomen genügt: Kommutativität von · und +, Distributivität von · über + und von + über ·, Existenz neutraler Elemente (a·1 = a, a+0 = a) sowie Existenz von Komplementen (a·a′ = 0, a+a′ = 1) für jedes a ∈ M.",
          "Aus diesen Axiomen lassen sich weitere Gesetze wie a·0 = 0 herleiten (durch Ausnutzen des neutralen Elements und der Distributivität), ohne dass sie zusätzlich gefordert werden müssen. Wichtig ist, dass · und + hier reine algebraische Symbole sind und nicht mit der arithmetischen Multiplikation bzw. Addition verwechselt werden dürfen.",
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Das Dualitätsprinzip",
        body: [
          "Das Dualitätsprinzip besagt: Vertauscht man in einer gültigen Aussage über eine Boolesche Algebra durchgängig · mit + und 0 mit 1, erhält man wieder eine gültige Aussage — die duale Aussage. Der Grund liegt darin, dass die Huntingtonschen Axiome selbst paarweise dual zueinander formuliert sind.",
          "Aus dem bewiesenen Gesetz a·0 = 0 folgt so unmittelbar, ohne erneuten Beweis, die duale Aussage a+1 = 1.",
        ],
        formulas: ["a · 0 = 0", "a + 1 = 1 (dual)"],
        formulasLatex: ["a \\cdot 0 = 0", "a + 1 = 1 \\quad \\text{(dual)}"],
      },
      {
        id: "7-3",
        heading: "7.3 Abgeleitete Gesetze und Bezug zur Aussagenlogik",
        body: [
          "Aus den Axiomen lassen sich weitere nützliche Gesetze herleiten, etwa (a·b)·(a′+b′) = 0: Durch Distributivität wird die linke Seite zu a·b·a′ + a·b·b′, und da a·a′ = 0 sowie b·b′ = 0 gilt, verschwinden beide Summanden. Ähnlich lässt sich (a′·b′)+(a+b) = 1 durch Anwendung des Dualitätsprinzips auf das erste Ergebnis zeigen, ohne die Rechnung erneut komplett durchzuführen.",
          "Die Boolesche Algebra mit M = {0,1} entspricht genau der Aussagenlogik aus Kapitel 2: · entspricht ∧, + entspricht ∨, ′ entspricht ¬. Diese Übereinstimmung ist kein Zufall, sondern der Grund, warum sich Schaltungen digitaler Systeme (die letztlich mit den zwei Zuständen 0 und 1 arbeiten) mit denselben Gesetzen beschreiben lassen wie aussagenlogische Formeln.",
        ],
      },
    ],
  },

  // ============ Kapitel 8 — Sortierverfahren ============
  {
    id: "sortierverfahren",
    number: 8,
    title: "Sortierverfahren",
    free: false,
    intro:
      "Mit den Entwurfsprinzipien aus Kapitel 5 und den Grundstrukturen aus Kapitel 3 ausgestattet, betrachten wir nun eines der klassischen Grundprobleme der Informatik: das Sortieren einer Folge von Elementen. Die genaue Laufzeit der hier vorgestellten Verfahren quantifizieren wir formal in Kapitel 10.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Sortieren durch direktes Einfügen (Insertion Sort)",
        body: [
          "Insertion Sort arbeitet den Bereich zwischen dem zweiten und letzten Element schrittweise ab: In Schritt i ist der Teilbereich bis Position i−1 bereits sortiert, und das Element an Position i wird an der richtigen Stelle innerhalb dieses bereits sortierten Teilbereichs eingefügt, indem größere Elemente jeweils eine Position nach rechts verschoben werden.",
          "Da im schlechtesten Fall (absteigend sortierte Eingabe) für jedes der n Elemente bis zu n Vergleiche und Verschiebungen nötig sind, liegt die Laufzeit bei O(n²) — Insertion Sort ist bei kleinen oder bereits fast sortierten Folgen jedoch effizient und wird deshalb oft als Teilverfahren in Kombination mit anderen Sortierverfahren eingesetzt.",
        ],
        examples: [
          "Für die Folge (9, 4, 6, 2, 8) wird zunächst 4 vor 9 einsortiert (4, 9, 6, 2, 8), dann 6 zwischen 4 und 9 (4, 6, 9, 2, 8), dann 2 an den Anfang (2, 4, 6, 9, 8) und schließlich 8 zwischen 6 und 9 (2, 4, 6, 8, 9).",
        ],
      },
      {
        id: "8-2",
        heading: "8.2 Quicksort",
        body: [
          "Quicksort ist ein Divide-&-Conquer-Verfahren (Abschnitt 5.3): Ein Pivotelement wird ausgewählt, und die restlichen Elemente werden so umsortiert (partitioniert), dass alle kleineren Elemente links und alle größeren Elemente rechts vom Pivot stehen. Anschließend wird Quicksort rekursiv auf beide entstandenen Teilfolgen angewendet, bis die Teilfolgen höchstens ein Element enthalten.",
          "Die Laufzeit hängt stark von der Wahl des Pivots ab: Im ungünstigsten Fall (z. B. bereits sortierte Eingabe bei Wahl des jeweils ersten Elements als Pivot) entstehen völlig unausgeglichene Partitionen, und die Laufzeit liegt bei Tmax = O(n²). Im Durchschnitt teilt das Pivotelement die Folge jedoch einigermaßen ausgeglichen, was zu Tavg = O(n log₂n) führt — deshalb ist Quicksort trotz seines quadratischen Worst-Case in der Praxis meist eines der schnellsten Sortierverfahren.",
        ],
      },
      {
        id: "8-3",
        heading: "8.3 Heapsort",
        body: [
          "Ein (Max-)Heap ist ein binärer Baum (in Array-Form gespeichert), in dem jeder Elternknoten größer oder gleich seinen Kindknoten ist — insbesondere steht das größte Element stets an der Wurzel. Beim 'Versickern' (sift-down) wird ein Knoten, der die Heap-Eigenschaft verletzt, so lange mit seinem größeren Kind vertauscht, bis die Eigenschaft lokal wiederhergestellt ist.",
          "Heapsort baut zunächst durch wiederholtes Versickern (von der Mitte des Arrays rückwärts bis zum Anfang) einen initialen Heap auf und tauscht anschließend wiederholt das Wurzelelement (das jeweils größte verbleibende Element) mit dem letzten Element des noch unsortierten Bereichs, verkleinert den Heap um eins und stellt die Heap-Eigenschaft durch erneutes Versickern wieder her. Da sowohl der Aufbau als auch das Sortieren jeweils O(n log₂n) Zeit benötigen, gilt Tmax = Tavg = O(n log₂n) — dies ist zugleich die theoretische untere Schranke für vergleichsbasierte Sortierverfahren, Heapsort ist also asymptotisch optimal. Eine praxisrelevante Verbesserung ist BottomUp-Heapsort, das die Anzahl benötigter Vergleiche gegenüber dem Standardverfahren etwa halbiert.",
        ],
      },
    ],
  },

  // ============ Kapitel 9 — Datenstrukturen III ============
  {
    id: "datenstrukturen-3",
    number: 9,
    title: "Datenstrukturen III: Kürzeste Wege und minimale Spannbäume",
    free: false,
    intro:
      "Wir kehren zu den Graphen aus Kapitel 6 zurück und behandeln zwei ihrer wichtigsten algorithmischen Fragestellungen: die Suche nach kürzesten Wegen und nach kostengünstigsten Verbindungsstrukturen.",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Eulersche und Hamiltonsche Kreise",
        body: [
          "Ein Eulerscher Weg durchläuft jede Kante eines Graphen genau einmal; ein Eulerscher Kreis ist ein solcher Weg, der zum Ausgangsknoten zurückkehrt. Ein Eulerscher Kreis existiert in einem zusammenhängenden Graphen genau dann, wenn jeder Knoten geraden Grad hat — dieses Kriterium löst historisch das Königsberger Brückenproblem, das als Ursprung der Graphentheorie gilt.",
          "Ein Hamiltonscher Kreis durchläuft dagegen jeden Knoten (statt jeder Kante) genau einmal. Anders als beim Eulerschen Kreis ist kein einfaches, effizient prüfbares Kriterium für seine Existenz bekannt: Der naive Algorithmus muss im schlechtesten Fall alle m! Permutationen der Knoten durchprobieren. Bis heute ist unbekannt, ob ein wesentlich schnelleres (polynomielles) Verfahren existiert — die Frage ist Teil des P-versus-NP-Problems, für dessen Lösung das Clay Mathematics Institute eines von sieben Millennium-Preisproblemen mit 1 Million US-Dollar ausgelobt hat.",
        ],
      },
      {
        id: "9-2",
        heading: "9.2 Kürzeste Wege: der Algorithmus von Dijkstra",
        body: [
          "Der Algorithmus von Dijkstra (1959) bestimmt in einem gerichteten, kantengewichteten Graphen die kürzesten Wege von einem Startknoten zu allen anderen Knoten. Er arbeitet greedy: In jedem Schritt wird der noch nicht endgültig bearbeitete Knoten mit der kleinsten bekannten Distanz zum Startknoten ausgewählt, als endgültig markiert, und die Distanzen seiner Nachbarn werden aktualisiert, falls der Weg über den neu markierten Knoten kürzer ist.",
          "Der Algorithmus setzt voraus, dass alle Kantengewichte nicht-negativ sind — bei negativen Gewichten kann ein bereits als endgültig markierter Knoten fälschlich zu kurz eingeschätzt werden. Die Laufzeit liegt bei O(n²) mit einer einfachen array-basierten Umsetzung bzw. bei O((|E|+n)·log n) mit einer heap-basierten Prioritätswarteschlange. Der konkrete kürzeste Weg (nicht nur seine Länge) lässt sich rekonstruieren, indem zusätzlich zu jeder Distanz der jeweilige Vorgängerknoten mitgeführt wird.",
        ],
      },
      {
        id: "9-3",
        heading: "9.3 Der Algorithmus von Bellman-Ford",
        body: [
          "Der Algorithmus von Bellman-Ford löst dasselbe Problem wie Dijkstra, funktioniert aber auch bei negativen Kantengewichten: Er iteriert |V|−1-mal über alle Kanten und aktualisiert (relaxiert) dabei jede Distanzschätzung, sofern ein kürzerer Weg gefunden wird. Da nach |V|−1 Iterationen jeder kürzeste Weg (der aus höchstens |V|−1 Kanten besteht) korrekt berechnet ist, terminiert das Verfahren mit dem richtigen Ergebnis.",
          "Enthält der Graph einen vom Startknoten aus erreichbaren negativen Zyklus, existiert kein kürzester Weg (er ließe sich beliebig weiter verkürzen), und der Algorithmus terminiert nicht mit einem korrekten endlichen Ergebnis — dies lässt sich durch eine zusätzliche Kontrolliteration erkennen. Die Laufzeit liegt bei O(|E|·|V|) und damit typischerweise deutlich höher als bei Dijkstra, weshalb Bellman-Ford nur eingesetzt wird, wenn negative Kantengewichte tatsächlich vorkommen können.",
        ],
      },
      {
        id: "9-4",
        heading: "9.4 Minimale Spannbäume: Kruskal und Prim",
        body: [
          "Ein minimaler Spannbaum eines zusammenhängenden, kantengewichteten, ungerichteten Graphen ist ein azyklischer Teilgraph (also ein Baum), der alle Knoten verbindet und unter allen solchen Teilgraphen die minimale Summe der Kantengewichte besitzt — etwa gesucht, wenn ein Leitungsnetz mit minimalen Baukosten alle Standorte verbinden soll.",
          "Der Algorithmus von Kruskal (1956) sortiert alle Kanten aufsteigend nach Gewicht und fügt sie in dieser Reihenfolge zum Spannbaum hinzu, sofern sie keinen Zyklus mit den bereits gewählten Kanten bilden würden; er endet, sobald |V|−1 Kanten gewählt wurden. Die Laufzeit liegt bei O(|E|·log|E|), dominiert vom Sortieren der Kanten. Der Algorithmus von Prim wählt stattdessen ausgehend von einem einzelnen Startknoten in jedem Schritt die billigste Kante, die den bisher aufgebauten Teilbaum um einen neuen Knoten erweitert; seine Laufzeit liegt bei O(|E|+|V|·log|V|) und ist damit bei sehr dichten Graphen (|E| ≫ |V|) günstiger als Kruskal.",
        ],
      },
    ],
  },

  // ============ Kapitel 10 — Komplexität ============
  {
    id: "komplexitaet",
    number: 10,
    title: "Komplexität von Algorithmen",
    free: false,
    intro:
      "In den vorangegangenen Kapiteln ist wiederholt von 'O(n log n)' oder 'O(n²)' die Rede gewesen — Zeit, diese Begriffe zu präzisieren. Dieses Kapitel liefert das formale Werkzeug, um den Rechenzeitbedarf eines Algorithmus unabhängig von der konkreten Hardware zu quantifizieren.",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Einflussfaktoren und Elementaroperationen",
        body: [
          "Der Rechenzeitbedarf eines Algorithmus hängt von drei Faktoren ab: der Eingabegröße n, der Komplexität des Algorithmus selbst (wie oft welche Operationen in Abhängigkeit von n ausgeführt werden) und den Eigenschaften der ausführenden Rechenanlage. Um vom konkreten Rechner zu abstrahieren, verwendet man abstrakte Maschinenmodelle wie die Registermaschine (RAM) oder die Turing-Maschine und zählt Elementaroperationen (ELOP) statt reale Sekunden.",
          "Als Elementaroperationen gelten üblicherweise Zuweisungen, die vier Grundrechenarten, Vergleiche sowie logisches Und/Oder — jede davon wird als ein Schritt konstanter Dauer gezählt, unabhängig von der tatsächlichen Hardware. Eine einfache for-Schleife, die einen Rumpf mit c Elementaroperationen n-mal durchläuft, benötigt in dieser Zählweise insgesamt c·n Operationen zuzüglich einer konstanten Anzahl für Initialisierung und Abbruchtest.",
        ],
      },
      {
        id: "10-2",
        heading: "10.2 Tmin, Tavg und Tmax",
        body: [
          "Für einen Algorithmus A mit Eingabegröße n und die Menge Eₙ aller Eingaben dieser Größe bezeichnet man mit t(A;n,e) die Anzahl der Elementaroperationen für eine konkrete Eingabe e ∈ Eₙ. Daraus werden drei Kenngrößen abgeleitet: Tmin(A;n) = min t(A;n,e) (bester Fall), Tmax(A;n) = max t(A;n,e) (schlechtester Fall) und Tavg(A;n) (Durchschnitt über alle e ∈ Eₙ, meist unter Annahme einer Gleichverteilung).",
          "Bei einem Algorithmus ohne Fallunterscheidungen (z. B. der Berechnung der Summe der ersten n Zahlen mit T = 5n+3 Elementaroperationen) fallen alle drei Kenngrößen zusammen, da jede Eingabe der Größe n denselben Aufwand verursacht. Bei der sequentiellen Suche nach einem Element unterscheiden sie sich dagegen deutlich: Tmin liegt bei einer konstanten Anzahl von Schritten (Treffer an erster Position), Tmax bei etwa 6n Schritten (Element nicht vorhanden oder an letzter Position) und Tavg bei etwa 3n Schritten unter der Annahme, dass der gesuchte Wert mit gleicher Wahrscheinlichkeit an jeder Position steht.",
        ],
      },
      {
        id: "10-3",
        heading: "10.3 Groß-O-, Ω- und Θ-Notation",
        body: [
          "Eine Funktion f liegt in O(g), wenn f asymptotisch höchstens so stark wächst wie g: Es existieren eine Konstante c > 0 und ein n₀, sodass f(n) ≤ c·g(n) für alle n > n₀ gilt. Analog liegt f in Ω(g), wenn f mindestens so stark wächst wie g, und in Θ(g) = O(g) ∩ Ω(g), wenn f genau so stark wächst wie g.",
          "Für Polynome gilt ein einfaches Ordnungskriterium: Ein Polynom vom Grad k liegt in O(Polynom vom Grad j) genau dann, wenn k ≤ j gilt, in Ω genau dann, wenn k ≥ j, und in Θ genau dann, wenn k = j. So gilt etwa 5n+3 ∈ O(n) (mit c=6, n₀=3) und n²+1000n ∈ O(n²), aber n²+1000n ∉ O(n). Bei der Θ-Notation spielt die Basis eines Logarithmus keine Rolle, da sich Logarithmen zu unterschiedlichen Basen nur um einen konstanten Faktor unterscheiden: Θ(log₂n) = Θ(log_b n) für jede Basis b > 1.",
        ],
        formulas: ["f ∈ O(g) ⟺ ∃c>0 ∃n₀ ∀n>n₀: f(n) ≤ c·g(n)", "f ∈ Θ(g) ⟺ f ∈ O(g) ∧ f ∈ Ω(g)"],
        formulasLatex: [
          "f \\in O(g) \\iff \\exists c>0\\, \\exists n_0\\, \\forall n>n_0: f(n) \\le c\\cdot g(n)",
          "f \\in \\Theta(g) \\iff f \\in O(g) \\land f \\in \\Omega(g)",
        ],
      },
      {
        id: "10-4",
        heading: "10.4 Komplexitätsklassen und ihre praktische Bedeutung",
        body: [
          "Gängige Komplexitätsklassen lassen sich anschaulich interpretieren: O(log₂n) (logarithmisch, etwa binäre Suche) wächst so langsam, dass eine Verdopplung von n nur einen zusätzlichen konstanten Schritt kostet; O(n) (linear) verdoppelt den Aufwand bei doppelter Eingabegröße; O(n log₂n) (leicht überlinear, etwa Quicksort/Heapsort im Mittel) verhält sich fast wie linear; O(n²) und O(n³) (quadratisch/kubisch) werden bei wachsendem n schnell unpraktikabel; O(2ⁿ) (exponentiell) wird schon bei moderaten n praktisch unberechenbar, da bereits eine Verdopplung von n den Aufwand quadriert statt nur zu verdoppeln.",
          "Ein Algorithmus heißt polynomiell, wenn seine Komplexität ein Polynom in n ist (Klasse O(nᵏ) für ein festes k); er heißt exponentiell, wenn seine Komplexität in O(aⁿ) für eine Konstante a > 1 liegt. In der Praxis gelten polynomielle Algorithmen mit kleinem Exponenten (bis etwa O(n³)) noch als brauchbar, exponentielle Algorithmen dagegen selbst für vergleichsweise kleine Eingaben als praktisch unbenutzbar: Schon bei n=300 übersteigt 2ⁿ Werte, die in der Größenordnung der Anzahl der Protonen im beobachtbaren Universum liegen (eine rund 126-stellige Zahl) — ein Grund, warum für Probleme wie den Hamiltonschen Kreis (Abschnitt 9.1), für die nur exponentielle Algorithmen bekannt sind, praktikable Lösungen für große Instanzen bislang fehlen.",
        ],
      },
    ],
  },

  // ============ Kapitel 11 — UML: Einführung und Anwendungsfalldiagramme ============
  {
    id: "uml-einfuehrung",
    number: 11,
    title: "Einführung in UML und Anwendungsfalldiagramme",
    free: false,
    intro:
      "Nachdem die vorangegangenen Kapitel Algorithmen und Datenstrukturen behandelt haben, wenden wir uns nun der Frage zu, wie man den Entwurf größerer Softwaresysteme modelliert, bevor sie implementiert werden — mit der Unified Modeling Language (UML).",
    sections: [
      {
        id: "11-1",
        heading: "11.1 Warum modellieren?",
        body: [
          "Die Geschichte der Softwareentwicklung kennt zahlreiche kostspielige Fehlschläge, bei denen unklare oder unzureichend dokumentierte Anforderungen und mangelhafte Systementwürfe zu massiven Zeit- und Kostenüberschreitungen führten, teils mit Budgetüberschreitungen im dreistelligen Millionenbereich. Ein wiederkehrender Grund solcher Fehlschläge ist, dass Modellierung und Anforderungsanalyse zugunsten des reinen Programmierens unterschätzt werden — dabei durchzieht die Modellierung idealerweise den gesamten Software-Lebenszyklus, von der Problemstellung über Analyse und Entwurf bis zu Implementierung, Test und Wartung.",
          "UML ist eine vereinheitlichte, standardisierte Notation zur Modellierung objektorientierter Systeme. Sie dient gleichzeitig der Spezifikation, Visualisierung, Konstruktion und Dokumentation eines Systems und wird typischerweise auf drei Arten eingesetzt: als informelle Skizze zur Ideenfindung, als präziser Bauplan (Blueprint) für die Implementierung, oder — mit entsprechender Werkzeugunterstützung — direkt als ausführbare bzw. codegenerierende Notation.",
        ],
      },
      {
        id: "11-2",
        heading: "11.2 UML-Diagrammarten im Überblick",
        body: [
          "UML unterscheidet grob drei Diagrammfamilien: Strukturdiagramme (u. a. Klassen-, Objekt-, Paket- und Komponentendiagramme), das Anwendungsfalldiagramm sowie Verhaltensdiagramme (u. a. Sequenz-, Zustands- und Aktivitätsdiagramme). Wir behandeln in diesem und den folgenden zwei Kapiteln das Anwendungsfalldiagramm, die wichtigsten Strukturdiagramme (Klassen- und Objektdiagramme, Kapitel 12) sowie die wichtigsten Verhaltensdiagramme (Sequenz-, Zustands- und Aktivitätsdiagramme, Kapitel 13).",
          "Die verschiedenen Diagrammarten passen zu unterschiedlichen Phasen der Softwareentwicklung: Anwendungsfalldiagramme eignen sich für die Anforderungsermittlung, Paket- und Komponentendiagramme für die Architekturkonzeption, Klassendiagramme für den Grobentwurf, und Klassen-, Zustands-, Aktivitäts- sowie Sequenzdiagramme gemeinsam für den Feinentwurf. In der Praxis verfeinert man ein System schrittweise: von Anwendungsfalldiagrammen über Paket-/Komponentendiagramme und Klassen-/Objektdiagramme bis zu den Verhaltensdiagrammen.",
        ],
      },
      {
        id: "11-3",
        heading: "11.3 Anwendungsfalldiagramme: Akteure und Anwendungsfälle",
        body: [
          "Ein Anwendungsfalldiagramm gibt einen Gesamtüberblick über die Interaktionen zwischen Nutzern und einem System und ist damit ein zentrales Werkzeug der Anforderungsermittlung. Die drei Kernelemente sind der Anwendungsfall (als Oval dargestellt, ein konkretes Nutzungsszenario), der Akteur (als Strichfigur dargestellt, eine Rolle außerhalb des Systems, die mit ihm interagiert) und die Systemgrenze (ein Rechteck, das die im System enthaltenen Anwendungsfälle umschließt).",
          "Ein einfaches Beispiel: In einer Bibliotheksverwaltungssoftware soll ein Bibliothekar die Ausleihgebühren berechnen können, während der Bibliotheksleiter Mitglieder aufnehmen und sperren kann. Assoziationen zwischen Akteur und Anwendungsfall werden als einfache Linien dargestellt, gegebenenfalls mit Multiplizitäten an den Enden, wenn z. B. ein Akteur mehrere Instanzen eines Anwendungsfalls gleichzeitig ausführen kann.",
        ],
      },
      {
        id: "11-4",
        heading: "11.4 include, extend und Generalisierung",
        body: [
          "Eine include-Beziehung (gestrichelter Pfeil mit Beschriftung «include») zeigt, dass ein Anwendungsfall einen anderen zwingend als Teilschritt mit einschließt — etwa wenn 'Mitgliederliste erstellen' bei jeder Aufnahme oder Sperrung eines Mitglieds automatisch mit ausgeführt wird. Eine extend-Beziehung (gestrichelter Pfeil mit Beschriftung «extend») zeigt dagegen eine optionale Erweiterung eines Anwendungsfalls unter einer bestimmten Bedingung, verankert an einem benannten Erweiterungspunkt: Das Sperren eines Fachbereichsleiters ist beispielsweise eine Erweiterung des Anwendungsfalls 'Mitarbeiter sperren', die nur dann eintritt, wenn der Fachbereichsleiter seinen Bereich nachweislich nicht im Griff hat.",
          "Eine Generalisierung zwischen zwei Anwendungsfällen (durchgezogener Pfeil mit offener Pfeilspitze) drückt aus, dass ein spezialisierter Anwendungsfall eine besondere Ausprägung eines allgemeineren ist — etwa wenn 'Forderung stellen' durch die spezielleren Fälle 'Mahnung erstellen' und 'Rechnung erstellen' konkretisiert wird. Generalisierung lässt sich auch zwischen Akteuren einsetzen, wenn ein spezialisierter Akteur (z. B. ein Abteilungsleiter) alle Anwendungsfälle eines allgemeineren Akteurs (z. B. eines gewöhnlichen Sachbearbeiters) übernimmt und zusätzlich eigene besitzt.",
        ],
      },
    ],
  },

  // ============ Kapitel 12 — UML: Klassen- und Objektdiagramme ============
  {
    id: "uml-klassendiagramme",
    number: 12,
    title: "Klassen- und Objektdiagramme",
    free: false,
    intro:
      "Nachdem Kapitel 11 mit dem Anwendungsfalldiagramm die Außensicht auf ein System modelliert hat, wenden wir uns nun der inneren Struktur zu: Klassendiagramme (und die aus ihnen abgeleiteten Objektdiagramme) legen fest, aus welchen Bausteinen ein System besteht und wie diese zusammenhängen.",
    sections: [
      {
        id: "12-1",
        heading: "12.1 Klassennotation: Attribute und Operationen",
        body: [
          "Eine Klasse wird als Rechteck mit drei Abschnitten dargestellt: Klassenname, Attribute und Operationen. Ein Attribut wird notiert als Sichtbarkeit (+ öffentlich, # geschützt, − privat) gefolgt von Name, Typ und optionaler Kardinalität (z. B. [0..1] für höchstens ein Vorkommen, [*] für beliebig viele). Eine Operation folgt demselben Sichtbarkeitsschema und wird ergänzt um Argumentliste und Rückgabetyp; kursiv gesetzte Operationen sind abstrakt, also ohne konkrete Implementierung in dieser Klasse.",
          "Bei einer Assoziation zwischen zwei Klassen gibt eine optionale Pfeilspitze die Navigationsrichtung an, ein Rollenname an jedem Ende beschreibt, in welcher Funktion die verbundene Klasse auftritt, und eine Kardinalität an jedem Ende gibt an, wie viele Instanzen jeweils an der Beziehung teilnehmen können.",
        ],
      },
      {
        id: "12-2",
        heading: "12.2 Assoziation, Aggregation und Komposition",
        body: [
          "Aggregation (dargestellt durch eine unausgefüllte Raute am Ganzen) modelliert eine 'Teil-von'-Beziehung ohne Existenzabhängigkeit: Ein Rad gehört zu einem Auto, existiert aber auch unabhängig davon weiter, wenn das Auto entfernt wird. Komposition (dargestellt durch eine ausgefüllte Raute) modelliert dieselbe 'Teil-von'-Beziehung, aber mit Existenzabhängigkeit: Ein Raum gehört zu genau einem Gebäude und hat ohne dieses Gebäude keinen Bestand — die Kardinalität auf der Seite des Ganzen muss deshalb bei einer Komposition immer genau 1 betragen.",
          "Zwei allgemeine Entwurfsprinzipien leiten die Modellierung von Klassendiagrammen: das Geheimnisprinzip (Kapselung), nach dem die interne Struktur einer Klasse nach außen verborgen und nur über klar definierte Schnittstellen zugänglich gemacht wird, sowie die Vermeidung von Redundanz, nach der gemeinsame Attribute und Operationen mehrerer Klassen mittels Vererbung, Aggregation oder Komposition in eine gemeinsame Struktur ausgelagert werden, statt sie in jeder Klasse zu duplizieren — wichtig für die spätere Wartbarkeit des Systems.",
        ],
      },
      {
        id: "12-3",
        heading: "12.3 Vererbung, abstrakte Klassen und Interfaces",
        body: [
          "Vererbung wird durch einen durchgezogenen Pfeil mit unausgefüllter, dreieckiger Pfeilspitze dargestellt, der von der spezialisierten zur allgemeineren Klasse zeigt ('erbt von'). Eine abstrakte Klasse (kursiv geschriebener Klassenname) kann nicht direkt instanziiert werden und enthält mindestens eine abstrakte Operation; ein Interface («interface»-Stereotyp) geht noch weiter und enthält ausschließlich Operationssignaturen ohne jede Implementierung und ohne Attribute. Die Realisierung eines Interfaces wird durch einen gestrichelten Pfeil mit unausgefüllter Pfeilspitze dargestellt.",
          "Ein klassisches, professorunabhängiges Lehrbuchbeispiel: Eine abstrakte Klasse 'Geometrische Figur' mit der abstrakten Operation getFarbe() wird durch konkrete Klassen wie Rechteck und Quadrat spezialisiert, die diese Operation jeweils konkret implementieren. Über Vererbung lässt sich zugleich Redundanz vermeiden: Statt gemeinsame Attribute wie Name oder Adresse in mehreren Unterklassen zu duplizieren, werden sie einmalig in einer gemeinsamen (gegebenenfalls abstrakten) Oberklasse definiert, von der die spezialisierten Klassen erben.",
        ],
      },
      {
        id: "12-4",
        heading: "12.4 Objektdiagramme",
        body: [
          "Ein Objektdiagramm zeigt eine konkrete Momentaufnahme von Instanzen eines Klassendiagramms zu einem bestimmten Zeitpunkt: Statt einer Klasse mit Attributtypen zeigt es konkrete Objekte mit tatsächlichen Attributwerten. Ein Objekt wird notiert als Instanzname:Klassenname (unterstrichen), wobei Instanzname oder Klassenname auch weggelassen werden können, wenn sie nicht bekannt oder nicht relevant sind.",
          "Ein Beispiel: Zu einem Klassendiagramm mit den Klassen Leser, Ausleihe und Buch könnte ein Objektdiagramm die konkrete Situation zeigen, dass die Leserin m.schmidt:Leser über die Ausleihe a1:Ausleihe am 03.03.2026 das Exemplar b1:Buch entliehen hat — jede im Objektdiagramm dargestellte Verbindung muss dabei einer im zugehörigen Klassendiagramm modellierten Assoziation entsprechen.",
        ],
      },
    ],
  },

  // ============ Kapitel 13 — UML: Verhaltensdiagramme ============
  {
    id: "uml-verhaltensdiagramme",
    number: 13,
    title: "Verhaltensdiagramme: Sequenz, Zustand und Aktivität",
    free: false,
    intro:
      "Während Klassen- und Objektdiagramme (Kapitel 12) die statische Struktur eines Systems zeigen, modellieren die drei Verhaltensdiagramme dieses letzten Kapitels, wie sich das System über die Zeit verhält: im Dialog zwischen Objekten, in Reaktion auf Ereignisse und im Ablauf von Geschäftsprozessen.",
    sections: [
      {
        id: "13-1",
        heading: "13.1 Sequenzdiagramme: Lebenslinien und Nachrichten",
        body: [
          "Ein Sequenzdiagramm modelliert das Verhalten mehrerer Objekte in einem konkreten Szenario mit besonderem Fokus auf die zeitliche Reihenfolge der ausgetauschten Nachrichten. Die beteiligten Objekte werden horizontal angeordnet, jedes mit einer vertikalen Lebenslinie, entlang derer die Zeit von oben nach unten fortschreitet; ein Aktivierungsbalken zeigt, während welchem Zeitraum ein Objekt aktiv Kontrolle über eine Methode ausübt.",
          "Ein synchroner Methodenaufruf wird als durchgezogener Pfeil mit gefüllter Pfeilspitze dargestellt, ein asynchroner Aufruf mit offener Pfeilspitze; die Rückgabe wird als gestrichelter Pfeil notiert. Die Erzeugung eines neuen Objekts während des Ablaufs wird durch einen auf «create» beschrifteten Pfeil zu einer versetzt beginnenden Lebenslinie dargestellt. Wichtig ist die Konsistenz mit dem zugrunde liegenden Klassendiagramm: Ein Objekt kann nur dann direkt eine Methode eines anderen Objekts aufrufen, wenn zwischen den beiden Klassen tatsächlich eine Assoziation modelliert ist.",
        ],
      },
      {
        id: "13-2",
        heading: "13.2 Kontrollstrukturen in Sequenzdiagrammen",
        body: [
          "Sequenzdiagramme kennen mehrere Operatoren zur Modellierung von Kontrollfluss, die als beschrifteter Rahmen um den betroffenen Ausschnitt gezeichnet werden: alt für alternative, sich gegenseitig ausschließende Abläufe (mit Wächterbedingungen in eckigen Klammern), opt für einen optionalen Ablauf, der nur unter einer Bedingung eintritt, und loop für einen wiederholt ausgeführten Ablauf.",
          "Ergänzend existieren strict (Nachrichten müssen strikt in der gezeigten Reihenfolge ablaufen), par (mehrere Abläufe finden parallel statt) und critical (ein Ablauf, der als atomare Einheit nicht durch andere Nachrichten unterbrochen werden darf). Ein typisches Beispiel kombiniert loop und opt: Eine Bestellung durchläuft eine Schleife, solange weitere Artikel hinzugefügt werden, und löst optional eine zusätzliche Benachrichtigung an einen Sachbearbeiter aus, falls es sich um eine Eilbestellung handelt.",
        ],
      },
      {
        id: "13-3",
        heading: "13.3 Zustandsdiagramme",
        body: [
          "Zustandsdiagramme gehen auf David Harels 1987 vorgestellte Statecharts zurück und eignen sich zur Modellierung aktiver, ereignisgesteuerter Systeme: Ein System befindet sich stets in genau einem Zustand (abgerundetes Rechteck, optional mit einer do-Aktivität, die während des gesamten Aufenthalts im Zustand läuft) und wechselt über Transitionen (Pfeile, optional beschriftet mit dem auslösenden Ereignis, einer Wächterbedingung in eckigen Klammern und/oder einer auszuführenden Aktion) in einen anderen Zustand. Ein Anfangszustand wird als ausgefüllter Kreis, ein Endzustand als Kreis-in-Kreis dargestellt; Zustände dürfen ineinander verschachtelt werden, um komplexes Verhalten modular zu strukturieren.",
          "Ein Beispiel: Ein Medienplayer wechselt vom Zustand 'Gestoppt' durch das Ereignis 'Play' in den Zustand 'Wiedergabe' und von dort durch 'Pause' in den Zustand 'Pausiert', der durch erneutes 'Play' wieder zu 'Wiedergabe' zurückführt. Zustandsdiagramme eignen sich gut für diskretes, ereignisgesteuertes Verhalten, stoßen aber an ihre Grenzen bei kontinuierlichem Verhalten (etwa einem sich stetig verändernden Messwert), das sich nicht sinnvoll in eine endliche Anzahl diskreter Zustände zerlegen lässt.",
        ],
      },
      {
        id: "13-4",
        heading: "13.4 Aktivitätsdiagramme und Swimlanes",
        body: [
          "Ein Aktivitätsdiagramm modelliert prozedurales und parallel ablaufendes Verhalten und eignet sich besonders für kontroll- und datenflussorientierte Abläufe wie Geschäftsprozesse, im Unterschied zum ereignisgesteuerten Zustandsdiagramm (Abschnitt 13.3). Eine Aktivität wird als abgerundetes Rechteck dargestellt; ein Fork/Join (dicker horizontaler Balken) spaltet den Kontrollfluss in parallele Zweige auf bzw. führt sie wieder zusammen, während eine Raute mit mehreren beschrifteten Ausgängen eine bedingte Verzweigung zwischen alternativen Abläufen darstellt.",
          "Objekte können zwischen Aktivitäten über gestrichelte Pfeile und ein Objektsymbol fließen, um Datenabhängigkeiten sichtbar zu machen. Swimlanes (senkrechte oder waagrechte Bahnen) ordnen die einzelnen Aktivitäten den dafür verantwortlichen Akteuren oder Abteilungen zu — etwa wenn ein Rückgabeprozess auf die Bahnen Logistik, Kundenservice und Finanzbüro aufgeteilt wird: Der Kundenservice nimmt die Bestellung entgegen, während parallel die Logistik den Versand vorbereitet und das Finanzbüro auf den Zahlungseingang wartet, bevor die Ware tatsächlich verschickt wird.",
        ],
      },
    ],
  },
];
