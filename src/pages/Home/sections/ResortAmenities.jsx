import {
  Car,
  ConciergeBell,
  Flame,
  Trees,
  UtensilsCrossed,
  Waves,
  Wifi,
} from 'lucide-react'
import { motion } from 'framer-motion'

const amenities = [
  { icon: UtensilsCrossed, title: 'Restaurant', text: 'Regional flavours served with quiet refinement.' },
  { icon: Waves, title: 'Swimming Pool', text: 'A calm blue pause between forest and sky.' },
  { icon: Wifi, title: 'Wi-Fi', text: 'Seamless connectivity for slow work or easy sharing.' },
  { icon: Car, title: 'Parking', text: 'Convenient private parking within the resort.' },
  { icon: Flame, title: 'Campfire', text: 'Evenings shaped by warmth, stories, and starlight.' },
  { icon: Trees, title: 'Nature Walks', text: 'Guided trails through coffee, spice, and green silence.' },
  { icon: ConciergeBell, title: 'Room Service', text: 'Considered hospitality, brought gently to your door.' },
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
            <h2 className="evaara-title max-w-md text-4xl sm:text-5xl">
              Every detail held with quiet care.
            </h2>
          </div>
          <p className="evaara-copy max-w-2xl self-end text-sm md:text-[15px]">
            Amenities at EVAARA are designed to support the way a luxury nature
            escape should feel: effortless, generous, and deeply connected to
            the landscape around you.
          </p>
        </motion.div>

        <div className="mt-8 grid border-t border-[#102C26]/10 sm:grid-cols-2 lg:grid-cols-4">
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
                className="group min-h-[210px] border-b border-[#102C26]/10 px-1 py-7 sm:px-6 lg:border-r lg:last:border-r-0"
              >
                <div className="mb-6 flex items-center justify-between">
                  <Icon
                    size={25}
                    strokeWidth={1.45}
                    className="text-[#B99A62] transition-transform duration-500 group-hover:-translate-y-1"
                  />
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#102C26]/22">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#102C26]">
                  {amenity.title}
                </h3>
                <p className="mt-3 max-w-[230px] text-sm leading-6 text-[#102C26]/52">
                  {amenity.text}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ResortAmenities
