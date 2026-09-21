import { ArrowUpRight, CalendarDays, CloudRain, Coffee, Leaf, MapPin, Moon, Route, Snowflake, SunMedium } from 'lucide-react'
import { motion } from 'framer-motion'

import detailImage from '../../../assets/images/about-section-img-2.webp'

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const rhythm = [
  { icon: SunMedium, title: 'Morning Mist', text: 'Wake to soft valley light and the scent of coffee leaves.' },
  { icon: Coffee, title: 'Estate Hours', text: 'Move between breakfast, trails, and open-air pauses.' },
  { icon: Moon, title: 'Golden Evenings', text: 'Let the day close with firelight and deep forest quiet.' },
]

const seasons = [
  [CloudRain, 'Monsoon', 'Misty, lush, cinematic', 'Rain-washed leaves, low clouds, and slow indoor afternoons.'],
  [Snowflake, 'Winter', 'Clear air and golden mornings', 'Crisp mornings, open views, and evenings made for firelight.'],
  [Leaf, 'Summer', 'Soft shade and estate walks', 'Cool estate trails, shaded verandahs, and longer golden hours.'],
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
      <section className="overflow-hidden bg-[#F3F0E8] px-6 py-8 text-[#102C26] md:px-10 md:py-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-6 max-w-3xl"
          >
            <SectionLabel light>Estate Rhythm</SectionLabel>
            <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
              A day here has its own quiet architecture.
            </h2>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-3">
            {rhythm.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative min-h-[250px] overflow-hidden rounded-[18px] border border-[#D9C6A5]/45 bg-[#FFFDF8]/70 p-7 shadow-[0_20px_60px_rgba(16,44,38,0.06)] transition duration-500 hover:-translate-y-1 hover:border-[#B99A62]/65 hover:bg-[#FFFDF8]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B99A62]/55 to-transparent" />
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-full bg-[#D9C6A5]/28 text-[#B99A62] transition duration-300 group-hover:bg-[#B99A62] group-hover:text-[#071A17]">
                      <Icon size={22} strokeWidth={1.45} />
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-light tracking-[-0.04em]">
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

      <section className="overflow-hidden bg-[#F3F0E8] px-6 py-8 text-[#102C26] md:px-10 md:py-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(12% 0 12% 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0% 0)' }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[330px] overflow-hidden rounded-[22px] border border-[#D9C6A5]/35 shadow-[0_26px_80px_rgba(16,44,38,0.12)] sm:h-[430px] lg:h-[540px]"
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
            <p className="evaara-copy mt-4 text-sm md:text-[15px]">
              From quiet breakfasts after misty walks to candlelit dinners with
              forest sounds around you, every meal is planned to feel rooted in
              the estate rather than rushed by the clock.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {['Estate coffee', 'Local produce', 'Slow dining'].map((item) => (
                <div key={item} className="rounded-[10px] border border-[#D9C6A5]/45 bg-[#FFFDF8]/62 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#536B50]">
                  {item}
                </div>
              ))}
            </div>
            <a href="/contact" className="evaara-link group mt-8">
              Reserve a Table
              <ArrowUpRight size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F3F0E8] px-6 py-10 text-[#102C26] md:px-10 md:py-12 lg:px-16">
        <div className="pointer-events-none absolute -right-36 top-0 h-96 w-96 rounded-full border border-[#D9C6A5]/24" />
        <div className="pointer-events-none absolute -left-28 bottom-8 h-80 w-80 rounded-full border border-[#536B50]/10" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="max-w-3xl"
            >
              <SectionLabel light>Seasons Of Coorg</SectionLabel>
              <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
                Every season changes the resort's voice.
              </h2>
            </motion.div>
            <p data-scroll-reveal className="evaara-copy max-w-xl text-sm md:text-[15px]">
              The estate never feels the same twice. Mist, sun, rain, and cool
              mountain air shift the mood of every path, meal, view, and evening.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {seasons.map(([Icon, season, text, detail], index) => (
              <motion.div
                key={season}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.72, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative min-h-[260px] overflow-hidden rounded-[18px] border border-[#D9C6A5]/45 bg-[#FFFDF8]/72 p-6 shadow-[0_22px_70px_rgba(16,44,38,0.06)] transition duration-500 hover:-translate-y-1 hover:border-[#B99A62]/65 hover:bg-[#FFFDF8]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B99A62]/55 to-transparent" />
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-full bg-[#D9C6A5]/28 text-[#B99A62] transition duration-300 group-hover:bg-[#B99A62] group-hover:text-[#071A17]">
                    <Icon size={21} strokeWidth={1.45} />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.24em] text-[#102C26]/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-8 font-serif text-3xl text-[#102C26]">{season}</p>
                <p className="mt-3 text-sm font-semibold text-[#536B50]">{text}</p>
                <p className="mt-4 text-sm leading-7 text-[#102C26]/58">{detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeMoreSections
