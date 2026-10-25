import { Link } from 'react-router-dom'
import { PrimaryButton } from '../ui/PrimaryButton'
import { hotel } from '../../data/hotel'

export function Hero() {
  return (
    <section className="relative min-h-[560px] sm:min-h-[620px] md:h-[680px] py-14 sm:py-18 md:py-0 flex items-center justify-center text-white overflow-hidden bg-[#2B2623]">
      {/* Full-Width Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/677262446.jpg?k=7142633b85d56fbbeeab8cb26198e87c5e1242e76726e7e104be1619bcd06ea6&o="
          alt="The Beachfront Hotel Blackpool Promenade Entrance"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Vignette Overlay for High Contrast */}
        <div className="absolute inset-0 bg-[#2B2623]/60 bg-gradient-to-t from-[#2B2623]/95 via-[#2B2623]/60 to-[#2B2623]/40" />
      </div>

      {/* Hero Content inside Centered Container */}
      <div className="relative z-10 site-container text-center flex flex-col items-center">
        <div className="flex items-center gap-1.5 text-amber-400 text-xs sm:text-sm mb-3">
          <span>★</span><span>★</span><span>★</span>
          <span className="text-white/80 font-bold uppercase tracking-widest text-[11px] sm:text-xs ml-2">Seafront Accommodation · Golden Mile</span>
        </div>

        <h1
          className="font-serif font-bold text-white !text-white text-[2.5rem] sm:text-[3.75rem] md:text-[5rem] leading-[1.1] mb-4 sm:mb-6 drop-shadow-lg max-w-4xl"
          style={{ color: '#ffffff' }}
        >
          {hotel.name}
        </h1>

        <p
          className="font-serif italic text-amber-100 !text-amber-100 text-base sm:text-xl md:text-[1.75rem] max-w-2xl mb-8 sm:mb-10 leading-snug drop-shadow-md font-normal"
          style={{ color: '#fef3c7' }}
        >
          {hotel.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-5 w-full sm:w-auto max-w-xs sm:max-w-none">
          <Link
            to="/rooms"
            className="btn-hero-offers w-full sm:w-auto sm:min-w-[210px] text-xs sm:text-sm px-7 sm:px-9 py-3.5 sm:py-4 rounded-md font-bold uppercase tracking-wider shadow-xs text-center inline-block"
          >
            Explore Rooms
          </Link>
          <PrimaryButton size="lg" className="w-full sm:w-auto sm:min-w-[210px] text-xs sm:text-sm px-7 sm:px-10 py-3.5 sm:py-4 shadow-md font-bold" />
        </div>
      </div>
    </section>
  )
}
