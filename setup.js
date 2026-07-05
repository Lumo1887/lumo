/**
 * setup.js
 * ---------------------------------------------------------------------------
 * Dieses Projekt wurde in einer Umgebung erzeugt, in der keine Unterordner
 * angelegt werden konnten. Deshalb liegen alle Next.js-Dateien zunächst FLACH
 * im Projektordner, wobei "__" im Dateinamen einen Ordner-Trenner ("/")
 * darstellt, z. B.:
 *
 *   app__module__statistik-1__page.tsx  ->  app/module/statistik-1/page.tsx
 *
 * Dieses Skript läuft automatisch nach "npm install" (siehe "postinstall" in
 * package.json) und sortiert alle Dateien einmalig in die korrekte
 * Next.js-Ordnerstruktur ein. Es ist idempotent: Läuft es mehrfach, passiert
 * beim zweiten Mal nichts mehr.
 */

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;

// Wenn app/layout.tsx bereits existiert, wurde die Reorganisation schon
// durchgeführt -> nichts mehr zu tun.
if (fs.existsSync(path.join(ROOT, "app", "layout.tsx"))) {
  console.log("[setup.js] Projektstruktur bereits eingerichtet. Überspringe.");
  process.exit(0);
}

const IGNORE_DIRS = new Set(["node_modules", ".git", ".next", "out", "build"]);

const entries = fs.readdirSync(ROOT, { withFileTypes: true });

let moved = 0;

for (const entry of entries) {
  if (!entry.isFile()) continue;
  const name = entry.name;

  if (name === "setup.js") continue;
  if (!name.includes("__")) continue; // Dateien ohne "__" bleiben, wo sie sind

  const segments = name.split("__");
  const destRelative = path.join(...segments);
  const destPath = path.join(ROOT, destRelative);
  const destDir = path.dirname(destPath);

  fs.mkdirSync(destDir, { recursive: true });
  fs.renameSync(path.join(ROOT, name), destPath);
  moved++;
  console.log(`[setup.js] ${name}  ->  ${destRelative}`);
}

console.log(`[setup.js] Fertig. ${moved} Dateien einsortiert.`);
