"use client";

import { useEffect, useMemo, useState } from "react";

export interface ReferralBannerModule {
  slug: string;
  title: string;
  status: string;
}

/**
 * Kompakte Karte mit dem persönlichen Empfehlungscode + Guthabenstand.
 * Lebt auf der Profilseite (immer eingeloggt). Ein Guthaben entsteht, wenn
 * ein Freund über den eigenen Link zum vollen Preis kauft (siehe
 * app/api/webhooks/stripe/route.ts) und lässt sich hier gegen ein beliebiges,
 * noch nicht gekauftes Modul einlösen (app/api/referral/redeem/route.ts) —
 * komplett kostenlos, kein Stripe-Checkout nötig.
 */
export default function ReferralBanner({
  allModules,
  ownedSlugs,
  onRedeemed,
}: {
  allModules: ReferralBannerModule[];
  ownedSlugs: string[];
  onRedeemed?: () => void;
}) {
  const [code, setCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [credits, setCredits] = useState<number | null>(null);
  const [selectedSlug, setSelectedSlug] = useState("");
  const [redeeming, setRedeeming] = useState(false);
  const [redeemError, setRedeemError] = useState<string | null>(null);
  const [redeemedTitle, setRedeemedTitle] = useState<string | null>(null);

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

  function refreshCredits() {
    fetch("/api/referral/credits")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (typeof data?.credits === "number") setCredits(data.credits);
      })
      .catch(() => {});
  }

  useEffect(refreshCredits, []);

  const redeemableModules = useMemo(
    () => allModules.filter((m) => m.status === "active" && !ownedSlugs.includes(m.slug)),
    [allModules, ownedSlugs]
  );

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

  async function handleRedeem() {
    if (!selectedSlug) return;
    setRedeeming(true);
    setRedeemError(null);
    try {
      const res = await fetch("/api/referral/redeem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ moduleSlug: selectedSlug }),
      });
      const data = await res.json();
      if (!res.ok) {
        setRedeemError(data.error ?? "Konnte nicht eingelöst werden.");
        return;
      }
      setRedeemedTitle(
        allModules.find((m) => m.slug === selectedSlug)?.title ?? selectedSlug
      );
      setSelectedSlug("");
      refreshCredits();
      onRedeemed?.();
    } catch {
      setRedeemError("Verbindung fehlgeschlagen. Bitte versuch es erneut.");
    } finally {
      setRedeeming(false);
    }
  }

  return (
    <div className="card mt-6 p-5">
      <h2 className="text-base font-bold text-ink-900">Freunde werben</h2>
      <p className="mt-1 text-sm text-ink-600">
        Teile deinen Link — für jeden Freund, der darüber (zum vollen Preis)
        kauft, bekommst du 1 komplettes Modul deiner Wahl gratis.
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

      {credits !== null && credits > 0 && (
        <div className="mt-4 rounded-lg bg-brand-50 p-4">
          <p className="text-sm font-semibold text-brand-800">
            🎉 Du hast {credits} {credits === 1 ? "Guthaben" : "Guthaben"} — wähl
            ein Modul zum Freischalten:
          </p>
          {redeemedTitle && (
            <p className="mt-2 text-sm font-medium text-green-700">
              "{redeemedTitle}" wurde freigeschaltet ✓
            </p>
          )}
          {redeemableModules.length > 0 ? (
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <select
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="rounded-lg border border-ink-200 px-3 py-1.5 text-sm focus:border-brand-500 focus:outline-none"
              >
                <option value="">Modul auswählen…</option>
                {redeemableModules.map((m) => (
                  <option key={m.slug} value={m.slug}>
                    {m.title}
                  </option>
                ))}
              </select>
              <button
                onClick={handleRedeem}
                disabled={!selectedSlug || redeeming}
                className="btn-primary !px-4 !py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              >
                {redeeming ? "Wird eingelöst …" : "Gratis freischalten"}
              </button>
            </div>
          ) : (
            <p className="mt-2 text-sm text-ink-600">
              Du hast bereits alle verfügbaren Module — dein Guthaben bleibt
              erhalten, bis es ein neues Modul zum Einlösen gibt.
            </p>
          )}
          {redeemError && <p className="mt-2 text-xs text-red-600">{redeemError}</p>}
        </div>
      )}
    </div>
  );
}
