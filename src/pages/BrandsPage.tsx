import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { editorialPosts } from '../data/editorial'
import { Container } from '../components/Container'
import { BlogCard } from '../components/internal/BlogCard'
import { fadeUp, stagger } from '../lib/motion'

export function BrandsPage() {
  const allBrands = Array.from(new Set(editorialPosts.map(p => p.brand)))
    .filter(b => b && b !== 'Editorial')
    .sort()

  const brandPosts = editorialPosts.filter(p => p.brand && p.brand !== 'Editorial')

  return (
    <main className="py-10 sm:py-12">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeUp} className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Brand <span className="text-transparent bg-clip-text bg-brand-gradient">Partners</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-700">
              Explore our curated reviews and buying guides from the world's most trusted brands.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap justify-center gap-3">
            {allBrands.map(brand => (
              <Link
                key={brand}
                to={`/brand/${brand.toLowerCase().replace(/ /g, '-')}`}
                className="rounded-full border border-white/60 bg-white/70 px-6 py-2 text-sm font-semibold text-ink-800 shadow-soft backdrop-blur transition hover:bg-white hover:text-ink-900"
              >
                {brand}
              </Link>
            ))}
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {brandPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {brandPosts.length === 0 && (
            <div className="mt-20 text-center">
              <p className="text-lg text-ink-700">No brand-specific articles found yet.</p>
            </div>
          )}
        </motion.div>
      </Container>
    </main>
  )
}
