"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { categoryLabels, engineSizes, type ProductCategory } from "@/data/products";

type ProductFiltersProps = {
  categoryFilter?: ProductCategory;
  engineFilter?: string;
};

export default function ProductFilters({
  categoryFilter,
  engineFilter,
}: ProductFiltersProps) {
  const categories = Object.keys(categoryLabels) as ProductCategory[];

  return (
    <>
      {/* Mobile: horizontal scroll chips */}
      <div className="lg:hidden space-y-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Category
          </p>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-hide">
            <FilterChip
              href="/products"
              active={!categoryFilter}
              label="All"
            />
            {categories.map((cat) => (
              <FilterChip
                key={cat}
                href={`/products?category=${cat}`}
                active={categoryFilter === cat}
                label={categoryLabels[cat]}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Engine Size
          </p>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-hide">
            {engineSizes.map((size) => (
              <FilterChip
                key={size}
                href={`/products?engine=${size}${categoryFilter ? `&category=${categoryFilter}` : ""}`}
                active={engineFilter === size}
                label={size}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: sidebar */}
      <aside className="hidden lg:block lg:w-64 shrink-0">
        <div className="sticky top-24 space-y-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Categories
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <SidebarLink href="/products" active={!categoryFilter}>
                  All Products
                </SidebarLink>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <SidebarLink
                    href={`/products?category=${cat}`}
                    active={categoryFilter === cat}
                  >
                    {categoryLabels[cat]}
                  </SidebarLink>
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
                  <SidebarLink
                    href={`/products?engine=${size}${categoryFilter ? `&category=${categoryFilter}` : ""}`}
                    active={engineFilter === size}
                  >
                    {size}
                  </SidebarLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}

function FilterChip({
  href,
  active,
  label,
}: {
  href: string;
  active: boolean;
  label: string;
}) {
  return (
    <Link
      href={href}
      className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
        active
          ? "border-apollo-red bg-apollo-red/15 text-apollo-red"
          : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}

function SidebarLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
        active
          ? "bg-apollo-red/10 font-medium text-apollo-red"
          : "text-gray-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
