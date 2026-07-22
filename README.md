# Lumo Learn — Skript, Übungstool & KI-Tutor für Uni-Module

Eine günstigere, digitale Alternative zum FuKS Crashkurs: Skript + interaktives
Übungstool, aufgebaut auf echtem Vorlesungs- und Tutoriumsmaterial, mit
vorbereiteter Stripe-Checkout-Integration.

## Wichtiger Hinweis zur Ordnerstruktur

Dieses Projekt wurde in einer Umgebung erzeugt, in der keine Unterordner
angelegt werden konnten. Alle Next.js-Dateien liegen deshalb zunächst **flach**
in diesem Ordner, wobei `__` im Dateinamen einen Ordner-Trenner darstellt
(z. B. `app__module__statistik-1__page.tsx` → `app/module/statistik-1/page.tsx`).

Das ist kein manueller Schritt für dich: Beim ersten `npm install` sortiert das
Skript `setup.js` (als `postinstall`-Hook in `package.json` eingetragen) alle
Dateien automatisch in die korrekte Next.js-Struktur ein. Du musst nichts
selbst verschieben.

## Schnellstart

```bash
npm install        # führt automatisch setup.js aus und sortiert die Dateien ein
cp .env.example .env.local
# .env.local mit deinen echten Stripe-Testkeys befüllen (siehe unten)
npm run dev
```

Danach läuft die Seite unter `http://localhost:3000`.

**Da diese Dateien ohne lokale Ausführungsumgebung erstellt wurden, konnte
`npm install` / `npm run build` in dieser Sitzung nicht getestet werden.**
Führe nach dem ersten Setup einmal `npm run build` aus, um sicherzugehen,
dass alles fehlerfrei kompiliert — und melde dich, falls etwas nicht passt,
dann beheben wir es gemeinsam.

## Stripe einrichten

1. Kostenlosen Account auf [stripe.com](https://stripe.com) anlegen (Testmodus
   reicht zum Ausprobieren völlig aus).
2. Im Stripe-Dashboard unter **Entwickler → API-Schlüssel** den
   `Secret key` (`sk_test_...`) und `Publishable key` (`pk_test_...`) kopieren
   und in `.env.local` eintragen.
3. Für Webhooks lokal die [Stripe CLI](https://docs.stripe.com/stripe-cli)
   installieren und `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
   ausführen. Der dabei ausgegebene `whsec_...`-Wert kommt in
   `STRIPE_WEBHOOK_SECRET`.
4. Für den Live-Betrieb später die echten (nicht `_test_`) Keys eintragen und
   im Stripe-Dashboard einen Webhook-Endpunkt auf
   `https://deine-domain.de/api/webhooks/stripe` für das Event
   `checkout.session.completed` anlegen.

Der Preis pro Modul wird pro Modul in `lib/modules.ts` (Feld `priceCent`)
festgelegt — dort auch für neue Module direkt eintragen, keine separate
Umgebungsvariable nötig.

## Projektstruktur (nach dem Einsortieren durch setup.js)

```
app/
  layout.tsx                              Grundlayout (Navbar, Footer)
  page.tsx                                Landingpage mit Vergleich zu FuKS
  onboarding/page.tsx                     Eingangs-Fragebogen
  module/page.tsx                         Modulauswahl (Übersicht)
  module/statistik-1/page.tsx             Modul-Hub (Skript, Übungstool, Kauf)
  module/statistik-1/skript/page.tsx      Skript-Inhalte (Kapitel 2 gratis)
  module/statistik-1/uebungstool/page.tsx Interaktives Übungstool
  checkout/success/page.tsx               Bestätigungsseite nach Zahlung
  checkout/cancel/page.tsx                Abbruchseite
  api/checkout/route.ts                   Erstellt Stripe Checkout Session
  api/checkout/verify/route.ts            Prüft Zahlungsstatus nach Rückkehr
  api/webhooks/stripe/route.ts            Stripe-Webhook (checkout.session.completed)
components/                               Wiederverwendbare UI-Bausteine
lib/
  modules.ts                              Modul-Definitionen (Preise, Kapitel, ...)
  questions.ts                            Fragenbank für das Übungstool
  skript-content.ts                       Inhalte des Skripts
  onboarding.ts                           Optionen & Speicherung des Fragebogens
  access.ts                               Einfache Zugriffsfreischaltung (Prototyp)
  stripe.ts                               Stripe-Client
```

## Inhalte

- **Skript**: Kapitel 2–5 (Deskriptive Statistik, Wahrscheinlichkeitsrechnung,
  Zufallsvariablen, Verteilungsmodelle), kompakt aufbereitet auf Basis des
  hochgeladenen Foliensatzes. Kapitel 2 ist als Vorschau kostenlos lesbar.
- **Übungstool**: ~35 Aufgaben, abgeleitet aus den 9 hochgeladenen
  Tutoriumsblättern (echte Zahlen, echte Kontexte), mit Multiple-Choice- und
  Zahlen-Eingabe-Fragen, sofortigem Feedback und Quellenangabe. Ein Teil ist
  kostenlos als Vorschau spielbar.
- **Onboarding**: 3-stufiger Fragebogen (Ziel, Problemfelder, verbleibende
  Zeit), Antworten werden lokal gespeichert und für eine Empfehlung genutzt.

## Nächste Schritte für den echten Produktivbetrieb

Dieses Projekt ist lauffähiger Code, aber bewusst ein **Prototyp** in einigen
Punkten, die vor einem echten Verkauf noch verbessert werden sollten:

1. **Echte Zugriffskontrolle statt localStorage.** Aktuell wird der Zugriff
   nach Zahlung nur im Browser des Käufers freigeschaltet (`lib/access.ts`).
   Für einen echten Verkauf empfiehlt sich: Nutzerkonten (z. B. mit
   [NextAuth](https://authjs.dev)) + eine Datenbank (z. B. Postgres via
   [Vercel Postgres](https://vercel.com/storage/postgres),
   [Supabase](https://supabase.com) oder [Neon](https://neon.tech), angebunden
   über [Prisma](https://www.prisma.io)), in der Käufe dem Nutzerkonto
   zugeordnet werden. Der Stripe-Webhook
   (`app/api/webhooks/stripe/route.ts`) hat dafür bereits eine
   auskommentierte Beispielstelle.
2. **Weitere Module ergänzen.** `lib/modules.ts` ist so aufgebaut, dass
   weitere Module (Statistik II, Mathe für WiWis, ...) einfach ergänzt werden
   können — dafür jeweils eigene Skript-Inhalte und Fragen in
   `lib/skript-content.ts` bzw. `lib/questions.ts` ergänzen und einen
   analogen Ordner unter `app/module/<slug>/` anlegen.
3. **Altklausur-Aufgaben ergänzen.** Die aktuelle Fragenbank basiert auf den
   9 hochgeladenen Tutoriumsblättern. Sobald du Altklausuren hast, kannst du
   weitere Fragen nach demselben Muster in `lib/questions.ts` ergänzen.
4. **Deployment.** Das Projekt ist für [Vercel](https://vercel.com) vorbereitet:
   Repo zu GitHub pushen, bei Vercel importieren, die Umgebungsvariablen aus
   `.env.example` im Vercel-Dashboard eintragen, fertig.
5. **Rechtliches.** Vor dem Verkauf: Impressum, AGB und Datenschutzerklärung
   ergänzen (in Deutschland Pflicht für kommerzielle Websites), und prüfen,
   ob die Verwendung von Foliensatz-/Tutoriumsinhalten mit den Nutzungsrechten
   deiner Universität vereinbar ist.

## Design

Farbschema und Komponenten nutzen Tailwind CSS mit einer violetten Akzentfarbe
(„brand“) für ein modernes, ruhiges Lern-Interface. Anpassbar in
`tailwind.config.ts` und `app/globals.css`.
