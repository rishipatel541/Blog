import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { getComparison } from '../services/growthService'
import { ProductSection } from '../components/editorial/ProductSection'
import { fadeUp, stagger } from '../lib/motion'
import { NotFoundPage } from './NotFoundPage'

export function ComparisonPage() {
  const { prod1 = '', prod2 = '' } = useParams()
  const data = getComparison(prod1, prod2)

  if (!data) return <NotFoundPage />

  const { productA, productB, winner, summary } = data

  return (
    <main className="pb-24 pt-16 sm:pt-24">
      <Container>
        <motion.div 
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-6xl space-y-20"
        >
          {/* Header */}
          <motion.section variants={fadeUp} className="text-center space-y-6">
            <div className="inline-flex items-center gap-4 rounded-full bg-purple-50 px-6 py-2 text-sm font-black uppercase tracking-widest text-purple-600">
              ⚔️ Head-to-Head Comparison
            </div>
            <h1 className="text-4xl font-black tracking-tight text-ink-900 sm:text-7xl">
              {productA.name} <br />
              <span className="text-ink-400">vs</span> <br />
              {productB.name}
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-ink-600 leading-relaxed">
              {summary}
            </p>
          </motion.section>

          {/* Quick Winner Section */}
          <motion.section variants={fadeUp} className="rounded-[40px] bg-ink-900 p-10 text-center text-white shadow-2xl sm:p-16">
            <h2 className="text-3xl font-black">The Expert's Verdict</h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-8 sm:flex-row">
              <div className={`rounded-3xl p-8 transition-all ${winner === 'A' ? 'bg-purple-600 scale-110 shadow-glow' : 'bg-white/5 opacity-50'}`}>
                <p className="text-xs font-black uppercase tracking-widest text-purple-200 mb-2">Winner</p>
                <h3 className="text-xl font-bold">{productA.name}</h3>
              </div>
              <div className="text-4xl font-black text-white/20 italic">VS</div>
              <div className={`rounded-3xl p-8 transition-all ${winner === 'B' ? 'bg-purple-600 scale-110 shadow-glow' : 'bg-white/5 opacity-50'}`}>
                <p className="text-xs font-black uppercase tracking-widest text-purple-200 mb-2">Winner</p>
                <h3 className="text-xl font-bold">{productB.name}</h3>
              </div>
            </div>
          </motion.section>

          {/* Deep Dive */}
          <div className="grid gap-12 lg:grid-cols-2">
            <ProductSection product={productA} isBestChoice={winner === 'A'} />
            <ProductSection product={productB} isBestChoice={winner === 'B'} />
          </div>

          {/* Comparison Table */}
          <motion.section variants={fadeUp} className="space-y-8">
            <h2 className="text-3xl font-black text-ink-900">Feature Breakdown</h2>
            <div className="overflow-hidden rounded-[40px] border border-ink-100 bg-white shadow-soft">
              <table className="w-full text-left">
                <thead className="bg-ink-50">
                  <tr>
                    <th className="p-6 font-black text-ink-400 uppercase text-xs tracking-widest">Spec</th>
                    <th className="p-6 font-black text-ink-900">{productA.name}</th>
                    <th className="p-6 font-black text-ink-900">{productB.name}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-50">
                  <tr>
                    <td className="p-6 font-bold text-ink-500">Rating</td>
                    <td className="p-6 font-black text-purple-600">{productA.rating}/5</td>
                    <td className="p-6 font-black text-purple-600">{productB.rating}/5</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold text-ink-500">Starting Price</td>
                    <td className="p-6 font-black text-ink-900">{productA.currency}{productA.price}</td>
                    <td className="p-6 font-black text-ink-900">{productB.currency}{productB.price}</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold text-ink-500">Best For</td>
                    <td className="p-6 font-medium text-ink-700">{productA.bestFor}</td>
                    <td className="p-6 font-medium text-ink-700">{productB.bestFor}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>
        </motion.div>
      </Container>
    </main>
  )
}
