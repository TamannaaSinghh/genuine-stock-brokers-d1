import Link from "next/link";
import Reveal from "./Reveal";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-mesh pt-[120px]">
      <div className="bg-dots absolute inset-0 opacity-60" />
      <div className="blob -right-16 -top-20 h-80 w-80 bg-brand-300/30" />
      <div className="blob -bottom-24 left-10 h-72 w-72 bg-brand-200/40" />

      <div className="container-page relative z-10 py-14 sm:py-16">
        <Reveal>
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-brand-700">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <span className="text-slate-300">/</span>
                {c.href ? (
                  <Link href={c.href} className="hover:text-brand-700">
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-medium text-forest">{c.label}</span>
                )}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <span className="eyebrow mt-6">{eyebrow}</span>
        </Reveal>

        <Reveal delay={140}>
          <h1 className="h-display mt-5 max-w-3xl text-4xl leading-[1.08] sm:text-5xl md:text-[3.4rem]">
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>

      <div className="h-8 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
