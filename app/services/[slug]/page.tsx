"use client"

import React, { Suspense, use, useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import {
  ArrowRight, ArrowLeft, Check, CheckCircle2, AlertCircle,
  Shield, ChevronDown,
  Slash,
  X,
  Plus
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import Image from 'next/image';
import { servicesList } from '@/sample/servicesData';
import Loading from './loading';

function getSlugFromRoute(route: string): string {
  const parts = route.split('/').filter(Boolean);
  return parts[parts.length - 1] || '';
}

function ServiceDetailPage() {
  const { slug } = useParams();
  const [openIndex, setOpenIndex] = useState<number | null>(2); // Defaulting to 3rd item active matching screenshot

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const service = servicesList.find(
    (s) => getSlugFromRoute(s.route) === slug || s.route.endsWith(`/${slug}`)
  );

  if (!service) notFound();

  return (
    <div className="min-h-screen bg-white">

      {/* ═══════════════════════ HERO (FIRST SECTION — UNCHANGED) ═══════════════════════ */}
      <section className="bg-[#0B1224] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.15)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT: Text content */}
            <div>
              {/* Back link */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium mb-8 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {service.serviceName}
              </h1>

              {/* Tagline */}
              <p className="mt-4 text-base lg:text-lg text-slate-300 leading-relaxed max-w-lg">
                {service.tagline}
              </p>

              {/* Feature bullets */}
              {service.keyCapabilities && service.keyCapabilities.length > 0 && (
                <ul className="mt-8 space-y-3">
                  {service.keyCapabilities.slice(0, 3).map((cap: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-blue-400 stroke-[2.5]" />
                      </span>
                      <span className="text-sm text-slate-300 leading-relaxed">{cap}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mt-10">
                <Link
                  href={service.actions?.talkToExpert || '/contact'}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-md shadow-blue-500/20"
                >
                  <span>Talk to an expert</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 hover:border-white/40 text-white rounded-xl font-semibold text-sm transition-all duration-300"
                >
                  See all services
                </Link>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="relative h-72 sm:h-96 lg:h-full min-h-[380px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={service?.mediaAssets?.posterImage || '/services/strategy-advisory.jpg'}
                alt={service?.serviceName || 'Service'}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1224]/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ AT A GLANCE ═══════════════════════ */}
      <section className="bg-white border-b border-slate-200/80 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
            {[
              { label: 'What it is', value: service.atGlance?.whatItIs },
              { label: "Who it's for", value: service.atGlance?.whoItsFor },
              { label: 'You get', value: service.atGlance?.youGet },
              { label: 'Starts with', value: service.atGlance?.startsWith },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <dt className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                  {item.label}
                </dt>
                <dd className="text-sm font-medium text-slate-800 leading-relaxed">
                  {item.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ THE PROBLEM ═══════════════════════ */}
      {service.theProblem && (
        <section className="bg-[#F8FAFF] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative">

            {/* Left Column: Sticky */}
            <div className="lg:sticky lg:top-28">
              <span className="inline-block px-3 py-1 rounded-full border border-blue-500 text-xs font-semibold tracking-wider text-blue-500 bg-blue-100/10 uppercase mb-6">
                Overview
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-10">
                {service?.tagline}
              </h2>

              <ul className="space-y-5">
                <p className="text-base text-slate-700 leading-relaxed">{service.overview}</p>
              </ul>
              <ul className="space-y-5 pt-3">
                <p className="text-base text-slate-700 leading-relaxed">{service.corePhilosophy}</p>
              </ul>
            </div>

            <div className="space-y-2 border-l border-slate-300 pl-10">
              {service.keyCapabilities.map((ele: string, idx: number) => (
                <div
                  key={idx}
                  className="group h-30 relative pt-6 pb-6 border-t border-slate-200/80 flex items-center justify-between gap-6 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-500 ease-out group-hover:w-full" />

                  <span className="text-slate-400 group-hover:text-blue-400 font-mono font-semibold text-sm sm:text-base shrink-0 transition-colors duration-300">
                    /0{idx + 1}
                  </span>

                  <p className="flex-1 text-sm sm:text-base font-semibold text-slate-900 leading-relaxed transition-all duration-300 group-hover:ms-3">
                    {ele}
                  </p>
                </div>
              ))}
              <div className='border-t border-slate-300 mx-auto w-[90%]'></div>
              <div className="mt-12 mb-2">
                <h3 className="text-xl font-bold text-slate-900 mb-8">
                  What every engagement includes
                </h3>

                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                  {service.howWeEngage.steps.map((ele: { stepNumber: number; title: string; description: string }, idx: number) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      {/* Solid blue square bullet icon */}
                      <div className="w-2.5 h-2.5 bg-blue-600 rounded-xs mt-2 shrink-0" />

                      <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                        {ele.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════ WHAT WE DELIVER ═══════════════════════ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-10 lg:mb-14">
            <span className="inline-block px-3 py-1 rounded-full border border-blue-500 text-xs font-semibold tracking-wider text-blue-500 bg-blue-100/10 uppercase mb-6">
                Waht we do
              </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              What you get
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {service.keyCapabilities.map((capability: string, idx: number) => (
              <div
                key={idx}
                className="group flex items-start gap-4 bg-[#F8FAFF] rounded-2xl border border-slate-200/80 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-base font-medium text-slate-800 leading-relaxed pt-1">
                  {capability}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ HOW WE ENGAGE ═══════════════════════ */}
      {service.howWeEngage && (
        <section className="bg-[#E5EDFF] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-10 lg:mb-14">
              <span className="inline-block px-3 py-1 rounded-full border border-blue-500 text-xs font-semibold tracking-wider text-blue-500 bg-blue-100/10 uppercase mb-6">
                How we engage
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                {service.howWeEngage.heading}
              </h2>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.howWeEngage.steps.map((step: { stepNumber: number; title: string; description: string }, idx: number) => (
                <li
                  key={idx}
                  className="group bg-white rounded-2xl border border-blue-100 p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col"
                >
                  <span className="transition-all duration-200 text-4xl font-black text-blue-100 group-hover:text-blue-500 leading-none mb-4">
                    {step.stepNumber}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ═══════════════════════ SECURITY & COMPLIANCE ═══════════════════════ */}
      {service.regulatedCompliance && (
        <section className="bg-[#0B1224] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-10">
              <span className="inline-block px-3 py-1 rounded-full border border-blue-500 text-xs font-semibold tracking-wider text-blue-500 bg-blue-100/10 uppercase mb-6">
                Built for regulated buyers
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                {service.regulatedCompliance.heading}
              </h2>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.regulatedCompliance.certifications.map((cert: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-blue-400 stroke-[2.5]" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ═══════════════════════ FAQ ═══════════════════════ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative">

            {/* LEFT COLUMN: Sticky Section Header & CTA (5 columns) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              {/* FAQ Pill Badge */}
              <span className="inline-block px-3 py-1 rounded-full border border-blue-500 text-xs font-semibold tracking-wider text-blue-500 bg-blue-100/10 uppercase mb-6">
                FAQ
              </span>

              {/* Section Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.15] tracking-tight mb-4">
                Frequently Asked <br className="hidden sm:inline" />
                <span className="text-blue-600">Questions</span>
              </h2>

              {/* Subtitle */}
              <p className="text-base text-slate-500 leading-relaxed max-w-md mb-8">
                Straight answers about {service?.serviceName || "Custom Software Development"} projects. If yours is not here, ask us directly.
              </p>

              {/* Action Button */}
              <Link
                href={service?.actions?.talkToExpert || "/contact"}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-md shadow-blue-500/10"
              >
                Ask Our Team
              </Link>
            </div>

            {/* RIGHT COLUMN: Scrolling FAQ Accordion List (7 columns) */}
            <div className="lg:col-span-7 space-y-4">
              {service?.faqs?.map((faq: any, idx: number) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => toggleFaq(idx)}
                    className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer  border ${isOpen
                      ? " border-blue-400 shadow-sm bg-blue-50 "
                      : " border-slate-200/80 hover:border-slate-300 shadow-2xs"
                      }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      {/* Question Text */}
                      <h3
                        className={`font-bold text-base sm:text-lg transition-colors duration-300 ${isOpen ? "text-slate-900" : "text-slate-800"
                          }`}
                      >
                        {faq.question}
                      </h3>

                      {/* Toggle Action Icon Button */}
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-blue-600 text-white" : "bg-blue-50/80 text-blue-600"
                          }`}
                      >
                        <Plus className={`w-5 h-5 stroke-[2.5] ${isOpen ? "rotate-45" : ""} transition-all duration-200`} />
                      </div>
                    </div>

                    {/* Collapsible Answer Content */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4 pt-3 border-slate-100" : "grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════ RELATED SERVICES ═══════════════════════ */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <section className="bg-[#F8FAFF] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 lg:mb-14">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                  Next on the path
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Where to go next
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {service.relatedServices.map((related: { name: string; route: string; description: string }, idx: number) => {
                const relatedService = servicesList.find(s => s.route === related.route);
                return (
                  <Link
                    key={idx}
                    href={related.route}
                    className="group flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-44 bg-slate-100 overflow-hidden">
                      <Image
                        src={relatedService?.mediaAssets?.posterImage || '/services/strategy-advisory.jpg'}
                        alt={related.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                        {related.name}
                      </h3>
                      <p className="text-sm text-slate-500 mt-3 leading-relaxed flex-1">
                        {related.description}
                      </p>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-700 mt-5 pt-4 border-t border-slate-100 transition-colors duration-300">
                        <span>View service</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <CTABanner
        heading={`Ready to see ${service.serviceName} in action?`}
        primaryText="Talk to an expert"
        primaryHref={service.actions?.talkToExpert || '/contact'}
        secondaryText="Explore all services"
        secondaryHref="/services"
      />
    </div>
  );
}

export default function page(){
  return <Suspense fallback={<Loading/>}>
    <ServiceDetailPage/>
  </Suspense>
}