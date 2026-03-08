'use client';

import AnimateIn from './AnimateIn';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="section-inner">
        <AnimateIn direction="up" style={{ textAlign: 'center' }}>
          <div className="section-num">
            <span className="pulse" /> 03 — The Entity
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1} style={{ textAlign: 'center' }}>
          <h2 className="section-title">
            Edinburgh infrastructure.
            <br />
            National deployment.
          </h2>
        </AnimateIn>

        <div className="about-layout" style={{ marginTop: '2.5rem' }}>
          <AnimateIn direction="left" delay={0.2}>
            <div className="about-photo-placeholder about-photo-small">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="12" cy="8" r="4" />
                <path d="M20 21a8 8 0 00-16 0" />
              </svg>
              <span>[ Level One HQ ]</span>
            </div>
          </AnimateIn>

          <AnimateIn direction="right" delay={0.3}>
            <div className="about-content about-content-box">
              <h3 className="about-name">Level One</h3>
              <div className="about-role">Premier Systems Partner</div>
              <p>
                Based in Edinburgh, we help local firms increase revenue and reduce costs,
                providing the same systems we deploy for leaders across Scotland and the UK.
              </p>
              <p>
                We specialize in <strong>Logic Trains</strong>—deterministic workflows that
                execute without human input. Our infrastructure replaces cost centers with profit
                generators.
              </p>
              <p>
                Whether you manage a trade operation, professional practice, or retail portfolio,
                the outcome is identical: increased revenue, reduced overhead, and operational
                capacity to scale.
              </p>
              <div className="about-tags">
                <span className="about-tag hl">Revenue Growth</span>
                <span className="about-tag hl">Cost Reduction</span>
                <span className="about-tag hl">Operational Efficiency</span>
                <span className="about-tag">Systems Architecture</span>
                <span className="about-tag">Digital Infrastructure</span>
                <span className="about-tag">Growth Systems</span>
                <span className="about-tag">High-Growth Business</span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
