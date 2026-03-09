'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateIn from './AnimateIn';
import { faqItems } from '@/data/siteData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="faq-section">
      <div className="section-inner">
        <AnimateIn direction="up" style={{ textAlign: 'center' }}>
          <div className="section-num">
            <span className="pulse" /> 06 — Common Questions
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1} style={{ textAlign: 'center' }}>
          <h2 className="section-title">Got Questions? We Have Answers.</h2>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.2} style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <p className="section-desc" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Straightforward answers to the questions we hear most from businesses exploring our
            infrastructure.
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.3}>
          <div className="faq-accordion">
            {faqItems.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="faq-acc-item">
                  <button
                    className={`faq-acc-header ${isOpen ? 'active' : ''}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                        flexShrink: 0,
                        color: isOpen ? 'var(--orange)' : 'var(--text-secondary)',
                      }}
                    >
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="faq-acc-answer">{item.a}</div>
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
