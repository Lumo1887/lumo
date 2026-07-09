import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { createClient } from "@/lib/supabaseServer";
import { getModuleChapters } from "@/lib/content/registry";
import { getModule } from "@/lib/modules";
import FormulaSheetPdfDocument from "@/lib/pdf/FormulaSheetPdfDocument";
import { renderLatexToPng, type RenderedFormula } from "@/lib/pdf/renderLatex";

export const runtime = "nodejs";

// Kompakter Formelsammlung-Export: dieselbe Zugriffslogik wie beim
// vollständigen Skript-PDF (freie Kapitel für alle, Rest nur nach Kauf),
// aber ohne Fließtext/Beispiele — nur Formeln, gruppiert nach Kapitel,
// im dichten Zweispalten-Layout.
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

  const chapters = allChapters.filter((chapter) => chapter.free || unlocked);

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

  // Siehe Hinweis in skript-pdf/route.ts: @react-pdf/renderer erwartet laut
  // Typdefinition ein <Document> direkt, FormulaSheetPdfDocument ist aber
  // eine Wrapper-Komponente — funktioniert zur Laufzeit, TypeScript
  // beschwert sich aber, daher bewusstes "as any".
  const buffer = await renderToBuffer(
    React.createElement(FormulaSheetPdfDocument, {
      chapters,
      formulaImages,
      moduleTitle: mod.title,
      moduleSubtitle: mod.subtitle,
    }) as any
  );

  return new NextResponse(buffer as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="lumo-${moduleSlug}-formelsammlung.pdf"`,
    },
  });
}
