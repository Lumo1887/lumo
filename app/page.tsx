"use client";

import { useEffect, useState } from "react";
import OnboardingFlow from "@/components/OnboardingFlow";
import { loadOnboardingAnswers } from "@/lib/onboarding";

export default function HomePage() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const existing = loadOnboardingAnswers();
    if (existing) {
      // Echte Browser-Weiterleitung statt next/navigation-Router: das
      // umgeht Next.js' internes Routing/Caching, das bei einer per
      // Zurück-Button ausgelösten Navigation zu dieser Seite manchmal
      // hängen bleibt und die Seite dauerhaft weiß lässt.
      window.location.replace("/dashboard");
    } else {
      setReady(true);
    }
  }, []);

  // Zusätzliche Absicherung: Falls der Browser diese Seite per
  // Zurück/Vor-Button aus seinem eigenen Cache (bfcache) wiederherstellt,
  // erzwingt das einen echten Reload, damit die Prüfung oben erneut läuft.
  useEffect(() => {
    function handlePageShow(event: PageTransitionEvent) {
      if (event.persisted) {
        window.location.reload();
      }
    }
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
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
