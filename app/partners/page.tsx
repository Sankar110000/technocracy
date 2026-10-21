import React from 'react';
import Link from 'next/link';
import {
  Handshake, ShieldCheck, Cpu, Globe, ArrowRight,
  Layers, CheckCircle2, Zap, Network, Building2
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';

export const metadata = {
  title: 'Partners & Ecosystem — Technocracy Group',
  description: 'Our global ecosystem of technology providers, systems integrators, and delivery partners powering sovereign AI.',
};

const allPartners = [
  "Philip Morris International", "Smarsh", "Snowflake", "ACK3 Bionetics",
  "Newfire Global Partners", "DBS Bank", "Amaru Inc.", "VUI",
  "New IT Venture", "Intellect Design Arena", "Paracosma", "Infinity Assurance",
  "PLATZ", "Resurs Bank", "Bajaj Finserv", "InterBIO",
  "Infogain Solutions", "WOW TV", "Mindgraph", "Assessfy", "Qualents"
];

const partnerTiers = [
  {
    tier: "Technology Partners",
    tag: "INFRASTRUCTURE & CORE AI",
    icon: Cpu,
    description: "Cloud hyperscalers, data platforms, and hardware accelerators integrated deeply into Technocracy's sovereign platform stack.",
    capabilities: [
      "Certified air-gapped infrastructure validation",
      "Native zero-latency API integrations",
      "Joint hardware & model optimization (NVIDIA, vLLM)",
      "Continuous compliance & security telemetry"
    ],
    examples: ["Snowflake", "Smarsh", "ACK3 Bionetics", "InterBIO", "VUI", "Paracosma"]
  },
  {
    tier: "Delivery & Systems Integrators",
    tag: "IMPLEMENTATION & ROLLOUT",
    icon: Network,
    description: "Global consulting firms and systems integrators who deliver, localize, and operate our solutions for sovereign and enterprise clients.",
    capabilities: [
      "End-to-end mission architecture deployment",
      "On-site integration with legacy government databases",
      "24/7 localized L1/L2 managed engineering support",
      "Jurisdictional regulatory compliance adaptation"
    ],
    examples: ["Intellect Design Arena", "Infogain Solutions", "Newfire Global Partners", "New IT Venture", "Mindgraph", "PLATZ"]
  },
  {
    tier: "Channel & Strategic Alliances",
    tag: "GO-TO-MARKET & CO-INNOVATION",
    icon: Handshake,
    description: "Enterprise leaders and regional distributors driving sovereign AI adoption and industry-specific transformation programs.",
    capabilities: [
      "Co-developed industry-specific workflows",
      "Regional distributor licenses and go-to-market alignment",
      "Executive sponsor access and policy advisory",
      "Domain-specific validation in banking, security, and governance"
    ],
    examples: ["DBS Bank", "Bajaj Finserv", "Philip Morris International", "Resurs Bank", "Amaru Inc.", "Infinity Assurance"]
  }
];

export default function PartnersPage() {
  return (
    <div className="bg-[#F8FAFF] min-h-screen">
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Partners' }
        ]}
        eyebrow="GLOBAL ECOSYSTEM"
        title="Partners"
        subtitle="Our ecosystem of technology and delivery partners."
        dark={true}
      />

      {/* Overview & Mission */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 lg:p-12 shadow-xs">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">COLLABORATION THAT SCALES</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Building mission-critical AI requires trusted alliances.
            </h2>
            <p className="mt-4 text-base lg:text-lg text-slate-600 leading-relaxed">
              Technocracy Group collaborates with market leaders across cloud infrastructure, security, systems integration, and domain verticals to deliver high-assurance platforms that operate flawlessly under strict sovereign constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-slate-100">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Multi-Jurisdiction Reach</h3>
                <p className="mt-1 text-sm text-slate-600">Active deployments across 8+ countries with local regulatory conformance.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Air-Gapped & Sovereign</h3>
                <p className="mt-1 text-sm text-slate-600">Strict zero-trust certifications designed for defense and intelligence workloads.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Rapid Joint Go-to-Market</h3>
                <p className="mt-1 text-sm text-slate-600">Pre-built solution blueprints accelerating delivery timelines by up to 60%.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="bg-[#E5EDFF] py-16 lg:py-24 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">CLIENT & ECOSYSTEM NETWORK</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Trusted by Industry Pioneers & Institutions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Leading organizations collaborating with Technocracy for AI governance, systems modernization, and sovereign intelligence.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allPartners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-xs border border-slate-200/90 rounded-2xl p-5 flex flex-col items-center justify-center text-center min-h-[105px] shadow-2xs hover:shadow-md hover:border-blue-400 hover:bg-white transition-all duration-300 group"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold mb-2 group-hover:scale-110 transition-transform">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-800 leading-snug group-hover:text-blue-700 transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Tiers Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700">PARTNERSHIP TIERS</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
            Our Partner Ecosystem Tiers
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Structured engagement models designed to create value across the entire AI deployment lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partnerTiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                      {tier.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-2">
                    {tier.tier}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                      Tier Capabilities:
                    </h4>
                    <ul className="space-y-2.5">
                      {tier.capabilities.map((cap, capIdx) => (
                        <li key={capIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="text-xs text-slate-500 mb-3 font-medium">Representative Partners:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {tier.examples.map((item, exIdx) => (
                      <span key={exIdx} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Become a Partner CTA Section */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.2)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">JOIN THE ALLIANCE</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">Become a Technocracy Partner</h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you are an independent software vendor, systems integrator, or strategic distributor, partner with Technocracy to bring sovereign, secure AI platforms to your regional client base.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact?topic=partner"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-md group"
            >
              Apply to Become a Partner
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/company/tech-stack"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/40 text-white rounded-xl font-semibold text-sm transition-all duration-300"
            >
              Explore Tech Stack
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Ready to expand your enterprise AI capabilities?"
        primaryText="Talk to our alliances team"
        primaryHref="/contact?topic=partner"
        secondaryText="Book a platform demo"
        secondaryHref="/book-a-demo"
      />
    </div>
  );
}
