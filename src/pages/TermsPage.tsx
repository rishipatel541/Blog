import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { fadeUp } from '../lib/motion'

export function TermsPage() {
  return (
    <main className="pb-24 pt-16 sm:pt-24">
      <Container>
        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mx-auto max-w-4xl space-y-12"
        >
          <header className="space-y-4 border-b border-ink-100 pb-12">
            <h1 className="text-4xl font-black tracking-tight text-ink-900 sm:text-6xl">Terms & Conditions</h1>
            <p className="text-lg text-ink-500">Last updated: April 27, 2026</p>
          </header>

          <article className="prose prose-lg prose-purple max-w-none space-y-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">1. Terms</h2>
              <p>
                By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, 
                all applicable laws and regulations, and agree that you are responsible for compliance with any 
                applicable local laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) 
                on this website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">3. Disclaimer</h2>
              <p>
                The materials on this website are provided "as is". We make no warranties, expressed or implied, 
                and hereby disclaim and negate all other warranties, including without limitation, implied warranties 
                or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                property or other violation of rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">4. Limitations</h2>
              <p>
                In no event shall we or our suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or 
                inability to use the materials on our Internet site.
              </p>
            </section>
          </article>
        </motion.div>
      </Container>
    </main>
  )
}
