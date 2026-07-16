-- Upgrade des Karteikarten-Fortschritts von einem einfachen Leitner-System
-- (5 feste Boxen) auf einen echten SM-2-Algorithmus (wie Anki): pro Karte
-- werden zusätzlich ein Ease-Faktor (wie leicht die Karte fällt, wächst/
-- schrumpft je nach Bewertung), die Anzahl aufeinanderfolgender erfolgreicher
-- Wiederholungen und das aktuelle Intervall in Tagen gespeichert. "box" bleibt
-- als grobe, rein informative Kennzahl erhalten (abgeleitet aus repetitions),
-- damit bestehende Zeilen/Abfragen nicht brechen.
--
-- Vor dem SM-2-Upgrade ausführen, falls flashcard-progress-table.sql schon
-- angewendet wurde (idempotent dank IF NOT EXISTS).

alter table flashcard_progress
  add column if not exists ease_factor real not null default 2.5,
  add column if not exists repetitions smallint not null default 0,
  add column if not exists interval_days real not null default 0;
