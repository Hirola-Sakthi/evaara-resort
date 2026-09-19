import { Compass, Eye, HandPlatter, Recycle, ShieldCheck, Target } from 'lucide-react'
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
      <section className="overflow-hidden bg-[#F3F0E8] px-6 py-8 text-[#102C26] md:px-10 md:py-10 lg:px-16">
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
            <p className="evaara-copy mt-4 max-w-xl text-sm md:text-[15px]">
              Every room, pathway, and lounge is composed to feel calm rather
              than crowded, with tactile materials, quiet corners, and openings
              that draw the eye back to Coorg's hills.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {['Natural textures', 'Warm lighting', 'Open views'].map((item) => (
                <span key={item} className="rounded-full border border-[#D9C6A5]/50 px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-[#536B50]">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <img src={roomImage} alt="EVAARA room design facing Coorg hills" loading="lazy" className="h-[300px] rounded-[22px] object-cover sm:h-[420px] sm:rounded-[24px]" />
            <img src={detailImage} alt="EVAARA resort material detail" loading="lazy" className="h-[300px] rounded-[22px] object-cover sm:mt-16 sm:h-[420px] sm:rounded-[24px]" />
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F3F0E8] px-6 py-8 text-[#102C26] md:px-10 md:py-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-6 max-w-3xl"
          >
            <Label>Vision & Mission</Label>
            <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
              A world-class retreat with a quieter soul.
            </h2>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-2">
            {[
              [
                Eye,
                'Our Vision',
                'To become Coorg’s most thoughtful nature retreat, where guests experience refined comfort without losing touch with the land, weather, silence, and estate rhythm around them.',
                resortImage,
              ],
              [
                Target,
                'Our Mission',
                'To shape every stay with sincere hospitality, considered design, local connection, and calm experiences that help people slow down, breathe deeper, and belong for a while.',
                trailImage,
              ],
            ].map(([Icon, title, text, image], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.78, delay: index * 0.08, ease }}
                className="group relative min-h-[390px] overflow-hidden rounded-[24px] border border-[#D9C6A5]/35 bg-[#071A17] shadow-[0_28px_90px_rgba(16,44,38,0.16)]"
              >
                <img src={image} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A17]/92 via-[#071A17]/42 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-[#F6F1E7] md:p-8">
                  <span className="grid size-12 place-items-center rounded-full border border-[#D9C6A5]/35 bg-[#F6F1E7]/10 text-[#D9C6A5] backdrop-blur-md">
                    <Icon size={22} strokeWidth={1.45} />
                  </span>
                  <h3 className="mt-6 font-serif text-4xl leading-none tracking-[-0.035em]">
                    {title}
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#F6F1E7]/72">
                    {text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F3F0E8] px-6 py-8 text-[#102C26] md:px-10 md:py-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-6 max-w-3xl"
          >
            <Label light>People Of The Place</Label>
            <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
              Hospitality that feels human, not rehearsed.
            </h2>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [HandPlatter, 'Attentive Service', 'Present when needed, quiet when privacy matters.', '01'],
              [Compass, 'Local Guidance', 'Recommendations shaped by people who know Coorg closely.', '02'],
              [ShieldCheck, 'Careful Hosting', 'Every detail handled with calm confidence and warmth.', '03'],
            ].map(([Icon, title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.74, delay: index * 0.08, ease }}
                className="group relative overflow-hidden rounded-[20px] border border-[#D9C6A5]/45 bg-[#FFFDF8]/72 p-7 shadow-[0_22px_70px_rgba(16,44,38,0.07)] transition duration-500 hover:-translate-y-1 hover:border-[#B99A62]/70 hover:bg-[#FFFDF8]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B99A62]/60 to-transparent" />
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-full bg-[#D9C6A5]/28 text-[#B99A62] transition duration-300 group-hover:bg-[#B99A62] group-hover:text-[#071A17]">
                    <Icon size={23} strokeWidth={1.45} />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.24em] text-[#102C26]/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-light tracking-[-0.04em]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#102C26]/62">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#F3F0E8] px-6 py-8 text-[#102C26] md:px-10 md:py-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(10% 0 10% 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0% 0)' }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.95, ease }}
            className="relative min-h-[340px] overflow-hidden rounded-[24px] sm:min-h-[440px] lg:min-h-[540px]"
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
    </>
  )
}

export default AboutMoreSections
