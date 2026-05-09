'use client';

import { motion } from 'framer-motion';
import { Button } from '../Button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">
            Ali Alameedi
          </h1>
          <h2 className="text-xl md:text-2xl text-indigo-600 font-medium mb-6">
            AI & HPC Software Engineer @ General Motors
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building large-scale distributed HPC systems, AI-accelerated engineering platforms, and cloud-native infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="https://github.com/alialameedi" variant="primary" size="lg">
              GitHub
            </Button>
            <Button href="https://www.linkedin.com/in/ali-alameedi/" variant="secondary" size="lg">
              LinkedIn
            </Button>
            <Button href="mailto:alialameedi@outlook.com" variant="outline" size="lg">
              Email
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}