'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const projects = [
  {
    title: 'Certiyi Trust Center',
    description: 'Enterprise-grade multi-tenant platform for security compliance and trust management. Features dynamic branding, RBAC, and real-time reporting.',
    image: '/certifyitrust.png',
    tags: ['Laravel', 'React', 'PostgreSQL', 'Multi-tenancy'],
    link: 'https://trust.certifyi.ai/',
    github: '#',
  },
  {
    title: 'Orkest TimeApp',
    description: 'Intelligent time tracking browser extension with automatic activity detection and seamless project management integration.',
    image: '/orkest-timesheet.png',
    tags: ['Chrome Extension', 'JavaScript', 'REST APIs'],
    link: 'https://chromewebstore.google.com/detail/Orkest%20Timesheet/nfloafdhlidblcbapcablepdcibinfgj',
    github: '#',
  },
  {
    title: 'Nampa HRM System',
    description: 'Comprehensive HR management platform with automated workflows, queued email systems, and employee lifecycle management.',
    image: '/placeholder.svg',
    tags: ['Laravel', 'Queue Jobs', 'MySQL', 'Automation'],
    link: '#',
    github: '#',
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-serif font-bold mb-12 text-balance"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all overflow-hidden">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="mb-4 rounded-xl overflow-hidden bg-muted aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </a>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="gap-2" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3" />
                      View
                    </a>
                  </Button>
                  <Button size="sm" variant="ghost" className="gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
