import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { isAdminEmail } from "@/lib/admin";

// Listet alle registrierten Nutzer:innen samt ihrer freigeschalteten Module
// auf. Nur für den/die Admin (siehe lib/admin.ts) zugänglich — die Prüfung
// passiert serverseitig anhand der eingeloggten Session, nicht anhand von
// irgendwas, das der Client behauptet.
export async function GET() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAdminEmail(user.email)) {
    return NextResponse.json({ error: "Kein Zugriff." }, { status: 403 });
  }

  // Alle Nutzer:innen laden (Service-Role-Client, umgeht RLS). Bei mehr als
  // 1000 Nutzer:innen müsste hier paginiert werden — für den aktuellen
  // Umfang reicht eine einzelne Seite.
  const { data: usersPage, error: usersError } =
    await supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 1000 });

  if (usersError) {
    console.error("Admin: Fehler beim Laden der Nutzer:innen:", usersError);
    return NextResponse.json(
      { error: "Nutzer:innen konnten nicht geladen werden." },
      { status: 500 }
    );
  }

  const { data: purchaseRows, error: purchasesError } = await supabaseAdmin
    .from("purchases")
    .select("user_id, module_slug");

  if (purchasesError) {
    console.error("Admin: Fehler beim Laden der Käufe:", purchasesError);
    return NextResponse.json(
      { error: "Käufe konnten nicht geladen werden." },
      { status: 500 }
    );
  }

  const purchasesByUser = new Map<string, string[]>();
  for (const row of purchaseRows ?? []) {
    const list = purchasesByUser.get(row.user_id) ?? [];
    list.push(row.module_slug);
    purchasesByUser.set(row.user_id, list);
  }

  const users = usersPage.users
    .map((u) => ({
      id: u.id,
      email: u.email ?? "(keine E-Mail)",
      createdAt: u.created_at,
      purchases: purchasesByUser.get(u.id) ?? [],
    }))
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  return NextResponse.json({ users });
}
