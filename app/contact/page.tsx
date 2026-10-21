"use client"

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle,
  Building, Clock, Globe, ArrowRight, ShieldCheck
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';

function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledRole = searchParams.get('role') || '';
  const prefilledTopic = searchParams.get('topic') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    inquiryType: prefilledRole ? 'Careers' : prefilledTopic === 'partner' ? 'Partnership' : 'Enterprise Solutions',
    message: prefilledRole ? `Applying for role: ${prefilledRole}\n` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief interaction without backend
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="bg-white border border-slate-200/80 rounded-2xl p-8 lg:p-12 text-center shadow-xs">
        <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Message Received</h3>
        <p className="mt-3 text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
          Thank you for reaching out to Technocracy Group. Our solutions and leadership team will review your inquiry and follow up within 24 business hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              organization: '',
              phone: '',
              inquiryType: 'Enterprise Solutions',
              message: '',
            });
          }}
          className="mt-8 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold text-sm transition-colors duration-200"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200/80 rounded-2xl p-8 lg:p-10 shadow-xs">
      <h3 className="text-xl font-bold text-slate-900 mb-6">Send Us a Message</h3>

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
              placeholder="e.g. Priya Sharma"
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
              placeholder="name@organization.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFF] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="organization" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Organization / Ministry <span className="text-blue-600">*</span>
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              required
              value={formData.organization}
              onChange={handleChange}
              placeholder="e.g. Department of Transport / Acme Corp"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFF] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm outline-none"
            />
          </div>

          <div>
            <label htmlFor="inquiryType" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Inquiry Type
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#F8FAFF] text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-sm outline-none"
            >
              <option value="Enterprise Solutions">Enterprise AI Platforms</option>
              <option value="Government Deployments">Government & Sovereign AI</option>
              <option value="Partnership">Partnership & Alliances</option>
              <option value="Careers">Careers & Talent</option>
              <option value="General">General Inquiry</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Message <span className="text-blue-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Share details regarding your operational challenges, timeline, or architecture requirements..."
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
              <span>Sending inquiry...</span>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFF] min-h-screen">
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Contact' }
        ]}
        eyebrow="GET IN TOUCH"
        title="Contact Us"
        subtitle="Let us know how we can help."
        dark={true}
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={
              <div className="p-12 text-center text-slate-500 bg-white rounded-2xl border border-slate-200/80">
                Loading contact form...
              </div>
            }>
              <ContactForm />
            </Suspense>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 lg:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Email Us</span>
                    <a
                      href="mailto:hello@technocracygroup.com"
                      className="text-base font-semibold text-slate-900 hover:text-blue-700 transition-colors"
                    >
                      hello@technocracygroup.com
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Direct routing to our core response team</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Call / WhatsApp</span>
                    <a
                      href="tel:+918828105320"
                      className="text-base font-semibold text-slate-900 hover:text-blue-700 transition-colors"
                    >
                      +91 88281 05320
                    </a>
                    <div className="mt-1">
                      <a
                        href="https://wa.me/918828105320"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Working Hours</span>
                    <p className="text-sm font-semibold text-slate-900">Monday – Friday: 9:00 AM – 6:30 PM (IST / SGT)</p>
                    <p className="text-xs text-slate-500 mt-0.5">24/7 mission-critical response for contracted SLAs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 lg:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-700" />
                Office Locations
              </h3>

              <div className="space-y-6">
                {/* Bhubaneswar */}
                <div className="p-4 rounded-xl bg-[#F8FAFF] border border-slate-200/60">
                  <div className="flex items-center gap-2 mb-1">
                    <Building className="w-4 h-4 text-blue-700" />
                    <span className="text-sm font-bold text-slate-900">Bhubaneswar Delivery & AI Hub</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    DCB-1014, DLF Cybercity, Patia, Bhubaneswar, Odisha 751024, India
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    Core Engineering Center
                  </span>
                </div>

                {/* Singapore */}
                <div className="p-4 rounded-xl bg-[#F8FAFF] border border-slate-200/60">
                  <div className="flex items-center gap-2 mb-1">
                    <Globe className="w-4 h-4 text-blue-700" />
                    <span className="text-sm font-bold text-slate-900">Singapore Global HQ</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    Technocracy Group Pte Ltd, Singapore
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    Global Strategy & Client Alliances
                  </span>
                </div>
              </div>
            </div>

            {/* Security & Confidentiality */}
            <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-5 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-relaxed">
                All communications and project inquiries are governed by standard enterprise non-disclosure standards. We never share proprietary data or operational architectures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Looking for an interactive system walkthrough?"
        primaryText="Book a Demo"
        primaryHref="/book-a-demo"
        secondaryText="Explore Our Products"
        secondaryHref="/products"
      />
    </div>
  );
}
