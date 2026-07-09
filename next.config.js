/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Frühere Versuche, die Formel-PNG-Generierung in Produktion zum Laufen zu
  // bringen (Font-Fix, outputFileTracingIncludes für die plattform-
  // spezifischen "@resvg/resvg-js-*"-Binärdateien), haben laut Rückmeldung
  // nicht gereicht — die Formeln erschienen weiter nur als Text. Statt
  // weiter an der nativen Binärdatei herumzukonfigurieren, wurde deshalb auf
  // "@resvg/resvg-wasm" umgestellt (siehe lib/pdf/renderLatex.ts): eine
  // einzige plattformunabhängige .wasm-Datei ohne Betriebssystem-/
  // Architektur-Fallunterscheidung zur Laufzeit. outputFileTracingIncludes
  // bleibt hier als zusätzliche Absicherung bestehen, damit diese eine
  // .wasm-Datei sicher im ausgelieferten Funktionsbündel landet.
  experimental: {
    serverComponentsExternalPackages: ["@resvg/resvg-wasm", "mathjax-full"],
    outputFileTracingIncludes: {
      "/api/*": ["./node_modules/@resvg/resvg-wasm/**/*"],
    },
  },
};
module.exports = nextConfig;
