// server/src/server.ts

import express from 'express'
import cors from 'cors'
import { initProductUpdateCron } from './cron/updater'
import { generateAutomatedBlog } from './generator/contentGenerator'

const app = express()
app.use(cors())
app.use(express.json())

// Initialize Automations
initProductUpdateCron()

// Endpoints
app.post('/api/generate-blog', async (req, res) => {
  try {
    const { keyword, category, products } = req.body
    const blog = await generateAutomatedBlog({ keyword, category, targetProducts: products })
    res.json({ success: true, blog })
  } catch (err) {
    res.status(500).json({ error: (err as Error).message })
  }
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`🚀 Automated Editorial Backend running on port ${PORT}`)
})
