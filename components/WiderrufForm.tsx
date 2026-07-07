"use client";

import { useState } from "react";
import { modules } from "@/lib/modules";

type Step = "form" | "confirm" | "done";

export default function WiderrufForm() {
  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [moduleSlug, setModuleSlug] = useState("");
  const [orderReference, setOrderReference] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const purchasableModules = modules.filter((m) => m.status === "active");
  const selectedModule = purchasableModules.find((m) => m.slug === moduleSlug);

  function handleContinue(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Bitte gib mindestens Namen und E-Mail-Adresse an.");
      return;
    }
    setError(null);
    setStep("confirm");
  }

  async function handleConfirm() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/widerruf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          moduleSlug: moduleSlug || undefined,
          orderReference: orderReference || undefined,
          message: message || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Widerruf konnte nicht übermittelt werden.");
        setSubmitting(false);
        return;
      }
      setStep("done");
    } catch {
      setError("Verbindung fehlgeschlagen. Bitte versuch es erneut oder schreib uns direkt eine E-Mail.");
    } finally {
      setSubmitting(false);
    }
  }

  if (step === "done") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-5 text-green-900">
        <p className="font-semibold">Dein Widerruf ist bei uns eingegangen.</p>
        <p className="mt-2 text-sm">
          Diese Bestätigung gilt als unmittelbare elektronische
          Eingangsbestätigung deines Widerrufs. Zusätzlich erhältst du in
          Kürze eine Bestätigungs-E-Mail an <strong>{email}</strong>. Wir
          bearbeiten deinen Widerruf und zahlen bereits geleistete
          Zahlungen unverzüglich, spätestens innerhalb von 14 Tagen,
          zurück.
        </p>
      </div>
    );
  }

  return (
    <div id="formular" className="rounded-xl border border-ink-100 bg-white p-5 sm:p-6">
      {step === "form" && (
        <form onSubmit={handleContinue} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-ink-700">Name *</span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-ink-700">
                E-Mail-Adresse (die beim Kauf verwendet wurde) *
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
              />
            </label>
          </div>

          <label className="block text-sm">
            <span className="mb-1 block font-medium text-ink-700">
              Betroffenes Modul (falls bekannt)
            </span>
            <select
              value={moduleSlug}
              onChange={(e) => setModuleSlug(e.target.value)}
              className="w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
            >
              <option value="">— bitte auswählen —</option>
              {purchasableModules.map((m) => (
                <option key={m.slug} value={m.slug}>
                  {m.title}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm">
            <span className="mb-1 block font-medium text-ink-700">
              Kaufdatum bzw. Bestellreferenz (optional)
            </span>
            <input
              type="text"
              value={orderReference}
              onChange={(e) => setOrderReference(e.target.value)}
              placeholder="z. B. ungefähres Kaufdatum"
              className="w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
            />
          </label>

          <label className="block text-sm">
            <span className="mb-1 block font-medium text-ink-700">
              Nachricht (optional)
            </span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
            />
          </label>

          {error && <p className="text-xs text-red-600">{error}</p>}

          <button type="submit" className="btn-primary">
            Weiter zur Bestätigung
          </button>
        </form>
      )}

      {step === "confirm" && (
        <div>
          <p className="text-sm text-ink-700">
            Bitte prüfe deine Angaben. Mit Klick auf &bdquo;Vertrag jetzt
            widerrufen&ldquo; erklärst du den Widerruf verbindlich.
          </p>
          <div className="mt-4 space-y-1 rounded-lg bg-ink-50 p-4 text-sm text-ink-700">
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>E-Mail:</strong> {email}
            </p>
            <p>
              <strong>Modul:</strong>{" "}
              {selectedModule ? selectedModule.title : "nicht angegeben"}
            </p>
            {orderReference && (
              <p>
                <strong>Kaufdatum/Referenz:</strong> {orderReference}
              </p>
            )}
            {message && (
              <p>
                <strong>Nachricht:</strong> {message}
              </p>
            )}
          </div>

          {error && <p className="mt-3 text-xs text-red-600">{error}</p>}

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={() => setStep("form")}
              className="btn-secondary"
              disabled={submitting}
            >
              Zurück
            </button>
            <button
              onClick={handleConfirm}
              disabled={submitting}
              className="btn-primary"
            >
              {submitting ? "Wird gesendet …" : "Vertrag jetzt widerrufen"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
