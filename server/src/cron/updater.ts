// server/src/cron/updater.ts

import cron from 'node-cron'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Schedule: Every 12 hours (0 0,12 * * *)
export function initProductUpdateCron() {
  cron.schedule('0 0,12 * * *', async () => {
    console.log('🔄 Running scheduled product data update...')
    
    const products = await prisma.product.findMany()
    
    for (const product of products) {
      try {
        // Fetch new data from Affiliate APIs
        const liveData = await fetchLatestAffiliateData(product.externalId)
        
        await prisma.product.update({
          where: { id: product.id },
          data: {
            price: liveData.price,
            rating: liveData.rating,
            availability: liveData.availability,
            lastUpdated: new Date()
          }
        })
      } catch (err) {
        console.error(`Failed to update product ${product.externalId}:`, err)
      }
    }
    
    console.log('✅ All products updated.')
  })
}

async function fetchLatestAffiliateData(externalId: string) {
  // Real API calls would happen here
  return {
    price: Math.random() * 500 + 50, // Simulated price fluctuation
    rating: 4.5 + Math.random() * 0.5,
    availability: Math.random() > 0.1 ? "In Stock" : "Out of Stock"
  }
}
