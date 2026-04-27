import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { fadeUp, stagger } from '../lib/motion'

export function ContactPage() {
  return (
    <main className="pb-24 pt-16 sm:pt-24">
      <Container>
        <motion.div 
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-5xl"
        >
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div variants={fadeUp} className="space-y-8">
              <h1 className="text-4xl font-black tracking-tight text-ink-900 sm:text-6xl">
                Get in <span className="text-purple-600">Touch.</span>
              </h1>
              <p className="text-xl text-ink-600 leading-relaxed">
                Have a question about a specific setup? Or maybe a brand partnership inquiry? 
                We're always open to hearing from our readers and collaborators.
              </p>
              
              <div className="space-y-6 pt-8 border-t border-ink-100">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-ink-400">Email Us</h3>
                  <p className="text-xl font-bold text-ink-900">hello@premium-affiliate.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-ink-400">Response Time</h3>
                  <p className="text-xl font-bold text-ink-900">Typically within 24-48 hours</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-[40px] bg-white p-8 shadow-2xl border border-ink-50 sm:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-ink-700">Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full rounded-2xl border border-ink-100 bg-ink-50/50 px-6 py-4 transition-all focus:border-purple-600 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-ink-700">Email</label>
                    <input 
                      type="email" 
                      placeholder="jane@example.com"
                      className="w-full rounded-2xl border border-ink-100 bg-ink-50/50 px-6 py-4 transition-all focus:border-purple-600 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink-700">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className="w-full rounded-2xl border border-ink-100 bg-ink-50/50 px-6 py-4 transition-all focus:border-purple-600 focus:outline-none"
                  ></textarea>
                </div>
                <button className="w-full rounded-2xl bg-brand-gradient py-5 text-lg font-black text-white shadow-glow transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </main>
  )
}
