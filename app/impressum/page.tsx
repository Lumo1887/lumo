import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Lumo",
};

export default function ImpressumPage() {
  return (
    <div className="card mx-auto max-w-3xl p-8 sm:p-10">
      <h1 className="text-3xl font-bold text-ink-900">Impressum</h1>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        Angaben gemäß § 5 TMG / § 18 Abs. 2 MStV
      </h2>
      <p className="mt-2 text-ink-700">
        Carlo Pochert
        <br />
        Gerwigstraße 29
        <br />
        76131 Karlsruhe
        <br />
        Deutschland
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">Kontakt</h2>
      <p className="mt-2 text-ink-700">
        Telefon: 015255798152
        <br />
        E-Mail: lumolearn@outlook.de
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        Umsatzsteuer
      </h2>
      <p className="mt-2 text-ink-700">
        Gemäß § 19 Abs. 1 UStG wird keine Umsatzsteuer erhoben und
        ausgewiesen (Kleinunternehmerregelung).
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        Verantwortlich für den Inhalt
      </h2>
      <p className="mt-2 text-ink-700">
        Carlo Pochert (Anschrift wie oben)
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        Streitschlichtung
      </h2>
      <p className="mt-2 text-ink-700">
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-600 underline"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        . Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor
        einer Verbraucherschlichtungsstelle nicht verpflichtet und nehmen
        daran nicht teil.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        Haftung für Inhalte
      </h2>
      <p className="mt-2 text-ink-700">
        Lumo ist ein privates, von Studierenden betriebenes Projekt und
        steht in keiner Verbindung zur Fachschaft oder zum Karlsruher
        Institut für Technologie (KIT). Die Skript- und Übungsinhalte
        wurden mit größtmöglicher Sorgfalt auf Basis öffentlich
        zugänglichen Vorlesungs- und Übungsmaterials erstellt, eine
        Gewähr für Richtigkeit, Vollständigkeit oder Aktualität kann
        jedoch nicht übernommen werden.
      </p>
    </div>
  );
}
