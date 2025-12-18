import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center">
      <div className="container mx-auto max-w-6xl p-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Link href="/" aria-label="Yogi Divine Society - Home">
            <span className="mb-3 inline-flex items-center gap-2">
              <span className="text-logo">Pathlight Clinic</span>
            </span>
          </Link>

          <div
            aria-hidden="true"
            className="text-foreground/60 text-[clamp(4rem,20vw,12rem)] leading-none font-bold tracking-tight select-none"
          >
            404
          </div>

          <h1 className="text-heading-1 mt-3">Page not found</h1>
          <p className="text-muted mt-2">
            The page you’re looking for doesn’t exist or may have moved.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center">
            <Link
              href="/"
              className="text-label hover:bg-accent inline-flex items-center rounded-md border px-4 py-2"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
