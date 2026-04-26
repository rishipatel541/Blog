import { Link } from 'react-router-dom'
import { Container } from '../components/Container'

export function NotFoundPage() {
  return (
    <main className="py-12">
      <Container>
        <section className="rounded-3xl border border-white/60 bg-white/60 p-8 text-center shadow-soft backdrop-blur">
          <h1 className="text-3xl font-semibold text-ink-900">Page not found</h1>
          <p className="mt-2 text-sm text-ink-700">The page you requested does not exist or may have moved.</p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-glow"
          >
            Back to Homepage <span aria-hidden="true">→</span>
          </Link>
        </section>
      </Container>
    </main>
  )
}
