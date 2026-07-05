import type { Config } from "tailwindcss";

const config: Config = {
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
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
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
