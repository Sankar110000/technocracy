import { 
  Building2, 
  Zap, 
  ShieldAlert, 
  GraduationCap, 
  HeartPulse, 
  Landmark 
} from "lucide-react";

export const industriesData = [
  {
    sector: "NBFC & Banking",
    route: "/industries/nbfc-banking",
    icon: <Building2 className="w-5 h-5 " />,
    pageUrl: "https://technocracygroup.com/industries/nbfc-banking",
    metric: "40% faster loan approvals",
    headline: "Loan approval shouldn't take three weeks when the underwriting decision could be made in three days.",
    keyCapabilities: [
      "Credit and fraud models that speed up the lending pipeline",
      "Compliance checks kept intact — better models, not fewer review steps",
      "Automated KYC onboarding, so paperwork isn't why a good borrower goes elsewhere"
    ],
    whatThisCovers: [
      "Credit risk and underwriting models that speed up loan approvals",
      "Real-time fraud detection across transactions and applications",
      "Automated KYC onboarding and regulatory compliance reporting",
      "Faster decisions without loosening the checks that protect the business"
    ],
    mediaAssets: {
      posterImage: "/industries/banking.jpg"
    },
    deliveryStages: [
      {
        stage: 1,
        name: "AI Readiness Assessment",
        description: "We run our proprietary 48-point readiness framework across your data quality, infrastructure, and governance dimensions before writing a line of code."
      },
      {
        stage: 2,
        name: "Build & Integrate",
        description: "Strategy, architecture, development, and deployment under one roof — with data residency options for on-premise, government cloud, or air-gapped environments."
      },
      {
        stage: 3,
        name: "Deploy & Scale",
        description: "Your platform goes live on Kubernetes and multi-cloud infrastructure, scaling from district-level dashboards to national-scale systems."
      }
    ],
    actions: {
      requestDemo: "/book-a-demo",
      viewAllIndustries: "/industries"
    }
  },
  {
    sector: "Energy",
    route: "/industries/energy",
    icon: <Zap className="w-5 h-5 " />,
    pageUrl: "https://technocracygroup.com/industries/energy",
    metric: "₹4.2Cr saved/yr",
    headline: "A turbine that fails without warning costs more than the maintenance would have — in downtime, in repair costs, and often in safety risk to the crew.",
    keyCapabilities: [
      "Predictive models that catch equipment risk early",
      "Real-time safety monitoring across active sites",
      "Load optimization tuned to each facility, not a generic industry benchmark",
      "Fewer unplanned outages, and less risk to crews handling them"
    ],
    whatThisCovers: [
      "Predictive maintenance that flags equipment risk before failure",
      "Real-time safety analytics across active energy sites",
      "Production and load optimization models tuned to site-specific conditions",
      "Fewer unplanned outages, and less risk to crews handling them"
    ],
    mediaAssets: {
      posterImage: "/industries/energy.jpg"
    },
    deliveryStages: [
      {
        stage: 1,
        name: "AI Readiness Assessment",
        description: "We run our proprietary 48-point readiness framework across your data quality, infrastructure, and governance dimensions before writing a line of code."
      },
      {
        stage: 2,
        name: "Build & Integrate",
        description: "Strategy, architecture, development, and deployment under one roof — with data residency options for on-premise, government cloud, or air-gapped environments."
      },
      {
        stage: 3,
        name: "Deploy & Scale",
        description: "Your platform goes live on Kubernetes and multi-cloud infrastructure, scaling from district-level dashboards to national-scale systems."
      }
    ],
    actions: {
      requestDemo: "/book-a-demo",
      viewAllIndustries: "/industries"
    }
  },
  {
    sector: "Police & Security",
    route: "/industries/police-security",
    icon: <ShieldAlert className="w-5 h-5 " />,
    pageUrl: "https://technocracygroup.com/industries/police-security",
    metric: "Active deployments",
    headline: "Response time depends on information arriving before the officer does.",
    keyCapabilities: [
      "Camera feeds, incident reports, and unit availability in one real-time view",
      "Shows where incidents are clustering and which resources are free",
      "Dispatch decisions based on what's happening now, not ten minutes ago",
      "Every decision logged automatically, for accountability as much as operations"
    ],
    whatThisCovers: [
      "Real-time surveillance analytics across camera networks",
      "Predictive policing models to allocate resources proactively",
      "Digital incident response with full audit trails",
      "Decisions based on current conditions, not information that's already stale"
    ],
    mediaAssets: {
      posterImage: "/industries/police.jpg"
    },
    deliveryStages: [
      {
        stage: 1,
        name: "AI Readiness Assessment",
        description: "We run our proprietary 48-point readiness framework across your data quality, infrastructure, and governance dimensions before writing a line of code."
      },
      {
        stage: 2,
        name: "Build & Integrate",
        description: "Strategy, architecture, development, and deployment under one roof — with data residency options for on-premise, government cloud, or air-gapped environments."
      },
      {
        stage: 3,
        name: "Deploy & Scale",
        description: "Your platform goes live on Kubernetes and multi-cloud infrastructure, scaling from district-level dashboards to national-scale systems."
      }
    ],
    actions: {
      requestDemo: "/book-a-demo",
      viewAllIndustries: "/industries"
    }
  },
  {
    sector: "Education",
    route: "/industries/education",
    icon: <GraduationCap className="w-5 h-5 " />,
    pageUrl: "https://technocracygroup.com/industries/education",
    metric: "12K schools",
    headline: "A classroom of thirty students doesn't move at one pace, and a district's administration shouldn't run on the same static reports every term.",
    keyCapabilities: [
      "Learning tools that adjust to individual students",
      "Each school's mix of resourcing, attendance, and student needs, not one uniform district",
      "Surfaces which schools or classrooms are falling behind before term-end results",
      "Gives administrators time to intervene instead of reporting after the fact"
    ],
    whatThisCovers: [
      "Personalized learning paths adapted to each student's pace",
      "Automated administration frees teachers to focus on teaching",
      "District-level analytics for outcomes and intervention planning",
      "Early-warning signals instead of end-of-term confirmation"
    ],
    mediaAssets: {
      posterImage: "/industries/education.jpg"
    },
    deliveryStages: [
      {
        stage: 1,
        name: "AI Readiness Assessment",
        description: "We run our proprietary 48-point readiness framework across your data quality, infrastructure, and governance dimensions before writing a line of code."
      },
      {
        stage: 2,
        name: "Build & Integrate",
        description: "Strategy, architecture, development, and deployment under one roof — with data residency options for on-premise, government cloud, or air-gapped environments."
      },
      {
        stage: 3,
        name: "Deploy & Scale",
        description: "Your platform goes live on Kubernetes and multi-cloud infrastructure, scaling from district-level dashboards to national-scale systems."
      }
    ],
    actions: {
      requestDemo: "/book-a-demo",
      viewAllIndustries: "/industries"
    }
  },
  {
    sector: "Healthcare",
    route: "/industries/healthcare",
    icon: <HeartPulse className="w-5 h-5 " />,
    pageUrl: "https://technocracygroup.com/industries/healthcare",
    metric: "6 hospitals live",
    headline: "A hospital doesn't need more dashboards — it needs fewer things falling through the cracks between admission and discharge.",
    keyCapabilities: [
      "Flags resourcing issues before they become a bed shortage",
      "Takes repetitive paperwork off staff who'd rather be treating patients",
      "Predictive insight into admissions and resource planning",
      "Fewer patients waiting on an unprocessed form or an outdated bed count"
    ],
    whatThisCovers: [
      "Predictive insights for patient admissions and resource planning",
      "Automation that reduces administrative load on clinical staff",
      "Personalized care pathways backed by patient data analytics",
      "Fewer administrative gaps between admission, treatment, and discharge"
    ],
    mediaAssets: {
      posterImage: "/industries/healthcare.jpg"
    },
    deliveryStages: [
      {
        stage: 1,
        name: "AI Readiness Assessment",
        description: "We run our proprietary 48-point readiness framework across your data quality, infrastructure, and governance dimensions before writing a line of code."
      },
      {
        stage: 2,
        name: "Build & Integrate",
        description: "Strategy, architecture, development, and deployment under one roof — with data residency options for on-premise, government cloud, or air-gapped environments."
      },
      {
        stage: 3,
        name: "Deploy & Scale",
        description: "Your platform goes live on Kubernetes and multi-cloud infrastructure, scaling from district-level dashboards to national-scale systems."
      }
    ],
    actions: {
      requestDemo: "/book-a-demo",
      viewAllIndustries: "/industries"
    }
  },
  {
    sector: "Government",
    route: "/industries/government",
    icon: <Landmark className="w-5 h-5 " />,
    pageUrl: "https://technocracygroup.com/industries/government",
    metric: "18+ deployments",
    headline: "Public sector work comes with constraints most vendors design around instead of for. We build for them from the start — retrofitting compliance after deployment is how projects stall in audit.",
    keyCapabilities: [
      "Data residency rules respected from day one",
      "Offline access for low-connectivity areas",
      "Sign-off chains that cross departments",
      "Stricter data-handling rules designed in, not retrofitted before audit",
      "Works in a district office with patchy connectivity as well as in a capital city"
    ],
    whatThisCovers: [
      "Data residency and sovereignty controls built in from day one",
      "Multi-department, multi-stakeholder access with granular permissions",
      "Offline-capable deployments for low-connectivity and air-gapped environments",
      "Built to pass audit the first time, not after a round of remediation"
    ],
    mediaAssets: {
      posterImage: "/industries/government.jpg"
    },
    deliveryStages: [
      {
        stage: 1,
        name: "AI Readiness Assessment",
        description: "We run our proprietary 48-point readiness framework across your data quality, infrastructure, and governance dimensions before writing a line of code."
      },
      {
        stage: 2,
        name: "Build & Integrate",
        description: "Strategy, architecture, development, and deployment under one roof — with data residency options for on-premise, government cloud, or air-gapped environments."
      },
      {
        stage: 3,
        name: "Deploy & Scale",
        description: "Your platform goes live on Kubernetes and multi-cloud infrastructure, scaling from district-level dashboards to national-scale systems."
      }
    ],
    actions: {
      requestDemo: "/book-a-demo",
      viewAllIndustries: "/industries"
    }
  }
];