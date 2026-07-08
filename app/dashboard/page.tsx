import type { Metadata } from "next";
import DashboardContent from "@/components/DashboardContent";

// Identischer Inhalt wie die Startseite ("/") — bleibt als Route erhalten,
// weil intern noch an vielen Stellen (Navbar, Profil, Login-Redirect, etc.)
// auf "/dashboard" verlinkt wird. Der Canonical-Tag zeigt auf "/", damit
// Google nicht zwei Seiten mit demselben Inhalt separat bewertet.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function DashboardPage() {
  return <DashboardContent />;
}
