import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { fadeUp } from '../lib/motion'

export function AffiliateDisclosurePage() {
  return (
    <main className="pb-24 pt-16 sm:pt-24">
      <Container>
        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mx-auto max-w-4xl space-y-12"
        >
          <header className="space-y-4 border-b border-ink-100 pb-12 text-center">
            <h1 className="text-4xl font-black tracking-tight text-ink-900 sm:text-6xl">Affiliate Disclosure</h1>
            <p className="mx-auto max-w-xl text-lg text-ink-500">
              Transparency is the foundation of our community. Here is how we sustain our research.
            </p>
          </header>

          <article className="prose prose-xl prose-purple max-w-none space-y-10">
            <div className="rounded-[40px] bg-purple-50 p-10 sm:p-12">
              <p className="text-2xl font-bold leading-relaxed text-purple-900">
                In compliance with the FTC guidelines, please assume that any and all links on this website 
                are affiliate links from which we receive a small compensation from sales of certain items.
              </p>
            </div>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-ink-900">What is an Affiliate Link?</h2>
              <p>
                An affiliate link is a specific URL that contains the affiliate's ID or username. In compliance 
                with affiliate programs, we use these links to track referrals. When you click on an affiliate 
                link on this site and make a purchase, we may receive a small commission.
              </p>
              <p className="font-bold text-ink-900">
                Crucially, the price of the item is the same whether it is an affiliate link or not. 
                In some cases, our links may even provide you with a discount!
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-ink-900">Our Commitment to You</h2>
              <p>
                We only recommend products that we truly believe in and that we feel would be a 
                valuable addition to your life or workspace. Our editorial content is not influenced 
                by affiliate partnerships. We research and review products based on their own merit.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-ink-900">Amazon Associate Program</h2>
              <p>
                We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising 
                program designed to provide a means for sites to earn advertising fees by advertising and 
                linking to Amazon.com.
              </p>
            </section>
          </article>
        </motion.div>
      </Container>
    </main>
  )
}
