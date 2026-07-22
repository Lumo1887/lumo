"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { getModuleChapters, type SkriptSection } from "@/lib/content/registry";
import { getModule } from "@/lib/modules";
import SkriptFigure from "@/components/SkriptFigures";
import MathFormula from "@/components/MathFormula";
import { fetchAccess } from "@/lib/access";

type PurchaseLike = string | { moduleSlug?: string; module_slug?: string; slug?: string };

function ownsModule(purchases: PurchaseLike[] | undefined | null, slug: string): boolean {
  if (!purchases) return false;
  return purchases.some((p) => {
    if (typeof p === "string") return p === slug;
    return p.moduleSlug === slug || p.module_slug === slug || p.slug === slug;
  });
}

// Rendert einen einzelnen Abschnitt. Wird sowohl für freigeschaltete als
// auch für unscharf dargestellte (gesperrte) Abschnitte verwendet, damit der
// Inhalt nicht doppelt gepflegt werden muss.
function SectionContent({
  section,
  interactive,
}: {
  section: SkriptSection;
  interactive: boolean;
}) {
  return (
    <div
      id={interactive ? section.id : undefined}
      data-section-id={interactive ? section.id : undefined}
      className="mb-10 scroll-mt-24 last:mb-0"
    >
      <h3 className="mb-1 text-xl font-semibold text-ink-900">{section.heading}</h3>
      <div className="skript-heading-rule" />
      {section.body[0] && <p className="mb-4">{section.body[0]}</p>}
      {section.terms && section.terms.length > 0 && (
        <div className="skript-term-grid">
          {section.terms.map((t, i) => (
            <div key={i} className="skript-term-box">
              <p className="skript-term-name">{t.term}</p>
              <p className="skript-term-def">{t.definition}</p>
            </div>
          ))}
        </div>
      )}
      {section.body.slice(1).map((paragraph, i) => (
        <p key={i} className="mb-4">
          {paragraph}
        </p>
      ))}
      {section.figure && (
        <SkriptFigure type={section.figure.type} caption={section.figure.caption} />
      )}
      {section.code && section.code.length > 0 && (
        <div className="mb-4 space-y-3">
          {section.code.map((snippet, i) => (
            <div key={i}>
              {section.codeCaptions?.[i] && (
                <p className="mb-1 text-xs font-medium text-ink-500">
                  {section.codeCaptions[i]}
                </p>
              )}
              <pre className="skript-code">
                <code>{snippet}</code>
              </pre>
            </div>
          ))}
        </div>
      )}
      {section.table && (
        <div className="skript-table-wrap">
          <table className="skript-table">
            {section.table.caption && <caption>{section.table.caption}</caption>}
            <thead>
              <tr>
                {section.table.headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {section.formulas && section.formulas.length > 0 && (
        <div className="skript-formula mb-4 space-y-1">
          {section.formulas.map((f, i) => (
            <div key={i}>
              <MathFormula latex={section.formulasLatex?.[i]} fallback={f} />
            </div>
          ))}
        </div>
      )}
      {section.examples && section.examples.length > 0 && (
        <div className="mt-4 space-y-3">
          {section.examples.map((ex, i) => (
            <div key={i} className="skript-example">
              <span className="hand-label mr-1 text-brand-600">
                Beispiel{section.examples!.length > 1 ? ` ${i + 1}` : ""}:
              </span>
              {ex}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SkriptPageContent({ moduleSlug }: { moduleSlug: string }) {
  const mod = getModule(moduleSlug);
  const chapters = useMemo(() => getModuleChapters(moduleSlug) ?? [], [moduleSlug]);

  // Flache, geordnete Liste aller Abschnitts-IDs — wird gebraucht, um zu
  // bestimmen, wie "weit" ein gelesener Abschnitt im Skript ist.
  const flatSectionIds = useMemo(
    () => chapters.flatMap((chapter) => chapter.sections.map((section) => section.id)),
    [chapters]
  );

  const [loading, setLoading] = useState(true);
  const [unlocked, setUnlocked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Suche über Kapitel-/Abschnittsüberschriften, Fließtext und Beispiele —
  // rein clientseitig, da der komplette Skript-Inhalt sowieso schon geladen
  // ist. Gesperrte Kapitel bleiben durchsuchbar (Anreiz, das Modul
  // freizuschalten), springen beim Klick aber nur zum Kapitelanfang, nicht
  // zum genauen Abschnitt (der hat im gesperrten Zustand kein DOM-Anker).
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (q.length < 2) return [];

    const results: {
      anchor: string;
      chapterNumber: number;
      sectionHeading: string;
      locked: boolean;
    }[] = [];

    for (const chapter of chapters) {
      const chapterLocked = !chapter.free && !unlocked;
      for (const section of chapter.sections) {
        const haystack = [section.heading, ...section.body, ...(section.examples ?? [])]
          .join(" ")
          .toLowerCase();
        if (haystack.includes(q)) {
          results.push({
            anchor: chapterLocked ? chapter.id : section.id,
            chapterNumber: chapter.number,
            sectionHeading: section.heading,
            locked: chapterLocked,
          });
        }
      }
    }

    return results.slice(0, 20);
  }, [searchQuery, chapters, unlocked]);

  // Zwei Beispielbegriffe für den Platzhaltertext der Suche — aus den
  // tatsächlichen Kapitelüberschriften DIESES Moduls abgeleitet (statt fest
  // codierter Beispiele wie "Bayes", die nur für ein einzelnes Modul Sinn
  // ergeben). Dadurch passt der Platzhalter automatisch zu jedem Modul,
  // auch zu künftigen, ohne dass diese Seite dafür angefasst werden muss.
  const searchPlaceholderExamples = useMemo(() => {
    const candidates: string[] = [];
    for (const chapter of chapters) {
      for (const section of chapter.sections) {
        const short = section.heading
          .replace(/^[\d.]+\s*/, "")
          .split(":")[0]
          .trim();
        if (short.length >= 4 && short.length <= 30 && !candidates.includes(short)) {
          candidates.push(short);
        }
      }
    }
    if (candidates.length < 2) return candidates;
    const mid = candidates[Math.floor(candidates.length / 2)];
    return mid !== candidates[0] ? [candidates[0], mid] : [candidates[0], candidates[candidates.length - 1]];
  }, [chapters]);

  const searchPlaceholder =
    searchPlaceholderExamples.length > 0
      ? `🔍 Im Skript suchen — z. B. „${searchPlaceholderExamples[0]}“${
          searchPlaceholderExamples[1] ? ` oder „${searchPlaceholderExamples[1]}“` : ""
        }`
      : "🔍 Im Skript suchen";

  useEffect(() => {
    let active = true;
    fetchAccess()
      .then((access: any) => {
        if (!active) return;
        setLoggedIn(Boolean(access?.loggedIn));
        setUnlocked(ownsModule(access?.purchases, moduleSlug));
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [moduleSlug]);

  // Lesefortschritts-Balken: füllt sich live beim Runterscrollen, statt beim
  // erneuten Öffnen automatisch an die letzte Position zu springen — das
  // war für viele Leser:innen eher verwirrend als hilfreich.
  useEffect(() => {
    function updateScrollProgress() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, pct)));
    }
    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  // Fortschritt verfolgen: sobald ein Abschnitt weit genug sichtbar ist,
  // wird (gedrosselt) der neue "weitester gelesener Abschnitt" gespeichert.
  useEffect(() => {
    if (loading) return;
    const sectionEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section-id]")
    );
    if (sectionEls.length === 0) return;

    let maxIndex = -1;
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("data-section-id");
          if (!id) return;
          const index = flatSectionIds.indexOf(id);
          if (index > maxIndex) {
            maxIndex = index;
            if (debounceTimer) clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
              fetch("/api/progress", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  moduleSlug,
                  sectionId: id,
                  sectionIndex: index,
                }),
              }).catch(() => {});
            }, 1500);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, [loading, unlocked, flatSectionIds, moduleSlug]);

  if (!mod || chapters.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="text-ink-700">Für dieses Modul ist noch kein Skript verfügbar.</p>
        <Link href="/dashboard" className="btn-secondary mt-5 inline-flex">
          ← Zurück zum Dashboard
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
        <div
          className="h-full bg-brand-500 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="mb-10">
        <p className="hand-label text-lg text-brand-600">{mod.title} — Skript</p>
        <h1 className="mt-1 text-3xl font-bold text-ink-900 sm:text-4xl">{mod.subtitle}</h1>
        <p className="mt-3 max-w-2xl text-ink-600">
          Kompakt aufbereitetes Skript mit Formeln, Beispielen und Skizzen — das erste
          Kapitel ist komplett kostenlos, der Rest schaltest du mit dem Modul frei.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={`/api/skript-pdf?module=${moduleSlug}`}
            className="btn-secondary inline-flex !px-4 !py-2 text-sm"
          >
            📄 Skript als PDF herunterladen
          </a>
          <a
            href={`/api/formelsammlung-pdf?module=${moduleSlug}`}
            className="btn-secondary inline-flex !px-4 !py-2 text-sm"
          >
            📐 Formelsammlung (PDF)
          </a>
        </div>
      </header>

      <div className="relative mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
        />
        {searchQuery.trim().length >= 2 && (
          <div className="card absolute z-40 mt-1 w-full overflow-hidden p-0">
            {searchResults.length === 0 ? (
              <p className="px-4 py-3 text-sm text-ink-500">
                Keine Treffer für „{searchQuery.trim()}“.
              </p>
            ) : (
              <ul className="max-h-80 overflow-y-auto py-1">
                {searchResults.map((r, i) => (
                  <li key={i}>
                    <a
                      href={`#${r.anchor}`}
                      onClick={() => setSearchQuery("")}
                      className="flex items-center justify-between gap-3 px-4 py-2 text-sm hover:bg-brand-50"
                    >
                      <span>
                        <span className="text-ink-400">Kap. {r.chapterNumber} · </span>
                        <span className="font-medium text-ink-800">{r.sectionHeading}</span>
                      </span>
                      {r.locked && <span className="shrink-0 text-xs text-ink-400">🔒</span>}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <nav className="skript-toc card mb-10 p-4 sm:p-5">
        <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-ink-500">
          Inhaltsverzeichnis
        </p>
        <ol className="space-y-0.5">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <a href={`#${chapter.id}`}>
                Kapitel {chapter.number} — {chapter.title}
                {!chapter.free && !unlocked && (
                  <span className="ml-2 text-xs text-ink-400">🔒</span>
                )}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <article className="skript-page skript-body card overflow-hidden px-6 py-8 sm:px-10 sm:py-10">
        {chapters.map((chapter) => {
          const isLocked = !chapter.free && !unlocked;
          return (
            <section key={chapter.id} id={chapter.id} className="mb-14 scroll-mt-24 last:mb-0">
              <div className="mb-6 flex items-baseline gap-3">
                <span className="hand-label text-2xl text-brand-500">Kap. {chapter.number}</span>
                <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">{chapter.title}</h2>
                {isLocked && <span className="badge">🔒 Gesperrt</span>}
              </div>
              <div className="skript-heading-rule" />
              <p className="mb-8 text-ink-600">{chapter.intro}</p>

              {isLocked ? (
                <div className="relative overflow-hidden rounded-xl">
                  {/* Unscharfe Vorschau des echten Inhalts — nicht klickbar,
                      nicht markierbar, nur als Anreiz zu sehen. */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none select-none blur-sm"
                  >
                    {chapter.sections.map((section) => (
                      <SectionContent key={section.id} section={section} interactive={false} />
                    ))}
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-end gap-4 bg-gradient-to-b from-transparent via-white/70 to-white p-8 pb-10 text-center">
                    <p className="max-w-sm text-ink-700">
                      Dieses Kapitel gehört zum Modul <strong>{mod.title}</strong> und ist
                      nach dem Kauf sofort freigeschaltet.
                    </p>
                    <Link href={`/module/${moduleSlug}`} className="btn-primary">
                      Modul freischalten
                    </Link>
                  </div>
                </div>
              ) : (
                chapter.sections.map((section) => (
                  <SectionContent key={section.id} section={section} interactive />
                ))
              )}
            </section>
          );
        })}
      </article>

      {!loading && !loggedIn && (
        <p className="mt-8 text-center text-sm text-ink-500">
          <Link href={`/login?next=/module/${moduleSlug}/skript`} className="text-brand-600 underline">
            Melde dich an
          </Link>{" "}
          um deinen Lesefortschritt zu speichern und gekaufte Kapitel freizuschalten.
        </p>
      )}
    </main>
  );
}
