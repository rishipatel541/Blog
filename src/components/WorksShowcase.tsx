import { motion } from 'framer-motion'
import workShowcaseImage from '../assets/download.jpeg'
import { works } from '../data/content'
import { fadeUp, hoverLift, stagger } from '../lib/motion'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

function WorkVisual({ from, to }: { from: string; to: string }) {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-white/60 shadow-soft"
      style={{
        backgroundImage: `radial-gradient(800px 420px at 20% 18%, rgba(255,255,255,0.65), transparent 65%), linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      <img
        src={workShowcaseImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top opacity-95 mix-blend-overlay"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 opacity-70 [background:radial-gradient(500px_220px_at_60%_0%,rgba(255,255,255,0.55),transparent_65%)]" />
      <div className="absolute -left-20 -top-16 h-64 w-64 rounded-full bg-white/25 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
      <div className="relative aspect-[16/9] p-3">
        <div className="grid h-full place-items-center">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/70 shadow-soft backdrop-blur">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6h12v12H6z"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.7"
              />
              <path
                d="M9 15l2-3 2 2 2-4 2 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export function WorksShowcase() {
  return (
    <section id="work" className="py-10 sm:py-12">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              title="Our Works"
              action={
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-ink-900 shadow-soft backdrop-blur transition hover:bg-white"
                >
                  See All Work <span aria-hidden="true">→</span>
                </a>
              }
            />
          </motion.div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {works.map((w) => (
              <motion.a
                key={w.id}
                href="#"
                variants={fadeUp}
                {...hoverLift}
                className="rounded-3xl border border-white/60 bg-white/55 p-3.5 shadow-soft backdrop-blur"
              >
                <WorkVisual from={w.accentFrom} to={w.accentTo} />
                <div className="mt-4">
                  <div className="text-xs font-semibold text-ink-700/80">{w.category}</div>
                  <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-ink-900">{w.title}</h3>
                  <p className="mt-2 text-sm text-ink-700">{w.highlight}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

