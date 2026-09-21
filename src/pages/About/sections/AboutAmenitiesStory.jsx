import { useLayoutEffect, useRef } from 'react'
import {
  Flame,
  Moon,
  Trees,
  UtensilsCrossed,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import diningImage from '../../../assets/images/about-section-img-2.webp'
import poolImage from '../../../assets/images/generated-coorg-resort-hero.png'
import walkImage from '../../../assets/images/generated-coorg-diary-trail.png'
import campfireImage from '../../../assets/images/main-banner-3.webp'
import serviceImage from '../../../assets/images/room-banner.webp'

gsap.registerPlugin(ScrollTrigger)

const stayChapters = [
  {
    icon: UtensilsCrossed,
    title: 'Arrival Through Mist',
    eyebrow: 'First Impressions',
    text: 'The stay begins with soft valley air, layered greens, and the feeling that the road has finally slowed down with you.',
    image: diningImage,
  },
  {
    icon: Trees,
    title: 'Coffee Country Mornings',
    eyebrow: 'Estate Light',
    text: 'Wake into the scent of wet leaves and coffee plants, where breakfast, birdsong, and morning light set the rhythm of the day.',
    image: poolImage,
  },
  {
    icon: Trees,
    title: 'Forest Edges',
    eyebrow: 'Quiet Discovery',
    text: 'Move through shaded paths and green corridors that keep Coorg close, immersive, and wonderfully unhurried.',
    image: walkImage,
  },
  {
    icon: Flame,
    title: 'Golden Hour Pauses',
    eyebrow: 'Evening Ritual',
    text: 'As the hills soften, the resort turns gentle: warm light, open verandahs, slow conversations, and the day settling into quiet.',
    image: campfireImage,
  },
  {
    icon: Moon,
    title: 'Nightfall At EVAARA',
    eyebrow: 'Deep Rest',
    text: 'The evening closes with calm interiors, forest sounds, and the kind of privacy that makes sleep feel deeper in the hills.',
    image: serviceImage,
  },
]

function AboutAmenitiesStory() {
  const sectionRef = useRef(null)
  const stageRef = useRef(null)
  const cardRefs = useRef([])

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || window.innerWidth < 1024) {
      return undefined
    }

    const context = gsap.context(() => {
      const cards = cardRefs.current

      gsap.set(cards, { autoAlpha: 0, y: 0, scale: 0.97, transformOrigin: 'center center' })
      gsap.set(cards[0], { autoAlpha: 1, scale: 1 })
      gsap.set(cards.map((card) => card?.querySelector('img')), {
        scale: 1.08,
        yPercent: 4,
      })

      const timeline = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
          trigger: stageRef.current,
          start: 'top top',
          end: () => `+=${window.innerHeight * (stayChapters.length - 1)}`,
          pin: stageRef.current,
          scrub: 0.85,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      stayChapters.forEach((_, index) => {
        timeline.to(
          cards[index]?.querySelector('img'),
          {
            yPercent: -4,
            scale: 1.02,
            duration: 1,
            ease: 'none',
          },
          index,
        )

        if (index < stayChapters.length - 1) {
          timeline
            .to(
              cards[index],
              {
                autoAlpha: 0,
                scale: 0.97,
                duration: 0.38,
              },
              index + 0.62,
            )
            .fromTo(
              cards[index + 1],
              {
                autoAlpha: 0,
                scale: 0.96,
              },
              {
                autoAlpha: 1,
                scale: 1,
                duration: 0.54,
              },
              index + 0.72,
            )
            .fromTo(
              cards[index + 1]?.querySelector('img'),
              {
                scale: 1.1,
                yPercent: 5,
              },
              {
                scale: 1.06,
                yPercent: 0,
                duration: 0.54,
              },
              index + 0.78,
            )
        }
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-[#F4F1E9] text-[#102C26]">
      <div className="mx-auto max-w-7xl px-6 pb-5 pt-14 md:px-10 md:pt-16 lg:px-16">
        <p className="evaara-eyebrow mb-5 text-[#536B50]">
          Stay Chapters
        </p>
        <h2 className="evaara-title max-w-4xl text-4xl sm:text-5xl md:text-6xl">
          A stay told in quiet Coorg moments.
        </h2>
      </div>

      <div
        ref={stageRef}
        className="relative hidden min-h-svh items-center justify-center overflow-hidden bg-[#F4F1E9] px-6 py-8 md:px-10 lg:flex lg:px-16"
      >
        <div className="relative mx-auto w-full max-w-7xl lg:pr-16 xl:pr-20">
          <div className="relative min-h-[520px] sm:min-h-[540px] lg:min-h-[500px] xl:min-h-[520px]">
            {stayChapters.map((chapter, index) => {
              const Icon = chapter.icon

              return (
                <article
                  key={chapter.title}
                  ref={(element) => {
                    cardRefs.current[index] = element
                  }}
                  className="absolute inset-0 overflow-hidden rounded-[28px] border border-[#D9C6A5]/55 bg-[#FFFDF8] shadow-[0_34px_100px_rgba(16,44,38,0.14)] lg:grid lg:grid-cols-[0.95fr_1.05fr]"
                >
                  <div className="relative min-h-[220px] overflow-hidden sm:min-h-[260px] lg:min-h-full">
                    <img
                      src={chapter.image}
                      alt={`${chapter.title} at EVAARA Resort in Coorg`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A17]/58 via-[#071A17]/8 to-transparent" />
                    {/* <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#F6F1E7]/88">
                      <span>{chapter.eyebrow}</span>
                      <span className="h-1 w-1 rounded-full bg-[#B99A62]" />
                      <span>{String(index + 1).padStart(2, '0')}</span>
                    </div> */}
                  </div>

                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <div className="mb-6 flex flex-wrap gap-3">
                      {[chapter.eyebrow, 'Coorg Rooted', 'EVAARA Story'].map((item) => (
                        <span
                          key={`${chapter.title}-${item}`}
                          className="rounded-full border border-[#B99A62]/28 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#536B50]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#D9C6A5]/28 text-[#B99A62]">
                        <Icon size={23} strokeWidth={1.45} />
                      </span>
                      <div className="h-px flex-1 bg-[#102C26]/10" />
                    </div>

                    <h3 className="evaara-title mt-6 text-4xl sm:text-5xl md:text-6xl">
                      {chapter.title}
                    </h3>
                    <p className="evaara-copy mt-5 max-w-xl text-sm md:text-[15px]">
                      {chapter.text}
                    </p>

                    <div className="mt-7 grid gap-5 border-t border-[#102C26]/10 pt-5 sm:grid-cols-3">
                      {['Quietly cinematic', 'Naturally paced', 'Deeply restful'].map((item) => (
                        <div key={`${chapter.title}-${item}`}>
                          <Trees size={17} strokeWidth={1.45} className="mb-3 text-[#B99A62]" />
                          <p className="text-xs leading-6 text-[#102C26]/60">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-5 px-6 pb-10 md:px-10 lg:hidden">
        {stayChapters.map((chapter, index) => {
          const Icon = chapter.icon

          return (
            <article
              key={chapter.title}
              className="overflow-hidden rounded-[24px] border border-[#D9C6A5]/55 bg-[#FFFDF8] shadow-[0_22px_70px_rgba(16,44,38,0.1)]"
            >
              <div className="relative min-h-[260px] overflow-hidden">
                <img
                  src={chapter.image}
                  alt={`${chapter.title} at EVAARA Resort in Coorg`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A17]/58 via-[#071A17]/8 to-transparent" />
              </div>

              <div className="p-6">
                <div className="mb-5 flex flex-wrap gap-2">
                  {[chapter.eyebrow, 'Coorg Rooted'].map((item) => (
                    <span
                      key={`${chapter.title}-${item}`}
                      className="rounded-full border border-[#B99A62]/28 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#536B50]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#D9C6A5]/28 text-[#B99A62]">
                    <Icon size={21} strokeWidth={1.45} />
                  </span>
                  <div className="h-px flex-1 bg-[#102C26]/10" />
                </div>

                <h3 className="evaara-title mt-6 text-4xl">
                  {chapter.title}
                </h3>
                <p className="evaara-copy mt-4 text-sm">
                  {chapter.text}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default AboutAmenitiesStory
