import { useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { reviews } from '../../data/reviews'
import { hotel } from '../../data/hotel'

export function ReviewsSection() {
  const [idx, setIdx] = useState(0)
  const next = () => setIdx((p) => (p + 1) % reviews.length)
  const prev = () => setIdx((p) => (p - 1 + reviews.length) % reviews.length)
  const current = reviews[idx]

  return (
    <section className="py-24 md:py-32 bg-[#FAF7F2] border-t border-[#D8D0C5]/40">
      <div className="site-container">
        <SectionHeading
          heading="What Our Guests Say"
          subheading={`Verified reviews from real guests who have stayed at ${hotel.name}.`}
          align="center"
          className="mb-14"
        />

        {/* Soft Rounded Testimonial Card */}
        <div className="bg-white p-8 sm:p-12 rounded-lg shadow-sm border border-[#D8D0C5]/40 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="bg-[#003580] text-white text-xs font-bold px-2 py-0.5 rounded">
              {current.score || '9/10'}
            </span>
            <span className="text-[#7A2332] text-sm font-bold">★★★★★</span>
          </div>

          <blockquote className="font-serif text-lg sm:text-xl text-[#2B2623] italic leading-relaxed mb-6 font-normal">
            "{current.text}"
          </blockquote>

          <div className="mb-6">
            <span className="text-base font-bold text-[#2B2623] block">
              {current.author}
            </span>
            <span className="text-xs tracking-widest uppercase text-[#7A2332] font-semibold mt-1 block">
              {current.source}
            </span>
          </div>

          <div className="flex items-center justify-between pt-5 border-t border-[#EBE5DC]">
            <button
              onClick={prev}
              className="text-xs uppercase tracking-widest font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors py-1.5 px-3"
              aria-label="Previous review"
            >
              ← Previous
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? 'bg-[#7A2332] w-6' : 'bg-[#D8D0C5] w-2'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="text-xs uppercase tracking-widest font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors py-1.5 px-3"
              aria-label="Next review"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
