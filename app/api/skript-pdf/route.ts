import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { createClient } from "@/lib/supabaseServer";
import { getModuleChapters } from "@/lib/content/registry";
import { getModule } from "@/lib/modules";
import SkriptPdfDocument from "@/lib/pdf/SkriptPdfDocument";
import { renderLatexToPng, type RenderedFormula } from "@/lib/pdf/renderLatex";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const moduleSlug = request.nextUrl.searchParams.get("module") ?? "statistik-1";

  const mod = getModule(moduleSlug);
  const allChapters = getModuleChapters(moduleSlug);
  if (!mod || !allChapters) {
    return NextResponse.json({ error: "Unbekanntes Modul." }, { status: 404 });
  }

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let unlocked = false;
  if (user) {
    const { data: purchase } = await supabase
      .from("purchases")
      .select("module_slug")
      .eq("user_id", user.id)
      .eq("module_slug", moduleSlug)
      .maybeSingle();
    unlocked = Boolean(purchase);
  }

  // Nur Kapitel einschließen, die dieser Besucher auch auf der Webseite
  // sehen darf (kostenlose Kapitel immer, der Rest nur nach Kauf).
  const chapters = allChapters.filter((chapter) => chapter.free || unlocked);

  // Alle Formeln vorab zu PNG-Bildern rendern. Schlägt eine einzelne Formel
  // fehl (z. B. wegen eines LaTeX-Tippfehlers), wird nur für diese eine der
  // ursprüngliche Text als Rückfallebene benutzt, statt den ganzen Export
  // scheitern zu lassen.
  const formulaImages: Record<string, RenderedFormula> = {};

  for (const chapter of chapters) {
    for (const section of chapter.sections) {
      if (!section.formulas) continue;
      for (let i = 0; i < section.formulas.length; i++) {
        const latex = section.formulasLatex?.[i];
        if (!latex) continue;
        const key = `${chapter.id}__${section.id}__${i}`;
        try {
          formulaImages[key] = renderLatexToPng(latex);
        } catch (err) {
          console.error(`Formel konnte nicht gerendert werden (${key}):`, err);
        }
      }
    }
  }

  // Hinweis: @react-pdf/renderer erwartet laut Typdefinition ein <Document>
  // -Element direkt. SkriptPdfDocument ist eine Wrapper-Komponente, die
  // intern <Document> zurückgibt — funktioniert zur Laufzeit einwandfrei,
  // TypeScript beschwert sich aber über den abweichenden Prop-Typ. Daher
  // hier bewusst "as any".
  const buffer = await renderToBuffer(
    React.createElement(SkriptPdfDocument, {
      chapters,
      formulaImages,
      moduleTitle: mod.title,
      moduleSubtitle: mod.subtitle,
    }) as any
  );

  // Node's Buffer-Typ und der von NextResponse erwartete BodyInit-Typ
  // passen laut TypeScript nicht exakt zusammen (funktioniert zur Laufzeit
  // trotzdem einwandfrei) — daher auch hier ein bewusster Cast.
  return new NextResponse(buffer as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="lumo-${moduleSlug}-skript.pdf"`,
    },
  });
}
