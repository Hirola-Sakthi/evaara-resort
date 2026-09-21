import {
  ConciergeBell,
  Flame,
  Trees,
  UtensilsCrossed,
  Waves,
  Wifi,
} from 'lucide-react'
import { motion } from 'framer-motion'

import diningImage from '../../../assets/images/about-section-img-2.webp'
import campfireImage from '../../../assets/images/main-banner-3.webp'
import roomServiceImage from '../../../assets/images/room-banner.webp'
import poolImage from '../../../assets/images/generated-coorg-resort-hero.png'
import natureImage from '../../../assets/images/generated-coorg-diary-trail.png'
import wifiImage from '../../../assets/images/generated-coorg-diary-river.png'

const amenities = [
  { icon: UtensilsCrossed, title: 'Restaurant', text: 'Regional flavours served with quiet refinement.', image: diningImage },
  { icon: Waves, title: 'Swimming Pool', text: 'A calm blue pause between forest and sky.', image: poolImage },
  { icon: Wifi, title: 'Wi-Fi', text: 'Seamless connectivity for slow work or easy sharing.', image: wifiImage },
  { icon: Flame, title: 'Campfire', text: 'Evenings shaped by warmth, stories, and starlight.', image: campfireImage },
  { icon: Trees, title: 'Nature Walks', text: 'Guided trails through coffee, spice, and green silence.', image: natureImage },
  { icon: ConciergeBell, title: 'Room Service', text: 'Considered hospitality, brought gently to your door.', image: roomServiceImage },
]

function ResortAmenities() {
  return (
    <section className="overflow-hidden bg-[#F3F0E8] px-6 py-8 text-[#102C26] md:px-10 md:py-10 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 border-y border-[#102C26]/10 py-8 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="evaara-eyebrow mb-5">Resort Amenities</p>
            <h2 className="evaara-title max-w-3xl text-4xl sm:text-5xl md:text-6xl">
              Every detail held with quiet care.
            </h2>
          </div>
          <p className="evaara-copy max-w-2xl self-end text-sm md:text-[15px]">
            Amenities at EVAARA are designed to support the way a luxury nature
            escape should feel: effortless, generous, and deeply connected to
            the landscape around you.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon

            return (
              <motion.article
                key={amenity.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.72,
                  delay: index * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative grid min-h-[160px] grid-cols-[118px_1fr] overflow-hidden rounded-[18px] border border-[#D9C6A5]/45 bg-[#FFFDF8]/78 p-3 shadow-[0_18px_55px_rgba(16,44,38,0.07)] transition duration-500 hover:-translate-y-1 hover:border-[#B99A62]/65 hover:bg-[#FFFDF8] sm:grid-cols-[128px_1fr]"
              >
                <div className="relative min-h-[136px] overflow-hidden rounded-[12px]">
                  <img
                    src={amenity.image}
                    alt={`${amenity.title} at EVAARA Resort`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A17]/30 via-transparent to-transparent" />
                </div>

                <div className="relative flex flex-col justify-center px-4 py-4">
                  <span className="mb-4 grid size-10 place-items-center rounded-full bg-[#D9C6A5]/30 text-[#B99A62] transition duration-300 group-hover:bg-[#B99A62] group-hover:text-[#071A17]">
                    <Icon size={20} strokeWidth={1.45} />
                  </span>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#102C26]">
                    {amenity.title}
                  </h3>
                  <p className="mt-2 max-w-[230px] text-xs leading-5 text-[#102C26]/56">
                    {amenity.text}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ResortAmenities
