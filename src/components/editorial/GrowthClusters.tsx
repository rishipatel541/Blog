import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getGrowthClusters } from '../../services/growthService'
import { fadeUp } from '../../lib/motion'

export function GrowthClusters() {
  const clusters = getGrowthClusters()

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-xs font-black uppercase tracking-widest text-purple-600">
          🌱 Authority Clusters
        </div>
        <h2 className="text-4xl font-black tracking-tight text-ink-900">Explore Our Expert Clusters</h2>
        <p className="text-lg text-ink-600">Deep-dive into specific niches with our curated content pillars.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {clusters.map((cluster, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            className="rounded-[40px] bg-white p-10 shadow-soft border border-ink-50 transition-all hover:shadow-softer"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-[30px] bg-ink-50 text-4xl shadow-inner">
                {cluster.icon}
              </div>
              <div>
                <h3 className="text-2xl font-black text-ink-900">{cluster.name}</h3>
                <p className="font-bold text-purple-600 uppercase tracking-widest text-xs mt-1">
                  {cluster.posts.length} Editorial Guides
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {cluster.posts.slice(0, 3).map((post) => (
                <li key={post.id}>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="group flex items-center justify-between rounded-2xl bg-ink-50/50 p-4 transition-all hover:bg-white hover:shadow-soft"
                  >
                    <span className="font-bold text-ink-800 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </span>
                    <span className="text-ink-300">→</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 font-black text-ink-900 hover:text-purple-600 transition-colors"
              >
                View Full Cluster <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
