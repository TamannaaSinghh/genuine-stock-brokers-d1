import Link from "next/link";
import Reveal from "./Reveal";
import { company } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="container-page py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-700 to-forest px-6 py-14 text-center text-white shadow-lift sm:px-12 sm:py-20">
          <div className="bg-dots absolute inset-0 opacity-20" />
          <div className="blob -right-10 top-0 h-72 w-72 bg-brand-400/30" />
          <div className="blob -left-10 bottom-0 h-72 w-72 bg-brand-300/20" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
              Get started today
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Ready to trade with a partner you can trust?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/85">
              Open your trading &amp; demat account with Genuine Stock Brokers and
              get the training, technology and support to trade with confidence.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/account-opening-procedure"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 shadow-xl transition-transform hover:-translate-y-0.5"
              >
                Open an Account
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
              <a
                href={`tel:${company.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
              >
                Call {company.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
