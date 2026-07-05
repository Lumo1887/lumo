import { createClient } from "@supabase/supabase-js";

// Admin-Client mit Service-Role-Key — umgeht Row Level Security.
// NUR serverseitig verwenden (z. B. im Stripe-Webhook), NIEMALS im
// Browser-Code importieren, da der Service-Role-Key vollen Zugriff auf die
// Datenbank hat.
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);
