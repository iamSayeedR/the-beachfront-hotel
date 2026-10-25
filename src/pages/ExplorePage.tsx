import { SectionHeading } from '../components/ui/SectionHeading'
import { destinations } from '../data/destinations'
import { DestinationCard } from '../components/destinations/DestinationCard'
import { BookingCTA } from '../components/ui/BookingCTA'
import { hotel } from '../data/hotel'

export function ExplorePage() {
  return (
    <div className="pt-28 pb-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <SectionHeading
          heading="Visit Blackpool"
          subheading={`${hotel.name} is ideally situated directly on the Promenade between Central Pier and South Pier, putting you moments from Blackpool's world-famous attractions.`}
          align="center"
        />
      </div>

      {/* Destinations List */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            reverse={index % 2 === 1}
          />
        ))}
      </div>

      <BookingCTA subtext={`Stay at ${hotel.name}, your ideal seafront base for exploring Blackpool.`} />
    </div>
  )
}
