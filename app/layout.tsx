import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Instrument_Serif } from 'next/font/google'
import './globals.css'
import Stairs from '@/components/stairs'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Loader } from '@/components/loader'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NexaTech Networks — Skill. Solution. Scale.',
   icons: {
    icon: '/favicon.ico',
  },
  description:
    'NexaTech Networks is a premium technology studio building skill into every solution — design, development, AI, cloud and growth.',
  generator: 'v0.app',
  openGraph: {
    title: 'NexaTech Networks — Skill. Solution. Scale.',
    description:
      'A premium technology studio building skill into every solution.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F95C4B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrument.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans" suppressHydrationWarning>
        <Providers>
          <Loader />
          <Navbar />
          <Stairs>{children}</Stairs>
          <Footer />
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
