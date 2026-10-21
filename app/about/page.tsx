import PageHero from '@/components/ui/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import React from 'react'
import {
    Globe,
    Users,
    BarChart3,
    Shield,
    Lightbulb,
    ShieldCheck,
    Award,
    TrendingUp,
    Target,
    Compass,
    ArrowRight,
    Landmark,
    Cpu,
    Layers,
    CheckCircle2,
    FileCheck2,
    Lock,
    Sparkles,
    Code2,
    Mail,
    Flag,
    Building2,
} from 'lucide-react';
import Link from 'next/link';
import CTABanner from '@/components/ui/CTABanner';

function page() {

    const stats = [
        {
            value: '8+',
            label: 'Countries Served',
            description: 'Active deployments across Southeast Asia, Middle East, and beyond',
            icon: Globe,
        },
        {
            value: '200+',
            label: 'Engineers & Experts',
            description: 'Frontier AI researchers, systems architects, and domain advisors',
            icon: Users,
        },
        {
            value: '50+',
            label: 'Enterprise & Gov Projects',
            description: 'Command centers, national dashboards, and tier-1 banking systems',
            icon: BarChart3,
        },
        {
            value: '99.9%',
            label: 'Platform Reliability',
            description: 'Guaranteed uptime in air-gapped and sovereign cloud environments',
            icon: Shield,
        },
    ];

    const values = [
        {
            title: 'Innovation',
            badge: 'Frontier Thinking',
            description:
                'Pioneering agentic workflows, multi-modal generative intelligence, and sovereign architectures built to solve complex institutional hurdles.',
            icon: Lightbulb,
        },
        {
            title: 'Trust',
            badge: 'Zero-Trust Security',
            description:
                'Ensuring absolute data sovereignty, end-to-end model explainability, and auditable governance with zero telemetry leakage.',
            icon: ShieldCheck,
        },
        {
            title: 'Excellence',
            badge: 'Engineering Rigor',
            description:
                'Crafting resilient, sub-second latency software that performs predictably under high stress and nationwide concurrency.',
            icon: Award,
        },
        {
            title: 'Impact',
            badge: 'Measurable Outcomes',
            description:
                'Measuring our value through real-world improvements — faster public grievance resolutions, streamlined operations, and elevated decisions.',
            icon: TrendingUp,
        },
    ];

    const missionCommitments = [
        {
            title: 'Operational Precision',
            subtitle: 'Sub-second real-time responsiveness',
            description:
                'Eliminating bureaucratic silos by unifying data streams across ministries and departments into live, responsive operational command centers.',
            icon: Cpu,
        },
        {
            title: 'Continuous AI Governance',
            subtitle: 'Built-in regulatory compliance',
            description:
                'Embedding model drift monitoring, bias auditing, and automated compliance directly into the software fabric rather than as an afterthought.',
            icon: FileCheck2,
        },
        {
            title: 'Defense-Grade Security',
            subtitle: 'Air-gapped and zero-trust by default',
            description:
                'Designing systems that thrive in zero-internet, air-gapped, and isolated sovereign environments where data security is a matter of national safety.',
            icon: Lock,
        },
        {
            title: 'Measurable Public Impact',
            subtitle: 'Outcome-based engineering',
            description:
                'Measuring project success by verifiable civil outcomes: reduced processing bottlenecks, proactive disaster relief, and elevated service delivery.',
            icon: TrendingUp,
        },
    ];

    const leaders = [
        {
            name: 'Rajeshwar Patnaik',
            role: 'Chief Executive Officer',
            initials: 'RP',
            bio: 'Over 20 years leading large-scale digital transformations for public institutions and enterprises across India, Southeast Asia, and the Middle East. Champion for sovereign AI infrastructure in emerging economies.',
            focus: ['Sovereign AI Strategy', 'Public Sector Policy', 'Global Expansion'],
            icon: Landmark,
        },
        {
            name: 'Dr. Ananya Sengupta',
            role: 'Chief Technology Officer',
            initials: 'AS',
            bio: 'Ph.D. in High-Performance Computing and former distributed systems architect. Leads Technocracy’s core sovereign neural runtime, zero-trust cryptographic protocols, and air-gapped platform architecture.',
            focus: ['Distributed Systems', 'Zero-Trust Architecture', 'Sovereign LLMs'],
            icon: Cpu,
        },
        {
            name: 'Vikramaditya Rao',
            role: 'VP of Engineering',
            initials: 'VR',
            bio: '18+ years engineering mission-critical tier-1 platforms handling tens of millions of concurrent queries. Directs the full-stack engineering divisions, data mesh pipelines, and site reliability teams.',
            focus: ['High-Concurrency Systems', 'Data Fabrics', 'DevSecOps'],
            icon: Code2,
        },
        {
            name: 'Shweta Mukherjee',
            role: 'VP of Operations',
            initials: 'SM',
            bio: 'Expert in multi-regional program delivery, stakeholder governance, and cross-border expansion. Manages operational readiness, international client engagements, and delivery teams across 8+ countries.',
            focus: ['Programmatic Execution', 'Public Service Delivery', 'Cross-Border Scale'],
            icon: Shield,
        },
        {
            name: 'Dr. Sourav Mohanty',
            role: 'Head of AI Research',
            initials: 'SM',
            bio: 'Leading researcher in agentic decision architectures, algorithmic fairness, and neural verification. Author of numerous peer-reviewed papers on hallucination suppression and domain-adapted foundational models.',
            focus: ['Agentic AI Workflows', 'Algorithmic Verification', 'Explainable AI'],
            icon: Sparkles,
        },
        {
            name: 'Col. Pradeep Verma (Retd.)',
            role: 'Head of Government Solutions',
            initials: 'PV',
            bio: 'Former defense intelligence director with decades of experience advising state heads and security agencies. Spearheads state-level command centers, Chief Minister dashboards, and civil infrastructure solutions.',
            focus: ['Command & Control Centers', 'National Security AI', 'Civil Governance'],
            icon: Landmark,
        },
    ];

    const milestones = [
        {
            year: '2019',
            badge: 'Inception',
            title: 'Founded',
            headline: 'A Mandate for Sovereign Intelligence',
            description:
                'Technocracy Group was founded with a singular conviction: as algorithmic systems increasingly underpin public life, democratic institutions require sovereign, auditable data architectures engineered specifically for public good and high-integrity decision making.',
            achievements: [
                'Core engineering and research lab established',
                'Initiated foundational research into public sector analytical pipelines',
                'Architected zero-compromise sovereign data isolation protocols',
            ],
            icon: Flag,
        },
        {
            year: '2020',
            badge: 'Public Sector Debut',
            title: 'First Government Project',
            headline: 'State-Scale Chief Minister Dashboard',
            description:
                'Delivered our flagship state-level unified command center and Chief Minister dashboard, unifying 30+ disparate departmental data silos into sub-second operational monitoring during a critical national period.',
            achievements: [
                'Real-time inter-departmental data reconciliation across 30+ ministries',
                'Integrated live citizen grievance tracking and resolution feedback loops',
                'Established 99.9% uptime baseline under extreme public crisis loads',
            ],
            icon: Landmark,
        },
        {
            year: '2021',
            badge: 'Global Expansion',
            title: 'Expanded to 3 Countries',
            headline: 'International Sovereign Architecture',
            description:
                'Scaled our sovereign architecture beyond national borders, establishing operational bases and deployments in Southeast Asia and the Middle East with localized data residency compliance.',
            achievements: [
                'Deployed multi-tenant sovereign clouds adhering to strict regional laws',
                'Launched cross-border data isolation frameworks with zero external telemetry',
                'Awarded international public-sector digital modernization contracts',
            ],
            icon: Globe,
        },
        {
            year: '2022',
            badge: 'Platform Innovation',
            title: 'AI GRC Platform Launch',
            headline: 'Continuous Governance, Risk & Compliance',
            description:
                'Released our enterprise-grade AI GRC suite, enabling organizations to continuously inventory models, benchmark algorithmic bias, and maintain automated regulatory compliance trails across high-risk sectors.',
            achievements: [
                'Automated real-time model drift and concept decay detection',
                'Deterministic explainability pipelines for financial and medical models',
                'One-click audit trail exports for international regulatory compliance',
            ],
            icon: ShieldCheck,
        },
        {
            year: '2023',
            badge: 'Enterprise Growth',
            title: '50+ Enterprise Clients',
            headline: 'Scaling Across High-Consequence Sectors',
            description:
                'Crossed 50+ enterprise and public sector deployments across banking, power utilities, policing, healthcare, and education with a verified 99.9% platform availability track record.',
            achievements: [
                'Integrated with tier-1 banking fraud prevention and risk engines',
                'Expanded team to 200+ specialized distributed systems and AI engineers',
                'Pioneered air-gapped on-premise inference clusters for defense security',
            ],
            icon: Building2,
        },
        {
            year: '2024',
            badge: 'Global Footprint',
            title: '8+ Countries',
            headline: 'Pan-Regional Sovereign Intelligence',
            description:
                'Deepened presence across 8+ countries with sovereign installations serving national ministries, regional defense authorities, and multi-tenant enterprise conglomerates.',
            achievements: [
                'Standardized sovereign deployments across diverse regulatory jurisdictions',
                'Launched multi-modal analytics for state-wide infrastructure surveillance',
                'Ranked among fastest-growing high-integrity governance technology firms',
            ],
            icon: Layers,
        },
        {
            year: '2025',
            badge: 'Frontier AI',
            title: 'Agentic AI Launch',
            headline: 'Next-Generation Autonomous Multi-Agent Systems',
            description:
                'Unveiled our frontier Agentic AI platform, introducing verified multi-agent collaboration frameworks that execute complex workflows with mathematical explainability and strict human oversight bounds.',
            achievements: [
                'Autonomous agent swarms for inter-ministerial workflow coordination',
                'Formal verification engines guaranteeing safe agent execution bounds',
                'Integration with sovereign LLMs running fully offline and air-gapped',
            ],
            icon: Cpu,
        },
    ];

    function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                {...props}
            >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        );
    }
    return (
        <div className='bg-[#F8FAFF]'>
            <PageHero
                breadcrumbs={[
                    { label: 'About Us', href: '/about' },
                ]}
                eyebrow="Abput us"
                title="Who We Are"
                subtitle="Technocracy Group delivers enterprise-grade AI platforms for governments and enterprises — from Chief Minister Dashboards to Predictive Analytics — across 8+ countries."
                dark={true}
            />
            <section id='overview' className="py-16 lg:py-24 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        eyebrow="Purpose-Driven Technology"
                        title="Anchored in Purpose, Built for Scale"
                        subtitle="Bridging the frontier of artificial intelligence with the non-negotiable security, accountability, and governance required by high-consequence institutions."
                        centered={true}
                    />

                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        {/* Mission Card */}
                        <div className="group relative p-8 lg:p-10 rounded-2xl bg-[#F8FAFF] border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-xs mb-6">
                                    <Target className="w-7 h-7" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                                    Our Mission
                                </span>
                                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">
                                    Empowering Decisions with Sovereign Intelligence
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    To build trusted, sovereign, and auditable AI platforms that transform fragmented institutional data into actionable decision intelligence for governments and critical enterprises. We replace guesswork with provable, real-time clarity.
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-200/80 space-y-2.5">
                                {[
                                    'Zero-compromise sovereign data boundaries',
                                    'Sub-second analytical intelligence for chief executives',
                                    'Auditable outputs with built-in compliance checks',
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Vision Card */}
                        <div className="group relative p-8 lg:p-10 rounded-2xl bg-[#F8FAFF] border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-xs mb-6">
                                    <Compass className="w-7 h-7" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                                    Our Vision
                                </span>
                                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">
                                    The Global Benchmark for Governed Autonomy
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-base">
                                    To define how democratic institutions and responsible enterprises adopt autonomous AI: with full transparency, provable safeguards, and zero vendor lock-in. We envision a future where public confidence and algorithmic power go hand in hand.
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-200/80 space-y-2.5">
                                {[
                                    'Universal standards for automated AI risk governance',
                                    'Cross-border interoperability without data leakage',
                                    'Human-in-the-loop oversight at national scale',
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Stats Section */}
            <section className="py-16 lg:py-24 bg-[#E5EDFF]/50 border-b border-blue-100/60">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        eyebrow="Our Global Footprint"
                        title="Proven Results in High-Stakes Environments"
                        subtitle="From national dashboards serving heads of state to secure banking platforms processing millions of transactions."
                        centered={true}
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {stats.map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                                            {stat.value}
                                        </div>
                                        <div className="text-base font-bold text-blue-700 mt-2">
                                            {stat.label}
                                        </div>
                                        <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                                            {stat.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        eyebrow="Our Principles"
                        title="The Values That Guide Our Code and Conduct"
                        subtitle="When building systems that govern public welfare and institutional trust, every technical decision carries ethical weight."
                        centered={true}
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {values.map((val, idx) => {
                            const Icon = val.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group p-7 rounded-2xl bg-[#F8FAFF] border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:bg-white transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-xs">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                                            {val.badge}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                                            {val.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {val.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 bg-[#E5EDFF]/40 border-b border-blue-100/60" id='purpose'>
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5">
                            <span className="inline-block px-3 py-1 rounded-full border border-blue-500 text-xs font-semibold tracking-wider text-blue-500 bg-blue-100/10 uppercase mb-6">
                                Our Mission
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                                Engineering Real-World AI for High-Consequence Environments
                            </h2>
                            <p className="mt-4 text-slate-600 leading-relaxed text-base">
                                Our mission is to deploy mission-critical systems that solve the toughest data bottlenecks in public service and enterprise operations. We transform disjointed records, fragmented databases, and static workflows into unified, live operational intelligence.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/capabilities"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-sm"
                                >
                                    See Our Capabilities
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/about/journey"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-300 hover:border-blue-700 hover:text-blue-700 text-slate-700 rounded-xl font-semibold text-sm transition-all duration-300 bg-white"
                                >
                                    Explore Our Journey
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                            {missionCommitments.map((commitment, idx) => {
                                const Icon = commitment.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                                            <Icon />
                                        </div>
                                        <h3 className="font-bold text-slate-900 text-base">
                                            {commitment.title}
                                        </h3>
                                        <p className="text-xs font-semibold text-blue-700 mt-0.5">
                                            {commitment.subtitle}
                                        </p>
                                        <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                                            {commitment.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 bg-white border-b border-slate-100" id='leadership'>
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        eyebrow="Executive Officers & Heads"
                        title="Steering Mission-Critical Innovation"
                        subtitle="Deep engineering capability paired with extensive public administration and enterprise transformation experience."
                        centered={true}
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {leaders.map((leader, idx) => (
                            <div
                                key={idx}
                                className="group p-8 rounded-2xl bg-[#F8FAFF] border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:bg-white transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Avatar & Header */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-700 to-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-md border-2 border-blue-100 shrink-0">
                                            {leader.initials}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300 leading-snug">
                                                {leader.name}
                                            </h3>
                                            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider mt-0.5">
                                                {leader.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bio */}
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {leader.bio}
                                    </p>

                                    {/* Focus Tags */}
                                    <div className="mt-6 pt-5 border-t border-slate-200/70">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                                            Domain Focus
                                        </span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {leader.focus.map((f, fIdx) => (
                                                <span
                                                    key={fIdx}
                                                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100"
                                                >
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Footer with social placeholders */}
                                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-400">
                                    <span className="font-medium text-slate-500">Technocracy Group</span>
                                    <div className="flex items-center gap-2">
                                        <span className="p-1.5 rounded-lg text-slate-400 hover:text-blue-700 hover:bg-blue-50 transition-colors cursor-pointer">
                                            <LinkedinIcon className="w-4 h-4" />
                                        </span>
                                        <span className="p-1.5 rounded-lg text-slate-400 hover:text-blue-700 hover:bg-blue-50 transition-colors cursor-pointer">
                                            <Mail className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 bg-[#F8FAFF]" id='journey'>
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        eyebrow="Milestones"
                        title="The Chronology of Our Growth"
                        subtitle="Explore how our technology, footprint, and impact expanded year over year."
                        centered={true}
                    />

                    <div className="relative mt-16 max-w-5xl mx-auto">
                        {/* Center Vertical Line (desktop) / Left line (mobile) */}
                        <div className="absolute top-4 bottom-4 left-6 lg:left-1/2 -ml-px w-0.5 bg-gradient-to-b from-blue-700 via-blue-500 to-blue-300" />

                        <div className="space-y-12 lg:space-y-16">
                            {milestones.map((milestone, idx) => {
                                const Icon = milestone.icon;
                                const isEven = idx % 2 === 0;

                                return (
                                    <div
                                        key={idx}
                                        className={`relative flex flex-col lg:flex-row items-start ${isEven ? 'lg:flex-row-reverse' : ''
                                            } gap-8 lg:gap-12 pl-14 lg:pl-0`}
                                    >
                                        {/* Node marker */}
                                        <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-1 flex items-center justify-center">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-700/25 border-4 border-[#F8FAFF] z-10 transition-transform duration-300 hover:scale-110">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                        </div>

                                        {/* Content Card */}
                                        <div className="w-full lg:w-[calc(50%-3rem)]">
                                            <div className="group p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                                                <div className="flex items-center justify-between gap-3 mb-3">
                                                    <span className="text-2xl font-black text-blue-700 font-mono tracking-tight">
                                                        {milestone.year}
                                                    </span>
                                                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs border border-blue-100">
                                                        {milestone.badge}
                                                    </span>
                                                </div>

                                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                                                    {milestone.title}
                                                </h3>
                                                <p className="text-xs font-semibold text-blue-600 mt-1 mb-3">
                                                    {milestone.headline}
                                                </p>

                                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                                    {milestone.description}
                                                </p>

                                                {/* Bullet Highlights */}
                                                <div className="pt-4 border-t border-slate-100 space-y-2">
                                                    {milestone.achievements.map((item, aIdx) => (
                                                        <div
                                                            key={aIdx}
                                                            className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed"
                                                        >
                                                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                                            <span>{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Placeholder spacer for opposite side on desktop */}
                                        <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner
        heading="Ready to elevate institutional intelligence with trusted AI?"
        primaryText="Speak to our leadership"
        primaryHref="/contact"
        secondaryText="Explore our solutions"
        secondaryHref="/capabilities"
      />
        </div>
    )
}

export default page