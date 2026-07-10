import { questions as statistik1Questions, TOPICS as statistik1Topics, type Question } from "@/lib/questions";
import { questions as vwl2Questions, TOPICS as vwl2Topics } from "@/lib/questions-vwl-2";
import { questions as mathematik1SemesterQuestions, TOPICS as mathematik1SemesterTopics } from "@/lib/questions-mathematik-1-semester";
import { questions as vwl1Questions, TOPICS as vwl1Topics } from "@/lib/questions-vwl-1";
import { questions as informatik2Questions, TOPICS as informatik2Topics } from "@/lib/questions-informatik-2";
import { questions as mathematik2AbschlussQuestions, TOPICS as mathematik2AbschlussTopics } from "@/lib/questions-mathematik-2-abschluss";
import { questions as bwl1Questions, TOPICS as bwl1Topics } from "@/lib/questions-bwl-1";

// Zentrale Zuordnung moduleSlug -> Fragenbank fürs Übungstool. Ein neues
// Modul braucht eine eigene Datei wie "@/lib/questions" (Export "questions"
// und "TOPICS") und einen Eintrag hier — QuizPlayer funktioniert danach
// automatisch, ohne Code-Änderungen an anderer Stelle.
const questionBank: Record<string, { questions: Question[]; topics: readonly string[] }> = {
  "statistik-1": { questions: statistik1Questions, topics: statistik1Topics },
  "vwl-2": { questions: vwl2Questions, topics: vwl2Topics },
  "mathematik-1-semester": { questions: mathematik1SemesterQuestions, topics: mathematik1SemesterTopics },
  "vwl-1": { questions: vwl1Questions, topics: vwl1Topics },
  "informatik-2": { questions: informatik2Questions, topics: informatik2Topics },
  "mathematik-2-abschluss": { questions: mathematik2AbschlussQuestions, topics: mathematik2AbschlussTopics },
  "bwl-1": { questions: bwl1Questions, topics: bwl1Topics },
};

export function getQuestions(moduleSlug: string): Question[] {
  return questionBank[moduleSlug]?.questions ?? [];
}

export function getTopics(moduleSlug: string): readonly string[] {
  return questionBank[moduleSlug]?.topics ?? [];
}

export type { Question };
