import { Link } from 'react-router-dom'
import { bookingConfig } from '../../config/booking'
import { hotel } from '../../data/hotel'

interface BookingCTAProps {
  heading?: string
  subtext?: string
}

export function BookingCTA({
  heading = 'READY TO STAY ON BLACKPOOL PROMENADE?',
  subtext = `Book your seaside stay at ${hotel.name} for direct views, comfortable ensuite rooms, and prime location.`,
}: BookingCTAProps) {
  const isInternal = bookingConfig.url.startsWith('/')

  return (
    <section className="bg-[#7A2332] text-white py-16 md:py-20">
      <div className="site-container text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight max-w-3xl mx-auto uppercase tracking-wide">
          {heading}
        </h2>

        {subtext && (
          <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            {subtext}
          </p>
        )}

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {isInternal ? (
            <Link
              to={bookingConfig.url}
              className="inline-block bg-white !text-[#7A2332] px-10 py-4 rounded-md text-sm font-bold uppercase tracking-wider hover:bg-[#F4EFE6] transition-colors shadow-sm whitespace-nowrap"
              style={{ color: '#7A2332' }}
            >
              {bookingConfig.label.toUpperCase()}
            </Link>
          ) : (
            <a
              href={bookingConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white !text-[#7A2332] px-10 py-4 rounded-md text-sm font-bold uppercase tracking-wider hover:bg-[#F4EFE6] transition-colors shadow-sm whitespace-nowrap"
              style={{ color: '#7A2332' }}
            >
              {bookingConfig.label.toUpperCase()}
            </a>
          )}
          <a
            href={hotel.contact.phoneHref}
            className="inline-block bg-transparent text-white border-2 border-white/80 hover:bg-white/10 px-8 py-3.5 rounded-md text-sm font-bold uppercase tracking-wider transition-colors whitespace-nowrap"
          >
            Call {hotel.contact.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
