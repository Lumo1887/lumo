import type { SkriptChapter } from "./types";

// Eigenständiges Lehrwerk zu "Mathematik 1: Abschlussklausur" (lineare
// Algebra: LGS, Vektorräume, Skalarprodukte, lineare Abbildungen; Analysis:
// Stetigkeit, Differenzierbarkeit, Integralrechnung), verfasst wie ein
// unabhängiges Lehrbuch zum Modulthema — nicht als Paraphrase einer
// bestimmten Vorlesung.
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 ====================
  {
    id: "lineare-gleichungssysteme",
    number: 1,
    title: "Lineare Gleichungssysteme und der Gauß-Algorithmus",
    free: true,
    intro:
      "Lineare Gleichungssysteme (LGS) tauchen überall dort auf, wo mehrere lineare Bedingungen gleichzeitig erfüllt sein müssen — von einfachen Mischungsaufgaben bis zu den Grundlagen der linearen Algebra. Dieses Kapitel führt die Matrixschreibweise ein und zeigt mit dem Gauß-Algorithmus ein systematisches Lösungsverfahren.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Matrizen und lineare Gleichungssysteme",
        body: [
          "Ein lineares Gleichungssystem (LGS) mit m Gleichungen und n Unbekannten x1,...,xn über einem Körper K (meist K=ℝ) besteht aus m Gleichungen der Form a_{i1}x1+...+a_{in}xn=b_i für i=1,...,m. Man fasst die Koeffizienten in einer (m×n)-Matrix A=(a_{ij}) zusammen und schreibt das System kompakt als A⃗x=⃗b, wobei ⃗x=(x1,...,xn) der Vektor der Unbekannten und ⃗b=(b1,...,bm) die rechte Seite ist. Die erweiterte Koeffizientenmatrix (A|⃗b) enthält zusätzlich die rechte Seite als letzte Spalte und fasst damit das gesamte LGS in einem einzigen Zahlenschema zusammen.",
          "Eine (m×n)-Matrix mal ein Vektor ⃗x∈K^n ergibt einen Vektor A⃗x∈K^m, dessen i-te Komponente gerade die i-te Zeile von A, skalar mit ⃗x multipliziert, ist: (A⃗x)_i = Σ_j a_{ij}x_j. Zwei LGS heißen äquivalent, wenn sie dieselbe Lösungsmenge besitzen. Bestimmte Umformungen der erweiterten Koeffizientenmatrix — Vertauschen zweier Zeilen, Multiplikation einer Zeile mit einem Skalar ≠0, Addition eines Vielfachen einer Zeile zu einer anderen — verändern die Lösungsmenge nicht und heißen daher äquivalente Umformungen.",
        ],
        formulas: [
          "A⃗x=⃗b, (A⃗x)_i = Σ_{j=1}^n a_{ij}x_j",
          "Erweiterte Koeffizientenmatrix: (A|⃗b)",
        ],
        formulasLatex: [
          "A\\vec x = \\vec b, \\qquad (A\\vec x)_i = \\sum_{j=1}^n a_{ij}x_j",
          "\\text{Erweiterte Koeffizientenmatrix: } (A\\,|\\,\\vec b)",
        ],
        terms: [
          { term: "Lineares Gleichungssystem (LGS)", definition: "System von m linearen Gleichungen in n Unbekannten, kompakt geschrieben als A⃗x=⃗b." },
          { term: "Erweiterte Koeffizientenmatrix", definition: "Matrix (A|⃗b), die Koeffizientenmatrix A und rechte Seite ⃗b in einem Schema zusammenfasst." },
          { term: "Äquivalente LGS", definition: "Zwei LGS mit identischer Lösungsmenge; äquivalente Zeilenumformungen erzeugen aus einem LGS ein äquivalentes." },
        ],
        examples: [
          "Für das LGS x1+2x2−x3=3, 2x1+x3=4, 3x1+x2+2x3=10 lautet die Koeffizientenmatrix A=[[1,2,−1],[2,0,1],[3,1,2]] und die rechte Seite ⃗b=(3,4,10). Auflösen (z. B. mit dem Gauß-Algorithmus aus 1.2) liefert die eindeutige Lösung x1=0,6, x2=2,6, x3=2,8 — Probe in der ersten Gleichung: 0,6+2·2,6−2,8=0,6+5,2−2,8=3 ✓.",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Der Gauß-Algorithmus und die Lösungsmenge",
        body: [
          "Der Gauß-Algorithmus bringt die erweiterte Koeffizientenmatrix durch äquivalente Zeilenumformungen systematisch auf Zeilenstufenform: In jeder Zeile steht der erste von Null verschiedene Eintrag (die sogenannte führende Variable) weiter rechts als in der Zeile darüber, und alle Nullzeilen stehen unten. Variablen, die in keiner Zeile führend sind, heißen frei — ihnen kann ein beliebiger Wert zugewiesen werden, während die führenden Variablen durch Rückwärtseinsetzen aus den freien Variablen berechnet werden.",
          "Die Kardinalität (Anzahl der Elemente) der Lösungsmenge eines LGS in Zeilenstufenform lässt sich direkt ablesen: Enthält die Zeilenstufenform eine Zeile der Form (0,...,0|c) mit c≠0, ist das System unlösbar (leere Lösungsmenge). Andernfalls gibt es genau dann eine eindeutige Lösung, wenn jede Variable führend ist (keine freien Variablen), und unendlich viele Lösungen, sobald mindestens eine Variable frei bleibt — die Lösungsmenge lässt sich dann als L = ⃗x_p + span{⃗v1,...,⃗vk} schreiben, wobei ⃗x_p eine spezielle (partikuläre) Lösung und k die Anzahl der freien Variablen ist.",
        ],
        formulas: [
          "Zeilenstufenform: führende Einträge streng von links nach rechts gestaffelt",
          "Unlösbar ⟺ Zeile (0,...,0|c) mit c≠0 in Zeilenstufenform",
          "L = ⃗x_p + span{⃗v1,...,⃗vk}  (k = Anzahl freier Variablen)",
        ],
        formulasLatex: [
          "\\text{Zeilenstufenform: führende Einträge streng gestaffelt}",
          "\\text{unlösbar} \\iff \\text{Zeile } (0,\\dots,0\\,|\\,c) \\text{ mit } c\\neq 0",
          "L = \\vec x_p + \\operatorname{span}\\{\\vec v_1,\\dots,\\vec v_k\\}",
        ],
        terms: [
          { term: "Zeilenstufenform", definition: "Form der erweiterten Koeffizientenmatrix, in der die führenden Einträge jeder Zeile von oben nach unten strikt nach rechts wandern." },
          { term: "Führende / freie Variablen", definition: "Führende Variablen entsprechen den Pivotspalten der Zeilenstufenform; alle übrigen Variablen sind frei wählbar." },
        ],
        examples: [
          "Für das LGS x1+2x2+x3=3, 2x1+4x2+3x3=7 liefert der Gauß-Algorithmus (2. Zeile minus 2×1. Zeile) die Zeilenstufenform x1+2x2+x3=3, x3=1. Die Variable x2 ist frei (kein Pivot in Spalte 2). Rückwärtseinsetzen liefert x3=1 und x1=3−2x2−1=2−2x2. Mit x2=t∈ℝ als Parameter lautet die Lösungsmenge L={(2−2t, t, 1) : t∈ℝ} — es gibt unendlich viele Lösungen, da eine Variable frei bleibt.",
        ],
      },
    ],
  },
  // ==================== Kapitel 2 ====================
  {
    id: "vektorraeume",
    number: 2,
    title: "Vektorräume und Untervektorräume",
    free: false,
    intro:
      "Der Vektorraumbegriff abstrahiert die vertrauten Rechenregeln des ℝⁿ auf ganz unterschiedliche mathematische Objekte — von Zahlentupeln über Polynome bis zu stetigen Funktionen. Dieses Kapitel führt Vektorräume, Untervektorräume und den zentralen Begriff der Basis ein.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 K-Vektorräume und das Untervektorraumkriterium",
        body: [
          "Ein K-Vektorraum ist eine nichtleere Menge V zusammen mit einer Addition + : V×V→V und einer skalaren Multiplikation · : K×V→V, die eine Reihe vertrauter Rechenregeln erfüllen (Assoziativität und Kommutativität der Addition, Existenz eines Nullvektors und additiver Inverser, Distributivgesetze und Verträglichkeit der skalaren Multiplikation). Neben dem vertrauten K^n (Spaltenvektoren mit komponentenweiser Addition) sind auch die Menge aller Polynome vom Grad höchstens n, oder die Menge C[a,b] aller stetigen Funktionen auf einem Intervall [a,b], K-Vektorräume — mit Addition und skalarer Multiplikation von Funktionen bzw. Polynomen punktweise definiert.",
          "Eine Teilmenge U⊂V eines K-Vektorraums heißt Untervektorraum (UVR), wenn U mit den von V geerbten Verknüpfungen selbst ein Vektorraum ist. Statt alle Vektorraumaxiome erneut nachzuweisen, genügt das Untervektorraumkriterium: U ist genau dann ein Untervektorraum von V, wenn (i) U nichtleer ist (äquivalent: der Nullvektor liegt in U), (ii) U abgeschlossen unter Addition ist (u1,u2∈U ⟹ u1+u2∈U), und (iii) U abgeschlossen unter skalarer Multiplikation ist (u∈U, λ∈K ⟹ λu∈U).",
        ],
        formulas: ["UVR-Kriterium: ⃗0∈U, u1+u2∈U, λu∈U für alle u,u1,u2∈U, λ∈K"],
        formulasLatex: ["\\text{UVR-Kriterium: } \\vec 0 \\in U,\\ u_1+u_2\\in U,\\ \\lambda u \\in U \\ \\text{für alle } u,u_1,u_2\\in U,\\ \\lambda\\in K"],
        terms: [
          { term: "K-Vektorraum", definition: "Menge mit Addition und skalarer Multiplikation, die den üblichen Vektorraumaxiomen genügt." },
          { term: "Untervektorraum (UVR)", definition: "Teilmenge eines Vektorraums, die selbst (mit denselben Verknüpfungen) ein Vektorraum ist." },
        ],
        examples: [
          "Die Ebene E={(x,y,z)∈ℝ³ : x+y−2z=0} ist ein Untervektorraum von ℝ³: Der Nullvektor erfüllt 0+0−0=0 ✓; sind (x1,y1,z1),(x2,y2,z2)∈E, so gilt für die Summe (x1+x2)+(y1+y2)−2(z1+z2)=(x1+y1−2z1)+(x2+y2−2z2)=0+0=0 ✓, ebenso für skalare Vielfache. Dagegen ist die verschobene Ebene E'={(x,y,z): x+y−2z=5} KEIN Untervektorraum, da der Nullvektor die Gleichung 0+0−0=5 nicht erfüllt.",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Lineare Unabhängigkeit, Erzeugendensysteme und Basis",
        body: [
          "Vektoren ⃗v1,...,⃗vk eines K-Vektorraums heißen linear unabhängig, wenn die einzige Lösung von λ1⃗v1+...+λk⃗vk=⃗0 die triviale Lösung λ1=...=λk=0 ist — äquivalent: keiner der Vektoren lässt sich als Linearkombination der übrigen schreiben. Sind sie nicht linear unabhängig, heißen sie linear abhängig. Die lineare Hülle span(M) einer Menge M⊂V ist die Menge aller (endlichen) Linearkombinationen von Vektoren aus M; sie ist stets ein Untervektorraum von V und der kleinste Untervektorraum, der M enthält. M heißt Erzeugendensystem von V, wenn span(M)=V gilt.",
          "Eine Basis B eines K-Vektorraums V ist ein linear unabhängiges Erzeugendensystem von V — äquivalent: jeder Vektor aus V lässt sich auf genau eine Weise als Linearkombination der Basisvektoren schreiben. Jeder Vektorraum besitzt eine Basis (im Fall endlicher Erzeugung folgt dies bereits durch schrittweises Weglassen linear abhängiger Vektoren aus einem Erzeugendensystem bzw. durch Ergänzen einer linear unabhängigen Menge). Der Austauschsatz von Steinitz garantiert dabei, dass sich Basisvektoren durch Vektoren einer anderen linear unabhängigen Menge ersetzen lassen, ohne die Erzeugendeneigenschaft zu verlieren — eine Konsequenz daraus ist, dass alle Basen eines Vektorraums dieselbe Anzahl an Elementen haben.",
        ],
        formulas: [
          "Lineare Unabhängigkeit: λ1⃗v1+...+λk⃗vk=⃗0 ⟹ λ1=...=λk=0",
          "Basis = linear unabhängiges Erzeugendensystem",
        ],
        formulasLatex: [
          "\\text{lineare Unabhängigkeit: } \\lambda_1\\vec v_1+\\cdots+\\lambda_k\\vec v_k=\\vec 0 \\implies \\lambda_1=\\cdots=\\lambda_k=0",
          "\\text{Basis} = \\text{linear unabhängiges Erzeugendensystem}",
        ],
        terms: [
          { term: "Lineare Hülle span(M)", definition: "Menge aller Linearkombinationen von Vektoren aus M; kleinster Untervektorraum, der M enthält." },
          { term: "Erzeugendensystem", definition: "Menge M⊂V mit span(M)=V." },
          { term: "Basis", definition: "Linear unabhängiges Erzeugendensystem; jeder Vektor besitzt eine eindeutige Darstellung als Linearkombination der Basisvektoren." },
        ],
        examples: [
          "Für ⃗v1=(1,1,0), ⃗v2=(0,1,1), ⃗v3=(1,0,1) gilt det[⃗v1|⃗v2|⃗v3]=2≠0, also sind die drei Vektoren linear unabhängig. Da dim(ℝ³)=3 und drei linear unabhängige Vektoren in ℝ³ automatisch ein Erzeugendensystem bilden (siehe 2.3), ist B={⃗v1,⃗v2,⃗v3} eine Basis von ℝ³.",
        ],
      },
      {
        id: "2-3",
        heading: "2.3 Dimension und die Dimensionsformel für Untervektorräume",
        body: [
          "Die Dimension dim(V) eines K-Vektorraums V ist die (wohldefinierte) Anzahl der Elemente einer Basis von V. Für Untervektorräume U⊂V gilt stets dim(U)≤dim(V), mit Gleichheit genau dann, wenn U=V. Sind U1, U2 zwei Untervektorräume von V, ist sowohl der Durchschnitt U1∩U2 als auch die Summe U1+U2:={u1+u2 : u1∈U1, u2∈U2} wieder ein Untervektorraum von V (die Vereinigung U1∪U2 dagegen im Allgemeinen NICHT, außer wenn einer der beiden Räume im anderen enthalten ist).",
          "Die Dimensionsformel verknüpft die Dimensionen von U1, U2, ihrer Summe und ihres Durchschnitts: dim(U1+U2) = dim(U1) + dim(U2) − dim(U1∩U2). Ist U1∩U2={⃗0} (man spricht dann von einer direkten Summe U1⊕U2), vereinfacht sich dies zu dim(U1⊕U2)=dim(U1)+dim(U2).",
        ],
        formulas: ["dim(U1+U2) = dim(U1) + dim(U2) − dim(U1∩U2)"],
        formulasLatex: ["\\dim(U_1+U_2) = \\dim(U_1) + \\dim(U_2) - \\dim(U_1\\cap U_2)"],
        terms: [
          { term: "Dimension dim(V)", definition: "Anzahl der Elemente einer (beliebigen) Basis von V." },
          { term: "Direkte Summe U1⊕U2", definition: "Summe zweier Untervektorräume mit U1∩U2={⃗0}." },
        ],
        examples: [
          "In ℝ³ seien U1={(x,y,z): x−y+z=0} und U2={(x,y,z): x+y−z=0} zwei Ebenen durch den Ursprung (dim U1=dim U2=2). Ihr Durchschnitt ist eine Gerade durch den Ursprung mit Richtungsvektor n1×n2=(1,−1,1)×(1,1,−1)=(0,2,2) (also dim(U1∩U2)=1, sofern die Ebenen nicht identisch sind). Die Dimensionsformel liefert dim(U1+U2)=2+2−1=3, also U1+U2=ℝ³.",
        ],
      },
    ],
  },
  // ==================== Kapitel 3 ====================
  {
    id: "skalarprodukte-orthogonalitaet",
    number: 3,
    title: "Skalarprodukte und Orthogonalität",
    free: false,
    intro:
      "Skalarprodukte erlauben es, Längen, Winkel und Orthogonalität in beliebigen Vektorräumen zu definieren — nicht nur im vertrauten ℝⁿ. Da Skalarprodukte allein auf dem Vektorraumbegriff aufbauen (nicht auf linearen Abbildungen), schließt dieses Kapitel direkt an Vektorräume und Untervektorräume an. Es behandelt die grundlegenden Ungleichungen, das Gram-Schmidt-Verfahren und Abstandsberechnungen.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Skalarprodukte, Norm und die Cauchy-Schwarz-Ungleichung",
        body: [
          "Ein Skalarprodukt s(·,·) auf einem reellen Vektorraum V ist eine Abbildung V×V→ℝ, die symmetrisch (s(x,y)=s(y,x)), linear im ersten Argument und positiv definit ist (s(x,x)>0 für x≠0). Das Standardbeispiel im ℝⁿ ist s(x,y)=Σxᵢyᵢ=xᵀy; ein weiteres wichtiges Beispiel ist s(f,g):=∫₀¹f(x)g(x)dx auf dem Vektorraum der stetigen Funktionen auf [0,1]. Jedes Skalarprodukt induziert eine Norm (Skalarproduktnorm) über ‖x‖:=√(s(x,x)), mit der sich der euklidische Abstand ‖x−y‖ zwischen zwei Vektoren messen lässt.",
          "Für jedes Skalarprodukt und die davon induzierte Norm gilt die Cauchy-Schwarz-Ungleichung |s(x,y)| ≤ ‖x‖·‖y‖, mit Gleichheit genau dann, wenn x und y linear abhängig sind. Aus ihr folgt die Dreiecksungleichung ‖x+y‖≤‖x‖+‖y‖. Zwei Vektoren x,y heißen orthogonal, falls s(x,y)=0 gilt; für orthogonale Vektoren gilt der Satz des Pythagoras ‖x+y‖²=‖x‖²+‖y‖². Der Winkel zwischen x,y≠0 ist definiert über cos(∢(x,y)) := s(x,y)/(‖x‖·‖y‖) — dank Cauchy-Schwarz liegt dieser Ausdruck stets in [−1,1].",
        ],
        formulas: [
          "|s(x,y)| ≤ ‖x‖·‖y‖  (Cauchy-Schwarz)",
          "x⊥y (also s(x,y)=0) ⟹ ‖x+y‖² = ‖x‖²+‖y‖²  (Pythagoras)",
          "cos(∢(x,y)) = s(x,y)/(‖x‖·‖y‖)",
        ],
        formulasLatex: [
          "|s(x,y)| \\le \\|x\\|\\cdot\\|y\\|",
          "x\\perp y \\implies \\|x+y\\|^2 = \\|x\\|^2+\\|y\\|^2",
          "\\cos(\\angle(x,y)) = \\dfrac{s(x,y)}{\\|x\\|\\cdot\\|y\\|}",
        ],
        terms: [
          { term: "Skalarprodukt", definition: "Symmetrische, bilineare, positiv definite Abbildung V×V→ℝ." },
          { term: "Cauchy-Schwarz-Ungleichung", definition: "|s(x,y)|≤‖x‖‖y‖; Gleichheit genau bei linear abhängigen Vektoren." },
        ],
        examples: [
          "Für a=(3,0,4) und b=(4,3,0) gilt s(a,b)=3·4+0·3+4·0=12, ‖a‖=‖b‖=√(9+0+16)=5 (jeweils ein 3-4-5-Pythagoras-Tripel). Cauchy-Schwarz liefert |12|≤5·5=25 ✓, deutlich unterhalb der Gleichheit (a und b sind nicht parallel).",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Orthogonalität und das Gram-Schmidt-Verfahren",
        body: [
          "Eine Menge A⊂V heißt Orthonormalsystem, wenn ihre Vektoren paarweise orthogonal und jeweils auf Länge 1 normiert sind; ist A zusätzlich ein Erzeugendensystem von V, heißt A Orthonormalbasis (ONB). Aus einer beliebigen Basis {b1,...,bn} lässt sich mit dem Orthogonalisierungsverfahren von E. Schmidt (Gram-Schmidt-Verfahren) eine Orthonormalbasis konstruieren: u1:=b1/‖b1‖, und für j≥2 wird von bj zunächst die Projektion auf alle bereits konstruierten u1,...,u_{j−1} abgezogen, bevor das Ergebnis normiert wird.",
          "Für einen Untervektorraum U⊂V (mit Skalarprodukt s) ist das orthogonale Komplement U^⊥:={x∈V: s(x,u)=0 für alle u∈U} wieder ein Untervektorraum, und es gilt (bei endlicher Dimension) die orthogonale Zerlegung V=U⊕U^⊥ sowie (U^⊥)^⊥=U.",
        ],
        formulas: [
          "u1 = b1/‖b1‖, wj = bj − Σ_{i<j} s(ui,bj)·ui, uj = wj/‖wj‖",
          "V = U ⊕ U^⊥",
        ],
        formulasLatex: [
          "u_1 = \\dfrac{b_1}{\\|b_1\\|}, \\qquad w_j = b_j - \\sum_{i<j} s(u_i,b_j)u_i, \\qquad u_j = \\dfrac{w_j}{\\|w_j\\|}",
          "V = U \\oplus U^{\\perp}",
        ],
        terms: [
          { term: "Orthonormalbasis (ONB)", definition: "Basis aus paarweise orthogonalen, auf Länge 1 normierten Vektoren." },
          { term: "Orthogonales Komplement U^⊥", definition: "Menge aller zu U orthogonalen Vektoren; V=U⊕U^⊥ bei endlicher Dimension." },
        ],
        examples: [
          "Für b1=(1,0,1) und b2=(2,1,0) liefert Gram-Schmidt: u1=b1/‖b1‖=(1,0,1)/√2. Die Projektion von b2 auf u1 ist s(u1,b2)·u1 = (2/√2)·(1,0,1)/√2 = (1,0,1). Damit w2=b2−(1,0,1)=(1,1,−1), ‖w2‖=√3, also u2=(1,1,−1)/√3. Die Vektoren u1,u2 bilden ein Orthonormalsystem: s(u1,u2)=(1·1+0·1+1·(−1))/(√2·√3)=0 ✓.",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Orthogonale Projektion und Abstandsaufgaben im Rⁿ",
        body: [
          "Ist U⊂V ein Untervektorraum mit Orthonormalbasis {u1,...,uk}, so ist die orthogonale Projektion P_U(x) := Σ_j s(uj,x)·uj derjenige Punkt in U, der x am nächsten liegt (Approximationssatz): ‖x−P_U(x)‖ ≤ ‖x−u‖ für alle u∈U, mit Gleichheit nur für u=P_U(x). Der Abstand von x zu U ist damit d(x,U):=‖x−P_U(x)‖.",
          "Eine Hyperebene H im ℝⁿ (ein (n−1)-dimensionaler Teilraum bzw. eine affine Verschiebung davon) lässt sich durch einen Normalenvektor ⃗n und eine Konstante c in Hessescher Normalform beschreiben: H={⃗x∈ℝⁿ: ⃗n·⃗x=c}. Der Abstand eines Punktes ⃗p zu H berechnet sich dann besonders einfach als d(⃗p,H) = |⃗n·⃗p−c| / ‖⃗n‖.",
          "Allgemeiner lässt sich auch der Abstand zwischen zwei affinen Teilräumen (z. B. zwei Geraden, die sich nicht schneiden) bestimmen: Man wählt jeweils einen Punkt aus beiden Teilräumen, bildet den Verbindungsvektor und projiziert diesen orthogonal auf das Komplement der Summe der beiden Richtungsräume — die Länge dieser Projektion ist der gesuchte Abstand.",
        ],
        formulas: [
          "P_U(x) = Σ_j s(uj,x)·uj, d(x,U)=‖x−P_U(x)‖",
          "H={⃗x: ⃗n·⃗x=c}, d(⃗p,H) = |⃗n·⃗p−c| / ‖⃗n‖",
        ],
        formulasLatex: [
          "P_U(x) = \\sum_j s(u_j,x)u_j, \\qquad d(x,U) = \\|x-P_U(x)\\|",
          "H=\\{\\vec x: \\vec n\\cdot\\vec x = c\\}, \\qquad d(\\vec p, H) = \\dfrac{|\\vec n\\cdot\\vec p - c|}{\\|\\vec n\\|}",
        ],
        terms: [
          { term: "Orthogonale Projektion P_U", definition: "Abbildung, die x auf den nächstgelegenen Punkt in U abbildet; Fehler x−P_U(x) steht senkrecht auf U." },
          { term: "Hessesche Normalform", definition: "Darstellung einer Hyperebene über Normalenvektor ⃗n und Konstante c, die eine direkte Abstandsformel liefert." },
        ],
        examples: [
          "Für die Hyperebene H={⃗x∈ℝ³: 2x1−x2+2x3=9} (Normalenvektor ⃗n=(2,−1,2), ‖⃗n‖=√(4+1+4)=3) und den Punkt ⃗p=(1,1,1) ist der Abstand d(⃗p,H) = |2·1−1·1+2·1−9|/3 = |2−1+2−9|/3 = |−6|/3 = 2.",
        ],
      },
    ],
  },
  // ==================== Kapitel 4 ====================
  {
    id: "funktionsgrenzwerte-stetigkeit",
    number: 4,
    title: "Funktionsgrenzwerte und Stetigkeit",
    free: false,
    intro:
      "Stetigkeit formalisiert die Vorstellung einer Funktion, deren Graph sich 'ohne abzusetzen' zeichnen lässt. Dieses Kapitel führt Funktionsgrenzwerte und den Stetigkeitsbegriff ein und stellt die wichtigsten Sätze über stetige Funktionen auf abgeschlossenen Intervallen vor.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Häufungspunkte und Funktionsgrenzwerte",
        body: [
          "Ein Punkt x0∈ℝ̄=ℝ∪{−∞,∞} heißt Häufungspunkt einer Menge M⊂ℝ, wenn es eine Folge (xn) in M mit xn≠x0 für alle n gibt, die gegen x0 konvergiert — anschaulich: x0 lässt sich beliebig genau (aber nicht exakt) durch Punkte aus M annähern. Ist x0 ein Häufungspunkt des Definitionsbereichs D einer Funktion f: D→ℝ, sagt man, f habe in x0 den Grenzwert c∈ℝ, falls für JEDE Folge (xn) in D\\{x0} mit xn→x0 auch f(xn)→c gilt.",
          "Neben dem beidseitigen Grenzwert gibt es den linksseitigen und rechtsseitigen Grenzwert (Annäherung nur von links bzw. nur von rechts, notiert lim_{x↑x0} bzw. lim_{x↓x0}), sowie uneigentliche Grenzwerte (der Funktionswert wächst über alle Grenzen, lim f(x)=±∞). Ein beidseitiger Grenzwert existiert genau dann, wenn links- und rechtsseitiger Grenzwert existieren und übereinstimmen. Für Summen, Produkte und Quotienten (mit Grenzwert des Nenners ≠0) von Funktionen mit existierenden Grenzwerten gelten dieselben Rechenregeln wie für Folgengrenzwerte.",
        ],
        formulas: [
          "x0 Häufungspunkt von M ⟺ ∃ Folge xn∈M\\{x0} mit xn→x0",
          "lim_{x→x0} f(x)=c ⟺ für jede Folge xn→x0 in D\\{x0} gilt f(xn)→c",
        ],
        formulasLatex: [
          "x_0 \\text{ Häufungspunkt von } M \\iff \\exists\\, x_n\\in M\\setminus\\{x_0\\} \\text{ mit } x_n\\to x_0",
          "\\lim_{x\\to x_0} f(x) = c \\iff \\text{für jede Folge } x_n\\to x_0 \\text{ in } D\\setminus\\{x_0\\} \\text{ gilt } f(x_n)\\to c",
        ],
        terms: [
          { term: "Häufungspunkt einer Menge", definition: "Punkt x0, der sich durch eine Folge von Punkten aus M\\{x0} approximieren lässt." },
          { term: "Einseitiger Grenzwert", definition: "Funktionsgrenzwert, bei dem nur Annäherung von einer Seite (links bzw. rechts) betrachtet wird." },
        ],
        examples: [
          "Für f(x)=1/x (D=ℝ\\{0}) gilt lim_{x↓0} f(x)=∞ und lim_{x↑0} f(x)=−∞ — die einseitigen Grenzwerte existieren (uneigentlich), stimmen aber nicht überein, sodass der beidseitige Grenzwert in 0 nicht existiert. — Die Menge M=(0,3)∪{5} hat als Häufungspunkte genau das Intervall [0,3]: Jeder Punkt aus (0,3) lässt sich durch andere Punkte aus M annähern, ebenso die Randpunkte 0 und 3; der isolierte Punkt 5 dagegen ist selbst KEIN Häufungspunkt von M, da sich 5 nicht durch von 5 verschiedene Punkte aus M annähern lässt.",
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Stetigkeit und die ε-δ-Charakterisierung",
        body: [
          "Eine Funktion f: D→ℝ heißt stetig in x0∈D, wenn entweder x0 kein Häufungspunkt von D ist (dann ist f dort automatisch stetig), oder x0 Häufungspunkt von D ist und lim_{x→x0} f(x) = f(x0) gilt. Äquivalent zur Folgencharakterisierung ist die ε-δ-Charakterisierung: f ist stetig in x0, wenn es zu jedem ε>0 ein δ>0 gibt, sodass für alle x∈D mit |x−x0|<δ auch |f(x)−f(x0)|<ε gilt — anschaulich: kleine Änderungen des Arguments erzeugen beliebig kleine (kontrollierbare) Änderungen des Funktionswerts.",
          "Summen, Produkte, Quotienten (mit Nenner ≠0) und Verkettungen stetiger Funktionen sind wieder stetig. Häufig taucht die Aufgabe auf, eine an einer Stelle x0 zunächst nur durch einen Grenzwert definierbare Funktion so zu ergänzen, dass sie dort stetig wird (stetige Fortsetzung) — das gelingt genau dann, wenn der entsprechende Grenzwert existiert.",
        ],
        formulas: [
          "f stetig in x0 ⟺ ∀ε>0 ∃δ>0: |x−x0|<δ, x∈D ⟹ |f(x)−f(x0)|<ε",
        ],
        formulasLatex: [
          "f \\text{ stetig in } x_0 \\iff \\forall \\varepsilon>0\\ \\exists \\delta>0:\\ |x-x_0|<\\delta,\\ x\\in D \\implies |f(x)-f(x_0)|<\\varepsilon",
        ],
        terms: [
          { term: "ε-δ-Kriterium", definition: "Äquivalente Formulierung der Stetigkeit über kontrollierbare Abweichungen des Funktionswerts bei hinreichend kleinen Abweichungen des Arguments." },
          { term: "Stetige Fortsetzung", definition: "Ergänzung einer in x0 zunächst undefinierten Funktion um den Wert f(x0):=lim_{x→x0} f(x), sofern dieser Grenzwert existiert." },
        ],
        examples: [
          "Für f(x):=(e^(2x)−1−2x)/x² (x≠0) und f(0):=α ist f stetig in 0 genau für α=2: Mit der Taylor-Entwicklung e^(2x)=1+2x+2x²+O(x³) folgt (e^(2x)−1−2x)/x² = (2x²+O(x³))/x² → 2 für x→0. Also muss α=2 gewählt werden, damit f(0)=lim_{x→0} f(x) gilt.",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Zwischenwertsatz, Extrema stetiger Funktionen und Umkehrfunktionen",
        body: [
          "Der Zwischenwertsatz besagt: Ist f:[a,b]→ℝ stetig und liegt ein Wert c zwischen f(a) und f(b), so gibt es ein ξ∈[a,b] mit f(ξ)=c — insbesondere hat f eine Nullstelle in [a,b], falls f(a) und f(b) unterschiedliches Vorzeichen haben. Damit lassen sich Existenzaussagen über Lösungen von Gleichungen treffen, ohne die Lösung explizit angeben zu können. Die Min-Max-Eigenschaft (Satz vom Minimum und Maximum) ergänzt dies: Jede auf einem abgeschlossenen, beschränkten Intervall [a,b] stetige Funktion ist dort beschränkt und nimmt ihr Maximum sowie ihr Minimum tatsächlich an.",
          "Ist f:[a,b]→ℝ stetig und streng monoton, so ist f injektiv, bildet [a,b] auf ein Intervall ab, und die Umkehrfunktion f⁻¹ ist auf diesem Bildintervall ebenfalls stetig und streng monoton (im gleichen Sinn wie f). Dieses Prinzip liefert z. B. die Stetigkeit der Umkehrfunktionen von Exponentialfunktion (Logarithmus) und der Winkelfunktionen auf geeigneten Intervallen (arcsin, arccos, arctan).",
        ],
        formulas: [
          "Zwischenwertsatz: f stetig auf [a,b], c zwischen f(a),f(b) ⟹ ∃ξ∈[a,b]: f(ξ)=c",
          "f stetig auf [a,b] ⟹ f nimmt Maximum und Minimum auf [a,b] an",
        ],
        formulasLatex: [
          "f \\text{ stetig auf } [a,b],\\ c \\text{ zwischen } f(a),f(b) \\implies \\exists \\xi\\in[a,b]: f(\\xi)=c",
          "f \\text{ stetig auf } [a,b] \\implies f \\text{ nimmt Max. und Min. auf } [a,b] \\text{ an}",
        ],
        terms: [
          { term: "Zwischenwertsatz", definition: "Eine auf [a,b] stetige Funktion nimmt jeden Wert zwischen f(a) und f(b) an." },
          { term: "Min-Max-Eigenschaft", definition: "Eine auf einem abgeschlossenen, beschränkten Intervall stetige Funktion nimmt dort ihr Maximum und Minimum an." },
        ],
        examples: [
          "Die Funktion f(x)=x³+x−1 ist stetig mit f(0)=−1<0 und f(1)=1>0. Nach dem Zwischenwertsatz existiert also ein ξ∈(0,1) mit f(ξ)=0 — eine Nullstelle von f, ohne dass man sie explizit berechnen muss (numerisch liegt sie bei ξ≈0,682).",
        ],
      },
    ],
  },
  // ==================== Kapitel 5 ====================
  {
    id: "exponential-logarithmus-exkurs",
    number: 5,
    title: "Exkurs: Exponential- und Logarithmusfunktionen",
    free: false,
    intro:
      "Dieser kurze Exkurs stellt die allgemeine Exponential- und Logarithmusfunktion zu beliebiger Basis vor und vergleicht das Wachstumsverhalten von Potenz-, Exponential- und Logarithmusfunktionen — ein Werkzeug, das in Grenzwertaufgaben immer wieder gebraucht wird.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Die allgemeine Exponential- und Logarithmusfunktion",
        body: [
          "Für eine Basis a>0 mit a≠1 definiert man die allgemeine Exponentialfunktion durch a^x := e^(x·ln a) für x∈ℝ. Sie ist stetig, streng monoton (wachsend für a>1, fallend für 0<a<1) und bildet ℝ bijektiv auf (0,∞) ab. Die Umkehrfunktion heißt allgemeiner Logarithmus zur Basis a, log_a: (0,∞)→ℝ, und es gilt log_a(x) = ln(x)/ln(a) — insbesondere lässt sich jeder Logarithmus auf den natürlichen Logarithmus zurückführen.",
          "Aus dieser Definition folgen die vertrauten Rechenregeln: a^(x+y)=a^x·a^y, (a^x)^y=a^(xy), sowie für den Logarithmus log_a(xy)=log_a(x)+log_a(y) und log_a(x^r)=r·log_a(x). Der Logarithmus zur Basis 10 (dekadischer Logarithmus, log10) wird in Anwendungen häufig verwendet, etwa zur Darstellung von Größenordnungen.",
        ],
        formulas: [
          "a^x := e^(x·ln a), log_a(x) = ln(x)/ln(a)",
          "log_a(xy) = log_a(x)+log_a(y), log_a(x^r) = r·log_a(x)",
        ],
        formulasLatex: [
          "a^x := e^{x\\ln a}, \\qquad \\log_a(x) = \\dfrac{\\ln(x)}{\\ln(a)}",
          "\\log_a(xy) = \\log_a(x)+\\log_a(y), \\qquad \\log_a(x^r) = r\\log_a(x)",
        ],
        terms: [
          { term: "Allgemeine Exponentialfunktion", definition: "a^x := e^(x ln a) für Basis a>0, a≠1." },
          { term: "Allgemeiner Logarithmus log_a", definition: "Umkehrfunktion von a^x; log_a(x)=ln(x)/ln(a)." },
        ],
        examples: [
          "Gesucht ist die Lösung von 3^x=20. Logarithmieren liefert x·ln3=ln20, also x=ln(20)/ln(3)≈2,7268. Probe: 3^2,7268≈20 ✓. Umgeschrieben mit dem allgemeinen Logarithmus: x=log_3(20)=ln(20)/ln(3).",
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Wachstumsvergleich zwischen Potenz-, Exponential- und Logarithmusfunktionen",
        body: [
          "Für das Verhalten für x→∞ gilt eine feste Rangordnung im Wachstum: Jede Exponentialfunktion a^x mit a>1 wächst schneller als jede Potenzfunktion x^r (r>0 fest), das heißt lim_{x→∞} x^r/a^x = 0. Umgekehrt wächst jede Potenzfunktion x^r (r>0) schneller als jede Logarithmusfunktion: lim_{x→∞} log_a(x)/x^r = 0. Kurz: Logarithmus ≪ Potenz ≪ Exponentialfunktion im Wachstum für x→∞.",
          "Diese Vergleiche lassen sich mit der Regel von de l'Hospital (Kapitel 9) beweisen, indem man Zähler und Nenner wiederholt ableitet, bis sich der unbestimmte Ausdruck auflöst. Sie sind besonders nützlich, um Grenzwerte von Quotienten aus Potenz-, Exponential- und Logarithmustermen ohne aufwendige Rechnung abzuschätzen.",
        ],
        formulas: [
          "lim_{x→∞} x^r/a^x = 0  (a>1, r>0 fest)",
          "lim_{x→∞} log_a(x)/x^r = 0  (r>0 fest)",
        ],
        formulasLatex: [
          "\\lim_{x\\to\\infty} \\dfrac{x^r}{a^x} = 0 \\quad (a>1,\\ r>0)",
          "\\lim_{x\\to\\infty} \\dfrac{\\log_a(x)}{x^r} = 0 \\quad (r>0)",
        ],
        terms: [{ term: "Wachstumshierarchie", definition: "Für x→∞ gilt: Logarithmus wächst langsamer als jede Potenzfunktion, die wiederum langsamer wächst als jede Exponentialfunktion mit Basis >1." }],
        examples: [
          "lim_{x→∞} x⁵/e^x = 0, da die Exponentialfunktion jede Potenzfunktion für x→∞ dominiert (fünffache Anwendung von de l'Hospital bestätigt dies: nach 5 Ableitungen steht 120/e^x im Zähler/Nenner-Verhältnis, was gegen 0 geht). Ebenso gilt lim_{x→∞} ln(x)/√x = 0, da √x als Potenzfunktion (r=1/2) den Logarithmus dominiert.",
        ],
      },
    ],
  },
  // ==================== Kapitel 6 ====================
  {
    id: "lineare-abbildungen-matrizen",
    number: 6,
    title: "Lineare Abbildungen und Matrizen",
    free: false,
    intro:
      "Lineare Abbildungen sind Funktionen zwischen Vektorräumen, die Addition und skalare Multiplikation respektieren — sie lassen sich vollständig durch Matrizen beschreiben. Dieses Kapitel verbindet den abstrakten Abbildungsbegriff mit der konkreten Rechnung mit Matrizen.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Lineare Abbildungen, Kern und Bild",
        body: [
          "Eine Abbildung φ: V→W zwischen zwei K-Vektorräumen heißt linear, wenn φ(⃗x+⃗y)=φ(⃗x)+φ(⃗y) und φ(λ⃗x)=λφ(⃗x) für alle ⃗x,⃗y∈V, λ∈K gilt. Typische Beispiele im ℝ² sind die Spiegelung an einer Achse, die Projektion auf eine Achse, und die Drehung um einen festen Winkel — jede (m×n)-Matrix A definiert über φ(⃗x):=A⃗x eine lineare Abbildung von K^n nach K^m, und tatsächlich lässt sich jede lineare Abbildung zwischen endlichdimensionalen Vektorräumen (bezüglich fest gewählter Basen) auf diese Weise als Matrix darstellen.",
          "Der Kern Kern(φ):={⃗x∈V : φ(⃗x)=⃗0} ist ein Untervektorraum von V, das Bild Bild(φ):={φ(⃗x): ⃗x∈V} ein Untervektorraum von W. Der Rang Rang(φ):=dim(Bild(φ)) misst die Dimension des tatsächlich erreichten Teils von W. Es gilt die Dimensionsformel dim(V)=Rang(φ)+dim(Kern(φ)), und φ ist genau dann injektiv, wenn Kern(φ)={⃗0} gilt.",
        ],
        formulas: [
          "φ(⃗x+⃗y)=φ(⃗x)+φ(⃗y), φ(λ⃗x)=λφ(⃗x)",
          "dim(V) = Rang(φ) + dim(Kern(φ))",
          "φ injektiv ⟺ Kern(φ)={⃗0}",
        ],
        formulasLatex: [
          "\\varphi(\\vec x+\\vec y)=\\varphi(\\vec x)+\\varphi(\\vec y), \\qquad \\varphi(\\lambda\\vec x)=\\lambda\\varphi(\\vec x)",
          "\\dim(V) = \\operatorname{Rang}(\\varphi) + \\dim(\\operatorname{Kern}(\\varphi))",
          "\\varphi \\text{ injektiv} \\iff \\operatorname{Kern}(\\varphi) = \\{\\vec 0\\}",
        ],
        terms: [
          { term: "Lineare Abbildung", definition: "Abbildung φ: V→W mit φ(⃗x+⃗y)=φ(⃗x)+φ(⃗y) und φ(λ⃗x)=λφ(⃗x)." },
          { term: "Kern und Bild", definition: "Kern(φ)={⃗x: φ(⃗x)=⃗0} und Bild(φ)={φ(⃗x): ⃗x∈V}, beides Untervektorräume." },
        ],
        examples: [
          "Für A=[[1,1,2],[2,1,3],[3,2,5]] (Rang(A)=2, da die dritte Zeile die Summe der ersten beiden ist) berechnet man den Kern durch Lösen von A⃗x=⃗0: Der Kern wird von (−1,−1,1) aufgespannt (Probe: A·(−1,−1,1)=(−1−1+2, −2−1+3, −3−2+5)=(0,0,0) ✓). Die Dimensionsformel bestätigt: dim(ℝ³)=3=Rang(A)+dim(Kern(A))=2+1.",
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Rang einer Matrix über die Zeilenstufenform",
        body: [
          "Der Rang einer (m×n)-Matrix A lässt sich praktisch über den Gauß-Algorithmus (Kapitel 1.2) bestimmen: Man bringt A durch äquivalente Zeilenumformungen auf Zeilenstufenform; Rang(A) ist dann genau die Anzahl der von Null verschiedenen Zeilen (äquivalent: die Anzahl der Pivotelemente bzw. führenden Einträge). Diese Größe heißt auch Zeilenrang RZ(A). Führt man dieselbe Prozedur mit den Spalten statt den Zeilen durch, erhält man den Spaltenrang RS(A) — ein zentrales Resultat der linearen Algebra besagt, dass für jede Matrix RZ(A)=RS(A) gilt, weshalb man schlicht von 'dem' Rang Rang(A) spricht.",
          "Der so berechnete Rang stimmt mit dem in 6.1 definierten Rang(φ)=dim(Bild(φ)) der zugehörigen linearen Abbildung φ(⃗x)=A⃗x überein — die Anzahl der Pivotspalten nach dem Gauß-Algorithmus entspricht also genau der Dimension des Bildes von φ.",
        ],
        formulas: [
          "Rang(A) = Anzahl der Pivotzeilen (bzw. -spalten) in Zeilenstufenform",
          "Zeilenrang RZ(A) = Spaltenrang RS(A) =: Rang(A)",
        ],
        formulasLatex: [
          "\\operatorname{Rang}(A) = \\text{Anzahl der Pivotzeilen in Zeilenstufenform}",
          "R_Z(A) = R_S(A) =: \\operatorname{Rang}(A)",
        ],
        terms: [{ term: "Zeilenrang/Spaltenrang", definition: "Anzahl linear unabhängiger Zeilen bzw. Spalten einer Matrix; stets gleich, daher schlicht 'Rang(A)'." }],
        examples: [
          "Für D=[[1,2,3],[2,4,7],[1,2,4]] liefert der Gauß-Algorithmus (Zeile 2 minus 2×Zeile 1, Zeile 3 minus Zeile 1) zunächst [[1,2,3],[0,0,1],[0,0,1]], dann (Zeile 3 minus Zeile 2) [[1,2,3],[0,0,1],[0,0,0]] — genau zwei von Null verschiedene Zeilen, also Rang(D)=2.",
        ],
      },
      {
        id: "6-3",
        heading: "6.3 Matrixdarstellung, Matrizenmultiplikation und Isomorphismen",
        body: [
          "Sind φ: U→V und ψ: V→W lineare Abbildungen mit Darstellungsmatrizen A (bzgl. fester Basen von U,V) bzw. B (bzgl. der Basen von V,W), so hat die Verkettung ψ∘φ: U→W die Darstellungsmatrix B·A — das Matrixprodukt entspricht also genau der Hintereinanderausführung linearer Abbildungen. Für eine (p×n)-Matrix B und eine (n×m)-Matrix A ist das Produkt BA eine (p×m)-Matrix mit Einträgen (BA)_{ik} = Σ_j b_{ij}a_{jk} — Zeile i von B mal Spalte k von A.",
          "Eine lineare Abbildung φ: V→W heißt Isomorphismus, wenn sie bijektiv ist; in diesem Fall schreibt man V≅W (V und W sind isomorph). Endlichdimensionale K-Vektorräume sind genau dann isomorph, wenn sie dieselbe Dimension haben — insbesondere ist jeder n-dimensionale K-Vektorraum isomorph zu K^n. So ist etwa der Vektorraum M_{p×n}(K) aller (p×n)-Matrizen isomorph zu K^{pn}, da man eine Matrix einfach spaltenweise zu einem langen Vektor 'auseinanderziehen' kann.",
        ],
        formulas: [
          "(BA)_{ik} = Σ_{j} b_{ij}a_{jk}",
          "V≅W ⟺ dim(V)=dim(W)  (endlichdimensional)",
        ],
        formulasLatex: [
          "(BA)_{ik} = \\sum_{j} b_{ij}a_{jk}",
          "V\\cong W \\iff \\dim(V)=\\dim(W)",
        ],
        terms: [
          { term: "Matrizenmultiplikation", definition: "(BA)_{ik}=Σ_j b_{ij}a_{jk}; entspricht der Verkettung der zugehörigen linearen Abbildungen." },
          { term: "Isomorphismus", definition: "Bijektive lineare Abbildung; zwei endlichdimensionale Vektorräume sind genau dann isomorph, wenn sie dieselbe Dimension haben." },
        ],
        examples: [
          "Für B=[[1,2],[3,4]] und A=[[2,0],[1,2]] ist B·A=[[1·2+2·1, 1·0+2·2],[3·2+4·1, 3·0+4·2]]=[[4,4],[10,8]].",
        ],
      },
      {
        id: "6-4",
        heading: "6.4 Reguläre Matrizen und die Inverse",
        body: [
          "Eine quadratische (n×n)-Matrix A heißt regulär (invertierbar), wenn es eine Matrix A⁻¹ mit A·A⁻¹=A⁻¹·A=E (Einheitsmatrix) gibt — äquivalent: die zugehörige lineare Abbildung ist bijektiv, äquivalent: Rang(A)=n, äquivalent: det(A)≠0. Die Inverse berechnet man praktisch, indem man die Matrix (A|E) durch den Gauß-Algorithmus auf die Form (E|A⁻¹) bringt — dieselben Zeilenumformungen, die A in die Einheitsmatrix überführen, überführen E gleichzeitig in A⁻¹.",
          "Zusätzlich definiert man die transponierte Matrix Aᵀ, die aus A durch Vertauschen von Zeilen und Spalten entsteht: (Aᵀ)_{ij}=a_{ji}. Eine quadratische Matrix heißt symmetrisch, wenn A=Aᵀ gilt.",
        ],
        formulas: [
          "A regulär ⟺ Rang(A)=n ⟺ det(A)≠0",
          "(A|E) →(Gauß)→ (E|A⁻¹)",
          "(Aᵀ)_{ij} = a_{ji}",
        ],
        formulasLatex: [
          "A \\text{ regulär} \\iff \\operatorname{Rang}(A)=n \\iff \\det(A)\\neq 0",
          "(A\\,|\\,E) \\xrightarrow{\\text{Gauß}} (E\\,|\\,A^{-1})",
          "(A^{\\mathsf T})_{ij} = a_{ji}",
        ],
        terms: [
          { term: "Reguläre Matrix", definition: "Invertierbare quadratische Matrix; äquivalent zu vollem Rang bzw. det(A)≠0." },
          { term: "Transponierte Matrix Aᵀ", definition: "Matrix mit vertauschten Zeilen und Spalten; A heißt symmetrisch, falls A=Aᵀ." },
        ],
        examples: [
          "Für C=[[2,1,1],[1,1,1],[1,1,2]] (det(C)=1≠0, also regulär, äquivalent Rang(C)=3) liefert der Gauß-Algorithmus angewendet auf (C|E) die Inverse C⁻¹=[[1,−1,0],[−1,3,−1],[0,−1,1]]. Probe (erste Zeile von C mal erste Spalte von C⁻¹): 2·1+1·(−1)+1·0=1 ✓ (Diagonaleintrag der Einheitsmatrix).",
        ],
      },
    ],
  },
  // ==================== Kapitel 7 ====================
  {
    id: "differenzierbarkeit-ableitungsregeln",
    number: 7,
    title: "Differenzierbarkeit und Ableitungsregeln",
    free: false,
    intro:
      "Die Ableitung misst die momentane Änderungsrate einer Funktion und ist die Grundlage für Kurvendiskussion, Optimierung und Approximation. Dieses Kapitel führt den Ableitungsbegriff ein und stellt die grundlegenden Ableitungsregeln vor.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Die Ableitung und Differenzierbarkeit",
        body: [
          "Für eine Funktion f: D→ℝ und einen Punkt x0∈D, der Häufungspunkt von D ist, heißt f in x0 differenzierbar, wenn der Grenzwert des Differenzenquotienten f'(x0) := lim_{x→x0} (f(x)−f(x0))/(x−x0) existiert. Geometrisch beschreibt der Differenzenquotient die Steigung der Sekante durch (x0,f(x0)) und (x,f(x)); im Grenzübergang x→x0 wird daraus die Steigung der Tangente an den Graphen von f im Punkt x0.",
          "Analog zu den einseitigen Funktionsgrenzwerten definiert man einseitige Ableitungen (links- bzw. rechtsseitig), indem man den Grenzübergang nur von einer Seite zulässt; f ist genau dann differenzierbar in x0, wenn beide einseitigen Ableitungen existieren und übereinstimmen. Jede in x0 differenzierbare Funktion ist dort auch stetig — die Umkehrung gilt jedoch nicht (die Betragsfunktion ist in 0 stetig, aber nicht differenzierbar, da linke und rechte Ableitung dort −1 bzw. 1 sind).",
        ],
        formulas: ["f'(x0) = lim_{x→x0} (f(x)−f(x0))/(x−x0)"],
        formulasLatex: ["f'(x_0) = \\lim_{x\\to x_0} \\dfrac{f(x)-f(x_0)}{x-x_0}"],
        terms: [
          { term: "Differenzenquotient", definition: "(f(x)−f(x0))/(x−x0); Steigung der Sekante durch (x0,f(x0)) und (x,f(x))." },
          { term: "Differenzierbarkeit", definition: "Existenz des Grenzwerts des Differenzenquotienten für x→x0; jede differenzierbare Funktion ist stetig, nicht aber umgekehrt." },
        ],
        examples: [
          "Für f(x)=|x| ist die rechtsseitige Ableitung in x0=0 gleich lim_{x↓0}(|x|−0)/(x−0) = lim_{x↓0} x/x = 1, die linksseitige Ableitung gleich lim_{x↑0}(−x)/(x)=−1. Da beide einseitigen Ableitungen existieren, aber nicht übereinstimmen, ist f in x0=0 nicht differenzierbar (obwohl f dort stetig ist).",
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Ableitungsregeln: Produkt-, Quotienten- und Kettenregel",
        body: [
          "Sind f, g in x0 differenzierbar, so auch f+g, f·g und (bei g(x0)≠0) f/g, mit (f+g)'=f'+g', (Produktregel) (fg)'=f'g+fg', und (Quotientenregel) (f/g)'=(f'g−fg')/g². Ist zusätzlich g in x0 und f in g(x0) differenzierbar, so ist auch die Verkettung f∘g in x0 differenzierbar (Kettenregel): (f∘g)'(x0) = f'(g(x0))·g'(x0) — 'äußere Ableitung mal innere Ableitung'.",
          "Diese Regeln zusammen mit den Ableitungen der elementaren Funktionen (Potenzfunktion: (x^n)'=n·x^(n−1); Exponentialfunktion: (e^x)'=e^x; Sinus/Kosinus: (sin x)'=cos x, (cos x)'=−sin x) erlauben es, die Ableitung praktisch jeder aus elementaren Funktionen zusammengesetzten Funktion zu berechnen.",
        ],
        formulas: [
          "(fg)' = f'g+fg'  (Produktregel)",
          "(f/g)' = (f'g−fg')/g²  (Quotientenregel)",
          "(f∘g)'(x0) = f'(g(x0))·g'(x0)  (Kettenregel)",
        ],
        formulasLatex: [
          "(fg)' = f'g+fg'",
          "\\left(\\dfrac{f}{g}\\right)' = \\dfrac{f'g-fg'}{g^2}",
          "(f\\circ g)'(x_0) = f'(g(x_0))\\cdot g'(x_0)",
        ],
        terms: [
          { term: "Kettenregel", definition: "Ableitungsregel für Verkettungen: (f∘g)'=f'(g)·g' — äußere mal innere Ableitung." },
        ],
        examples: [
          "Für f(x)=x³−3x²+2 ist f'(x)=3x²−6x, also f'(1)=3−6=−3. — Für h(x)=sin(x²+1) liefert die Kettenregel (äußere Funktion sin, innere Funktion x²+1) h'(x)=cos(x²+1)·2x=2x·cos(x²+1).",
        ],
      },
      {
        id: "7-3",
        heading: "7.3 Ableitung der Umkehrfunktion und elementare Ableitungen",
        body: [
          "Ist f in x0 differenzierbar mit f'(x0)≠0 und besitzt f eine Umkehrfunktion f⁻¹, die in y0:=f(x0) stetig ist, so ist f⁻¹ in y0 differenzierbar mit (f⁻¹)'(y0) = 1/f'(x0) = 1/f'(f⁻¹(y0)). Damit lassen sich die Ableitungen von Umkehrfunktionen elementarer Funktionen bestimmen: Aus (e^x)'=e^x folgt (ln x)'=1/x; aus (tan x)'=1/cos²x folgt (arctan x)'=1/(1+x²).",
          "Auf demselben Weg ergeben sich die Ableitungen der übrigen Arkusfunktionen: Aus (sin x)'=cos x folgt für die Umkehrfunktion arcsin (arcsin y)' = 1/cos(arcsin y) = 1/√(1−y²) (da cos(arcsin y)=√(1−sin²(arcsin y))=√(1−y²) für y∈(−1,1)); analog liefert (cos x)'=−sin x die Ableitung (arccos y)' = −1/√(1−y²).",
          "Für die allgemeine Potenzfunktion x^a (a∈ℝ, x>0), definiert über x^a:=e^(a·ln x), liefert die Kettenregel (x^a)' = e^(a·ln x)·a/x = a·x^a/x = a·x^(a−1) — dieselbe Formel wie für ganzzahlige Exponenten gilt also auch für beliebige reelle Exponenten.",
        ],
        formulas: [
          "(f⁻¹)'(y0) = 1/f'(x0)  mit y0=f(x0)",
          "(ln x)' = 1/x, (arctan x)' = 1/(1+x²)",
          "(arcsin x)' = 1/√(1−x²), (arccos x)' = −1/√(1−x²)",
          "(x^a)' = a·x^(a−1)  für a∈ℝ, x>0",
        ],
        formulasLatex: [
          "(f^{-1})'(y_0) = \\dfrac{1}{f'(x_0)}, \\quad y_0=f(x_0)",
          "(\\ln x)' = \\dfrac{1}{x}, \\qquad (\\arctan x)' = \\dfrac{1}{1+x^2}",
          "(\\arcsin x)' = \\dfrac{1}{\\sqrt{1-x^2}}, \\qquad (\\arccos x)' = -\\dfrac{1}{\\sqrt{1-x^2}}",
          "(x^a)' = a\\cdot x^{a-1} \\quad (a\\in\\mathbb R,\\ x>0)",
        ],
        terms: [{ term: "Ableitung der Umkehrfunktion", definition: "(f⁻¹)'(y0)=1/f'(x0) mit y0=f(x0), sofern f'(x0)≠0." }],
        examples: [
          "Mit (arctan x)'=1/(1+x²) ergibt sich die Steigung des Graphen von arctan im Punkt x=1: (arctan)'(1) = 1/(1+1²) = 1/2. — Mit (arcsin x)'=1/√(1−x²) ergibt sich bei x=0,6: (arcsin)'(0,6) = 1/√(1−0,36) = 1/√0,64 = 1/0,8 = 1,25.",
        ],
      },
    ],
  },
  // ==================== Kapitel 8 ====================
  {
    id: "extremwerte-mittelwertsatz-kurvendiskussion",
    number: 8,
    title: "Extremwerte, Mittelwertsatz und Kurvendiskussion",
    free: false,
    intro:
      "Mit der Ableitung lassen sich lokale Hoch- und Tiefpunkte einer Funktion systematisch finden, das globale Änderungsverhalten über den Mittelwertsatz kontrollieren, und der Graph einer Funktion vollständig charakterisieren (Kurvendiskussion). Als durchgehendes Beispiel dient in diesem Kapitel die Funktion f(x)=x³−3x.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Lokale und globale Extrema",
        body: [
          "Eine Funktion f: D→ℝ hat in x0∈D eine lokale Maximalstelle, wenn es ein δ>0 gibt, sodass f(x)≤f(x0) für alle x∈D mit |x−x0|<δ gilt (analog lokale Minimalstelle mit ≥); gilt die Ungleichung sogar für ganz D, spricht man von einer globalen Extremalstelle. Ist x0 eine lokale Extremalstelle im Inneren von D und ist f dort differenzierbar, so muss notwendigerweise f'(x0)=0 gelten — diese notwendige Bedingung liefert die 'extremwertverdächtigen Punkte' (kritische Punkte), an denen lokale Extrema überhaupt nur auftreten können.",
          "Die Umkehrung gilt nicht: f'(x0)=0 bedeutet nicht automatisch, dass x0 eine lokale Extremstelle ist (Gegenbeispiel: f(x)=x³ mit f'(0)=0, aber x0=0 ist weder Maximal- noch Minimalstelle, sondern ein Sattelpunkt/Wendepunkt). Ein hinreichendes Kriterium liefert die zweite Ableitung: Ist f'(x0)=0 und f''(x0)>0, liegt eine strenge lokale Minimalstelle vor; ist f''(x0)<0, eine strenge lokale Maximalstelle.",
        ],
        formulas: [
          "Notwendig für lokales Extremum im Inneren: f'(x0)=0",
          "Hinreichend: f'(x0)=0, f''(x0)>0 ⟹ lokales Minimum; f''(x0)<0 ⟹ lokales Maximum",
        ],
        formulasLatex: [
          "\\text{notwendig: } f'(x_0)=0",
          "\\text{hinreichend: } f'(x_0)=0,\\ f''(x_0)>0 \\implies \\text{lok. Min.};\\quad f''(x_0)<0 \\implies \\text{lok. Max.}",
        ],
        terms: [
          { term: "Extremwertverdächtiger Punkt", definition: "Punkt x0 mit f'(x0)=0 (notwendige Bedingung für ein lokales Extremum im Inneren des Definitionsbereichs)." },
        ],
        examples: [
          "Für f(x)=x³−3x ist f'(x)=3x²−3=0 genau für x=±1. Es gilt f''(x)=6x, also f''(−1)=−6<0 (strenge lokale Maximalstelle, f(−1)=−1+3=2) und f''(1)=6>0 (strenge lokale Minimalstelle, f(1)=1−3=−2).",
        ],
      },
      {
        id: "8-2",
        heading: "8.2 Der Satz von Rolle und der Mittelwertsatz",
        body: [
          "Der Satz von Rolle besagt: Ist f auf [a,b] stetig, auf (a,b) differenzierbar und gilt f(a)=f(b), so existiert ein ξ∈(a,b) mit f'(ξ)=0. Er folgt direkt aus der Min-Max-Eigenschaft stetiger Funktionen und der notwendigen Bedingung für lokale Extrema. Der (erste) Mittelwertsatz der Differentialrechnung verallgemeinert dies: Ist f auf [a,b] stetig und auf (a,b) differenzierbar, so existiert ein ξ∈(a,b) mit f'(ξ) = (f(b)−f(a))/(b−a) — die Sekantensteigung zwischen den Endpunkten wird an mindestens einer Stelle als Tangentensteigung realisiert.",
          "Aus dem Mittelwertsatz folgen unmittelbar die Monotoniekriterien: Gilt f'(x)≥0 (bzw. >0, ≤0, <0) für alle x∈(a,b), so ist f auf [a,b] monoton wachsend (streng wachsend, fallend, streng fallend). Der zweite Mittelwertsatz verallgemeinert den ersten auf zwei Funktionen gleichzeitig und ist die Grundlage für den Beweis der Regel von de l'Hospital (Kapitel 9).",
        ],
        formulas: [
          "Satz von Rolle: f(a)=f(b) ⟹ ∃ξ∈(a,b): f'(ξ)=0",
          "Mittelwertsatz: ∃ξ∈(a,b): f'(ξ) = (f(b)−f(a))/(b−a)",
        ],
        formulasLatex: [
          "\\text{Satz von Rolle: } f(a)=f(b) \\implies \\exists \\xi\\in(a,b): f'(\\xi)=0",
          "\\text{Mittelwertsatz: } \\exists \\xi\\in(a,b): f'(\\xi) = \\dfrac{f(b)-f(a)}{b-a}",
        ],
        terms: [{ term: "Mittelwertsatz der Differentialrechnung", definition: "Es gibt eine Stelle ξ∈(a,b), an der die Tangentensteigung gleich der Sekantensteigung zwischen a und b ist." }],
        examples: [
          "Für f(x)=x² auf [0,2] liefert der Mittelwertsatz ein ξ∈(0,2) mit f'(ξ)=(f(2)−f(0))/(2−0)=(4−0)/2=2. Wegen f'(x)=2x löst man 2ξ=2, also ξ=1 — tatsächlich liegt ξ=1 im offenen Intervall (0,2).",
        ],
      },
      {
        id: "8-3",
        heading: "8.3 Konvexität, Wendepunkte und Kurvendiskussion",
        body: [
          "Eine zweimal differenzierbare Funktion f heißt konvex auf einem Intervall I, wenn f''(x)≥0 für alle x∈I gilt (der Graph liegt dann stets oberhalb jeder Tangente); sie heißt konkav, wenn f''(x)≤0 gilt. Ein Wendepunkt ist eine Stelle, an der f von konvex zu konkav wechselt (oder umgekehrt); notwendig dafür ist f''(x0)=0, hinreichend ist zusätzlich ein Vorzeichenwechsel von f'' bei x0 (äquivalent: f'''(x0)≠0, falls f dreimal differenzierbar ist).",
          "Eine vollständige Kurvendiskussion einer Funktion umfasst typischerweise: Definitionsbereich und Symmetrie, Nullstellen, Verhalten an den Rändern des Definitionsbereichs (Grenzwerte), Monotonie und lokale Extrema (über f'), sowie Konvexität und Wendepunkte (über f'').",
        ],
        formulas: [
          "f konvex auf I ⟺ f''(x)≥0 für alle x∈I",
          "Notwendig für Wendepunkt: f''(x0)=0",
        ],
        formulasLatex: [
          "f \\text{ konvex auf } I \\iff f''(x)\\ge 0 \\ \\text{für alle } x\\in I",
          "\\text{notwendig für Wendepunkt: } f''(x_0)=0",
        ],
        terms: [
          { term: "Konvexität/Konkavität", definition: "f konvex ⟺ f''≥0 (Graph oberhalb der Tangenten); f konkav ⟺ f''≤0." },
          { term: "Wendepunkt", definition: "Stelle, an der f''(x0)=0 gilt und f'' das Vorzeichen wechselt (Übergang konvex↔konkav)." },
        ],
        examples: [
          "Kurvendiskussion von f(x)=x³−3x: Nullstellen bei x=0 und x=±√3 (aus x³−3x=x(x²−3)=0). Aus 8.1: lokales Maximum bei x=−1 (Wert 2), lokales Minimum bei x=1 (Wert −2). Die zweite Ableitung f''(x)=6x wechselt bei x=0 das Vorzeichen (negativ für x<0, positiv für x>0), also ist x0=0 ein Wendepunkt mit f(0)=0. Da f ungerade ist (f(−x)=−f(x)), ist der Graph punktsymmetrisch zum Ursprung — insgesamt ergibt sich ein s-förmiger Verlauf mit Maximum bei (−1,2), Wendepunkt bei (0,0) und Minimum bei (1,−2).",
        ],
      },
      {
        id: "8-4",
        heading: "8.4 Der Zwischenwertsatz der Ableitung (Darboux-Eigenschaft)",
        body: [
          "Auch wenn die Ableitung f' einer differenzierbaren Funktion selbst nicht stetig sein muss, besitzt sie dennoch eine Zwischenwert-Eigenschaft: Ist f auf [a,b] differenzierbar, so nimmt f' jeden Wert zwischen f'(a) und f'(b) an — es gibt also zu jedem c zwischen f'(a) und f'(b) ein ξ∈[a,b] mit f'(ξ)=c. Dieses Resultat (nach J. G. Darboux auch Darboux-Eigenschaft genannt) ist bemerkenswert, weil es nicht aus dem gewöhnlichen Zwischenwertsatz (Kapitel 4.3) folgt, der Stetigkeit von f' voraussetzen würde.",
          "Eine wichtige Konsequenz: Besitzt f' auf [a,b] keine Nullstelle, so hat f' insgesamt ein konstantes Vorzeichen auf [a,b] (sonst müsste f' nach der Darboux-Eigenschaft auch den Wert 0 annehmen) — damit ist f auf [a,b] streng monoton.",
        ],
        formulas: ["f differenzierbar auf [a,b], c zwischen f'(a),f'(b) ⟹ ∃ξ∈[a,b]: f'(ξ)=c"],
        formulasLatex: ["f \\text{ diffbar auf } [a,b],\\ c \\text{ zwischen } f'(a),f'(b) \\implies \\exists \\xi\\in[a,b]: f'(\\xi)=c"],
        terms: [{ term: "Darboux-Eigenschaft", definition: "Die Ableitung einer differenzierbaren Funktion nimmt jeden Zwischenwert an, auch wenn sie selbst nicht stetig ist." }],
        examples: [
          "Für f(x)=x³−3x (8.1) gilt f'(x)=3x²−3 mit f'(−2)=9 und f'(2)=9, aber auch f'(0)=−3 — nach der Darboux-Eigenschaft muss f' auf [−2,2] jeden Wert zwischen −3 und 9 mindestens einmal annehmen, was sich hier direkt an der Parabel f'(x)=3x²−3 nachvollziehen lässt (z. B. wird der Wert c=0 bei ξ=±1 angenommen).",
        ],
      },
    ],
  },
  // ==================== Kapitel 9 ====================
  {
    id: "lhospital-taylor-exkurs",
    number: 9,
    title: "Exkurs: Die Regel von de l'Hospital und der Satz von Taylor",
    free: false,
    intro:
      "Dieser Exkurs stellt zwei mächtige Werkzeuge vor, die auf dem Mittelwertsatz aufbauen: die Regel von de l'Hospital zur Berechnung unbestimmter Grenzwerte, und den Satz von Taylor zur polynomiellen Approximation einer Funktion in der Nähe eines Punktes.",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Die Regel von de l'Hospital",
        body: [
          "Streben sowohl f(x) als auch g(x) für x→x0 gegen 0 (Fall '0/0') oder beide gegen ±∞ (Fall '∞/∞'), und existiert der Grenzwert lim_{x→x0} f'(x)/g'(x), so existiert auch lim_{x→x0} f(x)/g(x) und beide Grenzwerte stimmen überein: lim_{x→x0} f(x)/g(x) = lim_{x→x0} f'(x)/g'(x). Die Regel gilt analog für einseitige Grenzwerte und für x0=±∞, und darf bei Bedarf mehrfach hintereinander angewendet werden, solange der jeweils neue Quotient wieder die Form 0/0 oder ∞/∞ hat.",
          "Andere unbestimmte Formen (0·∞, ∞−∞, 0⁰, 1^∞, ∞⁰) lassen sich durch algebraische Umformung (z. B. Erweitern auf einen Bruch, oder Logarithmieren bei Potenzausdrücken) auf die Form 0/0 oder ∞/∞ zurückführen und dann mit de l'Hospital behandeln.",
        ],
        formulas: ["lim_{x→x0} f(x)/g(x) = lim_{x→x0} f'(x)/g'(x)  (Fall 0/0 oder ∞/∞)"],
        formulasLatex: ["\\lim_{x\\to x_0} \\dfrac{f(x)}{g(x)} = \\lim_{x\\to x_0} \\dfrac{f'(x)}{g'(x)} \\quad (\\text{Fall } 0/0 \\text{ oder } \\infty/\\infty)"],
        terms: [{ term: "Regel von de l'Hospital", definition: "Für unbestimmte Ausdrücke 0/0 oder ∞/∞ gilt lim f/g = lim f'/g', sofern der rechte Grenzwert existiert." }],
        examples: [
          "Gesucht ist lim_{x→0} (tan(x)−x)/x³ (Form 0/0, da tan(0)=0). Erste Anwendung: (1/cos²(x) − 1)/(3x²) (wieder 0/0, da cos(0)=1). Zweite Anwendung liefert nach Vereinfachung 2·sin(x)/(cos³(x))/(6x) = sin(x)/(3x·cos³(x)) (wieder 0/0). Dritte Anwendung: cos(x)/(3cos³(x)−9x·cos²(x)·sin(x)) → 1/3 für x→0. Also lim_{x→0} (tan(x)−x)/x³ = 1/3.",
        ],
      },
      {
        id: "9-2",
        heading: "9.2 Der Satz von Taylor und Taylorpolynome",
        body: [
          "Ist f in x0 (n+1)-mal differenzierbar, approximiert das n-te Taylorpolynom T_n(x;x0) := Σ_{k=0}^n f^(k)(x0)/k! · (x−x0)^k die Funktion f in der Nähe von x0. Der Satz von Taylor mit Lagrange-Restglied quantifiziert den Approximationsfehler: f(x) = T_n(x;x0) + R_n(x), wobei R_n(x) = f^(n+1)(ξ)/(n+1)! · (x−x0)^(n+1) für ein (von x abhängiges) ξ zwischen x0 und x — für n=0 ist dies genau der Mittelwertsatz.",
          "Konvergiert die Folge der Restglieder für n→∞ gegen 0, stimmt die Taylorreihe Σ_{k=0}^∞ f^(k)(x0)/k! · (x−x0)^k in einer Umgebung von x0 mit f überein. Dies gilt etwa für die Exponentialfunktion (für alle x∈ℝ) sowie für Sinus und Kosinus.",
        ],
        formulas: [
          "T_n(x;x0) = Σ_{k=0}^n f^(k)(x0)/k! · (x−x0)^k",
          "f(x) = T_n(x;x0) + f^(n+1)(ξ)/(n+1)! · (x−x0)^(n+1)  (Lagrange-Restglied)",
        ],
        formulasLatex: [
          "T_n(x;x_0) = \\sum_{k=0}^n \\dfrac{f^{(k)}(x_0)}{k!}(x-x_0)^k",
          "f(x) = T_n(x;x_0) + \\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}",
        ],
        terms: [
          { term: "Taylorpolynom", definition: "Polynom n-ten Grades, das f in der Nähe von x0 approximiert, gebildet aus den Ableitungen von f an der Stelle x0." },
          { term: "Lagrange-Restglied", definition: "Fehlerterm R_n(x) im Satz von Taylor, ausgedrückt über die (n+1)-te Ableitung an einer Zwischenstelle ξ." },
        ],
        examples: [
          "Das dritte Taylorpolynom von e^x um x0=0 lautet T_3(x;0)=1+x+x²/2+x³/6 (da alle Ableitungen von e^x an der Stelle 0 gleich 1 sind). — Für f(x)=ln(1+x) um x0=0 ergibt sich T_3(x;0)=x−x²/2+x³/3 (aus f'(x)=1/(1+x), f''(x)=−1/(1+x)², f'''(x)=2/(1+x)³, ausgewertet bei x0=0: f'(0)=1, f''(0)=−1, f'''(0)=2).",
        ],
      },
    ],
  },
  // ==================== Kapitel 10 ====================
  {
    id: "integralrechnung",
    number: 10,
    title: "Integralrechnung",
    free: false,
    intro:
      "Das Integral misst die Fläche zwischen dem Graphen einer Funktion und der x-Achse und ist über den Hauptsatz der Differential- und Integralrechnung eng mit der Ableitung verknüpft. Dieses Kapitel führt das Riemann-Integral ein und stellt die wichtigsten Integrationstechniken vor.",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Das Riemann-Integral: Ober- und Untersummen",
        body: [
          "Für eine beschränkte Funktion f:[a,b]→ℝ und eine Zerlegung Z: a=x0<x1<...<xn=b bildet man auf jedem Teilintervall [x_{i-1},x_i] das Infimum m_i und Supremum M_i von f; die Untersumme U(f;Z):=Σm_i(x_i−x_{i-1}) und die Obersumme O(f;Z):=Σ M_i(x_i−x_{i-1}) approximieren die Fläche unter dem Graphen von unten bzw. oben, wobei stets U(f;Z)≤O(f;Z) gilt. Verfeinert man eine Zerlegung (fügt weitere Teilpunkte hinzu), kann die Untersumme nur wachsen und die Obersumme nur fallen.",
          "Das obere Integral J̄(f):=inf_Z O(f;Z) und untere Integral J_(f):=sup_Z U(f;Z) existieren für jede beschränkte Funktion; f heißt Riemann-integrierbar über [a,b], wenn J̄(f)=J_(f) gilt, und man schreibt dann ∫_a^b f(x)dx für diesen gemeinsamen Wert. Nach dem Riemannschen Integrabilitätskriterium ist f genau dann integrierbar, wenn es zu jedem ε>0 eine Zerlegung Z mit O(f;Z)−U(f;Z)<ε gibt. Stetige Funktionen und monotone Funktionen auf [a,b] sind stets Riemann-integrierbar.",
        ],
        formulas: [
          "U(f;Z) = Σ m_i(x_i−x_{i-1}) ≤ O(f;Z) = Σ M_i(x_i−x_{i-1})",
          "f integrierbar ⟺ ∀ε>0 ∃Z: O(f;Z)−U(f;Z)<ε",
        ],
        formulasLatex: [
          "U(f;Z) = \\sum_i m_i(x_i-x_{i-1}) \\le O(f;Z) = \\sum_i M_i(x_i-x_{i-1})",
          "f \\text{ integrierbar} \\iff \\forall \\varepsilon>0\\ \\exists Z: O(f;Z)-U(f;Z)<\\varepsilon",
        ],
        terms: [
          { term: "Ober-/Untersumme", definition: "Approximation der Fläche unter dem Graphen von oben (Supremum je Teilintervall) bzw. unten (Infimum)." },
          { term: "Riemannsches Integrabilitätskriterium", definition: "f ist integrierbar, wenn Ober- und Untersumme durch geeignete Zerlegung beliebig nah aneinander gebracht werden können." },
        ],
        examples: [
          "Für f(x)=x auf [0,2] und die Zerlegung Z in n gleich große Teilintervalle der Länge 2/n gilt (da f monoton wachsend ist) M_i=f(x_i)=2i/n und m_i=f(x_{i-1})=2(i−1)/n. Damit O(f;Z)−U(f;Z)=Σ(M_i−m_i)·(2/n) = n·(2/n)·(2/n) = 4/n → 0 für n→∞ — das Kriterium ist also für jedes ε>0 ab hinreichend großem n erfüllt, f ist integrierbar (was für die stetige, monotone Funktion f(x)=x auch direkt aus dem allgemeinen Satz folgt).",
        ],
      },
      {
        id: "10-2",
        heading: "10.2 Der Hauptsatz der Differential- und Integralrechnung",
        body: [
          "Eine Funktion F heißt Stammfunktion von f auf [a,b], wenn F'=f gilt; zwei Stammfunktionen derselben Funktion unterscheiden sich stets nur um eine additive Konstante. Der Hauptsatz der Differential- und Integralrechnung stellt die zentrale Verbindung zwischen Ableitung und Integral her: Ist f:[a,b]→ℝ stetig, dann ist die Integralfunktion F(x):=∫_a^x f(t)dt differenzierbar mit F'(x)=f(x) (f besitzt also stets eine Stammfunktion), und für jede beliebige Stammfunktion F von f gilt die Auswertungsformel ∫_a^b f(x)dx = F(b)−F(a) =: [F(x)]_a^b.",
          "Diese Formel verwandelt die (mühsame) Berechnung eines Integrals über Ober-/Untersummen in eine (meist einfache) Suche nach einer Stammfunktion. Wichtige Stammfunktionen: ∫x^r dx = x^(r+1)/(r+1)+c (r≠−1), ∫1/x dx = ln|x|+c, ∫e^x dx = e^x+c, ∫cos(x)dx=sin(x)+c, ∫sin(x)dx=−cos(x)+c.",
        ],
        formulas: [
          "F(x)=∫_a^x f(t)dt ⟹ F'(x)=f(x)  (f stetig)",
          "∫_a^b f(x)dx = F(b)−F(a)  für jede Stammfunktion F von f",
        ],
        formulasLatex: [
          "F(x)=\\int_a^x f(t)\\,dt \\implies F'(x)=f(x) \\quad (f \\text{ stetig})",
          "\\int_a^b f(x)\\,dx = F(b)-F(a)",
        ],
        terms: [
          { term: "Stammfunktion", definition: "Funktion F mit F'=f; je zwei Stammfunktionen von f unterscheiden sich nur um eine Konstante." },
          { term: "Hauptsatz der Differential- und Integralrechnung", definition: "Verbindet Integration und Differentiation: die Integralfunktion einer stetigen Funktion ist eine Stammfunktion, und ∫_a^b f = F(b)−F(a)." },
        ],
        examples: [
          "∫_0^2 x³ dx = [x⁴/4]_0^2 = 16/4 − 0 = 4.",
        ],
      },
      {
        id: "10-3",
        heading: "10.3 Integrationstechniken und uneigentliche Integrale",
        body: [
          "Die partielle Integration ∫_a^b f'(x)g(x)dx = [f(x)g(x)]_a^b − ∫_a^b f(x)g'(x)dx ergibt sich aus der Produktregel und eignet sich besonders für Produkte, bei denen ein Faktor durch Ableiten einfacher wird (z. B. Polynom mal Exponentialfunktion). Die Substitutionsregel ∫_a^b f(φ(x))·φ'(x)dx = ∫_{φ(a)}^{φ(b)} f(u)du (mit u=φ(x)) ergibt sich analog aus der Kettenregel und eignet sich, wenn der Integrand die Ableitung einer inneren Funktion 'passend' enthält.",
          "Ein uneigentliches Integral liegt vor, wenn entweder das Integrationsintervall unbeschränkt ist (z. B. ∫_a^∞ f(x)dx := lim_{t→∞} ∫_a^t f(x)dx) oder der Integrand am Rand unbeschränkt ist. Ein uneigentliches Integral heißt konvergent, wenn der entsprechende Grenzwert existiert (und endlich ist), andernfalls divergent.",
          "Majoranten- und Minorantenkriterium erlauben Konvergenzaussagen durch Vergleich mit einer bekannten Funktion, ohne das Integral explizit zu berechnen: Gilt 0≤f(x)≤g(x) für alle x≥a und konvergiert ∫_a^∞ g(x)dx (Majorante), so konvergiert auch ∫_a^∞ f(x)dx. Gilt umgekehrt 0≤g(x)≤f(x) und divergiert ∫_a^∞ g(x)dx (Minorante), so divergiert auch ∫_a^∞ f(x)dx. Ein Standardbeispiel für ein über ein solches Kriterium untersuchtes uneigentliches Integral ist die Gammafunktion Γ(x):=∫_0^∞ t^(x−1)e^(−t)dt, definiert über ein für x>0 konvergentes uneigentliches Integral.",
        ],
        formulas: [
          "∫f'g = [fg] − ∫fg'  (partielle Integration)",
          "∫f(φ(x))φ'(x)dx = ∫f(u)du, u=φ(x)  (Substitution)",
          "∫_a^∞ f(x)dx := lim_{t→∞} ∫_a^t f(x)dx",
          "0≤f≤g, ∫g konvergent ⟹ ∫f konvergent  (Majorantenkriterium)",
        ],
        formulasLatex: [
          "\\int f'g = [fg] - \\int fg'",
          "\\int f(\\varphi(x))\\varphi'(x)\\,dx = \\int f(u)\\,du, \\quad u=\\varphi(x)",
          "\\int_a^\\infty f(x)\\,dx := \\lim_{t\\to\\infty} \\int_a^t f(x)\\,dx",
          "0\\le f(x)\\le g(x),\\ \\int_a^\\infty g\\,dx \\text{ konvergent} \\implies \\int_a^\\infty f\\,dx \\text{ konvergent}",
        ],
        terms: [
          { term: "Partielle Integration", definition: "Integrationstechnik aus der Produktregel: ∫f'g=[fg]−∫fg'." },
          { term: "Uneigentliches Integral", definition: "Integral mit unbeschränktem Intervall oder unbeschränktem Integranden, definiert als Grenzwert eigentlicher Integrale." },
        ],
        examples: [
          "Partielle Integration: ∫_0^2 x·e^x dx = [x·e^x]_0^2 − ∫_0^2 e^x dx = (2·e²−0) − [e^x]_0^2 = 2e² − (e²−1) = e²+1 ≈ 8,389. — Uneigentliches Integral: ∫_1^∞ 1/x² dx = lim_{t→∞}[−1/x]_1^t = lim_{t→∞}(−1/t+1) = 1 (konvergent), während ∫_1^∞ 1/x dx = lim_{t→∞}[ln x]_1^t = lim_{t→∞} ln(t) = ∞ divergiert — ein klassischer Kontrast zwischen 1/x² und 1/x im uneigentlichen Integral.",
          "Majorantenkriterium: Für f(x)=1/(x²+1) auf [1,∞) gilt 0≤1/(x²+1)≤1/x² für alle x≥1, und ∫₁^∞1/x²dx=1 konvergiert (siehe oben) — nach dem Majorantenkriterium konvergiert also auch ∫₁^∞1/(x²+1)dx.",
        ],
      },
      {
        id: "10-4",
        heading: "10.4 Der Mittelwertsatz der Integralrechnung",
        body: [
          "Ist f:[a,b]→ℝ integrierbar und gilt m≤f(x)≤M für alle x∈[a,b], so existiert ein µ∈[m,M] mit ∫_a^b f(x)dx = µ·(b−a) — der Wert des Integrals lässt sich also stets als 'mittlere Höhe' µ mal Intervalllänge schreiben. Ist f zusätzlich stetig, nimmt f nach dem Satz vom Minimum und Maximum (Kapitel 4.3) den Wert µ tatsächlich an einer Stelle ξ∈[a,b] an: ∫_a^b f(x)dx = f(ξ)·(b−a).",
          "Dieser Satz ist das Integral-Analogon zum Mittelwertsatz der Differentialrechnung (Kapitel 8.2): Dort wird die Sekantensteigung an einer Zwischenstelle als Tangentensteigung realisiert, hier wird der Durchschnittswert einer Funktion an einer Zwischenstelle als tatsächlicher Funktionswert realisiert.",
        ],
        formulas: [
          "∫_a^b f(x)dx = µ·(b−a) für ein µ∈[m,M]",
          "f stetig ⟹ ∃ξ∈[a,b]: ∫_a^b f(x)dx = f(ξ)·(b−a)",
        ],
        formulasLatex: [
          "\\int_a^b f(x)\\,dx = \\mu\\cdot(b-a) \\quad \\text{für ein } \\mu\\in[m,M]",
          "f \\text{ stetig} \\implies \\exists\\xi\\in[a,b]: \\int_a^b f(x)\\,dx = f(\\xi)(b-a)",
        ],
        terms: [{ term: "Mittelwertsatz der Integralrechnung", definition: "Der Wert eines Integrals lässt sich als mittlere Höhe µ (bei Stetigkeit: als tatsächlicher Funktionswert f(ξ)) mal Intervalllänge schreiben." }],
        examples: [
          "Für f(x)=x² auf [0,3] ist ∫₀³x²dx=[x³/3]₀³=9. Nach dem Mittelwertsatz gibt es ein ξ∈[0,3] mit ξ²·3=9, also ξ²=3, ξ=√3≈1,732 — tatsächlich liegt dieses ξ im Intervall [0,3].",
        ],
      },
    ],
  },
];
