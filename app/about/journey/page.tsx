import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  Flag,
  Landmark,
  Globe,
  ShieldCheck,
  Building2,
  Layers,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Journey — History & Milestones | Technocracy Group',
  description:
    'Explore the milestones of Technocracy Group: from foundational public sector engineering in 2019 to sovereign AI and agentic platforms deployed across 8+ countries.',
};

export default function AboutJourneyPage() {
  const milestones = [
    {
      year: '2019',
      badge: 'Inception',
      title: 'Founded',
      headline: 'A Mandate for Sovereign Intelligence',
      description:
        'Technocracy Group was founded with a singular conviction: as algorithmic systems increasingly underpin public life, democratic institutions require sovereign, auditable data architectures engineered specifically for public good and high-integrity decision making.',
      achievements: [
        'Core engineering and research lab established',
        'Initiated foundational research into public sector analytical pipelines',
        'Architected zero-compromise sovereign data isolation protocols',
      ],
      icon: Flag,
    },
    {
      year: '2020',
      badge: 'Public Sector Debut',
      title: 'First Government Project',
      headline: 'State-Scale Chief Minister Dashboard',
      description:
        'Delivered our flagship state-level unified command center and Chief Minister dashboard, unifying 30+ disparate departmental data silos into sub-second operational monitoring during a critical national period.',
      achievements: [
        'Real-time inter-departmental data reconciliation across 30+ ministries',
        'Integrated live citizen grievance tracking and resolution feedback loops',
        'Established 99.9% uptime baseline under extreme public crisis loads',
      ],
      icon: Landmark,
    },
    {
      year: '2021',
      badge: 'Global Expansion',
      title: 'Expanded to 3 Countries',
      headline: 'International Sovereign Architecture',
      description:
        'Scaled our sovereign architecture beyond national borders, establishing operational bases and deployments in Southeast Asia and the Middle East with localized data residency compliance.',
      achievements: [
        'Deployed multi-tenant sovereign clouds adhering to strict regional laws',
        'Launched cross-border data isolation frameworks with zero external telemetry',
        'Awarded international public-sector digital modernization contracts',
      ],
      icon: Globe,
    },
    {
      year: '2022',
      badge: 'Platform Innovation',
      title: 'AI GRC Platform Launch',
      headline: 'Continuous Governance, Risk & Compliance',
      description:
        'Released our enterprise-grade AI GRC suite, enabling organizations to continuously inventory models, benchmark algorithmic bias, and maintain automated regulatory compliance trails across high-risk sectors.',
      achievements: [
        'Automated real-time model drift and concept decay detection',
        'Deterministic explainability pipelines for financial and medical models',
        'One-click audit trail exports for international regulatory compliance',
      ],
      icon: ShieldCheck,
    },
    {
      year: '2023',
      badge: 'Enterprise Growth',
      title: '50+ Enterprise Clients',
      headline: 'Scaling Across High-Consequence Sectors',
      description:
        'Crossed 50+ enterprise and public sector deployments across banking, power utilities, policing, healthcare, and education with a verified 99.9% platform availability track record.',
      achievements: [
        'Integrated with tier-1 banking fraud prevention and risk engines',
        'Expanded team to 200+ specialized distributed systems and AI engineers',
        'Pioneered air-gapped on-premise inference clusters for defense security',
      ],
      icon: Building2,
    },
    {
      year: '2024',
      badge: 'Global Footprint',
      title: '8+ Countries',
      headline: 'Pan-Regional Sovereign Intelligence',
      description:
        'Deepened presence across 8+ countries with sovereign installations serving national ministries, regional defense authorities, and multi-tenant enterprise conglomerates.',
      achievements: [
        'Standardized sovereign deployments across diverse regulatory jurisdictions',
        'Launched multi-modal analytics for state-wide infrastructure surveillance',
        'Ranked among fastest-growing high-integrity governance technology firms',
      ],
      icon: Layers,
    },
    {
      year: '2025',
      badge: 'Frontier AI',
      title: 'Agentic AI Launch',
      headline: 'Next-Generation Autonomous Multi-Agent Systems',
      description:
        'Unveiled our frontier Agentic AI platform, introducing verified multi-agent collaboration frameworks that execute complex workflows with mathematical explainability and strict human oversight bounds.',
      achievements: [
        'Autonomous agent swarms for inter-ministerial workflow coordination',
        'Formal verification engines guaranteeing safe agent execution bounds',
        'Integration with sovereign LLMs running fully offline and air-gapped',
      ],
      icon: Cpu,
    },
  ];

  return (
    <div className="bg-[#F8FAFF]">
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'About Us', href: '/about/overview' },
          { label: 'Our Journey' },
        ]}
        eyebrow="History & Milestones"
        title="Our Journey"
        subtitle="From foundational public sector data engineering to delivering autonomous AI governance platforms across 8+ countries."
        dark={true}
      />

      {/* Overview Intro Banner */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                Continuous Evolution
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Seven Years of Relentless Mission-Critical Engineering
              </h2>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                Since 2019, Technocracy Group has evolved from a boutique public-sector data team into an international provider of sovereign AI platforms. Here is how our milestones shaped the systems running today.
              </p>
            </div>
            <div className="flex md:justify-end gap-3">
              <Link
                href="/about/overview"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-700 hover:border-blue-700 hover:text-blue-700 bg-white transition-all duration-300"
              >
                About Overview
              </Link>
              <Link
                href="/about/leadership"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-700 text-white hover:bg-blue-800 transition-all duration-300 shadow-sm"
              >
                Meet Leadership
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Milestones"
            title="The Chronology of Our Growth"
            subtitle="Explore how our technology, footprint, and impact expanded year over year."
            centered={true}
          />

          <div className="relative mt-16 max-w-5xl mx-auto">
            {/* Center Vertical Line (desktop) / Left line (mobile) */}
            <div className="absolute top-4 bottom-4 left-6 lg:left-1/2 -ml-px w-0.5 bg-gradient-to-b from-blue-700 via-blue-500 to-blue-300" />

            <div className="space-y-12 lg:space-y-16">
              {milestones.map((milestone, idx) => {
                const Icon = milestone.icon;
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col lg:flex-row items-start ${
                      isEven ? 'lg:flex-row-reverse' : ''
                    } gap-8 lg:gap-12 pl-14 lg:pl-0`}
                  >
                    {/* Node marker */}
                    <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-1 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-2xl bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-700/25 border-4 border-[#F8FAFF] z-10 transition-transform duration-300 hover:scale-110">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="w-full lg:w-[calc(50%-3rem)]">
                      <div className="group p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <span className="text-2xl font-black text-blue-700 font-mono tracking-tight">
                            {milestone.year}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs border border-blue-100">
                            {milestone.badge}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        <p className="text-xs font-semibold text-blue-600 mt-1 mb-3">
                          {milestone.headline}
                        </p>

                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                          {milestone.description}
                        </p>

                        {/* Bullet Highlights */}
                        <div className="pt-4 border-t border-slate-100 space-y-2">
                          {milestone.achievements.map((item, aIdx) => (
                            <div
                              key={aIdx}
                              className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed"
                            >
                              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Placeholder spacer for opposite side on desktop */}
                    <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* The Next Horizon (2026+) */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="The Future"
            title="Looking Ahead: The Next Horizon"
            subtitle="Where Technocracy Group is investing for the next decade of sovereign intelligence."
            centered={true}
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'National Sovereign Model Federations',
                desc: 'Interconnecting state and national neural models while strictly maintaining cryptographically sealed data silos.',
                tag: 'Research Frontier',
              },
              {
                title: 'Deterministic Multi-Agent Swarms',
                desc: 'Advancing beyond statistical approximations toward formally verified agent behavior in high-consequence civil workflows.',
                tag: 'Next-Gen Platform',
              },
              {
                title: 'Civil Resilience Infrastructure',
                desc: 'Deploying edge-native AI units capable of autonomous disaster response and emergency relief coordination with zero grid connectivity.',
                tag: 'Public Infrastructure',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-[#F8FAFF] border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:bg-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Be part of our next milestone. Build mission-critical AI with us."
        primaryText="Talk to our team"
        primaryHref="/contact"
        secondaryText="Explore careers"
        secondaryHref="/careers"
      />
    </div>
  );
}
