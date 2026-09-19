import { useState } from 'react'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

import resortImage from '../../../assets/images/generated-coorg-resort-hero.png'
import roomImage from '../../../assets/images/generated-coorg-room-view.png'
import trailImage from '../../../assets/images/generated-coorg-activity-trail.png'
import bannerImage from '../../../assets/images/main-banner.webp'
import bannerImageTwo from '../../../assets/images/main-banner-2.webp'
import bannerImageThree from '../../../assets/images/main-banner-3.webp'
import aboutImage from '../../../assets/images/about-section-img-1.webp'
import aboutImageTwo from '../../../assets/images/about-section-img-2.webp'

const galleryImages = [
  { src: resortImage, title: 'Coffee Estate Arrival', size: 'md:col-span-2 md:row-span-2' },
  { src: roomImage, title: 'Room With Hills', size: 'md:row-span-2' },
  { src: trailImage, title: 'Plantation Trail', size: '' },
  { src: bannerImage, title: 'Misty Morning', size: '' },
  { src: bannerImageTwo, title: 'Wild Green Edges', size: 'md:col-span-2' },
  { src: bannerImageThree, title: 'Forest Quiet', size: '' },
  { src: aboutImage, title: 'Nature Facing Stay', size: '' },
  { src: aboutImageTwo, title: 'Coorg Detail', size: 'md:col-span-2' },
]

function GalleryGrid() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <section className="bg-[#F3F0E8] px-6 py-8 text-[#102C26] md:px-10 md:py-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div data-scroll-reveal className="mb-6 grid gap-7 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="evaara-eyebrow mb-4">Resort Gallery</p>
            <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
              A quiet portfolio of place.
            </h2>
          </div>
          <p className="evaara-copy max-w-2xl self-end text-sm md:text-[15px]">
            Explore a visual rhythm of EVAARA: estate views, restful interiors,
            forest paths, and the natural textures of Coorg.
          </p>
        </div>

        <div className="grid auto-rows-[230px] gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[240px]">
        {galleryImages.map((image, index) => (
          <button
            data-scroll-card
            type="button"
            key={image.title}
            onClick={() => setActiveImage(image)}
            className={`group relative overflow-hidden rounded-[20px] text-left shadow-lg shadow-[#102C26]/10 ${image.size}`}
          >
            <img
              src={image.src}
              alt={image.title}
              loading={index > 1 ? 'lazy' : undefined}
              className="h-full w-full object-cover transition-transform duration-[1100ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A17]/62 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
            <span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#F6F1E7]/82">
              {image.title}
            </span>
          </button>
        ))}
        </div>
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-[#071A17]/86 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.title}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-[#D9C6A5]/35 text-[#F6F1E7] transition hover:bg-[#B99A62] hover:text-[#071A17]"
              aria-label="Close gallery image"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
            <motion.img
              src={activeImage.src}
              alt={activeImage.title}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[82vh] w-full max-w-6xl rounded-[22px] object-contain shadow-2xl shadow-black/35"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GalleryGrid
