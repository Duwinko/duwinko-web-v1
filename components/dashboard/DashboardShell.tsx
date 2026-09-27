"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Inbox,
  LayoutDashboard,
  FolderKanban,
  Layers,
  MessageSquareQuote,
  Handshake,
  Settings,
} from "lucide-react";
import { logoutAction } from "@/app/dashboard/actions";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const links = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/inquiries", label: "Inquiries", icon: Inbox },
  { href: "/dashboard/projects", label: "Projects", icon: FolderKanban },
  { href: "/dashboard/services", label: "Services", icon: Layers },
  { href: "/dashboard/partners", label: "Partners", icon: Handshake },
  { href: "/dashboard/testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const nav = (
    <ul className="menu w-full gap-1 p-0">
      {links.map((link) => {
        const active =
          link.href === "/dashboard"
            ? pathname === "/dashboard"
            : pathname.startsWith(link.href);
        const Icon = link.icon;
        return (
          <li key={link.href}>
            <Link href={link.href} className={active ? "bg-primary/15 text-primary" : undefined}>
              <Icon className="h-4 w-4" aria-hidden />
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex min-h-dvh flex-col bg-[var(--canvas)]">
        <header className="flex items-center justify-between border-b border-base-content/10 bg-base-100 px-4 py-3 lg:px-8">
          <div className="flex items-center gap-2">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-square btn-ghost drawer-button lg:hidden"
              aria-label="Open navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <p className="text-sm font-semibold tracking-wide">Duwinko</p>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <form action={logoutAction}>
              <button type="submit" className="btn btn-ghost btn-sm">
                Sign out
              </button>
            </form>
          </div>
        </header>
        <div className="flex-1 px-4 py-8 lg:px-10">{children}</div>
      </div>
      <div className="drawer-side z-40">
        <label htmlFor="dashboard-drawer" aria-label="Close sidebar" className="drawer-overlay" />
        <aside className="flex min-h-full w-64 flex-col border-r border-base-content/10 bg-base-100 p-6">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Dashboard
          </p>
          {nav}
        </aside>
      </div>
    </div>
  );
}
