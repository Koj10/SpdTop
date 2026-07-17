import type { Dictionary } from "../types";
import {
  TELEGRAM_CHANNELS,
  TELEGRAM_CONTACT,
  TELEGRAM_CONTACT_HANDLE,
} from "../config";

export const en: Dictionary = {
  locale: "en",
  site: {
    name: "SpdTop",
    tagline: "Development Studio",
    fullName: "SpdTop — Development Studio",
    description:
      "We build bots, apps, websites, games, and custom digital products — end to end, for clients worldwide.",
    telegram: TELEGRAM_CONTACT,
    telegramHandle: TELEGRAM_CONTACT_HANDLE,
    telegramChannel: TELEGRAM_CHANNELS.en.url,
    telegramChannelHandle: TELEGRAM_CHANNELS.en.handle,
    city: "Remote · Worldwide",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  ui: {
    discussProject: "Discuss your project",
    ourServices: "Our services",
    getInTouch: "Get in touch",
    aboutUs: "About us",
    startProject: "Start a project",
    allServices: "All services →",
    learnMore: "Learn more →",
    menu: "Menu",
    navigation: "Navigation",
    contact: "Contact",
    directContact: "Direct contact",
    openTelegram: "Message on Telegram",
    joinChannel: "Join channel",
    sendRequest: "Send brief",
    sending: "Sending…",
    thanks: "Thank you!",
    thanksMessage: "We received your brief and will reply in Telegram soon.",
    errorMessage: "Could not send the form. Message us directly on Telegram.",
    language: "Language",
  },
  hero: {
    srTitle: "SpdTop — development studio. Bots, apps, websites, games.",
    headlinePrefix: "We build ",
    headlineHighlight: "almost anything",
    headlineSuffix: " you can code",
    description:
      "Bots, apps, websites, games, and custom software. We take your idea from concept to production.",
    marquee: "Bots · Apps · Websites · Games · SaaS · Automation · MVP · ",
  },
  services: [
    {
      id: "bots",
      title: "Bots",
      subtitle: "Telegram · Discord · Slack",
      description:
        "Automation, customer support, internal tools, and CRM integrations. Bots that actually run 24/7.",
      icon: "◈",
      stack: ["Python", "Node.js", "aiogram", "Telegraf"],
    },
    {
      id: "apps",
      title: "Apps",
      subtitle: "Web · Mobile · Desktop",
      description:
        "From MVP to production: React, Next.js, React Native, Electron. Fast, scalable, clean architecture.",
      icon: "◎",
      stack: ["Next.js", "React Native", "TypeScript"],
    },
    {
      id: "websites",
      title: "Websites",
      subtitle: "Landing · Corporate · E-commerce",
      description:
        "Sites with character: SEO, speed, smooth animations. From one-pagers to complex platforms.",
      icon: "✦",
      stack: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
      id: "games",
      title: "Games",
      subtitle: "2D · Web · Mobile",
      description:
        "Casual games, interactives, brand gamification. Unity, Phaser, WebGL — we pick the right stack.",
      icon: "▲",
      stack: ["Unity", "Phaser", "Three.js"],
    },
    {
      id: "custom",
      title: "Custom",
      subtitle: "API · SaaS · Automation",
      description:
        "Non-standard problems are our specialty. Scrapers, dashboards, ML integrations, microservices. If it can be coded, we build it.",
      icon: "◆",
      stack: ["Python", "Go", "PostgreSQL", "Docker"],
    },
  ],
  stats: [
    { value: "50+", label: "projects" },
    { value: "5", label: "years experience" },
    { value: "24/7", label: "support" },
  ],
  process: {
    subtitle: "How we work",
    title: "From idea to launch",
    steps: [
      {
        step: "01",
        title: "Brief",
        text: "We jump on a call, break down the task, and lock scope and timeline.",
      },
      {
        step: "02",
        title: "Prototype",
        text: "MVP or wireframe in 3–7 days. You see results before full development starts.",
      },
      {
        step: "03",
        title: "Build",
        text: "Weekly demos and iterations. Transparent process, no surprises.",
      },
      {
        step: "04",
        title: "Launch",
        text: "Deploy, documentation, handoff. We stay available after release.",
      },
    ],
  },
  servicesPreview: {
    subtitle: "What we build",
    title: "Development for any challenge",
  },
  servicesPage: {
    subtitle: "Services",
    title: "We build anything that runs on code",
    intro:
      "We're not locked to one stack or format. Tell us what you need — we'll pick the right technologies and assemble the team for your project.",
  },
  cta: {
    title: "Have an idea? Let's talk.",
    description:
      "Free 30-minute consultation. Tell us about your project — we'll propose a solution and timeline.",
  },
  about: {
    subtitle: "About us",
    title: "Who is SpdTop",
    paragraphs: [
      "SpdTop is a development studio working with clients worldwide. We build bots, web apps, mobile apps, websites, games, and anything that can be assembled from code.",
      "Not an agency with layers of account managers. You talk directly to the people writing the code. Fewer layers — faster results.",
      "We work with startups, businesses, and individual clients. Fully remote — across the US, Europe, and beyond.",
    ],
    valuesSubtitle: "Values",
    valuesTitle: "How we work",
    values: [
      {
        title: "Speed without chaos",
        text: "MVPs in weeks, not months — without tech debt. Code you can scale with confidence.",
      },
      {
        title: "Transparency",
        text: "Weekly demos, repo access, clear estimates. No last-minute surprises.",
      },
      {
        title: "Full cycle",
        text: "From brief to deploy and support. We don't disappear after launch.",
      },
      {
        title: "Any complexity",
        text: "Landing page, SaaS, ML-powered bot, multiplayer game — if you can describe it, we can build it.",
      },
    ],
  },
  contact: {
    subtitle: "Contact",
    title: "Let's discuss your project",
    intro:
      "Fill out the brief below or message us on Telegram — we'll reply and walk through your project.",
    telegramTitle: "Telegram",
    telegramDesc: "Prefer to write directly? We're on Telegram.",
    channelTitle: "News channel",
    channelDesc: "Case studies, launches, and studio updates.",
    briefTitle: "Project brief",
    briefDesc: "Tell us what you need — the form goes straight to our team chat.",
    form: {
      nameLabel: "Name",
      namePlaceholder: "How should we address you?",
      contactLabel: "Telegram / Email",
      contactPlaceholder: "@username or you@company.com",
      messageLabel: "About the project",
      messagePlaceholder: "What to build, timeline, budget (if known)",
    },
  },
  faq: [
    {
      q: "How much does development cost?",
      a: "It depends on scope. Landing pages start at $1,000, bots at $600, apps at $2,000+. We provide an exact quote after the brief.",
    },
    {
      q: "What are typical timelines?",
      a: "MVPs from 2 weeks. Full products in 1–3 months. Rush projects are handled case by case.",
    },
    {
      q: "Do you work remotely?",
      a: "Yes. We work with clients across the US, Europe, Russia, and worldwide. Calls, demos, and docs — all online.",
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes. Support plans from $150/month: bug fixes, updates, and monitoring.",
    },
  ],
  footer: {
    servicesLine: "Bots · Apps · Websites · Games · Custom",
  },
  meta: {
    title: "SpdTop — Development Studio | Bots, Apps, Websites, Games",
    description:
      "SpdTop builds bots, apps, websites, and games for clients worldwide. Fast delivery, production quality, end to end. Let's talk about your project.",
    keywords: [
      "development studio",
      "software development",
      "custom software",
      "bot development",
      "telegram bot development",
      "web app development",
      "mobile app development",
      "website development",
      "game development",
      "MVP development",
      "remote development team",
      "SpdTop",
    ],
  },
  pageMeta: {
    services: {
      title: "Services",
      description:
        "SpdTop — bot, app, website, game, and custom software development. Full cycle from idea to deployment, for clients worldwide.",
    },
    about: {
      title: "About",
      description:
        "SpdTop — a global development studio. Bots, apps, websites, games. Remote team, direct communication with engineers.",
    },
    contact: {
      title: "Contact",
      description:
        "Reach SpdTop on Telegram @speed_tops. Discuss your project — bots, apps, websites, games.",
    },
  },
  jsonLd: {
    inLanguage: "en-US",
    areaServed: "Worldwide",
    serviceTypes: [
      "Software Development",
      "Bot Development",
      "Web Application Development",
      "Mobile App Development",
      "Game Development",
    ],
    priceRange: "$$",
  },
};
