import { aboutContent, trustBadges } from "@/data/site";
import { Award, Shield, Users, Wrench } from "lucide-react";

const icons = [Award, Shield, Users, Wrench];

export default function AboutSection() {
  return (
    <section className="bg-apollo-dark py-20" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-apollo-red">
              About Us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
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

          <div className="grid grid-cols-2 gap-4">
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
      </div>
    </section>
  );
}

export function TrustBanner() {
  return (
    <section className="border-y border-white/10 bg-apollo-darker py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {[
            "Quality Craftsmanship",
            "Dealer-Focused Support",
            "Integrity & Transparency",
            "Nationwide Distribution",
            "Parts Availability",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-apollo-red" />
              <span className="text-sm font-medium text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
