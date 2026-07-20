import type { SkriptChapter } from "./types";

// Eigenständiges Lehrwerk zu "Management und Marketing" (Entrepreneurship,
// Unternehmensführung, Marketing), verfasst wie ein unabhängiges Lehrbuch
// zum Modulthema — nicht als Paraphrase einer bestimmten Vorlesung.
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 ====================
  {
    id: "grundlagen-unternehmer-unternehmen",
    number: 1,
    title: "Grundlagen: Was Unternehmer und Unternehmen leisten",
    free: true,
    intro:
      "Bevor man Managementwerkzeuge im Detail betrachtet, lohnt sich ein Blick auf die grundlegende Funktion, die Unternehmer und Unternehmen in einer Volkswirtschaft erfüllen — und warum unternehmerisches Handeln überhaupt ein eigenständiges Studienfach rechtfertigt.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Die Funktion des Unternehmers",
        body: [
          "Ökonomisch betrachtet erfüllt ein Unternehmer mehrere Funktionen gleichzeitig: Er koordiniert knappe Ressourcen (Kapital, Arbeit, Wissen) zu neuen Kombinationen, trägt dabei das unternehmerische Risiko einer ungewissen Zukunft, und identifiziert Marktchancen, die andere noch nicht erkannt haben. Der Ökonom Joseph Schumpeter prägte dafür den Begriff der 'schöpferischen Zerstörung': Innovative Unternehmer verdrängen etablierte Strukturen und treiben so wirtschaftlichen Wandel voran.",
          "Diese Funktion unterscheidet den Unternehmer vom bloßen Kapitalgeber oder Manager: Während Kapitalgeber Kapital bereitstellen und Manager bestehende Strukturen verwalten, trägt der Unternehmer die zentrale Unsicherheit darüber, ob eine neue Kombination von Ressourcen am Markt tatsächlich erfolgreich sein wird.",
        ],
        terms: [{ term: "Schöpferische Zerstörung", definition: "Prozess, bei dem innovative Unternehmen etablierte Marktstrukturen verdrängen und dadurch wirtschaftlichen Wandel antreiben." }],
        examples: [
          "Als Streaminganbieter den Markt für Videoverleih übernahmen, verdrängten sie etablierte Videotheken-Ketten fast vollständig — ein Beispiel für schöpferische Zerstörung, bei der eine neue Kombination von Technologie und Geschäftsmodell alte Strukturen ablöst.",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Unternehmenstypen und Rechtsformen im Überblick",
        body: [
          "Unternehmen unterscheiden sich u. a. nach Rechtsform: Personengesellschaften (z. B. Einzelunternehmen, GbR, OHG) zeichnen sich meist durch unbeschränkte persönliche Haftung der Gesellschafter aus, während Kapitalgesellschaften (z. B. GmbH, AG) die Haftung auf das Gesellschaftsvermögen beschränken, dafür aber höhere Gründungs- und Publizitätsanforderungen mit sich bringen.",
          "Die Wahl der Rechtsform hat weitreichende Konsequenzen für Haftung, Besteuerung, Kapitalbeschaffung und Entscheidungsstrukturen — sie ist deshalb eine der ersten strategischen Entscheidungen, die Gründer:innen treffen müssen.",
        ],
        table: {
          caption: "Gängige Rechtsformen im Überblick",
          headers: ["Rechtsform", "Haftung", "Mindestkapital", "Gründer:innen"],
          rows: [
            ["Einzelunternehmen", "unbeschränkt (Privatvermögen)", "keins", "1"],
            ["GbR", "unbeschränkt, gesamtschuldnerisch", "keins", "mind. 2"],
            ["OHG", "unbeschränkt, gesamtschuldnerisch", "keins", "mind. 2"],
            ["GmbH", "beschränkt auf Gesellschaftsvermögen", "25.000 €", "mind. 1"],
            ["AG", "beschränkt auf Gesellschaftsvermögen", "50.000 €", "mind. 1"],
          ],
        },
        terms: [
          { term: "Personengesellschaft", definition: "Unternehmensform mit meist unbeschränkter persönlicher Haftung der Gesellschafter." },
          { term: "Kapitalgesellschaft", definition: "Unternehmensform mit auf das Gesellschaftsvermögen beschränkter Haftung." },
        ],
        examples: [
          "Ein Handwerksbetrieb, der als Einzelunternehmen geführt wird, haftet im Fall einer Insolvenz mit dem gesamten Privatvermögen des Inhabers; wäre er als GmbH organisiert, wäre die Haftung grundsätzlich auf das Stammkapital der GmbH beschränkt.",
        ],
      },
    ],
  },
  // ==================== Kapitel 2 ====================
  {
    id: "gruenderpersonen-motive-gelegenheiten",
    number: 2,
    title: "Gründerpersonen, Motive und unternehmerische Gelegenheiten",
    free: false,
    intro:
      "Nicht jede gute Idee wird zu einem erfolgreichen Unternehmen, und nicht jede erfolgreiche Gründung beginnt mit einer besonders originellen Idee. Dieses Kapitel behandelt, was unternehmerische Gelegenheiten ausmacht und welche Motive Gründer:innen antreiben.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Unternehmerische Gelegenheiten erkennen",
        body: [
          "Eine unternehmerische Gelegenheit entsteht dort, wo eine Diskrepanz zwischen dem aktuellen Angebot am Markt und einem (noch unerfüllten oder unterversorgten) Bedarf besteht. Solche Gelegenheiten entstehen häufig durch externe Veränderungen: technologischer Wandel, regulatorische Änderungen, demografischer Wandel oder veränderte Konsumgewohnheiten schaffen Lücken, die vorher nicht existierten.",
          "Man unterscheidet dabei 'entdeckte' Gelegenheiten (die bereits latent existieren und von aufmerksamen Gründer:innen erkannt werden) von 'geschaffenen' Gelegenheiten (die erst durch unternehmerisches Handeln selbst entstehen, etwa durch die Schaffung eines völlig neuen Marktes).",
        ],
        terms: [{ term: "Unternehmerische Gelegenheit", definition: "Diskrepanz zwischen Marktangebot und (potenziellem) Bedarf, die unternehmerisch nutzbar ist." }],
        examples: [
          "Der Aufstieg mobiler Bezahldienste in Regionen mit geringer Bankeninfrastruktur entstand aus einer 'entdeckten' Gelegenheit: ein latenter Bedarf an Finanzdienstleistungen traf auf neu verfügbare Mobilfunktechnologie.",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Gründungsmotive: Necessity- und Opportunity-Entrepreneurship",
        body: [
          "Necessity-Entrepreneurship beschreibt Gründungen aus wirtschaftlicher Notwendigkeit (z. B. mangels alternativer Beschäftigungsmöglichkeiten), während Opportunity-Entrepreneurship Gründungen beschreibt, die eine aktiv erkannte Marktchance verfolgen, oft aus einer bestehenden, sicheren Position heraus. Empirisch zeigen opportunity-getriebene Gründungen im Durchschnitt höhere Überlebens- und Wachstumsraten.",
          "Diese Unterscheidung ist auch wirtschaftspolitisch relevant: Länder mit hohem Anteil an Necessity-Entrepreneurship weisen oft strukturelle Arbeitsmarktprobleme auf, während ein hoher Anteil an Opportunity-Entrepreneurship eher auf ein dynamisches, chancenreiches unternehmerisches Ökosystem hindeutet.",
        ],
        terms: [
          { term: "Necessity-Entrepreneurship", definition: "Unternehmensgründung aus wirtschaftlicher Notwendigkeit mangels Alternativen." },
          { term: "Opportunity-Entrepreneurship", definition: "Unternehmensgründung zur aktiven Verfolgung einer erkannten Marktchance." },
        ],
        examples: [
          "Eine Person, die nach Verlust ihrer Festanstellung mangels anderer Optionen ein kleines Geschäft eröffnet, ist ein typisches Beispiel für Necessity-Entrepreneurship; eine Ingenieurin, die eine sichere Stelle aufgibt, um eine erkannte Marktlücke bei nachhaltigen Baustoffen zu erschließen, betreibt Opportunity-Entrepreneurship.",
        ],
      },
      {
        id: "2-3",
        heading: "2.3 Persönlichkeitsmerkmale erfolgreicher Gründer:innen",
        body: [
          "Forschung zu Gründerpersönlichkeiten identifiziert wiederkehrende Merkmale: hohe Risikobereitschaft (nicht Risikoliebe im Sinne des Glücksspiels, sondern kalkulierte Risikobereitschaft), internale Kontrollüberzeugung (der Glaube, den eigenen Erfolg selbst maßgeblich beeinflussen zu können), und hohe Ambiguitätstoleranz (die Fähigkeit, unter großer Unsicherheit handlungsfähig zu bleiben).",
          "Wichtig ist die Einschränkung: Es gibt kein einheitliches 'Gründerprofil' mit garantierter Erfolgsvorhersage — diese Merkmale korrelieren statistisch mit Gründungserfolg, sind aber weder notwendig noch hinreichend für individuellen Erfolg.",
        ],
        terms: [{ term: "Internale Kontrollüberzeugung", definition: "Überzeugung, den eigenen Erfolg maßgeblich durch eigenes Handeln beeinflussen zu können." }],
        examples: [
          "Zwei Gründer mit identischer Geschäftsidee, aber unterschiedlicher Ambiguitätstoleranz, reagieren auf unerwartete Marktrückmeldungen unterschiedlich: Der ambiguitätstolerantere Gründer passt das Geschäftsmodell iterativ an, während der andere eher zögert, ohne vollständige Information zu handeln.",
        ],
      },
    ],
  },
  // ==================== Kapitel 3 ====================
  {
    id: "entscheiden-risiko-unsicherheit",
    number: 3,
    title: "Entscheiden unter Risiko und Unsicherheit",
    free: false,
    intro:
      "Unternehmerische Entscheidungen werden fast nie unter vollständiger Information getroffen. Dieses Kapitel behandelt das begriffliche Rüstzeug, um mit Risiko und Unsicherheit systematisch umzugehen.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Risiko versus Unsicherheit",
        body: [
          "Nach der klassischen Unterscheidung von Frank Knight liegt Risiko vor, wenn mögliche Ergebnisse bekannt sind und ihnen (objektive oder zumindest gut geschätzte subjektive) Wahrscheinlichkeiten zugeordnet werden können. Unsicherheit (im engeren, 'Knightschen' Sinn) liegt dagegen vor, wenn selbst die möglichen Ergebnisse oder ihre Wahrscheinlichkeiten nicht bekannt sind.",
          "Diese Unterscheidung ist praktisch bedeutsam: Unter Risiko lassen sich Entscheidungen mit Erwartungswertkalkülen (Kapitel 3.2) fundieren; unter echter Unsicherheit versagen solche Kalküle, und andere Entscheidungslogiken (z. B. Effectuation, Kapitel 5) werden relevanter.",
        ],
        table: {
          caption: "Risiko vs. Unsicherheit nach Frank Knight",
          headers: ["", "Risiko", "Unsicherheit (Knightscher Sinn)"],
          rows: [
            ["Mögliche Ergebnisse bekannt?", "ja", "nein"],
            ["Wahrscheinlichkeiten bekannt?", "ja (objektiv oder geschätzt)", "nein"],
            ["Geeignetes Instrument", "Erwartungswertkalküle (siehe 3.2)", "andere Logiken, z. B. Effectuation (siehe Kapitel 5)"],
          ],
        },
        terms: [
          { term: "Risiko (Knight)", definition: "Entscheidungssituation mit bekannten Ergebnissen und bekannten (geschätzten) Wahrscheinlichkeiten." },
          { term: "Unsicherheit (Knight)", definition: "Entscheidungssituation, in der Ergebnisse oder ihre Wahrscheinlichkeiten unbekannt sind." },
        ],
        examples: [
          "Die Entscheidung, in ein etabliertes Marktsegment mit bekannter Nachfragehistorie einzutreten, ist eine Entscheidung unter Risiko; die Entscheidung, ein Produkt für eine völlig neue, noch nicht existierende Technologie zu entwickeln, ist eine Entscheidung unter echter Unsicherheit.",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Erwartungswert und Entscheidungsbäume",
        body: [
          "Unter Risiko lässt sich eine Entscheidung mithilfe des Erwartungswerts E(X) = Σᵢ pᵢ·xᵢ bewerten, wobei pᵢ die Wahrscheinlichkeit und xᵢ das Ergebnis des i-ten möglichen Szenarios ist. Entscheidungsbäume visualisieren mehrstufige Entscheidungssituationen mit ihren jeweiligen Eintrittswahrscheinlichkeiten und Auszahlungen und erlauben es, den Erwartungswert verschiedener Handlungsalternativen systematisch zu vergleichen.",
          "Ein risikoneutraler Entscheider wählt stets die Alternative mit dem höchsten Erwartungswert; ein risikoaverser Entscheider kann jedoch eine Alternative mit niedrigerem Erwartungswert, aber geringerer Ergebnisstreuung bevorzugen — ein zentrales Konzept, das Managemententscheidungen unter Risiko von reiner Erwartungswertmaximierung unterscheidet.",
        ],
        formulas: ["E(X) = Σᵢ pᵢ · xᵢ"],
        formulasLatex: ["E(X) = \\sum_i p_i \\cdot x_i"],
        terms: [{ term: "Erwartungswert", definition: "Wahrscheinlichkeitsgewichteter Durchschnitt aller möglichen Ergebnisse einer Entscheidung." }],
        examples: [
          "Ein neues Produkt hat mit 30% Wahrscheinlichkeit Erfolg (Gewinn 500.000€) und mit 70% Wahrscheinlichkeit Misserfolg (Verlust 100.000€). Der Erwartungswert beträgt 0,3×500.000 + 0,7×(−100.000) = 150.000−70.000 = 80.000€ — positiv, aber mit erheblicher Ergebnisstreuung.",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Risikodiversifikation im unternehmerischen Kontext",
        body: [
          "Diversifikation reduziert das Gesamtrisiko, indem mehrere, möglichst unabhängige oder sogar gegenläufige Risikoquellen kombiniert werden — ein Prinzip, das nicht nur bei Finanzportfolios (siehe BWL 2: Finanzierung), sondern auch bei unternehmerischen Entscheidungen relevant ist, etwa bei der Diversifikation über mehrere Produktlinien oder Absatzmärkte.",
          "Vollständige Diversifikation ist für Gründer:innen oft praktisch nicht möglich, da ihr wichtigstes 'Vermögen' (Zeit, Humankapital, oft auch privates Kapital) stark in ein einziges Vorhaben konzentriert ist — ein struktureller Grund, warum unternehmerisches Risiko sich fundamental von diversifizierbarem Finanzmarktrisiko unterscheidet.",
        ],
        terms: [{ term: "Risikodiversifikation", definition: "Reduktion des Gesamtrisikos durch Kombination mehrerer, möglichst unabhängiger Risikoquellen." }],
        examples: [
          "Ein Gründer, der sein gesamtes Erspartes und seine volle Arbeitszeit in ein einziges Startup investiert, trägt ein hochkonzentriertes, kaum diversifiziertes Risiko — anders als ein Finanzinvestor, der kleine Beteiligungen an vielen verschiedenen Startups gleichzeitig hält.",
        ],
      },
    ],
  },
  // ==================== Kapitel 4 ====================
  {
    id: "geschaeftsmodelle-planung-effectuation",
    number: 4,
    title: "Geschäftsmodelle systematisch entwickeln und planen",
    free: false,
    intro:
      "Eine gute Idee braucht eine tragfähige Struktur, um daraus ein funktionierendes Unternehmen zu formen. Dieses Kapitel behandelt systematische Werkzeuge zur Geschäftsmodellentwicklung sowie zwei gegensätzliche Planungslogiken für junge Unternehmen.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Bausteine eines Geschäftsmodells",
        body: [
          "Ein Geschäftsmodell beschreibt systematisch, wie ein Unternehmen Wert schafft, an Kunden liefert und davon selbst einen Teil erfasst (monetarisiert). Zentrale Bausteine sind: das Werteversprechen (welches Problem wird für wen gelöst), die Kundensegmente, die Vertriebs- und Kommunikationskanäle, die Erlösströme, sowie die Kostenstruktur und benötigten Schlüsselressourcen.",
          "Die systematische Betrachtung all dieser Bausteine verhindert einen häufigen Gründungsfehler: sich ausschließlich auf das Produkt zu konzentrieren, ohne zu klären, wie genau Erlöse generiert werden und welche Kostenstruktur damit einhergeht.",
        ],
        terms: [{ term: "Werteversprechen", definition: "Kern eines Geschäftsmodells: welches Problem wird für welche Kundengruppe auf welche Weise gelöst." }],
        examples: [
          "Ein Softwareunternehmen mit identischem Produkt kann unterschiedliche Geschäftsmodelle verfolgen: Einmalverkauf einer Lizenz, monatliches Abonnement, oder kostenloses Basisprodukt mit kostenpflichtigen Zusatzfunktionen (Freemium) — jedes Modell impliziert eine andere Erlösstruktur.",
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Kausale Planung: der klassische Businessplan",
        body: [
          "Kausale Planung (Causation) geht von einem definierten Ziel aus und plant systematisch rückwärts, welche Mittel zu dessen Erreichung nötig sind — der klassische Businessplan mit Marktanalyse, Finanzplanung und Meilensteinen folgt dieser Logik. Sie eignet sich gut in Situationen mit vorhersagbaren Märkten und bekannten Nachfragestrukturen.",
          "Ein Nachteil kausaler Planung zeigt sich bei hoher Marktunsicherheit (siehe Kapitel 3): Detaillierte Prognosen über mehrere Jahre werden bei neuartigen, noch unerprobten Geschäftsideen schnell unzuverlässig, da viele der zugrundeliegenden Annahmen erst durch Markttests überprüft werden können.",
        ],
        terms: [{ term: "Causation (kausale Planung)", definition: "Planungslogik, die von einem definierten Ziel ausgeht und die dafür nötigen Mittel plant." }],
        examples: [
          "Ein Unternehmen, das ein bekanntes Produkt (z. B. Brot) in einem etablierten Markt anbietet, kann Nachfrage und Kosten relativ verlässlich prognostizieren und somit gut mit kausaler Planung arbeiten.",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Effectuation: Planung unter echter Unsicherheit",
        body: [
          "Effectuation kehrt die Planungslogik um: Statt von einem festen Ziel auszugehen, startet man von den verfügbaren Mitteln (wer bin ich, was weiß ich, wen kenne ich) und entwickelt das Ziel iterativ, während man mit Partnern und dem Markt interagiert. Zentrale Prinzipien: das 'leistbare Verlust'-Prinzip (statt erwarteter Rendite zu maximieren, wird nur so viel investiert, wie im Misserfolgsfall verkraftbar ist) und die Nutzung von Kontingenzen (unerwartete Ereignisse werden als Chance statt als Störung behandelt).",
          "Effectuation eignet sich besonders für Situationen mit echter (Knightscher) Unsicherheit, in denen detaillierte Vorabplanung wenig verlässlich ist — sie ersetzt Prognose durch iteratives Experimentieren und Anpassen, ein Ansatz, der eng mit dem im nächsten Kapitel behandelten Lean-Startup-Prinzip verwandt ist.",
        ],
        terms: [
          { term: "Effectuation", definition: "Planungslogik, die von verfügbaren Mitteln statt von einem festen Ziel ausgeht und Ziele iterativ entwickelt." },
          { term: "Leistbarer-Verlust-Prinzip", definition: "Investitionsentscheidung basierend auf dem maximal verkraftbaren Verlust statt der erwarteten Rendite." },
        ],
        examples: [
          "Statt einen detaillierten Fünf-Jahres-Finanzplan zu erstellen, investiert eine Gründerin zunächst nur einen kleinen, für sie verkraftbaren Betrag in einen ersten Prototyp und passt ihr Geschäftsmodell basierend auf dem Feedback früher Kunden schrittweise an.",
        ],
      },
    ],
  },
  // ==================== Kapitel 5 ====================
  {
    id: "lean-startup-design-thinking",
    number: 5,
    title: "Vom Prototyp zum Pivot: Lean Startup und Design Thinking",
    free: false,
    intro:
      "Zwei eng verwandte Methoden haben die moderne Gründungspraxis maßgeblich geprägt: Lean Startup (schnelles, datengetriebenes Testen von Geschäftshypothesen) und Design Thinking (nutzerzentrierte Problemlösung). Dieses Kapitel stellt beide vor.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Das Minimum Viable Product (MVP)",
        body: [
          "Ein Minimum Viable Product ist die einfachste Version eines Produkts, die es erlaubt, mit minimalem Aufwand maximales verwertbares Lernen über Kunden und Markt zu gewinnen. Anders als ein reduzierter, aber vollständiger Funktionsumfang zielt ein MVP gezielt darauf ab, eine bestimmte Kernhypothese über das Geschäftsmodell zu testen (z. B. 'sind Kunden bereit, dafür zu bezahlen?').",
          "Der Build-Measure-Learn-Zyklus fasst die Lean-Startup-Logik zusammen: Ein MVP wird gebaut, sein Erfolg anhand vorab definierter Metriken gemessen, und aus den Ergebnissen wird gelernt, ob das Geschäftsmodell in dieser Form fortgeführt oder angepasst werden sollte.",
        ],
        terms: [{ term: "Minimum Viable Product (MVP)", definition: "Einfachste Produktversion, die maximales verwertbares Lernen mit minimalem Aufwand ermöglicht." }],
        examples: [
          "Statt eine vollständige App zu programmieren, testet ein Gründer die Kernhypothese ('Wollen Kunden einen Lebensmittel-Abo-Service?') zunächst mit einer einfachen Landingpage und manueller Bestellabwicklung per E-Mail — ein minimaler, aber ausreichender Test der Kernannahme.",
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Pivot: die strategische Kurskorrektur",
        body: [
          "Ein Pivot ist eine grundlegende, strukturierte Änderung einer oder mehrerer Geschäftsmodell-Komponenten (Kundensegment, Werteversprechen, Erlösmodell) basierend auf validiertem Lernen aus dem Markt — im Unterschied zu einer bloßen unsystematischen Planänderung. Typische Pivot-Arten sind der Kundensegment-Pivot (gleiches Produkt, andere Zielgruppe) und der Zoom-in-Pivot (ein einzelnes Feature wird zum gesamten Produkt).",
          "Ein Pivot ist kein Zeichen des Scheiterns, sondern ein struktureller Bestandteil des Lean-Startup-Ansatzes: Er erlaubt es, frühzeitig gesammeltes Marktfeedback zu nutzen, bevor größere Ressourcen in eine nicht-tragfähige Richtung investiert werden.",
        ],
        terms: [{ term: "Pivot", definition: "Strukturierte Kurskorrektur einer oder mehrerer Geschäftsmodell-Komponenten basierend auf validiertem Marktlernen." }],
        examples: [
          "Ein Unternehmen, das ursprünglich eine Foto-Sharing-App für Endkonsumenten entwickelte, aber feststellt, dass vor allem kleine Unternehmen die integrierten Bildbearbeitungswerkzeuge nutzen, vollzieht einen Kundensegment-Pivot hin zu einem B2B-Angebot.",
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Design Thinking als nutzerzentrierter Prozess",
        body: [
          "Design Thinking strukturiert Problemlösung in (meist iterativ durchlaufenen) Phasen: Verstehen und Beobachten der Nutzer (Empathize), Problemdefinition (Define), Ideenfindung (Ideate), Prototyping und Testen. Der Ansatz betont explizit, zunächst tief in die tatsächlichen Bedürfnisse der Nutzer einzutauchen, bevor Lösungen entwickelt werden — ein Gegenpol zu rein technologiegetriebener Produktentwicklung.",
          "Design Thinking und Lean Startup ergänzen sich in der Praxis oft: Design Thinking liefert Methoden zur qualitativen Bedürfniserkundung und Ideengenerierung, während Lean Startup die daraus entstandenen Hypothesen quantitativ am Markt testet.",
        ],
        terms: [{ term: "Design Thinking", definition: "Nutzerzentrierter, iterativer Problemlösungsprozess mit den Phasen Empathize, Define, Ideate, Prototype, Test." }],
        examples: [
          "Ein Team, das eine neue Krankenhaus-Software entwickelt, verbringt zunächst Zeit direkt bei Pflegekräften vor Ort (Empathize), um tatsächliche Arbeitsabläufe zu verstehen, statt direkt mit der technischen Umsetzung einer vorab angenommenen Lösung zu beginnen.",
        ],
      },
    ],
  },
  // ==================== Kapitel 6 ====================
  {
    id: "organisation-des-unternehmens",
    number: 6,
    title: "Organisation des Unternehmens",
    free: false,
    intro:
      "Mit wachsender Unternehmensgröße wird die formale Organisationsstruktur zunehmend entscheidend für Effizienz und Entscheidungsgeschwindigkeit. Dieses Kapitel behandelt grundlegende Organisationsformen und ihre jeweiligen Vor- und Nachteile.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Funktionale versus divisionale Organisation",
        body: [
          "Eine funktionale Organisation gliedert das Unternehmen nach betrieblichen Funktionen (Produktion, Marketing, Finanzen, F&E) — dies fördert Spezialisierung und Skaleneffekte innerhalb jeder Funktion, erschwert aber die Koordination zwischen Funktionen bei produkt- oder marktspezifischen Entscheidungen. Eine divisionale Organisation gliedert dagegen nach Produkten, Regionen oder Kundengruppen, wobei jede Division weitgehend eigenständig mit eigenen Funktionsbereichen operiert.",
          "Divisionale Strukturen erlauben schnellere, marktnahe Entscheidungen und klare Erfolgsverantwortung pro Division, führen aber häufig zu Doppelstrukturen (jede Division braucht z. B. eigenes Marketing) und höheren Gesamtkosten als eine zentralisierte funktionale Struktur.",
        ],
        table: {
          caption: "Funktionale vs. divisionale Organisation",
          headers: ["", "Funktionale Organisation", "Divisionale Organisation"],
          rows: [
            ["Gliederung nach", "betrieblichen Funktionen (Produktion, Marketing, Finanzen, F&E)", "Produkten, Regionen oder Kundengruppen"],
            ["Vorteil", "Spezialisierung, Skaleneffekte je Funktion", "marktnahe, schnelle Entscheidungen, klare Erfolgsverantwortung"],
            ["Nachteil", "erschwerte Koordination zwischen Funktionen", "Doppelstrukturen, höhere Gesamtkosten"],
          ],
        },
        terms: [
          { term: "Funktionale Organisation", definition: "Gliederung nach betrieblichen Funktionen wie Produktion, Marketing, Finanzen." },
          { term: "Divisionale Organisation", definition: "Gliederung nach Produkten, Regionen oder Kundengruppen mit weitgehend eigenständigen Divisionen." },
        ],
        examples: [
          "Ein Automobilkonzern mit getrennten Divisionen für Nutzfahrzeuge, PKW und Motorräder (jeweils mit eigenem Marketing, Vertrieb und Produktion) folgt einer divisionalen Struktur, während ein kleineres Unternehmen mit zentraler Marketing-, Produktions- und Finanzabteilung funktional organisiert ist.",
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Leitungsspanne und Hierarchietiefe",
        body: [
          "Die Leitungsspanne (Kontrollspanne) gibt an, wie viele direkte Unterstellte eine Führungskraft koordiniert. Eine große Leitungsspanne führt zu flachen Hierarchien (wenige Führungsebenen), eine kleine Leitungsspanne zu tiefen Hierarchien (viele Führungsebenen). Flache Hierarchien fördern schnellere Kommunikationswege und größere Autonomie der Mitarbeitenden, setzen aber gleichzeitig höhere Selbstorganisationsfähigkeit voraus.",
          "Die optimale Leitungsspanne hängt von der Aufgabenkomplexität ab: Bei stark standardisierten, routinierten Aufgaben sind größere Leitungsspannen handhabbar; bei komplexen, individuell zu koordinierenden Aufgaben sind kleinere Leitungsspannen mit intensiverer Führung nötig.",
        ],
        terms: [{ term: "Leitungsspanne", definition: "Anzahl der direkt unterstellten Mitarbeitenden einer Führungskraft." }],
        examples: [
          "Ein Fließbandvorarbeiter mit hochstandardisierten Arbeitsabläufen kann typischerweise deutlich mehr Mitarbeitende koordinieren als die Leitung eines Forschungsteams mit hochkomplexen, individuellen Aufgabenstellungen.",
        ],
      },
      {
        id: "6-3",
        heading: "6.3 Zentralisierung versus Dezentralisierung von Entscheidungen",
        body: [
          "Zentralisierte Entscheidungsstrukturen bündeln Entscheidungsbefugnis an der Unternehmensspitze — dies fördert Konsistenz und Kontrolle, verlangsamt aber Entscheidungen und überlastet die Spitze bei hoher Entscheidungsdichte. Dezentralisierte Strukturen verlagern Entscheidungsbefugnis auf niedrigere Ebenen, was schnellere, marktnähere Entscheidungen ermöglicht, aber ein höheres Maß an Vertrauen und klaren Leitplanken erfordert.",
          "Diese Wahl hängt eng mit der Unsicherheit des Marktumfelds zusammen: In sich schnell wandelnden Märkten begünstigt Dezentralisierung schnellere Anpassung, während in stabilen, gut planbaren Umfeldern zentralisierte Kontrolle Konsistenzvorteile bietet.",
        ],
        terms: [{ term: "Dezentralisierung", definition: "Verlagerung von Entscheidungsbefugnis auf niedrigere Hierarchieebenen." }],
        examples: [
          "Eine international tätige Handelskette dezentralisiert typischerweise Sortiments- und Preisentscheidungen auf lokale Filialleitungen, um regional unterschiedliche Kundenpräferenzen schnell berücksichtigen zu können.",
        ],
      },
    ],
  },
  // ==================== Kapitel 7 ====================
  {
    id: "strategische-analyse-optionen",
    number: 7,
    title: "Strategische Analyse und strategische Optionen",
    free: false,
    intro:
      "Bevor ein Unternehmen strategische Entscheidungen trifft, muss es sein Umfeld und seine eigenen Ressourcen systematisch analysieren. Dieses Kapitel behandelt zentrale Analysewerkzeuge und die wichtigsten strategischen Grundoptionen.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Branchenstrukturanalyse",
        body: [
          "Die Branchenstrukturanalyse (angelehnt an das Modell der fünf Wettbewerbskräfte) untersucht die Attraktivität einer Branche anhand von fünf Kräften: Rivalität unter bestehenden Wettbewerbern, Verhandlungsmacht von Lieferanten, Verhandlungsmacht von Abnehmern, Bedrohung durch neue Anbieter (Markteintrittsbarrieren), und Bedrohung durch Substitutionsprodukte.",
          "Eine Branche mit hoher Rivalität, geringen Markteintrittsbarrieren und starker Verhandlungsmacht der Abnehmer ist strukturell wenig attraktiv für dauerhaft überdurchschnittliche Gewinne — unabhängig davon, wie gut ein einzelnes Unternehmen operativ geführt wird.",
        ],
        terms: [{ term: "Fünf-Kräfte-Modell", definition: "Analyserahmen zur Bewertung der Branchenattraktivität anhand von Rivalität, Lieferanten-/Abnehmermacht, Markteintritts- und Substitutionsbedrohung." }],
        examples: [
          "Die Fluggesellschaftsbranche gilt strukturell oft als wenig attraktiv: hohe Rivalität zwischen etablierten Anbietern, hohe Verhandlungsmacht von Flughäfen und Flugzeugherstellern, und leichte Vergleichbarkeit für preissensible Kunden drücken die durchschnittliche Branchenrentabilität.",
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Ressourcenbasierte Strategieanalyse",
        body: [
          "Der ressourcenbasierte Ansatz betrachtet nicht das externe Marktumfeld, sondern die internen Ressourcen und Fähigkeiten eines Unternehmens als Quelle nachhaltigen Wettbewerbsvorteils. Nach dem VRIO-Rahmen ist eine Ressource strategisch wertvoll, wenn sie wertvoll (Value), selten (Rarity), schwer imitierbar (Imitability) und organisatorisch nutzbar gemacht (Organization) ist.",
          "Fehlt eines dieser vier Kriterien, verpufft der potenzielle Wettbewerbsvorteil: Eine wertvolle, aber leicht imitierbare Ressource (z. B. eine einfach kopierbare Marketingkampagne) liefert höchstens einen temporären, keinen nachhaltigen Vorteil.",
        ],
        terms: [{ term: "VRIO-Rahmen", definition: "Analyserahmen zur Bewertung, ob eine Ressource nachhaltigen Wettbewerbsvorteil begründet (Value, Rarity, Imitability, Organization)." }],
        examples: [
          "Ein einzigartiges, patentgeschütztes Herstellungsverfahren erfüllt typischerweise alle vier VRIO-Kriterien und begründet einen nachhaltigen Wettbewerbsvorteil, während eine allgemein verfügbare Standardtechnologie meist an der Seltenheits- oder Imitierbarkeitshürde scheitert.",
        ],
      },
      {
        id: "7-3",
        heading: "7.3 Wachstumsstrategien: die Produkt-Markt-Matrix",
        body: [
          "Die Produkt-Markt-Matrix (Ansoff-Matrix) unterscheidet vier Wachstumsstrategien: Marktdurchdringung (bestehendes Produkt, bestehender Markt — z. B. durch intensivere Werbung), Marktentwicklung (bestehendes Produkt, neuer Markt — z. B. Internationalisierung), Produktentwicklung (neues Produkt, bestehender Markt) und Diversifikation (neues Produkt, neuer Markt).",
          "Das Risiko steigt systematisch von Marktdurchdringung (geringstes Risiko, da sowohl Produkt als auch Markt bereits bekannt sind) zu Diversifikation (höchstes Risiko, da weder Produkt noch Markt vertraut sind) — diese Einordnung hilft, Wachstumsentscheidungen bewusst gegen ihr jeweiliges Risikoprofil abzuwägen.",
        ],
        table: {
          caption: "Die Produkt-Markt-Matrix (Ansoff-Matrix)",
          headers: ["", "Bestehendes Produkt", "Neues Produkt"],
          rows: [
            ["Bestehender Markt", "Marktdurchdringung (geringstes Risiko)", "Produktentwicklung"],
            ["Neuer Markt", "Marktentwicklung", "Diversifikation (höchstes Risiko)"],
          ],
        },
        terms: [{ term: "Ansoff-Matrix", definition: "Vier-Felder-Modell zur Einordnung von Wachstumsstrategien nach Produkt- und Marktneuheit." }],
        examples: [
          "Ein Süßwarenhersteller, der ein bestehendes Produkt erstmals in einem neuen Auslandsmarkt vertreibt, verfolgt eine Marktentwicklungsstrategie; würde er stattdessen ein gänzlich neues Produkt in einem neuen Markt einführen, wäre dies Diversifikation mit entsprechend höherem Risiko.",
        ],
      },
    ],
  },
  // ==================== Kapitel 8 ====================
  {
    id: "corporate-governance-personalfuehrung",
    number: 8,
    title: "Corporate Governance und Personalführung",
    free: false,
    intro:
      "Sobald Eigentum und operative Führung eines Unternehmens auseinanderfallen, entstehen strukturelle Interessenkonflikte. Dieses Kapitel behandelt Governance-Mechanismen sowie Grundprinzipien effektiver Personalführung.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Das Prinzipal-Agent-Problem",
        body: [
          "Das Prinzipal-Agent-Problem entsteht, wenn ein Prinzipal (z. B. Aktionäre) einen Agenten (z. B. das Management) mit Entscheidungen betraut, ohne dessen Handeln vollständig beobachten zu können, und beide Parteien unterschiedliche Interessen verfolgen (der Agent könnte z. B. eigenen Nutzen statt Aktionärsinteressen maximieren). Diese Informationsasymmetrie erzeugt sogenannte Agenturkosten: Kosten der Überwachung, Kosten fehlgeleiteter Entscheidungen, und Kosten von Anreizmechanismen zur Interessensangleichung.",
          "Corporate Governance umfasst die Gesamtheit der Strukturen und Mechanismen, die dieses Problem eindämmen sollen: unabhängige Aufsichtsgremien, leistungsabhängige Vergütung, und Transparenzpflichten gegenüber Investoren.",
        ],
        terms: [
          { term: "Prinzipal-Agent-Problem", definition: "Interessenkonflikt zwischen einem Auftraggeber (Prinzipal) und einem mit Entscheidungen betrauten Beauftragten (Agent) bei unvollständiger Beobachtbarkeit." },
          { term: "Agenturkosten", definition: "Kosten der Überwachung, Fehlentscheidungen und Anreizsetzung im Prinzipal-Agent-Verhältnis." },
        ],
        examples: [
          "Ein Vorstand, der kurzfristig den eigenen Bonus maximiert, indem er riskante Projekte mit hohem erwarteten kurzfristigen Gewinn (aber hohem langfristigen Risiko für die Aktionäre) bevorzugt, illustriert ein klassisches Prinzipal-Agent-Problem.",
        ],
      },
      {
        id: "8-2",
        heading: "8.2 Anreizsysteme zur Interessensangleichung",
        body: [
          "Anreizsysteme wie Aktienoptionen, gewinnabhängige Boni oder mehrjährige Vergütungsaufschübe (Deferred Compensation) versuchen, die Interessen des Managements (Agenten) an die der Eigentümer (Prinzipale) anzugleichen, indem der persönliche finanzielle Erfolg des Managements an den langfristigen Unternehmenserfolg gekoppelt wird.",
          "Schlecht gestaltete Anreizsysteme können jedoch unbeabsichtigte Fehlanreize setzen: Eine reine Kopplung an kurzfristige Aktienkurse kann kurzfristiges Denken auf Kosten langfristiger Investitionen fördern — ein Beispiel dafür, dass Anreizdesign selbst sorgfältige Abwägung erfordert.",
        ],
        terms: [{ term: "Deferred Compensation", definition: "Vergütungsbestandteil, der erst nach mehreren Jahren ausgezahlt wird, um langfristiges Denken zu fördern." }],
        examples: [
          "Ein Vergütungssystem, das Boni über einen Zeitraum von vier Jahren streckt und bei nachträglich festgestelltem Fehlverhalten zurückfordern kann (Clawback-Klausel), reduziert den Anreiz zu kurzfristig übertriebenem Risikoverhalten.",
        ],
      },
      {
        id: "8-3",
        heading: "8.3 Führungsstile und Mitarbeitermotivation",
        body: [
          "Führungsstile lassen sich grob zwischen aufgabenorientiert (Fokus auf Zielerreichung und Kontrolle) und mitarbeiterorientiert (Fokus auf Beziehung, Entwicklung und Autonomie der Geführten) einordnen; moderne Führungsforschung betont zunehmend situative Führung, bei der der passende Stil vom Reifegrad und der Aufgabe der Geführten abhängt.",
          "Zur Mitarbeitermotivation unterscheidet man intrinsische Motivation (Handeln aus Freude an der Tätigkeit selbst) von extrinsischer Motivation (Handeln wegen externer Belohnung/Bestrafung). Übermäßig starke extrinsische Anreize können nachweislich intrinsische Motivation verdrängen (Verdrängungseffekt/Crowding-out-Effekt) — ein wichtiges Argument gegen rein monetäre Steuerung kreativer oder sinnstiftender Tätigkeiten.",
        ],
        terms: [
          { term: "Intrinsische Motivation", definition: "Handlungsantrieb aus Freude oder Sinnhaftigkeit der Tätigkeit selbst, unabhängig von externer Belohnung." },
          { term: "Crowding-out-Effekt (Motivation)", definition: "Verdrängung intrinsischer Motivation durch übermäßig starke extrinsische Anreize." },
        ],
        examples: [
          "Führt eine gemeinnützige Organisation eine leistungsabhängige Geldprämie für ehrenamtliche Tätigkeit ein, kann dies paradoxerweise die Gesamtmotivation senken, da die intrinsische Motivation ('ich helfe, weil es mir wichtig ist') durch die externe Bezahlung teilweise verdrängt wird.",
        ],
      },
    ],
  },
  // ==================== Kapitel 9 ====================
  {
    id: "kundenverhalten-verstehen",
    number: 9,
    title: "Kundenverhalten verstehen: von Daten zu Erkenntnissen",
    free: false,
    intro:
      "Erfolgreiches Marketing beginnt mit einem fundierten Verständnis der Kundschaft. Dieses Kapitel behandelt Grundmodelle des Konsumentenverhaltens und die wichtigsten Marktforschungsmethoden.",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Der Kaufentscheidungsprozess",
        body: [
          "Der klassische Kaufentscheidungsprozess umfasst fünf Phasen: Problemerkennung (ein Bedarf wird bewusst), Informationssuche, Bewertung von Alternativen, Kaufentscheidung, und Verhalten nach dem Kauf (Zufriedenheit oder kognitive Dissonanz). Die Intensität, mit der jede Phase durchlaufen wird, hängt stark vom wahrgenommenen Risiko und Involvement der Kaufentscheidung ab.",
          "Bei Low-Involvement-Käufen (z. B. alltägliche Güter geringen Werts) werden viele Phasen verkürzt oder übersprungen, während High-Involvement-Käufe (z. B. eine Immobilie) typischerweise eine ausführliche, bewusste Durchquerung aller Phasen erfahren.",
        ],
        terms: [{ term: "Kognitive Dissonanz", definition: "Nach dem Kauf auftretendes Unbehagen durch Zweifel an der Richtigkeit der getroffenen Entscheidung." }],
        examples: [
          "Beim Kauf einer Zahnpasta durchläuft ein Konsument den Entscheidungsprozess meist beiläufig und gewohnheitsmäßig (Low Involvement), während der Kauf eines Eigenheims typischerweise eine monatelange, bewusste Informationssuche und Alternativenbewertung nach sich zieht (High Involvement).",
        ],
      },
      {
        id: "9-2",
        heading: "9.2 Marktforschung: qualitative und quantitative Methoden",
        body: [
          "Qualitative Marktforschung (Fokusgruppen, Tiefeninterviews) liefert tiefes, aber nicht statistisch verallgemeinerbares Verständnis von Kundenmotiven und -bedürfnissen — sie eignet sich besonders zur explorativen Hypothesengenerierung. Quantitative Marktforschung (standardisierte Befragungen, Experimente) liefert dagegen statistisch belastbare, verallgemeinerbare Ergebnisse über eine größere Stichprobe, aber mit weniger Tiefe pro einzelner Antwort.",
          "Ein methodisch sauberer Marktforschungsprozess kombiniert beide Ansätze oft sequentiell: qualitative Methoden zur Hypothesengenerierung, gefolgt von quantitativer Validierung an einer größeren, repräsentativen Stichprobe.",
        ],
        terms: [
          { term: "Qualitative Marktforschung", definition: "Forschungsmethoden mit Fokus auf tiefes, nicht verallgemeinerbares Verständnis (z. B. Fokusgruppen)." },
          { term: "Quantitative Marktforschung", definition: "Forschungsmethoden mit Fokus auf statistisch verallgemeinerbare Ergebnisse (z. B. standardisierte Befragungen)." },
        ],
        examples: [
          "Ein Unternehmen führt zunächst Tiefeninterviews mit zehn Kund:innen, um mögliche Gründe für sinkende Zufriedenheit zu explorieren, und testet die daraus entstandenen Hypothesen anschließend mit einer standardisierten Umfrage an 2.000 Kund:innen.",
        ],
      },
      {
        id: "9-3",
        heading: "9.3 Marktsegmentierung und Zielgruppenauswahl",
        body: [
          "Marktsegmentierung teilt einen heterogenen Gesamtmarkt in homogenere Teilgruppen (Segmente) ein, üblicherweise nach demografischen, geografischen, psychografischen (Werte, Lebensstil) oder verhaltensbezogenen Kriterien (Kaufhäufigkeit, Markentreue). Ein sinnvolles Segment muss messbar, ausreichend groß, erreichbar (über geeignete Kanäle ansprechbar) und intern homogen bei gleichzeitig hoher Heterogenität zu anderen Segmenten sein.",
          "Auf Basis der Segmentierung wählt das Unternehmen strategisch aus, welche Segmente es gezielt bearbeitet (Targeting), und positioniert sein Angebot entsprechend gegenüber den ausgewählten Zielgruppen (Positionierung) — die Grundlage für die im nächsten Kapitel behandelte konkrete Produkt- und Preisgestaltung.",
        ],
        terms: [{ term: "Marktsegmentierung", definition: "Aufteilung eines heterogenen Gesamtmarkts in homogenere, gezielt ansprechbare Teilgruppen." }],
        examples: [
          "Ein Fitnessstudio-Betreiber könnte den Gesamtmarkt nach Lebensstil segmentieren: leistungsorientierte Sportler:innen, gesundheitsbewusste Gelegenheitssportler:innen, und sozial motivierte Kursbesucher:innen — jedes Segment erfordert unterschiedliche Ansprache und Angebote.",
        ],
      },
    ],
  },
  // ==================== Kapitel 10 ====================
  {
    id: "produktgestaltung-preis-kommunikation",
    number: 10,
    title: "Produktgestaltung, Preispolitik und Kommunikationspolitik",
    free: false,
    intro:
      "Nachdem Zielgruppen definiert sind, muss ein Unternehmen konkrete Marketinginstrumente einsetzen. Dieses Kapitel behandelt die drei zentralen Stellhebel Produkt, Preis und Kommunikation.",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Kundenorientierte Produktgestaltung",
        body: [
          "Produkte lassen sich in einen Kernnutzen (das grundlegende Bedürfnis, das befriedigt wird), ein tatsächliches Produkt (konkrete Ausgestaltung: Design, Qualität, Marke, Verpackung) und ein erweitertes Produkt (zusätzliche Serviceleistungen wie Garantie, Kundendienst, Lieferung) unterteilen. Erfolgreiche Produktgestaltung berücksichtigt alle drei Ebenen, nicht nur die physische Kernleistung.",
          "Das Kano-Modell klassifiziert Produktmerkmale nach ihrer Wirkung auf die Kundenzufriedenheit: Basismerkmale (ihr Fehlen erzeugt starke Unzufriedenheit, ihr Vorhandensein wird aber als selbstverständlich hingenommen), Leistungsmerkmale (Zufriedenheit steigt proportional zur Ausprägung) und Begeisterungsmerkmale (unerwartete Zusatzleistungen, die überproportionale Zufriedenheit erzeugen).",
        ],
        terms: [{ term: "Kano-Modell", definition: "Klassifikation von Produktmerkmalen nach ihrer Wirkung auf Kundenzufriedenheit: Basis-, Leistungs- und Begeisterungsmerkmale." }],
        examples: [
          "Bei einem Hotelzimmer ist funktionierendes WLAN heute meist ein Basismerkmal (Fehlen erzeugt starke Unzufriedenheit, Vorhandensein wird kaum bemerkt), während ein unerwartetes Willkommensgeschenk ein Begeisterungsmerkmal darstellt (erzeugt überproportionale positive Überraschung).",
        ],
      },
      {
        id: "10-2",
        heading: "10.2 Preispolitische Grundstrategien",
        body: [
          "Kostenorientierte Preisbildung setzt den Preis auf Basis der Stückkosten plus einem Gewinnaufschlag fest — einfach zu berechnen, ignoriert aber die tatsächliche Zahlungsbereitschaft der Kunden. Nachfrageorientierte Preisbildung orientiert sich stattdessen an der Preiselastizität der Nachfrage und der Zahlungsbereitschaft verschiedener Kundensegmente; wettbewerbsorientierte Preisbildung orientiert sich primär an den Preisen der Konkurrenz.",
          "Preisdifferenzierung (unterschiedliche Preise für unterschiedliche Kundengruppen, Zeitpunkte oder Mengen desselben Produkts) erlaubt es, einen größeren Teil der unterschiedlichen Zahlungsbereitschaften am Markt abzuschöpfen, als ein einheitlicher Preis dies könnte.",
        ],
        terms: [
          { term: "Kostenorientierte Preisbildung", definition: "Preisfestlegung auf Basis der Stückkosten zuzüglich eines Gewinnaufschlags." },
          { term: "Preisdifferenzierung", definition: "Unterschiedliche Preise für dasselbe Produkt je nach Kundengruppe, Zeitpunkt oder Menge." },
        ],
        examples: [
          "Ein Kino, das für dieselbe Vorstellung unterschiedliche Preise für Studierende, Senior:innen und Berufstätige verlangt, betreibt eine Form der Preisdifferenzierung, um unterschiedliche Zahlungsbereitschaften gezielt abzuschöpfen.",
        ],
      },
      {
        id: "10-3",
        heading: "10.3 Kommunikationspolitik und Werbewirkung",
        body: [
          "Das AIDA-Modell beschreibt idealtypisch die Stufen, die Werbekommunikation bei Empfänger:innen durchlaufen soll: Attention (Aufmerksamkeit erregen), Interest (Interesse wecken), Desire (Verlangen nach dem Produkt erzeugen) und Action (zur Handlung, meist Kauf, bewegen). Jede Stufe kann als Filter verstanden werden, an dem ein Teil der Zielgruppe 'verloren geht', bevor die nächste Stufe erreicht wird.",
          "Die Wirkung von Werbemaßnahmen lässt sich anhand verschiedener Kennzahlen messen: Reichweite (wie viele Personen der Zielgruppe wurden erreicht), Erinnerungswirkung (Recall), und letztlich Konversionsrate (Anteil der Erreichten, die tatsächlich eine gewünschte Handlung ausführen) — nur die Kombination dieser Kennzahlen ergibt ein vollständiges Bild der Werbewirksamkeit.",
        ],
        formulas: ["Konversionsrate = Anzahl Handlungen / Anzahl Kontakte × 100%"],
        formulasLatex: ["\\text{Konversionsrate} = \\dfrac{\\text{Anzahl Handlungen}}{\\text{Anzahl Kontakte}}\\times 100\\%"],
        terms: [{ term: "AIDA-Modell", definition: "Stufenmodell der Werbewirkung: Attention, Interest, Desire, Action." }],
        examples: [
          "Erreicht eine Online-Werbeanzeige 100.000 Personen, klicken 4.000 davon (Interesse), und kaufen letztlich 200 davon das beworbene Produkt, beträgt die Konversionsrate bezogen auf die Gesamtkontakte 200/100.000 × 100% = 0,2%.",
        ],
      },
    ],
  },
  // ==================== Kapitel 11 ====================
  {
    id: "clv-customer-equity",
    number: 11,
    title: "Erfolg beim Kunden messen: CLV und Customer Equity",
    free: false,
    intro:
      "Marketingerfolg lässt sich nicht nur an kurzfristigen Verkaufszahlen ablesen. Dieses abschließende Kapitel behandelt, wie der langfristige finanzielle Wert einer Kundenbeziehung systematisch quantifiziert werden kann.",
    sections: [
      {
        id: "11-1",
        heading: "11.1 Der Customer Lifetime Value (CLV)",
        body: [
          "Der Customer Lifetime Value schätzt den gesamten Barwert aller zukünftigen Deckungsbeiträge, die ein Kunde über die gesamte Dauer der Geschäftsbeziehung erwarten lässt. In einer vereinfachten Form (konstanter jährlicher Deckungsbeitrag DB, konstante Kundenbindungsrate r, Kalkulationszinssatz i) lässt sich der CLV berechnen als CLV = DB · r/(1+i−r).",
          "Der CLV verschiebt den Blick von einer einzelnen Transaktion hin zur gesamten Kundenbeziehung: Ein Kunde mit niedrigem Erstkauf, aber hoher Bindungsrate, kann langfristig wertvoller sein als ein Kunde mit hohem Erstkauf, aber geringer Wiederkaufswahrscheinlichkeit.",
        ],
        formulas: ["CLV = DB · r / (1+i−r)"],
        formulasLatex: ["CLV = DB \\cdot \\dfrac{r}{1+i-r}"],
        terms: [{ term: "Customer Lifetime Value (CLV)", definition: "Barwert aller zukünftig erwarteten Deckungsbeiträge eines Kunden über die gesamte Geschäftsbeziehung." }],
        examples: [
          "Ein Kunde mit jährlichem Deckungsbeitrag DB=200€, Bindungsrate r=80% und Kalkulationszinssatz i=10% hat einen CLV von 200×0,8/(1+0,1−0,8) = 160/0,3 ≈ 533€ — deutlich mehr als der einmalige Deckungsbeitrag von 200€.",
        ],
      },
      {
        id: "11-2",
        heading: "11.2 Kundenbindungsrate und ihre Treiber",
        body: [
          "Die Kundenbindungsrate (Retention Rate) misst den Anteil der Kunden einer Periode, die auch in der Folgeperiode noch aktiv sind. Bereits kleine Verbesserungen der Bindungsrate wirken sich überproportional auf den CLV aus, da r im Nenner der CLV-Formel steht (1+i−r wird kleiner, je näher r an 1+i heranrückt) — ein zentrales Argument für Investitionen in Kundenzufriedenheit und -bindung statt ausschließlich in Neukundengewinnung.",
          "Wichtige Treiber der Kundenbindung sind wahrgenommene Produktqualität, Servicequalität, Wechselkosten (finanziell oder psychologisch) und emotionale Markenbindung — Unternehmen investieren gezielt in diese Treiber, um die Bindungsrate und damit den CLV zu erhöhen.",
        ],
        terms: [{ term: "Kundenbindungsrate (Retention Rate)", definition: "Anteil der Kunden einer Periode, die in der Folgeperiode weiterhin aktiv sind." }],
        examples: [
          "Erhöht ein Unternehmen seine Bindungsrate von 70% auf 85% (bei DB=200€, i=10%), steigt der CLV von 200×0,7/(0,4)=350€ auf 200×0,85/(0,25)=680€ — eine Steigerung um fast 95% bei einer Erhöhung der Bindungsrate um nur 15 Prozentpunkte.",
        ],
      },
      {
        id: "11-3",
        heading: "11.3 Customer Equity als Unternehmenswerttreiber",
        body: [
          "Customer Equity aggregiert die CLVs aller aktuellen und zukünftig erwarteten Kunden eines Unternehmens zu einer Gesamtgröße und liefert damit eine kundenorientierte Perspektive auf den Unternehmenswert — komplementär zur klassischen finanzwirtschaftlichen Unternehmensbewertung (siehe BWL 2: Finanzierung und Rechnungswesen).",
          "Diese Perspektive verschiebt den Fokus des Managements von kurzfristigen Absatzzahlen hin zur langfristigen Werthaltigkeit der Kundenbasis — ein Unternehmen mit wachsender, aber wenig loyaler Kundenbasis kann langfristig weniger wert sein als ein Unternehmen mit kleinerer, aber stark gebundener Kundenbasis.",
        ],
        terms: [{ term: "Customer Equity", definition: "Summe der Customer Lifetime Values aller aktuellen und erwarteten zukünftigen Kunden eines Unternehmens." }],
        examples: [
          "Zwei Unternehmen mit identischem Jahresumsatz, aber unterschiedlicher Kundenbindungsrate, weisen unterschiedliche Customer Equity auf: Das Unternehmen mit der höheren Bindungsrate hat einen höheren aggregierten CLV und damit eine wertvollere Kundenbasis für zukünftige Perioden.",
        ],
      },
    ],
  },
];
