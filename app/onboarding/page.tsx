import OnboardingFlow from "@/components/OnboardingFlow";

export default function OnboardingPage() {
  return (
    <div>
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
          Kurzer Eingangs-Check
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-ink-600">
          3 kurze Fragen, damit wir dir die richtigen Kapitel und Übungen
          zuerst zeigen.
        </p>
      </div>
      <OnboardingFlow />
    </div>
  );
}
