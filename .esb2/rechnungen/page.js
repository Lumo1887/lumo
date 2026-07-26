"use strict";
"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
export default function AdminReceiptsPage() {
  const [receipts, setReceipts] = useState(null);
  const [forbidden, setForbidden] = useState(false);
  const [loadError, setLoadError] = useState(null);
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
      (r) => r.customerEmail.toLowerCase().includes(q) || r.moduleTitle.toLowerCase().includes(q) || r.receiptNumber.toLowerCase().includes(q)
    );
  }, [receipts, search]);
  const totalCent = useMemo(
    () => filteredReceipts.reduce((sum, r) => sum + r.amountCent, 0),
    [filteredReceipts]
  );
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
  if (!receipts) {
    return /* @__PURE__ */ jsx("div", { className: "h-64 animate-pulse rounded-xl2 bg-ink-100" });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8 flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-extrabold text-ink-900 sm:text-4xl", children: "Admin \u2014 K\xE4ufe & Belege" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-2 text-ink-600", children: [
          filteredReceipts.length,
          " Beleg(e)",
          search ? " (gefiltert)" : "",
          " \xB7 Summe:",
          " ",
          /* @__PURE__ */ jsxs("span", { className: "font-semibold text-ink-900", children: [
            (totalCent / 100).toFixed(2).replace(".", ","),
            " \u20AC"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Link, { href: "/admin", className: "btn-secondary", children: "\u2190 Zur\xFCck zur Nutzerverwaltung" })
    ] }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        value: search,
        onChange: (e) => setSearch(e.target.value),
        placeholder: "Nach Kunde, Modul oder Beleg-Nr. suchen \u2026",
        className: "mb-6 w-full max-w-sm rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "card overflow-x-auto p-0", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[820px] text-left text-sm", children: [
      /* @__PURE__ */ jsx("thead", { className: "bg-ink-50 text-ink-700", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3 font-semibold", children: "Datum" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3 font-semibold", children: "Beleg-Nr." }),
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3 font-semibold", children: "Modul" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3 font-semibold", children: "Kunde" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3 font-semibold", children: "Betrag" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3 font-semibold", children: "PDF" })
      ] }) }),
      /* @__PURE__ */ jsxs("tbody", { children: [
        filteredReceipts.map((r) => /* @__PURE__ */ jsxs("tr", { className: "border-t border-ink-100", children: [
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3 text-ink-600", children: new Date(r.createdAt).toLocaleDateString("de-DE") }),
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3 font-mono text-xs text-ink-700", children: r.receiptNumber }),
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3 text-ink-900", children: r.moduleTitle }),
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3 text-ink-700", children: r.customerEmail }),
          /* @__PURE__ */ jsxs("td", { className: "px-4 py-3 font-medium text-ink-900", children: [
            (r.amountCent / 100).toFixed(2).replace(".", ","),
            " \u20AC"
          ] }),
          /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: r.downloadUrl ? /* @__PURE__ */ jsx(
            "a",
            {
              href: r.downloadUrl,
              target: "_blank",
              rel: "noreferrer",
              className: "font-semibold text-brand-700 hover:underline",
              children: "Herunterladen"
            }
          ) : /* @__PURE__ */ jsx("span", { className: "text-ink-400", children: "nicht verf\xFCgbar" }) })
        ] }, r.id)),
        filteredReceipts.length === 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 6, className: "px-4 py-8 text-center text-ink-500", children: "Keine Belege gefunden." }) })
      ] })
    ] }) })
  ] });
}
