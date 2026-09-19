function PageHero({ title, subtitle, image }) {
  return (
    <section className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-[#071A17] px-6 pb-16 pt-32 text-left md:min-h-[620px] md:px-10 lg:px-16">
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
        <p data-hero-reveal className="mb-4 text-[10px] font-bold uppercase tracking-[0.42em] text-[#D9C6A5]">
          EVAARA Resort / Coorg
        </p>
        <h1 data-hero-reveal className="max-w-4xl font-serif text-5xl leading-[1.02] text-[#F6F1E7] md:text-7xl">
          {title}
        </h1>
        <p data-hero-reveal className="mt-5 max-w-xl text-base leading-8 text-[#F6F1E7]/78">
          {subtitle}
        </p>
      </div>
    </section>
  )
}

export default PageHero
