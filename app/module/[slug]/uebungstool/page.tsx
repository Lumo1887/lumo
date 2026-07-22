import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getModule } from "@/lib/modules";
import QuizPlayer from "@/components/QuizPlayer";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const mod = getModule(params.slug);
  if (!mod) return {};

  const title = `${mod.title} — Übungsaufgaben mit Lösungen`;
  const description = `${mod.questionCount}+ Übungsaufgaben aus echten Tutorien und Klausuren zu ${mod.title} (${mod.subtitle}), mit sofortigem Feedback und Lösungsweg — von Lumo Learn.`;

  return {
    title,
    description,
    alternates: { canonical: `/module/${mod.slug}/uebungstool` },
    openGraph: { title, description },
  };
}

export default function UebungstoolPage({ params }: { params: { slug: string } }) {
  const mod = getModule(params.slug);
  if (!mod) notFound();

  return (
    <div>
      <div className="mb-10">
        <Link
          href={`/module/${mod.slug}`}
          className="text-sm font-medium text-brand-700 hover:underline"
        >
          ← Zurück zum Modul
        </Link>
        <h1 className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-4xl">
          Übungstool: {mod.title}
        </h1>
        <p className="mt-3 max-w-2xl text-ink-600">
          Echte Aufgaben aus den Tutorien, mit sofortigem Feedback und
          Lösungsweg. Filtere nach Thema oder übe alles gemischt.
        </p>
      </div>

      <QuizPlayer moduleSlug={mod.slug} />
    </div>
  );
}
