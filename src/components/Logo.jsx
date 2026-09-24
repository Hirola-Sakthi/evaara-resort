import logo from '../assets/images/evaara-logo.png'

function Logo() {
  return (
    <a
      href="/"
      className="group flex shrink-0 items-center"
      aria-label="EVAARA Resort Home"
    >
      <img
        src={logo}
        alt="EVAARA Resort"
        className="
          block
          h-auto
          w-[125px]
          object-contain
          transition-transform
          duration-500
          group-hover:scale-[1.02]

          sm:w-[145px]
          md:w-[165px]
          lg:w-[185px]
          xl:w-[200px]
        "
      />
    </a>
  )
}

export default Logo