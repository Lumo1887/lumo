"use client";

import { useEffect } from "react";

const STORAGE_KEY = "lumo_referral_code";

/**
 * Liest einen Empfehlungscode aus der URL (?ref=CODE) und merkt ihn sich im
 * Browser, damit er auch dann noch beim Checkout ankommt, wenn der/die
 * Eingeladene sich erst Tage später einloggt/registriert und ein Modul kauft.
 * "First touch": ein bereits gespeicherter Code wird nicht überschrieben,
 * damit der zuerst geklickte Empfehlungslink zählt.
 */
export default function ReferralCapture() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const ref = params.get("ref");
      if (ref && !window.localStorage.getItem(STORAGE_KEY)) {
        window.localStorage.setItem(STORAGE_KEY, ref.trim());
      }
    } catch {
      // localStorage kann in manchen Browser-Kontexten (z. B. Privatmodus
      // mit strikten Einstellungen) nicht verfügbar sein — dann fällt der
      // Empfehlungscode einfach weg, kein Grund, die Seite scheitern zu lassen.
    }
  }, []);

  return null;
}
