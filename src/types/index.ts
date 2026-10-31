export interface Personal {
  name: string;
  title: string;
  availability: string;
  email: string;
  phone?: string;
  location: string;
  summary: string;
  story: string;
  philosophy: string;
  values: string[];
  highlights: string[];
  avatar?: string;
  aboutImage?: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
  label: string;
  purpose: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  role: string;
  status: "Completed" | "In Progress" | "Maintenance" | "Archived" | "Planned";
  github: string;
  live?: string;
  featured: boolean;
  image: string;
  category: string;
  challenges?: string;
  lessons?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  cta: string;
}

export interface TechCategory {
  name: string;
  items: string[];
}
