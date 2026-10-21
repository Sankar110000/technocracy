import React from 'react';
import Link from 'next/link';
import {
  MessageCircle, ArrowUpRight,
  Share2, ArrowRight, CheckCircle2, MessageSquareText
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';
import { socialMediaData } from '@/sample/socialMediaData';

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export const metadata = {
  title: 'Follow Us — Technocracy Group',
  description: socialMediaData.tagline,
};

const platformIcons: Record<string, React.ElementType> = {
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
  "X (Twitter)": TwitterIcon,
  WhatsApp: MessageCircle,
};

const platformColors: Record<string, { bg: string; text: string; hoverBorder: string }> = {
  LinkedIn: { bg: "bg-blue-50", text: "text-[#0A66C2]", hoverBorder: "hover:border-[#0A66C2]/40" },
  Instagram: { bg: "bg-pink-50", text: "text-[#E4405F]", hoverBorder: "hover:border-[#E4405F]/40" },
  "X (Twitter)": { bg: "bg-slate-100", text: "text-slate-900", hoverBorder: "hover:border-slate-400" },
  WhatsApp: { bg: "bg-emerald-50", text: "text-[#25D366]", hoverBorder: "hover:border-[#25D366]/40" },
};

export default function SocialPage() {
  return (
    <div className="bg-[#F8FAFF] min-h-screen">
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Follow Us' }
        ]}
        eyebrow="CONNECT & FOLLOW"
        title="Follow Us"
        subtitle={socialMediaData.tagline}
        dark={true}
      />

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 lg:p-12 shadow-xs">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">STAY INFORMED</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Join the Conversation on Sovereign & Enterprise AI
            </h2>
            <p className="mt-4 text-base lg:text-lg text-slate-600 leading-relaxed">
              {socialMediaData.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Grid */}
      <section className="bg-[#E5EDFF] py-16 lg:py-24 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">OFFICIAL CHANNELS</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
              Our Primary Social Platforms
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Follow our latest deployment case studies, engineering insights, policy updates, and open career roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialMediaData.socialChannels.map((channel, idx) => {
              const Icon = platformIcons[channel.platform] || Share2;
              const colorConfig = platformColors[channel.platform] || {
                bg: "bg-blue-50",
                text: "text-blue-700",
                hoverBorder: "hover:border-blue-300"
              };

              return (
                <div
                  key={idx}
                  className={`bg-white border border-slate-200/80 rounded-2xl p-8 shadow-xs hover:shadow-xl ${colorConfig.hoverBorder} transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3.5">
                        <div className={`w-12 h-12 rounded-xl ${colorConfig.bg} ${colorConfig.text} flex items-center justify-center shrink-0`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{channel.platform}</h3>
                          <span className="text-xs text-slate-500 font-mono">@{channel.handle}</span>
                        </div>
                      </div>

                      <a
                        href={channel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl text-slate-400 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                        aria-label={`Open Technocracy on ${channel.platform}`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mt-2">
                      {channel.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Official Channel
                    </span>
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors group"
                    >
                      Connect on {channel.platform}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Communication Strip */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 lg:p-12 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
              <MessageSquareText className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Prefer direct communication?</h3>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              If you have a specific procurement request, sovereign AI inquiry, or press question, our executive office is available directly via email or our contact desk.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap gap-4">
            <Link
              href={socialMediaData.actions.contactUs}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-xs hover:shadow-md"
            >
              Contact Us Directly
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Start your organization's journey to sovereign AI excellence."
        primaryText="Talk to an expert"
        primaryHref="/contact"
        secondaryText="Book a demo"
        secondaryHref="/book-a-demo"
      />
    </div>
  );
}
