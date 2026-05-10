'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Cloud, Zap, Server, Sparkles } from 'lucide-react';

const aiCapabilities = [
  {
    title: 'AI Toolchain Integration',
    description: 'Connected modern AI tooling with engineering workflows using GitHub Copilot, VSCode Copilot, Claude Code, ChatGPT, Grok, Glean, and Cursor.',
  },
  {
    title: 'MCP & Agent Orchestration',
    description: 'Built multi-agent synchronization and MCP server workflows for parallel AI analysis, prompt-driven automation, and LLM orchestration.',
  },
  {
    title: 'AI-Enhanced Development',
    description: 'Accelerated software delivery with AI-assisted code generation, prompt engineering, and smart diagnostics across cloud-native systems.',
  },
  {
    title: 'Search & Retrieval',
    description: 'Applied Deepseek and semantic search patterns for AI-powered knowledge discovery and developer insights.',
  },
];

const tools = [
  'Glean',
  'Grok',
  'Claude Code',
  'Gemini CLI',
  'Deepseek',
  'Cursor',
  'ChatGPT',
  'VSCode Copilot',
  'GitHub Copilot',
  'MCP Server',
  'LLM Orchestration',
  'Agent Synchronization',
  'Prompt Engineering',
];

export function AI() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-emerald-600 mb-4">AI Engineering</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-950">
            AI toolchain, agent orchestration, and developer automation.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-700">
            I use modern AI platforms and connectivity patterns to make software engineering faster, safer, and more scalable. My work spans prompt engineering, multi-agent synchronization, AI-driven observability, and enterprise-grade AI tooling integration.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {aiCapabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4 text-emerald-700">
                <Sparkles className="h-5 w-5" />
                <h2 className="text-xl font-semibold text-slate-950">{capability.title}</h2>
              </div>
              <p className="text-slate-600 leading-7">{capability.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-slate-700">
            <Code className="h-5 w-5 text-emerald-600" />
            <h2 className="text-xl font-semibold">AI tools and platforms</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {tools.map((tool) => (
              <div key={tool} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
                {tool}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="h-5 w-5 text-emerald-300" />
              <h3 className="text-lg font-semibold">Cloud + AI orchestration</h3>
            </div>
            <p className="text-slate-200 leading-7">
              Integrated AI workflows with Azure and AWS infrastructure for secure, scalable delivery of intelligent engineering services.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Server className="h-5 w-5 text-emerald-300" />
              <h3 className="text-lg font-semibold">MCP server connectivity</h3>
            </div>
            <p className="text-slate-200 leading-7">
              Built systems that connect MSP servers, agent controllers, and developer tooling to automate multi-agent analysis and AI-assisted development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
