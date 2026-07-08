import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = "https://lumo-learn.de";
const SITE_NAME = "Lumo";
const SITE_DESCRIPTION =
  "Günstiger und wertvoller als klassische Vorbereitungskurse: Skript, Altklausur-Aufgaben und ein interaktives Übungstool für dein KIT-Modul.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lumo — Skripte & Übungstool für KIT-Module",
    template: "%s — Lumo",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Lumo",
    "Lumo Lernen",
    "Lumo KIT",
    "KIT Klausurvorbereitung",
    "Statistik 1 KIT",
    "VWL 1 Mikroökonomie KIT",
    "VWL 2 Makroökonomie KIT",
    "Mathematik 1 KIT",
    "Wirtschaftsingenieurwesen KIT Skript",
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
    title: "Lumo — Skripte & Übungstool für KIT-Module",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: "Lumo — Skripte & Übungstool für KIT-Module",
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
  name: "Lumo",
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
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}