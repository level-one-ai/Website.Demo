'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateIn from './AnimateIn';
import { pricingTiers, comparisonRows } from '@/data/siteData';

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
  gradient?: boolean;
}

function PricingCard({ tier, index }: { tier: Tier; index: number }) {
  const classes = ['pricing-card'];
  if (tier.featured) classes.push('featured');
  if (tier.gradient) classes.push('gradient');

  return (
    <AnimateIn direction="up" delay={0.15 + index * 0.1}>
      <div className={classes.join(' ')} style={{ height: '100%' }}>
        {tier.featured && (
          <div className="best-value-tag">Best Value</div>
        )}
        <h3 className="pricing-title">{tier.title}</h3>
        <p className="pricing-subtitle">{tier.subtitle}</p>
        <div>
          <span className="pricing-amount">{tier.price}</span>
          <span className="pricing-period">{tier.period}</span>
        </div>
        <div className="pricing-monthly">{tier.monthly}</div>
        <div className="pricing-commitment">{tier.commitment}</div>
        <div className="pricing-features-label">Features:</div>
        <div className="pricing-features">
          {tier.features.map((f) => (
            <div key={f} className="pricing-feature">{f}</div>
          ))}
        </div>
        <button className={`pricing-btn ${(tier.featured || tier.gradient) ? 'solid' : 'outline'}`}>
          {tier.btnText}
        </button>
      </div>
    </AnimateIn>
  );
}

export default function PricingSection() {
  const [compareOpen, setCompareOpen] = useState(false);

  return (
    <section id="pricing" className="pricing-section">
      <div className="section-inner section-inner-wide" style={{ textAlign: 'center' }}>
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

        <AnimateIn direction="up" delay={0.4}>
          <div style={{ marginTop: '2rem' }}>
            <button
              className="compare-plans-btn"
              onClick={() => setCompareOpen(!compareOpen)}
            >
              <span>Compare Plans</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  transform: compareOpen ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </button>
          </div>
        </AnimateIn>

        <AnimatePresence>
          {compareOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div className="comparison-table-wrap">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th className="comparison-feature-col">Feature</th>
                      <th>The Prototype</th>
                      <th className="comparison-featured">The Pilot</th>
                      <th>The Architecture</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.feature}>
                        <td className="comparison-feature-name">{row.feature}</td>
                        <td>{row.proto}</td>
                        <td className="comparison-featured">{row.pilot}</td>
                        <td>{row.arch}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="pricing-transparency">
                  <div className="pricing-transparency-title">Commercial Transparency</div>
                  <p className="pricing-transparency-text">
                    API costs are billed directly to your accounts—you pay zero markup and retain full data ownership.
                    The Operations fee covers infrastructure management, performance monitoring, and continuous ROI optimization.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
