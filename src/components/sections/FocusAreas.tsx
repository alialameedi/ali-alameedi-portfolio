'use client';

import { motion } from 'framer-motion';
import { Card } from '../Card';
import { ChevronDown, Server, Wrench, Brain, Cloud, Shield } from 'lucide-react';
import { useState } from 'react';

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
    description: 'Designing and optimizing high-performance compute platforms for large-scale engineering workloads.',
    technologies: ['IBM LSF', 'Slurm', 'MPI', 'OpenMP', 'Kubernetes', 'Docker'],
  },
  {
    id: 'platform',
    title: 'Platform Engineering',
    icon: Wrench,
    description: 'Building resilient infrastructure and developer-facing platforms that simplify operations.',
    technologies: ['Spring Boot', 'React', 'TypeScript', 'Java', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'ai',
    title: 'AI-Augmented Development',
    icon: Brain,
    description: 'Leveraging generative tools to accelerate software delivery and improve code productivity.',
    technologies: ['GitHub Copilot', 'Claude Code', 'Cursor', 'ChatGPT', 'GitHub Actions', 'CI/CD'],
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    icon: Cloud,
    description: 'Architecting cloud-native solutions that deliver scalable, secure engineering environments.',
    technologies: ['Azure', 'AWS', 'GCP', 'Terraform', 'Kubernetes', 'Docker'],
  },
  {
    id: 'sre',
    title: 'SRE & Observability',
    icon: Shield,
    description: 'Creating monitoring, automation, and incident workflows that keep systems healthy and reliable.',
    technologies: ['Datadog', 'Prometheus', 'Grafana', 'Ansible', 'Python', 'Bash'],
  },
];

export function FocusAreas() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-600 mb-3">Focus areas</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-950">Where I spend my time and energy.</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Technical expertise built around scalable systems, developer productivity, and infrastructure reliability.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            const isExpanded = expandedId === area.id;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Card onClick={() => toggleExpanded(area.id)} className="h-full cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-8 w-8 text-emerald-600" />
                      <h3 className="text-lg font-semibold text-slate-950">{area.title}</h3>
                    </div>
                    <div className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                      <ChevronDown className="h-5 w-5 text-slate-500" />
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4">{area.description}</p>

                  {isExpanded && (
                    <div className="rounded-3xl border-t border-slate-200 pt-4">
                      <h4 className="font-medium text-slate-950 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
