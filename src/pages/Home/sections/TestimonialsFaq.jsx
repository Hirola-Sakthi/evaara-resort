import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const defaultFaqs = [
  {
    question: 'What is the check-in and check-out time?',
    answer: 'Check-in begins at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out can be requested based on availability.',
  },
  {
    question: 'Is breakfast included with the stay?',
    answer: 'Breakfast is included with selected room plans. Our reservations team will confirm the inclusions before your booking is finalized.',
  },
  {
    question: 'Do you have private parking?',
    answer: 'Yes, private guest parking is available within the resort premises.',
  },
  {
    question: 'Is EVAARA suitable for families?',
    answer: 'Yes, the resort is designed for couples, families, and small groups who want a peaceful nature stay in Coorg.',
  },
  {
    question: 'Are plantation walks available?',
    answer: 'Yes, guests can enjoy guided coffee estate walks and quiet nature trails depending on weather and availability.',
  },
]

function TestimonialsFaq({
  eyebrow = 'FAQ',
  title = 'Before you arrive.',
  text = 'Clear answers for planning your Coorg stay with ease, from arrival timings and meals to estate experiences and reservations. If you need anything more specific, our team can help shape the details before you travel.',
  faqs = defaultFaqs,
}) {
  const [activeFaq, setActiveFaq] = useState(0)

  return (
    <section className="bg-[#F3F0E8] px-6 py-8 text-[#102C26] md:px-10 md:py-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
        <div data-scroll-reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="evaara-eyebrow mb-5">{eyebrow}</p>
          <h2 className="evaara-title max-w-xl text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="evaara-copy mt-6 max-w-md text-sm md:text-[15px]">
            {text}
          </p>
        </div>

        <div data-scroll-reveal className="grid gap-0 border-t border-[#102C26]/12">
          {faqs.map((faq, index) => {
            const isActive = activeFaq === index

            return (
              <div key={faq.question} className="border-b border-[#102C26]/12">
                <button
                  type="button"
                  onClick={() => setActiveFaq(isActive ? -1 : index)}
                  className="flex w-full cursor-pointer items-center gap-4 py-5 text-left sm:gap-5 sm:py-6"
                  aria-expanded={isActive}
                >
                  <span className="w-9 shrink-0 font-mono text-[10px] tracking-[0.24em] text-[#B99A62] sm:w-12">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-lg font-medium leading-7 tracking-[-0.03em] text-[#102C26] sm:text-xl">
                    {faq.question}
                  </span>
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full border border-[#B99A62]/38 text-[#B99A62] transition duration-300 ${
                      isActive ? 'rotate-180 bg-[#D9C6A5]/24' : 'bg-transparent'
                    }`}
                  >
                    <ChevronDown size={17} strokeWidth={1.6} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pl-[52px] text-sm leading-7 text-[#102C26]/62 sm:pl-[64px] md:max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsFaq
