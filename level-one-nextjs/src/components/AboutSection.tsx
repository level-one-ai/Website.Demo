'use client';

import AnimateIn from './AnimateIn';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="section-inner section-inner-wide">
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

        <AnimateIn direction="up" delay={0.2}>
          <div className="about-card">
            {/* Left: quote icon + text */}
            <div className="about-card-text">
              <div className="about-quote-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor"/>
                </svg>
              </div>
              <p className="about-card-body">
                Based in Edinburgh, Level One deploys autonomous digital infrastructure for high-growth businesses across Scotland and the UK. We specialise in Logic Trains—deterministic workflows that replace cost centres with profit generators, delivering increased revenue, reduced overhead, and operational capacity to scale.
              </p>
              <div className="about-card-divider" />
              <div className="about-card-author">
                <div className="about-card-name">Level One</div>
                <div className="about-card-role">Premier Systems Partner</div>
              </div>
            </div>

            {/* Right: image placeholder */}
            <div className="about-card-img">
              <div className="about-card-img-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20 21a8 8 0 00-16 0" />
                </svg>
                <span>[ Level One HQ ]</span>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
