"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { fetchAccess } from "@/lib/access";
import { getModule } from "@/lib/modules";

type ChatMessage = { role: "user" | "model"; text: string; image?: string };
type AccessState = "checking" | "loggedOut" | "locked" | "unlocked";

// Verkleinert ein ausgewähltes Foto client-seitig auf max. 1600px Kantenlänge
// und komprimiert es als JPEG (q=0.8), bevor es als Base64-Data-URL mit an
// den Chat gehängt wird. Fotos direkt von einer Handykamera sind sonst oft
// mehrere MB groß — das würde die Anfrage unnötig aufblähen und unnötig
// Kosten/Zeit bei der Gemini-Anfrage verursachen.
function resizeImageToDataUrl(file: File, maxDim = 1600, quality = 0.8): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error ?? new Error("Datei konnte nicht gelesen werden."));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("Bild konnte nicht geladen werden."));
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width >= height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas wird nicht unterstützt."));
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

type PurchaseLike = string | { moduleSlug?: string; module_slug?: string; slug?: string };

function ownsModule(purchases: PurchaseLike[] | undefined | null, slug: string): boolean {
  if (!purchases) return false;
  return purchases.some((p) => {
    if (typeof p === "string") return p === slug;
    return p.moduleSlug === slug || p.module_slug === slug || p.slug === slug;
  });
}

export default function ModuleChat({
  moduleSlug,
  moduleTitle,
}: {
  moduleSlug: string;
  moduleTitle: string;
}) {
  const [open, setOpen] = useState(false);
  const [access, setAccess] = useState<AccessState>("checking");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [pendingImage, setPendingImage] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  // Immer aktueller Nachrichtenverlauf als Ref — damit sendMessage() nicht an
  // eine bestimmte Render-Closure von "messages" gebunden ist. Wird u. a.
  // gebraucht, damit der Event-Listener unten (window "lumo:chat-ask") auch
  // Wochen nach dem Mounten noch mit dem echten, aktuellen Verlauf sendet.
  const messagesRef = useRef<ChatMessage[]>([]);
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    let active = true;
    fetchAccess()
      .then((info: any) => {
        if (!active) return;
        if (!info?.loggedIn) {
          setAccess("loggedOut");
        } else if (ownsModule(info?.purchases, moduleSlug)) {
          setAccess("unlocked");
          const example = getModule(moduleSlug)?.exampleQuestion ?? "Erklär mir ein zentrales Konzept aus dem Skript an einem Beispiel.";
          setMessages([
            {
              role: "model",
              text: `Hey! Ich bin dein ${moduleTitle}-Experte. Frag mich alles zum Skript — z. B. „${example}"`,
            },
          ]);
        } else {
          setAccess("locked");
        }
      })
      .catch(() => setAccess("loggedOut"));
    return () => {
      active = false;
    };
  }, [moduleSlug, moduleTitle]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  // Gemeinsame Sendefunktion für die Eingabezeile UND für Fragen, die von
  // außerhalb (z. B. "Frag den Chatbot dazu" im Übungstool bei einer falsch
  // beantworteten Frage) per Event angestoßen werden. useCallback statt einer
  // normalen Funktion, damit der weiter unten registrierte Event-Listener
  // keine veraltete ("stale") Closure über moduleSlug/sending/access behält.
  const sendMessage = useCallback(
    async (rawText: string, imageDataUrl?: string) => {
      const text = rawText.trim();
      if ((!text && !imageDataUrl) || sending || access !== "unlocked") return;
      const userMessage: ChatMessage = {
        role: "user",
        text: text || "Schau dir bitte dieses Foto an und hilf mir dabei.",
        ...(imageDataUrl ? { image: imageDataUrl } : {}),
      };
      const next = [...messagesRef.current, userMessage];
      setMessages(next);
      messagesRef.current = next;
      setInput("");
      setPendingImage(null);
      setImageError(null);
      setSending(true);
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ moduleSlug, messages: next }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          setMessages((m) => [
            ...m,
            { role: "model", text: data?.error ?? "Da ist etwas schiefgelaufen." },
          ]);
        } else {
          setMessages((m) => [...m, { role: "model", text: data.reply as string }]);
        }
      } catch {
        setMessages((m) => [
          ...m,
          { role: "model", text: "Verbindung fehlgeschlagen. Versuch es gleich nochmal." },
        ]);
      } finally {
        setSending(false);
      }
    },
    [moduleSlug, sending, access]
  );

  async function handleSend() {
    await sendMessage(input, pendingImage ?? undefined);
  }

  async function handlePhotoSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    // Zurücksetzen, damit das erneute Auswählen derselben Datei den
    // onChange-Handler wieder auslöst (sonst merkt sich der Browser den
    // Dateinamen und feuert kein zweites Mal).
    e.target.value = "";
    if (!file) return;
    setImageError(null);
    try {
      const dataUrl = await resizeImageToDataUrl(file);
      setPendingImage(dataUrl);
    } catch {
      setImageError("Foto konnte nicht verarbeitet werden. Versuch es mit einem anderen.");
    }
  }

  // Bridge zum Übungstool: QuizPlayer sitzt (im Layout) als Geschwister-
  // Komponente neben diesem Chat-Widget, ohne gemeinsamen State. Ein
  // "Frag den Chatbot dazu"-Klick bei einer falsch beantworteten Frage
  // feuert stattdessen ein window-CustomEvent mit der vorformulierten
  // Frage — das öffnet den Chat und schickt sie direkt ab (bzw. zeigt bei
  // fehlendem Kauf/Login den passenden Hinweis, was zusätzlich als
  // Kaufanreiz funktioniert).
  useEffect(() => {
    function handleAsk(e: Event) {
      const detail = (e as CustomEvent<{ prompt?: string }>).detail;
      if (!detail?.prompt) return;
      setOpen(true);
      sendMessage(detail.prompt);
    }
    window.addEventListener("lumo:chat-ask", handleAsk as EventListener);
    return () => window.removeEventListener("lumo:chat-ask", handleAsk as EventListener);
  }, [sendMessage]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 flex h-[28rem] w-80 flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card sm:w-96">
          <div className="flex items-center justify-between bg-brand-600 px-4 py-3 text-white">
            <span className="font-semibold">{moduleTitle}-Experte</span>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
              ✕
            </button>
          </div>

          {access === "checking" && (
            <div className="flex flex-1 items-center justify-center text-sm text-ink-500">
              Lädt …
            </div>
          )}

          {access === "loggedOut" && (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center text-sm text-ink-600">
              <p>Melde dich an, um den {moduleTitle}-Experten zu nutzen.</p>
              <Link
                href={`/login?next=/module/${moduleSlug}`}
                className="btn-primary !px-4 !py-2 text-sm"
              >
                Anmelden
              </Link>
            </div>
          )}

          {access === "locked" && (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center text-sm text-ink-600">
              <p>
                Der {moduleTitle}-Experte gehört zum Modul und ist nach dem Kauf sofort
                verfügbar.
              </p>
              <Link href={`/module/${moduleSlug}`} className="btn-primary !px-4 !py-2 text-sm">
                Modul ansehen
              </Link>
            </div>
          )}

          {access === "unlocked" && (
            <>
              <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={
                      m.role === "user"
                        ? "ml-8 rounded-2xl rounded-br-sm bg-brand-600 px-3 py-2 text-sm text-white"
                        : "mr-8 rounded-2xl rounded-bl-sm bg-ink-50 px-3 py-2 text-sm text-ink-800"
                    }
                  >
                    {m.image && (
                      <img
                        src={m.image}
                        alt="Angehängtes Foto"
                        className="mb-2 max-h-40 w-full rounded-lg object-cover"
                      />
                    )}
                    {m.text}
                  </div>
                ))}
                {sending && (
                  <div className="mr-8 rounded-2xl rounded-bl-sm bg-ink-50 px-3 py-2 text-sm text-ink-500">
                    Tippt …
                  </div>
                )}
              </div>
              {imageError && (
                <p className="border-t border-ink-100 px-3 pt-2 text-xs text-red-600">
                  {imageError}
                </p>
              )}
              {pendingImage && (
                <div className="flex items-center gap-2 border-t border-ink-100 px-3 pt-2">
                  <img
                    src={pendingImage}
                    alt="Vorschau des ausgewählten Fotos"
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <span className="text-xs text-ink-500">Foto wird mitgeschickt</span>
                  <button
                    onClick={() => setPendingImage(null)}
                    className="ml-auto text-ink-400 hover:text-ink-600"
                    title="Foto entfernen"
                  >
                    ✕
                  </button>
                </div>
              )}
              <div className="flex gap-2 border-t border-ink-100 p-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handlePhotoSelected}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={sending}
                  title="Foto hinzufügen (z. B. gelöste Übungsaufgabe)"
                  className="flex items-center justify-center rounded-full border border-ink-100 px-3 py-2 text-ink-600 transition hover:border-brand-300 hover:text-brand-700 disabled:opacity-50"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </button>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSend();
                  }}
                  placeholder={pendingImage ? "Was möchtest du dazu wissen? (optional)" : "Frag etwas zum Skript…"}
                  className="flex-1 rounded-full border border-ink-100 px-4 py-2 text-sm outline-none focus:border-brand-300"
                />
                <button
                  onClick={handleSend}
                  disabled={sending || (!input.trim() && !pendingImage)}
                  className="btn-primary !px-4 !py-2 text-sm disabled:opacity-50"
                >
                  Senden
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-2xl text-white shadow-glow transition hover:bg-brand-700"
        title={`${moduleTitle}-Experte`}
      >
        💬
      </button>
    </div>
  );
}
