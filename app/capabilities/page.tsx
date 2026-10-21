"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Shield, Cpu } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionHeader from '@/components/ui/SectionHeader';
import { servicesList } from '@/sample/servicesData';
import { productsList } from '@/sample/productsData';

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <PageHero
        breadcrumbs={[{ label: 'Capabilities' }]}
        eyebrow="Our Capabilities"
        title="Capabilities"
        subtitle="Products and services to accelerate your AI, data and digital transformation journey."
        dark={true}
      />

      {/* ═══════════════════════ JUMP LINKS ═══════════════════════ */}
      <div className="bg-white border-b border-slate-200/80 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Jump to</span>
          <a href="#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors duration-200">
            Projects <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold">{productsList.length}</span>
          </a>
          <a href="#services" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors duration-200">
            Services <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold">{servicesList.length}</span>
          </a>
        </div>
      </div>

      {/* ═══════════════════════ PROJECTS SECTION ═══════════════════════ */}
      <section id="projects" className="bg-[#F8FAFF] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Projects"
            title="Software, grouped by the job it does"
            subtitle="Ready-to-deploy AI platforms, applications and intelligent tools built for government and enterprise."
            ctaText="View all products"
            ctaHref="/products"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {productsList.map((product, idx) => (
              <Link
                key={product.route || idx}
                href={product.route}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                      {React.isValidElement(product.icon)
                        ? React.cloneElement(product.icon as React.ReactElement<{ className?: string }>, {
                            className: 'w-6 h-6 text-current transition-colors duration-300',
                          })
                        : product.icon}
                    </div>
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors duration-300 font-mono">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                    {product.productName}
                  </h3>

                  <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                    {product.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm font-semibold text-blue-600 group-hover:text-blue-700 mt-6 pt-5 border-t border-slate-100">
                  <span>Explore product</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SERVICES SECTION ═══════════════════════ */}
      <section id="services" className="bg-[#0B1224] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 lg:mb-14">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 text-blue-400">Services</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
                Work our teams do with yours
              </h2>
              <p className="mt-3 text-base lg:text-lg max-w-2xl leading-relaxed text-slate-300">
                From the first assessment to running systems in production.
              </p>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold shrink-0 transition-colors duration-300 text-blue-400 hover:text-blue-300"
            >
              View all services
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <ul className="divide-y divide-white/10">
            {servicesList.map((service, idx) => (
              <li key={service.route || idx}>
                <Link
                  href={service.route}
                  className="group flex items-center justify-between py-5 hover:bg-white/5 px-4 -mx-4 rounded-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {React.isValidElement(service.icon)
                        ? React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, {
                            className: 'w-5 h-5 text-current transition-colors duration-300',
                          })
                        : service.icon}
                    </div>
                    <div>
                      <span className="block font-bold text-white text-base group-hover:text-blue-300 transition-colors duration-300">
                        {service.serviceName}
                      </span>
                      <span className="block text-sm text-slate-400 mt-0.5 leading-relaxed">
                        {service.tagline}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 transition-all duration-300 group-hover:translate-x-1 shrink-0 ml-4" />
                </Link>
              </li>
            ))}
          </ul>
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
