"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { skriptChapters } from "@/lib/skript-content";
import SkriptFigure from "@/components/SkriptFigures";
import { fetchAccess } from "@/lib/access";

const MODULE_SLUG = "statistik-1";

type PurchaseLike = string | { moduleSlug?: string; module_slug?: string; slug?: string };

function ownsModule(purchases: PurchaseLike[] | undefined | null, slug: string): boolean {
  if (!purchases) return false;
  return purchases.some((p) => {
    if (typeof p === "string") return p === slug;
    return p.moduleSlug === slug || p.module_slug === slug || p.slug === slug;
  });
}

export default function SkriptPage() {
  const [loading, setLoading] = useState(true);
  const [unlocked, setUnlocked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

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

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
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
                <div className="relative overflow-hidden rounded-xl border border-ink-100 bg-[#fffdf9] p-8 text-center">
                  <p className="mb-4 text-ink-700">
                    Dieses Kapitel gehört zum Modul <strong>Statistik I</strong> und ist nach dem
                    Kauf sofort freigeschaltet.
                  </p>
                  <Link href={`/module/${MODULE_SLUG}`} className="btn-primary">
                    Modul freischalten
                  </Link>
                </div>
              ) : (
                chapter.sections.map((section) => (
                  <div key={section.id} id={section.id} className="mb-10 scroll-mt-24 last:mb-0">
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
          um gekaufte Kapitel hier freizuschalten.
        </p>
      )}
    </main>
  );
}
