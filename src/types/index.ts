export interface Sculpture {
  id: number;
  title: string;
  material: string;
  year: number;
  dimensions?: string;
  description: string;
  images: string[];
  category: string;
  availability?: string;
  price?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  author: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  focus: string;
  bio: string;
  image: string;
  lead?: boolean;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface CsrProgram {
  id: number;
  title: string;
  summary: string;
  description: string;
  impact: string;
  image: string;
}

export interface Faq {
  id: number;
  question: string;
  answer: string;
}