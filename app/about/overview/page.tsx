import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  Globe,
  Users,
  BarChart3,
  Shield,
  Lightbulb,
  ShieldCheck,
  Award,
  TrendingUp,
  Target,
  Compass,
  ArrowRight,
  Landmark,
  Cpu,
  Layers,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Who We Are — Overview | Technocracy Group',
  description:
    'Technocracy Group delivers enterprise-grade AI platforms for governments and enterprises — from Chief Minister Dashboards to Predictive Analytics — across 8+ countries.',
};

export default function AboutOverviewPage() {
  const stats = [
    {
      value: '8+',
      label: 'Countries Served',
      description: 'Active deployments across Southeast Asia, Middle East, and beyond',
      icon: Globe,
    },
    {
      value: '200+',
      label: 'Engineers & Experts',
      description: 'Frontier AI researchers, systems architects, and domain advisors',
      icon: Users,
    },
    {
      value: '50+',
      label: 'Enterprise & Gov Projects',
      description: 'Command centers, national dashboards, and tier-1 banking systems',
      icon: BarChart3,
    },
    {
      value: '99.9%',
      label: 'Platform Reliability',
      description: 'Guaranteed uptime in air-gapped and sovereign cloud environments',
      icon: Shield,
    },
  ];

  const values = [
    {
      title: 'Innovation',
      badge: 'Frontier Thinking',
      description:
        'Pioneering agentic workflows, multi-modal generative intelligence, and sovereign architectures built to solve complex institutional hurdles.',
      icon: Lightbulb,
    },
    {
      title: 'Trust',
      badge: 'Zero-Trust Security',
      description:
        'Ensuring absolute data sovereignty, end-to-end model explainability, and auditable governance with zero telemetry leakage.',
      icon: ShieldCheck,
    },
    {
      title: 'Excellence',
      badge: 'Engineering Rigor',
      description:
        'Crafting resilient, sub-second latency software that performs predictably under high stress and nationwide concurrency.',
      icon: Award,
    },
    {
      title: 'Impact',
      badge: 'Measurable Outcomes',
      description:
        'Measuring our value through real-world improvements — faster public grievance resolutions, streamlined operations, and elevated decisions.',
      icon: TrendingUp,
    },
  ];

  const pillars = [
    {
      title: 'Public Sector Governance',
      description:
        'Powering Chief Minister dashboards, inter-departmental data reconciliation, and civil service command centers that connect state-wide insights to grassroots delivery.',
      icon: Landmark,
      href: '/industries/government',
    },
    {
      title: 'AI Governance, Risk & Compliance',
      description:
        'Providing real-time model inventory, drift detection, algorithmic fairness scoring, and continuous compliance for enterprise risk management.',
      icon: Layers,
      href: '/capabilities',
    },
    {
      title: 'Sovereign & Air-Gapped AI',
      description:
        'Deploying localized neural models within air-gapped on-premise infrastructure, defense installations, and sovereign clouds with zero external dependencies.',
      icon: Cpu,
      href: '/company/tech-stack',
    },
  ];

  return (
    <div className="bg-[#F8FAFF]">
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'About Us', href: '/about/overview' },
          { label: 'Overview' },
        ]}
        eyebrow="Company Overview"
        title="Who We Are"
        subtitle="Technocracy Group delivers enterprise-grade AI platforms for governments and enterprises — from Chief Minister Dashboards to Predictive Analytics — across 8+ countries."
        dark={true}
      />

      {/* Mission & Vision Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Purpose-Driven Technology"
            title="Anchored in Purpose, Built for Scale"
            subtitle="Bridging the frontier of artificial intelligence with the non-negotiable security, accountability, and governance required by high-consequence institutions."
            centered={true}
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Mission Card */}
            <div className="group relative p-8 lg:p-10 rounded-2xl bg-[#F8FAFF] border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-xs mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                  Our Mission
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">
                  Empowering Decisions with Sovereign Intelligence
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  To build trusted, sovereign, and auditable AI platforms that transform fragmented institutional data into actionable decision intelligence for governments and critical enterprises. We replace guesswork with provable, real-time clarity.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80 space-y-2.5">
                {[
                  'Zero-compromise sovereign data boundaries',
                  'Sub-second analytical intelligence for chief executives',
                  'Auditable outputs with built-in compliance checks',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative p-8 lg:p-10 rounded-2xl bg-[#F8FAFF] border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-xs mb-6">
                  <Compass className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                  Our Vision
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">
                  The Global Benchmark for Governed Autonomy
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  To define how democratic institutions and responsible enterprises adopt autonomous AI: with full transparency, provable safeguards, and zero vendor lock-in. We envision a future where public confidence and algorithmic power go hand in hand.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80 space-y-2.5">
                {[
                  'Universal standards for automated AI risk governance',
                  'Cross-border interoperability without data leakage',
                  'Human-in-the-loop oversight at national scale',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-16 lg:py-24 bg-[#E5EDFF]/50 border-b border-blue-100/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Our Global Footprint"
            title="Proven Results in High-Stakes Environments"
            subtitle="From national dashboards serving heads of state to secure banking platforms processing millions of transactions."
            centered={true}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-base font-bold text-blue-700 mt-2">
                      {stat.label}
                    </div>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Our Principles"
            title="The Values That Guide Our Code and Conduct"
            subtitle="When building systems that govern public welfare and institutional trust, every technical decision carries ethical weight."
            centered={true}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="group p-7 rounded-2xl bg-[#F8FAFF] border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:bg-white transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                      {val.badge}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Capabilities & Pillars */}
      <section className="py-16 lg:py-24 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 text-blue-700">
                Strategic Competencies
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-slate-900">
                Architected for High-Impact Delivery
              </h2>
              <p className="mt-3 text-base lg:text-lg max-w-2xl leading-relaxed text-slate-600">
                Explore the domains where Technocracy Group sets the benchmark for operational intelligence.
              </p>
            </div>
            <Link
              href="/capabilities"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors duration-300"
            >
              Explore all capabilities
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={idx}
                  href={pillar.href}
                  className="group p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-400 group-hover:text-blue-700 transition-colors duration-300">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to elevate institutional intelligence with trusted AI?"
        primaryText="Speak to our leadership"
        primaryHref="/contact"
        secondaryText="Explore our solutions"
        secondaryHref="/capabilities"
      />
    </div>
  );
}
