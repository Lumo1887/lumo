import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Server-seitiger Supabase-Client für Route Handlers / Server Components.
// Liest die Session aus den Cookies des eingehenden Requests.
export function createClient() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Wird in reinen Server Components aufgerufen, in denen Cookies
            // nicht gesetzt werden können — die Middleware kümmert sich dann
            // um die Session-Erneuerung.
          }
        },
      },
    }
  );
}
