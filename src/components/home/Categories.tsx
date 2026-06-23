import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { categoryLabels, type ProductCategory } from "@/data/products";
import { siteImages } from "@/lib/images";

const categories: {
  key: ProductCategory;
  description: string;
}[] = [
  { key: "atv", description: "Sport, utility & youth models" },
  { key: "utv", description: "Side-by-sides for work & play" },
  { key: "dirt-bike", description: "Apollo dirt bike lineup" },
  { key: "go-kart", description: "Recreational go-karts" },
  { key: "scooter", description: "Urban & commuter scooters" },
  { key: "electric", description: "Next-gen electric rides" },
];

export default function Categories() {
  return (
    <section className="bg-apollo-darker py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-apollo-red">
            Product Categories
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Your Digital Showroom
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Browse our full powersports catalog — from entry-level youth ATVs to
            high-performance UTVs and electric dirt bikes.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ key, description }) => (
            <Link
              key={key}
              href={`/products?category=${key}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-apollo-dark transition-all hover:border-apollo-red/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={siteImages.categories[key]}
                  alt={categoryLabels[key]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-apollo-dark via-apollo-dark/20 to-transparent" />
              </div>
              <div className="flex items-start justify-between p-5">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-apollo-red transition-colors">
                    {categoryLabels[key]}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">{description}</p>
                </div>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-apollo-red" />
              </div>
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
