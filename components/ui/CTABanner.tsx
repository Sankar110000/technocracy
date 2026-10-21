import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  heading?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  heading = "Building AI for a department or an enterprise? Start with a conversation.",
  primaryText = "Talk to an expert",
  primaryHref = "/contact",
  secondaryText = "Book a demo",
  secondaryHref = "/book-a-demo",
}: CTABannerProps) {
  return (
    <section className="relative bg-[#0B1224] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.12)_0%,transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
          {heading}
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            href={primaryHref}
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all duration-300"
          >
            {primaryText}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:border-white/60 text-white rounded-xl font-semibold text-sm transition-all duration-300"
          >
            {secondaryText}
          </Link>
        </div>
      </div>
    </section>
  );
}
