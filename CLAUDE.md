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

2. **Zahlenbeispiele UND Szenarien in Übungsaufgaben immer verändern.** Wird
   eine Aufgabe aus einem echten Übungsblatt/Tutorium für die Fragenbank
   (`lib/questions-<slug>.ts`) übernommen, bleibt nur die mathematische/
   ökonomische Struktur/Logik gleich — sowohl die konkreten Zahlen (Preise,
   Mengen, Wahrscheinlichkeiten, Parameter) als auch das Szenario selbst
   (Kontext, Gegenstände, Namen, Länder, Branchen, Institutionen) werden
   geändert. Es reicht nicht, nur die Zahlen im selben Szenario auszutauschen
   ("Fahrräder und Brot" bleibt "Fahrräder und Brot" mit anderen Preisen) —
   das Szenario selbst muss ein anderes sein (z. B. andere Güter, andere
   Länder/Personen/Branchen, andere Formulierung des politischen/
   institutionellen Kontexts). Es darf nie derselbe Zahlensatz UND nie
   dasselbe Szenario wie im Original-Übungsblatt gleichzeitig auftauchen.
   Das gilt auch für Beispiele, die direkt im Skript selbst als `examples`
   auftauchen, falls sie aus echten Übungsblättern stammen. Rein abstrakte,
   symbolische Aufgaben ohne konkretes Szenario (z. B. reine Variablengleichungen
   wie ΔY = ΔG/(1−b)) brauchen kein Szenario zum Austauschen — dort reicht
   die Zahlenänderung. Ebenso müssen austauschbare Szenarien nicht verändert
   werden, wenn sie ohnehin schon allgemeines, nicht-professorenspezifisches
   Fachwissen sind (z. B. "32 Skatkarten", "zwei faire Würfel") — hier geht es
   nur um erfundene Kontexte/Geschichten, die der Ersteller des Übungsblatts
   sich ausgedacht hat.

   **Ein reiner Wortaustausch bei sonst identischer Aufgabenstruktur zählt
   NICHT als verändertes Szenario.** Ein Copyright-Audit über alle 8 Module
   (Juli 2026) hat genau diesen Fehler mehrfach gefunden: z. B. "3 Maschinen
   M1/M2/M3 mit je unterschiedlicher Ausschussquote, welche hat das
   Ausschussstück am wahrscheinlichsten produziert?" wurde zu "3 Zulieferer
   L1/L2/L3 mit Ausschussquote" — nur ein Nomen ersetzt, Aufbau, Rollen und
   Fragestellung blieben identisch. Das reicht nicht. Bei jeder Übernahme
   muss man sich aktiv fragen: "Wenn ich Szenario A gegen Szenario B tausche,
   aber sonst alles (Anzahl Akteure, Art der Fragestellung, Aufbau) gleich
   lasse — ist das wirklich ein anderer Fall, oder nur eine Umbenennung?"
   Im Zweifel die Textform ändern, nicht nur die Substantive (z. B. anderer
   Fragetyp, andere Anzahl Akteure/Alternativen, andere Blickrichtung der
   Frage).

   **Diese Regel gilt genauso für benannte Beispiele/Fallstudien aus
   Vorlesungsfolien, nicht nur für Übungsblatt-Aufgaben.** Folien enthalten
   oft eigene, teils extern zitierte Fallbeispiele mit einem eigenen Titel
   (z. B. "Beispiel XY", ein Fallstudienname, eine bestimmte Firma/Software/
   ein bestimmtes System). Auch wenn daraus im Skript ein durchgerechnetes
   `examples`-Beispiel gebaut wird, darf der Fallname/-titel nicht übernommen
   werden (das Audit fand z. B. ein Design-Thinking-Beispiel, dessen Name
   fast wortgleich vom Folientitel kopiert war). Realer, öffentlich
   dokumentierter Fakt (z. B. eine bekannte, mit Quelle zitierte
   Firmengeschichte wie Groupon) ist davon ausgenommen — dort geht es nicht
   um ein erfundenes Szenario, sondern um zitierbare Fakten.

3. **Klausurtauglichkeit: keine Konzepte ohne Formel/Rechenbeispiel.** Für
   jedes Konzept im Skript (`lib/content/<slug>.ts`), zu dem es in einer
   echten Klausur eine Rechenaufgabe geben könnte (nicht nur Verständnisfragen),
   muss die jeweilige Section ein `formulas`/`formulasLatex`-Paar UND mindestens
   ein durchgerechnetes Zahlenbeispiel in `examples` enthalten — nicht nur eine
   Begriffsdefinition in `terms`. Ziel: Man muss mit dem Skript allein (ohne
   Zugriff auf die Originalquelle) eine Klausur zu dem Thema schreiben können.
   Rein konzeptionelle/einordnende Abschnitte (z. B. Skalenniveaus, Grundbegriffe
   ohne eigene Rechnung) brauchen keine Formel. Diese Regel gilt beim
   Neuanlegen eines Moduls von Anfang an — die Section-Liste des geplanten
   Kapitels sollte am Ende noch einmal daraufhin durchgegangen werden, ob
   irgendwo eine Formel fehlt, die in einer Klausur drankäme.

4. **Pflicht-Selbstcheck vor Abschluss eines Moduls (neu oder Audit).** Jedes
   `examples`-Beispiel im Skript und jede Aufgabe in der Fragenbank, die auf
   einer echten Quelle beruht, muss aktiv gegen den tatsächlichen Quelltext
   gegengelesen werden — nicht nur aus der Erinnerung/dem Eindruck heraus als
   "wahrscheinlich schon anders genug" eingeschätzt werden. Konkret: nach dem
   Schreiben eines neuen Beispiels kurz im eingelesenen Quellmaterial nach den
   auffälligsten Stichwörtern des NEUEN Beispiels suchen (bzw. bei sehr langen
   Foliensätzen den Text vorher z. B. per `pdftotext -layout` extrahieren,
   falls das normale Einlesen leer bleibt) und prüfen, ob dort ein Original
   mit sehr ähnlichem Aufbau existiert. Erst wenn das nicht der Fall ist (oder
   das Beispiel sich strukturell klar unterscheidet), gilt Regel 2 als erfüllt.
   Dieser Check killt genau die Fehler, die trotz Regel 1–3 im Juli-2026-Audit
   noch gefunden wurden (siehe oben) — die Regeln allein reichen nicht, wenn
   man sie nicht aktiv gegen die Quelle verifiziert.

5. **Skript-Text als eigenständiges Lehrwerk verfassen, nicht als Paraphrase
   der Quelle.** Der Fließtext im Skript (`body`, `intro`, `terms`,
   `examples`) wird geschrieben wie ein unabhängiges Lehrbuchkapitel zum
   allgemeinen Modulthema — aus eigenem Fachwissen heraus, OHNE die
   Original-Vorlesungsfolien/-skripte aus `source-material/<slug>/` während
   des Schreibens zu konsultieren oder zu paraphrasieren. Die Quelle wird
   nur für die THEMENAUSWAHL verwendet (welche Kapitel/Konzepte gehören zum
   Modul), nicht für Formulierungen, Erklärstruktur oder Beispiele. Eigene
   Beispiele, eigene Herleitungen, eigene Formulierungen — je unabhängiger
   die Textsubstanz vom Original, desto geringer das rechtliche Risiko.
   Diese Regel gilt zusätzlich zu Regeln 1–4 (die primär die Fragenbank und
   Formelabdeckung betreffen) und genauso verbindlich ab der ersten Sitzung
   eines neuen Moduls, ohne dass der Nutzer sie erneut nennen muss.

Diese Regeln gelten rückwirkend bereits für Statistik I und VWL 2 (Regeln 1+2,
beide wurden entsprechend umgebaut) sowie für Statistik I (Regel 3, wurde
nachträglich um fehlende Formeln wie den Gini-Koeffizienten bei maximaler
Disparität, Schiefe/Kurtosis, hypergeometrische Verteilung u. a. ergänzt) —
und für jedes künftige Modul von Anfang an, nicht erst nach Rückfrage.

Ein vollständiges Copyright-Audit aller 8 Module (Juli 2026) hat zusätzlich
10 Verstöße gegen Regel 2 gefunden und behoben (7× Informatik 2, 1× BWL 1,
2× Statistik 1) — durchweg Fälle von reinem Wortaustausch bei identischer
Struktur bzw. übernommenen Fallbeispiel-Titeln, siehe die neuen Absätze in
Regel 2 und den neuen Selbstcheck in Regel 4.

Im Anschluss an diesen Audit wurden zudem (Juli 2026) die Skript-Texte aller
8 Module komplett als eigenständige Lehrwerke neu verfasst (Regel 5), um das
rechtliche Risiko weiter zu reduzieren — die Fragenbänke (`lib/questions-*.ts`)
blieben dabei unverändert.

## Sonstiges

- Wenn beim Einlesen von Quell-PDFs (z. B. Tutorium-Aufgaben) der Inhalt
  offensichtlich nicht zum Dateinamen passt (z. B. falsches Modul/Fach),
  nicht einfach weitermachen — den Nutzer kurz fragen, wie er vorgehen
  möchte, bevor eine Fragenbank auf Basis der falschen Inhalte gebaut wird.

## Formeln: echtes Rendering (KaTeX / PDF)

Formeln werden NICHT als reiner Unicode-Text angezeigt, sondern echt
typografisch gerendert — im Online-Skript per KaTeX (`components/MathFormula.tsx`,
nutzt `section.formulasLatex`), im PDF-Export (Skript- und Formelsammlung-PDF)
per MathJax → SVG → PNG (`lib/pdf/renderLatex.ts`, nutzt `@resvg/resvg-wasm`,
bewusst NICHT `@resvg/resvg-js`, da dessen plattformspezifische native
Binärdatei bei Next.js/Vercel-Deployments nicht zuverlässig mitgebündelt wird).

Das bedeutet für jedes neue Modul: Jeder Eintrag in `formulas` (Skript-Sections)
braucht einen exakt passenden Eintrag in `formulasLatex` (gleiche Reihenfolge/
Länge), und zwar mit echtem LaTeX (`\dfrac{...}{...}` statt `a/b` als Bruch,
`\land`/`\lor`/`\iff`/`\Rightarrow` statt der reinen Unicode-Zeichen ∧/∨/⇔/⇒
usw.), damit die Formel überall als echtes Bild/echter Bruch erscheint statt
als Rohtext-Fallback. `formulas` bleibt trotzdem gepflegt als Text-Fallback,
falls das Rendering für einen einzelnen Eintrag mal fehlschlägt.

Die Rendering-Pipeline selbst (Font, resvg-wasm, KaTeX-Einbindung) ist
generisch und muss für neue Module NICHT angefasst werden — nur die
`formulasLatex`-Einträge in der jeweiligen `lib/content/<slug>.ts` müssen
stimmen.

## Neues Modul anlegen — Quellmaterial

Rohe Quell-PDFs für neue Module (Vorlesungsfolien, Übungsblätter, Tutorien)
kommen NICHT per Chat-Upload rein, sondern liegen im Ordner
`source-material/<slug>/` im Repo-Root. Dieser Ordner ist in `.gitignore`
eingetragen und wird nie committed/gepusht (urheberrechtlich geschütztes
Material). Sagt der Nutzer z. B. "Neues Modul: Mathematik 1, PDFs liegen in
source-material/mathematik-1/", direkt die Dateien aus diesem Ordner lesen
statt nach einem Chat-Upload zu fragen. Näheres in
`source-material/README.md`.
