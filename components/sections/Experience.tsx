'use client';

import { motion } from 'framer-motion';
import { Timeline, TimelineItem } from '../Timeline';
import { Accordion } from '../Accordion';

export function Experience() {
  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Professional journey in HPC, distributed systems, and platform engineering
          </p>
        </motion.div>

        <Timeline>
          <TimelineItem
            date="2022 — Present"
            title="AI & HPC Software Engineer"
            company="General Motors"
          >
            <div className="space-y-4">
              <Accordion title="AI-Forward Engineering Workflow" defaultOpen={true}>
                <div className="space-y-2 text-slate-600 dark:text-slate-300">
                  <p>• Cursor IDE with AI-assisted development</p>
                  <p>• GitHub Copilot for intelligent code suggestions</p>
                  <p>• Claude Code for complex problem-solving and refactoring</p>
                  <p>• Glean for enterprise knowledge discovery</p>
                </div>
              </Accordion>

              <Accordion title="Core Responsibilities" defaultOpen={true}>
                <div className="space-y-2 text-slate-600 dark:text-slate-300">
                  <p>• HPC platform engineering at enterprise scale</p>
                  <p>• Distributed job orchestration systems design</p>
                  <p>• Observability and automation systems implementation</p>
                  <p>• Linux-based infrastructure and IBM LSF cluster management</p>
                  <p>• Java Spring Boot backend API development</p>
                  <p>• React + TypeScript internal dashboard creation</p>
                  <p>• Azure cloud integration and infrastructure management</p>
                </div>
              </Accordion>

              <Accordion title="Scale & Impact Metrics">
                <div className="space-y-2 text-slate-600 dark:text-slate-300">
                  <p>• 20,000+ servers across 6+ HPC clusters</p>
                  <p>• Support for 50+ CAE applications (LS-DYNA, Abaqus, STAR-CCM+, etc.)</p>
                  <p>• 600+ automated server issue resolutions monthly</p>
                  <p>• Improved system reliability and reduced downtime</p>
                </div>
              </Accordion>
            </div>
          </TimelineItem>

          <TimelineItem
            date="2021 — 2022"
            title="Area Manager"
            company="Helping Hand for Relief and Development"
          >
            <div className="space-y-2 text-slate-600 dark:text-slate-300">
              <p>• Led 300+ attendee community events and programs</p>
              <p>• Generated $500,000+ in revenue impact</p>
              <p>• Reduced administrative costs by 25% through process optimization</p>
              <p>• Managed cross-functional teams and stakeholder relationships</p>
            </div>
          </TimelineItem>

          <TimelineItem
            date="2020 — 2021"
            title="Site Reliability Engineer"
            company="Sofy.ai"
          >
            <div className="space-y-2 text-slate-600 dark:text-slate-300">
              <p>• Managed deployment and reliability of Spring microservices</p>
              <p>• Oversaw infrastructure for 60+ devices/servers</p>
              <p>• Achieved and maintained 97% system uptime</p>
              <p>• Implemented Datadog monitoring and alerting systems</p>
              <p>• Developed automated reliability and health check processes</p>
            </div>
          </TimelineItem>

          <TimelineItem
            date="2019 — 2020"
            title="Software Engineer Intern"
            company="PerBlue"
          >
            <div className="space-y-2 text-slate-600 dark:text-slate-300">
              <p>• Backend API development for mobile gaming platforms</p>
              <p>• Designed distributed system architecture using Orleans</p>
              <p>• Deployed production features for live gaming applications</p>
              <p>• Collaborated on scalable system design and implementation</p>
            </div>
          </TimelineItem>

          <TimelineItem
            date="2018 — 2019"
            title="Software Engineer"
            company="MyCase"
            isLast={true}
          >
            <div className="space-y-2 text-slate-600 dark:text-slate-300">
              <p>• API refactoring and performance optimization</p>
              <p>• System design improvements and architectural enhancements</p>
              <p>• Cross-team collaboration via Jira and GitHub workflows</p>
              <p>• Code quality improvements and technical debt reduction</p>
            </div>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
}