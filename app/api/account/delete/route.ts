import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

// Löscht das Nutzerkonto vollständig: zugehörige Kauf- und
// Fortschrittsdaten sowie den Auth-Account selbst (Art. 17 DSGVO,
// "Recht auf Löschung"). Diese Route braucht den Service-Role-Client, weil
// das Löschen eines Auth-Users Admin-Rechte erfordert.
export async function POST() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Nicht angemeldet." }, { status: 401 });
  }

  // Zugehörige Daten in eigenen Tabellen zuerst entfernen — für den Fall,
  // dass keine ON DELETE CASCADE-Regel auf user_id gesetzt ist.
  await supabaseAdmin.from("purchases").delete().eq("user_id", user.id);
  await supabaseAdmin.from("progress").delete().eq("user_id", user.id);

  const { error } = await supabaseAdmin.auth.admin.deleteUser(user.id);

  if (error) {
    console.error("Fehler beim Löschen des Kontos:", error);
    return NextResponse.json(
      { error: "Konto konnte nicht gelöscht werden." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
