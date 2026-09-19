function Logo({ dark = false }) {
  return (
    <a href="/" className="group flex items-center gap-3">
      <span
        className={`grid size-11 place-items-center rounded-full border text-xl shadow-[0_0_35px_rgba(212,180,131,0.18)] ${
          dark
            ? 'border-[#B99A62]/45 bg-[#F3F0E8] text-[#102C26]'
            : 'border-[#D9C6A5]/60 bg-[#071A17]/70 text-[#D9C6A5]'
        }`}
      >
        EV
      </span>
      <span className="leading-none">
        <span className={`block font-serif text-xl tracking-[0.28em] ${dark ? 'text-[#102C26]' : 'text-[#f6f1e7]'}`}>
          EVAARA
        </span>
        <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.45em] text-[#B99A62]">
          Resort
        </span>
      </span>
    </a>
  )
}

export default Logo
