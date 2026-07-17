import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getModule } from "@/lib/modules";
import ExamSimulation from "@/components/ExamSimulation";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const mod = getModule(params.slug);
  if (!mod) return {};

  const title = `${mod.title} KIT — Klausursimulation`;
  const description = `Simuliere die Klausur zu ${mod.title} am KIT (${mod.subtitle}) unter echtem Zeitdruck, mit zufällig gemischten Fragen und Notenauswertung — von Lumo.`;

  return {
    title,
    description,
    alternates: { canonical: `/module/${mod.slug}/klausursimulation` },
    openGraph: { title, description },
  };
}

export default function KlausursimulationPage({ params }: { params: { slug: string } }) {
  const mod = getModule(params.slug);
  if (!mod) notFound();

  return (
    <div>
      <div className="mb-10">
        <Link href={`/module/${mod.slug}`} className="text-sm font-medium text-brand-700 hover:underline">
          ← Zurück zum Modul
        </Link>
        <h1 className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-4xl">
          Klausursimulation: {mod.title}
        </h1>
        <p className="mt-3 max-w-2xl text-ink-600">
          Zufällig zusammengestellte Fragen unter echtem Zeitdruck — für das Klausurgefühl vor der
          echten Prüfung.
        </p>
      </div>
      <ExamSimulation moduleSlug={mod.slug} />
    </div>
  );
}
