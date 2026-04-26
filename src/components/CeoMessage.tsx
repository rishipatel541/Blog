import { motion } from 'framer-motion'
import heroArt from '../assets/download.jpeg'
import { fadeUp, stagger } from '../lib/motion'
import { Container } from './Container'

function LogoChip({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/55 px-4 py-2 text-xs font-semibold text-ink-700 shadow-soft backdrop-blur">
      <span className="h-2.5 w-2.5 rounded-full bg-brand-gradient" />
      {label}
    </div>
  )
}

export function CeoMessage() {
  return (
    <section className="py-12 sm:py-14">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/45 p-6 shadow-softer backdrop-blur sm:p-8"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full bg-violet-500/18 blur-3xl" />
            <div className="absolute -right-40 -bottom-56 h-[620px] w-[620px] rounded-full bg-blue-500/14 blur-3xl" />
          </div>

          <div className="relative grid items-center gap-6 lg:grid-cols-[320px_1fr]">
            <motion.div variants={fadeUp} className="mx-auto w-full max-w-[320px] lg:mx-0">
              <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/60 p-3 shadow-soft backdrop-blur">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={heroArt}
                    alt="Creative team visual"
                    className="h-[300px] w-full object-cover object-center"
                  />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <LogoChip label="Stories" />
                  <LogoChip label="Ideas" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="max-w-3xl text-center lg:text-left">
                <div className="text-xs font-semibold text-ink-700/70">Message from our CEO</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                  A note to every curious reader
                </h2>
              </div>

              <div className="mt-5 max-w-3xl rounded-3xl border border-white/60 bg-white/55 p-5 shadow-soft backdrop-blur sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow sm:h-12 sm:w-12">
                    <span className="text-lg font-black">“</span>
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed text-ink-700 sm:text-base">
                      Every great idea starts with curiosity. This space is built for people who love to learn, build, and
                      grow one insight at a time. We publish stories that are practical, honest, and easy to apply, so you
                      can leave each post with something useful for your life or work.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-700 sm:text-base">
                      Whether you are here for design inspiration, better workflows, or a fresh perspective, you are in the
                      right place. Keep exploring, keep creating, and let each article move you one step forward.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                      <span className="font-semibold text-ink-900">Alicon Atiqs</span>
                      <span className="text-ink-700/70">Founder &amp; CEO</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

