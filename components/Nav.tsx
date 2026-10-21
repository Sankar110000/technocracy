"use client"

import React, { useState, useEffect, useRef } from 'react';
import {
  Search, User, ChevronDown, Menu, X, ArrowRight, ArrowUpRight,
  Compass, Flag, Users, Route, BookOpen,
  Building2, CalendarCheck, Cpu, Briefcase, Share2, Boxes,
  Code2,
  MessageCircleMoreIcon
} from 'lucide-react';
import Link from 'next/link';
import { industriesData } from "@/sample/industriesData";
import { servicesList } from "@/sample/servicesData";
import { productsList } from "@/sample/productsData";
import { useRouter } from 'next/navigation';
import SearchPage from './Search';
import { FloatingChatWidget } from './ui/ChatWidget';

interface NavSubItem {
  name: string;
  route: string;
  tagline: string;
  icon?: React.ReactNode;
  category?: string;
  preview?: string;
}

interface NavLinkItem {
  name: string;
  route: string;
  isCapabilities?: boolean;
  items?: NavSubItem[];
  widthClass?: string;
  gridClass?: string;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [capabilitiesTab, setCapabilitiesTab] = useState<'services' | 'products'>('services');

  const router = useRouter()

  const industriesNavLinks: NavSubItem[] = industriesData.map(ele => ({
    name: ele.sector,
    route: ele.route,
    tagline: ele.metric || "Explore industry-specific solutions",
    icon: ele.icon
  }));

  const productsNavLinks: NavSubItem[] = productsList.map(ele => ({
    name: ele.productName,
    tagline: ele.tagline,
    route: ele.route,
    icon: ele.icon,
    preview: ele.mediaAssets?.posterImage,
    category: "PRODUCT • AI SUITE"
  }));

  const servicesNavLinks: NavSubItem[] = servicesList.map(ele => ({
    name: ele.serviceName,
    route: ele.route,
    tagline: ele.tagline || (ele.overview ? ele.overview.slice(0, 60) + "..." : ""),
    icon: ele.icon,
    preview: ele.mediaAssets?.posterImage,
    category: "SERVICE • ENTERPRISE"
  }));

  const aboutUsLinks: NavSubItem[] = [
    { name: "Overview", tagline: "Who we are at a glance", route: "/about#overview", icon: <Compass className="w-5 h-5" /> },
    { name: "Our Purpose", tagline: "Our vision & mission", route: "/about#purpose", icon: <Flag className="w-5 h-5" /> },
    { name: "Leadership Team", tagline: "The people steering us", route: "/about#leadership", icon: <Users className="w-5 h-5" /> },
    { name: "Our Journey", tagline: "Milestones along the way", route: "/about#journey", icon: <Route className="w-5 h-5" /> },
  ];

  const resourceLinks: NavSubItem[] = [
    { name: "Insights", tagline: "Insights and industry research", route: "/resources/insights", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Corporate Profile", tagline: "Download our company profile", route: "/company/profile", icon: <Building2 className="w-5 h-5" /> },
    { name: "Book a Demo", tagline: "See our platforms in live action", route: "/book-a-demo", icon: <CalendarCheck className="w-5 h-5" /> },
    { name: "Technology Stack", tagline: "Powering innovation with enterprise tech", route: "/company/tech-stack", icon: <Cpu className="w-5 h-5" /> },
    { name: "Careers", tagline: "Open roles and life at Technocracy", route: "/careers", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Follow Us", tagline: "Connect with us on social media", route: "/social", icon: <Share2 className="w-5 h-5" /> },
  ];

  const navLinks: NavLinkItem[] = [
    {
      name: "About us",
      route: "/about",
      items: aboutUsLinks,
      widthClass: "max-w-4xl",
      gridClass: "grid-cols-1 md:grid-cols-2"
    },
    {
      name: "Industries",
      route: "/industries",
      items: industriesNavLinks,
      widthClass: "max-w-5xl",
      gridClass: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    },
    {
      name: "Capabilities",
      route: "/capabilities",
      isCapabilities: true,
      widthClass: "max-w-6xl"
    },
    {
      name: "Resources",
      route: "/resources/insights",
      items: resourceLinks,
      widthClass: "max-w-5xl",
      gridClass: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    },
    {
      name: "Partners",
      route: "/partners"
    }
  ];

  // Graceful hover timeout ref
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (idx: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(idx);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const switchCapabilitiesTab = (tab: 'services' | 'products') => {
    setCapabilitiesTab(tab);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const activeLinkData = activeDropdown !== null ? navLinks[activeDropdown] : null;

  // Helper to render icon with color transition and currentColor inheritance
  const renderSubItemIcon = (icon?: React.ReactNode) => {
    if (!icon) return <Code2 className="w-5 h-5 transition-colors duration-300 ease-in-out text-current" />;
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
        className: "w-5 h-5 transition-colors duration-300 ease-in-out text-current"
      });
    }
    return icon;
  };

  return (
    <div className=" transition-colors duration-300 text-slate-900 relative">

      {/* Sticky Navbar Wrapper */}
      <header
        className="fixed top-0 z-50 w-screen"
        onMouseLeave={handleMouseLeave}
      >
        <nav className="w-full px-6 lg:px-12 py-4 flex items-center justify-between border-b transition-all duration-300 backdrop-blur-md bg-[#f8faff]/95 border-blue-100/60 text-slate-800 shadow-sm">

          {/* Leftmost: Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center font-extrabold text-xl tracking-tight cursor-pointer">
              <span className="text-slate-900">Technocracy</span>
              <span className="text-xs text-blue-600 mt-2">.group</span>
            </Link>
          </div>

          {/* Middle: Navlinks */}
          <div className="hidden md:flex items-center space-x-8 text-[15px] font-medium">
            {navLinks.map((link, idx) => (
              <div
                key={link.name}
                className="relative py-2"
                onMouseEnter={() => handleMouseEnter(idx)}
              >
                <Link
                  href={link.route}
                  className={`group/nav flex items-center space-x-1.5 transition-colors duration-300 ease-in-out cursor-pointer ${activeDropdown === idx
                    ? 'text-blue-600'
                    : 'text-slate-700 hover:text-blue-600'
                    }`}
                >
                  <span className="transition-colors duration-300 ease-in-out group-hover/nav:text-blue-600">
                    {link.name}
                  </span>
                  {(link.isCapabilities || (link.items && link.items.length > 0)) && (
                    <ChevronDown
                      className={`w-4 h-4 transition-all duration-300 ease-in-out ${activeDropdown === idx
                        ? 'rotate-180 text-blue-600'
                        : 'text-slate-400 group-hover/nav:text-blue-600'
                        }`}
                    />
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Rightmost Controls & Actions */}
          <div className="flex items-center space-x-1">

            <div className="hidden xl:flex items-center space-x-3 pl-2">
              <button onClick={() => router.push("/contact")} className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer border border-blue-600 text-blue-600 hover:bg-blue-50">
                Contact Us
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-blue-50 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mega Menu Dropdown Container */}
        {activeLinkData && (activeLinkData.isCapabilities || (activeLinkData.items && activeLinkData.items.length > 0)) && (
          <div
            onMouseEnter={() => handleMouseEnter(activeDropdown!)}
            onMouseLeave={handleMouseLeave}
            className="absolute top-full left-0 right-0 flex justify-center px-4 pointer-events-none z-50"
          >
            <div
              className={`pointer-events-auto w-full ${activeLinkData.widthClass || 'max-w-5xl'} rounded-2xl border shadow-2xl backdrop-blur-2xl transition-all duration-300 p-6 animate-in fade-in slide-in-from-top-2 bg-slate-50 border-slate-200/90 text-slate-900 shadow-blue-500/5`}
            >
              {/* 1. CAPABILITIES MEGA MENU (Two-section Layout: Left Tabs + Right Sublinks) */}
              {activeLinkData.isCapabilities ? (
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">

                  {/* Left Section: Services & Products Tabs */}
                  <div className="w-full lg:w-72 shrink-0 lg:border-r lg:border-slate-100 lg:pr-6 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-3 px-2 flex items-center gap-2">
                        Capabilities
                      </div>
                      <div className="space-y-3">
                        {/* Services Tab */}
                        <div
                          onMouseEnter={() => switchCapabilitiesTab('services')}
                          onClick={() => router.push("/services")}
                          className={`relative group p-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out border ${capabilitiesTab === 'services'
                            ? 'bg-white border-slate-200/90 shadow-md shadow-blue-500/5'
                            : 'border-transparent hover:bg-white/80 hover:shadow-xs'
                            }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3.5">
                              <div className={`p-2.5 rounded-xl shrink-0 transition-colors duration-300 ease-in-out ${capabilitiesTab === 'services'
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                                }`}>
                                <Briefcase className="w-5 h-5 text-current transition-colors duration-300" />
                              </div>
                              <div>
                                <h3 className={`font-bold text-[15px] leading-tight transition-colors duration-300 ease-in-out ${capabilitiesTab === 'services'
                                  ? 'text-blue-700'
                                  : 'text-slate-900 group-hover:text-blue-600'
                                  }`}>
                                  Services
                                </h3>
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed transition-colors duration-300 ease-in-out">
                                  Strategy, engineering, cyber & AI governance.
                                </p>
                                <span className="inline-block text-[11px] font-medium text-slate-400 mt-2 transition-colors duration-300 ease-in-out">
                                  {servicesNavLinks.length} enterprise services
                                </span>
                              </div>
                            </div>

                            {capabilitiesTab === 'services' && (
                              <ArrowUpRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            )}
                          </div>
                        </div>

                        {/* Products Tab */}
                        <div
                          onMouseEnter={() => switchCapabilitiesTab('products')}
                          onClick={() => router.push("/products")}
                          className={`relative group p-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out border ${capabilitiesTab === 'products'
                            ? 'bg-white border-slate-200/90 shadow-md shadow-blue-500/5'
                            : 'border-transparent hover:bg-white/80 hover:shadow-xs'
                            }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3.5">
                              <div className={`p-2.5 rounded-xl shrink-0 transition-colors duration-300 ease-in-out ${capabilitiesTab === 'products'
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                                }`}>
                                <Boxes className="w-5 h-5 text-current transition-colors duration-300" />
                              </div>
                              <div>
                                <h3 className={`font-bold text-[15px] leading-tight transition-colors duration-300 ease-in-out ${capabilitiesTab === 'products'
                                  ? 'text-blue-700'
                                  : 'text-slate-900 group-hover:text-blue-600'
                                  }`}>
                                  Products
                                </h3>
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed transition-colors duration-300 ease-in-out">
                                  Ready-to-deploy platforms, apps & AI tools.
                                </p>
                                <span className="inline-block text-[11px] font-medium text-slate-400 mt-2 transition-colors duration-300 ease-in-out">
                                  {productsNavLinks.length} intelligent products
                                </span>
                              </div>
                            </div>

                            {capabilitiesTab === 'products' && (
                              <ArrowUpRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section: Sublinks Grid Matching About Us Style */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      {/* Section Header */}
                      <div className="flex items-center justify-between mb-4 pb-2">
                        <div>
                          <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                            {capabilitiesTab === 'services' ? 'Latest from Services' : 'Latest from Products'}
                          </p>
                          <h2 className="text-base font-bold text-slate-900 mt-0.5">
                            {capabilitiesTab === 'services'
                              ? 'Enterprise Consulting, Engineering & Advisory'
                              : 'Intelligent AI Platforms, Tooling & Suites'}
                          </h2>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Link
                            href={capabilitiesTab === 'services' ? '/services' : '/products'}
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group ml-2 transition-colors duration-300"
                          >
                            <span>View all {capabilitiesTab === 'services' ? 'services' : 'products'}</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>

                      {/* Sublinks Grid with rounded-xl and smooth color transitions */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                        {(capabilitiesTab === 'services' ? servicesNavLinks : productsNavLinks).map((item: NavSubItem, idx: number) => (
                          <Link
                            key={idx}
                            href={item.route || '#'}
                            onClick={() => setActiveDropdown(null)}
                            className="group p-3.5 rounded-xl bg-white border border-blue-100/80 shadow-xs hover:shadow-md hover:border-blue-300 hover:bg-blue-50/40 transition-all duration-300 ease-in-out flex items-center space-x-3.5 cursor-pointer"
                          >
                            {/* Icon Badge - Matches About Us with smooth bg and text transitions */}
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white rounded-xl flex items-center justify-center shrink-0 shadow-xs transition-colors duration-300 ease-in-out">
                              {renderSubItemIcon(item.icon)}
                            </div>

                            {/* Title & Tagline with smooth text transitions */}
                            <div className="min-w-0 flex-1">
                              <h4 className="font-bold text-[15px] text-blue-600 group-hover:text-blue-700 truncate leading-snug transition-colors duration-300 ease-in-out">
                                {item.name}
                              </h4>
                              <p className="text-xs font-medium text-slate-400 group-hover:text-slate-500 truncate mt-0.5 transition-colors duration-300 ease-in-out">
                                {item.tagline || `${capabilitiesTab === 'services' ? 'Service' : 'Product'} offering`}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              ) : (
                /* 2. OTHER MEGA MENUS (About Us, Industries, Resources) with Symmetrical Grids and Adaptive Widths */
                <div>
                  <div className="text-xs font-bold mb-4 flex items-center gap-2 text-slate-400 uppercase">
                    {activeLinkData.name}
                  </div>

                  <div className={`grid gap-3.5 ${activeLinkData.gridClass || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                    {activeLinkData.items?.map((subItem: NavSubItem, sIdx: number) => (
                      <Link
                        key={sIdx}
                        href={subItem.route || '#'}
                        onClick={() => setActiveDropdown(null)}
                        className="group p-3.5 rounded-xl bg-white border border-blue-100/80 shadow-xs hover:shadow-md hover:border-blue-300 hover:bg-blue-50/40 transition-all duration-300 ease-in-out flex items-center space-x-3.5 cursor-pointer"
                      >
                        {/* Icon Badge with smooth bg and text transitions */}
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white rounded-xl flex items-center justify-center shrink-0 shadow-xs transition-colors duration-300 ease-in-out">
                          {renderSubItemIcon(subItem.icon)}
                        </div>

                        {/* Title & Tagline with smooth text transitions */}
                        <div className="min-w-0 flex-1">
                          <h4 className="font-bold text-[15px] text-blue-600 group-hover:text-blue-700 truncate leading-snug transition-colors duration-300 ease-in-out">
                            {subItem.name}
                          </h4>
                          <p className="text-xs font-medium text-slate-400 group-hover:text-slate-500 truncate mt-0.5 transition-colors duration-300 ease-in-out">
                            {subItem.tagline || "Explore offering"}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
      <FloatingChatWidget/>
      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] p-6 border-b shadow-2xl backdrop-blur-xl z-40 max-h-[80vh] overflow-y-auto bg-white/95 border-slate-200 text-slate-900">
          <div className="flex flex-col space-y-4 font-medium">
            {navLinks.map((link, idx) => (
              <div key={idx} className="flex flex-col space-y-2">
                <span className="py-1 font-semibold text-blue-600">{link.name}</span>

                {link.isCapabilities ? (
                  <div className="pl-4 flex flex-col space-y-3 border-l border-slate-200 mb-2">
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Services</span>
                      <div className="pl-2 flex flex-col space-y-1.5 mt-1">
                        {servicesNavLinks.slice(0, 5).map((s, sIdx) => (
                          <Link
                            key={sIdx}
                            href={s.route}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm text-slate-600 hover:text-blue-600 py-0.5 transition-colors duration-300"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Products</span>
                      <div className="pl-2 flex flex-col space-y-1.5 mt-1">
                        {productsNavLinks.slice(0, 5).map((p, pIdx) => (
                          <Link
                            key={pIdx}
                            href={p.route}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm text-slate-600 hover:text-blue-600 py-0.5 transition-colors duration-300"
                          >
                            {p.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="pl-4 flex flex-col space-y-2 border-l border-slate-200 mb-2">
                    {link.items?.map((sub, sIdx) => (
                      <Link
                        key={sIdx}
                        href={sub.route || '#'}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm text-slate-500 hover:text-blue-600 py-1 transition-colors duration-300"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col space-y-3 border-t border-slate-200">
              <button className="w-full py-3 rounded-xl text-center font-semibold border border-blue-600 text-blue-600">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}