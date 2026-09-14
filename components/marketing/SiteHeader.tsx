"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site-content";
import { cn } from "@/lib/cn";
import { BrandLogo } from "@/components/marketing/BrandLogo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <div className="drawer">
              <input id="site-nav" type="checkbox" className="drawer-toggle md:hidden" />
      <div className="drawer-content">
        <header className="sticky top-0 z-40 border-b border-base-content/10 bg-[var(--canvas)]/80 backdrop-blur-md">
          <nav className="navbar container-site min-h-16 px-0">
            <div className="flex-none md:hidden">
              <label
                htmlFor="site-nav"
                aria-label="Open menu"
                className="btn btn-square btn-ghost drawer-button"
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
            </div>
            <div className="flex-1">
              <Link href="/" className="flex items-center">
                <BrandLogo priority />
              </Link>
            </div>
            <div className="hidden flex-none md:block">
              <ul className="menu menu-horizontal gap-1 px-1 text-sm">
                {navItems.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <li key={item.href}>
                      <Link href={item.href} className={cn(active && "text-primary")}>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-none items-center gap-1">
              <ThemeToggle />
              <Link href="/contact" className="btn btn-primary btn-sm hidden rounded-full px-5 sm:inline-flex">
                Start a project
              </Link>
            </div>
          </nav>
        </header>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="site-nav" aria-label="Close menu" className="drawer-overlay" />
        <ul className="menu min-h-full w-72 bg-base-200 p-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="font-semibold text-primary">
              Start a project
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
