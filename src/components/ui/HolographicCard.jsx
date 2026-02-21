'use client';

import { motion } from 'framer-motion';

export default function HolographicCard({ children, className = '' }) {
  return (
    <div className={`relative group rounded-2xl p-[1px] overflow-hidden ${className}`}>
      {/* Spinning Laser Border */}
      <div className="absolute inset-[-100%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0_300deg,var(--accent-primary)_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Subtly Glowing Backdrop */}
      <div className="absolute inset-0 bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--border-ui)] rounded-2xl z-10 transition-colors duration-500 group-hover:bg-[var(--card-hover)]" />
      
      {/* Noise Texture for Realism */}
      <div className="noise-mask z-20 rounded-2xl" />

      {/* Content */}
      <div className="relative z-30 h-full p-8 flex flex-col">
        {children}
      </div>
    </div>
  );
}