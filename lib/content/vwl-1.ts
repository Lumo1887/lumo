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
          { term: "Engelkurve", definition: "Graph der nachgefragten Menge eines Gutes xᵢ*(m) in Abhängigkeit vom Einkommen bei festgehaltenen Preisen." },
          { term: "Einkommens-Expansionspfad", definition: "Ort aller optimalen Güterbündel in der (x₁,x₂)-Ebene, den der Haushalt bei steigendem Einkommen und festgehaltenen Preisen durchläuft." },
        ],
        examples: [
          "Steigt bei einem Studierenden das Einkommen und er kauft dadurch weniger Discounter-Nudeln, aber mehr Restaurantbesuche, sind Nudeln in diesem Fall ein inferiores und Restaurantbesuche ein normales Gut — die Engelkurve für Nudeln fällt in diesem Einkommensbereich, die für Restaurantbesuche steigt. Verbindet man alle optimalen Bündel (x₁*,x₂*) für wachsendes Einkommen bei festen Preisen miteinander, erhält man den Einkommens-Expansionspfad.",
        ],
      },
      {
        id: "3-4",
        heading: "3.4 Elastizitäten der Nachfrage",
        body: [
          "Die Preiselastizität der Nachfrage misst, wie stark die nachgefragte Menge relativ auf eine relative Preisänderung reagiert: ε = (∂x/∂p)·(p/x). Da Nachfragekurven meist fallen, ist ε in der Regel negativ; oft wird der Betrag |ε| betrachtet. Bei |ε|>1 heißt die Nachfrage elastisch (die Menge reagiert überproportional), bei |ε|<1 unelastisch, bei |ε|=1 einheitselastisch.",
          "Die Einkommenselastizität η = (∂x/∂m)·(m/x) misst analog die Reaktion der Nachfrage auf Einkommensänderungen: η>0 kennzeichnet ein normales Gut, η<0 ein inferiores Gut. Die Kreuzpreiselastizität ε₁₂ = (∂x₁/∂p₂)·(p₂/x₁) misst schließlich, wie die Nachfrage nach Gut 1 auf eine Preisänderung von Gut 2 reagiert: ε₁₂>0 zeigt Substitute an (steigt p₂, weicht man auf Gut 1 aus), ε₁₂<0 zeigt Komplemente an.",
          "Der Zusammenhang zwischen Preiselastizität und Erlös ist zentral für Preisentscheidungen: Bei elastischer Nachfrage (|ε|>1) senkt eine Preiserhöhung den Gesamterlös p·x, da der Mengenrückgang den Preiseffekt überkompensiert; bei unelastischer Nachfrage (|ε|<1) erhöht eine Preiserhöhung dagegen den Gesamterlös.",
        ],
        formulas: ["ε = (∂x/∂p) · (p/x)", "η = (∂x/∂m) · (m/x)"],
        formulasLatex: ["\\varepsilon = \\dfrac{\\partial x}{\\partial p}\\cdot\\dfrac{p}{x}", "\\eta = \\dfrac{\\partial x}{\\partial m}\\cdot\\dfrac{m}{x}"],
        terms: [
          { term: "Preiselastizität der Nachfrage", definition: "Relative Mengenreaktion auf eine relative Preisänderung, ε=(∂x/∂p)·(p/x)." },
          { term: "Kreuzpreiselastizität", definition: "Relative Reaktion der Nachfrage nach einem Gut auf die relative Preisänderung eines anderen Gutes." },
        ],
        examples: [
          "Bei linearer Nachfrage x(p)=120−2p gilt ∂x/∂p=−2. Bei p=40 ist x=40, also ε=−2·(40/40)=−2 — die Nachfrage ist bei diesem Preis elastisch (|ε|=2>1): eine Preiserhöhung um 1% würde die Menge um etwa 2% senken und den Gesamterlös p·x senken.",
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
      {
        id: "4-4",
        heading: "4.4 Produzentenrente",
        body: [
          "Analog zur Konsumentenrente misst die Produzentenrente den Wohlfahrtsgewinn der Anbieter aus der Marktteilnahme: die Fläche zwischen dem tatsächlich erhaltenen Preis und der (steigenden) Grenzkostenkurve, bis zur angebotenen Menge. Sie erfasst, wie viel mehr Anbieter für die verkaufte Menge insgesamt erhalten haben, als sie an Grenzkosten aufwenden mussten — ökonomisch entspricht sie dem Erlös abzüglich der variablen Kosten.",
          "Bei einer linearen Angebotskurve p(y) = c+dy lässt sich die Produzentenrente bei Preis p* und Menge y* ebenfalls als Dreiecksfläche berechnen: PR = ½·(p*−c)·y*.",
        ],
        formulas: ["PR = ½ · (p* − c) · y*"],
        formulasLatex: ["PR = \\dfrac{1}{2}(p^{*}-c)\\,y^{*}"],
        terms: [{ term: "Produzentenrente", definition: "Wohlfahrtsgewinn der Anbieter: Differenz zwischen erhaltenem Preis und Grenzkosten, aufsummiert über die angebotene Menge." }],
        examples: [
          "Bei Angebot p=10+2y und Marktpreis p*=40 ergibt sich y*=15. Die Produzentenrente beträgt ½·(40−10)·15 = 225 (Geldeinheiten).",
        ],
      },
      {
        id: "4-5",
        heading: "4.5 Steuerinzidenz und Wohlfahrtsverlust einer Mengensteuer",
        body: [
          "Erhebt der Staat eine Mengensteuer t pro verkaufter Einheit, klafft der Preis, den Konsumenten zahlen (p_D), und der Preis, den Anbieter netto erhalten (p_S), um genau t auseinander: p_D − p_S = t. Die tatsächliche Aufteilung dieser Steuerlast zwischen Konsumenten und Anbietern (Steuerinzidenz) hängt dabei NICHT davon ab, wer die Steuer formal abführen muss, sondern von den relativen Steigungen (bzw. Elastizitäten) von Angebot und Nachfrage: Je steiler (unelastischer) eine Marktseite im Vergleich zur anderen ist, desto größer ihr Anteil an der Steuerlast.",
          "Da bei einer Steuer weniger gehandelt wird als im unbesteuerten Gleichgewicht (die Menge sinkt von y⁰ auf y^t), entsteht ein Wohlfahrtsverlust (Deadweight Loss): Für alle Einheiten zwischen y^t und y⁰ hätten Konsumenten mehr zu zahlen bereit gewesen als es den Anbietern an Grenzkosten gekostet hätte, aber der Handel unterbleibt wegen der Steuerkeil. Bei linearer Nachfrage und linearem Angebot lässt sich dieser Verlust als Dreiecksfläche berechnen: DWL = ½·t·(y⁰−y^t).",
        ],
        formulas: ["p_D − p_S = t", "DWL = ½ · t · (y⁰ − y^t)"],
        formulasLatex: ["p_D - p_S = t", "DWL = \\dfrac{1}{2}\\,t\\,(y^0 - y^t)"],
        terms: [{ term: "Steuerinzidenz", definition: "Tatsächliche Aufteilung einer Steuerlast zwischen Konsumenten und Anbietern, unabhängig davon, wer die Steuer formal abführt." }],
        examples: [
          "Bei Nachfrage p_D=50−y und Angebot p_S=10+y beträgt das Gleichgewicht ohne Steuer y⁰=20, p⁰=30. Wird eine Mengensteuer t=8 erhoben, gilt im neuen Gleichgewicht (50−y^t)−(10+y^t)=8 ⟹ 40−2y^t=8 ⟹ y^t=16. Der Wohlfahrtsverlust beträgt DWL=½·8·(20−16)=16 (Geldeinheiten) — da Nachfrage und Angebot hier gleich steil verlaufen, teilen sich Konsumenten und Anbieter die Steuerlast exakt hälftig.",
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
        table: {
          caption: "Gesamteffekt einer Preissenkung nach Gütertyp",
          headers: ["Gütertyp", "Substitutionseffekt", "Einkommenseffekt", "Gesamteffekt"],
          rows: [
            ["Normales Gut", "Nachfrage ↑", "Nachfrage ↑", "Nachfrage steigt eindeutig"],
            ["Inferiores Gut", "Nachfrage ↑", "Nachfrage ↓", "Nachfrage steigt meist trotzdem (SE > EE)"],
            ["Giffen-Gut", "Nachfrage ↑", "Nachfrage ↓ (überkompensiert SE)", "Nachfrage sinkt trotz Preissenkung"],
          ],
        },
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
      {
        id: "5-4",
        heading: "5.4 Die Hicks-Zerlegung",
        body: [
          "Die Slutsky-Zerlegung aus 5.2/5.3 hält bei der Kompensation die Kaufkraft in Bezug auf das ALTE Güterbündel konstant (der Haushalt könnte sich zu neuen Preisen gerade noch sein ursprüngliches Bündel leisten). Die Hicks-Zerlegung wählt stattdessen ein anderes Kompensationskriterium: Sie hält das ursprüngliche NUTZENNIVEAU konstant. Das kompensierte (Hicksianische) Güterbündel hᵢ(p,ū) ergibt sich als Lösung des Ausgabenminimierungsproblems: minimiere p₁x₁+p₂x₂ unter der Nebenbedingung u(x₁,x₂)=ū.",
          "Die minimalen Ausgaben, um ein Nutzenniveau ū bei Preisen p zu erreichen, definieren die Ausgabenfunktion e(p,ū)=p₁h₁(p,ū)+p₂h₂(p,ū). Für eine Cobb-Douglas-Nutzenfunktion u=x₁^a·x₂^(1−a) besitzt die Ausgabenfunktion die geschlossene Form e(p₁,p₂,ū) = ū·(p₁/a)^a·(p₂/(1−a))^(1−a).",
          "Slutsky- und Hicks-Kompensation stimmen nur für marginale (infinitesimal kleine) Preisänderungen exakt überein; bei diskreten Preisänderungen weichen sie voneinander ab, da die Slutsky-Kompensation am ALTEN Bündel gemessen wird, die Hicks-Kompensation dagegen entlang der ALTEN Indifferenzkurve. Da die Hicksianische Nachfrage per Konstruktion nie das Nutzenniveau verändert, ist der Hicks-Substitutionseffekt (im Gegensatz zum Gesamteffekt) stets eindeutig negativ — er bildet den 'reinen' Substitutionseffekt ohne jede Einkommenskomponente ab.",
        ],
        formulas: ["e(p,ū) = p₁h₁(p,ū) + p₂h₂(p,ū)", "e(p₁,p₂,ū) = ū · (p₁/a)^a · (p₂/(1−a))^(1−a)"],
        formulasLatex: ["e(p,\\bar u) = p_1 h_1(p,\\bar u) + p_2 h_2(p,\\bar u)", "e(p_1,p_2,\\bar u) = \\bar u \\cdot \\left(\\dfrac{p_1}{a}\\right)^{a}\\left(\\dfrac{p_2}{1-a}\\right)^{1-a}"],
        terms: [
          { term: "Hicksianische (kompensierte) Nachfrage", definition: "Nachfrage hᵢ(p,ū), die die Ausgaben minimiert, um ein festes Nutzenniveau ū zu erreichen." },
          { term: "Ausgabenfunktion", definition: "Minimale Ausgaben e(p,ū), um bei Preisen p das Nutzenniveau ū zu erreichen." },
        ],
        examples: [
          "Für u=x₁^0,5·x₂^0,5 (a=0,5), Preise p₁=4, p₂=9 und Zielnutzen ū=10 beträgt die Ausgabenfunktion e = 10·(4/0,5)^0,5·(9/0,5)^0,5 = 10·√8·√18 = 10·√144 = 10·12 = 120 — der Haushalt braucht mindestens 120 Geldeinheiten, um bei diesen Preisen das Nutzenniveau 10 zu erreichen.",
        ],
      },
    ],
  },
  // ==================== Kapitel 6 ====================
  {
    id: "anfangsausstattung-arbeitsangebot",
    number: 6,
    title: "Anfangsausstattung, Nettohandel und Arbeitsangebot",
    free: false,
    intro:
      "Nicht jeder Haushalt verfügt über ein festes Geldeinkommen. Oft besitzt er stattdessen bereits eine Menge der gehandelten Güter selbst und tauscht am Markt. Dieses Kapitel erweitert die Budgettheorie auf diesen Fall und zeigt, wie sich daraus auch das Arbeitsangebot als Spezialfall ableiten lässt.",
    sections: [
      {
        id: "aw-1",
        heading: "6.1 Die Budgetgerade bei Anfangsausstattung",
        body: [
          "Bislang wurde angenommen, dass ein Haushalt über ein festes Geldeinkommen m verfügt. In vielen ökonomisch relevanten Situationen besitzt ein Haushalt stattdessen eine Anfangsausstattung (ω₁,ω₂) — eine bereits vorhandene Menge der Güter selbst, die er am Markt ganz oder teilweise gegen das jeweils andere Gut eintauschen kann, statt beides zwingend in der Ausgangsmenge zu konsumieren.",
          "Die Budgetgerade lautet nun p₁x₁+p₂x₂ = p₁ω₁+p₂ω₂ — der Marktwert des konsumierten Bündels muss dem Marktwert der Anfangsausstattung entsprechen. Anders als bei einem fixen Geldeinkommen hängt das effektive Einkommen m=p₁ω₁+p₂ω₂ hier selbst von den Preisen ab: Steigt p₁, steigt automatisch auch der Wert der Ausstattung, sofern der Haushalt Gut 1 besitzt. Grafisch dreht sich die Budgetgerade bei einer Preisänderung deshalb nicht um einen festen Achsenabschnitt, sondern um den Ausstattungspunkt (ω₁,ω₂) selbst — dieser bleibt bei jeder Preiskombination erschwinglich, da der Haushalt ihn im Zweifel gar nicht handeln muss.",
        ],
        formulas: ["p₁x₁ + p₂x₂ = p₁ω₁ + p₂ω₂"],
        formulasLatex: ["p_1 x_1 + p_2 x_2 = p_1 \\omega_1 + p_2 \\omega_2"],
        terms: [{ term: "Anfangsausstattung", definition: "Menge der Güter, über die ein Haushalt bereits vor dem Markttausch verfügt." }],
        examples: [
          "Ein Obstbauer besitzt eine Anfangsausstattung von ω=(40 Kisten Äpfel, 20 Kisten Birnen). Bei Preisen p₁=3 GE (Äpfel), p₂=5 GE (Birnen) beträgt der Marktwert seiner Ausstattung 3·40+5·20=220 GE — sein effektives Budget, mit dem er jede Kombination (x₁,x₂) mit 3x₁+5x₂=220 wählen kann, unabhängig von der ursprünglichen Aufteilung.",
        ],
      },
      {
        id: "aw-2",
        heading: "6.2 Nettonachfrager und Nettoanbieter",
        body: [
          "Vergleicht man die gewählte Konsummenge x₁* mit der Anfangsausstattung ω₁, ergibt sich eine wichtige Klassifikation: Gilt x₁*>ω₁, verkauft der Haushalt effektiv einen Teil seiner Ausstattung an Gut 2, um zusätzliches Gut 1 zu erwerben — er ist Nettonachfrager (Nettokäufer) von Gut 1. Gilt x₁*<ω₁, tauscht er umgekehrt Gut 1 gegen Gut 2 und ist Nettoanbieter (Nettoverkäufer) von Gut 1.",
          "Diese Klassifikation hat eine wichtige wohlfahrtsökonomische Konsequenz: Ein Nettoanbieter von Gut 1 profitiert von einem STEIGENDEN Preis p₁, da er zu einem besseren Preis verkauft; ein Nettonachfrager profitiert dagegen von einem SINKENDEN Preis, da er günstiger zukauft. Formal erweitert sich der gewöhnliche Einkommenseffekt einer Preisänderung hier um einen zusätzlichen Ausstattungs-Revaluierungseffekt (ω₁·Δp₁), der bei Nettoanbietern wohlfahrtssteigernd, bei Nettonachfragern wohlfahrtsmindernd wirkt.",
        ],
        formulas: ["Nettonachfrage nach Gut 1 = x₁* − ω₁"],
        formulasLatex: ["x_1^{*} - \\omega_1"],
        terms: [
          { term: "Nettonachfrager", definition: "Haushalt, der am Markt mehr von einem Gut konsumiert, als er an Anfangsausstattung besitzt." },
          { term: "Nettoanbieter", definition: "Haushalt, der am Markt weniger von einem Gut konsumiert, als er an Anfangsausstattung besitzt, und den Rest verkauft." },
        ],
        examples: [
          "Besitzt der Obstbauer aus 6.1 eine Ausstattung von ω₁=40 Kisten Äpfeln, konsumiert selbst aber nur x₁*=15 Kisten, verkauft er netto 25 Kisten — er ist Nettoanbieter von Äpfeln und profitiert von einem steigenden Apfelpreis, obwohl er selbst Äpfel isst.",
        ],
      },
      {
        id: "aw-3",
        heading: "6.3 Das Arbeitsangebotsmodell",
        body: [
          "Das Arbeitsangebotsmodell ist ein Spezialfall des Anfangsausstattungsmodells, bei dem das gehandelte Gut die eigene Zeit ist. Ein Haushalt besitzt eine Zeitausstattung T (z. B. 12 verfügbare Stunden pro Tag außerhalb von Schlaf und Grundbedürfnissen), die er zwischen Freizeit ℓ und Arbeit L=T−ℓ aufteilt. Jede Arbeitsstunde wird zum Lohnsatz w 'verkauft' und in Konsum c umgewandelt.",
          "Die Budgetgerade lautet c + wℓ = wT + m₀ (mit m₀ als eventuellem arbeitsunabhängigem Einkommen) — formal identisch zur Anfangsausstattungs-Budgetgerade aus 6.1, wobei Freizeit die Rolle von Gut 1 mit Ausstattung ω=T und 'Preis' w übernimmt. Der Haushalt maximiert u(c,ℓ) unter dieser Restriktion; das optimale Arbeitsangebot ergibt sich als L*=T−ℓ*(w).",
          "Eine Lohnerhöhung hat zwei gegenläufige Effekte: Der Substitutionseffekt macht Freizeit relativ teurer und erhöht tendenziell das Arbeitsangebot. Der Einkommenseffekt wirkt gegenläufig, da der Haushalt als Anbieter von Freizeit strukturell ein Nettoverkäufer ist und daher von der Lohnerhöhung wie ein Nettoanbieter von einer Preiserhöhung profitiert — bei normaler Freizeit-Präferenz konsumiert er mit steigendem Realeinkommen tendenziell mehr Freizeit, also weniger Arbeit. Überwiegt bei hohen Lohnsätzen der Einkommenseffekt, entsteht eine rückwärtsgebogene Arbeitsangebotskurve.",
        ],
        formulas: ["c + wℓ = wT + m₀", "L* = T − ℓ*(w)"],
        formulasLatex: ["c + w\\ell = wT + m_0", "L^{*} = T - \\ell^{*}(w)"],
        terms: [{ term: "Rückwärtsgebogene Arbeitsangebotskurve", definition: "Arbeitsangebotskurve, die ab einem bestimmten Lohnsatz mit steigendem Lohn wieder fällt, weil der Einkommenseffekt den Substitutionseffekt übersteigt." }],
        examples: [
          "Bei u(c,ℓ)=c^0,5·ℓ^0,5, T=12 Stunden und m₀=0 ergibt sich aus der Cobb-Douglas-Nachfrage ℓ*=0,5·(wT)/w=0,5·T=6 Stunden — unabhängig vom Lohnsatz w. Bei w=10 folgt c*=0,5·10·12=60 (Kontrolle: 60+10·6=120=10·12 ✓), bei w=20 folgt c*=0,5·20·12=120 (Kontrolle: 120+20·6=240=20·12 ✓). Das Arbeitsangebot L*=6 Stunden bleibt in beiden Fällen exakt gleich: Bei dieser speziellen Cobb-Douglas-Präferenz heben sich Substitutions- und Einkommenseffekt exakt auf. Erst bei m₀>0 oder anderen Präferenzformen entsteht typischerweise die rückwärtsgebogene Form.",
        ],
      },
    ],
  },
  // ==================== Kapitel 7 ====================
  {
    id: "technologie-gewinnmaximierung",
    number: 7,
    title: "Technologie und Gewinnmaximierung der Unternehmung",
    free: false,
    intro:
      "Nach der Haushaltstheorie wendet sich dieses Kapitel der Angebotsseite zu: Wie modellieren wir die Produktionsmöglichkeiten einer Unternehmung, und wie entscheidet sie über den gewinnmaximalen Faktoreinsatz?",
    sections: [
      {
        id: "6-1",
        heading: "7.1 Produktionsfunktion und Grenzprodukt",
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
        heading: "7.2 Skalenerträge",
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
        heading: "7.3 Gewinnmaximierung",
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
  // ==================== Kapitel 8 ====================
  {
    id: "kostenminimierung-kostenkurven",
    number: 8,
    title: "Kostenminimierung und Kostenkurven",
    free: false,
    intro:
      "Bevor eine Unternehmung ihren Gewinn maximiert, muss sie für jeden Output die kostengünstigste Faktorkombination wählen. Dieses Kapitel behandelt Kostenminimierung und die daraus abgeleiteten Kostenkurven.",
    sections: [
      {
        id: "7-1",
        heading: "8.1 Kostenminimierung bei gegebenem Output",
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
        heading: "8.2 Kostenfunktion und kurzfristige Kostenkurven",
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
        heading: "8.3 Langfristige Kostenkurven",
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
  // ==================== Kapitel 9 ====================
  {
    id: "angebot-marktangebot",
    number: 9,
    title: "Angebot der Unternehmung und Marktangebot der Branche",
    free: false,
    intro:
      "Aus der Kostenstruktur einer Unternehmung lässt sich ihre Angebotsentscheidung ableiten. Aggregiert man über alle Unternehmen einer Branche, ergibt sich das Marktangebot — das Gegenstück zur Marktnachfrage.",
    sections: [
      {
        id: "8-1",
        heading: "9.1 Angebotsentscheidung der Unternehmung bei vollkommener Konkurrenz",
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
        heading: "9.2 Marktangebot und Branchengleichgewicht",
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
  // ==================== Kapitel 10 ====================
  {
    id: "monopol",
    number: 10,
    title: "Monopol",
    free: false,
    intro:
      "Nicht jeder Markt ist durch vollkommene Konkurrenz gekennzeichnet. Ein Monopol — ein einzelner Anbieter ohne direkte Konkurrenz — verhält sich fundamental anders, mit spürbaren Folgen für Preis, Menge und Wohlfahrt.",
    sections: [
      {
        id: "9-1",
        heading: "10.1 Preissetzung des Monopolisten",
        body: [
          "Anders als ein preisnehmendes Unternehmen sieht sich ein Monopolist der gesamten (fallenden) Marktnachfragekurve gegenüber: Um mehr zu verkaufen, muss er den Preis senken — auch für bereits verkaufte Einheiten (bei einheitlicher Preissetzung). Deshalb liegt der Grenzerlös MR unterhalb des Preises: MR(y) = p(y) + y·p'(y) < p(y), da p'(y)<0.",
          "Der gewinnmaximale Output ergibt sich aus MR(y)=MC(y). Da MR<p, resultiert daraus ein Monopolpreis oberhalb der Grenzkosten (p>MC) — im Gegensatz zur vollkommenen Konkurrenz, wo p=MC gilt.",
          "Verwendet man die Preiselastizität der Nachfrage ε (siehe 3.4), lässt sich der Grenzerlös als MR = p·(1+1/ε) schreiben (Amoroso-Robinson-Gleichung). Setzt man dies in die Gewinnbedingung MR=MC ein und stellt um, ergibt sich der Lerner-Index L=(p−MC)/p = −1/ε — er misst die Preissetzungsmacht des Monopolisten direkt über die Nachfrageelastizität: Je unelastischer die Nachfrage (je kleiner |ε|), desto größer der Preisaufschlag über die Grenzkosten.",
        ],
        table: {
          caption: "Vollkommene Konkurrenz vs. Monopol",
          headers: ["", "Vollkommene Konkurrenz", "Monopol"],
          rows: [
            ["Preisregel", "p = MC", "p > MC (aus MR = MC)"],
            ["Wohlfahrt", "effizient, kein Wohlfahrtsverlust", "Wohlfahrtsverlust durch Unterproduktion (siehe 10.2)"],
          ],
        },
        formulas: ["MR(y) = p(y) + y · p'(y)", "L = (p − MC)/p = −1/ε"],
        formulasLatex: ["MR(y) = p(y) + y\\cdot p'(y)", "L = \\dfrac{p-MC}{p} = -\\dfrac{1}{\\varepsilon}"],
        terms: [
          { term: "Grenzerlös (MR)", definition: "Zusätzlicher Erlös einer marginalen zusätzlichen Verkaufseinheit; beim Monopolisten stets kleiner als der Preis." },
          { term: "Lerner-Index", definition: "Maß für Marktmacht, definiert als relativer Preisaufschlag über die Grenzkosten (p−MC)/p; entspricht bei Gewinnmaximierung −1/ε." },
        ],
        examples: [
          "Bei Nachfrage p(y)=100−y gilt MR(y)=100−2y. Bei Grenzkosten MC=20 setzt der Monopolist MR=MC: 100−2y=20 → y=40, und der Preis beträgt p(40)=60 — deutlich über den Grenzkosten von 20. Die Preiselastizität an dieser Stelle beträgt ε=(∂y/∂p)·(p/y)=(−1)·(60/40)=−1,5. Der Lerner-Index ergibt sich sowohl direkt als L=(60−20)/60≈0,67 als auch über die Elastizität als −1/(−1,5)≈0,67 — beide Wege stimmen überein.",
        ],
      },
      {
        id: "9-2",
        heading: "10.2 Wohlfahrtsverlust und Preisdiskriminierung",
        body: [
          "Weil der Monopolist weniger produziert und einen höheren Preis verlangt als im Wettbewerbsfall (p=MC), entsteht ein Wohlfahrtsverlust (Deadweight Loss): Einige Konsumenten, deren Zahlungsbereitschaft über den Grenzkosten, aber unter dem Monopolpreis liegt, werden nicht bedient, obwohl ein Tausch für beide Seiten vorteilhaft wäre.",
          "Preisdiskriminierung dritten Grades (Marktsegmentierung, z. B. Studierendenrabatt) kann diesen Wohlfahrtsverlust teilweise reduzieren: Der Monopolist teilt die Konsumenten anhand eines beobachtbaren Merkmals in Gruppen mit unterschiedlicher Nachfrageelastizität und setzt in jedem Segment i separat MRᵢ=MC. Da die Grenzkosten für beide Segmente identisch sind, muss im Gewinnmaximum auch der Grenzerlös in beiden Segmenten gleich sein: MR₁=MR₂=MC.",
          "Wegen der Amoroso-Robinson-Gleichung aus 10.1 folgt daraus, dass das Segment mit der unelastischeren Nachfrage (kleineres |ε|) den höheren Preis zahlt — Preisdiskriminierung verschiebt so einen größeren Teil der Wohlfahrt vom Konsumenten zum Monopolisten, kann aber gleichzeitig mehr Konsumentengruppen bedienen als eine einheitliche Preissetzung.",
        ],
        formulas: ["MR₁ = MR₂ = MC"],
        formulasLatex: ["MR_1 = MR_2 = MC"],
        terms: [{ term: "Wohlfahrtsverlust des Monopols", definition: "Effizienzverlust durch monopolistische Unterproduktion im Vergleich zum Wettbewerbsfall." }],
        examples: [
          "Ein Monopolist beliefert zwei Segmente mit Nachfrage pA(yA)=80−yA (Familientarif) und pB(yB)=50−0,5yB (Studierendentarif) bei konstanten Grenzkosten MC=10. Segment A: MRA=80−2yA=10 → yA=35, pA=45. Segment B: MRB=50−yB=10 → yB=40, pB=30. Die Elastizität bei diesen Mengen ist in Segment A betragsmäßig kleiner (unelastischer) als in Segment B — entsprechend zahlt Segment A den höheren Preis (45 statt 30), obwohl beide Segmente dieselben Grenzkosten verursachen.",
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
      "Viele ökonomische Situationen mit wenigen Akteuren, deren Entscheidungen sich gegenseitig beeinflussen, lassen sich als Spiele modellieren. Dieses Kapitel führt die Grundkonzepte strategischer Interaktion ein, die im folgenden Kapitel auf Oligopolmärkte angewendet werden, aber weit über Märkte hinaus einsetzbar sind.",
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
      {
        id: "11-4",
        heading: "11.4 Wiederholte Spiele und Trigger-Strategien",
        body: [
          "Wird ein Spiel wie das Gefangenendilemma nicht nur einmal, sondern unendlich oft wiederholt, ändert sich die Anreizstruktur fundamental: Ein Spieler kann Kooperation heute mit der Drohung zukünftiger Bestrafung erkaufen. Bei einer Trigger-Strategie (Auslösestrategie) kooperiert ein Spieler, solange der andere ebenfalls kooperiert hat, und wechselt dauerhaft zur Bestrafung (z. B. der einmaligen Nash-Strategie des Stufenspiels), sobald der andere einmal abgewichen ist.",
          "Ob Kooperation durch eine solche Trigger-Strategie stabil ist, hängt vom Diskontfaktor δ∈(0,1) ab, der angibt, wie stark zukünftige Auszahlungen gegenüber heutigen gewichtet werden. Kooperation ist ein Gleichgewicht, wenn der Barwert dauerhafter Kooperation mindestens so hoch ist wie der Gewinn aus einmaligem Abweichen gefolgt von dauerhafter Bestrafung: πK/(1−δ) ≥ πA + δ·πN/(1−δ), wobei πK der Kooperationsgewinn pro Periode, πA der einmalige Abweichgewinn und πN der Gewinn im Bestrafungsgleichgewicht ist. Umgestellt ergibt sich die Mindestbedingung δ ≥ (πA−πK)/(πA−πN).",
          "Je geduldiger die Spieler (je höher δ, z. B. durch häufigere Interaktion oder geringere Wahrscheinlichkeit eines Spielendes), desto eher lässt sich Kooperation — etwa stillschweigende Kollusion zwischen Oligopolisten — auf Dauer aufrechterhalten, obwohl sie im einmaligen Spiel nicht Nash-Gleichgewicht wäre.",
        ],
        formulas: ["δ ≥ (πA − πK) / (πA − πN)"],
        formulasLatex: ["\\delta \\ge \\dfrac{\\pi_A - \\pi_K}{\\pi_A - \\pi_N}"],
        terms: [{ term: "Trigger-Strategie", definition: "Strategie in wiederholten Spielen: Kooperation, solange der Gegenspieler kooperiert hat, dauerhafte Bestrafung nach einer einzigen Abweichung." }],
        examples: [
          "Zwei Duopolisten erzielen bei stillschweigender Kollusion πK=50 pro Periode, bei einmaligem Abweichen (während der andere noch kooperiert) πA=80, und im anschließenden dauerhaften Cournot-Bestrafungsgleichgewicht nur noch πN=30 pro Periode. Kooperation ist stabil, wenn δ ≥ (80−50)/(80−30) = 30/50 = 0,6 — bei einem Diskontfaktor von mindestens 0,6 lohnt sich Kollusion, darunter überwiegt der kurzfristige Anreiz zum Abweichen.",
        ],
      },
    ],
  },
  // ==================== Kapitel 12 ====================
  {
    id: "oligopoltheorie",
    number: 12,
    title: "Oligopoltheorie",
    free: false,
    intro:
      "Mithilfe der im vorigen Kapitel eingeführten spieltheoretischen Grundkonzepte lässt sich nun das Oligopol analysieren: wenige Anbieter, deren Entscheidungen sich gegenseitig direkt beeinflussen. Dieses Kapitel behandelt die wichtigsten Oligopolmodelle.",
    sections: [
      {
        id: "10-1",
        heading: "12.1 Das Cournot-Modell (Mengenwettbewerb)",
        body: [
          "Im Cournot-Modell wählen Unternehmen gleichzeitig Mengen, wobei jedes Unternehmen die Mengenentscheidung der Konkurrenz als gegeben annimmt. Für zwei symmetrische Unternehmen mit linearer Nachfrage p=a−b(y₁+y₂) und konstanten Grenzkosten c ergibt sich im Cournot-Gleichgewicht y₁*=y₂*=(a−c)/(3b) — jedes Unternehmen produziert weniger als ein Monopolist, aber mehr als im perfekten Wettbewerb.",
          "Mit zunehmender Anzahl symmetrischer Cournot-Unternehmen nähert sich der Gesamtoutput dem Wettbewerbsoutput an, und der Preis nähert sich den Grenzkosten — das Cournot-Modell interpoliert also stetig zwischen Monopol (n=1) und vollkommener Konkurrenz (n→∞). Für n symmetrische Unternehmen verallgemeinert sich das Ergebnis zu yᵢ*=(a−c)/((n+1)b) je Unternehmen, mit Marktpreis p*=(a+nc)/(n+1).",
          "Die individuelle Marktmacht jedes Unternehmens lässt sich auch über seinen Marktanteil ausdrücken: Im symmetrischen Cournot-Gleichgewicht gilt für den Lerner-Index eines Unternehmens Lᵢ=(p−c)/p = sᵢ/|ε|, wobei sᵢ=yᵢ/Y sein Marktanteil und ε die Preiselastizität der Marktnachfrage ist — je kleiner der eigene Marktanteil (je mehr Konkurrenten), desto geringer die individuelle Preissetzungsmacht.",
        ],
        formulas: ["y₁* = y₂* = (a−c) / (3b)", "yᵢ* = (a−c) / ((n+1)b)", "Lᵢ = sᵢ / |ε|"],
        formulasLatex: ["y_1^{*} = y_2^{*} = \\dfrac{a-c}{3b}", "y_i^{*} = \\dfrac{a-c}{(n+1)b}", "L_i = \\dfrac{s_i}{|\\varepsilon|}"],
        terms: [{ term: "Cournot-Gleichgewicht", definition: "Nash-Gleichgewicht im Mengenwettbewerb, bei dem jedes Unternehmen optimal auf die (als gegeben angenommene) Menge der Konkurrenz reagiert." }],
        examples: [
          "Bei a=100, b=1, c=10 ergibt sich im Duopol y₁*=y₂*=30, Gesamtmenge 60, Preis p=100−60=40 — deutlich näher am Wettbewerbspreis (=10) als der Monopolpreis (=55) es wäre. Bei n=4 Unternehmen (statt 2) ergibt sich yᵢ*=(100−10)/5=18, Gesamtmenge Y=72, Preis p*=(100+40)/5=28. Der Marktanteil beträgt sᵢ=18/72=0,25; die Elastizität an dieser Stelle ist ε=−1·(28/72)≈−0,389, sodass Lᵢ=0,25/0,389≈0,643 — exakt gleich dem direkt berechneten (28−10)/28≈0,643.",
        ],
      },
      {
        id: "10-2",
        heading: "12.2 Das Bertrand-Modell (Preiswettbewerb)",
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
        heading: "12.3 Das Stackelberg-Modell (Mengenführerschaft)",
        body: [
          "Im Stackelberg-Modell entscheidet ein Unternehmen (der Marktführer) seine Menge zuerst, das andere (der Folger) beobachtet diese Menge und reagiert optimal darauf. Der Marktführer berücksichtigt bei seiner Entscheidung die erwartete Reaktion des Folgers und erzielt dadurch einen First-Mover-Vorteil: höhere Menge und höheren Gewinn als im simultanen Cournot-Fall.",
          "Für dieselbe lineare Nachfrage wie oben ergibt sich im Stackelberg-Gleichgewicht y_Führer=(a−c)/(2b), also mehr als im Cournot-Fall (a−c)/(3b), während der Folger entsprechend weniger produziert — der First-Mover profitiert auf Kosten des Folgers.",
        ],
        table: {
          caption: "Die drei Oligopolmodelle im Vergleich",
          headers: ["Modell", "Strategievariable", "Zeitpunkt", "Ergebnis"],
          rows: [
            ["Cournot", "Menge", "simultan", "y* = (a−c)/(3b) je Unternehmen; Preis zwischen Grenzkosten und Monopolpreis"],
            ["Bertrand", "Preis", "simultan", "p = c (Grenzkosten); kein ökonomischer Gewinn"],
            ["Stackelberg", "Menge", "sequentiell (Führer zuerst)", "Führer: (a−c)/(2b); Folger produziert weniger als im Cournot-Fall"],
          ],
        },
        terms: [{ term: "First-Mover-Vorteil", definition: "Vorteil des zuerst entscheidenden Unternehmens, das die Reaktion des Folgers antizipieren kann." }],
        examples: [
          "Ein etablierter Hersteller kündigt seine Produktionsmenge frühzeitig öffentlich an; ein neuer Wettbewerber passt seine eigene, kleinere Menge an diese bereits feststehende Größe an — der etablierte Hersteller profitiert von seiner Vorreiterrolle.",
        ],
      },
      {
        id: "10-4",
        heading: "12.4 Preisführerschaft der dominanten Firma",
        body: [
          "Vom Mengenwettbewerb im Stackelberg-Modell zu unterscheiden ist ein eigenständiges Oligopolmodell: die Preisführerschaft der dominanten Firma. Hier setzt eine große, kostengünstige Firma (der Preisführer) direkt den Marktpreis, während viele kleine Firmen (der Konkurrenzrand oder 'Fringe') diesen Preis als gegeben hinnehmen und wie im Wettbewerbsmodell entlang ihrer eigenen Grenzkostenkurve anbieten.",
          "Der Preisführer berücksichtigt bei seiner Preissetzung, dass er nur die Residualnachfrage bedient — die Marktnachfrage abzüglich des Angebots des Konkurrenzrands: Dᴿ(p) = D(p) − Sᶠ(p). Er maximiert seinen Gewinn, indem er auf dieser Residualnachfrage MRᴿ=MC setzt, genau wie ein gewöhnlicher Monopolist auf der Gesamtnachfrage.",
          "Je größer der Konkurrenzrand relativ zum Preisführer ist, desto elastischer reagiert die Residualnachfrage auf Preisänderungen (kleine Preiserhöhungen verlagern viel Marktanteil zum Rand), und desto näher liegt der resultierende Preis am Wettbewerbspreis.",
        ],
        formulas: ["Dᴿ(p) = D(p) − Sᶠ(p)", "MRᴿ(yᴿ) = MC"],
        formulasLatex: ["D^{R}(p) = D(p) - S^{f}(p)", "MR^{R}(y^{R}) = MC"],
        terms: [
          { term: "Preisführerschaft der dominanten Firma", definition: "Oligopolmodell, in dem eine große Firma den Preis setzt und kleine Firmen (Konkurrenzrand) diesen Preis als gegeben hinnehmen." },
          { term: "Residualnachfrage", definition: "Marktnachfrage abzüglich des Angebots des Konkurrenzrands; die Nachfrage, der sich der Preisführer tatsächlich gegenübersieht." },
        ],
        examples: [
          "Bei Marktnachfrage D(p)=90−p und Angebot des Konkurrenzrands Sᶠ(p)=2p ergibt sich die Residualnachfrage Dᴿ(p)=90−3p, invertiert p(yᴿ)=30−yᴿ/3 mit Grenzerlös MRᴿ(yᴿ)=30−2yᴿ/3. Bei Grenzkosten des Preisführers MC=10 folgt 30−2yᴿ/3=10 → yᴿ*=30, p*=30−10=20. Der Konkurrenzrand liefert bei diesem Preis Sᶠ(20)=40, sodass die Gesamtmenge D(20)=90−20=70=30+40 exakt aufgeht.",
        ],
      },
    ],
  },
  // ==================== Kapitel 13 ====================
  {
    id: "tausch-wohlfahrt-intertemporal",
    number: 13,
    title: "Tausch, Wohlfahrtstheorie und intertemporale Entscheidung",
    free: false,
    intro:
      "Zum Abschluss weitet dieses Kapitel den Blick von einzelnen Märkten auf das Zusammenspiel mehrerer Akteure und Zeitpunkte: Wie profitieren zwei Tauschpartner voneinander, wann ist eine Allokation effizient, und wie entscheiden Haushalte über Konsum und Ersparnis über die Zeit?",
    sections: [
      {
        id: "12-1",
        heading: "13.1 Die Edgeworth-Box und Tauschgleichgewicht",
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
        heading: "13.2 Pareto-Effizienz und die Wohlfahrtssätze",
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
        heading: "13.3 Intertemporale Konsumentscheidung",
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
