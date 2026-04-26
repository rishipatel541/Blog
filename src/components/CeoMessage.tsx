import { motion } from 'framer-motion'
import heroImg from '../assets/hero.png'
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
    <section className="py-16 sm:py-20">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/45 p-6 shadow-softer backdrop-blur sm:p-10"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full bg-violet-500/18 blur-3xl" />
            <div className="absolute -right-40 -bottom-56 h-[620px] w-[620px] rounded-full bg-blue-500/14 blur-3xl" />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[360px_1fr]">
            <motion.div variants={fadeUp} className="relative">
              <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-soft">
                <img
                  src={heroImg}
                  alt=""
                  className="h-[320px] w-full object-cover object-center"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="text-center lg:text-left">
                <div className="text-xs font-semibold text-ink-700/70">Message from our CEO</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                  Creative wisdom with a passion for storytelling
                </h2>
              </div>

              <div className="mt-6 rounded-3xl border border-white/60 bg-white/55 p-6 shadow-soft backdrop-blur sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                    <span className="text-lg font-black">“</span>
                  </div>
                  <div>
                    <p className="text-base leading-relaxed text-ink-700 sm:text-lg">
                      I’m passionate about exploring diverse topics—from design and technology to lifestyle, travel, and
                      beyond. I believe that every story has the power to spark change.
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                      <span className="font-semibold text-ink-900">Alicon Atiqs</span>
                      <span className="text-ink-700/70">Founder &amp; CEO</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <LogoChip label="LOGOIPSUM" />
                <LogoChip label="LOGO" />
                <LogoChip label="LOGOIPSUM" />
                <LogoChip label="LOGO" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

