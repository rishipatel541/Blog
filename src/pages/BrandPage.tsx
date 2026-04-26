import { useParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { BlogCard } from '../components/internal/BlogCard'
import { brandDeals, getPostsByBrand } from '../data/editorial'

export function BrandPage() {
  const { slug = '' } = useParams()
  const brandPosts = getPostsByBrand(slug)
  const deals = brandDeals[slug] ?? []
  const brandLabel = brandPosts[0]?.brand ?? slug.toUpperCase()

  return (
    <main className="py-10 sm:py-12">
      <Container>
        <section className="rounded-3xl border border-white/60 bg-white/55 p-6 shadow-soft backdrop-blur sm:p-8">
          <div className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-ink-700">Brand Page</div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{brandLabel} Editorial Hub</h1>
          <p className="mt-2 max-w-2xl text-sm text-ink-700 sm:text-base">
            Discover brand-focused reviews, buying guides, and curated recommendations.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-ink-900">Posts related to {brandLabel}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {brandPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-white/60 bg-white/60 p-5 shadow-soft backdrop-blur">
          <h2 className="text-xl font-semibold text-ink-900">Deals</h2>
          <div className="mt-3 space-y-3">
            {deals.length > 0 ? (
              deals.map((deal) => (
                <article key={deal.id} className="rounded-2xl border border-white/60 bg-white/70 p-4">
                  <h3 className="font-semibold text-ink-900">{deal.title}</h3>
                  <p className="mt-1 text-sm text-ink-700">{deal.summary}</p>
                  <a href={deal.ctaLink} className="mt-3 inline-flex text-sm font-semibold text-indigo-700 hover:text-indigo-900">
                    {deal.ctaLabel}
                  </a>
                </article>
              ))
            ) : (
              <p className="text-sm text-ink-700">No active deals right now. Check back soon.</p>
            )}
          </div>
        </section>
      </Container>
    </main>
  )
}
