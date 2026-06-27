import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import {
  kycDocuments,
  policyDocuments,
  vernacularLinks,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Download KYC and account opening forms, internal policies and registration documents from Genuine Stock Brokers.",
};

function DownloadIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="Forms, policies & registration documents."
        description="Access our Know Your Customer (KYC) forms, internal policies and exchange registration documents — all in one place."
        crumbs={[{ label: "Downloads" }]}
      />

      {/* KYC */}
      <section className="container-page py-20">
        <Reveal>
          <span className="eyebrow">Know Your Customer (KYC)</span>
          <h2 className="mt-5 font-display text-3xl font-semibold text-forest sm:text-4xl">
            Account opening &amp; KYC documents
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {kycDocuments.map((doc, i) => (
            <Reveal key={doc.title} delay={i * 70}>
              <a
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift group flex items-center justify-between gap-4 rounded-2xl border border-mint-200 bg-white p-6"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></svg>
                  </span>
                  <span className="font-semibold text-forest">{doc.title}</span>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-500 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <DownloadIcon />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Policies */}
      <section className="bg-mint-50 py-20">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">Policies</span>
            <h2 className="mt-5 font-display text-3xl font-semibold text-forest sm:text-4xl">
              Compliance &amp; cybersecurity policies
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Our complete set of operational, data protection and cybersecurity
              policies, available for download.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {policyDocuments.map((title, i) => (
              <Reveal key={title} delay={(i % 3) * 60}>
                <a
                  href="#"
                  className="card-lift group flex items-center gap-3 rounded-xl border border-mint-200 bg-white p-4"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <DownloadIcon />
                  </span>
                  <span className="text-sm font-medium text-forest">
                    {title}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vernacular */}
      <section className="container-page py-20">
        <Reveal>
          <span className="eyebrow">Vernacular</span>
          <h2 className="mt-5 font-display text-3xl font-semibold text-forest sm:text-4xl">
            Registration documents in regional languages
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {vernacularLinks.map((link, i) => (
            <Reveal key={link.title} delay={i * 80}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift group flex items-center justify-between gap-4 rounded-2xl border border-mint-200 bg-white p-6"
              >
                <span className="font-semibold text-forest">{link.title}</span>
                <svg className="shrink-0 text-slate-400 transition-colors group-hover:text-brand-600" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10" /></svg>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
