import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { BlogCard } from '../components/internal/BlogCard'
import { searchPosts } from '../data/editorial'

export function SearchResultsPage() {
  const [params, setParams] = useSearchParams()
  const initialQuery = params.get('q') ?? ''
  const [query, setQuery] = useState(initialQuery)

  const results = useMemo(() => searchPosts(initialQuery), [initialQuery])

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    setParams(query.trim() ? { q: query } : {})
  }

  return (
    <main className="py-10 sm:py-12">
      <Container>
        <section className="rounded-3xl border border-white/60 bg-white/55 p-6 shadow-soft backdrop-blur sm:p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">Search Articles</h1>
          <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="Search by keyword, category, or brand..."
              className="w-full rounded-full border border-white/60 bg-white/80 px-4 py-2 text-sm text-ink-900 outline-none ring-indigo-500/40 transition focus:ring"
            />
            <button type="submit" className="rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white shadow-glow">
              Search
            </button>
          </form>
        </section>

        <section className="mt-6">
          {initialQuery && results.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : null}

          {initialQuery && results.length === 0 ? (
            <div className="rounded-3xl border border-white/60 bg-white/60 p-6 text-sm text-ink-700 shadow-soft backdrop-blur">
              No results found for <span className="font-semibold text-ink-900">"{initialQuery}"</span>. Try another keyword.
            </div>
          ) : null}

          {!initialQuery ? (
            <div className="rounded-3xl border border-white/60 bg-white/60 p-6 text-sm text-ink-700 shadow-soft backdrop-blur">
              Start with a topic like "design", "affiliate", or "workspace".
            </div>
          ) : null}
        </section>
      </Container>
    </main>
  )
}
