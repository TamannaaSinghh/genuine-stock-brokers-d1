import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import MediaBand from "@/components/MediaBand";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "If stock markets excite you and you wish to make a career in professional trading, Genuine Stock Brokers is your broker of first choice.",
};

const highlights = [
  {
    title: "Multi-city presence",
    desc: "Genuine Stock Broker is a member of the major exchanges in India, with dealing expertise in cash and derivatives markets.",
  },
  {
    title: "Trading expertise & market insight",
    desc: "Our people have a wealth of experience and knowledge about professional trading, helping you make informed decisions.",
  },
  {
    title: "A vibrant environment",
    desc: "We offer a vibrant working environment which will reward top performance.",
  },
  {
    title: "Technology & infrastructure",
    desc: "Our combination of technology, experience and infrastructure is second to none in the industry.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Make a career in professional trading."
        description="If stock markets excite you and you wish to make a career in professional trading activities, Genuine Stock Broker is your broker of first choice."
        crumbs={[{ label: "Careers" }]}
      />

      {/* Why join */}
      <section className="container-page py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why join us</span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-forest sm:text-4xl">
            A combination that&apos;s second to none in the industry
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We recruit, hire and train highly talented young graduates and
            experienced professionals using a competency-based approach to
            recruitment and development — fostering self-learning, informal
            training and lifelong learning.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 90}>
              <div className="card-lift flex h-full flex-col rounded-2xl border border-mint-200 bg-white p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                <h3 className="mt-5 text-base font-semibold text-forest">
                  {h.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {h.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Workplace image band */}
      <MediaBand
        src="/4.jpg"
        alt=""
        eyebrow="Where you'll work"
        title="A vibrant environment that rewards performance."
        paragraphs={[
          "With a multi-city presence and dealing expertise across cash and derivatives markets, you'll work alongside people with a genuine wealth of experience and knowledge.",
          "We foster self-learning, informal training and lifelong learning — and a combination of technology, experience and infrastructure that's second to none in the industry.",
        ]}
        bullets={[
          "Multi-city presence across India",
          "Competency-based recruitment and development",
          "Best-in-class technology and infrastructure",
        ]}
        reverse
      />

      {/* Register CTA */}
      <section className="container-page pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-700 to-forest px-6 py-14 text-center text-white shadow-lift sm:px-12 sm:py-16">
            <div className="bg-dots pointer-events-none absolute inset-0 opacity-20" />
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Ready to pursue a career with Genuine Stock Brokers?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                If you would like to pursue a career with us, register
                immediately and our team will get in touch with you.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${company.email}?subject=Career%20at%20Genuine%20Stock%20Brokers`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 shadow-xl transition-transform hover:-translate-y-0.5"
                >
                  Register your interest
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a
                  href={`tel:${company.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Call {company.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
