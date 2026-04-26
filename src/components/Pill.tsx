import type { PropsWithChildren } from 'react'

export function Pill({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-ink-700 shadow-[0_10px_30px_rgba(13,18,45,0.08)] backdrop-blur">
      {children}
    </span>
  )
}

