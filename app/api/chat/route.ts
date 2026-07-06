import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";
import { skriptChapters } from "@/lib/skript-content";

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

function buildContext(moduleSlug: string): string {
  if (moduleSlug !== "statistik-1") {
    return "Für dieses Modul liegt aktuell noch kein Skript-Inhalt vor.";
  }

  return skriptChapters
    .map((chapter) => {
      const sections = chapter.sections
        .map((section) => {
          const parts = [`### ${section.heading}`, ...section.body];
          if (section.formulas?.length) {
            parts.push("Formeln: " + section.formulas.join(" | "));
          }
          if (section.example) {
            parts.push("Beispiel: " + section.example);
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
  const messages = body?.messages as { role: "user" | "model"; text: string }[] | undefined;

  if (!moduleSlug || !messages || !Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
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

  const systemInstruction = {
    parts: [
      {
        text:
          "Du bist ein freundlicher, geduldiger Statistik-Tutor für Studierende der " +
          "Wirtschaftswissenschaften am KIT. Du kennst das folgende Skript sehr genau und " +
          "beantwortest Fragen dazu klar, mit konkreten Rechenbeispielen wo hilfreich, auf " +
          "Deutsch, in einem unterstützenden, nicht-belehrenden Ton. Wenn eine Frage über den " +
          "Skriptinhalt hinausgeht, beantworte sie trotzdem hilfreich, weise aber kurz darauf " +
          "hin, dass es nicht direkt im Skript steht. Halte Antworten prägnant (max. ca. 150 " +
          "Wörter), außer eine ausführliche Rechnung ist wirklich nötig.\n\n" +
          "--- SKRIPT-INHALT ---\n" +
          context,
      },
    ],
  };

  const contents = messages.slice(-12).map((m) => ({
    role: m.role === "model" ? "model" : "user",
    parts: [{ text: m.text }],
  }));

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
