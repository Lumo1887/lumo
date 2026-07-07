import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-ink-600">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Lumo — von Studierenden für
            Studierende am KIT.
          </p>
          <p className="text-ink-600/80">
            Kein offizielles Angebot der Fachschaft oder des KIT. Inhalte
            basieren auf öffentlich zugänglichem Vorlesungs- und
            Übungsmaterial.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 border-t border-ink-100 pt-4 sm:justify-start">
          <Link href="/impressum" className="hover:text-brand-600 hover:underline">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-brand-600 hover:underline">
            Datenschutz
          </Link>
          <Link href="/agb" className="hover:text-brand-600 hover:underline">
            AGB
          </Link>
          <Link href="/widerruf" className="hover:text-brand-600 hover:underline">
            Widerrufsbelehrung
          </Link>
          <Link
            href="/widerruf#formular"
            className="font-semibold text-brand-700 hover:underline"
          >
            Vertrag widerrufen
          </Link>
        </div>
      </div>
    </footer>
  );
}
