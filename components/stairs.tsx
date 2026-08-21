'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

// Module-level flag — survives React Strict Mode double-invocation.
// True until the loader finishes for the first time this session.
let loaderActive = true

const Stairs = (props: { children: React.ReactNode }) => {
  const currentPath = usePathname()
  const prevPath = useRef<string | null>(null)
  const stairParentRef = useRef<HTMLDivElement>(null)
  const pageRef = useRef<HTMLDivElement>(null)

  // Listen for loader:done to clear the flag
  useEffect(() => {
    const onLoaderDone = () => { loaderActive = false }
    window.addEventListener('loader:done', onLoaderDone)
    // If no loader (reduced motion / already done), clear immediately
    if (!document.documentElement.hasAttribute('data-loading')) {
      loaderActive = false
    }
    return () => window.removeEventListener('loader:done', onLoaderDone)
  }, [])

  useGSAP(function () {
    // Skip on first mount OR if the loader is still active
    if (prevPath.current === null || prevPath.current === currentPath) {
      prevPath.current = currentPath
      return
    }
    prevPath.current = currentPath

    // — Route change: run full stair wipe —
    const tl = gsap.timeline()

    tl.set(stairParentRef.current, { display: 'block' })

    tl.from('.stair', {
      yPercent: -100,
      duration: 0.6,
      ease: 'power3.inOut',
      stagger: { amount: 0.22, from: 'start' },
    })

    tl.to({}, { duration: 0.15 })

    tl.to('.stair', {
      yPercent: 100,
      duration: 0.6,
      ease: 'power3.inOut',
      stagger: { amount: 0.22, from: 'end' },
    })

    tl.set(stairParentRef.current, { display: 'none' })
    tl.set('.stair', { yPercent: 0 })

    gsap.from(pageRef.current, {
      opacity: 0,
      y: 18,
      duration: 0.7,
      ease: 'power2.out',
      delay: 0.9,
      clearProps: 'all',
    })
  }, [currentPath])

  return (
    <div>
      {/* Page-transition overlay — only used on route changes */}
      <div
        ref={stairParentRef}
        className="fixed inset-0 z-[150] hidden h-screen w-full overflow-hidden"
      >
        <div className="flex h-full w-full">
          <div className="stair h-full w-1/5" style={{ backgroundColor: 'var(--color-coral)' }} />
          <div className="stair h-full w-1/5" style={{ backgroundColor: '#f96d5d' }} />
          <div className="stair h-full w-1/5" style={{ backgroundColor: 'var(--color-coral)' }} />
          <div className="stair h-full w-1/5" style={{ backgroundColor: '#f96d5d' }} />
          <div className="stair h-full w-1/5" style={{ backgroundColor: 'var(--color-coral)' }} />
        </div>
      </div>

      <div ref={pageRef}>
        {props.children}
      </div>
    </div>
  )
}

export default Stairs
