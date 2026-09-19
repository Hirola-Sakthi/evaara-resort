import { Play, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

import videoImage from '../../../assets/images/main-banner-2.webp'

const videoUrl = 'https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1&rel=0&modestbranding=1'

function CinematicVideo() {
  const [isOpen, setIsOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <section className="overflow-hidden bg-[#F3F0E8] px-5 py-20 text-[#102C26] sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="evaara-eyebrow mb-4">Resort Film</p>
            <h2 className="evaara-title max-w-3xl text-4xl sm:text-5xl md:text-6xl">
              A slower rhythm, captured in motion.
            </h2>
          </div>
          <p className="evaara-copy max-w-sm text-sm">
            Step into misty mornings, coffee trails, quiet villas, and evenings
            that settle gently into the hills.
          </p>
        </motion.div>

        <motion.button
          type="button"
          onClick={() => setIsOpen(true)}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="group relative block aspect-[16/10] w-full overflow-hidden rounded-[24px] text-left shadow-2xl shadow-black/25 md:aspect-[16/8]"
          aria-label="Play EVAARA resort film"
        >
          <motion.img
            src={videoImage}
            alt="Cinematic view of EVAARA Resort in Coorg"
            loading="lazy"
            className="h-full w-full object-cover"
            whileHover={reduceMotion ? undefined : { scale: 1.035 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A17]/75 via-[#071A17]/18 to-transparent" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="absolute h-24 w-24 rounded-full border border-[#D9C6A5]/35 motion-safe:animate-ping" />
            <span className="grid h-24 w-24 place-items-center rounded-full border border-[#D9C6A5]/70 bg-[#F6F1E7]/10 text-[#F6F1E7] backdrop-blur-md transition-all duration-500 group-hover:bg-[#B99A62] group-hover:text-[#071A17]">
              <Play size={26} strokeWidth={1.6} fill="currentColor" />
            </span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D9C6A5]">
                Watch the feeling of Coorg
              </p>
              <p className="mt-2 max-w-lg text-xl font-light leading-tight text-[#F6F1E7] sm:text-3xl">
                Coffee-scented air, forest quiet, and unhurried luxury.
              </p>
            </div>
            <span className="hidden text-[10px] uppercase tracking-[0.24em] text-[#F6F1E7]/65 md:block">
              01:48
            </span>
          </div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-[#071A17]/82 px-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="EVAARA resort video"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-[#D9C6A5]/35 text-[#F6F1E7] transition hover:border-[#B99A62] hover:bg-[#B99A62] hover:text-[#071A17]"
              aria-label="Close video"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-video w-full max-w-5xl overflow-hidden rounded-[22px] border border-[#D9C6A5]/20 bg-black shadow-2xl shadow-black/40"
            >
              <iframe
                title="EVAARA Resort film"
                src={videoUrl}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default CinematicVideo
