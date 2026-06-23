"use client";

import { useState } from "react";
import type { Product } from "@/data/products";

export default function ProductGallery({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800 via-apollo-darker to-black">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <p className="text-7xl font-black text-white/10">{product.engineSize}</p>
          <p className="mt-4 text-lg font-bold text-white">{product.name}</p>
          <p className="mt-1 text-sm text-apollo-red">{selectedColor}</p>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-gray-400">Available Colors</p>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => setSelectedColor(color)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
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
