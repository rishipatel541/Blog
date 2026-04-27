import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'
import { useEffect, useState } from 'react'
import { fetchLiveProductData, type LiveProductData } from '../../services/productService'
import type { EditorialProduct } from '../../data/editorial'
import { CTAButton } from './CTAButton'

export function ProductSection({ product, isBestChoice = false }: { product: EditorialProduct; isBestChoice?: boolean }) {
  const [liveData, setLiveData] = useState<LiveProductData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchLiveProductData(product.id)
      .then(setLiveData)
      .finally(() => setLoading(false))
  }, [product.id])

  const handleCtaClick = () => {
    // Simulated tracking integration
    console.log(`[Tracking] CTA Clicked: ${product.name} (${product.id})`)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'affiliate_click', {
        product_name: product.name,
        product_id: product.id,
        category: 'editorial_picks'
      })
    }
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`mt-10 overflow-hidden rounded-[40px] border border-white/60 bg-white/60 shadow-soft backdrop-blur transition-all hover:shadow-softer ${isBestChoice ? 'ring-4 ring-purple-600/20' : ''}`}
    >
      <div className="grid gap-8 p-6 lg:grid-cols-[380px_1fr] lg:p-10">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/60 shadow-inner lg:aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {isBestChoice && (
            <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-glow">
              <span className="text-base">🏆</span> Best Choice
            </div>
          )}
          {!isBestChoice && product.rating >= 4.7 && (
            <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-soft">
              <span className="text-base">⭐</span> Top Rated
            </div>
          )}
          <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-ink-900 shadow-soft backdrop-blur-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Updated Today
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-lg ${i < Math.floor(liveData?.rating || product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm font-black text-ink-700">{liveData?.rating || product.rating} / 5</span>
              </div>
              <h3 className="text-3xl font-black tracking-tight text-ink-900">{product.name}</h3>
              <p className="text-base font-bold text-purple-600 uppercase tracking-widest">{product.bestFor}</p>
            </div>
            <div className="text-right">
              {loading ? (
                <div className="h-10 w-28 animate-pulse rounded-2xl bg-gray-200" />
              ) : (
                <div className="space-y-1">
                  <div className="text-4xl font-black text-ink-900 leading-none">
                    {liveData?.currency || product.currency}{liveData?.price || product.price}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-black uppercase tracking-tighter text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      Price Check: Live
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 border-t border-ink-50 pt-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-ink-400">Key Advantages</h4>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <ul className="space-y-3">
                  {product.prosCons.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-3 text-sm font-bold text-ink-800">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-[10px] text-green-600">
                        ✓
                      </span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <ul className="space-y-3">
                  {product.prosCons.cons.map((con) => (
                    <li key={con} className="flex items-start gap-3 text-sm font-medium text-ink-500">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-100 text-[10px] text-ink-400">
                        ×
                      </span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div onClick={handleCtaClick}>
              <CTAButton 
                href={product.ctaLink} 
                label="Check Latest Price" 
                size="lg"
              />
            </div>
            <div className="flex items-center gap-3 text-xs font-black text-ink-400 uppercase tracking-widest">
              <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              Verified Deal Found
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
