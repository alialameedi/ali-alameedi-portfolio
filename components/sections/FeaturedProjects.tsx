'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from '../Card';
import { Modal } from '../Modal';
import { ExternalLink, Code, Zap } from 'lucide-react';

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
    description: 'Multi-cluster High Performance Computing platform supporting CAE workloads',
    impact: '20,000+ servers across 6+ HPC clusters',
    technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'IBM LSF', 'Azure', 'Linux'],
    details: {
      overview: 'Led the design and implementation of a comprehensive HPC platform that supports General Motors\' engineering simulation workloads across multiple data centers.',
      challenges: [
        'Orchestrating job scheduling across geographically distributed clusters',
        'Ensuring high availability and fault tolerance for critical engineering workflows',
        'Integrating with legacy CAE applications while maintaining performance',
        'Scaling infrastructure to support thousands of concurrent simulations'
      ],
      architecture: `
System Architecture:
├── Job Orchestration Layer
│   ├── IBM LSF Scheduler Integration
│   ├── Queue Management & Prioritization
│   └── Multi-cluster Coordination
├── Monitoring & Observability
│   ├── Real-time Performance Metrics
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
    └── Health Monitoring
      `,
      components: [
        'Job scheduler layer with IBM LSF integration',
        'Monitoring layer with automated health checks',
        'API layer with Spring Boot microservices',
        'UI dashboards with React and TypeScript',
        'Automation systems resolving 600+ server issues monthly'
      ],
      outcomes: [
        'Reduced system downtime through proactive monitoring',
        'Improved MTTR from hours to minutes',
        'Enabled support for 50+ CAE applications',
        'Automated resolution of infrastructure issues'
      ]
    }
  },
  {
    id: 'sre-automation',
    title: 'SRE Automation Systems',
    description: 'Automated monitoring and remediation for infrastructure reliability',
    impact: '97% uptime, 600+ automated issue resolutions',
    technologies: ['Datadog', 'Python', 'Ansible', 'Prometheus', 'Grafana'],
    details: {
      overview: 'Developed comprehensive SRE automation systems for monitoring, alerting, and automated remediation of infrastructure issues.',
      challenges: [
        'Creating intelligent alerting that reduces noise while catching real issues',
        'Building automated remediation workflows that are safe and reliable',
        'Integrating with existing monitoring tools and processes',
        'Scaling automation to handle thousands of servers'
      ],
      architecture: `
SRE Automation Stack:
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
    └── Performance Analytics
      `,
      components: [
        'Datadog-based monitoring with custom dashboards',
        'Automated alerting with intelligent thresholds',
        'Ansible automation for server remediation',
        'Python scripts for complex logic and integrations'
      ],
      outcomes: [
        'Achieved 97% system uptime through proactive monitoring',
        'Automated resolution of 600+ infrastructure issues monthly',
        'Reduced manual intervention by 80%',
        'Improved incident response time significantly'
      ]
    }
  },
  {
    id: 'dev-tools',
    title: 'Internal Developer Productivity Tools',
    description: 'Custom tools and platforms for engineering team efficiency',
    impact: '25% reduction in administrative overhead',
    technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'Docker'],
    details: {
      overview: 'Built internal tools and platforms to improve developer productivity and reduce administrative overhead.',
      challenges: [
        'Understanding complex internal workflows and pain points',
        'Building tools that integrate seamlessly with existing systems',
        'Ensuring security and compliance in internal tools',
        'Gaining adoption across large engineering teams'
      ],
      architecture: `
Developer Tools Platform:
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
    └── Adoption Tracking
      `,
      components: [
        'React-based internal dashboards and tools',
        'Node.js backend services for automation',
        'Python scripts for data processing and analysis',
        'Docker containers for consistent deployments'
      ],
      outcomes: [
        'Reduced administrative overhead by 25%',
        'Improved developer onboarding time',
        'Increased tool adoption across engineering teams',
        'Enhanced collaboration and knowledge sharing'
      ]
    }
  },
  {
    id: 'job-api',
    title: 'Distributed Job Scheduling APIs',
    description: 'RESTful APIs for managing distributed computing workloads',
    impact: 'Scalable job orchestration for 50+ applications',
    technologies: ['Java', 'Spring Boot', 'REST', 'Kubernetes', 'Redis'],
    details: {
      overview: 'Designed and implemented RESTful APIs for managing distributed job scheduling and orchestration across HPC clusters.',
      challenges: [
        'Handling concurrent job submissions and resource allocation',
        'Ensuring API reliability under high load',
        'Maintaining backward compatibility with legacy systems',
        'Implementing proper authentication and authorization'
      ],
      architecture: `
Job Scheduling API Architecture:
├── API Gateway Layer
│   ├── Request Routing
│   ├── Authentication & Authorization
│   └── Rate Limiting
├── Job Management Service
│   ├── Job Submission & Tracking
│   ├── Resource Allocation
│   └── Queue Management
├── Scheduler Integration
│   ├── IBM LSF Interface
│   ├── Job Status Monitoring
│   └── Result Collection
└── Data Layer
    ├── Redis Caching
    ├── Job Metadata Storage
    └── Audit Logging
      `,
      components: [
        'Spring Boot REST APIs with comprehensive documentation',
        'Redis-based caching for performance optimization',
        'Kubernetes deployment with auto-scaling',
        'Comprehensive logging and monitoring'
      ],
      outcomes: [
        'Enabled scalable job orchestration for 50+ applications',
        'Improved API response times through caching',
        'Enhanced reliability with proper error handling',
        'Simplified integration for development teams'
      ]
    }
  }
];

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Key engineering projects showcasing technical expertise and impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card onClick={() => setSelectedProject(project)} className="h-full cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-slate-400" />
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>

                <div className="flex items-center mb-4">
                  <Zap className="w-4 h-4 text-indigo-600 mr-2" />
                  <span className="text-sm font-medium text-indigo-600">
                    {project.impact}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-md">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title || ''}
        >
          {selectedProject && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Overview
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {selectedProject.details.overview}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Key Challenges
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                  {selectedProject.details.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  System Architecture
                </h3>
                <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm text-slate-700 dark:text-slate-300 overflow-x-auto">
                  {selectedProject.details.architecture}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Key Components
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                  {selectedProject.details.components.map((component, index) => (
                    <li key={index}>{component}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Outcomes & Impact
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                  {selectedProject.details.outcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm"
                    >
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