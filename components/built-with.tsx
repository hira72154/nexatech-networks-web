'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stackLogos = [
  { name: 'React', url: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Next.js', url: 'https://cdn.simpleicons.org/nextdotjs/000000' },
  { name: 'TypeScript', url: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Tailwind', url: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Supabase', url: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
  { name: 'PostgreSQL', url: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'Docker', url: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'GitHub', url: 'https://cdn.simpleicons.org/github/181717' },
  { name: 'Vercel', url: 'https://cdn.simpleicons.org/vercel/000000' },
  { name: 'Framer', url: 'https://cdn.simpleicons.org/framer/0055FF' },
  { name: 'GSAP', url: 'https://cdn.simpleicons.org/greensock/88CE02' },
  { name: 'Railway', url: 'https://cdn.simpleicons.org/railway/0B0D0E' },
  { name: 'Upstash', url: 'https://cdn.simpleicons.org/upstash/00E9A3' },
  { name: 'Node.js', url: 'https://cdn.simpleicons.org/nodedotjs/339933' },
]

const aiLogos = [
  { name: 'OpenAI', url: 'https://api.iconify.design/simple-icons/openai.svg?color=black' },
  { name: 'Claude', url: 'https://api.iconify.design/simple-icons/anthropic.svg?color=black' },
  { name: 'Gemini', url: 'https://api.iconify.design/simple-icons/googlegemini.svg?color=black' },
  { name: 'Flow', url: 'https://api.iconify.design/simple-icons/webflow.svg?color=black' },
]

export function BuiltWith() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Entrance animations
    const elements = gsap.utils.toArray('.bw-anim')
    gsap.from(elements, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    })
  }, { scope: containerRef })

  // Hover animation for individual logos (color reveal only)
  const handleLogoEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('img')
    if (img) {
      gsap.to(img, {
        filter: 'grayscale(0%) opacity(1)',
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  const handleLogoLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('img')
    if (img) {
      gsap.to(img, {
        filter: 'grayscale(100%) opacity(0.55)',
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: 'var(--color-paper)' }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 text-center flex flex-col items-center">

        <p
          className="bw-anim font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4"
          style={{ color: 'var(--color-muted)' }}
        >
          BUILT WITH
        </p>

        <h2
          className="bw-anim font-sans text-4xl leading-tight md:text-5xl lg:text-6xl mb-6"
          style={{ color: 'var(--color-black)' }}
        >
          A Modern,{' '}
          <span style={{ color: 'var(--color-coral)' }}>Production-Grade</span>{' '}
          Stack
        </h2>

        <p
          className="bw-anim font-sans max-w-2xl text-lg mb-10 leading-relaxed"
          style={{ color: 'var(--color-muted)' }}
        >
          The same frameworks and infrastructure trusted by the best teams in tech, so your product launches fast, scales effortlessly, and never feels outdated.
        </p>

        {/* Marquee Section */}
        <div
          className="bw-anim relative w-full flex items-center overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group"
        >
          {/* Track wrapper */}
          <div
            className="flex w-max items-center pt-4 pb-8 animate-[builtwith_25s_linear_infinite] group-hover:[animation-play-state:paused]"
            style={{ willChange: 'transform' }}
          >
            {[1, 2].map((setIndex) => (
              <div key={setIndex} className="flex gap-3 pr-3">
                {stackLogos.map((logo, i) => (
                  <div
                    key={`${logo.name}-${i}`}
                    className="marquee-item font-sans flex-shrink-0 flex flex-col items-center justify-center gap-2 w-[110px] h-[110px] rounded-2xl transition-colors cursor-pointer"
                    style={{
                      backgroundColor: 'var(--color-stone)',
                      border: '1px solid color-mix(in oklab, #E4DED2 70%, transparent)',
                    }}
                    onMouseEnter={handleLogoEnter}
                    onMouseLeave={handleLogoLeave}
                  >
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="w-9 h-9 object-contain transition-none"
                      style={{ filter: 'grayscale(100%) opacity(0.55)' }}
                    />
                    <span
                      className="text-xs font-bold"
                      style={{ color: 'var(--color-black)' }}
                    >
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="bw-anim w-full max-w-4xl border-t border-dashed my-8"
          style={{ borderColor: 'var(--color-stone)' }}
        />

        {/* AI Studio Section */}
        <div className="bw-anim flex flex-col items-center w-full">
          <p
            className="font-sans text-xs font-bold tracking-[0.3em] uppercase mb-8"
            style={{ color: 'var(--color-muted)' }}
          >
            AI STUDIO
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {aiLogos.map((logo) => (
              <div
                key={logo.name}
                className="font-sans flex items-center gap-4"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{
                    border: '1px solid var(--color-stone)',
                    backgroundColor: 'var(--color-stone)',
                  }}
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-7 w-7 object-contain opacity-65"
                  />
                </div>
                <span
                  className="text-lg font-bold tracking-tight"
                  style={{ color: 'var(--color-black)' }}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
      <style>{`
        @keyframes builtwith {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
