"use client";

import { createBrowserClient } from "@supabase/ssr";

// Browser-seitiger Supabase-Client (für Login-Formulare, Google-Button, etc.)
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
