'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-serif font-bold mb-8 text-balance"
        >
          A journey from PHP Intern to <span className="text-primary">FullStack Architect</span>.
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground leading-relaxed mb-8"
        >
          I am Bishwo Sapkota, a final-year BCA student at Madan Bhandari Memorial College. 
          I bridge the gap between complex backend architectures and seamless frontend experiences. 
          My journey has been defined by rapid growth—transitioning from mastering MVC at Neutroline 
          to building enterprise multi-tenant platforms at Dignep Group.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12">
          <h3 className="text-2xl font-serif font-semibold mb-6">Current Stack</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">Next.js + React UI</h4>
              <p className="text-sm text-muted-foreground">Modern frontend with Server Components and optimized rendering</p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">Laravel + REST APIs</h4>
              <p className="text-sm text-muted-foreground">Robust backend with elegant API design and authentication</p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg mb-2">SQL + Eloquent ORM</h4>
              <p className="text-sm text-muted-foreground">Efficient data modeling with powerful query optimization</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
