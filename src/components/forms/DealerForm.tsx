"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function DealerForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
        <h3 className="mt-4 text-xl font-bold text-white">Application Received!</h3>
        <p className="mt-2 text-gray-400">
          Thank you for your interest in becoming an Apollo dealer. Our team will
          review your application and contact you within 2–3 business days.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-apollo-red focus:outline-none focus:ring-1 focus:ring-apollo-red";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="businessName" className="mb-2 block text-sm font-medium text-gray-300">
            Business Name *
          </label>
          <input id="businessName" name="businessName" required className={inputClass} placeholder="Your dealership name" />
        </div>
        <div>
          <label htmlFor="contactName" className="mb-2 block text-sm font-medium text-gray-300">
            Contact Name *
          </label>
          <input id="contactName" name="contactName" required className={inputClass} placeholder="Full name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
            Email *
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@dealership.com" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-300">
            Phone *
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="(555) 123-4567" />
        </div>
        <div>
          <label htmlFor="city" className="mb-2 block text-sm font-medium text-gray-300">
            City *
          </label>
          <input id="city" name="city" required className={inputClass} placeholder="City" />
        </div>
        <div>
          <label htmlFor="state" className="mb-2 block text-sm font-medium text-gray-300">
            State *
          </label>
          <input id="state" name="state" required className={inputClass} placeholder="State" />
        </div>
      </div>

      <div>
        <label htmlFor="businessType" className="mb-2 block text-sm font-medium text-gray-300">
          Business Type *
        </label>
        <select id="businessType" name="businessType" required className={inputClass}>
          <option value="">Select type</option>
          <option value="powersports-dealer">Powersports Dealer</option>
          <option value="auto-dealer">Auto Dealer</option>
          <option value="repair-shop">Repair Shop</option>
          <option value="new-business">New Business</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="interest" className="mb-2 block text-sm font-medium text-gray-300">
          Products of Interest
        </label>
        <select id="interest" name="interest" className={inputClass}>
          <option value="">Select category</option>
          <option value="atv">ATVs</option>
          <option value="utv">UTVs</option>
          <option value="dirt-bike">Dirt Bikes</option>
          <option value="go-kart">Go-Karts</option>
          <option value="electric">Electric</option>
          <option value="full-line">Full Product Line</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
          Tell Us About Your Business
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Years in business, current brands carried, showroom size, etc."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-apollo-red py-4 text-base font-bold text-white transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/25 sm:w-auto sm:px-12"
      >
        Submit Dealer Application
      </button>
    </form>
  );
}
