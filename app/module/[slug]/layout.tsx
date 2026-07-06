import ModuleChat from "@/components/ModuleChat";
import { getModule } from "@/lib/modules";
import { getModuleChapters } from "@/lib/content/registry";

// Wichtig: KEIN <html>/<body> hier — nur app/layout.tsx (ganz oben) darf das
// haben. Dieses Layout wrappt die Unterseiten jedes Moduls (Hub, Skript,
// Übungstool) und hängt den schwebenden Chat-Button dazu, sofern für das
// Modul bereits Skript-Inhalt hinterlegt ist.
export default function ModuleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const mod = getModule(params.slug);
  const hasChatContent = Boolean(getModuleChapters(params.slug));

  return (
    <>
      {children}
      {mod && hasChatContent && (
        <ModuleChat moduleSlug={mod.slug} moduleTitle={mod.title} />
      )}
    </>
  );
}
