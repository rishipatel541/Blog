import { images } from '../assets/images'

export type FilterType = 'latest' | 'popular' | 'trending'

export type EditorialPost = {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string[]
  category: string
  categorySlug: string
  brand: string
  brandSlug: string
  tags: string[]
  dateLabel: string
  readTime: string
  author: string
  image: string
  accentFrom: string
  accentTo: string
  isTrending: boolean
  popularity: number
}

export type AffiliateProduct = {
  id: string
  name: string
  description: string
  price: string
  image: string
  link: string
}

export type BrandDeal = {
  id: string
  title: string
  summary: string
  ctaLabel: string
  ctaLink: string
}

export const editorialPosts: EditorialPost[] = [
  {
    id: 'ep-1',
    slug: 'best-desk-setup',
    title: 'Best Desk Setup in 2026 for Focus and Comfort',
    excerpt: 'A practical setup guide for creators who want cleaner ergonomics and better output.',
    content: [
      'Designing a productive desk setup is less about expensive gear and more about reducing friction in your daily routine. Start by arranging your screen at eye level and keeping your keyboard at elbow height.',
      'Lighting is the second multiplier. A soft key light and a neutral ambient lamp reduce eye strain while making long writing or design sessions more sustainable.',
      'Finally, choose accessories that remove clutter: one charging hub, one notebook, and one trusted pair of headphones. Fewer decisions means more focused execution.',
    ],
    category: 'Tech',
    categorySlug: 'tech',
    brand: 'Amazon',
    brandSlug: 'amazon',
    tags: ['design', 'productivity', 'workspace'],
    dateLabel: 'Apr 18, 2026',
    readTime: '8 min read',
    author: 'Alicon Atiqs',
    image: images.thumb1,
    accentFrom: '#7c3aed',
    accentTo: '#2563eb',
    isTrending: true,
    popularity: 98,
  },
  {
    id: 'ep-2',
    slug: 'ai-writing-workflow',
    title: 'AI Writing Workflow for Editorial Teams',
    excerpt: 'Build a repeatable content pipeline without losing voice, quality, or SEO depth.',
    content: [
      'AI can dramatically accelerate ideation, but quality control still depends on editorial standards. Keep a clear voice framework for every draft and review.',
      'Treat your workflow as a sequence: research prompts, outline generation, human edit, SEO pass, and publication checklist. This process keeps output consistent.',
      'A modern team wins when writers and editors collaborate with shared templates and measurable standards.',
    ],
    category: 'Tech',
    categorySlug: 'tech',
    brand: 'Notion',
    brandSlug: 'notion',
    tags: ['ai', 'workflow', 'seo'],
    dateLabel: 'Apr 10, 2026',
    readTime: '7 min read',
    author: 'Lia Mobdox',
    image: images.thumb2,
    accentFrom: '#2563eb',
    accentTo: '#22c55e',
    isTrending: true,
    popularity: 95,
  },
  {
    id: 'ep-3',
    slug: 'design-system-for-content-sites',
    title: 'Design Systems for Content-Heavy Websites',
    excerpt: 'How to keep typography, spacing, and cards consistent across editorial pages.',
    content: [
      'Content websites often break consistency first in card layouts and spacing. A design system solves this by defining reusable primitives and clear constraints.',
      'Start with typography scales for titles, subtitles, body text, and metadata. Pair these with spacing tokens to make every section feel related.',
      'When components are stable, your team ships faster and users navigate with less cognitive load.',
    ],
    category: 'Design',
    categorySlug: 'design',
    brand: 'Figma',
    brandSlug: 'figma',
    tags: ['design', 'systems', 'ui'],
    dateLabel: 'Mar 30, 2026',
    readTime: '6 min read',
    author: 'Jane Auten',
    image: images.thumb3,
    accentFrom: '#ec4899',
    accentTo: '#7c3aed',
    isTrending: false,
    popularity: 90,
  },
  {
    id: 'ep-4',
    slug: 'affiliate-content-strategy',
    title: 'Affiliate Content Strategy That Converts',
    excerpt: 'Structure your article to provide value first and still drive high-intent clicks.',
    content: [
      'The strongest affiliate pages educate first, recommend second. Start with context and a clear problem your reader wants to solve.',
      'Product blocks should be scannable and transparent. Include concise pros, use-case fit, and expected budget range.',
      'A final CTA works best when it is specific: tell readers who the deal is best for and why now is the right moment.',
    ],
    category: 'Marketing',
    categorySlug: 'marketing',
    brand: 'Amazon',
    brandSlug: 'amazon',
    tags: ['affiliate', 'seo', 'conversion'],
    dateLabel: 'Mar 20, 2026',
    readTime: '9 min read',
    author: 'Rafiq Senn',
    image: images.thumb4,
    accentFrom: '#f97316',
    accentTo: '#ec4899',
    isTrending: true,
    popularity: 92,
  },
  {
    id: 'ep-5',
    slug: 'minimal-home-office-design',
    title: 'Minimal Home Office Design for Deep Work',
    excerpt: 'Simple design choices that make your home office calm and high-performing.',
    content: [
      'A minimal office does not mean empty. It means each object has a purpose and supports your focus loop.',
      'Use one dominant color family and subtle textures to avoid visual noise. Add plants and warm lighting for balance.',
      'The final layer is routine: reset your desk at the end of every day so tomorrow starts friction-free.',
    ],
    category: 'Lifestyle',
    categorySlug: 'lifestyle',
    brand: 'Ikea',
    brandSlug: 'ikea',
    tags: ['design', 'workspace', 'lifestyle'],
    dateLabel: 'Mar 12, 2026',
    readTime: '5 min read',
    author: 'Miyaalcom Gidwadi',
    image: images.thumb2,
    accentFrom: '#22c55e',
    accentTo: '#2563eb',
    isTrending: false,
    popularity: 84,
  },
  {
    id: 'ep-6',
    slug: 'newsletter-growth-playbook',
    title: 'Newsletter Growth Playbook for Indie Publishers',
    excerpt: 'A compact growth system to consistently increase subscribers every month.',
    content: [
      'Newsletter growth compounds when acquisition and retention loops are designed together. Pair every post with a clear subscriber benefit.',
      'Offer one lead magnet aligned with your best category. Keep signup friction low and explain exactly what readers receive.',
      'Measure weekly cohorts and optimize subject line, send time, and content pillars based on engagement.',
    ],
    category: 'Marketing',
    categorySlug: 'marketing',
    brand: 'ConvertKit',
    brandSlug: 'convertkit',
    tags: ['newsletter', 'growth', 'seo'],
    dateLabel: 'Mar 03, 2026',
    readTime: '6 min read',
    author: 'Nora Vens',
    image: images.thumb1,
    accentFrom: '#7c3aed',
    accentTo: '#22c55e',
    isTrending: false,
    popularity: 86,
  },
]

export const affiliateProducts: AffiliateProduct[] = [
  {
    id: 'pr-1',
    name: 'ErgoLift Standing Desk',
    description: 'Stable electric desk with memory presets and cable routing.',
    price: '$399',
    image: images.thumb1,
    link: '#',
  },
  {
    id: 'pr-2',
    name: 'FlowType Mechanical Keyboard',
    description: 'Low-profile tactile keys for long writing sessions.',
    price: '$129',
    image: images.thumb2,
    link: '#',
  },
  {
    id: 'pr-3',
    name: 'Clarity 4K Monitor',
    description: 'Sharp 27-inch panel ideal for editing and research.',
    price: '$349',
    image: images.thumb3,
    link: '#',
  },
]

export const brandDeals: Record<string, BrandDeal[]> = {
  amazon: [
    {
      id: 'deal-1',
      title: 'Spring Workspace Bundle',
      summary: 'Save up to 20% on desk accessories this week.',
      ctaLabel: 'View Deal',
      ctaLink: '#',
    },
  ],
  notion: [
    {
      id: 'deal-2',
      title: 'Team Plan Trial',
      summary: 'Try collaborative workspaces with automation templates.',
      ctaLabel: 'Start Trial',
      ctaLink: '#',
    },
  ],
}

export const popularTags = ['design', 'seo', 'affiliate', 'workflow', 'productivity', 'workspace']

export function getPostsByCategory(slug: string) {
  return editorialPosts.filter((post) => post.categorySlug === slug)
}

export function getPostsByTag(slug: string) {
  return editorialPosts.filter((post) => post.tags.includes(slug))
}

export function getPostsByBrand(slug: string) {
  return editorialPosts.filter((post) => post.brandSlug === slug)
}

export function getPostBySlug(slug: string) {
  return editorialPosts.find((post) => post.slug === slug)
}

export function getFilteredPosts(posts: EditorialPost[], filter: FilterType) {
  if (filter === 'trending') return posts.filter((post) => post.isTrending)
  if (filter === 'popular') return [...posts].sort((a, b) => b.popularity - a.popularity)
  return [...posts].sort((a, b) => new Date(b.dateLabel).getTime() - new Date(a.dateLabel).getTime())
}

export function searchPosts(query: string) {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return []
  return editorialPosts.filter((post) =>
    [post.title, post.excerpt, post.category, post.brand, post.tags.join(' ')].join(' ').toLowerCase().includes(normalized),
  )
}
