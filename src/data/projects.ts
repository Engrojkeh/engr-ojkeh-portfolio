import { Project } from "@/types";

/**
 * Featured Engineering Projects
 * ----------------------------------------------------
 * To customize any project:
 * - Update `name`, `description`, and `technologies`.
 * - Replace `image` with a path inside `/public/projects/your-image.png`.
 * - Update `github` and `live` URLs with your repository and demo links.
 */
export const projects: Project[] = [
  {
    id: "1",
    name: "TaskFlow",
    description:
      "A modern task management platform designed to help teams organize projects, collaborate efficiently, and track sprint progress in real time.",
    overview:
      "TaskFlow is a comprehensive project management solution combining intuitive kanban design with real-time collaboration features.",
    problem:
      "Teams struggled with fragmented communication and unclear task ownership, leading to missed deadlines.",
    solution:
      "Built a unified platform with real-time WebSocket sync, role-based access, and automated workflow triggers.",
    features: [
      "Real-time team collaboration",
      "Role-based access control",
      "Interactive kanban boards",
      "Sprint velocity analytics",
      "Dark mode support",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Socket.io"],
    role: "Full Stack Developer",
    status: "Completed",
    github: "https://github.com/Engrojkeh/taskflow",
    live: "https://taskflow-demo.vercel.app",
    featured: true,
    image: "/projects/taskflow.jpg",
    category: "Web Application",
  },
  {
    id: "2",
    name: "CryptoVault",
    description:
      "A secure cryptocurrency portfolio tracker featuring real-time market price feeds, asset allocation analytics, and automated threshold alerts.",
    overview:
      "CryptoVault helps users monitor their digital asset portfolios with intuitive charts and real-time market data.",
    problem:
      "Investors lacked a clean, privacy-focused dashboard to monitor diverse multi-wallet holdings without exposing keys.",
    solution:
      "Developed a client-side encrypted tracker connecting to decentralized exchanges and market APIs with sub-second price refresh.",
    features: [
      "Real-time market price feeds",
      "Portfolio allocation breakdown",
      "Historical P&L visual charts",
      "Custom price threshold notifications",
      "End-to-end client security",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Redis", "Chart.js"],
    role: "Full Stack Developer",
    status: "Completed",
    github: "https://github.com/Engrojkeh/cryptovault",
    live: "https://cryptovault-demo.vercel.app",
    featured: true,
    image: "/projects/cryptovault.jpg",
    category: "Financial System",
  },
  {
    id: "3",
    name: "DevMetrics",
    description:
      "An engineering intelligence dashboard that analyzes repository activity, commit velocity, code review turnaround, and developer productivity patterns.",
    overview:
      "DevMetrics transforms raw git events and telemetry into actionable insights for engineering leads and developers.",
    problem:
      "Engineering managers had difficulty tracking team throughput and identifying code review bottlenecks.",
    solution:
      "Engineered an automated aggregation pipeline connecting to GitHub webhooks to calculate cycle time and contribution heatmaps.",
    features: [
      "Automated GitHub webhook ingestion",
      "Interactive contribution heatmaps",
      "PR turnaround & review analytics",
      "Sprint velocity reporting",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GraphQL", "GitHub API", "Recharts"],
    role: "Full Stack Developer",
    status: "Completed",
    github: "https://github.com/Engrojkeh/devmetrics",
    live: "https://devmetrics-demo.vercel.app",
    featured: true,
    image: "/projects/devmetrics.jpg",
    category: "Developer Tool",
  },
  {
    id: "4",
    name: "CloudPulse",
    description:
      "A distributed system monitoring platform providing real-time server health metrics, latency telemetry, and incident alerting.",
    overview:
      "CloudPulse monitors cloud infrastructure instances and microservice APIs with real-time status pages.",
    problem:
      "Businesses suffered extended downtime because incident detection and alert distribution took too long.",
    solution:
      "Architected lightweight health-check probes with a central dashboard streaming uptime data via Server-Sent Events.",
    features: [
      "Multi-region heartbeat probes",
      "Latency & response-time graphs",
      "Configurable webhook alert rules",
      "Public & private status pages",
    ],
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS", "Tailwind CSS"],
    role: "Backend & Systems",
    status: "Completed",
    github: "https://github.com/Engrojkeh/cloudpulse",
    live: "https://cloudpulse-demo.vercel.app",
    featured: true,
    image: "/projects/cloudpulse.jpg",
    category: "Cloud Infrastructure",
  },
  {
    id: "5",
    name: "PayBridge",
    description:
      "A secure multi-currency payment checkout interface supporting localized mobile money, card payments, and automated reconciliation.",
    overview:
      "PayBridge facilitates seamless merchant transactions across African and international payment providers.",
    problem:
      "African digital businesses struggled with high transaction drop-off rates across fragmented regional payment channels.",
    solution:
      "Engineered a unified checkout SDK with intelligent failover across payment processors and instant webhook receipts.",
    features: [
      "Multi-processor smart routing",
      "Instant webhook delivery",
      "Audit logs & fraud protection",
      "Embeddable checkout modal",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe API", "Paystack", "Prisma"],
    role: "Full Stack Developer",
    status: "Completed",
    github: "https://github.com/Engrojkeh/paybridge",
    live: "https://paybridge-demo.vercel.app",
    featured: true,
    image: "/projects/paybridge.jpg",
    category: "Fintech Application",
  },
  {
    id: "6",
    name: "ShopSphere",
    description:
      "A high-performance headless e-commerce store with instant faceted search, dynamic cart persistence, and optimized checkout UX.",
    overview:
      "ShopSphere delivers sub-second page transitions and streamlined order processing for modern retail brands.",
    problem:
      "Monolithic e-commerce templates suffered from slow load times, poor mobile navigation, and abandoned carts.",
    solution:
      "Built a decoupled frontend using Next.js App Router and server-rendered catalog caching for instant page loads.",
    features: [
      "Instant catalog filtering & search",
      "Persistent cart & checkout pipeline",
      "Automated stock quantity sync",
      "Lighthouse 98+ mobile performance",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Stripe", "Supabase"],
    role: "Full Stack Developer",
    status: "Completed",
    github: "https://github.com/Engrojkeh/shopsphere",
    live: "https://shopsphere-demo.vercel.app",
    featured: true,
    image: "/projects/shopsphere.jpg",
    category: "E-Commerce",
  },
  {
    id: "7",
    name: "MediConnect",
    description:
      "A digital healthcare portal facilitating patient appointment scheduling, secure health record storage, and clinical communication.",
    overview:
      "MediConnect simplifies hospital outpatient workflows and remote doctor consultations.",
    problem:
      "Patients endured long clinic waiting times with fragmented paper medical records prone to loss.",
    solution:
      "Designed a HIPAA-compliant consultation portal with automated reminders, calendar sync, and encrypted health data.",
    features: [
      "Online doctor appointment booking",
      "Encrypted patient health records",
      "Automated SMS/Email reminders",
      "Doctor schedule management",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Twilio API"],
    role: "Full Stack Developer",
    status: "Completed",
    github: "https://github.com/Engrojkeh/mediconnect",
    live: "https://mediconnect-demo.vercel.app",
    featured: true,
    image: "/projects/mediconnect.jpg",
    category: "Healthcare Platform",
  },
  {
    id: "8",
    name: "AuthShield",
    description:
      "A centralized authentication and authorization microservice featuring OAuth 2.0, multi-factor authentication, and RBAC token issuance.",
    overview:
      "AuthShield provides plug-and-play secure user identity management across distributed services.",
    problem:
      "Rebuilding user authentication and role validation across multiple microservices introduced security inconsistencies.",
    solution:
      "Built a standalone identity service implementing JWT session rotation, rate-limiting, and standard OAuth 2.0 providers.",
    features: [
      "OAuth 2.0 & Social Login",
      "Time-based OTP two-factor auth",
      "Granular role & permission controls",
      "Token revocation & blacklisting",
    ],
    technologies: ["Node.js", "TypeScript", "Redis", "PostgreSQL", "Docker", "JWT", "Jest"],
    role: "Backend & Security",
    status: "Completed",
    github: "https://github.com/Engrojkeh/authshield",
    live: "https://authshield-demo.vercel.app",
    featured: true,
    image: "/projects/authshield.jpg",
    category: "Security & Auth",
  },
];
