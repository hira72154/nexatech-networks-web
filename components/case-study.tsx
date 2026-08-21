'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { Reveal } from '@/components/reveal'
import { Laptop } from '@/components/laptop'
import { useContact } from '@/components/contact-modal'

export function CaseStudy({
  project,
  prev,
  next,
}: {
  project: Project
  prev: Project
  next: Project
}) {
  return <CaseStudyInner project={project} prev={prev} next={next} />
}

function CaseStudyInner({
  project,
  prev,
  next,
}: {
  project: Project
  prev: Project
  next: Project
}) {
  const heroRef = useRef<HTMLDivElement>(null)
  const { open } = useContact()

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    gsap.registerPlugin(ScrollTrigger)

    const items = el.querySelectorAll('[data-h]')

    if (reduced) {
      gsap.set(items, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      // Text reveal
      gsap.fromTo(
        '[data-text-reveal]',
        { y: '110%' },
        { y: '0%', duration: 1.1, ease: 'expo.out', stagger: 0.1, delay: 0.1 }
      )

      // Hero elements
      gsap.fromTo(
        items,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.1, ease: 'power4.out', stagger: 0.1, delay: 0.4 },
      )

      // Media card scale
      gsap.fromTo(
        '[data-media-card]',
        { scale: 0.92, opacity: 0, y: 40 },
        {
          scale: 1, opacity: 1, y: 0, duration: 1.4, ease: 'expo.out',
          scrollTrigger: { trigger: '[data-media-card]', start: 'top 85%' }
        }
      )

      // Feature cards stacking
      const featureCards = gsap.utils.toArray<HTMLElement>('.feature-card')
      featureCards.forEach((card, index) => {
        if (index === featureCards.length - 1) return
        const nextCard = featureCards[index + 1]
        gsap.to(card, {
          scale: 0.95 - (featureCards.length - index) * 0.01,
          opacity: 0.85,
          scrollTrigger: {
            trigger: nextCard,
            start: 'top bottom',
            end: 'top top+=15%',
            scrub: true,
          }
        })
      })

      // Number counters
      const counters = document.querySelectorAll('[data-counter]')
      counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-value') || '0')
        const suffix = counter.getAttribute('data-suffix') || ''
        const prefix = counter.getAttribute('data-prefix') || ''

        gsap.fromTo(counter, { innerHTML: 0 }, {
          innerHTML: target,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: { trigger: counter, start: 'top 85%' },
          snap: { innerHTML: target % 1 === 0 ? 1 : 0.1 },
          onUpdate: function () {
            counter.innerHTML = prefix + Number((this.targets()[0] as HTMLElement).innerHTML).toFixed(target % 1 === 0 ? 0 : 1) + suffix
          }
        })
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={heroRef} style={{ backgroundColor: 'var(--color-paper)' }}>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-32 pb-0 md:pt-40 flex items-center min-h-screen"
        style={{ backgroundColor: 'var(--color-paper)' }}
      >
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.035]" />
        <div className="noise pointer-events-none absolute inset-0 opacity-[0.025]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center pb-24">

          {/* Left text */}
          <div className="flex flex-col items-start text-left">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                data-cursor
                data-h
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors"
                style={{
                  borderColor: 'color-mix(in oklab, #000000 12%, transparent)',
                  color: 'var(--color-black)',
                  backgroundColor: 'color-mix(in oklab, #000000 5%, transparent)',
                }}
              >
                <ArrowLeft className="h-3.5 w-3.5" /> All Work
              </Link>
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  data-h
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest transition-transform hover:scale-105"
                  style={{ backgroundColor: 'var(--color-coral)', color: '#ffffff' }}
                >
                  Visit Website <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>

            <h1 className="mt-8 text-balance">
              <span className="block overflow-hidden pb-3">
                <span
                  data-text-reveal
                  className="block font-sans font-black uppercase tracking-tighter leading-none"
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 7rem)',
                    color: 'var(--color-black)',
                  }}
                >
                  {project.title}
                </span>
              </span>
            </h1>

            <div className="mt-5 max-w-xl">
              <span className="block overflow-hidden">
                <span
                  data-text-reveal
                  className="block text-lg leading-relaxed font-medium md:text-xl"
                  style={{ color: 'var(--color-coral)' }}
                >
                  {project.summary}
                </span>
              </span>
            </div>

            <div className="mt-5 max-w-xl">
              <span className="block overflow-hidden">
                <span
                  data-text-reveal
                  className="block text-base leading-relaxed"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {project.overview}
                </span>
              </span>
            </div>

            {/* Meta row */}
            <div
              data-h
              className="mt-10 flex flex-wrap gap-8 text-sm font-medium uppercase tracking-widest"
              style={{ color: 'var(--color-black)' }}
            >
              {[
                { label: 'Client', value: project.title },
                { label: 'Year', value: project.year },
                { label: 'Role', value: project.category },
              ].map(({ label, value }) => (
                <span key={label} className="flex flex-col gap-1">
                  <span
                    className="text-[10px] font-bold tracking-[0.3em]"
                    style={{ color: 'var(--color-coral)' }}
                  >
                    {label}
                  </span>
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Laptop with coral shape underneath */}
          <div data-media-card className="relative w-full">
            {/* Orange coral blob shape behind laptop */}
            <div
              className="absolute inset-x-[-8%] bottom-[-12%] top-[18%] rounded-[2rem] md:rounded-[3rem] -z-10"
              style={{
                backgroundColor: 'var(--color-coral)',
                transform: 'rotate(-2deg)',
              }}
            />
            {/* Secondary stone shape for depth */}
            <div
              className="absolute inset-x-[-4%] bottom-[-8%] top-[22%] rounded-[2rem] md:rounded-[3rem] -z-10"
              style={{
                backgroundColor: 'color-mix(in oklab, var(--color-coral) 55%, #000000)',
                transform: 'rotate(1deg)',
              }}
            />
            <div className="relative z-10 px-2 md:px-4">
              <Laptop src={project.image} alt={`${project.title} interface`} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ── Technology Stack ── */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-stone)' }}>
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="text-center">
            <span
              className="text-xs font-bold tracking-[0.3em] uppercase"
              style={{ color: 'var(--color-coral)' }}
            >
              Technology Stack
            </span>
            <h2
              className="mt-4 font-sans text-4xl font-light md:text-5xl"
              style={{ color: 'var(--color-black)' }}
            >
              Built with precision
            </h2>
          </Reveal>

          <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
            {project.stack.map((t) => (
              <span
                key={t}
                className="flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-1"
                style={{
                  borderColor: 'color-mix(in oklab, #000000 12%, transparent)',
                  backgroundColor: 'var(--color-paper)',
                  color: 'var(--color-black)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                }}
              >
                <TechLogo name={t} />
                {t}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 md:py-32 relative" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="mx-auto max-w-5xl px-5 md:px-8 relative z-10">
          <Reveal className="text-center mb-24">
            <span
              className="text-xs font-bold tracking-[0.3em] uppercase"
              style={{ color: 'var(--color-coral)' }}
            >
              Features
            </span>
            <h2
              className="mt-4 font-sans text-4xl font-light md:text-5xl"
              style={{ color: 'var(--color-black)' }}
            >
              What we shipped
            </h2>
          </Reveal>

          <div className="flex flex-col relative pb-32">
            {project.features.map((f, i) => (
              <div
                key={f}
                className="feature-card sticky w-full flex flex-col justify-between rounded-[2.5rem] p-10 md:p-16 min-h-[350px] md:min-h-[450px] mb-12 last:mb-0 origin-top"
                style={{
                  top: `calc(15vh + ${i * 20}px)`,
                  zIndex: i,
                  backgroundColor: i % 2 === 0 ? '#000000' : 'var(--color-coral)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                }}
              >
                <div className="absolute top-8 right-10 md:top-12 md:right-16">
                  <span
                    className="font-sans font-black leading-none"
                    style={{
                      fontSize: 'clamp(5rem, 14vw, 10rem)',
                      color: 'rgba(255,255,255,0.07)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="mt-auto max-w-2xl relative z-10">
                  <span
                    className="text-3xl md:text-5xl font-medium leading-tight"
                    style={{ color: '#ffffff' }}
                  >
                    {f}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 text-center" style={{ backgroundColor: 'var(--color-black)' }}>
        <Reveal className="mx-auto max-w-2xl px-5">
          <h2
            className="font-serif text-5xl leading-tight md:text-7xl"
            style={{ color: 'var(--color-paper)' }}
          >
            Want results like these?
          </h2>
          <button
            onClick={open}
            data-cursor
            className="group mt-12 inline-flex items-center gap-2 rounded-full px-10 py-5 text-sm font-medium uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_8px_30px_rgba(249,92,75,0.4)]"
            style={{ backgroundColor: 'var(--color-coral)', color: '#ffffff' }}
          >
            Start Your Project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </Reveal>
      </section>

      {/* ── Prev / Next ── */}
      <section
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ backgroundColor: 'var(--color-paper)' }}
      >
        <NavCard project={prev} direction="prev" />
        <NavCard project={next} direction="next" />
      </section>
    </main>
  )
}

function NavCard({ project, direction }: { project: Project; direction: 'prev' | 'next' }) {
  const isNext = direction === 'next'
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="View"
      className={`group flex flex-col gap-6 p-12 transition-colors md:p-20 ${isNext ? 'md:items-end md:text-right md:border-l' : ''}`}
      style={{ borderColor: 'var(--color-stone)' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-stone)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
      }}
    >
      <span
        className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-colors group-hover:text-[var(--color-coral)]"
        style={{ color: 'var(--color-muted)' }}
      >
        {!isNext && <ArrowLeft className="h-4 w-4" />}
        {isNext ? 'Next Project' : 'Previous Project'}
        {isNext && <ArrowRight className="h-4 w-4" />}
      </span>
      <span
        className="font-sans text-5xl font-light transition-transform group-hover:translate-x-2 md:text-6xl"
        style={{ color: 'var(--color-black)' }}
      >
        {project.title}
      </span>
    </Link>
  )
}

function TechLogo({ name }: { name: string }) {
  const getSlug = (name: string) => {
    const lower = name.toLowerCase()
    if (lower.includes('next')) return 'nextdotjs'
    if (lower.includes('node')) return 'nodedotjs'
    if (lower.includes('postgres')) return 'postgresql'
    if (lower.includes('react')) return 'react'
    if (lower.includes('aws')) return 'amazonaws'
    if (lower.includes('tailwind')) return 'tailwindcss'
    if (lower.includes('websocket')) return 'socketdotio'
    if (lower.includes('ai sdk')) return 'openai'
    return lower.replace(/[^a-z0-9]/g, '')
  }

  const slug = getSlug(name)
  const url = `https://cdn.simpleicons.org/${slug}/F95C4B`

  return (
    <img
      src={url}
      alt={`${name} logo`}
      className="h-4 w-4 object-contain opacity-80"
      onError={(e) => { e.currentTarget.style.display = 'none' }}
    />
  )
}
