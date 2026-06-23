import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/site";
import { siteImages } from "@/lib/images";
import MobileNav from "@/components/layout/MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-apollo-dark/95 backdrop-blur-md supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="group flex min-w-0 shrink items-center">
          <Image
            src={siteImages.logo}
            alt="Apollo ATVs"
            width={140}
            height={48}
            className="h-8 w-auto max-w-[120px] object-contain sm:h-10 sm:max-w-none"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Main navigation">
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

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/become-a-dealer"
            className="hidden rounded-full bg-apollo-red px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red-600 sm:inline-flex md:px-5"
          >
            Become a Dealer
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
