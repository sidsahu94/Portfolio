import { motion } from 'framer-motion';
import { Code2, Layout, Database } from 'lucide-react';

export default function Arsenal() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 border-t border-zinc-200">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
        <h3 className="text-3xl font-medium mb-12 text-zinc-900">Technical Competencies</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div variants={fadeInUp} className="glass-panel p-8 rounded-3xl">
            <Code2 className="mb-6 text-blue-600" size={32} />
            <h4 className="text-xl font-medium mb-4 text-zinc-900">Core Programming & Backend</h4>
            <p className="text-zinc-600 text-sm leading-relaxed mb-4">
              Specialized in robust application logic using Java, Python, and JavaScript. Building scalable APIs with Node.js and Express.js.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-panel p-8 rounded-3xl">
            <Layout className="mb-6 text-emerald-600" size={32} />
            <h4 className="text-xl font-medium mb-4 text-zinc-900">Frontend & Mobile</h4>
            <p className="text-zinc-600 text-sm leading-relaxed mb-4">
              Creating dynamic interfaces with React.js, Redux Toolkit, and Tailwind CSS. Developing native mobile experiences via Android Studio.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-panel p-8 rounded-3xl">
            <Database className="mb-6 text-purple-600" size={32} />
            <h4 className="text-xl font-medium mb-4 text-zinc-900">Infrastructure & Data</h4>
            <p className="text-zinc-600 text-sm leading-relaxed mb-4">
              Managing distributed data systems with MongoDB, MySQL, and Docker. Implementing real-time communication via WebRTC and Socket.io.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}