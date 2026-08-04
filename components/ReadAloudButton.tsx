"use client";

import { useReadAloud } from "@/lib/useReadAloud";

// Nutzt die kostenlose, im Browser eingebaute Sprachausgabe (Web Speech
// API) — keine externen API-Kosten, Stimme/Qualität hängt vom Gerät der
// Nutzer:innen ab. Ein Klick auf "Vorlesen" in einem anderen Abschnitt
// stoppt automatisch diesen hier (siehe lib/useReadAloud.ts).
export default function ReadAloudButton({ id, text }: { id: string; text: string }) {
  const { isActive, paused, supported, play, pause, resume, stop } = useReadAloud(id, text);

  if (!supported) return null;

  if (!isActive) {
    return (
      <button
        onClick={play}
        title="Abschnitt vorlesen lassen"
        className="inline-flex shrink-0 items-center gap-1 rounded-full border border-ink-200 px-3 py-1 text-xs font-medium text-ink-600 transition hover:border-brand-300 hover:text-brand-700"
      >
        🔊 Vorlesen
      </button>
    );
  }

  return (
    <span className="inline-flex shrink-0 items-center gap-1.5">
      <button
        onClick={paused ? resume : pause}
        className="inline-flex items-center gap-1 rounded-full border border-brand-300 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
      >
        {paused ? "▶ Weiter" : "⏸ Pause"}
      </button>
      <button
        onClick={stop}
        title="Vorlesen stoppen"
        className="inline-flex items-center rounded-full border border-ink-200 px-2.5 py-1 text-xs text-ink-600 hover:border-red-300 hover:text-red-600"
      >
        ⏹
      </button>
    </span>
  );
}
