-- Interessent:innen-Liste für noch nicht verfügbare Module ("Bald
-- verfügbar"-Karten in ModuleCard.tsx / SalesModuleCard.tsx). Zweckgebunden:
-- die E-Mail wird ausschließlich verwendet, um die Person zu benachrichtigen,
-- sobald genau dieses eine Modul live geht — kein allgemeiner Newsletter.
-- Wird ausschließlich serverseitig über den Service-Role-Key angelegt
-- (app/api/module-interest/route.ts), nicht direkt vom Client aus — deshalb
-- bewusst keine INSERT/SELECT-Policies für anon/authenticated.
create table if not exists module_interest (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  module_slug text not null,
  email text not null,
  unique (module_slug, email)
);

alter table module_interest enable row level security;
