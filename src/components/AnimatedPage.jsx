import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function AnimatedPage({ children, routeKey }) {
  const scope = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from('[data-hero-reveal]', {
        y: 34,
        autoAlpha: 0,
        duration: 1.1,
        ease: 'power3.out',
        stagger: 0.12,
      })

      gsap.utils.toArray('[data-scroll-reveal]').forEach((element) => {
        gsap.from(element, {
          y: 44,
          autoAlpha: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 82%',
          },
        })
      })

      gsap.utils.toArray('[data-scroll-card]').forEach((element, index) => {
        gsap.from(element, {
          y: 38,
          autoAlpha: 0,
          duration: 0.75,
          delay: (index % 3) * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 86%',
          },
        })
      })
    }, scope)

    return () => context.revert()
  }, [routeKey])

  return <div ref={scope}>{children}</div>
}

export default AnimatedPage
