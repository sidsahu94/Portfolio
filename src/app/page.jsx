'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, MapPin, ExternalLink, Github } from 'lucide-react';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { StatusBadge } from '@/components/ui/Badge';
import { TechPill } from '@/components/ui/TechPill';
import MagneticButton from '@/components/ui/MagneticButton';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { personalInfo, projects } from '@/lib/portfolio-data';

export default function Portfolio() {
  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const springUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } } };

  return (
    <main id="main-content" className="min-h-screen relative overflow-hidden">
      
      {/* THE TOGGLE IS BACK */}
      <ThemeToggle />
      
      <header className="relative min-h-[90vh] flex flex-col justify-center pt-20 z-10 px-6 md:px-12" aria-label="Introduction">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            
            <motion.div variants={springUp} className="flex flex-wrap items-center gap-4 mb-8">
              <StatusBadge status={personalInfo.availability} />
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-ui)] bg-[var(--card-bg)] shadow-[var(--shadow-base)] text-xs font-mono text-[var(--text-body)] uppercase tracking-wider">
                <MapPin size={14} aria-hidden="true" />
                {personalInfo.location}
              </div>
            </motion.div>
            
            <motion.h1 variants={springUp} className="font-bold tracking-tightest leading-[1.05] mb-6 text-[var(--text-display)] text-balance" style={{ fontSize: 'var(--text-fluid-h1)' }}>
              {personalInfo.name}. <br className="hidden md:block" />
              <span className="text-[var(--text-body)]">{personalInfo.title}</span>
            </motion.h1>
            
            <motion.p variants={springUp} className="text-[var(--text-body)] mb-10 max-w-2xl leading-relaxed text-balance" style={{ fontSize: 'var(--text-fluid-p)' }}>
              {personalInfo.description}
            </motion.p>
            
            <motion.div variants={springUp} className="flex flex-wrap items-center gap-4">
              <MagneticButton href="#architecture" className="group px-7 py-3.5 bg-[var(--text-display)] text-[var(--bg-base)] font-semibold rounded-full shadow-[var(--shadow-elevated)] hover:scale-[1.02] transition-transform">
                Explore Architecture
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </MagneticButton>
              <MagneticButton href={personalInfo.resumeLink} download className="px-7 py-3.5 border border-[var(--border-ui)] bg-[var(--card-bg)] text-[var(--text-display)] font-semibold rounded-full hover:bg-[var(--card-hover)] transition-colors">
                <FileText size={18} className="mr-2 text-[var(--text-body)]" aria-hidden="true" /> 
                Download Resume
              </MagneticButton>
            </motion.div>
            
          </motion.div>
        </div>
      </header>

      <section id="architecture" className="py-32 relative z-10 px-6 md:px-12" aria-label="Deployed Architecture">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="mb-12">
            <h2 className="font-bold tracking-tight text-[var(--text-display)] mb-2" style={{ fontSize: 'calc(var(--text-fluid-h1) * 0.6)' }}>Deployed Architecture</h2>
            <p className="text-[var(--text-body)] font-medium text-lg">Production-ready systems engineered for scale.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {projects.map((proj, i) => {
              const Icon = proj.icon;
              return (
                <motion.article 
                  key={proj.id} 
                  aria-labelledby={`title-${proj.id}`}
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-50px" }} 
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }} 
                  className={proj.colSpan}
                >
                  <SpotlightCard className="h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-ui)] text-[var(--text-display)] shadow-[var(--shadow-base)]">
                        <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <div className="flex gap-2">
                        {proj.github && (
                           <a href={proj.github} target="_blank" rel="noreferrer" aria-label={`View ${proj.title} on GitHub`} className="p-2 text-[var(--text-body)] hover:text-[var(--text-display)] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]">
                             <Github size={20} aria-hidden="true" />
                           </a>
                        )}
                        <a href="#" aria-label={`View deployment of ${proj.title}`} className="p-2 text-[var(--text-body)] hover:text-[var(--text-display)] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]">
                          <ExternalLink size={20} aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                    
                    <h3 id={`title-${proj.id}`} className="text-2xl font-bold mb-1 text-[var(--text-display)] tracking-tight">{proj.title}</h3>
                    <p className="text-sm font-semibold text-[var(--accent-primary)] mb-5">{proj.subtitle}</p>
                    <p className="text-[var(--text-body)] mb-8 leading-relaxed text-base">{proj.desc}</p>

                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-[var(--border-ui)]" aria-label={`Technologies used in ${proj.title}`}>
                      {proj.tech.map(tech => <TechPill key={tech}>{tech}</TechPill>)}
                    </div>
                  </SpotlightCard>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}