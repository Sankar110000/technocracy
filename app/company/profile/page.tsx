import React from 'react';
import Link from 'next/link';
import {
  FileText, Download, Building2, Globe, Users, BarChart3,
  ShieldCheck, CheckCircle2, ArrowRight, MapPin, Award,
  Cpu, Layers, Shield, Sparkles
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';

export const metadata = {
  title: 'Corporate Profile — Technocracy Group',
  description: 'Enterprise AI solutions engineered for sovereignty, scale, and high-stakes governance across 8+ countries.',
};

export default function CorporateProfilePage() {
  const keyFacts = [
    { label: "Entity Name", value: "Technocracy Group Pte. Ltd." },
    { label: "Global Headquarters", value: "Singapore" },
    { label: "Core AI & Delivery Hub", value: "Bhubaneswar, Odisha, India" },
    { label: "Global Footprint", value: "8+ Countries across APAC, Middle East & Americas" },
    { label: "Workforce", value: "200+ AI Researchers, Engineers & Advisors" },
    { label: "Enterprise Projects", value: "50+ Sovereign & Commercial Deployments" },
    { label: "Platform Availability", value: "99.9% Uptime across Sovereign Clouds & Air-Gapped Environments" },
    { label: "Compliance & Security", value: "ISO 27001, SOC 2 Type II, Air-Gap Defense Standards" },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: "Sovereign AI Governance (AI GRC)",
      description: "Continuous real-time observability, policy enforcement, and audit-ready tracking directly embedded into the machine learning deployment pipeline."
    },
    {
      icon: Cpu,
      title: "Unified Command & Decision Centers",
      description: "District-to-state level executive dashboards connecting fragmented departmental data silos into real-time operational intelligence."
    },
    {
      icon: Layers,
      title: "Air-Gapped & Secure Systems",
      description: "Engineered specifically for zero external network leakage, allowing defense, banking, and government entities to deploy frontier LLMs with zero data risk."
    },
    {
      icon: Sparkles,
      title: "Agentic & Generative Enterprise Suites",
      description: "Multi-agent orchestration engines designed for automated document processing, citizen service routing, multilingual dubbing, and enterprise ERP."
    }
  ];

  return (
    <div className="bg-[#F8FAFF] min-h-screen">
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Company' },
          { label: 'Corporate Profile' }
        ]}
        eyebrow="CORPORATE PROFILE"
        title="Corporate Profile"
        subtitle="Enterprise AI solutions engineered for sovereignty, scale, and high-stakes governance."
        dark={true}
      />

      {/* Executive Summary & Factsheet */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Executive Summary */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 lg:p-10 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700">EXECUTIVE SUMMARY</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 leading-tight">
                Empowering Governments and Enterprises with Verifiable AI
              </h2>
              
              <div className="mt-4 space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Technocracy Group is an enterprise and sovereign AI engineering firm headquartered in Singapore with its primary research and delivery center in DLF Cybercity, Bhubaneswar, India.
                </p>
                <p>
                  We build and deploy mission-critical software architectures for state and federal governments, defense establishments, banking institutions, and healthcare systems. Unlike generic SaaS platforms, Technocracy specializes in zero-trust, air-gapped, and sovereign deployments where data integrity, regulatory adherence, and continuous governance are non-negotiable.
                </p>
                <p>
                  Our flagship suites—spanning AI GRC, Command Center Dashboards, Document Management & Tracking, and Enterprise GenAI—are active in over 8 countries, empowering leaders to transition from manual integration bottlenecks to real-time decision intelligence.
                </p>
              </div>

              {/* Download CTA Card */}
              <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-blue-50/60 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Official Corporate Profile Deck</h4>
                    <p className="text-xs text-slate-500">PDF • 4.8 MB • Updated 2026 Edition</p>
                  </div>
                </div>

                <a
                  href="#download-profile"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold text-xs transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
                >
                  <Download className="w-4 h-4" />
                  Download Profile
                </a>
              </div>
            </div>
          </div>

          {/* Factsheet Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 lg:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-700" />
                Quick Fact Sheet
              </h3>

              <div className="divide-y divide-slate-100">
                {keyFacts.map((fact, idx) => (
                  <div key={idx} className="py-3 first:pt-0 last:pb-0">
                    <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {fact.label}
                    </span>
                    <span className="block text-sm font-semibold text-slate-900 mt-0.5">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers Section */}
      <section className="bg-[#E5EDFF] py-16 lg:py-20 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 text-center shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-blue-700">8+</div>
              <div className="text-sm font-bold text-slate-900 mt-1">Countries Served</div>
              <div className="text-xs text-slate-500 mt-0.5">APAC, Middle East & Americas</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 text-center shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto mb-3">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-blue-700">200+</div>
              <div className="text-sm font-bold text-slate-900 mt-1">Engineers & Experts</div>
              <div className="text-xs text-slate-500 mt-0.5">Frontier researchers & architects</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 text-center shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-blue-700">50+</div>
              <div className="text-sm font-bold text-slate-900 mt-1">Enterprise Projects</div>
              <div className="text-xs text-slate-500 mt-0.5">Command centers & high-volume suites</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 text-center shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-blue-700">99.9%</div>
              <div className="text-sm font-bold text-slate-900 mt-1">Platform Reliability</div>
              <div className="text-xs text-slate-500 mt-0.5">Mission-critical guaranteed SLAs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700">CORE OFFERINGS</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
            Technocracy Solution Framework
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Engineered to handle sovereign scale, high-throughput transactions, and air-gapped security protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Delivery Hubs */}
      <section className="bg-white py-16 lg:py-24 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">GLOBAL FOOTPRINT</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Our Strategic Centers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFF] border border-slate-200/80 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-blue-700" />
                <h3 className="text-xl font-bold text-slate-900">Singapore HQ</h3>
              </div>
              <p className="text-sm font-semibold text-blue-700">Global Strategy & Alliances</p>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Technocracy Group Pte Ltd coordinates global client engagements, institutional partnerships, regulatory compliance advisory, and multi-country program oversight across APAC and international jurisdictions.
              </p>
            </div>

            <div className="bg-[#F8FAFF] border border-slate-200/80 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-blue-700" />
                <h3 className="text-xl font-bold text-slate-900">Bhubaneswar Delivery Hub</h3>
              </div>
              <p className="text-sm font-semibold text-blue-700">Core AI & Platform Engineering</p>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Located at DCB-1014, DLF Cybercity, Patia, Bhubaneswar, our state-of-the-art engineering lab houses our AI researchers, distributed systems architects, and sovereign cloud infrastructure specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Partner with Technocracy on your next high-stakes AI initiative."
        primaryText="Talk to an expert"
        primaryHref="/contact"
        secondaryText="Book a demo"
        secondaryHref="/book-a-demo"
      />
    </div>
  );
}
