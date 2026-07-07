import type { Metadata } from "next";
import WiderrufForm from "@/components/WiderrufForm";

export const metadata: Metadata = {
  title: "Widerrufsbelehrung — Lumo",
};

export default function WiderrufPage() {
  return (
    <div className="card mx-auto max-w-3xl p-8 sm:p-10">
      <h1 className="text-3xl font-bold text-ink-900">Widerrufsbelehrung</h1>
      <p className="mt-2 text-ink-600">
        Du kannst deinen Kauf hier direkt online widerrufen — ganz ohne
        Login. Weiter unten findest du zusätzlich alle Informationen zu
        deinem Widerrufsrecht.
      </p>

      <div className="mt-6">
        <WiderrufForm />
      </div>

      <h2 className="mt-10 text-lg font-semibold text-ink-900">Widerrufsrecht</h2>
      <p className="mt-2 text-ink-700">
        Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
        diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn
        Tage ab dem Tag des Vertragsschlusses.
      </p>
      <p className="mt-3 text-ink-700">
        Um dein Widerrufsrecht auszuüben, musst du uns
        <br />
        Carlo Pochert, Gerwigstraße 29, 76131 Karlsruhe, E-Mail:
        lumolearn@outlook.de
        <br />
        mittels einer eindeutigen Erklärung (z. B. ein mit der Post
        versandter Brief oder eine E-Mail) über deinen Entschluss, diesen
        Vertrag zu widerrufen, informieren. Am schnellsten geht das über
        das Online-Formular oben auf dieser Seite; alternativ kannst du
        auch das weiter unten stehende Muster-Widerrufsformular
        verwenden, es ist aber nicht vorgeschrieben.
      </p>
      <p className="mt-3 text-ink-700">
        Zur Wahrung der Widerrufsfrist reicht es aus, dass du die
        Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der
        Widerrufsfrist absendest.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        Folgen des Widerrufs
      </h2>
      <p className="mt-2 text-ink-700">
        Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen,
        die wir von dir erhalten haben, unverzüglich und spätestens
        binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die
        Mitteilung über deinen Widerruf dieses Vertrags bei uns
        eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe
        Zahlungsmittel, das du bei der ursprünglichen Transaktion
        eingesetzt hast, es sei denn, mit dir wurde ausdrücklich etwas
        anderes vereinbart; in keinem Fall werden dir wegen dieser
        Rückzahlung Entgelte berechnet.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        Vorzeitiges Erlöschen des Widerrufsrechts bei digitalen Inhalten
      </h2>
      <p className="mt-2 text-ink-700">
        Dein Widerrufsrecht erlischt bei einem Vertrag über die
        Bereitstellung digitaler Inhalte (Skript, Übungstool, Chatbot,
        PDF-Export), die nicht auf einem körperlichen Datenträger
        geliefert werden, vorzeitig, wenn wir mit der Ausführung des
        Vertrags begonnen haben, nachdem du
      </p>
      <ul className="mt-2 list-inside list-disc space-y-1 text-ink-700">
        <li>
          ausdrücklich zugestimmt hast, dass wir mit der Ausführung des
          Vertrags vor Ablauf der Widerrufsfrist beginnen, und
        </li>
        <li>
          deine Kenntnis davon bestätigt hast, dass du durch deine
          Zustimmung mit Beginn der Ausführung des Vertrags dein
          Widerrufsrecht verlierst.
        </li>
      </ul>
      <p className="mt-3 text-ink-700">
        Diese Zustimmung holen wir im Bestellvorgang aktiv über eine
        gesonderte Checkbox ein, bevor der Zugang zum jeweiligen Modul
        freigeschaltet wird.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-ink-900">
        Muster-Widerrufsformular (postalisch/per E-Mail)
      </h2>
      <p className="mt-2 text-ink-700">
        Falls du lieber schriftlich statt über das Online-Formular oben
        widerrufen möchtest, fülle bitte dieses Formular aus und sende es
        an uns zurück.
      </p>
      <div className="mt-3 rounded-lg border border-ink-100 bg-ink-50 p-4 text-sm text-ink-700">
        <p>An: Carlo Pochert, Gerwigstraße 29, 76131 Karlsruhe, lumolearn@outlook.de</p>
        <p className="mt-2">
          Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*)
          abgeschlossenen Vertrag über den Kauf des folgenden Moduls:
        </p>
        <p className="mt-2">— Bestellt am (*)/erhalten am (*):</p>
        <p>— Name des/der Verbraucher(s):</p>
        <p>— Anschrift des/der Verbraucher(s):</p>
        <p>— Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):</p>
        <p>— Datum:</p>
        <p className="mt-2 text-ink-500">(*) Unzutreffendes streichen.</p>
      </div>
    </div>
  );
}
