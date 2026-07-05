import Link from "next/link";
import { getModule, formatEuro } from "@/lib/modules";
import CheckoutButton from "@/components/CheckoutButton";

export default function StatistikOneModulePage() {
  const mod = getModule("statistik-1")!;

  return (
    <div>
      <div className="mb-10">
        <span className="badge">{mod.faculty}</span>
        <h1 className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-4xl">
          {mod.title}
        </h1>
        <p className="mt-3 max-w-2xl text-ink-600">{mod.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Link
            href="/module/statistik-1/skript"
            className="card block p-6 transition hover:-translate-y-0.5 hover:shadow-glow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-ink-900">📘 Skript</h2>
                <p className="mt-1 text-sm text-ink-600">
                  Kompakt aufbereitete Kapitel: {mod.chapters.join(", ")}.
                </p>
              </div>
              <span className="text-brand-700 font-semibold">Öffnen →</span>
            </div>
          </Link>

          <Link
            href="/module/statistik-1/uebungstool"
            className="card block p-6 transition hover:-translate-y-0.5 hover:shadow-glow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-ink-900">✏️ Übungstool</h2>
                <p className="mt-1 text-sm text-ink-600">
                  {mod.questionCount}+ Aufgaben aus Tutorien und Übungsblättern
                  mit sofortigem Feedback.
                </p>
              </div>
              <span className="text-brand-700 font-semibold">Öffnen →</span>
            </div>
          </Link>

          <div className="card p-6">
            <h2 className="text-lg font-bold text-ink-900">Was ist enthalten?</h2>
            <ul className="mt-3 space-y-2 text-sm text-ink-700">
              <li>✓ Vollständiges Skript zu allen 4 Kapiteln (Kapitel 2 gratis testen)</li>
              <li>✓ Interaktives Übungstool mit echten Tutorien-Aufgaben</li>
              <li>✓ Sofortiges Feedback & Lösungswege statt fester Kurstermine</li>
              <li>✓ Zeitlich unbegrenzter Zugriff, lernen in deinem eigenen Tempo</li>
            </ul>
          </div>
        </div>

        <aside className="card h-fit p-6">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-ink-900">
              {formatEuro(mod.priceCent)}
            </span>
            <span className="text-ink-600 line-through">
              {formatEuro(mod.compareAtCent)}
            </span>
          </div>
          <p className="mt-1 text-sm text-ink-600">
            Einmalig, dauerhafter Zugriff. Günstiger als klassische
            Vorbereitungskurse.
          </p>
          <div className="mt-5">
            <CheckoutButton moduleSlug={mod.slug} label="Modul freischalten" />
          </div>
          <p className="mt-3 text-center text-xs text-ink-600">
            Sichere Zahlung über Stripe. Kapitel 2 kannst du vorher gratis lesen.
          </p>
        </aside>
      </div>
    </div>
  );
}
