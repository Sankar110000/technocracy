import React from 'react';
import Link from 'next/link';
import {
  Cloud, Cpu, Layout, Server, Database, ShieldAlert,
  Layers, CheckCircle2, ArrowRight, ShieldCheck, Zap, Lock,
  Boxes, GitBranch, Terminal
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';

export const metadata = {
  title: 'Technology Stack — Technocracy Group',
  description: 'Powering innovation with enterprise-grade technology across cloud, AI/ML, distributed systems, and sovereign infrastructure.',
};

const techCategories = [
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    tagline: "Sovereign, hybrid, and air-gapped compute foundations",
    technologies: [
      { name: "Amazon Web Services (AWS)", role: "GovCloud, EKS, SageMaker, Bedrock integrations" },
      { name: "Google Cloud (GCP)", role: "Vertex AI, BigQuery, Sovereign Cloud solutions" },
      { name: "Microsoft Azure", role: "Azure Government, AKS, Azure OpenAI sovereign enclaves" },
      { name: "Air-Gapped Private Clouds", role: "Bare-metal Kubernetes, OpenStack offline clusters" },
    ]
  },
  {
    category: "AI, GenAI & Machine Learning",
    icon: Cpu,
    tagline: "Frontier foundation models, fine-tuning, and inference engines",
    technologies: [
      { name: "Python", role: "Core scientific compute, model training, and data pipelines" },
      { name: "PyTorch & TensorFlow", role: "Deep learning model development and tensor optimization" },
      { name: "vLLM & TensorRT-LLM", role: "Ultra-low-latency quantized model serving on GPUs" },
      { name: "Hugging Face & Transformers", role: "Pretrained weights, tokenizers, and model governance" },
      { name: "LangChain & LlamaIndex", role: "Agentic orchestration, tool-calling, and hybrid RAG" },
      { name: "Computer Vision (OpenCV / YOLO)", role: "Edge-based video analytics and facial validation" },
    ]
  },
  {
    category: "Frontend & Visualization",
    icon: Layout,
    tagline: "Responsive, accessible, and mission-critical operator consoles",
    technologies: [
      { name: "React 19 & Next.js", role: "Server components, fast client hydration, and SEO" },
      { name: "TypeScript", role: "Strict compile-time type safety across complex schemas" },
      { name: "Tailwind CSS", role: "Design system coherence and zero-runtime CSS footprint" },
      { name: "WebSockets & SSE", role: "Real-time streaming feeds for live emergency dashboards" },
      { name: "Interactive Data Viz", role: "Mapbox, Deck.gl, Recharts for spatial and tabular intel" },
    ]
  },
  {
    category: "Backend & Distributed Systems",
    icon: Server,
    tagline: "High-throughput, asynchronous microservices and APIs",
    technologies: [
      { name: "FastAPI", role: "High-speed asynchronous Python microservices for AI inference" },
      { name: "Node.js & TypeScript", role: "Event-driven orchestration, authentication, and routing" },
      { name: "Go & Rust", role: "Ultra-low-latency microservices and memory-safe cryptography" },
      { name: "gRPC & Protocol Buffers", role: "Sub-millisecond inter-service RPC communication" },
      { name: "GraphQL & REST APIs", role: "Federated schemas for modular enterprise consumption" },
    ]
  },
  {
    category: "Data & Vector Architecture",
    icon: Database,
    tagline: "Enterprise data lakes, streaming message queues, and semantic stores",
    technologies: [
      { name: "Snowflake", role: "Sovereign analytical data cloud and governed sharing" },
      { name: "PostgreSQL & pgvector", role: "ACID-compliant primary stores with embedded vector search" },
      { name: "Apache Kafka", role: "Distributed streaming log handling millions of events/sec" },
      { name: "Redis", role: "In-memory caching, rate-limiting, and distributed locks" },
      { name: "Milvus & Qdrant", role: "Dedicated high-scale vector databases for semantic retrieval" },
      { name: "ClickHouse", role: "Real-time columnar analytics for telemetry and audit logs" },
    ]
  },
  {
    category: "DevSecOps, Security & CI/CD",
    icon: ShieldAlert,
    tagline: "Zero-trust verification, automated testing, and immutable deployments",
    technologies: [
      { name: "Kubernetes (K8s)", role: "Container orchestration across multi-region & air-gapped nodes" },
      { name: "Docker", role: "Deterministic containerized builds and sandbox isolation" },
      { name: "Terraform & Helm", role: "Infrastructure-as-Code and reproducible cluster provisioning" },
      { name: "HashiCorp Vault", role: "Dynamic secret rotation and cryptographic key lifecycle" },
      { name: "Cilium (eBPF)", role: "Kernel-level zero-trust network observability and mTLS" },
      { name: "Prometheus & Grafana", role: "Continuous telemetry, SLA alerting, and model drift metrics" },
    ]
  }
];

const principles = [
  {
    icon: Lock,
    title: "Air-Gapped Sovereign Design",
    description: "Every architectural tier is tested to run entirely offline with zero mandatory egress to third-party endpoints or SaaS telemetry."
  },
  {
    icon: Zap,
    title: "Sub-Second Decision Latency",
    description: "Optimized pipelines using GPU tensor compilation and streaming WebSockets deliver insights to operators without UI lag."
  },
  {
    icon: ShieldCheck,
    title: "Continuous Zero-Trust Verification",
    description: "Mutual TLS between every service, signed container digests, and encrypted hardware enclaves protect data in-use."
  },
  {
    icon: Boxes,
    title: "Vendor & Model Agnostic",
    description: "Deploy open-source LLMs (Llama, Mistral, DeepSeek) or proprietary APIs seamlessly through unified model gateway abstractions."
  }
];

export default function TechStackPage() {
  return (
    <div className="bg-[#F8FAFF] min-h-screen">
      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Company' },
          { label: 'Technology Stack' }
        ]}
        eyebrow="ENGINEERING ARCHITECTURE"
        title="Technology Stack"
        subtitle="Powering innovation with enterprise-grade technology."
        dark={true}
      />

      {/* Architectural Philosophy Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 lg:p-12 shadow-xs">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">ENGINEERED FOR RESILIENCE</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Technology chosen for stability, auditability, and speed.
            </h2>
            <p className="mt-4 text-base lg:text-lg text-slate-600 leading-relaxed">
              In sovereign government systems and tier-1 enterprise applications, technology choices cannot rely on fleeting trends. Technocracy Group builds upon mature, battle-hardened open standards combined with frontier AI acceleration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 pt-10 border-t border-slate-100">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-5 rounded-xl bg-[#F8FAFF] border border-slate-200/60">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Categories Grid */}
      <section className="bg-[#E5EDFF] py-16 lg:py-24 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">CORE TECHNICAL MODULES</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2">
              Our Core Technology Ecosystem
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              A comprehensive view of the tools, frameworks, and infrastructure layers powering Technocracy Group deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl p-7 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 leading-snug">{cat.category}</h3>
                        <p className="text-xs text-slate-500 line-clamp-1">{cat.tagline}</p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      {cat.technologies.map((tech, techIdx) => (
                        <div key={techIdx} className="p-3 rounded-xl bg-[#F8FAFF] border border-slate-200/60">
                          <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                            {tech.name}
                          </div>
                          <p className="text-xs text-slate-600 mt-1 pl-3">
                            {tech.role}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Blueprint Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="bg-slate-900 text-white rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.25)_0%,transparent_60%)]" />
          <div className="relative max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">ENTERPRISE INTEROPERABILITY</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">
              Ready for Your Existing Legacy Systems
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              We do not ask clients to replace functioning IT investments. Our architecture operates as an intelligent overlay that connects to SAP, Oracle, SQL Server, district-level portals, and legacy mainframes via secure connectors and real-time CDC (Change Data Capture) feeds.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-md group"
              >
                Discuss Architecture With Our Team
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white rounded-xl font-semibold text-sm transition-all duration-300"
              >
                Explore Platform Suites
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Have specific security, cloud, or air-gap requirements?"
        primaryText="Talk to an architect"
        primaryHref="/contact"
        secondaryText="Schedule a demo"
        secondaryHref="/book-a-demo"
      />
    </div>
  );
}
