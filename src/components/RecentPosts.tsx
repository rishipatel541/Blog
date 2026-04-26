import { motion } from 'framer-motion'
import { editorialPosts } from '../data/editorial'
import { fadeUp, hoverLift, stagger } from '../lib/motion'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { Link } from 'react-router-dom'

function MiniVisual({ src, from, to }: { src: string; from: string; to: string }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/60 shadow-soft"
      style={{
        backgroundImage: `radial-gradient(700px 260px at 20% 10%, rgba(255,255,255,0.65), transparent 60%), linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      <img
        src={src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top opacity-95 mix-blend-overlay"
        loading="lazy"
        decoding="async"
      />
      <div className="relative aspect-[16/9]" />
    </div>
  )
}

export function RecentPosts() {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              title="Recent Posts"
              action={
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-ink-900 shadow-soft backdrop-blur transition hover:bg-white"
                >
                  See All <span aria-hidden="true">→</span>
                </a>
              }
            />
          </motion.div>

          <div className="mt-6 -mx-4 overflow-hidden px-4">
            <motion.div
              className="flex w-max gap-4 pb-1"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
            >
              {editorialPosts.concat(editorialPosts).map((p, idx) => (
                <motion.div
                  key={`${p.id}-${idx}`}
                  variants={fadeUp}
                  {...hoverLift}
                  className="w-[280px] shrink-0 rounded-3xl border border-white/60 bg-white/55 p-4 shadow-soft backdrop-blur sm:w-[320px]"
                >
                  <Link to={`/blog/${p.slug}`}>
                    <MiniVisual src={p.image} from={p.accentFrom} to={p.accentTo} />
                    <div className="mt-3">
                      <div className="text-xs font-semibold text-ink-700/80">{p.category}</div>
                      <h3 className="mt-1.5 text-sm font-semibold leading-snug tracking-tight text-ink-900 sm:text-base">{p.title}</h3>
                      <p className="mt-1.5 text-sm text-ink-700">{p.excerpt}</p>
                      <div className="mt-3 flex items-center justify-between text-xs text-ink-700/80">
                        <span className="font-medium">By {p.author}</span>
                        <span>{p.dateLabel}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

