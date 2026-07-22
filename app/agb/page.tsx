import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB — Lumo Learn",
};

export default function AgbPage() {
  return (
    <div className="card mx-auto max-w-3xl p-8 sm:p-10">
      <h1 className="text-3xl font-bold text-ink-900">
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        1. Geltungsbereich und Vertragspartner
      </h2>
      <p className="mt-2 text-ink-700">
        Diese AGB gelten für alle Verträge zwischen Carlo Pochert,
        Gerwigstraße 29, 76131 Karlsruhe (nachfolgend &bdquo;Lumo Learn&ldquo;)
        und Nutzer:innen (nachfolgend &bdquo;du&ldquo;/&bdquo;Kunde&ldquo;)
        über die kostenpflichtigen digitalen Inhalte auf lumo-learn.de.
        Lumo Learn richtet sich an Verbraucher:innen im Sinne des § 13 BGB.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        2. Leistungsbeschreibung
      </h2>
      <p className="mt-2 text-ink-700">
        Lumo Learn bietet für einzelne Hochschulmodule digitale Lernmaterialien
        an: ein digitales Skript, ein interaktives Übungstool mit
        Altklausur- und Tutoriumsaufgaben, einen KI-gestützten Chatbot zum
        jeweiligen Modul sowie einen PDF-Export des Skripts. Der
        Leistungsumfang eines konkreten Moduls ergibt sich aus der
        jeweiligen Produktseite zum Kaufzeitpunkt. Es besteht keine
        Garantie für einen bestimmten Lern- oder Prüfungserfolg.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        3. Vertragsschluss
      </h2>
      <p className="mt-2 text-ink-700">
        Die Darstellung der Module auf der Website ist kein bindendes
        Angebot, sondern eine Aufforderung zur Bestellung. Mit Klick auf
        den Kaufbutton und Abschluss des Zahlungsvorgangs über unseren
        Zahlungsdienstleister Stripe gibst du ein verbindliches
        Kaufangebot ab. Der Vertrag kommt zustande, sobald die Zahlung
        erfolgreich verarbeitet und dir der Zugang zum Modul
        freigeschaltet wurde; dies wird dir zusätzlich per E-Mail
        bestätigt.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        4. Preise und Zahlung
      </h2>
      <p className="mt-2 text-ink-700">
        Die zum Kaufzeitpunkt auf der jeweiligen Produktseite angegebenen
        Preise gelten. Gemäß § 19 Abs. 1 UStG wird keine Umsatzsteuer
        ausgewiesen (Kleinunternehmerregelung). Die Zahlung erfolgt
        vorab über den Zahlungsdienstleister Stripe mit den dort
        angebotenen Zahlungsmitteln.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        5. Nutzungsrechte
      </h2>
      <p className="mt-2 text-ink-700">
        Mit dem Kauf erhältst du ein einfaches, nicht übertragbares
        Nutzungsrecht am erworbenen Modul zur persönlichen,
        nicht-kommerziellen Nutzung im Rahmen deines Studiums. Eine
        Weitergabe, Veröffentlichung oder sonstige Verbreitung der
        Inhalte (einschließlich des PDF-Exports) an Dritte ist nicht
        gestattet.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        6. Zugang und Verfügbarkeit
      </h2>
      <p className="mt-2 text-ink-700">
        Der Zugang zu einem erworbenen Modul ist an dein Nutzerkonto
        gebunden und zeitlich nicht befristet. Wir sind bemüht, die
        Inhalte fortlaufend zu pflegen, behalten uns aber vor, sie im
        Rahmen inhaltlicher Aktualisierungen anzupassen oder zu
        erweitern.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        7. Widerrufsrecht
      </h2>
      <p className="mt-2 text-ink-700">
        Als Verbraucher:in steht dir grundsätzlich ein
        Widerrufsrecht zu — Einzelheiten findest du in unserer separaten{" "}
        <a href="/widerruf" className="text-brand-600 underline">
          Widerrufsbelehrung
        </a>
        .
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        8. Gewährleistung und Haftung
      </h2>
      <p className="mt-2 text-ink-700">
        Die Inhalte werden mit größtmöglicher Sorgfalt erstellt und
        stellen kein offizielles Angebot einer Hochschule oder Fachschaft
        dar. Für die inhaltliche Richtigkeit,
        Vollständigkeit oder Aktualität kann keine Gewähr übernommen
        werden. Wir haften unbeschränkt für Vorsatz und grobe
        Fahrlässigkeit sowie nach Maßgabe des Produkthaftungsgesetzes;
        im Übrigen haften wir nur bei Verletzung einer wesentlichen
        Vertragspflicht und beschränkt auf den vorhersehbaren,
        vertragstypischen Schaden.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        9. Änderung der AGB
      </h2>
      <p className="mt-2 text-ink-700">
        Wir behalten uns vor, diese AGB mit Wirkung für die Zukunft zu
        ändern, etwa bei rechtlichen Anpassungen oder neuen Funktionen.
        Es gilt die zum Zeitpunkt deines Kaufs abrufbare Fassung.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        10. Schlussbestimmungen
      </h2>
      <p className="mt-2 text-ink-700">
        Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts,
        soweit dir als Verbraucher:in dadurch nicht der Schutz zwingender
        Bestimmungen des Rechts deines gewöhnlichen Aufenthaltsorts
        entzogen wird. Sollte eine Bestimmung dieser AGB unwirksam sein,
        bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
      </p>
    </div>
  );
}
