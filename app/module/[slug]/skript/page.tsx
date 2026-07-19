import type { Metadata } from "next";
import { getModule } from "@/lib/modules";
import SkriptPageContent from "@/components/SkriptPageContent";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const mod = getModule(params.slug);
  if (!mod) return {};

  const title = `${mod.title} KIT — Online-Skript mit allen Kapiteln`;
  const description = `Kostenloses Online-Skript zu ${mod.subtitle} für das KIT-Modul ${mod.title}: Formeln, Beispiele und Übersichten zum Nachlesen — das erste Kapitel gratis, von Lumo Learn.`;

  return {
    title,
    description,
    alternates: { canonical: `/module/${mod.slug}/skript` },
    openGraph: { title, description },
  };
}

export default function SkriptPage({ params }: { params: { slug: string } }) {
  return <SkriptPageContent moduleSlug={params.slug} />;
}
