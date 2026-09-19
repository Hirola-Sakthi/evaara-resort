import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// TODO: replace these with your own resort photography.
// Keep them tall/wide (1920x1080 or bigger) so the zoom stays crisp.
const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1920&auto=format&fit=crop',
    meta: '4.9 ★ (500+ Reviews)  ·  Coorg, Karnataka',
    titleLine1: 'Step Into.',
    titleLine2Italic: 'Another World.',
    subtitle:
      'Wake up to misted valleys, whispering coffee estates, and a stillness money can\u2019t buy.',
    primaryCta: 'Book Your Stay',
    secondaryCta: 'Explore Rooms',
  },
  {
    image:
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1920&auto=format&fit=crop',
    meta: 'Est. 2016  ·  Madikeri, Coorg',
    titleLine1: 'Where Every Stay',
    titleLine2Italic: 'Becomes A Memory.',
    subtitle:
      'From candlelit dinners to sunrise treks — every corner of the estate is built for slow, deliberate rest.',
    primaryCta: 'View Experiences',
    secondaryCta: 'Learn More',
  },
  {
    image:
      'https://images.unsplash.com/photo-1518602164578-cd0074062767?q=80&w=1920&auto=format&fit=crop',
    meta: '12 Acres  ·  Private Coffee Estate',
    titleLine1: 'Nature, Undisturbed.',
    titleLine2Italic: 'Comfort, Uncompromised.',
    subtitle:
      'A boutique retreat tucked inside a working coffee plantation, minutes from Coorg\u2019s best-kept viewpoints.',
    primaryCta: 'Check Availability',
    secondaryCta: 'View Gallery',
  },
]

const SLIDE_DURATION = 6500 // ms between auto-advances

const textContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
}

const textItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, SLIDE_DURATION)
    return () => clearTimeout(id)
  }, [index, paused])

  const slide = slides[index]

  return (
    <section
      className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-[#102C26]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image layer with Ken Burns zoom + crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <motion.div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.12 }}
            transition={{ duration: SLIDE_DURATION / 1000 + 1.2, ease: 'linear' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Legibility gradient, tinted with the brand ink color instead of flat black */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#102C26]/85 via-[#102C26]/20 to-[#102C26]/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col justify-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={textContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="max-w-2xl"
            >
              <motion.p
                variants={textItem}
                className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#F3F0E8]/80"
              >
                {slide.meta}
              </motion.p>

              <motion.h1
                variants={textItem}
                className="font-serif text-4xl leading-[1.1] text-[#F3F0E8] sm:text-5xl md:text-6xl"
              >
                {slide.titleLine1}
                <br />
                <span className="italic text-[#F3F0E8]/90">{slide.titleLine2Italic}</span>
              </motion.h1>

              <motion.p
                variants={textItem}
                className="mt-5 max-w-md text-sm text-[#F3F0E8]/75 sm:text-base"
              >
                {slide.subtitle}
              </motion.p>

              <motion.div variants={textItem} className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-[#F3F0E8] px-6 py-3 text-sm font-semibold text-[#102C26] transition hover:opacity-90">
                  {slide.primaryCta}
                </button>
                <button className="rounded-full border border-[#F3F0E8]/40 px-6 py-3 text-sm font-semibold text-[#F3F0E8] transition hover:bg-[#F3F0E8]/10">
                  {slide.secondaryCta}
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="mt-10 flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.image}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className="h-1.5 rounded-full bg-[#F3F0E8]/40 transition-all duration-300"
                style={{ width: i === index ? 28 : 10, backgroundColor: i === index ? '#F3F0E8' : undefined }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
