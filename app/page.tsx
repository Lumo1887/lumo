"use client";

// Verhindert, dass Next.js diese Seite clientseitig cached und bei
// Zurück/Vor-Navigation einen alten (leeren) Render-Zustand erneut anzeigt,
// ohne den Code neu auszuführen — das war die Ursache der dauerhaft weißen
// Seite beim Zurück-Navigieren.
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import OnboardingFlow from "@/components/OnboardingFlow";
import { loadOnboardingAnswers } from "@/lib/onboarding";

export default function HomePage() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const existing = loadOnboardingAnswers();
    if (existing) {
      window.location.replace("/dashboard");
    } else {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    function handlePageShow(event: PageTransitionEvent) {
      if (event.persisted) {
        window.location.reload();
      }
    }
    function handlePopState() {
      window.location.reload();
    }
    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  if (!ready) {
    // Kurzer leerer Frame, während geprüft wird, ob der Fragebogen schon
    // ausgefüllt wurde (verhindert ein kurzes Aufblitzen des Fragebogens).
    return <div className="h-64" />;
  }

  return (
    <div>
      <div className="mb-10 text-center">
        <span className="badge">Willkommen bei Lumo</span>
        <h1 className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-4xl">
          Bevor es losgeht: 3 kurze Fragen
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-ink-600">
          Damit wir dir direkt die richtigen Kapitel und Übungen empfehlen können.
        </p>
      </div>
      <OnboardingFlow />
    </div>
  );
}
