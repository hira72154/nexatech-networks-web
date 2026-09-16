'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ArrowUpRight } from 'lucide-react'
import { useContact } from '@/components/contact-modal'

export function Hero({ startDelay = 0 }: { startDelay?: number }) {
  const root = useRef<HTMLDivElement>(null)
  const { open } = useContact()

  useEffect(() => {
    const el = root.current
    if (!el) return

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const items = el.querySelectorAll('[data-reveal]')
    const robots = el.querySelectorAll('.robot-container')
    const robotInners = el.querySelectorAll('.robot-inner')

    if (reduced) {
      gsap.set(items, { opacity: 1, y: 0 })
      gsap.set(robots, { opacity: 1 })
      return
    }

    const ctx = gsap.context(() => {
      // 1. Stagger text reveal
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.12,
          delay: startDelay,
        }
      )

      // 2. Reveal video/background container
      if (robots.length > 0) {
        gsap.fromTo(
          robots,
          {
            opacity: 0,
            scale: 0.98,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: 'power2.out',
            delay: startDelay + 0.2,
          }
        )
      }

      // 3. Scroll parallax
      if (robotInners.length > 0) {
        gsap.to(robotInners, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    }, el)

    // 4. Mouse move parallax
    const handleMouseMove = (e: MouseEvent) => {
      if (reduced || robotInners.length === 0) return

      const { clientX, clientY } = e

      const xPos =
        (clientX / window.innerWidth - 0.5) * 40

      const yPos =
        (clientY / window.innerHeight - 0.5) * 40

      gsap.to(robotInners, {
        x: xPos,
        y: yPos,
        duration: 2.5,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      ctx.revert()
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [startDelay])

  // 5. Video playback
  useEffect(() => {
    const video = root.current?.querySelector(
      '.herovideo'
    ) as HTMLVideoElement | null

    if (!video) return

    // 5% slower
    video.playbackRate = 0.95

    // Native looping
    video.loop = true

    // Prevent unnecessary browser behavior
    video.muted = true
    video.playsInline = true

    let retryTimeout: ReturnType<typeof setTimeout> | null = null

    const startVideo = () => {
      video.playbackRate = 0.95

      const promise = video.play()

      if (promise !== undefined) {
        promise.catch(() => {
          // Browser may temporarily block autoplay.
          // We retry after the video becomes ready.
        })
      }
    }

    // Start when enough video data is available
    const handleLoadedData = () => {
      startVideo()
    }

    // If the video somehow ends despite loop,
    // restart it immediately.
    const handleEnded = () => {
      video.currentTime = 0
      startVideo()
    }

    // If playback gets interrupted/stalled,
    // attempt to continue without constantly
    // manipulating currentTime.
    const handleCanPlay = () => {
      if (video.paused) {
        startVideo()
      }
    }

    const handleStalled = () => {
      if (retryTimeout) {
        clearTimeout(retryTimeout)
      }

      retryTimeout = setTimeout(() => {
        if (video.paused) {
          startVideo()
        }
      }, 300)
    }

    video.addEventListener(
      'loadeddata',
      handleLoadedData
    )

    video.addEventListener(
      'canplay',
      handleCanPlay
    )

    video.addEventListener(
      'ended',
      handleEnded
    )

    video.addEventListener(
      'stalled',
      handleStalled
    )

    // If already loaded
    if (video.readyState >= 2) {
      startVideo()
    }

    return () => {
      if (retryTimeout) {
        clearTimeout(retryTimeout)
      }

      video.removeEventListener(
        'loadeddata',
        handleLoadedData
      )

      video.removeEventListener(
        'canplay',
        handleCanPlay
      )

      video.removeEventListener(
        'ended',
        handleEnded
      )

      video.removeEventListener(
        'stalled',
        handleStalled
      )

      video.pause()
    }
  }, [])

  return (
    <section
      ref={root}
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center px-1.5 py-3 sm:px-2.5 sm:py-4 lg:px-3 lg:py-5"
      style={{
        backgroundColor: 'var(--color-paper)',
      }}
    >
      {/* Framed Viewport Container */}
      <div
        className="
          relative
          w-full
          h-[calc(100svh-2.5rem)]
          min-h-[680px]
          max-h-[850px]
          overflow-hidden
          rounded-[1rem]
          md:rounded-[1.5rem]
        "
      >
        {/* Background Video & Warm Cinematic Environment */}
        <div className="robot-container absolute inset-0 z-0 pointer-events-none bg-black">

          {/* Video */}
          <div className="robot-inner absolute inset-[-5%] w-[110%] h-[110%]">
            <video
              className="
                hero-video
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-[65%_center]
                md:object-[75%_center]
                lg:object-[80%_center]
              "
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source
                src="/herovideo.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Warm coral/orange cinematic color grade */}
          <div
            className="
              absolute
              inset-0
              mix-blend-color
              opacity-50
            "
            style={{ backgroundColor: '#7a2010' }}
          />

          {/* Dark left side for text readability */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/95
              via-black/60
              to-transparent
              md:w-[75%]
            "
          />

          {/* Bottom cinematic fade */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              via-transparent
              to-black/20
            "
          />

          {/* Warm orange atmospheric tint */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-tr
              from-black
              via-transparent
              to-[#F95C4B]
              mix-blend-multiply
              opacity-40
            "
          />

          {/* Coral glow — top right */}
          <div
            className="
              absolute
              top-[10%]
              right-[-10%]
              h-[90vh]
              w-[90vh]
              rounded-full
              blur-[120px]
              mix-blend-screen
            "
            style={{ backgroundColor: 'rgba(249,92,75,0.22)' }}
          />

          {/* Grid */}
          <div
            className="
              grid-lines
              absolute
              inset-0
              opacity-20
              mix-blend-overlay
            "
          />

          {/* Noise */}
          <div
            className="
              noise
              absolute
              inset-0
              opacity-15
            "
          />
        </div>

        {/* Content */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            w-full
            max-w-7xl
            items-center
            px-6
            py-12
            md:px-10
            lg:px-12
          "
        >
          <div className="w-full md:w-[65%] lg:w-[55%]">

            {/* Eyebrow */}
            <p
              data-reveal
              className="
                mb-6
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
              "
              style={{
                color: 'var(--color-coral)',
              }}
            >
              Skill. Solution. Scale.
            </p>

            {/* Heading */}
            <h1
              className="
                max-w-3xl
                font-sans
                text-[10vw]
                font-light
                leading-[0.95]
                tracking-tight
                text-balance
                sm:text-6xl
                md:text-[4.5rem]
                lg:text-[5.25rem]
              "
              style={{
                color: 'var(--color-paper)',
              }}
            >
              <span
                data-reveal
                className="block drop-shadow-lg"
              >
                We Build{' '}
                <span
                  className="
                    bg-gradient-to-r
                    from-[var(--color-coral)]
                    to-orange-300
                    bg-clip-text
                    font-serif
                    italic
                    text-transparent
                  "
                >
                  Skill
                </span>{' '}
                Into
              </span>

              <span
                data-reveal
                className="
                  mt-1
                  block
                  drop-shadow-lg
                  md:mt-2
                "
              >
                Every Solution.
              </span>
            </h1>

            {/* Description */}
            <p
              data-reveal
              className="
                mt-8
                max-w-lg
                text-base
                font-light
                leading-relaxed
                md:text-lg
                lg:text-xl
              "
              style={{
                color:
                  'color-mix(in oklab, #F6F4F1 85%, transparent)',
                textShadow:
                  '0 2px 10px rgba(0,0,0,0.5)',
              }}
            >
              NexaTech Networks is a premium technology studio.
              We pair sharp engineering with editorial design
              to build products that scale — calmly,
              confidently, and with craft.
            </p>

            {/* Buttons */}
            <div
              data-reveal
              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-4
              "
            >
              {/* Primary CTA */}
              <button
                onClick={open}
                data-cursor
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  px-8
                  py-4
                  text-sm
                  font-medium
                  transition-transform
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  shadow-[0_0_20px_rgba(249,92,75,0.25)]
                "
                style={{
                  backgroundColor: 'var(--color-coral)',
                  color: 'var(--color-paper)',
                }}
              >
                <span className="relative z-10">
                  Start Your Project
                </span>

                <ArrowUpRight
                  className="
                    relative
                    z-10
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </button>

              {/* Secondary CTA */}
              <a
                href="#work"
                data-cursor
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/20
                  bg-black/20
                  px-8
                  py-4
                  text-sm
                  font-medium
                  backdrop-blur-md
                  transition-all
                  hover:border-white/40
                  hover:bg-white/10
                "
                style={{
                  color: 'var(--color-paper)',
                }}
              >
                See Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}