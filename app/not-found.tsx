import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="container-site py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-neutral/70">
        That URL does not exist. Go back to the homepage and try again.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        Home
      </Link>
    </main>
  );
}
