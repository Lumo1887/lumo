import type { SkriptChapter } from "./types";

export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 — BIP & VGR ====================
  {
    id: "bip-vgr",
    number: 1,
    title: "Das Bruttoinlandsprodukt (BIP)",
    free: true,
    intro:
      "Makroökonomie beginnt mit der Frage, wie man die Größe einer ganzen Volkswirtschaft überhaupt in einer Zahl zusammenfassen kann. Das Bruttoinlandsprodukt (BIP) ist dieses zentrale Maß — wir leiten es hier über drei äquivalente Wege her und klären, was es misst und was nicht.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Was misst das BIP?",
        body: [
          "Das Bruttoinlandsprodukt ist der Marktwert aller final produzierten Güter und Dienstleistungen, die innerhalb eines Landes in einer bestimmten Periode hergestellt werden.",
          "Wichtig ist das Wort 'final': Vorleistungen (z. B. Stahl, der in einem Auto verbaut wird) werden nicht separat gezählt, sonst würde derselbe Wert mehrfach erfasst. Nur der Wert des Endprodukts zählt.",
        ],
        terms: [
          {
            term: "Bruttoinlandsprodukt (BIP)",
            definition: "Marktwert aller im Inland in einer Periode neu produzierten Endgüter und Dienstleistungen.",
          },
          {
            term: "Vorleistung (intermediate good)",
            definition: "Ein Gut, das als Input in die Produktion eines anderen Guts eingeht und deshalb nicht separat ins BIP eingerechnet wird — sonst Doppelzählung.",
          },
          {
            term: "Wertschöpfung",
            definition: "Der Wert, den ein Unternehmen einem Gut hinzufügt (Verkaufspreis minus Kosten der Vorleistungen). Summe aller Wertschöpfungen = BIP.",
          },
        ],
        examples: [
          "Ein Bäcker kauft Mehl für 1 € und backt daraus Brot, das er für 3 € verkauft. Die Wertschöpfung des Bäckers beträgt 2 €. Nur diese 2 € (plus die 1 € Wertschöpfung des Müllers) gehen ins BIP ein — nicht 1 € + 3 € = 4 €.",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Drei Wege, das BIP zu berechnen",
        body: [
          "Das BIP lässt sich über drei verschiedene, aber rechnerisch identische Ansätze ermitteln: die Entstehungsseite (Wertschöpfung), die Verwendungsseite (Ausgaben) und die Verteilungsseite (Einkommen). Dass alle drei zum selben Ergebnis führen, liegt daran, dass jeder Euro Ausgabe gleichzeitig Einkommen für jemand anderen ist.",
        ],
        terms: [
          {
            term: "Entstehungsrechnung",
            definition: "BIP = Summe aller Wertschöpfungen aller Wirtschaftssektoren.",
          },
          {
            term: "Verwendungsrechnung",
            definition: "BIP = Summe aller Endausgaben für Konsum, Investitionen, Staatsausgaben und Nettoexporte.",
          },
          {
            term: "Verteilungsrechnung",
            definition: "BIP = Summe aller Einkommen (Löhne, Zinsen, Mieten, Gewinne), die bei der Produktion entstehen.",
          },
        ],
        formulas: ["Y = C + I + G + NX"],
        formulasLatex: ["Y = C + I + G + NX"],
      },
      {
        id: "1-3",
        heading: "1.3 Die Verwendungsgleichung im Detail",
        body: [
          "Die Verwendungsseite ist in der Makroökonomie die mit Abstand wichtigste Zerlegung, weil sie die Basis für praktisch alle späteren Modelle (IS-LM, AS-AD) bildet.",
        ],
        terms: [
          {
            term: "Konsum C",
            definition: "Ausgaben privater Haushalte für Güter und Dienstleistungen (außer Neubau von Wohnimmobilien).",
          },
          {
            term: "Investitionen I",
            definition: "Ausgaben für Kapitalgüter, die künftige Produktion ermöglichen: Ausrüstungen, Bauten, Vorratsveränderungen.",
          },
          {
            term: "Staatsausgaben G",
            definition: "Käufe von Gütern und Dienstleistungen durch den Staat. Transferzahlungen (z. B. Renten, Arbeitslosengeld) zählen NICHT dazu, da ihnen keine neue Produktion gegenübersteht.",
          },
          {
            term: "Nettoexporte NX",
            definition: "Exporte minus Importe. Positiv bei einem Handelsbilanzüberschuss, negativ bei einem Handelsbilanzdefizit.",
          },
        ],
        examples: [
          "Kindergeld ist eine Transferzahlung und taucht nicht in G auf. Kauft der Staat dagegen einen neuen Dienstwagen, zählt das voll zu G.",
        ],
      },
      {
        id: "1-4",
        heading: "1.4 Real vs. nominal & der BIP-Deflator",
        body: [
          "Das nominale BIP bewertet die Produktion zu aktuellen Preisen — steigt es, kann das an mehr Produktion ODER an höheren Preisen liegen. Das reale BIP bewertet dieselbe Produktion zu konstanten Preisen eines Basisjahres und misst damit reines Mengenwachstum.",
          "Der BIP-Deflator ist das Verhältnis von nominalem zu realem BIP und damit ein Preisindex für die gesamte Volkswirtschaft (im Gegensatz zum Verbraucherpreisindex, der nur einen festen Warenkorb betrachtet).",
        ],
        terms: [
          {
            term: "Nominales BIP",
            definition: "Produktionsmenge bewertet zu aktuellen (laufenden) Preisen.",
          },
          {
            term: "Reales BIP",
            definition: "Produktionsmenge bewertet zu Preisen eines festen Basisjahres — misst reines Mengenwachstum ohne Preiseffekt.",
          },
          {
            term: "BIP-Deflator",
            definition: "Nominales BIP geteilt durch reales BIP, mal 100. Ein umfassender Preisindex für die gesamte Volkswirtschaft.",
          },
        ],
        formulas: ["BIP-Deflator = (Nominales BIP / Reales BIP) × 100"],
        formulasLatex: ["\\text{BIP-Deflator} = \\dfrac{Y^{\\text{nominal}}}{Y^{\\text{real}}} \\times 100"],
        examples: [
          "Produziert eine Wirtschaft in Jahr 2 exakt gleich viel wie in Jahr 1, aber zu 5 % höheren Preisen, steigt das nominale BIP um 5 %, das reale BIP bleibt unverändert, und der BIP-Deflator steigt um 5 %.",
        ],
      },
      {
        id: "1-5",
        heading: "1.5 Grenzen des BIP als Wohlstandsmaß",
        body: [
          "Das BIP ist ein Produktions-, kein Wohlfahrtsmaß. Es erfasst weder unbezahlte Arbeit (Haushaltsarbeit, Ehrenamt) noch Freizeit, ignoriert Verteilungsfragen und zählt manche schädlichen Aktivitäten (z. B. Reparatur nach einer Umweltkatastrophe) sogar positiv.",
          "Trotzdem korreliert das Pro-Kopf-BIP empirisch stark mit anderen Wohlstandsindikatoren (Lebenserwartung, Bildung, Zufriedenheit), weshalb es trotz seiner Schwächen der meistgenutzte Indikator bleibt.",
        ],
        terms: [
          {
            term: "BIP pro Kopf",
            definition: "BIP geteilt durch Bevölkerungszahl — besserer Indikator für individuellen Lebensstandard als das absolute BIP.",
          },
          {
            term: "Schattenwirtschaft",
            definition: "Wirtschaftliche Aktivität, die nicht offiziell erfasst wird (Schwarzarbeit, Subsistenzwirtschaft) und daher im BIP fehlt.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 2 — Wachstum I: Solow-Modell ====================
  {
    id: "wachstum-solow",
    number: 2,
    title: "Wirtschaftswachstum I: Das Solow-Modell",
    free: false,
    intro:
      "Warum sind manche Länder reich und andere arm, und warum wachsen Volkswirtschaften überhaupt? Das Solow-Modell ist der Ausgangspunkt jeder Antwort: Es erklärt Kapitalakkumulation, Sparen und den Übergang in ein langfristiges Gleichgewicht (steady state).",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Die Produktionsfunktion",
        body: [
          "Das Solow-Modell nimmt an, dass Output Y von Kapital K und Arbeit L abhängt, mit konstanten Skalenerträgen: verdoppelt man beide Inputs, verdoppelt sich der Output.",
          "Durch Division durch L lässt sich alles 'pro Kopf' bzw. 'pro Arbeiter' ausdrücken — das ist der Trick, der das Modell handhabbar macht.",
        ],
        terms: [
          {
            term: "Produktionsfunktion Y = F(K, L)",
            definition: "Beschreibt, wie viel Output aus gegebenen Mengen Kapital und Arbeit produziert werden kann.",
          },
          {
            term: "Konstante Skalenerträge",
            definition: "F(cK, cL) = c·F(K, L) für jede Konstante c > 0 — Verdopplung aller Inputs verdoppelt den Output.",
          },
          {
            term: "Pro-Kopf-Größen (y = Y/L, k = K/L)",
            definition: "Output pro Arbeiter y und Kapital pro Arbeiter k. Mit konstanten Skalenerträgen gilt y = f(k).",
          },
        ],
        formulas: ["Y = F(K, L)", "y = Y/L = f(K/L) = f(k)"],
        formulasLatex: ["Y = F(K, L)", "y = \\dfrac{Y}{L} = f\\!\\left(\\dfrac{K}{L}\\right) = f(k)"],
      },
      {
        id: "2-2",
        heading: "2.2 Sparen, Investition und Abschreibung",
        body: [
          "Ein konstanter Anteil s des Einkommens wird gespart und investiert; der Rest wird konsumiert. Gleichzeitig nutzt sich der bestehende Kapitalstock mit einer Rate δ ab (Abschreibung/Verschleiß).",
          "Die Kapitalveränderung pro Kopf ist die Differenz aus Investition (die den Kapitalstock erhöht) und Abschreibung (die ihn verringert).",
        ],
        terms: [
          {
            term: "Sparquote s",
            definition: "Anteil des Einkommens, der gespart und investiert wird (0 < s < 1). Im geschlossenen Modell ohne Staat gilt Investition = Ersparnis.",
          },
          {
            term: "Abschreibungsrate δ",
            definition: "Anteil des Kapitalstocks, der pro Periode durch Verschleiß verloren geht.",
          },
          {
            term: "Kapitalakkumulationsgleichung",
            definition: "Δk = s·f(k) − δ·k — die Veränderung des Kapitals pro Kopf ist Investition pro Kopf minus Abschreibung pro Kopf.",
          },
        ],
        formulas: ["Δk = s·f(k) − δ·k"],
        formulasLatex: ["\\Delta k = s\\,f(k) - \\delta k"],
      },
      {
        id: "2-3",
        heading: "2.3 Der Steady State",
        body: [
          "Im steady state gleichen sich Investition und Abschreibung genau aus (Δk = 0): Kapital pro Kopf bleibt konstant. Das ist kein Stillstand der Wirtschaft — Output, Konsum und Investition sind alle konstant pro Kopf, aber wachsen mit der Bevölkerung mit.",
          "Startet eine Volkswirtschaft mit wenig Kapital, ist s·f(k) > δ·k, Kapital wächst. Startet sie mit sehr viel Kapital, übersteigt die Abschreibung die Investition, Kapital sinkt. Das System konvergiert von jedem Startpunkt zum selben steady state — dies liefert die theoretische Basis für die empirisch beobachtete Konvergenz armer zu reichen Ländern.",
        ],
        terms: [
          {
            term: "Steady State k*",
            definition: "Das Kapitalniveau pro Kopf, bei dem s·f(k*) = δ·k* gilt — die Wirtschaft bleibt dort, sobald sie es erreicht hat.",
          },
          {
            term: "Konvergenz",
            definition: "Tendenz von Volkswirtschaften mit wenig Kapital, schneller zu wachsen und sich dem steady state (und damit tendenziell reicheren Ländern) anzunähern.",
          },
        ],
        examples: [
          "Erhöht eine Regierung die Sparquote s, verschiebt sich die Investitionskurve s·f(k) nach oben. Der neue Schnittpunkt mit der Abschreibungsgeraden δ·k liegt bei einem höheren k* — mehr Kapital, mehr Output pro Kopf im neuen steady state. Der Übergang dorthin ist aber einmalig, kein dauerhaft höheres Wachstum.",
        ],
      },
      {
        id: "2-4",
        heading: "2.4 Die Goldene Regel",
        body: [
          "Nicht jede höhere Sparquote ist wünschenswert: Mehr sparen bedeutet mehr Kapital, aber auch weniger Konsum heute. Die 'Goldene Regel'-Sparquote maximiert den Konsum pro Kopf im steady state.",
          "Am goldenen-Regel-steady-state gilt: die Grenzproduktivität des Kapitals entspricht genau der Abschreibungsrate. Liegt eine Wirtschaft oberhalb dieses Kapitalstocks, ist sie 'dynamisch ineffizient' — weniger Sparen würde sowohl heute als auch in Zukunft mehr Konsum ermöglichen.",
        ],
        terms: [
          {
            term: "Goldene Regel des Kapitalstocks",
            definition: "Das Kapitalniveau k*gold, das den Konsum pro Kopf im steady state maximiert. Bedingung: MPK = δ.",
          },
          {
            term: "Dynamische Ineffizienz",
            definition: "Zustand, in dem eine Volkswirtschaft mehr Kapital akkumuliert hat, als die Goldene Regel vorschreibt — zu viel Sparen schadet dem Konsum.",
          },
        ],
        formulas: ["Bedingung Goldene Regel: MPK = δ"],
        formulasLatex: ["\\text{MPK}(k^{*}_{\\text{gold}}) = \\delta"],
      },
    ],
  },

  // ==================== Kapitel 3 — Wachstum II ====================
  {
    id: "wachstum-technologie",
    number: 3,
    title: "Wirtschaftswachstum II: Bevölkerung, technischer Fortschritt & Wachstumsempirie",
    free: false,
    intro:
      "Das einfache Solow-Modell aus Kapitel 2 kann noch nicht erklären, warum reiche Länder dauerhaft wachsen, statt in einem stagnierenden steady state zu verharren. Bevölkerungswachstum und vor allem technischer Fortschritt schließen diese Lücke.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Bevölkerungswachstum im Solow-Modell",
        body: [
          "Wächst die Bevölkerung mit Rate n, muss zusätzliches Kapital bereitgestellt werden, nur um den Kapitalstock pro Kopf für die wachsende Zahl an Arbeitern konstant zu halten. Das wirkt wie eine zusätzliche 'effektive Abschreibung'.",
        ],
        terms: [
          {
            term: "Bevölkerungswachstumsrate n",
            definition: "Jährliche Wachstumsrate der Erwerbsbevölkerung L.",
          },
          {
            term: "Erweiterte Kapitalakkumulation",
            definition: "Δk = s·f(k) − (δ + n)·k. Der Term (δ+n)·k heißt 'break-even investment' — die Investition, die nötig ist, um k konstant zu halten.",
          },
        ],
        formulas: ["Δk = s·f(k) − (δ + n)·k"],
        formulasLatex: ["\\Delta k = s\\,f(k) - (\\delta + n)k"],
        examples: [
          "Länder mit hohem Bevölkerungswachstum (z. B. viele Entwicklungsländer) haben tendenziell einen niedrigeren steady-state-Kapitalstock pro Kopf — ein Teil der Erklärung für globale Einkommensunterschiede.",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Technischer Fortschritt als Wachstumsmotor",
        body: [
          "Ohne technischen Fortschritt wächst Output pro Kopf im steady state gar nicht — das Modell würde langfristige Stagnation vorhersagen, was der Realität widerspricht. Technischer Fortschritt (Effizienzsteigerung der Arbeit, Rate g) löst dieses Problem.",
          "Mit arbeitsvermehrendem technischem Fortschritt wächst Output pro Arbeiter im steady state dauerhaft mit Rate g — das ist die einzige Quelle nachhaltigen Pro-Kopf-Wachstums im Modell.",
        ],
        terms: [
          {
            term: "Technischer Fortschritt g (arbeitsvermehrend)",
            definition: "Rate, mit der die Effizienz der Arbeit E wächst. Produktionsfunktion: Y = F(K, L·E).",
          },
          {
            term: "Effektive Arbeitseinheiten (L·E)",
            definition: "Arbeit gemessen in Effizienzeinheiten — ein Arbeiter mit doppelter Effizienz zählt wie zwei 'einfache' Arbeiter.",
          },
        ],
        formulas: ["Δk = s·f(k) − (δ + n + g)·k", "Im steady state wächst Y/L mit Rate g, Y mit Rate n+g"],
        formulasLatex: [
          "\\Delta k = s\\,f(k) - (\\delta + n + g)k",
          "\\text{im steady state: } g_{Y/L} = g, \\quad g_Y = n + g",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Wachstumsbuchhaltung (Growth Accounting)",
        body: [
          "Wachstumsbuchhaltung zerlegt beobachtetes BIP-Wachstum in die Beiträge von Kapital, Arbeit und einem Residuum — der totalen Faktorproduktivität (TFP). Die TFP fasst alles zusammen, was Wachstum erklärt, aber nicht auf mehr Kapital oder Arbeit zurückgeht: Technologie, Institutionen, Effizienz.",
        ],
        terms: [
          {
            term: "Solow-Residuum / Totale Faktorproduktivität (TFP)",
            definition: "Der Teil des Wachstums, der nicht durch den Zuwachs an Kapital oder Arbeit erklärt wird — proxy für technischen Fortschritt.",
          },
          {
            term: "Wachstumsbuchhaltungsgleichung",
            definition: "ΔY/Y = ΔA/A + α·ΔK/K + (1−α)·ΔL/L, wobei α der Kapitalanteil am Einkommen ist.",
          },
        ],
        formulas: ["ΔY/Y = ΔA/A + α·(ΔK/K) + (1−α)·(ΔL/L)"],
        formulasLatex: ["\\frac{\\Delta Y}{Y} = \\frac{\\Delta A}{A} + \\alpha \\frac{\\Delta K}{K} + (1-\\alpha)\\frac{\\Delta L}{L}"],
      },
      {
        id: "3-4",
        heading: "3.4 Empirische Konvergenz: bedingt statt absolut",
        body: [
          "Das Solow-Modell sagt absolute Konvergenz (alle Länder nähern sich demselben Einkommensniveau) nur voraus, wenn alle Länder dieselben Parameter (s, n, δ) und denselben technischen Fortschritt haben. Empirisch trifft das nicht zu — reiche und arme Länder konvergieren nicht automatisch zueinander.",
          "Was die Daten stützen, ist bedingte Konvergenz: Länder mit ähnlichen Fundamentaldaten (Sparquote, Bildung, Institutionen) konvergieren zu ähnlichen, aber jeweils eigenen steady states.",
        ],
        terms: [
          {
            term: "Absolute Konvergenz",
            definition: "Hypothese, dass arme Länder automatisch schneller wachsen und sich allen anderen Ländern im Einkommen angleichen — empirisch nicht bestätigt.",
          },
          {
            term: "Bedingte Konvergenz",
            definition: "Länder konvergieren nur zu ihrem EIGENEN steady state, der von ihren Fundamentaldaten abhängt. Empirisch gut belegt.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 4 — Arbeitslosigkeit ====================
  {
    id: "arbeitslosigkeit",
    number: 4,
    title: "Arbeitslosigkeit",
    free: false,
    intro:
      "Arbeitslosigkeit ist nie null — selbst in gesunden Volkswirtschaften gibt es strukturelle Gründe, warum sich Arbeitsangebot und -nachfrage nicht perfekt räumen. Dieses Kapitel ordnet die verschiedenen Arten von Arbeitslosigkeit und ihre Ursachen.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Wie Arbeitslosigkeit gemessen wird",
        body: [
          "Nicht jede Person ohne Job gilt als arbeitslos: Nur wer aktiv nach Arbeit sucht und verfügbar ist, zählt zur Erwerbslosigkeit im statistischen Sinn. Wer nicht sucht, gilt als 'nicht erwerbstätig' (out of the labor force).",
        ],
        terms: [
          {
            term: "Erwerbspersonen (labor force)",
            definition: "Summe aus Erwerbstätigen und Arbeitslosen — alle, die entweder arbeiten oder aktiv Arbeit suchen.",
          },
          {
            term: "Arbeitslosenquote",
            definition: "Anteil der Arbeitslosen an den Erwerbspersonen: u = Arbeitslose / (Arbeitslose + Erwerbstätige).",
          },
          {
            term: "Erwerbsquote (labor force participation rate)",
            definition: "Anteil der Erwerbspersonen an der gesamten erwerbsfähigen Bevölkerung.",
          },
        ],
        formulas: ["u = Arbeitslose / Erwerbspersonen"],
        formulasLatex: ["u = \\dfrac{\\text{Arbeitslose}}{\\text{Erwerbspersonen}}"],
      },
      {
        id: "4-2",
        heading: "4.2 Arten von Arbeitslosigkeit",
        body: [
          "Ökonomen unterscheiden Arbeitslosigkeit nach ihrer Ursache. Diese Unterscheidung ist entscheidend, weil unterschiedliche Arten unterschiedliche Politikreaktionen erfordern.",
        ],
        terms: [
          {
            term: "Friktionelle Arbeitslosigkeit",
            definition: "Entsteht durch die Zeit, die Arbeitssuche und Jobwechsel benötigen — auch in einer perfekt funktionierenden Wirtschaft nie null.",
          },
          {
            term: "Strukturelle Arbeitslosigkeit",
            definition: "Entsteht, wenn das Lohnniveau über dem markträumenden Niveau liegt (z. B. durch Mindestlohn, Gewerkschaften, Effizienzlöhne) und dadurch dauerhaft ein Angebotsüberschuss an Arbeit besteht.",
          },
          {
            term: "Zyklische/konjunkturelle Arbeitslosigkeit",
            definition: "Zusätzliche Arbeitslosigkeit während einer Rezession, bedingt durch unzureichende Gesamtnachfrage.",
          },
          {
            term: "Natürliche Arbeitslosenquote",
            definition: "Die Arbeitslosigkeit, die übrig bleibt, wenn man die zyklische Komponente entfernt — Summe aus friktioneller und struktureller Arbeitslosigkeit.",
          },
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Ursachen struktureller Arbeitslosigkeit",
        body: [
          "Drei Hauptmechanismen erklären, warum Löhne über dem markträumenden Niveau festsitzen können: Mindestlöhne, Gewerkschaften und Effizienzlöhne.",
        ],
        terms: [
          {
            term: "Mindestlohn",
            definition: "Ein gesetzlicher Lohn über dem Gleichgewichtslohn führt zu einem Angebotsüberschuss an Arbeit (mehr Arbeitswillige als Stellen) — betrifft vor allem gering qualifizierte Arbeitskräfte.",
          },
          {
            term: "Gewerkschaften & Kollektivverhandlungen",
            definition: "Verhandeln oft Löhne oberhalb des markträumenden Niveaus für ihre Mitglieder, was Arbeitslosigkeit bei Nicht-Mitgliedern erhöhen kann (Insider-Outsider-Problem).",
          },
          {
            term: "Effizienzlohntheorie",
            definition: "Firmen zahlen freiwillig Löhne über dem Marktniveau, um Produktivität, Motivation, Mitarbeiterbindung zu erhöhen oder Fluktuation zu senken — auch das erzeugt strukturelle Arbeitslosigkeit.",
          },
        ],
      },
      {
        id: "4-4",
        heading: "4.4 Okun'sches Gesetz",
        body: [
          "Das Okun'sche Gesetz beschreibt den empirisch stabilen negativen Zusammenhang zwischen der Veränderung der Arbeitslosenquote und dem BIP-Wachstum: überdurchschnittliches Wachstum senkt die Arbeitslosigkeit, unterdurchschnittliches erhöht sie.",
        ],
        terms: [
          {
            term: "Okun'sches Gesetz",
            definition: "Δu ≈ −c·(g_Y − g_Y*), wobei g_Y das tatsächliche BIP-Wachstum, g_Y* das Trendwachstum und c ein empirischer Koeffizient (oft ≈ 0,5) ist.",
          },
        ],
        formulas: ["Δu ≈ −c · (g_Y − g_Y*)"],
        formulasLatex: ["\\Delta u \\approx -c\\,(g_Y - g_Y^{*})"],
      },
    ],
  },

  // ==================== Kapitel 5 — Geld & Inflation ====================
  {
    id: "geld-inflation",
    number: 5,
    title: "Geld und Inflation",
    free: false,
    intro:
      "Geld ist der Schmierstoff jeder modernen Volkswirtschaft. Dieses Kapitel behandelt, was Geld ökonomisch ausmacht, wie sein Angebot die Preise bestimmt (Quantitätstheorie), und welche realen Kosten Inflation verursacht.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Funktionen und Arten von Geld",
        body: [
          "Geld erfüllt drei klassische Funktionen, die es von anderen Vermögenswerten unterscheiden.",
        ],
        terms: [
          {
            term: "Tauschmittel (medium of exchange)",
            definition: "Wird bei Transaktionen zur Bezahlung akzeptiert — löst das Problem der 'Doppelten Koinzidenz der Bedürfnisse' beim Tauschhandel.",
          },
          {
            term: "Recheneinheit (unit of account)",
            definition: "Der Maßstab, in dem Preise angegeben werden.",
          },
          {
            term: "Wertaufbewahrungsmittel (store of value)",
            definition: "Ermöglicht, Kaufkraft von heute in die Zukunft zu übertragen.",
          },
          {
            term: "Geldmenge M",
            definition: "Bargeld plus (je nach Abgrenzung M1/M2/M3) Sichteinlagen und weitere liquide Bankguthaben.",
          },
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Die Quantitätstheorie des Geldes",
        body: [
          "Die Quantitätsgleichung verknüpft Geldmenge, Umlaufgeschwindigkeit, Preisniveau und reales Einkommen. Nimmt man an, dass die Umlaufgeschwindigkeit V konstant ist, folgt daraus die Quantitätstheorie: Geldmengenwachstum bestimmt langfristig die Inflationsrate eins zu eins.",
        ],
        terms: [
          {
            term: "Quantitätsgleichung",
            definition: "M·V = P·Y, wobei M die Geldmenge, V die Umlaufgeschwindigkeit, P das Preisniveau und Y das reale BIP ist.",
          },
          {
            term: "Umlaufgeschwindigkeit V",
            definition: "Wie oft ein Geldschein im Durchschnitt pro Periode für Transaktionen genutzt wird: V = P·Y / M.",
          },
          {
            term: "Klassische Dichotomie",
            definition: "Die Idee, dass reale Variablen (Y, r, w/P) langfristig unabhängig von nominalen Variablen (M, P) bestimmt werden — Geld ist 'neutral'.",
          },
          {
            term: "Neutralität des Geldes",
            definition: "Eine Veränderung der Geldmenge verändert langfristig nur das Preisniveau, nicht reale Größen wie Output oder Beschäftigung.",
          },
        ],
        formulas: ["M·V = P·Y", "Wachstumsraten: g_M + g_V = π + g_Y ⟹ π ≈ g_M − g_Y (bei konstantem V)"],
        formulasLatex: [
          "M V = P Y",
          "g_M + g_V = \\pi + g_Y \\;\\Rightarrow\\; \\pi \\approx g_M - g_Y \\ (\\text{bei konstantem } V)",
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Fisher-Effekt: Nominal- vs. Realzins",
        body: [
          "Der Nominalzins setzt sich aus dem Realzins (der eigentlichen Verzinsung in Kaufkraft) und der erwarteten Inflation zusammen. Eine höhere erwartete Inflation schlägt sich (bei unverändertem Realzins) eins zu eins im Nominalzins nieder — das ist der Fisher-Effekt.",
        ],
        terms: [
          {
            term: "Fisher-Gleichung",
            definition: "i = r + π^e — Nominalzins ist (näherungsweise) Realzins plus erwartete Inflation.",
          },
          {
            term: "Fisher-Effekt",
            definition: "Eine Erhöhung der erwarteten Inflation um einen Prozentpunkt erhöht langfristig den Nominalzins um einen Prozentpunkt, ohne den Realzins zu verändern.",
          },
        ],
        formulas: ["i = r + π^e"],
        formulasLatex: ["i = r + \\pi^{e}"],
      },
      {
        id: "5-4",
        heading: "5.4 Kosten der Inflation",
        body: [
          "Auch vollständig antizipierte Inflation ist nicht kostenlos. Die Wirtschaftswissenschaft listet mehrere reale Kosten, selbst wenn alle Akteure die Inflation korrekt vorhersehen.",
        ],
        terms: [
          {
            term: "Schuhsohlenkosten (shoeleather costs)",
            definition: "Ressourcen, die aufgewendet werden, um Bargeldbestände zu minimieren (häufigere Bankbesuche), da Bargeld durch Inflation an Wert verliert.",
          },
          {
            term: "Speisekartenkosten (menu costs)",
            definition: "Kosten, Preise (Kataloge, Etiketten, Speisekarten) häufiger anzupassen.",
          },
          {
            term: "Relative-Preis-Verzerrung",
            definition: "Wenn nicht alle Preise gleichzeitig angepasst werden, verzerrt Inflation relative Preise und damit die Ressourcenallokation.",
          },
          {
            term: "Willkürliche Umverteilung (unerwartete Inflation)",
            definition: "Unerwartete Inflation begünstigt Schuldner (reale Schuldenlast sinkt) auf Kosten von Gläubigern.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 6 — Konjunktur I: IS-LM ====================
  {
    id: "konjunktur-islm",
    number: 6,
    title: "Konjunktur I: Das IS-LM-Modell",
    free: false,
    intro:
      "Anders als das Solow-Modell (langfristiges Wachstum) beschreibt das IS-LM-Modell kurzfristige Schwankungen bei fixem Preisniveau. Es kombiniert Gütermarkt (IS-Kurve) und Geldmarkt (LM-Kurve), um Einkommen und Zinssatz gemeinsam zu bestimmen.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Der Gütermarkt und die IS-Kurve",
        body: [
          "Die IS-Kurve zeigt alle Kombinationen aus Zinssatz r und Einkommen Y, bei denen der Gütermarkt im Gleichgewicht ist (geplante Ausgaben = Produktion). Ein höherer Zinssatz senkt die Investitionen, was über den Multiplikator das Gleichgewichtseinkommen senkt — die IS-Kurve fällt daher.",
        ],
        terms: [
          {
            term: "Konsumfunktion C(Y−T)",
            definition: "Konsum steigt mit dem verfügbaren Einkommen (Y−T), typischerweise linear: C = a + b(Y−T), mit marginaler Konsumneigung b ∈ (0,1).",
          },
          {
            term: "Investitionsfunktion I(r)",
            definition: "Investitionen sinken mit dem Zinssatz: I = c − δr. Höhere Kapitalkosten dämpfen Investitionsprojekte.",
          },
          {
            term: "IS-Kurve",
            definition: "Alle (r, Y)-Kombinationen, bei denen Y = C(Y−T) + I(r) + G gilt. Hat negative Steigung in einem (Y,r)-Diagramm.",
          },
        ],
        formulas: ["Gütermarktgleichgewicht: Y = C(Y−T) + I(r) + G"],
        formulasLatex: ["Y = C(Y - T) + I(r) + G"],
      },
      {
        id: "6-2",
        heading: "6.2 Verschiebungen der IS-Kurve",
        body: [
          "Fiskalpolitik verschiebt die IS-Kurve: Eine Erhöhung der Staatsausgaben G oder eine Steuersenkung erhöht die geplanten Ausgaben bei jedem Zinssatz und verschiebt die IS-Kurve nach rechts. Wie stark, hängt vom Fiskalmultiplikator ab.",
        ],
        terms: [
          {
            term: "Staatsausgabenmultiplikator",
            definition: "ΔY/ΔG = 1/(1−b) — eine zusätzliche Einheit G erhöht Y um mehr als eine Einheit, weil zusätzliches Einkommen wieder teilweise konsumiert wird.",
          },
          {
            term: "Steuermultiplikator",
            definition: "ΔY/ΔT = −b/(1−b) — betragsmäßig kleiner als der Ausgabenmultiplikator, weil ein Teil der Steuersenkung gespart statt konsumiert wird.",
          },
        ],
        formulas: ["Ausgabenmultiplikator = 1/(1−b)", "Steuermultiplikator = −b/(1−b)"],
        formulasLatex: [
          "\\text{Ausgabenmultiplikator} = \\dfrac{1}{1-b}",
          "\\text{Steuermultiplikator} = \\dfrac{-b}{1-b}",
        ],
        examples: [
          "Bei b = 0,8 beträgt der Ausgabenmultiplikator 1/(1−0,8) = 5: ein zusätzlicher Euro Staatsausgaben erhöht Y um 5 Euro. Der Steuermultiplikator beträgt −0,8/0,2 = −4 — betragsmäßig kleiner, weil ein Teil einer Steuersenkung gespart wird, statt konsumiert zu werden.",
        ],
      },
      {
        id: "6-3",
        heading: "6.3 Der Geldmarkt und die LM-Kurve",
        body: [
          "Die LM-Kurve zeigt alle Kombinationen aus r und Y, bei denen der Geldmarkt im Gleichgewicht ist: reale Geldnachfrage entspricht realem Geldangebot. Geldnachfrage steigt mit dem Einkommen (mehr Transaktionen) und sinkt mit dem Zinssatz (höhere Opportunitätskosten der Bargeldhaltung) — daraus folgt eine steigende LM-Kurve.",
        ],
        terms: [
          {
            term: "Liquiditätspräferenztheorie",
            definition: "Theorie, nach der der Zinssatz sich anpasst, um Geldangebot und Geldnachfrage auszugleichen.",
          },
          {
            term: "Reale Geldnachfrage L(r,Y)",
            definition: "L(r,Y) = eY − fr: steigt mit Einkommen (e: Einkommenssensitivität), sinkt mit dem Zinssatz (f: Zinssensitivität).",
          },
          {
            term: "LM-Kurve",
            definition: "Alle (r, Y)-Kombinationen mit M/P = L(r,Y). Positiv geneigt: höheres Y erfordert (bei fixem Geldangebot) einen höheren Zins, um die Geldnachfrage wieder zu senken.",
          },
        ],
        formulas: ["Geldmarktgleichgewicht: M/P = L(r, Y) = eY − fr"],
        formulasLatex: ["\\dfrac{M}{P} = L(r,Y) = eY - fr"],
      },
      {
        id: "6-4",
        heading: "6.4 Zinssensitivität und Steigung der Kurven",
        body: [
          "Die Steigungen von IS und LM hängen direkt von den Sensitivitätsparametern δ (Investition) und f (Geldnachfrage) ab: je größer δ, desto flacher die IS-Kurve (Investitionen reagieren stark auf Zinsänderungen); je größer f, desto flacher die LM-Kurve.",
        ],
        terms: [
          {
            term: "Zinssensitivität der Investition δ",
            definition: "Je größer δ, desto stärker reagieren Investitionen auf Zinsänderungen, desto flacher die IS-Kurve.",
          },
          {
            term: "Zinssensitivität der Geldnachfrage f",
            definition: "Je größer f, desto stärker reagiert die Geldnachfrage auf Zinsänderungen, desto flacher die LM-Kurve.",
          },
        ],
        examples: [
          "Extremfall f → ∞ (Liquiditätsfalle): die LM-Kurve wird waagrecht — dieser Fall wird in Kapitel 7 vertieft.",
        ],
      },
    ],
  },

  // ==================== Kapitel 7 — Konjunktur II: Politik & AD-Kurve ====================
  {
    id: "konjunktur-ad",
    number: 7,
    title: "Konjunktur II: Politik im IS-LM-Modell & die Gesamtnachfragekurve",
    free: false,
    intro:
      "Mit IS- und LM-Kurve zusammen lässt sich analysieren, wie Fiskal- und Geldpolitik Einkommen und Zinssatz gemeinsam beeinflussen — und wie daraus die gesamtwirtschaftliche Nachfragekurve (AD) entsteht, das Bindeglied zum AS-AD-Modell in Kapitel 10.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Geldpolitik im IS-LM-Modell",
        body: [
          "Eine Erhöhung der Geldmenge M verschiebt die LM-Kurve nach rechts (bei gegebenem Y ist bei niedrigerem Zins wieder Geldmarktgleichgewicht). Das senkt den Zinssatz, erhöht die Investitionen und damit das Gleichgewichtseinkommen.",
        ],
        terms: [
          {
            term: "Expansive Geldpolitik",
            definition: "Erhöhung von M: LM verschiebt sich nach rechts, r sinkt, Y steigt (bei gegebener IS-Kurve).",
          },
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Fiskalpolitik und Crowding-out",
        body: [
          "Eine Erhöhung der Staatsausgaben verschiebt die IS-Kurve nach rechts: Y steigt, aber auch r steigt (entlang der unveränderten LM-Kurve). Der Zinsanstieg dämpft private Investitionen — dieser Effekt heißt Crowding-out und schwächt die Gesamtwirkung der Fiskalexpansion ab.",
        ],
        terms: [
          {
            term: "Crowding-out-Effekt",
            definition: "Verdrängung privater Investitionen durch steigende Zinsen, ausgelöst durch expansive Fiskalpolitik.",
          },
        ],
        examples: [
          "Bei Übungsblatt-Aufgabe zu Robonia: eine Erhöhung der Staatsausgaben verschiebt kurzfristig die IS-Kurve nach rechts, Y steigt, r steigt. Langfristig kehren nach Preisanpassung IS und LM (real) wieder zur Ausgangslage zurück — einziger dauerhafter Effekt ist ein höheres Preisniveau (siehe Kapitel 10).",
        ],
      },
      {
        id: "7-3",
        heading: "7.3 Die Liquiditätsfalle",
        body: [
          "Fällt der Zinssatz auf seine effektive Untergrenze von null, wird die LM-Kurve waagrecht: die Zentralbank kann den Zins nicht weiter senken, egal wie stark sie die Geldmenge erhöht. Zusätzliche Geldpolitik verpufft in dieser Situation nahezu wirkungslos auf Y.",
          "In der Liquiditätsfalle wird Fiskalpolitik relativ wirksamer: da der Zinssatz konstant bei null bleibt, gibt es kein Crowding-out durch steigende Zinsen — der volle Multiplikatoreffekt der Staatsausgaben wirkt auf Y.",
        ],
        terms: [
          {
            term: "Liquiditätsfalle (zero lower bound)",
            definition: "Situation, in der der Nominalzins bei null liegt (oder nahe null) und die LM-Kurve horizontal verläuft — Geldpolitik verliert an Wirkung.",
          },
        ],
        examples: [
          "In der Liquiditätsfalle senkt eine Geldmengenerhöhung den Zinssatz nicht weiter (er bleibt bei 0), Investitionen und damit Y bleiben unverändert. Eine Erhöhung der Staatsausgaben dagegen erhöht Y voll gemäß Multiplikator, ohne dass der Zins (und damit Crowding-out) gegensteuert — genau deshalb wird in Liquiditätsfallen (z. B. Finanzkrise 2008/09, Corona 2020) meist zur Fiskalpolitik gegriffen.",
        ],
      },
      {
        id: "7-4",
        heading: "7.4 Von IS-LM zur AD-Kurve",
        body: [
          "Bisher wurde das Preisniveau P als fix angenommen. Lässt man P variieren, verschiebt eine Preisänderung die LM-Kurve: ein höheres P senkt die reale Geldmenge M/P, verschiebt LM nach links, erhöht r, senkt Y. Die AD-Kurve trägt genau diesen Zusammenhang zwischen P und Y auf und ist damit fallend.",
          "Die AD-Kurve ist keine gewöhnliche Nachfragekurve eines Einzelmarkts (dort wirkt ein Substitutionseffekt) — ihre negative Steigung kommt aus dem Realkasseneffekt über den Geldmarkt.",
        ],
        terms: [
          {
            term: "Gesamtnachfragekurve (AD)",
            definition: "Zeigt für jedes Preisniveau P das Einkommen Y, bei dem Güter- und Geldmarkt gleichzeitig im Gleichgewicht sind (IS = LM bei diesem P).",
          },
          {
            term: "Realkasseneffekt",
            definition: "Ein höheres Preisniveau senkt die reale Geldmenge M/P, was (via LM-Kurve) den Zins erhöht und die Nachfrage dämpft.",
          },
        ],
        formulas: [
          "AD-Kurve (parametrisiert): Y = [f·(a+c+G) − f·b·T + δ·M/P] / [f·(1−b) + δ·e]",
        ],
        formulasLatex: [
          "Y = \\dfrac{f\\,(a + c + G) - f\\,b\\,T + \\delta \\dfrac{M}{P}}{f\\,(1-b) + \\delta\\, e}",
        ],
        examples: [
          "Ein Anstieg der Staatsausgaben G verschiebt die AD-Kurve nach rechts (bei jedem P ist Y höher). Je größer die marginale Konsumneigung b, desto größer diese Verschiebung, weil der Fiskalmultiplikator 1/(1−b) mit b steigt.",
        ],
      },
    ],
  },

  // ==================== Kapitel 8 — Offene VWL I: Mundell-Fleming ====================
  {
    id: "offene-vwl-mundell-fleming",
    number: 8,
    title: "Offene Volkswirtschaften I: Das Mundell-Fleming-Modell",
    free: false,
    intro:
      "Das Mundell-Fleming-Modell überträgt die IS-LM-Logik auf eine kleine offene Volkswirtschaft mit freiem Kapitalverkehr. Es erklärt, wie Geld- und Fiskalpolitik unter flexiblen bzw. festen Wechselkursen unterschiedlich wirken.",
    sections: [
      {
        id: "8-1",
        heading: "8.1 Annahmen: kleine offene Volkswirtschaft",
        body: [
          "Mundell-Fleming betrachtet eine 'kleine offene Volkswirtschaft' mit perfekter Kapitalmobilität: Kapital fließt so lange, bis der inländische Zinssatz exakt dem (exogen gegebenen) Weltzinssatz entspricht. Das Land selbst ist zu klein, um den Weltzins zu beeinflussen.",
        ],
        terms: [
          {
            term: "Perfekte Kapitalmobilität",
            definition: "Kapital kann verzögerungsfrei und ohne Beschränkung zwischen Ländern fließen und erzwingt r = r* (Weltzinssatz).",
          },
          {
            term: "Zinsparitätsbedingung r = r*",
            definition: "Der inländische Zinssatz muss dem Weltzinssatz entsprechen — sonst würden sofort Kapitalströme einsetzen, die dies wiederherstellen.",
          },
        ],
      },
      {
        id: "8-2",
        heading: "8.2 IS*- und LM*-Kurve",
        body: [
          "Die IS*-Kurve unterscheidet sich von der geschlossenen IS-Kurve dadurch, dass Nettoexporte vom realen Wechselkurs ε abhängen (ein höheres ε — reale Aufwertung — macht Exporte teurer/Importe billiger und senkt NX). Die LM*-Kurve ist identisch zur geschlossenen LM-Kurve, bestimmt aber wegen r = r* direkt das Gleichgewichtseinkommen.",
        ],
        terms: [
          {
            term: "Realer Wechselkurs ε",
            definition: "ε = e·P/P* — Verhältnis der Preisniveaus, umgerechnet über den nominalen Wechselkurs e. Bestimmt die preisliche Wettbewerbsfähigkeit im Außenhandel.",
          },
          {
            term: "IS*-Kurve",
            definition: "Y = C(Y−T) + I(r*) + G + NX(ε). Bei gegebenem r = r* bestimmt ε das Gleichgewichtseinkommen.",
          },
          {
            term: "LM*-Kurve",
            definition: "M/P = L(r*, Y) — bestimmt bei r = r* das Gleichgewichtseinkommen Y unabhängig von ε.",
          },
        ],
        formulas: ["IS*: Y = C(Y−T) + I(r*) + G + NX(ε)", "LM*: M/P = L(r*, Y)"],
        formulasLatex: [
          "Y = C(Y-T) + I(r^{*}) + G + NX(\\varepsilon)",
          "\\dfrac{M}{P} = L(r^{*}, Y)",
        ],
      },
      {
        id: "8-3",
        heading: "8.3 Politik bei flexiblen Wechselkursen",
        body: [
          "Bei flexiblen (freien) Wechselkursen bestimmt sich ε so, dass die IS*-Kurve durch das von der LM*-Kurve vorgegebene Y verläuft. Geldpolitik ist hier voll wirksam, Fiskalpolitik dagegen wirkungslos auf Y.",
          "Eine Geldmengenerhöhung verschiebt LM* nach rechts, Y steigt, was tendenziell den Zins senken würde — Kapital fließt ab, die Währung wertet ab (ε sinkt), NX steigt, was IS* nach rechts verschiebt, bis wieder r=r* bei höherem Y gilt. Eine Fiskalexpansion dagegen verschiebt nur IS* nach rechts, was die Währung aufwerten lässt (ε steigt) und NX so stark senkt, dass der Expansionseffekt komplett neutralisiert wird (Y bleibt unverändert, nur die Zusammensetzung verschiebt sich von NX zu G).",
        ],
        terms: [
          {
            term: "Flexibler Wechselkurs",
            definition: "Der Wechselkurs passt sich frei an, um Zahlungsbilanzgleichgewicht (bzw. r=r*) herzustellen — keine Zentralbankintervention am Devisenmarkt.",
          },
        ],
        examples: [
          "Unter flexiblen Wechselkursen erhöht eine Geldmengenexpansion Y (voll wirksam über Abwertung + höhere NX), während eine Erhöhung der Staatsausgaben Y unverändert lässt, weil die resultierende Aufwertung NX exakt um den fiskalischen Impuls verdrängt (100 % Crowding-out über den Außenhandel statt über Zinsen).",
        ],
      },
      {
        id: "8-4",
        heading: "8.4 Politik bei festen Wechselkursen",
        body: [
          "Bei einem festen Wechselkurs verpflichtet sich die Zentralbank, e (und damit ε) konstant zu halten, indem sie am Devisenmarkt interveniert. Das bindet die Geldpolitik vollständig an die Wechselkursverteidigung — sie kann nicht mehr unabhängig eingesetzt werden.",
          "Fiskalpolitik wird unter festen Wechselkursen dagegen voll wirksam: eine Fiskalexpansion würde (wie oben) tendenziell die Währung aufwerten lassen; um das zu verhindern, muss die Zentralbank Geld verkaufen/kaufen und dadurch die Geldmenge anpassen, was LM* mitverschiebt und den vollen Multiplikatoreffekt auf Y zulässt.",
        ],
        terms: [
          {
            term: "Fester Wechselkurs",
            definition: "Die Zentralbank verpflichtet sich, den nominalen Wechselkurs e konstant zu halten, indem sie bei Bedarf am Devisenmarkt interveniert.",
          },
          {
            term: "Devisenmarktintervention",
            definition: "Käufe/Verkäufe von Fremdwährung durch die Zentralbank, um den Wechselkurs auf dem Zielniveau zu halten — verändert dabei automatisch die inländische Geldmenge.",
          },
        ],
        examples: [
          "Unter festen Wechselkursen ist Geldpolitik nutzlos (jede autonome Geldmengenänderung würde den Wechselkurs bewegen und muss durch Gegeninterventionen sofort rückgängig gemacht werden), Fiskalpolitik dagegen voll wirksam — exakt umgekehrt zum Fall flexibler Wechselkurse.",
        ],
      },
      {
        id: "8-5",
        heading: "8.5 Exkurse sind klausurrelevant",
        body: [
          "Wichtiger Hinweis aus der Vorlesung: die Exkurs-Themen (Bankensystem, Zölle, KI & Arbeitsmarkt, Klima & Wachstum, Methodik) sind ausdrücklich klausurrelevant, obwohl sie nicht Teil der nummerierten Kernkapitel sind. Sie werden in den Kapiteln 11–15 dieses Skripts eigenständig behandelt.",
        ],
        terms: [],
      },
    ],
  },

  // ==================== Kapitel 9 — Offene VWL II ====================
  {
    id: "offene-vwl-wechselkurse",
    number: 9,
    title: "Offene Volkswirtschaften II: Wechselkursregime & das Trilemma",
    free: false,
    intro:
      "Aufbauend auf Mundell-Fleming vertieft dieses Kapitel Wechselkursregime, Kaufkraftparität und das zentrale 'unmögliche Dreieck' der internationalen Makroökonomie.",
    sections: [
      {
        id: "9-1",
        heading: "9.1 Nominaler vs. realer Wechselkurs",
        body: [
          "Der nominale Wechselkurs e gibt an, wie viel Einheiten Fremdwährung man für eine Einheit Inlandswährung bekommt (oder umgekehrt, je nach Konvention). Der reale Wechselkurs ε korrigiert zusätzlich um die relativen Preisniveaus und bestimmt damit die tatsächliche preisliche Wettbewerbsfähigkeit.",
        ],
        terms: [
          {
            term: "Nominaler Wechselkurs e",
            definition: "Der Preis einer Währung ausgedrückt in einer anderen Währung.",
          },
          {
            term: "Realer Wechselkurs ε = e·P/P*",
            definition: "Berücksichtigt zusätzlich die Preisniveaus im In- und Ausland — bestimmt, wie teuer heimische Güter relativ zu ausländischen sind.",
          },
        ],
      },
      {
        id: "9-2",
        heading: "9.2 Kaufkraftparität (PPP)",
        body: [
          "Die Kaufkraftparitätentheorie besagt, dass identische Güterkörbe in verschiedenen Ländern (nach Umrechnung mit dem Wechselkurs) langfristig denselben Preis haben sollten — sonst gäbe es risikolose Arbitragemöglichkeiten. In der Praxis gilt PPP höchstens langfristig und nur näherungsweise, da viele Güter (Dienstleistungen, Immobilien) nicht handelbar sind.",
        ],
        terms: [
          {
            term: "Kaufkraftparität (PPP)",
            definition: "Theorie, wonach der Wechselkurs sich so anpasst, dass eine Einheit Währung überall dieselbe Kaufkraft hat: e = P*/P.",
          },
          {
            term: "Gesetz des einheitlichen Preises",
            definition: "Ein identisches Gut sollte überall (in gemeinsamer Währung gemessen) denselben Preis haben — die Grundlage der PPP-Theorie.",
          },
        ],
        formulas: ["PPP: e = P*/P"],
        formulasLatex: ["e = \\dfrac{P^{*}}{P}"],
      },
      {
        id: "9-3",
        heading: "9.3 Das Trilemma der internationalen Makroökonomie",
        body: [
          "Ein Land kann von drei wünschenswerten Zielen — fester Wechselkurs, freier Kapitalverkehr, unabhängige Geldpolitik — immer nur zwei gleichzeitig verfolgen, niemals alle drei. Dieses 'unmögliche Dreieck' fasst die Erkenntnisse aus Mundell-Fleming zusammen.",
        ],
        terms: [
          {
            term: "Trilemma (unmögliches Dreieck)",
            definition: "Fester Wechselkurs + freier Kapitalverkehr + unabhängige Geldpolitik können nicht gleichzeitig bestehen — man muss auf eines der drei verzichten.",
          },
        ],
        examples: [
          "Die Eurozone wählt festen (internen) Wechselkurs + freien Kapitalverkehr, verzichtet dafür auf nationale Geldpolitik (gemeinsame EZB). Die USA wählen freien Kapitalverkehr + unabhängige Geldpolitik, verzichten auf einen festen Wechselkurs (flexibler Dollar). China (historisch) wählte festen Wechselkurs + unabhängige Geldpolitik, verzichtete dafür auf freien Kapitalverkehr (Kapitalverkehrskontrollen).",
        ],
      },
      {
        id: "9-4",
        heading: "9.4 Für und wider fester Wechselkurse",
        body: [
          "Feste Wechselkurse reduzieren Unsicherheit im Außenhandel und disziplinieren die Geldpolitik (Import von Preisstabilität eines Ankerlandes), kosten aber die Möglichkeit, mit eigener Geldpolitik auf asymmetrische Schocks zu reagieren.",
        ],
        terms: [
          {
            term: "Währungsanker",
            definition: "Bindung der eigenen Währung an eine stabile Fremdwährung, um von deren Preisstabilität/Glaubwürdigkeit zu profitieren.",
          },
          {
            term: "Asymmetrischer Schock",
            definition: "Eine wirtschaftliche Störung, die nur ein Land (oder eine Region einer Währungsunion) betrifft — unter festem Wechselkurs/gemeinsamer Währung fehlt das Instrument eigener Geldpolitik zur Reaktion.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 10 — AS-AD & Phillipskurve ====================
  {
    id: "gesamtwirtschaftliches-angebot",
    number: 10,
    title: "Gesamtwirtschaftliches Angebot: Das AS-AD-Modell & die Phillipskurve",
    free: false,
    intro:
      "Das AS-AD-Modell ergänzt die AD-Kurve aus Kapitel 7 um eine Angebotsseite und erklärt damit, wie sich Schocks kurzfristig auf Output UND Preise auswirken, und wie sich die Wirtschaft langfristig wieder ins Vollbeschäftigungsgleichgewicht einpendelt.",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Langfristige Angebotskurve (LRAS)",
        body: [
          "Langfristig sind Preise voll flexibel, sodass Output allein durch Kapital, Arbeit und Technologie bestimmt wird (das 'natürliche' bzw. Potenzialoutput-Niveau aus dem Solow-Modell) — unabhängig vom Preisniveau. Die LRAS-Kurve ist deshalb eine Senkrechte bei Y = Y_natürlich.",
        ],
        terms: [
          {
            term: "Natürliches Outputniveau (Potenzialoutput) Y̅",
            definition: "Das Outputniveau, das bei voller Auslastung aller Produktionsfaktoren und flexiblen Preisen erreicht wird — bestimmt durch die reale Angebotsseite, unabhängig von P.",
          },
          {
            term: "Langfristige Angebotskurve (LRAS)",
            definition: "Vertikale Linie bei Y = Y̅ im (P,Y)-Diagramm — Preisänderungen haben langfristig keinen Effekt auf den Output.",
          },
        ],
      },
      {
        id: "10-2",
        heading: "10.2 Kurzfristige Angebotskurve — drei Modelle",
        body: [
          "Kurzfristig ist die SRAS-Kurve positiv geneigt: ein höheres Preisniveau geht mit höherem Output einher. Drei unterschiedliche Modelle liefern dieselbe qualitative Vorhersage, aus unterschiedlichen Mikro-Gründen.",
        ],
        terms: [
          {
            term: "Sticky-Price-Modell (Preisstarrheit)",
            definition: "Nicht alle Unternehmen passen ihre Preise sofort an (Menükosten, Verträge). Firmen, die Preise nicht anpassen, reagieren auf gestiegene Nachfrage mit mehr Produktion statt höheren Preisen.",
          },
          {
            term: "Modell unvollständiger Information",
            definition: "Anbieter verwechseln kurzfristig eine allgemeine Preisniveausteigerung mit einer relativen Preiserhöhung für ihr eigenes Gut und weiten die Produktion aus.",
          },
          {
            term: "Sticky-Wage-Modell (Lohnstarrheit)",
            definition: "Nominallöhne sind kurzfristig fix (Verträge). Ein Anstieg des Preisniveaus senkt den Reallohn, macht Arbeit für Firmen billiger, Beschäftigung und Output steigen.",
          },
        ],
        formulas: ["SRAS (allgemeine Form): Y = Y̅ + α·(P − P^e)"],
        formulasLatex: ["Y = \\bar{Y} + \\alpha\\,(P - P^{e})"],
        examples: [
          "In allen drei Modellen führt ein unerwarteter Anstieg von P (P > P^e) zu Y > Y̅ — nur der Mechanismus unterscheidet sich (Preise, Informationen oder Löhne, die kurzfristig nicht vollständig anpassen).",
        ],
      },
      {
        id: "10-3",
        heading: "10.3 Das AS-AD-Gleichgewicht und Schocks",
        body: [
          "Der Schnittpunkt von AD und (kurzfristiger) SRAS bestimmt Output und Preisniveau kurzfristig. Nachfrageschocks (z. B. Fiskal-/Geldpolitik) verschieben AD; Angebotsschocks (z. B. Ölpreisschock) verschieben SRAS direkt.",
          "Nach einem Nachfrageschock, der Y über Y̅ treibt, passen sich Erwartungen P^e allmählich an, SRAS verschiebt sich nach links, bis die Wirtschaft langfristig wieder bei Y̅ landet — nur bei einem dauerhaft höheren Preisniveau.",
        ],
        terms: [
          {
            term: "Nachfrageschock",
            definition: "Verschiebung der AD-Kurve, z. B. durch Fiskal-/Geldpolitik oder Vertrauensänderungen der Konsumenten/Investoren.",
          },
          {
            term: "Angebotsschock",
            definition: "Direkte Verschiebung der SRAS-Kurve, z. B. durch Rohstoffpreisänderungen oder Produktivitätsschocks.",
          },
          {
            term: "Anpassung an den langfristigen steady state",
            definition: "Über die Zeit passen sich Preiserwartungen an tatsächliche Preise an, SRAS verschiebt sich, bis Y wieder bei Y̅ liegt.",
          },
        ],
      },
      {
        id: "10-4",
        heading: "10.4 Die Phillipskurve",
        body: [
          "Die Phillipskurve überträgt das AS-AD-Modell in Inflations-Arbeitslosigkeits-Koordinaten: sie zeigt einen kurzfristigen Trade-off zwischen Inflation und Arbeitslosigkeit. Höhere Inflation (unerwartet) geht kurzfristig mit niedrigerer Arbeitslosigkeit einher — dieselbe Logik wie SRAS, nur umformuliert.",
        ],
        terms: [
          {
            term: "Phillipskurve (erwartungsaugmentiert)",
            definition: "π = π^e − β·(u − u_natürlich) + ν. Inflation hängt ab von erwarteter Inflation, der Abweichung der Arbeitslosigkeit vom natürlichen Niveau und Angebotsschocks ν.",
          },
          {
            term: "Natürliche Arbeitslosenquote (NAIRU)",
            definition: "Die Arbeitslosenquote, bei der Inflation weder beschleunigt noch verlangsamt (Non-Accelerating Inflation Rate of Unemployment).",
          },
        ],
        formulas: ["π = π^e − β·(u − u_natürlich) + ν"],
        formulasLatex: ["\\pi = \\pi^{e} - \\beta\\,(u - u_{\\text{natürlich}}) + \\nu"],
      },
      {
        id: "10-5",
        heading: "10.5 Adaptive vs. rationale Erwartungen",
        body: [
          "Wie sich π^e bildet, ist entscheidend für die Politikwirkung. Adaptive Erwartungen orientieren sich an vergangener Inflation und passen sich nur graduell an — Desinflation ist dann teuer (hohe, länger anhaltende Arbeitslosigkeit). Rationale Erwartungen nutzen alle verfügbaren Informationen (inkl. angekündigter Politik) und können sich sofort anpassen — eine glaubwürdig angekündigte Desinflation könnte dann nahezu kostenlos sein.",
        ],
        terms: [
          {
            term: "Adaptive Erwartungen",
            definition: "π^e wird aus vergangenen Inflationsraten gebildet (z. B. π^e = π_{t-1}) — passt sich nur langsam an neue Informationen an.",
          },
          {
            term: "Rationale Erwartungen",
            definition: "Akteure nutzen alle verfügbaren Informationen (auch über zukünftige Politik) optimal zur Erwartungsbildung — keine systematischen Fehler im Durchschnitt.",
          },
          {
            term: "Glaubwürdigkeit der Geldpolitik",
            definition: "Je glaubwürdiger eine angekündigte Desinflationspolitik, desto schneller passen sich (rationale) Erwartungen an und desto geringer der Produktions-/Beschäftigungsverlust.",
          },
        ],
      },
      {
        id: "10-6",
        heading: "10.6 Sacrifice Ratio & Hysterese",
        body: [
          "Die Sacrifice Ratio misst, wie viel kumulierter Output (in % des BIP) geopfert werden muss, um die Inflation dauerhaft um einen Prozentpunkt zu senken. Die Hysterese-These stellt die Existenz einer festen 'natürlichen' Arbeitslosenquote infrage: anhaltende zyklische Arbeitslosigkeit kann selbst die natürliche Rate dauerhaft erhöhen (z. B. durch Dequalifizierung Langzeitarbeitsloser).",
        ],
        terms: [
          {
            term: "Sacrifice Ratio",
            definition: "Kumulierter prozentualer BIP-Verlust, der nötig ist, um die Inflationsrate dauerhaft um einen Prozentpunkt zu senken.",
          },
          {
            term: "Hysterese",
            definition: "These, dass die natürliche Arbeitslosenquote selbst von der Vergangenheit der tatsächlichen (zyklischen) Arbeitslosigkeit abhängt, statt fix zu sein.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 11 — Exkurs: Bankensystem ====================
  {
    id: "exkurs-bankensystem",
    number: 11,
    title: "Exkurs: Bankensystem & Geldschöpfung",
    free: false,
    intro:
      "Wie entsteht Geld eigentlich? Dieser Exkurs erklärt das Mindestreservesystem und den Geldschöpfungsmultiplikator — Grundlage dafür, wie Zentralbanken die Geldmenge (M in Kapitel 5–7) überhaupt steuern.",
    sections: [
      {
        id: "11-1",
        heading: "11.1 Mindestreservesystem und Geldschöpfung",
        body: [
          "Banken müssen nur einen Bruchteil ihrer Einlagen als Reserve halten (Mindestreservesatz rr) und können den Rest als Kredite weitervergeben. Diese Kredite werden wiederum als Einlagen bei anderen Banken verbucht, die wiederum einen Teil verleihen — so entsteht durch das Bankensystem als Ganzes mehr Geld, als die Zentralbank ursprünglich geschaffen hat.",
        ],
        terms: [
          {
            term: "Mindestreservesatz rr",
            definition: "Anteil der Einlagen, den Banken als Reserve halten müssen (nicht verleihen dürfen).",
          },
          {
            term: "Geldschöpfungsmultiplikator m",
            definition: "m = 1/rr — der Faktor, um den sich eine ursprüngliche Zentralbankgeldmenge (Basisgeld) durch das Bankensystem vervielfacht.",
          },
          {
            term: "Basisgeld / monetäre Basis",
            definition: "Bargeld plus Reserven der Geschäftsbanken bei der Zentralbank — das, was die Zentralbank direkt kontrolliert.",
          },
        ],
        formulas: ["Geldmengenmultiplikator m = 1/rr", "M = m · Basisgeld"],
        formulasLatex: ["m = \\dfrac{1}{rr}", "M = m \\cdot \\text{Basisgeld}"],
        examples: [
          "Bei einem Mindestreservesatz von 10 % (rr = 0,1) beträgt der Geldschöpfungsmultiplikator m = 1/0,1 = 10: jeder Euro Basisgeld kann bis zu 10 Euro Geldmenge M erzeugen, wenn alle Banken ihre überschüssigen Reserven vollständig verleihen und niemand Bargeld hortet.",
        ],
      },
      {
        id: "11-2",
        heading: "11.2 Instrumente der Zentralbank",
        body: [
          "Zentralbanken steuern die Geldmenge über drei klassische Instrumente, ergänzt um moderne (unkonventionelle) Maßnahmen seit der Finanzkrise.",
        ],
        terms: [
          {
            term: "Offenmarktgeschäfte",
            definition: "Kauf/Verkauf von Staatsanleihen durch die Zentralbank — das wichtigste und am häufigsten genutzte Instrument zur Steuerung der Basisgeldmenge.",
          },
          {
            term: "Mindestreservepolitik",
            definition: "Änderung von rr direkt verändert den Geldschöpfungsmultiplikator m und damit M.",
          },
          {
            term: "Leitzins / Diskontsatz",
            definition: "Zinssatz, zu dem sich Geschäftsbanken bei der Zentralbank refinanzieren können — beeinflusst, wie viele Reserven Banken halten wollen.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 12 — Exkurs: Zölle ====================
  {
    id: "exkurs-zoelle",
    number: 12,
    title: "Exkurs: Zölle und Handelspolitik",
    free: false,
    intro:
      "Zölle sind 2025 wieder zu einem zentralen wirtschaftspolitischen Thema geworden ('Liberation Day'-Zölle der USA). Dieser Exkurs verbindet die mikroökonomische Zollanalyse mit ihren makroökonomischen Konsequenzen über Wechselkurse und Nettoexporte.",
    sections: [
      {
        id: "12-1",
        heading: "12.1 Wirkungsweise von Zöllen",
        body: [
          "Ein Zoll ist eine Steuer auf importierte Güter. Er erhöht den Inlandspreis des importierten Guts, senkt die importierte Menge, erhöht die heimische Produktion des konkurrierenden Guts und generiert Staatseinnahmen — verursacht aber einen gesamtwirtschaftlichen Wohlfahrtsverlust (deadweight loss), da er Konsum- und Produktionsentscheidungen verzerrt.",
        ],
        terms: [
          {
            term: "Zoll (tariff)",
            definition: "Eine Steuer auf importierte Güter, die den Inlandspreis über den Weltmarktpreis anhebt.",
          },
          {
            term: "Wohlfahrtsverlust durch Zölle (deadweight loss)",
            definition: "Der Nettoverlust an gesamtwirtschaftlicher Wohlfahrt (Konsumenten- + Produzentenrente + Staatseinnahmen), verursacht durch die Verzerrung von Konsum- und Produktionsentscheidungen.",
          },
        ],
      },
      {
        id: "12-2",
        heading: "12.2 Makroökonomische Effekte über Mundell-Fleming",
        body: [
          "Im Mundell-Fleming-Modell wirkt ein Zoll wie eine direkte Verbesserung der Nettoexporte NX bei jedem Wechselkurs, verschiebt also die IS*-Kurve nach rechts. Unter flexiblen Wechselkursen führt das zu einer Aufwertung der heimischen Währung, die NX wieder zurückdrängt — Y bleibt am Ende unverändert, nur die Zusammensetzung der Nachfrage verschiebt sich (weniger Importe, aber auch weniger preislich wettbewerbsfähige Exporte durch die Aufwertung).",
          "Das erklärt, warum unilaterale Zölle unter flexiblen Wechselkursen die Gesamtbeschäftigung typischerweise weniger beeinflussen, als naive Handelsbilanz-Überlegungen vermuten lassen — der Wechselkurs kompensiert einen Großteil des Effekts.",
        ],
        terms: [
          {
            term: "Zölle als NX-Schock im IS*-LM*-Modell",
            definition: "Ein Zoll verschiebt (bei gegebenem ε) die IS*-Kurve nach rechts, analog zu einer Fiskalexpansion — mit denselben Aufwertungs- und Crowding-out-Mechanismen aus Kapitel 8.",
          },
          {
            term: "Vergeltungszölle (retaliation)",
            definition: "Gegenzölle betroffener Handelspartner, die den ursprünglichen NX-Effekt teilweise oder vollständig neutralisieren und zusätzlich Wohlfahrtsverluste auf beiden Seiten erzeugen.",
          },
        ],
        examples: [
          "Die 2025 von den USA verhängten breiten Importzölle ('Liberation Day') sollten laut Ankündigung die Handelsbilanz verbessern. Die Mundell-Fleming-Logik sagt jedoch voraus, dass ein Großteil des NX-Effekts durch eine Dollaraufwertung sowie Vergeltungszölle der Handelspartner kompensiert wird — die beobachtete Handelsbilanzverbesserung fiel entsprechend kleiner aus als die reine Zollhöhe vermuten ließe.",
        ],
      },
    ],
  },

  // ==================== Kapitel 13 — Exkurs: KI & Arbeitsmarkt ====================
  {
    id: "exkurs-ki-wachstum",
    number: 13,
    title: "Exkurs: KI, Automatisierung und Arbeitsmarkt",
    free: false,
    intro:
      "Wie verändert Künstliche Intelligenz langfristiges Wachstum und die Arbeitsnachfrage? Dieser Exkurs erweitert das Solow-Modell um eine aufgabenbasierte (task-based) Sichtweise auf Automatisierung.",
    sections: [
      {
        id: "13-1",
        heading: "13.1 Das aufgabenbasierte Modell (task-based model)",
        body: [
          "Statt Arbeit und Kapital als homogene Aggregate zu behandeln, zerlegt das aufgabenbasierte Modell Produktion in ein Kontinuum einzelner Aufgaben (tasks). Jede Aufgabe kann entweder von Arbeit oder von Kapital/Automatisierung erledigt werden — Automatisierung verschiebt die Grenze, welche Aufgaben von Kapital übernommen werden.",
        ],
        terms: [
          {
            term: "Aufgabenbasiertes Modell (task-based framework)",
            definition: "Modelliert Produktion als Kontinuum von Aufgaben, die entweder Arbeit oder Kapital zugeordnet werden — Automatisierung verschiebt diese Zuordnung.",
          },
          {
            term: "Verdrängungseffekt (displacement effect)",
            definition: "Automatisierung ersetzt Arbeit bei zuvor von Arbeitern erledigten Aufgaben — senkt (ceteris paribus) die Arbeitsnachfrage und tendenziell Löhne.",
          },
          {
            term: "Produktivitätseffekt",
            definition: "Automatisierung senkt Produktionskosten insgesamt, erhöht Output und damit (über höhere Nachfrage nach komplementärer Arbeit) tendenziell auch wieder die Arbeitsnachfrage.",
          },
        ],
      },
      {
        id: "13-2",
        heading: "13.2 Neue Aufgaben als Gegengewicht",
        body: [
          "Historisch hat Automatisierung nicht zu dauerhaft steigender Arbeitslosigkeit geführt, weil gleichzeitig neue Aufgaben entstanden sind, in denen Arbeit (noch) einen komparativen Vorteil hat. Ob KI diesmal anders wirkt, hängt davon ab, ob und wie schnell neue, für Menschen komparativ vorteilhafte Aufgaben entstehen, verglichen mit dem Tempo der Verdrängung.",
        ],
        terms: [
          {
            term: "Reinstatement-Effekt (Schaffung neuer Aufgaben)",
            definition: "Entstehung neuer Aufgaben/Berufe, in denen Arbeit einen komparativen Vorteil gegenüber Kapital/Automatisierung hat — wirkt dem Verdrängungseffekt entgegen.",
          },
          {
            term: "Komparativer Vorteil von Arbeit vs. Kapital",
            definition: "Bestimmt, welcher Faktor eine gegebene Aufgabe günstiger erledigt — verschiebt sich mit technologischem Fortschritt zugunsten von Kapital/KI in immer mehr Aufgaben.",
          },
        ],
        examples: [
          "Die Automatisierung der Textilproduktion im 19. Jahrhundert verdrängte viele traditionelle Handwerksberufe, schuf aber gleichzeitig neue Aufgaben in Fabrikmanagement, Maschinenwartung und späteren Industriezweigen — Nettobeschäftigung stieg langfristig trotz kurzfristiger Verdrängung.",
        ],
      },
      {
        id: "13-3",
        heading: "13.3 Verteilungswirkungen",
        body: [
          "Auch wenn Automatisierung die Gesamtproduktivität erhöht, sind die Verteilungswirkungen zwischen Arbeit und Kapital sowie zwischen unterschiedlich qualifizierten Arbeitskräften nicht neutral: Aufgaben, die zuerst automatisiert werden, betreffen oft mittelqualifizierte Routinetätigkeiten stärker als hoch- oder geringqualifizierte Tätigkeiten (Job-Polarisierung).",
        ],
        terms: [
          {
            term: "Job-Polarisierung",
            definition: "Relativer Beschäftigungsrückgang bei mittelqualifizierten Routinetätigkeiten bei gleichzeitigem Wachstum bei hoch- und geringqualifizierten, weniger automatisierbaren Tätigkeiten.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 14 — Exkurs: Klima & Wachstum ====================
  {
    id: "exkurs-klima-wachstum",
    number: 14,
    title: "Exkurs: Klima und Wachstum",
    free: false,
    intro:
      "Lässt sich Wirtschaftswachstum von Umweltzerstörung entkoppeln? Dieser Exkurs verbindet das Solow-Modell mit Umweltökonomik und stellt die wichtigsten Modellklassen zur Analyse von Klimapolitik vor.",
    sections: [
      {
        id: "14-1",
        heading: "14.1 Grünes Wachstum: das Green-Solow-Modell",
        body: [
          "Das Green-Solow-Modell erweitert das klassische Solow-Modell um Emissionen als Nebenprodukt der Produktion und um 'grünen' technischen Fortschritt, der die Emissionsintensität pro Output senkt. Entscheidend ist, ob dieser grüne technische Fortschritt schnell genug ist, um Wachstum und Emissionen zu entkoppeln (absolute statt nur relative Entkopplung).",
        ],
        terms: [
          {
            term: "Relative Entkopplung",
            definition: "Emissionen wachsen langsamer als das BIP (Emissionsintensität sinkt), aber absolute Emissionen steigen weiterhin.",
          },
          {
            term: "Absolute Entkopplung",
            definition: "Absolute Emissionen sinken, während das BIP weiter wächst — das eigentliche Ziel einer klimaverträglichen Wachstumsstrategie.",
          },
          {
            term: "Green-Solow-Modell",
            definition: "Erweiterung des Solow-Modells um eine Emissionsfunktion und emissionssenkenden technischen Fortschritt, um die Bedingungen für absolute Entkopplung zu analysieren.",
          },
        ],
      },
      {
        id: "14-2",
        heading: "14.2 Integrated Assessment Models (IAMs) und das DICE-Modell",
        body: [
          "Integrated Assessment Models verbinden ökonomische Wachstumsmodelle mit Klimamodellen, um die optimale Klimapolitik zu bestimmen. Das bekannteste Beispiel ist das DICE-Modell (Dynamic Integrated Climate-Economy) von William Nordhaus, das den optimalen Pfad von CO2-Bepreisung gegen wirtschaftliche Kosten abwägt.",
        ],
        terms: [
          {
            term: "Integrated Assessment Model (IAM)",
            definition: "Modellklasse, die ökonomisches Wachstum, Emissionen und Klimaschäden gemeinsam modelliert, um optimale Klimapolitik abzuleiten.",
          },
          {
            term: "DICE-Modell",
            definition: "Von William Nordhaus entwickeltes IAM, das den gesamtwirtschaftlich optimalen CO2-Preis als Abwägung zwischen Vermeidungskosten und Klimaschäden bestimmt.",
          },
          {
            term: "Sozialer Diskontsatz",
            definition: "Der Zinssatz, mit dem zukünftige Klimaschäden gegenüber heutigen Vermeidungskosten abgewertet werden — eine der umstrittensten Annahmen in der Klimaökonomik, da sie das Ergebnis stark beeinflusst.",
          },
        ],
      },
      {
        id: "14-3",
        heading: "14.3 Directed Technological Change",
        body: [
          "Die Theorie des gerichteten technischen Fortschritts (Directed Technological Change) argumentiert, dass die Richtung von Innovation (grün vs. fossil) selbst eine ökonomische Entscheidung ist, die auf Preissignale reagiert. Eine konsequente CO2-Bepreisung lenkt Forschung und Entwicklung gezielt in Richtung emissionsarmer Technologien.",
        ],
        terms: [
          {
            term: "Directed Technological Change (gerichteter technischer Fortschritt)",
            definition: "Theorie, wonach Unternehmen ihre Innovationsrichtung (grün vs. fossil) endogen an relativen Preisen und Marktgrößen ausrichten — Politik kann diese Richtung über CO2-Preise beeinflussen.",
          },
          {
            term: "Pfadabhängigkeit (path dependence)",
            definition: "Frühere Investitionen in eine Technologierichtung (z. B. fossile Energien) machen ein spätere Umlenkung teurer — ein Grund für frühzeitige, konsequente Klimapolitik.",
          },
        ],
      },
    ],
  },

  // ==================== Kapitel 15 — Exkurs: Methodik ====================
  {
    id: "exkurs-methodik",
    number: 15,
    title: "Exkurs: Methodik der Makroökonomik",
    free: false,
    intro:
      "Ein methodischer Rückblick: Warum arbeitet die Makroökonomik überhaupt mit stark vereinfachten Modellen, und was rechtfertigt das? Dieser Exkurs ordnet Modellbildung als wissenschaftliche Methode ein.",
    sections: [
      {
        id: "15-1",
        heading: "15.1 Modelle als bewusste Vereinfachung",
        body: [
          "Ökonomische Modelle sind bewusst vereinfachte Abbildungen der Realität — wie eine Landkarte, die nicht jedes Detail der Landschaft zeigt, sondern nur die für den jeweiligen Zweck relevanten Merkmale. Ein 'perfektes' Modell, das alles abbildet, wäre genauso nutzlos wie eine Karte im Maßstab 1:1.",
        ],
        terms: [
          {
            term: "Ökonomisches Modell",
            definition: "Eine vereinfachte, meist mathematische Darstellung ökonomischer Zusammenhänge, die bewusst irrelevante Details weglässt, um die relevanten Mechanismen klar sichtbar zu machen.",
          },
          {
            term: "Ceteris-paribus-Annahme",
            definition: "Die Annahme, dass alle anderen Einflussgrößen konstant gehalten werden, während der Effekt einer einzelnen Variable isoliert betrachtet wird.",
          },
        ],
      },
      {
        id: "15-2",
        heading: "15.2 Positive vs. normative Ökonomik",
        body: [
          "Positive Aussagen beschreiben, wie die Welt ist oder bei bestimmten Politikmaßnahmen wäre ('Ein Mindestlohn über dem Gleichgewichtslohn erhöht die Arbeitslosigkeit unter Geringqualifizierten'). Normative Aussagen bewerten, wie die Welt sein sollte ('Der Mindestlohn sollte erhöht werden'). Makroökonomische Modelle liefern primär positive Aussagen; die normative Bewertung erfordert zusätzliche Werturteile.",
        ],
        terms: [
          {
            term: "Positive Ökonomik",
            definition: "Beschreibende, testbare Aussagen darüber, wie ökonomische Systeme tatsächlich funktionieren.",
          },
          {
            term: "Normative Ökonomik",
            definition: "Wertende Aussagen darüber, wie Politik gestaltet werden sollte — basiert auf zusätzlichen ethischen/politischen Werturteilen, nicht allein auf dem Modell.",
          },
        ],
      },
      {
        id: "15-3",
        heading: "15.3 Warum Modelle trotz unrealistischer Annahmen nützlich sind",
        body: [
          "Ein häufiger Einwand ist, dass Modellannahmen (z. B. perfekte Kapitalmobilität in Mundell-Fleming, konstante Sparquote in Solow) 'unrealistisch' seien. Der methodische Standpunkt der Makroökonomik: Ein Modell wird nicht daran gemessen, wie realistisch seine Annahmen sind, sondern daran, wie gut seine Vorhersagen mit beobachtbaren Daten übereinstimmen (Instrumentalismus/Positivismus nach Milton Friedman).",
        ],
        terms: [
          {
            term: "Instrumentalistische Modellbewertung",
            definition: "Ein Modell wird nach der empirischen Güte seiner Vorhersagen bewertet, nicht nach dem Realitätsgrad seiner Annahmen (Milton Friedman, 'The Methodology of Positive Economics').",
          },
          {
            term: "Robustheit eines Modellergebnisses",
            definition: "Ein Ergebnis gilt als robust, wenn es auch unter alternativen, weniger restriktiven Annahmen näherungsweise bestehen bleibt.",
          },
        ],
      },
    ],
  },
];
