"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabaseClient";
import { isAdminEmail } from "@/lib/admin";
import Logo from "@/components/Logo";

export default function Navbar() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? null);
      setLoaded(true);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setEmail(session?.user?.email ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/80 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-700 sm:flex">
          <Link href="/dashboard" className="hover:text-brand-700">
            Dashboard
          </Link>
          {loaded && isAdminEmail(email) && (
            <Link href="/admin" className="hover:text-brand-700">
              Admin
            </Link>
          )}
        </nav>

        {loaded && email ? (
          <div className="flex items-center gap-3">
            <Link
              href="/profile"
              className="hidden max-w-[160px] truncate text-sm text-ink-600 hover:text-brand-700 sm:inline"
              title="Zum Profil"
            >
              {email}
            </Link>
            <Link href="/profile" className="btn-secondary !px-4 !py-2 text-sm sm:hidden">
              Profil
            </Link>
            <button
              onClick={handleLogout}
              className="btn-secondary !px-4 !py-2 text-sm"
            >
              Abmelden
            </button>
          </div>
        ) : (
          <Link href="/login" className="btn-primary !px-5 !py-2 text-sm">
            Anmelden
          </Link>
        )}
      </div>
    </header>
  );
}
