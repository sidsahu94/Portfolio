'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

export default function CaseStudyCard({ project }) {
  return (
    <motion.article 
      className="group relative flex flex-col md:flex-row gap-8 py-12 border-b border-[var(--border-ui)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Metrics & Metadata Sidebar */}
      <aside className="w-full md:w-1/3 flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-[var(--text-display)] tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-[var(--text-display)] bg-[var(--bg-surface)] px-3 py-1.5 rounded-md border border-[var(--border-ui)] inline-block w-fit">
          {project.metrics}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map(tech => (
            <span key={tech} className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
              {tech}
            </span>
          ))}
        </div>
      </aside>

      {/* Engineering Context */}
      <div className="w-full md:w-2/3 flex flex-col h-full">
        <h4 className="text-lg font-semibold text-[var(--text-display)] mb-2">The Architecture</h4>
        <p className="text-[var(--text-body)] leading-relaxed mb-6">
          {project.desc}
        </p>
        
        <div className="flex gap-4 mt-auto pt-4">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-display)] hover:opacity-70 transition-opacity">
              Live Deployment <ArrowUpRight size={16} />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-body)] hover:text-[var(--text-display)] transition-colors">
              Source Code <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}