import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import { Container } from './Container'

export function Newsletter() {
  return (
    <section className="py-14 sm:py-18">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="relative overflow-hidden rounded-3xl border border-white/60 bg-brand-gradient px-6 py-10 shadow-glow sm:px-10"
        >
          <div className="pointer-events-none absolute inset-0 opacity-35 [background:radial-gradient(650px_240px_at_25%_10%,rgba(255,255,255,0.65),transparent_60%)]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/20 blur-3xl" />

          <motion.div variants={fadeUp} className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Inspiration, Straight to Your Inbox
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/85 sm:text-base">
                Fresh ideas, tips, and stories delivered weekly to spark creativity and motivation.
              </p>
            </div>

            <form
              className="relative flex w-full max-w-xl items-center gap-3 rounded-2xl bg-white/85 p-2 shadow-soft backdrop-blur lg:w-[520px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="h-11 w-full bg-transparent px-3 text-sm text-ink-900 outline-none placeholder:text-ink-700/55"
                placeholder="Your email"
                type="email"
                required
              />
              <button className="h-11 shrink-0 rounded-xl bg-ink-900 px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-ink-900/90">
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

