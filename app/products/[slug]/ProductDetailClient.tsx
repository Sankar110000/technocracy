"use client";

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Check,
  ArrowRight,
  Quote,
  Layers,
  Shield,
  Lock,
  Cpu,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import SectionHeader from '@/components/ui/SectionHeader';
import { productsList } from '@/sample/productsData';

interface ProductDetailClientProps {
  slug: string;
}

export default function ProductDetailClient({ slug }: ProductDetailClientProps) {
  const product = productsList.find(
    (p) => p.route.replace('/products/', '') === slug || p.route.endsWith(slug)
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: product.productName },
        ]}
        eyebrow="ENTERPRISE AI PLATFORM"
        title={product.productName}
        subtitle={product.tagline}
      />

      {/* Overview Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Eyebrow badge with icon */}
          <span className="inline-block px-3 py-1 rounded-full border border-blue-500 text-xs font-semibold tracking-wider text-blue-500 bg-blue-100/10 uppercase mb-6">
            Overview
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* LEFT COLUMN: Scrollable Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-700 mb-6">
                Platform Architecture & Impact
              </h2>

              <p className="text-base sm:text-lg text-slate-800 font-normal leading-relaxed">
                {product.overview}
              </p>

              {/* Key Capabilities List */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Capabilities
                </h3>
                <ul className="space-y-2.5">
                  {product.keyCapabilities?.map((capability: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                      <span className="p-1 rounded-full bg-blue-50 border border-blue-500 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {product.corePhilosophy && (
                <div className="pt-6 mt-6 border-t border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Core Philosophy
                  </h3>
                  <blockquote className="relative italic text-slate-700 text-sm sm:text-base leading-relaxed">
                    <Quote className='w-5 h-5' />{product.corePhilosophy}<Quote className='w-5 h-5' />
                  </blockquote>
                </div>
              )}
              <div className="flex flex-wrap items-center gap-4">

                {/* Book a Demo Button */}
                <a
                  href="/book-a-demo"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
                >
                  Book a demo
                </a>

                {/* Try Live Button with Moving Border Animation */}
                {product.demoUrl && <Link
                  href={product.demoUrl}
                  target='_blank'
                  className="relative group inline-flex items-center justify-center p-[1px] rounded-lg overflow-hidden font-semibold text-sm"
                >
                  {/* Inner Content Background */}
                  <span className="relative px-6 py-3 rounded-[11px] bg-transparent text-slate-700 border border-blue-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-700 animate-pulse" />
                    Try Live
                  </span>
                </Link>}


              </div>
            </div>

            {/* RIGHT COLUMN: Sticky Video Container */}
            <div className="lg:col-span-6 lg:sticky lg:top-28 space-y-6">
              <div className="w-full overflow-hidden rounded-2xl border border-slate-500 shadow-2xl aspect-video sm:aspect-[16/10] bg-slate-900">
                <video
                  key={product.mediaAssets.videoPreview}
                  src={product.mediaAssets.videoPreview}
                  poster={product.mediaAssets.posterImage}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={true}
                  className="w-full h-full object-cover object-top transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* live demo  section */}
      {product.demoUrl && <section className="py-16 lg:py-24 bg-white max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title="See it working live"
          eyebrow="Try live"
          subtitle="Click around. It is the real interface with sample data."
        />

        <div className="mt-10 hidden md:block w-[80vw]">
          {/* Browser-styled Showcase Frame */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">

            {/* Frame Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-xs text-slate-400">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-red-700 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-700 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
              </div>

              <span className="font-semibold text-slate-200 text-center truncate px-2 m-auto">
                {product.productName}
              </span>

            </div>

            {/* Dynamic Iframe Container */}
            <div className="relative w-full h-[700px] bg-slate-900/50 overflow-hidden">
              <iframe
                src={product.demoUrl}
                title="Video Translation Interactive Demo"
                className="w-full h-full border-0 absolute inset-0"
              />
            </div>

          </div>
        </div>
      </section>}

      {/* Related Products Section */}
      {
        product.relatedProducts && product.relatedProducts.length > 0 && (
          <section className="py-16 lg:py-24 bg-[#F8FAFF] border-t border-slate-200/60">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <SectionHeader
                eyebrow="ECOSYSTEM"
                title="Related AI Platforms"
                subtitle="Complementary platforms designed to integrate directly with this solution for end-to-end automation."
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {product.relatedProducts.map((rel: { name: string; route: string; description: string }) => (
                  <Link
                    key={rel.route}
                    href={rel.route}
                    className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {rel.name}
                      </h3>
                      <p className="mt-2.5 text-sm text-slate-500 leading-relaxed">
                        {rel.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-blue-700 group-hover:text-blue-800">
                      <span>Explore platform</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      }

      {/* CTA Banner Section */}
      <CTABanner
        heading={`Ready to deploy ${product.productName} for your organization?`}
        primaryText="Talk to an expert"
        primaryHref={product.actions?.talkToExpert || "/book-a-demo"}
        secondaryText="Explore all products"
        secondaryHref="/products"
      />
    </div >
  );
}
