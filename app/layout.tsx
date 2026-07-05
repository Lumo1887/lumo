import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lumo — Skripte & Übungstool für KIT-Module",
  description:
    "Günstiger und wertvoller als klassische Vorbereitungskurse: Skript, Altklausur-Aufgaben und ein interaktives Übungstool für dein KIT-Modul.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="gradient-bg min-h-screen font-sans antialiased">
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}