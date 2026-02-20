'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <MagneticButton 
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        ariaLabel="Toggle theme"
        className="w-14 h-14 rounded-full bg-[var(--card-bg)] border border-[var(--border-ui)] text-[var(--text-display)] shadow-[var(--shadow-elevated)] flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Moon size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sun size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </MagneticButton>
    </div>
  );
}