'use client';

import { motion } from 'framer-motion';
import { Card } from '../Card';
import { Server, Brain, TrendingUp, Code, Database, Zap } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-emerald-600 mb-4">About me</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-950">
            Practical engineering, thoughtful execution, meaningful outcomes.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr] items-center">
          <div className="space-y-6 text-slate-700">
            <p className="text-lg leading-8">
              I design and operate large-scale compute platforms for engineering teams that need reliability, speed, and simplicity. My work blends Java backend systems, Spring Boot microservices, cloud infrastructure, platform engineering, AI toolchain integration, prompt engineering, and multi-agent workflows into enterprise-grade solutions.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover-lift hover-glow transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Server className="h-6 w-6 text-emerald-600" />
                  <strong className="text-slate-950">HPC scale and reliability</strong>
                </div>
                <p className="text-slate-600">Infrastructure for thousands of compute nodes and mission-critical workflows.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover-lift hover-glow transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Brain className="h-6 w-6 text-emerald-600" />
                  <strong className="text-slate-950">AI-enabled developer workflows</strong>
                </div>
                <p className="text-slate-600">Smart automation, clean APIs, and intuitive internal tools.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover-lift hover-glow transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                  <strong className="text-slate-950">Focused, measurable impact</strong>
                </div>
                <p className="text-slate-600">Reducing downtime, accelerating delivery, and improving operational clarity.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover-lift hover-glow transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Code className="h-6 w-6 text-emerald-600" />
                  <strong className="text-slate-950">Engineering excellence</strong>
                </div>
                <p className="text-slate-600">From architecture to deployment, building systems that scale and endure.</p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-slate-200 bg-gradient-to-br from-white via-emerald-50/50 to-green-50/30 shadow-lg hover-lift hover-glow transition-all duration-300">
              <div className="space-y-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-emerald-600 mb-2">What I bring</p>
                  <h3 className="text-2xl font-semibold text-slate-950">A calm, modern approach to complex systems.</h3>
                </div>
                <div className="space-y-3 text-slate-600">
                  <p>From architecture and observability to deployment and incident automation, I help teams move faster with less risk.</p>
                  <p>My work blends engineering rigor with a user-focused mindset for internal systems, developer tools, and enterprise platforms.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 px-3 py-1 text-xs font-medium text-emerald-800 border border-emerald-200">
                    <Database className="h-3 w-3" />
                    Distributed Systems
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-100 to-emerald-100 px-3 py-1 text-xs font-medium text-blue-800 border border-blue-200">
                    <Zap className="h-3 w-3" />
                    Cloud Architecture
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-slate-100 to-emerald-100 px-3 py-1 text-xs font-medium text-slate-800 border border-slate-200">
                    <Code className="h-3 w-3" />
                    Java & Spring Boot
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-100 to-blue-100 px-3 py-1 text-xs font-medium text-indigo-800 border border-indigo-200">
                    <Server className="h-3 w-3" />
                    Backend & Platform Engineering
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-1 text-xs font-medium text-green-800 border border-emerald-200">
                    <Brain className="h-3 w-3" />
                    API Design & Microservices
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-100 to-fuchsia-100 px-3 py-1 text-xs font-medium text-purple-800 border border-purple-200">
                    <Brain className="h-3 w-3" />
                    AI Tooling & Prompt Engineering
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
