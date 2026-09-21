import { Play, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

import videoImage from '../../../assets/images/main-banner-2.webp'

const videoUrl = 'https://www.youtube.com/embed/ARcXxrH4JNA?autoplay=1&rel=0&modestbranding=1'

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
    <section className="overflow-hidden bg-[#F3F0E8] px-5 pb-4 pt-8 text-[#102C26] sm:px-8 md:pb-5 md:pt-10 lg:px-12">
      <div className="mx-auto max-w-[1180px] xl:max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="group relative aspect-[4/3] w-full overflow-hidden rounded-[18px] text-left shadow-[0_18px_55px_rgba(16,44,38,0.12)] sm:aspect-[16/10] sm:rounded-[22px] md:aspect-[16/8.8] lg:aspect-[16/8]"
        >
          <motion.img
            src={videoImage}
            alt="Cinematic view of EVAARA Resort in Coorg"
            loading="lazy"
            className="h-full w-full object-cover"
            whileHover={reduceMotion ? undefined : { scale: 1.035 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A17]/56 via-[#071A17]/10 to-transparent" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="absolute h-16 w-16 rounded-full border border-[#D9C6A5]/35 motion-safe:animate-ping sm:h-20 sm:w-20 lg:h-24 lg:w-24" />
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="grid h-16 w-16 cursor-pointer place-items-center rounded-full border border-[#D9C6A5]/70 bg-[#F6F1E7]/10 text-[#F6F1E7] backdrop-blur-md transition-all duration-500 hover:bg-[#B99A62] hover:text-[#071A17] sm:h-20 sm:w-20 lg:h-24 lg:w-24"
              aria-label="Play EVAARA resort film"
            >
              <Play size={20} strokeWidth={1.6} fill="currentColor" className="sm:size-6" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 sm:bottom-6 sm:left-6 sm:right-6 sm:gap-6">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#D9C6A5] sm:text-[10px] sm:tracking-[0.3em]">
                Watch the feeling of Coorg
              </p>
              <p className="mt-2 max-w-lg text-lg font-light leading-tight text-[#F6F1E7] sm:text-2xl md:text-3xl">
                Coffee-scented air, forest quiet, and unhurried luxury.
              </p>
            </div>
          </div>
        </motion.div>
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
              className="absolute right-5 top-5 grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-[#D9C6A5]/35 text-[#F6F1E7] transition hover:border-[#B99A62] hover:bg-[#B99A62] hover:text-[#071A17]"
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
