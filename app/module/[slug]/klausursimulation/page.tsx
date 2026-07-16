import Link from "next/link";
import { notFound } from "next/navigation";
import { getModule } from "@/lib/modules";
import ExamSimulation from "@/components/ExamSimulation";

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
