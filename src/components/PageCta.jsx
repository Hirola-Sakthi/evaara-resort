import { ArrowUpRight } from 'lucide-react'

function PageCta({ eyebrow = 'Plan Your Escape', title, text, image }) {
  return (
    <section className="bg-[#F3F0E8] px-6 py-8 text-[#F6F1E7] md:px-10 md:py-10 lg:px-16">
      <div data-scroll-reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[30px] border border-[#D9C6A5]/25 bg-[#071A17] shadow-[0_32px_90px_rgba(16,44,38,0.16)]">
          {image && (
            <img
              src={image}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-[#071A17]/68" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A17] via-[#071A17]/80 to-[#071A17]/18" />
          <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-[#D9C6A5]/55 via-[#D9C6A5]/20 to-transparent" />
          <div className="absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-[#D9C6A5]/18 to-[#D9C6A5]/45" />

          <div className="relative grid min-h-[360px] gap-10 px-7 py-10 sm:min-h-[430px] sm:px-10 md:min-h-[500px] md:px-12 md:py-10 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:px-14">
            <div>
              <p className="evaara-eyebrow evaara-eyebrow-light">
                {eyebrow}
              </p>
              <h2 className="evaara-title evaara-title-light mt-5 max-w-3xl text-4xl sm:text-5xl md:text-6xl">
                {title}
              </h2>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-sm leading-8 text-[#F6F1E7]/76 md:text-base">
                {text}
              </p>
              <a
                href="/contact"
                className="evaara-button group mt-8"
              >
                Enquire Now
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageCta
