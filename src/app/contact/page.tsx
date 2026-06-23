import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, Handshake } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: `Contact ${siteConfig.name} for dealer inquiries, product information, and partnership opportunities.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-apollo-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-apollo-red">
            Get in Touch
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Have questions about our products or interested in becoming a dealer?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-apollo-darker py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-8">
              <div className="rounded-2xl border border-white/10 bg-apollo-dark p-6">
                <Phone className="h-6 w-6 text-apollo-red" />
                <h3 className="mt-4 font-bold text-white">Phone</h3>
                <p className="mt-2 text-sm text-gray-400">{siteConfig.phone}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-apollo-dark p-6">
                <Mail className="h-6 w-6 text-apollo-red" />
                <h3 className="mt-4 font-bold text-white">Email</h3>
                <p className="mt-2 text-sm text-gray-400">{siteConfig.email}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-apollo-dark p-6">
                <MapPin className="h-6 w-6 text-apollo-red" />
                <h3 className="mt-4 font-bold text-white">Location</h3>
                <p className="mt-2 text-sm text-gray-400">{siteConfig.address}</p>
              </div>
              <Link
                href="/become-a-dealer"
                className="flex items-center gap-3 rounded-2xl border border-apollo-red/30 bg-apollo-red/10 p-6 transition-colors hover:bg-apollo-red/20"
              >
                <Handshake className="h-6 w-6 text-apollo-red" />
                <div>
                  <p className="font-bold text-white">Become a Dealer</p>
                  <p className="text-sm text-gray-400">Apply for dealership</p>
                </div>
              </Link>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-apollo-dark p-8">
                <h2 className="text-xl font-bold text-white">Send a Message</h2>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
