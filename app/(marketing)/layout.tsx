import Link from "next/link";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SiteHeader } from "@/components/marketing/SiteHeader";

export const dynamic = "force-dynamic";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-[var(--canvas)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-content"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="page-enter flex-1">
        {children}
      </main>
      <SiteFooter />
      <p className="sr-only">
        Staff can sign in at <Link href="/dashboard/login">dashboard login</Link>.
      </p>
    </div>
  );
}
