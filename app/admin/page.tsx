"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { modules } from "@/lib/modules";

interface AdminUser {
  id: string;
  email: string;
  createdAt: string;
  purchases: string[];
}

const grantableModules = modules.filter((m) => m.status === "active");

export default function AdminPage() {
  const [users, setUsers] = useState<AdminUser[] | null>(null);
  const [forbidden, setForbidden] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [pending, setPending] = useState<string | null>(null); // `${userId}:${slug}`

  async function loadUsers() {
    try {
      const res = await fetch("/api/admin/users", { cache: "no-store" });
      if (res.status === 403) {
        setForbidden(true);
        return;
      }
      const data = await res.json();
      if (!res.ok) {
        setLoadError(data.error ?? "Nutzer:innen konnten nicht geladen werden.");
        return;
      }
      setUsers(data.users);
    } catch {
      setLoadError("Verbindung fehlgeschlagen.");
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    if (!users) return [];
    const q = search.trim().toLowerCase();
    if (!q) return users;
    return users.filter((u) => u.email.toLowerCase().includes(q));
  }, [users, search]);

  async function toggleModule(user: AdminUser, slug: string, hasAccess: boolean) {
    const key = `${user.id}:${slug}`;
    setPending(key);
    try {
      const res = await fetch("/api/admin/grant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          moduleSlug: slug,
          action: hasAccess ? "revoke" : "grant",
        }),
      });
      if (res.ok) {
        setUsers((prev) =>
          prev
            ? prev.map((u) =>
                u.id === user.id
                  ? {
                      ...u,
                      purchases: hasAccess
                        ? u.purchases.filter((s) => s !== slug)
                        : [...u.purchases, slug],
                    }
                  : u
              )
            : prev
        );
      } else {
        const data = await res.json().catch(() => null);
        alert(data?.error ?? "Aktion fehlgeschlagen.");
      }
    } catch {
      alert("Verbindung fehlgeschlagen.");
    } finally {
      setPending(null);
    }
  }

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

  if (!users) {
    return <div className="h-64 animate-pulse rounded-xl2 bg-ink-100" />;
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
          Admin — Module freischalten
        </h1>
        <p className="mt-2 text-ink-600">
          {users.length} registrierte Nutzer:innen. Freischaltung/Entzug wirkt
          sofort, genau wie ein Stripe-Kauf.
        </p>
      </div>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Nach E-Mail suchen …"
        className="mb-6 w-full max-w-sm rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
      />

      <div className="card overflow-x-auto p-0">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-ink-50 text-ink-700">
            <tr>
              <th className="px-4 py-3 font-semibold">E-Mail</th>
              <th className="px-4 py-3 font-semibold">Registriert</th>
              {grantableModules.map((mod) => (
                <th key={mod.slug} className="px-4 py-3 font-semibold">
                  {mod.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((u) => (
              <tr key={u.id} className="border-t border-ink-100">
                <td className="px-4 py-3 font-medium text-ink-900">{u.email}</td>
                <td className="px-4 py-3 text-ink-600">
                  {new Date(u.createdAt).toLocaleDateString("de-DE")}
                </td>
                {grantableModules.map((mod) => {
                  const hasAccess = u.purchases.includes(mod.slug);
                  const key = `${u.id}:${mod.slug}`;
                  return (
                    <td key={mod.slug} className="px-4 py-3">
                      <button
                        onClick={() => toggleModule(u, mod.slug, hasAccess)}
                        disabled={pending === key}
                        className={`rounded-full px-3 py-1 text-xs font-semibold transition disabled:opacity-50 ${
                          hasAccess
                            ? "bg-green-100 text-green-800 hover:bg-red-100 hover:text-red-800"
                            : "bg-ink-100 text-ink-600 hover:bg-brand-100 hover:text-brand-800"
                        }`}
                      >
                        {pending === key
                          ? "…"
                          : hasAccess
                          ? "✓ Freigeschaltet"
                          : "Freischalten"}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td
                  colSpan={2 + grantableModules.length}
                  className="px-4 py-8 text-center text-ink-500"
                >
                  Keine Nutzer:innen gefunden.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
