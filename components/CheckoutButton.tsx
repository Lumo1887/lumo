"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabaseClient";

export default function CheckoutButton({
  moduleSlug,
  label,
}: {
  moduleSlug: string;
  label?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);

  async function handleClick() {
    if (!consent) {
      setError("Bitte bestätige zuerst den Hinweis zum Widerrufsrecht.");
      return;
    }
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push(`/login?next=${encodeURIComponent(pathname)}`);
      return;
    }

    try {
      let referralCode: string | null = null;
      try {
        referralCode = window.localStorage.getItem("lumo_referral_code");
      } catch {
        // localStorage nicht verfügbar — Checkout läuft trotzdem, nur ohne
        // automatisch angewendeten Empfehlungscode.
      }

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          moduleSlug,
          withdrawalConsent: true,
          referralCode: referralCode || undefined,
        }),
      });
      const data = await res.json();

      if (data.requiresLogin) {
        router.push(`/login?next=${encodeURIComponent(pathname)}`);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
        return;
      }
      setError(data.error ?? "Checkout konnte nicht gestartet werden.");
    } catch (e) {
      setError("Verbindung zu Stripe fehlgeschlagen. Sind die API-Keys gesetzt?");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <label className="mb-3 flex items-start gap-2 text-xs text-ink-600">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5"
        />
        <span>
          Ich stimme ausdrücklich zu, dass Lumo mit der Bereitstellung der
          digitalen Inhalte vor Ablauf der Widerrufsfrist beginnt, und weiß,
          dass ich dadurch mein Widerrufsrecht verliere, sobald der Zugang
          freigeschaltet wurde (siehe{" "}
          <a href="/widerruf" target="_blank" className="underline">
            Widerrufsbelehrung
          </a>
          ).
        </span>
      </label>
      <button
        onClick={handleClick}
        disabled={loading || !consent}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Wird geladen …" : label ?? "Jetzt freischalten"}
      </button>
      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </div>
  );
}
