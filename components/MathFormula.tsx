"use client";

import { useEffect, useRef, useState } from "react";
import katex from "katex";

/**
 * Rendert eine Formel client-seitig mit KaTeX als echte, typografisch
 * korrekte Formel (Bruchstriche, hoch-/tiefgestellte Zeichen, Wurzeln usw.),
 * statt sie als reinen Unicode-Text darzustellen ("n! / (n-k)!" statt eines
 * echten Bruchs). KaTeX läuft komplett im Browser — keine Abhängigkeit von
 * serverseitigem Rendering, nativen Binärdateien oder Deployment-Plattform.
 *
 * Fällt auf den ursprünglichen Text zurück, wenn keine LaTeX-Fassung
 * vorhanden ist oder KaTeX die Formel nicht parsen kann.
 */
export default function MathFormula({
  latex,
  fallback,
  displayMode = true,
}: {
  latex?: string;
  fallback: string;
  displayMode?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!latex || !ref.current) return;
    try {
      katex.render(latex, ref.current, {
        throwOnError: false,
        displayMode,
      });
      setFailed(false);
    } catch {
      setFailed(true);
    }
  }, [latex, displayMode]);

  if (!latex || failed) {
    return <span>{fallback}</span>;
  }

  return <span ref={ref} />;
}
