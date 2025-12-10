"use client"

import { motion, useScroll, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Logo } from "@/components/logo"
import { ContactModal } from "@/components/contact-modal"

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function HeaderV3() {
  const { scrollY } = useScroll()
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 pointer-events-none bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]"
      >
        <div className="pointer-events-auto">
          <Link href="/" className="block">
            <Logo />
          </Link>
        </div>

        <nav className="pointer-events-auto hidden md:flex gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-2 shadow-lg shadow-black/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-6 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="pointer-events-auto">
          <button
            onClick={() => setIsContactOpen(true)}
            className="px-6 py-3 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]"
          >
            Let's Talk
          </button>
        </div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 origin-left"
          style={{ scaleX: useScroll().scrollYProgress }}
        />
      </motion.header>

      <AnimatePresence>
        {isContactOpen && (
          <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}
