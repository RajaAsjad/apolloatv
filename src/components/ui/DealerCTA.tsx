import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";

type DealerCTAProps = {
  variant?: "banner" | "inline" | "compact";
  title?: string;
  description?: string;
};

export default function DealerCTA({
  variant = "banner",
  title = "Ready to Partner with Apollo?",
  description = "Join our nationwide dealer network and access premium powersports inventory, competitive pricing, and dedicated support.",
}: DealerCTAProps) {
  if (variant === "compact") {
    return (
      <Link
        href="/become-a-dealer"
        className="group inline-flex items-center gap-2 rounded-full bg-apollo-red px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red-600"
      >
        <Handshake className="h-4 w-4" />
        Become a Dealer
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    );
  }

  if (variant === "inline") {
    return (
      <div className="rounded-2xl border border-apollo-red/30 bg-gradient-to-r from-apollo-red/10 to-transparent p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="mt-2 max-w-xl text-sm text-gray-400">{description}</p>
          </div>
          <Link
            href="/become-a-dealer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-apollo-red px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-red-600"
          >
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-apollo-red via-red-700 to-apollo-dark py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Handshake className="mx-auto h-12 w-12 text-white/80" />
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/become-a-dealer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-apollo-red transition-all hover:bg-gray-100 hover:shadow-xl"
          >
            Become a Dealer
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
