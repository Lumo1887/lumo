import type { SkriptChapter } from "./types";
import { chapters as statistik1Chapters } from "./statistik-1";

// Zentrale Stelle, an der jedes Modul sein Skript registriert. Ein neues
// Modul braucht nur eine eigene Datei wie "./statistik-1.ts" (Export
// "chapters") und einen Eintrag hier — Skript-Seite, PDF-Export und
// Chatbot-Kontext funktionieren dann automatisch, ohne Code-Änderungen an
// anderer Stelle.
export const moduleContent: Record<string, SkriptChapter[]> = {
  "statistik-1": statistik1Chapters,
};

export function getModuleChapters(moduleSlug: string): SkriptChapter[] | undefined {
  return moduleContent[moduleSlug];
}

export type { SkriptChapter, SkriptSection } from "./types";
