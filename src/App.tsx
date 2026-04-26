import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Outlet, Route, Routes } from 'react-router-dom'
import { BlogDetailPage } from './pages/BlogDetailPage'
import { BrandPage } from './pages/BrandPage'
import { CategoryPage } from './pages/CategoryPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { SearchResultsPage } from './pages/SearchResultsPage'
import { TagPage } from './pages/TagPage'

function AppShell() {
  return (
    <div className="min-h-dvh bg-soft-gradient text-ink-900">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/brand/:slug" element={<BrandPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/tag/:slug" element={<TagPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
