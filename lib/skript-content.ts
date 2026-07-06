// Kompatibilitäts-Shim: Der eigentliche Inhalt lebt jetzt in lib/content/
// (types.ts für die Interfaces, statistik-1.ts für den Statistik-1-Inhalt,
// registry.ts für die Zuordnung moduleSlug -> Kapitel). Neue Module sollten
// direkt "@/lib/content/registry" benutzen (getModuleChapters(slug)) statt
// diese Datei zu importieren.
export type { SkriptChapter, SkriptSection } from "@/lib/content/types";
export { getModuleChapters, moduleContent } from "@/lib/content/registry";
export { chapters as skriptChapters } from "@/lib/content/statistik-1";
