'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto';
      onComplete();
    }, 3200);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [onComplete]);

  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.8, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#050507',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 1.02] }}
        transition={{ duration: 3, times: [0, 0.2, 0.7, 1] }}
        style={{
          fontFamily: 'var(--heading)',
          fontSize: 'clamp(2rem, 6vw, 4.5rem)',
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '0.3em',
          textTransform: 'uppercase' as const,
        }}
      >
        LEVEL ONE
      </motion.div>
    </motion.div>
  );
}
