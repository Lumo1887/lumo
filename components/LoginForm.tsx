"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabaseClient";

type Mode = "login" | "signup";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/dashboard";

  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);
    const supabase = createClient();

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      setLoading(false);
      if (error) {
        setError(error.message);
        return;
      }
      router.push(next);
      router.refresh();
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(
            next
          )}`,
        },
      });
      setLoading(false);
      if (error) {
        setError(error.message);
        return;
      }
      if (data.session) {
        // E-Mail-Bestätigung ist deaktiviert -> direkt eingeloggt
        router.push(next);
        router.refresh();
      } else {
        setInfo(
          "Fast fertig! Wir haben dir eine Bestätigungs-E-Mail geschickt — klick auf den Link darin, um dich einzuloggen."
        );
      }
    }
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="card p-8">
        <div className="mb-6 flex rounded-full bg-ink-100 p-1 text-sm font-semibold">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 rounded-full py-2 transition ${
              mode === "login" ? "bg-white shadow-sm text-brand-700" : "text-ink-600"
            }`}
          >
            Anmelden
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`flex-1 rounded-full py-2 transition ${
              mode === "signup" ? "bg-white shadow-sm text-brand-700" : "text-ink-600"
            }`}
          >
            Registrieren
          </button>
        </div>

        <h1 className="text-xl font-bold text-ink-900">
          {mode === "login" ? "Willkommen zurück" : "Konto erstellen"}
        </h1>
        <p className="mt-1 text-sm text-ink-600">
          {mode === "login"
            ? "Melde dich an, um auf deine gekauften Module zuzugreifen."
            : "Registriere dich, um Module freizuschalten und deinen Lernfortschritt zu speichern."}
        </p>

        <form onSubmit={handleEmailSubmit} className="mt-6 space-y-3">
          <input
            type="email"
            required
            placeholder="E-Mail-Adresse"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
          />
          <input
            type="password"
            required
            minLength={6}
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
          />

          {error && <p className="text-sm text-red-600">{error}</p>}
          {info && <p className="text-sm text-green-700">{info}</p>}

          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? "Einen Moment …" : mode === "login" ? "Anmelden" : "Registrieren"}
          </button>
        </form>
      </div>
    </div>
  );
}
