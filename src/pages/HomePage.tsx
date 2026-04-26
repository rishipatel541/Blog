import { CeoMessage } from '../components/CeoMessage'
import { FeaturedBlogs } from '../components/FeaturedBlogs'
import { Hero } from '../components/Hero'
import { Newsletter } from '../components/Newsletter'
import { RecentPosts } from '../components/RecentPosts'
import { Videos } from '../components/Videos'

export function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedBlogs />
      <RecentPosts />
      <CeoMessage />
      <Videos />
      <Newsletter />
    </main>
  )
}
