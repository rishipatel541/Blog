import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { EditorialPost } from '../../data/editorial'
import { fadeUp, hoverLift } from '../../lib/motion'

type BlogCardProps = {
  post: EditorialPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      {...hoverLift}
      className="rounded-3xl border border-white/60 bg-white/55 p-3.5 shadow-soft backdrop-blur"
    >
      <Link to={`/blog/${post.slug}`} className="group block">
        <div
          className="relative overflow-hidden rounded-2xl border border-white/60 shadow-soft"
          style={{
            backgroundImage: `radial-gradient(900px 420px at 20% 10%, rgba(255,255,255,0.58), transparent 65%), linear-gradient(135deg, ${post.accentFrom}, ${post.accentTo})`,
          }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="h-48 w-full object-cover object-center opacity-95 mix-blend-overlay transition duration-300 group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-3">
          <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-ink-700 shadow-soft">
            {post.category}
          </span>
          <h2 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-ink-900">{post.title}</h2>
          <p className="mt-1.5 line-clamp-2 text-sm text-ink-700">{post.excerpt}</p>
          <div className="mt-3 flex items-center justify-between text-xs text-ink-700/80">
            <span className="font-medium">{post.author}</span>
            <span>{post.dateLabel}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
