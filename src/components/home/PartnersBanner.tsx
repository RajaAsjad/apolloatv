"use client";

import Image from "next/image";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import { siteImages } from "@/lib/images";

export default function PartnersBanner() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-apollo-darker py-14 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-apollo-red/5 via-transparent to-apollo-red/5" />
      <ParticleCanvas density={0.00004} color="255, 255, 255" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-apollo-red md:text-sm">
          Trusted Partners &amp; Brands
        </p>
        <h2 className="mt-2 text-center text-xl font-bold text-white md:text-2xl">
          Carrying Industry-Leading Powersports Lines
        </h2>

        <div className="relative mt-10">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-apollo-darker to-transparent md:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-apollo-darker to-transparent md:w-24" />

          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-16 py-4">
              {[0, 1].map((set) => (
                <div
                  key={set}
                  className="flex shrink-0 items-center justify-center px-8"
                  aria-hidden={set === 1}
                >
                  <div className="relative h-20 w-[min(88vw,680px)] overflow-hidden md:h-28 md:w-[min(88vw,900px)] lg:h-32">
                    <Image
                      src={siteImages.trustLogos}
                      alt={set === 0 ? "Partner and brand logos" : ""}
                      fill
                      className="scale-[3.2] object-cover object-center brightness-110 contrast-110 md:scale-[3.8] lg:scale-[4.2]"
                      sizes="900px"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
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
