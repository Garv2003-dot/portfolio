'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
export function Footer() {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText('garvak23@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <footer className="border-t border-white/5 bg-[#030305] py-8 px-6 md:px-12 mt-12 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <p className="text-sm font-mono text-white/50">
            SYSTEMS OPERATIONAL // {new Date().getFullYear()}
          </p>
        </div>

        <p className="text-sm text-white/30">
          Architected & Engineered by Garv Akolia.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Garv2003-dot"
            target="_blank"
            className="text-white/40 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/garv-akolia-40052a24a?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            className="text-white/40 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:garvak23@gmail.com"
            className="text-white/40 hover:text-white transition-colors"
          >
            Mail
          </a>
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm text-neutral-300"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="copied"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2 text-green-400"
                >
                  <Check className="w-4 h-4" /> Copied!
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" /> Copy Email
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </footer>
  );
}
