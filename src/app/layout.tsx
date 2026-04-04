import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://autotrip-five.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AutoTrip | Premium Car Rental Perth Airport",
    template: "%s | AutoTrip Perth",
  },
  description:
    "Perth's premium independent car rental at the airport. Modern fleet, 24/7 shuttle service to T1-T4, and transparent pricing. Book online instantly.",
  keywords: [
    "car rental Perth",
    "Perth airport car hire",
    "cheap car hire Perth",
    "rent a car Perth WA",
    "AutoTrip Perth",
    "Perth car hire airport",
  ],
  authors: [{ name: "AutoTrip Perth" }],
  creator: "AutoTrip Perth",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: BASE_URL,
    siteName: "AutoTrip Perth",
    title: "AutoTrip | Premium Car Rental Perth Airport",
    description:
      "Perth's premium independent car rental. Modern fleet, 24/7 airport shuttle, transparent pricing. Book your Perth adventure today.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "AutoTrip Perth - Premium Car Rental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoTrip | Premium Car Rental Perth Airport",
    description:
      "Perth's premium independent car rental. Modern fleet, 24/7 airport shuttle, transparent pricing.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CarRental",
  name: "AutoTrip Perth",
  description:
    "Premium independent car rental services at Perth Airport, WA. 30+ years of local expertise.",
  url: BASE_URL,
  telephone: "+61894794900",
  email: "enquiry@autotrip.com.au",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Horrie Miller Drive",
    addressLocality: "Perth Airport",
    addressRegion: "WA",
    postalCode: "6105",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -31.9386,
    longitude: 115.9667,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  hasMap: "https://maps.google.com/?q=Perth+Airport+WA",
  sameAs: [],
};

const nav = [
  { href: "/fleet", label: "Fleet" },
  { href: "/airport-service", label: "Airport Support" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Travel Guide" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <header className="fixed top-0 z-50 w-full transition-all duration-300">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative h-20 w-48 overflow-hidden bg-white rounded-xl">
                <Image
                  src="/logo.jpg"
                  alt="AutoTrip Logo"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </Link>

            <div className="glass-card hidden items-center gap-1 rounded-full p-1 md:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-6 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/book"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-xl transition hover:scale-105 hover:bg-primary hover:text-white"
              >
                Book Now
              </Link>
              <MobileNav nav={nav} />
            </div>
          </div>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="bg-dark-bg py-24 text-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
              <div className="col-span-full lg:col-span-1">
                <Link href="/" className="flex items-center gap-3">
                  <div className="relative h-16 w-40 bg-white rounded-lg">
                    <Image
                      src="/logo.jpg"
                      alt="AutoTrip Logo"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </Link>
                <p className="mt-6 text-sm leading-7 text-slate-500">
                  Premium independent car rental services in Perth, WA.
                  Combining 30 years of local expertise with modern convenience.
                </p>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-widest text-slate-400">
                  Navigation
                </h4>
                <ul className="mt-6 space-y-4 text-sm font-medium">
                  {nav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-slate-500 transition hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/legal"
                      className="text-slate-500 transition hover:text-primary"
                    >
                      Legal & Privacy
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-widest text-slate-400">
                  Contact
                </h4>
                <ul className="mt-6 space-y-4 text-sm font-medium text-slate-500">
                  <li>
                    <a href="tel:+61894794900" className="hover:text-primary transition">
                      08 9479 4900
                    </a>
                  </li>
                  <li>
                    <a href="mailto:enquiry@autotrip.com.au" className="hover:text-primary transition">
                      enquiry@autotrip.com.au
                    </a>
                  </li>
                  <li>
                    Horrie Miller Drive
                    <br />
                    Perth Airport, WA
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-widest text-slate-400">
                  Updates
                </h4>
                <p className="mt-6 text-sm text-slate-500">
                  Join our newsletter for Perth travel tips and exclusive rental offers.
                </p>
                <div className="mt-6 flex gap-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-xl bg-white/5 px-4 py-2 text-sm border border-white/10 outline-none focus:border-primary"
                  />
                  <button className="rounded-xl bg-primary px-4 py-2 text-xs font-bold transition hover:bg-primary-hover">
                    Go
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 md:flex-row">
              <p className="text-xs text-slate-600">
                © 2026 AutoTrip Perth. All rights reserved.
              </p>
              <div className="flex gap-8 text-xs font-bold text-slate-600">
                <Link href="/legal" className="hover:text-slate-400 transition">Terms</Link>
                <Link href="/legal" className="hover:text-slate-400 transition">Privacy</Link>
                <Link href="/legal" className="hover:text-slate-400 transition">Cookies</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
