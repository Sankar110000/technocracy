import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  Mail,
  Shield,
  Code2,
  Cpu,
  Landmark,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Leadership Team — Technocracy Group',
  description:
    'Meet the technologists, governance advisors, and domain pioneers driving responsible, sovereign AI across governments and enterprises worldwide.',
};

export default function AboutLeadershipPage() {
  const leaders = [
    {
      name: 'Rajeshwar Patnaik',
      role: 'Chief Executive Officer',
      initials: 'RP',
      bio: 'Over 20 years leading large-scale digital transformations for public institutions and enterprises across India, Southeast Asia, and the Middle East. Champion for sovereign AI infrastructure in emerging economies.',
      focus: ['Sovereign AI Strategy', 'Public Sector Policy', 'Global Expansion'],
      icon: Landmark,
    },
    {
      name: 'Dr. Ananya Sengupta',
      role: 'Chief Technology Officer',
      initials: 'AS',
      bio: 'Ph.D. in High-Performance Computing and former distributed systems architect. Leads Technocracy’s core sovereign neural runtime, zero-trust cryptographic protocols, and air-gapped platform architecture.',
      focus: ['Distributed Systems', 'Zero-Trust Architecture', 'Sovereign LLMs'],
      icon: Cpu,
    },
    {
      name: 'Vikramaditya Rao',
      role: 'VP of Engineering',
      initials: 'VR',
      bio: '18+ years engineering mission-critical tier-1 platforms handling tens of millions of concurrent queries. Directs the full-stack engineering divisions, data mesh pipelines, and site reliability teams.',
      focus: ['High-Concurrency Systems', 'Data Fabrics', 'DevSecOps'],
      icon: Code2,
    },
    {
      name: 'Shweta Mukherjee',
      role: 'VP of Operations',
      initials: 'SM',
      bio: 'Expert in multi-regional program delivery, stakeholder governance, and cross-border expansion. Manages operational readiness, international client engagements, and delivery teams across 8+ countries.',
      focus: ['Programmatic Execution', 'Public Service Delivery', 'Cross-Border Scale'],
      icon: Shield,
    },
    {
      name: 'Dr. Sourav Mohanty',
      role: 'Head of AI Research',
      initials: 'SM',
      bio: 'Leading researcher in agentic decision architectures, algorithmic fairness, and neural verification. Author of numerous peer-reviewed papers on hallucination suppression and domain-adapted foundational models.',
      focus: ['Agentic AI Workflows', 'Algorithmic Verification', 'Explainable AI'],
      icon: Sparkles,
    },
    {
      name: 'Col. Pradeep Verma (Retd.)',
      role: 'Head of Government Solutions',
      initials: 'PV',
      bio: 'Former defense intelligence director with decades of experience advising state heads and security agencies. Spearheads state-level command centers, Chief Minister dashboards, and civil infrastructure solutions.',
      focus: ['Command & Control Centers', 'National Security AI', 'Civil Governance'],
      icon: Landmark,
    },
  ];

  const leadershipPrinciples = [
    {
      title: 'Practitioners, Not Spectators',
      description:
        'Every executive in our organization remains deeply technical and intimately involved in architecture reviews, code hygiene, and live deployments.',
    },
    {
      title: 'Civil Service Empathy',
      description:
        'We spend time in district collectorates, command rooms, and field offices to truly understand the operational constraints facing public servants.',
    },
    {
      title: 'Uncompromising Ethics',
      description:
        'When algorithms govern resource allocation and civil rights, our leaders hold our systems to the highest standards of fairness, transparency, and accountability.',
    },
  ];

  return (
    <div className="bg-[#F8FAFF]">
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'About Us', href: '/about/overview' },
          { label: 'Leadership Team' },
        ]}
        eyebrow="Executive Leadership"
        title="Leadership Team"
        subtitle="Meet the technologists, governance advisors, and domain pioneers driving responsible AI across governments and enterprises worldwide."
        dark={true}
      />

      {/* Leadership Grid */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Executive Officers & Heads"
            title="Steering Mission-Critical Innovation"
            subtitle="Deep engineering capability paired with extensive public administration and enterprise transformation experience."
            centered={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-[#F8FAFF] border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:bg-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Avatar & Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-700 to-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-md border-2 border-blue-100 shrink-0">
                      {leader.initials}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300 leading-snug">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider mt-0.5">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {leader.bio}
                  </p>

                  {/* Focus Tags */}
                  <div className="mt-6 pt-5 border-t border-slate-200/70">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                      Domain Focus
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {leader.focus.map((f, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with social placeholders */}
                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-slate-500">Technocracy Group</span>
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg text-slate-400 hover:text-blue-700 hover:bg-blue-50 transition-colors cursor-pointer">
                      <LinkedinIcon className="w-4 h-4" />
                    </span>
                    <span className="p-1.5 rounded-lg text-slate-400 hover:text-blue-700 hover:bg-blue-50 transition-colors cursor-pointer">
                      <Mail className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 lg:py-24 bg-[#E5EDFF]/40 border-b border-blue-100/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Our Culture"
            title="How Our Leadership Operates"
            subtitle="We reject bureaucratic ivory towers in favor of rigorous, hands-on architectural stewardship."
            centered={true}
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {leadershipPrinciples.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="p-8 lg:p-12 rounded-2xl bg-[#0B1224] text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(37,99,235,0.25)_0%,transparent_60%)]" />
            <div className="relative max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                Join Our Ranks
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2 text-white">
                Work alongside leaders shaping sovereign AI.
              </h3>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                We are actively recruiting systems architects, agentic AI researchers, and civil engagement specialists across our global offices.
              </p>
            </div>
            <div className="relative shrink-0">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-600/30"
              >
                View Open Positions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Discuss your enterprise or government AI architecture with our leadership."
        primaryText="Schedule an executive briefing"
        primaryHref="/contact"
        secondaryText="Explore our journey"
        secondaryHref="/about/journey"
      />
    </div>
  );
}
