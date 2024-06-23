'use client';

import { TransitionProps } from '@/components/Transitions/types';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const ChangePage = ({ className, children }: TransitionProps) => {
  const [isFirstRender, setIsFirstRender] = useState(false);

  useEffect(() => {
    setIsFirstRender(true);
  }, []);

  return (
    <motion.div
      className={className}
      initial={{ translateY: 20, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: isFirstRender ? 0.5 : 0.3 }}
    >
      {children}
    </motion.div>
  );
};
