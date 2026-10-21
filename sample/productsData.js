import React from 'react';
import {
  Video,
  Smile,
  Radio,
  LayoutDashboard,
  FileText,
  GraduationCap,
  Bot,
  ShieldCheck,
} from 'lucide-react';

export const productsList = [
  {
    demoUrl: "https://technocracygroup.com/demos/video-translation.html?theme=dark",
    productName: "Multilingual Video Translation",
    route: "/products/video-translation",
    icon: <Video className="w-5 h-5 " />,
    tagline: "One recording dubbed into many languages, lips synced.",
    overview: "One recording becomes a dozen language versions — voice cloned, lips synced, subtitles included — without booking a studio or reshooting with a new presenter. Training material, public safety announcements, outreach campaigns: whatever you've already filmed can now reach an audience it was never recorded for.",
    corePhilosophy: "The old way of doing this meant either subtitling (which a lot of viewers skip past) or re-recording with a local presenter in every market, which is slow and expensive enough that most organizations just don't bother for anything beyond their two or three biggest languages. This closes that gap — a single source video can go out in as many languages as your audience actually speaks, at a fraction of the cost of a reshoot.",
    keyCapabilities: [
      "Voice cloning that keeps the original speaker's tone",
      "Lip-sync and subtitles delivered in the same pass",
      "One source video, multiple language markets reached",
      "Makes multilingual reach affordable for content beyond your top 2–3 markets"
    ],
    mediaAssets: {
      videoPreview: "https://technocracygroup.com/products/vids/video-translation.mp4",
      posterImage: "https://technocracygroup.com/products/AI%20transcript-v2.png"
    },
    relatedProducts: [
      {
        name: "Sentiment Analysis",
        route: "/products/sentiment-analysis",
        description: "Reads feedback and sorts it into positive, negative or neutral."
      },
      {
        name: "Media & Broadcast Suite",
        route: "/products/broadcast-ai",
        description: "One place to publish, schedule and track posts, messages and emergency alerts."
      },
      {
        name: "AI GRC",
        route: "/products/ai-grc",
        description: "Model inventory, approvals and continuous risk scoring in one record."
      }
    ],
    actions: {
      talkToExpert: "/book-a-demo",
      tryLiveDemo: "#demo"
    }
  },
  {
    productName: "Sentiment Analysis",
    route: "/products/sentiment-analysis",
    icon: <Smile className="w-5 h-5 " />,
    tagline: "Reads feedback and sorts it into positive, negative or neutral.",
    overview: "People say a lot about an organization in reviews, survey answers and social posts, but nobody has time to read it all. Sentiment analysis does the first read. It goes through written feedback and marks each piece as positive, negative or neutral, so the overall tone is clear at a glance. Teams can then see how that mood shifts over time and spot a problem early, instead of finding out from a complaint.",
    corePhilosophy: "Because tone can be hard to judge, a person can look over the sorted results and correct any that look wrong, ensuring automated sorting matches human judgment before action is taken.",
    keyCapabilities: [
      "Reads reviews, survey answers and social posts",
      "Marks each one as positive, negative or neutral",
      "Shows how the mood changes over time",
      "Lets a person check and correct the results"
    ],
    mediaAssets: {
      videoPreview: "https://technocracygroup.com/products/vids/sentiment.mp4",
      posterImage: "https://technocracygroup.com/products/Intelligent%20Sentiment%20Analysis-v2.png"
    },
    relatedProducts: [
      {
        name: "Media & Broadcast Suite",
        route: "/products/broadcast-ai",
        description: "One place to publish, schedule and track posts, messages and emergency alerts."
      },
      {
        name: "AI GRC",
        route: "/products/ai-grc",
        description: "Model inventory, approvals and continuous risk scoring in one record."
      },
      {
        name: "Command Center & Dashboard",
        route: "/products/ai-command-center",
        description: "Live operational data with alerts on thresholds your team sets."
      }
    ],
    actions: {
      talkToExpert: "/book-a-demo",
      tryLiveDemo: "#demo"
    }
  },
  {
    productName: "Media & Broadcast Suite",
    route: "/products/broadcast-ai",
    icon: <Radio className="w-5 h-5 " />,
    tagline: "One place to publish, schedule and track posts, messages and emergency alerts.",
    overview: "Media & Broadcast Suite is a publishing suite for teams that run several channels at once. Write a post once, choose the channels, and it goes out to Instagram, YouTube, X, Facebook, LinkedIn, WhatsApp, TikTok and SMS together, with a live preview of how it will look on each one.",
    corePhilosophy: "Scheduling, replies and reporting sit in the same place. A calendar holds the upcoming queue. An comments inbox sorts responses by sentiment, so negative ones can be escalated and good ones showcased.",
    keyCapabilities: [
      "Compose once, then post now or schedule it for every selected channel and SMS",
      "AI-drafted captions and messages, with a live preview for each channel",
      "Comments inbox sorted by sentiment, with escalation for negative replies",
      "Reach and engagement analytics, plus an AI-written weekly performance digest",
      "Emergency broadcast that sends one alert to every connected channel at once"
    ],
    mediaAssets: {
      videoPreview: "https://technocracygroup.com/products/vids/media.mp4",
      posterImage: "https://technocracygroup.com/products/Intelligent%20Media%20Suite-v2.png"
    },
    relatedProducts: [
      {
        name: "AI GRC",
        route: "/products/ai-grc",
        description: "Model inventory, approvals and continuous risk scoring in one record."
      },
      {
        name: "Command Center & Dashboard",
        route: "/products/ai-command-center",
        description: "Live operational data with alerts on thresholds your team sets."
      },
      {
        name: "Document Management & Tracking",
        route: "/products/ai-dms",
        description: "Scanned documents turned into structured, routed records."
      }
    ],
    actions: {
      talkToExpert: "/book-a-demo",
      tryLiveDemo: "#demo"
    }
  },
  {
    demoUrl: "https://technocracygroup.com/demos/command-center.html?theme=dark",
    productName: "Command Center & Dashboard",
    route: "/products/ai-command-center",
    icon: <LayoutDashboard className="w-5 h-5 " />,
    tagline: "Live operational data with alerts on thresholds your team sets.",
    overview: "Command Center takes the numbers already sitting in your CRM, sensors, and transaction logs and puts them where the people making decisions can actually see them. You set the thresholds that matter to your operation — not a generic default — and the right team gets pinged the moment something crosses the line.",
    corePhilosophy: "Most dashboards are built to look good in a demo and then get ignored a month later because nobody customized the alerts to their actual workflow. This one is built the other way around: your ops team defines what 'normal' looks like for your specific environment.",
    keyCapabilities: [
      "Single view pulling live data from systems you already run",
      "Custom alert thresholds set by your team, not a template",
      "Built for operational response, not retrospective reporting",
      "Designed to stay out of the way until something actually needs attention"
    ],
    mediaAssets: {
      videoPreview: "https://technocracygroup.com/products/vids/command-center.mp4",
      posterImage: "https://technocracygroup.com/products/Command%20Center%20%26%20Dashboard-v2.png"
    },
    relatedProducts: [
      {
        name: "Document Management & Tracking",
        route: "/products/ai-dms",
        description: "Scanned documents turned into structured, routed records."
      },
      {
        name: "Learning Management Suite",
        route: "/products/lms-slcm-erp",
        description: "Learning, student records and finance on one platform."
      },
      {
        name: "Agentic, Gen AI & Gov AI",
        route: "/products/enterprise-genai",
        description: "Agents that complete multi-step tasks on your own data."
      }
    ],
    actions: {
      talkToExpert: "/book-a-demo",
      tryLiveDemo: "#demo"
    }
  },
  {
    demoUrl: "https://technocracygroup.com/demos/dms.html?theme=dark",
    productName: "Document Management & Tracking",
    route: "/products/ai-dms",
    icon: <FileText className="w-5 h-5 " />,
    tagline: "Scanned documents turned into structured, routed records.",
    overview: "Hand it a stack of scanned contracts or a decade of paper archive and it hands back searchable, structured records — not just a PDF you can Ctrl+F. The system reads the document, files it correctly, and routes it to whoever needs to act on it next, so nobody's re-typing a field from a form that's already been filled in twice.",
    corePhilosophy: "A lot of 'document management' tools stop at making paper searchable, which helps but doesn't actually remove the manual work. This one goes further — it extracts specific data fields and pushes them into the workflow that needs them.",
    keyCapabilities: [
      "OCR and extraction that read forms, not just scan them",
      "Automatic classification so nothing gets misfiled or lost",
      "Workflow routing that removes manual handoffs between departments",
      "Built to handle legacy paper archives, not just new digital intake"
    ],
    mediaAssets: {
      videoPreview: "https://technocracygroup.com/products/vids/dms.mp4",
      posterImage: "https://technocracygroup.com/_next/image?url=%2Fproducts%2FAI%2520transcript-v2.png&w=1080&q=75"
    },
    relatedProducts: [
      {
        name: "Learning Management Suite",
        route: "/products/lms-slcm-erp",
        description: "Learning, student records and finance on one platform."
      },
      {
        name: "Agentic, Gen AI & Gov AI",
        route: "/products/enterprise-genai",
        description: "Agents that complete multi-step tasks on your own data."
      },
      {
        name: "Video Translation",
        route: "/products/video-translation",
        description: "One recording dubbed into many languages, lips synced."
      }
    ],
    actions: {
      talkToExpert: "/book-a-demo",
      tryLiveDemo: "#demo"
    }
  },
  {
    productName: "Learning Management Suite",
    route: "/products/lms-slcm-erp",
    icon: <GraduationCap className="w-5 h-5 " />,
    tagline: "Learning, student records and finance on one platform.",
    overview: "Most campuses run their LMS, student records, and finance system on three different logins that were never built to talk to each other. This suite puts admissions, academics, and administration on one platform, so a student's record follows them from enrollment to graduation without anyone re-entering the same data at every stage.",
    corePhilosophy: "Disconnects between administrative pillars cause institutional headaches; putting all three on one platform ensures background reconciliation happens automatically so leaders focus on decisions.",
    keyCapabilities: [
      "One login covering learning, records, and institutional finance",
      "Student data that carries through admission to graduation",
      "Reporting built for registrars, not just IT administrators",
      "Eliminates the manual reconciliation work between disconnected systems"
    ],
    mediaAssets: {
      videoPreview: "https://technocracygroup.com/products/vids/lms.mp4",
      posterImage: "https://technocracygroup.com/products/AI%20LMS-v2.png"
    },
    relatedProducts: [
      {
        name: "Agentic, Gen AI & Gov AI",
        route: "/products/enterprise-genai",
        description: "Agents that complete multi-step tasks on your own data."
      },
      {
        name: "Video Translation",
        route: "/products/video-translation",
        description: "One recording dubbed into many languages, lips synced."
      },
      {
        name: "Sentiment Analysis",
        route: "/products/sentiment-analysis",
        description: "Reads feedback and sorts it into positive, negative or neutral."
      }
    ],
    actions: {
      talkToExpert: "/book-a-demo",
      tryLiveDemo: "#demo"
    }
  },
  {
    demoUrl: "https://technocracygroup.com/demos/agentic.html?theme=dark",
    productName: "Agentic AI, Generative AI & Gov AI",
    route: "/products/enterprise-genai",
    icon: <Bot className="w-5 h-5 " />,
    tagline: "Agents that complete multi-step tasks on your own data.",
    overview: "These aren't chatbots that answer a question and stop. They're agents built to finish the task — draft the report, route the ticket, work through a multi-step process across the systems you already run. We deploy them first on internal operations, where the output can be measured, before anything reaches a customer.",
    corePhilosophy: "A lot of generative AI projects fail because they get pointed at a customer-facing use case before anyone's confirmed the underlying model actually performs on the organization's own data. Starting internally provides a clear measurement framework.",
    keyCapabilities: [
      "Agents that complete multi-step tasks, not single-turn replies",
      "Built on your enterprise data, not generic public models",
      "Piloted internally first, with results measured before customer rollout",
      "Integrated into the tools your teams already use daily"
    ],
    mediaAssets: {
      videoPreview: "https://technocracygroup.com/products/vids/agentic.mp4",
      posterImage: "https://technocracygroup.com/products/Enterprise%20%26%20Gen%20AI-v2.png"
    },
    relatedProducts: [
      {
        name: "Video Translation",
        route: "/products/video-translation",
        description: "One recording dubbed into many languages, lips synced."
      },
      {
        name: "Sentiment Analysis",
        route: "/products/sentiment-analysis",
        description: "Reads feedback and sorts it into positive, negative or neutral."
      },
      {
        name: "Media & Broadcast Suite",
        route: "/products/broadcast-ai",
        description: "One place to publish, schedule and track posts, messages and emergency alerts."
      }
    ],
    actions: {
      talkToExpert: "/book-a-demo",
      tryLiveDemo: "#demo"
    }
  },
  {
    demoUrl: "https://technocracygroup.com/demos/ai-grc.html?theme=dark",
    productName: "AI Governance, Risk & Compliance",
    route: "/products/ai-grc",
    icon: <ShieldCheck className="w-5 h-5 " />,
    tagline: "Model inventory, approvals and continuous risk scoring in one record.",
    overview: "Most enterprises can't say how many AI models are running in production, let alone who signed off on them. AI GRC closes that gap — it keeps a live inventory of every model, tracks approvals against your internal policy, and scores risk continuously instead of once a quarter.",
    corePhilosophy: "The problem with quarterly review cycles is that a model can drift for months before anyone notices — accuracy slips, a bias creeps in, a data source changes upstream, and nobody catches it until the numbers look strange in a report that's already three weeks old. AI GRC watches for that drift in real time.",
    keyCapabilities: [
      "Live model inventory tied to sign-off and ownership records",
      "Continuous risk scoring instead of periodic spot-checks",
      "Audit trail generated automatically, not assembled after the fact",
      "Drift detection that flags model degradation before it shows up in outcomes"
    ],
    mediaAssets: {
      videoPreview: "https://technocracygroup.com/products/vids/ai-grc.mp4",
      posterImage: "https://thumbs.dreamstime.com/b/grc-governance-risk-compliance-concept-businessman-icons-organizational-management-regulatory-practices-reduce-331700194.jpg"
    },
    relatedProducts: [
      {
        name: "Command Center & Dashboard",
        route: "/products/ai-command-center",
        description: "Live operational data with alerts on thresholds your team sets."
      },
      {
        name: "Document Management & Tracking",
        route: "/products/ai-dms",
        description: "Scanned documents turned into structured, routed records."
      },
      {
        name: "Learning Management Suite",
        route: "/products/lms-slcm-erp",
        description: "Learning, student records and finance on one platform."
      }
    ],
    actions: {
      talkToExpert: "/book-a-demo",
      tryLiveDemo: "#demo"
    }
  }
];