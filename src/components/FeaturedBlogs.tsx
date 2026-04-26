import { motion } from 'framer-motion'
import { useState } from 'react'
import { featuredPosts } from '../data/content'
import { fadeUp, hoverLift, stagger } from '../lib/motion'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

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
      <h3 className="mt-2 line-clamp-2 text-[15px] font-semibold leading-snug tracking-tight text-ink-900 sm:text-base">{title}</h3>
      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-700">{excerpt}</p>
      <div className="mt-2.5 flex items-center justify-between text-xs text-ink-700/80">
        <span className="font-medium">By {author}</span>
        <span>{dateLabel}</span>
      </div>
    </div>
  )
}

export function FeaturedBlogs() {
  const categories = [
    { key: 'all', label: 'All' },
    ...Array.from(new Set(featuredPosts.map((post) => post.category))).map((category) => ({
      key: category.toLowerCase(),
      label: category,
    })),
  ]
  const [activeCategoryKey, setActiveCategoryKey] = useState('all')

  const normalize = (value: string) => value.trim().toLowerCase()
  const filteredPosts =
    activeCategoryKey === 'all'
      ? featuredPosts
      : featuredPosts.filter((post) => normalize(post.category) === activeCategoryKey)

  return (
    <section id="blog" className="py-10 sm:py-12">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              title="Featured Blogs"
              action={
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-ink-900 shadow-soft backdrop-blur transition hover:bg-white"
                >
                  See All Posts <span aria-hidden="true">→</span>
                </a>
              }
            />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = category.key === activeCategoryKey
              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveCategoryKey(category.key)}
                  className={[
                    'rounded-full px-4 py-2 text-sm font-semibold transition',
                    isActive
                      ? 'bg-brand-gradient text-white shadow-glow'
                      : 'border border-white/60 bg-white/70 text-ink-800 shadow-soft hover:bg-white',
                  ].join(' ')}
                >
                  {category.label}
                </button>
              )
            })}
          </motion.div>

          <div className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filteredPosts.map((p) => (
              <motion.a
                key={p.id}
                href="#"
                variants={fadeUp}
                initial={false}
                {...hoverLift}
                className="group mb-4 inline-block w-full break-inside-avoid rounded-3xl border border-white/60 bg-white/55 p-3.5 shadow-soft backdrop-blur"
              >
                <ImgBlock src={p.image} from={p.accentFrom} to={p.accentTo} />
                <Meta
                  category={p.category}
                  title={p.title}
                  excerpt={p.excerpt}
                  author={p.author}
                  dateLabel={p.dateLabel}
                />
              </motion.a>
            ))}
            {filteredPosts.length === 0 ? (
              <div className="rounded-3xl border border-white/60 bg-white/60 p-6 text-sm text-ink-700 shadow-soft backdrop-blur">
                No posts found in this category yet.
              </div>
            ) : null}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

