'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Card } from '../Card';
import { ChevronDown, Server, Wrench, Brain, Cloud, Shield } from 'lucide-react';

interface FocusArea {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  technologies: string[];
}

const focusAreas: FocusArea[] = [
  {
    id: 'hpc',
    title: 'HPC & Distributed Systems',
    icon: Server,
    description: 'Designing and optimizing high-performance computing platforms for large-scale engineering simulations.',
    technologies: ['IBM LSF', 'Slurm', 'MPI', 'OpenMP', 'Kubernetes', 'Docker']
  },
  {
    id: 'platform',
    title: 'Platform Engineering & Infrastructure',
    icon: Wrench,
    description: 'Building scalable platforms and infrastructure for software development and deployment.',
    technologies: ['Spring Boot', 'React', 'TypeScript', 'Java', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'ai',
    title: 'AI-Augmented Software Development',
    icon: Brain,
    description: 'Leveraging AI tools to accelerate development workflows and improve code quality.',
    technologies: ['GitHub Copilot', 'Claude Code', 'Cursor', 'ChatGPT', 'GitHub Actions', 'CI/CD']
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    icon: Cloud,
    description: 'Architecting and managing cloud-native infrastructure across multiple providers.',
    technologies: ['Azure', 'AWS', 'GCP', 'Terraform', 'Kubernetes', 'Docker']
  },
  {
    id: 'sre',
    title: 'SRE, Observability & Automation',
    icon: Shield,
    description: 'Implementing site reliability engineering practices and automated monitoring systems.',
    technologies: ['Datadog', 'Prometheus', 'Grafana', 'Ansible', 'Python', 'Bash']
  }
];

export function FocusAreas() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Focus Areas
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Core technical capabilities and expertise areas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            const isExpanded = expandedId === area.id;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card onClick={() => toggleExpanded(area.id)} className="h-full cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Icon className="w-8 h-8 text-indigo-600 mr-3" />
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {area.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-slate-500" />
                    </motion.div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {area.description}
                  </p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                          <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                            Technologies & Tools
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {area.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}