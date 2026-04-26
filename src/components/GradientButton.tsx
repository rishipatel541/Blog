import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export function GradientButton({
  children,
  className = '',
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & { className?: string }) {
  return (
    <button
      {...props}
      className={[
        'group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition',
        'hover:shadow-[0_18px_60px_rgba(124,58,237,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
        className,
      ].join(' ')}
    >
      {children}
      <span className="ml-0.5 inline-block transition-transform group-hover:translate-x-0.5">→</span>
    </button>
  )
}

