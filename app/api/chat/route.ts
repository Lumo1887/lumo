import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";
import { getModuleChapters } from "@/lib/content/registry";
import { getModule } from "@/lib/modules";

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

// Serverseitige Obergrenze für mitgeschickte Anhänge (Fotos oder PDFs;
// Base64-Zeichen ≈ Bytes). Der Client hält sich bereits an ein niedrigeres
// Limit (4.000.000 Zeichen, siehe ModuleChat.tsx) — Vercels Serverless
// Functions lehnen Request-Bodies über 4,5 MB grundsätzlich ab
// (plattformseitig, nicht per Next.js-Config umgehbar). Diese etwas höhere
// Grenze hier ist nur ein zusätzlicher Schutz-Backstop, kein primäres Limit.
const MAX_ATTACHMENT_DATA_URL_LENGTH = 4_300_000;

function parseDataUrl(dataUrl: string): { mimeType: string; data: string } | null {
  const match = /^data:([a-zA-Z0-9.+-]+\/[a-zA-Z0-9.+-]+);base64,(.+)$/.exec(dataUrl);
  if (!match) return null;
  return { mimeType: match[1], data: match[2] };
}

function buildContext(moduleSlug: string): string {
  const chapters = getModuleChapters(moduleSlug);
  if (!chapters) {
    return "Für dieses Modul liegt aktuell noch kein Skript-Inhalt vor.";
  }

  return chapters
    .map((chapter) => {
      const sections = chapter.sections
        .map((section) => {
          const parts = [`### ${section.heading}`, ...section.body];
          if (section.terms?.length) {
            parts.push(
              "Begriffe: " +
                section.terms.map((t) => `${t.term} = ${t.definition}`).join(" | ")
            );
          }
          if (section.formulas?.length) {
            parts.push("Formeln: " + section.formulas.join(" | "));
          }
          if (section.examples?.length) {
            parts.push("Beispiele: " + section.examples.join(" || "));
          }
          return parts.join("\n");
        })
        .join("\n\n");
      return `## Kapitel ${chapter.number}: ${chapter.title}\n${chapter.intro}\n\n${sections}`;
    })
    .join("\n\n---\n\n");
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Der Chatbot ist serverseitig noch nicht eingerichtet (GEMINI_API_KEY fehlt)." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const moduleSlug = body?.moduleSlug as string | undefined;
  const messages = body?.messages as
    | {
        role: "user" | "model";
        text: string;
        attachment?: { dataUrl: string; name: string; isImage: boolean };
      }[]
    | undefined;

  if (!moduleSlug || !messages || !Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  for (const m of messages) {
    if (m.attachment?.dataUrl && m.attachment.dataUrl.length > MAX_ATTACHMENT_DATA_URL_LENGTH) {
      return NextResponse.json(
        { error: "Die Datei ist zu groß. Versuch es mit einer kleineren Datei." },
        { status: 413 }
      );
    }
  }

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "Bitte melde dich an, um den Modul-Chat zu nutzen." },
      { status: 401 }
    );
  }

  const { data: purchase } = await supabase
    .from("purchases")
    .select("module_slug")
    .eq("user_id", user.id)
    .eq("module_slug", moduleSlug)
    .maybeSingle();

  if (!purchase) {
    return NextResponse.json(
      { error: "Dieser Chat ist nur für Käufer dieses Moduls freigeschaltet." },
      { status: 403 }
    );
  }

  const context = buildContext(moduleSlug);
  const moduleTitle = getModule(moduleSlug)?.title ?? "dieses Modul";

  const systemInstruction = {
    parts: [
      {
        text:
          `Du bist ein freundlicher, geduldiger Tutor für das Modul "${moduleTitle}" ` +
          "für Studierende der Wirtschaftswissenschaften am KIT. Du kennst das folgende " +
          "Skript sehr genau und beantwortest Fragen dazu klar, mit konkreten " +
          "Rechenbeispielen wo hilfreich, auf Deutsch, in einem unterstützenden, " +
          "nicht-belehrenden Ton. Wenn eine Frage über den Skriptinhalt hinausgeht, " +
          "beantworte sie trotzdem hilfreich, weise aber kurz darauf hin, dass es nicht " +
          "direkt im Skript steht. Halte Antworten prägnant (max. ca. 150 Wörter), außer " +
          "eine ausführliche Rechnung ist wirklich nötig. Manchmal schickt dir die Person " +
          "zusätzlich ein Foto oder ein PDF, z. B. von einer handschriftlich gelösten " +
          "Übungsaufgabe oder einem Übungsblatt — schau es dir dann genau an, geh den " +
          "Rechenweg Schritt für Schritt durch, weise konkret auf Fehler hin (wo genau sie " +
          "passieren) und erkläre kurz den richtigen Ansatz.\n\n" +
          "FORMATIERUNG (wichtig, wird automatisch gerendert): Antworte in Markdown. " +
          "Nutze **Fettschrift** für zentrale Begriffe, kurze Absätze statt eines " +
          "einzigen Blocks, und nummerierte Listen oder Aufzählungspunkte (- ...) für " +
          "mehrschrittige Rechenwege oder Aufzählungen. Schreibe JEDE Formel als echtes " +
          "LaTeX statt als Unicode-Text: Inline-Formeln in einzelne Dollarzeichen " +
          "$...$, freistehende/wichtige Formeln in doppelte Dollarzeichen $$...$$ " +
          "(z. B. $$\\frac{a}{b}$$ statt a/b, $x^2$ statt x², $\\sqrt{x}$ statt √x). " +
          "Keine rohen Unicode-Sonderzeichen für Brüche, Wurzeln, Exponenten oder " +
          "griechische Buchstaben in Formeln verwenden — dafür immer LaTeX-Befehle " +
          "(\\alpha, \\sum, \\int, \\leq usw.).\n\n" +
          "--- SKRIPT-INHALT ---\n" +
          context,
      },
    ],
  };

  const contents = messages.slice(-12).map((m) => {
    const parts: Record<string, unknown>[] = [];
    if (m.attachment?.dataUrl) {
      const parsed = parseDataUrl(m.attachment.dataUrl);
      if (parsed) {
        parts.push({ inline_data: { mime_type: parsed.mimeType, data: parsed.data } });
      }
    }
    if (m.text) {
      parts.push({ text: m.text });
    }
    if (parts.length === 0) {
      parts.push({ text: "" });
    }
    return {
      role: m.role === "model" ? "model" : "user",
      parts,
    };
  });

  try {
    const geminiRes = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction,
        contents,
        generationConfig: { temperature: 0.4, maxOutputTokens: 700 },
      }),
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error("Gemini-Fehler:", errText);
      return NextResponse.json(
        { error: "Der Chatbot ist gerade nicht erreichbar. Versuch es gleich nochmal." },
        { status: 502 }
      );
    }

    const data = await geminiRes.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text ?? "").join("") ||
      "Entschuldigung, ich konnte keine Antwort generieren.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat-Route-Fehler:", err);
    return NextResponse.json(
      { error: "Etwas ist schiefgelaufen. Versuch es gleich nochmal." },
      { status: 500 }
    );
  }
}
