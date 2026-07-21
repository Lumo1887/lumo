import type { SkriptChapter } from "./types";

// Eigenständiges Lehrwerk zu "Mathematik 2: Semesterklausur" (lineare Algebra:
// komplexe Zahlen, Determinanten, Eigenwerte, Normen/Skalarprodukte,
// Stetigkeit mehrdimensionaler Funktionen), verfasst wie ein unabhängiges
// Lehrbuch zum Modulthema — nicht als Paraphrase einer bestimmten Vorlesung
// oder eines bestimmten Kurses.
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 ====================
  {
    id: "komplexe-zahlen",
    number: 1,
    title: "Komplexe Zahlen",
    free: true,
    intro:
      "Viele Gleichungen — schon x²+1=0 — haben keine Lösung innerhalb der reellen Zahlen. Die komplexen Zahlen erweitern ℝ um eine neue Zahl i mit i²=−1 und schließen damit diese Lücke. Dieses Kapitel legt die Rechenregeln, die geometrische Deutung und die für spätere Kapitel wichtigen Grenzwertbegriffe komplexer Zahlen.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Grundrechenarten, Betrag und die Gaußsche Zahlenebene",
        body: [
          "Eine komplexe Zahl z = x + iy besteht aus einem Realteil Re(z) = x und einem Imaginärteil Im(z) = y, wobei x, y ∈ ℝ und i die imaginäre Einheit mit i² = −1 ist. Addition und Subtraktion erfolgen komponentenweise: (a+ib) ± (c+id) = (a±c) + i(b±d). Bei der Multiplikation wird ausmultipliziert und i² = −1 eingesetzt: (a+ib)(c+id) = (ac−bd) + i(ad+bc).",
          "Die zu z = x+iy konjugiert komplexe Zahl ist z̄ = x−iy (Vorzeichenwechsel nur beim Imaginärteil). Sie ist der Schlüssel zur Division: erweitert man einen Bruch z1/z2 mit z̄2, wird der Nenner reell, denn z2 · z̄2 = x² + y² ist stets eine reelle, nicht-negative Zahl. Der Betrag |z| = √(x²+y²) misst den euklidischen Abstand des Punktes (x,y) vom Ursprung in der Gaußschen Zahlenebene, in der man z als Punkt (Re(z), Im(z)) auffasst. Es gilt stets z · z̄ = |z|².",
          "Rechenregeln, die man im Umgang mit komplexen Zahlen ständig braucht: z̄̄ = z, (z1+z2)‾ = z̄1+z̄2, (z1·z2)‾ = z̄1·z̄2, sowie |z1·z2| = |z1|·|z2|. Außerdem gilt Re(z) = (z+z̄)/2 und Im(z) = (z−z̄)/(2i) — nützlich, wann immer nur der Real- oder Imaginärteil eines Ausdrucks gesucht ist, ohne vorher vollständig auf die Form x+iy zu bringen.",
        ],
        formulas: [
          "z1 · z2 = (ac−bd) + i(ad+bc)  für z1=a+ib, z2=c+id",
          "z1/z2 = (z1·z̄2) / |z2|²",
          "|z| = √(Re(z)² + Im(z)²), z·z̄ = |z|²",
        ],
        formulasLatex: [
          "z_1 \\cdot z_2 = (ac-bd) + i(ad+bc)",
          "\\dfrac{z_1}{z_2} = \\dfrac{z_1 \\cdot \\bar z_2}{|z_2|^2}",
          "|z| = \\sqrt{\\operatorname{Re}(z)^2 + \\operatorname{Im}(z)^2}, \\qquad z\\bar z = |z|^2",
        ],
        terms: [
          { term: "Imaginäre Einheit i", definition: "Zahl mit i² = −1, Grundbaustein der komplexen Zahlen." },
          { term: "Konjugiert komplexe Zahl z̄", definition: "Zu z=x+iy die Zahl z̄=x−iy; nützlich zur Division und zur Extraktion von Re/Im." },
        ],
        examples: [
          "Für z1=3+4i und z2=1−2i gilt z1+z2=4+2i, z1−z2=2+6i und z1·z2=(3·1−4·(−2))+i(3·(−2)+4·1)=11−2i. Für die Division erweitert man mit z̄2=1+2i: z1/z2 = (3+4i)(1+2i)/((1)²+(−2)²) = (3+6i+4i+8i²)/5 = (−5+10i)/5 = −1+2i. Der Betrag von z1 ist |z1|=√(3²+4²)=5.",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Polarform, Eulersche Formel und n-te Wurzeln",
        body: [
          "Jede komplexe Zahl z ≠ 0 lässt sich statt durch (Re(z), Im(z)) auch durch ihren Betrag r = |z| und ihren Winkel φ = arg(z) zur positiven reellen Achse beschreiben: z = r(cos φ + i sin φ). Mit der Eulerschen Formel e^(iφ) = cos φ + i sin φ schreibt man dies kompakt als z = r·e^(iφ) (Polarform bzw. Exponentialform). Die Umrechnung in kartesische Form erfolgt über x = r cos φ, y = r sin φ.",
          "Die Polarform macht Multiplikation und Division besonders einfach: Beträge werden multipliziert/dividiert, Winkel werden addiert/subtrahiert. Daraus folgt auch die Formel von Moivre für Potenzen: zⁿ = rⁿ · e^(inφ). Für die n-ten Wurzeln einer komplexen Zahl w = ρ·e^(iψ) ≠ 0 gibt es genau n verschiedene Lösungen zₖ der Gleichung zⁿ = w, die gleichmäßig auf einem Kreis vom Radius ρ^(1/n) verteilt sind: zₖ = ρ^(1/n) · e^(i(ψ+2πk)/n) für k = 0, 1, ..., n−1.",
        ],
        formulas: [
          "z = r · e^(iφ) = r(cos φ + i sin φ), r=|z|",
          "z1·z2 = r1r2 · e^(i(φ1+φ2)), zⁿ = rⁿ · e^(inφ)",
          "n-te Wurzeln von w=ρe^(iψ): zₖ = ρ^(1/n) · e^(i(ψ+2πk)/n), k=0,...,n−1",
        ],
        formulasLatex: [
          "z = r\\,e^{i\\varphi} = r(\\cos\\varphi + i\\sin\\varphi)",
          "z_1 z_2 = r_1 r_2\\, e^{i(\\varphi_1+\\varphi_2)}, \\qquad z^n = r^n e^{in\\varphi}",
          "z_k = \\rho^{1/n}\\, e^{i(\\psi + 2\\pi k)/n}, \\quad k = 0,\\dots,n-1",
        ],
        terms: [
          { term: "Eulersche Formel", definition: "e^(iφ) = cos φ + i sin φ — verbindet die Exponentialfunktion mit Sinus und Kosinus." },
          { term: "Polarform", definition: "Darstellung z = r·e^(iφ) einer komplexen Zahl über Betrag r und Winkel φ statt über Re(z)/Im(z)." },
        ],
        examples: [
          "Gesucht sind alle dritten Wurzeln von w = 8i. In Polarform ist w = 8·e^(iπ/2) (ρ=8, ψ=π/2). Mit n=3 ergeben sich die drei Lösungen zₖ = 8^(1/3) · e^(i(π/2+2πk)/3) = 2·e^(i(π/2+2πk)/3) für k=0,1,2: z0 = 2·e^(iπ/6) = 2(cos30°+i sin30°) = √3+i, z1 = 2·e^(i5π/6) = −√3+i, z2 = 2·e^(i3π/2) = −2i. Probe: (√3+i)³ = 8i (nachrechenbar durch Ausmultiplizieren).",
        ],
      },
      {
        id: "1-3",
        heading: "1.3 Komplexe Gleichungssysteme",
        body: [
          "Lineare Gleichungssysteme mit komplexen Koeffizienten löst man genau wie reelle LGS — mit dem Gauß-Algorithmus oder der Cramerschen Regel —, nur dass alle Rechnungen (Addition, Multiplikation, Division) jetzt in ℂ statt in ℝ stattfinden. Insbesondere darf man beim Umformen weiterhin Zeilen mit einer (komplexen) Zahl ungleich Null multiplizieren und Vielfache einer Zeile zu einer anderen addieren.",
          "Ein häufiger Aufgabentyp verlangt, eine Gleichung mit z UND z̄ (z. B. z² − 2z̄ = c) nach z = x+iy aufzulösen: Man setzt z = x+iy ein, trennt die Gleichung nach Real- und Imaginärteil (die je einzeln null bzw. gleich sein müssen) und erhält so ein reelles Gleichungssystem in x und y.",
        ],
        formulas: ["Gauß-Algorithmus/Cramersche Regel wie im Reellen, alle Operationen in ℂ"],
        formulasLatex: ["\\text{Gauß-Algorithmus/Cramersche Regel wie im Reellen, alle Operationen in } \\mathbb{C}"],
        examples: [
          "Gesucht ist die Lösung (x,y) ∈ ℂ² des Systems (1+i)x + 2y = 4+4i und 3x + (1−i)y = 8. Aus der ersten Gleichung folgt y = (4+4i−(1+i)x)/2. Einsetzen in die zweite Gleichung und Auflösen liefert x=2 und damit y=(4+4i−(1+i)·2)/2=(4+4i−2−2i)/2=(2+2i)/2=1+i. Probe: (1+i)·2+2·(1+i)=2+2i+2+2i=4+4i ✓, und 3·2+(1−i)(1+i)=6+(1−i²)=6+2=8 ✓.",
        ],
      },
      {
        id: "1-4",
        heading: "1.4 Folgen und Reihen komplexer Zahlen",
        body: [
          "Eine Folge komplexer Zahlen (zₙ) konvergiert gegen einen Grenzwert z ∈ ℂ, wenn |zₙ − z| → 0 für n → ∞ gilt — Konvergenz in ℂ ist also nichts anderes als Konvergenz des reellen Abstands |zₙ−z| gegen 0. Äquivalent dazu konvergiert (zₙ) genau dann gegen z = a+ib, wenn sowohl Re(zₙ) → a als auch Im(zₙ) → b gilt: Man darf Real- und Imaginärteil getrennt betrachten.",
          "Eine komplexe Potenzreihe Σ aₙ(z−z0)ⁿ konvergiert absolut für alle z mit |z−z0| < R und divergiert für |z−z0| > R, wobei R ∈ [0,∞] der Konvergenzradius ist. Für Reihen der Form Σ cⁿzⁿ mit konstantem c ∈ ℂ (geometrische Reihe in cz) liefert bereits die geometrische Reihe den Konvergenzradius R = 1/|c|, da absolute Konvergenz genau |cz| < 1 verlangt.",
        ],
        formulas: [
          "zₙ → z ⟺ |zₙ−z| → 0 ⟺ Re(zₙ)→Re(z) und Im(zₙ)→Im(z)",
          "Für Σ cⁿzⁿ (c∈ℂ konstant): Konvergenzradius R = 1/|c|",
        ],
        formulasLatex: [
          "z_n \\to z \\iff |z_n - z| \\to 0 \\iff \\operatorname{Re}(z_n)\\to\\operatorname{Re}(z) \\ \\text{und} \\ \\operatorname{Im}(z_n)\\to\\operatorname{Im}(z)",
          "\\text{Für } \\sum c^n z^n \\ (c \\in \\mathbb{C} \\text{ konstant}): \\quad R = \\dfrac{1}{|c|}",
        ],
        terms: [
          { term: "Konvergenzradius", definition: "Radius R, innerhalb dessen eine Potenzreihe absolut konvergiert und außerhalb dessen sie divergiert." },
        ],
        examples: [
          "Die Folge zₙ = (2n+i)/(n−i) konvergiert gegen 2, denn Re(zₙ) und Im(zₙ) lassen sich durch Erweitern mit dem konjugierten Nenner bestimmen, und für n→∞ dominieren die Terme mit n: zₙ → 2n/n = 2. — Die Potenzreihe Σ (3+4i)ⁿzⁿ hat wegen |3+4i|=5 den Konvergenzradius R = 1/5: Für |z|<1/5 konvergiert sie absolut, für |z|>1/5 divergiert sie.",
        ],
      },
    ],
  },
  // ==================== Kapitel 2 ====================
  {
    id: "folgen-haeufungspunkte-rn",
    number: 2,
    title: "Folgen und Häufungspunkte im Rⁿ",
    free: false,
    intro:
      "Bevor wir Stetigkeit mehrdimensionaler Funktionen untersuchen können, brauchen wir einen Konvergenzbegriff für Folgen von Vektoren. Erfreulicherweise überträgt sich vieles aus der eindimensionalen Analysis fast unverändert — mit einem entscheidenden Kniff: Konvergenz im ℝⁿ lässt sich komponentenweise prüfen.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Konvergenz von Folgen im Rⁿ",
        body: [
          "Eine Folge (⃗xₖ) von Vektoren im ℝⁿ konvergiert gegen ⃗x ∈ ℝⁿ, wenn ‖⃗xₖ − ⃗x‖ → 0 für k → ∞ gilt, wobei ‖·‖ eine beliebige Norm auf ℝⁿ ist (welche Norm man wählt, ist wegen der Äquivalenz aller Normen auf ℝⁿ — siehe Kapitel 7 — für die Frage der Konvergenz egal). Äquivalent: (⃗xₖ) konvergiert gegen ⃗x = (x1,...,xn) genau dann, wenn jede einzelne Komponentenfolge konvergiert, also (xₖ)ᵢ → xᵢ für jedes i = 1,...,n.",
          "Diese Äquivalenz ist der praktische Kern des Kapitels: Um die Konvergenz einer Vektorfolge zu untersuchen, zerlegt man sie in ihre n reellen Komponentenfolgen und wendet auf jede davon die aus der eindimensionalen Analysis bekannten Grenzwertsätze an.",
        ],
        formulas: ["⃗xₖ → ⃗x ⟺ ‖⃗xₖ−⃗x‖ → 0 ⟺ (xₖ)ᵢ → xᵢ für alle i=1,...,n"],
        formulasLatex: ["\\vec x_k \\to \\vec x \\iff \\|\\vec x_k - \\vec x\\| \\to 0 \\iff (x_k)_i \\to x_i \\ \\text{für alle } i=1,\\dots,n"],
        terms: [{ term: "Komponentenweise Konvergenz", definition: "Eine Vektorfolge konvergiert genau dann, wenn jede ihrer reellen Komponentenfolgen konvergiert." }],
        examples: [
          "Für ⃗xₖ = (1/k, (k+1)/k) gilt komponentenweise 1/k → 0 und (k+1)/k = 1+1/k → 1. Also konvergiert (⃗xₖ) gegen (0,1).",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Häufungspunkte und Teilfolgen",
        body: [
          "Ein Punkt ⃗a ∈ ℝⁿ heißt Häufungspunkt einer Folge (⃗xₖ), wenn es eine Teilfolge (⃗x_{kⱼ}) gibt, die gegen ⃗a konvergiert. Eine konvergente Folge hat genau einen Häufungspunkt (ihren Grenzwert); eine divergente Folge kann mehrere — auch unendlich viele — Häufungspunkte besitzen.",
          "Ein nützliches Kriterium für Produktfolgen (⃗xₖ) = ((aₖ, bₖ)): Ist (a,b) ein Häufungspunkt von ((aₖ,bₖ)), so ist a automatisch ein Häufungspunkt von (aₖ) und b ein Häufungspunkt von (bₖ) — die Umkehrung gilt jedoch NICHT: a kann Häufungspunkt von (aₖ) und b Häufungspunkt von (bₖ) sein, ohne dass (a,b) Häufungspunkt der gemeinsamen Folge (aₖ,bₖ) ist (es müssen dieselben Indizes gleichzeitig konvergieren, nicht nur getrennt betrachtet je eine Teilfolge existieren).",
        ],
        formulas: ["⃗a Häufungspunkt von (⃗xₖ) ⟺ ∃ Teilfolge (⃗x_kⱼ) mit ⃗x_kⱼ → ⃗a"],
        formulasLatex: ["\\vec a \\ \\text{Häufungspunkt von } (\\vec x_k) \\iff \\exists \\text{ Teilfolge } (\\vec x_{k_j}) \\ \\text{mit} \\ \\vec x_{k_j}\\to\\vec a"],
        terms: [{ term: "Häufungspunkt", definition: "Grenzwert einer konvergenten Teilfolge; eine Folge kann mehrere Häufungspunkte besitzen." }],
        examples: [
          "Die Folge ⃗cₖ = ((−1)ᵏ, k/(k+1)) hat die Häufungspunkte (1,1) und (−1,1): Für gerade k konvergiert die Teilfolge gegen (1,1) (da (−1)ᵏ=1 und k/(k+1)→1), für ungerade k gegen (−1,1). Ein Gegenbeispiel zur 'Umkehrung' aus dem obigen Absatz: aₖ = 1 für gerade k, 0 für ungerade k, und bₖ = 1 für ungerade k, 0 für gerade k. Beide Folgen (aₖ) und (bₖ) haben die Häufungspunkte 0 und 1, aber (1,1) ist KEIN Häufungspunkt von (aₖ,bₖ), da niemals beide Komponenten gleichzeitig nahe bei 1 liegen.",
        ],
      },
    ],
  },
  // ==================== Kapitel 3 ====================
  {
    id: "determinanten",
    number: 3,
    title: "Determinanten",
    free: false,
    intro:
      "Die Determinante ordnet jeder quadratischen Matrix eine einzige Zahl zu, die u. a. verrät, ob die Matrix invertierbar ist, wie sich Volumina unter der zugehörigen linearen Abbildung verändern, und die zur Berechnung von Eigenwerten unverzichtbar ist (Kapitel 5). Dieses Kapitel führt sowohl die axiomatische Charakterisierung als auch die praktische Berechnung ein.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Die Determinante als multilineare alternierende Abbildung",
        body: [
          "Abstrakt betrachtet ist eine Determinantenform eine Abbildung D: ℝⁿ×...×ℝⁿ (n Faktoren) → ℝ, die in jedem der n Vektor-Argumente linear ist (Multilinearität) und die bei Vertauschung zweier Argumente ihr Vorzeichen wechselt (Alternierende Eigenschaft). Aus diesen beiden Eigenschaften folgen bereits alle vertrauten Rechenregeln: Sind zwei der Argumente linear abhängig (z. B. weil ein Argument ein Vielfaches eines anderen ist oder eine Linearkombination der übrigen), ist D = 0. Addiert man ein Vielfaches eines Arguments zu einem anderen, ändert sich D nicht.",
          "Zwei Determinantenformen D1, D2 auf ℝⁿ unterscheiden sich stets nur um einen konstanten Faktor λ ∈ ℝ: D1(⃗c1,...,⃗cₙ) = λ · D2(⃗c1,...,⃗cₙ) für alle Vektoren. Die (normierte) Determinante det ist diejenige Determinantenform, für die det(⃗e1,...,⃗eₙ) = 1 gilt (Einheitsvektoren liefern 1); jede andere Determinantenform ist ein festes Vielfaches von det.",
        ],
        formulas: [
          "D(⃗x, ⃗y, ⃗x+λ⃗y) = 0 (lineare Abhängigkeit)",
          "D(...,⃗a,...,⃗b,...) = −D(...,⃗b,...,⃗a,...) (Vorzeichenwechsel bei Vertauschung)",
          "D(⃗c1,...,⃗cₙ) = λ · det(⃗c1,...,⃗cₙ) für ein festes λ ∈ ℝ",
        ],
        formulasLatex: [
          "D(\\vec x, \\vec y, \\vec x + \\lambda \\vec y) = 0",
          "D(\\dots,\\vec a,\\dots,\\vec b,\\dots) = -D(\\dots,\\vec b,\\dots,\\vec a,\\dots)",
          "D(\\vec c_1,\\dots,\\vec c_n) = \\lambda \\cdot \\det(\\vec c_1,\\dots,\\vec c_n)",
        ],
        terms: [
          { term: "Determinantenform", definition: "Multilineare, alternierende Abbildung D: (ℝⁿ)ⁿ → ℝ; bis auf einen konstanten Faktor eindeutig." },
          { term: "Multilinearität", definition: "Linearität der Determinante in jedem der n Vektor-Argumente einzeln." },
        ],
        examples: [
          "Sei f: ℝ²→ℝ² linear mit f(⃗a1)=⃗b1, f(⃗a2)=⃗b2, und D eine Determinantenform mit D(⃗a1,⃗a2)=5. Gilt ⃗b1=3⃗a1+2⃗a2 und ⃗b2=⃗a1−⃗a2, so folgt mit Multilinearität und der alternierenden Eigenschaft D(⃗b1,⃗b2)=D(3⃗a1+2⃗a2,⃗a1−⃗a2)=3D(⃗a1,⃗a1)−3D(⃗a1,⃗a2)+2D(⃗a2,⃗a1)−2D(⃗a2,⃗a2)=0−3·5+2·(−5)−0=−25. Da det(f) definiert ist durch D(f(⃗a1),f(⃗a2))=det(f)·D(⃗a1,⃗a2), ergibt sich det(f)=−25/5=−5.",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Berechnung: Laplace-Entwicklung und Permutationen",
        body: [
          "In der Praxis berechnet man Determinanten meist über die Laplace-Entwicklung (Entwicklungssatz): Man entwickelt nach einer Zeile oder Spalte, wobei jeder Eintrag mit seinem Vorzeichen-behafteten Minor (Determinante der um diese Zeile/Spalte reduzierten Matrix) multipliziert wird. Die Entwicklung nach einer Zeile/Spalte mit vielen Nullen spart am meisten Rechenaufwand.",
          "Alternativ lässt sich die Determinante über eine Summe von n! Termen definieren, die über alle Permutationen π der Zahlen 1,...,n läuft, jeweils gewichtet mit dem Signum sgn(π) der Permutation (+1 für eine gerade, −1 für eine ungerade Anzahl von Vertauschungen/Fehlständen). Für Dreiecksmatrizen (obere oder untere) ist die Determinante besonders einfach: Sie ist gerade das Produkt der Diagonaleinträge, da alle anderen Permutationen einen Nullfaktor enthalten.",
        ],
        formulas: [
          "Laplace-Entwicklung nach Zeile i: det(A) = Σⱼ (−1)^(i+j) · aᵢⱼ · Mᵢⱼ",
          "det(A) = Σ_π sgn(π) · a1,π(1) · a2,π(2) · ... · aₙ,π(n)",
          "Dreiecksmatrix: det(A) = a11 · a22 · ... · aₙₙ",
        ],
        formulasLatex: [
          "\\det(A) = \\sum_j (-1)^{i+j} a_{ij} M_{ij}",
          "\\det(A) = \\sum_{\\pi} \\operatorname{sgn}(\\pi)\\, a_{1,\\pi(1)} a_{2,\\pi(2)} \\cdots a_{n,\\pi(n)}",
          "\\det(A) = a_{11}\\cdot a_{22} \\cdots a_{nn} \\quad (\\text{Dreiecksmatrix})",
        ],
        terms: [
          { term: "Minor Mᵢⱼ", definition: "Determinante der Matrix, die durch Streichen der i-ten Zeile und j-ten Spalte entsteht." },
          { term: "Signum sgn(π)", definition: "Vorzeichen einer Permutation: +1 bei gerader, −1 bei ungerader Anzahl von Fehlständen (Inversionen)." },
        ],
        examples: [
          "Für A = [[2,1,3],[0,4,1],[5,2,0]] entwickeln wir nach der ersten Spalte (ein Eintrag ist bereits 0): det(A) = 2·det([[4,1],[2,0]]) − 0·(...) + 5·det([[1,3],[4,1]]) = 2·(0−2) + 5·(1−12) = −4 − 55 = −59. — Für die Permutation π mit π(1,2,3,4)=(3,1,4,2) zählt man die Fehlstände (Paare i<j mit π(i)>π(j)): (1,2), (1,4), (3,4) — drei Stück, also sgn(π) = (−1)³ = −1.",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Rechenregeln für Determinanten",
        body: [
          "Für quadratische Matrizen A, B derselben Größe n×n und einen Skalar c gelten folgende Rechenregeln, die sich direkt aus der Multilinearität ergeben: det(AB) = det(A)·det(B) (Multiplikationssatz), det(cA) = cⁿ·det(A) (jede der n Zeilen wird mit c skaliert), und für invertierbares A gilt det(A⁻¹) = 1/det(A). Eine Matrix ist genau dann invertierbar (regulär), wenn det(A) ≠ 0 gilt; ist det(A) = 0, heißt A singulär.",
          "Elementare Zeilenoperationen wirken auf die Determinante wie folgt: Addition eines Vielfachen einer Zeile zu einer anderen ändert die Determinante nicht; Multiplikation einer Zeile mit c ≠ 0 multipliziert die Determinante mit c; Vertauschen zweier Zeilen multipliziert die Determinante mit −1. Diese Regeln erlauben es, eine Determinante durch Umformen auf Dreiecksform zu berechnen, ohne die komplette Laplace-Entwicklung durchzuführen. Auch für Blockdreiecks- bzw. Blockdiagonalmatrizen [[A,0],[0,B]] mit quadratischen Blöcken A, B gilt die praktische Regel det = det(A)·det(B).",
        ],
        formulas: [
          "det(AB) = det(A)·det(B)",
          "det(cA) = cⁿ · det(A), det(A⁻¹) = 1/det(A)",
          "det([[A,0],[0,B]]) = det(A) · det(B) (Blockdiagonalmatrix)",
        ],
        formulasLatex: [
          "\\det(AB) = \\det(A)\\cdot\\det(B)",
          "\\det(cA) = c^n \\det(A), \\qquad \\det(A^{-1}) = \\dfrac{1}{\\det(A)}",
          "\\det\\!\\begin{pmatrix}A & 0\\\\ 0 & B\\end{pmatrix} = \\det(A)\\cdot\\det(B)",
        ],
        table: {
          caption: "Effekt elementarer Zeilenoperationen auf die Determinante",
          headers: ["Operation", "Effekt auf det(A)"],
          rows: [
            ["Vielfaches einer Zeile zu anderer addieren", "keine Änderung"],
            ["Zeile mit c ≠ 0 multiplizieren", "Determinante wird mit c multipliziert"],
            ["Zwei Zeilen vertauschen", "Determinante wird mit −1 multipliziert"],
          ],
        },
        examples: [
          "Für A=[[2,1,3],[0,4,1],[5,2,0]] mit det(A)=−59 (aus 3.2) gilt det(2A)=2³·(−59)=−472, det(A⁻¹)=−1/59, und für B:=[[2,1,0,0],[3,4,0,0],[0,0,5,2],[0,0,1,3]] (Blockdiagonalmatrix mit den 2×2-Blöcken [[2,1],[3,4]] und [[5,2],[1,3]]) gilt det(B) = det([[2,1],[3,4]])·det([[5,2],[1,3]]) = (8−3)·(15−2) = 5·13 = 65.",
        ],
      },
    ],
  },
  // ==================== Kapitel 4 ====================
  {
    id: "basisdarstellung-basiswechsel",
    number: 4,
    title: "Basisdarstellung und Basiswechsel",
    free: false,
    intro:
      "Ein und dieselbe lineare Abbildung sieht als Matrix ganz unterschiedlich aus, je nachdem, welche Basis man im Definitions- und im Bildraum wählt. Dieses Kapitel klärt, wie man zwischen verschiedenen Basisdarstellungen wechselt und wie Kern, Bild und Rang einer linearen Abbildung zusammenhängen.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Basisdarstellung linearer Abbildungen",
        body: [
          "Ist f: V → W linear und sind A = {⃗a1,...,⃗aₙ} eine Basis von V sowie B = {⃗b1,...,⃗bₘ} eine Basis von W, so ist die Darstellungsmatrix M_{B,A}(f) diejenige Matrix, deren j-te Spalte die Koordinaten von f(⃗aⱼ) bezüglich der Basis B enthält. Um f(⃗x) für einen beliebigen Vektor ⃗x zu berechnen, stellt man zunächst ⃗x als Linearkombination der Basis A dar (⃗x = Σ λⱼ⃗aⱼ), wendet dann M_{B,A}(f) auf den Koordinatenvektor (λ1,...,λₙ) an und deutet das Ergebnis als Koordinaten bezüglich B.",
          "Besonders wichtig: Sind A und B die Standardbasen von ℝⁿ bzw. ℝᵐ, stimmt die Darstellungsmatrix mit der 'gewöhnlichen' Matrix von f überein, deren Spalten die Bilder f(⃗e1),...,f(⃗eₙ) der Standard-Einheitsvektoren sind.",
        ],
        formulas: ["j-te Spalte von M_{B,A}(f) = Koordinaten von f(⃗aⱼ) bzgl. Basis B"],
        formulasLatex: ["j\\text{-te Spalte von } M_{B,A}(f) = \\text{Koordinaten von } f(\\vec a_j) \\text{ bzgl. Basis } B"],
        terms: [{ term: "Darstellungsmatrix", definition: "Matrix einer linearen Abbildung bezüglich fest gewählter Basen im Definitions- und im Bildraum." }],
        examples: [
          "Sei f: ℝ² → ℝ² linear mit f(⃗e1)=(1,0) und f(⃗e1)−f((0,0))... betrachten wir stattdessen direkt: Bezüglich der Standardbasis gelte f(⃗e1) = (1,2) und f(⃗e2) = (0,-1). Die Darstellungsmatrix bezüglich der Standardbasis ist dann A = [[1,0],[2,−1]] (Spalten = Bilder der Einheitsvektoren). Für ⃗x=(3,1) berechnet man f(⃗x) = A·⃗x = (1·3+0·1, 2·3+(−1)·1) = (3,5).",
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Basiswechsel und Transformationsmatrizen",
        body: [
          "Sind B = {⃗e1,...,⃗eₙ} die Standardbasis und B̃ = {⃗v1,...,⃗vₙ} eine weitere Basis von ℝⁿ, so bildet die Matrix V, deren Spalten gerade die Vektoren ⃗v1,...,⃗vₙ sind, die Koordinaten bezüglich B̃ auf die Standardkoordinaten ab: ⃗x = V · (Koordinaten von ⃗x bzgl. B̃). Um umgekehrt zu den Koordinaten bezüglich B̃ zu gelangen, invertiert man: (Koordinaten bzgl. B̃) = V⁻¹ · ⃗x. Die Transformationsmatrix des Basiswechsels von B nach B̃ ist also gerade V⁻¹.",
          "Dieses Prinzip verallgemeinert sich auf den Wechsel zwischen zwei beliebigen (nicht notwendig Standard-)Basen: Man drückt zunächst beide Basen durch die Standardbasis aus und verkettet die entsprechenden Umrechnungsmatrizen.",
        ],
        formulas: ["⃗x = V · (Koordinaten bzgl. B̃), (Koordinaten bzgl. B̃) = V⁻¹ · ⃗x"],
        formulasLatex: ["\\vec x = V \\cdot (\\text{Koordinaten bzgl. } \\tilde B), \\qquad (\\text{Koordinaten bzgl. } \\tilde B) = V^{-1}\\vec x"],
        terms: [{ term: "Transformationsmatrix", definition: "Matrix, die Koordinaten bezüglich einer Basis in Koordinaten bezüglich einer anderen Basis umrechnet." }],
        examples: [
          "Für die Basis B̃ = {⃗v1,⃗v2} mit ⃗v1=(1,1) und ⃗v2=(1,−1) des ℝ² ist V = [[1,1],[1,−1]] und V⁻¹ = [[0.5,0.5],[0.5,−0.5]]. Die Koordinaten von ⃗x=(3,1) bezüglich B̃ sind damit V⁻¹·⃗x = (0.5·3+0.5·1, 0.5·3−0.5·1) = (2,1) — tatsächlich gilt 2·⃗v1+1·⃗v2 = (2,2)+(1,−1) = (3,1) ✓.",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Kern, Bild und die Dimensionsformel",
        body: [
          "Für eine lineare Abbildung f: V → W ist der Kern Kern(f) = {⃗x ∈ V : f(⃗x) = ⃗0} ein Untervektorraum von V, und das Bild Bild(f) = {f(⃗x) : ⃗x ∈ V} ist ein Untervektorraum von W. Der Rang Rang(f) := dim(Bild(f)) misst, wie viele Dimensionen des Bildraums tatsächlich 'getroffen' werden.",
          "Die Dimensionsformel (Rangsatz) verknüpft beide Größen: dim(V) = Rang(f) + dim(Kern(f)). Ist f durch eine Matrix A bezüglich fester Basen dargestellt, berechnet man Kern(f) als Kern(A) (Lösungsmenge des homogenen LGS A·⃗x=⃗0) und Rang(f) als Rang(A) (Anzahl linear unabhängiger Zeilen/Spalten von A).",
        ],
        formulas: ["dim(V) = Rang(f) + dim(Kern(f))"],
        formulasLatex: ["\\dim(V) = \\operatorname{Rang}(f) + \\dim(\\operatorname{Kern}(f))"],
        terms: [
          { term: "Kern(f)", definition: "Menge aller Vektoren, die von f auf den Nullvektor abgebildet werden; Untervektorraum von V." },
          { term: "Rangsatz (Dimensionsformel)", definition: "dim(V) = Rang(f) + dim(Kern(f)) — Rang und Kerndimension summieren sich stets zur Dimension des Definitionsraums." },
        ],
        examples: [
          "Für f: ℝ³→ℝ² mit Darstellungsmatrix A=[[1,1,0],[0,1,1]] (bzgl. Standardbasen) löst man A⃗x=⃗0: x+y=0 und y+z=0, also y=−x und z=−y=x. Damit ist Kern(f) = span{(1,−1,1)}, also dim(Kern(f))=1. Da die beiden Zeilen von A linear unabhängig sind, ist Rang(f)=Rang(A)=2 — und tatsächlich gilt 3=dim(ℝ³)=Rang(f)+dim(Kern(f))=2+1 ✓. Wegen Rang(f)=2=dim(ℝ²) ist f zudem surjektiv, also Bild(f)=ℝ².",
        ],
      },
    ],
  },
  // ==================== Kapitel 5 ====================
  {
    id: "eigenwerte-eigenraeume",
    number: 5,
    title: "Eigenwerte und Eigenräume",
    free: false,
    intro:
      "Eigenwerte und Eigenvektoren beantworten die Frage, in welchen Richtungen eine lineare Abbildung besonders einfach wirkt — nämlich nur durch Streckung. Dieses Kapitel zeigt, wie man sie berechnet und wann eine Matrix vollständig 'entkoppelt', also diagonalisiert werden kann.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Charakteristisches Polynom und Eigenwerte",
        body: [
          "Ein Skalar λ (reell oder komplex) heißt Eigenwert der quadratischen Matrix A, wenn ein Vektor ⃗v ≠ ⃗0 existiert mit A⃗v = λ⃗v; ⃗v heißt dann Eigenvektor zum Eigenwert λ. Diese Bedingung ist äquivalent zu (A − λE)⃗v = ⃗0 mit ⃗v ≠ ⃗0, was wiederum genau dann eine nichttriviale Lösung besitzt, wenn det(A − λE) = 0 gilt. Das charakteristische Polynom PA(λ) := det(A − λE) ist ein Polynom vom Grad n (bei einer n×n-Matrix); seine Nullstellen sind genau die Eigenwerte von A.",
          "Auch bei einer reellen Matrix können komplexe Eigenwerte auftreten — dann treten sie stets in konjugiert komplexen Paaren auf, da das charakteristische Polynom reelle Koeffizienten hat. Für Dreiecks- und Blockdreiecksmatrizen lassen sich die Eigenwerte oft direkt ablesen bzw. aus den Eigenwerten der Blöcke zusammensetzen, da das charakteristische Polynom in ein Produkt der charakteristischen Polynome der Blöcke zerfällt.",
        ],
        formulas: [
          "A⃗v = λ⃗v, ⃗v≠⃗0 ⟺ det(A−λE) = 0",
          "PA(λ) = det(A − λE)  (charakteristisches Polynom)",
        ],
        formulasLatex: [
          "A\\vec v = \\lambda \\vec v,\\ \\vec v \\neq \\vec 0 \\iff \\det(A-\\lambda E) = 0",
          "P_A(\\lambda) = \\det(A - \\lambda E)",
        ],
        terms: [
          { term: "Eigenwert / Eigenvektor", definition: "λ mit A⃗v=λ⃗v für ein ⃗v≠⃗0; ⃗v heißt zugehöriger Eigenvektor." },
          { term: "Charakteristisches Polynom", definition: "PA(λ) = det(A−λE); seine Nullstellen sind genau die Eigenwerte von A." },
        ],
        examples: [
          "Für A = [[4,-2],[1,1]] ist PA(λ) = det([[4−λ,−2],[1,1−λ]]) = (4−λ)(1−λ)+2 = λ²−5λ+6 = (λ−3)(λ−2). Die Eigenwerte sind also λ1=3 und λ2=2. Für λ1=3: (A−3E)=[[1,−2],[1,−2]], Kern davon ist span{(2,1)} — ein Eigenvektor zu λ1=3 ist also (2,1). Für λ2=2: (A−2E)=[[2,−2],[1,−1]], Kern ist span{(1,1)}.",
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Eigenräume und Vielfachheiten",
        body: [
          "Der Eigenraum Eig(A;λ) := Kern(A−λE) = {⃗v : A⃗v=λ⃗v} zu einem Eigenwert λ ist ein Untervektorraum (der Nullvektor löst die Gleichung trivial, und Summen sowie Vielfache von Eigenvektoren zum selben λ sind wieder Eigenvektoren zu λ oder der Nullvektor). Die algebraische Vielfachheit von λ ist die Vielfachheit von λ als Nullstelle des charakteristischen Polynoms; die geometrische Vielfachheit ist dim(Eig(A;λ)).",
          "Es gilt stets 1 ≤ geometrische Vielfachheit ≤ algebraische Vielfachheit. Stimmen für einen Eigenwert beide Vielfachheiten NICHT überein, spricht man von einer defekten Matrix bezüglich dieses Eigenwerts — ein Symptom dafür, dass die Matrix nicht diagonalisierbar ist (siehe 5.3).",
        ],
        formulas: ["1 ≤ geometrische Vielfachheit(λ) ≤ algebraische Vielfachheit(λ)"],
        formulasLatex: ["1 \\le \\text{geom. Vielfachheit}(\\lambda) \\le \\text{alg. Vielfachheit}(\\lambda)"],
        table: {
          caption: "Algebraische vs. geometrische Vielfachheit im Überblick",
          headers: ["Begriff", "Definition", "Bereich"],
          rows: [
            ["Algebraische Vielfachheit", "Vielfachheit von λ als Nullstelle von PA(λ)", "≥ 1, ganzzahlig"],
            ["Geometrische Vielfachheit", "dim(Eig(A;λ)) = dim(Kern(A−λE))", "1 ≤ · ≤ algebraische Vielfachheit"],
          ],
        },
        terms: [
          { term: "Eigenraum Eig(A;λ)", definition: "Kern(A−λE); Untervektorraum aller Eigenvektoren zu λ (plus Nullvektor)." },
          { term: "Defekte Matrix", definition: "Matrix, bei der für mindestens einen Eigenwert geometrische < algebraische Vielfachheit gilt." },
        ],
        examples: [
          "Für A = [[2,1],[0,2]] ist PA(λ) = (2−λ)², also hat λ=2 die algebraische Vielfachheit 2. Der Eigenraum ist Kern(A−2E) = Kern([[0,1],[0,0]]) = span{(1,0)}, also geometrische Vielfachheit 1 < 2 — A ist bezüglich λ=2 defekt und damit nicht diagonalisierbar.",
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Diagonalisierbarkeit",
        body: [
          "Eine n×n-Matrix A heißt diagonalisierbar, wenn es eine invertierbare Matrix S und eine Diagonalmatrix D gibt mit S⁻¹AS = D. Die Spalten von S sind dann eine Basis des ℝⁿ (bzw. ℂⁿ) aus Eigenvektoren von A, und die Diagonaleinträge von D sind die zugehörigen Eigenwerte (in derselben Reihenfolge wie die Eigenvektor-Spalten in S).",
          "A ist genau dann diagonalisierbar, wenn für JEDEN Eigenwert algebraische und geometrische Vielfachheit übereinstimmen (äquivalent: wenn die Summe der geometrischen Vielfachheiten aller Eigenwerte gleich n ist). Ein hinreichendes — aber nicht notwendiges — Kriterium: Hat A n paarweise verschiedene Eigenwerte, ist A automatisch diagonalisierbar, da dann jede algebraische Vielfachheit gleich 1 ist und die geometrische Vielfachheit (mindestens 1, höchstens die algebraische) somit ebenfalls 1 sein muss.",
        ],
        formulas: ["S⁻¹AS = D = diag(λ1,...,λₙ), S = [⃗v1 | ... | ⃗vₙ] (Eigenvektoren als Spalten)"],
        formulasLatex: ["S^{-1}AS = D = \\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n), \\quad S = [\\vec v_1 \\mid \\cdots \\mid \\vec v_n]"],
        terms: [{ term: "Diagonalisierbarkeit", definition: "A ist diagonalisierbar, wenn S⁻¹AS für geeignetes invertierbares S eine Diagonalmatrix ergibt — äquivalent: wenn algebraische und geometrische Vielfachheit für jeden Eigenwert übereinstimmen." }],
        examples: [
          "Für A=[[4,-2],[1,1]] aus 5.1 mit Eigenwerten 3 (Eigenvektor (2,1)) und 2 (Eigenvektor (1,1)) — zwei verschiedene Eigenwerte, also automatisch diagonalisierbar. Mit S=[[2,1],[1,1]] gilt S⁻¹AS = [[3,0],[0,2]]. — Auch komplexe Matrizen lassen sich diagonalisieren: Für die Drehmatrix F=[[0,−1],[1,0]] ist PF(λ)=λ²+1, also Eigenwerte ±i. Zu λ=i gehört der Eigenvektor (1,−i) (denn F·(1,−i)=(−(−i),1)=(i,1)=i·(1,−i)), zu λ=−i der Eigenvektor (1,i).",
        ],
      },
    ],
  },
  // ==================== Kapitel 6 ====================
  {
    id: "definite-matrizen",
    number: 6,
    title: "Definite Matrizen",
    free: false,
    intro:
      "Definitheit beschreibt, ob eine (symmetrische) Matrix stets 'positive', stets 'negative' oder gemischte Werte liefert, wenn man sie als quadratische Form auswertet. Dieses Konzept ist die Grundlage für Optimalitätskriterien überall dort, wo mehrdimensionale Extremstellen bestimmt werden.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Quadratische Formen und Definitheit",
        body: [
          "Zu einer symmetrischen n×n-Matrix C gehört die quadratische Form q(⃗x) := ⃗xᵀC⃗x = Σᵢⱼ cᵢⱼxᵢxⱼ. C heißt positiv definit, wenn q(⃗x) > 0 für alle ⃗x ≠ ⃗0 gilt, positiv semidefinit, wenn q(⃗x) ≥ 0 für alle ⃗x gilt, und analog negativ definit/semidefinit mit umgekehrten Ungleichungen. Nimmt q sowohl positive als auch negative Werte an, heißt C indefinit.",
          "Definitheit lässt sich äquivalent über die Eigenwerte von C charakterisieren (Eigenwertkriterium, siehe 6.2): C ist positiv definit genau dann, wenn alle Eigenwerte von C positiv sind, negativ definit, wenn alle negativ sind, und indefinit, wenn C sowohl positive als auch negative Eigenwerte besitzt.",
        ],
        formulas: ["q(⃗x) = ⃗xᵀC⃗x = Σᵢⱼ cᵢⱼ xᵢxⱼ"],
        formulasLatex: ["q(\\vec x) = \\vec x^{\\mathsf T} C \\vec x = \\sum_{i,j} c_{ij} x_i x_j"],
        terms: [
          { term: "Quadratische Form", definition: "Funktion q(⃗x)=⃗xᵀC⃗x zu einer symmetrischen Matrix C." },
          { term: "Positiv/negativ definit", definition: "q(⃗x) ist für alle ⃗x≠⃗0 stets positiv bzw. stets negativ." },
          { term: "Indefinit", definition: "q(⃗x) nimmt sowohl positive als auch negative Werte an." },
        ],
        examples: [
          "Für C = [[2,1],[1,2]] gilt q(x1,x2) = 2x1² + 2x1x2 + 2x2² (der gemischte Term x1x2 taucht wegen Symmetrie zweimal mit Koeffizient 1 auf, also insgesamt 2x1x2). Für ⃗x=(1,1) ergibt sich q = 2+2+2 = 6 > 0. Die Eigenwerte von C sind 3 und 1 (charakteristisches Polynom (2−λ)²−1=0 ⟺ λ=1 oder λ=3), beide positiv — C ist also positiv definit, was zu q(⃗x)>0 für alle getesteten ⃗x≠⃗0 passt.",
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Kriterien für Definitheit",
        body: [
          "Neben dem Eigenwertkriterium (alle Eigenwerte positiv ⟺ positiv definit, usw.) gibt es das Hauptminoren-Kriterium (Sylvester-Kriterium): C ist genau dann positiv definit, wenn alle führenden Hauptminoren (die Determinanten der oberen linken k×k-Teilmatrizen für k=1,...,n) positiv sind. Für negative Definitheit müssen die Hauptminoren alternierende Vorzeichen haben, beginnend mit negativ (d1<0, d2>0, d3<0, ...).",
          "Ist mindestens ein führender Hauptminor negativ, ohne dass das alternierende Muster für negative Definitheit erfüllt ist (oder liegt ein Hauptminor bei 0), deutet das auf Indefinitheit oder Semidefinitheit hin — in diesem Fall hilft das Eigenwertkriterium, um endgültig zu entscheiden.",
        ],
        formulas: [
          "Positiv definit ⟺ alle führenden Hauptminoren d1,...,dₙ > 0",
          "Negativ definit ⟺ d1<0, d2>0, d3<0, ... (alternierend)",
        ],
        formulasLatex: [
          "\\text{positiv definit} \\iff d_1,\\dots,d_n > 0",
          "\\text{negativ definit} \\iff d_1<0,\\ d_2>0,\\ d_3<0,\\dots",
        ],
        table: {
          caption: "Definitheitskriterien im Überblick",
          headers: ["Kriterium", "Positiv definit", "Negativ definit", "Indefinit"],
          rows: [
            ["Eigenwertkriterium", "alle Eigenwerte > 0", "alle Eigenwerte < 0", "positive und negative Eigenwerte gemischt"],
            ["Hauptminoren-Kriterium", "d1,...,dₙ alle > 0", "d1<0, d2>0, d3<0, ... (alternierend)", "Muster weder für + noch − definit erfüllt"],
          ],
        },
        terms: [{ term: "Führender Hauptminor dₖ", definition: "Determinante der oberen linken k×k-Teilmatrix von C." }],
        examples: [
          "Für D=[[1,2],[2,1]] ist d1=1>0, aber d2=det(D)=1−4=−3<0 — weder das Muster für positiv (beide >0) noch für negativ definit (d1<0,d2>0) ist erfüllt. Die Eigenwerte von D sind 3 und −1 (ein positiver, ein negativer) — D ist also indefinit, was mit dem Hauptminoren-Befund konsistent ist.",
        ],
      },
    ],
  },
  // ==================== Kapitel 7 ====================
  {
    id: "normen-skalarprodukte-orthogonalitaet",
    number: 7,
    title: "Normen, Skalarprodukte und Orthogonalität",
    free: false,
    intro:
      "Um Längen, Winkel und Abstände im ℝⁿ zu messen, braucht man Normen und Skalarprodukte. Dieses Kapitel führt beide Konzepte ein und zeigt, wie sich mit dem Gram-Schmidt-Verfahren orthogonale Basen konstruieren und Projektionen berechnen lassen.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Normen und Normäquivalenz",
        body: [
          "Eine Norm ‖·‖: ℝⁿ → [0,∞) ist eine Abbildung mit drei Eigenschaften: Definitheit (‖⃗x‖=0 ⟺ ⃗x=⃗0), Homogenität (‖λ⃗x‖=|λ|·‖⃗x‖ für λ∈ℝ) und Dreiecksungleichung (‖⃗x+⃗y‖ ≤ ‖⃗x‖+‖⃗y‖). Die gebräuchlichsten Normen auf ℝⁿ sind die 1-Norm ‖⃗x‖1=Σ|xᵢ|, die euklidische Norm ‖⃗x‖2=√(Σxᵢ²) und die Maximumsnorm ‖⃗x‖∞=max|xᵢ|.",
          "Ein zentraler Satz besagt: Alle Normen auf ℝⁿ sind äquivalent — zu je zwei Normen ‖·‖, ‖·‖' gibt es Konstanten c,C>0 mit c‖⃗x‖ ≤ ‖⃗x‖' ≤ C‖⃗x‖ für alle ⃗x. Das hat wichtige Konsequenzen: Konvergenz einer Folge hängt nicht von der gewählten Norm ab (Kapitel 2), und jede Norm lässt sich als ‖⃗x‖ = ‖A⃗x‖∞ für eine geeignete invertierbare Matrix A schreiben.",
        ],
        formulas: [
          "‖⃗x‖1 = Σ|xᵢ|, ‖⃗x‖2 = √(Σxᵢ²), ‖⃗x‖∞ = max|xᵢ|",
          "Normäquivalenz: c‖⃗x‖ ≤ ‖⃗x‖' ≤ C‖⃗x‖ für Konstanten c,C>0",
        ],
        formulasLatex: [
          "\\|\\vec x\\|_1 = \\sum_i |x_i|, \\quad \\|\\vec x\\|_2 = \\sqrt{\\sum_i x_i^2}, \\quad \\|\\vec x\\|_\\infty = \\max_i |x_i|",
          "c\\|\\vec x\\| \\le \\|\\vec x\\|' \\le C\\|\\vec x\\|",
        ],
        table: {
          caption: "Die drei Standardnormen auf ℝⁿ",
          headers: ["Norm", "Formel", "Anschauung"],
          rows: [
            ["1-Norm ‖·‖1", "Σ|xᵢ|", "'Manhattan-Distanz', Summe der Beträge"],
            ["Euklidische Norm ‖·‖2", "√(Σxᵢ²)", "gewöhnliche Länge/Abstand"],
            ["Maximumsnorm ‖·‖∞", "max|xᵢ|", "größte einzelne Komponente"],
          ],
        },
        terms: [{ term: "Normäquivalenz", definition: "Alle Normen auf ℝⁿ (endlichdimensional) sind äquivalent: je zwei Normen lassen sich wechselseitig durch Konstanten abschätzen." }],
        examples: [
          "Für ⃗x=(3,−4) gilt ‖⃗x‖1=3+4=7, ‖⃗x‖2=√(9+16)=5 und ‖⃗x‖∞=max(3,4)=4 — man sieht ‖⃗x‖∞ ≤ ‖⃗x‖2 ≤ ‖⃗x‖1, also 4 ≤ 5 ≤ 7, ein Spezialfall der allgemeinen Normäquivalenz.",
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Skalarprodukte und die Cauchy-Schwarz-Ungleichung",
        body: [
          "Ein Skalarprodukt ⟨·,·⟩ auf einem reellen Vektorraum V ist eine Abbildung V×V→ℝ, die symmetrisch (⟨⃗x,⃗y⟩=⟨⃗y,⃗x⟩), linear im ersten Argument und positiv definit ist (⟨⃗x,⃗x⟩>0 für ⃗x≠⃗0). Das Standardskalarprodukt auf ℝⁿ ist ⟨⃗x,⃗y⟩ = Σxᵢyᵢ = ⃗xᵀ⃗y; es induziert die euklidische Norm über ‖⃗x‖2 = √⟨⃗x,⃗x⟩. Es gibt aber auch andere, 'exotischere' Skalarprodukte — etwa gewichtete Varianten ⟨⃗x,⃗y⟩ := ⃗xᵀA⃗y für eine positiv definite Matrix A —, deren Axiome man im Einzelfall nachweisen muss.",
          "Für jedes Skalarprodukt gilt die Cauchy-Schwarz-Ungleichung |⟨⃗x,⃗y⟩| ≤ ‖⃗x‖·‖⃗y‖ mit Gleichheit genau dann, wenn ⃗x und ⃗y linear abhängig sind. Sie ist das wichtigste Hilfsmittel, um Ungleichungen mit Skalarprodukten zu beweisen, und garantiert insbesondere, dass der 'Winkel' cos(φ) = ⟨⃗x,⃗y⟩/(‖⃗x‖‖⃗y‖) stets im Intervall [−1,1] liegt.",
        ],
        formulas: [
          "⟨⃗x,⃗y⟩ = Σᵢ xᵢyᵢ = ⃗xᵀ⃗y  (Standardskalarprodukt)",
          "|⟨⃗x,⃗y⟩| ≤ ‖⃗x‖ · ‖⃗y‖  (Cauchy-Schwarz-Ungleichung)",
        ],
        formulasLatex: [
          "\\langle \\vec x, \\vec y\\rangle = \\sum_i x_i y_i = \\vec x^{\\mathsf T}\\vec y",
          "|\\langle \\vec x,\\vec y\\rangle| \\le \\|\\vec x\\|\\cdot\\|\\vec y\\|",
        ],
        terms: [
          { term: "Skalarprodukt", definition: "Symmetrische, bilineare, positiv definite Abbildung V×V→ℝ." },
          { term: "Cauchy-Schwarz-Ungleichung", definition: "|⟨⃗x,⃗y⟩| ≤ ‖⃗x‖‖⃗y‖ für jedes Skalarprodukt und die davon induzierte Norm." },
        ],
        examples: [
          "Für ⃗a=(1,2,2) und ⃗b=(2,1,2) gilt ⟨⃗a,⃗b⟩ = 1·2+2·1+2·2 = 8, während ‖⃗a‖=‖⃗b‖=√(1+4+4)=3. Die Cauchy-Schwarz-Ungleichung liefert |8| ≤ 3·3=9 — erfüllt, mit etwas Abstand zur Gleichheit (⃗a und ⃗b sind nicht parallel).",
        ],
      },
      {
        id: "7-3",
        heading: "7.3 Orthogonalität, Gram-Schmidt-Verfahren und Projektionen",
        body: [
          "Zwei Vektoren ⃗x, ⃗y heißen orthogonal, wenn ⟨⃗x,⃗y⟩=0 gilt. Eine Orthonormalbasis (ONB) ist eine Basis aus paarweise orthogonalen Vektoren der Länge 1. Aus einer beliebigen Basis {⃗v1,...,⃗vₖ} eines Untervektorraums lässt sich mit dem Gram-Schmidt-Verfahren eine ONB konstruieren: Man normiert ⃗v1 zu ⃗u1, zieht von ⃗v2 die Projektion auf ⃗u1 ab und normiert den Rest zu ⃗u2, und verfährt iterativ so weiter — bei jedem Schritt wird von ⃗vⱼ die Projektion auf alle bereits konstruierten ⃗u1,...,⃗u_{j-1} abgezogen, bevor normiert wird.",
          "Die orthogonale Projektion eines Vektors ⃗c auf einen Untervektorraum U mit Orthonormalbasis {⃗u1,...,⃗uₖ} ist P_U(⃗c) = Σⱼ ⟨⃗uⱼ,⃗c⟩·⃗uⱼ. Der Abstand von ⃗c zu U ist dann d(⃗c,U) = ‖⃗c − P_U(⃗c)‖ — dies ist zugleich der kürzeste Abstand von ⃗c zu irgendeinem Punkt in U.",
        ],
        formulas: [
          "Gram-Schmidt: ⃗wⱼ = ⃗vⱼ − Σᵢ<ⱼ ⟨⃗uᵢ,⃗vⱼ⟩⃗uᵢ, dann ⃗uⱼ = ⃗wⱼ/‖⃗wⱼ‖",
          "P_U(⃗c) = Σⱼ ⟨⃗uⱼ,⃗c⟩ · ⃗uⱼ, d(⃗c,U) = ‖⃗c − P_U(⃗c)‖",
        ],
        formulasLatex: [
          "\\vec w_j = \\vec v_j - \\sum_{i<j} \\langle \\vec u_i, \\vec v_j\\rangle \\vec u_i, \\qquad \\vec u_j = \\dfrac{\\vec w_j}{\\|\\vec w_j\\|}",
          "P_U(\\vec c) = \\sum_j \\langle \\vec u_j, \\vec c\\rangle \\vec u_j, \\qquad d(\\vec c, U) = \\|\\vec c - P_U(\\vec c)\\|",
        ],
        terms: [
          { term: "Orthonormalbasis (ONB)", definition: "Basis aus paarweise orthogonalen Vektoren der Länge 1." },
          { term: "Gram-Schmidt-Verfahren", definition: "Konstruktionsverfahren, das aus einer beliebigen Basis eine Orthonormalbasis erzeugt." },
          { term: "Orthogonale Projektion P_U", definition: "Abbildung, die einen Vektor auf seinen 'nächstgelegenen' Punkt in einem Untervektorraum U abbildet." },
        ],
        examples: [
          "Für ⃗v1=(1,1,0) und ⃗v2=(1,0,1) liefert Gram-Schmidt zunächst ⃗u1 = ⃗v1/‖⃗v1‖ = (1,1,0)/√2. Die Projektion von ⃗v2 auf ⃗u1 ist ⟨⃗u1,⃗v2⟩·⃗u1 = (1/√2)·(1,1,0)/√2 = (1/2,1/2,0). Damit ⃗w2 = ⃗v2 − (1/2,1/2,0) = (1/2,−1/2,1), und normiert ⃗u2 = ⃗w2/‖⃗w2‖ = (1,−1,2)/√6 (da ‖⃗w2‖=√(1/4+1/4+1)=√6/2). — Für U=span{⃗v1} und ⃗c=(0,2,1) ist P_U(⃗c) = ⟨⃗u1,⃗c⟩⃗u1 = (2/√2)·(1,1,0)/√2 = (1,1,0), und der Abstand d(⃗c,U) = ‖(0,2,1)−(1,1,0)‖ = ‖(−1,1,1)‖ = √3.",
        ],
      },
    ],
  },
  // ==================== Kapitel 8 ====================
  {
    id: "stetigkeit-mehrdimensional",
    number: 8,
    title: "Stetigkeit mehrdimensionaler Funktionen",
    free: false,
    intro:
      "Stetigkeit im Mehrdimensionalen ist tückischer als im Eindimensionalen: Ein Grenzwert muss aus JEDER Richtung und JEDEM Annäherungspfad gleich sein. Dieses Kapitel zeigt, wie man Stetigkeit nachweist — und wie man sie mit geschickt gewählten Wegen widerlegt.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Grenzwerte und Stetigkeit im Rⁿ",
        body: [
          "Eine Funktion f: D ⊆ ℝⁿ → ℝ hat im Punkt ⃗x0 den Grenzwert L, geschrieben lim_{⃗x→⃗x0} f(⃗x) = L, wenn für JEDE Folge (⃗xₖ) in D\\{⃗x0} mit ⃗xₖ→⃗x0 auch f(⃗xₖ)→L gilt (Folgenkriterium). f heißt stetig in ⃗x0 ∈ D, wenn lim_{⃗x→⃗x0} f(⃗x) = f(⃗x0) gilt. Anders als im Eindimensionalen, wo man den Grenzwert nur von links und von rechts prüfen muss, gibt es im ℝⁿ unendlich viele Annäherungsrichtungen — der Grenzwert muss für ALLE gleich ausfallen.",
          "Praktisch nützlich: Summen, Produkte, Quotienten (im Nenner ≠0) und Verkettungen stetiger Funktionen sind wieder stetig — dieselben Regeln wie im Eindimensionalen gelten also komponentenweise fort. Kritisch wird es nur an 'Ausnahmepunkten' (meist dort, wo ein Bruch formal 0/0 ergibt), an denen man den Grenzwert explizit untersuchen muss.",
        ],
        formulas: ["f stetig in ⃗x0 ⟺ für jede Folge ⃗xₖ→⃗x0 in D gilt f(⃗xₖ) → f(⃗x0)"],
        formulasLatex: ["f \\ \\text{stetig in } \\vec x_0 \\iff \\text{für jede Folge } \\vec x_k \\to \\vec x_0 \\text{ in } D \\text{ gilt } f(\\vec x_k) \\to f(\\vec x_0)"],
        terms: [{ term: "Stetigkeit im ℝⁿ", definition: "f ist stetig in ⃗x0, wenn der Grenzwert von f entlang JEDER Folge, die gegen ⃗x0 konvergiert, gleich f(⃗x0) ist." }],
        examples: [
          "Die Funktion f(x,y) = (e^(x²+y²)−1)/(x²+y²) für (x,y)≠(0,0) und f(0,0):=1 ist stetig in (0,0): Mit z:=x²+y²→0⁺ gilt (e^z−1)/z → 1 (Grenzwert der Exponentialfunktion, per Regel von L'Hospital: Ableitung von e^z−1 ist e^z→1, Ableitung von z ist 1), was genau f(0,0) entspricht.",
        ],
      },
      {
        id: "8-2",
        heading: "8.2 Nachweis von Unstetigkeit und stetige Fortsetzung",
        body: [
          "Um zu zeigen, dass eine Funktion in einem Punkt NICHT stetig ist, genügt es, zwei verschiedene Wege (Folgen) zu finden, entlang derer sich unterschiedliche Grenzwerte ergeben. Ein Standardtrick: Man nähert sich entlang von Geraden y = mx (für verschiedene Steigungen m) an und prüft, ob der resultierende Grenzwert von m abhängt.",
          "Manchmal lässt sich eine zunächst nur auf D\\{⃗x0} definierte Funktion durch geeignete Wahl von f(⃗x0) stetig fortsetzen — nämlich genau dann, wenn der Grenzwert lim_{⃗x→⃗x0} f(⃗x) existiert (unabhängig vom Weg). Existiert dieser Grenzwert nicht (weil verschiedene Wege verschiedene Werte liefern), ist keine stetige Fortsetzung möglich, egal welchen Wert man f(⃗x0) zuweist.",
        ],
        formulas: ["Unstetigkeitsnachweis: zwei Wege ⃗xₖ→⃗x0, ⃗yₖ→⃗x0 mit lim f(⃗xₖ) ≠ lim f(⃗yₖ)"],
        formulasLatex: ["\\text{Unstetigkeitsnachweis: zwei Wege } \\vec x_k, \\vec y_k \\to \\vec x_0 \\ \\text{mit} \\ \\lim f(\\vec x_k) \\neq \\lim f(\\vec y_k)"],
        terms: [{ term: "Stetige Fortsetzbarkeit", definition: "Eine auf D\\{⃗x0} definierte Funktion ist stetig fortsetzbar, wenn lim_{⃗x→⃗x0} f(⃗x) existiert; man setzt dann f(⃗x0) gleich diesem Grenzwert." }],
        examples: [
          "Die Funktion g(x,y) = xy/(x²+y²) für (x,y)≠(0,0) ist in (0,0) NICHT stetig fortsetzbar: Nähert man sich entlang y=mx, ergibt sich g(x,mx) = mx²/((1+m²)x²) = m/(1+m²) — ein Wert, der von der gewählten Steigung m abhängt (z. B. m=1 liefert 1/2, m=2 liefert 2/5). Da verschiedene Wege verschiedene Grenzwerte liefern, existiert lim_{(x,y)→(0,0)} g(x,y) nicht, und keine Wahl von g(0,0) macht g stetig.",
        ],
      },
    ],
  },
  // ==================== Kapitel 9 ====================
  {
    id: "gradient-tangentialebene-review",
    number: 9,
    title: "Gradient, Richtungsableitung und Tangentialebene",
    free: false,
    intro:
      "Dieses abschließende Kapitel fasst kompakt die wichtigsten Grundlagen der mehrdimensionalen Differentiation zusammen, die auch in der Semesterklausur auftauchen können — für eine ausführlichere Behandlung (Kettenregel, Hessematrix, Extremwertaufgaben) empfiehlt sich das Modul 'Mathematik 2: Abschlussklausur'.",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Gradient und Richtungsableitung",
        body: [
          "Für eine partiell differenzierbare Funktion f: ℝⁿ→ℝ ist der Gradient ∇f(⃗x) = (∂f/∂x1,...,∂f/∂xₙ) der Vektor aller partiellen Ableitungen. Ist f total differenzierbar, lässt sich die Richtungsableitung in Richtung eines Einheitsvektors ⃗w (‖⃗w‖=1) als Skalarprodukt berechnen: ∂f/∂⃗w (⃗x) = ⟨∇f(⃗x), ⃗w⟩.",
          "Der Gradient zeigt stets in die Richtung des steilsten Anstiegs von f, und sein Betrag ‖∇f(⃗x)‖ ist genau die maximale Richtungsableitung an dieser Stelle; in die Gegenrichtung −∇f(⃗x)/‖∇f(⃗x)‖ nimmt f am steilsten ab.",
        ],
        formulas: [
          "∇f(⃗x) = (∂f/∂x1, ..., ∂f/∂xₙ)",
          "∂f/∂⃗w (⃗x) = ⟨∇f(⃗x), ⃗w⟩  für ‖⃗w‖=1",
        ],
        formulasLatex: [
          "\\nabla f(\\vec x) = \\left(\\dfrac{\\partial f}{\\partial x_1},\\dots,\\dfrac{\\partial f}{\\partial x_n}\\right)",
          "\\dfrac{\\partial f}{\\partial \\vec w}(\\vec x) = \\langle \\nabla f(\\vec x), \\vec w\\rangle \\quad (\\|\\vec w\\|=1)",
        ],
        terms: [{ term: "Gradient", definition: "Vektor aller partiellen Ableitungen; zeigt in Richtung des steilsten Anstiegs." }],
        examples: [
          "Für f(x,y) = x²+3xy−y² ist ∇f(x,y) = (2x+3y, 3x−2y). Im Punkt (2,−1) ergibt sich ∇f(2,−1) = (4−3, 6+2) = (1,8). Die Richtungsableitung in Richtung ⃗w=(1,0) ist damit ⟨(1,8),(1,0)⟩ = 1.",
        ],
      },
      {
        id: "9-2",
        heading: "9.2 Tangentialebene",
        body: [
          "Ist f: ℝ²→ℝ total differenzierbar im Punkt (x0,y0), so ist die Tangentialebene an den Graphen von f in diesem Punkt gegeben durch z = f(x0,y0) + ⟨∇f(x0,y0), (x−x0, y−y0)⟩ — die beste lineare (affine) Näherung von f in der Nähe von (x0,y0). Sie verallgemeinert die Tangente einer Kurve auf den zweidimensionalen Fall.",
        ],
        formulas: ["z = f(x0,y0) + ⟨∇f(x0,y0), (x−x0,y−y0)⟩"],
        formulasLatex: ["z = f(x_0,y_0) + \\langle \\nabla f(x_0,y_0), (x-x_0, y-y_0)\\rangle"],
        terms: [{ term: "Tangentialebene", definition: "Beste lineare Näherung des Graphen von f in einem Punkt; verallgemeinert die Tangente aus einer Dimension." }],
        examples: [
          "Für f(x,y)=x²+3xy−y² im Punkt (2,−1) gilt f(2,−1)=4−6−1=−3 und ∇f(2,−1)=(1,8) (aus 9.1). Die Tangentialebene lautet damit z = −3 + 1·(x−2) + 8·(y+1) = x + 8y + 3.",
        ],
      },
    ],
  },
];
