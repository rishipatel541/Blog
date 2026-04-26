/**
 * Dynamic Product Service
 * Simulates real-time affiliate API integration (Amazon PA-API, etc.)
 */

export interface LiveProductData {
  id: string
  price: string
  currency: string
  rating: number
  availability: 'In Stock' | 'Low Stock' | 'Out of Stock'
  lastUpdated: string
}

const MOCK_LIVE_DATA: Record<string, LiveProductData> = {
  'p7-1': { id: 'p7-1', price: '439.99', currency: '$', rating: 4.9, availability: 'In Stock', lastUpdated: new Date().toISOString() },
  'p7-2': { id: 'p7-2', price: '315.00', currency: '$', rating: 4.6, availability: 'Low Stock', lastUpdated: new Date().toISOString() },
  'p8-1': { id: 'p8-1', price: '1049.99', currency: '$', rating: 4.9, availability: 'In Stock', lastUpdated: new Date().toISOString() },
  'p8-2': { id: 'p8-2', price: '929.00', currency: '$', rating: 4.7, availability: 'In Stock', lastUpdated: new Date().toISOString() },
  'p9-1': { id: 'p9-1', price: '549.00', currency: '$', rating: 4.9, availability: 'In Stock', lastUpdated: new Date().toISOString() },
  'p10-1': { id: 'p10-1', price: '119.99', currency: '$', rating: 4.7, availability: 'In Stock', lastUpdated: new Date().toISOString() },
  'p11-1': { id: 'p11-1', price: '104.50', currency: '$', rating: 4.8, availability: 'In Stock', lastUpdated: new Date().toISOString() },
}

export async function fetchLiveProductData(productId: string): Promise<LiveProductData> {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 800))
  
  // Return mock data with slightly randomized price to simulate live updates
  const data = MOCK_LIVE_DATA[productId]
  if (!data) throw new Error('Product not found')
  
  return {
    ...data,
    lastUpdated: new Date().toISOString()
  }
}

export async function fetchTrendingProducts(): Promise<string[]> {
  // Return IDs of most clicked items
  return ['p7-1', 'p8-1', 'p11-1']
}
