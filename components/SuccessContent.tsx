"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { grantAccess } from "@/lib/access";

type Status = "checking" | "granted" | "failed";

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<Status>("checking");
  const [moduleSlug, setModuleSlug] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setStatus("failed");
      return;
    }

    fetch(`/api/checkout/verify?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.paid && data.moduleSlug) {
          grantAccess(data.moduleSlug);
          setModuleSlug(data.moduleSlug);
          setStatus("granted");
        } else {
          setStatus("failed");
        }
      })
      .catch(() => setStatus("failed"));
  }, [sessionId]);

  if (status === "checking") {
    return (
      <div className="card mx-auto max-w-lg p-8 text-center">
        <p className="text-ink-600">Zahlung wird überprüft …</p>
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
        <Link href="/module" className="btn-secondary mt-4">
          Zurück zu den Modulen
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
