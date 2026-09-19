import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

import aboutImage from '../../../assets/images/about-section-img-1.webp'
import aboutImage3 from '../../../assets/images/about-section-img-2.webp'

function AboutPreview() {
  return (
    <section
      id="home-intro"
      className="relative overflow-hidden bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 md:py-24 lg:px-16 lg:py-28 xl:px-20"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#B99A62]/5 blur-[130px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#536B50]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:grid-cols-[1.1fr_0.9fr] xl:gap-16">

          {/* =====================================================
              LEFT — IMAGE COLLAGE
          ====================================================== */}
          <div
            data-scroll-reveal
            className="relative h-[500px] sm:h-[550px] md:h-[590px]"
          >

            {/* =================================================
                MAIN IMAGE — INCREASED WIDTH
            ================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                left-0
                top-0
                z-10
                h-[410px]
                w-[72%]
                overflow-hidden
                rounded-[24px]
                sm:h-[455px]
                sm:w-[74%]
                md:h-[500px]
                md:w-[76%]
                lg:h-[470px]
                lg:w-[78%]
                xl:h-[510px]
                xl:w-[80%]
              "
            >
              <motion.img
                src={aboutImage}
                alt="EVAARA Resort surrounded by nature in Coorg"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.035 }}
                className="h-full w-full object-cover"
              />

              {/* Soft cinematic overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071A17]/30 via-transparent to-transparent" />
            </motion.div>


            {/* =================================================
                SECOND IMAGE
            ================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                bottom-0
                right-[3%]
                z-30
                h-[190px]
                w-[48%]
                overflow-hidden
                rounded-[22px]
                border-[7px]
                border-[#F3F0E8]
                sm:h-[215px]
                md:h-[245px]
                lg:h-[225px]
                xl:h-[255px]
              "
            >
              <motion.img
                src={aboutImage3}
                alt="Peaceful luxury stay surrounded by greenery"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.4,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.05 }}
                className="h-full w-full object-cover"
              />
            </motion.div>


            {/* =================================================
                GOLD DECORATIVE CORNER
            ================================================= */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-3
                left-0
                h-16
                w-16
                rounded-bl-[12px]
                border-b
                border-l
                border-[#B99A62]/60
              "
            />


            {/* =================================================
                VERTICAL LOCATION
            ================================================= */}
            <div className="absolute -left-7 top-1/2 hidden -translate-y-1/2 -rotate-90 lg:block">
              <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#102C26]/30">
                COORG · KARNATAKA
              </span>
            </div>


            {/* =================================================
                IMAGE COUNTER
            ================================================= */}
            <div className="absolute bottom-3 left-[69%] hidden md:block">
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#102C26]/25">
                01 — 02
              </span>
            </div>

          </div>


          {/* =====================================================
              RIGHT — CONTENT
          ====================================================== */}
          <div
            data-scroll-reveal
            className="max-w-xl lg:pl-1 xl:pl-3"
          >

            {/* Eyebrow */}
            <p className="evaara-eyebrow mb-6">The EVAARA Story</p>


            {/* Heading */}
            <h2
              className="
                evaara-title
                max-w-lg
                text-4xl
                sm:text-5xl
                md:text-[3.5rem]
                xl:text-[4rem]
              "
            >
              A quiet retreat

              <span className="block text-[#536B50]">
                shaped by nature.
              </span>
            </h2>


            {/* Divider */}
            <div className="my-7 h-px w-full bg-[#102C26]/10" />


            {/* Description */}
            <div className="space-y-5">
              <p className="text-sm leading-7 text-[#102C26]/55 md:text-[15px] md:leading-8">
                EVAARA Resort is a peaceful sanctuary set amidst the rolling
                landscapes and lush coffee plantations of Coorg. Here, every
                stay is surrounded by the quiet beauty of the Western Ghats.
              </p>

              <p className="text-sm leading-7 text-[#102C26]/45 md:text-[15px] md:leading-8">
                Designed for those who appreciate space, stillness, and
                meaningful escapes, EVAARA brings together warm hospitality,
                thoughtful design, and an authentic connection with nature.
              </p>
            </div>


            {/* CTA */}
            <div className="mt-8">
              <a
                href="/about"
                className="evaara-link group"
              >
                <span>
                  Discover EVAARA
                </span>
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutPreview
