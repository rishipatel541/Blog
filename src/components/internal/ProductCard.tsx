import { motion } from 'framer-motion'
import type { AffiliateProduct } from '../../data/editorial'
import { fadeUp, hoverLift } from '../../lib/motion'

type ProductCardProps = {
  product: AffiliateProduct
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      {...hoverLift}
      className="rounded-3xl border border-white/60 bg-white/60 p-4 shadow-soft backdrop-blur"
    >
      <div className="overflow-hidden rounded-2xl border border-white/60">
        <img src={product.image} alt={product.name} className="h-40 w-full object-cover object-center" />
      </div>
      <h3 className="mt-3 text-lg font-semibold text-ink-900">{product.name}</h3>
      <p className="mt-1 text-sm text-ink-700">{product.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-900">{product.price}</span>
        <a
          href={product.ctaLink || '#'}
          className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-2 text-xs font-semibold text-white shadow-glow transition hover:opacity-90"
        >
          {product.ctaLabel || 'Check Price'} <span aria-hidden="true">→</span>
        </a>
      </div>
    </motion.article>
  )
}
