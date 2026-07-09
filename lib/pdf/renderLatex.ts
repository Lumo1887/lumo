import { mathjax } from "mathjax-full/js/mathjax.js";
import { TeX } from "mathjax-full/js/input/tex.js";
import { SVG } from "mathjax-full/js/output/svg.js";
import { liteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor.js";
import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html.js";
import { AllPackages } from "mathjax-full/js/input/tex/AllPackages.js";
import { Resvg, initWasm } from "@resvg/resvg-wasm";
import fs from "node:fs";
import path from "node:path";

// Einmalige MathJax-Initialisierung (wird für alle Formeln einer laufenden
// Serverless-Function-Instanz wiederverwendet, statt bei jedem Aufruf neu
// aufgebaut zu werden).
const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);
const tex = new TeX({ packages: AllPackages });
const svgOutput = new SVG({ fontCache: "none" });
const mathDocument = mathjax.document("", { InputJax: tex, OutputJax: svgOutput });

// MathJax gibt Breite/Höhe in "ex"-Einheiten aus. Wir legen hier fest, wie
// viel Pixel ein "ex" entsprechen soll, damit wir daraus zuverlässig
// absolute Pixelwerte machen können (statt uns auf die CSS-Interpretation
// von "ex" durch den SVG-Renderer zu verlassen).
const PX_PER_EX = 8;

// Zusätzlicher Supersampling-Faktor für ein knackscharfes Ergebnis im PDF.
const SUPERSAMPLE = 4;

// Empirischer Umrechnungsfaktor von gerenderten PNG-Pixeln zu PDF-Punkten
// (bei Bedarf leicht anpassbar, falls Formeln zu groß/klein wirken).
export const PDF_FORMULA_POINTS_PER_PIXEL = 0.22;

// Hinweis: Vorher wurde hier "@resvg/resvg-js" (natives Rust-Binärmodul,
// plattformspezifisch, z. B. "@resvg/resvg-js-linux-x64-gnu") verwendet.
// Dieses Paket wird von Node/npm zwar korrekt installiert, aber Next.js'
// Datei-Tracing beim Vercel-Deployment hat die zur Laufzeit dynamisch
// ausgewählte native Datei nicht zuverlässig ins ausgelieferte
// Funktionsbündel übernommen — dadurch schlug renderLatexToPng() in
// Produktion fehl (lokal im Dev-Modus dagegen nicht) und alle Formeln
// zeigten nur den Text-Fallback statt eines echten Bildes.
//
// "@resvg/resvg-wasm" ist dieselbe Bibliothek, aber als WebAssembly kompiliert
// — eine einzige, plattformunabhängige .wasm-Datei ohne jede
// Architektur-/Betriebssystem-Fallunterscheidung zur Laufzeit. Das eliminiert
// dieses ganze Problemfeld, statt es nur zu umgehen.
let wasmInitPromise: Promise<void> | null = null;
function ensureWasmInitialized(): Promise<void> {
  if (!wasmInitPromise) {
    wasmInitPromise = (async () => {
      // Bewusst NICHT "require.resolve('@resvg/resvg-wasm/index_bg.wasm')":
      // Webpack (Next.js' Bundler) erkennt einen solchen statisch
      // auflösbaren Require-Aufruf und versucht, die .wasm-Binärdatei selbst
      // als JavaScript-Modul zu bündeln/parsen — das lässt den Build mit
      // "Module parse failed: Unexpected character" abstürzen. Der Pfad wird
      // deshalb erst zur Laufzeit aus "process.cwd()" zusammengesetzt, was
      // für Webpack nicht statisch analysierbar ist und daher nicht gebündelt
      // wird — die Datei wird stattdessen ganz normal über "fs" zur Laufzeit
      // aus node_modules gelesen.
      const wasmPath = path.join(
        process.cwd(),
        "node_modules",
        "@resvg",
        "resvg-wasm",
        "index_bg.wasm"
      );
      const wasmBuffer = fs.readFileSync(wasmPath);
      await initWasm(wasmBuffer);
    })().catch((err) => {
      // initWasm wirft beim zweiten Aufruf innerhalb derselben
      // Serverless-Instanz einen Fehler ("Already initialized") — das ist
      // unschädlich (das WASM-Modul ist dann schon einsatzbereit), daher
      // hier gezielt abgefangen statt als echten Fehler weiterzureichen.
      if (!/already initialized/i.test(String(err?.message ?? err))) {
        throw err;
      }
    });
  }
  return wasmInitPromise;
}

function toAbsoluteSvgUnits(svg: string): string {
  return svg
    .replace(/width="([\d.]+)ex"/, (_match, n) => `width="${parseFloat(n) * PX_PER_EX}"`)
    .replace(/height="([\d.]+)ex"/, (_match, n) => `height="${parseFloat(n) * PX_PER_EX}"`);
}

export interface RenderedFormula {
  png: Buffer;
  width: number;
  height: number;
}

/**
 * Rendert einen LaTeX-String serverseitig zu einem PNG-Bild (transparenter
 * Hintergrund), damit er als echte, typografisch korrekte Formel (Brüche,
 * Wurzeln, Summenzeichen mit Grenzen usw.) in ein PDF eingebettet werden
 * kann.
 */
export async function renderLatexToPng(latex: string): Promise<RenderedFormula> {
  await ensureWasmInitialized();

  const node = mathDocument.convert(latex, {
    display: true,
    em: 16,
    ex: PX_PER_EX,
  });
  // Das ist der eigentliche, seit Anfang an bestehende Fehler (nicht Fonts,
  // nicht das native Binärmodul): "mathDocument.convert()" liefert den
  // äußeren "<mjx-container>"-Wrapper zurück, der die eigentliche
  // "<svg>...</svg>"-Formel nur als Kind-Element enthält
  // ("<mjx-container ...><svg>...</svg></mjx-container>"). "adaptor.outerHTML"
  // serialisiert diesen Wrapper MIT — das Ergebnis hat also "mjx-container",
  // nicht "svg", als Wurzelelement. resvg erwartet aber ein Dokument, dessen
  // Wurzel "<svg>" ist, und ist genau daran gescheitert ("document does not
  // have a root node"). "adaptor.innerHTML" liefert stattdessen nur den
  // Inhalt des Wrappers — bei SVG-Output ist das exakt das "<svg>"-Element
  // selbst.
  const rawSvg = adaptor.innerHTML(node);
  const svg = toAbsoluteSvgUnits(rawSvg);

  const resvg = new Resvg(svg, {
    fitTo: { mode: "zoom", value: SUPERSAMPLE },
    background: "rgba(255,255,255,0)",
  });
  const rendered = resvg.render();
  // resvg-wasm gibt ein Uint8Array zurück (statt eines Node-"Buffer" wie die
  // native resvg-js-Variante) — hier explizit in einen echten Buffer
  // umwandeln, da @react-pdf/renderer weiter unten einen Buffer erwartet.
  const png = Buffer.from(rendered.asPng());

  return {
    png,
    width: rendered.width,
    height: rendered.height,
  };
}
