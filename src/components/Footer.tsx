import { Container } from './Container'
import { Link } from 'react-router-dom'

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
            <a href="mailto:hello@designmonks.co" className="mt-4 block text-sm font-medium text-ink-700 hover:text-ink-900">
              hello@designmonks.co
            </a>
            <p className="mt-3 text-sm text-ink-700/80">Stay socially connected with us.</p>

            <div className="mt-5 flex items-center gap-3">
              <SocialIcon
                label="LinkedIn"
                path="M4 4h4v16H4V4Zm2 3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 13v-9h4v1.6c.6-1 1.7-2 3.6-2 3 0 4.4 2 4.4 5.3V20h-4v-4.6c0-1.6-.3-2.7-1.7-2.7-1.2 0-2 1-2 2.7V20h-4Z"
              />
              <SocialIcon label="Instagram" path="M7 7h10v10H7V7Zm-2 0a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7Zm10.5 1.5h.01" />
              <SocialIcon label="X" path="M4 4l16 16M20 4L4 20" />
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-ink-900">Categories</div>
            <ul className="mt-4 space-y-3 text-sm text-ink-700/85">
              <li>
                <Link to="/search" className="hover:text-ink-900">
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
                <Link to="/" className="hover:text-ink-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog/best-desk-setup" className="hover:text-ink-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/brand/amazon" className="hover:text-ink-900">
                  Brand
                </Link>
              </li>
              <li>
                <Link to="/tag/design" className="hover:text-ink-900">
                  Tags
                </Link>
              </li>
              <li>
                <Link to="/missing" className="hover:text-ink-900">
                  404
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-ink-900">Need help?</div>
            <p className="mt-4 text-sm text-ink-700/85">
              We’re dedicated to finding the right solution for you—whether it’s content strategy, editorial design, or a
              clean publishing system.
            </p>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-ink-900 shadow-soft backdrop-blur transition hover:bg-white"
            >
              Need Assistance? <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-black/5 pt-6 text-xs text-ink-700/70 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Textora. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-ink-900">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-ink-900">
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

