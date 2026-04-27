import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { fadeUp, stagger } from '../lib/motion'

export function AboutPage() {
  return (
    <main className="pb-24 pt-16 sm:pt-24">
      <Container>
        <motion.div 
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl space-y-20"
        >
          {/* Hero Section */}
          <motion.section variants={fadeUp} className="text-center space-y-6">
            <h1 className="text-4xl font-black tracking-tight text-ink-900 sm:text-6xl">
              Authentic Insights, <br />
              <span className="text-purple-600">Premium Picks.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-ink-600 sm:text-xl">
              We help you navigate the complex world of modern tech and lifestyle through deep research and editorial excellence.
            </p>
          </motion.section>

          {/* Story Section */}
          <motion.section variants={fadeUp} className="space-y-8">
            <div className="prose prose-xl prose-purple max-w-none">
              <h2 className="text-3xl font-bold text-ink-900">Our Mission</h2>
              <p>
                In an era of endless options, finding the right gear shouldn't be a chore. 
                Our mission is simple: to provide the most transparent, research-backed, 
                and visually inspiring recommendations for your modern life.
              </p>
              <p>
                Whether you're building a high-performance desk setup in the USA or looking 
                for the latest in ergonomic design, we've done the heavy lifting so you don't have to.
              </p>
            </div>
          </motion.section>

          {/* What We Do */}
          <motion.section variants={fadeUp} className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-[40px] bg-white p-10 shadow-soft border border-ink-50">
              <h3 className="text-xl font-bold text-ink-900">Product Research</h3>
              <p className="mt-4 text-ink-600">
                We spend hundreds of hours analyzing user feedback, technical specs, and industry trends.
              </p>
            </div>
            <div className="rounded-[40px] bg-purple-600 p-10 shadow-soft text-white">
              <h3 className="text-xl font-bold">Unbiased Reviews</h3>
              <p className="mt-4 text-purple-100">
                Our editorial integrity is our greatest asset. We call out the flaws as clearly as the features.
              </p>
            </div>
          </motion.section>

          {/* Trust Section */}
          <motion.section variants={fadeUp} className="rounded-[40px] bg-ink-900 p-12 text-center text-white">
            <h2 className="text-3xl font-bold">Built on Trust</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-300">
              To keep our research free and accessible, we may earn a small commission when you purchase 
              through our links. This never affects our editorial judgment or the price you pay.
            </p>
          </motion.section>
        </motion.div>
      </Container>
    </main>
  )
}
