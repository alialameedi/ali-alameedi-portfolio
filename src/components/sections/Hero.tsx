'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Server, Activity, Wrench } from 'lucide-react';

const EMAIL_ADDRESS = 'alialameedi@outlook.com';

export function Hero() {
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setToast({ type: 'success', message: `Copied ${EMAIL_ADDRESS}` });
    } catch (error) {
      setToast({ type: 'error', message: 'Copy failed. Please try again.' });
    }

    window.setTimeout(() => {
      setToast(null);
    }, 2600);
  };

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(34,128,78,0.16),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(16,78,54,0.14),_transparent_32%)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-700 mb-4">Java, Cloud, Distributed Systems, AI Tooling, and Platform Engineering</p>
            <h1 className="text-5xl md:text-6xl font-semibold text-slate-950 leading-tight mb-6">
              Ali Alameedi
            </h1>
            <p className="max-w-2xl text-lg text-slate-600 mb-8">
              Software Engineer building scalable backend systems, distributed services, cloud-native platform architecture, and AI-enabled developer workflows.
            </p>

            <div className="grid gap-4 sm:grid-cols-3 mb-10">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover-lift hover-glow transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Server className="h-5 w-5 text-emerald-700" />
                  <p className="text-2xl font-semibold text-slate-950">20k+</p>
                </div>
                <p className="mt-2 text-sm text-slate-500">Servers supported across HPC clusters</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover-lift hover-glow transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-5 w-5 text-emerald-700" />
                  <p className="text-2xl font-semibold text-slate-950">97%</p>
                </div>
                <p className="mt-2 text-sm text-slate-500">Platform availability and operations reliability</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover-lift hover-glow transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="h-5 w-5 text-emerald-700" />
                  <p className="text-2xl font-semibold text-slate-950">50+</p>
                </div>
                <p className="mt-2 text-sm text-slate-500">CAE applications and engineering workflows supported</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-3 rounded-full border border-emerald-300 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-100 hover:text-emerald-950 hover:shadow-md"
                >
                  <FaEnvelope className="h-5 w-5" />
                  {EMAIL_ADDRESS}
                </button>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/alialameedi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 hover:scale-110 hover:shadow-lg"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ali-alameedi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 hover:scale-110 hover:shadow-lg"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
              {toast && (
                <div
                  className={`inline-flex rounded-3xl border px-4 py-3 text-sm shadow-sm ${
                    toast.type === 'success'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                      : 'border-rose-200 bg-rose-50 text-rose-900'
                  }`}
                >
                  {toast.message}
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
          >
            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src="/images/ali-alameedi.jpeg"
                alt="Ali Alameedi"
                width={780}
                height={780}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 text-slate-700">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-700 mb-2">Hello</p>
              <h2 className="text-2xl font-semibold text-slate-950 mb-3">A portfolio built around software engineering and scalable systems.</h2>
              <p className="text-base leading-7">
                I deliver Java and Spring Boot services, cloud platform automation, distributed system reliability, and backend engineering at enterprise scale.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
