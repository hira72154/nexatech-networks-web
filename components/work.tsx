'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/projects'
import { Laptop } from '@/components/laptop'
import { Reveal } from '@/components/reveal'

export function Work() {
  const wrap = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-card]')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scale: 0.95,
          ease: 'none',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top bottom',
            end: 'top top',
            scrub: 1,
          },
        })
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="work"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: 'var(--color-paper)' }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="text-xs font-medium tracking-[0.4em] uppercase"
              style={{ color: 'var(--color-coral)' }}
            >
              Selected Work
            </p>
            <h2
              className="mt-5 max-w-xl font-sans text-4xl font-light text-balance md:text-6xl"
              style={{ color: 'var(--color-black)' }}
            >
              Six products,{' '}
              <span className="font-serif italic " style={{ color: 'var(--color-coral)' }}>built with skill.</span>
            </h2>
          </div>
          <p
            className="max-w-xs text-base leading-relaxed"
            style={{ color: 'var(--color-muted)' }}
          >
            A selection of recent engagements across logistics, healthcare,
            commerce, fintech, AI and sustainability.
          </p>
        </Reveal>
      </div>

      <div ref={wrap} className="mx-auto mt-16 max-w-7xl px-5 md:px-8">
        {projects.map((p, i) => (
          <div
            key={p.slug}
            className="sticky top-16 flex min-h-[70vh] items-center py-4 md:min-h-screen md:top-0"
            style={{ zIndex: i + 1 }}
          >
            <article
              data-card
              className="grid w-full origin-top grid-cols-1 gap-8 overflow-hidden rounded-3xl border-2 p-6 md:grid-cols-2 md:items-center md:gap-12 md:p-12"
              style={{
                backgroundColor: 'var(--color-coral)',
                borderColor: '#000000',
                boxShadow: '0 40px 120px -40px rgba(249,92,75,0.45), inset 0 1px 0 rgba(255,255,255,0.15)',
                willChange: 'transform',
              }}
            >
              <div className="flex flex-col">
                <div
                  className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  <span className="tabular-nums">{p.index}</span>
                  <span
                    className="h-px w-8"
                    style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
                  />
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {p.category} · {p.year}
                  </span>
                </div>
                <h3
                  className="mt-5 font-sans text-4xl font-light md:text-5xl"
                  style={{ color: '#ffffff' }}
                >
                  {p.title}
                </h3>
                <p
                  className="mt-4 max-w-md text-base leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  {p.summary}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/work/${p.slug}`}
                    data-cursor="View"
                    className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
                    style={{
                      backgroundColor: '#000000',
                      color: '#ffffff',
                    }}
                  >
                    View Case Study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  {p.website && (
                    <a
                      href={p.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="Live"
                      className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3.5 text-sm font-medium text-white transition-all hover:bg-white hover:text-black hover:-translate-y-0.5"
                    >
                      Visit Website
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>

              <Link
                href={`/work/${p.slug}`}
                data-cursor="View"
                className="block"
              >
                <Laptop src={p.image} alt={`${p.title} interface`} priority={i === 0} />
              </Link>
            </article>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-20 flex max-w-7xl justify-center px-5 md:px-8">
        <Link
          href="/projects"
          data-cursor="View All"
          className="group inline-flex items-center gap-3 rounded-full border px-8 py-4 text-sm font-medium transition-all duration-300"
          style={{
            borderColor: 'color-mix(in oklab, #000000 20%, transparent)',
            color: 'var(--color-black)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-coral)'
              ; (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-coral)'
              ; (e.currentTarget as HTMLElement).style.color = '#ffffff'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
              ; (e.currentTarget as HTMLElement).style.borderColor = 'color-mix(in oklab, #000000 20%, transparent)'
              ; (e.currentTarget as HTMLElement).style.color = 'var(--color-black)'
          }}
        >
          View All Projects
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  )
}
