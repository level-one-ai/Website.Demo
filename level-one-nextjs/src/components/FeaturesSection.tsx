'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateIn from './AnimateIn';
import { hexSystems } from '@/data/siteData';

export default function FeaturesSection() {
  const [active, setActive] = useState<number | null>(null);

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
          <div className="feat-accordion">
            {hexSystems.map((sys, i) => {
              const isOpen = active === i;
              return (
                <div key={sys.key} className={`feat-acc-item-box ${isOpen ? 'open' : ''}`}>
                  <button
                    className={`feat-acc-header ${isOpen ? 'active' : ''}`}
                    onClick={() => setActive(isOpen ? null : i)}
                  >
                    <span className="feat-acc-title">{sys.title}</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="feat-acc-icon"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <path d="M4 7l5 5 5-5" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          className="feat-acc-body-bg"
                          style={{ backgroundImage: `url(${sys.img})` }}
                        >
                          <div className="feat-acc-body-overlay" />
                          <div className="feat-acc-body-content">
                            <div className="feat-acc-labels">
                              {sys.labels.map((l) => (
                                <span key={l} className="feature-label">{l}</span>
                              ))}
                            </div>
                            <p className="feat-acc-desc">{sys.desc}</p>
                            <button className="hex-card-viewmore">
                              View Full Specification{' '}
                              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 1l5 5-5 5" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
