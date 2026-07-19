import type { SkriptChapter } from "./types";

// Eigenständiges Lehrwerk zur Mikroökonomik ("VWL 1"), verfasst wie ein
// unabhängiges Lehrbuch zum Modulthema — nicht als Paraphrase einer
// bestimmten Vorlesung.
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 ====================
  {
    id: "markt-und-budgetmenge",
    number: 1,
    title: "Markt und Budgetmenge",
    free: true,
    intro:
      "Mikroökonomik untersucht, wie einzelne Haushalte und Unternehmen unter Knappheit Entscheidungen treffen und wie diese Entscheidungen sich über Märkte koordinieren. Den Ausgangspunkt bildet die Budgetrestriktion eines Haushalts.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Güterbündel und Budgetgerade",
        body: [
          "Ein Güterbündel (x₁,x₂) beschreibt die konsumierten Mengen zweier Güter. Bei Preisen p₁,p₂ und Einkommen m umfasst die Budgetmenge alle Bündel, die sich der Haushalt leisten kann: p₁x₁+p₂x₂ ≤ m. Die Budgetgerade (die Grenze dieser Menge) ergibt sich aus p₁x₁+p₂x₂ = m.",
          "Die Steigung der Budgetgeraden beträgt −p₁/p₂ und gibt an, wie viele Einheiten von Gut 2 aufgegeben werden müssen, um eine zusätzliche Einheit von Gut 1 zu konsumieren (die relative Opportunitätskosten der beiden Güter zueinander).",
        ],
        formulas: ["p₁x₁ + p₂x₂ = m"],
        formulasLatex: ["p_1 x_1 + p_2 x_2 = m"],
        terms: [{ term: "Budgetgerade", definition: "Menge der Güterbündel, die das gesamte Einkommen genau ausschöpfen." }],
        examples: [
          "Bei m=100€, p₁=4€ (Kaffee), p₂=10€ (Bücher) lautet die Budgetgerade 4x₁+10x₂=100. Verzichtet der Haushalt auf 5 Tassen Kaffee, kann er sich dafür 2 zusätzliche Bücher leisten (Steigung −4/10=−0,4: für jedes Buch weniger braucht man 2,5 Kaffee weniger, bzw. andersherum).",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Verschiebungen der Budgetgeraden",
        body: [
          "Eine Einkommensänderung verschiebt die Budgetgerade parallel (die Steigung −p₁/p₂ bleibt gleich), da sich das maximal konsumierbare Bündel proportional zu m ändert. Eine Preisänderung eines Gutes dreht die Budgetgerade dagegen um den Achsenabschnitt des jeweils anderen Gutes, da sich die relative Opportunitätskostenrelation ändert.",
          "Steuern und Subventionen lassen sich als Preis- bzw. Einkommensänderungen modellieren: eine Mengensteuer auf Gut 1 erhöht den effektiven Preis p₁ (Drehung), eine Pauschalsubvention erhöht m (Parallelverschiebung).",
        ],
        examples: [
          "Verdoppelt sich das Einkommen m bei konstanten Preisen, verschiebt sich die Budgetgerade parallel nach außen — jedes vorher erschwingliche Bündel bleibt erschwinglich, und zusätzliche Bündel werden erreichbar.",
        ],
      },
    ],
  },
  // ==================== Kapitel 2 ====================
  {
    id: "praeferenzen-und-nutzen",
    number: 2,
    title: "Präferenzen und Nutzen",
    free: false,
    intro:
      "Um zu modellieren, welches Güterbündel ein Haushalt innerhalb seiner Budgetmenge bevorzugt, braucht es ein formales Modell von Präferenzen. Dieses Kapitel führt Indifferenzkurven und die Nutzenfunktion ein.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Präferenzrelationen und Indifferenzkurven",
        body: [
          "Präferenzen werden meist über drei Grundannahmen modelliert: Vollständigkeit (je zwei Bündel sind vergleichbar), Transitivität (aus A≻B und B≻C folgt A≻C) und (meist) Monotonie (mehr von jedem Gut ist mindestens so gut). Eine Indifferenzkurve verbindet alle Güterbündel, zwischen denen der Haushalt indifferent ist (gleich gut bewertet).",
          "Bei monotonen Präferenzen können sich zwei verschiedene Indifferenzkurven nie schneiden — ein Schnittpunkt würde der Transitivität widersprechen, da beide Kurven durch diesen Punkt liefen, aber unterschiedliche Nutzenniveaus repräsentieren müssten.",
        ],
        terms: [{ term: "Indifferenzkurve", definition: "Menge der Güterbündel, zwischen denen ein Haushalt indifferent ist." }],
        examples: [
          "Bewertet ein Haushalt (2 Kaffee, 6 Tee) genauso wie (4 Kaffee, 3 Tee), liegen beide Bündel auf derselben Indifferenzkurve — der Haushalt ist zwischen ihnen indifferent, auch wenn sich die Mengen der einzelnen Güter unterscheiden.",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Die Grenzrate der Substitution",
        body: [
          "Die Grenzrate der Substitution (GRS) misst die Steigung der Indifferenzkurve in einem Punkt: Sie gibt an, wie viele Einheiten von Gut 2 der Haushalt bereit ist aufzugeben, um eine zusätzliche (marginale) Einheit von Gut 1 zu erhalten, ohne sein Nutzenniveau zu verändern. Formal gilt GRS = −dx₂/dx₁ entlang der Indifferenzkurve.",
          "Bei den meisten üblichen Präferenzen (konvexe Präferenzen) nimmt die GRS mit steigendem x₁ ab — der Haushalt ist bereit, immer weniger von Gut 2 für eine zusätzliche Einheit von Gut 1 herzugeben, je mehr er von Gut 1 bereits besitzt. Dies erzeugt die typische, nach außen gewölbte Form der Indifferenzkurven.",
        ],
        formulas: ["GRS = −dx₂/dx₁"],
        formulasLatex: ["GRS = -\\dfrac{dx_2}{dx_1}"],
        terms: [{ term: "Grenzrate der Substitution", definition: "Menge an Gut 2, die für eine marginale Einheit von Gut 1 bei gleichem Nutzenniveau aufgegeben wird." }],
        examples: [
          "Besitzt ein Haushalt sehr viel Kaffee und wenig Tee, ist er bereit, viel Kaffee für eine zusätzliche Tasse Tee herzugeben (hohe GRS); besitzt er dagegen bereits viel Tee, ist ihm eine zusätzliche Tasse Tee wenig wert (niedrige GRS).",
        ],
      },
      {
        id: "2-3",
        heading: "2.3 Nutzenfunktionen und Grenznutzen",
        body: [
          "Eine Nutzenfunktion u(x₁,x₂) ordnet jedem Güterbündel eine Zahl zu, sodass höher bewertete Bündel eine höhere Zahl erhalten — sie repräsentiert die Präferenzordnung, wenn u(A)≥u(B) genau dann gilt, wenn A mindestens so gut ist wie B. Wichtig: Der absolute Nutzenwert hat keine kardinale Bedeutung, nur die Rangordnung zählt (ordinale Nutzentheorie).",
          "Der Grenznutzen MUᵢ = ∂u/∂xᵢ misst die zusätzliche Nutzenänderung durch eine marginale Einheit von Gut i. Die GRS lässt sich direkt aus den Grenznutzen berechnen: GRS = MU₁/MU₂.",
        ],
        formulas: ["GRS = MU₁ / MU₂"],
        formulasLatex: ["GRS = \\dfrac{MU_1}{MU_2}"],
        terms: [{ term: "Grenznutzen (MU)", definition: "Partielle Ableitung der Nutzenfunktion nach der Menge eines Gutes." }],
        examples: [
          "Für u(x₁,x₂)=x₁·x₂ gilt MU₁=x₂, MU₂=x₁, also GRS=x₂/x₁ — bei Bündel (2,8) beträgt die GRS 4: der Haushalt gibt 4 Einheiten von Gut 2 für eine marginale Einheit von Gut 1 her.",
        ],
      },
    ],
  },
  // ==================== Kapitel 3 ====================
  {
    id: "optimale-entscheidung-nachfrage",
    number: 3,
    title: "Optimale Entscheidung und Nachfrage",
    free: false,
    intro:
      "Kombiniert man Präferenzen mit der Budgetrestriktion, ergibt sich das zentrale Optimierungsproblem des Haushalts: das beste erschwingliche Güterbündel zu finden. Dieses Kapitel leitet daraus die individuelle Nachfrage her.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Das Optimierungsproblem des Haushalts",
        body: [
          "Der Haushalt maximiert u(x₁,x₂) unter der Nebenbedingung p₁x₁+p₂x₂=m. Im (inneren) Optimum berührt die höchstmögliche erreichbare Indifferenzkurve die Budgetgerade tangential: die Steigungen stimmen überein, also GRS = p₁/p₂, äquivalent MU₁/p₁ = MU₂/p₂ — der Grenznutzen pro ausgegebenem Euro muss für alle konsumierten Güter gleich sein.",
          "Diese Bedingung MU₁/p₁ = MU₂/p₂ ist intuitiv: Wäre der Grenznutzen pro Euro bei Gut 1 höher, könnte der Haushalt durch Umschichten von Ausgaben von Gut 2 zu Gut 1 seinen Gesamtnutzen erhöhen — im Optimum ist keine solche profitable Umschichtung mehr möglich.",
        ],
        formulas: ["MU₁/p₁ = MU₂/p₂"],
        formulasLatex: ["\\dfrac{MU_1}{p_1} = \\dfrac{MU_2}{p_2}"],
        terms: [{ term: "Haushaltsoptimum", definition: "Güterbündel, bei dem GRS=p₁/p₂ gilt und die Budgetrestriktion bindet." }],
        examples: [
          "Ist MU₁/p₁ = 5 und MU₂/p₂ = 3, lohnt es sich für den Haushalt, mehr von Gut 1 und weniger von Gut 2 zu kaufen, bis sich beide Verhältnisse angleichen — erst dann ist ein Optimum erreicht.",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Individuelle Nachfragefunktion",
        body: [
          "Löst man das Optimierungsproblem für gegebene Preise p₁,p₂ und Einkommen m, erhält man die individuelle Nachfragefunktion x₁*(p₁,p₂,m), die angibt, wie viel der Haushalt von Gut 1 bei gegebenen Preisen und Einkommen optimal konsumiert. Für die häufig verwendete Cobb-Douglas-Nutzenfunktion u=x₁^a·x₂^(1−a) ergibt sich die einfache Form x₁* = a·m/p₁.",
          "Diese Cobb-Douglas-Nachfrage zeigt eine wichtige Eigenschaft: Der Ausgabenanteil für Gut 1 (p₁x₁*/m = a) ist konstant und unabhängig von Preisen und Einkommen — ein charakteristisches, wenn auch idealisiertes Merkmal dieser Präferenzform.",
        ],
        formulas: ["x₁* = a · m / p₁ (Cobb-Douglas)"],
        formulasLatex: ["x_1^{*} = \\dfrac{a \\cdot m}{p_1}"],
        examples: [
          "Bei u=x₁^0,3·x₂^0,7, m=1000€, p₁=20€ ergibt sich x₁* = 0,3·1000/20 = 15 Einheiten von Gut 1 — der Haushalt gibt konstant 30% seines Einkommens für Gut 1 aus, unabhängig vom konkreten Preisniveau.",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Einkommens- und Preiseffekte auf die Nachfrage",
        body: [
          "Ein normales Gut zeichnet sich durch ∂x₁*/∂m > 0 aus (Nachfrage steigt mit dem Einkommen), ein inferiores Gut durch ∂x₁*/∂m < 0. Bei den meisten Gütern gilt zusätzlich das Gesetz der Nachfrage: ∂x₁*/∂p₁ < 0 (Nachfrage sinkt mit steigendem Preis) — eine Ausnahme bilden Giffen-Güter, bei denen dieser Zusammenhang theoretisch umgekehrt sein kann.",
          "Zwei Güter heißen Substitute, wenn eine Preiserhöhung bei Gut 1 die Nachfrage nach Gut 2 erhöht (∂x₂*/∂p₁>0), und Komplemente, wenn sie die Nachfrage nach Gut 2 senkt (∂x₂*/∂p₁<0).",
        ],
        terms: [
          { term: "Normales Gut", definition: "Gut, dessen Nachfrage mit steigendem Einkommen zunimmt." },
          { term: "Inferiores Gut", definition: "Gut, dessen Nachfrage mit steigendem Einkommen abnimmt." },
        ],
        examples: [
          "Steigt bei einem Studierenden das Einkommen und er kauft dadurch weniger Discounter-Nudeln, aber mehr Restaurantbesuche, sind Nudeln in diesem Fall ein inferiores und Restaurantbesuche ein normales Gut.",
        ],
      },
    ],
  },
  // ==================== Kapitel 4 ====================
  {
    id: "konsumentenrente-marktgleichgewicht",
    number: 4,
    title: "Konsumentenrente, Marktnachfrage und Marktgleichgewicht",
    free: false,
    intro:
      "Aggregiert man individuelle Nachfrageentscheidungen über alle Haushalte, entsteht die Marktnachfrage — die Grundlage, um Marktpreise und den Wohlfahrtsgewinn aus Marktteilnahme zu bestimmen.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Konsumentenrente",
        body: [
          "Die Konsumentenrente misst den Wohlfahrtsgewinn der Konsumenten aus der Marktteilnahme: die Fläche zwischen der (individuellen oder Markt-)Nachfragekurve und dem tatsächlich gezahlten Preis, bis zur konsumierten Menge. Sie erfasst, wie viel mehr Konsumenten für die gekaufte Menge zu zahlen bereit gewesen wären, als sie tatsächlich zahlen mussten.",
          "Bei einer linearen Nachfragekurve p(x) = a−bx lässt sich die Konsumentenrente bei Preis p* und Menge x* als Dreiecksfläche berechnen: KR = ½·(a−p*)·x*.",
        ],
        formulas: ["KR = ½ · (a − p*) · x*"],
        formulasLatex: ["KR = \\dfrac{1}{2}(a-p^{*})\\,x^{*}"],
        terms: [{ term: "Konsumentenrente", definition: "Wohlfahrtsgewinn der Konsumenten: Differenz zwischen Zahlungsbereitschaft und tatsächlichem Preis, aufsummiert über die Menge." }],
        examples: [
          "Bei Nachfrage p=50−2x und Marktpreis p*=20 ergibt sich x*=15. Die Konsumentenrente beträgt ½·(50−20)·15 = 225 (Geldeinheiten).",
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Marktnachfrage durch horizontale Aggregation",
        body: [
          "Die Marktnachfrage bei einem gegebenen Preis ergibt sich durch horizontale Addition der individuellen Nachfragemengen aller Marktteilnehmer: X(p) = Σᵢ xᵢ(p). Anders als bei vertikaler Addition (die bei öffentlichen Gütern relevant wird) werden hier bei gegebenem Preis die Mengen addiert, nicht die Zahlungsbereitschaften bei gegebener Menge.",
          "Diese Aggregation erklärt, warum Marktnachfragekurven meist glatter und elastischer verlaufen als individuelle Nachfragekurven: Unregelmäßigkeiten einzelner Haushalte gleichen sich beim Aufsummieren über viele Konsumenten tendenziell aus.",
        ],
        formulas: ["X(p) = Σᵢ xᵢ(p)"],
        formulasLatex: ["X(p) = \\sum_i x_i(p)"],
        examples: [
          "Bei drei identischen Haushalten mit individueller Nachfrage x(p)=10−p ergibt sich die Marktnachfrage X(p)=3·(10−p)=30−3p.",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Marktgleichgewicht und komparative Statik",
        body: [
          "Das Marktgleichgewicht liegt beim Preis p*, bei dem Marktnachfrage X(p*) und Marktangebot S(p*) übereinstimmen. Komparative Statik untersucht, wie sich dieses Gleichgewicht bei Verschiebungen von Angebot oder Nachfrage verändert — etwa durch neue Präferenzen, veränderte Einkommen, oder Kostenschocks auf der Angebotsseite.",
          "Eine Verschiebung der Nachfragekurve nach rechts (z. B. durch Einkommenssteigerung bei einem normalen Gut) erhöht bei unveränderter Angebotskurve sowohl Gleichgewichtspreis als auch Gleichgewichtsmenge.",
        ],
        terms: [{ term: "Marktgleichgewicht", definition: "Preis, bei dem angebotene und nachgefragte Menge übereinstimmen." }],
        examples: [
          "Steigt durch eine Werbekampagne die Nachfrage nach einem Produkt bei jedem Preis, verschiebt sich die Nachfragekurve nach rechts — bei unverändertem Angebot steigen sowohl Preis als auch Menge im neuen Gleichgewicht.",
        ],
      },
    ],
  },
  // ==================== Kapitel 5 ====================
  {
    id: "slutsky-zerlegung",
    number: 5,
    title: "Bekundete Präferenzen und Slutsky-Zerlegung",
    free: false,
    intro:
      "Wenn ein Preis sich ändert, wirkt das gleichzeitig über zwei Kanäle auf die Nachfrage. Die Slutsky-Zerlegung trennt diese Effekte sauber und liefert damit ein tieferes Verständnis der Nachfragereaktion.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Bekundete Präferenzen",
        body: [
          "Das Konzept der bekundeten Präferenzen erlaubt es, Präferenzen aus beobachtetem Kaufverhalten zu erschließen, ohne die zugrundeliegende Nutzenfunktion zu kennen: Wählt ein Haushalt Bündel A, obwohl auch Bündel B erschwinglich gewesen wäre, offenbart er, dass er A mindestens so gut bewertet wie B (A wird als 'direkt bekundet präferiert' zu B bezeichnet).",
          "Das schwache Axiom der bekundeten Präferenz (WARP) verlangt Konsistenz: Wird A gegenüber B bekundet präferiert, darf in keiner anderen Situation B gegenüber A bekundet präferiert werden. Verstöße gegen WARP deuten auf inkonsistentes oder nicht nutzenmaximierendes Verhalten hin.",
        ],
        terms: [{ term: "WARP", definition: "Schwaches Axiom der bekundeten Präferenz: Konsistenzbedingung für beobachtetes Kaufverhalten." }],
        examples: [
          "Kauft ein Haushalt bei Preisen (p₁,p₂) Bündel A, obwohl B erschwinglich war, aber bei anderen Preisen (p₁',p₂') Bündel B, obwohl A erschwinglich gewesen wäre, verletzt dieses Verhalten WARP.",
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Substitutions- und Einkommenseffekt",
        body: [
          "Sinkt der Preis p₁, zerlegt die Slutsky-Zerlegung die gesamte Nachfrageänderung in zwei Teile: den Substitutionseffekt (Gut 1 wird relativ günstiger, der Haushalt substituiert zu Gut 1, selbst wenn man ihn hypothetisch auf dem alten Nutzenniveau hielte) und den Einkommenseffekt (die Kaufkraft des gegebenen Geldeinkommens steigt effektiv, da dasselbe Einkommen nun mehr kaufen kann).",
          "Der Substitutionseffekt wirkt bei einer Preissenkung stets in Richtung höherer Nachfrage nach dem billiger gewordenen Gut. Der Einkommenseffekt wirkt bei normalen Gütern ebenfalls positiv, bei inferioren Gütern jedoch negativ und kann den Substitutionseffekt bei sogenannten Giffen-Gütern theoretisch sogar überkompensieren.",
        ],
        terms: [
          { term: "Substitutionseffekt", definition: "Nachfrageänderung durch veränderte relative Preise bei konstant gehaltenem Nutzenniveau." },
          { term: "Einkommenseffekt", definition: "Nachfrageänderung durch veränderte reale Kaufkraft bei konstanten relativen Preisen." },
        ],
        examples: [
          "Sinkt der Preis für Bus-Tickets, steigt die Nachfrage danach zunächst durch den Substitutionseffekt (Busfahren wird relativ günstiger). Ist Busfahren für den Haushalt ein inferiores Gut, dämpft der Einkommenseffekt (höhere reale Kaufkraft, Umstieg auf Auto/Taxi) diesen Anstieg teilweise.",
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Die Slutsky-Gleichung",
        body: [
          "Formal zerlegt die Slutsky-Gleichung die Gesamtableitung der Nachfrage nach dem Preis in Substitutions- und Einkommenseffekt: ∂x₁/∂p₁ = ∂x₁ˢ/∂p₁ − x₁·∂x₁/∂m, wobei der erste Term den (stets negativen) Substitutionseffekt bei konstantem Nutzen darstellt und der zweite Term den Einkommenseffekt erfasst.",
          "Diese Zerlegung erklärt formal, warum Giffen-Güter (bei denen die Gesamtnachfrage mit dem Preis steigt) theoretisch möglich, aber empirisch extrem selten sind: Sie erfordern einen negativen Einkommenseffekt, der den stets negativen Substitutionseffekt betragsmäßig übersteigt — eine Konstellation, die nur bei sehr speziellen Gütern (typischerweise Grundnahrungsmittel armer Haushalte) überhaupt denkbar ist.",
        ],
        formulas: ["∂x₁/∂p₁ = ∂x₁ˢ/∂p₁ − x₁ · ∂x₁/∂m"],
        formulasLatex: ["\\dfrac{\\partial x_1}{\\partial p_1} = \\dfrac{\\partial x_1^{s}}{\\partial p_1} - x_1\\cdot\\dfrac{\\partial x_1}{\\partial m}"],
        terms: [{ term: "Slutsky-Gleichung", definition: "Zerlegung der Preisableitung der Nachfrage in Substitutions- und Einkommenseffekt." }],
        examples: [
          "Für ein normales Gut sind beide Terme der Slutsky-Gleichung negativ (bei Preissenkung), die Gesamtnachfrage reagiert also eindeutig negativ auf den Preis — für ein Giffen-Gut überwiegt der (positive, da inferiores Gut mit ∂x₁/∂m<0) zweite Term.",
        ],
      },
    ],
  },
  // ==================== Kapitel 6 ====================
  {
    id: "technologie-gewinnmaximierung",
    number: 6,
    title: "Technologie und Gewinnmaximierung der Unternehmung",
    free: false,
    intro:
      "Nach der Haushaltstheorie wendet sich dieses Kapitel der Angebotsseite zu: Wie modellieren wir die Produktionsmöglichkeiten einer Unternehmung, und wie entscheidet sie über den gewinnmaximalen Faktoreinsatz?",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Produktionsfunktion und Grenzprodukt",
        body: [
          "Die Produktionsfunktion y=f(L,K) gibt den maximal möglichen Output bei gegebenem Einsatz von Arbeit L und Kapital K an. Das Grenzprodukt der Arbeit MPL=∂f/∂L misst den zusätzlichen Output einer marginalen zusätzlichen Arbeitseinheit bei konstantem K. Üblicherweise nimmt MPL mit steigendem L ab (abnehmender Grenzertrag).",
          "Isoquanten verbinden alle Faktorkombinationen (L,K), die denselben Output erzeugen — das Pendant zu Indifferenzkurven auf der Konsumentenseite. Die Grenzrate der technischen Substitution (GRTS) misst die Steigung der Isoquante: GRTS = MPL/MPK.",
        ],
        formulas: ["GRTS = MPL / MPK"],
        formulasLatex: ["GRTS = \\dfrac{MPL}{MPK}"],
        terms: [
          { term: "Grenzprodukt der Arbeit (MPL)", definition: "Zusätzlicher Output durch eine marginale zusätzliche Arbeitseinheit bei konstantem Kapitaleinsatz." },
          { term: "Isoquante", definition: "Menge der Faktorkombinationen, die denselben Output erzeugen." },
        ],
        examples: [
          "Erhöht ein Betrieb den Arbeitseinsatz von 10 auf 11 Stunden bei konstantem Kapital und steigt der Output dadurch um 5 Einheiten, beträgt das Grenzprodukt der Arbeit an dieser Stelle MPL≈5.",
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Skalenerträge",
        body: [
          "Skalenerträge beschreiben, wie sich der Output verändert, wenn ALLE Faktoren gleichzeitig um denselben Faktor t skaliert werden: f(tL,tK) > t·f(L,K) bedeutet zunehmende Skalenerträge, f(tL,tK) = t·f(L,K) konstante Skalenerträge, und f(tL,tK) < t·f(L,K) abnehmende Skalenerträge.",
          "Skalenerträge und abnehmende Grenzprodukte sind unabhängige Konzepte: Eine Produktionsfunktion kann gleichzeitig abnehmende Grenzprodukte bei jedem einzelnen Faktor UND konstante (oder sogar zunehmende) Skalenerträge aufweisen, wenn alle Faktoren gemeinsam erhöht werden.",
        ],
        terms: [{ term: "Skalenerträge", definition: "Verhältnis der Outputänderung zur proportionalen Änderung ALLER Faktoren gleichzeitig." }],
        examples: [
          "Für f(L,K)=L^0,5·K^0,5 gilt f(tL,tK) = t^0,5L^0,5·t^0,5K^0,5 = t·f(L,K) — konstante Skalenerträge, obwohl sowohl MPL als auch MPK jeweils fallen, wenn nur ein Faktor isoliert erhöht wird.",
        ],
      },
      {
        id: "6-3",
        heading: "6.3 Gewinnmaximierung",
        body: [
          "Eine gewinnmaximierende Unternehmung wählt Output y und Faktoreinsatz so, dass π = p·y − w·L − r·K maximal wird (p=Produktpreis, w=Lohnsatz, r=Kapitalkosten). Im Optimum entspricht der Wert des Grenzprodukts jedes Faktors genau seinem Faktorpreis: p·MPL = w und p·MPK = r.",
          "Diese Bedingung ist analog zur Haushaltsoptimierung: Statt Grenznutzen pro Euro anzugleichen, gleicht die Unternehmung den Wert des Grenzprodukts pro eingesetztem Faktor an — solange p·MPL > w lohnt sich zusätzliche Arbeit, solange p·MPL < w lohnt sich Abbau.",
        ],
        formulas: ["p · MPL = w"],
        formulasLatex: ["p \\cdot MPL = w"],
        terms: [{ term: "Gewinnmaximierungsbedingung", definition: "Wert des Grenzprodukts eines Faktors entspricht im Optimum seinem Faktorpreis." }],
        examples: [
          "Bei p=10€, w=25€ lohnt sich zusätzliche Arbeit, solange MPL>2,5 (da p·MPL>w erst ab MPL>2,5 nicht mehr gilt) — die Unternehmung stellt Arbeit ein, bis MPL genau auf 2,5 gefallen ist.",
        ],
      },
    ],
  },
  // ==================== Kapitel 7 ====================
  {
    id: "kostenminimierung-kostenkurven",
    number: 7,
    title: "Kostenminimierung und Kostenkurven",
    free: false,
    intro:
      "Bevor eine Unternehmung ihren Gewinn maximiert, muss sie für jeden Output die kostengünstigste Faktorkombination wählen. Dieses Kapitel behandelt Kostenminimierung und die daraus abgeleiteten Kostenkurven.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Kostenminimierung bei gegebenem Output",
        body: [
          "Bei gegebenem Zieloutput y wählt die Unternehmung die Faktorkombination (L,K), die die Kosten C=wL+rK minimiert, unter der Nebenbedingung f(L,K)=y. Im Optimum ist die Isokostengerade tangential zur Isoquante: GRTS = MPL/MPK = w/r.",
          "Diese Tangentialbedingung besagt, dass im Kostenminimum das Verhältnis der Grenzprodukte genau dem Verhältnis der Faktorpreise entspricht — analog zur Tangentialbedingung im Haushaltsoptimum.",
        ],
        formulas: ["MPL/MPK = w/r"],
        formulasLatex: ["\\dfrac{MPL}{MPK} = \\dfrac{w}{r}"],
        examples: [
          "Ist w/r=2 (Arbeit doppelt so teuer wie Kapital pro Einheit), aber MPL/MPK=3 (Arbeit ist relativ produktiver), lohnt es sich für den Betrieb, mehr Arbeit und weniger Kapital einzusetzen, bis sich beide Verhältnisse angleichen.",
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Kostenfunktion und kurzfristige Kostenkurven",
        body: [
          "Die Kostenfunktion C(y) gibt die minimalen Kosten zur Produktion von y Einheiten an. Aus ihr leiten sich ab: Durchschnittskosten AC(y)=C(y)/y, Grenzkosten MC(y)=C'(y), sowie kurzfristig fixe Kosten (unabhängig vom Output) und variable Kosten (outputabhängig).",
          "Ein zentraler Zusammenhang: Solange die Grenzkosten unter den Durchschnittskosten liegen (MC<AC), sinken die Durchschnittskosten mit steigendem Output; sobald MC>AC, steigen die Durchschnittskosten. Die Grenzkostenkurve schneidet die Durchschnittskostenkurve daher stets in deren Minimum.",
        ],
        formulas: ["AC(y) = C(y)/y", "MC(y) = C'(y)"],
        formulasLatex: ["AC(y) = \\dfrac{C(y)}{y}", "MC(y) = C'(y)"],
        terms: [{ term: "Grenzkosten (MC)", definition: "Zusätzliche Kosten einer marginalen zusätzlichen Outputeinheit." }],
        examples: [
          "Bei C(y)=100+2y+0,5y² betragen die Grenzkosten MC(y)=2+y. Bei y=20 gilt MC=22, AC=(100+40+200)/20=17 — MC>AC, die Durchschnittskosten steigen an dieser Stelle mit dem Output.",
        ],
      },
      {
        id: "7-3",
        heading: "7.3 Langfristige Kostenkurven",
        body: [
          "Langfristig sind alle Faktoren variabel, sodass jede Ausbringungsmenge zu ihren minimal möglichen Kosten produziert wird. Die langfristige Durchschnittskostenkurve ist die 'untere Einhüllende' aller kurzfristigen Durchschnittskostenkurven bei unterschiedlicher (fixer) Kapitalausstattung.",
          "U-förmige langfristige Durchschnittskostenkurven entstehen durch das Zusammenspiel von zunächst zunehmenden Skalenerträgen (fallende AC) und später abnehmenden Skalenerträgen (steigende AC) — der Punkt minimaler langfristiger Durchschnittskosten heißt mindestoptimale Betriebsgröße.",
        ],
        terms: [{ term: "Mindestoptimale Betriebsgröße", definition: "Outputniveau, bei dem die langfristigen Durchschnittskosten minimal sind." }],
        examples: [
          "Ein Stahlwerk mit stark zunehmenden Skalenerträgen bei kleinen Ausbringungsmengen erreicht seine mindestoptimale Betriebsgröße erst bei sehr hohem Output — ein Grund für die hohe Marktkonzentration in kapitalintensiven Industrien.",
        ],
      },
    ],
  },
  // ==================== Kapitel 8 ====================
  {
    id: "angebot-marktangebot",
    number: 8,
    title: "Angebot der Unternehmung und Marktangebot der Branche",
    free: false,
    intro:
      "Aus der Kostenstruktur einer Unternehmung lässt sich ihre Angebotsentscheidung ableiten. Aggregiert man über alle Unternehmen einer Branche, ergibt sich das Marktangebot — das Gegenstück zur Marktnachfrage.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Angebotsentscheidung der Unternehmung bei vollkommener Konkurrenz",
        body: [
          "Ein preisnehmendes (kompetitives) Unternehmen wählt den Output y so, dass Grenzkosten dem Marktpreis entsprechen: p=MC(y). Diese Bedingung folgt aus der Gewinnmaximierung: solange p>MC lohnt sich zusätzlicher Output, solange p<MC lohnt sich Reduktion.",
          "Kurzfristig produziert das Unternehmen weiter, solange der Preis mindestens die durchschnittlichen variablen Kosten deckt (Abschaltpunkt bei p=AVC(y)); langfristig muss der Preis mindestens die gesamten Durchschnittskosten decken, da sonst auch die Fixkosten nicht gedeckt werden und ein Marktaustritt vorzuziehen ist.",
        ],
        formulas: ["p = MC(y)"],
        formulasLatex: ["p = MC(y)"],
        terms: [{ term: "Abschaltpunkt", definition: "Preis in Höhe der minimalen durchschnittlichen variablen Kosten; darunter lohnt sich kurzfristige Produktionseinstellung." }],
        examples: [
          "Deckt der Marktpreis zwar die variablen Kosten, aber nicht die Fixkosten, produziert das Unternehmen kurzfristig trotzdem weiter (der Verlust wäre bei Stilllegung durch die weiterlaufenden Fixkosten sogar noch größer), plant aber langfristig den Marktaustritt.",
        ],
      },
      {
        id: "8-2",
        heading: "8.2 Marktangebot und Branchengleichgewicht",
        body: [
          "Das kurzfristige Marktangebot ergibt sich durch horizontale Addition der individuellen Angebotskurven (=Grenzkostenkurven oberhalb des Abschaltpunkts) aller aktiven Unternehmen. Langfristig kommt der Marktein- und -austritt hinzu: Bei Gewinnen treten neue Unternehmen ein (Angebot steigt, Preis sinkt), bei Verlusten treten Unternehmen aus (Angebot sinkt, Preis steigt).",
          "In einem langfristigen Wettbewerbsgleichgewicht mit freiem Marktein- und -austritt und identischer Technologie werden die ökonomischen Gewinne aller Unternehmen auf null gedrückt: Der Preis entspricht dem Minimum der langfristigen Durchschnittskosten.",
        ],
        terms: [{ term: "Langfristiges Wettbewerbsgleichgewicht", definition: "Zustand mit freiem Marktein-/-austritt, in dem der Preis den minimalen langfristigen Durchschnittskosten entspricht und Nullgewinne herrschen." }],
        examples: [
          "Erzielen Unternehmen einer Branche kurzfristig hohe Gewinne, treten neue Anbieter in den Markt ein; dies verschiebt das Marktangebot nach rechts und senkt den Preis, bis im langfristigen Gleichgewicht keine ökonomischen Gewinne mehr verbleiben.",
        ],
      },
    ],
  },
  // ==================== Kapitel 9 ====================
  {
    id: "monopol",
    number: 9,
    title: "Monopol",
    free: false,
    intro:
      "Nicht jeder Markt ist durch vollkommene Konkurrenz gekennzeichnet. Ein Monopol — ein einzelner Anbieter ohne direkte Konkurrenz — verhält sich fundamental anders, mit spürbaren Folgen für Preis, Menge und Wohlfahrt.",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Preissetzung des Monopolisten",
        body: [
          "Anders als ein preisnehmendes Unternehmen sieht sich ein Monopolist der gesamten (fallenden) Marktnachfragekurve gegenüber: Um mehr zu verkaufen, muss er den Preis senken — auch für bereits verkaufte Einheiten (bei einheitlicher Preissetzung). Deshalb liegt der Grenzerlös MR unterhalb des Preises: MR(y) = p(y) + y·p'(y) < p(y), da p'(y)<0.",
          "Der gewinnmaximale Output ergibt sich aus MR(y)=MC(y). Da MR<p, resultiert daraus ein Monopolpreis oberhalb der Grenzkosten (p>MC) — im Gegensatz zur vollkommenen Konkurrenz, wo p=MC gilt.",
        ],
        formulas: ["MR(y) = p(y) + y · p'(y)"],
        formulasLatex: ["MR(y) = p(y) + y\\cdot p'(y)"],
        terms: [{ term: "Grenzerlös (MR)", definition: "Zusätzlicher Erlös einer marginalen zusätzlichen Verkaufseinheit; beim Monopolisten stets kleiner als der Preis." }],
        examples: [
          "Bei Nachfrage p(y)=100−y gilt MR(y)=100−2y. Bei Grenzkosten MC=20 setzt der Monopolist MR=MC: 100−2y=20 → y=40, und der Preis beträgt p(40)=60 — deutlich über den Grenzkosten von 20.",
        ],
      },
      {
        id: "9-2",
        heading: "9.2 Wohlfahrtsverlust des Monopols",
        body: [
          "Weil der Monopolist weniger produziert und einen höheren Preis verlangt als im Wettbewerbsfall (p=MC), entsteht ein Wohlfahrtsverlust (Deadweight Loss): Einige Konsumenten, deren Zahlungsbereitschaft über den Grenzkosten, aber unter dem Monopolpreis liegt, werden nicht bedient, obwohl ein Tausch für beide Seiten vorteilhaft wäre.",
          "Preisdiskriminierung (unterschiedliche Preise für unterschiedliche Konsumentengruppen oder Mengen) kann diesen Wohlfahrtsverlust teilweise reduzieren, da sie dem Monopolisten erlaubt, mehr Konsumentengruppen zu bedienen — verschiebt aber gleichzeitig einen größeren Teil der Wohlfahrt vom Konsumenten zum Monopolisten.",
        ],
        terms: [{ term: "Wohlfahrtsverlust des Monopols", definition: "Effizienzverlust durch monopolistische Unterproduktion im Vergleich zum Wettbewerbsfall." }],
        examples: [
          "Ein Pharmaunternehmen mit Patentmonopol setzt einen Preis deutlich über den Grenzkosten der Produktion; Patienten mit Zahlungsbereitschaft zwischen Grenzkosten und Monopolpreis bleiben unversorgt, obwohl ein Verkauf zu Grenzkosten für beide Seiten vorteilhaft gewesen wäre.",
        ],
      },
    ],
  },
  // ==================== Kapitel 10 ====================
  {
    id: "oligopoltheorie",
    number: 10,
    title: "Oligopoltheorie",
    free: false,
    intro:
      "Zwischen den Extremen vollkommener Konkurrenz und Monopol liegt das Oligopol: wenige Anbieter, deren Entscheidungen sich gegenseitig direkt beeinflussen. Dieses Kapitel behandelt die wichtigsten Oligopolmodelle.",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Das Cournot-Modell (Mengenwettbewerb)",
        body: [
          "Im Cournot-Modell wählen Unternehmen gleichzeitig Mengen, wobei jedes Unternehmen die Mengenentscheidung der Konkurrenz als gegeben annimmt. Für zwei symmetrische Unternehmen mit linearer Nachfrage p=a−b(y₁+y₂) und konstanten Grenzkosten c ergibt sich im Cournot-Gleichgewicht y₁*=y₂*=(a−c)/(3b) — jedes Unternehmen produziert weniger als ein Monopolist, aber mehr als im perfekten Wettbewerb.",
          "Mit zunehmender Anzahl symmetrischer Cournot-Unternehmen nähert sich der Gesamtoutput dem Wettbewerbsoutput an, und der Preis nähert sich den Grenzkosten — das Cournot-Modell interpoliert also stetig zwischen Monopol (n=1) und vollkommener Konkurrenz (n→∞).",
        ],
        formulas: ["y₁* = y₂* = (a−c) / (3b)"],
        formulasLatex: ["y_1^{*} = y_2^{*} = \\dfrac{a-c}{3b}"],
        terms: [{ term: "Cournot-Gleichgewicht", definition: "Nash-Gleichgewicht im Mengenwettbewerb, bei dem jedes Unternehmen optimal auf die (als gegeben angenommene) Menge der Konkurrenz reagiert." }],
        examples: [
          "Bei a=100, b=1, c=10 ergibt sich im Duopol y₁*=y₂*=30, Gesamtmenge 60, Preis p=100−60=40 — deutlich näher am Wettbewerbspreis (=10) als der Monopolpreis (=55) es wäre.",
        ],
      },
      {
        id: "10-2",
        heading: "10.2 Das Bertrand-Modell (Preiswettbewerb)",
        body: [
          "Im Bertrand-Modell konkurrieren Unternehmen stattdessen über Preise bei homogenen Gütern: Konsumenten kaufen ausschließlich beim günstigsten Anbieter. Bereits bei nur zwei symmetrischen Unternehmen mit identischen Grenzkosten c führt dies zum sogenannten Bertrand-Paradox: Im Gleichgewicht setzen beide Unternehmen p=c (Preis gleich Grenzkosten), obwohl nur zwei Anbieter im Markt sind.",
          "Dieses scheinbar paradoxe Ergebnis entsteht, weil jedes Unternehmen bei einem Preis über c einen Anreiz hat, minimal zu unterbieten und den gesamten Markt zu gewinnen — ein Prozess, der erst bei p=c endet, da darunter Verluste entstünden.",
        ],
        terms: [{ term: "Bertrand-Paradox", definition: "Ergebnis, dass bereits zwei Anbieter im Preiswettbewerb mit homogenen Gütern zu Preis=Grenzkosten führen können." }],
        examples: [
          "Zwei Tankstellen mit identischen Grenzkosten von 1,50€/Liter unterbieten sich im Preis gegenseitig, solange einer über dem anderen liegt — im Bertrand-Gleichgewicht setzen beide exakt 1,50€, ohne ökonomischen Gewinn.",
        ],
      },
      {
        id: "10-3",
        heading: "10.3 Preisführerschaft (Stackelberg-Modell)",
        body: [
          "Im Stackelberg-Modell entscheidet ein Unternehmen (der Marktführer) seine Menge zuerst, das andere (der Folger) beobachtet diese Menge und reagiert optimal darauf. Der Marktführer berücksichtigt bei seiner Entscheidung die erwartete Reaktion des Folgers und erzielt dadurch einen First-Mover-Vorteil: höhere Menge und höheren Gewinn als im simultanen Cournot-Fall.",
          "Für dieselbe lineare Nachfrage wie oben ergibt sich im Stackelberg-Gleichgewicht y_Führer=(a−c)/(2b), also mehr als im Cournot-Fall (a−c)/(3b), während der Folger entsprechend weniger produziert — der First-Mover profitiert auf Kosten des Folgers.",
        ],
        terms: [{ term: "First-Mover-Vorteil", definition: "Vorteil des zuerst entscheidenden Unternehmens, das die Reaktion des Folgers antizipieren kann." }],
        examples: [
          "Ein etablierter Hersteller kündigt seine Produktionsmenge frühzeitig öffentlich an; ein neuer Wettbewerber passt seine eigene, kleinere Menge an diese bereits feststehende Größe an — der etablierte Hersteller profitiert von seiner Vorreiterrolle.",
        ],
      },
    ],
  },
  // ==================== Kapitel 11 ====================
  {
    id: "spieltheorie",
    number: 11,
    title: "Spieltheorie",
    free: false,
    intro:
      "Oligopolmodelle sind Spezialfälle eines allgemeineren Werkzeugs: der Spieltheorie. Dieses Kapitel behandelt die Grundkonzepte strategischer Interaktion, die weit über Märkte hinaus anwendbar sind.",
    sections: [
      {
        id: "11-1",
        heading: "11.1 Normalform-Spiele und Nash-Gleichgewicht",
        body: [
          "Ein Spiel in Normalform besteht aus Spielern, ihren Strategiemengen und einer Auszahlungsfunktion für jede Strategiekombination. Ein Nash-Gleichgewicht ist eine Strategiekombination, bei der kein Spieler durch einseitiges Abweichen seine eigene Auszahlung verbessern kann — jeder Spieler spielt die beste Antwort auf die Strategien der anderen.",
          "Ein Nash-Gleichgewicht muss nicht das gesellschaftlich beste Ergebnis liefern: Spieler können in einem Gleichgewicht gefangen sein, das für alle Beteiligten schlechter ist als eine andere, nicht-stabile Strategiekombination — das klassische Beispiel dafür ist das Gefangenendilemma.",
        ],
        terms: [{ term: "Nash-Gleichgewicht", definition: "Strategiekombination, bei der kein Spieler durch einseitiges Abweichen profitiert." }],
        examples: [
          "In einem einfachen 2×2-Spiel mit Auszahlungsmatrix, bei der beide Spieler eine dominante Strategie 'Verraten' besitzen, ist (Verraten, Verraten) das eindeutige Nash-Gleichgewicht — auch wenn (Schweigen, Schweigen) für beide Spieler eine höhere Auszahlung ergäbe.",
        ],
      },
      {
        id: "11-2",
        heading: "11.2 Das Gefangenendilemma und dominante Strategien",
        body: [
          "Eine Strategie heißt (strikt) dominant, wenn sie unabhängig von der Wahl der anderen Spieler stets die beste Antwort ist. Im Gefangenendilemma besitzt jeder Spieler die dominante Strategie 'Verraten' (unabhängig davon, was der andere tut, ist Verraten für den Einzelnen besser) — obwohl beide Spieler bei gegenseitigem Schweigen besser gestellt wären.",
          "Dieses Muster erklärt viele reale Koordinationsprobleme: von Kartellabsprachen (jedes Kartellmitglied hat einen individuellen Anreiz zu betrügen, obwohl alle vom gemeinsamen Einhalten profitieren würden) bis zu Umweltverhandlungen (jedes Land hat einen individuellen Anreiz, weniger als vereinbart zu reduzieren).",
        ],
        terms: [{ term: "Dominante Strategie", definition: "Strategie, die unabhängig von den Entscheidungen anderer Spieler stets optimal ist." }],
        examples: [
          "Zwei Ölförderländer vereinbaren, ihre Fördermenge zu drosseln, um den Preis zu stützen; für jedes Land ist es individuell rational, die Vereinbarung zu brechen und mehr zu fördern (höherer eigener Gewinn) — wodurch die Absprache oft zusammenbricht.",
        ],
      },
      {
        id: "11-3",
        heading: "11.3 Sequentielle Spiele und Rückwärtsinduktion",
        body: [
          "Bei sequentiellen Spielen (extensivform) entscheiden Spieler nacheinander, wobei spätere Spieler die Entscheidungen früherer Spieler beobachten können. Rückwärtsinduktion löst solche Spiele, indem man beim letzten Entscheidungsknoten beginnt und sich rückwärts durch den Spielbaum arbeitet, wobei jeder Spieler die optimale Reaktion der nachfolgenden Spieler antizipiert.",
          "Diese Methode liefert teilspielperfekte Gleichgewichte — Strategieprofile, die auch in jedem (auch nie erreichten) Teilspiel ein Nash-Gleichgewicht bilden, und schließt dadurch unglaubwürdige Drohungen aus, die in einer reinen Normalform-Analyse fälschlich als Gleichgewicht erscheinen könnten.",
        ],
        terms: [{ term: "Rückwärtsinduktion", definition: "Lösungsmethode für sequentielle Spiele: vom letzten Zug rückwärts zum ersten." }],
        examples: [
          "Ein etablierter Anbieter droht, bei Markteintritt eines Konkurrenten die Preise aggressiv zu senken. Rückwärtsinduktion zeigt: Ist ein Preiskrieg für den Etablierten selbst unprofitabel, ist die Drohung unglaubwürdig, und der Konkurrent sollte trotzdem eintreten.",
        ],
      },
    ],
  },
  // ==================== Kapitel 12 ====================
  {
    id: "tausch-wohlfahrt-intertemporal",
    number: 12,
    title: "Tausch, Wohlfahrtstheorie und intertemporale Entscheidung",
    free: false,
    intro:
      "Zum Abschluss weitet dieses Kapitel den Blick von einzelnen Märkten auf das Zusammenspiel mehrerer Akteure und Zeitpunkte: Wie profitieren zwei Tauschpartner voneinander, wann ist eine Allokation effizient, und wie entscheiden Haushalte über Konsum und Ersparnis über die Zeit?",
    sections: [
      {
        id: "12-1",
        heading: "12.1 Die Edgeworth-Box und Tauschgleichgewicht",
        body: [
          "Die Edgeworth-Box stellt eine Tauschökonomie mit zwei Gütern und zwei Konsumenten grafisch dar: Jeder Punkt in der Box repräsentiert eine vollständige Allokation der Gesamtausstattung beider Güter auf beide Konsumenten. Ausgehend von einer Anfangsausstattung tauschen beide Parteien zu einem Preisverhältnis, bis sich ein Gleichgewicht einstellt, in dem beide Nachfragen mit dem verfügbaren Angebot übereinstimmen.",
          "Im Tauschgleichgewicht sind die Grenzraten der Substitution beider Konsumenten gleich (beide tangential zur gemeinsamen Preisgeraden) — genau die Bedingung, die im nächsten Abschnitt als Pareto-Effizienz identifiziert wird.",
        ],
        terms: [{ term: "Edgeworth-Box", definition: "Grafische Darstellung aller möglichen Allokationen einer Zwei-Güter-Zwei-Personen-Tauschökonomie." }],
        examples: [
          "Besitzt Person A anfangs viel Obst und wenig Brot, Person B umgekehrt viel Brot und wenig Obst, tauschen beide bis zu einem Preisverhältnis, das ihre jeweiligen Grenzraten der Substitution angleicht — beide sind danach besser gestellt als in der Anfangsausstattung.",
        ],
      },
      {
        id: "12-2",
        heading: "12.2 Pareto-Effizienz und die Wohlfahrtssätze",
        body: [
          "Eine Allokation heißt Pareto-effizient, wenn keine andere Allokation existiert, die mindestens einen Konsumenten besser und keinen schlechter stellt. Der erste Hauptsatz der Wohlfahrtsökonomik besagt: Jedes Wettbewerbsgleichgewicht (unter Standardannahmen wie vollständigen Märkten und keinen externen Effekten) ist Pareto-effizient.",
          "Der zweite Hauptsatz besagt umgekehrt: Jede Pareto-effiziente Allokation lässt sich (unter geeigneten Konvexitätsannahmen) als Wettbewerbsgleichgewicht zu einer geeignet gewählten Anfangsausstattung realisieren — ökonomisch bedeutet dies, dass Verteilungsziele grundsätzlich getrennt von Effizienzzielen über Pauschaltransfers verfolgt werden können, ohne die Markteffizienz selbst zu beeinträchtigen.",
        ],
        terms: [
          { term: "Pareto-Effizienz", definition: "Zustand, in dem niemand besser gestellt werden kann, ohne einen anderen schlechter zu stellen." },
          { term: "Erster Hauptsatz der Wohlfahrtsökonomik", definition: "Jedes Wettbewerbsgleichgewicht ist unter Standardannahmen Pareto-effizient." },
        ],
        examples: [
          "Eine Allokation, bei der noch ein für beide Seiten vorteilhafter Tausch möglich wäre (z. B. A hat einen Grenznutzenüberschuss bei Gut 1, B bei Gut 2), ist nicht Pareto-effizient — ein Tausch würde beide besser stellen.",
        ],
      },
      {
        id: "12-3",
        heading: "12.3 Intertemporale Konsumentscheidung",
        body: [
          "Ein Haushalt, der über zwei Perioden konsumiert und spart, maximiert seinen Gesamtnutzen u(c₁,c₂) unter einer intertemporalen Budgetrestriktion c₁ + c₂/(1+r) = m₁ + m₂/(1+r), wobei r der Zinssatz ist, zu dem gespart oder geliehen werden kann. Der Barwert des Konsums über beide Perioden muss dem Barwert des Einkommens entsprechen.",
          "Die Steigung dieser intertemporalen Budgetgeraden beträgt −(1+r): ein höherer Zinssatz erhöht die Opportunitätskosten heutigen Konsums (mehr zukünftiger Konsum muss aufgegeben werden, wenn man heute einen Euro weniger spart) und dreht die Budgetgerade steiler.",
        ],
        formulas: ["c₁ + c₂/(1+r) = m₁ + m₂/(1+r)"],
        formulasLatex: ["c_1 + \\dfrac{c_2}{1+r} = m_1 + \\dfrac{m_2}{1+r}"],
        terms: [{ term: "Intertemporale Budgetrestriktion", definition: "Budgetrestriktion, die Konsum und Einkommen über mehrere Perioden zum Barwert verknüpft." }],
        examples: [
          "Bei m₁=50.000€, m₂=55.000€ und r=10% beträgt der Barwert des Gesamteinkommens 50.000+55.000/1,1=100.000€ — der Haushalt kann jede Konsumkombination (c₁,c₂) wählen, deren Barwert diesen Betrag nicht überschreitet, etwa durch Sparen in Periode 1, um in Periode 2 mehr zu konsumieren.",
        ],
      },
    ],
  },
];
