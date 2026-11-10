import type { Metadata } from "next";
import { About } from "@/components/about/About";
import { Access } from "@/components/access/Access";
import { MediaContact } from "@/components/contact/MediaContact";
import { Hero } from "@/components/hero/Hero";
import { News } from "@/components/news/News";
import { Partners } from "@/components/partners/Partners";
import { Sponsors } from "@/components/sponsors/Sponsors";
import { Venues } from "@/components/venues/Venues";
import { facility, mapPoint } from "@/lib/content";

const description =
  "Tokyo Quantum Gateway（TQG）のトップページ。施設紹介、お知らせ、イベント、アクセス、取材・報道に関するお問い合わせ。";

export const metadata: Metadata = {
  title: { absolute: "Tokyo Quantum Gateway" },
  description,
  openGraph: {
    title: "Tokyo Quantum Gateway",
    description,
    locale: "ja_JP",
    type: "website",
    siteName: "Tokyo Quantum Gateway",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tokyo Quantum Gateway",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: facility.name,
  address: {
    "@type": "PostalAddress",
    postalCode: "100-0005",
    streetAddress: facility.address,
    addressLocality: "千代田区",
    addressRegion: "東京都",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: mapPoint.lat,
    longitude: mapPoint.lon,
  },
  openingHours: "Mo-Fr 09:00-18:00",
};

export default function HomePage() {
  return (
    <main id="top" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <About />
      <News />
      <Venues />
      <Partners />
      <Sponsors />
      <Access />
      <MediaContact />
    </main>
  );
}
