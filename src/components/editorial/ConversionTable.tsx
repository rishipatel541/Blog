import type { ComparisonRow } from '../../data/editorial'
import { CTAButton } from './CTAButton'

export function ConversionTable({ data }: { data: ComparisonRow[] }) {
  return (
    <div className="mt-8 overflow-hidden rounded-[40px] border border-white/60 bg-white/60 shadow-soft backdrop-blur transition-all hover:shadow-softer">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-ink-900/5 text-[10px] font-black uppercase tracking-[0.2em] text-ink-400">
            <tr>
              <th className="px-8 py-6">Product Recommendation</th>
              <th className="px-8 py-6">Key Advantage</th>
              <th className="px-8 py-6">Best Price</th>
              <th className="px-8 py-6 text-right">Selection</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5">
            {data.map((row, idx) => (
              <tr 
                key={idx} 
                className={`transition-colors hover:bg-white/40 ${idx === 0 ? 'bg-purple-50/50' : ''}`}
              >
                <td className="px-8 py-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-black text-ink-900 text-lg">{row.productName}</span>
                    {idx === 0 && (
                      <span className="inline-flex w-fit items-center gap-1 rounded-full bg-purple-600 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-white">
                        Editor's Choice
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="font-bold text-ink-700">{row.feature}</span>
                </td>
                <td className="px-8 py-6">
                  <span className="text-xl font-black text-ink-900">{row.price}</span>
                </td>
                <td className="px-8 py-6 text-right">
                  <CTAButton 
                    href={row.ctaLink} 
                    label="View Deal" 
                    size="sm"
                    variant={idx === 0 ? 'primary' : 'secondary'}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
