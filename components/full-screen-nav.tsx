'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { X, ChevronDown, ArrowRight } from 'lucide-react'

interface FullScreenNavProps {
    open: boolean
    setOpen: (open: boolean) => void
}

const WHO_WE_ARE = [
    { label: 'What makes us different', href: '/difference' },
    { label: 'Mission statement', href: '/mission' },
    { label: 'About', href: '/team' },
]

const FullScreenNav = ({ open, setOpen }: FullScreenNavProps) => {
    const router = useRouter()
    const pathname = usePathname()

    const fullScreenRef = useRef<HTMLDivElement>(null)
    const [currentTime, setCurrentTime] = useState('')
    const [dropOpen, setDropOpen] = useState(false)

    // Live time
    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(
                new Date().toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false,
                })
            )
        }

        updateTime()

        const interval = setInterval(updateTime, 1000)

        return () => clearInterval(interval)
    }, [])

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        path: string
    ) => {
        if (!path || path === '#') {
            e.preventDefault()
            setOpen(false)
            return
        }

        e.preventDefault()
        setOpen(false)

        const isHash =
            path.startsWith('/#') || path.startsWith('#')

        if (isHash) {
            const targetPath = path.startsWith('/#')
                ? '/'
                : pathname

            const id = path.split('#')[1]

            if (pathname === targetPath) {
                setTimeout(() => {
                    const lenis = (window as any).__lenis
                    const element = id ? document.getElementById(id) : document.documentElement

                    if (lenis) {
                        lenis.scrollTo(element || 0, { duration: 1.2 })
                    } else if (element) {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        })
                    } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                }, 350)

                return
            }
        }

        setTimeout(() => {
            router.push(path)
        }, 350)
    }

    useGSAP(
        () => {
            const tl = gsap.timeline()

            if (open) {
                tl.set('.fullscreennav', {
                    display: 'block',
                })

                tl.to('.stairing', {
                    height: '100%',
                    duration: 0.7,
                    stagger: {
                        amount: -0.3,
                    },
                    ease: 'power3.inOut',
                })

                tl.to(
                    '.link-container',
                    {
                        opacity: 1,
                        rotateX: 0,
                        duration: 0.8,
                        stagger: {
                            amount: 0.3,
                        },
                        ease: 'power3.out',
                    },
                    '-=0.35'
                )

                tl.to(
                    '.navlink',
                    {
                        opacity: 1,
                        duration: 0.5,
                    },
                    '-=0.3'
                )
            } else {
                tl.to('.link-container', {
                    opacity: 0,
                    rotateX: 90,
                    duration: 0.4,
                    stagger: {
                        amount: 0.1,
                    },
                    ease: 'power2.in',
                })

                tl.to(
                    '.navlink',
                    {
                        opacity: 0,
                        duration: 0.2,
                    },
                    '<'
                )

                tl.to('.stairing', {
                    height: 0,
                    duration: 0.6,
                    stagger: {
                        amount: 0.1,
                    },
                    ease: 'power3.inOut',
                })

                tl.set('.fullscreennav', {
                    display: 'none',
                })
            }
        },
        {
            dependencies: [open],
        }
    )

    return (
        <div
            ref={fullScreenRef}
            className="fullscreennav fixed inset-0 z-[100] hidden h-screen w-full overflow-hidden text-white"
        >
            <style jsx>{`
                .link-container {
                    opacity: 0;
                    transform: rotateX(90deg);
                }

                .stair-bg {
                    background-color: var(--color-coral);
                }

                .nav-title {
                    transition:
                        color 0.3s ease,
                        opacity 0.3s ease;
                    color: #000000;
                }

                .nav-title:hover {
                    color: #ffffff;
                }

                .footer-link {
                    color: rgba(0, 0, 0, 0.35);
                    transition: color 0.25s ease;
                    letter-spacing: 0;
                    line-height: 1;
                }

                .footer-link:hover {
                    color: rgba(0, 0, 0, 0.75);
                }

                .social-icon {
                    color: rgba(0, 0, 0, 0.4);
                    transition:
                        color 0.3s ease,
                        transform 0.3s ease;
                }

                .social-icon:hover {
                    color: #000000;
                    transform: translateY(-2px);
                }
            `}</style>

            {/* Background stairs — coral */}
            <div className="pointer-events-none fixed inset-0 h-screen w-full">
                <div className="flex h-full w-full">
                    <div className="stairing h-0 w-1/5 stair-bg" />
                    <div className="stairing h-0 w-1/5 stair-bg" />
                    <div className="stairing h-0 w-1/5 stair-bg" />
                    <div className="stairing h-0 w-1/5 stair-bg" />
                    <div className="stairing h-0 w-1/5 stair-bg" />
                </div>
            </div>

            {/* Main navigation */}
            <div className="relative z-10 flex h-full w-full flex-col font-sans">

                {/* Top Navigation */}
                <div className="navlink absolute left-0 right-0 top-0 z-20 flex items-start justify-between px-5 pt-7 lg:px-10 lg:pt-8">

                    {/* NexaTech Networks — Top Left */}
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/50 lg:text-xs">
                        NexaTech Networks
                    </div>

                    {/* Close */}
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                        className="cursor-pointer text-black/60 transition-all duration-300 hover:scale-105 hover:text-black"
                    >
                        <X
                            className="h-10 w-10 lg:h-14 lg:w-14"
                            strokeWidth={1}
                        />
                    </button>
                </div>

                {/* Main Links */}
                <div className="flex flex-1 flex-col justify-center overflow-y-auto my-16 px-4">

                    {/* Home */}
                    <div className="link-container origin-top border-t border-black/15">
                        <Link
                            href="/#hero"
                            onClick={(e) =>
                                handleNavClick(e, '/#hero')
                            }
                            className="block w-full"
                        >
                            <h1 className="nav-title py-2 text-center font-sans text-3xl font-medium uppercase leading-none tracking-tighter sm:text-4xl lg:py-3 lg:text-[5vw]">
                                Home
                            </h1>
                        </Link>
                    </div>

                    {/* Who We Are */}
                    <div className="link-container origin-top border-t border-black/15">
                        <button
                            type="button"
                            onClick={() => setDropOpen((prev) => !prev)}
                            className="flex w-full items-center justify-center gap-3 py-2 text-center font-sans text-3xl font-medium uppercase leading-none tracking-tighter text-black transition-colors hover:text-white sm:text-4xl lg:py-3 lg:text-[5vw]"
                            aria-expanded={dropOpen}
                        >
                            <span>Who we are</span>
                            <ChevronDown
                                size={24}
                                strokeWidth={2}
                                className={`transition-transform duration-300 ${
                                    dropOpen ? 'rotate-180' : ''
                                }`}
                            />
                        </button>

                        {/* Dropdown Items */}
                        <div
                            className={`grid transition-all duration-300 ease-in-out ${
                                dropOpen ? 'grid-rows-[1fr] opacity-100 py-3' : 'grid-rows-[0fr] opacity-0 py-0'
                            } overflow-hidden`}
                        >
                            <div className="min-h-0 flex flex-col gap-2 px-2 max-w-sm mx-auto w-full">
                                {WHO_WE_ARE.map((item, i) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className="
                                            group/item
                                            flex items-center justify-between
                                            rounded-xl
                                            px-4 py-2.5
                                            text-sm font-medium
                                            bg-black/10 hover:bg-black/25 text-black hover:text-white
                                            transition-all duration-200
                                        "
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="font-mono text-xs opacity-60">
                                                0{i + 1}
                                            </span>
                                            {item.label}
                                        </span>
                                        <ArrowRight
                                            size={16}
                                            className="-translate-x-1 opacity-60 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* About */}
                    <div className="link-container origin-top border-t border-black/15">
                        <Link
                            href="/#about"
                            onClick={(e) =>
                                handleNavClick(e, '/#about')
                            }
                            className="block w-full"
                        >
                            <h1 className="nav-title py-2 text-center font-sans text-3xl font-medium uppercase leading-none tracking-tighter sm:text-4xl lg:py-3 lg:text-[5vw]">
                                About
                            </h1>
                        </Link>
                    </div>

                    {/* Services */}
                    <div className="link-container origin-top border-t border-black/15">
                        <Link
                            href="/services"
                            onClick={(e) =>
                                handleNavClick(e, '/services')
                            }
                            className="block w-full"
                        >
                            <h1 className="nav-title py-2 text-center font-sans text-3xl font-medium uppercase leading-none tracking-tighter sm:text-4xl lg:py-3 lg:text-[5vw]">
                                Services
                            </h1>
                        </Link>
                    </div>

                    {/* Client project */}
                    <div className="link-container origin-top border-y border-black/15">
                        <Link
                            href="/projects"
                            onClick={(e) =>
                                handleNavClick(e, '/projects')
                            }
                            className="block w-full"
                        >
                            <h1 className="nav-title py-2 text-center font-sans text-3xl font-medium uppercase leading-none tracking-tighter sm:text-4xl lg:py-3 lg:text-[5vw]">
                                Client project
                            </h1>
                        </Link>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="navlink absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between px-5 pb-6 lg:px-10 lg:pb-8">

                    {/* Bottom Left — Policies */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[4px] font-normal leading-none lg:gap-x-4 lg:text-[5px]">

                        <Link
                            href="#"
                            className="footer-link"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"
                            className="footer-link"
                        >
                            Privacy Notice
                        </Link>

                        <Link
                            href="#"
                            className="footer-link"
                        >
                            Ethical Report
                        </Link>

                        <Link
                            href="#"
                            className="footer-link"
                        >
                            Consent Options
                        </Link>
                    </div>

                    {/* Bottom Right — Time + Social Icons */}
                    <div className="flex items-center gap-5">

                        {/* Time */}
                        <div className="font-mono text-[8px] tracking-[0.08em] text-black/35 lg:text-[10px]">
                            {currentTime}
                        </div>

                        <div className="h-3 w-px bg-white/15" />

                        {/* Instagram */}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="social-icon"
                        >
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect
                                    x="3"
                                    y="3"
                                    width="18"
                                    height="18"
                                    rx="5"
                                />
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="4"
                                />
                                <circle
                                    cx="17.5"
                                    cy="6.5"
                                    r="0.75"
                                    fill="currentColor"
                                    stroke="none"
                                />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="social-icon"
                        >
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M6.5 8.5H3.2V20h3.3V8.5ZM4.85 3A2 2 0 1 0 4.85 7a2 2 0 0 0 0-4ZM21 13.4c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.87V8.5H10V20h3.3v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.72 1.85 3.05V20H21v-6.6Z" />
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav