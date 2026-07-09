-- Speichert das Freunde-werben-Freunde-Guthaben: pro erfolgreicher Empfehlung
-- (ein Freund kauft über den persönlichen Code, siehe referral_codes) bekommt
-- die werbende Person 1 Guthaben gutgeschrieben, das sie im Profil gegen ein
-- beliebiges Modul ihrer Wahl einlösen kann (komplett kostenlos). Der Freund
-- selbst bekommt keinen Rabatt — zahlt den vollen Preis.
create table if not exists referral_credits (
  user_id uuid primary key references auth.users(id) on delete cascade,
  credits integer not null default 0,
  updated_at timestamptz not null default now()
);

alter table referral_credits enable row level security;

-- Atomar 1 Guthaben gutschreiben (wird vom Stripe-Webhook nach einem
-- erfolgreichen, über einen Empfehlungscode zustande gekommenen Kauf
-- aufgerufen). "on conflict" statt select-then-update, damit zwei
-- gleichzeitige Webhook-Aufrufe sich nicht gegenseitig überschreiben.
create or replace function increment_referral_credits(p_user_id uuid)
returns void
language sql
as $$
  insert into referral_credits (user_id, credits, updated_at)
  values (p_user_id, 1, now())
  on conflict (user_id)
  do update set credits = referral_credits.credits + 1, updated_at = now();
$$;

-- Atomar 1 Guthaben abziehen, aber nur falls welches vorhanden ist. Gibt
-- true zurück, wenn erfolgreich eingelöst wurde, sonst false (kein
-- Guthaben mehr übrig) — verhindert, dass ein Guthaben durch zwei
-- gleichzeitige Anfragen doppelt eingelöst wird.
create or replace function redeem_referral_credit(p_user_id uuid)
returns boolean
language plpgsql
as $$
declare
  updated_rows integer;
begin
  update referral_credits
  set credits = credits - 1, updated_at = now()
  where user_id = p_user_id and credits > 0;

  get diagnostics updated_rows = row_count;
  return updated_rows > 0;
end;
$$;
