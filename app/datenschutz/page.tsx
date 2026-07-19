import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Lumo Learn",
};

export default function DatenschutzPage() {
  return (
    <div className="card mx-auto max-w-3xl p-8 sm:p-10">
      <h1 className="text-3xl font-bold text-ink-900">Datenschutzerklärung</h1>
      <p className="mt-3 text-ink-600">
        Diese Erklärung informiert dich darüber, welche personenbezogenen
        Daten bei der Nutzung von Lumo Learn verarbeitet werden, zu welchem Zweck
        und auf welcher Rechtsgrundlage — gemäß Art. 13, 14 DSGVO.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        1. Verantwortlicher
      </h2>
      <p className="mt-2 text-ink-700">
        Carlo Pochert
        <br />
        Gerwigstraße 29, 76131 Karlsruhe
        <br />
        E-Mail: lumolearn@outlook.de
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        2. Hosting (Vercel)
      </h2>
      <p className="mt-2 text-ink-700">
        Diese Website wird bei Vercel Inc. (USA) gehostet. Beim Aufruf der
        Seite verarbeitet Vercel automatisch technische Verbindungsdaten
        (u. a. IP-Adresse, Datum und Uhrzeit der Anfrage, aufgerufene
        Seite, Browsertyp) in sogenannten Server-Logfiles, um den Betrieb
        der Website technisch zu ermöglichen und abzusichern. Rechtsgrundlage
        ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem
        sicheren und funktionsfähigen Betrieb). Da Vercel Inc. in den USA
        sitzt, kann es dabei zu einer Datenübermittlung in ein Drittland
        kommen; Vercel verpflichtet sich hierzu vertraglich zu den
        EU-Standardvertragsklauseln.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        3. Konto, Login und Datenbank (Supabase)
      </h2>
      <p className="mt-2 text-ink-700">
        Für Registrierung, Login und die Speicherung deiner Nutzerdaten
        (E-Mail-Adresse, gekaufte Module, Lesefortschritt) nutzen wir
        Supabase als Backend-Dienstleister. Meldest du dich per E-Mail und
        Passwort an, wird dein Passwort verschlüsselt gespeichert und ist
        für uns nicht einsehbar. Meldest du dich stattdessen über
        &bdquo;Mit Google anmelden&ldquo; an, verarbeitet Google im Rahmen
        dieses Anmeldevorgangs deine Google-Kontodaten (z. B.
        E-Mail-Adresse, Name); es gelten ergänzend die
        Datenschutzbestimmungen von Google. Rechtsgrundlage ist Art. 6
        Abs. 1 lit. b DSGVO (Erfüllung des Nutzungsvertrags mit dir).
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        4. Zahlungsabwicklung (Stripe)
      </h2>
      <p className="mt-2 text-ink-700">
        Käufe werden über den Zahlungsdienstleister Stripe abgewickelt.
        Dabei werden die für die Zahlung erforderlichen Daten (z. B.
        Zahlungsmittel, Rechnungsadresse, Kaufbetrag) direkt an Stripe
        übermittelt und dort verarbeitet; wir selbst erhalten und
        speichern keine vollständigen Zahlungs- bzw. Kartendaten.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
        Weitere Informationen findest du in der Datenschutzerklärung von
        Stripe.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        5. KI-Chatbot (Google Gemini API)
      </h2>
      <p className="mt-2 text-ink-700">
        Der modulinterne KI-Tutor nutzt die Google Gemini API. Deine
        Chat-Eingaben werden zur Beantwortung an Google übermittelt und
        dort verarbeitet; sie werden nicht mit deinem übrigen Nutzerkonto
        durch uns dauerhaft verknüpft gespeichert. Rechtsgrundlage ist
        Art. 6 Abs. 1 lit. b DSGVO (Erbringung der von dir gewünschten
        Funktion) bzw. lit. f (berechtigtes Interesse an einem
        funktionsfähigen Produkt). Nutze den Chatbot bitte nicht für
        besonders sensible personenbezogene Angaben.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        6. E-Mail-Versand (Resend)
      </h2>
      <p className="mt-2 text-ink-700">
        Nutzt du unser Online-Formular zum Widerruf deines Vertrags, senden
        wir dir zur unmittelbaren elektronischen Eingangsbestätigung (§ 356a
        BGB) automatisch eine Bestätigungsmail; zusätzlich werden wir selbst
        über deinen Widerruf benachrichtigt. Dabei werden dein Name, deine
        E-Mail-Adresse sowie ggf. weitere von dir freiwillig angegebene
        Angaben (z. B. Modul, Bestellreferenz, Nachricht) über den
        E-Mail-Versanddienstleister Resend, Inc. (USA) verarbeitet.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. c DSGVO (Erfüllung unserer
        gesetzlichen Informationspflicht) i. V. m. Art. 6 Abs. 1 lit. b DSGVO
        (Vertragsabwicklung). Da Resend, Inc. in den USA sitzt, kann es
        dabei zu einer Datenübermittlung in ein Drittland kommen; Resend
        verpflichtet sich hierzu vertraglich zu den EU-Standardvertragsklauseln.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        7. Cookies und lokale Speicherung
      </h2>
      <p className="mt-2 text-ink-700">
        Wir setzen technisch notwendige Cookies bzw. vergleichbare
        Speichertechnologien ein, die für den Login und den Betrieb der
        Website erforderlich sind (Session-Verwaltung über Supabase).
        Diese sind gemäß § 25 Abs. 2 TTDSG bzw. Art. 6 Abs. 1 lit. b
        DSGVO ohne gesonderte Einwilligung zulässig, da sie unbedingt
        erforderlich sind, um den von dir angeforderten Dienst
        bereitzustellen. Darüber hinausgehende Analyse- oder
        Marketing-Cookies verwenden wir nicht.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        8. Speicherdauer
      </h2>
      <p className="mt-2 text-ink-700">
        Wir speichern personenbezogene Daten nur so lange, wie es für die
        genannten Zwecke erforderlich ist oder gesetzliche
        Aufbewahrungspflichten (z. B. handels- und steuerrechtliche
        Fristen für Rechnungsdaten) dies vorschreiben. Dein Nutzerkonto
        samt zugehöriger Daten (Käufe, Lesefortschritt) kannst du
        jederzeit selbst in deinem Profil unter &bdquo;Konto
        löschen&ldquo; unwiderruflich entfernen, alternativ über eine
        Anfrage an die oben genannte E-Mail-Adresse.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        9. Deine Rechte
      </h2>
      <p className="mt-2 text-ink-700">
        Du hast im Rahmen der gesetzlichen Vorgaben das Recht auf Auskunft
        (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17
        DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO),
        Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch gegen die
        Verarbeitung (Art. 21 DSGVO). Wende dich dafür einfach an
        lumolearn@outlook.de. Außerdem steht dir ein Beschwerderecht bei
        einer Datenschutz-Aufsichtsbehörde zu, z. B. dem Landesbeauftragten
        für den Datenschutz und die Informationsfreiheit
        Baden-Württemberg.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        10. Stand
      </h2>
      <p className="mt-2 text-ink-700">
        Diese Datenschutzerklärung kann bei Änderungen an der Website
        oder den eingesetzten Diensten angepasst werden. Es gilt die
        jeweils aktuelle, auf dieser Seite abrufbare Fassung.
      </p>
    </div>
  );
}
