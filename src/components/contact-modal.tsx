"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Copy, Check, Download, Github, Linkedin, Mail, Paperclip, Calendar } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const personas = [
  { id: "recruiter", label: "I'm a Recruiter", icon: "👔" },
  { id: "collab", label: "I want to collaborate", icon: "🤝" },
  { id: "dev", label: "Developer / Peer", icon: "💻" },
  { id: "project", label: "Project Inquiry", icon: "🚀" },
]

const topics = [
  "UI/UX Design", "React Development", "Freelance", "Full-time Role", "Performance", "Just saying hi"
]

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [step, setStep] = useState(1) // 1: Form, 2: Success
  const [persona, setPersona] = useState("recruiter")
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [copied, setCopied] = useState(false)
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    meeting: false
  })

  if (!isOpen) return null

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    )
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("garvak23@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Construct the payload matching Formspree
    const payload = {
      name: formData.name,
      email: formData.email,
      message: `${persona === 'recruiter' ? '[RECRUITER] ' : ''}${formData.message} (Topics: ${selectedTopics.join(', ')})`,
      subject: `Portfolio Contact from ${formData.name}`,
    };

    try {
      // REPLACE 'YOUR_FORM_ID' WITH YOUR ACTUAL FORMSPREE ID
      const response = await fetch("https://formspree.io/f/xeoyrrap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStep(2)
      } else {
        alert("Oops! There was a problem sending your message. Please try again or email me directly.")
      }
    } catch (error) {
      alert("Oops! There was a problem sending your message. Please try again or email me directly.")
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 bg-white/5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Interactive Form */}
        <div className="flex-1 p-8 md:p-12 overflow-y-auto custom-scrollbar relative">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Let's start a conversation.</h2>
                  <p className="text-neutral-400">
                    I typically respond within 24 hours. Tell me a bit about yourself!
                  </p>
                </div>

                {/* 1. Persona Selector */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-neutral-300">Who are you?</label>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {personas.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setPersona(p.id)}
                        className={`p-3 rounded-xl border text-sm font-medium transition-all text-left flex items-center gap-2 ${
                          persona === p.id 
                            ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                            : "bg-white/5 border-white/10 text-neutral-400 hover:border-white/30 hover:text-neutral-200"
                        }`}
                      >
                        <span className="text-lg">{p.icon}</span>
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Topic Selector */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-neutral-300">Want to talk about...</label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => (
                      <button
                        key={topic}
                        onClick={() => toggleTopic(topic)}
                        className={`px-4 py-2 rounded-full text-sm border transition-all ${
                          selectedTopics.includes(topic)
                            ? "bg-pink-500/20 border-pink-500/50 text-pink-400"
                            : "bg-white/5 border-white/10 text-neutral-400 hover:border-white/30"
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Smart Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-neutral-500">Your Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-neutral-500">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-neutral-500">Message</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all resize-none"
                      placeholder={persona === "recruiter" ? "Hi Garv, I have a role that matches your skills..." : "Hey, I saw your work and..."}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4 border-t border-white/10">
                    <button 
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_40px_-10px_rgba(34,197,94,0.6)]">
                   <motion.div 
                     initial={{ pathLength: 0 }} 
                     animate={{ pathLength: 1 }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                   >
                     <Check className="w-12 h-12 text-black stroke-[3]" />
                   </motion.div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-neutral-400 max-w-sm mx-auto">
                    Thanks for reaching out, {formData.name}. I've received your message and will get back to you shortly.
                  </p>
                </div>
                <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Contact Sidebar */}
        {step === 1 && (
        <div className="w-full md:w-80 bg-neutral-900/50 border-l border-white/10 p-8 flex flex-col justify-between backdrop-blur-sm">
          <div className="space-y-8">
             <div>
                <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="group p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                     <div className="flex items-center gap-3 mb-2">
                        <Mail className="w-5 h-5 text-pink-400" />
                        <span className="text-white font-medium">Email</span>
                     </div>
                     <p className="text-sm text-neutral-400 mb-3 break-all">garvak23@gmail.com</p>
                     <button 
                       onClick={copyEmail}
                       className="text-xs flex items-center gap-2 text-neutral-500 hover:text-white transition-colors"
                     >
                       {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                       {copied ? "Copied!" : "Copy Email"}
                     </button>
                  </div>
                </div>
             </div>

             <div>
                <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">Connect</h3>
                <div className="flex gap-3">
                   <a href="https://github.com/Garv2003-dot" target="_blank" className="p-3 bg-white/5 rounded-lg hover:bg-white/10 hover:text-white text-neutral-400 transition-colors">
                      <Github className="w-5 h-5" />
                   </a>
                   <a href="https://linkedin.com" target="_blank" className="p-3 bg-white/5 rounded-lg hover:bg-[#0077b5]/20 hover:text-[#0077b5] text-neutral-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                   </a>
                </div>
             </div>
          </div>



          <div className="mt-8 md:mt-0">
             <TiltCard />
          </div>
        </div>
        )}
      </motion.div>
    </div>
  )
}

function TiltCard() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const box = card.getBoundingClientRect()
    const x = e.clientX - box.left
    const y = e.clientY - box.top
    const centerX = box.width / 2
    const centerY = box.height / 2
    const rotateX = (y - centerY) / 4
    const rotateY = (centerX - x) / 4

    setRotate({ x: rotateX, y: rotateY })
  }

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <motion.div
      className="relative w-full aspect-square rounded-xl bg-gradient-to-br from-neutral-800 to-black border border-white/10 p-6 flex flex-col items-center justify-center text-center group perspective-1000 mb-6"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"
        style={{ transform: "translateZ(20px)" }}
      />
      
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
             <Download className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-xl font-bold text-white mb-2">Resume</h4>
        <p className="text-xs text-neutral-400 max-w-[150px] mx-auto mb-4">
          Grab a copy of my resume to see the full picture.
        </p>
        <a 
          href="/resume.pdf" 
          download="Garv_Akolia_Resume.pdf"
          className="inline-block px-4 py-2 bg-white text-black text-xs font-bold rounded-full hover:scale-105 transition-transform"
        >
           Download PDF
        </a>
      </div>
    </motion.div>
  )
}
