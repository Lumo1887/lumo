import type { SkriptChapter } from "./types";
import { chapters as statistik1Chapters } from "./statistik-1";
import { chapters as vwl2Chapters } from "./vwl-2";
import { chapters as mathematik1SemesterChapters } from "./mathematik-1-semester";
import { chapters as vwl1Chapters } from "./vwl-1";
import { chapters as informatik2Chapters } from "./informatik-2";
import { chapters as mathematik2AbschlussChapters } from "./mathematik-2-abschluss";
import { chapters as bwl1Chapters } from "./bwl-1";
import { chapters as ing2Chapters } from "./ing-2";
import { chapters as bwl2Chapters } from "./bwl-2";

// Zentrale Stelle, an der jedes Modul sein Skript registriert. Ein neues
// Modul braucht nur eine eigene Datei wie "./statistik-1.ts" (Export
// "chapters") und einen Eintrag hier — Skript-Seite, PDF-Export und
// Chatbot-Kontext funktionieren dann automatisch, ohne Code-Änderungen an
// anderer Stelle.
export const moduleContent: Record<string, SkriptChapter[]> = {
  "statistik-1": statistik1Chapters,
  "vwl-2": vwl2Chapters,
  "mathematik-1-semester": mathematik1SemesterChapters,
  "vwl-1": vwl1Chapters,
  "informatik-2": informatik2Chapters,
  "mathematik-2-abschluss": mathematik2AbschlussChapters,
  "bwl-1": bwl1Chapters,
  "ing-2": ing2Chapters,
  "bwl-2": bwl2Chapters,
};

export function getModuleChapters(moduleSlug: string): SkriptChapter[] | undefined {
  return moduleContent[moduleSlug];
}

export type { SkriptChapter, SkriptSection } from "./types";
