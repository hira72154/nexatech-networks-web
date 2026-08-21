'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

type Props = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  delay?: number
  y?: number
  as?: 'div' | 'section' | 'span' | 'li' | 'h2' | 'p'
  stagger?: boolean
}

export function Reveal({
  children,
  className,
  style,
  delay = 0,
  y = 40,
  as = 'div',
  stagger = false,
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const targets = stagger
      ? Array.from(element.children)
      : [element]

    if (reduceMotion) {
      gsap.set(targets, {
        opacity: 1,
        y: 0,
      })

      return
    }

    /*
     * Initial state
     */
    gsap.set(targets, {
      opacity: 0,
      y,
    })

    /*
     * Intersection Observer
     *
     * This replaces ScrollTrigger completely.
     */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay,
            stagger: stagger ? 0.1 : 0,
            ease: 'power3.out',
            overwrite: true,
          })

          observer.unobserve(element)
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      gsap.killTweensOf(targets)
    }
  }, [delay, y, stagger])

  const Tag = as as React.ElementType

  return (
    <Tag
      ref={ref}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  )
}