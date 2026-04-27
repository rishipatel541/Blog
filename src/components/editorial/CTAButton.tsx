import { motion } from 'framer-motion'

interface CTAButtonProps {
  href: string
  label?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function CTAButton({ 
  href, 
  label = 'Check Latest Price', 
  className = '', 
  variant = 'primary',
  size = 'md'
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-black transition-all active:scale-95'
  
  const variants = {
    primary: 'bg-brand-gradient text-white shadow-glow hover:scale-[1.02]',
    secondary: 'bg-white text-ink-900 shadow-soft hover:bg-ink-50 hover:scale-[1.02]',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
  }

  const sizes = {
    sm: 'rounded-xl px-6 py-2.5 text-xs',
    md: 'rounded-2xl px-8 py-4 text-base',
    lg: 'rounded-3xl px-12 py-5 text-lg'
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="nofollow"
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ y: -2 }}
    >
      {label}
      <span aria-hidden="true" className="text-xl">→</span>
    </motion.a>
  )
}
