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
  // FIX: Previously Reveal rendered an extra outer div and put className
  // (including lg:col-span-6, lg:col-span-7, lg:col-span-5 and flex) on an
  // inner motion.div. In a Tailwind grid, only the direct child is a grid
  // item, so the col-span classes were ignored and the Areas and Request
  // panels collapsed to a single narrow grid column, with their content
  // wrapping vertically and overlapping. Now the motion.div IS the grid
  // item, so col-span, flex and relative classes apply to it directly.
  // Viewport margin was also relaxed from -50px to 0px with amount 0.15,
  // so tall panels animate in as soon as they are even partly visible,
  // instead of staying at opacity 0.
  const base = width === 'fit' ? 'inline-block' : 'w-full h-full';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px', amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`${base} ${className}`}
    >
      {children}
    </motion.div>
  );
}
