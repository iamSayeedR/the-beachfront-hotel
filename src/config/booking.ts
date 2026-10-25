// Booking configuration - directs guests to direct booking engine
export const bookingConfig = {
  type: 'external' as const,
  url: 'https://direct-book.com/properties/thebeachfronthotel',
  label: 'Book your stay',
}
