import { Link } from 'react-router-dom'
import { hotel } from '../../data/hotel'
import { Logo } from '../ui/Logo'

export function Footer() {
  return (
    <footer className="bg-[#2B2623] text-white border-t border-white/10">
      <div className="site-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Identity */}
          <div className="md:col-span-4 space-y-4">
            <Logo light />
            <p className="text-sm text-white/70 leading-relaxed max-w-sm font-normal">
              {hotel.tagline}. 20 beautifully decorated all-ensuite bedrooms right on the seafront.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="md:col-span-3">
            <h3 className="text-xs tracking-[0.2em] uppercase text-amber-300 font-bold mb-4">
              Explore
            </h3>
            <nav className="flex flex-col gap-2 text-sm" aria-label="Footer navigation">
              {[
                { to: '/rooms', label: 'Rooms & Suites' },
                { to: '/dining', label: 'Dining & Lounge' },
                { to: '/offers', label: 'Special Offers' },
                { to: '/explore-blackpool', label: 'Visit Blackpool' },
                { to: '/careers', label: 'Careers' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white/70 hover:text-white transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-3 space-y-2">
            <h3 className="text-xs tracking-[0.2em] uppercase text-amber-300 font-bold mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-1.5 text-sm text-white/70 font-normal">
              <p>{hotel.address.street}</p>
              <p>{hotel.address.city}, {hotel.address.postcode}</p>
              <p className="pt-1">
                <a href={hotel.contact.phoneHref} className="text-white hover:text-amber-300 font-semibold transition-colors">
                  {hotel.contact.phone}
                </a>
              </p>
              <p className="break-all whitespace-normal">
                <a href={hotel.contact.emailHref} className="text-white hover:text-amber-300 font-semibold transition-colors">
                  {hotel.contact.email}
                </a>
              </p>
            </address>
          </div>

          {/* Column 4: Links & Social */}
          <div className="md:col-span-2 space-y-2">
            <h3 className="text-xs tracking-[0.2em] uppercase text-amber-300 font-bold mb-4">
              Follow Us
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={hotel.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                Facebook ↗
              </a>
              <a
                href={hotel.social.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                Tripadvisor ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 py-5 bg-[#1E1A18]">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {hotel.name} Blackpool. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>265 Promenade, Blackpool FY1 6AH</span>
            <span>·</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
