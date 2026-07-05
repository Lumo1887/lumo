import Link from "next/link";
import { skriptChapters } from "@/lib/skript-content";
import { getModule } from "@/lib/modules";
import LockedSection from "@/components/LockedSection";

export default function SkriptPage() {
  const mod = getModule("statistik-1")!;

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
          Skript: Statistik I
        </h1>
        <p className="mt-3 max-w-2xl text-ink-600">
          Kompakt aufbereitet auf Basis des Vorlesungsstoffs — Kapitel 2 ist
          komplett kostenlos, damit du dir ein Bild machen kannst.
        </p>
      </div>

      <div className="space-y-10">
        {skriptChapters.map((chapter) => {
          const body = (
            <div className="card p-6 sm:p-8">
              <div className="mb-2 flex items-center gap-3">
                <span className="badge">Kapitel {chapter.number}</span>
              </div>
              <h2 className="text-2xl font-bold text-ink-900">
                {chapter.title}
              </h2>
              <p className="mt-2 text-ink-600">{chapter.intro}</p>

              <div className="mt-6 space-y-8">
                {chapter.sections.map((section) => (
                  <div key={section.heading}>
                    <h3 className="text-lg font-semibold text-ink-900">
                      {section.heading}
                    </h3>
                    <div className="mt-2 space-y-3 text-sm leading-relaxed text-ink-700">
                      {section.body.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    {section.formulas && section.formulas.length > 0 && (
                      <div className="mt-3 space-y-1 rounded-lg bg-ink-50 p-4 font-mono text-xs text-ink-800">
                        {section.formulas.map((f, i) => (
                          <div key={i}>{f}</div>
                        ))}
                      </div>
                    )}
                    {section.example && (
                      <p className="mt-3 rounded-lg border border-brand-100 bg-brand-50 p-4 text-sm text-brand-800">
                        <strong>Beispiel: </strong>
                        {section.example}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );

          if (chapter.free) {
            return <div key={chapter.id}>{body}</div>;
          }

          return (
            <LockedSection
              key={chapter.id}
              moduleSlug={mod.slug}
              priceCent={mod.priceCent}
            >
              {body}
            </LockedSection>
          );
        })}
      </div>
    </div>
  );
}
