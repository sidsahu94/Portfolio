'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navigation, personalInfo } from '@/lib/data';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--bg-base)]/80 backdrop-blur-md border-b border-[var(--border-subtle)] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-bold text-lg tracking-tight hover:opacity-70 transition-opacity">
          Sidhanta Sahu.
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
              {item.name}
            </a>
          ))}
          <a href={personalInfo.resume} download className="text-sm font-medium bg-[var(--accent)] text-[var(--accent-fg)] px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
}