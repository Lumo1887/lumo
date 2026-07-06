import ModuleChat from "@/components/ModuleChat";

// Wichtig: KEIN <html>/<body> hier — nur app/layout.tsx (ganz oben) darf das
// haben. Dieses Layout wrappt nur die Statistik-1-Unterseiten (Hub, Skript,
// Übungstool) und hängt den schwebenden Chat-Button dazu.
export default function StatistikOneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ModuleChat moduleSlug="statistik-1" moduleTitle="Statistik I" />
    </>
  );
}
