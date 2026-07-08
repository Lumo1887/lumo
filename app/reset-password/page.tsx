"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabaseClient";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [hasSession, setHasSession] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data }) => {
      setHasSession(Boolean(data.session));
      setChecking(false);
    });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError("Das Passwort muss mindestens 6 Zeichen lang sein.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Die beiden Passwörter stimmen nicht überein.");
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setDone(true);
    setTimeout(() => {
      router.push("/dashboard");
      router.refresh();
    }, 1500);
  }

  if (checking) {
    return <div className="mx-auto h-64 max-w-md animate-pulse rounded-xl2 bg-ink-100" />;
  }

  if (!hasSession) {
    return (
      <div className="mx-auto max-w-md text-center">
        <div className="card p-8">
          <h1 className="text-xl font-bold text-ink-900">Link abgelaufen oder ungültig</h1>
          <p className="mt-2 text-sm text-ink-600">
            Fordere über &bdquo;Passwort vergessen?&ldquo; auf der Anmeldeseite einen neuen
            Link an.
          </p>
          <a href="/login" className="btn-primary mt-6 inline-flex">
            Zur Anmeldung
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="card p-8">
        <h1 className="text-xl font-bold text-ink-900">Neues Passwort festlegen</h1>
        <p className="mt-1 text-sm text-ink-600">
          Wähle ein neues Passwort für dein Lumo-Konto.
        </p>

        {done ? (
          <p className="mt-6 text-sm text-green-700">
            Passwort gespeichert! Du wirst weitergeleitet …
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <input
              type="password"
              required
              minLength={6}
              placeholder="Neues Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
            />
            <input
              type="password"
              required
              minLength={6}
              placeholder="Neues Passwort bestätigen"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-lg border border-ink-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none"
            />

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button type="submit" disabled={loading} className="btn-primary w-full">
              {loading ? "Einen Moment …" : "Passwort speichern"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
