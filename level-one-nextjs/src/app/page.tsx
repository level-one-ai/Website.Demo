'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from '@/components/SplashScreen';
import ScrollCanvas from '@/components/ScrollCanvas';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import ReviewsSection from '@/components/ReviewsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <AnimatePresence>
        {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      </AnimatePresence>

      <ScrollCanvas scrollProgress={scrollProgress} />

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${scrollProgress * 100}%` }} />
      </div>

      <div className="grid-bg" />

      <Navigation />

      <div ref={mainRef}>
        <HeroSection />
        <FeaturesSection />
        <ProcessSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <FAQSection />
        <ReviewsSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
