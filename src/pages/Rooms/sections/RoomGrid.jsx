import { ArrowUpRight, Bath, BedDouble, Coffee, DoorOpen, Trees, Users } from 'lucide-react'
import { motion } from 'framer-motion'

import rooms from '../../../data/rooms.json'
import { getRoomImage } from '../../../data/roomImages'

const inclusions = [
  { icon: BedDouble, label: 'Premium bedding' },
  { icon: DoorOpen, label: 'Private sit-outs' },
  { icon: Bath, label: 'Refined bath' },
  { icon: Coffee, label: 'Estate coffee' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function RoomGrid() {
  return (
    <section className="evaara-section px-6 py-20 md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div data-scroll-reveal className="grid gap-8 border-b border-[#102C26]/10 pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="evaara-eyebrow">Rooms & Villas</p>
            <h2 className="evaara-title mt-5 max-w-3xl text-4xl sm:text-5xl md:text-6xl">
              Choose the stillness that fits your stay.
            </h2>
          </div>
          <p className="evaara-copy max-w-2xl text-sm md:text-[15px]">
            Every room at EVAARA is composed around views, privacy, and quiet
            luxury. Browse refined rooms, villas, and suites designed for slow
            Coorg mornings and unhurried evenings.
          </p>
        </div>

        <div data-scroll-reveal className="grid gap-3 border-b border-[#102C26]/10 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {inclusions.map((item) => {
            const Icon = item.icon

            return (
              <div key={item.label} className="flex items-center gap-3 rounded-full border border-[#B99A62]/25 bg-white/40 px-4 py-3 text-sm text-[#102C26]/70">
                <Icon size={18} strokeWidth={1.5} className="text-[#B99A62]" />
                {item.label}
              </div>
            )
          })}
        </div>

        <div className="mt-10 grid gap-6">
          {rooms.map((room, index) => (
            <motion.article
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              variants={cardVariants}
              key={room.slug}
              className="group overflow-hidden rounded-[28px] border border-[#D9C6A5]/70 bg-[#FFFDF8] shadow-[0_24px_70px_rgba(16,44,38,0.08)] lg:grid lg:grid-cols-[0.98fr_1.02fr]"
            >
              <a href={`/rooms/${room.slug}`} className="relative block min-h-[330px] overflow-hidden lg:min-h-[460px]">
                <img
                  src={getRoomImage(room.image)}
                  alt={room.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A17]/62 via-[#071A17]/8 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#F6F1E7]/86">
                  <span>{room.category}</span>
                  <span className="h-1 w-1 rounded-full bg-[#B99A62]" />
                  <span>{room.price}</span>
                </div>
              </a>

              <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
                <div>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {room.stats.map((stat) => (
                      <span key={`${room.slug}-${stat.label}`} className="rounded-full border border-[#B99A62]/25 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#536B50]">
                        {stat.value} {stat.label}
                      </span>
                    ))}
                  </div>

                  <h3 className="evaara-title max-w-xl text-4xl sm:text-5xl">
                    {room.title}
                  </h3>

                  <p className="evaara-copy mt-5 max-w-xl text-sm">
                    {room.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {room.highlights.map((highlight) => (
                      <div key={highlight} className="border-t border-[#102C26]/10 pt-3">
                        <Trees size={18} strokeWidth={1.5} className="mb-3 text-[#B99A62]" />
                        <p className="text-xs leading-6 text-[#102C26]/66">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-[#102C26]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={`/rooms/${room.slug}`}
                    className="evaara-link group/link"
                  >
                    View Details
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </a>
                  <a href="/contact" className="evaara-button group">
                    Enquire
                    <Users size={15} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RoomGrid
