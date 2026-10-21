import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionHeader from '@/components/ui/SectionHeader';
import { industriesData } from '@/sample/industriesData';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Check,
} from 'lucide-react';
import Image from 'next/image';
import HowWeDeliverSection from '@/components/ui/sections/HowWeDeliver';

export function generateStaticParams() {
  return industriesData.map((item) => ({
    slug: item.route.replace('/industries/', ''),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData.find(
    (item) =>
      item.route === `/industries/${slug}` ||
      item.route.endsWith(`/${slug}`) ||
      item.route.replace('/industries/', '') === slug
  );

  if (!industry) {
    return {
      title: 'Industry Not Found | Technocracy Group',
    };
  }

  return {
    title: `${industry.sector} AI Solutions | Technocracy Group`,
    description: industry.headline,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industriesData.find(
    (item) =>
      item.route === `/industries/${slug}` ||
      item.route.endsWith(`/${slug}`) ||
      item.route.replace('/industries/', '') === slug
  );

  if (!industry) {
    notFound();
  }

  // Get related industries (excluding current)
  const relatedIndustries = industriesData
    .filter((item) => item.route !== industry.route)
    .slice(0, 3);

  return (
    <div className="bg-[#F8FAFF] scroll-smooth">
      {/* ═══════════════════════ PAGE HERO ═══════════════════════ */}
      <PageHero
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: industry.sector },
        ]}
        eyebrow="Industry Focus"
        title={industry.sector}
        subtitle={`Enterprise AI architectures engineered for ${industry.sector} — balancing automated intelligence with strict compliance and operational integrity.`}
        dark={true}
      />

      {/* ═══════════════════════ HEADLINE & METRIC CALLOUT ═══════════════════════ */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Metric Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Impact Metric: {industry.metric}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              Audit-Ready & Sovereign
            </span>
          </div>

          {/* Large Quote-Style Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch my-8">

            {/* LEFT COLUMN: Headline, Strategic Advantages, & CTAs (7 columns) */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                {/* Headline / Quote */}
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug tracking-tight max-w-2xl">
                  &ldquo;{industry.headline}&rdquo;
                </blockquote>

                {/* Key Capabilities / Strategic Advantages */}
                <div className="mt-8">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                    Strategic Advantages
                  </h3>

                  {/* Stacked List Container with Dividers */}
                  <div className="divide-y divide-slate-200/60 py-1">
                    {industry.keyCapabilities.map((capability: string, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 py-3.5 first:pt-2 last:pb-2"
                      >
                        {/* Blue Soft Squircle Badge */}
                        <div className="w-7 h-7 rounded-full border border-blue-900/30 bg-blue-50/50 flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4 text-blue-900 stroke-[2.5]" />
                        </div>

                        {/* Text Label */}
                        <p className="text-sm sm:text-[15px] font-semibold text-slate-900 leading-normal">
                          {capability}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action CTAs pinned cleanly at the bottom */}
              <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-slate-100">
                <Link
                  href={industry.actions?.requestDemo || '/contact'}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-sm"
                >
                  <span>Schedule a Sector Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={industry.actions?.viewAllIndustries || '/industries'}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 hover:border-slate-400 text-slate-700 rounded-xl font-semibold text-sm transition-all duration-300 bg-white"
                >
                  <span>View All Industries</span>
                </Link>
              </div>

            </div>

            {/* RIGHT COLUMN: Poster Image matching left column height exactly (5 columns) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end h-full min-h-[420px] sm:min-h-[480px] lg:min-h-full">
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-slate-100">
                <Image
                  src={industry.mediaAssets?.posterImage || "/services/strategy-advisory.png"}
                  alt={industry.headline || "Industry Overview"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  priority
                />

                {/* Subtle bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════ WHAT THIS COVERS (4-ITEM GRID) ═══════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#F8FAFF] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Capability Scope"
            title="What This Covers"
            subtitle={`Targeted solutions and functional workflows built specifically to address the operational demands of ${industry.sector}.`}
            centered={true}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {industry.whatThisCovers.map((item, idx) => (
              <div
                key={idx}
                className="group p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-bold text-sm flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Feature 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-slate-900 group-hover:text-blue-700 transition-colors duration-300 leading-snug">
                    {item}
                  </h4>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                  <span>Production Ready</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ HOW WE DELIVER (3 STAGES) ═══════════════════════ */}
      <HowWeDeliverSection industry={industry}/>

      {/* ═══════════════════════ RELATED INDUSTRIES ═══════════════════════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Explore Further"
            title="Other Industries We Serve"
            subtitle="Discover how Technocracy Group delivers sovereign AI across government, enterprise, and social infrastructure."
            ctaText="View all industries"
            ctaHref="/industries"
            centered={false}
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {relatedIndustries.map((other) => (
              <Link
                key={other.route}
                href={other.route}
                className="group p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Metric Badge */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-xs shrink-0">
                      {React.isValidElement(other.icon)
                        ? React.cloneElement(
                          other.icon as React.ReactElement<{ className?: string }>,
                          { className: 'w-6 h-6' }
                        )
                        : other.icon}
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 shrink-0">
                      {other.metric}
                    </span>
                  </div>

                  {/* Sector Name */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                    {other.sector}
                  </h3>

                  {/* Metric Subtitle */}
                  <p className="text-xs font-bold text-blue-600 tracking-wide uppercase mt-1">
                    Impact: {other.metric}
                  </p>

                  {/* Headline Excerpt */}
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    &ldquo;{other.headline}&rdquo;
                  </p>

                  {/* Key Capabilities Preview */}
                  {other.keyCapabilities && (
                    <ul className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                      {other.keyCapabilities.slice(0, 2).map((cap, capIdx) => (
                        <li
                          key={capIdx}
                          className="flex items-start gap-2 text-xs text-slate-600"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-blue-700 group-hover:text-blue-800 transition-colors duration-300">
                  <span>Explore {other.sector}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA BANNER ═══════════════════════ */}
      <CTABanner
        heading={`Accelerate your ${industry.sector} operations with enterprise AI.`}
        primaryText="Talk to an expert"
        primaryHref="/contact"
        secondaryText="Book a demo"
        secondaryHref="/book-a-demo"
      />
    </div>
  );
}
