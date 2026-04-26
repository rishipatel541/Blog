import type { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export const hoverLift = {
  whileHover: { y: -6, scale: 1.03, boxShadow: '0 18px 50px rgba(13, 18, 45, 0.16)' },
  transition: { type: 'spring', stiffness: 260, damping: 18 },
} as const

export function floaty(delay = 0, floatRange = 10): Variants {
  return {
    initial: { y: 0 },
    animate: {
      y: [0, -floatRange, 0, floatRange * 0.8, 0],
      transition: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay },
    },
  }
}

