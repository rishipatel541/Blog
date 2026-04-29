import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { getBestUnderPrice } from '../services/growthService'
import { ProductSection } from '../components/editorial/ProductSection'
import { fadeUp, stagger } from '../lib/motion'
import { NotFoundPage } from './NotFoundPage'
import { CTAButton } from '../components/editorial/CTAButton'

export function ProgrammaticBestPage() {
  const { category = '', price = '0' } = useParams()
  const maxPrice = parseFloat(price)
  const products = getBestUnderPrice(category, maxPrice)

  if (products.length === 0) return <NotFoundPage />

  return (
    <main className="pb-24 pt-16 sm:pt-24">
      <Container>
        <motion.div 
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-5xl space-y-20"
        >
          {/* Header */}
          <motion.section variants={fadeUp} className="text-center space-y-6">
            <div className="inline-flex items-center gap-4 rounded-full bg-green-50 px-6 py-2 text-sm font-black uppercase tracking-widest text-green-600">
              💰 Value Guide 2026
            </div>
            <h1 className="text-4xl font-black tracking-tight text-ink-900 sm:text-7xl">
              Best {category} <br />
              <span className="text-purple-600">Under ${price}</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-ink-600 leading-relaxed">
              We've scanned the entire USA market to find the absolute best {category} that fit your budget 
              without sacrificing performance or durability.
            </p>
          </motion.section>

          {/* Featured Deal */}
          <motion.section variants={fadeUp} className="rounded-[40px] bg-purple-50 p-10 sm:p-16 border-2 border-purple-100 relative overflow-hidden">
            <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-purple-600 font-black text-xs uppercase tracking-[0.2em]">
                  <span className="flex h-3 w-3 rounded-full bg-purple-600 animate-ping" />
                  Editor's Budget Pick
                </div>
                <h2 className="text-4xl font-black text-ink-900">{products[0].name}</h2>
                <p className="text-lg text-ink-600 leading-relaxed">
                  The {products[0].name} is our top recommendation for anyone looking to stay under ${price} 
                  while still getting professional-grade quality.
                </p>
                <div className="flex flex-wrap gap-4">
                  <CTAButton href={products[0].ctaLink} size="lg" />
                </div>
              </div>
              <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                <img src={products[0].image} alt={products[0].name} className="h-full w-full object-cover" />
              </div>
            </div>
          </motion.section>

          {/* All Options */}
          <div className="space-y-12">
            <h2 className="text-3xl font-black text-ink-900">More Top-Rated Options</h2>
            <div className="space-y-20">
              {products.map((product, idx) => (
                <ProductSection 
                  key={product.id} 
                  product={product} 
                  isBestChoice={idx === 0} 
                />
              ))}
            </div>
          </div>

          {/* Growth Footer */}
          <motion.section variants={fadeUp} className="text-center py-20 border-t border-ink-100">
            <h2 className="text-3xl font-black text-ink-900">Looking for something else?</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={`/best/${category}-under-100`} className="rounded-2xl bg-ink-50 px-8 py-4 font-bold text-ink-600 hover:bg-ink-100 transition-colors">Under $100</a>
              <a href={`/best/${category}-under-200`} className="rounded-2xl bg-ink-50 px-8 py-4 font-bold text-ink-600 hover:bg-ink-100 transition-colors">Under $200</a>
              <a href={`/best/${category}-under-500`} className="rounded-2xl bg-ink-50 px-8 py-4 font-bold text-ink-600 hover:bg-ink-100 transition-colors">Under $500</a>
            </div>
          </motion.section>
        </motion.div>
      </Container>
    </main>
  )
}
