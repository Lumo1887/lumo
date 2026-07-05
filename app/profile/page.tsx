"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { fetchAccess } from "@/lib/access";
import { modules, formatEuro } from "@/lib/modules";
import { createClient } from "@/lib/supabaseClient";

export default function ProfilePage() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  const [purchases, setPurchases] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchAccess().then((info) => {
      if (cancelled) return;
      if (!info.loggedIn) {
        router.push("/login?next=/profile");
        return;
      }
      setEmail(info.email);
      setPurchases(info.purchases);
      setLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, [router]);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  if (!loaded) {
    return <div className="h-64 animate-pulse rounded-xl2 bg-ink-100" />;
  }

  const ownedModules = modules.filter((m) => purchases.includes(m.slug));

  return (
    <div>
      <div className="mb-10 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Dein Profil
          </h1>
          <p className="mt-2 text-ink-600">{email}</p>
        </div>
        <button onClick={handleLogout} className="btn-secondary shrink-0">
          Abmelden
        </button>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-bold text-ink-900">Deine Module</h2>

        {ownedModules.length === 0 ? (
          <div className="mt-4 rounded-lg bg-ink-50 p-6 text-center">
            <p className="text-sm text-ink-700">
              Du hast noch kein Modul freigeschaltet.
            </p>
            <Link href="/dashboard" className="btn-primary mt-4 inline-flex">
              Module ansehen
            </Link>
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            {ownedModules.map((mod) => (
              <div
                key={mod.slug}
                className="flex flex-col gap-3 rounded-xl border border-ink-100 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-ink-900">{mod.title}</p>
                  <p className="text-sm text-ink-600">{mod.subtitle}</p>
                  <p className="mt-1 text-xs text-ink-600">
                    Gekauft für {formatEuro(mod.priceCent)}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/module/${mod.slug}/skript`}
                    className="btn-secondary !px-4 !py-2 text-sm"
                  >
                    Skript
                  </Link>
                  <Link
                    href={`/module/${mod.slug}/uebungstool`}
                    className="btn-primary !px-4 !py-2 text-sm"
                  >
                    Übungstool
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 text-center">
        <Link href="/dashboard" className="text-sm font-medium text-brand-700 hover:underline">
          ← Zurück zum Dashboard
        </Link>
      </div>
    </div>
  );
}
