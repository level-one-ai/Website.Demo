'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOGO_URL, menuLinks, MenuSubsection } from '@/data/siteData';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<MenuSubsection[] | null>(null);
  const [submenuTitle, setSubmenuTitle] = useState('');

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      if (!prev) {
        document.body.style.overflow = 'hidden';
        setActiveSubmenu(null);
        setSubmenuTitle('');
      } else {
        document.body.style.overflow = 'auto';
      }
      return !prev;
    });
  }, []);

  const handleLinkClick = useCallback((href: string) => {
    setMenuOpen(false);
    setActiveSubmenu(null);
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, []);

  const openSubmenu = useCallback((subs: MenuSubsection[], title: string) => {
    setActiveSubmenu(subs);
    setSubmenuTitle(title);
  }, []);

  const closeSubmenu = useCallback(() => {
    setActiveSubmenu(null);
    setSubmenuTitle('');
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
            <AnimatePresence mode="wait">
              {activeSubmenu === null ? (
                <motion.div
                  key="main-menu"
                  className="menu-items-wrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {menuLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      className="menu-link"
                      href={link.href}
                      initial={{ opacity: 0, x: -60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -60, transition: { delay: (menuLinks.length - 1 - i) * 0.05, duration: 0.3 } }}
                      transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.subsections) {
                          openSubmenu(link.subsections, link.name);
                        } else {
                          handleLinkClick(link.href);
                        }
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      {link.name}
                      {link.subsections && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '0.5rem', opacity: 0.4 }}>
                          <path d="M6 3l5 5-5 5" />
                        </svg>
                      )}
                    </motion.a>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="sub-menu"
                  className="menu-items-wrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.a
                    className="menu-link menu-back-link"
                    href="#"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ delay: 0, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    onClick={(e) => {
                      e.preventDefault();
                      closeSubmenu();
                    }}
                  >
                    ← {submenuTitle}
                  </motion.a>
                  {activeSubmenu.map((sub, i) => (
                    <motion.a
                      key={sub.name}
                      className="menu-link menu-sub-link"
                      href={sub.href}
                      initial={{ opacity: 0, x: -60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -60, transition: { delay: (activeSubmenu.length - i) * 0.05, duration: 0.3 } }}
                      transition={{ delay: (i + 1) * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(sub.href);
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      {sub.name}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
