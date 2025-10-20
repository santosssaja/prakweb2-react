import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full py-6 px-8 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary">
          <img src="https://avatars.githubusercontent.com/u/157942514?v=4" alt="avatar" />
        </div>
        <div>
          <h1 className="text-lg font-semibold">Santoso</h1>
          <p className="text-sm text-gray-600">Software Engineer · Frontend</p>
        </div>
      </div>

      <nav className="flex gap-4">
        <a href="#about" className="text-sm hover:text-primary">About</a>
        <a href="#skills" className="text-sm hover:text-primary">Skills</a>
        <a href="#projects" className="text-sm hover:text-primary">Projects</a>
      </nav>
    </motion.header>
  )
}