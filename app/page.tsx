import SalesHomeContent from "@/components/SalesHomeContent";

// TEST (Branch "design-test-sales"): verkaufsorientiertes Redesign der
// Startseite — Hero mit klarem Nutzenversprechen, echte Kennzahlen statt
// Fragebogen. "/dashboard" bleibt bewusst unverändert (DashboardContent),
// damit interne Links und die App für eingeloggte Nutzer:innen von diesem
// Test unberührt bleiben. Zum Zurückrollen: einfach wieder auf
// DashboardContent umstellen bzw. den Branch verwerfen.
export default function HomePage() {
  return <SalesHomeContent />;
}
