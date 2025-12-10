import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, ExternalLink, Github, Layers, Zap, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { InteractiveBackground } from "@/components/v3/interactive-background"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen text-white selection:bg-pink-500/30">
      <InteractiveBackground />
      <Navbar />

      <div className="pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
        <Link href="/#projects" className="inline-flex items-center text-neutral-400 hover:text-white mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
            {project.title}
          </h1>
          <p className="text-2xl md:text-3xl text-pink-400 font-light">{project.subtitle}</p>
        </div>

        {/* Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="text-yellow-500" /> The Problem
              </h2>
              <p className="text-neutral-300 leading-relaxed text-lg">{project.problem}</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="text-cyan-500" /> The Solution
              </h2>
              <p className="text-neutral-300 leading-relaxed text-lg">{project.solution}</p>
            </div>
          </div>

          <div className="space-y-6">
             {/* Links Card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-sm font-mono text-neutral-500 uppercase mb-4">Project Links</h3>
              <div className="flex flex-col gap-3">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-4 py-3 bg-pink-500/10 text-pink-400 rounded-xl hover:bg-pink-500/20 transition-colors">
                    <span className="font-medium">Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-4 py-3 bg-white/5 text-white rounded-xl hover:bg-white/10 transition-colors">
                    <span className="font-medium">Source Code</span>
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-sm font-mono text-neutral-500 uppercase mb-4">Tech Stack</h3>
              <div className="space-y-4">
                {project.techStack.map((stack) => (
                  <div key={stack.category}>
                    <p className="text-xs text-neutral-400 mb-2">{stack.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map((item) => (
                        <span key={item} className="px-2 py-1 text-xs bg-white/5 rounded-md border border-white/5 text-neutral-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Deep Dive Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Layers className="text-purple-500" /> Key Features
            </h2>
            <ul className="space-y-4">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Technical Challenges</h2>
            <div className="space-y-6">
              {project.challenges.map((challenge, i) => (
                <div key={i} className="group">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">{challenge.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["Discovery", "Design", "Development", "Deployment"].map((step, i) => (
              <div key={step} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-colors">
                <div className="text-4xl font-black text-white/10 mb-4 group-hover:text-pink-500/20 transition-colors">0{i + 1}</div>
                <h3 className="text-xl font-bold text-white">{step}</h3>
                {i < 3 && <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-white/20" />}
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-20 p-8 rounded-3xl bg-black/40 border border-white/10">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Zap className="text-yellow-400" /> Performance Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Performance", value: "98", color: "text-green-400" },
              { label: "Accessibility", value: "100", color: "text-green-400" },
              { label: "Best Practices", value: "100", color: "text-green-400" },
              { label: "SEO", value: "100", color: "text-green-400" },
            ].map((metric) => (
              <div key={metric.label} className="text-center">
                <div className={`text-5xl font-black ${metric.color} mb-2`}>{metric.value}</div>
                <div className="text-sm text-neutral-400 uppercase tracking-wider">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Diagram Placeholder */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">System Architecture</h2>
          <div className="aspect-video rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]" />
            <div className="text-center">
              <Layers className="w-16 h-16 text-neutral-600 mx-auto mb-4 group-hover:text-pink-500 transition-colors" />
              <p className="text-neutral-500">Architecture Diagram Visualization</p>
            </div>
          </div>
        </div>

        {/* Outcomes */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.outcomes.map((outcome, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-4">
                  0{i + 1}
                </div>
                <p className="text-lg text-neutral-300">{outcome}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </main>
  )
}
