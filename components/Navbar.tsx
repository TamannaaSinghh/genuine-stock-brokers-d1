"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, nav } from "@/lib/site";

// Navbar links exclude "Home" — the logo is the link home.
const navLinks = nav.filter((item) => item.href !== "/");

function Logo() {
  return (
    <Link
      href="/"
      aria-label="Genuine Stock Brokers — Home"
      className="group flex shrink-0 items-center"
    >
      <Image
        src="/logo.png"
        alt="Genuine Stock Brokers Pvt. Ltd."
        width={375}
        height={129}
        priority
        className="h-12 w-auto transition-transform group-hover:scale-[1.03] sm:h-14"
      />
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div
        className={`hidden bg-forest text-mint-100 transition-all duration-300 lg:block ${
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-10 opacity-100"
        }`}
      >
        <div className="container-page flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a href={`tel:${company.phone}`} className="flex items-center gap-2 text-mint-200 transition-colors hover:text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-mint-200 transition-colors hover:text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>
              {company.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-mint-200">SEBI Reg: {company.sebi}</span>
            <span className="h-3 w-px bg-white/20" />
            <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-mint-200 hover:text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8h4.6v14H.2V8zm7.2 0h4.4v1.9h.06c.6-1.1 2.08-2.26 4.28-2.26 4.58 0 5.42 3 5.42 6.9V22h-4.6v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V22H7.4V8z" /></svg>
            </a>
            <a href={company.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="text-mint-200 hover:text-white">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 1.5h3.6l-7.9 9 9.3 12.3h-7.3l-5.7-7.5-6.5 7.5H.7l8.4-9.7L.2 1.5h7.5l5.2 6.9 5.9-6.9zm-1.3 18.6h2L6.5 3.6H4.4l13.2 16.5z" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-mint-200 bg-white/90 shadow-card backdrop-blur-xl"
            : "border-b border-transparent bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="container-page flex h-[68px] items-center gap-4">
          <Logo />

          {/* Desktop nav — centered, single line (no wrap) */}
          <nav className="mx-auto hidden flex-nowrap items-center gap-1 whitespace-nowrap xl:flex">
            {navLinks.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-[13px] font-semibold transition-all duration-200 ${
                    active
                      ? "bg-brand-50 text-brand-700"
                      : "text-slate-600 hover:bg-mint-100 hover:text-forest"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="ml-auto flex shrink-0 items-center gap-2.5 xl:ml-0">
            <a
              href={company.loginUrl}
              className="hidden rounded-full px-4 py-2.5 text-[13px] font-semibold text-forest transition-colors hover:text-brand-700 sm:inline-flex"
            >
              Login
            </a>
            <Link
              href="/account-opening-procedure"
              className="hidden rounded-full bg-brand-600 px-5 py-2.5 text-[13px] font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-brand-500 sm:inline-flex"
            >
              Open Account
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-mint-200 bg-white text-forest xl:hidden"
            >
              {open ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-mint-200 bg-white transition-[max-height] duration-300 xl:hidden ${
          open ? "max-h-[680px] shadow-soft" : "max-h-0"
        }`}
      >
        <nav className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-3 text-[15px] font-semibold transition-colors ${
                  active
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-700 hover:bg-mint-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-2 flex gap-3">
            <a
              href={company.loginUrl}
              className="flex-1 rounded-xl border border-brand-200 px-4 py-3 text-center text-[15px] font-semibold text-forest"
            >
              Login
            </a>
            <Link
              href="/account-opening-procedure"
              className="flex-1 rounded-xl bg-brand-600 px-4 py-3 text-center text-[15px] font-semibold text-white"
            >
              Open Account
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
