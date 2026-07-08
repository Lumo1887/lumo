"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { formatEuro } from "@/lib/modules";
import { fetchAccess } from "@/lib/access";
import CheckoutButton from "@/components/CheckoutButton";

// Zeigt entweder den Kauf-CTA (Preis + "Modul freischalten") oder — falls
// die Person das Modul schon besitzt — eine "Freigeschaltet"-Bestätigung mit
// direkten Links zu Skript/Übungstool. Als eigene Client-Komponente
// ausgelagert, damit die Modul-Seite selbst ein Server Component bleiben
// kann (wegen generateMetadata).
export default function ModulePurchaseCard({
  moduleSlug,
  priceCent,
  compareAtCent,
}: {
  moduleSlug: string;
  priceCent: number;
  compareAtCent: number;
}) {
  const [loaded, setLoaded] = useState(false);
  const [owned, setOwned] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchAccess().then((info) => {
      if (cancelled) return;
      setOwned(info.purchases.includes(moduleSlug));
      setLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, [moduleSlug]);

  if (!loaded) {
    return <div className="h-40 animate-pulse rounded-xl bg-ink-100" />;
  }

  if (owned) {
    return (
      <>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
          ✓ Freigeschaltet
        </span>
        <p className="mt-3 text-sm text-ink-600">
          Du hast dieses Modul bereits gekauft — viel Erfolg beim Lernen!
        </p>
        <div className="mt-5 flex flex-col gap-2">
          <Link href={`/module/${moduleSlug}/skript`} className="btn-secondary">
            📘 Zum Skript
          </Link>
          <Link href={`/module/${moduleSlug}/uebungstool`} className="btn-primary">
            ✏️ Zum Übungstool
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <span className="badge">Einführungspreis</span>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-3xl font-extrabold text-ink-900">
          {formatEuro(priceCent)}
        </span>
        <span className="text-ink-600 line-through">
          {formatEuro(compareAtCent)}
        </span>
      </div>
      <p className="mt-1 text-sm text-ink-600">
        Einmalig, dauerhafter Zugriff. Günstiger als klassische
        Vorbereitungskurse — der Preis steigt, sobald mehr Module und
        Funktionen live sind.
      </p>
      <div className="mt-5">
        <CheckoutButton moduleSlug={moduleSlug} label="Modul freischalten" />
      </div>
      <p className="mt-3 text-center text-xs text-ink-600">
        Sichere Zahlung über Stripe. Das erste Kapitel kannst du vorher
        gratis lesen.
      </p>
    </>
  );
}
