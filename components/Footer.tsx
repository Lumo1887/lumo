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
      </div>
    </footer>
  );
}
