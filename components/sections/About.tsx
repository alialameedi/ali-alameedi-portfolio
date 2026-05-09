'use client';

import { motion } from 'framer-motion';
import { Card } from '../Card';

export function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            About
          </h2>
          <Card className="max-w-2xl mx-auto">
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                I specialize in designing and implementing high-performance computing systems at enterprise scale,
                focusing on distributed architectures that power complex engineering simulations.
              </p>
              <p>
                My expertise spans AI-augmented software development workflows, platform engineering for scalable
                infrastructure, and SRE practices that ensure system reliability and performance.
              </p>
              <p>
                Currently at General Motors, I build cloud-native platforms that support thousands of servers
                across multiple HPC clusters, enabling advanced CAE workloads and automated operations.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}