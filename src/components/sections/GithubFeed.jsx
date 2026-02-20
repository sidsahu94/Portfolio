'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GitRepo, Star, GitFork, ExternalLink, Activity } from 'lucide-react';
import SpotlightCard from '@/components/ui/SpotlightCard';

export default function GithubFeed() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Automatically fetches your latest 4 updated repositories
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/sidsahu94/repos?sort=updated&per_page=4'
        );
        if (response.ok) {
          const data = await response.json();
          // Filter out forks so recruiters only see your original code
          const originalRepos = data.filter(repo => !repo.fork).slice(0, 4);
          setRepos(originalRepos);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

  if (loading) return null; // Fails gracefully silently

  return (
    <section className="py-24 bg-black relative z-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-24">
        
        <div className="flex items-center justify-between mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <Activity className="text-emerald-400" size={28} />
              Live Commit Feed
            </h3>
            <p className="text-zinc-500 font-mono text-sm mt-2">Automated directly from GitHub API</p>
          </motion.div>
          <a href="https://github.com/sidsahu94" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors font-medium">
            View Complete Profile <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo, i) => (
            <motion.div key={repo.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <SpotlightCard className="p-8 h-full">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white truncate pr-4">{repo.name}</h4>
                  <div className="flex gap-3 text-zinc-500 text-sm">
                    <span className="flex items-center gap-1"><Star size={14} /> {repo.stargazers_count}</span>
                    <span className="flex items-center gap-1"><GitFork size={14} /> {repo.forks_count}</span>
                  </div>
                </div>
                
                <p className="text-zinc-400 text-sm mb-6 line-clamp-2 h-10">
                  {repo.description || "No description provided for this repository."}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full font-mono border border-blue-500/20">
                    {repo.language || "Config"}
                  </span>
                  <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}