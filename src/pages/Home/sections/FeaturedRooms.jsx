import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import rooms from '../../../data/rooms.json';
import { getRoomImage } from '../../../data/roomImages';

const featuredRooms = rooms.map((room) => ({
  slug: room.slug,
  title: room.title,
  description: room.subtitle,
  accommodation: room.category,
  guests: `${room.stats.find((stat) => stat.label === 'Guests')?.value || '2'} Guests`,
  space: room.stats.find((stat) => stat.label === 'Room Size')?.value || '350 sq.ft',
  image: getRoomImage(room.image),
}));

const imageVariants = {
  initial: {
    opacity: 0,
    scale: 1.08,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
      scale: {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  exit: {
    opacity: 0,
    scale: 1.03,
    transition: {
      duration: 0.55,
      ease: 'easeInOut',
    },
  },
};

const contentVariants = {
  initial: {
    opacity: 0,
    y: 22,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.35,
      ease: 'easeInOut',
    },
  },
};

const detailsContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.1,
    },
  },
};

const detailItem = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FeaturedRooms() {
  const [activeRoom, setActiveRoom] = useState(0);

  const currentRoom = featuredRooms[activeRoom];

  const showPreviousRoom = () => {
    setActiveRoom((previous) =>
      previous === 0 ? featuredRooms.length - 1 : previous - 1,
    );
  };

  const showNextRoom = () => {
    setActiveRoom((previous) =>
      previous === featuredRooms.length - 1 ? 0 : previous + 1,
    );
  };

  return (
    <section className="overflow-hidden bg-[#F3F0E8] pb-8 pt-4 sm:pb-10 sm:pt-5 md:pb-8 md:pt-5">
      <div className="mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-9 flex flex-col gap-6 md:mb-11 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-[700px]">
            <p className="evaara-eyebrow mb-4">Stay at EVAARA</p>

            <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
              A stay that feels
              <br />
              <span className="text-[#536B50]">
                like coming home.
              </span>
            </h2>

            <p className="evaara-copy mt-5 max-w-[500px] text-sm">
              Thoughtfully designed spaces that invite you to disconnect from
              the ordinary and reconnect with nature.
            </p>
          </div>

          <motion.a
            href="/rooms"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
            className="evaara-text-link group"
          >
            Explore all rooms

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-[1.22fr_0.78fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[360px] overflow-hidden rounded-[22px] sm:min-h-[430px] lg:min-h-[500px]"
          >
            <AnimatePresence initial={false} mode="sync">
              <motion.img
                key={currentRoom.image}
                src={currentRoom.image}
                alt={currentRoom.title}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-7 sm:left-7 sm:right-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoom.title}
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/80">
                    <span>{currentRoom.accommodation}</span>

                    <span className="h-1 w-1 rounded-full bg-[#B99A62]" />

                    <span>{currentRoom.guests}</span>

                    <span className="h-1 w-1 rounded-full bg-[#B99A62]" />

                    <span>{currentRoom.space}</span>
                  </div>

                  <h3 className="max-w-[500px] text-3xl font-light tracking-[-0.04em] sm:text-4xl md:text-5xl">
                    {currentRoom.title}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex min-h-[360px] flex-col justify-between rounded-[22px] bg-white p-6 sm:min-h-[430px] sm:p-8 lg:min-h-[500px] lg:p-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRoom.title}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#B99A62]">
                  Your private retreat
                </p>

                <h3 className="max-w-[360px] text-2xl font-light leading-tight tracking-[-0.04em] text-[#1E3025] sm:text-3xl">
                  {currentRoom.title}
                </h3>

                <p className="mt-5 max-w-[370px] text-sm leading-7 text-[#536B50]">
                  {currentRoom.description}
                </p>

                <motion.div
                  variants={detailsContainer}
                  initial="hidden"
                  animate="visible"
                  className="mt-8 border-t border-[#1E3025]/10"
                >
                  <motion.div
                    variants={detailItem}
                    className="flex items-center justify-between border-b border-[#1E3025]/10 py-3"
                  >
                    <span className="text-xs text-[#536B50]">
                      Accommodation
                    </span>

                    <span className="text-xs text-[#1E3025]">
                      {currentRoom.accommodation}
                    </span>
                  </motion.div>

                  <motion.div
                    variants={detailItem}
                    className="flex items-center justify-between border-b border-[#1E3025]/10 py-3"
                  >
                    <span className="text-xs text-[#536B50]">Guests</span>

                    <span className="text-xs text-[#1E3025]">
                      {currentRoom.guests}
                    </span>
                  </motion.div>

                  <motion.div
                    variants={detailItem}
                    className="flex items-center justify-between border-b border-[#1E3025]/10 py-3"
                  >
                    <span className="text-xs text-[#536B50]">Space</span>

                    <span className="text-xs text-[#1E3025]">
                      {currentRoom.space}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between gap-4">
              <motion.a
                href={`/rooms/${currentRoom.slug}`}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                className="evaara-link group"
              >
                Discover more

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>
              <div className="flex items-center gap-2">
                <motion.button
                  type="button"
                  onClick={showPreviousRoom}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1E3025]/15 text-[#1E3025] transition-colors duration-300 hover:border-[#B99A62] hover:bg-[#B99A62] hover:text-white"
                  aria-label="Previous room"
                >
                  <ChevronLeft size={16} strokeWidth={1.5} />
                </motion.button>

                <motion.button
                  type="button"
                  onClick={showNextRoom}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1E3025]/15 text-[#1E3025] transition-colors duration-300 hover:border-[#B99A62] hover:bg-[#B99A62] hover:text-white"
                  aria-label="Next room"
                >
                  <ChevronRight size={16} strokeWidth={1.5} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {featuredRooms.map((room, index) => (
              <motion.button
                key={room.title}
                type="button"
                onClick={() => setActiveRoom(index)}
                aria-label={`Show ${room.title}`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-5 items-center justify-center"
              >
                <motion.span
                  animate={{
                    width: activeRoom === index ? 34 : 10,
                    opacity: activeRoom === index ? 1 : 0.35,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block h-[2px] rounded-full bg-[#B99A62]"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
