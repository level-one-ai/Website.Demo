'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateIn from './AnimateIn';
import { reviews } from '@/data/siteData';

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const move = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + reviews.length) % reviews.length);
    },
    []
  );

  const review = reviews[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="section-inner">
        <AnimateIn direction="up" style={{ textAlign: 'center' }}>
          <div className="section-num">
            <span className="pulse" /> Client Results
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1} style={{ textAlign: 'center' }}>
          <h2 className="section-title">What our clients say.</h2>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.2}>
          <div className="reviews-carousel">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="review-card review-card-centered">
                  <div className="review-stars">★★★★★</div>
                  <p className="review-text">&ldquo;{review.text}&rdquo;</p>
                  <div className="review-author-centered">
                    <div className="review-name">{review.name}</div>
                    <div className="review-role">{review.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="reviews-controls">
              <button className="reviews-arrow" onClick={() => move(-1)}>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 1L5 7l6 6" />
                </svg>
              </button>

              <div className="reviews-dots">
                {reviews.map((_, i) => (
                  <div
                    key={i}
                    className={`review-dot ${i === current ? 'active' : ''}`}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                  />
                ))}
              </div>

              <button className="reviews-arrow" onClick={() => move(1)}>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 1l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
