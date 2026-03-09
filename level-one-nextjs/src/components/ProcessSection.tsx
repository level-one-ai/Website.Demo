'use client';

import { useState } from 'react';
import AnimateIn from './AnimateIn';
import { processPhases } from '@/data/siteData';

interface Phase {
  num: string;
  title: string;
  desc: string;
  img: string;
}

function ProcessCard({ phase, index }: { phase: Phase; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <AnimateIn direction="up" delay={0.2 + index * 0.2}>
      <div
        className="process-hex"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="process-hex-img">
          <img
            src={phase.img}
            alt={phase.title}
            style={{
              filter: hovered ? 'brightness(1)' : 'brightness(0.4)',
              transform: hovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'filter 0.5s ease, transform 0.5s ease',
            }}
          />
        </div>
        <div className="process-hex-overlay">
          <div className="step-label">{phase.num}</div>
          <h3>{phase.title}</h3>
          <p>{phase.desc}</p>
        </div>
      </div>
    </AnimateIn>
  );
}

export default function ProcessSection() {
  return (
    <section id="process" className="process-section">
      <div className="section-inner">
        <AnimateIn direction="up" style={{ textAlign: 'center' }}>
          <div className="section-num">
            <span className="pulse" /> 02 — Deployment Process
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1} style={{ textAlign: 'center' }}>
          <h2 className="section-title">
            Three phases.
            <br />
            Measurable commercial impact.
          </h2>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.15} style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <p className="section-desc" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            We follow a structured deployment protocol focused on revenue growth, cost reduction,
            and operational efficiency across Scotland and the UK.
          </p>
        </AnimateIn>

        <div className="process-hex-grid" style={{ marginTop: '4rem' }}>
          {processPhases.map((phase, i) => (
            <ProcessCard key={phase.title} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
