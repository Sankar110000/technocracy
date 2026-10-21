import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionHeader from '@/components/ui/SectionHeader';
import { industriesData } from '@/sample/industriesData';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Layers,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries — Purpose-Built AI for Critical Sectors | Technocracy Group',
  description:
    'AI solutions tailored for the sectors that need them most — NBFC & Banking, Energy, Police & Security, Education, Healthcare, and Government.',
};

export default function IndustriesIndexPage() {
  const deliveryFramework = [
    {
      stage: 1,
      title: 'AI Readiness Assessment',
      description:
        'We run our proprietary 48-point readiness framework across your data quality, infrastructure, and governance dimensions before writing a line of code.',
      icon: ShieldCheck,
    },
    {
      stage: 2,
      title: 'Build & Integrate',
      description:
        'Strategy, architecture, development, and deployment under one roof — with data residency options for on-premise, government cloud, or air-gapped environments.',
      icon: Cpu,
    },
    {
      stage: 3,
      title: 'Deploy & Scale',
      description:
        'Your platform goes live on Kubernetes and multi-cloud infrastructure, scaling from district-level dashboards to national-scale systems.',
      icon: Layers,
    },
  ];

  return (
    <div className="bg-[#F8FAFF]">
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <PageHero
        breadcrumbs={[{ label: 'Industries' }]}
        eyebrow="Sectors We Serve"
        title="Industries"
        subtitle="AI solutions tailored for the sectors that need them most."
        dark={true}
      />

      {/* ═══════════════════════ INDUSTRIES GRID ═══════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Sovereign AI by Industry"
            title="Tailored Solutions for Regulated and Critical Sectors"
            subtitle="Every industry has unique data constraints, audit requirements, and operational workflows. We build systems designed around those realities from day one."
            centered={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {industriesData.map((industry) => (
              <Link
                key={industry.route}
                href={industry.route}
                className="group p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Metric Badge */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-xs shrink-0">
                      {React.isValidElement(industry.icon)
                        ? React.cloneElement(
                            industry.icon as React.ReactElement<{ className?: string }>,
                            { className: 'w-6 h-6' }
                          )
                        : industry.icon}
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 shrink-0">
                      {industry.metric}
                    </span>
                  </div>

                  {/* Sector Name */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                    {industry.sector}
                  </h3>

                  {/* Metric Subtitle */}
                  <p className="text-xs font-bold text-blue-600 tracking-wide uppercase mt-1">
                    Impact: {industry.metric}
                  </p>

                  {/* Headline Excerpt */}
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    &ldquo;{industry.headline}&rdquo;
                  </p>

                  {/* Key Capabilities Preview */}
                  {industry.keyCapabilities && (
                    <ul className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                      {industry.keyCapabilities.slice(0, 2).map((cap, capIdx) => (
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
                  <span>Explore {industry.sector}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ DELIVERY FRAMEWORK ═══════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#E5EDFF]/50 border-t border-b border-blue-100/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Our Delivery Framework"
            title="How We Deploy Enterprise AI Across Every Sector"
            subtitle="Regardless of industry, every deployment executes through our verified 3-stage delivery lifecycle to guarantee compliance, air-gapped readiness, and multi-cloud resilience."
            centered={true}
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {deliveryFramework.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.stage}
                  className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
                        Stage 0{stage.stage}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {stage.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA BANNER ═══════════════════════ */}
      <CTABanner
        heading="Building AI for a department or an enterprise? Start with a conversation."
        primaryText="Talk to an expert"
        primaryHref="/contact"
        secondaryText="Book a demo"
        secondaryHref="/book-a-demo"
      />
    </div>
  );
}
