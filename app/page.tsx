'use client'

import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Services } from '@/components/services'
import { Statement } from '@/components/statement'
import { Work } from '@/components/work'
import { About } from '@/components/about'

import { BuiltWith } from '@/components/built-with'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main>
      <Hero startDelay={0.2} />
      <Marquee />
      <Work />
      <Services />
      <Statement />
      <About />

      <BuiltWith />
      <Contact />
    </main>
  )
}
