import { redirect } from "next/navigation";

// Die Modulübersicht ist zum Dashboard umgezogen.
export default function ModuleOverviewRedirect() {
  redirect("/dashboard");
}
