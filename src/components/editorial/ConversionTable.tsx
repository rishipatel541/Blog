import type { ComparisonRow } from '../../data/editorial'

export function ConversionTable({ data }: { data: ComparisonRow[] }) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-soft backdrop-blur">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/80 text-xs font-bold uppercase tracking-widest text-ink-700/80">
            <tr>
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Main Feature</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5">
            {data.map((row, idx) => (
              <tr key={idx} className="transition-colors hover:bg-white/40">
                <td className="px-6 py-5 font-bold text-ink-900">{row.productName}</td>
                <td className="px-6 py-5 text-ink-700">{row.feature}</td>
                <td className="px-6 py-5 font-semibold text-ink-900">{row.price}</td>
                <td className="px-6 py-5 text-right">
                  <a
                    href={row.ctaLink}
                    className="inline-flex items-center gap-1 rounded-full bg-ink-900 px-4 py-1.5 text-xs font-bold text-white transition hover:bg-purple-700"
                  >
                    Check Price <span aria-hidden="true">→</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
