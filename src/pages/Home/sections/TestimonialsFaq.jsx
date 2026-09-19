import { ArrowLeft, ArrowRight, ChevronDown, Headphones, Leaf, Quote } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import aboutImage from '../../../assets/images/about-section-img-1.webp'
import resortImage from '../../../assets/images/generated-coorg-resort-hero.png'
import roomImage from '../../../assets/images/generated-coorg-room-view.png'

const testimonials = [
  {
    quote:
      'EVAARA felt private, quiet, and deeply connected to Coorg. The mornings were beautiful, but the hospitality is what stayed with us.',
    name: 'Ananya Rao',
    location: 'Bengaluru',
    image: aboutImage,
  },
  {
    quote:
      'The resort has that rare balance of comfort and nature. Nothing felt rushed, and every detail was handled with warmth.',
    name: 'Rohan Mehta',
    location: 'Mumbai',
    image: roomImage,
  },
]

const faqs = [
  {
    question: 'What is the check-in/check-out time?',
    answer: 'Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in can be arranged subject to availability.',
  },
  {
    question: 'Is breakfast included?',
    answer: 'Breakfast options are available with selected room plans. The team can confirm inclusions while booking.',
  },
  {
    question: 'Do you provide parking?',
    answer: 'Yes, private parking is available for guests within the resort premises.',
  },
  {
    question: 'Are activities available at the resort?',
    answer: 'Yes, guests can enjoy nature walks, plantation walks, campfire evenings, indoor games, and outdoor experiences.',
  },
  {
    question: 'Is the resort family friendly?',
    answer: 'Yes, EVAARA is suitable for couples, families, and small groups looking for a peaceful Coorg escape.',
  },
]

function TestimonialsFaq() {
  const [activeFaq, setActiveFaq] = useState(0)
  const [activeStory, setActiveStory] = useState(0)

  const showPreviousStory = () => {
    setActiveStory((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  const showNextStory = () => {
    setActiveStory((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  return (
    <section className="relative overflow-hidden bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 md:py-24 lg:px-16">
      <div className="pointer-events-none absolute -left-24 bottom-16 h-72 w-72 rounded-full border border-[#B99A62]/15" />
      <div className="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full border border-[#536B50]/10" />

      <div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="pt-2"
        >
          <p className="evaara-eyebrow mb-5">Guest Notes</p>
          <h2 className="evaara-title max-w-2xl text-5xl sm:text-6xl md:text-7xl">
            The kind of stay people remember softly.
          </h2>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.42em] text-[#536B50]/85">
            Real stories / Genuine experiences
          </p>

          <div className="mt-10 space-y-5">
            {testimonials.map((testimonial, index) => (
              <motion.figure
                key={testimonial.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.78,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`grid gap-6 rounded-[22px] border border-white/80 bg-[#FFFDF8]/58 p-6 shadow-[0_24px_70px_rgba(16,44,38,0.08)] backdrop-blur-md transition duration-300 sm:grid-cols-[104px_1fr] md:p-7 ${
                  activeStory === index ? 'opacity-100' : 'opacity-82'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} guest note`}
                  loading="lazy"
                  className="size-24 rounded-full border border-[#D9C6A5]/55 object-cover"
                />
                <div>
                  <Quote size={28} strokeWidth={1.4} className="mb-3 fill-[#B99A62] text-[#B99A62]" />
                  <blockquote className="max-w-xl text-lg leading-8 tracking-[-0.02em] text-[#102C26]/78 md:text-xl">
                    "{testimonial.quote}"
                  </blockquote>
                  <figcaption className="mt-5 text-[10px] font-bold uppercase tracking-[0.34em] text-[#536B50]">
                    {testimonial.name} / {testimonial.location}
                  </figcaption>
                </div>
              </motion.figure>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={showPreviousStory}
                className="grid size-12 place-items-center rounded-full border border-[#D9C6A5]/70 bg-[#FFFDF8]/65 text-[#102C26] transition hover:border-[#B99A62] hover:bg-[#B99A62] hover:text-[#071A17]"
                aria-label="Previous guest note"
              >
                <ArrowLeft size={18} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={showNextStory}
                className="grid size-12 place-items-center rounded-full border border-[#D9C6A5]/70 bg-[#FFFDF8]/65 text-[#102C26] transition hover:border-[#B99A62] hover:bg-[#B99A62] hover:text-[#071A17]"
                aria-label="Next guest note"
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
              <span className="ml-3 hidden h-px w-24 bg-[#B99A62]/55 sm:block" />
            </div>

            <div className="flex items-center gap-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActiveStory(index)}
                  aria-label={`Show note from ${testimonial.name}`}
                  className={`size-2.5 rounded-full transition ${
                    activeStory === index ? 'bg-[#B99A62]' : 'bg-[#102C26]/12 hover:bg-[#B99A62]/55'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative self-start overflow-hidden rounded-[28px] border border-white/80 bg-[#FFFDF8] shadow-[0_30px_90px_rgba(16,44,38,0.12)]"
        >
          <div className="relative min-h-[250px] overflow-hidden">
            <img
              src={resortImage}
              alt="Misty Coorg resort view"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F3F0E8]/96 via-[#F3F0E8]/72 to-[#F3F0E8]/18" />
            <div className="absolute right-8 top-8 hidden size-14 place-items-center rounded-full border border-[#B99A62]/65 bg-[#F3F0E8]/72 text-[#536B50] backdrop-blur-md md:grid">
              <Leaf size={25} strokeWidth={1.45} />
            </div>
            <div className="relative max-w-lg px-7 py-8 md:px-9 md:py-10">
              <p className="evaara-eyebrow">Before You Arrive</p>
              <h3 className="evaara-title mt-4 text-4xl sm:text-5xl">
                Answers for a smoother stay.
              </h3>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.38em] text-[#536B50]/82">
                Quick questions / Clear answers
              </p>
            </div>
          </div>

          <div className="relative space-y-3 px-6 py-6 md:px-8">
            {faqs.map((faq, index) => {
              const isActive = activeFaq === index

              return (
                <div
                  key={faq.question}
                  className={`group overflow-hidden border transition duration-300 ${
                    isActive
                      ? 'rounded-[24px] border-[#B99A62]/45 bg-[#F3F0E8]/82 shadow-[0_14px_34px_rgba(16,44,38,0.06)]'
                      : 'rounded-full border-[#D9C6A5]/60 bg-[#FFFDF8] hover:border-[#B99A62]/45'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isActive ? -1 : index)}
                    className="grid w-full grid-cols-[44px_1fr_42px] items-center gap-4 px-4 py-3.5 text-left transition duration-300 md:px-5"
                    aria-expanded={isActive}
                  >
                    <span className={`grid size-10 place-items-center rounded-full border text-[10px] font-bold tracking-[0.14em] transition duration-300 ${
                      isActive
                        ? 'border-[#B99A62] bg-[#D9C6A5]/70 text-[#102C26]'
                        : 'border-[#D9C6A5]/70 bg-[#F3F0E8] text-[#536B50]'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-[-0.01em] text-[#102C26] md:text-base">
                      {faq.question}
                    </span>
                    <span className={`grid size-10 place-items-center rounded-full border border-[#D9C6A5]/65 bg-[#FFFDF8] text-[#B99A62] transition duration-300 ${
                      isActive ? 'rotate-180' : 'group-hover:border-[#B99A62]/60'
                    }`}>
                      <ChevronDown size={18} strokeWidth={1.5} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-[44px_1fr_42px] gap-4 px-4 pb-5 md:px-5">
                          <span />
                          <p className="max-w-xl text-sm leading-7 text-[#102C26]/60">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}

            <div className="mt-5 grid gap-5 rounded-[18px] border border-[#D9C6A5]/60 bg-[#F3F0E8]/75 p-5 sm:grid-cols-[56px_1fr_auto] sm:items-center">
              <span className="grid size-12 place-items-center rounded-full bg-[#536B50] text-[#F6F1E7]">
                <Headphones size={20} strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#536B50]">
                  Need more help?
                </p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[#102C26]/62">
                  Share your dates and preferences. Our team will help shape the details before you arrive.
                </p>
              </div>
              <a
                href="/contact"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#536B50] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#F6F1E7] transition hover:bg-[#B99A62] hover:text-[#071A17]"
              >
                Contact Us
                <ArrowRight size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsFaq
