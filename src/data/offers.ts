export interface Offer {
  id: string
  title: string
  description: string
  terms?: string
  image?: string
  imageAlt?: string
}

export const offers: Offer[] = [
  {
    id: 'seafront-break',
    title: 'Autumn & Illuminations Seafront Getaways',
    description: 'Enjoy panoramic Irish Sea views right from Blackpool Promenade. Book ahead for the famous Illuminations season and school holidays.',
    terms: 'Subject to room availability. Early booking recommended.',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683078095.jpg?k=aefd29f753a3501b67014e417670082fba84e92af13a3ecda4ba96002555e076&o=',
    imageAlt: 'The Beachfront Hotel Double Sea View Room',
  },
  {
    id: 'family-stays',
    title: 'Family Sea View Room Packages',
    description: 'Spacious family suites sleeping up to 4 guests with sweeping sea views, ensuite shower, and free high-speed Wi-Fi.',
    terms: 'Ideal for 2 adults and 2 children or groups.',
    image: '/images/rooms/family-room-sea-view.png',
    imageAlt: 'The Beachfront Hotel Family Sea View Suite',
  },
]

export const offersContactNote = 'For our latest special rates, seasonal discounts, and group packages, book your stay directly or contact our management team by phone or email.'
