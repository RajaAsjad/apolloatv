import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroVideoBackground from "@/components/home/HeroVideoBackground";

export default function Hero() {
  return (
    <section className="relative min-h-[85svh] overflow-hidden bg-apollo-dark md:min-h-[92vh]">
      <HeroVideoBackground />

      <div className="relative mx-auto flex min-h-[85svh] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 md:min-h-[92vh] md:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md sm:mb-5 sm:px-5 sm:py-2 sm:text-sm">
            <span className="h-2 w-2 shrink-0 rounded-full bg-apollo-red animate-pulse" />
            <span className="leading-snug">Wholesale Powersports Distributor — USA</span>
          </p>

          <h1 className="text-[1.75rem] font-extrabold leading-[1.12] tracking-tight text-white drop-shadow-lg sm:text-4xl sm:leading-[1.1] lg:text-6xl xl:text-7xl">
            Premium ATVs, UTVs &{" "}
            <span className="bg-gradient-to-r from-apollo-red via-red-400 to-orange-400 bg-clip-text text-transparent">
              Dirt Bikes
            </span>{" "}
            for Dealers
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-200 drop-shadow sm:mt-6 sm:text-lg md:text-xl">
            Over 20 years of powersports expertise. Partner with Apollo ATVs for
            quality craftsmanship, competitive wholesale pricing, and a dealer
            network built on integrity and trust.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Link
              href="/become-a-dealer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-apollo-red px-6 py-3.5 text-base font-bold text-white shadow-xl shadow-red-900/40 transition-all hover:bg-red-600 sm:w-auto sm:px-8 sm:py-4"
            >
              Become a Dealer
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto sm:px-8 sm:py-4"
            >
              Explore Products
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:mt-16 sm:grid-cols-4 sm:gap-4">
          {[
            { value: "20+", label: "Years Experience" },
            { value: "100+", label: "Dealer Partners" },
            { value: "50+", label: "Product Models" },
            { value: "USA", label: "Nationwide" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/15 bg-black/40 p-3 text-center backdrop-blur-md sm:rounded-2xl sm:p-5"
            >
              <p className="text-xl font-bold text-white sm:text-3xl lg:text-4xl">{stat.value}</p>
              <p className="mt-0.5 text-[10px] font-medium uppercase leading-tight tracking-wide text-gray-400 sm:mt-1 sm:text-xs lg:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
