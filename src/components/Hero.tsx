import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import heroImg from '../assets/hero.png'
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

function GlassCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <FloatingCard
      delay={delay}
      className={`relative overflow-hidden rounded-2xl border border-white/40 bg-white/30 shadow-xl backdrop-blur-md ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10" />
      <div className="relative">{children}</div>
    </FloatingCard>
  )
}

function SmallFloatingElement({
  icon,
  label,
  className,
  delay = 0,
}: {
  icon: string
  label: string
  className: string
  delay?: number
}) {
  return (
    <FloatingCard delay={delay} floatRange={8} className={className}>
      <div className="flex items-center gap-1.5 rounded-full border border-white/50 bg-white/70 px-3 py-1.5 text-xs font-medium text-ink-700 shadow-lg backdrop-blur-md">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
    </FloatingCard>
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
      className="relative h-[380px] w-full sm:h-[420px]"
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-violet-500/30 blur-[80px]" />
        <div className="absolute h-40 w-40 rounded-full bg-blue-500/25 blur-[60px]" />
      </div>

      {/* Layer 3 - Back card (most offset) */}
      <FloatingCard delay={0.2} floatRange={16} className="absolute left-1/2 top-1/2 w-56 -translate-x-1/2 -translate-y-1/2 sm:w-64">
        <GlassCard delay={0.4} className="h-36 rotate-[-3deg] sm:h-40">
          <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
            <div className="h-8 w-8 rounded-lg bg-violet-500/30" />
            <div className="h-2 w-20 rounded-full bg-ink-900/20" />
            <div className="h-2 w-14 rounded-full bg-ink-900/15" />
          </div>
        </GlassCard>
      </FloatingCard>

      {/* Layer 2 - Middle card */}
      <FloatingCard delay={0.1} floatRange={14} className="absolute left-1/2 top-1/2 w-60 -translate-x-1/2 -translate-y-1/2 sm:w-72">
        <GlassCard delay={0.2} className="h-40 rotate-[2deg] sm:h-44">
          <div className="flex h-full flex-col items-center justify-center gap-3 p-5">
            <div className="flex gap-2">
              <div className="h-10 w-10 rounded-xl bg-brand-gradient" />
              <div className="h-10 w-10 rounded-xl bg-blue-500/30" />
            </div>
            <div className="h-2 w-24 rounded-full bg-ink-900/20" />
            <div className="flex gap-2">
              <div className="h-6 w-12 rounded-full bg-violet-500/20" />
              <div className="h-6 w-12 rounded-full bg-blue-500/20" />
            </div>
          </div>
        </GlassCard>
      </FloatingCard>

      {/* Layer 1 - Front card (main visual) */}
      <FloatingCard delay={0} floatRange={12} className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 sm:w-80">
        <div className="relative overflow-hidden rounded-2xl border border-white/50 bg-white/40 shadow-2xl backdrop-blur-xl">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.12),transparent_50%)]" />
          
          {/* Content */}
          <div className="relative flex flex-col items-center justify-center p-6 sm:p-8">
            <img
              src={heroImg}
              alt=""
              className="w-full max-w-[200px] select-none drop-shadow-[0_20px_40px_rgba(13,18,45,0.15)] sm:max-w-[240px]"
            />
          </div>
        </div>
      </FloatingCard>

      {/* Small floating elements */}
      <SmallFloatingElement icon="🎨" label="Design" className="left-0 top-8" delay={0.3} />
      <SmallFloatingElement icon="💡" label="Ideas" className="right-2 top-12" delay={0.5} />
      <SmallFloatingElement icon="❤️" label="2.1k" className="left-4 bottom-16" delay={0.7} />
      <SmallFloatingElement icon="🚀" label="Growth" className="right-0 bottom-20" delay={0.9} />
      <SmallFloatingElement icon="✨" label="New" className="left-8 top-1/2" delay={0.4} />
      <SmallFloatingElement icon="📈" label="Stats" className="right-4 top-1/2" delay={0.6} />
    </motion.div>
  )
}

// ============ EXISTING FLOATING CHIP (kept for compatibility) ============

function FloatingChip({
  label,
  className,
  delay,
}: {
  label: string
  className: string
  delay: number
}) {
  return (
    <motion.div
      variants={floaty(delay)}
      initial="initial"
      animate="animate"
      className={[
        'pointer-events-none absolute rounded-2xl border border-white/40 bg-glass px-3 py-2 text-xs font-semibold text-ink-700 shadow-soft backdrop-blur',
        className,
      ].join(' ')}
    >
      {label}
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

