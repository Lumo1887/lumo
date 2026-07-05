import { Suspense } from "react";
import SuccessContent from "@/components/SuccessContent";

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="card mx-auto max-w-lg p-8 text-center text-ink-600">
          Lädt …
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
