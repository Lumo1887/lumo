import type { Metadata } from "next";
import "./globals.css";
// KaTeX-Stylesheet global importieren, damit Formeln im Online-Skript als
// echte, typografisch korrekte Formeln (mit Bruchstrich usw.) erscheinen,
// statt als reiner Unicode-Text. Wird von components/MathFormula.tsx benutzt.
import "katex/dist/katex.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReferralCapture from "@/components/ReferralCapture";

// Vercel liefert die Seite tatsächlich unter der www-Version aus
// (lumo-learn.de leitet per Redirect auf www.lumo-learn.de weiter) — diese
// URL muss daher überall als "offizielle" Adresse verwendet werden
// (Canonical-Tag, Sitemap, robots.txt, JSON-LD), sonst widersprechen sich
// Redirect-Ziel und Canonical-Angabe und Google meldet einen "Umleitungsfehler".
const SITE_URL = "https://www.lumo-learn.de";
// "Lumo Learn" ist der offizielle, durchgängig verwendete Name (Titel, Meta,
// JSON-LD, E-Mails, Footer, PDF-Exporte). "Lumo" bleibt als kurze, informelle
// Anrede in der Produkt-UI erhalten (Begrüßungen, Buttons u. Ä.).
const SITE_NAME = "Lumo Learn";
const SITE_DESCRIPTION =
  "Günstiger und wertvoller als klassische Vorbereitungskurse: Skript, Altklausur-Aufgaben und ein interaktives Übungstool für dein Uni-Modul.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lumo Learn — Skripte & Übungstool für Uni-Module",
    template: "%s — Lumo Learn",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Lumo Learn",
    "Lumo",
    "Lumo Lernen",
    "Klausurvorbereitung Studium",
    "Statistik 1 Klausur",
    "VWL 1 Mikroökonomie",
    "VWL 2 Makroökonomie",
    "Mathematik 1 Klausur",
    "Wirtschaftsingenieurwesen Skript",
  ],
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Lumo Learn — Skripte & Übungstool für Uni-Module",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: "Lumo Learn — Skripte & Übungstool für Uni-Module",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lumo Learn",
  alternateName: "Lumo",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  sameAs: ["https://www.instagram.com/lumolearn.de/"] as string[],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="gradient-bg min-h-screen font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ReferralCapture />
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}