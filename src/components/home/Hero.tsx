import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroVideoBackground from "@/components/home/HeroVideoBackground";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-apollo-dark">
      <HeroVideoBackground />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-apollo-red animate-pulse" />
            Wholesale Powersports Distributor — USA
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-7xl">
            Premium ATVs, UTVs &{" "}
            <span className="bg-gradient-to-r from-apollo-red via-red-400 to-orange-400 bg-clip-text text-transparent">
              Dirt Bikes
            </span>{" "}
            for Dealers
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200 drop-shadow md:text-xl">
            Over 20 years of powersports expertise. Partner with Apollo ATVs for
            quality craftsmanship, competitive wholesale pricing, and a dealer
            network built on integrity and trust.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/become-a-dealer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-apollo-red px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-900/40 transition-all hover:scale-[1.02] hover:bg-red-600"
            >
              Become a Dealer
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              Explore Products
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {[
            { value: "20+", label: "Years Experience" },
            { value: "100+", label: "Dealer Partners" },
            { value: "50+", label: "Product Models" },
            { value: "USA", label: "Nationwide" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/15 bg-black/40 p-5 text-center backdrop-blur-md"
            >
              <p className="text-2xl font-bold text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-400 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
