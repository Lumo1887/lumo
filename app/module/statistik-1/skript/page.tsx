"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { skriptChapters, type SkriptSection } from "@/lib/skript-content";
import SkriptFigure from "@/components/SkriptFigures";
import { fetchAccess } from "@/lib/access";

const MODULE_SLUG = "statistik-1";

// Flache, geordnete Liste aller Abschnitts-IDs — wird gebraucht, um zu
// bestimmen, wie "weit" ein gelesener Abschnitt im Skript ist.
const FLAT_SECTION_IDS = skriptChapters.flatMap((chapter) =>
  chapter.sections.map((section) => section.id)
);

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
      {section.body.map((paragraph, i) => (
        <p key={i} className="mb-4">
          {paragraph}
        </p>
      ))}
      {section.figure && (
        <SkriptFigure type={section.figure.type} caption={section.figure.caption} />
      )}
      {section.formulas && section.formulas.length > 0 && (
        <div className="skript-formula mb-4 space-y-1">
          {section.formulas.map((f, i) => (
            <div key={i}>{f}</div>
          ))}
        </div>
      )}
      {section.example && (
        <div className="skript-example mt-4">
          <span className="hand-label mr-1 text-brand-600">Beispiel:</span>
          {section.example}
        </div>
      )}
    </div>
  );
}

export default function SkriptPage() {
  const [loading, setLoading] = useState(true);
  const [unlocked, setUnlocked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [resumeSectionId, setResumeSectionId] = useState<string | null>(null);
  const [showResumeToast, setShowResumeToast] = useState(false);
  const hasScrolledToResume = useRef(false);

  useEffect(() => {
    let active = true;
    fetchAccess()
      .then((access: any) => {
        if (!active) return;
        setLoggedIn(Boolean(access?.loggedIn));
        setUnlocked(ownsModule(access?.purchases, MODULE_SLUG));
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  // Gespeicherten Fortschritt laden, sobald klar ist, ob Inhalte gerendert
  // werden (kein Sinn, vorher zu laden — es gäbe noch nichts zum Scrollen).
  useEffect(() => {
    if (loading) return;
    fetch(`/api/progress?moduleSlug=${MODULE_SLUG}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.sectionId) {
          setResumeSectionId(data.sectionId as string);
        }
      })
      .catch(() => {});
  }, [loading]);

  // Einmalig zur gespeicherten Position scrollen, sobald sie geladen und im
  // DOM vorhanden ist.
  useEffect(() => {
    if (!resumeSectionId || hasScrolledToResume.current) return;
    const timer = setTimeout(() => {
      const el = document.querySelector(`[data-section-id="${resumeSectionId}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        hasScrolledToResume.current = true;
        setShowResumeToast(true);
        setTimeout(() => setShowResumeToast(false), 4000);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [resumeSectionId]);

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
          const index = FLAT_SECTION_IDS.indexOf(id);
          if (index > maxIndex) {
            maxIndex = index;
            if (debounceTimer) clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
              fetch("/api/progress", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  moduleSlug: MODULE_SLUG,
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
  }, [loading, unlocked]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {showResumeToast && (
        <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 rounded-full bg-ink-900 px-4 py-2 text-sm text-white shadow-card">
          Weiter geht&apos;s da, wo du aufgehört hast 👋
        </div>
      )}

      <header className="mb-10">
        <p className="hand-label text-lg text-brand-600">Statistik I — Skript</p>
        <h1 className="mt-1 text-3xl font-bold text-ink-900 sm:text-4xl">
          Deskriptive Statistik bis Verteilungsmodelle
        </h1>
        <p className="mt-3 max-w-2xl text-ink-600">
          Kompakt aufbereitetes Skript mit Formeln, Beispielen und Skizzen — Kapitel 2 ist
          komplett kostenlos, Kapitel 3–5 schaltest du mit dem Modul frei.
        </p>
      </header>

      <nav className="skript-toc card mb-10 p-4 sm:p-5">
        <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-ink-500">
          Inhaltsverzeichnis
        </p>
        <ol className="space-y-0.5">
          {skriptChapters.map((chapter) => (
            <li key={chapter.id}>
              <a href={`#${chapter.id}`}>
                Kapitel {chapter.number} — {chapter.title}
                {!chapter.free && <span className="ml-2 text-xs text-ink-400">🔒</span>}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <article className="skript-page skript-body card overflow-hidden px-6 py-8 sm:px-10 sm:py-10">
        {skriptChapters.map((chapter) => {
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
                      Dieses Kapitel gehört zum Modul <strong>Statistik I</strong> und ist nach
                      dem Kauf sofort freigeschaltet.
                    </p>
                    <Link href={`/module/${MODULE_SLUG}`} className="btn-primary">
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
          <Link href={`/login?next=/module/${MODULE_SLUG}/skript`} className="text-brand-600 underline">
            Melde dich an
          </Link>{" "}
          um deinen Lesefortschritt zu speichern und gekaufte Kapitel freizuschalten.
        </p>
      )}
    </main>
  );
}
