import { Link } from 'react-router-dom'
import type { EditorialPost } from '../../data/editorial'

type SidebarProps = {
  title?: string
  trendingPosts: EditorialPost[]
  tags: string[]
  showNewsletter?: boolean
  stickyCtaLabel?: string
}

export function Sidebar({ title = 'Discover More', trendingPosts, tags, showNewsletter = true, stickyCtaLabel }: SidebarProps) {
  return (
    <aside className="space-y-4">
      <section className="rounded-3xl border border-white/60 bg-white/55 p-4 shadow-soft backdrop-blur">
        <h3 className="text-sm font-semibold text-ink-900">{title}</h3>
        <div className="mt-3 space-y-3">
          {trendingPosts.slice(0, 4).map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="block rounded-2xl border border-white/60 bg-white/65 p-3 transition hover:bg-white">
              <div className="text-xs font-semibold text-ink-700/70">{post.category}</div>
              <div className="mt-1 text-sm font-semibold leading-snug text-ink-900">{post.title}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/60 bg-white/55 p-4 shadow-soft backdrop-blur">
        <h3 className="text-sm font-semibold text-ink-900">Popular Tags</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              to={`/tag/${tag}`}
              className="rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs font-semibold text-ink-700 transition hover:bg-white"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </section>

      {showNewsletter ? (
        <section className="rounded-3xl border border-white/60 bg-white/55 p-4 shadow-soft backdrop-blur">
          <h3 className="text-sm font-semibold text-ink-900">Weekly Brief</h3>
          <p className="mt-2 text-sm text-ink-700">Get practical insights and curated tools every Friday.</p>
          <button
            type="button"
            className="mt-3 w-full rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
          >
            Join Newsletter
          </button>
        </section>
      ) : null}

      {stickyCtaLabel ? (
        <section className="sticky top-24 rounded-3xl border border-white/60 bg-white/70 p-4 shadow-soft backdrop-blur">
          <div className="text-sm font-semibold text-ink-900">{stickyCtaLabel}</div>
          <a
            href="#"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-glow"
          >
            View Best Deal <span aria-hidden="true">→</span>
          </a>
        </section>
      ) : null}
    </aside>
  )
}
