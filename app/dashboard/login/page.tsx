import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { LoginForm } from "./LoginForm";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dashboard sign in",
  description: "Staff access to the Duwinko dashboard.",
  path: "/dashboard/login",
  index: false,
});

export const dynamic = "force-dynamic";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const session = await getAdminSession();
  if (session) redirect("/dashboard");
  const { error } = await searchParams;

  return (
    <main className="hero-field flex min-h-dvh flex-col justify-center">
      <div className="container-site relative py-16">
      <div className="absolute right-0 top-0">
        <ThemeToggle />
      </div>
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
        Staff access
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Duwinko dashboard</h1>
      <p className="mt-3 max-w-md text-neutral/70">
        Sign in to review inquiries and manage site content.
      </p>
      <LoginForm error={error === "1"} />
      </div>
    </main>
  );
}
