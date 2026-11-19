import { Sculpture, Testimonial, Service, BlogPost, TeamMember, Milestone, CsrProgram, Faq } from '../types';

export const sculptures: Sculpture[] = [
  {
    id: 1,
    title: 'Eternal Form',
    material: 'Marble',
    year: 2023,
    dimensions: '48" x 24" x 24"',
    description: 'A study in balance and grace, carved from a single block of Carrara marble. The figure leans into its own shadow, a quiet argument for the endurance of human connection. The surface is left partly raw so the quarry face remains visible beside the polished planes.',
    images: ['https://res.cloudinary.com/cmpwim01/image/upload/v1795085856/IMG_1865.jpg'],
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
    description: 'Cast in bronze by the lost-wax method and finished with a warm brown patina. The figure is caught mid-rise, weight still on the back foot, made for a private courtyard where morning light crosses the torso.',
    images: ['https://res.cloudinary.com/cmpwim01/image/upload/v1795085849/IMG_1587.jpg'],
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
    description: 'Carved from one fallen white oak, following the grain rather than fighting it. The hollow at the center was already in the timber; the studio opened it just enough for light to pass through.',
    images: ['https://res.cloudinary.com/cmpwim01/image/upload/v1795085850/IMG_1621.jpg'],
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
    description: 'Welded plate steel, ground and sealed, built as a study of how a heavy material can still read as drawing in space. The edges are left crisp so the piece changes outline as you walk around it.',
    images: ['https://res.cloudinary.com/cmpwim01/image/upload/v1795085845/IMG_1515.jpg'],
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
    description: 'Limestone, worked with point and claw in the older way. The pose quotes archaic figures without copying them: a still face, a modern stance, and tool marks left as part of the surface.',
    images: ['https://res.cloudinary.com/cmpwim01/image/upload/v1795085836/IMG_1384.jpg'],
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
    description: 'A contemporary reading of classical proportion, reduced until only the turn of a shoulder and the fall of a cloth remain. Polished Calacatta, meant to sit against a plain wall.',
    images: ['https://res.cloudinary.com/cmpwim01/image/upload/v1795085834/IMG_1271.jpg'],
    category: 'Abstract',
    availability: 'Available',
    price: '$11,000'
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
    description: 'One-of-a-kind works made for a specific room, garden, or collection. We start from your space and the feeling you want the piece to hold.',
    icon: '🎨',
    highlights: ['Private homes and collections', 'Marble, bronze, wood, or steel', 'Scale studies before carving begins']
  },
  {
    id: 2,
    title: 'Public Art',
    description: 'Civic and campus works engineered for weather, crowds, and decades outdoors. We handle design review, fabrication, and installation.',
    icon: '🏛️',
    highlights: ['Plazas, parks, and lobbies', 'Engineering with our install crew', 'Maintenance plans included']
  },
  {
    id: 3,
    title: 'Commissions',
    description: 'A guided collaboration for families, companies, and institutions. You see drawings, a maquette, and the work in progress before it leaves the studio.',
    icon: '🤝',
    highlights: ['Fixed proposal after the first meeting', 'Studio visits while the work is made', 'Typical timeline of 4–14 months']
  },
  {
    id: 4,
    title: 'Restoration Work',
    description: 'Conservation of historic and damaged sculpture: cleaning, pinning, losses filled, and patina brought back without inventing a new surface.',
    icon: '🔨',
    highlights: ['Stone, bronze, and terracotta', 'Condition reports before any work', 'Museum and private collections']
  },
  {
    id: 5,
    title: 'Studio Tours',
    description: 'Small visits by appointment. See works on the bench, the yard where large pieces are assembled, and the materials we keep on hand.',
    icon: '👁️',
    highlights: ['Tuesday and Thursday mornings', 'Groups of up to eight', 'Schools visit through the CSR program']
  },
  {
    id: 6,
    title: 'Consultation',
    description: 'Advice for collectors, architects, and committees who are not ready to commission yet. We help you choose scale, material, and placement.',
    icon: '💡',
    highlights: ['Site visits in the city', 'Material samples', 'Short written recommendation']
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
    image: 'https://images.pexels.com/photos/4100720/pexels-photo-4100720.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Diana Moore'
  },
  {
    id: 2,
    title: 'Finding Inspiration in Nature\'s Forms',
    excerpt: 'How the organic shapes and textures of the natural world influence my abstract works.',
    date: 'April 28, 2024',
    category: 'Inspiration',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3004909/pexels-photo-3004909.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Diana Moore'
  },
  {
    id: 3,
    title: 'A Day in the Studio: Tools, Techniques, and Traditions',
    excerpt: 'An intimate glimpse into my daily routine and the time-honored techniques I employ.',
    date: 'April 10, 2024',
    category: 'Studio Life',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/4100720/pexels-photo-4100720.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Maya Chen'
  },
  {
    id: 4,
    title: 'The Evolution of Abstract Expression in Contemporary Sculpture',
    excerpt: 'Exploring how modern sculptors are pushing the boundaries of traditional forms.',
    date: 'March 22, 2024',
    category: 'Inspiration',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/6966564/pexels-photo-6966564.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'James Okonkwo'
  },
  {
    id: 5,
    title: 'What We Keep, What We Give Back',
    excerpt: 'How the studio reuses stone offcuts, melts its own bronze sprues, and chooses timber that has already fallen.',
    date: 'March 2, 2024',
    category: 'Stewardship',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Diana Moore'
  },
  {
    id: 6,
    title: 'From First Conversation to Installed Work',
    excerpt: 'A plain account of a commission: the meeting, the maquette, the months of carving, and the morning we set the piece in place.',
    date: 'February 14, 2024',
    category: 'Commissions',
    readTime: '9 min read',
    image: 'https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Diana Moore'
  }
];

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Diana Moore',
    role: 'Founder & Principal Sculptor',
    focus: 'Concept, marble, final surface',
    bio: 'Diana opened the studio in 2004 after years of classical carving. She still draws every commission and finishes every surface herself.',
    image: 'https://res.cloudinary.com/cmpwim01/image/upload/v1795085833/b9739bbe-e841-4e49-befd-e1d7f9616ff2.jpg',
    lead: true
  },
  {
    id: 2,
    name: 'James Okonkwo',
    role: 'Studio Director',
    focus: 'Commissions, schedules, clients',
    bio: 'James keeps a commission honest: clear dates, clear costs, and a studio that can actually deliver them. He joined in 2012.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    name: 'Luca Bianchi',
    role: 'Master Stone Carver',
    focus: 'Marble and limestone',
    bio: 'Trained in Carrara, Luca handles the heavy blocking and finishes beside Diana. He also mentors Maya through the season at the bench.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    name: 'Maya Chen',
    role: 'Studio Intern',
    focus: 'Studio support, clay prep, and documentation',
    bio: 'Maya is the studio intern for this season. She assists Diana and Luca at the bench, prepares clay and tools, and photographs works in progress for the journal.',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const milestones: Milestone[] = [
  {
    year: '2004',
    title: 'The studio opens',
    description: 'Diana Moore takes a bench on Artisan Lane with a single block of marble and a short list of private clients.'
  },
  {
    year: '2009',
    title: 'First civic commission',
    description: 'A bronze for a neighborhood square. It is still there, and the studio still maintains it at no charge.'
  },
  {
    year: '2014',
    title: 'Foundry partnership',
    description: 'A standing relationship with a local foundry lets the studio cast bronze in-region and reclaim its own sprues.'
  },
  {
    year: '2018',
    title: 'Apprenticeships begin',
    description: 'The first paid summer apprentices join Diana at the bench. Nine have come through the program since.'
  },
  {
    year: '2022',
    title: 'Material pledge',
    description: 'The studio commits to reused stone where the work allows, recycled bronze, and timber from fallen trees only.'
  },
  {
    year: '2024',
    title: 'Yard expansion',
    description: 'The assembly yard doubles, so monumental works can be built and viewed at full size before they travel.'
  }
];

export const csrPrograms: CsrProgram[] = [
  {
    id: 1,
    title: 'Material stewardship',
    summary: 'Less waste from the bench, and a record of where every block comes from.',
    description: 'Offcuts of marble and limestone are kept, recut for small works, or given to neighboring studios and school shops. Bronze sprues return to the foundry. New timber is refused unless the tree had already fallen. Each commission file notes the quarry, the melt, or the mill.',
    impact: '18 tons of stone offcut reused or donated last year',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 2,
    title: 'Open Studio Saturdays',
    summary: 'The doors open once a month for anyone in the neighborhood.',
    description: 'On the first Saturday of the month the studio is free to walk through. Diana and James host a short demonstration, and visitors can handle tools, stone samples, and works in progress. No ticket, no reservation for individuals.',
    impact: '140 neighbors and students through the doors last year',
    image: 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 3,
    title: 'Paid apprenticeships',
    summary: 'A summer at the bench, with a wage, not an unpaid internship.',
    description: 'Two apprentices each summer work beside Diana for twelve weeks. They are paid, insured, and finish with a small piece of their own and a written reference. Preference goes to students from public high schools and city colleges.',
    impact: '9 apprentices since 2018, 6 now working in the crafts',
    image: 'https://images.pexels.com/photos/4100720/pexels-photo-4100720.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 4,
    title: 'Civic gift program',
    summary: 'One public work a year for a place that could not otherwise commission it.',
    description: 'Schools, libraries, and neighborhood parks can apply. The studio covers design and a share of fabrication. The partner covers the site, the foundation, and long-term care. James coordinates the install with a trusted rigger.',
    impact: '6 gifted or subsidized works since the program began',
    image: 'https://images.pexels.com/photos/6492399/pexels-photo-6492399.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 5,
    title: 'Heritage care',
    summary: 'Conservation hours set aside for community monuments.',
    description: 'Each year the studio reserves a block of restoration time for monuments, church carvings, and memorials that belong to the public and have no budget for a conservator. Work starts with a written condition report.',
    impact: '4 community monuments treated in the last three years',
    image: 'https://images.pexels.com/photos/3004905/pexels-photo-3004905.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 6,
    title: 'School workshops',
    summary: 'Clay and carving sessions brought to classrooms, or hosted here.',
    description: 'A half-day workshop for grades 6–12: a short talk on looking at sculpture, then hands in clay. Materials are supplied. Teachers receive a lesson sheet they can reuse. Visits inside the city are free for public schools.',
    impact: '22 classroom sessions in the last school year',
    image: 'https://images.pexels.com/photos/4100720/pexels-photo-4100720.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];

export const faqs: Faq[] = [
  {
    id: 1,
    question: 'How long does a commission take?',
    answer: 'A small wood or marble work is often four to six months. A life-size bronze or a civic piece runs nine to fourteen months, including casting and installation. We give a written schedule with the proposal.'
  },
  {
    id: 2,
    question: 'How is the price set?',
    answer: 'Price follows scale, material, and the hours the piece will actually take. After the first conversation you receive a proposal with a fixed figure, what is included, and what would change the cost. Gallery works are priced as marked.'
  },
  {
    id: 3,
    question: 'Can I visit while the work is being made?',
    answer: 'Yes. Commissioners are welcome at the maquette stage and again when the form is blocked out. General studio visits are by appointment on Tuesday and Thursday mornings.'
  },
  {
    id: 4,
    question: 'Do you deliver and install?',
    answer: 'We crate, ship, and install within the region ourselves. Farther away, we travel with a rigger we already know. Installation is quoted with the commission, not added as a surprise.'
  },
  {
    id: 5,
    question: 'Which materials do you work in?',
    answer: 'Marble, limestone, bronze, steel, and wood. We will say no to a material if it is wrong for the site — outdoor timber in a harsh exposure, for example — and suggest what will last.'
  },
  {
    id: 6,
    question: 'Do you work with architects and committees?',
    answer: 'Often. We join at concept or after a shortlist, provide drawings and engineering notes, and present to boards. Public art follows the same process as a private commission, with more reviews built in.'
  }
];

export const clients = [
  'Harborline Civic Trust',
  'Northline Museum',
  'Alder & Pine Residences',
  'Vale University',
  'Meridian Hotels',
  'City of Westbridge'
];

export const studioStats = [
  { value: '22', label: 'Years on Artisan Lane' },
  { value: '180+', label: 'Commissions completed' },
  { value: '40', label: 'Exhibitions' },
  { value: '12', label: 'Civic installations' }
];