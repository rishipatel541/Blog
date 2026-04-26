import { images } from '../assets/images'

export type FilterType = 'latest' | 'popular' | 'trending'

export type SEOData = {
  metaTitle: string
  metaDescription: string
  keywords: string[]
}

export type ProductProsCons = {
  pros: string[]
  cons: string[]
}

export type EditorialProduct = {
  id: string
  name: string
  image: string
  price: string
  currency: string
  features: string[]
  prosCons: ProductProsCons
  ctaLink: string
  ctaLabel: string
  rating: number
  bestFor: string
}

export type ComparisonRow = {
  productName: string
  feature: string
  price: string
  ctaLink: string
}

export type FAQItem = {
  question: string;
  answer: string;
};

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
  
  // SEO & Affiliate System
  seo: SEOData
  hook: string
  quickSummary: string[]
  productSections: EditorialProduct[]
  comparisonData: ComparisonRow[]
  buyingGuide: string[]
  faqs: FAQItem[]
  conclusion: string
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
    id: 'ep-7',
    slug: 'best-standing-desk-under-500',
    title: 'Best Standing Desks Under $500: Top 5 Picks for 2026',
    excerpt: 'Sitting all day is destroying your posture and killing your energy. We reviewed the top 5 affordable standing desks that actually last.',
    category: 'Workspace',
    categorySlug: 'workspace',
    brand: 'Amazon',
    brandSlug: 'amazon',
    tags: ['ergonomics', 'office', 'deals'],
    dateLabel: 'Apr 26, 2026',
    readTime: '15 min read',
    author: 'Rafiq Senn',
    image: images.thumb1,
    accentFrom: '#7c3aed',
    accentTo: '#2563eb',
    isTrending: true,
    popularity: 99,
    seo: {
      metaTitle: '5 Best Standing Desks Under $500 (2026) - Expert Reviews',
      metaDescription: 'Discover the best standing desks under $500. We tested for stability, motor noise, and durability. FlexiSpot, ErgoLift, and more compared.',
      keywords: ['best standing desk under 500', 'affordable standing desk review', 'electric standing desk 2026'],
    },
    hook: "You've heard it before: 'Sitting is the new smoking.' But the reality is even worse. Slouching over a static desk for 8 hours a day leads to chronic back pain, decreased blood flow, and a mental fog that no amount of coffee can fix. The good news? In 2026, you don't need to spend four figures to transform your work-life. We've found the 'sweet spot' desks that offer premium features for under $500.",
    quickSummary: [
      "🏆 Best Overall: ErgoLift Pro 2.0 - Unbeatable stability.",
      "💰 Best Value: FlexiSpot Essential - Pro features, entry-level price.",
      "🏠 Best for Small Spaces: CompactRise 48 - Perfect for apartments.",
      "💪 Most Durable: SteelFrame HeavyDuty - 250lb weight capacity.",
    ],
    productSections: [
      {
        id: 'p7-1',
        name: 'ErgoLift Pro 2.0',
        image: images.thumb1,
        price: '449',
        currency: '$',
        bestFor: 'The serious professional looking for maximum stability.',
        features: [
          'Dual-motor system (ultra-quiet <45dB)',
          '4-position memory controller with LED display',
          'Heavy-duty T-style legs for zero wobble',
          'Anti-collision safety sensors',
        ],
        prosCons: {
          pros: ['Remarkably stable even at max height', 'Smooth, fast transitions', 'Beautiful solid oak finish options'],
          cons: ['Assembly takes about 45 minutes', 'Heavy shipping box'],
        },
        ctaLink: 'https://amazon.com',
        ctaLabel: 'Check Price on Amazon',
        rating: 4.9,
      },
      {
        id: 'p7-2',
        name: 'FlexiSpot Essential E5',
        image: images.thumb2,
        price: '329',
        currency: '$',
        bestFor: 'Students and remote workers on a budget.',
        features: [
          'High-grade carbon steel frame',
          'One-touch electric height adjustment',
          'Spacious 48x24 inch desktop included',
        ],
        prosCons: {
          pros: ['Very affordable price point', 'Great customer support', 'Lightweight and easy to move'],
          cons: ['Single motor is slightly slower', 'Minor wobble at highest setting'],
        },
        ctaLink: 'https://amazon.com',
        ctaLabel: 'View Current Discount',
        rating: 4.6,
      },
    ],
    comparisonData: [
      { productName: 'ErgoLift Pro', feature: 'Dual Motor / 220lb', price: '$449', ctaLink: '#' },
      { productName: 'FlexiSpot E5', feature: 'Single Motor / 154lb', price: '$329', ctaLink: '#' },
      { productName: 'SteelFrame HD', feature: 'Dual Motor / 250lb', price: '$499', ctaLink: '#' },
    ],
    buyingGuide: [
      "Stability Check: Always look for a desk weight of at least 60lbs. Anything lighter will wobble when you type.",
      "Motor Type: Dual motors are quieter and last 2x longer than single motor systems.",
      "Desktop Material: Avoid thin particle board. Look for high-density MDF or solid wood to prevent sagging.",
      "Memory Presets: At least 3 presets are necessary (Sitting, Standing, and a spare for a walking pad).",
    ],
    faqs: [
      { 
        question: "Is a standing desk worth it in 2026?", 
        answer: "Absolutely. Beyond the health benefits, the ability to change posture every 60 minutes significantly improves focus and prevents the 'afternoon slump'." 
      },
      { 
        question: "Can I put a walking pad under these desks?", 
        answer: "Yes, all the desks on this list have a minimum height low enough to accommodate standard walking pads." 
      },
    ],
    conclusion: "If you want a desk that will last you the next 10 years without breaking the bank, the **ErgoLift Pro 2.0** is the gold standard under $500. It's the only desk in this price range that feels as solid as a $1,000 Herman Miller.",
    content: [],
  },
  {
    id: 'ep-8',
    slug: 'macbook-air-m3-vs-dell-xps-13',
    title: 'MacBook Air M3 vs Dell XPS 13 (2026): Which is Best for You?',
    excerpt: 'The battle for the best ultraportable laptop. We compare performance, battery life, and value for US students and professionals.',
    category: 'Computing',
    categorySlug: 'tech',
    brand: 'Apple',
    brandSlug: 'apple',
    tags: ['laptop', 'comparison', 'tech-deals'],
    dateLabel: 'Apr 24, 2026',
    readTime: '18 min read',
    author: 'Lia Mobdox',
    image: images.thumb2,
    accentFrom: '#2563eb',
    accentTo: '#22c55e',
    isTrending: true,
    popularity: 97,
    seo: {
      metaTitle: 'MacBook Air M3 vs Dell XPS 13 (2026 Comparison Guide)',
      metaDescription: 'Detailed comparison of MacBook Air M3 and Dell XPS 13. Which 2026 ultraportable wins on battery, price, and performance? Read before you buy.',
      keywords: ['macbook air vs dell xps', 'best laptop 2026', 'macbook air m3 review'],
    },
    hook: "Choosing between a Mac and a PC has never been harder. With Apple's M3 silicon and Dell's stunning new OLED displays, the line between 'premium' and 'pro' has blurred. Are you paying for the logo, or for the performance?",
    quickSummary: [
      "Battery King: MacBook Air M3 (18+ hours)",
      "Display Winner: Dell XPS 13 (OLED Touch)",
      "Portability: Tie (Both under 2.8 lbs)",
      "Price: Dell XPS (Often $100-200 cheaper)",
    ],
    productSections: [
      {
        id: 'p8-1',
        name: 'MacBook Air M3 (13-inch)',
        image: images.thumb2,
        price: '1099',
        currency: '$',
        bestFor: 'Creatives and students needing all-day battery.',
        features: [
          'Apple M3 Chip with 8-core CPU',
          'Silent fanless design',
          'MagSafe 3 charging',
          'Liquid Retina display',
        ],
        prosCons: {
          pros: ['Industry-leading battery life', 'Perfect trackpad and keyboard', 'Silent operation'],
          cons: ['Only two USB-C ports', 'Expensive RAM/Storage upgrades'],
        },
        ctaLink: 'https://amazon.com',
        ctaLabel: 'Check Price on Amazon',
        rating: 4.9,
      },
      {
        id: 'p8-2',
        name: 'Dell XPS 13 (9340)',
        image: images.thumb1,
        price: '949',
        currency: '$',
        bestFor: 'Windows power users and media consumers.',
        features: [
          'Intel Core Ultra 7 processor',
          'Edge-to-edge OLED InfinityEdge touch display',
          'Haptic glass touchpad',
        ],
        prosCons: {
          pros: ['Stunning OLED screen', 'Ultra-thin bezel design', 'Solid Windows performance'],
          cons: ['Battery life falls short of Mac', 'Webcam is average'],
        },
        ctaLink: 'https://amazon.com',
        ctaLabel: 'View Best Buy Price',
        rating: 4.7,
      },
    ],
    comparisonData: [
      { productName: 'MacBook Air M3', feature: '18hr Battery / M3', price: '$1099', ctaLink: '#' },
      { productName: 'Dell XPS 13', feature: '12hr Battery / OLED', price: '$949', ctaLink: '#' },
    ],
    buyingGuide: [
      "OS Choice: If you're deep in the iPhone ecosystem, the Mac is a no-brainer. For specialized software, Windows wins.",
      "Screen Quality: If you watch a lot of movies, the XPS 13 OLED is leagues ahead of the Mac's LCD.",
      "Ports: Both laptops are port-starved. Budget for a USB-C hub regardless of your choice.",
    ],
    faqs: [
      { 
        question: "Is the MacBook Air M3 fast enough for video editing?", 
        answer: "Yes, it easily handles 4K video editing in Final Cut Pro or Premiere Pro, though the MacBook Pro is better for heavy 3D rendering." 
      },
      { 
        question: "Does the Dell XPS 13 overheat?", 
        answer: "The new Core Ultra chips run much cooler than previous generations, but the fans will kick in during heavy multitasking." 
      },
    ],
    conclusion: "Go for the **MacBook Air M3** if you value silence and battery above all else. Choose the **Dell XPS 13** if you want the best screen in the business and prefer the Windows ecosystem.",
    content: [],
  },
  {
    id: 'ep-9',
    slug: 'best-gaming-chairs-for-back-pain',
    title: '5 Best Gaming Chairs for Back Pain in 2026: Ergonomic Review',
    excerpt: 'Stop sacrificing your spine for your K/D ratio. We tested the most ergonomic gaming chairs designed for lumbar support.',
    category: 'Gaming',
    categorySlug: 'gaming',
    brand: 'Secretlab',
    brandSlug: 'secretlab',
    tags: ['ergonomics', 'gaming', 'health'],
    dateLabel: 'Apr 22, 2026',
    readTime: '14 min read',
    author: 'Rafiq Senn',
    image: images.thumb3,
    accentFrom: '#ef4444',
    accentTo: '#7c3aed',
    isTrending: true,
    popularity: 96,
    seo: {
      metaTitle: '5 Best Gaming Chairs for Back Pain (2026 Ergonomic Guide)',
      metaDescription: 'Don\'t let back pain stop your gaming. Review of the best ergonomic gaming chairs with lumbar support. Secretlab, Noblechairs, and more.',
      keywords: ['best gaming chair for back pain', 'ergonomic gaming chair', 'lumbar support chair review'],
    },
    hook: "Most gaming chairs are designed to look like racing seats, not to support human anatomy. If you spend more than 4 hours a day in your chair, that 'cool' bucket seat is likely the reason for your lower back stiffness and neck strain.",
    quickSummary: [
      "Top Pick: Secretlab Titan EVO 2026",
      "Best Premium: Noblechairs HERO",
      "Best Budget: Razer Enki X",
      "Best Mesh: ErgoGaming Pro",
    ],
    productSections: [
      {
        id: 'p9-1',
        name: 'Secretlab Titan EVO 2026',
        image: images.thumb3,
        price: '549',
        currency: '$',
        bestFor: 'The ultimate balance of style and orthopedic support.',
        features: [
          '4-way L-ADAPT™ lumbar support system',
          'Magnetic memory foam head pillar',
          'Pebble seat base for optimal pressure distribution',
        ],
        prosCons: {
          pros: ['World-class lumbar adjustment', 'Extremely durable upholstery', '5-year extended warranty'],
          cons: ['Firm seat padding might not suit everyone', 'Premium price point'],
        },
        ctaLink: 'https://secretlab.co',
        ctaLabel: 'Check Price on Secretlab',
        rating: 4.9,
      },
    ],
    comparisonData: [
      { productName: 'Titan EVO', feature: 'L-ADAPT™ Lumbar', price: '$549', ctaLink: '#' },
      { productName: 'Razer Enki X', feature: 'Built-in Arch', price: '$399', ctaLink: '#' },
    ],
    buyingGuide: [
      "Lumbar Support: Look for adjustable depth and height, not just a removable pillow.",
      "Seat Depth: Ensure your knees have 2-3 inches of space from the seat edge.",
      "Material: Breathable fabric is better for long sessions than cheap PU leather.",
    ],
    faqs: [
      { question: "Are gaming chairs actually good for your back?", answer: "Only if they have proper ergonomic adjustments. Standard racing-style chairs often lack the necessary lumbar support." },
    ],
    conclusion: "If your budget allows, the **Secretlab Titan EVO** is the only chair we've tested that genuinely rivals high-end office chairs for spinal health.",
    content: [],
  },
  {
    id: 'ep-10',
    slug: 'best-home-office-coffee-makers',
    title: 'Top 3 Coffee Makers for Home Offices: Stay Productive',
    excerpt: 'Ditch the expensive cafe runs. We found the best coffee makers that fit perfectly on your desk or side table.',
    category: 'Lifestyle',
    categorySlug: 'lifestyle',
    brand: 'Keurig',
    brandSlug: 'keurig',
    tags: ['coffee', 'home-office', 'productivity'],
    dateLabel: 'Apr 20, 2026',
    readTime: '10 min read',
    author: 'Nora Vens',
    image: images.thumb4,
    accentFrom: '#f59e0b',
    accentTo: '#78350f',
    isTrending: false,
    popularity: 88,
    seo: {
      metaTitle: 'Best Coffee Makers for Home Office (2026 Update)',
      metaDescription: 'Find the perfect coffee maker for your home office. We reviewed compact pod machines and high-end espresso makers for productivity.',
      keywords: ['best coffee maker for home office', 'office coffee machine review', 'keurig vs nespresso'],
    },
    hook: "The '3 PM Slump' is real, and your productivity depends on how you handle it. A high-quality coffee maker in your home office isn't a luxury—it's a time-saving tool that keeps you in the flow state.",
    quickSummary: [
      "Best Pod: Nespresso Vertuo Pop",
      "Best Drip: Ninja Specialty Coffee Maker",
      "Best Compact: Keurig K-Mini",
    ],
    productSections: [
      {
        id: 'p10-1',
        name: 'Nespresso Vertuo Pop+',
        image: images.thumb4,
        price: '129',
        currency: '$',
        bestFor: 'Quick, high-quality espresso with zero cleanup.',
        features: [
          'Centrifusion™ technology for perfect crema',
          'Compact 5-inch wide design',
          'Automatic pod recognition',
        ],
        prosCons: {
          pros: ['Very small footprint', 'Consistently excellent coffee', 'Simple one-button operation'],
          cons: ['Pods can be expensive', 'Not for large batches of coffee'],
        },
        ctaLink: 'https://amazon.com',
        ctaLabel: 'Shop on Amazon',
        rating: 4.7,
      },
    ],
    comparisonData: [
      { productName: 'Nespresso Pop+', feature: 'Espresso / Pods', price: '$129', ctaLink: '#' },
      { productName: 'Keurig K-Mini', feature: 'Drip / Pods', price: '$79', ctaLink: '#' },
    ],
    buyingGuide: [
      "Space: Measure your desk space. Look for machines under 6 inches wide for office use.",
      "Noise Level: If you take a lot of calls, avoid loud bean-to-cup machines.",
      "Cleanup: Pod machines are best for offices where you don't want to deal with wet grounds.",
    ],
    faqs: [
      { question: "Are pods better than ground coffee for offices?", answer: "For convenience and speed, pods win. For cost and flavor variety, ground coffee is better." },
    ],
    conclusion: "The **Nespresso Vertuo Pop+** is our favorite for its tiny footprint and the quality of the 'boost' it provides during a busy workday.",
    content: [],
  },
  {
    id: 'ep-11',
    slug: 'mechanical-keyboard-vs-membrane',
    title: 'Mechanical vs Membrane Keyboards: Which is Best for Coding?',
    excerpt: 'Is the clicky sound worth the price? We break down the best keyboard types for software engineers and writers.',
    category: 'Computing',
    categorySlug: 'tech',
    brand: 'Logitech',
    brandSlug: 'logitech',
    tags: ['keyboards', 'coding', 'tech-comparison'],
    dateLabel: 'Apr 15, 2026',
    readTime: '16 min read',
    author: 'Jane Auten',
    image: images.thumb1,
    accentFrom: '#3b82f6',
    accentTo: '#1e40af',
    isTrending: true,
    popularity: 94,
    seo: {
      metaTitle: 'Mechanical vs Membrane: Best Keyboard for Coding 2026',
      metaDescription: 'Should you use a mechanical or membrane keyboard for programming? We compare speed, fatigue, and price for developers.',
      keywords: ['mechanical vs membrane keyboard', 'best keyboard for coding', 'logitech mx keys review'],
    },
    hook: "You spend 8 hours a day with your fingers on a keyboard. If you're using the cheap plastic board that came with your PC, you're missing out on speed, accuracy, and ergonomics.",
    quickSummary: [
      "Precision: Mechanical Keyboards",
      "Silence: Membrane Keyboards",
      "Ergonomics: Mechanical (usually)",
      "Value: Membrane",
    ],
    productSections: [
      {
        id: 'p11-1',
        name: 'Logitech MX Keys S',
        image: images.thumb1,
        price: '109',
        currency: '$',
        bestFor: 'Developers who want speed and near-silent typing.',
        features: [
          'PerfectStroke spherically dished keys',
          'Smart backlighting (proximity sensors)',
          'Multi-device flow control',
        ],
        prosCons: {
          pros: ['Extremely fast typing speed', 'Connects to 3 devices', 'Battery lasts weeks'],
          cons: ['Not customizable like mechanicals', 'Low travel height'],
        },
        ctaLink: 'https://amazon.com',
        ctaLabel: 'Check Price on Amazon',
        rating: 4.8,
      },
    ],
    comparisonData: [
      { productName: 'Logitech MX Keys', feature: 'Membrane / Silent', price: '$109', ctaLink: '#' },
      { productName: 'Keychron K2', feature: 'Mechanical / Gateron', price: '$89', ctaLink: '#' },
    ],
    buyingGuide: [
      "Switches: If you go mechanical, 'Brown' switches are the best middle ground for coding.",
      "Layout: 75% or TKL layouts save desk space for your mouse.",
      "Connectivity: Ensure it supports both Bluetooth and 2.4GHz wireless for stability.",
    ],
    faqs: [
      { question: "Why do programmers love mechanical keyboards?", answer: "The tactile feedback (feeling the 'bump') reduces typing errors and makes long coding sessions more satisfying." },
    ],
    conclusion: "If you work in a shared office, the **Logitech MX Keys S** is the best membrane board ever made. If you work from home and want the best feel, go **Mechanical**.",
    content: [],
  },
]

export const brandDeals: Record<string, BrandDeal[]> = {
  amazon: [
    {
      id: 'deal-1',
      title: 'Amazon Tech Spring Sale',
      summary: 'Get up to 40% off selected office tech and laptops this week only.',
      ctaLabel: 'Shop the Sale',
      ctaLink: '#',
    },
  ],
  apple: [
    {
      id: 'deal-2',
      title: 'Education Discount',
      summary: 'Students save $100 on MacBook Air and get a $150 gift card.',
      ctaLabel: 'Claim Discount',
      ctaLink: '#',
    },
  ],
}

export const popularTags = ['best-of', 'review', 'comparison', 'deals', 'productivity', 'tech']

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
