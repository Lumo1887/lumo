-- Tabelle für den Karteikarten-Fortschritt (einfaches Leitner-System): pro
-- Nutzer:in + Modul + Karte wird gespeichert, in welcher "Box" (1-5, je höher
-- desto seltener fällig) die Karte gerade ist und wann sie als Nächstes fällig
-- ist. "card_key" ist eine stabile ID aus Kapitel-ID + Abschnitts-ID + Begriff
-- (siehe components/Flashcards.tsx), da die Begriffe selbst keine eigene ID
-- haben. Wird direkt vom Client über die eingeloggte Supabase-Session
-- gelesen/geschrieben (app/api/flashcards/progress/route.ts) — deshalb
-- RLS-Policies, die jeweils nur den eigenen Nutzer zulassen (anders als z. B.
-- referral_codes/withdrawal_requests, die ausschließlich serverseitig über
-- den Service-Role-Key angelegt werden).
create table if not exists flashcard_progress (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  user_id uuid not null references auth.users(id) on delete cascade,
  module_slug text not null,
  card_key text not null,
  box smallint not null default 1,
  due_at timestamptz not null default now(),
  unique (user_id, module_slug, card_key)
);

alter table flashcard_progress enable row level security;

create policy "Nutzer sehen eigenen Karteikarten-Fortschritt"
  on flashcard_progress for select
  using (auth.uid() = user_id);

create policy "Nutzer legen eigenen Karteikarten-Fortschritt an"
  on flashcard_progress for insert
  with check (auth.uid() = user_id);

create policy "Nutzer aktualisieren eigenen Karteikarten-Fortschritt"
  on flashcard_progress for update
  using (auth.uid() = user_id);
