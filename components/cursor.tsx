'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState<string | null>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduced) return
    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return
    
    document.documentElement.classList.add('cursor-hidden')

    const dot = dotRef.current!
    const ring = ringRef.current!

    const xTo = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power3' })
    const yTo = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power3' })
    const xDot = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3' })
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3' })

    const move = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
      xDot(e.clientX)
      yDot(e.clientY)

      const target = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor]')
      if (target) {
        const l = target.getAttribute('data-cursor')
        setLabel(l && l.length ? l : null)
        gsap.to(ring, { scale: l ? 2.6 : 2, duration: 0.3, ease: 'power3' })
      } else {
        setLabel(null)
        gsap.to(ring, { scale: 1, duration: 0.3, ease: 'power3' })
      }
    }

    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.classList.remove('cursor-hidden')
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[110] -ml-1 -mt-1 h-2 w-2 rounded-full"
        style={{ backgroundColor: 'var(--color-coral)' }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[110] -ml-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-full border"
        style={{ borderColor: 'color-mix(in oklab, var(--color-black) 35%, transparent)' }}
      >
        {label && (
          <span
            className="text-[9px] font-medium tracking-widest uppercase"
            style={{ color: 'var(--color-black)' }}
          >
            {label}
          </span>
        )}
      </div>
    </>
  )
}
