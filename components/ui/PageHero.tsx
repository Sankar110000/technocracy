import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  breadcrumbs?: Breadcrumb[];
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  subtitle,
  dark = true,
}: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden ${dark ? 'bg-[#0B1224]' : 'bg-[#E5EDFF]'}`}>
      {/* Gradient overlay */}
      {dark && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.15)_0%,transparent_60%)]" />
      )}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-1 text-sm">
              <li>
                <Link href="/" className={`transition-colors duration-300 ${dark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-blue-600'}`}>
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="flex items-center gap-1">
                  <ChevronRight className={`w-3.5 h-3.5 ${dark ? 'text-slate-600' : 'text-slate-400'}`} />
                  {crumb.href ? (
                    <Link href={crumb.href} className={`transition-colors duration-300 ${dark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-blue-600'}`}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={dark ? 'text-blue-400 font-medium' : 'text-blue-600 font-medium'}>
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <span className={`inline-block text-xs font-bold uppercase tracking-widest mb-4 ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
            {eyebrow}
          </span>
        )}

        {/* Title */}
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl ${dark ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className={`mt-4 text-base lg:text-lg max-w-2xl leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
