import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export function Card({ children, className = '', onClick, hover = true }: CardProps) {
  const baseClasses = 'bg-white border border-slate-200 rounded-[28px] p-6 shadow-sm';
  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-200' : '';

  if (onClick) {
    return (
      <motion.div
        className={`${baseClasses} ${hoverClasses} cursor-pointer ${className}`}
        onClick={onClick}
        whileHover={hover ? { scale: 1.02 } : {}}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      whileHover={hover ? { scale: 1.01 } : {}}
    >
      {children}
    </motion.div>
  );
}
