import { Document, Page, Text, View, Svg, Circle, Line, Font, StyleSheet } from "@react-pdf/renderer";

// Hinweis: Font.register ist idempotent (siehe Kommentar in
// FormulaSheetPdfDocument.tsx) — dieselbe Registrierung wird hier bewusst
// dupliziert, um dieses Dokument unabhängig von den Skript-PDF-Modulen zu
// halten.
Font.register({
  family: "DejaVu Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/dejavu-fonts-ttf@2.37.3/ttf/DejaVuSans.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/dejavu-fonts-ttf@2.37.3/ttf/DejaVuSans-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

const BRAND_PURPLE = "#6D46E0";
const BRAND_PURPLE_LIGHT = "#7C5CFF";

const styles = StyleSheet.create({
  page: {
    padding: 48,
    fontSize: 10.5,
    fontFamily: "DejaVu Sans",
    color: "#1e1b2e",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 6,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "DejaVu Sans",
    fontWeight: "bold",
    color: "#1a1523",
  },
  headerRule: {
    marginTop: 14,
    marginBottom: 22,
    borderBottomWidth: 1.5,
    borderBottomColor: BRAND_PURPLE,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  sellerBlock: {
    fontSize: 9.5,
    color: "#57534e",
    lineHeight: 1.5,
  },
  metaBlock: {
    fontSize: 9.5,
    color: "#57534e",
    textAlign: "right",
    lineHeight: 1.5,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "DejaVu Sans",
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1a1523",
  },
  table: {
    borderWidth: 1,
    borderColor: "#e7e2d8",
    borderRadius: 4,
    marginBottom: 18,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  tableCellDesc: {
    flex: 1,
    paddingRight: 12,
  },
  tableCellAmount: {
    width: 90,
    textAlign: "right",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingTop: 4,
  },
  totalLabel: {
    fontSize: 11,
    fontFamily: "DejaVu Sans",
    fontWeight: "bold",
    marginRight: 20,
  },
  totalAmount: {
    fontSize: 11,
    fontFamily: "DejaVu Sans",
    fontWeight: "bold",
  },
  note: {
    fontSize: 9,
    color: "#78716c",
    marginTop: 24,
    lineHeight: 1.5,
  },
  footer: {
    position: "absolute",
    bottom: 32,
    left: 48,
    right: 48,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontSize: 8,
    color: "#a8a29e",
  },
});

function LogoMark({ size = 16 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Circle cx={32} cy={32} r={9} fill={BRAND_PURPLE} />
      <Line x1={32} y1={4} x2={32} y2={15} stroke={BRAND_PURPLE_LIGHT} strokeWidth={4} strokeLinecap="round" />
      <Line x1={32} y1={49} x2={32} y2={60} stroke={BRAND_PURPLE_LIGHT} strokeWidth={4} strokeLinecap="round" />
      <Line x1={4} y1={32} x2={15} y2={32} stroke={BRAND_PURPLE_LIGHT} strokeWidth={4} strokeLinecap="round" />
      <Line x1={49} y1={32} x2={60} y2={32} stroke={BRAND_PURPLE_LIGHT} strokeWidth={4} strokeLinecap="round" />
      <Line x1={12} y1={12} x2={20} y2={20} stroke={BRAND_PURPLE_LIGHT} strokeWidth={4} strokeLinecap="round" />
      <Line x1={44} y1={44} x2={52} y2={52} stroke={BRAND_PURPLE_LIGHT} strokeWidth={4} strokeLinecap="round" />
      <Line x1={52} y1={12} x2={44} y2={20} stroke={BRAND_PURPLE_LIGHT} strokeWidth={4} strokeLinecap="round" />
      <Line x1={20} y1={44} x2={12} y2={52} stroke={BRAND_PURPLE_LIGHT} strokeWidth={4} strokeLinecap="round" />
    </Svg>
  );
}

// Datenstruktur für eine Kleinbetragsrechnung (§33 UStDV) — bewusst schlank
// gehalten: als Kleinunternehmer (§19 UStG) wird keine Umsatzsteuer
// ausgewiesen, und bei Beträgen unter 250 € brutto sind Name/Anschrift der
// kaufenden Person keine Pflichtangabe. sellerTaxNumber ist optional, weil
// die Steuernummer aktuell noch beim Finanzamt in Bearbeitung ist — sobald
// sie da ist, einfach die Umgebungsvariable OWNER_TAX_NUMBER setzen, dann
// erscheint sie automatisch auf allen künftigen Belegen.
export interface ReceiptData {
  receiptNumber: string;
  issueDate: string;
  sellerName: string;
  sellerAddressLines: string[];
  sellerEmail: string;
  sellerTaxNumber?: string;
  description: string;
  amountLabel: string;
  paymentReference: string;
}

export default function ReceiptPdfDocument({ data }: { data: ReceiptData }) {
  return (
    <Document title={`Beleg ${data.receiptNumber} — Lumo Learn`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerRow}>
          <LogoMark size={20} />
          <Text style={styles.headerTitle}>Lumo Learn</Text>
        </View>
        <View style={styles.headerRule} />

        <View style={styles.metaRow}>
          <View style={styles.sellerBlock}>
            <Text>{data.sellerName}</Text>
            {data.sellerAddressLines.map((line, i) => (
              <Text key={i}>{line}</Text>
            ))}
            <Text>{data.sellerEmail}</Text>
            {data.sellerTaxNumber && <Text>Steuernummer: {data.sellerTaxNumber}</Text>}
          </View>
          <View style={styles.metaBlock}>
            <Text>Beleg-Nr.: {data.receiptNumber}</Text>
            <Text>Datum: {data.issueDate}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Kleinbetragsrechnung</Text>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellDesc}>{data.description}</Text>
            <Text style={styles.tableCellAmount}>{data.amountLabel}</Text>
          </View>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Gesamtbetrag</Text>
          <Text style={styles.totalAmount}>{data.amountLabel}</Text>
        </View>

        <Text style={styles.note}>
          Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.{"\n"}
          Zahlung erhalten per Kreditkarte/Stripe (Referenz: {data.paymentReference}).
        </Text>

        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>Lumo Learn — {data.sellerName}</Text>
          <Text style={styles.footerText}>Beleg-Nr. {data.receiptNumber}</Text>
        </View>
      </Page>
    </Document>
  );
}
