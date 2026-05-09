import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  children: ReactNode;
  isLast?: boolean;
}

export function TimelineItem({ date, title, company, children, isLast = false }: TimelineItemProps) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-slate-900"></div>
        {!isLast && <div className="w-0.5 h-16 bg-slate-300 dark:bg-slate-600 mt-2"></div>}
      </div>
      <div className="ml-6 pb-8 flex-1">
        <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">{date}</div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
        <div className="text-indigo-600 font-medium mb-4">{company}</div>
        {children}
      </div>
    </div>
  );
}

interface TimelineProps {
  children: ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div className="space-y-0">
      {children}
    </div>
  );
}