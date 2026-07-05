import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <div className="card mx-auto max-w-lg p-8 text-center">
      <h1 className="text-2xl font-bold text-ink-900">Zahlung abgebrochen</h1>
      <p className="mt-2 text-ink-600">
        Kein Problem — du kannst es jederzeit erneut versuchen. Kapitel 2 des
        Skripts und die Vorschau-Fragen im Übungstool bleiben weiterhin
        kostenlos verfügbar.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link href="/module/statistik-1" className="btn-primary">
          Zurück zum Modul
        </Link>
        <Link href="/dashboard" className="btn-secondary">
          Zum Dashboard
        </Link>
      </div>
    </div>
  );
}
