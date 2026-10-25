import { useState, useEffect } from 'react'
import { SectionHeading } from '../ui/SectionHeading'

const galleryImages = [
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/677262446.jpg?k=7142633b85d56fbbeeab8cb26198e87c5e1242e76726e7e104be1619bcd06ea6&o=',
    alt: 'The Beachfront Hotel Building & Promenade Entrance',
    caption: 'Hotel Exterior on Blackpool Promenade',
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/683078095.jpg?k=aefd29f753a3501b67014e417670082fba84e92af13a3ecda4ba96002555e076&o=',
    alt: 'Double Room with Sea View Window',
    caption: 'Double Room with Direct Sea Views',
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/683078048.jpg?k=8c1cdce61f4269845b87075f8d0f83e82aafa86c68f821ad531bb7d0f3ce07c0&o=',
    alt: 'Standard Double Bedroom with Crisp Linens',
    caption: 'Comfortable Ensuite Double Room',
  },
  {
    src: '/images/rooms/family-room-sea-view.png',
    alt: 'Family Room with Two Double Beds and Sea View Window',
    caption: 'Family Room with Promenade Sea View',
  },
  {
    src: '/images/rooms/superior-family-room.png',
    alt: 'Superior Family Room with Sea View Window and Ensuite',
    caption: 'Superior Family Room (Sleeps 4)',
  },
  {
    src: '/images/rooms/single-room-bedroom.png',
    alt: 'Single Bedroom with Bed and Window',
    caption: 'Ensuite Single Bedroom',
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/683078119.jpg?k=82a5e1b7d4cbdbcce5f02b2c78873114331478498ff96c39f9bdf558b14a4f9b&o=',
    alt: 'Economy Twin Bedroom',
    caption: 'Ensuite Twin Bedroom',
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/683078026.jpg?k=5c9760a784e51b6c3c02559d898549703750175c9146970250db63a46f6a844b&o=',
    alt: 'Guest Lounge with Leather Sofas',
    caption: 'Relaxing Guest Lounge Area',
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/683078121.jpg?k=3c9e3610d828f1e2b60eb7e83c8cf9ba1d2f271a3672a6fc6e6d3949b0c9dda7&o=',
    alt: 'Guest Lounge & Seating Area',
    caption: 'Lounge & Refreshment Area',
  },
  {
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/683078039.jpg?k=5a2c108f53a03aa9416d18e9d12e50ef2a77a7fdac9fb4fd53bb7753c0d73281&o=',
    alt: 'Private Ensuite Bathroom with Walk-In Shower',
    caption: 'Spotless Private Shower Room',
  },
]

export function HotelGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      nextSlide()
    }, 4500)
    return () => clearInterval(timer)
  }, [currentIndex, isAutoPlaying])

  return (
    <section className="py-20 md:py-28 bg-[#F0EAE0]">
      <div className="site-container">
        <SectionHeading
          heading="Property Gallery"
          subheading="Browse through our recently renovated ensuite rooms, seaside views, and guest spaces."
          align="center"
          className="mb-12"
        />

        {/* Clean Interactive Hotel Image Carousel */}
        <div
          className="relative max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-md border border-[#D8D0C5]/50 group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Image Viewport */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#EBE5DC]">
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out"
            />

            {/* Caption badge bottom left */}
            <div className="absolute bottom-4 left-4 z-20 bg-[#2B2623]/80 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-md font-semibold">
              {galleryImages[currentIndex].caption}
            </div>

            {/* Previous Arrow Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#2B2623] hover:text-[#7A2332] p-3 rounded-full shadow-md transition-all duration-200 focus:outline-none"
              aria-label="Previous photo"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Next Arrow Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#2B2623] hover:text-[#7A2332] p-3 rounded-full shadow-md transition-all duration-200 focus:outline-none"
              aria-label="Next photo"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="bg-[#FAF7F2] px-6 py-4 border-t border-[#D8D0C5]/40 flex items-center justify-between">
            <span className="text-xs text-[#5C5650] font-semibold">
              Photo {currentIndex + 1} of {galleryImages.length}
            </span>
            <div className="flex items-center gap-2">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 bg-[#7A2332]' : 'w-2.5 bg-[#D8D0C5] hover:bg-[#7A2332]/50'
                  }`}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
