export interface Room {
  id: string
  slug: string
  name: string
  shortName: string
  roomNumber?: number
  type: 'single' | 'double' | 'twin' | 'family'
  typeLabel: string
  adults: number
  children: number
  floor: string
  bed: string
  roomSize?: string
  description: string
  longDescription: string
  image: string
  galleryImages: string[]
  amenities: string[]
  features: string[]
  detailUrl: string
  isFeatured?: boolean
}

export const defaultAmenities = [
  'Private ensuite bathroom with shower',
  'Complimentary toiletries',
  'Flat-screen TV',
  'Free high-speed Wi-Fi',
  'Electric kettle & tea/coffee maker',
  'Heating throughout',
  'Carpeted floors',
  'Fresh white towels & crisp linens',
  'Non-smoking room',
  'Iron & hairdryer (upon request)',
]

export const rooms: Room[] = [
  {
    id: 'double-sea-view-1',
    slug: 'double-room-with-sea-view',
    name: 'Double Room with Sea View',
    shortName: 'Double Sea View',
    type: 'double',
    typeLabel: 'Double Room with Sea View',
    adults: 2,
    children: 0,
    floor: 'Promenade Facing',
    bed: '1 Full Double Bed',
    roomSize: '110 sq ft',
    description: 'Featuring direct sea views of the Irish Sea, this recently updated double room offers a private ensuite bathroom with shower, flat-screen TV, and electric kettle.',
    longDescription: 'Offering free toiletries, this double room includes a private bathroom with a shower. The double room features newly carpeted floors, a seating area with a flat-screen TV, an electric kettle, heating, as well as panoramic views across the Blackpool Promenade and Irish Sea. Perfect for couples seeking a seaside retreat.',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683078095.jpg?k=aefd29f753a3501b67014e417670082fba84e92af13a3ecda4ba96002555e076&o=',
    galleryImages: [
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683078095.jpg?k=aefd29f753a3501b67014e417670082fba84e92af13a3ecda4ba96002555e076&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683077853.jpg?k=21f85571e2aed4558cc4853ff3a3e2baa3ea065b8b99728e4034404f538ca99a&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683078074.jpg?k=fc34dc23b34b66b6d5c22a85e72e3f075dbb33a7b863b90cfe95265112e40e36&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683078048.jpg?k=8c1cdce61f4269845b87075f8d0f83e82aafa86c68f821ad531bb7d0f3ce07c0&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683078128.jpg?k=3cbf7fe2ceb9279868436f7aefc0feee106c9fe6a72a04e0ac2dc940b3f05e53&o=',
    ],
    amenities: defaultAmenities,
    features: ['Direct Irish Sea View', 'Private Ensuite with Shower', 'Electric Kettle & Tea/Coffee', 'Flat-screen TV'],
    detailUrl: 'https://direct-book.com/properties/thebeachfronthotel',
    isFeatured: true,
  },
  {
    id: 'standard-double-2',
    slug: 'standard-double-room',
    name: 'Standard Double Room',
    shortName: 'Standard Double',
    type: 'double',
    typeLabel: 'Standard Double Room',
    adults: 2,
    children: 0,
    floor: 'Main Floor',
    bed: '1 Full Double Bed',
    roomSize: '95 sq ft',
    description: 'A cozy double room equipped with a private ensuite shower, comfortable double bed, flat-screen TV, heating, and electric kettle.',
    longDescription: 'Features free toiletries and a private bathroom with a walk-in shower. The double room offers brand new carpeting, central heating, a flat-screen TV, tea and coffee making facilities, and fresh white linens for a restful night.',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683078048.jpg?k=8c1cdce61f4269845b87075f8d0f83e82aafa86c68f821ad531bb7d0f3ce07c0&o=',
    galleryImages: [
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683078048.jpg?k=8c1cdce61f4269845b87075f8d0f83e82aafa86c68f821ad531bb7d0f3ce07c0&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683077872.jpg?k=3ce58bb67ff280036cda94b154c3b9eb96dfde7b5e9097eb2e118f08c5e26dfd&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683077868.jpg?k=1f4f804b04f56cdf5b1563d9ac9f3139cdf04f49efa944e34978586799c01f7e&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683077859.jpg?k=87426612c3faf448d70d9f124188fdc7b36d0ce98a1a54a09457401ccb3f5fa7&o=',
    ],
    amenities: defaultAmenities,
    features: ['Comfortable Double Bed', 'Private Ensuite Shower', 'Brand New Carpet', 'Free High-Speed Wi-Fi'],
    detailUrl: 'https://direct-book.com/properties/thebeachfronthotel',
    isFeatured: true,
  },
  {
    id: 'family-sea-view-6',
    slug: 'family-room-with-sea-view',
    name: 'Family Room with Sea View',
    shortName: 'Family Sea View',
    type: 'family',
    typeLabel: 'Family Room with Sea View',
    adults: 2,
    children: 2,
    floor: 'Promenade Facing',
    bed: '2 Full Double Beds',
    roomSize: '260 sq ft',
    description: 'Spacious family suite boasting direct views of the Irish Sea, featuring two double beds, ensuite shower, TV, and tea/coffee facilities.',
    longDescription: 'Our largest accommodation, this spacious family suite provides panoramic views directly over the Blackpool promenade and coastline. Furnished with two full double beds, it comfortably sleeps up to four guests. Includes private ensuite bathroom with shower, flat-screen TV, electric kettle, and heating.',
    image: '/images/rooms/family-room-sea-view.png',
    galleryImages: [
      '/images/rooms/family-room-sea-view.png',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/677260084.jpg?k=bdd12fe291fc0660610599e5e3e8535f772e331557b3b4547969a57ba079bae6&o=&hp=1',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/677259817.jpg?k=b0a9dc577bb86abde933d6f81d1c7d04fc408afd9c108f3047fcae092cb6baee&o=&hp=1',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683077871.jpg?k=10dc288c5340c08b71da70ff9552f2cfdd0568e05359e2249c603728224f545f&o=&hp=1',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683078113.jpg?k=d5cfd8705cc753166f3f5574b48c9da07d9e2c298d82b271b0862ca19cfb2dd9&o=',
    ],
    amenities: defaultAmenities,
    features: ['Stunning Sea Views', 'Two Double Beds', 'Sleeps up to 4 Guests', 'Generous Spacious Layout'],
    detailUrl: 'https://direct-book.com/properties/thebeachfronthotel',
    isFeatured: true,
  },
  {
    id: 'superior-family-7',
    slug: 'superior-family-room',
    name: 'Superior Family Room',
    shortName: 'Superior Family',
    type: 'family',
    typeLabel: 'Superior Family Room',
    adults: 2,
    children: 2,
    floor: 'Upper Floor',
    bed: '2 Full Double Beds',
    roomSize: '180 sq ft',
    description: 'A spacious room featuring two full double beds for up to 4 guests, complete with private ensuite shower, flat-screen TV, and electric kettle.',
    longDescription: 'Providing ample space for families or small groups of friends, the Superior Family Room features two comfortable double beds, new carpeting, private ensuite bathroom with shower and complimentary toiletries, heating, and tea/coffee making facilities.',
    image: '/images/rooms/superior-family-room.png',
    galleryImages: [
      '/images/rooms/superior-family-room.png',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/677262439.jpg?k=221e9ce79f6aacaa7c6b479eb7f9f98e21b6860220d07fe4e744ff8d5bb926ae&o=&hp=1',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683078062.jpg?k=0a5e6a70a6579918087c9e7db6d8286cee6ac2c9608e6849c5fd412d2a62ae79&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/677262443.jpg?k=3936929a4a059acf7661c58da936bf64ec6ebe65ffe27fdb4b4e0317b2a5a669&o=',
    ],
    amenities: defaultAmenities,
    features: ['Two Double Beds', 'Private Ensuite Shower', 'Sleeps 4 Guests', 'Electric Kettle & Tea/Coffee'],
    detailUrl: 'https://direct-book.com/properties/thebeachfronthotel',
    isFeatured: true,
  },
  {
    id: 'economy-twin-4',
    slug: 'economy-twin-room',
    name: 'Economy Twin Room',
    shortName: 'Economy Twin',
    type: 'twin',
    typeLabel: 'Economy Twin Room',
    adults: 2,
    children: 0,
    floor: 'Main Floor',
    bed: '2 Twin Single Beds',
    roomSize: '90 sq ft',
    description: 'Equipped with two twin single beds, private ensuite bathroom with shower, flat-screen TV, free Wi-Fi, and tea/coffee making facilities.',
    longDescription: 'Ideal for friends or colleagues visiting Blackpool together, the Economy Twin Room features two comfortable twin beds, newly laid carpet, private ensuite with shower, flat-screen TV, electric kettle, and heating.',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683078119.jpg?k=82a5e1b7d4cbdbcce5f02b2c78873114331478498ff96c39f9bdf558b14a4f9b&o=',
    galleryImages: [
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683078119.jpg?k=82a5e1b7d4cbdbcce5f02b2c78873114331478498ff96c39f9bdf558b14a4f9b&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683077840.jpg?k=42f1ec355fe39dfca4ba5052787f04d72c038cfa186959bf500fcae95dff786e&o=',
    ],
    amenities: defaultAmenities,
    features: ['Two Twin Beds', 'Private Ensuite Shower', 'Heating', 'Flat-screen TV'],
    detailUrl: 'https://direct-book.com/properties/thebeachfronthotel',
  },
  {
    id: 'double-room-3',
    slug: 'double-room',
    name: 'Double Room',
    shortName: 'Cozy Double',
    type: 'double',
    typeLabel: 'Double Room',
    adults: 2,
    children: 0,
    floor: 'Upper Floor',
    bed: '1 Full Double Bed',
    roomSize: '80 sq ft',
    description: 'A comfortable, compact double room with full ensuite shower, flat-screen TV, and tea/coffee tray.',
    longDescription: 'Providing all the essentials for an enjoyable seaside stay, this room includes a comfortable double bed, private bathroom with shower, flat-screen TV, electric kettle, and central heating.',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683077908.jpg?k=8c4148e89668d7765f819be81d93c9780bb1908246c1b6c61b4c5a4828bb9a3b&o=',
    galleryImages: [
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683077908.jpg?k=8c4148e89668d7765f819be81d93c9780bb1908246c1b6c61b4c5a4828bb9a3b&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683078039.jpg?k=5a2c108f53a03aa9416d18e9d12e50ef2a77a7fdac9fb4fd53bb7753c0d73281&o=',
    ],
    amenities: defaultAmenities,
    features: ['Full Double Bed', 'Private Ensuite', 'Free High-Speed Wi-Fi', 'Tea/Coffee Facilities'],
    detailUrl: 'https://direct-book.com/properties/thebeachfronthotel',
  },
  {
    id: 'single-room-5',
    slug: 'single-room',
    name: 'Single Room',
    shortName: 'Single Room',
    type: 'single',
    typeLabel: 'Single Room',
    adults: 1,
    children: 0,
    floor: 'Main Floor',
    bed: '1 Twin Single Bed',
    roomSize: '75 sq ft',
    description: 'Dedicated single room with private ensuite shower, comfortable single bed with fresh linens, window, flat-screen TV, and complimentary Wi-Fi.',
    longDescription: 'Perfect for solo travellers, backpackers, or business visitors to Blackpool. Features a comfortable single bed with crisp white linens and accent cushion, private ensuite bathroom with shower and free toiletries, flat-screen TV, tea and coffee making facilities, and central heating.',
    image: '/images/rooms/single-room-bedroom.png',
    galleryImages: [
      '/images/rooms/single-room-bedroom.png',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683077872.jpg?k=3ce58bb67ff280036cda94b154c3b9eb96dfde7b5e9097eb2e118f08c5e26dfd&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683077840.jpg?k=42f1ec355fe39dfca4ba5052787f04d72c038cfa186959bf500fcae95dff786e&o=',
    ],
    amenities: defaultAmenities,
    features: ['Single Bed with Crisp Linens', 'Window & Natural Light', 'Private Ensuite Shower', 'Flat-screen TV'],
    detailUrl: 'https://direct-book.com/properties/thebeachfronthotel',
  },
  {
    id: 'budget-single-8',
    slug: 'budget-single-room',
    name: 'Budget Single Room',
    shortName: 'Budget Single',
    type: 'single',
    typeLabel: 'Budget Single Room',
    adults: 1,
    children: 0,
    floor: 'Main Floor',
    bed: '1 Twin Single Bed',
    roomSize: '65 sq ft',
    description: 'Affordable single ensuite accommodation in central Blackpool, featuring single bed, private shower room, flat-screen TV, and tea/coffee facilities.',
    longDescription: 'An economical option for solo travellers wanting to stay right on the promenade. Offers a comfortable single bed with clean bedding, private shower room, flat-screen TV, free Wi-Fi, and electric kettle.',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683077872.jpg?k=3ce58bb67ff280036cda94b154c3b9eb96dfde7b5e9097eb2e118f08c5e26dfd&o=',
    galleryImages: [
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683077872.jpg?k=3ce58bb67ff280036cda94b154c3b9eb96dfde7b5e9097eb2e118f08c5e26dfd&o=',
      '/images/rooms/single-room-bedroom.png',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/683078039.jpg?k=5a2c108f53a03aa9416d18e9d12e50ef2a77a7fdac9fb4fd53bb7753c0d73281&o=',
    ],
    amenities: defaultAmenities,
    features: ['Great Value Rate', 'Comfortable Bedding', 'Private Ensuite Shower', 'Central Promenade Location'],
    detailUrl: 'https://direct-book.com/properties/thebeachfronthotel',
  },
]

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find(r => r.slug === slug || r.id === slug)
}
