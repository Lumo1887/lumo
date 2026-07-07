-- Tabelle für eingehende Widerrufe über den öffentlichen Widerrufsbutton
-- (§ 356a BGB, Pflicht seit 19. Juni 2026). Einträge werden ausschließlich
-- serverseitig über den Service-Role-Key angelegt (app/api/widerruf/route.ts),
-- nicht direkt vom Client aus — deshalb bewusst keine INSERT/SELECT-Policies
-- für anon/authenticated. Im Supabase-Dashboard unter "Table Editor" kannst
-- du (als Projekt-Owner) die Einträge trotzdem jederzeit einsehen.
create table if not exists withdrawal_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  user_id uuid references auth.users(id) on delete set null,
  name text not null,
  email text not null,
  module_slug text,
  order_reference text,
  message text,
  status text not null default 'neu'
);

alter table withdrawal_requests enable row level security;
