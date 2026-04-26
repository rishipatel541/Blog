import { motion } from 'framer-motion'
import { featuredPosts } from '../data/content'
import { fadeUp, hoverLift, stagger } from '../lib/motion'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

function ImgBlock({ src, from, to }: { src: string; from: string; to: string }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/60 shadow-soft"
      style={{
        backgroundImage: `radial-gradient(900px 400px at 20% 15%, rgba(255,255,255,0.55), transparent 65%), linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      <img
        src={src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top opacity-95 mix-blend-overlay"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 opacity-60 [background:radial-gradient(450px_160px_at_50%_0%,rgba(255,255,255,0.65),transparent_60%)]" />
      <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/20 blur-2xl" />
      <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-black/10 blur-3xl" />
      <div className="relative aspect-[16/10]" />
    </div>
  )
}

function Meta({
  category,
  title,
  excerpt,
  author,
  dateLabel,
}: {
  category: string
  title: string
  excerpt: string
  author: string
  dateLabel: string
}) {
  return (
    <div className="mt-4">
      <div className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-ink-700 shadow-[0_10px_30px_rgba(13,18,45,0.08)] backdrop-blur">
        {category}
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-700">{excerpt}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-ink-700/80">
        <span className="font-medium">By {author}</span>
        <span>{dateLabel}</span>
      </div>
    </div>
  )
}

export function FeaturedBlogs() {
  const [big, ...rest] = featuredPosts
  const [rightTop, rightBottom] = rest

  return (
    <section id="blog" className="py-14 sm:py-18">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              title="Featured Blogs"
              action={
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-ink-900 shadow-soft backdrop-blur transition hover:bg-white"
                >
                  See All Posts <span aria-hidden="true">→</span>
                </a>
              }
            />
          </motion.div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <motion.a
              href="#"
              variants={fadeUp}
              {...hoverLift}
              className="group rounded-3xl border border-white/60 bg-white/55 p-5 shadow-soft backdrop-blur lg:col-span-2"
            >
              <ImgBlock src={big.image} from={big.accentFrom} to={big.accentTo} />
              <Meta
                category={big.category}
                title={big.title}
                excerpt={big.excerpt}
                author={big.author}
                dateLabel={big.dateLabel}
              />
            </motion.a>

            <div className="grid gap-6">
              {[rightTop, rightBottom].map((p) => (
                <motion.a
                  key={p.id}
                  href="#"
                  variants={fadeUp}
                  {...hoverLift}
                  className="group rounded-3xl border border-white/60 bg-white/55 p-5 shadow-soft backdrop-blur"
                >
                  <ImgBlock src={p.image} from={p.accentFrom} to={p.accentTo} />
                  <Meta
                    category={p.category}
                    title={p.title}
                    excerpt={p.excerpt}
                    author={p.author}
                    dateLabel={p.dateLabel}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

