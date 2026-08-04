// Universitäten, deren Wirtschaftsingenieurwesen-Programm (Maschinenbau-
// Schwerpunkt) laut öffentlich einsehbarem Modulhandbuch eine ähnliche
// Grundlagenfächer-Struktur hat wie das Modul-Lineup von Lumo (Höhere
// Mathematik, Technische Mechanik, Werkstoffkunde, VWL, BWL, Statistik,
// Informatik). Bewusst KEINE Behauptung exakter 1:1-Übereinstimmung mit
// einer bestimmten Prüfungsordnung — nur als ehrlicher Hinweis auf
// thematische Nähe gedacht, siehe SIMILAR_UNI_NOTE.
export const SIMILAR_UNIS = [
  "KIT (Karlsruher Institut für Technologie)",
  "RWTH Aachen",
  "TU Darmstadt",
  "Uni Duisburg-Essen",
  "TU Dortmund",
  "TH Köln",
  "Andere Uni",
] as const;

export const SIMILAR_UNI_NOTE =
  "Wirtschaftsingenieurwesen mit Maschinenbau-Schwerpunkt hat an den meisten Unis sehr ähnliche Grundlagenfächer (Höhere Mathematik, Technische Mechanik, Werkstoffkunde, VWL, BWL). Unsere Module decken diese Themen ab — sind aber nicht 1:1 auf die Prüfungsordnung deiner Uni abgestimmt. Schau am besten kurz in dein eigenes Modulhandbuch, ob die Themen zu deinen Fächern passen.";

// Kurzform der obigen Unis (ohne den Klammerzusatz bei KIT und ohne
// "Andere Uni") — für SEO-Keywords in app/layout.tsx, damit z. B. eine
// Google-Suche nach "RWTH Aachen Wirtschaftsingenieurwesen Skript" auf die
// Seite treffen kann. Reine Sichtbarkeits-Keywords, keine inhaltliche
// Behauptung — die ehrliche Einordnung übernimmt weiterhin SIMILAR_UNI_NOTE.
export const SIMILAR_UNI_SHORT_NAMES = [
  "KIT",
  "RWTH Aachen",
  "TU Darmstadt",
  "Uni Duisburg-Essen",
  "TU Dortmund",
  "TH Köln",
] as const;
