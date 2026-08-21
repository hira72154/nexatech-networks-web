'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ProjectCard } from './project-card'
import { projects } from '@/lib/projects'

export function ProjectsTab() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const el = container.current
    if (!el) return

    const ctx = gsap.context(() => {
      // Heading character reveal
      const chars = el.querySelectorAll('[data-char]')
      gsap.fromTo(
        chars,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.035,
          delay: 0.1,
        }
      )

      // Project rows stagger in
      const rows = gsap.utils.toArray('.project-row')
      rows.forEach((row: any) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, el)

    return () => ctx.revert()
  }, [])

  const rows: typeof projects[] = []
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2) as any)
  }

  const heading = 'PROJECTS'

  return (
    <div
      ref={container}
      className="relative z-20 min-h-screen"
      style={{ backgroundColor: '#000000', color: 'var(--color-paper)' }}
    >
      {/* Header block */}
      <div className="relative overflow-hidden px-4 pb-8 pt-[15vh] lg:px-6">
        {/* Coral glow */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-[50vh] w-[50vw] opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 0% 0%, rgba(249,92,75,0.5) 0%, transparent 65%)',
            filter: 'blur(40px)',
          }}
        />

        {/* PROJECTS heading — char reveal */}
        <div className="flex items-start leading-none overflow-hidden">
          <h1 className="flex font-sans font-extrabold uppercase leading-none tracking-tighter"
            style={{ fontSize: 'clamp(3.5rem, 15vw, 14rem)' }}
          >
            {heading.split('').map((char, i) => (
              <span
                key={i}
                data-char
                className="inline-block"
                style={{ color: 'var(--color-paper)' }}
              >
                {char}
              </span>
            ))}
          </h1>
          <span
            className="ml-2 mt-3 font-sans font-bold lg:ml-4 lg:mt-6"
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 2.5rem)',
              color: 'var(--color-coral)',
            }}
          >
            {projects.length}
          </span>
        </div>

        {/* Divider */}
        <div
          className="mt-6 h-px w-full"
          style={{ backgroundColor: 'rgba(246,244,241,0.08)' }}
        />
      </div>

      {/* Project grid */}
      <div className="px-2 pb-[20vh] lg:px-4">
        {rows.map((row: any, idx: number) => (
          <div
            key={idx}
            className="project-row mb-3 flex h-[480px] w-full flex-col gap-2 lg:h-[820px] lg:flex-row lg:gap-3"
          >
            <ProjectCard project1={row[0]} project2={row[1]} />
          </div>
        ))}
      </div>
    </div>
  )
}
