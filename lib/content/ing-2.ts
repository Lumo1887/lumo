import type { SkriptChapter } from "./types";

// Hinweis zur Kapitelreihenfolge: Dieses Skript fasst die Vorlesung "Technische
// Mechanik I: Statik und Festigkeitslehre" zusammen, deckt dabei aber sowohl die
// Statik-Vorlesungen als auch die Festigkeitslehre-Grundlagen aus der
// Formelsammlung/den Übungen ab. Die Reihenfolge und Nummerierung hier folgt
// bewusst NICHT der Reihenfolge der Vorlesungsfolien: Statt zuerst die komplette
// Statik und danach die komplette Festigkeitslehre abzuhandeln, wechseln sich
// beide Themenstränge ab, und die beiden Exkurs-Themen (Knicken von Stäben,
// Mohrscher Spannungskreis) stehen jeweils zwischen den Kernkapiteln statt als
// eigener Block am Skriptende. Die Nummerierung ist eigenständig, und
// Querverweise im Text beziehen sich auf diese neue Reihenfolge.
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 ====================
  {
    id: "spannungen-dehnungen-hooke",
    number: 1,
    title: "Spannungen, Dehnungen und das Hookesche Gesetz",
    free: true,
    intro:
      "Die Statik liefert uns Lagerreaktionen und Schnittgrößen — aber sie sagt noch nichts darüber aus, ob ein Bauteil der Belastung überhaupt standhält. Dafür brauchen wir einen Begriff, der die innere Beanspruchung auf die tatsächliche Querschnittsfläche bezieht: die Spannung. Dieses einführende Kapitel legt die Grundlagen der Festigkeitslehre, auf die viele spätere Kapitel (insbesondere die Biegung in Kapitel 7 und der mehrachsige Spannungszustand in Kapitel 9) aufbauen.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Von der Schnittgröße zur Spannung",
        body: [
          "Schneidet man ein Bauteil frei, erhält man an der Schnittstelle die Schnittgrößen Normalkraft N, Querkraft Q und Biegemoment M (mehr dazu in Kapitel 11). Diese Größen wirken auf den gesamten Querschnitt — für die Beurteilung der Festigkeit interessiert aber, wie stark ein einzelner Materialpunkt beansprucht wird. Genau das beschreibt die Spannung: eine Kraft bezogen auf die Fläche, auf der sie wirkt.",
          "Die Normalspannung σ ist der Quotient aus Normalkraft N und Querschnittsfläche A und wirkt senkrecht zur Schnittfläche. Die Schubspannung τ entsteht durch die Querkraft Q und wirkt tangential in der Schnittfläche. Für einen homogenen Querschnitt unter reiner Normalkraft ist σ über die Fläche konstant; die tatsächliche Verteilung der Schubspannung infolge Q ist im Allgemeinen nicht konstant, sondern hängt vom Flächenträgheitsmoment ab, das wir erst in Kapitel 3 einführen.",
        ],
        formulas: ["σ = N / A", "τ = Q / A"],
        formulasLatex: ["\\sigma = \\dfrac{N}{A}", "\\tau = \\dfrac{Q}{A}"],
        terms: [
          { term: "Normalspannung σ", definition: "Kraft senkrecht zur Schnittfläche bezogen auf die Querschnittsfläche A, σ = N/A." },
          { term: "Schubspannung τ", definition: "Kraft tangential zur Schnittfläche bezogen auf die Querschnittsfläche A, τ = Q/A (als Mittelwert)." },
        ],
        examples: [
          "Ein Zugstab mit Querschnittsfläche A = 200 mm² wird mit einer Normalkraft N = 30 kN belastet. Die Normalspannung beträgt σ = N/A = 30 000 N / 200 mm² = 150 N/mm².",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Dehnung und das Hookesche Gesetz",
        body: [
          "Unter einer Normalspannung verformt sich ein Bauteil: Ein Stab der Länge ℓ verlängert sich um Δℓ. Das Verhältnis Δℓ/ℓ heißt Dehnung ε und ist dimensionslos. Allgemeiner ist die Dehnung an einer Stelle x die Ableitung der Verschiebung u(x) nach x, ε(x) = du/dx — für einen homogen gedehnten Stab stimmen beide Definitionen überein.",
          "Für viele Werkstoffe ist im Bereich kleiner Verformungen die Spannung proportional zur Dehnung: σ = E · ε. Diesen linearen Zusammenhang nennt man das Hookesche Gesetz, die Proportionalitätskonstante E den Elastizitätsmodul (eine reine Werkstoffgröße, z. B. für Stahl E ≈ 210 000 N/mm²). Analog gilt für Schubspannung und Gleitung (die Winkeländerung eines ursprünglich rechten Winkels) τ = G · γ mit dem Schubmodul G.",
        ],
        formulas: ["ε = Δℓ / ℓ = du/dx", "σ = E · ε", "τ = G · γ"],
        formulasLatex: [
          "\\varepsilon = \\dfrac{\\Delta \\ell}{\\ell} = \\dfrac{\\mathrm{d}u}{\\mathrm{d}x}",
          "\\sigma = E \\cdot \\varepsilon",
          "\\tau = G \\cdot \\gamma",
        ],
        terms: [
          { term: "Dehnung ε", definition: "Relative Längenänderung eines Bauteils, ε = Δℓ/ℓ bzw. lokal du/dx." },
          { term: "Elastizitätsmodul E", definition: "Werkstoffkonstante, die im linear-elastischen Bereich die Normalspannung mit der Dehnung verknüpft: σ = E·ε." },
        ],
        examples: [
          "Ein Stahlstab (E = 210 000 N/mm²) mit σ = 150 N/mm² erfährt eine Dehnung ε = σ/E ≈ 7,14 · 10⁻⁴ — bei einer Ausgangslänge von 2 m verlängert er sich also um etwa 1,43 mm.",
        ],
      },
      {
        id: "1-3",
        heading: "1.3 Der dreiachsige Spannungszustand",
        body: [
          "Bisher haben wir nur eine Spannungsrichtung betrachtet. An einem beliebigen Volumenelement im Bauteil können jedoch Normalspannungen in allen drei Raumrichtungen (σx, σy, σz) und Schubspannungen auf allen Schnittflächen (τxy, τyz, τzx) gleichzeitig auftreten. Das verallgemeinerte Hookesche Gesetz verknüpft diese sechs Spannungskomponenten mit den zugehörigen Dehnungen und Gleitungen.",
          "Dabei taucht eine zweite Werkstoffkonstante auf: die Querkontraktionszahl ν (auch Poisson-Zahl), die beschreibt, wie stark sich ein Körper quer zur Belastungsrichtung zusammenzieht, wenn er in einer Richtung gedehnt wird (0 < ν < 0,5). Elastizitätsmodul, Schubmodul und Querkontraktionszahl sind nicht unabhängig voneinander, sondern über G = E/(2(1+ν)) miteinander verknüpft — es genügen also zwei der drei Größen, um das elastische Verhalten eines isotropen Werkstoffs vollständig zu beschreiben.",
        ],
        formulas: [
          "εx = (1/E)·(σx − ν(σy + σz))",
          "εxy = (1/(2G))·τxy",
          "G = E / (2(1+ν))",
        ],
        formulasLatex: [
          "\\varepsilon_x = \\dfrac{1}{E}\\left(\\sigma_x - \\nu(\\sigma_y+\\sigma_z)\\right)",
          "\\varepsilon_{xy} = \\dfrac{1}{2G}\\,\\tau_{xy}",
          "G = \\dfrac{E}{2(1+\\nu)}",
        ],
        terms: [
          { term: "Querkontraktionszahl ν", definition: "Werkstoffkonstante (0 < ν < 0,5), die das Verhältnis von Quer- zu Längsdehnung bei einachsiger Belastung beschreibt." },
          { term: "Schubmodul G", definition: "Werkstoffkonstante, die Schubspannung und Gleitung verknüpft, τ = G·γ; über G = E/(2(1+ν)) mit E und ν verbunden." },
        ],
        figure: {
          type: "stress-element",
          caption: "Am Volumenelement wirken i. A. drei Normalspannungen und drei unabhängige Schubspannungen gleichzeitig.",
        },
      },
    ],
  },

  // ==================== Kapitel 2 ====================
  {
    id: "kraefte-axiome-starrer-koerper",
    number: 2,
    title: "Kräfte, Axiome und der starre Körper",
    free: false,
    intro:
      "Bevor wir Kräfte kombinieren oder Gleichgewicht formulieren können, brauchen wir ein sauberes Modell dafür, was eine Kraft überhaupt ist und wie sie sich auf einen Körper auswirkt. Dieses Kapitel legt die axiomatischen Grundlagen der Statik, auf denen alle folgenden Kapitel — von den Kraftgruppen in Kapitel 4 bis zu den Fachwerken in Kapitel 10 — aufbauen.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Der starre Körper und die Einzelkraft als gebundener Vektor",
        body: [
          "In der Statik idealisieren wir Bauteile häufig als starre Körper: Körper, deren Verformung unter Belastung vernachlässigbar klein ist, sodass sich der Abstand zweier beliebiger Punkte des Körpers nicht ändert. Diese Idealisierung erlaubt es, Gleichgewichtsbedingungen zu formulieren, ohne die tatsächliche (i. A. sehr kleine) elastische Verformung berücksichtigen zu müssen — die Verformung selbst ist Gegenstand der Festigkeitslehre (Kapitel 1, 3 und 7).",
          "Eine Einzelkraft ist durch Betrag, Richtung und Angriffspunkt festgelegt und wird deshalb als gebundener Vektor bezeichnet — im Unterschied zu einem freien Vektor, der beliebig parallel verschoben werden darf. Der Angriffspunkt ist wichtig, weil er (zusammen mit der Richtung) bestimmt, welches Moment die Kraft bezüglich eines gegebenen Punktes erzeugt (siehe Kapitel 4).",
        ],
        terms: [
          { term: "Starrer Körper", definition: "Idealisierter Körper, bei dem sich der Abstand zweier beliebiger Punkte unter Belastung nicht ändert." },
          { term: "Gebundener Vektor", definition: "Ein Vektor, der zusätzlich zu Betrag und Richtung an einen bestimmten Angriffspunkt bzw. eine bestimmte Wirkungslinie gebunden ist — wie die Einzelkraft." },
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Die Grundaxiome der Statik",
        body: [
          "Drei Axiome bilden das Fundament der Statik starrer Körper. Das Gleichgewichtsaxiom besagt: Zwei Kräfte an einem starren Körper stehen genau dann im Gleichgewicht, wenn sie auf derselben Wirkungslinie liegen, den gleichen Betrag haben und entgegengesetzt gerichtet sind. Das Kräfteparallelogramm-Axiom besagt, dass sich zwei Kräfte mit gemeinsamem Angriffspunkt zu einer Resultierenden zusammensetzen lassen, die durch die Diagonale des von beiden Kräften aufgespannten Parallelogramms gegeben ist.",
          "Das dritte Axiom, das Wechselwirkungsgesetz (actio = reactio), besagt, dass die Kraft, die ein Körper A auf einen Körper B ausübt, dem Betrag nach gleich, aber entgegengesetzt gerichtet ist zu der Kraft, die B auf A ausübt. Dieses Prinzip ist die Grundlage jedes Freischnitts: Schneidet man ein System an einer Verbindungsstelle (Lager, Gelenk, Stab) auf, tragen beide Schnittufer entgegengesetzt gerichtete, aber betragsgleiche Kräfte.",
          "Ergänzend gilt das Prinzip der Linienflüchtigkeit: Eine Kraft darf entlang ihrer Wirkungslinie beliebig verschoben werden, ohne dass sich ihre Wirkung auf den starren Körper (Kräfte- und Momentenbilanz) ändert — nur die Verschiebung quer zur Wirkungslinie ist nicht erlaubt.",
        ],
        terms: [
          { term: "Wechselwirkungsgesetz (actio = reactio)", definition: "Die Kraft von Körper A auf Körper B ist betragsgleich und entgegengesetzt gerichtet zur Kraft von B auf A — Grundlage jedes Freischnitts." },
          { term: "Linienflüchtigkeit der Kraft", definition: "Eine Kraft darf entlang ihrer eigenen Wirkungslinie verschoben werden, ohne die Wirkung auf den starren Körper zu ändern." },
        ],
      },
      {
        id: "2-3",
        heading: "2.3 Richtungscosinus im 2D- und 3D-Raum",
        body: [
          "Eine Kraft F⃗ mit Betrag F, die in Richtung eines Einheitsvektors ⃗e wirkt, lässt sich in ihre kartesischen Komponenten zerlegen: Fx = F·cos αx, Fy = F·cos αy (im 2D-Fall zusätzlich Fz = 0), wobei αx und αy die Winkel zwischen F⃗ und den Koordinatenachsen sind. Diese Kosinus-Werte heißen Richtungscosinus und erfüllen im 2D-Fall die Beziehung cos²αx + cos²αy = 1 (im 3D-Fall mit drei Winkeln entsprechend cos²αx + cos²αy + cos²αz = 1).",
          "Im 3D-Fall ist die Zerlegung analog, nur mit einer dritten Komponente Fz = F·cos αz. In der Praxis ist es meist einfacher, die Richtung einer Kraft direkt über einen (nicht notwendig normierten) Richtungsvektor ⃗r anzugeben und die Kraft als F⃗ = F · ⃗r/|⃗r| zu berechnen, statt die Winkel αx, αy, αz explizit zu bestimmen.",
        ],
        formulas: ["Fx = F·cos αx, Fy = F·cos αy", "cos²αx + cos²αy = 1 (2D)"],
        formulasLatex: [
          "F_x = F \\cos \\alpha_x, \\quad F_y = F \\cos \\alpha_y",
          "\\cos^2\\alpha_x + \\cos^2\\alpha_y = 1 \\ (\\text{2D})",
        ],
        examples: [
          "Eine Kraft mit Betrag F = 100 N wirkt entlang des Vektors (3, 4) (unnormiert). Der Betrag des Richtungsvektors ist 5, also F⃗ = 100 N · (3/5, 4/5) = (60 N, 80 N).",
        ],
      },
    ],
  },

  // ==================== Kapitel 3 ====================
  {
    id: "flaechentraegheitsmoment-steiner",
    number: 3,
    title: "Flächenträgheitsmoment und der Satz von Steiner",
    free: false,
    intro:
      "Wie stark sich ein Balken unter Biegung durchbiegt und wie groß die dabei auftretenden Spannungen sind, hängt nicht nur vom Material, sondern entscheidend von der Form des Querschnitts ab. Diese geometrische Eigenschaft wird durch das Flächenträgheitsmoment erfasst — die Grundlage für die Biegung in Kapitel 7.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Axiale Flächenmomente 2. Grades",
        body: [
          "Das axiale Flächenträgheitsmoment (Flächenmoment 2. Grades) bezüglich der y-Achse ist definiert als Iy = ∫(A) z² dA, entsprechend Iz = ∫(A) y² dA bezüglich der z-Achse. Anschaulich gewichtet das Integral jedes Flächenelement dA mit dem Quadrat seines Abstands von der Bezugsachse — Flächenanteile weit außen tragen also überproportional stark bei. Genau das macht I zu einem Maß für den Biegewiderstand eines Querschnitts.",
          "Für ein Rechteck der Breite b und Höhe h bezüglich der durch den Schwerpunkt verlaufenden Achse ergibt sich nach Integration Iy = b·h³/12 — eine Formel, die als Baustein für viele zusammengesetzte Querschnitte dient (siehe 3.3).",
        ],
        formulas: ["Iy = ∫(A) z² dA", "Iz = ∫(A) y² dA", "Iy,Rechteck = b·h³/12"],
        formulasLatex: [
          "I_y = \\int_{(A)} z^2 \\,\\mathrm{d}A",
          "I_z = \\int_{(A)} y^2 \\,\\mathrm{d}A",
          "I_{y,\\text{Rechteck}} = \\dfrac{b\\,h^3}{12}",
        ],
        terms: [
          { term: "Axiales Flächenträgheitsmoment", definition: "Maß für den Biegewiderstand eines Querschnitts bezüglich einer Achse, definiert als Flächenintegral über das Abstandsquadrat zur Achse." },
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Der Satz von Steiner",
        body: [
          "Das Flächenträgheitsmoment bezüglich einer beliebigen, zur Schwerachse parallelen Achse lässt sich nicht direkt aus der Formel für die Schwerachse übernehmen — es muss um einen Korrekturterm ergänzt werden, der vom Abstand der beiden Achsen abhängt. Diesen Zusammenhang liefert der Satz von Steiner: Ist Iy,S das Flächenträgheitsmoment bezüglich der Schwerachse und zS der Abstand einer parallelen Achse A von dieser Schwerachse, so gilt Iy,A = Iy,S + zS² · A.",
          "Der Steiner-Anteil zS²·A ist stets positiv (bzw. null, wenn die Achse durch den Schwerpunkt geht) — das Flächenträgheitsmoment bezüglich der Schwerachse ist also immer das kleinstmögliche unter allen zueinander parallelen Achsen.",
        ],
        formulas: ["Iy,A = Iy,S + zS² · A", "Iz,A = Iz,S + yS² · A"],
        formulasLatex: [
          "I_{y,A} = I_{y,S} + z_S^2\\, A",
          "I_{z,A} = I_{z,S} + y_S^2\\, A",
        ],
        terms: [
          { term: "Satz von Steiner", definition: "Iy,A = Iy,S + zS²A — verknüpft das Flächenträgheitsmoment bezüglich einer Schwerachse mit dem bezüglich einer dazu parallelen Achse." },
        ],
        examples: [
          "Ein Rechteck mit b = 40 mm, h = 60 mm hat Iy,S = 40·60³/12 = 720 000 mm⁴. Bezüglich einer 50 mm unterhalb des Schwerpunkts verlaufenden, parallelen Achse gilt Iy,A = 720 000 mm⁴ + 50² mm² · 2400 mm² = 720 000 + 6 000 000 = 6 720 000 mm⁴.",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Zusammengesetzte Querschnitte",
        body: [
          "Viele reale Querschnitte (T-, I- oder U-Profile) lassen sich in mehrere einfache Teilflächen (Rechtecke) zerlegen. Das Vorgehen ist immer dasselbe: Zunächst wird der Gesamtschwerpunkt über eine mit den Teilflächen gewichtete Summe der Teilschwerpunkte bestimmt, rS = (Σ ri·Ai) / (Σ Ai). Anschließend wird für jede Teilfläche das Flächenträgheitsmoment bezüglich der eigenen Schwerachse berechnet und mittels Steiner auf den Gesamtschwerpunkt umgerechnet — die Summe aller so transformierten Teilmomente ergibt das gesuchte Gesamtflächenträgheitsmoment.",
          "Bei Querschnitten mit Aussparungen (z. B. einem Hohlprofil) wird analog vorgegangen, nur dass das Flächenträgheitsmoment der ausgesparten Teilfläche subtrahiert statt addiert wird — die Schwerpunktberechnung erfolgt dabei mit negativem Flächenanteil für die Aussparung.",
        ],
        formulas: ["rS = (Σ ri·Ai) / (Σ Ai)"],
        formulasLatex: ["r_S = \\dfrac{\\sum r_i A_i}{\\sum A_i}"],
      },
    ],
  },

  // ==================== Kapitel 4 ====================
  {
    id: "kraftgruppen-hebelgesetz-moment",
    number: 4,
    title: "Kraftgruppen, Hebelgesetz und das Moment einer Kraft",
    free: false,
    intro:
      "In technischen Systemen wirken meist mehrere Kräfte gleichzeitig. Dieses Kapitel zeigt, wie man solche Kraftgruppen zu einer einzigen äquivalenten Wirkung zusammenfasst — sei es zu einer Resultierenden oder, falls eine Einzelkraft allein nicht ausreicht, zu einer Kombination aus Kraft und Moment (der Dyname).",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Zentrale und nichtzentrale Kraftgruppen",
        body: [
          "Eine Kraftgruppe heißt zentral, wenn sich die Wirkungslinien aller beteiligten Kräfte in einem gemeinsamen Punkt schneiden — in diesem Fall lässt sie sich immer durch eine einzige Resultierende F⃗R = Σ F⃗i ersetzen, die durch diesen gemeinsamen Punkt verläuft. Bei einer nichtzentralen Kraftgruppe (die Wirkungslinien schneiden sich nicht alle in einem Punkt) reicht die Kräftesumme allein nicht aus: Zusätzlich muss das resultierende Moment bezüglich eines gewählten Bezugspunktes berücksichtigt werden.",
          "Die Resultierende einer beliebigen (auch nichtzentralen) Kraftgruppe ergibt sich weiterhin als Vektorsumme aller Einzelkräfte; ihr Angriffspunkt bzw. ihre Wirkungslinie ist jedoch erst festgelegt, wenn zusätzlich das resultierende Moment mit dem der Resultierenden übereinstimmt.",
        ],
        formulas: ["F⃗R = Σ F⃗i"],
        formulasLatex: ["\\vec F_R = \\sum_i \\vec F_i"],
        terms: [
          { term: "Zentrale Kraftgruppe", definition: "Kraftgruppe, deren Wirkungslinien sich alle in einem gemeinsamen Punkt schneiden — vollständig durch die Resultierende ersetzbar." },
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Hebelgesetz und das Kräftepaar",
        body: [
          "Das Hebelgesetz beschreibt das Gleichgewicht eines zweiseitigen Hebels: Zwei Kräfte F1 und F2, die auf entgegengesetzten Seiten eines Drehpunkts im Abstand ℓ1 bzw. ℓ2 senkrecht auf den Hebel wirken, halten sich genau dann die Waage, wenn F1·ℓ1 = F2·ℓ2 gilt — das Produkt aus Kraft und Hebelarm (das Moment) muss auf beiden Seiten gleich groß sein.",
          "Ein Sonderfall zweier Kräfte ist das Kräftepaar: zwei betragsgleiche, entgegengesetzt gerichtete, parallele Kräfte, deren Wirkungslinien nicht zusammenfallen. Die Resultierende eines Kräftepaars ist stets null (die Kräfte heben sich in der Summe auf), dennoch erzeugt es ein von Null verschiedenes, vom Bezugspunkt unabhängiges Moment — genau das macht das Kräftepaar zu einem 'reinen Moment' ohne resultierende Kraftwirkung.",
        ],
        formulas: ["F1·ℓ1 = F2·ℓ2"],
        formulasLatex: ["F_1\\,\\ell_1 = F_2\\,\\ell_2"],
        terms: [
          { term: "Kräftepaar", definition: "Zwei betragsgleiche, entgegengesetzt gerichtete, parallele Kräfte mit unterschiedlichen Wirkungslinien; Resultierende null, Moment ungleich null und bezugspunktunabhängig." },
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Das Moment einer Kraft und die Dyname",
        body: [
          "Das Moment einer Kraft F⃗ bezüglich eines Punktes P ist definiert als M⃗ (P) = ⃗r × F⃗, wobei ⃗r der Ortsvektor von P zu einem beliebigen Punkt auf der Wirkungslinie von F⃗ ist. Der Betrag des Moments ist |M⃗| = F · d, mit d dem senkrechten Abstand (Hebelarm) zwischen P und der Wirkungslinie; die Richtung des Momentenvektors folgt der Rechte-Hand-Regel und steht senkrecht auf der von ⃗r und F⃗ aufgespannten Ebene.",
          "Lässt sich eine allgemeine Kraftgruppe nicht auf eine einzige Resultierende reduzieren (weil sie nichtzentral ist), so bleibt als äquivalente Ersatzwirkung immer die Kombination aus einer Einzelkraft im gewählten Bezugspunkt und einem zusätzlichen Moment — diese Kombination heißt Dyname. Verschiebt man den Bezugspunkt von 0 nach P, ändert sich das Moment gemäß M⃗ (P) = M⃗ (0) + ⃗r0P × F⃗, während die Kraft F⃗ unverändert bleibt.",
        ],
        formulas: ["M⃗ (P) = ⃗r × F⃗", "M⃗ (P) = M⃗ (0) + ⃗r0P × F⃗"],
        formulasLatex: [
          "\\vec M^{(P)} = \\vec r \\times \\vec F",
          "\\vec M^{(P)} = \\vec M^{(0)} + \\vec r_{0P} \\times \\vec F",
        ],
        terms: [
          { term: "Dyname", definition: "Äquivalente Ersatzwirkung einer beliebigen Kraftgruppe bezüglich eines Punktes: eine Einzelkraft in diesem Punkt zusammen mit einem zusätzlichen Moment." },
        ],
        examples: [
          "Eine Kraft F⃗ = (0, −100 N) greift im Punkt (0{,}5 m, 0) an. Ihr Moment bezüglich des Ursprungs ist M⃗ = ⃗r × F⃗ mit ⃗r = (0{,}5 m, 0): M_z = 0{,}5 m · (−100 N) − 0 · 0 = −50 Nm.",
        ],
      },
    ],
  },

  // ==================== Kapitel 5 (Exkurs) ====================
  {
    id: "exkurs-knicken-staebe",
    number: 5,
    title: "Exkurs: Knicken von Stäben nach Euler",
    free: false,
    intro:
      "Nicht jedes Bauteil versagt, weil eine Spannung eine zulässige Grenze überschreitet — schlanke, auf Druck belastete Stäbe können bereits bei deutlich geringeren Lasten seitlich ausweichen und dadurch ihre Tragfähigkeit verlieren. Dieses Phänomen, das Knicken, ist ein Stabilitätsproblem und ergänzt die reine Festigkeitsbetrachtung aus Kapitel 1.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Stabilitätsversagen statt Festigkeitsversagen",
        body: [
          "Ein auf Druck belasteter, sehr schlanker Stab kann versagen, obwohl die rechnerische Druckspannung σ = N/A weit unterhalb der Werkstofffestigkeit liegt. Grund dafür ist eine elastische Instabilität: Ab einer kritischen Last Fk weicht der Stab seitlich aus (er 'knickt'), und diese Ausbiegung wächst bei weiterer Laststeigerung unkontrolliert an. Das Knicken ist damit kein Festigkeits-, sondern ein Stabilitätsproblem — es hängt nicht in erster Linie von der Werkstofffestigkeit, sondern von der Biegesteifigkeit EI und der Stablänge ab.",
          "Die kritische Knicklast wurde erstmals von Leonhard Euler hergeleitet und heißt deshalb Eulersche Knicklast. Sie ist umso kleiner, je länger und je biegeweicher (kleineres EI) ein Stab ist — ein Zusammenhang, der in der Praxis z. B. bei sehr schlanken Druckstreben in Fachwerken (Kapitel 10) berücksichtigt werden muss.",
        ],
        terms: [
          { term: "Knicken", definition: "Stabilitätsversagen eines schlanken, druckbelasteten Stabs durch seitliches Ausweichen ab Erreichen der kritischen Knicklast Fk." },
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Die vier Eulerschen Knickfälle",
        body: [
          "Die kritische Knicklast lässt sich einheitlich als Fk = π²·E·I / ℓk² schreiben, wobei ℓk die sogenannte Knicklänge ist — eine von der tatsächlichen Stablänge ℓ und den Randbedingungen (Lagerung an den Stabenden) abhängige Ersatzlänge. Euler unterschied vier grundlegende Lagerungsfälle: beidseitig gelenkig gelagert (ℓk = ℓ), einseitig eingespannt und am anderen Ende frei (Kragstab, ℓk = 2ℓ), einseitig eingespannt und am anderen Ende gelenkig geführt (ℓk ≈ 0{,}7ℓ) sowie beidseitig eingespannt (ℓk = 0{,}5ℓ).",
          "Je 'freier' die Lagerung, desto größer die Knicklänge und desto kleiner damit die kritische Last — ein beidseitig eingespannter Stab erträgt bei gleicher tatsächlicher Länge also die vierfache Last eines beidseitig gelenkig gelagerten Stabs (ℓk = 0{,}5ℓ gegenüber ℓk = ℓ, und Fk ∝ 1/ℓk²).",
        ],
        formulas: ["Fk = π²·E·I / ℓk²"],
        formulasLatex: ["F_k = \\dfrac{\\pi^2 E I}{\\ell_k^2}"],
        terms: [
          { term: "Knicklänge ℓk", definition: "Von der Lagerung abhängige Ersatzlänge in der Euler-Formel; z. B. ℓk = ℓ (beidseitig gelenkig) bis ℓk = 2ℓ (Kragstab)." },
        ],
        examples: [
          "Ein beidseitig gelenkig gelagerter Stab (ℓk = ℓ = 2 m, EI = 500 kNm²) hat eine kritische Knicklast Fk = π² · 500 kNm² / (2 m)² ≈ 1234 kN.",
        ],
      },
    ],
  },

  // ==================== Kapitel 6 ====================
  {
    id: "gleichgewicht-lager-bestimmtheit",
    number: 6,
    title: "Gleichgewicht, Lagerarten und statische Bestimmtheit",
    free: false,
    intro:
      "Damit ein Tragwerk in Ruhe bleibt, müssen sich alle angreifenden Kräfte und Momente gegenseitig aufheben. Ob die dafür verfügbaren Gleichungen ausreichen, um alle unbekannten Lagerreaktionen zu bestimmen, entscheidet die statische Bestimmtheit — ein zentrales Konzept, das in praktisch jeder folgenden Aufgabe (Fachwerke in Kapitel 10, mehrteilige Tragwerke in Kapitel 8) zuerst geprüft werden muss.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Gleichgewichtsbedingungen",
        body: [
          "Ein starrer Körper ist im Gleichgewicht, wenn die Summe aller angreifenden Kräfte und die Summe aller Momente (bezüglich eines beliebigen Punktes) verschwinden: Σ F⃗i = 0⃗ und Σ M⃗i = 0⃗. Im allgemeinen 3D-Fall liefert das sechs skalare Gleichungen (drei Kraft-, drei Momentenkomponenten).",
          "Für ein ebenes System, das vollständig in der x-y-Ebene liegt, reduziert sich das auf drei skalare Gleichungen: Σ Fx,i = 0, Σ Fy,i = 0 und Σ Mz,i = 0 (das Moment hat in der Ebene nur eine z-Komponente senkrecht zur Zeichenebene). Diese drei Gleichungen sind die Grundlage jeder ebenen Gleichgewichtsbetrachtung — sei es an einem Gesamtsystem oder, wie in Kapitel 8, an einem Teilkörper nach dem Freischnitt.",
        ],
        formulas: ["Σ Fx,i = 0, Σ Fy,i = 0, Σ Mz,i = 0 (2D)"],
        formulasLatex: [
          "\\sum_i F_{x,i} = 0,\\quad \\sum_i F_{y,i} = 0,\\quad \\sum_i M_{z,i} = 0 \\ (\\text{2D})",
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Lagerwertigkeiten",
        body: [
          "Ein Lager schränkt bestimmte Freiheitsgrade eines Körpers ein und übt dafür entsprechende Reaktionskräfte bzw. -momente aus. Die Anzahl der eingeschränkten Freiheitsgrade heißt Lagerwertigkeit. Ein Loslager (einwertig) verhindert nur eine Verschiebung senkrecht zur Auflagerfläche und liefert eine Lagerkraft. Ein Festlager (zweiwertig) verhindert Verschiebungen in beiden Richtungen der Ebene und liefert zwei Lagerkraftkomponenten. Eine feste Einspannung (dreiwertig) verhindert zusätzlich die Verdrehung und liefert neben den zwei Kraftkomponenten auch ein Lagermoment.",
          "Diese Klassifikation ist entscheidend für die statische Bestimmtheit: Je höher die Lagerwertigkeit, desto mehr unbekannte Reaktionsgrößen liefert ein einzelnes Lager — und desto genauer muss man prüfen, ob die Anzahl der verfügbaren Gleichgewichtsbedingungen ausreicht, um sie alle zu bestimmen (siehe 6.3).",
        ],
        terms: [
          { term: "Loslager (einwertig)", definition: "Lager, das nur eine Verschiebungsrichtung sperrt und eine Lagerkraft liefert." },
          { term: "Festlager (zweiwertig)", definition: "Lager, das Verschiebungen in beide Richtungen der Ebene sperrt und zwei Lagerkraftkomponenten liefert." },
          { term: "Feste Einspannung (dreiwertig)", definition: "Lager, das zusätzlich zur Verschiebung auch die Verdrehung sperrt und zwei Kraftkomponenten sowie ein Lagermoment liefert." },
        ],
      },
      {
        id: "6-3",
        heading: "6.3 Notwendige und hinreichende Bedingung, der Ausnahmefall",
        body: [
          "Für ein System aus n Teilkörpern stehen im ebenen Fall N = 3n Gleichgewichtsbedingungen zur Verfügung. Sind R = Σ Ri die Lager- (und ggf. Gelenk-)wertigkeiten, so lautet die notwendige Bedingung für statische Bestimmtheit N = R: Es müssen genau so viele Gleichungen wie Unbekannte vorhanden sein. Formal lässt sich das Gleichungssystem als A·x = b mit quadratischer Koeffizientenmatrix A schreiben.",
          "Die notwendige Bedingung allein garantiert aber noch keine eindeutige Lösbarkeit. Die hinreichende Bedingung verlangt zusätzlich det A ≠ 0, also dass die Koeffizientenmatrix invertierbar ist. Ist die notwendige Bedingung erfüllt, aber det A = 0, spricht man vom Ausnahmefall der statischen Bestimmtheit: Die Anzahl der Unbekannten stimmt zwar formal mit der Anzahl der Gleichungen überein, das System ist aber trotzdem nicht eindeutig lösbar — es ist kinematisch verschieblich (\"wackelig\"), obwohl die reine Abzählung unauffällig war.",
        ],
        formulas: ["N = 3n = R (notwendig)", "det A ≠ 0 (hinreichend)"],
        formulasLatex: [
          "N = 3n = R \\ (\\text{notwendig})",
          "\\det A \\ne 0 \\ (\\text{hinreichend})",
        ],
        terms: [
          { term: "Ausnahmefall", definition: "Fall, in dem die notwendige Bedingung N = R erfüllt ist, aber det A = 0 gilt — das System ist trotz korrekter Abzählung kinematisch verschieblich." },
        ],
      },
    ],
  },

  // ==================== Kapitel 7 ====================
  {
    id: "gerade-biegung-biegelinie",
    number: 7,
    title: "Gerade Biegung und die Biegelinie",
    free: false,
    intro:
      "Wird ein Balken quer zu seiner Achse belastet, biegt er sich durch — die Form, die die ursprünglich gerade Balkenachse dabei annimmt, heißt Biegelinie. Dieses Kapitel verbindet das Biegemoment aus Kapitel 11 mit dem Flächenträgheitsmoment aus Kapitel 3 und liefert damit sowohl die Durchbiegung als auch die auftretenden Spannungen.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Die Differentialgleichung der Biegelinie",
        body: [
          "Die Durchbiegung w(x) eines Balkens an der Stelle x genügt (im Rahmen der technischen Biegelehre, für kleine Durchbiegungen) der linearen Differentialgleichung w''(x) = −M(x) / (E·Iy(x)). Das Vorzeichen sorgt dafür, dass ein positives Biegemoment (nach der jeweils verwendeten Konvention) zu einer Krümmung in die erwartete Richtung führt.",
          "Um w(x) zu bestimmen, muss die Differentialgleichung zweimal integriert werden — dabei entstehen zwei Integrationskonstanten pro Bereich, die aus Rand- und Übergangsbedingungen bestimmt werden (siehe 7.3). Ist der Querschnitt (und damit Iy) über die Balkenlänge konstant, vereinfacht sich die Gleichung, da Iy dann aus dem Integral herausgezogen werden kann.",
        ],
        formulas: ["w''(x) = −M(x) / (E·Iy(x))"],
        formulasLatex: ["w''(x) = -\\dfrac{M(x)}{E\\,I_y(x)}"],
        terms: [
          { term: "Biegelinie w(x)", definition: "Die Durchbiegung der Balkenachse an der Stelle x; genügt der Differentialgleichung w''(x) = −M(x)/(EIy(x))." },
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Biegespannungen und das Widerstandsmoment",
        body: [
          "Unter Biegung ist die Normalspannung nicht mehr konstant über den Querschnitt verteilt, sondern hängt linear vom Abstand z zur neutralen Faser (der Schwerachse) ab: σ(x, z) = M(x)/Iy(x) · z. Auf einer Seite der neutralen Faser herrscht Zug, auf der anderen Druck; in der neutralen Faser selbst (z = 0) ist die Biegespannung null.",
          "Für die Auslegung interessiert vor allem die maximale Spannung am Rand des Querschnitts, im Abstand zmax von der neutralen Faser. Führt man das Widerstandsmoment W := Iy/zmax ein, lässt sich die Randspannung besonders kompakt schreiben als |σmax| = Mmax/W. Das Widerstandsmoment fasst damit Flächenform und Randabstand in einer einzigen Querschnittskenngröße zusammen.",
        ],
        formulas: ["σ(x,z) = M(x)/Iy(x) · z", "W = Iy / zmax", "|σmax| = Mmax / W"],
        formulasLatex: [
          "\\sigma(x,z) = \\dfrac{M(x)}{I_y(x)}\\, z",
          "W = \\dfrac{I_y}{z_{\\max}}",
          "|\\sigma_{\\max}| = \\dfrac{M_{\\max}}{W}",
        ],
        terms: [
          { term: "Widerstandsmoment W", definition: "Querschnittskenngröße W = Iy/zmax, mit der sich die maximale Biegespannung kompakt als Mmax/W schreiben lässt." },
        ],
        examples: [
          "Ein Rechteckquerschnitt mit b = 100 mm, h = 200 mm hat Iy = 100·200³/12 ≈ 6{,}67·10⁷ mm⁴ und zmax = 100 mm, also W ≈ 6{,}67·10⁵ mm³. Bei Mmax = 20 kNm ergibt sich |σmax| = 20·10⁶ Nmm / 6{,}67·10⁵ mm³ ≈ 30 N/mm².",
        ],
      },
      {
        id: "7-3",
        heading: "7.3 Integrationskonstanten aus Rand- und Übergangsbedingungen",
        body: [
          "Für jeden Bereich mit eigenem Momentenverlauf liefert die zweifache Integration von w''(x) zwei freie Konstanten. Diese werden durch geometrische Bedingungen festgelegt: An einem gelenkigen Lager verschwindet die Durchbiegung (w = 0), an einer festen Einspannung verschwinden sowohl Durchbiegung als auch Neigung (w = 0 und w' = 0), an einer Parallelführung verschwindet nur die Neigung (w' = 0), und an einem freien Ende ist keine geometrische Bedingung, sondern eine Kraft-/Momentenrandbedingung zu stellen.",
          "Bei mehreren Bereichen kommen Übergangsbedingungen an den Bereichsgrenzen hinzu: Durchbiegung und Neigung müssen dort übereinstimmen (die Biegelinie hat keinen Sprung und keinen Knick), sofern an dieser Stelle kein Gelenk vorliegt. Diese Bedingungen liefern zusammen genau so viele Gleichungen wie Integrationskonstanten insgesamt auftreten.",
        ],
        terms: [
          { term: "Übergangsbedingung", definition: "Bedingung an einer Bereichsgrenze der Biegelinie, die sicherstellt, dass Durchbiegung und Neigung stetig ineinander übergehen." },
        ],
        figure: {
          type: "beam-bending",
          caption: "Die Biegelinie w(x) beschreibt die Durchbiegung der ursprünglich geraden Balkenachse unter Last.",
        },
      },
    ],
  },

  // ==================== Kapitel 8 ====================
  {
    id: "mehrteilige-tragwerke-gelenkbalken",
    number: 8,
    title: "Mehrteilige Tragwerke und der Gelenkbalken",
    free: false,
    intro:
      "Nicht jedes Tragwerk besteht aus einem einzigen starren Körper. Sind mehrere Teilkörper über Gelenke miteinander verbunden, muss jeder Teilkörper einzeln freigeschnitten und im Gleichgewicht betrachtet werden. Dieses Kapitel überträgt die Konzepte aus Kapitel 6 auf solche mehrteiligen Systeme.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Das Schnittprinzip bei mehrteiligen Systemen",
        body: [
          "Besteht ein Tragwerk aus mehreren, über Gelenke verbundenen Teilkörpern, genügt eine Gleichgewichtsbetrachtung am Gesamtsystem nicht: Die inneren Gelenkkräfte tauchen darin gar nicht auf (sie heben sich im Gesamtsystem gegenseitig auf), sind aber selbst gesuchte Größen. Man muss deshalb jeden Teilkörper einzeln freischneiden.",
          "Nach dem Wechselwirkungsgesetz (Kapitel 2) müssen die Gelenkkräfte an den beiden Schnittufern eines Gelenks betragsgleich, aber entgegengesetzt gerichtet eingetragen werden. Für jeden Teilkörper stehen dann wieder die drei ebenen Gleichgewichtsbedingungen aus Kapitel 6 zur Verfügung — bei n Teilkörpern also insgesamt 3n Gleichungen für alle Lager- und Gelenkreaktionen zusammen.",
        ],
      },
      {
        id: "8-2",
        heading: "8.2 Der Gelenkbalken (Gerber-Träger)",
        body: [
          "Ein besonders häufiger mehrteiliger Trägertyp ist der Gelenkbalken (auch Gerber-Träger genannt): ein durchlaufender Balken, der durch ein oder mehrere zweiwertige Gelenke in mehrere Teilträger unterteilt ist. Diese Konstruktion wird z. B. bei langen Brücken eingesetzt, um Zwängungsspannungen aus Temperaturdehnung zu vermeiden, die bei einem vollständig durchlaufenden, mehrfach gelagerten Träger sonst auftreten würden.",
          "Zur Berechnung wird der Gelenkbalken an jedem Gelenk in seine Teilträger zerlegt, jeder Teilträger einzeln freigeschnitten, und die Gelenkkräfte an den benachbarten Schnittufern gegensinnig eingetragen. Häufig empfiehlt es sich, mit dem Teilträger zu beginnen, der die wenigsten unbekannten Lagerreaktionen (aber ein Gelenk) enthält, da sich dort oft schon aus zwei oder drei Gleichungen die Gelenkkraft bestimmen lässt.",
        ],
        terms: [
          { term: "Gelenkbalken (Gerber-Träger)", definition: "Durchlaufender Balken, der durch ein oder mehrere Gelenke in mehrere Teilträger unterteilt ist." },
        ],
      },
      {
        id: "8-3",
        heading: "8.3 Statische Bestimmtheit mehrteiliger Systeme",
        body: [
          "Die notwendige Bedingung für statische Bestimmtheit aus Kapitel 6 überträgt sich unmittelbar: Bei n Teilkörpern stehen N = 3n Gleichungen zur Verfügung, denen R = Σ Ri (Summe aller Lager- und Gelenkwertigkeiten) gegenübersteht. Ein zweiwertiges Gelenk zwischen zwei Teilkörpern liefert dabei genau zwei zusätzliche Unbekannte (die beiden Komponenten der Gelenkkraft), erhöht aber gleichzeitig die Anzahl der Teilkörper n und damit die Anzahl der Gleichungen um drei — ein Gelenk 'kostet' also stets eine Gleichgewichtsbedingung mehr, als es an zusätzlichen Unbekannten einbringt.",
          "Wie im einteiligen Fall ist N = R nur die notwendige Bedingung; die hinreichende Bedingung det A ≠ 0 muss zusätzlich geprüft werden, insbesondere wenn mehrere Gelenke oder Lager ungünstig angeordnet sind (Ausnahmefall, siehe 6.3).",
        ],
        formulas: ["N = 3n, R = Σ Ri (Lager- und Gelenkwertigkeiten)"],
        formulasLatex: ["N = 3n, \\quad R = \\sum_i R_i \\ \\text{(Lager- und Gelenkwertigkeiten)}"],
        examples: [
          "Ein Gelenkbalken besteht aus n=2 Teilträgern, verbunden durch ein zweiwertiges Gelenk (2), gelagert mit einem Festlager (2) und zwei Loslagern (je 1). N=3·2=6, R=2+2+1+1=6 — die notwendige Bedingung N=R ist erfüllt.",
        ],
      },
    ],
  },

  // ==================== Kapitel 9 (Exkurs) ====================
  {
    id: "exkurs-mohrscher-kreis",
    number: 9,
    title: "Exkurs: Mehrachsiger Spannungszustand und der Mohrsche Spannungskreis",
    free: false,
    intro:
      "In Kapitel 1 haben wir den dreiachsigen Spannungszustand über sechs Spannungskomponenten beschrieben. Für viele Anwendungen genügt bereits die Betrachtung eines ebenen Spannungszustands — und dafür gibt es mit dem Mohrschen Spannungskreis eine besonders anschauliche grafische Methode.",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Hauptspannungen und Hauptspannungsrichtungen",
        body: [
          "In einem ebenen Spannungszustand (gegeben durch σx, σy und τxy) ändern sich die Spannungen, wenn man den Schnittwinkel dreht. Es gibt genau eine Schnittrichtung, in der die Schubspannung verschwindet — die dort auftretenden Normalspannungen heißen Hauptspannungen σ1 und σ2, die zugehörige Richtung Hauptspannungsrichtung.",
          "Die Hauptspannungen berechnen sich aus σ1,2 = (σx+σy)/2 ± √(((σx−σy)/2)² + τxy²). In dieser Formel ist der erste Term der Mittelwert der beiden Normalspannungen (er bleibt unter Drehung invariant), der zweite Term die halbe Differenz — eine Art Radius, der im Mohrschen Kreis (siehe 9.2) direkt als geometrischer Kreisradius wiederauftaucht.",
        ],
        formulas: ["σ1,2 = (σx+σy)/2 ± √(((σx−σy)/2)² + τxy²)"],
        formulasLatex: [
          "\\sigma_{1,2} = \\dfrac{\\sigma_x+\\sigma_y}{2} \\pm \\sqrt{\\left(\\dfrac{\\sigma_x-\\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}",
        ],
        terms: [
          { term: "Hauptspannungen σ1, σ2", definition: "Die Normalspannungen in der Schnittrichtung, in der die Schubspannung verschwindet — Extremwerte der Normalspannung über alle Schnittrichtungen." },
        ],
      },
      {
        id: "9-2",
        heading: "9.2 Konstruktion des Mohrschen Spannungskreises",
        body: [
          "Der Mohrsche Spannungskreis stellt den ebenen Spannungszustand grafisch dar: In einem Koordinatensystem mit Normalspannung σ auf der Abszisse und Schubspannung τ auf der Ordinate trägt man die Punkte (σx, τxy) und (σy, −τxy) ein. Die Verbindungsstrecke dieser beiden Punkte ist ein Durchmesser des Mohrschen Kreises; sein Mittelpunkt liegt bei ((σx+σy)/2, 0), sein Radius ist genau der Term √(((σx−σy)/2)² + τxy²) aus der Hauptspannungsformel.",
          "Die Schnittpunkte des Kreises mit der σ-Achse (τ = 0) liefern unmittelbar die beiden Hauptspannungen σ1 und σ2 — der Mohrsche Kreis macht damit sichtbar, dass die Hauptspannungen gerade die größte und kleinste über alle Schnittrichtungen auftretende Normalspannung sind, während der maximale Schubspannungswert (der oberste bzw. unterste Punkt des Kreises) betragsmäßig gleich dem Kreisradius ist.",
        ],
        terms: [
          { term: "Mohrscher Spannungskreis", definition: "Grafische Darstellung des ebenen Spannungszustands in der σ-τ-Ebene; Mittelpunkt (σx+σy)/2, Radius √(((σx−σy)/2)² + τxy²)." },
        ],
      },
    ],
  },

  // ==================== Kapitel 10 ====================
  {
    id: "fachwerke-knotenschnitt-ritter",
    number: 10,
    title: "Fachwerke: Knotenschnitt- und Rittersches Verfahren",
    free: false,
    intro:
      "Fachwerke sind aus schlanken Stäben aufgebaute Tragwerke, die ausschließlich über Zug- oder Druckkräfte in den Stäben belastet werden. Dieses Kapitel zeigt, wie man solche Konstruktionen auf statische Bestimmtheit prüft und die einzelnen Stabkräfte berechnet.",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Das ideale Fachwerk",
        body: [
          "Ein ideales Fachwerk beruht auf vier vereinfachenden Annahmen: Alle Stäbe sind gerade, sie sind zentrisch (in ihrer Schwerachse) an den Knoten angeschlossen, die Knoten selbst sind reibungsfreie Gelenke, und äußere Lasten greifen ausschließlich an den Knoten an, nie entlang eines Stabes. Unter diesen Annahmen kann jeder Stab nur eine reine Längskraft übertragen — Biegemomente oder Querkräfte treten in den Stäben nicht auf.",
          "Konventionsgemäß wird eine Stabkraft als positiv definiert, wenn sie vom Knoten weg zeigt. Ein positives Vorzeichen bedeutet dann Zugbeanspruchung, ein negatives Druckbeanspruchung — diese Konvention ist entscheidend für die korrekte Interpretation der Rechenergebnisse in 10.3 und 10.4.",
        ],
        terms: [
          { term: "Ideales Fachwerk", definition: "Fachwerk mit geraden, zentrisch angeschlossenen Stäben, reibungsfreien Knotengelenken und ausschließlich an Knoten angreifenden Lasten." },
          { term: "Zug-/Druckkonvention", definition: "Stabkräfte werden positiv vom Knoten weg gezählt: positiver Wert = Zug, negativer Wert = Druck." },
        ],
        figure: {
          type: "truss-diagram",
          caption: "In einem idealen Fachwerk übertragen die Stäbe ausschließlich Zug- (positiv) oder Druckkräfte (negativ).",
        },
      },
      {
        id: "10-2",
        heading: "10.2 Äußere und innere statische Bestimmtheit",
        body: [
          "Bei Fachwerken unterscheidet man zwei Arten der statischen Bestimmtheit. Die äußere statische Bestimmtheit betrifft nur die Lager- (und ggf. Gelenk-)reaktionen: Wie bei jedem Tragwerk lautet die notwendige Bedingung 3n = R, wobei n die Anzahl der Teilkörper und R die Summe der Lagerwertigkeiten ist — die inneren Stabkräfte spielen dabei keine Rolle.",
          "Die innere statische Bestimmtheit betrifft dagegen die Stabkräfte selbst: Bei k Knoten liefert das Knotenschnittverfahren (siehe 10.3) 2k Gleichgewichtsbedingungen (je zwei pro Knoten im ebenen Fall). Diesen stehen s (unbekannte Stabkräfte) plus r (äußere Lagerreaktionen) Unbekannte gegenüber. Die notwendige Bedingung für innere statische Bestimmtheit lautet also 2k = s + r.",
        ],
        formulas: ["3n = R (äußere Bestimmtheit)", "2k = s + r (innere Bestimmtheit)"],
        formulasLatex: [
          "3n = R \\ (\\text{äußere Bestimmtheit})",
          "2k = s + r \\ (\\text{innere Bestimmtheit})",
        ],
      },
      {
        id: "10-3",
        heading: "10.3 Das Knotenschnittverfahren",
        body: [
          "Beim Knotenschnittverfahren wird jeder Knoten des Fachwerks einzeln freigeschnitten. An einem Knoten treffen sich alle dort angeschlossenen Stabkräfte sowie ggf. äußere Lasten oder Lagerreaktionen in einem Punkt — es liegt also ein zentrales Kräftesystem vor (Kapitel 4), für das kein Momentengleichgewicht benötigt wird, sondern nur Σ Fx = 0 und Σ Fy = 0.",
          "Da jeder Knoten nur zwei Gleichungen liefert, sollte man mit einem Knoten beginnen, an dem höchstens zwei unbekannte Stabkräfte auftreten. Nach dessen Auswertung sind i. A. weitere Stabkräfte bekannt, sodass sich am nächsten Knoten wieder höchstens zwei Unbekannte ergeben — man arbeitet sich so systematisch durch das gesamte Fachwerk.",
        ],
        examples: [
          "An einem Knoten greift eine vertikale Last F=100 N an; zwei Stäbe schließen Winkel von 60° bzw. 30° zur Horizontalen ein und sind die einzigen Anschlüsse an diesem Knoten. Aus ΣFx=0: S1·cos60° = S2·cos30° ⟹ S1 = 1,732·S2. Aus ΣFy=0: S1·sin60°+S2·sin30°=100 ⟹ (1,732·S2)·0,866+S2·0,5=100 ⟹ 2·S2=100 ⟹ S2=50 N, S1=86,6 N.",
        ],
      },
      {
        id: "10-4",
        heading: "10.4 Das Rittersche Schnittverfahren",
        body: [
          "Interessiert nur die Kraft in einem einzelnen, tiefer im Fachwerk liegenden Stab, ist das Knotenschnittverfahren oft umständlich, da man sich erst durch viele Knoten 'vorarbeiten' müsste. Das Rittersche Schnittverfahren schneidet stattdessen das gesamte Fachwerk mit einem Rundschnitt durch (i. d. R. drei) Stäbe, sodass ein Teilkörper mit allen daran angreifenden äußeren Kräften, Lagerreaktionen und den Schnittkräften der geschnittenen Stäbe entsteht.",
          "An diesem Teilkörper liegt kein zentrales Kräftesystem mehr vor (die geschnittenen Stäbe treffen sich i. A. nicht in einem Punkt), sodass zusätzlich zu den Kräftegleichgewichten auch ein Momentengleichgewicht zur Verfügung steht — insgesamt also die volle ebene Gleichgewichtsbedingung mit drei Gleichungen. Wählt man den Momentenbezugspunkt geschickt (im Schnittpunkt zweier der drei geschnittenen Stäbe), lässt sich die dritte Stabkraft direkt und ohne Gleichungssystem berechnen.",
        ],
        examples: [
          "Ein Fachwerkträger (Spannweite 8 m, Höhe 2 m, Festlager A links, Loslager B rechts) trägt eine Einzellast F=40 kN in Trägermitte; aus Symmetrie folgt Ay=By=20 kN. Ein Rundschnitt bei x=2 m trennt Ober-, Untergurt und eine Diagonale. Der Momentenbezugspunkt im Schnittpunkt von Untergurt und Diagonale (bei x=2 m auf Untergurthöhe) eliminiert beide Stäbe aus der Momentenbilanz: ΣM = Ay·2 m − O·2 m = 0 ⟹ O = 20 kN — die Obergurtkraft ergibt sich direkt, ohne die restlichen Stabkräfte zu kennen.",
        ],
      },
      {
        id: "10-5",
        heading: "10.5 Nullstäbe erkennen",
        body: [
          "In vielen Fachwerken lassen sich bestimmte Stabkräfte ohne jede Rechnung als null identifizieren — solche Stäbe heißen Nullstäbe. Drei Regeln helfen bei der Erkennung: (1) An einem unbelasteten Knoten mit genau zwei verschieden orientierten Anschlussstäben sind beide Stäbe Nullstäbe. (2) Ist ein Knoten mit genau zwei Anschlussstäben nur in Richtung eines der beiden Stäbe belastet, ist der andere (anders orientierte) Stab ein Nullstab. (3) An einem unbelasteten Knoten mit drei Anschlussstäben, von denen zwei in dieselbe Richtung zeigen (kollinear sind), ist der dritte Stab ein Nullstab.",
          "Das Erkennen von Nullstäben lohnt sich besonders vor dem Einsatz des Knotenschnittverfahrens: Jeder identifizierte Nullstab reduziert die Anzahl der noch zu berechnenden Unbekannten und vereinfacht damit die verbleibenden Knotengleichgewichte erheblich.",
        ],
        terms: [
          { term: "Nullstab", definition: "Stab in einem Fachwerk, dessen Stabkraft aufgrund der Knotengeometrie und -belastung ohne Rechnung als null erkennbar ist." },
        ],
        examples: [
          "An einem Knoten mit drei Anschlussstäben, von denen zwei kollinear (in gleicher Richtung) liegen, und ohne äußere Last an diesem Knoten, ist der dritte, quer dazu stehende Stab nach Regel (3) ein Nullstab.",
        ],
      },
    ],
  },

  // ==================== Kapitel 11 ====================
  {
    id: "schnittgroessen-gerader-balken",
    number: 11,
    title: "Schnittgrößen am geraden Balken",
    free: false,
    intro:
      "Um zu wissen, wie ein Balken innerlich beansprucht wird, muss man ihn gedanklich an jeder Stelle aufschneiden und die dort übertragenen Kräfte und Momente bestimmen — die Schnittgrößen. Sie sind die Brücke zwischen der äußeren Belastung (Kapitel 6) und den daraus resultierenden Spannungen (Kapitel 1 und 7).",
    sections: [
      {
        id: "11-1",
        heading: "11.1 Normalkraft, Querkraft und Biegemoment",
        body: [
          "Schneidet man einen geraden Balken an einer beliebigen Stelle s durch, treten an der Schnittstelle drei Schnittgrößen auf: die Normalkraft N (in Richtung der Balkenachse), die Querkraft Q (senkrecht zur Balkenachse) und das Biegemoment M. Um sie zu bestimmen, ermittelt man zunächst über die äußeren Gleichgewichtsbedingungen (Kapitel 6) alle Lagerreaktionen, unterteilt den Balken dann in Bereiche (an jeder Stelle mit Lastwechsel, Lagerung oder Geometrieänderung) und stellt für jeden Bereich am Schnittufer die drei Gleichgewichtsbedingungen auf.",
          "Für die Momentenbilanz an einem Schnittufer wählt man zweckmäßigerweise das Schnittufer selbst als Bezugspunkt — dadurch entfällt der Hebelarm der gesuchten Schnittgrößen N und Q, und die Gleichung enthält nur das gesuchte Moment M sowie die bereits bekannten äußeren Kräfte.",
        ],
        terms: [
          { term: "Normalkraft N", definition: "Schnittgröße in Richtung der Balkenachse." },
          { term: "Querkraft Q", definition: "Schnittgröße senkrecht zur Balkenachse." },
          { term: "Biegemoment M", definition: "Schnittgröße, die eine Krümmung der Balkenachse hervorruft." },
        ],
      },
      {
        id: "11-2",
        heading: "11.2 Vorzeichenkonvention und die Verrundungsregel",
        body: [
          "Damit die Schnittgrößenverläufe an positivem und negativem Schnittufer konsistent sind, gilt die Konvention: Am positiven Schnittufer (äußere Normale in positive Koordinatenrichtung) zeigen positive N, Q und M in die jeweils definierte positive Richtung; am negativen Schnittufer zeigen sie in die entgegengesetzte Richtung. Für die grafische Darstellung gilt außerdem die Verrundungsregel: Ein positives Biegemoment wird üblicherweise nach unten (auf der Zugseite der Faser) aufgetragen.",
          "Aus den Funktionsgraphen von N(s), Q(s) und M(s) lassen sich charakteristische Merkmale der Belastung direkt ablesen: Eine äußere Einzelkraft in Längsrichtung erzeugt einen Sprung in N(s), eine äußere Einzelkraft in Querrichtung einen Sprung in Q(s) und einen Knick in M(s), und ein äußeres freies Moment einen Sprung in M(s) — ohne dass N(s) oder Q(s) davon betroffen wären.",
        ],
        terms: [
          { term: "Verrundungsregel", definition: "Konvention zur einheitlichen grafischen Darstellung des Biegemomentenverlaufs, i. d. R. mit positivem Moment nach unten aufgetragen." },
        ],
      },
      {
        id: "11-3",
        heading: "11.3 Differentielle Zusammenhänge und Integration von Streckenlasten",
        body: [
          "Zwischen Streckenlast q(x), Querkraft Q(x) und Biegemoment M(x) bestehen differentielle Zusammenhänge, die man durch Betrachtung eines infinitesimalen Balkenelements erhält: dQ/dx = −q(x) und dM/dx = Q(x). Diese Beziehungen erlauben es, den Momentenverlauf direkt aus dem Querkraftverlauf zu gewinnen (und umgekehrt die Streckenlast aus der Steigung des Querkraftverlaufs abzulesen), ohne jedes Mal ein neues Gleichgewicht aufstellen zu müssen.",
          "Für eine Streckenlast, die auf einem Schnittufer zwischen 0 und s wirkt, ergibt sich die daraus resultierende Ersatzkraft und das zugehörige Schnittmoment durch Integration: Fq = ∫₀ˢ q(x) dx und Mq(s) = ∫₀ˢ (s−x)·q(x) dx, wobei (s−x) der Hebelarm des Flächenelements q(x)dx bezüglich des Schnittufers bei s ist.",
        ],
        formulas: ["dQ/dx = −q(x)", "dM/dx = Q(x)", "Fq = ∫₀ˢ q(x) dx", "Mq(s) = ∫₀ˢ (s−x)·q(x) dx"],
        formulasLatex: [
          "\\dfrac{\\mathrm{d}Q}{\\mathrm{d}x} = -q(x)",
          "\\dfrac{\\mathrm{d}M}{\\mathrm{d}x} = Q(x)",
          "F_q = \\int_0^s q(x)\\,\\mathrm{d}x",
          "M_q(s) = \\int_0^s (s-x)\\,q(x)\\,\\mathrm{d}x",
        ],
        examples: [
          "Bei einer konstanten Streckenlast q(x) = q0 auf einem Bereich der Länge s ist die Ersatzkraft Fq = q0·s, ihr Angriffspunkt liegt in der Mitte (bei s/2), sodass Mq(s) = q0·s²/2 gilt.",
        ],
        figure: {
          type: "shear-moment-diagram",
          caption: "Unter einer Einzellast springt der Querkraftverlauf Q(s), während der Momentenverlauf M(s) dort einen Knick erhält.",
        },
      },
    ],
  },

  // ==================== Kapitel 12 ====================
  {
    id: "haftreibung-seilreibung-kraftkegel",
    number: 12,
    title: "Haftreibung, Seilreibung und der Kraftkegel",
    free: false,
    intro:
      "Bislang haben wir Kontakte zwischen Bauteilen meist als reibungsfrei angenommen. Reale Kontakte übertragen jedoch zusätzlich zur Normalkraft auch eine tangentiale Haftkraft, die verhindert, dass Bauteile gegeneinander rutschen — bis zu einer bestimmten Grenze. Dieses abschließende Kapitel führt das Coulombsche Haftreibungsgesetz sowie die Seilreibung ein.",
    sections: [
      {
        id: "12-1",
        heading: "12.1 Das Coulombsche Haftreibungsgesetz",
        body: [
          "Zwischen zwei sich berührenden Körpern kann tangential zur Kontaktfläche eine Haftkraft H übertragen werden, ohne dass die Körper gegeneinander gleiten. Diese Haftkraft ist eine reine Reaktionskraft — anders als die Gewichtskraft oder eine äußere Last ist sie nicht von vornherein bekannt, sondern muss (wie eine Lagerkraft) aus dem Freischnitt und den Gleichgewichtsbedingungen bestimmt werden.",
          "Die Haftkraft kann jedoch nicht beliebig groß werden: Sie ist durch die Haftgrenze Hmax = μ0·N begrenzt, wobei N die Normalkraft im Kontakt und μ0 der (dimensionslose) Haftreibungskoeffizient ist. Solange H ≤ Hmax gilt, bleiben die Körper in Ruhe (Haftbedingung). Im Grenzfall H = Hmax steht der Körper 'gerade so' still — jede weitere Laststeigerung führt zum Rutschen.",
        ],
        formulas: ["Hmax = μ0 · N", "H ≤ Hmax"],
        formulasLatex: ["H_{\\max} = \\mu_0\\, N", "H \\le H_{\\max}"],
        terms: [
          { term: "Haftreibungskoeffizient μ0", definition: "Dimensionslose Materialpaarungskenngröße, die über Hmax = μ0·N die maximal übertragbare Haftkraft bestimmt." },
        ],
      },
      {
        id: "12-2",
        heading: "12.2 Der Kraftkegel",
        body: [
          "Betrachtet man die resultierende Kontaktkraft aus Normalkraft N und maximaler Haftkraft Hmax, schließt diese Resultierende mit der Kontaktnormalen einen Grenzwinkel φ0 ein, für den tan φ0 = Hmax/N = μ0 gilt. Dieser Winkel heißt Haftreibungswinkel; dreht man ihn um die Kontaktnormale, entsteht der sogenannte Kraftkegel (Reibungskegel).",
          "Der Kraftkegel liefert eine besonders anschauliche geometrische Deutung der Haftbedingung: Ein Körper bleibt in Ruhe, solange die Wirkungslinie der resultierenden Kontaktkraft innerhalb dieses Kegels bleibt — verlässt sie ihn, reicht die Haftung nicht mehr aus, und der Körper beginnt zu rutschen.",
        ],
        formulas: ["tan φ0 = μ0"],
        formulasLatex: ["\\tan \\varphi_0 = \\mu_0"],
        terms: [
          { term: "Haftreibungswinkel φ0", definition: "Grenzwinkel zwischen resultierender Kontaktkraft und Kontaktnormale bei maximaler Haftung, tan φ0 = μ0." },
        ],
        figure: {
          type: "friction-incline",
          caption: "Solange die resultierende Kontaktkraft innerhalb des Kraftkegels (Öffnungswinkel φ0) bleibt, haftet der Körper.",
        },
      },
      {
        id: "12-3",
        heading: "12.3 Seilreibung: die Euler-Eytelwein-Formel",
        body: [
          "Wird ein Seil über eine raue, feststehende oder drehbare zylindrische Fläche (z. B. eine Seiltrommel) geführt, addiert sich die Reibung entlang des gesamten Umschlingungswinkels α auf. Ist S1 die Seilkraft am einen Ende und S2 die Seilkraft am anderen Ende (mit Rutschtendenz von S1 nach S2), so gilt im Grenzfall (also bei maximal ausgenutzter Haftung) die Euler-Eytelwein-Formel S2 = S1·e^(μ0·α).",
          "Da e^(μ0·α) > 1 für α > 0 gilt, kann die Seilkraft S2 ein Vielfaches von S1 betragen — schon bei moderaten Umschlingungswinkeln und Haftreibungskoeffizienten lässt sich mit vergleichsweise kleiner Gegenkraft S1 eine sehr viel größere Kraft S2 halten. Dieses Prinzip liegt z. B. Seilwinden und Bandbremsen zugrunde, bei denen ein Seil oder Band mehrfach um eine Trommel geschlungen wird, um mit kleiner Handkraft ein großes Bremsmoment zu erzeugen.",
        ],
        formulas: ["S2 ≤ S1·e^(μ0·α)", "S2 = S1·e^(μ0·α) (Grenzfall)"],
        formulasLatex: [
          "S_2 \\le S_1\\, e^{\\mu_0 \\alpha}",
          "S_2 = S_1\\, e^{\\mu_0 \\alpha} \\ (\\text{Grenzfall})",
        ],
        terms: [
          { term: "Euler-Eytelwein-Formel", definition: "S2 = S1·e^(μ0·α) — verknüpft die beiden Seilkräfte an einer rauen Umlenkung mit Haftreibungskoeffizient μ0 und Umschlingungswinkel α im Grenzfall." },
        ],
        examples: [
          "Bei μ0 = 0{,}3 und einem Umschlingungswinkel α = π (180°) ergibt sich e^(μ0·π) ≈ e^0{,}94 ≈ 2{,}57 — die maximal haltbare Seilkraft S2 ist also gut das 2{,}5-fache von S1.",
        ],
      },
    ],
  },
];
