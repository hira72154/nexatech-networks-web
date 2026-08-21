'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

type ContactCtx = { open: () => void; close: () => void }
const Ctx = createContext<ContactCtx>({ open: () => { }, close: () => { } })

export function useContact() {
  return useContext(Ctx)
}

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const open = useCallback(() => {
    console.log('Contact modal opening...')
    setSent(false)
    setIsOpen(true)
  }, [])
  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) {
      const timeout = window.setTimeout(() => setVisible(false), 220)
      return () => window.clearTimeout(timeout)
    }

    const timeout = window.setTimeout(() => setVisible(true), 10)
    return () => window.clearTimeout(timeout)
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    if (isOpen) {
      ; (window as any).__lenis?.stop?.()
    } else {
      ; (window as any).__lenis?.start?.()
    }
    return () => {
      document.body.style.overflow = ''
        ; (window as any).__lenis?.start?.()
    }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close])

  return (
    <Ctx.Provider value={{ open, close }}>
      {children}
      {mounted && isOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
          <button
            aria-label="Close contact form"
            onClick={close}
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              backgroundColor: visible ? 'color-mix(in oklab, #000000 55%, transparent)' : 'transparent',
              opacity: visible ? 1 : 0,
            }}
          />
          <div
            className={`relative w-full max-w-lg rounded-[28px] p-6 transition-all duration-500 md:p-10 ${visible
                ? 'translate-y-0 scale-100 opacity-100'
                : '-translate-y-4 scale-[0.95] opacity-0'
              }`}
            style={{
              backgroundColor: 'var(--color-paper)',
              border: '1px solid var(--color-stone)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
              transitionTimingFunction: visible ? 'cubic-bezier(0.34,1.56,0.64,1)' : 'cubic-bezier(0.4,0,0.2,1)'
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Start your project"
          >
            <button
              onClick={close}
              data-cursor
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full transition-colors"
              style={{ color: 'var(--color-black)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-stone)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
              }}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {sent ? (
              <div className="py-10 text-center">
                <p className="font-serif text-3xl" style={{ color: 'var(--color-black)' }}>
                  Thank you.
                </p>
                <p className="mt-3 text-sm" style={{ color: 'var(--color-muted)' }}>
                  We&apos;ve received your note and will be in touch shortly.
                </p>
              </div>
            ) : (
              <>
                <p className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--color-coral)' }}>
                  Start Your Project
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl" style={{ color: 'var(--color-black)' }}>
                  Let&apos;s build something with skill.
                </h2>
                <form
                  className="mt-6 flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                >
                  <Field label="Name" name="name" placeholder="Your name" />
                  <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                  <Field label="Company Name" name="business" placeholder="Company or brand" />
                  <Field label="Budget" name="budget" placeholder="e.g. $10k - $25k" />
                  <Field label="Message" name="message" placeholder="Tell us what you're building…" textarea />
                  <button
                    type="submit"
                    data-cursor="Send"
                    className="mt-2 rounded-full px-6 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: 'var(--color-coral)', color: 'var(--color-paper)' }}
                  >
                    Send Brief
                  </button>
                </form>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </Ctx.Provider>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  textarea = false,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  textarea?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs font-medium tracking-wide uppercase"
        style={{ color: 'var(--color-muted)' }}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          required
          placeholder={placeholder}
          className="resize-none rounded-lg border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-coral)]"
          style={{
            borderColor: 'var(--color-stone)',
            color: 'var(--color-black)',
          }}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className="rounded-lg border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-coral)]"
          style={{
            borderColor: 'var(--color-stone)',
            color: 'var(--color-black)',
          }}
        />
      )}
    </div>
  )
}
