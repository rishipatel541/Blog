import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import heroImg from '../assets/hero-custom.png'
import { popularTags, stats } from '../data/content'
import { fadeUp, floaty, stagger } from '../lib/motion'
import { Container } from './Container'
import { Pill } from './Pill'

function GradientWord({ children }: { children: string }) {
  return (
    <span className="bg-brand-gradient bg-clip-text text-transparent">{children}</span>
  )
}

// ============ ENHANCED RIGHT SIDE VISUAL ============

function FloatingCard({
  children,
  className,
  delay = 0,
  floatRange = 12,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  floatRange?: number
}) {
  return (
    <motion.div
      variants={floaty(delay, floatRange)}
      initial="initial"
      animate="animate"
      className={className}
    >
      {children}
    </motion.div>
  )
}

function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null)
  
  // Parallax effect on mouse move
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 20, stiffness: 150 }
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig)
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), springConfig)
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    mouseX.set((e.clientX - rect.left - centerX) / centerX)
    mouseY.set((e.clientY - rect.top - centerY) / centerY)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ x, y }}
      className="relative flex h-[380px] w-full items-center justify-center sm:h-[420px]"
    >
      <FloatingCard delay={0} floatRange={12}>
        <img
          src={heroImg}
          alt="Featured hero visual"
          className="w-full max-w-[460px] select-none mix-blend-multiply sm:max-w-[560px]"
        />
      </FloatingCard>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-10 sm:pb-16 sm:pt-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-3xl" />
        <div className="absolute right-[-220px] top-[-80px] h-[520px] w-[520px] rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="grid items-center gap-10 lg:grid-cols-2"
        >
          <div>
            <motion.div variants={fadeUp}>
              <Pill>
                <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-gradient text-[10px] font-black text-white">
                  ✦
                </span>
                Reach Daily Users
              </Pill>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl"
            >
              Where Ideas Meet
              <br />
              Simplicity Dive into
              <br />
              <GradientWord>Articles</GradientWord> on Life
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-base text-ink-700 sm:text-lg">
              Welcome to a space where simplicity meets creativity. Discover stories, ideas, and insights crafted with
              clarity and purpose.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6">
              <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 p-2 shadow-soft backdrop-blur">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white shadow-[0_10px_30px_rgba(13,18,45,0.08)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M21 21l-4.3-4.3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <input
                  className="h-11 w-full bg-transparent px-2 text-sm text-ink-900 outline-none placeholder:text-ink-700/60"
                  placeholder="Search Articles"
                />
                <button className="hidden h-11 shrink-0 rounded-xl bg-brand-gradient px-5 text-sm font-semibold text-white shadow-glow transition hover:shadow-[0_18px_60px_rgba(124,58,237,0.30)] sm:inline-flex">
                  Search
                </button>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-ink-700/70">Popular tags:</span>
                {popularTags.map((t) => (
                  <a
                    key={t}
                    href="#"
                    className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-ink-700 shadow-[0_10px_30px_rgba(13,18,45,0.08)] backdrop-blur transition hover:bg-white/80 hover:text-ink-900"
                  >
                    {t}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="relative">
            <HeroVisual />
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="rounded-2xl border border-white/60 bg-white/60 p-4 shadow-soft backdrop-blur"
            >
              <div className="text-2xl font-extrabold tracking-tight text-ink-900">{s.value}</div>
              <div className="mt-1 text-xs font-medium text-ink-700/80">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

