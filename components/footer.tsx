'use client'

import Link from 'next/link'
import { useContact } from '@/components/contact-modal'
import { projects } from '@/lib/projects'

const services = ['Design', 'Development', 'AI & Data', 'Cloud & DevOps', 'Digital Marketing']
const socials = ['Twitter', 'LinkedIn', 'Instagram', 'GitHub']

export function Footer() {
  const { open } = useContact()

  return (
    <footer
      className="relative z-0"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5 md:gap-8">
          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <span
              className="font-sans text-lg font-bold tracking-[0.2em]"
              style={{ color: 'var(--color-paper)' }}
            >
              NexaTech Networks
            </span>
            <span
              className="font-serif text-base italic"
              style={{ color: 'var(--color-coral)' }}
            >
              Skill. Solution. Scale.
            </span>
            <p
              className="mt-2 text-sm max-w-xs leading-relaxed"
              style={{ color: 'rgba(246,244,241,0.6)' }}
            >
              A premium technology studio building skill into every solution. Let's create something extraordinary together.
            </p>
            <button
              onClick={open}
              data-cursor
              className="mt-6 w-fit rounded-full px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(249,92,75,0.35)]"
              style={{ backgroundColor: 'var(--color-coral)', color: 'var(--color-paper)' }}
            >
              Start Your Project
            </button>
          </div>

          <FooterCol title="Work">
            {projects.slice(0, 4).map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} data-cursor className="footer-link">
                {p.title}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {services.map((s) => (
              <Link key={s} href="/#services" data-cursor className="footer-link">
                {s}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="Contact Us">
            <a href="mailto:info@NexaTechnetworks.com" data-cursor className="footer-link">info@NexaTechnetworks.com</a>
            <a href="tel:+921234567890" data-cursor className="footer-link">+92 (123) 456-7890</a>
            <div className="mt-4 flex flex-col gap-1 footer-link pointer-events-none opacity-60">
              <span>Johar Town</span>
              <span>Lahore, Pakistan</span>
            </div>
          </FooterCol>

          <FooterCol title="Connect">
            {socials.map((s) => (
              <a key={s} href="#" data-cursor className="footer-link">
                {s}
              </a>
            ))}
          </FooterCol>
        </div>

        {/* Large CTA Section */}
        <div
          className="mt-24 border-t pt-16"
          style={{ borderColor: 'rgba(246,244,241,0.08)' }}
        >
          <h2
            className="font-sans text-[10vw] leading-[0.9] font-light md:text-8xl"
            style={{ color: 'var(--color-paper)' }}
          >
            Ready to{' '}
            <span
              className="font-serif italic"
              style={{ color: 'var(--color-coral)' }}
            >
              Scale?
            </span>
          </h2>
        </div>

        <div
          className="mt-16 flex flex-col gap-6 border-t pt-8 text-sm md:flex-row md:items-center md:justify-between"
          style={{ borderColor: 'rgba(246,244,241,0.08)', color: 'rgba(246,244,241,0.4)' }}
        >
          <span>© {new Date().getFullYear()} NexaTech Networks. All rights reserved.</span>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-link">Terms of Service</Link>
            <Link href="/cookies" className="footer-link">Cookie Policy</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: rgba(246, 244, 241, 0.55);
          font-size: 0.95rem;
          transition: color .25s ease;
        }
        .footer-link:hover { color: rgba(246, 244, 241, 0.95); }
      `}</style>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <span
        className="font-sans text-xs font-bold tracking-[0.3em] uppercase"
        style={{ color: 'var(--color-paper)' }}
      >
        {title}
      </span>
      <nav className="flex flex-col gap-3">{children}</nav>
    </div>
  )
}
