import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CircleCheckBig, Calendar, User, BookOpen, Check } from 'lucide-react';
import CTABanner from '@/components/ui/CTABanner';
import { insightsList } from '@/sample/insightsData';

function getSlugFromRoute(route: string): string {
  const parts = route.split('/').filter(Boolean);
  return parts[parts.length - 1] || '';
}

export async function generateStaticParams() {
  return insightsList.map((insight) => ({
    slug: getSlugFromRoute(insight.route),
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = insightsList.find(
    (i) => getSlugFromRoute(i.route) === slug || i.route.endsWith(`/${slug}`)
  );

  if (!insight) {
    return { title: 'Insight Not Found | Technocracy Group' };
  }

  return {
    title: `${insight.title} — Insights | Technocracy Group`,
    description: insight.tagline || insight.overview,
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = insightsList.find(
    (i) => getSlugFromRoute(i.route) === slug || i.route.endsWith(`/${slug}`)
  );

  if (!insight) notFound();

  // Other insights for "related" section
  const otherInsights = insightsList.filter((i) => i.route !== insight.route).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F8FAFF]">

      {/* ═══════════════════════ TOP NAV BAR (breadcrumb strip) ═══════════════════════ */}
      <div className="bg-white border-b border-slate-200/80 pt-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center gap-3 text-sm">
          <Link href="/" className="text-slate-400 hover:text-blue-600 transition-colors duration-200">Home</Link>
          <span className="text-slate-300">/</span>
          <Link href="/resources/insights" className="text-slate-400 hover:text-blue-600 transition-colors duration-200">Insights</Link>
          <span className="text-slate-300">/</span>
          <span className="text-blue-600 font-medium line-clamp-1">{insight.title}</span>
        </div>
      </div>

      {/* ═══════════════════════ MAIN CONTENT AREA ═══════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ─── LEFT SIDEBAR ─── */}
          <aside className="lg:col-span-3 lg:sticky lg:top-28">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">

              {/* "AT A GLANCE" header */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-100">
                <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                <span className="text-[11px] font-black uppercase tracking-widest text-blue-600">
                  At a Glance
                </span>
              </div>

              <div className="divide-y divide-slate-100">

                {/* Date */}
                <div className="px-5 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                    Published
                  </p>
                  <p className="text-sm font-medium text-slate-800 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    {insight.date}
                  </p>
                </div>

                {/* Author */}
                <div className="px-5 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                    Author
                  </p>
                  <p className="text-sm font-medium text-slate-800 flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    {insight.author}
                  </p>
                </div>

                {/* Category / Tagline */}
                <div className="px-5 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                    Category
                  </p>
                  <p className="text-sm font-medium text-slate-800 leading-relaxed">
                    {insight.tagline}
                  </p>
                </div>

                {/* Tags from keyPoints topics */}
                <div className="px-5 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                    Topics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['AI Governance', 'Enterprise AI', 'Technocracy Research'].map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-block text-xs font-medium px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read time */}
                <div className="px-5 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                    Read Time
                  </p>
                  <p className="text-sm font-medium text-slate-800 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    {insight.keyPoints ? `${Math.ceil(insight.keyPoints.length * 1.5)} min read` : '4 min read'}
                  </p>
                </div>

              </div>

              {/* CTA inside card */}
              <div className="px-5 py-4 bg-[#F8FAFF] border-t border-slate-100">
                <Link
                  href={insight.actions?.talkToExpert || '/contact'}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all duration-300"
                >
                  Talk to an expert
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>

          {/* ─── RIGHT MAIN CONTENT ─── */}
          <main className="lg:col-span-9">

            {/* Back link */}
            <Link
              href="/resources/insights"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 text-sm font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-600 leading-tight tracking-tight mb-6">
              {insight.title}
            </h1>

            {/* Tagline / lead */}
            <p className="text-lg sm:text-xl font-semibold text-blue-500 leading-relaxed mb-6 max-w-3xl">
              {insight.tagline}
            </p>

            {/* Overview text */}
            <p className="text-base text-slate-500 leading-relaxed max-w-3xl mb-10">
              {insight.overview}
            </p>

            {/* Key Points highlighted card */}
            {insight.keyPoints && insight.keyPoints.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200/80 p-7 sm:p-9 shadow-xs mb-10">
                <h2 className="text-lg font-bold text-slate-600 mb-6">
                  Key Takeaways
                </h2>
                <ul className="space-y-5">
                  {insight.keyPoints.map((point: string, idx: number) => {
                    // Split into: first sentence bold (the main point) and rest lighter
                    const dotIdx = point.indexOf('.');
                    const main = dotIdx > -1 ? point.slice(0, dotIdx + 1) : point;
                    const rest = dotIdx > -1 && dotIdx < point.length - 1 ? point.slice(dotIdx + 1).trim() : '';

                    return (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full border-2 border-blue-200 bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-blue-600" />
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">
                          <span className="font-semibold text-slate-600">{main}</span>
                          {rest && <span className="text-slate-500"> {rest}</span>}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Explore CTA strip */}
            <div className="flex flex-wrap items-center gap-4 pt-4 pb-6 ">
              <Link
                href={insight.actions?.talkToExpert || '/contact'}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-sm"
              >
                Talk to an expert
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={'/capabilities'}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 rounded-xl font-semibold text-sm transition-all duration-300"
              >
                Explore capabilities
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* ─── MORE INSIGHTS ─── */}
            {otherInsights.length > 0 && (
              <div className="pt-10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-700">More Insights</h2>
                  <Link
                    href="/resources/insights"
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    View all
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherInsights.map((other, idx) => (
                    <Link
                      key={idx}
                      href={other.route}
                      className="group bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col"
                    >
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        {other.date}
                      </div>
                      <h3 className="text-base font-bold text-slate-700 group-hover:text-blue-600 transition-colors duration-200 leading-snug mb-2">
                        {other.title}
                      </h3>
                      <p className="text-xs text-blue-700 font-medium mb-3">{other.tagline}</p>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 flex-1">
                        {other.overview}
                      </p>
                      <div className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 mt-4 pt-3 border-t border-slate-100">
                        Read more
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* ═══════════════════════ CTA BANNER ═══════════════════════ */}
      <CTABanner
        heading="Looking for custom research or enterprise AI guidance?"
        primaryText="Talk to an expert"
        primaryHref="/contact"
        secondaryText="Book a demo"
        secondaryHref="/book-a-demo"
      />
    </div>
  );
}
