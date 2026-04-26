import { Link, useParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { ProductCard } from '../components/internal/ProductCard'
import { Sidebar } from '../components/internal/Sidebar'
import { affiliateProducts, editorialPosts, getPostBySlug, popularTags } from '../data/editorial'

function ComparisonTable() {
  return (
    <div className="mt-6 overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-soft backdrop-blur">
      <table className="w-full text-left text-sm text-ink-700">
        <thead className="bg-white/80 text-xs uppercase tracking-wide text-ink-700/80">
          <tr>
            <th className="px-4 py-3">Product</th>
            <th className="px-4 py-3">Best For</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">CTA</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-black/5">
            <td className="px-4 py-3 font-semibold text-ink-900">ErgoLift Standing Desk</td>
            <td className="px-4 py-3">All-day comfort</td>
            <td className="px-4 py-3">$399</td>
            <td className="px-4 py-3">
              <a href="#" className="text-xs font-semibold text-indigo-700 hover:text-indigo-900">
                Check Price
              </a>
            </td>
          </tr>
          <tr className="border-t border-black/5">
            <td className="px-4 py-3 font-semibold text-ink-900">Clarity 4K Monitor</td>
            <td className="px-4 py-3">Editing and research</td>
            <td className="px-4 py-3">$349</td>
            <td className="px-4 py-3">
              <a href="#" className="text-xs font-semibold text-indigo-700 hover:text-indigo-900">
                Check Price
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export function BlogDetailPage() {
  const { slug = '' } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <main className="py-12">
        <Container>
          <div className="rounded-3xl border border-white/60 bg-white/60 p-8 text-center shadow-soft backdrop-blur">
            <h1 className="text-2xl font-semibold text-ink-900">Article not found</h1>
            <Link
              to="/"
              className="mt-4 inline-flex rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-glow"
            >
              Back Home
            </Link>
          </div>
        </Container>
      </main>
    )
  }

  return (
    <main className="py-10 sm:py-12">
      <Container>
        <article className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <section>
            <header className="rounded-3xl border border-white/60 bg-white/55 p-6 shadow-soft backdrop-blur sm:p-8">
              <div className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-ink-700">{post.category}</div>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{post.title}</h1>
              <div className="mt-3 text-xs text-ink-700/80 sm:text-sm">
                {post.author} • {post.dateLabel} • {post.readTime}
              </div>
              <div className="mt-5 overflow-hidden rounded-2xl border border-white/60">
                <img src={post.image} alt={post.title} className="h-[320px] w-full object-cover object-center" />
              </div>
            </header>

            <div className="mt-5 rounded-3xl border border-white/60 bg-white/55 p-6 shadow-soft backdrop-blur sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-ink-900">Article</h2>
              {post.content.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-sm leading-relaxed text-ink-700 sm:text-base">
                  {paragraph}
                </p>
              ))}

              <h3 className="mt-8 text-xl font-semibold text-ink-900">Recommended Products</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {affiliateProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <h3 className="mt-8 text-xl font-semibold text-ink-900">Comparison Table</h3>
              <ComparisonTable />

              <section className="mt-8 rounded-3xl border border-white/60 bg-white/75 p-5 shadow-soft">
                <h3 className="text-lg font-semibold text-ink-900">Best deal available now</h3>
                <p className="mt-2 text-sm text-ink-700">
                  If you want an immediate upgrade, start with the desk + monitor bundle for the strongest productivity lift.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-glow"
                >
                  Grab the Best Deal <span aria-hidden="true">→</span>
                </a>
              </section>
            </div>
          </section>

          <Sidebar
            title="Related posts"
            trendingPosts={editorialPosts.filter((item) => item.categorySlug === post.categorySlug)}
            tags={popularTags}
            showNewsletter={false}
            stickyCtaLabel="Limited affiliate offer"
          />
        </article>
      </Container>
    </main>
  )
}
