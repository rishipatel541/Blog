import { Link, useParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { BlogCard } from '../components/internal/BlogCard'
import { brandDeals, getPostsByBrand, editorialPosts } from '../data/editorial'

export function BrandPage() {
  const { slug = '' } = useParams()
  const brandPosts = getPostsByBrand(slug)
  const deals = brandDeals[slug] ?? []
  const brandLabel = brandPosts[0]?.brand ?? slug.toUpperCase()

  const allBrands = Array.from(new Set(editorialPosts.map(p => p.brand)))
    .filter(b => b && b !== 'Editorial')
    .sort()

  return (
    <main className="py-10 sm:py-16">
      <Container>
        <section className="rounded-3xl border border-white/60 bg-white/55 p-6 shadow-soft backdrop-blur sm:p-8">
          <div className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink-700 shadow-sm">
            Brand Ecosystem
          </div>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            {brandLabel} <span className="text-transparent bg-clip-text bg-brand-gradient">Hub</span>
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-700 sm:text-lg">
            Expert reviews and comprehensive buying guides for {brandLabel} products.
          </p>
        </section>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_300px]">
          {/* Main Content Area */}
          <div className="space-y-16">
            <section>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-ink-900">Latest from {brandLabel}</h2>
                <div className="h-px flex-1 bg-ink-100 ml-6 hidden sm:block" />
              </div>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {brandPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-white/60 bg-white/60 p-8 shadow-soft backdrop-blur">
              <h2 className="text-2xl font-bold tracking-tight text-ink-900">Active {brandLabel} Deals</h2>
              <div className="mt-8 space-y-4">
                {deals.length > 0 ? (
                  deals.map((deal) => (
                    <article key={deal.id} className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm transition-all hover:shadow-md">
                      <h3 className="text-lg font-bold text-ink-900">{deal.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-700">{deal.summary}</p>
                      <a 
                        href={deal.ctaLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-700"
                      >
                        {deal.ctaLabel} <span>→</span>
                      </a>
                    </article>
                  ))
                ) : (
                  <p className="text-sm text-ink-700 italic">No active deals right now. Check back soon for the latest offers.</p>
                )}
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <aside className="space-y-8">
            <div className="sticky top-24">
              <div className="rounded-3xl border border-white/60 bg-white/40 p-6 shadow-soft backdrop-blur">
                <h3 className="text-lg font-bold text-ink-900">Explore Partners</h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-ink-500">Jump to another brand</p>
                
                <div className="mt-6 flex flex-col gap-2">
                  {allBrands.map((brand) => {
                    const brandSlug = brand.toLowerCase().replace(/ /g, '-')
                    const isActive = slug === brandSlug
                    return (
                      <Link
                        key={brand}
                        to={`/brand/${brandSlug}`}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${isActive
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'bg-white/60 text-ink-700 hover:bg-white hover:text-purple-600 shadow-sm'
                          }`}
                      >
                        <span>{brand}</span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                        )}
                      </Link>
                    )
                  })}
                </div>

                <div className="mt-8 border-t border-white/60 pt-6">
                  <Link 
                    to="/brands"
                    className="group flex items-center gap-2 text-sm font-bold text-ink-900 hover:text-purple-600"
                  >
                    View All Brands
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>

              {/* Newsletter or CTA in Sidebar */}
              <div className="mt-6 rounded-3xl bg-brand-gradient p-8 text-white shadow-glow">
                <h4 className="text-lg font-black italic">TEXTORA INSIDER</h4>
                <p className="mt-2 text-sm font-medium opacity-90">Get the latest brand reviews delivered weekly.</p>
                <button className="mt-6 w-full rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-ink-900 transition-transform hover:scale-[1.02]">
                  Join Newsletter
                </button>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  )
}


