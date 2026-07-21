-- Bewertungen für Lumo Learn insgesamt (nicht pro Modul), angezeigt auf der
-- Startseite als Ersatz für die frühere Testimonials-Sektion. Jede
-- eingeloggte Person darf genau eine Bewertung schreiben (erzwungen über
-- "unique (user_id)"); Sternebewertung (1-5) + Freitext + selbstgewählter
-- Anzeigename (bewusst kein echter Name/E-Mail, um die Privatsphäre der
-- Bewertenden zu schützen). "likes_count" ist denormalisiert (statt bei
-- jeder Anzeige über review_likes zu zählen), damit die Sortierung nach
-- "meistgeliked" performant bleibt; er wird ausschließlich über die Trigger
-- unten aktualisiert, nie direkt vom Client geschrieben.
--
-- Wird direkt vom Client über die eingeloggte Supabase-Session
-- gelesen/geschrieben (app/api/reviews/route.ts,
-- app/api/reviews/[id]/like/route.ts) — deshalb RLS-Policies statt
-- ausschließlich serverseitigem Zugriff über den Service-Role-Key.
create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  display_name text not null check (char_length(display_name) between 1 and 60),
  rating smallint not null check (rating between 1 and 5),
  body text not null check (char_length(body) between 1 and 1000),
  likes_count integer not null default 0
);

alter table reviews enable row level security;

-- Bewertungen sind öffentlich sichtbar (auch für nicht eingeloggte
-- Besucher:innen auf der Startseite) — nur das Schreiben ist an einen
-- eingeloggten, eigenen Account gebunden.
create policy "Jeder darf Bewertungen lesen"
  on reviews for select
  using (true);

create policy "Nutzer legen eigene Bewertung an"
  on reviews for insert
  with check (auth.uid() = user_id);

create policy "Nutzer bearbeiten eigene Bewertung"
  on reviews for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Nutzer löschen eigene Bewertung"
  on reviews for delete
  using (auth.uid() = user_id);

-- Wer welche Bewertung geliked hat. "unique (review_id, user_id)" verhindert
-- Mehrfach-Likes derselben Person; erneutes Klicken in der UI entfernt den
-- Like wieder (Toggle über Insert/Delete dieser Zeile).
create table if not exists review_likes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  review_id uuid not null references reviews(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  unique (review_id, user_id)
);

alter table review_likes enable row level security;

-- Nur die eigenen Likes sind für den Client sichtbar/veränderbar — wer
-- welche Bewertung geliked hat, muss anderen Nutzer:innen gegenüber nicht
-- offengelegt werden. Der öffentliche "likes_count" auf reviews reicht für
-- die Anzeige.
create policy "Nutzer sehen eigene Likes"
  on review_likes for select
  using (auth.uid() = user_id);

create policy "Nutzer liken Bewertungen"
  on review_likes for insert
  with check (auth.uid() = user_id);

create policy "Nutzer entfernen eigenen Like"
  on review_likes for delete
  using (auth.uid() = user_id);

-- Hält reviews.likes_count synchron, ohne dass der Client den Zähler direkt
-- schreiben darf (RLS oben erlaubt nur insert/delete für review_likes,
-- keine Schreibrechte auf reviews.likes_count selbst).
create or replace function sync_review_likes_count()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if (tg_op = 'INSERT') then
    update reviews set likes_count = likes_count + 1 where id = new.review_id;
    return new;
  elsif (tg_op = 'DELETE') then
    update reviews set likes_count = greatest(likes_count - 1, 0) where id = old.review_id;
    return old;
  end if;
  return null;
end;
$$;

drop trigger if exists review_likes_after_insert on review_likes;
create trigger review_likes_after_insert
  after insert on review_likes
  for each row execute function sync_review_likes_count();

drop trigger if exists review_likes_after_delete on review_likes;
create trigger review_likes_after_delete
  after delete on review_likes
  for each row execute function sync_review_likes_count();
