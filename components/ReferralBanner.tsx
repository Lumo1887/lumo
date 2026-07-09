"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Banner im Dashboard: zeigt den persönlichen Empfehlungscode und einen
 * Teilen-Link. Für eingeloggte Nutzer:innen wird der Code beim ersten
 * Aufruf automatisch angelegt (siehe app/api/referral/code/route.ts).
 */
export default function ReferralBanner({ loggedIn }: { loggedIn: boolean }) {
  const [code, setCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!loggedIn) return;
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
  }, [loggedIn]);

  if (!loggedIn) {
    return (
      <div className="card mb-8 flex flex-wrap items-center justify-between gap-3 p-5">
        <p className="text-sm text-ink-700">
          <span className="font-semibold text-ink-900">Freunde werben, beide sparen: </span>
          Meld dich an, um deinen persönlichen Empfehlungscode zu bekommen — ihr
          bekommt beide 20 % Rabatt.
        </p>
        <Link href="/login" className="btn-secondary shrink-0 !px-4 !py-2 text-sm">
          Anmelden
        </Link>
      </div>
    );
  }

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
    <div className="card mb-8 p-5">
      <p className="text-sm font-semibold text-ink-900">
        Freunde werben, beide sparen 🎉
      </p>
      <p className="mt-1 text-sm text-ink-600">
        Teile deinen Code — dein Freund/deine Freundin bekommt 20 % Rabatt auf
        das erste Modul, und du bekommst danach selbst einen 20%-Code fürs
        nächste.
      </p>
      {code ? (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <code className="rounded-lg border border-ink-200 bg-ink-50 px-3 py-2 text-sm font-semibold tracking-wide text-brand-700">
            {code}
          </code>
          <button onClick={handleCopy} className="btn-secondary !px-4 !py-2 text-sm">
            {copied ? "Link kopiert ✓" : "Link kopieren"}
          </button>
        </div>
      ) : (
        <div className="mt-3 h-10 w-48 animate-pulse rounded-lg bg-ink-100" />
      )}
    </div>
  );
}
