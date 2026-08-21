'use client'

import { ArrowUpRight } from 'lucide-react'
import { useContact } from '@/components/contact-modal'
import { Reveal } from '@/components/reveal'

export function Contact() {
  const { open } = useContact()

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ backgroundColor: 'var(--color-coral)' }}
    >
      {/* Coral atmospheric glow */}
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[50vh] w-[50vh] -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(0,0,0,0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <p
            className="text-xs font-medium tracking-[0.4em] uppercase"
            style={{ color: 'var(--color-coral)' }}
          >
            Let&apos;s Work Together
          </p>
          <h2
            className="mx-auto mt-6 max-w-3xl font-sans text-5xl leading-[1.02] font-light text-balance md:text-7xl"
            style={{ color: '#000000' }}>
            Have a project worth{' '}
            <span className="font-serif italic" style={{ color: '#ffffff' }}>building well?</span>
          </h2>
          <p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed md:text-lg"
            style={{ color: 'rgba(0,0,0,0.65)' }}
          >
            Tell us what you&apos;re building. We&apos;ll bring the skill, the
            solution and the scale.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={open}
              data-cursor
              className="group flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium transition-transform hover:-translate-y-0.5"
              style={{
                backgroundColor: '#000000',
                color: '#ffffff',
              }}
            >
              Start Your Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href="mailto:info@NexaTechnetworks.com"
              data-cursor
              className="rounded-full border px-8 py-4 text-sm font-medium transition-all hover:border-white/40"
              style={{
                borderColor: 'rgba(0,0,0,0.3)',
                color: '#000000',
              }}
            >
              info@NexaTechnetworks.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
