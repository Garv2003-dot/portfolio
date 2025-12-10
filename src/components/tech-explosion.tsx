"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Database, Layout, Terminal, X, Cpu, Globe, Server, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

const techCategories = [
  {
    id: "frontend",
    title: "Frontend & State",
    icon: Layout,
    color: "from-pink-500 to-rose-500",
    description: "Building responsive, scalable interfaces and managing complex state.",
    philosophy: "I focus on component reusability and predictable state management.",
    skills: [
      { name: "React.js", level: 95, detail: "Hooks, Custom Hooks, Performance", type: "Core" },
      { name: "React Native", level: 90, detail: "Cross-platform Mobile Apps", type: "Core" },
      { name: "Next.js", level: 90, detail: "SSR, App Router, Server Actions", type: "Skilled" },
      { name: "Redux Toolkit", level: 92, detail: "State Slices, RTK Query", type: "Core" },
      { name: "Tailwind CSS", level: 98, detail: "Responsive Design, Custom Themes", type: "Core" },
      { name: "Context API", level: 85, detail: "Global State, Theme Management", type: "Skilled" },
    ]
  },
  {
    id: "backend",
    title: "Backend & Database",
    icon: Server,
    color: "from-purple-500 to-indigo-500",
    description: "Architecting secure server-side logic and efficient data storage.",
    philosophy: "Robust APIs and normalized data structures are my priority.",
    skills: [
      { name: "Node.js", level: 85, detail: "Runtime, Event Loop", type: "Skilled" },
      { name: "Express", level: 88, detail: "REST APIs, Middleware", type: "Skilled" },
      { name: "PostgreSQL", level: 80, detail: "Relational Data, Complex Queries", type: "Skilled" },
      { name: "Supabase", level: 90, detail: "Auth, Realtime, Storage", type: "Comfortable" },
      { name: "Python", level: 85, detail: "FastAPI, Data Structures", type: "Skilled" },
    ]
  },
  {
    id: "languages",
    title: "Programming Languages",
    icon: Code,
    color: "from-emerald-500 to-teal-500",
    description: "The core languages that power my development stack.",
    philosophy: "Strong typing and clean syntax lead to maintainable code.",
    skills: [
      { name: "JavaScript", level: 95, detail: "ES6+, Async/Await, DOM", type: "Core" },
      { name: "TypeScript", level: 90, detail: "Static Typing, Interfaces", type: "Core" },
      { name: "Python", level: 85, detail: "DSA, Scripting, Automation", type: "Skilled" },
    ]
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: Terminal,
    color: "from-cyan-500 to-blue-500",
    description: "Essential tools for version control, design, and deployment.",
    philosophy: "Streamlined workflows ensure rapid and reliable delivery.",
    skills: [
      { name: "Git", level: 95, detail: "Version Control, Branching", type: "Core" },
      { name: "Azure", level: 75, detail: "Cloud Services, Deployment", type: "Comfortable" },
      { name: "Figma", level: 80, detail: "UI Design, Prototyping", type: "Skilled" },
      { name: "Postman", level: 90, detail: "API Testing, Documentation", type: "Skilled" },
    ]
  }
]

export function TechExplosion() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="relative min-h-[600px] flex items-center justify-center py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full px-4">
        {techCategories.map((category) => (
          <motion.div
            key={category.id}
            layoutId={`card-${category.id}`}
            onClick={() => setSelectedCategory(category.id)}
            className={cn(
              "relative overflow-hidden rounded-3xl p-8 cursor-pointer group border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-colors",
              selectedCategory === category.id ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            <category.icon className="w-12 h-12 mb-6 text-neutral-200" />
            <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
            <p className="text-neutral-400">{category.description}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCategory && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCategory(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                layoutId={`card-${selectedCategory}`}
                className="w-full max-w-3xl bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative z-50"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const category = techCategories.find(c => c.id === selectedCategory)!
                  return (
                    <div className="flex flex-col md:flex-row h-full max-h-[80vh]">
                      {/* Sidebar / Header */}
                      <div className={`p-8 md:w-1/3 bg-gradient-to-br ${category.color} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="relative z-10 h-full flex flex-col justify-between">
                          <div>
                            <category.icon className="w-16 h-16 mb-6 text-white" />
                            <h2 className="text-3xl font-bold text-white mb-4">{category.title}</h2>
                            <p className="text-white/80 mb-6">{category.description}</p>
                            <div className="p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                              <p className="text-sm italic text-white/90">"{category.philosophy}"</p>
                            </div>
                          </div>
                          <button
                            onClick={() => setSelectedCategory(null)}
                            className="md:hidden mt-8 flex items-center gap-2 text-white/80 hover:text-white"
                          >
                            <X className="w-5 h-5" /> Close
                          </button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 md:w-2/3 bg-neutral-900 overflow-y-auto">
                        <div className="flex justify-between items-center mb-8">
                          <h3 className="text-xl font-bold text-neutral-200">Skill Proficiency</h3>
                          <button
                            onClick={() => setSelectedCategory(null)}
                            className="hidden md:block p-2 hover:bg-white/10 rounded-full transition-colors"
                          >
                            <X className="w-6 h-6 text-neutral-400" />
                          </button>
                        </div>

                        <div className="space-y-6">
                          {category.skills.map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className="flex justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-neutral-200">{skill.name}</span>
                                  <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                                    skill.type === 'Core' ? 'border-pink-500/50 text-pink-400 bg-pink-500/10' :
                                    skill.type === 'Skilled' ? 'border-cyan-500/50 text-cyan-400 bg-cyan-500/10' :
                                    'border-neutral-500/50 text-neutral-400 bg-neutral-500/10'
                                  }`}>
                                    {skill.type}
                                  </span>
                                </div>
                                <span className="text-sm text-neutral-500">{skill.level}%</span>
                              </div>
                              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                                  className={`h-full bg-gradient-to-r ${category.color}`}
                                />
                              </div>
                              <p className="text-xs text-neutral-500 mt-1 font-mono">{skill.detail}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
