"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import SectionHeader from "../SectionHeader";
import {
  Shield,
  Cpu,
  Rocket,
  CheckCircle2,
  Sparkles,
  Check,
} from "lucide-react";

export interface DeliveryStage {
  stage: number;
  name: string;
  description: string;
  highlights?: string[];
}

export interface IndustryData {
  sector: string;
  route: string;
  metric?: string;
  headline?: string;
  deliveryStages?: DeliveryStage[];
}

interface HowWeDeliverProps {
  industry: IndustryData;
}

const defaultHighlights: Record<number, string[]> = {
  1: [
    "48-point AI Readiness & Governance Assessment",
    "Data quality, infrastructure & residency audit",
    "Tailored risk mitigation & compliance roadmap",
  ],
  2: [
    "Full-stack strategy, architecture & development",
    "On-premise, government cloud, or air-gapped integration",
    "Enterprise-grade security sandbox & stress tests",
  ],
  3: [
    "Zero-downtime Kubernetes & multi-cloud deployment",
    "Scale from regional clusters to national-level infrastructure",
    "Continuous real-time audit logging & operational SLAs",
  ],
};

const stageIcons: Record<number, React.ReactNode> = {
  1: <Shield className="w-5 h-5" />,
  2: <Cpu className="w-5 h-5" />,
  3: <Rocket className="w-5 h-5" />,
};

export default function HowWeDeliverSection({ industry }: HowWeDeliverProps) {
  const [activeStage, setActiveStage] = useState<number>(1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stages = useMemo(() => industry?.deliveryStages || [], [industry?.deliveryStages]);

  const scrollToStage = useCallback((stageNum: number) => {
    setActiveStage(stageNum);
    const index = stages.findIndex((s) => s.stage === stageNum);
    if (index !== -1 && cardRefs.current[index]) {
      const el = cardRefs.current[index];
      if (el) {
        const yOffset = -120;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [stages]);

  useEffect(() => {
    if (!stages.length) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const focusLine = window.innerHeight * 0.42;
          let bestStage = activeStage;
          let minDistance = Infinity;

          cardRefs.current.forEach((card, index) => {
            if (!card) return;
            const rect = card.getBoundingClientRect();
            // Check if card is visible within the viewport
            if (rect.bottom > 80 && rect.top < window.innerHeight - 80) {
              const cardCenter = rect.top + rect.height / 2;
              const distance = Math.abs(cardCenter - focusLine);
              if (distance < minDistance) {
                minDistance = distance;
                bestStage = stages[index]?.stage || index + 1;
              }
            }
          });

          if (bestStage !== activeStage) {
            setActiveStage(bestStage);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stages, activeStage]);

  if (!stages.length) return null;

  // Calculate progress height percentage for stepper rail
  const progressPercent =
    activeStage === 1 ? "15%" : activeStage === 2 ? "55%" : "100%";

  return (
    <section className="py-20 lg:py-28 bg-[#F0F5FF]/70 border-y border-blue-100/70 font-sans relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ═══════════════════════ LEFT COLUMN: STICKY STEPPER & CONTEXT ═══════════════════════ */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Implementation Roadmap"
              title="How We Deliver"
              subtitle={`Every ${industry.sector} platform is deployed through our structured 3-stage delivery lifecycle to guarantee sovereign compliance and high-availability operations.`}
              centered={false}
            />

            {/* Stepper Navigation */}
            <div className="mt-8 relative pl-8 ">
              {/* Animated Progress Fill Bar */}
              <div
                className="absolute left-1.5 top-0 w-0.5 bg-blue-600 transition-all duration-500 ease-out -z-10"
                style={{ height: progressPercent }}
              />

              <div className="space-y-6">
                {stages.map((stage) => {
                  const isActive = activeStage === stage.stage;
                  const isCompleted = activeStage > stage.stage;

                  return (
                    <button
                      key={stage.stage}
                      type="button"
                      onClick={() => scrollToStage(stage.stage)}
                      className={`group flex items-start gap-4 text-left w-full transition-all duration-300 focus:outline-none`}
                    >
                      {/* Step Indicator Dot */}
                      <span
                        className={`-ml-[41px] w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 shrink-0 ${
                          isActive
                            ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 ring-4 ring-blue-100"
                            : isCompleted
                            ? "bg-blue-100 text-blue-700 border border-blue-300"
                            : "bg-white text-slate-500 border border-slate-300"
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        ) : (
                          `0${stage.stage}`
                        )}
                      </span>

                      {/* Step Title & Subtitle */}
                      <div className="pt-0.5">
                        <h4
                          className={`text-base sm:text-lg font-bold transition-colors duration-200 ${
                            isActive
                              ? "text-slate-900"
                              : "text-slate-600 group-hover:text-slate-900"
                          }`}
                        >
                          {stage.name}
                        </h4>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* ═══════════════════════ RIGHT COLUMN: SCROLLABLE CARDS ═══════════════════════ */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-12">
            {stages.map((stage, index) => {
              const isActive = activeStage === stage.stage;
              const highlights =
                stage.highlights ||
                defaultHighlights[stage.stage] || [
                  "Comprehensive architecture and readiness mapping",
                  "Modular deployment for minimal friction",
                  "Automated auditing and continuous oversight",
                ];

              return (
                <div
                  key={stage.stage}
                  data-stage={stage.stage}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  onClick={() => scrollToStage(stage.stage)}
                  className={`relative p-8 sm:p-10 rounded-3xl transition-all duration-500 cursor-pointer ${
                    isActive
                      ? "bg-blue-600 border-2 border-blue-600 shadow-2xl shadow-blue-600/10 ring-1 ring-blue-600/20"
                      : "bg-white/90 border border-slate-200 shadow-sm opacity-75 hover:opacity-100 hover:border-slate-300"
                  }`}
                >
                  {/* Stage Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-blue-500 text-white shadow-lg shadow-blue-600/30"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {stageIcons[stage.stage] || <CheckCircle2 className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className={`text-xl sm:text-2xl font-bold text-slate-900 leading-snug ${isActive && "text-white"}`}>
                          {stage.name}
                        </h3>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border transition-colors duration-300 ${
                        isActive
                          ? "bg-blue-400 text-white border-none"
                          : "bg-slate-50 text-slate-500 border-slate-200"
                      }`}
                    >
                      Stage 0{stage.stage}
                    </span>
                  </div>

                  {/* Stage Description */}
                  <p className={`text-base ${isActive ? "text-slate-100" : "text-slate-600"} leading-relaxed font-normal`}>
                    {stage.description}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <h5 className={`text-xs font-bold uppercase tracking-widest ${isActive ? "text-slate-200" : "text-slate-400"} mb-4`}>
                      Key Deliverables & Milestones
                    </h5>
                    <div className="space-y-3">
                      {highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-blue-600 stroke-[3]" />
                          </div>
                          <span className={`text-sm font-medium ${isActive ? "text-slate-100" :"text-slate-800"} leading-tight`}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}