"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
        <h3 className="mt-4 text-xl font-bold text-white">Message Sent!</h3>
        <p className="mt-2 text-gray-400">
          We&apos;ve received your message and will get back to you shortly.
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
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
            Name *
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
            Email *
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@email.com" />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-300">
          Subject *
        </label>
        <input id="subject" name="subject" required className={inputClass} placeholder="How can we help?" />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClass}
          placeholder="Your message..."
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-apollo-red px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-red-600"
      >
        Send Message
      </button>
    </form>
  );
}
