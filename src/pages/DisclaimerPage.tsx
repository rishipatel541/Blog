import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { fadeUp } from '../lib/motion'

export function DisclaimerPage() {
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
            <h1 className="text-4xl font-black tracking-tight text-ink-900 sm:text-6xl">Disclaimer</h1>
            <p className="text-lg text-ink-500">Last updated: April 27, 2026</p>
          </header>

          <article className="prose prose-lg prose-purple max-w-none space-y-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">1. Information Purpose Only</h2>
              <p>
                The information provided on this website is for general informational purposes only. 
                All information on the site is provided in good faith, however we make no representation 
                or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, 
                reliability, availability or completeness of any information on the site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">2. External Links</h2>
              <p>
                The site may contain links to other websites or content belonging to or originating from 
                third parties or links to websites and features in banners or other advertising. 
                Such external links are not investigated, monitored, or checked for accuracy, adequacy, 
                validity, reliability, availability or completeness by us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">3. Professional Disclaimer</h2>
              <p>
                The site cannot and does not contain professional advice. The information is provided for 
                general informational and educational purposes only and is not a substitute for professional 
                advice. Accordingly, before taking any actions based upon such information, we encourage 
                you to consult with the appropriate professionals.
              </p>
            </section>
          </article>
        </motion.div>
      </Container>
    </main>
  )
}
