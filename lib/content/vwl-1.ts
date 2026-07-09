import type { SkriptChapter } from "./types";

// Hinweis zur Kapitelreihenfolge: Die Reihenfolge und Nummerierung hier
// folgt bewusst NICHT 1:1 der Reihenfolge der Vorlesungsfolien. Themen aus
// der Produktions- und Markttheorie sind zwischen die Kapitel der
// Haushaltstheorie gemischt statt in denselben Blöcken wie in der Vorlesung
// zu stehen, und die Nummerierung ist eigenständig.
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 — Markt und Budgetmenge ====================
  {
    id: "markt-budget",
    number: 1,
    title: "Markt und Budgetmenge",
    free: true,
    intro:
      "Die Mikroökonomik untersucht, wie einzelne Haushalte und Unternehmen Entscheidungen treffen und wie diese Entscheidungen über Märkte koordiniert werden. Wir beginnen mit dem einfachsten Marktmodell und der Budgetmenge — der Menge aller Güterbündel, die sich ein Haushalt bei gegebenen Preisen und gegebenem Einkommen überhaupt leisten kann.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Ein einfaches Marktmodell: Reservationspreise",
        body: [
          "Betrachten wir einen Markt für ein homogenes Gut (z. B. Stellplätze in einer Fahrradgarage), auf dem jeder potenzielle Nachfrager einen individuellen Reservationspreis hat — den höchsten Preis, den er bereit ist zu zahlen. Ordnet man alle Reservationspreise der Größe nach absteigend an, erhält man die Marktnachfragekurve: Bei einem Preis p fragen genau die Personen nach, deren Reservationspreis mindestens p beträgt.",
          "Ist die Anzahl der angebotenen Einheiten fest vorgegeben (vollkommen unelastisches Angebot), bestimmt sich der Gleichgewichtspreis dadurch, dass Angebot und Nachfrage sich gerade treffen. Bei einer diskreten (kleinen) Anzahl an Marktteilnehmern ist dieser Preis oft nicht eindeutig bestimmt, sondern liegt in einem ganzen Intervall zwischen dem Reservationspreis des letzten noch versorgten und des ersten nicht mehr versorgten Nachfragers.",
        ],
        terms: [
          {
            term: "Reservationspreis",
            definition: "Der maximale Preis, den ein einzelner Nachfrager für eine Einheit eines Gutes zu zahlen bereit ist.",
          },
          {
            term: "Marktnachfragekurve",
            definition: "Die absteigend sortierte Folge aller individuellen Reservationspreise — zeigt, wie viele Einheiten bei jedem Preis nachgefragt werden.",
          },
        ],
        examples: [
          "Sechs Studierende möchten je einen Platz in einem Fahrrad-Sharing-Programm mieten. Ihre Reservationspreise (in GE pro Monat) seien 22, 18, 15, 12, 8 und 5. Werden nur 3 Plätze angeboten, liegt der Gleichgewichtspreis irgendwo im Intervall (12, 15] — bei jedem Preis in diesem Bereich fragen genau die drei Studierenden mit den höchsten Reservationspreisen (22, 18, 15) nach.",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Monopol und Preisdiskriminierung im einfachen Marktmodell",
        body: [
          "Gehört das gesamte Angebot einem einzigen Anbieter (gewöhnlicher Monopolist), maximiert dieser seinen Gewinn, indem er nicht den markträumenden Preis wählt, sondern eine Menge zurückhält: Er bewegt sich entlang der Nachfragekurve so weit nach oben, bis der Grenzerlös einer zusätzlich verkauften Einheit gerade auf null fällt (bei Grenzkosten von null entspricht das dem Punkt mit der größten Fläche Preis mal Menge). Das Ergebnis ist im Allgemeinen nicht Pareto-effizient, da es Nachfrager gibt, deren Reservationspreis über dem Grenzkosten, aber unter dem Monopolpreis liegt und die deshalb leer ausgehen, obwohl ein Tausch beide Seiten besserstellen würde.",
          "Kennt der Anbieter dagegen die Reservationspreise aller Nachfrager individuell (perfekte/diskriminierende Preissetzung), kann er jedem genau seinen Reservationspreis in Rechnung stellen. Dann verkauft er an alle, deren Reservationspreis die Grenzkosten übersteigt — das Ergebnis ist wieder effizient, allerdings verteilt sich die gesamte Rente anders: Der Anbieter vereinnahmt die komplette Rente, die beim gewöhnlichen Monopol und bei vollständiger Konkurrenz teilweise bei den Nachfragern verbliebe.",
        ],
        terms: [
          {
            term: "Gewöhnlicher Monopolist",
            definition: "Ein Anbieter, der für alle verkauften Einheiten denselben Preis verlangt und diesen so wählt, dass sein Gewinn maximal wird.",
          },
          {
            term: "Diskriminierender Monopolist",
            definition: "Ein Anbieter, der die Reservationspreise der Nachfrager kennt und jedem individuell genau seinen Reservationspreis abverlangt.",
          },
        ],
      },
      {
        id: "1-3",
        heading: "1.3 Die Budgetmenge und die Budgetgerade",
        body: [
          "Ein Haushalt verfüge über ein Einkommen m und stehe vor Preisen p1 und p2 für zwei Güter. Die Budgetmenge ist die Menge aller Güterbündel (x1, x2), die er sich mit seinem Einkommen leisten kann: p1·x1 + p2·x2 ≤ m, x1, x2 ≥ 0. Der Rand dieser Menge — also die Bündel, bei denen das Einkommen exakt ausgeschöpft wird — heißt Budgetgerade.",
          "Die Steigung der Budgetgeraden ist −p1/p2: Gibt der Haushalt eine Einheit weniger von Gut 2 aus, kann er sich p2/p1 Einheiten mehr von Gut 1 leisten. Diese Steigung ist die Opportunitätskostenrate zwischen den beiden Gütern am Markt.",
        ],
        terms: [
          {
            term: "Budgetmenge",
            definition: "{(x1, x2) : p1·x1 + p2·x2 ≤ m, x1 ≥ 0, x2 ≥ 0} — alle bei gegebenem Einkommen und gegebenen Preisen erschwinglichen Güterbündel.",
          },
          {
            term: "Budgetgerade",
            definition: "Der Rand der Budgetmenge, also {(x1, x2) : p1·x1 + p2·x2 = m} — Güterbündel, bei denen das Einkommen vollständig ausgegeben wird.",
          },
          {
            term: "Numeraire-Gut",
            definition: "Ein Gut, dessen Preis auf 1 normiert wird, sodass alle anderen Preise relativ zu diesem Gut ausgedrückt werden können.",
          },
        ],
        formulas: ["Budgetgerade: p1·x1 + p2·x2 = m", "Steigung der Budgetgeraden: −p1/p2"],
        formulasLatex: ["p_1 x_1 + p_2 x_2 = m", "\\text{Steigung} = -\\dfrac{p_1}{p_2}"],
        examples: [
          "Ein Haushalt ernährt sich ausschließlich von Reis (Gut 1, Preis 4 GE/kg) und Linsen (Gut 2, Preis 6 GE/kg) bei einem Einkommen von 240 GE. Die Budgetgerade lautet 4x1 + 6x2 = 240, also x2 = 40 − (2/3)x1. Maximal könnte er sich 60 kg Reis oder 40 kg Linsen leisten.",
        ],
      },
      {
        id: "1-4",
        heading: "1.4 Veränderungen des Budgets: Preise, Steuern und Rationierung",
        body: [
          "Eine Einkommenserhöhung verschiebt die Budgetgerade parallel nach außen; eine Preissenkung von Gut 1 dreht sie um den Achsenabschnitt auf der x2-Achse nach außen (die maximale Menge von Gut 1 steigt, die maximale Menge von Gut 2 bleibt gleich). Eine Mengensteuer t auf Gut 1 wirkt wie eine Preiserhöhung um t und dreht die Gerade entsprechend nach innen; eine Pauschal- bzw. Lump-Sum-Steuer verschiebt sie dagegen parallel nach innen, ohne die Steigung zu verändern.",
          "Rationierungen (z. B. eine Obergrenze für den Konsum eines Gutes) schneiden Teile der ursprünglichen Budgetmenge ab, ohne die Steigung der Geraden in den erlaubten Bereichen zu verändern. Mengenrabatte, die erst ab einer bestimmten Abnahmemenge gelten, erzeugen dagegen einen Knick: Die Budgetgerade wird ab der Rabattschwelle flacher, weil zusätzliche Einheiten des Gutes billiger werden.",
        ],
        terms: [
          {
            term: "Mengensteuer",
            definition: "Eine Steuer von t Geldeinheiten pro verkaufter Einheit — wirkt wie eine Preiserhöhung um t und verändert die Steigung der Budgetgeraden.",
          },
          {
            term: "Lump-Sum-Steuer (Pauschalsteuer)",
            definition: "Eine fixe Steuer, die unabhängig von der Konsummenge anfällt — verringert nur das verfügbare Einkommen und verschiebt die Budgetgerade parallel nach innen.",
          },
          {
            term: "Rationierung",
            definition: "Eine mengenmäßige Konsumobergrenze für ein Gut — schneidet Teile der Budgetmenge ab, ohne deren Steigung zu verändern.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 2 — Technologie und Gewinnmaximierung ====================
  {
    id: "technologie-gewinnmax",
    number: 2,
    title: "Technologie und Gewinnmaximierung der Unternehmung",
    free: false,
    intro:
      "Bevor wir das Haushaltsoptimierungsproblem vertiefen, wechseln wir die Perspektive zur Unternehmung: Wie beschreibt man die technologischen Möglichkeiten einer Firma, und wie leitet man daraus ihre gewinnmaximale Entscheidung ab? Die Struktur dieses Problems ist der Haushaltstheorie erstaunlich ähnlich — nur dass an die Stelle des Nutzens der Gewinn tritt.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Technologiemenge und Produktionsfunktion",
        body: [
          "Die Technologiemenge einer Firma beschreibt alle technisch möglichen Kombinationen aus Inputs (x1, x2, …) und Output y. Meist arbeitet man mit der Produktionsfunktion f, die für gegebene Inputs den maximal möglichen Output angibt: y = f(x1, x2). Ein Input-Output-Paar heißt technisch effizient, wenn es auf dem Rand der Technologiemenge liegt — es lässt sich kein Input reduzieren, ohne den Output zu senken.",
          "Wichtige Produktionsfunktionstypen sind die lineare Technologie f(x1, x2) = ax1 + bx2 (Inputs sind perfekte Substitute), die Leontief-Technologie f(x1, x2) = min{ax1, bx2} (Inputs müssen in festem Verhältnis kombiniert werden — perfekte Komplemente) und die Cobb-Douglas-Technologie f(x1, x2) = x1^a·x2^b.",
        ],
        terms: [
          {
            term: "Produktionsfunktion",
            definition: "f(x1, x2) gibt den maximal möglichen Output bei gegebenen Inputmengen x1, x2 an.",
          },
          {
            term: "Technische Effizienz",
            definition: "Ein Input-Output-Bündel ist technisch effizient, wenn keine Inputmenge reduziert werden kann, ohne den Output zu verringern.",
          },
          {
            term: "Grenzprodukt (MP)",
            definition: "MPi = ∂f/∂xi — der zusätzliche Output aus einer marginalen Einheit mehr von Input i, bei sonst konstanten Inputs.",
          },
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Isoquanten, Grenzprodukt und die Grenzrate der technischen Substitution",
        body: [
          "Eine Isoquante fasst alle Inputkombinationen zusammen, die denselben Output y liefern — analog zur Indifferenzkurve beim Haushalt. Ihre Steigung ist die Grenzrate der technischen Substitution (MRTS): Sie gibt an, wie viel von Input 2 zusätzlich nötig ist, um eine Einheit weniger von Input 1 auszugleichen, ohne den Output zu ändern.",
          "Die meisten Technologien zeigen abnehmendes Grenzprodukt: Erhöht man einen Input bei konstantem anderen Input immer weiter, nimmt der zusätzliche Output pro weiterer Einheit ab (Gesetz vom abnehmenden Grenzertrag).",
        ],
        terms: [
          {
            term: "Isoquante",
            definition: "Die Menge aller Inputkombinationen (x1, x2), die denselben Output y = f(x1, x2) erzeugen.",
          },
          {
            term: "Grenzrate der technischen Substitution (MRTS)",
            definition: "MRTS = −MP1/MP2 — die Steigung der Isoquante; wie viel Input 2 einen Rückgang von Input 1 um eine Einheit gerade ausgleicht.",
          },
          {
            term: "Abnehmendes Grenzprodukt",
            definition: "Der zusätzliche Output einer weiteren Inputeinheit nimmt ab, je mehr von diesem Input bereits eingesetzt wird (bei konstanten übrigen Inputs).",
          },
        ],
        formulas: ["MRTS = −MP1/MP2"],
        formulasLatex: ["\\text{MRTS} = -\\dfrac{MP_1}{MP_2}"],
      },
      {
        id: "2-3",
        heading: "2.3 Skalenerträge",
        body: [
          "Skalenerträge beschreiben, wie sich der Output verändert, wenn man ALLE Inputs im gleichen Verhältnis erhöht. Bei konstanten Skalenerträgen gilt f(t·x1, t·x2) = t·f(x1, x2) für alle t > 0: Verdopplung aller Inputs verdoppelt den Output exakt. Bei zunehmenden Skalenerträgen gilt f(t·x1, t·x2) > t·f(x1, x2): der Output wächst überproportional (Größenvorteile). Bei abnehmenden Skalenerträgen ist es umgekehrt.",
        ],
        terms: [
          {
            term: "Konstante Skalenerträge",
            definition: "f(t·x1, t·x2) = t·f(x1, x2) für alle t > 0 — Verdopplung aller Inputs verdoppelt den Output genau.",
          },
          {
            term: "Zunehmende Skalenerträge",
            definition: "f(t·x1, t·x2) > t·f(x1, x2) für t > 1 — der Output wächst überproportional zu den Inputs (Größenvorteile).",
          },
          {
            term: "Abnehmende Skalenerträge",
            definition: "f(t·x1, t·x2) < t·f(x1, x2) für t > 1 — der Output wächst unterproportional zu den Inputs.",
          },
        ],
        examples: [
          "Für f(x1, x2) = x1^0,5·x2^0,3 gilt f(tx1, tx2) = t^0,8·f(x1, x2): da 0,8 < 1, liegen abnehmende Skalenerträge vor. Bei f(x1, x2) = x1·x2 dagegen ist f(tx1, tx2) = t²·f(x1, x2) — zunehmende Skalenerträge.",
        ],
      },
      {
        id: "2-4",
        heading: "2.4 Gewinnmaximierung und Faktornachfrage",
        body: [
          "Eine gewinnmaximierende Firma unter vollständiger Konkurrenz löst max π = p·f(x1, x2) − w1·x1 − w2·x2, wobei p der Outputpreis und wi die Faktorpreise sind. Die Bedingung erster Ordnung verlangt, dass für jeden Input das Wertgrenzprodukt (p·MPi) gleich dem Faktorpreis wi ist — kein Faktor wird über- oder unterbeschäftigt.",
          "Aus dieser Optimalitätsbedingung ergeben sich die Faktornachfragefunktionen x1*(p, w1, w2) und x2*(p, w1, w2). Anders als bei der Konsumnachfrage gibt es hier kein Analogon zu einem Giffen-Gut: Ein Anstieg des eigenen Faktorpreises senkt (unter den üblichen Konvexitätsannahmen) stets die nachgefragte Menge dieses Faktors.",
        ],
        terms: [
          {
            term: "Wertgrenzprodukt",
            definition: "p·MPi — der monetäre Wert des zusätzlichen Outputs aus einer marginalen Einheit mehr von Faktor i.",
          },
          {
            term: "Faktornachfragefunktion",
            definition: "xi*(p, w1, w2) — die gewinnmaximale Menge von Faktor i in Abhängigkeit von Output- und Faktorpreisen.",
          },
          {
            term: "Hotelling's Lemma",
            definition: "Die Ableitung der Gewinnfunktion nach dem Outputpreis p ergibt die Angebotsfunktion; die Ableitung nach einem Faktorpreis wi ergibt (mit negativem Vorzeichen) die Faktornachfrage.",
          },
        ],
        formulas: ["F.O.C.: p·MP1 = w1, p·MP2 = w2"],
        formulasLatex: ["p\\cdot MP_1 = w_1, \\qquad p \\cdot MP_2 = w_2"],
      },
    ],
  },

  // ==================== Kapitel 3 — Präferenzen und Nutzen ====================
  {
    id: "praeferenzen-nutzen",
    number: 3,
    title: "Präferenzen und Nutzen",
    free: false,
    intro:
      "Um zu modellieren, wie ein Haushalt zwischen Güterbündeln wählt, brauchen wir eine formale Beschreibung seiner Vorlieben. Präferenzrelationen und Nutzenfunktionen sind zwei äquivalente Sprachen dafür — dieses Kapitel führt beide ein und zeigt, wie sie zusammenhängen.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Präferenzrelationen: Vollständigkeit, Transitivität, Monotonie",
        body: [
          "Eine Präferenzrelation ≿ auf der Menge der Güterbündel ordnet je zwei Bündel x, y danach, ob x mindestens so gut wie y ist. Für rationale Präferenzen fordert man Vollständigkeit (für alle x, y gilt x≿y oder y≿x) und Transitivität (aus x≿y und y≿z folgt x≿z).",
          "Zusätzlich wird oft (strikte) Monotonie gefordert: Ein Bündel mit mehr von mindestens einem Gut (und nicht weniger von den anderen) wird echt bevorzugt. Diese Annahme schließt Sättigungspunkte aus und ist die formale Fassung von 'mehr ist besser'.",
        ],
        terms: [
          {
            term: "Vollständigkeit",
            definition: "Für je zwei Bündel x, y lässt sich immer sagen, ob x≿y, y≿x oder beides (Indifferenz) gilt.",
          },
          {
            term: "Transitivität",
            definition: "Aus x≿y und y≿z folgt x≿z — Konsistenzbedingung, die 'Präferenzzyklen' ausschließt.",
          },
          {
            term: "Strikte Monotonie",
            definition: "Ein Bündel mit (schwach) mehr von jedem Gut und strikt mehr von mindestens einem Gut wird echt bevorzugt.",
          },
        ],
        examples: [
          "Bilden drei Personen eine Gruppen-Mehrheitspräferenz aus individuell rationalen (vollständigen, transitiven) Präferenzen über drei Reiseziele, kann die resultierende Mehrheitsrelation intransitiv werden (Condorcet-Paradoxon): Obwohl jede Einzelperson rational ist, muss die durch Abstimmung gebildete Gruppenpräferenz nicht rational sein.",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Indifferenzkurven",
        body: [
          "Eine Indifferenzkurve fasst alle Güterbündel zusammen, zwischen denen ein Haushalt indifferent ist. Bei strikt monotonen, konvexen Präferenzen sind Indifferenzkurven fallend (mehr von einem Gut muss durch mehr vom anderen kompensiert werden, wenn man weniger vom ersten hat) und aus dem Ursprung heraus konvex gekrümmt.",
          "Spezialfälle: Bei perfekten Substituten (z. B. konstantes Austauschverhältnis zwischen zwei Gütern) sind Indifferenzkurven Geraden. Bei perfekten Komplementen (Güter werden immer im festen Verhältnis konsumiert) sind sie L-förmig geknickt.",
        ],
        terms: [
          {
            term: "Indifferenzkurve",
            definition: "Die Menge aller Güterbündel, die ein Haushalt als gleich gut bewertet (zwischen denen er indifferent ist).",
          },
          {
            term: "Perfekte Substitute",
            definition: "Güter, die in konstantem Verhältnis gegeneinander ausgetauscht werden können, ohne den Nutzen zu ändern — lineare Indifferenzkurven.",
          },
          {
            term: "Perfekte Komplemente",
            definition: "Güter, die stets im festen Verhältnis konsumiert werden (zusätzliche Einheiten nur eines Gutes bringen keinen Zusatznutzen) — L-förmige Indifferenzkurven.",
          },
        ],
        figure: {
          type: "budget-line",
          caption: "Optimum E*: die höchste erreichbare Indifferenzkurve tangiert die Budgetgerade.",
        },
      },
      {
        id: "3-3",
        heading: "3.3 Von Präferenzen zu Nutzenfunktionen",
        body: [
          "Eine Nutzenfunktion u repräsentiert eine Präferenzrelation ≿, wenn u(x) ≥ u(y) genau dann gilt, wenn x≿y. Nutzenfunktionen sind nur ordinal zu interpretieren: Der Zahlenwert selbst hat keine Bedeutung, nur die Rangordnung der Bündel zählt.",
          "Jede streng monotone Transformation f einer Nutzenfunktion u (also v = f(u) mit f'>0) repräsentiert dieselbe Präferenzordnung — u und v sind dann 'äquivalent'. Insbesondere haben u und f(u) für jede solche Transformation dieselbe Grenzrate der Substitution.",
        ],
        terms: [
          {
            term: "Nutzenfunktion",
            definition: "Eine Funktion u, für die u(x) ≥ u(y) ⟺ x≿y gilt — repräsentiert die Präferenzordnung durch reelle Zahlen.",
          },
          {
            term: "Ordinale Nutzenmessung",
            definition: "Nur die Rangfolge der Nutzenwerte hat Bedeutung, nicht der absolute Abstand zwischen ihnen.",
          },
          {
            term: "Monotone Transformation",
            definition: "Eine streng steigende Funktion f — v = f(u) repräsentiert dieselbe Präferenzordnung wie u.",
          },
        ],
      },
      {
        id: "3-4",
        heading: "3.4 Die Grenzrate der Substitution (MRS)",
        body: [
          "Die Grenzrate der Substitution MRS = −MU1/MU2 ist die Steigung der Indifferenzkurve: Sie gibt an, wie viel von Gut 2 ein Haushalt bereit ist aufzugeben, um eine marginale Einheit mehr von Gut 1 zu erhalten, ohne dass sich sein Nutzen ändert. Da die MRS nur von der Steigung der Indifferenzkurve abhängt, bleibt sie unter monotonen Transformationen der Nutzenfunktion unverändert — anders als die einzelnen Grenznutzen MU1, MU2, die je nach Transformation steigend, fallend oder konstant sein können.",
        ],
        terms: [
          {
            term: "Grenznutzen (MU)",
            definition: "MUi = ∂u/∂xi — der zusätzliche Nutzen aus einer marginalen Einheit mehr von Gut i.",
          },
          {
            term: "Grenzrate der Substitution (MRS)",
            definition: "MRS = −MU1/MU2 — invariant unter monotonen Transformationen der Nutzenfunktion, da sie nur von der Steigung der Indifferenzkurve abhängt.",
          },
        ],
        formulas: ["MRS = −MU1/MU2 = −(∂u/∂x1)/(∂u/∂x2)"],
        formulasLatex: ["\\text{MRS} = -\\dfrac{\\partial u/\\partial x_1}{\\partial u/\\partial x_2}"],
      },
    ],
  },

  // ==================== Kapitel 4 — Monopol ====================
  {
    id: "monopol",
    number: 4,
    title: "Monopol",
    free: false,
    intro:
      "Nachdem wir Gewinnmaximierung unter vollständiger Konkurrenz betrachtet haben, untersuchen wir nun den entgegengesetzten Fall: einen einzigen Anbieter, der die Marktnachfrage als Ganzes vor sich hat und deshalb den Preis mitbestimmt, statt ihn als gegeben hinzunehmen.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Das Gewinnmaximierungsproblem des Monopolisten",
        body: [
          "Ein Monopolist sieht sich der gesamten (fallenden) Marktnachfrage p(y) gegenüber und wählt die Menge y, die seinen Gewinn π(y) = p(y)·y − C(y) maximiert. Die Bedingung erster Ordnung lautet Grenzerlös = Grenzkosten: MR(y) = C'(y). Anders als bei vollständiger Konkurrenz gilt hier MR(y) < p(y), da eine zusätzlich verkaufte Einheit den Preis für ALLE verkauften Einheiten senkt.",
        ],
        terms: [
          {
            term: "Grenzerlös (Marginal Revenue, MR)",
            definition: "MR(y) = d(p(y)·y)/dy — die Erlösänderung durch eine zusätzlich verkaufte Einheit; beim Monopolisten stets kleiner als der Preis p(y).",
          },
          {
            term: "Gewinnmaximierungsbedingung im Monopol",
            definition: "MR(y*) = C'(y*) — Grenzerlös gleich Grenzkosten bestimmt die optimale Ausbringungsmenge.",
          },
        ],
        formulas: ["MR(y) = C'(y)"],
        formulasLatex: ["MR(y) = C'(y)"],
        examples: [
          "Eine Monopolistin sehe sich der inversen Nachfrage p(y) = 120 − 4y und der Kostenfunktion C(y) = y² gegenüber. Grenzerlös MR(y) = 120 − 8y, Grenzkosten C'(y) = 2y. Aus 120 − 8y = 2y folgt y* = 12, p* = 120 − 48 = 72, Gewinn π* = 72·12 − 144 = 720. Ein Preisnehmer bei gleicher Kostenfunktion würde dagegen y = 20 anbieten (p = MC ⟹ 120−4y=2y).",
        ],
        figure: {
          type: "monopoly-graph",
          caption: "Gewinnmaximum: MR = MC bestimmt Qm, der Preis Pm wird von der Nachfragekurve abgelesen.",
        },
      },
      {
        id: "4-2",
        heading: "4.2 Preiselastizität und die Amoroso-Robinson-Gleichung",
        body: [
          "Der Grenzerlös lässt sich mit der Preiselastizität der Nachfrage ε ausdrücken: MR(y) = p·(1 + 1/ε) (Amoroso-Robinson-Gleichung). Da ε < 0 für gewöhnliche Güter, folgt daraus unmittelbar, dass ein gewinnmaximierender Monopolist NIE im unelastischen Bereich der Nachfrage (|ε| < 1) produziert — dort wäre der Grenzerlös negativ, sodass eine Mengenreduktion den Erlös sogar erhöhen würde.",
          "Der Lerner-Index (p − MC)/p = −1/ε misst den relativen Preisaufschlag über die Grenzkosten (die 'Marktmacht' des Monopolisten) und hängt allein von der Preiselastizität am Optimum ab.",
        ],
        terms: [
          {
            term: "Amoroso-Robinson-Gleichung",
            definition: "MR(y) = p·(1 + 1/ε), wobei ε die Preiselastizität der Nachfrage ist.",
          },
          {
            term: "Lerner-Index",
            definition: "L = (p − MC)/p = −1/ε — der relative Preisaufschlag über die Grenzkosten im Gewinnoptimum.",
          },
        ],
        formulas: ["MR = p·(1 + 1/ε)", "Lerner-Index: (p − MC)/p = −1/ε"],
        formulasLatex: ["MR = p\\left(1+\\dfrac{1}{\\varepsilon}\\right)", "\\dfrac{p-MC}{p} = -\\dfrac{1}{\\varepsilon}"],
      },
      {
        id: "4-3",
        heading: "4.3 Ineffizienz des Monopols und Wirkung von Steuern",
        body: [
          "Weil der Monopolist beim Preis p* > MC(y*) anbietet, gibt es Nachfrager mit Zahlungsbereitschaft zwischen MC(y*) und p*, die nicht bedient werden, obwohl ein Tausch beide Seiten besserstellen würde — es entsteht ein Wohlfahrtsverlust (Deadweight Loss) im Vergleich zur vollständigen Konkurrenz.",
          "Eine Mengensteuer verschärft dieses Problem: Sie verschiebt effektiv die Grenzkostenkurve nach oben und senkt die Menge weiter unter das (bereits ineffizient niedrige) Monopolniveau — anders als im Wettbewerbsmarkt, wo eine Steuer 'nur' zu einem zusätzlichen, aber vergleichsweise kleineren Wohlfahrtsverlust führt. Eine Gewinnsteuer dagegen verändert die Bedingung erster Ordnung nicht und hat daher (bei einem festen Steuersatz) keinen Effekt auf Preis und Menge — sie schmälert nur den Gewinn selbst.",
        ],
        terms: [
          {
            term: "Deadweight Loss (Wohlfahrtsverlust) im Monopol",
            definition: "Der Wert entgangener Tauschgewinne, weil der Monopolist eine geringere Menge anbietet als bei vollständiger Konkurrenz.",
          },
          {
            term: "Wirkung einer Gewinnsteuer",
            definition: "Eine proportionale Steuer auf den Gewinn verändert die gewinnmaximale Menge/den Preis nicht, solange die Bemessungsgrundlage der volle Gewinn bleibt — sie mindert nur den Nachsteuergewinn.",
          },
        ],
      },
      {
        id: "4-4",
        heading: "4.4 Preisdiskriminierung",
        body: [
          "Preisdiskriminierung dritten Grades liegt vor, wenn ein Monopolist verschiedene, voneinander abgrenzbare Käufergruppen (Märkte) zu unterschiedlichen Preisen bedient. Optimal ist es, den Grenzerlös auf JEDEM Teilmarkt gleich den (gemeinsamen) Grenzkosten zu setzen — Märkte mit unelastischerer Nachfrage erhalten dabei einen höheren Preis.",
          "Perfekte (Preisdiskriminierung ersten Grades) liegt vor, wenn der Monopolist jedem einzelnen Käufer genau seine Zahlungsbereitschaft abverlangen kann. Das Ergebnis ist wieder effizient (wie bei vollständiger Konkurrenz in der Menge), aber die gesamte Konsumentenrente fließt an den Anbieter.",
        ],
        terms: [
          {
            term: "Preisdiskriminierung dritten Grades",
            definition: "Unterschiedliche Preise für unterscheidbare Käufergruppen, wobei jeweils MR = MC auf jedem Teilmarkt gilt.",
          },
          {
            term: "Preisdiskriminierung ersten Grades (perfekte Preisdiskriminierung)",
            definition: "Jeder Käufer zahlt individuell genau seine Zahlungsbereitschaft — effizient in der Menge, aber ohne Konsumentenrente.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 5 — Kostenminimierung und Kostenkurven ====================
  {
    id: "kostenminimierung-kostenkurven",
    number: 5,
    title: "Kostenminimierung und Kostenkurven",
    free: false,
    intro:
      "Statt direkt den Gewinn zu maximieren, zerlegt man das Problem der Unternehmung oft in zwei Schritte: erst die kostengünstigste Art, ein gegebenes Outputniveau herzustellen (Kostenminimierung), und dann — darauf aufbauend — die gewinnmaximale Ausbringungsmenge. Dieses Kapitel behandelt den ersten Schritt und die daraus resultierenden Kostenkurven.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Das Kostenminimierungsproblem",
        body: [
          "Für ein festes Outputziel ȳ minimiert die Firma die Faktorkosten w1x1 + w2x2 unter der Nebenbedingung f(x1, x2) = ȳ. Am Optimum berührt die Isokostengerade (mit Steigung −w1/w2) die Isoquante — die Optimalitätsbedingung lautet MRTS = −w1/w2, also Grenzprodukt pro Geldeinheit muss für beide Faktoren gleich sein: MP1/w1 = MP2/w2.",
          "Aus dieser Bedingung ergibt sich die bedingte Faktornachfrage x1(w1, w2, y), x2(w1, w2, y) — 'bedingt', weil sie vom vorgegebenen Output y abhängt, nicht vom Preis des Endprodukts.",
        ],
        terms: [
          {
            term: "Isokostengerade",
            definition: "Die Menge aller Inputkombinationen mit gegebenen Gesamtkosten: w1x1 + w2x2 = konstant, Steigung −w1/w2.",
          },
          {
            term: "Bedingte Faktornachfrage",
            definition: "xi(w1, w2, y) — die kostenminimale Menge von Faktor i, um ein bestimmtes Outputniveau y zu erreichen.",
          },
        ],
        formulas: ["Optimalitätsbedingung: MP1/w1 = MP2/w2"],
        formulasLatex: ["\\dfrac{MP_1}{w_1} = \\dfrac{MP_2}{w_2}"],
      },
      {
        id: "5-2",
        heading: "5.2 Die Kostenfunktion",
        body: [
          "Setzt man die bedingte Faktornachfrage in die Zielfunktion ein, erhält man die Kostenfunktion C(w1, w2, y) — die minimalen Kosten, um Output y bei Faktorpreisen w1, w2 zu produzieren. Für eine Cobb-Douglas-artige Technologie f(x1, x2) = x1·x2 ergibt sich beispielsweise eine Kostenfunktion der Form C(y) = 2√(y·w1·w2).",
          "Kosten, die auch bei y = 0 anfallen, heißen Fixkosten; alle übrigen Kosten sind variable Kosten. Fallen Fixkosten nur an, sobald überhaupt produziert wird (y > 0), aber sind unabhängig von der Höhe von y, spricht man von Quasi-Fixkosten.",
        ],
        terms: [
          {
            term: "Kostenfunktion C(w1, w2, y)",
            definition: "Die minimalen Gesamtkosten, um Output y bei gegebenen Faktorpreisen zu produzieren.",
          },
          {
            term: "Fixkosten",
            definition: "Kosten, die unabhängig vom Outputniveau anfallen, auch bei y = 0 (z. B. Miete).",
          },
          {
            term: "Quasi-Fixkosten",
            definition: "Kosten, die nur anfallen, sobald überhaupt produziert wird (y > 0), aber nicht mit der Höhe von y variieren.",
          },
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Kurzfristige Kostenkurven",
        body: [
          "Aus der Kostenfunktion leiten sich mehrere zentrale Kurven ab: die Grenzkosten MC(y) = C'(y) (Kosten der zusätzlich produzierten Einheit), die Durchschnittskosten AC(y) = C(y)/y sowie — bei variablen und fixen Kosten getrennt betrachtet — die durchschnittlichen variablen Kosten AVC(y).",
          "Ein wichtiger Zusammenhang: Solange die Grenzkosten unter den Durchschnittskosten liegen, fallen die Durchschnittskosten; liegen die Grenzkosten über den Durchschnittskosten, steigen diese. Daraus folgt, dass die Grenzkostenkurve die Durchschnittskostenkurve stets in deren Minimum schneidet.",
        ],
        terms: [
          {
            term: "Grenzkosten (MC)",
            definition: "MC(y) = C'(y) — die zusätzlichen Kosten einer marginal zusätzlich produzierten Einheit.",
          },
          {
            term: "Durchschnittskosten (AC)",
            definition: "AC(y) = C(y)/y — die Kosten pro produzierter Einheit.",
          },
          {
            term: "Durchschnittliche variable Kosten (AVC)",
            definition: "AVC(y) = variable Kosten(y)/y — Durchschnittskosten ohne den Fixkostenanteil.",
          },
        ],
        formulas: ["dAC/dy = (MC(y) − AC(y))/y"],
        formulasLatex: ["\\dfrac{dAC}{dy} = \\dfrac{MC(y)-AC(y)}{y}"],
        examples: [
          "Für C(y) = 50 + 2y² gilt AC(y) = 50/y + 2y und MC(y) = 4y. Am Minimum von AC gilt AC = MC: 50/y + 2y = 4y ⟹ y = 5, AC(5) = 10+10 = 20 = MC(5).",
        ],
        figure: {
          type: "cost-curves",
          caption: "MC schneidet AC und AVC jeweils in deren Minimum.",
        },
      },
      {
        id: "5-4",
        heading: "5.4 Kostenfunktion und Skalenerträge",
        body: [
          "Skalenerträge und Kostenverlauf hängen eng zusammen: Konstante Skalenerträge implizieren konstante Durchschnittskosten (unabhängig von y), zunehmende Skalenerträge implizieren fallende Durchschnittskosten (Größenvorteile — Grundlage für ein 'natürliches Monopol'), abnehmende Skalenerträge implizieren steigende Durchschnittskosten.",
        ],
        terms: [
          {
            term: "Natürliches Monopol",
            definition: "Eine Marktsituation, in der wegen durchgehend zunehmender Skalenerträge (fallender Durchschnittskosten) ein einziger Anbieter effizienter produzieren kann als mehrere konkurrierende Anbieter.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 6 — Optimale Entscheidung und Nachfrage ====================
  {
    id: "entscheidung-nachfrage",
    number: 6,
    title: "Optimale Entscheidung und Nachfrage",
    free: false,
    intro:
      "Mit Präferenzen/Nutzenfunktionen (Kapitel 3) und der Budgetmenge (Kapitel 1) haben wir alle Bausteine für das zentrale Optimierungsproblem der Haushaltstheorie: Welches erschwingliche Güterbündel maximiert den Nutzen? Aus der Lösung dieses Problems ergeben sich die individuellen Nachfragefunktionen.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Das Konsumentenproblem",
        body: [
          "Ein Haushalt löst max u(x1, x2) unter der Nebenbedingung p1x1 + p2x2 ≤ m. Bei einem inneren Optimum (x1* > 0, x2* > 0) berührt die höchste erreichbare Indifferenzkurve gerade die Budgetgerade — die notwendige Bedingung lautet MRS = −p1/p2: Die Grenzrate der Substitution entspricht dem (negativen) Preisverhältnis.",
        ],
        terms: [
          {
            term: "Optimalitätsbedingung (inneres Optimum)",
            definition: "MRS(x1*, x2*) = −p1/p2 — am optimalen Bündel entspricht die Steigung der Indifferenzkurve der Steigung der Budgetgeraden.",
          },
        ],
        formulas: ["MRS = −p1/p2 (inneres Optimum)"],
        formulasLatex: ["\\text{MRS}(x_1^*, x_2^*) = -\\dfrac{p_1}{p_2}"],
        examples: [
          "Für u(x1, x2) = x1^0,4·x2^0,6 (Cobb-Douglas) ergibt sich am Optimum stets x1* = 0,4·m/p1 und x2* = 0,6·m/p2 — der Haushalt gibt konstante Einkommensanteile für jedes Gut aus, unabhängig vom Einkommen.",
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Randlösungen",
        body: [
          "Nicht immer ist die Bedingung MRS = −p1/p2 mit x1* > 0 und x2* > 0 erfüllbar. Bei bestimmten Präferenzen (z. B. quasilinearer Nutzen mit hinreichend niedrigem Einkommen, oder wenn ein Gut aus Sicht des Haushalts 'zu teuer' relativ zum Grenznutzen ist) liegt das Optimum auf dem Rand der Budgetmenge, d. h. x1* = 0 oder x2* = 0. Dort gilt statt der Gleichheitsbedingung nur eine Ungleichung (die MRS erreicht das Preisverhältnis nicht, bevor ein Gut auf null fällt).",
        ],
        terms: [
          {
            term: "Randlösung",
            definition: "Ein Optimum, bei dem mindestens ein Gut in Menge null konsumiert wird (x1* = 0 oder x2* = 0).",
          },
          {
            term: "Kritisches Einkommen",
            definition: "Das Einkommen, unterhalb dessen ein Haushalt ausschließlich ein einziges Gut konsumiert (Randlösung), oberhalb dessen ein inneres Optimum vorliegt.",
          },
        ],
      },
      {
        id: "6-3",
        heading: "6.3 Nachfragefunktion und Einkommensexpansionspfad",
        body: [
          "Löst man das Konsumentenproblem für alle möglichen Preise und Einkommen, erhält man die Nachfragefunktion x*(p1, p2, m). Hält man die Preise fest und variiert nur das Einkommen, ergibt sich der Einkommensexpansionspfad — die Menge der optimalen Bündel bei wachsendem Einkommen. Die zugehörige Engelkurve trägt die nachgefragte Menge eines Gutes gegen das Einkommen ab.",
        ],
        terms: [
          {
            term: "Einkommensexpansionspfad",
            definition: "Die Kurve der optimalen Konsumbündel bei festen Preisen und wachsendem Einkommen.",
          },
          {
            term: "Engelkurve",
            definition: "Trägt die nachgefragte Menge eines Gutes in Abhängigkeit vom Einkommen (bei festen Preisen) ab.",
          },
        ],
      },
      {
        id: "6-4",
        heading: "6.4 Preisexpansionspfad und Güterarten",
        body: [
          "Variiert man stattdessen den Preis eines Gutes bei festem Einkommen und Preis des anderen Gutes, ergibt sich der Preisexpansionspfad. Güter werden nach der Richtung dieser Reaktion klassifiziert: Ein gewöhnliches Gut wird bei steigendem eigenen Preis weniger nachgefragt, ein Giffen-Gut dagegen MEHR (die nachgefragte Menge steigt mit dem eigenen Preis — ein seltener Grenzfall). Nach der Reaktion auf Einkommensänderungen unterscheidet man normale Güter (Nachfrage steigt mit dem Einkommen) von inferioren Gütern (Nachfrage sinkt mit dem Einkommen).",
        ],
        terms: [
          {
            term: "Gewöhnliches Gut",
            definition: "Die nachgefragte Menge sinkt, wenn der eigene Preis steigt (übliches Nachfrageverhalten).",
          },
          {
            term: "Giffen-Gut",
            definition: "Die nachgefragte Menge STEIGT, wenn der eigene Preis steigt — ein Giffen-Gut ist stets auch inferior, aber nicht jedes inferiore Gut ist ein Giffen-Gut.",
          },
          {
            term: "Normales vs. inferiores Gut",
            definition: "Ein normales Gut wird bei steigendem Einkommen mehr nachgefragt, ein inferiores Gut weniger.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 7 — Konsumentenrente, Marktnachfrage und Marktgleichgewicht ====================
  {
    id: "konsumentenrente-marktgleichgewicht",
    number: 7,
    title: "Konsumentenrente, Marktnachfrage und Marktgleichgewicht",
    free: false,
    intro:
      "Von der individuellen Nachfrage geht es nun zur Marktebene: Wie aggregiert man viele individuelle Nachfragen zu einer Marktnachfragekurve, wie misst man den Nutzen, den Konsumenten aus einem Markt ziehen, und wie bestimmt sich das Gleichgewicht bei vollständiger Konkurrenz?",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Von individueller zu aggregierter Marktnachfrage",
        body: [
          "Die Marktnachfrage bei einem Preis p ist die (horizontale) Summe aller individuellen Nachfragemengen bei diesem Preis: D(p) = Σi xi*(p). Wichtig ist die horizontale Summierung (Mengen bei gegebenem Preis addieren), nicht die vertikale Addition von Preisen.",
        ],
        terms: [
          {
            term: "Marktnachfragefunktion",
            definition: "D(p) = Σi xi*(p) — die horizontale Summe der individuellen Nachfragemengen bei einem gegebenen Preis.",
          },
          {
            term: "Preiselastizität der Nachfrage",
            definition: "ε = (∂D/∂p)·(p/D) — das Verhältnis der relativen Mengenänderung zur relativen Preisänderung.",
          },
          {
            term: "Einkommenselastizität der Nachfrage",
            definition: "η = (∂D/∂m)·(m/D) — das Verhältnis der relativen Mengenänderung zur relativen Einkommensänderung.",
          },
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Konsumentenrente",
        body: [
          "Für einen Haushalt mit quasilinearer Nutzenfunktion u(x1, x2) = v(x1) + x2 (Gut 2 als 'Geld für alle anderen Güter') lässt sich zeigen, dass die Konsumentenrente KR(p1) = ∫0^x1* v'(x1)dx1 − p1·x1* gerade der Fläche unter der (inversen) Nachfragekurve und über dem Marktpreis entspricht. Der erreichte Nutzen lässt sich dann als u(x1*, x2*) = m + KR(p1) darstellen — die Konsumentenrente ist der in Geld gemessene Netto-Vorteil aus der Marktteilnahme, zusätzlich zum reinen Einkommen.",
          "Bei mehreren Konsumenten ist die Konsumentenrente des Marktes die Summe der individuellen Renten und entspricht geometrisch der Fläche zwischen Nachfragekurve und Marktpreislinie.",
        ],
        terms: [
          {
            term: "Konsumentenrente",
            definition: "Die Fläche zwischen der (inversen) Nachfragekurve und dem tatsächlich gezahlten Marktpreis — der Netto-Nutzenvorteil der Konsumenten aus der Marktteilnahme.",
          },
          {
            term: "Quasilineare Nutzenfunktion",
            definition: "u(x1, x2) = v(x1) + x2 — der Grenznutzen des zweiten Gutes ist konstant (= 1), was es erlaubt, Nutzenänderungen direkt in Geldeinheiten zu interpretieren.",
          },
        ],
        formulas: ["KR(p1) = ∫₀^{x1*} v'(x1) dx1 − p1·x1*"],
        formulasLatex: ["KR(p_1) = \\int_0^{x_1^{*}} v'(x_1)\\,dx_1 - p_1 x_1^{*}"],
      },
      {
        id: "7-3",
        heading: "7.3 Marktgleichgewicht bei vollständiger Konkurrenz",
        body: [
          "Bei vollständiger Konkurrenz bestimmt sich der Gleichgewichtspreis p* dadurch, dass die (aggregierte) Nachfrage D(p*) der (aggregierten) Angebotsmenge S(p*) entspricht. Bei linearer Nachfrage und linearem Angebot lässt sich dieser Schnittpunkt direkt algebraisch berechnen.",
        ],
        terms: [
          {
            term: "Marktgleichgewicht",
            definition: "Der Preis p*, bei dem Marktnachfrage und Marktangebot übereinstimmen: D(p*) = S(p*).",
          },
        ],
        examples: [
          "Sei D(p) = 60 − 4p die Marktnachfrage und S(p) = 2p das Marktangebot für ein Gut. Im Gleichgewicht gilt 60−4p = 2p ⟹ p* = 10, X* = 20. Die Konsumentenrente beträgt hier 50 GE, die Produzentenrente 100 GE.",
        ],
        figure: {
          type: "supply-demand",
          caption: "Marktgleichgewicht: Schnittpunkt von Angebots- und Nachfragekurve bei (Q*, P*).",
        },
      },
      {
        id: "7-4",
        heading: "7.4 Steuerinzidenz und Deadweight Loss",
        body: [
          "Wird eine Mengensteuer t erhoben, klafft der vom Nachfrager gezahlte Preis pD und der beim Anbieter ankommende Preis pS um genau t auseinander: pD − pS = t. Der neue Gleichgewichtspreis bestimmt sich aus D(pD) = S(pS) = S(pD − t).",
          "Die Steuerlast verteilt sich zwischen Nachfragern und Anbietern im (inversen) Verhältnis ihrer Preiselastizitäten: Je unelastischer eine Marktseite reagiert, desto größer ihr Anteil an der Steuerlast. Der resultierende Wohlfahrtsverlust (Deadweight Loss) entsteht dadurch, dass die gehandelte Menge unter das effiziente Niveau sinkt — in den beiden Extremfällen vollkommen elastischen bzw. vollkommen unelastischen Angebots (oder Nachfrage) trägt jeweils eine Marktseite die GESAMTE Steuerlast, während im perfekt unelastischen Fall gar kein Deadweight Loss entsteht (die Menge ändert sich nicht).",
        ],
        terms: [
          {
            term: "Steuerinzidenz",
            definition: "Die tatsächliche Aufteilung der ökonomischen Last einer Steuer zwischen Anbietern und Nachfragern — unabhängig davon, wer die Steuer formal abführt.",
          },
          {
            term: "Deadweight Loss (Wohlfahrtsverlust)",
            definition: "Der Verlust an gesamter Rente (Konsumenten- plus Produzentenrente), der entsteht, weil eine Steuer die gehandelte Menge unter das effiziente Niveau drückt.",
          },
        ],
        examples: [
          "Bei D(p) = 60−4p, S(p) = 2p und einer Mengensteuer von t = 3 ergibt sich pS* = 8 (Anbieterpreis), pD* = 11 (Nachfragerpreis), Menge 16, Deadweight Loss = 6. Da das Angebot (Steigung 2) elastischer reagiert als hier implizit unterstellt, tragen die Nachfrager 2/3 und die Anbieter 1/3 der Steuerlast.",
        ],
      },
    ],
  },

  // ==================== Kapitel 8 — Bekundete Präferenzen und Slutsky-Zerlegung ====================
  {
    id: "bekundete-praeferenzen-slutsky",
    number: 8,
    title: "Bekundete Präferenzen und Slutsky-Zerlegung",
    free: false,
    intro:
      "Wie kann man aus beobachtetem Kaufverhalten (ohne die Nutzenfunktion zu kennen) auf die zugrunde liegenden Präferenzen schließen? Und wie zerlegt man die Wirkung einer Preisänderung in einen reinen 'Kaufkrafteffekt' und einen reinen 'Umschichtungseffekt'? Beide Fragen führen zum selben mathematischen Werkzeug.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Das schwache Axiom der bekundeten Präferenzen (WARP)",
        body: [
          "Beobachtet man, dass ein Haushalt bei Preisen (p1, p2) das Bündel x kauft, obwohl y ebenfalls erschwinglich gewesen wäre (p1y1 + p2y2 ≤ p1x1 + p2x2), dann hat er x gegenüber y 'bekundet vorgezogen'. Das schwache Axiom der bekundeten Präferenzen (WARP) verlangt Konsistenz: Wurde x gegenüber y bekundet vorgezogen, darf y niemals bei anderen Preisen gegenüber x bekundet vorgezogen werden, wenn x zu diesen Preisen ebenfalls erschwinglich gewesen wäre.",
          "WARP ist eine notwendige (aber nicht hinreichende) Bedingung für rationales Verhalten — jedes durch Nutzenmaximierung erzeugte Nachfrageverhalten erfüllt WARP, aber nicht jedes WARP-konsistente Verhalten muss aus Nutzenmaximierung stammen.",
        ],
        terms: [
          {
            term: "Bekundete Präferenz",
            definition: "x wird gegenüber y bekundet vorgezogen, wenn y bei den Preisen, zu denen x gekauft wurde, ebenfalls erschwinglich gewesen wäre.",
          },
          {
            term: "Schwaches Axiom der bekundeten Präferenzen (WARP)",
            definition: "Wurde x bekundet gegenüber y vorgezogen, darf bei keiner anderen Preis-Einkommens-Situation, in der auch x erschwinglich ist, y bekundet gegenüber x vorgezogen werden.",
          },
        ],
      },
      {
        id: "8-2",
        heading: "8.2 Die Slutsky-Zerlegung",
        body: [
          "Steigt der Preis von Gut 1, ändert sich die nachgefragte Menge aus zwei Gründen: Erstens wird Gut 1 relativ teurer (Substitutionseffekt), zweitens sinkt die reale Kaufkraft (Einkommenseffekt). Die Slutsky-Zerlegung trennt beide Effekte, indem sie ein fiktives Einkommen m' konstruiert, bei dem der Haushalt zu den NEUEN Preisen gerade noch sein ALTES Bündel kaufen könnte (Slutsky-Kompensation).",
          "Der Substitutionseffekt ist dann die Nachfrageänderung von den alten Preisen zu den neuen Preisen bei diesem kompensierten Einkommen m'; der Einkommenseffekt ist die restliche Nachfrageänderung von m' zurück zum tatsächlichen (unveränderten) Einkommen m.",
        ],
        terms: [
          {
            term: "Slutsky-Kompensation",
            definition: "Das fiktive Einkommen m', bei dem der Haushalt sich zu den neuen Preisen gerade noch sein ursprüngliches Güterbündel leisten könnte.",
          },
          {
            term: "Substitutionseffekt (Slutsky)",
            definition: "Die Nachfrageänderung, die allein durch die Änderung des Preisverhältnisses entsteht, bei (Slutsky-)kompensierter Kaufkraft.",
          },
          {
            term: "Einkommenseffekt",
            definition: "Die restliche Nachfrageänderung, die durch die Veränderung der realen Kaufkraft (bei unverändertem Preisverhältnis) entsteht.",
          },
        ],
        examples: [
          "Bei u(x1,x2)=x1x2, m=100, p2=5 steigt p1 von 10 auf 40. Ursprüngliche Nachfrage x1=5. Slutsky-Einkommen m' = 40·5+5·(m/(2·5)) ... nach Kompensation kauft der Haushalt zu den neuen Preisen ein Bündel mit geringerem x1 als vorher rein durch die Substitution, zusätzlich sinkt x1 weiter durch den Einkommenseffekt, da bei geringerem realem Einkommen weniger von beiden (normalen) Gütern nachgefragt wird.",
        ],
      },
      {
        id: "8-3",
        heading: "8.3 Die Hicks-Zerlegung",
        body: [
          "Die Hicks-Zerlegung verwendet statt der Slutsky-Kompensation ein anderes fiktives Einkommen m̂: dasjenige Einkommen, bei dem der Haushalt zu den neuen Preisen exakt das gleiche Nutzenniveau erreicht wie ursprünglich (statt exakt das gleiche Güterbündel leisten zu können). Da die Slutsky-Kompensation dem Haushalt bei einer Preiserhöhung mehr Kaufkraft zugesteht, als nötig wäre, um ihn genauso gut zu stellen wie vorher, überkompensiert Slutsky den Haushalt stets leicht (bei einer Preissenkung ist es umgekehrt): Der Haushalt ist bei (neue Preise, m') echt besser gestellt als in der Ausgangssituation.",
          "Beide Zerlegungen stimmen für infinitesimal kleine Preisänderungen überein und unterscheiden sich nur in zweiter Ordnung — für die meisten Zwecke der angewandten Theorie ist die einfacher zu berechnende Slutsky-Zerlegung daher ausreichend.",
        ],
        terms: [
          {
            term: "Hicks-Kompensation",
            definition: "Das fiktive Einkommen m̂, bei dem der Haushalt zu den neuen Preisen genau das ursprüngliche Nutzenniveau erreicht.",
          },
        ],
      },
      {
        id: "8-4",
        heading: "8.4 Güterarten und das Vorzeichen der Effekte",
        body: [
          "Der Substitutionseffekt hat für ein Gut immer das 'richtige' Vorzeichen: Steigt der eigene Preis, sinkt (schwach) die kompensierte Nachfrage. Das Vorzeichen des Gesamteffekts hängt daher allein vom Einkommenseffekt ab: Bei einem normalen Gut verstärkt der Einkommenseffekt den Substitutionseffekt (beide wirken in dieselbe Richtung). Bei einem inferioren Gut wirkt der Einkommenseffekt entgegengesetzt — überwiegt er sogar den Substitutionseffekt, entsteht ein Giffen-Gut.",
          "Daraus folgt eine Hierarchie: Jedes Giffen-Gut ist inferior, aber nicht jedes inferiore Gut ist ein Giffen-Gut (der Einkommenseffekt muss dafür den Substitutionseffekt sogar überkompensieren). Jedes normale Gut ist automatisch auch gewöhnlich, aber nicht jedes gewöhnliche Gut muss normal sein.",
        ],
        terms: [
          {
            term: "Gewöhnliches vs. Giffen-Gut",
            definition: "Ein gewöhnliches Gut reagiert auf eine eigene Preiserhöhung mit sinkender Nachfrage, ein Giffen-Gut mit steigender Nachfrage.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 9 — Tausch und Wohlfahrtstheorie ====================
  {
    id: "tausch-wohlfahrt",
    number: 9,
    title: "Tausch und Wohlfahrtstheorie",
    free: false,
    intro:
      "Bislang haben wir einzelne Haushalte und Unternehmen isoliert betrachtet. In diesem Kapitel bringen wir mehrere Haushalte in einer reinen Tauschwirtschaft zusammen und fragen: Welche Allokationen sind Pareto-effizient, welche entstehen durch freiwilligen Tausch, und in welchem Verhältnis stehen Markt-Gleichgewichte und Wohlfahrt zueinander?",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Die Edgeworth-Box und Pareto-Effizienz",
        body: [
          "Zwei Haushalte A und B mit Anfangsausstattungen (ω1^A, ω2^A) und (ω1^B, ω2^B) und Präferenzen über zwei Güter lassen sich in einer Edgeworth-Box gemeinsam darstellen: Die Box hat als Breite und Höhe die Gesamtmengen der beiden Güter, und jeder Punkt in der Box entspricht einer vollständigen Allokation (da, was A nicht bekommt, automatisch B zufällt).",
          "Eine Allokation ist Pareto-effizient, wenn es keine andere erschwingliche Allokation gibt, die mindestens einen Haushalt besserstellt, ohne den anderen schlechterzustellen. In der Edgeworth-Box entspricht das genau den Punkten, an denen sich die Indifferenzkurven von A und B berühren (statt sich zu schneiden) — dort gilt MRS^A = MRS^B.",
        ],
        terms: [
          {
            term: "Edgeworth-Box",
            definition: "Eine grafische Darstellung einer Tauschwirtschaft mit zwei Gütern und zwei Haushalten — jeder Punkt entspricht einer vollständigen Aufteilung der Gesamtmengen.",
          },
          {
            term: "Pareto-Effizienz",
            definition: "Eine Allokation, bei der kein Haushalt bessergestellt werden kann, ohne einen anderen schlechterzustellen.",
          },
        ],
        formulas: ["Pareto-Effizienz in der Edgeworth-Box: MRS^A = MRS^B"],
        formulasLatex: ["\\text{MRS}^A = \\text{MRS}^B"],
      },
      {
        id: "9-2",
        heading: "9.2 Die Kontraktkurve",
        body: [
          "Die Menge ALLER Pareto-effizienten Allokationen in der Edgeworth-Box heißt Kontraktkurve. Sie verläuft von der Ecke, in der A alles besitzt, bis zur gegenüberliegenden Ecke, in der B alles besitzt, und enthält typischerweise unendlich viele Punkte — Pareto-Effizienz allein legt also NICHT fest, wie 'gerecht' eine Allokation ist.",
        ],
        terms: [
          {
            term: "Kontraktkurve",
            definition: "Die Menge aller Pareto-effizienten Allokationen in einer Edgeworth-Box.",
          },
        ],
      },
      {
        id: "9-3",
        heading: "9.3 Walrasianisches Gleichgewicht in der Tauschwirtschaft",
        body: [
          "Ausgehend von einer Anfangsausstattung stellt sich bei freiem Tausch zu Marktpreisen ein Walrasianisches Gleichgewicht ein: ein Preisverhältnis p1*/p2*, bei dem die Nachfrage jedes Haushalts (basierend auf dem Wert seiner Anfangsausstattung als Einkommen) mit dem Gesamtangebot übereinstimmt. Jedes Walrasianische Gleichgewicht liegt auf der Kontraktkurve — das ist der Inhalt des Ersten Hauptsatzes der Wohlfahrtsökonomik.",
        ],
        terms: [
          {
            term: "Walrasianisches Gleichgewicht (Tauschwirtschaft)",
            definition: "Ein Preisverhältnis, bei dem die Nachfrage jedes Haushalts (basierend auf dem Marktwert seiner Anfangsausstattung) mit dem verfügbaren Gesamtangebot übereinstimmt.",
          },
          {
            term: "Erster Hauptsatz der Wohlfahrtsökonomik",
            definition: "Jedes Walrasianische Gleichgewicht ist Pareto-effizient.",
          },
          {
            term: "Zweiter Hauptsatz der Wohlfahrtsökonomik",
            definition: "Jede Pareto-effiziente Allokation lässt sich (unter Konvexitätsannahmen) als Walrasianisches Gleichgewicht zu einer geeignet gewählten Anfangsausstattung realisieren.",
          },
        ],
      },
      {
        id: "9-4",
        heading: "9.4 Neidfreiheit als Gerechtigkeitskriterium",
        body: [
          "Da Pareto-Effizienz allein keine Aussage über Verteilungsgerechtigkeit trifft, ergänzt man oft das Kriterium der Neidfreiheit: Eine Allokation ist neidfrei, wenn kein Haushalt das Bündel eines anderen dem eigenen vorzieht. Startet man von der Gleichverteilung (jeder Haushalt erhält die Hälfte der Gesamtausstattung jedes Gutes) und lässt frei tauschen, ist das resultierende Walrasianische Gleichgewicht automatisch sowohl Pareto-effizient als auch neidfrei — ein Ergebnis, das die Gleichverteilung als besonders attraktiven Ausgangspunkt für Umverteilung auszeichnet.",
        ],
        terms: [
          {
            term: "Neidfreie Allokation",
            definition: "Eine Allokation, bei der kein Haushalt das Güterbündel eines anderen Haushalts dem eigenen vorzieht.",
          },
          {
            term: "Gleichverteilung als Anfangsausstattung",
            definition: "Jeder Haushalt erhält die Hälfte der gesamtwirtschaftlichen Ausstattung jedes Gutes — das resultierende Walrasianische Gleichgewicht ist stets Pareto-effizient UND neidfrei.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 10 — Angebot der Unternehmung und Marktangebot der Branche ====================
  {
    id: "angebot-unternehmung-branche",
    number: 10,
    title: "Angebot der Unternehmung und Marktangebot der Branche",
    free: false,
    intro:
      "Mit der Kostenfunktion aus Kapitel 5 lässt sich nun die Angebotsentscheidung einer Firma unter vollständiger Konkurrenz vollständig charakterisieren — und daraus das Marktangebot einer ganzen Branche ableiten.",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Die kurzfristige Angebotsfunktion einer Unternehmung",
        body: [
          "Eine Firma unter vollständiger Konkurrenz wählt y so, dass Preis gleich Grenzkosten ist: p = MC(y). Die Angebotsfunktion S(p) ist damit (im relevanten Bereich) die Umkehrfunktion der Grenzkostenkurve. Die Bedingung zweiter Ordnung verlangt zusätzlich C''(y) > 0 — die Angebotsfunktion existiert nur im steigenden Ast der Grenzkostenkurve.",
        ],
        terms: [
          {
            term: "Angebotsregel bei vollständiger Konkurrenz",
            definition: "Eine gewinnmaximierende Firma produziert die Menge y, bei der p = MC(y) und MC steigend ist.",
          },
        ],
        formulas: ["p = MC(y), mit MC steigend"],
        formulasLatex: ["p = MC(y), \\quad MC'(y) > 0"],
      },
      {
        id: "10-2",
        heading: "10.2 Die Stilllegungsbedingung (Shut-down)",
        body: [
          "Kurzfristig muss eine Firma auch bei Verlust weiterproduzieren, solange der Preis wenigstens die durchschnittlichen variablen Kosten deckt (p ≥ AVC(y)) — denn die Fixkosten fallen ohnehin an. Sinkt der Preis unter das Minimum der AVC-Kurve, ist es optimal, die Produktion vollständig einzustellen (y = 0): Die kurzfristige Angebotskurve ist daher der Teil der (steigenden) Grenzkostenkurve OBERHALB des Minimums der durchschnittlichen variablen Kosten; darunter beträgt das Angebot null.",
        ],
        terms: [
          {
            term: "Stilllegungsbedingung (Shut-down condition)",
            definition: "Eine Firma produziert kurzfristig nur, solange p ≥ min AVC(y) gilt — sonst ist y = 0 optimal, da die Fixkosten ohnehin anfallen.",
          },
        ],
      },
      {
        id: "10-3",
        heading: "10.3 Produzentenrente",
        body: [
          "Die Produzentenrente einer Firma ist die Fläche zwischen dem Marktpreis und der (steigenden) Grenzkostenkurve, vom Ursprung bis zur angebotenen Menge — äquivalent zum Erlös abzüglich der variablen Kosten (also Deckungsbeitrag zu den Fixkosten plus Gewinn).",
        ],
        terms: [
          {
            term: "Produzentenrente",
            definition: "Die Fläche zwischen Marktpreis und Grenzkostenkurve bis zur angebotenen Menge — entspricht Erlös minus variable Kosten.",
          },
        ],
      },
      {
        id: "10-4",
        heading: "10.4 Vom individuellen zum Marktangebot",
        body: [
          "Das Marktangebot einer Branche mit vielen (identischen oder unterschiedlichen) Firmen ist die horizontale Summe aller individuellen Angebotsfunktionen: S(p) = Σj Sj(p). Langfristig können Firmen zusätzlich in den Markt eintreten oder ihn verlassen — dieser Marktein- und -austritt bestimmt (bei freiem Marktzutritt) langfristig, ob wirtschaftliche Gewinne bestehen bleiben oder gegen null tendieren.",
        ],
        terms: [
          {
            term: "Marktangebotsfunktion",
            definition: "S(p) = Σj Sj(p) — die horizontale Summe der individuellen Angebotsfunktionen aller Firmen einer Branche.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 11 — Oligopoltheorie ====================
  {
    id: "oligopoltheorie",
    number: 11,
    title: "Oligopoltheorie",
    free: false,
    intro:
      "Zwischen vollständiger Konkurrenz (viele kleine Anbieter) und Monopol (ein Anbieter) liegt das Oligopol: wenige Anbieter, die sich gegenseitig strategisch beeinflussen. Dieses Kapitel stellt die wichtigsten Oligopolmodelle vor — von simultanem Mengenwettbewerb bis zu Kartellen.",
    sections: [
      {
        id: "11-1",
        heading: "11.1 Klassifikation strategischer Interaktion",
        body: [
          "Oligopolmodelle unterscheiden sich entlang zweier Dimensionen: der strategischen Variable (Menge oder Preis) und dem Timing (simultan, sequentiell oder kooperativ). Aus diesen Kombinationen ergeben sich die klassischen Modelle: Cournot (Menge, simultan), Stackelberg (Menge, sequentiell), Bertrand (Preis, simultan), Preisführerschaft (Preis, sequentiell) und Kollusion/Kartell (kooperativ).",
        ],
        terms: [
          {
            term: "Nash-Gleichgewicht",
            definition: "Eine Strategiekombination, bei der keine Firma durch einseitiges Abweichen ihren Gewinn erhöhen kann, gegeben die Strategien der anderen Firmen.",
          },
        ],
      },
      {
        id: "11-2",
        heading: "11.2 Das Cournot-Modell",
        body: [
          "Im Cournot-Modell wählen alle Firmen SIMULTAN ihre Ausbringungsmenge, unter der Annahme, dass die Konkurrenz ihre Menge nicht mehr ändert (Vermutung über die Reaktion der Konkurrenz: null). Im symmetrischen Duopol mit linearer inverser Nachfrage p(y)=a−by und konstanten Grenzkosten c ergibt sich im Cournot-Nash-Gleichgewicht y1* = y2* = (a−c)/(3b); bei n symmetrischen Firmen sinkt der Marktanteil jeder einzelnen Firma mit wachsendem n, und der Marktpreis nähert sich mit n→∞ den Grenzkosten (Konvergenz zur vollständigen Konkurrenz).",
        ],
        terms: [
          {
            term: "Cournot-Gleichgewicht",
            definition: "Ein Nash-Gleichgewicht in Mengen: Jede Firma wählt ihre gewinnmaximale Menge, gegeben die (im Gleichgewicht korrekt erwartete) Menge der Konkurrenz.",
          },
          {
            term: "Reaktionsfunktion",
            definition: "Die gewinnmaximale Menge einer Firma in Abhängigkeit von der (vermuteten) Menge der Konkurrenz.",
          },
        ],
        formulas: ["Symmetrisches Cournot-Duopol: y1*=y2*=(a−c)/(3b)"],
        formulasLatex: ["y_1^{*} = y_2^{*} = \\dfrac{a-c}{3b}"],
      },
      {
        id: "11-3",
        heading: "11.3 Das Stackelberg-Modell",
        body: [
          "Im Stackelberg-Modell entscheidet eine Firma (der Leader) ZUERST über ihre Menge, die zweite Firma (der Follower) beobachtet diese Entscheidung und reagiert optimal darauf. Man löst das Modell durch Rückwärtsinduktion: erst die optimale Reaktion des Followers auf jede mögliche Leader-Menge bestimmen, dann die für den Leader gewinnmaximale Menge unter Berücksichtigung dieser Reaktion wählen.",
          "Der Leader erzielt im Gleichgewicht immer mindestens so viel Gewinn wie im Cournot-Gleichgewicht (er könnte ja immer die Cournot-Menge wählen) — bei linearer Nachfrage sogar STRIKT mehr. Der Gesamtoutput ist im Stackelberg-Gleichgewicht höher und der Preis niedriger als im Cournot-Gleichgewicht; die Summe der Gewinne beider Firmen ist dagegen im Cournot-Gleichgewicht höher.",
        ],
        terms: [
          {
            term: "Stackelberg-Gleichgewicht",
            definition: "Das teilspielperfekte Gleichgewicht eines sequentiellen Mengenwettbewerbs, gelöst durch Rückwärtsinduktion.",
          },
          {
            term: "Rückwärtsinduktion",
            definition: "Lösungsmethode für sequentielle Spiele: zuerst die letzte Entscheidung optimieren, dann rückwärts durch das Spiel gehen.",
          },
        ],
        formulas: ["Lineare Nachfrage, symmetrische Kosten: yL*=a/(2b), yF*=a/(4b) (Grenzkosten normiert auf 0)"],
        formulasLatex: ["y_L^{*} = \\dfrac{a}{2b}, \\qquad y_F^{*} = \\dfrac{a}{4b}"],
      },
      {
        id: "11-4",
        heading: "11.4 Preiswettbewerb: Bertrand und Preisführerschaft",
        body: [
          "Im Bertrand-Modell konkurrieren Firmen simultan über den Preis bei homogenem Gut: Schon bei nur zwei Firmen mit identischen konstanten Grenzkosten c führt dies im Nash-Gleichgewicht zu p1 = p2 = c — der komplette Gewinn wird wegkonkurriert (Bertrand-Paradoxon), da jede Firma bei einem Preis über c einen Anreiz hat, den Konkurrenten geringfügig zu unterbieten und den gesamten Markt zu übernehmen.",
          "Bei Preisführerschaft (sequentieller Preiswettbewerb) setzt eine dominante Firma zuerst ihren Preis, kleinere Firmen als Preisnehmer bedienen dann einen Teil der Nachfrage, und die Preisführerin bedient die RESIDUALE Nachfrage (Marktnachfrage minus das Angebot der kleinen Firmen bei diesem Preis) gewinnmaximal.",
        ],
        terms: [
          {
            term: "Bertrand-Paradoxon",
            definition: "Schon bei zwei Firmen mit identischen Grenzkosten führt simultaner Preiswettbewerb zu Preis = Grenzkosten — wie bei vollständiger Konkurrenz.",
          },
          {
            term: "Residuale Nachfrage",
            definition: "Die Marktnachfrage abzüglich der von preisnehmenden Konkurrenten bereits bedienten Menge — die Nachfrage, die einer Preisführerin verbleibt.",
          },
        ],
      },
      {
        id: "11-5",
        heading: "11.5 Kollusion und die Stabilität von Kartellen",
        body: [
          "Kooperieren Firmen (Kollusion/Kartell), maximieren sie gemeinsam den Branchengewinn wie ein Monopolist und teilen ihn auf. Dieses Ergebnis ist für die Firmen gemeinsam besser als jedes Nash-Gleichgewicht — aber JEDE einzelne Firma hat einen Anreiz, einseitig von der Kartellmenge abzuweichen (mehr zu produzieren), da sie so kurzfristig ihren eigenen Gewinn erhöhen kann, solange die andere Firma an der Abmachung festhält.",
          "Damit Kollusion trotzdem stabil sein kann, braucht es eine Bestrafungsstrategie (Trigger-Strategie): Weicht eine Firma ab, bestrafen die anderen dauerhaft mit Rückkehr zum (weniger profitablen) Cournot- oder Wettbewerbsgleichgewicht. Kollusion ist genau dann selbsttragend, wenn der kurzfristige Abweichgewinn den langfristig abdiskontierten Verlust aus der Bestrafung nicht übersteigt — das erfordert einen hinreichend hohen Diskontfaktor (Firmen müssen die Zukunft ausreichend stark gewichten).",
        ],
        terms: [
          {
            term: "Kollusion / Kartell",
            definition: "Firmen koordinieren ihr Verhalten, um gemeinsam den Branchengewinn wie ein Monopolist zu maximieren.",
          },
          {
            term: "Trigger-Strategie",
            definition: "Eine Bestrafungsstrategie: Solange alle kooperieren, wird die Kartellmenge produziert; weicht eine Firma ab, wird dauerhaft zum unkooperativen Gleichgewicht zurückgekehrt.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 12 — Kaufen, Verkaufen und intertemporale Entscheidung ====================
  {
    id: "kaufen-verkaufen-intertemporal",
    number: 12,
    title: "Kaufen, Verkaufen und intertemporale Entscheidung",
    free: false,
    intro:
      "Bisher haben wir Haushalte mit einem exogen gegebenen Geldeinkommen betrachtet. Realistischer ist oft, dass Haushalte über eine Anfangsausstattung an Gütern verfügen und einen Teil davon verkaufen, um andere Güter zu kaufen — ein Modell, das sich insbesondere auf Arbeitsangebot und Sparentscheidungen anwenden lässt.",
    sections: [
      {
        id: "12-1",
        heading: "12.1 Nettonachfrager und Nettoanbieter",
        body: [
          "Verfügt ein Haushalt über eine Anfangsausstattung (ω1, ω2) statt eines Geldeinkommens, lautet seine Budgetgerade p1x1 + p2x2 = p1ω1 + p2ω2 — der Wert seiner Anfangsausstattung bestimmt sein 'Einkommen'. Konsumiert er am Optimum mehr von Gut 1 als seine Ausstattung ω1, ist er Nettonachfrager dieses Gutes (er verkauft Gut 2, um zusätzliches Gut 1 zu kaufen); konsumiert er weniger, ist er Nettoanbieter.",
          "Eine Preissenkung von Gut 1 kann einen Nettonachfrager von Gut 1 NIE schlechterstellen (er profitiert doppelt: als Käufer wird es billiger, und er verkauft ohnehin nichts davon). Für einen Nettoanbieter ist der Effekt dagegen unbestimmt: Er verliert als Verkäufer, gewinnt aber ggf. als potenzieller Käufer — anders als bei einem exogen fixen Geldeinkommen, wo eine Preissenkung von Gut 1 den Haushalt NIE schlechterstellen kann.",
        ],
        terms: [
          {
            term: "Nettonachfrager",
            definition: "Ein Haushalt, der am Optimum mehr von einem Gut konsumiert, als seine Anfangsausstattung an diesem Gut umfasst — er kauft netto zu.",
          },
          {
            term: "Nettoanbieter",
            definition: "Ein Haushalt, der am Optimum weniger von einem Gut konsumiert, als seine Anfangsausstattung umfasst — er verkauft netto.",
          },
        ],
        formulas: ["Budgetgerade mit Anfangsausstattung: p1x1 + p2x2 = p1ω1 + p2ω2"],
        formulasLatex: ["p_1 x_1 + p_2 x_2 = p_1 \\omega_1 + p_2 \\omega_2"],
      },
      {
        id: "12-2",
        heading: "12.2 Arbeitsangebot: Konsum und Freizeit",
        body: [
          "Ein häufiges Anwendungsbeispiel: Ein Agent teilt eine feste Zeitausstattung (z. B. T Stunden pro Tag) zwischen Arbeit und Freizeit R auf. Für jede Arbeitsstunde erhält er den Lohnsatz w; sein Konsum C (mit Preis 1) ist durch C = w·(T−R) + m beschränkt, wobei m ein zusätzliches, arbeitsunabhängiges Einkommen ist. Das ist strukturell identisch mit dem Nettoanbieter-Modell: Freizeit ist die 'Anfangsausstattung', die der Agent teilweise gegen Konsum 'verkauft', indem er arbeitet.",
        ],
        terms: [
          {
            term: "Reservationslohn",
            definition: "Der Lohnsatz, unterhalb dessen ein Agent gar nicht arbeiten möchte (Grenzrate der Substitution zwischen Freizeit und Konsum bei null Arbeitsstunden).",
          },
        ],
        formulas: ["Budgetgerade Arbeit/Freizeit: C = w·(T − R) + m"],
        formulasLatex: ["C = w\\,(T-R) + m"],
      },
      {
        id: "12-3",
        heading: "12.3 Das intertemporale Konsummodell",
        body: [
          "Analog dazu lässt sich Sparen/Verschulden modellieren: Ein Haushalt hat Geldausstattungen (m1, m2) 'heute' und 'morgen' und kann zu einem Zinssatz r beliebig zwischen den Perioden umschichten. Die intertemporale Budgetgerade lautet c1 + c2/(1+r) = m1 + m2/(1+r) — der Barwert des Konsums muss dem Barwert der Ausstattung entsprechen. Konsumiert der Haushalt heute mehr als m1, ist er Schuldner (Nettonachfrager von 'Konsum heute'); konsumiert er weniger, ist er Sparer/Gläubiger.",
        ],
        terms: [
          {
            term: "Intertemporale Budgetgerade",
            definition: "c1 + c2/(1+r) = m1 + m2/(1+r) — der Barwert (Gegenwartswert) des Konsums muss dem Barwert der Geldausstattung entsprechen.",
          },
        ],
        formulas: ["c1 + c2/(1+r) = m1 + m2/(1+r)"],
        formulasLatex: ["c_1 + \\dfrac{c_2}{1+r} = m_1 + \\dfrac{m_2}{1+r}"],
      },
      {
        id: "12-4",
        heading: "12.4 Zinsänderungen: Sparer und Schuldner",
        body: [
          "Sinkt der Zinssatz r, dreht sich die intertemporale Budgetgerade um den Ausstattungspunkt (m1, m2). Ein Schuldner (der heute mehr konsumiert als m1) bleibt bei sinkendem Zins zwangsläufig Schuldner, und sein Nutzen steigt strikt (analog zum Nettonachfrager-Argument aus Abschnitt 12.1: er profitiert als 'Käufer von Krediten'). Für einen Gläubiger/Sparer ist der Effekt dagegen ambivalent — sein Nutzen kann bei sinkendem Zins ausnahmsweise auch steigen, wenn der Substitutionseffekt (mehr heutigen Konsum wegen niedrigerer Verzinsung des Sparens) den negativen Einkommenseffekt (geringere Zinserträge) überkompensiert.",
        ],
        terms: [
          {
            term: "Schuldner (Nettonachfrager von Konsum heute)",
            definition: "Ein Haushalt, der heute mehr konsumiert als seine Geldausstattung m1 — profitiert bei sinkendem Zins eindeutig.",
          },
          {
            term: "Gläubiger/Sparer",
            definition: "Ein Haushalt, der heute weniger konsumiert als m1 (Ersparnis morgen verzinst) — die Wirkung eines sinkenden Zinses auf seinen Nutzen ist im Allgemeinen unbestimmt.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 13 — Spieltheorie ====================
  {
    id: "spieltheorie",
    number: 13,
    title: "Spieltheorie",
    free: false,
    intro:
      "Die Oligopolmodelle aus Kapitel 11 sind Spezialfälle eines viel allgemeineren Werkzeugs: der Spieltheorie. Dieses Kapitel führt die Grundbegriffe strategischer Interaktion ein und zeigt an klassischen Beispielen, wie unterschiedlich sich rationales Verhalten je nach Anreizstruktur ausprägen kann.",
    sections: [
      {
        id: "13-1",
        heading: "13.1 Spiele in Normalform und Nash-Gleichgewicht",
        body: [
          "Ein Spiel in Normalform besteht aus Spielern, deren jeweiligen Strategiemengen und einer Auszahlungsfunktion, die jeder Strategiekombination einen Payoff für jeden Spieler zuordnet. Ein Nash-Gleichgewicht ist eine Strategiekombination, bei der kein Spieler durch einseitiges Abweichen seine Auszahlung erhöhen kann — es ist ein Fixpunkt wechselseitig bester Antworten.",
        ],
        terms: [
          {
            term: "Spiel in Normalform",
            definition: "Eine Beschreibung eines strategischen Spiels durch Spieler, Strategiemengen und eine Auszahlungsfunktion (Payoff-Matrix bei zwei Spielern).",
          },
          {
            term: "Beste Antwort (best response)",
            definition: "Die Strategie eines Spielers, die seine Auszahlung maximiert, gegeben die Strategien der anderen Spieler.",
          },
        ],
      },
      {
        id: "13-2",
        heading: "13.2 Dominante Strategien und das Gefangenendilemma",
        body: [
          "Eine Strategie ist (strikt) dominant, wenn sie unabhängig davon, was die anderen Spieler tun, stets die beste Antwort ist. Existieren für alle Spieler dominante Strategien, ist deren Kombination automatisch ein (besonders robustes) Nash-Gleichgewicht.",
          "Das Gefangenendilemma ist das bekannteste Beispiel dafür, dass individuell rationales Verhalten (jeder wählt seine dominante Strategie) zu einem kollektiv suboptimalen Ergebnis führt: Beide Spieler wären besser gestellt, würden sie gemeinsam kooperieren, aber jeder hat einen individuellen Anreiz, die Kooperation zu brechen. Dasselbe Grundmuster erklärt viele Kollektivgutprobleme — etwa, warum ohne Regulierung tendenziell zu viel Vermüllung gemeinsamer Ressourcen stattfindet (Tragik der Allmende): Jeder Einzelne trägt nur einen Bruchteil der Kosten seiner eigenen Verschmutzung, profitiert aber vollständig vom eigenen Nutzen daraus.",
        ],
        terms: [
          {
            term: "Dominante Strategie",
            definition: "Eine Strategie, die unabhängig von den Strategien der anderen Spieler stets mindestens so gut ist wie jede Alternative.",
          },
          {
            term: "Gefangenendilemma",
            definition: "Ein Spiel, in dem beide Spieler eine dominante Strategie haben, deren Kombination aber für beide schlechter ist als gegenseitige Kooperation.",
          },
          {
            term: "Tragik der Allmende (tragedy of the commons)",
            definition: "Übernutzung einer gemeinsam genutzten, nicht-exklusiven Ressource, weil jeder Nutzer nur einen Teil der von ihm verursachten Kosten selbst trägt.",
          },
        ],
      },
      {
        id: "13-3",
        heading: "13.3 Koordinationsspiele und gemischte Strategien",
        body: [
          "Nicht jedes Spiel hat eine dominante Strategie. Beim 'Kampf der Geschlechter' (Battle of the Sexes) möchten beide Spieler dieselbe Aktivität gemeinsam unternehmen, sind sich aber uneinig, welche — hier gibt es ZWEI reine Nash-Gleichgewichte (beide koordinieren auf Aktivität 1 bzw. beide auf Aktivität 2), aber keine dominante Strategie.",
          "Bei manchen Spielen (z. B. beim 'Elfmeter-Spiel', in dem ein Torhüter und ein Schütze simultan eine von zwei Ecken wählen) existiert dagegen KEIN Gleichgewicht in reinen Strategien — nur in gemischten Strategien, bei denen jeder Spieler zufällig zwischen seinen reinen Strategien mit bestimmten Wahrscheinlichkeiten mischt. Im symmetrischen Elfmeter-Spiel etwa mischt jeder Spieler im Gleichgewicht mit Wahrscheinlichkeit 1/2 zwischen den beiden Ecken.",
        ],
        terms: [
          {
            term: "Koordinationsspiel",
            definition: "Ein Spiel mit mehreren reinen Nash-Gleichgewichten, bei dem die Spieler ein gemeinsames Interesse an Koordination, aber möglicherweise unterschiedliche Präferenzen darüber haben, auf welches Gleichgewicht koordiniert wird.",
          },
          {
            term: "Gemischte Strategie",
            definition: "Eine Wahrscheinlichkeitsverteilung über die reinen Strategien eines Spielers — relevant, wenn kein Gleichgewicht in reinen Strategien existiert.",
          },
        ],
      },
      {
        id: "13-4",
        heading: "13.4 Sequentielle Spiele und Rückwärtsinduktion",
        body: [
          "Bei sequentiellen Spielen (Spielbaum statt Payoff-Matrix) kann dieselbe Situation, in Normalform betrachtet, mehrere Nash-Gleichgewichte haben — von denen aber nicht jedes 'glaubwürdig' ist. Ein Marktzutrittsspiel etwa (ein etablierter Anbieter kann einen potenziellen Marktzutritt mit Kampfpreisen 'bestrafen' oder tolerieren) hat in Normalform zwei Nash-Gleichgewichte: Zutritt-und-Tolerieren sowie Kein-Zutritt-und-Drohung-mit-Bestrafung.",
          "Nur das erste ist jedoch teilspielperfekt: Käme es tatsächlich zum Marktzutritt, wäre es für den Etablierten nicht mehr rational, tatsächlich zu bestrafen (das würde ihm selbst schaden) — die Drohung ist nicht glaubwürdig (unglaubwürdige Drohung). Rückwärtsinduktion (erst das letzte Teilspiel optimieren, dann rückwärts) filtert genau solche unglaubwürdigen Drohungen heraus und liefert das teilspielperfekte Gleichgewicht.",
        ],
        terms: [
          {
            term: "Teilspielperfektes Gleichgewicht",
            definition: "Ein Nash-Gleichgewicht, das in JEDEM Teilspiel (auch solchen, die im Gleichgewichtspfad gar nicht erreicht werden) optimal ist — schließt unglaubwürdige Drohungen aus.",
          },
          {
            term: "Unglaubwürdige Drohung",
            definition: "Eine angekündigte Bestrafungsstrategie, die für den Drohenden selbst nicht optimal wäre, sollte der Ernstfall tatsächlich eintreten.",
          },
        ],
      },
    ],
  },
];
