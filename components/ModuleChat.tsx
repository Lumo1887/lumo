"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { fetchAccess } from "@/lib/access";
import { getModule } from "@/lib/modules";

type ChatAttachment = { dataUrl: string; name: string; isImage: boolean };
type ChatMessage = { role: "user" | "model"; text: string; attachment?: ChatAttachment };
type AccessState = "checking" | "loggedOut" | "locked" | "unlocked";

// Obergrenze für die Base64-Data-URL einer Anhang-Datei (Zeichen ≈ Bytes).
// Vercels Serverless Functions lehnen Request-Bodies über 4,5 MB grundsätzlich
// ab (FUNCTION_PAYLOAD_TOO_LARGE, plattformseitig, nicht per Next.js-Config
// umgehbar) — 4.000.000 Zeichen lässt genug Puffer für den restlichen
// Chatverlauf im selben Request.
const MAX_ATTACHMENT_DATA_URL_LENGTH = 4_000_000;
// Für nicht komprimierbare Dateien (PDFs) wird schon die Rohdateigröße
// geprüft, bevor überhaupt Base64 erzeugt wird (Base64 ist ca. 1,37x größer
// als die Rohdatei).
const MAX_RAW_NON_IMAGE_BYTES = 3_000_000;

// Verkleinert ein ausgewähltes Foto client-seitig auf max. maxDim Kantenlänge
// und komprimiert es als JPEG, bevor es als Base64-Data-URL mit an den Chat
// gehängt wird. Fotos direkt von einer Handykamera sind sonst oft mehrere MB
// groß — das würde die Anfrage unnötig aufblähen (und ggf. Vercels 4,5-MB-
// Limit für Request-Bodies sprengen).
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

// Liest eine Datei unverändert als Base64-Data-URL ein (für Dateitypen, die
// sich nicht sinnvoll client-seitig komprimieren lassen, z. B. PDFs).
function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error ?? new Error("Datei konnte nicht gelesen werden."));
    reader.onload = () => resolve(reader.result as string);
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

// Sprechblasen-Icon für den Chat-Button: gefüllte, moderne Chat-Blase mit
// drei Punkten (klassischer Messenger-Look). Ersetzt sowohl das 💬-Emoji
// (sah je nach Betriebssystem/Browser sehr unterschiedlich aus) als auch
// eine erste Outline-Variante, die zu schwach/dünn wirkte.
function ChatIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M2 11c0-4.97 4.48-9 10-9s10 4.03 10 9-4.48 9-10 9c-1.13 0-2.22-.16-3.24-.46L4 21l1.06-4.24C3.16 15.28 2 13.26 2 11z"
        fill="white"
      />
      <circle cx="7.7" cy="11" r="1.4" fill="#7c3aed" />
      <circle cx="12" cy="11" r="1.4" fill="#7c3aed" />
      <circle cx="16.3" cy="11" r="1.4" fill="#7c3aed" />
    </svg>
  );
}

// Kleines, generisches Datei-Icon (Feather-artiger Outline-Stil, passend zum
// Kamera-Icon und zum Instagram-Icon im Footer) für nicht-Bild-Anhänge.
function FileIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
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
  const [pendingAttachment, setPendingAttachment] = useState<ChatAttachment | null>(null);
  const [attachmentError, setAttachmentError] = useState<string | null>(null);
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  // Zählt verschachtelte dragenter/dragleave-Events (jedes Kind-Element im
  // Drop-Bereich feuert eigene Events) — nur bei Zähler 0 gilt "Maus hat den
  // Drop-Bereich wirklich verlassen". Verhindert Flackern des Overlays beim
  // Bewegen der Maus über Nachrichten/Buttons innerhalb des Chat-Fensters.
  const dragCounterRef = useRef(0);
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
    async (rawText: string, attachment?: ChatAttachment) => {
      const text = rawText.trim();
      if ((!text && !attachment) || sending || access !== "unlocked") return;
      const userMessage: ChatMessage = {
        role: "user",
        text:
          text ||
          (attachment?.isImage
            ? "Schau dir bitte dieses Foto an und hilf mir dabei."
            : "Schau dir bitte diese Datei an und hilf mir dabei."),
        ...(attachment ? { attachment } : {}),
      };
      const next = [...messagesRef.current, userMessage];
      setMessages(next);
      messagesRef.current = next;
      setInput("");
      setPendingAttachment(null);
      setAttachmentError(null);
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
    await sendMessage(input, pendingAttachment ?? undefined);
  }

  // Gemeinsame Verarbeitungslogik für eine ausgewählte/gedroppte Datei —
  // wird sowohl vom klassischen Datei-Picker (Kamera-Button) als auch vom
  // Drag-and-drop-Handler weiter unten aufgerufen.
  async function processFile(file: File) {
    setAttachmentError(null);
    const isImage = file.type.startsWith("image/");
    try {
      let dataUrl: string;
      if (isImage) {
        dataUrl = await resizeImageToDataUrl(file);
        if (dataUrl.length > MAX_ATTACHMENT_DATA_URL_LENGTH) {
          // Zweiter Versuch mit stärkerer Kompression für sehr große/
          // detailreiche Fotos, die auch nach der ersten Verkleinerung noch
          // zu groß sind.
          dataUrl = await resizeImageToDataUrl(file, 1200, 0.6);
        }
      } else {
        if (file.size > MAX_RAW_NON_IMAGE_BYTES) {
          setAttachmentError(
            "Die Datei ist zu groß (max. ca. 3 MB). Versuch es mit einer kleineren Datei oder weniger Seiten."
          );
          return;
        }
        dataUrl = await readFileAsDataUrl(file);
      }
      if (dataUrl.length > MAX_ATTACHMENT_DATA_URL_LENGTH) {
        setAttachmentError("Die Datei ist zu groß. Versuch es mit einer kleineren Datei.");
        return;
      }
      setPendingAttachment({ dataUrl, name: file.name, isImage });
    } catch {
      setAttachmentError("Datei konnte nicht verarbeitet werden. Versuch es mit einer anderen.");
    }
  }

  async function handleFileSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    // Zurücksetzen, damit das erneute Auswählen derselben Datei den
    // onChange-Handler wieder auslöst (sonst merkt sich der Browser den
    // Dateinamen und feuert kein zweites Mal).
    e.target.value = "";
    if (!file) return;
    await processFile(file);
  }

  // Drag-and-drop: erlaubt es, einen Screenshot direkt aus dem Finder
  // (macOS) oder Explorer (Windows) auf das Chat-Fenster zu ziehen, als
  // Alternative zum Kamera-Button. dragCounterRef zählt verschachtelte
  // Enter/Leave-Paare, damit das Overlay nicht flackert, wenn die Maus beim
  // Ziehen über Kind-Elemente (Nachrichten, Buttons) wandert.
  function handleDragEnter(e: React.DragEvent<HTMLDivElement>) {
    if (access !== "unlocked") return;
    e.preventDefault();
    if (!Array.from(e.dataTransfer.types).includes("Files")) return;
    dragCounterRef.current += 1;
    setIsDraggingFile(true);
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    if (access !== "unlocked") return;
    // Muss preventDefault aufrufen, sonst feuert der Browser kein onDrop.
    e.preventDefault();
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    if (access !== "unlocked") return;
    e.preventDefault();
    dragCounterRef.current = Math.max(0, dragCounterRef.current - 1);
    if (dragCounterRef.current === 0) setIsDraggingFile(false);
  }

  async function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    dragCounterRef.current = 0;
    setIsDraggingFile(false);
    if (access !== "unlocked" || sending) return;
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    await processFile(file);
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
        <div
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className="relative mb-3 flex h-[28rem] w-80 flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card sm:w-96"
        >
          {isDraggingFile && access === "unlocked" && (
            <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-brand-400 bg-brand-50/95 text-center text-sm font-medium text-brand-700">
              <FileIcon />
              Screenshot hier ablegen
            </div>
          )}
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
                    {m.attachment &&
                      (m.attachment.isImage ? (
                        <img
                          src={m.attachment.dataUrl}
                          alt="Angehängtes Foto"
                          className="mb-2 max-h-40 w-full rounded-lg object-cover"
                        />
                      ) : (
                        <div className="mb-2 flex items-center gap-1.5 rounded-lg bg-white/15 px-2 py-1.5 text-xs">
                          <FileIcon />
                          <span className="truncate">{m.attachment.name}</span>
                        </div>
                      ))}
                    {m.text}
                  </div>
                ))}
                {sending && (
                  <div className="mr-8 rounded-2xl rounded-bl-sm bg-ink-50 px-3 py-2 text-sm text-ink-500">
                    Tippt …
                  </div>
                )}
              </div>
              {attachmentError && (
                <p className="border-t border-ink-100 px-3 pt-2 text-xs text-red-600">
                  {attachmentError}
                </p>
              )}
              {pendingAttachment && (
                <div className="flex items-center gap-2 border-t border-ink-100 px-3 pt-2">
                  {pendingAttachment.isImage ? (
                    <img
                      src={pendingAttachment.dataUrl}
                      alt="Vorschau des ausgewählten Fotos"
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink-50 text-ink-500">
                      <FileIcon />
                    </div>
                  )}
                  <span className="truncate text-xs text-ink-500">
                    {pendingAttachment.isImage ? "Foto wird mitgeschickt" : pendingAttachment.name}
                  </span>
                  <button
                    onClick={() => setPendingAttachment(null)}
                    className="ml-auto shrink-0 text-ink-400 hover:text-ink-600"
                    title="Anhang entfernen"
                  >
                    ✕
                  </button>
                </div>
              )}
              <div className="flex gap-2 border-t border-ink-100 p-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,application/pdf"
                  capture="environment"
                  onChange={handleFileSelected}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={sending}
                  title="Foto oder PDF hinzufügen (z. B. gelöste Übungsaufgabe)"
                  className="flex shrink-0 items-center justify-center rounded-full border border-ink-100 px-3 py-2 text-ink-600 transition hover:border-brand-300 hover:text-brand-700 disabled:opacity-50"
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
                  placeholder={
                    pendingAttachment ? "Was möchtest du dazu wissen? (optional)" : "Frag etwas zum Skript…"
                  }
                  className="min-w-0 flex-1 rounded-full border border-ink-100 px-4 py-2 text-sm outline-none focus:border-brand-300"
                />
                <button
                  onClick={handleSend}
                  disabled={sending || (!input.trim() && !pendingAttachment)}
                  className="btn-primary shrink-0 !px-4 !py-2 text-sm disabled:opacity-50"
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
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-glow transition hover:bg-brand-700"
        title={`${moduleTitle}-Experte`}
      >
        <ChatIcon />
      </button>
    </div>
  );
}
