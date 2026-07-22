import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getModule } from "@/lib/modules";
import Flashcards from "@/components/Flashcards";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const mod = getModule(params.slug);
  if (!mod) return {};

  const title = `${mod.title} — Karteikarten mit Spaced Repetition`;
  const description = `Karteikarten zu allen zentralen Begriffen aus ${mod.title} (${mod.subtitle}), mit Spaced Repetition zum effizienten Wiederholen — von Lumo Learn.`;

  return {
    title,
    description,
    alternates: { canonical: `/module/${mod.slug}/karteikarten` },
    openGraph: { title, description },
  };
}

export default function KarteikartenPage({ params }: { params: { slug: string } }) {
  const mod = getModule(params.slug);
  if (!mod) notFound();

  return (
    <div>
      <div className="mb-10">
        <Link href={`/module/${mod.slug}`} className="text-sm font-medium text-brand-700 hover:underline">
          ← Zurück zum Modul
        </Link>
        <h1 className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-4xl">
          Karteikarten: {mod.title}
        </h1>
        <p className="mt-3 max-w-2xl text-ink-600">
          Alle zentralen Begriffe aus dem Skript zum schnellen Wiederholen — Karte
          umdrehen, einschätzen, ob du sie kannst, fertig.
        </p>
      </div>
      <Flashcards moduleSlug={mod.slug} questionCount={mod.questionCount} />
    </div>
  );
}
