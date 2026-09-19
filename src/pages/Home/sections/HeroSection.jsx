import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import bannerImage from "../../../assets/images/main-banner.webp";
import bannerImage2 from "../../../assets/images/main-banner-2.webp";
import bannerImage3 from "../../../assets/images/main-banner-3.webp";

const slides = [
  {
  image: bannerImage,
  meta: "EVAARA RESORT · COORG, KARNATAKA",
  title: "Wander Into The Heart of Coorg",
  subtitle:
    "Wake to mist-soft valleys, coffee-scented air, and quiet luxury woven into the wild beauty of Coorg.",
  primaryCta: "Explore Our Rooms",
  secondaryCta: "Discover EVAARA",
},

{
  image: bannerImage2,
  meta: "12 ACRES · COFFEE ESTATE",
  title: "Escape Into The Heart of the Wild.",
  subtitle:
    "Leave the rush behind and discover misty mornings, coffee-scented trails, and unforgettable moments surrounded by the hills of Coorg.",
  primaryCta: "View Experiences",
  secondaryCta: "Explore Gallery",
},

{
  image: bannerImage3,
  meta: "A QUIET RETREAT · COORG",
  title: "Find Your Way Back To Nature.",
  subtitle:
    "Unwind in thoughtfully crafted spaces where forest views, warm hospitality, and the timeless rhythm of Coorg come together.",
  primaryCta: "Discover EVAARA",
  secondaryCta: "View Rooms",
},
];

const SLIDE_DURATION = 6500;

const textContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

const textItem = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [index]);

  const slide = slides[index];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#071A17]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.85,
            ease: "easeInOut",
          }}
        >
          <motion.img
            src={slide.image}
            alt="EVAARA Resort in Coorg"
            className="h-full w-full object-cover"
            initial={{
              scale: 1.01,
            }}
            animate={{
              scale: 1.08,
            }}
            transition={{
              duration: SLIDE_DURATION / 1000,
              ease: "linear",
            }}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-[#071A17]/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071A17]/55 via-[#071A17]/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A17]/65 via-[#071A17]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#071A17]/25 to-transparent" />
      <div className="relative z-10 flex min-h-[100svh] w-full flex-col justify-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-14 pt-32 sm:pb-16 md:px-10 md:pb-20 lg:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={textContainer}
              initial="hidden"
              animate="visible"
              exit={{
                opacity: 0,

                transition: {
                  duration: 0.3,
                },
              }}
              className="max-w-3xl"
            >
              <motion.p
                variants={textItem}
                className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#D9C6A5]/90 sm:text-sm sm:tracking-[0.35em]"
              >
                {slide.meta}
              </motion.p>

              <motion.h1
                variants={textItem}
                className="max-w-4xl font-serif text-5xl leading-[1.02] text-[#F6F1E7] sm:text-6xl md:text-7xl lg:text-8xl"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                variants={textItem}
                className="mt-6 max-w-xl text-base leading-7 text-[#F6F1E7]/75 sm:text-lg sm:leading-8"
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                variants={textItem}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <a
                  href="/rooms"
                  className="rounded-full bg-[#B99A62] px-7 py-3.5 text-sm font-bold text-[#071A17] transition-all duration-300 hover:scale-[1.03] hover:bg-[#D9C6A5]"
                >
                  {slide.primaryCta}
                </a>
                <a
                  href="/about"
                  className="rounded-full border border-[#F6F1E7]/40 bg-[#071A17]/10 px-7 py-3.5 text-sm font-semibold text-[#F6F1E7] backdrop-blur-sm transition-colors duration-300 hover:border-[#D9C6A5]"
                >
                  {slide.secondaryCta}
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <a
              href="#home-intro"
              className="group flex w-fit items-center gap-3 text-xs text-[#F6F1E7]/75"
            >
              <span className="grid size-10 place-items-center rounded-full border border-[#F6F1E7]/40 text-sm transition-all duration-300 group-hover:border-[#D9C6A5] group-hover:bg-[#D9C6A5]/10">
                ↓
              </span>

              <span className="uppercase tracking-[0.25em]">Scroll Down</span>
            </a>

            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#F6F1E7]/80 md:gap-5">
              <span>Luxury Stays</span>

              <span className="h-4 w-px bg-[#D9C6A5]/50" />

              <span>Scenic Views</span>

              <span className="h-4 w-px bg-[#D9C6A5]/50" />

              <span>Unforgettable Experiences</span>
            </div>
          </div>
          {slides.length > 1 && (
            <div className="mt-8 flex items-center gap-2">
              {slides.map((slideItem, i) => (
                <button
                  key={`${slideItem.image}-${i}`}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{
                    width: i === index ? 34 : 10,

                    backgroundColor:
                      i === index ? "#F6F1E7" : "rgba(246, 241, 231, 0.4)",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
