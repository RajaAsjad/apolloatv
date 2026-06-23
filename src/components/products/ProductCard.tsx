import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import { categoryLabels } from "@/data/products";
import { productImage } from "@/lib/images";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-apollo-darker transition-all hover:border-apollo-red/40 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-apollo-darker">
        <Image
          src={productImage(product.slug)}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-apollo-darker/80 via-transparent to-transparent" />
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-apollo-red/90 px-3 py-1 text-xs font-semibold text-white">
            {categoryLabels[product.category]}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-white group-hover:text-apollo-red transition-colors">
            {product.name}
          </h3>
          <span className="shrink-0 text-xs font-medium text-gray-500">
            {product.engineSize}
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-400 line-clamp-2">{product.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.colors.slice(0, 3).map((color) => (
            <span
              key={color}
              className="rounded bg-white/5 px-2 py-0.5 text-xs text-gray-500"
            >
              {color}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
