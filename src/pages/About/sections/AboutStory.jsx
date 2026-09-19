import { HeartHandshake, Leaf, Mountain, Sparkles } from 'lucide-react'

import resortImage from '../../../assets/images/generated-coorg-resort-hero.png'
import roomImage from '../../../assets/images/generated-coorg-room-view.png'
import trailImage from '../../../assets/images/generated-coorg-activity-trail.png'

const values = [
  {
    icon: Leaf,
    title: 'Nature First',
    text: 'Every path, view, and quiet corner is planned around the estate landscape.',
  },
  {
    icon: HeartHandshake,
    title: 'Warm Hospitality',
    text: 'Service is personal, calm, and attentive without interrupting your privacy.',
  },
  {
    icon: Sparkles,
    title: 'Refined Comfort',
    text: 'Soft textures, generous space, and thoughtful details shape every stay.',
  },
  {
    icon: Mountain,
    title: 'Authentic Coorg',
    text: 'Coffee country, misty mornings, local flavours, and slow estate living.',
  },
]

function AboutStory() {
  return (
    <section className="bg-[#F3F0E8] text-[#102C26]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
        <div data-scroll-reveal className="relative min-h-[520px]">
          <img
            src={resortImage}
            alt="EVAARA resort set within Coorg coffee estate"
            loading="lazy"
            className="absolute left-0 top-0 h-[430px] w-[78%] rounded-[24px] object-cover shadow-2xl shadow-[#102C26]/15"
          />
          <img
            src={roomImage}
            alt="Luxury EVAARA room facing misty Coorg hills"
            loading="lazy"
            className="absolute bottom-0 right-0 h-[250px] w-[48%] rounded-[22px] border-[8px] border-[#F3F0E8] object-cover shadow-2xl shadow-[#102C26]/14"
          />
          <div className="absolute bottom-8 left-8 hidden rounded-full border border-[#B99A62]/45 bg-[#F3F0E8]/82 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#536B50] backdrop-blur-md sm:block">
            Coorg / Karnataka
          </div>
        </div>

        <div data-scroll-reveal>
          <p className="evaara-eyebrow mb-5">Our Story</p>
          <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
            A quiet estate retreat, made for slower days.
          </h2>
          <p className="evaara-copy mt-6 text-base">
            EVAARA Resort is imagined as a calm luxury hideaway in Coorg, where
            coffee plantations, mist-soft hills, and warm hospitality shape the
            rhythm of every stay.
          </p>
          <p className="evaara-copy mt-4 text-base">
            The experience is intentionally simple: generous views, thoughtful
            rooms, local flavours, and moments that help guests return to the
            quiet they came looking for.
          </p>
          <div className="mt-9 grid grid-cols-3 border-y border-[#102C26]/10 py-5 text-center">
            {['Estate Views', 'Luxury Stays', 'Slow Living'].map((item) => (
              <span key={item} className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#536B50]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div data-scroll-reveal className="mb-10 max-w-3xl">
            <p className="evaara-eyebrow">Philosophy</p>
            <h2 className="evaara-title mt-4 text-4xl sm:text-5xl">
              Luxury that listens to the land.
            </h2>
          </div>
          <div className="grid border-t border-[#102C26]/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon

              return (
                <article key={value.title} data-scroll-card className="border-b border-[#102C26]/10 py-8 sm:px-6 lg:border-r lg:last:border-r-0">
                  <Icon size={25} strokeWidth={1.45} className="text-[#B99A62]" />
                  <h3 className="mt-7 text-xl font-light tracking-[-0.03em]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#102C26]/62">
                    {value.text}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:px-16">
        <div data-scroll-reveal>
          <p className="evaara-eyebrow">Nature Around Us</p>
          <h2 className="evaara-title mt-4 text-4xl sm:text-5xl">
            Coffee trails, golden evenings, and forest quiet.
          </h2>
        </div>
        <div data-scroll-reveal className="overflow-hidden rounded-[24px]">
          <img
            src={trailImage}
            alt="Coorg coffee plantation trail at EVAARA Resort"
            loading="lazy"
            className="h-[520px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutStory
