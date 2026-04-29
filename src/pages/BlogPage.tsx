import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { editorialPosts } from '../data/editorial'
import { fadeUp, hoverLift, stagger } from '../lib/motion'
import { FeaturedBlogs } from '../components/FeaturedBlogs'
import { RecentPosts } from '../components/RecentPosts'
import { GrowthClusters } from '../components/editorial/GrowthClusters'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'

function ImgBlock({ src, from, to }: { src: string; from: string; to: string }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/60 shadow-soft"
      style={{
        backgroundImage: `radial-gradient(900px 400px at 20% 15%, rgba(255,255,255,0.55), transparent 65%), linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      <img
        src={src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top opacity-95 mix-blend-overlay"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 opacity-50 [background:radial-gradient(450px_160px_at_50%_0%,rgba(255,255,255,0.65),transparent_60%)]" />
      <div className="relative aspect-[16/10]" />
    </div>
  )
}

function Meta({
  category,
  title,
  excerpt,
  author,
  dateLabel,
}: {
  category: string
  title: string
  excerpt: string
  author: string
  dateLabel: string
}) {
  return (
    <div className="mt-2.5">
      <div className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-ink-700 shadow-[0_10px_30px_rgba(13,18,45,0.08)] backdrop-blur">
        {category}
      </div>
      <h3 className="mt-2 line-clamp-2 text-[15px] font-semibold leading-snug tracking-tight text-ink-900 sm:text-base group-hover:text-purple-600 transition-colors">
        {title}
      </h3>
      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-700">{excerpt}</p>
      <div className="mt-2.5 flex items-center justify-between text-xs text-ink-700/80">
        <span className="font-medium">By {author}</span>
        <span>{dateLabel}</span>
      </div>
    </div>
  )
}

export function BlogPage() {
  // Filter out Technology category
  const filteredPostsForCategories = editorialPosts.filter(post => post.category !== 'Technology')

  const categories = [
    { key: 'all', label: 'All' },
    ...Array.from(new Set(filteredPostsForCategories.map((post) => post.category))).map((category) => ({
      key: category.toLowerCase(),
      label: category,
    })),
  ]
  const [activeCategoryKey, setActiveCategoryKey] = useState('all')

  const normalize = (value: string) => value.trim().toLowerCase()
  const filteredPosts =
    activeCategoryKey === 'all'
      ? filteredPostsForCategories
      : filteredPostsForCategories.filter((post) => normalize(post.category) === activeCategoryKey)

  return (
    <section className="py-10 sm:py-12">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeUp} className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Editorial <span className="text-transparent bg-clip-text bg-brand-gradient">Reviews</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-700">
              Expertly researched buying guides and product comparisons designed to help you make better decisions, faster.
            </p>
            

            {/* 5. ALL EDITORIAL GUIDES */}
            {/* Editorial Standards Badge */}
            <div className="mt-8 inline-flex items-center gap-6 rounded-3xl border border-white/60 bg-white/40 px-6 py-3 shadow-soft backdrop-blur">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">✓</span>
                Expert Tested
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">✓</span>
                Independent Review
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">✓</span>
                Affiliate Supported
              </div>
            </div>
          </motion.div>
          <div className="sticky top-[64px] z-30 -mx-2 mb-4 bg-soft-gradient/80 px-4 py-4 backdrop-blur-md sm:top-[64px]">
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat.key}
                  onClick={() => setActiveCategoryKey(cat.key)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${activeCategoryKey === cat.key
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white/70 text-ink-700 shadow-soft hover:bg-white'
                    }`}
                >
                  {cat.label}
                </motion.button>
              ))}
            </motion.div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredPosts.map((p) => {
              const slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
              return (
                <motion.div
                  key={p.id}
                  variants={fadeUp}
                  initial={false}
                  {...hoverLift}
                  className="group rounded-3xl border border-white/60 bg-white/55 p-3.5 shadow-soft backdrop-blur"
                >
                  <Link to={`/blog/${p.slug}`}>
                    <ImgBlock src={p.image} from={p.accentFrom} to={p.accentTo} />
                    <Meta
                      category={p.category}
                      title={p.title}
                      excerpt={p.excerpt}
                      author={p.author}
                      dateLabel={p.dateLabel}
                    />
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div className="mt-16 text-center">
              <p className="text-lg text-ink-700">No articles found in this category.</p>
            </div>
          )}

          {/* 4. CONTENT CLUSTERS (SEO GROWTH) */}
          <section className="mt-24 py-12 border-t border-ink-100">
            <GrowthClusters />
          </section>
        </motion.div>
      </Container>
    </section>
  )
}