'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const words = [
  { text: 'Skill.', x: -6 },
  { text: 'Solution.', x: 6 },
  { text: 'Scale.', x: -3 },
]

export function Statement() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-word]').forEach((word, i) => {
        gsap.fromTo(
          word,
          { xPercent: i % 2 === 0 ? -8 : 8 },
          {
            xPercent: i % 2 === 0 ? 8 : -8,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-36"
      style={{ backgroundColor: 'var(--color-paper)' }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p
          className="mb-10 text-center text-xs font-medium tracking-[0.4em] uppercase"
          style={{ color: 'var(--color-coral)' }}
        >
          Our Operating Principle
        </p>
        <div className="flex flex-col items-center">
          {words.map((w, i) => (
            <span
              key={w.text}
              data-word
              className="font-sans text-[18vw] leading-[0.9] font-light md:text-[13vw]"
              style={{
                color: i === 1 ? 'var(--color-coral)' : 'var(--color-black)',
                fontStyle: i === 1 ? 'italic' : 'normal',
                fontFamily: i === 1 ? 'var(--font-serif)' : undefined,
              }}
            >
              {w.text}
            </span>
          ))}
        </div>
        <p
          className="mx-auto mt-12 max-w-xl text-center text-base leading-relaxed md:text-lg"
          style={{ color: 'var(--color-muted)' }}
        >
          Three words we design, build and scale by. Everything we ship is
          measured against them.
        </p>
      </div>
    </section>
  )
}
