import { Sculpture, Testimonial, Service, BlogPost } from '../types';

export const sculptures: Sculpture[] = [
  {
    id: 1,
    title: 'Eternal Form',
    material: 'Marble',
    year: 2023,
    dimensions: '48" x 24" x 24"',
    description: 'A study in balance and grace, representing the eternal nature of human connection.',
    images: ['https://images.pexels.com/photos/4100720/pexels-photo-4100720.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'Abstract',
    availability: 'Available',
    price: '$12,500'
  },
  {
    id: 2,
    title: 'Rising Spirit',
    material: 'Bronze',
    year: 2022,
    dimensions: '36" x 18" x 18"',
    description: 'Capturing the moment of ascension, this piece embodies hope and renewal.',
    images: ['https://images.pexels.com/photos/6492399/pexels-photo-6492399.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'Figurative',
    availability: 'Sold',
    price: '$8,200'
  },
  {
    id: 3,
    title: 'Natural Harmony',
    material: 'Wood',
    year: 2023,
    dimensions: '42" x 30" x 20"',
    description: 'Carved from a single piece of oak, this work celebrates the organic beauty of natural forms.',
    images: ['https://images.pexels.com/photos/3004909/pexels-photo-3004909.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'Abstract',
    availability: 'Available',
    price: '$6,500'
  },
  {
    id: 4,
    title: 'Abstract Vision',
    material: 'Steel',
    year: 2021,
    dimensions: '60" x 24" x 16"',
    description: 'A bold interpretation of geometric forms, exploring the interplay of space and matter.',
    images: ['https://images.pexels.com/photos/6966564/pexels-photo-6966564.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'Abstract',
    availability: 'Available',
    price: '$10,000'
  },
  {
    id: 5,
    title: 'Ancient Echo',
    material: 'Stone',
    year: 2022,
    dimensions: '52" x 28" x 22"',
    description: 'Inspired by ancient forms, this piece bridges the gap between past and present.',
    images: ['https://images.pexels.com/photos/3004905/pexels-photo-3004905.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'Figurative',
    availability: 'Inquire',
    price: '$9,800'
  },
  {
    id: 6,
    title: 'Modern Grace',
    material: 'Marble',
    year: 2023,
    dimensions: '40" x 20" x 20"',
    description: 'A contemporary take on classical proportions, embodying elegance and simplicity.',
    images: ['https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'Abstract',
    availability: 'Available',
    price: '$11,000'
  },
  {
    id: 7,
    title: 'Monumental Presence',
    material: 'Bronze',
    year: 2021,
    dimensions: '84" x 40" x 30"',
    description: 'A commanding presence designed for public spaces, celebrating the human spirit.',
    images: ['https://images.pexels.com/photos/6492399/pexels-photo-6492399.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'Monumental',
    availability: 'Commissioned',
    price: '$45,000'
  },
  {
    id: 8,
    title: 'Organic Flow',
    material: 'Wood',
    year: 2023,
    dimensions: '36" x 28" x 18"',
    description: 'Embracing the natural curves and grain of the wood, this piece flows like water.',
    images: ['https://images.pexels.com/photos/3004909/pexels-photo-3004909.jpeg?auto=compress&cs=tinysrgb&w=800'],
    category: 'Abstract',
    availability: 'Available',
    price: '$5,800'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'The sculpture captures the essence of our vision perfectly. The attention to detail is extraordinary.',
    author: 'Sarah Johnson',
    role: 'Private Collector'
  },
  {
    id: 2,
    quote: 'Working with this artist was a transformative experience. The dedication to craft is truly inspiring.',
    author: 'Michael Chen',
    role: 'Gallery Director'
  },
  {
    id: 3,
    quote: 'The restoration work breathed new life into our historic pieces. Professionalism and artistry combined.',
    author: 'Emma Rodriguez',
    role: 'Museum Curator'
  },
  {
    id: 4,
    quote: 'Our public installation has become a beloved landmark. The artist understood our community\'s needs completely.',
    author: 'David Thompson',
    role: 'City Arts Commissioner'
  },
  {
    id: 5,
    quote: 'The commissioned piece exceeded our expectations. The creative process was collaborative and transparent.',
    author: 'Jennifer Lee',
    role: 'Corporate Art Consultant'
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Custom Sculptures',
    description: 'Bespoke artistic creations tailored to your vision and space requirements.',
    icon: '🎨'
  },
  {
    id: 2,
    title: 'Public Art',
    description: 'Large-scale installations for municipalities, corporations, and public spaces.',
    icon: '🏛️'
  },
  {
    id: 3,
    title: 'Commissions',
    description: 'Collaborative process to create unique artworks for individuals and institutions.',
    icon: '🤝'
  },
  {
    id: 4,
    title: 'Restoration Work',
    description: 'Expert restoration of antique and damaged sculptures to their former glory.',
    icon: '🔨'
  },
  {
    id: 5,
    title: 'Studio Tours',
    description: 'Experience the creative process firsthand with guided tours of the studio.',
    icon: '👁️'
  },
  {
    id: 6,
    title: 'Consultation',
    description: 'Art advisory services to help you select or commission the perfect piece.',
    icon: '💡'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Journey of Stone: Carving from Concept to Completion',
    excerpt: 'A behind-the-scenes look at my process of transforming raw marble into a finished sculpture.',
    date: 'May 15, 2024',
    category: 'Process',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/4350236/pexels-photo-4350236.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    title: 'Finding Inspiration in Nature\'s Forms',
    excerpt: 'How the organic shapes and textures of the natural world influence my abstract works.',
    date: 'April 28, 2024',
    category: 'Inspiration',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3004909/pexels-photo-3004909.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    title: 'A Day in the Studio: Tools, Techniques, and Traditions',
    excerpt: 'An intimate glimpse into my daily routine and the time-honored techniques I employ.',
    date: 'April 10, 2024',
    category: 'Studio Life',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/4100720/pexels-photo-4100720.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    title: 'The Evolution of Abstract Expression in Contemporary Sculpture',
    excerpt: 'Exploring how modern sculptors are pushing the boundaries of traditional forms.',
    date: 'March 22, 2024',
    category: 'Inspiration',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/6966564/pexels-photo-6966564.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];