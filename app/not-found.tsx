export default function NotFound() {
  return (
    <main className="container-site py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-neutral/70">
        That URL does not exist. Go back to the homepage and try again.
      </p>
      <a href="/" className="btn btn-primary mt-8">
        Home
      </a>
    </main>
  );
}
