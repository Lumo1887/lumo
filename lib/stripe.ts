import Stripe from "stripe";

// Der Secret Key wird ausschließlich serverseitig verwendet (niemals in
// Client-Code importieren!). Trage ihn in .env.local ein, siehe .env.example.
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "sk_test_placeholder", {
  apiVersion: "2024-06-20",
});

export function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
}
