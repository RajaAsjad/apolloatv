"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";
import { productImage } from "@/lib/images";

export default function ProductGallery({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const src = productImage(product.slug);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-apollo-darker">
        <Image
          src={src}
          alt={`${product.name} - ${selectedColor}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-sm font-medium text-white">{selectedColor}</p>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-gray-400">Available Colors</p>
        <div className="-mx-1 flex gap-2 overflow-x-auto pb-1 scrollbar-hide sm:mx-0 sm:flex-wrap sm:overflow-visible">
          {product.colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => setSelectedColor(color)}
              className={`shrink-0 rounded-full border px-3 py-2 text-xs font-medium transition-all sm:px-4 sm:text-sm ${
                selectedColor === color
                  ? "border-apollo-red bg-apollo-red/10 text-apollo-red"
                  : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
