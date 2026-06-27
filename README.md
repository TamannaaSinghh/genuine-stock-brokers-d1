# Genuine Stock Brokers — Website Revamp

A modern, responsive redesign of [genuinestockbrokers.com](https://genuinestockbrokers.com/),
built with **Next.js (App Router)**, **React**, and **Tailwind CSS**. The content is
preserved from the original website; the design is a fresh, premium fintech aesthetic
inspired by [money-grow-lemon.vercel.app](https://money-grow-lemon.vercel.app/).

## Tech stack

- **Next.js 14** (App Router) — file-based routing, static generation, SEO metadata
- **React 18** with TypeScript
- **Tailwind CSS** — custom design tokens (brand greens, ink navy, gold accent)
- **next/font** — Plus Jakarta Sans (body) + Fraunces (display) self-hosted Google fonts
- Scroll-reveal animations via a lightweight `IntersectionObserver` component (no animation library)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Routes

| Route                         | Page                          |
| ----------------------------- | ----------------------------- |
| `/`                           | Home                          |
| `/about`                      | About Us                      |
| `/professional-trading`       | Professional Trading          |
| `/downloads`                  | Downloads (KYC, policies)     |
| `/careers`                    | Careers                       |
| `/useful-links`               | Useful Links                  |
| `/account-opening-procedure`  | Account Opening Procedure     |
| `/contact-us`                 | Contact Us (form + map)       |
| `/login1`                     | Client Login                  |
| `*`                           | Custom 404                    |

## Project structure

```
app/
  layout.tsx            # root layout: fonts, navbar, footer, metadata
  page.tsx              # homepage (hero, stats, about, services, features, compliance, CTA)
  globals.css           # design system + utilities
  <route>/page.tsx      # one folder per route
components/
  Navbar.tsx            # sticky responsive nav with mobile menu
  Footer.tsx            # multi-column footer + investor disclaimer
  PageHero.tsx          # reusable inner-page hero with breadcrumbs
  CtaBanner.tsx         # shared call-to-action banner
  ContactForm.tsx       # client-side enquiry form (mailto)
  Reveal.tsx            # scroll-into-view animation wrapper
lib/
  site.ts               # centralized content: nav, company info, documents, links
```

## Content source & notes

All textual content (company description, professional trading copy, careers,
contact details, document lists and useful links) is taken from the original
genuinestockbrokers.com pages. The **Account Opening Procedure** page uses a
standard, clearly-worded broker onboarding flow (the original page is rendered
client-side and its exact step text could not be scraped) — review and adjust
the steps/documents in `app/account-opening-procedure/page.tsx` if the original
wording differs.

Document/policy download links in `lib/site.ts` point to the original PDF assets
where available; entries marked `#` are placeholders to be wired to the real files.

## Customization

- **Colors / fonts:** `tailwind.config.ts` and `app/globals.css`
- **Navigation, contact info, document lists:** `lib/site.ts`
