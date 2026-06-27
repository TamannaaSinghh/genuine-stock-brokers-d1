import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import MediaBand from "@/components/MediaBand";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Professional Trading",
  description:
    "Professional trading is the buying and selling of financial instruments within the same trading day, capitalising on short-term price movements in securities.",
};

const characteristics = [
  {
    title: "Same-day positions",
    desc: "Buying and selling of financial instruments within the same trading day — positions are always closed before the market close.",
  },
  {
    title: "Short-term price moves",
    desc: "Focus on capitalising on short-term price movements in securities, exploiting small incremental changes in value.",
  },
  {
    title: "Long or short",
    desc: "Either buying to profit from increases, or shorting to profit from decreases in price.",
  },
  {
    title: "High volume, high momentum",
    desc: "Numerous daily transactions at high volumes, focusing on momentum and trend identification rather than long-term holding.",
  },
];

export default function ProfessionalTradingPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional Trading"
        title="The lifeblood of financial firms and professional traders."
        description="Professional trading involves buying and selling financial instruments within the same trading day — positions are always closed before the market close."
        crumbs={[{ label: "Professional Trading" }]}
      />

      {/* Definition */}
      <section className="container-page py-20">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Reveal>
              <span className="eyebrow">What it is</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-forest sm:text-4xl">
                Capitalising on short-term price movements
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  Professional trading involves the buying and selling of
                  financial instruments within the same trading day, such that
                  positions will always be closed before the market close.
                </p>
                <p>
                  The focus is on capitalising on short-term price movements in
                  securities — either buying to profit from increases, or
                  shorting to profit from decreases — exploiting small
                  incremental changes in value.
                </p>
                <p>
                  Professional traders emphasise very short-term positions, with
                  trades lasting a few seconds to a few minutes. They execute
                  numerous daily transactions at high volumes, focusing on
                  momentum and trend identification rather than long-term
                  holding.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-700 to-forest p-8 text-white shadow-lift">
              <div className="bg-dots pointer-events-none absolute inset-0 opacity-20" />
              <h3 className="relative z-10 text-sm font-semibold uppercase tracking-wider text-brand-100">
                Commonly day-traded instruments
              </h3>
              <div className="relative z-10 mt-6 space-y-3">
                {["Stocks", "Stock Options"].map((inst) => (
                  <div
                    key={inst}
                    className="flex items-center justify-between rounded-xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur"
                  >
                    <span className="font-semibold text-white">{inst}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-100"><path d="M3 17l6-6 4 4 8-9" /></svg>
                  </div>
                ))}
              </div>
              <p className="relative z-10 mt-6 text-sm leading-relaxed text-white/80">
                Professional trading is the lifeblood of financial firms and
                professional investors and speculators. Its growing popularity is
                attributed to technological advancement, regulatory changes and
                the development of the financial markets.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Markets image band */}
      <MediaBand
        src="/1.jpg"
        alt="A tablet displaying a live stock market chart"
        eyebrow="Momentum & trends"
        title="Reading the market, one move at a time."
        paragraphs={[
          "Professional traders emphasise very short-term positions — lasting from a few seconds to a few minutes — executing numerous transactions at high volumes.",
          "The edge comes from identifying momentum and trends and acting decisively, backed by the right technology, data and discipline.",
        ]}
        bullets={[
          "Capitalise on small, incremental changes in value",
          "Go long to profit from rises, or short to profit from falls",
          "Powered by world-class technology and infrastructure",
        ]}
      />

      {/* Characteristics */}
      <section className="bg-mint-50 py-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-forest sm:text-4xl">
              The characteristics of professional trading
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {characteristics.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="card-lift flex h-full gap-5 rounded-2xl border border-mint-200 bg-white p-7">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 font-display font-semibold">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-forest">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
