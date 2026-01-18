'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'

const experiences = [
  {
    title: 'Certiyi - Trust Center',
    role: 'FullStack Developer',
    description: 'Architected and deployed a multi-tenant SaaS platform with dynamic branding and secure access control. Implemented role-based permissions and real-time data synchronization.',
    technologies: ['Laravel', 'React', 'Multi-tenancy', 'RBAC'],
    link: 'https://trust.certifyi.ai/',
  },
  {
    title: 'Orkest – TimeApp',
    role: 'Chrome Extension Developer',
    description: 'Built a browser extension for accurate time tracking and automated reporting. Integrated with project management APIs for seamless workflow integration.',
    technologies: ['JavaScript', 'Chrome APIs', 'REST Integration', 'Analytics'],
    link: 'https://chromewebstore.google.com/detail/Orkest%20Timesheet/nfloafdhlidblcbapcablepdcibinfgj',
  },
  {
    title: 'Nampa HRM',
    role: 'Backend Engineer',
    description: 'Developed queued email systems and automated employee onboarding workflows. Optimized database queries resulting in 40% performance improvement.',
    technologies: ['Laravel', 'Queue Jobs', 'MySQL', 'Automation'],
    link: '#',
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-serif font-bold mb-12 text-balance"
        >
          Professional <span className="text-primary">Experience</span>
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 group/link"
                    >
                      <h3 className="text-2xl font-serif font-semibold mb-1 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      {exp.link !== '#' && (
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover/link:text-primary transition-colors" />
                      )}
                    </a>
                    <p className="text-muted-foreground font-medium">{exp.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
