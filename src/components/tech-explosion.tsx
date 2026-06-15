"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Database, Layout, X, Server } from "lucide-react"
import { cn } from "@/lib/utils"

const techCategories = [
  {
    id: "frontend",
    title: "Frontend Ecosystem",
    icon: Layout,
    color: "from-pink-500 to-rose-500",
    description: "Building responsive, scalable interfaces and managing complex state.",
    philosophy: "I focus on component reusability and predictable state management.",
    skills: [
      { name: "React.js", detail: "Hooks, Custom Hooks, Performance" },
      { name: "Next.js", detail: "SSR, App Router, Server Actions" },
      { name: "React Native", detail: "Cross-platform Mobile Apps" },
      { name: "Tailwind CSS", detail: "Responsive Design, Custom Themes" },
      { name: "Redux Toolkit", detail: "State Slices, RTK Query" },
      { name: "Zustand", detail: "Minimalist State Management" },
    ]
  },
  {
    id: "backend",
    title: "Backend & AI Integration",
    icon: Server,
    color: "from-purple-500 to-indigo-500",
    description: "Architecting secure server-side logic and custom AI workflows.",
    philosophy: "Robust APIs and AI-driven automation are my priority.",
    skills: [
      { name: "Node.js", detail: "Runtime, Event Loop" },
      { name: "Express", detail: "REST APIs, Middleware" },
      { name: "LLM Orchestration", detail: "OpenAI, Anthropic, Gemini" },
      { name: "AI Automation", detail: "Intent Parsing, Agentic Workflows" },
    ]
  },
  {
    id: "infrastructure",
    title: "Database & Infrastructure",
    icon: Database,
    color: "from-cyan-500 to-blue-500",
    description: "Efficient data storage and deployment pipelines.",
    philosophy: "Streamlined workflows ensure rapid and reliable delivery.",
    skills: [
      { name: "PostgreSQL", detail: "Relational Data, Complex Queries" },
      { name: "Supabase", detail: "Auth, Realtime, Storage" },
      { name: "Vercel", detail: "High-speed Delivery, Edge-caching" },
      { name: "Docker", detail: "Containerization" },
      { name: "Turborepo", detail: "Monorepo Architecture" },
      { name: "Git", detail: "Version Control" },
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
      { name: "JavaScript", detail: "ES6+, Async/Await, DOM" },
      { name: "TypeScript", detail: "Static Typing, Interfaces" },
      { name: "Python", detail: "DSA, Scripting, Automation" },
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {category.skills.map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.05 }}
                              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                            >
                              <div className="flex flex-col h-full justify-center">
                                <span className="font-bold text-lg text-neutral-200 mb-1 flex items-center gap-2">
                                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                                  {skill.name}
                                </span>
                                <span className="text-xs text-neutral-400 leading-snug">{skill.detail}</span>
                              </div>
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
