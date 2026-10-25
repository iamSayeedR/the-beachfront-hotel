import { SectionHeading } from '../components/ui/SectionHeading'
import { hotel } from '../data/hotel'
import { BookingCTA } from '../components/ui/BookingCTA'

export function AboutPage() {
  return (
    <div className="pt-28 pb-16 bg-[#FAF7F2]">
      {/* Header */}
      <div className="site-container max-w-3xl mx-auto mb-12 text-center">
        <SectionHeading
          heading={`Welcome to ${hotel.name}`}
          subheading="Recently renovated ensuite seafront accommodation situated directly on Blackpool Promenade."
          align="center"
        />
      </div>

      {/* Main Content */}
      <div className="site-container mb-16 space-y-12">
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-6 md:p-10 border border-[#D8D0C5] shadow-sm rounded-lg">
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-2">Seafront Accommodation · Golden Mile</span>
            <h2 className="font-serif text-2xl text-[#2B2623] font-bold mb-3">{hotel.about.intro}</h2>
            <p className="text-base text-[#5C5650] leading-relaxed mb-4 font-normal">
              {hotel.about.body}
            </p>
            <p className="text-base text-[#5C5650] leading-relaxed font-normal">
              {hotel.about.highlights}
            </p>
          </div>
          <div className="md:col-span-5 aspect-[4/3] bg-[#F0EAE0] overflow-hidden rounded-md border border-[#D8D0C5]">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/677262446.jpg?k=7142633b85d56fbbeeab8cb26198e87c5e1242e76726e7e104be1619bcd06ea6&o="
              alt="The Beachfront Hotel Building Exterior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Guest Lounge & Hospitality */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-6 md:p-10 border border-[#D8D0C5] shadow-sm rounded-lg">
          <div className="md:col-span-5 aspect-[4/3] bg-[#F0EAE0] overflow-hidden rounded-md md:order-1 border border-[#D8D0C5]">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/683078026.jpg?k=5c9760a784e51b6c3c02559d898549703750175c9146970250db63a46f6a844b&o="
              alt="The Beachfront Hotel Guest Lounge Area"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-7 md:order-2">
            <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-2">Guest Spaces</span>
            <h2 className="font-serif text-2xl text-[#2B2623] font-bold mb-3">Welcoming Lounge & Comfort</h2>
            <p className="text-base text-[#5C5650] leading-relaxed mb-4 font-normal">
              {hotel.about.bar}
            </p>
            <p className="text-base text-[#5C5650] leading-relaxed font-normal">
              Whether you are here as a couple, family, solo traveller, or group of friends, we look forward to making your stay in Blackpool comfortable, easy, and memorable.
            </p>
          </div>
        </div>
      </div>

      <BookingCTA />
    </div>
  )
}
