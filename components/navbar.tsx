'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ChevronDown,
  MessageSquare,
  Menu,
  ArrowRight,
} from 'lucide-react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import FullScreenNav from './full-screen-nav'
import { useContact } from '@/components/contact-modal'

const WHO_WE_ARE = [
  { label: 'What makes us different', href: '/difference' },
  { label: 'Mission statement', href: '/mission' },
  { label: 'What we offer', href: '/offer' },
  { label: 'Our Team', href: '/team' },
]

const LINKS = [
  { label: 'Home', href: '/#top' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/projects' },
  { label: 'Products', href: '#' },
]

export function Navbar({ delay = 0 }: { delay?: number }) {
  const [open, setOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { open: openContact } = useContact()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    if (open) {
      ; (window as any).__lenis?.stop?.()
    } else {
      ; (window as any).__lenis?.start?.()
    }

    return () => {
      document.body.style.overflow = ''
        ; (window as any).__lenis?.start?.()
    }
  }, [open])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {mounted &&
        createPortal(
          <>
            <header
              className="pointer-events-none fixed inset-x-0 top-0 z-[100]"
              style={{
                animationDelay: `${delay}s`,
              }}
            >
              <div className="mx-auto flex w-full items-center justify-center px-4 pt-4 sm:px-8 sm:pt-6">
                <nav
                  className={[
                    // Base
                    'pointer-events-auto relative flex h-[62px] w-full max-w-[980px] items-center justify-between rounded-full px-2',
                    // Glass
                    'border border-white/25',
                    'bg-black/[0.12]',
                    'backdrop-blur-[24px]',
                    'backdrop-saturate-[180%]',
                    // Depth
                    'shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(255,255,255,0.06)]',
                    // Transition
                    'transition-all duration-500 ease-out',
                    scrolled
                      ? 'bg-black/[0.18] border-white/30 shadow-[0_12px_40px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.4)]'
                      : '',
                  ].join(' ')}
                >
                  {/* Glass reflection */}
                  <div className="pointer-events-none absolute inset-x-[2%] top-[1px] h-[35%] rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-70" />

                  {/* Subtle glass glow */}
                  <div className="pointer-events-none absolute -inset-px rounded-full bg-gradient-to-r from-white/8 via-transparent to-white/8 opacity-60" />

                  {/* ================================================= */}
                  {/* LOGO */}
                  {/* ================================================= */}

                  <div className="relative z-10 flex shrink-0 items-center">
                    <Link
                      href="/"
                      aria-label="NexaTech Networks home"
                      className="group flex h-12 items-center overflow-hidden rounded-full px-1.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:pr-5"
                    >
                      {/* Logo */}
                      <span
                        className="
                          relative
                          flex h-10 w-10 shrink-0
                          items-center justify-center
                          overflow-hidden
                          rounded-full
                          border border-white/40
                          text-xs font-bold
                          tracking-tight text-white
                          shadow-[0_4px_15px_rgba(249,92,75,0.35),inset_0_1px_0_rgba(255,255,255,0.35)]
                          transition-all duration-500
                          group-hover:scale-[0.92]
                        "
                        style={{ backgroundColor: 'var(--color-coral)' }}
                      >
                        {/* Logo shine */}
                        <span className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />

                        <span className="relative z-10">
                          N
                        </span>
                      </span>

                      {/* Company name */}
                      <span
                        className="
                          max-w-0
                          overflow-hidden
                          whitespace-nowrap
                          pl-0
                          text-sm
                          font-semibold
                          text-white
                          opacity-0
                          transition-all
                          duration-500
                          ease-[cubic-bezier(0.22,1,0.36,1)]
                          group-hover:max-w-[150px]
                          group-hover:pl-3
                          group-hover:opacity-100
                        "
                      >
                        NexaTech Networks
                      </span>
                    </Link>
                  </div>

                  {/* ================================================= */}
                  {/* DESKTOP NAVIGATION */}
                  {/* ================================================= */}

                  <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 md:flex">
                    <NavItem href="/#top">
                      Home
                    </NavItem>

                    {/* Who We Are */}
                    <div
                      className="relative group"
                      onMouseEnter={() => setDropOpen(true)}
                      onMouseLeave={() => setDropOpen(false)}
                    >
                      <button
                        onClick={() =>
                          setDropOpen((value) => !value)
                        }
                        className="
                          nav-link
                          flex items-center gap-1
                          rounded-full
                          px-4 py-2.5
                          text-[14px]
                          font-medium
                          text-white
                          transition-all duration-300
                          hover:bg-white/15
                          hover:text-white
                        "
                        aria-expanded={dropOpen}
                      >
                        Who we are

                        <ChevronDown
                          size={15}
                          strokeWidth={1.8}
                          className={`transition-transform duration-300 ${dropOpen ? 'rotate-180' : ''
                            }`}
                        />
                      </button>

                      {/* Dropdown */}
                      <div
                        className={`
                          absolute left-0 top-full mt-3
                          min-w-[280px] w-max
                          origin-top
                          rounded-2xl
                          p-2
                          transition-all duration-300
                          ${dropOpen
                            ? 'visible translate-y-0 scale-100 opacity-100'
                            : 'invisible -translate-y-2 scale-95 opacity-0'
                          }
                        `}
                        style={{
                          backgroundColor: 'color-mix(in oklab, #F6F4F1 95%, transparent)',
                          border: '1px solid color-mix(in oklab, #E4DED2 80%, transparent)',
                          boxShadow: '0 20px 60px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.9)',
                          backdropFilter: 'blur(28px) saturate(180%)',
                        }}
                      >
                        {WHO_WE_ARE.map((item, i) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setDropOpen(false)}
                            className="
                              group/item
                              flex items-center justify-between
                              rounded-xl
                              px-3.5 py-3
                              text-[14px]
                              font-medium
                              transition-all duration-200
                              hover:bg-[var(--color-stone)]
                            "
                            style={{ color: 'var(--color-black)' }}
                          >
                            <span className="flex items-center gap-3 whitespace-nowrap">
                              <span
                                className="
                                  font-mono text-[10px]
                                  transition-colors
                                "
                                style={{
                                  color: 'color-mix(in oklab, var(--color-coral) 70%, transparent)',
                                }}
                              >
                                0{i + 1}
                              </span>

                              {item.label}
                            </span>

                            <ArrowRight
                              size={15}
                              className="
                                ml-4
                                -translate-x-1
                                opacity-0
                                transition-all duration-300
                                group-hover/item:translate-x-0
                                group-hover/item:opacity-100
                              "
                              style={{ color: 'var(--color-coral)' }}
                            />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {LINKS.slice(1).map((link) => (
                      <NavItem
                        key={link.label}
                        href={link.href}
                      >
                        {link.label}
                      </NavItem>
                    ))}
                  </div>

                  {/* ================================================= */}
                  {/* RIGHT ACTIONS */}
                  {/* ================================================= */}

                  <div className="relative z-10 flex items-center gap-2 pr-1">
                    {/* Contact */}
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        openContact()
                      }}
                      className="
                        group
                        flex h-11 w-11
                        items-center justify-center
                        rounded-full
                        border border-white/10
                        bg-black
                        text-white
                        shadow-[0_4px_15px_rgba(0,0,0,0.2)]
                        transition-all duration-300
                        hover:scale-105
                        hover:bg-black/80
                      "
                      aria-label="Open contact form"
                    >
                      <MessageSquare
                        size={17}
                        strokeWidth={2}
                        className="transition-transform duration-500 group-hover:-rotate-12"
                      />
                    </button>

                    {/* Menu */}
                    <button
                      onClick={() => setOpen(true)}
                      className="
                        flex h-11 w-11
                        items-center justify-center
                        rounded-full
                        border border-white/10
                        bg-black
                        text-white
                        shadow-[0_4px_15px_rgba(0,0,0,0.2)]
                        transition-all duration-300
                        hover:scale-105
                        hover:bg-black/80
                      "
                      aria-label="Open menu"
                    >
                      <Menu
                        size={18}
                        strokeWidth={2}
                      />
                    </button>
                  </div>
                </nav>
              </div>
            </header>

            <FullScreenNav
              open={open}
              setOpen={setOpen}
            />
          </>,
          document.body
        )}
    </>
  )
}

/* ========================================================= */
/* NAV ITEM */
/* ========================================================= */

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (!href) return

    const isHash =
      href.startsWith('/#') || href.startsWith('#')

    if (isHash) {
      const targetPath = href.startsWith('/#')
        ? '/'
        : pathname

      const hash = href.split('#')[1]

      if (pathname === targetPath) {
        e.preventDefault()

        const element = hash
          ? document.getElementById(hash)
          : document.documentElement

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="
        magnet
        nav-link
        rounded-full
        px-3.5 py-2.5
        text-[14px]
        font-medium
        text-white
        transition-all duration-300
        hover:bg-white/15
        hover:text-white
      "
    >
      {children}
    </Link>
  )
}