"use client"

import React from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

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

const footerLinks = {
  industries: {
    title: "Industries",
    href: "/industries",
    links: [
      { name: "Government", href: "/industries/government" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Education", href: "/industries/education" },
      { name: "Police & Security", href: "/industries/police-security" },
      { name: "Energy", href: "/industries/energy" },
      { name: "NBFC & Banking", href: "/industries/nbfc-banking" },
    ]
  },
  products: {
    title: "Products",
    href: "/products",
    links: [
      { name: "AI GRC", href: "/products/ai-grc" },
      { name: "Command Center & Dashboard", href: "/products/ai-command-center" },
      { name: "Document Management & Tracking", href: "/products/ai-dms" },
      { name: "Learning Management Suite", href: "/products/lms-slcm-erp" },
      { name: "Agentic, Gen AI & Gov AI", href: "/products/enterprise-genai" },
      { name: "Video Translation", href: "/products/video-translation" },
      { name: "All products", href: "/products" },
    ]
  },
  services: {
    title: "Services",
    href: "/capabilities",
    links: [
      { name: "Strategy & Advisory", href: "/capabilities/strategy-advisory" },
      { name: "Consulting Services", href: "/capabilities/consulting" },
      { name: "Managed Services", href: "/capabilities/managed-services" },
      { name: "AI & Data Engineering", href: "/capabilities/ai-data-engineering" },
      { name: "Cloud & DevSecOps", href: "/capabilities/cloud-devsecops" },
      { name: "Intelligent Automation", href: "/capabilities/intelligent-automation" },
      { name: "All services", href: "/capabilities" },
    ]
  },
  company: {
    title: "Company",
    href: "/about",
    links: [
      { name: "About us", href: "/about/overview" },
      { name: "Careers", href: "/careers" },
      { name: "Technology stack", href: "/company/tech-stack" },
      { name: "Contact", href: "/contact" },
    ]
  },
  insights: {
    title: "Insights",
    href: "/resources/insights",
    links: [
      { name: "All insights", href: "/resources/insights" },
      { name: "Corporate profile", href: "/company/profile" },
    ]
  }
};

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/technocracy-singapore/", icon: LinkedinIcon },
  { name: "X (Twitter)", href: "https://x.com/TechnocracySG", icon: TwitterIcon },
  { name: "WhatsApp", href: "https://wa.me/918828105320", icon: MessageCircle },
  { name: "Instagram", href: "https://www.instagram.com/technocracysg/", icon: InstagramIcon },
];

const legalLinks = [
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Responsible AI", href: "/ai-responsible-use" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1224] text-white overflow-hidden">

      {/* Directory */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <nav aria-label="Footer" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-sm text-white mb-4">
                <Link href={section.href} className="hover:text-blue-400 transition-colors duration-300">
                  {section.title}
                </Link>
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Legal & Social */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
            <span>© 2026 Technocracy Group</span>
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-slate-300 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="relative h-50 uppercase overflow-hidden w-full flex justify-center" aria-hidden="true">
        <span className="w-fit absolute tracking-wide bottom-0 left-1/2 -translate-x-1/2 text-[8rem] md:text-[12rem] font-black text-white/[0.03] leading-none whitespace-nowrap select-none pointer-events-none">
          Technocracy
        </span>
      </div>
    </footer>
  );
}
