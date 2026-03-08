'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOGO_URL, menuLinks } from '@/data/siteData';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      if (!prev) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = 'auto';
      return !prev;
    });
  }, []);

  const handleLinkClick = useCallback((href: string) => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, []);

  return (
    <>
      <nav>
        <a
          href="#"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_URL} alt="Level One" />
          <span className="nav-logo-text">LEVEL ONE</span>
        </a>

        <button
          className={`hex-burger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <svg className="hex-border" viewBox="0 0 42 42">
            <polygon points="21,1 39,11 39,31 21,41 3,31 3,11" />
          </svg>
          <div className="burger-lines">
            <span />
            <span />
            <span />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-overlay open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {menuLinks.map((link, i) => (
              <motion.a
                key={link.name}
                className="menu-link"
                href={link.href}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                style={{ cursor: 'pointer' }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
