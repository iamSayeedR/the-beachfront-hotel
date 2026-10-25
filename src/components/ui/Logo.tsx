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
      className={`inline-flex flex-col items-center text-center group py-1 ${className}`}
    >
      {/* 3 Stars icon matching text color */}
      <div
        className={`flex items-center justify-center gap-2 mb-1.5 transition-colors ${
          light ? 'group-hover:text-amber-200' : 'group-hover:text-[#7A2332]'
        } ${colorClass}`}
        aria-label="3 Star Hotel"
      >
        <span className="text-sm sm:text-base leading-none">★</span>
        <span className="text-sm sm:text-base leading-none">★</span>
        <span className="text-sm sm:text-base leading-none">★</span>
      </div>

      {/* Main Title: THE BEACHFRONT with HOTEL centered below */}
      <div
        className={`font-serif font-bold uppercase leading-tight text-center transition-colors ${
          light ? 'group-hover:text-amber-200' : 'group-hover:text-[#7A2332]'
        } ${colorClass}`}
      >
        <span className="block text-[16px] sm:text-[19px] md:text-[21px] tracking-[0.16em] sm:tracking-[0.2em]">
          The Beachfront
        </span>
        <span className="block text-[13px] sm:text-[15px] md:text-[17px] tracking-[0.3em] sm:tracking-[0.36em] mt-0.5">
          Hotel
        </span>
      </div>
    </Link>
  )
}
