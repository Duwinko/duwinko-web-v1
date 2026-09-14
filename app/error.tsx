"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="container-site py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Something went wrong</h1>
      <p className="mt-3 text-neutral/70">
        Reload this page. If it keeps happening, contact us and we will look into it.
      </p>
      <button type="button" className="btn btn-primary mt-8" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
