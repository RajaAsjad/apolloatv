"use client";

import Image from "next/image";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import { partnerBrands } from "@/data/partners";

function LogoTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-6 md:gap-8" aria-hidden={ariaHidden}>
      {partnerBrands.map((brand) => (
        <div
          key={`${ariaHidden ? "dup-" : ""}${brand.id}`}
          className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#fffaf5] px-5 py-4 shadow-lg shadow-black/20 transition-transform hover:scale-105 md:h-28 md:w-52"
        >
          <Image
            src={brand.logo}
            alt={ariaHidden ? "" : `${brand.name} logo`}
            width={200}
            height={100}
            className="h-full w-full object-contain"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}

export default function PartnersBanner() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-apollo-darker py-14 md:py-18">
      <div className="absolute inset-0 bg-gradient-to-b from-apollo-red/5 via-transparent to-apollo-red/5" />
      <ParticleCanvas density={0.00003} color="255, 255, 255" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-apollo-red md:text-sm">
          Trusted Partners &amp; Brands
        </p>
        <h2 className="mt-2 text-center text-xl font-bold text-white md:text-2xl">
          Carrying Industry-Leading Powersports Lines
        </h2>

        <div className="relative mt-10 md:mt-12">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-apollo-darker to-transparent md:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-apollo-darker to-transparent md:w-32" />

          <div className="overflow-hidden py-2">
            <div className="flex w-max animate-marquee items-center gap-6 md:gap-8">
              <LogoTrack />
              <LogoTrack ariaHidden />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
          {[
            "Quality Craftsmanship",
            "Dealer-Focused Support",
            "Nationwide Distribution",
            "Parts Availability",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-apollo-red" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
