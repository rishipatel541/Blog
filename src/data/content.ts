import { images } from '../assets/images'

export type BlogPost = {
  id: string
  category: string
  title: string
  excerpt: string
  author: string
  dateLabel: string
  readTime: string
  image: string
  accentFrom: string
  accentTo: string
}

export type WorkItem = {
  id: string
  category: string
  title: string
  image: string
  accentFrom: string
  accentTo: string
  highlight: string
}

export type VideoItem = {
  id: string
  category: string
  title: string
  duration: string
  image: string
  accentFrom: string
  accentTo: string
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const popularTags = [
  'Popular',
  'Portfolio',
  'Design',
  'UI/UX',
  'Writing',
  'Food',
  'Travel',
  'Lifestyle',
  'Branding',
  'Fashion',
] as const

export const stats = [
  { label: 'Perfect Posts', value: '480+' },
  { label: 'Social Shares', value: '2K+' },
  { label: 'Super Authors', value: '100+' },
  { label: 'Regular Visitors', value: '10K' },
] as const

export const featuredPosts: BlogPost[] = [
  {
    id: 'p1',
    category: 'Web Design',
    title: 'The Evolution of Web Design From Static to Dynamic',
    excerpt:
      'Web design has evolved from static pages to dynamic, interactive experiences. Modern sites adapt to user behavior and devices.',
    author: 'Alixon Atiqs',
    dateLabel: 'Apr 20, 2025',
    readTime: '6 min read',
    image: images.thumb1,
    accentFrom: '#7c3aed',
    accentTo: '#2563eb',
  },
  {
    id: 'p2',
    category: 'App Design',
    title: 'Designing Apps That Delight: A Guide to Engaging Interfaces',
    excerpt:
      'Delightful apps focus on user-friendly design, smooth interactions, and visual appeal. Clear navigation and thoughtful feedback keep users engaged.',
    author: 'Lia Mobdox',
    dateLabel: 'Feb 23, 2025',
    readTime: '7 min read',
    image: images.thumb2,
    accentFrom: '#2563eb',
    accentTo: '#22c55e',
  },
  {
    id: 'p3',
    category: 'Logo Design',
    title: 'The Science Behind a Perfect Logo Tips for Timeless Design',
    excerpt:
      'A timeless logo is simple, memorable, and versatile. Learn the principles that keep brands recognizable across mediums.',
    author: 'Miyaalcom Gidwadi',
    dateLabel: 'Jan 22, 2025',
    readTime: '5 min read',
    image: images.thumb3,
    accentFrom: '#f97316',
    accentTo: '#ec4899',
  },
  {
    id: 'p4',
    category: 'Branding',
    title: 'Building a Brand Voice That Sounds Like You',
    excerpt:
      'A strong voice is consistent, human, and intentional. Here’s a simple framework to define tone, vocabulary, and messaging pillars.',
    author: 'Nora Vens',
    dateLabel: 'Dec 08, 2024',
    readTime: '8 min read',
    image: images.thumb4,
    accentFrom: '#22c55e',
    accentTo: '#2563eb',
  },
  {
    id: 'p5',
    category: 'Technology',
    title: 'Design Systems That Scale: Tokens, Components, and Trust',
    excerpt:
      'When design tokens match product intent, teams move faster with fewer regressions. Learn the structure that keeps UI cohesive.',
    author: 'Rafiq Senn',
    dateLabel: 'Nov 19, 2024',
    readTime: '9 min read',
    image: images.thumb1,
    accentFrom: '#2563eb',
    accentTo: '#7c3aed',
  },
]

export const works: WorkItem[] = [
  {
    id: 'w1',
    category: 'UX Design • Mobile App',
    title: 'AI Flying The Secrets to Intuitive App Design',
    highlight: 'Creating Seamless User Experiences',
    image: images.thumb2,
    accentFrom: '#7c3aed',
    accentTo: '#2563eb',
  },
  {
    id: 'w2',
    category: 'UI Design • Website',
    title: 'Cozmo Web Design Trends for 2024',
    highlight: 'Ideas to Elevate Your Online Presence',
    image: images.thumb1,
    accentFrom: '#2563eb',
    accentTo: '#22c55e',
  },
  {
    id: 'w3',
    category: 'Design • Dashboard',
    title: 'Designing Intuitive Dashboards',
    highlight: 'Data Accessible and Actionable',
    image: images.thumb3,
    accentFrom: '#ec4899',
    accentTo: '#7c3aed',
  },
  {
    id: 'w4',
    category: 'Branding • Dashboard',
    title: 'The Art of Branding',
    highlight: 'Designing Visual Identities That Truly Stand Out',
    image: images.thumb4,
    accentFrom: '#22c55e',
    accentTo: '#2563eb',
  },
  {
    id: 'w5',
    category: 'Web • Editorial',
    title: 'Minimal Blog UI Kit for Fast Publishing',
    highlight: 'Layouts, typography rhythm, and accessible components',
    image: images.thumb1,
    accentFrom: '#f97316',
    accentTo: '#ec4899',
  },
  {
    id: 'w6',
    category: 'Branding • Identity',
    title: 'Pastel Brand Identity for Modern Creators',
    highlight: 'Logo, palette, and social templates in one system',
    image: images.thumb3,
    accentFrom: '#7c3aed',
    accentTo: '#22c55e',
  },
]

export const recentPosts: BlogPost[] = [
  {
    id: 'rp1',
    category: 'Web Design',
    title: 'How to Build a Landing Page That Performs Great',
    excerpt: 'Clarity beats cleverness. A few layout and copy tweaks can lift sign-ups fast.',
    author: 'Jane Auten',
    dateLabel: 'Mar 12, 2025',
    readTime: '4 min read',
    image: images.thumb1,
    accentFrom: '#7c3aed',
    accentTo: '#2563eb',
  },
  {
    id: 'rp2',
    category: 'Design Process',
    title: 'How to Design a Timeless Logo',
    excerpt: 'Start with constraints, reduce complexity, and test at tiny sizes early.',
    author: 'Miyaalcom Gidwadi',
    dateLabel: 'Jan 26, 2025',
    readTime: '5 min read',
    image: images.thumb3,
    accentFrom: '#f97316',
    accentTo: '#ec4899',
  },
  {
    id: 'rp3',
    category: 'Branding',
    title: 'Building a Strong Brand Identity Beyond the Logo',
    excerpt: 'Voice, visuals, and consistency: the three levers that compound trust.',
    author: 'Jane Auten',
    dateLabel: 'Mar 17, 2025',
    readTime: '6 min read',
    image: images.thumb4,
    accentFrom: '#22c55e',
    accentTo: '#2563eb',
  },
  {
    id: 'rp4',
    category: 'UI/UX',
    title: 'Micro-interactions That Make Interfaces Feel Premium',
    excerpt: 'Small motion cues (done lightly) can improve clarity and perceived quality without clutter.',
    author: 'Lia Mobdox',
    dateLabel: 'Feb 05, 2025',
    readTime: '5 min read',
    image: images.thumb2,
    accentFrom: '#2563eb',
    accentTo: '#22c55e',
  },
  {
    id: 'rp5',
    category: 'Lifestyle',
    title: 'A Simple Morning Routine for Consistent Creativity',
    excerpt: 'A repeatable process beats motivation. Use a low-friction routine to ship ideas daily.',
    author: 'Nora Vens',
    dateLabel: 'Jan 10, 2025',
    readTime: '4 min read',
    image: images.thumb3,
    accentFrom: '#ec4899',
    accentTo: '#7c3aed',
  },
  {
    id: 'rp6',
    category: 'Technology',
    title: 'SEO for Humans: Structure, Speed, and Strong Headlines',
    excerpt: 'Write for readers first, then help search engines with clean structure and performance basics.',
    author: 'Rafiq Senn',
    dateLabel: 'Dec 27, 2024',
    readTime: '7 min read',
    image: images.thumb1,
    accentFrom: '#7c3aed',
    accentTo: '#2563eb',
  },
]

export const videos: VideoItem[] = [
  {
    id: 'v1',
    category: 'Web Design',
    title: 'Create a Landing Page That Performs Great',
    duration: '12:48',
    image: images.thumb1,
    accentFrom: '#7c3aed',
    accentTo: '#2563eb',
  },
  {
    id: 'v2',
    category: 'App Design',
    title: 'Behind the App Design: A Day in the Life of a Designer',
    duration: '08:13',
    image: images.thumb2,
    accentFrom: '#2563eb',
    accentTo: '#22c55e',
  },
  {
    id: 'v3',
    category: 'Dashboard',
    title: 'Making Data Beautiful That Art of Dashboard Design',
    duration: '10:05',
    image: images.thumb3,
    accentFrom: '#ec4899',
    accentTo: '#7c3aed',
  },
  {
    id: 'v4',
    category: 'Branding',
    title: 'From Moodboard to Identity: A Practical Workflow',
    duration: '14:22',
    image: images.thumb4,
    accentFrom: '#f97316',
    accentTo: '#ec4899',
  },
  {
    id: 'v5',
    category: 'Design Process',
    title: 'How to Critique Your Own Designs (Without Overthinking)',
    duration: '09:41',
    image: images.thumb2,
    accentFrom: '#22c55e',
    accentTo: '#2563eb',
  },
]

