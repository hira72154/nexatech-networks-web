'use client'

import { ManagementTeam } from '@/components/management-team'
import { Reveal } from '@/components/reveal'
import { CoralHoverCircle, MaskRevealText } from '@/components/coral-hover-circle'

export default function TeamPage() {
  return (
    <main className="relative overflow-x-hidden bg-[var(--color-paper)]">

      {/* =========================================================
          SECTION 01
          MANAGEMENT TEAM
          ========================================================= */}

      <section className="relative min-h-screen bg-[var(--color-paper)]">
        <div className="relative">
          <ManagementTeam />
        </div>
      </section>


      {/* =========================================================
          SECTION 02
          PHILOSOPHY
          ========================================================= */}

      <section className="relative min-h-screen bg-[var(--color-black)] text-[var(--color-paper)]">
        <div className="flex min-h-screen flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-7xl">

            {/* TOP BAR — label + full-width rule + number */}
            <Reveal y={20}>
              <div className="mb-16 flex items-center gap-6">
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                  How we work
                </span>
                <div className="h-px flex-1 bg-white/10" />
                <span className="font-mono text-xs text-white/20">02</span>
              </div>
            </Reveal>

            {/* MAIN GRID — big heading left / description right */}
            <div className="grid items-end gap-12 lg:grid-cols-[1fr_360px]">

              {/* LEFT — headline */}
              <Reveal y={60}>
                <h2 className="text-5xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
                  Different minds.
                  <br />
                  Different skills.
                  <br />
                  <span className="font-serif italic text-[var(--color-coral)]">
                    One vision.
                  </span>
                </h2>
              </Reveal>

              {/* RIGHT — accent line + description + hover circle */}
              <Reveal delay={0.12} y={40}>
                <div>
                  <div className="mb-8 h-px w-10 bg-[var(--color-coral)]" />
                  <CoralHoverCircle
                    circleSize={220}
                    className="max-w-sm"
                    circleContent={
                      <p className="font-sans text-base font-medium leading-snug tracking-[-0.025em] text-black">
                        One team.
                        <br />
                        <span className="font-serif italic">Zero silos.</span>
                        <br />
                        Infinite ideas.
                      </p>
                    }
                  >
                    <p className="text-sm leading-7 text-white/40">
                      We believe great work happens when different
                      disciplines stop working in isolation. Designers
                      think in experiences. Developers think in systems.
                      Strategists think in possibilities. When those
                      perspectives meet, something bigger emerges.
                    </p>
                  </CoralHoverCircle>
                </div>
              </Reveal>
            </div>

            {/* PRINCIPLES — full-width row */}
            <Reveal delay={0.18} y={40}>
              <div className="mt-20 grid border-t border-white/10 sm:grid-cols-3">

                {/* 01 */}
                <div className="border-b border-white/10 py-8 sm:border-b-0 sm:border-r sm:pr-8">
                  <span className="text-xs text-white/30">01</span>
                  <h3 className="mt-4 text-xl font-medium">Think deeply</h3>
                  <p className="mt-3 text-sm leading-6 text-white/40">
                    We understand the problem before rushing
                    toward a solution.
                  </p>
                </div>

                {/* 02 */}
                <div className="border-b border-white/10 py-8 sm:border-b-0 sm:border-r sm:px-8">
                  <span className="text-xs text-white/30">02</span>
                  <h3 className="mt-4 text-xl font-medium">Build boldly</h3>
                  <p className="mt-3 text-sm leading-6 text-white/40">
                    We turn ambitious ideas into real products
                    and experiences.
                  </p>
                </div>

                {/* 03 */}
                <div className="py-8 sm:pl-8">
                  <span className="text-xs text-white/30">03</span>
                  <h3 className="mt-4 text-xl font-medium">Stay curious</h3>
                  <p className="mt-3 text-sm leading-6 text-white/40">
                    We keep experimenting, learning and asking
                    what could come next.
                  </p>
                </div>

              </div>
            </Reveal>

          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 03
          MASK REVEAL STATEMENT
          ========================================================= */}

      <section className="relative min-h-screen bg-[var(--color-stone)] text-black">
        <div className="flex min-h-screen items-center px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-7xl">

            <Reveal y={30}>
              <p className="mb-10 text-xs font-medium uppercase tracking-[0.3em] text-black/40">
                The People Behind the Work.
              </p>
            </Reveal>

            <Reveal y={60}>
              <MaskRevealText
                baseSize={90}
                hoverSize={420}
                mutedClassName="text-black"
                revealClassName="text-[var(--color-coral)]"
                className="block"
              >
                <h2 className="font-sans text-[clamp(6rem,3vw,6rem)] font-black leading-[1.08] tracking-[-0.05em] py-6">
                  We don&apos;t just build good things. We build them
                  with people who refuse to make boring ones.
                </h2>
              </MaskRevealText>
            </Reveal>

            <Reveal delay={0.1} y={30}>
              <p className="mt-16 max-w-xl text-sm leading-7 text-black/50">
                We are{' '}
                <span className="font-medium text-black">
                  purpose-driven
                </span>{' '}
                Product Engineers focused on delivering meaningful,
                high-quality digital solutions that resonate with
                users.
              </p>
            </Reveal>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 05
          FINAL CTA
          ========================================================= */}

      <section className="relative min-h-screen bg-[var(--color-coral)] text-black">
        <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center sm:px-10">

          {/* LABEL */}
          <Reveal y={30}>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-black/50">
              NexaTech Networks
            </p>
          </Reveal>

          {/* TITLE */}
          <Reveal delay={0.1} y={60}>
            <h2 className="max-w-5xl font-sans text-5xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[7rem]">
              Let&apos;s build
              <br />
              <span className="font-serif italic">
                something great.
              </span>
            </h2>
          </Reveal>

          {/* DESCRIPTION */}
          <Reveal delay={0.15} y={40}>
            <p className="mt-10 max-w-sm text-sm leading-7 text-black/60">
              Whether you have a project in mind or just want
              to say hello — we&apos;d love to hear from you.
            </p>
          </Reveal>

          {/* BUTTON */}
          <Reveal delay={0.2} y={30}>
            <a
              href="/contact"
              className="group mt-12 inline-flex items-center gap-4 rounded-full bg-black px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-black/80"
            >
              <span>
                Get in touch
              </span>
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </Reveal>

          {/* FOOTER */}
          <p className="mt-24 text-xs text-black/40">
            © {new Date().getFullYear()} NexaTech Networks. All rights reserved.
          </p>

        </div>
      </section>

    </main>
  )
}