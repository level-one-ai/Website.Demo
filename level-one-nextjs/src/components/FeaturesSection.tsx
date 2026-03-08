'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';
import { hexSystems } from '@/data/siteData';

export default function FeaturesSection() {
  const [active, setActive] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardGlow, setCardGlow] = useState({ x: 0, y: 0, active: false });

  const handleCardMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCardGlow({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

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
          <div className="features-layout">
            {/* Left: vertical stacked buttons */}
            <div className="features-nav">
              {hexSystems.map((sys, i) => (
                <button
                  key={sys.key}
                  className={`features-nav-btn ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <span className="features-nav-num">0{i + 1}</span>
                  <span className="features-nav-title">{sys.title}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" className="features-nav-arrow">
                    <path d="M4 1l5 5-5 5" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Right: info card with background image */}
            <div
              ref={cardRef}
              className="features-display"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={() => setCardGlow({ x: 0, y: 0, active: false })}
            >
              <motion.div
                key={current.key}
                className="features-display-bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ backgroundImage: `url(${current.img})` }}
              />
              <div className="features-display-overlay" />

              {cardGlow.active && (
                <div
                  style={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%)',
                    left: cardGlow.x - 150,
                    top: cardGlow.y - 150,
                    pointerEvents: 'none',
                    zIndex: 3,
                  }}
                />
              )}

              <motion.div
                key={current.key + '-content'}
                className="features-display-content"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="hex-info-labels">
                  {current.labels.map((l) => (
                    <span key={l} className="feature-label">{l}</span>
                  ))}
                </div>
                <h3 className="hex-info-title">{current.title}</h3>
                <p className="hex-info-desc">{current.desc}</p>
                <div className="hex-card-divider" />
                <button className="hex-card-viewmore">
                  View Full Specification{' '}
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 1l5 5-5 5" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
