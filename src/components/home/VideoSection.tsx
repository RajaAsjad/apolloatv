"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const videos = [
  {
    id: "JC2uqv7KNmc",
    title: "Cyber Roamer 250",
    href: "/products/cyber-roamer-300-efi",
  },
  {
    id: "xux-CBFFakg",
    title: "Electric Thunder 115",
    href: "/products/sx-e2",
  },
  {
    id: "ps7tCUSaJWs",
    title: "Apollo DBX19 125",
    href: "/products/apollo-blitz-125",
  },
];

export default function VideoSection() {
  const [active, setActive] = useState(0);
  const current = videos[active];

  return (
    <section className="bg-apollo-darker py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-apollo-red">
              See Apollo in Action
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Built for Performance. Designed for Dealers.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
              Watch our machines in action — from rugged trail ATVs to electric
              dirt bikes. Real-world performance your customers can trust.
            </p>
            <Link
              href={current.href}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-apollo-red hover:text-red-400 sm:mt-6"
            >
              View {current.title}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-hide sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
              {videos.map((video, i) => (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`shrink-0 rounded-full border px-3 py-2 text-xs font-medium transition-all sm:px-4 sm:text-sm ${
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

          <div className="relative order-1 aspect-video overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/50 sm:rounded-2xl lg:order-2">
            <iframe
              key={current.id}
              src={`https://www.youtube.com/embed/${current.id}?rel=0&modestbranding=1`}
              title={current.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 sm:rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
