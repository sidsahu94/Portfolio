'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, MapPin } from 'lucide-react';

export default function Hero() {
  // Spring physics for elite, heavy entrances
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const springUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <header className="relative min-h-[90vh] flex flex-col justify-center pt-20 z-10" aria-label="Introduction">
      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          
          <motion.div variants={springUp} className="flex flex-wrap items-center gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-ui)] bg-[var(--card-bg)] shadow-[var(--shadow-base)] text-xs font-semibold text-[var(--text-body)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Engineering Roles
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-ui)] bg-[var(--card-bg)] shadow-[var(--shadow-base)] text-xs font-mono text-[var(--text-body)] uppercase tracking-wider">
              <MapPin size={14} aria-hidden="true" />
              Thane, Maharashtra
            </div>
          </motion.div>
          
          <motion.h1 variants={springUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tightest leading-[1.05] mb-6 text-[var(--text-display)] text-balance">
            Sidhanta Manoj Sahu. <br className="hidden md:block" />
            <span className="text-[var(--text-body)]">Architecting digital scale.</span>
          </motion.h1>
          
          <motion.p variants={springUp} className="text-lg md:text-xl text-[var(--text-body)] mb-10 max-w-2xl leading-relaxed text-balance">
            A Full Stack Developer focused on high-performance infrastructure. Specializing in low-latency WebRTC streams, horizontally scalable MERN environments, and secure backend deployments.
          </motion.p>
          
          <motion.div variants={springUp} className="flex flex-wrap items-center gap-4">
            <a href="#architecture" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--text-display)] text-[var(--bg-base)] font-semibold rounded-full shadow-[var(--shadow-elevated)] hover:scale-[1.02] transition-transform">
              Explore Architecture
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            
            <a href="/Sidhanta_Sahu_Resume.pdf" download="Sidhanta_Sahu_Resume.pdf" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--border-ui)] bg-[var(--card-bg)] text-[var(--text-display)] font-semibold rounded-full hover:bg-[var(--card-hover)] transition-colors">
              <FileText size={18} className="text-[var(--text-body)]" aria-hidden="true" /> 
              Download Resume
            </a>
          </motion.div>
          
        </motion.div>
      </div>
    </header>
  );
}