'use client'

import React from 'react'
import Link from 'next/link'
import { Project } from '@/lib/projects'

function Card({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block h-full w-full overflow-hidden rounded-none transition-all duration-500 hover:rounded-[60px] lg:w-1/2"
    >
      <img
        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        src={project.image}
        alt={project.title}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/0 transition-all duration-400 group-hover:bg-black/45" />

      {/* Hover label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {/* Coral pill */}
        <span
          className="rounded-full px-7 py-3 font-sans text-sm font-semibold uppercase tracking-[0.2em] backdrop-blur-md"
          style={{ backgroundColor: 'var(--color-coral)', color: '#ffffff' }}
        >
          View Project
        </span>
        <h2
          className="font-sans text-2xl font-light uppercase tracking-widest lg:text-3xl"
          style={{ color: '#ffffff' }}
        >
          {project.title}
        </h2>
      </div>

      {/* Bottom gradient info strip */}
      <div
        className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform duration-400 group-hover:translate-y-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
        }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em]"
          style={{ color: 'rgba(249,92,75,0.9)' }}>
          {project.category} · {project.year}
        </p>
      </div>
    </Link>
  )
}

export function ProjectCard({ project1, project2 }: { project1: Project; project2?: Project }) {
  return (
    <>
      <Card project={project1} />
      {project2 ? (
        <Card project={project2} />
      ) : (
        <div className="hidden lg:block lg:w-1/2" />
      )}
    </>
  )
}
