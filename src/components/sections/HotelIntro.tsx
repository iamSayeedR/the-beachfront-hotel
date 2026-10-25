import { SectionHeading } from '../ui/SectionHeading'
import { Link } from 'react-router-dom'
import { hotel } from '../../data/hotel'

export function HotelIntro() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="space-y-6 max-w-lg">
            <SectionHeading
              heading="Directly on Blackpool Promenade"
              subheading="Situated between Central Pier and South Pier on the famous Golden Mile, offering direct views across the Irish Sea and easy access to Blackpool's iconic sights."
            />

            <p className="text-base text-[#5C5650] leading-relaxed font-normal">
              {hotel.about.body}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/rooms"
                className="inline-block bg-[#7A2332] text-white px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider hover:bg-[#5C1A26] transition-colors shadow-xs"
              >
                View Ensuite Rooms →
              </Link>
              <Link
                to="/explore-blackpool"
                className="inline-block bg-[#F4EFE6] text-[#2B2623] hover:text-[#7A2332] px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Visit Blackpool →
              </Link>
            </div>
          </div>

          {/* Right Photography: Sea View Room */}
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md border border-[#D8D0C5]/40">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/683078095.jpg?k=aefd29f753a3501b67014e417670082fba84e92af13a3ecda4ba96002555e076&o="
              alt="The Beachfront Hotel Blackpool Sea View Bedroom"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
