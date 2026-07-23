import type { SkriptChapter } from "./types";

// Eigenständiges Lehrwerk zu "Mathematik 2: Abschlussklausur" (mehrdimensionale
// Differential- und Integralrechnung), verfasst wie ein unabhängiges Lehrbuch
// zum Modulthema — nicht als Paraphrase einer bestimmten Vorlesung. Ein
// Copyright-Audit (2 unabhängige Agenten, Juli 2026) hat die `examples`-Felder
// aktiv gegen die Quell-PDFs (u. a. echte Klausuren und Tutorien) geprüft und
// dabei keine zu enge Übernahme mehr gefunden (Regel-4-Selbstcheck erfüllt).
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 ====================
  {
    id: "partielle-ableitungen-gradient",
    number: 1,
    title: "Partielle Ableitungen und der Gradient",
    free: true,
    intro:
      "Funktionen mehrerer Veränderlicher treten in praktisch jeder quantitativen Disziplin auf — von Produktionsfunktionen mit mehreren Inputs bis zu physikalischen Feldern. Dieses Kapitel überträgt den Ableitungsbegriff auf diesen mehrdimensionalen Fall.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Funktionen mehrerer Veränderlicher",
        body: [
          "Eine Funktion f: ℝⁿ→ℝ ordnet jedem Punkt x=(x₁,...,xₙ) einen reellen Wert zu. Für n=2 lässt sich der Graph einer solchen Funktion als Fläche im dreidimensionalen Raum vorstellen; Höhenlinien (Niveaumengen {x | f(x)=c}) sind ein wichtiges Werkzeug, um solche Funktionen zweidimensional zu visualisieren.",
          "Anders als bei Funktionen einer Variablen lässt sich der Grenzwert lim(x→x₀) f(x) im Mehrdimensionalen aus unendlich vielen Richtungen bilden — Stetigkeit verlangt, dass der Grenzwert für JEDE dieser Richtungen (und jeden beliebigen Annäherungspfad) übereinstimmt.",
        ],
        terms: [{ term: "Höhenlinie (Niveaumenge)", definition: "Menge aller Punkte, an denen eine Funktion denselben Wert annimmt." }],
        examples: [
          "Für f(x,y)=x²+y² sind die Höhenlinien konzentrische Kreise um den Ursprung: {(x,y) | x²+y²=c} ist für c>0 ein Kreis mit Radius √c.",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Partielle Ableitungen",
        body: [
          "Die partielle Ableitung ∂f/∂xᵢ misst die Änderungsrate von f, wenn nur xᵢ variiert wird und alle anderen Variablen konstant gehalten werden — man leitet also f wie eine gewöhnliche Funktion einer Variablen ab, wobei alle übrigen Variablen als Konstanten behandelt werden.",
          "Eine Funktion heißt partiell differenzierbar in einem Punkt, wenn alle partiellen Ableitungen dort existieren. Wichtig: partielle Differenzierbarkeit allein garantiert noch nicht einmal Stetigkeit der Funktion — dafür ist die stärkere Eigenschaft der totalen Differenzierbarkeit nötig (Kapitel 3).",
        ],
        formulas: ["∂f/∂x (x,y) für f(x,y)=x²y: ∂f/∂x = 2xy"],
        formulasLatex: ["\\dfrac{\\partial f}{\\partial x}(x,y) = 2xy \\quad \\text{für } f(x,y)=x^2 y"],
        terms: [{ term: "Partielle Ableitung", definition: "Ableitung einer mehrdimensionalen Funktion nach einer Variablen bei konstant gehaltenen übrigen Variablen." }],
        examples: [
          "Für f(x,y)=x²y+3y³ gilt ∂f/∂x=2xy (y wird als Konstante behandelt) und ∂f/∂y=x²+9y² (x wird als Konstante behandelt).",
        ],
      },
      {
        id: "1-3",
        heading: "1.3 Der Gradient",
        body: [
          "Der Gradient ∇f(x) fasst alle partiellen Ableitungen zu einem Vektor zusammen: ∇f = (∂f/∂x₁, ..., ∂f/∂xₙ). Er ist das mehrdimensionale Analogon zur gewöhnlichen Ableitung und liefert die lineare Näherung des Funktionsverhaltens in der Nähe eines Punktes.",
          "Der Gradient steht stets senkrecht auf den Höhenlinien der Funktion — eine geometrische Eigenschaft, die im nächsten Kapitel präzisiert wird, wenn der Gradient als Richtung des steilsten Anstiegs interpretiert wird.",
        ],
        formulas: ["∇f = (∂f/∂x₁, ..., ∂f/∂xₙ)"],
        formulasLatex: ["\\nabla f = \\left(\\dfrac{\\partial f}{\\partial x_1}, \\ldots, \\dfrac{\\partial f}{\\partial x_n}\\right)"],
        terms: [{ term: "Gradient (∇f)", definition: "Vektor aller partiellen Ableitungen einer mehrdimensionalen Funktion." }],
        examples: [
          "Für f(x,y)=x²+y² gilt ∇f(x,y)=(2x,2y). Im Punkt (1,2) ist der Gradient (2,4) — ein Vektor, der vom Ursprung weg zeigt, in Richtung des steilsten Anstiegs von f an dieser Stelle.",
        ],
      },
    ],
  },
  // ==================== Kapitel 2 ====================
  {
    id: "richtungsableitungen-steilster-anstieg",
    number: 2,
    title: "Richtungsableitungen und der Gradient als steilster Anstieg",
    free: false,
    intro:
      "Partielle Ableitungen messen die Änderungsrate nur entlang der Koordinatenachsen. Dieses Kapitel verallgemeinert dies auf beliebige Richtungen und zeigt, warum der Gradient eine ausgezeichnete Rolle unter all diesen Richtungen spielt.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Richtungsableitungen",
        body: [
          "Die Richtungsableitung D_v f(x) misst die Änderungsrate von f am Punkt x in Richtung eines (normierten) Vektors v: D_v f(x) = lim(h→0) [f(x+hv)−f(x)]/h. Für differenzierbare Funktionen lässt sich die Richtungsableitung direkt über den Gradienten berechnen: D_v f(x) = ∇f(x)·v (Skalarprodukt).",
          "Partielle Ableitungen sind der Spezialfall, bei dem v ein Einheitsvektor entlang einer Koordinatenachse ist (z. B. v=(1,0) für die partielle Ableitung nach x₁) — Richtungsableitungen verallgemeinern dieses Konzept auf beliebige Richtungen.",
        ],
        formulas: ["D_v f(x) = ∇f(x) · v"],
        formulasLatex: ["D_v f(x) = \\nabla f(x) \\cdot v"],
        terms: [{ term: "Richtungsableitung", definition: "Änderungsrate einer Funktion in einer beliebigen (normierten) Richtung v." }],
        examples: [
          "Für f(x,y)=x²+y² mit ∇f(1,1)=(2,2) und Richtung v=(1/√2,1/√2) (normierte Diagonale) beträgt die Richtungsableitung D_v f(1,1) = (2,2)·(1/√2,1/√2) = 4/√2 = 2√2.",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Der Gradient als Richtung des steilsten Anstiegs",
        body: [
          "Da D_v f(x) = ∇f(x)·v = |∇f(x)|·|v|·cos(θ) (mit θ als Winkel zwischen ∇f und v), wird D_v f maximal, wenn cos(θ)=1, also wenn v genau in Richtung des Gradienten zeigt. Der Gradient zeigt somit exakt in die Richtung des stärksten lokalen Anstiegs der Funktion, und sein Betrag |∇f(x)| gibt die Steilheit dieses Anstiegs an.",
          "Diese Eigenschaft macht den Gradienten zum zentralen Werkzeug numerischer Optimierungsverfahren: Der Gradientenabstieg bewegt sich schrittweise in Richtung −∇f (steilster Abstieg), um ein lokales Minimum einer Funktion zu finden.",
        ],
        terms: [{ term: "Gradientenabstieg", definition: "Optimierungsverfahren, das sich iterativ in Richtung −∇f bewegt, um ein lokales Minimum zu finden." }],
        examples: [
          "Ein Wanderer auf einem Bergrelief, das durch f(x,y) beschrieben wird, findet den steilsten Aufstieg an seiner aktuellen Position, indem er in Richtung ∇f(x,y) geht — dies ist exakt die Richtung, die die Änderungsrate maximiert.",
        ],
      },
    ],
  },
  // ==================== Kapitel 3 ====================
  {
    id: "totale-differenzierbarkeit-tangentialebene",
    number: 3,
    title: "Totale Differenzierbarkeit und die Tangentialebene",
    free: false,
    intro:
      "Partielle Differenzierbarkeit reicht nicht aus, um eine Funktion in jeder Hinsicht 'differenzierbar' zu nennen. Dieses Kapitel führt den stärkeren Begriff der totalen Differenzierbarkeit ein.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Totale Differenzierbarkeit",
        body: [
          "Eine Funktion f heißt total differenzierbar in x₀, wenn sie sich dort durch eine LINEARE Abbildung approximieren lässt: f(x₀+h) = f(x₀) + ∇f(x₀)·h + o(|h|), wobei der Fehlerterm o(|h|) schneller gegen 0 geht als |h| selbst. Diese Bedingung ist stärker als bloße partielle Differenzierbarkeit, da sie eine gute lineare Approximation aus JEDER Richtung gleichzeitig verlangt.",
          "Ein hinreichendes (nicht notwendiges) Kriterium: Sind alle partiellen Ableitungen in einer Umgebung von x₀ stetig, so ist f dort total differenzierbar. Dieses Kriterium ist in der Praxis meist einfacher zu prüfen als die Definition direkt.",
        ],
        terms: [{ term: "Totale Differenzierbarkeit", definition: "Existenz einer linearen Approximation von f, die den Fehler o(|h|) erzeugt — stärker als partielle Differenzierbarkeit." }],
        examples: [
          "Eine Funktion mit stetigen partiellen Ableitungen ∂f/∂x=2x, ∂f/∂y=3y² überall ist nach dem hinreichenden Kriterium automatisch überall total differenzierbar, ohne dass man die Approximationsbedingung explizit nachrechnen muss.",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Die Tangentialebene",
        body: [
          "Ist f: ℝ²→ℝ total differenzierbar in (x₀,y₀), beschreibt z = f(x₀,y₀) + ∂f/∂x(x₀,y₀)·(x−x₀) + ∂f/∂y(x₀,y₀)·(y−y₀) die Tangentialebene an den Graphen von f im Punkt (x₀,y₀,f(x₀,y₀)) — das mehrdimensionale Analogon zur Tangente einer Kurve.",
          "Diese Tangentialebene liefert die beste lineare Näherung von f in der Nähe von (x₀,y₀) und wird praktisch genutzt, um Funktionswerte in der Nähe eines bekannten Punktes ohne exakte Berechnung abzuschätzen.",
        ],
        formulas: ["z = f(x₀,y₀) + fₓ(x₀,y₀)(x−x₀) + f_y(x₀,y₀)(y−y₀)"],
        formulasLatex: ["z = f(x_0,y_0) + f_x(x_0,y_0)(x-x_0) + f_y(x_0,y_0)(y-y_0)"],
        terms: [{ term: "Tangentialebene", definition: "Beste lineare Approximation des Graphen einer total differenzierbaren Funktion in einem Punkt." }],
        examples: [
          "Für f(x,y)=x²+y² im Punkt (1,1) mit f(1,1)=2, fₓ=2, f_y=2 lautet die Tangentialebene z=2+2(x−1)+2(y−1)=2x+2y−2 — eine gute Näherung von f in unmittelbarer Nähe von (1,1).",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Der Mittelwertsatz im ℝⁿ",
        body: [
          "Der Mittelwertsatz aus der eindimensionalen Analysis (f(b)−f(a)=f'(ξ)(b−a) für ein ξ zwischen a und b) überträgt sich auf Funktionen mehrerer Veränderlicher: Ist f: ℝⁿ→ℝ differenzierbar auf einer offenen Menge, die die Verbindungsstrecke zwischen zwei Punkten x und y vollständig enthält, so existiert ein Punkt ξ auf dieser Strecke (ξ = x + t(y−x) für ein t∈(0,1)) mit f(y)−f(x) = ∇f(ξ)·(y−x).",
          "Der Beweis führt den mehrdimensionalen Fall auf den eindimensionalen zurück: Man betrachtet die Hilfsfunktion φ(t) := f(x+t(y−x)) für t∈[0,1] — eine gewöhnliche Funktion einer Variablen —, wendet auf φ den bekannten eindimensionalen Mittelwertsatz an, und übersetzt das Ergebnis mit der Kettenregel zurück, da φ'(t) = ∇f(x+t(y−x))·(y−x) gilt.",
          "Eine wichtige direkte Folgerung: Verschwindet der Gradient einer differenzierbaren Funktion auf einer zusammenhängenden offenen Menge überall, so ist die Funktion dort konstant — denn für je zwei Punkte x,y liefert der Mittelwertsatz f(y)−f(x)=∇f(ξ)·(y−x)=0·(y−x)=0, also f(x)=f(y).",
        ],
        formulas: ["f(y)−f(x) = ∇f(ξ)·(y−x), für ξ = x+t(y−x), t∈(0,1)"],
        formulasLatex: ["f(y)-f(x) = \\nabla f(\\xi)\\cdot(y-x), \\quad \\xi = x+t(y-x),\\ t\\in(0,1)"],
        terms: [{ term: "Mittelwertsatz im ℝⁿ", definition: "f(y)−f(x)=∇f(ξ)·(y−x) für einen Punkt ξ auf der Verbindungsstrecke zwischen x und y; verallgemeinert den eindimensionalen Mittelwertsatz." }],
        examples: [
          "Für f(x,y)=x²+y² und die Punkte x=(0,0), y=(2,2): f(y)−f(x)=8−0=8. Der Mittelwertsatz garantiert ein ξ=t·(2,2)=(2t,2t) auf der Verbindungsstrecke mit ∇f(ξ)·(y−x)=(4t,4t)·(2,2)=16t=8, also t=1/2, ξ=(1,1) — tatsächlich gilt ∇f(1,1)·(2,2)=(2,2)·(2,2)=8 ✓.",
          "Gilt für eine differenzierbare Funktion g auf einer zusammenhängenden offenen Menge ∇g(x,y)=(0,0) für alle (x,y), so bestätigt der Mittelwertsatz, dass g überall denselben Wert annehmen muss: Für je zwei Punkte x,y wäre g(y)−g(x)=∇g(ξ)·(y−x)=0 sonst nicht erklärbar — g muss konstant sein.",
        ],
      },
    ],
  },
  // ==================== Kapitel 4 ====================
  {
    id: "kettenregel-jacobi-matrix",
    number: 4,
    title: "Kettenregel, Jacobi-Matrix und vektorwertige Funktionen",
    free: false,
    intro:
      "Viele Anwendungen erfordern Funktionen, die selbst vektorwertig sind (mehrere Ausgabewerte) oder die miteinander verkettet werden. Dieses Kapitel verallgemeinert Ableitungsregeln entsprechend.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Vektorwertige Funktionen und die Jacobi-Matrix",
        body: [
          "Eine Funktion F: ℝⁿ→ℝᵐ ordnet jedem Punkt einen ganzen Vektor von m Werten zu. Ihre Ableitung fasst man in der Jacobi-Matrix zusammen: eine m×n-Matrix, deren Eintrag in Zeile i, Spalte j die partielle Ableitung ∂Fᵢ/∂xⱼ ist. Für m=1 reduziert sich die Jacobi-Matrix auf den (transponierten) Gradienten.",
          "Die Jacobi-Matrix liefert die lokale lineare Approximation von F: F(x₀+h) ≈ F(x₀) + J_F(x₀)·h, wobei J_F(x₀)·h eine gewöhnliche Matrix-Vektor-Multiplikation ist.",
        ],
        formulas: ["J_F = (∂Fᵢ/∂xⱼ)ᵢⱼ"],
        formulasLatex: ["J_F = \\left(\\dfrac{\\partial F_i}{\\partial x_j}\\right)_{i,j}"],
        terms: [{ term: "Jacobi-Matrix", definition: "Matrix aller partiellen Ableitungen einer vektorwertigen Funktion." }],
        examples: [
          "Für F(x,y)=(x²y, x+y²) beträgt die Jacobi-Matrix J_F = [[2xy, x²],[1, 2y]] — Zeile 1 enthält die partiellen Ableitungen der ersten Komponente, Zeile 2 die der zweiten.",
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Die mehrdimensionale Kettenregel",
        body: [
          "Ist h = g∘f eine Verkettung differenzierbarer Funktionen (f: ℝⁿ→ℝᵐ, g: ℝᵐ→ℝᵏ), so gilt für die Jacobi-Matrix der Verkettung: J_h(x) = J_g(f(x)) · J_f(x) — die Kettenregel wird zur Matrixmultiplikation der einzelnen Jacobi-Matrizen.",
          "Ein wichtiger Spezialfall: Ist z=f(x,y) mit x=x(t), y=y(t) (beide Variablen hängen von einem gemeinsamen Parameter t ab), so gilt dz/dt = ∂f/∂x·dx/dt + ∂f/∂y·dy/dt — die Summenregel entlang aller Pfade, über die t die Funktion f beeinflusst.",
        ],
        formulas: ["dz/dt = ∂f/∂x · dx/dt + ∂f/∂y · dy/dt"],
        formulasLatex: ["\\dfrac{dz}{dt} = \\dfrac{\\partial f}{\\partial x}\\dfrac{dx}{dt} + \\dfrac{\\partial f}{\\partial y}\\dfrac{dy}{dt}"],
        terms: [{ term: "Mehrdimensionale Kettenregel", definition: "J_h(x) = J_g(f(x))·J_f(x) für Verkettungen h=g∘f." }],
        examples: [
          "Für z=x²y mit x(t)=t², y(t)=t+1 gilt dz/dt = 2xy·2t + x²·1 = 2(t²)(t+1)(2t) + (t²)²·1 = 4t³(t+1) + t⁴ — durch Einsetzen der konkreten Pfade x(t),y(t) in die Kettenregelformel.",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Implizite Funktionen",
        body: [
          "Der Satz über implizite Funktionen besagt: Ist F(x,y)=0 mit ∂F/∂y ≠ 0 an einem Punkt (x₀,y₀), so lässt sich y lokal um diesen Punkt als differenzierbare Funktion y=g(x) von x auffassen, auch wenn keine explizite Auflösung nach y möglich ist. Die Ableitung dieser impliziten Funktion lässt sich ohne explizite Auflösung berechnen: dy/dx = −(∂F/∂x)/(∂F/∂y).",
          "Dieser Satz ist praktisch bedeutsam, wenn Gleichungen nicht explizit nach einer Variablen auflösbar sind (z. B. bei impliziten Kurven wie x²+y³−xy=1), man aber dennoch lokale Änderungsraten bestimmen möchte.",
        ],
        formulas: ["dy/dx = −(∂F/∂x) / (∂F/∂y)"],
        formulasLatex: ["\\dfrac{dy}{dx} = -\\dfrac{\\partial F/\\partial x}{\\partial F/\\partial y}"],
        terms: [{ term: "Satz über implizite Funktionen", definition: "Garantiert lokale Auflösbarkeit einer impliziten Gleichung F(x,y)=0 nach y, sofern ∂F/∂y≠0." }],
        examples: [
          "Für die implizite Kurve x²+y²=25 (Kreis) mit F(x,y)=x²+y²−25 gilt dy/dx = −(2x)/(2y) = −x/y — dieselbe Ableitung, die man auch durch explizites Auflösen nach y=±√(25−x²) erhalten würde.",
        ],
      },
    ],
  },
  // ==================== Kapitel 5 ====================
  {
    id: "hoehere-ableitungen-taylor",
    number: 5,
    title: "Höhere Ableitungen, der Satz von Schwarz und Taylorpolynome",
    free: false,
    intro:
      "Um das Krümmungsverhalten mehrdimensionaler Funktionen zu verstehen, braucht es Ableitungen zweiter Ordnung. Dieses Kapitel behandelt deren Struktur und die daraus resultierende quadratische Approximation.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Partielle Ableitungen höherer Ordnung",
        body: [
          "Zweite partielle Ableitungen entstehen durch nochmaliges partielles Ableiten: ∂²f/∂x∂y bedeutet, zuerst nach y, dann nach x abzuleiten (bzw. je nach Konvention andersherum). Da es bei n Variablen mehrere gemischte zweite Ableitungen gibt, stellt sich die Frage, ob die Reihenfolge des Ableitens das Ergebnis beeinflusst.",
          "Der Satz von Schwarz beantwortet dies: Sind die zweiten partiellen Ableitungen einer Funktion in einer Umgebung stetig, so sind gemischte partielle Ableitungen unabhängig von der Reihenfolge: ∂²f/∂x∂y = ∂²f/∂y∂x. Dies vereinfacht Berechnungen erheblich, da man die günstigere Ableitungsreihenfolge wählen kann.",
        ],
        formulas: ["∂²f/∂x∂y = ∂²f/∂y∂x (Satz von Schwarz)"],
        formulasLatex: ["\\dfrac{\\partial^2 f}{\\partial x \\partial y} = \\dfrac{\\partial^2 f}{\\partial y \\partial x}"],
        terms: [{ term: "Satz von Schwarz", definition: "Gemischte partielle Ableitungen stetig differenzierbarer Funktionen sind unabhängig von der Ableitungsreihenfolge." }],
        examples: [
          "Für f(x,y)=x³y² gilt ∂f/∂x=3x²y², dann ∂²f/∂x∂y=6x²y; andersherum ∂f/∂y=2x³y, dann ∂²f/∂y∂x=6x²y — beide gemischten Ableitungen stimmen wie vom Satz von Schwarz vorhergesagt überein.",
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Die Hessematrix",
        body: [
          "Die Hessematrix H_f(x) fasst alle zweiten partiellen Ableitungen zu einer symmetrischen n×n-Matrix zusammen (Symmetrie folgt aus dem Satz von Schwarz bei stetigen zweiten Ableitungen): Hᵢⱼ = ∂²f/∂xᵢ∂xⱼ. Sie ist das mehrdimensionale Analogon zur zweiten Ableitung und beschreibt die lokale Krümmung von f.",
          "Die Hessematrix ist zentral für die Klassifikation kritischer Punkte (Kapitel 6) und für die quadratische Approximation im Taylorpolynom zweiter Ordnung.",
        ],
        formulas: ["Hᵢⱼ = ∂²f/∂xᵢ∂xⱼ"],
        formulasLatex: ["H_{ij} = \\dfrac{\\partial^2 f}{\\partial x_i \\partial x_j}"],
        terms: [{ term: "Hessematrix", definition: "Symmetrische Matrix aller zweiten partiellen Ableitungen einer Funktion." }],
        examples: [
          "Für f(x,y)=x³+y³−3xy beträgt die Hessematrix H_f(x,y) = [[6x, −3],[−3, 6y]] — im Punkt (1,1) also H_f(1,1)=[[6,−3],[−3,6]].",
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Das Taylorpolynom zweiter Ordnung",
        body: [
          "Das Taylorpolynom zweiter Ordnung erweitert die Tangentialebene (lineare Approximation) um einen quadratischen Term: f(x₀+h) ≈ f(x₀) + ∇f(x₀)·h + ½hᵀH_f(x₀)h. Dieser quadratische Term erfasst die Krümmung der Funktion und liefert eine deutlich genauere lokale Näherung als die reine Tangentialebene.",
          "Ist ∇f(x₀)=0 (ein kritischer Punkt), reduziert sich die Approximation auf f(x₀) + ½hᵀH_f(x₀)h — das Vorzeichenverhalten dieses quadratischen Terms (bestimmt durch die Definitheit der Hessematrix) entscheidet über die Art des kritischen Punkts, wie im nächsten Kapitel gezeigt wird.",
        ],
        formulas: ["f(x₀+h) ≈ f(x₀) + ∇f(x₀)·h + ½hᵀH_f(x₀)h"],
        formulasLatex: ["f(x_0+h) \\approx f(x_0) + \\nabla f(x_0)\\cdot h + \\tfrac{1}{2} h^{T} H_f(x_0) h"],
        terms: [{ term: "Taylorpolynom zweiter Ordnung", definition: "Quadratische Näherung einer Funktion, die zusätzlich zum Gradienten die Hessematrix nutzt." }],
        examples: [
          "Für f(x,y)=x²+y² um den Nullpunkt (mit ∇f(0,0)=(0,0), H_f=[[2,0],[0,2]]) lautet das Taylorpolynom zweiter Ordnung exakt f(0,0)+½(2h₁²+2h₂²)=h₁²+h₂² — hier stimmt die quadratische Näherung exakt mit der Funktion überein.",
        ],
      },
    ],
  },
  // ==================== Kapitel 6 ====================
  {
    id: "lokale-extrema-hessematrix",
    number: 6,
    title: "Lokale Extrema, die Hessematrix und Sattelpunkte",
    free: false,
    intro:
      "Eine der wichtigsten Anwendungen der mehrdimensionalen Differentialrechnung ist die Optimierung: das Finden von Maxima und Minima. Dieses Kapitel behandelt die notwendigen und hinreichenden Bedingungen dafür.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Kritische Punkte",
        body: [
          "Ein Punkt x₀ heißt kritisch, wenn ∇f(x₀)=0 gilt — alle partiellen Ableitungen verschwinden gleichzeitig. Dies ist eine notwendige (nicht hinreichende) Bedingung für ein lokales Extremum: Jedes lokale Maximum oder Minimum im Inneren des Definitionsbereichs einer differenzierbaren Funktion muss ein kritischer Punkt sein, aber nicht jeder kritische Punkt ist ein Extremum.",
          "Kritische Punkte, die weder Maximum noch Minimum sind, heißen Sattelpunkte: Die Funktion steigt in manche Richtungen an und fällt in andere Richtungen ab, während der Gradient dennoch verschwindet.",
        ],
        terms: [{ term: "Kritischer Punkt", definition: "Punkt, an dem der Gradient verschwindet (∇f=0); notwendige Bedingung für ein lokales Extremum." }],
        examples: [
          "Für f(x,y)=x²−y² gilt ∇f(0,0)=(0,0) — (0,0) ist ein kritischer Punkt. Da f entlang der x-Achse ansteigt, aber entlang der y-Achse abfällt, handelt es sich um einen Sattelpunkt, nicht um ein Extremum.",
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Definitheit der Hessematrix",
        body: [
          "Um kritische Punkte zu klassifizieren, untersucht man die Definitheit der Hessematrix H_f(x₀): Ist H_f(x₀) positiv definit (alle Eigenwerte positiv), liegt ein lokales Minimum vor; ist sie negativ definit (alle Eigenwerte negativ), liegt ein lokales Maximum vor; besitzt sie sowohl positive als auch negative Eigenwerte (indefinit), liegt ein Sattelpunkt vor.",
          "Für n=2 lässt sich die Definitheit einfach über die Determinante und einen Diagonaleintrag prüfen: ist det(H_f)>0 und Hₓₓ>0, liegt ein Minimum vor; ist det(H_f)>0 und Hₓₓ<0, liegt ein Maximum vor; ist det(H_f)<0, liegt ein Sattelpunkt vor. Bei det(H_f)=0 ist keine Aussage über dieses Kriterium möglich.",
        ],
        table: {
          caption: "Hesse-Kriterium für n=2",
          headers: ["det(H_f)", "Hₓₓ", "Klassifikation"],
          rows: [
            ["> 0", "> 0", "lokales Minimum"],
            ["> 0", "< 0", "lokales Maximum"],
            ["< 0", "beliebig", "Sattelpunkt"],
            ["= 0", "—", "keine Aussage möglich"],
          ],
        },
        formulas: ["det(H_f) > 0, Hₓₓ > 0 ⇒ Minimum"],
        formulasLatex: ["\\det(H_f) > 0,\\; H_{xx} > 0 \\;\\Rightarrow\\; \\text{Minimum}"],
        terms: [{ term: "Definitheit einer Matrix", definition: "Eigenschaft, die über das Vorzeichen aller Eigenwerte bestimmt, ob eine quadratische Form stets positiv, stets negativ oder gemischt ist." }],
        examples: [
          "Für f(x,y)=x²+y² im kritischen Punkt (0,0) gilt H_f=[[2,0],[0,2]], det(H_f)=4>0 und Hₓₓ=2>0 — nach dem Kriterium liegt ein lokales Minimum vor, was mit der offensichtlichen globalen Minimalstelle übereinstimmt.",
        ],
      },
      {
        id: "6-3",
        heading: "6.3 Extrema unter Nebenbedingungen: Lagrange-Multiplikatoren",
        body: [
          "Soll f(x,y) unter einer Nebenbedingung g(x,y)=c maximiert/minimiert werden, hilft die Methode der Lagrange-Multiplikatoren: Man löst das Gleichungssystem ∇f(x,y) = λ·∇g(x,y) zusammen mit g(x,y)=c. Die geometrische Idee: An einem Extremum unter Nebenbedingung müssen die Höhenlinien von f und die Nebenbedingungskurve tangential sein — genau dann sind ihre Gradienten parallel (proportional über λ).",
          "Diese Methode ist in der Wirtschaftswissenschaft besonders wichtig für Optimierungsprobleme unter Budgetrestriktionen (z. B. Nutzenmaximierung unter einer Budgetgeraden, siehe VWL-Module) und verallgemeinert direkt auf mehrere Nebenbedingungen mit mehreren Multiplikatoren.",
        ],
        formulas: ["∇f(x,y) = λ · ∇g(x,y)"],
        formulasLatex: ["\\nabla f(x,y) = \\lambda \\cdot \\nabla g(x,y)"],
        terms: [{ term: "Lagrange-Multiplikator (λ)", definition: "Hilfsvariable zur Lösung von Optimierungsproblemen unter Gleichungsnebenbedingungen." }],
        examples: [
          "Um f(x,y)=xy unter der Nebenbedingung x+y=10 zu maximieren, löst man ∇f=(y,x)=λ(1,1) zusammen mit x+y=10: aus y=λ=x folgt x=y=5, also maximales Produkt xy=25.",
        ],
      },
    ],
  },
  // ==================== Kapitel 7 ====================
  {
    id: "jordan-inhalt-riemann-integral",
    number: 7,
    title: "Jordan-Inhalt und das Riemann-Integral im Rⁿ",
    free: false,
    intro:
      "Nachdem die Differentialrechnung auf mehrere Dimensionen erweitert wurde, widmet sich dieses Kapitel der analogen Erweiterung der Integralrechnung: dem Messen von Volumen und dem Integrieren über mehrdimensionale Bereiche.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Der Jordan-Inhalt",
        body: [
          "Der Jordan-Inhalt verallgemeinert den Flächen-/Volumenbegriff auf beliebige Teilmengen des ℝⁿ. Eine Menge M wird von innen durch Vereinigungen achsenparalleler Quader approximiert (innerer Jordan-Inhalt) und von außen ebenso (äußerer Jordan-Inhalt); stimmen beide Werte überein, heißt M Jordan-messbar mit Jordan-Inhalt gleich diesem gemeinsamen Wert.",
          "Nicht jede Menge ist Jordan-messbar: Mengen mit sehr 'ausgefranstem' Rand (z. B. die rationalen Zahlen im Einheitsintervall) können einen inneren Jordan-Inhalt von 0 und einen äußeren von 1 besitzen und sind somit nicht Jordan-messbar.",
          "Der Jordan-Inhalt hat zwei Eigenschaften, die ihn erst praktisch nutzbar machen: Additivität und Monotonie. Additivität besagt: Sind M₁, M₂ Jordan-messbar und überlappen sie sich höchstens in einer Nullmenge (|M₁∩M₂|=0, z. B. einer gemeinsamen Kante), so ist auch M₁∪M₂ Jordan-messbar mit |M₁∪M₂| = |M₁|+|M₂| — der Inhalt addiert sich, ohne die Überlappung doppelt zu zählen. Monotonie besagt: Ist M₁⊆M₂ und sind beide Jordan-messbar, so gilt |M₁| ≤ |M₂| — eine Teilmenge kann nie einen größeren Inhalt besitzen als die Menge, in der sie enthalten ist.",
        ],
        formulas: [
          "Additivität: M₁,M₂ Jordan-messbar, |M₁∩M₂|=0 ⟹ |M₁∪M₂| = |M₁|+|M₂|",
          "Monotonie: M₁⊆M₂, beide Jordan-messbar ⟹ |M₁| ≤ |M₂|",
        ],
        formulasLatex: [
          "|M_1\\cap M_2|=0 \\implies |M_1\\cup M_2| = |M_1|+|M_2|",
          "M_1\\subseteq M_2 \\implies |M_1| \\le |M_2|",
        ],
        terms: [
          { term: "Jordan-Inhalt", definition: "Verallgemeinerter Flächen-/Volumenbegriff über Approximation durch achsenparallele Quader von innen und außen." },
          { term: "Additivität des Jordan-Inhalts", definition: "Für Jordan-messbare M₁,M₂ mit |M₁∩M₂|=0 gilt |M₁∪M₂|=|M₁|+|M₂|." },
        ],
        examples: [
          "Ein Rechteck [0,2]×[0,3] besitzt eindeutig Jordan-Inhalt 6 (Fläche), da innerer und äußerer Jordan-Inhalt exakt übereinstimmen — anders als bei Mengen mit unregelmäßigem, fraktalähnlichem Rand.",
          "Für M₁=[0,2]×[0,2] und M₂=[2,5]×[0,2] gilt M₁∩M₂={2}×[0,2], eine Strecke mit Jordan-Inhalt 0. Nach der Additivität ist |M₁∪M₂| = |M₁|+|M₂| = 4+6 = 10 — die gemeinsame Kante wird nicht doppelt gezählt.",
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Ober- und Untersummen: das Riemann-Integral im Rⁿ",
        body: [
          "Analog zum eindimensionalen Riemann-Integral zerlegt man einen Quader Q⊆ℝⁿ in Teilquader und bildet Untersummen (Summe aus Infimum von f auf jedem Teilquader mal dessen Volumen) und Obersummen (analog mit Supremum). Eine Funktion heißt Riemann-integrierbar, wenn Ober- und Untersummen bei feiner werdender Zerlegung gegen denselben Wert konvergieren — dieser gemeinsame Grenzwert ist das Integral ∫_Q f dV.",
          "Ein zentrales hinreichendes Kriterium: Jede stetige Funktion auf einem kompakten Jordan-messbaren Bereich ist Riemann-integrierbar. Dies deckt praktisch alle in Anwendungen auftretenden Funktionen ab.",
        ],
        formulas: ["∫_Q f dV = lim (Obersumme) = lim (Untersumme)"],
        formulasLatex: ["\\int_Q f\\,dV = \\lim (\\text{Obersumme}) = \\lim (\\text{Untersumme})"],
        terms: [{ term: "Riemann-integrierbar", definition: "Eigenschaft, dass Ober- und Untersummen bei feiner werdender Zerlegung gegen denselben Grenzwert konvergieren." }],
        examples: [
          "Für f(x,y)=1 auf dem Quader [0,2]×[0,3] stimmen Ober- und Untersumme für jede Zerlegung bereits exakt überein (konstante Funktion), und das Integral entspricht direkt dem Jordan-Inhalt des Quaders: 6.",
        ],
      },
      {
        id: "7-4",
        heading: "7.3 Treppenfunktionen, gleichmäßige Stetigkeit und der Mittelwertsatz der Integralrechnung",
        body: [
          "Eine Treppenfunktion (auf einem Quader Q) ist eine Funktion, die auf endlich vielen achsenparallelen Teilquadern jeweils konstant ist — die einfachste denkbare integrierbare Funktionsklasse, deren Integral einfach die Summe aus (Wert)·(Volumen des Teilquaders) über alle Teilstücke ist. Ober- und Untersummen (7.2) sind nichts anderes als Integrale spezieller Treppenfunktionen, die f von oben bzw. unten approximieren: Die Untersumme ist das Integral der größten Treppenfunktion, die überall ≤f ist, die Obersumme das Integral der kleinsten Treppenfunktion, die überall ≥f ist. Ein wichtiger Spezialfall ist die Indikatorfunktion 1_M(x), die auf einer Menge M den Wert 1 und außerhalb 0 annimmt — ihr Integral über einen umschließenden Quader ist genau der Jordan-Inhalt von M.",
          "Warum ist nach 7.2 jede stetige Funktion auf einem kompakten Jordan-messbaren Bereich integrierbar? Der Schlüssel ist die gleichmäßige Stetigkeit: f heißt gleichmäßig stetig auf D, wenn zu jedem ε>0 ein δ>0 existiert, sodass für ALLE x,y∈D mit ‖x−y‖<δ stets |f(x)−f(y)|<ε gilt — anders als bei gewöhnlicher Stetigkeit darf δ hier nicht vom betrachteten Punkt abhängen, sondern muss gleichzeitig für den gesamten Definitionsbereich funktionieren. Der Satz von Heine garantiert: Jede stetige Funktion auf einer kompakten Menge ist automatisch gleichmäßig stetig. Das ist der entscheidende Baustein für die Integrierbarkeit: Wird die Zerlegung so fein gewählt, dass jeder Teilquader kleiner als das zu ε passende δ ist, unterscheiden sich Supremum und Infimum von f auf jedem Teilquader um höchstens ε — und damit auch Ober- und Untersumme insgesamt nur noch um höchstens ε mal dem Gesamtvolumen.",
          "Der Mittelwertsatz der Integralrechnung überträgt eine vertraute eindimensionale Aussage ins Mehrdimensionale: Ist f stetig auf einem kompakten, zusammenhängenden, Jordan-messbaren Bereich B mit positivem Jordan-Inhalt, so existiert ein Punkt ξ∈B mit ∫_B f dV = f(ξ)·|B| — der Integralwert lässt sich also als 'mittlerer Funktionswert' f(ξ) mal Volumen des Bereichs auffassen. Anschaulich muss es mindestens einen Punkt geben, an dem f exakt den Durchschnittswert über B annimmt.",
        ],
        formulas: [
          "Gleichmäßige Stetigkeit: ∀ε>0 ∃δ>0 ∀x,y∈D: ‖x−y‖<δ ⟹ |f(x)−f(y)|<ε",
          "Mittelwertsatz der Integralrechnung: ∫_B f dV = f(ξ)·|B|, für ein ξ∈B",
        ],
        formulasLatex: [
          "\\forall \\varepsilon>0\\ \\exists \\delta>0\\ \\forall x,y\\in D:\\ \\|x-y\\|<\\delta \\implies |f(x)-f(y)|<\\varepsilon",
          "\\int_B f\\,dV = f(\\xi)\\cdot|B| \\quad \\text{für ein } \\xi\\in B",
        ],
        terms: [
          { term: "Treppenfunktion", definition: "Funktion, die auf endlich vielen achsenparallelen Teilquadern jeweils konstant ist; einfachste integrierbare Funktionsklasse." },
          { term: "Indikatorfunktion 1_M", definition: "Funktion mit Wert 1 auf M und 0 außerhalb; ihr Integral über einen umschließenden Quader entspricht dem Jordan-Inhalt von M." },
          { term: "Gleichmäßige Stetigkeit", definition: "Verschärfung der Stetigkeit: Das δ zu gegebenem ε darf nicht vom betrachteten Punkt abhängen, sondern muss für den gesamten Definitionsbereich gleichzeitig funktionieren." },
          { term: "Satz von Heine", definition: "Jede stetige Funktion auf einer kompakten Menge ist automatisch gleichmäßig stetig." },
          { term: "Mittelwertsatz der Integralrechnung", definition: "Für stetiges f auf kompaktem, zusammenhängendem, Jordan-messbarem B existiert ξ∈B mit ∫_B f dV = f(ξ)·|B|." },
        ],
        examples: [
          "Die Indikatorfunktion 1_M für M=[1,3]×[0,2] hat auf dem umschließenden Quader Q=[0,4]×[0,2] das Integral ∫_Q 1_M dV = 1·|M| + 0·|Q\\M| = 2·2 = 4 — exakt der Jordan-Inhalt von M.",
          "Die Funktion f(x)=1/x ist auf dem offenen Intervall (0,1] stetig, aber NICHT gleichmäßig stetig: Für x nahe 0 ändert sich f beliebig schnell, sodass zu keinem festen δ>0 ein einheitliches ε für alle x funktioniert. Auf dem kompakten Intervall [0,5 ; 1] dagegen ist dieselbe Funktion nach dem Satz von Heine automatisch gleichmäßig stetig — der Unterschied liegt einzig an der fehlenden Kompaktheit von (0,1].",
          "Für f(x,y)=x+y auf dem Rechteck B=[0,2]×[0,2] (|B|=4) ergibt sich ∫_B(x+y) d(x,y) = ∫₀²∫₀²(x+y) dx dy = ∫₀²(2+2y) dy = [2y+y²]₀² = 8. Der Mittelwertsatz garantiert einen Punkt ξ∈B mit f(ξ)=8/4=2 — tatsächlich erfüllt z. B. ξ=(1,1) mit f(1,1)=2 genau diese Bedingung.",
        ],
      },
      {
        id: "7-3",
        heading: "7.4 Der Satz von Fubini",
        body: [
          "Der Satz von Fubini erlaubt es, ein mehrdimensionales Integral als iterierte Folge eindimensionaler Integrale zu berechnen: ∫∫_Q f(x,y) dx dy = ∫(∫f(x,y) dx) dy — man integriert zunächst über eine Variable bei fester anderer, und integriert das Ergebnis anschließend über die verbleibende Variable.",
          "Diese Reduktion auf eindimensionale Integrale ist der praktisch wichtigste Rechenweg für mehrdimensionale Integrale: Ohne Fubini müsste man direkt mit Ober-/Untersummen im Mehrdimensionalen arbeiten, was in der Praxis kaum handhabbar ist.",
        ],
        formulas: ["∫∫_Q f(x,y) dx dy = ∫[∫f(x,y) dx] dy"],
        formulasLatex: ["\\iint_Q f(x,y)\\,dx\\,dy = \\int\\!\\left[\\int f(x,y)\\,dx\\right] dy"],
        terms: [{ term: "Satz von Fubini", definition: "Erlaubt die Berechnung mehrdimensionaler Integrale durch sukzessives Integrieren einzelner Variablen." }],
        examples: [
          "Für f(x,y)=xy auf [0,1]×[0,2] gilt: ∫₀²(∫₀¹xy dx)dy = ∫₀²(y/2)dy = [y²/4]₀² = 1 — die Berechnung erfolgt schrittweise über zwei eindimensionale Integrale.",
        ],
      },
    ],
  },
  // ==================== Kapitel 8 ====================
  {
    id: "normalbereiche-transformationssatz",
    number: 8,
    title: "Normalbereiche, das Prinzip von Cavalieri und der Transformationssatz",
    free: false,
    intro:
      "Nicht jeder Integrationsbereich ist ein einfacher Quader. Dieses abschließende Kapitel behandelt allgemeinere Integrationsbereiche und den Koordinatenwechsel als wichtigstes Rechenwerkzeug für komplexe Bereiche.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Normalbereiche",
        body: [
          "Ein Normalbereich (bezüglich x) ist ein Bereich der Form {(x,y) | a≤x≤b, g(x)≤y≤h(x)} — die obere und untere Grenze der y-Integration hängen dabei von x ab. Solche Bereiche lassen sich mit dem Satz von Fubini integrieren, indem zunächst über y (mit variablen Grenzen g(x) bis h(x)) und anschließend über x (mit festen Grenzen a bis b) integriert wird.",
          "Normalbereiche erlauben es, das Integrieren über nicht-rechteckige Flächen (Dreiecke, Kreissegmente, allgemeine krummlinig berandete Flächen) auf die iterierte Integration nach Fubini zurückzuführen, ohne den Jordan-Inhalt jedes Mal von Grund auf neu bestimmen zu müssen.",
        ],
        terms: [{ term: "Normalbereich", definition: "Integrationsbereich, dessen eine Koordinatengrenze als Funktion der anderen definiert ist." }],
        examples: [
          "Das Dreieck mit Ecken (0,0),(1,0),(0,1) ist ein Normalbereich {(x,y) | 0≤x≤1, 0≤y≤1−x}: Für jedes x läuft y von 0 bis zur Geraden y=1−x, die die Hypotenuse beschreibt.",
        ],
      },
      {
        id: "8-2",
        heading: "8.2 Das Prinzip von Cavalieri",
        body: [
          "Das Prinzip von Cavalieri besagt: Stimmen die Querschnittsflächen zweier dreidimensionaler Körper bei jeder Höhe überein, so stimmen auch ihre Gesamtvolumina überein. Formal lässt sich das Volumen eines Körpers als Integral seiner Querschnittsflächen A(z) über die Höhe z berechnen: V = ∫A(z) dz.",
          "Dieses Prinzip ist praktisch nützlich, wenn ein komplexer Körper durch bekannte, aber unterschiedlich geformte Querschnitte definiert ist — es reduziert ein 3-dimensionales Volumenproblem auf ein eindimensionales Integral über bereits bekannte Querschnittsflächen.",
        ],
        formulas: ["V = ∫ A(z) dz"],
        formulasLatex: ["V = \\int A(z)\\,dz"],
        terms: [{ term: "Prinzip von Cavalieri", definition: "Körper mit übereinstimmenden Querschnittsflächen bei jeder Höhe besitzen dasselbe Volumen." }],
        examples: [
          "Ein Kegel mit Höhe h und Grundflächenradius r besitzt bei Höhe z einen kreisförmigen Querschnitt mit Radius r(1−z/h), also Fläche A(z)=πr²(1−z/h)². Integration über z von 0 bis h liefert das bekannte Kegelvolumen V=⅓πr²h.",
        ],
      },
      {
        id: "8-3",
        heading: "8.3 Der Transformationssatz",
        body: [
          "Der Transformationssatz erlaubt einen Koordinatenwechsel im Integral: Ist Φ: U→V eine bijektive, stetig differenzierbare Koordinatentransformation mit Jacobi-Determinante det(J_Φ), so gilt ∫_V f(y) dy = ∫_U f(Φ(x))·|det(J_Φ(x))| dx. Der Betrag der Jacobi-Determinante korrigiert dabei die durch die Transformation verursachte lokale Volumenverzerrung.",
          "Die häufigste Anwendung sind Polarkoordinaten in ℝ² (x=r·cos(θ), y=r·sin(θ), mit |det(J)|=r), Zylinderkoordinaten in ℝ³ (Polarkoordinaten in der xy-Ebene plus unveränderte z-Achse) und Kugelkoordinaten in ℝ³: Bereiche mit Kreis-, Zylinder- oder Kugelsymmetrie lassen sich dadurch oft erheblich einfacher integrieren als in kartesischen Koordinaten.",
        ],
        table: {
          caption: "Standard-Koordinatentransformationen und ihre Jacobi-Determinante",
          headers: ["Koordinatensystem", "Transformation", "|det(J)|"],
          rows: [
            ["Polarkoordinaten (ℝ²)", "x=r·cos(θ), y=r·sin(θ)", "r"],
            ["Zylinderkoordinaten (ℝ³)", "x=r·cos(θ), y=r·sin(θ), z=z", "r"],
            ["Kugelkoordinaten (ℝ³)", "x=r·sin(φ)·cos(θ), y=r·sin(φ)·sin(θ), z=r·cos(φ)", "r²·sin(φ)"],
          ],
        },
        formulas: [
          "∫_V f(y) dy = ∫_U f(Φ(x)) · |det(J_Φ(x))| dx",
          "Polarkoordinaten: |det(J)| = r",
          "Kugelkoordinaten: |det(J)| = r² · sin(φ)",
        ],
        formulasLatex: [
          "\\int_V f(y)\\,dy = \\int_U f(\\Phi(x))\\,|\\det(J_\\Phi(x))|\\,dx",
          "|\\det(J)| = r \\quad (\\text{Polarkoordinaten})",
          "|\\det(J)| = r^2\\sin(\\varphi) \\quad (\\text{Kugelkoordinaten})",
        ],
        terms: [{ term: "Transformationssatz", definition: "Regel zum Koordinatenwechsel in mehrdimensionalen Integralen unter Verwendung der Jacobi-Determinante." }],
        examples: [
          "Um ∫∫_D e^{−(x²+y²)} dx dy über die Kreisscheibe D={x²+y²≤R²} zu berechnen, wechselt man zu Polarkoordinaten: ∫₀^{2π}∫₀^R e^{−r²}·r dr dθ — ein deutlich einfacheres Integral als in kartesischen Koordinaten.",
          "Um das Volumen der Einheitskugel K={x²+y²+z²≤1} zu berechnen, wechselt man zu Kugelkoordinaten: V=∫₀^{2π}∫₀^{π}∫₀^1 r²·sin(φ) dr dφ dθ = 2π·[−cos(φ)]₀^π·[r³/3]₀^1 = 2π·2·(1/3) = 4π/3 — das bekannte Kugelvolumen.",
        ],
      },
    ],
  },
];
