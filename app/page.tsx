"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import OnboardingFlow from "@/components/OnboardingFlow";
import { loadOnboardingAnswers } from "@/lib/onboarding";

export default function HomePage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const existing = loadOnboardingAnswers();
    if (existing) {
      router.replace("/dashboard");
    } else {
      setReady(true);
    }
  }, [router]);

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
          Damit wir dir direkt die richtigen Kapitel und Übungen empfehlen
          können.
        </p>
      </div>
      <OnboardingFlow />
    </div>
  );
}
