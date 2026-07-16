import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

// Erzeugt aus einer falsch beantworteten Übungsfrage eine NEUE, ähnliche
// Frage zum selben Thema (gleicher Typ, gleiche Schwierigkeit, aber andere
// Zahlen/Formulierung) — der "Warum war das falsch"-Vertiefungsloop: statt
// nur die Erklärung zu lesen, kann der Fehler sofort an einer neuen Aufgabe
// geübt werden.
export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Diese Funktion ist serverseitig noch nicht eingerichtet (GEMINI_API_KEY fehlt)." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const moduleSlug = body?.moduleSlug as string | undefined;
  const question = body?.question as
    | {
        topic?: string;
        type?: "mc" | "numeric";
        prompt?: string;
        options?: string[];
        correctIndex?: number;
        correctValue?: number;
        unit?: string;
        explanation?: string;
      }
    | undefined;

  if (!moduleSlug || !question?.prompt || !question?.type) {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "Bitte melde dich an, um diese Funktion zu nutzen." },
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
      { error: "Diese Funktion ist nur für Käufer dieses Moduls freigeschaltet." },
      { status: 403 }
    );
  }

  const originalDescription =
    question.type === "mc"
      ? `Multiple-Choice-Frage mit den Optionen ${JSON.stringify(question.options ?? [])}, richtige Antwort war Index ${question.correctIndex}.`
      : `Numerische Frage, richtige Antwort war ${question.correctValue}${question.unit ? " " + question.unit : ""}.`;

  const prompt =
    `Ein Studierender hat diese Übungsfrage zum Thema "${question.topic ?? "unbekannt"}" gerade falsch beantwortet:\n\n` +
    `Frage: ${question.prompt}\n${originalDescription}\nErklärung: ${question.explanation ?? ""}\n\n` +
    "Erstelle GENAU EINE neue Übungsfrage zum selben Thema und mit derselben Struktur/Schwierigkeit, " +
    "aber mit anderen konkreten Zahlen und/oder anderem Szenario, damit der Studierende das gleiche " +
    "Konzept nochmal an einem frischen Beispiel üben kann. " +
    "Antworte AUSSCHLIESSLICH mit einem JSON-Objekt (kein Markdown, kein Codeblock), exakt in einem " +
    "dieser zwei Formate:\n" +
    '{"type":"mc","prompt":"...","options":["...","...","...","..."],"correctIndex":0,"explanation":"..."}\n' +
    'oder\n' +
    '{"type":"numeric","prompt":"...","correctValue":0,"tolerance":0.1,"unit":"...","explanation":"..."}\n' +
    "Halte prompt und explanation auf Deutsch und ähnlich lang wie im Original.";

  try {
    const geminiRes = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
          responseMimeType: "application/json",
        },
      }),
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error("Gemini-Fehler (practice-question):", errText);
      return NextResponse.json(
        { error: "Konnte gerade keine Übungsfrage generieren. Versuch es gleich nochmal." },
        { status: 502 }
      );
    }

    const data = await geminiRes.json();
    const raw =
      data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text ?? "").join("") ?? "";

    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      // Falls das Modell trotz Anweisung Markdown-Codeblöcke drumherum baut.
      const match = raw.match(/\{[\s\S]*\}/);
      if (!match) throw new Error("Keine gültige JSON-Antwort erhalten.");
      parsed = JSON.parse(match[0]);
    }

    const q = parsed as {
      type?: string;
      prompt?: string;
      options?: string[];
      correctIndex?: number;
      correctValue?: number;
      tolerance?: number;
      unit?: string;
      explanation?: string;
    };

    if (!q?.prompt || !q?.explanation || (q.type !== "mc" && q.type !== "numeric")) {
      throw new Error("Unvollständige Frage erhalten.");
    }
    if (q.type === "mc" && (!Array.isArray(q.options) || q.options.length < 2 || typeof q.correctIndex !== "number")) {
      throw new Error("Unvollständige Multiple-Choice-Frage erhalten.");
    }
    if (q.type === "numeric" && typeof q.correctValue !== "number") {
      throw new Error("Unvollständige numerische Frage erhalten.");
    }

    return NextResponse.json({
      question: {
        topic: question.topic ?? "Zusatzübung",
        type: q.type,
        prompt: q.prompt,
        options: q.options,
        correctIndex: q.correctIndex,
        correctValue: q.correctValue,
        tolerance: q.tolerance ?? 0.5,
        unit: q.unit,
        explanation: q.explanation,
      },
    });
  } catch (err) {
    console.error("practice-question-Fehler:", err);
    return NextResponse.json(
      { error: "Konnte gerade keine passende Übungsfrage erstellen. Versuch es gleich nochmal." },
      { status: 500 }
    );
  }
}
