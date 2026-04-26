import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { BlogCard } from '../components/internal/BlogCard'
import { Sidebar } from '../components/internal/Sidebar'
import { editorialPosts, getFilteredPosts, getPostsByCategory, popularTags } from '../data/editorial'
import type { FilterType } from '../data/editorial'
import { fadeUp, stagger } from '../lib/motion'

const filters: FilterType[] = ['latest', 'popular', 'trending']

export function CategoryPage() {
  const { slug = '' } = useParams()
  const [activeFilter, setActiveFilter] = useState<FilterType>('latest')

  const categoryPosts = useMemo(() => getPostsByCategory(slug), [slug])
  const filteredPosts = useMemo(() => getFilteredPosts(categoryPosts, activeFilter), [categoryPosts, activeFilter])

  const categoryLabel = categoryPosts[0]?.category ?? 'Category'

  return (
    <main className="py-10 sm:py-12">
      <Container>
        <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-white/60 bg-white/55 p-6 shadow-soft backdrop-blur sm:p-8"
          >
            <h1 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{categoryLabel} Articles</h1>
            <p className="mt-2 max-w-2xl text-sm text-ink-700 sm:text-base">
              Curated stories, tools, and tactical insights to help you stay ahead in {categoryLabel.toLowerCase()}.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={[
                    'rounded-full px-4 py-2 text-sm font-semibold capitalize transition',
                    activeFilter === filter
                      ? 'bg-brand-gradient text-white shadow-glow'
                      : 'border border-white/60 bg-white/70 text-ink-800 shadow-soft hover:bg-white',
                  ].join(' ')}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <section className="mt-6 grid gap-4 lg:grid-cols-[1fr_300px]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
            {filteredPosts.length === 0 ? (
              <div className="rounded-3xl border border-white/60 bg-white/60 p-6 text-sm text-ink-700 shadow-soft backdrop-blur sm:col-span-2 xl:col-span-3">
                No articles found in this category.
              </div>
            ) : null}
          </div>

          <Sidebar
            title="Trending Posts"
            trendingPosts={editorialPosts.filter((post) => post.isTrending)}
            tags={popularTags}
            showNewsletter
          />
        </section>
      </Container>
    </main>
  )
}
