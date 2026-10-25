import { Link } from 'react-router-dom'

interface LogoProps {
  light?: boolean
  className?: string
  onClick?: () => void
}

export function Logo({ light = false, className = '', onClick }: LogoProps) {
  const colorClass = light ? 'text-white' : 'text-[#2B2623]'

  return (
    <Link
      to="/"
      onClick={onClick}
      className={`inline-flex flex-col items-center text-center group py-1 shrink-0 ${className}`}
    >
      {/* 3 Stars icon matching text color */}
      <div
        className={`flex items-center justify-center gap-1.5 sm:gap-2 mb-1 transition-colors ${
          light ? 'group-hover:text-amber-200' : 'group-hover:text-[#7A2332]'
        } ${colorClass}`}
        aria-label="3 Star Hotel"
      >
        <span className="text-xs sm:text-sm leading-none">★</span>
        <span className="text-xs sm:text-sm leading-none">★</span>
        <span className="text-xs sm:text-sm leading-none">★</span>
      </div>

      {/* Main Title: THE BEACHFRONT with HOTEL centered below */}
      <div
        className={`font-serif font-bold uppercase leading-tight text-center transition-colors ${
          light ? 'group-hover:text-amber-200' : 'group-hover:text-[#7A2332]'
        } ${colorClass}`}
      >
        <span className="block text-[14px] sm:text-[18px] md:text-[20px] tracking-[0.14em] sm:tracking-[0.18em] whitespace-nowrap">
          The Beachfront
        </span>
        <span className="block text-[11px] sm:text-[14px] md:text-[16px] tracking-[0.28em] sm:tracking-[0.32em] mt-0.5 whitespace-nowrap">
          Hotel
        </span>
      </div>
    </Link>
  )
}
