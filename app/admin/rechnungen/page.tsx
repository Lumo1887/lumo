"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

interface AdminReceipt {
  id: number;
  receiptNumber: string;
  createdAt: string;
  moduleSlug: string;
  moduleTitle: string;
  customerEmail: string;
  amountCent: number;
  stripeSessionId: string;
  downloadUrl: string | null;
}

export default function AdminReceiptsPage() {
  const [receipts, setReceipts] = useState<AdminReceipt[] | null>(null);
  const [forbidden, setForbidden] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  async function loadReceipts() {
    try {
      const res = await fetch("/api/admin/receipts", { cache: "no-store" });
      if (res.status === 403) {
        setForbidden(true);
        return;
      }
      const data = await res.json();
      if (!res.ok) {
        setLoadError(data.error ?? "Belege konnten nicht geladen werden.");
        return;
      }
      setReceipts(data.receipts);
    } catch {
      setLoadError("Verbindung fehlgeschlagen.");
    }
  }

  useEffect(() => {
    loadReceipts();
  }, []);

  const filteredReceipts = useMemo(() => {
    if (!receipts) return [];
    const q = search.trim().toLowerCase();
    if (!q) return receipts;
    return receipts.filter(
      (r) =>
        r.customerEmail.toLowerCase().includes(q) ||
        r.moduleTitle.toLowerCase().includes(q) ||
        r.receiptNumber.toLowerCase().includes(q)
    );
  }, [receipts, search]);

  const totalCent = useMemo(
    () => filteredReceipts.reduce((sum, r) => sum + r.amountCent, 0),
    [filteredReceipts]
  );

  if (forbidden) {
    return (
      <div className="mx-auto max-w-lg py-20 text-center">
        <h1 className="text-2xl font-bold text-ink-900">Kein Zugriff</h1>
        <p className="mt-3 text-ink-600">
          Diese Seite ist nur für den Admin-Account zugänglich.
        </p>
        <Link href="/dashboard" className="btn-secondary mt-6 inline-flex">
          ← Zurück zum Dashboard
        </Link>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="mx-auto max-w-lg py-20 text-center">
        <p className="text-red-700">{loadError}</p>
      </div>
    );
  }

  if (!receipts) {
    return <div className="h-64 animate-pulse rounded-xl2 bg-ink-100" />;
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Admin — Käufe & Belege
          </h1>
          <p className="mt-2 text-ink-600">
            {filteredReceipts.length} Beleg(e){search ? " (gefiltert)" : ""} · Summe:{" "}
            <span className="font-semibold text-ink-900">
              {(totalCent / 100).toFixed(2).replace(".", ",")} €
            </span>
          </p>
        </div>
        <Link href="/admin" className="btn-secondary">
          ← Zurück zur Nutzerverwaltung
        </Link>
      </div>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Nach Kunde, Modul oder Beleg-Nr. suchen …"
        className="mb-6 w-full max-w-sm rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
      />

      <div className="card overflow-x-auto p-0">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead className="bg-ink-50 text-ink-700">
            <tr>
              <th className="px-4 py-3 font-semibold">Datum</th>
              <th className="px-4 py-3 font-semibold">Beleg-Nr.</th>
              <th className="px-4 py-3 font-semibold">Modul</th>
              <th className="px-4 py-3 font-semibold">Kunde</th>
              <th className="px-4 py-3 font-semibold">Betrag</th>
              <th className="px-4 py-3 font-semibold">PDF</th>
            </tr>
          </thead>
          <tbody>
            {filteredReceipts.map((r) => (
              <tr key={r.id} className="border-t border-ink-100">
                <td className="px-4 py-3 text-ink-600">
                  {new Date(r.createdAt).toLocaleDateString("de-DE")}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-ink-700">{r.receiptNumber}</td>
                <td className="px-4 py-3 text-ink-900">{r.moduleTitle}</td>
                <td className="px-4 py-3 text-ink-700">{r.customerEmail}</td>
                <td className="px-4 py-3 font-medium text-ink-900">
                  {(r.amountCent / 100).toFixed(2).replace(".", ",")} €
                </td>
                <td className="px-4 py-3">
                  {r.downloadUrl ? (
                    <a
                      href={r.downloadUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-brand-700 hover:underline"
                    >
                      Herunterladen
                    </a>
                  ) : (
                    <span className="text-ink-400">nicht verfügbar</span>
                  )}
                </td>
              </tr>
            ))}
            {filteredReceipts.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-ink-500">
                  Keine Belege gefunden.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
