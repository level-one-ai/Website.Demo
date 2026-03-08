'use client';

import { motion } from 'framer-motion';
import { HERO_VIDEO_URL } from '@/data/siteData';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-video-bg">
        <video autoPlay loop muted playsInline>
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="pulse" /> Premier Systems Partner
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          The premier systems partner for high-growth business.
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          We eliminate administrative friction through the deployment of autonomous digital
          infrastructure. Based in Edinburgh; engineered for leaders across Scotland and the
          United Kingdom.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className="btn-primary">
            Book A Call{' '}
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 1l5 5-5 5" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
