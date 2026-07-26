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
        xl2: "1.25rem",
      },
      boxShadow: {
        // Basis-Schatten für Karten (dezent)
        soft: "0 10px 40px -12px rgba(76, 29, 149, 0.25)",
        // Kräftigerer, moderner Schatten mit zwei Ebenen für mehr Tiefe
        card: "0 25px 50px -12px rgba(76, 29, 149, 0.30), 0 10px 25px -10px rgba(15, 23, 42, 0.18)",
        // Leuchtender Hover-Schatten (z. B. für Modul-Karten & Buttons)
        glow: "0 0 0 1px rgba(139, 92, 246, 0.18), 0 30px 55px -15px rgba(139, 92, 246, 0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
