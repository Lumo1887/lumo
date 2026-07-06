"use client";

import { useEffect, useState } from "react";
import { modules } from "@/lib/modules";
import ModuleCard from "@/components/ModuleCard";
import { fetchAccess } from "@/lib/access";

const comparisonRows = [
  {
    feature: "Preis",
    us: "ab 7,99 € pro Modul",
    them: "oft 100–300 € pro Kurs",
  },
  {
    feature: "Skript",
    us: "Digital, jederzeit abrufbar, auf Vorlesungsinhalt aufgebaut",
    them: "Häufig nur als Papier-Skript oder zeitlich begrenzt verfügbar",
  },
  {
    feature: "Übungsaufgaben",
    us: "Interaktives Tool mit sofortigem Feedback, aus Tutorien & Klausuren",
    them: "Feste Kurstermine, wenig individuelles Feedback",
  },
  {
    feature: "Verfügbarkeit",
    us: "24/7, in deinem eigenen Tempo",
    them: "An feste Termine gebunden",
  },
  {
    feature: "Personalisierung",
    us: "Empfehlung nach kurzem Eingangs-Check",
    them: "Einheitliches Programm für alle",
  },
];

export default function DashboardPage() {
  const [accessMap, setAccessMap] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

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
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <div className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
          Dein Dashboard
        </h1>
        <p className="mt-3 text-ink-600">
          Wähle ein Modul. Gekaufte Module sind vollständig freigeschaltet —
          bei den anderen kannst du zuerst eine kostenlose Vorschau ansehen.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod) => (
          <ModuleCard
            key={mod.slug}
            mod={mod}
            locked={loaded && mod.status === "active" && !accessMap[mod.slug]}
          />
        ))}
      </div>

      <section className="mt-16">
        <h2 className="mb-6 text-center text-2xl font-bold text-ink-900">
          Warum Lumo statt klassischer Vorbereitungskurse?
        </h2>

        <div className="card overflow-hidden">
          {/* Mobile: gestapelte Karten statt Tabelle — eine Tabelle mit
              mehreren Textspalten passt auf schmalen Bildschirmen nicht und
              wurde dort abgeschnitten. */}
          <div className="divide-y divide-ink-100 sm:hidden">
            {comparisonRows.map((row) => (
              <div key={row.feature} className="p-5">
                <p className="text-sm font-semibold text-ink-900">
                  {row.feature}
                </p>
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

          {/* Ab sm-Breakpoint (Tablet/Desktop): normale Tabelle */}
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
                  <td className="px-6 py-4 font-medium text-ink-900">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-ink-700">{row.us}</td>
                  <td className="px-6 py-4 text-ink-600">{row.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
