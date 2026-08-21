import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects, getProject } from '@/lib/projects'
import { CaseStudy } from '@/components/case-study'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Project not found — TECHFEXIOUS' }
  return {
    title: `${project.title} — TECHFEXIOUS`,
    description: project.summary,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const idx = projects.findIndex((p) => p.slug === slug)
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]

  return <CaseStudy project={project} prev={prev} next={next} />
}
