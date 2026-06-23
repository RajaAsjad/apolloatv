"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteImages } from "@/lib/images";

const videos = [
  {
    id: "JC2uqv7KNmc",
    title: "Cyber Roamer 250 EFI",
    thumb: siteImages.cyberRoamerFeature,
    href: "/products/cyber-roamer-300-efi",
  },
  {
    id: "xux-CBFFakg",
    title: "Electric Thunder 115 HP115E",
    thumb: "/images/products/youth-explorer-110.jpg",
    href: "/products/sx-e2",
  },
  {
    id: "ps7tCUSaJWs",
    title: "Apollo DBX19 125cc",
    thumb: "/images/products/apollo-blitz-125.jpg",
    href: "/products/apollo-blitz-125",
  },
];

export default function VideoSection() {
  const [active, setActive] = useState(0);
  const current = videos[active];

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
              Watch our machines in action — from rugged trail ATVs to electric
              dirt bikes. Real-world performance your customers can trust.
            </p>
            <Link
              href={current.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-apollo-red hover:text-red-400"
            >
              View {current.title}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="mt-8 flex flex-wrap gap-3">
              {videos.map((video, i) => (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    active === i
                      ? "border-apollo-red bg-apollo-red/10 text-apollo-red"
                      : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {video.title}
                </button>
              ))}
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
            <iframe
              key={current.id}
              src={`https://www.youtube.com/embed/${current.id}?rel=0&modestbranding=1`}
              title={current.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
