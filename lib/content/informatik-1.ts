import type { SkriptChapter } from "./types";

// Eigenständiges Lehrwerk zu "Programmieren 1" (Java-Grundlagen und
// objektorientierte Programmierung), verfasst wie ein unabhängiges
// Lehrbuchkapitel zum allgemeinen Modulthema — nicht als Paraphrase einer
// bestimmten Vorlesung. Die Kapitelreihenfolge weicht bewusst von der
// üblichen Foliensortierung ab: Kontrollstrukturen und Datentypen stehen
// vor den restlichen Grundlagen, die Bonus-/Exkurs-Themen Debugging/Tests
// und ein rekursives Anwendungsbeispiel sind direkt in die passenden
// Kernkapitel eingebettet statt als eigener Block am Ende zu stehen.
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 ====================
  {
    id: "kontrollstrukturen",
    number: 1,
    title: "Kontrollstrukturen: Verzweigungen und Schleifen",
    free: true,
    intro:
      "Jedes Java-Programm muss an manchen Stellen Entscheidungen treffen und Anweisungen wiederholen. Verzweigungen und Schleifen sind die beiden Werkzeuge, mit denen sich der reine Ablauf 'von oben nach unten' steuern lässt — dieses Kapitel legt damit das Grundgerüst für alle folgenden Kapitel.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Bedingte Anweisungen: if, else und switch",
        body: [
          "Mit if wird ein Codeblock nur dann ausgeführt, wenn eine boolesche Bedingung wahr ist. Ein optionaler else-Zweig fängt den restlichen Fall auf, und mehrere else if-Zweige erlauben eine Kette sich gegenseitig ausschließender Fälle. Die switch-Anweisung ist eine Alternative, wenn ein einzelner Ausdruck gegen mehrere feste Werte verglichen werden soll — sie ist oft übersichtlicher als eine lange else-if-Kette.",
          "Ein häufiger Fehler bei switch ist das vergessene break: Ohne break wird nach einem passenden case-Zweig auch der Code der nachfolgenden case-Zweige ausgeführt ('Fallthrough'), bis entweder ein break erreicht wird oder der switch-Block endet. Das kann absichtlich genutzt werden, um mehrere Werte auf denselben Codepfad zu leiten, führt aber sehr häufig zu unbeabsichtigten Fehlern.",
        ],
        terms: [
          { term: "Fallthrough", definition: "Ausführung fällt in switch ohne break in den nächsten case-Zweig durch." },
        ],
        code: [
          "int note = 2;\nString text;\nswitch (note) {\n    case 1:\n    case 2:\n        text = \"gut\";\n        break;\n    case 3:\n    case 4:\n        text = \"ausreichend\";\n        break;\n    default:\n        text = \"nicht bestanden\";\n}\nSystem.out.println(text);",
        ],
        codeCaptions: ["Zwei case-Werte teilen sich bewusst denselben Zweig (Fallthrough bis zum break)"],
        examples: [
          "Für note = 2 durchläuft der switch-Block case 1 (kein break, daher Fallthrough) bis case 2, setzt dort text = \"gut\" und bricht mit break ab — die Ausgabe ist also 'gut', obwohl case 1 nie inhaltlich erreicht wurde.",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Schleifen: for, while und do-while",
        body: [
          "Die for-Schleife bündelt Initialisierung, Abbruchbedingung und Update in einer Kopfzeile und eignet sich besonders, wenn die Anzahl der Durchläufe von vornherein bekannt ist (z. B. Zählschleifen). Die while-Schleife prüft die Bedingung vor jedem Durchlauf und eignet sich, wenn die Anzahl der Durchläufe erst zur Laufzeit feststeht. Die do-while-Schleife prüft die Bedingung erst NACH dem ersten Durchlauf — der Schleifenkörper wird also mindestens einmal ausgeführt, unabhängig davon, ob die Bedingung überhaupt je wahr war.",
          "Bei verschachtelten Schleifen (eine Schleife im Körper einer anderen) multipliziert sich die Anzahl der Durchläufe der inneren Schleife mit der Anzahl der Durchläufe der äußeren Schleife. Hängt die Anzahl der inneren Durchläufe zusätzlich vom aktuellen Wert der äußeren Laufvariablen ab (z. B. eine 'Dreieck'-Struktur, bei der die innere Schleife jedes Mal einen Schritt weiter läuft), lässt sich die Gesamtzahl der Durchläufe über die Gaußsche Summenformel berechnen.",
        ],
        formulas: ["Summe 1 bis n = n(n+1)/2"],
        formulasLatex: ["\\sum_{i=1}^{n} i = \\dfrac{n(n+1)}{2}"],
        terms: [
          { term: "Verschachtelte Schleife", definition: "Eine Schleife, deren Körper selbst wieder eine Schleife enthält." },
        ],
        code: [
          "for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(\"*\");\n    }\n    System.out.println();\n}",
        ],
        codeCaptions: ["Dreiecksmuster: die innere Schleife läuft in Durchlauf i genau i-mal"],
        examples: [
          "Für n = 6 läuft die äußere Schleife 6-mal, und die innere Schleife läuft im i-ten Durchlauf genau i-mal. Insgesamt wird der Print-Befehl also 1+2+3+4+5+6 = 6·7/2 = 21-mal ausgeführt.",
        ],
      },
      {
        id: "1-3",
        heading: "1.3 Kontrollierter Schleifenabbruch: break und continue",
        body: [
          "break beendet die unmittelbar umschließende Schleife sofort und vollständig — die Programmausführung springt direkt zur ersten Anweisung nach der Schleife. continue dagegen beendet nur den aktuellen Durchlauf: Die restlichen Anweisungen im Schleifenkörper werden übersprungen, aber die Schleife läuft mit dem nächsten Durchlauf ganz normal weiter (bei for wird also zuerst noch das Update ausgeführt, bevor die Bedingung erneut geprüft wird).",
          "Bei verschachtelten Schleifen wirken break und continue standardmäßig nur auf die unmittelbar umschließende (innerste) Schleife. Soll eine äußere Schleife direkt verlassen werden, benötigt man in Java eine benannte Marke (label) vor der äußeren Schleife, z. B. äussere: for (...) { ... break äussere; ... } — ein Sprachmittel, das in der Praxis eher selten, aber gelegentlich klausurrelevant ist.",
        ],
        terms: [
          { term: "Label", definition: "Benannte Marke vor einer Schleife, mit der break/continue gezielt eine äußere Schleife ansprechen können." },
        ],
        code: [
          "int gesucht = 7;\nboolean gefunden = false;\nfor (int i = 0; i < werte.length; i++) {\n    if (werte[i] == gesucht) {\n        gefunden = true;\n        break;\n    }\n}",
        ],
        codeCaptions: ["Lineare Suche: break beendet die Schleife, sobald der Wert gefunden wurde"],
        examples: [
          "Steht 7 an Index 3 im Array werte, wird die Schleife nach dem vierten Durchlauf (i = 3) per break verlassen — die restlichen Elemente werden nicht mehr geprüft, was bei großen Arrays einen echten Laufzeitvorteil bringt.",
        ],
      },
    ],
  },
  // ==================== Kapitel 2 ====================
  {
    id: "datentypen-operatoren",
    number: 2,
    title: "Einfache Datentypen, Operatoren und Typumwandlung",
    free: false,
    intro:
      "Jede Variable in Java besitzt einen festen Datentyp, der bestimmt, welche Werte sie speichern kann und wie viel Speicher dafür reserviert wird. Dieses Kapitel behandelt die primitiven Datentypen, die wichtigsten Operatoren sowie die Regeln, nach denen Java zwischen Typen konvertiert.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Primitive Datentypen und Wertebereiche",
        body: [
          "Java kennt acht primitive Datentypen: vier Ganzzahltypen (byte, short, int, long) mit unterschiedlicher Bitbreite und damit unterschiedlichem Wertebereich, zwei Gleitkommatypen (float, double), sowie char (ein einzelnes Unicode-Zeichen) und boolean (true/false). Anders als bei Referenzdatentypen wird bei primitiven Typen der Wert selbst direkt in der Variable gespeichert, nicht eine Referenz auf ein Objekt.",
          "Bei der Ganzzahldivision (int/int oder long/long) wird das Ergebnis stets zur nächst-kleineren ganzen Zahl hin abgeschnitten (nicht gerundet), und der Modulo-Operator % liefert den dabei entstehenden Rest. Zwischen Ganzzahldivision und Modulo besteht ein fester Zusammenhang, der sich gut zur Kontrolle eines Ergebnisses nutzen lässt.",
        ],
        formulas: ["a = ⌊a/b⌋·b + (a mod b)"],
        formulasLatex: ["a = \\left\\lfloor \\dfrac{a}{b} \\right\\rfloor \\cdot b + (a \\bmod b)"],
        terms: [
          { term: "Ganzzahldivision", definition: "Division zweier Ganzzahltypen, deren Ergebnis zur nächst-kleineren Ganzzahl hin abgeschnitten wird." },
        ],
        examples: [
          "Für a = 17 und b = 5 liefert 17/5 in Java den Wert 3 (abgeschnitten, nicht gerundet), und 17%5 liefert den Rest 2. Die Kontrollrechnung bestätigt das: 3·5 + 2 = 17.",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Operatoren, Ausdrücke und Rangfolge",
        body: [
          "Ein Operator verknüpft einen oder mehrere Operanden zu einem Ausdruck, der stets einen Wert liefert. Java unterscheidet u. a. arithmetische Operatoren (+, -, *, /, %), Vergleichsoperatoren (==, !=, <, >, <=, >=), logische Operatoren (&&, ||, !) sowie die Inkrement-/Dekrement-Operatoren (++, --). Wie in der Mathematik gilt auch in Java 'Punkt vor Strich': Multiplikation und Division werden vor Addition und Subtraktion ausgewertet, sofern keine Klammern eine andere Reihenfolge erzwingen.",
          "Beim Präfix-Inkrement (++i) wird der Wert zuerst erhöht und danach in den umgebenden Ausdruck eingesetzt; beim Postfix-Inkrement (i++) wird zuerst der alte Wert in den Ausdruck eingesetzt und erst danach die Variable erhöht. Dieser Unterschied fällt nur dann auf, wenn der Inkrement-Ausdruck selbst Teil eines größeren Ausdrucks ist (z. B. einer Zuweisung) — als eigenständige Anweisung liefern beide dasselbe Endergebnis.",
        ],
        terms: [
          { term: "Kurzschlussauswertung", definition: "Bei && und || wird der zweite Operand nur ausgewertet, wenn der erste das Ergebnis noch nicht endgültig festlegt." },
        ],
        code: [
          "int i = 5;\nint a = i++;   // a = 5, danach i = 6\nint b = ++i;   // i wird zuerst auf 7 erhöht, b = 7",
        ],
        examples: [
          "Startet i bei 5, so liefert a = i++ den alten Wert 5 (a wird 5, i steht danach bei 6). Direkt danach liefert b = ++i zunächst die Erhöhung auf 7 und dann diesen neuen Wert (b wird 7). Am Ende gilt also a = 5, b = 7, i = 7.",
        ],
      },
      {
        id: "2-3",
        heading: "2.3 Implizites und explizites Type-Casting",
        body: [
          "Beim impliziten (automatischen) Casting wandelt Java einen Wert automatisch in einen 'größeren' bzw. präziseren Typ um, wenn dabei keine Information verloren gehen kann (z. B. int nach long, oder int nach double) — das passiert z. B. automatisch bei gemischten Ausdrücken oder Zuweisungen. Beim expliziten Casting erzwingt man selbst eine Umwandlung in einen 'kleineren' Typ, bei der Information verloren gehen KANN — dafür schreibt man den Zieltyp in runden Klammern vor den Ausdruck, z. B. (int) 3.9.",
          "Explizites Casting in einen kleineren Ganzzahltyp (z. B. int nach byte) schneidet einfach die überzähligen höherwertigen Bits ab. Passt der ursprüngliche Wert nicht in den Wertebereich des Zieltyps, entsteht dadurch ein Überlauf (Wraparound): Der Wert 'springt' auf der anderen Seite des Wertebereichs wieder herein, statt einen Fehler zu werfen.",
        ],
        formulas: ["byte-Wert = ((int-Wert + 128) mod 256) − 128"],
        formulasLatex: ["\\text{byteWert} = \\big((\\text{intWert} + 128) \\bmod 256\\big) - 128"],
        terms: [
          { term: "Wraparound", definition: "Überlauf beim Casting in einen kleineren Ganzzahltyp: Der Wert springt auf die andere Seite des Wertebereichs." },
        ],
        examples: [
          "byte reicht von −128 bis 127. Castet man den int-Wert 200 explizit nach byte, ergibt sich ((200+128) mod 256) − 128 = (328 mod 256) − 128 = 72 − 128 = −56 — genau der Wert, den (byte) 200 in Java tatsächlich liefert.",
        ],
      },
    ],
  },
  // ==================== Kapitel 3 ====================
  {
    id: "methoden",
    number: 3,
    title: "Methoden: Aufbau, Parameter und Gültigkeitsbereiche",
    free: false,
    intro:
      "Methoden bündeln wiederkehrende Abläufe unter einem Namen und machen ein Programm dadurch übersichtlicher und wartbarer. Dieses Kapitel behandelt den Aufbau einer Methode, das Überladen mehrerer Methoden mit demselben Namen sowie — als praxisnahen Exkurs — den systematischen Umgang mit Fehlern beim Testen von Methoden.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Methodenkopf, Parameter und Rückgabewerte",
        body: [
          "Eine Methode besteht aus einem Methodenkopf (Modifizierer, Rückgabetyp, Name, Parameterliste) und einem Methodenrumpf mit den auszuführenden Anweisungen. Der Rückgabetyp legt fest, welchen Datentyp die Methode über return zurückliefert — bei void wird nichts zurückgegeben. Parameter werden in Java grundsätzlich per Wertübergabe (call by value) übergeben: Bei primitiven Typen wird eine Kopie des Werts übergeben, Änderungen am Parameter innerhalb der Methode wirken sich also nicht auf die Variable außerhalb aus.",
          "Bei Referenzdatentypen (siehe Kapitel 5) wird ebenfalls der Wert übergeben — allerdings ist dieser Wert selbst eine Referenz (Adresse) auf ein Objekt. Daher können Änderungen an den Attributen des referenzierten Objekts innerhalb der Methode sichtbar bleiben, während eine komplette Neuzuweisung der Parametervariablen selbst (z. B. auf ein neues Objekt) außerhalb der Methode keine Wirkung zeigt.",
        ],
        terms: [
          { term: "Call by value", definition: "Übergabekonvention in Java: Es wird stets eine Kopie des Werts (bei Referenztypen: der Referenz) übergeben." },
        ],
        code: [
          "public static int quadrat(int zahl) {\n    return zahl * zahl;\n}",
        ],
        examples: [
          "Ruft man quadrat(4) auf, wird eine Kopie des Werts 4 an den Parameter zahl übergeben; die Methode berechnet 4*4 und liefert 16 zurück, ohne dass sich außerhalb der Methode irgendetwas an einer eventuell übergebenen Variablen ändert.",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Überladene Methoden und Signaturen",
        body: [
          "Methodenüberladung (Overloading) bedeutet, dass mehrere Methoden denselben Namen tragen dürfen, solange sich ihre Signatur unterscheidet. Die Signatur setzt sich aus dem Methodennamen und der Reihenfolge sowie den Typen der Parameter zusammen — der Rückgabetyp allein reicht NICHT aus, um zwei Methoden zu unterscheiden. Der Compiler wählt beim Aufruf anhand der übergebenen Argumente automatisch die passende Methode aus.",
          "Passt keine Methode exakt, sucht der Compiler nach einer Methode, die nach den Regeln des impliziten Castings passt (z. B. wird bei einem Aufruf mit einem int-Argument eine Methode mit long-Parameter akzeptiert, falls keine passendere Methode mit int-Parameter existiert). Gibt es mehrere gleichermaßen passende Kandidaten, meldet der Compiler einen Mehrdeutigkeitsfehler.",
        ],
        terms: [
          { term: "Methodensignatur", definition: "Methodenname zusammen mit Anzahl, Reihenfolge und Typen der Parameter — OHNE Rückgabetyp." },
        ],
        code: [
          "static int summe(int a, int b) { return a + b; }\nstatic double summe(double a, double b) { return a + b; }\nstatic int summe(int a, int b, int c) { return a + b + c; }",
        ],
        codeCaptions: ["Drei überladene Methoden: unterschiedliche Signaturen trotz gleichen Namens"],
        examples: [
          "summe(2, 3) ruft die erste Variante auf (zwei int-Parameter, Ergebnis 5), summe(2.0, 3.0) die zweite (Ergebnis 5.0), und summe(2, 3, 4) die dritte (Ergebnis 9) — der Compiler entscheidet allein anhand von Anzahl und Typ der Argumente.",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Exkurs: Debugging und Softwaretests",
        body: [
          "Debugging bezeichnet die systematische Suche nach der Ursache eines Fehlverhaltens — im Gegensatz zum bloßen 'Ausprobieren' setzt man dabei gezielt Werkzeuge wie Haltepunkte (Breakpoints) und die schrittweise Ausführung (Single-Stepping) einer Entwicklungsumgebung ein, um den Zustand eines Programms an einer bestimmten Stelle genau zu untersuchen. Man unterscheidet dabei grob drei Fehlerarten: Syntaxfehler (verhindern das Kompilieren), Laufzeitfehler (das Programm bricht während der Ausführung ab, z. B. durch eine Exception) und semantische bzw. logische Fehler (das Programm läuft durch, liefert aber ein falsches Ergebnis).",
          "Ein Softwaretest prüft systematisch, ob eine Methode für bestimmte Eingaben das erwartete Ergebnis liefert. Besonders wichtig sind dabei Grenzfälle (Edge Cases) wie 0, negative Zahlen, leere Arrays/Strings oder die Grenzen eines Wertebereichs — gerade diese Fälle werden beim reinen 'Ausprobieren mit Beispielzahlen' häufig übersehen, obwohl viele reale Fehler genau dort auftreten.",
        ],
        terms: [
          { term: "Edge Case", definition: "Grenzfall einer Eingabe (z. B. 0, leere Liste, Maximalwert), der beim Testen gezielt geprüft werden sollte." },
        ],
        examples: [
          "Für eine Methode maximum(int[] werte), die das größte Element eines Arrays zurückgibt, sollte ein Test nicht nur ein 'normales' Array mit mehreren unterschiedlichen Werten prüfen, sondern gezielt auch die Edge Cases eines Arrays mit nur einem Element sowie eines Arrays, in dem der Maximalwert mehrfach vorkommt.",
        ],
      },
    ],
  },
  // ==================== Kapitel 4 ====================
  {
    id: "rekursion",
    number: 4,
    title: "Rekursive Methoden",
    free: false,
    intro:
      "Eine rekursive Methode löst ein Problem, indem sie sich selbst mit einer kleineren Version desselben Problems aufruft. Dieses Kapitel behandelt den Aufbau rekursiver Methoden, den Vergleich zu iterativen Lösungen sowie ein durchgerechnetes Anwendungsbeispiel mit rekursivem Backtracking.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Rekursion: Basisfall und Rekursionsschritt",
        body: [
          "Jede korrekte rekursive Methode braucht zwei Bestandteile: mindestens einen Basisfall (Abbruchbedingung), der direkt ohne weiteren rekursiven Aufruf beantwortet wird, und einen Rekursionsschritt, der das Problem auf eine 'kleinere' Instanz desselben Problems zurückführt und sich dabei garantiert dem Basisfall annähert. Fehlt der Basisfall oder wird er nie erreicht, ruft sich die Methode unendlich oft selbst auf, bis der Aufrufstapel (Call-Stack) erschöpft ist und ein StackOverflowError auftritt.",
          "Jeder Methodenaufruf — auch ein rekursiver — belegt einen eigenen Stack-Frame mit den lokalen Variablen und Parametern dieses einen Aufrufs. Bei einer einfachen linearen Rekursion (ein rekursiver Aufruf pro Methodenaufruf) lässt sich die Gesamtzahl der Aufrufe bis zum Erreichen des Basisfalls direkt über eine Rekursionsgleichung bestimmen.",
        ],
        formulas: ["T(n) = T(n−1) + 1, T(0) = 1 ⇒ T(n) = n + 1"],
        formulasLatex: ["T(n) = T(n-1) + 1,\\quad T(0) = 1 \\;\\Rightarrow\\; T(n) = n+1"],
        terms: [
          { term: "Basisfall", definition: "Fall einer rekursiven Methode, der ohne weiteren rekursiven Aufruf direkt beantwortet wird." },
          { term: "StackOverflowError", definition: "Laufzeitfehler, wenn der Aufrufstapel durch zu tiefe (oder endlose) Rekursion erschöpft ist." },
        ],
        code: [
          "static int fakultaet(int n) {\n    if (n == 0) {          // Basisfall\n        return 1;\n    }\n    return n * fakultaet(n - 1);  // Rekursionsschritt\n}",
        ],
        examples: [
          "Für fakultaet(5) ruft sich die Methode über n = 4, 3, 2, 1 bis zum Basisfall n = 0 auf — insgesamt also T(5) = 5+1 = 6 Aufrufe (der ursprüngliche Aufruf plus fünf weitere). Die Rückgabewerte werden beim 'Zurückwickeln' des Stacks zu 5·4·3·2·1·1 = 120 multipliziert.",
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Rekursion vs. Iteration",
        body: [
          "Jede Rekursion lässt sich grundsätzlich auch iterativ (mit einer Schleife) formulieren und umgekehrt — die beiden Verfahren sind bezüglich der berechenbaren Probleme gleichwertig. Iterative Lösungen sind meist speichereffizienter, da sie ohne zusätzliche Stack-Frames auskommen, während rekursive Lösungen bei Problemen mit einer natürlich rekursiven Struktur (z. B. Bäume, siehe Kapitel 11, oder das Backtracking im nächsten Abschnitt) oft deutlich kürzer und verständlicher zu formulieren sind.",
          "Ein wichtiger Unterschied bei der Rekursionsart: Bei der sogenannten Endrekursion (Tail Recursion) ist der rekursive Aufruf die letzte Aktion der Methode, es muss also nach dessen Rückkehr nichts mehr berechnet werden. Java optimiert Endrekursion anders als manche funktionale Sprachen NICHT automatisch weg — auch endrekursive Methoden verbrauchen in Java also weiterhin Stack-Speicher proportional zur Rekursionstiefe.",
        ],
        terms: [
          { term: "Endrekursion (Tail Recursion)", definition: "Der rekursive Aufruf ist die letzte Aktion der Methode; wird in Java nicht automatisch optimiert." },
        ],
        examples: [
          "fakultaet aus 4.1 lässt sich iterativ als for-Schleife mit einer laufenden Produktvariablen formulieren: Das Ergebnis ist identisch, aber es entsteht nur ein einziger Stack-Frame statt n+1 verschachtelter Aufrufe.",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Anwendungsbeispiel: Rekursives Backtracking",
        body: [
          "Backtracking ist eine Strategie für Suchprobleme mit vielen möglichen Teilentscheidungen: Die Methode probiert an jeder Stelle systematisch eine mögliche nächste Entscheidung aus, ruft sich rekursiv für den restlichen, kleineren Teil des Problems auf, und macht die Entscheidung wieder rückgängig ('zurückverfolgen'), falls sich später herausstellt, dass sie zu keiner gültigen Gesamtlösung führt. Typische Anwendungen sind Rätsel mit Platzierungsregeln (z. B. Zahlen- oder Damen-Rätsel auf einem Gitter) oder das systematische Erzeugen aller Permutationen einer Menge.",
          "Da bei jedem rekursiven Aufruf mehrere Folgeaufrufe entstehen können (statt nur einem wie bei linearer Rekursion), wächst die Anzahl der Aufrufe im schlimmsten Fall exponentiell mit der Eingabegröße. Ein einfaches Modell für ein Problem, bei dem sich jede Teilaufgabe in zwei kleinere Teilaufgaben aufspaltet, ist die Rekursionsgleichung T(n) = T(n−1) + T(n−2) + 1.",
        ],
        formulas: ["T(n) = T(n−1) + T(n−2) + 1, T(0) = T(1) = 1"],
        formulasLatex: ["T(n) = T(n-1) + T(n-2) + 1,\\quad T(0) = T(1) = 1"],
        terms: [
          { term: "Backtracking", definition: "Suchstrategie, die Teilentscheidungen probiert und bei Bedarf wieder zurücknimmt, statt alle Möglichkeiten vorab zu berechnen." },
        ],
        code: [
          "static boolean platziere(int[] belegung, int position) {\n    if (position == belegung.length) {\n        return true;              // Basisfall: alle Positionen belegt\n    }\n    for (int wert = 1; wert <= belegung.length; wert++) {\n        if (istErlaubt(belegung, position, wert)) {\n            belegung[position] = wert;\n            if (platziere(belegung, position + 1)) {\n                return true;\n            }\n            belegung[position] = 0;    // zurückverfolgen\n        }\n    }\n    return false;                  // keine gültige Belegung an dieser Stelle\n}",
        ],
        codeCaptions: ["Allgemeines Backtracking-Schema: probieren, rekursiv weitermachen, bei Bedarf zurücknehmen"],
        examples: [
          "Für die Rekursionsgleichung T(n) = T(n−1) + T(n−2) + 1 mit T(0) = T(1) = 1 ergibt sich durch schrittweises Einsetzen: T(2) = T(1)+T(0)+1 = 1+1+1 = 3, T(3) = T(2)+T(1)+1 = 3+1+1 = 5, T(4) = T(3)+T(2)+1 = 5+3+1 = 9 — die Anzahl der Aufrufe wächst also spürbar schneller als linear, was typisch für Backtracking-Verfahren ohne zusätzliche Abbruchregeln ist.",
        ],
      },
    ],
  },
  // ==================== Kapitel 5 ====================
  {
    id: "referenzdatentypen",
    number: 5,
    title: "Referenzdatentypen: Arrays und Strings",
    free: false,
    intro:
      "Referenzdatentypen speichern nicht den Wert selbst, sondern eine Referenz (Adresse) auf ein Objekt im Heap-Speicher. Dieses Kapitel behandelt Arrays (Felder) als wichtigsten eingebauten Referenzdatentyp sowie den grundlegenden Unterschied zwischen Stack und Heap, der für das Verständnis von Kopien und Vergleichen zentral ist.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Eindimensionale und mehrdimensionale Felder",
        body: [
          "Ein Array (Feld) speichert eine feste Anzahl von Elementen desselben Datentyps unter einem gemeinsamen Namen, wobei jedes Element über einen Index (beginnend bei 0) angesprochen wird. Die Länge eines Arrays wird bei der Erzeugung festgelegt und kann danach nicht mehr verändert werden — über das Attribut länge (array.length) lässt sie sich jederzeit auslesen.",
          "Ein zweidimensionales Array in Java ist technisch gesehen ein Array von Arrays: Jede Zeile ist selbst wieder ein eigenständiges Array, die Zeilen können daher sogar unterschiedlich lang sein. Intern (und in manchen anderen Sprachen wie C) wird ein rechteckiges zweidimensionales Array oft als ein einziges, durchgehendes eindimensionales Array im Speicher abgelegt — der lineare Index eines Elements ergibt sich dann aus Zeile und Spalte.",
        ],
        formulas: ["linearer Index = Zeile · Spaltenanzahl + Spalte"],
        formulasLatex: ["\\text{index} = \\text{zeile}\\cdot n_{\\text{spalten}} + \\text{spalte}"],
        terms: [
          { term: "Index", definition: "Position eines Elements in einem Array, beginnend bei 0." },
        ],
        code: [
          "int[][] matrix = {\n    {1, 2, 3, 4},\n    {5, 6, 7, 8},\n    {9, 10, 11, 12}\n};\nint wert = matrix[2][1];   // Zeile 2, Spalte 1 -> 10",
        ],
        examples: [
          "Für ein rechteckiges Feld mit 4 Spalten liegt das Element aus Zeile 2, Spalte 1 (0-indexiert) bei einer durchgehenden linearen Speicherung an Index 2·4+1 = 9 — bei matrix aus dem Codebeispiel entspricht das genau dem Wert 10.",
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Referenzen, Kopien und der Stack/Heap-Unterschied",
        body: [
          "Primitive Werte werden auf dem Stack gespeichert (dort, wo auch die lokalen Variablen einer Methode liegen), Objekte — und damit auch Arrays — werden dagegen auf dem Heap angelegt; die Variable selbst enthält nur eine Referenz (Adresse) auf diesen Heap-Speicherbereich. Weist man einer zweiten Array-Variablen die erste zu (arr2 = arr1), werden dadurch KEINE Elemente kopiert — beide Variablen zeigen anschließend auf dasselbe Array-Objekt, und eine Änderung über arr2 ist auch über arr1 sichtbar.",
          "Um wirklich unabhängige Kopien der Elemente zu erhalten, muss man aktiv ein neues Array anlegen und die Elemente einzeln (oder z. B. mit der Hilfsmethode Arrays.copyOf) hinüberkopieren. Ebenso vergleicht der ==-Operator bei Arrays (wie bei allen Referenzdatentypen) NICHT die Inhalte, sondern nur, ob beide Variablen auf dasselbe Objekt zeigen — für einen inhaltlichen Vergleich braucht man eine eigene Schleife oder die Hilfsmethode Arrays.equals.",
        ],
        terms: [
          { term: "Heap", definition: "Speicherbereich, in dem Objekte (inkl. Arrays) zur Laufzeit angelegt werden." },
          { term: "Flache Kopie", definition: "Kopie einer Referenzvariablen, die weiterhin auf dasselbe zugrunde liegende Objekt zeigt." },
        ],
        code: [
          "int[] original = {1, 2, 3};\nint[] referenz = original;      // zeigt auf dasselbe Array\nint[] kopie = Arrays.copyOf(original, original.length);\n\nreferenz[0] = 99;\nSystem.out.println(original[0]); // 99\nSystem.out.println(kopie[0]);    // 1",
        ],
        examples: [
          "Nach referenz[0] = 99 zeigt auch original[0] den Wert 99, weil referenz und original dasselbe Array-Objekt im Heap referenzieren. kopie[0] bleibt dagegen bei 1, da Arrays.copyOf ein eigenständiges neues Array-Objekt mit kopierten Werten erzeugt hat.",
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Die Klasse String und Zeichenketten",
        body: [
          "Ein String ist in Java kein primitiver Datentyp, sondern ein Objekt der Klasse String, das eine unveränderliche (immutable) Folge von Zeichen kapselt. 'Unveränderlich' bedeutet: Jede Methode, die scheinbar einen String 'verändert' (z. B. concat, replace, toUpperCase), erzeugt in Wirklichkeit ein NEUES String-Objekt und lässt das ursprüngliche unverändert — deshalb muss das Ergebnis stets wieder einer Variablen zugewiesen werden, sonst geht es verloren.",
          "Wegen der Immutabilität und aus Effizienzgründen legt Java häufig verwendete String-Literale in einem speziellen Speicherbereich, dem String-Pool, ab und lässt gleichlautende Literale dieselbe Referenz teilen. Zwei mit new String(...) explizit erzeugte String-Objekte sind dagegen auch bei gleichem Inhalt zwei unterschiedliche Objekte — für den inhaltlichen Vergleich muss daher immer equals verwendet werden, niemals ==.",
        ],
        terms: [
          { term: "Immutabilität", definition: "Eigenschaft von String-Objekten, nach der Erzeugung nicht mehr verändert werden zu können." },
          { term: "String-Pool", definition: "Speicherbereich, in dem gleichlautende String-Literale dieselbe Referenz teilen können." },
        ],
        code: [
          "String a = \"Hallo\";\nString b = \"Hallo\";\nString c = new String(\"Hallo\");\n\nSystem.out.println(a == b);       // true (beide aus dem String-Pool)\nSystem.out.println(a == c);       // false (c ist ein neues Objekt)\nSystem.out.println(a.equals(c));  // true (gleicher Inhalt)",
        ],
        examples: [
          "Obwohl a, b und c inhaltlich alle 'Hallo' enthalten, liefert a == c den Wert false, weil new String(...) bewusst ein eigenes Objekt außerhalb des String-Pools erzeugt. a.equals(c) liefert dagegen true, da equals bei String immer die Zeichenfolge selbst vergleicht.",
        ],
      },
    ],
  },
  // ==================== Kapitel 6 ====================
  {
    id: "oop-einfuehrung",
    number: 6,
    title: "Einführung in die Objektorientierung",
    free: false,
    intro:
      "Die objektorientierte Programmierung bündelt Daten (Attribute) und die dazugehörigen Operationen (Methoden) in Klassen. Dieses Kapitel führt die grundlegenden Begriffe Klasse, Objekt und Attribut ein und erklärt den Unterschied zwischen Instanz- und klassenbezogenen Elementen.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Klassen, Objekte und Attribute",
        body: [
          "Eine Klasse ist ein Bauplan (Schablone), der beschreibt, welche Attribute (Zustand) und Methoden (Verhalten) Objekte dieser Klasse besitzen. Ein Objekt ist eine konkrete Instanz dieser Klasse mit eigenen, individuellen Werten für die Attribute — man spricht auch von der Instanziierung, wenn ein Objekt mittels new erzeugt wird. Mehrere Objekte derselben Klasse teilen sich denselben Methoden-Code, besitzen aber jeweils eigene Attributwerte.",
          "Attribute (auch Felder oder Instanzvariablen genannt) werden üblicherweise als private deklariert, damit sie nicht direkt von außerhalb der Klasse verändert werden können (siehe Kapselung in Kapitel 7). Der Zugriff von außen erfolgt stattdessen kontrolliert über öffentliche Methoden.",
        ],
        terms: [
          { term: "Instanziierung", definition: "Erzeugung eines konkreten Objekts einer Klasse mittels new." },
          { term: "Attribut", definition: "Zustandsvariable eines Objekts, die für jede Instanz einer Klasse eigene Werte annehmen kann." },
        ],
        code: [
          "public class Fahrrad {\n    private int gang;\n    private double geschwindigkeit;\n\n    public void schalte(int neuerGang) {\n        this.gang = neuerGang;\n    }\n}",
        ],
        codeCaptions: ["Klasse Fahrrad mit zwei Attributen und einer Methode"],
        examples: [
          "Nach Fahrrad r1 = new Fahrrad(); und Fahrrad r2 = new Fahrrad(); besitzen r1 und r2 jeweils eigene, unabhängige Attribute gang und geschwindigkeit. Ruft man r1.schalte(3) auf, ändert sich ausschließlich der Gang von r1 — r2 bleibt davon unberührt.",
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Instanz- vs. Klassenvariablen und -methoden",
        body: [
          "Instanzvariablen und Instanzmethoden gehören zu einem konkreten Objekt — jede Instanz besitzt ihre eigene Kopie der Instanzvariablen. Klassenvariablen und Klassenmethoden werden dagegen mit dem Modifizierer static gekennzeichnet und gehören zur Klasse selbst: Es existiert nur EINE gemeinsame Kopie einer Klassenvariable, die sich alle Instanzen dieser Klasse teilen, und eine Klassenmethode kann ohne ein konkretes Objekt aufgerufen werden.",
          "Ein typischer Anwendungsfall für Klassenvariablen ist ein Zähler, der über alle Objekte hinweg mitzählt (z. B. wie viele Instanzen bereits erzeugt wurden). Innerhalb einer Klassenmethode (static) darf NICHT auf Instanzvariablen oder Instanzmethoden zugegriffen werden, da eine Klassenmethode ohne Bezug zu einem konkreten Objekt aufgerufen werden kann und es daher keine 'zugehörige' Instanz gäbe.",
        ],
        terms: [
          { term: "Klassenvariable (static)", definition: "Variable, die zur Klasse selbst gehört; existiert nur einmal, unabhängig von der Anzahl der Objekte." },
        ],
        code: [
          "public class Lagerplatz {\n    private int bestand;\n    private static int anzahlLagerplaetze = 0;\n\n    public Lagerplatz() {\n        anzahlLagerplaetze++;\n    }\n}",
        ],
        examples: [
          "Nach drei Aufrufen new Lagerplatz() besitzen alle drei Objekte jeweils eigene, unabhängige Werte für bestand, teilen sich aber die eine gemeinsame Klassenvariable anzahlLagerplaetze, die nach den drei Konstruktoraufrufen den Wert 3 trägt.",
        ],
      },
    ],
  },
  // ==================== Kapitel 7 ====================
  {
    id: "klassen-im-detail",
    number: 7,
    title: "Klassen im Detail: Konstruktoren und Kapselung",
    free: false,
    intro:
      "Damit ein Objekt in einem sinnvollen Ausgangszustand entsteht und seine Attribute anschließend nicht unkontrolliert von außen verändert werden können, braucht es Konstruktoren und Kapselung. Dieses Kapitel behandelt beides sowie die UML-Notation, mit der sich Klassen grafisch dokumentieren lassen.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Konstruktoren und Objekterzeugung",
        body: [
          "Ein Konstruktor ist eine spezielle, methodenartige Anweisung, die beim Erzeugen eines Objekts mit new automatisch ausgeführt wird und die Attribute mit sinnvollen Anfangswerten belegt. Ein Konstruktor trägt immer denselben Namen wie die Klasse und besitzt KEINEN Rückgabetyp (auch nicht void). Definiert eine Klasse keinen eigenen Konstruktor, stellt Java automatisch einen parameterlosen Standardkonstruktor bereit, der alle Attribute auf ihre jeweiligen Standardwerte setzt (z. B. 0 bei Zahlen, null bei Referenztypen).",
          "Wie Methoden können auch Konstruktoren überladen werden — eine Klasse kann also mehrere Konstruktoren mit unterschiedlicher Parameterliste anbieten. Innerhalb eines Konstruktors kann man mit this(...) einen anderen Konstruktor DERSELBEN Klasse aufrufen, um Initialisierungscode nicht mehrfach schreiben zu müssen; dieser Aufruf muss dann zwingend die erste Anweisung im Konstruktor sein.",
        ],
        terms: [
          { term: "Standardkonstruktor", definition: "Automatisch bereitgestellter, parameterloser Konstruktor, falls eine Klasse keinen eigenen definiert." },
        ],
        code: [
          "public class Punkt {\n    private double x;\n    private double y;\n\n    public Punkt() {\n        this(0, 0);        // ruft den anderen Konstruktor auf\n    }\n\n    public Punkt(double x, double y) {\n        this.x = x;\n        this.y = y;\n    }\n}",
        ],
        examples: [
          "new Punkt() ruft zunächst this(0, 0) auf und initialisiert x und y damit auf 0.0. new Punkt(3, 4) ruft dagegen direkt den zweiten Konstruktor auf und setzt x = 3.0, y = 4.0 — beide Konstruktoren teilen sich denselben Zuweisungscode.",
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Kapselung, Sichtbarkeit und this",
        body: [
          "Kapselung (Encapsulation) bedeutet, die internen Attribute einer Klasse als private zu deklarieren und den Zugriff von außen ausschließlich über öffentliche Methoden — üblicherweise Getter (liefern den aktuellen Wert) und Setter (verändern den Wert kontrolliert, ggf. mit Prüfung auf Gültigkeit) — zu erlauben. Der Vorteil: Die interne Umsetzung einer Klasse kann sich später ändern, ohne dass Code außerhalb der Klasse angepasst werden muss, solange die öffentliche Schnittstelle gleich bleibt.",
          "Das Schlüsselwort this innerhalb einer Instanzmethode referenziert das Objekt, auf dem die Methode gerade aufgerufen wurde. Es wird vor allem dann zwingend benötigt, wenn ein Parameter denselben Namen wie ein Attribut trägt (Namenskollision) — this.attribut spricht dann eindeutig das Attribut an, während attribut ohne this den Parameter meint.",
        ],
        terms: [
          { term: "Kapselung", definition: "Verstecken interner Attribute hinter einer kontrollierten, öffentlichen Zugriffsschnittstelle." },
          { term: "Getter/Setter", definition: "Öffentliche Methoden zum kontrollierten Lesen bzw. Schreiben eines privaten Attributs." },
        ],
        code: [
          "public class Lagerplatz {\n    private int bestand;\n\n    public void setBestand(int bestand) {\n        if (bestand >= 0) {\n            this.bestand = bestand;\n        }\n    }\n\n    public int getBestand() {\n        return bestand;\n    }\n}",
        ],
        examples: [
          "Ruft man setBestand(-50) auf, greift die Prüfung bestand >= 0 und this.bestand bleibt unverändert — ohne diese Kapselung könnte ein negativer Bestand direkt von außen gesetzt werden, ganz ohne Kontrolle.",
        ],
      },
      {
        id: "7-3",
        heading: "7.3 UML-Klassendiagramme",
        body: [
          "Ein UML-Klassendiagramm stellt eine Klasse als Rechteck mit drei übereinanderliegenden Bereichen dar: Klassenname (oben), Attribute (Mitte) und Methoden (unten). Vor jedem Attribut bzw. jeder Methode kennzeichnet ein Symbol die Sichtbarkeit: + für public, − für private, # für protected. Klassenbezogene (static) Elemente werden zusätzlich unterstrichen.",
          "Beziehungen zwischen Klassen werden durch Linien zwischen den Rechtecken dargestellt, deren Form die Art der Beziehung anzeigt: eine durchgezogene Linie mit ausgefülltem Dreieck steht für Vererbung (siehe Kapitel 8), eine Raute für eine Ganzes-Teil-Beziehung (Aggregation/Komposition), und ein einfacher Pfeil für eine Assoziation (eine Klasse kennt/nutzt eine andere).",
        ],
        terms: [
          { term: "UML", definition: "Unified Modeling Language — grafische Notation zur Darstellung von Klassen und ihren Beziehungen." },
        ],
        examples: [
          "Die Klasse Lagerplatz aus 7.2 würde in einem UML-Diagramm als Rechteck mit dem Namen 'Lagerplatz' oben, darunter '− bestand: int' (privat, daher Minus) und im unteren Bereich '+ setBestand(bestand: int): void' sowie '+ getBestand(): int' dargestellt.",
        ],
      },
    ],
  },
  // ==================== Kapitel 8 ====================
  {
    id: "vererbung",
    number: 8,
    title: "Vererbung",
    free: false,
    intro:
      "Vererbung erlaubt es, eine neue Klasse auf Basis einer bereits bestehenden Klasse zu definieren und dabei deren Attribute und Methoden zu übernehmen. Dieses Kapitel behandelt Vererbungshierarchien, das Schlüsselwort super sowie das Überschreiben geerbter Methoden.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Vererbungshierarchien und super",
        body: [
          "Mit dem Schlüsselwort extends erklärt eine Klasse (Unterklasse/Subklasse) eine andere Klasse (Oberklasse/Superklasse) zu ihrer direkten Basis: Die Unterklasse erbt automatisch alle nicht-privaten Attribute und Methoden der Oberklasse und kann darüber hinaus eigene, zusätzliche Attribute und Methoden definieren. In Java kann eine Klasse immer nur von genau EINER Oberklasse direkt erben (Einfachvererbung) — mehrere Klassen dürfen aber wiederum von derselben Unterklasse erben, wodurch eine Baumhierarchie entsteht.",
          "Das Schlüsselwort super innerhalb einer Unterklasse referenziert die Oberklasse. super(...) ruft — als allererste Anweisung im Konstruktor der Unterklasse — den passenden Konstruktor der Oberklasse auf; fehlt dieser Aufruf, fügt Java automatisch einen impliziten Aufruf des parameterlosen Oberklassen-Konstruktors ein. super.methode() ruft gezielt die Version einer Methode aus der Oberklasse auf, selbst wenn die Unterklasse dieselbe Methode überschrieben hat.",
        ],
        terms: [
          { term: "Einfachvererbung", definition: "Eine Klasse kann in Java nur von genau einer Oberklasse direkt erben." },
        ],
        code: [
          "public class Fahrzeug {\n    protected int hoechstgeschwindigkeit;\n\n    public Fahrzeug(int hoechstgeschwindigkeit) {\n        this.hoechstgeschwindigkeit = hoechstgeschwindigkeit;\n    }\n}\n\npublic class Rennwagen extends Fahrzeug {\n    private boolean spoiler;\n\n    public Rennwagen(int hoechstgeschwindigkeit, boolean spoiler) {\n        super(hoechstgeschwindigkeit);\n        this.spoiler = spoiler;\n    }\n}",
        ],
        examples: [
          "new Rennwagen(320, true) ruft zuerst super(320) auf, wodurch hoechstgeschwindigkeit in der geerbten Oberklasse Fahrzeug gesetzt wird, und initialisiert danach das eigene Attribut spoiler mit true — der Rennwagen besitzt also sowohl das geerbte Attribut als auch sein eigenes.",
        ],
      },
      {
        id: "8-2",
        heading: "8.2 Überschreiben von Methoden",
        body: [
          "Eine Unterklasse kann eine von der Oberklasse geerbte Methode überschreiben (Overriding), indem sie eine Methode mit EXAKT derselben Signatur (Name, Parametertypen und -reihenfolge) neu implementiert. Anders als beim Überladen (Kapitel 3) muss dabei auch der Rückgabetyp identisch sein (oder ein Untertyp des ursprünglichen Rückgabetyps, sogenannter kovarianter Rückgabetyp). Die Annotation @Override vor einer überschreibenden Methode ist keine Pflicht, lässt den Compiler aber einen Tippfehler in der Signatur erkennen, der sonst versehentlich zu einer neuen, überladenen statt überschriebenen Methode führen würde.",
          "Wird eine überschriebene Methode über eine Variable vom Typ der Oberklasse aufgerufen, entscheidet zur Laufzeit der TATSÄCHLICHE Typ des referenzierten Objekts (nicht der deklarierte Variablentyp), welche Version ausgeführt wird — dieses Verhalten heißt dynamisches Binden und ist die technische Grundlage für Polymorphismus (Kapitel 9).",
        ],
        terms: [
          { term: "Overriding", definition: "Neuimplementierung einer geerbten Methode mit identischer Signatur in der Unterklasse." },
          { term: "Dynamisches Binden", definition: "Zur Laufzeit wird anhand des tatsächlichen Objekttyps entschieden, welche überschriebene Methode ausgeführt wird." },
        ],
        code: [
          "public class Fahrzeug {\n    public String gibLaut() {\n        return \"...\";\n    }\n}\n\npublic class Motorrad extends Fahrzeug {\n    @Override\n    public String gibLaut() {\n        return \"Vroom\";\n    }\n}",
        ],
        examples: [
          "Deklariert man Fahrzeug f = new Motorrad(); und ruft f.gibLaut() auf, wird trotz des deklarierten Typs Fahrzeug die überschriebene Version aus Motorrad ausgeführt und 'Vroom' zurückgegeben — entscheidend ist der tatsächliche Objekttyp zur Laufzeit, nicht der Variablentyp zur Übersetzungszeit.",
        ],
      },
    ],
  },
  // ==================== Kapitel 9 ====================
  {
    id: "polymorphismus-jdk",
    number: 9,
    title: "Polymorphismus und besondere Klassen im JDK",
    free: false,
    intro:
      "Polymorphismus erlaubt es, Objekte unterschiedlicher (aber verwandter) Klassen einheitlich über den Typ ihrer gemeinsamen Oberklasse oder eines gemeinsamen Interfaces zu behandeln. Dieses Kapitel behandelt Polymorphie, abstrakte Klassen und Interfaces sowie die Hüllklassen des JDK für die primitiven Datentypen.",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Polymorphie und dynamisches Binden",
        body: [
          "Polymorphie ('Vielgestaltigkeit') bedeutet, dass eine Variable vom Typ einer Oberklasse zur Laufzeit auf Objekte unterschiedlicher Unterklassen zeigen kann und dabei jeweils automatisch die passende, überschriebene Methodenversion ausgeführt wird. Das erlaubt es, z. B. ein Array vom Typ der Oberklasse anzulegen, das Objekte verschiedener Unterklassen gemischt enthält, und alle Objekte einheitlich über eine Schleife zu behandeln — ohne dass man vorher wissen muss, um welche konkrete Unterklasse es sich jeweils handelt.",
          "Damit ein Objekt einer Unterklasse gezielt auf zusätzliche, nur dort vorhandene Methoden zugegriffen werden kann, ist ein expliziter Downcast (Cast von der Ober- in die Unterklasse) nötig. Ein solcher Cast sollte zur Sicherheit stets mit dem instanceof-Operator abgesichert werden, da ein Downcast auf ein Objekt des falschen tatsächlichen Typs zu einer ClassCastException zur Laufzeit führt.",
        ],
        terms: [
          { term: "Downcast", definition: "Expliziter Cast von einer Oberklassen- in eine Unterklassenreferenz; sollte mit instanceof abgesichert werden." },
        ],
        code: [
          "Fahrzeug[] flotte = { new Motorrad(), new Rennwagen(280, false) };\nfor (Fahrzeug f : flotte) {\n    System.out.println(f.gibLaut());\n}",
        ],
        examples: [
          "Obwohl das Array flotte deklaratorisch nur den Typ Fahrzeug kennt, ruft f.gibLaut() dank dynamischem Binden für jedes Element automatisch die tatsächlich passende überschriebene Methode auf — Motorrad und Rennwagen können sich dabei durchaus unterschiedlich verhalten.",
        ],
      },
      {
        id: "9-2",
        heading: "9.2 Abstrakte Klassen und Interfaces",
        body: [
          "Eine abstrakte Klasse (Schlüsselwort abstract) kann nicht direkt instanziiert werden und darf neben normalen, vollständig implementierten Methoden auch abstrakte Methoden ohne Methodenrumpf enthalten, die jede konkrete Unterklasse verpflichtend implementieren muss. Abstrakte Klassen eignen sich, um gemeinsamen Code und gemeinsamen Zustand (Attribute) für eine Gruppe verwandter Unterklassen zu bündeln.",
          "Ein Interface definiert dagegen ausschließlich eine Menge von Methodensignaturen (einen 'Vertrag'), ohne selbst Attribute oder – von Ausnahmen wie Default-Methoden abgesehen – Implementierungen bereitzustellen. Eine Klasse kann (anders als bei extends) mehrere Interfaces gleichzeitig implementieren (implements), wodurch sich die Einschränkung der Einfachvererbung für reine Verhaltensverträge umgehen lässt.",
        ],
        terms: [
          { term: "Abstrakte Methode", definition: "Methode ohne Rumpf, die von jeder konkreten Unterklasse implementiert werden muss." },
          { term: "Interface", definition: "Reiner Methodenvertrag ohne Zustand; eine Klasse kann mehrere Interfaces implementieren." },
        ],
        code: [
          "public abstract class Form {\n    public abstract double flaecheninhalt();\n}\n\npublic interface Zeichenbar {\n    void zeichne();\n}\n\npublic class Kreis extends Form implements Zeichenbar {\n    private double radius;\n\n    public double flaecheninhalt() {\n        return Math.PI * radius * radius;\n    }\n\n    public void zeichne() { /* ... */ }\n}",
        ],
        examples: [
          "Kreis muss sowohl flaecheninhalt() (von der abstrakten Klasse Form gefordert) als auch zeichne() (vom Interface Zeichenbar gefordert) implementieren, da sonst ein Compilerfehler entstünde — eine konkrete Klasse muss stets ALLE geerbten abstrakten Methoden und Interface-Methoden bereitstellen.",
        ],
      },
      {
        id: "9-3",
        heading: "9.3 Hüllklassen (Wrapper) und Autoboxing",
        body: [
          "Zu jedem primitiven Datentyp existiert im JDK eine zugehörige Hüllklasse (Wrapper-Klasse), z. B. Integer für int, Double für double oder Boolean für boolean. Hüllklassen 'verpacken' einen primitiven Wert in ein vollwertiges Objekt und werden überall dort benötigt, wo ein Referenzdatentyp erforderlich ist (z. B. in vielen Sammlungsklassen wie ArrayList, die keine primitiven Typen direkt speichern können).",
          "Autoboxing bezeichnet die automatische Umwandlung eines primitiven Werts in das entsprechende Wrapper-Objekt (und Unboxing die umgekehrte Richtung), die der Compiler seit Java 5 automatisch einfügt. Eine bekannte Falle dabei: Da Integer-Objekte wie String-Objekte über == nur auf Objektidentität verglichen werden, liefert der Vergleich zweier per Autoboxing erzeugter Integer-Objekte mit == nur für kleine Werte (der JDK-interne Integer-Cache deckt üblicherweise −128 bis 127 ab) zuverlässig true — außerhalb dieses Bereichs entstehen zwei unterschiedliche Objekte, und == liefert dann false, obwohl die Werte inhaltlich gleich sind.",
        ],
        terms: [
          { term: "Autoboxing", definition: "Automatische Umwandlung eines primitiven Werts in das zugehörige Wrapper-Objekt durch den Compiler." },
          { term: "Integer-Cache", definition: "Vom JDK intern wiederverwendete Integer-Objekte für kleine Werte (üblicherweise −128 bis 127)." },
        ],
        code: [
          "Integer a = 100;\nInteger b = 100;\nInteger c = 200;\nInteger d = 200;\n\nSystem.out.println(a == b);  // true (Integer-Cache)\nSystem.out.println(c == d);  // false (außerhalb des Caches)",
        ],
        examples: [
          "a und b liegen beide im gecachten Bereich (100), sodass beide Autoboxing-Aufrufe dasselbe wiederverwendete Integer-Objekt liefern und a == b true ergibt. c und d liegen außerhalb (200), erzeugen daher zwei unterschiedliche Objekte, und c == d liefert false — inhaltlich (c.equals(d)) wären beide dagegen gleich.",
        ],
      },
    ],
  },
  // ==================== Kapitel 10 ====================
  {
    id: "ausnahmebehandlung",
    number: 10,
    title: "Ausnahmebehandlung",
    free: false,
    intro:
      "Exceptions (Ausnahmen) sind Javas Mechanismus, um auf Fehler und außergewöhnliche Situationen zur Laufzeit kontrolliert zu reagieren, statt das Programm abrupt abstürzen zu lassen. Dieses Kapitel behandelt try/catch/finally sowie die Hierarchie der eingebauten Exception-Klassen und eigene Exception-Typen.",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Exceptions: try, catch und finally",
        body: [
          "Anweisungen, die eine Exception auslösen könnten, werden in einen try-Block geschrieben. Tritt dabei tatsächlich eine Exception auf, wird die Ausführung des try-Blocks sofort abgebrochen, und Java sucht nach einem passenden catch-Block, der den Typ der aufgetretenen Exception (oder eine Oberklasse davon) auffängt. Passt keiner der vorhandenen catch-Blöcke, wird die Exception nach oben an die aufrufende Methode weitergereicht (propagiert) — geschieht das bis zur main-Methode, terminiert das Programm mit einer Fehlermeldung und einem Stack-Trace.",
          "Ein optionaler finally-Block wird IMMER ausgeführt, unabhängig davon, ob eine Exception aufgetreten ist oder nicht, und unabhängig davon, ob der try- oder ein catch-Block mit return verlassen wurde. finally eignet sich daher für Aufräumarbeiten, die auf jeden Fall passieren müssen (z. B. das Schließen einer Datei oder Netzwerkverbindung).",
        ],
        terms: [
          { term: "Stack-Trace", definition: "Ausgabe der Aufrufkette von Methoden, in der eine nicht abgefangene Exception aufgetreten ist." },
        ],
        code: [
          "try {\n    int ergebnis = 10 / divisor;\n    System.out.println(ergebnis);\n} catch (ArithmeticException e) {\n    System.out.println(\"Division durch 0 nicht erlaubt\");\n} finally {\n    System.out.println(\"Berechnung abgeschlossen\");\n}",
        ],
        examples: [
          "Ist divisor gleich 0, wirft 10 / divisor eine ArithmeticException; der catch-Block fängt sie ab und gibt die Fehlermeldung aus. In JEDEM Fall — ob Exception aufgetreten ist oder nicht — wird anschließend noch 'Berechnung abgeschlossen' über den finally-Block ausgegeben.",
        ],
      },
      {
        id: "10-2",
        heading: "10.2 Eigene Exception-Klassen und die Exception-Hierarchie",
        body: [
          "Alle Exceptions in Java erben letztlich von der Klasse Throwable, die sich in Error (schwerwiegende, meist nicht behandelbare Systemfehler wie StackOverflowError) und Exception aufteilt. Innerhalb von Exception unterscheidet man geprüfte Exceptions (checked exceptions, z. B. IOException), deren Behandlung oder explizite Weiterleitung (throws in der Methodensignatur) vom Compiler erzwungen wird, und ungeprüfte Exceptions (unchecked, alle Unterklassen von RuntimeException, z. B. NullPointerException oder ArithmeticException), die der Compiler nicht zwingend behandelt sehen will.",
          "Eigene Exception-Klassen erstellt man durch Erben von Exception (für eine geprüfte) oder von RuntimeException (für eine ungeprüfte eigene Exception) und bieten sich an, um fachliche Fehlerfälle im eigenen Programm klar von technischen Java-Standardfehlern zu unterscheiden — z. B. eine eigene NichtGenugBestandException statt einer generischen IllegalArgumentException.",
        ],
        terms: [
          { term: "Checked Exception", definition: "Exception, deren Behandlung oder Weiterleitung der Compiler zwingend verlangt (Unterklasse von Exception, nicht von RuntimeException)." },
          { term: "Unchecked Exception", definition: "Exception, die der Compiler nicht zwingend behandelt sehen will (Unterklasse von RuntimeException)." },
        ],
        code: [
          "public class NichtGenugBestandException extends RuntimeException {\n    public NichtGenugBestandException(String nachricht) {\n        super(nachricht);\n    }\n}",
        ],
        examples: [
          "Eine Methode entnehmen(int menge) könnte bei nicht ausreichendem Lagerbestand throw new NichtGenugBestandException(\"Bestand reicht nicht aus\"); auslösen — der Aufrufer erkennt am spezifischen Exception-Typ sofort den fachlichen Fehlerfall, statt eine generische Exception interpretieren zu müssen.",
        ],
      },
    ],
  },
  // ==================== Kapitel 11 ====================
  {
    id: "listen-baeume",
    number: 11,
    title: "Listen, Bäume und rekursive Datenstrukturen",
    free: false,
    intro:
      "Arrays haben eine feste Länge und sind damit für manche Anwendungen unpraktisch. Verkettete Listen und Bäume sind Datenstrukturen, die aus einzelnen, über Referenzen verbundenen Knoten bestehen und dadurch flexibel wachsen können. Dieses Kapitel behandelt beide Strukturen und ihre Eigenschaften.",
    sections: [
      {
        id: "11-1",
        heading: "11.1 Einfach und doppelt verkettete Listen",
        body: [
          "Eine einfach verkettete Liste besteht aus Knoten, von denen jeder einen Wert (die Nutzdaten) und eine Referenz auf den jeweils nächsten Knoten speichert; der letzte Knoten referenziert null. Der Zugriff auf ein bestimmtes Element ist dadurch nur sequentiell möglich — man muss ab dem ersten Knoten (dem 'Kopf' bzw. head) Schritt für Schritt weitergehen, es gibt anders als beim Array keinen direkten, indexbasierten Zugriff. Dafür lässt sich ein neuer Knoten am Anfang oder in der Mitte in konstanter Zeit einfügen, ohne — wie bei einem Array — nachfolgende Elemente verschieben zu müssen.",
          "Eine doppelt verkettete Liste erweitert jeden Knoten zusätzlich um eine Referenz auf den VORHERIGEN Knoten. Dadurch lässt sich die Liste auch rückwärts durchlaufen, und das Entfernen eines bekannten Knotens wird einfacher, da man nicht erst dessen Vorgänger separat suchen muss — der Preis dafür ist der zusätzliche Speicherbedarf für die zweite Referenz je Knoten.",
        ],
        terms: [
          { term: "Head", definition: "Erster Knoten einer verketteten Liste, Ausgangspunkt jedes sequentiellen Zugriffs." },
        ],
        code: [
          "public class Knoten {\n    int wert;\n    Knoten naechster;\n\n    public Knoten(int wert) {\n        this.wert = wert;\n    }\n}",
        ],
        codeCaptions: ["Knoten einer einfach verketteten Liste"],
        examples: [
          "Eine Liste mit den Werten 3, 7, 1 besteht aus drei Knoten-Objekten: Der erste Knoten (wert=3) referenziert über naechster den zweiten (wert=7), dieser referenziert den dritten (wert=1), dessen naechster wiederum null ist — das Ende der Liste ist damit eindeutig markiert.",
        ],
      },
      {
        id: "11-2",
        heading: "11.2 Bäume: Aufbau und Traversierung",
        body: [
          "Ein Baum besteht aus Knoten, die (anders als bei einer Liste) mehrere Nachfolger (Kindknoten) besitzen können. Der oberste Knoten ohne Vorgänger heißt Wurzel (root), Knoten ohne Kinder heißen Blätter. Bei einem Binärbaum besitzt jeder Knoten höchstens zwei Kinder, die üblicherweise als linkes und rechtes Kind unterschieden werden. Die Höhe eines Baums ist die Länge des längsten Pfads von der Wurzel zu einem Blatt.",
          "Ein vollständiger Binärbaum (jeder innere Knoten hat genau zwei Kinder, alle Blätter liegen auf derselben Tiefe) besitzt auf jeder Tiefe d höchstens doppelt so viele Knoten wie auf der vorherigen Tiefe — auf Tiefe d gibt es maximal 2^d Knoten (Wurzel auf Tiefe 0). Summiert man das über alle Tiefen von 0 bis zur Höhe h auf, ergibt sich die maximale Gesamtknotenzahl eines Baums der Höhe h.",
        ],
        formulas: ["max. Knoten auf Tiefe d = 2^d", "max. Gesamtknoten bei Höhe h = 2^(h+1) − 1"],
        formulasLatex: ["N_{\\max}(d) = 2^{d}", "N_{\\max,\\text{gesamt}}(h) = 2^{h+1} - 1"],
        terms: [
          { term: "Binärbaum", definition: "Baum, in dem jeder Knoten höchstens zwei Kinder (links/rechts) besitzt." },
          { term: "Traversierung", definition: "Systematisches Durchlaufen aller Knoten eines Baums, z. B. rekursiv in Präorder, Inorder oder Postorder." },
        ],
        code: [
          "public class Knoten {\n    int wert;\n    Knoten links;\n    Knoten rechts;\n\n    public Knoten(int wert) {\n        this.wert = wert;\n    }\n}\n\nstatic void inorder(Knoten k) {\n    if (k == null) return;\n    inorder(k.links);\n    System.out.println(k.wert);\n    inorder(k.rechts);\n}",
        ],
        codeCaptions: ["Binärbaum-Knoten und rekursive Inorder-Traversierung"],
        examples: [
          "Ein vollständiger Binärbaum der Höhe 3 hat auf den Tiefen 0 bis 3 maximal 1, 2, 4 bzw. 8 Knoten — insgesamt also höchstens 1+2+4+8 = 15 Knoten, was genau der Formel 2^(3+1)−1 = 16−1 = 15 entspricht.",
        ],
      },
    ],
  },
];
