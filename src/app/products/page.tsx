import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";
import DealerCTA from "@/components/ui/DealerCTA";
import {
  products,
  categoryLabels,
  engineSizes,
  type ProductCategory,
} from "@/data/products";
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
      <section className="bg-apollo-dark py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-apollo-red">
            Product Catalog
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
            Digital Showroom
          </h1>
          <p className="mt-4 max-w-2xl text-gray-400">
            Explore our complete lineup of powersports vehicles. Filter by category
            or engine size to find the right models for your dealership.
          </p>
        </div>
      </section>

      <section className="bg-apollo-darker py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                    Categories
                  </h2>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <Link
                        href="/products"
                        className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                          !categoryFilter
                            ? "bg-apollo-red/10 text-apollo-red font-medium"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        All Products
                      </Link>
                    </li>
                    {(Object.keys(categoryLabels) as ProductCategory[]).map((cat) => (
                      <li key={cat}>
                        <Link
                          href={`/products?category=${cat}`}
                          className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                            categoryFilter === cat
                              ? "bg-apollo-red/10 text-apollo-red font-medium"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {categoryLabels[cat]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                    Engine Size
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {engineSizes.map((size) => (
                      <li key={size}>
                        <Link
                          href={`/products?engine=${size}${categoryFilter ? `&category=${categoryFilter}` : ""}`}
                          className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                            engineFilter === size
                              ? "bg-apollo-red/10 text-apollo-red font-medium"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {size}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-gray-400">
                  Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
                  {categoryFilter && ` in ${categoryLabels[categoryFilter]}`}
                  {engineFilter && ` — ${engineFilter}`}
                </p>
              </div>

              {filtered.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-white/10 bg-apollo-dark p-12 text-center">
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
