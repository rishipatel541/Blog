import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Outlet, Route, Routes } from 'react-router-dom'
import { BlogPage } from './pages/BlogPage'
import { BlogDetailPage } from './pages/BlogDetailPage'
import { BrandPage } from './pages/BrandPage'
import { CategoryPage } from './pages/CategoryPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { SearchResultsPage } from './pages/SearchResultsPage'
import { TagPage } from './pages/TagPage'
import { ScrollToTop } from './components/ScrollToTop'

import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsPage } from './pages/TermsPage'
import { AffiliateDisclosurePage } from './pages/AffiliateDisclosurePage'
import { DisclaimerPage } from './pages/DisclaimerPage'
import { AuthorPage } from './pages/AuthorPage'

function AppShell() {
  return (
    <div className="min-h-dvh bg-soft-gradient text-ink-900">
      <ScrollToTop />
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
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/affiliate-disclosure" element={<AffiliateDisclosurePage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/author" element={<AuthorPage />} />
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
