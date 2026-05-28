import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/config";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Luxury Home Fragrance Belfast`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "home fragrance Belfast",
    "luxury wax melts Northern Ireland",
    "room sprays Belfast",
    "reed diffusers NI",
    "The Scent Bar Belfast",
    "handcrafted scents Belfast",
    "local fragrance business Northern Ireland",
  ],
  openGraph: {
    title: `${SITE.name} | Luxury Home Fragrance`,
    description: SITE.description,
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: SITE.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belfast",
    addressRegion: "Northern Ireland",
    addressCountry: "GB",
  },
  areaServed: "Northern Ireland",
  email: SITE.email,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
