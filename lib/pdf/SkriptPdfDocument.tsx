import {
  Document,
  Page,
  Text,
  View,
  Svg,
  Circle,
  Line,
  Image,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";
import type { SkriptChapter } from "@/lib/content/types";
import { PDF_FORMULA_POINTS_PER_PIXEL, type RenderedFormula } from "@/lib/pdf/renderLatex";
import PdfFigure from "@/lib/pdf/SkriptPdfFigures";

// Unicode-fähige Schriftart registrieren, damit Sonderzeichen im Fließtext
// (√, Σ, ≤, σ, μ, λ, x̄ usw.) korrekt dargestellt werden — die eingebauten
// PDF-Standardschriften (Helvetica) unterstützen diese Zeichen nicht.
// (Getestet/verifiziert: diese URL liefert die echte TTF-Binärdatei zurück,
// nicht nur eine GitHub-LFS-Zeigerdatei.)
Font.register({
  family: "Noto Sans",
  src: "https://raw.githubusercontent.com/google/fonts/main/ofl/notosans/NotoSans%5Bwdth,wght%5D.ttf",
});

const BRAND_PURPLE = "#6D46E0";
const BRAND_PURPLE_LIGHT = "#7C5CFF";

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 56,
    paddingHorizontal: 48,
    fontSize: 11,
    fontFamily: "Noto Sans",
    color: "#1e1b2e",
  },
  footer: {
    position: "absolute",
    bottom: 22,
    left: 48,
    right: 48,
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
    fontSize: 9,
    color: "#8b8398",
  },
  footerBold: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#57534e",
  },
  chapterTitle: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    marginTop: 24,
    marginBottom: 6,
    color: "#4c1d95",
  },
  chapterIntro: {
    fontSize: 11,
    marginBottom: 14,
    color: "#44403c",
  },
  sectionHeading: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    marginTop: 14,
    marginBottom: 4,
  },
  paragraph: {
    marginBottom: 6,
    lineHeight: 1.5,
  },
  formulaBox: {
    backgroundColor: "#faf7f2",
    borderWidth: 1,
    borderColor: "#e7e2d8",
    borderRadius: 4,
    padding: 10,
    marginVertical: 6,
    alignItems: "center",
  },
  formulaFallbackText: {
    fontFamily: "Noto Sans",
    fontSize: 10.5,
  },
  exampleBox: {
    backgroundColor: "#f3f0ff",
    borderLeftWidth: 3,
    borderLeftColor: "#a78bfa",
    padding: 8,
    marginVertical: 6,
    fontSize: 10.5,
  },
  termRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginVertical: 6,
  },
  termBox: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#ddd6fe",
    borderRadius: 4,
    padding: 8,
  },
  termName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    color: "#6D46E0",
    marginBottom: 2,
  },
  termDef: {
    fontSize: 9.5,
    lineHeight: 1.4,
    color: "#292524",
  },
  coverBrandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 30,
  },
  coverTitle: {
    fontSize: 30,
    fontFamily: "Helvetica-Bold",
    color: "#1a1523",
  },
  coverSubtitle: {
    fontSize: 12,
    color: "#57534e",
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
        <LogoMark size={11} />
        <Text style={styles.footerBold}>Lumo</Text>
        <Text style={styles.footerText}>Skript</Text>
      </View>
      <Text
        style={styles.footerText}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      />
    </View>
  );
}

function FormulaBlock({
  formula,
  fallbackText,
}: {
  formula: RenderedFormula | undefined;
  fallbackText: string;
}) {
  if (formula) {
    const width = formula.width * PDF_FORMULA_POINTS_PER_PIXEL;
    const height = formula.height * PDF_FORMULA_POINTS_PER_PIXEL;
    return (
      <View style={styles.formulaBox}>
        <Image src={{ data: formula.png, format: "png" }} style={{ width, height }} />
      </View>
    );
  }
  // Fallback, falls das Rendern dieser einen Formel fehlgeschlagen ist —
  // dann lieber der ursprüngliche Text als eine kaputte Seite.
  return (
    <View style={styles.formulaBox}>
      <Text style={styles.formulaFallbackText}>{fallbackText}</Text>
    </View>
  );
}

export default function SkriptPdfDocument({
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
  return (
    <Document title={`Lumo Skript — ${moduleTitle}`}>
      <Page size="A4" style={styles.page}>
        <View style={styles.coverBrandRow}>
          <LogoMark size={34} />
          <View>
            <Text style={styles.coverTitle}>Lumo Skript</Text>
            <Text style={styles.coverSubtitle}>
              {moduleTitle} — {moduleSubtitle}
            </Text>
          </View>
        </View>
        <Text style={{ marginTop: 10, fontSize: 10, color: "#8b8398" }}>
          Erstellt für den persönlichen Gebrauch. Bitte nicht ohne Erlaubnis weiterverbreiten.
        </Text>
        <PageFooter />
      </Page>

      {chapters.map((chapter) => (
        <Page key={chapter.id} size="A4" style={styles.page} wrap>
          <Text style={styles.chapterTitle}>
            Kapitel {chapter.number}: {chapter.title}
          </Text>
          <Text style={styles.chapterIntro}>{chapter.intro}</Text>

          {chapter.sections.map((section) => (
            <View key={section.id}>
              <Text style={styles.sectionHeading}>{section.heading}</Text>
              {section.body[0] && (
                <Text style={styles.paragraph}>{section.body[0]}</Text>
              )}
              {section.terms && section.terms.length > 0 && (
                <View style={styles.termRow}>
                  {section.terms.map((t, i) => (
                    <View key={i} style={styles.termBox}>
                      <Text style={styles.termName}>{t.term}</Text>
                      <Text style={styles.termDef}>{t.definition}</Text>
                    </View>
                  ))}
                </View>
              )}
              {section.body.slice(1).map((paragraph, i) => (
                <Text key={i} style={styles.paragraph}>
                  {paragraph}
                </Text>
              ))}
              {section.figure && (
                <PdfFigure type={section.figure.type} caption={section.figure.caption} />
              )}
              {section.formulas?.map((f, i) => {
                const key = `${chapter.id}__${section.id}__${i}`;
                return <FormulaBlock key={key} formula={formulaImages[key]} fallbackText={f} />;
              })}
              {section.examples?.map((ex, i) => (
                <Text key={i} style={styles.exampleBox}>
                  Beispiel{section.examples!.length > 1 ? ` ${i + 1}` : ""}: {ex}
                </Text>
              ))}
            </View>
          ))}

          <PageFooter />
        </Page>
      ))}
    </Document>
  );
}
