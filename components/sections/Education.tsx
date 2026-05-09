'use client';

import { motion } from 'framer-motion';
import { Card } from '../Card';
import { Accordion } from '../Accordion';
import { GraduationCap, Award } from 'lucide-react';

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  gpa: string;
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
    degree: 'Computer Science',
    gpa: '3.97',
    period: '2014 — 2018',
    icon: '🎓',
    coursework: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Computer Networks',
      'Database Systems',
      'Software Engineering',
      'Machine Learning',
      'Distributed Systems',
      'Computer Architecture'
    ],
    activities: [
      'Computer Science Student Association',
      'Hackathon Organizer',
      'Teaching Assistant for CS Courses',
      'Research Assistant in Distributed Systems Lab'
    ],
    awards: [
      'Summa Cum Laude',
      'Dean\'s List (8 semesters)',
      'Outstanding Senior in Computer Science',
      'NSF Research Fellowship'
    ]
  },
  {
    id: 'uw',
    institution: 'University of Washington',
    degree: 'Global Health',
    gpa: '3.7',
    period: '2012 — 2014',
    icon: '🌍',
    coursework: [
      'Global Health Systems',
      'Epidemiology',
      'Public Health Policy',
      'Health Economics',
      'International Development',
      'Cultural Anthropology',
      'Statistics for Health Sciences'
    ],
    activities: [
      'Global Health Club President',
      'International Health Internship Coordinator',
      'Community Health Outreach Volunteer',
      'Research on Healthcare Access in Developing Countries'
    ],
    awards: [
      'Global Health Leadership Award',
      'Community Service Scholarship',
      'International Studies Honor Society',
      'Research Grant Recipient'
    ]
  }
];

export function Education() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Academic foundation in computer science and global health
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">{item.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {item.institution}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        {item.degree} • GPA: {item.gpa}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {item.period}
                    </div>
                  </div>
                </div>

                <Accordion title="Key Coursework">
                  <div className="grid md:grid-cols-2 gap-2">
                    {item.coursework.map((course) => (
                      <div key={course} className="flex items-center text-slate-600 dark:text-slate-300">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                        {course}
                      </div>
                    ))}
                  </div>
                </Accordion>

                <Accordion title="Extracurricular Activities">
                  <div className="space-y-2">
                    {item.activities.map((activity) => (
                      <div key={activity} className="flex items-center text-slate-600 dark:text-slate-300">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                        {activity}
                      </div>
                    ))}
                  </div>
                </Accordion>

                <Accordion title="Awards & Honors">
                  <div className="space-y-2">
                    {item.awards.map((award) => (
                      <div key={award} className="flex items-center text-slate-600 dark:text-slate-300">
                        <Award className="w-4 h-4 text-indigo-600 mr-3" />
                        {award}
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