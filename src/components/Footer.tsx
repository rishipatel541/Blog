import { Container } from './Container'
import { Link } from 'react-router-dom'
import { editorialPosts } from '../data/editorial'

function SocialIcon({ label, path }: { label: string; path: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-2xl border border-white/60 bg-white/55 text-ink-700 shadow-soft backdrop-blur transition hover:bg-white hover:text-ink-900"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d={path} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

export function Footer() {
  const allBrands = Array.from(new Set(editorialPosts.map(p => p.brand)))
    .filter(b => b && b !== 'Editorial' && b !== 'Budget' && b !== 'Aesthetic' && b !== 'Tech' && b !== 'Health')
    .sort()
    .slice(0, 5)

  return (
    <footer id="contact" className="border-t border-black/5 bg-white/25 py-12 backdrop-blur">
      <Container>
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient text-sm font-extrabold text-white shadow-glow">
                T
              </span>
              <span className="text-sm font-semibold tracking-tight text-ink-900">Textora</span>
            </div>
            <p className="mt-3 text-sm text-ink-700/80">Stay socially connected with us.</p>
          </div>

          <div>
            <div className="text-sm font-semibold text-ink-900">Categories</div>
            <ul className="mt-4 space-y-3 text-sm text-ink-700/85">
              <li>
                <Link to="/blog" className="hover:text-ink-900">
                  All Blogs
                </Link>
              </li>
              <li>
                <Link to="/category/lifestyle" className="hover:text-ink-900">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link to="/category/tech" className="hover:text-ink-900">
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-ink-900">Company</div>
            <ul className="mt-4 space-y-3 text-sm text-ink-700/85">
              <li>
                <Link to="/about" className="hover:text-ink-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ink-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/author" className="hover:text-ink-900">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-ink-900">
                  Latest News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-ink-900">Brands</div>
            <ul className="mt-4 space-y-3 text-sm text-ink-700/85">
              {allBrands.map(brand => (
                <li key={brand}>
                  <Link to={`/brand/${brand.toLowerCase().replace(/ /g, '-')}`} className="hover:text-ink-900">
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-black/5 pt-6 text-xs text-ink-700/70 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Textora. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-ink-900">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-ink-900">
              Privacy
            </Link>
            <Link to="/affiliate-disclosure" className="hover:text-ink-900">
              Disclosure
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
