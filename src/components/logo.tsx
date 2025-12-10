"use client"

import { motion } from "framer-motion"

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative flex items-center justify-center font-black tracking-tighter text-2xl cursor-pointer group"
    >
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400 group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-cyan-400 transition-all duration-300">
        GA.
      </span>
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        layoutId="logo-glow"
      />
    </motion.div>
  )
}
