import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { siteImages } from "@/lib/images";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-apollo-darker">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src={siteImages.logo}
              alt={siteConfig.name}
              width={140}
              height={48}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {siteConfig.description}
            </p>
            <Link
              href="/become-a-dealer"
              className="mt-6 inline-flex rounded-full bg-apollo-red px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red-600"
            >
              Become a Dealer
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Product Categories
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/products?category=atv", label: "ATVs" },
                { href: "/products?category=utv", label: "UTVs" },
                { href: "/products?category=dirt-bike", label: "Dirt Bikes" },
                { href: "/products?category=go-kart", label: "Go-Karts" },
                { href: "/products?category=electric", label: "Electric" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-apollo-red" />
                {siteConfig.phone}
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-apollo-red" />
                {siteConfig.email}
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-apollo-red" />
                {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center sm:mt-12 sm:flex-row sm:gap-4 sm:text-left">
          <p className="text-sm text-gray-500">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Wholesale distributor — dealer inquiries only
          </p>
        </div>
      </div>
    </footer>
  );
}
