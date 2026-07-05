import Link from "next/link";
import QuizPlayer from "@/components/QuizPlayer";

export default function UebungstoolPage() {
  return (
    <div>
      <div className="mb-10">
        <Link
          href="/module/statistik-1"
          className="text-sm font-medium text-brand-700 hover:underline"
        >
          ← Zurück zum Modul
        </Link>
        <h1 className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-4xl">
          Übungstool: Statistik I
        </h1>
        <p className="mt-3 max-w-2xl text-ink-600">
          Echte Aufgaben aus den Tutorien, mit sofortigem Feedback und
          Lösungsweg. Filtere nach Thema oder übe alles gemischt.
        </p>
      </div>

      <QuizPlayer moduleSlug="statistik-1" />
    </div>
  );
}
