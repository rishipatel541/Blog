import { motion } from 'framer-motion'
import { videos } from '../data/content'
import { fadeUp, hoverLift, stagger } from '../lib/motion'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

function VideoCover({ src, from, to }: { src: string; from: string; to: string }) {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-white/60 shadow-soft"
      style={{
        backgroundImage: `radial-gradient(800px 320px at 30% 10%, rgba(255,255,255,0.65), transparent 60%), linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      <img
        src={src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top opacity-95 mix-blend-overlay"
        loading="lazy"
        decoding="async"
      />
      <div className="relative aspect-[16/10]">
        <div className="absolute inset-0 grid place-items-center">
          <div className="group grid h-14 w-14 place-items-center rounded-2xl bg-white/70 shadow-soft backdrop-blur transition group-hover:scale-105">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M10 8.5v7l6-3.5-6-3.5Z"
                fill="currentColor"
                opacity="0.85"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Videos() {
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
            <SectionHeading title="Recent Videos" />
          </motion.div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <motion.a
                key={v.id}
                href="#"
                variants={fadeUp}
                {...hoverLift}
                className="rounded-3xl border border-white/60 bg-white/55 p-3.5 shadow-soft backdrop-blur"
              >
                <div className="relative">
                  <VideoCover src={v.image} from={v.accentFrom} to={v.accentTo} />
                  <span className="absolute right-2 top-2 rounded-full bg-ink-900/70 px-2.5 py-1 text-[11px] font-semibold text-white">
                    {v.duration}
                  </span>
                </div>
                <div className="mt-3">
                  <div className="text-xs font-semibold text-ink-700/80">{v.category}</div>
                  <h3 className="mt-1.5 line-clamp-2 text-sm font-semibold leading-snug tracking-tight text-ink-900 sm:text-base">
                    {v.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

