'use client';

import Link from 'next/link';
import { User, Target, Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Hero } from '../components/sections/Hero';

const cards = [
  { href: '/about', title: 'About', description: 'Who I am and how I work.', Icon: User },
  { href: '/focus', title: 'Focus', description: 'Core skills and engineering areas.', Icon: Target },
  { href: '/projects', title: 'Projects', description: 'Selected engineering work and impact.', Icon: Briefcase },
  { href: '/experience', title: 'Experience', description: 'Roles, timelines, and results.', Icon: Calendar },
  { href: '/education', title: 'Education', description: 'Academic foundation and degrees.', Icon: GraduationCap },
];

export default function Home() {
  return (
    <main className="bg-slate-50">
      <Hero />

      <section className="py-8 px-6 bg-gradient-to-br from-emerald-50 via-white to-lime-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {cards.map((card, index) => (
              <motion.div
                key={card.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={card.href}
                  className="group block rounded-[28px] border border-slate-200 bg-white/85 backdrop-blur-sm p-6 transition hover:-translate-y-1 hover:shadow-xl hover:border-emerald-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <card.Icon className="h-6 w-6 text-emerald-700 group-hover:text-emerald-900" />
                    <h3 className="text-xl font-semibold text-slate-950">{card.title}</h3>
                  </div>
                  <p className="text-slate-600">{card.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
