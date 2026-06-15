'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  BrainCircuit,
  Database,
  GitBranch,
  Lock,
  ShieldCheck,
} from 'lucide-react';

// --- HELPER COMPONENTS (Same as Packvision) ---
const FadeUp = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);

const EnterpriseCarousel = ({
  images,
}: {
  images: { src: string; alt: string }[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = images.length - 1;
      if (nextIndex >= images.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Auto-play functionality: move slides every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-[1080px] mx-auto aspect-[1.88/1] rounded-xl overflow-hidden border-2 border-indigo-500/40 hover:border-indigo-400 shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)] bg-[#0a0a0a] group perspective-1000 transition-all duration-500">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 object-contain w-full h-full opacity-90"
        />
      </AnimatePresence>
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function VCrewCaseStudy() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#030305] text-white/80 selection:bg-blue-500/30 font-sans pb-32">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] opacity-50 pointer-events-none animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px] opacity-50 pointer-events-none animate-pulse duration-[7000ms]" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/5">
        <Link
          href="/"
          className="absolute top-12 left-6 md:left-12 flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium z-50 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />{' '}
          Back to Home
        </Link>
        <FadeUp>
          <div className="flex flex-col gap-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-indigo-500 tracking-tight uppercase">
              vCrew
            </h1>
            <p className="text-xl md:text-3xl text-white/90 font-light tracking-wide">
              AI-Driven Resource Allocation & Capacity Engine.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              {[
                'Next.js 14',
                'Gemini API',
                'Turborepo',
                'Express',
                'Supabase',
                'Tailwind',
              ].map((tech, i) => (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.5, duration: 0.3 }}
                  key={tech}
                  className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300 hover:bg-blue-500/20 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-lg inline-block w-fit">
              <p className="text-sm text-white/50 flex items-center gap-2">
                <Lock size={16} className="text-white/40" />
                Live deployment access is restricted to ensure strict compliance
                with employee and client database privacy. Architectural
                overview provided below.
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* 2. THE BUSINESS PROBLEM & CORE USE CASES */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16 border-b border-white/5 space-y-16">
        {/* The Problem Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeUp>
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-blue-500 tracking-widest uppercase">
                The Resource Dilemma
              </h3>
              <h2 className="text-3xl font-bold text-white">
                Margin Erosion via Misallocation
              </h2>
              <p className="text-white/60 leading-relaxed">
                As technical teams scale, allocating the right engineer to the
                right project becomes a mathematical nightmare. Managers rely on
                fragmented spreadsheets, leading to two critical failure points:{' '}
                <strong>Burnout</strong> (senior engineers double-booked past
                100% capacity) and <strong>Margin Erosion</strong> (bench time
                due to hidden availability).
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-indigo-500 tracking-widest uppercase">
                The AI Intervention
              </h3>
              <h2 className="text-3xl font-bold text-white">
                Intent-to-Allocation Pipelines
              </h2>
              <p className="text-white/60 leading-relaxed">
                vCrew eliminates the spreadsheet entirely. By leveraging the
                Gemini API, the system translates natural human language into
                strict database queries. Managers simply type what they need,
                and the engine calculates global availability, skill matching,
                and seniority requirements in milliseconds.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Core Use Cases Grid */}
        <FadeUp delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4">
              <BrainCircuit className="text-blue-400" size={28} />
              <h3 className="text-xl font-bold text-white">
                Natural Language Discovery
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                <strong>Use Case:</strong> A manager types,{' '}
                <em>
                  "I need a mid-level React Native dev for 20 hours a week
                  starting next Monday."
                </em>
                <br />
                <br />
                The AI parses this intent, validates it against a JSON schema,
                and queries the Supabase roster, instantly returning a ranked
                list of available engineers matching that exact criteria.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4">
              <ShieldCheck className="text-indigo-400" size={28} />
              <h3 className="text-xl font-bold text-white">
                Deterministic Guardrails
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                <strong>Use Case:</strong> Preventing AI Hallucinations.
                <br />
                <br />
                LLMs are prone to confidently providing incorrect data. vCrew
                uses AI <em>only</em> for interpretation. Before any allocation
                is finalized, a deterministic rules-engine cross-references the
                AI's output against hard PostgreSQL capacity constraints,
                ensuring a database mutation never occurs based on a
                hallucination.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4">
              <Database className="text-purple-400" size={28} />
              <h3 className="text-xl font-bold text-white">
                Bi-Directional Capacity Sync
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                <strong>Use Case:</strong> Real-time workload balancing.
                <br />
                <br />
                When an engineer is assigned to a project at 50% capacity, their
                global profile immediately updates across the network. If
                another manager attempts to book them for 60%, the system flags
                a capacity breach, forcing a negotiation workflow to prevent
                employee burnout.
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* 3. ARCHITECTURAL DEEP DIVE */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16 space-y-16 border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeUp>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                <BrainCircuit className="text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                Fault-Tolerant AI Layer
              </h2>
              <p className="text-white/60 leading-relaxed">
                Enterprise AI must be predictable. When a manager types "I need
                a senior React dev for 20 hrs/week," the Gemini AI processes the
                string and extracts the{' '}
                <code className="text-blue-300 bg-blue-900/30 px-1 rounded">
                  allocation_intent
                </code>
                . This output is strictly validated against a canonical schema.
                If the AI hallucinates, a deterministic fallback rejects the
                payload before it ever reaches the ranking engine.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-500/20">
                <Database className="text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                Bi-Directional Capacity Engine
              </h2>
              <p className="text-white/60 leading-relaxed">
                The Supabase PostgreSQL layer enforces capacity constraints. It
                tracks allocation percentages per employee, preventing
                over-allocation beyond 100%. The system maintains bi-directional
                relational consistency: managers see project splits, while
                employees view their workload distribution in real-time.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* The Interactive Image Gallery */}
        <FadeUp delay={0.4}>
          <EnterpriseCarousel
            images={[
              { src: '/vcrew-dashboard.png', alt: 'vCrew Main Dashboard' },
              { src: '/vcrew-listing.png', alt: 'vCrew Employee Listings' },
              { src: '/vcrew-chatbot.png', alt: 'vCrew Chatbot Page' },
              { src: '/vcrew-response.png', alt: 'vCrew Response Page' },
              { src: '/vcrew-manual.png', alt: 'vCrew Manual Allocation Page' },
            ]}
          />
        </FadeUp>
      </section>

      {/* 4. SYSTEM STACK & MONOREPO */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16 mt-12">
        <FadeUp>
          <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030305] to-[#030305] border border-blue-500/10 rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono">
                <GitBranch size={14} /> Architecture
              </div>
              <h2 className="text-3xl font-bold text-white">
                Turborepo Scalability
              </h2>
              <p className="text-lg text-white/60 leading-relaxed">
                To ensure clean separation of concerns, the project was
                engineered as a Turborepo-based monorepo.
              </p>
              <ul className="space-y-4 text-white/70 mt-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">apps/web:</span>
                  <span>
                    Next.js 14 frontend handling dashboards, allocation
                    workflows, and Supabase real-time subscriptions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">apps/api:</span>
                  <span>
                    Express backend housing the Gemini intent extraction service
                    and the deterministic ranking engine.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">
                    packages/ui & types:
                  </span>
                  <span>
                    Shared React components and TypeScript domain models to
                    enforce strict types across the network boundary.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
