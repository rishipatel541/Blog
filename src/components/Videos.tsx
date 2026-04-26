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
  const [big, ...small] = videos
  return (
    <section className="py-14 sm:py-18">
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

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <motion.a
              href="#"
              variants={fadeUp}
              {...hoverLift}
              className="rounded-3xl border border-white/60 bg-white/55 p-5 shadow-soft backdrop-blur lg:col-span-2"
            >
              <VideoCover src={big.image} from={big.accentFrom} to={big.accentTo} />
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-ink-700/80">{big.category}</div>
                  <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-ink-900">{big.title}</h3>
                </div>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-ink-700 shadow-soft backdrop-blur">
                  {big.duration}
                </span>
              </div>
            </motion.a>

            <div className="grid gap-6">
              {small.map((v) => (
                <motion.a
                  key={v.id}
                  href="#"
                  variants={fadeUp}
                  {...hoverLift}
                  className="rounded-3xl border border-white/60 bg-white/55 p-5 shadow-soft backdrop-blur"
                >
                  <VideoCover src={v.image} from={v.accentFrom} to={v.accentTo} />
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-ink-700/80">{v.category}</div>
                      <h3 className="mt-2 text-base font-semibold leading-snug tracking-tight text-ink-900">{v.title}</h3>
                    </div>
                    <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-ink-700 shadow-soft backdrop-blur">
                      {v.duration}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

