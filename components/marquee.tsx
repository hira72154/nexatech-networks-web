'use client'

import { Palette, Code2, BrainCircuit, Cloud, Megaphone } from 'lucide-react'

const items = [
  { label: 'DESIGN', icon: <Palette size={20} strokeWidth={1.5} /> },
  { label: 'DEVELOPMENT', icon: <Code2 size={20} strokeWidth={1.5} /> },
  { label: 'AI & DATA', icon: <BrainCircuit size={20} strokeWidth={1.5} /> },
  { label: 'CLOUD & DEVOPS', icon: <Cloud size={20} strokeWidth={1.5} /> },
  { label: 'DIGITAL MARKETING', icon: <Megaphone size={20} strokeWidth={1.5} /> },
]

export function Marquee() {
  const sequence = Array.from({ length: 10 }).flatMap(() => items)

  return (
    <div
      className="group/marquee relative overflow-hidden border-y py-5 md:py-6"
      style={{
        backgroundColor: '#000000',
        borderColor: 'rgba(255,255,255,0.06)',
      }}
      aria-hidden="true"
    >
      {/* Soft edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent md:w-28" />

      <div
        className="
          flex
          w-max
          items-center
          animate-[marquee_55s_linear_infinite]
          motion-reduce:animate-none
          will-change-transform
        "
      >
        {sequence.map((item, i) => (
          <div
            key={i}
            className="
              group/item
              flex
              shrink-0
              items-center
              gap-8
              px-4
              transition-opacity
              duration-500
              ease-out
              group-hover/marquee:opacity-40
              hover:!opacity-100
              md:gap-12
              md:px-6
            "
          >
            <span
              className="
                whitespace-nowrap
                font-sans
                text-sm
                font-medium
                uppercase
                tracking-widest
                transition-all
                duration-500
                ease-out
                group-hover/item:tracking-[0.22em]
                md:text-base
              "
              style={{ color: 'var(--color-paper)' }}
            >
              {item.label}
            </span>

            <span
              className="
                transition-all
                duration-500
                ease-out
                group-hover/item:scale-125
              "
              style={{ color: 'var(--color-coral)' }}
            >
              {item.icon}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }

          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </div>
  )
}