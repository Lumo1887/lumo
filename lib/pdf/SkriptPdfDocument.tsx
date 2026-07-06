import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import type { SkriptChapter } from "@/lib/skript-content";

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 50,
    paddingHorizontal: 48,
    fontSize: 11,
    fontFamily: "Helvetica",
    color: "#1e1b2e",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 48,
    right: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 9,
    color: "#8b8398",
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
    padding: 8,
    marginVertical: 6,
    fontFamily: "Helvetica-Oblique",
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
  coverTitle: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    color: "#4c1d95",
    marginBottom: 8,
  },
  coverSubtitle: {
    fontSize: 12,
    color: "#57534e",
  },
});

function Footer() {
  return (
    <View style={styles.footer} fixed>
      <Text>Lumo Skript</Text>
      <Text
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      />
    </View>
  );
}

export default function SkriptPdfDocument({
  chapters,
}: {
  chapters: SkriptChapter[];
}) {
  return (
    <Document title="Lumo Skript — Statistik I">
      <Page size="A4" style={styles.page}>
        <Text style={styles.coverTitle}>Lumo Skript</Text>
        <Text style={styles.coverSubtitle}>
          Statistik I — Deskriptive Statistik bis Verteilungsmodelle
        </Text>
        <Text style={{ marginTop: 30, fontSize: 10, color: "#8b8398" }}>
          Erstellt für den persönlichen Gebrauch. Bitte nicht ohne Erlaubnis weiterverbreiten.
        </Text>
        <Footer />
      </Page>

      {chapters.map((chapter) => (
        <Page key={chapter.id} size="A4" style={styles.page} wrap>
          <Text style={styles.chapterTitle}>
            Kapitel {chapter.number}: {chapter.title}
          </Text>
          <Text style={styles.chapterIntro}>{chapter.intro}</Text>

          {chapter.sections.map((section) => (
            <View key={section.id} wrap={false}>
              <Text style={styles.sectionHeading}>{section.heading}</Text>
              {section.body.map((paragraph, i) => (
                <Text key={i} style={styles.paragraph}>
                  {paragraph}
                </Text>
              ))}
              {section.formulas?.map((f, i) => (
                <Text key={i} style={styles.formulaBox}>
                  {f}
                </Text>
              ))}
              {section.example && (
                <Text style={styles.exampleBox}>Beispiel: {section.example}</Text>
              )}
            </View>
          ))}

          <Footer />
        </Page>
      ))}
    </Document>
  );
}
