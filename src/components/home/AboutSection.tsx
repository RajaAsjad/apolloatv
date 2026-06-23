import Image from "next/image";
import { aboutContent, trustBadges } from "@/data/site";
import { siteImages } from "@/lib/images";
import { Award, Shield, Users, Wrench } from "lucide-react";

const icons = [Award, Shield, Users, Wrench];

export default function AboutSection() {
  return (
    <section className="bg-apollo-dark py-12 sm:py-16 md:py-20" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={siteImages.about}
              alt="Apollo ATVs dealership and powersports"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-apollo-red">
              About Us
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              {aboutContent.heading}
            </h2>
            <div className="mt-6 space-y-4">
              {aboutContent.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-gray-400 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-4">
          {trustBadges.map((badge, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={badge.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-apollo-red/30 hover:bg-apollo-red/5"
              >
                <Icon className="h-8 w-8 text-apollo-red" />
                <p className="mt-4 text-2xl font-bold text-white">{badge.label}</p>
                <p className="mt-1 text-sm text-gray-400">{badge.sublabel}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
