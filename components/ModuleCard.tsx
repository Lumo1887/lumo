import Link from "next/link";
import { ModuleDefinition, formatEuro } from "@/lib/modules";

export default function ModuleCard({
  mod,
  locked,
}: {
  mod: ModuleDefinition;
  locked?: boolean;
}) {
  const isActive = mod.status === "active";

  const content = (
    <div
      className={`card relative flex h-full flex-col justify-between p-6 transition ${
        isActive ? "hover:-translate-y-1 hover:shadow-glow" : "opacity-60"
      }`}
    >
      {isActive && locked && (
        <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-ink-900/85 px-3 py-1 text-xs font-semibold text-white shadow-md backdrop-blur">
          🔒 Gesperrt
        </span>
      )}

      <div>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="badge">{mod.faculty}</span>
            {mod.popular && (
              <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2.5 py-1 text-xs font-semibold text-orange-700">
                🔥 Beliebt
              </span>
            )}
          </div>
          {!isActive && (
            <span className="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-600">
              Bald verfügbar
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold text-ink-900">{mod.title}</h3>
        <p className="mt-1 text-sm text-ink-600">{mod.subtitle}</p>
      </div>

      {isActive ? (
        <div className="mt-6 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-ink-900">
              {formatEuro(mod.priceCent)}
            </span>
            <span className="ml-2 text-sm text-ink-600 line-through">
              {formatEuro(mod.compareAtCent)}
            </span>
          </div>
          <span className="text-sm font-semibold text-brand-700">
            {locked ? "Ansehen →" : "Öffnen →"}
          </span>
        </div>
      ) : (
        <div className="mt-6 text-sm text-ink-600">Trag dich für Updates ein.</div>
      )}
    </div>
  );

  if (!isActive) {
    return <div>{content}</div>;
  }

  return <Link href={`/module/${mod.slug}`}>{content}</Link>;
}
