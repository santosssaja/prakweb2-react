import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-8 py-12">
      <h2 className="text-2xl font-bold">Projek</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <motion.a key={p.title} href={p.link} className="card flex gap-4 items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img src={p.img} alt="project" className="w-36 h-24 object-cover rounded-lg" />
            <div>
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm text-gray-600">{p.desc}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}