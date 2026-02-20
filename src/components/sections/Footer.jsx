import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-200 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Sidhanta Manoj Sahu. All rights reserved.</p>
          <p className="mt-1">Engineered for performance and scale.</p>
        </div>

        <div className="flex gap-8">
          <a 
            href="https://linkedin.com/in/sidhanta-sahu" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors"
          >
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a 
            href="https://github.com/sidsahu94" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            GitHub <ArrowUpRight size={14} />
          </a>
          <a 
            href="mailto:sidhantas786@gmail.com" 
            className="flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors"
          >
            Email <ArrowUpRight size={14} />
          </a>
        </div>
        
      </div>
    </footer>
  );
}
