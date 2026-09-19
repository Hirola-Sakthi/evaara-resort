import { ArrowUpRight } from 'lucide-react'

import trailImage from '../../../assets/images/generated-coorg-activity-trail.png'
import resortImage from '../../../assets/images/generated-coorg-resort-hero.png'
import roomImage from '../../../assets/images/generated-coorg-room-view.png'

const activityCards = [
  {
    number: '01',
    title: 'Trekking',
    text: 'Explore scenic estate trails through misty coffee country and forest shade.',
    image: trailImage,
  },
  {
    number: '02',
    title: 'Coffee Plantation Tour',
    text: 'Walk through lush estate rows with stories of Coorg coffee, spice, and soil.',
    image: resortImage,
  },
  {
    number: '03',
    title: 'Campfire Evenings',
    text: 'Slow down under open skies with warmth, quiet conversations, and golden light.',
    image: trailImage,
  },
  {
    number: '04',
    title: 'Bird Watching',
    text: 'Listen to the canopy at first light and spot colour moving through the trees.',
    image: resortImage,
  },
  {
    number: '05',
    title: 'Indoor Games',
    text: 'Unhurried time indoors for families, friends, and rainy Coorg afternoons.',
    image: roomImage,
  },
  {
    number: '06',
    title: 'Nature Photography',
    text: 'Capture dawn mist, forest textures, coffee leaves, and changing valley moods.',
    image: trailImage,
  },
]

function ActivityGrid() {
  return (
    <section className="bg-[#F3F0E8] px-6 py-8 text-[#102C26] md:px-10 md:py-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div data-scroll-reveal className="mb-6 grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="evaara-eyebrow mb-4">Curated Experiences</p>
            <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
              Not activities. Small rituals of Coorg.
            </h2>
          </div>
          <p className="evaara-copy max-w-2xl self-end text-sm md:text-[15px]">
            EVAARA experiences are quiet, grounded, and deeply local. Some days
            are for walking through coffee trails. Others are for doing almost
            nothing, beautifully.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {activityCards.map((activity) => (
            <article
              data-scroll-card
              key={activity.title}
              className="group relative min-h-[340px] overflow-hidden rounded-[22px] bg-[#071A17] shadow-xl shadow-[#102C26]/10 sm:min-h-[420px] sm:rounded-[24px]"
            >
              <img
                src={activity.image}
                alt={activity.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A17]/82 via-[#071A17]/22 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-[#F6F1E7]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.26em] text-[#D9C6A5]">
                    {activity.number}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-[#D9C6A5]/45 transition group-hover:bg-[#B99A62] group-hover:text-[#071A17]">
                    <ArrowUpRight size={15} strokeWidth={1.5} />
                  </span>
                </div>
                <h3 className="font-serif text-3xl leading-tight">
                  {activity.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-[#F6F1E7]/72">
                  {activity.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ActivityGrid
