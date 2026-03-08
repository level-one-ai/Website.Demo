'use client';

import { useRef, useState } from 'react';
import AnimateIn from './AnimateIn';
import { processPhases } from '@/data/siteData';

function ProcessCard({ phase, index }: { phase: typeof processPhases[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
  };

  return (
    <AnimateIn direction="up" delay={index * 0.15}>
      <div
        ref={cardRef}
        className="process-hex"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out, border-color 0.4s ease',
        }}
      >
        <div className="process-hex-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={phase.img} alt={phase.title} />
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

        <AnimateIn direction="up" delay={0.2} style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <p className="section-desc" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            We follow a structured deployment protocol focused on revenue growth, cost reduction,
            and operational efficiency across Scotland and the UK.
          </p>
        </AnimateIn>

        <div className="process-hex-grid">
          {processPhases.map((phase, i) => (
            <ProcessCard key={phase.title} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
