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
      {
        id: "1-3",
        heading: "1.3 Erwartungsbildung und die Lucas-Kritik",
        body: [
          "Wie Menschen ihre Erwartungen über zukünftige ökonomische Größen (Inflation, Einkommen, Zinsen) bilden, beeinflusst maßgeblich, wie Politikmaßnahmen wirken. Bei adaptiven Erwartungen orientieren sich Akteure an vergangenen Beobachtungen und passen ihre Erwartung nur schrittweise an neue Information an — sie 'lernen aus der Vergangenheit'. Bei rationalen Erwartungen nutzen Akteure dagegen alle verfügbare Information (einschließlich des Verständnisses, wie die Wirtschaft und die Politik funktionieren) und liegen im Durchschnitt richtig, auch wenn einzelne Prognosen daneben liegen können.",
          "Die Lucas-Kritik (nach Robert Lucas) warnt davor, ökonomische Politik allein auf Basis historisch beobachteter Zusammenhänge zu planen: Wenn Akteure rationale Erwartungen bilden, ändert sich ihr Verhalten SOBALD sich die Politik selbst ändert — ein in der Vergangenheit stabiler Zusammenhang (z. B. zwischen Inflation und Arbeitslosigkeit, siehe die Phillipskurve in 11.3) kann zusammenbrechen, wenn Akteure die neue Politik antizipieren und ihre Erwartungen entsprechend anpassen.",
          "Diese Kritik hat auch methodische Konsequenzen für die empirische Makroökonomik: Da echte kontrollierte Experimente (bei denen man z. B. die Geldpolitik zufällig zwischen sonst identischen Volkswirtschaften variiert) kaum möglich sind, stützt sich die Forschung oft auf natürliche Experimente — Situationen, in denen eine Politikänderung oder ein externer Schock (z. B. eine unerwartete Grenzöffnung, ein Naturkatastrophen-bedingter Nachfrageschock) eine Art Zufallsvariation liefert, die sich für kausale Schlüsse nutzen lässt, ohne dass Forschende die Variation selbst herbeigeführt haben.",
        ],
        terms: [
          { term: "Adaptive Erwartungen", definition: "Erwartungsbildung, die sich primär an vergangenen Beobachtungen orientiert und sich nur schrittweise an neue Information anpasst." },
          { term: "Rationale Erwartungen", definition: "Erwartungsbildung unter Nutzung aller verfügbaren Information, einschließlich des Verständnisses der Wirkung von Politikmaßnahmen." },
          { term: "Lucas-Kritik", definition: "Warnung davor, Politik auf Basis historischer Zusammenhänge zu planen, da sich das Verhalten rational erwartender Akteure bei einer Politikänderung selbst mit ändert." },
          { term: "Natürliches Experiment", definition: "Situation, in der ein externer Schock oder eine Politikänderung eine zufallsähnliche Variation liefert, die für kausale Schlüsse genutzt werden kann, ohne dass Forschende sie herbeigeführt haben." },
        ],
        examples: [
          "Beobachtet eine Zentralbank historisch, dass niedrige Arbeitslosigkeit mit moderat höherer Inflation einhergeht, und versucht sie, durch dauerhaft expansivere Politik die Arbeitslosigkeit permanent zu senken, passen sich bei rationalen Erwartungen die Inflationserwartungen der Akteure an die neue Politik an — der ursprünglich beobachtete Zusammenhang verschwindet, und es bleibt am Ende nur höhere Inflation ohne dauerhaft niedrigere Arbeitslosigkeit (vgl. die langfristig vertikale Phillipskurve, 11.3).",
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
          "Vom BIP zu unterscheiden ist das Bruttonationaleinkommen (BNE): Während das BIP an die INLÄNDISCHE Produktion anknüpft (unabhängig davon, wem die Produktionsfaktoren gehören), erfasst das BNE die Einkommen der INLÄNDISCHEN Bevölkerung (unabhängig davon, wo diese erwirtschaftet wurden). Rechnerisch gilt BNE = BIP + Primäreinkommen aus dem Ausland an Inländer − Primäreinkommen an Ausländer aus dem Inland. Bei einem Land mit vielen im Ausland tätigen Staatsbürger:innen oder hohen Kapitalerträgen aus Auslandsinvestitionen kann das BNE spürbar über dem BIP liegen; bei einem Land mit hohem Anteil ausländischer Unternehmen, deren Gewinne ins Ausland abfließen, kann es umgekehrt darunter liegen.",
        ],
        formulas: ["BNE = BIP + Primäreinkommen von Inländern im Ausland − Primäreinkommen von Ausländern im Inland"],
        formulasLatex: ["\\text{BNE} = \\text{BIP} + \\text{Prim\\\"areinkommen Inl\\\"ander im Ausland} - \\text{Prim\\\"areinkommen Ausl\\\"ander im Inland}"],
        terms: [
          {
            term: "Bruttoinlandsprodukt (BIP)",
            definition: "Marktwert aller innerhalb eines Landes in einer Periode neu produzierten Endgüter und Dienstleistungen.",
          },
          {
            term: "Bruttonationaleinkommen (BNE)",
            definition: "Summe der Einkommen, die der inländischen Bevölkerung zufließen, unabhängig davon, ob sie im In- oder Ausland erwirtschaftet wurden; BNE = BIP + Nettoprimäreinkommen aus dem Ausland.",
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
      {
        id: "3-5",
        heading: "3.5 Der Verbraucherpreisindex",
        body: [
          "Neben dem BIP-Deflator (2.3) ist der Verbraucherpreisindex (VPI) das gebräuchlichste Preismaß. Anders als der BIP-Deflator, der implizit die jeweils AKTUELLEN Produktionsmengen gewichtet, hält der VPI einen FESTEN Warenkorb aus einem Basisjahr fest (ein sogenannter Laspeyres-Index) und bewertet ihn zu den Preisen der jeweils aktuellen Periode: VPI = (Kosten des Basisjahr-Warenkorbs zu aktuellen Preisen / Kosten des Basisjahr-Warenkorbs zu Basisjahr-Preisen) × 100.",
          "Weil der Warenkorb fest bleibt, überschätzt der VPI die tatsächlich erlebte Teuerung tendenziell in mehrfacher Hinsicht: Der Substitutionsbias entsteht, weil Haushalte bei relativen Preisänderungen zu günstigeren Gütern wechseln, was der Index nicht abbildet. Der Neuproduktbias entsteht, weil neue Güter (z. B. Smartphones) erst mit Verzögerung in den Warenkorb aufgenommen werden. Der Qualitätsbias entsteht, weil Qualitätsverbesserungen eines Guts teilweise fälschlich als reiner Preisanstieg gezählt werden, wenn sie nicht sauber herausgerechnet werden.",
        ],
        formulas: ["VPI = (Warenkorb zu aktuellen Preisen / Warenkorb zu Basisjahrpreisen) × 100"],
        formulasLatex: ["\\text{VPI} = \\dfrac{\\text{Warenkorb zu aktuellen Preisen}}{\\text{Warenkorb zu Basisjahrpreisen}} \\times 100"],
        terms: [
          { term: "Verbraucherpreisindex (VPI)", definition: "Laspeyres-Preisindex mit festem Warenkorb aus einem Basisjahr, bewertet zu aktuellen Preisen." },
          { term: "Substitutionsbias", definition: "Tendenz des VPI, Inflation zu überschätzen, weil er Ausweichreaktionen von Haushalten zu relativ günstigeren Gütern nicht erfasst." },
        ],
        examples: [
          "Ein Warenkorb aus 10 Broten und 5 Kinokarten kostet im Basisjahr (Brot 2€, Kino 10€) insgesamt 10×2+5×10=70€. Im aktuellen Jahr kosten dieselben Mengen zu neuen Preisen (Brot 2,50€, Kino 11€) 10×2,5+5×11=80€. Der VPI beträgt (80/70)×100≈114,3 — die Verbraucherpreise sind um rund 14,3% gegenüber dem Basisjahr gestiegen.",
        ],
      },
      {
        id: "3-6",
        heading: "3.6 Geldmengenaggregate, Seigniorage und Deflation",
        body: [
          "'Die Geldmenge' ist keine eindeutige Größe, sondern wird je nach Abgrenzung in mehreren Stufen gemessen: M1 umfasst Bargeld plus jederzeit verfügbare Sichteinlagen (das 'engste' Geld), M2 zusätzlich Termineinlagen mit kurzer Kündigungsfrist und Spareinlagen, und M3 zusätzlich noch weniger liquide Anlageformen wie Geldmarktfondsanteile. Je höher die Stufe, desto weniger unmittelbar liquide, aber desto vollständiger die Erfassung des im weiteren Sinne 'geldähnlichen' Vermögens.",
          "Seigniorage bezeichnet die Einnahmen, die eine Zentralbank (bzw. der Staat) durch die Ausgabe von Geld erzielt: Da die Herstellungskosten von Banknoten und Zentralbankgeld weit unter ihrem Nennwert liegen, entspricht neu geschaffenes Geld näherungsweise zusätzlichen Staatseinnahmen. Wird Seigniorage exzessiv zur Finanzierung von Staatsausgaben genutzt (Gelddrucken statt Besteuerung oder Kreditaufnahme), führt das über die Quantitätstheorie (3.2) zu hoher Inflation — Seigniorage wird deshalb manchmal als 'Inflationssteuer' bezeichnet, da sie die Kaufkraft aller Geldhalter:innen schmälert.",
          "Das Gegenstück zur Inflation ist die Deflation (ein sinkendes allgemeines Preisniveau), die ökonomisch keineswegs unproblematisch ist: Erwarten Haushalte weiter fallende Preise, verschieben sie Konsum in die Zukunft, was die Nachfrage zusätzlich dämpft und die Preise weiter drückt — eine sich selbst verstärkende Abwärtsspirale (Deflationsspirale). Zusätzlich steigt bei Deflation die reale Schuldenlast bestehender Kredite (Schuldendeflation, siehe auch 10.5), da Nominalschulden konstant bleiben, während Einkommen und Preise sinken. Aus diesem Grund verfolgen viele Zentralbanken (u. a. die EZB seit 2021) ein leicht positives, symmetrisches Inflationsziel von 2% statt eines Ziels von exakt 0%, um einen Sicherheitsabstand zur Deflation zu wahren.",
        ],
        terms: [
          { term: "Geldmengenaggregate M1/M2/M3", definition: "Abstufungen der Geldmenge nach Liquiditätsgrad: M1 = Bargeld + Sichteinlagen; M2 = M1 + kurzfristige Termin-/Spareinlagen; M3 = M2 + weniger liquide Anlageformen." },
          { term: "Seigniorage", definition: "Einnahmen aus der Geldschöpfung, da die Herstellungskosten von Geld weit unter seinem Nennwert liegen; bei exzessiver Nutzung Treiber hoher Inflation." },
          { term: "Deflationsspirale", definition: "Sich selbst verstärkender Abwärtsprozess, bei dem erwartete weitere Preisrückgänge Konsum verzögern und die Nachfrage- und Preisschwäche dadurch verstärken." },
        ],
        examples: [
          "Druckt eine Zentralbank Geld im Wert von 5 Mrd. € und die tatsächlichen Herstellungskosten liegen bei nur 10 Mio. €, beträgt die Seigniorage für den Staat netto etwa 4,99 Mrd. € an zusätzlicher Kaufkraft — finanziert letztlich durch den Kaufkraftverlust aller bestehenden Geldhalter:innen infolge der dadurch ausgelösten Inflation.",
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
          "In der Realität halten Kunden aber auch Bargeld statt alles auf Bankkonten zu belassen — jeder Euro, der als Bargeld gehalten wird, verlässt den Kreislauf aus Einlage→Kredit→erneuter Einlage und schöpft daher kein weiteres Giralgeld. Bezeichnet cr das Bargeld-Einlagen-Verhältnis (gehaltenes Bargeld je Euro Sichteinlage), lautet der allgemeinere Geldmengenmultiplikator m = (1+cr)/(cr+rr) — er ist stets kleiner als der vereinfachte Multiplikator 1/rr, weil der Bargeldanteil cr die Geldschöpfungskette bremst.",
        ],
        formulas: [
          "m = 1 / rr  (vereinfacht, ohne Bargeldhaltung)",
          "m = (1+cr) / (cr+rr)  (mit Bargeld-Einlagen-Verhältnis cr)",
        ],
        formulasLatex: [
          "m = \\dfrac{1}{rr}",
          "m = \\dfrac{1+cr}{cr+rr}",
        ],
        terms: [
          {
            term: "Mindestreservesatz (rr)",
            definition: "Anteil der Bankeinlagen, den Banken als Reserve halten müssen, statt ihn als Kredit weiterzuverleihen.",
          },
          {
            term: "Geldschöpfungsmultiplikator",
            definition: "Faktor, um den sich eine Ersteinlage im Bankensystem maximal vervielfacht: vereinfacht m = 1/rr, allgemein m = (1+cr)/(cr+rr).",
          },
          {
            term: "Bargeld-Einlagen-Verhältnis (cr)",
            definition: "Von Kunden als Bargeld statt als Bankeinlage gehaltener Anteil; bremst die Geldschöpfungskette.",
          },
        ],
        examples: [
          "Bei einem Mindestreservesatz von 10% (rr=0,1) kann eine Ersteinlage von 5.000 € theoretisch bis zu 5.000/0,1 = 50.000 € an Giralgeld im Bankensystem erzeugen.",
          "Halten Kunden zusätzlich Bargeld im Umfang von 20% ihrer Sichteinlagen (cr=0,2), sinkt der Multiplikator bei rr=0,1 auf m=(1+0,2)/(0,2+0,1)=1,2/0,3=4 — deutlich unter den vereinfachten Wert 1/0,1=10. Dieselbe Ersteinlage von 5.000 € erzeugt damit nur noch maximal 5.000×4=20.000 € statt 50.000 €.",
        ],
      },
      {
        id: "4-3",
        heading: "4.2 Bankbilanzen, Eigenkapital und Einlagensicherung",
        body: [
          "Eine Bankbilanz gliedert sich wie jede Bilanz in Aktiva (Kredite an Kund:innen, Wertpapiere, Reserven) und Passiva (Einlagen der Kund:innen, sonstige Verbindlichkeiten, Eigenkapital). Das Eigenkapital ist der Puffer, der zuerst Verluste absorbiert, bevor Einlagen gefährdet wären — je dünner dieser Puffer relativ zur Bilanzsumme, desto verwundbarer die Bank.",
          "Der Leverage (Verschuldungsgrad) misst das Verhältnis von Bilanzsumme zu Eigenkapital: Leverage = Bilanzsumme / Eigenkapital. Ein hoher Leverage bedeutet, dass schon relativ kleine prozentuale Verluste auf der Aktivseite (z. B. durch notleidende Kredite) das Eigenkapital vollständig aufzehren können — Banken sind wegen ihres typischerweise hohen Leverage besonders anfällig für Vertrauenskrisen im Vergleich zu Unternehmen anderer Branchen.",
          "Um Vertrauen ins Bankensystem zu stabilisieren und Bank Runs (massenhafte, sich selbst verstärkende Abhebungen aus Angst vor einer Bankpleite) zu verhindern, garantiert die Einlagensicherung Kund:innen die Rückzahlung ihrer Einlagen bis zu einer Obergrenze, selbst wenn die Bank insolvent wird. Das nimmt Kund:innen den Anreiz, bei bloßen Gerüchten über Zahlungsschwierigkeiten vorsorglich abzuheben, und verhindert damit, dass sich eine Bank aus reiner Panik heraus tatsächlich in die Insolvenz manövriert.",
        ],
        formulas: ["Leverage = Bilanzsumme / Eigenkapital"],
        formulasLatex: ["\\text{Leverage} = \\dfrac{\\text{Bilanzsumme}}{\\text{Eigenkapital}}"],
        terms: [
          { term: "Leverage (Verschuldungsgrad)", definition: "Verhältnis von Bilanzsumme zu Eigenkapital einer Bank; hoher Leverage bedeutet hohe Verwundbarkeit gegenüber Verlusten." },
          { term: "Einlagensicherung", definition: "Garantie, Kundeneinlagen bis zu einer Obergrenze auch im Insolvenzfall der Bank zurückzuzahlen; verhindert panikgetriebene Bank Runs." },
        ],
        examples: [
          "Eine Bank hat eine Bilanzsumme von 200 Mio. € und Eigenkapital von 10 Mio. € — der Leverage beträgt 200/10=20. Verliert die Bank durch notleidende Kredite nur 5% ihrer Aktiva (10 Mio. €), ist ihr gesamtes Eigenkapital bereits aufgezehrt, obwohl der Aktivaverlust auf den ersten Blick moderat wirkt.",
        ],
      },
      {
        id: "4-2",
        heading: "4.3 Instrumente der Zentralbank",
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
          "Zwei Theorien erklären, warum Löhne selbst OHNE Mindestlohn oder Gewerkschaften über dem markträumenden Niveau verharren können. Die Effizienzlohntheorie besagt: Unternehmen zahlen freiwillig überdurchschnittliche Löhne, weil höhere Löhne Produktivität, Motivation und Betriebstreue erhöhen (und Fluktuationskosten senken) — der Produktivitätsgewinn kann die höheren Lohnkosten übersteigen, sodass ein überhöhter Lohn für das einzelne Unternehmen sogar gewinnmaximal ist, auch wenn dadurch am Gesamtmarkt ein Angebotsüberschuss an Arbeit entsteht. Die Insider-Outsider-Theorie erklärt strukturelle Arbeitslosigkeit dagegen über Verhandlungsmacht: Bereits Beschäftigte ('Insider') können über Kündigungsschutz, Einarbeitungskosten und Gewerkschaftsmacht Löhne durchsetzen, die über dem Niveau liegen, zu dem Arbeitslose ('Outsider') bereit wären zu arbeiten — Outsider haben aber kaum Einfluss auf diese Verhandlungen.",
          "Die Existenz einer Arbeitslosenversicherung beeinflusst zusätzlich die GESUCHTE Dauer der Jobsuche: Eine großzügigere Versicherung mindert den finanziellen Druck, schnell ein (möglicherweise schlecht passendes) Jobangebot anzunehmen, und kann so die durchschnittliche Sucharbeitslosigkeit verlängern (ein sogenannter Moral-Hazard-Effekt). Diesem Nachteil steht ein Vorteil gegenüber: Eine bessere Absicherung erlaubt es Arbeitssuchenden, gezielter nach einer wirklich passenden Stelle zu suchen, statt aus reiner finanzieller Not den erstbesten Job anzunehmen — was langfristig zu einem besseren Matching zwischen Fähigkeiten und Stellen führen kann.",
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
          {
            term: "Effizienzlohntheorie",
            definition: "Erklärt überhöhte Löhne dadurch, dass sie Produktivität, Motivation und Betriebstreue steigern und für Unternehmen deshalb trotz höherer Kosten profitabel sein können.",
          },
          {
            term: "Insider-Outsider-Theorie",
            definition: "Erklärt strukturelle Arbeitslosigkeit über die Verhandlungsmacht bereits Beschäftigter ('Insider'), die Löhne über dem Niveau durchsetzen können, zu dem Arbeitslose ('Outsider') arbeiten würden.",
          },
        ],
        examples: [
          "Ein neu ausgebildeter Ingenieur, der drei Monate braucht, um eine passende Stelle zu finden, zählt in dieser Zeit als friktionell arbeitslos — ein normaler Bestandteil eines funktionierenden Arbeitsmarkts.",
          "Ein Unternehmen zahlt seinen Mitarbeitenden bewusst 15% über dem branchenüblichen Lohn. Die Fluktuation sinkt spürbar, wodurch Einarbeitungskosten für neue Mitarbeitende entfallen, und die Motivation steigt, weil ein Jobverlust nun einen spürbaren Einkommensverlust bedeuten würde — der Produktivitätsgewinn übersteigt die zusätzlichen Lohnkosten, obwohl dadurch am Gesamtmarkt mehr Bewerbungen als offene Stellen entstehen.",
        ],
      },
      {
        id: "5-4",
        heading: "5.3 Das Matching-Modell der natürlichen Arbeitslosenquote",
        body: [
          "Die natürliche Arbeitslosenquote lässt sich auch formal aus einem einfachen Fluss-Gleichgewicht herleiten: dem Matching-Modell. In jeder Periode verlieren einige Beschäftigte ihren Job (Job-Separation-Rate s: Anteil der Beschäftigten, deren Arbeitsverhältnis endet) und einige Arbeitslose finden eine neue Stelle (Job-Finding-Rate f: Anteil der Arbeitslosen, der pro Periode eine Stelle findet).",
          "Im Fluss-Gleichgewicht des Arbeitsmarkts muss der Strom aus Beschäftigung in Arbeitslosigkeit (s mal Anzahl Beschäftigter) genau dem Strom aus Arbeitslosigkeit in Beschäftigung (f mal Anzahl Arbeitsloser) entsprechen — sonst würde sich die Arbeitslosenquote weiter verändern. Löst man diese Gleichgewichtsbedingung auf, ergibt sich die natürliche Arbeitslosenquote als u* = s/(s+f).",
          "Diese Formel erklärt intuitiv, warum sich natürliche Arbeitslosenquoten zwischen Ländern unterscheiden können: Länder mit hoher Jobsicherheit (niedriges s, z. B. durch starken Kündigungsschutz) haben tendenziell eine niedrigere natürliche Arbeitslosenquote — allerdings oft bei gleichzeitig niedrigerer Job-Finding-Rate f, da Unternehmen bei Neueinstellungen vorsichtiger sind, wenn Kündigungen später schwer rückgängig zu machen sind. Der Nettoeffekt auf u* hängt vom relativen Verhältnis beider Effekte ab.",
        ],
        formulas: ["u* = s / (s+f)  (natürliche Arbeitslosenquote im Matching-Modell)"],
        formulasLatex: ["u^{*} = \\dfrac{s}{s+f}"],
        terms: [
          { term: "Job-Separation-Rate (s)", definition: "Anteil der Beschäftigten, deren Arbeitsverhältnis in einer Periode endet." },
          { term: "Job-Finding-Rate (f)", definition: "Anteil der Arbeitslosen, der in einer Periode eine neue Stelle findet." },
          { term: "Matching-Modell", definition: "Modell der natürlichen Arbeitslosenquote als Fluss-Gleichgewicht zwischen Job-Verlust- und Job-Findungsrate: u*=s/(s+f)." },
        ],
        examples: [
          "In einer Volkswirtschaft verlieren pro Monat 2,5% der Beschäftigten ihre Stelle (s=0,025), während 22,5% der Arbeitslosen pro Monat eine neue Stelle finden (f=0,225). Die natürliche Arbeitslosenquote beträgt damit u* = 0,025/(0,025+0,225) = 0,025/0,25 = 0,10, also 10%.",
        ],
      },
      {
        id: "5-3",
        heading: "5.4 Okunsches Gesetz",
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
        id: "7-3",
        heading: "7.2 Wachstumsbilanzierung und das Solow-Residuum",
        body: [
          "Die Wachstumsbilanzierung (Growth Accounting) zerlegt das beobachtete BIP-Wachstum in seine Ursprungsbeiträge: Wie viel stammt aus mehr Kapital, wie viel aus mehr Arbeit, und wie viel aus reiner Effizienzsteigerung? Ausgangspunkt ist eine Cobb-Douglas-Produktionsfunktion Y=A·Kᵅ·L^(1−α), wobei A die totale Faktorproduktivität (TFP) misst — alles, was Produktion erhöht, ohne dass mehr Kapital oder Arbeit eingesetzt wird (z. B. bessere Organisation, Technologie, Institutionen).",
          "Logarithmiert man diese Funktion und leitet nach der Zeit ab, ergibt sich die Wachstumsbilanzierungsgleichung: ΔY/Y = ΔA/A + α·ΔK/K + (1−α)·ΔL/L — das BIP-Wachstum zerfällt additiv in TFP-Wachstum, den mit dem Kapitalanteil α gewichteten Beitrag des Kapitalwachstums, und den mit (1−α) gewichteten Beitrag des Arbeitswachstums.",
          "Da A selbst nicht direkt beobachtbar ist, wird es in der Praxis als Solow-Residuum aus der Gleichung rückgerechnet: ΔA/A = ΔY/Y − α·ΔK/K − (1−α)·ΔL/L — der Teil des beobachteten Wachstums, der NICHT durch mehr Kapital- oder Arbeitseinsatz erklärt werden kann. Empirisch macht das Solow-Residuum in entwickelten Volkswirtschaften typischerweise einen erheblichen Teil des langfristigen Wachstums aus — ein starker Beleg dafür, dass technischer Fortschritt (7.1) und nicht bloße Faktorakkumulation der wichtigste Wachstumstreiber ist.",
        ],
        formulas: [
          "ΔY/Y = ΔA/A + α·ΔK/K + (1−α)·ΔL/L  (Wachstumsbilanzierung)",
          "ΔA/A = ΔY/Y − α·ΔK/K − (1−α)·ΔL/L  (Solow-Residuum)",
        ],
        formulasLatex: [
          "\\dfrac{\\Delta Y}{Y} = \\dfrac{\\Delta A}{A} + \\alpha\\dfrac{\\Delta K}{K} + (1-\\alpha)\\dfrac{\\Delta L}{L}",
          "\\dfrac{\\Delta A}{A} = \\dfrac{\\Delta Y}{Y} - \\alpha\\dfrac{\\Delta K}{K} - (1-\\alpha)\\dfrac{\\Delta L}{L}",
        ],
        terms: [
          { term: "Totale Faktorproduktivität (TFP, A)", definition: "Maß für Produktionseffizienz, das nicht durch mehr Kapital- oder Arbeitseinsatz erklärt wird (Technologie, Organisation, Institutionen)." },
          { term: "Solow-Residuum", definition: "Aus der Wachstumsbilanzierungsgleichung rückgerechnetes TFP-Wachstum: ΔA/A = ΔY/Y − α·ΔK/K − (1−α)·ΔL/L." },
        ],
        examples: [
          "Eine Volkswirtschaft mit Kapitalanteil α=0,3 verzeichnet ein BIP-Wachstum von 4%, während der Kapitalstock um 6% und die Arbeitskräfte um 1% wachsen. Das Solow-Residuum beträgt ΔA/A = 4% − 0,3×6% − 0,7×1% = 4% − 1,8% − 0,7% = 1,5% — knapp die Hälfte des Wachstums geht auf Effizienzsteigerungen zurück, die nicht durch mehr Kapital oder Arbeit erklärt werden können.",
        ],
      },
      {
        id: "7-2",
        heading: "7.3 Konvergenz zwischen Ländern",
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
      {
        id: "7-4",
        heading: "7.4 Endogenes Wachstum: das AK-Modell",
        body: [
          "Im Solow-Modell (Kapitel 6) ist dauerhaftes Pro-Kopf-Wachstum nur durch technischen Fortschritt möglich, der dort als EXOGEN vorausgesetzt wird — das Modell erklärt also nicht, WOHER dieser Fortschritt kommt. Modelle endogenen Wachstums schließen diese Lücke, indem sie Wachstum aus Entscheidungen innerhalb des Modells (Spar-/Investitionsverhalten, Forschung) ableiten, statt es von außen vorzugeben.",
          "Das einfachste Beispiel ist das AK-Modell: Es ersetzt die Cobb-Douglas-Produktionsfunktion mit abnehmenden Grenzerträgen des Kapitals durch die lineare Funktion Y = A·K, bei der A eine konstante Produktivitätskonstante ist. Da hier JEDE zusätzliche Kapitaleinheit denselben Ertrag A abwirft (keine abnehmenden Grenzerträge), führt eine dauerhaft positive Sparquote zu dauerhaftem Pro-Kopf-Wachstum, statt nur zu einem einmaligen Übergang in ein Steady State wie im Solow-Modell.",
          "Kapitalakkumulation folgt weiterhin Δk = s·f(k) − (δ+n)·k, aber mit f(k)=A·k wird daraus Δk = (sA−δ−n)·k. Die Wachstumsrate von k (und damit von y=Ak) ist konstant bei sA−δ−n — solange sA>δ+n, wächst die Volkswirtschaft dauerhaft, ohne dass ein Steady State erreicht wird, da der Grenzertrag des Kapitals nie sinkt.",
        ],
        formulas: [
          "Y = A·K  (AK-Produktionsfunktion, A konstant)",
          "Wachstumsrate von k: sA − δ − n  (dauerhaft positiv, falls sA > δ+n)",
        ],
        formulasLatex: [
          "Y = A \\cdot K",
          "g_k = sA - \\delta - n",
        ],
        terms: [
          { term: "Endogenes Wachstum", definition: "Wachstumstheorie, die den technischen Fortschritt aus modellinternen Entscheidungen (Sparen, Forschung) ableitet, statt ihn wie im Solow-Modell exogen vorzugeben." },
          { term: "AK-Modell", definition: "Einfachstes endogenes Wachstumsmodell mit linearer Produktionsfunktion Y=A·K ohne abnehmende Grenzerträge des Kapitals; erzeugt dauerhaftes Wachstum bei sA>δ+n." },
        ],
        examples: [
          "Eine Volkswirtschaft im AK-Modell hat A=0,3, eine Sparquote s=0,25, eine Abschreibungsrate δ=0,04 und Bevölkerungswachstum n=0,01. Da sA=0,25×0,3=0,075 größer ist als δ+n=0,05, wächst das Kapital pro Kopf (und damit auch der Output pro Kopf) dauerhaft mit der konstanten Rate 0,075−0,05=0,025, also 2,5% pro Jahr — ohne dass sich je ein Steady State einstellt.",
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
      {
        id: "9-3",
        heading: "9.3 Gerichteter technischer Fortschritt und die sozialen Kosten von CO₂",
        body: [
          "9.1 hat die CO₂-Bepreisung als Werkzeug zur Internalisierung externer Effekte eingeführt — aber wie hoch sollte ein solcher Preis konkret sein? Die sozialen Kosten von CO₂ (Social Cost of Carbon) versuchen genau das zu beziffern: den gegenwärtigen Barwert aller zukünftigen wirtschaftlichen Schäden, die durch die Emission einer zusätzlichen Tonne CO₂ heute verursacht werden (Ernteausfälle, Gesundheitskosten, Sachschäden durch Extremwetter). Integrated Assessment Models (IAMs) verbinden dafür Klimamodelle mit ökonomischen Wachstumsmodellen, um diese Schätzung systematisch herzuleiten — die Ergebnisse hängen jedoch stark von Annahmen über den Diskontsatz künftiger Schäden ab, weshalb Schätzungen der sozialen CO₂-Kosten in der Forschung erheblich streuen.",
          "Über die reine Bepreisung hinaus stellt sich die Frage, ob technischer Fortschritt selbst gezielt in eine emissionsärmere Richtung gelenkt werden kann. Das Konzept des gerichteten technischen Fortschritts (Directed Technological Change) unterscheidet zwischen 'schmutzigen' Inputs (fossile Energie) und 'sauberen' Inputs (erneuerbare Energie) als jeweils eigenen Faktoren der Produktion: Forschung kann sich auf die Verbesserung des einen oder anderen Inputs konzentrieren, und relative Preise (mitbestimmt durch die CO₂-Bepreisung) lenken, wohin Forschungsanreize fließen. Eine ausreichend hohe, glaubwürdige CO₂-Bepreisung kann so nicht nur kurzfristig Emissionen senken, sondern auch langfristig Innovationsanreize von schmutziger zu sauberer Technologie umlenken.",
          "Neben der Vermeidung von Emissionen existieren auch Technologien zur nachträglichen Abscheidung: Carbon Capture and Storage (CCS) filtert CO₂ direkt aus Industrieabgasen oder der Umgebungsluft und lagert es dauerhaft (z. B. in geologischen Formationen) ein. CCS ist bislang meist teurer als Vermeidung an der Quelle, gilt aber als potenziell wichtiger Baustein für Sektoren, in denen Emissionen technisch schwer vollständig vermeidbar sind (z. B. Zementproduktion).",
        ],
        terms: [
          { term: "Soziale Kosten von CO₂ (Social Cost of Carbon)", definition: "Geschätzter Barwert aller zukünftigen wirtschaftlichen Schäden durch die Emission einer zusätzlichen Tonne CO₂ heute; theoretische Grundlage für die Höhe einer CO₂-Bepreisung." },
          { term: "Gerichteter technischer Fortschritt (Directed Technological Change)", definition: "Konzept, wonach Forschungsanreize gezielt zwischen 'schmutzigen' und 'sauberen' Produktionsinputs gelenkt werden können, u. a. durch relative Preise." },
          { term: "Carbon Capture and Storage (CCS)", definition: "Technologie zur nachträglichen Abscheidung und dauerhaften Einlagerung von CO₂ aus Industrieabgasen oder der Umgebungsluft." },
        ],
        examples: [
          "Führt ein Land eine glaubwürdige, langfristig ansteigende CO₂-Bepreisung ein, verschieben sich Forschungsbudgets von Unternehmen tendenziell weg von der Effizienzsteigerung fossiler Kraftwerke hin zur Kostensenkung von Solar- und Windtechnologie, weil die relative Rentabilität sauberer Innovationen dadurch steigt — ein Beispiel für gerichteten technischen Fortschritt in der Praxis.",
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
        id: "10-0",
        heading: "10.1 Das keynesianische Kreuz und der Multiplikator",
        body: [
          "Bevor Zins und Geldmarkt ins Spiel kommen, lässt sich das Gütermarktgleichgewicht in seiner einfachsten Form betrachten: dem keynesianischen Kreuz. Die geplanten Gesamtausgaben E setzen sich zusammen aus E = C0 + c·(Y−T) + I + G, wobei Investitionen I hier zunächst als exogen fix angenommen werden (der Zins spielt noch keine Rolle). Der Konsum folgt einer linearen Konsumfunktion mit autonomem Konsum C0 und marginaler Konsumquote c (0<c<1) — dem Anteil eines zusätzlichen Euro verfügbaren Einkommens, der konsumiert statt gespart wird.",
          "Gütermarktgleichgewicht verlangt, dass die tatsächliche Produktion Y den geplanten Ausgaben E entspricht: Y=E. Grafisch ist das der Schnittpunkt der 45°-Linie (Y=E) mit der Ausgabenlinie E(Y) — daher der Name 'keynesianisches Kreuz'.",
          "Steigt eine autonome Ausgabenkomponente (z. B. G um ΔG), steigt das Gleichgewichts-Y um MEHR als ΔG selbst: Der zusätzliche Staatsausgaben-Euro erhöht Einkommen, was wiederum Konsum anregt, was wiederum Einkommen erhöht — ein sich selbst verstärkender, aber konvergierender Prozess. Aus Y=C0+c(Y−T)+I+G folgt Y(1−c)=C0−cT+I+G, also der Staatsausgabenmultiplikator ΔY/ΔG = 1/(1−c).",
          "Analog erhöht eine Steuersenkung ΔT das verfügbare Einkommen und damit den Konsum, aber nur um c·ΔT (nicht um den vollen Betrag, da ein Teil gespart wird) — der Steuermultiplikator beträgt daher ΔY/ΔT = −c/(1−c), betragsmäßig kleiner als der Staatsausgabenmultiplikator. Erhöht man G und T um denselben Betrag (ausgeglichener Haushalt), ist der Nettoeffekt auf Y trotzdem positiv und entspricht exakt der Ausgabenerhöhung: Der 'ausgeglichener-Haushalt-Multiplikator' ist stets genau 1.",
        ],
        formulas: [
          "E = C0 + c(Y−T) + I + G, Gleichgewicht: Y = E",
          "Staatsausgabenmultiplikator: ΔY/ΔG = 1/(1−c)",
          "Steuermultiplikator: ΔY/ΔT = −c/(1−c)",
        ],
        formulasLatex: [
          "E = C_0 + c(Y-T) + I + G, \\quad Y = E",
          "\\dfrac{\\Delta Y}{\\Delta G} = \\dfrac{1}{1-c}",
          "\\dfrac{\\Delta Y}{\\Delta T} = \\dfrac{-c}{1-c}",
        ],
        terms: [
          { term: "Marginale Konsumquote (c)", definition: "Anteil eines zusätzlichen Euro verfügbaren Einkommens, der konsumiert statt gespart wird (0<c<1)." },
          { term: "Keynesianisches Kreuz", definition: "Grafische Darstellung des Gütermarktgleichgewichts Y=E als Schnittpunkt der 45°-Linie mit der Ausgabenlinie." },
          { term: "Multiplikatoreffekt", definition: "Verstärkung einer autonomen Ausgabenänderung auf das Gleichgewichts-Y durch wiederholte Konsumreaktionen; der Staatsausgabenmultiplikator 1/(1−c) ist betragsmäßig größer als der Steuermultiplikator −c/(1−c)." },
        ],
        examples: [
          "Bei einer marginalen Konsumquote von c=0,75 beträgt der Staatsausgabenmultiplikator 1/(1−0,75)=4. Erhöht der Staat G um 30 Mrd. €, steigt das Gleichgewichts-Y um 4×30=120 Mrd. € — deutlich mehr als der ursprüngliche Ausgabenimpuls selbst. Der Steuermultiplikator beträgt dagegen −0,75/0,25=−3: Eine Steuersenkung um 30 Mrd. € erhöht Y nur um 90 Mrd. €, weniger als die gleich hohe Staatsausgabenerhöhung, weil ein Teil des zusätzlichen verfügbaren Einkommens gespart statt konsumiert wird.",
          "Erhöht die Regierung sowohl G als auch T um jeweils 50 Mrd. € (ausgeglichener Haushalt), steigt Y trotzdem um genau 50 Mrd. €: Der positive Effekt der höheren Staatsausgaben (200 Mrd. € bei Multiplikator 4) wird durch den negativen Effekt der höheren Steuern (−150 Mrd. € bei Multiplikator −3) nur teilweise kompensiert — der Nettoeffekt entspricht exakt der Ausgabenerhöhung selbst.",
        ],
      },
      {
        id: "10-1",
        heading: "10.2 Die IS-Kurve: Gleichgewicht am Gütermarkt",
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
        heading: "10.3 Die LM-Kurve: Gleichgewicht am Geldmarkt",
        body: [
          "Die LM-Kurve zeigt Kombinationen aus Zins und Produktion, bei denen Geldangebot und Geldnachfrage übereinstimmen: M/P = L(i,Y). Höheres Y erhöht die Transaktionsnachfrage nach Geld; damit der Geldmarkt bei gegebenem Geldangebot im Gleichgewicht bleibt, muss der Zins steigen (Geldnachfrage sinkt mit steigendem Zins) — die LM-Kurve verläuft daher steigend.",
          "Eine expansive Geldpolitik (höheres M) verschiebt die LM-Kurve nach rechts/unten: Bei jedem Y ist nun ein niedrigerer Gleichgewichtszins nötig, um den größeren realen Geldbestand M/P vom Publikum halten zu lassen.",
          "In der Praxis steuern die meisten Zentralbanken nicht direkt die Geldmenge M, sondern einen Leitzins (Zinssteuerung statt Geldmengensteuerung) — sie passen M so an, wie es nötig ist, um den gewünschten Zins zu erreichen. Der Hauptgrund: Die Geldnachfrage L(i,Y) schwankt kurzfristig unvorhersehbar (z. B. durch Änderungen im Zahlungsverhalten), sodass ein fixes Geldmengenziel bei schwankender Nachfrage zu stark schwankenden, schwer prognostizierbaren Zinsen führen würde. Ein Zinsziel entkoppelt die Politik dagegen von diesen Nachfrageschwankungen und macht die Wirkung auf Investitionen und Konsum berechenbarer.",
          "Ein Grenzfall der LM-Kurve ist die Liquiditätsfalle: Sinkt der Zins bis nahe an die Nullzinsgrenze (i≈0), wird die Geldnachfrage nahezu unendlich zinselastisch — bei einem derart niedrigen Zins ist das Halten von Bargeld/Sichteinlagen kaum noch mit Opportunitätskosten verbunden, sodass das Publikum jede zusätzliche Geldmenge bereitwillig hält, ohne dass der Zins weiter sinkt. Grafisch wird die LM-Kurve in diesem Bereich horizontal. Konventionelle Geldpolitik (Ausweitung von M) verliert dort ihre Wirkung auf den Zins und damit auf Y — eine zentrale Herausforderung für Zentralbanken in tiefen Rezessionen bei bereits sehr niedrigem Zinsniveau, in denen dann oft auf Fiskalpolitik oder unkonventionelle geldpolitische Instrumente zurückgegriffen wird.",
        ],
        formulas: ["M/P = L(i, Y)"],
        formulasLatex: ["\\dfrac{M}{P} = L(i, Y)"],
        terms: [
          {
            term: "LM-Kurve",
            definition: "Kombinationen aus Zins und Produktion, bei denen der Geldmarkt im Gleichgewicht ist.",
          },
          {
            term: "Liquiditätsfalle",
            definition: "Zustand nahe der Nullzinsgrenze, in dem die Geldnachfrage nahezu unendlich zinselastisch wird und die LM-Kurve horizontal verläuft — konventionelle Geldpolitik verliert dort ihre Wirkung auf Y.",
          },
        ],
        examples: [
          "Erhöht die Zentralbank die Geldmenge M, sinkt bei gegebenem Y der Gleichgewichtszins, da das größere reale Geldangebot nur bei niedrigerem Zins vollständig vom Publikum nachgefragt wird.",
          "Liegt der Leitzins bereits nahe 0% und die Zentralbank weitet die Geldmenge weiter aus, ändert sich der Gleichgewichtszins kaum noch — die Volkswirtschaft befindet sich in der Liquiditätsfalle, und zusätzliche Geldpolitik verpufft weitgehend, während expansive Fiskalpolitik (höheres G) in dieser Situation ungewöhnlich wirksam bleibt, da sie nicht durch steigende Zinsen gedämpft wird (kein Crowding-out, siehe 10.4).",
        ],
      },
      {
        id: "10-3",
        heading: "10.4 Fiskal- und Geldpolitik im IS-LM-Modell",
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
      {
        id: "10-4",
        heading: "10.5 Fallstudie: Die Große Depression",
        body: [
          "Die Große Depression (1929–1933) ist das historisch bedeutendste Beispiel für einen tiefen, lang anhaltenden Nachfrageeinbruch und liefert bis heute ein Lehrstück für das IS-LM-Modell. Zwei konkurrierende Erklärungen stehen sich gegenüber: Die Ausgabenhypothese sieht die Ursache primär in einem IS-Schock — ein Vertrauenseinbruch nach dem Börsencrash von 1929 ließ Investitionen und Konsum einbrechen, was die IS-Kurve stark nach links verschob. Die Geldhypothese sieht dagegen einen LM-Schock als Hauptursache: Eine Welle von Bankpleiten (siehe Kapitel 4) ließ die Geldmenge drastisch schrumpfen, was die LM-Kurve nach links verschob und den realen Zins trotz nomineller Zinssenkungen effektiv erhöhte.",
          "Beide Schocks trafen vermutlich gleichzeitig ein und verstärkten sich gegenseitig. Zusätzlich verschärfte der Pigou-Effekt umgekehrt wirken sollende Anpassungsmechanismen: Fallende Preise (Deflation, siehe 3.6) erhöhen zwar normalerweise den realen Wert von Geldvermögen und sollten so die Nachfrage stützen, aber die gleichzeitig steigende REALE Schuldenlast bestehender (nominal fixierter) Kredite wirkte in die Gegenrichtung stärker (Schuldendeflations-Theorie) — Schuldner:innen mussten Konsum und Investitionen einschränken, um ihre real gestiegene Schuldenlast zu bedienen, was die Nachfrageschwäche weiter vertiefte, statt sie über den Pigou-Effekt zu mildern.",
          "Die zentrale wirtschaftspolitische Lehre aus dieser Episode: Eine restriktive Geldpolitik (Zulassen eines starken Geldmengenrückgangs) und eine anfänglich zurückhaltende Fiskalpolitik verschärften die Krise erheblich — ein Grund, warum Zentralbanken seit der Finanzkrise 2008 (und erneut während der Corona-Pandemie) bei Nachfrageeinbrüchen deutlich aggressiver und schneller mit Geldmengenausweitung reagieren, um einen vergleichbaren LM-Schock zu verhindern.",
        ],
        terms: [
          {
            term: "Pigou-Effekt",
            definition: "Mechanismus, wonach fallende Preise den realen Wert von Geldvermögen erhöhen und dadurch die Nachfrage stützen sollten — wurde während der Großen Depression durch den gegenläufigen Schuldendeflations-Effekt überkompensiert.",
          },
          {
            term: "Schuldendeflations-Theorie",
            definition: "Erklärt, wie Deflation die reale Schuldenlast nominal fixierter Kredite erhöht und Schuldner:innen zu Konsum-/Investitionskürzungen zwingt, was eine Nachfrageschwäche weiter verstärkt.",
          },
        ],
        examples: [
          "Ein Unternehmen mit einem nominal fixierten Kredit von 1 Mio. € sieht bei 10% Deflation den realen Wert dieser Schuld effektiv um gut 11% steigen (derselbe Nominalbetrag entspricht nun mehr Kaufkraft) — um die höhere reale Last zu bedienen, kürzt es Investitionen, was die gesamtwirtschaftliche Nachfrage weiter schwächt und so die Deflation zusätzlich befeuert.",
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
          "Eine gebräuchliche Mikrofundierung für die kurzfristig flache AS-Kurve ist das Preisstarrheiten-Modell: Ein Anteil (1−s) der Unternehmen kann seinen Preis sofort an die aktuelle Nachfragelage anpassen und setzt p=P+b(Y−Ȳ). Der übrige Anteil s der Unternehmen legt seinen Preis dagegen bereits im Voraus fest, rein basierend auf der erwarteten Preisentwicklung: p=Pᵉ. Das aggregierte Preisniveau ist der gewichtete Durchschnitt beider Gruppen; löst man P=s·Pᵉ+(1−s)·[P+b(Y−Ȳ)] nach P auf, ergibt sich P=Pᵉ+[(1−s)/s]·b·(Y−Ȳ).",
          "Diese Formel macht explizit, wovon die Steilheit der kurzfristigen AS-Kurve abhängt: Je größer der Anteil s preisstarrer Unternehmen, desto größer der Koeffizient (1−s)/s vor der Nachfragelücke, und desto empfindlicher reagiert das Preisniveau auf Produktionsschwankungen — bei s→0 (fast alle Preise flexibel) nähert sich die AS-Kurve der vertikalen langfristigen Kurve an, bei s→1 (fast alle Preise starr) wird sie nahezu horizontal.",
        ],
        formulas: ["P = Pᵉ + [(1−s)/s]·b·(Y−Ȳ)  (Preisstarrheiten-Modell)"],
        formulasLatex: ["P = P^{e} + \\dfrac{1-s}{s}\\cdot b \\cdot (Y-\\bar Y)"],
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
          {
            term: "Preisstarrheiten-Modell",
            definition: "Mikrofundierung der kurzfristigen AS-Kurve: Ein Anteil s der Unternehmen legt Preise im Voraus fest (p=Pᵉ), der Rest reagiert flexibel auf die Nachfragelage — daraus folgt P=Pᵉ+[(1−s)/s]·b·(Y−Ȳ).",
          },
        ],
        examples: [
          "Ein positiver Nachfrageschock (z. B. höhere Staatsausgaben) erhöht kurzfristig sowohl Y über Y* als auch P leicht; langfristig steigen Löhne/Preise weiter, bis Y wieder auf Y* zurückfällt und nur P dauerhaft höher bleibt.",
          "In einer Volkswirtschaft liegt der Anteil preisstarrer Unternehmen bei s=0,6 und der Reaktionskoeffizient bei b=2. Weicht die tatsächliche Produktion um 3% vom Potenzial ab (Y−Ȳ=0,03), steigt das Preisniveau um [(1−0,6)/0,6]×2×0,03 = 0,667×0,06 ≈ 0,04, also etwa 4 Prozentpunkte über die Erwartung Pᵉ — bei einem höheren Anteil preisstarrer Unternehmen (größerem s) würde derselbe Nachfrageschock einen kleineren Preisanstieg auslösen.",
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
        id: "12-0",
        heading: "12.1 Leistungsbilanz, Kapitalbilanz und die Identität NX=S−I",
        body: [
          "Bevor Wechselkurse und Kapitalmobilität ins IS-LM-Modell integriert werden, lohnt ein Blick auf die grundlegende Buchhaltung einer offenen Volkswirtschaft. Die Leistungsbilanz erfasst im Kern den Außenhandel: den Saldo aus Exporten und Importen von Gütern und Dienstleistungen sowie grenzüberschreitende Faktoreinkommen (vgl. BNE, 2.1). Die Kapitalbilanz erfasst dagegen grenzüberschreitende Finanztransaktionen — den Kauf und Verkauf von Vermögenswerten (Wertpapiere, Direktinvestitionen, Kredite) zwischen In- und Ausland.",
          "Beide Bilanzen sind buchhalterisch spiegelbildlich verknüpft: Ein Leistungsbilanzüberschuss (mehr Exporte als Importe) bedeutet automatisch, dass das Inland per saldo Vermögenswerte gegenüber dem Ausland aufbaut — es exportiert netto Kapital. Formal gilt NX = S−I: Die Nettoexporte entsprechen der Differenz zwischen nationaler Ersparnis S und Investition I. Ein Land, das mehr spart, als es im Inland investiert, muss diese überschüssige Ersparnis zwangsläufig ins Ausland exportieren — genau das drückt sich als Leistungsbilanzüberschuss (positives NX) aus.",
          "Diese Identität erklärt, warum Leistungsbilanzsalden keine reinen 'Handelsphänomene' sind, sondern eng mit der volkswirtschaftlichen Spar-Investitions-Bilanz zusammenhängen: Ein Land mit chronischem Leistungsbilanzdefizit (NX<0) investiert systematisch mehr, als es selbst spart, und finanziert die Differenz durch Kapitalzuflüsse aus dem Ausland (eine negative Kapitalbilanz im engeren Sinne bzw. eine positive Nettokapitalimportposition).",
        ],
        formulas: ["NX = S − I  (Nettoexporte = nationale Ersparnis minus Investition)"],
        formulasLatex: ["NX = S - I"],
        terms: [
          { term: "Leistungsbilanz", definition: "Saldo aus Exporten und Importen von Gütern/Dienstleistungen sowie grenzüberschreitenden Faktoreinkommen." },
          { term: "Kapitalbilanz", definition: "Saldo grenzüberschreitender Finanztransaktionen (Kauf/Verkauf von Vermögenswerten zwischen In- und Ausland)." },
          { term: "NX=S−I-Identität", definition: "Buchhalterische Identität: Nettoexporte entsprechen der Differenz zwischen nationaler Ersparnis und Investition." },
        ],
        examples: [
          "Ein Land spart insgesamt 500 Mrd. € (S=500) und investiert im Inland nur 420 Mrd. € (I=420). Nach der Identität NX=S−I muss der Leistungsbilanzsaldo NX=500−420=80 Mrd. € betragen — das Land exportiert netto Güter im Wert von 80 Mrd. € und baut in gleicher Höhe Auslandsvermögen auf.",
        ],
      },
      {
        id: "12-1",
        heading: "12.2 Wechselkurse und Kaufkraftparität",
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
        heading: "12.3 Das Mundell-Fleming-Modell bei flexiblen Wechselkursen",
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
        heading: "12.4 Das Trilemma der offenen Volkswirtschaft",
        body: [
          "Das Trilemma besagt, dass ein Land nicht gleichzeitig freien Kapitalverkehr, einen fixen Wechselkurs und eine unabhängige Geldpolitik haben kann — höchstens zwei der drei Ziele lassen sich gleichzeitig verwirklichen. Ein Land mit fixem Wechselkurs und freiem Kapitalverkehr muss seine Geldpolitik dem Ankerland unterordnen, da sonst Zinsdifferenzen sofort massive Kapitalbewegungen und Druck auf den fixen Kurs auslösen würden.",
          "Länder wählen daher typischerweise eine von drei Kombinationen: freier Kapitalverkehr mit flexiblem Wechselkurs und unabhängiger Geldpolitik (z. B. USA, Eurozone insgesamt), Kapitalverkehrskontrollen mit fixem Kurs und unabhängiger Geldpolitik (z. B. historisch China), oder fixer Kurs mit freiem Kapitalverkehr und aufgegebener eigener Geldpolitik (z. B. Mitgliedsstaaten der Eurozone gegenüber der EZB).",
          "Die Wahl zwischen festem und flexiblem Wechselkurs (bei gegebenem Kapitalverkehr) ist selbst eine wirtschaftspolitische Abwägung. Für feste Wechselkurse spricht: geringere Unsicherheit für Außenhandel und grenzüberschreitende Investitionen, eine importierte Preisstabilität von einem glaubwürdigen Ankerland, und Schutz vor selbstverstärkenden spekulativen Wechselkursschwankungen. Für flexible Wechselkurse spricht dagegen: Der Wechselkurs kann als automatischer Puffer gegen asymmetrische Schocks wirken (eine Abwertung dämpft z. B. einen Nachfrageeinbruch automatisch über steigende Nettoexporte), und die Geldpolitik bleibt für eigene, landesspezifische Konjunkturprobleme nutzbar, statt dem Trilemma zufolge aufgegeben werden zu müssen.",
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
