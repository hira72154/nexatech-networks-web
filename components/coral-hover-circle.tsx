'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { motion } from "framer-motion";

/* =========================================================
 * CORAL HOVER CIRCLE  (unchanged — your original component)
 * ========================================================= */

interface CoralHoverCircleProps {
    children: ReactNode
    circleContent: ReactNode
    circleSize?: number
    className?: string
}

export function CoralHoverCircle({
    children,
    circleContent,
    circleSize = 380,
    className = '',
}: CoralHoverCircleProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const circleRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        const circle = circleRef.current

        if (!container || !circle) return

        const half = circleSize / 2

        const moveX = gsap.quickTo(circle, 'x', { duration: 0.45, ease: 'power3.out' })
        const moveY = gsap.quickTo(circle, 'y', { duration: 0.45, ease: 'power3.out' })
        const scaleX = gsap.quickTo(circle, 'scaleX', { duration: 0.35, ease: 'power3.out' })
        const scaleY = gsap.quickTo(circle, 'scaleY', { duration: 0.35, ease: 'power3.out' })
        const rotation = gsap.quickTo(circle, 'rotation', { duration: 0.5, ease: 'power3.out' })

        const setScale = (value: number) => {
            scaleX(value)
            scaleY(value)
        }

        gsap.set(circle, { x: 0, y: 0, scaleX: 0, scaleY: 0, rotation: 0 })

        const handleEnter = () => setScale(1)

        const handleMove = (event: MouseEvent) => {
            const rect = container.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top

            moveX(x - half)
            moveY(y - half)

            const normalizedX = (x / rect.width - 0.5) * 2
            rotation(normalizedX * 4)
        }

        const handleLeave = () => {
            setScale(0)
            rotation(0)
        }

        const handleDown = () => setScale(1.08)
        const handleUp = () => setScale(1)

        container.addEventListener('mouseenter', handleEnter)
        container.addEventListener('mousemove', handleMove)
        container.addEventListener('mouseleave', handleLeave)
        container.addEventListener('mousedown', handleDown)
        container.addEventListener('mouseup', handleUp)

        return () => {
            container.removeEventListener('mouseenter', handleEnter)
            container.removeEventListener('mousemove', handleMove)
            container.removeEventListener('mouseleave', handleLeave)
            container.removeEventListener('mousedown', handleDown)
            container.removeEventListener('mouseup', handleUp)

            gsap.killTweensOf(circle)
        }
    }, [circleSize])

    return (
        <div ref={containerRef} className={`relative cursor-crosshair ${className}`}>
            {children}

            <div
                ref={circleRef}
                className="pointer-events-none absolute left-0 top-0 z-50 rounded-full bg-[var(--color-coral)] will-change-transform"
                style={{ height: circleSize, width: circleSize }}
            >
                <div className="flex h-full w-full items-center justify-center p-8 text-center">
                    {circleContent}
                </div>
            </div>
        </div>
    )
}

/* =========================================================
 * MASK REVEAL TEXT  (new — cursor-follow mask reveal)
 * ---------------------------------------------------------
 * Renders a muted version of `children`, plus a coral
 * version of the same text clipped by a mask shape that
 * smoothly follows the cursor, growing on hover.
 *
 * Coordinates are computed relative to this component's own
 * container (not the viewport), so it can be dropped into
 * any section of the page — it doesn't need to be full-screen.
 * ========================================================= */

interface MaskRevealTextProps {
    /** The text/content to render (shown muted, then revealed in accent color) */
    children: ReactNode
    /** Extra classes for the outer wrapper */
    className?: string
    /** Mask circle size while idle, in px (default 100) */
    baseSize?: number
    /** Mask circle size while hovered, in px (default 450) */
    hoverSize?: number
    /** Tailwind color class for the muted base layer (default text-black/30) */
    mutedClassName?: string
    /** Tailwind color class for the revealed accent layer (default text-[var(--color-coral)]) */
    revealClassName?: string
    /** Cursor style override (default cursor-default) */
    cursorClassName?: string
}

export function MaskRevealText({
    children,
    className = '',
    baseSize = 100,
    hoverSize = 450,
    mutedClassName = 'text-black/30',
    revealClassName = 'text-[var(--color-coral)]',
    cursorClassName = 'cursor-default',
}: MaskRevealTextProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)

    const size = isHovered ? hoverSize : baseSize

    const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (!rect) return
        setPos({ x: event.clientX - rect.left, y: event.clientY - rect.top })
    }

    return (
        <div
            ref={containerRef}
            className={`relative select-none overflow-hidden ${cursorClassName} ${className}`}
            onMouseMove={handleMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Base layer — muted, always visible */}
            <div className={mutedClassName}>{children}</div>

            {/* Revealed layer — accent color, clipped to the cursor mask.
                select-none prevents the duplicate text from breaking text selection. */}
            <motion.div
                className="mask pointer-events-none absolute inset-0 select-none"
                animate={
                    {
                        maskPosition: `${pos.x - size / 2}px ${pos.y - size / 2}px`,
                        WebkitMaskPosition: `${pos.x - size / 2}px ${pos.y - size / 2}px`,
                        maskSize: `${size}px`,
                        WebkitMaskSize: `${size}px`,
                    } as any
                }
                transition={{ type: 'tween', ease: 'backOut', duration: 0.6 }}
            >
                <div className={`select-none ${revealClassName}`}>{children}</div>
            </motion.div>
        </div>
    )
}