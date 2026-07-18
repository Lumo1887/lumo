import type { SkriptChapter } from "./types";

// Hinweis zur Kapitelreihenfolge: Dieses Skript führt Inhalte aus zwei
// getrennten Vorlesungsteilen zusammen (Finanzierung, Rechnungswesen). Die
// Reihenfolge und Nummerierung hier folgt bewusst NICHT der Reihenfolge
// eines der beiden Vorlesungsteile und wechselt fortlaufend zwischen
// Finanzierungs- und Rechnungswesen-Themen ab, statt beide Blöcke
// hintereinander abzuhandeln. Die ursprünglich zusammengefasste Vorlesung zu
// Zeitwert des Geldes und Rentenrechnung wurde bewusst in zwei getrennte
// Kapitel aufgeteilt (Kapitel 2 und Kapitel 4), zwischen die ein
// Rechnungswesen-Kapitel geschoben ist. Exkurs-/Bonusthemen (Cum-Cum/Cum-Ex-
// Steuerarbitrage, Kapitalwertrate) sind bewusst in die Mitte thematisch
// verwandter Kapitel eingebettet statt als eigener Block am Ende zu stehen.
// Cross-Referenzen im Text beziehen sich auf diese neue Reihenfolge.
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 ====================
  {
    id: "grundsaetze-rechnungslegung",
    number: 1,
    title: "Grundsätze ordnungsmäßiger Buchführung",
    free: true,
    intro:
      "Bevor man einen einzigen Buchungssatz bildet oder eine Investition bewertet, braucht es die Spielregeln, nach denen ein Unternehmen überhaupt über seine wirtschaftliche Lage berichten darf. Dieses Kapitel legt die Grundprinzipien der externen Rechnungslegung, auf denen alle späteren Kapitel zu Buchführung, Bewertung und Finanzierung aufbauen.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Zweck und Adressaten der Rechnungslegung",
        body: [
          "Die externe Rechnungslegung (Financial Accounting) dokumentiert die wirtschaftliche Lage eines Unternehmens für Personen außerhalb der Unternehmensleitung: Eigenkapitalgeber, Fremdkapitalgeber, Finanzbehörden, Lieferanten, Kunden und die Öffentlichkeit. Sie unterscheidet sich damit vom internen Rechnungswesen (Management Accounting), das primär der Unternehmensleitung selbst zur Steuerung dient (siehe Kapitel 5).",
          "Weil externe Adressaten die Bücher des Unternehmens nicht selbst einsehen können, müssen Jahresabschlüsse nach verbindlichen, für alle Unternehmen gleichen Regeln erstellt werden — den Grundsätzen ordnungsmäßiger Buchführung (GoB). Sie sollen sicherstellen, dass der Abschluss vergleichbar, nachprüfbar und nicht willkürlich geschönt ist.",
        ],
        terms: [
          {
            term: "Externes Rechnungswesen",
            definition: "Dokumentation der wirtschaftlichen Lage eines Unternehmens für Adressaten außerhalb der Unternehmensleitung (Eigentümer, Gläubiger, Finanzamt, Öffentlichkeit).",
          },
          {
            term: "Grundsätze ordnungsmäßiger Buchführung (GoB)",
            definition: "Verbindliche Prinzipien, nach denen Buchführung und Jahresabschluss zu erstellen sind, damit sie vergleichbar und nachprüfbar bleiben.",
          },
        ],
        examples: [
          "Eine Bank, die einem Handwerksbetrieb einen Kredit gewähren soll, verlässt sich beim Bonitätscheck ausschließlich auf dessen Jahresabschluss — sie hat keinen eigenen Einblick in die Werkstattbücher und muss sich auf einheitliche Bilanzierungsregeln verlassen können.",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Realisationsprinzip",
        body: [
          "Das Realisationsprinzip regelt, wann ein Ertrag erfolgswirksam erfasst werden darf: erst, wenn die Leistung wirtschaftlich erbracht ist — üblicherweise mit Lieferung oder Leistungserbringung —, nicht schon bei Vertragsabschluss oder Zahlungseingang. Eine bloße Anzahlung eines Kunden ist also noch kein Ertrag, sondern zunächst eine Verbindlichkeit (erhaltene Anzahlung).",
          "Umgekehrt dürfen erwartete zukünftige Erträge nicht vorab gebucht werden, selbst wenn sie so gut wie sicher erscheinen. Das Prinzip verhindert, dass Unternehmen ihren Erfolg durch eine optimistische Vorwegnahme von Geschäften künstlich aufblähen.",
        ],
        terms: [
          {
            term: "Realisationsprinzip",
            definition: "Erträge werden erst erfasst, wenn die zugrunde liegende Leistung wirtschaftlich erbracht (realisiert) ist, unabhängig vom Zahlungszeitpunkt.",
          },
        ],
        examples: [
          "Eine Möbeltischlerei erhält im November eine Anzahlung von 3.000 € für eine Einbauküche, die erst im Januar geliefert wird. Der Ertrag entsteht erst im Januar bei Lieferung — im November wird lediglich eine Verbindlichkeit (erhaltene Anzahlung) gebucht.",
        ],
      },
      {
        id: "1-3",
        heading: "1.3 Matching Principle (Grundsatz der Periodenabgrenzung)",
        body: [
          "Das Matching Principle verlangt, dass Aufwendungen in derjenigen Periode erfasst werden, in der die durch sie verursachten Erträge entstehen — nicht in der Periode, in der die Zahlung fließt. Kosten, die erst in einer späteren Periode zu Ertrag führen, werden entsprechend zeitlich verschoben (z. B. über Abschreibungen oder Rechnungsabgrenzungsposten, siehe Kapitel 3 und 7).",
          "Dieses Prinzip sorgt zusammen mit dem Realisationsprinzip dafür, dass der ausgewiesene Periodenerfolg tatsächlich die wirtschaftliche Leistung der Periode widerspiegelt, statt nur zufällige Zahlungsströme abzubilden.",
        ],
        terms: [
          {
            term: "Matching Principle",
            definition: "Aufwendungen werden der Periode zugeordnet, in der die durch sie verursachten Erträge anfallen, unabhängig vom Zahlungszeitpunkt.",
          },
        ],
        examples: [
          "Ein Skihersteller kauft im Oktober Rohmaterial für 40.000 €, verarbeitet es zu Ski und verkauft die gesamte Produktion erst im Dezember. Der Materialaufwand wird trotz Kaufs im Oktober erst im Dezember erfolgswirksam, weil erst dann der zugehörige Ertrag entsteht.",
        ],
      },
      {
        id: "1-4",
        heading: "1.4 Vorsichtsprinzip und Imparitätsprinzip",
        body: [
          "Das Vorsichtsprinzip verlangt, im Zweifel eher vorsichtig (also erfolgsmindernd) zu bilanzieren als optimistisch. Eine zentrale Ausprägung ist das Imparitätsprinzip: Unrealisierte Gewinne dürfen nicht ausgewiesen werden, unrealisierte Verluste dagegen schon — sobald sie absehbar sind, auch wenn sie noch nicht endgültig eingetreten sind.",
          "Diese asymmetrische Behandlung von Gewinnen und Verlusten soll Gläubiger und Anteilseigner davor schützen, dass ein Unternehmen sich reicher darstellt, als es tatsächlich ist. Sie ist der Grund, warum z. B. eine Forderung gegenüber einem insolventen Kunden schon vor der endgültigen Wertlosigkeit abgeschrieben werden muss (siehe Kapitel 7), ein gestiegener Marktwert eines Grundstücks im Anlagevermögen dagegen nicht vorab gebucht werden darf.",
        ],
        terms: [
          {
            term: "Vorsichtsprinzip",
            definition: "Im Zweifel ist eher erfolgsmindernd (vorsichtig) zu bilanzieren als optimistisch.",
          },
          {
            term: "Imparitätsprinzip",
            definition: "Unrealisierte Verluste sind bereits bei Absehbarkeit zu erfassen, unrealisierte Gewinne dagegen erst bei tatsächlicher Realisation.",
          },
        ],
        examples: [
          "Ein Weingroßhändler hält Aktien im Wert von ursprünglich 20.000 €. Fällt der Marktwert zum Bilanzstichtag auf 14.000 €, muss der Verlust von 6.000 € sofort erfasst werden. Steigt der Marktwert stattdessen auf 26.000 €, darf der Gewinn von 6.000 € nicht ausgewiesen werden, solange die Aktien nicht verkauft sind.",
        ],
      },
      {
        id: "1-5",
        heading: "1.5 Going-Concern-Prinzip und Konsistenzprinzip",
        body: [
          "Das Going-Concern-Prinzip (Prinzip der Unternehmensfortführung) unterstellt, dass ein Unternehmen seine Tätigkeit auf absehbare Zeit fortführt, solange keine konkreten Anhaltspunkte für das Gegenteil vorliegen. Nur unter dieser Annahme dürfen Vermögensgegenstände zu Anschaffungs- bzw. Fortführungswerten statt zu (meist niedrigeren) Zerschlagungs- oder Liquidationswerten angesetzt werden.",
          "Das Konsistenzprinzip (Stetigkeitsprinzip) verlangt, einmal gewählte Bilanzierungs- und Bewertungsmethoden (z. B. eine Abschreibungsmethode, siehe Kapitel 7) über die Zeit beizubehalten, statt sie von Periode zu Periode zu wechseln. Nur so bleiben aufeinanderfolgende Jahresabschlüsse überhaupt vergleichbar.",
        ],
        terms: [
          {
            term: "Going-Concern-Prinzip",
            definition: "Annahme der Fortführung der Unternehmenstätigkeit, solange keine gegenteiligen Anhaltspunkte vorliegen; rechtfertigt den Ansatz von Fortführungs- statt Liquidationswerten.",
          },
          {
            term: "Konsistenzprinzip (Stetigkeitsprinzip)",
            definition: "Einmal gewählte Bilanzierungs- und Bewertungsmethoden sind über die Zeit beizubehalten, um die Vergleichbarkeit aufeinanderfolgender Abschlüsse zu sichern.",
          },
        ],
        examples: [
          "Eine Bäckereikette bilanziert ihre Backöfen seit Jahren linear über 10 Jahre (siehe Kapitel 7). Ein Wechsel zur degressiven Abschreibung allein deshalb, weil das den Gewinn dieses Jahr drücken würde, verstößt gegen das Konsistenzprinzip und ist nur bei sachlicher Begründung zulässig.",
        ],
      },
    ],
  },
  // ==================== Kapitel 2 ====================
  {
    id: "zeitwert-des-geldes",
    number: 2,
    title: "Zeitwert des Geldes: Barwert und Endwert",
    free: false,
    intro:
      "Eine zentrale Erkenntnis der Finanzwirtschaft: Ein Euro heute ist mehr wert als ein Euro in einem Jahr, weil er bis dahin angelegt werden und Zinsen erwirtschaften kann. Dieses Kapitel entwickelt die Werkzeuge, um Zahlungen zu unterschiedlichen Zeitpunkten vergleichbar zu machen — die Grundlage für die Investitionsrechnung in Kapitel 8 und 10 sowie die Anleihenbewertung in Kapitel 6.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Endwert bei ein- und mehrperiodiger Verzinsung",
        body: [
          "Legt man einen Betrag C0 heute zu einem Zinssatz r für ein Jahr an, erhält man am Jahresende den Endwert EW = C0 · (1 + r). Über mehrere Perioden T verzinst sich der Betrag exponentiell, weil jede Periode auch die Zinsen der Vorperioden mitverzinst (Zinseszinseffekt): EW = C0 · (1 + r)^T.",
          "Der Zinseszinseffekt sorgt dafür, dass sich langfristige Anlagen deutlich stärker vermehren, als eine lineare (einfache) Verzinsung vermuten ließe — ein Effekt, der bei langen Anlagehorizonten (z. B. Altersvorsorge) besonders stark ins Gewicht fällt.",
        ],
        formulas: ["EW = C0 · (1 + r)^T"],
        formulasLatex: ["EW = C_0 \\cdot (1+r)^T"],
        terms: [
          {
            term: "Endwert (Future Value)",
            definition: "Der Wert einer heutigen Zahlung zu einem zukünftigen Zeitpunkt nach Verzinsung.",
          },
          {
            term: "Zinseszinseffekt",
            definition: "Effekt, dass in jeder Folgeperiode nicht nur das ursprüngliche Kapital, sondern auch bereits gutgeschriebene Zinsen mitverzinst werden.",
          },
        ],
        examples: [
          "Mira legt €8.000 ihrer Onlinetee-Boutique für 4 Jahre zu einem Zinssatz von 6% an. Der Endwert beträgt EW = 8.000 · (1,06)^4 = 8.000 · 1,2625 ≈ €10.099,63.",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Barwert einer einzelnen Zahlung",
        body: [
          "Der Barwert (Present Value) beantwortet die umgekehrte Frage: Wie viel ist eine zukünftige Zahlung CT heute wert, wenn man mit einem Zinssatz r diskontiert? Man löst die Endwertformel nach C0 auf: BW = CT / (1 + r)^T.",
          "Diesen Vorgang nennt man Diskontierung, den Zinssatz r in diesem Zusammenhang auch Diskontsatz oder Kapitalkostensatz. Je höher der Zinssatz oder je weiter die Zahlung in der Zukunft liegt, desto kleiner ist ihr heutiger Wert.",
        ],
        formulas: ["BW = C_T / (1 + r)^T"],
        formulasLatex: ["BW = \\dfrac{C_T}{(1+r)^T}"],
        terms: [
          {
            term: "Barwert (Present Value)",
            definition: "Der heutige Wert einer zukünftigen Zahlung nach Diskontierung mit einem Zinssatz r.",
          },
          {
            term: "Diskontierung",
            definition: "Umrechnung einer zukünftigen Zahlung in ihren heutigen Wert mittels eines Zinssatzes (Diskontsatzes).",
          },
        ],
        examples: [
          "Ein Fotostudio soll in 6 Jahren €30.000 für eine neue Kameraausrüstung zurücklegen. Bei einem Zinssatz von 7% muss heute ein Betrag von BW = 30.000 / (1,07)^6 = 30.000 / 1,5007 ≈ €19.990,67 angelegt werden.",
        ],
      },
      {
        id: "2-3",
        heading: "2.3 Unterjährige Verzinsung und effektiver Jahreszins",
        body: [
          "Wird ein Kapital nicht nur einmal, sondern m-mal pro Jahr verzinst (z. B. monatlich mit m = 12 oder vierteljährlich mit m = 4), muss der nominale Jahreszinssatz r zunächst durch m geteilt und die Anzahl der Verzinsungsperioden mit m multipliziert werden: EW = C0 · (1 + r/m)^(m·T).",
          "Weil dabei häufiger Zinseszins anfällt, ist der tatsächliche (effektive) Jahresertrag höher als der nominale Zinssatz vermuten lässt. Der effektive Jahreszinssatz EJZ ist derjenige Zinssatz bei einmaliger jährlicher Verzinsung, der zum selben Endwert führt: EJZ = (1 + r/m)^m − 1.",
        ],
        formulas: [
          "EW = C0 · (1 + r/m)^(m·T)",
          "EJZ = (1 + r/m)^m − 1",
        ],
        formulasLatex: [
          "EW = C_0 \\cdot \\left(1 + \\dfrac{r}{m}\\right)^{m\\cdot T}",
          "EJZ = \\left(1 + \\dfrac{r}{m}\\right)^{m} - 1",
        ],
        terms: [
          {
            term: "Unterjährige Verzinsung",
            definition: "Verzinsung, bei der ein Kapital mehrmals pro Jahr (m-mal) statt nur einmal jährlich verzinst wird.",
          },
          {
            term: "Effektiver Jahreszinssatz (EJZ)",
            definition: "Derjenige Zinssatz bei einmaliger jährlicher Verzinsung, der zum selben Endwert führt wie unterjährige Verzinsung mit dem nominalen Zinssatz.",
          },
        ],
        examples: [
          "Werden €2.000 für 2 Jahre bei vierteljährlicher Verzinsung zu einem nominalen Jahreszinssatz von 8% angelegt, ergibt sich EW = 2.000 · (1 + 0,08/4)^(4·2) = 2.000 · (1,02)^8 ≈ €2.343,32. Der effektive Jahreszinssatz beträgt EJZ = (1,02)^4 − 1 ≈ 8,24%.",
        ],
      },
      {
        id: "2-4",
        heading: "2.4 Stetige Verzinsung",
        body: [
          "Lässt man die Anzahl der Verzinsungsperioden m gegen unendlich streben, verzinst sich das Kapital in jedem infinitesimal kleinen Zeitabschnitt — man spricht von stetiger Verzinsung. Der Endwert konvergiert dabei gegen EW = C0 · e^(r·T), wobei e die Eulersche Zahl ist.",
          "Stetige Verzinsung ist vor allem ein theoretisches Grenzmodell, das in der Finanzmathematik (z. B. bei der Optionsbewertung) häufig verwendet wird, weil es analytisch einfacher zu handhaben ist als diskrete unterjährige Verzinsung.",
        ],
        formulas: ["EW = C0 · e^(r·T)"],
        formulasLatex: ["EW = C_0 \\cdot e^{r \\cdot T}"],
        terms: [
          {
            term: "Stetige Verzinsung",
            definition: "Grenzfall der unterjährigen Verzinsung bei unendlich vielen, infinitesimal kleinen Verzinsungsperioden pro Jahr.",
          },
        ],
        examples: [
          "Ein Weingut legt €6.000 für 4 Jahre bei stetiger Verzinsung zu einem Zinssatz von 9% p.a. an. Der Endwert beträgt EW = 6.000 · e^(0,09·4) = 6.000 · e^0,36 ≈ 6.000 · 1,4333 ≈ €8.599,86.",
        ],
      },
    ],
  },
  // ==================== Kapitel 3 ====================
  {
    id: "worksheet-approach",
    number: 3,
    title: "Buchungssystem: Der Worksheet Approach",
    free: false,
    intro:
      "Wie wirkt sich ein einzelner Geschäftsvorfall — ein Einkauf, ein Verkauf, eine Lohnzahlung — auf Bilanz und Erfolgsrechnung aus? Der Worksheet Approach (auch Accounting Equation Approach genannt) beantwortet das systematisch über eine einzige Bilanzgleichung und sechs immer wiederkehrende Grundformen der Verbuchung. Als laufendes Beispiel dient die Töpferwerkstatt „Lehmglück“ von Nadja Fenske.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Die Bilanzgleichung des Worksheet Approach",
        body: [
          "Jeder Geschäftsvorfall verändert die Bilanz so, dass sie danach weiterhin ausgeglichen ist. Formal gilt für die Änderungen (Δ) der vier Bilanzkategorien: ΔL + ΔV = ΔE + ΔF, wobei L die liquiden Mittel, V die nicht-liquiden Vermögensgegenstände, E das Eigenkapital und F das Fremdkapital bezeichnet.",
          "Das Eigenkapital selbst verändert sich durch den Periodenerfolg: ΔE = U − A, wobei U die Umsatzerlöse und A die Aufwendungen der Periode sind. Erträge erhöhen also das Eigenkapital, Aufwendungen mindern es — genau das verbindet die Bilanz mit der Gewinn- und Verlustrechnung (GuV).",
        ],
        formulas: ["ΔL + ΔV = ΔE + ΔF", "ΔE = U − A"],
        formulasLatex: [
          "\\Delta L + \\Delta V = \\Delta E + \\Delta F",
          "\\Delta E = U - A",
        ],
        terms: [
          {
            term: "Worksheet Approach (Accounting Equation Approach)",
            definition: "Methode, Geschäftsvorfälle unmittelbar als Änderung der vier Bilanzkategorien (liquide Mittel, nicht-liquide Vermögensgegenstände, Eigenkapital, Fremdkapital) darzustellen.",
          },
          {
            term: "Bilanzgleichung",
            definition: "Grundidentität ΔL + ΔV = ΔE + ΔF, die nach jedem Geschäftsvorfall erfüllt sein muss.",
          },
        ],
        examples: [
          "Nadja kauft für die Werkstatt Ton im Wert von €600 bar ein und verarbeitet ihn sofort vollständig zu Aufwand derselben Periode: Die liquiden Mittel sinken um €600 (ΔL = −600), die Aufwendungen steigen um €600, wodurch ΔE = −600 gilt. Die Gleichung bleibt erfüllt: −600 + 0 = −600 + 0.",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Die sechs Grundformen der Verbuchung",
        body: [
          "Jeder denkbare Geschäftsvorfall lässt sich auf eine von sechs Grundformen zurückführen, je nachdem ob Auszahlung/Aufwand bzw. Einzahlung/Umsatzerlös zeitgleich, vorzeitig oder nachträglich anfallen. Grundform 1: Auszahlung und Aufwand fallen in derselben Periode an (z. B. Barkauf von Verbrauchsmaterial). Grundform 2: Entweder wird eine Auszahlung ohne sofortigen Aufwand aktiviert (Kauf eines Vermögensgegenstands), oder ein Aufwand entsteht jetzt für eine bereits zuvor geleistete Auszahlung (z. B. planmäßige Abschreibung, siehe Kapitel 7). Grundform 3: Entweder entsteht jetzt ein Aufwand ohne sofortige Auszahlung, weil eine Schuld entsteht (z. B. eine Rechnung auf Ziel), oder eine frühere Schuld wird jetzt beglichen (Auszahlung ohne neuen Aufwand).",
          "Analog auf der Ertragsseite: Grundform 4 — Einzahlung und Umsatzerlös fallen zeitgleich an (Barverkauf). Grundform 5 — entweder entsteht jetzt Umsatzerlös ohne Einzahlung (Verkauf auf Ziel), oder eine frühere Leistung wird jetzt erst bezahlt. Grundform 6 — entweder entsteht jetzt eine Einzahlung, der noch kein Umsatzerlös gegenübersteht, weil eine Schuld (z. B. erhaltene Anzahlung) entsteht, oder eine frühere Anzahlung wird jetzt als Umsatzerlös realisiert (vgl. Realisationsprinzip, Kapitel 1.2).",
        ],
        terms: [
          {
            term: "Grundformen der Verbuchung",
            definition: "Sechs typisierte Muster, wie ein Geschäftsvorfall Auszahlung/Aufwand bzw. Einzahlung/Umsatzerlös zeitlich zueinander in Beziehung setzt.",
          },
          {
            term: "Antizipative Rechnungsabgrenzung (Accruals)",
            definition: "Aufwendungen oder Erträge werden bereits in der laufenden Periode erfasst, obwohl die zugehörige Zahlung erst später erfolgt.",
          },
          {
            term: "Transitorische Rechnungsabgrenzung (Deferrals)",
            definition: "Die Zahlung erfolgt bereits in der laufenden Periode, der zugehörige Aufwand oder Ertrag wird jedoch in eine spätere Periode übertragen.",
          },
        ],
        examples: [
          "Nadja verkauft im März einen Satz Keramikschalen für €450 auf Ziel (Grundform 5a: Umsatzerlös jetzt, Einzahlung erst im April bei Zahlungseingang). Im April erhält sie die Zahlung: Grundform 5b greift, die liquiden Mittel steigen um €450, die Forderung sinkt entsprechend — ohne erneuten Umsatzerlös, da dieser bereits im März gebucht wurde.",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Rechnungsabgrenzungsposten (RAP)",
        body: [
          "Erhält oder leistet ein Unternehmen eine Zahlung, die wirtschaftlich (teilweise) einer zukünftigen Periode zuzurechnen ist, wird ein Rechnungsabgrenzungsposten (RAP) gebildet. Ein aktiver RAP entsteht, wenn eine Auszahlung bereits jetzt erfolgt, der zugehörige Aufwand aber erst in einer Folgeperiode anfällt (z. B. im Voraus gezahlte Miete). Ein passiver RAP entsteht spiegelbildlich, wenn eine Einzahlung bereits jetzt erfolgt, der zugehörige Ertrag aber erst später realisiert wird (z. B. eine im Voraus erhaltene Kursgebühr).",
          "In der Praxis wird häufig eine vereinfachte RAP-Buchungsvariante verwendet: Man bucht die Zahlung zunächst direkt als Aufwand bzw. Ertrag und korrigiert erst am Periodenende über den RAP auf den periodengerechten Betrag. Der Nachteil dieser Variante ist, dass innerhalb der Periode die Zwischenkonten kurzzeitig einen wirtschaftlich falschen Stand ausweisen, bis die Korrekturbuchung erfolgt.",
        ],
        terms: [
          {
            term: "Aktiver Rechnungsabgrenzungsposten",
            definition: "Bilanzposten für eine bereits geleistete Auszahlung, deren Aufwand erst in einer Folgeperiode anfällt.",
          },
          {
            term: "Passiver Rechnungsabgrenzungsposten",
            definition: "Bilanzposten für eine bereits erhaltene Einzahlung, deren Ertrag erst in einer Folgeperiode realisiert wird.",
          },
        ],
        examples: [
          "Nadja zahlt am 1. Oktober die Werkstattmiete für 6 Monate im Voraus in Höhe von €3.600. Zum Jahresende (31. Dezember) sind davon 3 Monate (€1.800) bereits Aufwand der laufenden Periode; die restlichen €1.800 für Januar bis März werden als aktiver RAP in die Bilanz aufgenommen und erst im Folgejahr zu Aufwand.",
        ],
      },
    ],
  },
  // ==================== Kapitel 4 ====================
  {
    id: "rentenrechnung",
    number: 4,
    title: "Rentenformeln: Ewige und endliche Renten",
    free: false,
    intro:
      "Viele Zahlungsströme bestehen nicht aus einer einzelnen Zahlung, sondern aus einer Reihe gleichbleibender (oder gleichmäßig wachsender) Zahlungen — Mieteinnahmen, Kreditraten, Dividenden. Statt jede einzelne Zahlung separat zu diskontieren (Kapitel 2), lassen sich solche Zahlungsströme mit geschlossenen Rentenformeln direkt bewerten. Als laufendes Beispiel dient eine kleine Solargenossenschaft, die aus einer Dachanlage jährliche Einspeisevergütungen erhält.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Barwert eines mehrperiodigen Zahlungsstroms",
        body: [
          "Besteht ein Zahlungsstrom aus mehreren unterschiedlichen Zahlungen Ci in den Perioden i = 1, …, T, ergibt sich sein Barwert als Summe der einzeln diskontierten Zahlungen: BW = Σ Ci / (1 + r)^i. Analog ergibt sich der Endwert des gesamten Zahlungsstroms zum Zeitpunkt T, indem jede Zahlung bis T aufgezinst wird.",
          "Diese Summenformel ist immer anwendbar, wird aber unhandlich, wenn viele oder unendlich viele Perioden betrachtet werden. Für den häufigen Sonderfall konstanter (oder konstant wachsender) Zahlungen existieren deshalb geschlossene Rentenformeln, die in den folgenden Abschnitten hergeleitet werden.",
        ],
        formulas: ["BW = Σ (Ci / (1 + r)^i), i = 1 bis T"],
        formulasLatex: ["BW = \\sum_{i=1}^{T} \\dfrac{C_i}{(1+r)^i}"],
        terms: [
          {
            term: "Zahlungsstrom",
            definition: "Eine Folge von Zahlungen zu verschiedenen Zeitpunkten, die gemeinsam bewertet werden.",
          },
        ],
        examples: [
          "Die Solargenossenschaft erwartet in den nächsten 3 Jahren Einspeisevergütungen von €20, €35 und €50. Bei einem Zinssatz von 8% beträgt der Barwert BW = 20/1,08 + 35/1,08² + 50/1,08³ ≈ 18,52 + 30,01 + 39,69 ≈ €88,22.",
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Ewige Rente (Perpetuity)",
        body: [
          "Fließt ab Periode 1 unbegrenzt eine konstante Zahlung C, spricht man von einer ewigen Rente (Perpetuity). Da immer entferntere Zahlungen immer stärker abgezinst werden, konvergiert die unendliche Summe zu einem endlichen Wert: BW = C / r.",
          "Diese einfache Formel wird z. B. zur Bewertung von Vorzugsaktien mit fester Dividende oder von Grundstücken mit konstanter Pacht verwendet, sofern man von einer unbegrenzten Nutzungsdauer ausgeht.",
        ],
        formulas: ["BW = C / r"],
        formulasLatex: ["BW = \\dfrac{C}{r}"],
        terms: [
          {
            term: "Ewige Rente (Perpetuity)",
            definition: "Ein Zahlungsstrom mit unbegrenzt vielen, gleich hohen periodischen Zahlungen C, beginnend in Periode 1.",
          },
        ],
        examples: [
          "Die Solargenossenschaft least ihre Dachfläche stattdessen dauerhaft an einen Netzbetreiber und erhält dafür unbefristet €40 pro Jahr. Bei einem Zinssatz von 8% beträgt der Barwert dieses Zahlungsstroms BW = 40 / 0,08 = €500.",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Endliche Rente (Annuität)",
        body: [
          "Fließt eine konstante Zahlung C nur über einen begrenzten Zeitraum von T Perioden, spricht man von einer endlichen Rente oder Annuität. Ihr Barwert lässt sich als Differenz zweier ewiger Renten herleiten (eine ab Periode 1, eine ab Periode T+1, die die erste ab T+1 wieder aufhebt): BW = (C/r) · [1 − 1/(1 + r)^T].",
          "Diese Formel ist die Grundlage der Amortisationsrechnung sowie der Bewertung von Krediten mit konstanten Raten (Annuitätendarlehen) und wird in Kapitel 8 für die Investitionsrechnung wieder aufgegriffen.",
        ],
        formulas: ["BW = (C / r) · [1 − 1/(1 + r)^T]"],
        formulasLatex: ["BW = \\dfrac{C}{r}\\left[1 - \\dfrac{1}{(1+r)^T}\\right]"],
        terms: [
          {
            term: "Endliche Rente (Annuität)",
            definition: "Ein Zahlungsstrom mit konstanten periodischen Zahlungen C über einen begrenzten Zeitraum von T Perioden.",
          },
        ],
        examples: [
          "Die Solaranlage der Genossenschaft ist auf 6 Jahre Restnutzungsdauer ausgelegt und erwirtschaftet in dieser Zeit konstant €40 pro Jahr. Bei einem Zinssatz von 8% beträgt der Barwert BW = (40 / 0,08) · [1 − 1/(1,08)^6] = 500 · [1 − 0,6302] ≈ 500 · 0,3698 ≈ €184,90.",
        ],
      },
      {
        id: "4-4",
        heading: "4.4 Renten mit konstantem Wachstum",
        body: [
          "Wächst die periodische Zahlung statt konstant zu bleiben mit einer konstanten Rate g (z. B. weil Einspeisevergütungen jährlich angepasst werden), ändern sich die Formeln entsprechend. Für die ewige, wachsende Rente gilt BW = C / (r − g), wobei diese Formel nur für g < r gültig ist — andernfalls divergiert die Summe. Für die endliche, wachsende Rente über T Perioden gilt BW = [C / (r − g)] · [1 − ((1+g)/(1+r))^T].",
          "Wachsende Renten werden u. a. zur Unternehmensbewertung verwendet (Barwert künftiger, mit der Inflation oder dem erwarteten Wachstum steigender Cashflows) und tauchen in Kapitel 12 bei der Bewertung von Aktien über das Dividendendiskontierungsmodell wieder auf.",
        ],
        formulas: [
          "BW = C / (r − g)  [ewige wachsende Rente]",
          "BW = [C / (r − g)] · [1 − ((1+g)/(1+r))^T]  [endliche wachsende Rente]",
        ],
        formulasLatex: [
          "BW = \\dfrac{C}{r-g}",
          "BW = \\dfrac{C}{r-g}\\left[1 - \\left(\\dfrac{1+g}{1+r}\\right)^{T}\\right]",
        ],
        terms: [
          {
            term: "Wachsende Rente",
            definition: "Zahlungsstrom, dessen periodische Zahlung mit einer konstanten Rate g wächst.",
          },
        ],
        examples: [
          "Die Genossenschaft erwartet ab Periode 1 unbegrenzt Einspeisevergütungen von anfänglich €40, die jährlich um 3% wachsen. Bei einem Zinssatz von 8% beträgt der Barwert BW = 40 / (0,08 − 0,03) = 40 / 0,05 = €800. Wäre der Zahlungsstrom stattdessen auf 6 Jahre begrenzt, ergäbe sich BW = (40/0,05) · [1 − (1,03/1,08)^6] = 800 · [1 − 0,7404] ≈ 800 · 0,2596 ≈ €207,68.",
        ],
      },
    ],
  },
  // ==================== Kapitel 5 ====================
  {
    id: "kostenrechnung-grundlagen",
    number: 5,
    title: "Grundlagen der Kosten- und Leistungsrechnung",
    free: false,
    intro:
      "Während das externe Rechnungswesen (Kapitel 1, 3 und 7) gesetzlichen Regeln folgt und primär außenstehende Adressaten informiert, dient das interne Rechnungswesen (Kosten- und Leistungsrechnung, KLR) der Unternehmensleitung selbst zur Steuerung. Dieses Kapitel legt die begrifflichen Grundlagen, auf denen die Kalkulationsverfahren in Kapitel 9 und 11 sowie die Deckungsbeitragsrechnung in Kapitel 13 aufbauen.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Internes versus externes Rechnungswesen und kalkulatorische Kosten",
        body: [
          "Das interne Rechnungswesen ist — anders als das externe (Kapitel 1) — nicht an gesetzliche Rechnungslegungsstandards gebunden. Dadurch können sogenannte kalkulatorische Kosten angesetzt werden: Kosten, die im externen Rechnungswesen entweder in anderer Höhe (Anderskosten) oder gar nicht (Zusatzkosten) erscheinen, aus Sicht der internen Steuerung aber relevant sind.",
          "Ein klassisches Beispiel für Zusatzkosten sind kalkulatorische Zinsen auf das im Unternehmen gebundene Kapital: Auch das eigene, im Betrieb investierte Kapital hätte anderweitig angelegt werden können (Opportunitätskosten) und wird deshalb intern verzinst, obwohl das externe Rechnungswesen keinen entsprechenden Aufwand kennt. Eine gängige vereinfachte Berechnung verzinst das durchschnittlich gebundene Kapital: kalk. Zinsen = [(Anschaffungswert + Restwert) / 2] · Zinssatz. Weitere typische kalkulatorische Kostenarten sind der kalkulatorische Unternehmerlohn (fiktives Gehalt für die eigene Arbeitszeit des Inhabers) und kalkulatorische Wagniskosten (für Risiken, die im externen Rechnungswesen nicht oder anders über Rückstellungen abgebildet werden, siehe Kapitel 7).",
        ],
        formulas: ["kalk. Zinsen = [(Anschaffungswert + Restwert) / 2] · Zinssatz"],
        formulasLatex: ["\\text{kalk. Zinsen} = \\dfrac{AW + RW}{2}\\cdot i"],
        terms: [
          {
            term: "Kalkulatorische Kosten",
            definition: "Kosten des internen Rechnungswesens, die im externen Rechnungswesen entweder in anderer Höhe (Anderskosten) oder gar nicht (Zusatzkosten) erfasst werden.",
          },
          {
            term: "Kalkulatorischer Unternehmerlohn",
            definition: "Fiktives Gehalt, das einem Einzelunternehmer für seine eigene Arbeitsleistung intern angerechnet wird, obwohl es extern keinen Aufwand darstellt.",
          },
        ],
        examples: [
          "Eine Schreinerei hat eine Kantenanleimmaschine für €80.000 angeschafft, geschätzter Restwert nach Nutzungsdauer €8.000, interner Kalkulationszinssatz 6%. Die kalkulatorischen Zinsen betragen [(80.000 + 8.000) / 2] · 0,06 = 44.000 · 0,06 = €2.640 pro Jahr — ein Betrag, den die externe Buchführung so nicht kennt, der aber in die interne Preiskalkulation einfließt.",
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Kostenarten-, Kostenstellen- und Kostenträgerrechnung",
        body: [
          "Die Kosten- und Leistungsrechnung gliedert sich klassisch in drei aufeinander aufbauende Teilbereiche. Die Kostenartenrechnung beantwortet die Frage, welche Kosten in welcher Höhe überhaupt angefallen sind (z. B. Materialkosten, Personalkosten, Abschreibungen, kalkulatorische Kosten). Die Kostenstellenrechnung verteilt diese Kosten auf die organisatorischen Bereiche, in denen sie angefallen sind (z. B. Einkauf, Fertigung, Vertrieb) — sie beantwortet die Frage, wo die Kosten angefallen sind.",
          "Die Kostenträgerrechnung schließlich verteilt die Kosten auf die einzelnen Produkte oder Dienstleistungen (Kostenträger), die letztlich verkauft werden — sie beantwortet die Frage, wofür die Kosten angefallen sind. Diese drei Stufen sind die Grundlage für die Vollkosten-Kalkulationsverfahren in Kapitel 9 und 11.",
        ],
        terms: [
          {
            term: "Kostenartenrechnung",
            definition: "Erfassung, welche Kostenarten (Material, Personal, Abschreibungen usw.) in welcher Höhe angefallen sind.",
          },
          {
            term: "Kostenstellenrechnung",
            definition: "Verteilung der Kosten auf die organisatorischen Bereiche (Kostenstellen), in denen sie angefallen sind.",
          },
          {
            term: "Kostenträgerrechnung",
            definition: "Verteilung der Kosten auf die einzelnen Produkte oder Dienstleistungen (Kostenträger).",
          },
        ],
        examples: [
          "Eine Spielzeugmanufaktur erfasst zunächst €95.000 Materialkosten und €70.000 Personalkosten (Kostenartenrechnung), verteilt diese dann auf die Kostenstellen Zuschnitt, Lackiererei und Montage, und rechnet die Kostenstellenkosten schließlich den beiden Produktlinien Bauklötze-Set und Puppenhaus als Kostenträger zu.",
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Einzelkosten versus Gemeinkosten",
        body: [
          "Einzelkosten (direct costs) können einem Kostenträger direkt und in exakter Höhe zugeordnet werden, weil sie eindeutig durch dieses Produkt verursacht werden — etwa das Material, das in genau einem Produkt verbaut wird. Gemeinkosten (indirect costs) werden zwar auch durch das Kostenobjekt mitverursacht, lassen sich ihm aber nicht eindeutig in exakter Höhe zuordnen und müssen deshalb über sinnvolle Verteilungsschlüssel (Bezugsgrößen) aufgeteilt werden.",
          "Manche Kosten könnten dem Kostenträger zwar prinzipiell zugeordnet werden, dies wäre aber wirtschaftlich nicht sinnvoll (z. B. der genaue Klebstoffverbrauch pro Einzelteil) — solche Kosten werden trotzdem als Gemeinkosten behandelt und teils als 'unechte Gemeinkosten' bezeichnet.",
        ],
        terms: [
          {
            term: "Einzelkosten",
            definition: "Kosten, die einem Kostenträger direkt und eindeutig in exakter Höhe zugeordnet werden können.",
          },
          {
            term: "Gemeinkosten",
            definition: "Kosten, die nicht eindeutig einem einzelnen Kostenträger zugeordnet werden können und über Verteilungsschlüssel aufgeteilt werden müssen.",
          },
        ],
        examples: [
          "Bei der Spielzeugmanufaktur sind das Buchenholz und die Schnitzarbeit eines bestimmten Puppenhauses Einzelkosten (eindeutig diesem Produkt zurechenbar). Die Miete der Lackiererhalle oder das Gehalt des Werkstattleiters sind dagegen Gemeinkosten, die über einen Verteilungsschlüssel (z. B. Fertigungsstunden) auf die Produkte umgelegt werden müssen (siehe Kapitel 9, Betriebsabrechnungsbogen).",
        ],
      },
      {
        id: "5-4",
        heading: "5.4 Fixe und variable Kosten: die Break-even-Analyse",
        body: [
          "Fixe Kosten Kf fallen unabhängig von der produzierten oder verkauften Menge x an (z. B. Miete, Grundgehälter), variable Kosten kv pro Einheit hängen dagegen direkt von der Menge ab. Bei linearem Kosten- und Umsatzverlauf gilt für das operative Ergebnis: Ergebnis = (p − kv) · x − Kf, wobei p den Verkaufspreis pro Einheit bezeichnet. Der Ausdruck (p − kv) heißt Deckungsbeitrag pro Einheit — er gibt an, wie viel jede verkaufte Einheit zur Deckung der fixen Kosten beiträgt.",
          "Der Break-even-Punkt ist die Menge, bei der das operative Ergebnis genau null ist, der Gesamtdeckungsbeitrag also genau die Fixkosten deckt: x* = Kf / (p − kv). Diese Formel lässt sich leicht erweitern, um die Menge zu bestimmen, die für einen gewünschten Zielgewinn G nötig ist: x = (Kf + G) / (p − kv).",
        ],
        formulas: [
          "Ergebnis = (p − kv) · x − Kf",
          "x* = Kf / (p − kv)  [Break-even-Menge]",
        ],
        formulasLatex: [
          "\\text{Ergebnis} = (p - k_v)\\cdot x - K_f",
          "x^{*} = \\dfrac{K_f}{p - k_v}",
        ],
        terms: [
          {
            term: "Fixe Kosten (Kf)",
            definition: "Kosten, die unabhängig von der produzierten oder verkauften Menge in gleicher Höhe anfallen.",
          },
          {
            term: "Variable Stückkosten (kv)",
            definition: "Kosten pro Einheit, die direkt mit der produzierten oder verkauften Menge variieren.",
          },
          {
            term: "Deckungsbeitrag pro Einheit",
            definition: "Differenz zwischen Verkaufspreis und variablen Stückkosten (p − kv); Beitrag jeder Einheit zur Deckung der Fixkosten.",
          },
          {
            term: "Break-even-Punkt",
            definition: "Absatzmenge, bei der das operative Ergebnis genau null beträgt (Gesamtdeckungsbeitrag = Fixkosten).",
          },
        ],
        examples: [
          "Ein Hersteller professioneller Espressomaschinen für Cafés verkauft ein Modell zum Preis von €2.800 pro Stück. Die variablen Stückkosten betragen €1.600, die fixen Kosten pro Jahr €360.000. Der Deckungsbeitrag pro Einheit beträgt 2.800 − 1.600 = €1.200. Die Break-even-Menge ist x* = 360.000 / 1.200 = 300 Maschinen. Für einen Zielgewinn von €180.000 wären x = (360.000 + 180.000) / 1.200 = 450 Maschinen nötig.",
        ],
      },
    ],
  },
  // ==================== Kapitel 6 ====================
  {
    id: "anleihenbewertung",
    number: 6,
    title: "Bewertung von Anleihen",
    free: false,
    intro:
      "Anleihen (Bonds) sind festverzinsliche Wertpapiere, mit denen sich Unternehmen und Staaten Fremdkapital am Kapitalmarkt beschaffen. Mit den Barwertformeln aus Kapitel 2 und 4 lässt sich ihr Preis systematisch bestimmen — und umgekehrt aus einem beobachteten Marktpreis der implizite Zinssatz ableiten.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Zerobonds und Yield to Maturity",
        body: [
          "Ein Zerobond (Nullkuponanleihe) zahlt während der Laufzeit keine Zinsen; der Anleger erhält lediglich am Ende der Laufzeit den Nennwert zurück. Sein heutiger Preis PZ ist damit schlicht der Barwert des Nennwerts: PZ = Nennwert / (1 + r)^T.",
          "Kennt man umgekehrt den am Markt beobachteten Preis, lässt sich daraus der implizite risikolose Jahreszinssatz — die Yield to Maturity (Rendite bis Fälligkeit) y — ermitteln, indem man die Preisformel nach r auflöst: y = (Nennwert / PZ)^(1/T) − 1.",
        ],
        formulas: [
          "PZ = Nennwert / (1 + r)^T",
          "y = (Nennwert / PZ)^(1/T) − 1",
        ],
        formulasLatex: [
          "P_Z = \\dfrac{\\text{Nennwert}}{(1+r)^T}",
          "y = \\left(\\dfrac{\\text{Nennwert}}{P_Z}\\right)^{1/T} - 1",
        ],
        terms: [
          {
            term: "Zerobond (Nullkuponanleihe)",
            definition: "Anleihe ohne periodische Zinszahlungen; der Anleger erhält nur am Laufzeitende den Nennwert.",
          },
          {
            term: "Yield to Maturity (Rendite bis Fälligkeit)",
            definition: "Der interne Zinssatz einer Anleihe, der ihren Marktpreis mit ihren zukünftigen Zahlungen in Einklang bringt.",
          },
        ],
        examples: [
          "Ein dreijähriger Zerobond der Rheinaue Energiewerke AG mit Nennwert €1.000 notiert aktuell bei €863,84. Die Yield to Maturity beträgt y = (1.000 / 863,84)^(1/3) − 1 ≈ 1,0500 − 1 = 5,0%.",
        ],
      },
      {
        id: "6-2",
        heading: "6.2 Kuponanleihen",
        body: [
          "Bei einer Kuponanleihe erhält der Anleger zusätzlich zur Nennwertrückzahlung am Laufzeitende in jeder Periode einen festen Kupon (Zinszahlung), meist als Prozentsatz des Nennwerts angegeben. Ihr Preis ergibt sich als Barwert aller Kupons plus dem Barwert der Nennwertrückzahlung — de facto eine Kombination aus endlicher Rente (Kapitel 4) und Einzelzahlung.",
          "Ist der Kupon höher als der aktuelle Marktzinssatz, notiert die Anleihe über dem Nennwert (Aufgeld); ist er niedriger, notiert sie darunter (Abgeld). Steigt der Marktzinssatz nach Emission, sinkt der Preis bereits ausgegebener festverzinslicher Anleihen entsprechend, weil ihre fixen Kupons im Vergleich zu neu emittierten Anleihen weniger attraktiv werden.",
        ],
        formulas: ["P = Σ (Kupon / (1 + r)^i) + Nennwert / (1 + r)^T"],
        formulasLatex: ["P = \\sum_{i=1}^{T} \\dfrac{\\text{Kupon}}{(1+r)^i} + \\dfrac{\\text{Nennwert}}{(1+r)^T}"],
        terms: [
          {
            term: "Kuponanleihe",
            definition: "Anleihe mit periodischen festen Zinszahlungen (Kupons) zusätzlich zur Nennwertrückzahlung am Laufzeitende.",
          },
        ],
        examples: [
          "Eine zweijährige Kuponanleihe der Rheinaue Energiewerke AG mit Nennwert €1.000 zahlt einen jährlichen Kupon von 7%. Bei einem Marktzinssatz von 5% p.a. beträgt der Preis P = 70/1,05 + 1.070/1,05² = 66,67 + 970,52 ≈ €1.037,19 — die Anleihe notiert über dem Nennwert, weil ihr Kupon über dem Marktzinssatz liegt.",
        ],
      },
      {
        id: "6-3",
        heading: "6.3 Ratings",
        body: [
          "Ein Rating ist die Bonitätsbeurteilung eines Anleiheemittenten (Emittentenrating) oder einer einzelnen Anleiheemission (Emissionsrating), typischerweise durch darauf spezialisierte, vom Emittenten unabhängige Ratingagenturen vergeben. Es dient Anlegern als Orientierungshilfe über das Ausfallrisiko, senkt Informationskosten und beeinflusst damit direkt den Zinssatz, zu dem sich ein Unternehmen am Kapitalmarkt finanzieren kann.",
          "Ratings werden in Ratingklassen organisiert, die grob in Investment Grade (geringes bis moderates Ausfallrisiko) und Speculative bzw. Non-Investment Grade (höheres Ausfallrisiko, umgangssprachlich auch 'Ramschanleihen') unterteilt werden. Je schlechter das Rating, desto höher der Zinssatz, den Anleger als Kompensation für das übernommene Risiko verlangen — die Kuponanleihe mit schlechterem Rating aus Abschnitt 6.2 müsste also, bei sonst gleichen Merkmalen, einen höheren Kupon bieten, um zum Nennwert emittiert zu werden.",
        ],
        terms: [
          {
            term: "Rating",
            definition: "Bonitätsbeurteilung eines Anleiheemittenten oder einer Anleiheemission durch eine spezialisierte Ratingagentur.",
          },
          {
            term: "Investment Grade / Speculative Grade",
            definition: "Grobe Einteilung der Ratingklassen in Anleihen mit geringerem (Investment Grade) und höherem (Speculative/Non-Investment Grade) Ausfallrisiko.",
          },
        ],
        examples: [
          "Zwei ansonsten identische Anleihen unterscheiden sich nur im Rating: Anleihe A hat ein Investment-Grade-Rating und wird mit 4% verzinst, Anleihe B hat ein Speculative-Grade-Rating und muss 9% bieten, um überhaupt Käufer zu finden — der Renditeaufschlag von 5 Prozentpunkten kompensiert das höhere Ausfallrisiko.",
        ],
      },
    ],
  },
  // ==================== Kapitel 7 ====================
  {
    id: "bewertungswahlrechte",
    number: 7,
    title: "Bewertungswahlrechte im externen Rechnungswesen",
    free: false,
    intro:
      "Das externe Rechnungswesen lässt an mehreren Stellen bewusst Spielraum: Wie wird ein Vermögensgegenstand über seine Nutzungsdauer abgeschrieben? Wie werden gleichartige Vorräte bewertet, wenn ihre Einkaufspreise schwanken? Wie werden fixe Fertigungskosten in den Herstellungskosten behandelt? Dieses Kapitel zeigt, dass diese Wahlrechte den ausgewiesenen Periodengewinn erheblich beeinflussen können, ohne dass sich an der wirtschaftlichen Realität des Unternehmens etwas ändert.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Planmäßige Abschreibung: linear und degressiv",
        body: [
          "Ein Vermögensgegenstand mit Anschaffungswert AW, geschätztem Restwert (Liquidationswert) RW am Ende der Nutzungsdauer und einer Nutzungsdauer von T Perioden muss planmäßig abgeschrieben werden. Bei der linearen Abschreibung ist der Abschreibungsbetrag jede Periode gleich hoch: ABt = (AW − RW) / T.",
          "Bei der geometrisch-degressiven Abschreibung wird dagegen jede Periode derselbe Prozentsatz p vom jeweiligen Buchwert zu Periodenbeginn abgeschrieben, sodass die absoluten Abschreibungsbeträge über die Zeit sinken. Der Prozentsatz ergibt sich aus der Bedingung, dass nach T Perioden genau der Restwert erreicht wird: p = 1 − T√(RW / AW). Eine weitere Variante ist die leistungsbezogene Abschreibung, bei der die Abschreibung proportional zur tatsächlichen Nutzung (z. B. gefahrene Kilometer, produzierte Stückzahl) erfolgt: Abschreibung pro Leistungseinheit = (AW − RW) / geschätzte Gesamtleistungsmenge.",
        ],
        formulas: [
          "ABt = (AW − RW) / T  [linear]",
          "p = 1 − T√(RW / AW)  [geometrisch-degressiv]",
        ],
        formulasLatex: [
          "AB_t = \\dfrac{AW - RW}{T}",
          "p = 1 - \\sqrt[T]{\\dfrac{RW}{AW}}",
        ],
        terms: [
          {
            term: "Lineare Abschreibung",
            definition: "Abschreibungsmethode mit über die Nutzungsdauer konstantem Abschreibungsbetrag pro Periode.",
          },
          {
            term: "Geometrisch-degressive Abschreibung",
            definition: "Abschreibungsmethode mit konstantem Prozentsatz vom jeweiligen Buchwert, wodurch die absoluten Abschreibungsbeträge über die Zeit sinken.",
          },
        ],
        examples: [
          "Eine Konditorei kauft einen Industrie-Kombidämpfer für €60.000, geplante Nutzungsdauer 4 Jahre, geschätzter Restwert €6.000. Linear: ABt = (60.000 − 6.000) / 4 = €13.500 pro Jahr. Degressiv: p = 1 − ⁴√(6.000/60.000) = 1 − ⁴√0,1 ≈ 1 − 0,5623 ≈ 43,77% vom jeweiligen Buchwert; im ersten Jahr somit 60.000 · 0,4377 ≈ €26.262.",
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Außerplanmäßige Abschreibung",
        body: [
          "Verliert ein Vermögensgegenstand unerwartet und voraussichtlich dauerhaft an Wert — etwa durch technologischen Wandel, Beschädigung oder eine dauerhaft verschlechterte Marktlage —, reicht die planmäßige Abschreibung nicht mehr aus. Nach dem Vorsichts- bzw. Imparitätsprinzip (Kapitel 1.4) muss der Buchwert dann außerplanmäßig auf den niedrigeren beizulegenden Wert abgeschrieben werden: außerplanmäßige Abschreibung = bisheriger Buchwert − niedrigerer beizulegender Wert.",
          "Bessert sich die Lage später wieder, darf eine Zuschreibung (Rückgängigmachen der außerplanmäßigen Abschreibung) höchstens bis zu dem Wert erfolgen, der sich bei durchgängig planmäßiger Abschreibung ergeben hätte. Größere Industriekonzerne mussten in der Vergangenheit wiederholt milliardenschwere außerplanmäßige Abschreibungen vornehmen, etwa im Energiesektor, als sich die Marktaussichten für bestimmte Kraftwerkstypen dauerhaft verschlechterten — ein plakatives Beispiel dafür, wie stark dieses Wahlrecht den ausgewiesenen Periodenerfolg großer Unternehmen beeinflussen kann.",
        ],
        formulas: ["außerplanmäßige Abschreibung = bisheriger Buchwert − niedrigerer beizulegender Wert"],
        formulasLatex: ["\\text{a.o. Abschreibung} = BW_{\\text{bisher}} - BW_{\\text{beizulegend, niedriger}}"],
        terms: [
          {
            term: "Außerplanmäßige Abschreibung",
            definition: "Zusätzliche Abschreibung bei unerwartetem, voraussichtlich dauerhaftem Wertverlust eines Vermögensgegenstands über die planmäßige Abschreibung hinaus.",
          },
          {
            term: "Zuschreibung",
            definition: "Teilweises oder vollständiges Rückgängigmachen einer außerplanmäßigen Abschreibung, wenn sich der Wert des Vermögensgegenstands wieder erholt; begrenzt auf den Wert bei durchgängig planmäßiger Abschreibung.",
          },
        ],
        examples: [
          "Ein Freizeitpark hat eine Achterbahn mit einem Buchwert von €2.400.000, deren planmäßige Restnutzungsdauer noch 6 Jahre beträgt. Nach einem Sicherheitsvorfall wird die Anlage dauerhaft stillgelegt; der beizulegende Wert (Schrottwert der Anlage) beträgt nur noch €150.000. Es ist eine außerplanmäßige Abschreibung von 2.400.000 − 150.000 = €2.250.000 zu buchen.",
        ],
      },
      {
        id: "7-3",
        heading: "7.3 Rückstellungen",
        body: [
          "Rückstellungen sind passivierte Verpflichtungen für zukünftige Auszahlungen, deren genaue Höhe oder genauer Zeitpunkt noch ungewiss ist, deren Grund aber bereits in der laufenden Periode liegt (z. B. Gewährleistungsansprüche, drohende Prozesskosten, Restrukturierungsverpflichtungen). Die Bildung einer Rückstellung führt bereits jetzt zu einem Aufwand, obwohl die tatsächliche Auszahlung erst später erfolgt — ein Anwendungsfall des Imparitätsprinzips (Kapitel 1.4).",
          "Die Höhe einer Rückstellung für viele gleichartige Risiken (z. B. Gewährleistungen über ein ganzes Produktsortiment) wird häufig auf Basis von Erfahrungswerten und Wahrscheinlichkeiten geschätzt. Weil dieser Ermessensspielraum den Periodenerfolg beeinflusst, besteht ein Risiko der Erfolgsglättung (Income Smoothing): In guten Jahren werden hohe Rückstellungen gebildet, die in schlechteren Jahren wieder aufgelöst werden können.",
        ],
        terms: [
          {
            term: "Rückstellung",
            definition: "Passivierte Verpflichtung für eine zukünftige Auszahlung, deren Höhe oder Zeitpunkt ungewiss ist, deren Grund aber bereits in der laufenden Periode liegt.",
          },
          {
            term: "Income Smoothing (Erfolgsglättung)",
            definition: "Nutzung von Ermessensspielräumen (z. B. bei Rückstellungen) zur künstlichen Glättung des ausgewiesenen Periodenerfolgs über mehrere Jahre.",
          },
        ],
        examples: [
          "Ein Sportartikelhersteller erwartet aus einem laufenden Gewährleistungsfall eine Zahlung von voraussichtlich €45.000 an Kunden. Er bildet dafür eine Rückstellung in Höhe von €45.000: Die Fremdkapitalseite der Bilanz erhöht sich um €45.000, gleichzeitig entsteht ein Aufwand von €45.000, der das Eigenkapital entsprechend mindert — ohne dass in dieser Periode bereits eine Auszahlung stattfindet.",
        ],
      },
      {
        id: "7-4",
        heading: "7.4 Vorratsbewertung: FIFO, LIFO und gleitender Durchschnitt",
        body: [
          "Werden gleichartige Vorräte zu unterschiedlichen Zeitpunkten und Preisen eingekauft, muss beim Verbrauch bzw. Verkauf festgelegt werden, welcher historische Einkaufspreis als verbraucht gilt. Beim FIFO-Verfahren (First In, First Out) wird angenommen, dass die zuerst eingekauften Einheiten auch zuerst das Lager verlassen. Beim LIFO-Verfahren (Last In, First Out) gilt die entgegengesetzte Annahme: Die zuletzt eingekauften Einheiten verlassen das Lager zuerst.",
          "Beim gleitend gewogenen Durchschnittsverfahren wird nach jedem Einkauf ein neuer gewichteter Durchschnittspreis über den gesamten Lagerbestand gebildet, zu dem dann jeder weitere Verbrauch bewertet wird. Bei steigenden Einkaufspreisen führt FIFO tendenziell zum höchsten ausgewiesenen Gewinn (weil günstigere, ältere Preise als Aufwand verbucht werden) und LIFO zum niedrigsten; der gleitende Durchschnitt liegt dazwischen.",
        ],
        terms: [
          {
            term: "FIFO (First In, First Out)",
            definition: "Vorratsbewertungsmethode, bei der die zuerst eingekauften Einheiten als zuerst verbraucht gelten.",
          },
          {
            term: "LIFO (Last In, First Out)",
            definition: "Vorratsbewertungsmethode, bei der die zuletzt eingekauften Einheiten als zuerst verbraucht gelten.",
          },
          {
            term: "Gleitend gewogenes Durchschnittsverfahren",
            definition: "Vorratsbewertungsmethode, bei der nach jedem Einkauf ein neuer gewichteter Durchschnittspreis über den gesamten Bestand gebildet wird.",
          },
        ],
        examples: [
          "Eine Kaffeerösterei hat einen Anfangsbestand von 200 kg Rohkaffee zu €6/kg (€1.200). Sie kauft 800 kg zu €8/kg (€6.400) hinzu und verkauft anschließend 600 kg Röstkaffee-Äquivalent. Bei FIFO gelten zuerst die 200 kg zu €6 und dann 400 kg zu €8 als verbraucht: Wareneinsatz = 200·6 + 400·8 = 1.200 + 3.200 = €4.400. Bei LIFO gelten zuerst 600 kg zu €8 als verbraucht: Wareneinsatz = 600 · 8 = €4.800. Beim gleitenden Durchschnitt beträgt der Durchschnittspreis (1.200 + 6.400) / 1.000 = €7,60/kg, Wareneinsatz = 600 · 7,60 = €4.560.",
        ],
      },
      {
        id: "7-5",
        heading: "7.5 Voll- versus Teilkostenrechnung (AC vs. VC)",
        body: [
          "Bei der Bewertung der Herstellungskosten unterscheiden sich zwei Systeme darin, wie mit fixen Fertigungskosten umgegangen wird. Bei der Teilkostenrechnung (Variable Costing, VC) gehen nur die variablen Fertigungskosten in die Herstellungskosten ein; fixe Fertigungskosten werden vollständig als Periodenaufwand verbucht. Bei der Vollkostenrechnung (Absorption Costing, AC) werden sowohl variable als auch fixe Fertigungskosten in den Herstellungskosten aktiviert und damit anteilig auf Lager genommen, statt sofort als Aufwand zu wirken.",
          "Unterscheiden sich Produktions- und Absatzmenge einer Periode (Lageraufbau oder -abbau), führen AC und VC zu unterschiedlichem ausgewiesenem Periodengewinn: Bei Lageraufbau (mehr produziert als verkauft) weist AC einen höheren Gewinn aus als VC, weil ein Teil der fixen Fertigungskosten in den aktivierten Lagerbestand statt in den Periodenaufwand wandert. Bei Lagerabbau ist es umgekehrt. Die Gewinndifferenz lässt sich direkt berechnen: ΔGewinn(AC−VC) = Lagerbestandsänderung in Stück × fixe Fertigungskosten pro Stück.",
        ],
        formulas: ["ΔGewinn(AC−VC) = Δ Lagerbestand (Stück) · fixe Fertigungskosten pro Stück"],
        formulasLatex: ["\\Delta \\text{Gewinn}_{AC-VC} = \\Delta \\text{Lager (Stück)} \\cdot k_{f,\\text{Fertigung}}"],
        terms: [
          {
            term: "Vollkostenrechnung (Absorption Costing, AC)",
            definition: "Kostenrechnungssystem, bei dem sowohl variable als auch fixe Fertigungskosten in den Herstellungskosten aktiviert werden.",
          },
          {
            term: "Teilkostenrechnung (Variable Costing, VC)",
            definition: "Kostenrechnungssystem, bei dem nur variable Fertigungskosten in den Herstellungskosten aktiviert werden; fixe Fertigungskosten sind sofort Periodenaufwand.",
          },
        ],
        examples: [
          "Eine Möbelmanufaktur produziert in einer Periode 3.000 Stühle: variable Fertigungskosten €45.000, fixe Fertigungskosten €24.000, Vertriebskosten (Periodenaufwand) €12.000. Verkauft werden 2.700 Stühle zu insgesamt €108.000 Umsatzerlösen. Fixe Fertigungskosten pro Stück betragen 24.000/3.000 = €8. Bei AC: Fertigungskosten = (45.000+24.000)/3.000 · 2.700 = 23·2.700 = €62.100, Periodenaufwand €12.000, Gewinn = 108.000 − 62.100 − 12.000 = €33.900. Bei VC: Fertigungskosten = 45.000/3.000 · 2.700 = 15·2.700 = €40.500, Periodenaufwand = 24.000+12.000 = €36.000, Gewinn = 108.000 − 40.500 − 36.000 = €31.500. Differenz: (3.000−2.700) · 8 = €2.400, was genau 33.900 − 31.500 entspricht.",
        ],
      },
    ],
  },
  // ==================== Kapitel 8 ====================
  {
    id: "investitionsrechnung-npv-payback",
    number: 8,
    title: "Investitionsrechnung I: Kapitalwert und Amortisationsdauer",
    free: false,
    intro:
      "Soll ein Investitionsprojekt durchgeführt werden? Capital Budgeting bezeichnet den Entscheidungsprozess darüber, gestützt auf systematische Bewertungsmethoden. Dieses Kapitel behandelt die beiden wichtigsten Grundmethoden — Kapitalwertmethode und Amortisationsrechnung; die interne Zinssatzmethode folgt in Kapitel 10.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Der Kapitalwert (Net Present Value)",
        body: [
          "Der Kapitalwert KW (Net Present Value, NPV) einer Investition ist die Summe der Barwerte aller mit ihr verbundenen zukünftigen Zahlungen abzüglich der Anfangsauszahlung: KW = −Anfangsauszahlung + BW(zukünftige Zahlungen). Der dabei verwendete Zinssatz (Kapitalkostensatz) spiegelt die für das Risiko der Investition angemessene, erwartete Rendite wider — häufig approximiert durch die Opportunitätskosten des eingesetzten Kapitals.",
          "Entscheidungsregel der Kapitalwertmethode: Führe ein Investitionsprojekt genau dann durch, wenn sein Kapitalwert größer als null ist. In diesem Fall erwirtschaftet das Projekt mehr, als zur Deckung aller Kapitalkosten nötig wäre, und schafft damit zusätzlichen Wert für die Anteilseigner.",
        ],
        formulas: ["KW = −Anfangsauszahlung + BW(zukünftige Zahlungen)"],
        formulasLatex: ["KW = -AAZ + \\sum_{i=1}^{T}\\dfrac{C_i}{(1+r)^i}"],
        terms: [
          {
            term: "Kapitalwert (Net Present Value, NPV)",
            definition: "Barwert aller mit einer Investition verbundenen zukünftigen Zahlungen abzüglich der Anfangsauszahlung.",
          },
          {
            term: "Kapitalkostensatz",
            definition: "Der für das Risiko einer Investition angemessene Zinssatz, mit dem ihre zukünftigen Zahlungen diskontiert werden.",
          },
        ],
        examples: [
          "Ein Foodtruck-Betreiber überlegt, für €14.000 eine zusätzliche mobile Küchenausstattung anzuschaffen, die in einem Jahr zu einer Zahlung von €15.500 führt. Bei einem Kapitalkostensatz von 6% beträgt der Kapitalwert KW = −14.000 + 15.500/1,06 = −14.000 + 14.622,64 ≈ €622,64. Da KW > 0, lohnt sich die Investition.",
        ],
      },
      {
        id: "8-2",
        heading: "8.2 Amortisationsrechnung (Payback-Methode)",
        body: [
          "Die Amortisationsrechnung (Payback Method) ermittelt die Amortisationsdauer AD: die Zeitspanne, nach der die kumulierten Rückflüsse eines Projekts die Anfangsauszahlung erstmals decken. Die Entscheidungsregel lautet: Führe ein Projekt durch, wenn seine Amortisationsdauer eine zuvor festgelegte maximale Amortisationsdauer nicht überschreitet.",
          "Die Methode ist schnell und einfach anzuwenden und eignet sich besonders für Unternehmen mit eingeschränktem Kapitalmarktzugang, weil sie einen schnellen Kapitalrückfluss belohnt. Ihre zentralen Schwächen: Sie berücksichtigt weder den Zeitpunkt der Zahlungen innerhalb der Amortisationsdauer (keine Diskontierung) noch Zahlungen, die nach Ablauf der Amortisationsdauer anfallen — zwei ansonsten sehr unterschiedliche Projekte können dieselbe Amortisationsdauer aufweisen, obwohl ihr Kapitalwert stark differiert.",
        ],
        terms: [
          {
            term: "Amortisationsdauer (Payback Period)",
            definition: "Zeitspanne, nach der die kumulierten Rückflüsse eines Investitionsprojekts die Anfangsauszahlung erstmals decken.",
          },
        ],
        examples: [
          "Eine Brauerei prüft vier mögliche Abfüllanlagen mit jeweils vierjährigem Horizont und einer Anfangsauszahlung von je €80.000: Anlage W liefert Rückflüsse von €20.000, €30.000, €40.000, €40.000; Anlage X liefert €40.000, €30.000, €20.000, €40.000; Anlage Y liefert €40.000, €30.000, €20.000, €400.000; Anlage Z liefert €40.000, €10.000, €10.000, €30.000. Kumuliert erreichen W, X und Y ihre €80.000 jeweils nach 3 Jahren (AD = 3), Z erst nach 4 Jahren (AD = 4). Bei einer maximalen Amortisationsdauer von 3 Jahren würden W, X und Y durchgeführt, obwohl sie sehr unterschiedliche Kapitalwerte haben können — ein typisches Problem der Payback-Methode.",
        ],
      },
    ],
  },
  // ==================== Kapitel 9 ====================
  {
    id: "bab-kostenverteilung",
    number: 9,
    title: "Der Betriebsabrechnungsbogen und Kostenverteilungsverfahren",
    free: false,
    intro:
      "Gemeinkosten (Kapitel 5.3) müssen über Verteilungsschlüssel auf Kostenstellen und letztlich auf Kostenträger verteilt werden. Der Betriebsabrechnungsbogen (BAB) ist das zentrale Werkzeug dafür. Besonders anspruchsvoll wird es, wenn Hilfskostenstellen (Vorkostenstellen) sich gegenseitig Leistungen liefern, bevor ihre Kosten auf die eigentlichen Fertigungs- und Vertriebskostenstellen (Endkostenstellen) verteilt werden. Als laufendes Beispiel dient eine Möbelfabrik mit den Vorkostenstellen Werkstattreinigung und Fuhrpark sowie den Endkostenstellen Zuschnitt und Montage.",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Aufbau des Betriebsabrechnungsbogens",
        body: [
          "Im Betriebsabrechnungsbogen (BAB) stehen die Kostenstellen als Spalten, die einzelnen Gemeinkostenarten (z. B. Energie, Miete, Gehälter) als Zeilen. Die primären Gemeinkosten werden zunächst direkt oder über einen ersten Verteilungsschlüssel auf alle Kostenstellen aufgeteilt. Anschließend müssen die Kosten der Vorkostenstellen (Hilfskostenstellen wie Werkstattreinigung oder Fuhrpark, die primär andere Kostenstellen und nicht direkt die Kostenträger bedienen) auf die Endkostenstellen (Zuschnitt, Montage, Vertrieb) weiterverrechnet werden — die sogenannte Sekundärkostenverrechnung.",
          "Für diese Sekundärkostenverrechnung existieren drei gängige Verfahren, die sich darin unterscheiden, wie mit gegenseitigen Leistungsbeziehungen zwischen den Vorkostenstellen umgegangen wird: das Anbauverfahren, das Stufenleiterverfahren und das Gleichungsverfahren. Die Gesamtsumme der Kosten ändert sich durch keines der drei Verfahren — sie werden lediglich unterschiedlich auf die Kostenstellen verteilt.",
        ],
        terms: [
          {
            term: "Vorkostenstelle (Hilfskostenstelle)",
            definition: "Kostenstelle, die primär andere Kostenstellen bedient (z. B. Werkstattreinigung, Fuhrpark) und nicht direkt Kostenträgern zugeordnet wird.",
          },
          {
            term: "Endkostenstelle",
            definition: "Kostenstelle, deren Kosten letztlich über die Kostenträgerrechnung den Produkten zugerechnet werden (z. B. Fertigung, Vertrieb).",
          },
          {
            term: "Sekundärkostenverrechnung",
            definition: "Weiterverrechnung der Kosten von Vorkostenstellen auf Endkostenstellen (und ggf. andere Vorkostenstellen).",
          },
        ],
        examples: [
          "Die Möbelfabrik erfasst im BAB primäre Gemeinkosten von €9.000 für die Werkstattreinigung und €12.000 für den Fuhrpark. Die Reinigung leistet insgesamt 500 Reinigungsstunden (50 an den Fuhrpark, 300 an den Zuschnitt, 150 an die Montage), der Fuhrpark insgesamt 1.200 km (100 an die Reinigung, 700 an den Zuschnitt, 400 an die Montage).",
        ],
      },
      {
        id: "9-2",
        heading: "9.2 Anbauverfahren",
        body: [
          "Das Anbauverfahren ist die einfachste Methode: Die Kosten jeder Vorkostenstelle werden ausschließlich auf die Endkostenstellen verteilt; Leistungen, die eine Vorkostenstelle an eine andere Vorkostenstelle liefert, werden schlicht ignoriert. Der Verrechnungspreis pro Leistungseinheit ergibt sich damit als: Verrechnungspreis = primäre Gemeinkosten der Vorkostenstelle / Summe der an Endkostenstellen gelieferten Leistungseinheiten.",
          "Der Vorteil ist die einfache Berechnung; der Nachteil, dass Leistungsbeziehungen zwischen den Vorkostenstellen selbst systematisch vernachlässigt werden, was zu Verzerrungen führen kann, wenn diese Leistungsbeziehungen bedeutend sind.",
        ],
        formulas: ["Verrechnungspreis = primäre Gemeinkosten / Σ an Endkostenstellen gelieferte Einheiten"],
        formulasLatex: ["q = \\dfrac{K_{prim\\ddot{a}r}}{\\sum \\text{an Endkostenstellen gelieferte Einheiten}}"],
        terms: [
          {
            term: "Anbauverfahren",
            definition: "Sekundärkostenverrechnung, bei der die Kosten der Vorkostenstellen nur auf Endkostenstellen verteilt werden; gegenseitige Leistungen zwischen Vorkostenstellen werden ignoriert.",
          },
        ],
        examples: [
          "Reinigung: Verrechnungspreis = 9.000 / (300 + 150) = 9.000 / 450 = €20 pro Reinigungsstunde. Fuhrpark: Verrechnungspreis = 12.000 / (700 + 400) = 12.000 / 1.100 ≈ €10,91 pro km. Der Zuschnitt erhält damit 300 · 20 + 700 · 10,91 = 6.000 + 7.636 = €13.636 an Sekundärkosten, die Montage 150 · 20 + 400 · 10,91 = 3.000 + 4.364 = €7.364.",
        ],
      },
      {
        id: "9-3",
        heading: "9.3 Stufenleiterverfahren",
        body: [
          "Das Stufenleiterverfahren berücksichtigt Leistungsbeziehungen zwischen Vorkostenstellen teilweise: Man legt eine Reihenfolge fest, in der die Vorkostenstellen abgerechnet werden. Die zuerst abgerechnete Vorkostenstelle verteilt ihre Kosten auf alle nachfolgenden Kostenstellen (sowohl weitere Vorkostenstellen als auch Endkostenstellen); eine bereits abgerechnete Vorkostenstelle erhält aber selbst keine Kosten von später abgerechneten Vorkostenstellen zurück.",
          "Die Wahl der Reihenfolge beeinflusst das Ergebnis und sollte sich danach richten, welche Vorkostenstelle die meisten Leistungen an andere Vorkostenstellen liefert (diese sollte zuerst abgerechnet werden).",
        ],
        formulas: ["Verrechnungspreis (Stufe i) = (primäre + erhaltene Gemeinkosten) / Σ noch nicht verrechnete Leistungseinheiten"],
        formulasLatex: ["q_i = \\dfrac{K_{prim\\ddot{a}r,i} + K_{empfangen,i}}{\\sum \\text{verbleibende Leistungseinheiten}}"],
        terms: [
          {
            term: "Stufenleiterverfahren",
            definition: "Sekundärkostenverrechnung mit festgelegter Reihenfolge, bei der jede Vorkostenstelle ihre Kosten auf alle nachfolgenden Kostenstellen verteilt, selbst aber keine Kosten von später abgerechneten Vorkostenstellen zurückerhält.",
          },
        ],
        examples: [
          "Wird zuerst die Reinigung abgerechnet: Verrechnungspreis = 9.000 / 500 (alle gelieferten Stunden, inkl. der 50 an den Fuhrpark) = €18 pro Stunde. Der Fuhrpark erhält davon 50 · 18 = €900 und hat damit Gesamtkosten von 12.000 + 900 = €12.900, die er — da die Reinigung bereits abgerechnet ist — nur noch auf die Endkostenstellen verteilt: Verrechnungspreis Fuhrpark = 12.900 / (700 + 400) = 12.900 / 1.100 ≈ €11,73 pro km.",
        ],
      },
      {
        id: "9-4",
        heading: "9.4 Gleichungsverfahren",
        body: [
          "Das Gleichungsverfahren ist die genaueste Methode: Es lässt zu, dass sich Vorkostenstellen wechselseitig mit Kosten belasten (z. B. liefert die Reinigung Leistungen an den Fuhrpark UND der Fuhrpark liefert Leistungen an die Reinigung). Für jede Vorkostenstelle wird eine Gleichung aufgestellt: primäre Gemeinkosten plus von anderen Vorkostenstellen empfangene Kosten müssen gleich den insgesamt zum Verrechnungspreis bewerteten, abgegebenen Leistungseinheiten sein. Das entstehende Gleichungssystem wird nach den unbekannten Verrechnungspreisen aufgelöst (bei mehr als zwei Vorkostenstellen üblicherweise mit Matrizenrechnung).",
          "Klausurrelevant ist vor allem, das Gleichungssystem korrekt aufzustellen und das Ergebnis zu interpretieren — nicht die manuelle Matrizeninversion.",
        ],
        terms: [
          {
            term: "Gleichungsverfahren",
            definition: "Sekundärkostenverrechnung wie das Stufenleiterverfahren, bei der jedoch auch wechselseitige Leistungsbeziehungen zwischen Vorkostenstellen berücksichtigt werden, indem die Verrechnungspreise über ein Gleichungssystem simultan bestimmt werden.",
          },
        ],
        examples: [
          "Mit q1 = Verrechnungspreis pro Reinigungsstunde und q2 = Verrechnungspreis pro km ergeben sich die Gleichungen: Reinigung: 9.000 + 100 · q2 = 500 · q1. Fuhrpark: 12.000 + 50 · q1 = 1.200 · q2. Aus der ersten Gleichung folgt q1 = 18 + 0,2 · q2; eingesetzt in die zweite Gleichung: 12.000 + 50 · (18 + 0,2 q2) = 1.200 q2, also 12.900 + 10 q2 = 1.200 q2, also q2 = 12.900 / 1.190 ≈ €10,84 pro km und q1 = 18 + 0,2 · 10,84 ≈ €20,17 pro Reinigungsstunde — beide Verrechnungspreise berücksichtigen nun konsistent den wechselseitigen Leistungsaustausch.",
        ],
      },
    ],
  },
  // ==================== Kapitel 10 ====================
  {
    id: "interner-zinssatz-kapitalwertrate",
    number: 10,
    title: "Investitionsrechnung II: Interner Zinssatz und Kapitalwertrate",
    free: false,
    intro:
      "Neben Kapitalwert und Amortisationsdauer (Kapitel 8) ist die interne Zinssatzmethode (IZSM, Internal Rate of Return, IRR) die dritte klassische Investitionsrechenmethode. Sie liefert eine einzige, leicht kommunizierbare Rendite-Kennzahl — birgt aber, wie dieses Kapitel zeigt, mehrere Fallstricke, die man kennen muss, um sie richtig anzuwenden.",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Der interne Zinssatz und seine Entscheidungsregel",
        body: [
          "Der interne Zinssatz IZS (Internal Rate of Return, IRR) eines Investitionsprojekts ist derjenige Zinssatz, bei dem der Kapitalwert der Investition genau null wird: 0 = −Anfangsauszahlung + Σ Ci / (1 + IZS)^i. Die Entscheidungsregel lautet: Führe ein Projekt durch, wenn sein interner Zinssatz den geforderten (Kapital-)Zinssatz übersteigt.",
          "Der Vorteil der Methode liegt in der einfachen, prozentualen Kennzahl, die sich gut zwischen Projekten unterschiedlicher Größe kommunizieren lässt. Bei einem einzelnen, unabhängigen Projekt mit genau einem Vorzeichenwechsel im Zahlungsstrom (zunächst Auszahlung, dann nur noch Einzahlungen) führt sie zur selben Entscheidung wie die Kapitalwertmethode.",
        ],
        formulas: ["0 = −Anfangsauszahlung + Σ (Ci / (1+IZS)^i)"],
        formulasLatex: ["0 = -AAZ + \\sum_{i=1}^{T} \\dfrac{C_i}{(1+IZS)^i}"],
        terms: [
          {
            term: "Interner Zinssatz (IZS, IRR)",
            definition: "Der Zinssatz, bei dem der Kapitalwert einer Investition genau null beträgt.",
          },
        ],
        examples: [
          "Ein Gewächshausbetreiber investiert €40 in eine Bewässerungsanlage, die im Folgejahr €48 zurückfließen lässt. Der interne Zinssatz löst 0 = −40 + 48/(1+IZS), also IZS = 48/40 − 1 = 20%. Liegt der geforderte Zinssatz unter 20%, ist die Investition vorteilhaft.",
        ],
      },
      {
        id: "10-2",
        heading: "10.2 Problem: mehrere interne Zinssätze",
        body: [
          "Wechselt der Zahlungsstrom eines Projekts mehr als einmal das Vorzeichen (z. B. Auszahlung, dann Einzahlung, dann erneut Auszahlung), kann die Kapitalwertgleichung mehrere mathematisch gültige Lösungen für den internen Zinssatz besitzen. Grundsätzlich gilt: Bei n Vorzeichenwechseln können bis zu n verschiedene interne Zinssätze existieren. In diesem Fall liefert die IZSM keine eindeutige Entscheidungsgrundlage mehr.",
          "Ein Beispiel: Ein Rückbauprojekt (Anfangsinvestition, positiver Cashflow während des Betriebs, anschließend eine erneute Auszahlung für die Entsorgung am Laufzeitende) kann durch diesen doppelten Vorzeichenwechsel zwei unterschiedliche interne Zinssätze aufweisen. In solchen Fällen sollte man auf die Kapitalwertmethode zurückgreifen: Man kann direkt prüfen, für welchen Bereich des geforderten Zinssatzes der Kapitalwert positiv ist, statt sich auf einen einzelnen internen Zinssatz zu verlassen.",
        ],
        terms: [
          {
            term: "Mehrdeutigkeit des internen Zinssatzes",
            definition: "Auftreten mehrerer mathematisch gültiger interner Zinssätze bei einem Zahlungsstrom mit mehr als einem Vorzeichenwechsel.",
          },
        ],
        examples: [
          "Ein Recyclinghof least eine Sortieranlage: C0 = −90, C1 = 210, C2 = −126. Die Kapitalwertgleichung 0 = −90 + 210/(1+r) − 126/(1+r)² besitzt zwei Lösungen, r = 10% und r = 40%. Zwischen diesen beiden Zinssätzen ist der Kapitalwert positiv, außerhalb negativ — die IZSM allein liefert hier keine sinnvolle Entscheidungsregel, wohl aber die direkte Betrachtung des Kapitalwerts in Abhängigkeit vom geforderten Zinssatz.",
        ],
      },
      {
        id: "10-3",
        heading: "10.3 Problem: sich gegenseitig ausschließende Projekte",
        body: [
          "Bei zwei sich gegenseitig ausschließenden Projekten (es kann nur eines von beiden realisiert werden) kann die IZSM zu einer anderen Rangfolge führen als die Kapitalwertmethode — obwohl Letztere theoretisch fundierter ist (sie misst direkt den geschaffenen Wert in Geldeinheiten). Zwei typische Ursachen: das Größenproblem (die Projekte unterscheiden sich stark in der Höhe der Anfangsauszahlung, sodass ein hoher IZS bei einem kleinen Projekt einen niedrigeren, aber in absoluten Euro höheren Kapitalwert eines größeren Projekts überdecken kann) und das Timing-Problem (die Projekte unterscheiden sich in der zeitlichen Verteilung ihrer Zahlungen, sodass die Rangfolge vom gewählten Diskontsatz abhängt).",
          "Eine Lösung für beide Probleme ist die Betrachtung des Differenzprojekts: Man bildet den Zahlungsstrom, der sich aus der Differenz der beiden Projekte ergibt (Projekt A minus Projekt B), und wendet die IZSM auf dieses Differenzprojekt an. Ist der interne Zinssatz des Differenzprojekts größer als der geforderte Zinssatz, ist das Projekt mit den höheren Zahlungen (hier A) vorzuziehen — dieses Ergebnis ist stets konsistent mit der Kapitalwertmethode.",
        ],
        terms: [
          {
            term: "Größenproblem (Scale Problem)",
            definition: "Verzerrung der IZSM-Rangfolge bei sich ausschließenden Projekten unterschiedlicher Investitionsgröße.",
          },
          {
            term: "Timing-Problem",
            definition: "Verzerrung der IZSM-Rangfolge bei sich ausschließenden Projekten mit unterschiedlicher zeitlicher Verteilung der Zahlungen; die Rangfolge hängt dann vom gewählten Zinssatz ab.",
          },
          {
            term: "Differenzprojekt",
            definition: "Zahlungsstrom, der sich aus der Differenz zweier sich ausschließender Projekte ergibt; seine IZSM-Anwendung führt zu einer mit der Kapitalwertmethode konsistenten Entscheidung.",
          },
        ],
        examples: [
          "Ein Getränkehersteller kann entweder in eine kleine Abfüllstraße (C0 = −8, C1 = 15, IZS = 87,5%) oder eine große Abfüllstraße (C0 = −30, C1 = 42, IZS = 40%) investieren. Nach IZS wäre die kleine Anlage vorzuziehen, nach Kapitalwert bei 15% (KW klein = 5,04, KW groß = 6,52) die große. Das Differenzprojekt (groß minus klein: C0 = −22, C1 = 27) hat einen IZS von 27/22 − 1 ≈ 22,7%; da dieser über dem geforderten Zinssatz von 15% liegt, ist die zusätzliche Investition in die große Anlage lohnend — konsistent mit der Kapitalwertmethode.",
        ],
      },
      {
        id: "10-4",
        heading: "10.4 Exkurs: Die Kapitalwertrate (Profitability Index)",
        body: [
          "Die Kapitalwertrate KWR (Profitability Index, PI) setzt den Barwert der zukünftigen Zahlungen ins Verhältnis zur Anfangsauszahlung: KWR = BW(zukünftige Zahlungen) / Anfangsauszahlung. Die Entscheidungsregel lautet: Führe ein Projekt durch, wenn KWR > 1 — was rechnerisch exakt der Bedingung KW > 0 entspricht, da KWR nur eine andere (relative statt absolute) Darstellung desselben Kapitalwertkriteriums ist.",
          "Der praktische Vorteil der Kapitalwertrate zeigt sich vor allem bei Kapitalrationierung: Stehen nicht genug Mittel zur Verfügung, um alle Projekte mit positivem Kapitalwert durchzuführen, hilft die Kapitalwertrate dabei, den Kapitalwert pro eingesetztem Euro zu vergleichen und die Projekte mit der höchsten 'Wertschöpfung pro Euro' zuerst auszuwählen.",
        ],
        formulas: ["KWR = BW(zukünftige Zahlungen) / Anfangsauszahlung"],
        formulasLatex: ["KWR = \\dfrac{BW(\\text{zuk\\ddot{u}nftige Zahlungen})}{AAZ}"],
        terms: [
          {
            term: "Kapitalwertrate (Profitability Index)",
            definition: "Verhältnis von Barwert der zukünftigen Zahlungen zu Anfangsauszahlung; ein Projekt ist bei KWR > 1 vorteilhaft.",
          },
        ],
        examples: [
          "Ein unabhängiges Projekt Q hat eine Anfangsauszahlung von €25 und Zahlungen von C1 = €6 und C2 = €24. Bei einem geforderten Zinssatz von 10% beträgt der Barwert der zukünftigen Zahlungen 6/1,1 + 24/1,1² ≈ 5,4545 + 19,8347 ≈ 25,2892. Die Kapitalwertrate ist KWR = 25,2892 / 25 ≈ 1,0116. Da KWR > 1 (äquivalent: KW ≈ 0,29 > 0), ist Projekt Q durchzuführen.",
        ],
      },
    ],
  },
  // ==================== Kapitel 11 ====================
  {
    id: "kalkulationsverfahren",
    number: 11,
    title: "Kalkulationsverfahren der Kostenträgerstückrechnung",
    free: false,
    intro:
      "Die Kostenträgerstückrechnung beantwortet die Frage, wie viel ein einzelnes Produkt oder eine einzelne Dienstleistung tatsächlich kostet — eine zentrale Grundlage für Preisentscheidungen. Aufbauend auf der Kostenstellenrechnung aus Kapitel 5 und dem Betriebsabrechnungsbogen aus Kapitel 9 stellt dieses Kapitel fünf gängige Kalkulationsverfahren vor, die je nach Produktionsstruktur passend sind.",
    sections: [
      {
        id: "11-1",
        heading: "11.1 Divisionskalkulation",
        body: [
          "Die Divisionskalkulation eignet sich für Unternehmen mit einem homogenen Massenprodukt (z. B. Trinkwasser, Zement, Strom), sofern keine schwankende Lagerhaltung vorliegt. In der einfachsten (einstufigen) Form werden die Selbstkosten pro Stück schlicht durch Division ermittelt: Selbstkosten pro Stück = Gesamtkosten / Produktionsmenge.",
          "Unterscheiden sich Produktions- und Absatzmenge (z. B. durch Lageraufbau), wird die zweistufige Divisionskalkulation verwendet: Selbstkosten pro Stück = Herstellkosten / Produktionsmenge + Verwaltungs- und Vertriebskosten / Absatzmenge. Bei mehrstufigen Produktionsprozessen mit mehreren Fertigungsstufen (z. B. bei einem Getränkeabfüller: Wasseraufbereitung, Abfüllung, Verpackung) wird die mehrstufige Divisionskalkulation angewendet, bei der die Kosten jeder Stufe auf die jeweils durchlaufende Menge verteilt und kumulativ an die nächste Stufe weitergegeben werden.",
        ],
        formulas: [
          "Selbstkosten/Stück = Gesamtkosten / Produktionsmenge  [einstufig]",
          "Selbstkosten/Stück = Herstellkosten/Produktionsmenge + Verwaltungs-/Vertriebskosten/Absatzmenge  [zweistufig]",
        ],
        formulasLatex: [
          "\\dfrac{\\text{Selbstkosten}}{\\text{St\\\"uck}} = \\dfrac{\\text{Gesamtkosten}}{\\text{Produktionsmenge}}",
          "\\dfrac{\\text{Selbstkosten}}{\\text{St\\\"uck}} = \\dfrac{\\text{Herstellkosten}}{\\text{Produktionsmenge}} + \\dfrac{\\text{Verw./Vertriebskosten}}{\\text{Absatzmenge}}",
        ],
        terms: [
          {
            term: "Divisionskalkulation",
            definition: "Kalkulationsverfahren für homogene Massenprodukte, bei dem die Gesamtkosten (bzw. gestuft: Herstell- und Verwaltungs-/Vertriebskosten) durch die entsprechende Menge geteilt werden.",
          },
        ],
        examples: [
          "Ein Mineralwasserabfüller produziert in einem Monat 500.000 Liter, verkauft davon aber nur 480.000 Liter (der Rest geht ins Lager). Herstellkosten: €90.000, Verwaltungs- und Vertriebskosten: €19.200. Selbstkosten pro Liter = 90.000/500.000 + 19.200/480.000 = 0,18 + 0,04 = €0,22 pro Liter.",
        ],
      },
      {
        id: "11-2",
        heading: "11.2 Äquivalenzziffernkalkulation",
        body: [
          "Produziert ein Unternehmen mehrere ähnliche, aber nicht identische Produkte (z. B. verschiedene Größen oder Varianten desselben Grundprodukts), rechnet die Äquivalenzziffernkalkulation diese über Äquivalenzziffern (ÄZ) in ein einheitliches 'Einheitsprodukt' um. Einem Referenzprodukt wird die Äquivalenzziffer 1,0 zugeordnet; die anderen Produkte erhalten davon abweichende Ziffern, je nachdem wie viel aufwändiger oder günstiger ihre Herstellung im Vergleich ist.",
          "Man berechnet zunächst für jedes Produkt die umgerechnete Einheitsmenge (ÄZ × produzierte Menge) und summiert diese zur Gesamt-Einheitsmenge. Die Selbstkosten pro Recheneinheit (RE) ergeben sich als Gesamtkosten / Gesamt-Einheitsmenge; die Stückkosten jedes einzelnen Produkts folgen daraus als ÄZ × Selbstkosten pro RE.",
        ],
        formulas: [
          "Selbstkosten/RE = Gesamtkosten / Σ(ÄZi · xi)",
          "Selbstkosten Produkt i = ÄZi · Selbstkosten/RE",
        ],
        formulasLatex: [
          "\\dfrac{\\text{Selbstkosten}}{RE} = \\dfrac{\\text{Gesamtkosten}}{\\sum_i \\ddot{A}Z_i \\cdot x_i}",
          "K_i = \\ddot{A}Z_i \\cdot \\dfrac{\\text{Selbstkosten}}{RE}",
        ],
        terms: [
          {
            term: "Äquivalenzziffer (ÄZ)",
            definition: "Kennzahl, die den relativen Kostenaufwand eines Produkts im Vergleich zu einem Referenzprodukt (ÄZ = 1,0) ausdrückt.",
          },
          {
            term: "Äquivalenzziffernkalkulation",
            definition: "Kalkulationsverfahren für mehrere ähnliche Produktvarianten, das diese über Äquivalenzziffern in ein einheitliches Recheneinheiten-Schema überführt.",
          },
        ],
        examples: [
          "Eine Kerzenmanufaktur stellt vier Kerzengrößen her: Teelicht (ÄZ 0,4, 50.000 Stück), Stumpenkerze klein (ÄZ 0,8, 30.000 Stück), Stumpenkerze groß (ÄZ 1,0, Referenzprodukt, 20.000 Stück) und Standkerze (ÄZ 1,6, 10.000 Stück). Umgerechnete Einheitsmengen: 0,4·50.000 = 20.000; 0,8·30.000 = 24.000; 1,0·20.000 = 20.000; 1,6·10.000 = 16.000; Summe = 80.000 RE. Bei Gesamtkosten von €56.000 betragen die Selbstkosten pro RE = 56.000/80.000 = €0,70. Die Standkerze kostet damit 1,6 · 0,70 = €1,12 pro Stück, das Teelicht 0,4 · 0,70 = €0,28 pro Stück.",
        ],
      },
      {
        id: "11-3",
        heading: "11.3 Zuschlagskalkulation",
        body: [
          "Bei mehreren, unterschiedlich aufwändigen Produkten wird die Zuschlagskalkulation verwendet: Gemeinkosten werden über Zuschlagssätze proportional auf zugehörige Einzelkosten verteilt, unter der Annahme, dass die Höhe der Einzelkosten die Höhe der zugehörigen Gemeinkosten verursachungsgerecht widerspiegelt. Der allgemeine Gemeinkostenzuschlagssatz ergibt sich als Gemeinkosten der Kostenstelle / zugehörige Einzelkosten (Bezugsgröße) · 100%.",
          "Übliche Zuschläge sind: Materialgemeinkosten-Zuschlag auf Fertigungsmaterial, Fertigungsgemeinkosten-Zuschlag auf Fertigungslöhne, sowie Verwaltungs- und Vertriebsgemeinkosten-Zuschlag auf die Herstellkosten.",
        ],
        formulas: ["Gemeinkostenzuschlagssatz = (Gemeinkosten der Kostenstelle / Bezugsgröße) · 100%"],
        formulasLatex: ["\\text{Zuschlagssatz} = \\dfrac{\\text{Gemeinkosten}}{\\text{Bezugsgr\\\"o\\ss e}} \\cdot 100\\%"],
        terms: [
          {
            term: "Zuschlagskalkulation",
            definition: "Kalkulationsverfahren, bei dem Gemeinkosten über produktbezogene Zuschlagssätze proportional zu den zugehörigen Einzelkosten verteilt werden.",
          },
        ],
        examples: [
          "Eine Lederwarenmanufaktur stellt einen Standard- und einen Premium-Rucksack her. Materialeinzelkosten: Standard €25, Premium €48; Materialgemeinkostenzuschlag beträgt 20% (auf Basis von Gesamt-Materialgemeinkosten / Gesamt-Materialeinzelkosten). Fertigungslohn: Standard €30, Premium €50; Fertigungsgemeinkostenzuschlag 120%. Materialkosten: Standard 25 + 0,20·25 = €30, Premium 48 + 0,20·48 = €57,60. Fertigungskosten: Standard 30 + 1,20·30 = €66, Premium 50 + 1,20·50 = €110. Herstellkosten: Standard 30+66 = €96, Premium 57,60+110 = €167,60. Bei einem Verwaltungs-/Vertriebszuschlag von 15% auf die Herstellkosten ergeben sich Selbstkosten von Standard 96·1,15 = €110,40 und Premium 167,60·1,15 ≈ €192,74.",
        ],
      },
      {
        id: "11-4",
        heading: "11.4 Maschinenstundensatzkalkulation",
        body: [
          "In stark maschinenintensiven Fertigungsbereichen verzerrt eine reine Zuschlagskalkulation (Zuschlag proportional zu den Fertigungslöhnen) das Ergebnis, wenn maschinenintensive und personalintensive Arbeitsschritte unterschiedlich stark zum Gemeinkostenanfall beitragen. Die Maschinenstundensatzkalkulation trennt deshalb die maschinenabhängigen Fertigungsgemeinkosten (Abschreibung, Wartung, Energie der jeweiligen Maschine) heraus und verteilt sie über einen Maschinenstundensatz proportional zur tatsächlichen Maschinenlaufzeit je Produkt. Die restlichen (nicht maschinenabhängigen) Fertigungsgemeinkosten werden weiterhin wie bei der Zuschlagskalkulation auf die Fertigungslöhne umgelegt.",
          "Kalkulationsschema: Fertigungslöhne + (Maschinenstundensatz × Maschinenlaufzeit je Produkt) + (Rest-Gemeinkostenzuschlagssatz × Fertigungslöhne) = Fertigungskosten.",
        ],
        formulas: ["Maschinenstundensatz = maschinenabhängige Fertigungsgemeinkosten / tatsächliche Maschinenlaufzeit"],
        formulasLatex: ["\\text{Maschinenstundensatz} = \\dfrac{K_{f,\\text{Maschine}}}{\\text{Maschinenlaufzeit}}"],
        terms: [
          {
            term: "Maschinenstundensatzkalkulation",
            definition: "Kalkulationsverfahren, das maschinenabhängige Fertigungsgemeinkosten über einen Maschinenstundensatz proportional zur Maschinenlaufzeit je Produkt verteilt.",
          },
        ],
        examples: [
          "Bei der Lederwarenmanufaktur entfallen von den Fertigungsgemeinkosten der Nähabteilung (€24.000) genau €9.000 auf die Steppmaschine, die insgesamt 600 Stunden läuft; der Rest (€15.000) sind personalbezogene Gemeinkosten bei Fertigungslöhnen von insgesamt €50.000. Maschinenstundensatz = 9.000/600 = €15/h. Rest-Gemeinkostenzuschlagssatz = 15.000/50.000 = 30%. Der Standard-Rucksack benötigt 0,5 Maschinenstunden bei Fertigungslohn €30: Fertigungskosten = 30 + 0,5·15 + 0,30·30 = 30 + 7,50 + 9 = €46,50 (statt €66 bei reiner Zuschlagskalkulation mit 120%).",
        ],
      },
      {
        id: "11-5",
        heading: "11.5 Lohnstundensatzkalkulation",
        body: [
          "Die Lohnstundensatzkalkulation folgt derselben Logik wie die Maschinenstundensatzkalkulation, bezieht sich aber auf personalintensive statt maschinenintensive Fertigungsbereiche (z. B. hoher Aufwand für Rekrutierung, Einarbeitung, Personalverwaltung). Lohnbezogene Fertigungsgemeinkosten werden über einen Lohnstundensatz proportional zur tatsächlichen Arbeitszeit je Produkt verteilt; die restlichen Gemeinkosten werden weiterhin als Zuschlag auf die Fertigungslöhne verrechnet.",
          "Maschinenstundensatz- und Lohnstundensatzkalkulation lassen sich auch kombinieren, wenn ein Fertigungsbereich sowohl stark maschinen- als auch stark personalintensiv ist — dann werden beide Gemeinkostenblöcke getrennt über ihre jeweilige Bezugsgröße (Maschinenlaufzeit bzw. Arbeitszeit) verteilt, und nur der verbleibende Rest weiterhin als pauschaler Zuschlag auf die Fertigungslöhne.",
        ],
        formulas: ["Lohnstundensatz = lohnabhängige Fertigungsgemeinkosten / tatsächliche Arbeitszeit"],
        formulasLatex: ["\\text{Lohnstundensatz} = \\dfrac{K_{f,\\text{Personal}}}{\\text{Arbeitszeit}}"],
        terms: [
          {
            term: "Lohnstundensatzkalkulation",
            definition: "Kalkulationsverfahren, das lohnabhängige Fertigungsgemeinkosten über einen Lohnstundensatz proportional zur Arbeitszeit je Produkt verteilt.",
          },
        ],
        examples: [
          "Die Handnäherei der Lederwarenmanufaktur hat lohnbezogene Gemeinkosten von €18.000 (Einarbeitung, Personalverwaltung) bei insgesamt 900 geleisteten Arbeitsstunden: Lohnstundensatz = 18.000/900 = €20/h. Der Premium-Rucksack benötigt 1,2 Arbeitsstunden Handnäherei: zusätzlicher Gemeinkostenanteil = 1,2 · 20 = €24, der direkt zu den Fertigungskosten addiert wird, statt über einen pauschalen Prozentsatz auf den Fertigungslohn verteilt zu werden.",
        ],
      },
    ],
  },
  // ==================== Kapitel 12 ====================
  {
    id: "eigenkapitalfinanzierung",
    number: 12,
    title: "Eigenkapitalfinanzierung: Aktien und Ausschüttungspolitik",
    free: false,
    intro:
      "Neben Fremdkapital (Anleihen, Kapitel 6) können sich Unternehmen über die Ausgabe von Aktien Eigenkapital beschaffen. Dieses Kapitel behandelt die Rechte, die mit Aktien verbunden sind, die beiden wichtigsten Wege zur Eigenkapitalbeschaffung (Börsengang und Kapitalerhöhung), einen Exkurs zu einer bekannten Form der Steuerarbitrage rund um Dividendenzahlungen, sowie die Frage, wie Unternehmen ihre Gewinne an die Anteilseigner ausschütten.",
    sections: [
      {
        id: "12-1",
        heading: "12.1 Aktien: Stamm- und Vorzugsaktien",
        body: [
          "Das Grundkapital einer Aktiengesellschaft wird in Aktien aufgeteilt. Stammaktien verbriefen im Grundsatz das Recht auf einen Anteil am Bilanzgewinn (Dividende), ein Stimmrecht in der Hauptversammlung, sowie ein Bezugsrecht auf junge Aktien bei einer Kapitalerhöhung (siehe 12.3). Anders als Anleihen (Kapitel 6) haben Aktien keine begrenzte Laufzeit.",
          "Vorzugsaktien weichen in einzelnen Rechten von Stammaktien ab: Häufig wird ein höherer Dividendenanspruch mit dem Verzicht auf das Stimmrecht kombiniert. Umgekehrt existieren auch Mehrstimmaktien, die einzelnen Aktionären überproportionalen Einfluss sichern. Aktien werden in der Regel an Börsen gehandelt, wodurch sie im Unterschied zu vielen anderen Finanzierungsformen sehr liquide sind.",
        ],
        terms: [
          {
            term: "Stammaktie",
            definition: "Aktie mit Standardrechten: Dividendenanspruch, Stimmrecht in der Hauptversammlung, Bezugsrecht auf junge Aktien.",
          },
          {
            term: "Vorzugsaktie",
            definition: "Aktie mit von der Stammaktie abweichenden Rechten, häufig höherer Dividendenanspruch bei Verzicht auf das Stimmrecht.",
          },
        ],
        examples: [
          "Ein Logistikunternehmen gibt neben seinen Stammaktien auch Vorzugsaktien aus, die eine um 0,30 € höhere jährliche Dividende garantieren, dafür aber kein Stimmrecht auf der Hauptversammlung gewähren — attraktiv für Anlegerinnen, die primär an laufenden Erträgen statt an Mitspracherechten interessiert sind.",
        ],
      },
      {
        id: "12-2",
        heading: "12.2 Kapitalbeschaffung durch Börsengang (IPO)",
        body: [
          "Beim Initial Public Offering (IPO, Börsengang) bietet ein Unternehmen erstmals Aktien einem breiten Anlegerpublikum an und lässt sie an einer Börse notieren. Damit verschafft sich das Unternehmen Zugang zu einem deutlich größeren Kapitalpool als über private Finanzierungsquellen und schafft gleichzeitig Liquidität für bestehende Alteigentümer, die einen Teil ihrer Anteile verkaufen können.",
          "Ein empirisch gut dokumentiertes Phänomen ist die Zyklizität von IPOs: In wirtschaftlich guten Zeiten mit hohen Bewertungen wird der Markt regelrecht mit Börsengängen überflutet, während das IPO-Volumen in wirtschaftlich schlechten Zeiten stark einbricht — Unternehmen versuchen also, den Markt für einen möglichst hohen Erlös zu timen.",
        ],
        terms: [
          {
            term: "Initial Public Offering (IPO)",
            definition: "Erstmaliges öffentliches Angebot von Unternehmensaktien mit anschließender Börsennotierung.",
          },
        ],
        examples: [
          "Ein Hersteller von Batteriespeichersystemen entscheidet sich für einen Börsengang, um seine internationale Expansion zu finanzieren. Weil sich die Marktstimmung für Cleantech-Aktien gerade verschlechtert, verschiebt das Unternehmen den IPO um ein Jahr, in der Hoffnung auf eine höhere Bewertung bei besserer Marktlage.",
        ],
      },
      {
        id: "12-3",
        heading: "12.3 Kapitalerhöhung und Bezugsrecht",
        body: [
          "Bereits börsennotierte Unternehmen können sich zusätzliches Eigenkapital über eine Kapitalerhöhung beschaffen. Bei der ordentlichen Kapitalerhöhung werden neue (junge) Aktien ausgegeben; bestehende Aktionäre erhalten dabei üblicherweise ein Bezugsrecht, das sie vor einer Verwässerung ihres Anteils schützt. Bei der bedingten Kapitalerhöhung entsteht neues Kapital nur in dem Maße, in dem tatsächlich von einem zuvor eingeräumten Umtausch- oder Bezugsrecht Gebrauch gemacht wird (z. B. bei Wandelanleihen).",
          "Der theoretische Wert des Bezugsrechts lässt sich aus dem sogenannten Mischkurs (dem erwarteten Aktienkurs nach der Kapitalerhöhung) ableiten: Mischkurs = (Kurs alt · Anzahl alter Aktien + Bezugspreis · Anzahl neuer Aktien) / (Anzahl alter + neuer Aktien). Der Wert des Bezugsrechts selbst ergibt sich als Differenz zwischen dem alten Kurs und dem Mischkurs: Bezugsrecht = Kurs alt − Mischkurs.",
        ],
        formulas: [
          "Mischkurs = (Kalt · Nalt + Bezugspreis · Nneu) / (Nalt + Nneu)",
          "Wert Bezugsrecht = Kalt − Mischkurs",
        ],
        formulasLatex: [
          "K_{\\text{misch}} = \\dfrac{K_{alt}\\cdot N_{alt} + B \\cdot N_{neu}}{N_{alt}+N_{neu}}",
          "\\text{Bezugsrecht} = K_{alt} - K_{\\text{misch}}",
        ],
        terms: [
          {
            term: "Ordentliche Kapitalerhöhung",
            definition: "Ausgabe junger Aktien zur Beschaffung neuen Eigenkapitals, üblicherweise unter Einräumung eines Bezugsrechts für bestehende Aktionäre.",
          },
          {
            term: "Bezugsrecht",
            definition: "Recht bestehender Aktionäre, im Verhältnis ihres bisherigen Anteils junge Aktien zu einem festgelegten Bezugspreis zu erwerben, um eine Verwässerung ihres Anteils zu vermeiden.",
          },
        ],
        examples: [
          "Ein Solartechnikunternehmen hat 8 Millionen Aktien zu einem aktuellen Kurs von €20 im Umlauf und gibt 2 Millionen junge Aktien zu einem Bezugspreis von €12 aus. Mischkurs = (20 · 8.000.000 + 12 · 2.000.000) / 10.000.000 = (160.000.000 + 24.000.000) / 10.000.000 = €18,40. Der Wert des Bezugsrechts beträgt damit 20 − 18,40 = €1,60 pro alter Aktie.",
        ],
      },
      {
        id: "12-4",
        heading: "12.4 Exkurs: Cum-Cum- und Cum-Ex-Geschäfte",
        body: [
          "Ein bekanntes Beispiel für Steuerarbitrage rund um Dividendenzahlungen sind Cum-Cum-Geschäfte: Ausländische Investoren, die sich einbehaltene Kapitalertragsteuer auf Dividenden nicht oder nur teilweise erstatten lassen können, verkaufen ihre Aktien kurz vor dem Dividendenstichtag vorübergehend an eine inländische Bank, die sich die Steuer vollständig erstatten lässt. Nach dem Dividendenstichtag werden die Aktien zu einem vorher vereinbarten Preis zurückverkauft, und der Steuervorteil wird (abzüglich einer Gebühr) an den ausländischen Investor weitergegeben. Bei abgestimmtem Vorgehen beider Parteien gilt ein solches Geschäft als Steuerhinterziehung.",
          "Cum-Ex-Geschäfte gehen noch weiter: Während bei Cum-Cum die Steuer einmal gezahlt und einmal erstattet wird, wird sie bei Cum-Ex einmal gezahlt, aber zweimal erstattet. Möglich wird dies durch Leerverkäufe: Weil Verkäufer nach Vertragsschluss regulär mehrere Tage Zeit haben, die Aktien tatsächlich zu liefern, kann ein Kaufvertrag über Aktien geschlossen werden, die der Verkäufer zum Zeitpunkt des Vertragsschlusses noch gar nicht besitzt. Fällt zwischen Verkauf und Lieferung eine Dividende an, erhalten sowohl der ursprüngliche Aktienbesitzer als auch der Käufer aus dem Leerverkauf jeweils eine eigene Steuerbescheinigung — obwohl die Kapitalertragsteuer insgesamt nur einmal an das Finanzamt abgeführt wurde.",
        ],
        terms: [
          {
            term: "Cum-Cum-Geschäft",
            definition: "Steuerarbitrage, bei der ein ausländischer Aktionär seine Aktien kurz vor dem Dividendenstichtag temporär an eine inländische, steuerlich begünstigte Bank verkauft, um von deren voller Steuererstattung zu profitieren.",
          },
          {
            term: "Cum-Ex-Geschäft",
            definition: "Steuerarbitrage mittels Leerverkäufen über den Dividendenstichtag hinweg, bei der die einmal gezahlte Kapitalertragsteuer zweimal erstattet wird.",
          },
        ],
        examples: [
          "Zur Illustration eines Cum-Ex-Geschäfts (vereinfacht, in Anlehnung an die allgemeine Funktionsweise): Person A besitzt 6 Aktien zu je €12, es steht eine Dividende von €1,50 pro Aktie an. Person B verkauft 6 Aktien leer an Person C für insgesamt €72, ohne die Aktien selbst zu besitzen. Am Dividendenstichtag erhält A die Dividende von 6 · 1,50 = €9 (abzüglich Steuer) plus eine Steuerbescheinigung. Nach dem Stichtag liefert B die Aktien an C und erstattet C die entgangene Nettodividende; C erhält dabei ebenfalls eine eigene Steuerbescheinigung — obwohl die zugrunde liegende Steuer nur ein einziges Mal an das Finanzamt gezahlt wurde, wird sie faktisch zweimal erstattet.",
        ],
      },
      {
        id: "12-5",
        heading: "12.5 Ausschüttungspolitik: Dividende versus Aktienrückkauf",
        body: [
          "Unternehmen können Gewinne über zwei Wege an Aktionäre ausschütten: über eine Dividendenausschüttung oder über einen Aktienrückkauf, bei dem das Unternehmen eigene Aktien am Markt zurückkauft und vernichtet (oder als eigene Aktien hält). Unter Vernachlässigung von Steuern sind beide Wege äquivalent: In perfekten Kapitalmärkten sinkt der Aktienkurs bei einer Dividendenzahlung um genau den ausgezahlten Betrag pro Aktie (die Aktie wird dann 'ex-dividend' gehandelt), während der Kurs beim Aktienrückkauf unverändert bleibt und sich stattdessen nur die Anzahl ausstehender Aktien verringert.",
          "In der Praxis ziehen Unternehmen Dividenden häufig zeitlich möglichst konstant durch ('Dividend Smoothing'), weil Dividenden gegenüber Aktionären einen faktisch verbindlichen Charakter haben — eine Kürzung wird oft als negatives Signal über die Zukunftsaussichten interpretiert und löst typischerweise eine negative Kursreaktion aus, während eine Dividendenerhöhung meist positiv aufgenommen wird (Signalwirkung von Dividendenänderungen).",
        ],
        terms: [
          {
            term: "Aktienrückkauf",
            definition: "Rückkauf eigener Aktien durch das Unternehmen am Markt; unter Vernachlässigung von Steuern äquivalent zu einer Dividendenausschüttung.",
          },
          {
            term: "Dividend Smoothing",
            definition: "Tendenz von Unternehmen, Dividenden über die Zeit möglichst konstant zu halten, statt sie an kurzfristige Gewinnschwankungen anzupassen.",
          },
          {
            term: "Signalwirkung von Dividenden",
            definition: "Reaktion des Aktienkurses auf Dividendenänderungen, weil das Management dadurch implizit seinen Kenntnisstand über die Unternehmenszukunft offenbart.",
          },
        ],
        examples: [
          "Ein Telekommunikationsanbieter hat 12 Millionen Aktien zu je €15 im Umlauf und zahlt eine Dividende von €0,60 pro Aktie. Cum-Dividende notiert die Aktie bei €15; ex-Dividende sollte sie in einem perfekten Kapitalmarkt auf 15 − 0,60 = €14,40 fallen. Kauft das Unternehmen stattdessen für denselben Gesamtbetrag (12 Mio · 0,60 = €7,2 Mio) eigene Aktien zurück, bleibt der Kurs bei €14,40 (Beispielrundung) unverändert, während sich die Anzahl ausstehender Aktien um 7,2 Mio/14,40 = 500.000 auf 11,5 Millionen verringert.",
        ],
      },
    ],
  },
  // ==================== Kapitel 13 ====================
  {
    id: "deckungsbeitragsrechnung",
    number: 13,
    title: "Deckungsbeitragsrechnung",
    free: false,
    intro:
      "Die Deckungsbeitragsrechnung ist eine konsequente Anwendung der Teilkostenrechnung (Kapitel 7.5) auf die Kostenträgerstückrechnung: Statt Vollkosten pro Produkt auszuweisen, wird nur der Deckungsbeitrag jedes Produkts ermittelt — sein Beitrag zur Deckung der Fixkosten und damit zum Betriebsergebnis. Dieses Kapitel führt das Konzept aus Kapitel 5.4 (Break-even-Analyse) fort und zeigt, wie es sich auf ein Unternehmen mit mehreren Produkten übertragen lässt.",
    sections: [
      {
        id: "13-1",
        heading: "13.1 Deckungsbeitrag pro Produkt und insgesamt",
        body: [
          "In der Deckungsbeitragsrechnung werden von den Verkaufspreisen pro Stück ausschließlich die variablen Kosten pro Stück abgezogen — fixe Kosten bleiben zunächst vollständig unberücksichtigt. Der Deckungsbeitrag pro Stück ergibt sich damit als DB = Verkaufspreis − variable Kosten pro Stück; multipliziert mit der jeweiligen Absatzmenge ergibt sich der Deckungsbeitrag pro Produkt. Die Summe der Deckungsbeiträge aller Produkte ist der Gesamtdeckungsbeitrag des Unternehmens.",
          "Diese Sichtweise ist der Vollkostenrechnung (Kapitel 7.5) bei bestimmten Fragestellungen überlegen: Weil Fixkosten oft ohnehin anfallen und nicht produktspezifisch verursacht sind, lässt sich anhand des Deckungsbeitrags direkt beurteilen, ob ein Produkt zumindest seine eigenen variablen Kosten deckt und einen positiven Beitrag zum Betriebsergebnis leistet — eine Frage, die eine reine Vollkostenbetrachtung (bei der Fixkosten anteilig auf jedes Produkt verteilt werden) verschleiern kann.",
        ],
        formulas: [
          "DB pro Stück = Verkaufspreis − variable Kosten pro Stück",
          "DB pro Produkt = DB pro Stück · Absatzmenge",
        ],
        formulasLatex: [
          "DB = p - k_v",
          "DB_{\\text{Produkt}} = DB \\cdot x",
        ],
        terms: [
          {
            term: "Deckungsbeitrag",
            definition: "Differenz zwischen Verkaufspreis und variablen Kosten pro Stück; Beitrag eines Produkts zur Deckung der Fixkosten.",
          },
          {
            term: "Gesamtdeckungsbeitrag",
            definition: "Summe der Deckungsbeiträge aller Produkte eines Unternehmens.",
          },
        ],
        examples: [
          "Die Lederwarenmanufaktur aus Kapitel 11 verkauft 800 Standard-Rucksäcke zu €120 (variable Kosten €72 pro Stück) und 300 Premium-Rucksäcke zu €200 (variable Kosten €110 pro Stück). Deckungsbeitrag Standard = 120 − 72 = €48 pro Stück, insgesamt 48 · 800 = €38.400. Deckungsbeitrag Premium = 200 − 110 = €90 pro Stück, insgesamt 90 · 300 = €27.000. Gesamtdeckungsbeitrag = 38.400 + 27.000 = €65.400.",
        ],
      },
      {
        id: "13-2",
        heading: "13.2 Vom Gesamtdeckungsbeitrag zum Betriebsergebnis",
        body: [
          "Um vom Gesamtdeckungsbeitrag zum Betriebsergebnis zu gelangen, werden die tatsächlich angefallenen Fixkosten abgezogen — häufig gegliedert nach den Kostenstellen, in denen sie angefallen sind (z. B. Materialwirtschaft, Fertigung, Verwaltung, Vertrieb), statt sie wie bei der Vollkostenrechnung anteilig auf einzelne Produkte umzulegen: Betriebsergebnis = Gesamtdeckungsbeitrag − Σ Fixkosten aller Kostenstellen.",
          "Diese Darstellung erlaubt eine differenzierte Analyse: Man erkennt unmittelbar, wie viel jedes Produkt zur Fixkostendeckung beiträgt, ohne die (oft willkürliche) Verteilung der Fixkosten auf einzelne Produkte vornehmen zu müssen. Das macht die Deckungsbeitragsrechnung besonders nützlich für kurzfristige Entscheidungen wie Zusatzaufträge, Sortimentsentscheidungen oder die Frage, ob ein Produkt trotz niedrigem Verkaufspreis im Programm bleiben sollte.",
        ],
        formulas: ["Betriebsergebnis = Σ Deckungsbeiträge − Σ Fixkosten"],
        formulasLatex: ["\\text{Betriebsergebnis} = \\sum DB_{\\text{Produkt}} - \\sum K_f"],
        terms: [
          {
            term: "Betriebsergebnis (Deckungsbeitragsrechnung)",
            definition: "Gesamtdeckungsbeitrag abzüglich der insgesamt angefallenen Fixkosten aller Kostenstellen.",
          },
        ],
        examples: [
          "Bei der Lederwarenmanufaktur betragen die Fixkosten: Materialwirtschaft €8.000, Fertigung €15.000, Verwaltung €12.000, Vertrieb €9.000, insgesamt €44.000. Das Betriebsergebnis beträgt damit 65.400 − 44.000 = €21.400. Fiele der Premium-Rucksack künftig komplett weg, sänke der Gesamtdeckungsbeitrag um €27.000 auf €38.400 — bei unveränderten Fixkosten von €44.000 würde das Unternehmen dann einen Verlust von €5.600 ausweisen, obwohl der Standard-Rucksack für sich genommen weiterhin profitabel wäre.",
        ],
      },
    ],
  },
  // ==================== Kapitel 14 ====================
  {
    id: "portfoliotheorie-capm",
    number: 14,
    title: "Portfoliotheorie und CAPM",
    free: false,
    intro:
      "Wie sollten risikoscheue Anleger ihr Vermögen auf mehrere riskante Wertpapiere verteilen, und welche Rendite dürfen sie dafür im Gleichgewicht erwarten? Die Portfoliotheorie und das darauf aufbauende Capital Asset Pricing Model (CAPM) beantworten diese Fragen systematisch und bilden das Fundament der modernen Kapitalmarkttheorie. Als laufendes Beispiel dienen ein Wachstumsfonds und ein Anleihefonds in drei möglichen Konjunkturszenarien.",
    sections: [
      {
        id: "14-1",
        heading: "14.1 Erwartete Rendite und Risiko einzelner Wertpapiere",
        body: [
          "Die Rendite eines Wertpapiers ist unter Unsicherheit eine Zufallsvariable, die je nach eingetretenem Umweltszenario unterschiedliche Werte annimmt. Die erwartete Rendite μ ergibt sich als wahrscheinlichkeitsgewichteter Durchschnitt über alle Szenarien: μ = Σ pi · ri. Als Risikomaß dient die Varianz σ² = Σ pi · (ri − μ)², bzw. deren Wurzel, die Standardabweichung σ.",
          "Ein hoher Wert von σ zeigt an, dass die tatsächliche Rendite stark um ihren Erwartungswert streuen kann — das Wertpapier ist riskanter. Anleger verlangen für die Übernahme dieses zusätzlichen Risikos in der Regel eine Risikoprämie: eine über die risikolose Rendite hinausgehende erwartete Rendite.",
        ],
        formulas: [
          "μ = Σ pi · ri",
          "σ² = Σ pi · (ri − μ)²",
        ],
        formulasLatex: [
          "\\mu = \\sum_i p_i \\cdot r_i",
          "\\sigma^2 = \\sum_i p_i \\cdot (r_i - \\mu)^2",
        ],
        terms: [
          {
            term: "Erwartete Rendite (μ)",
            definition: "Wahrscheinlichkeitsgewichteter Durchschnitt der möglichen Renditen eines Wertpapiers über alle Szenarien.",
          },
          {
            term: "Risikoprämie",
            definition: "Zusätzliche erwartete Rendite über die risikolose Rendite hinaus, die Anleger für die Übernahme von Risiko verlangen.",
          },
        ],
        examples: [
          "In drei gleich wahrscheinlichen Konjunkturszenarien (Rezession, Normal, Boom, je 1/3) liefert ein Wachstumsfonds Renditen von −9%, 15% und 30%. Die erwartete Rendite beträgt μ = (−9 + 15 + 30)/3 = 12%. Die Varianz beträgt σ² = [(−9−12)² + (15−12)² + (30−12)²]/3 = (441+9+324)/3 = 258 (in %²), also σ ≈ 16,06%.",
        ],
      },
      {
        id: "14-2",
        heading: "14.2 Portfoliorendite und Kovarianz",
        body: [
          "Ein Portfolio aus zwei Wertpapieren mit Portfolioanteilen w1 und w2 (w1 + w2 = 100%) hat eine Portfoliorendite, die sich als gewichtete Summe der Einzelrenditen ergibt; die erwartete Portfoliorendite ist entsprechend μw = w1·μ1 + w2·μ2. Die Varianz der Portfoliorendite ergibt sich jedoch NICHT als einfache gewichtete Summe der Einzelvarianzen, sondern muss die Kovarianz zwischen den beiden Renditen berücksichtigen: σw² = w1²σ1² + w2²σ2² + 2w1w2·cov1,2, wobei cov1,2 = σ1·σ2·ρ1,2 mit der Korrelation ρ1,2 der beiden Renditen.",
          "Ist die Korrelation negativ (die Wertpapiere bewegen sich tendenziell gegenläufig), kann das Portfoliorisiko deutlich unter dem gewichteten Durchschnitt der Einzelrisiken liegen — dieser Effekt wird Diversifikation genannt und ist der zentrale Vorteil, mehrere unterschiedliche Wertpapiere statt eines einzelnen zu halten.",
        ],
        formulas: [
          "μw = w1·μ1 + w2·μ2",
          "σw² = w1²σ1² + w2²σ2² + 2w1w2·cov1,2",
        ],
        formulasLatex: [
          "\\mu_w = w_1\\mu_1 + w_2\\mu_2",
          "\\sigma_w^2 = w_1^2\\sigma_1^2 + w_2^2\\sigma_2^2 + 2w_1w_2\\,\\text{cov}_{1,2}",
        ],
        terms: [
          {
            term: "Portfoliorendite",
            definition: "Gewichtete Summe der Renditen aller im Portfolio enthaltenen Wertpapiere.",
          },
          {
            term: "Kovarianz",
            definition: "Maß dafür, wie stark sich die Renditen zweier Wertpapiere gemeinsam bewegen; cov1,2 = σ1·σ2·ρ1,2.",
          },
        ],
        examples: [
          "Der Anleihefonds aus 14.1 liefert in denselben drei Szenarien Renditen von 16%, 8% und −3% (μ = 7%, σ ≈ 7,79%). Die Kovarianz zwischen Wachstumsfonds und Anleihefonds beträgt cov = [(−9−12)(16−7) + (15−12)(8−7) + (30−12)(−3−7)]/3 = [(−21)(9) + (3)(1) + (18)(−10)]/3 = (−189+3−180)/3 = −122 (in %²), also cov ≈ −0,0122. Für ein Portfolio mit je 50% in beiden Fonds ergibt sich μw = 0,5·12% + 0,5·7% = 9,5% und σw² = 0,25·0,0258 + 0,25·0,006067 + 2·0,25·(−0,0122) ≈ 0,001867, also σw ≈ 4,32% — deutlich weniger als der gewichtete Durchschnitt der Einzelrisiken (0,5·16,06% + 0,5·7,79% ≈ 11,93%).",
        ],
      },
      {
        id: "14-3",
        heading: "14.3 Effizienzlinie und Diversifikation",
        body: [
          "Variiert man die Portfolioanteile w1 und w2 kontinuierlich, entsteht im Rendite-Risiko-Diagramm eine Kurve aller erreichbaren Kombinationen. Portfolios, die bei gegebenem Risiko die höchste erwartete Rendite bieten (bzw. bei gegebener erwarteter Rendite das niedrigste Risiko), liegen auf der sogenannten Effizienzlinie. Rational handelnde, risikoscheue Anleger wählen stets ein Portfolio auf dieser Effizienzlinie, nie ein Portfolio darunter.",
          "Je stärker die Korrelation zwischen den beiden Wertpapieren negativ ist, desto stärker wölbt sich die erreichbare Rendite-Risiko-Kurve nach links (mehr Diversifikationsvorteil); bei einer perfekten positiven Korrelation von +1 verschwindet der Diversifikationseffekt vollständig, und die Kurve wird zu einer Geraden zwischen den beiden Einzelwertpapieren.",
        ],
        terms: [
          {
            term: "Effizienzlinie",
            definition: "Menge aller Portfolios, die bei gegebenem Risiko die höchste erwartete Rendite (bzw. bei gegebener Rendite das geringste Risiko) bieten.",
          },
          {
            term: "Diversifikationseffekt",
            definition: "Verringerung des Portfoliorisikos gegenüber dem gewichteten Durchschnitt der Einzelrisiken durch weniger als perfekt positiv korrelierte Wertpapiere.",
          },
        ],
        examples: [
          "Beim Wachstums-/Anleihefonds-Portfolio aus 14.2 liegt das 50/50-Portfolio (μw = 9,5%, σw ≈ 4,32%) sogar unter dem Risiko des risikoärmeren Anleihefonds allein (σ ≈ 7,79%) — ein Beleg für einen sehr starken Diversifikationseffekt aufgrund der negativen Kovarianz zwischen beiden Fonds.",
        ],
      },
      {
        id: "14-4",
        heading: "14.4 Kapitalmarktlinie und Wertpapiermarktlinie (CAPM)",
        body: [
          "Lässt man zusätzlich eine risikolose Anlage- und Verschuldungsmöglichkeit zum Zinssatz r zu, zeigt sich, dass jeder Anleger im Gleichgewicht eine Kombination aus dem risikolosen Instrument und ein und demselben riskanten Portfolio hält — dem Marktportfolio M. Alle effizienten Portfolios liegen dann auf der Kapitalmarktlinie: μw = r + [(μM − r)/σM] · σw, wobei (μM − r)/σM als Marktpreis des Risikos interpretiert wird — die zusätzliche erwartete Rendite pro zusätzlicher Einheit Risiko.",
          "Für einzelne Wertpapiere (die für sich genommen meist nicht effizient sind) liefert das CAPM die Wertpapiermarktlinie: μj = r + (μM − r) · βj, wobei der Beta-Faktor βj = covj,M / varM den Beitrag des Wertpapiers j zum Risiko des Marktportfolios misst. Ein Beta größer als 1 bedeutet, dass das Wertpapier stärker auf Marktbewegungen reagiert als der Durchschnitt, und entsprechend eine höhere erwartete Rendite verlangt.",
        ],
        formulas: [
          "μw = r + [(μM − r)/σM] · σw  [Kapitalmarktlinie]",
          "μj = r + (μM − r) · βj  [Wertpapiermarktlinie, CAPM]",
        ],
        formulasLatex: [
          "\\mu_w = r + \\dfrac{\\mu_M - r}{\\sigma_M}\\cdot \\sigma_w",
          "\\mu_j = r + (\\mu_M - r)\\cdot \\beta_j",
        ],
        terms: [
          {
            term: "Marktportfolio",
            definition: "Das einzige effiziente rein riskante Portfolio im CAPM-Gleichgewicht; jeder Anleger hält eine Kombination aus Marktportfolio und risikolosem Instrument.",
          },
          {
            term: "Beta-Faktor",
            definition: "βj = covj,M / varM; misst den Beitrag eines einzelnen Wertpapiers zum Risiko des Marktportfolios und damit seine im CAPM-Gleichgewicht erwartete Rendite.",
          },
        ],
        examples: [
          "Bei einem risikolosen Zinssatz von r = 2%, einer erwarteten Marktrendite von μM = 9% und einem Beta von βj = 1,3 für eine Aktie ergibt sich nach dem CAPM eine erwartete Rendite von μj = 2% + (9% − 2%) · 1,3 = 2% + 9,1% = 11,1%. Eine zweite Aktie mit βj = 0,6 (defensiver, reagiert schwächer auf Marktbewegungen) hätte dagegen nur eine erwartete Rendite von 2% + 7% · 0,6 = 6,2%.",
        ],
      },
    ],
  },
];
