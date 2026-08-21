'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

export function Loader() {
  const root = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.documentElement.setAttribute('data-loading', 'true')

    const finish = () => {
      document.documentElement.removeAttribute('data-loading')
      window.dispatchEvent(new CustomEvent('loader:done'))
      setDone(true)
    }

    if (reduce) {
      finish()
      return
    }

    const state = { p: 0 }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' }, onComplete: finish })

      // Count 0 → 100 + bar fill
      tl.to(state, {
        p: 100,
        duration: 2.1,
        ease: 'power2.inOut',
        onUpdate: () => setCount(Math.round(state.p)),
      })
      tl.to('.loader-bar-fill', { scaleX: 1, duration: 2.1, ease: 'power2.inOut' }, 0)

      // Fade out TF mark + count
      tl.to('.loader-mark', { y: -14, opacity: 0, duration: 0.5, ease: 'power2.in' }, '-=0.15')
      tl.to('.loader-count-text', { y: -14, opacity: 0, duration: 0.5, ease: 'power2.in' }, '<')
      tl.to('.loader-bar-wrap', { opacity: 0, duration: 0.4 }, '<0.1')

      // ── Ochi SVG curve wipe (exact same as "website") ──
      tl.to('.loader-content', { y: -50, opacity: 0, duration: 0.6, ease: 'power3.inOut' }, '<0.2')
      tl.to('#ochi-curve', {
        attr: { d: 'M 0 0 L 100 0 L 100 50 Q 50 0 0 50 Z' },
        duration: 0.5,
        ease: 'power2.in',
      }, '<')
      tl.to('#ochi-curve', {
        attr: { d: 'M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z' },
        duration: 0.5,
        ease: 'power2.out',
      })
    }, el)

    return () => ctx.revert()
  }, [])

  if (done) return null

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      {/* ── SVG background — black fill + Ochi curve wipe on exit ── */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-auto z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Solid black with a coral bloom at the centre */}
          <radialGradient id="loaderBg" cx="50%" cy="50%" r="70%">
            <stop offset="0%"  stopColor="#2a0d08" />
            <stop offset="55%" stopColor="#140604" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </radialGradient>
        </defs>
        <path
          id="ochi-curve"
          d="M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z"
          fill="url(#loaderBg)"
        />
      </svg>

      {/* Coral ambient glows */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 75% 12%, rgba(249,92,75,0.25) 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 45% 40% at 15% 88%, rgba(249,92,75,0.13) 0%, transparent 70%)',
        }}
      />

      {/* Content layer */}
      <div className="loader-content relative z-10 flex h-full w-full flex-col items-center justify-center gap-9 pointer-events-auto">

        {/* Giant ghost count */}
        <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center">
          <span
            className="loader-count-text font-sans font-black leading-none"
            style={{ fontSize: '28vw', color: 'rgba(249,92,75,0.08)' }}
          >
            {count}
          </span>
        </div>

        {/* TF badge + wordmark */}
        <div className="loader-mark flex items-center gap-3 z-10">
          <span
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold tracking-tight shadow-lg"
            style={{ backgroundColor: '#F95C4B', color: '#fff' }}
          >
            <Image
              src="/Nexatech.png"
              alt="NexaTech Networks logo"
              fill
              className="object-contain"
              priority
            />
          </span>
          <span className="font-sans text-xl font-semibold tracking-wide text-white">
            NEXATECH NETWORKS
          </span>
        </div>

        {/* Progress bar */}
        <div className="loader-bar-wrap z-10 flex w-[min(80vw,380px)] flex-col gap-2.5">
          <div
            className="loader-bar-track h-[2px] w-full overflow-hidden rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          >
            <div
              className="loader-bar-fill h-full w-full origin-left rounded-full"
              style={{
                transform: 'scaleX(0)',
                background: 'linear-gradient(to right, #F95C4B, #ff8a78)',
                boxShadow: '0 0 10px rgba(249,92,75,0.65)',
              }}
            />
          </div>
          <div
            className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em]"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            <span>Loading</span>
            <span className="loader-count-text font-semibold" style={{ color: '#F95C4B' }}>
              {count}%
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
