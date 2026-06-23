import type { Metadata } from "next";
import AboutSection from "@/components/home/AboutSection";
import PartnersBanner from "@/components/home/PartnersBanner";
import DealerCTA from "@/components/ui/DealerCTA";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description:
    "Over 20 years of powersports industry experience. Learn about Apollo ATVs mission, values, and commitment to dealer partnerships.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-apollo-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-apollo-red">
            About Apollo
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            A Reputed Name in Powersports
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-400 leading-relaxed">
            For over two decades, Apollo ATVs has been a trusted wholesale
            distributor serving dealers across the United States with quality
            vehicles and genuine parts.
          </p>
        </div>
      </section>

      <PartnersBanner />
      <AboutSection />
      <DealerCTA />
    </>
  );
}
