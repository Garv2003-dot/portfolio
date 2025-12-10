"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Footer() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("garvak23@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer id="contact" className="w-full border-t border-white/10 bg-black/40 backdrop-blur-xl py-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-pink-500/5 blur-[100px] pointer-events-none" />

      <div className="container flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-6 relative z-10">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">Let's build something amazing.</h3>
          <p className="text-neutral-400">
            Built by Garv Akolia. Hosted on Vercel.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Garv2003-dot"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all group"
            >
              <Github className="h-5 w-5 text-neutral-400 group-hover:text-white transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-blue-500/20 hover:text-blue-400 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] transition-all group"
            >
              <Linkedin className="h-5 w-5 text-neutral-400 group-hover:text-blue-400 transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:garvak23@gmail.com"
              className="p-3 bg-white/5 rounded-full hover:bg-pink-500/20 hover:text-pink-400 hover:shadow-[0_0_20px_-5px_rgba(236,72,153,0.3)] transition-all group"
            >
              <Mail className="h-5 w-5 text-neutral-400 group-hover:text-pink-400 transition-colors" />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm text-neutral-300"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="copied"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2 text-green-400"
                >
                  <Check className="w-4 h-4" /> Copied!
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" /> Copy Email
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </footer>
  )
}
