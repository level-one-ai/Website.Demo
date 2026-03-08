'use client';

import { useRef, useState } from 'react';
import AnimateIn from './AnimateIn';
import { pricingTiers } from '@/data/siteData';

interface Tier {
  title: string;
  subtitle: string;
  price: string;
  period: string;
  monthly: string;
  commitment: string;
  features: string[];
  btnText: string;
  featured: boolean;
}

function PricingCard({ tier, index }: { tier: Tier; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <AnimateIn direction="up" delay={0.15 + index * 0.1}>
      <div
        ref={ref}
        className={`pricing-card ${tier.featured ? 'featured' : ''}`}
        onMouseMove={handleMouse}
        style={{
          background: tier.featured
            ? `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,107,53,0.06) 0%, var(--bg-card) 60%)`
            : `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.02) 0%, var(--bg-card) 60%)`,
        }}
      >
        <h3 className="pricing-title">{tier.title}</h3>
        <p className="pricing-subtitle">{tier.subtitle}</p>
        <div>
          <span className="pricing-amount">{tier.price}</span>
          <span className="pricing-period">{tier.period}</span>
        </div>
        <div className="pricing-monthly">{tier.monthly}</div>
        <div className="pricing-commitment">{tier.commitment}</div>
        <div className="pricing-features">
          {tier.features.map((f) => (
            <div key={f} className="pricing-feature">{f}</div>
          ))}
        </div>
        <button className={`pricing-btn ${tier.featured ? 'solid' : 'outline'}`}>
          {tier.btnText}
        </button>
      </div>
    </AnimateIn>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <AnimateIn direction="up">
          <div className="section-num" style={{ justifyContent: 'center' }}>
            <span className="pulse" /> 05 — Deployment Tiers
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1}>
          <h2 className="section-title">
            Three entry points.
            <br />
            Scalable revenue infrastructure.
          </h2>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.2}>
          <p className="section-desc" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Fixed-scope builds with transparent ROI. No retainers, no hourly billing. You own
            the infrastructure; we deliver measurable growth.
          </p>
        </AnimateIn>

        <div className="pricing-cards-row">
          {pricingTiers.map((tier, i) => (
            <PricingCard key={tier.title} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
