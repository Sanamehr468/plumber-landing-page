'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: 'fit' | 'full';
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  width = 'full',
}: RevealProps) {
  return (
    <div className={width === 'fit' ? 'inline-block' : 'w-full'}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
