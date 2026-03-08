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

  const inactiveItems = hexSystems.filter((_, i) => i !== active);

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
          <div className="hex-showcase">
            <div className="hex-showcase-hexes">
              {inactiveItems.map((sys) => {
                const originalIndex = hexSystems.indexOf(sys);
                return (
                  <motion.div
                    key={sys.key}
                    className="hex-small-item"
                    onClick={() => setActive(originalIndex)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={sys.img} alt={sys.title} />
                  </motion.div>
                );
              })}
              <div className="hex-large-wrap">
                <motion.img
                  key={current.key}
                  src={current.img}
                  alt={current.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <div
              ref={cardRef}
              className="hex-info-card"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={() => setCardGlow({ x: 0, y: 0, active: false })}
              style={{
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {cardGlow.active && (
                <div
                  style={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)',
                    left: cardGlow.x - 150,
                    top: cardGlow.y - 150,
                    pointerEvents: 'none',
                    transition: 'left 0.15s ease, top 0.15s ease',
                  }}
                />
              )}
              <motion.div
                key={current.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{ position: 'relative', zIndex: 1 }}
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
