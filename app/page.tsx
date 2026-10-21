"use client"

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, ArrowUpRight, ChevronRight,
  CheckCircle2, Zap, Shield, Globe, Users, BarChart3,
  Building2, HeartPulse, GraduationCap, ShieldAlert, Landmark
} from 'lucide-react';
import { servicesList } from '@/sample/servicesData';
import { productsList } from '@/sample/productsData';
import { industriesData } from '@/sample/industriesData';
import { insightsList } from '@/sample/insightsData';
import Carousal from '@/components/ui/Carousal1';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

/* ──────────────────────── PARTNER LOGOS ──────────────────────── */
const defaultPartners = [
  { name: "Philip Morris International", logoUrl: "/logos/philip.svg" },
  { name: "Smarsh", logoUrl: "logos/smarsh.avif" },
  { name: "Snowflake", logoUrl: "logos/Snowflake.avif" },
  { name: "ACK3 Bionetics", logoUrl: "logos/ack3.avif" },
  { name: "Newfire Global Partners", logoUrl: "logos/newfire.avif" },
  { name: "DBS Bank", logoUrl: "logos/dbs.avif" },
  { name: "Amaru Inc.", logoUrl: "logos/amaru.avif" },
  { name: "VUI", logoUrl: "logos/vui.avif" },
  { name: "New IT Venture", logoUrl: "logos/newventure.avif" },
  { name: "Intellect Design Arena", logoUrl: "logos/intellectarena.avif" },
  { name: "Paracosma", logoUrl: "logos/paracosma.avif" },
  { name: "Infinity Assurance", logoUrl: "logos/infinity.avif" },
  { name: "PLATZ", logoUrl: "logos/platz.avif" },
  { name: "Resurs Bank", logoUrl: "logos/resurs.avif" },
];

/* ──────────────────────── STATS ──────────────────────── */
const stats = [
  { value: "8+", label: "Countries Served", icon: Globe },
  { value: "200+", label: "Engineers & Experts", icon: Users },
  { value: "50+", label: "Enterprise Projects", icon: BarChart3 },
  { value: "99.9%", label: "Platform Uptime", icon: Shield },
];

const carouselData = productsList.map((prod) => ({
  id: prod.route,
  videoUrl: prod.mediaAssets.videoPreview,
  description: prod.tagline,
  path: prod.route,
  title: prod.productName,
}));

/* ──────────────────────── INDUSTRY ICONS ──────────────────────── */
const industryIcons: Record<string, React.ReactNode> = {
  "NBFC & Banking": <Building2 className="w-6 h-6" />,
  "Energy": <Zap className="w-6 h-6" />,
  "Police & Security": <ShieldAlert className="w-6 h-6" />,
  "Education": <GraduationCap className="w-6 h-6" />,
  "Healthcare": <HeartPulse className="w-6 h-6" />,
  "Government": <Landmark className="w-6 h-6" />,
};

const whyTechnoCracyCardsData = [
  { title: "Government-Grade Security", desc: "Air-gapped, on-premise, and sovereign cloud deployment options. Built for defense, policing, and national systems.", icon: Shield },
  { title: "End-to-End Delivery", desc: "Strategy, architecture, development, and deployment under one roof — no handoffs between vendors.", icon: Zap },
  { title: "Continuous AI Governance", desc: "Model inventory, approvals, and continuous risk scoring built into the platform — not bolted on.", icon: CheckCircle2 },
  { title: "Multi-Country Operations", desc: "Deployed across 8+ countries with data residency options for every jurisdiction.", icon: Globe },
  { title: "Measurable Outcomes", desc: "Every engagement tied to outcomes you can point to — not hours billed.", icon: BarChart3 },
  { title: "Production-Ready AI", desc: "Not demos. Not prototypes. Systems running at scale in production today.", icon: Users },
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const router = useRouter()

  const [activeProduct, setActiveProduct] = useState(productsList[0]);

  // Auto-play interval for carousel rotation
  useEffect(() => {
    if (!servicesList || servicesList.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesList.length);
    }, 4500); // Rotates every 4.5 seconds

    return () => clearInterval(interval);
  }, [servicesList.length]);
  useEffect(() => {
    if (trackRef.current) {
      const cardElement = trackRef.current.children[currentIndex] as HTMLElement;
      if (cardElement) {
        trackRef.current.scrollTo({
          left: cardElement.offsetLeft - trackRef.current.offsetLeft - 24,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex]);
  return (
    <div>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative overflow-hidden bg-white min-h-[85vh] flex items-center">
        {/* Gradient accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.1)_0%,transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-700 animate-pulse" />
              <span className="text-xs font-semibold text-blue-700 tracking-wide">AI-Powered Governance Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-700 leading-[1.1] tracking-tight">
              AI you can trust.{' '}
              <span className="text-blue-700">Governance you can prove.</span>
            </h1>

            <p className="mt-6 text-lg text-slate-700 max-w-xl leading-relaxed">
              Build AI systems with confidence, control and clarity. Enterprise-grade platforms for governments and enterprises across 8+ countries.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-600/25"
              >
                Talk to an expert
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-700/20 hover:border-slate-700/40 text-slate-800 rounded-xl font-semibold text-sm transition-all duration-300"
              >
                Explore the platform
              </Link>
            </div>
          </div>
          <Carousal items={carouselData} autoPlayInterval={5000} />
        </div>
      </section>

      {/* ═══════════════════════ PARTNER LOGOS ═══════════════════════ */}
      <section className="bg-white border-b border-slate-100 py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-4">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Trusted by leading organizations</span>
        </div>
        <div className="relative pt-5">
          <div className="animate-marquee flex whitespace-nowrap">
            {[...defaultPartners, ...defaultPartners].map((partner, idx) => (
              <img
                key={idx}
                src={partner.logoUrl}
                alt={partner.name}
                draggable={false}
                width={500}
                height={100}
                /* MONOCHROME / BLACK & WHITE STYLING:
                   grayscale + opacity with crisp hover transition to full color */
                className="h-5 md:h-10 ms-5 md:ms-30 object-contain filter grayscale-100  opacity-60 hover:opacity-100 dark:invert transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CAPABILITIES ═══════════════════════ */}
      <section id="services" className="bg-[#F8FAFF] py-16 lg:py-24 overflow-hidden">
        <div className="">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-full border border-blue-500/30 text-xs font-semibold tracking-wider text-blue-600 bg-blue-50 uppercase mb-4 shadow-2xs">
                Services
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                End-to-end AI & technology services
              </h2>
              <p className="mt-4 text-base sm:text-lg max-w-2xl leading-relaxed text-slate-600">
                From strategy to execution — structured for impact and built to scale.
              </p>
            </div>

            <Link
              href="/capabilities"
              className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold shrink-0 text-blue-600 hover:text-blue-700 transition-colors duration-300 py-1"
            >
              See all services
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>

          {/* Carousel Viewport Container */}
          <div className="relative w-full">
            <div
              ref={trackRef}
              className="flex items-stretch gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6 pt-2 px-1 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {servicesList.map((service, idx) => {
                const isFocused = currentIndex === idx;

                return (
                  <div
                    key={idx}
                    className="snap-center shrink-0 w-[330px] sm:w-[390px] lg:w-[420px] transition-all duration-500 flex"
                  >
                    <Link
                      href={service.route || '/capabilities'}
                      className={`group flex flex-col justify-between w-full p-8 rounded-3xl  border transition-all duration-500 cursor-pointer ${isFocused
                        ? 'bg-blue-700 text-white'
                        : 'bg-white border-slate-200/80 shadow-sm opacity-85 hover:opacity-100 hover:border-slate-300'
                        }`}
                    >
                      <div>
                        {/* Icon & Title Header */}
                        <div className="flex items-center space-x-3.5 mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-blue-600  flex items-center justify-center shrink-0 shadow-sm transition-transform">
                            {React.isValidElement(service.icon)
                              ? React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5 text-white" })
                              : <Zap className="w-5 h-5 " />
                            }
                          </div>
                          <h3 className="font-bold text-lg   transition-colors leading-snug">
                            {service.serviceName}
                          </h3>
                        </div>

                        {/* Tagline / Overview */}
                        <p className="text-sm leading-relaxed line-clamp-3 mb-6">
                          {service.tagline || service.overview}
                        </p>

                        {/* Key Capabilities with Checkmarks */}
                        {service.keyCapabilities && service.keyCapabilities.length > 0 && (
                          <div className="space-y-2.5 mb-6 pt-1 border-slate-100">
                            {service.keyCapabilities.slice(0, 3).map((cap: string, cIdx: number) => (
                              <div key={cIdx} className="flex items-start space-x-2.5">
                                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                                <span className="text-xs leading-snug line-clamp-2">
                                  {cap}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Footer Link */}
                      <div className="flex items-center text-xs font-semibold transition-colors duration-300 pt-4 border-slate-100">
                        Learn more
                        <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {servicesList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to service slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${currentIndex === idx
                    ? 'w-8 h-2.5 bg-blue-600 shadow-sm'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════ INDUSTRIES ═══════════════════════ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 lg:mb-14">
            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-full border border-blue-500/30 text-xs font-semibold tracking-wider text-blue-600 bg-blue-50 uppercase mb-4 shadow-2xs">Industries</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-slate-900">
                Built for the sectors that matter
              </h2>
              <p className="mt-4 text-base sm:text-lg max-w-2xl leading-relaxed text-slate-600">
                Empowering enterprises across domains with robust, domain-specific digital architectures.
              </p>
            </div>
            <Link href="/industries" className="group inline-flex items-center gap-1.5 text-sm font-semibold shrink-0 text-blue-600 hover:text-blue-700 transition-colors duration-300">
              See all industries
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {industriesData.map((industry, idx) => (
              <Link
                key={idx}
                href={industry.route}
                className="group p-6 rounded-2xl bg-slate-50/50 border border-slate-200/80 hover:bg-white hover:shadow-lg hover:border-blue-300 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 w-fit mb-4">
                  {industryIcons[industry.sector] || <Building2 className="w-6 h-6" />}
                </div>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                  {industry.sector}
                </h3>
                <p className="text-sm text-blue-600 font-semibold mt-1">{industry.metric}</p>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed line-clamp-2">
                  {industry.headline}
                </p>
                <div className="flex items-center text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors duration-300 mt-4">
                  Explore
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* ═══════════════════════ PRODUCTS ═══════════════════════ */}
      <section className=" py-16 bg-blue-50">
        <div className='max-w-7xl mx-auto px-6 lg:px-12'>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 lg:mb-14">
            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-full border border-blue-500/30 text-xs font-semibold tracking-wider text-blue-600 bg-blue-50 uppercase mb-4 shadow-2xs">Products</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-slate-900">
                Built for production, creating impact
              </h2>
              <p className="mt-4 text-base sm:text-lg max-w-2xl leading-relaxed text-slate-600">
                Explore our suite of high-performance products designed to accelerate operations.
              </p>
            </div>
            <Link href="/products" className="group inline-flex items-center gap-1.5 text-sm font-semibold shrink-0 text-blue-600 hover:text-blue-700 transition-colors duration-300">
              See all products
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ">

            {/* LEFT COLUMN: Product List / Hover Trigger Cards */}
            <div className="lg:col-span-4 space-y-4">

              {productsList.map((product, idx) => {
                if (!product.demoUrl) return null;
                const isSelected = activeProduct.productName === product.productName;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveProduct(product)}
                    className="group relative flex items-center justify-between transition-all duration-300 cursor-pointer mb-0"
                    onClick={() => router.push(product.route)}
                  >
                    {/* Animated Top Border Line on Hover/Selection */}
                    <div className={`absolute top-0 left-0 h-[2px] bg-blue-400 transition-all duration-500 ease-out ${isSelected ? "w-full" : "w-0 group-hover:w-full"
                      }`} />

                    {/* Index Number */}
                    <span className={`font-mono font-semibold text-sm sm:text-base shrink-0 transition-colors duration-300 ${isSelected ? "text-blue-400" : "text-slate-500 group-hover:text-blue-400"
                      }`}>
                      /0{idx + 1}
                    </span>

                    {/* Product Name & Tagline Content */}
                    <div className="flex-1 transition-all duration-300 group-hover:ms-3">
                      <h3 className={`ms-2 text-base py-4 sm:text-md font-semibold transition-colors duration-300 ${isSelected ? "text-slate-900" : "text-slate-700 group-hover:text-white"
                        }`}>
                        {product.productName}
                      </h3>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN: Showcase Frame with Dynamic Iframe */}
            <div className="hidden lg:block lg:col-span-8 sticky top-28">
              <div className="hp-showcase rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">

                {/* Frame Top Bar */}
                <div className="hp-frame-bar flex items-center justify-center px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs text-slate-400">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <i className="w-2.5 h-2.5 rounded-full bg-red-700 inline-block"></i>
                    <i className="w-2.5 h-2.5 rounded-full bg-green-700 inline-block"></i>
                    <i className="w-2.5 h-2.5 rounded-full bg-slate-500 inline-block"></i>
                  </span>

                  <span className="font-semibold text-slate-500 mx-auto">
                    {activeProduct.productName}
                  </span>
                </div>

                {/* Dynamic Iframe Container */}
                <div className="relative w-full h-[500px] bg-slate-900/50">
                  <div className="absolute top-0 left-0 w-[1200px] h-[750px] origin-top-left scale-[0.45] sm:scale-[0.55] lg:scale-[0.65]">
                    <iframe
                      src={activeProduct.demoUrl}
                      title={`${activeProduct.productName} interactive demo`}
                      className="w-full h-full border-0"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════ WHY TECHNOCRACY ═══════════════════════ */}
      <section className="bg-blue-600 py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

          {/* Top Section Header */}
          <div className="text-center mb-14 lg:mb-18">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest mb-4 text-white">
              Why Technocracy
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white max-w-3xl mx-auto tracking-tight">
              What sets us apart
            </h2>
            <p className="text-sm sm:text-lg leading-tight mt-3 text-slate-300 max-w-3xl mx-auto tracking-tight">
              Discover what makes us the preferred technology partner for modern scale-ups and enterprises.
            </p>
          </div>

          {/* Grid of Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyTechnoCracyCardsData.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-blue-700/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon placed where numbers were in the reference layout */}
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="font-bold text-lg text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-blue-100/90 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════ INSIGHTS ═══════════════════════ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 lg:mb-14">
            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-full border border-blue-500/30 text-xs font-semibold tracking-wider text-blue-600 bg-blue-50 uppercase mb-4 shadow-2xs">Insights</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-slate-900">
                Latest from the team
              </h2>
              <p className="mt-4 text-base sm:text-lg max-w-2xl leading-relaxed text-slate-600">
                Stay ahead with our latest thinking on AI, architecture, and technology scaling.
              </p>
            </div>
            <Link href="/resources/insights" className="group inline-flex items-center gap-1.5 text-sm font-semibold shrink-0 text-blue-600 hover:text-blue-700 transition-colors duration-300">
              View all insights
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {insightsList.map((insight, idx) => (
              <Link
                key={idx}
                href={insight.route}
                className="group opacity-70 hover:opacity-100 flex flex-col justify-between p-8 rounded-3xl bg-[#F8FAFC] border border-slate-100/80 shadow-sm hover:shadow-md  transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div>
                  {/* Prominent Tagline / Quote text */}
                  <p className="text-slate-900 font-bold text-base sm:text-lg leading-snug mb-4">
                    “{insight.tagline}”
                  </p>

                  {/* Overview body text */}
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-4 mb-6">
                    {insight.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-slate-800">{insight.author}</span>
                    <span>•</span>
                    <span>{insight.date}</span>
                  </div>
                  <div className="flex items-center text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                    Read more
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <section className="relative bg-[#0B1224] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.12)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Building AI for a department or an enterprise?{' '}
            <span className="text-blue-400">Start with a conversation.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all duration-300"
            >
              Talk to an expert
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/book-a-demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:border-white/60 text-white rounded-xl font-semibold text-sm transition-all duration-300"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
