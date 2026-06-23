import Link from "next/link";
import { ArrowRight, Bike, Car, Zap } from "lucide-react";
import { categoryLabels, type ProductCategory } from "@/data/products";

const categories: {
  key: ProductCategory;
  icon: typeof Bike;
  description: string;
}[] = [
  { key: "atv", icon: Bike, description: "Sport, utility & youth models" },
  { key: "utv", icon: Car, description: "Side-by-sides for work & play" },
  { key: "dirt-bike", icon: Bike, description: "Apollo dirt bike lineup" },
  { key: "go-kart", icon: Car, description: "Recreational go-karts" },
  { key: "scooter", icon: Bike, description: "Urban & commuter scooters" },
  { key: "electric", icon: Zap, description: "Next-gen electric rides" },
];

export default function Categories() {
  return (
    <section className="bg-apollo-darker py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-apollo-red">
            Product Categories
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your Digital Showroom
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Browse our full powersports catalog — from entry-level youth ATVs to
            high-performance UTVs and electric dirt bikes.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ key, icon: Icon, description }) => (
            <Link
              key={key}
              href={`/products?category=${key}`}
              className="group rounded-2xl border border-white/10 bg-apollo-dark p-6 transition-all hover:border-apollo-red/40 hover:bg-apollo-red/5"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-apollo-red/10 text-apollo-red transition-colors group-hover:bg-apollo-red group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <ArrowRight className="h-5 w-5 text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-apollo-red" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">
                {categoryLabels[key]}
              </h3>
              <p className="mt-2 text-sm text-gray-400">{description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-apollo-red hover:text-apollo-red"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
