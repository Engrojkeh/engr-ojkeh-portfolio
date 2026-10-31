export interface TechItem {
  name: string;
  category: "Language" | "Frontend" | "Backend" | "Database" | "Cloud & DevOps";
}

/**
 * Curated Core Tech Stack
 * Focused on high-demand, production-grade technologies companies look for.
 */
export const coreTechnologies: TechItem[] = [
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Prisma ORM", category: "Database" },
  { name: "Docker", category: "Cloud & DevOps" },
  { name: "AWS", category: "Cloud & DevOps" },
  { name: "Git & GitHub", category: "Cloud & DevOps" },
  { name: "CI/CD Pipelines", category: "Cloud & DevOps" },
];

// Fallback techStack for backward compatibility with existing types
export const techStack = [
  {
    name: "Core Stack",
    items: coreTechnologies.map((t) => t.name),
  },
];
