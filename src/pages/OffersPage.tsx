import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/ui/SectionHeading'
import { offers, offersContactNote } from '../data/offers'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { hotel } from '../data/hotel'
import { bookingConfig } from '../config/booking'

export function OffersPage() {
  return (
    <div className="pt-28 pb-16 bg-[#FAF7F2]">
      <div className="site-container max-w-3xl mx-auto text-center mb-12">
        <SectionHeading
          heading="Special Offers & Packages"
          subheading={`Explore the latest rates and packages at ${hotel.name} right on the Blackpool Promenade.`}
          align="center"
        />
      </div>

      {/* Featured Offers Grid */}
      {offers.length > 0 && (
        <div className="site-container mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-lg overflow-hidden border border-[#D8D0C5] shadow-xs flex flex-col justify-between">
                <div>
                  {offer.image && (
                    <div className="aspect-[16/10] bg-[#F0EAE0] overflow-hidden">
                      <img src={offer.image} alt={offer.imageAlt || offer.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-1">Featured Offer</span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2B2623] font-bold mb-3">{offer.title}</h3>
                    <p className="text-sm text-[#5C5650] leading-relaxed mb-4">{offer.description}</p>
                    {offer.terms && <p className="text-xs text-[#5C5650]/80 italic">{offer.terms}</p>}
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a
                    href={bookingConfig.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#7A2332] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded hover:bg-[#5C1A26] transition-colors"
                  >
                    Check Availability ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="site-container max-w-2xl mx-auto mb-16">
        <div className="bg-white p-6 sm:p-12 border border-[#D8D0C5] text-center shadow-xs rounded-lg">
          <span className="font-serif text-xl sm:text-2xl font-bold text-[#7A2332] block mb-3">Booking Guarantee</span>
          <p className="text-sm sm:text-base text-[#5C5650] leading-relaxed mb-8 font-normal">
            {offersContactNote}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center pt-6 border-t border-[#EBE5DC]">
            <PrimaryButton size="lg" className="font-bold w-full sm:w-auto shadow-md" />
            <a
              href={hotel.contact.phoneHref}
              className="btn-call-us-outlined inline-block uppercase tracking-normal sm:tracking-[0.1em] font-bold rounded-md px-4 sm:px-9 py-3.5 text-xs sm:text-sm w-full sm:w-auto text-center max-w-full shadow-xs"
            >
              Call Us: {hotel.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
