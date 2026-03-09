'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateIn from './AnimateIn';
import { hexSystems } from '@/data/siteData';

export default function FeaturesSection() {
  const [active, setActive] = useState(0);
  const current = hexSystems[active];

  return (
    <section id="features">
      <div className="section-inner section-inner-wide">
        <AnimateIn direction="up" style={{ textAlign: 'center' }}>
          <div className="section-num">
            <span className="pulse" /> 01 — Revenue Infrastructure
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1} style={{ textAlign: 'center' }}>
          <h2 className="section-title">
            Four systems.
            <br />
            One outcome: high-performance growth.
          </h2>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.2} style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <p className="section-desc" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            We install revenue infrastructure that increases acquisition, reduces overhead, and
            eliminates manual bottlenecks across your operations.
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.3}>
          {/* Tab bar */}
          <div className="feat-tabs">
            {hexSystems.map((sys, i) => (
              <button
                key={sys.key}
                className={`feat-tab ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="feat-tab-dot" />
                <span className="feat-tab-label">{sys.title}</span>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="feat-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                className="feat-panel-inner"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Image side */}
                <div className="feat-img-wrap">
                  <div className="feat-img-glow" />
                  <img src={current.img} alt={current.title} className="feat-img" />
                  <div className="feat-img-scanline" />
                </div>

                {/* Text side */}
                <div className="feat-text">
                  <div className="feat-text-header">
                    <span className="feat-text-tag">SYSTEM</span>
                    <span className="feat-text-status">
                      <span className="feat-status-dot" />
                      ACTIVE
                    </span>
                  </div>
                  <h3 className="feat-text-title">{current.title}</h3>
                  <div className="feat-labels">
                    {current.labels.map((l) => (
                      <span key={l} className="feature-label">{l}</span>
                    ))}
                  </div>
                  <p className="feat-text-desc">{current.desc}</p>
                  <div className="feat-text-divider" />
                  <button className="hex-card-viewmore">
                    View Full Specification{' '}
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 1l5 5-5 5" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
