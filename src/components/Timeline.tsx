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
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 ring-4 ring-white shadow-sm">
          <div className="h-2 w-2 rounded-full bg-white" />
        </div>
        {!isLast && <div className="mt-2 h-full w-px bg-slate-300" />}
      </div>
      <div className="flex-1 pb-8">
        <div className="text-sm text-slate-500 mb-1">{date}</div>
        <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
        <div className="text-emerald-600 font-medium mb-4">{company}</div>
        <div className="text-slate-600">{children}</div>
      </div>
    </div>
  );
}

interface TimelineProps {
  children: ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return <div className="space-y-6">{children}</div>;
}
