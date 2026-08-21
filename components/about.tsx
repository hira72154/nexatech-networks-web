'use client'

import { Reveal } from '@/components/reveal'

const blocks = [
  {
    label: 'Our Culture',
    title: 'Small team, high standards.',
    body: 'We stay deliberately lean so the people who scope your work are the people who build it. We value clarity over ceremony, and we protect the focus that great work requires.',
  },
  {
    label: 'What Makes Us Different',
    title: 'We build skill into the solution.',
    body: 'Anyone can ship features. We embed genuine expertise — in design, engineering and AI — into everything we make, so your product stays sharp long after launch.',
  },
]

const stats = [
  { value: '40+', label: 'Products shipped' },
  { value: '6', label: 'Core disciplines' },
  { value: '98%', label: 'Client retention' },
  { value: '12', label: 'Countries served' },
]

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: 'var(--color-paper)' }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <Reveal>
              <p
                className="text-xs font-bold tracking-[0.4em] uppercase"
                style={{ color: 'var(--color-coral)' }}
              >
                Who We Are
              </p>
              <h2
                className="mt-6 max-w-xl font-sans text-5xl leading-[1.1] font-light md:text-6xl"
                style={{ color: 'var(--color-black)' }}
              >
                We engineer digital experiences with an{' '}
                <span
                  className="font-serif italic"
                  style={{ color: 'var(--color-coral)' }}
                >
                  editorial
                </span>{' '}
                mind.
              </h2>
              <p
                className="mt-8 max-w-md text-lg leading-relaxed"
                style={{ color: 'var(--color-muted)' }}
              >
                TECHFEXIOUS began with a simple conviction: technology is only as good as the skill behind it. We came together from design studios, engineering teams and research labs to build a studio that treats every project as a piece of craft.
              </p>
            </Reveal>

            {/* Image to fill space */}
            <Reveal className="mt-12 hidden h-[400px] w-full overflow-hidden rounded-3xl lg:block relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                alt="Team collaboration" 
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute inset-0 mix-blend-overlay opacity-20"
                style={{ backgroundColor: 'var(--color-coral)' }}
              />
            </Reveal>
          </div>

          {/* Right Column - Cards */}
          <div className="flex flex-col gap-6 pt-4 lg:pt-0">
            {blocks.map((b, i) => (
              <Reveal
                key={b.label}
                delay={i * 0.1}
                className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:shadow-xl md:p-12 hover:-translate-y-1"
                style={{
                  backgroundColor: 'var(--color-stone)',
                  border: '1px solid color-mix(in oklab, #E4DED2 60%, transparent)',
                }}
              >
                <div className="relative z-10">
                  <span
                    className="mb-4 block text-xs font-bold tracking-[0.3em] uppercase"
                    style={{ color: 'var(--color-coral)' }}
                  >
                    {b.label}
                  </span>
                  <h3
                    className="mb-4 font-serif text-3xl leading-snug md:text-4xl"
                    style={{ color: 'var(--color-black)' }}
                  >
                    {b.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed md:text-lg"
                    style={{ color: 'var(--color-muted)' }}
                  >
                    {b.body}
                  </p>
                </div>
                {/* Decorative coral glow on hover */}
                <div
                  className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15"
                  style={{ backgroundColor: 'var(--color-coral)' }}
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stats */}
        <Reveal
          stagger
          className="mt-24 grid grid-cols-2 gap-8 border-t pt-16 md:grid-cols-4"
          style={{ borderColor: 'var(--color-stone)' }}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-3">
              <span
                className="font-sans text-5xl font-light tabular-nums md:text-6xl"
                style={{ color: 'var(--color-coral)' }}
              >
                {s.value}
              </span>
              <span
                className="text-sm font-semibold tracking-wide uppercase"
                style={{ color: 'var(--color-muted)' }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
