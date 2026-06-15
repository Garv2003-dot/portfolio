'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function MagneticSpotlightHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tracking the cursor position relative to the container
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for buttery smooth tracking (no rigid snapping)
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Tilt Transformations based on mouse position
  // Maps the pixel coordinates to a subtle degree of rotation
  const rotateX = useTransform(smoothY, [0, 800], [10, -10]);
  const rotateY = useTransform(smoothX, [0, 1200], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden perspective-1000 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0c1445] via-[#060a1f] to-[#030305]"
    >
      {/* LAYER 1: The Base State (Dimmed) */}
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 flex flex-col items-center text-center space-y-6 pointer-events-none"
      >
        {/* Status Pill */}
        <div className="flex items-center gap-3 mb-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
           <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
           <span className="text-xs md:text-sm font-mono text-white/60 tracking-wider">SYSTEMS ONLINE // ACCEPTING CONTRACTS</span>
        </div>

        {/* Scaled Up Typography */}
        <h1 className="text-7xl md:text-[9rem] font-black text-white/10 tracking-tighter uppercase leading-[0.85]">
          Engineering
          <br />
          Intelligence
        </h1>
        <p className="text-xl md:text-2xl text-white/30 max-w-3xl font-light tracking-wide mt-4">
          Architecting fault-tolerant full-stack applications & AI-driven resource engines.
        </p>
      </motion.div>

      {/* LAYER 2: The Spotlight Mask (Illuminated) */}
      <motion.div 
        style={{ 
          rotateX, rotateY, transformStyle: "preserve-3d",
          maskImage: useTransform([smoothX, smoothY], ([x, y]) => `radial-gradient(500px circle at ${x}px ${y}px, black 20%, transparent 80%)`),
          WebkitMaskImage: useTransform([smoothX, smoothY], ([x, y]) => `radial-gradient(500px circle at ${x}px ${y}px, black 20%, transparent 80%)`)
        }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center space-y-6 pointer-events-none"
      >
        <div className="flex items-center gap-3 mb-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
           <span className="w-2 h-2 rounded-full bg-emerald-400" />
           <span className="text-xs md:text-sm font-mono text-white tracking-wider">SYSTEMS ONLINE // ACCEPTING CONTRACTS</span>
        </div>

        <h1 className="text-7xl md:text-[9rem] font-black tracking-tighter uppercase leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400">
          Engineering
          <br />
          Intelligence
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl font-medium tracking-wide drop-shadow-lg mt-4">
          Architecting fault-tolerant full-stack applications & AI-driven resource engines.
        </p>
      </motion.div>

      {/* LAYER 3: The Floating Tech Stack Pills (Parallax elements)
        These appear when hovered to add depth to the 3D effect.
      */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-28 flex gap-4 z-30 pointer-events-none"
        style={{ translateZ: 50 }} // Pushes elements forward in 3D space
      >
        {['React 19', 'Next.js 14', 'Gemini AI', 'Node.js'].map((tech) => (
          <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm backdrop-blur-md font-mono">
            {tech}
          </span>
        ))}
      </motion.div>

      {/* Bottom gradient fade for seamless transition into the diamond reveal */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#030305] to-transparent z-30 pointer-events-none" />
    </div>
  );
}
