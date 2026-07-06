import { mathjax } from "mathjax-full/js/mathjax.js";
import { TeX } from "mathjax-full/js/input/tex.js";
import { SVG } from "mathjax-full/js/output/svg.js";
import { liteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor.js";
import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html.js";
import { AllPackages } from "mathjax-full/js/input/tex/AllPackages.js";
import { Resvg } from "@resvg/resvg-js";

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
export const PDF_FORMULA_POINTS_PER_PIXEL = 0.28;

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
export function renderLatexToPng(latex: string): RenderedFormula {
  const node = mathDocument.convert(latex, {
    display: true,
    em: 16,
    ex: PX_PER_EX,
  });
  const rawSvg = adaptor.outerHTML(node);
  const svg = toAbsoluteSvgUnits(rawSvg);

  const resvg = new Resvg(svg, {
    fitTo: { mode: "zoom", value: SUPERSAMPLE },
    background: "rgba(255,255,255,0)",
  });
  const rendered = resvg.render();
  const png = rendered.asPng();

  return {
    png,
    width: rendered.width,
    height: rendered.height,
  };
}
