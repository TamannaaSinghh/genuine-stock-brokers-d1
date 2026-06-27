import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden bg-mesh px-5 pt-[120px] pb-16 text-center">
      <div className="bg-dots absolute inset-0 opacity-50" />
      <div className="blob -top-20 right-0 h-96 w-96 bg-brand-300/30" />
      <div className="blob bottom-0 left-1/4 h-80 w-80 bg-brand-200/40" />

      <div className="relative z-10">
        <p className="font-display text-7xl font-semibold text-gradient sm:text-9xl">
          404
        </p>
        <h1 className="h-display mt-4 text-2xl sm:text-3xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
          Back to home
        </Link>
      </div>
    </section>
  );
}
