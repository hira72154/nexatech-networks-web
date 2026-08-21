'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

// ─── Big carousel cards data ───────────────────────────────────────────
const cards = [
  {
    n: '01',
    tag: 'Our Purpose',
    title: 'We exist to build things that matter.',
    body: 'NexaTech Networks was founded on a single conviction — skill is the only shortcut that actually works. Every product we ship carries that conviction from the first wireframe to the final deployment. We don\'t build demos. We build systems.',
    bg: '#000000',
    textColor: '#F6F4F1',
    accentColor: '#F95C4B',
    muted: 'rgba(246,244,241,0.55)',
  },
  {
    n: '02',
    tag: 'Our Standard',
    title: 'Good enough is never good enough.',
    body: 'We hold ourselves to a bar that moves with the times but never drops. Every decision — from architecture to the radius of a button — is made with intention. We ship products that are fast, accessible, beautiful, and built to last.',
    bg: '#F95C4B',
    textColor: '#000000',
    accentColor: '#ffffff',
    muted: 'rgba(0,0,0,0.6)',
  },
  {
    n: '03',
    tag: 'Our People',
    title: 'Specialists, not generalists.',
    body: 'Every person on our team owns a domain deeply. Design. Engineering. AI. Cloud. When your project needs all four simultaneously, we bring actual experts — not one person wearing five hats and calling it a team.',
    bg: '#E4DED2',
    textColor: '#000000',
    accentColor: '#F95C4B',
    muted: 'rgba(0,0,0,0.55)',
  },
  {
    n: '04',
    tag: 'Our Promise',
    title: 'Partners in outcomes, not output.',
    body: 'We measure success by your results, not by hours billed. If you win, we win. That alignment is baked into every engagement — and it shows in the quality of everything we produce together.',
    bg: '#000000',
    textColor: '#F6F4F1',
    accentColor: '#F95C4B',
    muted: 'rgba(246,244,241,0.55)',
  },
  {
    n: '05',
    tag: 'Our Vision',
    title: 'Built for what\'s next.',
    body: 'We look five steps ahead so you don\'t have to. We build infrastructure that scales, interfaces that age well, and AI that is ready for the models of tomorrow. Everything we ship is engineered to compound in value over time.',
    bg: '#F95C4B',
    textColor: '#000000',
    accentColor: '#ffffff',
    muted: 'rgba(0,0,0,0.6)',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────
export default function MissionPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [dragging, setDragging] = useState(false)
  const startX = useRef(0)
  const startScroll = useRef(0)
  const TOTAL = cards.length

  // ── Navigate carousel ──────────────────────────────────────────────
  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, TOTAL - 1))
    setActive(clamped)
    if (!trackRef.current || !wrapRef.current) return
    const CARD_W = wrapRef.current.offsetWidth * 0.82 + 20
    gsap.to(trackRef.current, { x: -clamped * CARD_W, duration: 0.75, ease: 'power3.out' })
  }

  // ── Drag handlers ──────────────────────────────────────────────────
  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setDragging(true)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    startX.current = clientX
    startScroll.current = gsap.getProperty(trackRef.current, 'x') as number
  }
  const onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging) return
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    gsap.set(trackRef.current, { x: startScroll.current + (clientX - startX.current) })
  }
  const onDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging) return
    setDragging(false)
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX
    const dx = clientX - startX.current
    if (dx < -50) goTo(active + 1)
    else if (dx > 50) goTo(active - 1)
    else goTo(active)
  }

  // ── GSAP animations ────────────────────────────────────────────────
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {

      // Hero words clip up
      gsap.fromTo('[data-word]',
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.05, ease: 'power3.out', stagger: 0.07, delay: 0.2 }
      )
      gsap.fromTo('[data-fade]',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.85, ease: 'power2.out', stagger: 0.1, delay: 0.65 }
      )

      // Mission text reveal on scroll
      gsap.fromTo('[data-mission-text]',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.mission-text-section', start: 'top 75%' }
        }
      )

      // Left/right split reveal
      gsap.fromTo('.belief-left',
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.belief-section', start: 'top 75%' }
        }
      )
      gsap.fromTo('.belief-right',
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.belief-section', start: 'top 75%' }
        }
      )

      // Stats stagger
      gsap.fromTo('[data-stat]',
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.stats-section', start: 'top 80%' }
        }
      )

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
          Mission Statement
        </div>

        <h1 className="font-sans font-semibold leading-tight tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}>
          <span className="block overflow-hidden">
            <span data-word className="block" style={{ color: 'var(--color-black)' }}>Our mission is</span>
          </span>
          <span className="block overflow-hidden">
            <span data-word className="block font-serif italic" style={{ color: 'var(--color-coral)' }}>
              empowering growth.
            </span>
          </span>
        </h1>

        <p data-fade className="mx-auto mt-10 max-w-2xl text-2xl leading-relaxed font-light" style={{ color: 'var(--color-muted)' }}>
          To build robust, scalable digital products with skill at every layer. No shortcuts. No compromises. Just results that compound.
        </p>

        {/* Scroll hint */}
        <div data-fade className="absolute bottom-10 flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--color-muted)' }}>
            Scroll
          </span>
          <div className="h-10 w-px" style={{ backgroundColor: 'rgba(0,0,0,0.15)' }} />
        </div>
      </section>

      {/* ══════════════════════════════════
          MISSION TEXT — editorial block
      ══════════════════════════════════ */}
      <section className="mission-text-section py-28 md:py-36" style={{ backgroundColor: 'var(--color-stone)' }}>
        <div className="mx-auto max-w-7xl px-7 md:px-14">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

            {/* Sticky label */}
            <div className="lg:sticky lg:top-28 flex flex-col gap-6">
              <p data-mission-text className="text-xs font-bold tracking-[0.4em] uppercase"
                style={{ color: 'var(--color-coral)' }}>
                Who We Are
              </p>
              <h2 data-mission-text className="font-sans text-4xl font-light leading-tight md:text-5xl"
                style={{ color: 'var(--color-black)' }}>
                Skill is the only shortcut{' '}
                <span className="font-serif italic" style={{ color: 'var(--color-coral)' }}>
                  that actually works.
                </span>
              </h2>
              <div data-mission-text className="mt-2 h-1 w-12 rounded-full" style={{ backgroundColor: 'var(--color-coral)' }} />
            </div>

            {/* Rich text */}
            <div className="flex flex-col gap-8">
              {[
                'NexaTech Networks is a premium technology studio that builds software products with a level of craft you can feel. We design, engineer, and scale solutions for businesses that understand quality is a strategy, not a luxury.',
                'We were founded on a single belief: that building something well the first time is faster than building it twice. That philosophy shapes every engagement — from the way we structure a database to the way we animate a hover state.',
                'Our team is small by design and deep by necessity. We bring specialists to every layer of a project — not generalists who "can figure it out." When you work with NexaTech Networks, you are working with people who have done this before, and done it well.',
                'We don\'t measure success by hours billed or tickets closed. We measure it by whether your product is growing, your users are returning, and your team is proud of what got shipped.',
              ].map((para, i) => (
                <p data-mission-text key={i} className="text-lg leading-relaxed md:text-xl"
                  style={{ color: i === 0 ? 'var(--color-black)' : 'var(--color-muted)', fontWeight: i === 0 ? '500' : '400' }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          BIG CARD CAROUSEL
      ══════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: '#000000' }}>
        {/* Ambient coral glow */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[50%] opacity-20"
          style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(249,92,75,0.55) 0%, transparent 65%)' }} />

        {/* Header */}
        <div className="relative z-10 mb-12 flex items-end justify-between px-7 md:px-12">
          <div>
            <p className="text-xs font-bold tracking-[0.4em] uppercase" style={{ color: 'var(--color-coral)' }}>
              Five Pillars
            </p>
            <h2 className="mt-4 font-sans text-4xl font-light md:text-5xl" style={{ color: 'var(--color-paper)' }}>
              What we stand for
            </h2>
          </div>
          {/* Arrows */}
          <div className="flex items-center gap-3">
            <span className="hidden text-xs tracking-widest uppercase md:block" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {String(active + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
            </span>
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

        {/* Track — drag + touch */}
        <div ref={wrapRef} className="relative overflow-hidden px-7 md:px-12"
          onMouseDown={onDragStart} onMouseMove={onDragMove}
          onMouseUp={onDragEnd} onMouseLeave={onDragEnd}
          onTouchStart={onDragStart} onTouchMove={onDragMove} onTouchEnd={onDragEnd}
          style={{ cursor: dragging ? 'grabbing' : 'grab', userSelect: 'none' }}>

          <div ref={trackRef} className="flex gap-5">
            {cards.map((c, i) => (
              <div key={c.n}
                className="relative flex-shrink-0 overflow-hidden rounded-[2.5rem] transition-all duration-500"
                style={{
                  width: '82%',
                  minWidth: 300,
                  minHeight: '72vh',
                  backgroundColor: c.bg,
                  opacity: i === active ? 1 : 0.45,
                  transform: i === active ? 'scale(1)' : 'scale(0.97)',
                }}
                onClick={() => goTo(i)}
              >
                {/* Giant ghost number */}
                <div className="pointer-events-none absolute -bottom-6 -right-6 select-none leading-none">
                  <span className="font-mono font-black" style={{
                    fontSize: 'clamp(9rem, 22vw, 18rem)',
                    color: c.bg === '#E4DED2' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)',
                  }}>
                    {c.n}
                  </span>
                </div>

                {/* Glow on dark cards */}
                {c.bg === '#000000' && (
                  <div className="pointer-events-none absolute inset-0"
                    style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(249,92,75,0.18) 0%, transparent 65%)' }} />
                )}

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between p-10 md:p-16" style={{ minHeight: '72vh' }}>
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c.accentColor }} />
                      <span className="font-mono text-xs tracking-[0.25em] uppercase"
                        style={{ color: c.muted }}>{c.tag}</span>
                    </div>
                    <span className="font-mono text-sm font-bold" style={{ color: c.accentColor }}>
                      {c.n}
                    </span>
                  </div>

                  {/* Bottom — main content */}
                  <div className="mt-auto">
                    <div className="mb-6 h-px w-full" style={{ backgroundColor: `${c.accentColor}22` }} />
                    <h3 className="font-sans font-light leading-tight"
                      style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: c.textColor }}>
                      {c.title}
                    </h3>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl"
                      style={{ color: c.muted }}>
                      {c.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="relative z-10 mt-10 flex items-center justify-center gap-2">
          {cards.map((_, i) => (
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
          BELIEF — left/right split
      ══════════════════════════════════ */}
      <section className="belief-section" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="mx-auto grid max-w-none grid-cols-1 lg:grid-cols-2">

          {/* Left */}
          <div className="belief-left flex flex-col justify-center px-8 py-24 md:px-16 lg:py-36"
            style={{ backgroundColor: 'var(--color-paper)' }}>
            <p className="text-xs font-bold tracking-[0.4em] uppercase" style={{ color: 'var(--color-coral)' }}>
              Our Belief
            </p>
            <h2 className="mt-5 font-sans text-4xl font-light leading-tight md:text-5xl"
              style={{ color: 'var(--color-black)' }}>
              We don&apos;t believe in hacks.
              <br />
              <span className="font-serif italic" style={{ color: 'var(--color-coral)' }}>
                We believe in craft.
              </span>
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              In doing the hard work until it becomes second nature — and then using that mastery to move fast, accurately, every single time. No magic, just muscle memory built over years of shipping real products.
            </p>
            <div className="mt-12 flex flex-col gap-5">
              {[
                { label: 'Design first, always.', desc: 'Every product starts with purpose and form before function.' },
                { label: 'Engineering that endures.', desc: 'We architect for scale you haven\'t hit yet.' },
                { label: 'Outcomes, not just output.', desc: 'We don\'t close tickets. We move metrics.' },
              ].map(pt => (
                <div key={pt.label} className="flex gap-4">
                  <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: 'var(--color-coral)' }} />
                  <div>
                    <p className="font-semibold" style={{ color: 'var(--color-black)' }}>{pt.label}</p>
                    <p className="mt-0.5 text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — black quote panel */}
          <div className="belief-right relative flex min-h-[440px] items-center justify-center overflow-hidden lg:min-h-0"
            style={{ backgroundColor: '#000000' }}>
            <div className="pointer-events-none absolute inset-0"
              style={{ background: 'radial-gradient(ellipse at 40% 50%, rgba(249,92,75,0.22) 0%, transparent 65%)' }} />
            <div className="relative z-10 flex flex-col items-center gap-5 p-12 text-center">
              <p className="font-serif leading-none" style={{ fontSize: '6rem', color: 'var(--color-coral)', lineHeight: 1 }}>
                &ldquo;
              </p>
              <p className="max-w-sm font-serif text-2xl italic leading-snug md:text-3xl"
                style={{ color: 'var(--color-paper)' }}>
                We build things that outlast the trend that inspired them.
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.35em]"
                style={{ color: 'rgba(249,92,75,0.7)' }}>
                — NexaTech Networks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          STATS — Stone bg grid
      ══════════════════════════════════ */}
      <section className="stats-section py-24 md:py-32" style={{ backgroundColor: 'var(--color-stone)' }}>
        <div className="mx-auto max-w-7xl px-7 md:px-14">
          <p className="mb-16 text-center text-xs font-bold tracking-[0.4em] uppercase"
            style={{ color: 'var(--color-coral)' }}>
            By the numbers
          </p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { n: '50+', label: 'Products shipped', sub: 'Across 6 industries' },
              { n: '5+', label: 'Years of skill', sub: 'Founded 2019' },
              { n: '3', label: 'Continents', sub: 'Global client base' },
              { n: '100%', label: 'Retention rate', sub: 'Clients who returned' },
            ].map(({ n, label, sub }) => (
              <div data-stat key={label}
                className="flex flex-col gap-2 rounded-3xl p-8"
                style={{ backgroundColor: 'rgba(0,0,0,0.06)' }}>
                <span className="font-sans font-black leading-none" style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', color: 'var(--color-black)' }}>
                  {n}
                </span>
                <span className="text-sm font-semibold" style={{ color: 'var(--color-black)' }}>{label}</span>
                <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{sub}</span>
              </div>
            ))}
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
            Join Us
          </p>
          <h2 className="mt-6 font-sans text-5xl font-light leading-tight md:text-6xl" style={{ color: '#000000' }}>
            Ready to build something{' '}
            <span className="font-serif italic" style={{ color: '#ffffff' }}>with skill?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.58)' }}>
            Tell us what you're building. We'll tell you how we'd build it better.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link href="/#contact"
              className="inline-flex items-center gap-2 rounded-full px-10 py-5 text-sm font-semibold uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
              style={{ backgroundColor: '#000000', color: '#ffffff' }}>
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/projects"
              className="inline-flex items-center gap-2 rounded-full border-2 border-black/30 px-10 py-5 text-sm font-semibold uppercase tracking-widest transition-all hover:border-black"
              style={{ color: '#000000' }}>
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
