'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from '../Card';
import { Modal } from '../Modal';
import { ExternalLink, Zap } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  details: {
    overview: string;
    challenges: string[];
    architecture: string;
    components: string[];
    outcomes: string[];
  };
}

const projects: Project[] = [
  {
    id: 'gm-hpc',
    title: 'GM HPC Platform Engineering System',
    description: 'Multi-cluster HPC platform supporting engineering simulation workloads.',
    impact: '20,000+ servers across 6+ clusters',
    technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'IBM LSF', 'Azure', 'Linux'],
    details: {
      overview: 'Led the design and implementation of a comprehensive HPC platform that supports engineering simulations across multiple data centers.',
      challenges: [
        'Coordinating job scheduling across distributed clusters',
        'Maintaining high availability for critical workflows',
        'Integrating legacy CAE applications without sacrificing performance',
        'Scaling infrastructure for thousands of concurrent workloads',
      ],
      architecture: `System Architecture:
├── Job Orchestration Layer
│   ├── IBM LSF Scheduler Integration
│   ├── Queue Management & Prioritization
│   └── Multi-cluster Coordination
├── Monitoring & Observability
│   ├── Real-time Metrics
│   ├── Health Checks & Alerting
│   └── Automated Remediation
├── API Services (Spring Boot)
│   ├── Job Submission & Management
│   ├── Resource Allocation
│   └── User Authentication
├── User Interface (React/TypeScript)
│   ├── Job Dashboard
│   ├── Resource Monitoring
│   └── Administrative Tools
└── Infrastructure Automation
    ├── Server Provisioning
    ├── Configuration Management
    └── Health Monitoring`,
      components: [
        'Job scheduler layer with IBM LSF integration',
        'Monitoring layer with automated health checks',
        'API layer with Spring Boot microservices',
        'UI dashboards with React and TypeScript',
        'Automation systems resolving hundreds of server issues monthly',
      ],
      outcomes: [
        'Reduced system downtime through proactive monitoring',
        'Improved MTTR from hours to minutes',
        'Enabled support for 50+ CAE applications',
        'Automated resolution of infrastructure issues',
      ],
    },
  },
  {
    id: 'sre-automation',
    title: 'SRE Automation Systems',
    description: 'Automated monitoring and remediation for infrastructure reliability.',
    impact: '97% uptime and hundreds of automated issue resolutions',
    technologies: ['Datadog', 'Python', 'Ansible', 'Prometheus', 'Grafana'],
    details: {
      overview: 'Built SRE automation systems for monitoring, alerting, and automated remediation of infrastructure problems.',
      challenges: [
        'Reducing alert noise while catching real incidents',
        'Creating safe automated remediation workflows',
        'Integrating tools across monitoring and operations systems',
        'Scaling automation for thousands of servers',
      ],
      architecture: `SRE Automation Stack:
├── Monitoring Collection
│   ├── Datadog Agents
│   ├── Custom Metrics & Logs
│   └── Infrastructure Sensors
├── Alerting Engine
│   ├── Intelligent Thresholds
│   ├── Anomaly Detection
│   └── Escalation Policies
├── Automation Platform
│   ├── Ansible Playbooks
│   ├── Python Scripts
│   └── API Integrations
└── Dashboard & Reporting
    ├── Grafana Visualizations
    ├── Incident Reports
    └── Performance Analytics`,
      components: [
        'Datadog monitoring with custom dashboards',
        'Automated alerting and escalation policies',
        'Ansible remediation playbooks',
        'Python integration scripts for complex workflows',
      ],
      outcomes: [
        'Achieved 97% system uptime through proactive monitoring',
        'Automated hundreds of infrastructure issue resolutions',
        'Reduced manual intervention by more than 80%',
        'Improved incident response time significantly',
      ],
    },
  },
  {
    id: 'dev-tools',
    title: 'Developer Productivity Tools',
    description: 'Tools and platforms to improve engineering team efficiency.',
    impact: '25% reduction in administrative overhead',
    technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'Docker'],
    details: {
      overview: 'Built internal tools that streamline workflows and reduce administrative overhead for engineering teams.',
      challenges: [
        'Mapping complex internal workflows into usable tools',
        'Integrating with existing systems while preserving security',
        'Delivering applications with a strong developer experience',
        'Encouraging adoption across large teams',
      ],
      architecture: `Developer Tools Platform:
├── Code Generation Tools
│   ├── Template Systems
│   ├── Boilerplate Automation
│   └── Configuration Generators
├── Workflow Automation
│   ├── CI/CD Pipeline Helpers
│   ├── Deployment Scripts
│   └── Environment Management
├── Collaboration Platforms
│   ├── Internal Wikis
│   ├── Knowledge Bases
│   └── Team Dashboards
└── Analytics & Insights
    ├── Usage Metrics
    ├── Performance Monitoring
    └── Adoption Tracking`,
      components: [
        'React-based dashboards and productivity tools',
        'Node.js backend automation services',
        'Python scripts for analysis and workflow orchestration',
        'Docker containers for reliable deployments',
      ],
      outcomes: [
        'Reduced administrative overhead by 25%',
        'Improved developer onboarding and productivity',
        'Increased tool adoption across teams',
        'Enhanced operational transparency and collaboration',
      ],
    },
  },
];

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-600 mb-3">Featured work</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-950">Recent engineering work with measurable impact.</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Select projects that showcase systems design, platform automation, and reliability engineering.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card onClick={() => setSelectedProject(project)} className="h-full cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
                    <p className="mt-2 text-slate-600">{project.description}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-400" />
                </div>
                <div className="flex items-center gap-2 text-emerald-600 font-medium mb-4">
                  <Zap className="h-4 w-4" />
                  <span>{project.impact}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} title={selectedProject?.title || ''}>
          {selectedProject && (
            <div className="space-y-6 text-slate-700">
              <div>
                <h3 className="text-lg font-semibold text-slate-950 mb-2">Overview</h3>
                <p>{selectedProject.details.overview}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-950 mb-2">Key challenges</h3>
                <ul className="list-disc list-inside space-y-2">
                  {selectedProject.details.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-950 mb-2">Architecture</h3>
                <pre className="overflow-x-auto rounded-3xl bg-slate-100 p-4 text-sm text-slate-700">
                  {selectedProject.details.architecture}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-950 mb-2">Components</h3>
                <ul className="list-disc list-inside space-y-2">
                  {selectedProject.details.components.map((component, index) => (
                    <li key={index}>{component}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-950 mb-2">Outcomes</h3>
                <ul className="list-disc list-inside space-y-2">
                  {selectedProject.details.outcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-950 mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
