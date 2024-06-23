'use client';

import { motion } from 'framer-motion';
import { TransitionProps } from '@/components/Transitions/types';

export const ShowFooter = ({ className, children }: TransitionProps) => {
  return (
    <motion.footer
      className={className}
      initial={{ translateY: '100%', opacity: 0 }}
      animate={{ translateY: '0', opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.footer>
  );
};
