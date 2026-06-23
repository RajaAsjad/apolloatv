import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import ProductGallery from "@/components/products/ProductGallery";
import SpecsTable from "@/components/products/SpecsTable";
import ProductCard from "@/components/products/ProductCard";
import DealerCTA from "@/components/ui/DealerCTA";
import {
  products,
  getProductBySlug,
  categoryLabels,
} from "@/data/products";
import { siteConfig } from "@/data/site";
import { productSchema, breadcrumbSchema } from "@/lib/schema";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | ${siteConfig.name}`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const schema = productSchema(product);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Products", url: `${siteConfig.url}/products` },
    { name: product.name, url: `${siteConfig.url}/products/${product.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <section className="bg-apollo-dark py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">{product.name}</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="bg-apollo-dark pb-10 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <ProductGallery product={product} />

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-apollo-red/10 px-3 py-1 text-xs font-semibold text-apollo-red">
                  {categoryLabels[product.category]}
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
                  {product.engineSize}
                </span>
              </div>

              <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                {product.name}
              </h1>
              <p className="mt-2 text-lg text-apollo-red">{product.tagline}</p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                {product.description}
              </p>

              <ul className="mt-6 space-y-3">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="h-4 w-4 shrink-0 text-apollo-red" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
                <Link
                  href="/become-a-dealer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-apollo-red px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-red-600 sm:w-auto sm:px-8"
                >
                  Become a Dealer
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-apollo-red hover:text-apollo-red sm:w-auto sm:px-8"
                >
                  Request Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-apollo-darker py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Specifications</h2>
          <div className="mt-8">
            <SpecsTable specs={product.specs} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-apollo-dark py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white">Related Models</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <DealerCTA variant="inline" />
    </>
  );
}
