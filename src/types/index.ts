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
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}