import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import BookingModal from './BookingModal'
import Logo from './Logo'
import { navItems } from '../data/siteData'

function Header({ currentPath }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const isActive = (item) =>
    currentPath === item.path ||
    (item.path === '/blog' && currentPath.startsWith('/blog/')) ||
    (item.path === '/rooms' && currentPath.startsWith('/rooms/'))

  const handleNavigate = (event, path) => {
    event.preventDefault()
    setIsMenuOpen(false)

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
  }

  const handleBookNow = () => {
    setIsMenuOpen(false)
    setIsBookingOpen(true)
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        setIsBookingOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    document.body.style.overflow = isMenuOpen || isBookingOpen ? 'hidden' : ''
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen, isBookingOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px-5 py-3 transition-all duration-500 sm:py-4 md:px-10 ${
          isScrolled ? 'border-b border-[#B99A62]/25 bg-[#F3F0E8]/92 shadow-xl shadow-[#102C26]/10 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
          <Logo />
          <nav className={`hidden items-center gap-8 text-[15px] font-semibold lg:flex ${isScrolled ? 'text-[#102C26]/85' : 'text-[#f6f1e7]/90'}`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                onClick={(event) => handleNavigate(event, item.path)}
                className={`transition hover:text-[#B99A62] ${
                  isActive(item) ? 'text-[#B99A62]' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleBookNow}
              className={`hidden cursor-pointer rounded-full border px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] transition sm:inline-flex ${
                isScrolled
                  ? 'border-[#102C26]/25 bg-[#102C26] text-[#F3F0E8] hover:bg-[#B99A62] hover:text-[#071A17]'
                  : 'border-[#D9C6A5]/70 bg-[#071A17]/55 text-[#f6f1e7] hover:bg-[#B99A62] hover:text-[#071A17]'
              }`}
            >
              Book Now
            </button>
            <button
              type="button"
              aria-label="Open menu"
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
              className={`grid size-11 place-items-center rounded-full border transition lg:hidden ${
                isScrolled
                  ? 'border-[#102C26]/20 bg-[#102C26] text-[#F3F0E8]'
                  : 'border-[#D9C6A5]/65 bg-[#071A17]/45 text-[#F6F1E7] backdrop-blur-md'
              }`}
            >
              <Menu size={21} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <button
          type="button"
          aria-label="Close menu overlay"
          aria-hidden={!isMenuOpen}
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => setIsMenuOpen(false)}
          className={`fixed inset-0 z-[60] bg-[#071A17]/62 backdrop-blur-sm transition duration-300 lg:hidden ${
            isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        />

        <aside
          id="mobile-navigation"
          aria-hidden={!isMenuOpen}
          className={`fixed right-0 top-0 z-[70] flex h-dvh w-[min(88vw,390px)] flex-col bg-[#F3F0E8] px-6 py-6 text-[#102C26] shadow-2xl shadow-[#071A17]/28 transition-transform duration-500 ease-out lg:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <Logo dark />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="grid size-11 place-items-center rounded-full text-[#102C26] transition hover:bg-[#D9C6A5]/28"
            >
              <X size={20} strokeWidth={1.7} />
            </button>
          </div>

          <nav className="mt-10 grid gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                onClick={(event) => handleNavigate(event, item.path)}
                className={`w-fit text-lg font-semibold transition hover:text-[#B99A62] ${
                  isActive(item)
                    ? 'text-[#B99A62]'
                    : 'text-[#102C26]/78'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto border-t border-[#102C26]/10 pt-6">
            <p className="text-[10px] font-bold uppercase leading-5 tracking-[0.28em] text-[#536B50]">
              Premium nature stay in Coorg
            </p>
            <button
              type="button"
              onClick={handleBookNow}
              className="mt-5 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-[#102C26] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#F6F1E7] transition hover:bg-[#B99A62] hover:text-[#071A17]"
            >
              Book Now
            </button>
          </div>
        </aside>
      </header>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}

export default Header
