'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type TeamMember = {
  name: string
  role: string
  image?: string
  objectPosition?: string
  secondaryLine?: string
  location?: string
  experience?: string
  email?: string
  phone?: string
  socials: {
    linkedin?: string
    instagram?: string
    x?: string
    website?: string
    noLinkedin?: boolean
  }
}

/*
 * ---------------------------------------------------------
 * OLD TEAMMATES (COMMENTED OUT FOR FUTURE REUSE)
 * ---------------------------------------------------------
 *
 * const teamMembers: TeamMember[] = [
 *   {
 *     name: 'Muhammad Abish Baig',
 *     role: 'Founder',
 *     image: '/team/abishbaig.png',
 *     objectPosition: '50% 18%',
 *     email: 'baig.abish424@gmail.com',
 *     socials: {
 *       linkedin: 'https://www.linkedin.com/in/abishbaig/',
 *     },
 *   },
 *   {
 *     name: 'Saim Anwar',
 *     role: 'Founder',
 *     image: '/team/saimanwar.png',
 *     objectPosition: '50% 18%',
 *     email: 'saimanwar.edu@outlook.com',
 *     socials: {
 *       linkedin: 'https://www.linkedin.com/in/saimtec/',
 *     },
 *   },
 *   {
 *     name: 'Samroz Burhan',
 *     role: 'Founder',
 *     image: '/team/samrozburhan.png',
 *     objectPosition: '100% 30%',
 *     email: 'samroz814@gmail.com',
 *     socials: {
 *       linkedin: 'https://www.linkedin.com/in/samrozburhan/',
 *     },
 *   },
 *   {
 *     name: 'Muhammad Zaeem Nadeem',
 *     role: 'Founder',
 *     image: '/team/zaeemnadeem.png',
 *     objectPosition: '50% 18%',
 *     email: 'zaeemnadeem003@gmail.com',
 *     socials: {
 *       noLinkedin: true,
 *     },
 *   },
 * ]
 */

const teamMembers: TeamMember[] = [
  {
    name: 'Usama Nadeem',
    role: 'Senior Python / AI Engineer | Full Stack Software Engineer',
    secondaryLine: 'Python · FastAPI · Django · AI Agents · RAG · LangChain · LangGraph · PostgreSQL · pgvector · AWS',
    location: 'Lahore, Pakistan (Open to Remote)',
    experience: '5+ years',
    email: 'usamanadeem0786@gmail.com',
    phone: '+92 307 7021816',
    socials: {
      linkedin: 'https://www.linkedin.com/in/usamanadeem0786',
    },
  },
]

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[14px] w-[14px]"
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.5V20h3.44V8.5ZM5.22 3A2.01 2.01 0 1 0 5.2 7.02 2.01 2.01 0 0 0 5.22 3ZM20.5 13.41c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.87 1.09-3.36 1.86V8.5H9.4V20h3.44v-5.7c0-1.5.28-2.95 2.14-2.95 1.84 0 1.86 1.72 1.86 3.05V20h3.44l.22-6.59Z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[13px] w-[13px]"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[13px] w-[13px]"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function ManagementTeam() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const cards = cardsRef.current.filter(Boolean)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-paper)] px-5 py-24 sm:px-8 lg:px-12 xl:px-16"
    >
      {/* BACKGROUND GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              color-mix(in oklab, #E4DED2 28%, transparent) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              color-mix(in oklab, #E4DED2 28%, transparent) 1px,
              transparent 1px
            )
          `,
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative mx-auto max-w-[1500px]">
        {/* SECTION HEADER */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-14">
          <div className="max-w-[620px]">
            <p className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-coral)]">
              About
            </p>
            <h2 className="font-sans text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.055em] text-[var(--color-black)]">
              The people
              <br />
              <span className="font-serif italic text-coral">
                behind the work.
              </span>
            </h2>
          </div>

          <p className="max-w-[340px] text-[13px] leading-[1.6] text-black/50 md:pb-1">
            Deep domain engineering in Python, AI Automation, RAG pipelines, and full-stack software architecture.
          </p>
        </div>

        {/* TEAM DISPLAY */}
        <div className="flex flex-col gap-6">
          {teamMembers.map((member, index) => {
            const hasImage = Boolean(member.image)

            if (!hasImage) {
              // High-end card layout for team member without photo
              return (
                <div
                  key={member.name}
                  ref={(el) => {
                    cardsRef.current[index] = el
                  }}
                  className="group relative overflow-hidden rounded-[24px] border border-black/10 bg-white/75 p-8 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 hover:border-[var(--color-coral)] hover:shadow-[0_20px_50px_-20px_rgba(249,92,75,0.3)] md:p-10"
                >
                  <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-coral)]/30 bg-[var(--color-coral)]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-coral)]">
                        Senior Engineering Lead
                      </div>
                      <h3 className="font-sans text-3xl font-extrabold tracking-tight text-black sm:text-4xl lg:text-5xl">
                        {member.name}
                      </h3>
                      <p className="text-base font-medium text-black/75 md:text-lg">
                        {member.role}
                      </p>
                    </div>

                    {/* Social & Contact Actions */}
                    <div className="flex flex-wrap items-center gap-3">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-transform hover:scale-105 hover:bg-[var(--color-coral)]"
                        >
                          <LinkedInIcon /> LinkedIn
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wider text-black transition-transform hover:scale-105 hover:border-black"
                        >
                          <EmailIcon /> Email
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Core Expertise & Secondary Tech Line */}
                  {member.secondaryLine && (
                    <div className="mt-8 border-t border-black/10 pt-6">
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
                        Expertise & Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.secondaryLine.split('·').map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-lg border border-black/10 bg-black/[0.04] px-3.5 py-1.5 text-xs font-semibold text-black/85 transition-colors group-hover:border-[var(--color-coral)]/40 group-hover:bg-[var(--color-coral)]/5"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Details Grid */}
                  <div className="mt-8 grid gap-6 border-t border-black/10 pt-6 sm:grid-cols-3">
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-coral)]">
                        Experience
                      </span>
                      <span className="mt-1 block font-sans text-base font-semibold text-black">
                        {member.experience}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-coral)]">
                        Location
                      </span>
                      <span className="mt-1 block font-sans text-base font-semibold text-black">
                        {member.location}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-coral)]">
                        Direct Phone
                      </span>
                      {member.phone ? (
                        <a
                          href={`tel:${member.phone.replace(/\s+/g, '')}`}
                          className="mt-1 inline-flex items-center gap-1.5 font-sans text-base font-semibold text-black hover:text-[var(--color-coral)] hover:underline"
                        >
                          <PhoneIcon /> {member.phone}
                        </a>
                      ) : (
                        <span className="mt-1 block text-base font-semibold text-black">—</span>
                      )}
                    </div>
                  </div>
                </div>
              )
            }

            // Standard photo card layout (for image-enabled team members)
            return (
              <div
                key={member.name}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className="team-card group relative cursor-pointer overflow-hidden rounded-[18px] border border-black/[0.09] bg-white/55 transition-all duration-500 hover:border-[var(--color-coral)] hover:bg-[var(--color-coral)]"
              >
                <div className="relative mx-[7px] mt-[7px] aspect-[1.18/1] overflow-hidden rounded-[13px] bg-[var(--color-stone)]">
                  {member.image && (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="team-image object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                      style={{ objectPosition: member.objectPosition || '50% 50%' }}
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-sans text-[15px] font-semibold leading-[1.2] text-black">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-medium text-black/50">
                    {member.role}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
