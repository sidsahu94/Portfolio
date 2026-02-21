'use client';

import { motion } from 'framer-motion';
import { Github, FileText, ArrowUpRight, Activity, Terminal, CheckCircle2, Database } from 'lucide-react';
import { personalInfo, projects, skills, engineeringFocus } from '@/lib/portfolio-data';

export default function Portfolio() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="relative mx-auto w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-light)] bg-[var(--bg-surface)] text-xs font-semibold tracking-wide text-[var(--text-body)] mb-8 shadow-[var(--shadow-micro)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Engineering Roles
            </div>
            
            <h1 className="font-bold mb-6 text-balance">
              <span className="block text-xl md:text-2xl text-[var(--text-muted)] font-semibold mb-3 tracking-normal uppercase">
                {personalInfo.name}
              </span>
              {personalInfo.headline}
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--text-body)] mb-10 text-balance max-w-prose">
              {personalInfo.subhead}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="px-7 py-3.5 bg-[var(--accent-primary)] text-white font-semibold rounded-lg shadow-[var(--shadow-elevated)] hover:opacity-90 transition-opacity">
                View Architecture
              </a>
              <a href={personalInfo.resumeLink} download className="flex items-center gap-2 px-7 py-3.5 border border-[var(--border-light)] bg-[var(--bg-surface)] text-[var(--text-display)] font-semibold rounded-lg shadow-[var(--shadow-micro)] hover:border-[var(--text-body)] transition-colors">
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
          {/* MICRO-POLISH: Tighter editorial rhythm */}
          <h4 className="mb-10">Core Engineering Focus</h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engineeringFocus.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-[var(--bg-main)] p-6 rounded-xl border border-[var(--border-light)] shadow-[var(--shadow-elevated)] hover:border-[var(--accent-primary)] transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center mb-6">
                    <Icon size={20} className="text-[var(--accent-primary)]" />
                  </div>
                  <h3 className="mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--text-body)] max-w-prose">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SELECTED PROJECTS */}
      <section id="projects" className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          {/* MICRO-POLISH: Tighter rhythm */}
          <h4 className="mb-10">Production Case Studies</h4>
          
          <div className="space-y-20">
            {projects.map((proj) => (
              <article key={proj.id} className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-light)] shadow-[var(--shadow-micro)] overflow-hidden mt-16 first:mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column */}
                  <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-[var(--border-light)] bg-[var(--bg-main)]">
                    <h3 className="mb-2 text-2xl">{proj.title}</h3>
                    <p className="text-[var(--text-muted)] font-semibold text-sm mb-8">{proj.summary}</p>
                    
                    <div className="flex flex-col gap-4 mb-8">
                      <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--accent-primary)] text-white text-sm font-semibold rounded-md hover:opacity-90 transition-opacity w-full shadow-[var(--shadow-elevated)]">
                        Live System <ArrowUpRight size={16} />
                      </a>

                      <a href={proj.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-[var(--border-light)] bg-[var(--bg-surface)] text-[var(--text-display)] text-sm font-semibold rounded-md hover:bg-[var(--bg-accent)] transition-colors w-full shadow-[var(--shadow-micro)]">
                        <Github size={16} /> View Source
                      </a>
                    </div>

                    {/* MICRO-POLISH: Tech Tags Micro-Depth */}
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map(tech => (
                        <span key={tech} className="px-2.5 py-1 bg-[var(--bg-surface)] border border-[var(--border-light)] text-[var(--text-muted)] text-xs rounded font-mono shadow-[var(--shadow-micro)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-8 p-8 md:p-10 space-y-8 md:space-y-10">
                    <div>
                      <h4 className="mb-3 flex items-center gap-2">
                        <Activity size={16} className="text-[var(--text-muted)]"/> The Problem
                      </h4>
                      <p className="text-sm text-[var(--text-body)] max-w-prose leading-relaxed">{proj.problem}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="mb-3 flex items-center gap-2">
                           <Terminal size={16} className="text-[var(--text-muted)]"/> Engineering Challenges
                        </h4>
                        <ul className="senior-list text-sm text-[var(--text-body)] max-w-prose">
                          {proj.challenges.map((challenge, i) => (
                            <li key={i}>{challenge}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="mb-3 flex items-center gap-2">
                           <Database size={16} className="text-[var(--text-muted)]"/> Technical Decisions
                        </h4>
                        <ul className="senior-list text-sm text-[var(--text-body)] max-w-prose">
                          {proj.decisions.map((decision, i) => (
                            <li key={i}>{decision}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* MICRO-POLISH: Impact Panel Presence Boost */}
                    <div className="p-6 md:p-8 rounded-xl border border-[var(--accent-primary)] border-opacity-20 bg-gradient-to-b from-[var(--accent-muted)] to-transparent backdrop-blur-sm">
                      <h4 className="mb-4 text-[var(--accent-primary)]">Engineering Impact</h4>
                      <ul className="space-y-3">
                        {proj.impact.map((metric, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-[var(--accent-primary)] shrink-0 mt-0.5" />
                            <span className="font-semibold text-[15px] text-[var(--text-display)] max-w-prose leading-relaxed">
                              {metric}
                            </span>
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

      {/* 4. SKILLS */}
      <section className="py-24 px-6 border-t border-[var(--border-light)] bg-[var(--bg-surface)]">
        <div className="max-w-5xl mx-auto">
          {/* MICRO-POLISH: Tighter rhythm */}
          <h4 className="mb-10">Technical Capability Signal</h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="mb-4 text-xl">System Architecture</h3>
              <ul className="space-y-2 text-[var(--text-body)] text-sm">
                {skills.core.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl">Engineering Stack</h3>
              <ul className="space-y-2 text-[var(--text-body)] text-sm">
                {skills.tech.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl">Engineering Environment</h3>
              <ul className="space-y-2 text-[var(--text-body)] text-sm">
                {skills.tools.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}