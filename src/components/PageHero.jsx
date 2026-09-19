function PageHero({ title, subtitle, image }) {
  return (
    <section className="relative isolate flex min-h-[430px] items-end overflow-hidden bg-[#071A17] px-6 pb-12 pt-28 text-left sm:min-h-[500px] md:min-h-[560px] md:px-10 md:pb-16 lg:min-h-[620px] lg:px-16">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071A17]/82 via-[#071A17]/35 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071A17]/72 via-transparent to-transparent" />
      <div className="mx-auto w-full max-w-7xl">
        <p data-hero-reveal className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#D9C6A5] sm:tracking-[0.42em]">
          EVAARA Resort / Coorg
        </p>
        <h1 data-hero-reveal className="max-w-4xl font-serif text-4xl leading-[1.03] text-[#F6F1E7] sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p data-hero-reveal className="mt-5 max-w-xl text-sm leading-7 text-[#F6F1E7]/78 sm:text-base sm:leading-8">
          {subtitle}
        </p>
      </div>
    </section>
  )
}

export default PageHero
