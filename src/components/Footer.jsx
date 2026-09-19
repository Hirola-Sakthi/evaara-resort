import Logo from './Logo'
import { navItems } from '../data/siteData'
import footerImage from '../assets/images/generated-coorg-resort-hero.png'

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <path d="M7.5 2.75h9A4.75 4.75 0 0 1 21.25 7.5v9a4.75 4.75 0 0 1-4.75 4.75h-9A4.75 4.75 0 0 1 2.75 16.5v-9A4.75 4.75 0 0 1 7.5 2.75Zm0 1.5A3.25 3.25 0 0 0 4.25 7.5v9a3.25 3.25 0 0 0 3.25 3.25h9a3.25 3.25 0 0 0 3.25-3.25v-9a3.25 3.25 0 0 0-3.25-3.25h-9Zm4.5 3.5a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5Zm0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm4.65-2.45a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z" />
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <path d="M14.1 8.2V6.65c0-.74.37-1.1 1.18-1.1h1.37V2.9a18.26 18.26 0 0 0-2.26-.15c-2.24 0-3.77 1.36-3.77 3.86V8.2H8.08v2.96h2.54v7.59h3.48v-7.59h2.72l.43-2.96H14.1Z" />
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <path d="M21.35 7.15a3.01 3.01 0 0 0-.55-1.38 2.28 2.28 0 0 0-1.43-.78C17.37 4.7 12 4.7 12 4.7s-5.37 0-7.37.29a2.28 2.28 0 0 0-1.43.78 3.01 3.01 0 0 0-.55 1.38A31.3 31.3 0 0 0 2.36 12a31.3 31.3 0 0 0 .29 4.85 3.01 3.01 0 0 0 .55 1.38 2.28 2.28 0 0 0 1.43.78c2 .29 7.37.29 7.37.29s5.37 0 7.37-.29a2.28 2.28 0 0 0 1.43-.78 3.01 3.01 0 0 0 .55-1.38 31.3 31.3 0 0 0 .29-4.85 31.3 31.3 0 0 0-.29-4.85ZM10.08 15.15v-6.3L15.62 12l-5.54 3.15Z" />
    ),
  },
  {
    label: 'X',
    href: 'https://x.com',
    icon: (
      <path d="M14.2 10.28 21.15 2.5h-1.65l-6.04 6.75L8.64 2.5H3.08l7.29 10.18-7.29 8.16h1.65l6.38-7.14 5.1 7.14h5.56l-7.57-10.56Zm-2.26 2.53-.74-1.02-5.88-7.98h2.53l4.74 6.43.74 1.02 6.18 8.39h-2.53l-5.04-6.84Z" />
    ),
  },
]

function Footer() {
  const handleNavigate = (event, path) => {
    event.preventDefault()

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
  }

  return (
    <footer className="relative isolate overflow-hidden border-t border-[#B99A62]/30 px-6 py-10 text-[#f6f1e7] md:px-10 md:py-12">
      <img src={footerImage} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,26,23,0.94),rgba(16,44,38,0.88),rgba(7,26,23,0.82))]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#B99A62]/80 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.65fr_0.65fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-md font-serif text-3xl leading-tight">
              Nature is not a place to visit, it is home.
            </p>
            <p className="mt-3 max-w-md text-sm leading-6 text-[#f6f1e7]/70">
              A quiet luxury resort in Coorg surrounded by coffee estates, forest trails, and mist-filled valleys.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-9 place-items-center rounded-full border border-[#D9C6A5]/35 bg-[#102C26]/75 text-[#D9C6A5] transition hover:-translate-y-1 hover:border-[#B99A62] hover:bg-[#B99A62] hover:text-[#071A17]"
                >
                  <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D9C6A5]">Explore</p>
            <div className="mt-4 grid gap-2 text-sm font-semibold text-[#f6f1e7]/75">
              {navItems.slice(0, 4).map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(event) => handleNavigate(event, item.path)}
                  className="transition hover:text-[#D9C6A5]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D9C6A5]">Pages</p>
            <div className="mt-4 grid gap-2 text-sm font-semibold text-[#f6f1e7]/75">
              {navItems.slice(4).map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(event) => handleNavigate(event, item.path)}
                  className="transition hover:text-[#D9C6A5]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D9C6A5]">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-[#f6f1e7]/75">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#D9C6A5]/80">Location</p>
                <p className="mt-1">Coorg, Karnataka, India</p>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#D9C6A5]/80">Reservations</p>
                <p className="mt-1">+91 98765 43210</p>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#D9C6A5]/80">Email</p>
                <p className="mt-1">hello@evaararesort.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[#D9C6A5]/20 pt-5 text-xs text-[#f6f1e7]/55 md:flex-row md:items-center md:justify-between">
          <p>
            Copyright 2026 EVAARA Resort. All rights reserved. Designed by{' '}
            <a
              href="https://hirolainfotech.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[#D9C6A5] transition hover:text-[#f6f1e7]"
            >
              Hirola InfoTech Solutions Pvt Ltd.
            </a>
          </p>
          <p className="uppercase tracking-[0.28em]">Nature / Luxury / Coorg</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
