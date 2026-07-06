import type { Question } from "@/lib/questions";

export const TOPICS = [
  "BIP & VGR",
  "Wachstum I",
  "Wachstum II",
  "Arbeitslosigkeit",
  "Geld & Inflation",
  "Konjunktur I",
  "Konjunktur II",
  "Offene VWL I",
  "Offene VWL II",
  "Gesamtwirtschaftliches Angebot",
] as const;

export const questions: Question[] = [
  // ---------- BIP & VGR (frei zugänglich) ----------
  {
    id: "bip-01",
    topic: "BIP & VGR",
    type: "mc",
    prompt:
      "Welche der folgenden Positionen zählt NICHT zu den Staatsausgaben G in der BIP-Verwendungsrechnung (Y = C + I + G + NX)?",
    options: [
      "Der Kauf eines neuen Dienstwagens durch eine Behörde",
      "Gehälter von Staatsbediensteten",
      "Renten- und Arbeitslosengeldzahlungen",
      "Der Bau einer neuen Autobahn",
    ],
    correctIndex: 2,
    explanation:
      "Transferzahlungen wie Renten oder Arbeitslosengeld stehen keiner neuen Produktion gegenüber und zählen daher nicht zu G — im Gegensatz zu Käufen von Gütern/Dienstleistungen durch den Staat.",
    source: "Kapitel 1, BIP-Verwendungsrechnung",
    free: true,
  },
  {
    id: "bip-02",
    topic: "BIP & VGR",
    type: "numeric",
    unit: "Geldeinheiten",
    prompt:
      "Eine Volkswirtschaft produziert nur Fahrräder und Brot. Jahr 2021: Fahrradpreis 350, Brotpreis 1,2, 90 Fahrräder, 4.000 Brote. Wie hoch ist das nominale BIP im Jahr 2021?",
    correctValue: 36300,
    explanation:
      "Nominales BIP 2021 = 350·90 + 1,2·4.000 = 31.500 + 4.800 = 36.300.",
    source: "Übungsaufgabe, BIP-Verwendungsrechnung",
    free: true,
  },
  {
    id: "bip-03",
    topic: "BIP & VGR",
    type: "numeric",
    unit: "Geldeinheiten",
    prompt:
      "Dieselbe Volkswirtschaft (nur Fahrräder und Brot). Jahr 2031: Fahrradpreis 550, Brotpreis 2,4, 130 Fahrräder, 3.400 Brote. Wie hoch ist das nominale BIP im Jahr 2031?",
    correctValue: 79660,
    explanation:
      "Nominales BIP 2031 = 550·130 + 2,4·3.400 = 71.500 + 8.160 = 79.660.",
    source: "Übungsaufgabe, BIP-Verwendungsrechnung",
    free: true,
  },
  {
    id: "bip-04",
    topic: "BIP & VGR",
    type: "numeric",
    unit: "Geldeinheiten",
    tolerance: 100,
    prompt:
      "Gleiche Volkswirtschaft: Jahr 2021 (Basisjahr): Fahrradpreis 350, Brotpreis 1,2. Jahr 2031-Mengen: 130 Fahrräder, 3.400 Brote. Wie hoch ist das reale BIP 2031, bewertet zu Preisen des Basisjahres 2021?",
    correctValue: 49580,
    explanation:
      "Reales BIP 2031 (Basis 2021) = 350·130 + 1,2·3.400 = 45.500 + 4.080 = 49.580 — die Mengen von 2031 werden zu den PREISEN von 2021 bewertet.",
    source: "Übungsaufgabe, BIP-Verwendungsrechnung",
    free: true,
  },
  {
    id: "bip-05",
    topic: "BIP & VGR",
    type: "numeric",
    unit: "Indexpunkte (2021=100)",
    tolerance: 2,
    prompt:
      "Nominales BIP 2031 = 79.660, reales BIP 2031 zum Basisjahr 2021 = 49.580. Wie hoch ist der BIP-Deflator für 2031 (Basisjahr 2021 = 100)?",
    correctValue: 160.7,
    explanation:
      "BIP-Deflator = (Nominales BIP / Reales BIP) × 100 = (79.660 / 49.580) × 100 ≈ 160,7.",
    source: "Übungsaufgabe, BIP-Deflator",
    free: true,
  },
  {
    id: "bip-06",
    topic: "BIP & VGR",
    type: "mc",
    prompt:
      "Worin unterscheidet sich ein Laspeyres-Preisindex vom BIP-Deflator?",
    options: [
      "Der Laspeyres-Index bewertet mit den FESTEN Mengen eines Basisjahres, der BIP-Deflator verwendet die AKTUELLEN Mengen der jeweiligen Periode",
      "Beide verwenden exakt dieselben Mengen und liefern daher immer identische Werte",
      "Der BIP-Deflator berücksichtigt nur importierte Güter",
      "Der Laspeyres-Index ist nur für Aktienkurse definiert",
    ],
    correctIndex: 0,
    explanation:
      "Der Laspeyres-Index hält die Mengen des Basisjahres fest (wie ein 'Warenkorb'), während der BIP-Deflator implizit die jeweils aktuellen Produktionsmengen gewichtet — deshalb weichen beide Indizes bei sich änderndem Konsum-/Produktionsmix voneinander ab.",
    source: "Übungsblatt 4, Aufgabe 2c",
    free: true,
  },

  // ---------- Wachstum I ----------
  {
    id: "wi-01",
    topic: "Wachstum I",
    type: "mc",
    prompt:
      "Im Solow-Modell mit Produktionsfunktion Y = Kα·[(1−u*)L]^(1−α) (u* = natürliche Arbeitslosenquote): Welchen Effekt hat eine Erhöhung von u* auf den Pro-Kopf-Output y = Y/L bei gegebenem Kapitalstock pro Kopf k?",
    options: [
      "y sinkt, da ein kleinerer Anteil der Erwerbspersonen tatsächlich zur Produktion beiträgt",
      "y steigt, da weniger Personen sich das Kapital teilen müssen",
      "y bleibt exakt unverändert",
      "Der Effekt ist ohne weitere Annahmen unbestimmt",
    ],
    correctIndex: 0,
    explanation:
      "y = kα·(1−u*)^(1−α): eine höhere natürliche Arbeitslosenquote u* senkt den effektiv eingesetzten Arbeitsanteil (1−u*) und damit bei gegebenem k den Pro-Kopf-Output.",
    source: "Übungsblatt 1, Aufgabe 1a",
    free: false,
  },
  {
    id: "wi-02",
    topic: "Wachstum I",
    type: "mc",
    prompt:
      "Was gilt per Definition im Steady State des einfachen Solow-Modells (ohne Bevölkerungswachstum, ohne technischen Fortschritt) für den Pro-Kopf-Kapitalstock k?",
    options: [
      "Δk = 0, d.h. Investition pro Kopf entspricht genau der Abschreibung pro Kopf: s·f(k*) = δ·k*",
      "k wächst dauerhaft mit der Sparquote s",
      "k sinkt monoton gegen null",
      "k entspricht immer dem Output Y",
    ],
    correctIndex: 0,
    explanation:
      "Der Steady State ist definiert als der Punkt, an dem sich Kapitalzufluss (Investition) und Kapitalabfluss (Abschreibung) exakt ausgleichen — der Kapitalstock pro Kopf bleibt von da an konstant.",
    source: "Übungsblatt 1, Aufgabe 1b",
    free: false,
  },
  {
    id: "wi-03",
    topic: "Wachstum I",
    type: "mc",
    prompt:
      "In einem Solow-Modell mit Staatssektor (G=T, finanziert über Kopfsteuern) kann die Kapitalakkumulationsgleichung Δk = s·f(k) − s·g − δ·k zwei Steady States k*_l (niedrig) und k*_h (hoch) besitzen. Welcher der beiden ist typischerweise instabil?",
    options: [
      "Der niedrigere Steady State k*_l — unterhalb liegt eine 'Armutsfalle', oberhalb bewegt sich die Wirtschaft zu k*_h",
      "Der höhere Steady State k*_h",
      "Beide Steady States sind stabil",
      "Beide Steady States sind instabil",
    ],
    correctIndex: 0,
    explanation:
      "Bei k knapp oberhalb k*_l ist Investition > Abschreibung, die Wirtschaft wächst weiter zu k*_h; bei k knapp unterhalb k*_l ist Investition < Abschreibung, die Wirtschaft schrumpft weiter Richtung null — k*_l ist daher instabil, k*_h stabil.",
    source: "Übungsblatt 1, Aufgabe 2b",
    free: false,
  },
  {
    id: "wi-04",
    topic: "Wachstum I",
    type: "mc",
    prompt:
      "In demselben Modell (Solow mit Staatsausgaben, finanziert über Kopfsteuern): Wie wirkt sich eine Erhöhung der Pro-Kopf-Staatsausgaben g auf den STABILEN Steady State k*_h und den zugehörigen Output y* aus?",
    options: [
      "Beide sinken — die Investitionskurve s·f(k)−s·g verschiebt sich nach unten, der stabile Schnittpunkt mit der Abschreibungsgeraden liegt bei niedrigerem k",
      "Beide steigen",
      "k*_h sinkt, y* steigt",
      "Keine Auswirkung, da g nur den Konsum betrifft",
    ],
    correctIndex: 0,
    explanation:
      "Höhere (steuerfinanzierte) Staatsausgaben verdrängen private Ersparnis/Investition: die Nettoinvestitionskurve verschiebt sich um s·g nach unten, wodurch der stabile Steady State bei einem niedrigeren Kapitalstock (und damit niedrigerem Output) liegt.",
    source: "Übungsblatt 1, Aufgabe 2c",
    free: false,
  },
  {
    id: "wi-05",
    topic: "Wachstum I",
    type: "mc",
    prompt: "Wie lautet die Bedingung der Goldenen Regel für den Kapitalstock pro Kopf k*gold?",
    options: [
      "Das Grenzprodukt des Kapitals entspricht der Abschreibungsrate: MPK = δ",
      "Das Grenzprodukt des Kapitals entspricht der Sparquote: MPK = s",
      "MPK = 0",
      "MPK entspricht der Bevölkerungswachstumsrate n",
    ],
    correctIndex: 0,
    explanation:
      "Am goldenen-Regel-Kapitalstock ist der Konsum pro Kopf im Steady State maximal; die Bedingung erster Ordnung dafür lautet MPK = δ.",
    source: "Kapitel 2, Goldene Regel",
    free: false,
  },

  // ---------- Wachstum II ----------
  {
    id: "wii-01",
    topic: "Wachstum II",
    type: "mc",
    prompt:
      "Bei einer Cobb-Douglas-Produktionsfunktion Y=(ZK)^α·L^(1−α) mit kapitalmehrendem technischen Fortschritt Z: lässt sich dies stets äquivalent als Y=K^α·(EL)^(1−α) mit rein arbeitsmehrendem technischen Fortschritt E schreiben?",
    options: [
      "Ja — bei Cobb-Douglas-Technologie sind kapital- und arbeitsmehrender technischer Fortschritt stets ineinander überführbar (E als Funktion von Z)",
      "Nein, das ist bei Cobb-Douglas grundsätzlich unmöglich",
      "Nur wenn α = 0,5 gilt",
      "Nur exakt im Steady State",
    ],
    correctIndex: 0,
    explanation:
      "F(ZK,L) = (ZK)^α L^(1−α) = K^α · Z^α L^(1−α) = K^α (EL)^(1−α) mit E = Z^{α/(1−α)} — Cobb-Douglas erlaubt diese Umschreibung allgemein.",
    source: "Übungsblatt 2, Aufgabe 1a",
    free: false,
  },
  {
    id: "wii-02",
    topic: "Wachstum II",
    type: "mc",
    prompt:
      "Im Steady State des Solow-Modells mit Bevölkerungswachstum n und arbeitsvermehrendem technischen Fortschritt g: wie verhält sich der Kapitalstock pro Effizienzeinheit k̂ = K/(EL)?",
    options: [
      "k̂ ist konstant (wächst mit Rate 0)",
      "k̂ wächst mit Rate g",
      "k̂ wächst mit Rate n",
      "k̂ wächst mit Rate n + g",
    ],
    correctIndex: 0,
    explanation:
      "Der Steady State ist per Definition genau dort definiert, wo k̂ konstant bleibt (Δk̂ = 0) — nur Größen OHNE Effizienzkorrektur (z.B. K/L oder Y) wachsen im Steady State weiter, mit Rate g bzw. n+g.",
    source: "Übungsblatt 2, Aufgabe 1b/c",
    free: false,
  },
  {
    id: "wii-03",
    topic: "Wachstum II",
    type: "mc",
    prompt:
      "Bei einer AK-Produktionsfunktion Y=AK (B=0, konstantes Grenzprodukt des Kapitals A, Bevölkerungswachstum n, kein technischer Fortschritt): unter welcher Bedingung wächst der Pro-Kopf-Kapitalstock k unbegrenzt?",
    options: [
      "Wenn s·A > δ + n gilt",
      "Wenn s·A < δ + n gilt",
      "Immer, unabhängig von den Parametern",
      "Nie, da abnehmende Grenzerträge des Kapitals vorliegen",
    ],
    correctIndex: 0,
    explanation:
      "Δk = s·A·k − (δ+n)·k = (sA − δ − n)·k. Da das Grenzprodukt A konstant ist (keine abnehmenden Grenzerträge wie bei Cobb-Douglas), wächst k mit konstanter Rate (sA−δ−n) unbegrenzt weiter, sofern diese Rate positiv ist.",
    source: "Übungsblatt 2, Aufgabe 2b",
    free: false,
  },
  {
    id: "wii-04",
    topic: "Wachstum II",
    type: "numeric",
    unit: "%",
    tolerance: 0.2,
    prompt:
      "Wachstumsbuchhaltung: Das BIP wächst um 5 %, der Kapitalstock um 9 %, die Arbeit um 3 %. Der Kapitalanteil am Einkommen beträgt α=0,25. Wie hoch ist die Wachstumsrate der totalen Faktorproduktivität (Solow-Residuum), gemäß ΔY/Y = ΔA/A + α·(ΔK/K) + (1−α)·(ΔL/L)?",
    correctValue: 0.5,
    explanation:
      "ΔA/A = ΔY/Y − α·ΔK/K − (1−α)·ΔL/L = 5 % − 0,25·9 % − 0,75·3 % = 5 − 2,25 − 2,25 = 0,5 %.",
    source: "Kapitel 3, Wachstumsbuchhaltung",
    free: false,
  },

  // ---------- Arbeitslosigkeit ----------
  {
    id: "al-01",
    topic: "Arbeitslosigkeit",
    type: "numeric",
    unit: "%",
    tolerance: 0.5,
    prompt:
      "Im Matching-Modell der natürlichen Arbeitslosenquote gilt (U/L)* = s/(s+f), wobei s die Job-Separation-Rate und f die Job-Finding-Rate ist. Bei s=0,06 und f=0,24: wie hoch ist die natürliche Arbeitslosenquote (in %)?",
    correctValue: 20,
    explanation: "(U/L)* = 0,06 / (0,06+0,24) = 0,06/0,30 = 0,20 = 20 %.",
    source: "Übungsblatt 3, Aufgabe 1",
    free: false,
  },
  {
    id: "al-02",
    topic: "Arbeitslosigkeit",
    type: "mc",
    prompt:
      "Ein Kündigungsschutzgesetz senkt die Job-Separation-Rate s, während die Job-Finding-Rate f unverändert bleibt. Wie verändert sich die natürliche Arbeitslosenquote (U/L)* = s/(s+f)?",
    options: ["Sie sinkt", "Sie steigt", "Sie bleibt exakt gleich", "Der Effekt ist unbestimmt"],
    correctIndex: 0,
    explanation:
      "(U/L)* ist streng monoton steigend in s (bei festem f) — ein Rückgang von s senkt daher die natürliche Arbeitslosenquote.",
    source: "Übungsblatt 3, Aufgabe 1b",
    free: false,
  },
  {
    id: "al-03",
    topic: "Arbeitslosigkeit",
    type: "mc",
    prompt:
      "Warum ist es plausibel, dass ein Kündigungsschutzgesetz nicht nur s (Job-Separation-Rate) senkt, sondern auch f (Job-Finding-Rate)?",
    options: [
      "Firmen stellen bei hohen Kündigungskosten zurückhaltender neu ein, weil eine Fehleinstellung schwerer rückgängig zu machen ist",
      "Kündigungsschutz hat keinerlei Effekt auf Einstellungsentscheidungen",
      "f steigt automatisch immer dann, wenn s sinkt",
      "Kündigungsschutz betrifft ausschließlich bereits Beschäftigte, niemals Neueinstellungen",
    ],
    correctIndex: 0,
    explanation:
      "Höhere Kündigungskosten erhöhen das Risiko einer Neueinstellung für Firmen, weshalb sie vorsichtiger und seltener einstellen — das senkt tendenziell auch f, was den positiven Effekt auf die natürliche Arbeitslosenquote teilweise oder ganz neutralisieren kann.",
    source: "Übungsblatt 3, Aufgabe 1c",
    free: false,
  },
  {
    id: "al-04",
    topic: "Arbeitslosigkeit",
    type: "mc",
    prompt:
      "Wie verändern sich empirisch in einer Rezession typischerweise die Job-Separation-Rate s und die Job-Finding-Rate f?",
    options: [
      "s steigt (mehr Entlassungen), f sinkt (schwerer, neue Stelle zu finden)",
      "s sinkt, f steigt",
      "Beide steigen gleichermaßen",
      "Beide bleiben konstant, nur die Erwerbsquote ändert sich",
    ],
    correctIndex: 0,
    explanation:
      "US-Daten (1948–2007) zeigen: in Rezessionen (graue Streifen) steigt die Arbeitslosenquote getrieben durch einen Anstieg von s und einen Rückgang von f.",
    source: "Übungsblatt 3, Aufgabe 1d",
    free: false,
  },
  {
    id: "al-05",
    topic: "Arbeitslosigkeit",
    type: "mc",
    prompt:
      "Im neoklassischen Arbeitsmarktmodell (Y=A·Kα·L^(1−α)) sinkt der Produktivitätsparameter A. Bei unelastischem (fixem) Arbeitsangebot und vollständig flexiblen Löhnen: was passiert im neuen Gleichgewicht mit Beschäftigung und Reallohn?",
    options: [
      "Beschäftigung bleibt unverändert (Angebot ist fix, Markt räumt sich), der Reallohn sinkt",
      "Beschäftigung sinkt, der Reallohn bleibt unverändert",
      "Beide sinken",
      "Beide steigen",
    ],
    correctIndex: 0,
    explanation:
      "Die Arbeitsnachfragekurve verschiebt sich durch die niedrigere Produktivität nach links; da das Angebot vertikal (unelastisch) ist, bleibt die Beschäftigung gleich, aber der markträumende Reallohn sinkt.",
    source: "Übungsblatt 3, Aufgabe 2b/c",
    free: false,
  },
  {
    id: "al-06",
    topic: "Arbeitslosigkeit",
    type: "mc",
    prompt:
      "Nach dem Produktivitätsrückgang (A0 → A1) führt die Regierung einen Mindestlohn ein, der unter A1 bindend ist, aber nicht unter A0. Welche Konsequenz hat das?",
    options: [
      "Es entsteht unfreiwillige Arbeitslosigkeit, da der Mindestlohn über dem neuen markträumenden Reallohn liegt",
      "Der Arbeitsmarkt bleibt weiterhin vollständig geräumt",
      "Die Beschäftigung steigt",
      "Der Reallohn sinkt unter den Mindestlohn",
    ],
    correctIndex: 0,
    explanation:
      "Ein unter A1 bindender Mindestlohn liegt über dem Reallohn, der den (durch die niedrigere Produktivität abgesenkten) Arbeitsmarkt räumen würde — es entsteht ein Angebotsüberschuss an Arbeit, also unfreiwillige Arbeitslosigkeit.",
    source: "Übungsblatt 3, Aufgabe 2d",
    free: false,
  },

  // ---------- Geld & Inflation ----------
  {
    id: "gi-01",
    topic: "Geld & Inflation",
    type: "numeric",
    unit: "%",
    tolerance: 0.5,
    prompt:
      "Laut Quantitätsgleichung M·V=P·Y wächst die Geldmenge M um 6 % pro Jahr, das reale BIP Y um 1,5 %, die Umlaufgeschwindigkeit V ist konstant. Wie hoch ist näherungsweise die Inflationsrate?",
    correctValue: 4.5,
    explanation: "π ≈ g_M − g_Y = 6 % − 1,5 % = 4,5 % (bei konstanter Umlaufgeschwindigkeit V).",
    source: "Kapitel 5, Quantitätstheorie",
    free: false,
  },
  {
    id: "gi-02",
    topic: "Geld & Inflation",
    type: "numeric",
    unit: "%",
    tolerance: 0.2,
    prompt:
      "Der Nominalzins beträgt 7 %, die erwartete Inflation 3 %. Wie hoch ist der Realzins gemäß der (näherungsweisen) Fisher-Gleichung i = r + π^e?",
    correctValue: 4,
    explanation: "r = i − π^e = 7 % − 3 % = 4 %.",
    source: "Kapitel 5, Fisher-Gleichung",
    free: false,
  },
  {
    id: "gi-03",
    topic: "Geld & Inflation",
    type: "mc",
    prompt: "Welche Aussage zur klassischen Dichotomie / Neutralität des Geldes ist korrekt?",
    options: [
      "Eine Erhöhung der Geldmenge verändert langfristig nur das Preisniveau, nicht reale Größen wie Output oder Beschäftigung",
      "Geldmengenänderungen beeinflussen auch langfristig das reale BIP dauerhaft",
      "Geld ist niemals neutral, auch nicht langfristig",
      "Die Umlaufgeschwindigkeit des Geldes ist per Definition immer null",
    ],
    correctIndex: 0,
    explanation:
      "Die klassische Dichotomie besagt, dass reale Variablen langfristig unabhängig von nominalen Variablen bestimmt werden — Geld ist langfristig neutral.",
    source: "Kapitel 5, Klassische Dichotomie",
    free: false,
  },
  {
    id: "gi-04",
    topic: "Geld & Inflation",
    type: "mc",
    prompt:
      "Die Geldnachfrage sei (M/P)^d=κY. Steigt das reale Einkommen Y bei fixem Geldangebot Ms — was muss eine Zentralbank mit Inflationsziel π=0 tun, damit P konstant bleibt?",
    options: [
      "Sie muss M proportional zum gestiegenen Y erhöhen, da sonst bei konstantem M das Preisniveau P sinken müsste, um den Geldmarkt zu räumen",
      "Sie muss M senken",
      "P steigt automatisch, unabhängig vom Verhalten der Zentralbank",
      "M und P bleiben in jedem Fall unverändert",
    ],
    correctIndex: 0,
    explanation:
      "Aus M/P=κY folgt P=M/(κY). Damit P bei steigendem Y konstant bleibt, muss M im gleichen Verhältnis mitwachsen.",
    source: "Übungsblatt 4, Aufgabe 1c",
    free: false,
  },
  {
    id: "gi-05",
    topic: "Geld & Inflation",
    type: "mc",
    prompt:
      "Welcher Begriff bezeichnet die Kosten, die durch häufigeres Anpassen von Preisschildern, Katalogen und Speisekarten bei Inflation entstehen?",
    options: ["Speisekartenkosten (menu costs)", "Schuhsohlenkosten (shoeleather costs)", "Fisher-Effekt", "Seigniorage"],
    correctIndex: 0,
    explanation:
      "Speisekartenkosten bezeichnen genau diese Anpassungskosten; Schuhsohlenkosten dagegen bezeichnen den Aufwand, Bargeldbestände wegen Inflation gering zu halten.",
    source: "Kapitel 5, Kosten der Inflation",
    free: false,
  },

  // ---------- Konjunktur I ----------
  {
    id: "ki-01",
    topic: "Konjunktur I",
    type: "numeric",
    unit: "Mrd. €",
    prompt:
      "Im keynesianischen Kreuz mit marginaler Konsumquote γ=0,8 erhöht der Staat die Ausgaben um 6 Mrd. €. Um wie viel steigt das Gleichgewichtseinkommen (ΔY = ΔG/(1−γ))?",
    correctValue: 30,
    explanation: "ΔY = ΔG/(1−γ) = 6/(1−0,8) = 6/0,2 = 30 Mrd. €.",
    source: "Übungsblatt 5, Aufgabe 1b",
    free: false,
  },
  {
    id: "ki-02",
    topic: "Konjunktur I",
    type: "numeric",
    unit: "Mrd. €",
    prompt:
      "Im selben Modell (γ=0,8) senkt der Staat stattdessen die Steuern um 6 Mrd. €. Um wie viel steigt das Gleichgewichtseinkommen (ΔY = γ/(1−γ)·|ΔT|)?",
    correctValue: 24,
    explanation: "ΔY = γ/(1−γ)·ΔT = 0,8/0,2·6 = 24 Mrd. € — kleiner als bei der Ausgabenerhöhung, da ein Teil der Steuersenkung gespart statt konsumiert wird.",
    source: "Übungsblatt 5, Aufgabe 1c",
    free: false,
  },
  {
    id: "ki-03",
    topic: "Konjunktur I",
    type: "mc",
    prompt:
      "Erhöht der Staat Ausgaben G und Steuern T um exakt denselben Betrag (ΔG=ΔT), wie verändert sich das Gleichgewichtseinkommen im keynesianischen Kreuz (Multiplikatoreffekte ΔG/(1−γ) und −γΔT/(1−γ) zusammen)?",
    options: [
      "Y steigt um genau ΔG — der 'ausgeglichene-Haushalt-Multiplikator' beträgt exakt 1",
      "Y bleibt vollständig unverändert",
      "Y sinkt",
      "Y steigt um mehr als ΔG",
    ],
    correctIndex: 0,
    explanation:
      "ΔY = ΔG/(1−γ) − γΔG/(1−γ) = ΔG·(1−γ)/(1−γ) = ΔG. Der Ausgabenmultiplikator (1/(1−γ)) ist immer um genau 1 größer als der (betragsmäßige) Steuermultiplikator (γ/(1−γ)), daher bleibt netto exakt ΔG übrig.",
    source: "Übungsblatt 5, Aufgabe 1d",
    free: false,
  },
  {
    id: "ki-04",
    topic: "Konjunktur I",
    type: "mc",
    prompt:
      "Wird ein fester Steuerbetrag T̄ durch ein einkommensabhängiges Steuersystem T=T̄+τY ersetzt (τ∈(0,1) = marginaler Steuersatz), wie verändert sich der Staatsausgabenmultiplikator im keynesianischen Kreuz?",
    options: [
      "Er wird kleiner, da ein Teil des zusätzlichen Einkommens automatisch wieder in Form höherer Steuern abfließt (automatischer Stabilisator)",
      "Er wird größer",
      "Er bleibt exakt unverändert",
      "Er wird negativ",
    ],
    correctIndex: 0,
    explanation:
      "Der Multiplikator wird zu 1/(1−γ(1−τ)), was für τ>0 kleiner ist als 1/(1−γ) — einkommensabhängige Steuern dämpfen Konjunkturschwankungen automatisch.",
    source: "Übungsblatt 5, Aufgabe 2b",
    free: false,
  },
  {
    id: "ki-05",
    topic: "Konjunktur I",
    type: "mc",
    prompt:
      "Wie verändert ein einkommensabhängiges Steuersystem (T=T̄+τY) die Steigung der IS-Kurve im IS-LM-Modell im Vergleich zu Pauschalsteuern?",
    options: [
      "Die IS-Kurve wird steiler, da eine gegebene Zinsänderung Y wegen des kleineren Multiplikators weniger stark bewegt",
      "Die IS-Kurve wird flacher",
      "Keine Veränderung der Steigung",
      "Die IS-Kurve verschiebt sich nur parallel, ohne die Steigung zu ändern",
    ],
    correctIndex: 0,
    explanation:
      "Da der Multiplikator mit einkommensabhängigen Steuern kleiner ist, führt eine gegebene zinsbedingte Investitionsänderung zu einer kleineren Y-Änderung — die IS-Kurve wird entsprechend steiler.",
    source: "Übungsblatt 5, Aufgabe 2c",
    free: false,
  },

  // ---------- Konjunktur II ----------
  {
    id: "kii-01",
    topic: "Konjunktur II",
    type: "mc",
    prompt:
      "Eine Volkswirtschaft befindet sich in der Liquiditätsfalle (Zinssatz an der Nullzinsgrenze). Welche Politik ist dort relativ wirksamer, um Y zu erhöhen?",
    options: [
      "Fiskalpolitik — da der Zins nicht weiter fallen kann, entsteht kein zinsgetriebenes Crowding-out",
      "Geldpolitik — sie kann den Zins beliebig weiter senken",
      "Beide sind exakt gleich wirksam",
      "Keine der beiden Politiken hat noch irgendeine Wirkung",
    ],
    correctIndex: 0,
    explanation:
      "In der Liquiditätsfalle ist die LM-Kurve horizontal: eine Fiskalexpansion erhöht Y voll gemäß Multiplikator ohne Zinsanstieg, während zusätzliche Geldmengenerhöhungen den (bereits bei null liegenden) Zins nicht weiter senken können.",
    source: "Übungsblatt 6, Aufgabe 1",
    free: false,
  },
  {
    id: "kii-02",
    topic: "Konjunktur II",
    type: "mc",
    prompt:
      "In der Liquiditätsfalle erhöht die Zentralbank die Geldmenge weiter. Was passiert kurzfristig mit Zinssatz und Einkommen Y?",
    options: [
      "Der Zinssatz bleibt bei 0, Y bleibt praktisch unverändert",
      "Der Zinssatz sinkt weiter ins Negative, Y steigt stark",
      "Der Zinssatz steigt, Y sinkt",
      "Zinssatz und Y ändern sich immer exakt proportional zur Geldmenge",
    ],
    correctIndex: 0,
    explanation:
      "Da der Zins die Nullzinsgrenze bereits erreicht hat, verschiebt eine weitere Geldmengenerhöhung die (bereits horizontale) LM-Kurve nicht sichtbar — Investitionen und Y bleiben praktisch unverändert.",
    source: "Übungsblatt 6, Aufgabe 1b",
    free: false,
  },
  {
    id: "kii-03",
    topic: "Konjunktur II",
    type: "mc",
    prompt:
      "Im parametrisierten IS-LM-Modell mit Investitionsfunktion I(r)=c−δr: wie verändert sich die Steigung der IS-Kurve, wenn δ (Zinssensitivität der Investition) größer wird?",
    options: [
      "Die IS-Kurve wird flacher — dieselbe Zinsänderung bewegt Y stärker",
      "Die IS-Kurve wird steiler",
      "Keine Veränderung der Steigung",
      "Die IS-Kurve verschwindet",
    ],
    correctIndex: 0,
    explanation:
      "Je größer δ, desto stärker reagieren Investitionen auf eine Zinsänderung, desto größer die resultierende Y-Änderung pro Zinseinheit — die IS-Kurve wird flacher.",
    source: "Übungsblatt 6, Aufgabe 3b",
    free: false,
  },
  {
    id: "kii-04",
    topic: "Konjunktur II",
    type: "mc",
    prompt:
      "Bei Konsumfunktion C=a+b(Y−T) und Investitionsfunktion I=c−δr: löst eine Steuersenkung um eine Einheit oder eine Erhöhung der Staatsausgaben um eine Einheit eine GRÖSSERE Verschiebung der IS-Kurve aus?",
    options: [
      "Die Erhöhung der Staatsausgaben — ihr Effekt wird nicht erst durch den Faktor b<1 gedämpft, anders als bei der Steuersenkung",
      "Die Steuersenkung",
      "Beide lösen identisch große Verschiebungen aus",
      "Das hängt ausschließlich von δ ab",
    ],
    correctIndex: 0,
    explanation:
      "ΔY_G = 1/(1−b) pro Einheit G, ΔY_T = b/(1−b) pro Einheit T — da b∈(0,1), ist der Steuereffekt betragsmäßig stets kleiner als der Ausgabeneffekt.",
    source: "Übungsblatt 6, Aufgabe 3c",
    free: false,
  },
  {
    id: "kii-05",
    topic: "Konjunktur II",
    type: "mc",
    prompt: "Bei Geldnachfragefunktion L(r,Y)=eY−fr: für welche Werte von f (Zinssensitivität der Geldnachfrage) verläuft die LM-Kurve FLACHER?",
    options: ["Für große Werte von f", "Für kleine Werte von f", "f hat keinen Einfluss auf die Steigung der LM-Kurve", "Nur exakt bei f=0"],
    correctIndex: 0,
    explanation:
      "Je größer f, desto stärker reagiert die Geldnachfrage auf Zinsänderungen, desto kleiner die zur Wiederherstellung des Geldmarktgleichgewichts nötige Zinsänderung bei einer gegebenen Y-Änderung — die LM-Kurve wird flacher.",
    source: "Übungsblatt 6, Aufgabe 3e",
    free: false,
  },
  {
    id: "kii-06",
    topic: "Konjunktur II",
    type: "mc",
    prompt:
      "Welche Aussage zu den LANGFRISTIGEN Effekten einer Erhöhung der Staatsausgaben im IS-LM-Modell ist korrekt?",
    options: [
      "Langfristig kehren IS- und LM-Kurve (real) wieder zur Ausgangslage zurück — der einzige dauerhafte Effekt ist ein höheres Preisniveau",
      "Der Zinssatz bleibt dauerhaft erhöht bei permanent höherem Y",
      "Die LM-Kurve verschiebt sich langfristig nach links, ohne dass sich der Zins ändert",
      "Es gibt überhaupt keinen langfristigen Effekt, auch nicht auf das Preisniveau",
    ],
    correctIndex: 0,
    explanation:
      "Sobald sich die Preise vollständig angepasst haben, kehrt die Wirtschaft zum ursprünglichen (natürlichen) Output zurück — der bleibende Effekt der Fiskalexpansion ist ein höheres Preisniveau (siehe AS-AD-Modell).",
    source: "Übungsblatt 6, Aufgabe 2",
    free: false,
  },
  {
    id: "kii-07",
    topic: "Konjunktur II",
    type: "mc",
    prompt: "Welchen Effekt hat eine Erhöhung der Geldmenge M auf die Gesamtnachfragekurve (AD)?",
    options: [
      "Verschiebung nach rechts — bei jedem Preisniveau P ist das Gleichgewichtseinkommen Y höher",
      "Verschiebung nach links",
      "Drehung um einen fixen Punkt ohne Verschiebung",
      "Keine Veränderung der AD-Kurve",
    ],
    correctIndex: 0,
    explanation:
      "Eine höhere Geldmenge erhöht bei jedem gegebenen P die reale Geldmenge M/P, senkt den Zins und erhöht darüber Y — die AD-Kurve verschiebt sich nach rechts.",
    source: "Übungsblatt 6, Aufgabe 3g",
    free: false,
  },

  // ---------- Offene VWL I ----------
  {
    id: "ovi-01",
    topic: "Offene VWL I",
    type: "mc",
    prompt: "Laut Mundell-Fleming-Modell: Bei FLEXIBLEN Wechselkursen hat eine expansive Geldpolitik welchen Effekt auf das Einkommen Y?",
    options: ["Y steigt", "Y bleibt unverändert", "Y sinkt", "Der Effekt ist unbestimmt"],
    correctIndex: 0,
    explanation:
      "Bei flexiblen Wechselkursen verschiebt eine Geldmengenerhöhung die LM*-Kurve nach rechts; die resultierende Abwertung erhöht zusätzlich die Nettoexporte — Geldpolitik ist voll wirksam.",
    source: "Übungsblatt 7, Aufgabe 1 (Tabelle 1, Mankiw)",
    free: false,
  },
  {
    id: "ovi-02",
    topic: "Offene VWL I",
    type: "mc",
    prompt: "Bei FESTEN Wechselkursen hat eine expansive Geldpolitik welchen Effekt auf das Einkommen Y?",
    options: [
      "Y bleibt unverändert — Geldpolitik ist wirkungslos, da sie vollständig an die Wechselkursverteidigung gebunden ist",
      "Y steigt stark",
      "Y sinkt",
      "Y steigt moderat, aber weniger als bei flexiblen Wechselkursen",
    ],
    correctIndex: 0,
    explanation:
      "Unter festen Wechselkursen muss jede autonome Geldmengenänderung durch Devisenmarktinterventionen sofort rückgängig gemacht werden, um den Wechselkurs zu halten — Geldpolitik verliert komplett ihre Wirkung auf Y.",
    source: "Übungsblatt 7, Aufgabe 1 (Tabelle 1, Mankiw)",
    free: false,
  },
  {
    id: "ovi-03",
    topic: "Offene VWL I",
    type: "mc",
    prompt: "Bei FLEXIBLEN Wechselkursen hat eine expansive Fiskalpolitik welchen Effekt auf Wechselkurs e und Nettoexporte NX?",
    options: [
      "e steigt (Aufwertung), NX sinkt — Y bleibt am Ende unverändert",
      "e sinkt (Abwertung), NX steigt",
      "Weder e noch NX ändern sich",
      "e steigt, NX steigt ebenfalls",
    ],
    correctIndex: 0,
    explanation:
      "Die IS*-Kurve verschiebt sich nach rechts, was (bei fixem r=r*) zu einer Aufwertung führt; die Aufwertung senkt NX genau um den fiskalischen Impuls — vollständiges Crowding-out über den Außenhandel statt über Zinsen.",
    source: "Übungsblatt 7, Aufgabe 1 (Tabelle 1, Mankiw)",
    free: false,
  },
  {
    id: "ovi-04",
    topic: "Offene VWL I",
    type: "mc",
    prompt: "Bei FESTEN Wechselkursen hat eine expansive Fiskalpolitik welchen Effekt auf Y, e und NX?",
    options: [
      "Y steigt, e bleibt unverändert (per Definition fest), NX bleibt unverändert",
      "Y bleibt unverändert, e steigt, NX sinkt",
      "Y sinkt, e sinkt, NX steigt",
      "Y steigt, e sinkt, NX sinkt",
    ],
    correctIndex: 0,
    explanation:
      "Um die Aufwertungstendenz zu verhindern, muss die Zentralbank die Geldmenge anpassen (verkaufen), was LM* mitverschiebt und den vollen Fiskalmultiplikator auf Y wirken lässt — unter festen Wechselkursen ist Fiskalpolitik voll wirksam.",
    source: "Übungsblatt 7, Aufgabe 1 (Tabelle 1, Mankiw)",
    free: false,
  },
  {
    id: "ovi-05",
    topic: "Offene VWL I",
    type: "mc",
    prompt: "Welche Annahme ist zentral für das Mundell-Fleming-Modell einer 'kleinen offenen Volkswirtschaft'?",
    options: [
      "Perfekte Kapitalmobilität erzwingt r = r* (Weltzinssatz), da das Land zu klein ist, um den Weltzins zu beeinflussen",
      "Das Land bestimmt selbst den Weltzinssatz",
      "Es gibt keinerlei internationalen Kapitalverkehr",
      "Wechselkurse sind für die Analyse irrelevant",
    ],
    correctIndex: 0,
    explanation:
      "Bei perfekter Kapitalmobilität gleicht sich der inländische Zins sofort dem (exogen gegebenen) Weltzins an — genau das unterscheidet Mundell-Fleming vom geschlossenen IS-LM-Modell.",
    source: "Kapitel 8, Mundell-Fleming-Annahmen",
    free: false,
  },

  // ---------- Offene VWL II ----------
  {
    id: "ovii-01",
    topic: "Offene VWL II",
    type: "mc",
    prompt:
      "Der Nominalzins in Kanada sei höher als in den USA, der Realzins sei in beiden Ländern gleich, und es gelte Kaufkraftparität. Welche Aussage ist korrekt?",
    options: [
      "Die Inflationserwartungen in den USA sind höher; der Wechselkurs des kanadischen Dollars zum US-Dollar wird steigen",
      "Die Inflationserwartungen in Kanada sind höher; der Wechselkurs des kanadischen Dollars zum US-Dollar wird sinken",
      "Die Inflationserwartungen in Kanada sind höher; der Wechselkurs des kanadischen Dollars zum US-Dollar wird steigen",
      "Die Inflationserwartungen in den USA sind höher; der Wechselkurs des kanadischen Dollars zum US-Dollar wird sinken",
    ],
    correctIndex: 1,
    explanation:
      "Nach der Fisher-Gleichung (i=r+π^e) impliziert der höhere kanadische Nominalzins bei gleichem Realzins höhere kanadische Inflationserwartungen. Nach relativer Kaufkraftparität wertet die Währung des Landes mit höherer erwarteter Inflation ab — der kanadische Dollar wird also gegenüber dem US-Dollar sinken.",
    source: "Übungsblatt 7, Aufgabe 3",
    free: false,
  },
  {
    id: "ovii-02",
    topic: "Offene VWL II",
    type: "mc",
    prompt:
      "In einem erweiterten Mundell-Fleming-Modell mit zusammengesetztem Preisindex P=λPd+(1−λ)Pf/e (Pd, Pf konstant, λ = Gewicht heimischer Güter): verläuft die LM*-Kurve dort noch senkrecht im (Y,e)-Diagramm?",
    options: [
      "Nein (außer im Spezialfall λ=1) — eine Wechselkursänderung verändert über P das reale Geldangebot M/P und damit auch Y",
      "Ja, immer noch exakt senkrecht, da P als exogen behandelt wird",
      "Die LM*-Kurve existiert in diesem Modell gar nicht mehr",
      "Nur bei λ=0 bleibt sie senkrecht",
    ],
    correctIndex: 0,
    explanation:
      "Da P hier selbst vom Wechselkurs e abhängt (über den Importgüterpreis Pf/e), beeinflusst e nun auch das reale Geldangebot M/P und damit Y — die LM*-Kurve reagiert auf e und ist nicht mehr senkrecht (außer im Grenzfall λ=1, wo P=Pd unabhängig von e ist).",
    source: "Übungsblatt 7, Aufgabe 2.1",
    free: false,
  },
  {
    id: "ovii-03",
    topic: "Offene VWL II",
    type: "mc",
    prompt:
      "In diesem erweiterten Modell: wie verändert sich die Wirkung einer expansiven Fiskalpolitik bei flexiblen Wechselkursen im Vergleich zur Standardversion des Mundell-Fleming-Modells (dort ist Fiskalpolitik wirkungslos auf Y)?",
    options: [
      "Fiskalpolitik erhält nun einen gewissen (wenn auch gedämpften) Effekt auf Y, da die Aufwertung den Importpreisanteil senkt, P sinkt, das reale Geldangebot steigt und LM* mitverschiebt",
      "Fiskalpolitik bleibt exakt so wirkungslos wie im Standardmodell",
      "Fiskalpolitik wird noch wirkungsloser als im Standardmodell",
      "Der Effekt kehrt sich vollständig um: Y sinkt",
    ],
    correctIndex: 0,
    explanation:
      "Die fiskalisch ausgelöste Aufwertung senkt über den Importgüteranteil das zusammengesetzte Preisniveau P, was M/P erhöht und die LM*-Kurve verschiebt — dadurch bekommt Fiskalpolitik einen (partiellen) Effekt auf Y, anders als im reinen Standardmodell.",
    source: "Übungsblatt 7, Aufgabe 2.2",
    free: false,
  },
  {
    id: "ovii-04",
    topic: "Offene VWL II",
    type: "mc",
    prompt:
      "Welche drei Ziele bilden das 'Trilemma' der internationalen Makroökonomik, von denen ein Land immer nur zwei gleichzeitig verfolgen kann?",
    options: [
      "Fester Wechselkurs, freier Kapitalverkehr, unabhängige Geldpolitik",
      "Hohes Wachstum, niedrige Inflation, Vollbeschäftigung",
      "Freihandel, fester Wechselkurs, hohe Zölle",
      "Kapitalverkehrskontrollen, Freihandel, Wirtschaftswachstum",
    ],
    correctIndex: 0,
    explanation:
      "Das 'unmögliche Dreieck' besagt, dass fester Wechselkurs, freier Kapitalverkehr und unabhängige Geldpolitik nicht gleichzeitig bestehen können — Mundell-Fleming zeigt genau diesen Mechanismus.",
    source: "Kapitel 9, Trilemma",
    free: false,
  },
  {
    id: "ovii-05",
    topic: "Offene VWL II",
    type: "mc",
    prompt:
      "Die Eurozone hat sich für einen festen (internen) Wechselkurs und freien Kapitalverkehr entschieden. Worauf muss sie laut Trilemma verzichten?",
    options: [
      "Auf eine unabhängige nationale Geldpolitik (gemeinsame EZB-Geldpolitik für alle Mitgliedsländer)",
      "Auf freien Kapitalverkehr",
      "Auf Preisstabilität als Ziel",
      "Auf Wirtschaftswachstum",
    ],
    correctIndex: 0,
    explanation:
      "Da die Eurozone feste (interne) Wechselkurse und freien Kapitalverkehr gewählt hat, bleibt laut Trilemma keine unabhängige nationale Geldpolitik übrig — daher die gemeinsame EZB.",
    source: "Kapitel 9, Trilemma-Beispiele",
    free: false,
  },

  // ---------- Gesamtwirtschaftliches Angebot ----------
  {
    id: "gwa-01",
    topic: "Gesamtwirtschaftliches Angebot",
    type: "mc",
    prompt:
      "Im Preisstarrheiten-Modell setzt ein Anteil s der Unternehmen den Preis starr (p=P^e), der Rest (1−s) flexibel (p=P+b(Y−Ȳ)). Daraus folgt P=P^e+[(1−s)/s]·b·(Y−Ȳ). Im Spezialfall s=1 (kein Unternehmen hat flexible Preise) gilt:",
    options: [
      "P=P^e unabhängig von Y — die kurzfristige Angebotskurve verläuft vollkommen horizontal (flach)",
      "P hängt weiterhin stark von Y ab, die Angebotskurve bleibt normal geneigt",
      "Die Angebotskurve wird senkrecht wie die langfristige Angebotskurve",
      "Y wird exogen auf null gesetzt",
    ],
    correctIndex: 0,
    explanation:
      "Bei s=1 wird der Koeffizient (1−s)/s = 0, also P=P^e unabhängig von Y — mit vollständiger Preisstarrheit ist Output komplett nachfragebestimmt, die SRAS-Kurve ist horizontal (wie im einfachen keynesianischen Fixpreismodell).",
    source: "Übungsblatt 8, Aufgabe 1b(i)",
    free: false,
  },
  {
    id: "gwa-02",
    topic: "Gesamtwirtschaftliches Angebot",
    type: "mc",
    prompt:
      "Im selben Modell: Spezialfall b=0 (der von flexiblen Unternehmen angestrebte Preis hängt gar nicht vom aggregierten Output ab). Was folgt für P=P^e+[(1−s)/s]·b·(Y−Ȳ)?",
    options: [
      "P=P^e unabhängig von Y — auch hier wird die Angebotskurve vollkommen horizontal (flach)",
      "Die Angebotskurve verläuft weiterhin normal geneigt wie im allgemeinen Fall",
      "P wird komplett unabhängig von P^e",
      "Y muss dann exakt Ȳ entsprechen",
    ],
    correctIndex: 0,
    explanation:
      "Bei b=0 verschwindet der gesamte Term [(1−s)/s]·b·(Y−Ȳ) unabhängig vom Wert von s, sodass wieder P=P^e gilt — auch dieser Spezialfall liefert eine horizontale SRAS-Kurve.",
    source: "Übungsblatt 8, Aufgabe 1b(ii)",
    free: false,
  },
  {
    id: "gwa-03",
    topic: "Gesamtwirtschaftliches Angebot",
    type: "mc",
    prompt:
      "Die Zentralbank erhöht (ausgehend vom langfristigen Gleichgewicht) das Geldangebot, und die resultierende Inflation ist vollständig UNERWARTET. Was passiert kurzfristig?",
    options: [
      "Output steigt über Ȳ, Arbeitslosigkeit sinkt unter die natürliche Rate, Inflation steigt",
      "Output bleibt bei Ȳ, nur die Inflation steigt",
      "Output sinkt, Arbeitslosigkeit steigt",
      "Keine Veränderung, da Geld auch kurzfristig neutral ist",
    ],
    correctIndex: 0,
    explanation:
      "Unerwartete Geldpolitik verschiebt die AD-Kurve nach rechts; entlang der (positiv geneigten) kurzfristigen AS-Kurve steigen sowohl P als auch Y über Ȳ, was via Okun'schem Gesetz die Arbeitslosigkeit unter ihre natürliche Rate senkt.",
    source: "Übungsblatt 8, Aufgabe 2a",
    free: false,
  },
  {
    id: "gwa-04",
    topic: "Gesamtwirtschaftliches Angebot",
    type: "mc",
    prompt:
      "Dieselbe Geldmengenerhöhung — die resultierende Inflation ist diesmal vollständig ERWARTET (Erwartungen antizipieren die Politik korrekt). Was passiert kurzfristig?",
    options: [
      "Output und Arbeitslosigkeit bleiben nahezu bei Ȳ bzw. der natürlichen Rate, nur das Preisniveau steigt sofort entsprechend",
      "Output steigt genauso stark wie im unerwarteten Fall",
      "Die Arbeitslosigkeit sinkt dauerhaft unter ihr natürliches Niveau",
      "Es kommt zu keinerlei Inflation",
    ],
    correctIndex: 0,
    explanation:
      "Ist die Inflation vollständig erwartet, passt sich P^e sofort an, die kurzfristige AS-Kurve verschiebt sich unmittelbar mit — es bleibt (fast) nur der reine Preiseffekt, kein Output-/Beschäftigungseffekt.",
    source: "Übungsblatt 8, Aufgabe 2b",
    free: false,
  },
  {
    id: "gwa-05",
    topic: "Gesamtwirtschaftliches Angebot",
    type: "mc",
    prompt:
      "Senkt der Staat die Steuern, und reagieren Haushalte darauf mit einem höheren Arbeitsangebot (empirisch belegter Effekt), wie verändert sich dadurch das NATÜRLICHE Produktionsniveau Ȳ im Vergleich zum Fall ohne Arbeitsangebotseffekt?",
    options: [
      "Ȳ steigt zusätzlich — sowohl die langfristige als auch die kurzfristige Angebotskurve verschieben sich zusätzlich zur reinen AD-Verschiebung nach rechts",
      "Ȳ bleibt exakt gleich, es verschiebt sich nur die AD-Kurve",
      "Ȳ sinkt",
      "Es gibt keinen Unterschied zum Fall ohne Arbeitsangebotseffekt",
    ],
    correctIndex: 0,
    explanation:
      "Ein größeres Arbeitsangebot erhöht die reale Produktionskapazität der Volkswirtschaft — LRAS und SRAS verschieben sich zusätzlich nach rechts, was den kurzfristigen Produktions- und Preiseffekt der Steuersenkung von der reinen Nachfrageseite unterscheidet.",
    source: "Übungsblatt 8, Aufgabe 3a",
    free: false,
  },
];
