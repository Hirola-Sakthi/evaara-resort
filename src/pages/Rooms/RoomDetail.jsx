import { ArrowLeft, ArrowUpRight, Check, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

import PageCta from '../../components/PageCta'
import PageHero from '../../components/PageHero'
import rooms from '../../data/rooms.json'
import { getRoomImage } from '../../data/roomImages'

function RoomDetail({ slug }) {
  const room = rooms.find((item) => item.slug === slug) || rooms[0]
  const relatedRooms = rooms.filter((item) => item.slug !== room.slug).slice(0, 2)
  const galleryImages = room.gallery.map((imageKey) => getRoomImage(imageKey))

  return (
    <>
      <PageHero
        title={room.title}
        subtitle={room.subtitle}
        image={getRoomImage(room.image)}
      />

      <section className="evaara-section px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <a href="/rooms" className="evaara-link group mb-10">
            <ArrowLeft size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Rooms
          </a>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="evaara-eyebrow">{room.category}</p>
              <h2 className="evaara-title mt-5 max-w-3xl text-4xl sm:text-5xl md:text-6xl">
                A refined Coorg stay with room to breathe.
              </h2>
              <p className="evaara-copy mt-6 max-w-3xl text-sm md:text-[15px]">
                {room.description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {room.stats.map((stat) => (
                  <div key={stat.label} className="rounded-[20px] border border-[#D9C6A5]/70 bg-[#FFFDF8] p-5 shadow-[0_18px_44px_rgba(16,44,38,0.06)]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#536B50]">
                      {stat.label}
                    </p>
                    <p className="mt-3 font-serif text-3xl leading-none text-[#102C26]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[28px] border border-[#D9C6A5]/70 bg-[#FFFDF8] p-6 shadow-[0_24px_70px_rgba(16,44,38,0.08)] md:p-8"
            >
              <div className="flex items-start justify-between gap-5 border-b border-[#102C26]/10 pb-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#536B50]">
                    Tariff
                  </p>
                  <p className="mt-3 font-serif text-3xl text-[#102C26]">
                    {room.price}
                  </p>
                </div>
                <ShieldCheck size={28} strokeWidth={1.3} className="text-[#B99A62]" />
              </div>

              <div className="mt-6 grid gap-4">
                {room.details.map((detail) => (
                  <div key={detail.label} className="flex items-center justify-between gap-5 border-b border-[#102C26]/8 pb-4 text-sm">
                    <span className="text-[#102C26]/50">{detail.label}</span>
                    <span className="text-right font-semibold text-[#102C26]">{detail.value}</span>
                  </div>
                ))}
              </div>

              <a href="/contact" className="evaara-button group mt-7 w-full">
                Enquire This Room
                <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative min-h-[360px] overflow-hidden rounded-[28px] md:min-h-[520px]"
            >
              <img src={galleryImages[0]} alt={room.title} className="absolute inset-0 h-full w-full object-cover" />
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {galleryImages.slice(1).map((image, index) => (
                <motion.div
                  key={`${room.slug}-gallery-${index}`}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.8, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
                  className="relative min-h-[250px] overflow-hidden rounded-[28px]"
                >
                  <img src={image} alt={`${room.title} view ${index + 2}`} className="absolute inset-0 h-full w-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="evaara-section border-t border-[#102C26]/10 px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div data-scroll-reveal>
            <p className="evaara-eyebrow">Inside the Stay</p>
            <h2 className="evaara-title mt-5 text-4xl sm:text-5xl">
              Details that make the stay feel considered.
            </h2>
          </div>

          <div className="grid gap-8">
            {room.content.map((item) => (
              <article key={item.heading} data-scroll-card className="border-b border-[#102C26]/10 pb-8">
                <h3 className="font-serif text-3xl leading-tight text-[#102C26]">
                  {item.heading}
                </h3>
                <p className="evaara-copy mt-4 max-w-3xl text-sm">
                  {item.text}
                </p>
              </article>
            ))}

            <div data-scroll-card className="grid gap-3 sm:grid-cols-2">
              {room.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-3 rounded-full border border-[#D9C6A5]/70 bg-[#FFFDF8] px-4 py-3 text-sm text-[#102C26]/72">
                  <Check size={16} strokeWidth={1.7} className="text-[#B99A62]" />
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="evaara-section border-t border-[#102C26]/10 px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div data-scroll-reveal className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="evaara-eyebrow">More Rooms</p>
              <h2 className="evaara-title mt-4 text-4xl sm:text-5xl">
                Continue exploring.
              </h2>
            </div>
            <a href="/rooms" className="evaara-link group">
              All Rooms
              <ArrowUpRight size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {relatedRooms.map((relatedRoom) => (
              <a
                key={relatedRoom.slug}
                href={`/rooms/${relatedRoom.slug}`}
                className="group overflow-hidden rounded-[26px] border border-[#D9C6A5]/70 bg-[#FFFDF8] shadow-[0_18px_48px_rgba(16,44,38,0.07)]"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={getRoomImage(relatedRoom.image)}
                    alt={relatedRoom.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A17]/55 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#536B50]">
                    {relatedRoom.category}
                  </p>
                  <h3 className="evaara-title mt-3 text-3xl">
                    {relatedRoom.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        eyebrow="Reservations"
        title={`Plan your stay in the ${room.title}.`}
        text="Share your dates and preferences. Our team will help you choose the right room, view, and pace for your Coorg escape."
        image={getRoomImage(room.image)}
      />
    </>
  )
}

export default RoomDetail
