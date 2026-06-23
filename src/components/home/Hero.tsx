import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { siteImages } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-apollo-dark">
      <Image
        src={siteImages.heroBanner}
        alt="Apollo ATVs powersports lineup"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-apollo-dark via-apollo-dark/90 to-apollo-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-apollo-dark via-transparent to-apollo-dark/30" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-apollo-red/30 bg-apollo-red/10 px-4 py-1.5 text-sm font-medium text-apollo-red backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-apollo-red animate-pulse" />
            Wholesale Powersports Distributor — USA
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Premium ATVs, UTVs &{" "}
            <span className="bg-gradient-to-r from-apollo-red to-orange-400 bg-clip-text text-transparent">
              Dirt Bikes
            </span>{" "}
            for Dealers
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Over 20 years of powersports expertise. Partner with Apollo ATVs for
            quality craftsmanship, competitive wholesale pricing, and a dealer
            network built on integrity and trust.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/become-a-dealer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-apollo-red px-8 py-4 text-base font-bold text-white transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/25"
            >
              Become a Dealer
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
            >
              Explore Products
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "20+", label: "Years Experience" },
            { value: "100+", label: "Dealer Partners" },
            { value: "50+", label: "Product Models" },
            { value: "USA", label: "Nationwide" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-black/40 p-4 text-center backdrop-blur"
            >
              <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VideoSection() {
  return (
    <section className="bg-apollo-darker py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-apollo-red">
              See Apollo in Action
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for Performance. Designed for Dealers.
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              From rugged trail ATVs to high-performance UTVs and electric dirt
              bikes, Apollo delivers the quality and variety your customers demand.
            </p>
            <Link
              href="/products/cyber-roamer-300-efi"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-apollo-red hover:text-red-400"
            >
              View Cyber Roamer 300 EFI
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <a
            href="https://www.youtube.com/watch?v=JC2uqv7KNmc"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-video overflow-hidden rounded-2xl border border-white/10"
          >
            <Image
              src={siteImages.cyberRoamerFeature}
              alt="Cyber Roamer video thumbnail"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-apollo-red/90 text-white shadow-2xl transition-transform group-hover:scale-110">
                <Play className="h-8 w-8 fill-current ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-sm font-medium text-white">Cyber Roamer Showcase</p>
              <p className="text-xs text-gray-400">Watch on YouTube</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
