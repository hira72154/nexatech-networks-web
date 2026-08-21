'use client'

import { ContactProvider } from '@/components/contact-modal'
import { SmoothScroll } from '@/components/smooth-scroll'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ContactProvider>
      <SmoothScroll>
        {children}
      </SmoothScroll>
    </ContactProvider>
  )
}
