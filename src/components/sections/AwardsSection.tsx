import { SectionHeading } from '../ui/SectionHeading'
import { hotel } from '../../data/hotel'

export function AwardsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F0EAE0]">
      <div className="site-container text-center">
        <SectionHeading
          heading="Guest Ratings & Accolades"
          subheading={`High review scores from real travellers staying at ${hotel.name}.`}
          align="center"
          className="mb-14"
        />

        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 max-w-3xl mx-auto">
          {hotel.awards.map((award, i) => (
            <div key={i} className="bg-white rounded-lg p-6 border border-[#D8D0C5]/40 shadow-sm flex-1 flex flex-col items-center justify-between text-center group hover:shadow-md transition-shadow">
              <div className="h-52 md:h-60 w-full overflow-hidden rounded-md p-1 mb-4 bg-[#F4EFE6]">
                <img
                  src={award.image}
                  alt={award.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded"
                />
              </div>
              <div>
                <span className="inline-block bg-[#003580] text-white text-xs font-bold px-3 py-1 rounded mb-2">
                  {award.badge}
                </span>
                <h3 className="font-serif text-lg text-[#2B2623] font-bold">{award.name}</h3>
                <span className="text-xs tracking-widest uppercase text-[#7A2332] font-bold mt-1 block">{award.provider}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
