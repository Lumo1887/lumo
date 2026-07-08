import type { Question } from "@/lib/questions";

export const TOPICS = [
  "Markt und Budgetmenge",
  "Technologie und Gewinnmaximierung",
  "Präferenzen und Nutzen",
  "Monopol",
  "Kostenminimierung und Kostenkurven",
  "Optimale Entscheidung und Nachfrage",
  "Konsumentenrente, Marktnachfrage und Marktgleichgewicht",
  "Bekundete Präferenzen und Slutsky-Zerlegung",
  "Tausch und Wohlfahrtstheorie",
  "Angebot der Unternehmung und Marktangebot der Branche",
  "Oligopoltheorie",
  "Kaufen, Verkaufen und intertemporale Entscheidung",
  "Spieltheorie",
] as const;

export const questions: Question[] = [
  // ---------- Markt und Budgetmenge (frei zugänglich) ----------
  {
    id: "mb-01",
    topic: "Markt und Budgetmenge",
    type: "numeric",
    unit: "GE",
    prompt:
      "Sieben Studierende möchten je einen Platz in einem Kletterkurs buchen. Ihre Reservationspreise (in GE) sind 90, 60, 75, 45, 30, 20 und 10. Es werden nur 4 Plätze angeboten. Wie hoch ist der Reservationspreis der zahlungsbereitesten Person, die bei einem markträumenden Preis gerade NOCH KEINEN Platz bekommt?",
    correctValue: 30,
    explanation:
      "Sortiert absteigend: 90, 75, 60, 45, 30, 20, 10. Bei genau 4 vergebenen Plätzen erhalten die vier höchsten Reservationspreise (90, 75, 60, 45) einen Platz. Die zahlungsbereiteste Person ohne Platz hat den fünfthöchsten Reservationspreis: 30 GE. Der Gleichgewichtspreis liegt damit im Intervall (30, 45].",
    source: "Angepasst nach Übungsblatt 1 (Wohnungsmarkt-Aufgabe), Szenario und Zahlen geändert",
    free: true,
  },
  {
    id: "mb-02",
    topic: "Markt und Budgetmenge",
    type: "mc",
    prompt:
      "Ein gewöhnlicher Monopolist besitzt alle Plätze eines Parkhauses und kennt die Marktnachfrage, aber nicht die individuellen Reservationspreise. Ein diskriminierender Monopolist kennt zusätzlich jeden einzelnen Reservationspreis. Welche Aussage trifft zu?",
    options: [
      "Der diskriminierende Monopolist produziert (vermietet) tendenziell mehr Einheiten und erzielt einen höheren Gewinn als der gewöhnliche Monopolist",
      "Beide vermieten exakt dieselbe Anzahl an Plätzen und erzielen denselben Gewinn",
      "Der gewöhnliche Monopolist ist immer effizienter, weil er einen einheitlichen Preis verlangt",
      "Preisdiskriminierung ist nur bei vollständiger Konkurrenz möglich",
    ],
    correctIndex: 0,
    explanation:
      "Da der diskriminierende Monopolist jedem Kunden individuell seinen Reservationspreis abverlangen kann, lohnt es sich für ihn, auch Kunden mit niedrigeren Zahlungsbereitschaften noch zu bedienen (solange diese über den Grenzkosten liegen) — er vermietet mehr Plätze und vereinnahmt zusätzlich die gesamte Konsumentenrente, die dem gewöhnlichen Monopolisten entgeht.",
    source: "Angepasst nach Übungsblatt 1 (Wohnungsmarkt-Aufgabe), Szenario geändert",
    free: true,
  },
  {
    id: "mb-03",
    topic: "Markt und Budgetmenge",
    type: "numeric",
    unit: "Personen",
    prompt:
      "Auf einem Markt für Zwischenmiete-Zimmer gibt es sehr viele Nachfrager mit Nachfragefunktion D(p) = max{0, 500 − p}. Wie viele Zimmer werden bei einem Preis von p = 260 nachgefragt?",
    correctValue: 240,
    explanation: "D(260) = 500 − 260 = 240.",
    source: "Angepasst nach Übungsblatt 1 (Wohnungsmarkt-Aufgabe), Szenario und Zahlen geändert",
    free: true,
  },
  {
    id: "mb-04",
    topic: "Markt und Budgetmenge",
    type: "numeric",
    unit: "kg Nudeln",
    prompt:
      "Ein Haushalt konsumiert ausschließlich Nudeln (Gut 1, Preis 3 GE/kg) und Tomatensoße (Gut 2, Preis 5 GE/Glas) bei einem Einkommen von 90 GE. Wie viele kg Nudeln kann er sich maximal leisten, wenn er sein gesamtes Einkommen nur für Nudeln ausgibt?",
    correctValue: 30,
    explanation: "Maximal leistbare Menge von Gut 1: m/p1 = 90/3 = 30 kg.",
    source: "Angepasst nach Übungsblatt 1 (Milch-und-Cornflakes-Aufgabe), Szenario und Zahlen geändert",
    free: true,
  },
  {
    id: "mb-05",
    topic: "Markt und Budgetmenge",
    type: "mc",
    prompt:
      "Ein Konsument hat ein Einkommen von 1200 GE und wählt zwischen zwei Gütern zu Preisen (40, 60). Das Einkommen steigt um 200 GE, der Preis von Gut 2 sinkt um 10 GE, und auf den Konsum von Gut 1 wird eine Mengensteuer von 5 GE erhoben. Wie verändert sich die Budgetgerade?",
    options: [
      "Sie verschiebt sich nicht parallel, sondern dreht sich um einen neuen, veränderten Achsenabschnitt bei beiden Gütern, da sich sowohl beide effektiven Preise als auch das Einkommen ändern",
      "Sie bleibt exakt unverändert, da sich die Effekte gegenseitig aufheben",
      "Nur der Achsenabschnitt auf der Gut-2-Achse verändert sich, die Steigung bleibt exakt gleich wie vorher",
      "Die Budgetmenge wird kleiner, unabhängig von den Werten",
    ],
    correctIndex: 0,
    explanation:
      "Die effektive Preisänderung bei Gut 1 (durch die Mengensteuer auf 45 GE) UND bei Gut 2 (auf 50 GE) verändert die Steigung −p1/p2, während die Einkommenserhöhung zusätzlich den maximal erreichbaren Konsum verschiebt — es handelt sich also weder um eine reine Parallelverschiebung noch um eine reine Drehung.",
    source: "Angepasst nach Übungsblatt 1, Aufgabe 4a, Szenario und Zahlen geändert",
    free: true,
  },
  {
    id: "mb-06",
    topic: "Markt und Budgetmenge",
    type: "numeric",
    unit: "Einheiten Gut 2",
    prompt:
      "Ein Agent hat eine Anfangsausstattung (ω1, ω2) = (60, 300) bei Preisen p1 = 4 und p2 = 3. Wie viele Einheiten von Gut 2 könnte er sich maximal leisten, wenn er seine gesamte Ausstattung von Gut 1 verkauft und alles in Gut 2 investiert?",
    correctValue: 380,
    explanation:
      "Der Wert der Ausstattung beträgt p1·ω1 + p2·ω2 = 4·60 + 3·300 = 240+900 = 1140. Maximal leistbare Menge von Gut 2: 1140/3 = 380.",
    source: "Angepasst nach Übungsblatt 1, Aufgabe 5, Szenario und Zahlen geändert",
    free: true,
  },

  // ---------- Technologie und Gewinnmaximierung ----------
  {
    id: "tg-01",
    topic: "Technologie und Gewinnmaximierung",
    type: "numeric",
    unit: "Sack Futtermittel",
    prompt:
      "Eine Imkerin nutzt Futtermittel für ihre Bienenstöcke als einzigen variablen Input, das 3 GE pro Sack kostet. x Säcke Futtermittel erlauben eine Honigernte von y = 12√x Kilogramm. Der Preis pro Kilogramm Honig ist 6 GE. Wie viele Säcke Futtermittel setzt die Imkerin gewinnmaximal ein?",
    correctValue: 144,
    explanation:
      "Gewinn π(x) = 6·12√x − 3x = 72√x − 3x. F.O.C.: 36/√x = 3 ⟹ √x = 12 ⟹ x* = 144.",
    source: "Angepasst nach Übungsblatt 8, Aufgabe 3, Szenario und Zahlen geändert",
    free: false,
  },
  {
    id: "tg-02",
    topic: "Technologie und Gewinnmaximierung",
    type: "numeric",
    unit: "kg Honig",
    prompt:
      "Bei gewinnmaximalem Futtermitteleinsatz von x = 144 Säcken erntet die Imkerin y = 12√x kg Honig. Wie viele Kilogramm sind das?",
    correctValue: 144,
    explanation: "y = 12·√144 = 12·12 = 144.",
    source: "Angepasst nach Übungsblatt 8, Aufgabe 3, Szenario und Zahlen geändert",
    free: false,
  },
  {
    id: "tg-03",
    topic: "Technologie und Gewinnmaximierung",
    type: "mc",
    prompt:
      "Eine Firma mit streng konvexer Technologie agiert unter vollständiger Konkurrenz auf dem Faktormarkt und setzt Inputs so ein, dass MP1/w1 > MP2/w2 gilt. Wie kann sie ihre Kosten (bei gegebenem Output) senken?",
    options: [
      "Indem sie mehr von Faktor 1 und weniger von Faktor 2 einsetzt, bis beide Verhältnisse gleich sind",
      "Indem sie beide Faktoren um denselben Betrag reduziert",
      "Die Inputkombination ist bereits kostenminimal, es gibt keine Verbesserung",
      "Indem sie ausschließlich Faktor 2 erhöht",
    ],
    correctIndex: 0,
    explanation:
      "MP1/w1 > MP2/w2 bedeutet, dass eine zusätzliche Geldeinheit in Faktor 1 mehr Output bringt als in Faktor 2 — die Firma sollte also von Faktor 2 auf Faktor 1 umschichten, bis die Grenzprodukte pro Geldeinheit für beide Faktoren gleich sind (Kostenminimierungsbedingung).",
    source: "Angepasst nach Übungsblatt 8, Aufgabe 2",
    free: false,
  },
  {
    id: "tg-04",
    topic: "Technologie und Gewinnmaximierung",
    type: "mc",
    prompt:
      "Für welche der folgenden Produktionsfunktionen liegen bei Verdopplung beider Inputs GENAU verdoppelte Outputs vor (konstante Skalenerträge)?",
    options: [
      "f(x1, x2) = x1^0,5 · x2^0,5",
      "f(x1, x2) = x1^0,5 · x2^0,3",
      "f(x1, x2) = x1 · x2",
      "f(x1, x2) = x1² · x2²",
    ],
    correctIndex: 0,
    explanation:
      "f(x1,x2)=x1^0,5·x2^0,5 hat Exponentensumme 1 ⟹ f(tx1,tx2)=t^1·f(x1,x2), also konstante Skalenerträge. Bei Summe <1 (0,8) liegen abnehmende, bei Summe >1 (2 bzw. 4) zunehmende Skalenerträge vor.",
    source: "Konzeptfrage zu Skalenerträgen",
    free: false,
  },
  {
    id: "tg-05",
    topic: "Technologie und Gewinnmaximierung",
    type: "mc",
    prompt:
      "Eine Firma unter vollständiger Konkurrenz auf dem Faktormarkt maximiert ihren Gewinn π = p·f(x1,x2) − w1x1 − w2x2. Welche Bedingung charakterisiert das Optimum bezüglich Faktor 1?",
    options: [
      "Das Wertgrenzprodukt von Faktor 1 entspricht seinem Preis: p·MP1 = w1",
      "Der Grenznutzen von Faktor 1 entspricht dem Output-Preis",
      "Die Grenzrate der Substitution ist immer gleich eins",
      "Faktor 1 wird immer bis zur technischen Kapazitätsgrenze eingesetzt",
    ],
    correctIndex: 0,
    explanation: "Die Bedingung erster Ordnung des Gewinnmaximierungsproblems verlangt p·MP1 = w1 für jeden Faktor.",
    source: "Konzeptfrage zur Gewinnmaximierung",
    free: false,
  },

  // ---------- Präferenzen und Nutzen ----------
  {
    id: "pn-01",
    topic: "Präferenzen und Nutzen",
    type: "mc",
    prompt:
      "Drei Freunde – Lea, Marco und Nina – planen einen gemeinsamen Wandertag und müssen sich auf eine von drei Routen einigen: Küstenweg (K), Bergpfad (B) oder Waldrunde (W). Ihre individuellen Präferenzen sind: Lea: K≻B≻W, Marco: B≻W≻K, Nina: W≻K≻B. Wird per Mehrheitsentscheidung zwischen je zwei Routen abgestimmt, welche Eigenschaft hat die resultierende Gruppenpräferenz ≿maj?",
    options: [
      "Sie ist NICHT transitiv (Condorcet-Zyklus: K≻majB≻majW≻majK)",
      "Sie ist transitiv und vollständig, exakt wie jede Einzelpräferenz",
      "Sie ist identisch mit Leas individueller Präferenz",
      "Es gibt eine eindeutige, unbestrittene Gewinnerroute",
    ],
    correctIndex: 0,
    explanation:
      "Zwei von drei bevorzugen K vor B (Lea, Nina), zwei von drei bevorzugen B vor W (Lea, Marco), zwei von drei bevorzugen W vor K (Marco, Nina) — die Mehrheitsrelation ist zyklisch und damit intransitiv, obwohl jede Einzelperson rationale (transitive) Präferenzen hat.",
    source: "Angepasst nach Übungsblatt 2, Aufgabe 1, Szenario geändert",
    free: false,
  },
  {
    id: "pn-02",
    topic: "Präferenzen und Nutzen",
    type: "mc",
    prompt:
      "Ein Konsument tauscht jederzeit 3 Einheiten von Gut 1 gegen 4 Einheiten von Gut 2, ohne dass sich sein Nutzen ändert. Wie sehen seine Indifferenzkurven aus?",
    options: [
      "Parallele Geraden mit Steigung −4/3",
      "L-förmig geknickte Kurven",
      "Streng konvexe, glatt gekrümmte Kurven",
      "Kreisförmige Kurven um einen Sättigungspunkt",
    ],
    correctIndex: 0,
    explanation:
      "Ein konstantes Austauschverhältnis zwischen zwei Gütern beschreibt perfekte Substitute — die Indifferenzkurven sind Geraden mit konstanter Steigung, hier −4/3 (bzw. der entsprechenden Austauschrate).",
    source: "Angepasst nach Übungsblatt 2, Aufgabe 2a, Zahlen geändert",
    free: false,
  },
  {
    id: "pn-03",
    topic: "Präferenzen und Nutzen",
    type: "mc",
    prompt:
      "Für die Nutzenfunktion u(x1,x2) = x1²·x2² zeichnet man die Indifferenzkurve zum Nutzenniveau ū = 81. Welche Gleichung beschreibt diese Indifferenzkurve (für x1,x2>0)?",
    options: [
      "x1·x2 = 9",
      "x1·x2 = 81",
      "x1 + x2 = 9",
      "x1²+x2² = 81",
    ],
    correctIndex: 0,
    explanation: "x1²x2² = 81 ⟹ (x1x2)² = 81 ⟹ x1x2 = 9 (positive Wurzel, da x1,x2>0).",
    source: "Angepasst nach Übungsblatt 2, Aufgabe 4, Zahlen geändert",
    free: false,
  },
  {
    id: "pn-04",
    topic: "Präferenzen und Nutzen",
    type: "mc",
    prompt:
      "Seien u1(x1,x2)=x1x2, u2(x1,x2)=x1³x2³ und u3(x1,x2)=ln x1 + ln x2 drei Nutzenfunktionen. Welche Aussage trifft zu?",
    options: [
      "Alle drei repräsentieren dieselbe Präferenzordnung und haben dieselbe MRS, da u2 und u3 monotone Transformationen von u1 sind",
      "Nur u1 und u2 repräsentieren dieselbe Präferenzordnung, u3 eine andere",
      "Alle drei Nutzenfunktionen haben unterschiedliche Präferenzordnungen und unterschiedliche MRS",
      "Nur u3 ist eine gültige Nutzenfunktion, da Logarithmen negativ werden können",
    ],
    correctIndex: 0,
    explanation:
      "u2 = u1³ und u3 = ln(u1) sind beides streng monotone Transformationen von u1 (da u1>0) — sie repräsentieren daher dieselbe Präferenzordnung und haben dieselbe MRS, obwohl sich die einzelnen Grenznutzen bezüglich x1 und x2 unterschiedlich verhalten (steigend, fallend bzw. konstant).",
    source: "Angepasst nach Übungsblatt 2, Aufgabe 6, Zahlen geändert",
    free: false,
  },
  {
    id: "pn-05",
    topic: "Präferenzen und Nutzen",
    type: "mc",
    prompt:
      "Ein Haushalt hat die Cobb-Douglas-Nutzenfunktion u(x1,x2) = x1^β·x2^(1−β) mit β ∈ (0,1). Wie verändert sich die MRS an einem festen Punkt (x̄1,x̄2), wenn β steigt?",
    options: [
      "Die MRS (betragsmäßig) steigt — der Haushalt gewichtet Gut 1 relativ stärker",
      "Die MRS bleibt für jedes β konstant bei 1",
      "Die MRS sinkt betragsmäßig immer gegen null",
      "Die MRS hängt nicht von β ab, sondern nur vom Güterbündel",
    ],
    correctIndex: 0,
    explanation:
      "MRS = −(β/(1−β))·(x2/x1). Ein höheres β erhöht den Faktor β/(1−β) und damit den Betrag der MRS an jedem festen Punkt — der Haushalt ist bereit, mehr von Gut 2 für eine zusätzliche Einheit von Gut 1 herzugeben, je größer β (das Gewicht von Gut 1) ist.",
    source: "Angepasst nach Übungsblatt 3, Aufgabe 3b, Notation geändert",
    free: false,
  },

  // ---------- Monopol ----------
  {
    id: "mo-01",
    topic: "Monopol",
    type: "numeric",
    unit: "Einheiten",
    prompt:
      "Eine Monopolistin produziert Designerlampen gemäß der Kostenfunktion C(y) = 9 + y² und sieht sich der Nachfrage D(p) = max{16 − p, 0} gegenüber. Wie hoch ist die gewinnmaximale Ausbringungsmenge y*?",
    correctValue: 4,
    explanation:
      "Inverse Nachfrage: p(y)=16−y. Erlös R(y)=16y−y², Grenzerlös MR(y)=16−2y. Grenzkosten MC(y)=2y. F.O.C.: 16−2y=2y ⟹ 16=4y ⟹ y*=4.",
    source: "Angepasst nach Übungsblatt 9, Aufgabe 1, Zahlen geändert",
    free: false,
  },
  {
    id: "mo-02",
    topic: "Monopol",
    type: "numeric",
    unit: "GE",
    prompt:
      "Für dieselbe Monopolistin (C(y) = 9 + y², D(p) = max{16 − p, 0}, gewinnmaximale Menge y* = 4) — wie hoch ist der zugehörige Preis p*?",
    correctValue: 12,
    explanation: "p*(y*) = 16 − y* = 16 − 4 = 12.",
    source: "Angepasst nach Übungsblatt 9, Aufgabe 1, Zahlen geändert",
    free: false,
  },
  {
    id: "mo-03",
    topic: "Monopol",
    type: "mc",
    prompt:
      "Der Erlös R(p) = p·D(p) eines Monopolisten ist bei einer Preiserhöhung...",
    options: [
      "steigend, wenn die Preiselastizität der Nachfrage betragsmäßig kleiner als 1 ist (unelastisch)",
      "immer fallend, unabhängig von der Elastizität",
      "immer steigend, unabhängig von der Elastizität",
      "steigend, wenn die Preiselastizität betragsmäßig größer als 1 ist (elastisch)",
    ],
    correctIndex: 0,
    explanation:
      "Im unelastischen Bereich (|ε|<1) steigt der Erlös bei einer Preiserhöhung, da der Mengenrückgang relativ gesehen kleiner ist als die Preissteigerung. Deshalb produziert ein gewinnmaximierender Monopolist niemals im unelastischen Bereich — dort ließe sich der Erlös durch eine Preiserhöhung noch weiter steigern, ohne dass die Kosten dabei zunehmen (Menge sinkt ja sogar).",
    source: "Angepasst nach Übungsblatt 9, Aufgabe 3",
    free: false,
  },
  {
    id: "mo-04",
    topic: "Monopol",
    type: "mc",
    prompt:
      "Ein Monopolist produziert mit konstanten Grenz- und Durchschnittskosten und sieht sich einer Nachfrage mit konstanter Elastizität ε = −α (α>1) gegenüber. Wie hoch ist die Stückmarge (p−MC)/p im Gewinnoptimum?",
    options: [
      "1/α",
      "α",
      "α−1",
      "1/(α−1)",
    ],
    correctIndex: 0,
    explanation: "Aus der Amoroso-Robinson-Gleichung folgt der Lerner-Index (p−MC)/p = −1/ε = 1/α.",
    source: "Angepasst nach Übungsblatt 9, Aufgabe 5",
    free: false,
  },
  {
    id: "mo-05",
    topic: "Monopol",
    type: "mc",
    prompt:
      "Ein Monopolist produziert mit Fixkosten F und konstanten Grenzkosten von 3 GE pro Stück. Wird eine Mengensteuer von t Geldeinheiten pro Stück erhoben, während die Nachfrage linear ist, wie verändert sich der Preis typischerweise?",
    options: [
      "Der Preis steigt um WENIGER als t (die Steuerlast wird zwischen Anbieter und Nachfrager aufgeteilt)",
      "Der Preis steigt um genau t",
      "Der Preis steigt um MEHR als t",
      "Der Preis bleibt exakt unverändert",
    ],
    correctIndex: 0,
    explanation:
      "Bei linearer Nachfrage überwälzt ein Monopolist typischerweise nur einen Teil einer Mengensteuer auf die Konsumenten (bei linearer Nachfrage exakt die Hälfte) — anders als man naiv vermuten könnte, ist eine volle 1:1-Überwälzung nicht der Regelfall.",
    source: "Angepasst nach Übungsblatt 9, Aufgabe 7",
    free: false,
  },
  {
    id: "mo-06",
    topic: "Monopol",
    type: "numeric",
    unit: "Einheiten",
    prompt:
      "Ein Monopolist mit konstanten Grenz- und Durchschnittskosten von 4 GE beliefert zwei getrennte Märkte mit Preisdiskriminierung dritten Grades. Markt A: yA = DA(p) = max{48 − p, 0}. Wie hoch ist die auf Markt A verkaufte Menge im Gewinnoptimum?",
    correctValue: 22,
    explanation:
      "Inverse Nachfrage p(yA)=48−yA, MR_A=48−2yA. F.O.C.: 48−2yA=4 ⟹ yA*=22.",
    source: "Angepasst nach Übungsblatt 9, Aufgabe 8, Zahlen und Szenario geändert",
    free: false,
  },

  // ---------- Kostenminimierung und Kostenkurven ----------
  {
    id: "kk-01",
    topic: "Kostenminimierung und Kostenkurven",
    type: "mc",
    prompt:
      "Eine Firma hat die Leontief-Produktionsfunktion f(x1,x2) = min{x1, x2}. Wie lautet ihre Kostenfunktion C(w1,w2,y)?",
    options: [
      "C(w1,w2,y) = (w1+w2)·y",
      "C(w1,w2,y) = min{w1,w2}·y",
      "C(w1,w2,y) = w1·w2·y",
      "C(w1,w2,y) = (w1+w2)/y",
    ],
    correctIndex: 0,
    explanation:
      "Bei perfekten Komplementen muss stets x1=x2=y gelten (kein Faktor darf im Überschuss vorhanden sein, das wäre verschwendet) — die Kosten sind daher w1·y + w2·y = (w1+w2)y.",
    source: "Angepasst nach Übungsblatt 8, Aufgabe 1a",
    free: false,
  },
  {
    id: "kk-02",
    topic: "Kostenminimierung und Kostenkurven",
    type: "mc",
    prompt:
      "Eine Firma hat die lineare Produktionsfunktion f(x1,x2) = x1 + x2 (perfekte Substitute). Wie lautet ihre Kostenfunktion C(w1,w2,y)?",
    options: [
      "C(w1,w2,y) = min{w1,w2}·y",
      "C(w1,w2,y) = (w1+w2)·y",
      "C(w1,w2,y) = max{w1,w2}·y",
      "C(w1,w2,y) = w1·w2·y",
    ],
    correctIndex: 0,
    explanation:
      "Bei perfekten Substituten wird ausschließlich der günstigere Faktor eingesetzt: Um Output y zu erreichen, genügt y Einheiten des billigeren Faktors — Kosten = min{w1,w2}·y.",
    source: "Angepasst nach Übungsblatt 8, Aufgabe 1b",
    free: false,
  },
  {
    id: "kk-03",
    topic: "Kostenminimierung und Kostenkurven",
    type: "numeric",
    unit: "Einheiten",
    prompt:
      "Eine Firma hat die Kostenfunktion C(y) = 12y² + 300. Bei welchem Outputniveau y sind die Durchschnittskosten AC(y) = C(y)/y minimal?",
    correctValue: 5,
    explanation:
      "AC(y) = 12y + 300/y. Minimierung: dAC/dy = 12 − 300/y² = 0 ⟹ y² = 25 ⟹ y = 5.",
    source: "Angepasst nach Übungsblatt 8, Aufgabe 4, Zahlen geändert",
    free: false,
  },
  {
    id: "kk-04",
    topic: "Kostenminimierung und Kostenkurven",
    type: "mc",
    prompt:
      "Am Minimum der Durchschnittskostenkurve AC(y) gilt stets...",
    options: [
      "MC(y) = AC(y)",
      "MC(y) = 0",
      "AC(y) = 0",
      "MC(y) ist maximal",
    ],
    correctIndex: 0,
    explanation:
      "Solange MC<AC, fällt AC; solange MC>AC, steigt AC — daher schneidet die Grenzkostenkurve die Durchschnittskostenkurve exakt in deren Minimum, wo MC=AC gilt.",
    source: "Konzeptfrage zu Kostenkurven",
    free: false,
  },
  {
    id: "kk-05",
    topic: "Kostenminimierung und Kostenkurven",
    type: "mc",
    prompt:
      "Eine Technologie weist über den gesamten relevanten Outputbereich zunehmende Skalenerträge auf. Welche Aussage über die zugehörige Kostenfunktion trifft zu?",
    options: [
      "Die Durchschnittskosten fallen mit steigendem Output — Grundlage für ein natürliches Monopol",
      "Die Durchschnittskosten steigen mit steigendem Output",
      "Die Durchschnittskosten sind konstant, unabhängig vom Output",
      "Es lässt sich keine allgemeine Aussage treffen",
    ],
    correctIndex: 0,
    explanation:
      "Zunehmende Skalenerträge bedeuten, dass eine Verdopplung der Inputs den Output mehr als verdoppelt — das überträgt sich auf durchgehend fallende Durchschnittskosten, was ein natürliches Monopol begünstigt.",
    source: "Konzeptfrage zu Skalenerträgen und Kosten",
    free: false,
  },

  // ---------- Optimale Entscheidung und Nachfrage ----------
  {
    id: "en-01",
    topic: "Optimale Entscheidung und Nachfrage",
    type: "mc",
    prompt:
      "Ein Konsument hat die Nutzenfunktion u(x1,x2) = min{x1, x2²}. Bei Preisen (p1,p2,m) = (1,2,24) — welches Bündel wählt er?",
    options: [
      "x1 = 16, x2 = 4 (da im Optimum x1 = x2² gelten muss)",
      "x1 = 24, x2 = 0",
      "x1 = 12, x2 = 6",
      "x1 = 0, x2 = 12",
    ],
    correctIndex: 0,
    explanation:
      "Bei Leontief-artigen Präferenzen gilt im Optimum x1 = x2² (kein Gut wird 'verschwendet'). Einsetzen in die Budgetgleichung x1+2x2=24: x2²+2x2=24 ⟹ x2²+2x2−24=0 ⟹ x2=4 (positive Lösung). Damit x1=x2²=16. Probe: 1·16+2·4=16+8=24 ✓.",
    source: "Angepasst nach Übungsblatt 3, Aufgabe 2, Zahlen geändert",
    free: false,
  },
  {
    id: "en-02",
    topic: "Optimale Entscheidung und Nachfrage",
    type: "mc",
    prompt:
      "Eine Konsumentin hat die Nutzenfunktion u(x1,x2) = 6√x1 + x2. Preise p1=3, p2=1. Bei welchem Einkommen liegt eine Randlösung vor (x2*=0), und ab welchem Einkommen ein inneres Optimum?",
    options: [
      "Für m unterhalb eines kritischen Werts liegt eine Randlösung vor (x2*=0); oberhalb ein inneres Optimum mit x1* konstant und x2*>0 steigend im Einkommen",
      "Es gibt für keinen Einkommenswert eine Randlösung",
      "x1* ist immer null, unabhängig vom Einkommen",
      "Das Optimum ist für jedes Einkommen eindeutig innen, nie am Rand",
    ],
    correctIndex: 0,
    explanation:
      "Bei quasilinearer Nutzenfunktion u=v(x1)+x2 gilt im inneren Optimum v'(x1)=p1/p2, was x1* unabhängig vom Einkommen fixiert (hier x1*=(6/(2·3))²=1) solange m groß genug ist, um dies plus x2*≥0 zu finanzieren; ist m zu klein, wird nur Gut 1 konsumiert (Randlösung x2*=0).",
    source: "Angepasst nach Übungsblatt 4, Aufgabe 1, Zahlen geändert",
    free: false,
  },
  {
    id: "en-03",
    topic: "Optimale Entscheidung und Nachfrage",
    type: "mc",
    prompt:
      "Für die Nutzenfunktionen u(x1,x2)=3x1+x2 (perfekte Substitute), u(x1,x2)=2ln x1+3ln x2 (Cobb-Douglas) und u(x1,x2)=min{x1,3x2} (Leontief): Was fällt auf, wenn man die Einkommensexpansionspfade vergleicht?",
    options: [
      "Sie unterscheiden sich fundamental in ihrer Form (Randlösung/Kante der Achse, Strahl durch den Ursprung mit konstantem Verhältnis, bzw. Strahl mit festem Mengenverhältnis) — je nach Substitutionsverhalten der Präferenzen",
      "Alle drei Einkommensexpansionspfade sind identisch",
      "Alle drei sind horizontale Geraden",
      "Der Einkommensexpansionspfad existiert nur für die Cobb-Douglas-Nutzenfunktion",
    ],
    correctIndex: 0,
    explanation:
      "Bei perfekten Substituten liegt der Expansionspfad (meist) auf einer Achse (Randlösung, abhängig vom Preisverhältnis), bei Cobb-Douglas ist er ein Strahl mit konstanten Ausgabenanteilen, bei Leontief ein Strahl mit fixem Mengenverhältnis (hier x1=3x2) — die zugrundeliegende Substituierbarkeit der Präferenzen bestimmt die Form.",
    source: "Angepasst nach Übungsblatt 4, Aufgabe 2, Zahlen geändert",
    free: false,
  },
  {
    id: "en-04",
    topic: "Optimale Entscheidung und Nachfrage",
    type: "mc",
    prompt:
      "Die Nachfragefunktion nach Gut 1 sei x1*(p1,p2,m) = a·m + b·p1 + c·p2. Für welche Parameterwerte ist Gut 1 ein Giffen-Gut?",
    options: [
      "Wenn a<0 (inferior) UND zusätzlich b>0 (Menge steigt mit eigenem Preis)",
      "Immer wenn b>0, unabhängig vom Vorzeichen von a",
      "Immer wenn a>0",
      "Nur wenn c=0",
    ],
    correctIndex: 0,
    explanation:
      "Ein Giffen-Gut ist stets auch inferior (a<0), und zusätzlich muss die Nachfrage MIT dem eigenen Preis steigen (b>0) — beide Bedingungen zusammen sind nötig; b>0 allein reicht nicht, wenn a≥0 gilt.",
    source: "Angepasst nach Übungsblatt 4, Aufgabe 5a",
    free: false,
  },

  // ---------- Konsumentenrente, Marktnachfrage und Marktgleichgewicht ----------
  {
    id: "km-01",
    topic: "Konsumentenrente, Marktnachfrage und Marktgleichgewicht",
    type: "numeric",
    unit: "Preis (GE)",
    prompt:
      "Auf einem Partialmarkt gelten die Nachfragefunktion D(p) = 80 − 3p und die Angebotsfunktion S(p) = 5p. Wie hoch ist der Gleichgewichtspreis p*?",
    correctValue: 10,
    explanation: "80−3p=5p ⟹ 80=8p ⟹ p*=10.",
    source: "Angepasst nach Übungsblatt 7, Aufgabe 4a, Zahlen geändert",
    free: false,
  },
  {
    id: "km-02",
    topic: "Konsumentenrente, Marktnachfrage und Marktgleichgewicht",
    type: "numeric",
    unit: "Einheiten",
    prompt:
      "Für denselben Markt (D(p)=80−3p, S(p)=5p, p*=10) — wie hoch ist die Gleichgewichtsmenge X*?",
    correctValue: 50,
    explanation: "X* = S(p*) = 5·10 = 50 (Kontrolle: D(10)=80−30=50, stimmt überein).",
    source: "Angepasst nach Übungsblatt 7, Aufgabe 4a, Zahlen geändert",
    free: false,
  },
  {
    id: "km-03",
    topic: "Konsumentenrente, Marktnachfrage und Marktgleichgewicht",
    type: "mc",
    prompt:
      "Auf dem Markt aus den vorigen Aufgaben wird den Konsumenten eine Mengensteuer von 8 GE pro Einheit auferlegt. Was passiert mit der gehandelten Menge im Vergleich zu vorher (X*=50)?",
    options: [
      "Sie sinkt (der Wohlfahrtsverlust entsteht genau durch diesen Mengenrückgang)",
      "Sie bleibt exakt bei 50",
      "Sie steigt auf über 50",
      "Sie fällt auf null",
    ],
    correctIndex: 0,
    explanation:
      "Eine Steuer verringert stets die gehandelte Menge unter das steuerfreie Gleichgewichtsniveau (sofern beide Marktseiten preisreagibel sind) — dieser Mengenrückgang ist die Quelle des Deadweight Loss.",
    source: "Angepasst nach Übungsblatt 7, Aufgabe 4b/c, Zahlen geändert",
    free: false,
  },
  {
    id: "km-04",
    topic: "Konsumentenrente, Marktnachfrage und Marktgleichgewicht",
    type: "numeric",
    unit: "(dimensionslos)",
    prompt:
      "Die Nachfragefunktion nach einem Gut sei D(p,m) = 6 − 3p + m/50. Bei p=2 und m=200: Wie hoch ist die Einkommenselastizität der Nachfrage an dieser Stelle? (∂D/∂m = 1/50)",
    correctValue: 1,
    tolerance: 0.05,
    explanation:
      "D(2,200) = 6−6+200/50 = 0+4 = 4. Einkommenselastizität η = (∂D/∂m)·(m/D) = (1/50)·(200/4) = (1/50)·50 = 1.",
    source: "Angepasst nach Übungsblatt 7, Aufgabe 5, Zahlen geändert",
    free: false,
  },
  {
    id: "km-05",
    topic: "Konsumentenrente, Marktnachfrage und Marktgleichgewicht",
    type: "mc",
    prompt:
      "Ein Konsument mit quasilinearem Nutzen u(x1,x2)=v(x1)+x2 erreicht am optimalen Bündel den Nutzen u(x1*,x2*). Wie hängt dieser mit der Konsumentenrente KR(p1) zusammen?",
    options: [
      "u(x1*,x2*) = m + KR(p1)",
      "u(x1*,x2*) = m − KR(p1)",
      "u(x1*,x2*) = KR(p1) allein, unabhängig vom Einkommen",
      "Es besteht kein systematischer Zusammenhang",
    ],
    correctIndex: 0,
    explanation:
      "Da der Grenznutzen von Gut 2 (Geld) konstant 1 ist, entspricht der erreichte Nutzen exakt dem Einkommen plus der in Geld gemessenen Konsumentenrente aus dem Konsum von Gut 1.",
    source: "Angepasst nach Übungsblatt 7, Aufgabe 3c",
    free: false,
  },

  // ---------- Bekundete Präferenzen und Slutsky-Zerlegung ----------
  {
    id: "bs-01",
    topic: "Bekundete Präferenzen und Slutsky-Zerlegung",
    type: "mc",
    prompt:
      "Ein Konsument kauft bei Preisen (p1,p2)=(6,2) das Bündel (2,6). Bei Preisen (p1,p2)=(4,4) kauft er (1,8). Verletzt dies WARP?",
    options: [
      "Ja — beide Bündel waren zu den jeweils anderen Preisen ebenfalls erschwinglich, jedes wurde also bekundet gegenüber dem anderen vorgezogen",
      "Nein, da bei (6,2) das Bündel (1,8) gar nicht erschwinglich war",
      "Nein, da bei (4,4) das Bündel (2,6) gar nicht erschwinglich war",
      "WARP lässt sich nur bei identischen Preisen in beiden Situationen prüfen",
    ],
    correctIndex: 0,
    explanation:
      "Einkommen in Situation 1: 6·2+2·6=24. Kosten von (1,8) zu Preisen (6,2): 6·1+2·8=22 ≤ 24 — (1,8) war erschwinglich, doch (2,6) wurde gewählt: (2,6) wird bekundet gegenüber (1,8) vorgezogen. Einkommen in Situation 2: 4·1+4·8=36. Kosten von (2,6) zu Preisen (4,4): 4·2+4·6=32 ≤ 36 — (2,6) war ebenfalls erschwinglich, doch (1,8) wurde gewählt: (1,8) wird bekundet gegenüber (2,6) vorgezogen. Da beide Bündel sich gegenseitig bekundet vorgezogen werden, liegt ein WARP-Verstoß vor.",
    source: "Angepasst nach Übungsblatt 4, Aufgabe 4, Zahlen geändert",
    free: false,
  },
  {
    id: "bs-02",
    topic: "Bekundete Präferenzen und Slutsky-Zerlegung",
    type: "numeric",
    unit: "Flaschen Olivenöl",
    prompt:
      "Frau Calder liebt italienisches Olivenöl. Ihre Nachfragefunktion ist x1 = m/40 − 3p1. Ihr Einkommen beträgt 4000 GE, der Preis pro Flasche 20 GE. Wie viele Flaschen kauft sie?",
    correctValue: 40,
    explanation: "x1 = 4000/40 − 3·20 = 100 − 60 = 40.",
    source: "Angepasst nach Übungsblatt 6 (Slutsky-Zerlegung), Aufgabe 1a, Szenario und Zahlen geändert",
    free: false,
  },
  {
    id: "bs-03",
    topic: "Bekundete Präferenzen und Slutsky-Zerlegung",
    type: "numeric",
    unit: "Flaschen Olivenöl",
    prompt:
      "Für Frau Calder (x1 = m/40 − 3p1, m=4000) steigt der Preis pro Flasche Olivenöl von 20 auf 24 GE. Wie viele Flaschen kauft sie bei unverändertem Einkommen jetzt?",
    correctValue: 28,
    explanation: "x1 = 4000/40 − 3·24 = 100 − 72 = 28.",
    source: "Angepasst nach Übungsblatt 6 (Slutsky-Zerlegung), Aufgabe 1b, Szenario und Zahlen geändert",
    free: false,
  },
  {
    id: "bs-04",
    topic: "Bekundete Präferenzen und Slutsky-Zerlegung",
    type: "mc",
    prompt:
      "Welche der folgenden Aussagen über Güterarten ist KORREKT?",
    options: [
      "Ein Giffen-Gut ist immer auch ein inferiores Gut",
      "Ein inferiores Gut ist immer auch ein Giffen-Gut",
      "Ein gewöhnliches Gut ist immer auch ein normales Gut",
      "Ein Giffen-Gut ist immer auch ein normales Gut",
    ],
    correctIndex: 0,
    explanation:
      "Ein Giffen-Gut setzt voraus, dass der Einkommenseffekt den Substitutionseffekt überkompensiert, was nur bei einem inferioren Gut möglich ist — also ist jedes Giffen-Gut automatisch inferior. Die Umkehrung gilt nicht: die meisten inferioren Güter sind KEINE Giffen-Güter.",
    source: "Angepasst nach Übungsblatt 6 (Slutsky-Zerlegung), Aufgabe 5",
    free: false,
  },
  {
    id: "bs-05",
    topic: "Bekundete Präferenzen und Slutsky-Zerlegung",
    type: "mc",
    prompt:
      "Bei der Slutsky-Zerlegung wird ein hypothetisches Einkommen m' konstruiert. Wofür steht dieses m'?",
    options: [
      "Das Einkommen, bei dem der Haushalt sich zu den NEUEN Preisen gerade noch sein URSPRÜNGLICHES Güterbündel leisten könnte",
      "Das Einkommen, bei dem der Haushalt exakt sein ursprüngliches Nutzenniveau erreicht",
      "Das durchschnittliche Einkommen aller Haushalte im Markt",
      "Das Einkommen nach Abzug aller Steuern",
    ],
    correctIndex: 0,
    explanation:
      "Die Slutsky-Kompensation hält die Kaufkraft in Bezug auf das ALTE Bündel konstant (nicht das Nutzenniveau — das wäre die Hicks-Kompensation).",
    source: "Konzeptfrage zur Slutsky-Zerlegung",
    free: false,
  },

  // ---------- Tausch und Wohlfahrtstheorie ----------
  {
    id: "tw-01",
    topic: "Tausch und Wohlfahrtstheorie",
    type: "mc",
    prompt:
      "In einer Tauschwirtschaft mit zwei Gütern und zwei Haushalten A und B gilt an einer Allokation MRS^A = MRS^B. Was folgt daraus?",
    options: [
      "Die Allokation ist Pareto-effizient (liegt auf der Kontraktkurve)",
      "Die Allokation ist notwendigerweise neidfrei",
      "Die Allokation ist notwendigerweise ein Walrasianisches Gleichgewicht zur Gleichverteilung",
      "Beide Haushalte konsumieren identische Güterbündel",
    ],
    correctIndex: 0,
    explanation:
      "Gleiche Grenzraten der Substitution bedeuten, dass die Indifferenzkurven beider Haushalte sich berühren statt schneiden — es gibt keinen weiteren Tausch mehr, der beide (schwach) besserstellen könnte: die Allokation ist Pareto-effizient.",
    source: "Konzeptfrage zur Edgeworth-Box",
    free: false,
  },
  {
    id: "tw-02",
    topic: "Tausch und Wohlfahrtstheorie",
    type: "mc",
    prompt:
      "Zwei Haushalte A und B mit Anfangsausstattung (ωA1,ωA2)=(ωB1,ωB2)=(1/2,1/2) handeln in einer Tauschwirtschaft frei zu Marktpreisen. Was garantiert der Erste Hauptsatz der Wohlfahrtsökonomik über das resultierende Walrasianische Gleichgewicht?",
    options: [
      "Es ist Pareto-effizient",
      "Es ist immer die Gleichverteilung selbst",
      "Beide Haushalte erreichen exakt denselben Nutzen",
      "Es existiert kein Gleichgewicht bei symmetrischer Ausstattung",
    ],
    correctIndex: 0,
    explanation:
      "Der Erste Hauptsatz besagt, dass jedes Walrasianische Gleichgewicht Pareto-effizient ist — unabhängig von der Ausgangsausstattung.",
    source: "Konzeptfrage zu den Hauptsätzen der Wohlfahrtsökonomik",
    free: false,
  },
  {
    id: "tw-03",
    topic: "Tausch und Wohlfahrtstheorie",
    type: "mc",
    prompt:
      "Eine Allokation ist Pareto-effizient, aber Haushalt A zieht das Bündel von Haushalt B strikt seinem eigenen vor. Ist diese Allokation neidfrei?",
    options: [
      "Nein — Neidfreiheit verlangt zusätzlich, dass kein Haushalt das Bündel eines anderen vorzieht",
      "Ja, jede Pareto-effiziente Allokation ist automatisch neidfrei",
      "Ja, solange beide Haushalte dieselbe Nutzenfunktion haben",
      "Neidfreiheit ist nur bei mehr als zwei Haushalten definiert",
    ],
    correctIndex: 0,
    explanation:
      "Pareto-Effizienz und Neidfreiheit sind unabhängige Kriterien — eine Allokation kann effizient sein, ohne neidfrei zu sein (z. B. wenn ein Haushalt sehr viel mehr besitzt als der andere).",
    source: "Konzeptfrage zur Neidfreiheit",
    free: false,
  },
  {
    id: "tw-04",
    topic: "Tausch und Wohlfahrtstheorie",
    type: "mc",
    prompt:
      "Zwei Haushalte tauschen zwei Güter. Haushalt A hat die Nutzenfunktion uA(x1,x2)=min{x1,x2}, Haushalt B hat uB(x1,x2)=x1·x2. Anfangsausstattung A: (3,1), B: (1,2). Was lässt sich über die Kontraktkurve sagen?",
    options: [
      "Sie besteht aus allen Allokationen, an denen sich die (rechtwinkligen bzw. hyperbelförmigen) Indifferenzkurven beider Haushalte gerade berühren, nicht schneiden",
      "Sie ist ein einzelner, eindeutiger Punkt",
      "Sie existiert nicht, da die Nutzenfunktionen unterschiedlichen Typs sind",
      "Sie verläuft immer exakt durch die Anfangsausstattung",
    ],
    correctIndex: 0,
    explanation:
      "Auch bei unterschiedlichen Nutzenfunktionstypen ist die Kontraktkurve die Menge aller Punkte, an denen die Indifferenzkurven beider Haushalte tangential aufeinandertreffen (bzw. bei Leontief-Präferenzen die Knickpunkte betreffen) — sie ist im Allgemeinen eine ganze Kurve, kein einzelner Punkt.",
    source: "Angepasst nach Übungsblatt 7, Aufgabe 1, Szenario und Zahlen geändert",
    free: false,
  },

  // ---------- Angebot der Unternehmung und Marktangebot der Branche ----------
  {
    id: "am-01",
    topic: "Angebot der Unternehmung und Marktangebot der Branche",
    type: "mc",
    prompt:
      "Eine Firma unter vollständiger Konkurrenz hat die Kostenfunktion C(y) = 8y² + 6y + F für y>0 und C(0)=0 (F sind Quasi-Fixkosten). Bei welchem Preis p produziert die Firma gerade noch eine positive Menge (Stilllegungsgrenze)?",
    options: [
      "Bei p ≥ AVC(y) für die jeweils gewinnmaximale Menge — die Firma produziert, solange der Preis mindestens die durchschnittlichen variablen Kosten deckt",
      "Immer, unabhängig vom Preis, solange F>0",
      "Nur wenn p > AC(y) für jedes y",
      "Nie, solange F>0",
    ],
    correctIndex: 0,
    explanation:
      "Die Stilllegungsbedingung verlangt p ≥ min AVC(y) — Fixkosten (auch Quasi-Fixkosten) sind für die Entscheidung, OB produziert wird, irrelevant, da sie ohnehin anfallen bzw. bei Nichtproduktion vermieden werden (hier: C(0)=0, F fällt nur bei y>0 an, verändert also direkt die Fixkosten-Überlegung, ändert aber nichts an der Grundregel p≥AVC).",
    source: "Angepasst nach Übungsblatt 8, Aufgabe 5, Zahlen geändert",
    free: false,
  },
  {
    id: "am-02",
    topic: "Angebot der Unternehmung und Marktangebot der Branche",
    type: "mc",
    prompt:
      "Was ist die Produzentenrente einer Firma geometrisch?",
    options: [
      "Die Fläche zwischen dem Marktpreis und der (steigenden) Grenzkostenkurve bis zur angebotenen Menge",
      "Die Fläche zwischen der Nachfragekurve und dem Marktpreis",
      "Die Gesamtkosten der Firma",
      "Der gesamte Erlös der Firma",
    ],
    correctIndex: 0,
    explanation: "Produzentenrente = Erlös − variable Kosten = Fläche zwischen Preis und Grenzkostenkurve bis zur angebotenen Menge.",
    source: "Konzeptfrage zur Produzentenrente",
    free: false,
  },
  {
    id: "am-03",
    topic: "Angebot der Unternehmung und Marktangebot der Branche",
    type: "numeric",
    unit: "Einheiten",
    prompt:
      "Eine Firma hat die Kostenfunktion C(y) = 6y² + 200 und agiert bei einem Marktpreis p = 60. Wie hoch ist die gewinnmaximale Angebotsmenge?",
    correctValue: 5,
    explanation: "MC(y)=12y. p=MC ⟹ 60=12y ⟹ y*=5.",
    source: "Angepasst nach Übungsblatt 8, Aufgabe 4, Zahlen geändert",
    free: false,
  },
  {
    id: "am-04",
    topic: "Angebot der Unternehmung und Marktangebot der Branche",
    type: "mc",
    prompt:
      "Wie erhält man das Marktangebot einer Branche mit vielen einzelnen Firmen?",
    options: [
      "Durch horizontale Summation der individuellen Angebotsfunktionen bei jedem Preis",
      "Durch vertikale Summation der individuellen Angebotsfunktionen",
      "Durch Multiplikation der Angebotsmenge einer repräsentativen Firma mit der Anzahl der Firmen, unabhängig von deren Kostenstruktur",
      "Durch Mittelwertbildung der Grenzkosten aller Firmen",
    ],
    correctIndex: 0,
    explanation: "Bei gegebenem Preis addiert man die von jeder einzelnen Firma angebotene Menge — horizontale Summation, analog zur Marktnachfrage.",
    source: "Konzeptfrage zum Marktangebot",
    free: false,
  },

  // ---------- Oligopoltheorie ----------
  {
    id: "og-01",
    topic: "Oligopoltheorie",
    type: "numeric",
    unit: "Einheiten",
    prompt:
      "Zwei Firmen produzieren mit konstanten Grenzkosten c1=10 und c2=20 und sehen sich der inversen Marktnachfrage p(y)=max{60−y,0} gegenüber. Firma 1 ist Stackelberg-Leader. Wie hoch ist die von Firma 1 produzierte Menge im Stackelberg-Gleichgewicht?",
    correctValue: 30,
    explanation:
      "Reaktionsfunktion des Followers: Firma 2 maximiert (60−y1−y2−20)y2, F.O.C. liefert y2(y1) = (40−y1)/2. Leader setzt dies ein: π1 = (60−y1−y2(y1)−10)y1 = (50−y1−(40−y1)/2)y1 = ((60−y1)/2)y1 = 30y1 − y1²/2. F.O.C.: 30−y1=0 ⟹ y1*=30.",
    source: "Angepasst nach Übungsblatt 10 (Oligopol), Aufgabe 1, Zahlen geändert",
    free: false,
  },
  {
    id: "og-02",
    topic: "Oligopoltheorie",
    type: "mc",
    prompt:
      "Warum erzielt der Stackelberg-Leader im Gleichgewicht immer mindestens so viel Gewinn wie im Cournot-Gleichgewicht?",
    options: [
      "Weil der Leader jederzeit auch die Cournot-Menge wählen könnte — er hat also mindestens die gleichen Optionen wie im Cournot-Spiel plus zusätzliche",
      "Weil der Follower immer weniger produziert als im Cournot-Gleichgewicht",
      "Weil die Marktnachfrage im Stackelberg-Modell höher ist",
      "Das ist nicht allgemein richtig",
    ],
    correctIndex: 0,
    explanation:
      "Der Leader könnte im Stackelberg-Spiel immer die Cournot-Menge wählen und würde dann (da der Follower darauf mit der Cournot-Menge reagiert) genau den Cournot-Gewinn erzielen — durch optimale Wahl seiner Menge kann er sich also nur verbessern oder gleich bleiben, nie verschlechtern.",
    source: "Angepasst nach Übungsblatt 10 (Oligopol), Aufgabe 4",
    free: false,
  },
  {
    id: "og-03",
    topic: "Oligopoltheorie",
    type: "mc",
    prompt:
      "Zwei identische Firmen mit Grenzkosten c produzieren bei linearer inverser Nachfrage p(y)=a−by. Was gilt für den GESAMTEN Output im Vergleich zwischen Stackelberg- und Cournot-Gleichgewicht?",
    options: [
      "Der Gesamtoutput ist im Stackelberg-Gleichgewicht GRÖSSER als im Cournot-Gleichgewicht",
      "Der Gesamtoutput ist identisch in beiden Gleichgewichten",
      "Der Gesamtoutput ist im Stackelberg-Gleichgewicht KLEINER",
      "Es lässt sich ohne konkrete Zahlen keine Aussage treffen",
    ],
    correctIndex: 0,
    explanation:
      "Im symmetrischen linearen Fall gilt yCournot,gesamt = 2(a−c)/(3b) < yStackelberg,gesamt = 3(a−c)/(4b) — der Leader produziert mehr, ohne dass der Follower dies vollständig kompensiert, sodass der Gesamtoutput steigt und der Preis entsprechend sinkt.",
    source: "Angepasst nach Übungsblatt 10 (Oligopol), Aufgabe 5c/d",
    free: false,
  },
  {
    id: "og-04",
    topic: "Oligopoltheorie",
    type: "mc",
    prompt:
      "Zwei Firmen mit identischen konstanten Grenzkosten konkurrieren simultan über den Preis bei einem homogenen Gut (Bertrand-Wettbewerb). Was ist das Ergebnis im Nash-Gleichgewicht?",
    options: [
      "Beide setzen den Preis gleich den Grenzkosten (p1=p2=c), der gesamte Gewinn wird wegkonkurriert",
      "Beide setzen den Monopolpreis",
      "Es existiert kein Nash-Gleichgewicht",
      "Die Firmen teilen sich den Markt automatisch hälftig zu einem Preis über den Grenzkosten",
    ],
    correctIndex: 0,
    explanation:
      "Das Bertrand-Paradoxon: Schon zwei Firmen mit identischen Grenzkosten reichen aus, damit im Preiswettbewerb p=c resultiert, da jede Firma bei einem Preis über c einen Anreiz hat, geringfügig zu unterbieten.",
    source: "Konzeptfrage zum Bertrand-Modell",
    free: false,
  },
  {
    id: "og-05",
    topic: "Oligopoltheorie",
    type: "mc",
    prompt:
      "Ein Kartell aus zwei Firmen produziert gemeinsam die gewinnmaximale (Monopol-)Menge. Warum ist diese Vereinbarung ohne Bestrafungsmechanismus instabil?",
    options: [
      "Jede einzelne Firma hat einen kurzfristigen Anreiz, MEHR als ihren Kartellanteil zu produzieren, solange die andere Firma an der Abmachung festhält",
      "Die Gesamtmenge des Kartells ist immer geringer als im Wettbewerbsgleichgewicht",
      "Kartelle sind immer sofort öffentlich bekannt und deshalb wirkungslos",
      "Der Marktpreis sinkt im Kartell automatisch unter die Grenzkosten",
    ],
    correctIndex: 0,
    explanation:
      "Da der Grenzerlös bei der Kartellmenge über den eigenen Grenzkosten liegt (aus Sicht der einzelnen Firma), lohnt sich für jede Firma eine einseitige Mengenausweitung — ohne glaubwürdige Bestrafung (Trigger-Strategie) bricht die Kollusion daher zusammen.",
    source: "Konzeptfrage zur Stabilität von Kartellen",
    free: false,
  },

  // ---------- Kaufen, Verkaufen und intertemporale Entscheidung ----------
  {
    id: "ki-01",
    topic: "Kaufen, Verkaufen und intertemporale Entscheidung",
    type: "mc",
    prompt:
      "Ein Haushalt hat eine Anfangsausstattung (ω1,ω2) statt eines Geldeinkommens. Am optimalen Bündel konsumiert er mehr von Gut 1 als ω1. Wie wird er bezeichnet, und wie wirkt sich eine Preissenkung von Gut 1 auf ihn aus?",
    options: [
      "Er ist Nettonachfrager von Gut 1 — eine Preissenkung von Gut 1 kann ihn nie schlechterstellen",
      "Er ist Nettoanbieter von Gut 1 — eine Preissenkung schadet ihm immer",
      "Er ist indifferent gegenüber Preisänderungen von Gut 1",
      "Die Klassifikation hängt nur vom Gesamteinkommen ab, nicht von der Konsummenge",
    ],
    correctIndex: 0,
    explanation:
      "Konsumiert der Haushalt mehr als seine Ausstattung an Gut 1, kauft er netto zu (Nettonachfrager) — eine Preissenkung dieses Gutes macht seinen Netto-Einkauf günstiger und kann ihn nie schlechterstellen.",
    source: "Konzeptfrage zu Kaufen und Verkaufen",
    free: false,
  },
  {
    id: "ki-02",
    topic: "Kaufen, Verkaufen und intertemporale Entscheidung",
    type: "mc",
    prompt:
      "Ein Arbeitsanbieter teilt eine Zeitausstattung T zwischen Arbeit und Freizeit R auf. Sein Konsum ist C = w(T−R) + m. Wie ist diese Situation im Rahmen des Nettoanbieter-Modells zu interpretieren?",
    options: [
      "Freizeit ist die 'Anfangsausstattung', die der Agent teilweise gegen Konsum verkauft, indem er arbeitet",
      "Arbeit ist ein reines Konsumgut ohne Bezug zur Anfangsausstattung",
      "Der Lohnsatz w hat keinen Effekt auf die Budgetgerade",
      "Freizeit kann in diesem Modell nicht als Gut behandelt werden",
    ],
    correctIndex: 0,
    explanation:
      "Die Zeitausstattung T entspricht der Anfangsausstattung an 'Freizeit'; jede Arbeitsstunde ist ein 'Verkauf' von Freizeit zum Preis w, dessen Erlös in Konsum umgewandelt wird.",
    source: "Konzeptfrage zum Arbeitsangebotsmodell",
    free: false,
  },
  {
    id: "ki-03",
    topic: "Kaufen, Verkaufen und intertemporale Entscheidung",
    type: "mc",
    prompt:
      "Ein Haushalt hat Geldausstattungen (m1,m2)=(1000,2100) in Periode 1 bzw. 2 und kann zum Zinssatz r=5% umschichten. Konsumiert er in Periode 1 exakt c1=1000, wie hoch ist sein maximal möglicher Konsum in Periode 2 (c2), wenn er in Periode 1 nichts zusätzlich spart oder leiht?",
    correctValue: 2100,
    explanation:
      "Bleibt der Konsum in Periode 1 gleich der Ausstattung (c1=m1), wird nichts umgeschichtet, und c2 entspricht exakt der Ausstattung m2 = 2100.",
    source: "Konzeptaufgabe zur intertemporalen Budgetgeraden",
    free: false,
  },
  {
    id: "ki-04",
    topic: "Kaufen, Verkaufen und intertemporale Entscheidung",
    type: "mc",
    prompt:
      "Sinkt der Marktzinssatz r, wie wirkt sich das auf einen Schuldner aus (der heute mehr konsumiert als seine Ausstattung m1)?",
    options: [
      "Sein Nutzen steigt strikt — er profitiert eindeutig von niedrigeren Zinsen",
      "Sein Nutzen sinkt immer",
      "Der Effekt ist immer unbestimmt, wie beim Sparer",
      "Sein Nutzen bleibt exakt unverändert",
    ],
    correctIndex: 0,
    explanation:
      "Ein Schuldner profitiert von niedrigeren Zinsen eindeutig (analog zum Nettonachfrager-Argument): Er zahlt weniger Zinsen auf seine Schuld und bleibt auch bei geänderten Preisen Schuldner.",
    source: "Konzeptfrage zu Zinsänderungen",
    free: false,
  },

  // ---------- Spieltheorie ----------
  {
    id: "sp-01",
    topic: "Spieltheorie",
    type: "mc",
    prompt:
      "Zwei Fischereibetriebe teilen sich einen See und entscheiden unabhängig, ob sie 'viel' oder 'wenig' fischen. Fischen beide 'viel', sinkt der Fischbestand langfristig und beide erzielen geringeren Gewinn als bei gemeinsamer Zurückhaltung — trotzdem ist 'viel fischen' für jeden Betrieb einzeln die dominante Strategie. Um welches Spielmuster handelt es sich?",
    options: [
      "Ein Gefangenendilemma / eine Tragik der Allmende",
      "Ein reines Koordinationsspiel ohne Konfliktpotenzial",
      "Ein Spiel ohne jegliches Nash-Gleichgewicht",
      "Ein rein kooperatives Spiel ohne Anreizproblem",
    ],
    correctIndex: 0,
    explanation:
      "Das Muster — individuell dominante Strategie führt zu einem kollektiv schlechteren Ergebnis als Kooperation — ist das Kennzeichen des Gefangenendilemmas bzw. der Tragik der Allmende bei gemeinsam genutzten Ressourcen.",
    source: "Angepasst nach Vorlesungsbeispiel (Übernutzung gemeinsamer Ressourcen), Szenario geändert",
    free: false,
  },
  {
    id: "sp-02",
    topic: "Spieltheorie",
    type: "mc",
    prompt:
      "Ein Paar möchte den Abend gemeinsam verbringen und entscheidet unabhängig zwischen 'Kino' und 'Konzert'. Beide bevorzugen, zusammen zu sein, aber Person 1 bevorzugt bei Übereinstimmung das Kino, Person 2 das Konzert. Wie viele reine Nash-Gleichgewichte hat dieses 'Battle of the Sexes'-Spiel?",
    options: [
      "Zwei — (Kino, Kino) und (Konzert, Konzert)",
      "Keines — nur ein gemischtes Gleichgewicht existiert",
      "Genau eines, das für beide Spieler gleich gut ist",
      "Unendlich viele",
    ],
    correctIndex: 0,
    explanation:
      "Bei Koordinationsspielen wie Battle of the Sexes gibt es typischerweise zwei reine Nash-Gleichgewichte (beide koordinieren auf dieselbe Option), zusätzlich zu einem gemischten Gleichgewicht — aber keine dominante Strategie für einen der Spieler.",
    source: "Konzeptfrage zu Koordinationsspielen",
    free: false,
  },
  {
    id: "sp-03",
    topic: "Spieltheorie",
    type: "mc",
    prompt:
      "Bei einem symmetrischen Elfmeterschießen wählen Torhüter und Schütze simultan zwischen 'links' und 'rechts'. Es existiert kein Gleichgewicht in reinen Strategien. Was folgt daraus?",
    options: [
      "Im Gleichgewicht mischen beide Spieler mit bestimmten Wahrscheinlichkeiten zwischen ihren Strategien (gemischtes Gleichgewicht), im symmetrischen Fall je 1/2:1/2",
      "Das Spiel hat gar kein Nash-Gleichgewicht",
      "Ein Spieler wird immer 'links' wählen",
      "Das Spiel lässt sich nicht mit Spieltheorie modellieren",
    ],
    correctIndex: 0,
    explanation:
      "Existiert kein Gleichgewicht in reinen Strategien, garantiert der Existenzsatz von Nash trotzdem ein Gleichgewicht in gemischten Strategien — im symmetrischen Elfmeterspiel mischt jeder Spieler mit Wahrscheinlichkeit 1/2 zwischen den beiden Ecken.",
    source: "Konzeptfrage zu gemischten Strategien",
    free: false,
  },
  {
    id: "sp-04",
    topic: "Spieltheorie",
    type: "mc",
    prompt:
      "Ein etablierter Anbieter kann auf den Markteintritt eines Konkurrenten mit Kampfpreisen ('Bestrafung') oder mit Tolerieren reagieren. In Normalform hat das Spiel zwei Nash-Gleichgewichte: 'Eintritt & Tolerieren' sowie 'Kein Eintritt & Drohung mit Bestrafung'. Welches ist teilspielperfekt?",
    options: [
      "Nur 'Eintritt & Tolerieren' — die Bestrafungsdrohung ist nicht glaubwürdig, da sie dem Etablierten selbst schaden würde",
      "Nur 'Kein Eintritt & Drohung mit Bestrafung'",
      "Beide sind gleichermaßen teilspielperfekt",
      "Keines der beiden ist ein gültiges Nash-Gleichgewicht",
    ],
    correctIndex: 0,
    explanation:
      "Käme es tatsächlich zum Eintritt, wäre eine Bestrafung für den Etablierten selbst unprofitabel — die Drohung ist daher unglaubwürdig. Rückwärtsinduktion eliminiert dieses Gleichgewicht; nur 'Eintritt & Tolerieren' übersteht die Probe auf jedes Teilspiel.",
    source: "Konzeptfrage zum Markteintrittsspiel",
    free: false,
  },
];
