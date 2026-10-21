import {
  Compass,
  BriefcaseBusiness,
  ShieldCheck,
  Database,
  Warehouse,
  CloudCog,
  Workflow,
  ServerCog,
  ShieldAlert,
} from "lucide-react";

export const servicesList = [
  {
    pageUrl: "https://technocracygroup.com/capabilities/strategy-advisory",
    serviceName: "Strategy & Advisory Services",
    route: "/services/strategy-advisory",
    tagline: "AI adoption roadmaps built on a current-state assessment.",
    overview: "AI adoption roadmaps built on a current-state assessment. For leaders deciding where AI and technology should go first, starting with an honest look at what your systems can do today and ending with a roadmap your own team can run.",
    corePhilosophy: "Roadmaps written without the people who use the systems fail on the ground, and technology spend should always be tied to outcomes you can actually point to.",
    keyCapabilities: [
      "Roadmaps built around your existing capability gaps, not a template",
      "Technology investment tied to a measurable business outcome",
      "Assessment work done with your team, not handed down to them",
      "Plans built to survive contact with how the organization actually operates"
    ],
    icon: <Compass />,
    mediaAssets: {
      videoPreview: "",
      posterImage: "/services/strategy-advisory.jpg"
    },
    atGlance: {
      whatItIs: "An AI adoption roadmap built from your current systems and gaps.",
      whoItsFor: "Leaders deciding where to invest in AI and technology.",
      youGet: "A prioritised plan tied to a business outcome.",
      startsWith: "A current-state assessment run with your team."
    },
    theProblem: {
      heading: "We don't know where to start with AI",
      painPoints: [
        "Roadmaps written without the people who use the systems fail on the ground",
        "Technology spend with no outcome anyone can point to",
        "No clear view of what your systems can do today"
      ]
    },
    howWeEngage: {
      heading: "What working with us looks like",
      steps: [
        {
          stepNumber: 1,
          title: "Assess where you are",
          description: "We sit with operations staff and department heads to find where the friction actually is and what your systems can do today."
        },
        {
          stepNumber: 2,
          title: "Map the gaps to a plan",
          description: "Gaps are ranked and matched to the technology that closes them, so each investment has an owner and an outcome."
        },
        {
          stepNumber: 3,
          title: "Hand over a roadmap",
          description: "You receive a roadmap your team can run, with the reasoning behind each priority."
        }
      ]
    },
    regulatedCompliance: {
      heading: "Security and compliance, stated up front",
      certifications: [
        "ISO 27001",
        "SOC 2 Type II",
        "DPDP Act alignment",
        "On-premise, government cloud and air-gapped deployment"
      ]
    },
    faqs: [
      {
        question: "What do we get at the end?",
        answer: "A roadmap that ties each technology investment to a business outcome, built from the assessment of your own systems and teams."
      },
      {
        question: "Do you work with our staff or only leadership?",
        answer: "Both. The assessment is done with the people closest to the work, so the roadmap reflects what happens on the ground."
      },
      {
        question: "Is the roadmap a template?",
        answer: "No. It is built around your existing capability gaps, not a generic plan."
      },
      {
        question: "Can you also build what the roadmap recommends?",
        answer: "Yes. Our other services cover data, cloud, automation, assurance and managed operations, so the plan can move straight into delivery."
      }
    ],
    relatedServices: [
      {
        name: "Consulting Services",
        route: "/services/consulting",
        description: "Stakeholder-led assessments turned into measurable results."
      },
      {
        name: "AI Assurance & Governance",
        route: "/services/ai-assurance-governance",
        description: "Assess, validate and continuously govern AI systems before and after deployment."
      },
      {
        name: "AI & Data Engineering",
        route: "/services/ai-data-engineering",
        description: "Data platforms and pipelines that make your data AI-ready."
      }
    ],
    actions: {
      talkToExpert: "/book-a-demo",
      tryLiveDemo: "/services"
    }
  },
  {
    pageUrl: "https://technocracygroup.com/services/consulting",
    serviceName: "Consulting Services",
    route: "/services/consulting",
    tagline: "Stakeholder-led assessments turned into measurable results.",
    overview: "Stakeholder-led assessments turned into measurable results. For teams with a broken process and no clear fix, we diagnose inside your existing systems before recommending anything, with recommendations scoped to the resources you actually have.",
    corePhilosophy: "Reports that sit in shared drives don't help anyone; diagnosis must precede recommendation, ensuring solutions are buildable and practical.",
    keyCapabilities: [
      "Diagnosis before recommendation — no default answer going in",
      "Solutions scoped to your systems, not a generic playbook",
      "Engagements measured by outcome, not by hours billed",
      "Recommendations built to be implementable with the resources you actually have"
    ],
    icon: <BriefcaseBusiness />,
    mediaAssets: {
      videoPreview: "",
      posterImage: "/services/consultancy.jpg"
    },
    atGlance: {
      whatItIs: "Hands-on consulting that diagnoses the problem before recommending anything.",
      whoItsFor: "Teams with a broken process who don't want a report that sits in a drive.",
      youGet: "Recommendations you can implement with the resources you have.",
      startsWith: "A diagnosis inside your existing systems."
    },
    theProblem: {
      heading: "Our consulting reports never get acted on",
      painPoints: [
        "Reports that sit in a shared drive and are never acted on",
        "Recommendations written for a hypothetical organisation, not yours",
        "New software bought when the real friction is somewhere else"
      ]
    },
    howWeEngage: {
      heading: "What working with us looks like",
      steps: [
        {
          stepNumber: 1,
          title: "Diagnose first",
          description: "We work inside your existing systems and find where the friction is, with no default answer going in."
        },
        {
          stepNumber: 2,
          title: "Scope the fix",
          description: "We recommend what to build, replace or leave alone, sized to your systems and resources."
        },
        {
          stepNumber: 3,
          title: "Stay close to delivery",
          description: "We stay near implementation so the recommendations are buildable, and we measure by outcome."
        }
      ]
    },
    regulatedCompliance: {
      heading: "Security and compliance, stated up front",
      certifications: [
        "ISO 27001",
        "SOC 2 Type II",
        "DPDP Act alignment",
        "On-premise, government cloud and air-gapped deployment"
      ]
    },
    faqs: [
      {
        question: "Will you recommend new software?",
        answer: "Only if the diagnosis calls for it. The fix is rarely new software, so we look at what to build, replace or leave alone."
      },
      {
        question: "How is success measured?",
        answer: "By outcome, not by hours billed. We agree what a better result looks like before the work starts."
      },
      {
        question: "Are the recommendations realistic for us?",
        answer: "They are written for your organisation and the resources you actually have, not for a hypothetical one."
      },
      {
        question: "Can you help implement them?",
        answer: "Yes. We stay close enough to implementation that the recommendations are buildable, and our delivery services can take them on."
      }
    ],
    relatedServices: [
      {
        name: "AI Assurance & Governance",
        route: "/services/ai-assurance-governance",
        description: "Assess, validate and continuously govern AI systems before and after deployment."
      },
      {
        name: "AI & Data Engineering",
        route: "/services/ai-data-engineering",
        description: "Data platforms and pipelines that make your data AI-ready."
      },
      {
        name: "Data Warehousing",
        route: "/services/data-warehousing",
        description: "Your data from every system, in one place and ready for reports."
      }
    ],
    actions: {
      talkToExpert: "/book-a-demo",
      tryLiveDemo: "/services"
    }
  },
  {
    pageUrl: "https://technocracygroup.com/services/ai-assurance-governance",
    serviceName: "AI Assurance & Governance",
    route: "/services/ai-assurance-governance",
    tagline: "Assess, validate and continuously govern AI systems before and after deployment.",
    overview: "Responsible, secure and deployment-ready AI. Assess, validate and continuously govern your AI systems before and after they go live, ensuring your AI is safe, controlled, and compliant for how you plan to use it.",
    corePhilosophy: "Moving AI from experiment to production takes more than a model that works; it requires explicit visibility into risk, guardrails, testing, and evidence.",
    keyCapabilities: [
      "Structured assurance of AI use cases across risk, controls, testing and evidence",
      "A clear deployment position: ready, ready with conditions, or not ready",
      "Prioritized remediation actions for every identified gap",
      "A starting point for ongoing, enterprise-wide AI governance"
    ],
    icon: <ShieldCheck />,
    mediaAssets: {
      videoPreview: "",
      posterImage: "/services/ai.jpg"
    },
    atGlance: {
      whatItIs: "Independent assessment and governance of AI systems before and after deployment.",
      whoItsFor: "Organisations that must show their AI is safe, controlled and compliant.",
      youGet: "A clear deployment position and prioritised remediation actions.",
      startsWith: "An AI assurance assessment of one use case."
    },
    theProblem: {
      heading: "We need to prove our AI is safe",
      painPoints: [
        "AI systems moved to production on the strength of a working model alone",
        "No evidence that controls are in place and effective",
        "No clear answer to whether a system is ready to deploy"
      ]
    },
    howWeEngage: {
      heading: "Four phases, starting with one AI use case",
      steps: [
        {
          stepNumber: 1,
          title: "Discover & assess",
          description: "Understand the use case and its risks."
        },
        {
          stepNumber: 2,
          title: "Control & test",
          description: "Map guardrails and review testing."
        },
        {
          stepNumber: 3,
          title: "Evidence & assure",
          description: "Validate the evidence, then judge control effectiveness and residual risk."
        },
        {
          stepNumber: 4,
          title: "Report & improve",
          description: "Deliver the AI Assurance Report, the deployment position and a remediation plan."
        }
      ]
    },
    regulatedCompliance: {
      heading: "Security and compliance, stated up front",
      certifications: [
        "ISO 27001",
        "SOC 2 Type II",
        "DPDP Act alignment",
        "On-premise, government cloud and air-gapped deployment"
      ]
    },
    faqs: [
      {
        question: "How is this different from model testing?",
        answer: "Model testing asks whether the model works. AI assurance asks whether it is governed and controlled for how you will actually use it."
      },
      {
        question: "What is the outcome?",
        answer: "A clear deployment position: ready, ready with conditions, or not ready, plus prioritised actions for each gap."
      },
      {
        question: "Is it a one-off?",
        answer: "It can be the starting point for ongoing, enterprise-wide AI governance."
      },
      {
        question: "What do you review?",
        answer: "AI use cases across risk, controls, testing and evidence."
      }
    ],
    relatedServices: [
      {
        name: "AI & Data Engineering",
        route: "/services/ai-data-engineering",
        description: "Data platforms and pipelines that make your data AI-ready."
      },
      {
        name: "Data Warehousing",
        route: "/services/data-warehousing",
        description: "Your data from every system, in one place and ready for reports."
      },
      {
        name: "Cloud & DevSecOps Services",
        route: "/services/cloud-devsecops",
        description: "Cloud migration and CI/CD with security built in."
      }
    ],
    actions: {
      talkToExpert: "/contact",
      tryLiveDemo: "/book-a-demo"
    }
  },
  {
    pageUrl: "https://technocracygroup.com/services/ai-data-engineering",
    serviceName: "AI & Data Engineering",
    route: "/services/ai-data-engineering",
    tagline: "Data platforms and pipelines that make your data AI-ready.",
    overview: "Data platforms and pipelines that make your data AI-ready. For teams whose AI plans stall on messy or scattered data, we unify, clean, and govern data across disconnected systems so models can reliably rely on them.",
    corePhilosophy: "AI projects usually stall on the data, not the model. Building a clean, governed foundation early decides whether the initiative succeeds under production load.",
    keyCapabilities: [
      "Scalable data platforms and cloud data warehouses built for AI",
      "Integration pipelines that unify data across disconnected systems",
      "Raw data transformed into reliable, actionable business intelligence",
      "Governance built in early so the foundation holds up under production load"
    ],
    icon: <Database />,
    mediaAssets: {
      videoPreview: "",
      posterImage: "/services/ai.jpg"
    },
    atGlance: {
      whatItIs: "Data platforms and pipelines that make your data ready for AI.",
      whoItsFor: "Teams whose AI plans are held back by messy or scattered data.",
      youGet: "A foundation of data you can trust.",
      startsWith: "A look at your sources, formats and governance."
    },
    theProblem: {
      heading: "Our data isn't ready for AI",
      painPoints: [
        "Duplicate records and inconsistent formats across systems",
        "Fields that mean different things in different departments",
        "AI projects that stall on the data, not the model"
      ]
    },
    howWeEngage: {
      heading: "What working with us looks like",
      steps: [
        {
          stepNumber: 1,
          title: "Audit the data",
          description: "We find duplicates, inconsistent formats and fields that mean different things in different departments."
        },
        {
          stepNumber: 2,
          title: "Build the pipeline",
          description: "We integrate disconnected systems into a scalable platform or cloud warehouse, with governance built in early."
        },
        {
          stepNumber: 3,
          title: "Make it usable",
          description: "Raw data becomes reliable business intelligence that AI models can work from."
        }
      ]
    },
    regulatedCompliance: {
      heading: "Security and compliance, stated up front",
      certifications: [
        "ISO 27001",
        "SOC 2 Type II",
        "DPDP Act alignment",
        "On-premise, government cloud and air-gapped deployment"
      ]
    },
    faqs: [
      {
        question: "Why fix the data before building AI?",
        answer: "AI projects usually stall on the data, not the model. A clean, governed foundation decides whether the project works."
      },
      {
        question: "Do you replace our existing systems?",
        answer: "No. We integrate data across your disconnected systems into one platform."
      },
      {
        question: "Where does governance fit?",
        answer: "It is built in early, so the foundation holds up under production load."
      },
      {
        question: "Can the platform run in a government cloud?",
        answer: "Yes, we support on-premise, government cloud and air-gapped options. Details are scoped with you."
      }
    ],
    relatedServices: [
      {
        name: "Data Warehousing",
        route: "/services/data-warehousing",
        description: "Your data from every system, in one place and ready for reports."
      },
      {
        name: "Cloud & DevSecOps Services",
        route: "/services/cloud-devsecops",
        description: "Cloud migration and CI/CD with security built in."
      },
      {
        name: "Intelligent Automation",
        route: "/services/intelligent-automation",
        description: "AI, RPA and OCR for repetitive, document-heavy processes."
      }
    ],
    actions: {
      talkToExpert: "/book-a-demo",
      tryLiveDemo: "/services"
    }
  },
  {
    pageUrl: "https://technocracygroup.com/services/data-warehousing",
    serviceName: "Data Warehousing",
    route: "/services/data-warehousing",
    tagline: "Your data from every system, in one place and ready for reports.",
    overview: "One trusted place for your data. Integrated pipelines and a central warehouse, so reports, analytics, and AI all work from the same numbers without manual reconciliation.",
    corePhilosophy: "When every team has a different number, hours are wasted checking spreadsheets. Centralizing data creates a single version of the truth everyone trusts.",
    keyCapabilities: [
      "Data architecture designed for how your teams ask questions",
      "Integrated pipelines pulling data from existing systems on a schedule",
      "Central storage with names, formats and figures that match across teams",
      "Role-based access governance to secure sensitive information"
    ],
    icon: <Warehouse />,
    mediaAssets: {
      videoPreview: "",
      posterImage: "/services/data-warehousing.jpg"
    },
    atGlance: {
      whatItIs: "A central warehouse fed by pipelines from the systems you already run.",
      whoItsFor: "Teams that need one trusted answer from many sources.",
      youGet: "Consistent, current data behind your reports, analytics and AI.",
      startsWith: "A list of your sources and the questions they must answer."
    },
    theProblem: {
      heading: "Every team has a different number",
      painPoints: [
        "Hours spent copying and checking data between systems",
        "Reports that disagree because each team counts differently",
        "Dashboards that go stale between manual refreshes"
      ]
    },
    howWeEngage: {
      heading: "Four steps from scattered data to trusted reports",
      steps: [
        {
          stepNumber: 1,
          title: "Understand the sources",
          description: "List the systems, formats and owners, and agree which questions the warehouse must answer."
        },
        {
          stepNumber: 2,
          title: "Design and build",
          description: "Design the warehouse and build the pipelines that load and tidy the data."
        },
        {
          stepNumber: 3,
          title: "Govern and secure",
          description: "Set roles, access rules and quality checks, so the data stays trustworthy."
        },
        {
          stepNumber: 4,
          title: "Serve analytics",
          description: "Connect dashboards, reports and AI work to the warehouse, and keep it refreshed."
        }
      ]
    },
    regulatedCompliance: {
      heading: "Security and compliance, stated up front",
      certifications: [
        "ISO 27001",
        "SOC 2 Type II",
        "DPDP Act alignment",
        "On-premise, government cloud and air-gapped deployment"
      ]
    },
    faqs: [
      {
        question: "Do we have to replace our existing systems?",
        answer: "No. Data is pulled in from the tools you already run."
      },
      {
        question: "How current are the reports?",
        answer: "The warehouse refreshes on a schedule, so reports stay current without manual work."
      },
      {
        question: "Who can see the data?",
        answer: "Access is set by role, so people see what they need and nothing more."
      },
      {
        question: "Is it a foundation for AI?",
        answer: "Yes. Clean, consistent data is what dashboards, forecasting and AI models need to work from."
      }
    ],
    relatedServices: [
      {
        name: "Cloud & DevSecOps Services",
        route: "/services/cloud-devsecops",
        description: "Cloud migration and CI/CD with security built in."
      },
      {
        name: "Intelligent Automation",
        route: "/services/intelligent-automation",
        description: "AI, RPA and OCR for repetitive, document-heavy processes."
      },
      {
        name: "Managed Services",
        route: "/services/managed-services",
        description: "Infrastructure, applications, cloud and security, run end to end."
      }
    ],
    actions: {
      talkToExpert: "/contact",
      tryLiveDemo: "/book-a-demo"
    }
  },
  {
    pageUrl: "https://technocracygroup.com/services/cloud-devsecops",
    serviceName: "Cloud & DevSecOps Services",
    route: "/services/cloud-devsecops",
    tagline: "Cloud migration and CI/CD with security built in.",
    overview: "Cloud migration and CI/CD with security built in. For teams moving to the cloud or releasing too slowly and too riskily, we migrate workloads and rebuild delivery pipelines so security checks run with every release.",
    corePhilosophy: "A straight lift-and-shift merely recreates old bottlenecks at a higher cloud bill; true migration requires rebuilding deployment pipelines around modern cloud automation.",
    keyCapabilities: [
      "Cloud migration and application modernization end to end",
      "CI/CD automation and containerization for faster, safer releases",
      "Security integrated into infrastructure, not bolted on afterward",
      "Deployment pipelines rebuilt, not just relocated to new servers"
    ],
    icon: <CloudCog />,
    mediaAssets: {
      videoPreview: "",
      posterImage: "/services/cloud.jpg"
    },
    atGlance: {
      whatItIs: "Cloud migration and CI/CD with security built in.",
      whoItsFor: "Teams moving to the cloud or shipping too slowly and too risky.",
      youGet: "Pipelines that release faster and more safely.",
      startsWith: "A review of how you deploy today."
    },
    theProblem: {
      heading: "Our releases are slow and risky",
      painPoints: [
        "A lift-and-shift that recreates the same bottlenecks at a higher bill",
        "Releases that are slow, manual and risky",
        "Security treated as a separate audit at the end"
      ]
    },
    howWeEngage: {
      heading: "What working with us looks like",
      steps: [
        {
          stepNumber: 1,
          title: "Review how you deploy",
          description: "We look at the current release process and the bottlenecks a straight move would carry over."
        },
        {
          stepNumber: 2,
          title: "Migrate and rebuild",
          description: "We move workloads and rebuild the pipeline around the cloud, with automated testing and containers."
        },
        {
          stepNumber: 3,
          title: "Build security in",
          description: "Security checks run with every release instead of as a separate audit step."
        }
      ]
    },
    regulatedCompliance: {
      heading: "Security and compliance, stated up front",
      certifications: [
        "ISO 27001",
        "SOC 2 Type II",
        "DPDP Act alignment",
        "On-premise, government cloud and air-gapped deployment"
      ]
    },
    faqs: [
      {
        question: "Is this just lift-and-shift?",
        answer: "No. A straight move recreates the same bottlenecks, so we rebuild the deployment pipeline around the cloud."
      },
      {
        question: "What does DevSecOps add?",
        answer: "Security is integrated into infrastructure and runs with every release, not bolted on afterward."
      },
      {
        question: "Do you modernise applications too?",
        answer: "Yes. Cloud migration and application modernisation are covered end to end."
      },
      {
        question: "Can you run it after migration?",
        answer: "Yes. Our Managed Services can operate the environment once it is live."
      }
    ],
    relatedServices: [
      {
        name: "Intelligent Automation",
        route: "/services/intelligent-automation",
        description: "AI, RPA and OCR for repetitive, document-heavy processes."
      },
      {
        name: "Managed Services",
        route: "/services/managed-services",
        description: "Infrastructure, applications, cloud and security, run end to end."
      },
      {
        name: "Cyber Security",
        route: "/services/cyber-security",
        description: "Threat detection, security operations and incident response."
      }
    ],
    actions: {
      talkToExpert: "/book-a-demo",
      tryLiveDemo: "/services"
    }
  },
  {
    pageUrl: "https://technocracygroup.com/services/intelligent-automation",
    serviceName: "Intelligent Automation",
    route: "/services/intelligent-automation",
    tagline: "AI, RPA and OCR for repetitive, document-heavy processes.",
    overview: "AI, RPA and OCR for repetitive, document-heavy processes. For teams still moving data between systems by hand, we combine automation tools so manual work takes minutes instead of an afternoon.",
    corePhilosophy: "Automation projects fail when one tool is forced onto every problem; matching RPA for rules, OCR for documents, and AI for judgment calls solves the friction.",
    keyCapabilities: [
      "AI and RPA combined to automate repetitive, manual processes",
      "OCR-driven workflow automation for document-heavy operations",
      "Improved accuracy and faster service delivery across the board",
      "The right tool matched to each step, not one tool forced onto everything"
    ],
    icon: <Workflow />,
    mediaAssets: {
      videoPreview: "",
      posterImage: "/services/automation.jpg"
    },
    atGlance: {
      whatItIs: "AI, RPA and OCR applied to repetitive, document-heavy work.",
      whoItsFor: "Teams still copying data between systems by hand.",
      youGet: "Faster, more accurate processes that need less checking.",
      startsWith: "Mapping one real process end to end."
    },
    theProblem: {
      heading: "Manual processes are slowing us down",
      painPoints: [
        "Someone copying data between systems that should already talk",
        "One tool forced onto every problem",
        "Document-heavy processes that eat whole afternoons"
      ]
    },
    howWeEngage: {
      heading: "What working with us looks like",
      steps: [
        {
          stepNumber: 1,
          title: "Map the process",
          description: "We map the actual process first, step by step, to see where the manual effort is."
        },
        {
          stepNumber: 2,
          title: "Match the right tool",
          description: "RPA for rule-based tasks, OCR for documents, AI where a judgment call is needed."
        },
        {
          stepNumber: 3,
          title: "Automate and hand over",
          description: "The workflow goes live and your team takes it on, with accuracy and speed visible."
        }
      ]
    },
    regulatedCompliance: {
      heading: "Security and compliance, stated up front",
      certifications: [
        "ISO 27001",
        "SOC 2 Type II",
        "DPDP Act alignment",
        "On-premise, government cloud and air-gapped deployment"
      ]
    },
    faqs: [
      {
        question: "When do you use RPA, OCR or AI?",
        answer: "RPA for rule-based repetitive tasks, OCR for pulling data from documents, and AI where a judgment call is needed."
      },
      {
        question: "Why do automation projects fail?",
        answer: "Often because one tool is forced to handle everything. We map the process first and match each step to the right tool."
      },
      {
        question: "Which processes suit this?",
        answer: "Repetitive, manual and document-heavy ones, such as moving data between systems that should already talk."
      },
      {
        question: "Does it replace our staff?",
        answer: "It removes repetitive work so people can spend time on tasks that need judgment."
      }
    ],
    relatedServices: [
      {
        name: "Managed Services",
        route: "/services/managed-services",
        description: "Infrastructure, applications, cloud and security, run end to end."
      },
      {
        name: "Cyber Security",
        route: "/services/cyber-security",
        description: "Threat detection, security operations and incident response."
      },
      {
        name: "Strategy & Advisory Services",
        route: "/services/strategy-advisory",
        description: "AI adoption roadmaps built on a current-state assessment."
      }
    ],
    actions: {
      talkToExpert: "/book-a-demo",
      tryLiveDemo: "/services"
    }
  },
  {
    pageUrl: "https://technocracygroup.com/services/managed-services",
    serviceName: "Managed Services",
    route: "/services/managed-services",
    tagline: "Infrastructure, applications, cloud and security, run end to end.",
    overview: "Infrastructure, applications, cloud and security, run end to end. For teams tired of firefighting infrastructure and outages, we monitor, patch, and maintain IT environments around the clock so problems are caught early.",
    corePhilosophy: "True managed operations shift teams from reactive firefighting to proactive maintenance, catching issues before users ever notice an outage.",
    keyCapabilities: [
      "End-to-end management of infrastructure, applications, and cloud",
      "Proactive monitoring and maintenance, not just reactive support",
      "Reduced operational overhead so your teams focus on core priorities",
      "Catching problems early before they become critical incidents"
    ],
    icon: <ServerCog />,
    mediaAssets: {
      videoPreview: "",
      posterImage: "/services/managed-service.jpg"
    },
    atGlance: {
      whatItIs: "Round-the-clock monitoring and upkeep of your IT, cloud and security.",
      whoItsFor: "Teams that want to stop firefighting and focus on core priorities.",
      youGet: "Proactive maintenance, so problems are caught early.",
      startsWith: "A review of your current environment."
    },
    theProblem: {
      heading: "We need someone to run it for us",
      painPoints: [
        "Outages that customers notice before your team does",
        "Patches that wait until they become vulnerabilities",
        "Internal teams stuck firefighting instead of moving the business forward"
      ]
    },
    howWeEngage: {
      heading: "What working with us looks like",
      steps: [
        {
          stepNumber: 1,
          title: "Review the environment",
          description: "We map your infrastructure, applications, cloud and security posture, and agree what we will run."
        },
        {
          stepNumber: 2,
          title: "Take over operations",
          description: "We monitor, patch and maintain around the clock, flagging issues before users notice."
        },
        {
          stepNumber: 3,
          title: "Keep it improving",
          description: "We report on what was caught and recommend changes, so the environment keeps getting steadier."
        }
      ]
    },
    regulatedCompliance: {
      heading: "Security and compliance, stated up front",
      certifications: [
        "ISO 27001",
        "SOC 2 Type II",
        "DPDP Act alignment",
        "On-premise, government cloud and air-gapped deployment"
      ]
    },
    faqs: [
      {
        question: "What is covered?",
        answer: "Infrastructure, applications, cloud systems and security posture, managed end to end."
      },
      {
        question: "Is support only reactive?",
        answer: "No. The focus is proactive monitoring and maintenance, catching outages, patches and slowdowns before they become incidents."
      },
      {
        question: "What happens to our internal IT team?",
        answer: "They are freed from day-to-day firefighting to work on what moves the business forward."
      },
      {
        question: "Can this run in our own environment?",
        answer: "We support on-premise, government cloud and air-gapped deployment options. Details are scoped with you."
      }
    ],
    relatedServices: [
      {
        name: "Cyber Security",
        route: "/services/cyber-security",
        description: "Threat detection, security operations and incident response."
      },
      {
        name: "Strategy & Advisory Services",
        route: "/services/strategy-advisory",
        description: "AI adoption roadmaps built on a current-state assessment."
      },
      {
        name: "Consulting Services",
        route: "/services/consulting",
        description: "Stakeholder-led assessments turned into measurable results."
      }
    ],
    actions: {
      talkToExpert: "/book-a-demo",
      tryLiveDemo: "/services"
    }
  },
  {
    pageUrl: "https://technocracygroup.com//cyber-security",
    serviceName: "Cyber Security",
    route: "/services/cyber-security",
    tagline: "Threat detection, security operations and incident response.",
    overview: "See threats sooner. Respond with a plan. Threat detection, security operations, risk management, and incident response built around the way your organization actually runs.",
    corePhilosophy: "Security should support delivery rather than slow it down; alerts must be turned into decisions and response plans must be rehearsed before incidents occur.",
    keyCapabilities: [
      "Threat detection and security operations that turn alerts into decisions",
      "Vulnerability assessment with fixes ranked by risk",
      "Data protection and access control applied where the data lives",
      "A rehearsed incident response plan, not an improvised one"
    ],
    icon: <ShieldAlert />,
    mediaAssets: {
      videoPreview: "",
      posterImage: "/services/cyber-security.jpg"
    },
    atGlance: {
      whatItIs: "A security programme covering detection, operations, risk, data protection and response.",
      whoItsFor: "Organisations that hold sensitive or citizen data and must show it is protected.",
      youGet: "Earlier warning, ranked risks and a rehearsed response plan.",
      startsWith: "A review of your environment, assets and exposure."
    },
    theProblem: {
      heading: "Threats reach us before we see them",
      painPoints: [
        "Alerts pile up and the important ones are missed",
        "Known weaknesses stay open because nobody has ranked them",
        "No agreed plan for the first hour of an incident"
      ]
    },
    howWeEngage: {
      heading: "Four steps from first review to steady protection",
      steps: [
        {
          stepNumber: 1,
          title: "Assess",
          description: "Map your assets, data and exposure, and find the gaps worth closing first."
        },
        {
          stepNumber: 2,
          title: "Protect",
          description: "Put controls in place: hardening, access, encryption and secure configuration."
        },
        {
          stepNumber: 3,
          title: "Monitor",
          description: "Watch for threats and new weaknesses, and tune detection to your environment."
        },
        {
          stepNumber: 4,
          title: "Respond",
          description: "Contain incidents, restore service and feed what was learned back into the controls."
        }
      ]
    },
    regulatedCompliance: {
      heading: "Security and compliance, stated up front",
      certifications: [
        "ISO 27001",
        "SOC 2 Type II",
        "DPDP Act alignment",
        "On-premise, government cloud and air-gapped deployment"
      ]
    },
    faqs: [
      {
        question: "What does the service cover?",
        answer: "Threat detection, security operations, risk management, vulnerability assessment, data protection and incident response."
      },
      {
        question: "Do you work in air-gapped or government cloud environments?",
        answer: "We support on-premise, government cloud and air-gapped deployment options. Details are scoped with you."
      },
      {
        question: "Where do we start?",
        answer: "With a review of one environment or system: assets, data and exposure. The scope widens as confidence grows."
      },
      {
        question: "Does this replace our IT team?",
        answer: "No. It works alongside them, and can sit with our Managed Services if you want day-to-day operation handled for you."
      }
    ],
    relatedServices: [
      {
        name: "Strategy & Advisory Services",
        route: "/services/strategy-advisory",
        description: "AI adoption roadmaps built on a current-state assessment."
      },
      {
        name: "Consulting Services",
        route: "/services/consulting",
        description: "Stakeholder-led assessments turned into measurable results."
      },
      {
        name: "AI Assurance & Governance",
        route: "/services/ai-assurance-governance",
        description: "Assess, validate and continuously govern AI systems before and after deployment."
      }
    ],
    actions: {
      talkToExpert: "/contact",
      tryLiveDemo: "/book-a-demo"
    }
  }
];