import { useEffect, useState } from 'react'
import Logo from './Logo'
import { navItems } from '../data/siteData'

function Header({ currentPath }) {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleNavigate = (event, path) => {
    event.preventDefault()

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-5 py-4 transition-all duration-500 md:px-10 ${
        isScrolled ? 'border-b border-[#B99A62]/25 bg-[#F3F0E8]/92 shadow-xl shadow-[#102C26]/10 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
        <Logo dark={isScrolled} />
        <nav className={`hidden items-center gap-8 text-[15px] font-semibold lg:flex ${isScrolled ? 'text-[#102C26]/85' : 'text-[#f6f1e7]/90'}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              onClick={(event) => handleNavigate(event, item.path)}
              className={`transition hover:text-[#B99A62] ${
                currentPath === item.path ||
                (item.path === '/blog' && currentPath.startsWith('/blog/')) ||
                (item.path === '/rooms' && currentPath.startsWith('/rooms/')) ? 'text-[#B99A62]' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="/contact"
          onClick={(event) => handleNavigate(event, '/contact')}
          className={`rounded-full border px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] transition ${
            isScrolled
              ? 'border-[#102C26]/25 bg-[#102C26] text-[#F3F0E8] hover:bg-[#B99A62] hover:text-[#071A17]'
              : 'border-[#D9C6A5]/70 bg-[#071A17]/55 text-[#f6f1e7] hover:bg-[#B99A62] hover:text-[#071A17]'
          }`}
        >
          Contact Us
        </a>
      </div>
    </header>
  )
}

export default Header
