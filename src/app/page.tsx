import { HeaderV3 } from '@/components/v3/header-v3';
import MagneticSpotlightHero from '@/components/MagneticSpotlightHero';
import DiamondRevealWrapper from '@/components/DiamondRevealWrapper';
import { Footer } from '@/components/footer';
import { TechExplosion } from '@/components/tech-explosion';
import { AboutMe } from '@/components/about-me';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/data/projects';
import {
  ArrowRight,
  Zap,
  Smartphone,
  Shield,
} from 'lucide-react';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen text-white selection:bg-pink-500/30 bg-[#030305]">
      <HeaderV3 />

      {/* LAYER 1: The Fixed Hero */}
      {/* It stays pinned to the back of the screen and never moves. */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <MagneticSpotlightHero />
      </div>

      {/* LAYER 2: The Scroll Spacer */}
      {/* This creates an empty screen-height block so the user can actually
          scroll "past" the Hero before the rest of the content arrives. */}
      <div className="relative w-full h-screen bg-transparent z-10 pointer-events-none" />

      {/* LAYER 3: The Rest of the Portfolio */}
      {/* As this scrolls up, the DiamondRevealWrapper expands its clip-path mask. */}
      <DiamondRevealWrapper>
        <div className="pt-20">
          {/* Experience - Timeline Layout */}
          <section id="work" className="relative py-32 px-6 md:px-20">
            <div className="max-w-7xl w-full mx-auto">
              <div className="flex items-end justify-between mb-24 border-b border-white/20 pb-8">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                  EXPERIENCE
                </h2>
                <span className="text-sm font-mono text-neutral-400 mb-2">
                  2023 — PRESENT
                </span>
              </div>

              <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-24">
                {/* Role 1: Veersa */}
                <div className="relative pl-8 md:pl-16 group">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-pink-500 ring-4 ring-black" />
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                      <div className="sticky top-32">
                        <h3 className="text-3xl font-bold mb-2">
                          Veersa Technologies
                        </h3>
                        <p className="text-pink-400 font-mono mb-4">
                          Frontend Developer
                        </p>
                        <p className="text-sm text-neutral-500">
                          May 2025 — Present
                        </p>
                      </div>
                    </div>
                    <div className="lg:col-span-8 space-y-8">
                      <p className="text-2xl font-light leading-relaxed text-neutral-200">
                        Developed UI components and workflows for US-based airline
                        and healthcare clients.
                      </p>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className="flex items-center gap-2 mb-2 text-pink-400">
                            <Zap className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase">
                              Performance
                            </span>
                          </div>
                          <p className="text-2xl font-bold text-white">React</p>
                          <p className="text-xs text-neutral-400">
                            Scalable Interfaces
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className="flex items-center gap-2 mb-2 text-cyan-400">
                            <Smartphone className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase">
                              Mobile
                            </span>
                          </div>
                          <p className="text-2xl font-bold text-white">Native</p>
                          <p className="text-xs text-neutral-400">UI Consistency</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className="flex items-center gap-2 mb-2 text-purple-400">
                            <Shield className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase">
                              Security
                            </span>
                          </div>
                          <p className="text-2xl font-bold text-white">Secure</p>
                          <p className="text-xs text-neutral-400">File Uploads</p>
                        </div>
                      </div>

                      <ul className="grid grid-cols-1 gap-4 text-neutral-400">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-pink-500 shrink-0 mt-0.5" />{' '}
                          Built responsive, scalable interfaces using React,
                          Tailwind, TypeScript.
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-pink-500 shrink-0 mt-0.5" />{' '}
                          Delivered mobile features in React Native with improved UI
                          consistency.
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-pink-500 shrink-0 mt-0.5" />{' '}
                          Implemented secure file upload/download flows for
                          healthcare applications.
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-pink-500 shrink-0 mt-0.5" />{' '}
                          Integrated Redux Toolkit for cleaner and maintainable
                          state management.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Role 2: Telus */}
                <div className="relative pl-8 md:pl-16 group">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-700 group-hover:bg-cyan-400 transition-colors ring-4 ring-black" />
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                      <div className="sticky top-32">
                        <h3 className="text-3xl font-bold mb-2">
                          Telus International
                        </h3>
                        <p className="text-cyan-400 font-mono mb-4">
                          SDET Intern (Python)
                        </p>
                        <p className="text-sm text-neutral-500">
                          Jul 2024 — Jan 2025
                        </p>
                      </div>
                    </div>
                    <div className="lg:col-span-8 space-y-8">
                      <ul className="grid grid-cols-1 gap-4 text-neutral-400">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />{' '}
                          Built automated test suites using pytest and unittest.
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />{' '}
                          Followed TDD practices and improved reliability via
                          modular tests.
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />{' '}
                          Debugged failures and enhanced coverage for critical
                          components.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Role 3: Bhuma */}
                <div className="relative pl-8 md:pl-16 group">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-700 group-hover:bg-purple-400 transition-colors ring-4 ring-black" />
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                      <div className="sticky top-32">
                        <h3 className="text-3xl font-bold mb-2">Bhuma Infotech</h3>
                        <p className="text-purple-400 font-mono mb-4">
                          Web Dev Intern
                        </p>
                        <p className="text-sm text-neutral-500">
                          May 2024 — Jul 2024
                        </p>
                      </div>
                    </div>
                    <div className="lg:col-span-8 space-y-8">
                      <p className="text-2xl font-light leading-relaxed text-neutral-200">
                        DIAC (Govt. of India) Project
                      </p>
                      <ul className="grid grid-cols-1 gap-4 text-neutral-400">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />{' '}
                          Contributed to frontend development and Tableau
                          dashboards.
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />{' '}
                          Explored generative AI use cases for summarization
                          workflows.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Role 4: MVM */}
                <div className="relative pl-8 md:pl-16 group">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-700 group-hover:bg-green-400 transition-colors ring-4 ring-black" />
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                      <div className="sticky top-32">
                        <h3 className="text-3xl font-bold mb-2">
                          MVM Business Services
                        </h3>
                        <p className="text-green-400 font-mono mb-4">
                          Web Dev Intern
                        </p>
                        <p className="text-sm text-neutral-500">
                          Mar 2023 — May 2023
                        </p>
                      </div>
                    </div>
                    <div className="lg:col-span-8 space-y-8">
                      <ul className="grid grid-cols-1 gap-4 text-neutral-400">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />{' '}
                          Created marketing-focused websites using HTML, CSS, JS,
                          React.
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />{' '}
                          Implemented backend features using Node.js and Express.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="relative py-32 px-6 md:px-20">
            <div className="max-w-7xl w-full mx-auto">
              <div className="flex items-end justify-between mb-16">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                  SELECTED WORKS
                </h2>
                <span className="text-sm font-mono text-neutral-400 mb-2">
                  FEATURED PROJECTS
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={project.slug} project={project} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Skills - Interactive Grid */}
          <section
            id="skills"
            className="relative py-32 px-6 md:px-20 bg-black/20 backdrop-blur-sm"
          >
            <div className="max-w-7xl w-full mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 text-right">
                TECHNICAL ARSENAL
              </h2>
              <TechExplosion />
            </div>
          </section>

          <AboutMe />
          <Footer />
        </div>
      </DiamondRevealWrapper>
    </main>
  );
}
