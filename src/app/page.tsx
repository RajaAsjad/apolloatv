import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import VideoSection from "@/components/home/VideoSection";
import AboutSection from "@/components/home/AboutSection";
import PartnersBanner from "@/components/home/PartnersBanner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Categories from "@/components/home/Categories";
import DealerCTA from "@/components/ui/DealerCTA";
import { siteConfig } from "@/data/site";
import { organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `${siteConfig.name} – ${siteConfig.tagline}`,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
};

export default function HomePage() {
  const schema = organizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <PartnersBanner />
      <FeaturedProducts />
      <Categories />
      <AboutSection />
      <VideoSection />
      <DealerCTA />
    </>
  );
}
