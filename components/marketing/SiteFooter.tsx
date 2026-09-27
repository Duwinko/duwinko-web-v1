import Link from "next/link";
import { navItems } from "@/lib/site-content";
import { getContent } from "@/lib/content-store";
import { BrandLogo } from "@/components/marketing/BrandLogo";

export async function SiteFooter() {
  const { site } = await getContent();

  return (
    <footer className="border-t border-base-content/10 bg-[var(--canvas)]">
      <div className="container-site grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <BrandLogo className="h-12 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-neutral">
            Software, systems, and AI when it earns a place in the product.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Site</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link link-hover">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#partners" className="link link-hover">
                Partners
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.social.linkedin} className="link link-hover" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.social.x} className="link link-hover" target="_blank" rel="noreferrer">
                X
              </a>
            </li>
            <li>
              <a href={site.social.instagram} className="link link-hover" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={site.social.github} className="link link-hover" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-base-content/10">
        <p className="container-site py-4 text-sm text-neutral">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
