'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Info,
  Server,
  Shield,
  Video,
  Layers,
  Database,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// Helper 1: Smooth Fade-Up for Text Sections
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

// Helper: Enterprise-Grade Interactive Carousel
const EnterpriseCarousel = ({
  images,
}: {
  images: { src: string; alt: string }[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Edge Case Handling: Safely wrap index bounds
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

  // Framer Motion variant logic for directional sliding
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-[1080px] mx-auto aspect-[1.85/1] rounded-xl overflow-hidden border-2 border-indigo-500/40 hover:border-indigo-400 shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)] bg-[#0a0a0a] group perspective-1000 transition-all duration-500">
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

      {/* Navigation Controls - Appear on Hover */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => paginate(-1)}
          className="p-3 rounded-full bg-black/50 border border-white/10 text-white backdrop-blur-md hover:bg-black/80 transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="p-3 rounded-full bg-black/50 border border-white/10 text-white backdrop-blur-md hover:bg-black/80 transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Reflection overlay for glass effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
    </div>
  );
};

export default function PackvisionCaseStudy() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#030305] text-white/80 selection:bg-purple-500/30 font-sans pb-32">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-[128px] opacity-50 pointer-events-none animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] opacity-50 pointer-events-none animate-pulse duration-[7000ms]" />

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
        <div className="flex flex-col gap-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-md w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs md:text-sm font-mono text-emerald-400 tracking-wider">
              ENTERPRISE SAAS DEPLOYMENT
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 tracking-tight uppercase">
            Packvision
          </h1>
          <p className="text-xl md:text-3xl text-white/90 font-light tracking-wide">
            Intelligent Packaging Monitoring & Role-Based Analytics Platform.
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            {[
              'React 19',
              'Node.js',
              'Prisma ORM',
              'PostgreSQL',
              'AWS S3',
              'Docker',
            ].map((tech, i) => (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 + 0.5, duration: 0.3 }}
                key={tech}
                className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 hover:bg-emerald-500/20 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            <Link
              href="https://packvision.vercel.app/"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ExternalLink size={18} /> View Live Deployment
            </Link>
            <Link
              href="https://github.com/gaamas-group/Packvision"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Github size={18} /> View Source
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE BOTTLENECK & SOLUTION */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16 border-b border-white/5">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-pink-500 tracking-widest uppercase">
                The Operational Bottleneck
              </h3>
              <h2 className="text-3xl font-bold text-white">
                Legacy Infrastructure
              </h2>
              <p className="text-white/60 leading-relaxed">
                In industrial e-commerce environments, indisputable video
                evidence of packaging is critical for quality control and
                dispute resolution. However, traditional monitoring relies on
                expensive IP cameras and monolithic servers. Routing massive,
                continuous high-definition video streams directly through a
                Node.js backend causes severe memory bloat, crashing servers and
                halting production lines.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-emerald-500 tracking-widest uppercase">
                The Architectural Solution
              </h3>
              <h2 className="text-3xl font-bold text-white">
                Edge Capture & Direct-to-Cloud
              </h2>
              <p className="text-white/60 leading-relaxed">
                Packvision bypasses the server entirely for heavy payloads. By
                capturing media at the edge (the browser) using native APIs, and
                utilizing securely signed cryptographic tokens, the client
                uploads gigabytes of multipart video data directly to AWS S3.
                The Node.js server is relegated strictly to multi-tenant
                metadata orchestration.
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* 3. CREDENTIALS & INFRASTRUCTURE */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16">
        <FadeUp>
          <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Shield className="text-indigo-400" size={20} /> Evaluation
                Credentials
              </h3>
              <p className="text-white/60 text-sm">
                Access the dashboard using these read-only credentials to
                explore the multi-tenant architecture and session logs.
              </p>
              <div className="bg-black/50 p-4 rounded-lg font-mono text-sm border border-white/5 inline-block">
                <p>
                  <span className="text-white/40">Username:</span> testuser
                </p>
                <p>
                  <span className="text-white/40">Password:</span> password123
                </p>
              </div>
            </div>

            <div className="flex-1 space-y-4 border-l border-white/5 md:pl-8">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Info className="text-amber-400" size={20} /> Infrastructure
                Cold Start
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                While the Vite frontend is edge-deployed on Vercel, the
                Dockerized Node.js backend operates on Render's free tier.
                <br />
                <br />
                <strong>
                  Please allow ~50 seconds for the server to perform a "cold
                  start" upon your first login attempt.
                </strong>
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* 4. ARCHITECTURAL DEEP DIVE (Consolidated Layout) */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16 space-y-16">
        {/* Row 1: Side-by-Side Text Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeUp>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center border border-pink-500/20">
                <Video className="text-pink-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                Edge Compositing
              </h2>
              <p className="text-white/60 leading-relaxed">
                Rather than uploading raw video and processing it server-side,
                Packvision pushes computation to the client. Using the{' '}
                <code className="text-pink-300 bg-pink-900/30 px-1 rounded">
                  MediaRecorder
                </code>{' '}
                API paired with an <strong>invisible HTML5 Canvas</strong>, the
                system dynamically burns timestamps, Operator IDs, and Package
                IDs directly into the video stream context in real-time.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center border border-purple-500/20">
                <Server className="text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                Zero-Bottleneck Workflows
              </h2>
              <p className="text-white/60 leading-relaxed">
                Once an operator completes a session, the frontend requests a
                temporary <strong>Pre-signed URL</strong> from the backend. The
                client utilizes the AWS SDK to execute a direct{' '}
                <code className="text-purple-300 bg-purple-900/30 px-1 rounded">
                  PutObject
                </code>{' '}
                command to S3 or MinIO, permanently linking the new S3 Object
                Key with the relational PostgreSQL metadata.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Row 2: The Interactive Image Gallery */}
        <FadeUp delay={0.4}>
          <EnterpriseCarousel
            images={[
              { src: '/packvision-login.jpg', alt: 'Login Page' },
              { src: '/packvision-dashboard.png', alt: 'Dashboard Overview' },
              { src: '/packvision-recorder.jpg', alt: 'Packaging Recorder UI' },
              { src: '/view-video.jpg', alt: 'Video viewing page' },
            ]}
          />
        </FadeUp>
      </section>

      {/* 5. SYSTEM STACK & MULTI-TENANCY */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16 mt-12 border-t border-white/5">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 space-y-4">
              <h2 className="text-3xl font-bold text-white">
                System Architecture & Multi-Tenancy
              </h2>
              <p className="text-white/60 leading-relaxed">
                The application is built to support enterprise B2B SaaS
                requirements, strictly separating concerns between the client,
                server, and storage layers.
              </p>
            </div>
            <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-3">
                <Layers className="text-blue-400" size={24} />
                <h4 className="text-lg font-semibold text-white">
                  Frontend Engine
                </h4>
                <p className="text-sm text-white/50">
                  React 19 built with Vite for optimal performance. Zustand
                  handles lightweight global state for active packaging
                  sessions, while a custom Tailwind UI Kit ensures consistency.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-3">
                <Database className="text-emerald-400" size={24} />
                <h4 className="text-lg font-semibold text-white">
                  Type-Safe Database Layer
                </h4>
                <p className="text-sm text-white/50">
                  PostgreSQL handles all structured relational data (Tenants,
                  Users, Orders). <strong>Prisma ORM</strong> is utilized for
                  robust, type-safe database queries, drastically reducing
                  runtime errors.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-xl sm:col-span-2 space-y-3">
                <Shield className="text-indigo-400" size={24} />
                <h4 className="text-lg font-semibold text-white">
                  Multi-Tenant JWT Security
                </h4>
                <p className="text-sm text-white/50">
                  Stateless authentication is handled via jsonwebtoken. Every
                  token explicitly carries Tenant and Role information. Custom
                  Express middleware validates the tenant signature on every
                  request, ensuring an Admin from Tenant A can never query video
                  data from Tenant B.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
