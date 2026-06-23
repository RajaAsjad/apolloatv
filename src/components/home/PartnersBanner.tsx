"use client";

import Image from "next/image";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import { partnerBrands } from "@/data/partners";

function LogoCard({
  name,
  logo,
  tall = false,
  ariaHidden = false,
}: {
  name: string;
  logo: string;
  tall?: boolean;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black px-4 py-3 shadow-lg shadow-black/40 sm:rounded-2xl sm:px-6 sm:py-4 ${
        tall
          ? "h-24 w-36 sm:h-32 sm:w-52 md:h-36 md:w-60"
          : "h-20 w-32 sm:h-28 sm:w-48 md:h-32 md:w-56"
      }`}
    >
      <Image
        src={logo}
        alt={ariaHidden ? "" : `${name} logo`}
        width={240}
        height={120}
        className="h-full w-full object-contain"
        unoptimized
      />
    </div>
  );
}

function LogoTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-4 sm:gap-6 md:gap-10"
      aria-hidden={ariaHidden}
    >
      {partnerBrands.map((brand) => (
        <LogoCard
          key={`${ariaHidden ? "dup-" : ""}${brand.id}`}
          name={brand.name}
          logo={brand.logo}
          tall={brand.id === "apollo"}
          ariaHidden={ariaHidden}
        />
      ))}
    </div>
  );
}

export default function PartnersBanner() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-apollo-darker py-10 sm:py-14 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-apollo-red/5 via-transparent to-apollo-red/5" />
      <ParticleCanvas density={0.00003} color="255, 255, 255" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-apollo-red sm:text-xs md:text-sm md:tracking-[0.25em]">
          Trusted Partners &amp; Brands
        </p>
        <h2 className="mt-2 text-center text-lg font-bold leading-snug text-white sm:text-xl md:text-2xl">
          Carrying Industry-Leading Powersports Lines
        </h2>

        <div className="relative mt-8 sm:mt-10 md:mt-12">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-apollo-darker to-transparent sm:w-20 md:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-apollo-darker to-transparent sm:w-20 md:w-32" />

          <div className="overflow-hidden py-2">
            <div className="flex w-max animate-marquee items-center">
              <LogoTrack />
              <LogoTrack ariaHidden />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-2 text-center text-xs text-gray-500 sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-3 sm:text-sm">
          {[
            "Quality Craftsmanship",
            "Dealer-Focused Support",
            "Nationwide Distribution",
            "Parts Availability",
          ].map((item) => (
            <span key={item} className="flex items-center justify-center gap-2 sm:justify-start">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-apollo-red" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
