import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { company, stats, exchanges } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <AboutPreview />
      <Services />
      <Features />
      <Compliance />
      <InvestorNotice />
      <CtaBanner />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh pt-[128px]">
      <div className="bg-dots absolute inset-0 opacity-50" />
      <div className="blob -right-24 -top-10 h-[30rem] w-[30rem] bg-brand-300/30" />
      <div className="blob -bottom-40 -left-10 h-[26rem] w-[26rem] bg-brand-200/40" />

      <div className="container-page relative z-10 grid items-center gap-14 pb-20 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        {/* Left copy */}
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              Professional trading since 1996
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="h-display mt-6 text-[2.6rem] leading-[1.04] sm:text-5xl lg:text-[3.7rem]">
              Exceptional trading{" "}
              <span className="text-gradient">expertise</span> &amp; genuine
              support.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {company.name} is a leading professional trading firm in India. We
              power our people with world-class training and the latest, best
              technology — so every trade is backed by genuine expertise.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/account-opening-procedure" className="btn-primary">
                Open an Account
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
              <Link href="/professional-trading" className="btn-outline">
                Explore Professional Trading
              </Link>
            </div>
          </Reveal>

          {/* Inline stats */}
          <Reveal delay={300}>
            <div className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-mint-200 rounded-2xl border border-mint-200 bg-white/70 backdrop-blur">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label} className="px-5 py-4 text-center">
                  <p className="font-display text-2xl font-semibold text-forest">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-tight text-slate-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right visual card */}
        <Reveal delay={200}>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-brand-300/40 to-brand-100/30 blur-2xl" />
            <div className="relative rounded-[1.75rem] border border-mint-200 bg-white/90 p-6 shadow-soft backdrop-blur-xl">
              {/* Ticker header */}
              <div className="flex items-center justify-between border-b border-mint-200 pb-4">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Live Market Pulse
                  </p>
                  <p className="font-display text-2xl font-semibold text-forest">
                    NIFTY 50
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M3 17l6-6 4 4 8-9" /></svg>
                  +1.24%
                </span>
              </div>

              {/* Chart */}
              <div className="mt-5">
                <svg viewBox="0 0 320 120" className="h-32 w-full">
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#16b56a" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#16b56a" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 90 L40 80 L80 88 L120 60 L160 66 L200 40 L240 50 L280 26 L320 18"
                    fill="none"
                    stroke="#0a9a58"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0 90 L40 80 L80 88 L120 60 L160 66 L200 40 L240 50 L280 26 L320 18 L320 120 L0 120 Z"
                    fill="url(#g)"
                  />
                  <circle cx="320" cy="18" r="4" fill="#0a9a58" />
                </svg>
              </div>

              {/* Rows */}
              <div className="mt-4 space-y-2.5">
                {[
                  { s: "RELIANCE", p: "₹ 2,914.50", c: "+0.82%", up: true },
                  { s: "HDFC BANK", p: "₹ 1,678.20", c: "+1.15%", up: true },
                  { s: "INFY", p: "₹ 1,542.90", c: "-0.34%", up: false },
                ].map((r) => (
                  <div
                    key={r.s}
                    className="flex items-center justify-between rounded-xl bg-mint-50 px-4 py-3"
                  >
                    <span className="text-sm font-bold text-forest">{r.s}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-600">{r.p}</span>
                      <span
                        className={`text-xs font-bold ${
                          r.up ? "text-brand-700" : "text-rose-700"
                        }`}
                      >
                        {r.c}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 hidden animate-float rounded-2xl border border-mint-200 bg-white px-5 py-4 shadow-soft sm:block">
              <p className="font-display text-2xl font-bold text-forest">200+</p>
              <p className="text-xs text-slate-500">Trading professionals</p>
            </div>
            <div className="absolute -right-4 top-8 hidden rounded-2xl border border-mint-200 bg-white px-4 py-3 shadow-soft md:block">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-brand-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg>
                </span>
                <div>
                  <p className="text-xs font-bold text-forest">SEBI Reg.</p>
                  <p className="text-[10px] text-slate-500">Member NSE · BSE</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Logo / trust strip                                                  */
/* ------------------------------------------------------------------ */
function LogoStrip() {
  return (
    <section className="border-y border-mint-200 bg-white">
      <div className="container-page flex flex-col items-center gap-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm font-medium text-slate-500">
          Member of India&apos;s major exchanges
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {["NSE", "BSE", "ASE", "SEBI Registered"].map((x) => (
            <span
              key={x}
              className="font-display text-lg font-semibold tracking-wide text-slate-500"
            >
              {x}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* About preview                                                       */
/* ------------------------------------------------------------------ */
function AboutPreview() {
  return (
    <section className="container-page grid items-center gap-14 py-24 lg:grid-cols-2">
      <Reveal>
        <div className="relative">
          <div className="blob -left-8 -top-8 h-52 w-52 bg-brand-300/40" />
          <div className="blob -bottom-10 right-0 h-52 w-52 bg-brand-200/50" />

          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-mint-200">
            <Image
              src="/2.jpg"
              alt="A professional analysing trading charts and market reports"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent" />
          </div>

          {/* Floating stat cards */}
          <div className="absolute -bottom-6 -left-4 rounded-2xl border border-mint-200 bg-white/95 px-5 py-4 shadow-soft backdrop-blur sm:-left-6">
            <p className="font-display text-3xl font-bold text-forest">200+</p>
            <p className="text-xs text-slate-500">Trading professionals</p>
          </div>
          <div className="absolute -right-3 top-6 rounded-2xl border border-mint-200 bg-white/95 px-5 py-4 shadow-soft backdrop-blur sm:-right-5">
            <p className="font-display text-3xl font-bold text-brand-700">2008</p>
            <p className="text-xs text-slate-500">Scaled pro trading</p>
          </div>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <span className="eyebrow">About Genuine</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="h-display mt-5 text-3xl leading-tight sm:text-4xl">
            A private limited company built on genuine trading expertise.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Based in Ahmedabad, Genuine Stock Brokers is engaged in professional
            trading in the financial markets and holds memberships with the
            National Stock Exchange of India, Bombay Stock Exchange and Ahmedabad
            Stock Exchange.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We have grown from a team size of 5 in January 2008 to a team in
            excess of 200 today. Our employees are central to our strategy — we
            provide world-class training and power them with the latest and best
            technology and support possible.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-700"
          >
            Read our story
            <svg className="transition-transform group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */
const services = [
  {
    title: "Professional Trading",
    desc: "Intraday buying and selling of financial instruments — positions are always closed before market close, capitalising on short-term price movements.",
    href: "/professional-trading",
    icon: <path d="M3 3v18h18M7 14l3-3 3 3 5-6" />,
  },
  {
    title: "Trading & Demat Accounts",
    desc: "Open your trading and demat account with a simple, transparent procedure and start trading across cash and derivatives segments.",
    href: "/account-opening-procedure",
    icon: <path d="M3 5h18v14H3zM3 10h18M7 15h4" />,
  },
  {
    title: "World-Class Training",
    desc: "We recruit and train young graduates and experienced professionals with a competency-based approach to recruitment and development.",
    href: "/careers",
    icon: <path d="M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />,
  },
  {
    title: "Technology & Support",
    desc: "Our combination of technology, experience and infrastructure is second to none in the industry — built to give traders the edge.",
    href: "/about",
    icon: <path d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 7h10v10H7z" />,
  },
];

function Services() {
  return (
    <section className="bg-mint-50 py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">What we offer</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-display mt-5 text-3xl leading-tight sm:text-4xl">
              Everything you need to trade professionally
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              From account opening to advanced professional trading, we combine
              expertise, training and technology under one roof.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <Link
                href={s.href}
                className="card-lift group flex h-full flex-col rounded-2xl border border-mint-200 bg-white p-7 shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                </span>
                <h3 className="mt-5 text-lg font-bold text-forest">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Learn more
                  <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Features / why us                                                   */
/* ------------------------------------------------------------------ */
const features = [
  {
    title: "Multi-city presence",
    desc: "A member of the major exchanges in India with dealing expertise in cash and derivatives markets.",
  },
  {
    title: "Market insight",
    desc: "Our people have a wealth of experience and knowledge about professional trading and market dynamics.",
  },
  {
    title: "A vibrant workplace",
    desc: "We offer a vibrant working environment which rewards top performance and lifelong learning.",
  },
  {
    title: "Best-in-class infrastructure",
    desc: "Our combination of technology, experience and infrastructure is second to none in the industry.",
  },
];

function Features() {
  return (
    <section className="container-page py-24">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Reveal>
            <span className="eyebrow">Why Genuine</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-display mt-5 text-3xl leading-tight sm:text-4xl">
              Trading expertise, market insight, informed decisions.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              If stock markets excite you, Genuine Stock Brokers is your broker
              of first choice. We blend deep experience with a competency-based
              approach to recruitment, development and lifelong learning.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              href="/careers"
              className="btn-primary mt-8"
            >
              Build a career with us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <div className="card-lift h-full rounded-2xl border border-mint-200 bg-white p-6 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                <h3 className="mt-4 text-base font-bold text-forest">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Compliance / exchanges                                              */
/* ------------------------------------------------------------------ */
function Compliance() {
  return (
    <section className="bg-mint-50 py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Memberships &amp; registration</span>
          <h2 className="h-display mt-5 text-3xl leading-tight sm:text-4xl">
            Regulated, registered and member of India&apos;s major exchanges
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {exchanges.map((e, i) => (
            <Reveal key={e} delay={i * 90}>
              <div className="card-lift rounded-2xl border border-mint-200 bg-white p-7 text-center shadow-card">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg>
                </span>
                <p className="mt-4 text-base font-bold text-forest">{e}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <span>SEBI Registration: <strong className="text-forest">{company.sebi}</strong></span>
            <span className="hidden h-4 w-px bg-mint-200 sm:block" />
            <span>CIN: <strong className="text-forest">{company.cin}</strong></span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Investor notice                                                     */
/* ------------------------------------------------------------------ */
function InvestorNotice() {
  return (
    <section className="container-page pt-24">
      <Reveal>
        <div className="flex flex-col gap-5 rounded-2xl border border-amber-200 bg-amber-50 p-7 sm:flex-row sm:items-start sm:p-9">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-600">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4m0 4h.01M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.42 0z" /></svg>
          </span>
          <div>
            <h3 className="text-lg font-bold text-amber-900">
              Important notice to investors
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-amber-800">
              We don&apos;t give stock tips, and have not authorized anyone to
              trade on behalf of others. Please beware of unsolicited investment
              offers claiming association with our firm. Report any unsolicited
              messages to the exchange and verify all communication through our
              official channels only.
            </p>
            <a
              href="https://www.nseindia.com/regulations/unsolicited-messages-report"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-900 underline-offset-4 hover:underline"
            >
              Report unsolicited messages
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10" /></svg>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
