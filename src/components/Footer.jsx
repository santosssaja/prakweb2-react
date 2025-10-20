import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full py-8 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} Santoso. Built with React + Tailwind + Framer Motion.
    </footer>
  )
}