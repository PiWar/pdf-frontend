'use client';

import { motion } from 'framer-motion';
import { TransitionProps } from '@/components/Transitions/types';

export const ShowHeader = ({ children, className }: TransitionProps) => {
  return (
    <motion.header
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.header>
  );
};
