import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  Compass,
  Target,
  Shield,
  Eye,
  Sparkles,
  HeartHandshake,
  Cpu,
  TrendingUp,
  Scale,
  Lock,
  FileCheck2,
  Users,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Purpose — Vision, Mission & Values | Technocracy Group',
  description:
    'Discover Technocracy Group’s core purpose: advancing sovereign, accountable, and citizen-first artificial intelligence for high-consequence public and enterprise governance.',
};

export default function AboutPurposePage() {
  const visionPillars = [
    {
      title: 'Sovereign AI Independence',
      description:
        'Ensuring governments and enterprises retain full ownership of their models, algorithms, and training datasets without geopolitical risk or external platform lock-in.',
      icon: Shield,
    },
    {
      title: 'Provable, Auditable Reasoning',
      description:
        'Rejecting black-box ambiguity. Every calculation, projection, and recommendation is backed by a deterministic, inspectable audit trail.',
      icon: Eye,
    },
    {
      title: 'Citizen-Centric Public Good',
      description:
        'Channeling cutting-edge AI breakthroughs into tangible social outcomes: faster grievance redressal, optimized welfare distribution, and transparent administration.',
      icon: Users,
    },
  ];

  const missionCommitments = [
    {
      title: 'Operational Precision',
      subtitle: 'Sub-second real-time responsiveness',
      description:
        'Eliminating bureaucratic silos by unifying data streams across ministries and departments into live, responsive operational command centers.',
      icon: Cpu,
    },
    {
      title: 'Continuous AI Governance',
      subtitle: 'Built-in regulatory compliance',
      description:
        'Embedding model drift monitoring, bias auditing, and automated compliance directly into the software fabric rather than as an afterthought.',
      icon: FileCheck2,
    },
    {
      title: 'Defense-Grade Security',
      subtitle: 'Air-gapped and zero-trust by default',
      description:
        'Designing systems that thrive in zero-internet, air-gapped, and isolated sovereign environments where data security is a matter of national safety.',
      icon: Lock,
    },
    {
      title: 'Measurable Public Impact',
      subtitle: 'Outcome-based engineering',
      description:
        'Measuring project success by verifiable civil outcomes: reduced processing bottlenecks, proactive disaster relief, and elevated service delivery.',
      icon: TrendingUp,
    },
  ];

  const coreValues = [
    {
      title: 'Sovereignty & Privacy',
      tagline: 'Your data never leaves your perimeter',
      description:
        'We engineer systems that respect national boundaries, privacy mandates, and strict regulatory silos. We guarantee zero external telemetry or secondary data harvesting.',
      icon: Shield,
    },
    {
      title: 'Empirical Truth',
      tagline: 'Grounded in verified reality',
      description:
        'We hold our models to the highest standards of mathematical rigor, active hallucination suppression, and transparent provenance verification.',
      icon: Scale,
    },
    {
      title: 'Pioneering Innovation',
      tagline: 'Advancing frontier autonomous intelligence',
      description:
        'From autonomous multi-agent swarms to domain-specialized LLMs, we bring university-grade research into enterprise production environments.',
      icon: Sparkles,
    },
    {
      title: 'Institutional Trust',
      tagline: 'Accountability in every algorithmic step',
      description:
        'We believe trust is earned through auditability. Our platforms offer end-to-end explainability so civil leaders and executives can defend every decision.',
      icon: HeartHandshake,
    },
    {
      title: 'Engineering Rigor',
      tagline: 'Built for zero-failure operations',
      description:
        'High-consequence systems demand flawless resilience. We test under extreme nationwide concurrency and architect redundant, fail-safe environments.',
      icon: Cpu,
    },
    {
      title: 'Public Impact',
      tagline: 'Technology dedicated to human progress',
      description:
        'Our software serves real human beings. We measure our impact by better healthcare allocation, safer communities, and more transparent public institutions.',
      icon: Target,
    },
  ];

  const principles = [
    {
      num: '01',
      title: 'Human-in-the-Loop Supremacy',
      description:
        'AI should augment, accelerate, and inform human judgment — never unilaterally supersede it in matters of justice, health, or constitutional rights.',
    },
    {
      num: '02',
      title: 'Zero Vendor Lock-in',
      description:
        'Clients retain full source capability, model checkpoints, and data sovereignty. Our platforms deploy seamlessly across bare-metal, private cloud, or hyperscalers.',
    },
    {
      num: '03',
      title: 'Continuous Algorithmic Hygiene',
      description:
        'Every deployed model undergoes continuous stress-testing against demographic drift, adversarial tampering, and concept decay.',
    },
    {
      num: '04',
      title: 'Radical Transparency',
      description:
        'We operate with full disclosure regarding architectural constraints, performance metrics, and model limitations — because honesty is the only foundation for trust.',
    },
  ];

  return (
    <div className="bg-[#F8FAFF]">
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'About Us', href: '/about/overview' },
          { label: 'Our Purpose' },
        ]}
        eyebrow="Mission & Vision"
        title="Our Purpose"
        subtitle="Guiding mission-critical governance through accountable AI, sovereign data architectures, and purposeful technological leadership."
        dark={true}
      />

      {/* Vision Statement Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 text-blue-700">
              Our Vision
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 tracking-tight">
              A Future Where AI Strengthens Democratic Governance and Enterprise Integrity
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We envision a world where governments and enterprises unlock the vast potential of artificial intelligence without sacrificing sovereign data boundaries, constitutional rights, or public trust. We are establishing the global standard for governed, auditable autonomy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-14">
            {visionPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 rounded-2xl bg-[#F8FAFF] border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:bg-white transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 lg:py-24 bg-[#E5EDFF]/40 border-b border-blue-100/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 text-blue-700">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Engineering Real-World AI for High-Consequence Environments
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-base">
                Our mission is to deploy mission-critical systems that solve the toughest data bottlenecks in public service and enterprise operations. We transform disjointed records, fragmented databases, and static workflows into unified, live operational intelligence.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/capabilities"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-sm"
                >
                  See Our Capabilities
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about/journey"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-300 hover:border-blue-700 hover:text-blue-700 text-slate-700 rounded-xl font-semibold text-sm transition-all duration-300 bg-white"
                >
                  Explore Our Journey
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {missionCommitments.map((commitment, idx) => {
                const Icon = commitment.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {commitment.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-700 mt-0.5">
                      {commitment.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {commitment.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Core Values"
            title="The Principles That Anchor Everything We Build"
            subtitle="Software deployed in public administration and mission-critical enterprise cannot afford ethical ambiguities. These values govern our engineering culture."
            centered={true}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 rounded-2xl bg-[#F8FAFF] border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:bg-white transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mt-1 mb-3">
                      {value.tagline}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technocracy Charter / Guiding Principles */}
      <section className="py-16 lg:py-24 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="The Technocracy Charter"
            title="Our Non-Negotiable Operational Principles"
            subtitle="Every contract signed and line of code pushed to production adheres to these foundational commitments."
            centered={true}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="p-7 group rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-black text-blue-700/30 mb-4 font-mono group-hover:text-blue-600 transition-all duration-200">
                    {p.num}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Partner with an organization committed to purposeful, auditable AI."
        primaryText="Schedule a consultation"
        primaryHref="/contact"
        secondaryText="View leadership"
        secondaryHref="/about/leadership"
      />
    </div>
  );
}
