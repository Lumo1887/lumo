import Link from "next/link";
import { notFound } from "next/navigation";
import { getModule } from "@/lib/modules";
import Flashcards from "@/components/Flashcards";

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
