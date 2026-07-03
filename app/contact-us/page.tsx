import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Genuine Stock Brokers Pvt. Ltd. — registered & corporate office in Ahmedabad, Gujarat. Phone, email and enquiry form.",
};

const details = [
  {
    label: "Registered & Corporate Office",
    value: company.address.full,
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    label: "Phone",
    value: company.phone,
    href: `tel:${company.phone}`,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 5L2 7" />
      </>
    ),
  },
  {
    label: "Business hours",
    value: company.hours,
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
];

export default function ContactPage() {
  const mapQuery = encodeURIComponent(company.address.full);
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd love to hear from you."
        description="Reach our team for account opening, trading support or any enquiry. Our registered and corporate office is in Ahmedabad, Gujarat."
        crumbs={[{ label: "Contact Us" }]}
      />

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Details */}
          <div>
            <Reveal>
              <span className="eyebrow">Get in touch</span>
              <h2 className="mt-5 font-display text-3xl font-semibold text-forest sm:text-4xl">
                {company.legalName}
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 80}>
                  <div className="flex gap-4 rounded-2xl border border-mint-200 bg-white p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d.icon}</svg>
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a href={d.href} className="mt-1 block font-medium text-forest hover:text-brand-700">
                          {d.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-medium text-forest">{d.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 rounded-2xl bg-mint-50 p-5 text-sm text-slate-600">
                <span>CIN: <strong className="text-forest">{company.cin}</strong></span>
                <span>SEBI Reg: <strong className="text-forest">{company.sebi}</strong></span>
                <span>Fax: <strong className="text-forest">{company.fax}</strong></span>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={100}>
            <div className="rounded-3xl border border-mint-200 bg-white p-8 shadow-xl shadow-slate-200/40">
              <h3 className="text-xl font-semibold text-forest">
                Send us a message
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Fill in the form and our team will get back to you.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Office image banner */}
        <Reveal delay={100}>
          <div className="relative mt-12 aspect-[21/9] overflow-hidden rounded-3xl shadow-soft ring-1 ring-mint-200">
            <Image
              src="/5.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
                Registered &amp; Corporate Office
              </p>
              <p className="mt-2 max-w-xl font-display text-2xl font-semibold text-white sm:text-3xl">
                Visit us in Ahmedabad, Gujarat
              </p>
              <p className="mt-2 max-w-lg text-sm text-mint-100">
                {company.address.full}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Map */}
        <Reveal delay={120}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-mint-200">
            <iframe
              title="Genuine Stock Brokers office location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
