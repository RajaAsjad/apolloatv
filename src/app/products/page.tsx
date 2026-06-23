import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";
import ProductFilters from "@/components/products/ProductFilters";
import DealerCTA from "@/components/ui/DealerCTA";
import { products, categoryLabels, type ProductCategory } from "@/data/products";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Products | ${siteConfig.name}`,
  description:
    "Browse Apollo ATVs full powersports catalog — ATVs, UTVs, dirt bikes, go-karts, scooters, and electric models for dealers.",
};

type SearchParams = Promise<{ category?: string; engine?: string }>;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const categoryFilter = params.category as ProductCategory | undefined;
  const engineFilter = params.engine;

  let filtered = [...products];
  if (categoryFilter && categoryLabels[categoryFilter]) {
    filtered = filtered.filter((p) => p.category === categoryFilter);
  }
  if (engineFilter) {
    filtered = filtered.filter((p) => p.engineSize === engineFilter);
  }

  return (
    <>
      <section className="bg-apollo-dark py-10 sm:py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-apollo-red">
            Product Catalog
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Digital Showroom
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-gray-400 sm:mt-4 sm:text-base">
            Explore our complete lineup of powersports vehicles. Filter by category
            or engine size to find the right models for your dealership.
          </p>
        </div>
      </section>

      <section className="bg-apollo-darker py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
            <ProductFilters
              categoryFilter={categoryFilter}
              engineFilter={engineFilter}
            />

            <div className="min-w-0 flex-1">
              <div className="mb-4 sm:mb-6">
                <p className="text-sm text-gray-400">
                  Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
                  {categoryFilter && ` in ${categoryLabels[categoryFilter]}`}
                  {engineFilter && ` — ${engineFilter}`}
                </p>
              </div>

              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
                  {filtered.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-white/10 bg-apollo-dark p-8 text-center sm:p-12">
                  <p className="text-gray-400">No products match your filters.</p>
                  <Link
                    href="/products"
                    className="mt-4 inline-block text-sm font-semibold text-apollo-red hover:text-red-400"
                  >
                    View all products
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <DealerCTA variant="inline" title="Interested in stocking these models?" />
    </>
  );
}
