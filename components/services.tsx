'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const services = [
  {
    n: '01',
    title: 'Design',
    desc: 'Brand, product and interface design with an editorial sensibility. We make complex products feel calm and considered.',
    tags: ['Brand', 'Product', 'UI/UX', 'Design Systems'],
  },
  {
    n: '02',
    title: 'Development',
    desc: 'Robust, scalable engineering across web and mobile. Fast, accessible and built to last.',
    tags: ['Web', 'Mobile', 'APIs', 'Performance'],
  },
  {
    n: '03',
    title: 'AI & Data',
    desc: 'Applied AI and data products that turn information into decisions people trust.',
    tags: ['LLMs', 'RAG', 'Analytics', 'Pipelines'],
  },
  {
    n: '04',
    title: 'Cloud & DevOps',
    desc: 'Reliable infrastructure, automation and observability so your product stays fast and available.',
    tags: ['AWS', 'CI/CD', 'Observability', 'Scale'],
  },
  {
    n: '05',
    title: 'Digital Marketing',
    desc: 'Growth engineering and content that compounds — measured, honest and on-brand.',
    tags: ['SEO', 'Content', 'Analytics', 'Growth'],
  },
]

export function Services() {
  const section = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = section.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('[data-panel]')
      panels.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: () => `top+=${(i / panels.length) * el.offsetHeight - window.innerHeight / 2} center`,
          end: () => `top+=${((i + 1) / panels.length) * el.offsetHeight - window.innerHeight / 2} center`,
          onToggle: (self) => self.isActive && setActive(i),
        })
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services"
      ref={section}
      className="relative"
      style={{ backgroundColor: 'var(--color-stone)' }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-32">
        {/* sticky left column */}
        <div className="md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center">
          <p
            className="text-xs font-medium tracking-[0.4em] uppercase"
            style={{ color: 'var(--color-coral)' }}
          >
            What We Do
          </p>
          <h2
            className="mt-5 font-sans text-4xl leading-tight font-light md:text-5xl"
            style={{ color: 'var(--color-black)' }}
          >
            Five disciplines,
            <br />
            <span className="font-serif italic" style={{ color: 'var(--color-coral)' }}>one standard.</span>
          </h2>
          <p
            className="mt-6 max-w-md text-base leading-relaxed"
            style={{ color: 'var(--color-muted)' }}
          >
            We bring specialised craft to every layer of your product — and we
            hold all of it to the same bar: skill.
          </p>

          <div className="mt-10 hidden gap-1.5 md:flex">
            {services.map((s, i) => (
              <span
                key={s.n}
                className="h-1 flex-1 rounded-full transition-all duration-500"
                style={{
                  backgroundColor:
                    i === active
                      ? 'var(--color-coral)'
                      : 'color-mix(in oklab, #000000 15%, transparent)',
                }}
              />
            ))}
          </div>
        </div>

        {/* right column list */}
        <div className="flex flex-col">
          {services.map((s, i) => (
            <div
              key={s.n}
              data-panel
              className="border-t py-8 transition-opacity duration-500 md:py-12"
              style={{
                borderColor: 'color-mix(in oklab, #000000 12%, transparent)',
                opacity: i === active ? 1 : 0.4,
              }}
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="font-sans text-sm tabular-nums"
                  style={{ color: 'var(--color-coral)' }}
                >
                  {s.n}
                </span>
                <h3
                  className="font-sans text-3xl font-light md:text-4xl"
                  style={{ color: 'var(--color-black)' }}
                >
                  {s.title}
                </h3>
              </div>
              <p
                className="mt-4 max-w-lg pl-9 text-base leading-relaxed"
                style={{ color: 'var(--color-muted)' }}
              >
                {s.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 pl-9">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-3 py-1 text-xs"
                    style={{
                      borderColor: 'color-mix(in oklab, #000000 18%, transparent)',
                      color: 'var(--color-muted)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
