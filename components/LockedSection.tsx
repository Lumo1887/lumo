"use client";

import { useEffect, useState } from "react";
import { fetchAccess } from "@/lib/access";
import { formatEuro } from "@/lib/modules";
import CheckoutButton from "@/components/CheckoutButton";

export default function LockedSection({
  moduleSlug,
  priceCent,
  children,
}: {
  moduleSlug: string;
  priceCent: number;
  children: React.ReactNode;
}) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchAccess().then((info) => {
      if (!cancelled) setUnlocked(info.purchases.includes(moduleSlug));
    });
    return () => {
      cancelled = true;
    };
  }, [moduleSlug]);

  if (unlocked === null) {
    return <div className="h-40 animate-pulse rounded-xl2 bg-ink-100" />;
  }

  if (unlocked) return <>{children}</>;

  return (
    <div className="relative overflow-hidden rounded-xl2 border border-ink-100">
      <div className="pointer-events-none max-h-64 select-none overflow-hidden opacity-50 blur-[2px]">
        {children}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/80 p-6 text-center">
        <span className="badge">Freischalten für {formatEuro(priceCent)}</span>
        <p className="max-w-sm text-sm text-ink-700">
          Schalte alle Kapitel des Skripts und das komplette Übungstool für
          dieses Modul dauerhaft frei.
        </p>
        <div className="w-full max-w-xs">
          <CheckoutButton moduleSlug={moduleSlug} />
        </div>
      </div>
    </div>
  );
}
