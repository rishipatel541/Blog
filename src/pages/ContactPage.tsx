import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '../components/Container'
import { fadeUp, stagger } from '../lib/motion'

export function ContactPage() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    
    try {
      const response = await fetch('https://formspree.io/f/mdabpvpg', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        // Success! Redirect to home
        navigate('/')
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Error submitting form. Please check your connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="pb-24 pt-16 sm:pt-24">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-16 lg:grid-cols-2"
        >
          <div className="space-y-8">
            <motion.div variants={fadeUp}>
              <h1 className="text-5xl font-black tracking-tight text-ink-900 sm:text-6xl">
                Let's <span className="text-transparent bg-clip-text bg-brand-gradient">Connect</span>
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-ink-700">
                Have a question about a specific setup? Or maybe a brand partnership inquiry? 
                We're always looking for the next big thing in editorial tech.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-6">
              <div className="flex items-center gap-4 rounded-3xl border border-ink-100 bg-white p-6 shadow-soft transition-all hover:border-purple-600/30">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-purple-50 text-purple-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-ink-900">Email Us</div>
                  <div className="text-ink-700">hello@textora.studio</div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-3xl border border-ink-100 bg-white p-6 shadow-soft transition-all hover:border-purple-600/30">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-ink-900">Office</div>
                  <div className="text-ink-700">Innovation Hub, San Francisco</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="rounded-[40px] bg-white p-8 shadow-2xl border border-ink-50 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-2xl border border-ink-100 bg-ink-50/50 px-6 py-4 transition-all focus:border-purple-600 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full rounded-2xl border border-ink-100 bg-ink-50/50 px-6 py-4 transition-all focus:border-purple-600 focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-ink-700">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what's on your mind..."
                  className="w-full rounded-2xl border border-ink-100 bg-ink-50/50 px-6 py-4 transition-all focus:border-purple-600 focus:outline-none"
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-brand-gradient py-5 text-lg font-black text-white shadow-glow transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </Container>
    </main>
  )
}
