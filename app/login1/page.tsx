import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Login",
  description: "Client login for Genuine Stock Brokers trading platform.",
};

export default function LoginPage() {
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden bg-mesh px-5 pt-[120px] pb-16">
      <div className="bg-dots absolute inset-0 opacity-50" />
      <div className="blob -right-24 -top-20 h-96 w-96 bg-brand-300/30" />
      <div className="blob -bottom-24 left-0 h-96 w-96 bg-brand-200/40" />

      <div className="relative z-10 w-full max-w-md">
        <div className="rounded-[1.75rem] border border-mint-200 bg-white/90 p-8 shadow-soft backdrop-blur-xl">
          <Link href="/" aria-label="Genuine Stock Brokers — Home" className="inline-flex">
            <Image
              src="/logo.png"
              alt=""
              width={375}
              height={129}
              className="h-11 w-auto"
            />
          </Link>

          <h1 className="h-display mt-8 text-2xl">Client Login</h1>
          <p className="mt-1.5 text-sm text-slate-500">
            Access your trading account securely.
          </p>

          <form className="mt-7 space-y-4">
            <div>
              <label htmlFor="userid" className="mb-1.5 block text-sm font-medium text-forest">
                User ID
              </label>
              <input
                id="userid"
                name="userid"
                type="text"
                autoComplete="username"
                placeholder="Enter your user ID"
                className="w-full rounded-xl border border-slate-500 bg-white px-4 py-3 text-sm text-forest outline-none transition-colors placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-forest">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-500 bg-white px-4 py-3 text-sm text-forest outline-none transition-colors placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-brand-600"
            >
              Log in
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-500">
            Don&apos;t have an account?{" "}
            <Link href="/account-opening-procedure" className="font-semibold text-brand-700 hover:underline">
              Open one today
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          For login assistance, contact{" "}
          <a href={`mailto:${company.email}`} className="font-semibold text-brand-700 hover:underline">
            {company.email}
          </a>
        </p>
      </div>
    </section>
  );
}
