import { ArrowUpRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const featuredActivities = [
  {
    number: '01',
    title: 'Trekking',
    text: 'Explore scenic trails through misty coffee country, forest shade, and open hill views.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=90',
  },
  {
    number: '02',
    title: 'Coffee Plantation Tour',
    text: 'Walk through lush estates with local stories, slow tastings, and the scent of fresh coffee.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=90',
  },
  {
    number: '03',
    title: 'Campfire Evenings',
    text: 'Gather under clear Coorg skies for warm conversations and a gentler end to the day.',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=90',
  },
  {
    number: '04',
    title: 'Bird Watching',
    text: 'Listen closely as the surrounding canopy turns each morning into a living soundtrack.',
    image: 'https://images.unsplash.com/photo-1501706362039-c6e80999a1d3?auto=format&fit=crop&w=1200&q=90',
  },
]

function FeaturedActivities() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const firstY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const secondY = useTransform(scrollYProgress, [0, 1], [20, -90])
  const thirdY = useTransform(scrollYProgress, [0, 1], [80, -30])
  const fourthY = useTransform(scrollYProgress, [0, 1], [10, -70])
  const yValues = [firstY, secondY, thirdY, fourthY]

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 grid gap-7 md:grid-cols-[0.85fr_1.15fr]"
        >
          <div>
            <p className="evaara-eyebrow mb-4">Activities & Experiences</p>
            <h2 className="evaara-title max-w-xl text-4xl sm:text-5xl md:text-6xl">
              Days shaped by forest, fire, and coffee trails.
            </h2>
          </div>
          <p className="evaara-copy max-w-xl self-end text-sm md:text-[15px]">
            Experiences at EVAARA are composed with the landscape, not placed on
            top of it. Move slowly through plantations, trails, campfire
            evenings, and quiet local moments.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:min-h-[760px] lg:grid-cols-4 lg:items-start">
          {featuredActivities.map((activity, index) => (
            <motion.article
              key={activity.title}
              style={{ y: yValues[index] }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.85,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-[22px] bg-[#102C26] shadow-xl shadow-[#102C26]/10 ${
                index % 2 === 0 ? 'lg:mt-16' : 'lg:mt-0'
              } ${index === 2 ? 'lg:mt-28' : ''}`}
            >
              <div className="relative h-[420px] overflow-hidden md:h-[500px] lg:h-[560px]">
                <img
                  src={activity.image}
                  alt={activity.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A17]/82 via-[#071A17]/15 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-[#F6F1E7]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.24em] text-[#D9C6A5]">
                    {activity.number}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-[#D9C6A5]/45 transition-all duration-300 group-hover:border-[#B99A62] group-hover:bg-[#B99A62] group-hover:text-[#071A17]">
                    <ArrowUpRight size={15} strokeWidth={1.5} />
                  </span>
                </div>
                <h3 className="text-2xl font-light tracking-[-0.04em]">
                  {activity.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#F6F1E7]/68">
                  {activity.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedActivities
