'use client';

import { motion } from 'framer-motion';

const techStack = [
  "React.js", "Node.js", "Express.js", "MongoDB", "WebRTC", "Docker", "Redis", 
  "Tailwind CSS", "JavaScript", "Java", "Python", "Solidity", "SQLite", "Android Studio"
];

export default function TechMarquee() {
  return (
    <div className="relative py-12 bg-black border-y border-white/5 overflow-hidden flex items-center z-20">
      
      {/* Gradient fade on the left and right edges */}
      <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

      {/* Infinite scrolling animation */}
      <motion.div 
        animate={{ x: [0, -1000] }} 
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        className="flex whitespace-nowrap gap-12 px-6"
      >
        {/* We map the array twice to create a seamless infinite loop */}
        {[...techStack, ...techStack].map((tech, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="text-zinc-600 font-mono text-sm uppercase tracking-widest">{tech}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}