'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';
import { services } from '@/data/siteData';

interface Service {
  num: string;
  title: string;
  pills: string[];
  img: string;
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <AnimateIn direction="up" delay={index * 0.1}>
      <div
        className="srv-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="srv-card-visual">
          <img
            src={service.img}
            alt={service.title}
            style={{
              filter: hovered ? 'brightness(1) saturate(1.2)' : 'brightness(0.35)',
              transform: hovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'all 0.5s ease',
            }}
          />
          {/* Title at top */}
          <div className="srv-card-title-top">
            <span className="pill-dot-white" /> {service.title}
          </div>
          <motion.div
            className="srv-pills"
            initial={false}
            animate={{ y: hovered ? 0 : 10, opacity: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.3 }}
          >
            {service.pills.map((pill) => (
              <div key={pill} className="srv-pill">
                <span className="pill-dot" /> {pill}
              </div>
            ))}
          </motion.div>

          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, transparent 40%, rgba(255,107,53,0.06) 50%, transparent 60%)',
              backgroundSize: '200% 200%',
              pointerEvents: 'none',
            }}
            animate={{
              backgroundPosition: hovered ? ['0% 0%', '100% 100%'] : '0% 0%',
            }}
            transition={{ duration: 1.2, repeat: hovered ? Infinity : 0, ease: 'linear' }}
          />
        </div>
      </div>
    </AnimateIn>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="section-inner section-inner-wide">
        <AnimateIn direction="up" style={{ textAlign: 'center' }}>
          <div className="section-num">
            <span className="pulse" /> 04 — Infrastructure Catalog
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1} style={{ textAlign: 'center' }}>
          <h2 className="section-title">
            Precision deployment.
            <br />
            Commercial outcomes.
          </h2>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.2} style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <p className="section-desc" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Four infrastructure pillars designed to increase revenue, reduce costs, and eliminate
            operational friction across your business.
          </p>
        </AnimateIn>

        <div className="services-grid services-grid-4col">
          {services.map((service, i) => (
            <ServiceCard key={service.num} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
