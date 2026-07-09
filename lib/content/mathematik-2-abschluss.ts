import type { SkriptChapter } from "./types";

// Hinweis zur Kapitelreihenfolge: Die Reihenfolge und Nummerierung hier folgt
// bewusst NICHT 1:1 der Reihenfolge der beiden Foliensätze ("24. Differenzierbare
// Funktionen in mehreren Veränderlichen" und "25. Integralrechnung im R^n").
// Statt die Differentiation komplett vor der Integration abzuhandeln, sind
// beide Themenstränge verzahnt: Auf ein Differentiations-Kapitel folgt jeweils
// ein Integrations-Kapitel und umgekehrt. Zusatzthemen wie der Satz von Schwarz,
// das Cavalieri-Kegelbeispiel, der Affensattel/"Die Quelle" oder die
// Log-Polarkoordinaten stehen dabei jeweils eingebettet in ihr Kernkapitel statt
// als eigener Block am Skriptende. Die Nummerierung ist eigenständig, und
// Querverweise im Text beziehen sich auf diese neue Reihenfolge.
export const chapters: SkriptChapter[] = [
  // ============ Kapitel 1 — Jordan-Inhalt und messbare Mengen im R^n ============
  {
    id: "jordan-inhalt",
    number: 1,
    title: "Jordan-Inhalt und messbare Mengen im Rⁿ",
    free: true,
    intro:
      "Bevor wir Funktionen mehrerer Veränderlicher integrieren können, brauchen wir einen tragfähigen Begriff für den 'Inhalt' (die Länge, Fläche, das Volumen, ...) einer Teilmenge des ℝⁿ. Dieses Kapitel führt den Jordan-Inhalt über Quader und Rechtecksummen ein — das Fundament, auf dem in Kapitel 3 das Riemann-Integral im ℝⁿ aufbaut.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Quader und Rechtecksummen",
        body: [
          "Ein (kompakter) Quader im ℝⁿ ist ein kartesisches Produkt Q = [a₁,b₁] × ... × [aₙ,bₙ] von n abgeschlossenen, beschränkten Intervallen. Sein elementarer Inhalt ist definiert als |Q| := (b₁−a₁) · ... · (bₙ−aₙ). Für n = 2 ist das die Fläche eines Rechtecks, für n = 3 das Volumen eines Quaders im gewohnten Sinn.",
          "Eine endliche Menge paarweise überlappungsfreier Quader Q₁, ..., Qₘ, deren Vereinigung eine beschränkte Menge M ⊂ ℝⁿ enthält bzw. in ihr enthalten ist, liefert obere bzw. untere Rechtecksummen: die Summe der Quaderinhalte, die M überdecken (Obersumme) bzw. vollständig in M liegen (Untersumme). Das Infimum aller Obersummen heißt äußerer Jordan-Inhalt J*(M), das Supremum aller Untersummen innerer Jordan-Inhalt J*(M).",
        ],
        terms: [
          { term: "Elementarer Inhalt |Q|", definition: "Für einen Quader Q = [a₁,b₁] × ... × [aₙ,bₙ] das Produkt der Kantenlängen (b₁−a₁) · ... · (bₙ−aₙ)." },
          { term: "Äußerer/innerer Jordan-Inhalt", definition: "Infimum aller Obersummen bzw. Supremum aller Untersummen von Quaderüberdeckungen einer beschränkten Menge M." },
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Jordan-messbare Mengen, Nullmengen und das Randkriterium",
        body: [
          "Eine beschränkte Menge M ⊂ ℝⁿ heißt Jordan-messbar, wenn äußerer und innerer Jordan-Inhalt übereinstimmen; man schreibt dann |M| := J*(M) = J*(M) für den Jordan-Inhalt von M. Eine Menge N ⊂ ℝⁿ heißt Jordan-Nullmenge, wenn J*(N) = 0 gilt, das heißt, wenn sich N durch endlich viele Quader mit beliebig kleiner Gesamtinhaltssumme überdecken lässt.",
          "In der Praxis prüft man Jordan-Messbarkeit meist über das Randkriterium: Eine beschränkte Menge M ist genau dann Jordan-messbar, wenn ihr topologischer Rand ∂M eine Jordan-Nullmenge ist. Das erklärt, warum endliche Punktmengen, Strecken und (stückweise) glatte Kurven im ℝ² stets Jordan-Nullmengen und damit selbst Jordan-messbar (mit Inhalt 0) sind: Ihr eigener Rand ist wieder eine solche 'dünne' Menge.",
        ],
        formulas: ["M Jordan-messbar ⟺ ∂M ist Jordan-Nullmenge"],
        formulasLatex: ["M \\text{ Jordan-messbar} \\iff \\partial M \\text{ ist Jordan-Nullmenge}"],
        examples: [
          "Die Menge M = ([0,3] × [0,2]) ∪ ([3,5] × [1,3]) besteht aus zwei überlappungsfrei aneinandergesetzten Rechtecken und ist Jordan-messbar mit |M| = 3·2 + 2·2 = 10, unabhängig davon, ob die gemeinsame Kante mit- oder ausgeschlossen wird — denn diese Kante ist eine Strecke und damit eine Jordan-Nullmenge, die den Inhalt nicht beeinflusst.",
        ],
      },
    ],
  },

  // ============ Kapitel 2 — Partielle Differenzierbarkeit und der Gradient ============
  {
    id: "partielle-differenzierbarkeit",
    number: 2,
    title: "Partielle Differenzierbarkeit und der Gradient",
    free: false,
    intro:
      "Für Funktionen einer Veränderlichen kennen wir die Ableitung als Grenzwert eines Differenzenquotienten. Bei Funktionen mehrerer Veränderlicher gibt es dafür mehrere natürliche Verallgemeinerungen — die einfachste ist die partielle Ableitung, bei der alle Variablen bis auf eine festgehalten werden.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Partielle Ableitungen",
        body: [
          "Es sei D ⊂ ℝⁿ offen, f : D → ℝ eine Funktion und ⃗x₀ ∈ D. Die Funktion f heißt an der Stelle ⃗x₀ partiell differenzierbar nach der i-ten Variablen, wenn der Grenzwert ∂f/∂xᵢ(⃗x₀) = lim_{t→0} (f(⃗x₀ + t·⃗eᵢ) − f(⃗x₀))/t existiert, wobei ⃗eᵢ der i-te Einheitsvektor ist. Existieren alle n partiellen Ableitungen, heißt f partiell differenzierbar in ⃗x₀.",
          "Partielle Ableitungen berechnet man in der Praxis, indem man alle Variablen außer xᵢ als Konstanten behandelt und nach den gewohnten Ableitungsregeln nach xᵢ differenziert. Anders als im Eindimensionalen impliziert partielle Differenzierbarkeit allein noch nicht einmal Stetigkeit: Es gibt Funktionen, die in jedem Punkt partiell differenzierbar, aber im Ursprung unstetig sind.",
        ],
        examples: [
          "Für f(x,y) = 3x²y³ − 2x gilt ∂f/∂x(x,y) = 6xy³ − 2 und ∂f/∂y(x,y) = 9x²y².",
          "Die Funktion f(x,y) := 3xy²/(x²+y⁴) für (x,y) ≠ (0,0) und f(0,0) := 0 ist im Ursprung partiell differenzierbar mit ∂f/∂x(0,0) = ∂f/∂y(0,0) = 0 (man rechnet die Definitionsgrenzwerte direkt nach), aber unstetig in (0,0): Auf der Kurve x = y² gilt f(y²,y) = 3y⁴/(2y⁴) = 3/2 für alle y ≠ 0, während f(0,0) = 0 ist.",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Der Gradient",
        body: [
          "Ist f : D → ℝ in ⃗x₀ ∈ D partiell differenzierbar nach allen n Variablen, so heißt der Vektor ∇f(⃗x₀) := (∂f/∂x₁(⃗x₀), ..., ∂f/∂xₙ(⃗x₀))ᵀ der Gradient von f in ⃗x₀. Der Gradient sammelt also sämtliche partiellen Ableitungen in einem einzigen Vektor und ist damit das mehrdimensionale Analogon zur gewöhnlichen Ableitung.",
          "Ein Punkt ⃗x₀ ∈ D heißt stationärer Punkt von f, wenn ∇f(⃗x₀) = ⃗0 gilt. Stationäre Punkte sind — wie im Eindimensionalen die Nullstellen der Ableitung — die einzigen Kandidaten für lokale Extremstellen im Inneren des Definitionsbereichs; dieser Zusammenhang wird in Kapitel 14 systematisch untersucht.",
        ],
        formulas: ["∇f(⃗x) = (∂f/∂x₁(⃗x), ..., ∂f/∂xₙ(⃗x))ᵀ"],
        formulasLatex: ["\\nabla f(\\vec x) = \\left(\\frac{\\partial f}{\\partial x_1}(\\vec x), \\dots, \\frac{\\partial f}{\\partial x_n}(\\vec x)\\right)^\\top"],
        examples: [
          "Für f(x,y) := (x² + y² − 4)² ist ∇f(x,y) = (4x(x²+y²−4), 4y(x²+y²−4))ᵀ. Es gilt ∇f(x,y) = ⃗0 genau dann, wenn (x,y) = (0,0) oder x²+y² = 4 — die stationären Punkte bilden hier also den Ursprung zusammen mit einem ganzen Kreis vom Radius 2.",
        ],
      },
    ],
  },

  // ============ Kapitel 3 — Ober- und Untersummen: das Riemann-Integral im R^n ============
  {
    id: "riemann-integral-rn",
    number: 3,
    title: "Ober- und Untersummen: das Riemann-Integral im Rⁿ",
    free: false,
    intro:
      "Mit dem Jordan-Inhalt aus Kapitel 1 können wir nun, ganz analog zur eindimensionalen Riemann-Theorie aus Mathematik 1, Ober- und Untersummen für beschränkte Funktionen auf einem Quader definieren und darüber das Riemann-Integral im ℝⁿ erklären.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Partitionen und Riemannsummen",
        body: [
          "Eine Partition (Zerlegung) 𝒵 eines Quaders Q ⊂ ℝⁿ ist eine endliche Menge {Q₁, ..., Qₘ} von paarweise überlappungsfreien Teilquadern mit Q = Q₁ ∪ ... ∪ Qₘ. Für eine beschränkte Funktion f : Q → ℝ heißen O(f;𝒵) := Σᵢ sup f(Qᵢ) · |Qᵢ| und U(f;𝒵) := Σᵢ inf f(Qᵢ) · |Qᵢ| die Ober- bzw. Untersumme von f bezüglich 𝒵.",
          "Verfeinert man eine Partition (das heißt, ersetzt man Teilquader durch noch feinere Teilquader), so kann die Obersumme nur kleiner und die Untersumme nur größer werden — jede Obersumme ist folglich mindestens so groß wie jede Untersumme, egal bezüglich welcher der beiden Partitionen. Das Infimum über alle Obersummen heißt oberes, das Supremum über alle Untersummen unteres Riemann-Integral von f über Q.",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Das Riemann-Integral und Integrierbarkeitskriterien",
        body: [
          "Stimmen oberes und unteres Riemann-Integral überein, heißt f Riemann-integrierbar über Q, und man schreibt ∫_Q f(⃗x) d⃗x für den gemeinsamen Wert. Äquivalent ist f genau dann integrierbar, wenn es zu jedem ε > 0 eine Partition 𝒵 gibt mit O(f;𝒵) − U(f;𝒵) < ε — das ε-Kriterium für Integrierbarkeit, das man in Klausuraufgaben meist direkt auf konkrete Partitionenfolgen anwendet.",
          "Für Jordan-messbare, aber nicht notwendig quaderförmige Mengen M ⊂ ℝⁿ definiert man das Integral einer auf M beschränkten Funktion f über die Fortsetzung f̃ := f auf M und f̃ := 0 außerhalb von M, angewandt auf einen M umfassenden Quader: ∫_M f(⃗x) d⃗x := ∫_Q f̃(⃗x) d⃗x. Diese Definition ist unabhängig von der Wahl von Q, solange M ⊂ Q gilt.",
        ],
        examples: [
          "Für f : [0,1]² → ℝ, f(x,y) := 3y und die Partition 𝒵ₙ in n gleich breite Vertikalstreifen [(i−1)/n, i/n] × [0,1] gilt sup f(Qᵢ) = 3 und inf f(Qᵢ) = 0 auf jedem Streifen, also O(f;𝒵ₙ) = 3 und U(f;𝒵ₙ) = 0 für jedes n ∈ ℕ — diese beiden Werte allein zeigen noch nicht die Integrierbarkeit von f, die man stattdessen über eine feinere, in beide Richtungen verlaufende Partition nachweist.",
        ],
      },
    ],
  },

  // ============ Kapitel 4 — Richtungsableitungen ============
  {
    id: "richtungsableitungen",
    number: 4,
    title: "Richtungsableitungen",
    free: false,
    intro:
      "Die partiellen Ableitungen aus Kapitel 2 messen die Änderungsrate von f nur entlang der Koordinatenachsen. Die Richtungsableitung verallgemeinert dieses Konzept auf beliebige Richtungen und liefert damit ein feineres Werkzeug, um das lokale Verhalten von f zu verstehen.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Definition und Zusammenhang mit partiellen Ableitungen",
        body: [
          "Es sei D ⊂ ℝⁿ offen, f : D → ℝ, ⃗x₀ ∈ D und ⃗v ∈ ℝⁿ mit ‖⃗v‖₂ = 1. Die Richtungsableitung von f in ⃗x₀ in Richtung ⃗v ist definiert als ∂f/∂⃗v(⃗x₀) := lim_{t→0} (f(⃗x₀ + t·⃗v) − f(⃗x₀))/t, sofern dieser Grenzwert existiert. Für ⃗v = ⃗eᵢ ergibt sich gerade die i-te partielle Ableitung — partielle Ableitungen sind also spezielle Richtungsableitungen.",
          "Ist f in ⃗x₀ (total) differenzierbar — der in Kapitel 6 eingeführte stärkere Differenzierbarkeitsbegriff —, so existieren alle Richtungsableitungen, und es gilt die praktische Formel ∂f/∂⃗v(⃗x₀) = ⟨∇f(⃗x₀), ⃗v⟩. Ohne totale Differenzierbarkeit können dagegen selbst dann, wenn alle Richtungsableitungen existieren, überraschende Effekte auftreten.",
        ],
        formulas: ["∂f/∂⃗v(⃗x₀) = ⟨∇f(⃗x₀), ⃗v⟩ (falls f in ⃗x₀ differenzierbar ist)"],
        formulasLatex: ["\\frac{\\partial f}{\\partial \\vec v}(\\vec x_0) = \\langle \\nabla f(\\vec x_0), \\vec v \\rangle"],
        examples: [
          "Für f(x,y) := cos(2xy) und ⃗x₀ = (1,1) ist ∇f(1,1) = (−2sin(2)·1, −2sin(2)·1)ᵀ = (−2sin2, −2sin2)ᵀ. Für die Richtung ⃗v = (1,1)ᵀ/√2 ergibt sich damit ∂f/∂⃗v(1,1) = ⟨∇f(1,1), ⃗v⟩ = −4sin(2)/√2 = −2√2·sin(2).",
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Wenn Richtungsableitungen nicht aus dem Gradienten folgen",
        body: [
          "Ist f nur partiell, aber nicht total differenzierbar, kann die Formel ∂f/∂⃗v(⃗x₀) = ⟨∇f(⃗x₀), ⃗v⟩ falsch sein, obwohl beide Seiten einzeln existieren. Solche Funktionen zeigen, dass die Existenz aller Richtungsableitungen echt schwächer ist als totale Differenzierbarkeit — ein Grund, warum in Kapitel 6 ein eigener, stärkerer Differenzierbarkeitsbegriff eingeführt wird.",
          "Es kann sogar vorkommen, dass die Richtungsableitung nur für bestimmte Richtungen existiert und für andere nicht. Solche Fälle treten typischerweise bei Funktionen auf, deren Graph im Ursprung eine 'Kante' oder Unstetigkeit besitzt, die je nach Anflugrichtung unterschiedlich stark ins Gewicht fällt.",
        ],
        examples: [
          "Für g(x,y) := xy/(x²+y²) falls (x,y) ≠ (0,0) und g(0,0) := 0 existiert für ⃗v = (v₁,v₂)ᵀ mit ‖⃗v‖₂ = 1 die Richtungsableitung ∂g/∂⃗v(0,0) = lim_{t→0} (t²v₁v₂)/(t·t²) = lim_{t→0} v₁v₂/t, welche nur für v₁v₂ = 0 (also entlang der Koordinatenachsen) existiert und dort den Wert 0 annimmt — für alle anderen Richtungen divergiert der Grenzwert.",
        ],
      },
    ],
  },

  // ============ Kapitel 5 — Eigenschaften des Jordan-Inhalts und der Satz von Fubini ============
  {
    id: "fubini",
    number: 5,
    title: "Eigenschaften des Jordan-Inhalts und der Satz von Fubini",
    free: false,
    intro:
      "Der Jordan-Inhalt aus Kapitel 1 verhält sich unter den geometrischen Operationen, die man von einem Flächen- bzw. Volumenbegriff erwartet, konsistent. Darauf aufbauend liefert der Satz von Fubini das zentrale Rechenwerkzeug, um mehrdimensionale Integrale auf iterierte eindimensionale Integrale zurückzuführen.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Rechenregeln für den Jordan-Inhalt",
        body: [
          "Der Jordan-Inhalt ist invariant unter Translation und Spiegelung: Für Jordan-messbares M ⊂ ℝⁿ, ⃗a ∈ ℝⁿ und die Spiegelung an einer Koordinatenachse gilt |M + ⃗a| = |M| bzw. |Spiegelung von M| = |M|. Unter einer Streckung um den Faktor λ > 0 in jeder Koordinate skaliert der Inhalt mit λⁿ, das heißt |λ·M| = λⁿ·|M|.",
          "Weiter ist der Jordan-Inhalt monoton (M₁ ⊂ M₂ ⟹ |M₁| ≤ |M₂|) und additiv: Sind M₁, M₂ Jordan-messbar mit |M₁ ∩ M₂| = 0 (etwa weil der Schnitt in einer gemeinsamen Randkurve liegt), so ist auch M₁ ∪ M₂ Jordan-messbar mit |M₁ ∪ M₂| = |M₁| + |M₂|.",
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Der Satz von Fubini",
        body: [
          "Ist f : Q → ℝ auf einem Quader Q = [a₁,b₁] × [a₂,b₂] integrierbar und existiert für jedes feste x ∈ [a₁,b₁] das innere Integral ∫_{a₂}^{b₂} f(x,y) dy, so liefert der Satz von Fubini ∫_Q f(x,y) d(x,y) = ∫_{a₁}^{b₁} (∫_{a₂}^{b₂} f(x,y) dy) dx — das mehrdimensionale Integral lässt sich als iteriertes, eindimensionales Integral berechnen, wobei die Integrationsreihenfolge (zuerst nach y, dann nach x, oder umgekehrt) unter den Voraussetzungen des Satzes beliebig ist.",
          "Der Satz von Fubini überträgt sich unmittelbar auf Quader im ℝⁿ mit n > 2 durch sukzessives Anwenden auf je zwei Variablen, sowie — kombiniert mit den Normalbereichen aus Kapitel 7 — auf nicht-quaderförmige Integrationsgebiete.",
        ],
        formulas: ["∫_Q f(x,y) d(x,y) = ∫ₐ¹ᵇ¹ (∫ₐ²ᵇ² f(x,y) dy) dx"],
        formulasLatex: ["\\int_Q f(x,y)\\,\\mathrm d(x,y) = \\int_{a_1}^{b_1}\\left(\\int_{a_2}^{b_2} f(x,y)\\,\\mathrm dy\\right)\\mathrm dx"],
        examples: [
          "Für Q := [0,2] × [0,log(3)] und f(x,y) := x·eʸ gilt mit dem Satz von Fubini ∫_Q x·eʸ d(x,y) = (∫₀² x dx) · (∫₀^{log 3} eʸ dy) = 2 · (3−1) = 4.",
        ],
      },
    ],
  },

  // ============ Kapitel 6 — Totale Differenzierbarkeit und die Tangentialebene ============
  {
    id: "totale-differenzierbarkeit",
    number: 6,
    title: "Totale Differenzierbarkeit und die Tangentialebene",
    free: false,
    intro:
      "Partielle Differenzierbarkeit (Kapitel 2) ist ein vergleichsweise schwacher Begriff, der noch nicht einmal Stetigkeit garantiert. Die totale (oder Fréchet-)Differenzierbarkeit verlangt stattdessen eine gute lineare Approximation von f in jede Richtung gleichzeitig — der 'richtige' mehrdimensionale Differenzierbarkeitsbegriff.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Totale (Fréchet-)Differenzierbarkeit",
        body: [
          "Eine Funktion f : D → ℝ mit D ⊂ ℝⁿ offen heißt in ⃗x₀ ∈ D total differenzierbar, wenn es einen Vektor ⃗a ∈ ℝⁿ gibt, sodass f(⃗x₀ + ⃗h) = f(⃗x₀) + ⟨⃗a, ⃗h⟩ + r(⃗h) mit lim_{⃗h→⃗0} r(⃗h)/‖⃗h‖₂ = 0 gilt. In diesem Fall ist ⃗a eindeutig bestimmt und gleich dem Gradienten ∇f(⃗x₀); f lässt sich also in der Nähe von ⃗x₀ gut durch die affine Funktion ⃗h ↦ f(⃗x₀) + ⟨∇f(⃗x₀),⃗h⟩ approximieren.",
          "Totale Differenzierbarkeit ist strikt stärker als partielle Differenzierbarkeit: Sie impliziert insbesondere Stetigkeit in ⃗x₀ sowie die Existenz aller Richtungsableitungen samt der Formel aus Kapitel 4. Ein hinreichendes, in der Praxis meist verwendetes Kriterium ist: Existieren alle partiellen Ableitungen von f in einer Umgebung von ⃗x₀ und sind sie dort stetig (f ist 'stetig partiell differenzierbar'), so ist f in ⃗x₀ total differenzierbar.",
        ],
        terms: [
          { term: "Total differenzierbar", definition: "f lässt sich in ⃗x₀ durch eine affine Funktion approximieren, deren linearer Anteil durch ∇f(⃗x₀) gegeben ist, mit einem Fehler, der schneller als ‖⃗h‖₂ gegen 0 geht." },
        ],
        examples: [
          "Für f(x,y) := x²y + 2x − y ist f überall stetig partiell differenzierbar (die partiellen Ableitungen 2xy+2 und x²−1 sind stetig), also nach dem Kriterium überall total differenzierbar.",
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Die Tangentialebene",
        body: [
          "Ist f : D → ℝ in (x₀,y₀) ∈ D ⊂ ℝ² total differenzierbar, so heißt die Ebene Tf(x₀,y₀) := {(x,y,z) ∈ ℝ³ : z = f(x₀,y₀) + ⟨∇f(x₀,y₀), (x−x₀,y−y₀)⟩} die Tangentialebene an den Graphen von f im Punkt (x₀,y₀). Sie ist das mehrdimensionale Analogon zur Tangente an den Graphen einer eindimensionalen Funktion.",
          "Ein Normalenvektor der Tangentialebene ist gegeben durch ⃗v = (∇f(x₀,y₀), −1)ᵀ ∈ ℝ³ — dieser Vektor steht senkrecht auf der Tangentialebene und wird häufig direkt aus dem Gradienten abgelesen, ohne den Umweg über die Ebenengleichung.",
        ],
        formulas: ["z = f(x₀,y₀) + ⟨∇f(x₀,y₀), (x−x₀, y−y₀)⟩", "Normalenvektor: ⃗v = (∇f(x₀,y₀), −1)ᵀ"],
        formulasLatex: [
          "z = f(x_0,y_0) + \\langle \\nabla f(x_0,y_0), (x-x_0,\\,y-y_0)\\rangle",
          "\\vec v = \\big(\\nabla f(x_0,y_0),\\, -1\\big)^\\top",
        ],
        examples: [
          "Für f(x,y) := x²y + 3 im Punkt (2,1) gilt f(2,1) = 7 und ∇f(2,1) = (2·2·1, 2²)ᵀ = (4,4)ᵀ. Die Tangentialebene lautet damit z = 7 + 4(x−2) + 4(y−1) = 4x + 4y − 5.",
        ],
      },
    ],
  },

  // ============ Kapitel 7 — Normalbereiche und das Prinzip von Cavalieri ============
  {
    id: "normalbereiche-cavalieri",
    number: 7,
    title: "Normalbereiche und das Prinzip von Cavalieri",
    free: false,
    intro:
      "Um den Satz von Fubini auch auf nicht-quaderförmige Integrationsbereiche anzuwenden, führen wir Normalbereiche ein — Mengen, deren Randfunktionen die Integrationsgrenzen einer Variablen in Abhängigkeit von den übrigen beschreiben. Das Prinzip von Cavalieri liefert daraus eine besonders anschauliche Volumenformel über Schnittflächen.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Ordinatenmengen und Normalbereiche",
        body: [
          "Ist g : [a,b] → ℝ stetig und nichtnegativ, so heißt Og := {(x,y) ∈ ℝ² : a ≤ x ≤ b, 0 ≤ y ≤ g(x)} die Ordinatenmenge von g; ihr Flächeninhalt ist |Og| = ∫ₐᵇ g(x) dx. Allgemeiner heißt eine Menge M := {(x,y) ∈ ℝ² : a ≤ x ≤ b, g(x) ≤ y ≤ h(x)} mit stetigen Funktionen g ≤ h ein Normalbereich bezüglich der x-Achse; analog definiert man Normalbereiche bezüglich der y-Achse mit vertauschten Rollen von x und y.",
          "Normalbereiche sind stets Jordan-messbar, und für eine auf M stetige Funktion f liefert der Satz von Fubini ∫_M f(x,y) d(x,y) = ∫ₐᵇ (∫_{g(x)}^{h(x)} f(x,y) dy) dx — die inneren Integrationsgrenzen hängen dabei von x ab, während die äußeren Grenzen a und b konstant sind.",
        ],
        examples: [
          "Die Fläche F oberhalb der Parabel x ↦ x² und unterhalb der Geraden x ↦ x+6 lässt sich wegen x² = x+6 ⟺ x ∈ {−2,3} als Normalbereich F = {(x,y) ∈ ℝ² : −2 ≤ x ≤ 3, x² ≤ y ≤ x+6} bezüglich der x-Achse darstellen.",
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Das Prinzip von Cavalieri",
        body: [
          "Es sei K ⊂ ℝ³ eine Jordan-messbare Menge und für u ∈ ℝ bezeichne Ku := {(x,y) ∈ ℝ² : (x,y,u) ∈ K} den Schnitt von K mit der Ebene z = u. Ist Ku für jedes u Jordan-messbar mit Flächeninhalt |Ku|, und ist K in einem Streifen a ≤ z ≤ b enthalten, so liefert das Prinzip von Cavalieri |K| = ∫ₐᵇ |Ku| du — das Volumen von K ergibt sich als Integral über die Flächeninhalte seiner Schnitte.",
          "Eine klassische Anwendung ist der verallgemeinerte Kegel: Ist B ⊂ ℝ² eine Jordan-messbare Grundfläche und K der Kegel mit Spitze ⃗z ∈ ℝ³ über B mit Höhe h, so ist der Schnitt Ku eine um den Faktor u/h skalierte Kopie von B, also |Ku| = (u/h)²·|B|, und Cavalieri liefert |K| = ∫₀ʰ (u/h)²·|B| du = h·|B|/3 — die vertraute Kegelvolumenformel 'Grundfläche mal Höhe durch drei'.",
        ],
        formulas: ["|K| = ∫ₐᵇ |Ku| du", "Kegelvolumen: |K| = h·|B|/3"],
        formulasLatex: ["|K| = \\int_a^b |K_u|\\,\\mathrm du", "|K| = \\frac{h \\cdot |B|}{3}"],
      },
    ],
  },

  // ============ Kapitel 8 — Kettenregel, Jacobi-Matrix und vektorwertige Funktionen ============
  {
    id: "kettenregel-jacobi",
    number: 8,
    title: "Kettenregel, Jacobi-Matrix und vektorwertige Funktionen",
    free: false,
    intro:
      "Bisher haben wir nur skalarwertige Funktionen f : ℝⁿ → ℝ betrachtet. Für vektorwertige Funktionen f : ℝⁿ → ℝᵐ verallgemeinert sich der Gradient zur Jacobi-Matrix, und die Kettenregel erlaubt es, Kompositionen solcher Funktionen systematisch abzuleiten.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Vektorwertige Funktionen und die Jacobi-Matrix",
        body: [
          "Eine Funktion f = (f₁,...,fₘ) : D → ℝᵐ mit D ⊂ ℝⁿ offen heißt in ⃗x₀ ∈ D (total) differenzierbar, wenn jede Komponentenfunktion fⱼ dort differenzierbar ist. Die Jacobi-Matrix Jf(⃗x₀) ∈ ℝ^{m×n} ist dann die Matrix, deren j-te Zeile aus dem Gradienten ∇fⱼ(⃗x₀)ᵀ besteht — für m = 1 ist die Jacobi-Matrix also genau der (transponierte) Gradient.",
          "Die Jacobi-Matrix beschreibt die beste lineare Approximation von f in ⃗x₀: Für kleine ⃗h gilt f(⃗x₀+⃗h) ≈ f(⃗x₀) + Jf(⃗x₀)·⃗h. Ist m = n, heißt det(Jf(⃗x₀)) die Jacobi-Determinante von f in ⃗x₀ — eine Größe, die in Kapitel 12 beim Transformationssatz zentral wird.",
        ],
        formulas: ["Jf(⃗x) = (∇f₁(⃗x)ᵀ; ...; ∇fₘ(⃗x)ᵀ) ∈ ℝ^{m×n}"],
        formulasLatex: ["J_f(\\vec x) = \\begin{pmatrix} \\nabla f_1(\\vec x)^\\top \\\\ \\vdots \\\\ \\nabla f_m(\\vec x)^\\top \\end{pmatrix} \\in \\mathbb R^{m\\times n}"],
        examples: [
          "Für f : ℝ² → ℝ², f(x,y) := (x²−y², 2xy)ᵀ ist Jf(x,y) = ((2x, −2y); (2y, 2x)) mit Jacobi-Determinante det(Jf(x,y)) = 4x² + 4y².",
        ],
      },
      {
        id: "8-2",
        heading: "8.2 Die allgemeine Kettenregel",
        body: [
          "Sind g : D₁ → ℝᵏ mit D₁ ⊂ ℝⁿ und f : D₂ → ℝᵐ mit D₂ ⊂ ℝᵏ, g(D₁) ⊂ D₂, differenzierbare Funktionen, so ist die Komposition f∘g : D₁ → ℝᵐ ebenfalls differenzierbar, und es gilt die Kettenregel J_{f∘g}(⃗x) = Jf(g(⃗x)) · Jg(⃗x) — das Produkt der beiden Jacobi-Matrizen (in dieser Reihenfolge, als Matrizenprodukt).",
          "Für den Spezialfall m = 1 (also f skalarwertig) liefert die Kettenregel für den Gradienten ∇(f∘g)(⃗x) = Jg(⃗x)ᵀ · ∇f(g(⃗x)) — eine Formel, die insbesondere beim Ableiten von Funktionen benötigt wird, die über Koordinatentransformationen wie Polarkoordinaten definiert sind.",
        ],
        formulas: ["J_{f∘g}(⃗x) = Jf(g(⃗x)) · Jg(⃗x)"],
        formulasLatex: ["J_{f\\circ g}(\\vec x) = J_f(g(\\vec x)) \\cdot J_g(\\vec x)"],
        examples: [
          "Für g(t) := (t², sin(t))ᵀ und f(x,y) := x + y² gilt (f∘g)(t) = t² + sin²(t). Mit der Kettenregel folgt ∇(f∘g)(t) = Jg(t)ᵀ·∇f(g(t)) = (2t, cos t) · (1, 2sin t)ᵀ = 2t + 2 sin(t) cos(t), was mit der direkten Ableitung d/dt(t²+sin²t) = 2t + 2sin(t)cos(t) übereinstimmt.",
        ],
      },
    ],
  },

  // ============ Kapitel 9 — Treppenfunktionen, gleichmäßige Stetigkeit und Integrierbarkeit ============
  {
    id: "treppenfunktionen-gleichmaessige-stetigkeit",
    number: 9,
    title: "Treppenfunktionen, gleichmäßige Stetigkeit und Integrierbarkeit stetiger Funktionen",
    free: false,
    intro:
      "Dieses Kapitel liefert die technischen Hilfsmittel, mit denen man beweist, dass jede auf einer kompakten Jordan-messbaren Menge stetige Funktion automatisch Riemann-integrierbar ist — ein Resultat, das in der Praxis ständig stillschweigend verwendet wird.",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Treppenfunktionen und gleichmäßige Stetigkeit",
        body: [
          "Eine Funktion φ : Q → ℝ auf einem Quader Q heißt Treppenfunktion, wenn es eine Partition 𝒵 = {Q₁,...,Qₘ} von Q gibt, sodass φ auf jedem (offenen) Teilquader Qᵢ konstant ist. Treppenfunktionen sind stets integrierbar, und ihr Integral ist einfach die gewichtete Summe der Konstanten mal den Teilquaderinhalten — genau die Definition von Ober- bzw. Untersumme aus Kapitel 3, wenn man φ als sup- bzw. inf-Treppenfunktion von f wählt.",
          "Eine Funktion f : M → ℝ heißt gleichmäßig stetig, wenn es zu jedem ε > 0 ein δ > 0 gibt, sodass für alle ⃗x,⃗y ∈ M mit ‖⃗x−⃗y‖₂ < δ stets |f(⃗x)−f(⃗y)| < ε gilt — im Unterschied zur gewöhnlichen Stetigkeit darf δ hier nicht von ⃗x abhängen. Nach dem Satz von Heine ist jede auf einer kompakten Menge stetige Funktion dort automatisch gleichmäßig stetig.",
        ],
        terms: [
          { term: "Gleichmäßige Stetigkeit", definition: "Zu jedem ε > 0 existiert ein δ > 0, das für alle Punktepaare mit Abstand < δ funktioniert (unabhängig vom gewählten Punkt)." },
        ],
      },
      {
        id: "9-2",
        heading: "9.2 Integrierbarkeit stetiger Funktionen und der Mittelwertsatz für Integrale",
        body: [
          "Ist f auf einer kompakten Jordan-messbaren Menge M ⊂ ℝⁿ stetig, so ist f dort Riemann-integrierbar. Der Beweis approximiert f von oben und unten durch Treppenfunktionen, deren Ober- und Untersummen wegen der gleichmäßigen Stetigkeit aus 9.1 beliebig nahe zusammenrücken — genau das ε-Kriterium aus Kapitel 3.",
          "Ein nützliches Korollar ist der Mittelwertsatz für Integrale: Ist M Jordan-messbar mit |M| > 0, f : M → ℝ integrierbar und existieren c,d ∈ ℝ mit c ≤ f(⃗x) ≤ d für alle ⃗x ∈ M, so gibt es ein µ ∈ [c,d] mit (1/|M|)·∫_M f(⃗x) d⃗x = µ. Ist f zusätzlich stetig und M zusammenhängend, lässt sich µ nach dem Zwischenwertsatz sogar als Funktionswert f(⃗ξ) für ein ⃗ξ ∈ M realisieren.",
        ],
        formulas: ["c ≤ f ≤ d auf M ⟹ ∃ µ ∈ [c,d]: (1/|M|)·∫_M f d⃗x = µ"],
        formulasLatex: ["c \\le f \\le d \\text{ auf } M \\implies \\exists\\, \\mu \\in [c,d]:\\ \\frac{1}{|M|}\\int_M f(\\vec x)\\,\\mathrm d\\vec x = \\mu"],
      },
    ],
  },

  // ============ Kapitel 10 — Höhere Ableitungen und der Satz von Schwarz ============
  {
    id: "hoehere-ableitungen-schwarz",
    number: 10,
    title: "Höhere Ableitungen und der Satz von Schwarz",
    free: false,
    intro:
      "Genau wie im Eindimensionalen kann man partielle Ableitungen erneut partiell ableiten. Bei gemischten zweiten Ableitungen stellt sich dabei eine natürliche Frage: Kommt es auf die Reihenfolge des Ableitens an?",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Partielle Ableitungen höherer Ordnung",
        body: [
          "Ist f : D → ℝ partiell nach xᵢ differenzierbar und ist die Funktion ∂f/∂xᵢ ihrerseits partiell nach xⱼ differenzierbar, so schreibt man ∂²f/(∂xⱼ∂xᵢ) für diese gemischte zweite partielle Ableitung. Ist f (samt aller partiellen Ableitungen bis zur Ordnung k) k-mal stetig partiell differenzierbar, sagt man, f sei von der Klasse Cᵏ.",
          "Für Funktionen zweier Veränderlicher gibt es vier zweite partielle Ableitungen: fₓₓ, fᵧᵧ und die beiden gemischten Ableitungen fₓᵧ und fᵧₓ. Im Allgemeinen müssen fₓᵧ und fᵧₓ nicht übereinstimmen — ein Phänomen, das der folgende Abschnitt genauer beleuchtet.",
        ],
      },
      {
        id: "10-2",
        heading: "10.2 Der Satz von Schwarz",
        body: [
          "Ist f : D → ℝ von der Klasse C² (das heißt, alle zweiten partiellen Ableitungen existieren und sind stetig), so liefert der Satz von Schwarz die Gleichheit der gemischten partiellen Ableitungen: ∂²f/(∂x∂y) = ∂²f/(∂y∂x) auf ganz D. Die Reihenfolge des Ableitens spielt unter dieser Voraussetzung also keine Rolle — ein Resultat, das in praktisch jeder Hessematrix-Rechnung (Kapitel 14) implizit verwendet wird.",
          "Die Stetigkeitsvoraussetzung im Satz von Schwarz ist nicht verzichtbar: Es gibt Funktionen, bei denen beide gemischten Ableitungen im Ursprung existieren, aber unterschiedliche Werte annehmen — dort sind die gemischten Ableitungen zwangsläufig nicht beide stetig.",
        ],
        formulas: ["f ∈ C² ⟹ ∂²f/(∂x∂y) = ∂²f/(∂y∂x)"],
        formulasLatex: ["f \\in C^2 \\implies \\frac{\\partial^2 f}{\\partial x\\, \\partial y} = \\frac{\\partial^2 f}{\\partial y\\, \\partial x}"],
        examples: [
          "Für f(x,y) := xy(x²−y²)/(x²+y²) falls (x,y) ≠ (0,0) und f(0,0) := 0 lässt sich mit einiger Rechnung zeigen, dass fₓᵧ(0,0) = 1, aber fᵧₓ(0,0) = −1 gilt — ein klassisches Gegenbeispiel, das zeigt, dass ohne Stetigkeit der zweiten Ableitungen der Satz von Schwarz scheitern kann.",
        ],
      },
    ],
  },

  // ============ Kapitel 11 — Der Gradient als Richtung des steilsten Anstiegs ============
  {
    id: "gradient-steilster-anstieg",
    number: 11,
    title: "Der Gradient als Richtung des steilsten Anstiegs",
    free: false,
    intro:
      "Der Gradient hat neben seiner algebraischen Definition (Kapitel 2) eine anschauliche geometrische Bedeutung: Er zeigt in die Richtung, in der f am schnellsten wächst, und steht senkrecht auf den Höhenlinien von f.",
    sections: [
      {
        id: "11-1",
        heading: "11.1 Gradient und Richtung des steilsten Anstiegs",
        body: [
          "Ist f in ⃗x₀ differenzierbar mit ∇f(⃗x₀) ≠ ⃗0, so wird das Maximum der Richtungsableitung ∂f/∂⃗v(⃗x₀) = ⟨∇f(⃗x₀), ⃗v⟩ über alle Einheitsvektoren ⃗v nach der Cauchy-Schwarz-Ungleichung genau für ⃗v₀ := ∇f(⃗x₀)/‖∇f(⃗x₀)‖₂ angenommen, und der maximale Wert ist ‖∇f(⃗x₀)‖₂. Der Gradient zeigt also in die Richtung des steilsten Anstiegs, und seine Norm gibt die zugehörige Anstiegsrate an.",
          "Analog zeigt −∇f(⃗x₀) in die Richtung des steilsten Abstiegs, mit Anstiegsrate −‖∇f(⃗x₀)‖₂. Diese Beobachtung ist die Grundlage numerischer Optimierungsverfahren wie des Gradientenabstiegs, bei dem man iterativ ein Stück in Richtung −∇f läuft, um ein lokales Minimum zu finden.",
        ],
        formulas: ["⃗v₀ = ∇f(⃗x₀)/‖∇f(⃗x₀)‖₂ liefert max_{‖⃗v‖₂=1} ∂f/∂⃗v(⃗x₀) = ‖∇f(⃗x₀)‖₂"],
        formulasLatex: ["\\vec v_0 = \\frac{\\nabla f(\\vec x_0)}{\\|\\nabla f(\\vec x_0)\\|_2} \\quad\\text{liefert}\\quad \\max_{\\|\\vec v\\|_2=1} \\frac{\\partial f}{\\partial \\vec v}(\\vec x_0) = \\|\\nabla f(\\vec x_0)\\|_2"],
      },
      {
        id: "11-2",
        heading: "11.2 Der Gradient steht senkrecht auf Höhenlinien",
        body: [
          "Für α ∈ ℝ heißt die Menge f⁻¹({α}) = {⃗x ∈ D : f(⃗x) = α} die Höhenlinie (bzw. Niveaumenge) von f zum Niveau α. Bewegt man sich entlang einer Höhenlinie, ändert sich der Funktionswert per Definition nicht — die Richtungsableitung entlang der Tangente an die Höhenlinie ist also 0.",
          "Da die Richtungsableitung tangential zur Höhenlinie verschwindet, steht der Gradient ∇f(⃗x₀) (sofern ungleich ⃗0) in jedem Punkt ⃗x₀ senkrecht auf der durch ⃗x₀ verlaufenden Höhenlinie. Das erklärt anschaulich, warum der steilste Anstieg stets orthogonal zu den Höhenlinien verläuft — wie ein Wanderer, der den kürzesten Weg bergauf nimmt, indem er quer zu den Höhenlinien einer topografischen Karte läuft.",
        ],
        figure: { type: "gradient-level-curves", caption: "Der Gradient ∇f steht senkrecht auf der Höhenlinie durch den betrachteten Punkt und zeigt in Richtung des steilsten Anstiegs." },
        examples: [
          "Für f(x,y) := √(9−x²−4y²) und den Punkt (1, √2) gilt f(1,√2) = √(9−1−8) = 0 auf dem Rand des Definitionsbereichs. Im inneren Punkt (1,1) ist ∇f(1,1) = (−1/√4, −4/√4)ᵀ = (−1/2, −2)ᵀ, und dieser Vektor steht senkrecht auf der Tangente an die Ellipsen-Höhenlinie x²+4y²=5 im Punkt (1,1).",
        ],
      },
    ],
  },

  // ============ Kapitel 12 — Der Transformationssatz und Koordinatenwechsel ============
  {
    id: "transformationssatz-koordinaten",
    number: 12,
    title: "Der Transformationssatz und Koordinatenwechsel",
    free: false,
    intro:
      "Viele Integrationsgebiete lassen sich in kartesischen Koordinaten nur mühsam beschreiben, in Polar-, Kugel- oder Zylinderkoordinaten dagegen sehr einfach. Der Transformationssatz erlaubt es, ein Integral systematisch in neue Koordinaten umzuschreiben — die mehrdimensionale Verallgemeinerung der Substitutionsregel aus Mathematik 1.",
    sections: [
      {
        id: "12-1",
        heading: "12.1 Der Transformationssatz",
        body: [
          "Es seien U, V ⊂ ℝⁿ offen und T : U → V eine bijektive, stetig differenzierbare Abbildung mit stetig differenzierbarer Umkehrabbildung und det(JT(⃗u)) ≠ 0 für alle ⃗u ∈ U (T heißt dann Diffeomorphismus). Für eine Jordan-messbare Menge M ⊂ U mit T(M) ⊂ V und eine integrierbare Funktion f : T(M) → ℝ liefert der Transformationssatz ∫_{T(M)} f(⃗x) d⃗x = ∫_M f(T(⃗u))·|det(JT(⃗u))| d⃗u.",
          "Für lineare Abbildungen T(⃗u) = A·⃗u mit invertierbarer Matrix A ∈ ℝ^{n×n} vereinfacht sich der Satz zu |T(M)| = |det(A)|·|M| bzw. ∫_{T(M)} f(⃗x) d⃗x = |det(A)|·∫_M f(A·⃗u) d⃗u, da die Jacobi-Determinante einer linearen Abbildung konstant gleich det(A) ist.",
        ],
        formulas: ["∫_{T(M)} f(⃗x) d⃗x = ∫_M f(T(⃗u))·|det(JT(⃗u))| d⃗u"],
        formulasLatex: ["\\int_{T(M)} f(\\vec x)\\,\\mathrm d\\vec x = \\int_M f(T(\\vec u))\\cdot|\\det(J_T(\\vec u))|\\,\\mathrm d\\vec u"],
      },
      {
        id: "12-2",
        heading: "12.2 Polarkoordinaten, Kugelkoordinaten und Zylinderkoordinaten",
        body: [
          "In ℝ² beschreiben Polarkoordinaten T(r,φ) := (r cos φ, r sin φ) mit r ≥ 0, φ ∈ [0,2π) jeden Punkt über seinen Abstand r zum Ursprung und seinen Winkel φ zur x-Achse. Die Jacobi-Determinante ist det(JT(r,φ)) = r, sodass ein Flächenintegral zu ∫∫ f(r cos φ, r sin φ)·r dr dφ wird — der Faktor r ist dabei leicht zu vergessen, aber unverzichtbar.",
          "In ℝ³ verallgemeinern Kugelkoordinaten T(r,ϑ,φ) := (r sin ϑ cos φ, r sin ϑ sin φ, r cos ϑ) mit r ≥ 0, ϑ ∈ [0,π], φ ∈ [0,2π) die Polarkoordinaten und haben Jacobi-Determinante r²sin ϑ, während Zylinderkoordinaten T(r,φ,z) := (r cos φ, r sin φ, z) die z-Koordinate unverändert lassen und Jacobi-Determinante r besitzen. Die Wahl des passenden Koordinatensystems richtet sich nach der Symmetrie des Integrationsgebiets: Kreis- bzw. Kugelsymmetrie legt Polar- bzw. Kugelkoordinaten nahe, Rotationssymmetrie um eine Achse legt Zylinderkoordinaten nahe.",
        ],
        formulas: ["Polarkoordinaten: det(JT(r,φ)) = r", "Kugelkoordinaten: det(JT(r,ϑ,φ)) = r²sin ϑ", "Zylinderkoordinaten: det(JT(r,φ,z)) = r"],
        formulasLatex: [
          "\\text{Polarkoordinaten:}\\ \\det(J_T(r,\\varphi)) = r",
          "\\text{Kugelkoordinaten:}\\ \\det(J_T(r,\\vartheta,\\varphi)) = r^2\\sin\\vartheta",
          "\\text{Zylinderkoordinaten:}\\ \\det(J_T(r,\\varphi,z)) = r",
        ],
        figure: { type: "unit-circle", caption: "Polarkoordinaten: ein Punkt wird durch Radius r und Winkel φ (bzw. θ) beschrieben, x = r cos φ, y = r sin φ." },
        examples: [
          "Das Integral ∫_B √(x²+y²) d(x,y) über den rechten Halbkreis B := {(x,y) : x ≥ 0, x²+y² ≤ 4} lässt sich in Polarkoordinaten als ∫₀^{π} ∫₀² r·r dr dφ = π·[r³/3]₀² = 8π/3 berechnen — deutlich einfacher als eine direkte Rechnung in kartesischen Koordinaten.",
          "Für logarithmische Polarkoordinaten T(ρ,φ) := (eᵨcos φ, eᵨsin φ) mit ρ ∈ ℝ, φ ∈ [0,2π) gilt det(T′(ρ,φ)) = e^{2ρ}, sodass sich Integrale über Kreisringe mit exponentiell wachsendem Radius auf diese Weise oft besonders einfach berechnen lassen.",
        ],
      },
    ],
  },

  // ============ Kapitel 13 — Taylorpolynome und der Mittelwertsatz im R^n ============
  {
    id: "taylor-mittelwertsatz",
    number: 13,
    title: "Taylorpolynome und der Mittelwertsatz im Rⁿ",
    free: false,
    intro:
      "Aus Mathematik 1 kennen wir Taylorpolynome als polynomielle Approximation einer Funktion einer Veränderlichen. Dieses Kapitel überträgt Taylorpolynome und den Mittelwertsatz auf Funktionen mehrerer Veränderlicher — das zentrale Handwerkszeug für die Extremwertanalyse in Kapitel 14.",
    sections: [
      {
        id: "13-1",
        heading: "13.1 Der Mittelwertsatz im Rⁿ",
        body: [
          "Es sei D ⊂ ℝⁿ offen, f : D → ℝ differenzierbar und ⃗a, ⃗x ∈ D so, dass die Verbindungsstrecke zwischen ⃗a und ⃗x ganz in D liegt. Dann liefert der Mittelwertsatz im ℝⁿ die Existenz eines ϑ ∈ (0,1) mit f(⃗x) = f(⃗a) + ⟨∇f(⃗a + ϑ(⃗x−⃗a)), ⃗x−⃗a⟩ — die direkte Verallgemeinerung des eindimensionalen Mittelwertsatzes, angewendet auf die Schnittfunktion t ↦ f(⃗a + t(⃗x−⃗a)).",
          "Eine unmittelbare Anwendung: Ist ∇f(⃗x) = ⃗0 für alle ⃗x in einer konvexen offenen Menge D, so ist f auf D konstant — denn für je zwei Punkte ⃗a, ⃗x ∈ D verschwindet der mittlere Term in obiger Gleichung, sodass f(⃗x) = f(⃗a) gilt.",
        ],
        formulas: ["f(⃗x) = f(⃗a) + ⟨∇f(⃗a + ϑ(⃗x−⃗a)), ⃗x−⃗a⟩ für ein ϑ ∈ (0,1)"],
        formulasLatex: ["f(\\vec x) = f(\\vec a) + \\langle \\nabla f(\\vec a + \\vartheta(\\vec x - \\vec a)),\\, \\vec x - \\vec a\\rangle,\\quad \\vartheta \\in (0,1)"],
      },
      {
        id: "13-2",
        heading: "13.2 Taylorpolynome",
        body: [
          "Ist f : D → ℝ von der Klasse C² mit D ⊂ ℝⁿ offen und ⃗x₀ ∈ D, so ist das Taylorpolynom zweiter Ordnung von f im Entwicklungspunkt ⃗x₀ gegeben durch T₂(⃗x;f;⃗x₀) := f(⃗x₀) + ⟨∇f(⃗x₀), ⃗x−⃗x₀⟩ + ½·(⃗x−⃗x₀)ᵀ·Hf(⃗x₀)·(⃗x−⃗x₀), wobei Hf(⃗x₀) die in Kapitel 14 eingeführte Hessematrix bezeichnet. T₂ approximiert f in der Nähe von ⃗x₀ bis zur zweiten Ordnung — der lineare Anteil entspricht der Tangentialebene aus Kapitel 6, der quadratische Anteil erfasst die Krümmung.",
          "Höhere Taylorpolynome existieren analog für f ∈ Cᵏ mit k > 2, werden in den Klausuraufgaben dieses Moduls aber praktisch ausschließlich bis zur zweiten Ordnung verlangt, da bereits das quadratische Taylorpolynom für die Extremwertanalyse in Kapitel 14 ausreicht.",
        ],
        formulas: ["T₂(⃗x;f;⃗x₀) = f(⃗x₀) + ⟨∇f(⃗x₀), ⃗x−⃗x₀⟩ + ½(⃗x−⃗x₀)ᵀ Hf(⃗x₀) (⃗x−⃗x₀)"],
        formulasLatex: ["T_2(\\vec x; f; \\vec x_0) = f(\\vec x_0) + \\langle \\nabla f(\\vec x_0), \\vec x - \\vec x_0\\rangle + \\tfrac12 (\\vec x - \\vec x_0)^\\top H_f(\\vec x_0)(\\vec x - \\vec x_0)"],
        examples: [
          "Für f(x,y,z) := x³ + y² + 2z²(x−2) und den Entwicklungspunkt ⃗x₀ = (1,0,2) berechnet man zunächst f(⃗x₀), ∇f(⃗x₀) und Hf(⃗x₀), um daraus T₂ als vollständig ausmultipliziertes Polynom in x, y, z anzugeben — eine typische, aber rein rechnerische Klausuraufgabe.",
        ],
      },
    ],
  },

  // ============ Kapitel 14 — Lokale Extrema, die Hessematrix und Sattelpunkte ============
  {
    id: "extrema-hessematrix-sattelpunkte",
    number: 14,
    title: "Lokale Extrema, die Hessematrix und Sattelpunkte",
    free: false,
    intro:
      "Mit dem Gradienten, den höheren Ableitungen und den Taylorpolynomen der vorangegangenen Kapitel können wir nun systematisch lokale Extremstellen von Funktionen mehrerer Veränderlicher bestimmen — analog zur Kurvendiskussion aus Mathematik 1, aber mit einer Matrix statt einer einzelnen zweiten Ableitung.",
    sections: [
      {
        id: "14-1",
        heading: "14.1 Notwendige Bedingung: stationäre Punkte",
        body: [
          "Es sei D ⊂ ℝⁿ offen, f : D → ℝ differenzierbar und ⃗x₀ ∈ D eine lokale Extremstelle von f. Dann ist ⃗x₀ notwendigerweise ein stationärer Punkt, das heißt ∇f(⃗x₀) = ⃗0. Diese notwendige Bedingung ist die direkte Verallgemeinerung von f′(x₀) = 0 aus Mathematik 1 und liefert eine endliche Kandidatenliste, aus der man anschließend die tatsächlichen Extremstellen herausfiltern muss.",
          "Wichtig ist, dass die Umkehrung falsch ist: Nicht jeder stationäre Punkt ist eine Extremstelle. Um zu entscheiden, welcher Fall vorliegt, betrachtet man im nächsten Abschnitt die zweiten Ableitungen, gesammelt in der Hessematrix.",
        ],
      },
      {
        id: "14-2",
        heading: "14.2 Hinreichende Bedingung über die Hessematrix",
        body: [
          "Ist f : D → ℝ von der Klasse C² und ⃗x₀ ∈ D ein stationärer Punkt, so heißt Hf(⃗x₀) := (∂²f/(∂xᵢ∂xⱼ)(⃗x₀))ᵢⱼ ∈ ℝ^{n×n} die Hessematrix von f in ⃗x₀ — nach dem Satz von Schwarz (Kapitel 10) ist Hf(⃗x₀) stets symmetrisch. Ist Hf(⃗x₀) positiv definit, liegt in ⃗x₀ eine strenge lokale Minimalstelle vor; ist Hf(⃗x₀) negativ definit, liegt eine strenge lokale Maximalstelle vor; ist Hf(⃗x₀) indefinit, liegt ein Sattelpunkt vor.",
          "Ist Hf(⃗x₀) dagegen semidefinit (aber nicht definit), liefert die Hessematrix keine Entscheidung — hier muss man f in einer Umgebung von ⃗x₀ direkt untersuchen, etwa über geeignete Schnittfunktionen entlang verschiedener Richtungen durch ⃗x₀.",
        ],
        terms: [
          { term: "Positiv definit", definition: "⃗vᵀ H ⃗v > 0 für alle ⃗v ≠ ⃗0 — liefert eine strenge lokale Minimalstelle." },
          { term: "Indefinit", definition: "Es gibt ⃗v, ⃗w mit ⃗vᵀH⃗v > 0 und ⃗wᵀH⃗w < 0 — liefert einen Sattelpunkt." },
        ],
        examples: [
          "Für f(x,y) := x⁴ + y⁴ − 8x² − 8y² sind die stationären Punkte genau die Paare (x,y) mit x,y ∈ {−2,0,2}. Die Hessematrix Hf(x,y) = diag(12x²−16, 12y²−16) ist in (0,0) negativ definit (lokales Maximum), in (±2,±2) positiv definit (lokale Minima) und in (±2,0) sowie (0,±2) indefinit (Sattelpunkte).",
        ],
      },
      {
        id: "14-3",
        heading: "14.3 Sattelpunkte und Grenzfälle",
        body: [
          "Ein Sattelpunkt ist ein stationärer Punkt, in dem f in manchen Richtungen wächst und in anderen fällt — anschaulich wie ein Gebirgspass, der von einer Seite ein Tiefpunkt und von der anderen ein Hochpunkt ist. Ein besonders eindrückliches Beispiel ist der 'Affensattel' f(x,y) := x³ − 3xy², dessen Hessematrix im Ursprung die Nullmatrix ist (ein semidefiniter Grenzfall), obwohl f dort keine Extremstelle besitzt: Entlang dreier verschiedener Richtungen wechselt f das Vorzeichen.",
          "Ein zweites klassisches Beispiel für den semidefiniten Grenzfall ist f(x,y) := (y−x²)(y−3x²): Die Hessematrix im Ursprung ist positiv semidefinit, doch f nimmt in jeder Umgebung von (0,0) sowohl positive als auch negative Werte an (etwa entlang der Kurve y = 2x²), sodass (0,0) trotz semidefiniter Hessematrix kein lokales Minimum ist. Solche Beispiele zeigen, warum man bei semidefiniten Hessematrizen nicht vorschnell auf eine Extremstelle schließen darf.",
        ],
        figure: { type: "saddle-surface", caption: "In einem Sattelpunkt wächst f entlang einer Richtung und fällt entlang einer anderen — die Hessematrix ist dort indefinit." },
      },
    ],
  },
];
