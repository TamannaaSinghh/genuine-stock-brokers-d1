import Image from "next/image";
import Reveal from "./Reveal";

type Badge = { value: string; label: string };

export default function MediaBand({
  src,
  alt,
  eyebrow,
  title,
  paragraphs = [],
  bullets = [],
  badge,
  reverse = false,
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  badge?: Badge;
  reverse?: boolean;
}) {
  return (
    <section className="container-page py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <Reveal className={reverse ? "lg:order-2" : ""}>
          <div className="relative">
            <div className="blob -right-8 -top-8 h-44 w-44 bg-brand-300/40" />
            <div className="blob -bottom-8 -left-8 h-44 w-44 bg-brand-200/50" />
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-mint-200">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/25 via-transparent to-transparent" />
            </div>

            {badge && (
              <div className="absolute -bottom-5 left-6 rounded-2xl border border-mint-200 bg-white/95 px-5 py-4 shadow-soft backdrop-blur">
                <p className="font-display text-3xl font-bold text-forest">
                  {badge.value}
                </p>
                <p className="text-xs text-slate-500">{badge.label}</p>
              </div>
            )}
          </div>
        </Reveal>

        {/* Text */}
        <div className={reverse ? "lg:order-1" : ""}>
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-display mt-5 text-3xl leading-tight sm:text-4xl">
              {title}
            </h2>
          </Reveal>
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={140 + i * 60}>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{p}</p>
            </Reveal>
          ))}
          {bullets.length > 0 && (
            <Reveal delay={200}>
              <ul className="mt-6 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
