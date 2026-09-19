import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

import imageOne from '../../../assets/images/about-section-img.webp'
import imageTwo from '../../../assets/images/main-banner.webp'
import imageThree from '../../../assets/images/about-section-img-1.webp'
import imageFour from '../../../assets/images/main-banner-3.webp'

const galleryImages = [
  { src: imageOne, alt: 'EVAARA resort architecture framed by greenery', className: 'md:col-span-2 md:row-span-2' },
  { src: imageTwo, alt: 'Misty Coorg landscape at EVAARA Resort', className: '' },
  { src: imageThree, alt: 'Nature-facing stay at EVAARA Resort', className: '' },
  { src: imageFour, alt: 'Forest view from EVAARA Resort', className: 'md:col-span-2' },
]

function GalleryPreview() {
  return (
    <section className="overflow-hidden bg-[#F3F0E8] px-5 py-20 text-[#102C26] sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="evaara-eyebrow mb-4">Gallery Preview</p>
            <h2 className="evaara-title max-w-2xl text-4xl sm:text-5xl md:text-6xl">
              Scenes from a quieter luxury.
            </h2>
          </motion.div>
          <motion.a
            href="/gallery"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.45 }}
            className="evaara-link group"
          >
            View Gallery
            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>
        </div>

        <div className="grid auto-rows-[230px] gap-4 md:grid-cols-4 md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.a
              key={image.alt}
              href="/gallery"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-[18px] ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A17]/55 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <span className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#F6F1E7]/80">
                {String(index + 1).padStart(2, '0')}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GalleryPreview
