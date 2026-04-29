import { editorialPosts, type EditorialPost, type EditorialProduct } from '../data/editorial'

export interface ComparisonData {
  productA: EditorialProduct
  productB: EditorialProduct
  winner: 'A' | 'B' | 'Tie'
  summary: string
}

export function getComparison(slugA: string, slugB: string): ComparisonData | null {
  // Find products across all posts
  const allProducts = editorialPosts.flatMap(post => post.productSections)
  const productA = allProducts.find(p => p.id === slugA || p.name.toLowerCase().includes(slugA.toLowerCase()))
  const productB = allProducts.find(p => p.id === slugB || p.name.toLowerCase().includes(slugB.toLowerCase()))

  if (!productA || !productB) return null

  return {
    productA,
    productB,
    winner: productA.rating > productB.rating ? 'A' : (productB.rating > productA.rating ? 'B' : 'Tie'),
    summary: `In this head-to-head comparison, we look at the ${productA.name} and the ${productB.name}. Both offer unique strengths for different user needs in 2026.`
  }
}

export function getBestUnderPrice(category: string, maxPrice: number): EditorialProduct[] {
  const allProducts = editorialPosts
    .filter(post => post.category.toLowerCase().includes(category.toLowerCase()))
    .flatMap(post => post.productSections)
  
  return allProducts
    .filter(p => parseFloat(p.price) <= maxPrice)
    .sort((a, b) => b.rating - a.rating)
}

export function getGrowthClusters() {
  return [
    {
      name: 'The Ultimate 2026 Desk Setup',
      posts: editorialPosts.filter(p => p.categorySlug === 'workspace'),
      icon: '💻'
    },
    {
      name: 'High-Performance Computing',
      posts: editorialPosts.filter(p => p.categorySlug === 'tech'),
      icon: '🚀'
    }
  ]
}
