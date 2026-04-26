import { useParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { BlogCard } from '../components/internal/BlogCard'
import { getPostsByTag } from '../data/editorial'

export function TagPage() {
  const { slug = '' } = useParams()
  const posts = getPostsByTag(slug)

  return (
    <main className="py-10 sm:py-12">
      <Container>
        <section className="rounded-3xl border border-white/60 bg-white/55 p-6 shadow-soft backdrop-blur sm:p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">#{slug} Articles</h1>
          <p className="mt-2 max-w-2xl text-sm text-ink-700 sm:text-base">
            Explore curated posts tagged with #{slug} to discover deeper resources and actionable insights.
          </p>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
          {posts.length === 0 ? (
            <div className="rounded-3xl border border-white/60 bg-white/60 p-6 text-sm text-ink-700 shadow-soft backdrop-blur sm:col-span-2 xl:col-span-3">
              No tagged posts found yet.
            </div>
          ) : null}
        </section>
      </Container>
    </main>
  )
}
