import { useState } from 'react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { RoomCard } from '../components/rooms/RoomCard'
import { rooms } from '../data/rooms'
import { hotel } from '../data/hotel'
import { BookingCTA } from '../components/ui/BookingCTA'

export function RoomsPage() {
  const [filter, setFilter] = useState<'all' | 'double' | 'single' | 'twin' | 'family'>('all')

  const filteredRooms = filter === 'all' ? rooms : rooms.filter(r => r.type === filter)

  const counts = {
    all: rooms.length,
    double: rooms.filter(r => r.type === 'double').length,
    single: rooms.filter(r => r.type === 'single').length,
    twin: rooms.filter(r => r.type === 'twin').length,
    family: rooms.filter(r => r.type === 'family').length,
  }

  return (
    <div className="pt-28 pb-16 bg-[#FAF7F2]">
      {/* Header Banner */}
      <div className="site-container mb-12 text-center">
        <SectionHeading
          heading={`Ensuite Rooms at ${hotel.name}`}
          subheading="Every room features private ensuite bathroom facilities with shower, flat-screen TV, free high-speed Wi-Fi, electric kettle & tea/coffee tray, and heating."
          align="center"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
          {[
            { key: 'all', label: `All Rooms (${counts.all})` },
            { key: 'double', label: `Double Rooms (${counts.double})` },
            { key: 'single', label: `Single Rooms (${counts.single})` },
            { key: 'twin', label: `Twin Rooms (${counts.twin})` },
            { key: 'family', label: `Family Rooms (${counts.family})` },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                filter === tab.key
                  ? 'bg-[#7A2332] text-white shadow-xs'
                  : 'bg-white text-[#2B2623] border border-[#D8D0C5] hover:bg-[#F0EAE0]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="site-container mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>

      <BookingCTA subtext={`Enquire or book your stay for ${hotel.name} room availability.`} />
    </div>
  )
}
