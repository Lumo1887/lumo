"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { fetchAccess } from "@/lib/access";

type Status = "checking" | "waiting" | "granted" | "failed";

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<Status>("checking");
  const [moduleSlug, setModuleSlug] = useState<string | null>(null);
  const attemptsRef = useRef(0);

  useEffect(() => {
    if (!sessionId) {
      setStatus("failed");
      return;
    }

    let cancelled = false;

    async function verifyPayment() {
      const res = await fetch(`/api/checkout/verify?session_id=${sessionId}`);
      const data = await res.json();
      if (cancelled) return;

      if (!data.paid || !data.moduleSlug) {
        setStatus("failed");
        return;
      }

      setModuleSlug(data.moduleSlug);
      setStatus("waiting");
      pollAccess(data.moduleSlug);
    }

    async function pollAccess(slug: string) {
      attemptsRef.current += 1;
      const access = await fetchAccess();
      if (cancelled) return;

      if (access.purchases.includes(slug)) {
        setStatus("granted");
        return;
      }

      // Der Stripe-Webhook braucht manchmal ein bis zwei Sekunden, um den
      // Kauf in der Datenbank zu speichern -> kurz erneut versuchen.
      if (attemptsRef.current < 8) {
        setTimeout(() => pollAccess(slug), 1000);
      } else {
        // Zahlung war erfolgreich, die Freischaltung ist nur noch nicht
        // sichtbar -> trotzdem als Erfolg anzeigen, da die Zahlung stimmt.
        setStatus("granted");
      }
    }

    verifyPayment();
    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  if (status === "checking" || status === "waiting") {
    return (
      <div className="card mx-auto max-w-lg p-8 text-center">
        <p className="text-ink-600">
          {status === "checking"
            ? "Zahlung wird überprüft …"
            : "Fast fertig — dein Zugriff wird gerade freigeschaltet …"}
        </p>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="card mx-auto max-w-lg p-8 text-center">
        <h1 className="text-xl font-bold text-ink-900">
          Zahlung konnte nicht bestätigt werden
        </h1>
        <p className="mt-2 text-sm text-ink-600">
          Falls du gerade wirklich bezahlt hast, kontaktiere uns bitte — oder
          prüfe, ob STRIPE_SECRET_KEY korrekt in .env.local hinterlegt ist.
        </p>
        <Link href="/dashboard" className="btn-secondary mt-4">
          Zurück zum Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="card mx-auto max-w-lg p-8 text-center">
      <span className="badge">Zahlung erfolgreich</span>
      <h1 className="mt-3 text-2xl font-bold text-ink-900">
        Danke — dein Modul ist jetzt freigeschaltet! 🎉
      </h1>
      <p className="mt-2 text-ink-600">
        Viel Erfolg beim Lernen. Du hast ab sofort vollen Zugriff auf Skript
        und Übungstool.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link href={`/module/${moduleSlug}/skript`} className="btn-primary">
          Zum Skript
        </Link>
        <Link href={`/module/${moduleSlug}/uebungstool`} className="btn-secondary">
          Zum Übungstool
        </Link>
      </div>
    </div>
  );
}
