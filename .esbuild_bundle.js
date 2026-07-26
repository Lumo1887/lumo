"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// app/api/webhooks/stripe/route.ts
var route_exports = {};
__export(route_exports, {
  POST: () => POST,
  runtime: () => runtime
});
module.exports = __toCommonJS(route_exports);
var import_server = require("next/server");
var import_react = __toESM(require("react"));
var import_renderer2 = require("@react-pdf/renderer");

// lib/stripe.ts
var import_stripe = __toESM(require("stripe"));
var stripe = new import_stripe.default(process.env.STRIPE_SECRET_KEY ?? "sk_test_placeholder", {
  apiVersion: "2024-06-20"
});
function getBaseUrl() {
  return process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
}

// lib/supabaseAdmin.ts
var import_supabase_js = require("@supabase/supabase-js");
var supabaseAdmin = (0, import_supabase_js.createClient)(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

// lib/resend.ts
var import_resend = require("resend");
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new import_resend.Resend(apiKey);
}
var MAIL_FROM = process.env.RESEND_FROM_EMAIL ?? "Lumo Learn <no-reply@lumo-learn.de>";

// lib/modules.ts
var modules = [
  {
    slug: "statistik-1",
    faculty: "WiWi-Fakult\xE4t",
    title: "Statistik I",
    subtitle: "Deskriptive Statistik, Wahrscheinlichkeitsrechnung, Zufallsvariablen & Verteilungsmodelle",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Deskriptive Statistik",
      "Wahrscheinlichkeitsrechnung",
      "Zufallsvariablen",
      "Verteilungsmodelle"
    ],
    questionCount: 45,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Statistik",
    number: "I",
    popular: true,
    exampleQuestion: "Erkl\xE4r mir den Satz von Bayes an einem Beispiel."
  },
  {
    slug: "vwl-2",
    faculty: "WiWi-Fakult\xE4t",
    title: "VWL 2: Makro\xF6konomie",
    subtitle: "BIP, Wachstum, Arbeitslosigkeit, Geld & Inflation, Konjunktur (IS-LM), offene Volkswirtschaften & Gesamtangebot",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Methodik & BIP",
      "Geld, Inflation & Bankensystem",
      "Arbeitslosigkeit",
      "Wachstum I & II (inkl. KI & Klima)",
      "Konjunktur I & II",
      "Gesamtwirtschaftliches Angebot",
      "Offene Volkswirtschaften I & II (inkl. Z\xF6lle)"
    ],
    questionCount: 53,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "VWL",
    number: "2",
    popular: true,
    exampleQuestion: "Erkl\xE4r mir das IS-LM-Modell an einem Beispiel."
  },
  {
    slug: "statistik-2",
    faculty: "WiWi-Fakult\xE4t",
    title: "Statistik II",
    subtitle: "Sch\xE4tzen, Testen, Regression",
    status: "coming-soon",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [],
    questionCount: 0,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Statistik",
    number: "II"
  },
  {
    slug: "vwl-1",
    faculty: "WiWi-Fakult\xE4t",
    title: "VWL 1: Mikro\xF6konomie",
    subtitle: "Haushalte, Unternehmen, M\xE4rkte & Wettbewerb",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Markt und Budgetmenge",
      "Pr\xE4ferenzen und Nutzen",
      "Optimale Entscheidung und Nachfrage",
      "Konsumentenrente, Marktnachfrage und Marktgleichgewicht",
      "Bekundete Pr\xE4ferenzen und Slutsky-Zerlegung",
      "Technologie und Gewinnmaximierung der Unternehmung",
      "Kostenminimierung und Kostenkurven",
      "Angebot der Unternehmung und Marktangebot der Branche",
      "Monopol",
      "Oligopoltheorie",
      "Spieltheorie",
      "Tausch, Wohlfahrtstheorie und intertemporale Entscheidung"
    ],
    questionCount: 62,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "VWL",
    number: "1",
    exampleQuestion: "Erkl\xE4r mir das Gewinnmaximierungsproblem des Monopolisten an einem Beispiel."
  },
  {
    slug: "mathematik-1-semester",
    faculty: "WiWi-Fakult\xE4t",
    title: "Mathematik 1: Semesterklausur",
    subtitle: "Aussagenlogik, Mengenlehre, Relationen, Abbildungen, Folgen, Reihen & Potenzreihen \u2014 Stoff der Semesterklausur (1. Pr\xFCfungsteil)",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Aussagenlogik",
      "Mengenlehre",
      "Exkurs: Algebraische Strukturen",
      "Kombinatorik und das Laplace-Modell",
      "Relationen",
      "Vollst\xE4ndige Induktion und die nat\xFCrlichen Zahlen",
      "Abbildungen",
      "Die reellen Zahlen",
      "Folgen",
      "Teilfolgen, H\xE4ufungspunkte und Cauchy-Folgen",
      "Reihen",
      "Potenzreihen und spezielle Funktionen"
    ],
    questionCount: 77,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Mathematik",
    number: "1 \u2013 Semesterklausur",
    popular: true,
    exampleQuestion: "Erkl\xE4r mir die vollst\xE4ndige Induktion an einem Beispiel."
  },
  {
    slug: "mathematik-1-abschluss",
    faculty: "WiWi-Fakult\xE4t",
    title: "Mathematik 1: Abschlussklausur",
    subtitle: "Grundlagen der Analysis und linearen Algebra \u2014 Stoff der Abschlussklausur (2. Pr\xFCfungsteil)",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Lineare Gleichungssysteme und der Gau\xDF-Algorithmus",
      "Vektorr\xE4ume und Untervektorr\xE4ume",
      "Funktionsgrenzwerte und Stetigkeit",
      "Exkurs: Exponential- und Logarithmusfunktionen",
      "Lineare Abbildungen und Matrizen",
      "Differenzierbarkeit und Ableitungsregeln",
      "Extremwerte, Mittelwertsatz und Kurvendiskussion",
      "Exkurs: Die Regel von de l'Hospital und der Satz von Taylor",
      "Skalarprodukte und Orthogonalit\xE4t",
      "Integralrechnung"
    ],
    questionCount: 81,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Mathematik",
    number: "1 \u2013 Abschlussklausur",
    exampleQuestion: "Erkl\xE4r mir den Hauptsatz der Differential- und Integralrechnung an einem Beispiel."
  },
  {
    slug: "mathematik-2-semester",
    faculty: "WiWi-Fakult\xE4t",
    title: "Mathematik 2: Semesterklausur",
    subtitle: "Fortf\xFChrung Analysis & lineare Algebra \u2014 Stoff der Semesterklausur (1. Pr\xFCfungsteil)",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Komplexe Zahlen",
      "Folgen und H\xE4ufungspunkte im R\u207F",
      "Determinanten",
      "Basisdarstellung und Basiswechsel",
      "Eigenwerte und Eigenr\xE4ume",
      "Definite Matrizen",
      "Normen, Skalarprodukte und Orthogonalit\xE4t",
      "Stetigkeit mehrdimensionaler Funktionen",
      "Gradient, Richtungsableitung und Tangentialebene"
    ],
    questionCount: 72,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Mathematik",
    number: "2 \u2013 Semesterklausur",
    exampleQuestion: "Erkl\xE4r mir, wie man die dritten Wurzeln einer komplexen Zahl berechnet."
  },
  {
    slug: "mathematik-2-abschluss",
    faculty: "WiWi-Fakult\xE4t",
    title: "Mathematik 2: Abschlussklausur",
    subtitle: "Mehrdimensionale Funktionen & Fortf\xFChrung \u2014 Stoff der Abschlussklausur (2. Pr\xFCfungsteil)",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Partielle Ableitungen und der Gradient",
      "Richtungsableitungen und der Gradient als steilster Anstieg",
      "Totale Differenzierbarkeit und die Tangentialebene",
      "Kettenregel, Jacobi-Matrix und vektorwertige Funktionen",
      "H\xF6here Ableitungen, der Satz von Schwarz und Taylorpolynome",
      "Lokale Extrema, die Hessematrix und Sattelpunkte",
      "Jordan-Inhalt und das Riemann-Integral im R\u207F",
      "Normalbereiche, das Prinzip von Cavalieri und der Transformationssatz"
    ],
    questionCount: 70,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Mathematik",
    number: "2 \u2013 Abschlussklausur",
    exampleQuestion: "Erkl\xE4r mir die Hessematrix und Sattelpunkte an einem Beispiel."
  },
  {
    slug: "mathematik-3",
    faculty: "WiWi-Fakult\xE4t",
    title: "Mathematik 3",
    subtitle: "Vertiefende Mathematik f\xFCr Wirtschaftsingenieure",
    status: "coming-soon",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [],
    questionCount: 0,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Mathematik",
    number: "3"
  },
  {
    slug: "bwl-1",
    faculty: "WiWi-Fakult\xE4t",
    title: "Management und Marketing",
    subtitle: "Grundlagen des Managements und Marketings",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Grundlagen: Was Unternehmer und Unternehmen leisten",
      "Gr\xFCnderpersonen, Motive und unternehmerische Gelegenheiten",
      "Entscheiden unter Risiko und Unsicherheit",
      "Gesch\xE4ftsmodelle systematisch entwickeln und planen",
      "Vom Prototyp zum Pivot: Lean Startup und Design Thinking",
      "Organisation des Unternehmens",
      "Strategische Analyse und strategische Optionen",
      "Corporate Governance und Personalf\xFChrung",
      "Kundenverhalten verstehen: von Daten zu Erkenntnissen",
      "Produktgestaltung, Preispolitik und Kommunikationspolitik",
      "Erfolg beim Kunden messen: CLV und Customer Equity"
    ],
    questionCount: 91,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "BWL",
    number: "1",
    exampleQuestion: "Wie berechne ich den Customer Lifetime Value bei bekannter Wiederkaufrate?"
  },
  {
    slug: "bwl-2",
    faculty: "WiWi-Fakult\xE4t",
    title: "Finanzierung und Rechnungswesen",
    subtitle: "Grundlagen der Finanzbuchhaltung und Unternehmensfinanzierung",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Zeitwert des Geldes: Barwert und Endwert",
      "Rentenformeln: Ewige und endliche Renten",
      "Investitionsrechnung I: Kapitalwert und Amortisationsdauer",
      "Investitionsrechnung II: Interner Zinssatz und Kapitalwertrate",
      "Bewertung von Anleihen",
      "Eigenkapitalfinanzierung: Aktien und Aussch\xFCttungspolitik",
      "Portfoliotheorie und CAPM",
      "Grunds\xE4tze ordnungsm\xE4\xDFiger Buchf\xFChrung und das Buchungssystem",
      "Bewertungswahlrechte im externen Rechnungswesen",
      "Grundlagen der Kosten- und Leistungsrechnung",
      "Der Betriebsabrechnungsbogen und Kalkulationsverfahren",
      "Deckungsbeitragsrechnung"
    ],
    questionCount: 69,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "BWL",
    number: "2",
    exampleQuestion: "Wie berechne ich den Kapitalwert einer Investition bei bekanntem Zahlungsstrom und Zinssatz?"
  },
  {
    slug: "bwl-3",
    faculty: "WiWi-Fakult\xE4t",
    title: "Produktion, Logistik und Wirtschaftsinformatik",
    subtitle: "Produktionswirtschaft, Logistik und Wirtschaftsinformatik",
    status: "coming-soon",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [],
    questionCount: 0,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "BWL",
    number: "3"
  },
  {
    slug: "informatik-1",
    faculty: "WiWi-Fakult\xE4t",
    title: "Programmieren 1: Java",
    subtitle: "Java-Grundlagen und objektorientierte Programmierung",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Kontrollstrukturen: Verzweigungen und Schleifen",
      "Einfache Datentypen, Operatoren und Typumwandlung",
      "Methoden: Aufbau, Parameter und G\xFCltigkeitsbereiche",
      "Rekursive Methoden",
      "Referenzdatentypen: Arrays und Strings",
      "Einf\xFChrung in die Objektorientierung",
      "Klassen im Detail: Konstruktoren und Kapselung",
      "Vererbung",
      "Polymorphismus und besondere Klassen im JDK",
      "Ausnahmebehandlung",
      "Listen, B\xE4ume und rekursive Datenstrukturen"
    ],
    questionCount: 87,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Informatik",
    number: "1",
    exampleQuestion: "Erkl\xE4r mir Polymorphismus und dynamisches Binden an einem Beispiel."
  },
  {
    slug: "informatik-2",
    faculty: "WiWi-Fakult\xE4t",
    title: "Grundlagen der Informatik",
    subtitle: "Logik, Algorithmen, Datenstrukturen, Sortieren, Komplexit\xE4t & UML",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Aussagenlogik",
      "Pr\xE4dikatenlogik",
      "Boolesche Algebra",
      "Algorithmen: Grundbegriffe und Eigenschaften",
      "Entwurfsprinzipien und Testen von Algorithmen",
      "Datenstrukturen I: Abstrakte Datentypen, Listen, Keller und Schlangen",
      "Datenstrukturen II: Graphen, B\xE4ume und bin\xE4re Suchb\xE4ume",
      "Sortierverfahren",
      "Datenstrukturen III: K\xFCrzeste Wege und minimale Spannb\xE4ume",
      "Komplexit\xE4t von Algorithmen",
      "UML: Anwendungsfall-, Klassen- und Objektdiagramme",
      "UML: Verhaltensdiagramme"
    ],
    questionCount: 86,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Informatik",
    number: "2",
    exampleQuestion: "Erkl\xE4r mir bin\xE4re Suchb\xE4ume an einem Beispiel."
  },
  {
    slug: "or-1",
    faculty: "WiWi-Fakult\xE4t",
    title: "Einf\xFChrung in das Operations Research",
    subtitle: "Lineare Optimierung, Netzplantechnik & Entscheidungsmodelle",
    status: "coming-soon",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [],
    questionCount: 0,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Operations Research",
    number: ""
  },
  {
    slug: "ing-1",
    faculty: "WiWi-Fakult\xE4t",
    title: "Werkstoffkunde",
    subtitle: "Werkstoffe und ihre Eigenschaften f\xFCr Ingenieuranwendungen",
    status: "coming-soon",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [],
    questionCount: 0,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Ingenieurwissenschaften",
    number: "1"
  },
  {
    slug: "ing-2",
    faculty: "WiWi-Fakult\xE4t",
    title: "Technische Mechanik",
    subtitle: "Statik und Festigkeitslehre",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Kr\xE4fte, Axiome und der starre K\xF6rper",
      "Kraftgruppen, Hebelgesetz und das Moment einer Kraft",
      "Gleichgewicht, Lagerarten und statische Bestimmtheit",
      "Haftreibung, Seilreibung und der Kraftkegel",
      "Fachwerke: Knotenschnitt- und Rittersches Verfahren",
      "Schnittgr\xF6\xDFen am geraden Balken",
      "Spannungen, Dehnungen und das Hookesche Gesetz",
      "Fl\xE4chentr\xE4gheitsmoment und der Satz von Steiner",
      "Gerade Biegung und die Biegelinie",
      "Mehrteilige Tragwerke und der Gelenkbalken",
      "Exkurs: Mehrachsiger Spannungszustand und der Mohrsche Spannungskreis",
      "Exkurs: Knicken von St\xE4ben nach Euler"
    ],
    questionCount: 61,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Ingenieurwissenschaften",
    number: "2",
    exampleQuestion: "Erkl\xE4r mir den Satz von Steiner an einem Beispiel."
  },
  {
    slug: "ing-3",
    faculty: "WiWi-Fakult\xE4t",
    title: "Elektrotechnik",
    subtitle: "Grundlagen der Elektrotechnik",
    status: "coming-soon",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [],
    questionCount: 0,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Ingenieurwissenschaften",
    number: "3"
  },
  {
    slug: "ing-4",
    faculty: "WiWi-Fakult\xE4t",
    title: "Weiterf\xFChrende ingenieurwissenschaftliche Grundlagen",
    subtitle: "Vertiefende ingenieurwissenschaftliche Inhalte",
    status: "coming-soon",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [],
    questionCount: 0,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Ingenieurwissenschaften",
    number: "4"
  }
];
function getModule(slug) {
  return modules.find((m) => m.slug === slug);
}

// lib/referral.ts
async function awardReferralCredit(userId) {
  const { error } = await supabaseAdmin.rpc("increment_referral_credits", {
    p_user_id: userId
  });
  if (error) {
    throw new Error(`Guthaben konnte nicht gutgeschrieben werden: ${error.message}`);
  }
}

// lib/pdf/ReceiptPdfDocument.tsx
var import_renderer = require("@react-pdf/renderer");
var import_jsx_runtime = require("react/jsx-runtime");
import_renderer.Font.register({
  family: "DejaVu Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/dejavu-fonts-ttf@2.37.3/ttf/DejaVuSans.ttf"
    },
    {
      src: "https://cdn.jsdelivr.net/npm/dejavu-fonts-ttf@2.37.3/ttf/DejaVuSans-Bold.ttf",
      fontWeight: "bold"
    }
  ]
});
var BRAND_PURPLE = "#6D46E0";
var BRAND_PURPLE_LIGHT = "#7C5CFF";
var styles = import_renderer.StyleSheet.create({
  page: {
    padding: 48,
    fontSize: 10.5,
    fontFamily: "DejaVu Sans",
    color: "#1e1b2e"
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 6
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "DejaVu Sans",
    fontWeight: "bold",
    color: "#1a1523"
  },
  headerRule: {
    marginTop: 14,
    marginBottom: 22,
    borderBottomWidth: 1.5,
    borderBottomColor: BRAND_PURPLE
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26
  },
  sellerBlock: {
    fontSize: 9.5,
    color: "#57534e",
    lineHeight: 1.5
  },
  metaBlock: {
    fontSize: 9.5,
    color: "#57534e",
    textAlign: "right",
    lineHeight: 1.5
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "DejaVu Sans",
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1a1523"
  },
  table: {
    borderWidth: 1,
    borderColor: "#e7e2d8",
    borderRadius: 4,
    marginBottom: 18
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10
  },
  tableCellDesc: {
    flex: 1,
    paddingRight: 12
  },
  tableCellAmount: {
    width: 90,
    textAlign: "right"
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingTop: 4
  },
  totalLabel: {
    fontSize: 11,
    fontFamily: "DejaVu Sans",
    fontWeight: "bold",
    marginRight: 20
  },
  totalAmount: {
    fontSize: 11,
    fontFamily: "DejaVu Sans",
    fontWeight: "bold"
  },
  note: {
    fontSize: 9,
    color: "#78716c",
    marginTop: 24,
    lineHeight: 1.5
  },
  footer: {
    position: "absolute",
    bottom: 32,
    left: 48,
    right: 48,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  footerText: {
    fontSize: 8,
    color: "#a8a29e"
  }
});
function LogoMark({ size = 16 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_renderer.Svg, { width: size, height: size, viewBox: "0 0 64 64", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Circle, { cx: 32, cy: 32, r: 9, fill: BRAND_PURPLE }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Line, { x1: 32, y1: 4, x2: 32, y2: 15, stroke: BRAND_PURPLE_LIGHT, strokeWidth: 4, strokeLinecap: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Line, { x1: 32, y1: 49, x2: 32, y2: 60, stroke: BRAND_PURPLE_LIGHT, strokeWidth: 4, strokeLinecap: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Line, { x1: 4, y1: 32, x2: 15, y2: 32, stroke: BRAND_PURPLE_LIGHT, strokeWidth: 4, strokeLinecap: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Line, { x1: 49, y1: 32, x2: 60, y2: 32, stroke: BRAND_PURPLE_LIGHT, strokeWidth: 4, strokeLinecap: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Line, { x1: 12, y1: 12, x2: 20, y2: 20, stroke: BRAND_PURPLE_LIGHT, strokeWidth: 4, strokeLinecap: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Line, { x1: 44, y1: 44, x2: 52, y2: 52, stroke: BRAND_PURPLE_LIGHT, strokeWidth: 4, strokeLinecap: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Line, { x1: 52, y1: 12, x2: 44, y2: 20, stroke: BRAND_PURPLE_LIGHT, strokeWidth: 4, strokeLinecap: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Line, { x1: 20, y1: 44, x2: 12, y2: 52, stroke: BRAND_PURPLE_LIGHT, strokeWidth: 4, strokeLinecap: "round" })
  ] });
}
function ReceiptPdfDocument({ data }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Document, { title: `Beleg ${data.receiptNumber} \u2014 Lumo Learn`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_renderer.Page, { size: "A4", style: styles.page, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_renderer.View, { style: styles.headerRow, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { size: 20 }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Text, { style: styles.headerTitle, children: "Lumo Learn" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.View, { style: styles.headerRule }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_renderer.View, { style: styles.metaRow, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_renderer.View, { style: styles.sellerBlock, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Text, { children: data.sellerName }),
        data.sellerAddressLines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Text, { children: line }, i)),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Text, { children: data.sellerEmail }),
        data.sellerTaxNumber && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_renderer.Text, { children: [
          "Steuernummer: ",
          data.sellerTaxNumber
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_renderer.View, { style: styles.metaBlock, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_renderer.Text, { children: [
          "Beleg-Nr.: ",
          data.receiptNumber
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_renderer.Text, { children: [
          "Datum: ",
          data.issueDate
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Text, { style: styles.sectionTitle, children: "Kleinbetragsrechnung" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.View, { style: styles.table, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_renderer.View, { style: styles.tableRow, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Text, { style: styles.tableCellDesc, children: data.description }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Text, { style: styles.tableCellAmount, children: data.amountLabel })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_renderer.View, { style: styles.totalRow, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Text, { style: styles.totalLabel, children: "Gesamtbetrag" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_renderer.Text, { style: styles.totalAmount, children: data.amountLabel })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_renderer.Text, { style: styles.note, children: [
      "Gem\xE4\xDF \xA7 19 UStG wird keine Umsatzsteuer berechnet.",
      "\n",
      "Zahlung erhalten per Kreditkarte/Stripe (Referenz: ",
      data.paymentReference,
      ")."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_renderer.View, { style: styles.footer, fixed: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_renderer.Text, { style: styles.footerText, children: [
        "Lumo Learn \u2014 ",
        data.sellerName
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_renderer.Text, { style: styles.footerText, children: [
        "Beleg-Nr. ",
        data.receiptNumber
      ] })
    ] })
  ] }) });
}

// app/api/webhooks/stripe/route.ts
var OWNER_EMAIL = "lumolearn@outlook.de";
var OWNER_NAME = "Carlo Pochert";
var OWNER_ADDRESS_LINES = ["Gerwigstra\xDFe 29", "76131 Karlsruhe", "Deutschland"];
async function createReceipt({
  userId,
  moduleSlug,
  sessionId,
  amountCent,
  moduleTitle,
  moduleSubtitle
}) {
  try {
    const { data: receiptRow, error: insertError } = await supabaseAdmin.from("receipts").insert({
      user_id: userId,
      module_slug: moduleSlug,
      stripe_session_id: sessionId,
      amount_cent: amountCent
    }).select("id").single();
    if (insertError || !receiptRow) {
      console.error("Beleg konnte nicht in Supabase angelegt werden:", insertError);
      return null;
    }
    const receiptNumber = `LUMO-${(/* @__PURE__ */ new Date()).getFullYear()}-${String(receiptRow.id).padStart(6, "0")}`;
    const amountLabel = `${(amountCent / 100).toFixed(2).replace(".", ",")} \u20AC`;
    const data = {
      receiptNumber,
      issueDate: (/* @__PURE__ */ new Date()).toLocaleDateString("de-DE"),
      sellerName: OWNER_NAME,
      sellerAddressLines: OWNER_ADDRESS_LINES,
      sellerEmail: OWNER_EMAIL,
      sellerTaxNumber: process.env.OWNER_TAX_NUMBER || void 0,
      description: `Zugang zum Modul \u201E${moduleTitle}" (${moduleSubtitle}) \u2014 Skript, \xDCbungstool, Karteikarten, Klausursimulation, KI-Tutor`,
      amountLabel,
      paymentReference: sessionId
    };
    const buffer = await (0, import_renderer2.renderToBuffer)(
      import_react.default.createElement(ReceiptPdfDocument, { data })
    );
    const storagePath = `${userId}/${receiptNumber}.pdf`;
    const { error: uploadError } = await supabaseAdmin.storage.from("receipts").upload(storagePath, buffer, { contentType: "application/pdf", upsert: true });
    if (uploadError) {
      console.error("Beleg-PDF konnte nicht in Supabase Storage hochgeladen werden:", uploadError);
    } else {
      await supabaseAdmin.from("receipts").update({ storage_path: storagePath }).eq("id", receiptRow.id);
    }
    return { receiptNumber, buffer };
  } catch (err) {
    console.error("Fehler bei der Belegerstellung:", err);
    return null;
  }
}
var runtime = "nodejs";
async function POST(req) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!signature || !webhookSecret) {
    return import_server.NextResponse.json(
      { error: "Webhook nicht konfiguriert (STRIPE_WEBHOOK_SECRET fehlt)." },
      { status: 400 }
    );
  }
  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Ung\xFCltige Stripe-Webhook-Signatur:", err);
    return import_server.NextResponse.json({ error: "Ung\xFCltige Signatur." }, { status: 400 });
  }
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      const moduleSlug = session.metadata?.moduleSlug;
      const userId = session.metadata?.userId ?? session.client_reference_id;
      if (!moduleSlug || !userId) {
        console.error(
          "Webhook: moduleSlug oder userId fehlt in der Session-Metadata."
        );
        break;
      }
      const { error } = await supabaseAdmin.from("purchases").upsert(
        {
          user_id: userId,
          module_slug: moduleSlug,
          stripe_session_id: session.id
        },
        { onConflict: "user_id,module_slug" }
      );
      if (error) {
        console.error("Fehler beim Speichern des Kaufs in Supabase:", error);
        return import_server.NextResponse.json(
          { error: "Kauf konnte nicht gespeichert werden." },
          { status: 500 }
        );
      }
      console.log(
        `[stripe webhook] Kauf gespeichert: Nutzer ${userId}, Modul "${moduleSlug}"`
      );
      const mod = getModule(moduleSlug);
      let receipt = null;
      if (mod) {
        receipt = await createReceipt({
          userId,
          moduleSlug,
          sessionId: session.id,
          amountCent: session.amount_total ?? mod.priceCent,
          moduleTitle: mod.title,
          moduleSubtitle: mod.subtitle
        });
      }
      const resend = getResendClient();
      const customerEmail = session.customer_details?.email ?? session.customer_email ?? void 0;
      if (resend && customerEmail && mod) {
        const baseUrl = getBaseUrl();
        const priceEur = (mod.priceCent / 100).toFixed(2).replace(".", ",");
        const receiptAttachment = receipt ? [{ filename: `${receipt.receiptNumber}.pdf`, content: receipt.buffer }] : void 0;
        const receiptNote = receipt ? `

Den Zahlungsbeleg (${receipt.receiptNumber}) findest du im Anhang \u2014 f\xFCr deine eigenen Unterlagen.` : "";
        const results = await Promise.allSettled([
          resend.emails.send({
            from: MAIL_FROM,
            to: customerEmail,
            subject: `Dein Zugang zu ${mod.title} ist freigeschaltet \u2014 Lumo Learn`,
            text: `Hallo,

vielen Dank f\xFCr deinen Kauf! Dein Zugang zu "${mod.title}" (${mod.subtitle}) ist ab sofort freigeschaltet.

Bezahlter Betrag: ${priceEur} \u20AC${receiptNote}

Skript \xF6ffnen: ${baseUrl}/module/${mod.slug}/skript
\xDCbungstool \xF6ffnen: ${baseUrl}/module/${mod.slug}/uebungstool

\xDCbrigens: Kennst du jemanden, der/die auch f\xFCr ein Uni-Modul lernen muss? In deinem Profil (${baseUrl}/profile) findest du deinen pers\xF6nlichen Empfehlungslink \u2014 f\xFCr jeden Freund, der dar\xFCber kauft, bekommst du selbst ein komplettes Modul gratis.

Bei Fragen antworte einfach auf diese E-Mail oder schreib an ${OWNER_EMAIL}.

Viel Erfolg beim Lernen!
Lumo Learn`,
            attachments: receiptAttachment
          }),
          resend.emails.send({
            from: MAIL_FROM,
            to: OWNER_EMAIL,
            subject: `Neuer Kauf: ${mod.title}${receipt ? ` (Beleg ${receipt.receiptNumber})` : ""}`,
            text: `Neuer Kauf eingegangen.

Modul: ${mod.title}
Kunde: ${customerEmail}
Betrag: ${priceEur} \u20AC
Stripe-Session: ${session.id}
Nutzer-ID: ${userId}${receipt ? `
Beleg-Nr.: ${receipt.receiptNumber}` : ""}`,
            attachments: receiptAttachment
          })
        ]);
        results.forEach((result, i) => {
          if (result.status === "rejected") {
            console.error(
              i === 0 ? "Kaufbest\xE4tigungsmail an Kunde fehlgeschlagen:" : "Kauf-Benachrichtigungsmail an Betreiber fehlgeschlagen:",
              result.reason
            );
          } else if (result.value?.error) {
            console.error(
              i === 0 ? "Resend-Fehler (Kunde):" : "Resend-Fehler (Betreiber):",
              result.value.error
            );
          }
        });
      } else if (!customerEmail) {
        console.error(
          "Kaufbest\xE4tigungsmail \xFCbersprungen: keine Kunden-E-Mail in der Session gefunden."
        );
      }
      const referrerUserId = session.metadata?.referrerUserId;
      if (referrerUserId) {
        try {
          await awardReferralCredit(referrerUserId);
          console.log(
            `[stripe webhook] Empfehlungs-Guthaben gutgeschrieben an Nutzer ${referrerUserId}`
          );
          if (resend) {
            const { data: referrerData } = await supabaseAdmin.auth.admin.getUserById(referrerUserId);
            const referrerEmail = referrerData?.user?.email;
            if (referrerEmail) {
              const baseUrl = getBaseUrl();
              const rewardResult = await resend.emails.send({
                from: MAIL_FROM,
                to: referrerEmail,
                subject: "Dein Freund hat gekauft \u2014 1 Modul gratis f\xFCr dich! \u{1F389}",
                text: `Hallo,

jemand hat gerade mit deinem Empfehlungscode bei Lumo Learn gekauft \u2014 danke, dass du uns weiterempfiehlst!

Als Dankesch\xF6n hast du jetzt 1 komplettes Modul deiner Wahl gratis. W\xE4hl es in deinem Profil aus: ${baseUrl}/profile

Viele Gr\xFC\xDFe
Lumo Learn`
              });
              if (rewardResult.error) {
                console.error("Resend-Fehler (Empfehlungs-Belohnung):", rewardResult.error);
              }
            } else {
              console.error(
                "Empfehlungs-Benachrichtigung \xFCbersprungen: Werber-E-Mail nicht gefunden."
              );
            }
          }
        } catch (referralRewardErr) {
          console.error(
            "Fehler beim Gutschreiben/Verschicken der Empfehlungs-Belohnung:",
            referralRewardErr
          );
        }
      }
      break;
    }
    default:
      break;
  }
  return import_server.NextResponse.json({ received: true });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  POST,
  runtime
});
