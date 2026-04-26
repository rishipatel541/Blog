import { Link, useParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { Sidebar } from '../components/internal/Sidebar'
import { editorialPosts, getPostBySlug, popularTags } from '../data/editorial'
import { ProductSection } from '../components/editorial/ProductSection'
import { ConversionTable } from '../components/editorial/ConversionTable'
import { SEOFAQ } from '../components/editorial/SEOFAQ'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import { useEffect, useState } from 'react'
import { BlogCard } from '../components/internal/BlogCard'

export function BlogDetailPage() {
  const { slug = '' } = useParams()
  const post = getPostBySlug(slug)
  const [lastUpdated] = useState(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }))

  useEffect(() => {
    if (post) {
      document.title = post.seo.metaTitle
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', post.seo.metaDescription)
      }
      window.scrollTo(0, 0)
    }
  }, [post])

  if (!post) {
    return (
      <main className="py-20 text-center">
        <Container>
          <h1 className="text-3xl font-bold">Article not found</h1>
          <Link to="/blog" className="mt-4 inline-block text-purple-600 font-semibold underline">Back to Editorial</Link>
        </Container>
      </main>
    )
  }

  const relatedPosts = editorialPosts.filter(p => p.slug !== post.slug).slice(0, 3)

  return (
    <main className="pb-20 pt-10 sm:pt-12">
      <Container>
        <article className="grid gap-12 lg:grid-cols-[1fr_340px]">
          {/* MAIN CONTENT AREA */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="space-y-16"
          >
            {/* 1. HERO SECTION */}
            <header className="space-y-6">
              <motion.div variants={fadeUp} className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-purple-700">
                  {post.category}
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl leading-[1.1]">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-ink-700/70">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-brand-gradient" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-ink-300">|</span>
                    <span>{post.dateLabel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-ink-300">|</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-1 text-[10px] font-bold text-green-700 shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    LAST UPDATED: {lastUpdated}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="relative aspect-[21/9] overflow-hidden rounded-[40px] border border-white/60 shadow-softer">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </header>

            {/* 2. INTRO (HOOK) */}
            <motion.section variants={fadeUp} className="prose prose-lg max-w-none">
              <div className="rounded-[32px] border-l-8 border-purple-600 bg-white/40 p-8 shadow-soft backdrop-blur">
                <p className="text-xl font-medium leading-relaxed text-ink-900 sm:text-2xl">
                  {post.hook}
                </p>
              </div>
            </motion.section>

            {/* 3. QUICK SUMMARY (SEO BOOST) */}
            <motion.section variants={fadeUp} className="rounded-[40px] border border-white/60 bg-white/80 p-8 shadow-softer backdrop-blur-xl sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-ink-900">At a Glance: Our Best Picks</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {post.quickSummary.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 rounded-2xl bg-white/50 p-4 transition-colors hover:bg-white">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                      <span className="text-sm font-bold">#{(idx % 4) + 1}</span>
                    </div>
                    <span className="text-base font-semibold text-ink-900">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* 4. PRODUCT SECTION (CORE) */}
            <section className="space-y-12">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">Top Rated {post.category} for 2026</h2>
                <div className="hidden sm:block text-xs font-bold uppercase tracking-widest text-ink-700/50">Verified Reviews</div>
              </div>
              
              {post.productSections.map((product, idx) => (
                <div key={product.id}>
                  <ProductSection product={product} />
                  
                  {/* MONETIZATION RULE: CTA after first product and middle */}
                  {(idx === 0 || idx === Math.floor(post.productSections.length / 2)) && (
                    <motion.div
                      variants={fadeUp}
                      className="mt-12 rounded-[32px] bg-ink-900 p-8 text-center text-white shadow-glow sm:p-10"
                    >
                      <h3 className="text-2xl font-bold">Want the best deal?</h3>
                      <p className="mt-2 text-white/70">Our editors found a limited-time 20% discount on this top-rated pick.</p>
                      <a
                        href={product.ctaLink}
                        className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-10 py-4 text-base font-bold text-ink-900 transition-transform hover:scale-105"
                      >
                        Grab the Exclusive Deal <span aria-hidden="true">→</span>
                      </a>
                    </motion.div>
                  )}
                </div>
              ))}
            </section>

            {/* 5. COMPARISON TABLE */}
            {post.comparisonData.length > 0 && (
              <motion.section variants={fadeUp} className="space-y-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-ink-900">Head-to-Head Comparison</h2>
                <ConversionTable data={post.comparisonData} />
              </motion.section>
            )}

            {/* 6. BUYING GUIDE */}
            {post.buyingGuide.length > 0 && (
              <motion.section variants={fadeUp} className="rounded-[40px] border border-white/60 bg-white/55 p-8 shadow-soft backdrop-blur-md sm:p-12">
                <h2 className="text-3xl font-extrabold tracking-tight text-ink-900">Ultimate Buying Guide</h2>
                <p className="mt-4 text-ink-700 leading-relaxed">
                  Before you pull the trigger, there are a few critical factors you need to understand to ensure you're getting the best value for your specific needs.
                </p>
                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  {post.buyingGuide.map((guide, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 text-sm font-bold text-white">
                        {idx + 1}
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-ink-700 sm:text-base">{guide}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* 7. FAQ SECTION */}
            <motion.section variants={fadeUp}>
              <SEOFAQ faqs={post.faqs} />
            </motion.section>

            {/* 8. CONCLUSION + CTA */}
            <motion.section
              variants={fadeUp}
              className="rounded-[40px] bg-brand-gradient p-10 text-center text-white shadow-glow sm:p-16"
            >
              <div className="mx-auto max-w-2xl space-y-6">
                <h2 className="text-4xl font-extrabold tracking-tight">The Final Verdict</h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  {post.conclusion}
                </p>
                <div className="pt-6">
                  <a
                    href={post.productSections[0]?.ctaLink || '#'}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-12 py-5 text-lg font-extrabold text-ink-900 shadow-xl transition-all hover:scale-105 hover:bg-gray-50 active:scale-95"
                  >
                    Shop Our #1 Pick Now <span aria-hidden="true">→</span>
                  </a>
                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-white/60">Free 30-Day Returns + Warranty Included</p>
                </div>
              </div>
            </motion.section>

            {/* 9. RELATED POSTS */}
            <section className="space-y-8">
              <div className="flex items-center justify-between border-b border-black/5 pb-4">
                <h2 className="text-2xl font-bold text-ink-900">You Might Also Like</h2>
                <Link to="/blog" className="text-sm font-bold text-purple-600 hover:underline">View All Editorial →</Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((p) => (
                  <BlogCard key={p.id} post={p} />
                ))}
              </div>
            </section>
          </motion.div>

          {/* 10. SIDEBAR (STICKY) */}
          <aside className="space-y-8">
            <div className="sticky top-24 space-y-8">
              <Sidebar
                title="Trending Guides"
                trendingPosts={editorialPosts.filter((item) => item.slug !== post.slug)}
                tags={popularTags}
                showNewsletter={true}
                stickyCtaLabel="2026 Buying Calendar"
              />

              {/* Enhanced Sidebar CTA */}
              <div className="rounded-3xl bg-ink-900 p-6 text-white shadow-glow">
                <div className="text-xs font-bold uppercase tracking-widest text-purple-400">Exclusive Offer</div>
                <h3 className="mt-2 text-lg font-bold leading-tight">Save $200 on Workspace Bundles</h3>
                <p className="mt-2 text-sm text-white/70">Limited time offer for our editorial readers. Use code <b>FOCUS2026</b> at checkout.</p>
                <a
                  href="#"
                  className="mt-6 flex w-full items-center justify-center rounded-xl bg-brand-gradient py-3 text-sm font-bold shadow-glow transition-transform hover:scale-[1.02]"
                >
                  View All Deals
                </a>
              </div>
            </div>
          </aside>
        </article>
      </Container>
    </main>
  )
}
