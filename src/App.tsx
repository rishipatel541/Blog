import { CeoMessage } from './components/CeoMessage'
import { FeaturedBlogs } from './components/FeaturedBlogs'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Newsletter } from './components/Newsletter'
import { RecentPosts } from './components/RecentPosts'
import { Videos } from './components/Videos'
// import { WorksShowcase } from './components/WorksShowcase'

export default function App() {
  return (
    <div className="min-h-dvh bg-soft-gradient text-ink-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturedBlogs />
        {/* <WorksShowcase /> */}
        <RecentPosts />
        <CeoMessage />
        <Videos />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

