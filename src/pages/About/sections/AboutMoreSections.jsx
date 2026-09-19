import { Compass, HandPlatter, Recycle, ShieldCheck, Trees } from 'lucide-react'
import { motion } from 'framer-motion'

import resortImage from '../../../assets/images/generated-coorg-resort-hero.png'
import roomImage from '../../../assets/images/generated-coorg-room-view.png'
import trailImage from '../../../assets/images/generated-coorg-activity-trail.png'
import detailImage from '../../../assets/images/about-section-img.webp'

const ease = [0.22, 1, 0.36, 1]

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.82, ease },
  },
}

function Label({ children, light = false }) {
  return (
    <p className={`evaara-eyebrow mb-5 ${light ? 'text-[#536B50]' : ''}`}>
      {children}
    </p>
  )
}

function AboutMoreSections() {
  return (
    <>
      <section className="overflow-hidden bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Label>Design Language</Label>
            <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
              Modern comfort, softened by the estate.
            </h2>
            <p className="evaara-copy mt-5 max-w-xl text-sm md:text-[15px]">
              EVAARA is designed around restraint: clean lines, natural
              textures, warm light, and views that remain the main luxury.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease }}
            className="grid grid-cols-2 gap-4"
          >
            <img src={roomImage} alt="EVAARA room design facing Coorg hills" loading="lazy" className="h-[420px] rounded-[24px] object-cover" />
            <img src={detailImage} alt="EVAARA resort material detail" loading="lazy" className="mt-16 h-[420px] rounded-[24px] object-cover" />
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
            className="mb-12 max-w-3xl"
          >
            <Label light>People Of The Place</Label>
            <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
              Hospitality that feels human, not rehearsed.
            </h2>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              [HandPlatter, 'Attentive Service', 'Present when needed, quiet when privacy matters.'],
              [Compass, 'Local Guidance', 'Recommendations shaped by people who know Coorg closely.'],
              [ShieldCheck, 'Careful Hosting', 'Every detail handled with calm confidence and warmth.'],
            ].map(([Icon, title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.74, delay: index * 0.08, ease }}
                className="border border-[#102C26]/10 p-7"
              >
                <Icon size={25} strokeWidth={1.45} className="text-[#B99A62]" />
                <h3 className="mt-10 text-2xl font-light tracking-[-0.04em]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#102C26]/62">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(10% 0 10% 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0% 0)' }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.95, ease }}
            className="relative min-h-[540px] overflow-hidden rounded-[24px]"
          >
            <img src={trailImage} alt="Coffee estate trail at EVAARA Resort" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A17]/60 via-transparent to-transparent" />
          </motion.div>
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="self-center"
          >
            <Label>Responsibility</Label>
            <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
              Quiet choices that respect the land.
            </h2>
            <p className="evaara-copy mt-5 text-sm md:text-[15px]">
              Our idea of luxury is lighter, slower, and more conscious:
              thoughtful water use, local sourcing, landscape-sensitive
              planning, and experiences that keep nature central.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Local sourcing', 'Landscape sensitivity', 'Waste awareness', 'Slow experiences'].map((item) => (
                <div key={item} className="flex items-center gap-3 border-t border-[#102C26]/10 pt-4 text-sm text-[#102C26]/68">
                  <Recycle size={17} strokeWidth={1.5} className="text-[#B99A62]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Label light>Sense Of Place</Label>
            <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
              Set between coffee, mist, and mountain air.
            </h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['Altitude', 'Cooler mornings and soft evenings'],
              ['Landscape', 'Coffee estate edges and forest views'],
              ['Mood', 'Private, calm, and deeply green'],
            ].map(([title, text], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease }}
                className="border-t border-[#D9C6A5]/28 pt-6"
              >
                <p className="font-serif text-3xl">{title}</p>
                <p className="mt-3 text-sm leading-7 text-[#102C26]/62">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1fr_1fr]">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Label>Guest Promise</Label>
            <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
              You arrive as a guest. You leave with a quieter mind.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.82, ease }}
            className="overflow-hidden rounded-[24px] bg-white shadow-xl shadow-[#102C26]/8"
          >
            <img src={resortImage} alt="EVAARA resort promise in Coorg" loading="lazy" className="h-[330px] w-full object-cover" />
            <div className="p-7">
              <Trees size={24} strokeWidth={1.45} className="text-[#B99A62]" />
              <p className="mt-5 text-xl font-light leading-9 tracking-[-0.03em] text-[#102C26]/76">
                Space to breathe, service that understands discretion, and an
                experience of Coorg that feels elegant without becoming formal.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AboutMoreSections
