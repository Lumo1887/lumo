# Lumo — Projektnotizen für Claude

Lumo ist eine Plattform, die für einzelne Uni-Module (Skript + Übungstool +
Chatbot + PDF-Export) auf Basis von echtem Vorlesungs-/Übungsmaterial gebaut
wird. Die Architektur ist generalisiert: ein neues Modul braucht nur einen
Eintrag in `lib/modules.ts`, eine Skript-Datei in `lib/content/<slug>.ts`
(registriert in `lib/content/registry.ts`) und eine Fragenbank in
`lib/questions-<slug>.ts` (registriert in `lib/content/questions-registry.ts`).
Die generischen Routen unter `app/module/[slug]/...` funktionieren danach
automatisch, ohne weitere Code-Änderungen.

## Verbindliche Regeln beim Erstellen eines NEUEN Moduls

Wir bewegen uns rechtlich in einer Grauzone, weil Skript und Übungstool auf
echtem, urheberrechtlich geschütztem Vorlesungs-/Tutoriumsmaterial einer
Universität basieren. Um das Risiko zu reduzieren, gelten für jedes neue
Modul ab sofort zwei feste Regeln — sie gelten automatisch für jede Sitzung,
in der ein neues Modul gebaut wird, ohne dass der Nutzer das jedes Mal extra
sagen muss:

1. **Kapitelreihenfolge/-nummerierung nie 1:1 von den Vorlesungsfolien
   übernehmen.** Die Kapitel des Skripts (`lib/content/<slug>.ts`) müssen in
   einer anderen Reihenfolge stehen als in der Quelle, und anders
   durchnummeriert sein. Bonus-/Exkurs-Themen sollen nach Möglichkeit
   zwischen die Kernkapitel gemischt werden statt als eigener Block am Ende
   zu stehen. Cross-Referenzen im Text ("siehe Kapitel X", "im nächsten
   Kapitel") müssen zur neuen Reihenfolge passen.

2. **Zahlenbeispiele in Übungsaufgaben immer verändern.** Wird eine Aufgabe
   aus einem echten Übungsblatt/Tutorium für die Fragenbank
   (`lib/questions-<slug>.ts`) übernommen, bleibt die Aufgabenstruktur/Logik
   gleich, aber die konkreten Zahlen (Preise, Mengen, Wahrscheinlichkeiten,
   Parameter, Namen in Textaufgaben) werden geändert — und das Ergebnis
   entsprechend neu berechnet. Es darf nie derselbe Zahlensatz wie im
   Original-Übungsblatt auftauchen. Das gilt auch für Zahlenbeispiele, die
   direkt im Skript selbst als `examples` auftauchen, falls sie aus echten
   Übungsblättern stammen.

Diese beiden Regeln gelten rückwirkend bereits für Statistik I und VWL 2
(beide wurden entsprechend umgebaut) und für jedes künftige Modul von Anfang
an — nicht erst nach Rückfrage.

## Sonstiges

- Wenn beim Einlesen von Quell-PDFs (z. B. Tutorium-Aufgaben) der Inhalt
  offensichtlich nicht zum Dateinamen passt (z. B. falsches Modul/Fach),
  nicht einfach weitermachen — den Nutzer kurz fragen, wie er vorgehen
  möchte, bevor eine Fragenbank auf Basis der falschen Inhalte gebaut wird.
