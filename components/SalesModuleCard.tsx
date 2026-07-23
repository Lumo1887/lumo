import Link from "next/link";
import { ModuleDefinition, formatEuro } from "@/lib/modules";

// Verkaufsorientierte Modul-Karte für die Test-Startseite
// (components/SalesHomeContent.tsx) — bewusst nur mit echten, aus
// lib/modules.ts ableitbaren Fakten (Preis, Vergleichspreis, Anzahl
// Übungsaufgaben/Kapitel, echtes "popular"-Flag). Keine erfundenen
// Kaufzahlen oder Testimonial-Zitate, siehe Absprache zum Redesign-Test.
export default function SalesModuleCard({
  mod,
  locked,
}: {
  mod: ModuleDefinition;
  locked?: boolean;
}) {
  const isActive = mod.status === "active";
  const discountPercent = Math.round(
    ((mod.compareAtCent - mod.priceCent) / mod.compareAtCent) * 100
  );

  const content = (
    <div
      className={`flex h-full flex-col gap-3 rounded-2xl border bg-white p-6 shadow-sm transition ${
        mod.popular
          ? "border-brand-300 shadow-[0_8px_26px_rgba(0,0,0,0.06)]"
          : "border-ink-100"
      } ${isActive ? "hover:-translate-y-0.5 hover:shadow-md" : "opacity-60"}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
          {mod.faculty}
        </span>
        {mod.popular && (
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
            🔥 Beliebt
          </span>
        )}
        {!isActive && (
          <span className="rounded-full bg-ink-100 px-3 py-1 text-xs font-bold text-ink-600">
            Bald verfügbar
          </span>
        )}
      </div>

      <div>
        <h3 className="text-xl font-extrabold text-ink-900">{mod.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-600">
          {mod.subtitle}
        </p>
      </div>

      {isActive && (
        <p className="text-sm font-semibold text-ink-500">
          {mod.questionCount} Übungsaufgaben · {mod.chapters.length} Kapitel
        </p>
      )}

      <div className="mt-auto flex items-center justify-between border-t border-ink-100 pt-3">
        {isActive ? (
          <>
            <div>
              <span className="text-2xl font-extrabold text-ink-900">
                {formatEuro(mod.priceCent)}
              </span>
              <span className="ml-2 text-sm text-ink-400 line-through">
                {formatEuro(mod.compareAtCent)}
              </span>
            </div>
            <span className="rounded-full bg-brand-100 px-2.5 py-1 text-xs font-bold text-brand-700">
              -{discountPercent}%
            </span>
          </>
        ) : (
          <p className="text-sm text-ink-600">Trag dich für Updates ein.</p>
        )}
      </div>

      {isActive && (
        <div
          className={`mt-1 rounded-xl py-3 text-center text-sm font-bold ${
            locked
              ? "bg-brand-600 text-white"
              : "border-1.5 border border-brand-600 text-brand-700"
          }`}
        >
          {locked ? "Jetzt freischalten →" : "Öffnen →"}
        </div>
      )}
    </div>
  );

  if (!isActive) {
    return <div>{content}</div>;
  }

  return <Link href={`/module/${mod.slug}`}>{content}</Link>;
}
