import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="container mx-auto px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold leading-tight">Halo — Saya Santoso.</h2>
          <p className="mt-4 text-lg text-gray-700">Saya mahasiswa yang sedang mempelajari sistem komputer, pemrograman, dan cybersecurity. Menyukai proyek praktis dan eksplorasi mendalam.</p>

          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-4 py-2 rounded-xl border border-primary text-primary hover:bg-primary/10">Lihat Projek</a>
            <a href="#contact" className="px-4 py-2 rounded-xl bg-primary text-white">Kontak</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="card"
        >
          <h3 className="text-xl font-semibold">Ringkasan singkat</h3>
          <p className="mt-3 text-gray-700">Saya fokus di frontend modern dengan React, membangun UI interaktif, serta mempelajari low-level dan security. Ingin jadi engineer yang mengerti sistem dari bawah sampai atas.</p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg border">
              <div className="text-sm font-semibold">Pengalaman</div>
              <div className="text-xs text-gray-600">Personal projects & learning</div>
            </div>
            <div className="p-3 rounded-lg border">
              <div className="text-sm font-semibold">Bahasa</div>
              <div className="text-xs text-gray-600">JavaScript, Python</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}