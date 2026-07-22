export type QuestionType = "mc" | "numeric";

export interface Question {
  id: string;
  topic: string;
  type: QuestionType;
  prompt: string;
  options?: string[];
  correctIndex?: number;
  correctValue?: number;
  tolerance?: number;
  unit?: string;
  explanation: string;
  source: string;
  free: boolean;
}

// Hinweis: Alle Übungsaufgaben in dieser Fragenbank sind eigenständig verfasst
// und unterscheiden sich sowohl in den Zahlenwerten als auch (soweit ein
// konkretes Szenario vorlag) im Szenario selbst von den echten
// Tutorium-Lösungsblättern. Rein abstrakte, symbolische Aufgaben (Rekursions-
// gleichungen, Feldindizes, Bytewertebereiche, Kontrollfluss-Code ohne
// erfundenen Kontext) benötigen kein auszutauschendes Szenario, da hier von
// vornherein kein erfundener Kontext (Personen/Branchen/Institutionen)
// vorliegt — hier wurden lediglich die Zahlenwerte verändert. Gegen die
// pdftotext-Extrakte der Quell-PDFs gegengelesen (Regel 4).
export const TOPICS = [
  "Bedingte Anweisungen: if, else und switch",
  "Schleifen: for, while und do-while",
  "Kontrollierter Schleifenabbruch: break und continue",
  "Primitive Datentypen und Wertebereiche",
  "Operatoren, Ausdrücke und Rangfolge",
  "Implizites und explizites Type-Casting",
  "Methodenkopf, Parameter und Rückgabewerte",
  "Überladene Methoden und Signaturen",
  "Exkurs: Debugging und Softwaretests",
  "Rekursion: Basisfall und Rekursionsschritt",
  "Rekursion vs. Iteration",
  "Anwendungsbeispiel: Rekursives Backtracking",
  "Eindimensionale und mehrdimensionale Felder",
  "Referenzen, Kopien und der Stack/Heap-Unterschied",
  "Die Klasse String und Zeichenketten",
  "Klassen, Objekte und Attribute",
  "Instanz- vs. Klassenvariablen und -methoden",
  "Konstruktoren und Objekterzeugung",
  "Kapselung, Sichtbarkeit und this",
  "UML-Klassendiagramme",
  "Vererbungshierarchien und super",
  "Überschreiben von Methoden",
  "Polymorphie und dynamisches Binden",
  "Abstrakte Klassen und Interfaces",
  "Hüllklassen (Wrapper) und Autoboxing",
  "Exceptions: try, catch und finally",
  "Eigene Exception-Klassen und die Exception-Hierarchie",
  "Einfach und doppelt verkettete Listen",
  "Bäume: Aufbau und Traversierung",
] as const;

export const questions: Question[] = [
  // ---------- Bedingte Anweisungen: if, else und switch ----------
  {
    id: "ks-01",
    topic: "Bedingte Anweisungen: if, else und switch",
    type: "mc",
    prompt: "Was passiert, wenn in einem case-Zweig einer switch-Anweisung das break vergessen wird?",
    options: [
      "Ein Compilerfehler wird ausgelöst.",
      "Die Ausführung fällt in den Code des nächsten case-Zweigs durch (Fallthrough), bis ein break erreicht wird oder der switch-Block endet.",
      "Java bricht automatisch nach dem passenden case-Zweig ab, break ist nur zur Lesbarkeit gedacht.",
      "Der switch-Block wird komplett übersprungen.",
    ],
    correctIndex: 1,
    explanation:
      "Ohne break setzt sich die Ausführung nach einem passenden case-Zweig im Code des nächsten Zweigs fort (Fallthrough) — ein sehr häufiger Fehlerquell in Java, wenn er nicht bewusst eingesetzt wird.",
    source: "Kapitel 1, Bedingte Anweisungen",
    free: true,
  },
  {
    id: "ks-02",
    topic: "Bedingte Anweisungen: if, else und switch",
    type: "numeric",
    prompt:
      "Gegeben: int x = 3; int count = 0; switch(x) { case 1: count++; case 2: count++; case 3: count++; case 4: count++; default: count++; } Welchen Wert hat count danach?",
    correctValue: 3,
    explanation:
      "x=3 trifft case 3 (count wird 1) und fällt ohne break weiter durch zu case 4 (count wird 2) und zu default (count wird 3) — insgesamt also drei Erhöhungen ab dem Treffer.",
    source: "Kapitel 1, Bedingte Anweisungen",
    free: true,
  },
  {
    id: "ks-03",
    topic: "Bedingte Anweisungen: if, else und switch",
    type: "mc",
    prompt: "Wie viele else-Zweige darf eine if-else-if-Kette höchstens besitzen?",
    options: [
      "Höchstens einen, ganz am Ende der Kette.",
      "Beliebig viele, solange sie vor dem ersten else if stehen.",
      "Genau so viele wie es else-if-Zweige gibt.",
      "Keinen — else ist in Java nicht erlaubt.",
    ],
    correctIndex: 0,
    explanation:
      "Eine if-else-if-Kette darf beliebig viele else-if-Zweige, aber höchstens EINEN abschließenden else-Zweig besitzen, der den verbleibenden Fall auffängt.",
    source: "Kapitel 1, Bedingte Anweisungen",
    free: true,
  },

  // ---------- Schleifen: for, while und do-while ----------
  {
    id: "sl-01",
    topic: "Schleifen: for, while und do-while",
    type: "mc",
    prompt: "Was unterscheidet eine do-while-Schleife von einer normalen while-Schleife?",
    options: [
      "Es gibt keinen Unterschied, beide sind nur unterschiedliche Schreibweisen.",
      "Bei do-while wird die Bedingung erst nach dem ersten Durchlauf geprüft, der Körper läuft also mindestens einmal.",
      "do-while kann keine Bedingung mit && enthalten.",
      "do-while darf nur mit Ganzzahlen als Laufvariable verwendet werden.",
    ],
    correctIndex: 1,
    explanation:
      "Bei do-while wird der Schleifenkörper zuerst ausgeführt und die Bedingung erst danach geprüft — der Körper läuft also mindestens einmal, selbst wenn die Bedingung von Anfang an falsch ist.",
    source: "Kapitel 1, Schleifen",
    free: true,
  },
  {
    id: "sl-02",
    topic: "Schleifen: for, while und do-while",
    type: "numeric",
    prompt:
      "Ein Programm gibt für i von 1 bis 8 in einer äußeren Schleife jeweils eine innere Schleife von 1 bis i aus, die ein Zeichen druckt. Wie oft wird das Zeichen insgesamt gedruckt?",
    correctValue: 36,
    explanation:
      "Die Gesamtzahl ergibt sich aus der Gaußschen Summenformel: 1+2+...+8 = 8·9/2 = 36.",
    source: "Kapitel 1, Schleifen",
    free: true,
  },
  {
    id: "sl-03",
    topic: "Schleifen: for, while und do-while",
    type: "mc",
    prompt: "Welcher Fehler führt in der Schleife 'int i = 0; while (i < 10) { System.out.println(i); }' zu einer Endlosschleife?",
    options: [
      "Die Bedingung i < 10 ist von Anfang an falsch.",
      "Es fehlt eine Anweisung, die i innerhalb der Schleife erhöht.",
      "while-Schleifen unterstützen in Java keine Ganzzahlvergleiche.",
      "Es liegt kein Fehler vor, die Schleife terminiert korrekt.",
    ],
    correctIndex: 1,
    explanation:
      "Da i innerhalb des Schleifenkörpers nie erhöht wird, bleibt die Bedingung i < 10 dauerhaft wahr — die Schleife terminiert nie (Endlosschleife).",
    source: "Kapitel 1, Schleifen",
    free: true,
  },

  // ---------- Kontrollierter Schleifenabbruch: break und continue ----------
  {
    id: "bc-01",
    topic: "Kontrollierter Schleifenabbruch: break und continue",
    type: "mc",
    prompt: "Was ist der zentrale Unterschied zwischen break und continue in einer Schleife?",
    options: [
      "break beendet nur den aktuellen Durchlauf, continue beendet die ganze Schleife.",
      "break beendet die gesamte Schleife sofort, continue überspringt nur den Rest des aktuellen Durchlaufs.",
      "Beide Anweisungen sind in Java identisch.",
      "break funktioniert nur in for-Schleifen, continue nur in while-Schleifen.",
    ],
    correctIndex: 1,
    explanation:
      "break verlässt die umschließende Schleife komplett, continue überspringt nur die restlichen Anweisungen des aktuellen Durchlaufs und macht mit dem nächsten Durchlauf weiter.",
    source: "Kapitel 1, Schleifenabbruch",
    free: true,
  },
  {
    id: "bc-02",
    topic: "Kontrollierter Schleifenabbruch: break und continue",
    type: "numeric",
    prompt:
      "for (int i = 1; i <= 10; i++) { if (i % 3 == 0) continue; System.out.print(i); } Wie viele Zahlen werden insgesamt ausgegeben?",
    correctValue: 7,
    explanation:
      "Von 1 bis 10 sind 3, 6 und 9 durch 3 teilbar und werden per continue übersprungen — es bleiben 10−3 = 7 ausgegebene Zahlen.",
    source: "Kapitel 1, Schleifenabbruch",
    free: true,
  },
  {
    id: "bc-03",
    topic: "Kontrollierter Schleifenabbruch: break und continue",
    type: "mc",
    prompt: "Wozu dient ein Label (benannte Marke) in Kombination mit break in Java?",
    options: [
      "Um bei verschachtelten Schleifen gezielt eine äußere Schleife zu verlassen, nicht nur die innerste.",
      "Um eine Schleife umzubenennen.",
      "Labels sind in Java nicht erlaubt.",
      "Um eine Methode vorzeitig zu verlassen.",
    ],
    correctIndex: 0,
    explanation:
      "Ein Label vor einer äußeren Schleife erlaubt es, mit break label diese äußere Schleife direkt zu verlassen, obwohl sich die break-Anweisung in einer inneren Schleife befindet.",
    source: "Kapitel 1, Schleifenabbruch",
    free: true,
  },

  // ---------- Primitive Datentypen und Wertebereiche ----------
  {
    id: "dt-01",
    topic: "Primitive Datentypen und Wertebereiche",
    type: "mc",
    prompt: "Welcher der folgenden Datentypen ist in Java KEIN primitiver Datentyp?",
    options: ["int", "boolean", "String", "char"],
    correctIndex: 2,
    explanation:
      "String ist eine Klasse und damit ein Referenzdatentyp, während int, boolean und char zu den acht primitiven Datentypen Javas gehören.",
    source: "Kapitel 2, Primitive Datentypen",
    free: false,
  },
  {
    id: "dt-02",
    topic: "Primitive Datentypen und Wertebereiche",
    type: "numeric",
    prompt: "Welchen Rest liefert der Ausdruck 29 % 6 in Java?",
    correctValue: 5,
    explanation: "29 / 6 ergibt (abgeschnitten) 4, und 4·6 = 24, sodass als Rest 29−24 = 5 verbleibt.",
    source: "Kapitel 2, Primitive Datentypen",
    free: false,
  },
  {
    id: "dt-03",
    topic: "Primitive Datentypen und Wertebereiche",
    type: "mc",
    prompt: "Welche Aussage über den Wertebereich von byte, short, int und long in Java trifft zu?",
    options: [
      "Alle vier Ganzzahltypen besitzen denselben Wertebereich.",
      "byte hat den kleinsten, long den größten Wertebereich der vier Typen.",
      "int hat einen größeren Wertebereich als long.",
      "short kann größere Werte speichern als int.",
    ],
    correctIndex: 1,
    explanation:
      "Die vier Ganzzahltypen unterscheiden sich in ihrer Bitbreite (8/16/32/64 Bit) und damit im Wertebereich: byte < short < int < long.",
    source: "Kapitel 2, Primitive Datentypen",
    free: false,
  },

  // ---------- Operatoren, Ausdrücke und Rangfolge ----------
  {
    id: "op-01",
    topic: "Operatoren, Ausdrücke und Rangfolge",
    type: "numeric",
    prompt: "int i = 10; int a = i--; int b = --i; Welchen Wert hat a + b danach?",
    correctValue: 18,
    explanation:
      "a = i-- liefert den alten Wert 10 (a=10), i steht danach bei 9. b = --i verringert i zuerst auf 8 und liefert diesen neuen Wert (b=8). Also a+b = 10+8 = 18.",
    source: "Kapitel 2, Operatoren",
    free: false,
  },
  {
    id: "op-02",
    topic: "Operatoren, Ausdrücke und Rangfolge",
    type: "mc",
    prompt: "Welchen Wert liefert der Ausdruck 4 + 6 * 2 in Java?",
    options: ["20", "16", "12", "10"],
    correctIndex: 1,
    explanation:
      "Nach 'Punkt vor Strich' wird zuerst 6 * 2 = 12 berechnet und danach 4 addiert: 4 + 12 = 16.",
    source: "Kapitel 2, Operatoren",
    free: false,
  },
  {
    id: "op-03",
    topic: "Operatoren, Ausdrücke und Rangfolge",
    type: "mc",
    prompt: "Gegeben: boolean ergebnis = (x != 0) && (10 / x > 1); Warum ist diese Reihenfolge der Bedingungen sicherer als die vertauschte Reihenfolge (10/x > 1) && (x != 0)?",
    options: [
      "Es gibt keinen Unterschied, beide Reihenfolgen sind gleich sicher.",
      "Wegen Kurzschlussauswertung wird 10/x bei x==0 gar nicht erst ausgewertet, da der erste Operand bereits false liefert.",
      "Java wertet && immer von rechts nach links aus.",
      "&& erzwingt in Java automatisch eine Nullprüfung.",
    ],
    correctIndex: 1,
    explanation:
      "Da && kurzschlussausgewertet wird, bricht die Auswertung ab, sobald der erste Operand false ist — bei x==0 wird 10/x also gar nicht berechnet, eine ArithmeticException wird vermieden.",
    source: "Kapitel 2, Operatoren",
    free: false,
  },

  // ---------- Implizites und explizites Type-Casting ----------
  {
    id: "tc-01",
    topic: "Implizites und explizites Type-Casting",
    type: "numeric",
    prompt: "Welchen Wert liefert (byte) 150 in Java (byte reicht von −128 bis 127)?",
    correctValue: -106,
    explanation:
      "((150+128) mod 256) − 128 = (278 mod 256) − 128 = 22 − 128 = −106 — der Wert 'überläuft' auf die negative Seite des byte-Wertebereichs.",
    source: "Kapitel 2, Type-Casting",
    free: false,
  },
  {
    id: "tc-02",
    topic: "Implizites und explizites Type-Casting",
    type: "mc",
    prompt: "Welchen Wert liefert (int) 9.87 in Java?",
    options: ["10 (gerundet)", "9 (abgeschnitten)", "9.87", "Ein Compilerfehler tritt auf."],
    correctIndex: 1,
    explanation:
      "Explizites Casting von double nach int schneidet den Nachkommateil einfach ab, es wird NICHT gerundet — (int) 9.87 ergibt also 9.",
    source: "Kapitel 2, Type-Casting",
    free: false,
  },
  {
    id: "tc-03",
    topic: "Implizites und explizites Type-Casting",
    type: "mc",
    prompt: "Welche Umwandlung geschieht in Java automatisch (implizit), ohne dass explizit gecastet werden muss?",
    options: [
      "double nach int",
      "int nach double",
      "long nach int",
      "int nach byte",
    ],
    correctIndex: 1,
    explanation:
      "int nach double ist eine 'erweiternde' Umwandlung ohne Informationsverlust und geschieht automatisch. Die anderen genannten Umwandlungen können Information verlieren und erfordern ein explizites Casting.",
    source: "Kapitel 2, Type-Casting",
    free: false,
  },

  // ---------- Methodenkopf, Parameter und Rückgabewerte ----------
  {
    id: "mk-01",
    topic: "Methodenkopf, Parameter und Rückgabewerte",
    type: "mc",
    prompt: "Eine Methode erhält einen int-Parameter und verändert dessen Wert innerhalb der Methode. Welche Auswirkung hat das auf die Variable, die beim Aufruf übergeben wurde?",
    options: [
      "Die ursprüngliche Variable ändert sich ebenfalls, da Java call by reference verwendet.",
      "Die ursprüngliche Variable bleibt unverändert, da bei primitiven Typen eine Kopie übergeben wird (call by value).",
      "Es kommt zu einem Compilerfehler.",
      "Das Verhalten ist nicht definiert und hängt von der JVM ab.",
    ],
    correctIndex: 1,
    explanation:
      "Java übergibt primitive Parameter grundsätzlich per call by value — die Methode erhält nur eine Kopie des Werts, Änderungen daran bleiben lokal und wirken sich nicht auf die aufrufende Variable aus.",
    source: "Kapitel 3, Methoden",
    free: false,
  },
  {
    id: "mk-02",
    topic: "Methodenkopf, Parameter und Rückgabewerte",
    type: "mc",
    prompt: "Welcher Rückgabetyp bedeutet, dass eine Methode keinen Wert zurückliefert?",
    options: ["null", "void", "empty", "int"],
    correctIndex: 1,
    explanation: "void als Rückgabetyp bedeutet, dass die Methode keinen Wert per return zurückliefert.",
    source: "Kapitel 3, Methoden",
    free: false,
  },
  {
    id: "mk-03",
    topic: "Methodenkopf, Parameter und Rückgabewerte",
    type: "mc",
    prompt: "Eine Methode erhält ein int-Array als Parameter und ändert darin ein einzelnes Element (arr[0] = 99). Ist diese Änderung außerhalb der Methode sichtbar?",
    options: [
      "Ja, da Array-Parameter Referenzen sind und beide Variablen auf dasselbe Array-Objekt zeigen.",
      "Nein, Arrays werden in Java immer vollständig kopiert übergeben.",
      "Nur wenn das Array final deklariert wurde.",
      "Nur bei Arrays mit primitiven Elementtypen.",
    ],
    correctIndex: 0,
    explanation:
      "Auch bei call by value wird bei einem Array-Parameter der Wert der Referenz kopiert — diese Kopie zeigt aber weiterhin auf dasselbe Array-Objekt im Heap, sodass Änderungen an Elementen sichtbar bleiben.",
    source: "Kapitel 3, Methoden",
    free: false,
  },

  // ---------- Überladene Methoden und Signaturen ----------
  {
    id: "um-01",
    topic: "Überladene Methoden und Signaturen",
    type: "mc",
    prompt: "Reicht ein unterschiedlicher Rückgabetyp allein aus, um zwei Methoden mit gleichem Namen und gleichen Parametern als überladen (unterschiedliche Signatur) zu betrachten?",
    options: [
      "Ja, der Rückgabetyp ist Teil der Signatur.",
      "Nein, die Signatur besteht nur aus Name sowie Anzahl, Reihenfolge und Typen der Parameter — ein unterschiedlicher Rückgabetyp allein reicht nicht.",
      "Ja, aber nur bei primitiven Rückgabetypen.",
      "Nein, Methodenüberladung ist in Java generell nicht erlaubt.",
    ],
    correctIndex: 1,
    explanation:
      "Die Methodensignatur umfasst Name sowie Anzahl, Reihenfolge und Typen der Parameter — der Rückgabetyp gehört NICHT dazu. Zwei Methoden, die sich nur im Rückgabetyp unterscheiden, führen zu einem Compilerfehler.",
    source: "Kapitel 3, Überladene Methoden",
    free: false,
  },
  {
    id: "um-02",
    topic: "Überladene Methoden und Signaturen",
    type: "mc",
    prompt:
      "Gegeben zwei überladene Methoden: berechne(int a, int b) und berechne(double a, double b). Welche Methode wird beim Aufruf berechne(3, 4) ausgewählt?",
    options: [
      "berechne(double, double), da double allgemeiner ist.",
      "berechne(int, int), da beide Argumente exakt vom Typ int sind.",
      "Der Compiler meldet einen Mehrdeutigkeitsfehler.",
      "Java wählt zufällig eine der beiden Methoden.",
    ],
    correctIndex: 1,
    explanation:
      "Der Compiler bevorzugt eine exakt passende Signatur — da 3 und 4 vom Typ int sind, wird berechne(int, int) ohne jedes Casting ausgewählt.",
    source: "Kapitel 3, Überladene Methoden",
    free: false,
  },
  {
    id: "um-03",
    topic: "Überladene Methoden und Signaturen",
    type: "mc",
    prompt: "Warum kann ein Methodenaufruf zu einem Mehrdeutigkeitsfehler des Compilers führen?",
    options: [
      "Wenn mehrere überladene Methoden nach den Casting-Regeln gleichermaßen passend sind und keine davon eindeutig 'näher' am Aufruf liegt.",
      "Weil Java grundsätzlich keine überladenen Methoden erlaubt.",
      "Weil jede Methode zwingend einen eindeutigen Namen benötigt.",
      "Mehrdeutigkeitsfehler treten nur bei rekursiven Methoden auf.",
    ],
    correctIndex: 0,
    explanation:
      "Passt kein Kandidat exakt und sind mehrere überladene Methoden über implizites Casting gleichermaßen anwendbar, ohne dass einer eindeutig bevorzugt würde, meldet der Compiler einen Mehrdeutigkeitsfehler.",
    source: "Kapitel 3, Überladene Methoden",
    free: false,
  },

  // ---------- Exkurs: Debugging und Softwaretests ----------
  {
    id: "db-01",
    topic: "Exkurs: Debugging und Softwaretests",
    type: "mc",
    prompt: "Ein Programm kompiliert und läuft fehlerfrei durch, liefert aber ein falsches Ergebnis. Um welche Fehlerart handelt es sich?",
    options: ["Syntaxfehler", "Laufzeitfehler", "Semantischer (logischer) Fehler", "Compilerfehler"],
    correctIndex: 2,
    explanation:
      "Läuft ein Programm durch, liefert aber ein inhaltlich falsches Ergebnis, handelt es sich um einen semantischen (logischen) Fehler — im Gegensatz zu Syntax- oder Laufzeitfehlern bricht das Programm dabei nicht ab.",
    source: "Kapitel 3, Debugging",
    free: false,
  },
  {
    id: "db-02",
    topic: "Exkurs: Debugging und Softwaretests",
    type: "mc",
    prompt: "Wozu dient ein Haltepunkt (Breakpoint) beim Debugging?",
    options: [
      "Er stoppt die Programmausführung an einer bestimmten Stelle, damit der aktuelle Programmzustand untersucht werden kann.",
      "Er beendet das Programm dauerhaft.",
      "Er entfernt automatisch fehlerhaften Code.",
      "Er ist nur bei rekursiven Methoden nutzbar.",
    ],
    correctIndex: 0,
    explanation:
      "Ein Breakpoint pausiert die Ausführung an einer festgelegten Stelle, sodass Variablenwerte und der Aufrufstapel an genau dieser Stelle untersucht werden können — meist kombiniert mit schrittweiser Ausführung.",
    source: "Kapitel 3, Debugging",
    free: false,
  },
  {
    id: "db-03",
    topic: "Exkurs: Debugging und Softwaretests",
    type: "mc",
    prompt: "Für eine Methode summeArray(int[] werte) sollen Tests geschrieben werden. Welcher der folgenden Testfälle ist ein klassischer Edge Case?",
    options: [
      "Ein Array mit den Werten {3, 7, 12}.",
      "Ein leeres Array (Länge 0).",
      "Ein Array mit den Werten {1, 2, 3, 4, 5}.",
      "Ein Array mit zufälligen, unterschiedlichen positiven Zahlen.",
    ],
    correctIndex: 1,
    explanation:
      "Ein leeres Array ist ein typischer Grenzfall (Edge Case): Er wird beim reinen Ausprobieren mit 'normalen' Beispielwerten leicht übersehen, obwohl gerade dort häufig Fehler wie ArrayIndexOutOfBoundsException auftreten.",
    source: "Kapitel 3, Debugging",
    free: false,
  },

  // ---------- Rekursion: Basisfall und Rekursionsschritt ----------
  {
    id: "rb-01",
    topic: "Rekursion: Basisfall und Rekursionsschritt",
    type: "mc",
    prompt: "Was passiert, wenn eine rekursive Methode keinen (oder einen nie erreichbaren) Basisfall besitzt?",
    options: [
      "Der Compiler lehnt die Methode automatisch ab.",
      "Die Methode ruft sich unendlich oft selbst auf, bis ein StackOverflowError auftritt.",
      "Java erkennt das automatisch und wandelt die Rekursion in eine Schleife um.",
      "Die Methode liefert automatisch den Wert 0 zurück.",
    ],
    correctIndex: 1,
    explanation:
      "Ohne erreichbaren Basisfall ruft sich die Methode immer weiter selbst auf; jeder Aufruf belegt einen eigenen Stack-Frame, bis der Aufrufstapel erschöpft ist und ein StackOverflowError auftritt.",
    source: "Kapitel 4, Rekursion",
    free: false,
  },
  {
    id: "rb-02",
    topic: "Rekursion: Basisfall und Rekursionsschritt",
    type: "numeric",
    prompt:
      "Die rekursive Methode summe(n) berechnet n + summe(n−1) für n>0 und liefert 0 für n=0. Wie oft wird die Methode bei der Berechnung von summe(9) insgesamt aufgerufen (inklusive des ursprünglichen Aufrufs)?",
    correctValue: 10,
    explanation:
      "summe(9) ruft summe(8), summe(7), ..., summe(0) auf — das sind zusammen mit dem ursprünglichen Aufruf 10 Aufrufe (für n = 9, 8, 7, ..., 0), gemäß T(n) = n+1.",
    source: "Kapitel 4, Rekursion",
    free: false,
  },
  {
    id: "rb-03",
    topic: "Rekursion: Basisfall und Rekursionsschritt",
    type: "mc",
    prompt: "Was speichert jeder einzelne Stack-Frame eines rekursiven Methodenaufrufs?",
    options: [
      "Nur den Rückgabewert der Methode.",
      "Die lokalen Variablen und Parameter genau dieses einen Methodenaufrufs.",
      "Den gesamten Quellcode der Methode.",
      "Alle Stack-Frames aller bisherigen Aufrufe zusammen in einem einzigen Speicherbereich.",
    ],
    correctIndex: 1,
    explanation:
      "Jeder Methodenaufruf — auch ein rekursiver — bekommt seinen eigenen Stack-Frame mit den lokalen Variablen und Parametern genau dieses Aufrufs; dadurch bleiben verschiedene rekursive Aufrufebenen sauber getrennt.",
    source: "Kapitel 4, Rekursion",
    free: false,
  },

  // ---------- Rekursion vs. Iteration ----------
  {
    id: "ri-01",
    topic: "Rekursion vs. Iteration",
    type: "mc",
    prompt: "Was bedeutet Endrekursion (Tail Recursion)?",
    options: [
      "Der rekursive Aufruf ist die letzte Aktion der Methode, danach muss nichts mehr berechnet werden.",
      "Die Methode ruft sich am Anfang des Methodenrumpfs selbst auf.",
      "Die Rekursion endet nach genau einem Aufruf.",
      "Es handelt sich um eine Methode ohne Basisfall.",
    ],
    correctIndex: 0,
    explanation:
      "Bei Endrekursion ist der rekursive Aufruf die letzte Aktion der Methode — es gibt nach der Rückkehr des rekursiven Aufrufs keine weitere Berechnung mehr in derselben Methode.",
    source: "Kapitel 4, Rekursion vs. Iteration",
    free: false,
  },
  {
    id: "ri-02",
    topic: "Rekursion vs. Iteration",
    type: "mc",
    prompt: "Optimiert der Java-Compiler Endrekursion automatisch weg (wie es manche funktionale Sprachen tun)?",
    options: [
      "Ja, endrekursive Methoden verbrauchen in Java keinen zusätzlichen Stack-Speicher.",
      "Nein, auch endrekursive Methoden verbrauchen in Java weiterhin Stack-Speicher proportional zur Rekursionstiefe.",
      "Nur bei Methoden ohne Parameter.",
      "Nur wenn die Methode als final deklariert ist.",
    ],
    correctIndex: 1,
    explanation:
      "Anders als manche funktionale Sprachen führt Java standardmäßig KEINE automatische Optimierung von Endrekursion durch — jeder rekursive Aufruf belegt weiterhin einen eigenen Stack-Frame.",
    source: "Kapitel 4, Rekursion vs. Iteration",
    free: false,
  },
  {
    id: "ri-03",
    topic: "Rekursion vs. Iteration",
    type: "mc",
    prompt: "Welcher Vorteil spricht typischerweise für eine iterative statt einer rekursiven Lösung?",
    options: [
      "Iterative Lösungen sind meist speichereffizienter, da keine zusätzlichen Stack-Frames benötigt werden.",
      "Iterative Lösungen sind für baumartige Probleme immer kürzer zu formulieren.",
      "Nur iterative Lösungen können in Java kompiliert werden.",
      "Rekursion ist in Java grundsätzlich nicht erlaubt.",
    ],
    correctIndex: 0,
    explanation:
      "Da eine Schleife ohne zusätzliche Stack-Frames auskommt, ist eine iterative Lösung meist speichereffizienter als die entsprechende rekursive Variante — bei natürlich rekursiven Strukturen wie Bäumen ist Rekursion dagegen oft übersichtlicher.",
    source: "Kapitel 4, Rekursion vs. Iteration",
    free: false,
  },

  // ---------- Anwendungsbeispiel: Rekursives Backtracking ----------
  {
    id: "bt-01",
    topic: "Anwendungsbeispiel: Rekursives Backtracking",
    type: "numeric",
    prompt:
      "Für ein Suchproblem gilt die Rekursionsgleichung T(n) = 2·T(n−1) + 1 mit T(0) = 1. Wie viele Aufrufe ergeben sich für T(4)?",
    correctValue: 31,
    explanation:
      "T(1) = 2·1+1 = 3, T(2) = 2·3+1 = 7, T(3) = 2·7+1 = 15, T(4) = 2·15+1 = 31 — das exponentielle Wachstum ist typisch für Backtracking-Verfahren, bei denen sich jede Teilaufgabe in zwei weitere aufspaltet.",
    source: "Kapitel 4, Backtracking",
    free: false,
  },
  {
    id: "bt-02",
    topic: "Anwendungsbeispiel: Rekursives Backtracking",
    type: "mc",
    prompt: "Was passiert beim Backtracking, wenn eine getroffene Teilentscheidung zu keiner gültigen Gesamtlösung führen kann?",
    options: [
      "Das Programm bricht mit einer Exception ab.",
      "Die Teilentscheidung wird rückgängig gemacht ('zurückverfolgt'), und die Methode probiert die nächste mögliche Entscheidung an derselben Stelle.",
      "Das gesamte Programm terminiert erfolgreich mit einer Teillösung.",
      "Die Rekursionstiefe wird automatisch verdoppelt.",
    ],
    correctIndex: 1,
    explanation:
      "Der Kern von Backtracking ist genau dieses 'Zurücknehmen': Führt eine Teilentscheidung erkennbar zu keiner gültigen Lösung, wird sie rückgängig gemacht und die nächste Alternative an derselben Stelle probiert.",
    source: "Kapitel 4, Backtracking",
    free: false,
  },
  {
    id: "bt-03",
    topic: "Anwendungsbeispiel: Rekursives Backtracking",
    type: "mc",
    prompt: "Welche Art von Problemen eignet sich typischerweise für Backtracking?",
    options: [
      "Probleme mit genau einer einzigen möglichen Lösung ohne Teilentscheidungen.",
      "Suchprobleme mit vielen möglichen Teilentscheidungen, bei denen ungültige Teillösungen frühzeitig erkannt werden können (z. B. Platzierungsrätsel, Permutationen).",
      "Ausschließlich rein numerische Berechnungen ohne Verzweigungen.",
      "Probleme, die sich nur mit while-Schleifen lösen lassen.",
    ],
    correctIndex: 1,
    explanation:
      "Backtracking eignet sich besonders für Suchprobleme mit vielen Teilentscheidungen, bei denen sich ungültige Teillösungen frühzeitig erkennen lassen — z. B. Platzierungsrätsel auf einem Gitter oder das systematische Erzeugen von Permutationen.",
    source: "Kapitel 4, Backtracking",
    free: false,
  },

  // ---------- Eindimensionale und mehrdimensionale Felder ----------
  {
    id: "fd-01",
    topic: "Eindimensionale und mehrdimensionale Felder",
    type: "numeric",
    prompt:
      "Ein rechteckiges zweidimensionales Feld mit 5 Spalten wird durchgehend linear gespeichert. Welchen linearen Index besitzt das Element aus Zeile 3, Spalte 2 (beide 0-indexiert)?",
    correctValue: 17,
    explanation: "index = zeile · spaltenanzahl + spalte = 3·5+2 = 17.",
    source: "Kapitel 5, Felder",
    free: false,
  },
  {
    id: "fd-02",
    topic: "Eindimensionale und mehrdimensionale Felder",
    type: "mc",
    prompt: "Kann die Länge eines Java-Arrays nach seiner Erzeugung nachträglich verändert werden?",
    options: [
      "Ja, mit der Methode array.resize(neueLaenge).",
      "Nein, die Länge wird bei der Erzeugung festgelegt und bleibt danach fest.",
      "Ja, aber nur bei Arrays primitiver Datentypen.",
      "Ja, automatisch sobald mehr Elemente zugewiesen werden.",
    ],
    correctIndex: 1,
    explanation:
      "Die Länge eines Arrays wird bei der Erzeugung (new) festgelegt und kann danach nicht mehr verändert werden — für eine 'wachsende' Struktur benötigt man z. B. eine Liste (siehe Kapitel 11).",
    source: "Kapitel 5, Felder",
    free: false,
  },
  {
    id: "fd-03",
    topic: "Eindimensionale und mehrdimensionale Felder",
    type: "mc",
    prompt: "Welchen Wert besitzen die Elemente eines neu erzeugten int-Arrays, bevor sie explizit belegt wurden?",
    options: ["null", "0", "Einen zufälligen Wert.", "Der Wert ist undefiniert und führt zu einem Compilerfehler."],
    correctIndex: 1,
    explanation:
      "Java initialisiert Array-Elemente automatisch mit dem Standardwert des jeweiligen Datentyps — bei int also 0 (bei Referenzdatentypen wäre es null).",
    source: "Kapitel 5, Felder",
    free: false,
  },

  // ---------- Referenzen, Kopien und der Stack/Heap-Unterschied ----------
  {
    id: "rk-01",
    topic: "Referenzen, Kopien und der Stack/Heap-Unterschied",
    type: "mc",
    prompt: "int[] a = {1, 2, 3}; int[] b = a; b[0] = 99; Welchen Wert hat a[0] danach?",
    options: ["1", "99", "0", "Ein Laufzeitfehler tritt auf."],
    correctIndex: 1,
    explanation:
      "b = a kopiert nur die Referenz, nicht die Elemente — a und b zeigen danach auf dasselbe Array-Objekt im Heap. Eine Änderung über b ist daher auch über a sichtbar: a[0] wird ebenfalls 99.",
    source: "Kapitel 5, Referenzen und Kopien",
    free: false,
  },
  {
    id: "rk-02",
    topic: "Referenzen, Kopien und der Stack/Heap-Unterschied",
    type: "mc",
    prompt: "Wie vergleicht der ==-Operator zwei Array-Variablen in Java?",
    options: [
      "Er vergleicht die Inhalte beider Arrays Element für Element.",
      "Er prüft nur, ob beide Variablen auf dasselbe Array-Objekt im Heap zeigen (Objektidentität).",
      "Er löst immer eine Exception aus.",
      "Er vergleicht nur die Länge beider Arrays.",
    ],
    correctIndex: 1,
    explanation:
      "Wie bei allen Referenzdatentypen prüft == bei Arrays nur, ob beide Variablen auf dasselbe Objekt zeigen — für einen inhaltlichen Vergleich braucht man eine eigene Schleife oder Arrays.equals.",
    source: "Kapitel 5, Referenzen und Kopien",
    free: false,
  },
  {
    id: "rk-03",
    topic: "Referenzen, Kopien und der Stack/Heap-Unterschied",
    type: "mc",
    prompt: "Wo werden Objekte (und damit auch Arrays) zur Laufzeit in Java abgelegt?",
    options: ["Im Stack", "Im Heap", "Direkt im Bytecode der Klasse", "In der .class-Datei"],
    correctIndex: 1,
    explanation:
      "Objekte und Arrays werden im Heap angelegt; die Variable selbst enthält nur eine Referenz (Adresse) auf diesen Speicherbereich, während primitive Werte direkt auf dem Stack liegen.",
    source: "Kapitel 5, Referenzen und Kopien",
    free: false,
  },

  // ---------- Die Klasse String und Zeichenketten ----------
  {
    id: "st-01",
    topic: "Die Klasse String und Zeichenketten",
    type: "mc",
    prompt: "String s = \"Berlin\"; s.concat(\" ist schön\"); Welchen Wert hat s danach?",
    options: ["\"Berlin ist schön\"", "\"Berlin\"", "null", "Ein Compilerfehler tritt auf."],
    correctIndex: 1,
    explanation:
      "String-Objekte sind unveränderlich (immutable) — concat erzeugt ein NEUES String-Objekt mit dem verketteten Ergebnis, lässt s selbst aber unverändert. Da das Ergebnis nicht zugewiesen wird, bleibt s weiterhin \"Berlin\".",
    source: "Kapitel 5, Strings",
    free: false,
  },
  {
    id: "st-02",
    topic: "Die Klasse String und Zeichenketten",
    type: "mc",
    prompt: "String a = \"Karlsruhe\"; String b = new String(\"Karlsruhe\"); Liefert a == b den Wert true?",
    options: [
      "Ja, da beide denselben Inhalt haben.",
      "Nein, da new String(...) bewusst ein neues Objekt außerhalb des String-Pools erzeugt, obwohl der Inhalt identisch ist.",
      "Nein, da == bei Strings immer false liefert.",
      "Das Ergebnis ist zufällig und wechselt bei jedem Programmstart.",
    ],
    correctIndex: 1,
    explanation:
      "a stammt aus dem String-Pool, während new String(...) explizit ein neues, eigenständiges Objekt erzeugt. a == b vergleicht nur Objektidentität und liefert daher false, obwohl a.equals(b) true wäre.",
    source: "Kapitel 5, Strings",
    free: false,
  },
  {
    id: "st-03",
    topic: "Die Klasse String und Zeichenketten",
    type: "mc",
    prompt: "Welche Methode sollte verwendet werden, um zwei Strings inhaltlich auf Gleichheit zu prüfen?",
    options: ["==", "equals()", "hashCode()", "toString()"],
    correctIndex: 1,
    explanation:
      "equals() vergleicht bei String-Objekten immer den tatsächlichen Zeicheninhalt, während == nur prüft, ob beide Variablen auf dasselbe Objekt zeigen.",
    source: "Kapitel 5, Strings",
    free: false,
  },

  // ---------- Klassen, Objekte und Attribute ----------
  {
    id: "ko-01",
    topic: "Klassen, Objekte und Attribute",
    type: "mc",
    prompt: "Wie lässt sich das Verhältnis zwischen einer Klasse und einem Objekt am besten beschreiben?",
    options: [
      "Eine Klasse ist ein Bauplan, ein Objekt eine konkrete Instanz dieses Bauplans.",
      "Eine Klasse und ein Objekt sind in Java dasselbe.",
      "Ein Objekt kann mehrere Klassen gleichzeitig sein.",
      "Eine Klasse existiert nur zur Laufzeit, ein Objekt nur zur Übersetzungszeit.",
    ],
    correctIndex: 0,
    explanation:
      "Die Klasse beschreibt als Bauplan, welche Attribute und Methoden Objekte dieser Klasse besitzen; ein Objekt ist eine konkrete, mit new erzeugte Instanz mit eigenen Attributwerten.",
    source: "Kapitel 6, OOP-Grundlagen",
    free: false,
  },
  {
    id: "ko-02",
    topic: "Klassen, Objekte und Attribute",
    type: "mc",
    prompt: "Zwei Objekte derselben Klasse Person besitzen jeweils ein Attribut alter. Teilen sich beide Objekte denselben Wert dieses Attributs?",
    options: [
      "Ja, Attribute sind für alle Objekte einer Klasse immer identisch.",
      "Nein, jedes Objekt besitzt seine eigene, unabhängige Kopie der Instanzattribute.",
      "Nur, wenn beide Objekte gleichzeitig erzeugt wurden.",
      "Nur bei Attributen vom Typ int.",
    ],
    correctIndex: 1,
    explanation:
      "Instanzattribute (ohne static) gehören jeweils zu einem konkreten Objekt — jedes Objekt besitzt eine eigene, unabhängige Kopie, unabhängig von den Werten anderer Objekte derselben Klasse.",
    source: "Kapitel 6, OOP-Grundlagen",
    free: false,
  },
  {
    id: "ko-03",
    topic: "Klassen, Objekte und Attribute",
    type: "mc",
    prompt: "Was bewirkt das Schlüsselwort new bei new Person()?",
    options: [
      "Es deklariert lediglich eine neue Variable vom Typ Person.",
      "Es erzeugt (instanziiert) ein neues Objekt der Klasse Person im Heap und ruft den passenden Konstruktor auf.",
      "Es löscht alle bisherigen Objekte der Klasse Person.",
      "Es kompiliert die Klasse Person neu.",
    ],
    correctIndex: 1,
    explanation:
      "new erzeugt ein neues Objekt im Heap-Speicher, ruft den passenden Konstruktor der Klasse auf und liefert eine Referenz auf das neu erzeugte Objekt zurück.",
    source: "Kapitel 6, OOP-Grundlagen",
    free: false,
  },

  // ---------- Instanz- vs. Klassenvariablen und -methoden ----------
  {
    id: "iv-01",
    topic: "Instanz- vs. Klassenvariablen und -methoden",
    type: "mc",
    prompt: "Wofür steht der Modifizierer static bei einer Variable?",
    options: [
      "Die Variable gehört zur Klasse selbst und existiert nur einmal, unabhängig von der Anzahl der Objekte.",
      "Die Variable kann nach der Deklaration nicht mehr verändert werden.",
      "Die Variable ist automatisch privat.",
      "Die Variable existiert nur innerhalb einer einzigen Methode.",
    ],
    correctIndex: 0,
    explanation:
      "static kennzeichnet eine Klassenvariable: Es existiert nur EINE gemeinsame Kopie, die sich alle Instanzen der Klasse teilen — im Gegensatz zu Instanzvariablen, von denen jedes Objekt eine eigene Kopie besitzt.",
    source: "Kapitel 6, Instanz- und Klassenvariablen",
    free: false,
  },
  {
    id: "iv-02",
    topic: "Instanz- vs. Klassenvariablen und -methoden",
    type: "numeric",
    prompt:
      "Eine Klasse Ticket besitzt eine private static int anzahl-Variable, die im Konstruktor um 1 erhöht wird. Nach der Erzeugung von 7 Ticket-Objekten: welchen Wert hat anzahl?",
    correctValue: 7,
    explanation:
      "Da anzahl eine Klassenvariable (static) ist, existiert nur eine gemeinsame Kopie, die bei jedem der 7 Konstruktoraufrufe um 1 erhöht wird — am Ende steht sie bei 7.",
    source: "Kapitel 6, Instanz- und Klassenvariablen",
    free: false,
  },
  {
    id: "iv-03",
    topic: "Instanz- vs. Klassenvariablen und -methoden",
    type: "mc",
    prompt: "Darf eine static-Methode direkt auf eine (nicht-statische) Instanzvariable derselben Klasse zugreifen?",
    options: [
      "Ja, ohne Einschränkung.",
      "Nein, da eine static-Methode ohne Bezug zu einem konkreten Objekt aufgerufen werden kann und es daher keine 'zugehörige' Instanz gäbe.",
      "Ja, aber nur wenn die Instanzvariable public ist.",
      "Nein, static-Methoden dürfen überhaupt keine Variablen verwenden.",
    ],
    correctIndex: 1,
    explanation:
      "Eine Klassenmethode kann aufgerufen werden, ohne dass überhaupt ein Objekt existiert — sie hat daher keinen Bezug zu einer konkreten Instanz und darf folglich nicht direkt auf Instanzvariablen zugreifen.",
    source: "Kapitel 6, Instanz- und Klassenvariablen",
    free: false,
  },

  // ---------- Konstruktoren und Objekterzeugung ----------
  {
    id: "kn-01",
    topic: "Konstruktoren und Objekterzeugung",
    type: "mc",
    prompt: "Welche Aussage über einen Konstruktor in Java trifft zu?",
    options: [
      "Ein Konstruktor besitzt immer denselben Namen wie die Klasse und keinen Rückgabetyp (auch nicht void).",
      "Ein Konstruktor muss immer void als Rückgabetyp besitzen.",
      "Eine Klasse darf höchstens einen Konstruktor definieren.",
      "Konstruktoren müssen zwingend parameterlos sein.",
    ],
    correctIndex: 0,
    explanation:
      "Ein Konstruktor trägt zwingend den Namen der Klasse und besitzt keinen Rückgabetyp — auch kein void. Eine Klasse kann zudem, ähnlich wie bei Methoden, mehrere überladene Konstruktoren definieren.",
    source: "Kapitel 7, Konstruktoren",
    free: false,
  },
  {
    id: "kn-02",
    topic: "Konstruktoren und Objekterzeugung",
    type: "mc",
    prompt: "Wann stellt Java automatisch einen parameterlosen Standardkonstruktor bereit?",
    options: [
      "Immer, egal wie viele eigene Konstruktoren eine Klasse besitzt.",
      "Nur, wenn die Klasse selbst überhaupt keinen eigenen Konstruktor definiert.",
      "Nur bei abstrakten Klassen.",
      "Nur, wenn die Klasse das Schlüsselwort static trägt.",
    ],
    correctIndex: 1,
    explanation:
      "Definiert eine Klasse mindestens einen eigenen Konstruktor, entfällt der automatisch bereitgestellte Standardkonstruktor — er existiert nur, solange die Klasse selbst KEINEN eigenen Konstruktor definiert.",
    source: "Kapitel 7, Konstruktoren",
    free: false,
  },
  {
    id: "kn-03",
    topic: "Konstruktoren und Objekterzeugung",
    type: "mc",
    prompt: "An welcher Stelle im Konstruktor muss ein Aufruf von this(...) stehen, falls er verwendet wird?",
    options: [
      "An beliebiger Stelle im Konstruktor.",
      "Zwingend als allererste Anweisung des Konstruktors.",
      "Zwingend als letzte Anweisung des Konstruktors.",
      "this(...) darf innerhalb eines Konstruktors gar nicht verwendet werden.",
    ],
    correctIndex: 1,
    explanation:
      "Ein Aufruf this(...), der einen anderen Konstruktor derselben Klasse aufruft, muss zwingend die erste Anweisung im Konstruktor sein.",
    source: "Kapitel 7, Konstruktoren",
    free: false,
  },

  // ---------- Kapselung, Sichtbarkeit und this ----------
  {
    id: "ka-01",
    topic: "Kapselung, Sichtbarkeit und this",
    type: "mc",
    prompt: "Was ist der zentrale Vorteil der Kapselung (private Attribute + öffentliche Getter/Setter)?",
    options: [
      "Der Programmcode wird dadurch automatisch schneller ausgeführt.",
      "Die interne Umsetzung einer Klasse kann sich ändern, ohne dass Code außerhalb der Klasse angepasst werden muss, solange die öffentliche Schnittstelle gleich bleibt.",
      "Kapselung verhindert jegliche Fehler zur Laufzeit.",
      "Kapselung ist in Java verpflichtend und kann nicht umgangen werden.",
    ],
    correctIndex: 1,
    explanation:
      "Kapselung entkoppelt die interne Umsetzung (Attribute) von der öffentlichen Schnittstelle (Methoden) — solange diese Schnittstelle stabil bleibt, kann sich die interne Umsetzung ändern, ohne Code außerhalb der Klasse zu beeinflussen.",
    source: "Kapitel 7, Kapselung",
    free: false,
  },
  {
    id: "ka-02",
    topic: "Kapselung, Sichtbarkeit und this",
    type: "mc",
    prompt: "Ein Setter besitzt einen Parameter namens bestand, der genauso heißt wie das gleichnamige Attribut. Wie spricht man innerhalb des Setters gezielt das Attribut (nicht den Parameter) an?",
    options: ["bestand", "this.bestand", "super.bestand", "static.bestand"],
    correctIndex: 1,
    explanation:
      "Bei einer Namenskollision zwischen Parameter und Attribut spricht this.bestand eindeutig das Attribut an, während bestand ohne this den Parameter meint.",
    source: "Kapitel 7, Kapselung",
    free: false,
  },
  {
    id: "ka-03",
    topic: "Kapselung, Sichtbarkeit und this",
    type: "mc",
    prompt: "Wozu dient ein Setter mit einer zusätzlichen Prüfung wie 'if (wert >= 0) { this.wert = wert; }'?",
    options: [
      "Um zu verhindern, dass von außen ungültige Werte (hier: negative Werte) gesetzt werden können.",
      "Um die Ausführungsgeschwindigkeit zu erhöhen.",
      "Um das Attribut vollständig unveränderlich zu machen.",
      "Um automatisch einen Getter zu erzeugen.",
    ],
    correctIndex: 0,
    explanation:
      "Die Prüfung im Setter verhindert kontrolliert, dass ungültige Werte (hier negative Werte) überhaupt erst in das Attribut gelangen — genau das ist der praktische Nutzen der Kapselung.",
    source: "Kapitel 7, Kapselung",
    free: false,
  },

  // ---------- UML-Klassendiagramme ----------
  {
    id: "ul-01",
    topic: "UML-Klassendiagramme",
    type: "mc",
    prompt: "Welches Symbol kennzeichnet in einem UML-Klassendiagramm ein privates Attribut?",
    options: ["+", "−", "#", "~"],
    correctIndex: 1,
    explanation: "Ein Minuszeichen (−) kennzeichnet in UML-Klassendiagrammen die Sichtbarkeit private, ein Pluszeichen (+) steht für public.",
    source: "Kapitel 7, UML",
    free: false,
  },
  {
    id: "ul-02",
    topic: "UML-Klassendiagramme",
    type: "mc",
    prompt: "Wie werden klassenbezogene (static) Attribute oder Methoden in einem UML-Klassendiagramm dargestellt?",
    options: ["Kursiv geschrieben", "Unterstrichen", "In Klammern gesetzt", "In roter Schrift"],
    correctIndex: 1,
    explanation: "Static-Elemente werden in UML-Klassendiagrammen durch Unterstreichen gekennzeichnet.",
    source: "Kapitel 7, UML",
    free: false,
  },
  {
    id: "ul-03",
    topic: "UML-Klassendiagramme",
    type: "mc",
    prompt: "Welche drei Bereiche enthält ein UML-Klassenrechteck üblicherweise, von oben nach unten?",
    options: [
      "Methoden, Attribute, Klassenname",
      "Klassenname, Attribute, Methoden",
      "Attribute, Klassenname, Methoden",
      "Nur Klassenname und Attribute, keine Methoden.",
    ],
    correctIndex: 1,
    explanation: "Ein UML-Klassenrechteck gliedert sich von oben nach unten in Klassenname, Attribute und Methoden.",
    source: "Kapitel 7, UML",
    free: false,
  },

  // ---------- Vererbungshierarchien und super ----------
  {
    id: "vh-01",
    topic: "Vererbungshierarchien und super",
    type: "mc",
    prompt: "Von wie vielen Klassen kann eine Klasse in Java direkt erben (extends)?",
    options: ["Beliebig vielen", "Höchstens zwei", "Genau einer (Einfachvererbung)", "Keiner"],
    correctIndex: 2,
    explanation: "Java erlaubt nur Einfachvererbung: Eine Klasse kann direkt von genau einer Oberklasse erben.",
    source: "Kapitel 8, Vererbung",
    free: false,
  },
  {
    id: "vh-02",
    topic: "Vererbungshierarchien und super",
    type: "mc",
    prompt: "Was passiert, wenn der Konstruktor einer Unterklasse keinen expliziten super(...)-Aufruf enthält?",
    options: [
      "Ein Compilerfehler tritt zwingend auf.",
      "Java fügt automatisch einen impliziten Aufruf des parameterlosen Oberklassen-Konstruktors ein.",
      "Die Oberklasse wird dann gar nicht initialisiert.",
      "Es wird automatisch this() statt super() aufgerufen.",
    ],
    correctIndex: 1,
    explanation:
      "Fehlt ein expliziter super(...)-Aufruf, fügt Java automatisch einen impliziten Aufruf des parameterlosen Konstruktors der Oberklasse ein — existiert dieser nicht, entsteht allerdings ein Compilerfehler.",
    source: "Kapitel 8, Vererbung",
    free: false,
  },
  {
    id: "vh-03",
    topic: "Vererbungshierarchien und super",
    type: "mc",
    prompt: "Wozu dient super.methode() innerhalb einer Unterklasse, die dieselbe Methode überschrieben hat?",
    options: [
      "Es ruft gezielt die ursprüngliche Version der Methode aus der Oberklasse auf.",
      "Es löscht die überschriebene Methode.",
      "Es erzeugt ein neues Objekt der Oberklasse.",
      "Es ist gleichbedeutend mit this.methode().",
    ],
    correctIndex: 0,
    explanation:
      "super.methode() ruft gezielt die Version der Methode aus der Oberklasse auf, selbst wenn die Unterklasse dieselbe Methode überschrieben hat.",
    source: "Kapitel 8, Vererbung",
    free: false,
  },

  // ---------- Überschreiben von Methoden ----------
  {
    id: "ue-01",
    topic: "Überschreiben von Methoden",
    type: "mc",
    prompt: "Welche Bedingung muss für ein gültiges Überschreiben (Overriding) einer Methode erfüllt sein?",
    options: [
      "Nur der Methodenname muss übereinstimmen, Parameter dürfen abweichen.",
      "Name, Parametertypen und -reihenfolge müssen exakt mit der Oberklassenmethode übereinstimmen, und der Rückgabetyp muss identisch (oder ein Untertyp) sein.",
      "Der Rückgabetyp darf beliebig sein, solange der Name übereinstimmt.",
      "Overriding ist nur bei statischen Methoden möglich.",
    ],
    correctIndex: 1,
    explanation:
      "Overriding verlangt eine exakt übereinstimmende Signatur (Name, Parametertypen, -reihenfolge) sowie einen identischen oder kovarianten (Untertyp-)Rückgabetyp — sonst entsteht eine überladene statt überschriebene Methode.",
    source: "Kapitel 8, Überschreiben",
    free: false,
  },
  {
    id: "ue-02",
    topic: "Überschreiben von Methoden",
    type: "mc",
    prompt: "Wozu dient die Annotation @Override vor einer überschreibenden Methode?",
    options: [
      "Sie ist zwingend erforderlich, sonst kompiliert der Code nicht.",
      "Sie ist keine Pflicht, lässt den Compiler aber einen Tippfehler in der Signatur erkennen, der sonst zu einer ungewollt überladenen statt überschriebenen Methode führen würde.",
      "Sie verhindert, dass die Methode jemals wieder überschrieben werden kann.",
      "Sie ändert die Sichtbarkeit der Methode automatisch auf public.",
    ],
    correctIndex: 1,
    explanation:
      "@Override ist optional, aber sehr nützlich: Stimmt die Signatur NICHT exakt mit einer Methode der Oberklasse überein, meldet der Compiler dank @Override einen Fehler, statt stillschweigend eine neue, überladene Methode zu erzeugen.",
    source: "Kapitel 8, Überschreiben",
    free: false,
  },
  {
    id: "ue-03",
    topic: "Überschreiben von Methoden",
    type: "mc",
    prompt: "Was unterscheidet Overriding grundsätzlich von Overloading?",
    options: [
      "Overriding findet zwischen Ober- und Unterklasse mit identischer Signatur statt, Overloading innerhalb derselben Klasse mit unterschiedlicher Signatur.",
      "Es gibt keinen Unterschied, beide Begriffe meinen dasselbe.",
      "Overloading ist nur bei Konstruktoren möglich, Overriding nur bei normalen Methoden.",
      "Overriding erfordert immer das Schlüsselwort static.",
    ],
    correctIndex: 0,
    explanation:
      "Overriding ersetzt in einer Unterklasse eine geerbte Methode MIT identischer Signatur, während Overloading mehrere Methoden mit demselben Namen aber UNTERSCHIEDLICHER Signatur innerhalb derselben Klasse anbietet.",
    source: "Kapitel 8, Überschreiben",
    free: false,
  },

  // ---------- Polymorphie und dynamisches Binden ----------
  {
    id: "pd-01",
    topic: "Polymorphie und dynamisches Binden",
    type: "mc",
    prompt: "Fahrzeug f = new Motorrad(); Ruft man f.gibLaut() auf, und Motorrad überschreibt gibLaut(), welche Version wird ausgeführt?",
    options: [
      "Die Version aus Fahrzeug, da f als Fahrzeug deklariert ist.",
      "Die überschriebene Version aus Motorrad, da der tatsächliche Objekttyp zur Laufzeit entscheidet (dynamisches Binden).",
      "Beide Versionen werden nacheinander ausgeführt.",
      "Es tritt ein Compilerfehler auf.",
    ],
    correctIndex: 1,
    explanation:
      "Beim dynamischen Binden entscheidet zur Laufzeit der tatsächliche Typ des referenzierten Objekts (hier Motorrad), nicht der deklarierte Variablentyp (hier Fahrzeug) — die überschriebene Version wird ausgeführt.",
    source: "Kapitel 9, Polymorphie",
    free: false,
  },
  {
    id: "pd-02",
    topic: "Polymorphie und dynamisches Binden",
    type: "mc",
    prompt: "Warum sollte ein Downcast (Cast von Ober- in Unterklasse) mit instanceof abgesichert werden?",
    options: [
      "Weil instanceof den Cast automatisch beschleunigt.",
      "Weil ein Downcast auf ein Objekt des falschen tatsächlichen Typs zu einer ClassCastException zur Laufzeit führt.",
      "Weil Downcasts in Java grundsätzlich verboten sind.",
      "instanceof ist nur bei primitiven Datentypen nötig.",
    ],
    correctIndex: 1,
    explanation:
      "Ohne vorherige instanceof-Prüfung kann ein Downcast auf ein Objekt eines anderen tatsächlichen Typs zur Laufzeit eine ClassCastException auslösen — die Prüfung schützt davor.",
    source: "Kapitel 9, Polymorphie",
    free: false,
  },
  {
    id: "pd-03",
    topic: "Polymorphie und dynamisches Binden",
    type: "mc",
    prompt: "Welchen praktischen Vorteil bietet Polymorphie beim Umgang mit einem Array vom Oberklassentyp, das Objekte verschiedener Unterklassen enthält?",
    options: [
      "Alle Objekte können einheitlich über eine Schleife behandelt werden, ohne vorher den konkreten Unterklassentyp jedes Objekts zu kennen.",
      "Das Array kann dadurch beliebig seine Länge ändern.",
      "Alle Objekte im Array werden automatisch zu Instanzen derselben Unterklasse.",
      "Es entfällt die Notwendigkeit, überhaupt Methoden zu definieren.",
    ],
    correctIndex: 0,
    explanation:
      "Dank Polymorphie und dynamischem Binden lassen sich Objekte unterschiedlicher Unterklassen einheitlich über den Oberklassentyp behandeln — jedes Objekt reagiert dabei automatisch mit seiner eigenen, überschriebenen Methodenversion.",
    source: "Kapitel 9, Polymorphie",
    free: false,
  },

  // ---------- Abstrakte Klassen und Interfaces ----------
  {
    id: "ai-01",
    topic: "Abstrakte Klassen und Interfaces",
    type: "mc",
    prompt: "Kann eine als abstract deklarierte Klasse direkt mit new instanziiert werden?",
    options: [
      "Ja, ohne Einschränkung.",
      "Nein, abstrakte Klassen können nicht direkt instanziiert werden.",
      "Ja, aber nur wenn sie keine abstrakten Methoden enthält.",
      "Ja, aber nur innerhalb derselben Datei.",
    ],
    correctIndex: 1,
    explanation:
      "Eine abstrakte Klasse kann grundsätzlich nicht direkt instanziiert werden — es muss stattdessen eine konkrete Unterklasse erzeugt werden, die alle abstrakten Methoden implementiert.",
    source: "Kapitel 9, Abstrakte Klassen und Interfaces",
    free: false,
  },
  {
    id: "ai-02",
    topic: "Abstrakte Klassen und Interfaces",
    type: "mc",
    prompt: "Wie viele Interfaces darf eine Klasse in Java gleichzeitig implementieren?",
    options: [
      "Höchstens eines, wie bei extends.",
      "Mehrere gleichzeitig, im Gegensatz zur Einfachvererbung mit extends.",
      "Keine, wenn die Klasse bereits von einer anderen Klasse erbt.",
      "Interfaces können in Java nicht implementiert werden.",
    ],
    correctIndex: 1,
    explanation:
      "Anders als bei der Einfachvererbung über extends kann eine Klasse mit implements mehrere Interfaces gleichzeitig implementieren.",
    source: "Kapitel 9, Abstrakte Klassen und Interfaces",
    free: false,
  },
  {
    id: "ai-03",
    topic: "Abstrakte Klassen und Interfaces",
    type: "mc",
    prompt: "Eine Klasse Kreis erbt von der abstrakten Klasse Form (mit abstrakter Methode flaecheninhalt()) und implementiert zusätzlich das Interface Zeichenbar (mit Methode zeichne()). Was ist die Folge, wenn Kreis eine der beiden Methoden nicht implementiert?",
    options: [
      "Kein Problem, Kreis kann trotzdem instanziiert werden.",
      "Ein Compilerfehler, da eine konkrete Klasse alle geerbten abstrakten Methoden und alle Interface-Methoden implementieren muss.",
      "Java ergänzt automatisch eine leere Standardimplementierung.",
      "Nur die abstrakte Klasse muss vollständig implementiert werden, das Interface ist optional.",
    ],
    correctIndex: 1,
    explanation:
      "Eine konkrete (nicht-abstrakte) Klasse muss ALLE geerbten abstrakten Methoden sowie alle Methoden der implementierten Interfaces bereitstellen — fehlt eine, meldet der Compiler einen Fehler.",
    source: "Kapitel 9, Abstrakte Klassen und Interfaces",
    free: false,
  },

  // ---------- Hüllklassen (Wrapper) und Autoboxing ----------
  {
    id: "hw-01",
    topic: "Hüllklassen (Wrapper) und Autoboxing",
    type: "mc",
    prompt: "Wozu dienen Hüllklassen (Wrapper-Klassen) wie Integer oder Double?",
    options: [
      "Sie ersetzen primitive Datentypen vollständig und machen sie überflüssig.",
      "Sie verpacken einen primitiven Wert in ein vollwertiges Objekt, das überall dort benötigt wird, wo ein Referenzdatentyp erforderlich ist.",
      "Sie dienen ausschließlich der Fehlerbehandlung.",
      "Sie werden nur für boolean-Werte benötigt.",
    ],
    correctIndex: 1,
    explanation:
      "Hüllklassen verpacken einen primitiven Wert in ein Objekt und werden überall dort gebraucht, wo Java einen Referenzdatentyp verlangt — etwa in vielen Sammlungsklassen, die keine primitiven Typen direkt speichern können.",
    source: "Kapitel 9, Hüllklassen",
    free: false,
  },
  {
    id: "hw-02",
    topic: "Hüllklassen (Wrapper) und Autoboxing",
    type: "mc",
    prompt: "Integer a = -50; Integer b = -50; Integer c = 130; Integer d = 130; Welcher Vergleich liefert garantiert true?",
    options: ["c == d", "a == b", "Beide Vergleiche liefern garantiert true.", "Keiner der beiden Vergleiche liefert garantiert true."],
    correctIndex: 1,
    explanation:
      "−50 liegt innerhalb des JDK-internen Integer-Cache (üblicherweise −128 bis 127), sodass a und b dasselbe wiederverwendete Objekt referenzieren und a == b true liefert. 130 liegt außerhalb des Caches, wodurch c und d zwei unterschiedliche Objekte sind und c == d false liefert.",
    source: "Kapitel 9, Hüllklassen",
    free: false,
  },
  {
    id: "hw-03",
    topic: "Hüllklassen (Wrapper) und Autoboxing",
    type: "mc",
    prompt: "Integer wert = null; int x = wert; Was passiert bei dieser Zuweisung zur Laufzeit?",
    options: [
      "x erhält automatisch den Wert 0.",
      "Es tritt eine NullPointerException auf, da beim Unboxing von null kein primitiver Wert extrahiert werden kann.",
      "Ein Compilerfehler tritt auf, die Zeile lässt sich nicht übersetzen.",
      "x bleibt undefiniert, ohne dass ein Fehler auftritt.",
    ],
    correctIndex: 1,
    explanation:
      "Beim Unboxing versucht Java, aus dem Integer-Objekt den zugrunde liegenden int-Wert zu extrahieren — ist die Referenz null, gibt es keinen Wert zu extrahieren, und es entsteht eine NullPointerException zur Laufzeit.",
    source: "Kapitel 9, Hüllklassen",
    free: false,
  },

  // ---------- Exceptions: try, catch und finally ----------
  {
    id: "ex-01",
    topic: "Exceptions: try, catch und finally",
    type: "mc",
    prompt: "Wird ein finally-Block auch dann ausgeführt, wenn der try-Block mit return verlassen wird?",
    options: [
      "Nein, finally wird nur bei einer aufgetretenen Exception ausgeführt.",
      "Ja, finally wird immer ausgeführt, unabhängig davon, ob eine Exception auftrat oder der Block mit return verlassen wurde.",
      "Nur, wenn kein catch-Block vorhanden ist.",
      "Nur, wenn die Methode void als Rückgabetyp besitzt.",
    ],
    correctIndex: 1,
    explanation:
      "Ein finally-Block wird in JEDEM Fall ausgeführt — egal ob eine Exception auftrat, keine auftrat, oder der try-/catch-Block per return verlassen wurde.",
    source: "Kapitel 10, Ausnahmebehandlung",
    free: false,
  },
  {
    id: "ex-02",
    topic: "Exceptions: try, catch und finally",
    type: "mc",
    prompt: "Welche Exception wird bei einer Ganzzahldivision durch 0 (z. B. 5 / 0 mit int-Operanden) in Java ausgelöst?",
    options: ["NullPointerException", "ArithmeticException", "ClassCastException", "ArrayIndexOutOfBoundsException"],
    correctIndex: 1,
    explanation:
      "Eine Ganzzahldivision durch 0 löst in Java eine ArithmeticException aus (bei Gleitkommazahlen wie 5.0/0.0 entsteht dagegen kein Fehler, sondern der Wert Infinity).",
    source: "Kapitel 10, Ausnahmebehandlung",
    free: false,
  },
  {
    id: "ex-03",
    topic: "Exceptions: try, catch und finally",
    type: "mc",
    prompt: "Ein try-Block wird von zwei catch-Blöcken gefolgt: zuerst catch (ArithmeticException e), dann catch (Exception e). Welcher catch-Block behandelt eine aufgetretene ArithmeticException?",
    options: [
      "Immer der zweite (allgemeinere) catch-Block.",
      "Der erste passende catch-Block in der Reihenfolge von oben nach unten — hier also der erste, spezifischere Block.",
      "Beide catch-Blöcke werden nacheinander ausgeführt.",
      "Keiner, da die Reihenfolge falsch ist und ein Compilerfehler auftritt.",
    ],
    correctIndex: 1,
    explanation:
      "Java prüft catch-Blöcke von oben nach unten und führt den ERSTEN passenden aus — hier passt bereits der spezifischere ArithmeticException-Block, der zweite wird gar nicht mehr geprüft.",
    source: "Kapitel 10, Ausnahmebehandlung",
    free: false,
  },

  // ---------- Eigene Exception-Klassen und die Exception-Hierarchie ----------
  {
    id: "ee-01",
    topic: "Eigene Exception-Klassen und die Exception-Hierarchie",
    type: "mc",
    prompt: "Von welcher gemeinsamen Klasse erben letztlich alle Exceptions und Errors in Java?",
    options: ["Object direkt", "Throwable", "RuntimeException", "Exception"],
    correctIndex: 1,
    explanation:
      "Throwable ist die gemeinsame Basisklasse, von der sich sowohl Error (schwerwiegende Systemfehler) als auch Exception (inklusive aller RuntimeExceptions) ableiten.",
    source: "Kapitel 10, Exception-Hierarchie",
    free: false,
  },
  {
    id: "ee-02",
    topic: "Eigene Exception-Klassen und die Exception-Hierarchie",
    type: "mc",
    prompt: "Was unterscheidet eine checked von einer unchecked Exception?",
    options: [
      "Checked Exceptions müssen vom Compiler zwingend behandelt oder weitergeleitet werden, unchecked Exceptions (Unterklassen von RuntimeException) nicht.",
      "Unchecked Exceptions können nur zur Übersetzungszeit auftreten.",
      "Es gibt in Java keinen Unterschied zwischen beiden Arten.",
      "Checked Exceptions dürfen nicht in einem catch-Block behandelt werden.",
    ],
    correctIndex: 0,
    explanation:
      "Checked Exceptions (Unterklassen von Exception, aber nicht von RuntimeException) müssen laut Compiler behandelt oder per throws weitergeleitet werden — bei unchecked Exceptions (Unterklassen von RuntimeException) verlangt der Compiler das nicht.",
    source: "Kapitel 10, Exception-Hierarchie",
    free: false,
  },
  {
    id: "ee-03",
    topic: "Eigene Exception-Klassen und die Exception-Hierarchie",
    type: "mc",
    prompt: "Wie erstellt man eine eigene, ungeprüfte (unchecked) Exception-Klasse in Java?",
    options: [
      "Indem man eine neue Klasse von RuntimeException erben lässt.",
      "Indem man eine neue Klasse von Object erben lässt.",
      "Eigene Exception-Klassen sind in Java nicht erlaubt.",
      "Indem man das Schlüsselwort static vor die Klasse schreibt.",
    ],
    correctIndex: 0,
    explanation:
      "Eine eigene ungeprüfte Exception erbt von RuntimeException (für eine geprüfte Exception würde man stattdessen von Exception erben).",
    source: "Kapitel 10, Exception-Hierarchie",
    free: false,
  },

  // ---------- Einfach und doppelt verkettete Listen ----------
  {
    id: "li-01",
    topic: "Einfach und doppelt verkettete Listen",
    type: "mc",
    prompt: "Warum gibt es bei einer einfach verketteten Liste keinen direkten, indexbasierten Zugriff auf ein Element wie bei einem Array?",
    options: [
      "Weil jeder Knoten nur eine Referenz auf den nächsten Knoten kennt und man daher ab dem head Schritt für Schritt weitergehen muss.",
      "Weil verkettete Listen in Java grundsätzlich unveränderlich sind.",
      "Weil verkettete Listen keine Werte speichern können, nur Referenzen.",
      "Weil jeder Knoten die gesamte Liste kopiert.",
    ],
    correctIndex: 0,
    explanation:
      "Da jeder Knoten nur seinen direkten Nachfolger kennt, muss man ab dem head sequentiell weitergehen, um einen bestimmten Knoten zu erreichen — anders als bei einem Array gibt es keinen direkten Sprung zu einem beliebigen Index.",
    source: "Kapitel 11, Listen",
    free: false,
  },
  {
    id: "li-02",
    topic: "Einfach und doppelt verkettete Listen",
    type: "mc",
    prompt: "Was besitzt ein Knoten einer doppelt verketteten Liste zusätzlich gegenüber einem Knoten einer einfach verketteten Liste?",
    options: [
      "Eine zusätzliche Referenz auf den vorherigen Knoten.",
      "Einen zusätzlichen Wert vom Typ int.",
      "Eine zusätzliche Referenz auf den head der Liste.",
      "Nichts, beide Knotentypen sind identisch.",
    ],
    correctIndex: 0,
    explanation:
      "Ein Knoten einer doppelt verketteten Liste besitzt zusätzlich zur Referenz auf den nächsten Knoten auch eine Referenz auf den VORHERIGEN Knoten, wodurch sich die Liste auch rückwärts durchlaufen lässt.",
    source: "Kapitel 11, Listen",
    free: false,
  },
  {
    id: "li-03",
    topic: "Einfach und doppelt verkettete Listen",
    type: "mc",
    prompt: "Welcher praktische Vorteil spricht für eine verkettete Liste gegenüber einem Array, wenn häufig Elemente in der Mitte eingefügt werden?",
    options: [
      "Ein neuer Knoten lässt sich einfügen, ohne nachfolgende Elemente verschieben zu müssen, was bei einem Array nötig wäre.",
      "Verkettete Listen benötigen grundsätzlich weniger Speicher als Arrays.",
      "Verkettete Listen erlauben direkten indexbasierten Zugriff, Arrays nicht.",
      "Es gibt keinen Vorteil, Arrays sind in jeder Hinsicht überlegen.",
    ],
    correctIndex: 0,
    explanation:
      "Bei einer verketteten Liste genügt es, die Referenzen der umliegenden Knoten anzupassen — bei einem Array müssten dagegen alle nachfolgenden Elemente um eine Position verschoben werden.",
    source: "Kapitel 11, Listen",
    free: false,
  },

  // ---------- Bäume: Aufbau und Traversierung ----------
  {
    id: "ba-01",
    topic: "Bäume: Aufbau und Traversierung",
    type: "numeric",
    prompt: "Wie viele Knoten besitzt ein vollständiger Binärbaum der Höhe 4 maximal?",
    correctValue: 31,
    explanation: "N_max(h) = 2^(h+1) − 1 = 2^5 − 1 = 32 − 1 = 31.",
    source: "Kapitel 11, Bäume",
    free: false,
  },
  {
    id: "ba-02",
    topic: "Bäume: Aufbau und Traversierung",
    type: "mc",
    prompt: "Was zeichnet einen Binärbaum aus?",
    options: [
      "Jeder Knoten besitzt höchstens zwei Kinder (links und rechts).",
      "Jeder Knoten besitzt genau zwei Kinder, ohne Ausnahme.",
      "Ein Binärbaum besitzt niemals Blätter.",
      "Alle Knoten eines Binärbaums müssen denselben Wert besitzen.",
    ],
    correctIndex: 0,
    explanation:
      "In einem Binärbaum besitzt jeder Knoten HÖCHSTENS zwei Kinder (links und rechts) — ein Knoten kann auch nur ein Kind oder gar keins (dann ist er ein Blatt) besitzen.",
    source: "Kapitel 11, Bäume",
    free: false,
  },
  {
    id: "ba-03",
    topic: "Bäume: Aufbau und Traversierung",
    type: "mc",
    prompt: "Bei der Inorder-Traversierung eines Binärbaum-Knotens: in welcher Reihenfolge werden linker Teilbaum, der Knoten selbst und rechter Teilbaum besucht?",
    options: [
      "Knoten, linker Teilbaum, rechter Teilbaum",
      "Linker Teilbaum, Knoten, rechter Teilbaum",
      "Rechter Teilbaum, Knoten, linker Teilbaum",
      "Linker Teilbaum, rechter Teilbaum, Knoten",
    ],
    correctIndex: 1,
    explanation:
      "Inorder besucht zuerst rekursiv den linken Teilbaum, dann den Knoten selbst, und danach rekursiv den rechten Teilbaum — daher der Name 'in-order' (der Knoten liegt zwischen den beiden Teilbäumen).",
    source: "Kapitel 11, Bäume",
    free: false,
  },
];
