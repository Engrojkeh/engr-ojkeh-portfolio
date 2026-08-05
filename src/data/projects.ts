import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    name: "TaskFlow",
    description:
      "A modern task management platform designed to help teams organize projects, collaborate efficiently, and track progress in real time.",
    overview:
      "TaskFlow is a comprehensive project management solution that combines intuitive design with powerful collaboration features.",
    problem:
      "Teams struggled with fragmented tools and unclear task ownership, leading to missed deadlines and communication gaps.",
    solution:
      "Built a unified platform with real-time updates, role-based access, and intelligent task assignment to streamline team workflows.",
    features: [
      "Real-time collaboration",
      "Role-based access control",
      "Drag-and-drop task management",
      "Analytics dashboard",
      "Dark mode support",
      "Mobile responsive",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
      "Vercel",
    ],
    role: "Full Stack Developer",
    status: "Completed",
    github: "https://github.com/Engrojkeh/taskflow",
    live: "https://taskflow-demo.vercel.app",
    featured: true,
    image: "/projects/taskflow.png",
    category: "Full Stack Application",
    challenges:
      "Implementing real-time sync across multiple clients while maintaining data consistency.",
    lessons:
      "WebSocket architecture requires careful consideration of reconnection logic and state reconciliation.",
  },
  {
    id: "2",
    name: "CryptoVault",
    description:
      "A secure cryptocurrency portfolio tracker with real-time market data, portfolio analytics, and price alerts.",
    overview:
      "CryptoVault helps users monitor their crypto investments with beautiful visualizations and timely alerts.",
    problem:
      "Crypto investors lacked a unified, privacy-focused tool to track diverse portfolios across multiple exchanges.",
    solution:
      "Developed a client-side encrypted portfolio tracker connecting to major exchanges via secure APIs.",
    features: [
      "Multi-exchange integration",
      "Real-time price tracking",
      "Portfolio analytics",
      "Price alerts",
      "End-to-end encryption",
      "Dark/light themes",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Chart.js",
      "Docker",
    ],
    role: "Full Stack Developer",
    status: "In Progress",
    github: "https://github.com/Engrojkeh/cryptovault",
    featured: true,
    image: "/projects/cryptovault.png",
    category: "Business Application",
    challenges:
      "Handling rate limits from multiple exchange APIs while maintaining responsive UI.",
    lessons:
      "Caching strategies and API aggregation layers are essential for third-party integrations.",
  },
  {
    id: "3",
    name: "DevMetrics",
    description:
      "An analytics dashboard for developers to visualize GitHub activity, coding patterns, and productivity metrics.",
    overview:
      "DevMetrics transforms raw GitHub data into actionable insights about coding habits and project contributions.",
    problem:
      "Developers lacked tools to understand their own coding patterns and productivity trends over time.",
    solution:
      "Built a dashboard that aggregates GitHub activity, commit patterns, and language usage into clean visualizations.",
    features: [
      "GitHub integration",
      "Activity heatmaps",
      "Language analytics",
      "Contribution streaks",
      "Exportable reports",
      "Team comparisons",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "GitHub API",
      "Recharts",
      "Vercel",
    ],
    role: "Frontend Developer",
    status: "Maintenance",
    github: "https://github.com/Engrojkeh/devmetrics",
    featured: true,
    image: "/projects/devmetrics.png",
    category: "Developer Tool",
    challenges:
      "Processing large GitHub event streams without affecting dashboard performance.",
    lessons:
      "Web Workers and data pagination are crucial for handling large datasets in the browser.",
  },
];
