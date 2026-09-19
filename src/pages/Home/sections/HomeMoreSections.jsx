import { ArrowUpRight, CalendarDays, Coffee, MapPin, Moon, Route, SunMedium } from 'lucide-react'
import { motion } from 'framer-motion'

import trailImage from '../../../assets/images/generated-coorg-activity-trail.png'
import detailImage from '../../../assets/images/about-section-img-2.webp'

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
}

const arrivalSteps = [
  'A quiet drive through coffee country',
  'Warm welcome with estate views',
  'Slow check-in without the rush',
]

const rhythm = [
  { icon: SunMedium, title: 'Morning Mist', text: 'Wake to soft valley light and the scent of coffee leaves.' },
  { icon: Coffee, title: 'Estate Hours', text: 'Move between breakfast, trails, and open-air pauses.' },
  { icon: Moon, title: 'Golden Evenings', text: 'Let the day close with firelight and deep forest quiet.' },
]

const seasons = [
  ['Monsoon', 'Misty, lush, cinematic'],
  ['Winter', 'Clear air and golden mornings'],
  ['Summer', 'Soft shade and estate walks'],
]

function SectionLabel({ children, light = false }) {
  return (
    <p className={`evaara-eyebrow mb-5 ${light ? 'text-[#536B50]' : ''}`}>
      {children}
    </p>
  )
}

function HomeMoreSections() {
  return (
    <>
      <section className="overflow-hidden bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionLabel>Arrival Experience</SectionLabel>
            <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
              The resort begins before the doorway.
            </h2>
            <p className="evaara-copy mt-5 max-w-xl text-sm md:text-[15px]">
              EVAARA is designed so the first impression feels calm: the road,
              the estate air, the welcome, and the sense that the day can slow
              down now.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4"
          >
            {arrivalSteps.map((step, index) => (
              <motion.div
                key={step}
                variants={reveal}
                className="grid gap-5 border-t border-[#102C26]/10 py-6 sm:grid-cols-[90px_1fr]"
              >
                <span className="font-mono text-xs tracking-[0.24em] text-[#B99A62]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-2xl font-light leading-tight tracking-[-0.04em] text-[#102C26]">
                  {step}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-10 max-w-3xl"
          >
            <SectionLabel light>Estate Rhythm</SectionLabel>
            <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
              A day here has its own quiet architecture.
            </h2>
          </motion.div>

          <div className="grid gap-4 lg:grid-cols-3">
            {rhythm.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="min-h-[250px] border border-[#102C26]/10 p-7"
                >
                  <Icon size={26} strokeWidth={1.4} className="text-[#B99A62]" />
                  <h3 className="mt-10 text-2xl font-light tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#102C26]/62">
                    {item.text}
                  </p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(12% 0 12% 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0% 0)' }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[560px] overflow-hidden rounded-[24px]"
          >
            <img src={detailImage} alt="EVAARA dining detail in Coorg" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A17]/58 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionLabel>Dining Mood</SectionLabel>
            <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
              Food that belongs to the place.
            </h2>
            <p className="evaara-copy mt-5 text-sm md:text-[15px]">
              Dining at EVAARA is warm, local, and unhurried: estate coffee,
              seasonal produce, comforting Coorg flavours, and tables designed
              for long conversations.
            </p>
            <a href="/contact" className="evaara-link group mt-8">
              Reserve a Table
              <ArrowUpRight size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 md:py-24 lg:px-16">
        <img src={trailImage} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-[#F3F0E8]/82" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-10 max-w-3xl"
          >
            <SectionLabel light>Seasons Of Coorg</SectionLabel>
            <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
              Every season changes the resort's voice.
            </h2>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-3">
            {seasons.map(([season, text], index) => (
              <motion.div
                key={season}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.72, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-[#D9C6A5]/34 pt-6"
              >
                <p className="font-serif text-3xl">{season}</p>
                <p className="mt-3 text-sm leading-7 text-[#102C26]/64">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.76fr_1.24fr]">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionLabel>Booking Journey</SectionLabel>
            <h2 className="evaara-title text-4xl sm:text-5xl">
              Simple, personal, considered.
            </h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [CalendarDays, 'Share Dates', 'Tell us when you want to arrive.'],
              [MapPin, 'Choose Mood', 'Rooms, views, meals, and experiences.'],
              [Route, 'Arrive Slowly', 'We help shape the details before you come.'],
            ].map(([Icon, title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="border border-[#102C26]/10 bg-white/52 p-6"
              >
                <Icon size={23} strokeWidth={1.5} className="text-[#B99A62]" />
                <h3 className="mt-7 text-xl font-light tracking-[-0.035em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#102C26]/58">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeMoreSections
