import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section id="about" className="container mx-auto px-8 py-12">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl font-bold">Tentang Saya</motion.h2>
      <motion.p className="mt-4 text-gray-700" initial={{ y: 10, opacity: 0 }} whileInView={{ y:0, opacity:1 }}>
        Saya seorang programmer yang suka membongkar cara kerja sistem, suka mencoba teknologi baru, dan sedang mendalami cybersecurity. Saya belajar dengan praktek langsung, membuat proyek kecil, dan memecahkan masalah nyata.
      </motion.p>
    </motion.section>
  )
}