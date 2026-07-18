import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { company } from "@/lib/site";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://genuinestockbrokers.com"),
  title: {
    default: `${company.name} — Professional Trading in India`,
    template: `%s | ${company.name}`,
  },
  description:
    "Genuine Stock Brokers is a leading professional trading firm in India, offering exceptional trading expertise, world-class training, technology and support across our offices in Ahmedabad and Mumbai.",
  keywords: [
    "Genuine Stock Brokers",
    "professional trading",
    "stock broker India",
    "trading and demat account",
    "Ahmedabad stock broker",
    "NSE BSE broker",
  ],
  openGraph: {
    title: `${company.name} — Professional Trading in India`,
    description:
      "Exceptional trading expertise and support. World-class training, technology and a team of 200+ professionals.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="min-h-screen outline-none">
          {children}
        </main>
        <Footer />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
