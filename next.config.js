/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // @resvg/resvg-js enthält ein natives Binär-Modul (.node-Datei) für die
  // PDF-Formel-Generierung. Ohne diese Einstellung versucht Next.js beim
  // Build, diese Datei fälschlicherweise als normalen JavaScript-Code zu
  // bündeln, was den Build zum Absturz bringt. Diese Option sorgt dafür,
  // dass das Paket zur Laufzeit ganz normal über node_modules geladen wird.
  experimental: {
    serverComponentsExternalPackages: ["@resvg/resvg-js", "mathjax-full"],
    // Vermutete Ursache dafür, dass Formeln in den PDFs nie als echtes Bild
    // (mit Bruchstrich usw.) erscheinen, sondern immer nur als Rohtext-
    // Fallback: @resvg/resvg-js wählt sein natives Binär-Modul erst zur
    // Laufzeit passend zur Plattform aus (z. B.
    // "@resvg/resvg-js-linux-x64-gnu" auf Vercel). Next.js' Datei-Tracing
    // beim Deployment erkennt diese erst zur Laufzeit aufgelöste Abhängigkeit
    // oft nicht automatisch und lässt sie aus dem ausgelieferten
    // Funktionsbündel weg — dadurch schlägt renderLatexToPng() in Produktion
    // fehl (lokal im Dev-Modus dagegen nicht, weil dort direkt aus
    // node_modules geladen wird). outputFileTracingIncludes zwingt Next.js,
    // die passenden nativen Binärdateien trotzdem mit einzupacken.
    outputFileTracingIncludes: {
      "/api/*": [
        "./node_modules/@resvg/resvg-js-linux-x64-gnu/**/*",
        "./node_modules/@resvg/resvg-js-linux-x64-musl/**/*",
        "./node_modules/@resvg/resvg-js-linux-arm64-gnu/**/*",
        "./node_modules/@resvg/resvg-js-linux-arm64-musl/**/*",
      ],
    },
  },
};
module.exports = nextConfig;
