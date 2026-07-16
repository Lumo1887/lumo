import type { SkriptChapter } from "./types";

// Hinweis zur Kapitelreihenfolge: Dieses Skript führt Inhalte aus vier
// getrennten Vorlesungsteilen zusammen (Unternehmensführung, Entrepreneurship,
// Personalführung/HRM, Marketing). Die Reihenfolge und Nummerierung hier
// folgt bewusst NICHT der Reihenfolge irgendeines der vier Vorlesungsteile.
// Exkurs-/Bonusthemen (z. B. Trendradar & Kondratieff-Zyklen, die
// Schaubild-Kommunikation oder Design Thinking) sind zwischen die
// Kernkapitel gemischt statt als separater Block am Ende zu stehen, und die
// Nummerierung ist eigenständig. Cross-Referenzen im Text beziehen sich auf
// diese neue Reihenfolge.
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 ====================
  {
    id: "grundlagen-unternehmertum",
    number: 1,
    title: "Grundlagen: Was Unternehmer und Unternehmen leisten",
    free: true,
    intro:
      "Bevor es um einzelne Werkzeuge des Managements oder Marketings geht, lohnt sich ein Blick auf die Grundfrage: Was genau tun Unternehmerinnen und Unternehmer eigentlich, und warum lösen manche von ihnen ganze Branchen ab? Dieses Kapitel legt die begrifflichen Grundlagen, auf die alle folgenden Kapitel aufbauen.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Historische Wurzeln: Say und Schumpeter",
        body: [
          "Jean-Baptiste Say beschrieb 1803 den Unternehmer als jemanden, der wirtschaftliche Ressourcen aus einem Bereich geringerer in einen Bereich höherer Produktivität verlagert — er erkennt also, dass dieselben Mittel (Boden, Maschinen, Arbeitskraft) anderswo mehr Wert schaffen können.",
          "Über hundert Jahre später rückte Joseph Schumpeter (1911) einen anderen Aspekt in den Vordergrund: Unternehmertum bedeutet, neue Kombinationen von Produktionsfaktoren zu finden, die zu neuen Produkten, neuen Produktionsverfahren oder neuen Märkten führen. Jede solche Innovation verdrängt dabei bestehendes Marktverhalten — Schumpeter nannte dies 'schöpferische Zerstörung'.",
        ],
        terms: [
          {
            term: "Unternehmer (Say)",
            definition: "Person, die eine Möglichkeit erkennt, Ressourcen von einem Sektor geringerer in einen Sektor höherer Produktivität zu verlagern.",
          },
          {
            term: "Schöpferische Zerstörung (Schumpeter)",
            definition: "Der Prozess, bei dem neue Faktorenkombinationen (Innovationen) bestehende Produkte, Verfahren oder Geschäftsmodelle verdrängen.",
          },
        ],
        examples: [
          "Das Smartphone hat die klassischen Mobiltelefone verdrängt, der iPod/iTunes den bisherigen Markt für persönlichen Musikkonsum, betriebswirtschaftliche Standardsoftware die kundenspezifische Individualentwicklung — in jedem Fall gibt es Gewinner und Verlierer des Wandels.",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Statisches versus dynamisches Marktparadigma",
        body: [
          "Ein statisches Paradigma beschreibt eine Wirtschaft mit stabilen, gut eingespielten Geschäftsmodellen, in der Wettbewerb primär über Preis und Effizienz stattfindet und Veränderungen nur allmählich erfolgen. Ein dynamisches Paradigma sieht dagegen Ungleichgewicht und Störung als Normalzustand: Neue, innovative Unternehmen wachsen, alte Geschäftsmodelle schrumpfen, und der Wettbewerb basiert auf Innovation statt auf Preis.",
          "Clayton Christensen erklärte im 'Dilemma des Innovators', warum gerade gut geführte, kundenorientierte Marktführer von neuen Wettbewerbern überholt werden: Sie investieren offensiv in die Bedürfnisse ihrer aktuellen Topkunden — genau das lässt sie disruptive, zunächst unterlegene Technologien übersehen, die in Nischenmärkten heranreifen und irgendwann die Anforderungen des Massenmarkts übertreffen.",
        ],
        terms: [
          {
            term: "Dilemma des Innovators",
            definition: "Phänomen, bei dem etablierte, kundenorientierte Marktführer an disruptiven Innovationen scheitern, weil diese zunächst leistungsschwächer sind und nur in kleinen Nischenmärkten reifen, bevor sie den Massenmarkt überholen.",
          },
          {
            term: "Disruptive Innovation",
            definition: "Eine Innovation, die zunächst schlechtere Leistungswerte als etablierte Produkte bietet, sich aber schneller verbessert und irgendwann die Anforderungen des Massenmarkts übertrifft.",
          },
        ],
        examples: [
          "Kodak erfand 1975 selbst die erste Digitalkamera, hielt aber aus Rücksicht auf sein Filmrollen-Geschäft an der analogen Fotografie fest. Erst 2003 verkauften sich mehr Digital- als Filmkameras; 2012 meldete Kodak Insolvenz an.",
        ],
      },
      {
        id: "1-3",
        heading: "1.3 Die fünf Kernelemente von Entrepreneurship",
        body: [
          "Zusammengefasst lässt sich Entrepreneurship auf fünf Kernelemente zurückführen: eine Unternehmerin oder ein Unternehmer (bzw. ein Team), eine unternehmerische Gelegenheit, hinreichende Ressourcen, eine Form der Organisation und ein günstiges Umfeld. Entscheidend ist dabei immer eine Person oder ein Team, das Initiative ergreift und Verantwortung übernimmt — ohne diesen 'Nexus von Unternehmer und Gelegenheit' bleibt jede Idee folgenlos.",
        ],
        terms: [
          {
            term: "Nexus von Unternehmer und Gelegenheit",
            definition: "Das Zusammentreffen einer Person mit passenden Vorkenntnissen und kognitiven Fähigkeiten und einer objektiv vorhandenen Gelegenheit — erst dieses Zusammentreffen macht aus einer Gelegenheit ein Gründungsvorhaben.",
          },
        ],
      },
      {
        id: "1-4",
        heading: "1.4 Der richtige Moment: Kairos und Ikigai",
        body: [
          "Die alten Griechen unterschieden zwischen 'chronos' (der linear messbaren Zeit) und 'kairos' (dem günstigen, richtigen Augenblick). Kairos wird oft als Figur mit einem Haarschopf auf der Stirn, aber einer Glatze am Hinterkopf dargestellt: Man kann die Gelegenheit ergreifen, solange man vor ihr steht — ist sie einmal vorbeigegangen, lässt sie sich nicht mehr fassen.",
          "Ein verwandtes Konzept aus Japan ist das 'Ikigai': der Schnittpunkt aus dem, was man liebt, was man gut kann, was die Welt braucht, und wofür man bezahlt werden kann. Wer eine unternehmerische Gelegenheit sucht, sucht im Kern genau diesen Schnittpunkt.",
        ],
        terms: [
          {
            term: "Kairos",
            definition: "Der richtige, günstige Augenblick für eine Handlung — im Unterschied zu 'chronos', der linear ablaufenden, messbaren Zeit.",
          },
          {
            term: "Ikigai",
            definition: "Konzept, das den idealen Ausgangspunkt einer unternehmerischen Tätigkeit als Schnittmenge aus Leidenschaft, Fähigkeit, gesellschaftlichem Bedarf und Zahlungsbereitschaft beschreibt.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 2 ====================
  {
    id: "gruender-gelegenheiten",
    number: 2,
    title: "Gründerpersonen, Motive und unternehmerische Gelegenheiten",
    free: false,
    intro:
      "Wer gründet eigentlich, aus welchen Motiven, und wie erkennt man, ob eine Idee überhaupt eine tragfähige Gelegenheit ist? Dieses Kapitel verbindet empirische Befunde zur Gründerpersönlichkeit mit dem Handwerkszeug zur systematischen Trend- und Gelegenheitserkennung.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Wer gründet? Alter, Merkmale und Motive",
        body: [
          "Gründerinnen und Gründer sind im Schnitt etwa 38 Jahre alt; die Altersgruppe der 30- bis 39-Jährigen stellt mit gut 40 % den größten Anteil, während gut ein Fünftel der Gründungen von Frauen stammt (mit steigender Tendenz). Die meisten Gründerinnen und Gründer kommen aus wirtschaftswissenschaftlichen Studiengängen, gefolgt von den Ingenieurwissenschaften sowie Informatik/Mathematik.",
          "Empirisch korrelieren einige Persönlichkeitsmerkmale mit Gründung und Gründungserfolg — etwa Gewissenhaftigkeit, Leistungsbedürfnis, generelle Selbstwirksamkeit, Risikobereitschaft, Bedürfnis nach Autonomie und Ambiguitätstoleranz. Die Zusammenhänge sind aber nur von mittlerer Stärke: Persönlichkeit spielt eine Rolle, darf aber nicht überschätzt werden. Bei den Motiven unterscheiden sich angehende Unternehmerinnen und Unternehmer kaum von anderen Erwerbstätigen — außer bei Anerkennung und dem Nachahmen von Vorbildern/Familientraditionen, die ihnen deutlich weniger wichtig sind.",
        ],
        terms: [
          {
            term: "Selbstwirksamkeit",
            definition: "Die persönliche Einschätzung, wie gut man die Handlungsabläufe ausführen kann, die zur Bewältigung zukünftiger Situationen nötig sind (Bandura, 1982).",
          },
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Unternehmertum und Volkswirtschaft",
        body: [
          "Die OECD sieht Unternehmertum als Schlüssel zur Wirtschaftsleistung, insbesondere für den innovativen Strukturwandel. Empirisch findet sich zwischen Gründungsraten und Pro-Kopf-Einkommen bzw. Innovationsfähigkeit über viele Länder hinweg ein U-förmiger Zusammenhang: Sowohl sehr arme als auch sehr reiche Länder weisen relativ hohe Gründungsraten auf, wobei die positiven Effekte in entwickelten Volkswirtschaften stärker ausfallen. Unterscheidet man nach dem Motiv der Gründung, zeigt vor allem die Rate wachstumsorientierter (nicht notwendigkeitsgetriebener) Gründungen eine starke Korrelation mit dem Wirtschaftswachstum.",
          "Drei Gründe werden häufig genannt, warum Unternehmertum volkswirtschaftlich so bedeutsam ist: Es wandelt technisches Wissen in marktfähige Produkte und Dienstleistungen um, es deckt zeitliche und räumliche Ineffizienzen auf und mildert sie ab, und unternehmerisch getriebene Produkt- und Prozessinnovationen sind der zentrale Motor wirtschaftlichen Wandels (Shane & Venkataraman, 2000).",
        ],
        terms: [
          {
            term: "Notwendigkeitsgetriebene Gründung",
            definition: "Gründung aus Mangel an besseren Erwerbsalternativen (Necessity Entrepreneurship) — im Unterschied zur gelegenheits- oder wachstumsorientierten Gründung.",
          },
        ],
      },
      {
        id: "2-3",
        heading: "2.3 Die unternehmerische Gelegenheit erkennen und bewerten",
        body: [
          "Eine unternehmerische Gelegenheit ist ein zeitlich passendes und günstiges Zusammentreffen von Umständen, das eine gute Möglichkeit für ein erfolgreiches Gründungsvorhaben bietet. Ihr Erkennen ist eng an die Person der Gründerin oder des Gründers gebunden: Vorkenntnisse und kognitive Eigenschaften bestimmen, wer eine Gelegenheit überhaupt als solche wahrnimmt.",
          "Neun wiederkehrende Kategorien von Gelegenheiten sind: Wertsteigerung eines bestehenden Produkts, neue Anwendungen bestehender Mittel/Technologien, Schaffung von Massenmärkten, individuelle Anpassung (Mass Customization), Erhöhung der Reichweite (neue Kundensegmente), besseres Lieferkettenmanagement, Konvergenz von Branchen, Prozessinnovation sowie schlichte Vergrößerung des Unternehmens.",
          "Ob eine konkrete Gelegenheit attraktiv ist, lässt sich anhand von fünf Merkmalen prüfen: Sie sollte zeitlich passend sein (ein aktueller Bedarf), lösbar (mit verfügbaren Ressourcen in naher Zukunft), wichtig (auf der Prioritätenliste der Kundschaft), rentabel (ausreichende Zahlungsbereitschaft) und in einen günstigen Kontext eingebettet sein (Regulierung, Branchensituation).",
        ],
        terms: [
          {
            term: "Unternehmerische Gelegenheit",
            definition: "Ein zeitlich passendes, günstiges Zusammentreffen von Umständen, das eine gute Möglichkeit für ein erfolgreiches Gründungsvorhaben bietet.",
          },
        ],
        examples: [
          "Eine Herstellerin von Outdoor-Bekleidung, die ein Funktionsshirt aus Bio-Merinowolle statt aus synthetischen Fasern anbietet, nutzt die Kategorie 'Wertsteigerung eines bestehenden Produkts'. Ein Anbieter, der eine 16-Farben-Leuchte für 35 € durch eine einfachere 9-Farben-Variante für 20 € ergänzt, erschließt einen Massenmarkt.",
        ],
      },
      {
        id: "2-4",
        heading: "2.4 Exkurs: Trends systematisch erkennen",
        body: [
          "Wer nach Gelegenheiten sucht, kann auf mehrere Werkzeuge zur systematischen Trendbeobachtung zurückgreifen. Ein Trendradar ordnet aktuelle Entwicklungen nach gesellschaftlichen, technologischen, wirtschaftlichen, ökologischen und politischen Kategorien. Der Gartner Hype Cycle verfolgt einzelne Technologien durch fünf Phasen: Innovationsauslöser, Spitze der überzogenen Erwartungen, Tal der Desillusionierung, Rampe der Aufklärung und Plateau der Produktivität — er ist dabei stets nur eine Momentaufnahme.",
          "Eine längerfristige Perspektive liefert der russische Ökonom Nikolai Kondratjew (1926): Seine 'langen Wellen' wirtschaftlicher Entwicklung dauern jeweils 50 bis 60 Jahre und werden durch grundlegende technische Paradigmenwechsel ausgelöst — von der Dampfmaschine über Eisenbahn/Stahl, Elektrifizierung/Chemie, Automobile/Petrochemie und Informationstechnik bis hin zu (vermuteten) künftigen Wellen um Umwelttechnik, Nano- und Biotechnologie oder das Gesundheitswesen. Auch die Nachhaltigkeitsziele der Vereinten Nationen (SDGs) lassen sich als strukturierte Inspirationsquelle für neue Geschäftsideen lesen.",
        ],
        terms: [
          {
            term: "Kondratieff-Zyklus",
            definition: "Langfristige, 50–60 Jahre dauernde Schwankung der Weltwirtschaft, ausgelöst durch grundlegende technische Paradigmenwechsel (z. B. Dampfmaschine, Elektrifizierung, IKT).",
          },
          {
            term: "Gartner Hype Cycle",
            definition: "Modell zur Einordnung neuer Technologien in fünf Reifephasen von der ersten Erwartungswelle bis zur produktiven Nutzung.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 3 ====================
  {
    id: "entscheiden-unsicherheit",
    number: 3,
    title: "Entscheiden unter Risiko und Unsicherheit",
    free: false,
    intro:
      "Führungsentscheidungen lassen sich selten mit vollständiger Information treffen. Dieses Kapitel stellt das Grundmodell der Entscheidungstheorie vor und zeigt, mit welchen Regeln sich Entscheidungen bei Risiko, bei Ungewissheit und bei mehreren konkurrierenden Zielen strukturieren lassen.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Das Grundmodell der Entscheidungstheorie",
        body: [
          "Jede Entscheidungssituation lässt sich als Matrix aus Handlungsalternativen, möglichen Umweltzuständen und den daraus resultierenden Ergebnissen darstellen. Man unterscheidet drei Fälle: Entscheidungen bei Sicherheit (der Umweltzustand ist bekannt), bei Risiko (die Zustandswahrscheinlichkeiten sind bekannt oder zumindest schätzbar) und bei Ungewissheit (selbst die Wahrscheinlichkeiten sind unbekannt).",
        ],
        terms: [
          {
            term: "Entscheidung bei Risiko",
            definition: "Entscheidungssituation, in der die möglichen Umweltzustände und ihre Eintrittswahrscheinlichkeiten bekannt sind, das tatsächliche Ergebnis aber nicht.",
          },
          {
            term: "Entscheidung bei Ungewissheit",
            definition: "Entscheidungssituation, in der zwar die möglichen Umweltzustände, nicht aber deren Eintrittswahrscheinlichkeiten bekannt sind.",
          },
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Entscheidungen bei Risiko: Erwartungswert und (μ,σ)-Prinzip",
        body: [
          "Die einfachste Entscheidungsregel bei Risiko ist die μ-Regel: Man wählt die Alternative mit dem höchsten Erwartungswert. Das Petersburg-Spiel (Bernoulli, 1738) zeigt aber, dass eine reine Erwartungswert-Maximierung zu unplausiblen Ergebnissen führen kann, wenn sehr seltene, aber extrem hohe Auszahlungen den Erwartungswert dominieren — reale Entscheiderinnen und Entscheider sind in der Regel nicht bereit, für ein solches Spiel einen beliebig hohen Einsatz zu zahlen.",
          "Das (μ,σ)-Prinzip korrigiert dies, indem es neben dem Erwartungswert μ auch die Streuung σ (als Risikomaß) berücksichtigt: Der Nutzen einer Alternative wird als U = μ − c·σ modelliert, wobei c die Risikoaversion der Entscheiderin ausdrückt. Je nach Vorzeichen von c ergeben sich unterschiedliche Präferenzen: Bei Risikoaversion wird eine sichere Alternative gegenüber einer unsicheren mit gleichem Erwartungswert bevorzugt, bei Risikoneutralität zählt allein μ.",
        ],
        formulas: ["U = μ − c · σ  (c > 0: Risikoaversion)"],
        formulasLatex: ["U = \\mu - c \\cdot \\sigma \\quad (c > 0:\\ \\text{Risikoaversion})"],
        examples: [
          "Ein Café-Betreiber überlegt, ob er samstags einen Marktstand zusätzlich betreibt. Alternative A (fester Standplatz) bringt sicher 300 € Deckungsbeitrag. Alternative B (Verkauf auf einem Straßenfest) bringt bei gutem Wetter (60 %) 900 €, bei schlechtem Wetter (40 %) nur 50 €. Der Erwartungswert von B beträgt 0,6·900 + 0,4·50 = 560 €, ist also höher als bei A — die Streuung ist aber erheblich, sodass eine risikoscheue Entscheiderin trotzdem A wählen könnte.",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Entscheidungsregeln bei Ungewissheit",
        body: [
          "Ist nicht einmal die Wahrscheinlichkeit der Umweltzustände bekannt, helfen vier klassische Regeln. Die Maximin-Regel wählt die Alternative, deren schlechtestmögliches Ergebnis am wenigsten schlecht ist (Vorsichtsprinzip). Die Maximax-Regel wählt umgekehrt die Alternative mit dem bestmöglichen Ergebnis (Optimismusprinzip). Die Hurwicz-Regel gewichtet beide Extreme mit einem Optimismusparameter α zwischen 0 und 1: HV = α·max + (1−α)·min. Die Laplace-Regel schließlich unterstellt, mangels besseren Wissens, allen Umweltzuständen die gleiche Wahrscheinlichkeit und berechnet so einen einfachen Durchschnitt.",
        ],
        formulas: ["HV(Ai) = α · max(Ai) + (1 − α) · min(Ai)"],
        formulasLatex: ["HV(A_i) = \\alpha \\cdot \\max(A_i) + (1-\\alpha) \\cdot \\min(A_i)"],
        examples: [
          "Eine Bäckereikette prüft drei Filialstandorte A1, A2, A3 für eine neue Filiale, deren Jahresgewinn stark vom Wetter des Eröffnungsjahres abhängt (schlecht/mittel/gut): A1 liefert 40.000 € / 90.000 € / 120.000 €, A2 liefert 60.000 € / 80.000 € / 100.000 €, A3 liefert 10.000 € / 70.000 € / 200.000 €. Nach Maximin wäre A2 die beste Wahl (höchstes Minimum: 60.000 €), nach Maximax dagegen A3 (höchstes Maximum: 200.000 €). Mit α = 0,5 ergibt Hurwicz für A3: HV = 0,5·200.000 + 0,5·10.000 = 105.000 €, für A2: HV = 0,5·100.000 + 0,5·60.000 = 80.000 € — hier würde A3 gewählt.",
        ],
      },
      {
        id: "3-4",
        heading: "3.4 Entscheiden bei mehreren Zielen: die Nutzwertanalyse",
        body: [
          "Müssen mehrere, teils widersprüchliche Ziele gleichzeitig berücksichtigt werden (z. B. Preis, Qualität, Nachhaltigkeit), hilft das additive Modell bzw. die Nutzwertanalyse (auch Scoring-Modell): Für jede Alternative Ai wird pro Kriterium r ein Teilnutzen ui(Air) bestimmt, mit einem Gewicht wr multipliziert und über alle Kriterien summiert. Drei Anforderungen muss ein solches Modell erfüllen: Die Gewichte müssen sich zu 1 summieren, die Teilnutzen müssen auf einer vergleichbaren Skala liegen, und die Kriterien sollten möglichst unabhängig voneinander sein. Ein bekanntes Verzerrungsrisiko ist der Bandbreiteneffekt: Kriterien mit größerer Wertespanne werden in der Praxis oft unbewusst stärker gewichtet als eigentlich beabsichtigt.",
        ],
        formulas: ["U(Ai) = Σr wr · ui(Air)"],
        formulasLatex: ["U(A_i) = \\sum_r w_r \\cdot u_i(A_{ir})"],
        examples: [
          "Eine Absolventin vergleicht zwei Jobangebote nach den Kriterien Gehalt (Gewicht 0,4), Homeoffice-Anteil (Gewicht 0,35) und Weiterbildungsbudget (Gewicht 0,25), jeweils auf einer Nutzenskala von 0 bis 1 normiert. Angebot A erreicht 0,4·0,6 + 0,35·0,9 + 0,25·0,4 = 0,655, Angebot B erreicht 0,4·0,9 + 0,35·0,3 + 0,25·0,7 = 0,64 — nach dem additiven Modell liegt A knapp vorn.",
        ],
      },
      {
        id: "3-5",
        heading: "3.5 Exkurs: Daten überzeugend in Schaubildern kommunizieren",
        body: [
          "Führungsentscheidungen werden häufig auf Basis von Schaubildern kommuniziert und vorbereitet — umso wichtiger ist es, den passenden Diagrammtyp zur jeweiligen Vergleichsart zu wählen. Grundsätzlich unterscheidet man Rangfolgenvergleiche (z. B. Balkendiagramm), Zeitreihenvergleiche (Liniendiagramm), Anteilsvergleiche (Kreis- oder gestapeltes Balkendiagramm) sowie Korrelationsvergleiche zwischen zwei Größen (Streudiagramm). Ein falsch gewählter Diagrammtyp — etwa ein Kreisdiagramm für eine Zeitreihe — verzerrt die Botschaft, selbst wenn die zugrunde liegenden Daten korrekt sind.",
        ],
        terms: [
          {
            term: "Diagrammtyp-Matrix",
            definition: "Zuordnung von Vergleichsart (Rangfolge, Zeitreihe, Anteil, Korrelation) zu einem jeweils passenden Diagrammtyp, um Daten möglichst unverzerrt zu kommunizieren.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 4 ====================
  {
    id: "geschaeftsmodelle",
    number: 4,
    title: "Geschäftsmodelle systematisch entwickeln",
    free: false,
    intro:
      "Bevor ein Startup einen Wettbewerbsvorteil erarbeiten kann, braucht es ein Geschäftsmodell: eine klare Vorstellung davon, wie es für wen Wert schafft und wie es selbst Erträge erzielt. Dieses Kapitel stellt den in der Praxis meistgenutzten Rahmen dafür vor, den Business Model Canvas.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Was ist ein Geschäftsmodell?",
        body: [
          "Ein Modell ist allgemein eine bewusst vereinfachte, zweckgebundene Abbildung der Realität (Stachowiak, 1973): Es bildet nicht alle Elemente ab, sondern nur die für ein bestimmtes Subjekt, einen bestimmten Zeitpunkt und einen bestimmten Zweck relevanten. Ein Geschäftsmodell überträgt dieses Prinzip auf Unternehmen: Es ist eine modellhafte Repräsentation der logischen Zusammenhänge, wie eine Organisation Mehrwert für Kundschaft erzeugt und gleichzeitig einen Ertrag für sich selbst sichert.",
          "Wichtig ist die Abgrenzung zur Wettbewerbsstrategie: Ein Geschäftsmodell beschreibt Komponenten und deren Zusammenspiel, trifft aber keine Aussage über die Positionierung gegenüber der Konkurrenz. Die Wettbewerbsstrategie beschreibt dagegen, wie sich ein Unternehmen von Wettbewerbern abgrenzt und einen nachhaltigen Vorteil erarbeitet (siehe Kapitel 9).",
        ],
        terms: [
          {
            term: "Geschäftsmodell",
            definition: "Modellhafte Repräsentation der logischen Zusammenhänge, wie eine Organisation Mehrwert für Kundschaft erzeugt und einen Ertrag für sich selbst sichert.",
          },
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Der Business Model Canvas",
        body: [
          "Der Business Model Canvas (Osterwalder & Pigneur) gliedert ein Geschäftsmodell in neun Felder. Im Zentrum steht das Wert- bzw. Leistungsversprechen (Value Proposition): das Produkt oder die Dienstleistung, die Kundenbedürfnisse erfüllen soll. Es wird über Kanäle und Kundenbeziehungen mit den jeweiligen Kundensegmenten verbunden — Kanäle beschreiben, wie Kundschaft das Angebot findet und erwirbt, Kundenbeziehungen reichen von der einmaligen Kauftransaktion bis zur langfristigen Community.",
          "Auf der linken Seite des Canvas stehen die Elemente, die 'hinter den Kulissen' nötig sind, um das Leistungsversprechen zu erbringen: Schlüsselpartner (u. a. Lieferanten), Schlüsselaktivitäten und Schlüsselressourcen. Am unteren Rand finden sich schließlich die Kostenstruktur und die Erlösströme — ein Geschäftsmodell kann dabei durchaus mehrere unterschiedliche Erlösquellen kombinieren (z. B. Abo-Gebühren und Werbeeinnahmen bei einem Freemium-Modell).",
        ],
        terms: [
          {
            term: "Value Proposition",
            definition: "Das zentrale Wert- oder Leistungsversprechen eines Geschäftsmodells gegenüber einem bestimmten Kundensegment.",
          },
          {
            term: "Business Model Canvas",
            definition: "Neun-Felder-Werkzeug zur Analyse und Gestaltung von Geschäftsmodellen: Kundensegmente, Value Proposition, Kanäle, Kundenbeziehungen, Erlösströme, Schlüsselressourcen, Schlüsselaktivitäten, Schlüsselpartner, Kostenstruktur.",
          },
        ],
        examples: [
          "Ein Startup, das mobile Saunafässer an Ferienregionen vermietet, könnte als Value Proposition 'buchbares Wellness-Erlebnis ohne eigene Immobilie' formulieren, als Kundensegmente Feriendorf-Betreiber und Eventagenturen ansprechen, als Kanäle die eigene Webseite und Buchungsportale nutzen, und als Erlösströme sowohl Tagesmieten als auch Wartungsverträge kombinieren.",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Geschäftsmodell als Instrument der Strategieumsetzung",
        body: [
          "Ein Geschäftsmodell ist kein Selbstzweck, sondern das Instrument, mit dem eine Strategie kohärent in operative Organisationsstrukturen und Geschäftsprozesse übersetzt wird. Man spricht hier vom Strategie-System-Fit: Stimmen Strategie, Geschäftsmodell und die tatsächliche Organisation nicht überein, bleibt die beste Strategie wirkungslos.",
        ],
      },
    ],
  },

  // ==================== Kapitel 5 ====================
  {
    id: "planung-effectuation",
    number: 5,
    title: "Planung und Effectuation in jungen Unternehmen",
    free: false,
    intro:
      "Braucht ein Startup einen klassischen Geschäftsplan — oder handeln erfolgreiche Gründerinnen und Gründer nach einer ganz anderen Logik? Dieses Kapitel stellt beide Perspektiven vor: die klassische Geschäftsplanung und die von Saras Sarasvathy beschriebene 'Effectuation'-Logik erfahrener Unternehmerinnen und Unternehmer.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Funktion und Zielgruppen von Geschäftsplänen",
        body: [
          "Ein Geschäftsplan ist Fahrplan und zugleich Grundlage für Finanzierungsentscheidungen. Steve Blank bringt die Grenzen der Planung auf den Punkt: 'Kein Geschäftsplan überlebt den ersten Kontakt mit einem Kunden.' Wie detailliert ein Plan sein muss, hängt vom Kontext ab: Ein ressourcenstarkes Großunternehmen braucht oft nur einen reduzierten operativen Plan, eine ressourcenbeschränkte Neugründung dagegen eine vollständige Darstellung von Gelegenheit, Team, Finanzplan und Wettbewerb.",
          "Auch die Zielgruppe bestimmt den Schwerpunkt: Senior Management interessiert sich für die Chance im Unternehmenskontext, Kreditgeber für Risiko, Amortisationsdauer und Cashflow, Investorinnen und Investoren für Risiken, Rentabilitätsgrenze und langfristigen Wert. Die 'Hippodrom-Metapher' (MacMillan et al., 1985) fasst zusammen, worauf Investorinnen und Investoren achten: das Pferd (Produkt), der Reiter (Team), der Parcours (Markt) und die Wetten (Finanzen). Je reifer ein Unternehmen ist, desto wichtiger werden dabei belastbare Zahlen; bei einem jungen Unternehmen zählt vor allem das Narrativ.",
        ],
        terms: [
          {
            term: "Hippodrom-Metapher",
            definition: "Bild aus Investorensicht auf einen Geschäftsplan: Pferd = Produkt, Reiter = Team, Parcours = Markt, Wetten = Finanzen.",
          },
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Struktur eines Geschäftsplans",
        body: [
          "Eine generische Struktur umfasst Deckblatt/Inhaltsverzeichnis, Zusammenfassung, Beschreibung des Unternehmens, Analyse des Geschäftsumfelds (Branche, Wettbewerb, Markt), Marketingplan, operativen Plan, Management-Team, Finanzplan sowie Anhänge und Meilensteine. Öffentliche Förderprogramme wie EXIST fordern häufig eine kompaktere Variante mit Executive Summary, Geschäftsidee (inklusive Innovation und Projektplanung), Markt-/Wettbewerbsanalyse und Unternehmensplanung (Finanzplanung, Organisation, Chancen und Risiken).",
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Effectuation: die Logik erfahrener Gründer",
        body: [
          "Saras Sarasvathy befragte erfahrene Serien-Gründerinnen und -Gründer (mind. 15 Jahre Erfahrung) und leitete daraus eine eigenständige Entscheidungslogik ab: Effectuation. Sie unterscheidet sich fundamental von der klassischen 'kausalen Logik': Kausale Logik legt zuerst ein Ziel fest und sucht dann die Mittel und Wege, es bestmöglich zu erreichen. Effectuation beginnt umgekehrt bei den vorhandenen Mitteln — wer ich bin, was ich weiß, wen ich kenne — und fragt, was sich damit sofort umsetzen lässt. Über mehrere Zyklen aus Handeln, neue Partner gewinnen und Ziele anpassen entsteht so schrittweise etwas Neues.",
          "Effectuation eignet sich besonders für die frühe, unsichere Phase eines Vorhabens ('erster und zweiter Gang'), während klassische Planung eher für die spätere, erfolgreiche Umsetzung geeignet ist — Entrepreneurship befasst sich im Kern mit der Suche nach einem neuen Geschäftsmodell, klassische Unternehmensführung eher mit dessen Umsetzung.",
        ],
        terms: [
          {
            term: "Effectuation",
            definition: "Von Saras Sarasvathy beschriebene Entscheidungslogik erfahrener Unternehmerinnen und Unternehmer, die bei vorhandenen Mitteln statt bei vorab fixierten Zielen ansetzt.",
          },
          {
            term: "Kausale Logik",
            definition: "Klassische Planungslogik: Ziel festlegen, dann Mittel und Wege suchen, um es bestmöglich zu erreichen.",
          },
        ],
      },
      {
        id: "5-4",
        heading: "5.4 Die fünf Prinzipien der Effectuation",
        body: [
          "Sarasvathy beschreibt fünf Prinzipien. Das 'Bird in Hand'-Prinzip stellt die vorhandenen Mittel statt eines fixen Ziels in den Mittelpunkt. Das Prinzip des leistbaren Verlusts ('Affordable Loss') orientiert sich am Einsatz, den man zu verlieren bereit ist, statt am (in einer ungewissen Zukunft ohnehin nicht verlässlich schätzbaren) erwarteten Ertrag. Das 'Crazy Quilt'-Prinzip beschreibt, wie sich Partnerschaften mit denjenigen bilden, die sich selbst früh an einem noch unsicheren Vorhaben beteiligen, statt starr zwischen 'richtigen Partnern' und Konkurrenz zu unterscheiden. Das 'Lemonade'-Prinzip lädt Überraschungen und Zufälle aktiv als Chance ein, statt sie zu vermeiden. Das 'Pilot in the Plane'-Prinzip schließlich betont, dass die Zukunft nicht vorhergesagt, sondern durch eigenes Handeln gestaltet wird — ganz im Sinne von Alan Kays Diktum 'The best way to predict the future is to invent it.'",
        ],
        terms: [
          {
            term: "Bird in Hand Principle",
            definition: "Mittelorientierung statt Zielorientierung: Ausgangspunkt sind die vorhandenen Mittel (wer ich bin, was ich weiß, wen ich kenne).",
          },
          {
            term: "Affordable Loss Principle",
            definition: "Orientierung am leistbaren Verlust statt am erwarteten Ertrag als Entscheidungsgrundlage unter Ungewissheit.",
          },
        ],
        examples: [
          "Percy Spencer bemerkte 1945 zufällig, dass ein Magnetron die Schokolade in seiner Hosentasche schmelzen ließ ('schlechte Nachricht') und entwickelte daraus die Idee der Mikrowelle — ein Beispiel für das Lemonade-Prinzip. Groupon wiederum begann als erfolglose Aktivismus-Plattform namens 'The Point' und wurde erst durch einen radikalen Kurswechsel (Pivot, siehe Kapitel 6) zum Gutschein-Anbieter.",
        ],
      },
    ],
  },

  // ==================== Kapitel 6 ====================
  {
    id: "lean-startup-design-thinking",
    number: 6,
    title: "Vom MVP zum Pivot: Lean Startup und Design Thinking",
    free: false,
    intro:
      "Wie lässt sich das Scheitern von Startups systematisch weniger wahrscheinlich machen? Dieses Kapitel stellt den Lean-Startup-Ansatz vor sowie Design Thinking als ergänzende, nutzerzentrierte Methode zur Ideenfindung.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Lean Startup: Hypothesen statt Gewissheiten",
        body: [
          "Startups müssen mit wenig Zeit und geringen Mitteln ein Produkt entwickeln, das tatsächlich nachgefragt wird — schaffen sie das nicht, sind sie in ihrer Existenz bedroht. Lean Startup (Eric Ries) reduziert dieses Risiko systematisch: Ein Geschäftsplan wird nicht als fertige Wahrheit behandelt, sondern als Bündel von Hypothesen, die getestet und bei Bedarf revidiert werden. Besonders kritisch sind dabei die 'leap of faith assumptions' — Annahmen, die für den Erfolg entscheidend sind, zu denen aber noch kaum belastbare Daten vorliegen (etwa: 'Wir gehen davon aus, dass Kunden ein Produkt wie unseres wirklich benötigen').",
        ],
        terms: [
          {
            term: "Leap of Faith Assumption",
            definition: "Eine für den Erfolg des Geschäftsmodells entscheidende, aber noch kaum durch Daten gestützte Annahme, die im Lean-Startup-Prozess vorrangig getestet werden sollte.",
          },
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Minimum Viable Product und validiertes Lernen",
        body: [
          "Statt ein Produkt monatelang im Verborgenen zu perfektionieren, entwickelt ein Lean Startup ein Minimum Viable Product (MVP): eine Version, die mit dem geringsten Aufwand ein Maximum an validiertem Wissen über die Kundschaft liefert (Ries, 2011). Entscheidend ist, dass ein MVP funktionsfähig ist und echten Mehrwert stiftet — es ist kein unfertiges, fehlerhaftes Produkt, sondern ein bewusst minimales, aber brauchbares Kernprodukt.",
          "Der Zyklus des validierten Lernens (Ideen → Bauen → Produkt → Messen → Daten → Lernen) entspricht methodisch dem empirischen Falsifikationsprinzip nach Karl Popper: Man testet eine Hypothese direkt in Interaktion mit der Zielgruppe, statt sie theoretisch für bewiesen zu halten. In der frühen Phase kann es dabei völlig normal sein, dass mehrere Geschäftsmodell-Varianten verworfen werden müssen.",
        ],
        terms: [
          {
            term: "Minimum Viable Product (MVP)",
            definition: "Version eines neuen Produkts, die es einem Team ermöglicht, mit dem geringsten Aufwand ein Maximum an validiertem Wissen über Kundschaft zu sammeln (Ries, 2011).",
          },
          {
            term: "Validiertes Lernen",
            definition: "Systematischer Test von Geschäftsmodell-Hypothesen direkt am Markt, angelehnt an das Falsifikationsprinzip nach Karl Popper.",
          },
        ],
      },
      {
        id: "6-3",
        heading: "6.3 Der Pivot",
        body: [
          "Kleinere Anpassungen am Geschäftsmodell werden als Iterationen bezeichnet. Ein Pivot dagegen ist eine strukturierte Kurskorrektur, mit der eine grundlegend neue Hypothese über Produkt, Strategie oder Wachstumsmotor getestet wird (Ries, 2011). Ein bekanntes Beispiel ist Groupon: Aus der erfolglosen Aktivismus-Plattform 'The Point' wurde nach einem radikalen Pivot binnen drei Jahren ein Milliarden-Dollar-Unternehmen für Gutscheinaktionen.",
        ],
        terms: [
          {
            term: "Pivot",
            definition: "Strukturierte Kurskorrektur eines Startups, mit der eine neue grundlegende Hypothese über Produkt, Strategie oder Wachstumsmotor getestet wird.",
          },
        ],
      },
      {
        id: "6-4",
        heading: "6.4 Design Thinking als nutzerorientierte Innovationsmethode",
        body: [
          "Design Thinking ist ein praktischer, wiederholbarer Ansatz, um innovative Lösungen zu finden, indem die Bedürfnisse der Nutzenden konsequent in den Mittelpunkt gestellt werden. Anders als eine rein performanceorientierte Entwicklung (schneller, präziser) sucht Design Thinking den tragfähigen Schnittpunkt aus drei Sphären: was Menschen wünschen (People/Desirability), was technisch machbar ist (Technology/Feasibility) und was wirtschaftlich trägt (Business/Viability).",
          "Der Prozess folgt meist einem 'Double Diamond': In einer ersten Phase (Verstehen, Beobachten, Sichtweise definieren) wird der Problemraum zunächst geöffnet (divergiert) und dann verdichtet (konvergiert); in einer zweiten Phase (Ideen finden, Prototypen entwickeln, Testen) wird entsprechend ein Lösungsraum geöffnet und wieder verdichtet. Getragen wird der Prozess von drei Kernprinzipien — Empathie, Kreativität, Experimentieren — sowie von multidisziplinären Teams und flexibel nutzbaren Arbeitsräumen.",
        ],
        terms: [
          {
            term: "Design Thinking",
            definition: "Nutzerorientierter, iterativer Innovationsprozess, der Wünschbarkeit (Mensch), Machbarkeit (Technik) und Wirtschaftlichkeit in Einklang bringt.",
          },
          {
            term: "Double Diamond",
            definition: "Prozessmodell des Design Thinking mit zwei aufeinanderfolgenden Divergenz-Konvergenz-Phasen: erst den Problemraum, dann den Lösungsraum öffnen und wieder verdichten.",
          },
        ],
        examples: [
          "Bei der Entwicklung einer digitalen Warteschlangenanzeige für ein öffentliches Schwimmbad beobachtete ein Team zunächst, wie Badegäste tatsächlich an Kassenhäuschen und Umkleiden warten (Beobachten), bevor es aus den gewonnenen Erkenntnissen einen Prototyp für eine Ampelanzeige an den Eingängen baute und mit dem Badepersonal testete.",
        ],
      },
    ],
  },

  // ==================== Kapitel 7 ====================
  {
    id: "organisation",
    number: 7,
    title: "Organisation des Unternehmens",
    free: false,
    intro:
      "Sobald ein Unternehmen wächst, reicht eine informelle Absprache unter wenigen Personen nicht mehr aus. Dieses Kapitel behandelt, wie Unternehmen ihre Arbeitsteilung koordinieren — von der Konzernstruktur bis zur Frage, wann eine Organisation eher mechanistisch oder eher organisch aufgestellt sein sollte.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Was Organisation leisten muss",
        body: [
          "Organisation lässt sich instrumentell (als Tätigkeit: Gestaltung von Struktur und Abläufen) oder institutionell (als das Unternehmen selbst, verstanden als soziales Gebilde) auffassen. Das Grundproblem jeder Organisation ist die Koordination bei Arbeitsteilung: Sobald Aufgaben auf mehrere Personen oder Abteilungen verteilt sind, müssen ihre Beiträge wieder zusammengeführt werden. Dabei verfolgt Organisation zwei Ziele gleichzeitig — Effektivität (die richtigen Dinge tun) und Effizienz (die Dinge richtig, das heißt ressourcenschonend, tun).",
          "Damit Mitarbeitende überhaupt im Sinne der Organisationsziele handeln, braucht es passende Anreizsysteme: Sie müssen anreizkompatibel sein (individuell rationales Verhalten führt zum gewünschten Gesamtergebnis), anforderungskompatibel (die Anreize passen zu dem, was fachlich verlangt wird) und koordinationseffizient (sie unterstützen statt behindern die Abstimmung zwischen Bereichen).",
        ],
        terms: [
          {
            term: "Effektivität",
            definition: "Grad, in dem die 'richtigen' Ziele verfolgt werden — im Unterschied zur Effizienz, die den Ressourceneinsatz bewertet.",
          },
          {
            term: "Anreizkompatibilität",
            definition: "Eigenschaft eines Anreizsystems, bei dem individuell rationales Verhalten der Mitarbeitenden zugleich im Sinne der Unternehmensziele ist.",
          },
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Konzern- und Holdingstrukturen",
        body: [
          "Bei Konzernen unterscheidet man typischerweise drei Holding-Typen. Eine Finanzholding beschränkt sich auf die reine Kapitalbeteiligung und -steuerung der Tochtergesellschaften, ohne operativ einzugreifen. Eine Management-Holding übernimmt zusätzlich strategische Führungsaufgaben für die Töchter. Eine operative Holding schließlich führt selbst noch ein eigenes operatives Geschäft neben der Führung der Beteiligungen. Wie stark ein Konzern in einzelne, weitgehend eigenständige Geschäftseinheiten (Divisionalisierung) gegliedert wird, hängt unter anderem von der Anzahl der strategischen Geschäftseinheiten, ihrer Diversität, dem Synergiepotenzial zwischen ihnen und der Stabilität des Umfelds ab.",
        ],
        terms: [
          {
            term: "Finanzholding",
            definition: "Konzernobergesellschaft, die sich auf die Kapitalbeteiligung und -steuerung der Töchter beschränkt, ohne operativ einzugreifen.",
          },
          {
            term: "Management-Holding",
            definition: "Konzernobergesellschaft, die zusätzlich zur Kapitalsteuerung strategische Führungsaufgaben für die Tochtergesellschaften wahrnimmt.",
          },
        ],
      },
      {
        id: "7-3",
        heading: "7.3 Funktionale und divisionale Gliederung",
        body: [
          "Bei der funktionalen Gliederung werden Abteilungen nach betrieblichen Funktionen gebildet (z. B. Einkauf, Produktion, Vertrieb) — das nutzt Spezialisierungsvorteile, erschwert aber die Koordination bei mehreren, sehr unterschiedlichen Produktlinien. Bei der divisionalen Gliederung werden dagegen weitgehend eigenständige Sparten nach Produkten, Regionen oder Kundengruppen gebildet, die jeweils viele Funktionen selbst abdecken. Größere, diversifizierte Unternehmen tendieren tendenziell stärker zur Divisionalisierung, kleinere, fokussierte Unternehmen eher zur funktionalen Gliederung.",
        ],
        terms: [
          {
            term: "Funktionale Organisation",
            definition: "Gliederung eines Unternehmens nach betrieblichen Funktionen (z. B. Einkauf, Produktion, Vertrieb) statt nach Produkten oder Regionen.",
          },
          {
            term: "Divisionale Organisation",
            definition: "Gliederung eines Unternehmens in weitgehend eigenständige Sparten nach Produkten, Regionen oder Kundengruppen.",
          },
        ],
      },
      {
        id: "7-4",
        heading: "7.4 Liniensysteme und Koordinationsmechanismen",
        body: [
          "Im Einliniensystem erhält jede Mitarbeiterin, jeder Mitarbeiter Weisungen von genau einer vorgesetzten Stelle — das ist klar und eindeutig, aber unflexibel. Im Mehrliniensystem (z. B. der Matrixorganisation) können mehrere Instanzen gleichzeitig Weisungen erteilen, etwa eine fachliche und eine disziplinarische Linie — das erhöht die Flexibilität, kann aber zu Kompetenzkonflikten führen. Ein internes Netzwerk schließlich verzichtet weitgehend auf feste Hierarchien zugunsten flexibler, projektbezogener Zusammenarbeit.",
          "Koordination lässt sich über vier Mechanismen erreichen: persönliche Weisung, gegenseitige Anpassung (informelle Abstimmung), Programmierung (feste Regeln und Prozesse) sowie Organisationskultur (gemeinsame Werte und Normen als impliziter Koordinationsmechanismus).",
        ],
        terms: [
          {
            term: "Einliniensystem",
            definition: "Organisationsprinzip, bei dem jede Stelle Weisungen von genau einer übergeordneten Instanz erhält.",
          },
          {
            term: "Mehrliniensystem",
            definition: "Organisationsprinzip, bei dem eine Stelle Weisungen von mehreren übergeordneten Instanzen gleichzeitig erhalten kann (z. B. Matrixorganisation).",
          },
        ],
      },
      {
        id: "7-5",
        heading: "7.5 Gutenbergs Substitutionsgesetz und Organisationsstile",
        body: [
          "Gutenbergs Substitutionsgesetz der Organisation beschreibt einen Effizienz-Zielkonflikt: Sowohl Unterorganisation (zu wenig Regelung, hohe Reibungsverluste) als auch Überorganisation (zu starre Regelung, keine Flexibilität) senken die Effizienz — dazwischen liegt ein Organisationsoptimum. Burns und Stalker unterschieden zusätzlich zwei grundsätzliche Organisationsstile: mechanistische Organisationen mit klaren Hierarchien, festen Regeln und stabilen Prozessen (typisch in stabilen Branchen) und organische Organisationen mit flachen Hierarchien, hoher Selbstorganisation und schneller Anpassungsfähigkeit (typisch in dynamischen, technologiegetriebenen Branchen).",
        ],
        terms: [
          {
            term: "Gutenbergs Substitutionsgesetz der Organisation",
            definition: "Beschreibt, dass sowohl zu wenig (Unter-) als auch zu viel (Über-) organisatorische Regelung die Effizienz senkt — dazwischen liegt ein Organisationsoptimum.",
          },
          {
            term: "Mechanistische Organisation",
            definition: "Organisationsstil mit klarer Hierarchie, festen Regeln und stabilen Prozessen, geeignet für ein stabiles Umfeld (Burns & Stalker).",
          },
          {
            term: "Organische Organisation",
            definition: "Organisationsstil mit flachen Hierarchien und hoher Anpassungsfähigkeit, geeignet für ein dynamisches, unsicheres Umfeld (Burns & Stalker).",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 8 ====================
  {
    id: "strategische-analyse",
    number: 8,
    title: "Strategische Analyse: Markt, Wettbewerb und Ressourcen",
    free: false,
    intro:
      "Bevor ein Unternehmen strategische Optionen bewertet (Kapitel 9), muss es seine Ausgangslage verstehen. Dieses Kapitel stellt zentrale Analysewerkzeuge vor: von Mintzbergs Strategiebegriff über die SWOT-Analyse bis zu Porters Branchenstrukturanalyse und Wertschöpfungskette.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Was ist Strategie? Die fünf P's nach Mintzberg",
        body: [
          "Mintzberg beschreibt Strategie über fünf 'P's: als Plan (bewusst formulierte Vorgehensweise), als Muster (im Nachhinein erkennbares Handeln, auch ohne expliziten Plan), als Position (Platzierung im Wettbewerbsumfeld), als Perspektive (grundlegende Sicht auf die eigene Rolle im Markt) und als Trick (taktisches Manöver gegenüber Wettbewerbern). Zu unterscheiden sind außerdem Unternehmensstrategie ('where to compete' — in welchen Geschäftsfeldern will das Unternehmen tätig sein) und Wettbewerbsstrategie ('how to compete' — wie will es sich in einem gegebenen Feld gegenüber Konkurrenz behaupten).",
        ],
        terms: [
          {
            term: "Unternehmensstrategie",
            definition: "Strategische Ebene, die festlegt, in welchen Geschäftsfeldern ein Unternehmen tätig sein will ('where to compete').",
          },
          {
            term: "Wettbewerbsstrategie",
            definition: "Strategische Ebene, die festlegt, wie sich ein Unternehmen in einem gegebenen Geschäftsfeld gegenüber der Konkurrenz behauptet ('how to compete').",
          },
        ],
      },
      {
        id: "8-2",
        heading: "8.2 SWOT-Analyse und Branchenstrukturanalyse",
        body: [
          "Die SWOT-Analyse verbindet eine externe Analyse (Chancen/Opportunities und Risiken/Threats des Umfelds) mit einer internen Analyse (Stärken/Strengths und Schwächen/Weaknesses des eigenen Unternehmens). Für die externe Analyse liefert Michael Porters Modell der fünf Wettbewerbskräfte (Five Forces) einen strukturierten Rahmen: die Verhandlungsmacht von Lieferanten, die Verhandlungsmacht von Abnehmern, die Bedrohung durch neue Konkurrenz, die Bedrohung durch Ersatzprodukte sowie die Rivalität unter bestehenden Wettbewerbern. Je stärker diese fünf Kräfte ausgeprägt sind, desto geringer ist tendenziell das durchschnittliche Gewinnpotenzial einer Branche.",
        ],
        terms: [
          {
            term: "SWOT-Analyse",
            definition: "Strategisches Analyseraster aus Stärken, Schwächen (intern) sowie Chancen und Risiken (extern).",
          },
          {
            term: "Five Forces (Porter)",
            definition: "Modell der fünf Wettbewerbskräfte, die das Gewinnpotenzial einer Branche bestimmen: Lieferantenmacht, Abnehmermacht, neue Konkurrenz, Ersatzprodukte, Rivalität unter bestehenden Wettbewerbern.",
          },
        ],
      },
      {
        id: "8-3",
        heading: "8.3 Die Wertschöpfungskette",
        body: [
          "Porters Wertschöpfungskette gliedert die Aktivitäten eines Unternehmens in fünf primäre Aktivitäten (Eingangslogistik, Produktion, Ausgangslogistik, Marketing & Vertrieb, Kundendienst) sowie vier unterstützende Aktivitäten (Unternehmensinfrastruktur, Personalmanagement, Technologieentwicklung, Beschaffung). Jede dieser Aktivitäten kann Ansatzpunkt für einen Wettbewerbsvorteil sein — entweder über niedrigere Kosten oder über höhere Differenzierung gegenüber der Konkurrenz.",
        ],
        terms: [
          {
            term: "Wertschöpfungskette (Porter)",
            definition: "Gliederung der Unternehmensaktivitäten in primäre (direkt wertschöpfende) und unterstützende Aktivitäten zur Identifikation von Wettbewerbsvorteilen.",
          },
        ],
      },
      {
        id: "8-4",
        heading: "8.4 Market-based View versus Resource-based View",
        body: [
          "Der marktorientierte Ansatz (Market-based View) erklärt Unternehmenserfolg primär aus einer attraktiven Positionierung im Marktumfeld (z. B. über die Five Forces). Der ressourcenorientierte Ansatz (Resource-based View) sieht die Quelle nachhaltiger Wettbewerbsvorteile dagegen in wertvollen, seltenen, schwer imitierbaren und organisatorisch nutzbaren internen Ressourcen und Fähigkeiten (Barney, 1991). Beide Perspektiven schließen sich nicht aus, sondern ergänzen sich: die eine blickt nach außen, die andere nach innen.",
        ],
        terms: [
          {
            term: "Resource-based View",
            definition: "Strategieansatz, der nachhaltige Wettbewerbsvorteile aus wertvollen, seltenen, schwer imitierbaren internen Ressourcen und Fähigkeiten ableitet (Barney, 1991).",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 9 ====================
  {
    id: "strategische-optionen",
    number: 9,
    title: "Strategische Optionen: Wachstum, Wettbewerb und Portfolio",
    free: false,
    intro:
      "Aufbauend auf der strategischen Analyse (Kapitel 8) geht es nun um konkrete Handlungsoptionen: In welche Richtung soll ein Unternehmen wachsen, wie will es sich gegenüber der Konkurrenz positionieren, und wie sollte es ein Portfolio mehrerer Geschäftsfelder steuern?",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Die Ansoff-Matrix",
        body: [
          "Die Ansoff-Matrix (Ansoff, 1965) ordnet Wachstumsoptionen entlang zweier Dimensionen: bestehende versus neue Produkte und bestehende versus neue Märkte. Daraus ergeben sich vier Strategien: Marktdurchdringung (bestehendes Produkt, bestehender Markt — z. B. höherer Marktanteil durch mehr Werbung), Marktentwicklung (bestehendes Produkt, neuer Markt — z. B. Auslandsexpansion), Produktentwicklung (neues Produkt, bestehender Markt) und Diversifikation (neues Produkt, neuer Markt — die risikoreichste Option).",
        ],
        terms: [
          {
            term: "Ansoff-Matrix",
            definition: "Vier-Felder-Matrix zur Systematisierung von Wachstumsstrategien anhand der Dimensionen Produkt (bestehend/neu) und Markt (bestehend/neu).",
          },
        ],
      },
      {
        id: "9-2",
        heading: "9.2 Generische Wettbewerbsstrategien",
        body: [
          "Porter unterscheidet drei generische Wettbewerbsstrategien: Kostenführerschaft (niedrigste Kosten der Branche, meist über einen breiten Markt), Differenzierung (ein aus Kundensicht einzigartiges Angebot, für das ein Preisaufschlag akzeptiert wird) sowie Fokussierung (Konzentration auf ein enges Marktsegment, kombiniert entweder mit Kosten- oder Differenzierungsvorteil). Wer versucht, gleichzeitig Kostenführer und Differenzierer zu sein, ohne sich klar zu positionieren, läuft laut Porter Gefahr, 'zwischen den Stühlen' zu landen ('stuck in the middle') — nur wenigen Unternehmen gelingt es, über einen sogenannten Outpacing-Ansatz beide Vorteile gleichzeitig zu erzielen.",
        ],
        terms: [
          {
            term: "Kostenführerschaft",
            definition: "Generische Wettbewerbsstrategie, bei der ein Unternehmen die niedrigsten Kosten der Branche anstrebt.",
          },
          {
            term: "Differenzierung",
            definition: "Generische Wettbewerbsstrategie, bei der ein Unternehmen ein aus Kundensicht einzigartiges Angebot schafft, für das ein Preisaufschlag akzeptiert wird.",
          },
        ],
      },
      {
        id: "9-3",
        heading: "9.3 Portfolioanalyse: BCG-Matrix und McKinsey-Matrix",
        body: [
          "Die BCG-Matrix (Boston Consulting Group) ordnet Geschäftsfelder nach relativem Marktanteil und Marktwachstum vier Feldern zu: Stars (hoher Marktanteil, hohes Wachstum — investitionsintensiv, aber zukunftsträchtig), Cash Cows (hoher Marktanteil, geringes Wachstum — liefern stabile Überschüsse), Question Marks (geringer Marktanteil, hohes Wachstum — unklare Zukunft, hoher Investitionsbedarf) und Poor Dogs (geringer Marktanteil, geringes Wachstum — meist Kandidaten für Rückzug oder Desinvestition). Ziel ist ein ausgeglichenes Portfolio, in dem Cash Cows die Investitionen in Stars und ausgewählte Question Marks querfinanzieren.",
          "Die differenziertere McKinsey/GE-Matrix ersetzt die beiden BCG-Dimensionen durch zusammengesetzte Indizes für Marktattraktivität und relative Wettbewerbsstärke, jeweils in drei statt zwei Ausprägungen — das erlaubt eine feinere Einordnung als die vier BCG-Felder.",
        ],
        formulas: ["Relativer Marktanteil = eigener Marktanteil / Marktanteil des größten Wettbewerbers"],
        formulasLatex: ["\\text{Relativer Marktanteil} = \\dfrac{\\text{eigener Marktanteil}}{\\text{Marktanteil des größten Wettbewerbers}}"],
        terms: [
          {
            term: "BCG-Matrix",
            definition: "Portfolio-Werkzeug, das Geschäftsfelder nach relativem Marktanteil und Marktwachstum den Feldern Star, Cash Cow, Question Mark und Poor Dog zuordnet.",
          },
        ],
        examples: [
          "Ein Geschäftsfeld hat einen eigenen Marktanteil von 20%, der größte Wettbewerber kommt auf 40%. Relativer Marktanteil = 20/40 = 0,5. Liegt gleichzeitig ein hohes Marktwachstum vor, wird das Feld als Question Mark eingeordnet (geringer relativer Marktanteil, aber wachsender Markt); bei geringem Marktwachstum wäre es ein Poor Dog.",
        ],
      },
      {
        id: "9-4",
        heading: "9.4 Strategieplanung und -umsetzung im Unternehmen",
        body: [
          "In der Praxis laufen strategische Planungsprozesse selten rein 'von oben nach unten' (top-down) oder rein 'von unten nach oben' (bottom-up) ab, sondern meist als iteratives Gegenstromverfahren zwischen beiden Richtungen. Viele Unternehmen durchlaufen dazu einen jährlichen Planungszyklus mit mehreren Konferenzphasen, an dessen Ende die Implementierungsplanung, -realisierung und -kontrolle anschließt. Auch Zielkonflikte zwischen einzelnen Unternehmensbereichen müssen dabei über klare Konfliktlösungsregeln (etwa Vorrangregeln zwischen Bereichen) aufgelöst werden.",
        ],
      },
    ],
  },

  // ==================== Kapitel 10 ====================
  {
    id: "corporate-governance",
    number: 10,
    title: "Corporate Governance",
    free: false,
    intro:
      "Wer kontrolliert eigentlich die Kontrolleure eines Unternehmens? Dieses Kapitel behandelt Corporate Governance als Rahmen zur Steuerung und Überwachung von Unternehmen — anhand einer historischen Fallstudie und der beiden großen internationalen Grundmodelle.",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Was ist Corporate Governance?",
        body: [
          "Corporate Governance bezeichnet den rechtlichen und faktischen Ordnungsrahmen für die Leitung und Überwachung eines Unternehmens. Im Kern geht es um die Agency-Theorie: Weil Eigentum (Aktionärinnen und Aktionäre) und Kontrolle (Management) in größeren Unternehmen auseinanderfallen, entstehen potenzielle Interessenkonflikte — etwa zu geringer Arbeitseinsatz des Managements, suboptimale Investitionsentscheidungen, Eigenhandel oder gezielte Bereicherungsstrategien zulasten der Eigentümer. Gute Corporate Governance soll diese Konflikte durch Kontroll- und Anreizmechanismen begrenzen.",
        ],
        terms: [
          {
            term: "Corporate Governance",
            definition: "Rechtlicher und faktischer Ordnungsrahmen für Leitung und Überwachung eines Unternehmens, der Interessenkonflikte zwischen Eigentümern und Management begrenzen soll.",
          },
          {
            term: "Agency-Theorie",
            definition: "Theorie, die Interessenkonflikte zwischen einem Prinzipal (z. B. Eigentümer) und einem Agenten (z. B. Management) analysiert, deren Interessen nicht vollständig übereinstimmen.",
          },
        ],
      },
      {
        id: "10-2",
        heading: "10.2 Der Fall Arcandor",
        body: [
          "Der Zusammenbruch des Handelskonzerns Arcandor (2009) gilt als Lehrbuchbeispiel für Corporate-Governance-Versagen: Über mehrere Jahre hatte das Unternehmen einen erheblichen Teil seiner Immobilien im Rahmen komplexer Sale-and-lease-back-Konstruktionen veräußert und langfristig teuer zurückgemietet — Entscheidungen, die kurzfristig Liquidität brachten, langfristig aber die Kostenstruktur des Konzerns erheblich belasteten. Der Fall zeigt, wie eng Unternehmensentscheidungen, Immobilienstrategie und Interessen einzelner Führungspersonen miteinander verflochten sein können, wenn Kontrollmechanismen nicht wirksam greifen.",
        ],
      },
      {
        id: "10-3",
        heading: "10.3 Dualistisches und monistisches System der Unternehmensverfassung",
        body: [
          "International haben sich zwei Grundmodelle der Unternehmensverfassung durchgesetzt. Im dualistischen System (u. a. Deutschland, Dänemark, Österreich) sind Vorstand (operative Führung) und Aufsichtsrat (Kontrollorgan) strikt personell getrennt; der Aufsichtsrat wird von der Hauptversammlung gewählt und bestellt/kontrolliert seinerseits den Vorstand. Im monistischen System (u. a. USA, Großbritannien) gibt es dagegen nur ein einziges Organ, das Board of Directors, in dem sowohl geschäftsführende (Executive) als auch nicht-geschäftsführende (Non-Executive) Direktorinnen und Direktoren gemeinsam sitzen.",
          "Der Aufsichtsrat im dualistischen System hat sowohl Kontrollaufgaben (Überwachung der Geschäftsführung) als auch Entscheidungsaufgaben (u. a. Bestellung und Abberufung des Vorstands, Zustimmung zu wichtigen Geschäften) sowie eine Beratungsfunktion gegenüber dem Vorstand.",
        ],
        terms: [
          {
            term: "Dualistisches System",
            definition: "Unternehmensverfassung mit strikt getrennten Organen für operative Führung (Vorstand) und Kontrolle (Aufsichtsrat), u. a. in Deutschland üblich.",
          },
          {
            term: "Monistisches System",
            definition: "Unternehmensverfassung mit einem einzigen Organ (Board of Directors), in dem geschäftsführende und nicht-geschäftsführende Mitglieder gemeinsam sitzen, u. a. in den USA und UK üblich.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 11 ====================
  {
    id: "personalfuehrung",
    number: 11,
    title: "Personalführung: Kontrolle, Anreize und Führungsverhalten",
    free: false,
    intro:
      "Warum lässt sich Arbeitsleistung nicht einfach vollständig vertraglich festschreiben, und wie reagieren Beschäftigte auf Anreize? Dieses Kapitel behandelt zentrale Probleme der Personalökonomik sowie den Unterschied zwischen Management und Führung.",
    sections: [
      {
        id: "11-1",
        heading: "11.1 Das Kontrollproblem in Arbeitsverhältnissen",
        body: [
          "Arbeitgebende können den tatsächlichen Arbeitseinsatz von Beschäftigten meist nicht vollständig beobachten — ein klassisches Prinzipal-Agent-Problem. Das Kontrollproblem entsteht aus drei Quellen: exogenen Faktoren, die die Leistung beeinflussen, ohne dass Beschäftigte dafür verantwortlich sind, einem grundsätzlichen Risiko-Anreiz-Trade-off (mehr leistungsabhängige Vergütung erhöht Anreize, aber auch das Einkommensrisiko) und einem Selektionsmechanismus (unterschiedliche Vergütungsmodelle ziehen unterschiedliche Bewerbertypen an).",
        ],
        terms: [
          {
            term: "Kontrollproblem",
            definition: "Grundproblem, dass Arbeitgebende den tatsächlichen Arbeitseinsatz Beschäftigter nicht vollständig beobachten können (Prinzipal-Agent-Problem).",
          },
          {
            term: "Risiko-Anreiz-Trade-off",
            definition: "Zielkonflikt, dass stärker leistungsabhängige Vergütung zwar die Anreize erhöht, zugleich aber das Einkommensrisiko der Beschäftigten steigert.",
          },
        ],
      },
      {
        id: "11-2",
        heading: "11.2 Multitasking- und Interdependenzprobleme",
        body: [
          "Beim Multitasking-Problem vernachlässigen Beschäftigte Aufgaben, die nicht in einer messbaren Kennzahl (KPI) erfasst werden, zugunsten der Aufgaben, die gemessen und vergütet werden — ein bekanntes Beispiel ist eine Autoglas-Reparaturfirma, bei der eine reine Stückzahl-Vergütung die Sorgfalt bei der Montage verschlechterte. Beim Interdependenzproblem wird Leistung nur auf Teamebene gemessen, wodurch einzelne Teammitglieder Anreize haben, sich als Trittbrettfahrerinnen bzw. Trittbrettfahrer auf die Anstrengung der übrigen Gruppe zu verlassen.",
        ],
        terms: [
          {
            term: "Multitasking-Problem",
            definition: "Vernachlässigung nicht gemessener Aufgaben zugunsten gemessener, vergüteter Kennzahlen (KPIs).",
          },
          {
            term: "Interdependenzproblem",
            definition: "Anreiz zum Trittbrettfahren, wenn Leistung nur auf Teamebene statt individuell gemessen und vergütet wird.",
          },
        ],
      },
      {
        id: "11-3",
        heading: "11.3 Anerkennung als Anreiz: die Dankeskarten-Studie",
        body: [
          "Nicht nur monetäre Anreize wirken: Bradler et al. (2016) untersuchten in einem Feldexperiment die Wirkung persönlicher Dankeskarten auf die Arbeitsleistung von Beschäftigten in verschiedenen Treatment-Gruppen (u. a. Dankeskarten für die drei bzw. für die beste Leistung im Vergleich zu einer Kontrollgruppe ohne Dankeskarte). Die beobachtete Leistungssteigerung wird mit Konformitätsstreben und Reziprozitätsnormen erklärt: Anerkennung erzeugt bei Beschäftigten das Bedürfnis, sich revanchieren zu wollen.",
        ],
        terms: [
          {
            term: "Reziprozitätsnorm",
            definition: "Soziale Norm, wonach Menschen erhaltene Zuwendung (z. B. Anerkennung) tendenziell durch eigenes Entgegenkommen ausgleichen wollen.",
          },
        ],
      },
      {
        id: "11-4",
        heading: "11.4 Investitionen in Humankapital und der Gender Pay Gap",
        body: [
          "Aus- und Weiterbildung lassen sich ökonomisch als Investitionsentscheidung modellieren: Eine Person investiert Zeit und Geld (Kosten) in Bildung, um dadurch über den Erwerbsverlauf hinweg ein höheres Einkommen (Ertrag) zu erzielen — die Investition lohnt sich, solange der abgezinste erwartete Mehrertrag die Kosten übersteigt. Ein Teil der empirisch beobachteten Lohnunterschiede zwischen Geschlechtern (Gender Pay Gap) lässt sich auf systematisch unterschiedliche Humankapital-Investitionen, Berufswahl und Erwerbsunterbrechungen zurückführen; ein anderer Teil bleibt auch nach Kontrolle für solche Faktoren als unerklärter Rest bestehen, der auf Diskriminierung oder andere strukturelle Ursachen hindeutet.",
        ],
        terms: [
          {
            term: "Humankapital",
            definition: "Durch Bildung und Erfahrung erworbene Fähigkeiten und Kenntnisse einer Person, die deren zukünftige Produktivität und Einkommen erhöhen.",
          },
          {
            term: "Gender Pay Gap",
            definition: "Durchschnittlicher Lohnunterschied zwischen Geschlechtern, der sich teils durch unterschiedliche Humankapital-Investitionen und Erwerbsmuster, teils durch einen unerklärten Rest erklärt.",
          },
        ],
      },
      {
        id: "11-5",
        heading: "11.5 Manager oder Leader?",
        body: [
          "Nach Northouse lassen sich Management und Führung (Leadership) analytisch trennen, auch wenn beide Rollen in der Praxis oft dieselbe Person ausübt. Management umfasst vor allem Planung, Budgetierung, Organisation, Personaleinsatzplanung, Kontrolle und Problemlösung — es sichert Ordnung und Verlässlichkeit. Leadership dagegen bedeutet, eine Richtung vorzugeben, Menschen dahinter zu vereinen sowie zu motivieren und zu inspirieren — es befähigt zu Wandel. Erfolgreiche Organisationen brauchen in aller Regel beides.",
        ],
        terms: [
          {
            term: "Management (nach Northouse)",
            definition: "Planung, Budgetierung, Organisation, Personaleinsatzplanung, Kontrolle und Problemlösung — sichert Ordnung und Verlässlichkeit.",
          },
          {
            term: "Leadership (nach Northouse)",
            definition: "Richtung vorgeben, Menschen vereinen, motivieren und inspirieren — befähigt eine Organisation zu Wandel.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 12 ====================
  {
    id: "kundenverhalten-daten",
    number: 12,
    title: "Kundenverhalten verstehen: von Daten zu Erkenntnissen",
    free: false,
    intro:
      "Marketingentscheidungen sollten auf Daten beruhen. Dieses Kapitel behandelt das statistische Handwerkszeug, mit dem sich Kundenverhalten beschreiben und Zusammenhänge zwischen Größen wie Preis, Werbeausgaben und Absatz belastbar schätzen lassen.",
    sections: [
      {
        id: "12-1",
        heading: "12.1 Deskriptive Statistik im Marketing",
        body: [
          "Um Kundendaten zu beschreiben, greift man auf bekannte Lage- und Streuungsmaße zurück: Mittelwert und Median als Lagemaße, Varianz und Standardabweichung als Streuungsmaße, sowie Perzentile zur Beschreibung der Verteilung. Der Median ergibt sich bei gerader Beobachtungszahl als Mittelwert der beiden mittleren Werte, bei ungerader als der mittlere Wert selbst.",
        ],
        formulas: [
          "x̄ = (1/n) · Σ xi",
          "s² = 1/(n−1) · Σ (xi − x̄)²",
          "s = √s²",
        ],
        formulasLatex: [
          "\\bar{x} = \\dfrac{1}{n} \\sum_{i=1}^{n} x_i",
          "s^2 = \\dfrac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2",
          "s = \\sqrt{s^2}",
        ],
        terms: [
          {
            term: "Median",
            definition: "Der mittlere Wert einer der Größe nach sortierten Beobachtungsreihe; bei gerader Anzahl der Mittelwert der beiden mittleren Werte.",
          },
        ],
        examples: [
          "Ein Fahrradladen erfasst die Kaufsummen von 7 Kundinnen und Kunden an einem Samstag: 45 €, 120 €, 80 €, 310 €, 65 €, 90 €, 150 €. Sortiert ergibt sich 45, 65, 80, 90, 120, 150, 310 — der Median ist der vierte Wert, also 90 €, während der Mittelwert (860 €/7 ≈ 122,90 €) durch den Ausreißer bei 310 € deutlich höher liegt.",
        ],
      },
      {
        id: "12-2",
        heading: "12.2 Zusammenhänge messen: Korrelation und Regression",
        body: [
          "Der Korrelationskoeffizient r misst die Stärke und Richtung eines linearen Zusammenhangs zwischen zwei Merkmalen und liegt zwischen −1 und +1. Die lineare Einfachregression (Methode der kleinsten Quadrate, OLS) schätzt darüber hinaus eine konkrete Funktionsgleichung ŷ = a + b·x, mit der sich die abhängige Variable y aus der unabhängigen Variable x vorhersagen lässt. Das Bestimmtheitsmaß r² gibt an, welcher Anteil der Streuung von y durch die Regressionsgerade erklärt wird — r² = 1 bedeutet perfekte Erklärung, r² = 0 keinerlei linearen Erklärungsgehalt.",
          "Ein praktisches Problem bei der Schätzung von Zusammenhängen aus aggregierten Daten ist der Aggregationsbias: Werden Beobachtungen aus unterschiedlichen Kontexten (z. B. unterschiedliche Filialen mit unterschiedlichem Preisniveau) zusammengefasst, kann die geschätzte Beziehung den wahren Zusammenhang innerhalb eines einzelnen Kontexts verzerren.",
        ],
        formulas: [
          "ŷ = a + b · x",
          "b = [n·Σxiyi − (Σxi)(Σyi)] / [n·Σxi² − (Σxi)²]",
          "a = ȳ − b · x̄",
          "r² = Σ(ŷi − ȳ)² / Σ(yi − ȳ)²",
        ],
        formulasLatex: [
          "\\hat{y} = a + b \\cdot x",
          "b = \\dfrac{n\\sum x_i y_i - \\left(\\sum x_i\\right)\\left(\\sum y_i\\right)}{n\\sum x_i^2 - \\left(\\sum x_i\\right)^2}",
          "a = \\bar{y} - b \\cdot \\bar{x}",
          "r^2 = \\dfrac{\\sum (\\hat{y}_i - \\bar{y})^2}{\\sum (y_i - \\bar{y})^2}",
        ],
        terms: [
          {
            term: "Bestimmtheitsmaß r²",
            definition: "Anteil der Streuung der abhängigen Variable, der durch die Regressionsgerade erklärt wird (Wertebereich 0 bis 1).",
          },
          {
            term: "Aggregationsbias",
            definition: "Verzerrung eines geschätzten Zusammenhangs, die entsteht, wenn Daten aus unterschiedlichen Kontexten (z. B. Filialen mit unterschiedlichem Preisniveau) zusammengefasst werden.",
          },
        ],
        examples: [
          "Werbeausgaben x (in 1.000€) und Umsatz y (in 1.000€) über 5 Monate: x=1,2,3,4,5; y=3,5,4,6,8. Es gilt Σx=15, Σy=26, Σxy=89, Σx²=55. b = (5·89−15·26)/(5·55−15²) = 55/50 = 1,1. a = 5,2 − 1,1·3 = 1,9, also ŷ = 1,9 + 1,1·x. Für x=6 (6.000€ Werbebudget) prognostiziert das Modell einen Umsatz von 1,9+6,6=8,5 (also 8.500€). Das Bestimmtheitsmaß beträgt hier r²≈0,82 — 82% der Umsatzstreuung werden durch die Werbeausgaben erklärt.",
        ],
      },
      {
        id: "12-3",
        heading: "12.3 Das Luce-Modell der Produktwahl",
        body: [
          "Das Luce-Modell (Attraktionsmodell der Produktwahl) beschreibt, mit welcher Wahrscheinlichkeit sich eine Person für ein bestimmtes Objekt unter mehreren Alternativen entscheidet: Die Wahl-Wahrscheinlichkeit eines Objekts ist proportional zu seinem Nutzen (potenziert mit einem Konstanten-Parameter β), geteilt durch die Summe der entsprechend potenzierten Nutzen aller verfügbaren Alternativen.",
        ],
        formulas: ["Pik = Uikᵝ / Σj Ujkᵝ"],
        formulasLatex: ["P_{ik} = \\dfrac{U_{ik}^{\\beta}}{\\sum_{j=1}^{J} U_{jk}^{\\beta}}"],
        terms: [
          {
            term: "Luce-Modell",
            definition: "Attraktionsmodell der Produktwahl: Die Wahrscheinlichkeit, dass eine Person ein Objekt wählt, ist proportional zu dessen (potenziertem) Nutzen im Verhältnis zum Nutzen aller Alternativen.",
          },
        ],
        examples: [
          "Drei Marken haben (bei β=1) die Nutzenwerte U1=4, U2=2, U3=2. Wahlwahrscheinlichkeiten: P1 = 4/(4+2+2) = 0,5, P2 = P3 = 2/8 = 0,25 — Marke 1 wird doppelt so oft gewählt wie jede der beiden anderen, obwohl ihr Nutzen nicht doppelt, sondern nur relativ höher ist als der Durchschnitt der Alternativen.",
        ],
      },
    ],
  },

  // ==================== Kapitel 13 ====================
  {
    id: "produktgestaltung-preispolitik",
    number: 13,
    title: "Kundenorientierte Produktgestaltung und Preispolitik",
    free: false,
    intro:
      "Wie lässt sich aus Kundenpräferenzen ein konkretes Produktdesign ableiten, und wie setzt man anschließend den gewinnoptimalen Preis? Dieses Kapitel verbindet die Conjoint-Analyse mit den zentralen Preis-Absatz-Modellen der Preispolitik.",
    sections: [
      {
        id: "13-1",
        heading: "13.1 Conjoint-Analyse: Produkte aus Kundensicht gestalten",
        body: [
          "Die Conjoint-Analyse ermittelt, welchen Gesamtnutzen Kundinnen und Kunden einem Produkt mit einer bestimmten Kombination von Merkmalsausprägungen (einem 'Profil') zuschreiben. Dazu wird jedem Merkmal i in seiner Ausprägung j ein Teilnutzen zugeordnet; der Gesamtnutzen eines Profils ergibt sich als Summe der Teilnutzen aller im Profil enthaltenen Merkmalsausprägungen. So lässt sich unter vielen denkbaren Produktkonfigurationen diejenige mit dem höchsten erwarteten Kundennutzen identifizieren.",
        ],
        formulas: ["Up = Σi Σj TNij · xij"],
        formulasLatex: ["U_P = \\sum_{i=1}^{I}\\sum_{j=1}^{J} TN_{ij} \\cdot x_{ij}"],
        terms: [
          {
            term: "Conjoint-Analyse",
            definition: "Verfahren zur Ermittlung des Gesamtnutzens eines Produktprofils aus den Teilnutzen seiner einzelnen Merkmalsausprägungen.",
          },
        ],
        examples: [
          "Ein Rucksack wird über zwei Merkmale beschrieben: Farbe (Teilnutzen Schwarz=3, Grau=1) und Preis (Teilnutzen 40€=2, 60€=0). Profil 'Schwarz, 40€' hat Up = 3+2 = 5, Profil 'Grau, 60€' hat Up = 1+0 = 1 — das erste Profil hätte den höheren erwarteten Kundennutzen.",
        ],
      },
      {
        id: "13-2",
        heading: "13.2 Preis-Absatz-Funktionen",
        body: [
          "Eine Preis-Absatz-Funktion (PAF) beschreibt den Zusammenhang zwischen dem verlangten Preis p und der abgesetzten Menge x. Die lineare PAF (x = a − b·p) unterstellt, dass der Absatz mit steigendem Preis gleichmäßig sinkt; sie ist einfach zu schätzen, kann aber realitätsfern sein, weil sie irgendwann negative Absatzmengen vorhersagt. Die multiplikative PAF (x = a·p⁻ᵇ) unterstellt dagegen eine konstante Preiselastizität über den gesamten Preisbereich und nähert sich für sehr hohe Preise asymptotisch null an, ohne negativ zu werden — sie gilt daher oft als realistischer, ist aber schwerer zu schätzen (meist über eine Log-Transformation).",
        ],
        formulas: ["Lineare PAF: x = a − b · p", "Multiplikative PAF: x = a · p⁻ᵇ"],
        formulasLatex: ["\\text{Lineare PAF:}\\quad x = a - b \\cdot p", "\\text{Multiplikative PAF:}\\quad x = a \\cdot p^{-b}"],
        terms: [
          {
            term: "Preis-Absatz-Funktion (PAF)",
            definition: "Funktion, die die abgesetzte Menge in Abhängigkeit vom verlangten Preis beschreibt.",
          },
        ],
        examples: [
          "Für die lineare PAF x = 1.000 − 20·p ergibt sich bei p=30€ ein Absatz von x = 1.000−600 = 400 Stück. Bei p=50€ läge der (rechnerische) Absatz bei 0 — die PAF ist also nur für p<50€ sinnvoll interpretierbar.",
        ],
      },
      {
        id: "13-3",
        heading: "13.3 Preiselastizität und Kreuzpreiselastizität",
        body: [
          "Die Punktelastizität des Absatzes ε misst, um wie viel Prozent sich der Absatz ändert, wenn der Preis um ein Prozent steigt — sie ist bei einer normalen (fallenden) PAF negativ; je größer der Betrag, desto preissensibler reagieren Kundinnen und Kunden. Die Kreuzpreiselastizität misst dagegen, wie der Absatz eines Produkts A auf eine Preisänderung eines anderen Produkts B reagiert: Ein positiver Wert deutet auf Substitutionsgüter hin (steigt der Preis von B, steigt der Absatz von A), ein negativer Wert auf Komplementärgüter.",
        ],
        formulas: ["ε = (dx/dp) · (p/x)", "εAB = (dxA/dpB) · (pB/xA)"],
        formulasLatex: [
          "\\varepsilon = \\dfrac{dx(p)}{dp} \\cdot \\dfrac{p}{x}",
          "\\varepsilon_{AB} = \\dfrac{dx_A}{dp_B} \\cdot \\dfrac{p_B}{x_A}",
        ],
        terms: [
          {
            term: "Preiselastizität des Absatzes",
            definition: "Prozentuale Änderung der Absatzmenge bei einprozentiger Preisänderung.",
          },
          {
            term: "Kreuzpreiselastizität",
            definition: "Prozentuale Änderung des Absatzes eines Gutes bei einprozentiger Preisänderung eines anderen Gutes; positiv bei Substituten, negativ bei Komplementen.",
          },
        ],
        examples: [
          "Für die PAF x = 1.000 − 20·p ist dx/dp = −20 konstant. Bei p=30€, x=400: ε = −20·(30/400) = −1,5 — eine Preiserhöhung um 1% senkt den Absatz um 1,5% (elastische Nachfrage).",
        ],
      },
      {
        id: "13-4",
        heading: "13.4 Gewinnoptimale Preise: Amoroso-Robinson und Cournot",
        body: [
          "Ist die Preis-Absatz-Funktion bekannt, lässt sich der gewinnmaximierende Preis aus der Gewinnfunktion G(p) = U(p) − K(x(p)) ableiten. Die Amoroso-Robinson-Relation verknüpft den optimalen Preis mit der Preiselastizität ε(p) an dieser Stelle und den Grenzkosten K′: Je unelastischer die Nachfrage (je kleiner |ε|), desto größer der optimale Preisaufschlag über die Grenzkosten. Für die lineare PAF ergibt sich daraus der sogenannte Cournot-Preis, für die multiplikative PAF ein etwas anderer, ebenfalls direkt aus a, b und den variablen Stückkosten k berechenbarer optimaler Preis.",
        ],
        formulas: [
          "G(p) = p · x(p) − K(x(p)) → max.",
          "p* = ε(p*) / (1 + ε(p*)) · K′",
          "Cournot-Preis (linear): p* = ½ · (a/b + k)",
          "Optimaler Preis (multiplikativ): p* = b/(b−1) · k",
        ],
        formulasLatex: [
          "G(p) = p \\cdot x(p) - K(x(p)) \\to \\max.",
          "p^* = \\dfrac{\\varepsilon(p^*)}{1+\\varepsilon(p^*)} \\cdot K'",
          "p^*_{\\text{Cournot}} = \\dfrac{1}{2}\\left(\\dfrac{a}{b} + k\\right)",
          "p^*_{\\text{mult.}} = \\dfrac{b}{b-1} \\cdot k",
        ],
        terms: [
          {
            term: "Amoroso-Robinson-Relation",
            definition: "Formel, die den gewinnoptimalen Preis über die Preiselastizität der Nachfrage mit den Grenzkosten verknüpft.",
          },
          {
            term: "Cournot-Preis",
            definition: "Gewinnoptimaler Preis bei linearer Preis-Absatz-Funktion und bekannten variablen Stückkosten.",
          },
        ],
        examples: [
          "Ein Hersteller von Thermobechern hat die lineare PAF x = 8.000 − 40·p (p in €) ermittelt, die variablen Stückkosten liegen bei 6 €. Der Cournot-Preis beträgt p* = ½·(8.000/40 + 6) = ½·(200 + 6) = 103 €.",
        ],
      },
    ],
  },

  // ==================== Kapitel 14 ====================
  {
    id: "kommunikationspolitik",
    number: 14,
    title: "Kommunikationspolitik: Werbewirkung messen und steuern",
    free: false,
    intro:
      "Wie viel sollte ein Unternehmen für Werbung ausgeben, und wie vergleicht man die Kosteneffizienz verschiedener Werbeträger? Dieses Kapitel stellt die zentralen quantitativen Werkzeuge der Kommunikationspolitik vor.",
    sections: [
      {
        id: "14-1",
        heading: "14.1 Werbe-Response-Funktionen",
        body: [
          "Werbe-Response-Funktionen beschreiben, wie der Absatz x vom eingesetzten Werbebudget W abhängt. Zwei Grundformen sind gebräuchlich: degressive Verläufe ohne Sättigungsmenge, etwa mit einer Wurzelfunktion (x = a + b·√W) oder einer logarithmischen Funktion (x = a + b·ln(W)) — hier steigt der Absatz mit zusätzlichem Budget immer langsamer, aber ohne feste Obergrenze; sowie S-förmige Verläufe mit einer festen Sättigungsmenge xs, bei denen der Absatz zunächst langsam, dann beschleunigt und schließlich wieder abgeflacht gegen die Sättigungsgrenze strebt.",
        ],
        formulas: [
          "Degressiv (Wurzel): x(W) = a + b·√W",
          "Degressiv (logarithmisch): x(W) = a + b·ln(W)",
          "S-förmig: x(W) = xs / (1 + e^(a−bW))",
        ],
        formulasLatex: [
          "\\text{Degressiv (Wurzel):}\\quad x(W) = a + b\\sqrt{W}",
          "\\text{Degressiv (log.):}\\quad x(W) = a + b\\ln(W)",
          "\\text{S-förmig:}\\quad x(W) = \\dfrac{x_s}{1 + e^{a-bW}}",
        ],
        terms: [
          {
            term: "Werbe-Response-Funktion",
            definition: "Funktion, die den Absatz in Abhängigkeit vom eingesetzten Werbebudget beschreibt — degressiv (ohne Sättigung) oder S-förmig (mit Sättigungsmenge).",
          },
        ],
        examples: [
          "Für x(W) = 200 + 50·√W (W in 1.000€) ergibt sich bei W=4 ein Absatz von 200+50·2=300 Stück, bei W=16 (viermal so viel Budget) nur 200+50·4=400 Stück — der Zuwachs pro zusätzlichem Euro nimmt ab (Sättigungstendenz ohne feste Obergrenze).",
        ],
      },
      {
        id: "14-2",
        heading: "14.2 Werbeelastizität und das optimale Werbebudget",
        body: [
          "Die Werbeelastizität α misst, um wie viel Prozent der Absatz steigt, wenn das Werbebudget um ein Prozent erhöht wird — analog zur Preiselastizität, allerdings positiv statt negativ. Kennt man die Werbeelastizität sowie den Deckungsbeitrag pro Stück (Preis p minus variable Stückkosten kvar) und die Absatzmenge x, lässt sich daraus das optimale Werbebudget ableiten: Es steigt mit der Werbeelastizität, dem Stückdeckungsbeitrag und der Absatzmenge.",
        ],
        formulas: ["α = (dx(W)/dW) · (W/x) > 0", "W* = α · (p − kvar) · x"],
        formulasLatex: [
          "\\alpha = \\dfrac{dx(W)}{dW} \\cdot \\dfrac{W}{x} > 0",
          "W^* = \\alpha \\cdot (p - k_{var}) \\cdot x",
        ],
        terms: [
          {
            term: "Werbeelastizität",
            definition: "Prozentuale Änderung des Absatzes bei einprozentiger Erhöhung des Werbebudgets.",
          },
        ],
        examples: [
          "Ein Anbieter von Fahrradhelmen verkauft 20.000 Stück bei einem Deckungsbeitrag von 12 € je Stück und einer geschätzten Werbeelastizität von 0,08. Das optimale Werbebudget beträgt W* = 0,08 · 12 · 20.000 = 19.200 €.",
        ],
      },
      {
        id: "14-3",
        heading: "14.3 Der Tausenderkontaktpreis",
        body: [
          "Um verschiedene Werbeträger (z. B. Zeitschriften, Plakatflächen, Online-Kanäle) miteinander zu vergleichen, wird häufig der Tausenderkontaktpreis (TKP) herangezogen: die Kosten, die anfallen, um 1.000 Personen mit einer Werbebotschaft zu erreichen. Er berechnet sich aus den Kosten je Belegung eines Mediums, geteilt durch die Reichweite (Nutzerzahl) dieses Mediums, multipliziert mit 1.000.",
        ],
        formulas: ["TKPj = (cj / Kj) · 1.000"],
        formulasLatex: ["TKP_j = \\dfrac{c_j}{K_j} \\cdot 1.000"],
        terms: [
          {
            term: "Tausenderkontaktpreis (TKP)",
            definition: "Kosten, um mit einem Werbeträger 1.000 Personen zu erreichen — zentrale Kennzahl zum Vergleich der Kosteneffizienz verschiedener Medien.",
          },
        ],
        examples: [
          "Eine Anzeige in Magazin A kostet 8.000€ bei 400.000 Lesern: TKP_A = (8.000/400.000)·1.000 = 20€. Eine Anzeige in Magazin B kostet 5.000€ bei 200.000 Lesern: TKP_B = (5.000/200.000)·1.000 = 25€ — trotz geringerer absoluter Kosten ist Magazin B pro erreichter 1.000 Personen teurer.",
        ],
      },
    ],
  },

  // ==================== Kapitel 15 ====================
  {
    id: "erfolg-kunde-messen",
    number: 15,
    title: "Erfolg beim Kunden messen: CLV und Customer Equity",
    free: false,
    intro:
      "Wie viel ist eine Kundenbeziehung über die gesamte Dauer der Zusammenarbeit tatsächlich wert — und wie viel darf man in ihre Gewinnung investieren? Dieses Kapitel stellt den Customer Lifetime Value als zentrale Marketing-Metrik vor.",
    sections: [
      {
        id: "15-1",
        heading: "15.1 Der Customer Lifetime Value",
        body: [
          "Der Customer Lifetime Value (CLV) fasst alle abgezinsten Nettoeinzahlungen zusammen, die ein Unternehmen über die gesamte Dauer der Geschäftsbeziehung mit einer Kundin oder einem Kunden erwarten kann. In jeder Periode t wird die erwartete Investition in die Geschäftsbeziehung at vom erwarteten Umsatz et abgezogen; dieser Nettobeitrag wird mit dem Mindestverzinsungssatz i über die jeweilige Periode abgezinst und über den gesamten Analysehorizont von t = 0 bis n aufsummiert.",
        ],
        formulas: ["CLV = Σt=0..n (et − at) / (1+i)^t"],
        formulasLatex: ["CLV = \\sum_{t=0}^{n} \\dfrac{e_t - a_t}{(1+i)^t}"],
        terms: [
          {
            term: "Customer Lifetime Value (CLV)",
            definition: "Summe der abgezinsten erwarteten Nettoeinzahlungen (Umsatz minus Investition) aus einer Kundenbeziehung über den gesamten Analysehorizont.",
          },
        ],
        examples: [
          "Ein Kunde bringt über 3 Jahre (t=0,1,2) Nettobeiträge (et−at) von 100€, 120€, 90€ bei einem Zinssatz i=10%. CLV = 100/1,1⁰ + 120/1,1¹ + 90/1,1² = 100 + 109,09 + 74,38 ≈ 283,47€.",
        ],
      },
      {
        id: "15-2",
        heading: "15.2 CLV anhand der Wiederkaufrate",
        body: [
          "In der Praxis wird der CLV oft vereinfachend mit konstanten Periodeneinnahmen e und -investitionen a sowie einer konstanten Wiederkaufrate (Bindungsrate) r geschätzt: In jeder Folgeperiode bleibt nur der Anteil r der Kundschaft erhalten. Über einen unendlichen Zeithorizont lässt sich die Formel geschlossen darstellen und um die einmaligen Akquisitionskosten (AC) der Kundengewinnung ergänzen.",
        ],
        formulas: [
          "CLV = Σt=0..n (e−a)·r^t / (1+i)^t − AC",
          "Für n→∞: CLV = (e−a) · (1+i)/(1+i−r) − AC",
        ],
        formulasLatex: [
          "CLV = \\sum_{t=0}^{n} \\dfrac{(e-a)\\cdot r^t}{(1+i)^t} - AC",
          "n \\to \\infty:\\quad CLV = (e-a)\\cdot\\dfrac{1+i}{1+i-r} - AC",
        ],
        terms: [
          {
            term: "Bindungsrate (Wiederkaufrate)",
            definition: "Anteil der Kundschaft, der von einer Periode zur nächsten weiterhin Kundin bzw. Kunde bleibt.",
          },
          {
            term: "Akquisitionskosten",
            definition: "Einmalige Kosten der Neukundengewinnung, die vom über die Kundenbeziehung erwirtschafteten CLV abgezogen werden.",
          },
        ],
        examples: [
          "Ein Anbieter von Kaffee-Abonnements gewinnt einen Kunden für 15 € Akquisitionskosten. Der Kunde bringt pro Jahr 40 € Deckungsbeitrag, die Bindungsrate liegt bei 75 %, der Diskontsatz bei 10 %. Für n → ∞ ergibt sich CLV = 40 · (1,10)/(1,10 − 0,75) − 15 = 40 · 3,143 − 15 ≈ 111,71 €.",
        ],
      },
      {
        id: "15-3",
        heading: "15.3 Customer Equity",
        body: [
          "Aggregiert man den CLV über alle (aktuellen und potenziellen) Kundinnen und Kunden eines Unternehmens, erhält man die Customer Equity — den Gesamtwert des Kundenstamms. Sie lässt sich als strategische Erfolgsgröße neben klassischen Bilanzkennzahlen verstehen: Investitionen in Kundengewinnung und -bindung zahlen sich aus, solange sie die Customer Equity stärker erhöhen, als sie kosten.",
        ],
        formulas: ["CE = Σj=1..n CLVj"],
        formulasLatex: ["CE = \\sum_{j=1}^{n} CLV_j"],
        terms: [
          {
            term: "Customer Equity",
            definition: "Summe der Customer Lifetime Values aller (aktuellen und potenziellen) Kunden eines Unternehmens.",
          },
        ],
        examples: [
          "Ein Unternehmen hat 3 Kundensegmente mit je 1.000 Kunden und durchschnittlichen CLVs von 200€, 500€ und 900€. Customer Equity = 1.000·(200+500+900) = 1.600.000€. Eine Marketingmaßnahme, die 50.000€ kostet, aber den durchschnittlichen CLV des schwächsten Segments um 30€ erhöht (+30.000€ CE), würde sich rein finanziell NICHT lohnen.",
        ],
      },
    ],
  },
];
