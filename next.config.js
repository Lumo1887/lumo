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
  },
};
module.exports = nextConfig;
