import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

import ctaImage from '../../../assets/images/main-banner-3.webp'

function FinalCta() {
  return (
    <section className="bg-[#F3F0E8] px-6 py-16 text-[#F6F1E7] md:px-10 md:py-24 lg:px-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-[#D9C6A5]/25 bg-[#071A17] shadow-[0_32px_90px_rgba(16,44,38,0.16)]">
        <img
          src={ctaImage}
          alt="Quiet forest view at EVAARA Resort"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#071A17]/58" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A17] via-[#071A17]/78 to-[#071A17]/16" />
        <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-[#D9C6A5]/55 via-[#D9C6A5]/20 to-transparent" />
        <div className="absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-[#D9C6A5]/18 to-[#D9C6A5]/45" />

        <div className="relative flex min-h-[500px] items-end px-7 py-12 sm:px-10 md:px-12 md:py-16 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="evaara-eyebrow evaara-eyebrow-light mb-5">
            Escape Into The Quiet
          </p>
          <h2 className="evaara-title evaara-title-light text-5xl sm:text-6xl md:text-7xl">
            Let Coorg slow the world down.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#F6F1E7]/72">
            Book a stay shaped by forest views, warm hospitality, unhurried
            mornings, and the soft rhythm of the hills.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#B99A62] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#071A17] transition-all duration-300 hover:scale-[1.02] hover:bg-[#D9C6A5]"
            >
              Book Your Stay
              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            <a
              href="/rooms"
              className="rounded-full border border-[#F6F1E7]/38 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#F6F1E7] backdrop-blur-sm transition-all duration-300 hover:border-[#D9C6A5] hover:bg-[#F6F1E7]/10"
            >
              View Rooms
            </a>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  )
}

export default FinalCta
