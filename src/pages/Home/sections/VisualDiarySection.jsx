import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

import diaryActivityTrail from '../../../assets/images/generated-coorg-activity-trail.png'
import diaryEstate from '../../../assets/images/generated-coorg-diary-estate.png'
import diaryRiver from '../../../assets/images/generated-coorg-diary-river.png'
import diaryTrail from '../../../assets/images/generated-coorg-diary-trail.png'
import diaryWaterfall from '../../../assets/images/generated-coorg-diary-waterfall.png'

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const visualDiary = [
  { image: diaryEstate, title: 'Wake Up To The Ghats' },
  { image: diaryWaterfall, title: 'Waterfall Day Trips' },
  { image: diaryRiver, title: 'Slow Valley Evenings' },
  { image: diaryTrail, title: 'Estate Walk Mornings' },
  { image: diaryActivityTrail, title: 'Nature Around EVAARA' },
]

function VisualDiarySection() {
  const [activeDiary, setActiveDiary] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveDiary((current) => (current + 1) % visualDiary.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [])

  const moveDiary = (direction) => {
    setActiveDiary((current) => (current + direction + visualDiary.length) % visualDiary.length)
  }

  return (
    <section className="overflow-hidden bg-[#F3F0E8] px-6 py-12 text-[#102C26] md:px-10 md:py-14 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-2xl text-left"
          >
            <p className="evaara-eyebrow mb-5 text-[#536B50]">EVAARA Moments</p>
            <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
              A visual taste of your stay.
            </h2>
            <p className="evaara-copy mt-5 max-w-md text-sm md:text-[15px]">
              From mist-soft mornings to estate walks and waterfall drives,
              these are the quiet Coorg moods that shape time at EVAARA.
            </p>
          </motion.div>

          <div className="hidden shrink-0 justify-end gap-3 md:flex">
            <button
              type="button"
              onClick={() => moveDiary(-1)}
              aria-label="Previous visual diary image"
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#102C26]/30 bg-transparent text-[#102C26] transition duration-300 hover:border-[#B99A62] hover:bg-[#B99A62] hover:text-[#071A17]"
            >
              <ArrowLeft size={18} strokeWidth={1.6} />
            </button>
            <button
              type="button"
              onClick={() => moveDiary(1)}
              aria-label="Next visual diary image"
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#102C26]/30 bg-transparent text-[#102C26] transition duration-300 hover:border-[#B99A62] hover:bg-[#B99A62] hover:text-[#071A17]"
            >
              <ArrowRight size={18} strokeWidth={1.6} />
            </button>
          </div>
        </div>

        <div className="relative mx-auto mt-10 h-[350px] max-w-7xl sm:h-[430px] lg:h-[500px]">
          <div className="pointer-events-none absolute inset-x-[-16%] top-[30%] h-40 bg-[#D9C6A5]/20 blur-3xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            {visualDiary.map((item, index) => {
              const offset = (index - activeDiary + visualDiary.length) % visualDiary.length
              const position = offset > visualDiary.length / 2 ? offset - visualDiary.length : offset
              const distance = Math.abs(position)
              const isActive = position === 0

              return (
                <motion.figure
                  key={item.title}
                  className="absolute m-0 overflow-hidden rounded-[22px] border border-[#FFFDF8]/80 bg-[#FFFDF8] shadow-[0_26px_90px_rgba(16,44,38,0.16)]"
                  initial={false}
                  animate={{
                    x: `${position * 56}%`,
                    y: isActive ? 0 : distance === 1 ? 20 : 34,
                    scale: isActive ? 1 : distance === 1 ? 0.8 : 0.66,
                    opacity: isActive ? 1 : distance === 1 ? 0.82 : 0.48,
                    zIndex: 20 - distance,
                  }}
                  transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
                  style={{ width: 'min(70vw, 430px)' }}
                >
                  <div className="relative aspect-[4/5] sm:aspect-[5/4]">
                    <img
                      src={item.image}
                      alt={`${item.title} in Coorg`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A17]/54 via-transparent to-transparent opacity-80" />
                    <figcaption className="absolute inset-x-0 bottom-0 px-6 pb-6 text-left text-[#FFFDF8]">
                      <p className="mt-2 font-serif text-2xl leading-none sm:text-3xl">
                        {item.title}
                      </p>
                    </figcaption>
                  </div>
                </motion.figure>
              )
            })}
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => moveDiary(-1)}
            aria-label="Previous visual diary image"
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#102C26]/30 bg-transparent text-[#102C26] transition duration-300 hover:border-[#B99A62] hover:bg-[#B99A62] hover:text-[#071A17]"
          >
            <ArrowLeft size={18} strokeWidth={1.6} />
          </button>
          <button
            type="button"
            onClick={() => moveDiary(1)}
            aria-label="Next visual diary image"
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#102C26]/30 bg-transparent text-[#102C26] transition duration-300 hover:border-[#B99A62] hover:bg-[#B99A62] hover:text-[#071A17]"
          >
            <ArrowRight size={18} strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default VisualDiarySection
