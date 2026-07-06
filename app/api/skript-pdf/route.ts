import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { createClient } from "@/lib/supabaseServer";
import { skriptChapters } from "@/lib/skript-content";
import SkriptPdfDocument from "@/lib/pdf/SkriptPdfDocument";

export const runtime = "nodejs";

const MODULE_SLUG = "statistik-1";

export async function GET(_request: NextRequest) {
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
      .eq("module_slug", MODULE_SLUG)
      .maybeSingle();
    unlocked = Boolean(purchase);
  }

  // Nur Kapitel einschließen, die dieser Besucher auch auf der Webseite
  // sehen darf (Kapitel 2 immer, der Rest nur nach Kauf).
  const chapters = skriptChapters.filter((chapter) => chapter.free || unlocked);

  const buffer = await renderToBuffer(
    React.createElement(SkriptPdfDocument, { chapters })
  );

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="lumo-statistik-1-skript.pdf"',
    },
  });
}
