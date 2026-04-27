import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { fadeUp } from '../lib/motion'

export function PrivacyPolicyPage() {
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
            <h1 className="text-4xl font-black tracking-tight text-ink-900 sm:text-6xl">Privacy Policy</h1>
            <p className="text-lg text-ink-500">Last updated: April 27, 2026</p>
          </header>

          <article className="prose prose-lg prose-purple max-w-none space-y-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">1. Introduction</h2>
              <p>
                Welcome to our affiliate blog. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you as to how we look after your personal data when you visit our website 
                and tell you about your privacy rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">2. Data We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped 
                together as follows:
              </p>
              <ul>
                <li><strong>Identity Data:</strong> first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> email address.</li>
                <li><strong>Technical Data:</strong> internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                <li><strong>Usage Data:</strong> information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data 
                to provide the services you requested, to manage our relationship with you, and to improve our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">4. Affiliate Disclosure Integration</h2>
              <p>
                This site uses affiliate links and cookies to track purchases made through those links. 
                This helps us earn a commission at no extra cost to you. For more details, see our 
                <a href="/affiliate-disclosure" className="ml-1 font-bold text-purple-600 underline">Affiliate Disclosure</a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink-900">5. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us at:
                <br />
                <span className="font-bold text-ink-900">privacy@premium-affiliate.com</span>
              </p>
            </section>
          </article>
        </motion.div>
      </Container>
    </main>
  )
}
