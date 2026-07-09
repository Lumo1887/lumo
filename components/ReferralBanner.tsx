"use client";

import { useEffect, useState } from "react";

/**
 * Kompakte Karte mit dem persönlichen Empfehlungscode — lebt auf der
 * Profilseite (immer eingeloggt), nicht mehr auf dem Dashboard: dort wirkte
 * sie zu groß/prominent neben der eigentlichen Modul-Auswahl. Der Code wird
 * beim ersten Aufruf automatisch angelegt (siehe app/api/referral/code/route.ts).
 */
export default function ReferralBanner() {
  const [code, setCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/referral/code")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.code) setCode(data.code);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const link = code
    ? `${typeof window !== "undefined" ? window.location.origin : ""}/?ref=${code}`
    : null;

  function handleCopy() {
    if (!link) return;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  }

  return (
    <div className="card mt-6 p-5">
      <h2 className="text-base font-bold text-ink-900">Freunde werben</h2>
      <p className="mt-1 text-sm text-ink-600">
        Dein Freund/deine Freundin bekommt 20 % Rabatt, du danach selbst einen
        20 %-Code fürs nächste Modul.
      </p>
      {code ? (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <code className="rounded-lg border border-ink-200 bg-ink-50 px-3 py-1.5 text-sm font-semibold tracking-wide text-brand-700">
            {code}
          </code>
          <button onClick={handleCopy} className="btn-secondary !px-3 !py-1.5 text-xs">
            {copied ? "Link kopiert ✓" : "Link kopieren"}
          </button>
        </div>
      ) : (
        <div className="mt-3 h-8 w-40 animate-pulse rounded-lg bg-ink-100" />
      )}
    </div>
  );
}
