import { SectionHeading } from '../ui/SectionHeading'
import { hotel } from '../../data/hotel'

export function WhyValdene() {
  return (
    <section className="py-20 md:py-28 bg-[#F0EAE0]">
      <div className="site-container text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <SectionHeading
            heading="Taking Care of Our Wonderful Guests"
            subheading="We take pride in welcoming guests through the door and making sure they get everything from a great night's sleep to memorable seaside moments."
            align="center"
          />

          <p className="text-base md:text-lg text-[#5C5650] leading-relaxed font-normal">
            {hotel.about.highlights}
          </p>

          <p className="text-base text-[#5C5650] leading-relaxed font-normal">
            If there is anything you wish to ask us or need assistance with during your stay in Blackpool, please do not hesitate to ask. We are always happy to help.
          </p>

          <div className="pt-6 inline-block border-t border-[#D8D0C5]">
            <span className="font-serif text-2xl font-bold text-[#2B2623] block">The Beachfront Hospitality Team</span>
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#7A2332]">265 Promenade, Blackpool</span>
          </div>
        </div>
      </div>
    </section>
  )
}
