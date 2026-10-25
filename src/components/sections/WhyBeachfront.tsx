import { SectionHeading } from '../ui/SectionHeading'

export function WhyBeachfront() {
  return (
    <section className="py-20 md:py-28 bg-[#F0EAE0]">
      <div className="site-container text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <SectionHeading
            heading="Welcome to The Beachfront Hotel"
            align="center"
          />

          <p className="text-base sm:text-lg text-[#5C5650] leading-relaxed font-normal">
            Ideally located on Blackpool's famous Golden Mile promenade, The Beachfront Hotel offers stunning sea views and easy access to the town's most popular attractions. Situated between Blackpool Tower and Pleasure Beach, we provide the perfect base for exploring the promenade, Central Pier, Winter Gardens, Coral Island, shopping destinations, restaurants, and nightlife.
          </p>

          <p className="text-base sm:text-lg text-[#5C5650] leading-relaxed font-normal">
            Our hotel features 20 beautifully decorated, en-suite bedrooms, including double, twin, family, and single rooms. Every room is carefully maintained to provide a comfortable and relaxing stay, with fresh white linens, towels, and toiletries. High-speed Wi-Fi is available throughout the hotel, and hairdryers, irons, and ironing boards are available upon request.
          </p>

          <p className="text-base sm:text-lg text-[#5C5650] leading-relaxed font-normal">
            Whether you're visiting as a couple, with family, travelling solo, or enjoying a getaway with friends, we offer a warm welcome and friendly hospitality all year round. From summer holidays and the famous Blackpool Illuminations to bank holidays and Christmas and New Year breaks, we're here to help make your stay memorable.
          </p>

          <p className="text-base sm:text-lg text-[#5C5650] leading-relaxed font-normal">
            Limited parking is available through our neighbouring private parking area, subject to availability on arrival. Additional charges apply. We look forward to welcoming you to The Beachfront Hotel and helping you enjoy everything Blackpool has to offer.
          </p>

          <div className="pt-6 inline-block border-t border-[#D8D0C5]">
            <span className="font-serif text-2xl font-bold text-[#2B2623] block">The Beachfront Hospitality Team</span>
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#7A2332]">265 Promenade, Blackpool</span>
          </div>
        </div>
      </div>
    </section>
  )
}
