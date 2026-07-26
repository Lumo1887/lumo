import type { SkriptChapter } from "./types";

// Eigenständiges Lehrwerk zu "Finanzierung und Rechnungswesen" (Finanzmathematik,
// Investitionsrechnung, Wertpapierbewertung, externes und internes
// Rechnungswesen), verfasst wie ein unabhängiges Lehrbuch zum Modulthema —
// nicht als Paraphrase einer bestimmten Vorlesung.
export const chapters: SkriptChapter[] = [
  // ==================== Kapitel 1 ====================
  {
    id: "zeitwert-des-geldes",
    number: 1,
    title: "Zeitwert des Geldes: Barwert und Endwert",
    free: true,
    intro:
      "Ein Euro heute ist mehr wert als ein Euro in einem Jahr — dieses Grundprinzip der Finanzmathematik ist die Basis jeder Investitions- und Finanzierungsentscheidung. Dieses Kapitel führt Bar- und Endwertberechnung ein.",
    sections: [
      {
        id: "1-1",
        heading: "1.1 Der Zeitwert des Geldes",
        body: [
          "Geld heute ist wertvoller als derselbe Nominalbetrag in der Zukunft — aus drei Gründen: entgangene Anlagemöglichkeiten (Opportunitätskosten), Inflation (Kaufkraftverlust) und Unsicherheit (zukünftige Zahlungen sind nie hundertprozentig sicher). Der Kalkulationszinssatz i fasst diese Faktoren in einer einzigen Vergleichsgröße zusammen.",
          "Um Zahlungen zu unterschiedlichen Zeitpunkten überhaupt vergleichbar zu machen, müssen sie auf einen gemeinsamen Bezugszeitpunkt umgerechnet werden — meist auf die Gegenwart (Barwert/Present Value) oder auf einen zukünftigen Zeitpunkt (Endwert/Future Value).",
        ],
        terms: [{ term: "Kalkulationszinssatz", definition: "Zinssatz, der Opportunitätskosten, Inflation und Risiko einer Zahlung erfasst und zur Auf-/Abzinsung genutzt wird." }],
        examples: [
          "1.000€ heute sind mehr wert als die Zusage von 1.000€ in einem Jahr, selbst ohne Inflation: Man könnte die 1.000€ heute anlegen und hätte in einem Jahr mehr als 1.000€ zur Verfügung.",
        ],
      },
      {
        id: "1-2",
        heading: "1.2 Endwertberechnung",
        body: [
          "Der Endwert (Future Value) einer heutigen Zahlung C₀ nach n Perioden bei Zinssatz i beträgt bei jährlicher Verzinsung mit Zinseszins FV = C₀·(1+i)ⁿ. Der Faktor (1+i)ⁿ heißt Aufzinsungsfaktor und wächst exponentiell mit der Anzahl der Perioden.",
          "Der Zinseszinseffekt (Verzinsung bereits erhaltener Zinsen in Folgeperioden) führt bei langen Anlagehorizonten zu erheblich höheren Endwerten als eine rein lineare (unterjährige) Verzinsung — ein Effekt, der bei kurzen Zeiträumen kaum spürbar, bei Jahrzehnten aber dominant ist.",
        ],
        formulas: ["FV = C₀ · (1+i)ⁿ"],
        formulasLatex: ["FV = C_0 \\cdot (1+i)^{n}"],
        terms: [{ term: "Endwert (Future Value)", definition: "Wert einer heutigen Zahlung nach n Perioden bei Verzinsung mit Zinssatz i." }],
        examples: [
          "10.000€, angelegt zu 5% über 20 Jahre, wachsen auf FV=10.000×(1,05)²⁰≈26.533€ — mehr als das 2,6-fache des ursprünglichen Betrags, allein durch Zinseszinseffekt.",
        ],
      },
      {
        id: "1-3",
        heading: "1.3 Barwertberechnung (Diskontierung)",
        body: [
          "Der Barwert (Present Value) einer zukünftigen Zahlung Cₙ, die in n Perioden anfällt, ergibt sich durch Diskontierung: PV = Cₙ/(1+i)ⁿ — die Umkehrung der Endwertformel. Der Faktor 1/(1+i)ⁿ heißt Abzinsungsfaktor und wird mit zunehmendem n und i kleiner.",
          "Bei mehreren zukünftigen Zahlungen zu unterschiedlichen Zeitpunkten wird jede Zahlung einzeln diskontiert und die Barwerte anschließend addiert — dieses Prinzip der additiven Barwertbildung ist die Grundlage der im weiteren Verlauf behandelten Investitionsrechnung und Wertpapierbewertung.",
        ],
        formulas: ["PV = Cₙ / (1+i)ⁿ"],
        formulasLatex: ["PV = \\dfrac{C_n}{(1+i)^{n}}"],
        terms: [{ term: "Barwert (Present Value)", definition: "Heutiger Wert einer zukünftigen Zahlung nach Abzinsung mit dem Kalkulationszinssatz." }],
        examples: [
          "Eine Zahlung von 50.000€ in 10 Jahren hat bei einem Kalkulationszinssatz von 6% einen Barwert von PV=50.000/(1,06)¹⁰≈27.920€ — deutlich weniger als der Nominalbetrag.",
        ],
      },
      {
        id: "1-4",
        heading: "1.4 Unterjährige Verzinsung und der effektive Jahreszins",
        body: [
          "Wird der Nominalzinssatz i (p.a.) nicht einmal jährlich, sondern m-mal pro Jahr verzinst (z. B. monatlich, m=12), wächst ein Kapital pro Jahr auf C₀·(1+i/m)^m statt auf C₀·(1+i). Da bereits gutgeschriebene Teilzinsen innerhalb desselben Jahres weiterverzinst werden, übersteigt der tatsächliche (effektive) Jahreszins den nominalen Zinssatz, sobald m>1.",
          "Der effektive Jahreszins i_eff macht unterschiedliche Verzinsungsintervalle vergleichbar: i_eff = (1+i/m)^m − 1. Je häufiger unterjährig verzinst wird (je größer m), desto größer die Differenz zwischen nominalem und effektivem Zinssatz — ein Effekt, der bei Konsumentenkrediten und Sparprodukten praktisch relevant ist, da Anbieter oft mit dem (niedrigeren) Nominalzins werben.",
        ],
        formulas: ["i_eff = (1+i/m)^m − 1"],
        formulasLatex: ["i_{\\text{eff}} = \\left(1+\\dfrac{i}{m}\\right)^{m} - 1"],
        terms: [{ term: "Effektiver Jahreszins", definition: "Tatsächlicher Jahreszins unter Berücksichtigung unterjähriger Zinseszinseffekte; übersteigt bei m>1 stets den Nominalzins." }],
        examples: [
          "Bei einem Nominalzinssatz von 12% p.a. und monatlicher Verzinsung (m=12) beträgt der effektive Jahreszins i_eff=(1+0,12/12)¹²−1=(1,01)¹²−1≈12,68% — deutlich mehr als die nominal beworbenen 12%.",
        ],
      },
      {
        id: "1-5",
        heading: "1.5 Stetige Verzinsung",
        body: [
          "Lässt man die Anzahl der Verzinsungsintervalle m gegen unendlich streben (kontinuierliche, 'stetige' Verzinsung), konvergiert der Aufzinsungsfaktor (1+i/m)^m gegen die Exponentialfunktion e^i. Der Endwert bei stetiger Verzinsung über n Jahre beträgt somit FV = C₀·e^(i·n).",
          "Stetige Verzinsung ist in der Praxis kein reales Zinsprodukt, sondern ein mathematisch bequemer Grenzfall, der in der Optionspreistheorie und anderen finanzmathematischen Modellen (z. B. Black-Scholes) durchgängig verwendet wird, da er Ableitungen und Umformungen wesentlich vereinfacht.",
        ],
        formulas: ["FV = C₀ · e^(i·n)"],
        formulasLatex: ["FV = C_0 \\cdot e^{i\\cdot n}"],
        terms: [{ term: "Stetige Verzinsung", definition: "Grenzfall unendlich häufiger unterjähriger Verzinsung; Endwert FV=C₀·e^(i·n)." }],
        examples: [
          "10.000€ bei stetiger Verzinsung mit i=5% über 10 Jahre wachsen auf FV=10.000·e^(0,05×10)=10.000·e^0,5≈16.487€ — geringfügig mehr als bei jährlicher Verzinsung (10.000×1,05¹⁰≈16.289€), da stetige Verzinsung dem Grenzfall unendlich häufiger Verzinsung entspricht.",
        ],
      },
    ],
  },
  // ==================== Kapitel 2 ====================
  {
    id: "rentenformeln",
    number: 2,
    title: "Rentenformeln: Ewige und endliche Renten",
    free: false,
    intro:
      "Viele Finanzentscheidungen betreffen nicht eine einzelne Zahlung, sondern eine Serie regelmäßiger Zahlungen. Dieses Kapitel behandelt die geschlossenen Formeln zur Barwertberechnung solcher Zahlungsreihen.",
    sections: [
      {
        id: "2-1",
        heading: "2.1 Die ewige Rente (Perpetuity)",
        body: [
          "Eine ewige Rente zahlt einen konstanten Betrag C am Ende jeder Periode, unbegrenzt in die Zukunft. Trotz unendlich vieler Zahlungen konvergiert der Barwert zu einem endlichen Wert, da spätere Zahlungen immer stärker abgezinst werden: PV = C/i.",
          "Diese scheinbar überraschende Konvergenz folgt aus der geometrischen Reihe: PV = C/(1+i) + C/(1+i)² + ... = C·Σ(1/(1+i))ⁿ, und diese geometrische Reihe mit Quotient 1/(1+i)<1 konvergiert nach der bekannten Summenformel gegen C/i.",
        ],
        formulas: ["PV = C / i (ewige Rente)"],
        formulasLatex: ["PV = \\dfrac{C}{i}"],
        terms: [{ term: "Ewige Rente (Perpetuity)", definition: "Unbegrenzte Zahlungsreihe konstanter Höhe; Barwert konvergiert zu C/i." }],
        examples: [
          "Eine Stiftung möchte jährlich unbefristet 20.000€ ausschütten und rechnet mit einem Kalkulationszinssatz von 4%. Das benötigte Stiftungskapital beträgt PV=20.000/0,04=500.000€.",
        ],
      },
      {
        id: "2-2",
        heading: "2.2 Die wachsende ewige Rente",
        body: [
          "Wächst die Zahlung jede Periode mit konstanter Rate g (mit g<i), ergibt sich der Barwert der wachsenden ewigen Rente als PV = C₁/(i−g), wobei C₁ die Zahlung der ersten Periode ist. Diese Formel wird häufig zur Unternehmensbewertung genutzt (Gordon-Growth-Modell), wenn zukünftige Dividenden oder Cashflows mit konstanter Rate wachsend angenommen werden.",
          "Ist g≥i, divergiert die Formel (unendlicher Barwert) — ökonomisch unplausibel, da kein Unternehmen dauerhaft schneller wachsen kann als der Diskontierungszins, weshalb g<i eine notwendige Modellannahme ist.",
        ],
        formulas: ["PV = C₁ / (i−g)"],
        formulasLatex: ["PV = \\dfrac{C_1}{i-g}"],
        terms: [{ term: "Gordon-Growth-Modell", definition: "Bewertungsformel für eine mit konstanter Rate wachsende ewige Zahlungsreihe: PV=C₁/(i−g)." }],
        examples: [
          "Eine Aktie zahlt im nächsten Jahr voraussichtlich 3€ Dividende, die danach jährlich um 2% wächst, bei einem Kalkulationszinssatz von 8%. Der faire Aktienwert beträgt PV=3/(0,08−0,02)=50€.",
        ],
      },
      {
        id: "2-3",
        heading: "2.3 Die endliche Rente (Annuität)",
        body: [
          "Eine endliche Rente (Annuität) zahlt einen konstanten Betrag C über genau n Perioden. Ihr Barwert lässt sich als Differenz zweier ewiger Renten herleiten (eine ab heute, eine ab Periode n+1, die die erste 'zunichtemacht'): PV = C·[1−(1+i)⁻ⁿ]/i. Dieser Ausdruck heißt Rentenbarwertfaktor.",
          "Annuitäten sind das Standardmodell für Ratenzahlungen wie Kredittilgungen: Ein Annuitätendarlehen zahlt über die Laufzeit konstante Raten, deren Zins-/Tilgungsanteil sich mit der Zeit verschiebt (anfangs hoher Zins-, später hoher Tilgungsanteil), bei insgesamt konstanter Ratenhöhe.",
        ],
        formulas: ["PV = C · [1−(1+i)⁻ⁿ] / i"],
        formulasLatex: ["PV = C \\cdot \\dfrac{1-(1+i)^{-n}}{i}"],
        terms: [{ term: "Rentenbarwertfaktor", definition: "Faktor [1−(1+i)⁻ⁿ]/i zur Berechnung des Barwerts einer endlichen, konstanten Zahlungsreihe." }],
        examples: [
          "Ein Kredit wird über 10 Jahre mit jährlich 8.000€ bei 5% Zins bedient. Der Barwert (= Kreditsumme) beträgt PV=8.000×[1−(1,05)⁻¹⁰]/0,05≈8.000×7,7217≈61.774€.",
        ],
      },
    ],
  },
  // ==================== Kapitel 3 ====================
  {
    id: "investitionsrechnung-kapitalwert",
    number: 3,
    title: "Investitionsrechnung I: Kapitalwert und Amortisationsdauer",
    free: false,
    intro:
      "Mit den finanzmathematischen Grundlagen aus den ersten beiden Kapiteln lässt sich beurteilen, ob eine konkrete Investition wirtschaftlich vorteilhaft ist. Dieses Kapitel behandelt die beiden gebräuchlichsten Verfahren der dynamischen und statischen Investitionsrechnung.",
    sections: [
      {
        id: "3-1",
        heading: "3.1 Der Kapitalwert (Net Present Value)",
        body: [
          "Der Kapitalwert (NPV) einer Investition ist die Summe der Barwerte aller mit ihr verbundenen Ein- und Auszahlungen, einschließlich der anfänglichen Investitionsauszahlung: NPV = −I₀ + Σₜ CFₜ/(1+i)ᵗ. Eine Investition ist nach dem Kapitalwertkriterium vorteilhaft, wenn NPV>0 — sie generiert dann mehr Wert, als der Kalkulationszinssatz als Mindestrendite verlangt.",
          "Bei sich gegenseitig ausschließenden Investitionsalternativen (nur eine kann realisiert werden) sollte diejenige mit dem höchsten (positiven) Kapitalwert gewählt werden, da der Kapitalwert direkt den absoluten Wertzuwachs für die Investoren angibt.",
        ],
        formulas: ["NPV = −I₀ + Σₜ CFₜ / (1+i)ᵗ"],
        formulasLatex: ["NPV = -I_0 + \\sum_t \\dfrac{CF_t}{(1+i)^t}"],
        terms: [{ term: "Kapitalwert (NPV)", definition: "Summe aller Barwerte einer Investition einschließlich der Anfangsauszahlung; NPV>0 bedeutet Vorteilhaftigkeit." }],
        examples: [
          "Eine Investition kostet heute 100.000€ und liefert danach 3 Jahre lang je 45.000€ bei i=8%. NPV=−100.000+45.000/1,08+45.000/1,08²+45.000/1,08³≈−100.000+115.978≈15.978€ — die Investition ist vorteilhaft.",
        ],
      },
      {
        id: "3-2",
        heading: "3.2 Die statische Amortisationsdauer (Payback-Methode)",
        body: [
          "Die statische Amortisationsdauer gibt an, nach wie vielen Perioden die kumulierten (nicht diskontierten) Einzahlungsüberschüsse die Anfangsinvestition decken. Sie ist einfach zu berechnen und intuitiv verständlich, ignoriert jedoch den Zeitwert des Geldes und alle Zahlungsströme nach Erreichen des Amortisationszeitpunkts.",
          "Wegen dieser Schwächen wird die Payback-Methode meist nur als ergänzendes Liquiditäts-/Risikokriterium neben dem Kapitalwertkriterium genutzt, nicht als alleiniges Entscheidungskriterium — sie liefert zusätzliche Information darüber, wie schnell investiertes Kapital wieder verfügbar ist.",
        ],
        terms: [{ term: "Statische Amortisationsdauer", definition: "Zeitspanne, bis kumulierte, nicht diskontierte Einzahlungsüberschüsse die Anfangsinvestition decken." }],
        examples: [
          "Bei einer Anfangsinvestition von 90.000€ und konstanten jährlichen Rückflüssen von 30.000€ beträgt die statische Amortisationsdauer 90.000/30.000=3 Jahre — unabhängig davon, wie hoch der Kalkulationszinssatz ist.",
        ],
      },
      {
        id: "3-3",
        heading: "3.3 Dynamische Amortisationsdauer",
        body: [
          "Die dynamische Amortisationsdauer korrigiert die statische Methode, indem sie mit diskontierten (statt nominalen) Zahlungsströmen rechnet: Sie gibt an, nach wie vielen Perioden die kumulierten BARWERTE der Einzahlungsüberschüsse die Anfangsinvestition decken. Da diskontierte Zahlungen kleiner als nominale sind, ist die dynamische Amortisationsdauer stets länger (oder gleich) als die statische.",
          "Diese Methode berücksichtigt zwar den Zeitwert des Geldes, ignoriert aber weiterhin alle Zahlungsströme nach dem Amortisationszeitpunkt — ein grundsätzlicher konzeptioneller Nachteil gegenüber dem Kapitalwertkriterium, das alle Zahlungsströme über die gesamte Laufzeit erfasst.",
        ],
        terms: [{ term: "Dynamische Amortisationsdauer", definition: "Zeitspanne, bis kumulierte, diskontierte Einzahlungsüberschüsse die Anfangsinvestition decken." }],
        examples: [
          "Bei derselben Investition wie oben (90.000€ Anfangsinvestition, 30.000€ jährlich, aber jetzt mit i=10% diskontiert) dauert es länger als 3 Jahre, bis die Barwerte der Rückflüsse die Investition decken, da jede zukünftige Zahlung abgezinst einen geringeren Beitrag leistet als ihr Nominalwert.",
        ],
      },
    ],
  },
  // ==================== Kapitel 4 ====================
  {
    id: "investitionsrechnung-irr",
    number: 4,
    title: "Investitionsrechnung II: Interner Zinssatz und Kapitalwertrate",
    free: false,
    intro:
      "Neben dem Kapitalwert existieren weitere dynamische Investitionsrechnungsverfahren, die andere Fragestellungen beantworten. Dieses Kapitel behandelt den internen Zinssatz und ergänzende relative Vorteilhaftigkeitskennzahlen.",
    sections: [
      {
        id: "4-1",
        heading: "4.1 Der interne Zinssatz (IRR)",
        body: [
          "Der interne Zinssatz (Internal Rate of Return, IRR) ist derjenige Kalkulationszinssatz, bei dem der Kapitalwert einer Investition genau null wird: −I₀ + Σₜ CFₜ/(1+IRR)ᵗ = 0. Er lässt sich als die 'tatsächliche Rendite' der Investition interpretieren, unabhängig vom extern vorgegebenen Kalkulationszinssatz.",
          "Eine Investition gilt nach dem IRR-Kriterium als vorteilhaft, wenn der interne Zinssatz den Kalkulationszinssatz (die Mindestrendite der Investoren) übersteigt: IRR > i. Anders als der Kapitalwert liefert der IRR eine relative (prozentuale), keine absolute Kennzahl.",
        ],
        formulas: ["−I₀ + Σₜ CFₜ / (1+IRR)ᵗ = 0"],
        formulasLatex: ["-I_0 + \\sum_t \\dfrac{CF_t}{(1+IRR)^t} = 0"],
        terms: [{ term: "Interner Zinssatz (IRR)", definition: "Kalkulationszinssatz, bei dem der Kapitalwert einer Investition genau null ist." }],
        examples: [
          "Eine Investition von 50.000€ liefert nach einem Jahr 60.000€. Der interne Zinssatz löst −50.000+60.000/(1+IRR)=0, also IRR=60.000/50.000−1=20% — übersteigt dieser Wert den Kalkulationszinssatz, ist die Investition vorteilhaft.",
        ],
      },
      {
        id: "4-2",
        heading: "4.2 Probleme des IRR-Kriteriums",
        body: [
          "Bei Zahlungsströmen mit mehrfachem Vorzeichenwechsel (z. B. eine Investition mit späterer zusätzlicher Auszahlung, etwa für Rückbau) kann die Kapitalwertfunktion mehrere Nullstellen besitzen, sodass mehrere (oder gar keine reelle) interne Zinssätze existieren — das IRR-Kriterium liefert dann kein eindeutiges Ergebnis mehr.",
          "Zusätzlich kann der IRR bei sich gegenseitig ausschließenden Alternativen unterschiedlicher Größenordnung zu Fehlentscheidungen führen: Eine kleine Investition mit hohem IRR, aber geringem absolutem Kapitalwert, kann nach dem IRR-Kriterium fälschlich einer größeren Investition mit niedrigerem IRR, aber höherem absolutem Kapitalwert, vorgezogen werden — in solchen Fällen ist der Kapitalwert das verlässlichere Kriterium.",
        ],
        terms: [{ term: "Mehrdeutigkeit des IRR", definition: "Möglichkeit mehrerer oder keiner reellen IRR-Lösungen bei Zahlungsströmen mit mehrfachem Vorzeichenwechsel." }],
        examples: [
          "Eine Investition A (Einsatz 10.000€, IRR=25%, NPV=2.000€) und eine Investition B (Einsatz 100.000€, IRR=15%, NPV=8.000€) schließen sich gegenseitig aus. Trotz niedrigerem IRR ist B nach dem Kapitalwertkriterium vorzuziehen, da sie mehr absoluten Wert schafft.",
        ],
      },
      {
        id: "4-3",
        heading: "4.3 Die Kapitalwertrate (Profitability Index)",
        body: [
          "Die Kapitalwertrate (Profitability Index, PI) setzt den Barwert der zukünftigen Zahlungsüberschüsse ins Verhältnis zur Anfangsinvestition: PI = (Barwert der Rückflüsse)/I₀. Sie ist besonders nützlich bei Kapitalrationierung (begrenztes Investitionsbudget), da sie den Wertzuwachs PRO EINGESETZTEM EURO angibt, statt nur den absoluten Wertzuwachs.",
          "Bei begrenztem Budget und mehreren unabhängigen (teilbaren) Investitionsprojekten maximiert die Auswahl nach absteigender Kapitalwertrate den Gesamtkapitalwert innerhalb des verfügbaren Budgets — anders als eine reine Sortierung nach absolutem Kapitalwert, die kleinere, aber effizientere Projekte fälschlich benachteiligen könnte.",
        ],
        formulas: ["PI = (Barwert der Rückflüsse) / I₀"],
        formulasLatex: ["PI = \\dfrac{\\text{Barwert der R\\\"uckfl\\\"usse}}{I_0}"],
        terms: [{ term: "Kapitalwertrate (Profitability Index)", definition: "Verhältnis von Barwert der Rückflüsse zur Anfangsinvestition; nützlich bei Kapitalrationierung." }],
        examples: [
          "Bei einem begrenzten Budget von 100.000€ und zwei teilbaren Projekten mit PI=1,3 bzw. PI=1,1 wird bevorzugt in das Projekt mit PI=1,3 investiert, da es pro eingesetztem Euro den höheren Wertzuwachs liefert.",
        ],
      },
    ],
  },
  // ==================== Kapitel 5 ====================
  {
    id: "bewertung-von-anleihen",
    number: 5,
    title: "Bewertung von Anleihen",
    free: false,
    intro:
      "Anleihen gehören zu den wichtigsten Finanzinstrumenten zur Fremdkapitalbeschaffung. Dieses Kapitel wendet die Barwertlogik der vorangegangenen Kapitel auf die Bewertung von Anleihen an.",
    sections: [
      {
        id: "5-1",
        heading: "5.1 Struktur einer klassischen Anleihe",
        body: [
          "Eine klassische (Kupon-)Anleihe verspricht dem Käufer regelmäßige Kuponzahlungen (meist jährlich, in Höhe des Nominalwerts multipliziert mit dem Kuponzinssatz) über die Laufzeit sowie die Rückzahlung des Nominalwerts am Ende der Laufzeit. Ihr fairer Preis ergibt sich als Barwert all dieser zukünftigen Zahlungen, diskontiert mit dem am Markt geforderten Zinssatz (der Rendite vergleichbarer Anleihen).",
          "Diese Bewertungslogik kombiniert direkt die Rentenbarwertformel (für die Kuponzahlungen) mit der einfachen Barwertformel (für die einmalige Nominalwertrückzahlung am Laufzeitende).",
        ],
        formulas: ["Kurs = Kupon · [1−(1+r)⁻ⁿ]/r + Nominalwert/(1+r)ⁿ"],
        formulasLatex: ["\\text{Kurs} = \\text{Kupon}\\cdot\\dfrac{1-(1+r)^{-n}}{r} + \\dfrac{\\text{Nominalwert}}{(1+r)^n}"],
        terms: [{ term: "Kuponanleihe", definition: "Anleihe mit regelmäßigen Zinszahlungen (Kupons) und Rückzahlung des Nominalwerts am Laufzeitende." }],
        examples: [
          "Eine Anleihe mit Nominalwert 1.000€, Kupon 40€ jährlich, Laufzeit 5 Jahre, bei Marktrendite r=5%: Kurs=40×[1−1,05⁻⁵]/0,05 + 1.000/1,05⁵ ≈ 173,18+783,53 ≈ 956,71€.",
        ],
      },
      {
        id: "5-2",
        heading: "5.2 Der Zusammenhang zwischen Kurs, Rendite und Kuponzinssatz",
        body: [
          "Entspricht die Marktrendite r genau dem Kuponzinssatz, wird die Anleihe zum Nominalwert (pari) gehandelt. Übersteigt r den Kuponzinssatz, sinkt der Anleihekurs unter den Nominalwert (unter pari, 'Diskontanleihe'); ist r kleiner als der Kuponzinssatz, steigt der Kurs über den Nominalwert (über pari, 'Prämienanleihe').",
          "Dieser inverse Zusammenhang zwischen Marktzins und Anleihekurs ist fundamental: Steigen die Marktzinsen (z. B. durch restriktivere Geldpolitik, siehe VWL 2), fallen die Kurse bereits emittierter Anleihen mit niedrigerem Kupon, da Investoren nun höhere Renditen am Markt erzielen können und die alte Anleihe entsprechend abgezinst wird.",
        ],
        table: {
          caption: "Kurs, Rendite und Kuponzinssatz",
          headers: ["Verhältnis", "Kursverhalten", "Bezeichnung"],
          rows: [
            ["Marktrendite r = Kuponzinssatz", "Kurs = Nominalwert", "pari"],
            ["Marktrendite r > Kuponzinssatz", "Kurs < Nominalwert", "unter pari (Diskontanleihe)"],
            ["Marktrendite r < Kuponzinssatz", "Kurs > Nominalwert", "über pari (Prämienanleihe)"],
          ],
        },
        terms: [{ term: "Pari-Kurs", definition: "Anleihekurs gleich dem Nominalwert; entsteht, wenn Marktrendite und Kuponzinssatz übereinstimmen." }],
        examples: [
          "Steigt die Marktrendite für vergleichbare Anleihen von 4% auf 6%, während eine bestehende Anleihe weiterhin nur 4% Kupon zahlt, fällt ihr Kurs unter den Nominalwert, da Investoren für die gleiche zukünftige Zahlung heute weniger zu zahlen bereit sind.",
        ],
      },
      {
        id: "5-3",
        heading: "5.3 Duration als Zinsrisikomaß",
        body: [
          "Die (Macaulay-)Duration misst die durchschnittliche, barwertgewichtete Kapitalbindungsdauer einer Anleihe und dient gleichzeitig als Näherungsmaß für die Kursempfindlichkeit gegenüber Zinsänderungen: Je höher die Duration, desto stärker reagiert der Kurs auf eine gegebene Zinsänderung.",
          "Näherungsweise gilt: prozentuale Kursänderung ≈ −Duration × Δr/(1+r). Anleihen mit längerer Laufzeit und niedrigerem Kupon besitzen tendenziell eine höhere Duration und damit ein höheres Zinsrisiko als kurzlaufende, hochverzinsliche Anleihen.",
        ],
        formulas: ["ΔKurs/Kurs ≈ −Duration · Δr/(1+r)"],
        formulasLatex: ["\\dfrac{\\Delta \\text{Kurs}}{\\text{Kurs}} \\approx -\\text{Duration}\\cdot\\dfrac{\\Delta r}{1+r}"],
        terms: [{ term: "Duration", definition: "Barwertgewichtete durchschnittliche Kapitalbindungsdauer einer Anleihe; Näherungsmaß für Zinsempfindlichkeit." }],
        examples: [
          "Eine Anleihe mit Duration 7 reagiert bei einem Zinsanstieg von 1 Prozentpunkt (Δr=0,01) mit einer Kursänderung von etwa −7×0,01/(1,05)≈−6,7% — ein deutlich stärkerer Kursverlust als bei einer kurzlaufenden Anleihe mit Duration 2.",
        ],
      },
      {
        id: "5-4",
        heading: "5.4 Zerobonds und Yield to Maturity",
        body: [
          "Ein Zerobond (Nullkuponanleihe) zahlt während der Laufzeit keinerlei Zinsen; der gesamte Ertrag des Käufers entsteht ausschließlich aus der Differenz zwischen dem (unter dem Nominalwert liegenden) Kaufpreis und der Rückzahlung des Nominalwerts am Laufzeitende. Der Preis eines Zerobonds ist daher einfach der Barwert der einmaligen Nominalwertrückzahlung: P = Nominalwert/(1+r)ⁿ.",
          "Die Yield to Maturity (YTM, Rendite bis zur Fälligkeit) ist derjenige Zinssatz r, der den beobachteten Marktpreis exakt mit dem Barwert aller zukünftigen Zahlungen der Anleihe gleichsetzt. Bei einem Zerobond lässt sich die YTM direkt nach r auflösen: r = (Nominalwert/Preis)^(1/n) − 1. Bei Kuponanleihen (siehe 5.1) existiert dagegen meist keine geschlossene Lösung, sodass die YTM iterativ oder näherungsweise bestimmt werden muss.",
        ],
        formulas: ["P = Nominalwert / (1+r)ⁿ", "r = (Nominalwert/P)^(1/n) − 1"],
        formulasLatex: ["P = \\dfrac{\\text{Nominalwert}}{(1+r)^{n}}", "r = \\left(\\dfrac{\\text{Nominalwert}}{P}\\right)^{1/n} - 1"],
        terms: [
          { term: "Zerobond (Nullkuponanleihe)", definition: "Anleihe ohne laufende Zinszahlungen; Ertrag entsteht allein aus der Differenz zwischen Kaufpreis und Nominalwertrückzahlung." },
          { term: "Yield to Maturity (YTM)", definition: "Zinssatz, der den Marktpreis einer Anleihe mit dem Barwert aller zukünftigen Zahlungen gleichsetzt." },
        ],
        examples: [
          "Ein dreijähriger Zerobond mit Nominalwert 2.000€ notiert bei 1.727,84€. Die YTM beträgt r=(2.000/1.727,84)^(1/3)−1≈5,0%. Umgekehrt: Bei r=5% ergibt sich der faire Preis als P=2.000/1,05³≈1.727,84€.",
        ],
      },
      {
        id: "5-5",
        heading: "5.5 Ratings als Bonitätsmaß",
        body: [
          "Ratingagenturen bewerten die Bonität (Ausfallwahrscheinlichkeit) von Anleiheemittenten anhand standardisierter Buchstaben-Skalen (z. B. von AAA für höchste Bonität bis D für Zahlungsausfall). Anleihen mit Rating BBB−/Baa3 oder besser gelten als 'Investment Grade', darunter als 'Non-Investment Grade' bzw. 'High Yield' (umgangssprachlich auch 'Ramschanleihen').",
          "Ein schlechteres Rating signalisiert eine höhere Ausfallwahrscheinlichkeit und verlangt daher — analog zum systematischen Risiko bei Aktien (siehe 7.3) — eine höhere Rendite als Kompensation: Die Differenz zwischen der Rendite einer Anleihe und der Rendite einer als risikofrei geltenden Staatsanleihe gleicher Laufzeit heißt Kreditrisikoprämie (Credit Spread) und steigt tendenziell mit sinkendem Rating.",
        ],
        terms: [
          { term: "Rating", definition: "Standardisierte Bonitätseinstufung eines Anleiheemittenten durch eine Ratingagentur." },
          { term: "Credit Spread (Kreditrisikoprämie)", definition: "Renditeaufschlag einer Anleihe gegenüber einer risikofreien Staatsanleihe gleicher Laufzeit; steigt mit sinkendem Rating." },
        ],
        examples: [
          "Eine Unternehmensanleihe mit Rating BB (Non-Investment Grade) muss Investoren typischerweise eine deutlich höhere Rendite bieten als eine AAA-geratete Staatsanleihe gleicher Laufzeit, um das höhere Ausfallrisiko zu kompensieren — der Credit Spread kann hier mehrere Prozentpunkte betragen.",
        ],
      },
    ],
  },
  // ==================== Kapitel 6 ====================
  {
    id: "eigenkapitalfinanzierung-aktien",
    number: 6,
    title: "Eigenkapitalfinanzierung: Aktien und Ausschüttungspolitik",
    free: false,
    intro:
      "Neben Fremdkapital (Anleihen) können Unternehmen sich über Eigenkapital finanzieren. Dieses Kapitel behandelt die Bewertung von Aktien und die grundlegenden Fragen der Ausschüttungspolitik.",
    sections: [
      {
        id: "6-1",
        heading: "6.1 Aktien als Residualanspruch",
        body: [
          "Anders als Fremdkapitalgeber (feste vertragliche Zins- und Tilgungsansprüche) haben Aktionäre einen Residualanspruch: Sie erhalten, was nach Bedienung aller vorrangigen Ansprüche (Löhne, Lieferanten, Fremdkapitalgeber, Steuern) übrig bleibt — sowohl im laufenden Geschäftsbetrieb (Dividenden) als auch im Insolvenzfall (Nachrangigkeit gegenüber Gläubigern).",
          "Dieser Residualanspruch erklärt das asymmetrische Risikoprofil von Aktien: Der maximale Verlust ist auf die Einlage begrenzt, der potenzielle Gewinn dagegen unbegrenzt — eine fundamentale Eigenschaft, die Aktien von den meisten Fremdkapitalinstrumenten unterscheidet.",
        ],
        terms: [{ term: "Residualanspruch", definition: "Anspruch der Aktionäre auf das, was nach Bedienung aller vorrangigen Ansprüche übrig bleibt." }],
        examples: [
          "Im Insolvenzfall eines Unternehmens werden zunächst Löhne, Lieferantenforderungen und Bankkredite bedient; Aktionäre erhalten nur dann eine Restzahlung, wenn nach all diesen vorrangigen Ansprüchen noch Vermögen übrig bleibt — häufig bleibt für sie nichts.",
        ],
      },
      {
        id: "6-4",
        heading: "6.2 Stamm- und Vorzugsaktien",
        body: [
          "Neben der grundlegenden Unterscheidung nach Aktiengattung existieren zwei Haupttypen: Stammaktien gewähren volles Stimmrecht in der Hauptversammlung, aber keinen bevorzugten Anspruch auf Dividenden. Vorzugsaktien verzichten meist auf das Stimmrecht, erhalten dafür aber einen vorrangigen (oft auch höheren, garantierten Mindest-) Dividendenanspruch gegenüber Stammaktionären.",
          "Wird die Vorzugsdividende in einem Jahr nicht vollständig gezahlt, sehen viele Ausgestaltungen ein kumulatives Nachzahlungsrecht vor: Der ausstehende Betrag wird in Folgejahren vorrangig vor jeder Ausschüttung an Stammaktionäre nachgeholt. Aus Unternehmenssicht erlauben Vorzugsaktien, zusätzliches Eigenkapital aufzunehmen, ohne die Stimmrechtsverhältnisse der bestehenden Stammaktionäre zu verwässern.",
        ],
        terms: [
          { term: "Stammaktie", definition: "Aktie mit vollem Stimmrecht, aber ohne vorrangigen Dividendenanspruch." },
          { term: "Vorzugsaktie", definition: "Aktie mit vorrangigem (oft höherem) Dividendenanspruch, meist ohne Stimmrecht." },
        ],
        examples: [
          "Zahlt ein Unternehmen in einem schwachen Jahr keine Vorzugsdividende von vertraglich 2€ je Aktie, muss es bei kumulativer Ausgestaltung im Folgejahr zunächst 4€ (die nachgeholte plus die reguläre Vorzugsdividende) an Vorzugsaktionäre auszahlen, bevor überhaupt eine Dividende an Stammaktionäre fließen darf.",
        ],
      },
      {
        id: "6-2",
        heading: "6.3 Das Dividendendiskontierungsmodell",
        body: [
          "Analog zur Anleihebewertung lässt sich der faire Aktienwert als Barwert aller zukünftig erwarteten Dividenden auffassen: P₀ = Σₜ Dₜ/(1+rₑ)ᵗ, wobei rₑ die von Investoren geforderte Eigenkapitalrendite ist. Für den Spezialfall konstant wachsender Dividenden reduziert sich dies auf das bereits behandelte Gordon-Growth-Modell (Kapitel 2.2): P₀ = D₁/(rₑ−g).",
          "Dieses Modell erklärt, warum Aktienkurse stark auf Änderungen der Wachstumserwartungen g oder der geforderten Rendite rₑ reagieren: Bereits kleine Änderungen dieser Parameter können (da sie im Nenner der Differenz rₑ−g stehen) zu großen prozentualen Kursänderungen führen.",
        ],
        formulas: ["P₀ = Σₜ Dₜ / (1+rₑ)ᵗ"],
        formulasLatex: ["P_0 = \\sum_t \\dfrac{D_t}{(1+r_e)^t}"],
        terms: [{ term: "Dividendendiskontierungsmodell", definition: "Bewertungsmodell, das den Aktienwert als Barwert aller zukünftig erwarteten Dividenden berechnet." }],
        examples: [
          "Sinkt die erwartete Wachstumsrate g von 3% auf 2% bei einer Aktie mit D₁=4€ und rₑ=7%, fällt der faire Wert von 4/(0,07−0,03)=100€ auf 4/(0,07−0,02)=80€ — ein Rückgang um 20% durch eine Änderung von nur einem Prozentpunkt.",
        ],
      },
      {
        id: "6-3",
        heading: "6.4 Ausschüttungspolitik: Dividenden versus Aktienrückkäufe",
        body: [
          "Unternehmen können überschüssige liquide Mittel an Aktionäre über Dividenden (regelmäßige Bargeldausschüttung an alle Aktionäre anteilig) oder Aktienrückkäufe (Rückkauf eigener Aktien am Markt, wodurch der Gewinn auf weniger verbleibende Aktien verteilt wird) zurückgeben. Unter idealisierten Annahmen (keine Steuern, keine Transaktionskosten, keine Informationsasymmetrien) sind nach dem Modigliani-Miller-Theorem beide Formen für den Aktionärswert äquivalent.",
          "In der Praxis unterscheiden sich beide Instrumente jedoch durch Flexibilität (Aktienrückkäufe lassen sich leichter reduzieren als etablierte Dividenden, ohne negative Signalwirkung auszulösen) und steuerliche Behandlung (je nach Land und Anlegertyp unterschiedlich vorteilhaft) — Gründe, warum Unternehmen in der Praxis eine bewusste Wahl zwischen beiden Instrumenten treffen.",
        ],
        terms: [
          { term: "Modigliani-Miller-Theorem (Ausschüttung)", definition: "Unter idealisierten Annahmen sind Dividenden und Aktienrückkäufe für den Aktionärswert äquivalent." },
          { term: "Aktienrückkauf", definition: "Rückkauf eigener Aktien durch das Unternehmen am Markt zur Kapitalrückgabe an Aktionäre." },
        ],
        examples: [
          "Ein Unternehmen mit unsicheren zukünftigen Gewinnen bevorzugt tendenziell Aktienrückkäufe gegenüber einer Dividendenerhöhung, da eine spätere Dividendenkürzung von Investoren oft als negatives Signal über die Unternehmenslage interpretiert wird, während ein reduzierter Rückkauf weniger negativ wahrgenommen wird.",
        ],
      },
      {
        id: "6-5",
        heading: "6.5 Kapitalerhöhung und das Bezugsrecht",
        body: [
          "Gibt ein Unternehmen im Rahmen einer Kapitalerhöhung neue Aktien zu einem Preis unterhalb des aktuellen Börsenkurses aus, würde dies den Wert der Anteile bestehender Aktionäre verwässern, wenn diese nicht mitzeichnen könnten. Das Bezugsrecht gibt bestehenden Aktionären daher das Vorkaufsrecht, im Verhältnis ihres bisherigen Anteils neue Aktien zum Bezugspreis zu erwerben — oder das Bezugsrecht selbst am Markt zu verkaufen, wenn sie nicht mitzeichnen möchten.",
          "Der rechnerische Mischkurs (theoretischer Kurs nach Bezugsrechtsabschlag) ergibt sich als mengengewichteter Durchschnitt aus altem Kurs und Bezugspreis: K_Misch = (a·K_alt + n·K_neu)/(a+n), wobei a die Anzahl alter und n die Anzahl neu ausgegebener Aktien ist. Der Wert des Bezugsrechts selbst entspricht der Differenz zwischen altem Kurs und Mischkurs.",
        ],
        formulas: ["K_Misch = (a·K_alt + n·K_neu) / (a+n)"],
        formulasLatex: ["K_{\\text{Misch}} = \\dfrac{a\\cdot K_{\\text{alt}} + n\\cdot K_{\\text{neu}}}{a+n}"],
        terms: [
          { term: "Bezugsrecht", definition: "Vorkaufsrecht bestehender Aktionäre, bei einer Kapitalerhöhung im Verhältnis ihres Anteils neue Aktien zu erwerben." },
          { term: "Mischkurs", definition: "Theoretischer Aktienkurs nach einer Kapitalerhöhung; mengengewichteter Durchschnitt aus altem Kurs und Bezugspreis." },
        ],
        examples: [
          "Ein Unternehmen mit 4 Millionen Aktien zu aktuell 50€ gibt im Verhältnis 4:1 (also 1 Million neue Aktien) zu einem Bezugspreis von 30€ aus. Der Mischkurs beträgt K_Misch=(4.000.000×50+1.000.000×30)/5.000.000=46€ — das Bezugsrecht selbst ist somit 50−46=4€ wert.",
        ],
      },
      {
        id: "6-6",
        heading: "6.6 Cum-Cum- und Cum-Ex-Geschäfte",
        body: [
          "Bei Cum-Cum-Geschäften verkauft ein ausländischer Investor (der auf Dividenden erhobene Quellensteuer nicht vollständig zurückfordern kann) seine Aktien kurz vor dem Dividendenstichtag an einen inländischen Investor (der die Steuer erstattet bekommt) und kauft sie danach zurück — die Steuer wird effektiv einmalig gezahlt, aber über die Transaktionskette hinweg teilweise erstattet, obwohl wirtschaftlich weiterhin derselbe Investor Eigentümer bleibt.",
          "Cum-Ex-Geschäfte gingen einen Schritt weiter: Durch gezielte Leerverkäufe rund um den Dividendenstichtag wurde dieselbe, nur einmal tatsächlich gezahlte Kapitalertragsteuer bei mehreren beteiligten Parteien gleichzeitig zur Erstattung angemeldet — die Steuer wurde also einmal gezahlt, aber mehrfach zurückerstattet. Cum-Ex-Geschäfte wurden in mehreren europäischen Ländern nachträglich als Steuerbetrug eingestuft und strafrechtlich verfolgt, während Cum-Cum-Gestaltungen zunächst in einer rechtlichen Grauzone verblieben, bevor sie gesetzlich eingeschränkt wurden.",
        ],
        terms: [
          { term: "Cum-Cum-Geschäft", definition: "Transaktion, bei der Aktien vor dem Dividendenstichtag vorübergehend an einen erstattungsberechtigten Investor übertragen werden, um Quellensteuer zurückzuerhalten." },
          { term: "Cum-Ex-Geschäft", definition: "Transaktion mit Leerverkäufen um den Dividendenstichtag, bei der dieselbe, nur einmal gezahlte Steuer mehrfach zur Erstattung angemeldet wird." },
        ],
        examples: [
          "Bei einem Aktienpaket mit 25 Millionen € tatsächlich einbehaltener Kapitalertragsteuer beanspruchten bei einem Cum-Ex-Modell mehrere beteiligte Parteien gleichzeitig die Erstattung dieser 25 Millionen € — der Fiskus zahlte dadurch ein Vielfaches der tatsächlich eingenommenen Steuer zurück.",
        ],
      },
    ],
  },
  // ==================== Kapitel 7 ====================
  {
    id: "portfoliotheorie-capm",
    number: 7,
    title: "Portfoliotheorie und CAPM",
    free: false,
    intro:
      "Wie sollten Anleger ihr Vermögen auf verschiedene riskante Anlagen verteilen, und wie hängt die geforderte Rendite einer Anlage von ihrem Risiko ab? Dieses Kapitel behandelt die moderne Portfoliotheorie und das daraus abgeleitete CAPM.",
    sections: [
      {
        id: "7-1",
        heading: "7.1 Erwartungswert und Varianz eines Portfolios",
        body: [
          "Die erwartete Rendite eines Portfolios aus zwei Anlagen mit Gewichten w₁, w₂ (w₁+w₂=1) ist einfach der gewichtete Durchschnitt: E(Rₚ) = w₁E(R₁)+w₂E(R₂). Die Portfoliovarianz hängt dagegen zusätzlich von der Kovarianz (bzw. Korrelation) zwischen beiden Anlagen ab: Var(Rₚ) = w₁²σ₁² + w₂²σ₂² + 2w₁w₂Cov(R₁,R₂).",
          "Diese Formel zeigt den Kern der Diversifikation: Ist die Korrelation zwischen den beiden Anlagen kleiner als 1, ist die Portfoliovarianz stets kleiner als der gewichtete Durchschnitt der Einzelvarianzen — man kann durch Kombination von Anlagen Risiko reduzieren, ohne erwartete Rendite zu opfern.",
        ],
        formulas: ["Var(Rₚ) = w₁²σ₁² + w₂²σ₂² + 2w₁w₂Cov(R₁,R₂)"],
        formulasLatex: ["Var(R_p) = w_1^2\\sigma_1^2 + w_2^2\\sigma_2^2 + 2w_1w_2\\,Cov(R_1,R_2)"],
        terms: [{ term: "Diversifikationseffekt", definition: "Reduktion des Portfoliorisikos durch Kombination unvollständig korrelierter Anlagen." }],
        examples: [
          "Zwei Anlagen mit je σ=20% und Korrelation ρ=0 (also Cov=0), zu gleichen Teilen kombiniert (w₁=w₂=0,5), ergeben eine Portfoliostandardabweichung von √(0,5²×0,2²+0,5²×0,2²)=√0,02≈14,1% — deutlich weniger als die 20% jeder Einzelanlage.",
        ],
      },
      {
        id: "7-2",
        heading: "7.2 Systematisches versus unsystematisches Risiko",
        body: [
          "Unsystematisches (unternehmensspezifisches) Risiko lässt sich durch Diversifikation über viele Anlagen praktisch vollständig wegdiversifizieren, da sich unternehmensspezifische Schocks im Portfolio im Mittel ausgleichen. Systematisches (Markt-)Risiko betrifft dagegen alle Anlagen gemeinsam (z. B. eine Rezession) und lässt sich durch Diversifikation NICHT reduzieren.",
          "Diese Unterscheidung ist zentral für die Bepreisung von Risiko am Kapitalmarkt: Da unsystematisches Risiko kostenlos wegdiversifizierbar ist, sollten (und werden nach der Kapitalmarkttheorie) Investoren dafür keine zusätzliche Risikoprämie verlangen — nur für systematisches Risiko wird eine Prämie gezahlt.",
        ],
        terms: [
          { term: "Unsystematisches Risiko", definition: "Unternehmensspezifisches Risiko, das durch Diversifikation eliminierbar ist." },
          { term: "Systematisches Risiko", definition: "Marktweites Risiko, das durch Diversifikation nicht reduzierbar ist." },
        ],
        examples: [
          "Ein Streikrisiko bei einem einzelnen Unternehmen ist unsystematisches Risiko (wegdiversifizierbar durch Halten vieler unterschiedlicher Aktien); eine globale Rezession, die praktisch alle Unternehmen gleichzeitig trifft, ist systematisches Risiko.",
        ],
      },
      {
        id: "7-3",
        heading: "7.3 Das Capital Asset Pricing Model (CAPM)",
        body: [
          "Das CAPM postuliert, dass die von Investoren geforderte erwartete Rendite einer Anlage linear vom systematischen Risiko abhängt, gemessen durch den Beta-Faktor β (Kovarianz der Anlagerendite mit der Marktrendite, normiert auf die Marktvarianz): E(Rᵢ) = R_f + βᵢ·(E(R_m)−R_f), wobei R_f der risikofreie Zinssatz und E(R_m) die erwartete Marktrendite ist.",
          "Der Beta-Faktor misst, wie stark eine Anlage auf Marktbewegungen reagiert: β=1 bedeutet durchschnittliche Marktsensitivität, β>1 überdurchschnittliche (die Anlage schwankt stärker als der Markt), β<1 unterdurchschnittliche Sensitivität. Das CAPM ist die Standardmethode zur Bestimmung des Kalkulationszinssatzes rₑ in der Unternehmensbewertung (siehe Kapitel 6.3).",
        ],
        formulas: ["E(Rᵢ) = R_f + βᵢ · (E(R_m) − R_f)"],
        formulasLatex: ["E(R_i) = R_f + \\beta_i\\cdot(E(R_m)-R_f)"],
        terms: [{ term: "Beta-Faktor (β)", definition: "Maß für die systematische Risikosensitivität einer Anlage relativ zum Gesamtmarkt." }],
        examples: [
          "Bei R_f=2%, erwarteter Marktrendite 9% und β=1,2 beträgt die vom CAPM geforderte Rendite E(Rᵢ)=2%+1,2×(9%−2%)=2%+8,4%=10,4% — deutlich mehr als die Marktrendite, da die Anlage überdurchschnittlich risikobehaftet ist.",
        ],
      },
    ],
  },
  // ==================== Kapitel 8 ====================
  {
    id: "grundsaetze-rechnungslegung",
    number: 8,
    title: "Grundsätze der Rechnungslegung",
    free: false,
    intro:
      "Bevor Geschäftsvorfälle konkret verbucht werden, braucht es ein Set allgemein anerkannter Grundsätze, die festlegen, WANN und WIE Erträge und Aufwendungen zu erfassen sind. Dieses Kapitel führt die wichtigsten dieser Grundsätze ein, auf denen das im folgenden Kapitel behandelte Buchungssystem aufbaut.",
    sections: [
      {
        id: "gr-1",
        heading: "8.1 Das Realisationsprinzip",
        body: [
          "Das Realisationsprinzip legt fest, WANN ein Ertrag erfasst werden darf: nicht bereits bei Auftragseingang oder Produktionsbeginn, sondern erst, wenn die Leistung wirtschaftlich erbracht (realisiert) ist — typischerweise mit Lieferung bzw. Erbringung der Leistung, unabhängig davon, wann die Zahlung tatsächlich fließt.",
          "Diese zeitliche Trennung zwischen Realisierung und Zahlung ist der Grund, warum in der doppelten Buchführung Forderungen entstehen: Wird eine Ware auf Ziel (also gegen späteres Zahlungsversprechen) verkauft, ist der Ertrag bereits mit der Lieferung realisiert und muss sofort erfasst werden, auch wenn das Geld erst später eingeht.",
        ],
        terms: [{ term: "Realisationsprinzip", definition: "Grundsatz, wonach ein Ertrag erst mit wirtschaftlicher Erbringung der Leistung (nicht erst bei Zahlungseingang) erfasst werden darf." }],
        examples: [
          "Ein Möbelhersteller liefert im Dezember eine Sonderanfertigung im Wert von 8.000€ auf Rechnung; die Zahlung geht erst im Februar des Folgejahres ein. Nach dem Realisationsprinzip muss der Ertrag von 8.000€ bereits im Dezember (Zeitpunkt der Lieferung) erfasst werden, nicht erst im Februar bei Zahlungseingang.",
        ],
      },
      {
        id: "gr-2",
        heading: "8.2 Das Matching Principle",
        body: [
          "Das Matching Principle (Grundsatz der sachlichen Abgrenzung) verlangt, dass Aufwendungen in derselben Periode erfasst werden wie die Erträge, zu deren Erzielung sie beigetragen haben — unabhängig davon, wann die zugehörige Zahlung tatsächlich erfolgt. Kosten werden also den durch sie verursachten Erlösen zeitlich zugeordnet, nicht dem Zeitpunkt ihrer Bezahlung.",
          "Dieses Prinzip erklärt, warum Anschaffungskosten langlebiger Wirtschaftsgüter nicht sofort vollständig als Aufwand erfasst werden, sondern über die Abschreibung (siehe Kapitel 11.1) auf die Perioden verteilt werden, in denen das Wirtschaftsgut zur Erzielung von Erträgen beiträgt.",
        ],
        terms: [{ term: "Matching Principle", definition: "Grundsatz, wonach Aufwendungen in derselben Periode wie die durch sie verursachten Erträge zu erfassen sind." }],
        examples: [
          "Kauft ein Unternehmen im Januar Rohmaterial für 15.000€, das erst im März zu fertigen Produkten verarbeitet und verkauft wird, wird der Materialaufwand von 15.000€ nach dem Matching Principle erst im März erfasst — zeitgleich mit dem zugehörigen Verkaufserlös, nicht bereits im Januar bei Materialkauf.",
        ],
      },
      {
        id: "gr-3",
        heading: "8.3 Das Imparitätsprinzip",
        body: [
          "Das Imparitätsprinzip (die konkrete Ausprägung des allgemeineren Vorsichtsprinzips) behandelt erwartete Gewinne und erwartete Verluste bewusst UNGLEICH ('imparitätisch'): Unrealisierte Verluste (z. B. ein Wertpapier- oder Warenbestand, dessen Marktwert unter den Buchwert gefallen ist) müssen sofort erfolgswirksam erfasst werden, auch wenn noch kein tatsächlicher Verkauf stattgefunden hat. Unrealisierte Gewinne (Marktwert über Buchwert) dürfen dagegen NICHT erfasst werden, solange sie nicht realisiert (verkauft) sind.",
          "Diese bewusste Asymmetrie schützt Bilanzadressaten (Gläubiger, Investoren) vor einer zu optimistischen Darstellung der Vermögenslage: Ein Unternehmen darf sich nicht dadurch 'reicher rechnen', dass es unrealisierte Wertsteigerungen bereits als Gewinn ausweist, muss aber unrealisierte Wertminderungen sofort offenlegen.",
        ],
        formulas: ["Bilanzieller Wertansatz = min(Buchwert, Marktwert)"],
        formulasLatex: ["\\text{Wertansatz} = \\min(\\text{Buchwert}, \\text{Marktwert})"],
        terms: [{ term: "Imparitätsprinzip", definition: "Ungleiche (asymmetrische) Behandlung von erwarteten Gewinnen (nicht erfasst) und erwarteten Verlusten (sofort erfasst)." }],
        examples: [
          "Ein Unternehmen hält einen Aktienbestand mit Buchwert 50.000€. Sinkt der Marktwert zum Bilanzstichtag auf 42.000€, muss der Verlust von 8.000€ sofort erfasst werden (Wertansatz=min(50.000,42.000)=42.000€). Steigt der Marktwert stattdessen auf 58.000€, bleibt der Buchwert unverändert bei 50.000€ — der unrealisierte Gewinn wird nicht ausgewiesen.",
        ],
      },
      {
        id: "gr-4",
        heading: "8.4 Going-Concern-Prinzip und Konsistenzprinzip",
        body: [
          "Das Going-Concern-Prinzip (Fortführungsprinzip) verlangt, bei der Bewertung von Vermögenswerten grundsätzlich von der Fortführung der Unternehmenstätigkeit auszugehen, solange keine konkreten Anhaltspunkte für eine Einstellung oder Liquidation vorliegen. Diese Annahme rechtfertigt z. B. die Bewertung von Anlagevermögen zu Fortführungswerten (unter Berücksichtigung planmäßiger Abschreibung) statt zu meist deutlich niedrigeren Liquidationswerten.",
          "Das Konsistenzprinzip (Grundsatz der Bewertungsstetigkeit) verlangt, einmal gewählte Bewertungs- und Bilanzierungsmethoden (z. B. lineare statt degressive Abschreibung, siehe Kapitel 11.1) über die Zeit beizubehalten, statt sie von Periode zu Periode zu wechseln. Nur so bleiben aufeinanderfolgende Jahresabschlüsse überhaupt sinnvoll vergleichbar — ein Methodenwechsel muss offengelegt und begründet werden.",
        ],
        terms: [
          { term: "Going-Concern-Prinzip (Fortführungsprinzip)", definition: "Annahme der Fortführung der Unternehmenstätigkeit bei der Bewertung, solange keine gegenteiligen Anhaltspunkte vorliegen." },
          { term: "Konsistenzprinzip (Bewertungsstetigkeit)", definition: "Grundsatz, einmal gewählte Bewertungsmethoden über die Zeit beizubehalten." },
        ],
        examples: [
          "Ein Unternehmen, bei dem eine Insolvenz konkret droht, darf sein Anlagevermögen nicht mehr zu Fortführungswerten bilanzieren, sondern muss auf meist niedrigere Liquidationswerte umstellen — das Going-Concern-Prinzip greift hier nicht mehr.",
        ],
      },
    ],
  },
  // ==================== Kapitel 9 ====================
  {
    id: "gob-buchungssystem",
    number: 9,
    title: "Grundsätze ordnungsmäßiger Buchführung und das Buchungssystem",
    free: false,
    intro:
      "Mit den allgemeinen Grundsätzen aus Kapitel 8 als Fundament widmet sich dieses Kapitel der konkreten, systematischen Erfassung von Geschäftsvorfällen: dem Buchungssystem der doppelten Buchführung.",
    sections: [
      {
        id: "8-1",
        heading: "9.1 Die Grundsätze ordnungsmäßiger Buchführung (GoB)",
        body: [
          "Die GoB sind ein Bündel allgemein anerkannter Prinzipien, die eine korrekte, nachvollziehbare und vergleichbare Rechnungslegung sicherstellen sollen. Zentrale Grundsätze umfassen: Vollständigkeit (alle Geschäftsvorfälle müssen erfasst werden), Richtigkeit, zeitgerechte Erfassung, Nachvollziehbarkeit (Belegprinzip: jede Buchung muss durch einen Beleg nachweisbar sein) und das Vorsichtsprinzip (im Zweifel eher vorsichtig, d. h. Risiken und Verluste eher zu hoch als zu niedrig ansetzen) — dessen konkrete Ausprägung das bereits behandelte Imparitätsprinzip (Kapitel 8.3) ist.",
          "Diese Grundsätze bilden das übergeordnete Regelwerk, an dem sich konkrete bilanzielle Einzelentscheidungen (z. B. die in Kapitel 11 behandelten Bewertungswahlrechte) orientieren müssen — sie sind der normative Rahmen, innerhalb dessen sich Ermessensspielräume bewegen dürfen.",
        ],
        terms: [
          { term: "Vorsichtsprinzip", definition: "Grundsatz, wonach im Zweifel Risiken und Verluste eher zu hoch, Gewinne eher zu niedrig anzusetzen sind." },
          { term: "Belegprinzip", definition: "Grundsatz, wonach jede Buchung durch einen nachvollziehbaren Beleg gedeckt sein muss." },
        ],
        examples: [
          "Ist unsicher, ob eine Forderung tatsächlich noch einbringlich ist, verlangt das Vorsichtsprinzip, diese Unsicherheit eher durch eine Wertberichtigung (Verlustvorwegnahme) als durch optimistische Annahme der vollen Einbringlichkeit abzubilden.",
        ],
      },
      {
        id: "8-2",
        heading: "9.2 Bilanz und Grundgleichung",
        body: [
          "Die Bilanz stellt zu einem Stichtag das Vermögen (Aktiva: was das Unternehmen besitzt, z. B. Anlagevermögen, Umlaufvermögen) den Finanzierungsquellen (Passiva: woher die Mittel stammen, Eigenkapital und Fremdkapital) gegenüber. Die Bilanzgleichung Aktiva = Passiva (bzw. Vermögen = Eigenkapital + Fremdkapital) muss zu jedem Zeitpunkt exakt erfüllt sein.",
          "Diese Grundgleichung ist keine Zufälligkeit, sondern eine buchhalterische Notwendigkeit: Jeder Geschäftsvorfall wird als Doppelbuchung (mindestens ein Konto im Soll, mindestens eines im Haben, mit gleichem Gesamtbetrag) erfasst, wodurch die Bilanzgleichung nach jeder einzelnen Buchung automatisch erhalten bleibt.",
        ],
        formulas: ["Aktiva = Eigenkapital + Fremdkapital"],
        formulasLatex: ["\\text{Aktiva} = \\text{Eigenkapital} + \\text{Fremdkapital}"],
        terms: [{ term: "Bilanzgleichung", definition: "Aktiva = Eigenkapital + Fremdkapital; muss zu jedem Zeitpunkt erfüllt sein." }],
        examples: [
          "Kauft ein Unternehmen eine Maschine für 20.000€ auf Kredit, erhöhen sich sowohl das Anlagevermögen (Aktiva) als auch die Verbindlichkeiten (Fremdkapital, Passiva) um jeweils 20.000€ — die Bilanzgleichung bleibt gewahrt.",
        ],
      },
      {
        id: "8-3",
        heading: "9.3 Das Buchungssystem: Soll und Haben",
        body: [
          "Jedes Konto in der doppelten Buchführung hat zwei Seiten: Soll (links) und Haben (rechts). Bei Bestandskonten (Bilanzkonten) werden Zugänge auf Aktivkonten im Soll, Zugänge auf Passivkonten im Haben gebucht (und Abgänge jeweils umgekehrt); bei Erfolgskonten werden Aufwendungen im Soll, Erträge im Haben erfasst.",
          "Da jede Buchung die Bilanzgleichung (9.2) unverändert lassen muss, lässt sich jeder Geschäftsvorfall einer von vier grundlegenden Wirkungskategorien zuordnen: Beim Aktivtausch verschieben sich nur Positionen innerhalb der Aktivseite (Gesamtvermögen unverändert). Beim Passivtausch verschieben sich nur Positionen innerhalb der Passivseite. Bei einer Bilanzverlängerung wächst sowohl eine Aktiv- als auch eine Passivposition um denselben Betrag (Bilanzsumme steigt). Bei einer Bilanzverkürzung sinken eine Aktiv- und eine Passivposition um denselben Betrag (Bilanzsumme sinkt).",
          "Ein vereinfachtes, praktisches Hilfsmittel zur systematischen Erfassung mehrerer verbundener Geschäftsvorfälle über eine Periode ist der Worksheet Approach: eine tabellarische Übersicht, in der Anfangsbestände, alle Buchungen und Endbestände für jedes betroffene Konto nebeneinander dargestellt werden, bevor daraus die formale Bilanz und Erfolgsrechnung abgeleitet werden.",
        ],
        table: {
          caption: "Die vier Wirkungskategorien einer Buchung",
          headers: ["Kategorie", "Wirkung", "Bilanzsumme"],
          rows: [
            ["Aktivtausch", "eine Aktivposition ↑, eine andere Aktivposition ↓", "unverändert"],
            ["Passivtausch", "eine Passivposition ↑, eine andere Passivposition ↓", "unverändert"],
            ["Bilanzverlängerung", "eine Aktiv- UND eine Passivposition ↑", "steigt"],
            ["Bilanzverkürzung", "eine Aktiv- UND eine Passivposition ↓", "sinkt"],
          ],
        },
        terms: [
          { term: "Soll und Haben", definition: "Die zwei Seiten jedes Kontos in der doppelten Buchführung." },
          { term: "Worksheet Approach", definition: "Tabellarisches Hilfsmittel zur systematischen Erfassung mehrerer Geschäftsvorfälle vor Ableitung von Bilanz und Erfolgsrechnung." },
          { term: "Aktivtausch/Passivtausch/Bilanzverlängerung/Bilanzverkürzung", definition: "Die vier möglichen Wirkungskategorien einer Buchung auf die Bilanzstruktur." },
        ],
        examples: [
          "Beim Barverkauf einer Ware für 500€ (Einstandspreis 300€) wird die Kasse (Aktivkonto) mit 500€ im Soll erhöht, während der Warenbestand (Aktivkonto) mit 300€ im Haben verringert wird und gleichzeitig ein Ertrag von 200€ auf einem Erfolgskonto im Haben erfasst wird — ein Aktivtausch (300€) kombiniert mit einer Bilanzverlängerung (200€ zusätzlicher Gewinn erhöht auch das Eigenkapital).",
        ],
      },
      {
        id: "8-4",
        heading: "9.4 Rechnungsabgrenzungsposten (RAP)",
        body: [
          "Fällt eine Zahlung zeitlich vor der Periode an, der sie nach dem Matching Principle (Kapitel 8.2) wirtschaftlich zuzurechnen ist, entsteht ein Rechnungsabgrenzungsposten: Ein aktiver RAP entsteht, wenn ein Unternehmen bereits VOR dem Bilanzstichtag eine Ausgabe leistet, die erst eine spätere Periode betrifft (z. B. im Voraus gezahlte Miete für das Folgejahr) — er wird als Vermögensgegenstand auf der Aktivseite ausgewiesen und in der Folgeperiode aufwandswirksam aufgelöst.",
          "Ein passiver RAP entsteht spiegelbildlich, wenn eine Einnahme bereits VOR dem Bilanzstichtag eingeht, aber wirtschaftlich eine spätere Periode betrifft (z. B. im Voraus erhaltene Miete). Er wird als Verbindlichkeit auf der Passivseite ausgewiesen und erst in der Folgeperiode ertragswirksam aufgelöst. RAP sorgen so dafür, dass Zahlungszeitpunkt und wirtschaftliche Periodenzuordnung sauber auseinandergehalten werden.",
        ],
        terms: [
          { term: "Aktiver Rechnungsabgrenzungsposten", definition: "Vorab geleistete Ausgabe, die wirtschaftlich eine spätere Periode betrifft; wird als Vermögensgegenstand ausgewiesen." },
          { term: "Passiver Rechnungsabgrenzungsposten", definition: "Vorab erhaltene Einnahme, die wirtschaftlich eine spätere Periode betrifft; wird als Verbindlichkeit ausgewiesen." },
        ],
        examples: [
          "Zahlt ein Unternehmen im November 12.000€ Jahresmiete im Voraus für den Zeitraum November bis Oktober des Folgejahres, entfallen davon 2.000€ (November+Dezember) auf das laufende Jahr und 10.000€ auf das Folgejahr. Die 10.000€ werden zum Bilanzstichtag als aktiver RAP ausgewiesen und erst im Folgejahr als Mietaufwand erfasst.",
        ],
      },
    ],
  },
  // ==================== Kapitel 10 ====================
  {
    id: "grundlagen-klr",
    number: 10,
    title: "Grundlagen der Kosten- und Leistungsrechnung",
    free: false,
    intro:
      "Während das externe Rechnungswesen primär gegenüber Außenstehenden (Investoren, Finanzamt) Rechenschaft ablegt, dient die interne Kosten- und Leistungsrechnung der unternehmensinternen Steuerung. Dieses Kapitel führt ihre Grundbegriffe ein.",
    sections: [
      {
        id: "10-1",
        heading: "10.1 Abgrenzung von Aufwand/Ertrag und Kosten/Leistung",
        body: [
          "Nicht jeder Aufwand des externen Rechnungswesens ist gleichzeitig eine Kosten im Sinne der internen Kostenrechnung: Neutraler Aufwand (z. B. außerordentliche, betriebsfremde oder periodenfremde Aufwendungen) fließt nicht in die Kostenrechnung ein. Umgekehrt erfassen kalkulatorische Kosten (z. B. kalkulatorische Miete für ein selbst genutztes, dem Eigentümer gehörendes Gebäude) betriebswirtschaftlich relevanten Werteverzehr, der im externen Rechnungswesen nicht als Aufwand erscheint.",
          "Innerhalb der kalkulatorischen Kosten unterscheidet man zwei Fälle: Anderskosten setzen einen Wert an, der von dem entsprechenden Aufwand des externen Rechnungswesens abweicht (z. B. kalkulatorische Abschreibung auf Basis des aktuellen Wiederbeschaffungswerts statt der historischen Anschaffungskosten). Zusatzkosten haben dagegen im externen Rechnungswesen überhaupt kein Aufwands-Gegenstück (z. B. der kalkulatorische Unternehmerlohn für die Arbeitsleistung eines mitarbeitenden Einzelunternehmers, oder kalkulatorische Zinsen auf das eingesetzte Eigenkapital, siehe 10.4).",
          "Diese Abgrenzung ist notwendig, weil die Kostenrechnung ausschließlich den ordentlichen, betriebsbedingten Werteverzehr der aktuellen Periode abbilden soll — als Grundlage für interne Preis- und Steuerungsentscheidungen, unabhängig von den (teils bilanzpolitisch motivierten) Vorgaben des externen Rechnungswesens.",
        ],
        terms: [
          { term: "Kalkulatorische Kosten", definition: "Kosten, die betriebswirtschaftlich relevanten Werteverzehr erfassen, im externen Rechnungswesen aber nicht als Aufwand erscheinen." },
          { term: "Anderskosten", definition: "Kalkulatorische Kosten, die in anderer Höhe angesetzt werden als der entsprechende Aufwand im externen Rechnungswesen." },
          { term: "Zusatzkosten", definition: "Kalkulatorische Kosten ohne jedes Aufwands-Gegenstück im externen Rechnungswesen." },
        ],
        examples: [
          "Nutzt ein Unternehmer eine ihm selbst gehörende Immobilie für den Betrieb, entsteht im externen Rechnungswesen kein Mietaufwand — die Kostenrechnung setzt trotzdem eine kalkulatorische Miete als Zusatzkosten an, um die entgangene Vermietungsmöglichkeit (Opportunitätskosten) korrekt abzubilden.",
        ],
      },
      {
        id: "10-2",
        heading: "10.2 Kostenartenrechnung, Kostenstellenrechnung, Kostenträgerrechnung",
        body: [
          "Die Kosten- und Leistungsrechnung gliedert sich klassisch in drei aufeinander aufbauende Teilbereiche: Die Kostenartenrechnung erfasst, WELCHE Kosten angefallen sind (z. B. Materialkosten, Personalkosten, Abschreibungen). Die Kostenstellenrechnung verteilt diese Kosten auf WO sie angefallen sind (z. B. Fertigung, Verwaltung, Vertrieb). Die Kostenträgerrechnung schließlich ordnet die Kosten den einzelnen Produkten oder Aufträgen zu, für die sie angefallen sind (WOFÜR).",
          "Diese dreistufige Gliederung ermöglicht eine systematische Zurechnung: von der reinen Erfassung (Kostenarten) über die Verortung im Betrieb (Kostenstellen, siehe Kapitel 12.1) bis zur letztlich gewünschten Zurechnung auf einzelne Produkte (Kostenträger, siehe Kapitel 12.3).",
        ],
        table: {
          caption: "Die drei Stufen der Kostenrechnung",
          headers: ["Stufe", "Frage", "Beispiel"],
          rows: [
            ["Kostenartenrechnung", "WELCHE Kosten sind angefallen?", "Materialkosten, Personalkosten, Abschreibungen"],
            ["Kostenstellenrechnung", "WO sind sie angefallen?", "Fertigung, Verwaltung, Vertrieb"],
            ["Kostenträgerrechnung", "WOFÜR sind sie angefallen?", "einzelne Produkte oder Aufträge"],
          ],
        },
        terms: [
          { term: "Kostenartenrechnung", definition: "Erfasst, welche Kostenarten in einer Periode angefallen sind." },
          { term: "Kostenstellenrechnung", definition: "Verteilt Kosten auf die betrieblichen Bereiche (Kostenstellen), in denen sie angefallen sind." },
          { term: "Kostenträgerrechnung", definition: "Ordnet Kosten den einzelnen Produkten oder Aufträgen zu, für die sie angefallen sind." },
        ],
        examples: [
          "Die Stromkosten eines Unternehmens werden zunächst als Kostenart 'Energiekosten' erfasst, dann auf die Kostenstellen Fertigung, Verwaltung und Vertrieb verteilt, und schließlich (über einen geeigneten Verteilungsschlüssel) den einzelnen produzierten Produkten zugerechnet.",
        ],
      },
      {
        id: "10-3",
        heading: "10.3 Einzelkosten versus Gemeinkosten",
        body: [
          "Einzelkosten lassen sich einem Kostenträger direkt und ohne Schlüsselung zurechnen (z. B. das für ein bestimmtes Produkt verbrauchte Rohmaterial). Gemeinkosten fallen dagegen für mehrere Kostenträger gemeinsam an und müssen über einen Verteilungsschlüssel indirekt zugerechnet werden (z. B. die Miete einer Fertigungshalle, in der mehrere Produkte gefertigt werden).",
          "Der Anteil der Gemeinkosten an den Gesamtkosten ist in modernen, hochautomatisierten Produktionsprozessen tendenziell gestiegen (mehr Maschinenkosten, weniger direkt zurechenbare manuelle Arbeit), was die korrekte Verteilung der Gemeinkosten (Gegenstand des Betriebsabrechnungsbogens, Kapitel 12) zu einer zunehmend bedeutsamen Kalkulationsfrage macht.",
        ],
        terms: [
          { term: "Einzelkosten", definition: "Kosten, die einem Kostenträger direkt ohne Schlüsselung zurechenbar sind." },
          { term: "Gemeinkosten", definition: "Kosten, die für mehrere Kostenträger gemeinsam anfallen und über einen Schlüssel verteilt werden müssen." },
        ],
        examples: [
          "Das Holz für ein bestimmtes Möbelstück ist eine Einzelkosten (direkt zurechenbar); die Miete der gesamten Werkstatt, in der mehrere Möbelstücke gleichzeitig gefertigt werden, ist dagegen Gemeinkosten und muss verteilt werden.",
        ],
      },
      {
        id: "10-4",
        heading: "10.4 Kalkulatorische Zinsen: die Durchschnittsmethode",
        body: [
          "Kalkulatorische Zinsen erfassen die Opportunitätskosten des im Betrieb gebundenen Kapitals — auch für Eigenkapital, das im externen Rechnungswesen keine Zinsen 'kostet', aber anderweitig hätte angelegt werden können. Die Durchschnittsmethode ermittelt dafür das betriebsnotwendige Kapital vereinfacht als arithmetisches Mittel aus Anfangswert und Restwert des betriebsnotwendigen Vermögens.",
          "Kalkulatorische Zinsen ergeben sich dann als Produkt aus diesem durchschnittlich gebundenen Kapital und einem kalkulatorischen Zinssatz: Kalk. Zinsen = [(Anfangswert+Restwert)/2] × i. Diese Vereinfachung unterstellt implizit eine gleichmäßige (lineare) Kapitalbindung über die Nutzungsdauer.",
        ],
        formulas: ["Kalk. Zinsen = [(Anfangswert + Restwert) / 2] × i"],
        formulasLatex: ["\\text{Kalk. Zinsen} = \\dfrac{\\text{Anfangswert} + \\text{Restwert}}{2}\\times i"],
        terms: [{ term: "Durchschnittsmethode (kalkulatorische Zinsen)", definition: "Verfahren zur Ermittlung kalkulatorischer Zinsen über das arithmetische Mittel aus Anfangs- und Restwert des gebundenen Kapitals." }],
        examples: [
          "Ein Betrieb setzt Anlagevermögen mit Anschaffungswert 80.000€ und Restwert 8.000€ ein, kalkulatorischer Zinssatz 6%. Nach der Durchschnittsmethode beträgt das durchschnittlich gebundene Kapital (80.000+8.000)/2=44.000€, die kalkulatorischen Zinsen somit 44.000×0,06=2.640€ pro Jahr.",
        ],
      },
    ],
  },
  // ==================== Kapitel 11 ====================
  {
    id: "bewertungswahlrechte-rechnungswesen",
    number: 11,
    title: "Bewertungswahlrechte im externen Rechnungswesen",
    free: false,
    intro:
      "Nicht jede Bilanzposition lässt sich eindeutig bewerten — der Gesetzgeber räumt Unternehmen bei bestimmten Positionen bewusst Wahlrechte ein. Dieses Kapitel behandelt die wichtigsten Bewertungswahlrechte und ihre bilanzpolitischen Implikationen.",
    sections: [
      {
        id: "9-1",
        heading: "11.1 Abschreibungsmethoden",
        body: [
          "Die lineare Abschreibung verteilt die Anschaffungskosten (abzüglich eines eventuellen Restwerts) gleichmäßig über die Nutzungsdauer: jährliche Abschreibung = (Anschaffungskosten − Restwert)/Nutzungsdauer. Die degressive Abschreibung setzt dagegen einen konstanten Prozentsatz auf den jeweiligen (fallenden) Restbuchwert an, wodurch die Abschreibungsbeträge anfangs höher, später niedriger ausfallen.",
          "Die Wahl der Abschreibungsmethode beeinflusst den zeitlichen Verlauf des ausgewiesenen Gewinns (nicht aber die Gesamtsumme über die Nutzungsdauer): Degressive Abschreibung zeigt in frühen Jahren einen niedrigeren, in späteren Jahren einen höheren Gewinn als lineare Abschreibung bei identischem wirtschaftlichem Sachverhalt.",
        ],
        table: {
          caption: "Lineare vs. degressive Abschreibung",
          headers: ["", "Lineare Abschreibung", "Degressive Abschreibung"],
          rows: [
            ["Jährlicher Betrag", "konstant: (AK−Restwert)/Nutzungsdauer", "fallend: fester Prozentsatz vom Restbuchwert"],
            ["Verlauf des Gewinns", "gleichmäßig", "anfangs niedriger, später höher"],
            ["Gesamtsumme über Nutzungsdauer", "identisch", "identisch"],
          ],
        },
        formulas: ["Lineare Abschreibung = (Anschaffungskosten − Restwert) / Nutzungsdauer"],
        formulasLatex: ["\\text{Lineare Abschreibung} = \\dfrac{\\text{Anschaffungskosten} - \\text{Restwert}}{\\text{Nutzungsdauer}}"],
        terms: [
          { term: "Lineare Abschreibung", definition: "Gleichmäßige Verteilung der Anschaffungskosten über die Nutzungsdauer." },
          { term: "Degressive Abschreibung", definition: "Abschreibung mit konstantem Prozentsatz auf den fallenden Restbuchwert; anfangs höhere Beträge." },
        ],
        examples: [
          "Eine Spritzgussanlage kostet 84.000€, Nutzungsdauer 6 Jahre, kein Restwert. Linear werden jährlich 14.000€ abgeschrieben; bei degressiver Abschreibung mit 25% p.a. beträgt die Abschreibung im ersten Jahr 21.000€, im zweiten Jahr 25%×63.000=15.750€ usw.",
        ],
      },
      {
        id: "9-2",
        heading: "11.2 Vorratsbewertung: FIFO, LIFO und Durchschnittsmethode",
        body: [
          "Bei schwankenden Einstandspreisen müssen Unternehmen eine Annahme treffen, in welcher Reihenfolge Vorräte als verbraucht gelten: FIFO (First In, First Out) unterstellt, dass zuerst eingekaufte Bestände auch zuerst verbraucht werden — bei steigenden Preisen führt dies zu einem niedrigeren Wareneinsatz (höherer Gewinn) und einem höheren Bilanzansatz des Restbestands. LIFO (Last In, First Out) unterstellt das Gegenteil.",
          "Die Durchschnittsmethode berechnet stattdessen einen gewichteten Durchschnittspreis über alle vorhandenen Bestände und glättet dadurch Preisschwankungen zwischen den beiden Extrempositionen FIFO und LIFO. Die Wahl der Methode ist bilanzpolitisch relevant, da sie bei schwankenden Einstandspreisen den ausgewiesenen Gewinn und die Steuerlast direkt beeinflusst (in vielen Rechtsordnungen ist die Verwendung von LIFO steuerlich eingeschränkt oder nicht zulässig).",
        ],
        table: {
          caption: "FIFO, LIFO und Durchschnittsmethode bei steigenden Einstandspreisen",
          headers: ["Methode", "Wareneinsatz", "Bilanzansatz Restbestand", "Ausgewiesener Gewinn"],
          rows: [
            ["FIFO", "niedriger (alte, günstige Preise)", "höher (aktuelle, teure Preise)", "höher"],
            ["LIFO", "höher (aktuelle, teure Preise)", "niedriger (alte, günstige Preise)", "niedriger"],
            ["Durchschnittsmethode", "gewichteter Durchschnittspreis", "gewichteter Durchschnittspreis", "zwischen FIFO und LIFO"],
          ],
        },
        terms: [
          { term: "FIFO", definition: "Bewertungsmethode, die unterstellt, dass zuerst eingekaufte Vorräte zuerst verbraucht werden." },
          { term: "LIFO", definition: "Bewertungsmethode, die unterstellt, dass zuletzt eingekaufte Vorräte zuerst verbraucht werden." },
        ],
        examples: [
          "Bei steigenden Rohstoffpreisen weist FIFO einen niedrigeren Wareneinsatz (und damit höheren ausgewiesenen Gewinn) aus als LIFO, da FIFO die älteren, günstigeren Einkaufspreise dem Verbrauch zuordnet.",
        ],
      },
      {
        id: "9-3",
        heading: "11.3 Bilanzpolitik: Spielräume und ihre Grenzen",
        body: [
          "Bilanzpolitik bezeichnet die gezielte Nutzung gesetzlich zulässiger Wahlrechte und Ermessensspielräume, um den ausgewiesenen Jahresabschluss in eine gewünschte Richtung zu beeinflussen (z. B. Gewinnglättung, Steueroptimierung, positive Außendarstellung gegenüber Investoren). Solche Spielräume sind rechtlich zulässig, solange sie innerhalb der gesetzlichen Grenzen und der GoB (Kapitel 9.1) bleiben.",
          "Externe Bilanzanalyst:innen berücksichtigen bei der Interpretation von Kennzahlen deshalb stets, dass Unterschiede zwischen Unternehmen teilweise auf unterschiedliche Bilanzierungswahlrechte statt auf tatsächlich unterschiedliche wirtschaftliche Lage zurückgehen können — ein Grund, warum Kennzahlenvergleiche zwischen Unternehmen stets kritisch auf die zugrundeliegenden Bilanzierungsmethoden geprüft werden sollten.",
        ],
        terms: [{ term: "Bilanzpolitik", definition: "Gezielte Nutzung gesetzlicher Wahlrechte zur Beeinflussung des ausgewiesenen Jahresabschlusses." }],
        examples: [
          "Zwei ansonsten wirtschaftlich identische Unternehmen können unterschiedliche ausgewiesene Gewinne zeigen, wenn eines linear und das andere degressiv abschreibt — ein reiner Bilanzierungseffekt, kein tatsächlicher wirtschaftlicher Unterschied.",
        ],
      },
      {
        id: "9-4",
        heading: "11.4 Außerplanmäßige Abschreibung und Rückstellungen",
        body: [
          "Sinkt der Wert eines Vermögensgegenstands dauerhaft unter seinen planmäßig fortgeführten Buchwert (z. B. durch technologische Überholung, Beschädigung oder gesunkene Marktpreise), verlangt das Imparitätsprinzip (Kapitel 8.3) eine außerplanmäßige Abschreibung auf den niedrigeren beizulegenden Wert — zusätzlich zur regulären planmäßigen Abschreibung. Anders als die planmäßige Abschreibung ist sie nicht im Voraus planbar, sondern reagiert auf ein konkretes, im Bilanzierungszeitpunkt erkennbares Wertminderungsereignis.",
          "Rückstellungen erfassen dagegen ungewisse Verbindlichkeiten: Verpflichtungen, die dem Grunde und/oder der Höhe nach noch nicht sicher feststehen, deren Eintritt aber wahrscheinlich ist (z. B. drohende Prozesskosten, Garantieverpflichtungen). Sie werden erfolgswirksam gebildet, sobald die Verpflichtung hinreichend wahrscheinlich und schätzbar ist — ebenfalls eine Konsequenz des Vorsichts-/Imparitätsprinzips: ungewisse künftige Belastungen werden vorweggenommen, ungewisse künftige Vorteile dagegen nicht.",
        ],
        terms: [
          { term: "Außerplanmäßige Abschreibung", definition: "Zusätzliche Abschreibung auf den niedrigeren beizulegenden Wert bei dauerhafter Wertminderung." },
          { term: "Rückstellung", definition: "Bilanzposten für ungewisse, aber wahrscheinliche und schätzbare künftige Verpflichtungen." },
        ],
        examples: [
          "Eine Spezialmaschine mit Restbuchwert 60.000€ wird durch eine neue Fertigungstechnologie technisch überholt; ihr beizulegender Wert sinkt auf geschätzte 25.000€. Zusätzlich zur planmäßigen Abschreibung muss eine außerplanmäßige Abschreibung von 35.000€ erfasst werden, um den Buchwert auf 25.000€ zu senken.",
        ],
      },
      {
        id: "9-5",
        heading: "11.5 Voll- versus Teilkostenrechnung (AC vs. VC) bei der Bestandsbewertung",
        body: [
          "Bei der Bewertung selbst erstellter Vorräte (fertige und unfertige Erzeugnisse) stellt sich die Frage, welche Kostenbestandteile in die Herstellungskosten einbezogen werden. Die Vollkostenrechnung (Absorption Costing, AC) rechnet neben den variablen auch anteilige fixe Fertigungsgemeinkosten in die Herstellungskosten ein — der Bestand 'absorbiert' damit auch einen Teil der Fixkosten. Die Teilkostenrechnung (Variable Costing, VC) berücksichtigt dagegen nur die variablen Herstellungskosten; fixe Gemeinkosten werden sofort in voller Höhe als Periodenaufwand erfasst, unabhängig von der produzierten Menge.",
          "Der Unterschied wirkt sich unmittelbar auf den ausgewiesenen Periodengewinn aus, sobald sich der Lagerbestand verändert: Baut ein Unternehmen Lagerbestand auf (Produktion > Absatz), weist AC einen höheren Gewinn aus als VC, da ein Teil der Fixkosten im Bestand 'geparkt' statt sofort als Aufwand erfasst wird. Bei Bestandsabbau kehrt sich der Effekt um.",
        ],
        formulas: ["HK_AC = k_var + anteilige Fixkosten", "HK_VC = k_var"],
        formulasLatex: ["HK_{AC} = k_{var} + \\text{anteilige Fixkosten}", "HK_{VC} = k_{var}"],
        terms: [
          { term: "Vollkostenrechnung (Absorption Costing, AC)", definition: "Bestandsbewertung, die variable UND anteilige fixe Fertigungsgemeinkosten in die Herstellungskosten einbezieht." },
          { term: "Teilkostenrechnung (Variable Costing, VC)", definition: "Bestandsbewertung, die nur variable Herstellungskosten einbezieht; Fixkosten werden sofort als Periodenaufwand erfasst." },
        ],
        examples: [
          "Ein Unternehmen produziert 10.000 Stück, verkauft aber nur 8.000 (Lageraufbau um 2.000 Stück). Bei fixen Fertigungsgemeinkosten von 50.000€ (=5€/Stück bei 10.000 produzierten Einheiten) werden nach AC 2.000×5€=10.000€ dieser Fixkosten im Lagerbestand aktiviert statt als Aufwand erfasst — der ausgewiesene Periodengewinn liegt damit nach AC um 10.000€ höher als nach VC.",
        ],
      },
    ],
  },
  // ==================== Kapitel 12 ====================
  {
    id: "bab-kalkulationsverfahren",
    number: 12,
    title: "Der Betriebsabrechnungsbogen und Kalkulationsverfahren",
    free: false,
    intro:
      "Gemeinkosten müssen systematisch auf Kostenstellen verteilt und von dort auf einzelne Produkte umgelegt werden. Dieses Kapitel behandelt das zentrale Hilfsmittel dafür sowie die gebräuchlichsten Kalkulationsverfahren.",
    sections: [
      {
        id: "11-1",
        heading: "12.1 Der Betriebsabrechnungsbogen (BAB)",
        body: [
          "Der Betriebsabrechnungsbogen ist eine tabellarische Übersicht, in der Gemeinkosten zunächst nach Kostenarten (Zeilen) auf die Kostenstellen (Spalten) verteilt werden (primäre Kostenverteilung, meist mittels Verteilungsschlüsseln wie Fläche, Mitarbeiterzahl oder Maschinenstunden). In einem zweiten Schritt (sekundäre Kostenverteilung) werden die Kosten der Hilfskostenstellen (z. B. innerbetrieblicher Reparaturdienst) auf die Hauptkostenstellen (z. B. Fertigung) umgelegt, da Hilfskostenstellen selbst keine direkten Endprodukte herstellen.",
          "Am Ende des BAB werden für jede Hauptkostenstelle Gemeinkostenzuschlagssätze ermittelt: das Verhältnis der Gemeinkosten der Kostenstelle zu einer geeigneten Bezugsgröße (z. B. Fertigungslöhne oder Materialeinzelkosten), die anschließend in der Kalkulation zur Verteilung der Gemeinkosten auf einzelne Produkte genutzt werden.",
        ],
        formulas: ["Gemeinkostenzuschlagssatz = Gemeinkosten der Kostenstelle / Bezugsgröße × 100%"],
        formulasLatex: ["\\text{Zuschlagssatz} = \\dfrac{\\text{Gemeinkosten der Kostenstelle}}{\\text{Bezugsgr\\\"o\\ss e}}\\times 100\\%"],
        terms: [
          { term: "Primäre Kostenverteilung", definition: "Verteilung der Gemeinkosten nach Kostenarten auf die Kostenstellen im BAB." },
          { term: "Sekundäre Kostenverteilung", definition: "Umlage der Kosten von Hilfskostenstellen auf Hauptkostenstellen im BAB." },
        ],
        examples: [
          "Eine Fertigungskostenstelle mit Gemeinkosten von 240.000€ und Fertigungslöhnen von 400.000€ hat einen Fertigungsgemeinkostenzuschlagssatz von 240.000/400.000×100%=60% — pro Euro Fertigungslohn werden 60 Cent Gemeinkosten zugeschlagen.",
        ],
      },
      {
        id: "11-2",
        heading: "12.2 Verfahren der innerbetrieblichen Leistungsverrechnung",
        body: [
          "Erbringen Hilfskostenstellen Leistungen füreinander (z. B. liefert die betriebseigene Stromerzeugung Strom sowohl an die Fertigung als auch an die Werkstatt, und die Werkstatt repariert wiederum Maschinen der Stromerzeugung), reicht eine einfache einseitige Umlage nicht aus. Das Anbauverfahren ignoriert solche gegenseitigen Leistungsbeziehungen (vereinfachend, aber ungenau) und verteilt die Kosten jeder Hilfskostenstelle nur im Verhältnis ihrer Lieferungen an die Hauptkostenstellen. Das Stufenleiterverfahren verrechnet Hilfskostenstellen in einer festen Reihenfolge auf ALLE übrigen Stellen (inkl. anderer, noch nicht abgerechneter Hilfskostenstellen), wobei bereits verrechnete Stellen nicht rückwirkend belastet werden. Das Gleichungsverfahren löst das vollständige System gegenseitiger Verrechnungsbeziehungen exakt über ein lineares Gleichungssystem.",
          "Die Wahl des Verfahrens ist ein Genauigkeits-Aufwands-Kompromiss: Das Gleichungsverfahren liefert das theoretisch korrekteste Ergebnis, ist aber rechnerisch aufwendiger als die vereinfachenden Anbau- oder Stufenleiterverfahren — und Anbau- und Stufenleiterverfahren liefern bei mehreren Hauptkostenstellen im Allgemeinen unterschiedliche Ergebnisse.",
        ],
        formulas: ["Anbauverfahren: Anteil_j = Primärkosten × (Liefermenge an j / Σ Liefermenge an alle Hauptkostenstellen)"],
        formulasLatex: ["\\text{Anteil}_j = K_{\\text{prim\\\"ar}}\\times\\dfrac{\\text{Liefermenge an }j}{\\sum \\text{Liefermenge an Hauptkostenstellen}}"],
        terms: [
          { term: "Anbauverfahren", definition: "Verrechnungsverfahren, das Lieferungen an andere Hilfskostenstellen ignoriert und nur im Verhältnis der Lieferungen an Hauptkostenstellen verteilt." },
          { term: "Stufenleiterverfahren", definition: "Verrechnungsverfahren, das Hilfskostenstellen in fester Reihenfolge auf alle übrigen Stellen umlegt, ohne Rückverrechnung an bereits abgerechnete Stellen." },
          { term: "Gleichungsverfahren", definition: "Exaktes Verrechnungsverfahren, das gegenseitige Leistungsbeziehungen über ein lineares Gleichungssystem löst." },
        ],
        examples: [
          "Kantine (Primärkosten 20.000€) liefert im Verhältnis 100:300:100 an Werkstatt, Fertigung und Verwaltung; Werkstatt (Primärkosten 10.000€) liefert 50:100:50 an Kantine, Fertigung und Verwaltung. Das Anbauverfahren ignoriert die jeweilige Lieferung an die andere Hilfskostenstelle und verteilt Kantine im Verhältnis 300:100 sowie Werkstatt im Verhältnis 100:50 auf Fertigung/Verwaltung — Fertigung erhält dabei 15.000+6.667≈21.667€. Das Stufenleiterverfahren verrechnet zuerst die Kantine auf alle drei Empfänger (Werkstatt erhält zusätzlich 4.000€, die zusammen mit den eigenen 10.000€ der Werkstatt nur noch auf Fertigung/Verwaltung weiterverrechnet werden, da Kantine bereits abgerechnet ist) — Fertigung erhält hier 12.000+9.333≈21.333€, ein anderes Ergebnis als beim Anbauverfahren.",
        ],
      },
      {
        id: "11-3",
        heading: "12.3 Kalkulationsverfahren der Kostenträgerstückrechnung",
        body: [
          "Die Divisionskalkulation (Gesamtkosten geteilt durch produzierte Menge) eignet sich für Betriebe mit nur einem homogenen Produkt. Die Zuschlagskalkulation ist das Standardverfahren bei mehreren, unterschiedlichen Produkten: Einzelkosten werden direkt zugerechnet, Gemeinkosten werden über die im BAB ermittelten Zuschlagssätze auf eine geeignete Bezugsgröße (meist Fertigungslöhne oder Materialeinzelkosten) verteilt.",
          "Die Maschinenstundensatzkalkulation verfeinert die Zuschlagskalkulation für maschinenintensive Fertigung: Statt Fertigungsgemeinkosten pauschal über Fertigungslöhne zu verteilen, werden sie über die tatsächliche Maschinennutzungsdauer je Produkt verteilt — eine genauere Zurechnung, wenn Maschinenkosten (z. B. Abschreibung, Energie, Wartung) den Großteil der Fertigungsgemeinkosten ausmachen.",
        ],
        formulas: ["Selbstkosten = Einzelkosten + Gemeinkosten (über Zuschlagssätze)"],
        formulasLatex: ["\\text{Selbstkosten} = \\text{Einzelkosten} + \\text{Gemeinkosten (\\\"uber Zuschlagss\\\"atze)}"],
        terms: [
          { term: "Zuschlagskalkulation", definition: "Kalkulationsverfahren, das Gemeinkosten über Zuschlagssätze auf eine Bezugsgröße verteilt." },
          { term: "Maschinenstundensatzkalkulation", definition: "Verfeinerte Zuschlagskalkulation, die Fertigungsgemeinkosten über die tatsächliche Maschinennutzungsdauer verteilt." },
        ],
        examples: [
          "Ein Hersteller professioneller Nähmaschinen mit Materialeinzelkosten von 800€ pro Stück und einem Materialgemeinkostenzuschlagssatz von 15% sowie Fertigungslöhnen von 300€ und Fertigungsgemeinkostenzuschlagssatz von 60% ermittelt Selbstkosten von 800+800×0,15+300+300×0,60=800+120+300+180=1.400€ pro Stück.",
        ],
      },
      {
        id: "11-4",
        heading: "12.4 Äquivalenzziffernkalkulation",
        body: [
          "Die Äquivalenzziffernkalkulation eignet sich für Betriebe mit mehreren, aber technisch eng verwandten Produkten (Sortenfertigung), deren Herstellungsaufwand sich um einen konstanten Faktor unterscheidet (z. B. verschiedene Gewichtsklassen desselben Grundprodukts). Jedem Produkt wird eine Äquivalenzziffer zugeordnet, die seinen Kostenverursachungsanteil relativ zu einem gewählten Bezugsprodukt (Äquivalenzziffer=1) ausdrückt.",
          "Die Gesamtkosten werden durch die Summe der mit ihren Äquivalenzziffern gewichteten Mengen geteilt, um Kosten pro 'Recheneinheit' zu ermitteln; die Kosten je Produktsorte ergeben sich anschließend durch Multiplikation dieser Recheneinheitskosten mit der jeweiligen Äquivalenzziffer.",
        ],
        formulas: ["k_RE = Gesamtkosten / Σ(Äquivalenzziffer × Menge)", "k_i = k_RE × Äquivalenzziffer_i"],
        formulasLatex: ["k_{RE} = \\dfrac{K_{ges}}{\\sum_i \\text{AZ}_i \\times x_i}", "k_i = k_{RE}\\times \\text{AZ}_i"],
        terms: [{ term: "Äquivalenzziffernkalkulation", definition: "Kalkulationsverfahren für Sortenfertigung, das Produktsorten über Äquivalenzziffern relativ zu einem Bezugsprodukt gewichtet." }],
        examples: [
          "Eine Ziegelei produziert drei Sortengrößen mit Äquivalenzziffern 1,0 (Standard, 5.000 Stück), 1,5 (Groß, 2.000 Stück) und 0,6 (Klein, 3.000 Stück) bei Gesamtkosten von 62.000€. Die gewichtete Gesamtmenge beträgt 1,0×5.000+1,5×2.000+0,6×3.000=9.800 Recheneinheiten. Die Kosten je Recheneinheit betragen 62.000/9.800≈6,33€, also 6,33€ je Standardziegel, 1,5×6,33≈9,49€ je Großziegel und 0,6×6,33≈3,80€ je Kleinziegel.",
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
      "Die Vollkostenrechnung aus den vorangegangenen Kapiteln verteilt auch Fixkosten auf einzelne Produkte, was kurzfristige Entscheidungen verzerren kann. Dieses abschließende Kapitel behandelt die Teilkostenrechnung als Alternative für kurzfristige unternehmerische Entscheidungen.",
    sections: [
      {
        id: "12-1",
        heading: "13.1 Der Deckungsbeitrag",
        body: [
          "Der Deckungsbeitrag eines Produkts ist die Differenz zwischen Erlös und variablen (beschäftigungsabhängigen) Kosten: DB = p − k_var, wobei p der Verkaufspreis und k_var die variablen Stückkosten sind. Der Deckungsbeitrag gibt an, wie viel ein Produkt zur Deckung der Fixkosten und letztlich zum Gewinn beiträgt, NACHDEM seine eigenen variablen Kosten gedeckt sind.",
          "Anders als bei der Vollkostenrechnung (Kapitel 11.5, 12) werden Fixkosten in der Deckungsbeitragsrechnung bewusst NICHT auf einzelne Produkte verteilt, da sie unabhängig von der produzierten Menge anfallen und eine Verteilung willkürlich und für kurzfristige Entscheidungen irreführend wäre.",
        ],
        formulas: ["DB = p − k_var"],
        formulasLatex: ["DB = p - k_{var}"],
        terms: [{ term: "Deckungsbeitrag (DB)", definition: "Differenz zwischen Verkaufspreis und variablen Stückkosten eines Produkts." }],
        examples: [
          "Ein Produkt wird für 45€ verkauft und hat variable Stückkosten von 28€. Der Deckungsbeitrag beträgt DB=45−28=17€ pro Stück — dieser Betrag steht zur Deckung der Fixkosten zur Verfügung.",
        ],
      },
      {
        id: "12-2",
        heading: "13.2 Die Gewinnschwelle (Break-even-Analyse)",
        body: [
          "Die Gewinnschwelle (Break-even-Punkt) ist diejenige Absatzmenge, bei der der gesamte Deckungsbeitrag genau die Fixkosten deckt (Gewinn=0): x_BE = K_fix/DB. Unterhalb dieser Menge erwirtschaftet das Unternehmen einen Verlust, oberhalb einen Gewinn in Höhe von DB pro zusätzlich verkaufter Einheit.",
          "Diese Kennzahl ist praktisch bedeutsam für Preis- und Mengenentscheidungen: Sie zeigt unmittelbar, wie viele Einheiten mindestens abgesetzt werden müssen, damit sich ein Produkt überhaupt 'lohnt' — eine Information, die reine Vollkostenkalkulationen nicht direkt liefern.",
        ],
        formulas: ["x_BE = K_fix / DB"],
        formulasLatex: ["x_{BE} = \\dfrac{K_{fix}}{DB}"],
        terms: [{ term: "Gewinnschwelle (Break-even-Punkt)", definition: "Absatzmenge, bei der der gesamte Deckungsbeitrag genau die Fixkosten deckt." }],
        examples: [
          "Ein Hersteller professioneller Nähmaschinen (siehe Kapitel 12.3) mit Fixkosten von 340.000€ pro Jahr und einem Deckungsbeitrag von 17€ pro Stück muss x_BE=340.000/17≈20.000 Stück verkaufen, um die Gewinnschwelle zu erreichen.",
        ],
      },
      {
        id: "12-3",
        heading: "13.3 Kurzfristige Preisuntergrenze und Sortimentsentscheidungen",
        body: [
          "Kurzfristig (bei bereits vorhandenen, nicht mehr veränderbaren Fixkosten) kann es rational sein, ein Produkt auch zu einem Preis anzubieten, der nur die variablen Kosten deckt, aber keinen Beitrag zu den Fixkosten liefert (kurzfristige Preisuntergrenze = k_var) — solange keine bessere Verwendung der freien Kapazität existiert, ist ein positiver, wenn auch geringer Deckungsbeitrag besser als gar keine Auslastung.",
          "Bei Kapazitätsengpässen (z. B. begrenzte Maschinenstunden) sollte die Produktauswahl nicht nach dem absoluten Deckungsbeitrag pro Stück, sondern nach dem Deckungsbeitrag PRO ENGPASSEINHEIT (z. B. DB pro Maschinenstunde) priorisiert werden — dies maximiert den Gesamtdeckungsbeitrag bei gegebener knapper Ressource.",
        ],
        formulas: ["Relativer Deckungsbeitrag = DB / Engpasseinheiten pro Stück"],
        formulasLatex: ["\\text{Relativer DB} = \\dfrac{DB}{\\text{Engpasseinheiten pro St\\\"uck}}"],
        terms: [{ term: "Relativer Deckungsbeitrag", definition: "Deckungsbeitrag bezogen auf den Verbrauch einer knappen Engpassressource; Priorisierungskriterium bei Kapazitätsengpässen." }],
        examples: [
          "Produkt A hat DB=20€ und benötigt 2 Maschinenstunden (relativer DB=10€/Std.), Produkt B hat DB=15€ und benötigt nur 1 Maschinenstunde (relativer DB=15€/Std.). Bei knapper Maschinenkapazität sollte B priorisiert werden, obwohl A den höheren absoluten Deckungsbeitrag pro Stück hat.",
        ],
      },
    ],
  },
];
