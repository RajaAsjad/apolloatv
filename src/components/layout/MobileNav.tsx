"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = open ? (
    <div className="fixed inset-0 z-[9999] lg:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-label="Close menu"
        onClick={() => setOpen(false)}
      />
      <div className="absolute right-0 top-0 flex h-full w-[min(100vw,20rem)] flex-col bg-apollo-dark shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 pt-[max(1rem,env(safe-area-inset-top))]">
          <span className="text-sm font-semibold text-white">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-white hover:bg-white/5"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav
          className="flex flex-1 flex-col gap-1 overflow-y-auto p-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/become-a-dealer"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-apollo-red px-4 py-3.5 text-center text-base font-semibold text-white"
          >
            Become a Dealer
          </Link>
        </nav>
      </div>
    </div>
  ) : null;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white hover:bg-white/5"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <Menu className="h-6 w-6" />
      </button>

      {mounted && overlay ? createPortal(overlay, document.body) : null}
    </div>
  );
}
