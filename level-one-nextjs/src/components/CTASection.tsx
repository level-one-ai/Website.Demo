'use client';

import AnimateIn from './AnimateIn';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <div className="glow-line" />

        <AnimateIn direction="up">
          <div className="section-num" style={{ textAlign: 'center', justifyContent: 'center' }}>
            <span className="pulse" /> 08 — Growth Audit
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Map your revenue infrastructure.
          </h2>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.2}>
          <p
            className="section-desc"
            style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}
          >
            Schedule a growth audit. We&apos;ll quantify where inefficiency costs you revenue or
            margin and map the deployment pathway to scalable growth.
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.3}>
          <div style={{ textAlign: 'center' }}>
            <button className="btn-primary">
              Book A Call{' '}
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 1l5 5-5 5" />
              </svg>
            </button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
