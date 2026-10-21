"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, Lock, Cpu } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import { productsList } from '@/sample/productsData';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFF] flex flex-col">
      {/* Hero Section */}
      <PageHero
        breadcrumbs={[{ label: 'Products' }]}
        eyebrow="AI PLATFORMS"
        title="Products"
        subtitle="Ready-to-deploy AI platforms built for governments and enterprises."
      />

      {/* Trust & Architecture Highlights */}
      <section className="bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-600 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <span>Sovereign & On-Premises</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <span>Zero Data Leakage</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <span>Production-Ready in Weeks</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <span>Enterprise Model Auditing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="mb-12 lg:mb-16">
            <span className="inline-block px-3 py-1 rounded-full border border-blue-500 text-xs font-semibold tracking-wider text-blue-500 bg-blue-100/10 uppercase mb-6">
              ENTERPRISE CATALOG
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Production-Grade AI Platforms
            </h2>
            <p className="mt-3 text-base lg:text-lg max-w-2xl text-slate-600 leading-relaxed">
              Engineered for strict regulatory compliance, mission-critical reliability, and immediate operational value across public sector and high-scale enterprise environments.
            </p>
          </div>

          {/* Grid of all 8 products: 2 cols on md, 3 on lg, last 2 spanning & centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            {productsList.map((product, idx) => {
              const isLastTwo = idx >= 6;
              return (
                <Link
                  key={product.route}
                  href={product.route}
                  className={`group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 ${
                    isLastTwo ? 'lg:col-span-3' : 'lg:col-span-2'
                  }`}
                >
                  <div>
                    {/* Top Icon and Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {product.icon}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {product.productName}
                    </h3>

                    {/* Tagline */}
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-blue-700 group-hover:text-blue-800 transition-colors">
                    <span>Explore platform</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Building AI for a department or an enterprise? Start with a conversation."
        primaryText="Talk to an expert"
        primaryHref="/book-a-demo"
        secondaryText="Book a demo"
        secondaryHref="/book-a-demo"
      />
    </div>
  );
}
