'use client'

import { use } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { servicesData } from '@/lib/services-data'
import { ArrowLeft, ArrowUpRight, CheckCircle2, Cpu, Wrench, Sparkles, Layers } from 'lucide-react'
import { useContact } from '@/components/contact-modal'

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const service = servicesData.find((s) => s.slug === resolvedParams.slug)
  const { open: openContact } = useContact()

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24 pb-0 overflow-x-hidden" style={{ backgroundColor: 'var(--color-paper)' }}>
      {/* Top Header / Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-6 pb-4 md:px-8">
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
          style={{ color: 'var(--color-muted)' }}
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" style={{ color: 'var(--color-coral)' }} /> 
          <span className="group-hover:text-black transition-colors">Back to Services</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20">
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute right-[-10%] top-0 h-[60vh] w-[60vw] opacity-15"
          style={{
            background: 'radial-gradient(circle at 70% 30%, rgba(249,92,75,0.8) 0%, transparent 60%)',
            filter: 'blur(50px)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border transition-all duration-300 hover:bg-[#F95C4B] hover:text-white"
              style={{
                borderColor: 'rgba(249,92,75,0.4)',
                color: 'var(--color-coral)',
                backgroundColor: 'rgba(249,92,75,0.05)',
                cursor: 'default'
              }}
            >
              SERVICE {service.n}
            </span>
            <span className="h-px w-16 bg-black/10" />
          </div>

          <h1
            className="mt-8 font-sans text-5xl font-semibold leading-tight tracking-tight md:text-7xl max-w-5xl"
            style={{ color: 'var(--color-black)' }}
          >
            {service.title}
          </h1>

          <p
            className="mt-8 max-w-4xl font-serif italic text-2xl md:text-4xl leading-relaxed"
            style={{ color: 'var(--color-coral)' }}
          >
            &ldquo;{service.tagline}&rdquo;
          </p>

          <p
            className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed font-light"
            style={{ color: 'var(--color-muted)' }}
          >
            {service.desc}
          </p>

          {/* Action CTAs */}
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <button
              onClick={openContact}
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:scale-105"
              style={{ backgroundColor: '#000000' }}
            >
              Start Your Project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href="#sub-services"
              className="group inline-flex items-center gap-2 rounded-full border border-black/20 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all hover:bg-black/5"
              style={{ color: 'var(--color-black)' }}
            >
              Explore Capabilities <Layers className="h-4 w-4 transition-transform group-hover:rotate-12" />
            </a>
          </div>
        </div>
      </section>

      {/* Sub-Services Breakdown Section - DARK PREMIUM THEME */}
      <section id="sub-services" className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#000000' }}>
        {/* Subtle grid and noise for premium feel */}
        <div className="grid-lines absolute inset-0 opacity-[0.03]" />
        
        {/* Ambient glow in dark mode */}
        <div
          className="pointer-events-none absolute left-[-10%] bottom-0 h-[70vh] w-[50vw] opacity-20"
          style={{
            background: 'radial-gradient(circle at 30% 70%, rgba(249,92,75,0.6) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-10">
            <div>
              <p className="text-xs font-bold tracking-[0.4em] uppercase" style={{ color: 'var(--color-coral)' }}>
                Core Offerings
              </p>
              <h2 className="mt-4 font-sans text-3xl font-light md:text-5xl text-white">
                Detailed Capabilities
              </h2>
            </div>
            <div className="flex items-center gap-2 text-white/40 font-mono text-sm">
              <Sparkles className="h-4 w-4 text-[#F95C4B]" /> {service.subCards.length} Sub-Services Available
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {service.subCards.map((sub, idx) => (
              <div
                key={sub.title}
                className="cglass-panel group flex flex-col justify-between rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(249,92,75,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <span className="font-mono text-sm font-bold text-[#F95C4B]">
                      0{idx + 1}
                    </span>
                    <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 transition-transform duration-500 group-hover:rotate-12 group-hover:border-[#F95C4B]/50">
                      <Sparkles className="h-4 w-4 text-white/40 group-hover:text-[#F95C4B]" />
                    </div>
                  </div>

                  <h3 className="mt-8 font-sans text-2xl font-medium text-white transition-colors group-hover:text-[#F95C4B]">
                    {sub.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-white/60">
                    {sub.blurb}
                  </p>

                  {/* Includes List */}
                  <div className="mt-8 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-4">Includes:</p>
                    {sub.includes.map((inc) => (
                      <div key={inc} className="flex items-start gap-3 group/inc">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#F95C4B] opacity-70 transition-opacity group-hover/inc:opacity-100" />
                        <span className="text-sm leading-snug text-white/80 transition-colors group-hover/inc:text-white">
                          {inc}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tools used */}
                  {sub.tools && sub.tools.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-white/5">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 flex items-center gap-2 mb-4">
                        <Wrench className="h-3.5 w-3.5" /> Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {sub.tools.map((t) => (
                           <span
                           key={t}
                           className="rounded-full px-4 py-1.5 text-[11px] font-semibold bg-white/5 text-white/70 border border-white/10 transition-colors hover:bg-white/10 hover:text-white cursor-default"
                         >
                           {t}
                         </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Best For Tagline */}
                {sub.bestFor && (
                  <div className="mt-10 pt-5 border-t border-dashed border-white/10">
                    <p className="text-xs font-medium text-white/50 leading-relaxed">
                      <span className="font-bold text-[#F95C4B] tracking-wide uppercase mr-2">Best for:</span> 
                      <span className="italic text-white/70">{sub.bestFor}</span>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEDICATED SECTION: Technology Behind Our AI Solutions */}
      {service.techStack && service.techStack.length > 0 && (
        <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--color-stone)' }}>
          <div className="grid-lines absolute inset-0 opacity-20" />
          
          <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] transition-all hover:bg-white" 
                   style={{ borderColor: 'rgba(249,92,75,0.4)', color: 'var(--color-coral)', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                <Cpu className="h-4 w-4" /> Technical Architecture
              </div>
              <h2 className="mt-8 font-sans text-4xl font-light md:text-5xl" style={{ color: 'var(--color-black)' }}>
                The Engine Room
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                We don't just use APIs. We build robust, scalable systems using the best frameworks available.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {service.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="glass-white group rounded-[2rem] p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="mb-5 inline-flex items-center justify-center rounded-full bg-black/5 px-4 py-1.5">
                    <span className="font-mono text-[10px] font-bold text-[#F95C4B] tracking-widest uppercase">
                      {tech.category}
                    </span>
                  </div>
                  <h3 className="font-sans text-2xl font-medium" style={{ color: 'var(--color-black)' }}>
                    {tech.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-28 md:py-40 text-center overflow-hidden" style={{ backgroundColor: 'var(--color-coral)' }}>
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-black/50">
            Let&apos;s Build Together
          </p>
          <h2 className="mt-6 font-sans text-4xl font-light leading-tight text-black md:text-6xl">
            Need custom <span className="font-serif italic text-white">{service.title}</span>?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-black/70 leading-relaxed">
            Tell us about your objectives. We will deliver a technical roadmap and proposal built around your growth targets.
          </p>
          <div className="mt-12 flex justify-center">
            <button
              onClick={openContact}
              className="group inline-flex items-center gap-3 rounded-full px-12 py-5 text-sm font-bold uppercase tracking-widest bg-black text-white transition-all hover:scale-105 hover:bg-black/90 shadow-2xl"
            >
              Get Started Now <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
