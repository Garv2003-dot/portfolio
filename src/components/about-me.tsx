"use client"

import { motion } from "framer-motion"
import { User, Heart, Coffee, Zap } from "lucide-react"

export function AboutMe() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex items-end justify-between mb-24 border-b border-white/20 pb-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">ABOUT ME</h2>
          <span className="text-sm font-mono text-neutral-400 mb-2">THE PERSON BEHIND THE CODE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Mission Statement */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <User className="text-pink-500" /> Mission Statement
            </h3>
            <p className="text-2xl font-light leading-relaxed text-neutral-200">
              "I love designing systems that feel effortless to use. My focus is on <span className="text-white font-medium">performance</span>, <span className="text-white font-medium">accessibility</span>, and <span className="text-white font-medium">interaction design</span>. I believe that a great interface should be invisible, enabling users to achieve their goals without friction."
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Heart className="w-8 h-8 text-red-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">What Inspires Me</h4>
                <p className="text-neutral-400 text-sm">Minimalist architecture, Swiss design, and complex data visualization.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Coffee className="w-8 h-8 text-yellow-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Fuel</h4>
                <p className="text-neutral-400 text-sm">Espresso, Lo-Fi beats, and the satisfaction of a clean git log.</p>
              </div>
            </div>
          </div>

          {/* Timeline & Education */}
          <div className="space-y-16">
            <div className="relative pl-8 border-l border-white/10 space-y-12">
              <h3 className="text-2xl font-bold text-white mb-8 -ml-8 flex items-center gap-3">
                <Zap className="text-yellow-400" /> Experience
              </h3>
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-pink-500 ring-4 ring-black" />
                <span className="text-pink-400 font-mono text-sm mb-2 block">May 2025 - Present</span>
                <h4 className="text-xl font-bold text-white">Frontend Developer</h4>
                <p className="text-neutral-400">Veersa Technologies</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-neutral-700 ring-4 ring-black" />
                <span className="text-neutral-500 font-mono text-sm mb-2 block">Jul 2024 - Jan 2025</span>
                <h4 className="text-xl font-bold text-white">SDET Intern</h4>
                <p className="text-neutral-400">Telus International</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-neutral-700 ring-4 ring-black" />
                <span className="text-neutral-500 font-mono text-sm mb-2 block">May 2024 - Jul 2024</span>
                <h4 className="text-xl font-bold text-white">Web Dev Intern</h4>
                <p className="text-neutral-400">Bhuma Infotech</p>
              </div>
               <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-neutral-700 ring-4 ring-black" />
                <span className="text-neutral-500 font-mono text-sm mb-2 block">Oct 2023</span>
                <h4 className="text-xl font-bold text-white">Hospitality Director</h4>
                <p className="text-neutral-400">Under 25</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-neutral-700 ring-4 ring-black" />
                <span className="text-neutral-500 font-mono text-sm mb-2 block">Mar 2023 - May 2023</span>
                <h4 className="text-xl font-bold text-white">Web Dev Intern</h4>
                <p className="text-neutral-400">MVM Business Services</p>
              </div>
            </div>

            <div className="relative pl-8 border-l border-white/10 space-y-12">
              <h3 className="text-2xl font-bold text-white mb-8 -ml-8 flex items-center gap-3">
                <User className="text-cyan-400" /> Education
              </h3>
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-neutral-700 ring-4 ring-black" />
                <span className="text-neutral-500 font-mono text-sm mb-2 block">2025</span>
                <h4 className="text-xl font-bold text-white">B.Tech (Computer Science)</h4>
                <p className="text-neutral-400">Manipal University, Jaipur</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-neutral-700 ring-4 ring-black" />
                <span className="text-neutral-500 font-mono text-sm mb-2 block">2021</span>
                <h4 className="text-xl font-bold text-white">Class 12</h4>
                <p className="text-neutral-400">Amity International School, Noida</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-neutral-700 ring-4 ring-black" />
                <span className="text-neutral-500 font-mono text-sm mb-2 block">2019</span>
                <h4 className="text-xl font-bold text-white">Class 10</h4>
                <p className="text-neutral-400">Amity International School, Noida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
