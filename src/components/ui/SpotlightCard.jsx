// src/components/ui/SpotlightCard.jsx
'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SpotlightCard({ children, className = '' }) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    setIsPointer(window.matchMedia('(pointer: fine)').matches);
  }, []);

  const handleMouseMove = (e) => {
    if (!divRef.current || !isPointer) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => isPointer && setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={`relative overflow-hidden rounded-2xl border border-[var(--border-ui)] bg-[var(--card-bg)] shadow-[var(--shadow-base)] hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300 ${className}`}
    >
      {isPointer && (
        <div
          className="pointer-events-none absolute -inset-px z-10 transition-opacity duration-300 will-change-transform"
          style={{
            opacity,
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, var(--accent-glow), transparent 40%)`,
          }}
          aria-hidden="true"
        >
           <div className="noise-mask" />
        </div>
      )}
      
      <div className="relative z-20 h-full p-8 flex flex-col bg-[var(--card-bg)] hover:bg-[var(--card-hover)] transition-colors duration-300">
        {children}
      </div>
    </motion.div>
  );
}