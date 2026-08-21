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
  image: string
  objectPosition: string
  email?: string
  socials: {
    linkedin?: string
    instagram?: string
    x?: string
    website?: string
    noLinkedin?: boolean
  }
}

const teamMembers: TeamMember[] = [
  {
    name: 'Muhammad Abish Baig',
    role: 'Founder',
    image: '/team/abishbaig.png',
    objectPosition: '50% 18%',
    email: 'baig.abish424@gmail.com',
    socials: {
      linkedin: 'https://www.linkedin.com/in/abishbaig/',
    },
  },
  {
    name: 'Saim Anwar',
    role: 'Founder',
    image: '/team/saimanwar.png',
    objectPosition: '50% 18%',
    email: 'saimanwar.edu@outlook.com',
    socials: {
      linkedin: 'https://www.linkedin.com/in/saimtec/',
    },
  },
  {
    name: 'Samroz Burhan',
    role: 'Founder',
    image: '/team/samrozburhan.png',
    objectPosition: '100% 30%',
    email: 'samroz814@gmail.com',
    socials: {
      linkedin: 'https://www.linkedin.com/in/samrozburhan/',
    },
  },
  {
    name: 'Muhammad Zaeem Nadeem',
    role: 'Founder',
    image: '/team/zaeemnadeem.png',
    objectPosition: '50% 18%',
    email: 'zaeemnadeem003@gmail.com',
    socials: {
      noLinkedin: true,
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

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-[14px] w-[14px]"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.3"
        cy="6.8"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[13px] w-[13px]"
      aria-hidden="true"
    >
      <path d="M18.9 3H22l-6.77 7.74L23.2 21h-6.25l-4.9-6.2L6.62 21H3.5l7.24-8.27L3.2 3h6.4l4.43 5.7L18.9 3Zm-1.1 15.9h1.73L8.68 4.99H6.82L17.8 18.9Z" />
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

export function ManagementTeam() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  /*
   * ---------------------------------------------------------
   * SECTION ENTRANCE ANIMATION
   * ---------------------------------------------------------
   */
  useEffect(() => {
    if (!sectionRef.current) return

    const cards = cardsRef.current.filter(Boolean)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          y: 45,
          opacity: 0,
        },
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

    return () => {
      ctx.revert()
    }
  }, [])

  /*
   * ---------------------------------------------------------
   * SMOOTH HOVER IN
   * ---------------------------------------------------------
   */
  const handleMouseEnter = (index: number) => {
    setActiveIndex(index)

    const card = cardsRef.current[index]

    if (!card) return

    const image = card.querySelector('.team-image')

    // Stop any previous animation on this card
    gsap.killTweensOf(card)

    // Smooth card lift
    gsap.to(card, {
      y: -6,
      duration: 0.55,
      ease: 'power3.out',
      overwrite: true,
    })

    // Very subtle image movement
    if (image) {
      gsap.killTweensOf(image)

      gsap.to(image, {
        scale: 1.025,
        duration: 0.7,
        ease: 'power3.out',
        overwrite: true,
      })
    }
  }

  /*
   * ---------------------------------------------------------
   * SMOOTH HOVER OUT
   * ---------------------------------------------------------
   */
  const handleMouseLeave = (index: number) => {
    setActiveIndex(null)

    const card = cardsRef.current[index]

    if (!card) return

    const image = card.querySelector('.team-image')

    gsap.killTweensOf(card)

    // Smoothly return card to original position
    gsap.to(card, {
      y: 0,
      duration: 0.65,
      ease: 'power3.out',
      overwrite: true,
    })

    // Smoothly restore image scale
    if (image) {
      gsap.killTweensOf(image)

      gsap.to(image, {
        scale: 1,
        duration: 0.7,
        ease: 'power3.out',
        overwrite: true,
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[var(--color-paper)]
        px-5
        py-24
        sm:px-8
        lg:px-12
        xl:px-16
      "
    >
      {/* ---------------------------------------------------
          BACKGROUND GRID
      --------------------------------------------------- */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.32]
        "
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

        {/* -------------------------------------------------
            SECTION HEADER
        ------------------------------------------------- */}
        <div
          className="
            mb-12
            flex
            flex-col
            justify-between
            gap-6
            md:flex-row
            md:items-end
            lg:mb-14
          "
        >
          <div className="max-w-[620px]">

            <p
              className="
                mb-4
                font-sans
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[var(--color-coral)]
              "
            >
              Our Team
            </p>

            <h2
              className="
                font-sans
                text-[clamp(2.4rem,5vw,5rem)]
                font-medium
                leading-[0.95]
                tracking-[-0.055em]
                text-[var(--color-black)]
              "
            >
              The people
              <br />
              <span className="font-serif italic text-coral">
                behind the work.
              </span>
            </h2>

          </div>

          <p
            className="
              max-w-[320px]
              text-[13px]
              leading-[1.6]
              text-black/50
              md:pb-1
            "
          >
            A multidisciplinary team combining strategy,
            creativity and technology to build work that
            actually moves businesses forward.
          </p>
        </div>

        {/* -------------------------------------------------
            TEAM GRID
        ------------------------------------------------- */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {teamMembers.map((member, index) => {

            const isActive = activeIndex === index

            return (
              <div
                key={member.name}
                ref={(element) => {
                  cardsRef.current[index] = element
                }}
                className={`
                  team-card
                  group
                  relative
                  cursor-pointer
                  overflow-hidden
                  rounded-[18px]
                  border

                  transition-[background-color,border-color,box-shadow]
                  duration-500
                  ease-out

                  ${isActive
                    ? `
                        border-[var(--color-coral)]
                        bg-[var(--color-coral)]
                        shadow-[0_20px_45px_-25px_rgba(249,92,75,0.55)]
                      `
                    : `
                        border-black/[0.09]
                        bg-white/55
                        shadow-[0_8px_30px_-24px_rgba(0,0,0,0.25)]
                      `
                  }
                `}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >

                {/* -----------------------------------------
                    IMAGE
                ----------------------------------------- */}
                <div
                  className="
                    relative
                    mx-[7px]
                    mt-[7px]
                    aspect-[1.18/1]
                    overflow-hidden
                    rounded-[13px]
                    bg-[var(--color-stone)]
                  "
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority={index < 4}
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      25vw
                    "
                    className="
                      team-image
                      object-cover
                      grayscale

                      transition-[filter]
                      duration-700
                      ease-out

                      group-hover:grayscale-0
                    "
                    style={{
                      objectPosition: member.objectPosition,
                    }}
                  />

                  {/* Soft coral overlay */}
                  <div
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-[var(--color-coral)]
                      via-transparent
                      to-transparent

                      transition-opacity
                      duration-700
                      ease-out

                      ${isActive
                        ? 'opacity-[0.08]'
                        : 'opacity-0'
                      }
                    `}
                  />

                  {/* ---------------------------------------
                      SOCIAL ICONS
                  --------------------------------------- */}
                  <div
                    className={`
                      absolute
                      right-3
                      top-3
                      flex
                      flex-col
                      gap-1.5

                      transition-all
                      duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      ${isActive
                        ? `
                            translate-x-0
                            opacity-100
                          `
                        : `
                            translate-x-3
                            opacity-0
                          `
                      }
                    `}
                  >

                    {member.socials.linkedin && (
                      <Link
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        onClick={(event) => event.stopPropagation()}
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-[var(--color-coral)]
                          text-black
                          shadow-sm

                          transition-transform
                          duration-300
                          ease-out

                          hover:scale-110
                        "
                      >
                        <LinkedInIcon />
                      </Link>
                    )}

                    {member.socials.noLinkedin && (
                      <span
                        className="
                          flex
                          h-8
                          items-center
                          justify-center
                          rounded-full
                          bg-black/70
                          px-2.5
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-white/80
                        "
                      >
                        Soon
                      </span>
                    )}

                    {member.socials.instagram && (
                      <Link
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} Instagram`}
                        onClick={(event) => event.stopPropagation()}
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-[var(--color-coral)]
                          text-black
                          shadow-sm

                          transition-transform
                          duration-300
                          ease-out

                          hover:scale-110
                        "
                      >
                        <InstagramIcon />
                      </Link>
                    )}

                    {member.socials.x && (
                      <Link
                        href={member.socials.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} X`}
                        onClick={(event) => event.stopPropagation()}
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-[var(--color-coral)]
                          text-black
                          shadow-sm

                          transition-transform
                          duration-300
                          ease-out

                          hover:scale-110
                        "
                      >
                        <XIcon />
                      </Link>
                    )}

                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`Email ${member.name}`}
                        onClick={(event) => event.stopPropagation()}
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-[var(--color-coral)]
                          text-black
                          shadow-sm

                          transition-transform
                          duration-300
                          ease-out

                          hover:scale-110
                        "
                      >
                        <EmailIcon />
                      </a>
                    )}

                  </div>
                </div>

                {/* -----------------------------------------
                    MEMBER INFO
                ----------------------------------------- */}
                <div
                  className="
                    px-4
                    pb-4
                    pt-4

                    transition-colors
                    duration-500
                    ease-out
                  "
                >
                  <h3
                    className="
                      font-sans
                      text-[15px]
                      font-semibold
                      leading-[1.2]
                      tracking-[-0.025em]
                    "
                  >
                    {member.name}
                  </h3>

                  <p
                    className={`
                      mt-1
                      text-[11px]
                      font-medium
                      tracking-[0.01em]

                      transition-colors
                      duration-500
                      ease-out

                      ${isActive
                        ? 'text-black/65'
                        : 'text-black/45'
                      }
                    `}
                  >
                    {member.role}
                  </p>

                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      onClick={(event) => event.stopPropagation()}
                      className={`
                        mt-1.5
                        block
                        truncate
                        text-[10px]
                        tracking-[-0.01em]

                        transition-all
                        duration-500
                        ease-out

                        hover:underline

                        ${isActive
                          ? 'text-black/50 opacity-100'
                          : 'text-black/35 opacity-0'
                        }
                      `}
                    >
                      {member.email}
                    </a>
                  )}
                </div>

                {/* -----------------------------------------
                    BOTTOM ACCENT
                ----------------------------------------- */}
                <div
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[2px]

                    bg-black

                    transition-[width]
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${isActive
                      ? 'w-full'
                      : 'w-0'
                    }
                  `}
                />

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

