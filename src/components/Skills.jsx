import React from 'react'
import { motion } from 'framer-motion'
import { SKILLS } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-8 py-12">
      <h2 className="text-2xl font-bold">Skill & Teknologi</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {SKILLS.map((s, i) => (
          <motion.div key={s.name} className="card flex items-center gap-4"
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={s.icon} alt="icon" className="w-12 h-12" />
            <div>
              <div className="font-semibold">{s.name}</div>
              <div className="text-sm text-gray-600">{s.level}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}