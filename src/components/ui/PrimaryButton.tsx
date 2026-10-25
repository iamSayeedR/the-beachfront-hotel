import { Link } from 'react-router-dom'
import { bookingConfig } from '../../config/booking'

interface PrimaryButtonProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'burgundy' | 'white'
  children?: React.ReactNode
}

export function PrimaryButton({
  className = '',
  size = 'md',
  variant = 'burgundy',
  children,
}: PrimaryButtonProps) {
  const sizes = {
    sm: 'px-5 py-2.5 text-[12px]',
    md: 'px-7 py-3 text-[13px]',
    lg: 'px-9 py-3.5 text-[14px]',
  }

  const isBurgundy = variant === 'burgundy'
  const isInternal = bookingConfig.url.startsWith('/')

  const hasDisplayOverride = className.includes('hidden') || className.includes('block') || className.includes('flex')
  const defaultDisplay = hasDisplayOverride ? '' : 'inline-block'

  const baseClasses = `${defaultDisplay} whitespace-nowrap shrink-0 uppercase tracking-[0.1em] font-bold rounded-md transition-all duration-200 text-center shadow-xs ${
    isBurgundy
      ? 'bg-[#7A2332] !text-white hover:bg-[#5C1A26]'
      : 'bg-white !text-[#7A2332] hover:bg-[#F4EFE6]'
  } ${sizes[size]} ${className}`

  if (isInternal) {
    return (
      <Link
        to={bookingConfig.url}
        className={baseClasses}
        style={{ color: isBurgundy ? '#ffffff' : '#7A2332' }}
      >
        {children || bookingConfig.label || 'Book Your Stay'}
      </Link>
    )
  }

  return (
    <a
      href={bookingConfig.url}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClasses}
      style={{ color: isBurgundy ? '#ffffff' : '#7A2332' }}
    >
      {children || bookingConfig.label || 'Book Your Stay'}
    </a>
  )
}
