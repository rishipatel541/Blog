import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { fadeUp, stagger } from '../lib/motion'

export function AuthorPage() {
  return (
    <main className="pb-24 pt-16 sm:pt-24">
      <Container>
        <motion.div 
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-5xl space-y-20"
        >
          {/* Author Profile */}
          <motion.section variants={fadeUp} className="flex flex-col items-center gap-10 text-center sm:flex-row sm:text-left">
            <div className="h-48 w-48 shrink-0 overflow-hidden rounded-[40px] bg-brand-gradient shadow-2xl">
              <div className="flex h-full w-full items-center justify-center text-6xl text-white">RS</div>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-black text-ink-900 sm:text-6xl">Rafiq Senn</h1>
              <p className="text-xl font-bold text-purple-600 uppercase tracking-widest">Lead Editor & Tech Analyst</p>
              <p className="max-w-2xl text-lg text-ink-600 leading-relaxed">
                With over a decade of experience in product design and workspace optimization, 
                Rafiq has helped thousands of professionals across the USA build setups that 
                blend peak performance with aesthetic excellence.
              </p>
            </div>
          </motion.section>

          {/* Expertise */}
          <motion.section variants={fadeUp} className="grid gap-8 sm:grid-cols-3">
            <div className="space-y-4 p-8 rounded-[40px] bg-white border border-ink-50 shadow-soft">
              <div className="text-3xl">💻</div>
              <h3 className="font-bold text-ink-900">Workspace Tech</h3>
              <p className="text-sm text-ink-600">Specializing in multi-monitor workflows and peripheral optimization.</p>
            </div>
            <div className="space-y-4 p-8 rounded-[40px] bg-white border border-ink-50 shadow-soft">
              <div className="text-3xl">🪑</div>
              <h3 className="font-bold text-ink-900">Ergonomics</h3>
              <p className="text-sm text-ink-600">Focusing on long-term health and posture-driven design principles.</p>
            </div>
            <div className="space-y-4 p-8 rounded-[40px] bg-white border border-ink-50 shadow-soft">
              <div className="text-3xl">🎨</div>
              <h3 className="font-bold text-ink-900">Aesthetics</h3>
              <p className="text-sm text-ink-600">Curating color palettes and lighting to create inspiring work environments.</p>
            </div>
          </motion.section>

          {/* Connect */}
          <motion.section variants={fadeUp} className="rounded-[40px] bg-purple-600 p-12 text-center text-white">
            <h2 className="text-3xl font-bold">Follow Rafiq's Journey</h2>
            <p className="mt-4 text-purple-100">Get daily tips on workspace optimization and early access to tech reviews.</p>
            <div className="mt-8 flex justify-center gap-6">
              <a href="#" className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">TW</a>
              <a href="#" className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">IN</a>
              <a href="#" className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">YT</a>
            </div>
          </motion.section>
        </motion.div>
      </Container>
    </main>
  )
}
