import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/80 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-ink-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white shadow-glow">
            L
          </span>
          <span>Lumo</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-700 sm:flex">
          <Link href="/dashboard" className="hover:text-brand-700">
            Dashboard
          </Link>
          <Link href="/module/statistik-1" className="hover:text-brand-700">
            Statistik I
          </Link>
        </nav>
        <Link href="/dashboard" className="btn-primary !px-5 !py-2 text-sm">
          Jetzt starten
        </Link>
      </div>
    </header>
  );
}
