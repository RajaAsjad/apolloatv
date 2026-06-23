import type { Metadata } from "next";
import { Handshake, TrendingUp, Headphones, Package } from "lucide-react";
import DealerForm from "@/components/forms/DealerForm";
import { dealerBenefits, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Become a Dealer | ${siteConfig.name}`,
  description:
    "Join the Apollo ATVs dealer network. Access competitive wholesale pricing, dedicated support, and a full powersports catalog.",
};

const icons = [TrendingUp, Headphones, Package, Handshake, TrendingUp, Handshake];

export default function BecomeADealerPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-apollo-dark py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-apollo-red/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-apollo-red">
              Dealer Program
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Become an Apollo Dealer
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Partner with a leading wholesale powersports distributor. Join our
              nationwide dealer network and gain access to premium ATVs, UTVs,
              dirt bikes, and more — backed by 20+ years of industry expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-apollo-darker py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Why Partner with Apollo?
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dealerBenefits.map((benefit, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-white/10 bg-apollo-dark p-6"
                >
                  <Icon className="h-8 w-8 text-apollo-red" />
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-apollo-dark py-20" id="apply">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Dealer Application
            </h2>
            <p className="mt-4 text-gray-400">
              Fill out the form below and our dealer development team will be in
              touch within 2–3 business days.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-apollo-darker p-4 sm:mt-12 sm:p-6 md:p-8">
            <DealerForm />
          </div>
        </div>
      </section>
    </>
  );
}
