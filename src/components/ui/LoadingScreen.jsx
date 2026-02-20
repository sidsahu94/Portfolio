'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1.8 seconds total duration for a snappy, premium feel
    const duration = 1800; 
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300); // Micro-pause at 100% before revealing
          return 100;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      // The elite exit animation: fades, blurs, and lifts up
      exit={{ 
        opacity: 0, 
        y: -40, 
        filter: "blur(12px)", 
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-6">
        
        {/* The Percentage Counter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-white font-mono text-6xl md:text-7xl font-light tracking-tighter mb-6"
        >
          {Math.round(progress)}%
        </motion.div>
        
        {/* The Glowing Progress Bar */}
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden mb-6 relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Terminal Status Output */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-zinc-500 font-mono text-xs uppercase tracking-widest flex items-center gap-3"
        >
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          Initializing Architecture...
        </motion.div>
        
      </div>
    </motion.div>
  );
}