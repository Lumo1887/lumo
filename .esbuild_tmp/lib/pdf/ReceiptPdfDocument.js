"use strict";
import { jsx, jsxs } from "react/jsx-runtime";
import { Document, Page, Text, View, Svg, Circle, Line, Font, StyleSheet } from "@react-pdf/renderer";
Font.register({
  family: "DejaVu Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/dejavu-fonts-ttf@2.37.3/ttf/DejaVuSans.ttf"
    },
    {
      src: "https://cdn.jsdelivr.net/npm/dejavu-fonts-ttf@2.37.3/ttf/DejaVuSans-Bold.ttf",
      fontWeight: "bold"
    }
  ]
});
const BRAND_PURPLE = "#6D46E0";
const BRAND_PURPLE_LIGHT = "#7C5CFF";
const styles = StyleSheet.create({
  page: {
    padding: 48,
    fontSize: 10.5,
    fontFamily: "DejaVu Sans",
    color: "#1e1b2e"
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 6
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "DejaVu Sans",
    fontWeight: "bold",
    color: "#1a1523"
  },
  headerRule: {
    marginTop: 14,
    marginBottom: 22,
    borderBottomWidth: 1.5,
    borderBottomColor: BRAND_PURPLE
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26
  },
  sellerBlock: {
    fontSize: 9.5,
    color: "#57534e",
    lineHeight: 1.5
  },
  metaBlock: {
    fontSize: 9.5,
    color: "#57534e",
    textAlign: "right",
    lineHeight: 1.5
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "DejaVu Sans",
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1a1523"
  },
  table: {
    borderWidth: 1,
    borderColor: "#e7e2d8",
    borderRadius: 4,
    marginBottom: 18
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10
  },
  tableCellDesc: {
    flex: 1,
    paddingRight: 12
  },
  tableCellAmount: {
    width: 90,
    textAlign: "right"
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingTop: 4
  },
  totalLabel: {
    fontSize: 11,
    fontFamily: "DejaVu Sans",
    fontWeight: "bold",
    marginRight: 20
  },
  totalAmount: {
    fontSize: 11,
    fontFamily: "DejaVu Sans",
    fontWeight: "bold"
  },
  note: {
    fontSize: 9,
    color: "#78716c",
    marginTop: 24,
    lineHeight: 1.5
  },
  footer: {
    position: "absolute",
    bottom: 32,
    left: 48,
    right: 48,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  footerText: {
    fontSize: 8,
    color: "#a8a29e"
  }
});
function LogoMark({ size = 16 }) {
  return /* @__PURE__ */ jsxs(Svg, { width: size, height: size, viewBox: "0 0 64 64", children: [
    /* @__PURE__ */ jsx(Circle, { cx: 32, cy: 32, r: 9, fill: BRAND_PURPLE }),
    /* @__PURE__ */ jsx(Line, { x1: 32, y1: 4, x2: 32, y2: 15, stroke: BRAND_PURPLE_LIGHT, strokeWidth: 4, strokeLinecap: "round" }),
    /* @__PURE__ */ jsx(Line, { x1: 32, y1: 49, x2: 32, y2: 60, stroke: BRAND_PURPLE_LIGHT, strokeWidth: 4, strokeLinecap: "round" }),
    /* @__PURE__ */ jsx(Line, { x1: 4, y1: 32, x2: 15, y2: 32, stroke: BRAND_PURPLE_LIGHT, strokeWidth: 4, strokeLinecap: "round" }),
    /* @__PURE__ */ jsx(Line, { x1: 49, y1: 32, x2: 60, y2: 32, stroke: BRAND_PURPLE_LIGHT, strokeWidth: 4, strokeLinecap: "round" }),
    /* @__PURE__ */ jsx(Line, { x1: 12, y1: 12, x2: 20, y2: 20, stroke: BRAND_PURPLE_LIGHT, strokeWidth: 4, strokeLinecap: "round" }),
    /* @__PURE__ */ jsx(Line, { x1: 44, y1: 44, x2: 52, y2: 52, stroke: BRAND_PURPLE_LIGHT, strokeWidth: 4, strokeLinecap: "round" }),
    /* @__PURE__ */ jsx(Line, { x1: 52, y1: 12, x2: 44, y2: 20, stroke: BRAND_PURPLE_LIGHT, strokeWidth: 4, strokeLinecap: "round" }),
    /* @__PURE__ */ jsx(Line, { x1: 20, y1: 44, x2: 12, y2: 52, stroke: BRAND_PURPLE_LIGHT, strokeWidth: 4, strokeLinecap: "round" })
  ] });
}
export default function ReceiptPdfDocument({ data }) {
  return /* @__PURE__ */ jsx(Document, { title: `Beleg ${data.receiptNumber} \u2014 Lumo Learn`, children: /* @__PURE__ */ jsxs(Page, { size: "A4", style: styles.page, children: [
    /* @__PURE__ */ jsxs(View, { style: styles.headerRow, children: [
      /* @__PURE__ */ jsx(LogoMark, { size: 20 }),
      /* @__PURE__ */ jsx(Text, { style: styles.headerTitle, children: "Lumo Learn" })
    ] }),
    /* @__PURE__ */ jsx(View, { style: styles.headerRule }),
    /* @__PURE__ */ jsxs(View, { style: styles.metaRow, children: [
      /* @__PURE__ */ jsxs(View, { style: styles.sellerBlock, children: [
        /* @__PURE__ */ jsx(Text, { children: data.sellerName }),
        data.sellerAddressLines.map((line, i) => /* @__PURE__ */ jsx(Text, { children: line }, i)),
        /* @__PURE__ */ jsx(Text, { children: data.sellerEmail }),
        data.sellerTaxNumber && /* @__PURE__ */ jsxs(Text, { children: [
          "Steuernummer: ",
          data.sellerTaxNumber
        ] })
      ] }),
      /* @__PURE__ */ jsxs(View, { style: styles.metaBlock, children: [
        /* @__PURE__ */ jsxs(Text, { children: [
          "Beleg-Nr.: ",
          data.receiptNumber
        ] }),
        /* @__PURE__ */ jsxs(Text, { children: [
          "Datum: ",
          data.issueDate
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Text, { style: styles.sectionTitle, children: "Kleinbetragsrechnung" }),
    /* @__PURE__ */ jsx(View, { style: styles.table, children: /* @__PURE__ */ jsxs(View, { style: styles.tableRow, children: [
      /* @__PURE__ */ jsx(Text, { style: styles.tableCellDesc, children: data.description }),
      /* @__PURE__ */ jsx(Text, { style: styles.tableCellAmount, children: data.amountLabel })
    ] }) }),
    /* @__PURE__ */ jsxs(View, { style: styles.totalRow, children: [
      /* @__PURE__ */ jsx(Text, { style: styles.totalLabel, children: "Gesamtbetrag" }),
      /* @__PURE__ */ jsx(Text, { style: styles.totalAmount, children: data.amountLabel })
    ] }),
    /* @__PURE__ */ jsxs(Text, { style: styles.note, children: [
      "Gem\xE4\xDF \xA7 19 UStG wird keine Umsatzsteuer berechnet.",
      "\n",
      "Zahlung erhalten per Kreditkarte/Stripe (Referenz: ",
      data.paymentReference,
      ")."
    ] }),
    /* @__PURE__ */ jsxs(View, { style: styles.footer, fixed: true, children: [
      /* @__PURE__ */ jsxs(Text, { style: styles.footerText, children: [
        "Lumo Learn \u2014 ",
        data.sellerName
      ] }),
      /* @__PURE__ */ jsxs(Text, { style: styles.footerText, children: [
        "Beleg-Nr. ",
        data.receiptNumber
      ] })
    ] })
  ] }) });
}
