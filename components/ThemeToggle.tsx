"use client";

import { useEffect, useState } from "react";

// Schlüssel, unter dem die Wahl in localStorage gespeichert wird — muss mit
// dem Inline-Script in app/layout.tsx übereinstimmen (verhindert Flackern
// beim Seitenaufbau, siehe Kommentar dort).
const STORAGE_KEY = "lumo-theme";

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark);
}

// Sonne/Mond-Umschalter für den globalen Darkmode. Liest beim Mounten den
// aktuellen Zustand von <html class="dark"> aus (der schon vom Anti-FOUC-
// Script in app/layout.tsx gesetzt wurde, bevor React überhaupt lädt) statt
// selbst zu entscheiden — so bleibt eine einzige Quelle der Wahrheit.
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    applyTheme(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // localStorage kann in seltenen Fällen (z. B. privates Browsing mit
      // strikten Einstellungen) nicht verfügbar sein — dann wirkt der
      // Toggle nur für die aktuelle Seite, ohne die Sitzung zu blockieren.
    }
  }

  // Vor dem Mounten keinen falschen Icon-Zustand anzeigen (Server weiß nicht,
  // was der Client-localStorage enthält) — ein neutraler Platzhalter reicht.
  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Zu hellem Modus wechseln" : "Zu dunklem Modus wechseln"}
      title={isDark ? "Hell" : "Dunkel"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition hover:border-brand-300 hover:text-brand-700"
    >
      {isDark ? (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
