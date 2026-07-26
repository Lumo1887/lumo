import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { isAdminEmail } from "@/lib/admin";
import { getModule } from "@/lib/modules";

// Signierte Download-Links für den privaten Storage-Bucket "receipts" —
// eine Stunde gültig, wird bei jedem Laden der Admin-Seite frisch erzeugt.
const SIGNED_URL_TTL_SECONDS = 60 * 60;

// Listet alle jemals erzeugten Belege (Kleinbetragsrechnungen) samt
// Käufer-E-Mail, Modul und Download-Link auf. Nur für den Admin (siehe
// lib/admin.ts) zugänglich — gleiche Prüfung wie in /api/admin/users.
export async function GET() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAdminEmail(user.email)) {
    return NextResponse.json({ error: "Kein Zugriff." }, { status: 403 });
  }

  const { data: receiptRows, error: receiptsError } = await supabaseAdmin
    .from("receipts")
    .select("id, user_id, module_slug, stripe_session_id, amount_cent, storage_path, created_at")
    .order("created_at", { ascending: false });

  if (receiptsError) {
    console.error("Admin: Fehler beim Laden der Belege:", receiptsError);
    return NextResponse.json({ error: "Belege konnten nicht geladen werden." }, { status: 500 });
  }

  // E-Mail-Adressen der Käufer:innen auf einen Schlag laden statt pro Beleg
  // einzeln nachzufragen (gleiches Muster wie in /api/admin/users).
  const { data: usersPage, error: usersError } =
    await supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 1000 });

  if (usersError) {
    console.error("Admin: Fehler beim Laden der Nutzer:innen für Belege:", usersError);
  }

  const emailByUserId = new Map<string, string>();
  for (const u of usersPage?.users ?? []) {
    if (u.email) emailByUserId.set(u.id, u.email);
  }

  const receipts = await Promise.all(
    (receiptRows ?? []).map(async (row) => {
      let downloadUrl: string | null = null;
      if (row.storage_path) {
        const { data: signed, error: signError } = await supabaseAdmin.storage
          .from("receipts")
          .createSignedUrl(row.storage_path, SIGNED_URL_TTL_SECONDS);
        if (signError) {
          console.error(`Admin: Signierter Link fehlgeschlagen für ${row.storage_path}:`, signError);
        } else {
          downloadUrl = signed?.signedUrl ?? null;
        }
      }

      const receiptNumber = `LUMO-${new Date(row.created_at).getFullYear()}-${String(row.id).padStart(6, "0")}`;

      return {
        id: row.id,
        receiptNumber,
        createdAt: row.created_at,
        moduleSlug: row.module_slug,
        moduleTitle: getModule(row.module_slug)?.title ?? row.module_slug,
        customerEmail: emailByUserId.get(row.user_id) ?? "(unbekannt)",
        amountCent: row.amount_cent,
        stripeSessionId: row.stripe_session_id,
        downloadUrl,
      };
    })
  );

  return NextResponse.json({ receipts });
}
