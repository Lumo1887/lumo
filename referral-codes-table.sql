-- Tabelle für die persönlichen Empfehlungscodes der Nutzer:innen
-- (Freunde-werben-Freunde-Programm: 20% Rabatt für den geworbenen Freund,
-- 20%-Code fürs nächste Modul für den Werber). Einträge werden ausschließlich
-- serverseitig über den Service-Role-Key angelegt/gelesen
-- (app/api/referral/code/route.ts, app/api/checkout/route.ts,
-- app/api/webhooks/stripe/route.ts), nicht direkt vom Client aus — deshalb
-- bewusst keine INSERT/SELECT-Policies für anon/authenticated.
create table if not exists referral_codes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  code text not null unique
);

alter table referral_codes enable row level security;
