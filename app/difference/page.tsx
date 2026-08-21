'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

// ── Data ────────────────────────────────────────────────────────────────
const differences = [
  { n: '01', title: 'Skill over speed.', desc: 'Most agencies rush to delivery. We rush to quality. Our engineers get architecture right the first time — because rebuilding is always more expensive than building well.' },
  { n: '02', title: 'Design as strategy.', desc: 'Every visual decision is tied to a behavior, a goal, or a brand principle. Aesthetics and outcomes are never in conflict here.' },
  { n: '03', title: 'True specialists.', desc: 'No generalists pretending. Every domain — design, front-end, back-end, AI, DevOps — is handled by someone who has been deep in that work for years.' },
  { n: '04', title: 'Results, not reports.', desc: 'We focus on the metric that matters. Is your product growing? Is your user returning? Are you winning? If not, we fix it.' },
  { n: '05', title: 'Built to compound.', desc: 'Good code pays dividends. Good design ages well. Good infrastructure scales without rewriting. We build for compounding returns.' },
  { n: '06', title: 'No black boxes.', desc: 'You own everything — the code, the assets, the knowledge. We document everything and hand over full context so you\'re never dependent on us.' },
]

export default function DifferencePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      // Hero reveal
      gsap.fromTo('[data-word]',
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.06, delay: 0.15 }
      )
      gsap.fromTo('[data-fade]',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', stagger: 0.08, delay: 0.6 }
      )

      // Table rows stagger in
      gsap.fromTo('.diff-row',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', stagger: 0.08,
          scrollTrigger: { trigger: '.diff-table', start: 'top 80%' }
        }
      )

      // Marquee
      gsap.to('.marquee-inner', {
        xPercent: -50,
        duration: 16,
        ease: 'none',
        repeat: -1,
      })

    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={containerRef} className="min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--color-paper)' }}>

      {/* ── HERO ── */}
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
          What makes us different
        </div>

        <h1 className="font-sans font-semibold leading-tight tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}>
          <span className="block overflow-hidden">
            <span data-word className="block" style={{ color: 'var(--color-black)' }}>We don&apos;t do</span>
          </span>
          <span className="block overflow-hidden">
            <span data-word className="block font-serif italic" style={{ color: 'var(--color-coral)' }}>
              average.
            </span>
          </span>
        </h1>

        <p data-fade className="mx-auto mt-10 max-w-2xl text-2xl leading-relaxed font-light" style={{ color: 'var(--color-muted)' }}>
          Six things that separate NexaTech Networks from every other studio you&apos;ve considered.
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
      <div className="overflow-hidden border-y py-5" style={{ borderColor: 'rgba(249,92,75,0.4)', backgroundColor: 'var(--color-coral)' }}>
        <div className="marquee-inner flex gap-10 whitespace-nowrap" style={{ width: '200%' }}>
          {[...Array(2)].map((_, r) =>
            ['Skill', '★', 'Solution', '★', 'Scale', '★', 'Craft', '★', 'Clarity', '★', 'Results', '★'].map((w, i) => (
              <span key={`${r}-${i}`}
                className="font-bold uppercase tracking-[0.3em]"
                style={{
                  fontSize: '0.9375rem',
                  color: [1, 3, 5, 7, 9, 11].includes(i) ? 'rgba(0,0,0,0.35)' : '#ffffff',
                }}>
                {w}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── TABLE / LIST layout ── */}
      <section className="diff-table px-7 py-24 md:px-14 md:py-32" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="mx-auto max-w-6xl">
          {/* Header row */}
          <div className="mb-6 grid grid-cols-[60px_1fr_1fr] gap-8 pb-4 text-xs font-bold uppercase tracking-[0.3em]"
            style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', color: 'var(--color-muted)' }}>
            <span>#</span>
            <span>Principle</span>
            <span className="hidden md:block">What it means</span>
          </div>

          {differences.map((d, i) => (
            <div
              key={d.n}
              className="diff-row group grid cursor-default grid-cols-[60px_1fr] gap-8 py-7 transition-all duration-300 md:grid-cols-[60px_1fr_1fr]"
              style={{
                borderBottom: '1px solid rgba(0,0,0,0.07)',
                backgroundColor: hovered === i ? '#000000' : 'transparent',
                margin: '0 -28px',
                padding: hovered === i ? '28px 28px' : '28px 0',
                borderRadius: hovered === i ? '20px' : '0',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Number */}
              <span className="font-mono text-sm font-bold transition-colors duration-300"
                style={{ color: hovered === i ? 'var(--color-coral)' : 'rgba(0,0,0,0.2)' }}>
                {d.n}
              </span>

              {/* Title */}
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-0">
                <h3 className="font-sans text-2xl font-light transition-colors duration-300 md:text-3xl"
                  style={{ color: hovered === i ? '#ffffff' : 'var(--color-black)' }}>
                  {d.title}
                </h3>
                {/* Mobile desc */}
                <p className="mt-2 text-sm leading-relaxed md:hidden"
                  style={{ color: hovered === i ? 'rgba(255,255,255,0.55)' : 'var(--color-muted)' }}>
                  {d.desc}
                </p>
              </div>

              {/* Desktop desc */}
              <p className="hidden text-base leading-relaxed transition-colors duration-300 md:block"
                style={{ color: hovered === i ? 'rgba(255,255,255,0.55)' : 'var(--color-muted)' }}>
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── LEFT/RIGHT SPLIT ── */}
      <section style={{ backgroundColor: 'var(--color-stone)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Black quote panel */}
          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden p-12 md:p-20"
            style={{ backgroundColor: '#000000' }}>
            <div className="pointer-events-none absolute inset-0"
              style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(249,92,75,0.22) 0%, transparent 65%)' }} />
            <div className="relative z-10 text-center">
              <p className="font-serif leading-none" style={{ fontSize: '5rem', color: 'var(--color-coral)', lineHeight: 1 }}>&ldquo;</p>
              <p className="mt-4 max-w-sm font-serif text-2xl italic leading-snug md:text-3xl" style={{ color: 'var(--color-paper)' }}>
                We treat your product like it's ours. How we build it reflects who we are.
              </p>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'rgba(249,92,75,0.7)' }}>
                — NexaTech Networks
              </p>
            </div>
          </div>

          {/* Stone text */}
          <div className="flex flex-col justify-center px-8 py-20 md:px-16 md:py-28">
            <p className="text-xs font-bold tracking-[0.4em] uppercase" style={{ color: 'var(--color-coral)' }}>The real difference</p>
            <h2 className="mt-5 font-sans text-4xl font-light leading-tight md:text-5xl" style={{ color: 'var(--color-black)' }}>
              We care about your{' '}
              <span className="font-serif italic" style={{ color: 'var(--color-coral)' }}>
                success more than our invoice.
              </span>
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              Every studio says they're different. We let the work speak. Our clients stay, refer others, and return for the next thing — not because of contracts, but because we deliver.
            </p>
            <div className="mt-10 flex flex-col gap-4">
              {['Transparent process, no surprises.', 'You own every file, every line.', 'Direct access to the people building.'].map(pt => (
                <div key={pt} className="flex items-center gap-3">
                  <div className="h-1 w-5 rounded-full" style={{ backgroundColor: 'var(--color-coral)' }} />
                  <p className="font-medium" style={{ color: 'var(--color-black)' }}>{pt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-36 text-center" style={{ backgroundColor: 'var(--color-coral)' }}>
        <div className="noise pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative z-10 mx-auto max-w-3xl px-7">
          <p className="text-xs font-bold tracking-[0.4em] uppercase" style={{ color: 'rgba(0,0,0,0.42)' }}>
            Experience the difference
          </p>
          <h2 className="mt-6 font-sans text-5xl font-light leading-tight md:text-6xl" style={{ color: '#000000' }}>
            Ready to work with people who{' '}
            <span className="font-serif italic" style={{ color: '#ffffff' }}>actually care?</span>
          </h2>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link href="/#contact"
              className="inline-flex items-center gap-2 rounded-full px-10 py-5 text-sm font-semibold uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
              style={{ backgroundColor: '#000000', color: '#ffffff' }}>
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/projects"
              className="inline-flex items-center gap-2 rounded-full border-2 px-10 py-5 text-sm font-semibold uppercase tracking-widest transition-all hover:bg-black/10"
              style={{ borderColor: 'rgba(0,0,0,0.3)', color: '#000000' }}>
              See Our Work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
