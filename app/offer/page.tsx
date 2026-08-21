'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

// ── Data ──────────────────────────────────────────────────────────────
const services = [
  {
    n: '01',
    title: 'Web Development',
    short: 'Full-stack applications',
    desc: 'Custom websites and web apps built with modern frameworks. Optimised for performance, SEO, and scale from day one.',
    tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    bg: '#000000',
    text: '#F6F4F1',
    accent: '#F95C4B',
    muted: 'rgba(246,244,241,0.55)',
  },
  {
    n: '02',
    title: 'Mobile Apps',
    short: 'iOS & Android',
    desc: 'Native and cross-platform mobile applications that engage users and drive business objectives — App Store to Play Store.',
    tags: ['React Native', 'Expo', 'Swift', 'Kotlin', 'Firebase'],
    bg: '#F95C4B',
    text: '#000000',
    accent: '#000000',
    muted: 'rgba(0,0,0,0.6)',
  },
  {
    n: '03',
    title: 'AI & Automation',
    short: 'Intelligence built in',
    desc: 'LLM integrations, RAG pipelines, custom agents, and automation workflows that replace hours of repetitive work.',
    tags: ['OpenAI', 'LangChain', 'Python', 'Pinecone', 'Agents'],
    bg: '#E4DED2',
    text: '#000000',
    accent: '#F95C4B',
    muted: 'rgba(0,0,0,0.55)',
  },
  {
    n: '04',
    title: 'Cloud Infrastructure',
    short: 'Scalable architecture',
    desc: 'Cost-optimised cloud infrastructure on AWS, GCP, or Azure — containers, CI/CD, monitoring, and everything between.',
    tags: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
    bg: '#000000',
    text: '#F6F4F1',
    accent: '#F95C4B',
    muted: 'rgba(246,244,241,0.55)',
  },
  {
    n: '05',
    title: 'UI / UX Design',
    short: 'Craft that converts',
    desc: 'Research-led design that combines craft with strategy. Interfaces users love through prototyping, systems, and iteration.',
    tags: ['Figma', 'Prototyping', 'Design Systems', 'User Research', 'Motion'],
    bg: '#F95C4B',
    text: '#000000',
    accent: '#000000',
    muted: 'rgba(0,0,0,0.6)',
  },
  {
    n: '06',
    title: 'Analytics & Growth',
    short: 'Data-driven decisions',
    desc: 'We set up tracking, build dashboards, and interpret signals — so every decision is based on truth, not gut feeling.',
    tags: ['GA4', 'Mixpanel', 'PostHog', 'Data Studio', 'A/B Testing'],
    bg: '#E4DED2',
    text: '#000000',
    accent: '#F95C4B',
    muted: 'rgba(0,0,0,0.55)',
  },
]

const process = [
  {
    n: '01',
    title: 'Discovery',
    desc: 'We deep-dive into your business, users, goals, and constraints. No assumptions — just honest investigation.',
    detail: 'Stakeholder interviews · Competitor analysis · Tech audit · Goal mapping',
  },
  {
    n: '02',
    title: 'Strategy',
    desc: 'We craft a tailored roadmap that aligns technical decisions with business objectives before a line of code is written.',
    detail: 'Architecture planning · Timeline · Team structure · Risk assessment',
  },
  {
    n: '03',
    title: 'Execution',
    desc: 'Our specialists build, test, and refine with precision. Weekly demos, transparent progress, no surprises.',
    detail: 'Sprints · Weekly demos · QA · Performance testing',
  },
  {
    n: '04',
    title: 'Launch',
    desc: 'We deploy with care and stay close after launch — monitoring, user feedback, and iteration until the numbers move.',
    detail: 'Zero-downtime deploy · Monitoring setup · Feedback loops · Iteration',
  },
]

// ── Page ──────────────────────────────────────────────────────────────
export default function OfferPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [activeProcess, setActiveProcess] = useState(0)
  const dragging = useRef(false)
  const startX = useRef(0)
  const startScroll = useRef(0)
  const TOTAL = services.length

  // ── Carousel navigation ──────────────────────────────────────────
  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, TOTAL - 1))
    setActive(clamped)
    if (!trackRef.current || !wrapRef.current) return
    const CARD_W = wrapRef.current.offsetWidth * 0.78 + 20
    gsap.to(trackRef.current, { x: -clamped * CARD_W, duration: 0.7, ease: 'power3.out' })
  }

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    dragging.current = true
    const cx = 'touches' in e ? e.touches[0].clientX : e.clientX
    startX.current = cx
    startScroll.current = gsap.getProperty(trackRef.current, 'x') as number
  }
  const onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging.current) return
    const cx = 'touches' in e ? e.touches[0].clientX : e.clientX
    gsap.set(trackRef.current, { x: startScroll.current + (cx - startX.current) })
  }
  const onDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging.current) return
    dragging.current = false
    const cx = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX
    const dx = cx - startX.current
    if (dx < -50) goTo(active + 1)
    else if (dx > 50) goTo(active - 1)
    else goTo(active)
  }

  // ── GSAP ──────────────────────────────────────────────────────────
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      // Hero
      gsap.fromTo('[data-word]',
        { yPercent: 112, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.065, delay: 0.15 }
      )
      gsap.fromTo('[data-fade]',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', stagger: 0.09, delay: 0.6 }
      )

      // Timeline items
      gsap.fromTo('.tl-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.12,
          scrollTrigger: { trigger: '.process-section', start: 'top 78%' }
        }
      )

      // Marquee
      gsap.to('.marquee-inner', { xPercent: -50, duration: 16, ease: 'none', repeat: -1 })

    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={containerRef} className="min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--color-paper)' }}>

      {/* ══════════════════════════════════
          HERO — Centered text
      ══════════════════════════════════ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-7 text-center"
        style={{ backgroundColor: 'var(--color-paper)' }}>

        {/* Ambient coral glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-[55vh] w-[45vw] opacity-15"
          style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(249,92,75,0.6) 0%, transparent 65%)', filter: 'blur(40px)' }} />
        <div className="pointer-events-none absolute left-0 bottom-0 h-[40vh] w-[35vw] opacity-10"
          style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(249,92,75,0.5) 0%, transparent 65%)', filter: 'blur(40px)' }} />

        <div data-fade className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.3em]"
          style={{ borderColor: 'rgba(249,92,75,0.3)', color: 'var(--color-coral)', backgroundColor: 'rgba(249,92,75,0.06)' }}>
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--color-coral)' }} />
          What we offer
        </div>

        <h1 className="font-sans font-semibold leading-tight tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}>
          <span className="block overflow-hidden">
            <span data-word className="block" style={{ color: 'var(--color-black)' }}>Everything you need,</span>
          </span>
          <span className="block overflow-hidden">
            <span data-word className="block font-serif italic" style={{ color: 'var(--color-coral)' }}>
              built well.
            </span>
          </span>
        </h1>

        <p data-fade className="mx-auto mt-10 max-w-2xl text-2xl leading-relaxed font-light" style={{ color: 'var(--color-muted)' }}>
          Six core capabilities. All done by specialists. All built to the same uncompromising standard.
        </p>

        {/* Scroll hint */}
        <div data-fade className="absolute bottom-10 flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--color-muted)' }}>
            Scroll
          </span>
          <div className="h-10 w-px" style={{ backgroundColor: 'rgba(0,0,0,0.15)' }} />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="overflow-hidden border-y py-5" style={{ borderColor: 'rgba(0,0,0,0.08)', backgroundColor: 'var(--color-stone)' }}>
        <div className="marquee-inner flex gap-12 whitespace-nowrap" style={{ width: '200%' }}>
          {[...Array(2)].map((_, r) =>
            ['Web', '·', 'Mobile', '·', 'AI', '·', 'Cloud', '·', 'Design', '·', 'Growth', '·'].map((w, i) => (
              <span key={`${r}-${i}`} className="text-sm font-bold uppercase tracking-[0.3em]"
                style={{ color: [1,3,5,7,9,11].includes(i) ? 'var(--color-coral)' : 'rgba(0,0,0,0.3)' }}>
                {w}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ══════════════════════════════════
          SERVICE CAROUSEL
      ══════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: '#000000' }}>
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[40%] opacity-20"
          style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(249,92,75,0.55) 0%, transparent 65%)' }} />

        {/* Header */}
        <div className="relative z-10 mb-12 flex items-end justify-between px-7 md:px-12">
          <div>
            <p className="text-xs font-bold tracking-[0.4em] uppercase" style={{ color: 'var(--color-coral)' }}>
              Services
            </p>
            <h2 className="mt-4 font-sans text-4xl font-light md:text-5xl" style={{ color: 'var(--color-paper)' }}>
              Six capabilities
            </h2>
          </div>
          {/* Counter + Arrows */}
          <div className="flex items-center gap-4">
            <span className="hidden font-mono text-sm md:block" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {String(active + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
            </span>
            <div className="flex gap-3">
              <button onClick={() => goTo(active - 1)} disabled={active === 0}
                className="flex h-12 w-12 items-center justify-center rounded-full border transition-all disabled:opacity-20 hover:border-[#F95C4B] hover:text-[#F95C4B]"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#ffffff' }}>
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => goTo(active + 1)} disabled={active === TOTAL - 1}
                className="flex h-12 w-12 items-center justify-center rounded-full border transition-all disabled:opacity-20 hover:border-[#F95C4B] hover:text-[#F95C4B]"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#ffffff' }}>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Draggable track */}
        <div ref={wrapRef} className="relative overflow-hidden px-7 md:px-12"
          onMouseDown={onDragStart} onMouseMove={onDragMove}
          onMouseUp={onDragEnd} onMouseLeave={onDragEnd}
          onTouchStart={onDragStart} onTouchMove={onDragMove} onTouchEnd={onDragEnd}
          style={{ cursor: 'grab', userSelect: 'none' }}>

          <div ref={trackRef} className="flex gap-5">
            {services.map((s, i) => (
              <div key={s.n}
                className="relative flex-shrink-0 overflow-hidden rounded-[2.5rem] transition-all duration-500"
                style={{
                  width: '78%',
                  minWidth: 300,
                  minHeight: '72vh',
                  backgroundColor: s.bg,
                  opacity: i === active ? 1 : 0.4,
                  transform: i === active ? 'scale(1)' : 'scale(0.96)',
                }}
                onClick={() => goTo(i)}
              >
                {/* Ghost number */}
                <div className="pointer-events-none absolute -bottom-6 -right-4 select-none leading-none">
                  <span className="font-mono font-black"
                    style={{
                      fontSize: 'clamp(8rem, 20vw, 16rem)',
                      color: s.bg === '#E4DED2' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)',
                    }}>
                    {s.n}
                  </span>
                </div>

                {/* Coral glow on black cards */}
                {s.bg === '#000000' && (
                  <div className="pointer-events-none absolute inset-0"
                    style={{ background: 'radial-gradient(ellipse at 25% 25%, rgba(249,92,75,0.2) 0%, transparent 60%)' }} />
                )}

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between p-10 md:p-14" style={{ minHeight: '72vh' }}>
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.accent }} />
                      <span className="font-mono text-xs tracking-[0.25em] uppercase" style={{ color: s.muted }}>
                        {s.short}
                      </span>
                    </div>
                    <span className="font-mono text-sm font-bold" style={{ color: s.accent }}>{s.n}</span>
                  </div>

                  {/* Bottom */}
                  <div className="mt-auto">
                    <div className="mb-5 h-px w-full" style={{ backgroundColor: `${s.accent}22` }} />
                    <h3 className="font-sans font-light leading-tight"
                      style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', color: s.text }}>
                      {s.title}
                    </h3>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: s.muted }}>
                      {s.desc}
                    </p>
                    {/* Tags */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {s.tags.map(tag => (
                        <span key={tag} className="rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide"
                          style={{
                            backgroundColor: s.text === '#000000' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.08)',
                            color: s.text,
                          }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot nav */}
        <div className="relative z-10 mt-10 flex items-center justify-center gap-2">
          {services.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 32 : 8,
                height: 8,
                backgroundColor: i === active ? 'var(--color-coral)' : 'rgba(255,255,255,0.18)',
              }} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          PROCESS — Vertical timeline
      ══════════════════════════════════ */}
      <section className="process-section py-24 md:py-36" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="mx-auto max-w-6xl px-7 md:px-14">

          {/* Section header */}
          <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-xs font-bold tracking-[0.4em] uppercase" style={{ color: 'var(--color-coral)' }}>
                How we work
              </p>
              <h2 className="mt-5 font-sans text-4xl font-light leading-tight md:text-5xl" style={{ color: 'var(--color-black)' }}>
                Our process
              </h2>
            </div>
            <p className="text-lg leading-relaxed self-end" style={{ color: 'var(--color-muted)' }}>
              A structured approach that removes ambiguity and keeps everyone aligned — from first conversation to final deployment.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px md:left-8"
              style={{ backgroundColor: 'rgba(0,0,0,0.08)' }} />

            <div className="flex flex-col gap-0">
              {process.map((p, i) => (
                <div key={p.n}
                  className="tl-item group relative grid cursor-pointer grid-cols-[80px_1fr] gap-6 pb-14 pl-0 md:grid-cols-[100px_1fr] md:gap-10"
                  onClick={() => setActiveProcess(i)}
                >
                  {/* Node + number */}
                  <div className="relative flex flex-col items-center gap-3 pt-1">
                    {/* Circle node */}
                    <div
                      className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-400"
                      style={{
                        backgroundColor: i === activeProcess ? 'var(--color-coral)' : 'var(--color-paper)',
                        border: `2px solid ${i === activeProcess ? 'var(--color-coral)' : 'rgba(0,0,0,0.15)'}`,
                        boxShadow: i === activeProcess ? '0 0 0 6px rgba(249,92,75,0.12)' : 'none',
                      }}
                    >
                      <span className="font-mono text-xs font-bold"
                        style={{ color: i === activeProcess ? '#ffffff' : 'rgba(0,0,0,0.35)' }}>
                        {p.n}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1 pb-4">
                    <h3 className="font-sans text-2xl font-medium transition-colors md:text-3xl"
                      style={{ color: i === activeProcess ? 'var(--color-black)' : 'rgba(0,0,0,0.45)' }}>
                      {p.title}
                    </h3>

                    {/* Expanded content */}
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{ maxHeight: i === activeProcess ? '200px' : '0px', opacity: i === activeProcess ? 1 : 0 }}
                    >
                      <p className="mt-4 max-w-xl text-lg leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                        {p.desc}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.detail.split(' · ').map(d => (
                          <span key={d} className="rounded-full px-3 py-1 text-xs font-medium"
                            style={{ backgroundColor: 'rgba(249,92,75,0.1)', color: 'var(--color-coral)' }}>
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Collapsed preview */}
                    {i !== activeProcess && (
                      <p className="mt-1 text-sm" style={{ color: 'rgba(0,0,0,0.3)' }}>
                        {p.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA — Coral
      ══════════════════════════════════ */}
      <section className="relative overflow-hidden py-36 text-center" style={{ backgroundColor: 'var(--color-coral)' }}>
        <div className="noise pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative z-10 mx-auto max-w-3xl px-7">
          <p className="text-xs font-bold tracking-[0.4em] uppercase" style={{ color: 'rgba(0,0,0,0.42)' }}>
            Ready to build
          </p>
          <h2 className="mt-6 font-sans text-5xl font-light leading-tight md:text-6xl" style={{ color: '#000000' }}>
            Let&apos;s bring your ideas{' '}
            <span className="font-serif italic" style={{ color: '#ffffff' }}>to life.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.58)' }}>
            Tell us what you need. We'll tell you exactly how we'd build it — and why our way is better.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link href="/#contact"
              className="inline-flex items-center gap-2 rounded-full px-10 py-5 text-sm font-semibold uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
              style={{ backgroundColor: '#000000', color: '#ffffff' }}>
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
