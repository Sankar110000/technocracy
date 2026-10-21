import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, BookOpen, CheckCircle2, ShieldCheck, Cpu, Landmark } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import { insightsList } from '@/sample/insightsData';

export const metadata = {
  title: 'Insights & Research — Technocracy Group',
  description: 'Research, perspectives and analysis from the Technocracy team on AI governance, sovereign architecture, and enterprise deployments.',
};

export default function InsightsPage() {
  const [featured, ...otherInsights] = insightsList;

  return (
    <div className="bg-[#F8FAFF] min-h-screen">
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Resources', href: '/resources/insights' },
          { label: 'Insights' }
        ]}
        eyebrow="THOUGHT LEADERSHIP & RESEARCH"
        title="Insights"
        subtitle="Research, perspectives and analysis from the Technocracy team."
        dark={true}
      />

      {/* Grid of Insight Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="pt-12">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">All Research & Analysis</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">Latest Publications</h2>
            <p className="text-slate-500 mt-2 max-w-2xl">
              Practical viewpoints from enterprise architects and engineers delivering mission-critical AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insightsList.map((insight, idx) => (
              <article
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-7 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {insight.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-500">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      {insight.author}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-snug group">
                    <Link href={insight.route} className="hover:text-blue-700 transition-colors duration-200">
                      {insight.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm font-medium text-blue-700 leading-relaxed">
                    {insight.tagline}
                  </p>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {insight.overview}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={insight.route}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors duration-200"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  {insight.keyPoints && (
                    <span className="text-xs text-slate-400">
                      {insight.keyPoints.length} key takeaways
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
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
