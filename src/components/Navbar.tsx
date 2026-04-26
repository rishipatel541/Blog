import { useEffect, useMemo, useState } from 'react'
import { navLinks } from '../data/content'
import { Container } from './Container'
import { GradientButton } from './GradientButton'

function Logo() {
  return (
    <a href="#" className="group inline-flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient text-sm font-extrabold text-white shadow-glow">
        T
      </span>
      <span className="text-sm font-semibold tracking-tight text-ink-900">
        Textora
        <span className="ml-2 align-middle text-[11px] font-medium text-ink-700/70 opacity-0 transition-opacity group-hover:opacity-100">
          blog studio
        </span>
      </span>
    </a>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = useMemo(
    () =>
      navLinks.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="rounded-full px-3 py-2 text-sm font-medium text-ink-700 transition hover:bg-white/70 hover:text-ink-900"
        >
          {l.label}
        </a>
      )),
    [],
  )

  return (
    <div className="sticky top-0 z-50">
      <div
        className={[
          'border-b border-transparent bg-white/35 backdrop-blur supports-[backdrop-filter]:bg-white/25',
          isScrolled ? 'border-black/5 shadow-soft' : '',
        ].join(' ')}
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-4">
            <Logo />
            <nav className="hidden items-center gap-1 md:flex">{nav}</nav>
            <div className="flex items-center gap-2">
              <GradientButton>Get Started</GradientButton>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

