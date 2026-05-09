'use client';

import { motion } from 'framer-motion';
import { Timeline, TimelineItem } from '../Timeline';
import { Accordion } from '../Accordion';
import { Server, Briefcase, Code, TrendingUp, Zap, Shield } from 'lucide-react';

export function Experience() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-emerald-50/50 to-emerald-100/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-700 mb-3">Experience</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-950">Roles and impact over time.</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey across engineering, operations, and platform leadership.
          </p>
        </motion.div>

        <Timeline>
          <TimelineItem date="2024 — Present" title="AI & HPC Software Engineer" company="General Motors">
            <div className="space-y-6 text-slate-600">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Accordion title="What I deliver" defaultOpen={false} icon={<Server className="h-5 w-5" />}>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50/70 hover:bg-emerald-50 transition-colors">
                      <Server className="h-5 w-5 text-emerald-700 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-900">Enterprise-scale HPC platform engineering</p>
                        <p className="text-slate-600">Building and maintaining large-scale compute infrastructure</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50/70 hover:bg-emerald-50 transition-colors">
                      <Zap className="h-5 w-5 text-emerald-700 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-900">Distributed job orchestration</p>
                        <p className="text-slate-600">Managing complex workflows across multiple clusters</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50/70 hover:bg-emerald-50 transition-colors">
                      <Shield className="h-5 w-5 text-emerald-700 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-900">Observability and reliability systems</p>
                        <p className="text-slate-600">Monitoring, alerting, and incident response automation</p>
                      </div>
                    </div>
                  </div>
                </Accordion>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Accordion title="Impact" defaultOpen={false} icon={<TrendingUp className="h-5 w-5" />}>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200">
                      <div className="text-2xl font-bold text-emerald-700">20k+</div>
                      <div className="text-sm text-emerald-600">Servers supported</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-lime-50 to-lime-100 border border-lime-200">
                      <div className="text-2xl font-bold text-lime-700">50+</div>
                      <div className="text-sm text-lime-600">CAE applications</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200">
                      <div className="text-2xl font-bold text-emerald-700">97%</div>
                      <div className="text-sm text-emerald-600">Platform uptime</div>
                    </div>
                  </div>
                </Accordion>
              </motion.div>
            </div>
          </TimelineItem>

          <TimelineItem date="2019 — 2024" title="Area Manager" company="Helping Hand for Relief and Development">
            <div className="space-y-6 text-slate-600">
              <Accordion title="What I delivered" defaultOpen={false} icon={<Briefcase className="h-5 w-5" />}>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50/70 hover:bg-emerald-50 transition-colors">
                    <Briefcase className="h-5 w-5 text-emerald-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Community program leadership</p>
                      <p className="text-slate-600">Organizing and managing large-scale community initiatives</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50/70 hover:bg-emerald-50 transition-colors">
                    <TrendingUp className="h-5 w-5 text-emerald-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Event operations and fundraising</p>
                      <p className="text-slate-600">Coordinating missions and financial strategy</p>
                    </div>
                  </div>
                </div>
              </Accordion>
              <Accordion title="Impact" defaultOpen={false} icon={<TrendingUp className="h-5 w-5" />}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200">
                    <div className="text-2xl font-bold text-emerald-700">40%</div>
                    <div className="text-sm text-emerald-600">Engagement increase</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-lime-50 to-lime-100 border border-lime-200">
                    <div className="text-2xl font-bold text-lime-700">$50K+</div>
                    <div className="text-sm text-lime-600">Funds raised</div>
                  </div>
                </div>
              </Accordion>
            </div>
          </TimelineItem>

          <TimelineItem date="2023 — 2024" title="Site Reliability Engineer" company="Sofy.ai">
            <div className="space-y-6 text-slate-600">
              <Accordion title="What I delivered" defaultOpen={false} icon={<Shield className="h-5 w-5" />}>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50/70 hover:bg-emerald-50 transition-colors">
                    <Shield className="h-5 w-5 text-emerald-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Reliability engineering</p>
                      <p className="text-slate-600">Maintaining high availability for microservice deployments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50/70 hover:bg-emerald-50 transition-colors">
                    <Zap className="h-5 w-5 text-emerald-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Monitoring and automation</p>
                      <p className="text-slate-600">Datadog integration and performance optimization</p>
                    </div>
                  </div>
                </div>
              </Accordion>
              <Accordion title="Impact" defaultOpen={false} icon={<TrendingUp className="h-5 w-5" />}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200">
                    <div className="text-2xl font-bold text-emerald-700">50%</div>
                    <div className="text-sm text-emerald-600">Faster response time</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-lime-50 to-lime-100 border border-lime-200">
                    <div className="text-2xl font-bold text-lime-700">99.9%</div>
                    <div className="text-sm text-lime-600">Service uptime</div>
                  </div>
                </div>
              </Accordion>
            </div>
          </TimelineItem>

          <TimelineItem date="2023" title="Software Engineer Intern" company="PerBlue">
            <div className="space-y-6 text-slate-600">
              <Accordion title="What I delivered" defaultOpen={false} icon={<Code className="h-5 w-5" />}>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50/70 hover:bg-emerald-50 transition-colors">
                    <Code className="h-5 w-5 text-emerald-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Backend development</p>
                      <p className="text-slate-600">Building features for live mobile game systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50/70 hover:bg-emerald-50 transition-colors">
                    <Server className="h-5 w-5 text-emerald-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Distributed architecture</p>
                      <p className="text-slate-600">Designing scalable services and infrastructure</p>
                    </div>
                  </div>
                </div>
              </Accordion>
              <Accordion title="Impact" defaultOpen={false} icon={<TrendingUp className="h-5 w-5" />}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200">
                    <div className="text-2xl font-bold text-emerald-700">30%</div>
                    <div className="text-sm text-emerald-600">Performance boost</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-lime-50 to-lime-100 border border-lime-200">
                    <div className="text-2xl font-bold text-lime-700">10x</div>
                    <div className="text-sm text-lime-600">Load scaling</div>
                  </div>
                </div>
              </Accordion>
            </div>
          </TimelineItem>

          <TimelineItem date="2023" title="Software Engineer" company="MyCase" isLast>
            <div className="space-y-6 text-slate-600">
              <Accordion title="What I delivered" defaultOpen={false} icon={<Code className="h-5 w-5" />}>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50/70 hover:bg-emerald-50 transition-colors">
                    <Code className="h-5 w-5 text-emerald-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">API refactoring</p>
                      <p className="text-slate-600">Improving performance and maintainability</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50/70 hover:bg-emerald-50 transition-colors">
                    <Briefcase className="h-5 w-5 text-emerald-700 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">Cross-team collaboration</p>
                      <p className="text-slate-600">Architecture and engineering initiatives</p>
                    </div>
                  </div>
                </div>
              </Accordion>
              <Accordion title="Impact" defaultOpen={false} icon={<TrendingUp className="h-5 w-5" />}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200">
                    <div className="text-2xl font-bold text-emerald-700">40%</div>
                    <div className="text-sm text-emerald-600">API speed increase</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-lime-50 to-lime-100 border border-lime-200">
                    <div className="text-2xl font-bold text-lime-700">Improved</div>
                    <div className="text-sm text-lime-600">Code quality</div>
                  </div>
                </div>
              </Accordion>
            </div>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
}
