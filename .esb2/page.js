"use strict";
"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { modules } from "@/lib/modules";
const grantableModules = modules.filter((m) => m.status === "active");
export default function AdminPage() {
  const [users, setUsers] = useState(null);
  const [forbidden, setForbidden] = useState(false);
  const [loadError, setLoadError] = useState(null);
  const [search, setSearch] = useState("");
  const [pending, setPending] = useState(null);
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
  async function toggleModule(user, slug, hasAccess) {
    const key = `${user.id}:${slug}`;
    setPending(key);
    try {
      const res = await fetch("/api/admin/grant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          moduleSlug: slug,
          action: hasAccess ? "revoke" : "grant"
        })
      });
      if (res.ok) {
        setUsers(
          (prev) => prev ? prev.map(
            (u) => u.id === user.id ? {
              ...u,
              purchases: hasAccess ? u.purchases.filter((s) => s !== slug) : [...u.purchases, slug]
            } : u
          ) : prev
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
    return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-lg py-20 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-ink-900", children: "Kein Zugriff" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-ink-600", children: "Diese Seite ist nur f\xFCr den Admin-Account zug\xE4nglich." }),
      /* @__PURE__ */ jsx(Link, { href: "/dashboard", className: "btn-secondary mt-6 inline-flex", children: "\u2190 Zur\xFCck zum Dashboard" })
    ] });
  }
  if (loadError) {
    return /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-lg py-20 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-red-700", children: loadError }) });
  }
  if (!users) {
    return /* @__PURE__ */ jsx("div", { className: "h-64 animate-pulse rounded-xl2 bg-ink-100" });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8 flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-extrabold text-ink-900 sm:text-4xl", children: "Admin \u2014 Module freischalten" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-2 text-ink-600", children: [
          users.length,
          " registrierte Nutzer:innen. Freischaltung/Entzug wirkt sofort, genau wie ein Stripe-Kauf."
        ] })
      ] }),
      /* @__PURE__ */ jsx(Link, { href: "/admin/rechnungen", className: "btn-secondary", children: "K\xE4ufe & Belege \u2192" })
    ] }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        value: search,
        onChange: (e) => setSearch(e.target.value),
        placeholder: "Nach E-Mail suchen \u2026",
        className: "mb-6 w-full max-w-sm rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "card overflow-x-auto p-0", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[720px] text-left text-sm", children: [
      /* @__PURE__ */ jsx("thead", { className: "bg-ink-50 text-ink-700", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3 font-semibold", children: "E-Mail" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3 font-semibold", children: "Registriert" }),
        grantableModules.map((mod) => /* @__PURE__ */ jsx("th", { className: "px-4 py-3 font-semibold", children: mod.title }, mod.slug))
      ] }) }),
      /* @__PURE__ */ jsxs("tbody", { children: [
        filteredUsers.map((u) => /* @__PURE__ */ jsxs("tr", { className: "border-t border-ink-100", children: [
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3 font-medium text-ink-900", children: u.email }),
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3 text-ink-600", children: new Date(u.createdAt).toLocaleDateString("de-DE") }),
          grantableModules.map((mod) => {
            const hasAccess = u.purchases.includes(mod.slug);
            const key = `${u.id}:${mod.slug}`;
            return /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => toggleModule(u, mod.slug, hasAccess),
                disabled: pending === key,
                className: `rounded-full px-3 py-1 text-xs font-semibold transition disabled:opacity-50 ${hasAccess ? "bg-green-100 text-green-800 hover:bg-red-100 hover:text-red-800" : "bg-ink-100 text-ink-600 hover:bg-brand-100 hover:text-brand-800"}`,
                children: pending === key ? "\u2026" : hasAccess ? "\u2713 Freigeschaltet" : "Freischalten"
              }
            ) }, mod.slug);
          })
        ] }, u.id)),
        filteredUsers.length === 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx(
          "td",
          {
            colSpan: 2 + grantableModules.length,
            className: "px-4 py-8 text-center text-ink-500",
            children: "Keine Nutzer:innen gefunden."
          }
        ) })
      ] })
    ] }) })
  ] });
}
