"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { fetchAccess } from "@/lib/access";
import { getModule } from "@/lib/modules";

type ChatMessage = { role: "user" | "model"; text: string };
type AccessState = "checking" | "loggedOut" | "locked" | "unlocked";

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
    async (rawText: string) => {
      const text = rawText.trim();
      if (!text || sending || access !== "unlocked") return;
      const next = [...messagesRef.current, { role: "user" as const, text }];
      setMessages(next);
      messagesRef.current = next;
      setInput("");
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
    await sendMessage(input);
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
                    {m.text}
                  </div>
                ))}
                {sending && (
                  <div className="mr-8 rounded-2xl rounded-bl-sm bg-ink-50 px-3 py-2 text-sm text-ink-500">
                    Tippt …
                  </div>
                )}
              </div>
              <div className="flex gap-2 border-t border-ink-100 p-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSend();
                  }}
                  placeholder="Frag etwas zum Skript…"
                  className="flex-1 rounded-full border border-ink-100 px-4 py-2 text-sm outline-none focus:border-brand-300"
                />
                <button
                  onClick={handleSend}
                  disabled={sending || !input.trim()}
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
