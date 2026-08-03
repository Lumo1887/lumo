import type { SkriptChapter } from "./types";

// Eigenständiges Lehrwerk zu "Werkstoffkunde I" (Bindungslehre, Kristallaufbau,
// mechanisches Verhalten, physikalische Eigenschaften, Phasenumwandlungen und
// Zustandsdiagramme), verfasst wie ein unabhängiges Lehrbuchkapitel zum
// allgemeinen Modulthema — nicht als Paraphrase einer bestimmten Vorlesung.
// Erklärungen, Beispiele und Aufbau sind eigenständig entwickelt; nur die
// fachliche Themenabdeckung orientiert sich am üblichen Inhalt eines
// einführenden Werkstoffkunde-Moduls für Wirtschaftsingenieure.
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 ====================
  {
    id: "werkstoffgruppen-bindung",
    number: 1,
    title: "Werkstoffgruppen und Bindungsarten",
    free: true,
    intro:
      "Jeder Werkstoff lässt sich einer von vier Grundgruppen zuordnen, und diese Zuordnung erklärt bereits einen Großteil seines Verhaltens: wie steif er ist, ob er Strom leitet, ob er sich verformen lässt, bevor er bricht. Der Grund dafür liegt auf atomarer Ebene — in der Art, wie die Atome eines Materials aneinander gebunden sind. Dieses Kapitel führt die vier Werkstoffgruppen ein und erklärt die vier grundlegenden Bindungsarten, die ihre jeweiligen Eigenschaften bestimmen.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Die vier Werkstoffgruppen",
        body: [
          "Werkstoffe lassen sich anhand ihres atomaren Aufbaus und ihrer daraus resultierenden Eigenschaften in vier Gruppen einteilen: Metalle, organische Werkstoffe (Polymere), anorganisch-nichtmetallische Werkstoffe (Keramik und Glas) sowie Halbleiter. Kombiniert man Werkstoffe aus mehreren dieser Gruppen gezielt miteinander, entstehen Verbundwerkstoffe, die die vorteilhaften Eigenschaften der Ausgangsmaterialien vereinen sollen — etwa kohlenstofffaserverstärkte Kunststoffe, die die geringe Dichte von Polymeren mit der hohen Steifigkeit der Fasern kombinieren.",
          "Metalle sind typischerweise plastisch verformbar, elektrisch und thermisch gut leitfähig und undurchsichtig, aber chemisch weniger resistent (Korrosion). Polymere sind meist elektrische Isolatoren mit geringer Dichte, guter Verformbarkeit, aber vergleichsweise geringer Festigkeit und Steifigkeit. Keramiken und Gläser sind chemisch und thermisch sehr beständig, aber spröde und praktisch nicht plastisch verformbar. Halbleiter wie Silizium nehmen elektrisch eine Zwischenstellung ein: Ihre Leitfähigkeit lässt sich gezielt über Temperatur oder gezielten Fremdatomeinbau (Dotierung) steuern.",
        ],
        terms: [
          { term: "Metalle", definition: "Werkstoffgruppe mit guter Verformbarkeit sowie hoher elektrischer und thermischer Leitfähigkeit, meist auf Basis einer Metallbindung." },
          { term: "Polymere", definition: "Organische Werkstoffe aus langen Molekülketten, meist elektrische Isolatoren mit geringer Dichte und Festigkeit." },
          { term: "Keramik/Glas", definition: "Anorganisch-nichtmetallische Werkstoffe, chemisch und thermisch sehr beständig, aber spröde." },
          { term: "Verbundwerkstoff", definition: "Gezielte Kombination von Werkstoffen aus mindestens zwei Gruppen, um vorteilhafte Eigenschaften beider zu vereinen." },
        ],
        examples: [
          "Ein Fahrradrahmen aus kohlenstofffaserverstärktem Kunststoff (CFK) ist ein Verbundwerkstoff: Die Kohlenstofffasern liefern die Steifigkeit und Festigkeit in Faserrichtung, die umgebende Kunststoffmatrix hält die Fasern zusammen und überträgt Kräfte zwischen ihnen — bei deutlich geringerem Gewicht als ein vergleichbarer Stahlrahmen.",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Ionenbindung und Coulombkraft",
        body: [
          "Jedes Atom strebt danach, eine vollbesetzte äußere Elektronenschale (Edelgaskonfiguration) zu erreichen. Bei der Ionenbindung geschieht das durch vollständigen Elektronentransfer: Ein Element mit wenigen Außenelektronen gibt diese an ein Element mit vielen fehlenden Außenelektronen ab. Dabei entstehen positiv geladene Kationen und negativ geladene Anionen, die sich gegenseitig anziehen und ein Ionengitter bilden. Kationen sind kleiner als die neutralen Ausgangsatome (weniger Elektronen ziehen die verbleibende Hülle stärker zum Kern), Anionen entsprechend größer.",
          "Die anziehende Kraft zwischen zwei entgegengesetzt geladenen Ionen folgt dem Coulombschen Gesetz: Sie ist proportional zum Produkt der Ladungen und nimmt mit dem Quadrat des Abstands ab. Gleichzeitig wirkt bei sehr kleinem Abstand eine abstoßende Kraft, die aus der Überlappung der Elektronenhüllen entsteht und mit sinkendem Abstand noch stärker anwächst. Die resultierende Kraft ist die Summe aus beiden; im Gleichgewichtsabstand a₀ heben sich beide Kräfte gerade auf, und die Bindungsenergie ist an dieser Stelle minimal (energetisch günstigster Zustand).",
        ],
        formulas: [
          "FC = (1/(4π·ε0)) · (q1·q2) / r²  (Coulombsche Anziehungskraft)",
        ],
        formulasLatex: [
          "F_C = \\dfrac{1}{4\\pi\\varepsilon_0} \\cdot \\dfrac{q_1 q_2}{r^2}",
        ],
        terms: [
          { term: "Kation / Anion", definition: "Positiv geladenes Ion (durch Elektronenabgabe) bzw. negativ geladenes Ion (durch Elektronenaufnahme)." },
          { term: "Gleichgewichtsabstand a0", definition: "Ionenabstand, bei dem sich anziehende und abstoßende Kraft gerade aufheben und die Bindungsenergie minimal ist." },
        ],
        examples: [
          "Lithiumfluorid (LiF) ist ionisch gebunden mit rLi+ = 0,076 nm und rF− = 0,133 nm, also einem Ionenabstand von r = 0,209 nm. Die Coulombkraft zwischen einem Li+- und einem F−-Ion beträgt FC = (1/(4π·8,854·10⁻¹²)) · (1,602·10⁻¹⁹)² / (0,209·10⁻⁹)² ≈ 8,99·10⁹ · 2,566·10⁻³⁸ / 4,368·10⁻²⁰ ≈ 5,28·10⁻⁹ N — eine winzige Kraft für ein einzelnes Ionenpaar, die sich aber über die enorme Anzahl an Ionen in einem realen Kristall zu einer erheblichen Gesamtbindungsenergie aufsummiert.",
        ],
      },
      {
        id: "1-3",
        heading: "1.3 Kovalente Bindung und Metallbindung",
        body: [
          "Bei der kovalenten (atomaren) Bindung überlappen sich die Orbitale der Valenzelektronen benachbarter Atome, sodass gemeinsam genutzte Elektronenpaare entstehen. Sie tritt bevorzugt zwischen Atomen mit geringer Elektronegativitätsdifferenz und ähnlicher Wertigkeit auf. Ein besonders eindrückliches Beispiel ist Diamant: Jedes Kohlenstoffatom bildet über eine sp³-Hybridisierung vier gleichwertige kovalente Bindungen zu seinen Nachbaratomen aus, wodurch ein dreidimensionales, äußerst stabiles Netzwerk entsteht — der Grund für die extreme Härte von Diamant.",
          "Bei der Metallbindung geben die Atome eines Metallgitters ihre Valenzelektronen ab; es entstehen positiv geladene Atomrümpfe, die von einer frei beweglichen 'Elektronenwolke' umgeben sind. Diese frei beweglichen Elektronen erklären sowohl die hohe elektrische und thermische Leitfähigkeit von Metallen als auch ihre gute plastische Verformbarkeit: Werden Atomebenen gegeneinander verschoben, bleibt die Bindung erhalten, weil die Elektronenwolke die Verschiebung 'mitmacht'. Bei der Ionenbindung wäre eine solche Verschiebung dagegen mit dem Aufeinandertreffen gleichnamiger Ladungen und damit mit Abstoßung verbunden — ionisch gebundene Stoffe sind deshalb spröde statt plastisch verformbar.",
        ],
        terms: [
          { term: "Kovalente Bindung", definition: "Bindung durch gemeinsam genutzte Elektronenpaare zwischen Atomen ähnlicher Elektronegativität." },
          { term: "Metallbindung", definition: "Bindung durch frei bewegliche, delokalisierte Valenzelektronen um positiv geladene Atomrümpfe; Ursache für Leitfähigkeit und Verformbarkeit von Metallen." },
        ],
        examples: [
          "Aluminium ist metallisch gebunden: Die frei beweglichen Elektronen erlauben nicht nur den hohen elektrischen Strom in Freileitungen, sondern auch das Walzen von Aluminium zu dünner Folie, ohne dass das Material dabei bricht — die Atomebenen lassen sich gegeneinander verschieben, ohne dass die Bindung reißt.",
        ],
      },
      {
        id: "1-4",
        heading: "1.4 Van-der-Waals-Bindung und der Bindungstetraeder",
        body: [
          "Die Van-der-Waals-Bindung ist die schwächste der vier Bindungsarten. Sie beruht auf der Wechselwirkung zwischen elektrischen Dipolen — entweder permanenten Dipolen (wie beim Wassermolekül, bei dem die Ladung ungleichmäßig zwischen Sauerstoff- und Wasserstoffatomen verteilt ist) oder kurzzeitig induzierten Dipolen. Obwohl einzelne Van-der-Waals-Bindungen schwach sind, spielen sie eine wichtige Rolle bei Hochpolymeren: Innerhalb einer Polymerkette sind die Atome kovalent (stark) gebunden, zwischen benachbarten Ketten wirken dagegen nur die schwachen Van-der-Waals-Kräfte — das erklärt, warum Polymere insgesamt deutlich geringere Festigkeiten und Schmelztemperaturen aufweisen als Metalle oder Keramiken.",
          "Die vier Bindungsarten lassen sich anschaulich in einem Bindungstetraeder anordnen, an dessen Ecken die Reinformen kovalent, ionisch, metallisch und Van-der-Waals stehen. Die vier Werkstoffgruppen lassen sich diesem Tetraeder zuordnen: Metalle sind überwiegend metallisch gebunden, Keramik und Glas überwiegend ionisch bzw. kovalent, Halbleiter kovalent, und Polymere kombinieren starke kovalente Bindungen innerhalb der Ketten mit schwachen Van-der-Waals-Bindungen zwischen ihnen. Reale Materialien liegen dabei oft nicht exakt in einer Ecke, sondern als Mischform irgendwo im Inneren des Tetraeders.",
        ],
        terms: [
          { term: "Van-der-Waals-Bindung", definition: "Schwache Bindung durch Wechselwirkung permanenter oder induzierter elektrischer Dipole." },
          { term: "Bindungstetraeder", definition: "Schematische Einordnung der vier Bindungsarten (kovalent, ionisch, metallisch, Van-der-Waals) und der Werkstoffgruppen dazwischen." },
        ],
        examples: [
          "Polyethylen besteht aus langen Kohlenwasserstoffketten, deren Atome innerhalb der Kette kovalent gebunden sind (sehr stark), während zwischen benachbarten Ketten nur Van-der-Waals-Kräfte wirken (sehr schwach). Deshalb schmilzt Polyethylen bereits bei rund 130 °C, obwohl die einzelnen C–C-Bindungen innerhalb der Kette ähnlich stark sind wie im Diamant.",
        ],
      },
    ],
  },
  // ==================== Kapitel 2 ====================
  {
    id: "atomarer-aufbau",
    number: 2,
    title: "Atomarer Aufbau und Periodensystem",
    free: false,
    intro:
      "Um zu verstehen, warum sich Atome auf die im letzten Kapitel beschriebenen Arten binden, lohnt ein genauerer Blick auf ihren inneren Aufbau. Dieses Kapitel behandelt Atomkern und Elektronenhülle, die Systematik der Elektronenkonfiguration über Quantenzahlen sowie die daraus folgende Struktur des Periodensystems.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Atomkern, Massenzahl und Isotope",
        body: [
          "Ein Atom besteht aus einem Atomkern (positiv geladene Protonen und elektrisch neutrale Neutronen) und einer Elektronenhülle mit negativ geladenen Elektronen. Die Ordnungszahl Z gibt die Anzahl der Protonen an und bestimmt die Position im Periodensystem; im ungeladenen Atom ist sie zugleich gleich der Anzahl der Elektronen. Die Massenzahl M ist die Summe aus Protonen- und Neutronenzahl. Der Atomkern trägt fast die gesamte Masse eines Atoms, aber kaum zu seiner räumlichen Ausdehnung bei — die meisten werkstoffrelevanten Eigenschaften werden stattdessen von der Elektronenhülle bestimmt.",
          "Atome desselben Elements (gleiches Z) können sich in der Anzahl ihrer Neutronen unterscheiden; solche Varianten heißen Isotope. Sie besitzen dieselbe Kernladung und damit dieselben chemischen Eigenschaften, aber eine unterschiedliche Masse.",
        ],
        formulas: [
          "M = Z + N  (Massenzahl = Protonenzahl + Neutronenzahl)",
        ],
        formulasLatex: [
          "M = Z + N",
        ],
        terms: [
          { term: "Ordnungszahl Z", definition: "Anzahl der Protonen im Atomkern; bestimmt die Position eines Elements im Periodensystem." },
          { term: "Massenzahl M", definition: "Summe aus Protonen- und Neutronenzahl eines Atoms." },
          { term: "Isotope", definition: "Atome desselben Elements (gleiches Z) mit unterschiedlicher Neutronenzahl und damit unterschiedlicher Massenzahl M." },
        ],
        examples: [
          "Chlor kommt natürlich überwiegend als zwei Isotope vor: 35Cl mit Z=17 und M=35 (also N=35−17=18 Neutronen) sowie 37Cl mit Z=17 und M=37 (N=20 Neutronen). Beide besitzen dieselbe Anzahl an Protonen und Elektronen und damit identische chemische Eigenschaften, unterscheiden sich aber in ihrer Masse und damit in ihrer Häufigkeit bei massenspektrometrischen Messungen.",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Quantenzahlen und Elektronenkonfiguration",
        body: [
          "Jedes Elektron eines Atoms lässt sich eindeutig über vier Quantenzahlen beschreiben: die Hauptquantenzahl n (n=1,2,3,...), die das Hauptenergieniveau bzw. die Schale festlegt, die Nebenquantenzahl l (l=0,...,n−1), die die Form des Orbitals bestimmt (s, p, d, f für l=0,1,2,3), die Magnetquantenzahl ml (ganzzahlig zwischen −l und +l), die die Orientierung im Raum beschreibt, sowie die Spinquantenzahl ms (+½ oder −½). Nach dem Pauli-Prinzip dürfen niemals zwei Elektronen eines Atoms in allen vier Quantenzahlen übereinstimmen — jedes Elektron besetzt ein eigenes, eindeutiges Energieniveau.",
          "Aus dem Pauli-Prinzip folgt, dass eine Schale mit Hauptquantenzahl n maximal 2n² Elektronen aufnehmen kann. Die Besetzung der Energieniveaus erfolgt von unten (niedrigste Energie) nach oben; dabei wird beispielsweise das 4s-Niveau bereits besetzt, bevor das energetisch etwas höher liegende 3d-Niveau gefüllt wird — das erklärt, warum die vierte Periode des Periodensystems nach Calcium mit den sogenannten Nebengruppenelementen (Auffüllen der 3d-Schale) fortgesetzt wird, statt direkt in die fünfte Periode überzugehen.",
        ],
        formulas: [
          "Nmax(n) = 2n²  (maximale Elektronenzahl einer Schale)",
        ],
        formulasLatex: [
          "N_{max}(n) = 2n^2",
        ],
        terms: [
          { term: "Hauptquantenzahl n", definition: "Legt das Hauptenergieniveau (die Schale) eines Elektrons fest." },
          { term: "Pauli-Prinzip", definition: "Zwei Elektronen eines Atoms dürfen niemals in allen vier Quantenzahlen übereinstimmen." },
          { term: "Nebengruppenelemente", definition: "Elemente, bei denen sukzessive das 3d- bzw. 4d-Niveau aufgefüllt wird, nachdem das energetisch niedrigere 4s- bzw. 5s-Niveau bereits vollständig besetzt ist." },
        ],
        examples: [
          "Aluminium (Z=13) besitzt die Elektronenkonfiguration 1s² 2s² 2p⁶ 3s² 3p¹. Die K-Schale (n=1) ist mit 2 Elektronen voll besetzt (Nmax=2·1²=2), die L-Schale (n=2) mit 8 Elektronen ebenfalls voll (Nmax=2·2²=8), die M-Schale (n=3) trägt die verbleibenden 3 Elektronen und ist mit maximal 2·3²=18 möglichen Plätzen bei Weitem nicht voll — Aluminium besitzt damit 3 Außenelektronen, was zur dritten Hauptgruppe passt.",
        ],
      },
      {
        id: "2-3",
        heading: "2.3 Aufbau des Periodensystems",
        body: [
          "Die Stellung eines Elements im Periodensystem folgt direkt aus seiner Elektronenkonfiguration. Bei den Hauptgruppenelementen gibt die Gruppennummer die Anzahl der Außenelektronen an (maximal 8), und die Periodennummer entspricht der höchsten besetzten Hauptquantenzahl. Elemente derselben Hauptgruppe besitzen eine ähnliche Anzahl an Außenelektronen und verhalten sich deshalb chemisch ähnlich — bekannte Gruppen sind die Alkalimetalle (1. Hauptgruppe), die Erdalkalimetalle (2.), die Halogene (7.) und die Edelgase (8.), deren volle Außenschale sie chemisch besonders reaktionsträge macht.",
          "Zusätzlich zu den acht Hauptgruppen gibt es die Nebengruppenelemente (Übergangsmetalle), bei denen — wie in 2.2 beschrieben — das 3d- bzw. 4d-Energieniveau sukzessive aufgefüllt wird, nachdem das energetisch niedrigere s-Niveau der nächsten Schale bereits besetzt ist. Eine weitere Besonderheit bilden die Lanthanide und Actinide mit jeweils 14 Elementen, bei denen das f-Niveau aufgefüllt wird; sie werden aus Platzgründen meist als eigene Zeile unterhalb des Periodensystems dargestellt, gehören aber strukturell zwischen die Elemente Lanthan/Hafnium bzw. Actinium und das nachfolgende Element.",
        ],
        terms: [
          { term: "Hauptgruppe", definition: "Spalte des Periodensystems, deren Nummer die Anzahl der Außenelektronen der zugehörigen Elemente angibt." },
          { term: "Periode", definition: "Zeile des Periodensystems; ihre Nummer entspricht der höchsten besetzten Hauptquantenzahl der zugehörigen Elemente." },
          { term: "Lanthanide/Actinide", definition: "Zwei Serien von je 14 Elementen, bei denen das f-Energieniveau aufgefüllt wird; werden meist separat unterhalb des Periodensystems dargestellt." },
        ],
        examples: [
          "Kalium (Z=19) steht in der 4. Periode und der 1. Hauptgruppe: Seine Elektronenkonfiguration endet mit einem einzelnen 4s¹-Elektron, entsprechend der 1. Hauptgruppe (Alkalimetalle), und die höchste besetzte Hauptquantenzahl ist n=4, entsprechend der 4. Periode.",
        ],
      },
    ],
  },
  // ==================== Kapitel 3 ====================
  {
    id: "elastisches-verhalten",
    number: 3,
    title: "Elastisches Verhalten: Spannung, Dehnung, Hookesches Gesetz",
    free: false,
    intro:
      "Wie reagiert ein Werkstoff, wenn eine äußere Kraft auf ihn einwirkt? Diese Frage ist für jede technische Anwendung entscheidend. Dieses Kapitel führt die grundlegenden mechanischen Kenngrößen Spannung und Dehnung ein und beschreibt den linear-elastischen Bereich, in dem sich ein Werkstoff nach Entlastung wieder vollständig in seine Ausgangsform zurückverformt.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Normalspannung und Dehnung",
        body: [
          "Wirkt eine äußere Kraft F senkrecht auf eine Querschnittsfläche A eines Bauteils, entsteht darin eine Normalspannung σ. Sie ist definiert als Kraft pro Fläche und wird üblicherweise in N/mm² angegeben, was der Einheit MPa entspricht. Bewirkt die Spannung eine Verlängerung des Bauteils, spricht man von Zugspannung, bei einer Verkürzung von Druckspannung.",
          "Die relative Längenänderung eines belasteten Bauteils wird als Dehnung ε bezeichnet: die absolute Längenänderung Δl bezogen auf die ursprüngliche Länge l0. Da es sich um den Quotienten zweier Längen handelt, ist die Dehnung dimensionslos; wegen der oft sehr kleinen Werte wird sie häufig in Prozent angegeben.",
        ],
        formulas: [
          "σ = F / A  (Normalspannung)",
          "ε = Δl / l0  (Dehnung)",
        ],
        formulasLatex: [
          "\\sigma = \\dfrac{F}{A}",
          "\\varepsilon = \\dfrac{\\Delta l}{l_0}",
        ],
        terms: [
          { term: "Normalspannung σ", definition: "Senkrecht zur Querschnittsfläche wirkende Kraft, bezogen auf diese Fläche: σ = F/A." },
          { term: "Dehnung ε", definition: "Relative Längenänderung eines Bauteils: ε = Δl/l0, dimensionslos." },
        ],
        examples: [
          "Ein Kupferdraht mit einer Querschnittsfläche von A = 2 mm² wird mit einer Kraft von F = 120 N belastet. Die Normalspannung beträgt σ = 120 N / 2 mm² = 60 N/mm² = 60 MPa. Verlängert sich der ursprünglich l0 = 800 mm lange Draht dabei um Δl = 0,55 mm, beträgt die Dehnung ε = 0,55/800 ≈ 0,000688, also etwa 0,069%.",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Schubspannung und Querkontraktion",
        body: [
          "Wirkt eine Kraft dagegen parallel (tangential) zur beanspruchten Fläche, entsteht eine Schubspannung τ, ebenfalls definiert als Kraft pro Fläche. Die daraus resultierende Winkeländerung des Bauteils wird als Schiebung γ bezeichnet und entspricht dem Quotienten aus der maximalen seitlichen Auslenkung x und der Ausgangslänge l0 senkrecht dazu — anschaulich also dem Kippwinkel des Bauteils unter der Schubbeanspruchung.",
          "Wird ein Bauteil unter Zugspannung länger, verringert sich gleichzeitig sein Querschnitt, weil das Materialvolumen näherungsweise konstant bleibt. Diese relative Querschnittsänderung wird als Querkontraktion εq bezeichnet und ist proportional zur Längsdehnung ε, mit der (materialabhängigen) Querkontraktionszahl ν als Proportionalitätsfaktor. Da es sich um eine Verringerung handelt, trägt εq ein negatives Vorzeichen.",
        ],
        formulas: [
          "τ = F / A  (Schubspannung)",
          "γ = x / l0  (Schiebung)",
          "εq = −ν · ε  (Querkontraktion)",
        ],
        formulasLatex: [
          "\\tau = \\dfrac{F}{A}",
          "\\gamma = \\dfrac{x}{l_0}",
          "\\varepsilon_q = -\\nu \\cdot \\varepsilon",
        ],
        terms: [
          { term: "Schubspannung τ", definition: "Tangential zur beanspruchten Fläche wirkende Kraft, bezogen auf diese Fläche." },
          { term: "Querkontraktionszahl ν (Poisson-Zahl)", definition: "Materialkonstante, die das Verhältnis von Quer- zu Längsdehnung bei Zugbeanspruchung beschreibt." },
        ],
        examples: [
          "Ein Titanstab mit ν = 0,34 wird auf eine Längsdehnung von ε = 0,4% (=0,004) gedehnt. Die Querkontraktion beträgt εq = −0,34 · 0,004 = −0,00136, der Stab wird also um etwa 0,136% dünner, während er um 0,4% länger wird.",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Hookesches Gesetz und Elastizitätsmodul",
        body: [
          "Solange die Verformung eines Werkstoffs vollständig reversibel ist (linear-elastischer Bereich), besteht zwischen Spannung und Dehnung ein linearer Zusammenhang: das Hookesche Gesetz. Für Normalspannungen gilt σ = E·ε, wobei der Elastizitätsmodul E eine Materialkonstante ist, die angibt, wie steif ein Werkstoff ist — je größer E, desto mehr Spannung ist für dieselbe Dehnung nötig. Für Schubspannungen gilt analog τ = G·γ mit dem Schubmodul G.",
          "Elastizitätsmodul, Schubmodul und Querkontraktionszahl sind bei isotropen Werkstoffen nicht unabhängig voneinander, sondern über eine feste Beziehung miteinander verknüpft: ν = E/(2G) − 1. Kennt man zwei dieser drei Größen, lässt sich die dritte daraus berechnen. Der E-Modul besitzt dieselbe Einheit wie die Spannung (N/mm² = MPa), da die Dehnung selbst dimensionslos ist.",
        ],
        formulas: [
          "σ = E · ε  (Hookesches Gesetz, Normalspannung)",
          "τ = G · γ  (Hookesches Gesetz, Schubspannung)",
          "ν = E / (2·G) − 1",
        ],
        formulasLatex: [
          "\\sigma = E \\cdot \\varepsilon",
          "\\tau = G \\cdot \\gamma",
          "\\nu = \\dfrac{E}{2G} - 1",
        ],
        terms: [
          { term: "Elastizitätsmodul E", definition: "Materialkonstante, die den linearen Zusammenhang zwischen Normalspannung und Dehnung im elastischen Bereich beschreibt (Steifigkeit)." },
          { term: "Schubmodul G", definition: "Materialkonstante, die den linearen Zusammenhang zwischen Schubspannung und Schiebung im elastischen Bereich beschreibt." },
        ],
        examples: [
          "Ein Messingstab (E = 100 000 N/mm²) mit Querschnittsfläche A = 25 mm² wird mit F = 5 000 N belastet. Die Spannung beträgt σ = F/A = 5 000/25 = 200 N/mm². Daraus folgt die Dehnung ε = σ/E = 200/100 000 = 0,002 (0,2%). Bei einer Ausgangslänge von l0 = 400 mm verlängert sich der Stab um Δl = ε·l0 = 0,002·400 = 0,8 mm.",
        ],
      },
    ],
  },
  // ==================== Kapitel 4 ====================
  {
    id: "kristallgitter",
    number: 4,
    title: "Kristallgitter: Bravais-Systeme und dichteste Packungen",
    free: false,
    intro:
      "Viele wichtige Werkstoffe wie Metalle und Keramiken sind kristallin aufgebaut: Ihre Atome sind über große Entfernungen hinweg dreidimensional periodisch angeordnet. Dieses Kapitel führt die Grundtypen kristalliner Gitter ein und zeigt, wie sich aus der geometrischen Anordnung der Atome Kenngrößen wie die Packungsdichte berechnen lassen.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Die 7 Kristallsysteme und 14 Bravaisgitter",
        body: [
          "Alle in der Natur vorkommenden Kristallstrukturen lassen sich sieben Kristallsystemen zuordnen, die sich durch die Kantenlängenverhältnisse (a, b, c) und Winkel (α, β, γ) ihrer Elementarzelle unterscheiden. Das kubische System (a=b=c, alle Winkel 90°) besitzt die höchste Symmetrie, das trikline System (a≠b≠c, alle Winkel unterschiedlich und ≠90°) die geringste. Dazwischen liegen das tetragonale, orthorhombische, hexagonale, rhomboedrische und monokline System.",
          "Innerhalb dieser sieben Grundsysteme unterscheidet man zusätzlich nach der Anordnung der Atome innerhalb der Elementarzelle: primitiv (Atome nur auf den Ecken), innenzentriert (zusätzlich ein Atom im Zentrum) und flächenzentriert (zusätzlich je ein Atom auf jeder Seitenfläche). Insgesamt ergeben sich daraus 14 verschiedene Bravaisgittertypen — mehr als 7 Grundsysteme, aber weniger als 7 mal 3 mögliche Kombinationen, weil nicht jede Zentrierungsart bei jedem Kristallsystem geometrisch eine wirklich neue Struktur ergibt.",
        ],
        table: {
          caption: "Kantenlängen und Winkel der sieben Kristallsysteme",
          headers: ["Kristallsystem", "Kantenlängen", "Winkel"],
          rows: [
            ["Kubisch", "a = b = c", "α=β=γ=90°"],
            ["Tetragonal", "a = b ≠ c", "α=β=γ=90°"],
            ["Hexagonal", "a = b ≠ c", "α=β=90°, γ=120°"],
            ["Rhomboedrisch", "a = b = c", "α=β=γ≠90°"],
            ["Orthorhombisch", "a ≠ b ≠ c", "α=β=γ=90°"],
            ["Monoklin", "a ≠ b ≠ c", "α=γ=90°, β≠90°"],
            ["Triklin", "a ≠ b ≠ c", "α≠β≠γ≠90°"],
          ],
        },
        terms: [
          { term: "Elementarzelle", definition: "Kleinste, sich periodisch wiederholende Baueinheit eines Kristallgitters." },
          { term: "Bravaisgitter", definition: "Eine der 14 möglichen Kombinationen aus Kristallsystem und Zentrierungsart (primitiv, innen- oder flächenzentriert)." },
        ],
        examples: [
          "Ein Kristall mit a=b=c=0,405 nm und allen Winkeln gleich 90° gehört zum kubischen System — unabhängig davon, ob es sich um ein primitives, ein innenzentriertes oder ein flächenzentriertes Bravaisgitter handelt, denn diese Unterscheidung betrifft nur die Atomanordnung innerhalb der Elementarzelle, nicht ihre äußere Geometrie.",
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Kubisch primitives, raumzentriertes und flächenzentriertes Gitter",
        body: [
          "Beim kubisch primitiven Gitter (pc) sitzt auf jeder der 8 Würfelecken ein Atom. Da sich jede Ecke gleichzeitig 8 benachbarte Elementarzellen teilen, zählt ein Eckatom nur zu 1/8 zur eigenen Zelle — insgesamt ergibt sich damit genau 1 Atom pro Elementarzelle. Beim kubisch raumzentrierten Gitter (krz/bcc) kommt zusätzlich ein Atom in der Würfelmitte hinzu, das vollständig der Zelle zugerechnet wird: 8·1/8 + 1 = 2 Atome pro Elementarzelle. Beim kubisch flächenzentrierten Gitter (kfz/fcc) sitzt zusätzlich zu den 8 Eckatomen je ein Atom auf jeder der 6 Würfelflächen, das sich zwei Zellen teilt und daher zur Hälfte zählt: 8·1/8 + 6·1/2 = 4 Atome pro Elementarzelle.",
          "Aus der Anzahl der Atome pro Elementarzelle, ihrem Volumen und der Kantenlänge a lässt sich die Packungsdichte berechnen: der Anteil des Elementarzellenvolumens, der tatsächlich von (als Kugeln angenäherten) Atomen ausgefüllt ist. Dabei unterscheidet sich der Zusammenhang zwischen Kantenlänge a und Atomradius r je nach Gittertyp, je nachdem, entlang welcher Richtung sich die Atome berühren: beim pc-Gitter entlang der Würfelkante (a=2r), beim krz-Gitter entlang der Raumdiagonale (a=4r/√3), beim kfz-Gitter entlang der Flächendiagonale (a=4r/√2). Je dichter die Packung, desto größer die resultierende Packungsdichte: 52% beim pc-, 68% beim krz- und 74% beim kfz-Gitter — letzteres ist zugleich die maximal mögliche Packungsdichte gleich großer Kugeln überhaupt.",
        ],
        formulas: [
          "Packungsdichte = (Atome pro EZ · VolumenAtom) / VolumenEZ",
          "pc: a = 2r, Packungsdichte ≈ 0,52",
          "krz (bcc): a = 4r/√3, Packungsdichte ≈ 0,68",
          "kfz (fcc): a = 4r/√2, Packungsdichte ≈ 0,74",
        ],
        formulasLatex: [
          "\\text{Packungsdichte} = \\dfrac{(\\text{Atome/EZ}) \\cdot \\frac{4}{3}\\pi r^3}{a^3}",
          "\\text{pc: } a = 2r,\\ \\approx 0{,}52",
          "\\text{krz: } a = \\dfrac{4r}{\\sqrt{3}},\\ \\approx 0{,}68",
          "\\text{kfz: } a = \\dfrac{4r}{\\sqrt{2}},\\ \\approx 0{,}74",
        ],
        terms: [
          { term: "Packungsdichte", definition: "Anteil des Elementarzellenvolumens, der von (als Kugeln angenäherten) Atomen tatsächlich ausgefüllt wird." },
          { term: "Kubisch flächenzentriertes Gitter (kfz/fcc)", definition: "Kubisches Bravaisgitter mit Atomen auf allen 8 Ecken und allen 6 Seitenflächen; 4 Atome/EZ, Packungsdichte 74%." },
        ],
        examples: [
          "Nickel kristallisiert kubisch flächenzentriert mit einem Atomradius von r = 0,1246 nm. Die Gitterkonstante ergibt sich aus a = 4r/√2 = 4·0,1246/1,4142 ≈ 0,3524 nm. Mit 4 Atomen pro Elementarzelle und einem Zellvolumen von a³ ≈ 0,04377 nm³ lässt sich daraus über die Molmasse (58,69 g/mol) auch die theoretische Dichte des Nickels berechnen.",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Hexagonal dichteste Packung und Koordinationszahl",
        body: [
          "Neben dem kubisch flächenzentrierten Gitter existiert eine zweite Möglichkeit, Kugeln gleicher Größe mit der maximalen Packungsdichte von 74% anzuordnen: die hexagonal dichteste Packung (hdP). Sie besitzt ebenfalls 2 Atome pro Elementarzelle und unterscheidet sich vom kfz-Gitter nur in der Stapelfolge der dichtest gepackten Ebenen: Bei kubisch dichtester Packung stapeln sich die Ebenen im Muster ABCABC..., bei hexagonaler dichtester Packung im Muster ABAB... — die dritte Lage liegt hier also wieder exakt über der ersten, statt eine neue, dritte Position einzunehmen.",
          "Die Koordinationszahl (KOZ) beschreibt, wie viele nächste Nachbaratome ein Atom mit gleichem Abstand umgeben. Bei den beiden dichtesten Packungen (kfz und hdP) beträgt sie KOZ=12, beim krz-Gitter KOZ=8 und beim pc-Gitter KOZ=6. Für Ionenkristalle hängt die KOZ zusätzlich vom Radienverhältnis zwischen Kation und Anion ab: Je ähnlicher sich die Ionenradien sind, desto mehr Nachbarionen können sich um ein Zentralion gruppieren, ohne dass sich gleich geladene Ionen zu nahekommen.",
        ],
        table: {
          caption: "Koordinationszahl in Abhängigkeit vom Radienverhältnis rKation/rAnion",
          headers: ["Radienverhältnis rK/rA", "Koordinationspolyeder", "KOZ"],
          rows: [
            ["0 – 0,155", "Hantel (linear)", "2"],
            ["0,155 – 0,225", "Tetraeder", "4"],
            ["0,225 – 0,414", "Oktaeder", "6"],
            ["0,414 – 0,732", "Hexaeder (Würfel)", "8"],
            ["0,732 – 1", "dichteste Packung", "12"],
          ],
        },
        terms: [
          { term: "Hexagonal dichteste Packung (hdP)", definition: "Kristallstruktur mit maximaler Packungsdichte (74%) und Stapelfolge ABAB...; 2 Atome pro Elementarzelle." },
          { term: "Koordinationszahl (KOZ)", definition: "Anzahl der nächsten Nachbaratome bzw. -ionen eines Atoms bzw. Ions mit gleichem Abstand." },
        ],
        examples: [
          "Zink kristallisiert hexagonal dichtest gepackt. Für ein Ionenpaar mit rKation=0,072 nm und rAnion=0,140 nm ergibt sich dagegen ein Radienverhältnis von 0,072/0,140 ≈ 0,514 — nach obiger Tabelle liegt das im Bereich 0,414 bis 0,732, es ist also eine oktaedrische Koordination mit KOZ=8 zu erwarten.",
        ],
      },
      {
        id: "4-4",
        heading: "4.4 Polymorphie am Beispiel Eisen",
        body: [
          "Manche Elemente ändern ihre Kristallstruktur in Abhängigkeit von Temperatur oder Druck — dieses Phänomen wird als Polymorphie oder Allotropie bezeichnet. Das bekannteste Beispiel ist reines Eisen: Bei Raumtemperatur liegt es als α-Eisen (Ferrit) in einer kubisch raumzentrierten Struktur vor. Bei T=911°C wandelt es sich in γ-Eisen (Austenit) mit kubisch flächenzentrierter Struktur um, die bis 1392°C stabil bleibt. Oberhalb von 1392°C bis zum Schmelzpunkt bei 1536°C liegt wieder eine kubisch raumzentrierte Struktur vor, diesmal als δ-Eisen bezeichnet, mit einer etwas größeren Gitterkonstante als α-Eisen.",
          "Diese Umwandlungen sind technisch enorm bedeutsam, weil sich die maximale Löslichkeit von Kohlenstoff im Eisengitter mit der Kristallstruktur drastisch ändert: Die kubisch flächenzentrierte γ-Phase kann deutlich mehr Kohlenstoff in ihren (größeren) Gitterlücken aufnehmen als die krz-Phasen. Genau dieser Unterschied ist die Grundlage der Wärmebehandlung von Stahl (siehe Kapitel 13) — durch gezieltes Erhitzen in die γ-Phase und anschließendes kontrolliertes Abkühlen lassen sich die Eigenschaften von Stahl in weiten Grenzen steuern.",
        ],
        terms: [
          { term: "Polymorphie (Allotropie)", definition: "Auftreten unterschiedlicher Kristallstrukturen desselben Elements in Abhängigkeit von Temperatur oder Druck." },
          { term: "α-, γ-, δ-Eisen", definition: "Die drei Kristallmodifikationen von reinem Eisen: α (krz, bis 911°C), γ (kfz, 911–1392°C), δ (krz, 1392°C bis Schmelzpunkt)." },
        ],
        examples: [
          "Erhitzt man ein Stück reines Eisen von Raumtemperatur langsam auf 1000°C, durchläuft es bei 911°C eine Umwandlung von der krz- in die kfz-Struktur (α→γ), obwohl sich die chemische Zusammensetzung dabei überhaupt nicht ändert — allein durch die Temperaturänderung ordnen sich dieselben Atome in einem neuen Gittertyp an.",
        ],
      },
    ],
  },
  // ==================== Kapitel 5 ====================
  {
    id: "roentgenographie",
    number: 5,
    title: "Röntgenographische Strukturanalyse",
    free: false,
    intro:
      "Um Kristallstrukturen und ihre Abmessungen tatsächlich zu vermessen, braucht es eine Methode, die im Bereich weniger Zehntel Nanometer noch auflösen kann — genau in dieser Größenordnung liegt die Wellenlänge von Röntgenstrahlung. Dieses Kapitel führt zunächst die Notation für Richtungen und Ebenen im Kristallgitter ein und behandelt dann, wie sich daraus über Röntgenbeugung reale Gitterabstände bestimmen lassen.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Gitterrichtungen und Millersche Indizes",
        body: [
          "Jede Atomposition innerhalb einer Elementarzelle lässt sich durch Koordinaten uvw beschreiben, wobei der Nullpunkt in eine Ecke der Zelle gelegt wird. Eine Gitterrichtung [uvw] ist die vom Ursprung ausgehende Gerade durch den Gitterpunkt uvw; sie läuft über diesen Punkt hinaus unendlich weiter. Richtungen, deren Indizes sich nur durch Permutation oder Vorzeichen unterscheiden, sind kristallographisch gleichwertig und werden zu einer Familie <uvw> zusammengefasst — im kubischen System bilden beispielsweise alle 8 Raumdiagonalen die Familie <111>.",
          "Netzebenen werden dagegen über die Millerschen Indizes (hkl) beschrieben. Zu ihrer Bestimmung sucht man zunächst die Achsenabschnitte ma, nb, pc, in denen die Ebene die drei Koordinatenachsen schneidet, bildet davon die Kehrwerte 1/m, 1/n, 1/p und multipliziert diese anschließend mit dem kleinsten gemeinsamen Nenner, sodass sich drei ganze Zahlen hkl ergeben. Verläuft eine Ebene parallel zu einer Achse, schneidet sie diese im Unendlichen, und der zugehörige Index wird zu 0 (da 1/∞=0).",
        ],
        terms: [
          { term: "Gitterrichtung [uvw]", definition: "Vom Ursprung ausgehende Gerade durch den Gitterpunkt uvw, in eckigen Klammern notiert." },
          { term: "Millersche Indizes (hkl)", definition: "Aus den reziproken Achsenabschnitten einer Netzebene ermittelte, stets ganzzahlige Kennzahl der Ebene." },
        ],
        examples: [
          "Eine Netzebene schneidet die a-Achse bei m=1, die b-Achse bei n=3 und verläuft parallel zur c-Achse (p=∞). Die Kehrwerte lauten 1/1, 1/3, 1/∞ = 1, 0,333, 0. Multipliziert mit dem kleinsten gemeinsamen Nenner (3) ergeben sich die ganzzahligen Millerschen Indizes (310).",
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Bragg'sche Gleichung und Netzebenenabstand",
        body: [
          "Trifft Röntgenstrahlung auf eine Schar paralleler, mit Atomen besetzter Netzebenen, wird sie an jeder Ebene teilweise reflektiert. Konstruktive Interferenz (Verstärkung) tritt nur dann auf, wenn der Gangunterschied zwischen den an benachbarten Ebenen reflektierten Strahlen genau einem ganzzahligen Vielfachen der Wellenlänge entspricht. Da dieser Gangunterschied Δ=2·d·sinθ beträgt (mit dem Netzebenenabstand d und dem Einfallswinkel θ), ergibt sich daraus die Bragg'sche Gleichung.",
          "Bei kubischen Kristallsystemen lässt sich der Netzebenenabstand d(hkl) direkt aus der Gitterkonstante a0 und den Millerschen Indizes berechnen. Kombiniert man diese Beziehung mit der Bragg'schen Gleichung, lässt sich aus einem gemessenen Beugungswinkel θ bei bekannter Wellenlänge λ und bekannten Indizes hkl die Gitterkonstante a0 eines unbekannten kubischen Kristalls bestimmen — die Grundlage der röntgenographischen Strukturanalyse.",
        ],
        formulas: [
          "2·d·sinθ = n·λ  (Bragg'sche Gleichung)",
          "d(hkl) = a0 / √(h² + k² + l²)  (Netzebenenabstand, kubisches System)",
        ],
        formulasLatex: [
          "2 d \\sin\\theta = n\\lambda",
          "d_{(hkl)} = \\dfrac{a_0}{\\sqrt{h^2+k^2+l^2}}",
        ],
        terms: [
          { term: "Netzebenenabstand d", definition: "Kleinster Abstand zwischen zwei benachbarten, parallelen Netzebenen derselben Netzebenenschar." },
          { term: "Bragg'sche Gleichung", definition: "Bedingung für konstruktive Interferenz bei der Reflexion von Röntgenstrahlung an Netzebenen: 2d·sinθ=nλ." },
        ],
        examples: [
          "Ein kubischer Goldkristall zeigt bei Bestrahlung mit Röntgenstrahlung der Wellenlänge λ=1,540 Å einen (200)-Reflex bei einem Beugungswinkel von 2θ=44,4°, also θ=22,2°. Für n=1 folgt aus der Bragg'schen Gleichung: d = λ/(2·sinθ) = 1,540/(2·sin22,2°) = 1,540/(2·0,3778) ≈ 2,038 Å. Da bei kubischen Systemen a0 = d·√(h²+k²+l²) gilt und für die (200)-Ebene h²+k²+l²=4 ist, ergibt sich die Gitterkonstante zu a0 = 2,038·√4 ≈ 4,076 Å — nahe am Literaturwert von Gold (a0≈4,08 Å).",
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Debye-Scherrer- und Diffraktometerverfahren",
        body: [
          "Zur praktischen Durchführung röntgenographischer Messungen an kristallinen Pulvern (vielen statistisch orientierten Kristalliten gleichzeitig) haben sich zwei klassische Verfahren etabliert. Beim Debye-Scherrer-Verfahren wird eine dünne, stäbchenförmige Probe in einer zylindrischen Kamera mit monochromatischer Röntgenstrahlung bestrahlt; die gebeugten Strahlen bilden auf einem kreisrund gebogenen Röntgenfilm charakteristische, gekrümmte Linien. Aus dem gemessenen Abstand dieser Linien zum Strahleintrittspunkt lässt sich der Beugungswinkel und daraus über die Bragg'sche Gleichung der zugehörige Netzebenenabstand berechnen.",
          "Beim moderneren Zählrohrdiffraktometerverfahren wird die reflektierte Strahlung nicht auf einem Film, sondern elektronisch über ein Zählrohr detektiert, während sich Probe und Detektor kontrolliert um definierte Winkel drehen (θ-2θ-Diffraktometer). Das Ergebnis ist ein Röntgenspektrum, das die Intensität der reflektierten Strahlung in Abhängigkeit vom Beugungswinkel 2θ zeigt; jeder charakteristische Peak lässt sich einer bestimmten Netzebene zuordnen. Da jeder kristalline Stoff ein charakteristisches Röntgenspektrum besitzt, dient dieses Verfahren neben der Bestimmung von Gitterkonstanten auch der Identifizierung unbekannter Substanzen.",
        ],
        terms: [
          { term: "Debye-Scherrer-Verfahren", definition: "Röntgenographisches Messverfahren mit filmbasierter Detektion an einer stäbchenförmigen Probe in zylindrischer Kamera." },
          { term: "θ-2θ-Diffraktometer", definition: "Röntgenographisches Messverfahren mit elektronischer Detektion über ein Zählrohr, das sich mit doppelter Winkelgeschwindigkeit relativ zur Probe bewegt." },
        ],
        examples: [
          "Im Röntgenspektrum einer unbekannten Metallprobe erscheinen mehrere charakteristische Peaks bei bestimmten 2θ-Winkeln. Durch Vergleich der daraus berechneten Netzebenenabstände mit einer Referenzdatenbank lässt sich das Material identifizieren, ohne dass eine chemische Analyse nötig wäre.",
        ],
      },
    ],
  },
  // ==================== Kapitel 6 ====================
  {
    id: "legierungsstrukturen",
    number: 6,
    title: "Legierungsstrukturen und Mischkristalle",
    free: false,
    intro:
      "Die meisten technisch genutzten Metalle sind keine Reinelemente, sondern Legierungen mit gezielt oder unbeabsichtigt eingebauten Fremdatomen. Dieses Kapitel beschreibt, auf welche Arten sich Fremdatome in ein Wirtsgitter einbauen lassen und wie sich daraus Kristallstrukturen mit veränderten Eigenschaften ergeben.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Substitutions- und Einlagerungsmischkristalle",
        body: [
          "Bei einem Substitutionsmischkristall werden Atome auf den regulären Gitterplätzen des Wirtsgitters durch Fremdatome ersetzt. Damit dies über den gesamten Konzentrationsbereich hinweg (bis zu 100%) möglich ist — man spricht dann von einer lückenlosen Mischkristallreihe —, müssen mehrere Bedingungen erfüllt sein: Beide Elemente müssen im gleichen Strukturtyp kristallisieren, ihre Atomradien dürfen sich um nicht mehr als etwa 15% unterscheiden, und sie sollten eine geringe chemische Affinität zueinander besitzen, damit sich die Fremdatome statistisch verteilen statt sich zu geordneten Strukturen zusammenzulagern. Sind diese Bedingungen nicht erfüllt, ist nur eine begrenzte Löslichkeit möglich.",
          "Beim Einlagerungsmischkristall lagern sich dagegen kleine Fremdatome (typischerweise Kohlenstoff, Stickstoff oder Wasserstoff) nicht auf regulären Gitterplätzen, sondern in den Lücken zwischen den Wirtsatomen ein. Voraussetzung ist, dass das Radienverhältnis von Fremd- zu Wirtsatom hinreichend klein ist (näherungsweise unter 0,59), damit das Fremdatom überhaupt in eine Gitterlücke passt. Da nur ein begrenzter Anteil der Gitterlücken besetzt werden kann, ist die Löslichkeit von Einlagerungsatomen typischerweise auf wenige Prozent beschränkt — ein Effekt, der bei der Kohlenstofflöslichkeit im Eisengitter technisch von zentraler Bedeutung ist (siehe Kapitel 13).",
        ],
        terms: [
          { term: "Substitutionsmischkristall", definition: "Mischkristall, bei dem Fremdatome reguläre Gitterplätze des Wirtsgitters besetzen." },
          { term: "Einlagerungsmischkristall", definition: "Mischkristall, bei dem kleine Fremdatome die Zwischengitterplätze (Lücken) des Wirtsgitters besetzen." },
          { term: "Lückenlose Mischkristallreihe", definition: "Vollständige gegenseitige Löslichkeit zweier Elemente über den gesamten Konzentrationsbereich (0–100%)." },
        ],
        examples: [
          "Nickel (rNi≈0,125 nm) und Kupfer (rCu≈0,128 nm) unterscheiden sich in ihrem Atomradius um weniger als 3% und kristallisieren beide kubisch flächenzentriert — sie erfüllen damit die Bedingungen für eine lückenlose Substitutionsmischkristallreihe, wie sie auch tatsächlich beobachtet wird.",
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Die Vegard'sche Regel",
        body: [
          "Beim Einbau von Fremdatomen in ein Substitutionsmischkristallgitter ändert sich die Gitterkonstante in Abhängigkeit vom Mischungsverhältnis. Für viele Systeme lässt sich dieser Zusammenhang näherungsweise als linear zwischen den Gitterkonstanten der beiden Reinkomponenten annehmen — diese Näherung wird als Vegard'sche Regel bezeichnet. Sie erlaubt es, aus einer röntgenographisch gemessenen Gitterkonstante eines Mischkristalls unbekannter Zusammensetzung auf dessen Konzentration zurückzuschließen, sofern die Gitterkonstanten der beiden reinen Ausgangskomponenten bekannt sind.",
          "Die Vegard'sche Regel gilt nur näherungsweise, da reale Mischkristalle oft leicht von der linearen Interpolation abweichen (positive oder negative Abweichung, je nach den genauen Bindungsverhältnissen). Für viele technische Anwendungen — etwa die Abschätzung der Zusammensetzung aus einer XRD-Messung — ist die lineare Näherung dennoch ausreichend genau.",
        ],
        formulas: [
          "a0,MK = a0,A · cA + a0,B · cB  (Vegard'sche Regel)",
        ],
        formulasLatex: [
          "a_{0,MK} = a_{0,A} \\cdot c_A + a_{0,B} \\cdot c_B",
        ],
        terms: [
          { term: "Vegard'sche Regel", definition: "Näherungsweise lineare Beziehung zwischen der Gitterkonstante eines Substitutionsmischkristalls und der Konzentration seiner Komponenten." },
        ],
        examples: [
          "Ein Silber-Gold-Mischkristall (a0,Ag=4,086 Å, a0,Au=4,078 Å) mit einer röntgenographisch gemessenen Gitterkonstante von a0,MK=4,081 Å hat nach der Vegard'schen Regel einen Goldanteil cAu, für den gilt: 4,081 = 4,086·(1−cAu) + 4,078·cAu, also 4,081 = 4,086 − 0,008·cAu, woraus cAu = 0,005/0,008 = 0,625, also 62,5 Atomprozent Gold folgt.",
        ],
      },
      {
        id: "6-3",
        heading: "6.3 Ordnungsstrukturen und intermetallische Phasen",
        body: [
          "Bei bestimmten Konzentrationsverhältnissen kann sich in einem Substitutionsmischkristall ein Übergang von der statistischen Verteilung der Atomsorten auf den Gitterplätzen zu einer geordneten Verteilung vollziehen — man spricht von einer Überstruktur oder Ordnungsphase. Ein bekanntes Beispiel ist das System Kupfer-Gold: Bei einem Mengenverhältnis von 3:1 bilden sich Strukturen vom Cu3Au-Typ, bei einem Verhältnis von 1:1 Strukturen vom CuAu-Typ mit einer alternierenden Stapelung von Kupfer- und Goldlagen. Überstrukturen sind meist thermisch instabil, da sie nur bei sehr langsamer Abkühlung entstehen und leicht durch mechanische oder thermische Beanspruchung wieder zerstört werden können.",
          "Werden Fremdatome so in ein Wirtsgitter eingebaut, dass sich eine völlig eigenständige, neue Kristallstruktur bildet, spricht man von intermetallischen Phasen. Sie entstehen aus der Durchdringung zweier unterschiedlicher Kristallstrukturen und sind deshalb meist sehr hart und spröde, aber deutlich stabiler als bloße Überstrukturen. Bekannte Beispiele sind die Laves-Phasen (Verbindungen vom Typ AB2 mit einem charakteristischen Radienverhältnis rA/rB≈1,225) und die Hume-Rothery-Phasen wie die verschiedenen Messingstrukturen im System Kupfer-Zink.",
        ],
        terms: [
          { term: "Überstruktur (Ordnungsphase)", definition: "Geordnete Verteilung der Atomsorten in einem Substitutionsmischkristall bei bestimmten Konzentrationsverhältnissen." },
          { term: "Intermetallische Phase", definition: "Eigenständige Kristallstruktur, die aus dem Einbau von Atomen eines zweiten Metalls in ein Wirtsgitter entsteht; meist hart und spröde." },
        ],
        examples: [
          "Eine Kupfer-Zink-Legierung mit hohem Zinkanteil kann eine Hume-Rothery-Phase wie die β-Messingstruktur (CuZn) ausbilden, deren mechanische Eigenschaften (deutlich härter, aber spröder) sich klar von denen der einfachen kupferreichen Substitutionsmischkristalle unterscheiden, die bei geringerem Zinkanteil vorliegen.",
        ],
      },
    ],
  },
  // ==================== Kapitel 7 ====================
  {
    id: "ionen-kovalente-strukturen",
    number: 7,
    title: "Ionen-, kovalente und Polymerstrukturen",
    free: false,
    intro:
      "Neben den in Kapitel 6 behandelten Legierungsstrukturen bilden auch nicht-metallische Verbindungen charakteristische Kristallstrukturen. Dieses Kapitel behandelt typische Ionen- und kovalente Strukturen sowie den strukturellen Aufbau von Hochpolymeren.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Ionenstrukturen: CsCl, NaCl, Fluorit und Perowskit",
        body: [
          "Ionenstrukturen bestehen aus zwei sich gegenseitig durchdringenden Teilgittern aus positiv geladenen Kationen und negativ geladenen Anionen. Welche konkrete Struktur sich ausbildet, hängt — wie in Kapitel 4.3 beschrieben — vom Radienverhältnis der beiden Ionensorten ab. Bei der CsCl-Struktur bilden Kation und Anion je ein kubisch primitives Gitter, die um eine halbe Raumdiagonale gegeneinander verschoben sind (KOZ=8, entsprechend einem Radienverhältnis über 0,732). Bei der NaCl-Struktur besetzen die kleineren Kationen dagegen die Oktaederlücken eines kubisch flächenzentrierten Anionengitters (KOZ=6).",
          "Komplexere Ionenstrukturen entstehen bei mehr als zwei Ionensorten oder ungleichen stöchiometrischen Verhältnissen. Bei der Fluorit-Struktur (Beispiel: ZrO2) bilden die größeren Kationen ein kubisch flächenzentriertes Gitter, während alle Tetraederlücken mit den kleineren Anionen besetzt sind. Bei der Perowskitstruktur (Beispiel: BaTiO3) bilden die großen Kationen ein kubisch primitives Gitter, ein zweites, kleineres Kation sitzt im Zentrum der Zelle, und die Anionen besetzen die Flächenmitten — eine Struktur, die u. a. für die besonderen elektrischen Eigenschaften vieler Funktionskeramiken verantwortlich ist.",
        ],
        terms: [
          { term: "CsCl-Struktur", definition: "Ionenstruktur aus zwei um eine halbe Raumdiagonale verschobenen kubisch primitiven Gittern, KOZ=8." },
          { term: "NaCl-Struktur", definition: "Ionenstruktur, bei der die Kationen die Oktaederlücken eines kubisch flächenzentrierten Anionengitters besetzen, KOZ=6." },
          { term: "Perowskitstruktur", definition: "Ionenstruktur mit großen Kationen auf einem kubisch primitiven Gitter, einem kleineren Kation im Zentrum und Anionen auf den Flächenmitten." },
        ],
        examples: [
          "Calciumoxid (CaO) kristallisiert in der NaCl-Struktur: Die Ca²⁺-Ionen besetzen die Oktaederlücken eines kubisch flächenzentrierten Gitters aus O²⁻-Ionen. Mit rCa2+/rO2− ≈ 0,100/0,140 ≈ 0,71 liegt das Radienverhältnis im oberen Bereich für KOZ=6 (Oktaederkoordination, siehe Tabelle in 4.3), was zur beobachteten NaCl-Struktur passt.",
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Kovalente Strukturen: Diamant und Graphit",
        body: [
          "Kohlenstoff bildet in Abhängigkeit von der Art der Hybridisierung seiner Valenzelektronen zwei sehr unterschiedliche kristalline Strukturen. Bei der sp³-Hybridisierung (Diamant) bildet jedes Kohlenstoffatom vier gleichwertige, tetraedrisch angeordnete kovalente Bindungen zu seinen Nachbaratomen. Dieses dreidimensionale Bindungsnetzwerk ist in alle Raumrichtungen extrem stabil, was die außergewöhnliche Härte von Diamant erklärt; da alle Valenzelektronen in den Bindungen gebunden sind, ist Diamant zudem ein elektrischer Isolator.",
          "Bei der sp²-Hybridisierung (Graphit) bildet jedes Kohlenstoffatom dagegen nur drei kovalente Bindungen innerhalb einer ebenen Schicht (Basalebene); das vierte, nicht an der Hybridisierung beteiligte Elektron bleibt frei beweglich. Zwischen den Basalebenen wirken nur schwache Van-der-Waals-Kräfte. Daraus resultiert eine stark anisotrope Struktur: Innerhalb der Ebenen ist Graphit sehr fest und elektrisch leitfähig (durch die freien Elektronen), senkrecht zu den Ebenen dagegen mechanisch schwach und elektrisch nicht leitend — die Ebenen lassen sich leicht gegeneinander verschieben, weshalb Graphit u. a. als Schmierstoff verwendet wird.",
        ],
        terms: [
          { term: "sp³-Hybridisierung", definition: "Elektronenkonfiguration mit vier gleichwertigen, tetraedrisch angeordneten Bindungsorbitalen, wie beim Diamant." },
          { term: "sp²-Hybridisierung", definition: "Elektronenkonfiguration mit drei ebenen Bindungsorbitalen und einem freien Elektron, wie beim Graphit." },
        ],
        examples: [
          "Kohlenstofffasern werden gezielt so hergestellt, dass die Basalebenen des Graphits parallel zur Faserlängsachse orientiert sind — dadurch übertragen sich die hohen Bindungskräfte innerhalb der Basalebenen direkt in Faserrichtung, was solche Fasern trotz ihres geringen Gewichts extrem zugfest macht.",
        ],
      },
      {
        id: "7-3",
        heading: "7.3 Aufbau und Klassifikation von Hochpolymeren",
        body: [
          "Polymere entstehen, wenn sich viele gleiche oder verschiedene Monomerbausteine über kovalente Bindungen zu langen Ketten (Makromolekülen) verknüpfen. Innerhalb einer Kette sind die Atome kovalent (stark) gebunden, zwischen benachbarten Ketten wirken dagegen nur die schwachen Van-der-Waals-Kräfte (siehe 1.4). Der strukturelle Aufbau eines Polymers lässt sich auf drei Ebenen beschreiben: Die Konstitution beschreibt, welche Atomgruppen wie miteinander verknüpft sind, die Konfiguration die räumliche Anordnung von Seitengruppen entlang der Kette (z. B. trans- oder cis-Anordnung), und die Konformation die durch Drehung um Einfachbindungen veränderliche räumliche Gestalt der Kette.",
          "Nach dem Vernetzungsgrad unterscheidet man drei Polymerklassen mit sehr unterschiedlichen Eigenschaften. Thermoplaste bestehen aus linearen oder verzweigten, nicht vernetzten Ketten; sie sind schmelzbar und damit aus der Schmelze verarbeitbar. Elastomere sind schwach vernetzt und dadurch extrem dehnbar — unter Zugbelastung strecken sich die verknäulten Ketten, bei Entlastung kehren sie in ihre Ausgangsform zurück. Duromere sind stark vernetzt, dadurch hart, spröde und nicht mehr schmelzbar; sie entstehen meist durch Mischung und anschließende Vernetzungsreaktion der Ausgangskomponenten, nicht aus einer Schmelze. Eine Kristallisation ist dabei nur bei Thermoplasten mit hinreichend regelmäßiger Konstitution, Konfiguration und Konformation möglich — Duromere lassen sich aufgrund ihrer starken Vernetzung grundsätzlich nicht kristallisieren.",
        ],
        terms: [
          { term: "Konstitution", definition: "Beschreibt, welche Atome bzw. Atomgruppen wie zu einem Makromolekül verknüpft sind." },
          { term: "Thermoplast", definition: "Linear oder verzweigt aufgebautes, unvernetztes Polymer; schmelzbar und aus der Schmelze verarbeitbar." },
          { term: "Elastomer", definition: "Schwach vernetztes Polymer mit hoher, reversibler Dehnbarkeit." },
          { term: "Duromer", definition: "Stark vernetztes, hartes und sprödes Polymer, das nicht schmelzbar ist." },
        ],
        examples: [
          "Ein Zweikomponentenkleber ist ein typisches Duromer: Erst beim Mischen der beiden Ausgangskomponenten startet die Vernetzungsreaktion, danach ist der ausgehärtete Kleber weder löslich noch schmelzbar — im Gegensatz zu einem thermoplastischen Heißkleber, der sich durch erneutes Erhitzen beliebig oft wieder aufschmelzen lässt.",
        ],
      },
    ],
  },
  // ==================== Kapitel 8 ====================
  {
    id: "kristallbaufehler",
    number: 8,
    title: "Kristallbaufehler",
    free: false,
    intro:
      "Ein idealer Kristall ohne jede Störung existiert in der Realität nicht — reale Kristalle enthalten immer eine gewisse Anzahl an Gitterstörungen. Diese sogenannten Kristallbaufehler sind keineswegs nur unerwünscht: Viele wichtige Werkstoffeigenschaften, allen voran die plastische Verformbarkeit von Metallen, lassen sich erst durch das Verständnis dieser Baufehler erklären. Dieses Kapitel klassifiziert Kristallbaufehler nach ihrer Ausdehnung — von punktförmigen bis zu räumlichen Störungen.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Punktdefekte",
        body: [
          "Punktdefekte betreffen einzelne Gitteratome und ihre unmittelbare Umgebung. Die wichtigsten Typen sind die Leerstelle (ein regulärer Gitterplatz ist unbesetzt), das Zwischengitteratom (ein Atom sitzt auf einem nicht-regulären Zwischengitterplatz) sowie das Substitutionsatom (ein Fremdatom ersetzt ein reguläres Wirtsatom, siehe Kapitel 6). Punktdefekte befinden sich im thermodynamischen Gleichgewicht: Ihre Konzentration ist temperaturabhängig und steigt mit zunehmender Temperatur exponentiell an, da mit steigender Temperatur mehr thermische Energie zur Verfügung steht, um Atome aus ihrer regulären Gitterposition zu entfernen.",
          "In Ionenkristallen sind Punktdefekte zusätzlich mit Ladungsneutralität verknüpft, weshalb sie meist paarweise auftreten. Beim Schottky-Defekt entsteht je eine Kationen- und eine Anionenleerstelle, sodass die Ladungsneutralität des Kristalls erhalten bleibt. Beim Frenkel-Defekt wandert dagegen ein Ion (meist das kleinere Kation) auf einen Zwischengitterplatz und hinterlässt dabei eine Leerstelle auf seinem ursprünglichen Platz — Kationen- und Anionenzahl bleiben dabei jeweils für sich erhalten.",
        ],
        formulas: [
          "nL = N · e^(−EA/(R·T))  (Anzahl der Leerstellen)",
        ],
        formulasLatex: [
          "n_L = N \\cdot e^{-\\frac{E_A}{RT}}",
        ],
        terms: [
          { term: "Leerstelle", definition: "Unbesetzter regulärer Gitterplatz; einfachster und häufigster Punktdefekt." },
          { term: "Schottky-Defekt", definition: "Gepaarte Kationen- und Anionenleerstelle in einem Ionenkristall zur Wahrung der Ladungsneutralität." },
          { term: "Frenkel-Defekt", definition: "Ion wandert auf einen Zwischengitterplatz und hinterlässt eine Leerstelle auf seinem ursprünglichen Gitterplatz." },
        ],
        examples: [
          "Bei Raumtemperatur (T=293 K) ist die Leerstellenkonzentration eines Metalls sehr gering, da der Exponentialterm e^(−EA/(RT)) für typische Aktivierungsenergien EA von etwa 1 eV pro Atom nahe null liegt. Erhöht man die Temperatur auf 1000 K (nahe dem Schmelzpunkt vieler Metalle), steigt nL um viele Größenordnungen an, weil die Aktivierungsenergie im Verhältnis zur thermischen Energie R·T deutlich kleiner geworden ist.",
        ],
      },
      {
        id: "8-2",
        heading: "8.2 Versetzungen und der Burgersvektor",
        body: [
          "Versetzungen sind eindimensionale (linienförmige) Gitterstörungen, die vor allem durch mechanische Verformung oder Spannungsgradienten während der Kristallisation entstehen. Man unterscheidet zwei Grenzfälle: Bei der Stufenversetzung wird gedanklich eine zusätzliche Halbebene in ein ansonsten ungestörtes Gitter eingeschoben, wodurch sich das Gitter in der unmittelbaren Umgebung der eingeschobenen Ebene verzerrt. Bei der Schraubenversetzung entsteht die Störung dagegen durch eine spiralförmige Verschiebung der Gitterebenen um die Versetzungslinie herum. In der Praxis treten meist gemischte Versetzungen mit Anteilen beider Grenzfälle auf.",
          "Das Ausmaß und die Richtung der Gitterverzerrung um eine Versetzung wird über den Burgersvektor beschrieben: Man umläuft die Versetzung im gestörten Gitter und überträgt denselben Umlauf in ein ungestörtes Gitter; die Vektordifferenz, die nötig ist, um den Umlauf im ungestörten Gitter zu schließen, ist der Burgersvektor. Bei der Stufenversetzung stehen Burgersvektor und Versetzungslinie senkrecht aufeinander, bei der Schraubenversetzung liegen sie parallel. Versetzungen bewegen sich bevorzugt auf den dichtest gepackten Ebenen eines Gitters (Gleitebenen) in den dichtest gepackten Richtungen (Gleitrichtungen); zusammen bilden Gleitebene und Gleitrichtung das Gleitsystem eines Kristalls — beim kubisch flächenzentrierten Gitter ist dies {111}<110>.",
        ],
        terms: [
          { term: "Burgersvektor", definition: "Vektor, der Größe und Richtung der Gitterverzerrung um eine Versetzung beschreibt." },
          { term: "Stufenversetzung", definition: "Versetzung durch eine ins Gitter eingeschobene zusätzliche Halbebene; Burgersvektor senkrecht zur Versetzungslinie." },
          { term: "Gleitsystem", definition: "Kombination aus bevorzugter Gleitebene (dichtest gepackte Ebene) und Gleitrichtung (dichtest gepackte Richtung) eines Kristallgitters." },
        ],
        examples: [
          "In einem kubisch flächenzentrierten Metall wie Kupfer ist die (111)-Ebene die dichtest gepackte Ebene und [110] die dichtest gepackte Richtung. Versetzungen bewegen sich deshalb bevorzugt entlang dieser {111}<110>-Gleitsysteme, was erklärt, warum kfz-Metalle wie Kupfer, Aluminium oder Gold besonders gut plastisch verformbar sind — sie besitzen mit den vier (111)-Ebenenfamilien und je drei <110>-Richtungen darin insgesamt 12 gleichwertige Gleitsysteme.",
        ],
      },
      {
        id: "8-3",
        heading: "8.3 Korngrenzen, Zwillingsgrenzen und Phasengrenzflächen",
        body: [
          "Zweidimensionale Gitterstörungen umfassen mehrere Typen von Grenzflächen. Kleinwinkelkorngrenzen entstehen, wenn zwei Kristallbereiche nur geringfügig gegeneinander verdreht sind; sie lassen sich als Aneinanderreihung von Stufenversetzungen beschreiben und sind energetisch vergleichsweise günstig. Großwinkelkorngrenzen trennen dagegen deutlich stärker gegeneinander verdrehte Kristallite; da hier nur an wenigen Stellen echte Bindungen zwischen den Körnern bestehen, sind sie energetisch deutlich ungünstiger. Zwillingsgrenzen sind ein Sonderfall der Großwinkelkorngrenze mit besonders hoher kristallographischer Ordnung: Sie entsprechen der Spiegelung eines Kristallbereichs an einer Zwillingsebene und sind deshalb energetisch günstig.",
          "Eine weitere Störung der Stapelfolge dichtest gepackter Ebenen wird als Stapelfehler bezeichnet — statt der regulären Folge ABCABC... (kfz) tritt lokal eine fehlerhafte Abfolge auf. Dreidimensionale Gitterstörungen schließlich sind Phasengrenzflächen zwischen zwei unterschiedlichen Phasen. Sind die Gitterparameter beider Phasen sehr ähnlich, ist die Grenzfläche kohärent (viele Bindungen, Ausgleich durch Gitterverzerrung); bei größeren Unterschieden entsteht eine teilkohärente, bei sehr großen Unterschieden eine inkohärente Grenzfläche mit entsprechend weniger Bindungen und geringerer Gitterverspannung.",
        ],
        terms: [
          { term: "Kleinwinkelkorngrenze", definition: "Grenzfläche zwischen zwei nur geringfügig gegeneinander verdrehten Kristallbereichen; aus Stufenversetzungen aufgebaut." },
          { term: "Zwillingsgrenze", definition: "Großwinkelkorngrenze mit hoher kristallographischer Ordnung, entstanden durch Spiegelung an einer Zwillingsebene." },
          { term: "Kohärente/inkohärente Phasengrenzfläche", definition: "Grenzfläche zwischen zwei Phasen mit sehr ähnlichen (kohärent) bzw. sehr unterschiedlichen (inkohärent) Gitterparametern." },
        ],
        examples: [
          "Bei einer keramischen Mikrostruktur mit vielen kleinen, statistisch orientierten Körnern überwiegen Großwinkelkorngrenzen. Da an diesen Grenzen nur wenige Bindungen zwischen benachbarten Körnern bestehen, sind sie bevorzugte Stellen für die Rissausbreitung — ein Grund, warum die Korngröße einen erheblichen Einfluss auf die Bruchfestigkeit von Keramiken hat.",
        ],
      },
    ],
  },
  // ==================== Kapitel 9 ====================
  {
    id: "plastische-verformung-bruch",
    number: 9,
    title: "Plastische Verformung, Verfestigung und Bruch",
    free: false,
    intro:
      "Wird die im elastischen Bereich (Kapitel 3) verfügbare Spannung überschritten, geht ein Werkstoff in den plastischen, irreversiblen Verformungsbereich über. Dieses Kapitel behandelt die wichtigsten mechanischen Kenngrößen dieses Bereichs, die mikroskopischen Mechanismen, über die sich Werkstoffe verfestigen lassen, sowie das abschließende Versagen durch Bruch.",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Streckgrenze, Zugfestigkeit und Bruchdehnung",
        body: [
          "Das Ende des linear-elastischen Bereichs kennzeichnet die Streckgrenze Re — die Spannung, ab der sich ein Werkstoff nicht mehr vollständig zurückverformt. Bei Werkstoffen mit kontinuierlichem Übergang zwischen elastischem und plastischem Bereich lässt sich Re nicht direkt ablesen; hier verwendet man stattdessen die Ersatzstreckgrenze R0,2, definiert als die Spannung, bei der eine bleibende (plastische) Dehnung von genau 0,2% zurückbleibt. Die Zugfestigkeit Rm ist das Spannungsmaximum der Spannungs-Dehnungs-Kurve; danach fällt die (auf die ursprüngliche Querschnittsfläche bezogene) technische Spannung wieder ab, weil sich der Probenquerschnitt durch Einschnürung verringert, obwohl die tatsächliche (auf die aktuelle Fläche bezogene) wahre Spannung weiter ansteigt.",
          "Die Bruchdehnung εBruch ist der plastische Dehnungsanteil zum Zeitpunkt des Bruchs; sie wird üblicherweise gemessen, indem man die gebrochenen Probenstücke nach dem Versuch wieder zusammensetzt und die bleibende Längenänderung bestimmt — der elastische Dehnungsanteil geht dabei bewusst nicht ein, da er sich bei Entlastung ohnehin zurückbildet. Wird eine Probe im plastischen Bereich entlastet und danach erneut belastet, verläuft die Entlastungskurve streng linear parallel zur ursprünglichen Hookeschen Geraden; bei erneuter Belastung folgt die Kurve zunächst exakt dieser Entlastungsgeraden und zeigt erst beim vorherigen Belastungsmaximum wieder plastisches Verhalten — die Streckgrenze der Probe hat sich durch die vorangegangene Verformung effektiv erhöht.",
        ],
        terms: [
          { term: "Streckgrenze Re", definition: "Spannung am Ende des linear-elastischen Bereichs, ab der plastische (bleibende) Verformung einsetzt." },
          { term: "Ersatzstreckgrenze R0,2", definition: "Spannung, bei der eine bleibende Dehnung von 0,2% auftritt; verwendet bei Werkstoffen ohne klar erkennbare Streckgrenze." },
          { term: "Zugfestigkeit Rm", definition: "Spannungsmaximum der (technischen) Spannungs-Dehnungs-Kurve." },
        ],
        examples: [
          "Ein Baustahl mit Re=350 MPa, Rm=490 MPa und einer Bruchdehnung von 22% zeigt beim Zugversuch zunächst linear-elastisches Verhalten bis 350 MPa, danach zunehmende plastische Verformung bis zum Spannungsmaximum von 490 MPa, gefolgt von Einschnürung und Bruch bei einer bleibenden Gesamtdehnung von 22% der Ausgangslänge.",
        ],
      },
      {
        id: "9-2",
        heading: "9.2 Verfestigungsmechanismen",
        body: [
          "Die Streckgrenze eines Werkstoffs lässt sich über mehrere mikrostrukturelle Mechanismen gezielt erhöhen, die alle darauf beruhen, die Bewegung von Versetzungen (siehe 8.2) zu erschweren. Bei der Mischkristallverfestigung erzeugen eingebaute Fremdatome lokale Gitterverzerrungen, die Versetzungen beim Durchqueren zusätzliche Energie kosten; der Effekt nimmt mit steigender Fremdatomkonzentration zu. Bei der Korngrenzenverfestigung wirken Korngrenzen als Hindernisse, an denen sich Versetzungen aufstauen — je feinkörniger ein Material, desto mehr Korngrenzen und desto höher die resultierende Streckgrenze. Bei der Kaltverfestigung (Verformungsverfestigung) erhöht plastische Verformung selbst die Versetzungsdichte im Material, wodurch sich die Versetzungen gegenseitig zunehmend behindern und größere Spannungen für weitere Verformung nötig werden.",
          "Trifft eine Versetzung auf feindispers eingelagerte Teilchen (Ausscheidungen), kann sie diese entweder schneiden (bei kohärenten Teilchen, Schneidmechanismus) oder umgehen (bei inkohärenten Teilchen, Orowan-Mechanismus, wobei die Versetzung einen Versetzungsring um das Teilchen zurücklässt). Trägt man die resultierende Streckgrenzenerhöhung über dem Teilchendurchmesser auf, ergibt sich für jeden der beiden Mechanismen ein gegenläufiger Verlauf, sodass eine optimale Teilchengröße mit maximaler Dispersionsverfestigung existiert.",
        ],
        table: {
          caption: "Verfestigungsmechanismen im Überblick",
          headers: ["Mechanismus", "Wirkprinzip"],
          rows: [
            ["Mischkristallverfestigung", "Gitterverzerrung durch eingebaute Fremdatome"],
            ["Korngrenzenverfestigung", "Versetzungsstau an Korngrenzen; feinkörnig = fest"],
            ["Kaltverfestigung", "Steigende Versetzungsdichte durch plastische Verformung"],
            ["Dispersionsverfestigung", "Schneid- bzw. Orowan-Mechanismus an eingelagerten Teilchen"],
          ],
        },
        terms: [
          { term: "Kaltverfestigung", definition: "Zunahme der Streckgrenze durch steigende Versetzungsdichte infolge plastischer Verformung." },
          { term: "Orowan-Mechanismus", definition: "Umgehen eines inkohärenten Teilchens durch eine Versetzung unter Zurücklassung eines Versetzungsrings." },
        ],
        examples: [
          "Kaltgewalztes Kupfer besitzt eine deutlich höhere Streckgrenze als weichgeglühtes Kupfer gleicher chemischer Zusammensetzung — der Unterschied liegt allein in der durch das Walzen erhöhten Versetzungsdichte (typischerweise steigt sie von rund 10⁶–10⁸ cm⁻² im unverformten Zustand auf 10¹⁰–10¹² cm⁻² nach starker Kaltverformung).",
        ],
      },
      {
        id: "9-3",
        heading: "9.3 Sprödbruch und Zähbruch",
        body: [
          "Erreicht die Spannung in einem Bauteil die Bruchspannung, kommt es zur makroskopischen Trennung durch die Ausbreitung von Rissen. Je nach Werkstoff und Beanspruchungsbedingungen (Temperatur, Belastungsgeschwindigkeit, umgebendes Medium) unterscheidet man zwei grundlegende Bruchmechanismen. Der Zähbruch wird von deutlicher plastischer Verformung und Einschnürung vor dem eigentlichen Bruch begleitet; die Bruchfläche zeigt dabei eine charakteristische Wabenstruktur. Der Sprödbruch tritt dagegen praktisch ohne vorausgehende Verformung ein und ist besonders gefährlich, weil es im Vorfeld kaum Warnzeichen gibt — er tritt bevorzugt bei spröden Werkstoffen wie Glas und Keramik auf, kann aber auch bei Metallen unter ungünstigen Bedingungen (tiefe Temperatur, hohe Belastungsgeschwindigkeit) auftreten.",
          "Beim Sprödbruch unterscheidet man zusätzlich, wie der Riss durch das Material verläuft. Beim transkristallinen Bruch läuft der Riss nahezu geradlinig durch die Körner hindurch, ohne den Korngrenzen zu folgen — typisch für besonders spröde Werkstoffe. Beim interkristallinen Bruch verläuft der Riss dagegen entlang der (energetisch günstigeren) Korngrenzen; da der Riss dadurch einen längeren, gewundeneren Weg zurücklegen muss, ist ein interkristalliner Bruch tendenziell etwas weniger spröde als ein transkristalliner.",
        ],
        terms: [
          { term: "Zähbruch", definition: "Bruchtyp mit deutlicher plastischer Verformung und Einschnürung vor dem Bruch; Bruchfläche mit Wabenstruktur." },
          { term: "Sprödbruch", definition: "Bruchtyp ohne oder mit nur geringer vorausgehender Verformung; kaum Vorwarnung vor dem Versagen." },
          { term: "Transkristalliner/interkristalliner Bruch", definition: "Rissverlauf durch die Kristallkörner hindurch bzw. entlang der Korngrenzen." },
        ],
        examples: [
          "Eine Fensterscheibe aus Glas zerbricht typischerweise sprödbruchartig und transkristallin — ohne erkennbare plastische Verformung im Vorfeld und mit einem nahezu geradlinigen Rissverlauf, was den charakteristisch scharfkantigen Bruch von Glas erklärt.",
        ],
      },
    ],
  },
  // ==================== Kapitel 10 ====================
  {
    id: "elektrische-thermische-eigenschaften",
    number: 10,
    title: "Elektrische und thermische Eigenschaften",
    free: false,
    intro:
      "Neben mechanischen Eigenschaften sind elektrische und thermische Kenngrößen für viele technische Anwendungen entscheidend. Dieses Kapitel behandelt elektrische Leitfähigkeit, das Bändermodell zur Erklärung der Leitfähigkeitsunterschiede zwischen Werkstoffgruppen, Wärmeleitfähigkeit sowie thermische Ausdehnung.",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Elektrische Leitfähigkeit",
        body: [
          "Die elektrische Leitfähigkeit σ beruht auf der gerichteten Bewegung von Ladungsträgern — meist Elektronen (elektronische Leitung) oder Ionen (Ionenleitung). Sie ist proportional zur Anzahl n der Ladungsträger pro Volumen, ihrer Beweglichkeit μ sowie ihrer Ladung q (bei Elektronen die Elementarladung e≈1,602·10⁻¹⁹ C). Die Leitfähigkeit ist der Kehrwert des spezifischen Widerstands ρ, der sich seinerseits aus dem gemessenen ohmschen Widerstand R sowie der Querschnittsfläche A und Länge l des Leiters bestimmen lässt.",
          "Metalle besitzen aufgrund ihrer frei beweglichen Valenzelektronen (siehe Metallbindung, Kapitel 1.3) eine besonders hohe elektronische Leitfähigkeit. Halbleiter und Isolatoren besitzen dagegen deutlich weniger frei bewegliche Ladungsträger; ihr Leitungsverhalten wird im folgenden Abschnitt über das Bändermodell erklärt.",
        ],
        formulas: [
          "σ = n · q · μ  (elektrische Leitfähigkeit)",
          "σ = 1/ρ = l / (A·R)",
        ],
        formulasLatex: [
          "\\sigma = n \\cdot q \\cdot \\mu",
          "\\sigma = \\dfrac{1}{\\rho} = \\dfrac{l}{A \\cdot R}",
        ],
        terms: [
          { term: "Elektrische Leitfähigkeit σ", definition: "Kehrwert des spezifischen Widerstands; Maß dafür, wie gut ein Material elektrischen Strom leitet." },
          { term: "Ladungsträgerbeweglichkeit μ", definition: "Kenngröße dafür, wie leicht sich Ladungsträger (z. B. Elektronen) im elektrischen Feld durch ein Material bewegen können." },
        ],
        examples: [
          "Durch einen Kupferdraht mit Durchmesser d=0,8 mm und Länge l=2 m fließt bei einer angelegten Spannung von U=0,15 V ein Strom von I=42,3 A. Der Widerstand beträgt R=U/I=0,15/42,3≈0,00355 Ω. Mit A=π·(0,4mm)²≈0,5027 mm² ergibt sich die Leitfähigkeit σ=l/(A·R)=2000/(0,5027·0,00355)≈1,121·10⁶ (Ω·mm)⁻¹ — bezogen auf SI-Einheiten entspricht das der bekannten hohen Leitfähigkeit von Kupfer.",
        ],
      },
      {
        id: "10-2",
        heading: "10.2 Bändermodell: Metalle, Halbleiter und Isolatoren",
        body: [
          "In einem Festkörper überlappen sich die Potentialfelder benachbarter Atome, wodurch sich die diskreten Energieniveaus einzelner Atome zu Energiebändern mit einer gewissen Bandbreite aufspalten. Zwischen zwei erlaubten Energiebändern kann eine verbotene Zone (Bandlücke) liegen, die von Elektronen nicht besetzt werden kann. Ob ein Material elektrisch gut leitet, hängt davon ab, wie das energetisch höchste, noch besetzte Band (Valenzband) zum nächsthöheren, unbesetzten Band (Leitungsband) liegt.",
          "Bei Metallen ist entweder das letzte besetzte Band nur teilweise gefüllt, oder es überlappt direkt mit dem darüberliegenden leeren Band — in beiden Fällen stehen genügend freie Zustände zur Verfügung, damit Elektronen schon bei kleinster Energiezufuhr leicht beweglich werden. Bei Halbleitern (Bandlücke ca. 1 eV) und Isolatoren (Bandlücke ca. 2,5–9 eV) sind Valenz- und Leitungsband dagegen durch eine Bandlücke getrennt. Bei Halbleitern ist diese klein genug, dass bereits thermische Energie einen Teil der Elektronen ins Leitungsband heben kann — deshalb steigt ihre Leitfähigkeit mit der Temperatur, im Gegensatz zu Metallen, bei denen zunehmende Gitterschwingungen bei höherer Temperatur die Elektronenbeweglichkeit behindern und die Leitfähigkeit dadurch sinkt. Bei Isolatoren ist die Bandlücke zu groß, um durch thermische Aktivierung nennenswert überwunden zu werden.",
        ],
        terms: [
          { term: "Bandlücke", definition: "Verbotener Energiebereich zwischen Valenz- und Leitungsband, der nicht von Elektronen besetzt werden kann." },
          { term: "Valenzband / Leitungsband", definition: "Energetisch höchstes besetztes bzw. energetisch nächsthöheres, im Grundzustand unbesetztes Energieband." },
        ],
        examples: [
          "Reines Silizium (Bandlücke ≈1,1 eV) ist bei Raumtemperatur ein schwacher Leiter; erhöht man die Temperatur, werden mehr Elektronen thermisch über die Bandlücke gehoben, und die Leitfähigkeit steigt deutlich an — bei Diamant (Bandlücke ≈5,5 eV) reicht dagegen selbst deutlich erhöhte Temperatur nicht aus, um nennenswert Leitfähigkeit zu erzeugen, weshalb Diamant ein Isolator bleibt.",
        ],
      },
      {
        id: "10-3",
        heading: "10.3 Wärmeleitfähigkeit",
        body: [
          "Der Transport thermischer Energie im Festkörper wird als Wärmeleitung bezeichnet. Sie setzt sich aus zwei Anteilen zusammen: dem Beitrag der freien Elektronen (λe) und dem Beitrag der Gitterschwingungen, sogenannter Phononen (λG). Bei Metallen dominiert der elektronische Anteil, weshalb Materialien mit hoher elektrischer Leitfähigkeit meist auch eine hohe thermische Leitfähigkeit besitzen — dieser Zusammenhang wird durch das Wiedemann-Franz-Gesetz beschrieben, wonach die Wärmeleitfähigkeit direkt proportional zum Produkt aus elektrischer Leitfähigkeit und absoluter Temperatur ist.",
          "Der Phononenbeitrag zur Wärmeleitfähigkeit ist bei einem dichten Gitter mit starker Bindung und möglichst gleichen Atommassen am größten — deshalb ist ausgerechnet Diamant, obwohl elektrisch ein Isolator ohne freie Elektronen, einer der besten bekannten Wärmeleiter: Sein extrem dichtes, stark kovalent gebundenes Gitter aus (fast) ausschließlich einer Atomsorte begünstigt die Phononenleitung enorm.",
        ],
        formulas: [
          "λ = L · T · σ  (Wiedemann-Franz-Gesetz)",
          "λ = λe + λG",
        ],
        formulasLatex: [
          "\\lambda = L \\cdot T \\cdot \\sigma",
          "\\lambda = \\lambda_e + \\lambda_G",
        ],
        terms: [
          { term: "Wiedemann-Franz-Gesetz", definition: "Bei Metallen gilt λ=L·T·σ — die Wärmeleitfähigkeit ist proportional zum Produkt aus Temperatur und elektrischer Leitfähigkeit." },
          { term: "Phonon", definition: "Quantisierte Gitterschwingung, die neben den freien Elektronen zur Wärmeleitung beiträgt." },
        ],
        examples: [
          "Silber besitzt sowohl die höchste elektrische als auch die höchste thermische Leitfähigkeit aller Metalle — ein direktes Beispiel für den vom Wiedemann-Franz-Gesetz beschriebenen Zusammenhang, da bei Metallen beide Effekte überwiegend von denselben freien Elektronen getragen werden.",
        ],
      },
      {
        id: "10-4",
        heading: "10.4 Thermische Ausdehnung",
        body: [
          "Die thermische Ausdehnung beschreibt die temperaturbedingte Längenänderung eines Werkstoffs. Sie wird über den linearen thermischen Ausdehnungskoeffizienten α quantifiziert, der die relative Längenänderung pro Grad Temperaturänderung angibt. Mikroskopisch beruht die thermische Ausdehnung auf der Asymmetrie der Bindungsenergie-Kurve zwischen benachbarten Atomen: Bei Temperaturerhöhung schwingen die Atome stärker um ihre Gleichgewichtslage, und weil diese Schwingung asymmetrisch verläuft, verschiebt sich der mittlere Atomabstand mit steigender Temperatur nach oben.",
          "Je stärker die Bindung zwischen den Atomen eines Werkstoffs, desto geringer fällt die thermische Ausdehnung aus — ein stark gebundenes Gitter lässt weniger Schwingungsamplitude zu. Deshalb besitzen Gläser und Keramiken mit ihren starken ionischen bzw. kovalenten Bindungen die geringste thermische Ausdehnung der drei klassischen Werkstoffgruppen, gefolgt von Metallen; Polymere mit ihren schwachen Van-der-Waals-Bindungen zwischen den Ketten zeigen dagegen die größte thermische Ausdehnung.",
        ],
        formulas: [
          "α = Δl / (l0 · ΔT)  (linearer thermischer Ausdehnungskoeffizient)",
        ],
        formulasLatex: [
          "\\alpha = \\dfrac{\\Delta l}{l_0 \\cdot \\Delta T}",
        ],
        terms: [
          { term: "Thermischer Ausdehnungskoeffizient α", definition: "Relative Längenänderung eines Werkstoffs pro Grad Temperaturänderung." },
        ],
        examples: [
          "Eine Stahlschiene mit l0=18 m und α=12·10⁻⁶ K⁻¹ wird von einer Wintertemperatur von −10°C auf eine Sommertemperatur von 35°C erwärmt (ΔT=45 K). Die Längenänderung beträgt Δl=α·l0·ΔT=12·10⁻⁶·18·45≈0,00972 m ≈ 9,7 mm — ein Wert, der bei der Konstruktion von Dehnungsfugen im Gleisbau explizit berücksichtigt werden muss.",
        ],
      },
    ],
  },
  // ==================== Kapitel 11 ====================
  {
    id: "thermodynamik-phasenuebergaenge",
    number: 11,
    title: "Thermodynamik von Phasenübergängen",
    free: false,
    intro:
      "Warum bildet sich beim Abkühlen einer Schmelze überhaupt ein Kristall, und warum passiert das nicht sofort beim Erreichen der Schmelztemperatur? Die Antwort liefert die Thermodynamik. Dieses Kapitel führt die wichtigsten thermodynamischen Zustandsgrößen ein und beschreibt, wie sich daraus die Keimbildung bei der Kristallisation erklären lässt — die Grundlage für das Verständnis der Zustandsdiagramme im folgenden Kapitel.",
    sections: [
      {
        id: "11-1",
        heading: "11.1 Innere Energie, Enthalpie und freie Enthalpie",
        body: [
          "Die Gesamtenergie eines Systems wird als innere Energie U bezeichnet. Bei Zustandsänderungen unter konstantem Druck (der in der Werkstofftechnik häufigste Fall) ist die relevante Energiegröße die Enthalpie H = U + p·V, die neben der inneren Energie auch die Volumenarbeit p·V berücksichtigt. Da sich bei den meisten Zustandsänderungen im festen Zustand das Volumen kaum ändert, gilt näherungsweise U≈H.",
          "Zustandsänderungen laufen in der Natur stets mit dem Ziel ab, die freie Enthalpie G zu minimieren — sie ist die für Arbeit nutzbare Energie eines Systems bei konstantem Druck und ergibt sich aus der Enthalpie abzüglich der im System gebundenen, nicht nutzbaren Energie T·S (mit der Entropie S). Ein Vorgang läuft nur dann freiwillig ab, wenn dabei ΔG≤0 gilt: Bei ΔG<0 wird Energie freigesetzt (freiwilliger Prozess), bei ΔG=0 befindet sich das System im thermodynamischen Gleichgewicht, und bei ΔG>0 läuft der Vorgang nicht freiwillig ab.",
        ],
        formulas: [
          "H = U + p·V  (Enthalpie)",
          "G = H − T·S  (freie Enthalpie)",
        ],
        formulasLatex: [
          "H = U + pV",
          "G = H - TS",
        ],
        terms: [
          { term: "Enthalpie H", definition: "Energiegröße für Zustandsänderungen bei konstantem Druck: H = U + pV." },
          { term: "Freie Enthalpie G", definition: "Bei konstantem Druck für Arbeit nutzbare Energie: G = H − TS. Natürliche Prozesse minimieren G." },
        ],
        examples: [
          "Beim Erstarren einer Metallschmelze sinkt die freie Enthalpie des Systems (ΔG<0), sobald die Schmelztemperatur unterschritten wird — genau deshalb läuft die Kristallisation ab dieser Temperatur freiwillig ab, ohne dass von außen Energie zugeführt werden müsste.",
        ],
      },
      {
        id: "11-2",
        heading: "11.2 Keimbildung und kritischer Keimradius",
        body: [
          "Die Kristallisation aus einer Schmelze verläuft in zwei Schritten: Keimbildung und anschließendes Keimwachstum. Die Bildung eines Keims ist mit einer Änderung der freien Enthalpie verbunden, die sich aus zwei gegenläufigen Anteilen zusammensetzt. Zum einen kostet die Bildung neuer Oberfläche (die den Keim von der Schmelze abgrenzt) Energie; dieser Anteil ist proportional zur Oberfläche des (näherungsweise kugelförmigen) Keims, also proportional zu r². Zum anderen wird beim Übergang vom flüssigen in den festen Zustand Energie frei, da der feste Zustand energetisch günstiger ist; dieser Anteil ist proportional zum Volumen des Keims, also proportional zu r³.",
          "Bei kleinem Keimradius überwiegt der (positive) Oberflächenanteil, sodass die gesamte freie Enthalpieänderung zunächst positiv ist und mit wachsendem Radius weiter ansteigt. Erst ab einem bestimmten kritischen Keimradius r* überwiegt der (negative) Volumenanteil, und die Kurve durchläuft ein Maximum — Keime unterhalb von r* sind instabil und lösen sich wieder auf, Keime oberhalb von r* sind stabil und wachsen unter fortlaufender Abnahme der freien Enthalpie weiter. Die zur Überwindung dieses Maximums nötige Energie ΔG* wird aus der Unterkühlung ΔT unter die Gleichgewichtstemperatur bereitgestellt — ohne eine gewisse Unterkühlung setzt Keimbildung praktisch nicht ein.",
        ],
        formulas: [
          "ΔG = −(4/3)·π·r³·gV + 4·π·r²·γ  (freie Bildungsenthalpie eines Keims)",
        ],
        formulasLatex: [
          "\\Delta G = -\\dfrac{4}{3}\\pi r^3 g_V + 4\\pi r^2 \\gamma",
        ],
        terms: [
          { term: "Kritischer Keimradius r*", definition: "Keimradius am Maximum der freien Bildungsenthalpie; Keime darüber wachsen stabil, Keime darunter lösen sich wieder auf." },
          { term: "Unterkühlung ΔT", definition: "Temperaturdifferenz unterhalb der Gleichgewichtstemperatur, die zur Überwindung der Keimbildungsenergie ΔG* nötig ist." },
        ],
        examples: [
          "Kühlt man eine Metallschmelze nur minimal unter ihre Gleichgewichtstemperatur ab, ist die freiwerdende Volumenenergie gV klein, wodurch der kritische Keimradius r* sehr groß wird und kaum stabile Keime entstehen — die Schmelze bleibt vorübergehend unterkühlt, ohne zu erstarren. Erst bei stärkerer Unterkühlung wird r* klein genug, dass sich in der Schmelze tatsächlich zahlreiche stabile Keime bilden und die Kristallisation einsetzt.",
        ],
      },
    ],
  },
  // ==================== Kapitel 12 ====================
  {
    id: "zustandsdiagramme",
    number: 12,
    title: "Zweistoffsysteme und Zustandsdiagramme",
    free: false,
    intro:
      "Zustandsdiagramme fassen zusammen, welche Phasen ein Werkstoffsystem in Abhängigkeit von Temperatur und Zusammensetzung im thermodynamischen Gleichgewicht ausbildet. Dieses Kapitel führt die Gibbsche Phasenregel als Systematik für die Anzahl gleichzeitig stabiler Phasen ein und behandelt die wichtigsten Grundtypen von Zweistoffsystemen.",
    sections: [
      {
        id: "12-1",
        heading: "12.1 Konzentrationsangaben und die Gibbsche Phasenregel",
        body: [
          "Ein System heißt heterogen, wenn es aus mehreren, durch Grenzflächen voneinander getrennten Phasen besteht — jede in sich homogene Teilregion eines Materials ist eine Phase. Bei Zweistoffsystemen kommt zu den Zustandsvariablen Druck und Temperatur eine dritte hinzu: die Konzentration c der Komponenten, meist in Massenprozent angegeben. Da technische Prozesse in der Regel bei konstantem Atmosphärendruck ablaufen, werden Zweistoffsysteme üblicherweise in Form von Temperatur-Konzentrations-Diagrammen bei p=konstant dargestellt.",
          "Der Zusammenhang zwischen der Anzahl der Komponenten K, der Anzahl gleichzeitig stabiler Phasen P und der Anzahl frei wählbarer Zustandsgrößen (Freiheitsgrade F) wird durch die Gibbsche Phasenregel beschrieben. Bei konstantem Druck (der häufigste technische Fall) reduziert sich die Anzahl der unabhängigen Zustandsvariablen um eins. Ein Freiheitsgrad F=0 bedeutet, dass an dieser Stelle des Diagramms keine Zustandsgröße mehr frei verändert werden kann, ohne dass sich die Phasenanzahl ändert — solche Stellen heißen nonvariante Punkte.",
        ],
        formulas: [
          "F = K + 2 − P  (Gibbsche Phasenregel, allgemein)",
          "F = K + 1 − P  (bei p = konstant)",
        ],
        formulasLatex: [
          "F = K + 2 - P",
          "F = K + 1 - P \\quad (p=\\text{konst.})",
        ],
        terms: [
          { term: "Phase", definition: "In sich homogener, durch Grenzflächen von anderen Bereichen abgegrenzter Bestandteil eines heterogenen Systems." },
          { term: "Gibbsche Phasenregel", definition: "Zusammenhang F=K+2−P (bzw. F=K+1−P bei konstantem Druck) zwischen Komponenten-, Phasen- und Freiheitsgradzahl." },
          { term: "Nonvarianter Punkt", definition: "Stelle im Zustandsdiagramm mit F=0, an der keine Zustandsgröße mehr frei verändert werden kann, ohne die Phasenzahl zu ändern." },
        ],
        examples: [
          "Im Einstoffsystem des Wassers (K=1) gilt innerhalb eines Einphasengebiets (z. B. reines Eis, P=1): F=1+2−1=2, Druck und Temperatur sind also frei wählbar. Auf einer Phasengrenzlinie zwischen zwei Phasen (z. B. Eis/Wasser, P=2) gilt F=1+2−2=1 — ändert man den Druck, ist die zugehörige Temperatur festgelegt. Am Tripelpunkt, an dem alle drei Phasen (Eis, Wasser, Dampf) gleichzeitig im Gleichgewicht stehen (P=3), gilt F=1+2−3=0: Der Tripelpunkt liegt bei fest vorgegebenem Druck und fest vorgegebener Temperatur.",
        ],
      },
      {
        id: "12-2",
        heading: "12.2 Vollständige Mischbarkeit und die Hebelregel",
        body: [
          "Das einfachste Zweistoffsystem liegt vor, wenn die beiden Komponenten sowohl im flüssigen als auch im festen Zustand vollständig ineinander löslich sind (vollständige Mischbarkeit) — es entsteht dann ausschließlich ein Substitutionsmischkristall (siehe 6.1). Das zugehörige Zustandsdiagramm besitzt eine Liquiduslinie (oberhalb existiert nur die homogene Schmelze) und eine Soliduslinie (unterhalb existiert nur der homogene Mischkristall); dazwischen liegt ein zigarrenförmiges Zweiphasengebiet, in dem Schmelze und Mischkristall gleichzeitig im Gleichgewicht stehen.",
          "Innerhalb dieses Zweiphasengebiets lassen sich die Mengenanteile von Schmelze (mS) und Mischkristall (mK) bei einer bestimmten Temperatur über die Hebelregel bestimmen: Man zeichnet bei der betrachteten Temperatur eine horizontale Konode (Isotherme) durch das Zweiphasengebiet; ihre Schnittpunkte mit Liquidus- und Soliduslinie liefern die Gleichgewichtskonzentrationen von Schmelze (c'') und Mischkristall (c') bei dieser Temperatur. Die Mengenanteile ergeben sich dann aus dem Verhältnis der jeweils gegenüberliegenden Hebelarme zur Gesamtlänge der Konode — daher der Name Hebelregel.",
        ],
        formulas: [
          "mS = (c′ − c) / (c′ − c″)  (Mengenanteil Schmelze)",
          "mK = (c − c″) / (c′ − c″)  (Mengenanteil Mischkristall)",
        ],
        formulasLatex: [
          "m_S = \\dfrac{c' - c}{c' - c''}",
          "m_K = \\dfrac{c - c''}{c' - c''}",
        ],
        terms: [
          { term: "Liquiduslinie", definition: "Grenzlinie im Zustandsdiagramm, oberhalb derer nur die homogene Schmelze stabil ist." },
          { term: "Soliduslinie", definition: "Grenzlinie im Zustandsdiagramm, unterhalb derer nur der homogene Mischkristall stabil ist." },
          { term: "Hebelregel", definition: "Bestimmung der Mengenanteile zweier im Gleichgewicht stehender Phasen aus den Abschnitten einer Konode im Zweiphasengebiet." },
        ],
        examples: [
          "Eine Legierung mit Gesamtzusammensetzung c=40% wird bei einer Temperatur abgekühlt, bei der die Konode das Zweiphasengebiet bei c′=25% (Mischkristall) und c″=60% (Schmelze) schneidet. Der Mengenanteil der Schmelze beträgt mS=(25−40)/(25−60)=(−15)/(−35)≈0,43, der des Mischkristalls mK=(40−60)/(25−60)=(−20)/(−35)≈0,57 — zur Kontrolle: mS+mK=0,43+0,57=1,00. Bei dieser Temperatur besteht die Legierung also zu 57% aus Mischkristall und zu 43% aus Restschmelze.",
        ],
      },
      {
        id: "12-3",
        heading: "12.3 Eutektische und peritektische Systeme",
        body: [
          "Sind zwei Komponenten im flüssigen Zustand vollständig mischbar, im festen Zustand aber nur begrenzt oder gar nicht ineinander löslich, entsteht ein eutektisches System. Ausgehend von den Schmelzpunkten der reinen Komponenten sinkt der Schmelzpunkt mit zunehmender Zulegierung der jeweils anderen Komponente, bis beide Äste der Liquiduslinie sich im Eutektikum E treffen — dem Punkt mit dem niedrigsten Schmelzpunkt des gesamten Systems. Am Eutektikum erstarrt die gesamte Restschmelze bei konstanter Temperatur gleichzeitig in zwei feste Phasen; da dies ohne vorheriges Durchlaufen eines Zweiphasengebiets mit allmählicher Ausscheidung geschieht, sind die Diffusionswege kurz und das entstehende eutektische Gefüge entsprechend feinkörnig und lamellar.",
          "Bei einem peritektischen System reagiert die Restschmelze am peritektischen Punkt P dagegen mit einer bereits zuvor ausgeschiedenen festen Phase zu einer neuen, anderen festen Phase. Sowohl das Eutektikum als auch das Peritektikum sind nonvariante Punkte (F=0 bei p=konstant, siehe 12.1), da an ihnen drei Phasen — Schmelze und zwei feste Phasen — gleichzeitig im Gleichgewicht stehen.",
        ],
        formulas: [
          "S → A + B  (eutektische Reaktion)",
          "S + α → β  (peritektische Reaktion)",
        ],
        formulasLatex: [
          "S \\rightarrow A + B \\quad (\\text{eutektisch})",
          "S + \\alpha \\rightarrow \\beta \\quad (\\text{peritektisch})",
        ],
        terms: [
          { term: "Eutektikum", definition: "Nonvarianter Punkt eines Zustandsdiagramms mit dem niedrigsten Schmelzpunkt des Systems, an dem die gesamte Restschmelze gleichzeitig in zwei feste Phasen erstarrt." },
          { term: "Peritektikum", definition: "Nonvarianter Punkt, an dem Restschmelze und eine bereits ausgeschiedene feste Phase zu einer neuen festen Phase reagieren." },
        ],
        examples: [
          "Silber und Kupfer bilden ein eutektisches System mit einem Eutektikum bei etwa 780°C und einer Zusammensetzung von rund 28 Masseprozent Kupfer — deutlich unterhalb der Schmelzpunkte der reinen Metalle (Silber: 962°C, Kupfer: 1085°C). Legierungen nahe dieser eutektischen Zusammensetzung werden u. a. deshalb als Lote verwendet, weil sie bei vergleichsweise niedriger Temperatur vollständig schmelzen.",
        ],
      },
    ],
  },
  // ==================== Kapitel 13 ====================
  {
    id: "eisen-kohlenstoff-system",
    number: 13,
    title: "Das Eisen-Kohlenstoff-System",
    free: false,
    intro:
      "Kein Zustandsdiagramm ist für die Werkstofftechnik bedeutsamer als das Eisen-Kohlenstoff-Diagramm: Es beschreibt die Grundlage von Stahl und Gusseisen, zweier der wichtigsten Konstruktionswerkstoffe überhaupt. Dieses Kapitel wendet die in Kapitel 12 eingeführten Konzepte auf dieses konkrete System an und beschreibt, wie sich durch gezielte Wärmebehandlung die Eigenschaften von Stahl in weiten Grenzen steuern lassen.",
    sections: [
      {
        id: "13-1",
        heading: "13.1 Das Fe-C-Diagramm: Phasen und Gefüge",
        body: [
          "Reines Eisen durchläuft beim Abkühlen von der Schmelze mehrere Kristallstrukturänderungen (siehe Polymorphie, Kapitel 4.4). Mit steigendem Kohlenstoffgehalt verändert sich die Löslichkeit von Kohlenstoff in den jeweiligen Eisenphasen erheblich: Die kubisch flächenzentrierte γ-Phase (Austenit) kann bei 1147°C bis zu 2,06% Kohlenstoff lösen, die kubisch raumzentrierte α-Phase (Ferrit) dagegen bei 723°C nur maximal 0,8%. Kohlenstoff, der nicht mehr im Mischkristall gelöst werden kann, scheidet sich als Eisenkarbid Fe3C (Zementit) aus — eine harte, spröde intermetallische Phase mit 6,67 Masseprozent Kohlenstoff.",
          "Das Diagramm besitzt drei nonvariante Punkte: ein Peritektikum bei 1493°C (Schmelze und δ-Ferrit reagieren zu Austenit), ein Eutektikum bei 1147°C und 4,3% C (die Restschmelze erstarrt zu Austenit und Zementit — dieses feinkörnige, lamellare Gefüge heißt Ledeburit) sowie ein Eutektoid bei 723°C und 0,8% C, an dem Austenit ohne Durchlaufen eines Zweiphasengebiets direkt in ein Gemisch aus Ferrit und Zementit zerfällt. Dieses eutektoide Gefüge wird als Perlit bezeichnet und besteht aus fein verteilten, lamellaren Schichten von Ferrit und Zementit.",
        ],
        table: {
          caption: "Gefügebestandteile des Fe-C-Systems",
          headers: ["Gefüge", "Phase(n)"],
          rows: [
            ["Austenit", "γ-Mischkristall (kfz)"],
            ["Ferrit", "α-Mischkristall (krz)"],
            ["Zementit", "Fe3C"],
            ["Perlit", "α-Mischkristall + Fe3C (lamellar, eutektoid)"],
            ["Ledeburit", "γ-Mischkristall + Fe3C (lamellar, eutektisch)"],
          ],
        },
        formulas: [
          "S + δ → γ  (peritektische Reaktion, 1493°C, 0,16% C)",
          "S → γ + Fe3C  (eutektische Reaktion, 1147°C, 4,3% C)",
          "γ → α + Fe3C  (eutektoide Reaktion, 723°C, 0,8% C)",
        ],
        formulasLatex: [
          "S + \\delta \\rightarrow \\gamma \\quad (1493^\\circ\\text{C})",
          "S \\rightarrow \\gamma + \\text{Fe}_3\\text{C} \\quad (1147^\\circ\\text{C})",
          "\\gamma \\rightarrow \\alpha + \\text{Fe}_3\\text{C} \\quad (723^\\circ\\text{C})",
        ],
        terms: [
          { term: "Austenit", definition: "γ-Mischkristall des Eisens (kfz), löst bei 1147°C bis zu 2,06% Kohlenstoff." },
          { term: "Perlit", definition: "Eutektoides, lamellares Gefüge aus Ferrit und Zementit, entstanden bei 723°C aus Austenit." },
          { term: "Ledeburit", definition: "Eutektisches, lamellares Gefüge aus Austenit und Zementit, entstanden bei 1147°C aus der Restschmelze." },
        ],
        examples: [
          "Eine Fe-C-Legierung mit genau 0,8% Kohlenstoff (eutektoide Zusammensetzung) besteht bei Raumtemperatur vollständig aus Perlit — der komplette Austenit zerfällt beim Unterschreiten von 723°C direkt und ohne Zwischenstufe eutektoid in Ferrit und Zementit. Eine Legierung mit nur 0,4% Kohlenstoff (untereutektoider Stahl) enthält bei Raumtemperatur dagegen ein Gemisch aus Perlit und zusätzlichem, primär ausgeschiedenem Ferrit.",
        ],
      },
      {
        id: "13-2",
        heading: "13.2 Wärmebehandlung: Härten, Anlassen, Vergüten",
        body: [
          "Eine Wärmebehandlung verändert gezielt das Gefüge eines Stahls durch kontrollierte Temperaturführung, ohne die chemische Zusammensetzung zu verändern. Beim Glühen wird das Gefüge langsam in Richtung des thermodynamischen Gleichgewichts verändert. Beim martensitischen Härten wird der Stahl dagegen aus dem Austenitgebiet heraus so schnell abgeschreckt (z. B. in Wasser), dass weder Eisen- noch Kohlenstoffatome diffundieren können — der Kohlenstoff bleibt zwangsgelöst im Kristallgitter, das dadurch tetragonal verzerrt wird. Das entstehende Gefüge heißt Martensit; es ist extrem hart und spröde, aber wegen seiner Sprödigkeit für die meisten technischen Anwendungen in dieser Form ungeeignet.",
          "Deshalb folgt auf das Härten in der Regel ein zweiter Schritt, das Anlassen: eine erneute Wärmebehandlung deutlich unterhalb der eutektoiden Temperatur, bei der sich der tetragonal verzerrte Martensit unter Ausscheidung feinstverteilter Karbide in ein weniger sprödes, kubisches Gefüge umwandelt. Die Kombination aus Härten und anschließendem Anlassen wird als Vergüten bezeichnet; ihr Ziel ist eine deutlich erhöhte Festigkeit bei gleichzeitig ausreichender Zähigkeit. Mit steigender Anlasstemperatur nehmen dabei Härte und Festigkeit ab, während Zähigkeit und Bruchdehnung zunehmen — die konkrete Anlasstemperatur wird je nach gewünschtem Eigenschaftsprofil gewählt.",
        ],
        terms: [
          { term: "Martensit", definition: "Tetragonal verzerrtes, extrem hartes und sprödes Gefüge, das durch diffusionsloses Abschrecken von Austenit entsteht." },
          { term: "Vergüten", definition: "Kombination aus martensitischem Härten und anschließendem Anlassen zur Erhöhung der Festigkeit bei erhaltener Zähigkeit." },
        ],
        examples: [
          "Ein Werkzeugstahl wird zunächst im Austenitgebiet geglüht und anschließend in Öl abgeschreckt, wodurch sich hartes, aber sprödes Martensitgefüge bildet. Erst das anschließende Anlassen bei einer moderaten Temperatur reduziert die Sprödigkeit so weit, dass das Werkzeug im praktischen Einsatz nicht bei der ersten Belastungsspitze zerspringt, ohne dabei die für ein Werkzeug nötige hohe Härte vollständig zu verlieren.",
        ],
      },
    ],
  },
];
