import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

// Wird von der Success-Seite aufgerufen, um clientseitig zu bestätigen, dass
// die Zahlung wirklich abgeschlossen wurde, bevor der Zugriff freigeschaltet
// wird. In einer echten Produktivversion sollte die Freischaltung stattdessen
// serverseitig über den Webhook (app/api/webhooks/stripe) in einer Datenbank
// gespeichert und dem eingeloggten Nutzerkonto zugeordnet werden.
export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "session_id fehlt." }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paid = session.payment_status === "paid";
    const moduleSlug = session.metadata?.moduleSlug ?? null;

    return NextResponse.json({ paid, moduleSlug });
  } catch (err) {
    console.error("Fehler beim Prüfen der Checkout Session:", err);
    return NextResponse.json({ error: "Session konnte nicht geprüft werden." }, { status: 500 });
  }
}
