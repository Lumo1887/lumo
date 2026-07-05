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

  async function handleClick() {
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
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ moduleSlug }),
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
      <button onClick={handleClick} disabled={loading} className="btn-primary w-full">
        {loading ? "Wird geladen …" : label ?? "Jetzt freischalten"}
      </button>
      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </div>
  );
}
