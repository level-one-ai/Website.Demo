'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateIn from './AnimateIn';
import { faqItems } from '@/data/siteData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="faq-section">
      <div className="section-inner section-inner-wide">
        <div className="faq-layout">
          {/* Left column — heading */}
          <div className="faq-left">
            <AnimateIn direction="up">
              <div className="section-num">
                <span className="pulse" /> 06 — Common Questions
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.1}>
              <h2 className="section-title">
                Got Questions?<br />We Have Answers.
              </h2>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.2}>
              <p className="section-desc">
                Straightforward answers to the questions we hear most from businesses exploring our
                infrastructure.
              </p>
            </AnimateIn>
          </div>

          {/* Right column — accordion */}
          <div className="faq-right">
            <AnimateIn direction="up" delay={0.3}>
              <div className="faq-accordion">
                {faqItems.map((item, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div key={i} className={`faq-acc-item ${isOpen ? 'open' : ''}`}>
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
                            <div className="faq-acc-answer-box">
                              <p>{item.a}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
