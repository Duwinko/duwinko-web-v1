import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { cookies } from "next/headers";
import { site } from "@/lib/site-content";
import { resolveTheme, THEME_COOKIE, themeInitScript } from "@/lib/theme";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Software, systems, and AI`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const theme = resolveTheme((await cookies()).get(THEME_COOKIE)?.value);

  return (
    <html
      lang="en"
      data-theme={theme}
      suppressHydrationWarning
      className={`${display.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-dvh bg-[var(--canvas)] font-sans antialiased">
        {children}
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
