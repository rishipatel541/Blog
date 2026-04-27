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
import { CTAButton } from '../components/editorial/CTAButton'

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
        <div className="mx-auto max-w-6xl space-y-16">
          {/* 1. HEADER & INTRO */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="space-y-10"
          >
            {/* 1. HERO SECTION */}
            <header className="space-y-8">
              <motion.div variants={fadeUp} className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-purple-600">
                  {post.category}
                </div>
                <h1 className="text-3xl font-black tracking-tight text-ink-900 sm:text-5xl lg:text-6xl leading-[1.05]">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-ink-700/60">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-brand-gradient shadow-soft" />
                    <span className="text-ink-900">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-200" />
                    <span>{post.dateLabel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-200" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.div>


              <motion.div variants={fadeUp} className="relative aspect-[21/9] overflow-hidden rounded-[40px] shadow-2xl">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
              </motion.div>
            </header>

            {/* 2. INTRO (HOOK) */}
            <motion.section variants={fadeUp} className="prose prose-2xl max-w-none">
              <p className="text-xl font-medium leading-relaxed text-ink-900 sm:text-3xl">
                {post.hook}
              </p>
            </motion.section>

            {/* 2.5 DETAILED DESCRIPTION */}
            {post.content && post.content.length > 0 && (
              <motion.section variants={fadeUp} className="prose prose-lg max-w-none space-y-6">
                {post.content.map((paragraph, idx) => (
                  <p key={idx} className="text-lg leading-relaxed text-ink-700 sm:text-xl">
                    {paragraph}
                  </p>
                ))}
              </motion.section>
            )}
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="space-y-20"
          >
            {/* 3. QUICK SUMMARY */}
            <motion.section variants={fadeUp} className="space-y-8 border-t border-ink-100 pt-12">
              <h2 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">At a Glance: Our Best Picks</h2>
              <div className="grid gap-8 sm:grid-cols-2">
                {post.quickSummary.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-purple-600 font-black text-purple-600 shadow-soft">
                      <span className="text-base">{idx + 1}</span>
                    </div>
                    <span className="text-lg font-bold leading-tight text-ink-900">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* 4. PRODUCT SECTION */}
            <section className="space-y-12">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs font-black uppercase tracking-widest text-green-600">
                  <span className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
                  Live Product analysis
                </div>
                <h2 className="text-4xl font-black tracking-tight text-ink-900 sm:text-5xl">Top Rated {post.category} for 2026</h2>
              </div>
              
              <div className="space-y-20">
                {post.productSections?.map((product, idx) => (
                  <div key={product.id} className="space-y-12">
                    <ProductSection 
                      product={product} 
                      isBestChoice={idx === 0}
                    />
                    
                    {/* CTA Section */}
                    {(idx === 0 || idx === Math.floor(post.productSections.length / 2)) && (
                      <motion.div
                        variants={fadeUp}
                        className="rounded-[40px] bg-ink-900 p-10 text-center text-white shadow-2xl sm:p-12"
                      >
                        <h3 className="text-2xl font-bold">Ready to Upgrade?</h3>
                        <p className="mt-2 text-lg text-white/70">Our editors recommend starting with this top-rated pick for the best value.</p>
                        <div className="mt-8 flex justify-center">
                          <CTAButton 
                            href={product.ctaLink} 
                            label="Check Best Price" 
                            variant="secondary"
                            size="lg"
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 5. COMPARISON TABLE */}
            {post.comparisonData.length > 0 && (
              <motion.section variants={fadeUp} className="space-y-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-ink-900">Expert Comparison</h2>
                <ConversionTable data={post.comparisonData} />
              </motion.section>
            )}

            {/* 6. BUYING GUIDE */}
            {post.buyingGuide.length > 0 && (
              <motion.section variants={fadeUp} className="space-y-10 border-t border-ink-100 pt-12">
                <div className="space-y-2">
                  <h2 className="text-4xl font-black tracking-tight text-ink-900">Ultimate Buying Guide</h2>
                  <p className="text-lg text-ink-600">Everything you need to know before making a decision.</p>
                </div>
                <div className="grid gap-10 sm:grid-cols-2">
                  {post.buyingGuide.map((guide, idx) => (
                    <div key={idx} className="flex gap-6 items-start">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient font-black text-white text-xl shadow-glow">
                        0{idx + 1}
                      </div>
                      <p className="text-lg font-semibold leading-relaxed text-ink-800">{guide}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* 7. FAQ SECTION */}
            <motion.section variants={fadeUp} className="border-t border-ink-100 pt-12">
              <SEOFAQ faqs={post.faqs} />
            </motion.section>

            {/* 8. CONCLUSION */}
            <motion.section
              variants={fadeUp}
              className="space-y-6 border-t border-ink-100 pt-12"
            >
              <h2 className="text-4xl font-black tracking-tight text-ink-900">The Final Verdict</h2>
              <p className="text-xl font-medium leading-relaxed text-ink-800">
                {post.conclusion}
              </p>
              <div className="pt-6">
                <CTAButton 
                  href={post.productSections[0]?.ctaLink || '#'} 
                  label="Shop Our Top Selection"
                  size="lg"
                />
              </div>
            </motion.section>

            {/* 8.5 SHOP THE ESSENTIALS CHECKLIST */}
            {post.productSections?.length > 0 && (
              <motion.section
                variants={fadeUp}
                className="rounded-[40px] bg-purple-50 p-10 sm:p-12"
              >
                <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-purple-600 font-black text-xs uppercase tracking-widest mb-1">
                      <span className="flex h-2 w-2 rounded-full bg-green-500" />
                      Live Deals found
                    </div>
                    <h2 className="text-3xl font-black text-purple-900">Shop the Essentials</h2>
                    <p className="text-purple-700/70 font-medium">Everything you need to recreate this setup.</p>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-soft">
                    🛒
                  </div>
                </div>
                
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {post.productSections?.map((product) => (
                    <a
                      key={product.id}
                      href={product.ctaLink}
                      target="_blank"
                      rel="nofollow"
                      className="group flex items-center justify-between rounded-3xl bg-white p-5 shadow-soft transition-all hover:scale-[1.02] hover:shadow-softer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 overflow-hidden rounded-2xl bg-ink-50">
                          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-bold text-ink-900 group-hover:text-purple-600 transition-colors">{product.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-sm font-black text-purple-600">{product.currency}{product.price}</p>
                            <span className="text-[10px] font-black uppercase text-green-600 bg-green-50 px-2 rounded-full">Save</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-50 text-ink-400 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                        →
                      </div>
                    </a>
                  ))}
                </div>
              </motion.section>
            )}

            {/* 9. RELATED CONTENT */}
            <section className="space-y-12 border-t border-ink-100 pt-20">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-ink-900">Trending Guides</h2>
                <Link to="/blog" className="text-sm font-bold text-purple-600 hover:underline">View All Editorial →</Link>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {editorialPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((p) => (
                  <BlogCard key={p.id} post={p} />
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </Container>
    </main>
  )
}



