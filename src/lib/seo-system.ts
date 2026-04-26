/**
 * SEO & Content Strategy System
 * Targeting US/UK High-Intent Affiliate Traffic
 */

export type KeywordCategory = 'High Intent' | 'Comparison' | 'Review' | 'Trending'

export interface ContentStrategy {
  targetGeo: 'US' | 'UK'
  currency: 'USD' | 'GBP'
  weeklySchedule: {
    bestOf: number
    comparison: number
    trending: number
  }
  keywordArchetypes: Record<KeywordCategory, string[]>
}

export const SEO_SYSTEM: ContentStrategy = {
  targetGeo: 'US',
  currency: 'USD',
  weeklySchedule: {
    bestOf: 3,
    comparison: 2,
    trending: 1,
  },
  keywordArchetypes: {
    'High Intent': [
      'best [product] under $[price]',
      'top [category] for [use case]',
      'best budget [product] 2026',
    ],
    'Comparison': [
      '[product A] vs [product B]',
      '[brand A] vs [brand B] for [use case]',
    ],
    'Review': [
      '[product] review 2026',
      'is [product] worth it?',
    ],
    'Trending': [
      '[category] trends 2026',
      'new [brand] releases this month',
    ],
  },
}

export const GENERATE_SEO_TITLE = (type: KeywordCategory, item: string, detail?: string) => {
  if (type === 'High Intent') return `Best ${item} Under ${detail} (2026 Update)`
  if (type === 'Comparison') return `${item} vs ${detail}: Which wins in 2026?`
  return `${item} Review: Is it actually worth the money?`
}
