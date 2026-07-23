"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { modules, STUDIENGAENGE } from "@/lib/modules";
import SalesModuleCard from "@/components/SalesModuleCard";
import { fetchAccess } from "@/lib/access";
import Reviews from "@/components/Reviews";
import Stars from "@/components/Stars";

const comparisonRows = [
  { feature: "Preis", us: "ab 4,99 € pro Modul", them: "oft 100–300 € pro Kurs" },
  {
    feature: "Skript",
    us: "Digital, durchsuchbar, mit echten Formeln und einem durchgerechneten Beispiel zu jedem Konzept",
    them: "Häufig nur Papier-Skript oder Formelliste ohne Beispiele",
  },
  {
    feature: "Übungsaufgaben",
    us: "Interaktives Tool aus echten Tutorien & Klausuren, zeigt dir gezielt deine Schwachstellen",
    them: "Feste Kurstermine, kaum individuelles Feedback",
  },
  {
    feature: "Klausursimulation",
    us: "Realistische Prüfung mit Zeitlimit, so oft wiederholbar wie du willst",
    them: "Meist nur 1–2 Probeklausuren",
  },
  {
    feature: "Karteikarten",
    us: "Spaced-Repetition-Modus merkt sich, was du schon kannst",
    them: "Keine strukturierte Wiederholung",
  },
  {
    feature: "KI-Tutor",
    us: "Erklärt sofort, warum eine Antwort falsch war — auch bei Fotos/PDFs von Aufgaben, rund um die Uhr",
    them: "Kein KI-Tutor, nur feste Sprechstunden",
  },
  {
    feature: "Start",
    us: "Sofort startklar, keine Anmeldefristen oder Wartelisten",
    them: "Feste Anmeldefristen, oft ausgebucht",
  },
];

// Verkaufsorientierte Alternativ-Startseite (Redesign-Test, siehe Branch
// "design-test-sales"). Bewusst als eigenständige Komponente statt Umbau
// von DashboardContent — /dashboard bleibt unverändert, damit interne
// Links (Navbar, Login-Redirect, Profil) und alle anderen Seiten von
// diesem Test unberührt bleiben. Nur echte, aus den Daten ableitbare
// Zahlen (Modulanzahl, Übungsaufgaben, Preis, echte Bewertungen) — keine
// erfundenen Erfolgsquoten/Nutzerzahlen und keine "nur diese Woche"-
// Zeitbefristung auf einen in Wahrheit dauerhaften Preis.
export default function SalesHomeContent() {
  const [accessMap, setAccessMap] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);
  const [avgRating, setAvgRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

  const activeStudiengang =
    STUDIENGAENGE.find((s) => s.active)?.name ?? STUDIENGAENGE[0]?.name ?? "";
  const [studiengang, setStudiengang] = useState<string>(activeStudiengang);
  const [subject, setSubject] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchAccess().then((info) => {
      if (cancelled) return;
      const map: Record<string, boolean> = {};
      info.purchases.forEach((slug) => {
        map[slug] = true;
      });
      setAccessMap(map);
      setLoaded(true);
    });
    fetch("/api/reviews", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data) return;
        setAvgRating(data.averageRating ?? 0);
        setReviewCount(data.totalCount ?? 0);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const modulesForStudiengang = modules.filter(
    (m) => m.studiengang === studiengang
  );
  const subjects = useMemo(
    () => Array.from(new Set(modulesForStudiengang.map((m) => m.subject))),
    [modulesForStudiengang]
  );
  const modulesForSubject = subject
    ? modulesForStudiengang.filter((m) => m.subject === subject)
    : [];

  const popularModules = modulesForStudiengang.filter((m) => m.popular);

  const visibleModules = subject
    ? modulesForSubject
    : showAll
    ? modulesForStudiengang
    : popularModules;

  function resetFilter() {
    setSubject(null);
    setShowAll(false);
  }

  const isCustomer = loaded && Object.values(accessMap).some(Boolean);

  // Nur echte, jederzeit nachrechenbare Kennzahlen aus den Modul-Daten —
  // keine fest eingetragenen Werbezahlen, die veralten oder unbelegt sind.
  const activeModuleCount = modules.filter((m) => m.status === "active").length;
  const totalQuestions = modules.reduce((sum, m) => sum + m.questionCount, 0);
  const cheapestPriceCent = Math.min(...modules.map((m) => m.priceCent));
  const referenceDiscount = Math.round(
    ((modules[0].compareAtCent - modules[0].priceCent) / modules[0].compareAtCent) * 100
  );

  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="grid grid-cols-1 items-center gap-10 pb-6 pt-2 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          {reviewCount > 0 && (
            <div className="mb-5 flex items-center gap-2">
              <Stars value={avgRating} size="text-base" />
              <span className="text-sm font-bold text-ink-600">
                {avgRating.toFixed(1)}/5 von {reviewCount}{" "}
                {reviewCount === 1 ? "Bewertung" : "Bewertungen"}
              </span>
            </div>
          )}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
            Bestehe deine Klausur — ohne im Skript zu ertrinken.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
            Skript, Übungsaufgaben und ein KI-Tutor, exakt zugeschnitten auf
            dein Modul und deine Prüfungsordnung. Kein Suchen, kein
            Rätselraten — nur der Stoff, der dran kommt.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a href="#modul-finder" className="btn-primary !px-7 !py-4 !text-base">
              Mein Modul finden ↓
            </a>
            <Link
              href="/module/statistik-1/skript"
              className="btn-secondary !px-6 !py-4 !text-base"
            >
              Beispielskript ansehen
            </Link>
          </div>
          <p className="mt-6 text-sm font-semibold text-orange-700">
            💡 Freund werben — du bekommst 1 Modul gratis
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-ink-100 shadow-card">
          <div className="flex h-64 items-center justify-center bg-[repeating-linear-gradient(135deg,#f1eee7,#f1eee7_12px,#e9e4d9_12px,#e9e4d9_24px)]">
            <span className="rounded-lg bg-white px-4 py-2 font-mono text-xs text-ink-500 shadow-sm">
              Vorschau: Skript-Seite / Übungsaufgabe
            </span>
          </div>
          <div className="flex items-center justify-between bg-white px-5 py-4">
            <span className="text-sm font-bold text-ink-500">
              Statistik I — Übungsaufgabe
            </span>
            <span className="text-sm font-bold text-emerald-700">
              ✓ Stoff der aktuellen Prüfungsordnung
            </span>
          </div>
        </div>
      </section>

      {/* ---------- Stats (echte, berechnete Zahlen) ---------- */}
      <div className="flex flex-wrap gap-x-12 gap-y-6 border-y border-ink-100 py-9">
        <div>
          <div className="text-2xl font-extrabold text-ink-900">
            {activeModuleCount} Module
          </div>
          <div className="text-sm text-ink-500">bereits verfügbar</div>
        </div>
        <div>
          <div className="text-2xl font-extrabold text-ink-900">
            {totalQuestions}+
          </div>
          <div className="text-sm text-ink-500">Übungsaufgaben insgesamt</div>
        </div>
        <div>
          <div className="text-2xl font-extrabold text-ink-900">
            ab {(cheapestPriceCent / 100).toLocaleString("de-DE", {
              style: "currency",
              currency: "EUR",
            })}
          </div>
          <div className="text-sm text-ink-500">statt 100–300 € im Kurs</div>
        </div>
        <div>
          <div className="text-2xl font-extrabold text-ink-900">
            Sofort startklar
          </div>
          <div className="text-sm text-ink-500">keine Wartelisten</div>
        </div>
      </div>

      {/* ---------- Modul-Finder ---------- */}
      <section id="modul-finder" className="scroll-mt-20 pt-14">
        <h2 className="mb-2 text-2xl font-extrabold text-ink-900">
          In 10 Sekunden zu deinem Modul
        </h2>
        <p className="mb-7 text-ink-500">
          Wähle Studiengang und Fach — wir zeigen dir nur, was für deine
          Prüfung zählt.
        </p>

        <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-sm">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-ink-400">
            Studiengang
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            {STUDIENGAENGE.map((sg) => (
              <button
                key={sg.name}
                disabled={!sg.active}
                onClick={() => {
                  if (!sg.active) return;
                  setStudiengang(sg.name);
                  resetFilter();
                }}
                className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                  !sg.active
                    ? "cursor-not-allowed border border-ink-100 text-ink-400"
                    : studiengang === sg.name
                    ? "bg-brand-600 text-white"
                    : "border border-ink-200 text-ink-700 hover:border-brand-300"
                }`}
              >
                {sg.name}
                {!sg.active && (
                  <span className="ml-1.5 text-xs font-medium">
                    bald verfügbar
                  </span>
                )}
              </button>
            ))}
          </div>

          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-ink-400">
            Fach
          </p>
          <div className="mb-5 flex flex-wrap gap-2">
            {subjects.map((s) => (
              <button
                key={s}
                onClick={() => setSubject(s)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                  subject === s
                    ? "bg-ink-900 text-white"
                    : "border border-ink-200 text-ink-700 hover:border-brand-300"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {subject && (
            <button
              onClick={resetFilter}
              className="text-sm font-semibold underline"
            >
              Filter zurücksetzen — alle Module anzeigen
            </button>
          )}
        </div>
      </section>

      {/* ---------- Modul-Grid ---------- */}
      <section className="pt-11">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-xl font-extrabold text-ink-900">
            {subject
              ? `Module für ${subject}`
              : showAll
              ? "Alle Module"
              : "Beliebteste Module"}
          </h2>
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
            🔥 -{referenceDiscount}% ggü. klassischen Vorbereitungskursen
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleModules.map((mod) => (
            <SalesModuleCard
              key={mod.slug}
              mod={mod}
              locked={loaded && mod.status === "active" && !accessMap[mod.slug]}
            />
          ))}
        </div>

        {!subject && !showAll && popularModules.length < modulesForStudiengang.length && (
          <div className="mt-7 text-center">
            <button onClick={() => setShowAll(true)} className="btn-secondary">
              Alle Module anzeigen
            </button>
          </div>
        )}

        {isCustomer && (
          <p className="mt-5 text-center text-sm text-ink-500">
            <Link href="/profile" className="font-semibold text-brand-700 hover:underline">
              💡 Freunde werben — 1 Modul gratis
            </Link>
          </p>
        )}
      </section>

      {/* ---------- Vergleich ---------- */}
      <section className="mt-16">
        <h2 className="mb-6 text-center text-2xl font-bold text-ink-900">
          Warum Lumo statt klassischer Vorbereitungskurse?
        </h2>
        <div className="card overflow-hidden">
          <div className="divide-y divide-ink-100 sm:hidden">
            {comparisonRows.map((row) => (
              <div key={row.feature} className="p-5">
                <p className="text-sm font-semibold text-ink-900">{row.feature}</p>
                <p className="mt-2 text-sm text-brand-700">
                  <span className="font-semibold">Lumo: </span>
                  {row.us}
                </p>
                <p className="mt-1 text-sm text-ink-600">
                  <span className="font-semibold">Klassische Kurse: </span>
                  {row.them}
                </p>
              </div>
            ))}
          </div>
          <table className="hidden w-full text-left text-sm sm:table">
            <thead className="bg-ink-50 text-ink-700">
              <tr>
                <th className="px-6 py-4 font-semibold">Kriterium</th>
                <th className="px-6 py-4 font-semibold text-brand-700">Lumo</th>
                <th className="px-6 py-4 font-semibold">Klassische Kurse</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-t border-ink-100">
                  <td className="px-6 py-4 font-medium text-ink-900">{row.feature}</td>
                  <td className="px-6 py-4 text-ink-700">{row.us}</td>
                  <td className="px-6 py-4 text-ink-600">{row.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Reviews />
    </div>
  );
}
