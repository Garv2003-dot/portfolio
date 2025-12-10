"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Project } from "@/data/projects"

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="relative h-[450px] rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/50 backdrop-blur-sm transition-all duration-700 group-hover:border-pink-500/50 group-hover:shadow-[0_0_50px_-12px_rgba(236,72,153,0.3)] group-hover:-translate-y-2">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
          
          {/* Content */}
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
            <h3 className="text-3xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {project.title}
            </h3>
            <p className="text-pink-400 font-mono mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
              {project.subtitle}
            </p>
            <div className="flex items-center gap-2 text-white/80 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <span className="font-bold border-b border-pink-500">View Case Study</span>
              <ArrowRight className="w-4 h-4 text-pink-500" />
            </div>
          </div>

          {/* Background Image Placeholder */}
          <div className="absolute inset-0 bg-neutral-800 group-hover:scale-110 transition-transform duration-1000 ease-out">
             {/* You would put <Image /> here */}
             <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
