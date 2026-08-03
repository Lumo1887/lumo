"use client";

import { useState } from "react";

// Ersetzt den früher rein statischen Text "Trag dich für Updates ein." auf
// noch nicht verfügbaren Modul-Karten (ModuleCard.tsx / SalesModuleCard.tsx)
// durch ein tatsächlich funktionierendes Eintragungsformular. Kompakt genug,
// um innerhalb der bestehenden Kartenfläche Platz zu finden.
export default function ModuleInterestForm({ moduleSlug }: { moduleSlug: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    e.stopPropagation();
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/module-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ moduleSlug, email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Eintragen fehlgeschlagen.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError("Verbindung fehlgeschlagen. Bitte später erneut versuchen.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm font-medium text-brand-700">
        ✓ Danke! Wir schreiben dir, sobald es verfügbar ist.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onClick={(e) => e.stopPropagation()}
      className="flex w-full items-center gap-2"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Deine E-Mail"
        className="min-w-0 flex-1 rounded-full border border-ink-200 bg-ink-50 px-3 py-1.5 text-xs text-ink-900 placeholder:text-ink-600 outline-none focus:border-brand-400"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 rounded-full bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "…" : "Eintragen"}
      </button>
      {error && <p className="w-full text-xs text-red-600">{error}</p>}
    </form>
  );
}
