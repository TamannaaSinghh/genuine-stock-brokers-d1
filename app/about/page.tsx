import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import MediaBand from "@/components/MediaBand";
import CtaBanner from "@/components/CtaBanner";
import { exchanges, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Genuine Stock Brokers is a private limited company based in Ahmedabad, engaged in professional trading and a member of NSE, BSE and ASE.",
};

const values = [
  {
    title: "People first",
    desc: "Our employees are central to our strategy. We provide world-class training and the best technology and support possible.",
  },
  {
    title: "Genuine expertise",
    desc: "We were early adopters of professional trading in India, with proven expertise in analysing market dynamics.",
  },
  {
    title: "Lifelong learning",
    desc: "We foster self-learning, informal training and lifelong learning across the organisation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Genuine"
        title="Built on genuine trading expertise."
        description="A private limited company based in Ahmedabad, engaged in professional trading in the financial markets — and a member of India's major exchanges."
        crumbs={[{ label: "About" }]}
      />

      {/* Intro */}
      <section className="container-page grid gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <span className="eyebrow">Who we are</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-forest sm:text-4xl">
              An early adopter of professional trading in India.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Genuine Stock Brokers is a private limited company based in
                Ahmedabad, engaged in professional trading in the financial
                markets. The firm maintains memberships with the National Stock
                Exchange of India, the Bombay Stock Exchange and the Ahmedabad
                Stock Exchange.
              </p>
              <p>
                We expanded significantly since our inception — growing from a
                team size of 5 in January 2008 to a team in excess of 200 today.
                We currently operate 5 offices in total: 4 in Ahmedabad and 1 in
                Mumbai.
              </p>
              <p>
                Employee development is central to our strategy. Our approach
                involves providing world-class training to our employees and
                powering them with the latest and best technology and support
                possible. We were early adopters of professional trading in
                India and bring genuine expertise in analysing market dynamics.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-mint-200 bg-mint-50 p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              At a glance
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-4xl font-semibold text-brand-700">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-mint-200 pt-6">
              <h4 className="text-sm font-semibold text-forest">
                Exchange memberships
              </h4>
              <ul className="mt-3 space-y-2">
                {exchanges.map((e) => (
                  <li
                    key={e}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <svg className="mt-0.5 shrink-0 text-brand-600" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Growth story */}
      <MediaBand
        src="/3.jpg"
        alt=""
        eyebrow="Our growth"
        title="From a team of 5 to over 200 — and growing."
        paragraphs={[
          "Since January 2008 we have grown steadily and sustainably, scaling our people, our presence and our capabilities across India's financial markets.",
          "That growth is powered by a simple belief: invest in your people, give them world-class training and the best technology, and genuine results follow.",
        ]}
        bullets={[
          "5 offices — four in Ahmedabad and one in Mumbai",
          "Members of NSE, BSE and the Ahmedabad Stock Exchange",
          "Early adopters of professional trading in India",
        ]}
        badge={{ value: "200+", label: "and growing" }}
        reverse
      />

      {/* Values */}
      <section className="bg-mint-50 py-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What drives us</span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-forest sm:text-4xl">
              The principles behind every trade
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="card-lift h-full rounded-2xl border border-mint-200 bg-white p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600 text-white">
                    <span className="font-display text-lg font-semibold">
                      0{i + 1}
                    </span>
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-forest">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {v.desc}
                  </p>
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
