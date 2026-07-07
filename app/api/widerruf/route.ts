import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { getResendClient, MAIL_FROM } from "@/lib/resend";
import { getModule } from "@/lib/modules";

const OWNER_EMAIL = "lumolearn@outlook.de";

// Öffentliche Widerrufs-Route (§ 356a BGB) — bewusst OHNE Login-Zwang
// aufrufbar, wie gesetzlich vorgeschrieben ("nicht hinter einer
// Registrierung oder einem Login versteckt"). Ist die anfragende Person
// zufällig eingeloggt, wird die user_id zusätzlich mitgespeichert, ist aber
// keine Voraussetzung.
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const name = (body?.name as string | undefined)?.trim();
  const email = (body?.email as string | undefined)?.trim();
  const moduleSlug = (body?.moduleSlug as string | undefined)?.trim() || null;
  const orderReference = (body?.orderReference as string | undefined)?.trim() || null;
  const message = (body?.message as string | undefined)?.trim() || null;

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name und E-Mail-Adresse werden benötigt." },
      { status: 400 }
    );
  }

  // Best-effort: falls die Person eingeloggt ist, ihre user_id mit ablegen.
  let userId: string | null = null;
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    userId = user?.id ?? null;
  } catch {
    // Kein Login vorhanden oder Session nicht lesbar — völlig in Ordnung,
    // der Widerruf funktioniert auch ohne.
  }

  const { data, error } = await supabaseAdmin
    .from("withdrawal_requests")
    .insert({
      name,
      email,
      module_slug: moduleSlug,
      order_reference: orderReference,
      message,
      user_id: userId,
      status: "neu",
    })
    .select("id")
    .single();

  if (error) {
    console.error("Fehler beim Speichern des Widerrufs:", error);
    return NextResponse.json(
      { error: "Widerruf konnte nicht übermittelt werden." },
      { status: 500 }
    );
  }

  // E-Mail-Versand ist "best effort": Schlägt er fehl (z. B. weil Resend
  // noch nicht eingerichtet ist), soll das den Widerruf selbst nicht
  // scheitern lassen — der Eintrag in der Datenbank ist bereits gesichert.
  const resend = getResendClient();
  if (resend) {
    const moduleTitle = moduleSlug ? getModule(moduleSlug)?.title : undefined;

    resend.emails
      .send({
        from: MAIL_FROM,
        to: email,
        subject: "Bestätigung deines Widerrufs — Lumo",
        text: `Hallo ${name},\n\nwir haben deinen Widerruf soeben erhalten (unmittelbare elektronische Eingangsbestätigung gemäß § 356a BGB).\n\nBetroffenes Modul: ${moduleTitle ?? "nicht angegeben"}\n\nWir bearbeiten deinen Widerruf und zahlen bereits geleistete Zahlungen unverzüglich, spätestens innerhalb von 14 Tagen, auf demselben Weg zurück, mit dem du bezahlt hast.\n\nBei Rückfragen antworte einfach auf diese E-Mail oder schreib an ${OWNER_EMAIL}.\n\nViele Grüße\nLumo`,
      })
      .catch((err) => console.error("Bestätigungsmail an Kunde fehlgeschlagen:", err));

    resend.emails
      .send({
        from: MAIL_FROM,
        to: OWNER_EMAIL,
        subject: `Neuer Widerruf: ${name}${moduleTitle ? ` — ${moduleTitle}` : ""}`,
        text: `Neuer Widerruf eingegangen.\n\nName: ${name}\nE-Mail: ${email}\nModul: ${moduleTitle ?? "nicht angegeben"}\nKaufdatum/Referenz: ${orderReference ?? "-"}\nNachricht: ${message ?? "-"}\n\nEintrag in Supabase: withdrawal_requests, id ${data.id}`,
      })
      .catch((err) => console.error("Benachrichtigungsmail an Betreiber fehlgeschlagen:", err));
  }

  return NextResponse.json({ ok: true, id: data.id });
}
