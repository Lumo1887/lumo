import { questions as statistik1Questions, TOPICS as statistik1Topics, type Question } from "@/lib/questions";
import { questions as vwl2Questions, TOPICS as vwl2Topics } from "@/lib/questions-vwl-2";

// Zentrale Zuordnung moduleSlug -> Fragenbank fürs Übungstool. Ein neues
// Modul braucht eine eigene Datei wie "@/lib/questions" (Export "questions"
// und "TOPICS") und einen Eintrag hier — QuizPlayer funktioniert danach
// automatisch, ohne Code-Änderungen an anderer Stelle.
const questionBank: Record<string, { questions: Question[]; topics: readonly string[] }> = {
  "statistik-1": { questions: statistik1Questions, topics: statistik1Topics },
  "vwl-2": { questions: vwl2Questions, topics: vwl2Topics },
};

export function getQuestions(moduleSlug: string): Question[] {
  return questionBank[moduleSlug]?.questions ?? [];
}

export function getTopics(moduleSlug: string): readonly string[] {
  return questionBank[moduleSlug]?.topics ?? [];
}

export type { Question };
