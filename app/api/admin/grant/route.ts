import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { isAdminEmail } from "@/lib/admin";
import { getModule } from "@/lib/modules";

// Schaltet ein Modul für eine bestimmte Nutzer-ID frei (oder entzieht den
// Zugriff wieder). Nur für den/die Admin zugänglich.
export async function POST(req: NextRequest) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAdminEmail(user.email)) {
    return NextResponse.json({ error: "Kein Zugriff." }, { status: 403 });
  }

  const body = await req.json().catch(() => null);
  const userId = body?.userId as string | undefined;
  const moduleSlug = body?.moduleSlug as string | undefined;
  const action = body?.action as "grant" | "revoke" | undefined;

  if (!userId || !moduleSlug || (action !== "grant" && action !== "revoke")) {
    return NextResponse.json(
      { error: "userId, moduleSlug und action ('grant'|'revoke') werden benötigt." },
      { status: 400 }
    );
  }

  if (!getModule(moduleSlug)) {
    return NextResponse.json({ error: "Unbekanntes Modul." }, { status: 400 });
  }

  if (action === "grant") {
    const { error } = await supabaseAdmin.from("purchases").upsert(
      {
        user_id: userId,
        module_slug: moduleSlug,
        stripe_session_id: `admin-grant-${Date.now()}`,
      },
      { onConflict: "user_id,module_slug" }
    );

    if (error) {
      console.error("Admin: Fehler beim Freischalten:", error);
      return NextResponse.json(
        { error: "Modul konnte nicht freigeschaltet werden." },
        { status: 500 }
      );
    }
  } else {
    const { error } = await supabaseAdmin
      .from("purchases")
      .delete()
      .eq("user_id", userId)
      .eq("module_slug", moduleSlug);

    if (error) {
      console.error("Admin: Fehler beim Entziehen:", error);
      return NextResponse.json(
        { error: "Zugriff konnte nicht entzogen werden." },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}
