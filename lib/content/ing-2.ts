import type { SkriptChapter } from "./types";

// Eigenständiges Lehrwerk zu "Technische Mechanik" (Statik und
// Festigkeitslehre), verfasst wie ein unabhängiges Lehrbuch zum Modulthema —
// nicht als Paraphrase einer bestimmten Vorlesung.
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 ====================
  {
    id: "kraefte-axiome-starrer-koerper",
    number: 1,
    title: "Kräfte, Axiome und der starre Körper",
    free: true,
    intro:
      "Die Statik untersucht Körper im Kräftegleichgewicht — die Grundlage jeder Tragwerksberechnung. Dieses Kapitel führt das Modell des starren Körpers und die grundlegenden Axiome der Kräftelehre ein.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Das Modell des starren Körpers",
        body: [
          "Die Statik idealisiert reale Bauteile häufig als starre Körper: Körper, deren Verformung unter Belastung vernachlässigbar klein ist und die deshalb für die Gleichgewichtsbetrachtung als formstabil angenommen werden. Diese Idealisierung erlaubt es, Kräfte und Momente ohne Rücksicht auf tatsächliche (meist winzige) elastische Verformungen zu bilanzieren.",
          "Für die Frage nach tatsächlichen Verformungen und Materialbeanspruchungen (Festigkeitslehre, ab Kapitel 7) wird diese Idealisierung wieder aufgegeben — Statik und Festigkeitslehre bauen aufeinander auf, arbeiten aber mit unterschiedlich präzisen Körpermodellen.",
        ],
        terms: [{ term: "Starrer Körper", definition: "Idealisierter Körper ohne Verformung, dessen Geometrie unter Belastung als unverändert angenommen wird." }],
        examples: [
          "Bei der Berechnung der Auflagerkräfte einer Brücke wird die Brücke zunächst als starrer Körper behandelt (Gleichgewicht der äußeren Kräfte), auch wenn sie sich unter Last real geringfügig durchbiegt — diese Durchbiegung wird erst in der Festigkeitslehre gesondert betrachtet.",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Kraft als Vektor und das Kräfteparallelogramm",
        body: [
          "Eine Kraft ist eine vektorielle Größe, charakterisiert durch Betrag, Richtung und Angriffspunkt. Zwei an einem Punkt angreifende Kräfte lassen sich nach dem Kräfteparallelogramm zu einer resultierenden Kraft zusammenfassen: Die Diagonale des von beiden Kraftvektoren aufgespannten Parallelogramms ergibt die Resultierende.",
          "Rechnerisch lässt sich diese Zusammensetzung einfacher über Komponentenzerlegung durchführen: Jede Kraft wird in ihre x- und y-Komponenten zerlegt, die Komponenten werden separat addiert, und aus der resultierenden Summenkomponente wird die Gesamtkraft rekonstruiert.",
        ],
        formulas: ["F_res,x = ΣFᵢ,x, F_res,y = ΣFᵢ,y"],
        formulasLatex: ["F_{res,x} = \\sum_i F_{i,x}, \\quad F_{res,y} = \\sum_i F_{i,y}"],
        terms: [{ term: "Kräfteparallelogramm", definition: "Konstruktionsprinzip zur Zusammensetzung zweier Kräfte zu einer resultierenden Kraft." }],
        examples: [
          "Zwei Kräfte F₁=(3,4)kN und F₂=(1,−2)kN, die am selben Punkt angreifen, ergeben eine Resultierende F_res=(4,2)kN mit Betrag |F_res|=√(4²+2²)=√20≈4,47kN.",
        ],
      },
      {
        id: "1-3",
        heading: "1.3 Die Newtonschen Axiome in der Statik",
        body: [
          "Die Statik stützt sich auf die drei Newtonschen Axiome: das Trägheitsprinzip (ein Körper ohne resultierende äußere Kraft bleibt in Ruhe oder gleichförmiger Bewegung), das Aktionsprinzip (Kraft = Masse mal Beschleunigung, in der Statik jedoch stets mit Beschleunigung=0, also resultierende Kraft=0), und das Reaktionsprinzip (actio=reactio: übt Körper A eine Kraft auf Körper B aus, übt B eine gleich große, entgegengesetzt gerichtete Kraft auf A aus).",
          "Das Reaktionsprinzip ist die Grundlage jeder Schnittprinzip-Anwendung: Trennt man ein System an einer Stelle gedanklich auf, müssen an der Schnittstelle Kräfte eingeführt werden, die auf beiden Seiten des Schnitts exakt entgegengesetzt gleich groß sind.",
        ],
        terms: [{ term: "Reaktionsprinzip (actio=reactio)", definition: "Übt Körper A eine Kraft auf B aus, übt B eine gleich große, entgegengesetzte Kraft auf A aus." }],
        examples: [
          "Ein Buch, das auf einem Tisch ruht, übt durch sein Gewicht eine Kraft auf den Tisch aus; nach dem Reaktionsprinzip übt der Tisch eine gleich große, nach oben gerichtete Normalkraft auf das Buch aus — nur dadurch bleibt das Buch in Ruhe.",
        ],
      },
    ],
  },
  // ==================== Kapitel 2 ====================
  {
    id: "kraftgruppen-hebelgesetz-moment",
    number: 2,
    title: "Kraftgruppen, Hebelgesetz und das Moment einer Kraft",
    free: false,
    intro:
      "Kräfte, die nicht am selben Punkt angreifen, erzeugen zusätzlich zur reinen Kraftwirkung eine Drehwirkung. Dieses Kapitel führt den Momentbegriff ein, der für jede Tragwerksberechnung unverzichtbar ist.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Das Moment einer Kraft",
        body: [
          "Das Moment einer Kraft F bezüglich eines Bezugspunkts O misst deren Drehwirkung um diesen Punkt: M = F · a, wobei a der senkrechte Abstand (Hebelarm) zwischen der Wirkungslinie der Kraft und dem Bezugspunkt ist. Das Vorzeichen des Moments zeigt die Drehrichtung an (üblicherweise: positiv = Gegenuhrzeigersinn).",
          "Formal lässt sich das Moment auch als Kreuzprodukt aus Ortsvektor r (vom Bezugspunkt zum Angriffspunkt der Kraft) und Kraftvektor F darstellen: M = r × F — diese Darstellung verallgemeinert sich direkt auf den dreidimensionalen Raum.",
        ],
        formulas: ["M = F · a"],
        formulasLatex: ["M = F \\cdot a"],
        terms: [{ term: "Hebelarm (a)", definition: "Senkrechter Abstand zwischen Wirkungslinie einer Kraft und dem Bezugspunkt des Moments." }],
        examples: [
          "Eine Kraft von 200N greift senkrecht an einem Schraubenschlüssel im Abstand 0,3m vom Drehpunkt an. Das erzeugte Moment beträgt M=200N×0,3m=60Nm.",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Das Hebelgesetz",
        body: [
          "Das Hebelgesetz (Kraft mal Kraftarm = Last mal Lastarm, F₁·a₁ = F₂·a₂) beschreibt das Gleichgewicht eines zweiarmigen Hebels um seinen Drehpunkt. Es ist ein direkter Spezialfall des Momentengleichgewichts: Die Summe aller Momente um den Drehpunkt muss null sein, damit der Hebel nicht rotiert.",
          "Das Hebelgesetz erklärt die mechanische Kraftverstärkung: Ein langer Kraftarm bei kurzem Lastarm erlaubt es, mit geringer Kraft eine große Last zu bewegen — allerdings auf Kosten eines größeren zurückzulegenden Weges am Kraftarm (Prinzip der 'goldenen Regel der Mechanik').",
        ],
        formulas: ["F₁ · a₁ = F₂ · a₂"],
        formulasLatex: ["F_1 \\cdot a_1 = F_2 \\cdot a_2"],
        terms: [{ term: "Hebelgesetz", definition: "Gleichgewichtsbedingung eines Hebels: Kraft mal Kraftarm gleich Last mal Lastarm." }],
        examples: [
          "Eine Last von 600N im Abstand 0,5m vom Drehpunkt (Moment 600N×0,5m=300Nm) lässt sich mit einer Kraft von nur 100N ausbalancieren, sofern diese im Abstand a₁=3m angreift, da dann F₁·a₁=100N×3m=300Nm ebenfalls gilt.",
        ],
      },
      {
        id: "2-3",
        heading: "2.3 Kräftepaare und resultierendes Moment",
        body: [
          "Ein Kräftepaar besteht aus zwei entgegengesetzt gleich großen, parallelen, aber nicht auf derselben Wirkungslinie liegenden Kräften. Ein Kräftepaar erzeugt ein reines Moment (ohne resultierende Kraft), das unabhängig vom gewählten Bezugspunkt stets denselben Wert hat: M = F · d, wobei d der Abstand zwischen den beiden parallelen Wirkungslinien ist.",
          "Diese Eigenschaft — dass das Moment eines Kräftepaares bezugspunktunabhängig ist — unterscheidet es von einer Einzelkraft, deren Moment vom gewählten Bezugspunkt abhängt, und macht Kräftepaare zu einem nützlichen Werkzeug bei der Analyse reiner Drehwirkungen (z. B. beim Anziehen einer Schraube mit einem Schraubenschlüssel an beiden Enden).",
        ],
        formulas: ["M = F · d (Kräftepaar)"],
        formulasLatex: ["M = F \\cdot d"],
        terms: [{ term: "Kräftepaar", definition: "Zwei entgegengesetzt gleich große, parallele Kräfte mit unterschiedlicher Wirkungslinie; erzeugt bezugspunktunabhängiges Moment." }],
        examples: [
          "Zwei entgegengesetzte Kräfte von je 50N greifen im Abstand von 0,2m an einem Lenkrad an — das resultierende Kräftepaar-Moment M=50N×0,2m=10Nm ist unabhängig davon, welchen Bezugspunkt man für die Berechnung wählt.",
        ],
      },
    ],
  },
  // ==================== Kapitel 3 ====================
  {
    id: "gleichgewicht-lagerarten-bestimmtheit",
    number: 3,
    title: "Gleichgewicht, Lagerarten und statische Bestimmtheit",
    free: false,
    intro:
      "Um Tragwerke zu berechnen, muss zunächst geklärt werden, wie sie gelagert sind und ob überhaupt genügend Gleichungen zur Verfügung stehen, um alle unbekannten Lagerkräfte zu bestimmen.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Die Gleichgewichtsbedingungen",
        body: [
          "Ein starrer Körper ist im (statischen) Gleichgewicht, wenn sowohl die Summe aller Kräfte als auch die Summe aller Momente (um einen beliebigen Punkt) verschwindet: ΣFₓ=0, ΣFy=0, ΣM=0 (in der Ebene). Diese drei skalaren Gleichungen liefern die maximale Anzahl unabhängiger Bestimmungsgleichungen für ein ebenes Kräftesystem.",
          "Diese drei Gleichgewichtsbedingungen sind das zentrale Werkzeug, um unbekannte Lagerkräfte zu berechnen — vorausgesetzt, die Anzahl der Unbekannten übersteigt nicht die Anzahl der verfügbaren Gleichungen (statische Bestimmtheit, siehe Abschnitt 3.3).",
        ],
        formulas: ["ΣFₓ=0, ΣFy=0, ΣM=0"],
        formulasLatex: ["\\sum F_x = 0,\\quad \\sum F_y = 0,\\quad \\sum M = 0"],
        terms: [{ term: "Statisches Gleichgewicht", definition: "Zustand, in dem Summe aller Kräfte und Summe aller Momente eines Systems verschwinden." }],
        examples: [
          "Ein waagrechter Balken mit zwei Lagern und einer mittigen Last wird durch die drei Gleichgewichtsbedingungen vollständig lösbar, sofern genau drei unbekannte Lagerreaktionen (z. B. zwei vertikale Kräfte und eine horizontale Kraft) vorliegen.",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Lagerarten und ihre Reaktionskräfte",
        body: [
          "Verschiedene Lagerarten unterdrücken jeweils unterschiedliche Freiheitsgrade und erzeugen entsprechende Reaktionskräfte/-momente: Ein Loslager (Rollenlager) unterdrückt eine Verschiebungsrichtung (eine unbekannte Kraft senkrecht zur Gleitrichtung), ein Festlager (Gelenklager) unterdrückt beide Verschiebungsrichtungen (zwei unbekannte Kraftkomponenten), und eine feste Einspannung unterdrückt zusätzlich die Verdrehung (zwei Kraftkomponenten plus ein Einspannmoment).",
          "Die korrekte Identifikation der Lagerart und der zugehörigen unbekannten Reaktionsgrößen ist der erste, entscheidende Schritt jeder statischen Berechnung — ein falsch angenommenes Lager führt unweigerlich zu einer falschen Anzahl von Unbekannten und damit zu einem unlösbaren oder falsch gelösten Gleichungssystem.",
        ],
        table: {
          caption: "Lagerarten im Vergleich",
          headers: ["Lagerart", "Unterdrückte Freiheitsgrade", "Unbekannte Reaktionsgrößen", "Wertigkeit"],
          rows: [
            ["Loslager (Rollenlager)", "1 Verschiebung (senkrecht zur Gleitrichtung)", "1 Kraft", "1"],
            ["Festlager (Gelenklager)", "2 Verschiebungen", "2 Kraftkomponenten", "2"],
            ["Feste Einspannung", "2 Verschiebungen + Verdrehung", "2 Kraftkomponenten + 1 Moment", "3"],
          ],
        },
        terms: [
          { term: "Loslager", definition: "Lager, das eine Verschiebungsrichtung unterdrückt; erzeugt eine unbekannte Reaktionskraft." },
          { term: "Festlager", definition: "Lager, das beide Verschiebungsrichtungen unterdrückt; erzeugt zwei unbekannte Reaktionskraftkomponenten." },
        ],
        examples: [
          "Eine Brücke, die auf einer Seite fest eingespannt und auf der anderen Seite auf einem Loslager (Rollenlager) aufliegt, erlaubt eine thermische Längenausdehnung der Brücke, ohne dass dabei zusätzliche innere Zwängungskräfte entstehen.",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Statische Bestimmtheit",
        body: [
          "Ein Tragwerk heißt statisch bestimmt, wenn die Anzahl der unbekannten Lagerreaktionen genau der Anzahl der verfügbaren Gleichgewichtsbedingungen entspricht — alle Unbekannten lassen sich dann eindeutig aus der Statik allein bestimmen. Übersteigt die Anzahl der Unbekannten die Anzahl der Gleichungen, ist das System statisch unbestimmt (zusätzliche Verformungsbetrachtungen aus der Festigkeitslehre wären zur vollständigen Lösung nötig); ist die Anzahl geringer, ist das System kinematisch (beweglich, kein Gleichgewicht möglich).",
          "Für ein ebenes System mit einem einzelnen starren Körper und r unbekannten Lagerreaktionen gilt: r=3 bedeutet statische Bestimmtheit, r>3 statische Überbestimmtheit, r<3 kinematische Unbestimmtheit (Instabilität).",
        ],
        formulas: ["r = 3 ⇒ statisch bestimmt"],
        formulasLatex: ["r = 3 \\;\\Rightarrow\\; \\text{statisch bestimmt}"],
        terms: [{ term: "Statische Bestimmtheit", definition: "Übereinstimmung von Anzahl unbekannter Lagerreaktionen und Anzahl der Gleichgewichtsbedingungen." }],
        examples: [
          "Ein Balken mit einem Festlager (2 Unbekannte) und einem Loslager (1 Unbekannte) hat insgesamt r=3 Unbekannte, was genau den 3 Gleichgewichtsbedingungen in der Ebene entspricht — das System ist statisch bestimmt.",
        ],
      },
      {
        id: "3-4",
        heading: "3.4 Der Gauß-Algorithmus in Tableau-Form",
        body: [
          "Systeme mit mehr als drei unbekannten Größen entstehen an mehreren Stellen der Technischen Mechanik — etwa bei mehrteiligen Tragwerken mit mehreren Freischnitten (Kapitel 10), bei denen jeder Teilkörper eigene Gleichgewichtsbedingungen liefert, die gemeinsam gelöst werden müssen. Der Gauß-Algorithmus löst ein solches lineares Gleichungssystem (LGS) systematisch, indem er die erweiterte Koeffizientenmatrix — das Tableau, bestehend aus den Koeffizienten aller Gleichungen und der rechten Seite — schrittweise auf Stufenform (Dreiecksform) bringt.",
          "Erlaubt sind dabei drei elementare Zeilenumformungen, die die Lösungsmenge nicht verändern: das Vertauschen zweier Zeilen, die Multiplikation einer Zeile mit einem Skalar ≠0, und die Addition eines Vielfachen einer Zeile zu einer anderen. Zur Elimination arbeitet man spaltenweise: Mit der ersten Zeile (dem Pivot) werden die Einträge darunter in derselben Spalte eliminiert, indem von jeder darunterliegenden Zeile ein passendes Vielfaches der Pivotzeile abgezogen wird — Zeile_i,neu = Zeile_i − (a_i1/a_11)·Zeile_1. Dieser Schritt wird spaltenweise wiederholt, bis das Tableau nur noch auf und oberhalb der Diagonalen von null verschiedene Einträge besitzt.",
          "Ist das Tableau in Stufenform, liefert die letzte Zeile (mit nur noch einer Unbekannten) deren Wert direkt. Durch Rückwärtseinsetzen — von unten nach oben durch die Zeilen arbeiten und bereits bekannte Werte einsetzen — werden anschließend alle übrigen Unbekannten der Reihe nach bestimmt.",
        ],
        formulas: ["Zeile_i,neu = Zeile_i − (a_i1/a_11) · Zeile_1  (Elimination unterhalb des Pivots)"],
        formulasLatex: ["\\text{Zeile}_{i,\\text{neu}} = \\text{Zeile}_i - \\dfrac{a_{i1}}{a_{11}}\\cdot \\text{Zeile}_1"],
        terms: [
          { term: "Tableau (erweiterte Koeffizientenmatrix)", definition: "Kompakte Zahlendarstellung eines LGS aus den Koeffizienten aller Gleichungen und der rechten Seite, ohne die Variablennamen mitzuführen." },
          { term: "Stufenform (Dreiecksform)", definition: "Zustand des Tableaus, in dem unterhalb der Diagonalen nur noch Nullen stehen; Ausgangspunkt für das Rückwärtseinsetzen." },
          { term: "Rückwärtseinsetzen", definition: "Lösungsverfahren, das ausgehend von der letzten (einfachsten) Zeile eines Tableaus in Stufenform schrittweise alle Unbekannten bestimmt." },
        ],
        examples: [
          "Gesucht ist die Lösung des Systems x+y+z=6, 2x−y+z=3, x+2y−z=2, dargestellt als Tableau mit den Zeilen (1,1,1|6), (2,−1,1|3), (1,2,−1|2). Elimination von x in Zeile 2 (−2·Zeile 1) und Zeile 3 (−1·Zeile 1) liefert (1,1,1|6), (0,−3,−1|−9), (0,1,−2|−4). Elimination von y in Zeile 3 (+⅓·Zeile 2) liefert (0,0,−7/3|−7), also z=3. Rückwärtseinsetzen in Zeile 2: −3y−3=−9 ⇒ y=2. Rückwärtseinsetzen in Zeile 1: x+2+3=6 ⇒ x=1.",
        ],
      },
    ],
  },
  // ==================== Kapitel 4 ====================
  {
    id: "haftreibung-seilreibung-kraftkegel",
    number: 4,
    title: "Haftreibung, Seilreibung und der Kraftkegel",
    free: false,
    intro:
      "Reibung ist in realen Konstruktionen allgegenwärtig — sie kann sowohl unerwünschte Bewegungshemmung als auch notwendige Stabilisierung bedeuten. Dieses Kapitel behandelt die grundlegenden Reibungsmodelle der Statik.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Haftreibung und das Coulombsche Reibungsgesetz",
        body: [
          "Solange sich zwei Kontaktflächen relativ zueinander nicht bewegen, kann die tangentiale Haftreibungskraft R jeden Wert zwischen 0 und einem Maximalwert R_max = μ₀·N annehmen, wobei N die Normalkraft und μ₀ der Haftreibungskoeffizient ist. Erst wenn die tatsächlich benötigte Haltekraft diesen Maximalwert überschreitet, beginnt der Körper zu gleiten.",
          "Der Haftreibungskoeffizient μ₀ ist stets größer als der Gleitreibungskoeffizient μ (der die Reibung während einer bereits stattfindenden Bewegung beschreibt) — ein Grund, warum das Anschieben eines ruhenden schweren Gegenstands mehr Kraft erfordert als das anschließende Weiterschieben.",
        ],
        formulas: ["R_max = μ₀ · N"],
        formulasLatex: ["R_{max} = \\mu_0 \\cdot N"],
        terms: [{ term: "Haftreibungskoeffizient (μ₀)", definition: "Materialabhängige Konstante, die die maximale Haftreibungskraft relativ zur Normalkraft bestimmt." }],
        examples: [
          "Eine Kiste mit Gewichtskraft 500N auf einer Fläche mit μ₀=0,4 kann horizontalen Kräften bis zu R_max=0,4×500N=200N standhalten, ohne zu rutschen; bei größerer aufgebrachter Kraft beginnt sie zu gleiten.",
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Der Reibungswinkel und der Kraftkegel",
        body: [
          "Der Reibungswinkel ρ₀ ist definiert über tan(ρ₀)=μ₀ und beschreibt den maximalen Winkel, um den die resultierende Kontaktkraft (aus Normalkraft und Haftreibungskraft) von der Flächennormalen abweichen kann, ohne dass Gleiten eintritt. Der Kraftkegel ist der Kegel aller möglichen Richtungen dieser resultierenden Kontaktkraft mit Öffnungswinkel 2ρ₀.",
          "Diese geometrische Interpretation ist praktisch nützlich: Liegt die Wirkungslinie einer aufgebrachten Last innerhalb des Kraftkegels, bleibt das System in Ruhe (Selbsthemmung); liegt sie außerhalb, tritt zwangsläufig Gleiten ein — unabhängig von der konkreten Kraftgröße.",
        ],
        formulas: ["tan(ρ₀) = μ₀"],
        formulasLatex: ["\\tan(\\rho_0) = \\mu_0"],
        terms: [{ term: "Reibungswinkel (ρ₀)", definition: "Winkel mit tan(ρ₀)=μ₀; beschreibt die maximale Abweichung der Kontaktkraft von der Flächennormalen ohne Gleiten." }],
        examples: [
          "Bei μ₀=0,5 ergibt sich ein Reibungswinkel von ρ₀=arctan(0,5)≈26,6° — eine geneigte Ebene mit einem Neigungswinkel unterhalb dieses Werts hält einen aufliegenden Körper allein durch Haftreibung ohne zusätzliche Sicherung.",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Seilreibung: die Eulersche Seilreibungsformel",
        body: [
          "Läuft ein Seil über eine raue Zylinderfläche (z. B. eine Seilrolle oder einen Pfosten) mit Umschlingungswinkel φ, wächst die maximal mögliche Kraftdifferenz zwischen den beiden Seilenden exponentiell mit dem Umschlingungswinkel: F₁/F₂ ≤ e^(μφ), wobei F₁ die größere und F₂ die kleinere Seilkraft ist.",
          "Diese Eulersche Seilreibungsformel erklärt, warum bereits wenige Umschlingungen eines Seils um einen Pfosten ausreichen, um sehr große Kräfte mit vergleichsweise geringem Gegenzug zu halten — ein Prinzip, das seit jeher beim Festmachen von Schiffen an Pollern genutzt wird.",
        ],
        formulas: ["F₁/F₂ ≤ e^(μφ)"],
        formulasLatex: ["\\dfrac{F_1}{F_2} \\le e^{\\mu\\varphi}"],
        terms: [{ term: "Eulersche Seilreibungsformel", definition: "Beschreibt das exponentielle Wachstum der maximal haltbaren Kraftdifferenz mit dem Umschlingungswinkel bei Seilreibung." }],
        examples: [
          "Bei μ=0,3 und einer vollen Umschlingung (φ=2π≈6,28) beträgt das maximale Kraftverhältnis F₁/F₂ ≤ e^(0,3×6,28) ≈ e^1,88 ≈ 6,58 — eine Person könnte mit einer Haltekraft von 100N theoretisch bis zu 658N auf der anderen Seite halten.",
        ],
      },
    ],
  },
  // ==================== Kapitel 5 ====================
  {
    id: "fachwerke-knotenschnitt-ritter",
    number: 5,
    title: "Fachwerke: Knotenschnitt- und Rittersches Verfahren",
    free: false,
    intro:
      "Fachwerke sind aus geraden Stäben zusammengesetzte Tragwerke, die ausschließlich Zug- und Druckkräfte übertragen. Dieses Kapitel behandelt die zwei klassischen Verfahren zur Bestimmung der Stabkräfte.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Grundannahmen des idealen Fachwerks",
        body: [
          "Ein ideales Fachwerk besteht aus geraden Stäben, die ausschließlich an ihren Endpunkten (Knoten) durch reibungsfreie Gelenke verbunden sind, und Lasten greifen ausschließlich an den Knoten an. Unter diesen Annahmen können Stäbe nur reine Zug- oder Druckkräfte entlang ihrer Stabachse übertragen — keine Biegemomente oder Querkräfte.",
          "Diese Idealisierung vereinfacht die Berechnung erheblich, ist aber eine Näherung: reale Fachwerkverbindungen (z. B. verschweißt oder vernietet) übertragen durchaus geringe Biegemomente, die in der Praxis meist als sekundär vernachlässigt werden.",
        ],
        terms: [{ term: "Ideales Fachwerk", definition: "Tragwerk aus geraden, an Knoten gelenkig verbundenen Stäben mit ausschließlich axialen Stabkräften." }],
        examples: [
          "Ein Kran-Ausleger aus dreieckig angeordneten Stahlstäben wird für die Berechnung als ideales Fachwerk behandelt, bei dem jeder Stab entweder auf Zug oder auf Druck beansprucht wird.",
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Das Knotenschnittverfahren",
        body: [
          "Das Knotenschnittverfahren isoliert nacheinander jeden einzelnen Knoten des Fachwerks und wendet auf ihn die beiden Kräftegleichgewichtsbedingungen an (ΣFₓ=0, ΣFy=0; keine Momentengleichung nötig, da an einem Punkt keine Hebelarme existieren). Man beginnt zweckmäßig an einem Knoten mit höchstens zwei unbekannten Stabkräften und arbeitet sich schrittweise durch das gesamte Fachwerk.",
          "Dieses Verfahren liefert grundsätzlich ALLE Stabkräfte des Fachwerks, ist aber bei großen Fachwerken mit vielen Knoten arbeitsaufwendig, da man sich systematisch durch jeden einzelnen Knoten arbeiten muss.",
        ],
        terms: [{ term: "Knotenschnittverfahren", definition: "Verfahren zur Fachwerksberechnung, das Kräftegleichgewicht an jedem einzelnen Knoten anwendet." }],
        examples: [
          "An einem Knoten, an dem nur zwei unbekannte Stabkräfte und eine bekannte äußere Last angreifen, lassen sich beide unbekannten Stabkräfte direkt aus den zwei Kräftegleichgewichtsbedingungen ΣFₓ=0 und ΣFy=0 berechnen.",
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Das Rittersche Schnittverfahren",
        body: [
          "Das Rittersche Schnittverfahren schneidet das Fachwerk stattdessen entlang einer gedachten Linie, die höchstens drei Stäbe mit unbekannter Kraft durchtrennt, und wendet auf das entstehende Teilsystem alle drei Gleichgewichtsbedingungen an (ΣFₓ=0, ΣFy=0, ΣM=0). Durch geschickte Wahl des Momentenbezugspunkts (idealerweise der Schnittpunkt zweier der drei unbekannten Stabkräfte) lässt sich oft direkt eine einzelne unbekannte Stabkraft isoliert berechnen.",
          "Im Gegensatz zum Knotenschnittverfahren erlaubt das Rittersche Verfahren die gezielte Berechnung EINZELNER Stabkräfte, ohne das gesamte Fachwerk knotenweise durchrechnen zu müssen — praktisch vorteilhaft, wenn nur die Kraft in einem bestimmten Stab von Interesse ist.",
        ],
        terms: [{ term: "Rittersches Schnittverfahren", definition: "Verfahren zur gezielten Berechnung einzelner Stabkräfte durch Schnitt durch maximal drei unbekannte Stäbe und Momentengleichgewicht." }],
        examples: [
          "Um die Kraft in einem mittleren Diagonalstab eines Brückenfachwerks zu bestimmen, legt man einen Rundschnitt durch diesen und zwei weitere Stäbe und wählt den Momentenbezugspunkt am Schnittpunkt der beiden anderen Stäbe — dadurch entfällt deren Momentbeitrag, und die gesuchte Stabkraft lässt sich direkt aus ΣM=0 berechnen.",
        ],
      },
      {
        id: "5-4",
        heading: "5.4 Nullstäbe erkennen",
        body: [
          "Nullstäbe sind Fachwerkstäbe, deren Stabkraft unter der gegebenen Belastung exakt null beträgt. In vielen Fällen lassen sie sich allein durch Betrachtung der Knotengeometrie identifizieren, ganz ohne Rechnung — das spart beim Knotenschnittverfahren (5.2) erheblichen Aufwand, da man die Berechnung gezielt bei den tatsächlich belasteten Stäben beginnen kann.",
          "Drei Fälle decken die meisten praktischen Situationen ab: (1) Treffen an einem unbelasteten Knoten genau zwei Stäbe zusammen, die nicht auf einer gemeinsamen Wirkungslinie liegen (nicht kollinear), müssen beide Stäbe Nullstäbe sein — ohne äußere Kraft am Knoten kann Gleichgewicht in zwei unabhängigen Richtungen nur erfüllt werden, wenn beide Stabkräfte null sind. (2) Treffen an einem unbelasteten Knoten drei Stäbe zusammen, von denen zwei kollinear sind, muss der dritte (nicht-kollineare) Stab ein Nullstab sein — die beiden kollinearen Stäbe können sich gegenseitig entlang ihrer gemeinsamen Richtung im Gleichgewicht halten, aber die Kraftkomponente senkrecht dazu kann nur der dritte Stab aufnehmen, und ohne äußere Last muss diese Komponente null sein. (3) Greift an einem Knoten mit genau zwei nicht-kollinearen Stäben eine äußere Kraft an, die exakt in Richtung eines der beiden Stäbe wirkt, ist der jeweils andere Stab ein Nullstab.",
          "Nullstäbe sind trotz ihrer Kraft von null nicht überflüssig: Sie stabilisieren das Fachwerk gegen alternative Laststellungen (bei denen sie durchaus tragend werden) und verhindern das seitliche Ausknicken benachbarter Druckstäbe. Ist ein bestimmter Stab dagegen KEIN Nullstab und soll gezielt (ohne das gesamte Fachwerk knotenweise durchzurechnen) bestimmt werden, ist meist das in 5.3 behandelte Rittersche Schnittverfahren der effizientere Weg: Ein Rundschnitt durch höchstens drei unbekannte Stäbe erlaubt es, die gesuchte Stabkraft über eine geeignet gewählte Momentengleichung direkt zu isolieren, ohne über die Nachbarknoten zu gehen.",
        ],
        terms: [
          { term: "Nullstab", definition: "Fachwerkstab, dessen Stabkraft unter der gegebenen Belastung exakt null beträgt." },
          { term: "Kollineare Stäbe", definition: "Zwei Stäbe, deren Wirkungslinien auf derselben Geraden liegen." },
        ],
        examples: [
          "In einem Fachwerk trifft an einem oberen, unbelasteten Knoten ein senkrechter Pfosten auf zwei kollineare, waagrechte Obergurtstäbe. Nach Fall (2) ist der Pfosten ein Nullstab, da die beiden Obergurtstäbe die Horizontalrichtung untereinander im Gleichgewicht halten und für die Vertikalrichtung (in der nur der Pfosten wirkt) ohne äußere Last keine Kraft übrig bleibt.",
        ],
      },
    ],
  },
  // ==================== Kapitel 6 ====================
  {
    id: "schnittgroessen-balken",
    number: 6,
    title: "Schnittgrößen am geraden Balken",
    free: false,
    intro:
      "Anders als Fachwerksstäbe übertragen Balken zusätzlich zu Normalkräften auch Querkräfte und Biegemomente. Dieses Kapitel behandelt, wie diese sogenannten Schnittgrößen entlang eines Balkens bestimmt werden.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Normalkraft, Querkraft und Biegemoment",
        body: [
          "An jeder Schnittstelle eines belasteten Balkens treten drei Schnittgrößen auf: die Normalkraft N (Kraft entlang der Balkenachse), die Querkraft Q (Kraft senkrecht zur Balkenachse) und das Biegemoment M (Moment um die Achse senkrecht zur Balkenebene). Diese Schnittgrößen lassen sich für jeden Schnittpunkt durch Gleichgewichtsbetrachtung am freigeschnittenen Teilstück berechnen.",
          "Schnittgrößen sind der zentrale Ausgangspunkt der Festigkeitslehre: Aus dem Biegemoment lassen sich Biegespannungen (Kapitel 7), aus der Querkraft Schubspannungen berechnen — die Kenntnis der Schnittgrößen entlang des gesamten Balkens ist Voraussetzung für jede Festigkeitsnachweisführung.",
        ],
        terms: [
          { term: "Querkraft (Q)", definition: "Schnittgröße senkrecht zur Balkenachse an einer bestimmten Schnittstelle." },
          { term: "Biegemoment (M)", definition: "Schnittgröße, die die Biegewirkung an einer bestimmten Schnittstelle eines Balkens beschreibt." },
        ],
        examples: [
          "Ein einseitig eingespannter Balken mit Einzellast F am freien Ende hat am Einspannpunkt maximales Biegemoment M=F·L (L=Balkenlänge) und konstante Querkraft Q=F entlang des gesamten Balkens.",
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Schnittgrößenverläufe und der Zusammenhang zur Streckenlast",
        body: [
          "Bei einer verteilten Streckenlast q(x) gelten die Differentialbeziehungen dQ/dx = −q(x) und dM/dx = Q(x) — die Querkraft ist die (negative) Integration der Streckenlast, und das Biegemoment ist die Integration der Querkraft. Diese Zusammenhänge erlauben es, Schnittgrößenverläufe systematisch abschnittsweise zu bestimmen, statt für jeden Punkt einzeln freizuschneiden.",
          "Aus diesen Beziehungen folgt: An Stellen mit Q=0 liegt ein lokales Extremum des Biegemoments vor (da dM/dx=0) — ein praktisch wichtiges Kriterium, um die Stelle maximaler Biegebeanspruchung entlang eines Balkens zu finden, ohne den gesamten Momentenverlauf explizit auswerten zu müssen.",
        ],
        formulas: ["dQ/dx = −q(x)", "dM/dx = Q(x)"],
        formulasLatex: ["\\dfrac{dQ}{dx} = -q(x)", "\\dfrac{dM}{dx} = Q(x)"],
        terms: [{ term: "Streckenlast (q)", definition: "Über die Balkenlänge verteilte Kraft pro Längeneinheit." }],
        examples: [
          "Bei einem Balken mit konstanter Streckenlast q ist der Querkraftverlauf linear (Q(x)=Q₀−q·x) und der Momentenverlauf parabelförmig (M(x)=M₀+Q₀·x−q·x²/2) — die Stelle maximalen Moments liegt genau dort, wo Q(x)=0 wird.",
        ],
      },
      {
        id: "6-3",
        heading: "6.3 Sprünge und Knicke in den Schnittgrößenverläufen",
        body: [
          "Die Differentialbeziehungen dQ/dx=−q(x) und dM/dx=Q(x) aus 6.2 gelten dort, wo die Belastung stetig verläuft. An Stellen, an denen sich der Belastungstyp qualitativ ändert — eine Einzelkraft, ein Einzelmoment oder ein sprunghafter Wechsel der Streckenlast — erzeugen diese Beziehungen charakteristische, gut vorhersagbare Unstetigkeiten in den Q- und M-Verläufen.",
          "An einer Stelle mit angreifender Einzelkraft F macht die Querkraft Q einen Sprung der Höhe F in Kraftrichtung, da die Kraft dort schlagartig ins Gleichgewicht des freigeschnittenen Teilstücks eintritt. Das Biegemoment M selbst bleibt an dieser Stelle stetig (kein Sprung), hat dort aber einen Knick — einen Sprung in seiner Steigung —, da sich dM/dx=Q sprunghaft ändert. An einer Stelle mit angreifendem Einzelmoment M0 verhält es sich umgekehrt: Das Biegemoment M springt um M0, während die Querkraft Q dort unverändert (stetig) bleibt, weil ein reines Moment keine Kraft in das Gleichgewicht einträgt.",
          "Innerhalb eines Bereichs mit konstanter Streckenlast q ist Q linear und M parabelförmig (siehe 6.2); wechselt q selbst sprunghaft (z. B. von q=0 auf einen konstanten Wert), bleibt Q an dieser Stelle stetig, macht aber einen Knick, da sich die Steigung dQ/dx=−q sprunghaft ändert. Diese drei Regeln erlauben es, aus einem gegebenen Q- oder M-Verlauf direkt auf die Art der zugrunde liegenden Belastung zurückzuschließen, ohne die Herleitung erneut durchzuführen.",
        ],
        formulas: ["ΔQ = F  (Sprung in Q bei Einzelkraft F)", "ΔM = M0  (Sprung in M bei Einzelmoment M0)"],
        formulasLatex: ["\\Delta Q = F", "\\Delta M = M_0"],
        terms: [
          { term: "Sprung (in Q oder M)", definition: "Unstetigkeitsstelle im Funktionswert eines Schnittgrößenverlaufs, verursacht durch eine dort angreifende Einzelkraft (Sprung in Q) oder ein Einzelmoment (Sprung in M)." },
          { term: "Knick (in Q oder M)", definition: "Stelle mit unstetiger erster Ableitung bei stetigem Funktionswert, verursacht durch eine Einzelkraft (Knick in M) oder einen sprunghaften Streckenlastwechsel (Knick in Q)." },
        ],
        examples: [
          "Ein Kragarm der Länge 4 m trägt bei x=1 m eine Einzelkraft F=10 kN nach unten und bei x=3 m ein aufgebrachtes Einzelmoment M0=5 kNm. Der Querkraftverlauf springt bei x=1 m um ΔQ=10 kN und bleibt sonst (mangels Streckenlast) stückweise konstant. Der Momentenverlauf hat bei x=1 m einen Knick (Steigungswechsel entsprechend der neuen Querkraft) und bei x=3 m einen Sprung um ΔM=5 kNm, bleibt aber bei x=1 m selbst stetig.",
        ],
      },
      {
        id: "6-4",
        heading: "6.4 Bestimmung linearer Streckenlastfunktionen aus zwei Punkten",
        body: [
          "Nicht jede Streckenlast ist konstant: Hydrostatischer Druck auf eine Wand oder Windlast auf ein Bauteil wachsen häufig linear mit der Höhe. Um die Differentialbeziehungen aus 6.2/6.3 anzuwenden, wird die explizite Funktionsgleichung q(x)=a·x+b benötigt — dieselbe Aufgabe wie das Bestimmen einer Geraden durch zwei gegebene Punkte, hier angewandt auf die Streckenlast statt auf eine gewöhnliche y=f(x)-Funktion.",
          "Sind zwei Punkte (x1,q1) und (x2,q2) der Streckenlast bekannt (üblicherweise die Werte an den beiden Enden des betrachteten Balkenabschnitts), ergibt sich die Steigung als a = (q2−q1)/(x2−x1) und anschließend der Achsenabschnitt durch Einsetzen eines der beiden Punkte: b = q1 − a·x1.",
          "Ist q(x) explizit bekannt, lässt sich daraus nicht nur der Q- und M-Verlauf durch Integration gewinnen (6.2), sondern auch die resultierende Gesamtkraft direkt als Fläche unter der q(x)-Geraden bestimmen — bei linearer Streckenlast ein Trapez, dessen Fläche und Schwerpunktlage sich für die Ersatzlast in Gleichgewichtsbetrachtungen (Kapitel 3) nutzen lassen.",
        ],
        formulas: ["a = (q2 − q1) / (x2 − x1)", "b = q1 − a · x1"],
        formulasLatex: ["a = \\dfrac{q_2-q_1}{x_2-x_1}", "b = q_1 - a\\cdot x_1"],
        terms: [
          { term: "Lineare Streckenlast", definition: "Streckenlast, deren Intensität sich linear entlang der Balkenachse ändert, q(x)=a·x+b." },
        ],
        examples: [
          "An einem Balkenabschnitt ist q(0)=2 kN/m und q(5)=12 kN/m bekannt (x in Metern). Die Steigung beträgt a=(12−2)/(5−0)=2, der Achsenabschnitt b=2−2·0=2, also q(x)=2x+2. Probe bei x=5: 2·5+2=12 ✓. Die resultierende Gesamtkraft entspricht der Trapezfläche (q(0)+q(5))/2·5 = (2+12)/2·5 = 35 kN.",
        ],
      },
    ],
  },
  // ==================== Kapitel 7 ====================
  {
    id: "spannungen-dehnungen-hooke",
    number: 7,
    title: "Spannungen, Dehnungen und das Hookesche Gesetz",
    free: false,
    intro:
      "Während die Statik nur äußere Kräfte und Momente bilanziert, untersucht die Festigkeitslehre, wie stark ein Material dadurch tatsächlich beansprucht wird. Dieses Kapitel führt die Grundgrößen Spannung und Dehnung ein.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Normalspannung und die Beziehung zur Normalkraft",
        body: [
          "Die Normalspannung σ = N/A misst die auf die Querschnittsfläche A bezogene Normalkraft N — sie gibt an, wie stark das Material pro Flächeneinheit beansprucht wird, unabhängig von der absoluten Größe des Bauteils. Diese Flächenbezogenheit erklärt, warum zwei Bauteile mit identischer Kraft, aber unterschiedlichem Querschnitt, völlig unterschiedlich stark beansprucht sein können.",
          "Die zulässige Spannung eines Materials (bestimmt durch dessen Festigkeit, dividiert durch einen Sicherheitsfaktor) ist der zentrale Vergleichsmaßstab jeder Dimensionierungsaufgabe: Ein Bauteil ist sicher ausgelegt, solange die tatsächlich auftretende Spannung σ die zulässige Spannung σ_zul nicht überschreitet.",
        ],
        formulas: ["σ = N / A"],
        formulasLatex: ["\\sigma = \\dfrac{N}{A}"],
        terms: [{ term: "Normalspannung (σ)", definition: "Auf die Querschnittsfläche bezogene Normalkraft; Maß für die Materialbeanspruchung." }],
        examples: [
          "Ein Stahlseil mit Querschnittsfläche 50mm² trägt eine Zugkraft von 10.000N. Die Normalspannung beträgt σ=10.000N/50mm²=200N/mm²=200MPa.",
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Dehnung und das Hookesche Gesetz",
        body: [
          "Die (technische) Dehnung ε = ΔL/L₀ misst die relative Längenänderung eines belasteten Bauteils bezogen auf seine Ausgangslänge L₀. Im linear-elastischen Bereich (bei nicht zu großer Beanspruchung) gilt das Hookesche Gesetz: σ = E · ε, wobei E der Elastizitätsmodul ist, eine materialspezifische Konstante, die die Steifigkeit des Materials beschreibt.",
          "Kombiniert man beide Beziehungen, ergibt sich die praktisch wichtige Formel für die Längenänderung: ΔL = N·L₀/(E·A) — die Grundlage jeder Verformungsberechnung von Zug-/Druckstäben.",
        ],
        formulas: ["σ = E · ε", "ΔL = N · L₀ / (E · A)"],
        formulasLatex: ["\\sigma = E \\cdot \\varepsilon", "\\Delta L = \\dfrac{N \\cdot L_0}{E \\cdot A}"],
        terms: [
          { term: "Elastizitätsmodul (E)", definition: "Materialkonstante, die den linearen Zusammenhang zwischen Spannung und Dehnung im elastischen Bereich beschreibt." },
          { term: "Hookesches Gesetz", definition: "σ=E·ε; linearer Zusammenhang zwischen Spannung und Dehnung im elastischen Bereich." },
        ],
        examples: [
          "Ein Stahlstab (E=210.000N/mm²) mit Länge L₀=2m und Querschnitt A=100mm² wird mit N=50.000N belastet. Die Längenänderung beträgt ΔL=50.000×2000/(210.000×100)≈4,76mm.",
        ],
      },
      {
        id: "7-3",
        heading: "7.3 Querkontraktion und die Poissonzahl",
        body: [
          "Wird ein Stab in Längsrichtung gedehnt, zieht er sich gleichzeitig in Querrichtung zusammen (Querkontraktion) — ein Effekt, den das einfache eindimensionale Hookesche Gesetz nicht erfasst. Das Verhältnis aus Querdehnung und Längsdehnung heißt Poissonzahl ν = −ε_quer/ε_längs und liegt für die meisten Metalle zwischen 0,25 und 0,35.",
          "Die Poissonzahl wird insbesondere relevant, wenn Spannungen in mehreren Richtungen gleichzeitig auftreten (mehrachsiger Spannungszustand, siehe Kapitel 11) — im einfachen einachsigen Fall genügt meist das Hookesche Gesetz allein.",
        ],
        formulas: ["ν = −ε_quer / ε_längs"],
        formulasLatex: ["\\nu = -\\dfrac{\\varepsilon_{quer}}{\\varepsilon_{l\\ddot{a}ngs}}"],
        terms: [{ term: "Poissonzahl (ν)", definition: "Verhältnis von Querkontraktion zu Längsdehnung bei einachsiger Belastung." }],
        examples: [
          "Bei ν=0,3 und einer Längsdehnung von ε_längs=0,002 (0,2%) beträgt die Querdehnung ε_quer=−0,3×0,002=−0,0006 — der Stab wird also gleichzeitig um 0,06% dünner, während er sich längt.",
        ],
      },
      {
        id: "7-4",
        heading: "7.4 Schubspannung τ und das vollständige Bild von σ, τ und ε",
        body: [
          "Die Normalspannung σ=N/A aus 7.1 und die Dehnung ε=ΔL/L₀ mit dem Hookeschen Gesetz σ=E·ε aus 7.2 erfassen ausschließlich Beanspruchungen SENKRECHT zur betrachteten Schnittfläche. Wirkt zusätzlich eine Querkraft Q (Kapitel 6), entsteht eine tangential — also PARALLEL zur Schnittfläche — wirkende Beanspruchung: die Schubspannung τ = Q/A. Diese Formel liefert einen über den Querschnitt gemittelten Wert; die tatsächliche Verteilung von τ ist bei den meisten Querschnittsformen nicht konstant (bei einem Rechteckquerschnitt z. B. parabelförmig mit Maximum in der neutralen Faser), was für überschlägige Nachweise aber meist zweitrangig ist.",
          "Analog zum Hookeschen Gesetz für Normalspannungen existiert ein lineares Materialgesetz für Schub: τ = G·γ, wobei G der Schubmodul (die Steifigkeit gegenüber Schubbeanspruchung) und γ der Gleitwinkel ist — die Winkeländerung eines ursprünglich rechten Winkels im Material, das tangentiale Gegenstück zur Dehnung ε. Schubmodul G, Elastizitätsmodul E und Poissonzahl ν (7.3) sind nicht unabhängig voneinander, sondern über G = E/(2·(1+ν)) verknüpft — bei bekanntem E und ν lässt sich G also stets direkt berechnen, ohne eigene Materialversuche.",
          "Damit ergibt sich ein vollständiges, zweigeteiltes Bild der Materialbeanspruchung: Normalspannung σ und Dehnung ε, verknüpft über E, beschreiben die Reaktion auf Kräfte senkrecht zur Schnittfläche; Schubspannung τ und Gleitwinkel γ, verknüpft über G, beschreiben die Reaktion auf Kräfte parallel zur Schnittfläche. Beide Beanspruchungsarten treten in realen Bauteilen meist gleichzeitig auf und werden im mehrachsigen Spannungszustand (Kapitel 11) gemeinsam betrachtet.",
        ],
        formulas: ["τ = Q / A  (mittlere Schubspannung)", "τ = G · γ  (Hookesches Gesetz für Schub)", "G = E / (2·(1+ν))"],
        formulasLatex: ["\\tau = \\dfrac{Q}{A}", "\\tau = G \\cdot \\gamma", "G = \\dfrac{E}{2(1+\\nu)}"],
        terms: [
          { term: "Schubspannung (τ)", definition: "Auf die Querschnittsfläche bezogene, tangential (parallel zur Schnittfläche) wirkende Kraft; entsteht durch die Querkraft Q." },
          { term: "Schubmodul (G)", definition: "Materialkonstante, die den linearen Zusammenhang zwischen Schubspannung und Gleitwinkel beschreibt — das Analogon zu E bei Normalspannung." },
          { term: "Gleitwinkel (γ)", definition: "Winkeländerung eines ursprünglich rechten Winkels infolge einer Schubbeanspruchung; das Analogon zur Dehnung ε bei Normalbeanspruchung." },
        ],
        examples: [
          "Ein Bauteil mit Querschnittsfläche A=80mm² wird von einer Querkraft Q=1.600N belastet. Die mittlere Schubspannung beträgt τ=1.600N/80mm²=20N/mm²=20MPa. Für einen Werkstoff mit E=210.000N/mm² und ν=0,3 beträgt der Schubmodul G=210.000/(2·1,3)≈80.769N/mm² — mit τ=G·γ ergibt sich daraus ein Gleitwinkel γ=τ/G=20/80.769≈2,48×10⁻⁴ rad.",
        ],
      },
    ],
  },
  // ==================== Kapitel 8 ====================
  {
    id: "flaechentraegheitsmoment-steiner",
    number: 8,
    title: "Flächenträgheitsmoment und der Satz von Steiner",
    free: false,
    intro:
      "Wie stark sich ein Balken unter Biegebelastung verformt, hängt nicht nur von der Querschnittsfläche, sondern maßgeblich von deren geometrischer Verteilung ab. Dieses Kapitel führt das Flächenträgheitsmoment als zentrale Querschnittskenngröße ein.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Das axiale Flächenträgheitsmoment",
        body: [
          "Das axiale Flächenträgheitsmoment Iₓ = ∫y² dA misst, wie stark eine Querschnittsfläche von der betrachteten Biegeachse entfernt verteilt ist — Material weit von der Achse entfernt trägt überproportional (quadratisch) stärker zu Iₓ bei als Material nahe der Achse. Ein größeres Flächenträgheitsmoment bedeutet höhere Biegesteifigkeit bei gleicher Querschnittsfläche.",
          "Für einen Rechteckquerschnitt (Breite b, Höhe h) um die horizontale Schwerachse gilt die geschlossene Formel Iₓ = b·h³/12 — die kubische Abhängigkeit von der Höhe erklärt, warum Balken 'hochkant' deutlich steifer sind als 'flach liegend', bei identischer Querschnittsfläche.",
        ],
        formulas: ["Iₓ = b · h³ / 12 (Rechteck)"],
        formulasLatex: ["I_x = \\dfrac{b \\cdot h^{3}}{12}"],
        terms: [{ term: "Axiales Flächenträgheitsmoment", definition: "Maß für die geometrische Verteilung einer Querschnittsfläche relativ zu einer Biegeachse." }],
        examples: [
          "Ein Rechteckbalken mit b=10cm, h=20cm besitzt Iₓ=10×20³/12=6667cm⁴. Würde man denselben Balken um 90° drehen (b=20cm, h=10cm, gleiche Fläche), sänke Iₓ auf 20×10³/12=1667cm⁴ — deutlich weniger biegesteif.",
        ],
      },
      {
        id: "8-2",
        heading: "8.2 Der Satz von Steiner (Parallelachsensatz)",
        body: [
          "Der Satz von Steiner erlaubt es, das Flächenträgheitsmoment bezüglich einer beliebigen, zur Schwerachse parallelen Achse zu berechnen, ohne das Integral neu auszuwerten: I = I_S + A·d², wobei I_S das Flächenträgheitsmoment bezüglich der Schwerachse, A die Querschnittsfläche und d der Abstand zwischen Schwerachse und der neuen Bezugsachse ist.",
          "Dieser Satz ist unverzichtbar bei zusammengesetzten Querschnitten (z. B. I-Profile, T-Profile): Man berechnet zunächst das Flächenträgheitsmoment jedes Teilquerschnitts um seine eigene Schwerachse und transformiert anschließend mit dem Satz von Steiner auf die gemeinsame Schwerachse des Gesamtquerschnitts.",
        ],
        formulas: ["I = I_S + A · d²"],
        formulasLatex: ["I = I_S + A \\cdot d^{2}"],
        terms: [{ term: "Satz von Steiner", definition: "Transformationsregel für Flächenträgheitsmomente zwischen parallelen Achsen: I=I_S+A·d²." }],
        examples: [
          "Ein Rechteckquerschnitt mit I_S=6667cm⁴ (bezüglich der eigenen Schwerachse) und A=200cm² soll bezüglich einer 5cm entfernten parallelen Achse berechnet werden: I=6667+200×5²=6667+5000=11667cm⁴.",
        ],
      },
      {
        id: "8-3",
        heading: "8.3 Zusammengesetzte Querschnitte",
        body: [
          "Bei zusammengesetzten Querschnitten (z. B. einem I-Profil aus Steg und zwei Flanschen) wird das Gesamtflächenträgheitsmoment durch Aufsummieren der (jeweils mit Steiner transformierten) Einzelmomente aller Teilflächen berechnet: I_gesamt = Σᵢ (I_S,ᵢ + Aᵢ·dᵢ²). Zuvor muss die gemeinsame Schwerachse des Gesamtquerschnitts bestimmt werden, üblicherweise über das statische Moment jeder Teilfläche.",
          "Diese Vorgehensweise erklärt, warum I-Profile bei vergleichsweise geringem Materialeinsatz (Gewicht) eine besonders hohe Biegesteifigkeit erreichen: Das meiste Material wird in den Flanschen weit von der Schwerachse entfernt platziert, wo es überproportional zum Flächenträgheitsmoment beiträgt.",
        ],
        terms: [{ term: "Statisches Moment", definition: "Hilfsgröße zur Bestimmung der Schwerachse eines zusammengesetzten Querschnitts, S=Σ Aᵢ·yᵢ." }],
        examples: [
          "Ein I-Profil konzentriert den Großteil seiner Querschnittsfläche in den oberen und unteren Flanschen (weit von der Schwerachse entfernt), während der verbindende Steg vergleichsweise dünn ist — dadurch wird bei gegebenem Materialverbrauch ein maximales Flächenträgheitsmoment erreicht.",
        ],
      },
    ],
  },
  // ==================== Kapitel 9 ====================
  {
    id: "gerade-biegung-biegelinie",
    number: 9,
    title: "Gerade Biegung und die Biegelinie",
    free: false,
    intro:
      "Balken unter Querlast erfahren Biegung — die häufigste Beanspruchungsart im Bauwesen und Maschinenbau. Dieses Kapitel behandelt die Berechnung von Biegespannungen und der Durchbiegung.",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Die Biegespannungsformel",
        body: [
          "Bei gerader Biegung verteilt sich die Normalspannung linear über die Querschnittshöhe: σ(y) = M·y/I, wobei M das Biegemoment an der betrachteten Stelle, y der Abstand von der neutralen Faser (Schwerachse, an der σ=0 gilt) und I das Flächenträgheitsmoment ist. Die maximale Spannung tritt am Rand des Querschnitts auf, wo |y| maximal wird.",
          "Diese lineare Spannungsverteilung bedeutet: Material nahe der neutralen Faser trägt kaum zur Biegetragfähigkeit bei, während Material am Rand maximal beansprucht wird — eine direkte Erklärung dafür, warum I-Profile (die Material gezielt an den Rand verlagern, Kapitel 8) bei Biegebeanspruchung besonders materialeffizient sind.",
        ],
        formulas: ["σ(y) = M · y / I"],
        formulasLatex: ["\\sigma(y) = \\dfrac{M \\cdot y}{I}"],
        terms: [{ term: "Neutrale Faser", definition: "Schicht im Balkenquerschnitt, die bei Biegung weder gedehnt noch gestaucht wird (σ=0)." }],
        examples: [
          "Ein Balken mit Biegemoment M=5000Nm und Flächenträgheitsmoment I=6667cm⁴ hat am Querschnittsrand (y=10cm) eine Biegespannung von σ=5000×0,1/(6667×10⁻⁸)≈75MPa.",
        ],
      },
      {
        id: "9-2",
        heading: "9.2 Das Widerstandsmoment",
        body: [
          "Das Widerstandsmoment W = I/y_max fasst Flächenträgheitsmoment und maximalen Randabstand zu einer einzigen Querschnittskenngröße zusammen, die direkt die maximale Biegespannung liefert: σ_max = M/W. Diese Größe erlaubt einen direkten Vergleich der Biegetragfähigkeit unterschiedlicher Querschnittsformen ohne Umweg über I und y_max getrennt.",
          "Bei der Dimensionierung eines Balkens für ein gegebenes maximales Biegemoment und eine zulässige Spannung lässt sich das erforderliche Mindest-Widerstandsmoment direkt berechnen: W_erf = M_max/σ_zul — die praktische Grundlage jeder Balkendimensionierung.",
        ],
        formulas: ["W = I / y_max", "σ_max = M / W"],
        formulasLatex: ["W = \\dfrac{I}{y_{max}}", "\\sigma_{max} = \\dfrac{M}{W}"],
        terms: [{ term: "Widerstandsmoment (W)", definition: "Kenngröße W=I/y_max, die direkt die maximale Biegespannung eines Querschnitts liefert." }],
        examples: [
          "Für ein maximal zulässiges Biegemoment von 8000Nm und eine zulässige Spannung von 160MPa ergibt sich ein erforderliches Widerstandsmoment W_erf=8000/(160×10⁶)=50×10⁻⁶m³=50cm³.",
        ],
      },
      {
        id: "9-3",
        heading: "9.3 Die Differentialgleichung der Biegelinie",
        body: [
          "Die Durchbiegung w(x) eines Balkens unter Biegebelastung folgt der Differentialgleichung der Biegelinie: E·I·w''(x) = −M(x), wobei E der Elastizitätsmodul, I das Flächenträgheitsmoment und M(x) der Biegemomentenverlauf ist. Zweifache Integration liefert die Durchbiegung, wobei die Integrationskonstanten aus den Randbedingungen (z. B. w=0 an einem Festlager, w'=0 an einer Einspannung) bestimmt werden.",
          "Diese Differentialgleichung verknüpft die in Kapitel 6 behandelten Schnittgrößen direkt mit der tatsächlichen Verformung des Balkens — sie ist der zentrale Baustein, um bei statisch unbestimmten Systemen (Kapitel 10) zusätzliche Verformungsbedingungen als Ergänzung zu den reinen Gleichgewichtsbedingungen heranzuziehen.",
        ],
        formulas: ["E · I · w''(x) = −M(x)"],
        formulasLatex: ["E \\cdot I \\cdot w''(x) = -M(x)"],
        terms: [{ term: "Biegelinie", definition: "Funktion w(x), die die Durchbiegung eines Balkens entlang seiner Länge beschreibt." }],
        examples: [
          "Für einen beidseitig gelenkig gelagerten Balken mit mittiger Einzellast F ergibt zweifache Integration der Biegelinie eine maximale Durchbiegung in Balkenmitte von w_max = F·L³/(48·E·I).",
        ],
      },
      {
        id: "9-4",
        heading: "9.4 Randbedingungen der Biegelinie",
        body: [
          "Die Differentialgleichung w''(x) = −M(x)/(E·I) aus 9.3 liefert nach zweifacher Integration pro Balkenabschnitt zwei Integrationskonstanten, die erst durch Randbedingungen — an den Rändern oder Übergängen bekannte Werte von Durchbiegung w oder Neigung w' — eindeutig bestimmt werden. Welche Bedingung an welcher Stelle gilt, hängt direkt von der jeweiligen Lagerart (3.2) ab.",
          "An einem gelenkigen Lager (Fest- oder Loslager) ist die Durchbiegung unterdrückt, aber die Verdrehung frei: w=0, während w' unbekannt bleibt und sich erst aus der Gesamtlösung ergibt. An einer festen Einspannung sind sowohl Durchbiegung als auch Neigung unterdrückt: w=0 UND w'=0. An einem freien, unbelasteten Ende sind weder w noch w' bekannt, dafür verschwinden dort Moment und Querkraft: M=0 (also w''=0) und Q=0 (also w'''=0). An einem Zwischengelenk (Kapitel 10) gilt ebenfalls M=0, zusätzlich muss die Durchbiegung w auf beiden Seiten des Gelenks übereinstimmen (Kontinuität), während die Neigung w' beidseitig unterschiedlich sein darf — ein Knick in der Biegelinie ist an einem Gelenk zulässig, da dort ohnehin kein Moment übertragen wird.",
        ],
        table: {
          caption: "Randbedingungen der Biegelinie nach Lagerart",
          headers: ["Lagerart", "w", "w'", "Sonstiges"],
          rows: [
            ["Gelenkiges Lager (Fest-/Loslager)", "0", "frei (unbekannt)", "—"],
            ["Feste Einspannung", "0", "0", "—"],
            ["Freies Ende", "frei", "frei", "M=0, Q=0"],
            ["Zwischengelenk", "stetig (beidseitig gleich)", "darf springen (Knick erlaubt)", "M=0"],
          ],
        },
        formulas: ["w_max = F · L³ / (3 · E · I)  (Kragarm mit Einzellast am freien Ende)"],
        formulasLatex: ["w_{max} = \\dfrac{F\\cdot L^{3}}{3\\cdot E\\cdot I}"],
        terms: [
          { term: "Randbedingung (gelenkiges Lager)", definition: "w=0; die Neigung w' bleibt am Lager unbestimmt und ergibt sich aus der Gesamtlösung." },
          { term: "Randbedingung (feste Einspannung)", definition: "w=0 UND w'=0; weder Durchbiegung noch Neigung sind an der Einspannung möglich." },
          { term: "Randbedingung (freies Ende)", definition: "M=0 und Q=0; w und w' sind am freien Ende dagegen unbekannt." },
          { term: "Randbedingung (Zwischengelenk)", definition: "M=0 an der Gelenkstelle; w ist beidseitig gleich (Kontinuität), w' darf beidseitig unterschiedlich sein (Knick zulässig)." },
        ],
        examples: [
          "Für einen Kragarm (Einspannung bei x=0, freies Ende bei x=L) mit Einzellast F am freien Ende lautet der Momentenverlauf M(x)=−F·(L−x). Zweifache Integration von E·I·w''=−M(x) mit den Randbedingungen w(0)=0 und w'(0)=0 an der Einspannung (statt der Symmetriebedingung des beidseitig gelagerten Balkens aus 9.3) liefert eine maximale Durchbiegung am freien Ende von w_max=F·L³/(3·E·I) — bei gleichem F und L etwa 16-mal größer als beim beidseitig gelenkig gelagerten Balken aus 9.3 (F·L³/(48·E·I)), weil die Einspannung die Verformung nur an einem statt an zwei Enden begrenzt.",
        ],
      },
    ],
  },
  // ==================== Kapitel 10 ====================
  {
    id: "mehrteilige-tragwerke-gelenkbalken",
    number: 10,
    title: "Mehrteilige Tragwerke und der Gelenkbalken",
    free: false,
    intro:
      "Nicht jedes Tragwerk lässt sich als einzelner starrer Körper behandeln. Dieses Kapitel behandelt mehrteilige Systeme, bei denen Zwischengelenke zusätzliche Freischnitte und Gleichgewichtsbetrachtungen erfordern.",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Zwischengelenke und ihre Eigenschaften",
        body: [
          "Ein Zwischengelenk verbindet zwei Teilkörper eines Tragwerks so, dass an dieser Stelle keine Momente übertragen werden können (M=0 am Gelenk), während Normal- und Querkräfte weiterhin übertragen werden. Ein Gelenkbalken besteht aus mehreren, durch solche Gelenke verbundenen Balkenabschnitten.",
          "Jedes Zwischengelenk liefert eine zusätzliche Gleichung (M=0 an dieser Stelle), die zu den drei allgemeinen Gleichgewichtsbedingungen hinzukommt — dies ist notwendig, weil ein Gelenkbalken mit z Zwischengelenken entsprechend mehr unbekannte Lagerreaktionen aufweisen darf, ohne statisch unbestimmt zu werden.",
        ],
        formulas: ["r = 3 + z (statische Bestimmtheit bei z Zwischengelenken)"],
        formulasLatex: ["r = 3 + z"],
        terms: [{ term: "Zwischengelenk", definition: "Verbindungsstelle zwischen zwei Teilkörpern eines Tragwerks, an der kein Moment übertragen wird." }],
        examples: [
          "Ein Gelenkbalken mit einem Zwischengelenk (z=1) kann statisch bestimmt bis zu r=3+1=4 unbekannte Lagerreaktionen aufweisen, statt nur 3 wie bei einem einteiligen Balken.",
        ],
      },
      {
        id: "10-2",
        heading: "10.2 Berechnung mehrteiliger Systeme durch Freischneiden",
        body: [
          "Um ein mehrteiliges Tragwerk zu berechnen, wird es an jedem Zwischengelenk gedanklich getrennt (Freischneiden), wobei an der Trennstelle die (zunächst unbekannten) Gelenkkräfte (Normal- und Querkraft, aber kein Moment) als äußere Kräfte auf beide Teilkörper eingeführt werden — nach dem Reaktionsprinzip (Kapitel 1) mit gleichem Betrag, aber entgegengesetzter Richtung auf beiden Seiten.",
          "Für jeden der so entstandenen Teilkörper werden anschließend separat die drei Gleichgewichtsbedingungen aufgestellt. Das Gesamtsystem aus allen Teilgleichungen wird dann gemeinsam gelöst, um sowohl die äußeren Lagerreaktionen als auch die inneren Gelenkkräfte zu bestimmen.",
        ],
        terms: [{ term: "Freischneiden", definition: "Gedankliches Trennen eines Tragwerks an Verbindungsstellen unter Einführung der dort wirkenden inneren Kräfte als äußere Kräfte." }],
        examples: [
          "Ein aus zwei Balkenabschnitten mit einem Zwischengelenk bestehendes System wird am Gelenk in zwei Teilkörper zerlegt; für jeden Teilkörper werden die drei Gleichgewichtsbedingungen aufgestellt, wobei die am Gelenk übertragenen Kräfte für beide Teilkörper als gleich groß, aber entgegengesetzt gerichtet angesetzt werden.",
        ],
      },
    ],
  },
  // ==================== Kapitel 11 ====================
  {
    id: "mehrachsiger-spannungszustand-mohr",
    number: 11,
    title: "Exkurs: Mehrachsiger Spannungszustand und der Mohrsche Spannungskreis",
    free: false,
    intro:
      "Reale Bauteile sind oft nicht nur einachsig, sondern gleichzeitig in mehreren Richtungen beansprucht. Dieser Exkurs behandelt, wie sich solche komplexeren Spannungszustände systematisch analysieren lassen.",
    sections: [
      {
        id: "11-1",
        heading: "11.1 Der ebene Spannungszustand",
        body: [
          "Im ebenen Spannungszustand wirken an einem Materialpunkt gleichzeitig Normalspannungen σₓ, σy in zwei senkrechten Richtungen sowie eine Schubspannung τₓy. Dreht man den betrachteten Schnitt um einen Winkel φ, ändern sich die auf diesem gedrehten Schnitt wirkenden Spannungskomponenten nach den Transformationsformeln der ebenen Spannungstransformation.",
          "Diese Transformation ist praktisch bedeutsam, weil Materialversagen oft nicht in der ursprünglich betrachteten Schnittrichtung, sondern in einer anderen, kritischeren Richtung auftritt (z. B. Sprödbruch senkrecht zur größten Hauptspannung) — die Kenntnis aller möglichen Schnittrichtungen ist daher für eine vollständige Festigkeitsbeurteilung nötig.",
        ],
        terms: [{ term: "Ebener Spannungszustand", definition: "Spannungszustand mit zwei Normalspannungen und einer Schubspannung in einer Ebene." }],
        examples: [
          "Ein dünnwandiger Druckbehälter erfährt gleichzeitig eine Umfangsspannung und eine axiale Längsspannung — ein klassisches Beispiel eines ebenen Spannungszustands, bei dem beide Normalspannungen gleichzeitig berücksichtigt werden müssen.",
        ],
      },
      {
        id: "11-2",
        heading: "11.2 Hauptspannungen",
        body: [
          "Für jeden ebenen Spannungszustand existiert eine ausgezeichnete Schnittrichtung (Hauptrichtung), in der die Schubspannung verschwindet und die Normalspannungen ihre Extremwerte (Hauptspannungen σ₁, σ₂) annehmen. Diese lassen sich direkt berechnen: σ₁,₂ = (σₓ+σy)/2 ± √[((σₓ−σy)/2)² + τₓy²].",
          "Die Hauptspannungen sind materialunabhängig die relevanten Vergleichsgrößen für Festigkeitshypothesen (z. B. Vergleichsspannung nach von Mises oder Tresca), da sie den tatsächlich kritischsten Beanspruchungszustand unabhängig von der ursprünglich gewählten Schnittrichtung erfassen.",
        ],
        formulas: ["σ₁,₂ = (σₓ+σy)/2 ± √[((σₓ−σy)/2)² + τₓy²]"],
        formulasLatex: ["\\sigma_{1,2} = \\dfrac{\\sigma_x+\\sigma_y}{2} \\pm \\sqrt{\\left(\\dfrac{\\sigma_x-\\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}"],
        terms: [{ term: "Hauptspannungen", definition: "Extremwerte der Normalspannung in den Schnittrichtungen, in denen die Schubspannung verschwindet." }],
        examples: [
          "Für σₓ=80MPa, σy=20MPa, τₓy=30MPa ergibt sich σ₁,₂ = 50 ± √(30²+30²) = 50 ± 42,4, also σ₁≈92,4MPa und σ₂≈7,6MPa.",
        ],
      },
      {
        id: "11-3",
        heading: "11.3 Der Mohrsche Spannungskreis",
        body: [
          "Der Mohrsche Spannungskreis stellt alle möglichen Spannungszustände eines Punktes (für alle Schnittrichtungen) als Kreis in einem σ-τ-Diagramm dar: Der Kreismittelpunkt liegt bei (σₓ+σy)/2, der Radius entspricht dem Wurzelausdruck aus der Hauptspannungsformel. Jeder Punkt auf dem Kreis entspricht den Spannungskomponenten (σ,τ) für eine bestimmte Schnittrichtung.",
          "Diese grafische Darstellung erlaubt es, Hauptspannungen, maximale Schubspannung und die Spannungen in beliebigen Schnittrichtungen ohne erneute Rechnung direkt am Kreis abzulesen — ein anschauliches und historisch wichtiges Werkzeug, das auch mit moderner Rechentechnik weiterhin zur Veranschaulichung genutzt wird.",
        ],
        terms: [{ term: "Mohrscher Spannungskreis", definition: "Grafische Darstellung aller möglichen Spannungszustände eines Punktes in Abhängigkeit von der Schnittrichtung." }],
        examples: [
          "Am Mohrschen Spannungskreis lässt sich die maximale Schubspannung direkt als Kreisradius ablesen: τ_max = (σ₁−σ₂)/2 — für das Beispiel aus 11.2 also τ_max=(92,4−7,6)/2≈42,4MPa.",
        ],
      },
    ],
  },
  // ==================== Kapitel 12 ====================
  {
    id: "knicken-euler",
    number: 12,
    title: "Exkurs: Knicken von Stäben nach Euler",
    free: false,
    intro:
      "Schlanke, druckbelastete Stäbe versagen nicht immer durch reines Materialversagen, sondern können vorher seitlich ausknicken. Dieser abschließende Exkurs behandelt die klassische Euler-Theorie des Knickens.",
    sections: [
      {
        id: "12-1",
        heading: "12.1 Das Phänomen des Knickens",
        body: [
          "Ein schlanker, axial druckbelasteter Stab kann bei Überschreiten einer kritischen Last plötzlich seitlich ausweichen (knicken), obwohl die reine Druckspannung σ=N/A noch deutlich unterhalb der Materialfestigkeit liegt. Dieses Versagen ist ein Stabilitätsproblem, kein reines Festigkeitsproblem: Es hängt primär von der Geometrie (Schlankheit) des Stabes ab, nicht nur von der Materialfestigkeit.",
          "Das Knicken ist besonders bei sehr schlanken Bauteilen (großes Verhältnis von Länge zu Querschnittsabmessung) kritisch, während gedrungene, kurze Druckstäbe eher durch reines Materialversagen (Fließen oder Bruch) statt durch Knicken versagen.",
        ],
        terms: [{ term: "Knicken", definition: "Stabilitätsversagen eines schlanken Druckstabes durch plötzliches seitliches Ausweichen bei Erreichen einer kritischen Last." }],
        examples: [
          "Ein dünner Zollstock, der axial zusammengedrückt wird, weicht bereits bei geringer Kraft seitlich aus (Knicken), lange bevor das Material selbst durch die Druckspannung beschädigt würde.",
        ],
      },
      {
        id: "12-2",
        heading: "12.2 Die Eulersche Knicklast",
        body: [
          "Für einen beidseitig gelenkig gelagerten Stab (Eulerfall 2) berechnet sich die kritische Knicklast als F_krit = π²·E·I / L², wobei E der Elastizitätsmodul, I das (kleinste) Flächenträgheitsmoment des Querschnitts und L die Stablänge ist. Diese Formel zeigt: Die Knicklast sinkt quadratisch mit zunehmender Stablänge — ein doppelt so langer Stab knickt bereits bei einem Viertel der ursprünglichen Last.",
          "Für andere Lagerungsbedingungen (z. B. beidseitig eingespannt, einseitig eingespannt und frei) ändert sich die Formel durch eine sogenannte Knicklängenbeiwert-Korrektur: F_krit = π²·E·I / (β·L)², wobei β von der jeweiligen Lagerungsart abhängt (z. B. β=0,5 für beidseitige Einspannung, β=2 für einseitige Einspannung mit freiem Ende).",
        ],
        table: {
          caption: "Die vier Eulerfälle",
          headers: ["Eulerfall", "Lagerung", "Knicklängenbeiwert β"],
          rows: [
            ["1", "einseitig eingespannt, freies Ende (Kragstab)", "2"],
            ["2", "beidseitig gelenkig gelagert", "1"],
            ["3", "einseitig eingespannt, andere Seite gelenkig geführt", "≈0,7"],
            ["4", "beidseitig eingespannt", "0,5"],
          ],
        },
        formulas: ["F_krit = π²·E·I / L² (Eulerfall 2)", "F_krit = π²·E·I / (β·L)² (allgemein)"],
        formulasLatex: ["F_{krit} = \\dfrac{\\pi^2 E I}{L^2}", "F_{krit} = \\dfrac{\\pi^2 E I}{(\\beta L)^2}"],
        terms: [
          { term: "Eulersche Knicklast", definition: "Kritische Druckkraft, bei deren Erreichen ein schlanker Stab auszuknicken beginnt." },
          { term: "Knicklängenbeiwert (β)", definition: "Korrekturfaktor der Euler-Formel, der die jeweilige Lagerungsart des Stabes berücksichtigt." },
        ],
        examples: [
          "Ein beidseitig gelenkig gelagerter Stahlstab (E=210.000N/mm², I=500cm⁴, L=2m) hat eine kritische Knicklast F_krit=π²×210.000×500×10⁴/(2000)²≈259.000N — deutlich weniger, als die reine Materialfestigkeit vermuten ließe.",
        ],
      },
      {
        id: "12-3",
        heading: "12.3 Der Schlankheitsgrad und Gültigkeitsgrenzen der Euler-Theorie",
        body: [
          "Der Schlankheitsgrad λ = L_k/i (mit Knicklänge L_k=β·L und Trägheitsradius i=√(I/A)) fasst Geometrie und Lagerung zu einer einzigen Vergleichszahl zusammen. Die Euler-Theorie gilt nur im Bereich elastischen Materialverhaltens, also oberhalb eines materialabhängigen Grenzschlankheitsgrads λ₀ — unterhalb dieser Grenze (gedrungene Stäbe) versagt das Material bereits durch plastisches Fließen, bevor die Euler-Knicklast erreicht wird, und andere Bemessungsansätze (z. B. nach Tetmajer) kommen zur Anwendung.",
          "Diese Einschränkung ist praktisch bedeutsam: Reine Euler-Rechnung auf gedrungene Stützen anzuwenden würde eine zu hohe zulässige Traglast liefern, da sie das frühere Materialversagen ignoriert — ein Grund, warum in der Baupraxis stets zunächst der Schlankheitsgrad geprüft wird, bevor die passende Bemessungsformel gewählt wird.",
        ],
        formulas: ["λ = L_k / i, i = √(I/A)"],
        formulasLatex: ["\\lambda = \\dfrac{L_k}{i}, \\quad i = \\sqrt{\\dfrac{I}{A}}"],
        terms: [{ term: "Schlankheitsgrad (λ)", definition: "Verhältnis aus Knicklänge und Trägheitsradius; entscheidet über Anwendbarkeit der Euler-Theorie." }],
        examples: [
          "Ein Stahlstab mit Schlankheitsgrad λ=150 (deutlich oberhalb des typischen Grenzwerts λ₀≈100 für Baustahl) liegt im Gültigkeitsbereich der elastischen Euler-Theorie; ein gedrungener Stab mit λ=40 müsste dagegen nach einem plastischen Knickansatz bemessen werden.",
        ],
      },
    ],
  },
];
