import { Suspense } from "react";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
          Anmelden bei Lumo
        </h1>
      </div>
      <Suspense fallback={<div className="h-64" />}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
