import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { usefulLinks, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Useful Links",
  description:
    "Helpful regulatory and investor resources — report unsolicited messages, link Aadhaar with PAN, investor education, SmartODR and more.",
};

export default function UsefulLinksPage() {
  return (
    <>
      <PageHero
        eyebrow="Useful Links"
        title="Regulatory & investor resources."
        description="A curated set of helpful links to regulatory portals, investor education and dispute resolution resources."
        crumbs={[{ label: "Useful Links" }]}
      />

      <section className="container-page py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {usefulLinks.map((link, i) => (
            <Reveal key={link.title} delay={i * 80}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift group flex h-full flex-col rounded-2xl border border-mint-200 bg-white p-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" /></svg>
                </span>
                <h2 className="mt-5 text-lg font-semibold text-forest">
                  {link.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {link.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Visit link
                  <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10" /></svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Social */}
        <Reveal>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-mint-200 bg-mint-50 p-8 sm:flex-row">
            <div>
              <h2 className="text-lg font-semibold text-forest">
                Connect with us
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Follow Genuine Stock Brokers on social media.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-brand-600"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8h4.6v14H.2V8zm7.2 0h4.4v1.9h.06c.6-1.1 2.08-2.26 4.28-2.26 4.58 0 5.42 3 5.42 6.9V22h-4.6v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V22H7.4V8z" /></svg>
                LinkedIn
              </a>
              <a
                href={company.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-500 px-5 py-2.5 text-sm font-semibold text-forest transition-colors hover:bg-white"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 1.5h3.6l-7.9 9 9.3 12.3h-7.3l-5.7-7.5-6.5 7.5H.7l8.4-9.7L.2 1.5h7.5l5.2 6.9 5.9-6.9zm-1.3 18.6h2L6.5 3.6H4.4l13.2 16.5z" /></svg>
                Twitter / X
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
