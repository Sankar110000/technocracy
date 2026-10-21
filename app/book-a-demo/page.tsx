"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar, Clock, CheckCircle2, Shield, Laptop, Users,
  ArrowRight, Sparkles, Building2, HelpCircle
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';

export default function BookADemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    productInterest: 'AI GRC',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM – 12:00 PM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief submission interaction (no backend)
    setTimeout(() => {
      console.log('Demo request submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#F8FAFF] min-h-screen">
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Book a Demo' }
        ]}
        eyebrow="PLATFORM WALKTHROUGH"
        title="Book a Demo"
        subtitle="See the platform in action — schedule a personalized walkthrough."
        dark={true}
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-white border border-slate-200/80 rounded-2xl p-8 lg:p-12 text-center shadow-xs">
                <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Demo Scheduled!</h3>
                <p className="mt-3 text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. A calendar invitation and platform walkthrough access details have been scheduled for your review.
                </p>
                <div className="mt-6 p-4 rounded-xl bg-blue-50 text-xs text-blue-900 max-w-sm mx-auto text-left">
                  <p className="font-bold mb-1">Session Summary:</p>
                  <p>Product: {formData.productInterest}</p>
                  {formData.preferredDate && <p>Requested Date: {formData.preferredDate}</p>}
                  <p>Time Window: {formData.preferredTime}</p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      productInterest: 'AI GRC',
                      preferredDate: '',
                      preferredTime: 'Morning (9:00 AM – 12:00 PM)',
                      message: '',
                    });
                  }}
                  className="mt-8 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold text-sm transition-colors duration-200 cursor-pointer"
                >
                  Schedule Another Walkthrough
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-slate-200/80 rounded-2xl p-8 lg:p-10 shadow-xs">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">PERSONALIZED CONSULTATION</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">Schedule Your Live Walkthrough</h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Direct 1-on-1 session with our product engineering team. No standard slide decks.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Vikramaditya Das"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFF] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Work Email <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="vikram@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFF] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Company / Agency <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Organization or Ministry"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFF] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="productInterest" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Product Interest <span className="text-blue-600">*</span>
                      </label>
                      <select
                        id="productInterest"
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFF] text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm outline-none"
                      >
                        <option value="AI GRC">AI GRC (Governance, Risk & Compliance)</option>
                        <option value="AI Command Center">AI Command Center & Executive Dashboard</option>
                        <option value="AI DMS">AI Document Management & Tracking (DMS)</option>
                        <option value="LMS & Education ERP">LMS, SLCM & Education ERP</option>
                        <option value="Enterprise GenAI">Agentic, Gen AI & Gov AI Platform</option>
                        <option value="Video Translation">Video Translation & Dubbing Suite</option>
                        <option value="Full Platform Suite">Full Platform Suite Demonstration</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFF] text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Preferred Time Window
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFF] text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm outline-none"
                      >
                        <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM IST)</option>
                        <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1:00 PM – 4:00 PM IST)</option>
                        <option value="Evening (4:00 PM – 7:00 PM)">Evening (4:00 PM – 7:00 PM IST)</option>
                        <option value="Singapore / APAC Hours">Singapore / APAC Working Hours</option>
                        <option value="EMEA / US Hours">EMEA / US Timezone Friendly</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Specific Requirements or Use Case
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what systems you are connecting, compliance standards needed, or expected user concurrency..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFF] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm outline-none resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Reserving slot...</span>
                      ) : (
                        <>
                          <span>Schedule Demo</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Demo Details Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 lg:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Laptop className="w-5 h-5 text-blue-700" />
                What to Expect in Your 30-Min Demo
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Live Product Architecture Tour</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Hands-on walkthrough of model governance dashboards, command consoles, or workflow automation modules.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Deployment Topology Review</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Explore our air-gapped, on-premise sovereign cloud, or zero-trust SaaS integration capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Pilot Scope & Implementation Timelines</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Understand how we take solutions from kickoff to pilot in as little as 4–6 weeks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <Clock className="w-4 h-4 text-blue-600" /> 30-45 Minutes
                </span>
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <Users className="w-4 h-4 text-blue-600" /> Lead Solutions Architect
                </span>
              </div>
            </div>

            {/* Credibility Card */}
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-2xl p-6 lg:p-8 shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/20 text-xs text-blue-300 font-semibold mb-4">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                ENTERPRISE-GRADE ASSURANCE
              </div>

              <h4 className="text-lg font-bold">Tested in High-Stakes Environments</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                From state-level Chief Minister dashboards to defense-grade air-gapped LLM inference, our platforms are engineered for zero-compromise resilience.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                <div>
                  <span className="text-2xl font-bold text-blue-400">8+</span>
                  <p className="text-[11px] text-slate-300 uppercase tracking-wider mt-0.5">Countries Served</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-blue-400">99.9%</span>
                  <p className="text-[11px] text-slate-300 uppercase tracking-wider mt-0.5">Platform Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Need custom advisory or architectural evaluation?"
        primaryText="Talk to an expert"
        primaryHref="/contact"
        secondaryText="View Technology Stack"
        secondaryHref="/company/tech-stack"
      />
    </div>
  );
}
