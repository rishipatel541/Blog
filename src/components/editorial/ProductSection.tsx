import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'
import { useEffect, useState } from 'react'
import { fetchLiveProductData, type LiveProductData } from '../../services/productService'
import type { EditorialProduct } from '../../data/editorial'

export function ProductSection({ product }: { product: EditorialProduct }) {
  const [liveData, setLiveData] = useState<LiveProductData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchLiveProductData(product.id)
      .then(setLiveData)
      .finally(() => setLoading(false))
  }, [product.id])

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-10 overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-soft backdrop-blur transition-all hover:shadow-softer"
    >
      <div className="grid gap-6 p-6 lg:grid-cols-[320px_1fr] lg:p-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/60 shadow-inner lg:aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 rounded-full bg-brand-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow">
            Best Choice
          </div>
          {liveData?.availability === 'Low Stock' && (
            <div className="absolute bottom-4 left-4 rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white animate-pulse">
              Only a few left!
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-ink-900">{product.name}</h3>
              <p className="mt-1 text-sm font-medium text-purple-600">{product.bestFor}</p>
              <div className="mt-2 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(liveData?.rating || product.rating) ? 'text-yellow-500' : 'text-gray-300'}>
                    ★
                  </span>
                ))}
                <span className="ml-1 text-xs font-bold text-ink-700">({liveData?.rating || product.rating})</span>
              </div>
            </div>
            <div className="text-right">
              {loading ? (
                <div className="h-8 w-24 animate-pulse rounded-lg bg-gray-200" />
              ) : (
                <>
                  <div className="text-3xl font-extrabold text-ink-900">
                    {liveData?.currency || product.currency}
                    {liveData?.price || product.price}
                  </div>
                  <div className="mt-1 flex flex-col items-end gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-green-600">
                      Live Update
                    </span>
                    <span className="text-[9px] font-medium text-ink-700/50">
                      Updated: {new Date(liveData?.lastUpdated || '').toLocaleTimeString()}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink-700/70">Key Features</h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-ink-700">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-100 text-[10px] text-green-600">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-green-50/50 p-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-green-700">Pros</h4>
              <ul className="mt-2 space-y-1.5">
                {product.prosCons.pros.map((pro) => (
                  <li key={pro} className="text-xs font-medium text-green-800">
                    + {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-red-50/50 p-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-red-700">Cons</h4>
              <ul className="mt-2 space-y-1.5">
                {product.prosCons.cons.map((con) => (
                  <li key={con} className="text-xs font-medium text-red-800">
                    - {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={product.ctaLink}
              target="_blank"
              rel="nofollow"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-gradient py-4 text-base font-bold text-white shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto sm:px-12"
            >
              Check Latest Price <span aria-hidden="true">→</span>
            </a>
            <div className="flex items-center gap-2 text-[10px] font-bold text-ink-700/60 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Verified Stock
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
