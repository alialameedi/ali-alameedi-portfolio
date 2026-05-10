'use client';

import { motion } from 'framer-motion';
import { Card } from '../Card';
import { Accordion } from '../Accordion';
import { GraduationCap, Award } from 'lucide-react';

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  icon: string;
  coursework: string[];
  activities: string[];
  awards: string[];
}

const educationItems: EducationItem[] = [
  {
    id: 'osu',
    institution: 'Oregon State University',
    degree: 'Bachelor of Science in Computer Science',
    period: '2021 — 2023',
    icon: '🎓',
    coursework: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Computer Networks',
      'Database Systems',
      'Software Engineering',
      'Machine Learning',
      'Distributed Systems',
      'Computer Architecture',
    ],
    activities: [
      'Computer Science Student Association',
      'Hackathon Organizer',
      'Teaching Assistant for CS courses',
      'Research Assistant in Distributed Systems Lab',
    ],
    awards: ['Summa Cum Laude', 'Dean’s List', 'Outstanding Senior in Computer Science'],
  },
  {
    id: 'uw',
    institution: 'University of Washington',
    degree: 'Bachelor of Science in Public Health and Global Health',
    period: '2015 — 2019',
    icon: '🌍',
    coursework: [
      'Public Health Systems',
      'Global Health Policy',
      'Epidemiology',
      'Health Economics',
      'Statistics for Health Sciences',
      'International Development',
      'Cultural Anthropology',
    ],
    activities: [
      'Global Health Club President',
      'Community Health Outreach Volunteer',
      'International Health Internship Coordinator',
      'Research on healthcare access in developing countries',
    ],
    awards: ['Global Health Leadership Award', 'Community Service Scholarship', 'Research Grant Recipient'],
  },
];

export function Education() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-600 mb-3">Education</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-950">Academic foundation for engineering and health systems.</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Degrees that combine technical software engineering with systems thinking and global health awareness.
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950">{item.institution}</h3>
                      <p className="text-slate-600">{item.degree}</p>
                    </div>
                  </div>
                  <div className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
                    {item.period}
                  </div>
                </div>

                <Accordion title="Key coursework">
                  <div className="grid gap-2 md:grid-cols-2">
                    {item.coursework.map((course) => (
                      <div key={course} className="flex items-start gap-3 text-slate-600">
                        <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </Accordion>

                <Accordion title="Activities">
                  <div className="space-y-2 text-slate-600">
                    {item.activities.map((activity) => (
                      <div key={activity} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </Accordion>

                <Accordion title="Awards & honors">
                  <div className="space-y-2 text-slate-600">
                    {item.awards.map((award) => (
                      <div key={award} className="flex items-center gap-3">
                        <Award className="h-4 w-4 text-emerald-600" />
                        <span>{award}</span>
                      </div>
                    ))}
                  </div>
                </Accordion>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
