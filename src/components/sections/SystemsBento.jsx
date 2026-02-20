'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Shield, Database, Globe } from 'lucide-react';
import SpotlightCard from '@/components/ui/SpotlightCard';

const projects = [
  {
    id: "ultimate-social",
    title: "Ultimate Social",
    subtitle: "Real-Time Communications Infrastructure",
    desc: "Engineered a containerized MERN application utilizing Docker and Redis for horizontal scaling. Implemented low-latency WebRTC media streams with MongoDB ACID transactions for data integrity.",
    tech: ['MongoDB', 'React', 'Redis', 'Docker', 'WebRTC'],
    colSpan: "md:col-span-8",
    icon: Layers,
  },
  {
    id: "decentralized-voting",
    title: "Decentralized Voting",
    subtitle: "Web3 Smart Contracts",
    desc: "Architected a decentralized electoral system ensuring cryptographic transparency by integrating Solidity smart contracts with a robust Node.js/Web3.js backend.",
    tech: ['Solidity', 'Web3.js', 'Node.js'],
    colSpan: "md:col-span-4",
    icon: Shield,
  },
  {
    id: "smart-billing",
    title: "Smart Billing",
    subtitle: "SaaS Dashboard Architecture",
    desc: "Built a production-grade SaaS platform featuring secure JWT authentication, localized SQLite data persistence, and automated invoice generation with offline-first support.",
    tech: ['Node.js', 'Express', 'SQLite', 'JWT'],
    colSpan: "md:col-span-5",
    icon: Database,
  },
  {
    id: "news-explorer",
    title: "NewsExplorer",
    subtitle: "High-Volume Data Aggregation",
    desc: "Designed an optimized client-side application fetching and filtering high-velocity global data via NewsAPI, featuring real-time keyword indexing.",
    tech: ['JavaScript', 'REST API', 'HTML5'],
    colSpan: "md:col-span-7",
    icon: Globe,
  }
];

export default function SystemsBento() {
  return (
    <section id="architecture" className="py-32 relative z-10" aria-label="Deployed Architecture">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-display)] mb-2">Deployed Architecture</h2>
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
                      {proj.title === "Ultimate Social" && (
                         <a href="https://github.com/sidsahu94" target="_blank" rel="noreferrer" aria-label={`View ${proj.title} source code on GitHub`} className="p-2 text-[var(--text-body)] hover:text-[var(--text-display)] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]">
                           <Github size={20} aria-hidden="true" />
                         </a>
                      )}
                      <a href="#" aria-label={`View live deployment of ${proj.title}`} className="p-2 text-[var(--text-body)] hover:text-[var(--text-display)] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]">
                        <ExternalLink size={20} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                  
                  <h3 id={`title-${proj.id}`} className="text-2xl font-bold mb-1 text-[var(--text-display)] tracking-tight">{proj.title}</h3>
                  <p className="text-sm font-semibold text-[var(--accent-primary)] mb-5">{proj.subtitle}</p>
                  
                  <p className="text-[var(--text-body)] mb-8 leading-relaxed text-base">
                    {proj.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-[var(--border-ui)]" aria-label={`Technologies used in ${proj.title}`}>
                    {proj.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-[var(--bg-base)] border border-[var(--border-ui)] text-[var(--text-body)] text-xs rounded-md font-mono font-medium shadow-[var(--shadow-base)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}