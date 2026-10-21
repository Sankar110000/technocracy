import React from 'react';
import Link from 'next/link';
import {
  Briefcase, MapPin, Clock, ArrowRight, Sparkles, Globe,
  Users, CheckCircle2, Send, PhoneCall, Code2, ShieldCheck, Mail
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import { careersData } from '@/sample/carreersData';

export const metadata = {
  title: 'Careers — Technocracy Group',
  description: careersData.tagline,
};

export default function CareersPage() {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Frontier AI in Production',
      description: 'Work with Agentic AI, GenAI, and Computer Vision on real-world, high-throughput systems — not synthetic prototypes.'
    },
    {
      icon: Globe,
      title: 'Global Sovereign Impact',
      description: 'Deploy platforms for government ministries and enterprise leaders across 8+ countries, shaping modern digital public infrastructure.'
    },
    {
      icon: Users,
      title: 'Flat, High-Velocity Culture',
      description: 'Small, empowered teams with direct ownership over architecture, engineering decisions, and client delivery.'
    }
  ];

  return (
    <div className="bg-[#F8FAFF] min-h-screen">
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Careers' }
        ]}
        eyebrow="JOIN TECHNOCRACY GROUP"
        title={careersData.title.replace(' — Technocracy Group', '')}
        subtitle={careersData.tagline}
        dark={true}
      />

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 lg:p-12 shadow-xs">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">OUR MISSION & PHILOSOPHY</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 leading-tight">
              Work on problems that truly matter.
            </h2>
            <p className="mt-4 text-base lg:text-lg text-slate-600 leading-relaxed">
              {careersData.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-slate-100">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-5 rounded-xl bg-[#F8FAFF] border border-slate-200/60">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="bg-[#E5EDFF] py-16 lg:py-24 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700">CURRENT OPPORTUNITIES</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
                Open Positions
              </h2>
              <p className="mt-2 text-slate-600 max-w-xl text-sm sm:text-base">
                Join our engineering, solutions, and client engagement hubs in Bhubaneswar and Singapore.
              </p>
            </div>
            <Link
              href={careersData.actions.contactDirectly}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
            >
              Contact hiring team directly
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {careersData.openPositions.map((pos, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 lg:p-8 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                      <Briefcase className="w-3.5 h-3.5" />
                      {pos.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {pos.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 pt-1">
                    {pos.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    High-impact role contributing directly to core product architecture and client delivery.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href={`/contact?role=${encodeURIComponent(pos.title)}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold text-sm transition-all duration-300 group shadow-xs hover:shadow-md"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Talent Network Card */}
          <div className="mt-8 bg-blue-900 text-white rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold">Don&apos;t see your specific role?</h3>
              <p className="mt-2 text-sm text-blue-200 leading-relaxed">
                We are continually looking for exceptional AI researchers, distributed systems architects, and sovereign cloud engineers. Send your resume and portfolio directly to our leadership team.
              </p>
            </div>
            <Link
              href={careersData.actions.contactDirectly}
              className="px-6 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-xl font-semibold text-sm transition-colors duration-300 whitespace-nowrap shrink-0"
            >
              Contact directly
            </Link>
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700">WHAT TO EXPECT</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
            Our Hiring Process
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            We value your time. We aim to close the complete loop within two weeks from your initial discussion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careersData.hiringProcess.map((stepItem) => (
            <div
              key={stepItem.step}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 lg:p-7 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-blue-600 tracking-tight">
                    0{stepItem.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 text-xs font-bold">
                    Step
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {stepItem.name}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Transparent feedback</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Ready to build India's and the world's AI future?"
        primaryText="Contact directly"
        primaryHref={careersData.actions.contactDirectly}
        secondaryText="Explore all open roles"
        secondaryHref="#open-positions"
      />
    </div>
  );
}
