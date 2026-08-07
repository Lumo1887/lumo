import type { Config } from "tailwindcss";

const config: Config = {
  // Klassenbasierter Darkmode statt "media" (prefers-color-scheme): so kann
  // der Toggle-Button in der Navbar die Einstellung überschreiben und in
  // localStorage merken, statt blind dem Betriebssystem zu folgen — siehe
  // components/ThemeToggle.tsx und das Anti-FOUC-Script in app/layout.tsx.
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        // "ink" liest jetzt aus CSS-Variablen (--ink-50 … --ink-900, definiert
        // in app/globals.css unter :root bzw. .dark) statt aus festen Hex-
        // Werten. Dadurch passen sich ALLE bestehenden text-ink-*/bg-ink-*/
        // border-ink-* Klassen im gesamten Code automatisch an den Darkmode
        // an, ohne dass jede einzelne Stelle im Code angefasst werden muss —
        // einzige Ausnahme: Bereiche mit der Klasse "paper-scope" (Skript-
        // Lesetext, Klausur-Deckblatt) setzen die Variablen lokal wieder auf
        // die hellen Werte zurück, siehe globals.css.
        ink: {
          50: "rgb(var(--ink-50) / <alpha-value>)",
          100: "rgb(var(--ink-100) / <alpha-value>)",
          200: "rgb(var(--ink-200) / <alpha-value>)",
          600: "rgb(var(--ink-600) / <alpha-value>)",
          700: "rgb(var(--ink-700) / <alpha-value>)",
          800: "rgb(var(--ink-800) / <alpha-value>)",
          900: "rgb(var(--ink-900) / <alpha-value>)",
        },
      },
      borderRadius: {
        xl2: "1.5rem",
        xl3: "2rem",
      },
      boxShadow: {
        // Dezenter, neutraler Basis-Schatten (statt kräftigem Lila-Ton) —
        // wirkt als flache, moderne Elevation statt als farbiger "Glow".
        soft: "0 10px 30px -14px rgba(15, 23, 42, 0.18)",
        // Card-Schatten: zwei neutrale Ebenen für Tiefe, keine Farbsättigung.
        // Ersetzt den vorherigen, sehr kräftigen Lila-Schatten, der auf
        // modernen Referenzseiten (Linear, Vercel) eher gedämpft/neutral ist.
        card: "0 20px 45px -28px rgba(15, 23, 42, 0.30), 0 2px 10px -4px rgba(15, 23, 42, 0.10)",
        // Leuchtender Hover-Schatten (z. B. für Modul-Karten & primäre
        // Buttons) — bewusst schwächer/kleiner als vorher, damit er als
        // Akzent statt als dominanter Effekt wirkt.
        glow: "0 0 0 1px rgba(139, 92, 246, 0.16), 0 18px 38px -16px rgba(139, 92, 246, 0.38)",
      },
    },
  },
  plugins: [],
};
export default config;
