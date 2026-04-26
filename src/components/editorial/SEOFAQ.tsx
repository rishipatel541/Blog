import type { FAQItem } from '../../data/editorial'

export function SEOFAQ({ faqs }: { faqs: FAQItem[] }) {
  if (!faqs || faqs.length === 0) return null

  return (
    <section className="mt-12">
      <h3 className="text-2xl font-bold tracking-tight text-ink-900">Frequently Asked Questions</h3>
      <div className="mt-6 grid gap-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-white/60 bg-white/40 p-6 shadow-soft backdrop-blur transition-all hover:bg-white/60"
          >
            <h4 className="text-base font-bold text-ink-900">{faq.question}</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
