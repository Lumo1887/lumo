import type { SkriptChapter } from "./types";

// Eigenständiges Lehrwerk zur Makroökonomik ("VWL 2"), verfasst wie ein
// unabhängiges Lehrbuch zum Modulthema. Erklärungen, Beispiele und Aufbau
// sind eigenständig entwickelt; die Themenabdeckung orientiert sich am
// üblichen Inhalt eines einführenden Makroökonomik-Moduls.
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 ====================
  {
    id: "methodik-makrooekonomik",
    number: 1,
    title: "Methodik der Makroökonomik",
    free: true,
    intro:
      "Makroökonomik untersucht Volkswirtschaften als Ganzes — Wachstum, Inflation, Arbeitslosigkeit, Konjunktur — statt einzelne Märkte isoliert zu betrachten. Bevor es an konkrete Modelle geht, lohnt ein kurzer Blick darauf, was ein ökonomisches Modell überhaupt leisten soll und wo seine Grenzen liegen.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Modelle als bewusste Vereinfachung",
        body: [
          "Ein ökonomisches Modell reduziert eine komplexe Realität bewusst auf wenige, als zentral erachtete Zusammenhänge — ähnlich einer Landkarte, die nicht jedes Gebäude zeigt, sondern nur das, was für den jeweiligen Zweck relevant ist (Straßen für Autofahrer, Höhenlinien für Wanderer). Ein gutes Modell ist deshalb nicht dasjenige, das die Realität am detailliertesten abbildet, sondern dasjenige, das für die gestellte Frage die relevanten Mechanismen klar herausarbeitet.",
          "Dieser Abstraktionsschritt hat einen Preis: Jedes Modell trifft vereinfachende Annahmen, die im Einzelfall nicht exakt zutreffen (z. B. vollständige Information, rationale Erwartungen, flexible Preise). Ob eine Annahme 'zulässig' ist, hängt davon ab, ob ihre Verletzung die Kernaussage des Modells für die konkrete Fragestellung wesentlich verändern würde — nicht davon, ob sie wortwörtlich realistisch ist.",
        ],
        terms: [
          {
            term: "Ökonomisches Modell",
            definition: "Bewusst vereinfachte Darstellung ökonomischer Zusammenhänge, die für eine bestimmte Fragestellung die relevanten Mechanismen isoliert.",
          },
        ],
        examples: [
          "Ein Modell, das Preise als vollständig flexibel annimmt, eignet sich gut für langfristige Wachstumsfragen, aber schlecht für kurzfristige Konjunkturanalysen, bei denen Preis- und Lohnstarrheiten gerade die entscheidende Rolle spielen.",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Positive versus normative Ökonomik",
        body: [
          "Die positive Ökonomik beschreibt, wie die Welt tatsächlich ist bzw. wie sich ökonomische Größen unter bestimmten Bedingungen verhalten werden — eine im Prinzip überprüfbare Aussage ('Eine Erhöhung des Mindestlohns um X% führt zu einem Beschäftigungsrückgang von Y%'). Die normative Ökonomik trifft dagegen Werturteile darüber, wie die Welt sein sollte ('Der Mindestlohn sollte erhöht werden').",
          "Politische Debatten vermischen beide Ebenen häufig: Zwei Personen mögen sich in der positiven Prognose einig sein (dieselbe erwartete Wirkung), aber wegen unterschiedlicher Werturteile trotzdem zu entgegengesetzten Politikempfehlungen kommen. Diese Trennung sauber im Blick zu behalten, hilft, wissenschaftliche und wertende Aussagen nicht zu verwechseln.",
        ],
        terms: [
          {
            term: "Positive Ökonomik",
            definition: "Beschreibt, wie ökonomische Größen sich tatsächlich verhalten — überprüfbare Aussagen ohne Werturteil.",
          },
          {
            term: "Normative Ökonomik",
            definition: "Trifft Werturteile darüber, wie ökonomische Politik gestaltet werden sollte.",
          },
        ],
        examples: [
          "'Eine Senkung des Leitzinses erhöht kurzfristig die Investitionsnachfrage' ist eine positive Aussage. 'Die Zentralbank sollte den Leitzins senken, um Arbeitsplätze zu schützen' ist eine normative Aussage, die zusätzlich eine Wertentscheidung über Zielgewichtungen enthält.",
        ],
      },
    ],
  },
  // ==================== Kapitel 2 ====================
  {
    id: "bruttoinlandsprodukt",
    number: 2,
    title: "Das Bruttoinlandsprodukt",
    free: false,
    intro:
      "Das Bruttoinlandsprodukt (BIP) ist die zentrale Kennzahl, um die Größe und das Wachstum einer Volkswirtschaft zu messen. Dieses Kapitel zeigt, wie es berechnet wird, welche Größen darin zusammenspielen und wo seine Aussagekraft an Grenzen stößt.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Was das BIP misst und wie es berechnet wird",
        body: [
          "Das BIP misst den Marktwert aller innerhalb eines Landes in einer Periode neu produzierten Endgüter und Dienstleistungen. 'Endgüter' schließt Vorleistungen aus, um Doppelzählungen zu vermeiden: Der Wert von Mehl, das zu Brot verarbeitet wird, ist bereits im Brotpreis enthalten und wird nicht zusätzlich gezählt.",
          "Es gibt drei rechnerisch äquivalente Wege, das BIP zu ermitteln: über die Entstehungsseite (Summe der Wertschöpfung aller Branchen), über die Verwendungsseite (Summe der Ausgaben für Konsum, Investitionen, Staatsausgaben und Nettoexporte) und über die Verteilungsseite (Summe aller Einkommen: Löhne, Gewinne, Zinsen, Pachten). Da jeder ausgegebene Euro gleichzeitig als Einkommen bei jemand anderem ankommt, müssen alle drei Ansätze zum selben Ergebnis führen.",
        ],
        terms: [
          {
            term: "Bruttoinlandsprodukt (BIP)",
            definition: "Marktwert aller innerhalb eines Landes in einer Periode neu produzierten Endgüter und Dienstleistungen.",
          },
        ],
        examples: [
          "Ein Automobilhersteller kauft Stahl im Wert von 8.000 € und verkauft das fertige Auto für 30.000 €. Zum BIP trägt nur die Wertschöpfung von 22.000 € bei (bzw. der volle Verkaufspreis, wenn der Stahl selbst schon in einer Vorperiode oder im Ausland produziert wurde und nicht separat als inländische Endproduktion gezählt wird) — der Stahlwert wird nicht zusätzlich zum Autopreis addiert.",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Die Verwendungsgleichung",
        body: [
          "Auf der Verwendungsseite zerlegt sich das BIP (Y) in vier Komponenten: Y = C + I + G + NX. C ist der private Konsum, I sind die Bruttoinvestitionen (Anlageinvestitionen plus Lagerveränderungen), G sind die Staatsausgaben für Güter und Dienstleistungen (ohne Transferzahlungen, die keine Gegenleistung darstellen), und NX sind die Nettoexporte (Exporte minus Importe).",
          "Diese Gleichung ist eine Identität — sie gilt per Definition, nicht als ökonomische Verhaltenshypothese. Sie ist aber der Ausgangspunkt für Modelle wie das IS-LM-Modell (Kapitel 10), die erklären, wie sich diese Komponenten in Reaktion auf Zinssätze, Einkommen und Politikmaßnahmen verändern.",
        ],
        formulas: ["Y = C + I + G + NX"],
        formulasLatex: ["Y = C + I + G + NX"],
        terms: [
          {
            term: "Verwendungsgleichung",
            definition: "Zerlegung des BIP in Konsum, Investitionen, Staatsausgaben und Nettoexporte: Y = C+I+G+NX.",
          },
        ],
        examples: [
          "Ein Land mit C=1.200 Mrd. €, I=350 Mrd. €, G=500 Mrd. € und NX=−50 Mrd. € (mehr Importe als Exporte) hat ein BIP von Y = 1.200+350+500−50 = 2.000 Mrd. €.",
        ],
      },
      {
        id: "2-3",
        heading: "2.3 Real versus nominal: der BIP-Deflator",
        body: [
          "Das nominale BIP bewertet die Produktion einer Periode zu den in dieser Periode geltenden Preisen; es kann also allein durch Preisanstiege wachsen, ohne dass real mehr produziert wurde. Das reale BIP bewertet dieselbe Produktionsmenge dagegen zu den Preisen eines festen Basisjahres und isoliert damit das tatsächliche Mengenwachstum.",
          "Das Verhältnis beider Größen liefert den BIP-Deflator: BIP-Deflator = (nominales BIP / reales BIP) × 100. Er misst die durchschnittliche Preisveränderung aller in der Volkswirtschaft produzierten Güter und ist damit ein umfassenderes Preismaß als der Verbraucherpreisindex, der nur einen festen Warenkorb betrachtet.",
        ],
        formulas: ["BIP-Deflator = (nominales BIP / reales BIP) × 100"],
        formulasLatex: ["\\text{BIP-Deflator} = \\dfrac{Y_{\\text{nominal}}}{Y_{\\text{real}}}\\times 100"],
        terms: [
          {
            term: "BIP-Deflator",
            definition: "Verhältnis von nominalem zu realem BIP; misst die durchschnittliche Preisveränderung der Gesamtproduktion.",
          },
        ],
        examples: [
          "Ein Land hat ein nominales BIP von 2.200 Mrd. € und ein reales BIP (zu Preisen des Basisjahres) von 2.000 Mrd. €. Der BIP-Deflator beträgt (2.200/2.000)×100 = 110 — das allgemeine Preisniveau liegt 10% über dem des Basisjahres.",
        ],
      },
      {
        id: "2-4",
        heading: "2.4 Grenzen des BIP als Wohlstandsmaß",
        body: [
          "Das BIP erfasst nur marktvermittelte Aktivität. Unbezahlte Arbeit (Hausarbeit, Ehrenamt), Freizeit, Umweltschäden und die Verteilung des Wohlstands innerhalb der Bevölkerung bleiben unberücksichtigt. Zwei Länder mit identischem BIP pro Kopf können sich in Lebensqualität, Ungleichheit und Nachhaltigkeit stark unterscheiden.",
          "Auch Schattenwirtschaft und selbst hergestellte, nicht verkaufte Güter fehlen in der offiziellen Statistik, ebenso Ereignisse, die das BIP erhöhen, obwohl sie den Wohlstand kaum steigern (z. B. Wiederaufbaukosten nach einer Naturkatastrophe zählen als zusätzliche Produktion, obwohl sie nur einen vorherigen Verlust ausgleichen).",
        ],
        terms: [
          {
            term: "BIP pro Kopf",
            definition: "BIP geteilt durch die Bevölkerungszahl; gebräuchliches, aber unvollständiges Wohlstandsmaß.",
          },
        ],
        examples: [
          "Nach einem schweren Sturm steigt das BIP eines Landes durch umfangreiche Reparatur- und Wiederaufbauarbeiten — obwohl die Bevölkerung durch den Sturm insgesamt schlechter gestellt ist, weil zerstörtes Vermögen ersetzt statt neu geschaffen wurde.",
        ],
      },
    ],
  },
  // ==================== Kapitel 3 ====================
  {
    id: "geld-und-inflation",
    number: 3,
    title: "Geld und Inflation",
    free: false,
    intro:
      "Geld ist mehr als nur Banknoten — es ist eine gesellschaftliche Institution, die Tausch erst effizient macht. Dieses Kapitel klärt, was Geld leistet, wie seine Menge das Preisniveau beeinflusst und welche realwirtschaftlichen Kosten Inflation verursacht.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Funktionen und Arten von Geld",
        body: [
          "Geld erfüllt drei zentrale Funktionen: Es dient als Tauschmittel (vermeidet die Notwendigkeit einer doppelten Bedürfniskongruenz beim Tauschhandel), als Recheneinheit (macht Preise verschiedener Güter vergleichbar) und als Wertaufbewahrungsmittel (erlaubt es, Kaufkraft in die Zukunft zu übertragen, wenn auch bei Inflation mit Wertverlust).",
          "Man unterscheidet Warengeld, das selbst einen inneren Gebrauchswert besitzt (z. B. Gold), von Fiatgeld, dessen Wert allein auf dem Vertrauen der Nutzer und der staatlichen Anordnung beruht, es als gesetzliches Zahlungsmittel zu akzeptieren. Moderne Volkswirtschaften verwenden praktisch ausschließlich Fiatgeld.",
        ],
        terms: [
          {
            term: "Fiatgeld",
            definition: "Geld ohne eigenen inneren Warenwert, dessen Akzeptanz auf staatlicher Anordnung und Vertrauen beruht.",
          },
        ],
        examples: [
          "Ein Tauschhandel zwischen einem Bäcker und einem Schreiner scheitert, wenn der Bäcker gerade keine Möbel braucht — Geld löst dieses Problem, weil der Bäcker sein Brot gegen Geld verkaufen und damit später beliebige andere Güter erwerben kann.",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Die Quantitätstheorie des Geldes",
        body: [
          "Die Quantitätsgleichung verknüpft Geldmenge, Umlaufgeschwindigkeit, Preisniveau und reale Produktion: M·V = P·Y, wobei M die Geldmenge, V die Umlaufgeschwindigkeit des Geldes (wie oft ein Geldstück im Schnitt pro Periode den Besitzer wechselt), P das Preisniveau und Y die reale Produktion bezeichnet.",
          "Die Quantitätstheorie unterstellt zusätzlich, dass V und Y kurzfristig relativ stabil sind. Wächst die Geldmenge M schneller als die reale Produktion Y, muss sich das (bei konstantem V) im Preisniveau P niederschlagen — eine zentrale Erklärung dafür, warum anhaltend hohes Geldmengenwachstum langfristig zu Inflation führt.",
        ],
        formulas: ["M · V = P · Y"],
        formulasLatex: ["M \\cdot V = P \\cdot Y"],
        terms: [
          {
            term: "Quantitätsgleichung",
            definition: "Identität M·V = P·Y, die Geldmenge, Umlaufgeschwindigkeit, Preisniveau und reales BIP verknüpft.",
          },
        ],
        examples: [
          "Wächst die Geldmenge eines Landes um 8% pro Jahr, während die reale Produktion nur um 2% wächst und die Umlaufgeschwindigkeit konstant bleibt, muss die Inflationsrate nach der Quantitätstheorie ungefähr 6% betragen.",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Fisher-Effekt: Nominal- und Realzins",
        body: [
          "Der Nominalzins i ist der in Geldeinheiten vereinbarte Zinssatz; der Realzins r gibt dagegen an, um wie viel die tatsächliche Kaufkraft wächst, nachdem die erwartete Inflationsrate π abgezogen wurde: r ≈ i − π (die sogenannte Fisher-Gleichung in ihrer Näherungsform).",
          "Der Fisher-Effekt beschreibt, dass sich der Nominalzins langfristig eins zu eins an Veränderungen der erwarteten Inflation anpasst, während der Realzins von realwirtschaftlichen Faktoren (Produktivität, Sparverhalten) bestimmt wird und von der Geldpolitik langfristig weitgehend unbeeinflusst bleibt.",
        ],
        formulas: ["r ≈ i − π"],
        formulasLatex: ["r \\approx i - \\pi"],
        terms: [
          {
            term: "Fisher-Effekt",
            definition: "Langfristige Anpassung des Nominalzinses an Veränderungen der erwarteten Inflationsrate bei weitgehend unverändertem Realzins.",
          },
        ],
        examples: [
          "Bei einem Nominalzins von 5% und einer erwarteten Inflation von 3% beträgt der Realzins ungefähr r ≈ 5%−3% = 2%.",
        ],
      },
      {
        id: "3-4",
        heading: "3.4 Kosten der Inflation",
        body: [
          "Auch moderate, vollständig antizipierte Inflation verursacht reale Kosten: 'Schuhsohlenkosten' entstehen, weil Haushalte häufiger Bankbesuche tätigen, um weniger entwertetes Bargeld zu halten; 'Menükosten' entstehen durch den Aufwand, Preisschilder und Kataloge anzupassen. Zusätzlich verzerrt Inflation relative Preise, wenn nicht alle Preise gleich häufig angepasst werden, was Fehlallokationen begünstigt.",
          "Unerwartete Inflation verursacht zusätzliche Kosten durch willkürliche Umverteilung zwischen Gläubigern und Schuldnern: Wer zu einem fixen Nominalzins verliehen hat, verliert real, wenn die Inflation höher ausfällt als erwartet, während Schuldner real entlastet werden.",
        ],
        terms: [
          {
            term: "Schuhsohlenkosten",
            definition: "Kosten häufigerer Bankbesuche, um wenig entwertetes Bargeld zu halten.",
          },
          {
            term: "Menükosten",
            definition: "Kosten der Anpassung von Preisen (Preisschilder, Kataloge, Verträge) bei Inflation.",
          },
        ],
        examples: [
          "Ein Gläubiger verleiht 10.000 € zu einem fixen Nominalzins von 4%, erwartet dabei 2% Inflation (Realzins 2%). Steigt die tatsächliche Inflation überraschend auf 6%, beträgt der tatsächliche Realzins nur noch etwa −2% — der Gläubiger verliert real, der Schuldner profitiert.",
        ],
      },
    ],
  },
  // ==================== Kapitel 4 ====================
  {
    id: "bankensystem-geldschoepfung",
    number: 4,
    title: "Bankensystem und Geldschöpfung",
    free: false,
    intro:
      "Geld entsteht nicht nur durch die Zentralbank, sondern zu einem großen Teil im Geschäftsbankensystem selbst. Dieses Kapitel erklärt den Mechanismus der Geldschöpfung und die wichtigsten Steuerungsinstrumente der Zentralbank.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Mindestreservesystem und Geldschöpfungsmultiplikator",
        body: [
          "In einem Mindestreservesystem müssen Banken nur einen Teil der bei ihnen eingelegten Gelder als Reserve halten (Mindestreservesatz rr); den Rest können sie als Kredite weiterverleihen. Diese Kredite werden wiederum bei anderen Banken eingelegt und teilweise erneut verliehen — wodurch aus einer Ersteinlage über mehrere Runden ein Vielfaches an Giralgeld entsteht.",
          "Bei einem einheitlichen Reservesatz rr und der Annahme, dass Kunden kein Bargeld halten, ergibt sich der maximale Geldschöpfungsmultiplikator als m = 1/rr. Eine Ersteinlage von D erzeugt damit maximal eine Geldmenge von D/rr im Bankensystem.",
        ],
        formulas: ["m = 1 / rr"],
        formulasLatex: ["m = \\dfrac{1}{rr}"],
        terms: [
          {
            term: "Mindestreservesatz (rr)",
            definition: "Anteil der Bankeinlagen, den Banken als Reserve halten müssen, statt ihn als Kredit weiterzuverleihen.",
          },
          {
            term: "Geldschöpfungsmultiplikator",
            definition: "Faktor, um den sich eine Ersteinlage im Bankensystem maximal vervielfacht: m = 1/rr.",
          },
        ],
        examples: [
          "Bei einem Mindestreservesatz von 10% (rr=0,1) kann eine Ersteinlage von 5.000 € theoretisch bis zu 5.000/0,1 = 50.000 € an Giralgeld im Bankensystem erzeugen.",
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Instrumente der Zentralbank",
        body: [
          "Zentralbanken steuern die Geldmenge und Zinsen über mehrere Instrumente: Offenmarktgeschäfte (Kauf oder Verkauf von Staatsanleihen, wodurch Zentralbankgeld ins Bankensystem fließt oder abgezogen wird), die Festlegung des Mindestreservesatzes, sowie Leitzinsen, zu denen sich Geschäftsbanken bei der Zentralbank refinanzieren können.",
          "Senkt die Zentralbank den Leitzins oder kauft sie Anleihen auf, erhöht sich tendenziell die im Bankensystem verfügbare Geldmenge, was (über den in Kapitel 10 behandelten LM-Mechanismus) Marktzinsen senkt und Investitionen anregt.",
        ],
        terms: [
          {
            term: "Offenmarktgeschäft",
            definition: "Kauf oder Verkauf von Wertpapieren durch die Zentralbank zur Steuerung der Geldmenge.",
          },
        ],
        examples: [
          "Kauft die Zentralbank Staatsanleihen im Wert von 2 Mrd. € von Geschäftsbanken, fließt diesen Banken entsprechend mehr Zentralbankgeld zu, das sie (abzüglich der Mindestreserve) als zusätzliche Kredite vergeben können.",
        ],
      },
    ],
  },
  // ==================== Kapitel 5 ====================
  {
    id: "arbeitslosigkeit",
    number: 5,
    title: "Arbeitslosigkeit",
    free: false,
    intro:
      "Arbeitslosigkeit ist eine der sichtbarsten und sozial bedeutsamsten makroökonomischen Größen. Dieses Kapitel klärt, wie sie gemessen wird, welche Ursachen ihr zugrunde liegen und wie sie mit dem Wirtschaftswachstum zusammenhängt.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Messung der Arbeitslosigkeit",
        body: [
          "Die Erwerbsbevölkerung umfasst alle Erwerbstätigen plus alle Arbeitslosen (Personen, die aktuell nicht arbeiten, aber aktiv Arbeit suchen und verfügbar wären). Die Arbeitslosenquote ergibt sich als Arbeitslosenquote = Arbeitslose / Erwerbsbevölkerung × 100%.",
          "Personen, die zwar nicht arbeiten, aber auch nicht aktiv suchen (z. B. entmutigte Arbeitssuchende, die aufgegeben haben), zählen nicht zur Erwerbsbevölkerung und tauchen deshalb in der offiziellen Arbeitslosenquote nicht auf — ein Grund, warum diese Quote allein die tatsächliche Arbeitsmarktlage nicht vollständig abbildet.",
        ],
        formulas: ["Arbeitslosenquote = Arbeitslose / Erwerbsbevölkerung × 100%"],
        formulasLatex: ["u = \\dfrac{\\text{Arbeitslose}}{\\text{Erwerbsbev\\\"olkerung}}\\times 100\\%"],
        terms: [
          {
            term: "Erwerbsbevölkerung",
            definition: "Summe aus Erwerbstätigen und Arbeitslosen; schließt Personen aus, die weder arbeiten noch aktiv suchen.",
          },
        ],
        examples: [
          "Ein Land hat 38 Mio. Erwerbstätige und 2 Mio. Arbeitslose. Die Erwerbsbevölkerung beträgt 40 Mio., die Arbeitslosenquote 2/40 × 100% = 5%.",
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Arten von Arbeitslosigkeit",
        body: [
          "Friktionelle Arbeitslosigkeit entsteht durch den normalen, zeitraubenden Suchprozess zwischen Job und Bewerber:in und ist auch in einer gut funktionierenden Volkswirtschaft nicht vollständig vermeidbar. Strukturelle Arbeitslosigkeit entsteht, wenn Löhne über dem markträumenden Niveau liegen (z. B. durch Mindestlöhne, Gewerkschaftsmacht oder Effizienzlöhne) und dauerhaft mehr Arbeit angeboten als nachgefragt wird.",
          "Konjunkturelle Arbeitslosigkeit entsteht durch temporäre Nachfrageschwäche im Konjunkturzyklus und bildet sich mit der wirtschaftlichen Erholung typischerweise zurück. Die natürliche Arbeitslosenquote fasst friktionelle und strukturelle Arbeitslosigkeit als das Niveau zusammen, das auch bei voller Kapazitätsauslastung der Volkswirtschaft bestehen bleibt.",
        ],
        table: {
          caption: "Die drei Arten von Arbeitslosigkeit",
          headers: ["Typ", "Ursache", "Charakter"],
          rows: [
            ["Friktionell", "normaler Such-/Wechselprozess am Arbeitsmarkt", "vorübergehend, auch bei Vollbeschäftigung unvermeidbar"],
            ["Strukturell", "Löhne über markträumendem Niveau (Mindestlohn, Gewerkschaften, Effizienzlöhne)", "dauerhaft"],
            ["Konjunkturell", "temporäre Nachfrageschwäche im Konjunkturzyklus", "bildet sich mit wirtschaftlicher Erholung zurück"],
          ],
        },
        terms: [
          {
            term: "Friktionelle Arbeitslosigkeit",
            definition: "Vorübergehende Arbeitslosigkeit durch den normalen Such- und Wechselprozess am Arbeitsmarkt.",
          },
          {
            term: "Strukturelle Arbeitslosigkeit",
            definition: "Arbeitslosigkeit durch Löhne oberhalb des markträumenden Niveaus, z. B. durch Mindestlöhne oder Effizienzlöhne.",
          },
          {
            term: "Natürliche Arbeitslosenquote",
            definition: "Summe aus friktioneller und struktureller Arbeitslosigkeit; besteht auch bei voller Kapazitätsauslastung.",
          },
        ],
        examples: [
          "Ein neu ausgebildeter Ingenieur, der drei Monate braucht, um eine passende Stelle zu finden, zählt in dieser Zeit als friktionell arbeitslos — ein normaler Bestandteil eines funktionierenden Arbeitsmarkts.",
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Okunsches Gesetz",
        body: [
          "Das Okunsche Gesetz beschreibt den empirisch beobachteten negativen Zusammenhang zwischen der Veränderung der Arbeitslosenquote und dem Wachstum des realen BIP: Wächst die Wirtschaft schneller als ihr langfristiges Potenzial, sinkt die Arbeitslosenquote, und umgekehrt. Eine gebräuchliche Faustformel lautet: Prozentuale Veränderung der Arbeitslosenquote ≈ −0,5 × (BIP-Wachstum − Potenzialwachstum).",
          "Der Faktor vor der Klammer ist deutlich kleiner als 1, weil Unternehmen bei konjunkturellen Schwankungen nicht proportional Personal auf- und abbauen (sie passen z. B. zunächst Arbeitszeiten oder Überstunden an), sondern gedämpft reagieren.",
        ],
        formulas: ["Δu ≈ −0,5 × (BIP-Wachstum − Potenzialwachstum)"],
        formulasLatex: ["\\Delta u \\approx -0{,}5 \\times (g_{Y} - g_{Y}^{*})"],
        terms: [
          {
            term: "Okunsches Gesetz",
            definition: "Empirischer negativer Zusammenhang zwischen BIP-Wachstum und Veränderung der Arbeitslosenquote.",
          },
        ],
        examples: [
          "Bei einem Potenzialwachstum von 2% und tatsächlichem BIP-Wachstum von 4% sagt das Okunsche Gesetz einen Rückgang der Arbeitslosenquote von etwa 0,5×(4−2) = 1 Prozentpunkt voraus.",
        ],
      },
    ],
  },
  // ==================== Kapitel 6 ====================
  {
    id: "solow-modell",
    number: 6,
    title: "Wirtschaftswachstum I: Das Solow-Modell",
    free: false,
    intro:
      "Warum wachsen manche Volkswirtschaften über Jahrzehnte, während andere stagnieren? Das Solow-Modell liefert den klassischen Rahmen, um die Rolle von Kapitalakkumulation für langfristiges Wachstum zu verstehen.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Produktionsfunktion und Kapitalakkumulation",
        body: [
          "Das Solow-Modell beschreibt Produktion pro Kopf y = f(k) als Funktion des Kapitals pro Kopf k, mit abnehmendem Grenzertrag: jede zusätzliche Kapitaleinheit erhöht die Produktion, aber immer weniger stark. Ein häufig verwendeter Spezialfall ist die Cobb-Douglas-Funktion y = k^α mit 0<α<1.",
          "Kapital pro Kopf verändert sich gemäß Δk = s·f(k) − (δ+n)·k: Investitionen (Sparquote s mal Output) erhöhen k, während Abschreibung (Rate δ) und Bevölkerungswachstum (Rate n) es verwässern, da neu geborene Personen ebenfalls mit Kapital ausgestattet werden müssen.",
        ],
        formulas: ["y = k^α", "Δk = s·f(k) − (δ+n)·k"],
        formulasLatex: ["y = k^{\\alpha}", "\\Delta k = s \\cdot f(k) - (\\delta + n)\\cdot k"],
        terms: [
          {
            term: "Kapital pro Kopf (k)",
            definition: "Kapitalstock geteilt durch die Anzahl der Arbeitskräfte.",
          },
        ],
        examples: [
          "Bei α=0,5 verdoppelt sich die Produktion pro Kopf y=k^0,5 nicht, wenn sich k verdoppelt, sondern nur um den Faktor √2≈1,41 — ein direktes Beispiel für abnehmende Grenzerträge des Kapitals.",
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Das Steady State",
        body: [
          "Im Steady State (stationärer Zustand) ist Δk=0, das Kapital pro Kopf bleibt also konstant: Investitionen gleichen exakt Abschreibung und Bevölkerungswachstum aus, s·f(k*) = (δ+n)·k*. Volkswirtschaften mit einem Kapitalstock unterhalb ihres Steady State wachsen, solche oberhalb schrumpfen (relativ zur Bevölkerung), bis k* erreicht ist.",
          "Eine wichtige Implikation: dauerhaft höhere Sparquoten verschieben das Steady-State-Kapital nach oben und erhöhen damit das Pro-Kopf-Einkommen dauerhaft — sie erzeugen aber KEIN dauerhaft höheres Wachstum, sondern nur einen einmaligen Übergang zu einem höheren Niveau.",
        ],
        formulas: ["s·f(k*) = (δ+n)·k*"],
        formulasLatex: ["s \\cdot f(k^{*}) = (\\delta+n)\\cdot k^{*}"],
        terms: [
          {
            term: "Steady State (k*)",
            definition: "Kapitalniveau pro Kopf, bei dem Investitionen Abschreibung und Bevölkerungswachstum exakt ausgleichen.",
          },
        ],
        examples: [
          "Eine Volkswirtschaft mit s=0,2, δ=0,05, n=0,01 und y=k^0,5 erreicht ihr Steady State bei k* = (s/(δ+n))^2 = (0,2/0,06)^2 ≈ 11,1.",
        ],
      },
      {
        id: "6-3",
        heading: "6.3 Die Goldene Regel der Kapitalakkumulation",
        body: [
          "Nicht jede Sparquote ist wünschenswert: Die Goldene Regel sucht diejenige Sparquote, die den Konsum pro Kopf im Steady State maximiert, statt nur das Kapital zu maximieren. Sie ist erreicht, wenn das Grenzprodukt des Kapitals gerade (δ+n) entspricht — ab diesem Punkt geht zusätzliches Sparen zulasten des Konsums, ohne dass der zusätzliche Output die zusätzlichen Abschreibungs-/Bevölkerungskosten übersteigt.",
          "Liegt eine Volkswirtschaft oberhalb der goldenen Regel (überinvestiert), kann eine Senkung der Sparquote sowohl den heutigen als auch den zukünftigen Konsum erhöhen — ein seltener Fall, in dem weniger Sparen für alle Generationen besser ist.",
        ],
        terms: [
          {
            term: "Goldene Regel",
            definition: "Sparquote, bei der der Konsum pro Kopf im Steady State maximal ist (Grenzprodukt des Kapitals = δ+n).",
          },
        ],
        examples: [
          "Zeigt eine Analyse, dass das Grenzprodukt des Kapitals im aktuellen Steady State bei 3% liegt, während δ+n = 6% beträgt, ist die Volkswirtschaft überkapitalisiert — eine niedrigere Sparquote würde den Konsum langfristig erhöhen.",
        ],
      },
    ],
  },
  // ==================== Kapitel 7 ====================
  {
    id: "wachstum-bevoelkerung-fortschritt",
    number: 7,
    title: "Wirtschaftswachstum II: Bevölkerung, Fortschritt und Konvergenz",
    free: false,
    intro:
      "Das Grundmodell aus Kapitel 6 erklärt noch nicht, warum Volkswirtschaften auf lange Sicht überhaupt nachhaltig wachsen. Erst technischer Fortschritt und die empirische Betrachtung realer Länder liefern die vollständige Erklärung.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Technischer Fortschritt als Wachstumsmotor",
        body: [
          "Erweitert man die Produktionsfunktion um arbeitsvermehrenden technischen Fortschritt (y = f(k/A) mit Effizienzeinheiten A, die mit Rate g wachsen), verschwindet das Problem der abnehmenden Grenzerträge des Kapitals als Wachstumsbremse: Im Steady State wächst die Produktion pro Kopf dauerhaft mit Rate g, während Kapital pro effektive Arbeitseinheit konstant bleibt.",
          "Dieser Befund ist zentral, weil reine Kapitalakkumulation (Kapitel 6) nur ein einmaliges Aufholen bis zum Steady State erklärt — dauerhaftes Pro-Kopf-Wachstum kann im Solow-Modell ausschließlich aus technischem Fortschritt stammen.",
        ],
        terms: [
          {
            term: "Arbeitsvermehrender technischer Fortschritt",
            definition: "Technischer Fortschritt, der die Effizienz jeder Arbeitseinheit erhöht (Effizienzeinheiten A wachsen mit Rate g).",
          },
        ],
        examples: [
          "Wächst die Effizienz A dauerhaft mit g=1,5% pro Jahr, wächst im Steady State auch das Pro-Kopf-Einkommen dauerhaft mit etwa 1,5% pro Jahr — unabhängig von der Sparquote.",
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Konvergenz zwischen Ländern",
        body: [
          "Die Konvergenzhypothese besagt, dass ärmere Länder (mit niedrigerem Kapital pro Kopf und daher höherem Grenzprodukt des Kapitals) tendenziell schneller wachsen als reiche Länder und so mit der Zeit aufholen — eine direkte Folge der abnehmenden Grenzerträge des Kapitals im Solow-Modell.",
          "Empirisch zeigt sich bedingte statt absoluter Konvergenz: Länder konvergieren jeweils zu ihrem EIGENEN Steady State (das von Sparquote, Bevölkerungswachstum und institutionellen Faktoren abhängt), nicht zu einem gemeinsamen weltweiten Niveau. Deshalb holen nicht automatisch alle armen Länder gegenüber reichen Ländern auf.",
        ],
        terms: [
          {
            term: "Bedingte Konvergenz",
            definition: "Länder nähern sich ihrem jeweils eigenen Steady State an, nicht notwendigerweise einem gemeinsamen Niveau.",
          },
        ],
        examples: [
          "Zwei Länder mit identischer Sparquote und Bevölkerungswachstum, aber unterschiedlichem Startkapital, nähern sich über Zeit demselben Pro-Kopf-Einkommen an — ein Land mit strukturell niedrigerer Sparquote konvergiert dagegen zu einem dauerhaft niedrigeren Niveau.",
        ],
      },
    ],
  },
  // ==================== Kapitel 8 (Exkurs) ====================
  {
    id: "exkurs-automatisierung",
    number: 8,
    title: "Exkurs: Automatisierung und Arbeitsmarkt",
    free: false,
    intro:
      "Wachstumstheorie liefert auch den Rahmen, um aktuelle Debatten über Automatisierung und künstliche Intelligenz einzuordnen: Verdrängt technischer Fortschritt Arbeit dauerhaft, oder verschiebt er sie nur?",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Verdrängungseffekt versus Produktivitätseffekt",
        body: [
          "Automatisierung wirkt über zwei gegenläufige Kanäle: Der Verdrängungseffekt ersetzt Arbeit direkt durch Kapital/Technologie in bestimmten Tätigkeiten. Der Produktivitätseffekt erhöht gleichzeitig Einkommen und Nachfrage, was in anderen Bereichen (oft neu entstehenden Tätigkeitsfeldern) zusätzliche Arbeitsnachfrage schafft.",
          "Historisch hat der Produktivitätseffekt den Verdrängungseffekt über lange Zeiträume regelmäßig überkompensiert (z. B. bei der Mechanisierung der Landwirtschaft) — ob dies auch für die aktuelle Welle KI-getriebener Automatisierung gilt, ist unter Ökonom:innen umstritten und Gegenstand aktueller Forschung.",
        ],
        terms: [
          {
            term: "Verdrängungseffekt",
            definition: "Ersetzung menschlicher Arbeit durch Kapital/Technologie in automatisierbaren Tätigkeiten.",
          },
          {
            term: "Produktivitätseffekt",
            definition: "Zusätzliche Arbeitsnachfrage durch höhere Einkommen und neue, durch Technologie geschaffene Tätigkeitsfelder.",
          },
        ],
        examples: [
          "Als Kassensysteme in Supermärkten automatisiert wurden, sank die Nachfrage nach klassischen Kassierjobs, während gleichzeitig neue Tätigkeiten in IT-Wartung und Systemmanagement entstanden.",
        ],
      },
    ],
  },
  // ==================== Kapitel 9 (Exkurs) ====================
  {
    id: "exkurs-klima-wachstum",
    number: 9,
    title: "Exkurs: Klima und Wachstum",
    free: false,
    intro:
      "Wachstum ist nicht kostenlos, wenn es auf endlichen natürlichen Ressourcen und einem begrenzten CO₂-Budget beruht. Dieser Exkurs verknüpft die Wachstumstheorie mit externen Effekten des Klimawandels.",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Externe Effekte und die Bepreisung von CO₂",
        body: [
          "Emissionen von Treibhausgasen sind ein klassischer negativer externer Effekt: Die Kosten des Klimawandels (Schäden durch Extremwetter, Ernteausfälle) tragen nicht nur die Verursacher, sondern die gesamte Gesellschaft — der Marktpreis fossiler Energie spiegelt diese sozialen Kosten nicht wider.",
          "Eine CO₂-Bepreisung (Steuer oder Zertifikatehandel) internalisiert diesen externen Effekt, indem sie den privaten Kosten der Emission die sozialen Kosten hinzufügt. Ökonomisch ist eine solche Bepreisung meist effizienter als reine Verbote, weil sie Vermeidung dort stattfinden lässt, wo sie am günstigsten ist.",
        ],
        terms: [
          {
            term: "Negativer externer Effekt",
            definition: "Kosten einer Aktivität, die nicht vom Verursacher, sondern von Dritten getragen werden.",
          },
        ],
        examples: [
          "Ein Stahlwerk, das CO₂ ausstößt, zahlt ohne CO₂-Preis nur seine privaten Produktionskosten; mit CO₂-Preis muss es zusätzlich für die verursachten Klimaschäden zahlen, was Anreize zur Emissionsminderung schafft.",
        ],
      },
      {
        id: "9-2",
        heading: "9.2 Nachhaltiges Wachstum im Solow-Modell",
        body: [
          "Erweitert man das Solow-Modell um eine endliche natürliche Ressource als zusätzlichen Produktionsfaktor, hängt nachhaltiges langfristiges Wachstum davon ab, ob technischer Fortschritt die sinkende Verfügbarkeit der Ressource ausreichend kompensiert (schwache versus starke Nachhaltigkeit).",
          "Diese Erweiterung zeigt, dass Wachstumstheorie und Klimaökonomik keine getrennten Themen sind: Die gleiche Logik von Kapitalakkumulation und technischem Fortschritt bestimmt, ob Wachstum langfristig mit begrenzten natürlichen Ressourcen vereinbar ist.",
        ],
        terms: [
          {
            term: "Schwache Nachhaltigkeit",
            definition: "Erhalt des Gesamtkapitals (Sachkapital + Naturkapital), wobei Substitution zwischen beiden erlaubt ist.",
          },
        ],
        examples: [
          "Ersetzt eine Volkswirtschaft den Rückgang fossiler Ressourcen durch verstärkte Investitionen in erneuerbare Energieanlagen (Sachkapital), entspricht dies dem Konzept schwacher Nachhaltigkeit.",
        ],
      },
    ],
  },
  // ==================== Kapitel 10 ====================
  {
    id: "islm-modell",
    number: 10,
    title: "Konjunktur: Das IS-LM-Modell",
    free: false,
    intro:
      "Kurzfristig sind Preise starr, und Nachfrageschwankungen bestimmen die tatsächliche Produktion. Das IS-LM-Modell erklärt, wie Güter- und Geldmarkt gemeinsam Zins und Produktion kurzfristig bestimmen.",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Die IS-Kurve: Gleichgewicht am Gütermarkt",
        body: [
          "Die IS-Kurve zeigt alle Kombinationen aus Zins i und Produktion Y, bei denen der Gütermarkt im Gleichgewicht ist: Y = C(Y−T) + I(i) + G. Ein höherer Zins verteuert Investitionen, senkt I(i) und damit über den Gütermarktmultiplikator auch das Gleichgewichts-Y — die IS-Kurve verläuft daher fallend im (Y,i)-Diagramm.",
          "Expansive Fiskalpolitik (höheres G oder niedrigeres T) verschiebt die IS-Kurve nach rechts: Bei jedem gegebenen Zins ist nun ein höheres Gleichgewichts-Y erforderlich.",
        ],
        formulas: ["Y = C(Y−T) + I(i) + G"],
        formulasLatex: ["Y = C(Y-T) + I(i) + G"],
        figure: { type: "islm", caption: "IS-LM-Diagramm: Gleichgewicht aus Güter- und Geldmarkt" },
        terms: [
          {
            term: "IS-Kurve",
            definition: "Kombinationen aus Zins und Produktion, bei denen der Gütermarkt im Gleichgewicht ist.",
          },
        ],
        examples: [
          "Erhöht die Regierung die Staatsausgaben G um 40 Mrd. €, verschiebt sich die IS-Kurve nach rechts — bei unverändertem Zins steigt das Gleichgewichts-Y entsprechend dem Multiplikatoreffekt.",
        ],
      },
      {
        id: "10-2",
        heading: "10.2 Die LM-Kurve: Gleichgewicht am Geldmarkt",
        body: [
          "Die LM-Kurve zeigt Kombinationen aus Zins und Produktion, bei denen Geldangebot und Geldnachfrage übereinstimmen: M/P = L(i,Y). Höheres Y erhöht die Transaktionsnachfrage nach Geld; damit der Geldmarkt bei gegebenem Geldangebot im Gleichgewicht bleibt, muss der Zins steigen (Geldnachfrage sinkt mit steigendem Zins) — die LM-Kurve verläuft daher steigend.",
          "Eine expansive Geldpolitik (höheres M) verschiebt die LM-Kurve nach rechts/unten: Bei jedem Y ist nun ein niedrigerer Gleichgewichtszins nötig, um den größeren realen Geldbestand M/P vom Publikum halten zu lassen.",
        ],
        formulas: ["M/P = L(i, Y)"],
        formulasLatex: ["\\dfrac{M}{P} = L(i, Y)"],
        terms: [
          {
            term: "LM-Kurve",
            definition: "Kombinationen aus Zins und Produktion, bei denen der Geldmarkt im Gleichgewicht ist.",
          },
        ],
        examples: [
          "Erhöht die Zentralbank die Geldmenge M, sinkt bei gegebenem Y der Gleichgewichtszins, da das größere reale Geldangebot nur bei niedrigerem Zins vollständig vom Publikum nachgefragt wird.",
        ],
      },
      {
        id: "10-3",
        heading: "10.3 Fiskal- und Geldpolitik im IS-LM-Modell",
        body: [
          "Im Schnittpunkt von IS- und LM-Kurve ergeben sich gleichzeitig Gleichgewichtszins und -produktion. Expansive Fiskalpolitik erhöht Y, treibt aber auch den Zins nach oben, was privat finanzierte Investitionen teilweise verdrängt (Crowding-out) — der Nettoeffekt auf Y bleibt aber typischerweise positiv.",
          "Expansive Geldpolitik erhöht Y und senkt gleichzeitig den Zins, ohne den Crowding-out-Effekt der Fiskalpolitik. Kombiniert man beide Politiken, lässt sich Y erhöhen, während der Zins je nach Dosierung nahezu konstant gehalten wird.",
        ],
        table: {
          caption: "Wirkung expansiver Politik im IS-LM-Modell",
          headers: ["", "Y (Output)", "i (Zins)"],
          rows: [
            ["Expansive Fiskalpolitik", "↑ (gedämpft durch Crowding-out)", "↑"],
            ["Expansive Geldpolitik", "↑", "↓"],
          ],
        },
        terms: [
          {
            term: "Crowding-out",
            definition: "Verdrängung privater Investitionen durch steigende Zinsen infolge expansiver Fiskalpolitik.",
          },
        ],
        examples: [
          "Erhöht der Staat G, steigen sowohl Y als auch der Zins i. Der höhere Zins dämpft private Investitionen leicht (Crowding-out), sodass der Gesamteffekt auf Y kleiner ausfällt als der reine Gütermarktmultiplikator vorhersagen würde.",
        ],
      },
    ],
  },
  // ==================== Kapitel 11 ====================
  {
    id: "asad-phillipskurve",
    number: 11,
    title: "Gesamtwirtschaftliches Angebot: AS-AD-Modell und Phillipskurve",
    free: false,
    intro:
      "Das IS-LM-Modell erklärt Nachfrageschwankungen bei starren Preisen. Um zu verstehen, wie sich Produktion und Preisniveau gemeinsam über Zeit anpassen, braucht es zusätzlich das AS-AD-Modell und die Phillipskurve.",
    sections: [
      {
        id: "11-1",
        heading: "11.1 Die aggregierte Nachfragekurve (AD)",
        body: [
          "Die AD-Kurve leitet sich aus dem IS-LM-Modell ab: Ein niedrigeres Preisniveau erhöht den realen Geldbestand M/P, senkt den Zins und erhöht so über die IS-Kurve die Gleichgewichtsproduktion Y — die AD-Kurve verläuft daher fallend im (Y,P)-Diagramm.",
          "Expansive Fiskal- oder Geldpolitik verschiebt die AD-Kurve nach rechts: Bei jedem gegebenen Preisniveau ist die Nachfrage nach Gütern nun höher.",
        ],
        figure: { type: "asad", caption: "AS-AD-Modell: kurzfristiges und langfristiges Angebot" },
        terms: [
          {
            term: "AD-Kurve",
            definition: "Fallende Beziehung zwischen Preisniveau und nachgefragter Produktion, abgeleitet aus dem IS-LM-Modell.",
          },
        ],
        examples: [
          "Sinkt das Preisniveau bei konstanter Geldmenge, steigt der reale Geldbestand, der Zins fällt, Investitionen steigen — die nachgefragte Gütermenge nimmt zu, was der fallenden AD-Kurve entspricht.",
        ],
      },
      {
        id: "11-2",
        heading: "11.2 Kurz- und langfristiges Angebot",
        body: [
          "Kurzfristig sind Preise/Löhne starr, sodass Unternehmen auf Nachfrageänderungen primär mit Mengenanpassung reagieren — die kurzfristige AS-Kurve ist daher relativ flach (oder bei völlig starren Preisen horizontal). Langfristig sind alle Preise flexibel, und die Produktion kehrt zu ihrem Potenzialniveau Y* zurück, unabhängig vom Preisniveau — die langfristige AS-Kurve ist vertikal bei Y*.",
          "Ein Nachfrageschock verschiebt daher kurzfristig sowohl Y als auch P, während sich langfristig nur P anpasst und Y zu Y* zurückkehrt — ein zentrales Argument dafür, dass Geldpolitik langfristig neutral ist (sie beeinflusst nur das Preisniveau, nicht die reale Produktion).",
        ],
        table: {
          caption: "Kurz- vs. langfristiges Angebot",
          headers: ["", "Kurzfristig", "Langfristig"],
          rows: [
            ["AS-Kurve", "flach (bei starren Preisen ggf. horizontal)", "vertikal bei Y*"],
            ["Nachfrageschock wirkt auf", "Y und P", "nur P (Y kehrt zu Y* zurück)"],
          ],
        },
        terms: [
          {
            term: "Kurzfristige AS-Kurve",
            definition: "Relativ flache Angebotskurve bei starren Preisen; Nachfrageänderungen wirken primär auf die Menge.",
          },
          {
            term: "Langfristige AS-Kurve",
            definition: "Vertikale Angebotskurve bei Y* (Potenzialoutput); Nachfrageänderungen wirken langfristig nur auf das Preisniveau.",
          },
        ],
        examples: [
          "Ein positiver Nachfrageschock (z. B. höhere Staatsausgaben) erhöht kurzfristig sowohl Y über Y* als auch P leicht; langfristig steigen Löhne/Preise weiter, bis Y wieder auf Y* zurückfällt und nur P dauerhaft höher bleibt.",
        ],
      },
      {
        id: "11-3",
        heading: "11.3 Die Phillipskurve",
        body: [
          "Die Phillipskurve beschreibt den kurzfristigen Zusammenhang zwischen Inflation und Arbeitslosigkeit: π = πᵉ − β(u−u*) + ν, wobei πᵉ die erwartete Inflation, u−u* die Abweichung von der natürlichen Arbeitslosenquote und ν Angebotsschocks (z. B. Ölpreise) erfasst.",
          "Kurzfristig können Zentralbanken durch expansive Politik u unter u* drücken (auf Kosten höherer Inflation) — dieser Trade-off verschwindet jedoch langfristig, da sich Inflationserwartungen πᵉ anpassen: Die langfristige Phillipskurve ist vertikal bei u*.",
        ],
        formulas: ["π = πᵉ − β(u−u*) + ν"],
        formulasLatex: ["\\pi = \\pi^{e} - \\beta(u - u^{*}) + \\nu"],
        figure: { type: "phillips-curve", caption: "Kurz- und langfristige Phillipskurve" },
        terms: [
          {
            term: "Phillipskurve",
            definition: "Kurzfristiger negativer Zusammenhang zwischen Inflation und Abweichung der Arbeitslosigkeit vom natürlichen Niveau.",
          },
        ],
        examples: [
          "Drückt die Zentralbank die Arbeitslosigkeit 2 Prozentpunkte unter u* (β=0,5), steigt die Inflation kurzfristig um etwa 1 Prozentpunkt über die erwartete Inflation — passen sich die Erwartungen an, verschwindet dieser Effekt und u kehrt zu u* zurück.",
        ],
      },
    ],
  },
  // ==================== Kapitel 12 ====================
  {
    id: "offene-volkswirtschaften",
    number: 12,
    title: "Offene Volkswirtschaften: Mundell-Fleming und Wechselkurse",
    free: false,
    intro:
      "Sobald eine Volkswirtschaft mit dem Ausland Güter und Kapital austauscht, ändern sich die Wirkungen von Fiskal- und Geldpolitik grundlegend. Dieses Kapitel überträgt das IS-LM-Modell auf offene Volkswirtschaften.",
    sections: [
      {
        id: "12-1",
        heading: "12.1 Wechselkurse und Kaufkraftparität",
        body: [
          "Der nominale Wechselkurs e gibt an, wie viele Einheiten Fremdwährung eine Einheit Inlandswährung kauft; der reale Wechselkurs ε = e·P/P* berücksichtigt zusätzlich das relative Preisniveau und bestimmt die preisliche Wettbewerbsfähigkeit von Exporten.",
          "Die Kaufkraftparitätstheorie postuliert, dass sich Wechselkurse langfristig so anpassen, dass identische Güterkörbe in unterschiedlichen Währungen gleich viel kosten. Kurzfristig weichen tatsächliche Wechselkurse aber oft erheblich von diesem Wert ab, u. a. weil viele Güter (z. B. Dienstleistungen) nicht international gehandelt werden.",
        ],
        formulas: ["ε = e · P / P*"],
        formulasLatex: ["\\varepsilon = e \\cdot \\dfrac{P}{P^{*}}"],
        terms: [
          {
            term: "Realer Wechselkurs (ε)",
            definition: "Nominaler Wechselkurs bereinigt um das relative Preisniveau zweier Länder; bestimmt preisliche Wettbewerbsfähigkeit.",
          },
        ],
        examples: [
          "Steigt das inländische Preisniveau P stärker als das ausländische P*, während der nominale Wechselkurs e konstant bleibt, steigt ε — inländische Güter werden im Vergleich zu ausländischen teurer, was Exporte tendenziell erschwert.",
        ],
      },
      {
        id: "12-2",
        heading: "12.2 Das Mundell-Fleming-Modell bei flexiblen Wechselkursen",
        body: [
          "Das Mundell-Fleming-Modell erweitert IS-LM um Nettoexporte, die vom realen Wechselkurs abhängen, und um internationale Kapitalmobilität, die den Inlandszins an den Weltzins bindet. Bei perfekter Kapitalmobilität und flexiblen Wechselkursen ist Geldpolitik hochwirksam: Eine Geldmengenausweitung senkt den Zins, was Kapitalabflüsse und eine Abwertung auslöst — die Abwertung stützt zusätzlich die Nettoexporte und verstärkt den Effekt auf Y.",
          "Fiskalpolitik ist unter denselben Annahmen dagegen weitgehend wirkungslos: Höhere Staatsausgaben würden den Inlandszins über den Weltzins treiben, was Kapitalzuflüsse und eine Aufwertung auslöst — die Aufwertung verdrängt Nettoexporte und kompensiert den ursprünglichen Nachfrageimpuls fast vollständig.",
        ],
        terms: [
          {
            term: "Mundell-Fleming-Modell",
            definition: "Erweiterung des IS-LM-Modells um Wechselkurs und internationale Kapitalmobilität.",
          },
        ],
        examples: [
          "Senkt die Zentralbank den Leitzins bei flexiblem Wechselkurs und freiem Kapitalverkehr, wertet die Inlandswährung ab, was Exporte verbilligt und die Wirkung der Geldpolitik auf Y zusätzlich verstärkt.",
        ],
      },
      {
        id: "12-3",
        heading: "12.3 Das Trilemma der offenen Volkswirtschaft",
        body: [
          "Das Trilemma besagt, dass ein Land nicht gleichzeitig freien Kapitalverkehr, einen fixen Wechselkurs und eine unabhängige Geldpolitik haben kann — höchstens zwei der drei Ziele lassen sich gleichzeitig verwirklichen. Ein Land mit fixem Wechselkurs und freiem Kapitalverkehr muss seine Geldpolitik dem Ankerland unterordnen, da sonst Zinsdifferenzen sofort massive Kapitalbewegungen und Druck auf den fixen Kurs auslösen würden.",
          "Länder wählen daher typischerweise eine von drei Kombinationen: freier Kapitalverkehr mit flexiblem Wechselkurs und unabhängiger Geldpolitik (z. B. USA, Eurozone insgesamt), Kapitalverkehrskontrollen mit fixem Kurs und unabhängiger Geldpolitik (z. B. historisch China), oder fixer Kurs mit freiem Kapitalverkehr und aufgegebener eigener Geldpolitik (z. B. Mitgliedsstaaten der Eurozone gegenüber der EZB).",
        ],
        table: {
          caption: "Die drei möglichen Kombinationen im Trilemma",
          headers: ["Kapitalverkehr", "Wechselkurs", "Geldpolitik", "Beispiel"],
          rows: [
            ["frei", "flexibel", "unabhängig", "USA, Eurozone insgesamt"],
            ["kontrolliert", "fix", "unabhängig", "historisch China"],
            ["frei", "fix", "aufgegeben", "Eurozone-Mitgliedstaaten gegenüber der EZB"],
          ],
        },
        terms: [
          {
            term: "Trilemma",
            definition: "Unmöglichkeit, gleichzeitig freien Kapitalverkehr, festen Wechselkurs und unabhängige Geldpolitik zu haben.",
          },
        ],
        examples: [
          "Ein Land mit fixem Wechselkurs zum Dollar und offenen Kapitalmärkten kann seinen Leitzins nicht unabhängig vom US-Zins festlegen, ohne massive spekulative Kapitalbewegungen gegen die eigene Währung zu riskieren.",
        ],
      },
    ],
  },
  // ==================== Kapitel 13 (Exkurs) ====================
  {
    id: "exkurs-zoelle-handelspolitik",
    number: 13,
    title: "Exkurs: Zölle und Handelspolitik",
    free: false,
    intro:
      "Handelspolitik ist eines der politisch umstrittensten Felder der Makroökonomik. Dieser Exkurs ordnet Zölle und andere Handelshemmnisse in die ökonomische Wohlfahrtsanalyse ein.",
    sections: [
      {
        id: "13-1",
        heading: "13.1 Wohlfahrtswirkung von Zöllen",
        body: [
          "Ein Importzoll erhöht den Inlandspreis eines importierten Guts über den Weltmarktpreis. Inländische Produzenten gewinnen (höherer Preis, höhere Menge), inländische Konsumenten verlieren (höherer Preis, geringere Menge), und der Staat erzielt Zolleinnahmen. Die Summe dieser Effekte ist jedoch negativ: Es entsteht ein Wohlfahrtsverlust (Deadweight Loss), da der Konsumentenverlust den Produzentengewinn plus die Zolleinnahmen übersteigt.",
          "Dieser Wohlfahrtsverlust entsteht durch zwei Verzerrungen: Inländische Produzenten produzieren mehr, als sie zu Weltmarktpreisen effizient könnten (Produktionsineffizienz), und Konsumenten konsumieren weniger, als sie zu Weltmarktpreisen tun würden (Konsumineffizienz).",
        ],
        terms: [
          {
            term: "Deadweight Loss (Zoll)",
            definition: "Gesamtwohlfahrtsverlust eines Zolls: Konsumentenverlust übersteigt Produzentengewinn plus Zolleinnahmen.",
          },
        ],
        examples: [
          "Erhebt ein Land einen Zoll auf importierten Stahl, steigt der Inlandspreis für Stahl. Inländische Stahlproduzenten profitieren, aber stahlverarbeitende Industrien und Endverbraucher zahlen mehr — in Summe überwiegt der volkswirtschaftliche Schaden den Nutzen für die geschützte Branche.",
        ],
      },
      {
        id: "13-2",
        heading: "13.2 Argumente für und gegen Protektionismus",
        body: [
          "Befürworter von Zöllen führen u. a. den Schutz strategisch wichtiger Industrien (nationale Sicherheit), den Schutz junger, noch nicht wettbewerbsfähiger Branchen (Infant-Industry-Argument) oder den Ausgleich unfairer Handelspraktiken anderer Länder an. Kritiker verweisen auf die klar negative Nettowohlfahrtswirkung, das Risiko von Vergeltungszöllen anderer Länder, und darauf, dass Zollkosten überproportional einkommensschwache Haushalte treffen, die einen größeren Anteil ihres Einkommens für handelbare Güter ausgeben.",
          "Die ökonomische Mehrheitsmeinung sieht offenen Handel langfristig als wohlfahrtssteigernd an, erkennt aber gleichzeitig an, dass die Verteilungswirkungen (Gewinner in exportorientierten, Verlierer in importkonkurrierenden Branchen) politisch und sozial adressiert werden müssen, etwa durch Umschulungsprogramme oder gezielte Transfers.",
        ],
        terms: [
          {
            term: "Infant-Industry-Argument",
            definition: "Argument für temporären Schutz junger, noch nicht wettbewerbsfähiger Industrien vor internationaler Konkurrenz.",
          },
        ],
        examples: [
          "Ein Land führt zeitlich befristete Schutzzölle für seine junge Solarindustrie ein, mit dem Ziel, dieser Zeit zu geben, Skaleneffekte zu erreichen, bevor sie dem vollen internationalen Wettbewerb ausgesetzt wird.",
        ],
      },
    ],
  },
];
