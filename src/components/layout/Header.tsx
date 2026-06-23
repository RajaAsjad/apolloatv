import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { navLinks } from "@/data/site";
import { siteImages } from "@/lib/images";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-apollo-dark/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src={siteImages.logo}
            alt="Apollo ATVs"
            width={140}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/become-a-dealer"
            className="hidden rounded-full bg-apollo-red px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/25 sm:inline-flex"
          >
            Become a Dealer
          </Link>

          <details className="relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-center rounded-lg border border-white/10 p-2 text-white hover:bg-white/5">
              <Menu className="h-6 w-6 open:hidden" />
              <span className="sr-only">Open menu</span>
            </summary>
            <div className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-white/10 bg-apollo-dark p-4 shadow-2xl">
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/become-a-dealer"
                  className="mt-2 rounded-lg bg-apollo-red px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Become a Dealer
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
