import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  ctaText,
  ctaHref,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 lg:mb-14 ${centered ? 'text-center' : 'flex flex-col md:flex-row md:items-end md:justify-between gap-4'}`}>
      <div className={centered ? 'max-w-3xl mx-auto' : ''}>
        {eyebrow && (
          <span className="inline-block px-3 py-1 rounded-full border border-blue-500 text-xs font-semibold tracking-wider text-blue-500 bg-blue-100/10 uppercase mb-6">
            {eyebrow}
          </span>
        )}
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight ${light ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-3 text-base lg:text-lg max-w-2xl leading-relaxed ${light ? 'text-slate-300' : 'text-slate-500'}`}>
            {subtitle}
          </p>
        )}
      </div>
      {ctaText && ctaHref && !centered && (
        <Link
          href={ctaHref}
          className={`group inline-flex items-center gap-1.5 text-sm font-semibold shrink-0 transition-colors duration-300 ${light ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-700'}`}
        >
          {ctaText}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
