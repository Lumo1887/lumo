import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-ink-600">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Lumo Learn — von Studierenden für
            Studierende.
          </p>
          <p className="text-ink-600/80">
            Kein offizielles Angebot einer Hochschule oder Fachschaft.
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
          <a
            href="https://www.instagram.com/lumolearn.de/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lumo auf Instagram"
            className="ml-0 flex items-center gap-1.5 hover:text-brand-600 sm:ml-auto"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
