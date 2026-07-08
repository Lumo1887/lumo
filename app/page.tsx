import DashboardContent from "@/components/DashboardContent";

// Die Startseite zeigt direkt die Modul-Übersicht statt eines
// vorgeschalteten Fragebogens — Besucher:innen sollen sofort sehen, was
// Lumo bietet, statt erst 4 Fragen beantworten zu müssen.
export default function HomePage() {
  return <DashboardContent />;
}
