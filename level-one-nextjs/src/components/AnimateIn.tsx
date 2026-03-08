'use client';

import { useRef } from 'react';
import { motion, useInView, Variant } from 'framer-motion';

type AnimDirection = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

const getInitial = (direction: AnimDirection): Variant => {
  switch (direction) {
    case 'up': return { opacity: 0, y: 50 };
    case 'down': return { opacity: 0, y: -50 };
    case 'left': return { opacity: 0, x: -60 };
    case 'right': return { opacity: 0, x: 60 };
    case 'scale': return { opacity: 0, scale: 0.85 };
    case 'fade': return { opacity: 0 };
  }
};

const getAnimate = (direction: AnimDirection): Variant => {
  switch (direction) {
    case 'up': case 'down': return { opacity: 1, y: 0 };
    case 'left': case 'right': return { opacity: 1, x: 0 };
    case 'scale': return { opacity: 1, scale: 1 };
    case 'fade': return { opacity: 1 };
  }
};

interface AnimateInProps {
  children: React.ReactNode;
  direction?: AnimDirection;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
}

export default function AnimateIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className,
  style,
  once = true,
}: AnimateInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={getInitial(direction)}
      animate={isInView ? getAnimate(direction) : getInitial(direction)}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
