export const insightsList = [
  {
    pageUrl: "https://technocracygroup.com/insights/what-ai-governance-actually-requires",
    title: "What AI Governance Actually Requires",
    route: "/insights/what-ai-governance-actually-requires",
    author: "Technocracy Team",
    date: "August 25, 2026",
    tagline: "Governance has to run continuously, not quarterly.",
    overview: "Most organizations that say they have 'AI governance' mean they have a policy document sitting in a shared drive. Real governance requires a continuous system of record that tracks model behavior, approvals, and performance in real time directly within the deployment pipeline.",
    keyPoints: [
      "A model's behavior drifts between review cycles, requiring continuous monitoring rather than quarterly check-ins.",
      "Every production model needs a live system of record tracking what it does, who approved it, and current performance.",
      "Audit readiness should be an ongoing byproduct of continuous tracking, not a scramble of pulling logs before an audit.",
      "Policy enforcement and risk scoring must be properties of the platform infrastructure rather than processes layered on top."
    ],
    actions: {
      talkToExpert: "/contact",
      exploreCapabilities: "/"
    }
  },
  {
    pageUrl: "https://technocracygroup.com/insights/real-cost-of-disconnected-government-systems",
    title: "The Real Cost of Disconnected Government Systems",
    route: "/insights/real-cost-of-disconnected-government-systems",
    author: "Technocracy Team",
    date: "August 25, 2026",
    tagline: "Staff have become, functionally, the integration layer between disparate systems.",
    overview: "In most government IT estates, records, finance, and case-management systems operate in silos. This forces human staff to manually bridge systems, creating massive hidden operational costs, data entry bottlenecks, and delayed oversight.",
    keyPoints: [
      "Manual data re-entry across disconnected systems introduces typos, dropped fields, and workflow stalls.",
      "The hidden labor of staff manually bridging systems is one of the largest unacknowledged items in operating budgets.",
      "Siloed spreadsheets and data make real-time monitoring and early problem detection structurally impossible.",
      "Connecting systems ensures district-level entries immediately reflect on state-level dashboards without reconciliation steps."
    ],
    actions: {
      talkToExpert: "/contact",
      exploreCapabilities: "/"
    }
  },
  {
    pageUrl: "https://technocracygroup.com/insights/why-air-gapped-deployment-isnt-optional-for-defense-ai",
    title: "Why Air-Gapped Deployment Isn't Optional for Defense AI",
    route: "/insights/why-air-gapped-deployment-isnt-optional-for-defense-ai",
    author: "Technocracy Team",
    date: "August 25, 2026",
    tagline: "Air-gapping isn't caution; it's removing the attack surface.",
    overview: "Cloud-first AI platforms often treat air-gapped deployment as an afterthought. For defense and sensitive sectors, air-gapping must be the baseline architectural constraint to eliminate external network dependencies and vulnerability exposure points.",
    keyPoints: [
      "Every external network call to hosted endpoints or SaaS logging is an exposure point for classified or sensitive data.",
      "Many cloud-first platforms fail in true offline modes because they rely on disabled network calls rather than native offline architecture.",
      "Air-gapped security must be thoroughly audited end-to-end rather than assumed based on configuration toggles.",
      "Designing for the air gap from day one prevents costly late-stage redesigns under deadline pressure."
    ],
    actions: {
      talkToExpert: "/contact",
      exploreCapabilities: "/capabilities"
    }
  }
];