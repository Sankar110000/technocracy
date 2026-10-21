"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Shield, Cpu } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionHeader from '@/components/ui/SectionHeader';
import { servicesList } from '@/sample/servicesData';

export default function ServicesPage() {
  const highlights = [
    {
      title: 'Strategy & Advisory',
      description: 'Pragmatic roadmaps built around your actual organizational capability gaps.',
      icon: Sparkles,
    },
    {
      title: 'Platform Engineering',
      description: 'Robust data warehouses, pipelines, and CI/CD pipelines with integrated security.',
      icon: Cpu,
    },
    {
      title: 'Governance & Operations',
      description: 'Continuous assurance, compliance guardrails, and 24/7 managed reliability.',
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <PageHero
        breadcrumbs={[{ label: 'Services' }]}
        eyebrow="Our Services"
        title="Services"
        subtitle="From strategy to managed operations — work our teams do with yours, end to end."
        dark={true}
      />

      {/* ═══════════════════════ VALUE PILLARS ═══════════════════════ */}
      <section className="bg-white border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                    <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SERVICES GRID ═══════════════════════ */}
      <section className="bg-[#F8FAFF] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Comprehensive Expertise"
            title="End-to-End AI Services"
            subtitle="Explore our specialized services designed to help enterprises and governments build, scale, and govern intelligent systems."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesList.map((service, idx) => (
              <Link
                key={service.route || idx}
                href={service.route}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                      {React.isValidElement(service.icon)
                        ? React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, {
                            className: 'w-6 h-6 text-current transition-colors duration-300',
                          })
                        : service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                    {service.serviceName}
                  </h3>

                  <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Top Key Capabilities preview */}
                  {service.keyCapabilities && service.keyCapabilities.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                      {service.keyCapabilities.slice(0, 2).map((cap: string, capIdx: number) => (
                        <div key={capIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span className="leading-snug line-clamp-1">{cap}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm font-semibold text-blue-600 group-hover:text-blue-700 mt-6 pt-5 border-t border-slate-100">
                  <span>Explore service</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </Link>
            ))}
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
