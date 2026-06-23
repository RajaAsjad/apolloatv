import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts, categoryLabels } from "@/data/products";
import { productImage } from "@/lib/images";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="bg-apollo-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-apollo-red">
              Featured Models
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Explore Apollo Lineup
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-apollo-red hover:text-red-400"
          >
            Full Catalog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-apollo-darker transition-all hover:border-apollo-red/40 hover:shadow-xl hover:shadow-red-500/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-apollo-darker">
                <Image
                  src={productImage(product.slug)}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-apollo-darker via-transparent to-transparent" />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-apollo-red/90 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
                    {categoryLabels[product.category]}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-apollo-red transition-colors">
                    {product.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-apollo-red/10 px-2.5 py-0.5 text-xs font-medium text-apollo-red">
                    {product.engineSize}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                  {product.tagline}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.highlights.slice(0, 2).map((h) => (
                    <span
                      key={h}
                      className="rounded-md bg-white/5 px-2 py-1 text-xs text-gray-400"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products?category=dirt-bike"
            className="inline-flex items-center gap-2 rounded-full bg-apollo-red px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-red-600"
          >
            Explore Apollo Dirt Bikes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
