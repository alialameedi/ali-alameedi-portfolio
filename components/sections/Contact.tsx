'use client';

import { motion } from 'framer-motion';
import { Button } from '../Button';

export function Contact() {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            Interested in discussing HPC systems, distributed architectures, or AI-augmented engineering?
            Let's connect and explore opportunities to collaborate.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
            <Button
              href="https://github.com/alialameedi"
              variant="secondary"
              size="lg"
              className="bg-slate-800 hover:bg-slate-700 text-white border-slate-600"
            >
              GitHub
            </Button>
            <Button
              href="https://www.linkedin.com/in/ali-alameedi/"
              variant="secondary"
              size="lg"
              className="bg-slate-800 hover:bg-slate-700 text-white border-slate-600"
            >
              LinkedIn
            </Button>
            <Button
              href="mailto:alialameedi@outlook.com"
              variant="primary"
              size="lg"
            >
              Email
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}