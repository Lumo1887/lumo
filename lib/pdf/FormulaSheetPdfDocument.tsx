import { Document, Page, Text, View, Svg, Circle, Line, Image, Font, StyleSheet } from "@react-pdf/renderer";
import type { SkriptChapter } from "@/lib/content/types";
import { PDF_FORMULA_POINTS_PER_PIXEL, type RenderedFormula } from "@/lib/pdf/renderLatex";

// Hinweis: Font.register ist idempotent (ein erneuter Aufruf mit demselben
// Familiennamen überschreibt einfach dieselbe Registrierung) — daher hier
// bewusst dieselbe Registrierung wie in SkriptPdfDocument.tsx dupliziert,
// statt eine gemeinsame Abhängigkeit zwischen den beiden PDF-Dokumenten zu
// erzeugen.
//
// DejaVu Sans statt Noto Sans (openmaptiles/fonts-Subset): Letzteres ist ein
// für Kartenbeschriftungen zugeschnittener Font-Subset ohne logische/
// mathematische Operatoren (∧, ∨, ⇔ usw.) — genau die Zeichen, die in den
// Formel-Fallback-Texten dieser Formelsammlung verstümmelt dargestellt
// wurden (z. B. ∧ → ', ⇔ → Ô). DejaVu Sans deckt diese Unicode-Blöcke ab.
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
    paddingTop: 36,
    paddingBottom: 40,
    paddingHorizontal: 40,
    fontSize: 10,
    fontFamily: "DejaVu Sans",
    color: "#1e1b2e",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: "#1a1523",
  },
  headerSubtitle: {
    fontSize: 10,
    color: "#57534e",
  },
  headerRule: {
    marginTop: 10,
    marginBottom: 14,
    borderBottomWidth: 1.5,
    borderBottomColor: BRAND_PURPLE,
  },
  footer: {
    position: "absolute",
    bottom: 18,
    left: 40,
    right: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerBrand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  footerText: {
    fontSize: 8.5,
    color: "#8b8398",
  },
  footerBold: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    color: "#57534e",
  },
  chapterTitle: {
    fontSize: 12.5,
    fontFamily: "Helvetica-Bold",
    color: "#4c1d95",
    marginTop: 14,
    marginBottom: 6,
    backgroundColor: "#f3f0ff",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 3,
  },
  formulaGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  formulaBox: {
    width: "48.5%",
    backgroundColor: "#faf7f2",
    borderWidth: 1,
    borderColor: "#e7e2d8",
    borderRadius: 4,
    padding: 7,
    marginBottom: 8,
  },
  formulaSectionLabel: {
    fontSize: 7.5,
    color: "#a8a29e",
    marginBottom: 3,
  },
  formulaImageWrap: {
    alignItems: "center",
  },
  formulaFallbackText: {
    fontFamily: "DejaVu Sans",
    fontSize: 9,
    textAlign: "center",
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

function PageFooter() {
  return (
    <View style={styles.footer} fixed>
      <View style={styles.footerBrand}>
        <LogoMark size={10} />
        <Text style={styles.footerBold}>Lumo</Text>
        <Text style={styles.footerText}>Formelsammlung</Text>
      </View>
      <Text
        style={styles.footerText}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      />
    </View>
  );
}

// Breite einer Rasterzelle: A4 (595pt) minus Seitenränder (40pt beidseitig)
// minus Spaltenabstand (8pt), geteilt durch 2 Spalten (48.5% je Zelle), minus
// die eigene Zellen-Innenpolsterung (7pt beidseitig) — großzügig abgerundet,
// damit auch breite Formeln (z. B. Additionssatz, Satz von Bayes) sicher in
// ihre Zelle passen, statt über den Rand hinauszuragen.
const MAX_FORMULA_WIDTH = 215;

function FormulaCell({
  sectionHeading,
  formula,
  fallbackText,
}: {
  sectionHeading: string;
  formula: RenderedFormula | undefined;
  fallbackText: string;
}) {
  let imageStyle: { width: number; height: number } | null = null;
  if (formula) {
    const rawWidth = formula.width * PDF_FORMULA_POINTS_PER_PIXEL;
    const rawHeight = formula.height * PDF_FORMULA_POINTS_PER_PIXEL;
    const scale = rawWidth > MAX_FORMULA_WIDTH ? MAX_FORMULA_WIDTH / rawWidth : 1;
    imageStyle = { width: rawWidth * scale, height: rawHeight * scale };
  }

  return (
    <View style={styles.formulaBox} wrap={false}>
      <Text style={styles.formulaSectionLabel}>{sectionHeading}</Text>
      {formula && imageStyle ? (
        <View style={styles.formulaImageWrap}>
          <Image src={{ data: formula.png, format: "png" }} style={imageStyle} />
        </View>
      ) : (
        <Text style={styles.formulaFallbackText}>{fallbackText}</Text>
      )}
    </View>
  );
}

export default function FormulaSheetPdfDocument({
  chapters,
  formulaImages,
  moduleTitle,
  moduleSubtitle,
}: {
  chapters: SkriptChapter[];
  formulaImages: Record<string, RenderedFormula>;
  moduleTitle: string;
  moduleSubtitle: string;
}) {
  // Nur Kapitel, die überhaupt mindestens eine Formel enthalten — ein
  // Kapitel ohne Formeln würde sonst als leere Kopfzeile auftauchen.
  const chaptersWithFormulas = chapters.filter((chapter) =>
    chapter.sections.some((section) => section.formulas && section.formulas.length > 0)
  );

  return (
    <Document title={`Lumo Formelsammlung — ${moduleTitle}`}>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.headerRow}>
          <LogoMark size={22} />
          <View>
            <Text style={styles.headerTitle}>Formelsammlung</Text>
            <Text style={styles.headerSubtitle}>
              {moduleTitle} — {moduleSubtitle}
            </Text>
          </View>
        </View>
        <View style={styles.headerRule} />

        {chaptersWithFormulas.length === 0 && (
          <Text style={{ color: "#78716c" }}>
            Für dieses Modul sind noch keine Formeln hinterlegt.
          </Text>
        )}

        {chaptersWithFormulas.map((chapter) => (
          <View key={chapter.id} wrap>
            <Text style={styles.chapterTitle}>
              Kapitel {chapter.number}: {chapter.title}
            </Text>
            <View style={styles.formulaGrid}>
              {chapter.sections.flatMap((section) =>
                (section.formulas ?? []).map((f, i) => {
                  const key = `${chapter.id}__${section.id}__${i}`;
                  return (
                    <FormulaCell
                      key={key}
                      sectionHeading={section.heading}
                      formula={formulaImages[key]}
                      fallbackText={f}
                    />
                  );
                })
              )}
            </View>
          </View>
        ))}

        <PageFooter />
      </Page>
    </Document>
  );
}
