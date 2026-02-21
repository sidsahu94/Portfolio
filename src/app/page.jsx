'use client';

import { motion } from 'framer-motion';
import { Github, FileText, ArrowUpRight, Activity, Terminal, CheckCircle2, Database, MapPin } from 'lucide-react';
import { personalInfo, projects, skills, engineeringFocus } from '@/lib/portfolio-data';

export default function Portfolio() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="relative mx-auto w-full overflow-hidden">
      
      {/* 1. HERO SECTION (Refined Hierarchy & Visual Anchoring) */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-light)] bg-[var(--bg-surface)] text-xs font-semibold tracking-wide text-[var(--text-body)] shadow-[var(--shadow-micro)]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open to Engineering Roles
              </div>
              {/* Added location with higher visibility near Hero */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-light)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider shadow-[var(--shadow-micro)]">
                <MapPin size={14} className="text-[var(--accent-primary)]" />
                {personalInfo.location}
              </div>
            </div>
            
            <h1 className="font-bold mb-6 text-balance">
              {/* REFINEMENT: Increased name size and reduced spacing to headline */}
              <span className="block text-2xl md:text-4xl text-[var(--text-display)] font-extrabold mb-1 tracking-tight">
                {personalInfo.name}
              </span>
              <span className="text-[var(--text-muted)] opacity-90">{personalInfo.headline}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--text-body)] mb-10 text-balance max-w-prose">
              {personalInfo.subhead}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {/* REFINEMENT: shadow-elevated for CTA Visual Anchoring */}
              <a href="#projects" className="px-7 py-3.5 bg-[var(--accent-primary)] text-white font-semibold rounded-lg shadow-[var(--shadow-elevated)] hover:translate-y-[-2px] transition-all duration-300">
                Explore Architecture
              </a>
              <a href={personalInfo.resumeLink} download className="flex items-center gap-2 px-7 py-3.5 border border-[var(--border-light)] bg-[var(--bg-surface)] text-[var(--text-display)] font-semibold rounded-lg shadow-[var(--shadow-micro)] hover:bg-[var(--bg-accent)] transition-all">
                <FileText size={18} className="text-[var(--text-muted)]" /> Resume
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3.5 border border-[var(--border-light)] bg-[var(--bg-surface)] rounded-lg shadow-[var(--shadow-micro)] text-[var(--text-body)] hover:text-[var(--accent-primary)] transition-colors">
                <Github size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ENGINEERING IDENTITY */}
      <section className="relative py-24 px-6 z-10">
        <div className="absolute inset-0 bg-[var(--bg-surface)] -skew-y-3 -z-10 border-y border-[var(--border-light)] shadow-[var(--shadow-micro)]" />
        
        <div className="max-w-5xl mx-auto">
          <h4 className="mb-12 text-[var(--text-muted)] font-bold tracking-widest uppercase text-xs">Technical Specialization</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engineeringFocus.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-[var(--bg-main)] p-8 rounded-xl border border-[var(--border-light)] shadow-[var(--shadow-micro)] hover:border-[var(--accent-primary)] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-[var(--accent-primary)]" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-[var(--text-body)] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SELECTED PROJECTS (Enriched Tech Tags & Padding) */}
      <section id="projects" className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h4 className="mb-12 text-[var(--text-muted)] font-bold tracking-widest uppercase text-xs">System Architecture Case Studies</h4>
          
          <div className="space-y-24">
            {projects.map((proj) => (
              <article key={proj.id} className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-light)] shadow-[var(--shadow-micro)] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column */}
                  <div className="lg:col-span-4 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-[var(--border-light)] bg-[var(--bg-main)]">
                    <h3 className="mb-2 text-2xl font-bold">{proj.title}</h3>
                    <p className="text-[var(--accent-primary)] font-bold text-xs uppercase tracking-wider mb-8">{proj.summary}</p>
                    
                    <div className="flex flex-col gap-4 mb-8">
                      <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[var(--accent-primary)] text-white text-sm font-bold rounded-lg shadow-[var(--shadow-elevated)] hover:opacity-90 transition-all w-full">
                        Live Deployment <ArrowUpRight size={16} />
                      </a>
                      <a href={proj.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-[var(--border-light)] bg-[var(--bg-surface)] text-[var(--text-display)] text-sm font-bold rounded-lg hover:bg-[var(--bg-accent)] transition-all w-full">
                        <Github size={16} /> Source Code
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map(tech => (
                        /* REFINEMENT: Visually enriched Tech Tags with tint and micro-shadow */
                        <span key={tech} className="px-3 py-1.5 bg-[var(--bg-accent)] border border-[var(--border-light)] text-[var(--text-display)] text-[11px] font-bold rounded shadow-[var(--shadow-micro)] uppercase tracking-tight">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Consistent p-10 padding for narrative */}
                  <div className="lg:col-span-8 p-8 md:p-10 space-y-10">
                    <div>
                      <h4 className="mb-4 flex items-center gap-2 text-[var(--text-display)]">
                        <Activity size={18} className="text-[var(--accent-primary)]"/> The Problem
                      </h4>
                      <p className="text-[15px] text-[var(--text-body)] max-w-prose leading-relaxed">{proj.problem}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <h4 className="mb-4 flex items-center gap-2 text-[var(--text-display)]">
                           <Terminal size={18} className="text-[var(--accent-primary)]"/> Engineering Challenges
                        </h4>
                        <ul className="senior-list text-sm text-[var(--text-body)] max-w-prose">
                          {proj.challenges.map((challenge, i) => (
                            <li key={i}>{challenge}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="mb-4 flex items-center gap-2 text-[var(--text-display)]">
                           <Database size={18} className="text-[var(--accent-primary)]"/> Technical Decisions
                        </h4>
                        <ul className="senior-list text-sm text-[var(--text-body)] max-w-prose">
                          {proj.decisions.map((decision, i) => (
                            <li key={i}>{decision}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-8 rounded-xl border border-[var(--accent-primary)] border-opacity-20 bg-gradient-to-b from-[var(--accent-muted)] to-transparent">
                      <h4 className="mb-4 text-[var(--accent-primary)] font-bold">Engineering Impact</h4>
                      <ul className="space-y-4">
                        {proj.impact.map((metric, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <CheckCircle2 size={20} className="text-[var(--accent-primary)] shrink-0 mt-0.5" />
                            <span className="font-bold text-[15px] text-[var(--text-display)] leading-snug">{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL ARSENAL (Refined Category Scanning) */}
      <section className="py-24 px-6 border-t border-[var(--border-light)] bg-[var(--bg-surface)]">
        <div className="max-w-5xl mx-auto">
          <h4 className="mb-12 text-[var(--text-muted)] font-bold tracking-widest uppercase text-xs">Technical Arsenal</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 bg-[var(--bg-main)] rounded-xl border border-[var(--border-light)] shadow-[var(--shadow-micro)]">
              <h3 className="mb-6 text-lg font-bold border-b border-[var(--border-light)] pb-2">System Architecture</h3>
              <ul className="space-y-3 text-[var(--text-body)] text-sm font-medium">
                {skills.core.map(skill => <li key={skill} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"/> {skill}</li>)}
              </ul>
            </div>
            <div className="p-6 bg-[var(--bg-main)] rounded-xl border border-[var(--border-light)] shadow-[var(--shadow-micro)]">
              <h3 className="mb-6 text-lg font-bold border-b border-[var(--border-light)] pb-2">Engineering Stack</h3>
              <ul className="space-y-3 text-[var(--text-body)] text-sm font-medium">
                {skills.tech.map(skill => <li key={skill} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"/> {skill}</li>)}
              </ul>
            </div>
            <div className="p-6 bg-[var(--bg-main)] rounded-xl border border-[var(--border-light)] shadow-[var(--shadow-micro)]">
              <h3 className="mb-6 text-lg font-bold border-b border-[var(--border-light)] pb-2">Engineering Environment</h3>
              <ul className="space-y-3 text-[var(--text-body)] text-sm font-medium">
                {skills.tools.map(skill => <li key={skill} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"/> {skill}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}